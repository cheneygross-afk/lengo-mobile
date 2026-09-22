import type { Lesson } from "./types";

// The hidden Japanese track's third grammar module: B1, building on ja-a2.ts's
// 9 lessons (te-form, past tense, potential and たい, giving and receiving,
// plain-form noun modification and casual register). Twelve lessons, one per
// curriculum unit, each covering five patterns plus a dialogue, a reading, the
// unit's kanji and key vocabulary, and speaking prompts. Kept in its own file
// for the same reason as ja-a1.ts and ja-a2.ts -- a clean, removable unit
// reusing the shared Lesson/Exercise/LessonSection shape (see the "JA-B1"
// branch on Lesson["level"] in ./types.ts). No "translate" exercises here
// either. The full kanji, vocabulary, checkpoint and grammar-reconciliation
// data behind this module lives in data/ja-b1/.
export const JA_B1_LESSONS: Lesson[] = [
  {
    "slug": "changes-and-decisions",
    "level": "JA-B1",
    "number": 1,
    "title": "Changes and Decisions",
    "summary": "Say how your abilities and habits have changed, what you decided yourself, and what was decided for you, with ようになる, ようにする, ことにする, ことになる and ことになっている.",
    "duration": "45 min",
    "sections": [
      {
        "heading": "What This Lesson Covers",
        "body": [
          "Say how your abilities and habits have changed, what you decided yourself, and what was decided for you, with ようになる, ようにする, ことにする, ことになる and ことになっている.",
          "By the end of this lesson you will be able to: (1) Describe an ability or habit that has changed over time.  (2) Say what they decided, and what others or circumstances decided for them.  (3) Explain a rule or custom at a workplace or school.",
          "Every lesson in this module follows the same path: a short dialogue that uses the patterns, one section per pattern with a quick check, a section on choosing between the patterns, a reading passage, and then the kanji and vocabulary that go with the unit."
        ]
      },
      {
        "heading": "Dialogue: Changes and Decisions",
        "body": [
          "Read the conversation once for the gist, then again line by line. Each line comes with romaji and an English gloss. Watch for the patterns in this lesson as they appear in natural speech; the sections that follow take them one at a time."
        ],
        "examples": [
          {
            "es": "田中：最近、朝早く来るようになりましたね。",
            "en": "Tanaka: saikin, asa hayaku kuru you ni narimashita ne. -- Tanaka: You've been coming in early lately, haven't you?"
          },
          {
            "es": "リー：ええ。健康のために、早く起きるようにしているんです。",
            "en": "Lee: ee. kenkou no tame ni, hayaku okiru you ni shite iru n desu. -- Lee: Yes. For my health, I've been making a point of getting up early."
          },
          {
            "es": "田中：すごいですね。",
            "en": "Tanaka: sugoi desu ne. -- Tanaka: That's impressive."
          },
          {
            "es": "リー：それに、来月からジムにも通うことにしました。",
            "en": "Lee: sore ni, raigetsu kara jimu ni mo kayou koto ni shimashita. -- Lee: On top of that, I've decided to start going to the gym next month."
          },
          {
            "es": "田中：私も何か始めたいなあ。あ、そういえば、来年から大阪で働くことになりました。",
            "en": "Tanaka: watashi mo nan ka hajimetai naa. a, sou ieba, rainen kara Osaka de hataraku koto ni narimashita. -- Tanaka: I'd like to start something too. Oh, by the way, it's been decided that I'll work in Osaka from next year."
          },
          {
            "es": "リー：えっ、本当ですか。おめでとうございます。",
            "en": "Lee: e, hontou desu ka. omedetou gozaimasu. -- Lee: Oh, really? Congratulations."
          }
        ]
      },
      {
        "heading": "～ようになる: A change over time",
        "body": [
          "Core idea: A change over time: begin to be able to, or begin to do.",
          "How to build it: Dictionary form or ない-form + ようになる (できる → できるようになる). The negative is usually ～なくなる (見なくなる).",
          "It describes a change that has happened or is happening, not a one-time decision. ようになりました reports a completed change: 'I have come to be able to...' 見なくなりました is the negative counterpart: 'I no longer watch.'"
        ],
        "examples": [
          {
            "es": "毎日練習したので、日本語で電話ができるようになりました。",
            "en": "mainichi renshuu shita no de, nihongo de denwa ga dekiru you ni narimashita. -- Because I practiced every day, I can now make phone calls in Japanese."
          },
          {
            "es": "最近、朝早く起きられるようになりました。",
            "en": "saikin, asa hayaku okirareru you ni narimashita. -- Lately I have become able to get up early in the morning."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "毎日練習したので、日本語で電話が（　）。 (Because I practiced every day, I have become able to make phone calls in Japanese.)",
            "options": [
              "できるようにしました",
              "できることになりました",
              "できることにしています",
              "できるようになりました"
            ],
            "correctIndex": 3,
            "explanation": "A change in ability over time takes ～ようになる."
          }
        ]
      },
      {
        "heading": "～ようにする: Make an effort to do something regularly",
        "body": [
          "Core idea: Make an effort to do something regularly.",
          "How to build it: Dictionary form or ない-form + ようにする (早く起きるようにする).",
          "It means making an effort to do, or not do, something as a habit. ようにしている is the everyday way to say 'I try to...' or 'I make a point of...' It stresses ongoing effort, not a single choice."
        ],
        "examples": [
          {
            "es": "健康のために、毎朝早く起きるようにしています。",
            "en": "kenkou no tame ni, maiasa hayaku okiru you ni shite imasu. -- For my health, I make a point of getting up early every morning."
          },
          {
            "es": "毎日、日本語のニュースを見るようにしています。",
            "en": "mainichi, nihongo no nyuusu o miru you ni shite imasu. -- I make a point of watching Japanese news every day."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "健康のために、なるべく歩く（　）しています。 (For my health, I make a point of walking when I can.)",
            "options": [
              "ことが",
              "はずに",
              "ように",
              "ばかりに"
            ],
            "correctIndex": 2,
            "explanation": "An ongoing effort is ～ようにしている."
          }
        ]
      },
      {
        "heading": "～ことにする: The speaker decides",
        "body": [
          "Core idea: The speaker decides.",
          "How to build it: Dictionary form or ない-form + ことにする (通うことにする).",
          "It marks the speaker's own decision. ことにしました means 'I decided to...' (a completed choice), while ことにしている says the decision now stands as your rule or habit."
        ],
        "examples": [
          {
            "es": "来月からジムに通うことにしました。",
            "en": "raigetsu kara jimu ni kayou koto ni shimashita. -- I decided to start going to the gym next month."
          },
          {
            "es": "今年から、自分で料理を作ることにしました。",
            "en": "kotoshi kara, jibun de ryouri o tsukuru koto ni shimashita. -- I decided to cook for myself starting this year."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "自分で考えて、来月から毎朝ジョギングを（　）。 (After thinking it over myself, I decided to jog every morning from next month.)",
            "options": [
              "することにしました",
              "することになりました",
              "するようになりました",
              "することになっています"
            ],
            "correctIndex": 0,
            "explanation": "A decision the speaker makes is ～ことにする."
          }
        ]
      },
      {
        "heading": "～ことになる: Decided by others, or by circumstances",
        "body": [
          "Core idea: Decided by others, or by circumstances.",
          "How to build it: Dictionary form or ない-form + ことになる, usually as ことになりました.",
          "It reports that something has been decided by others, by a rule or by circumstances. Because it sounds less like your own choice, Japanese speakers use it even for personal news such as 結婚することになりました."
        ],
        "examples": [
          {
            "es": "来年、大阪で働くことになりました。",
            "en": "rainen, Osaka de hataraku koto ni narimashita. -- It has been decided that I will work in Osaka next year."
          },
          {
            "es": "来月から、東京の本社に移ることになりました。",
            "en": "raigetsu kara, Tokyo no honsha ni utsuru koto ni narimashita. -- It has been decided that I will move to the Tokyo head office next month."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "会社の命令で、来年から大阪で（　）。 (By company order, it has been decided that I will work in Osaka from next year.)",
            "options": [
              "働くことにしました",
              "働くようにしました",
              "働くことになりました",
              "働くようになりました"
            ],
            "correctIndex": 2,
            "explanation": "A decision made by others is ～ことになる."
          }
        ]
      },
      {
        "heading": "～ことになっている: A rule, custom or fixed plan",
        "body": [
          "Core idea: A rule, custom or fixed plan.",
          "How to build it: Dictionary form or ない-form + ことになっている.",
          "This states a rule, custom or fixed plan: 'it is arranged that...' It is what ことになる becomes once the decision has settled into a standing arrangement. The subject is usually a group, not the speaker."
        ],
        "examples": [
          {
            "es": "この会社では、毎朝ミーティングをすることになっています。",
            "en": "kono kaisha de wa, maiasa miitingu o suru koto ni natte imasu. -- At this company, it is the rule to hold a meeting every morning."
          },
          {
            "es": "図書館では、静かにすることになっています。",
            "en": "toshokan de wa, shizuka ni suru koto ni natte imasu. -- At the library, you are supposed to be quiet."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "この会社では、社員は毎朝八時に（　）。 (At this company, employees are supposed to arrive at eight every morning.)",
            "options": [
              "来ることになっています",
              "来るようにしました",
              "来ることにしました",
              "来るようになりました"
            ],
            "correctIndex": 0,
            "explanation": "A rule or custom is ～ことになっている."
          }
        ]
      },
      {
        "heading": "Choosing Between the Patterns",
        "body": [
          "The main contrast is who decided. ことにする is the speaker's own decision, ことになる is someone else's or circumstance's, and ようにする is an ongoing effort, not a one-time decision. The negative form ～なくなる (最近、テレビを見なくなりました, I have stopped watching TV lately) is taught with ようになる."
        ],
        "examples": [
          {
            "es": "最近、テレビを見なくなりました。",
            "en": "saikin, terebi o minaku narimashita. -- I have stopped watching TV lately."
          }
        ]
      },
      {
        "heading": "Reading Practice",
        "body": [
          "Read the passage once without stopping (153 characters), then again slowly, checking each sentence against its gloss. Try to spot which pattern from this lesson is behind each sentence before you answer the questions."
        ],
        "examples": [
          {
            "es": "一年前、私は料理が全然できませんでした。",
            "en": "ichi nen mae, watashi wa ryouri ga zenzen dekimasen deshita. -- A year ago, I couldn't cook at all."
          },
          {
            "es": "毎日コンビニで弁当を買っていました。",
            "en": "mainichi konbini de bento o katte imashita. -- I bought a boxed lunch at the convenience store every day."
          },
          {
            "es": "でも、健康のために、自分で作ることにしました。",
            "en": "de mo, kenkou no tame ni, jibun de tsukuru koto ni shimashita. -- But for my health, I decided to cook for myself."
          },
          {
            "es": "最初は失敗が多かったですが、毎日続けたので、簡単な料理ならできるようになりました。",
            "en": "saisho wa shippai ga ookatta desu ga, mainichi tsuzuketa no de, kantan na ryouri nara dekiru you ni narimashita. -- I made a lot of mistakes at first, but because I kept at it every day, I became able to make simple dishes."
          },
          {
            "es": "今は、週に三回は自分で作るようにしています。",
            "en": "ima wa, shuu ni san kai wa jibun de tsukuru you ni shite imasu. -- Now I make a point of cooking for myself three times a week."
          },
          {
            "es": "来月から、友達に料理を教えることになりました。",
            "en": "raigetsu kara, tomodachi ni ryouri o oshieru koto ni narimashita. -- From next month, it has been arranged that I will teach a friend to cook."
          },
          {
            "es": "楽しみです。",
            "en": "tanoshimi desu. -- I'm looking forward to it."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "What did the writer decide to do a year ago?",
            "options": [
              "Cook for themselves",
              "Teach cooking",
              "Open a restaurant",
              "Move to a new city"
            ],
            "correctIndex": 0,
            "explanation": "The text says the writer decided to cook for themselves."
          },
          {
            "type": "multiple-choice",
            "question": "Why did the writer decide this?",
            "options": [
              "Because of a new job",
              "To save money",
              "For their health",
              "Because a friend asked"
            ],
            "correctIndex": 2,
            "explanation": "The reason given is health."
          },
          {
            "type": "multiple-choice",
            "question": "What has been decided for next month?",
            "options": [
              "The writer will teach a friend to cook",
              "The writer will join a cooking school",
              "The writer will move house",
              "The writer will stop cooking"
            ],
            "correctIndex": 0,
            "explanation": "The text ends with the plan to teach a friend."
          }
        ]
      },
      {
        "heading": "Core Kanji",
        "body": [
          "These eight kanji anchor this lesson's vocabulary. For each one you see its on'yomi (Chinese-derived) and kun'yomi (native Japanese) readings, its core meanings, and a word that uses it. Learn them through the words, not in isolation.",
          "Readings are written in romaji. A dot in a kun'yomi reading marks where the kana ending of the word begins, and a dash means the reading does not apply."
        ],
        "examples": [
          {
            "es": "変",
            "en": "hen; ka.waru, ka.wari -- unusual, change, strange. E.g. 変化 (henka): change; variation; variety."
          },
          {
            "es": "決",
            "en": "ketsu; ki.meru, gi.me -- decide, fix, agree upon. E.g. 決まって (kimatte): always; without fail."
          },
          {
            "es": "続",
            "en": "zoku, shoku; tsuzu.ku, tsuzu.keru -- continue, series, sequel. E.g. 手続き (tetsuzuki): procedure; process."
          },
          {
            "es": "化",
            "en": "ka, ke; ba.keru, ba.kasu -- change, take the form of, influence. E.g. 強化 (kyouka): strengthening; intensifying."
          },
          {
            "es": "進",
            "en": "shin; susu.mu, susu.meru -- advance, proceed, progress. E.g. 進出 (shinshutsu): advance; launching."
          },
          {
            "es": "現",
            "en": "gen; arawa.reru, arawa.su -- present, existing, actual. E.g. 現金 (genkin): cash; ready money; mercenary."
          },
          {
            "es": "経",
            "en": "kei, kyou; he.ru, ta.tsu -- sutra, longitude, pass thru. E.g. 経験 (keiken): experience."
          },
          {
            "es": "初",
            "en": "sho; haji.me, haji.mete -- first time, beginning. E.g. 初日 (shonichi): first day; opening day."
          }
        ]
      },
      {
        "heading": "Kanji for Your Review Deck",
        "body": [
          "The other 24 kanji of this unit come through your daily review deck. Skim them here so they look familiar, then let spaced review do the work."
        ],
        "examples": [
          {
            "es": "慣",
            "en": "kan; na.reru, na.rasu -- accustomed, get used to, become experienced. E.g. 習慣 (shuukan): habit; custom."
          },
          {
            "es": "移",
            "en": "i; utsu.ru, utsu.su -- shift, move, change. E.g. 移転 (iten): moving; relocation; transfer."
          },
          {
            "es": "改",
            "en": "kai; arata.meru, arata.maru -- reformation, change, modify. E.g. 改める (aratameru): to change; to alter; to reform."
          },
          {
            "es": "成",
            "en": "sei, jou; na.ru, na.su -- turn into, become, get. E.g. 成長 (seichou): growth; development."
          },
          {
            "es": "復",
            "en": "fuku; mata -- restore, return to, revert. E.g. 回復 (kaifuku): restoration; rehabilitation; recovery."
          },
          {
            "es": "再",
            "en": "sai, sa; futata.bi -- again, twice, second time. E.g. 再び (futatabi): again; once more."
          },
          {
            "es": "加",
            "en": "ka; kuwa.eru, kuwa.waru -- add, addition, increase. E.g. 加入 (kanyuu): joining; becoming a member."
          },
          {
            "es": "得",
            "en": "toku; e.ru, u.ru -- gain, get, find. E.g. 所得 (shotoku): income; earnings."
          },
          {
            "es": "失",
            "en": "shitsu; ushina.u, u.seru -- lose, error, fault. E.g. 失う (ushinau): to lose; to miss."
          },
          {
            "es": "退",
            "en": "tai; shirizo.ku, shirizo.keru -- retreat, withdraw, retire. E.g. 引退 (intai): retirement."
          },
          {
            "es": "育",
            "en": "iku; soda.tsu, soda.chi -- bring up, grow up, raise. E.g. 教育 (kyouiku): education; schooling; culture."
          },
          {
            "es": "若",
            "en": "jaku, nyaku; waka.i, waka -- young, if, perhaps. E.g. 若さ (wakasa): youth."
          },
          {
            "es": "命",
            "en": "mei, myou; inochi -- fate, command, decree. E.g. 生命 (seimei): life; existence; working life."
          },
          {
            "es": "望",
            "en": "bou, mou; nozo.mu, mochi -- ambition, full moon, hope. E.g. 展望 (tenbou): view; outlook."
          },
          {
            "es": "準",
            "en": "jun; jun.jiru, jun.zuru -- semi-, correspond to, proportionate to. E.g. 準備 (junbi): preparation; arrangements."
          },
          {
            "es": "備",
            "en": "bi; sona.eru, sona.waru -- equip, provision, preparation. E.g. 準備 (junbi): preparation; arrangements."
          },
          {
            "es": "整",
            "en": "sei; totono.eru, totono.u -- organize, arranging, tune. E.g. 整備 (seibi): maintenance; servicing; putting in place."
          },
          {
            "es": "展",
            "en": "ten -- unfold, expand. E.g. 展開 (tenkai): development; evolution; expansion."
          },
          {
            "es": "導",
            "en": "dou; michibi.ku -- guidance, leading, conduct. E.g. 導入 (dounyuu): introduction; bringing in."
          },
          {
            "es": "悩",
            "en": "nou; naya.mu, naya.masu -- trouble, worry, in pain. E.g. 悩み (nayami): trouble; troubles."
          },
          {
            "es": "誤",
            "en": "go; ayama.ru, ayama.ru -- mistake, err, do wrong. E.g. 誤り (ayamari): error; mistake."
          },
          {
            "es": "忘",
            "en": "bou; wasu.reru -- forget. E.g. 忘年会 (bounenkai): year-end party; \"forget-the-year\" party."
          },
          {
            "es": "常",
            "en": "jou; tsune, toko -- usual, ordinary, normal. E.g. 常に (tsuneni): always; constantly."
          },
          {
            "es": "過",
            "en": "ka; su.giru, su.gosu -- overdo, exceed, go beyond. E.g. 経過 (keika): passage; elapsing; progress."
          }
        ]
      },
      {
        "heading": "Key Vocabulary",
        "body": [
          "These words come from this lesson's dialogue and reading, plus other common words built from the unit's kanji. The full 200-word list for this unit is in the data files that ship with the module."
        ],
        "examples": [
          {
            "es": "回復",
            "en": "kaifuku -- restoration; rehabilitation; recovery"
          },
          {
            "es": "強化",
            "en": "kyouka -- strengthening; intensifying"
          },
          {
            "es": "教育",
            "en": "kyouiku -- education; schooling; culture"
          },
          {
            "es": "成長",
            "en": "seichou -- growth; development"
          },
          {
            "es": "文化",
            "en": "bunka -- culture; civilization"
          },
          {
            "es": "変化",
            "en": "henka -- change; variation; variety"
          },
          {
            "es": "決まって",
            "en": "kimatte -- always; without fail"
          },
          {
            "es": "経験",
            "en": "keiken -- experience"
          },
          {
            "es": "再び",
            "en": "futatabi -- again; once more"
          },
          {
            "es": "準備",
            "en": "junbi -- preparation; arrangements"
          },
          {
            "es": "所得",
            "en": "shotoku -- income; earnings"
          },
          {
            "es": "進出",
            "en": "shinshutsu -- advance; launching"
          },
          {
            "es": "水準",
            "en": "suijun -- level; standard; water level"
          },
          {
            "es": "成立",
            "en": "seiritsu -- formation; establishment; conclusion"
          },
          {
            "es": "整備",
            "en": "seibi -- maintenance; servicing; putting in place"
          },
          {
            "es": "先進国",
            "en": "senshinkoku -- advanced country; advanced nations"
          },
          {
            "es": "大変",
            "en": "taihen -- very; greatly; immense"
          },
          {
            "es": "展開",
            "en": "tenkai -- development; evolution; expansion"
          },
          {
            "es": "導入",
            "en": "dounyuu -- introduction; bringing in"
          },
          {
            "es": "発展",
            "en": "hatten -- development; growth"
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "What is the reading of 進出?",
            "options": [
              "しんしゅつ",
              "いちげんか",
              "まちのぞむ",
              "たいせい"
            ],
            "correctIndex": 0,
            "explanation": "進出 is read しんしゅつ (advance; launching)."
          },
          {
            "type": "multiple-choice",
            "question": "What is the reading of 出展?",
            "options": [
              "しゅってん",
              "ぶんかじん",
              "せいめい",
              "しゅつげん"
            ],
            "correctIndex": 0,
            "explanation": "出展 is read しゅってん (exhibit; display)."
          }
        ]
      },
      {
        "heading": "Speak About It",
        "body": [
          "Use these prompts for your 30-minute chat with a native speaker, or answer them aloud on your own in full sentences that use this lesson's patterns.",
          "Writing challenge: Write a 300-character post about a change in your life and a decision you made, using at least three of the five patterns."
        ],
        "examples": [
          {
            "es": "最近、できるようになったことは何ですか。",
            "en": "saikin, dekiru you ni natta koto wa nan desu ka. -- What is something you have become able to do lately?"
          },
          {
            "es": "健康のために、何かしていますか。",
            "en": "kenkou no tame ni, nan ka shite imasu ka. -- Are you doing anything for your health?"
          },
          {
            "es": "あなたの仕事や学校には、どんなルールがありますか。",
            "en": "anata no shigoto ya gakkou ni wa, donna ruuru ga arimasu ka. -- What rules are there at your work or school?"
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "最近、テレビを（　）。 (I have stopped watching TV lately.)",
        "options": [
          "見ないことになりました",
          "見ないことにしています",
          "見なくなりました",
          "見ないようにしました"
        ],
        "correctIndex": 2,
        "explanation": "A change over time uses ～なくなる, not a decision or an effort."
      },
      {
        "type": "multiple-choice",
        "question": "What does 決起 (けっき) mean?",
        "options": [
          "rising to action; standing up against",
          "restoration; rehabilitation; recovery",
          "desirable; hoped for",
          "view; outlook"
        ],
        "correctIndex": 0,
        "explanation": "決起 (けっき) means rising to action; standing up against."
      },
      {
        "type": "multiple-choice",
        "question": "What does 主導 (しゅどう) mean?",
        "options": [
          "experience",
          "leadership; initiative",
          "moving forward; onward movement; advance",
          "creation; generation"
        ],
        "correctIndex": 1,
        "explanation": "主導 (しゅどう) means leadership; initiative."
      },
      {
        "type": "multiple-choice",
        "question": "Passage: 最近、朝六時に起きるようになりました。前は八時まで寝ていましたが、健康のために早く起きるようにしています。 — What has changed for the speaker?",
        "options": [
          "Moved to a new city",
          "Started a night job",
          "Gets up at six now",
          "Sleeps until eight now"
        ],
        "correctIndex": 2,
        "explanation": "The speaker now gets up at six."
      },
      {
        "type": "multiple-choice",
        "question": "Passage: 来年から、東京で働くことになりました。会社の命令なので、引っ越さなければなりません。 — Who decided that the speaker will work in Tokyo?",
        "options": [
          "The company",
          "The speaker's family",
          "The speaker",
          "The speaker's friend"
        ],
        "correctIndex": 0,
        "explanation": "The phrase 会社の命令 shows the company decided."
      },
      {
        "type": "matching",
        "instructions": "Match each word with its English meaning.",
        "pairs": [
          {
            "left": "教育者",
            "right": "educator"
          },
          {
            "left": "大変",
            "right": "very"
          },
          {
            "left": "準ずる",
            "right": "to apply correspondingly"
          },
          {
            "left": "行き過ぎる",
            "right": "to go too far"
          },
          {
            "left": "決別",
            "right": "separation"
          }
        ],
        "explanation": "These words all belong to this unit's vocabulary. Check any you missed against the Key Vocabulary and Core Kanji sections."
      },
      {
        "type": "matching",
        "instructions": "Match each word with its reading.",
        "pairs": [
          {
            "left": "進退",
            "right": "しんたい"
          },
          {
            "left": "再建",
            "right": "さいけん"
          },
          {
            "left": "進行",
            "right": "しんこう"
          },
          {
            "left": "成人病",
            "right": "せいじんびょう"
          },
          {
            "left": "導入",
            "right": "どうにゅう"
          }
        ],
        "explanation": "Reading a kanji word correctly is what lets the vocabulary stick, so say each word aloud once you have the match."
      },
      {
        "type": "matching",
        "instructions": "Match each pattern with its meaning.",
        "pairs": [
          {
            "left": "～ようになる",
            "right": "A change over time: begin to be able to, or begin to do"
          },
          {
            "left": "～ようにする",
            "right": "Make an effort to do something regularly"
          },
          {
            "left": "～ことにする",
            "right": "The speaker decides"
          },
          {
            "left": "～ことになる",
            "right": "Decided by others, or by circumstances"
          },
          {
            "left": "～ことになっている",
            "right": "A rule, custom or fixed plan"
          }
        ],
        "explanation": "Each pattern in this lesson has a distinct job. If any pair was hard, reread that pattern's section and its examples."
      }
    ]
  },
  {
    "slug": "news-hearsay-and-impressions",
    "level": "JA-B1",
    "number": 2,
    "title": "News, Hearsay and Impressions",
    "summary": "Describe how things look and report what you have heard, with そうだ (two ways), らしい, ようだ and はずだ, and match each pattern to the kind of evidence behind it.",
    "duration": "45 min",
    "sections": [
      {
        "heading": "What This Lesson Covers",
        "body": [
          "Describe how things look and report what you have heard, with そうだ (two ways), らしい, ようだ and はずだ, and match each pattern to the kind of evidence behind it.",
          "By the end of this lesson you will be able to: (1) Tell apart what they see, what they heard and what they expect.  (2) Report a news item or a forecast in a few sentences.  (3) Give an impression of a person, place or event.",
          "Every lesson in this module follows the same path: a short dialogue that uses the patterns, one section per pattern with a quick check, a section on choosing between the patterns, a reading passage, and then the kanji and vocabulary that go with the unit."
        ]
      },
      {
        "heading": "Dialogue: News, Hearsay and Impressions",
        "body": [
          "Read the conversation once for the gist, then again line by line. Each line comes with romaji and an English gloss. Watch for the patterns in this lesson as they appear in natural speech; the sections that follow take them one at a time."
        ],
        "examples": [
          {
            "es": "田中：空が暗いですね。雨が降りそうですよ。",
            "en": "Tanaka: sora ga kurai desu ne. ame ga furi sou desu yo. -- Tanaka: The sky is dark, isn't it? It looks like it's going to rain."
          },
          {
            "es": "リー：天気予報では、午後から雨が降るそうです。",
            "en": "Lee: tenki yohou de wa, gogo kara ame ga furu sou desu. -- Lee: The forecast says it will rain from the afternoon."
          },
          {
            "es": "田中：傘を持ってこなかったんです。",
            "en": "Tanaka: kasa o motte konakatta n desu. -- Tanaka: I didn't bring an umbrella."
          },
          {
            "es": "リー：会社の入口に、傘があるはずですよ。",
            "en": "Lee: kaisha no iriguchi ni, kasa ga aru hazu desu yo. -- Lee: There should be umbrellas at the company entrance."
          }
        ]
      },
      {
        "heading": "～そうだ (appearance): Looks like it is about to happen, or has a quality",
        "body": [
          "Core idea: Looks like it is about to happen, or has a quality.",
          "How to build it: Verb stem, or い-/な-adjective stem, + そうです (降りそう, おいしそう). いい becomes よさそう and ない becomes なさそう.",
          "It describes how something looks right now. It is your own judgment from appearances, not something you were told."
        ],
        "examples": [
          {
            "es": "空が暗いので、雨が降りそうです。",
            "en": "sora ga kurai no de, ame ga furi sou desu. -- The sky is dark, so it looks like it will rain."
          },
          {
            "es": "この料理は、辛そうですね。",
            "en": "kono ryouri wa, tsura sou desu ne. -- This dish looks spicy."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "空が暗いので、雨が（　）。 (The sky is dark, so it looks like it will rain.)",
            "options": [
              "降ったはずです",
              "降りらしいです",
              "降るそうです",
              "降りそうです"
            ],
            "correctIndex": 3,
            "explanation": "Appearance attaches ～そう to the verb stem."
          }
        ]
      },
      {
        "heading": "～そうだ (hearsay): Reports what someone or something said",
        "body": [
          "Core idea: Reports what someone or something said.",
          "How to build it: Plain form + そうです (降るそうです, おいしいそうです).",
          "It reports what you heard or read: 'I hear that...' The plain form comes before そう, unlike the appearance そう, which attaches to the stem. A source such as 天気予報では often opens the sentence."
        ],
        "examples": [
          {
            "es": "天気予報では、明日は雪が降るそうです。",
            "en": "tenki yohou de wa, asu wa yuki ga furu sou desu. -- According to the forecast, it will snow tomorrow."
          },
          {
            "es": "友達の話では、あの店のラーメンはおいしいそうです。",
            "en": "tomodachi no hanashi de wa, ano mise no raamen wa oishii sou desu. -- According to my friend, the ramen at that shop is delicious."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "天気予報では、明日は雪が（　）。 (According to the forecast, it will snow tomorrow.)",
            "options": [
              "降りませんそうです",
              "降ったそうです",
              "降るはずがありません",
              "降るそうです"
            ],
            "correctIndex": 3,
            "explanation": "Hearsay attaches ～そう to the plain form."
          }
        ]
      },
      {
        "heading": "～らしい: Reported or inferred from outside information",
        "body": [
          "Core idea: Reported or inferred from outside information.",
          "How to build it: Plain form + らしい (来るらしい, 好きらしい).",
          "It reports something on the basis of information or evidence, with the sense of 'apparently.' It is less certain than a direct statement. Noun + らしい has a different meaning, 'typical of' (男らしい)."
        ],
        "examples": [
          {
            "es": "隣の店は来月閉店するらしいです。",
            "en": "tonari no mise wa raigetsu heiten sururashii desu. -- It seems the shop next door is closing for good next month."
          },
          {
            "es": "田中さんは、今日は休みらしいです。",
            "en": "Tanaka-san wa, kyou wa yasumirashii desu. -- It seems Mr. Tanaka is off today."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "友達の話では、あの映画はとても（　）。 (According to my friend, that movie is very interesting, so I hear.)",
            "options": [
              "おもしろそうです",
              "おもしろいみたいだです",
              "おもしろいはずがありません",
              "おもしろいらしいです"
            ],
            "correctIndex": 3,
            "explanation": "～らしい reports outside information."
          }
        ]
      },
      {
        "heading": "～ようだ・～みたい: The speaker's inference from what they observe",
        "body": [
          "Core idea: The speaker's inference from what they observe.",
          "How to build it: Plain form + ようだ (noun + の + ようだ; な-adjective + な + ようだ). みたい is the casual version.",
          "It is the speaker's inference from what they observe: 'it seems that...' 電気がついているので works because the evidence is something you can see for yourself."
        ],
        "examples": [
          {
            "es": "電気がついているので、田中さんはまだ会社にいるようです。",
            "en": "denki ga tsuite iru no de, Tanaka-san wa mada kaisha ni iru you desu. -- The lights are on, so Mr. Tanaka seems to still be at the office."
          },
          {
            "es": "隣の部屋から音が聞こえるので、誰かいるようです。",
            "en": "tonari no heya kara oto ga kikoeru no de, dare ka iru you desu. -- I can hear a noise from the next room, so someone seems to be there."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "部屋の電気がついているので、田中さんはまだ会社に（　）。 (The light is on, so Mr. Tanaka seems to still be at the office.)",
            "options": [
              "いるそうです",
              "いたそうです",
              "いるはずがありません",
              "いるようです"
            ],
            "correctIndex": 3,
            "explanation": "～ようだ is the speaker's inference from what they observe."
          }
        ]
      },
      {
        "heading": "～はずだ: A logical expectation",
        "body": [
          "Core idea: A logical expectation.",
          "How to build it: Plain form + はずだ (noun + の + はずだ; な-adjective + な + はずだ).",
          "It states what should be true according to logic or knowledge: 'it should be...' はずがない means 'there is no way that...' and はずだった means 'it was supposed to be, but wasn't.'"
        ],
        "examples": [
          {
            "es": "田中さんは昨日出発したので、もう大阪に着いているはずです。",
            "en": "Tanaka-san wa kinou shuppatsu shita no de, mou Osaka ni tsuite iru hazu desu. -- Mr. Tanaka left yesterday, so he should already have arrived in Osaka."
          },
          {
            "es": "会議は三時に始まるはずです。",
            "en": "kaigi wa san ji ni hajimaru hazu desu. -- The meeting should start at three."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "田中さんは昨日出発したので、もう大阪に（　）。 (Mr. Tanaka left yesterday, so he should already have arrived in Osaka.)",
            "options": [
              "着きそうです",
              "着いていないはずです",
              "着いているはずです",
              "着くみたいです"
            ],
            "correctIndex": 2,
            "explanation": "～はずだ is a logical expectation."
          }
        ]
      },
      {
        "heading": "Choosing Between the Patterns",
        "body": [
          "The main contrast is how the speaker knows. ～そうだ (appearance) is a guess from looks and attaches to the verb stem. ～そうだ (hearsay) reports what someone said and attaches to the plain form. ようだ is the speaker's own observation, らしい is information from outside, and はずだ is reasoning, not observation."
        ],
        "examples": [
          {
            "es": "このケーキは、とてもおいしそうです。",
            "en": "kono keeki wa, totemo oishi sou desu. -- This cake looks delicious."
          }
        ]
      },
      {
        "heading": "Reading Practice",
        "body": [
          "Read the passage once without stopping (81 characters), then again slowly, checking each sentence against its gloss. Try to spot which pattern from this lesson is behind each sentence before you answer the questions."
        ],
        "examples": [
          {
            "es": "来週の日曜日に、駅の前で夏祭りがあるそうです。",
            "en": "raishuu no nichiyou hi ni, eki no mae de natsumatsuri ga aru sou desu. -- I hear there will be a summer festival in front of the station next Sunday."
          },
          {
            "es": "天気予報では、その日は晴れるそうです。",
            "en": "tenki yohou de wa, sono hi wa hareru sou desu. -- The forecast says it will be sunny that day."
          },
          {
            "es": "去年は五千人が来たらしいので、今年も人が多いはずです。",
            "en": "kyonen wa gosennin ga kitarashii no de, kotoshi mo hito ga ooi hazu desu. -- Apparently 5,000 people came last year, so there should be a lot of people this year too."
          },
          {
            "es": "私は友達と行きたいです。",
            "en": "watashi wa tomodachi to ikitai desu. -- I want to go with a friend."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "Where will the summer festival be held?",
            "options": [
              "In the park",
              "In front of the station",
              "At the shrine",
              "At the school"
            ],
            "correctIndex": 1,
            "explanation": "The festival is in front of the station."
          },
          {
            "type": "multiple-choice",
            "question": "What does the forecast say about that day?",
            "options": [
              "It will rain",
              "It will be sunny",
              "A typhoon will arrive",
              "It will be cloudy all day"
            ],
            "correctIndex": 1,
            "explanation": "The forecast says it will be sunny."
          },
          {
            "type": "multiple-choice",
            "question": "Why does the writer expect a big crowd?",
            "options": [
              "Many friends are coming",
              "Admission is free",
              "It is a public holiday",
              "About 5,000 people came last year"
            ],
            "correctIndex": 3,
            "explanation": "Last year's attendance is the reason."
          }
        ]
      },
      {
        "heading": "Core Kanji",
        "body": [
          "These eight kanji anchor this lesson's vocabulary. For each one you see its on'yomi (Chinese-derived) and kun'yomi (native Japanese) readings, its core meanings, and a word that uses it. Learn them through the words, not in isolation.",
          "Readings are written in romaji. A dot in a kun'yomi reading marks where the kana ending of the word begins, and a dash means the reading does not apply."
        ],
        "examples": [
          {
            "es": "報",
            "en": "hou; muku.iru -- report, news, reward. E.g. 情報 (jouhou): information; news."
          },
          {
            "es": "記",
            "en": "ki; shiru.su -- scribe, account, narrative. E.g. 記事 (kiji): article; news story."
          },
          {
            "es": "情",
            "en": "jou, sei; nasa.ke -- feelings, emotion, passion. E.g. 事情 (jijou): circumstances; conditions."
          },
          {
            "es": "想",
            "en": "sou, so; omo.u -- concept, think, idea. E.g. 思想 (shisou): thought; idea."
          },
          {
            "es": "表",
            "en": "hyou; omote, omote -- surface, table, chart. E.g. 発表 (happyou): announcement; publication."
          },
          {
            "es": "予",
            "en": "yo, sha; arakaji.me -- beforehand, previous, myself. E.g. 予報 (yohou): forecast; prediction."
          },
          {
            "es": "特",
            "en": "toku -- special. E.g. 特に (tokuni): particularly; especially."
          },
          {
            "es": "様",
            "en": "you, shou; sama, san -- Esq., way, manner. E.g. 様子 (yousu): state; state of affairs; appearance."
          }
        ]
      },
      {
        "heading": "Kanji for Your Review Deck",
        "body": [
          "The other 24 kanji of this unit come through your daily review deck. Skim them here so they look familiar, then let spaced review do the work."
        ],
        "examples": [
          {
            "es": "昨",
            "en": "saku -- yesterday, previous. E.g. 昨年 (sakunen): last year."
          },
          {
            "es": "次",
            "en": "ji, shi; tsu.gu, tsugi -- next, order, sequence. E.g. 次長 (jichou): vice-chief; vice-director."
          },
          {
            "es": "状",
            "en": "jou -- status quo, conditions, circumstances. E.g. 病状 (byoujou): patient's condition; pathology."
          },
          {
            "es": "況",
            "en": "kyou; mashi.te, iwa.n'ya -- condition, situation. E.g. 市況 (shikyou): market conditions."
          },
          {
            "es": "景",
            "en": "kei -- scenery, view. E.g. 景気 (keiki): business conditions; the market; good times."
          },
          {
            "es": "観",
            "en": "kan; mi.ru, shime.su -- outlook, look, appearance. E.g. 観光 (kankou): sightseeing; tourism."
          },
          {
            "es": "察",
            "en": "satsu -- guess, presume, surmise. E.g. 観察 (kansatsu): observation; survey."
          },
          {
            "es": "述",
            "en": "jutsu; no.beru -- mention, state, speak. E.g. 記述 (kijutsu): description; account."
          },
          {
            "es": "伝",
            "en": "den, ten; tsuta.waru, tsuta.eru -- transmit, go along, walk along. E.g. 伝説 (densetsu): tradition; legend."
          },
          {
            "es": "放",
            "en": "hou; hana.su, ppana.shi -- set free, release, fire. E.g. 開放 (kaihou): opening; leaving open; opening up."
          },
          {
            "es": "示",
            "en": "ji, shi; shime.su -- show, indicate, point out. E.g. 表示 (hyouji): indication; expression; display."
          },
          {
            "es": "評",
            "en": "hyou -- evaluate, criticism, comment. E.g. 書評 (shohyou): book review."
          },
          {
            "es": "録",
            "en": "roku; shiru.su, to.ru -- record. E.g. 記録 (kiroku): record; minutes."
          },
          {
            "es": "識",
            "en": "shiki; shi.ru, shiru.su -- discriminating, know, write. E.g. 認識 (ninshiki): recognition; awareness."
          },
          {
            "es": "認",
            "en": "nin; mito.meru, shitata.meru -- acknowledge, witness, discern. E.g. 認識 (ninshiki): recognition; awareness."
          },
          {
            "es": "疑",
            "en": "gi; utaga.u -- doubt, distrust, be suspicious. E.g. 疑い (utagai): doubt; question."
          },
          {
            "es": "確",
            "en": "kaku, kou; tashi.ka, tashi.kameru -- assurance, firm, tight. E.g. 明確 (meikaku): clear; precise."
          },
          {
            "es": "形",
            "en": "kei, gyou; kata, gata -- shape, form, style. E.g. 形 (katachi): form; shape; visage."
          },
          {
            "es": "美",
            "en": "bi, mi; utsuku.shii -- beauty, beautiful. E.g. 美しい (utsukushii): beautiful; pretty."
          },
          {
            "es": "深",
            "en": "shin; fuka.i, buka.i -- deep, heighten, intensify. E.g. 深夜 (shin'ya): late at night."
          },
          {
            "es": "良",
            "en": "ryou; yo.i, yo.i -- good, pleasing, skilled. E.g. 良 (ryou): good; Good."
          },
          {
            "es": "面",
            "en": "men, ben; omo, omote -- mask, face, features. E.g. 面 (tsura): face; mug; surface."
          },
          {
            "es": "編",
            "en": "hen; a.mu, a.mi -- compilation, knit, plait. E.g. 編成 (hensei): composition; formation."
          },
          {
            "es": "号",
            "en": "gou; sake.bu, yobina -- nickname, number, item. E.g. 二号 (nigou): number two; mistress."
          }
        ]
      },
      {
        "heading": "Key Vocabulary",
        "body": [
          "These words come from this lesson's dialogue and reading, plus other common words built from the unit's kanji. The full 200-word list for this unit is in the data files that ship with the module."
        ],
        "examples": [
          {
            "es": "予報",
            "en": "yohou -- forecast; prediction"
          },
          {
            "es": "記事",
            "en": "kiji -- article; news story"
          },
          {
            "es": "記者",
            "en": "kisha -- reporter; journalist"
          },
          {
            "es": "記録",
            "en": "kiroku -- record; minutes"
          },
          {
            "es": "疑い",
            "en": "utagai -- doubt; question"
          },
          {
            "es": "形",
            "en": "katachi -- form; shape; visage"
          },
          {
            "es": "景気",
            "en": "keiki -- business conditions; the market; good times"
          },
          {
            "es": "昨年",
            "en": "sakunen -- last year"
          },
          {
            "es": "事情",
            "en": "jijou -- circumstances; conditions"
          },
          {
            "es": "書記",
            "en": "shoki -- clerk; secretary; writing down"
          },
          {
            "es": "情報",
            "en": "jouhou -- information; news"
          },
          {
            "es": "特に",
            "en": "tokuni -- particularly; especially"
          },
          {
            "es": "報道",
            "en": "houdou -- report; reporting"
          },
          {
            "es": "開放",
            "en": "kaihou -- opening; leaving open; opening up"
          },
          {
            "es": "観光",
            "en": "kankou -- sightseeing; tourism"
          },
          {
            "es": "疑問",
            "en": "gimon -- doubt; question"
          },
          {
            "es": "認識",
            "en": "ninshiki -- recognition; awareness"
          },
          {
            "es": "発表",
            "en": "happyou -- announcement; publication"
          },
          {
            "es": "表現",
            "en": "hyougen -- expression; presentation; representation"
          },
          {
            "es": "表情",
            "en": "hyoujou -- facial expression; countenance; look"
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "What is the reading of 評伝?",
            "options": [
              "じんせいかん",
              "でんせつ",
              "やまがた",
              "ひょうでん"
            ],
            "correctIndex": 3,
            "explanation": "評伝 is read ひょうでん (critical biography)."
          },
          {
            "type": "multiple-choice",
            "question": "What is the reading of 深夜?",
            "options": [
              "かいめん",
              "にっき",
              "しめす",
              "しんや"
            ],
            "correctIndex": 3,
            "explanation": "深夜 is read しんや (late at night)."
          }
        ]
      },
      {
        "heading": "Speak About It",
        "body": [
          "Use these prompts for your 30-minute chat with a native speaker, or answer them aloud on your own in full sentences that use this lesson's patterns.",
          "Writing challenge: Summarize a news item and add your impression, in 300 characters."
        ],
        "examples": [
          {
            "es": "最近、どんなニュースが気になっていますか。",
            "en": "saikin, donna nyuusu ga ki ni natte imasu ka. -- What news have you been curious about lately?"
          },
          {
            "es": "今日の天気はどうですか。明日はどうなりそうですか。",
            "en": "kyou no tenki wa dou desu ka. asu wa dou nari sou desu ka. -- How is the weather today? How does tomorrow look?"
          },
          {
            "es": "友達から聞いた面白い話を教えてください。",
            "en": "tomodachi kara kiita omoshiroi hanashi o oshiete kudasai. -- Please tell me an interesting story you heard from a friend."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "このケーキは、とても（　）。 (This cake looks delicious.)",
        "options": [
          "おいしいそうです",
          "おいしいはずがありません",
          "おいしそうです",
          "おいしそうらしいです"
        ],
        "correctIndex": 2,
        "explanation": "Appearance uses the い-adjective stem plus そう."
      },
      {
        "type": "multiple-choice",
        "question": "What does 様変わり (さまがわり) mean?",
        "options": [
          "changing completely; transformation",
          "to rank next to; to come after",
          "front part; frontage; initial pledge",
          "reporter; journalist"
        ],
        "correctIndex": 0,
        "explanation": "様変わり (さまがわり) means changing completely; transformation."
      },
      {
        "type": "multiple-choice",
        "question": "What does 展示会 (てんじかい) mean?",
        "options": [
          "last year",
          "common sense; good sense",
          "record; minutes",
          "exhibition"
        ],
        "correctIndex": 3,
        "explanation": "展示会 (てんじかい) means exhibition."
      },
      {
        "type": "multiple-choice",
        "question": "Passage: 天気予報では、午後から雨が降るそうです。でも、今は空が明るいので、まだ大丈夫そうですよ。 — What does the speaker say about the weather now?",
        "options": [
          "A typhoon is coming",
          "It looks fine for now",
          "It is snowing",
          "It is raining hard"
        ],
        "correctIndex": 1,
        "explanation": "The speaker says it looks all right for now."
      },
      {
        "type": "multiple-choice",
        "question": "Passage: あの店、来月閉店するらしいですよ。 — What does the speaker say about the shop?",
        "options": [
          "It is moving",
          "It is expanding",
          "It opened last month",
          "It seems to be closing next month"
        ],
        "correctIndex": 3,
        "explanation": "らしい reports that it is closing."
      },
      {
        "type": "matching",
        "instructions": "Match each word with its English meaning.",
        "pairs": [
          {
            "left": "短編",
            "right": "short"
          },
          {
            "left": "多様化",
            "right": "diversification"
          },
          {
            "left": "深み",
            "right": "depth"
          },
          {
            "left": "次長",
            "right": "vice-chief"
          },
          {
            "left": "報道",
            "right": "report"
          }
        ],
        "explanation": "These words all belong to this unit's vocabulary. Check any you missed against the Key Vocabulary and Core Kanji sections."
      },
      {
        "type": "matching",
        "instructions": "Match each word with its reading.",
        "pairs": [
          {
            "left": "好況",
            "right": "こうきょう"
          },
          {
            "left": "手記",
            "right": "しゅき"
          },
          {
            "left": "知識",
            "right": "ちしき"
          },
          {
            "left": "示す",
            "right": "しめす"
          },
          {
            "left": "水面",
            "right": "すいめん"
          }
        ],
        "explanation": "Reading a kanji word correctly is what lets the vocabulary stick, so say each word aloud once you have the match."
      },
      {
        "type": "matching",
        "instructions": "Match each pattern with its meaning.",
        "pairs": [
          {
            "left": "～そうだ (appearance)",
            "right": "Looks like it is about to happen, or has a quality"
          },
          {
            "left": "～そうだ (hearsay)",
            "right": "Reports what someone or something said"
          },
          {
            "left": "～らしい",
            "right": "Reported or inferred from outside information"
          },
          {
            "left": "～ようだ・～みたい",
            "right": "The speaker's inference from what they observe"
          },
          {
            "left": "～はずだ",
            "right": "A logical expectation"
          }
        ],
        "explanation": "Each pattern in this lesson has a distinct job. If any pair was hard, reread that pattern's section and its examples."
      }
    ]
  },
  {
    "slug": "favors-and-requests",
    "level": "JA-B1",
    "number": 3,
    "title": "Favors and Requests",
    "summary": "Ask for, give and thank people for favors with てあげる, てくれる, てもらう, ていただく, てほしい, ておく and てしまう.",
    "duration": "45 min",
    "sections": [
      {
        "heading": "What This Lesson Covers",
        "body": [
          "Ask for, give and thank people for favors with てあげる, てくれる, てもらう, ていただく, てほしい, ておく and てしまう.",
          "By the end of this lesson you will be able to: (1) Say who gives and who receives in an action, with the right level of politeness.  (2) Ask someone for a favor and say what you want them to do.  (3) Explain what you prepared in advance, and what went wrong by accident.",
          "Every lesson in this module follows the same path: a short dialogue that uses the patterns, one section per pattern with a quick check, a section on choosing between the patterns, a reading passage, and then the kanji and vocabulary that go with the unit."
        ]
      },
      {
        "heading": "Dialogue: Favors and Requests",
        "body": [
          "Read the conversation once for the gist, then again line by line. Each line comes with romaji and an English gloss. Watch for the patterns in this lesson as they appear in natural speech; the sections that follow take them one at a time."
        ],
        "examples": [
          {
            "es": "リー：田中さん、来週引っ越しをするんですが、手伝ってもらえませんか。",
            "en": "Lee: Tanaka-san, raishuu hikkoshi o suru n desu ga, tetsudatte moraemasen ka. -- Lee: Mr. Tanaka, I'm moving next week. Could you help me?"
          },
          {
            "es": "田中：いいですよ。何をしてほしいですか。",
            "en": "Tanaka: ii desu yo. nan o shite hoshii desu ka. -- Tanaka: Sure. What would you like me to do?"
          },
          {
            "es": "リー：荷物を運んでほしいんです。荷物は前の日に箱に入れておきます。",
            "en": "Lee: nimotsu o hakonde hoshii n desu. nimotsu wa mae no hi ni bako ni irete okimasu. -- Lee: I'd like you to carry the luggage. I'll put it in boxes the day before."
          },
          {
            "es": "田中：わかりました。大事なものは、自分で持っていってくださいね。",
            "en": "Tanaka: wakarimashita. daiji na mono wa, jibun de motte itte kudasai ne. -- Tanaka: Got it. Please carry anything important yourself."
          },
          {
            "es": "リー：ありがとうございます。助かります。",
            "en": "Lee: arigatou gozaimasu. tasukarimasu. -- Lee: Thank you. That's a great help."
          }
        ]
      },
      {
        "heading": "～てあげる・～てくれる・～てもらう: Giving and receiving an action",
        "body": [
          "Core idea: Giving and receiving an action.",
          "How to build it: Te-form + あげる (I do it for someone else), くれる (someone does it for me), もらう (I receive the favor).",
          "Choose by direction. 田中さんが手伝ってくれた means 'Tanaka helped me,' and 田中さんに手伝ってもらった means 'I had Tanaka help me.' あげる can sound condescending toward someone above you, so it is usually avoided with superiors."
        ],
        "examples": [
          {
            "es": "田中さんが空港まで迎えに来てくれました。",
            "en": "Tanaka-san ga kuukou made mukae ni kite kuremashita. -- Mr. Tanaka came to the airport to pick me up."
          },
          {
            "es": "友達が駅まで送ってくれました。",
            "en": "tomodachi ga eki made okutte kuremashita. -- A friend took me to the station."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "空港まで田中さんが迎えに（　）。 (Mr. Tanaka came to pick me up at the airport.)",
            "options": [
              "来てくれました",
              "来てあげました",
              "来ておきました",
              "来てもらいました"
            ],
            "correctIndex": 0,
            "explanation": "When someone does something for me, use ～てくれる."
          }
        ]
      },
      {
        "heading": "～ていただく・～てくださる: Polite forms for actions by a superior",
        "body": [
          "Core idea: Polite forms for actions by a superior.",
          "How to build it: Te-form + いただく (humble: I receive) or くださる (honorific: they give).",
          "These are the polite forms of てもらう and てくれる. くださる raises the person doing the favor and いただく lowers the speaker, so 先生が教えてくださいました and 先生に教えていただきました mean the same thing from different angles."
        ],
        "examples": [
          {
            "es": "先生が本を貸してくださいました。",
            "en": "sensei ga hon o kashite kudasaimashita. -- The teacher lent me a book."
          },
          {
            "es": "先生が推薦状を書いてくださいました。",
            "en": "sensei ga suisenjou o kaite kudasaimashita. -- The teacher wrote a letter of recommendation for me."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "先生が私に本を（　）。 (The teacher lent me a book (respectful).)",
            "options": [
              "貸してくださいました",
              "貸しておきました",
              "貸していただきました",
              "貸してあげました"
            ],
            "correctIndex": 0,
            "explanation": "Use くださる when a respected person is the doer."
          }
        ]
      },
      {
        "heading": "～てほしい: Wanting someone to do something",
        "body": [
          "Core idea: Wanting someone to do something.",
          "How to build it: Te-form + ほしい, with the person you want to act marked by に.",
          "It says you want someone else to do something: 弟に勉強してほしい. It cannot describe your own wish to act; for that use たい. Because it is direct, a polite request is usually ～てもらえませんか."
        ],
        "examples": [
          {
            "es": "弟にもっと勉強してほしいです。",
            "en": "otou to ni motto benkyou shite hoshii desu. -- I want my younger brother to study more."
          },
          {
            "es": "母に早く帰ってきてほしいです。",
            "en": "haha ni hayaku kaette kite hoshii desu. -- I want my mother to come home early."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "私は弟に、もっと勉強（　）。 (I want my younger brother to study more.)",
            "options": [
              "したいです",
              "してほしいです",
              "してくれました",
              "しておきます"
            ],
            "correctIndex": 1,
            "explanation": "～てほしい states what you want someone else to do."
          }
        ]
      },
      {
        "heading": "～ておく: Do in advance, or leave as is",
        "body": [
          "Core idea: Do in advance, or leave as is.",
          "How to build it: Te-form + おく (入れておく).",
          "It means doing something in advance or in preparation, or leaving it in that state. 荷物を箱に入れておきます means 'I'll put the luggage in boxes (ahead of time).' In casual speech ておく contracts to とく."
        ],
        "examples": [
          {
            "es": "会議の前に、資料を読んでおきます。",
            "en": "kaigi no mae ni, shiryou o yonde okimasu. -- I will read the materials before the meeting."
          },
          {
            "es": "旅行の前に、ホテルを予約しておきます。",
            "en": "ryokou no mae ni, hoteru o yoyaku shite okimasu. -- I will book the hotel before the trip."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "会議の前に、資料を（　）。 (I will read the materials in advance, before the meeting.)",
            "options": [
              "読んでもらいます",
              "読んでおきます",
              "読んであげます",
              "読んでいただきます"
            ],
            "correctIndex": 1,
            "explanation": "～ておく means to do something in advance."
          }
        ]
      },
      {
        "heading": "～てしまう: Completion, or regret",
        "body": [
          "Core idea: Completion, or regret.",
          "How to build it: Te-form + しまう (忘れてしまう).",
          "It shows completion ('to finish doing') or regret about an outcome ('to end up doing'). 忘れてしまいました expresses regret. In casual speech it contracts to ちゃう or じゃう."
        ],
        "examples": [
          {
            "es": "大事な書類を家に忘れてしまいました。",
            "en": "daiji na shorui o ie ni wasurete shimaimashita. -- I left the important documents at home, unfortunately."
          },
          {
            "es": "財布を電車の中に忘れてしまいました。",
            "en": "saifu o densha no naka ni wasurete shimaimashita. -- I left my wallet on the train."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "大事な書類を家に（　）。 (I left the important documents at home, unfortunately.)",
            "options": [
              "忘れてくれました",
              "忘れてあげました",
              "忘れておきました",
              "忘れてしまいました"
            ],
            "correctIndex": 3,
            "explanation": "～てしまう shows completion or regret."
          }
        ]
      },
      {
        "heading": "Choosing Between the Patterns",
        "body": [
          "The main contrast is the direction of the benefit. あげる is I give, くれる is someone gives to me, and もらう is I receive. For people above you, use くださる and いただく. In casual speech, ～てしまう becomes ～ちゃう (財布を忘れちゃった)."
        ],
        "examples": [
          {
            "es": "私は友達に地図を書いてあげました。",
            "en": "watashi wa tomodachi ni chizu o kaite agemashita. -- I drew a map for my friend."
          }
        ]
      },
      {
        "heading": "Reading Practice",
        "body": [
          "Read the passage once without stopping (107 characters), then again slowly, checking each sentence against its gloss. Try to spot which pattern from this lesson is behind each sentence before you answer the questions."
        ],
        "examples": [
          {
            "es": "田中さん、先週は引っ越しを手伝ってくださって、ありがとうございました。",
            "en": "Tanaka-san, senshuu wa hikkoshi o tetsudatte kudasatte, arigatou gozaimashita. -- Mr. Tanaka, thank you for helping me move last week."
          },
          {
            "es": "一日で全部終わって、本当に助かりました。",
            "en": "tsuitachi de zenbu owatte, hontou ni tasukarimashita. -- Everything was finished in a day, and it was a real help."
          },
          {
            "es": "お礼に、今度の土曜日、夕食をごちそうしたいと思います。",
            "en": "orei ni, kondo no doyou hi, yuushoku o gochisou shitai to omoimasu. -- To thank you, I'd like to treat you to dinner this Saturday."
          },
          {
            "es": "店は私が予約しておきます。",
            "en": "mise wa watashi ga yoyaku shite okimasu. -- I'll make the reservation at the restaurant."
          },
          {
            "es": "時間は六時でいいですか。",
            "en": "jikan wa roku ji de ii desu ka. -- Is six o'clock all right?"
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "Why is the writer thanking Mr. Tanaka?",
            "options": [
              "He gave a gift",
              "He lent a car",
              "He helped with the move",
              "He cooked dinner"
            ],
            "correctIndex": 2,
            "explanation": "Tanaka helped the writer move."
          },
          {
            "type": "multiple-choice",
            "question": "What does the writer offer to do?",
            "options": [
              "Treat him to dinner on Saturday",
              "Lend him money",
              "Help him move",
              "Cook lunch on Sunday"
            ],
            "correctIndex": 0,
            "explanation": "The writer offers dinner on Saturday."
          },
          {
            "type": "multiple-choice",
            "question": "Who will make the restaurant reservation?",
            "options": [
              "A friend",
              "The writer",
              "Mr. Tanaka",
              "The restaurant will"
            ],
            "correctIndex": 1,
            "explanation": "The writer will make the reservation."
          }
        ]
      },
      {
        "heading": "Core Kanji",
        "body": [
          "These eight kanji anchor this lesson's vocabulary. For each one you see its on'yomi (Chinese-derived) and kun'yomi (native Japanese) readings, its core meanings, and a word that uses it. Learn them through the words, not in isolation.",
          "Readings are written in romaji. A dot in a kun'yomi reading marks where the kana ending of the word begins, and a dash means the reading does not apply."
        ],
        "examples": [
          {
            "es": "頼",
            "en": "rai; tano.mu, tano.moshii -- trust, request. E.g. 頼り (tayori): reliance; dependence."
          },
          {
            "es": "助",
            "en": "jo; tasu.keru, tasu.karu -- help, rescue, assist. E.g. 助成 (josei): assisting; assistance."
          },
          {
            "es": "礼",
            "en": "rei, rai -- salute, bow, ceremony. E.g. 礼 (rei): thanks; gratitude; manners."
          },
          {
            "es": "感",
            "en": "kan -- emotion, feeling, sensation. E.g. 感じ (kanji): feeling; sense."
          },
          {
            "es": "願",
            "en": "gan; nega.u, negai -- petition, request, vow. E.g. 願い (negai): desire; wish; request."
          },
          {
            "es": "相",
            "en": "sou, shou; ai -- inter-, mutual, together. E.g. 外相 (gaishou): Foreign Minister."
          },
          {
            "es": "談",
            "en": "dan -- discuss, talk. E.g. 会談 (kaidan): conversation; conference."
          },
          {
            "es": "迷",
            "en": "mei; mayo.u -- astray, be perplexed, in doubt. E.g. 低迷 (teimei): hanging low; hovering around."
          }
        ]
      },
      {
        "heading": "Kanji for Your Review Deck",
        "body": [
          "The other 24 kanji of this unit come through your daily review deck. Skim them here so they look familiar, then let spaced review do the work."
        ],
        "examples": [
          {
            "es": "求",
            "en": "kyuu, gu; moto.meru -- request, want, wish for. E.g. 求人 (kyuujin): recruiting; job offer."
          },
          {
            "es": "訪",
            "en": "hou; otozu.reru, tazu.neru -- call on, visit, look up. E.g. 訪日 (hounichi): visit to Japan."
          },
          {
            "es": "迎",
            "en": "gei; muka.eru -- welcome, meet, greet. E.g. 迎え (mukae): meeting; greeting."
          },
          {
            "es": "与",
            "en": "yo; ata.eru, azuka.ru -- bestow, participate in, give. E.g. 供与 (kyouyo): giving; provision."
          },
          {
            "es": "供",
            "en": "kyou, ku; sona.eru, tomo -- submit, offer, present. E.g. 子供 (kodomo): child."
          },
          {
            "es": "配",
            "en": "hai; kuba.ru -- distribute, spouse, exile. E.g. 心配 (shinpai): worry; concern; care."
          },
          {
            "es": "祝",
            "en": "shuku, shuu; iwa.u -- celebrate, congratulate. E.g. 祝い (iwai): congratulation; congratulations; congratulatory gift."
          },
          {
            "es": "泊",
            "en": "haku; to.maru, to.meru -- overnight stay, put up at, ride at anchor. E.g. 泊まり (tomari): overnight stay; stopover; inn."
          },
          {
            "es": "祭",
            "en": "sai; matsu.ru, matsu.ri -- ritual, offer prayers, celebrate. E.g. 祭り (matsuri): festival; feast; harassment by an Internet pitchfork mob."
          },
          {
            "es": "涙",
            "en": "rui, rei; namida -- tears, sympathy. E.g. 涙 (namida): tear; tears; sympathy."
          },
          {
            "es": "泣",
            "en": "kyuu; na.ku -- cry, weep, moan. E.g. 泣き (naki): weeping; lamenting."
          },
          {
            "es": "怒",
            "en": "do, nu; ika.ru, oko.ru -- angry, be offended. E.g. 怒り (ikari): anger; rage."
          },
          {
            "es": "忙",
            "en": "bou, mou; isoga.shii, sewa.shii -- busy, occupied, restless. E.g. 忙しい (isogashii): busy; occupied; restless."
          },
          {
            "es": "疲",
            "en": "hi; tsuka.reru, zuka.re -- exhausted, tire, weary. E.g. 疲れ (tsukare): tiredness; fatigue."
          },
          {
            "es": "眠",
            "en": "min; nemu.ru, nemu.i -- sleep, die, sleepy. E.g. 眠り (nemuri): sleep; sleeping; inactivity."
          },
          {
            "es": "暖",
            "en": "dan, non; atata.ka, atata.kai -- warmth. E.g. 暖冬 (dantou): mild winter; warm winter."
          },
          {
            "es": "涼",
            "en": "ryou; suzu.shii, suzu.mu -- refreshing, nice and cool. E.g. 涼風 (ryoufuu): cool breeze; refreshing breeze."
          },
          {
            "es": "湯",
            "en": "tou; yu -- hot water, bath, hot spring. E.g. 湯 (yu): hot water; hot bath."
          },
          {
            "es": "汗",
            "en": "kan; ase -- sweat, perspire. E.g. 汗 (ase): sweat; perspiration; moisture."
          },
          {
            "es": "靴",
            "en": "ka; kutsu -- shoes. E.g. 靴 (kutsu): shoe; shoes."
          },
          {
            "es": "髪",
            "en": "hatsu; kami -- hair of the head. E.g. 髪 (kami): hair."
          },
          {
            "es": "歯",
            "en": "shi; yowai, ha -- tooth, cog. E.g. 歯 (ha): tooth."
          },
          {
            "es": "雪",
            "en": "setsu; yuki -- snow. E.g. 雪 (yuki): snow; snowfall."
          },
          {
            "es": "窓",
            "en": "sou, su; mado, tenmado -- window, pane. E.g. 窓 (mado): window."
          }
        ]
      },
      {
        "heading": "Key Vocabulary",
        "body": [
          "These words come from this lesson's dialogue and reading, plus other common words built from the unit's kanji. The full 200-word list for this unit is in the data files that ship with the module."
        ],
        "examples": [
          {
            "es": "礼",
            "en": "rei -- thanks; gratitude; manners"
          },
          {
            "es": "お礼",
            "en": "orei -- thanks; gratitude; manners"
          },
          {
            "es": "会談",
            "en": "kaidan -- conversation; conference"
          },
          {
            "es": "外相",
            "en": "gaishou -- Foreign Minister"
          },
          {
            "es": "子供",
            "en": "kodomo -- child"
          },
          {
            "es": "首相",
            "en": "shushou -- prime minister; chancellor"
          },
          {
            "es": "相手",
            "en": "aite -- companion; partner; other party"
          },
          {
            "es": "感じ",
            "en": "kanji -- feeling; sense"
          },
          {
            "es": "相談",
            "en": "soudan -- consultation; discussion"
          },
          {
            "es": "雪",
            "en": "yuki -- snow; snowfall"
          },
          {
            "es": "低迷",
            "en": "teimei -- hanging low; hovering around"
          },
          {
            "es": "訪日",
            "en": "hounichi -- visit to Japan"
          },
          {
            "es": "感想",
            "en": "kansou -- impressions; thoughts"
          },
          {
            "es": "心配",
            "en": "shinpai -- worry; concern; care"
          },
          {
            "es": "窓",
            "en": "mado -- window"
          },
          {
            "es": "窓口",
            "en": "madoguchi -- counter; window; contact person"
          },
          {
            "es": "怒り",
            "en": "ikari -- anger; rage"
          },
          {
            "es": "涙",
            "en": "namida -- tear; tears; sympathy"
          },
          {
            "es": "助成",
            "en": "josei -- assisting; assistance"
          },
          {
            "es": "訪中",
            "en": "houchuu -- visit to China"
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "What is the reading of 頼み?",
            "options": [
              "かみがた",
              "たのみ",
              "あたえ",
              "でむかえ"
            ],
            "correctIndex": 1,
            "explanation": "頼み is read たのみ (request; favor; reliance)."
          },
          {
            "type": "multiple-choice",
            "question": "What is the reading of 配電?",
            "options": [
              "はいでん",
              "たのむ",
              "じきょう",
              "とめる"
            ],
            "correctIndex": 0,
            "explanation": "配電 is read はいでん (distribution of electricity)."
          }
        ]
      },
      {
        "heading": "Speak About It",
        "body": [
          "Use these prompts for your 30-minute chat with a native speaker, or answer them aloud on your own in full sentences that use this lesson's patterns.",
          "Writing challenge: Write an email asking a coworker or neighbor for a favor, then thanking them."
        ],
        "examples": [
          {
            "es": "最近、誰かに助けてもらったことはありますか。",
            "en": "saikin, dare ka ni tasukete moratta koto wa arimasu ka. -- Has anyone helped you lately?"
          },
          {
            "es": "誰かにしてほしいことがありますか。",
            "en": "dare ka ni shite hoshii koto ga arimasu ka. -- Is there something you want someone to do for you?"
          },
          {
            "es": "旅行の前に、いつも何をしておきますか。",
            "en": "ryokou no mae ni, itsu mo nan o shite okimasu ka. -- What do you always do in advance before a trip?"
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "私は友達に地図を書いて（　）。 (I drew a map for my friend.)",
        "options": [
          "いただきました",
          "くれました",
          "もらいました",
          "あげました"
        ],
        "correctIndex": 3,
        "explanation": "I do something for a friend: ～てあげる."
      },
      {
        "type": "multiple-choice",
        "question": "What does 感知 (かんち) mean?",
        "options": [
          "brake; drag; restraint",
          "perception; sensing",
          "idle; dormant",
          "visit; call; arrival"
        ],
        "correctIndex": 1,
        "explanation": "感知 (かんち) means perception; sensing."
      },
      {
        "type": "multiple-choice",
        "question": "What does 助力 (じょりょく) mean?",
        "options": [
          "white snow",
          "to rely on; to depend on",
          "collection and delivery",
          "assistance; support"
        ],
        "correctIndex": 3,
        "explanation": "助力 (じょりょく) means assistance; support."
      },
      {
        "type": "multiple-choice",
        "question": "Passage: もしもし、リーです。来週引っ越しをするので、荷物を運ぶのを手伝ってもらえませんか。 — What does the caller ask for?",
        "options": [
          "Help carrying belongings",
          "A car ride",
          "A place to stay",
          "A loan"
        ],
        "correctIndex": 0,
        "explanation": "The caller asks for help with carrying things."
      },
      {
        "type": "multiple-choice",
        "question": "Passage: 田中さんが、駅まで車で送ってくれたので、とても助かりました。 — What did Mr. Tanaka do?",
        "options": [
          "Cooked dinner",
          "Bought a train ticket",
          "Drove the speaker to the station",
          "Carried the luggage upstairs"
        ],
        "correctIndex": 2,
        "explanation": "くれた shows Tanaka did it for the speaker."
      },
      {
        "type": "matching",
        "instructions": "Match each word with its English meaning.",
        "pairs": [
          {
            "left": "会談",
            "right": "conversation"
          },
          {
            "left": "助力",
            "right": "assistance"
          },
          {
            "left": "助かる",
            "right": "to be saved"
          },
          {
            "left": "同窓会",
            "right": "alumni association"
          },
          {
            "left": "所感",
            "right": "impressions"
          }
        ],
        "explanation": "These words all belong to this unit's vocabulary. Check any you missed against the Key Vocabulary and Core Kanji sections."
      },
      {
        "type": "matching",
        "instructions": "Match each word with its reading.",
        "pairs": [
          {
            "left": "談話室",
            "right": "だんわしつ"
          },
          {
            "left": "一助",
            "right": "いちじょ"
          },
          {
            "left": "涙声",
            "right": "なみだごえ"
          },
          {
            "left": "間一髪",
            "right": "かんいっぱつ"
          },
          {
            "left": "助っ人",
            "right": "すけっと"
          }
        ],
        "explanation": "Reading a kanji word correctly is what lets the vocabulary stick, so say each word aloud once you have the match."
      },
      {
        "type": "matching",
        "instructions": "Match each pattern with its meaning.",
        "pairs": [
          {
            "left": "～てあげる・～てくれる・～てもらう",
            "right": "Giving and receiving an action"
          },
          {
            "left": "～ていただく・～てくださる",
            "right": "Polite forms for actions by a superior"
          },
          {
            "left": "～てほしい",
            "right": "Wanting someone to do something"
          },
          {
            "left": "～ておく",
            "right": "Do in advance, or leave as is"
          },
          {
            "left": "～てしまう",
            "right": "Completion, or regret"
          }
        ],
        "explanation": "Each pattern in this lesson has a distinct job. If any pair was hard, reread that pattern's section and its examples."
      }
    ]
  },
  {
    "slug": "passive-and-causative",
    "level": "JA-B1",
    "number": 4,
    "title": "Passive and Causative: School and Work",
    "summary": "Understand and use the passive, causative and causative-passive, from being praised or troubled by others to being made to do things and asking to be allowed to.",
    "duration": "45 min",
    "sections": [
      {
        "heading": "What This Lesson Covers",
        "body": [
          "Understand and use the passive, causative and causative-passive, from being praised or troubled by others to being made to do things and asking to be allowed to.",
          "By the end of this lesson you will be able to: (1) Describe what happened to them, including things that troubled them.  (2) Say what someone made or let another person do.  (3) Ask permission to do something in polite workplace language.",
          "Every lesson in this module follows the same path: a short dialogue that uses the patterns, one section per pattern with a quick check, a section on choosing between the patterns, a reading passage, and then the kanji and vocabulary that go with the unit."
        ]
      },
      {
        "heading": "Dialogue: Passive and Causative: School and Work",
        "body": [
          "Read the conversation once for the gist, then again line by line. Each line comes with romaji and an English gloss. Watch for the patterns in this lesson as they appear in natural speech; the sections that follow take them one at a time."
        ],
        "examples": [
          {
            "es": "田中：リーさん、さっき部長に呼ばれていましたね。",
            "en": "Tanaka: Lee-san, sakki buchou ni yobarete imashita ne. -- Tanaka: Lee, the manager called you over earlier, didn't he?"
          },
          {
            "es": "リー：ええ。明日、家族が日本に来るので、早く帰らせてもらえないか、聞いてみたんです。",
            "en": "Lee: ee. asu, kazoku ga nihon ni kuru no de, hayaku kaerasete moraenai ka, kiite mita n desu. -- Lee: Yes. My family is coming to Japan tomorrow, so I asked whether he would let me go home early."
          },
          {
            "es": "田中：それで、どうでしたか。",
            "en": "Tanaka: sore de, dou deshita ka. -- Tanaka: So, how did it go?"
          },
          {
            "es": "リー：いいと言われました。その代わり、今日の仕事を先に終わらせなければなりません。",
            "en": "Lee: ii to iwaremashita. sono kawari, kyou no shigoto o saki ni owarasenakereba narimasen. -- Lee: He said it was fine. In exchange, I have to finish today's work first."
          }
        ]
      },
      {
        "heading": "Direct passive: The subject receives an action",
        "body": [
          "Core idea: The subject receives an action.",
          "How to build it: Godan: change the last sound to the あ row + れる; ichidan: stem + られる; する → される; 来る → こられる. The doer takes に.",
          "The passive makes the affected person the subject: 私は先生にほめられました means 'I was praised by the teacher.' It suits actions that directly involve you."
        ],
        "examples": [
          {
            "es": "私は先生にほめられました。",
            "en": "watashi wa sensei ni homeraremashita. -- I was praised by the teacher."
          },
          {
            "es": "先生に名前を呼ばれて、驚きました。",
            "en": "sensei ni namae o yobarete, odorokimashita. -- I was surprised when the teacher called my name."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "私は先生に（　）。 (I was praised by the teacher.)",
            "options": [
              "ほめさせました",
              "ほめられました",
              "ほめさせられました",
              "ほめました"
            ],
            "correctIndex": 1,
            "explanation": "The passive marks the person affected as the subject."
          }
        ]
      },
      {
        "heading": "Indirect passive: Another person's action troubles the subject",
        "body": [
          "Core idea: Another person's action troubles the subject.",
          "How to build it: The same passive forms, with the affected person as subject and the thing affected (often a body part or possession) marked with を.",
          "The indirect passive is used when an action troubled the subject: 隣の人に足を踏まれました. Japanese uses it for adversity where English would simply say 'someone stepped on my foot.'"
        ],
        "examples": [
          {
            "es": "昨日、電車の中で隣の人に足を踏まれました。",
            "en": "kinou, densha no naka de tonari no hito ni ashi o fumaremashita. -- Yesterday on the train, the person next to me stepped on my foot."
          },
          {
            "es": "雨に降られて、服がぬれました。",
            "en": "ame ni furarete, fuku ga nuremashita. -- I got rained on, and my clothes got wet."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "電車の中で、隣の人に足を（　）。 (On the train, the person next to me stepped on my foot.)",
            "options": [
              "踏みました",
              "踏まれました",
              "踏ませました",
              "踏んでくれました"
            ],
            "correctIndex": 1,
            "explanation": "An indirect passive shows the subject was troubled."
          }
        ]
      },
      {
        "heading": "Causative (～させる): Make or let someone do something",
        "body": [
          "Core idea: Make or let someone do something.",
          "How to build it: Godan: last sound to the あ row + せる; ichidan: stem + させる; する → させる; 来る → こさせる.",
          "The causative means to make or let someone do something. The person made to act takes に (or を): 母は子どもに野菜を食べさせます. Context decides whether it means 'make' or 'let.'"
        ],
        "examples": [
          {
            "es": "母は子どもに野菜を食べさせます。",
            "en": "haha wa kodomo ni yasai o tabesasemasu. -- My mother makes her child eat vegetables."
          },
          {
            "es": "先生は学生に毎週レポートを書かせます。",
            "en": "sensei wa gakusei ni maishuu repooto o kakasemasu. -- The teacher makes the students write a report every week."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "母は子どもに野菜を（　）。 (My mother makes her child eat vegetables.)",
            "options": [
              "食べてもらいます",
              "食べさせられます",
              "食べさせます",
              "食べられます"
            ],
            "correctIndex": 2,
            "explanation": "The causative is the verb stem plus させる."
          }
        ]
      },
      {
        "heading": "Causative-passive (～させられる): Made to do something, often unwillingly",
        "body": [
          "Core idea: Made to do something, often unwillingly.",
          "How to build it: Causative + passive: 食べさせられる; godan verbs shorten 読ませられる to 読まされる.",
          "It means being made to do something, usually unwillingly: 母に毎日ピアノを練習させられました. It carries the speaker's reluctance."
        ],
        "examples": [
          {
            "es": "子どものとき、母に毎日ピアノを練習させられました。",
            "en": "kodomo no toki, haha ni mainichi piano o renshuu saseraremashita. -- As a child, I was made by my mother to practice piano every day."
          },
          {
            "es": "子どものころ、嫌いな野菜を食べさせられました。",
            "en": "kodomo no koro, kirai na yasai o tabesaseraremashita. -- As a child, I was made to eat vegetables I disliked."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "子どものとき、母に毎日ピアノを（　）。 (As a child, I was made to practice piano every day by my mother.)",
            "options": [
              "練習させられました",
              "練習させました",
              "練習されました",
              "練習してあげました"
            ],
            "correctIndex": 0,
            "explanation": "Made to do something is the causative-passive."
          }
        ]
      },
      {
        "heading": "～(さ)せてください: Asking permission to do something",
        "body": [
          "Core idea: Asking permission to do something.",
          "How to build it: Causative te-form + ください (帰らせてください), or ～(さ)せていただけませんか as a more polite request.",
          "It asks permission to do something yourself: 'please let me...' It is the everyday polite way to ask a superior to allow an action."
        ],
        "examples": [
          {
            "es": "明日、早く帰らせてください。",
            "en": "asu, hayaku kaerasete kudasai. -- Please let me go home early tomorrow."
          },
          {
            "es": "すみません、この資料を先に読ませてください。",
            "en": "sumimasen, kono shiryou o saki ni yomasete kudasai. -- Excuse me, please let me read these materials first."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "すみません、明日は早く（　）。 (Excuse me, please let me go home early tomorrow.)",
            "options": [
              "帰ってあげてください",
              "帰らせてください",
              "帰られてください",
              "帰らせられてください"
            ],
            "correctIndex": 1,
            "explanation": "Asking permission uses ～(さ)せてください."
          }
        ]
      },
      {
        "heading": "Choosing Between the Patterns",
        "body": [
          "The main contrast is who acts and who is affected. In the passive, the person affected is the subject. In the causative, the person who makes or allows is the subject, and the one who acts is marked with に. Group 1 verbs take ～a-ない stems (書かせる, 書かれる), group 2 verbs take ～させる and ～られる, and the irregular verbs are させる, させられる, こさせる and こられる."
        ],
        "examples": [
          {
            "es": "部長は新しい社員に、毎日コピーをさせます。",
            "en": "buchou wa atarashii shain ni, mainichi kopii o sasemasu. -- The manager has the new employees make copies every day."
          }
        ]
      },
      {
        "heading": "Reading Practice",
        "body": [
          "Read the passage once without stopping (116 characters), then again slowly, checking each sentence against its gloss. Try to spot which pattern from this lesson is behind each sentence before you answer the questions."
        ],
        "examples": [
          {
            "es": "私が小学生のころ、母は私に毎日ピアノを練習させました。",
            "en": "watashi ga shougakusei no koro, haha wa watashi ni mainichi piano o renshuu sasemashita. -- When I was in elementary school, my mother made me practice piano every day."
          },
          {
            "es": "私はピアノが好きではなかったので、いつも練習させられるのが嫌でした。",
            "en": "watashi wa piano ga suki de wa nakatta no de, itsu mo renshuu saserareru no ga iya deshita. -- I didn't like the piano, so I always hated being made to practice."
          },
          {
            "es": "でも、今は母に感謝しています。",
            "en": "de mo, ima wa haha ni kansha shite imasu. -- But now I'm grateful to my mother."
          },
          {
            "es": "あのとき練習したので、今では友達の結婚式でピアノを弾かせてもらうこともあります。",
            "en": "ano toki renshuu shita no de, ima de wa tomodachi no kekkon shiki de piano o hikasete morau koto mo arimasu. -- Because I practiced back then, these days I sometimes get to play the piano at friends' weddings."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "What did the writer's mother make the writer do as a child?",
            "options": [
              "Play soccer",
              "Help in the kitchen",
              "Practice piano every day",
              "Study English"
            ],
            "correctIndex": 2,
            "explanation": "The mother had the writer practice piano daily."
          },
          {
            "type": "multiple-choice",
            "question": "How did the writer feel about it at the time?",
            "options": [
              "They disliked being made to practice",
              "They felt proud",
              "They did not notice",
              "They loved it"
            ],
            "correctIndex": 0,
            "explanation": "The writer hated being made to practice."
          },
          {
            "type": "multiple-choice",
            "question": "How does the writer feel now?",
            "options": [
              "Still resentful",
              "Indifferent",
              "Grateful, and sometimes plays at friends' weddings",
              "Wants to quit piano"
            ],
            "correctIndex": 2,
            "explanation": "The writer is grateful and plays at weddings."
          }
        ]
      },
      {
        "heading": "Core Kanji",
        "body": [
          "These eight kanji anchor this lesson's vocabulary. For each one you see its on'yomi (Chinese-derived) and kun'yomi (native Japanese) readings, its core meanings, and a word that uses it. Learn them through the words, not in isolation.",
          "Readings are written in romaji. A dot in a kun'yomi reading marks where the kana ending of the word begins, and a dash means the reading does not apply."
        ],
        "examples": [
          {
            "es": "受",
            "en": "ju; u.keru, u.ke -- accept, undergo, answer (phone). E.g. 受験 (juken): taking an examination."
          },
          {
            "es": "課",
            "en": "ka -- chapter, lesson, section. E.g. 課題 (kadai): subject; theme; homework."
          },
          {
            "es": "業",
            "en": "gyou, gou; waza -- business, vocation, arts. E.g. 業界 (gyoukai): business world; business circles."
          },
          {
            "es": "務",
            "en": "mu; tsuto.meru -- task, duties. E.g. 事務 (jimu): office work; clerical work."
          },
          {
            "es": "勤",
            "en": "kin, gon; tsuto.meru, zuto.me -- diligence, become employed, serve. E.g. 勤務 (kinmu): service; duty."
          },
          {
            "es": "職",
            "en": "shoku, soku -- post, employment, work. E.g. 職業 (shokugyou): occupation; profession."
          },
          {
            "es": "役",
            "en": "yaku, eki -- duty, war, campaign. E.g. 役 (yaku): role; assignment; position."
          },
          {
            "es": "任",
            "en": "nin; maka.seru, maka.su -- responsibility, duty, term. E.g. 責任 (sekinin): duty; responsibility; liability."
          }
        ]
      },
      {
        "heading": "Kanji for Your Review Deck",
        "body": [
          "The other 24 kanji of this unit come through your daily review deck. Skim them here so they look familiar, then let spaced review do the work."
        ],
        "examples": [
          {
            "es": "授",
            "en": "ju; sazu.keru, sazu.karu -- impart, instruct, grant. E.g. 教授 (kyouju): professor; teaching."
          },
          {
            "es": "科",
            "en": "ka -- department, course, section. E.g. 科学 (kagaku): science."
          },
          {
            "es": "労",
            "en": "rou; rou.suru, itawa.ru -- labor, thank for, reward for. E.g. 労働者 (roudousha): employee; worker; laborer."
          },
          {
            "es": "給",
            "en": "kyuu; tama.u, tamo.u -- salary, wage, gift. E.g. 供給 (kyoukyuu): supply; provision."
          },
          {
            "es": "担",
            "en": "tan; katsu.gu, nina.u -- shouldering, carry, raise. E.g. 担任 (tannin): being in charge of; taking charge of; class teacher."
          },
          {
            "es": "採",
            "en": "sai; to.ru -- pick, take, fetch. E.g. 採用 (saiyou): use; adoption; appointment."
          },
          {
            "es": "責",
            "en": "seki; se.meru -- blame, condemn, censure. E.g. 責任 (sekinin): duty; responsibility; liability."
          },
          {
            "es": "修",
            "en": "shuu, shu; osa.meru, osa.maru -- discipline, conduct oneself well, study. E.g. 修正 (shuusei): amendment; correction."
          },
          {
            "es": "技",
            "en": "gi; waza -- skill, art, craft. E.g. 技術 (gijutsu): technology; engineering; technique."
          },
          {
            "es": "術",
            "en": "jutsu; sube -- art, technique, skill. E.g. 技術 (gijutsu): technology; engineering; technique."
          },
          {
            "es": "営",
            "en": "ei; itona.mu, itona.mi -- occupation, camp, perform. E.g. 経営 (keiei): management; administration."
          },
          {
            "es": "農",
            "en": "nou -- agriculture, farmers. E.g. 農家 (nouka): farmer; farming family; farmhouse."
          },
          {
            "es": "製",
            "en": "sei -- made in..., manufacture. E.g. 製品 (seihin): manufactured goods; finished goods."
          },
          {
            "es": "造",
            "en": "zou; tsuku.ru, tsuku.ri -- create, make, structure. E.g. 改造 (kaizou): remodeling; remodelling; modding."
          },
          {
            "es": "輸",
            "en": "yu, shu -- transport, send, be inferior. E.g. 輸出 (yushutsu): export; exportation; efferent."
          },
          {
            "es": "販",
            "en": "han -- marketing, sell, trade. E.g. 販売 (hanbai): sales; selling."
          },
          {
            "es": "収",
            "en": "shuu; osa.meru, osa.maru -- income, obtain, reap. E.g. 収入 (shuunyuu): income; receipts."
          },
          {
            "es": "費",
            "en": "hi; tsui.yasu, tsui.eru -- expense, cost, spend. E.g. 費用 (hiyou): cost; expense."
          },
          {
            "es": "算",
            "en": "san; soro -- calculate, divining, number. E.g. 通算 (tsuusan): total; sum."
          },
          {
            "es": "席",
            "en": "seki; mushiro -- seat, mat, occasion. E.g. 出席 (shusseki): attendance; presence."
          },
          {
            "es": "専",
            "en": "sen; moppa.ra -- specialty, exclusive, mainly. E.g. 専務 (senmu): special duty; being in sole charge of a duty; senior managing director."
          },
          {
            "es": "管",
            "en": "kan; kuda -- pipe, tube, wind instrument. E.g. 所管 (shokan): jurisdiction."
          },
          {
            "es": "具",
            "en": "gu; sona.eru, tsubusa.ni -- tool, utensil, means. E.g. 具体 (gutai): concrete; tangible."
          },
          {
            "es": "器",
            "en": "ki; utsuwa -- utensil, vessel, receptacle. E.g. 器 (utsuwa): bowl; vessel; ability."
          }
        ]
      },
      {
        "heading": "Key Vocabulary",
        "body": [
          "These words come from this lesson's dialogue and reading, plus other common words built from the unit's kanji. The full 200-word list for this unit is in the data files that ship with the module."
        ],
        "examples": [
          {
            "es": "課題",
            "en": "kadai -- subject; theme; homework"
          },
          {
            "es": "技術",
            "en": "gijutsu -- technology; engineering; technique"
          },
          {
            "es": "教授",
            "en": "kyouju -- professor; teaching"
          },
          {
            "es": "業界",
            "en": "gyoukai -- business world; business circles"
          },
          {
            "es": "業者",
            "en": "gyousha -- trader; dealer; fellow trader"
          },
          {
            "es": "経営",
            "en": "keiei -- management; administration"
          },
          {
            "es": "作業",
            "en": "sagyou -- work; operation"
          },
          {
            "es": "事業",
            "en": "jigyou -- project; enterprise; act"
          },
          {
            "es": "事務",
            "en": "jimu -- office work; clerical work"
          },
          {
            "es": "事務所",
            "en": "jimusho -- office"
          },
          {
            "es": "責任",
            "en": "sekinin -- duty; responsibility; liability"
          },
          {
            "es": "販売",
            "en": "hanbai -- sales; selling"
          },
          {
            "es": "輸出",
            "en": "yushutsu -- export; exportation; efferent"
          },
          {
            "es": "輸入",
            "en": "yunyuu -- import; importation; afferent"
          },
          {
            "es": "運営",
            "en": "un'ei -- management; administration"
          },
          {
            "es": "営業",
            "en": "eigyou -- business; trade; sales"
          },
          {
            "es": "科学",
            "en": "kagaku -- science"
          },
          {
            "es": "課長",
            "en": "kachou -- section manager; section chief"
          },
          {
            "es": "工業",
            "en": "kougyou -- industry"
          },
          {
            "es": "採用",
            "en": "saiyou -- use; adoption; appointment"
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "What is the reading of 転職?",
            "options": [
              "てんしょく",
              "じきゅう",
              "しょくむ",
              "こうぎょう"
            ],
            "correctIndex": 0,
            "explanation": "転職 is read てんしょく (change of occupation; career change)."
          },
          {
            "type": "multiple-choice",
            "question": "What is the reading of 事務室?",
            "options": [
              "さいはん",
              "どうぐ",
              "じむしつ",
              "じゅうやく"
            ],
            "correctIndex": 2,
            "explanation": "事務室 is read じむしつ (office)."
          }
        ]
      },
      {
        "heading": "Speak About It",
        "body": [
          "Use these prompts for your 30-minute chat with a native speaker, or answer them aloud on your own in full sentences that use this lesson's patterns.",
          "Writing challenge: Write a diary entry about a day when things happened to you, or you were made to do something."
        ],
        "examples": [
          {
            "es": "子どものころ、親に何かをさせられたことがありますか。",
            "en": "kodomo no koro, oya ni nan ka o saserareta koto ga arimasu ka. -- As a child, were you ever made to do something by your parents?"
          },
          {
            "es": "最近、誰かにほめられたことはありますか。",
            "en": "saikin, dare ka ni homerareta koto wa arimasu ka. -- Has anyone praised you lately?"
          },
          {
            "es": "仕事や学校で、「これをさせてください」とお願いしたことがありますか。",
            "en": "shigoto ya gakkou de, \"kore o sasete kudasai\" to onegai shita koto ga arimasu ka. -- Have you ever asked, \"Please let me do this,\" at work or school?"
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "部長は新しい社員に、毎日コピーを（　）。 (The manager has the new employees make copies every day.)",
        "options": [
          "させます",
          "しておきます",
          "させられます",
          "されます"
        ],
        "correctIndex": 0,
        "explanation": "The manager is the one who makes the others act."
      },
      {
        "type": "multiple-choice",
        "question": "What does 用具 (ようぐ) mean?",
        "options": [
          "to levy; to charge",
          "molding; moulding",
          "tool; implement",
          "duty; obligation"
        ],
        "correctIndex": 2,
        "explanation": "用具 (ようぐ) means tool; implement."
      },
      {
        "type": "multiple-choice",
        "question": "What does 勤務 (きんむ) mean?",
        "options": [
          "service; duty",
          "medical specialist",
          "lesson; class work",
          "retirement; resignation"
        ],
        "correctIndex": 0,
        "explanation": "勤務 (きんむ) means service; duty."
      },
      {
        "type": "multiple-choice",
        "question": "Passage: 昨日は大変でした。部長に会議の資料を作らされて、家に帰るのが遅くなりました。 — Why did the speaker get home late?",
        "options": [
          "Missed the train",
          "Was made to prepare meeting materials",
          "Went shopping",
          "Had dinner with a friend"
        ],
        "correctIndex": 1,
        "explanation": "作らされて is the causative-passive."
      },
      {
        "type": "multiple-choice",
        "question": "Passage: すみません、来週の金曜日、休ませていただけませんか。 — What does the speaker ask for?",
        "options": [
          "Permission to take Friday off",
          "A new desk",
          "A day to work from home",
          "A raise"
        ],
        "correctIndex": 0,
        "explanation": "休ませていただけませんか asks for permission."
      },
      {
        "type": "matching",
        "instructions": "Match each word with its English meaning.",
        "pairs": [
          {
            "left": "受け止める",
            "right": "to catch"
          },
          {
            "left": "専門学校",
            "right": "vocational school"
          },
          {
            "left": "工業",
            "right": "industry"
          },
          {
            "left": "責任感",
            "right": "sense of responsibility"
          },
          {
            "left": "専務",
            "right": "special duty"
          }
        ],
        "explanation": "These words all belong to this unit's vocabulary. Check any you missed against the Key Vocabulary and Core Kanji sections."
      },
      {
        "type": "matching",
        "instructions": "Match each word with its reading.",
        "pairs": [
          {
            "left": "受給",
            "right": "じゅきゅう"
          },
          {
            "left": "業者",
            "right": "ぎょうしゃ"
          },
          {
            "left": "出席",
            "right": "しゅっせき"
          },
          {
            "left": "技術者",
            "right": "ぎじゅつしゃ"
          },
          {
            "left": "事務",
            "right": "じむ"
          }
        ],
        "explanation": "Reading a kanji word correctly is what lets the vocabulary stick, so say each word aloud once you have the match."
      },
      {
        "type": "matching",
        "instructions": "Match each pattern with its meaning.",
        "pairs": [
          {
            "left": "Direct passive",
            "right": "The subject receives an action"
          },
          {
            "left": "Indirect passive",
            "right": "Another person's action troubles the subject"
          },
          {
            "left": "Causative (～させる)",
            "right": "Make or let someone do something"
          },
          {
            "left": "Causative-passive (～させられる)",
            "right": "Made to do something, often unwillingly"
          },
          {
            "left": "～(さ)せてください",
            "right": "Asking permission to do something"
          }
        ],
        "explanation": "Each pattern in this lesson has a distinct job. If any pair was hard, reread that pattern's section and its examples."
      }
    ]
  },
  {
    "slug": "timing-and-schedules",
    "level": "JA-B1",
    "number": 5,
    "title": "Timing and Schedules",
    "summary": "Pinpoint the moment and the period of an action with ところだ, たばかり, うちに, 間に and たびに.",
    "duration": "45 min",
    "sections": [
      {
        "heading": "What This Lesson Covers",
        "body": [
          "Pinpoint the moment and the period of an action with ところだ, たばかり, うちに, 間に and たびに.",
          "By the end of this lesson you will be able to: (1) Say whether an action is about to start, in progress, or just finished.  (2) Describe what happens during a period, or every time something occurs.  (3) Give a simple schedule in writing or on the phone.",
          "Every lesson in this module follows the same path: a short dialogue that uses the patterns, one section per pattern with a quick check, a section on choosing between the patterns, a reading passage, and then the kanji and vocabulary that go with the unit."
        ]
      },
      {
        "heading": "Dialogue: Timing and Schedules",
        "body": [
          "Read the conversation once for the gist, then again line by line. Each line comes with romaji and an English gloss. Watch for the patterns in this lesson as they appear in natural speech; the sections that follow take them one at a time."
        ],
        "examples": [
          {
            "es": "田中：もしもし、リーさん。今、どこですか。",
            "en": "Tanaka: moshimoshi, Lee-san. ima, doko desu ka. -- Tanaka: Hello, Lee. Where are you now?"
          },
          {
            "es": "リー：今、駅を出たところです。あと五分で着きます。",
            "en": "Lee: ima, eki o deta tokoro desu. ato go fun de tsukimasu. -- Lee: I've just left the station. I'll be there in five minutes."
          },
          {
            "es": "田中：会議の前に、少し話せますか。",
            "en": "Tanaka: kaigi no mae ni, sukoshi hanasemasu ka. -- Tanaka: Can we talk for a bit before the meeting?"
          },
          {
            "es": "リー：はい。会議が始まらないうちに、質問を書いておきます。",
            "en": "Lee: hai. kaigi ga hajimaranai uchi ni, shitsumon o kaite okimasu. -- Lee: Yes. I'll write down my questions before the meeting starts."
          }
        ]
      },
      {
        "heading": "～ところだ: About to, in the middle of, or just finished",
        "body": [
          "Core idea: About to, in the middle of, or just finished.",
          "How to build it: Dictionary form + ところだ (about to); ている + ところだ (in the middle of); た + ところだ (just now finished).",
          "ところ points to an exact moment in the action. 出るところ is just before leaving, 出ているところ is midway, and 出たところ is just after. It suits immediate situations such as a phone call."
        ],
        "examples": [
          {
            "es": "今、家を出るところです。",
            "en": "ima, ie o deru tokoro desu. -- I am just about to leave the house."
          },
          {
            "es": "ちょうど今、ご飯を食べているところです。",
            "en": "choudo ima, gohan o tabete iru tokoro desu. -- I am in the middle of eating a meal right now."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "今、家を（　）。 (I am just about to leave the house now.)",
            "options": [
              "出るところです",
              "出たばかりです",
              "出ていたところです",
              "出ているばかりです"
            ],
            "correctIndex": 0,
            "explanation": "The dictionary form plus ところ means about to."
          }
        ]
      },
      {
        "heading": "～たばかりだ: Just did, and it still feels recent",
        "body": [
          "Core idea: Just did, and it still feels recent.",
          "How to build it: た-form + ばかりだ.",
          "It means something happened recently, in the speaker's own sense of 'not long ago.' The span can be a week or a month. Unlike ところだ, it is a feeling of recency, not a precise moment."
        ],
        "examples": [
          {
            "es": "先週、日本に来たばかりです。",
            "en": "senshuu, nihon ni kita bakari desu. -- I only came to Japan last week."
          },
          {
            "es": "昨日、この町に引っ越してきたばかりです。",
            "en": "kinou, kono machi ni hikkoshite kita bakari desu. -- I only moved to this town yesterday."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "先週、日本に（　）。 (I only came to Japan last week.)",
            "options": [
              "来るところです",
              "来たところです",
              "来たばかりです",
              "来ているところです"
            ],
            "correctIndex": 2,
            "explanation": "たばかり suits a recent event, even a week ago."
          }
        ]
      },
      {
        "heading": "～うちに: Do it before the situation changes",
        "body": [
          "Core idea: Do it before the situation changes.",
          "How to build it: Dictionary form, ない-form, ている-form or adjective + うちに.",
          "It means 'before the situation changes' or 'while it lasts': 忘れないうちに is 'before I forget.' It often carries a sense that you should act while conditions allow."
        ],
        "examples": [
          {
            "es": "忘れないうちに、メモしておきます。",
            "en": "wasurenai uchi ni, memo shite okimasu. -- I will write it down before I forget."
          },
          {
            "es": "雨が降らないうちに、洗濯物を取り込みましょう。",
            "en": "ame ga furanai uchi ni, sentakubutsu o torikomimashou. -- Let's bring in the laundry before it rains."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "忘れない（　）、メモしておきます。 (I will write a note before I forget.)",
            "options": [
              "うちに",
              "ばかりに",
              "ところに",
              "たびに"
            ],
            "correctIndex": 0,
            "explanation": "うちに means before the state changes."
          }
        ]
      },
      {
        "heading": "～間に: During a period of time",
        "body": [
          "Core idea: During a period of time.",
          "How to build it: Noun + の間に; verb (ている-form) + 間に; adjective + 間に.",
          "It marks something that happens within a period while another state continues: 母が買い物をしている間に is 'while my mother was out shopping.' The main action happens once, inside that period."
        ],
        "examples": [
          {
            "es": "母が買い物をしている間に、私は部屋を掃除しました。",
            "en": "haha ga kaimono o shite iru aida ni, watashi wa heya o souji shimashita. -- While my mother was shopping, I cleaned the room."
          },
          {
            "es": "電車に乗っている間に、本を読みました。",
            "en": "densha ni notte iru aida ni, hon o yomimashita. -- I read a book while I was on the train."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "母が買い物をしている（　）、私は部屋を掃除しました。 (While my mother was shopping, I cleaned the room.)",
            "options": [
              "間に",
              "ところを",
              "たびに",
              "ばかりに"
            ],
            "correctIndex": 0,
            "explanation": "間に marks the period during which something happens."
          }
        ]
      },
      {
        "heading": "～たびに: Every time",
        "body": [
          "Core idea: Every time.",
          "How to build it: Dictionary form, or noun + の, + たびに.",
          "It means 'every time...' and links a repeated trigger to a repeated response: この写真を見るたびに、大学時代を思い出します."
        ],
        "examples": [
          {
            "es": "この写真を見るたびに、大学時代を思い出します。",
            "en": "kono shashin o miru tabi ni, daigaku jidai o omoidashimasu. -- Every time I see this photo, I remember my college days."
          },
          {
            "es": "京都に行くたびに、お寺に行きます。",
            "en": "Kyoto ni iku tabi ni, otera ni ikimasu. -- Every time I go to Kyoto, I visit a temple."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "この写真を見る（　）、大学時代を思い出します。 (Every time I see this photo, I remember my college days.)",
            "options": [
              "ところに",
              "ばかりに",
              "たびに",
              "ために"
            ],
            "correctIndex": 2,
            "explanation": "たびに means every time."
          }
        ]
      },
      {
        "heading": "Choosing Between the Patterns",
        "body": [
          "The main contrasts are ところだ against ばかり, and うちに against 間に. ところだ marks the exact moment and has three forms: dictionary form (about to), ている (in the middle of) and た (just finished). ばかり is the speaker's feeling that it was recent. うちに suggests acting before a state ends, while 間に only marks the period."
        ],
        "examples": [
          {
            "es": "今、駅を出たところです。あと五分で着きます。",
            "en": "ima, eki o deta tokoro desu. ato go fun de tsukimasu. -- I have just left the station. I will arrive in five minutes."
          }
        ]
      },
      {
        "heading": "Reading Practice",
        "body": [
          "Read the passage once without stopping (112 characters), then again slowly, checking each sentence against its gloss. Try to spot which pattern from this lesson is behind each sentence before you answer the questions."
        ],
        "examples": [
          {
            "es": "来月、大阪へ出張することになりました。",
            "en": "raigetsu, Osaka e shutchou suru koto ni narimashita. -- It has been decided that I will go on a business trip to Osaka next month."
          },
          {
            "es": "月曜日の朝、家を出るときに、荷物をもう一度確認するつもりです。",
            "en": "getsuyou hi no asa, ie o deru toki ni, nimotsu o mou ichi do kakunin suru tsumori desu. -- On Monday morning, when I leave the house, I plan to check my luggage once more."
          },
          {
            "es": "出張の間に、友達にも会いたいと思っています。",
            "en": "shutchou no aida ni, tomodachi ni mo aitai to omotte imasu. -- During the trip, I'd like to see a friend as well."
          },
          {
            "es": "今は、ホテルを予約したところです。",
            "en": "ima wa, hoteru o yoyaku shita tokoro desu. -- Right now, I have just booked the hotel."
          },
          {
            "es": "忘れないうちに、新幹線の切符も買っておきます。",
            "en": "wasurenai uchi ni, Shinkansen no kippu mo katte okimasu. -- Before I forget, I'll buy the Shinkansen ticket too."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "Where is the writer going next month?",
            "options": [
              "Fukuoka",
              "Osaka",
              "Tokyo",
              "Kyoto"
            ],
            "correctIndex": 1,
            "explanation": "The trip is to Osaka."
          },
          {
            "type": "multiple-choice",
            "question": "What has the writer just done?",
            "options": [
              "Bought a ticket",
              "Met a friend",
              "Packed a suitcase",
              "Booked a hotel"
            ],
            "correctIndex": 3,
            "explanation": "The writer has just made a hotel reservation."
          },
          {
            "type": "multiple-choice",
            "question": "What will the writer buy so as not to forget?",
            "options": [
              "A guidebook",
              "A hotel voucher",
              "A Shinkansen ticket",
              "A suitcase"
            ],
            "correctIndex": 2,
            "explanation": "The writer plans to buy a Shinkansen ticket."
          }
        ]
      },
      {
        "heading": "Core Kanji",
        "body": [
          "These eight kanji anchor this lesson's vocabulary. For each one you see its on'yomi (Chinese-derived) and kun'yomi (native Japanese) readings, its core meanings, and a word that uses it. Learn them through the words, not in isolation.",
          "Readings are written in romaji. A dot in a kun'yomi reading marks where the kana ending of the word begins, and a dash means the reading does not apply."
        ],
        "examples": [
          {
            "es": "最",
            "en": "sai, shu; motto.mo, tsuma -- utmost, most, extreme. E.g. 最も (mottomo): most; extremely."
          },
          {
            "es": "期",
            "en": "ki, go -- period, time, date. E.g. 期間 (kikan): period; term."
          },
          {
            "es": "際",
            "en": "sai; kiwa, giwa -- occasion, side, edge. E.g. 国際化 (kokusaika): internationalization; internationalisation."
          },
          {
            "es": "直",
            "en": "choku, jiki; tada.chini, nao.su -- straightaway, honesty, frankness. E.g. 見直し (minaoshi): review; reconsideration."
          },
          {
            "es": "度",
            "en": "do, to; tabi, ta.i -- degrees, occurrence, time. E.g. 今度 (kondo): this time; now; next time."
          },
          {
            "es": "頃",
            "en": "kei, kyou; koro, goro -- time, about, toward. E.g. この頃 (konogoro): these days; nowadays."
          },
          {
            "es": "定",
            "en": "tei, jou; sada.meru, sada.maru -- determine, fix, establish. E.g. 決定 (kettei): decision; determination."
          },
          {
            "es": "約",
            "en": "yaku; tsuzu.maru, tsuzu.meru -- promise, approximately, shrink. E.g. 予約 (yoyaku): reservation; appointment; contract."
          }
        ]
      },
      {
        "heading": "Kanji for Your Review Deck",
        "body": [
          "The other 24 kanji of this unit come through your daily review deck. Skim them here so they look familiar, then let spaced review do the work."
        ],
        "examples": [
          {
            "es": "末",
            "en": "matsu, batsu; sue, ura -- end, close, tip. E.g. 年末 (nenmatsu): end-of-year."
          },
          {
            "es": "歳",
            "en": "sai, sei; toshi, tose -- year-end, age, occasion. E.g. 歳出 (saishutsu): annual expenditure."
          },
          {
            "es": "第",
            "en": "dai, tei -- No., residence. E.g. 次第に (shidaini): gradually; in sequence."
          },
          {
            "es": "番",
            "en": "ban; tsuga.i -- turn, number in a series. E.g. 番号 (bangou): number; series of digits."
          },
          {
            "es": "限",
            "en": "gen; kagi.ru, kagi.ri -- limit, restrict, to best of ability. E.g. 期限 (kigen): term; period; time limit."
          },
          {
            "es": "追",
            "en": "tsui; o.u -- chase, drive away, follow. E.g. 追う (ou): to chase; to run after; to follow."
          },
          {
            "es": "速",
            "en": "soku; haya.i, haya -- quick, fast. E.g. 急速 (kyuusoku): rapid."
          },
          {
            "es": "周",
            "en": "shuu; mawa.ri -- circumference, circuit, lap. E.g. 周辺 (shuuhen): circumference; outskirts; peripheral."
          },
          {
            "es": "港",
            "en": "kou; minato -- harbor. E.g. 空港 (kuukou): airport."
          },
          {
            "es": "路",
            "en": "ro, ru; ji, michi -- path, route, road. E.g. 道路 (douro): road; highway."
          },
          {
            "es": "線",
            "en": "sen; suji -- line, track. E.g. 路線 (rosen): route; line."
          },
          {
            "es": "橋",
            "en": "kyou; hashi -- bridge. E.g. 橋 (hashi): bridge."
          },
          {
            "es": "島",
            "en": "tou; shima -- island. E.g. 島 (shima): island; one's territory."
          },
          {
            "es": "辺",
            "en": "hen; ata.ri, hoto.ri -- environs, boundary, border. E.g. 周辺 (shuuhen): circumference; outskirts; peripheral."
          },
          {
            "es": "渡",
            "en": "to; wata.ru, wata.ru -- transit, ford, ferry. E.g. 言い渡す (iiwatasu): to announce; to tell."
          },
          {
            "es": "飛",
            "en": "hi; to.bu, to.basu -- fly, skip (pages), scatter. E.g. 飛行 (hikou): aviation; flight; to fly."
          },
          {
            "es": "降",
            "en": "kou, go; o.riru, o.rosu -- descend, precipitate, fall. E.g. 降りる (oriru): to descend; to go down; to alight."
          },
          {
            "es": "登",
            "en": "tou, to; nobo.ru, a.garu -- ascend, climb up. E.g. 登録 (touroku): registration; accession."
          },
          {
            "es": "座",
            "en": "za; suwa.ru -- squat, seat, cushion. E.g. 座 (za): seat; place; position."
          },
          {
            "es": "券",
            "en": "ken -- ticket. E.g. 旅券 (ryoken): passport."
          },
          {
            "es": "宅",
            "en": "taku -- home, house, residence. E.g. 自宅 (jitaku): one's home; one's house."
          },
          {
            "es": "戸",
            "en": "ko; to -- door, counter for houses, door radical (no. 63). E.g. 戸 (to): door; shutter."
          },
          {
            "es": "残",
            "en": "zan, san; noko.ru, noko.su -- remainder, leftover, balance. E.g. 残す (nokosu): to leave."
          },
          {
            "es": "除",
            "en": "jo, ji; nozo.ku, yo.ke -- exclude, division (x/3), remove. E.g. 除去 (jokyo): removal; getting rid of."
          }
        ]
      },
      {
        "heading": "Key Vocabulary",
        "body": [
          "These words come from this lesson's dialogue and reading, plus other common words built from the unit's kanji. The full 200-word list for this unit is in the data files that ship with the module."
        ],
        "examples": [
          {
            "es": "一度",
            "en": "ichido -- once; one time; temporarily"
          },
          {
            "es": "予約",
            "en": "yoyaku -- reservation; appointment; contract"
          },
          {
            "es": "期間",
            "en": "kikan -- period; term"
          },
          {
            "es": "期待",
            "en": "kitai -- expectation; anticipation; promising"
          },
          {
            "es": "空港",
            "en": "kuukou -- airport"
          },
          {
            "es": "決定",
            "en": "kettei -- decision; determination"
          },
          {
            "es": "最も",
            "en": "mottomo -- most; extremely"
          },
          {
            "es": "最後",
            "en": "saigo -- end; conclusion; last"
          },
          {
            "es": "時期",
            "en": "jiki -- time; season"
          },
          {
            "es": "自宅",
            "en": "jitaku -- one's home; one's house"
          },
          {
            "es": "周辺",
            "en": "shuuhen -- circumference; outskirts; peripheral"
          },
          {
            "es": "住宅",
            "en": "juutaku -- residence; housing"
          },
          {
            "es": "予定",
            "en": "yotei -- plans; arrangement"
          },
          {
            "es": "見直し",
            "en": "minaoshi -- review; reconsideration"
          },
          {
            "es": "今度",
            "en": "kondo -- this time; now; next time"
          },
          {
            "es": "直後",
            "en": "chokugo -- immediately following"
          },
          {
            "es": "直前",
            "en": "chokuzen -- just before"
          },
          {
            "es": "島",
            "en": "shima -- island; one's territory"
          },
          {
            "es": "道路",
            "en": "douro -- road; highway"
          },
          {
            "es": "座",
            "en": "za -- seat; place; position"
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "What is the reading of 除去?",
            "options": [
              "じょきょ",
              "しょうじき",
              "くうこう",
              "いっしゅう"
            ],
            "correctIndex": 0,
            "explanation": "除去 is read じょきょ (removal; getting rid of)."
          },
          {
            "type": "multiple-choice",
            "question": "What is the reading of 二度?",
            "options": [
              "にど",
              "さんど",
              "とうき",
              "さいご"
            ],
            "correctIndex": 0,
            "explanation": "二度 is read にど (two times; twice; two degrees)."
          }
        ]
      },
      {
        "heading": "Speak About It",
        "body": [
          "Use these prompts for your 30-minute chat with a native speaker, or answer them aloud on your own in full sentences that use this lesson's patterns.",
          "Writing challenge: Write a trip or event schedule as an email, in 300 characters."
        ],
        "examples": [
          {
            "es": "今、何をしているところですか。",
            "en": "ima, nan o shite iru tokoro desu ka. -- What are you in the middle of doing right now?"
          },
          {
            "es": "最近、始めたばかりのことがありますか。",
            "en": "saikin, hajimeta bakari no koto ga arimasu ka. -- Is there something you have only just started?"
          },
          {
            "es": "旅行のたびに、必ずすることは何ですか。",
            "en": "ryokou no tabi ni, kanarazu suru koto wa nan desu ka. -- What do you always do every time you travel?"
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "今、駅を（　）。あと五分で着きます。 (I have just left the station. I will arrive in five minutes.)",
        "options": [
          "出ていたところです",
          "出たところです",
          "出ているばかりです",
          "出るところです"
        ],
        "correctIndex": 1,
        "explanation": "た plus ところ is the moment just after."
      },
      {
        "type": "multiple-choice",
        "question": "What does 最前線 (さいぜんせん) mean?",
        "options": [
          "hypothesis; supposition",
          "infrared rays; infrared radiation",
          "front line; forefront",
          "pursuit; search"
        ],
        "correctIndex": 2,
        "explanation": "最前線 (さいぜんせん) means front line; forefront."
      },
      {
        "type": "multiple-choice",
        "question": "What does 最後 (さいご) mean?",
        "options": [
          "island country",
          "air route; air lane; by air",
          "end; conclusion; last",
          "period; term"
        ],
        "correctIndex": 2,
        "explanation": "最後 (さいご) means end; conclusion; last."
      },
      {
        "type": "multiple-choice",
        "question": "Passage: 今、会社を出たところです。あと十分で着きます。 — Where is the speaker now?",
        "options": [
          "Just left the office",
          "Still at the office",
          "At home",
          "Already at the destination"
        ],
        "correctIndex": 0,
        "explanation": "出たところ means just left."
      },
      {
        "type": "multiple-choice",
        "question": "Passage: 先月、日本に来たばかりなので、まだわからないことが多いです。 — Why does the speaker not know many things yet?",
        "options": [
          "Has not studied",
          "Arrived in Japan only last month",
          "Lived in Japan for years",
          "Is on vacation"
        ],
        "correctIndex": 1,
        "explanation": "たばかり shows a recent arrival."
      },
      {
        "type": "matching",
        "instructions": "Match each word with its English meaning.",
        "pairs": [
          {
            "left": "第一声",
            "right": "first words said"
          },
          {
            "left": "飛び火",
            "right": "leaping flames"
          },
          {
            "left": "学期",
            "right": "school term"
          },
          {
            "left": "三味線",
            "right": "shamisen"
          },
          {
            "left": "始末",
            "right": "management"
          }
        ],
        "explanation": "These words all belong to this unit's vocabulary. Check any you missed against the Key Vocabulary and Core Kanji sections."
      },
      {
        "type": "matching",
        "instructions": "Match each word with its reading.",
        "pairs": [
          {
            "left": "追っかける",
            "right": "おっかける"
          },
          {
            "left": "周辺",
            "right": "しゅうへん"
          },
          {
            "left": "飛び火",
            "right": "とびひ"
          },
          {
            "left": "国際化",
            "right": "こくさいか"
          },
          {
            "left": "速やか",
            "right": "すみやか"
          }
        ],
        "explanation": "Reading a kanji word correctly is what lets the vocabulary stick, so say each word aloud once you have the match."
      },
      {
        "type": "matching",
        "instructions": "Match each pattern with its meaning.",
        "pairs": [
          {
            "left": "～ところだ",
            "right": "About to, in the middle of, or just finished"
          },
          {
            "left": "～たばかりだ",
            "right": "Just did, and it still feels recent"
          },
          {
            "left": "～うちに",
            "right": "Do it before the situation changes"
          },
          {
            "left": "～間に",
            "right": "During a period of time"
          },
          {
            "left": "～たびに",
            "right": "Every time"
          }
        ],
        "explanation": "Each pattern in this lesson has a distinct job. If any pair was hard, reread that pattern's section and its examples."
      }
    ]
  },
  {
    "slug": "reasons-causes-and-purposes",
    "level": "JA-B1",
    "number": 6,
    "title": "Reasons, Causes and Purposes",
    "summary": "Explain why something happened and what you did it for, with せいで, おかげで, ために, ように and のに.",
    "duration": "45 min",
    "sections": [
      {
        "heading": "What This Lesson Covers",
        "body": [
          "Explain why something happened and what you did it for, with せいで, おかげで, ために, ように and のに.",
          "By the end of this lesson you will be able to: (1) Explain a cause and show whether the result was good or bad.  (2) State a purpose for an action, and choose between two purpose patterns.  (3) Express surprise or disappointment when a result is not what they expected.",
          "Every lesson in this module follows the same path: a short dialogue that uses the patterns, one section per pattern with a quick check, a section on choosing between the patterns, a reading passage, and then the kanji and vocabulary that go with the unit."
        ]
      },
      {
        "heading": "Dialogue: Reasons, Causes and Purposes",
        "body": [
          "Read the conversation once for the gist, then again line by line. Each line comes with romaji and an English gloss. Watch for the patterns in this lesson as they appear in natural speech; the sections that follow take them one at a time."
        ],
        "examples": [
          {
            "es": "田中：リーさん、遅かったですね。",
            "en": "Tanaka: Lee-san, osokatta desu ne. -- Tanaka: You're late, Lee."
          },
          {
            "es": "リー：すみません。電車が止まったせいで、一時間も遅れてしまいました。",
            "en": "Lee: sumimasen. densha ga tomatta sei de, ichi jikan mo okurete shimaimashita. -- Lee: I'm sorry. Because the train stopped, I was an hour late."
          },
          {
            "es": "田中：それは大変でしたね。リーさんが連絡してくれたおかげで、会議を少し遅らせることができました。",
            "en": "Tanaka: sore wa taihen deshita ne. Lee-san ga renraku shite kureta okage de, kaigi o sukoshi okuraseru koto ga dekimashita. -- Tanaka: That was rough. Thanks to your call, we were able to delay the meeting a little."
          },
          {
            "es": "リー：ありがとうございます。次からは、遅れないように、早く家を出ます。",
            "en": "Lee: arigatou gozaimasu. tsugi kara wa, okurenai you ni, hayaku ie o demasu. -- Lee: Thank you. From next time, I'll leave home early so that I'm not late."
          }
        ]
      },
      {
        "heading": "～せいで: A negative cause",
        "body": [
          "Core idea: A negative cause: because of, blaming.",
          "How to build it: Plain form + せいで (noun + の + せいで).",
          "It gives a cause with blame attached, so the result is bad: 電車が遅れたせいで. It puts responsibility on the cause and is never used for a good outcome."
        ],
        "examples": [
          {
            "es": "電車が遅れたせいで、会議に遅れました。",
            "en": "densha ga okureta sei de, kaigi ni okuremashita. -- Because the train was delayed, I was late for the meeting."
          },
          {
            "es": "寝坊したせいで、電車に乗り遅れました。",
            "en": "nebou shita sei de, densha ni nori okuremashita. -- Because I overslept, I missed the train."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "電車が遅れた（　）、会議に遅れました。 (Because the train was delayed, I was late for the meeting (blame).)",
            "options": [
              "おかげで",
              "せいで",
              "のに",
              "ように"
            ],
            "correctIndex": 1,
            "explanation": "せいで gives a negative cause."
          }
        ]
      },
      {
        "heading": "～おかげで: A positive cause",
        "body": [
          "Core idea: A positive cause: thanks to.",
          "How to build it: Plain form + おかげで (noun + の + おかげで).",
          "It credits a cause for a good result: 先生が教えてくれたおかげで. Used sarcastically it can mean the opposite, so keep it for genuine thanks."
        ],
        "examples": [
          {
            "es": "先生が教えてくれたおかげで、試験に合格しました。",
            "en": "sensei ga oshiete kureta okage de, shiken ni goukaku shimashita. -- Thanks to the teacher's help, I passed the exam."
          },
          {
            "es": "友達が手伝ってくれたおかげで、早く終わりました。",
            "en": "tomodachi ga tetsudatte kureta okage de, hayaku owarimashita. -- Thanks to my friend's help, it was finished early."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "先生が教えてくれた（　）、試験に合格しました。 (Thanks to the teacher's help, I passed the exam.)",
            "options": [
              "ように",
              "のに",
              "おかげで",
              "せいで"
            ],
            "correctIndex": 2,
            "explanation": "おかげで gives a positive cause."
          }
        ]
      },
      {
        "heading": "～ために: A purpose the speaker chooses, or a formal cause",
        "body": [
          "Core idea: A purpose the speaker chooses, or a formal cause.",
          "How to build it: Dictionary form + ために (purpose); noun + の + ために; plain form + ために (formal cause).",
          "As a purpose, ために needs a goal the speaker controls, with the same subject in both parts: 日本語を勉強するために. As a formal cause it links a fact to its result: 事故のために電車が遅れた."
        ],
        "examples": [
          {
            "es": "日本語を勉強するために、毎日アプリを使っています。",
            "en": "nihongo o benkyou suru tame ni, mainichi apuri o tsukatte imasu. -- To study Japanese, I use an app every day."
          },
          {
            "es": "健康のために、毎朝走っています。",
            "en": "kenkou no tame ni, maiasa hashitte imasu. -- I run every morning for the sake of my health."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "日本語を勉強する（　）、毎日アプリを使っています。 (In order to study Japanese, I use an app every day.)",
            "options": [
              "ために",
              "ので",
              "せいで",
              "おかげで"
            ],
            "correctIndex": 0,
            "explanation": "ために needs a purpose the speaker controls."
          }
        ]
      },
      {
        "heading": "～ように (purpose): A purpose that is a state, a potential, or a negative",
        "body": [
          "Core idea: A purpose that is a state, a potential, or a negative.",
          "How to build it: Dictionary form, ない-form or potential form + ように.",
          "It expresses a purpose that is a state or is not fully in your control: 話せるように, 遅れないように. Use it with potential verbs, with negatives, or when the two subjects differ."
        ],
        "examples": [
          {
            "es": "忘れないように、メモを取ります。",
            "en": "wasurenai you ni, memo o torimasu. -- I take notes so that I don't forget."
          },
          {
            "es": "電車に間に合うように、走りました。",
            "en": "densha ni maniau you ni, hashirimashita. -- I ran so that I would catch the train."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "日本語が話せる（　）、毎日練習しています。 (I practice every day so that I can speak Japanese.)",
            "options": [
              "ように",
              "せいで",
              "ために",
              "おかげで"
            ],
            "correctIndex": 0,
            "explanation": "A potential or state as the purpose takes ように."
          }
        ]
      },
      {
        "heading": "～のに: Contrast",
        "body": [
          "Core idea: Contrast: despite, with a note of surprise or regret.",
          "How to build it: Plain form + のに (な-adjective and noun take な + のに).",
          "It shows a contrast with what was expected: 毎日勉強したのに、試験に落ちました. It carries surprise or dissatisfaction and cannot be followed by a command or request."
        ],
        "examples": [
          {
            "es": "毎日勉強したのに、試験に落ちました。",
            "en": "mainichi benkyou shita no ni, shiken ni ochimashita. -- Even though I studied every day, I failed the exam."
          },
          {
            "es": "天気がいいのに、家にいます。",
            "en": "tenki ga ii no ni, ie ni imasu. -- Even though the weather is nice, I am staying home."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "毎日勉強した（　）、試験に落ちました。 (Even though I studied every day, I failed the exam.)",
            "options": [
              "のに",
              "から",
              "ために",
              "ので"
            ],
            "correctIndex": 0,
            "explanation": "のに shows a contrast with what was expected."
          }
        ]
      },
      {
        "heading": "Choosing Between the Patterns",
        "body": [
          "The main contrast is ために against ように. ために needs a purpose the speaker controls and the same subject in both halves. ように is used when the purpose is a state, a potential form, a negative, or a different subject. せいで and おかげで differ only in whether the speaker sees the result as bad or good."
        ],
        "examples": [
          {
            "es": "雨が降ったせいで、遠足が中止になりました。",
            "en": "ame ga futta sei de, ensoku ga chuushi ni narimashita. -- Because it rained (unfortunately), the field trip was cancelled."
          }
        ]
      },
      {
        "heading": "Reading Practice",
        "body": [
          "Read the passage once without stopping (144 characters), then again slowly, checking each sentence against its gloss. Try to spot which pattern from this lesson is behind each sentence before you answer the questions."
        ],
        "examples": [
          {
            "es": "先週、私は会議に遅れてしまいました。",
            "en": "senshuu, watashi wa kaigi ni okurete shimaimashita. -- Last week, I was late for a meeting."
          },
          {
            "es": "電車が止まったせいです。",
            "en": "densha ga tomatta sei desu. -- It was because the train stopped."
          },
          {
            "es": "私は早く家を出たのに、駅で三十分も待ちました。",
            "en": "watashi wa hayaku ie o deta no ni, eki de sanjuu fun mo machimashita. -- Even though I left home early, I waited thirty minutes at the station."
          },
          {
            "es": "ほかの人に迷惑をかけないように、すぐ会社に連絡しました。",
            "en": "hoka no hito ni meiwaku o kakenai you ni, sugu kaisha ni renraku shimashita. -- I contacted the office right away so as not to trouble the others."
          },
          {
            "es": "田中さんが説明してくれたおかげで、部長は怒りませんでした。",
            "en": "Tanaka-san ga setsumei shite kureta okage de, buchou wa okorimasen deshita. -- Thanks to Mr. Tanaka's explanation, the manager was not angry."
          },
          {
            "es": "これからは、時間どおりに着くために、一本早い電車に乗ることにします。",
            "en": "kore kara wa, jikan doori ni tsuku tame ni, ichipon hayai densha ni noru koto ni shimasu. -- From now on, I will take a train one earlier in order to arrive on time."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "Why was the writer late?",
            "options": [
              "The writer overslept",
              "There was a traffic accident",
              "The train stopped",
              "The meeting time changed"
            ],
            "correctIndex": 2,
            "explanation": "The train stopping is the cause."
          },
          {
            "type": "multiple-choice",
            "question": "Why did the writer contact the office right away?",
            "options": [
              "To ask for a ride",
              "To ask for a day off",
              "So as not to inconvenience others",
              "To cancel the meeting"
            ],
            "correctIndex": 2,
            "explanation": "The purpose was not to trouble others."
          },
          {
            "type": "multiple-choice",
            "question": "What will the writer do from now on?",
            "options": [
              "Leave work early",
              "Drive to work",
              "Take a train one earlier",
              "Skip meetings"
            ],
            "correctIndex": 2,
            "explanation": "The writer will take an earlier train."
          }
        ]
      },
      {
        "heading": "Core Kanji",
        "body": [
          "These eight kanji anchor this lesson's vocabulary. For each one you see its on'yomi (Chinese-derived) and kun'yomi (native Japanese) readings, its core meanings, and a word that uses it. Learn them through the words, not in isolation.",
          "Readings are written in romaji. A dot in a kun'yomi reading marks where the kana ending of the word begins, and a dash means the reading does not apply."
        ],
        "examples": [
          {
            "es": "原",
            "en": "gen; hara -- meadow, original, primitive. E.g. 原因 (gen'in): cause; origin."
          },
          {
            "es": "因",
            "en": "in; yo.ru, china.mu -- cause, factor, be associated with. E.g. 原因 (gen'in): cause; origin."
          },
          {
            "es": "理",
            "en": "ri; kotowari -- logic, arrangement, reason. E.g. 管理 (kanri): control; management."
          },
          {
            "es": "由",
            "en": "yu, yuu; yoshi, yo.ru -- wherefore, a reason. E.g. 自由 (jiyuu): freedom; liberty."
          },
          {
            "es": "結",
            "en": "ketsu, kechi; musu.bu, yu.u -- tie, bind, contract. E.g. 結果 (kekka): result; consequence; coming to fruition."
          },
          {
            "es": "果",
            "en": "ka; ha.tasu, hata.su -- fruit, reward, carry out. E.g. 結果 (kekka): result; consequence; coming to fruition."
          },
          {
            "es": "故",
            "en": "ko; yue, furu.i -- happenstance, especially, intentionally. E.g. 事故 (jiko): accident; incident; circumstances."
          },
          {
            "es": "的",
            "en": "teki; mato -- bull's eye, mark, target. E.g. 具体的 (gutaiteki): concrete; definite."
          }
        ]
      },
      {
        "heading": "Kanji for Your Review Deck",
        "body": [
          "The other 24 kanji of this unit come through your daily review deck. Skim them here so they look familiar, then let spaced review do the work."
        ],
        "examples": [
          {
            "es": "害",
            "en": "gai -- harm, injury. E.g. 被害 (higai): damage; injury."
          },
          {
            "es": "防",
            "en": "bou; fuse.gu -- ward off, defend, protect. E.g. 国防 (kokubou): national defence; national defense."
          },
          {
            "es": "破",
            "en": "ha; yabu.ru, yabu.reru -- rend, rip, tear. E.g. 突破 (toppa): breaking through; breakthrough; surmounting."
          },
          {
            "es": "危",
            "en": "ki; abu.nai, aya.ui -- dangerous, fear, uneasy. E.g. 危うい (ayaui): dangerous; in danger; precarious."
          },
          {
            "es": "突",
            "en": "totsu, ka; tsu.ku -- stab, protruding, thrust. E.g. 突破 (toppa): breaking through; breakthrough; surmounting."
          },
          {
            "es": "違",
            "en": "i; chiga.u, chiga.i -- difference, differ. E.g. 違い (chigai): difference; distinction; mistake."
          },
          {
            "es": "効",
            "en": "kou; ki.ku, kikime -- merit, efficacy, efficiency. E.g. 有効 (yuukou): valid; effective; yuko."
          },
          {
            "es": "苦",
            "en": "ku; kuru.shii, guru.shii -- suffering, trial, worry. E.g. 苦労 (kurou): trouble; hardship; anxiety."
          },
          {
            "es": "敗",
            "en": "hai; yabu.reru -- failure, defeat, reversal. E.g. 敗北 (haiboku): defeat; to be defeated."
          },
          {
            "es": "負",
            "en": "fu; ma.keru, ma.kasu -- defeat, negative, -. E.g. 負担 (futan): burden; load; bearing."
          },
          {
            "es": "被",
            "en": "hi; koumu.ru, oo.u -- incur, cover, veil. E.g. 被害 (higai): damage; injury."
          },
          {
            "es": "消",
            "en": "shou; ki.eru, ke.su -- extinguish, blow out, turn off. E.g. 消費 (shouhi): consumption; expenditure."
          },
          {
            "es": "断",
            "en": "dan; ta.tsu, kotowa.ru -- severance, decline, refuse. E.g. 決断 (ketsudan): decision; determination."
          },
          {
            "es": "補",
            "en": "ho; ogina.u -- supplement, supply, make good. E.g. 補正予算 (hoseiyosan): revised budget; supplementary budget."
          },
          {
            "es": "保",
            "en": "ho, hou; tamo.tsu -- protect, guarantee, keep. E.g. 確保 (kakuho): securing; obtaining; belay."
          },
          {
            "es": "守",
            "en": "shu, su; mamo.ru, mamo.ri -- guard, protect, defend. E.g. 保守 (hoshu): maintenance; conservatism."
          },
          {
            "es": "警",
            "en": "kei; imashi.meru -- admonish, commandment. E.g. 警察 (keisatsu): police; police officer."
          },
          {
            "es": "処",
            "en": "sho; tokoro, ko -- dispose, manage, deal with. E.g. 処分 (shobun): disposal; throwing away; dealing with."
          },
          {
            "es": "療",
            "en": "ryou -- heal, cure. E.g. 治療 (chiryou): treatment; care."
          },
          {
            "es": "難",
            "en": "nan; kata.i, gata.i -- difficult, impossible, trouble. E.g. 難しい (muzukashii): difficult; hard; impossible."
          },
          {
            "es": "異",
            "en": "i; koto, koto.naru -- uncommon, different, queerness. E.g. 異常 (ijou): strangeness; abnormality."
          },
          {
            "es": "含",
            "en": "gan; fuku.mu, fuku.meru -- contain, include, hold in the mouth. E.g. 含み (fukumi): implication; hidden meaning."
          },
          {
            "es": "接",
            "en": "setsu, shou; tsu.gu -- touch, contact, adjoin. E.g. 面接 (mensetsu): interview."
          },
          {
            "es": "介",
            "en": "kai -- jammed in, shellfish, mediate. E.g. 介入 (kainyuu): intervention."
          }
        ]
      },
      {
        "heading": "Key Vocabulary",
        "body": [
          "These words come from this lesson's dialogue and reading, plus other common words built from the unit's kanji. The full 200-word list for this unit is in the data files that ship with the module."
        ],
        "examples": [
          {
            "es": "管理",
            "en": "kanri -- control; management"
          },
          {
            "es": "具体的",
            "en": "gutaiteki -- concrete; definite"
          },
          {
            "es": "警察",
            "en": "keisatsu -- police; police officer"
          },
          {
            "es": "結果",
            "en": "kekka -- result; consequence; coming to fruition"
          },
          {
            "es": "原因",
            "en": "gen'in -- cause; origin"
          },
          {
            "es": "事故",
            "en": "jiko -- accident; incident; circumstances"
          },
          {
            "es": "自由",
            "en": "jiyuu -- freedom; liberty"
          },
          {
            "es": "目的",
            "en": "mokuteki -- purpose; goal"
          },
          {
            "es": "理事",
            "en": "riji -- director; trustee"
          },
          {
            "es": "理由",
            "en": "riyuu -- reason; pretext"
          },
          {
            "es": "違い",
            "en": "chigai -- difference; distinction; mistake"
          },
          {
            "es": "確保",
            "en": "kakuho -- securing; obtaining; belay"
          },
          {
            "es": "国際的",
            "en": "kokusaiteki -- international"
          },
          {
            "es": "国防",
            "en": "kokubou -- national defence; national defense"
          },
          {
            "es": "処分",
            "en": "shobun -- disposal; throwing away; dealing with"
          },
          {
            "es": "処理",
            "en": "shori -- processing; dealing with"
          },
          {
            "es": "消費",
            "en": "shouhi -- consumption; expenditure"
          },
          {
            "es": "消費者",
            "en": "shouhisha -- consumer"
          },
          {
            "es": "成果",
            "en": "seika -- result; outcome"
          },
          {
            "es": "被害",
            "en": "higai -- damage; injury"
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "What is the reading of 効用?",
            "options": [
              "こうよう",
              "りゆう",
              "けいり",
              "ほかん"
            ],
            "correctIndex": 0,
            "explanation": "効用 is read こうよう (use; utility)."
          },
          {
            "type": "multiple-choice",
            "question": "What is the reading of 結ぶ?",
            "options": [
              "くなん",
              "むすぶ",
              "ほせい",
              "ほぼ"
            ],
            "correctIndex": 1,
            "explanation": "結ぶ is read むすぶ (to tie; to bind; to bear)."
          }
        ]
      },
      {
        "heading": "Speak About It",
        "body": [
          "Use these prompts for your 30-minute chat with a native speaker, or answer them aloud on your own in full sentences that use this lesson's patterns.",
          "Writing challenge: Write an apology email that explains what went wrong and why."
        ],
        "examples": [
          {
            "es": "最近、うまくいったのは、誰かのおかげですか。",
            "en": "saikin, umaku itta no wa, dare ka no okage desu ka. -- Has something gone well lately thanks to someone?"
          },
          {
            "es": "日本語がうまくなるために、何をしていますか。",
            "en": "nihongo ga umaku naru tame ni, nan o shite imasu ka. -- What are you doing to get better at Japanese?"
          },
          {
            "es": "頑張ったのに、うまくいかなかったことはありますか。",
            "en": "ganbatta no ni, umaku ikanakatta koto wa arimasu ka. -- Has there been something that did not work out even though you tried hard?"
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "雨が降った（　）、遠足が中止になりました。 (Because it rained (unfortunately), the field trip was cancelled.)",
        "options": [
          "ように",
          "おかげで",
          "のに",
          "せいで"
        ],
        "correctIndex": 3,
        "explanation": "A bad outcome caused by something takes せいで."
      },
      {
        "type": "multiple-choice",
        "question": "What does 苦労 (くろう) mean?",
        "options": [
          "freedom; liberty",
          "periodic; regular",
          "trouble; hardship; anxiety",
          "one cause; one reason"
        ],
        "correctIndex": 2,
        "explanation": "苦労 (くろう) means trouble; hardship; anxiety."
      },
      {
        "type": "multiple-choice",
        "question": "What does 経由 (けいゆ) mean?",
        "options": [
          "going through; going via",
          "cooking; cookery; dealing with something",
          "assailant; perpetrator",
          "fruit and vegetables; produce"
        ],
        "correctIndex": 0,
        "explanation": "経由 (けいゆ) means going through; going via."
      },
      {
        "type": "multiple-choice",
        "question": "Passage: 電車が止まったせいで、会議に遅れてしまいました。すみません。 — Why was the speaker late?",
        "options": [
          "The speaker overslept",
          "The train stopped",
          "The meeting time changed",
          "The speaker was sick"
        ],
        "correctIndex": 1,
        "explanation": "せいで gives the negative cause."
      },
      {
        "type": "multiple-choice",
        "question": "Passage: 先生が教えてくれたおかげで、試験に合格しました。本当にありがとうございました。 — What is the speaker thanking the teacher for?",
        "options": [
          "Writing a reference",
          "Giving a gift",
          "Helping them pass the exam",
          "Lending a book"
        ],
        "correctIndex": 2,
        "explanation": "おかげで credits the teacher."
      },
      {
        "type": "matching",
        "instructions": "Match each word with its English meaning.",
        "pairs": [
          {
            "left": "高原",
            "right": "tableland"
          },
          {
            "left": "処理",
            "right": "processing"
          },
          {
            "left": "補給",
            "right": "supply"
          },
          {
            "left": "難色",
            "right": "disapproval"
          },
          {
            "left": "果て",
            "right": "the end"
          }
        ],
        "explanation": "These words all belong to this unit's vocabulary. Check any you missed against the Key Vocabulary and Core Kanji sections."
      },
      {
        "type": "matching",
        "instructions": "Match each word with its reading.",
        "pairs": [
          {
            "left": "異変",
            "right": "いへん"
          },
          {
            "left": "経理",
            "right": "けいり"
          },
          {
            "left": "一因",
            "right": "いちいん"
          },
          {
            "left": "死因",
            "right": "しいん"
          },
          {
            "left": "自主的",
            "right": "じしゅてき"
          }
        ],
        "explanation": "Reading a kanji word correctly is what lets the vocabulary stick, so say each word aloud once you have the match."
      },
      {
        "type": "matching",
        "instructions": "Match each pattern with its meaning.",
        "pairs": [
          {
            "left": "～せいで",
            "right": "A negative cause: because of, blaming"
          },
          {
            "left": "～おかげで",
            "right": "A positive cause: thanks to"
          },
          {
            "left": "～ために",
            "right": "A purpose the speaker chooses, or a formal cause"
          },
          {
            "left": "～ように (purpose)",
            "right": "A purpose that is a state, a potential, or a negative"
          },
          {
            "left": "～のに",
            "right": "Contrast: despite, with a note of surprise or regret"
          }
        ],
        "explanation": "Each pattern in this lesson has a distinct job. If any pair was hard, reread that pattern's section and its examples."
      }
    ]
  },
  {
    "slug": "advice-and-conditions",
    "level": "JA-B1",
    "number": 7,
    "title": "Advice and Conditions",
    "summary": "Give advice and talk about conditions with たら, と, ば, なら, ば～ほど, わけだ and わけがない.",
    "duration": "45 min",
    "sections": [
      {
        "heading": "What This Lesson Covers",
        "body": [
          "Give advice and talk about conditions with たら, と, ば, なら, ば～ほど, わけだ and わけがない.",
          "By the end of this lesson you will be able to: (1) Choose the right conditional for a one-time event, a natural result or a piece of advice.  (2) Give advice to a friend and explain the reason.  (3) React with a logical conclusion, or say something is impossible or not always true.",
          "Every lesson in this module follows the same path: a short dialogue that uses the patterns, one section per pattern with a quick check, a section on choosing between the patterns, a reading passage, and then the kanji and vocabulary that go with the unit."
        ]
      },
      {
        "heading": "Dialogue: Advice and Conditions",
        "body": [
          "Read the conversation once for the gist, then again line by line. Each line comes with romaji and an English gloss. Watch for the patterns in this lesson as they appear in natural speech; the sections that follow take them one at a time."
        ],
        "examples": [
          {
            "es": "リー：日本語の勉強がなかなか進まないんです。",
            "en": "Lee: nihongo no benkyou ga nakanaka susumanai n desu. -- Lee: My Japanese study isn't making much progress."
          },
          {
            "es": "田中：毎日少しでも続ければ、必ず上手になりますよ。",
            "en": "Tanaka: mainichi sukoshi de mo tsuzukereba, kanarazu jouzu ni narimasu yo. -- Tanaka: If you keep at it every day, even a little, you'll definitely get good."
          },
          {
            "es": "リー：でも、勉強すればするほど、わからないことが増えるんです。",
            "en": "Lee: de mo, benkyou sureba suru hodo, wakaranai koto ga fueru n desu. -- Lee: But the more I study, the more things I don't understand."
          },
          {
            "es": "田中：それは、たくさん勉強しているからですよ。時間があったら、私と一緒に練習しませんか。",
            "en": "Tanaka: sore wa, takusan benkyou shite irukara desu yo. jikan ga attara, watashi to issho ni renshuu shimasen ka. -- Tanaka: That's because you're studying a lot. If you have time, why don't we practice together?"
          }
        ]
      },
      {
        "heading": "～たら vs ～と",
        "body": [
          "Core idea: ～たら: one-time or hypothetical. ～と: a natural result.",
          "How to build it: Past plain form + ら (たら); dictionary form + と.",
          "たら is the flexible conditional, 'if' or 'when,' and can be followed by an invitation, request or wish. と marks a natural or automatic result and cannot be followed by such a request."
        ],
        "examples": [
          {
            "es": "時間があったら、映画を見に行きませんか。",
            "en": "jikan ga attara, eiga o mi ni ikimasen ka. -- If you have time, shall we go to a movie?"
          },
          {
            "es": "このボタンを押すと、ドアが開きます。",
            "en": "kono botan o osu to, doa ga hirakimasu. -- When you press this button, the door opens."
          },
          {
            "es": "春になると、桜が咲きます。",
            "en": "haru ni naru to, sakura ga sakimasu. -- When spring comes, the cherry blossoms bloom."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "時間が（　）、映画を見に行きませんか。 (If you have time, shall we go see a movie?)",
            "options": [
              "あるわけで",
              "あると",
              "あるほど",
              "あったら"
            ],
            "correctIndex": 3,
            "explanation": "～と cannot be followed by an invitation."
          }
        ]
      },
      {
        "heading": "～ば vs ～なら",
        "body": [
          "Core idea: ～ば: a general condition. ～なら: advice on a topic.",
          "How to build it: Conditional ば-form; noun or plain form + なら.",
          "ば states a general condition, while なら picks up a topic or something the listener just said: 京都に行くなら、秋がいいですよ. Use なら when advising about a situation already on the table."
        ],
        "examples": [
          {
            "es": "安ければ、買います。",
            "en": "yasukereba, kaimasu. -- If it is cheap, I will buy it."
          },
          {
            "es": "京都に行くなら、秋がいいですよ。",
            "en": "Kyoto ni iku nara, aki ga ii desu yo. -- If you are going to Kyoto, autumn is good."
          },
          {
            "es": "日本語を練習するなら、この本がいいですよ。",
            "en": "nihongo o renshuu suru nara, kono hon ga ii desu yo. -- If you are going to practice Japanese, this book is good."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "京都に（　）、秋がいいですよ。 (If you are going to Kyoto, autumn is the best time.)",
            "options": [
              "行くほど",
              "行くと",
              "行くわけ",
              "行くなら"
            ],
            "correctIndex": 3,
            "explanation": "～なら responds to a topic with advice."
          }
        ]
      },
      {
        "heading": "～ば～ほど: The more X, the more Y",
        "body": [
          "Core idea: The more X, the more Y.",
          "How to build it: ば-form + the same verb in dictionary form + ほど.",
          "It means 'the more..., the more...': 勉強すればするほど. Adjectives work too: 安ければ安いほどいい."
        ],
        "examples": [
          {
            "es": "日本語は、勉強すればするほど、おもしろくなります。",
            "en": "nihongo wa, benkyou sureba suru hodo, omoshiroku narimasu. -- The more you study Japanese, the more interesting it gets."
          },
          {
            "es": "練習すればするほど、上手になります。",
            "en": "renshuu sureba suru hodo, jouzu ni narimasu. -- The more you practice, the better you get."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "日本語は、勉強（　）するほど、おもしろくなります。 (The more you study Japanese, the more interesting it gets.)",
            "options": [
              "するなら",
              "したら",
              "すると",
              "すれば"
            ],
            "correctIndex": 3,
            "explanation": "～ば～ほど uses the ば-form twice."
          }
        ]
      },
      {
        "heading": "～わけだ: A logical conclusion",
        "body": [
          "Core idea: A logical conclusion: no wonder.",
          "How to build it: Plain form + わけだ (noun + の + わけだ; な-adjective + な + わけだ).",
          "It draws a conclusion from a fact you have just learned: 'so that's why...' or 'no wonder...' 三年も住んでいたなら、上手なわけですね."
        ],
        "examples": [
          {
            "es": "三年も日本に住んでいたんですか。日本語が上手なわけですね。",
            "en": "san nen mo nihon ni sunde ita n desu ka. nihongo ga jouzu na wake desu ne. -- You lived in Japan for three years? No wonder your Japanese is good."
          },
          {
            "es": "毎日運動しているんですか。元気なわけですね。",
            "en": "mainichi undou shite iru n desu ka. genki na wake desu ne. -- You exercise every day? No wonder you are so energetic."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "三年も日本に住んでいたんですか。日本語が上手な（　）ね。 (You lived in Japan for three years? No wonder your Japanese is good.)",
            "options": [
              "ものではありません",
              "わけです",
              "わけではありません",
              "わけがありません"
            ],
            "correctIndex": 1,
            "explanation": "～わけだ draws a conclusion from a new fact."
          }
        ]
      },
      {
        "heading": "～わけがない・～わけではない: Impossible, or not necessarily true",
        "body": [
          "Core idea: Impossible, or not necessarily true.",
          "How to build it: Plain form + わけがない or + わけではない.",
          "わけがない means 'there is no way that...' and rejects something strongly. わけではない softens a claim: 'it doesn't mean that...' Both attach to the plain form."
        ],
        "examples": [
          {
            "es": "彼がそんなことを言うわけがありません。",
            "en": "kare ga sonna koto o iu wake ga arimasen. -- There is no way he would say something like that."
          },
          {
            "es": "高いものがいいわけではありません。",
            "en": "takai mono ga ii wake de wa arimasen. -- Being expensive does not necessarily mean it is good."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "彼がそんなことを言う（　）。 (There is no way he would say something like that.)",
            "options": [
              "わけがありません",
              "わけです",
              "ようです",
              "そうです"
            ],
            "correctIndex": 0,
            "explanation": "～わけがない rejects something as impossible."
          }
        ]
      },
      {
        "heading": "Choosing Between the Patterns",
        "body": [
          "The main contrast is which conditional fits. ～と cannot be followed by a request, a wish or advice. ～たら and ～なら can. ～なら responds to a topic the other person raised, and ～ば states a general rule. ～わけだ draws a conclusion from a fact just learned, while ～わけがない rejects something the speaker finds unbelievable."
        ],
        "examples": [
          {
            "es": "このボタンを押すと、ドアが開きます。",
            "en": "kono botan o osu to, doa ga hirakimasu. -- When you press this button, the door opens."
          }
        ]
      },
      {
        "heading": "Reading Practice",
        "body": [
          "Read the passage once without stopping (119 characters), then again slowly, checking each sentence against its gloss. Try to spot which pattern from this lesson is behind each sentence before you answer the questions."
        ],
        "examples": [
          {
            "es": "日本語を上手に話したいなら、まず毎日声に出して読むことです。",
            "en": "nihongo o jouzu ni hanashitai nara, mazu mainichi koe ni dashite yomu koto desu. -- If you want to speak Japanese well, first read aloud every day."
          },
          {
            "es": "間違えるのを怖がる必要はありません。",
            "en": "machigaeru no o kowagaru hitsuyou wa arimasen. -- There is no need to be afraid of making mistakes."
          },
          {
            "es": "たくさん話せば話すほど、自然に話せるようになります。",
            "en": "takusan hanaseba hanasu hodo, shizen ni hanaseru you ni narimasu. -- The more you speak, the more naturally you will be able to speak."
          },
          {
            "es": "時間があったら、日本人の友達と話してみてください。",
            "en": "jikan ga attara, nipponnin no tomodachi to hanashite mite kudasai. -- If you have time, try talking with Japanese friends."
          },
          {
            "es": "話さなければ、上達するわけがありません。",
            "en": "hanasanakereba, joutatsu suru wake ga arimasen. -- If you don't speak, there is no way you will improve."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "What does the writer advise first?",
            "options": [
              "Watch TV daily",
              "Buy a dictionary",
              "Read aloud every day",
              "Move to Japan"
            ],
            "correctIndex": 2,
            "explanation": "The first tip is reading aloud daily."
          },
          {
            "type": "multiple-choice",
            "question": "What does the writer say about making mistakes?",
            "options": [
              "There is no need to fear them",
              "They show a lack of talent",
              "Teachers will punish them",
              "They should be avoided"
            ],
            "correctIndex": 0,
            "explanation": "The writer says there is no need to fear mistakes."
          },
          {
            "type": "multiple-choice",
            "question": "What happens if you talk a lot, according to the text?",
            "options": [
              "You start to speak more naturally",
              "You get tired",
              "You make more mistakes",
              "You forget grammar"
            ],
            "correctIndex": 0,
            "explanation": "More talking leads to more natural speech."
          }
        ]
      },
      {
        "heading": "Core Kanji",
        "body": [
          "These eight kanji anchor this lesson's vocabulary. For each one you see its on'yomi (Chinese-derived) and kun'yomi (native Japanese) readings, its core meanings, and a word that uses it. Learn them through the words, not in isolation.",
          "Readings are written in romaji. A dot in a kun'yomi reading marks where the kana ending of the word begins, and a dash means the reading does not apply."
        ],
        "examples": [
          {
            "es": "場",
            "en": "jou, chou; ba -- location, place. E.g. 現場 (genba): actual spot; scene; shop floor."
          },
          {
            "es": "合",
            "en": "gou, ga; a.u, a.u -- fit, suit, join. E.g. 試合 (shiai): match; game."
          },
          {
            "es": "件",
            "en": "ken; kudan -- affair, case, matter. E.g. 事件 (jiken): event; affair."
          },
          {
            "es": "可",
            "en": "ka, koku; be.ki, be.shi -- can, passable, mustn't. E.g. 可能 (kanou): possible; potential."
          },
          {
            "es": "能",
            "en": "nou; yo.ku, ata.u -- ability, talent, skill. E.g. 可能 (kanou): possible; potential."
          },
          {
            "es": "必",
            "en": "hitsu; kanara.zu -- invariably, certain, inevitable. E.g. 必要 (hitsuyou): necessary; needed; necessity."
          },
          {
            "es": "要",
            "en": "you; i.ru, kaname -- need, main point, essence. E.g. 重要 (juuyou): important; momentous."
          },
          {
            "es": "例",
            "en": "rei; tato.eru -- example, custom, usage. E.g. 例えば (tatoeba): for example; for instance."
          }
        ]
      },
      {
        "heading": "Kanji for Your Review Deck",
        "body": [
          "The other 24 kanji of this unit come through your daily review deck. Skim them here so they look familiar, then let spaced review do the work."
        ],
        "examples": [
          {
            "es": "条",
            "en": "jou, chou; eda, suji -- article, clause, counter for articles, clauses, paragraphs, etc. E.g. 条件 (jouken): condition; term."
          },
          {
            "es": "基",
            "en": "ki; moto, motoi -- fundamentals, radical (chem), counter for machines. E.g. 基地 (kichi): base."
          },
          {
            "es": "規",
            "en": "ki -- standard, measure. E.g. 規約 (kiyaku): agreement; rules."
          },
          {
            "es": "容",
            "en": "you; i.reru -- contain, form, looks. E.g. 容易 (youi): easy; simple."
          },
          {
            "es": "単",
            "en": "tan; hitoe -- simple, one, single. E.g. 単なる (tannaru): mere; simple."
          },
          {
            "es": "易",
            "en": "eki, i; yasa.shii, yasu.i -- easy, ready to, simple. E.g. 容易 (youi): easy; simple."
          },
          {
            "es": "健",
            "en": "ken; suko.yaka -- healthy, health, strength. E.g. 保健 (hoken): preservation of health; hygiene."
          },
          {
            "es": "優",
            "en": "yuu, u; yasa.shii, sugu.reru -- tenderness, excel, surpass. E.g. 優しい (yasashii): tender; kind."
          },
          {
            "es": "満",
            "en": "man, ban; mi.chiru, mi.tsu -- full, fullness, enough. E.g. 不満 (fuman): dissatisfaction; discontent."
          },
          {
            "es": "積",
            "en": "seki; tsu.mu, zu.mi -- volume, product (x*y), acreage. E.g. 面積 (menseki): square measure; size."
          },
          {
            "es": "細",
            "en": "sai; hoso.i, hoso.ru -- dainty, get thin, taper. E.g. 細かい (komakai): small; fine."
          },
          {
            "es": "完",
            "en": "kan -- perfect, completion, end. E.g. 完成 (kansei): complete; completion; perfection."
          },
          {
            "es": "拡",
            "en": "kaku, kou; hiro.garu, hiro.geru -- broaden, extend, expand. E.g. 拡大 (kakudai): magnification; enlargement."
          },
          {
            "es": "競",
            "en": "kyou, kei; kiso.u, se.ru -- emulate, compete with, bid. E.g. 競る (seru): to compete; to bid."
          },
          {
            "es": "並",
            "en": "hei, hou; na.mi, nami -- row, and, besides. E.g. 並立 (heiritsu): standing abreast."
          },
          {
            "es": "貯",
            "en": "cho; ta.meru, takuwa.eru -- savings, store, lay in. E.g. 貯金 (chokin): putting money aside; savings; accumulated surplus of wins."
          },
          {
            "es": "泳",
            "en": "ei; oyo.gu -- swim. E.g. 競泳 (kyouei): competitive swimming; swimming race."
          },
          {
            "es": "丸",
            "en": "gan; maru, maru.meru -- round, full (month), perfection. E.g. 日の丸 (hinomaru): outline of the Sun; the Japanese flag."
          },
          {
            "es": "他",
            "en": "ta; hoka -- other, another, the others. E.g. 他人 (tanin): another person; other people; unrelated person."
          },
          {
            "es": "根",
            "en": "kon; ne, ne -- root, radical, head (pimple). E.g. 根 (ne): root."
          },
          {
            "es": "存",
            "en": "son, zon; nagara.eru, a.ru -- exist, suppose, be aware of. E.g. 保存 (hozon): preservation; conservation; saving."
          },
          {
            "es": "各",
            "en": "kaku; onoono -- each, every, either. E.g. 各自 (kakuji): each; everyone."
          },
          {
            "es": "否",
            "en": "hi; ina, iya -- negate, no, noes. E.g. 成否 (seihi): success or failure; outcome."
          },
          {
            "es": "材",
            "en": "zai -- lumber, log, timber. E.g. 材料 (zairyou): ingredients; material."
          }
        ]
      },
      {
        "heading": "Key Vocabulary",
        "body": [
          "These words come from this lesson's dialogue and reading, plus other common words built from the unit's kanji. The full 200-word list for this unit is in the data files that ship with the module."
        ],
        "examples": [
          {
            "es": "必要",
            "en": "hitsuyou -- necessary; needed; necessity"
          },
          {
            "es": "必ず",
            "en": "kanarazu -- always; without exception"
          },
          {
            "es": "要",
            "en": "kaname -- pivot; vital point"
          },
          {
            "es": "要は",
            "en": "youha -- in short; the point is"
          },
          {
            "es": "可能",
            "en": "kanou -- possible; potential"
          },
          {
            "es": "拡大",
            "en": "kakudai -- magnification; enlargement"
          },
          {
            "es": "現場",
            "en": "genba -- actual spot; scene; shop floor"
          },
          {
            "es": "市場",
            "en": "ichiba -- market"
          },
          {
            "es": "試合",
            "en": "shiai -- match; game"
          },
          {
            "es": "事件",
            "en": "jiken -- event; affair"
          },
          {
            "es": "重要",
            "en": "juuyou -- important; momentous"
          },
          {
            "es": "場所",
            "en": "basho -- place; location; room"
          },
          {
            "es": "条件",
            "en": "jouken -- condition; term"
          },
          {
            "es": "条約",
            "en": "jouyaku -- treaty; pact"
          },
          {
            "es": "要求",
            "en": "youkyuu -- demand; firm request"
          },
          {
            "es": "立場",
            "en": "tachiba -- position; situation; viewpoint"
          },
          {
            "es": "工場",
            "en": "koujou -- factory; plant"
          },
          {
            "es": "問い合わせ",
            "en": "toiawase -- enquiry; inquiry"
          },
          {
            "es": "会合",
            "en": "kaigou -- meeting; assembly; association"
          },
          {
            "es": "会場",
            "en": "kaijou -- assembly hall; meeting place"
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "What is the reading of 初場所?",
            "options": [
              "へんよう",
              "まちやくば",
              "はつばしょ",
              "ひのまる"
            ],
            "correctIndex": 2,
            "explanation": "初場所 is read はつばしょ (New Year's tournament, held in Tokyo)."
          },
          {
            "type": "multiple-choice",
            "question": "What is the reading of 完結?",
            "options": [
              "ばめん",
              "かんけつ",
              "ふひつよう",
              "はなしあう"
            ],
            "correctIndex": 1,
            "explanation": "完結 is read かんけつ (conclusion; completion)."
          }
        ]
      },
      {
        "heading": "Speak About It",
        "body": [
          "Use these prompts for your 30-minute chat with a native speaker, or answer them aloud on your own in full sentences that use this lesson's patterns.",
          "Writing challenge: Write a 300-character message advising a friend on a decision."
        ],
        "examples": [
          {
            "es": "友達が悩んでいたら、どんなアドバイスをしますか。",
            "en": "tomodachi ga nayande itara, donna adobaisu o shimasu ka. -- If a friend were worried, what advice would you give?"
          },
          {
            "es": "好きなことは、すればするほど楽しくなりますか。",
            "en": "suki na koto wa, sureba suru hodo tanoshiku narimasu ka. -- Does something you like get more enjoyable the more you do it?"
          },
          {
            "es": "「なるほど、そういうわけか」と思ったことはありますか。",
            "en": "\"naruhodo, sou iu wake ka\" to omotta koto wa arimasu ka. -- Have you ever thought, \"I see, so that's why\"?"
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "このボタンを（　）、ドアが開きます。 (When you press this button, the door opens.)",
        "options": [
          "押すべき",
          "押すなら",
          "押すと",
          "押すほど"
        ],
        "correctIndex": 2,
        "explanation": "～と shows a natural result."
      },
      {
        "type": "multiple-choice",
        "question": "What does 退場 (たいじょう) mean?",
        "options": [
          "approval; adoption",
          "to satisfy; to meet; to fill",
          "treaty; pact",
          "exit; exeunt; leaving"
        ],
        "correctIndex": 3,
        "explanation": "退場 (たいじょう) means exit; exeunt; leaving."
      },
      {
        "type": "multiple-choice",
        "question": "What does 完売 (かんばい) mean?",
        "options": [
          "theater closure; theatre closure",
          "standing abreast",
          "meeting; assembly; association",
          "selling out; being sold out"
        ],
        "correctIndex": 3,
        "explanation": "完売 (かんばい) means selling out; being sold out."
      },
      {
        "type": "multiple-choice",
        "question": "Passage: 日本語が上手になりたいなら、毎日話せばいいですよ。話せば話すほど、上手になります。 — What advice is given?",
        "options": [
          "Take a test",
          "Read one book a week",
          "Move abroad",
          "Speak every day"
        ],
        "correctIndex": 3,
        "explanation": "The advice is to speak every day."
      },
      {
        "type": "multiple-choice",
        "question": "Passage: 三年も日本にいたんですか。日本語が上手なわけですね。 — What does the speaker conclude?",
        "options": [
          "The listener will move soon",
          "The listener is a teacher",
          "The listener's Japanese is good because they lived in Japan",
          "The listener never studied"
        ],
        "correctIndex": 2,
        "explanation": "わけだ draws the conclusion."
      },
      {
        "type": "matching",
        "instructions": "Match each word with its English meaning.",
        "pairs": [
          {
            "left": "材料",
            "right": "ingredients"
          },
          {
            "left": "見積もり",
            "right": "estimate"
          },
          {
            "left": "円満",
            "right": "harmonious"
          },
          {
            "left": "百合",
            "right": "lily"
          },
          {
            "left": "合う",
            "right": "to come together"
          }
        ],
        "explanation": "These words all belong to this unit's vocabulary. Check any you missed against the Key Vocabulary and Core Kanji sections."
      },
      {
        "type": "matching",
        "instructions": "Match each word with its reading.",
        "pairs": [
          {
            "left": "役場",
            "right": "やくば"
          },
          {
            "left": "完結",
            "right": "かんけつ"
          },
          {
            "left": "要する",
            "right": "ようする"
          },
          {
            "left": "例外的",
            "right": "れいがいてき"
          },
          {
            "left": "不満",
            "right": "ふまん"
          }
        ],
        "explanation": "Reading a kanji word correctly is what lets the vocabulary stick, so say each word aloud once you have the match."
      },
      {
        "type": "matching",
        "instructions": "Match each pattern with its meaning.",
        "pairs": [
          {
            "left": "～たら vs ～と",
            "right": "～たら: one-time or hypothetical. ～と: a natural result"
          },
          {
            "left": "～ば vs ～なら",
            "right": "～ば: a general condition. ～なら: advice on a topic"
          },
          {
            "left": "～ば～ほど",
            "right": "The more X, the more Y"
          },
          {
            "left": "～わけだ",
            "right": "A logical conclusion: no wonder"
          },
          {
            "left": "～わけがない・～わけではない",
            "right": "Impossible, or not necessarily true"
          }
        ],
        "explanation": "Each pattern in this lesson has a distinct job. If any pair was hard, reread that pattern's section and its examples."
      }
    ]
  },
  {
    "slug": "comparing-and-degree",
    "level": "JA-B1",
    "number": 8,
    "title": "Comparing and Degree",
    "summary": "Compare things and describe degree and point of view with ほど, くらい, にとって, に対して and によって.",
    "duration": "45 min",
    "sections": [
      {
        "heading": "What This Lesson Covers",
        "body": [
          "Compare things and describe degree and point of view with ほど, くらい, にとって, に対して and によって.",
          "By the end of this lesson you will be able to: (1) Compare two things and say how they differ in degree.  (2) Express an extent with a vivid comparison.  (3) Say how something matters to a person, and how it depends on the situation.",
          "Every lesson in this module follows the same path: a short dialogue that uses the patterns, one section per pattern with a quick check, a section on choosing between the patterns, a reading passage, and then the kanji and vocabulary that go with the unit."
        ]
      },
      {
        "heading": "Dialogue: Comparing and Degree",
        "body": [
          "Read the conversation once for the gist, then again line by line. Each line comes with romaji and an English gloss. Watch for the patterns in this lesson as they appear in natural speech; the sections that follow take them one at a time."
        ],
        "examples": [
          {
            "es": "リー：京都と大阪では、どちらが好きですか。",
            "en": "Lee: Kyoto to Osaka de wa, dochira ga suki desu ka. -- Lee: Which do you like better, Kyoto or Osaka?"
          },
          {
            "es": "田中：私にとっては、京都のほうが落ち着きます。大阪は京都ほど静かではありません。",
            "en": "Tanaka: watashi ni totte wa, Kyoto no hou ga ochitsukimasu. Osaka wa Kyoto hodo shizuka de wa arimasen. -- Tanaka: For me, Kyoto is more relaxing. Osaka isn't as quiet as Kyoto."
          },
          {
            "es": "リー：食べ物はどうですか。",
            "en": "Lee: tabemono wa dou desu ka. -- Lee: How about the food?"
          },
          {
            "es": "田中：店によって全然違いますが、大阪では、お腹がいっぱいになるくらい食べても、あまり高くありませんよ。",
            "en": "Tanaka: mise ni yotte zenzen chigaimasu ga, Osaka de wa, onaka ga ippai ni naru kurai tabete mo, amari takaku arimasen yo. -- Tanaka: It varies a lot by restaurant, but in Osaka you can eat until you're full and it still isn't very expensive."
          }
        ]
      },
      {
        "heading": "～ほど: Extent, often with a negative",
        "body": [
          "Core idea: Extent, often with a negative: not as X as.",
          "How to build it: Noun or plain form + ほど.",
          "With a negative, ほど means 'not as... as': 東京ほど大きくない. It can also express extent, as in 泣きたいほど."
        ],
        "examples": [
          {
            "es": "今日は昨日ほど寒くないです。",
            "en": "kyou wa kinou hodo samuku nai desu. -- Today is not as cold as yesterday."
          },
          {
            "es": "このカメラは、あのカメラほど高くありません。",
            "en": "kono kamera wa, ano kamera hodo takaku arimasen. -- This camera is not as expensive as that one."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "今日は昨日（　）寒くないです。 (Today is not as cold as yesterday.)",
            "options": [
              "によって",
              "に対して",
              "ほど",
              "にとって"
            ],
            "correctIndex": 2,
            "explanation": "ほど with a negative means not as X as."
          }
        ]
      },
      {
        "heading": "～くらい・～ぐらい: Degree or extent",
        "body": [
          "Core idea: Degree or extent.",
          "How to build it: Noun or plain form + くらい (ぐらい).",
          "It gives the extent or degree of something: 涙が出るくらい. It stresses how far something goes and often exaggerates a little."
        ],
        "examples": [
          {
            "es": "涙が出るくらい、うれしかったです。",
            "en": "namida ga deru kurai, ureshikatta desu. -- I was so happy that I nearly cried."
          },
          {
            "es": "声が出ないくらい、緊張しました。",
            "en": "koe ga denai kurai, kinchou shimashita. -- I was so nervous that my voice would not come out."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "涙が出る（　）、うれしかったです。 (I was so happy that tears came out.)",
            "options": [
              "くらい",
              "に対して",
              "によって",
              "にとって"
            ],
            "correctIndex": 0,
            "explanation": "くらい gives the degree or extent."
          }
        ]
      },
      {
        "heading": "～にとって: From the standpoint of",
        "body": [
          "Core idea: From the standpoint of.",
          "How to build it: Noun + にとって.",
          "It gives a point of view: 'for' or 'to' someone. 私にとって is the most common. It expresses how something matters to that person, not toward whom an action is directed."
        ],
        "examples": [
          {
            "es": "私にとって、家族は一番大切です。",
            "en": "watashi ni totte, kazoku wa ichiban taisetsu desu. -- For me, family is the most important thing."
          },
          {
            "es": "学生にとって、時間はとても大切です。",
            "en": "gakusei ni totte, jikan wa totemo taisetsu desu. -- For students, time is very important."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "私（　）、家族は一番大切です。 (For me, family is the most important thing.)",
            "options": [
              "にとって",
              "によって",
              "ほど",
              "に対して"
            ],
            "correctIndex": 0,
            "explanation": "にとって gives a point of view."
          }
        ]
      },
      {
        "heading": "～に対して: Toward a person or thing, or in contrast",
        "body": [
          "Core idea: Toward a person or thing, or in contrast.",
          "How to build it: Noun + に対して.",
          "It marks the target of an attitude or action: 年上の人に対して. It also sets up a contrast: 兄は静かなのに対して、弟は…"
        ],
        "examples": [
          {
            "es": "日本人は年上の人に対して、丁寧な言葉を使います。",
            "en": "nipponnin wa toshiue no hito ni taishite, teinei na kotoba o tsukaimasu. -- Japanese people use polite language toward older people."
          },
          {
            "es": "お客さんに対して、丁寧に話します。",
            "en": "okyakusan ni taishite, teinei ni hanashimasu. -- I speak politely to customers."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "日本人は年上の人（　）、丁寧な言葉を使います。 (Japanese people use polite language toward older people.)",
            "options": [
              "にとって",
              "に対して",
              "によって",
              "くらい"
            ],
            "correctIndex": 1,
            "explanation": "に対して names the target of an attitude."
          }
        ]
      },
      {
        "heading": "～によって: Depending on, or by",
        "body": [
          "Core idea: Depending on, or by.",
          "How to build it: Noun + によって.",
          "It means 'depending on' when it introduces variation: 国によって習慣が違います. It can also mean 'by means of' or 'by (an agent).'"
        ],
        "examples": [
          {
            "es": "国によって、習慣が違います。",
            "en": "kuni ni yotte, shuukan ga chigaimasu. -- Customs differ depending on the country."
          },
          {
            "es": "季節によって、着る服を変えます。",
            "en": "kisetsu ni yotte, kiru fuku o kaemasu. -- I change the clothes I wear depending on the season."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "国（　）、習慣が違います。 (Customs differ depending on the country.)",
            "options": [
              "によって",
              "ほど",
              "に対して",
              "にとって"
            ],
            "correctIndex": 0,
            "explanation": "によって means depending on."
          }
        ]
      },
      {
        "heading": "Choosing Between the Patterns",
        "body": [
          "The main contrast is how each phrase frames the comparison. ほど and くらい measure extent. にとって gives a personal point of view, に対して names the target of an attitude or sets up a contrast (兄は静かなのに対して、弟はにぎやかです), and によって says the answer changes with the case."
        ],
        "examples": [
          {
            "es": "兄は静かなのに対して、弟はにぎやかです。",
            "en": "ani wa shizuka na no ni taishite, otou to wa nigiyaka desu. -- My older brother is quiet, whereas my younger brother is lively."
          }
        ]
      },
      {
        "heading": "Reading Practice",
        "body": [
          "Read the passage once without stopping (124 characters), then again slowly, checking each sentence against its gloss. Try to spot which pattern from this lesson is behind each sentence before you answer the questions."
        ],
        "examples": [
          {
            "es": "私が住んでいる町は、東京ほど大きくありませんが、静かで、住みやすい町です。",
            "en": "watashi ga sunde iru machi wa, Tokyo hodo ookiku arimasen ga, shizuka de, sumiyasui machi desu. -- The town where I live is not as big as Tokyo, but it is quiet and easy to live in."
          },
          {
            "es": "東京に住んでいる人にとって、ここは何もない町かもしれません。",
            "en": "Tokyo ni sunde iru hito ni totte, koko wa nan mo nai machi ka mo shiremasen. -- For people living in Tokyo, this may be a town with nothing."
          },
          {
            "es": "でも、私にとっては、大切な町です。",
            "en": "de mo, watashi ni totte wa, taisetsu na machi desu. -- But for me, it is an important town."
          },
          {
            "es": "季節によって、景色が変わります。",
            "en": "kisetsu ni yotte, keshiki ga kawarimasu. -- The scenery changes with the season."
          },
          {
            "es": "特に秋は、山が赤くなって、驚くくらいきれいです。",
            "en": "tokuni aki wa, yama ga akaku natte, odoroku kurai kirei desu. -- In autumn especially, the mountains turn red and are so beautiful it is astonishing."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "How does the writer describe their town compared with Tokyo?",
            "options": [
              "Bigger and busier",
              "Smaller, but quiet and easy to live in",
              "Just like Tokyo",
              "Colder and poorer"
            ],
            "correctIndex": 1,
            "explanation": "The town is less big but quiet."
          },
          {
            "type": "multiple-choice",
            "question": "What might people living in Tokyo think of the town?",
            "options": [
              "That it is famous",
              "That it is expensive",
              "That it has nothing",
              "That it is too crowded"
            ],
            "correctIndex": 2,
            "explanation": "The text says they might think it has nothing."
          },
          {
            "type": "multiple-choice",
            "question": "What is the town like in autumn?",
            "options": [
              "The mountains turn red and are stunningly beautiful",
              "It is hot and humid",
              "It snows heavily",
              "It is usually rainy"
            ],
            "correctIndex": 0,
            "explanation": "Autumn brings red mountains."
          }
        ]
      },
      {
        "heading": "Core Kanji",
        "body": [
          "These eight kanji anchor this lesson's vocabulary. For each one you see its on'yomi (Chinese-derived) and kun'yomi (native Japanese) readings, its core meanings, and a word that uses it. Learn them through the words, not in isolation.",
          "Readings are written in romaji. A dot in a kun'yomi reading marks where the kana ending of the word begins, and a dash means the reading does not apply."
        ],
        "examples": [
          {
            "es": "比",
            "en": "hi; kura.beru -- compare, race, ratio. E.g. 比べる (kuraberu): to compare; to make a comparison; to compete."
          },
          {
            "es": "差",
            "en": "sa; sa.su, sa.shi -- distinction, difference, variation. E.g. 格差 (kakusa): qualitative difference; disparity."
          },
          {
            "es": "平",
            "en": "hei, byou; tai.ra, tai.rageru -- even, flat, peace. E.g. 太平洋 (taiheiyou): Pacific Ocean."
          },
          {
            "es": "量",
            "en": "ryou; haka.ru -- quantity, measure, weight. E.g. 数量 (suuryou): quantity; volume."
          },
          {
            "es": "数",
            "en": "suu, su; kazu, kazo.eru -- number, strength, fate. E.g. 数字 (suuji): numeral; figure."
          },
          {
            "es": "増",
            "en": "zou; ma.su, ma.shi -- increase, add, augment. E.g. 増加 (zouka): increase; rise."
          },
          {
            "es": "減",
            "en": "gen; he.ru, he.rasu -- dwindle, decrease, reduce. E.g. 軽減 (keigen): abatement; reduction."
          },
          {
            "es": "半",
            "en": "han; naka.ba -- half, middle, odd number. E.g. 後半 (kouhan): second half; latter half."
          }
        ]
      },
      {
        "heading": "Kanji for Your Review Deck",
        "body": [
          "The other 24 kanji of this unit come through your daily review deck. Skim them here so they look familiar, then let spaced review do the work."
        ],
        "examples": [
          {
            "es": "程",
            "en": "tei; hodo, hodo -- extent, degree, law. E.g. 日程 (nittei): schedule; program."
          },
          {
            "es": "率",
            "en": "sotsu, ritsu; hiki.iru -- ratio, rate, proportion. E.g. 比率 (hiritsu): ratio; proportion."
          },
          {
            "es": "割",
            "en": "katsu; wa.ru, wari -- proportion, comparatively, divide. E.g. 役割 (yakuwari): part; assigning parts."
          },
          {
            "es": "額",
            "en": "gaku; hitai -- forehead, tablet, plaque. E.g. 総額 (sougaku): sum total; total amount."
          },
          {
            "es": "価",
            "en": "ka, ke; atai -- value, price. E.g. 価格 (kakaku): price; value."
          },
          {
            "es": "値",
            "en": "chi; ne, atai -- price, cost, value. E.g. 価値 (kachi): value; worth."
          },
          {
            "es": "位",
            "en": "i; kurai, gurai -- rank, grade, throne. E.g. 単位 (tan'i): unit; denomination; credit."
          },
          {
            "es": "格",
            "en": "kaku, kou -- status, rank, capacity. E.g. 価格 (kakaku): price; value."
          },
          {
            "es": "超",
            "en": "chou; ko.eru, ko.su -- transcend, super-, ultra-. E.g. 超える (koeru): to cross over; to cross; to exceed."
          },
          {
            "es": "総",
            "en": "sou; su.bete, sube.te -- general, whole, all. E.g. 総会 (soukai): general meeting."
          },
          {
            "es": "全",
            "en": "zen; matta.ku, sube.te -- whole, entire, all. E.g. 安全 (anzen): safety; security."
          },
          {
            "es": "両",
            "en": "ryou; teru, futatsu -- both, old Japanese coin, counter for carriages (e.g., in a train). E.g. 両国 (ryoukoku): both countries; Ryōgoku."
          },
          {
            "es": "点",
            "en": "ten; tsu.keru, tsu.ku -- spot, point, mark. E.g. 時点 (jiten): point in time; occasion."
          },
          {
            "es": "副",
            "en": "fuku -- vice-, assistant, aide. E.g. 副作用 (fukusayou): side effect; adverse reaction."
          },
          {
            "es": "個",
            "en": "ko, ka -- individual, counter for articles. E.g. 個人的 (kojinteki): personal; individual."
          },
          {
            "es": "段",
            "en": "dan, tan -- grade, steps, stairs. E.g. 段階 (dankai): grade; level."
          },
          {
            "es": "階",
            "en": "kai; kizahashi -- storey, stair, counter for storeys of a building. E.g. 段階 (dankai): grade; level."
          },
          {
            "es": "種",
            "en": "shu; tane, gusa -- species, kind, class. E.g. 一種 (isshu): species; kind."
          },
          {
            "es": "型",
            "en": "kei; kata, gata -- mould, type, model. E.g. 型 (kata): model; type."
          },
          {
            "es": "式",
            "en": "shiki -- style, ceremony, rite. E.g. 方式 (houshiki): form; method."
          },
          {
            "es": "横",
            "en": "ou; yoko -- sideways, side, horizontal. E.g. 横 (yoko): horizontal; lying down; side-to-side."
          },
          {
            "es": "非",
            "en": "hi; ara.zu -- un-, mistake, negative. E.g. 非難 (hinan): criticism; blame."
          },
          {
            "es": "財",
            "en": "zai, sai; takara -- property, money, wealth. E.g. 財界 (zaikai): financial world; business circles."
          },
          {
            "es": "候",
            "en": "kou; sourou -- climate, season, weather. E.g. 候補 (kouho): candidate; contender; candidacy."
          }
        ]
      },
      {
        "heading": "Key Vocabulary",
        "body": [
          "These words come from this lesson's dialogue and reading, plus other common words built from the unit's kanji. The full 200-word list for this unit is in the data files that ship with the module."
        ],
        "examples": [
          {
            "es": "安全",
            "en": "anzen -- safety; security"
          },
          {
            "es": "価格",
            "en": "kakaku -- price; value"
          },
          {
            "es": "候補",
            "en": "kouho -- candidate; contender; candidacy"
          },
          {
            "es": "全体",
            "en": "zentai -- whole; entirety"
          },
          {
            "es": "総会",
            "en": "soukai -- general meeting"
          },
          {
            "es": "段階",
            "en": "dankai -- grade; level"
          },
          {
            "es": "役割",
            "en": "yakuwari -- part; assigning parts"
          },
          {
            "es": "全国",
            "en": "zenkoku -- the whole country"
          },
          {
            "es": "両国",
            "en": "ryoukoku -- both countries; Ryōgoku"
          },
          {
            "es": "後半",
            "en": "kouhan -- second half; latter half"
          },
          {
            "es": "数字",
            "en": "suuji -- numeral; figure"
          },
          {
            "es": "増加",
            "en": "zouka -- increase; rise"
          },
          {
            "es": "日程",
            "en": "nittei -- schedule; program"
          },
          {
            "es": "半分",
            "en": "hanbun -- half"
          },
          {
            "es": "比べる",
            "en": "kuraberu -- to compare; to make a comparison; to compete"
          },
          {
            "es": "比例",
            "en": "hirei -- proportion"
          },
          {
            "es": "評価",
            "en": "hyouka -- valuation; appraisal; appreciation"
          },
          {
            "es": "数",
            "en": "kazu -- number; amount"
          },
          {
            "es": "前半",
            "en": "zenhan -- first half"
          },
          {
            "es": "全日",
            "en": "zenjitsu -- all days"
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "What is the reading of 評価?",
            "options": [
              "あんぜん",
              "ひょうか",
              "げんじてん",
              "はんとし"
            ],
            "correctIndex": 1,
            "explanation": "評価 is read ひょうか (valuation; appraisal; appreciation)."
          },
          {
            "type": "multiple-choice",
            "question": "What is the reading of 超伝導?",
            "options": [
              "へいこうせん",
              "もんだいてん",
              "こうりかかく",
              "ちょうでんどう"
            ],
            "correctIndex": 3,
            "explanation": "超伝導 is read ちょうでんどう (superconductivity; super-conductivity)."
          }
        ]
      },
      {
        "heading": "Speak About It",
        "body": [
          "Use these prompts for your 30-minute chat with a native speaker, or answer them aloud on your own in full sentences that use this lesson's patterns.",
          "Writing challenge: Write a 400-character comparison of two places, foods or products."
        ],
        "examples": [
          {
            "es": "あなたにとって、一番大切なものは何ですか。",
            "en": "anata ni totte, ichiban taisetsu na mono wa nan desu ka. -- What is the most important thing to you?"
          },
          {
            "es": "国によって、習慣が違うと思ったことはありますか。",
            "en": "kuni ni yotte, shuukan ga chigau to omotta koto wa arimasu ka. -- Have you ever noticed that customs differ by country?"
          },
          {
            "es": "日本と自分の国では、どちらのほうが便利だと思いますか。",
            "en": "nihon to jibun no kuni de wa, dochira no hou ga benri da to omoimasu ka. -- Which do you think is more convenient, Japan or your home country?"
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "兄は静かなの（　）、弟はにぎやかです。 (My older brother is quiet, whereas my younger brother is lively.)",
        "options": [
          "くらい",
          "によって",
          "にとって",
          "に対して"
        ],
        "correctIndex": 3,
        "explanation": "に対して can set up a contrast."
      },
      {
        "type": "multiple-choice",
        "question": "What does 個展 (こてん) mean?",
        "options": [
          "solo exhibition; one-man exhibition",
          "success; passing",
          "the whole world",
          "healthy; sound"
        ],
        "correctIndex": 0,
        "explanation": "個展 (こてん) means solo exhibition; one-man exhibition."
      },
      {
        "type": "multiple-choice",
        "question": "What does 一階 (いっかい) mean?",
        "options": [
          "rainfall",
          "to cross over; to cross; to exceed",
          "form; formality; method",
          "first floor; ground floor; one floor"
        ],
        "correctIndex": 3,
        "explanation": "一階 (いっかい) means first floor; ground floor; one floor."
      },
      {
        "type": "multiple-choice",
        "question": "Passage: 東京は大阪ほど食べ物が安くありません。でも、店によって値段が全然違います。 — How do food prices in Tokyo compare with Osaka?",
        "options": [
          "They are the same",
          "It is not mentioned",
          "Tokyo is more expensive",
          "Tokyo is cheaper"
        ],
        "correctIndex": 2,
        "explanation": "大阪ほど安くない means Tokyo is not as cheap."
      },
      {
        "type": "multiple-choice",
        "question": "Passage: 私にとって、一番大切なのは家族です。国によって考え方は違いますが、私は家族を大切にしたいです。 — What is most important to the speaker?",
        "options": [
          "Family",
          "Money",
          "Work",
          "Travel"
        ],
        "correctIndex": 0,
        "explanation": "にとって marks the speaker's view: family."
      },
      {
        "type": "matching",
        "instructions": "Match each word with its English meaning.",
        "pairs": [
          {
            "left": "人数",
            "right": "the number of people"
          },
          {
            "left": "候補",
            "right": "candidate"
          },
          {
            "left": "問題点",
            "right": "the problem"
          },
          {
            "left": "種目",
            "right": "item"
          },
          {
            "left": "単位",
            "right": "unit"
          }
        ],
        "explanation": "These words all belong to this unit's vocabulary. Check any you missed against the Key Vocabulary and Core Kanji sections."
      },
      {
        "type": "matching",
        "instructions": "Match each word with its reading.",
        "pairs": [
          {
            "left": "平日",
            "right": "へいじつ"
          },
          {
            "left": "全日",
            "right": "ぜんじつ"
          },
          {
            "left": "全土",
            "right": "ぜんど"
          },
          {
            "left": "総会屋",
            "right": "そうかいや"
          },
          {
            "left": "失点",
            "right": "しってん"
          }
        ],
        "explanation": "Reading a kanji word correctly is what lets the vocabulary stick, so say each word aloud once you have the match."
      },
      {
        "type": "matching",
        "instructions": "Match each pattern with its meaning.",
        "pairs": [
          {
            "left": "～ほど",
            "right": "Extent, often with a negative: not as X as"
          },
          {
            "left": "～くらい・～ぐらい",
            "right": "Degree or extent"
          },
          {
            "left": "～にとって",
            "right": "From the standpoint of"
          },
          {
            "left": "～に対して",
            "right": "Toward a person or thing, or in contrast"
          },
          {
            "left": "～によって",
            "right": "Depending on, or by"
          }
        ],
        "explanation": "Each pattern in this lesson has a distinct job. If any pair was hard, reread that pattern's section and its examples."
      }
    ]
  },
  {
    "slug": "polite-service-japanese-keigo",
    "level": "JA-B1",
    "number": 9,
    "title": "Polite Service Japanese (Keigo I)",
    "summary": "Handle phone calls and formal emails with honorific and humble keigo, and tell your own side (内) from the outside (外).",
    "duration": "45 min",
    "sections": [
      {
        "heading": "What This Lesson Covers",
        "body": [
          "Handle phone calls and formal emails with honorific and humble keigo, and tell your own side (内) from the outside (外).",
          "By the end of this lesson you will be able to: (1) Show respect to the other person with honorific forms, and humility about themselves with humble forms.  (2) Tell apart the speaker's own side (内) from the outside (外), and pick the right form.  (3) Handle a short business phone call and write a formal email.",
          "Every lesson in this module follows the same path: a short dialogue that uses the patterns, one section per pattern with a quick check, a section on choosing between the patterns, a reading passage, and then the kanji and vocabulary that go with the unit."
        ]
      },
      {
        "heading": "Dialogue: Polite Service Japanese (Keigo I)",
        "body": [
          "Read the conversation once for the gist, then again line by line. Each line comes with romaji and an English gloss. Watch for the patterns in this lesson as they appear in natural speech; the sections that follow take them one at a time."
        ],
        "examples": [
          {
            "es": "店員：お電話ありがとうございます。さくら旅行でございます。",
            "en": "Clerk: odenwa arigatou gozaimasu. Sakura ryokou de gozaimasu. -- Clerk: Thank you for calling. This is Sakura Travel."
          },
          {
            "es": "リー：私、リーと申します。田中様は、いらっしゃいますか。",
            "en": "Lee: watashi, Lee to moushimasu. Tanaka-sama wa, irasshaimasu ka. -- Lee: My name is Lee. Is Mr. Tanaka there?"
          },
          {
            "es": "店員：田中は、ただいま席を外しております。あとでお電話いたしましょうか。",
            "en": "Clerk: Tanaka wa, tadaima seki o hazushite orimasu. ato de odenwa itashimashou ka. -- Clerk: Tanaka is away from his desk at the moment. Shall I call you back later?"
          },
          {
            "es": "リー：はい、お願いします。明日の三時に伺うと、お伝えください。",
            "en": "Lee: hai, onegai shimasu. asu no san ji ni ukagau to, otsutae kudasai. -- Lee: Yes, please. Please tell him I will visit at three tomorrow."
          }
        ]
      },
      {
        "heading": "Honorific special verbs: Respect",
        "body": [
          "Core idea: Respect: いらっしゃる, おっしゃる, 召し上がる, ご覧になる, くださる.",
          "How to build it: Learn these as pairs: いる → いらっしゃる, 言う → おっしゃる, 食べる → 召し上がる, 見る → ご覧になる, くれる → くださる.",
          "These raise the other person's actions. Never use them for your own actions; that would be praising yourself."
        ],
        "examples": [
          {
            "es": "社長は今、会議室にいらっしゃいます。",
            "en": "shachou wa ima, kaigishitsu ni irasshaimasu. -- The president is in the meeting room now."
          },
          {
            "es": "先生は、何をおっしゃいましたか。",
            "en": "sensei wa, nan o osshaimashita ka. -- What did the teacher say?"
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "社長は今、会議室に（　）。 (The president is in the meeting room now (honorific).)",
            "options": [
              "申します",
              "まいります",
              "おります",
              "いらっしゃいます"
            ],
            "correctIndex": 3,
            "explanation": "いらっしゃる is the honorific for いる."
          }
        ]
      },
      {
        "heading": "お・ご～になる: Regular honorific form",
        "body": [
          "Core idea: Regular honorific form.",
          "How to build it: お + verb stem + になる (お読みになる); ご + suru-noun + になる (ご利用になる).",
          "It is the regular honorific for verbs with no special form. Use it for teachers, customers and superiors."
        ],
        "examples": [
          {
            "es": "先生はもう本をお読みになりました。",
            "en": "sensei wa mou hon o oyomi ni narimashita. -- The teacher has already read the book."
          },
          {
            "es": "社長は、新しい車をお買いになりました。",
            "en": "shachou wa, atarashii kuruma o okai ni narimashita. -- The president bought a new car."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "先生はもうその本を（　）。 (The teacher has already read that book (honorific).)",
            "options": [
              "お読みになりました",
              "お読みしました",
              "読まれさせました",
              "読ませていただきました"
            ],
            "correctIndex": 0,
            "explanation": "お～になる raises the other person."
          }
        ]
      },
      {
        "heading": "Humble special verbs: Humility",
        "body": [
          "Core idea: Humility: 申す, 参る, 伺う, いただく, 拝見する, いたす.",
          "How to build it: Learn these as pairs: 言う → 申す, 行く・来る → 参る or 伺う, もらう → いただく, 見る → 拝見する, する → いたす.",
          "These lower the speaker or the speaker's own side. 伺います is 'I will visit' when the person being visited deserves respect."
        ],
        "examples": [
          {
            "es": "明日の三時に、伺います。",
            "en": "asu no san ji ni, ukagaimasu. -- I will visit at three tomorrow."
          },
          {
            "es": "その資料は、明日拝見します。",
            "en": "sono shiryou wa, asu haiken shimasu. -- I will look at those materials tomorrow."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "明日の三時に、そちらへ（　）。 (I will visit you at three tomorrow (humble).)",
            "options": [
              "おっしゃいます",
              "いらっしゃいます",
              "召し上がります",
              "伺います"
            ],
            "correctIndex": 3,
            "explanation": "伺う is the humble verb for visiting."
          }
        ]
      },
      {
        "heading": "お・ご～する: Regular humble form",
        "body": [
          "Core idea: Regular humble form.",
          "How to build it: お + verb stem + する (お送りする); ご + suru-noun + する (ご連絡する).",
          "It is the regular humble form. The speaker's action affects the other person, and the other person is raised by comparison."
        ],
        "examples": [
          {
            "es": "資料は、あとでお送りします。",
            "en": "shiryou wa, ato de ookuri shimasu. -- I will send the materials later."
          },
          {
            "es": "後ほど、ご連絡します。",
            "en": "nochihodo, gorenraku shimasu. -- I will contact you later."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "資料は、あとで（　）。 (I will send the materials later (humble).)",
            "options": [
              "お送りします",
              "送られます",
              "お送りになります",
              "送ってくださいます"
            ],
            "correctIndex": 0,
            "explanation": "お～する lowers the speaker."
          }
        ]
      },
      {
        "heading": "～でございます・～と申します: Formal set phrases",
        "body": [
          "Core idea: Formal set phrases.",
          "How to build it: Noun + でございます; name + と申します.",
          "These are formal set phrases. でございます is the service-counter version of です, and と申します is the humble way to give your name."
        ],
        "examples": [
          {
            "es": "こちらは受付でございます。",
            "en": "kochira wa uketsuke de gozaimasu. -- This is the reception desk."
          },
          {
            "es": "はじめまして。山田と申します。",
            "en": "hajimemashite. Yamada to moushimasu. -- Nice to meet you. My name is Yamada."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "はじめまして。リー（　）。 (Nice to meet you. My name is Lee (humble).)",
            "options": [
              "と言われます",
              "と申します",
              "でいらっしゃいます",
              "とおっしゃいます"
            ],
            "correctIndex": 1,
            "explanation": "申す is the humble verb for saying."
          }
        ]
      },
      {
        "heading": "Choosing Between the Patterns",
        "body": [
          "The main contrast is who is being raised and who is being lowered. Honorific forms raise the other person and their actions. Humble forms lower the speaker or the speaker's own side. To a customer, the speaker uses the humble form for their own colleagues, so they say 田中は, not 田中さんは, when talking about a coworker."
        ],
        "examples": [
          {
            "es": "部長の田中は、ただいま席を外しております。",
            "en": "buchou no Tanaka wa, tadaima seki o hazushite orimasu. -- Manager Tanaka is away from his desk right now (said to an outside customer)."
          }
        ]
      },
      {
        "heading": "Reading Practice",
        "body": [
          "Read the passage once without stopping (130 characters), then again slowly, checking each sentence against its gloss. Try to spot which pattern from this lesson is behind each sentence before you answer the questions."
        ],
        "examples": [
          {
            "es": "株式会社さくら旅行 田中様",
            "en": "kabushiki kaisha Sakura ryokou Tanaka-sama -- To Mr. Tanaka, Sakura Travel Co., Ltd."
          },
          {
            "es": "いつもお世話になっております。",
            "en": "itsu mo osewa ni natte orimasu. -- Thank you for your continued support."
          },
          {
            "es": "リーでございます。",
            "en": "Lee de gozaimasu. -- This is Lee."
          },
          {
            "es": "先日は、ご案内をいただき、ありがとうございました。",
            "en": "senjitsu wa, goannai o itadaki, arigatou gozaimashita. -- Thank you for the guidance you gave me the other day."
          },
          {
            "es": "来週の水曜日、三時に御社に伺いたいのですが、ご都合はいかがでしょうか。",
            "en": "raishuu no suiyou hi, san ji ni gosha ni ukagaitai no desu ga, gotsugou wa ikaga deshou ka. -- I would like to visit your company at three o'clock next Wednesday. Would that be convenient for you?"
          },
          {
            "es": "資料は、前日までにお送りいたします。",
            "en": "shiryou wa, zenjitsu made ni ookuri itashimasu. -- I will send the materials by the day before."
          },
          {
            "es": "どうぞよろしくお願いいたします。",
            "en": "douzo yoroshiku onegai itashimasu. -- Thank you in advance for your kind cooperation."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "What is the purpose of the email?",
            "options": [
              "To cancel a meeting",
              "To ask for materials",
              "To book a flight",
              "To ask to visit next Wednesday at three"
            ],
            "correctIndex": 3,
            "explanation": "The writer asks to visit at three next Wednesday."
          },
          {
            "type": "multiple-choice",
            "question": "When will the writer send the materials?",
            "options": [
              "After the visit",
              "This afternoon",
              "By the day before",
              "Next month"
            ],
            "correctIndex": 2,
            "explanation": "The materials arrive by the previous day."
          },
          {
            "type": "multiple-choice",
            "question": "What does the writer thank Mr. Tanaka for?",
            "options": [
              "A lunch invitation",
              "A ride",
              "A gift",
              "The guidance he gave the other day"
            ],
            "correctIndex": 3,
            "explanation": "The thanks are for the guidance."
          }
        ]
      },
      {
        "heading": "Core Kanji",
        "body": [
          "These eight kanji anchor this lesson's vocabulary. For each one you see its on'yomi (Chinese-derived) and kun'yomi (native Japanese) readings, its core meanings, and a word that uses it. Learn them through the words, not in isolation.",
          "Readings are written in romaji. A dot in a kun'yomi reading marks where the kana ending of the word begins, and a dash means the reading does not apply."
        ],
        "examples": [
          {
            "es": "客",
            "en": "kyaku, kaku -- guest, visitor, customer. E.g. 客 (kyaku): guest; visitor; customer."
          },
          {
            "es": "社",
            "en": "sha; yashiro -- company, firm, office. E.g. 会社 (kaisha): company; corporation; workplace."
          },
          {
            "es": "員",
            "en": "in -- employee, member, number. E.g. 委員 (iin): committee member."
          },
          {
            "es": "申",
            "en": "shin; mou.su, mou.shi -- have the honor to, sign of the monkey, 3-5PM. E.g. 答申 (toushin): report; reply."
          },
          {
            "es": "案",
            "en": "an; tsukue -- plan, suggestion, draft. E.g. 原案 (gen'an): original plan; original bill."
          },
          {
            "es": "応",
            "en": "ou, you; ata.ru, masani -- apply, answer, yes. E.g. 応じる (oujiru): to respond; to satisfy."
          },
          {
            "es": "招",
            "en": "shou; mane.ku -- beckon, invite, summon. E.g. 招き (maneki): invitation."
          },
          {
            "es": "議",
            "en": "gi -- deliberation, consultation, debate. E.g. 議員 (giin): member of an assembly; member of the Diet."
          }
        ]
      },
      {
        "heading": "Kanji for Your Review Deck",
        "body": [
          "The other 24 kanji of this unit come through your daily review deck. Skim them here so they look familiar, then let spaced review do the work."
        ],
        "examples": [
          {
            "es": "参",
            "en": "san, shin; mai.ru, mai -- nonplussed, three (in documents), going. E.g. 参加 (sanka): participation; joining."
          },
          {
            "es": "呼",
            "en": "ko; yo.bu -- call, call out to, invite. E.g. 呼ぶ (yobu): to call out; to call; to summon."
          },
          {
            "es": "達",
            "en": "tatsu, da; tachi -- accomplished, reach, arrive. E.g. 達成 (tassei): achievement; attainment."
          },
          {
            "es": "設",
            "en": "setsu; mou.keru -- establishment, provision, prepare. E.g. 建設 (kensetsu): construction; establishment."
          },
          {
            "es": "取",
            "en": "shu; to.ru, to.ri -- take, fetch, take up. E.g. 取引 (torihiki): transactions; dealings."
          },
          {
            "es": "組",
            "en": "so; ku.mu, kumi -- association, braid, plait. E.g. 番組 (bangumi): program; programme."
          },
          {
            "es": "係",
            "en": "kei; kaka.ru, kakari -- person in charge, connection, duty. E.g. 関係者 (kankeisha): person concerned; people involved."
          },
          {
            "es": "委",
            "en": "i; yuda.neru -- committee, entrust to, leave to. E.g. 委員 (iin): committee member."
          },
          {
            "es": "局",
            "en": "kyoku; tsubone -- bureau, board, office. E.g. 当局 (toukyoku): authorities; relevant authorities; this office."
          },
          {
            "es": "部",
            "en": "bu; be -- section, bureau, dept. E.g. 一部 (ichibu): one part; one portion; one copy."
          },
          {
            "es": "省",
            "en": "sei, shou; kaeri.miru, habu.ku -- focus, government ministry, conserve. E.g. 外務省 (gaimushou): Ministry of Foreign Affairs."
          },
          {
            "es": "協",
            "en": "kyou -- co-, cooperation. E.g. 協議 (kyougi): conference; consultation."
          },
          {
            "es": "連",
            "en": "ren; tsura.naru, tsura.neru -- take along, lead, join. E.g. 連続 (renzoku): continuation; succession."
          },
          {
            "es": "告",
            "en": "koku; tsu.geru -- revelation, tell, inform. E.g. 被告 (hikoku): defendant; the accused."
          },
          {
            "es": "信",
            "en": "shin -- faith, truth, fidelity. E.g. 通信 (tsuushin): correspondence; communication."
          },
          {
            "es": "利",
            "en": "ri; ki.ku -- profit, advantage, benefit. E.g. 金利 (kinri): interest rate; interest."
          },
          {
            "es": "師",
            "en": "shi; ikusa -- expert, teacher, master. E.g. 技師 (gishi): engineer; technician."
          },
          {
            "es": "園",
            "en": "en; sono -- park, garden, yard. E.g. 学園 (gakuen): educational institution; school."
          },
          {
            "es": "在",
            "en": "zai; a.ru -- exist, outskirts, suburbs. E.g. 現在 (genzai): now; current."
          },
          {
            "es": "団",
            "en": "dan, ton; katamari, maru.i -- group, association. E.g. 団体 (dantai): organization; organisation."
          },
          {
            "es": "側",
            "en": "soku; kawa, gawa -- side, lean, oppose. E.g. 側 (soba): near; close; third person."
          },
          {
            "es": "関",
            "en": "kan; seki, zeki -- connection, barrier, gateway. E.g. 関心 (kanshin): concern; interest."
          },
          {
            "es": "当",
            "en": "tou; a.taru, a.tari -- hit, right, appropriate. E.g. 当局 (toukyoku): authorities; relevant authorities; this office."
          },
          {
            "es": "付",
            "en": "fu; tsu.keru, tsu.keru -- adhere, attach, refer to. E.g. 付き合い (tsukiai): association; socializing."
          }
        ]
      },
      {
        "heading": "Key Vocabulary",
        "body": [
          "These words come from this lesson's dialogue and reading, plus other common words built from the unit's kanji. The full 200-word list for this unit is in the data files that ship with the module."
        ],
        "examples": [
          {
            "es": "会社",
            "en": "kaisha -- company; corporation; workplace"
          },
          {
            "es": "店員",
            "en": "ten'in -- employee; shop assistant"
          },
          {
            "es": "委員",
            "en": "iin -- committee member"
          },
          {
            "es": "委員会",
            "en": "iinkai -- committee; commission"
          },
          {
            "es": "一部",
            "en": "ichibu -- one part; one portion; one copy"
          },
          {
            "es": "会員",
            "en": "kaiin -- member; the membership"
          },
          {
            "es": "外務省",
            "en": "gaimushou -- Ministry of Foreign Affairs"
          },
          {
            "es": "関心",
            "en": "kanshin -- concern; interest"
          },
          {
            "es": "議員",
            "en": "giin -- member of an assembly; member of the Diet"
          },
          {
            "es": "議会",
            "en": "gikai -- congress; parliament"
          },
          {
            "es": "議長",
            "en": "gichou -- chair; chairman"
          },
          {
            "es": "客",
            "en": "kyaku -- guest; visitor; customer"
          },
          {
            "es": "協議",
            "en": "kyougi -- conference; consultation"
          },
          {
            "es": "金利",
            "en": "kinri -- interest rate; interest"
          },
          {
            "es": "決議",
            "en": "ketsugi -- resolution; vote"
          },
          {
            "es": "建設",
            "en": "kensetsu -- construction; establishment"
          },
          {
            "es": "現在",
            "en": "genzai -- now; current"
          },
          {
            "es": "参加",
            "en": "sanka -- participation; joining"
          },
          {
            "es": "社会",
            "en": "shakai -- society; public; social studies"
          },
          {
            "es": "社長",
            "en": "shachou -- company president; manager"
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "What is the reading of 参加者?",
            "options": [
              "たんとう",
              "さんかしゃ",
              "きょうかい",
              "くみあい"
            ],
            "correctIndex": 1,
            "explanation": "参加者 is read さんかしゃ (participant; entrant)."
          },
          {
            "type": "multiple-choice",
            "question": "What is the reading of 部数?",
            "options": [
              "ぶすう",
              "しんこく",
              "しょいん",
              "こたえる"
            ],
            "correctIndex": 0,
            "explanation": "部数 is read ぶすう (number of copies; circulation)."
          }
        ]
      },
      {
        "heading": "Speak About It",
        "body": [
          "Use these prompts for your 30-minute chat with a native speaker, or answer them aloud on your own in full sentences that use this lesson's patterns.",
          "Writing challenge: Write a formal email and a phone-call script for a business."
        ],
        "examples": [
          {
            "es": "電話で、お店の予約をしてください。",
            "en": "denwa de, omise no yoyaku o shite kudasai. -- Please make a restaurant reservation by phone."
          },
          {
            "es": "会社にお客様が来ました。受付でどう話しますか。",
            "en": "kaisha ni okyakusama ga kimashita. uketsuke de dou hanashimasu ka. -- A customer has come to the company. How do you speak at the reception desk?"
          },
          {
            "es": "先生に、レポートの締め切りを聞いてください。",
            "en": "sensei ni, repooto no shimekiri o kiite kudasai. -- Please ask your teacher about the report deadline."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "（To a customer） 部長の田中は、ただいま席を（　）。 (Manager Tanaka is away from his desk right now (said to an outside customer).)",
        "options": [
          "外しておられます",
          "外されております",
          "外していらっしゃいます",
          "外しております"
        ],
        "correctIndex": 3,
        "explanation": "Use the humble form for your own side when speaking to outsiders."
      },
      {
        "type": "multiple-choice",
        "question": "What does 告別 (こくべつ) mean?",
        "options": [
          "farewell; leave-taking",
          "conference; consultation",
          "establishment; opening",
          "newspaper company"
        ],
        "correctIndex": 0,
        "explanation": "告別 (こくべつ) means farewell; leave-taking."
      },
      {
        "type": "multiple-choice",
        "question": "What does 参議院 (さんぎいん) mean?",
        "options": [
          "confidence; trust; credit",
          "report",
          "topic of discussion; agenda",
          "House of Councillors"
        ],
        "correctIndex": 3,
        "explanation": "参議院 (さんぎいん) means House of Councillors."
      },
      {
        "type": "multiple-choice",
        "question": "Passage: お電話ありがとうございます。さくら旅行でございます。田中は、ただいま席を外しております。 — What does the staff member say about Tanaka?",
        "options": [
          "He is away from his desk",
          "He is on vacation",
          "He is in a meeting",
          "He has retired"
        ],
        "correctIndex": 0,
        "explanation": "外しております means away from the desk."
      },
      {
        "type": "multiple-choice",
        "question": "Passage: 明日の三時に伺います。資料は、あとでお送りいたします。 — What will the speaker do later?",
        "options": [
          "Cancel the visit",
          "Send the materials",
          "Buy a gift",
          "Call again"
        ],
        "correctIndex": 1,
        "explanation": "お送りいたします is a humble form."
      },
      {
        "type": "matching",
        "instructions": "Match each word with its English meaning.",
        "pairs": [
          {
            "left": "側近",
            "right": "close associate"
          },
          {
            "left": "社会人",
            "right": "working adult"
          },
          {
            "left": "達成",
            "right": "achievement"
          },
          {
            "left": "呼ぶ",
            "right": "to call out"
          },
          {
            "left": "関心",
            "right": "concern"
          }
        ],
        "explanation": "These words all belong to this unit's vocabulary. Check any you missed against the Key Vocabulary and Core Kanji sections."
      },
      {
        "type": "matching",
        "instructions": "Match each word with its reading.",
        "pairs": [
          {
            "left": "集団",
            "right": "しゅうだん"
          },
          {
            "left": "自社",
            "right": "じしゃ"
          },
          {
            "left": "通信",
            "right": "つうしん"
          },
          {
            "left": "番組",
            "right": "ばんぐみ"
          },
          {
            "left": "告示",
            "right": "こくじ"
          }
        ],
        "explanation": "Reading a kanji word correctly is what lets the vocabulary stick, so say each word aloud once you have the match."
      },
      {
        "type": "matching",
        "instructions": "Match each pattern with its meaning.",
        "pairs": [
          {
            "left": "Honorific special verbs",
            "right": "Respect: いらっしゃる, おっしゃる, 召し上がる, ご覧になる, くださる"
          },
          {
            "left": "お・ご～になる",
            "right": "Regular honorific form"
          },
          {
            "left": "Humble special verbs",
            "right": "Humility: 申す, 参る, 伺う, いただく, 拝見する, いたす"
          },
          {
            "left": "お・ご～する",
            "right": "Regular humble form"
          },
          {
            "left": "～でございます・～と申します",
            "right": "Formal set phrases"
          }
        ],
        "explanation": "Each pattern in this lesson has a distinct job. If any pair was hard, reread that pattern's section and its examples."
      }
    ]
  },
  {
    "slug": "formal-writing-and-news",
    "level": "JA-B1",
    "number": 10,
    "title": "Formal Writing and News",
    "summary": "Read and write news-style Japanese with によると, ということだ, として, に関して and につれて.",
    "duration": "45 min",
    "sections": [
      {
        "heading": "What This Lesson Covers",
        "body": [
          "Read and write news-style Japanese with によると, ということだ, として, に関して and につれて.",
          "By the end of this lesson you will be able to: (1) Read a short news article and pick out the source, the main fact and the reaction.  (2) Write in plain style (だ・である) and link sentences with written connectors.  (3) Report information and name its source, in speech and in writing.",
          "Every lesson in this module follows the same path: a short dialogue that uses the patterns, one section per pattern with a quick check, a section on choosing between the patterns, a reading passage, and then the kanji and vocabulary that go with the unit."
        ]
      },
      {
        "heading": "Dialogue: Formal Writing and News",
        "body": [
          "Read the conversation once for the gist, then again line by line. Each line comes with romaji and an English gloss. Watch for the patterns in this lesson as they appear in natural speech; the sections that follow take them one at a time."
        ],
        "examples": [
          {
            "es": "リー：ニュースによると、来月から電車の料金が上がるということです。",
            "en": "Lee: nyuusu ni yoru to, raigetsu kara densha no ryoukin ga agaru to iu koto desu. -- Lee: According to the news, train fares will go up from next month."
          },
          {
            "es": "田中：えっ、本当ですか。",
            "en": "Tanaka: e, hontou desu ka. -- Tanaka: What, really?"
          },
          {
            "es": "リー：はい。物の値段が上がるにつれて、料金も上がっているそうです。",
            "en": "Lee: hai. mono no nedan ga agaru ni tsurete, ryoukin mo agatte iru sou desu. -- Lee: Yes. Apparently fares are rising as prices go up."
          },
          {
            "es": "田中：それに関して、会社から何か連絡はありますか。",
            "en": "Tanaka: sore ni kanshite, kaisha kara nan ka renraku wa arimasu ka. -- Tanaka: Has the company said anything about that?"
          }
        ]
      },
      {
        "heading": "～によると: Naming the source of information",
        "body": [
          "Core idea: Naming the source of information.",
          "How to build it: Source noun + によると, then a reporting ending such as だそうだ, ということだ or らしい.",
          "It names the source of the information: 天気予報によると. The ending shows that the information is reported, not the speaker's own opinion."
        ],
        "examples": [
          {
            "es": "天気予報によると、明日は雨だそうです。",
            "en": "tenki yohou ni yoru to, asu wa ame da sou desu. -- According to the forecast, it will rain tomorrow."
          },
          {
            "es": "新聞によると、今年は雪が多いそうです。",
            "en": "shinbun ni yoru to, kotoshi wa yuki ga ooi sou desu. -- According to the newspaper, there is a lot of snow this year."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "天気予報（　）、明日は雨だそうです。 (According to the forecast, it will rain tomorrow.)",
            "options": [
              "にとって",
              "に関して",
              "によると",
              "として"
            ],
            "correctIndex": 2,
            "explanation": "によると names the source."
          }
        ]
      },
      {
        "heading": "～ということだ: Formal reported speech",
        "body": [
          "Core idea: Formal reported speech.",
          "How to build it: Plain form + ということだ (polite: ということです).",
          "It reports what you heard or read, more formally than そうだ. The plain だ version suits written news and the です version suits polite speech."
        ],
        "examples": [
          {
            "es": "会議は来週に延期されるということです。",
            "en": "kaigi wa raishuu ni enki sareru to iu koto desu. -- It is said that the meeting will be postponed to next week."
          },
          {
            "es": "社長は、来月退任するということです。",
            "en": "shachou wa, raigetsu tainin suru to iu koto desu. -- It is said that the president will step down next month."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "会議は来週に延期される（　）。 (It is said that the meeting will be postponed to next week.)",
            "options": [
              "ものです",
              "わけです",
              "ということです",
              "ばかりです"
            ],
            "correctIndex": 2,
            "explanation": "ということだ is formal reported speech."
          }
        ]
      },
      {
        "heading": "～として: In the capacity of",
        "body": [
          "Core idea: In the capacity of.",
          "How to build it: Noun + として.",
          "It gives a role or capacity: 留学生として means 'as an exchange student.' It also appears in set phrases such as 例として, 'as an example.'"
        ],
        "examples": [
          {
            "es": "留学生として、日本に来ました。",
            "en": "ryuugakusei to shite, nihon ni kimashita. -- I came to Japan as an exchange student."
          },
          {
            "es": "日本語の教師として、働いています。",
            "en": "nihongo no kyoushi to shite, hataraite imasu. -- I work as a Japanese language teacher."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "私は留学生（　）、日本に来ました。 (I came to Japan as an exchange student.)",
            "options": [
              "によって",
              "につれて",
              "として",
              "にとって"
            ],
            "correctIndex": 2,
            "explanation": "として gives a capacity or role."
          }
        ]
      },
      {
        "heading": "～に関して: Concerning",
        "body": [
          "Core idea: Concerning.",
          "How to build it: Noun + に関して (は・も). Before a noun, use に関する.",
          "It means 'regarding' or 'concerning' and is more formal than について."
        ],
        "examples": [
          {
            "es": "契約に関して、質問があります。",
            "en": "keiyaku ni kanshite, shitsumon ga arimasu. -- I have a question regarding the contract."
          },
          {
            "es": "新しい規則に関して、説明します。",
            "en": "atarashii kisoku ni kanshite, setsumei shimasu. -- I will explain about the new regulations."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "契約（　）、質問があります。 (I have a question regarding the contract.)",
            "options": [
              "として",
              "に関して",
              "につれて",
              "によると"
            ],
            "correctIndex": 1,
            "explanation": "に関して means concerning."
          }
        ]
      },
      {
        "heading": "～につれて: As one thing changes, another changes",
        "body": [
          "Core idea: As one thing changes, another changes.",
          "How to build it: Dictionary form or noun + につれて.",
          "It links two changes that progress together: 'as X changes, Y changes.' Both parts must describe gradual change, so it is not used for one-time events."
        ],
        "examples": [
          {
            "es": "時間がたつにつれて、日本語に慣れてきました。",
            "en": "jikan ga tatsu ni tsurete, nihongo ni narete kimashita. -- As time passed, I got used to Japanese."
          },
          {
            "es": "年をとるにつれて、体力が落ちます。",
            "en": "toshi o toru ni tsurete, tairyoku ga ochimasu. -- As I get older, my physical strength declines."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "時間がたつ（　）、日本語に慣れてきました。 (As time passed, I got used to Japanese.)",
            "options": [
              "に関して",
              "として",
              "につれて",
              "によると"
            ],
            "correctIndex": 2,
            "explanation": "につれて links two changes."
          }
        ]
      },
      {
        "heading": "Choosing Between the Patterns",
        "body": [
          "The main shift is register. Written Japanese uses plain form (だ, である), avoids contractions such as ちゃう, and links ideas with written connectors: しかし, また, さらに, つまり and ただし. ～によると and ～ということだ pair naturally in news writing, with the source first and the reported fact second."
        ],
        "examples": [
          {
            "es": "市は来年から料金を上げるということだ。",
            "en": "shi wa rainen kara ryoukin o ageru to iu koto da. -- The city will raise fares from next year, it is said."
          }
        ]
      },
      {
        "heading": "Reading Practice",
        "body": [
          "Read the passage once without stopping (153 characters), then again slowly, checking each sentence against its gloss. Try to spot which pattern from this lesson is behind each sentence before you answer the questions."
        ],
        "examples": [
          {
            "es": "市の発表によると、来年四月から、市内のバスの料金が二十円上がるということだ。",
            "en": "shi no happyou ni yoru to, rainen shigatsu kara, shinai no basu no ryoukin ga nijuu en agaru to iu koto da. -- According to the city's announcement, bus fares in the city will rise by 20 yen from April next year."
          },
          {
            "es": "市は、料金の値上げに関して、「これ以上、今の料金で運行するのは難しい」と説明している。",
            "en": "shi wa, ryoukin no neage ni kanshite, \"kore ijou, ima no ryoukin de unkou suru no wa muzukashii\" to setsumei shite iru. -- Regarding the fare increase, the city explains that it is difficult to keep running at the current fares."
          },
          {
            "es": "しかし、利用者からは反対の声も出ている。",
            "en": "shikashi, riyousha kara wa hantai no koe mo dete iru. -- However, there are also voices of opposition from users."
          },
          {
            "es": "バスは、通勤や通学の足として、多くの人に利用されているからだ。",
            "en": "basu wa, tsuukin ya tsuugaku no ashi to shite, ooku no hito ni riyou sarete irukara da. -- This is because buses are used by many people as a way to commute to work and school."
          },
          {
            "es": "今後、市は住民の意見を聞くことにしている。",
            "en": "kongo, shi wa juumin no iken o kiku koto ni shite iru. -- From now on, the city intends to listen to residents' opinions."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "What will change from next April?",
            "options": [
              "Bus fares will go up by 20 yen",
              "Taxi fares will rise",
              "Bus routes will end",
              "Train fares will drop"
            ],
            "correctIndex": 0,
            "explanation": "Bus fares rise by 20 yen."
          },
          {
            "type": "multiple-choice",
            "question": "What is the city's explanation?",
            "options": [
              "It is hard to keep running at current fares",
              "The city wants a new bus terminal",
              "Drivers are going on strike",
              "Buses are too crowded"
            ],
            "correctIndex": 0,
            "explanation": "The city says current fares are unsustainable."
          },
          {
            "type": "multiple-choice",
            "question": "What will the city do next?",
            "options": [
              "Cancel the increase",
              "Listen to residents' opinions",
              "Ask for a loan",
              "Hold a festival"
            ],
            "correctIndex": 1,
            "explanation": "The city will hear residents' views."
          }
        ]
      },
      {
        "heading": "Core Kanji",
        "body": [
          "These eight kanji anchor this lesson's vocabulary. For each one you see its on'yomi (Chinese-derived) and kun'yomi (native Japanese) readings, its core meanings, and a word that uses it. Learn them through the words, not in isolation.",
          "Readings are written in romaji. A dot in a kun'yomi reading marks where the kana ending of the word begins, and a dash means the reading does not apply."
        ],
        "examples": [
          {
            "es": "政",
            "en": "sei, shou; matsurigoto, man -- politics, government. E.g. 行政 (gyousei): administration; governance."
          },
          {
            "es": "治",
            "en": "ji, chi; osa.meru, osa.maru -- reign, be at peace, calm down. E.g. 政治 (seiji): politics; government."
          },
          {
            "es": "済",
            "en": "sai, sei; su.mu, zu.mi -- settle (debt, etc.), relieve (burden), finish. E.g. 経済 (keizai): economy; economics; finance."
          },
          {
            "es": "法",
            "en": "hou, ha; nori -- method, law, rule. E.g. 方法 (houhou): method; process."
          },
          {
            "es": "民",
            "en": "min; tami -- people, nation, subjects. E.g. 国民 (kokumin): people; nation."
          },
          {
            "es": "制",
            "en": "sei -- system, law, rule. E.g. 規制 (kisei): regulation; policing."
          },
          {
            "es": "産",
            "en": "san; u.mu, u.mareru -- products, bear, give birth. E.g. 生産 (seisan): production; manufacture."
          },
          {
            "es": "商",
            "en": "shou; akina.u -- make a deal, selling, dealing in. E.g. 商品 (shouhin): commodity; article of commerce."
          }
        ]
      },
      {
        "heading": "Kanji for Your Review Deck",
        "body": [
          "The other 24 kanji of this unit come through your daily review deck. Skim them here so they look familiar, then let spaced review do the work."
        ],
        "examples": [
          {
            "es": "内",
            "en": "nai, dai; uchi -- inside, within, between. E.g. 内容 (naiyou): contents; content."
          },
          {
            "es": "米",
            "en": "bei, mai; kome, yone -- rice, USA, metre. E.g. 米国 (beikoku): America; USA."
          },
          {
            "es": "実",
            "en": "jitsu, shitsu; mi, mino.ru -- reality, truth, seed. E.g. 現実 (genjitsu): reality; actuality."
          },
          {
            "es": "戦",
            "en": "sen; ikusa, tataka.u -- war, battle, match. E.g. 戦争 (sensou): war; fighting."
          },
          {
            "es": "調",
            "en": "chou; shira.beru, shira.be -- tune, tone, meter. E.g. 調査 (chousa): investigation; examination."
          },
          {
            "es": "公",
            "en": "kou, ku; ooyake -- public, prince, official. E.g. 公園 (kouen): park."
          },
          {
            "es": "和",
            "en": "wa, o; yawa.ragu, yawa.rageru -- harmony, Japanese style, peace. E.g. 平和 (heiwa): peace; harmony."
          },
          {
            "es": "機",
            "en": "ki; hata -- loom, mechanism, machine. E.g. 危機 (kiki): crisis; critical situation."
          },
          {
            "es": "資",
            "en": "shi -- assets, resources, capital. E.g. 資金 (shikin): funds; capital."
          },
          {
            "es": "査",
            "en": "sa -- investigate. E.g. 調査 (chousa): investigation; examination."
          },
          {
            "es": "官",
            "en": "kan -- bureaucrat, the government, organ. E.g. 長官 (choukan): secretary; director."
          },
          {
            "es": "税",
            "en": "zei -- tax, duty. E.g. 関税 (kanzei): tariff; duty."
          },
          {
            "es": "検",
            "en": "ken; shira.beru -- examination, investigate. E.g. 検査 (kensa): inspection; examination."
          },
          {
            "es": "独",
            "en": "doku, toku; hito.ri -- single, alone, spontaneously. E.g. 独立 (dokuritsu): independence; self-reliance."
          },
          {
            "es": "境",
            "en": "kyou, kei; sakai -- boundary, border, region. E.g. 心境 (shinkyou): state of mind; mental state."
          },
          {
            "es": "史",
            "en": "shi -- history, chronicle. E.g. 女史 (joshi): Ms; Miss; highbrow."
          },
          {
            "es": "論",
            "en": "ron; agetsura.u -- argument, discourse. E.g. 議論 (giron): argument; discussion."
          },
          {
            "es": "争",
            "en": "sou; araso.u, ika.deka -- contend, dispute, argue. E.g. 戦争 (sensou): war; fighting."
          },
          {
            "es": "環",
            "en": "kan; wa -- ring, circle, link. E.g. 一環 (ikkan): link; part; monocyclic."
          },
          {
            "es": "賞",
            "en": "shou; ho.meru -- prize, reward, praise. E.g. 受賞 (jushou): winning."
          },
          {
            "es": "旧",
            "en": "kyuu; furu.i, moto -- old times, old things, old friend. E.g. 旧制 (kyuusei): old system; old order."
          },
          {
            "es": "批",
            "en": "hi -- criticism, strike. E.g. 批判 (hihan): criticism; judgement."
          },
          {
            "es": "共",
            "en": "kyou; tomo, tomo.ni -- together, both, neither. E.g. グアテマラ共和国 (guatemarakyouwakoku): Republic of Guatemala."
          },
          {
            "es": "交",
            "en": "kou; maji.waru, maji.eru -- mingle, mixing, association. E.g. 外交 (gaikou): diplomacy; selling."
          }
        ]
      },
      {
        "heading": "Key Vocabulary",
        "body": [
          "These words come from this lesson's dialogue and reading, plus other common words built from the unit's kanji. The full 200-word list for this unit is in the data files that ship with the module."
        ],
        "examples": [
          {
            "es": "住民",
            "en": "juumin -- inhabitant; resident"
          },
          {
            "es": "民",
            "en": "tami -- people; citizens"
          },
          {
            "es": "内",
            "en": "uchi -- inside; within; while"
          },
          {
            "es": "外交",
            "en": "gaikou -- diplomacy; selling"
          },
          {
            "es": "危機",
            "en": "kiki -- crisis; critical situation"
          },
          {
            "es": "機関",
            "en": "kikan -- engine; agency"
          },
          {
            "es": "機能",
            "en": "kinou -- function; facility"
          },
          {
            "es": "規制",
            "en": "kisei -- regulation; policing"
          },
          {
            "es": "経済",
            "en": "keizai -- economy; economics; finance"
          },
          {
            "es": "現実",
            "en": "genjitsu -- reality; actuality"
          },
          {
            "es": "行政",
            "en": "gyousei -- administration; governance"
          },
          {
            "es": "国民",
            "en": "kokumin -- people; nation"
          },
          {
            "es": "財政",
            "en": "zaisei -- public finance; financial affairs"
          },
          {
            "es": "市民",
            "en": "shimin -- citizen; citizenry; city inhabitant"
          },
          {
            "es": "資金",
            "en": "shikin -- funds; capital"
          },
          {
            "es": "事実",
            "en": "jijitsu -- fact; truth"
          },
          {
            "es": "商品",
            "en": "shouhin -- commodity; article of commerce"
          },
          {
            "es": "政界",
            "en": "seikai -- politics; political world"
          },
          {
            "es": "政治",
            "en": "seiji -- politics; government"
          },
          {
            "es": "政治家",
            "en": "seijika -- politician; statesman"
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "What is the reading of 戦線?",
            "options": [
              "しょうこう",
              "せんせん",
              "じむじかん",
              "やまと"
            ],
            "correctIndex": 1,
            "explanation": "戦線 is read せんせん (front)."
          },
          {
            "type": "multiple-choice",
            "question": "What is the reading of 所得税?",
            "options": [
              "じゅうみん",
              "けいざいてき",
              "しゅっさん",
              "しょとくぜい"
            ],
            "correctIndex": 3,
            "explanation": "所得税 is read しょとくぜい (income tax)."
          }
        ]
      },
      {
        "heading": "Speak About It",
        "body": [
          "Use these prompts for your 30-minute chat with a native speaker, or answer them aloud on your own in full sentences that use this lesson's patterns.",
          "Writing challenge: Write a 400-character news-style summary that names its source, in plain style."
        ],
        "examples": [
          {
            "es": "最近のニュースで、気になったことはありますか。それに関して、どう思いますか。",
            "en": "saikin no nyuusu de, ki ni natta koto wa arimasu ka. sore ni kanshite, dou omoimasu ka. -- Was there anything in the recent news that caught your attention? What do you think about it?"
          },
          {
            "es": "あなたは、日本でどんな立場で生活していますか。",
            "en": "anata wa, nihon de donna tachiba de seikatsu shite imasu ka. -- In what capacity do you live in Japan?"
          },
          {
            "es": "時間がたつにつれて、変わったことはありますか。",
            "en": "jikan ga tatsu ni tsurete, kawatta koto wa arimasu ka. -- Has anything changed as time has passed?"
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "市は来年から料金を上げる（　）。（Written news style） (The city will raise fares from next year, it is said.)",
        "options": [
          "ということでした",
          "そうでございます",
          "ということだ",
          "ということです"
        ],
        "correctIndex": 2,
        "explanation": "Plain written style uses だ, not です."
      },
      {
        "type": "multiple-choice",
        "question": "What does 財産 (ざいさん) mean?",
        "options": [
          "method; process",
          "wartime",
          "property; fortune",
          "crisis; critical situation"
        ],
        "correctIndex": 2,
        "explanation": "財産 (ざいさん) means property; fortune."
      },
      {
        "type": "multiple-choice",
        "question": "What does 法案 (ほうあん) mean?",
        "options": [
          "bill; measure",
          "government worker; public servant",
          "inhabitant; resident",
          "critic; reviewer"
        ],
        "correctIndex": 0,
        "explanation": "法案 (ほうあん) means bill; measure."
      },
      {
        "type": "multiple-choice",
        "question": "Passage: ニュースによると、来月から電車の料金が上がるということです。 — What is the news?",
        "options": [
          "Train fares will drop",
          "Trains will stop",
          "Train fares will rise from next month",
          "New trains will run"
        ],
        "correctIndex": 2,
        "explanation": "ということです reports the news."
      },
      {
        "type": "multiple-choice",
        "question": "Passage: 留学生として日本に来て、一年がたちました。時間がたつにつれて、日本語に慣れてきました。 — What has changed as time passed?",
        "options": [
          "The speaker got used to Japanese",
          "The speaker moved",
          "The speaker lost interest",
          "The speaker changed schools"
        ],
        "correctIndex": 0,
        "explanation": "につれて links time passing to the change."
      },
      {
        "type": "matching",
        "instructions": "Match each word with its English meaning.",
        "pairs": [
          {
            "left": "飛行機",
            "right": "aeroplane"
          },
          {
            "left": "敗戦",
            "right": "defeat"
          },
          {
            "left": "県民",
            "right": "citizen of a prefecture"
          },
          {
            "left": "経済",
            "right": "economy"
          },
          {
            "left": "区内",
            "right": "in the ward or borough"
          }
        ],
        "explanation": "These words all belong to this unit's vocabulary. Check any you missed against the Key Vocabulary and Core Kanji sections."
      },
      {
        "type": "matching",
        "instructions": "Match each word with its reading.",
        "pairs": [
          {
            "left": "税制",
            "right": "ぜいせい"
          },
          {
            "left": "税率",
            "right": "ぜいりつ"
          },
          {
            "left": "生産",
            "right": "せいさん"
          },
          {
            "left": "規制",
            "right": "きせい"
          },
          {
            "left": "経済的",
            "right": "けいざいてき"
          }
        ],
        "explanation": "Reading a kanji word correctly is what lets the vocabulary stick, so say each word aloud once you have the match."
      },
      {
        "type": "matching",
        "instructions": "Match each pattern with its meaning.",
        "pairs": [
          {
            "left": "～によると",
            "right": "Naming the source of information"
          },
          {
            "left": "～ということだ",
            "right": "Formal reported speech"
          },
          {
            "left": "～として",
            "right": "In the capacity of"
          },
          {
            "left": "～に関して",
            "right": "Concerning"
          },
          {
            "left": "～につれて",
            "right": "As one thing changes, another changes"
          }
        ],
        "explanation": "Each pattern in this lesson has a distinct job. If any pair was hard, reread that pattern's section and its examples."
      }
    ]
  },
  {
    "slug": "opinions-and-debate",
    "level": "JA-B1",
    "number": 11,
    "title": "Opinions and Debate",
    "summary": "Give opinions, push back and draw conclusions with べきだ, ことはない, わけにはいかない, というより and に違いない.",
    "duration": "45 min",
    "sections": [
      {
        "heading": "What This Lesson Covers",
        "body": [
          "Give opinions, push back and draw conclusions with べきだ, ことはない, わけにはいかない, というより and に違いない.",
          "By the end of this lesson you will be able to: (1) State an opinion with a reason, and say what should or should not be done.  (2) Say something is unnecessary or not possible for practical or moral reasons.  (3) Respond to an opposing view politely and offer an alternative.",
          "Every lesson in this module follows the same path: a short dialogue that uses the patterns, one section per pattern with a quick check, a section on choosing between the patterns, a reading passage, and then the kanji and vocabulary that go with the unit."
        ]
      },
      {
        "heading": "Dialogue: Opinions and Debate",
        "body": [
          "Read the conversation once for the gist, then again line by line. Each line comes with romaji and an English gloss. Watch for the patterns in this lesson as they appear in natural speech; the sections that follow take them one at a time."
        ],
        "examples": [
          {
            "es": "リー：学校で、スマートフォンを自由に使わせるわけにはいかないと思います。",
            "en": "Lee: gakkou de, sumaato fon o jiyuu ni tsukawaseru wake ni wa ikanai to omoimasu. -- Lee: I don't think we can let students use smartphones freely at school."
          },
          {
            "es": "田中：そうですか。私は、使い方を教えれば、使ってもいいと思います。",
            "en": "Tanaka: sou desu ka. watashi wa, tsukaikata o oshiereba, tsukatte mo ii to omoimasu. -- Tanaka: Really? I think they can use them if we teach them how to use them."
          },
          {
            "es": "リー：でも、授業中に遊ぶ学生もいるに違いありません。",
            "en": "Lee: de mo, jugyouchuu ni asobu gakusei mo iru ni chigai arimasen. -- Lee: But some students are sure to play during class."
          },
          {
            "es": "田中：確かにそうですが、全部禁止するというより、ルールを作るほうがいいのではないでしょうか。",
            "en": "Tanaka: tashika ni sou desu ga, zenbu kinshi suru to iu yori, ruuru o tsukuru hou ga ii no de wa naideshou ka. -- Tanaka: That's true, but rather than banning everything, wouldn't it be better to make rules?"
          }
        ]
      },
      {
        "heading": "～べきだ: Should, as a matter of principle",
        "body": [
          "Core idea: Should, as a matter of principle.",
          "How to build it: Dictionary form + べきだ (する → するべき or すべき).",
          "It states what should be done, as a strong moral or social judgment. Adding と思います softens it in speech."
        ],
        "examples": [
          {
            "es": "困っている人がいたら、助けるべきだと思います。",
            "en": "komatte iru hito ga itara, tasukerubekida to omoimasu. -- I think that if someone is in trouble, we should help."
          },
          {
            "es": "約束は守るべきだ。",
            "en": "yakusoku wa mamorubekida. -- Promises should be kept."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "困っている人がいたら、助ける（　）と思います。 (I think we should help someone who is in trouble.)",
            "options": [
              "というより",
              "べきだ",
              "ことはない",
              "わけだ"
            ],
            "correctIndex": 1,
            "explanation": "～べきだ states what should be done."
          }
        ]
      },
      {
        "heading": "～ことはない: There is no need to",
        "body": [
          "Core idea: There is no need to.",
          "How to build it: Dictionary form + ことはない.",
          "It means 'there is no need to...': そんなに心配することはありません. It reassures the listener and is often used to comfort."
        ],
        "examples": [
          {
            "es": "そんなに心配することはありません。",
            "en": "sonna ni shinpai suru koto wa arimasen. -- There is no need to worry so much."
          },
          {
            "es": "失敗しても、落ち込むことはありません。",
            "en": "shippai shite mo, ochikomu koto wa arimasen. -- Even if you fail, there is no need to be discouraged."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "そんなに心配する（　）。 (There is no need to worry so much.)",
            "options": [
              "ことはありません",
              "わけにはいきません",
              "というよりです",
              "に違いありません"
            ],
            "correctIndex": 0,
            "explanation": "～ことはない removes an obligation."
          }
        ]
      },
      {
        "heading": "～わけにはいかない: Cannot, for practical or moral reasons",
        "body": [
          "Core idea: Cannot, for practical or moral reasons.",
          "How to build it: Dictionary form + わけにはいかない (negative: ないわけにはいかない).",
          "It says you cannot do something because of circumstances, duty or social pressure. It is not about ability; it means 'it would not be right to...'"
        ],
        "examples": [
          {
            "es": "明日は大事な試験なので、今夜は遊ぶわけにはいきません。",
            "en": "asu wa daiji na shiken na no de, kon'ya wa asobu wake ni wa ikimasen. -- Tomorrow is an important exam, so I cannot go out tonight."
          },
          {
            "es": "仕事が終わっていないので、帰るわけにはいきません。",
            "en": "shigoto ga owatte inai no de, kaeru wake ni wa ikimasen. -- My work is not finished, so I cannot go home."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "明日は大事な試験なので、今夜は遊ぶ（　）。 (Tomorrow is an important exam, so I cannot go out to play tonight.)",
            "options": [
              "に違いありません",
              "というよりです",
              "ことはありません",
              "わけにはいきません"
            ],
            "correctIndex": 3,
            "explanation": "～わけにはいかない is an outside limit."
          }
        ]
      },
      {
        "heading": "～というより: Rather than saying X, it is closer to Y",
        "body": [
          "Core idea: Rather than saying X, it is closer to Y.",
          "How to build it: Plain form + というより.",
          "It means 'rather than saying X, it is more accurately Y': おいしいというより懐かしい. It offers a better description than the first one."
        ],
        "examples": [
          {
            "es": "このラーメンは、おいしいというより、懐かしい味です。",
            "en": "kono raamen wa, oishii to iu yori, natsukashii aji desu. -- This ramen is less delicious than nostalgic."
          },
          {
            "es": "この本は、小説というより、日記です。",
            "en": "kono hon wa, shousetsu to iu yori, nikki desu. -- This book is more a diary than a novel."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "この店のラーメンは、おいしい（　）、懐かしい味です。 (This ramen is less delicious than nostalgic in flavor.)",
            "options": [
              "ことはなく",
              "わけにはいかず",
              "に違いなく",
              "というより"
            ],
            "correctIndex": 3,
            "explanation": "～というより means rather than saying X."
          }
        ]
      },
      {
        "heading": "～に違いない: Must be, a strong conclusion",
        "body": [
          "Core idea: Must be, a strong conclusion.",
          "How to build it: Plain form + に違いない (noun and な-adjective take no だ before に).",
          "It expresses a strong conclusion, 'must be...,' with high confidence. It is stronger than はずだ and is common in writing."
        ],
        "examples": [
          {
            "es": "二人は兄弟に違いありません。顔がそっくりです。",
            "en": "futari wa kyoudai ni chigai arimasen. kao ga sokkuri desu. -- Those two must be brothers. Their faces are identical."
          },
          {
            "es": "電気が消えているから、留守に違いない。",
            "en": "denki ga kiete irukara, rusu ni chigai nai. -- The lights are off, so they must be out."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "あの二人は顔がそっくりだから、兄弟（　）。 (Those two look identical, so they must be brothers.)",
            "options": [
              "に違いありません",
              "ことはありません",
              "わけにはいきません",
              "というよりです"
            ],
            "correctIndex": 0,
            "explanation": "～に違いない is a strong conclusion."
          }
        ]
      },
      {
        "heading": "Choosing Between the Patterns",
        "body": [
          "The main contrast is strength and source. ～べきだ is a moral or logical duty and can sound strong, so learners soften it with と思います. ～わけにはいかない is an outside limit, while ～ことはない removes an obligation. ～に違いない is the speaker's strong conclusion, stronger than はず."
        ],
        "examples": [
          {
            "es": "ここでは、靴を脱ぐことはありません。",
            "en": "koko de wa, kutsu o nugu koto wa arimasen. -- There is no need to take off your shoes here."
          }
        ]
      },
      {
        "heading": "Reading Practice",
        "body": [
          "Read the passage once without stopping (178 characters), then again slowly, checking each sentence against its gloss. Try to spot which pattern from this lesson is behind each sentence before you answer the questions."
        ],
        "examples": [
          {
            "es": "私は、大学の授業をもっとオンラインにするべきだと考える。",
            "en": "watashi wa, daigaku no jugyou o motto on rain ni surubekida to kangaeru. -- I think university classes should be moved more online."
          },
          {
            "es": "オンラインなら、遠くに住んでいる学生も授業を受けることができる。",
            "en": "on rain nara, tooku ni sunde iru gakusei mo jugyou o ukeru koto ga dekiru. -- If classes are online, students who live far away can also attend."
          },
          {
            "es": "忙しい社会人にとっても便利だ。",
            "en": "isogashii shakainin ni totte mo benri da. -- It is also convenient for busy working adults."
          },
          {
            "es": "学生の生活を考えると、すべてを教室の授業にするわけにはいかない。",
            "en": "gakusei no seikatsu o kangaeru to, subete o kyoushitsu no jugyou ni suru wake ni wa ikanai. -- Considering students' lives, we cannot make everything classroom-based."
          },
          {
            "es": "ただし、オンラインだけでは友達を作りにくい。",
            "en": "tadashi, on rain dake de wa tomodachi o tsukurinikui. -- However, it is hard to make friends with online classes alone."
          },
          {
            "es": "そこで、週に一回は教室で会うことにすればよいだろう。",
            "en": "soko de, shuu ni ichi kai wa kyoushitsu de au koto ni sureba yoidarou. -- So it would be good to meet in the classroom once a week."
          },
          {
            "es": "これは便利というより、新しい学び方だと言える。",
            "en": "kore wa benri to iu yori, atarashii manabikata da to ieru. -- This is not so much convenient as a new way of learning."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "What does the writer argue?",
            "options": [
              "Universities should close",
              "All classes should be in classrooms",
              "Students should skip class",
              "University classes should be more online"
            ],
            "correctIndex": 3,
            "explanation": "The writer supports more online classes."
          },
          {
            "type": "multiple-choice",
            "question": "Why can't all classes be held in classrooms?",
            "options": [
              "Because of the law",
              "Because teachers refuse",
              "Because of the cost of buildings",
              "Because of students' daily lives"
            ],
            "correctIndex": 3,
            "explanation": "Students' lives are the reason given."
          },
          {
            "type": "multiple-choice",
            "question": "What compromise does the writer suggest?",
            "options": [
              "Meeting every day",
              "Meeting once a month",
              "Never meeting",
              "Meeting in a classroom once a week"
            ],
            "correctIndex": 3,
            "explanation": "The writer suggests one classroom day a week."
          }
        ]
      },
      {
        "heading": "Core Kanji",
        "body": [
          "These eight kanji anchor this lesson's vocabulary. For each one you see its on'yomi (Chinese-derived) and kun'yomi (native Japanese) readings, its core meanings, and a word that uses it. Learn them through the words, not in isolation.",
          "Readings are written in romaji. A dot in a kun'yomi reading marks where the kana ending of the word begins, and a dash means the reading does not apply."
        ],
        "examples": [
          {
            "es": "意",
            "en": "i -- idea, mind, heart. E.g. 意味 (imi): meaning; significance."
          },
          {
            "es": "考",
            "en": "kou; kanga.eru, kanga.e -- consider, think over. E.g. 考え (kangae): thinking; thought; idea."
          },
          {
            "es": "反",
            "en": "han, hon; so.ru, so.rasu -- anti-. E.g. 違反 (ihan): violation; offense."
          },
          {
            "es": "対",
            "en": "tai, tsui; aite, kota.eru -- vis-a-vis, opposite, even. E.g. 対応 (taiou): correspondence; equivalence; suitability."
          },
          {
            "es": "権",
            "en": "ken, gon; omori, kari -- authority, power, rights. E.g. 政権 (seiken): administration; political power."
          },
          {
            "es": "選",
            "en": "sen; era.bu, e.ru -- elect, select, choose. E.g. 選手 (senshu): player; athlete."
          },
          {
            "es": "支",
            "en": "shi; sasa.eru, tsuka.eru -- branch, support, sustain. E.g. 支持 (shiji): support; backing."
          },
          {
            "es": "判",
            "en": "han, ban; waka.ru -- judgement, signature, stamp. E.g. 判断 (handan): judgment; judgement; divination."
          }
        ]
      },
      {
        "heading": "Kanji for Your Review Deck",
        "body": [
          "The other 24 kanji of this unit come through your daily review deck. Skim them here so they look familiar, then let spaced review do the work."
        ],
        "examples": [
          {
            "es": "性",
            "en": "sei, shou; saga -- sex, gender, nature. E.g. 可能性 (kanousei): potentiality; likelihood."
          },
          {
            "es": "指",
            "en": "shi; yubi, sa.su -- finger, point to, indicate. E.g. 指導 (shidou): guidance; leadership; shido."
          },
          {
            "es": "活",
            "en": "katsu; i.kiru, i.kasu -- lively, resuscitation, being helped. E.g. 活動 (katsudou): activity; action; movie."
          },
          {
            "es": "解",
            "en": "kai, ge; to.ku, to.kasu -- unravel, notes, key. E.g. 解決 (kaiketsu): settlement; solution."
          },
          {
            "es": "向",
            "en": "kou; mu.ku, mu.i -- yonder, facing, beyond. E.g. 方向 (houkou): direction; orientation; course."
          },
          {
            "es": "勝",
            "en": "shou; ka.tsu, ga.chi -- victory, win, prevail. E.g. 優勝 (yuushou): overall victory; championship."
          },
          {
            "es": "投",
            "en": "tou; na.geru, na.ge -- throw, discard, abandon. E.g. 投資 (toushi): investment."
          },
          {
            "es": "打",
            "en": "da, daasu; u.tsu, u.chi -- strike, hit, knock. E.g. 打線 (dasen): batting lineup."
          },
          {
            "es": "演",
            "en": "en -- performance, act, play. E.g. 演説 (enzetsu): speech; address."
          },
          {
            "es": "無",
            "en": "mu, bu; na.i -- nothingness, none, ain't. E.g. 間も無く (mamonaku): soon; shortly; having no time to ...."
          },
          {
            "es": "置",
            "en": "chi; o.ku, o.ki -- placement, put, set. E.g. 設置 (setchi): establishment; institution; installation."
          },
          {
            "es": "流",
            "en": "ryuu, ru; naga.reru, naga.re -- current, a sink, flow. E.g. 交流 (kouryuu): exchange; interchange; alternating current."
          },
          {
            "es": "球",
            "en": "kyuu; tama -- ball, sphere. E.g. 地球 (chikyuu): Earth; the globe."
          },
          {
            "es": "構",
            "en": "kou; kama.eru, kama.u -- posture, build, pretend. E.g. 機構 (kikou): mechanism; organization."
          },
          {
            "es": "身",
            "en": "shin; mi -- somebody, person, one's station in life. E.g. 身 (mi): body; oneself."
          },
          {
            "es": "夫",
            "en": "fu, fuu; otto, sore -- husband, man. E.g. 夫 (otto): husband."
          },
          {
            "es": "石",
            "en": "seki, shaku; ishi -- stone. E.g. 石 (koku): koku."
          },
          {
            "es": "神",
            "en": "shin, jin; kami, kan -- gods, mind, soul. E.g. 神 (kami): god; deity; incredible."
          },
          {
            "es": "念",
            "en": "nen -- wish, sense, idea. E.g. 記念 (kinen): commemoration; celebration."
          },
          {
            "es": "然",
            "en": "zen, nen; shika, shika.ri -- sort of thing, so, if so. E.g. 自然 (shizen): nature; natural."
          },
          {
            "es": "張",
            "en": "chou; ha.ru, ha.ri -- lengthen, counter for bows & stringed instruments, stretch. E.g. 主張 (shuchou): claim; insistence."
          },
          {
            "es": "葉",
            "en": "you; ha -- leaf, plane, lobe. E.g. 言葉 (kotoba): language; dialect; word."
          },
          {
            "es": "落",
            "en": "raku; o.chiru, o.chi -- fall, drop, come down. E.g. 下落 (geraku): depreciation; decline."
          },
          {
            "es": "福",
            "en": "fuku -- blessing, fortune, luck. E.g. 福 (fuku): good fortune; happiness."
          }
        ]
      },
      {
        "heading": "Key Vocabulary",
        "body": [
          "These words come from this lesson's dialogue and reading, plus other common words built from the unit's kanji. The full 200-word list for this unit is in the data files that ship with the module."
        ],
        "examples": [
          {
            "es": "考え",
            "en": "kangae -- thinking; thought; idea"
          },
          {
            "es": "生活",
            "en": "seikatsu -- living; life"
          },
          {
            "es": "考える",
            "en": "kangaeru -- to think; to think over; to consider"
          },
          {
            "es": "意味",
            "en": "imi -- meaning; significance"
          },
          {
            "es": "違反",
            "en": "ihan -- violation; offense"
          },
          {
            "es": "解決",
            "en": "kaiketsu -- settlement; solution"
          },
          {
            "es": "活動",
            "en": "katsudou -- activity; action; movie"
          },
          {
            "es": "機構",
            "en": "kikou -- mechanism; organization"
          },
          {
            "es": "言葉",
            "en": "kotoba -- language; dialect; word"
          },
          {
            "es": "交流",
            "en": "kouryuu -- exchange; interchange; alternating current"
          },
          {
            "es": "構造",
            "en": "kouzou -- structure; construction"
          },
          {
            "es": "指導",
            "en": "shidou -- guidance; leadership; shido"
          },
          {
            "es": "支持",
            "en": "shiji -- support; backing"
          },
          {
            "es": "自然",
            "en": "shizen -- nature; natural"
          },
          {
            "es": "政権",
            "en": "seiken -- administration; political power"
          },
          {
            "es": "選手",
            "en": "senshu -- player; athlete"
          },
          {
            "es": "対応",
            "en": "taiou -- correspondence; equivalence; suitability"
          },
          {
            "es": "地球",
            "en": "chikyuu -- Earth; the globe"
          },
          {
            "es": "投資",
            "en": "toushi -- investment"
          },
          {
            "es": "判断",
            "en": "handan -- judgment; judgement; divination"
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "What is the reading of 解体?",
            "options": [
              "ざんねん",
              "だかい",
              "こうそう",
              "かいたい"
            ],
            "correctIndex": 3,
            "explanation": "解体 is read かいたい (demolition; taking down; dissolution)."
          },
          {
            "type": "multiple-choice",
            "question": "What is the reading of 球団?",
            "options": [
              "きゅうだん",
              "へんかきゅう",
              "げんたん",
              "りゅうどう"
            ],
            "correctIndex": 0,
            "explanation": "球団 is read きゅうだん (baseball team)."
          }
        ]
      },
      {
        "heading": "Speak About It",
        "body": [
          "Use these prompts for your 30-minute chat with a native speaker, or answer them aloud on your own in full sentences that use this lesson's patterns.",
          "Writing challenge: Write a 500-character opinion piece with a reason and a counterpoint."
        ],
        "examples": [
          {
            "es": "学校や会社で、変えるべきだと思うルールはありますか。",
            "en": "gakkou ya kaisha de, kaerubekida to omou ruuru wa arimasu ka. -- Are there rules at your school or company that you think should be changed?"
          },
          {
            "es": "「それは、便利というより、大変だ」と思うことはありますか。",
            "en": "\"sore wa, benri to iu yori, taihen da\" to omou koto wa arimasu ka. -- Is there something you think is \"less convenient than troublesome\"?"
          },
          {
            "es": "小学生にスマートフォンを持たせるべきですか。賛成か反対か、理由を言ってください。",
            "en": "shougakusei ni sumaato fon o motaserubeki desu ka. sansei ka hantai ka, riyuu o itte kudasai. -- Should elementary students be given smartphones? Say whether you agree or disagree, and why."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "ここでは、靴を脱ぐ（　）。 (There is no need to take off your shoes here.)",
        "options": [
          "に違いありません",
          "ことはありません",
          "わけにはいきません",
          "べきです"
        ],
        "correctIndex": 1,
        "explanation": "There is no need to: ～ことはない."
      },
      {
        "type": "multiple-choice",
        "question": "What does 制球 (せいきゅう) mean?",
        "options": [
          "arrangement; deployment",
          "business trip; official trip",
          "control",
          "to drain; to pour; to wash away"
        ],
        "correctIndex": 2,
        "explanation": "制球 (せいきゅう) means control."
      },
      {
        "type": "multiple-choice",
        "question": "What does 意図 (いと) mean?",
        "options": [
          "intention; aim",
          "agreement; consent; same opinion",
          "branch office",
          "gender; distinction of sex"
        ],
        "correctIndex": 0,
        "explanation": "意図 (いと) means intention; aim."
      },
      {
        "type": "multiple-choice",
        "question": "Passage: 私は、全部禁止するというより、ルールを作るほうがいいと思います。 — What does the speaker prefer?",
        "options": [
          "Making rules rather than banning everything",
          "Letting everyone decide",
          "Doing nothing",
          "Banning everything"
        ],
        "correctIndex": 0,
        "explanation": "というより sets up the preferred option."
      },
      {
        "type": "multiple-choice",
        "question": "Passage: あの二人は、顔がそっくりです。兄弟に違いありません。 — What does the speaker conclude?",
        "options": [
          "The two must be brothers",
          "The two are teachers",
          "The two are strangers",
          "The two are twins by chance"
        ],
        "correctIndex": 0,
        "explanation": "に違いありません is a strong conclusion."
      },
      {
        "type": "matching",
        "instructions": "Match each word with its English meaning.",
        "pairs": [
          {
            "left": "誤解",
            "right": "misunderstanding"
          },
          {
            "left": "可能性",
            "right": "potentiality"
          },
          {
            "left": "構成",
            "right": "composition"
          },
          {
            "left": "違反",
            "right": "violation"
          },
          {
            "left": "活動",
            "right": "activity"
          }
        ],
        "explanation": "These words all belong to this unit's vocabulary. Check any you missed against the Key Vocabulary and Core Kanji sections."
      },
      {
        "type": "matching",
        "instructions": "Match each word with its reading.",
        "pairs": [
          {
            "left": "指数",
            "right": "しすう"
          },
          {
            "left": "前身",
            "right": "ぜんしん"
          },
          {
            "left": "上演",
            "right": "じょうえん"
          },
          {
            "left": "違反",
            "right": "いはん"
          },
          {
            "left": "演説",
            "right": "えんぜつ"
          }
        ],
        "explanation": "Reading a kanji word correctly is what lets the vocabulary stick, so say each word aloud once you have the match."
      },
      {
        "type": "matching",
        "instructions": "Match each pattern with its meaning.",
        "pairs": [
          {
            "left": "～べきだ",
            "right": "Should, as a matter of principle"
          },
          {
            "left": "～ことはない",
            "right": "There is no need to"
          },
          {
            "left": "～わけにはいかない",
            "right": "Cannot, for practical or moral reasons"
          },
          {
            "left": "～というより",
            "right": "Rather than saying X, it is closer to Y"
          },
          {
            "left": "～に違いない",
            "right": "Must be, a strong conclusion"
          }
        ],
        "explanation": "Each pattern in this lesson has a distinct job. If any pair was hard, reread that pattern's section and its examples."
      }
    ]
  },
  {
    "slug": "consolidation-and-capstone",
    "level": "JA-B1",
    "number": 12,
    "title": "Consolidation and Capstone",
    "summary": "Combine patterns from all twelve units in a capstone reading and talk, and add ものだ, たものだ, ばかり, っぱなし and ついでに.",
    "duration": "45 min",
    "sections": [
      {
        "heading": "What This Lesson Covers",
        "body": [
          "Combine patterns from all twelve units in a capstone reading and talk, and add ものだ, たものだ, ばかり, っぱなし and ついでに.",
          "By the end of this lesson you will be able to: (1) Use patterns from all 12 units together in a connected essay and a spoken talk.  (2) Describe past habits, general truths and small regrets naturally.  (3) Show B1 ability on the final exam.",
          "Every lesson in this module follows the same path: a short dialogue that uses the patterns, one section per pattern with a quick check, a section on choosing between the patterns, a reading passage, and then the kanji and vocabulary that go with the unit."
        ]
      },
      {
        "heading": "Dialogue: Consolidation and Capstone",
        "body": [
          "Read the conversation once for the gist, then again line by line. Each line comes with romaji and an English gloss. Watch for the patterns in this lesson as they appear in natural speech; the sections that follow take them one at a time."
        ],
        "examples": [
          {
            "es": "田中：リーさん、日本に来て、もう一年ですね。",
            "en": "Tanaka: Lee-san, nihon ni kite, mou ichi nen desu ne. -- Tanaka: Lee, it's already been a year since you came to Japan."
          },
          {
            "es": "リー：ええ。最初は、コンビニの弁当ばかり食べていました。",
            "en": "Lee: ee. saisho wa, konbini no bento bakari tabete imashita. -- Lee: Yes. At first I ate nothing but convenience-store lunches."
          },
          {
            "es": "田中：私も、若いころは、よくそうしたものですよ。",
            "en": "Tanaka: watashi mo, wakai koro wa, yoku sou shita mono desu yo. -- Tanaka: I used to do that a lot when I was young, too."
          },
          {
            "es": "リー：今は、買い物に行くついでに、野菜も買うようにしています。",
            "en": "Lee: ima wa, kaimono ni iku tsuide ni, yasai mo kau you ni shite imasu. -- Lee: Now I make a point of buying vegetables too when I go shopping."
          }
        ]
      },
      {
        "heading": "～ものだ: A general truth or feeling",
        "body": [
          "Core idea: A general truth or feeling.",
          "How to build it: Plain form + ものだ.",
          "It states a general truth or a feeling about how things are: 若いころは無理をするものです. It can also express nostalgia or admiration."
        ],
        "examples": [
          {
            "es": "若いころは、無理をしてしまうものです。",
            "en": "wakai koro wa, muri o shite shimau mono desu. -- When you are young, you tend to overdo it."
          },
          {
            "es": "人は、失敗から学ぶものです。",
            "en": "hito wa, shippai kara manabu mono desu. -- People learn from their failures."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "若いころは、無理をしてしまう（　）。 (When you are young, you tend to overdo it.)",
            "options": [
              "ものです",
              "ばかりに",
              "っぱなしです",
              "ついでです"
            ],
            "correctIndex": 0,
            "explanation": "～ものだ states a general truth."
          }
        ]
      },
      {
        "heading": "～たものだ: Nostalgia",
        "body": [
          "Core idea: Nostalgia: used to.",
          "How to build it: た-form + ものだ.",
          "It recalls a past habit with nostalgia, like 'used to.' 子どものころ、よくこの川で遊んだものです. The habit no longer continues."
        ],
        "examples": [
          {
            "es": "子どものころ、よくこの川で遊んだものです。",
            "en": "kodomo no koro, yoku kono kawa de asonda mono desu. -- As a child, I used to play in this river a lot."
          },
          {
            "es": "学生のころは、よく夜遅くまで話したものです。",
            "en": "gakusei no koro wa, yoku yoru osoku made hanashita mono desu. -- When I was a student, we often talked until late at night."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "子どものころ、よくこの川で（　）。 (As a child, I used to play in this river a lot.)",
            "options": [
              "遊ぶものです",
              "遊んだものです",
              "遊んだついでです",
              "遊びっぱなしです"
            ],
            "correctIndex": 1,
            "explanation": "～たものだ looks back on a past habit."
          }
        ]
      },
      {
        "heading": "～ばかり: Only, or doing the same thing again and again",
        "body": [
          "Core idea: Only, or doing the same thing again and again.",
          "How to build it: Noun + ばかり; て-form + ばかりいる.",
          "It means 'only' or 'nothing but,' with the sense of too much: 弁当ばかり食べている. It often expresses a complaint, unlike だけ, which is neutral."
        ],
        "examples": [
          {
            "es": "最近、コンビニの弁当ばかり食べています。",
            "en": "saikin, konbini no bento bakari tabete imasu. -- Lately I eat nothing but convenience-store lunches."
          },
          {
            "es": "弟は、ゲームばかりしています。",
            "en": "otou to wa, geemu bakari shite imasu. -- My younger brother does nothing but play games."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "最近、コンビニの弁当（　）食べています。 (Lately I eat nothing but convenience-store lunches.)",
            "options": [
              "っぱなし",
              "ついでに",
              "ばかり",
              "たものだ"
            ],
            "correctIndex": 2,
            "explanation": "ばかり means only or too much of the same thing."
          }
        ]
      },
      {
        "heading": "～っぱなし: Left in a state",
        "body": [
          "Core idea: Left in a state.",
          "How to build it: Verb stem + っぱなし.",
          "It means leaving something in a state it should not stay in: 開けっぱなし, つけっぱなし. It usually carries mild criticism of the neglect."
        ],
        "examples": [
          {
            "es": "窓を開けっぱなしにして、出かけてしまいました。",
            "en": "mado o akeppanashi ni shite, dekakete shimaimashita. -- I left the window open and went out."
          },
          {
            "es": "電気をつけっぱなしにして、寝てしまいました。",
            "en": "denki o tsukeppanashi ni shite, nete shimaimashita. -- I fell asleep with the light left on."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "窓を開け（　）にして、出かけてしまいました。 (I left the window open and went out.)",
            "options": [
              "もの",
              "ばかり",
              "っぱなし",
              "ついで"
            ],
            "correctIndex": 2,
            "explanation": "～っぱなし means left in a state."
          }
        ]
      },
      {
        "heading": "～ついでに: While at it",
        "body": [
          "Core idea: While at it.",
          "How to build it: Dictionary form, or noun + の, + ついでに.",
          "It means 'while at it': doing a second, minor thing during a trip made for another reason. 駅に行くついでに手紙を出す."
        ],
        "examples": [
          {
            "es": "駅に行くついでに、この手紙を出してきてくれませんか。",
            "en": "eki ni iku tsuide ni, kono tegami o dashite kite kuremasen ka. -- Since you are going to the station anyway, could you mail this letter?"
          },
          {
            "es": "買い物のついでに、パンも買ってきます。",
            "en": "kaimono no tsuide ni, pan mo katte kimasu. -- While I am shopping, I will buy some bread too."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "駅に行く（　）、この手紙を出してきてくれませんか。 (Since you are going to the station anyway, could you mail this letter?)",
            "options": [
              "ばかりに",
              "っぱなしに",
              "ものに",
              "ついでに"
            ],
            "correctIndex": 3,
            "explanation": "～ついでに means while at it."
          }
        ]
      },
      {
        "heading": "Choosing Between the Patterns",
        "body": [
          "The main contrast is ばかり against だけ. ばかり suggests too much of the same thing, often with a note of complaint, while だけ is neutral. ～ものだ states a general feeling, and ～たものだ looks back on a habit that no longer exists."
        ],
        "examples": [
          {
            "es": "私は昨日、宿題をしただけで、遊びませんでした。",
            "en": "watashi wa kinou, shukudai o shita dake de, asobimasen deshita. -- Yesterday I only did homework and did not play (neutral)."
          }
        ]
      },
      {
        "heading": "Reading Practice",
        "body": [
          "Read the passage once without stopping (195 characters), then again slowly, checking each sentence against its gloss. Try to spot which pattern from this lesson is behind each sentence before you answer the questions."
        ],
        "examples": [
          {
            "es": "日本に来て一年がたった。",
            "en": "nihon ni kite ichi nen ga tatta. -- It has been a year since I came to Japan."
          },
          {
            "es": "最初は、日本語が全然わからなくて、コンビニの弁当ばかり食べていた。",
            "en": "saisho wa, nihongo ga zenzen wakaranakute, konbini no bento bakari tabete ita. -- At first I understood no Japanese at all and ate nothing but convenience-store lunches."
          },
          {
            "es": "電話に出ることもできなかったし、窓を開けっぱなしにして出かけてしまったこともある。",
            "en": "denwa ni deru koto mo dekinakattashi, mado o akeppanashi ni shite dekakete shimatta koto mo aru. -- I could not even answer the phone, and there were times I went out leaving the window open."
          },
          {
            "es": "しかし、毎日少しずつ勉強したおかげで、今では簡単な会話ができるようになった。",
            "en": "shikashi, mainichi sukoshi zutsu benkyou shita okage de, ima de wa kantan na kaiwa ga dekiru you ni natta. -- But thanks to studying a little every day, I can now hold simple conversations."
          },
          {
            "es": "留学した友達の話によると、外国語は、続ければ続けるほど楽しくなるものだそうだ。",
            "en": "ryuugaku shita tomodachi no hanashi ni yoru to, gaikoku go wa, tsuzukereba tsuzukeru hodo tanoshiku naru mono da sou da. -- According to a friend who studied abroad, a foreign language is something that gets more fun the more you keep at it."
          },
          {
            "es": "私も、そう感じている。",
            "en": "watashi mo, sou kanjite iru. -- I feel the same way."
          },
          {
            "es": "来年は、日本語で一人で旅行することにした。",
            "en": "rainen wa, nihongo de hitori de ryokou suru koto ni shita. -- Next year, I have decided to travel alone in Japanese."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "How long has the writer been in Japan?",
            "options": [
              "One year",
              "Ten years",
              "Three years",
              "Six months"
            ],
            "correctIndex": 0,
            "explanation": "The text opens with one year."
          },
          {
            "type": "multiple-choice",
            "question": "What did the writer mostly eat at first?",
            "options": [
              "Fast food",
              "Home-cooked meals",
              "Convenience-store lunches",
              "Restaurant dinners"
            ],
            "correctIndex": 2,
            "explanation": "The writer ate mostly convenience-store lunches."
          },
          {
            "type": "multiple-choice",
            "question": "What has the writer decided to do next year?",
            "options": [
              "Study English",
              "Travel alone in Japan in Japanese",
              "Return home",
              "Change jobs"
            ],
            "correctIndex": 1,
            "explanation": "The plan is to travel alone in Japanese."
          }
        ]
      },
      {
        "heading": "Patterns from Earlier Units",
        "body": [
          "This lesson adds no new kanji or vocabulary. Instead, use the reading and the review deck to bring back patterns from the whole level. As you read, name the unit each pattern came from.",
          "Unit 1, Changes and Decisions: ～ようになる、～ようにする、～ことにする、～ことになる、～ことになっている",
          "Unit 2, News, Hearsay and Impressions: ～そうだ (appearance)、～そうだ (hearsay)、～らしい、～ようだ・～みたい、～はずだ",
          "Unit 3, Favors and Requests: ～てあげる・～てくれる・～てもらう、～ていただく・～てくださる、～てほしい、～ておく、～てしまう",
          "Unit 4, Passive and Causative: School and Work: Direct passive、Indirect passive、Causative (～させる)、Causative-passive (～させられる)、～(さ)せてください",
          "Unit 5, Timing and Schedules: ～ところだ、～たばかりだ、～うちに、～間に、～たびに",
          "Unit 6, Reasons, Causes and Purposes: ～せいで、～おかげで、～ために、～ように (purpose)、～のに",
          "Unit 7, Advice and Conditions: ～たら vs ～と、～ば vs ～なら、～ば～ほど、～わけだ、～わけがない・～わけではない",
          "Unit 8, Comparing and Degree: ～ほど、～くらい・～ぐらい、～にとって、～に対して、～によって",
          "Unit 9, Polite Service Japanese (Keigo I): Honorific special verbs、お・ご～になる、Humble special verbs、お・ご～する、～でございます・～と申します",
          "Unit 10, Formal Writing and News: ～によると、～ということだ、～として、～に関して、～につれて",
          "Unit 11, Opinions and Debate: ～べきだ、～ことはない、～わけにはいかない、～というより、～に違いない"
        ]
      },
      {
        "heading": "Speak About It",
        "body": [
          "Use these prompts for your 30-minute chat with a native speaker, or answer them aloud on your own in full sentences that use this lesson's patterns.",
          "Writing challenge: Write a 500-character capstone essay on a topic of your choice, using at least six patterns from across the level."
        ],
        "examples": [
          {
            "es": "一年前と今で、変わったことは何ですか。",
            "en": "ichi nen mae to ima de, kawatta koto wa nan desu ka. -- What has changed between a year ago and now?"
          },
          {
            "es": "子どものころ、よくしたことを教えてください。",
            "en": "kodomo no koro, yoku shita koto o oshiete kudasai. -- Tell me about something you often did as a child."
          },
          {
            "es": "これから、どんなことをしたいですか。理由も教えてください。",
            "en": "kore kara, donna koto o shitai desu ka. riyuu mo oshiete kudasai. -- What do you want to do from now on? Please tell me the reason too."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "私は昨日、宿題を（　）、遊びませんでした。 (Yesterday I only did homework and did not play (neutral).)",
        "options": [
          "したものの",
          "したっぱなしで",
          "したばかりで",
          "しただけで"
        ],
        "correctIndex": 3,
        "explanation": "だけ is neutral, while ばかり suggests too much."
      },
      {
        "type": "multiple-choice",
        "question": "What is the reading of 心配?",
        "options": [
          "しんぱい",
          "ゆうぼう",
          "たよる",
          "ちょくぜん"
        ],
        "correctIndex": 0,
        "explanation": "心配 is read しんぱい (worry; concern; care)."
      },
      {
        "type": "multiple-choice",
        "question": "What is the reading of 気負い?",
        "options": [
          "すうち",
          "にっき",
          "きおい",
          "かんさつ"
        ],
        "correctIndex": 2,
        "explanation": "気負い is read きおい (eagerness; enthusiasm)."
      },
      {
        "type": "multiple-choice",
        "question": "What does 速球 (そっきゅう) mean?",
        "options": [
          "fastball",
          "tactics; strategy; military operation",
          "receiver",
          "scoring; score"
        ],
        "correctIndex": 0,
        "explanation": "速球 (そっきゅう) means fastball."
      },
      {
        "type": "multiple-choice",
        "question": "What does 課題 (かだい) mean?",
        "options": [
          "shamisen; samisen",
          "subject; theme; homework",
          "preservation; integrity",
          "number; series of digits"
        ],
        "correctIndex": 1,
        "explanation": "課題 (かだい) means subject; theme; homework."
      },
      {
        "type": "multiple-choice",
        "question": "Passage: 子どものころ、よくこの公園で遊んだものです。今は、忙しくて、なかなか来られません。 — What does the speaker say about their childhood?",
        "options": [
          "They often played in this park",
          "They lived near the sea",
          "They never came here",
          "They studied here"
        ],
        "correctIndex": 0,
        "explanation": "たものです looks back on a habit."
      },
      {
        "type": "multiple-choice",
        "question": "Passage: 最近、コンビニの弁当ばかり食べているので、野菜も食べるようにしています。 — What has the speaker been eating lately?",
        "options": [
          "Restaurant meals",
          "Only rice",
          "Only vegetables",
          "Mostly convenience-store lunches"
        ],
        "correctIndex": 3,
        "explanation": "ばかり means mostly the same thing."
      },
      {
        "type": "matching",
        "instructions": "Match each word with its English meaning.",
        "pairs": [
          {
            "left": "市役所",
            "right": "municipal office"
          },
          {
            "left": "知り合い",
            "right": "acquaintance"
          },
          {
            "left": "字形",
            "right": "character style"
          },
          {
            "left": "難問",
            "right": "perplexity"
          },
          {
            "left": "採点",
            "right": "marking"
          }
        ],
        "explanation": "These words all belong to this unit's vocabulary. Check any you missed against the Key Vocabulary and Core Kanji sections."
      },
      {
        "type": "matching",
        "instructions": "Match each word with its reading.",
        "pairs": [
          {
            "left": "家宅",
            "right": "かたく"
          },
          {
            "left": "親近感",
            "right": "しんきんかん"
          },
          {
            "left": "備わる",
            "right": "そなわる"
          },
          {
            "left": "予知",
            "right": "よち"
          },
          {
            "left": "身分",
            "right": "みぶん"
          }
        ],
        "explanation": "Reading a kanji word correctly is what lets the vocabulary stick, so say each word aloud once you have the match."
      },
      {
        "type": "matching",
        "instructions": "Match each pattern with its meaning.",
        "pairs": [
          {
            "left": "～ものだ",
            "right": "A general truth or feeling"
          },
          {
            "left": "～たものだ",
            "right": "Nostalgia: used to"
          },
          {
            "left": "～ばかり",
            "right": "Only, or doing the same thing again and again"
          },
          {
            "left": "～っぱなし",
            "right": "Left in a state"
          },
          {
            "left": "～ついでに",
            "right": "While at it"
          }
        ],
        "explanation": "Each pattern in this lesson has a distinct job. If any pair was hard, reread that pattern's section and its examples."
      }
    ]
  }
];
