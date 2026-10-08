// Chinese track, pre-A1 module: Pinyin & Tones.
// How Mandarin sounds and how pinyin writes it -- the tool every later
// lesson uses to show pronunciation. A handful of first characters come
// along for the ride. See README.md for conventions.

import { ex, fb, lesson, listen, mc, ms, mt, numbered, say, sec, wo } from "./authoring";

const P = "ZH-Pinyin" as const;

export const ZH_PINYIN_LESSONS = numbered([
  lesson(
    P,
    "zh-how-chinese-works",
    "How Chinese Works: Characters, Syllables and Pinyin",
    "What you're actually learning: one spoken language (Mandarin), written in characters, with pinyin as the pronunciation guide.",
    "7 min",
    [
      sec(
        "Mandarin, characters and pinyin",
        [
          "\"Chinese\" here means Mandarin (普通话, pǔtōnghuà, \"the common speech\"), the national standard of mainland China and Taiwan and the most widely spoken first language on Earth.",
          "Mandarin is written in characters (汉字, hànzì). Each character is one syllable and usually carries a meaning of its own: 人 (rén) is \"person,\" 大 (dà) is \"big.\" Most words are one or two characters long: 中国 (Zhōngguó) is \"China,\" literally \"middle country.\"",
          "Characters don't spell out their sound, so learners (and Chinese schoolchildren) use pinyin: the official way of writing Mandarin sounds in the Latin alphabet. Pinyin is a pronunciation guide, not a replacement for characters -- but it's how you'll read every new word in this course before you know its character, and how you can type Chinese on any phone or computer.",
        ],
        [ex("人", "rén", "person"), ex("大", "dà", "big"), ex("中国", "Zhōngguó", "China (\"middle country\")")],
        [
          mc(
            "What does one Chinese character usually stand for?",
            ["One syllable, usually with a meaning of its own", "One letter of an alphabet", "A whole sentence", "A sound with no meaning, like a letter"],
            0,
            "Each character is one spoken syllable and normally carries meaning: 人 (rén) is \"person.\""
          ),
        ]
      ),
      sec(
        "The parts of a syllable",
        [
          "Every Mandarin syllable has up to three parts: an initial (the consonant at the start), a final (the vowel part, sometimes ending in -n or -ng), and a tone (the pitch the whole syllable is said with).",
          "Take 妈 (mā, \"mom\"): the initial is m, the final is a, and the tone mark ¯ says to hold a high, level pitch. Some syllables have no initial at all, like 爱 (ài, \"love\").",
          "Mandarin has only about 400 distinct syllables before tones -- far fewer than English. Tones multiply them, which is why they matter so much: mā (mom) and mà (to scold) are different words.",
        ],
        [ex("妈", "mā", "mom -- initial m, final a, first tone"), ex("爱", "ài", "love -- no initial, final ai, fourth tone")],
        [
          mt(
            "Match each part of the syllable mā to what it is.",
            [
              ["m", "Initial"],
              ["a", "Final"],
              ["¯ (the mark over a)", "Tone"],
            ],
            "Initial + final + tone: that's every Mandarin syllable."
          ),
        ]
      ),
      sec(
        "Simplified characters",
        [
          "This course uses simplified characters, the standard in mainland China and Singapore. Taiwan and Hong Kong use traditional characters, which keep older, more complex forms: 马 (mǎ, \"horse\") is 馬 in traditional.",
          "The spoken language is the same either way, and pinyin is identical. Once you know simplified characters, traditional ones are very learnable later.",
        ],
        [ex("马", "mǎ", "horse (traditional: 馬)")]
      ),
    ],
    [
      mc("What is pinyin?", ["The Latin-alphabet spelling of Mandarin sounds", "A simpler kind of Chinese character", "A Chinese dialect", "The traditional writing system"], 0, "Pinyin writes how Mandarin sounds using Latin letters; it's a guide, not a replacement for characters."),
      ms(
        "Which are parts of every Mandarin syllable's description? (Choose all that apply.)",
        ["A final (the vowel part)", "A tone", "A silent letter", "An ending showing tense"],
        [0, 1],
        "Syllables are an optional initial, a final and a tone. Chinese verbs don't change form for tense."
      ),
      mc("中国 (Zhōngguó) means \"China.\" How many syllables does it have?", ["Two", "One", "Three", "Four"], 0, "Two characters, two syllables: Zhōng + guó."),
      mt(
        "Match the character to its meaning.",
        [
          ["人 (rén)", "person"],
          ["大 (dà)", "big"],
          ["马 (mǎ)", "horse"],
          ["妈 (mā)", "mom"],
        ],
        "Your first four characters -- each one syllable, each with its own meaning."
      ),
      mc("Why do tones matter so much in Mandarin?", ["Words that differ only in tone are different words", "They only show emotion", "They're optional decoration", "They show whether a word is a noun or a verb"], 0, "mā (mom) and mà (to scold) differ only in tone, and they're different words."),
      mc("Which writing standard does this course use?", ["Simplified characters", "Traditional characters", "Pinyin only, no characters", "Japanese kanji"], 0, "Simplified characters, as used in mainland China and Singapore."),
      say("你好", "你好 (nǐ hǎo) is \"hello.\" You'll learn why it's pronounced ní hǎo in the tone-change lesson.", "Say it smoothly, like one word."),
    ],
    { teaches: ["sound.syllables"] }
  ),

  lesson(
    P,
    "zh-four-tones",
    "The Four Tones and the Neutral Tone",
    "Mandarin's four tones plus the light neutral tone: what each one sounds like and how pinyin marks it.",
    "8 min",
    [
      sec(
        "Four pitch shapes",
        [
          "First tone (ā): high and level, like holding a note -- 妈 (mā, mom).",
          "Second tone (á): rising, like the English \"what?\" -- 麻 (má, hemp; numb).",
          "Third tone (ǎ): low, dipping down (and, said on its own, coming back up a little) -- 马 (mǎ, horse).",
          "Fourth tone (à): sharp and falling, like a firm \"No!\" -- 骂 (mà, to scold).",
          "Tones are often written as numbers when typing without marks: ma1, ma2, ma3, ma4. The mark goes over a vowel: ā á ǎ à.",
        ],
        [ex("妈", "mā", "mom -- 1st tone, high and level"), ex("麻", "má", "numb; hemp -- 2nd tone, rising"), ex("马", "mǎ", "horse -- 3rd tone, low dip"), ex("骂", "mà", "to scold -- 4th tone, falling")],
        [
          mt(
            "Match each tone to its description.",
            [
              ["1st tone (ā)", "High and level"],
              ["2nd tone (á)", "Rising"],
              ["3rd tone (ǎ)", "Low and dipping"],
              ["4th tone (à)", "Sharp and falling"],
            ],
            "Level, rising, dipping, falling."
          ),
          listen("马", "Which syllable did you hear?", ["mǎ", "mā", "má", "mà"], 0, "马 (mǎ, horse) -- low and dipping, the third tone."),
        ]
      ),
      sec(
        "The neutral tone",
        [
          "Some syllables are said short and light with no tone of their own. Pinyin leaves them unmarked: the question word 吗 (ma) at the end of a sentence, or the second syllable of 妈妈 (māma, mom).",
          "The neutral tone takes its pitch from the syllable before it, so don't stress it -- just let it fall off lightly.",
        ],
        [ex("妈妈", "māma", "mom"), ex("吗", "ma", "question particle -- neutral tone, unmarked")],
        [mc("How does pinyin show the neutral tone?", ["No tone mark at all", "A dot over the vowel", "The number 5 mark ˚", "A double accent"], 0, "Neutral-tone syllables are simply left unmarked (or written with 5 or 0 when typing numbers).")]
      ),
      sec(
        "Same sounds, different words",
        [
          "Changing only the tone changes the word. 买 (mǎi) is \"to buy\" and 卖 (mài) is \"to sell\" -- a tone apart, and the opposite meaning.",
          "Practise each new word with its tone from the start. Learning \"mai\" and adding the tone later is much harder than learning mǎi from day one.",
        ],
        [ex("买", "mǎi", "to buy"), ex("卖", "mài", "to sell")],
        [listen("卖", "Buy or sell? Listen to the tone.", ["mài -- to sell", "mǎi -- to buy"], 0, "The sharp fall is fourth tone: 卖 (mài), to sell.")]
      ),
    ],
    [
      listen("妈", "Which tone did you hear?", ["1st -- high and level", "2nd -- rising", "3rd -- low dip", "4th -- falling"], 0, "妈 (mā) is held high and level: first tone."),
      listen("骂", "Which tone did you hear?", ["4th -- falling", "1st -- high and level", "2nd -- rising", "3rd -- low dip"], 0, "骂 (mà) drops sharply: fourth tone."),
      listen("麻", "Which syllable did you hear?", ["má", "mā", "mǎ", "mà"], 0, "麻 (má) rises: second tone."),
      mc("Which pinyin shows the third tone?", ["mǎ", "mā", "má", "mà"], 0, "The ˇ mark (dip) is the third tone."),
      mc("ma4 in tone numbers is the same as:", ["mà", "mā", "má", "mǎ"], 0, "4 = fourth tone = the falling mark `."),
      fb("Type the pinyin with a tone mark or a tone number.", "\"to buy\" 买: ___", "mǎi", null, "买 is mǎi (mai3), third tone; mài (fourth tone) means \"to sell.\""),
      mt(
        "Match the tone number to the mark.",
        [
          ["ma1", "mā"],
          ["ma2", "má"],
          ["ma3", "mǎ"],
          ["ma4", "mà"],
        ],
        "Numbers are how you type tones without marks."
      ),
      say("妈 麻 马 骂", "The classic tone drill: mā má mǎ mà.", "Exaggerate each pitch shape at first; natural speech is subtler."),
    ],
    { teaches: ["sound.tones", "sound.neutral-tone"], previews: ["grammar.ma-questions"] }
  ),

  lesson(
    P,
    "zh-simple-finals",
    "Simple Finals: a, o, e, i, u, ü",
    "The six basic vowels of Mandarin, including the two that English doesn't have.",
    "7 min",
    [
      sec(
        "a, o, i, u",
        [
          "a is an open \"ah,\" as in \"father\": 八 (bā, eight).",
          "o is a rounded \"aw\" with a slight \"w\" glide after b, p, m, f: 波 (bō, wave) sounds close to \"bwo.\"",
          "i is \"ee,\" as in \"see\": 一 (yī, one). u is \"oo,\" as in \"food\": 五 (wǔ, five).",
          "When i or u stand alone, pinyin writes them yi and wu -- the y and w are spelling, not extra sounds.",
        ],
        [ex("八", "bā", "eight"), ex("一", "yī", "one"), ex("五", "wǔ", "five")]
      ),
      sec(
        "e and ü -- the new ones",
        [
          "e is not the English \"e.\" Say \"uh\" from the back of your throat with your lips spread: 饿 (è, hungry). It sounds a little like the \"u\" in \"duh.\"",
          "ü is \"ee\" said with rounded lips -- like the German ü or French u. Keep your tongue where it is for \"ee\" and push your lips into an \"oo\": 女 (nǚ, woman), 鱼 (yú, fish).",
          "After j, q, x and y, pinyin drops the two dots because only ü can follow them: 鱼 is written yú but still said with ü. After n and l the dots stay, because both lu and lü exist: 路 (lù, road) vs 绿 (lǜ, green).",
        ],
        [ex("饿", "è", "hungry"), ex("女", "nǚ", "woman"), ex("鱼", "yú", "fish (the u is really ü)"), ex("绿", "lǜ", "green")],
        [
          mc("How do you make the ü sound?", ["Say \"ee\" with rounded lips", "Say \"oo\" with spread lips", "Say \"you\"", "Say \"uh\""], 0, "Tongue for \"ee,\" lips for \"oo.\""),
          mc("In 鱼 (yú, fish), which vowel is actually pronounced?", ["ü", "u as in \"food\"", "i", "e"], 0, "After y (and j, q, x) the dots are dropped, but it's still ü."),
        ]
      ),
    ],
    [
      listen("饿", "Which vowel did you hear?", ["e", "a", "o", "i"], 0, "饿 (è): the back-of-the-throat \"uh\" sound."),
      listen("女", "Which syllable did you hear?", ["nǚ", "nǔ", "nǐ", "nǎ"], 0, "女 (nǚ, woman) uses ü: rounded \"ee.\""),
      mc("Why is 路 written lù but 绿 written lǜ?", ["After l, both u and ü exist, so the dots must stay", "It's a spelling mistake", "lǜ has a different tone", "The dots show the third tone"], 0, "After n and l, u and ü are both possible, so pinyin keeps the dots to tell them apart."),
      mc("Which English word has a vowel closest to pinyin a?", ["father", "cat", "say", "about"], 0, "Pinyin a is an open \"ah.\""),
      ms("After which initials is ü written as plain u? (Choose all that apply.)", ["j", "q", "x", "l"], [0, 1, 2], "After j, q, x (and y) only ü is possible, so the dots are dropped. After l they stay."),
      fb("Type the pinyin (marks or numbers).", "\"five\" 五: ___", "wǔ", null, "五 is wǔ (wu3): u alone is spelled wu."),
      mt(
        "Match each character to its pinyin.",
        [
          ["八", "bā"],
          ["一", "yī"],
          ["五", "wǔ"],
          ["鱼", "yú"],
        ],
        "Eight, one, five, fish."
      ),
      say("女 鱼 绿", "nǚ, yú, lǜ -- three ü sounds.", "Keep your lips rounded the whole time."),
    ],
    { teaches: ["sound.simple-finals"] }
  ),

  lesson(
    P,
    "zh-initials-b-p-m-f-d-t-n-l",
    "Initials b, p, m, f, d, t, n, l: Aspiration",
    "The first consonants -- and the puff of air that tells b from p and d from t.",
    "8 min",
    [
      sec(
        "Unaspirated vs aspirated",
        [
          "Mandarin b and p aren't \"voiced vs voiceless\" like English b and p. Both are voiceless; the difference is a puff of air (aspiration).",
          "b is a crisp p with no puff -- like the p in \"spin.\" p has a strong puff -- like the p in \"pin,\" even stronger. The same goes for d (no puff, like the t in \"stop\") and t (strong puff).",
          "Test it with a tissue or your palm in front of your mouth: 怕 (pà, afraid) should push air; 爸 (bà, dad) should barely move it.",
        ],
        [ex("爸", "bà", "dad -- no puff"), ex("怕", "pà", "afraid -- strong puff"), ex("大", "dà", "big -- no puff"), ex("他", "tā", "he -- strong puff")],
        [
          mc("What's the real difference between Mandarin b and p?", ["p has a puff of air; b doesn't", "b is voiced and p isn't", "p is longer", "There's no difference"], 0, "Aspiration: p, t (and later k, q, ch, c) all carry a puff of air."),
          listen("怕", "Which did you hear?", ["pà", "bà"], 0, "The puff of air marks p: 怕 (pà, afraid)."),
        ]
      ),
      sec(
        "m, f, n, l",
        [
          "These four are close to English: m as in \"me\" (猫 māo, cat), f as in \"far\" (飞 fēi, to fly), n as in \"no\" (你 nǐ, you), l as in \"law\" (来 lái, to come).",
          "Keep n and l distinct -- some speakers in southern China merge them, but standard Mandarin doesn't: 男 (nán, male) vs 蓝 (lán, blue).",
        ],
        [ex("猫", "māo", "cat"), ex("飞", "fēi", "to fly"), ex("你", "nǐ", "you"), ex("来", "lái", "to come")]
      ),
    ],
    [
      listen("他", "Which did you hear?", ["tā", "dā"], 0, "Strong puff: t. 他 (tā) means \"he.\""),
      listen("爸", "Which did you hear?", ["bà", "pà"], 0, "No puff: b. 爸 (bà) means \"dad.\""),
      ms("Which initials are aspirated (said with a puff)? (Choose all that apply.)", ["p", "t", "b", "d"], [0, 1], "p and t are aspirated; b and d are not."),
      mc("Mandarin b sounds most like the English sound in:", ["the p in \"spin\"", "the b in \"bat\"", "the p in \"pin\"", "the v in \"van\""], 0, "Unaspirated and voiceless -- like the p after s in \"spin.\""),
      mt(
        "Match the character to its pinyin.",
        [
          ["爸", "bà"],
          ["他", "tā"],
          ["你", "nǐ"],
          ["来", "lái"],
        ],
        "Dad, he, you, to come."
      ),
      fb("Type the pinyin (marks or numbers).", "\"big\" 大: ___", "dà", null, "大 is dà (da4): unaspirated d, falling tone."),
      fb("Type the pinyin (marks or numbers).", "\"cat\" 猫: ___", "māo", null, "猫 is māo (mao1)."),
      say("爸爸 怕 他", "bàba, pà, tā -- feel the difference between no puff and puff.", "Hold your hand in front of your mouth."),
    ],
    { teaches: ["sound.aspiration"] }
  ),

  lesson(
    P,
    "zh-initials-g-k-h-j-q-x",
    "Initials g, k, h and j, q, x",
    "Back-of-the-mouth sounds, and the three palatal sounds that trip up English speakers.",
    "8 min",
    [
      sec(
        "g, k, h",
        [
          "g is an unaspirated k (like the k in \"skip\"): 哥 (gē, older brother). k is the same with a strong puff: 渴 (kě, thirsty).",
          "h is rougher than English h -- closer to the \"ch\" in Scottish \"loch,\" made at the back of the mouth: 好 (hǎo, good), 喝 (hē, to drink).",
        ],
        [ex("哥", "gē", "older brother"), ex("渴", "kě", "thirsty"), ex("好", "hǎo", "good"), ex("喝", "hē", "to drink")]
      ),
      sec(
        "j, q, x",
        [
          "These three are made with the flat of your tongue against the hard palate, with your lips spread as in a smile. They are always followed by i or ü.",
          "j is like the \"j\" in \"jeep\" but softer and unvoiced: 家 (jiā, home). q is like the \"ch\" in \"cheese\" with a strong puff -- never a \"kw\": 去 (qù, to go). x is between English \"s\" and \"sh\" -- say \"see\" with the tip of your tongue down behind your lower teeth: 谢 (xiè, to thank).",
          "Remember that the u after j, q, x is really ü: 去 (qù) is said with rounded \"ee.\"",
        ],
        [ex("家", "jiā", "home; family"), ex("去", "qù", "to go"), ex("谢谢", "xièxie", "thank you"), ex("七", "qī", "seven")],
        [
          mc("How is pinyin q pronounced?", ["Like the \"ch\" in \"cheese,\" with a puff", "Like the \"qu\" in \"queen\"", "Like \"k\"", "Like \"sh\""], 0, "Pinyin q is never \"kw\": 七 (qī) sounds like \"chee.\""),
          listen("谢谢", "What did you hear?", ["xièxie -- thank you", "jiějie -- older sister", "qīqi", "shèshe"], 0, "谢谢 (xièxie): x is a soft \"sh\"-like hiss with spread lips."),
        ]
      ),
    ],
    [
      listen("渴", "Which did you hear?", ["kě", "gě"], 0, "Puff of air: k. 渴 (kě) means \"thirsty.\""),
      listen("去", "Which did you hear?", ["qù", "jù", "xù"], 0, "Strong puff with spread lips: q. 去 (qù) means \"to go.\""),
      mc("Which vowels can follow j, q and x?", ["Only i and ü (ü written as u)", "Any vowel", "Only a and o", "Only e"], 0, "j, q, x pair only with i and ü."),
      mt(
        "Match the character to its pinyin.",
        [
          ["好", "hǎo"],
          ["家", "jiā"],
          ["去", "qù"],
          ["七", "qī"],
        ],
        "Good, home, to go, seven."
      ),
      fb("Type the pinyin (marks or numbers).", "\"to drink\" 喝: ___", "hē", null, "喝 is hē (he1)."),
      fb("Type the pinyin (marks or numbers).", "\"home\" 家: ___", "jiā", null, "家 is jiā (jia1)."),
      ms("Which are aspirated (with a puff)? (Choose all that apply.)", ["k", "q", "g", "j"], [0, 1], "k and q carry the puff; g and j don't."),
      say("谢谢 去 家", "xièxie, qù, jiā.", "Smile while saying j, q, x -- it keeps the tongue in the right place."),
    ],
    { teaches: ["sound.palatals"] }
  ),

  lesson(
    P,
    "zh-initials-zh-ch-sh-r-z-c-s",
    "Initials zh, ch, sh, r and z, c, s",
    "The retroflex sounds (tongue curled back) and the dental sounds (tongue behind the teeth) -- plus the special vowel after them.",
    "9 min",
    [
      sec(
        "zh, ch, sh, r: curl the tongue back",
        [
          "For these, curl the tip of your tongue up toward the roof of your mouth, just behind the ridge behind your top teeth.",
          "zh is like the \"j\" in \"jump\" said with the tongue curled back, unaspirated: 中 (zhōng, middle). ch is the same with a puff: 吃 (chī, to eat). sh is like English \"sh\" with the tongue curled further back: 是 (shì, to be). r is somewhere between English \"r\" and the \"s\" in \"pleasure\": 人 (rén, person), 日 (rì, day).",
        ],
        [ex("中", "zhōng", "middle"), ex("吃", "chī", "to eat"), ex("是", "shì", "to be"), ex("人", "rén", "person")]
      ),
      sec(
        "z, c, s: tongue behind the teeth",
        [
          "z is like \"ds\" in \"kids\": 在 (zài, at). c is like \"ts\" in \"cats\" with a strong puff -- never a \"k\" or \"s\": 菜 (cài, dish; vegetable). s is like English s: 三 (sān, three).",
          "Pairs to keep apart: 四 (sì, four) and 十 (shí, ten); 字 (zì, character) and 只 (zhǐ, only).",
        ],
        [ex("在", "zài", "at; in"), ex("菜", "cài", "dish; vegetable"), ex("三", "sān", "three"), ex("四", "sì", "four")],
        [
          mc("How is pinyin c pronounced?", ["Like the \"ts\" in \"cats,\" with a puff", "Like \"k\"", "Like \"s\"", "Like \"ch\" in \"chip\""], 0, "菜 (cài) sounds like \"tsai\" with a puff of air."),
          listen("十", "Which did you hear?", ["shí -- ten", "sì -- four"], 0, "Curled tongue and rising tone: 十 (shí), ten."),
        ]
      ),
      sec(
        "The special -i",
        [
          "After zh, ch, sh, r, z, c and s, the letter i doesn't sound like \"ee.\" It's a buzzing continuation of the consonant: 是 (shì) is roughly \"shrr,\" 四 (sì) is roughly \"sz,\" 吃 (chī) is roughly \"chrr.\"",
          "So 四 (sì, four) never rhymes with \"see\" -- a common beginner mistake that makes it sound like 西 (xī, west).",
        ],
        [ex("是", "shì", "to be -- i is a buzz, not \"ee\""), ex("四", "sì", "four -- not \"see\""), ex("西", "xī", "west -- here i really is \"ee\"")],
        [mc("In which syllable does i sound like \"ee\"?", ["xī", "sì", "shì", "zì"], 0, "After x (and j, q) i is \"ee\"; after s, sh, z, zh, c, ch, r it's a buzz.")]
      ),
    ],
    [
      listen("吃", "Which did you hear?", ["chī", "qī", "cī"], 0, "Curled tongue with a puff: ch. 吃 (chī) means \"to eat.\""),
      listen("四", "Which did you hear?", ["sì -- four", "shì -- to be", "xì"], 0, "Tongue behind the teeth: 四 (sì)."),
      mt(
        "Match the character to its pinyin.",
        [
          ["中", "zhōng"],
          ["吃", "chī"],
          ["三", "sān"],
          ["菜", "cài"],
        ],
        "Middle, to eat, three, dish."
      ),
      ms("Which initials need the tongue curled back? (Choose all that apply.)", ["zh", "sh", "r", "z"], [0, 1, 2], "zh, ch, sh, r are retroflex; z, c, s are made behind the teeth."),
      fb("Type the pinyin (marks or numbers).", "\"to be\" 是: ___", "shì", null, "是 is shì (shi4)."),
      fb("Type the pinyin (marks or numbers).", "\"ten\" 十: ___", "shí", null, "十 is shí (shi2)."),
      mc("四 (sì) and 十 (shí) are often confused. What separates them?", ["Tongue position (s vs sh) and tone", "Only the tone", "Only the vowel", "Nothing -- they sound the same"], 0, "s vs sh (tongue behind teeth vs curled back), and fourth vs second tone."),
      say("四是四，十是十", "sì shì sì, shí shì shí -- \"four is four, ten is ten,\" the start of a famous tongue twister.", "Go slowly: tongue forward for s, curled back for sh."),
    ],
    { teaches: ["sound.retroflex"], previews: ["grammar.zai-location"] }
  ),

  lesson(
    P,
    "zh-compound-finals",
    "Compound Finals: ai, ei, ao, ou and the Nasals",
    "Diphthongs and the -n / -ng endings -- the finals that make up most real syllables.",
    "8 min",
    [
      sec(
        "ai, ei, ao, ou",
        [
          "ai is like \"eye\": 来 (lái, to come). ei is like the \"ay\" in \"say\": 美 (měi, beautiful). ao is like \"ow\" in \"how\": 好 (hǎo, good). ou is like the \"o\" in \"go\": 狗 (gǒu, dog).",
        ],
        [ex("来", "lái", "to come"), ex("美", "měi", "beautiful"), ex("好", "hǎo", "good"), ex("狗", "gǒu", "dog")]
      ),
      sec(
        "-n vs -ng",
        [
          "Finals ending in -n are made with the tongue tip touching behind your top teeth: an, en, in, un. Finals ending in -ng are made at the back, like the end of \"sing\": ang, eng, ing, ong.",
          "The difference changes words: 山 (shān, mountain) vs 上 (shàng, up; on); 人 (rén, person) vs 扔 (rēng, to throw); 新 (xīn, new) vs 星 (xīng, star).",
          "en is \"un\" as in \"under\" (人 rén); eng is \"ung\" as in \"lung\" (冷 lěng, cold). ong rhymes roughly with \"book\" + ng: 中 (zhōng).",
        ],
        [ex("山", "shān", "mountain"), ex("上", "shàng", "up; on"), ex("新", "xīn", "new"), ex("星", "xīng", "star")],
        [listen("上", "Which did you hear?", ["shàng", "shàn"], 0, "The back -ng: 上 (shàng).")]
      ),
    ],
    [
      listen("冷", "Which did you hear?", ["lěng", "lěn", "lǐng"], 0, "冷 (lěng, cold) ends in the back -ng."),
      listen("新", "Which did you hear?", ["xīn -- new", "xīng -- star"], 0, "Front -n: 新 (xīn)."),
      mc("Which final sounds like the \"ay\" in \"say\"?", ["ei", "ai", "ao", "ou"], 0, "ei: 美 (měi)."),
      mc("Where is your tongue for a final ending in -ng?", ["Raised at the back, as at the end of \"sing\"", "Touching behind the top teeth", "Curled up", "Between the teeth"], 0, "-ng is made at the back of the mouth; -n at the front."),
      mt(
        "Match the character to its pinyin.",
        [
          ["狗", "gǒu"],
          ["美", "měi"],
          ["山", "shān"],
          ["冷", "lěng"],
        ],
        "Dog, beautiful, mountain, cold."
      ),
      fb("Type the pinyin (marks or numbers).", "\"to come\" 来: ___", "lái", null, "来 is lái (lai2)."),
      fb("Type the pinyin (marks or numbers).", "\"middle\" 中: ___", "zhōng", null, "中 is zhōng (zhong1)."),
      say("山上 星星", "shān shàng, xīngxing -- \"on the mountain,\" \"stars.\"", "Feel the tongue move from front (-n) to back (-ng)."),
    ],
    { teaches: ["sound.compound-finals"] }
  ),

  lesson(
    P,
    "zh-medials-and-spelling",
    "Finals with i, u and ü, and the y/w Spelling Rules",
    "Longer finals like iao, uan and üe -- and why pinyin sometimes writes y and w.",
    "9 min",
    [
      sec(
        "Finals starting with i",
        [
          "ia, ie, iao, iu, ian, in, iang, ing, iong: 家 (jiā, home), 谢 (xiè, thank), 小 (xiǎo, small), 六 (liù, six), 天 (tiān, sky; day), 您 (nín, you, polite).",
          "Two surprises: ian is said \"yen,\" not \"yan\" -- 天 (tiān) sounds like \"tyen.\" And iu is short for iou: 六 (liù) sounds like \"lyo.\"",
          "With no initial, i becomes y: 呀 (ya), 也 (yě, also), 要 (yào, to want), 有 (yǒu, to have), 一 (yī), 英 (yīng).",
        ],
        [ex("小", "xiǎo", "small"), ex("天", "tiān", "sky; day -- sounds like \"tyen\""), ex("六", "liù", "six -- short for liòu"), ex("也", "yě", "also")]
      ),
      sec(
        "Finals starting with u and ü",
        [
          "ua, uo, uai, ui, uan, un, uang: 花 (huā, flower), 我 (wǒ, I), 快 (kuài, fast), 对 (duì, correct), 晚 (wǎn, late), 黄 (huáng, yellow). ui is short for uei, and un for uen: 对 (duì) sounds like \"dway.\"",
          "With no initial, u becomes w: 我 (wǒ), 晚 (wǎn), 王 (wáng). And ü becomes yu: 鱼 (yú), 月 (yuè, moon; month), 远 (yuǎn, far).",
          "üe, üan, ün after j, q, x are written ue, uan, un: 学 (xué, to study), 去 (qù), 军 (jūn, army). Remember: after j, q, x, u always means ü.",
        ],
        [ex("我", "wǒ", "I; me"), ex("对", "duì", "correct -- short for duèi"), ex("月", "yuè", "moon; month"), ex("学", "xué", "to study -- really xüé")],
        [
          mc("How is 天 (tiān) pronounced?", ["Like \"tyen\"", "Like \"tyan\" rhyming with \"man\"", "Like \"teen\"", "Like \"tan\""], 0, "ian is pronounced \"yen.\""),
          mc("Which spelling rule explains 我 (wǒ)?", ["With no initial, u is written w", "w is a separate consonant sound", "o is always written wo", "It's an exception"], 0, "uo with no initial is spelled wo."),
        ]
      ),
    ],
    [
      listen("小", "Which did you hear?", ["xiǎo", "shǎo", "xiǔ"], 0, "小 (xiǎo, small)."),
      listen("学", "Which did you hear?", ["xué", "xié", "shuō"], 0, "学 (xué): x + üe."),
      mt(
        "Match the full final to its written form when there is no initial.",
        [
          ["i", "yi"],
          ["u", "wu"],
          ["ü", "yu"],
          ["iou", "you"],
        ],
        "y and w are spelling conventions when a syllable has no initial."
      ),
      mc("In pinyin, what does iu (as in 六 liù) stand for?", ["iou", "iu as in \"you\"", "ü", "ie"], 0, "iu is short for iou."),
      mc("Why is 学 written xué and not xüé?", ["After x, u always means ü, so the dots are dropped", "It's pronounced with u as in \"food\"", "The dots mark a tone", "xüé is the traditional spelling"], 0, "After j, q, x only ü can appear."),
      fb("Type the pinyin (marks or numbers).", "\"I; me\" 我: ___", "wǒ", null, "我 is wǒ (wo3)."),
      fb("Type the pinyin (marks or numbers).", "\"six\" 六: ___", "liù", null, "六 is liù (liu4)."),
      fb("Type the pinyin (marks or numbers).", "\"moon; month\" 月: ___", "yuè", null, "月 is yuè (yue4): ü with no initial is written yu."),
      say("我学中文", "wǒ xué Zhōngwén -- \"I study Chinese.\"", "xué: round your lips for the ü."),
    ],
    { teaches: ["sound.medials"], previews: ["grammar.ye-dou", "grammar.you-meiyou", "grammar.xiang-yao"] }
  ),

  lesson(
    P,
    "zh-third-tone-sandhi",
    "Tone Changes I: Two Third Tones in a Row",
    "Why 你好 (nǐ hǎo) is said \"ní hǎo,\" and the low half-third tone used in real speech.",
    "8 min",
    [
      sec(
        "Third + third becomes second + third",
        [
          "When two third tones come together, the first one rises like a second tone. 你好 is written nǐ hǎo but said ní hǎo. 很好 (hěn hǎo, very good) is said hén hǎo. 可以 (kěyǐ, can; may) is said kéyǐ.",
          "Pinyin keeps the original marks, so you'll see nǐ hǎo written and have to apply the change yourself. After a few weeks it becomes automatic.",
        ],
        [ex("你好", "nǐ hǎo", "hello -- said ní hǎo"), ex("很好", "hěn hǎo", "very good -- said hén hǎo"), ex("可以", "kěyǐ", "can; may -- said kéyǐ")],
        [mc("How is 你好 (nǐ hǎo) actually pronounced?", ["ní hǎo", "nǐ hǎo with two dips", "nī hǎo", "nì hǎo"], 0, "Third + third: the first one becomes a rising second tone.")]
      ),
      sec(
        "The half-third tone",
        [
          "In connected speech, a third tone before a first, second or fourth tone usually just stays low without rising back up: 我们 (wǒmen, we), 好吃 (hǎochī, tasty), 很忙 (hěn máng, very busy).",
          "Only at the end of a phrase, or when said alone, does the third tone get its full dip-and-rise. Think of it as \"low\" first and \"rising back\" as optional.",
        ],
        [ex("好吃", "hǎochī", "tasty -- hǎo stays low"), ex("我们", "wǒmen", "we -- wǒ stays low")]
      ),
    ],
    [
      mc("How is 很好 (hěn hǎo) pronounced?", ["hén hǎo", "hěn hǎo with two full dips", "hēn hǎo", "hèn hǎo"], 0, "The first of two third tones rises."),
      mc("Does pinyin show the tone change in 你好?", ["No -- it's written nǐ hǎo and you apply the change", "Yes -- it's written ní hǎo", "Only in textbooks", "Only in traditional characters"], 0, "Third-tone changes aren't written; you apply them as you speak."),
      ms("Which of these contain two third tones in a row? (Choose all that apply.)", ["你好 nǐ hǎo", "可以 kěyǐ", "好吃 hǎochī", "我们 wǒmen"], [0, 1], "nǐ hǎo and kěyǐ are third + third; hǎochī and wǒmen are not."),
      listen("你好", "What did you hear?", ["nǐ hǎo -- hello", "nǐ hào", "nǐ hē", "lǎohǔ"], 0, "你好: said ní hǎo."),
      mc("In 好吃 (hǎochī, tasty), how is hǎo usually said?", ["Low, without rising back up", "Rising, like a second tone", "Falling", "High and level"], 0, "Before a non-third tone, a third tone is a low \"half-third.\""),
      mc("Which pair is pronounced with a rising tone on the first syllable?", ["水果 shuǐguǒ (fruit)", "喝水 hē shuǐ", "水杯 shuǐbēi", "大米 dàmǐ"], 0, "shuǐguǒ is third + third, so it's said shuíguǒ."),
      say("你好！很好。", "nǐ hǎo! hěn hǎo. -- \"Hello! Very good.\"", "Say ní hǎo, hén hǎo."),
    ],
    { teaches: ["sound.third-tone-sandhi"], previews: ["grammar.adjective-predicates"] }
  ),

  lesson(
    P,
    "zh-bu-yi-tone-changes",
    "Tone Changes II: 不 and 一",
    "The two everyday words whose tone shifts with the next syllable -- and how this course writes them.",
    "8 min",
    [
      sec(
        "不 (bù, not)",
        [
          "不 is fourth tone, bù: 不好 (bù hǎo, not good), 不忙 (bù máng, not busy).",
          "Before another fourth tone it becomes second tone: 不是 (bú shì, isn't), 不对 (bú duì, incorrect), 不客气 (bú kèqi, you're welcome).",
          "This course writes the tone you actually say -- bú shì -- as most learner materials do. When you type answers, bù shì is accepted too.",
        ],
        [ex("不好", "bù hǎo", "not good"), ex("不是", "bú shì", "is not"), ex("不客气", "bú kèqi", "you're welcome")],
        [mc("How is 不 pronounced in 不是 (isn't)?", ["bú -- second tone", "bù -- fourth tone", "bǔ -- third tone", "bū -- first tone"], 0, "Before a fourth tone (shì), 不 rises: bú shì.")]
      ),
      sec(
        "一 (yī, one)",
        [
          "Said alone, counted, or at the end of a word, 一 is first tone: 一 (yī), 第一 (dì-yī, first), 十一 (shíyī, eleven).",
          "Before a fourth tone (or a neutral tone that was originally fourth, like 个) it becomes second tone: 一个 (yí ge, one [of something]), 一样 (yíyàng, the same).",
          "Before first, second or third tones it becomes fourth tone: 一天 (yì tiān, one day), 一年 (yì nián, one year), 一起 (yìqǐ, together).",
        ],
        [ex("一个", "yí ge", "one (thing)"), ex("一天", "yì tiān", "one day"), ex("一起", "yìqǐ", "together"), ex("十一", "shíyī", "eleven")],
        [mc("How is 一 pronounced in 一天 (one day)?", ["yì -- fourth tone", "yī -- first tone", "yí -- second tone", "yǐ -- third tone"], 0, "Before a first tone (tiān), 一 becomes fourth: yì tiān.")]
      ),
    ],
    [
      mc("不 is pronounced bú before which tone?", ["Fourth", "First", "Second", "Third"], 0, "Two falling tones in a row are avoided: bù + shì becomes bú shì."),
      mc("How is 不忙 (not busy) pronounced?", ["bù máng", "bú máng", "bǔ máng", "bū máng"], 0, "máng is second tone, so 不 stays bù."),
      mt(
        "Match each phrase to how 一 is pronounced in it.",
        [
          ["一个 (one [thing])", "yí"],
          ["一年 (one year)", "yì"],
          ["十一 (eleven)", "yī"],
        ],
        "yí before fourth tones, yì before the others, yī alone or at the end."
      ),
      fb("Type the pinyin as it's pronounced (marks or numbers).", "不对 (incorrect): ___ duì", "bú", null, "duì is fourth tone, so 不 becomes bú."),
      fb("Type the pinyin as it's pronounced (marks or numbers).", "一起 (together): ___ qǐ", "yì", null, "qǐ is third tone, so 一 becomes yì."),
      ms("In which of these is 一 said with the second tone (yí)? (Choose all that apply.)", ["一个", "一样", "一天", "第一"], [0, 1], "Before a fourth tone (gè, yàng) 一 becomes yí."),
      listen("不客气", "What did you hear?", ["bú kèqi -- you're welcome", "bù hǎo -- not good", "bú shì -- isn't", "yí ge -- one"], 0, "不客气 (bú kèqi): the polite reply to thanks."),
      say("不是，不对。", "bú shì, bú duì -- \"No, that's not right.\"", "Both 不 rise before the falling shì and duì."),
    ],
    { teaches: ["sound.bu-yi-sandhi"], previews: ["grammar.measure-words"] }
  ),

  lesson(
    P,
    "zh-reading-pinyin",
    "Reading Pinyin: Apostrophes, Capitals and Erhua",
    "The last spelling conventions: where tone marks go, the apostrophe in Xī'ān, capital letters, and the Beijing -r.",
    "8 min",
    [
      sec(
        "Where the tone mark goes",
        [
          "The mark sits on a, if there is one: hǎo, tiān. Otherwise on e or o: xiè, gǒu. In iu and ui, it goes on the second letter: liù, duì.",
          "Knowing this lets you read any pinyin aloud with the right vowel stressed -- and lets you check that an answer you typed with marks is spelled right.",
        ],
        [ex("好", "hǎo", "good -- mark on a"), ex("狗", "gǒu", "dog -- mark on o"), ex("对", "duì", "correct -- mark on the second letter of ui")],
        [mc("Where does the tone mark go in the pinyin for 六 (six)?", ["On the u: liù", "On the i: lìu", "On both", "Nowhere"], 0, "In iu and ui the mark goes on the second vowel.")]
      ),
      sec(
        "Words, capitals and apostrophes",
        [
          "Pinyin groups the syllables of one word together (Zhōngguó, péngyou) and capitalises names and the first word of a sentence: Běijīng, Wáng Fāng.",
          "An apostrophe separates syllables when the second one starts with a, o or e and the split could be misread: 西安 (Xī'ān, a city -- two syllables) vs 先 (xiān, first -- one syllable). Also 天安门 (Tiān'ānmén).",
        ],
        [ex("西安", "Xī'ān", "Xi'an (city) -- two syllables"), ex("先", "xiān", "first -- one syllable"), ex("朋友", "péngyou", "friend")],
        [mc("Why is 西安 written Xī'ān?", ["To show it's two syllables, xī + ān, not xiān", "To mark a tone change", "Because it's a name", "To show the a is silent"], 0, "The apostrophe prevents the misreading xiān.")]
      ),
      sec(
        "Erhua: the Beijing -r",
        [
          "In northern speech, especially Beijing, many words take an -r ending written 儿: 哪儿 (nǎr, where), 一点儿 (yìdiǎnr, a little), 玩儿 (wánr, to play).",
          "You'll meet both forms: 哪儿 (nǎr) in the north and 哪里 (nǎlǐ) more widely. Both are correct standard Mandarin.",
        ],
        [ex("哪儿", "nǎr", "where (northern)"), ex("哪里", "nǎlǐ", "where (general)"), ex("一点儿", "yìdiǎnr", "a little")]
      ),
    ],
    [
      mc("Where does the tone mark go in the pinyin of 小 (small)?", ["xiǎo -- on the a", "xǐao -- on the i", "xiaǒ -- on the o", "Nowhere"], 0, "a always takes the mark when present."),
      mc("Which pinyin is spelled correctly?", ["duì", "dùi", "dúi", "duí"], 0, "In ui, the mark goes on i: duì."),
      mc("What does the apostrophe in Tiān'ānmén tell you?", ["Where one syllable ends and the next begins", "That a tone is skipped", "That the word is foreign", "That the syllable is stressed"], 0, "tiān + ān, not tiā + nān."),
      mt(
        "Match each word to its meaning.",
        [
          ["哪儿 (nǎr)", "where"],
          ["一点儿 (yìdiǎnr)", "a little"],
          ["朋友 (péngyou)", "friend"],
          ["西安 (Xī'ān)", "Xi'an, a city"],
        ],
        "Two erhua words, a two-syllable word, and a name with an apostrophe."
      ),
      ms("Which are written with a capital letter in pinyin? (Choose all that apply.)", ["Běijīng (Beijing)", "Zhōngguó (China)", "péngyou (friend)", "hǎo (good)"], [0, 1], "Place names and personal names are capitalised."),
      fb("Type the pinyin (marks or numbers).", "\"friend\" 朋友: ___", "péngyou", null, "朋友 is péngyou (peng2 you5): the second syllable is neutral."),
      say("你在哪儿？", "Nǐ zài nǎr? -- \"Where are you?\"", "Add the -r smoothly to the end of nǎ."),
    ],
    { teaches: ["sound.pinyin-spelling"], previews: ["grammar.zai-location", "grammar.nar-where"] }
  ),

  lesson(
    P,
    "zh-characters-101",
    "Characters 101: Strokes, Radicals and How to Learn Them",
    "How characters are built, why radicals help, and a realistic way to learn them -- with your first set of characters.",
    "8 min",
    [
      sec(
        "Strokes and stroke order",
        [
          "Every character is written with a fixed set of strokes in a fixed order: top before bottom, left before right, horizontal before vertical. 十 (shí, ten) is the horizontal stroke, then the vertical.",
          "Stroke order isn't just tradition: it makes handwriting legible and is how handwriting input on phones recognises characters. You don't need to handwrite to learn Chinese, but knowing the order helps you remember shapes.",
        ],
        [ex("十", "shí", "ten -- horizontal, then vertical"), ex("口", "kǒu", "mouth -- three strokes")]
      ),
      sec(
        "Radicals: the building blocks",
        [
          "Most characters are built from smaller parts. A radical often hints at the meaning: 氵 (water) appears in 河 (hé, river) and 海 (hǎi, sea); 口 (mouth) appears in 吃 (chī, to eat) and 喝 (hē, to drink); 女 (woman) appears in 妈 (mā, mom) and 姐 (jiě, older sister).",
          "Another part often hints at the sound: 妈 (mā), 吗 (ma) and 骂 (mà) all contain 马 (mǎ, horse) and all sound like \"ma.\" Meaning part + sound part is the most common character type.",
        ],
        [ex("妈", "mā", "mom -- 女 (woman) + 马 (mǎ, the sound)"), ex("吗", "ma", "question particle -- 口 (mouth) + 马 (the sound)"), ex("河", "hé", "river -- 氵 (water) + 可 (the sound)")],
        [mc("What do 妈, 吗 and 骂 have in common?", ["They all contain 马 and sound like \"ma\"", "They all mean \"horse\"", "They are all third tone", "They all contain the water radical"], 0, "马 is the sound component: mā, ma, mǎ.")]
      ),
      sec(
        "How to learn characters",
        [
          "Learn characters as part of words you can already say, not as isolated symbols. Recognising characters (reading) comes far faster than writing them by hand, and reading is what this course practises.",
          "About 500 characters cover roughly three-quarters of everyday written Chinese. The A1 module introduces around 150 of the most common ones, always with pinyin.",
        ],
        [ex("中文", "Zhōngwén", "the Chinese language (written)"), ex("汉字", "hànzì", "Chinese characters")]
      ),
    ],
    [
      mc("Which stroke of 十 is written first?", ["The horizontal stroke", "The vertical stroke", "Either", "They're written at the same time"], 0, "Horizontal before vertical."),
      mc("What does the 女 part in 妈 (mom) hint at?", ["Meaning: woman", "Sound: nǚ", "Tone", "Nothing"], 0, "女 (woman) is the meaning part; 马 is the sound part."),
      mc("The 氵 radical usually relates to:", ["Water", "Fire", "People", "Speech"], 0, "氵 is the water radical: 河 (river), 海 (sea)."),
      mt(
        "Match each character to its meaning.",
        [
          ["口", "mouth"],
          ["女", "woman"],
          ["十", "ten"],
          ["河", "river"],
        ],
        "Four characters, three of which also work as radicals."
      ),
      ms("Which statements about learning characters are true? (Choose all that apply.)", ["Reading them comes faster than handwriting them", "Learning them inside words helps", "You must handwrite every character to learn Chinese", "Each character has a fixed stroke order"], [0, 1, 3], "Handwriting helps memory but isn't required to read and type Chinese."),
      wo(["我", "学", "汉字"], "I study Chinese characters.", "Subject, verb, object -- the same order as English: 我学汉字 (wǒ xué hànzì)."),
    ],
    { teaches: ["character.basics"], previews: ["grammar.ma-questions"] }
  ),

  lesson(
    P,
    "zh-pinyin-review",
    "Pinyin & Tones Review",
    "A cumulative check of tones, tricky initials and finals, tone changes and spelling -- before you start A1.",
    "9 min",
    [
      sec(
        "Checklist",
        [
          "Tones: level (ā), rising (á), dipping (ǎ), falling (à), and light neutral (a). Third + third becomes second + third: nǐ hǎo is said ní hǎo.",
          "Aspiration: b/p, d/t, g/k, j/q, zh/ch, z/c -- the second of each pair has a puff of air. q is \"ch,\" x is a soft \"sh,\" c is \"ts.\"",
          "Vowels: e is a throaty \"uh\"; ü is a rounded \"ee\" (written u after j, q, x, y); i after z, c, s, zh, ch, sh, r is a buzz, not \"ee.\"",
          "不 becomes bú and 一 becomes yí before a fourth tone; 一 becomes yì before other tones.",
        ],
        [ex("你好", "nǐ hǎo", "hello (said ní hǎo)"), ex("谢谢", "xièxie", "thank you"), ex("不客气", "bú kèqi", "you're welcome")]
      ),
    ],
    [
      listen("七", "Which did you hear?", ["qī -- seven", "chī -- to eat", "xī -- west", "jī -- chicken"], 0, "Spread lips, puff of air: 七 (qī)."),
      listen("热", "Which did you hear?", ["rè -- hot", "lè", "yè", "zè"], 0, "Curled tongue with a buzz, falling tone: 热 (rè), hot."),
      listen("女", "Which did you hear?", ["nǚ -- woman", "nǐ -- you", "nǔ", "lǜ -- green"], 0, "Rounded \"ee\" with a dipping tone: 女 (nǚ)."),
      mc("How is 不对 (incorrect) pronounced?", ["bú duì", "bù duì", "bū duì", "bǔ duì"], 0, "不 rises before the fourth-tone duì."),
      mc("How is 可以 (kěyǐ) pronounced?", ["kéyǐ", "kěyǐ with two dips", "kēyǐ", "kèyǐ"], 0, "Third + third: the first rises."),
      mc("Which syllable is spelled correctly?", ["xué", "xüé", "shüé", "xúe"], 0, "After x, ü is written u, and the mark sits on e."),
      mt(
        "Match the character to its pinyin.",
        [
          ["吃", "chī"],
          ["去", "qù"],
          ["学", "xué"],
          ["是", "shì"],
        ],
        "To eat, to go, to study, to be."
      ),
      fb("Type the pinyin (marks or numbers).", "\"thank you\" 谢谢: ___", "xièxie", null, "谢谢 is xièxie (xie4 xie5)."),
      fb("Type the pinyin (marks or numbers).", "\"good\" 好: ___", "hǎo", null, "好 is hǎo (hao3)."),
      say("你好！谢谢！不客气！", "nǐ hǎo! xièxie! bú kèqi! -- \"Hello! Thank you! You're welcome!\"", "ní hǎo, xièxie, bú kèqi."),
    ],
    { reviews: ["sound.tones", "sound.aspiration", "sound.palatals", "sound.retroflex", "sound.simple-finals", "sound.medials", "sound.third-tone-sandhi", "sound.bu-yi-sandhi"] }
  ),
]);
