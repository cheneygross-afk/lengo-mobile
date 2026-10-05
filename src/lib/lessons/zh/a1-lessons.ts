// Synced from cheneygross-afk/lengo:src/lib/lessons/zh/a1-lessons.ts by scripts/sync-content.mjs -- edit it there, not here.
// Chinese track, A1: Foundations (roughly HSK 1).
// Assumes the Pinyin & Tones module. New words always appear with pinyin;
// see README.md for the pinyin conventions (dictionary tones, except 不
// and 一 written as spoken).

import { ex, fb, lesson, listen, mc, ms, mt, numbered, say, sec, toEn, toZh, wo, zh } from "./authoring";

const A = "ZH-A1" as const;

export const ZH_A1_LESSONS = numbered([
  lesson(
    A,
    "zh-greetings",
    "Greetings, Thanks and Apologies",
    "Hello and goodbye, thank you and you're welcome, sorry and never mind -- the phrases you'll use every day.",
    "8 min",
    [
      sec(
        "Hello and goodbye",
        [
          `${zh("你好", "nǐ hǎo")} is the all-purpose \"hello\" -- literally \"you good.\" To be more respectful (an older person, a customer, a teacher), use the polite \"you,\" ${zh("您", "nín")}: ${zh("您好", "nín hǎo")}. To greet a group, say ${zh("你们好", "nǐmen hǎo")} or ${zh("大家好", "dàjiā hǎo")} (\"hello, everyone\").`,
          `In the morning you'll also hear ${zh("早上好", "zǎoshang hǎo")}, or just ${zh("早", "zǎo")} among friends.`,
          `${zh("再见", "zàijiàn")} means \"goodbye\" (literally \"again see\"). If you'll see the person tomorrow, ${zh("明天见", "míngtiān jiàn")} (\"see you tomorrow\") is friendlier.`,
        ],
        [ex("你好", "nǐ hǎo", "hello"), ex("您好", "nín hǎo", "hello (polite)"), ex("大家好", "dàjiā hǎo", "hello, everyone"), ex("再见", "zàijiàn", "goodbye")],
        [
          mc("You meet your friend's grandmother. Which greeting fits best?", ["您好", "你们好", "早", "再见"], 0, "您 (nín) is the polite \"you\" -- 您好 is the respectful hello."),
          mc("What does 你们好 mean?", ["Hello (to a group)", "Goodbye", "Good morning", "Hello (polite, to one person)"], 0, "们 (men) makes a pronoun plural: 你们 is \"you all.\""),
        ]
      ),
      sec(
        "Thank you and you're welcome",
        [
          `${zh("谢谢", "xièxie")} is \"thank you\"; ${zh("谢谢你", "xièxie nǐ")} or ${zh("谢谢您", "xièxie nín")} adds \"you.\" The usual reply is ${zh("不客气", "bú kèqi")} -- literally \"don't be polite\" -- or simply ${zh("不用谢", "búyòng xiè")} (\"no need to thank\").`,
          `${zh("请", "qǐng")} means \"please\" when you invite someone to do something: ${zh("请进", "qǐng jìn")} (\"please come in\"), ${zh("请坐", "qǐng zuò")} (\"please sit down\").`,
        ],
        [ex("谢谢", "xièxie", "thank you"), ex("不客气", "bú kèqi", "you're welcome"), ex("请坐", "qǐng zuò", "please sit down")],
        [mc("Someone says 谢谢 to you. What do you reply?", ["不客气", "再见", "对不起", "你好"], 0, "不客气 (bú kèqi): \"you're welcome.\"")]
      ),
      sec(
        "Sorry and never mind",
        [
          `${zh("对不起", "duìbuqǐ")} is \"sorry\" for something you did -- bumping into someone, being late. The reply is ${zh("没关系", "méi guānxi")}: \"it doesn't matter, never mind.\"`,
          `To get someone's attention before a question, use ${zh("请问", "qǐngwèn")}, \"may I ask...\": ${zh("请问，你是王老师吗？", "Qǐngwèn, nǐ shì Wáng lǎoshī ma?")} (\"Excuse me, are you Teacher Wang?\").`,
        ],
        [ex("对不起", "duìbuqǐ", "sorry"), ex("没关系", "méi guānxi", "never mind; it's OK"), ex("请问", "qǐngwèn", "excuse me, may I ask")],
        [mc("Someone apologises with 对不起. What's the natural reply?", ["没关系", "不客气", "你好", "请坐"], 0, "没关系 (méi guānxi): \"never mind.\"")]
      ),
    ],
    [
      mt(
        "Match each phrase to its meaning.",
        [
          ["谢谢", "thank you"],
          ["对不起", "sorry"],
          ["再见", "goodbye"],
          ["没关系", "never mind"],
        ],
        "Four phrases you'll use daily."
      ),
      mt(
        "Match each phrase to its usual reply.",
        [
          ["谢谢！", "不客气！"],
          ["对不起！", "没关系！"],
          ["你好！", "你好！"],
          ["再见！", "再见！"],
        ],
        "Thanks gets 不客气; an apology gets 没关系; hello and goodbye are returned."
      ),
      mc("Which word makes 你 plural?", ["们", "好", "您", "大"], 0, "们 (men) after a pronoun makes it plural: 你们, 我们, 他们."),
      fb("Complete the greeting (characters or pinyin).", "___好！(hello, polite)", "您", "nín", "您 (nín) is the polite form of 你."),
      fb("Complete (characters or pinyin).", "明天___！(see you tomorrow)", "见", "jiàn", "明天见 (míngtiān jiàn): \"see you tomorrow.\""),
      toEn("请坐", "qǐng zuò", "Please sit down.", "请 (please) + 坐 (sit).", ["Please sit.", "Have a seat.", "Please have a seat."]),
      toZh("Thank you!", "谢谢", "xièxie", "谢谢 (xièxie): the second syllable is neutral."),
      listen("没关系", "What did you hear?", ["méi guānxi -- never mind", "duìbuqǐ -- sorry", "bú kèqi -- you're welcome", "zàijiàn -- goodbye"], 0, "没关系 (méi guānxi) is the reply to an apology."),
      say("你好！谢谢！再见！", "nǐ hǎo! xièxie! zàijiàn!", "Remember: nǐ hǎo is said ní hǎo."),
    ],
    { teaches: ["function.greetings", "function.thanks-apologies", "grammar.qing"], previews: ["grammar.ma-questions"] }
  ),

  lesson(
    A,
    "zh-names-introductions",
    "Names and Introductions",
    "Saying your name, asking someone else's, surnames, and \"nice to meet you.\"",
    "8 min",
    [
      sec(
        "My name is...",
        [
          `To give your name, use ${zh("我叫", "wǒ jiào")} + name: ${zh("我叫李明", "wǒ jiào Lǐ Míng")} (\"I'm called Li Ming\"). To ask, put the question word where the answer goes: ${zh("你叫什么名字？", "nǐ jiào shénme míngzi?")} -- literally \"you are-called what name?\"`,
          `${zh("什么", "shénme")} means \"what.\" Chinese questions keep normal word order: the question word simply sits where the answer will go.`,
        ],
        [ex("我叫李明。", "Wǒ jiào Lǐ Míng.", "My name is Li Ming."), ex("你叫什么名字？", "Nǐ jiào shénme míngzi?", "What's your name?")],
        [wo(["你", "叫", "什么", "名字"], "What's your name?", "Question words stay where the answer goes: 你叫什么名字？")]
      ),
      sec(
        "Surnames come first",
        [
          `Chinese names put the family name first: in 王芳 (Wáng Fāng), 王 is the surname. ${zh("我姓王", "wǒ xìng Wáng")} means \"my surname is Wang.\"`,
          `The polite way to ask someone's surname is ${zh("您贵姓？", "nín guìxìng?")} (\"your honourable surname?\"). Answer with ${zh("我姓", "wǒ xìng")} + surname -- never with 贵, which is only for the other person.`,
          `Titles follow the surname: ${zh("王老师", "Wáng lǎoshī")} (Teacher Wang), ${zh("李先生", "Lǐ xiānsheng")} (Mr Li).`,
        ],
        [ex("我姓王。", "Wǒ xìng Wáng.", "My surname is Wang."), ex("您贵姓？", "Nín guìxìng?", "What's your surname? (polite)"), ex("王老师", "Wáng lǎoshī", "Teacher Wang")],
        [mc("In the name 张伟 (Zhāng Wěi), which part is the surname?", ["张", "伟", "Both", "Neither"], 0, "The surname comes first in Chinese names.")]
      ),
      sec(
        "Nice to meet you",
        [
          `${zh("认识你很高兴", "rènshi nǐ hěn gāoxìng")} means \"nice to meet you\" -- literally \"knowing you, (I'm) very happy.\" Often shortened to ${zh("很高兴认识你", "hěn gāoxìng rènshi nǐ")}, with the same meaning.`,
          `The reply is ${zh("我也很高兴", "wǒ yě hěn gāoxìng")}, \"I'm happy too.\" 也 (yě) means \"also.\"`,
        ],
        [ex("认识你很高兴。", "Rènshi nǐ hěn gāoxìng.", "Nice to meet you."), ex("我也很高兴。", "Wǒ yě hěn gāoxìng.", "Nice to meet you too.")]
      ),
    ],
    [
      fb("Complete (characters or pinyin).", "你叫___名字？", "什么", "shénme", "什么 (shénme) is \"what.\""),
      fb("Complete (characters or pinyin).", "我___王。(My surname is Wang.)", "姓", "xìng", "姓 (xìng): to be surnamed."),
      mc("Someone asks 您贵姓？ Your surname is Smith. What do you say?", ["我姓Smith。", "我贵姓Smith。", "我叫贵姓。", "您姓Smith。"], 0, "Answer with 我姓...; 贵 is only used for the other person's surname."),
      wo(["我", "叫", "王", "芳"], "My name is Wang Fang.", "我叫 + full name."),
      wo(["认识", "你", "很", "高兴"], "Nice to meet you.", "认识你很高兴 (rènshi nǐ hěn gāoxìng).", [["很", "高兴", "认识", "你"]]),
      toEn("我叫李明。", "Wǒ jiào Lǐ Míng.", "My name is Li Ming.", "叫 (jiào): to be called.", ["I am Li Ming.", "I'm called Li Ming.", "I am called Li Ming.", "I'm Li Ming."]),
      toZh("Teacher Wang", "王老师", "Wáng lǎoshī", "Surname first, then the title."),
      mt(
        "Match each word to its meaning.",
        [
          ["名字", "name"],
          ["姓", "surname; to be surnamed"],
          ["老师", "teacher"],
          ["先生", "Mr; sir"],
        ],
        "Words for names and titles."
      ),
      say("你好，我叫...。认识你很高兴。", "Introduce yourself: \"Hello, my name is... Nice to meet you.\"", "Put your own name after 我叫.", "Introduce yourself in Chinese."),
    ],
    { teaches: ["function.names", "grammar.question-word-in-place"], previews: ["grammar.ye-dou", "grammar.adjective-predicates"] }
  ),

  lesson(
    A,
    "zh-pronouns-shi",
    "Pronouns and 是 (to be)",
    "I, you, he, she, we, they -- and 是 for saying who or what someone is: nationality, job, identity.",
    "8 min",
    [
      sec(
        "Personal pronouns",
        [
          `${zh("我", "wǒ")} I/me, ${zh("你", "nǐ")} you, ${zh("您", "nín")} you (polite), ${zh("他", "tā")} he/him, ${zh("她", "tā")} she/her, ${zh("它", "tā")} it.`,
          `He, she and it all sound exactly the same (tā) -- only the characters differ. Add 们 for the plural: ${zh("我们", "wǒmen")} we, ${zh("你们", "nǐmen")} you (plural), ${zh("他们", "tāmen")} they, ${zh("她们", "tāmen")} they (all female).`,
          "Pronouns never change form: 我 is both \"I\" and \"me.\"",
        ],
        [ex("我们", "wǒmen", "we; us"), ex("他们", "tāmen", "they; them"), ex("她", "tā", "she; her")],
        [mc("How do you tell 他 (he) and 她 (she) apart when listening?", ["You can't -- both are tā; context tells you", "他 is a higher tone", "她 has a neutral tone", "她 is pronounced nǚ"], 0, "Both are pronounced tā; only the written forms differ.")]
      ),
      sec(
        "是: \"to be\" with nouns",
        [
          `${zh("是", "shì")} links two nouns: ${zh("我是学生", "wǒ shì xuésheng")} (I am a student), ${zh("她是老师", "tā shì lǎoshī")} (she is a teacher). There's no \"a\" or \"the\" in Chinese.`,
          `是 never changes: I am, you are, he is, they were -- all 是.`,
          `The negative is ${zh("不是", "bú shì")}: ${zh("他不是医生", "tā bú shì yīshēng")} (he isn't a doctor). Remember that 不 rises before the fourth-tone 是.`,
        ],
        [ex("我是学生。", "Wǒ shì xuésheng.", "I'm a student."), ex("她是老师。", "Tā shì lǎoshī.", "She's a teacher."), ex("他不是医生。", "Tā bú shì yīshēng.", "He isn't a doctor.")],
        [fb("Complete (characters or pinyin).", "我___学生。(I am a student.)", "是", "shì", "是 (shì) links two nouns.")]
      ),
      sec(
        "Nationalities",
        [
          `Country + 人 (rén, person) gives the nationality: ${zh("中国人", "Zhōngguó rén")} (Chinese person), ${zh("美国人", "Měiguó rén")} (American), ${zh("英国人", "Yīngguó rén")} (British), ${zh("加拿大人", "Jiānádà rén")} (Canadian).`,
          `${zh("你是哪国人？", "nǐ shì nǎ guó rén?")} -- \"which country person are you?\" -- asks someone's nationality.`,
        ],
        [ex("我是美国人。", "Wǒ shì Měiguó rén.", "I'm American."), ex("你是哪国人？", "Nǐ shì nǎ guó rén?", "What nationality are you?")]
      ),
    ],
    [
      mt(
        "Match the pronoun to its meaning.",
        [
          ["我们", "we"],
          ["你们", "you (plural)"],
          ["他们", "they"],
          ["您", "you (polite)"],
        ],
        "们 makes the plural; 您 is the polite singular \"you.\""
      ),
      fb("Complete (characters or pinyin).", "他___是中国人。(He isn't Chinese.)", "不", "bú", "不是 (bú shì): 不 rises before a fourth tone."),
      wo(["她", "是", "英国人"], "She is British.", "Subject + 是 + noun."),
      wo(["我们", "不", "是", "老师"], "We aren't teachers.", "不 goes right before 是."),
      toEn("他是医生。", "Tā shì yīshēng.", "He is a doctor.", "No word for \"a\": 他是医生.", ["He's a doctor."]),
      toZh("I am Canadian.", "我是加拿大人", "wǒ shì Jiānádà rén", "Country + 人 gives the nationality."),
      mc("What does 你是哪国人？ ask?", ["What nationality are you?", "Where do you live?", "What's your name?", "Are you a student?"], 0, "哪国人: \"which-country person.\""),
      ms("Which sentences are correct Chinese? (Choose all that apply.)", ["我是学生。", "她不是老师。", "我是一个学生是。", "他们是美国人。"], [0, 1, 3], "是 links subject and noun once; nothing goes after the noun."),
      listen("我是学生。", "What did you hear?", ["I'm a student.", "I'm a teacher.", "I'm a doctor.", "I'm Chinese."], 0, "学生 (xuésheng): student."),
    ],
    { teaches: ["grammar.pronouns", "grammar.shi", "grammar.bu-negation", "function.nationality"] }
  ),

  lesson(
    A,
    "zh-questions-ma-ne-ye-dou",
    "Questions with 吗 and 呢; 也 and 都",
    "Turning statements into questions with 吗, asking \"and you?\" with 呢, and saying \"also\" and \"all.\"",
    "8 min",
    [
      sec(
        "吗: yes/no questions",
        [
          `Put ${zh("吗", "ma")} at the end of a statement to make a yes/no question: ${zh("你是学生。", "nǐ shì xuésheng.")} → ${zh("你是学生吗？", "nǐ shì xuésheng ma?")}. Nothing else changes.`,
          `Chinese has no single word for \"yes\" or \"no.\" You answer by repeating the verb: ${zh("是。", "shì.")} (yes, I am) or ${zh("不是。", "bú shì.")} (no, I'm not). To ${zh("你忙吗？", "nǐ máng ma?")} (are you busy?) answer ${zh("很忙", "hěn máng")} or ${zh("不忙", "bù máng")}.`,
        ],
        [ex("你是老师吗？", "Nǐ shì lǎoshī ma?", "Are you a teacher?"), ex("是。/ 不是。", "Shì. / Bú shì.", "Yes (I am). / No (I'm not).")],
        [mc("How do you answer \"yes\" to 你是中国人吗？", ["是。", "吗。", "好。", "对不起。"], 0, "Repeat the verb: 是.")]
      ),
      sec(
        "呢: \"and you?\"",
        [
          `${zh("呢", "ne")} after a noun or pronoun bounces the question back: ${zh("我是学生，你呢？", "wǒ shì xuésheng, nǐ ne?")} -- \"I'm a student, and you?\"`,
          `${zh("你好吗？", "nǐ hǎo ma?")} (\"how are you?\") is answered ${zh("我很好，你呢？", "wǒ hěn hǎo, nǐ ne?")}`,
        ],
        [ex("我很好，你呢？", "Wǒ hěn hǎo, nǐ ne?", "I'm fine, and you?")],
        [fb("Complete (characters or pinyin).", "我是美国人，你___？", "呢", "ne", "呢 asks \"and you?\"")]
      ),
      sec(
        "也 (also) and 都 (all)",
        [
          `${zh("也", "yě")} (also) and ${zh("都", "dōu")} (all, both) go before the verb, never at the end of the sentence like English \"too\": ${zh("我也是学生", "wǒ yě shì xuésheng")} (I'm a student too).`,
          `${zh("我们都是老师", "wǒmen dōu shì lǎoshī")} -- \"we're all teachers.\" Together, 也 comes first: ${zh("他们也都是老师", "tāmen yě dōu shì lǎoshī")} (they're all teachers too).`,
        ],
        [ex("我也是学生。", "Wǒ yě shì xuésheng.", "I'm a student too."), ex("我们都是老师。", "Wǒmen dōu shì lǎoshī.", "We're all teachers.")],
        [wo(["我", "也", "是", "学生"], "I'm a student too.", "也 goes before the verb.")]
      ),
    ],
    [
      wo(["你", "是", "老师", "吗"], "Are you a teacher?", "Statement + 吗 = yes/no question."),
      wo(["他们", "都", "是", "中国人"], "They're all Chinese.", "都 goes before the verb."),
      fb("Complete (characters or pinyin).", "你忙___？(Are you busy?)", "吗", "ma", "吗 turns a statement into a yes/no question."),
      fb("Complete (characters or pinyin).", "我是学生，她___是学生。(She's a student too.)", "也", "yě", "也 (also) goes before the verb."),
      mc("Where does 也 go in a sentence?", ["Before the verb", "At the end", "At the start, before the subject", "After the verb"], 0, "Unlike English \"too,\" 也 goes before the verb."),
      ms("Which are natural answers to 你是学生吗？ (Choose all that apply.)", ["是。", "不是。", "吗。", "是的，我是学生。"], [0, 1, 3], "Answer by repeating the verb (是/不是); 是的 is also common."),
      toEn("我很好，你呢？", "Wǒ hěn hǎo, nǐ ne?", "I'm fine, and you?", "呢 bounces the question back.", ["I'm good, and you?", "I'm well, and you?", "I'm fine, how about you?", "I'm good, how about you?"]),
      toZh("We are all students.", "我们都是学生", "wǒmen dōu shì xuésheng", "都 before 是."),
      listen("你是中国人吗？", "What's the question?", ["Are you Chinese?", "Is he Chinese?", "Are you a student?", "Which country are you from?"], 0, "你是中国人吗？ -- 吗 makes it a yes/no question."),
    ],
    { teaches: ["grammar.ma-questions", "grammar.ne-questions", "grammar.ye-dou"], previews: ["grammar.adjective-predicates", "grammar.de-possessive"] }
  ),

  lesson(
    A,
    "zh-numbers-0-99",
    "Numbers 0-99",
    "Counting from zero to ninety-nine -- one of the most regular number systems anywhere.",
    "8 min",
    [
      sec(
        "Zero to ten",
        [
          `${zh("零", "líng")} 0, ${zh("一", "yī")} 1, ${zh("二", "èr")} 2, ${zh("三", "sān")} 3, ${zh("四", "sì")} 4, ${zh("五", "wǔ")} 5, ${zh("六", "liù")} 6, ${zh("七", "qī")} 7, ${zh("八", "bā")} 8, ${zh("九", "jiǔ")} 9, ${zh("十", "shí")} 10.`,
          "There's also a one-handed gesture for each number from 1 to 10 -- useful in noisy markets.",
        ],
        [ex("三", "sān", "three"), ex("七", "qī", "seven"), ex("九", "jiǔ", "nine")],
        [mt("Match the numbers.", [["二", "2"], ["四", "4"], ["六", "6"], ["八", "8"]], "èr, sì, liù, bā.")]
      ),
      sec(
        "11 to 99: just combine",
        [
          `Teens are \"ten-one,\" \"ten-two\"...: ${zh("十一", "shíyī")} 11, ${zh("十五", "shíwǔ")} 15. Tens are \"two-ten,\" \"three-ten\"...: ${zh("二十", "èrshí")} 20, ${zh("五十", "wǔshí")} 50. Then add the units: ${zh("二十一", "èrshíyī")} 21, ${zh("九十九", "jiǔshíjiǔ")} 99.`,
          `Order is always tens-then-units, exactly as written: 四十七 is \"four-ten-seven\" = 47.`,
        ],
        [ex("十二", "shí'èr", "twelve"), ex("三十", "sānshí", "thirty"), ex("六十八", "liùshíbā", "sixty-eight")],
        [fb("Write 45 in characters (or type the pinyin).", "45 = ___", "四十五", "sìshíwǔ", "Four-ten-five: 四十五.")]
      ),
      sec(
        "Phone numbers and room numbers",
        [
          `Phone, room and bus numbers are read digit by digit, and 1 is often said ${zh("幺", "yāo")} to avoid confusing it with 七 (qī): 110 is \"yāo yāo líng.\"`,
          `${zh("几", "jǐ")} asks \"how many\" for small numbers (usually under ten): ${zh("你几岁？", "nǐ jǐ suì?")} asks a child's age.`,
        ],
        [ex("一一零", "yāo yāo líng", "110 (the police number)"), ex("你几岁？", "Nǐ jǐ suì?", "How old are you? (to a child)")]
      ),
    ],
    [
      mt("Match the numbers.", [["十一", "11"], ["二十", "20"], ["五十五", "55"], ["九十", "90"]], "Tens-then-units, as written."),
      mc("What is 七十三?", ["73", "37", "703", "10"], 0, "七十三: seven-ten-three = 73."),
      mc("How is 1 often read in phone numbers?", ["yāo", "yī", "líng", "èr"], 0, "幺 (yāo) avoids confusion with 七 (qī)."),
      fb("Write 19 in characters (or type the pinyin).", "19 = ___", "十九", "shíjiǔ", "Ten-nine: 十九."),
      fb("Write 60 in characters (or type the pinyin).", "60 = ___", "六十", "liùshí", "Six-ten: 六十."),
      listen("八十八", "Which number did you hear?", ["88", "18", "80", "8"], 0, "八十八 (bāshíbā): 88, a lucky number in China."),
      listen("四十四", "Which number did you hear?", ["44", "14", "40", "10"], 0, "四十四 (sìshísì): 44."),
      say("一二三四五六七八九十", "Count from one to ten.", "Watch the tones: yī èr sān sì wǔ liù qī bā jiǔ shí."),
    ],
    { teaches: ["vocab.numbers-0-99", "grammar.ji"] }
  ),

  lesson(
    A,
    "zh-numbers-money",
    "Big Numbers and Money",
    "Hundreds and thousands, the two words for \"two,\" and asking how much something costs.",
    "9 min",
    [
      sec(
        "Hundreds and thousands",
        [
          `${zh("百", "bǎi")} hundred, ${zh("千", "qiān")} thousand: ${zh("一百", "yìbǎi")} 100, ${zh("三百", "sānbǎi")} 300, ${zh("一千", "yìqiān")} 1,000. 一 is said in front of 百 and 千, unlike English \"hundred.\"`,
          `A zero in the middle is spoken as 零: ${zh("一百零五", "yìbǎi líng wǔ")} 105. 150 is ${zh("一百五", "yìbǎi wǔ")} or ${zh("一百五十", "yìbǎi wǔshí")}.`,
        ],
        [ex("一百", "yìbǎi", "one hundred"), ex("一百零五", "yìbǎi líng wǔ", "105"), ex("两千", "liǎngqiān", "2,000")]
      ),
      sec(
        "二 or 两?",
        [
          `Counting, in phone numbers and in the units place, 2 is ${zh("二", "èr")}: 十二, 二十二. Before a measure word (next lesson) and usually before 百, 千, 万, it's ${zh("两", "liǎng")}: ${zh("两个人", "liǎng ge rén")} (two people), ${zh("两千", "liǎngqiān")} (2,000).`,
        ],
        [ex("十二", "shí'èr", "twelve -- 二"), ex("两个人", "liǎng ge rén", "two people -- 两")],
        [mc("Which is right for \"two people\"?", ["两个人", "二个人", "两人个", "二人"], 0, "Before a measure word, 2 is 两.")]
      ),
      sec(
        "How much is it?",
        [
          `${zh("多少钱？", "duōshao qián?")} is \"how much (money)?\" The everyday unit is ${zh("块", "kuài")} (the written, formal word is ${zh("元", "yuán")}); a tenth of a 块 is ${zh("毛", "máo")}. ${zh("五块", "wǔ kuài")} is 5 yuan; ${zh("三块五", "sān kuài wǔ")} is 3.50.`,
          `${zh("太贵了！", "tài guì le!")} -- \"too expensive!\" ${zh("便宜", "piányi")} is \"cheap.\" ${zh("便宜一点儿吧", "piányi yìdiǎnr ba")} asks for a lower price.`,
        ],
        [ex("这个多少钱？", "Zhège duōshao qián?", "How much is this?"), ex("二十块。", "Èrshí kuài.", "Twenty yuan."), ex("太贵了！", "Tài guì le!", "Too expensive!")],
        [fb("Complete (characters or pinyin).", "这个___钱？(How much is this?)", "多少", "duōshao", "多少钱 (duōshao qián): how much?")]
      ),
    ],
    [
      mc("What is 三百零八?", ["308", "380", "38", "3,008"], 0, "三百 300 + 零 + 八 8 = 308."),
      mc("How do you say 2,000?", ["两千", "二千千", "二百", "千二"], 0, "两 is usual before 千."),
      mc("A shopkeeper says 十五块. How much is that?", ["15 yuan", "50 yuan", "1.50 yuan", "105 yuan"], 0, "十五 = 15, 块 = yuan."),
      fb("Write 100 in characters (or type the pinyin).", "100 = ___", "一百", "yìbǎi", "一百: you say the 一."),
      fb("Complete (characters or pinyin).", "太___了！(Too expensive!)", "贵", "guì", "太...了 means \"too...\": 太贵了."),
      mt("Match the words.", [["便宜", "cheap"], ["贵", "expensive"], ["钱", "money"], ["块", "yuan (spoken)"]], "Shopping words."),
      toEn("这个多少钱？", "Zhège duōshao qián?", "How much is this?", "多少钱: how much money.", ["How much does this cost?", "How much is this one?"]),
      listen("三块五", "How much?", ["3.50 yuan", "35 yuan", "5.30 yuan", "350 yuan"], 0, "三块五: three 块 and five 毛 = 3.50."),
      say("这个多少钱？太贵了！", "\"How much is this? Too expensive!\"", "tài guì le -- stress the falling tones."),
    ],
    { teaches: ["vocab.numbers-large", "grammar.er-liang", "function.money", "grammar.duoshao"], previews: ["grammar.tai-le", "grammar.le-completed", "grammar.ba-suggestion", "grammar.demonstratives", "grammar.measure-words"] }
  ),

  lesson(
    A,
    "zh-measure-words",
    "Measure Words: 个, 本, 杯 and 这/那/哪",
    "Why Chinese says \"one piece-of person\" -- measure words, plus this, that and which.",
    "9 min",
    [
      sec(
        "Number + measure word + noun",
        [
          `Between a number and a noun, Chinese always needs a measure word (classifier): ${zh("一个人", "yí ge rén")} (one person), ${zh("三本书", "sān běn shū")} (three books), ${zh("两杯茶", "liǎng bēi chá")} (two cups of tea).`,
          `${zh("个", "gè")} is the general measure word, used for people and many things; it's usually said in the neutral tone (ge). If you don't know the right one, 个 is the safest guess.`,
          `Others you'll need now: ${zh("本", "běn")} for books, ${zh("杯", "bēi")} for cups/glasses of a drink, ${zh("口", "kǒu")} for members of a family, and ${zh("只", "zhī")} for most animals: ${zh("一只猫", "yì zhī māo")} (a cat).`,
        ],
        [ex("一个朋友", "yí ge péngyou", "a friend"), ex("三本书", "sān běn shū", "three books"), ex("一杯水", "yì bēi shuǐ", "a glass of water")],
        [mc("Which measure word goes with 书 (book)?", ["本", "杯", "口", "人"], 0, "本 (běn) is for bound things like books.")]
      ),
      sec(
        "This, that, which",
        [
          `${zh("这", "zhè")} this, ${zh("那", "nà")} that, ${zh("哪", "nǎ")} which. With a noun they also take a measure word: ${zh("这个人", "zhège rén")} (this person), ${zh("那本书", "nà běn shū")} (that book), ${zh("哪个？", "nǎge?")} (which one?).`,
          `On their own: ${zh("这是我的书", "zhè shì wǒ de shū")} (this is my book), ${zh("那是什么？", "nà shì shénme?")} (what's that?).`,
        ],
        [ex("这个", "zhège", "this one"), ex("那本书", "nà běn shū", "that book"), ex("哪个？", "Nǎge?", "Which one?")],
        [fb("Complete (characters or pinyin).", "那___书是我的。(That book is mine.)", "本", "běn", "Books take 本: 那本书.")]
      ),
      sec(
        "几 or 多少?",
        [
          `Both ask \"how many.\" ${zh("几", "jǐ")} expects a small number (under about ten) and needs a measure word: ${zh("你有几本书？", "nǐ yǒu jǐ běn shū?")} ${zh("多少", "duōshao")} is for any number, and the measure word is optional: ${zh("你们学校有多少学生？", "nǐmen xuéxiào yǒu duōshao xuésheng?")}`,
        ],
        [ex("几个人？", "Jǐ ge rén?", "How many people? (a few)"), ex("多少学生？", "Duōshao xuésheng?", "How many students?")]
      ),
    ],
    [
      mt("Match each noun to its measure word.", [["书 (book)", "本"], ["茶 (tea)", "杯"], ["朋友 (friend)", "个"], ["家人 (family members)", "口"]], "本 books, 杯 drinks, 个 people and most things, 口 family members."),
      mc("Which is correct?", ["两个朋友", "二个朋友", "两朋友", "两个的朋友"], 0, "两 + measure word + noun."),
      wo(["我", "有", "三", "本", "书"], "I have three books.", "Number + measure word + noun: 三本书."),
      wo(["这", "个", "人", "是", "老师"], "This person is a teacher.", "这 + 个 + noun."),
      fb("Complete (characters or pinyin).", "我要一___茶。(I want a cup of tea.)", "杯", "bēi", "杯 (bēi): a cup/glass of."),
      fb("Complete (characters or pinyin).", "你有___个朋友？(How many friends do you have? -- a few)", "几", "jǐ", "几 + measure word for small numbers."),
      toEn("那是什么？", "Nà shì shénme?", "What is that?", "那 that, 什么 what.", ["What's that?"]),
      toZh("this book", "这本书", "zhè běn shū", "这 + 本 + 书."),
      listen("两杯水", "What did you hear?", ["two glasses of water", "two books", "two people", "twelve cups"], 0, "两杯水 (liǎng bēi shuǐ)."),
    ],
    { teaches: ["grammar.measure-words", "grammar.demonstratives"], previews: ["grammar.de-possessive", "grammar.you-meiyou", "grammar.xiang-yao"] }
  ),

  lesson(
    A,
    "zh-family-you",
    "Family and 有 (to have)",
    "Family members, 有 and 没有, and asking how many people are in someone's family.",
    "9 min",
    [
      sec(
        "Family members",
        [
          `${zh("爸爸", "bàba")} dad, ${zh("妈妈", "māma")} mom, ${zh("哥哥", "gēge")} older brother, ${zh("姐姐", "jiějie")} older sister, ${zh("弟弟", "dìdi")} younger brother, ${zh("妹妹", "mèimei")} younger sister, ${zh("儿子", "érzi")} son, ${zh("女儿", "nǚ'ér")} daughter.`,
          "Chinese has no single word for \"brother\" or \"sister\": you always say whether they're older or younger.",
        ],
        [ex("哥哥", "gēge", "older brother"), ex("妹妹", "mèimei", "younger sister"), ex("女儿", "nǚ'ér", "daughter")],
        [mt("Match each word to its meaning.", [["姐姐", "older sister"], ["弟弟", "younger brother"], ["儿子", "son"], ["爸爸", "dad"]], "Older/younger is always specified.")]
      ),
      sec(
        "有 and 没有",
        [
          `${zh("有", "yǒu")} means \"to have\": ${zh("我有一个哥哥", "wǒ yǒu yí ge gēge")} (I have an older brother).`,
          `Its negative is always ${zh("没有", "méiyǒu")} -- never 不有: ${zh("我没有妹妹", "wǒ méiyǒu mèimei")} (I don't have a younger sister). This is the one verb 不 can't negate.`,
          `Question: ${zh("你有兄弟姐妹吗？", "nǐ yǒu xiōngdì jiěmèi ma?")} (do you have brothers and sisters?), or ${zh("你有没有...？", "nǐ yǒu méiyǒu...?")} (have or have-not...?).`,
        ],
        [ex("我有一个哥哥。", "Wǒ yǒu yí ge gēge.", "I have an older brother."), ex("我没有妹妹。", "Wǒ méiyǒu mèimei.", "I don't have a younger sister.")],
        [mc("How do you say \"I don't have a car\"?", ["我没有车。", "我不有车。", "我有不车。", "我没车有。"], 0, "有 is negated with 没, never 不.")]
      ),
      sec(
        "How many people in your family?",
        [
          `${zh("你家有几口人？", "nǐ jiā yǒu jǐ kǒu rén?")} -- \"your family has how many mouths of people?\" 口 is the measure word for family members.`,
          `Answer: ${zh("我家有四口人：爸爸、妈妈、姐姐和我。", "wǒ jiā yǒu sì kǒu rén: bàba, māma, jiějie hé wǒ.")} 和 (hé) means \"and\" -- but only between nouns, not between sentences.`,
        ],
        [ex("你家有几口人？", "Nǐ jiā yǒu jǐ kǒu rén?", "How many people are in your family?"), ex("爸爸和妈妈", "bàba hé māma", "dad and mom")]
      ),
    ],
    [
      fb("Complete (characters or pinyin).", "我___有姐姐。(I don't have an older sister.)", "没", "méi", "没有, never 不有."),
      fb("Complete (characters or pinyin).", "你家有几___人？", "口", "kǒu", "口 is the measure word for family members."),
      wo(["我", "有", "一", "个", "弟弟"], "I have a younger brother.", "有 + number + measure word + noun."),
      wo(["我", "家", "有", "五", "口", "人"], "There are five people in my family.", "我家有五口人."),
      mc("Your brother is two years older than you. What do you call him?", ["哥哥", "弟弟", "姐姐", "妹妹"], 0, "Older brother: 哥哥 (gēge)."),
      ms("Which sentences are correct? (Choose all that apply.)", ["我没有哥哥。", "我不有哥哥。", "她有两个妹妹。", "他有二个儿子。"], [0, 2], "没有, not 不有; and 两, not 二, before a measure word."),
      toEn("我有一个女儿。", "Wǒ yǒu yí ge nǚ'ér.", "I have a daughter.", "女儿 (nǚ'ér): daughter.", ["I have one daughter."]),
      toZh("Dad and Mom", "爸爸和妈妈", "bàba hé māma", "和 joins two nouns.", ["爸爸妈妈"]),
      listen("我家有三口人。", "How many people are in the family?", ["Three", "Four", "Five", "Two"], 0, "三口人: three people."),
    ],
    { teaches: ["vocab.family", "grammar.you-meiyou", "grammar.he-and"] }
  ),

  lesson(
    A,
    "zh-possessive-de",
    "Possession with 的",
    "My book, Teacher Wang's cat, whose phone -- and when the 的 can be dropped.",
    "8 min",
    [
      sec(
        "的 shows possession",
        [
          `Owner + ${zh("的", "de")} + thing: ${zh("我的书", "wǒ de shū")} (my book), ${zh("老师的猫", "lǎoshī de māo")} (the teacher's cat), ${zh("我朋友的手机", "wǒ péngyou de shǒujī")} (my friend's phone).`,
          `It works like English 's -- and also stands alone: ${zh("这是我的", "zhè shì wǒ de")} (this is mine).`,
        ],
        [ex("我的书", "wǒ de shū", "my book"), ex("老师的猫", "lǎoshī de māo", "the teacher's cat"), ex("这是我的。", "Zhè shì wǒ de.", "This is mine.")],
        [wo(["这", "是", "我", "的", "手机"], "This is my phone.", "Owner + 的 + thing.")]
      ),
      sec(
        "Dropping 的",
        [
          `With close relationships and institutions you belong to, 的 is usually dropped: ${zh("我妈妈", "wǒ māma")} (my mom), ${zh("他哥哥", "tā gēge")} (his older brother), ${zh("我们学校", "wǒmen xuéxiào")} (our school), ${zh("我家", "wǒ jiā")} (my home/family).`,
          `With things you own, keep it: ${zh("我的书", "wǒ de shū")}, not 我书.`,
        ],
        [ex("我妈妈", "wǒ māma", "my mom"), ex("我们学校", "wǒmen xuéxiào", "our school")],
        [ms("In which phrases is it natural to drop 的? (Choose all that apply.)", ["我妈妈", "我们学校", "我书", "她的手机"], [0, 1], "Family and institutions drop 的; owned things keep it.")]
      ),
      sec(
        "Whose?",
        [
          `${zh("谁", "shéi")} means \"who\"; ${zh("谁的", "shéi de")} is \"whose\": ${zh("这是谁的书？", "zhè shì shéi de shū?")} (whose book is this?). The answer goes where 谁的 was: ${zh("这是我朋友的书", "zhè shì wǒ péngyou de shū")}.`,
        ],
        [ex("这是谁的书？", "Zhè shì shéi de shū?", "Whose book is this?")],
        [fb("Complete (characters or pinyin).", "这是___的手机？(Whose phone is this?)", "谁", "shéi", "谁的: whose.", { altAnswers: ["shuí"] })]
      ),
    ],
    [
      wo(["那", "是", "老师", "的", "书"], "That is the teacher's book.", "Owner + 的 + thing."),
      wo(["我", "妈妈", "是", "医生"], "My mom is a doctor.", "我妈妈: no 的 with close family."),
      fb("Complete (characters or pinyin).", "这是我___。(This is mine.)", "的", "de", "我的 stands alone for \"mine.\""),
      mc("Which is most natural for \"my older sister\"?", ["我姐姐", "我的的姐姐", "姐姐我", "我是姐姐"], 0, "Close family usually drops 的."),
      mc("What does 谁的 mean?", ["whose", "who", "what", "which"], 0, "谁 who + 的 = whose."),
      toEn("这是谁的猫？", "Zhè shì shéi de māo?", "Whose cat is this?", "谁的: whose.", ["Whose cat is it?"]),
      toZh("my friend's phone", "我朋友的手机", "wǒ péngyou de shǒujī", "Owner (我朋友) + 的 + thing."),
      mt("Match the phrases.", [["我们学校", "our school"], ["他哥哥", "his older brother"], ["你的书", "your book"], ["她的", "hers"]], "的 shows possession; it's dropped with close relationships."),
      listen("这是我的。", "What did you hear?", ["This is mine.", "This is me.", "That is mine.", "Is this mine?"], 0, "这是我的: this is mine."),
    ],
    { teaches: ["grammar.de-possessive", "grammar.shei"] }
  ),

  lesson(
    A,
    "zh-adjectives-hen",
    "Describing with Adjectives: 很, 不 and 太...了",
    "Why Chinese says \"I very busy\" with no \"am\" -- adjective sentences, plus \"not,\" \"too\" and \"very.\"",
    "8 min",
    [
      sec(
        "No 是 with adjectives",
        [
          `Adjectives work like verbs in Chinese: you don't use 是. \"I am busy\" is ${zh("我很忙", "wǒ hěn máng")}, not 我是忙.`,
          `${zh("很", "hěn")} literally means \"very,\" but in a plain statement it's mostly a link -- 我很忙 is just \"I'm busy.\" Without 很, 我忙 sounds like a comparison (\"I'm the busy one\").`,
        ],
        [ex("我很忙。", "Wǒ hěn máng.", "I'm busy."), ex("她很高兴。", "Tā hěn gāoxìng.", "She's happy."), ex("今天很冷。", "Jīntiān hěn lěng.", "It's cold today.")],
        [mc("How do you say \"I'm tired\"?", ["我很累。", "我是累。", "我是很累。", "我累是。"], 0, "Subject + 很 + adjective, no 是.")]
      ),
      sec(
        "Not, very, too",
        [
          `Negative: ${zh("不", "bù")} + adjective, with no 很: ${zh("我不忙", "wǒ bù máng")} (I'm not busy).`,
          `Stronger: ${zh("非常", "fēicháng")} (very, extremely): ${zh("非常好", "fēicháng hǎo")}. Too much: ${zh("太", "tài")} + adjective + ${zh("了", "le")}: ${zh("太贵了", "tài guì le")} (too expensive), ${zh("太好了！", "tài hǎo le!")} (great!).`,
          `Questions: ${zh("你忙吗？", "nǐ máng ma?")} or ${zh("你忙不忙？", "nǐ máng bu máng?")} (busy-not-busy?).`,
        ],
        [ex("我不累。", "Wǒ bú lèi.", "I'm not tired."), ex("太好了！", "Tài hǎo le!", "Great!"), ex("你忙不忙？", "Nǐ máng bu máng?", "Are you busy?")],
        [fb("Complete (characters or pinyin).", "太热___！(It's too hot!)", "了", "le", "太...了: too...")]
      ),
      sec(
        "Common adjectives",
        [
          `${zh("好", "hǎo")} good, ${zh("大", "dà")} big, ${zh("小", "xiǎo")} small, ${zh("多", "duō")} many, ${zh("少", "shǎo")} few, ${zh("冷", "lěng")} cold, ${zh("热", "rè")} hot, ${zh("忙", "máng")} busy, ${zh("累", "lèi")} tired, ${zh("高兴", "gāoxìng")} happy, ${zh("漂亮", "piàoliang")} pretty.`,
        ],
        [ex("这个很大。", "Zhège hěn dà.", "This one is big."), ex("你妹妹很漂亮。", "Nǐ mèimei hěn piàoliang.", "Your younger sister is pretty.")]
      ),
    ],
    [
      wo(["我", "今天", "很", "累"], "I'm tired today.", "Time words go before the verb or adjective: 我今天很累.", [["今天", "我", "很", "累"]]),
      wo(["这", "本", "书", "太", "贵", "了"], "This book is too expensive.", "太 + adjective + 了."),
      mc("Which sentence is correct?", ["她很漂亮。", "她是漂亮。", "她是很漂亮。", "她很是漂亮。"], 0, "No 是 with adjectives."),
      fb("Complete (characters or pinyin).", "我___忙。(I'm not busy.)", "不", "bù", "不 + adjective; no 很 needed."),
      fb("Complete (characters or pinyin).", "今天天气___好！(The weather is extremely good today!)", "非常", "fēicháng", "非常: extremely."),
      mt("Match the opposites.", [["大", "小"], ["冷", "热"], ["多", "少"], ["忙", "不忙"]], "Big/small, cold/hot, many/few, busy/not busy."),
      toEn("太好了！", "Tài hǎo le!", "Great!", "太好了 literally \"too good\" -- an exclamation of delight.", ["That's great!", "Excellent!", "Wonderful!", "Too good!"]),
      toZh("I'm very happy.", "我很高兴", "wǒ hěn gāoxìng", "Subject + 很 + adjective.", ["我非常高兴"]),
      listen("你忙不忙？", "What's the question?", ["Are you busy?", "Are you tired?", "Are you happy?", "Are you cold?"], 0, "忙不忙: busy or not busy?"),
    ],
    { teaches: ["grammar.adjective-predicates", "grammar.tai-le", "grammar.a-not-a"], previews: ["grammar.le-completed"] }
  ),

  lesson(
    A,
    "zh-dates",
    "Days, Dates and Weekdays",
    "Today, tomorrow and yesterday, the months and weekdays, and asking the date.",
    "9 min",
    [
      sec(
        "Today, tomorrow, yesterday",
        [
          `${zh("今天", "jīntiān")} today, ${zh("明天", "míngtiān")} tomorrow, ${zh("昨天", "zuótiān")} yesterday. Likewise ${zh("今年", "jīnnián")} this year, ${zh("明年", "míngnián")} next year, ${zh("去年", "qùnián")} last year.`,
          "Time words go at the start of the sentence or right after the subject -- never at the end: 我明天去 or 明天我去 (I'm going tomorrow).",
        ],
        [ex("今天", "jīntiān", "today"), ex("明天", "míngtiān", "tomorrow"), ex("昨天", "zuótiān", "yesterday")],
        [wo(["我", "明天", "去", "北京"], "I'm going to Beijing tomorrow.", "Time word after the subject (or first), before the verb.", [["明天", "我", "去", "北京"]])]
      ),
      sec(
        "Months and dates",
        [
          `Months are numbered: ${zh("一月", "yīyuè")} January, ${zh("二月", "èryuè")} February ... ${zh("十二月", "shí'èryuè")} December. Days are number + ${zh("号", "hào")} (spoken) or ${zh("日", "rì")} (written): ${zh("五月一号", "wǔyuè yī hào")} (May 1).`,
          `Dates go from big to small: year, month, day. ${zh("二〇二五年十月三号", "èr líng èr wǔ nián shíyuè sān hào")} -- the year is read digit by digit.`,
          `${zh("今天几号？", "jīntiān jǐ hào?")} -- \"what's the date today?\" ${zh("你的生日是几月几号？", "nǐ de shēngrì shì jǐ yuè jǐ hào?")} -- \"when is your birthday?\"`,
        ],
        [ex("五月一号", "wǔyuè yī hào", "May 1"), ex("今天几号？", "Jīntiān jǐ hào?", "What's the date today?"), ex("生日", "shēngrì", "birthday")],
        [mc("How do you say October 3?", ["十月三号", "三号十月", "三月十号", "十三月"], 0, "Month before day: 十月三号.")]
      ),
      sec(
        "Days of the week",
        [
          `${zh("星期", "xīngqī")} is \"week.\" Monday to Saturday are just numbered: ${zh("星期一", "xīngqīyī")} Monday, ${zh("星期二", "xīngqī'èr")} Tuesday ... ${zh("星期六", "xīngqīliù")} Saturday. Sunday is ${zh("星期天", "xīngqītiān")} or ${zh("星期日", "xīngqīrì")}.`,
          `${zh("今天星期几？", "jīntiān xīngqī jǐ?")} -- \"what day is it today?\"`,
        ],
        [ex("星期一", "xīngqīyī", "Monday"), ex("星期五", "xīngqīwǔ", "Friday"), ex("星期天", "xīngqītiān", "Sunday")],
        [mc("What is 星期三?", ["Wednesday", "Tuesday", "Thursday", "Saturday"], 0, "Week-three: Monday is 1, so 3 is Wednesday.")]
      ),
    ],
    [
      mt("Match the days.", [["星期一", "Monday"], ["星期四", "Thursday"], ["星期六", "Saturday"], ["星期天", "Sunday"]], "Monday is 1; Sunday is 天 or 日."),
      mt("Match the months.", [["一月", "January"], ["六月", "June"], ["九月", "September"], ["十二月", "December"]], "Months are numbered."),
      fb("Complete (characters or pinyin).", "今天星期___？(What day is it today?)", "几", "jǐ", "星期几: which weekday."),
      fb("Complete (characters or pinyin).", "___天是星期五。(Yesterday was Friday.)", "昨", "zuó", "昨天 (zuótiān): yesterday."),
      wo(["我", "的", "生日", "是", "八月", "十号"], "My birthday is August 10.", "Month before day."),
      mc("Where does a time word like 明天 go?", ["Before the verb (at the start or after the subject)", "At the end of the sentence", "After the verb", "After the object"], 0, "Time comes before the action in Chinese."),
      toEn("明天星期六。", "Míngtiān xīngqīliù.", "Tomorrow is Saturday.", "Dates and weekdays often need no 是.", ["Tomorrow's Saturday."]),
      toZh("today", "今天", "jīntiān", "今天 (jīntiān)."),
      listen("今天十月一号。", "What's the date?", ["October 1", "January 10", "October 10", "November 1"], 0, "十月一号: October 1 -- China's National Day."),
    ],
    { teaches: ["vocab.dates", "grammar.time-before-verb"] }
  ),

  lesson(
    A,
    "zh-telling-time",
    "Telling the Time and Daily Routine",
    "What time it is, parts of the day, and saying when you do things.",
    "9 min",
    [
      sec(
        "What time is it?",
        [
          `${zh("现在几点？", "xiànzài jǐ diǎn?")} -- \"now how many o'clock?\" ${zh("点", "diǎn")} is o'clock, ${zh("分", "fēn")} is minute, ${zh("半", "bàn")} is half past: ${zh("三点", "sān diǎn")} 3:00, ${zh("三点十分", "sān diǎn shí fēn")} 3:10, ${zh("三点半", "sān diǎn bàn")} 3:30.`,
          `2 o'clock is ${zh("两点", "liǎng diǎn")} (两 before 点).`,
        ],
        [ex("现在几点？", "Xiànzài jǐ diǎn?", "What time is it now?"), ex("两点半", "liǎng diǎn bàn", "half past two"), ex("八点十五分", "bā diǎn shíwǔ fēn", "8:15")],
        [mc("How do you say 2:30?", ["两点半", "二点半", "半两点", "两半点"], 0, "两 before 点, and 半 after.")]
      ),
      sec(
        "Parts of the day",
        [
          `${zh("早上", "zǎoshang")} early morning, ${zh("上午", "shàngwǔ")} morning (before noon), ${zh("中午", "zhōngwǔ")} noon, ${zh("下午", "xiàwǔ")} afternoon, ${zh("晚上", "wǎnshang")} evening/night.`,
          `They go before the clock time -- big to small again: ${zh("下午三点", "xiàwǔ sān diǎn")} (3 p.m.), ${zh("晚上八点", "wǎnshang bā diǎn")} (8 p.m.).`,
        ],
        [ex("上午九点", "shàngwǔ jiǔ diǎn", "9 a.m."), ex("晚上八点", "wǎnshang bā diǎn", "8 p.m.")],
        [mc("What is 下午四点?", ["4 p.m.", "4 a.m.", "4:30", "14:04"], 0, "下午 afternoon + 四点.")]
      ),
      sec(
        "When you do things",
        [
          `Time comes before the verb: ${zh("我七点吃饭", "wǒ qī diǎn chī fàn")} (I eat at seven), ${zh("她晚上工作", "tā wǎnshang gōngzuò")} (she works in the evening), ${zh("我十一点睡觉", "wǒ shíyī diǎn shuì jiào")} (I go to bed at eleven).`,
          `English \"at seven\" has no \"at\" in Chinese -- the time word just sits before the verb.`,
        ],
        [ex("我七点吃饭。", "Wǒ qī diǎn chī fàn.", "I eat at seven."), ex("他晚上工作。", "Tā wǎnshang gōngzuò.", "He works in the evening.")],
        [wo(["我", "十一", "点", "睡觉"], "I go to bed at eleven.", "Subject + time + verb.")]
      ),
    ],
    [
      listen("现在三点半。", "What time is it?", ["3:30", "3:00", "13:30", "half past four"], 0, "三点半: half past three."),
      listen("晚上八点。", "When?", ["8 p.m.", "8 a.m.", "8:30", "18:00 tomorrow"], 0, "晚上 + 八点 = 8 in the evening."),
      fb("Complete (characters or pinyin).", "现在几___？(What time is it?)", "点", "diǎn", "几点: what time."),
      fb("Complete (characters or pinyin).", "我们___点吃饭。(We eat at two.)", "两", "liǎng", "两 before 点."),
      wo(["她", "下午", "三", "点", "工作"], "She works at 3 p.m.", "Time before the verb.", [["下午", "三", "点", "她", "工作"]]),
      mc("Which is correct for \"I eat at seven\"?", ["我七点吃饭。", "我吃饭七点。", "我吃饭在七点。", "七点吃饭我。"], 0, "Time goes before the verb."),
      mt("Match the parts of the day.", [["上午", "morning (before noon)"], ["中午", "noon"], ["下午", "afternoon"], ["晚上", "evening"]], "Parts of the day go before the clock time."),
      toEn("我十点睡觉。", "Wǒ shí diǎn shuì jiào.", "I go to bed at ten.", "睡觉 (shuì jiào): to sleep, go to bed.", ["I sleep at ten.", "I go to sleep at ten.", "I go to bed at 10.", "I sleep at 10."]),
      say("现在几点？现在九点十分。", "\"What time is it? It's 9:10.\"", "jiǔ diǎn: two third tones, so jiú diǎn."),
    ],
    { teaches: ["vocab.clock-time"] }
  ),

  lesson(
    A,
    "zh-places-zai",
    "Where Things Are: 在 and Places",
    "Saying where someone or something is, asking \"where?\", and doing things at a place.",
    "8 min",
    [
      sec(
        "在: to be at",
        [
          `${zh("在", "zài")} means \"to be at/in\": ${zh("我在家", "wǒ zài jiā")} (I'm at home), ${zh("老师在学校", "lǎoshī zài xuéxiào")} (the teacher is at school). No 是 is needed.`,
          `Negative: ${zh("不在", "bú zài")} -- ${zh("他不在家", "tā bú zài jiā")} (he's not home). Question: ${zh("你在哪儿？", "nǐ zài nǎr?")} (where are you?) or ${zh("你在哪里？", "nǐ zài nǎlǐ?")}.`,
        ],
        [ex("我在家。", "Wǒ zài jiā.", "I'm at home."), ex("你在哪儿？", "Nǐ zài nǎr?", "Where are you?"), ex("他不在。", "Tā bú zài.", "He's not here.")],
        [mc("How do you say \"Mom is at the hospital\"?", ["妈妈在医院。", "妈妈是医院。", "妈妈有医院。", "妈妈医院在是。"], 0, "Person + 在 + place.")]
      ),
      sec(
        "Places around town",
        [
          `${zh("家", "jiā")} home, ${zh("学校", "xuéxiào")} school, ${zh("医院", "yīyuàn")} hospital, ${zh("商店", "shāngdiàn")} shop, ${zh("饭店", "fàndiàn")} restaurant (also hotel), ${zh("公司", "gōngsī")} company/office, ${zh("这儿", "zhèr")} here, ${zh("那儿", "nàr")} there.`,
          `Cities: ${zh("北京", "Běijīng")}, ${zh("上海", "Shànghǎi")}. ${zh("我住在北京", "wǒ zhù zài Běijīng")} -- \"I live in Beijing.\"`,
        ],
        [ex("商店", "shāngdiàn", "shop"), ex("饭店", "fàndiàn", "restaurant"), ex("我住在上海。", "Wǒ zhù zài Shànghǎi.", "I live in Shanghai.")]
      ),
      sec(
        "Doing something at a place",
        [
          `To say where an action happens, 在 + place goes before the verb: ${zh("我在学校学习", "wǒ zài xuéxiào xuéxí")} (I study at school), ${zh("她在公司工作", "tā zài gōngsī gōngzuò")} (she works at a company).`,
          `English puts the place at the end (\"I study at school\"); Chinese puts it before the verb: \"I at-school study.\"`,
        ],
        [ex("我在学校学习。", "Wǒ zài xuéxiào xuéxí.", "I study at school."), ex("她在饭店吃饭。", "Tā zài fàndiàn chī fàn.", "She's eating at a restaurant.")],
        [wo(["他", "在", "医院", "工作"], "He works at a hospital.", "在 + place before the verb.")]
      ),
    ],
    [
      wo(["我", "在", "商店"], "I'm at the shop.", "Person + 在 + place."),
      wo(["我们", "在", "家", "吃饭"], "We eat at home.", "在 + place before the verb."),
      fb("Complete (characters or pinyin).", "你在___儿？(Where are you?)", "哪", "nǎ", "哪儿 (nǎr): where."),
      fb("Complete (characters or pinyin).", "爸爸不___家。(Dad isn't home.)", "在", "zài", "不在: not at."),
      mc("Which is correct for \"I study at school\"?", ["我在学校学习。", "我学习在学校。", "我学习学校在。", "在我学校学习。"], 0, "在 + place comes before the verb."),
      mt("Match the places.", [["医院", "hospital"], ["学校", "school"], ["商店", "shop"], ["公司", "company"]], "Places around town."),
      toEn("我住在北京。", "Wǒ zhù zài Běijīng.", "I live in Beijing.", "住在: to live in.", []),
      toZh("Where is the teacher?", "老师在哪儿", "lǎoshī zài nǎr", "Question word in place: 老师在哪儿？", ["老师在哪里"]),
      listen("她在饭店。", "Where is she?", ["At a restaurant", "At school", "At home", "At the hospital"], 0, "饭店 (fàndiàn): restaurant."),
    ],
    { teaches: ["grammar.zai-location", "grammar.nar-where", "grammar.zai-place-verb"] }
  ),

  lesson(
    A,
    "zh-position-words",
    "On, Under, In, Next To: Position Words",
    "Saying exactly where things are -- and the two ways to say \"there is.\"",
    "9 min",
    [
      sec(
        "Thing + position word",
        [
          `Position words come after the noun: ${zh("桌子上", "zhuōzi shang")} (on the table -- \"table-top\"), ${zh("椅子下", "yǐzi xià")} (under the chair), ${zh("家里", "jiā li")} (at home, inside the home), ${zh("书包里", "shūbāo li")} (in the schoolbag).`,
          `Longer forms: ${zh("前面", "qiánmiàn")} in front, ${zh("后面", "hòumiàn")} behind, ${zh("旁边", "pángbiān")} next to: ${zh("学校旁边", "xuéxiào pángbiān")} (next to the school).`,
        ],
        [ex("桌子上", "zhuōzi shang", "on the table"), ex("椅子下", "yǐzi xià", "under the chair"), ex("学校旁边", "xuéxiào pángbiān", "next to the school")],
        [mc("How do you say \"in the bag\"?", ["包里", "里包", "在包", "包在"], 0, "Noun + position word: 包里.")]
      ),
      sec(
        "Where is it? -- 在",
        [
          `Known thing + 在 + place: ${zh("你的手机在桌子上", "nǐ de shǒujī zài zhuōzi shang")} (your phone is on the table). ${zh("猫在椅子下面", "māo zài yǐzi xiàmiàn")} (the cat is under the chair).`,
        ],
        [ex("手机在桌子上。", "Shǒujī zài zhuōzi shang.", "The phone is on the table.")],
        [wo(["书", "在", "桌子", "上"], "The book is on the table.", "Thing + 在 + place.")]
      ),
      sec(
        "What's there? -- 有",
        [
          `Place + 有 + new thing: ${zh("桌子上有一本书", "zhuōzi shang yǒu yì běn shū")} (there's a book on the table). ${zh("学校旁边有一个商店", "xuéxiào pángbiān yǒu yí ge shāngdiàn")} (there's a shop next to the school).`,
          `Rule of thumb: use 在 when you already know the thing (\"the book\") and want its place; use 有 when the place is known and you're introducing what's there (\"a book\").`,
        ],
        [ex("桌子上有一本书。", "Zhuōzi shang yǒu yì běn shū.", "There's a book on the table."), ex("家里没有人。", "Jiā li méiyǒu rén.", "There's nobody at home.")],
        [mc("Which means \"There's a cat under the chair\"?", ["椅子下有一只猫。", "猫在椅子下。", "椅子在猫下。", "有椅子下猫。"], 0, "Place + 有 + new thing. (猫在椅子下 is \"The cat is under the chair.\")")]
      ),
    ],
    [
      wo(["桌子", "上", "有", "两", "杯", "茶"], "There are two cups of tea on the table.", "Place + 有 + thing."),
      wo(["你", "的", "手机", "在", "椅子", "上"], "Your phone is on the chair.", "Thing + 在 + place."),
      fb("Complete (characters or pinyin).", "书包___有三本书。(There are three books in the schoolbag.)", "里", "lǐ", "里: inside.", { altAnswers: ["li"] }),
      fb("Complete (characters or pinyin).", "学校旁边___一个饭店。(There's a restaurant next to the school.)", "有", "yǒu", "Place + 有 + new thing."),
      mt("Match the position words.", [["上", "on; above"], ["下", "under; below"], ["里", "in; inside"], ["旁边", "next to"]], "Position words come after the noun."),
      mc("You're looking for your keys and someone tells you where they are. Which word do they use?", ["在", "有", "是", "的"], 0, "The keys are known; you want their place: 钥匙在..."),
      toEn("家里没有人。", "Jiā li méiyǒu rén.", "There's nobody at home.", "Place + 没有 + thing: there isn't.", ["There is nobody at home.", "Nobody is home.", "No one is at home.", "There's no one at home.", "Nobody is at home."]),
      toZh("next to the hospital", "医院旁边", "yīyuàn pángbiān", "Noun + 旁边."),
      listen("猫在桌子下。", "Where's the cat?", ["Under the table", "On the table", "Next to the table", "In the bag"], 0, "桌子下: under the table."),
    ],
    { teaches: ["grammar.position-words", "grammar.you-existence"] }
  ),

  lesson(
    A,
    "zh-question-words",
    "Question Words: 什么, 谁, 哪儿, 什么时候, 怎么",
    "Asking what, who, where, when and how -- without changing the word order.",
    "9 min",
    [
      sec(
        "The answer's slot",
        [
          `Chinese question words sit exactly where the answer will go; the rest of the sentence keeps statement order. ${zh("他是谁？", "tā shì shéi?")} (who is he?) → ${zh("他是我哥哥。", "tā shì wǒ gēge.")}`,
          `${zh("你喝什么？", "nǐ hē shénme?")} (what are you drinking?) → ${zh("我喝茶。", "wǒ hē chá.")} No 吗 is added -- the question word already makes it a question.`,
        ],
        [ex("他是谁？", "Tā shì shéi?", "Who is he?"), ex("你喝什么？", "Nǐ hē shénme?", "What are you drinking?")],
        [mc("Which is a correct question?", ["你吃什么？", "什么你吃？", "你吃什么吗？", "你什么吃？"], 0, "The question word takes the object's place, and no 吗.")]
      ),
      sec(
        "Where, when, how",
        [
          `${zh("哪儿", "nǎr")} / ${zh("哪里", "nǎlǐ")} where: ${zh("你去哪儿？", "nǐ qù nǎr?")} (where are you going?).`,
          `${zh("什么时候", "shénme shíhou")} when (\"what time\"): it goes before the verb like any time word -- ${zh("你什么时候来？", "nǐ shénme shíhou lái?")} (when are you coming?).`,
          `${zh("怎么", "zěnme")} + verb asks how to do something: ${zh("这个字怎么读？", "zhège zì zěnme dú?")} (how do you read this character?). ${zh("怎么样", "zěnmeyàng")} asks \"how is it?\": ${zh("你的中文怎么样？", "nǐ de Zhōngwén zěnmeyàng?")}`,
        ],
        [ex("你去哪儿？", "Nǐ qù nǎr?", "Where are you going?"), ex("你什么时候来？", "Nǐ shénme shíhou lái?", "When are you coming?"), ex("这个字怎么读？", "Zhège zì zěnme dú?", "How do you read this character?")],
        [wo(["你", "什么", "时候", "回", "家"], "When are you going home?", "什么时候 goes before the verb, like any time word.")]
      ),
    ],
    [
      mt("Match each question word to its meaning.", [["谁", "who"], ["什么", "what"], ["哪儿", "where"], ["怎么", "how"]], "Each one sits where the answer goes."),
      fb("Complete (characters or pinyin).", "你叫___名字？(What's your name?)", "什么", "shénme", "什么: what."),
      fb("Complete (characters or pinyin).", "她是___？(Who is she?)", "谁", "shéi", "谁: who.", { altAnswers: ["shuí"] }),
      fb("Complete (characters or pinyin).", "这个字___读？(How do you read this character?)", "怎么", "zěnme", "怎么 + verb: how to..."),
      wo(["你", "在", "哪儿", "工作"], "Where do you work?", "在 + 哪儿 before the verb, like 在 + place."),
      ms("Which questions are correct? (Choose all that apply.)", ["你去哪儿？", "你什么时候来？", "你去哪儿吗？", "谁是他？"], [0, 1], "No 吗 after a question word; and the question word takes the answer's slot (他是谁？)."),
      toEn("你的中文怎么样？", "Nǐ de Zhōngwén zěnmeyàng?", "How is your Chinese?", "怎么样: how is it?", ["How's your Chinese?"]),
      toZh("What are you drinking?", "你喝什么", "nǐ hē shénme", "Object slot → 什么."),
      listen("你什么时候来？", "What's the question?", ["When are you coming?", "Where are you going?", "Who is coming?", "How are you coming?"], 0, "什么时候: when."),
    ],
    { teaches: ["grammar.question-words"] }
  ),

  lesson(
    A,
    "zh-wanting-ordering",
    "Wanting and Ordering: 想 and 要",
    "Saying what you'd like and what you want -- and ordering food and drinks.",
    "9 min",
    [
      sec(
        "想 and 要",
        [
          `${zh("想", "xiǎng")} + verb is \"would like to\": ${zh("我想喝茶", "wǒ xiǎng hē chá")} (I'd like to drink tea). It's soft and polite.`,
          `${zh("要", "yào")} is firmer \"want\" -- and is used with nouns too: ${zh("我要一杯咖啡", "wǒ yào yì bēi kāfēi")} (I want a coffee). When ordering, 要 is completely normal and not rude.`,
          `Negative: ${zh("不想", "bù xiǎng")} (don't feel like), ${zh("不要", "bú yào")} (don't want; also \"don't!\").`,
        ],
        [ex("我想喝茶。", "Wǒ xiǎng hē chá.", "I'd like to drink some tea."), ex("我要一杯咖啡。", "Wǒ yào yì bēi kāfēi.", "I'll have a coffee."), ex("我不想去。", "Wǒ bù xiǎng qù.", "I don't feel like going.")],
        [mc("Which is the gentlest way to say \"I'd like to eat rice\"?", ["我想吃米饭。", "我要米饭！", "米饭！", "给我米饭。"], 0, "想 + verb is soft and polite.")]
      ),
      sec(
        "At a restaurant",
        [
          `Call the waiter: ${zh("服务员！", "fúwùyuán!")} Then order: ${zh("我要...", "wǒ yào...")} or ${zh("来...", "lái...")} (\"bring...\"): ${zh("来两碗米饭", "lái liǎng wǎn mǐfàn")} (two bowls of rice -- ${zh("碗", "wǎn")} is the measure word for bowls).`,
          `Food and drink: ${zh("米饭", "mǐfàn")} rice, ${zh("菜", "cài")} dish, ${zh("面条", "miàntiáo")} noodles, ${zh("水", "shuǐ")} water, ${zh("茶", "chá")} tea, ${zh("咖啡", "kāfēi")} coffee, ${zh("苹果", "píngguǒ")} apple.`,
          `To pay: ${zh("买单！", "mǎi dān!")} (the bill, please!).`,
        ],
        [ex("服务员！", "Fúwùyuán!", "Waiter!"), ex("来两碗米饭。", "Lái liǎng wǎn mǐfàn.", "Two bowls of rice, please."), ex("买单！", "Mǎi dān!", "The bill, please!")],
        [fb("Complete (characters or pinyin).", "我___一杯水。(I'll have a glass of water.)", "要", "yào", "要 + noun when ordering.")]
      ),
    ],
    [
      wo(["我", "想", "吃", "面条"], "I'd like to eat noodles.", "想 + verb."),
      wo(["我", "要", "两", "杯", "咖啡"], "I'll have two coffees.", "要 + number + measure word + noun."),
      fb("Complete (characters or pinyin).", "你___喝什么？(What would you like to drink?)", "想", "xiǎng", "想 + verb: would like to."),
      mc("Can 想 go directly before a noun to mean \"want (a thing)\"?", ["No -- use 要 with nouns; 想 needs a verb", "Yes, always", "Only with drinks", "Only in questions"], 0, "想 + noun means \"miss\" (想家, to miss home). For wanting a thing, use 要."),
      mt("Match the food and drink.", [["米饭", "rice"], ["面条", "noodles"], ["咖啡", "coffee"], ["苹果", "apple"]], "Restaurant words."),
      toEn("我不想去。", "Wǒ bù xiǎng qù.", "I don't want to go.", "不想: don't feel like.", ["I don't feel like going.", "I do not want to go.", "I'd rather not go."]),
      toZh("The bill, please!", "买单", "mǎi dān", "买单 (mǎi dān): to pay the bill.", ["结账"]),
      listen("服务员，来一杯茶。", "What is being ordered?", ["A cup of tea", "A bowl of rice", "A coffee", "Two cups of tea"], 0, "来一杯茶: bring a cup of tea."),
      say("服务员！我要一碗面条和一杯茶。", "Order noodles and tea.", "fúwùyuán: three rising-level syllables; say it clearly to be heard.", "Call the waiter and order a bowl of noodles and a cup of tea."),
    ],
    { teaches: ["grammar.xiang-yao", "function.ordering-food"], previews: ["grammar.gei-for"] }
  ),

  lesson(
    A,
    "zh-ability-hui-neng",
    "Can: 会 and 能",
    "Two words for \"can\": skills you've learned, and being able or allowed right now.",
    "8 min",
    [
      sec(
        "会: learned skills",
        [
          `${zh("会", "huì")} is \"can\" for things you've learned to do: ${zh("我会说中文", "wǒ huì shuō Zhōngwén")} (I can speak Chinese), ${zh("她会开车", "tā huì kāi chē")} (she can drive), ${zh("你会做饭吗？", "nǐ huì zuò fàn ma?")} (can you cook?).`,
          `${zh("不会", "bú huì")}: ${zh("我不会游泳", "wǒ bú huì yóuyǒng")} (I can't swim -- never learned).`,
        ],
        [ex("我会说中文。", "Wǒ huì shuō Zhōngwén.", "I can speak Chinese."), ex("她会开车。", "Tā huì kāi chē.", "She can drive."), ex("我不会游泳。", "Wǒ bú huì yóuyǒng.", "I can't swim.")],
        [mc("Which word fits \"Can you play the piano?\" (a skill you learn)", ["会", "能", "要", "想"], 0, "Learned skills use 会.")]
      ),
      sec(
        "能: able or allowed now",
        [
          `${zh("能", "néng")} is \"can\" when circumstances allow it: ${zh("我今天不能来", "wǒ jīntiān bù néng lái")} (I can't come today -- I'm busy), ${zh("这儿能吃饭吗？", "zhèr néng chī fàn ma?")} (can we eat here? -- is it allowed?).`,
          `Compare: ${zh("我会开车，可是今天不能开", "wǒ huì kāi chē, kěshì jīntiān bù néng kāi")} -- \"I can drive (I know how), but I can't today\" (maybe I've been drinking). 可是 (kěshì) means \"but.\"`,
        ],
        [ex("我今天不能来。", "Wǒ jīntiān bù néng lái.", "I can't come today."), ex("这儿能吃饭吗？", "Zhèr néng chī fàn ma?", "Can we eat here?")],
        [fb("Complete (characters or pinyin).", "明天我不___去。(I can't go tomorrow -- I have to work.)", "能", "néng", "Circumstances prevent it: 能.")]
      ),
    ],
    [
      fb("Complete (characters or pinyin).", "你___说中文吗？(Can you speak Chinese?)", "会", "huì", "Speaking a language is a learned skill: 会."),
      fb("Complete (characters or pinyin).", "这儿不___喝酒。(You can't drink alcohol here.)", "能", "néng", "Not allowed: 不能."),
      mc("\"I can cook\" (I know how):", ["我会做饭。", "我能做饭。", "我要做饭。", "我是做饭。"], 0, "A learned skill: 会."),
      mc("\"I'm sick, so I can't go to school today\":", ["我病了，今天不能去学校。", "我病了，今天不会去学校。", "我病了，今天没去学校会。", "我病了，今天不要学校。"], 0, "Circumstances (illness) prevent it: 不能."),
      wo(["我", "妈妈", "会", "说", "英语"], "My mom can speak English.", "会 + verb."),
      wo(["你", "明天", "能", "来", "吗"], "Can you come tomorrow?", "能 + verb, then 吗."),
      toEn("我不会开车。", "Wǒ bú huì kāi chē.", "I can't drive.", "不会: never learned how.", ["I cannot drive.", "I don't know how to drive."]),
      toZh("I can speak Chinese.", "我会说中文", "wǒ huì shuō Zhōngwén", "会 for a language skill.", ["我会说汉语", "我会讲中文"]),
      listen("我会说一点儿中文。", "What did they say?", ["I can speak a little Chinese.", "I can't speak Chinese.", "I'd like to speak Chinese.", "I'm studying Chinese."], 0, "一点儿 (yìdiǎnr): a little."),
    ],
    { teaches: ["grammar.hui-neng"], previews: ["grammar.le-completed"] }
  ),

  lesson(
    A,
    "zh-le-completed-actions",
    "Finished Actions: 了 and 没(有)",
    "Saying something happened with 了, saying it didn't with 没, and asking whether it did.",
    "9 min",
    [
      sec(
        "了 after the verb",
        [
          "Chinese verbs don't have tenses. To show an action is completed, add 了 (le) after the verb: 我买了一本书 (wǒ mǎi le yì běn shū, I bought a book).",
          `With a simple object, 了 often goes at the end instead: ${zh("我吃饭了", "wǒ chī fàn le")} (I've eaten), ${zh("他走了", "tā zǒu le")} (he's left).`,
          "了 marks completion, not past time: things that were ongoing or habitual in the past don't take it. 我以前住在北京 (I used to live in Beijing) has no 了.",
        ],
        [ex("我买了一本书。", "Wǒ mǎi le yì běn shū.", "I bought a book."), ex("我吃饭了。", "Wǒ chī fàn le.", "I've eaten."), ex("他走了。", "Tā zǒu le.", "He's left.")],
        [wo(["我", "买", "了", "两", "杯", "咖啡"], "I bought two coffees.", "Verb + 了 + number + measure word + object.")]
      ),
      sec(
        "Didn't: 没(有) without 了",
        [
          `To say something didn't happen, use ${zh("没", "méi")} or ${zh("没有", "méiyǒu")} before the verb -- and drop 了: ${zh("我没去", "wǒ méi qù")} (I didn't go), ${zh("他没吃饭", "tā méi chī fàn")} (he hasn't eaten).`,
          "Never 不 for a past action, and never 没 + 了 together.",
        ],
        [ex("我没去。", "Wǒ méi qù.", "I didn't go."), ex("他还没吃饭。", "Tā hái méi chī fàn.", "He hasn't eaten yet.")],
        [mc("\"I didn't buy it\":", ["我没买。", "我不买了。", "我没买了。", "我买没。"], 0, "没 + verb, no 了.")]
      ),
      sec(
        "Did you...?",
        [
          `Ask with 了吗 or 了没有: ${zh("你吃饭了吗？", "nǐ chī fàn le ma?")} / ${zh("你吃饭了没有？", "nǐ chī fàn le méiyǒu?")} (have you eaten? -- also a friendly greeting).`,
          `Answer ${zh("吃了", "chī le")} (yes) or ${zh("还没吃", "hái méi chī")} (not yet).`,
        ],
        [ex("你吃饭了吗？", "Nǐ chī fàn le ma?", "Have you eaten?"), ex("还没吃。", "Hái méi chī.", "Not yet.")]
      ),
    ],
    [
      fb("Complete (characters or pinyin).", "我昨天买___一本书。(I bought a book yesterday.)", "了", "le", "Verb + 了 for a completed action."),
      fb("Complete (characters or pinyin).", "他昨天___来。(He didn't come yesterday.)", "没", "méi", "没 + verb, no 了.", { altAnswers: ["没有", "méiyǒu"] }),
      ms("Which sentences are correct? (Choose all that apply.)", ["我看了电影。", "我没看电影。", "我没看了电影。", "我不看了电影昨天。"], [0, 1], "没 never combines with 了."),
      mc("Your friend asks 你吃饭了吗？ You haven't eaten. You say:", ["还没吃。", "不吃了。", "没吃了。", "吃没有。"], 0, "还没 + verb: not yet."),
      wo(["你", "看", "了", "那", "个", "电影", "吗"], "Did you see that film?", "Verb + 了 ... 吗."),
      wo(["我", "还", "没", "吃", "饭"], "I haven't eaten yet.", "还没 + verb."),
      toEn("他走了。", "Tā zǒu le.", "He's left.", "走了: has left.", ["He has left.", "He left.", "He's gone.", "He has gone."]),
      toZh("I didn't go.", "我没去", "wǒ méi qù", "没 + verb, no 了.", ["我没有去"]),
      listen("我昨天没去学校。", "What happened?", ["They didn't go to school yesterday.", "They went to school yesterday.", "They're going to school tomorrow.", "They don't go to school."], 0, "没去: didn't go."),
    ],
    { teaches: ["grammar.le-completed", "grammar.mei-past", "grammar.hai-mei"] }
  ),

  lesson(
    A,
    "zh-getting-around",
    "Going Places: 去, 来, 回 and Transport",
    "Going and coming, going home, and saying how you travel.",
    "9 min",
    [
      sec(
        "去, 来, 回",
        [
          `${zh("去", "qù")} go (away from here), ${zh("来", "lái")} come (toward here), ${zh("回", "huí")} return: ${zh("我去商店", "wǒ qù shāngdiàn")} (I'm going to the shop), ${zh("你来我家吧", "nǐ lái wǒ jiā ba")} (come to my place), ${zh("我回家", "wǒ huí jiā")} (I'm going home).`,
          `No word for \"to\" is needed: the place follows the verb directly. 吧 (ba) at the end softens a suggestion: \"let's\" / \"why don't you.\"`,
        ],
        [ex("我去商店。", "Wǒ qù shāngdiàn.", "I'm going to the shop."), ex("你来我家吧。", "Nǐ lái wǒ jiā ba.", "Come over to my place."), ex("我回家了。", "Wǒ huí jiā le.", "I've gone home / I'm home.")],
        [mc("You're at work and say you're heading home. Which verb?", ["回", "来", "是", "在"], 0, "回家: to return home.")]
      ),
      sec(
        "How you travel",
        [
          `${zh("坐", "zuò")} (sit, ride) + vehicle + 去 + place: ${zh("我坐出租车去机场", "wǒ zuò chūzūchē qù jīchǎng")} (I'm taking a taxi to the airport). Vehicles: ${zh("出租车", "chūzūchē")} taxi, ${zh("飞机", "fēijī")} plane, ${zh("火车", "huǒchē")} train, ${zh("公共汽车", "gōnggòng qìchē")} bus, ${zh("地铁", "dìtiě")} subway.`,
          `Drive: ${zh("开车", "kāi chē")}. On foot: ${zh("走路", "zǒulù")}. Ask how: ${zh("你怎么去？", "nǐ zěnme qù?")} (how are you getting there?).`,
        ],
        [ex("我坐飞机去北京。", "Wǒ zuò fēijī qù Běijīng.", "I'm flying to Beijing."), ex("你怎么去？", "Nǐ zěnme qù?", "How are you getting there?"), ex("我走路去。", "Wǒ zǒulù qù.", "I'm walking there.")],
        [wo(["我", "坐", "地铁", "去", "公司"], "I take the subway to the office.", "坐 + vehicle + 去 + place.")]
      ),
    ],
    [
      wo(["他", "坐", "火车", "去", "上海"], "He's taking the train to Shanghai.", "How you go comes before where you go."),
      wo(["我们", "明天", "回", "家"], "We're going home tomorrow.", "Time before the verb; 回家.", [["明天", "我们", "回", "家"]]),
      fb("Complete (characters or pinyin).", "你___么去机场？(How are you getting to the airport?)", "怎", "zěn", "怎么: how."),
      fb("Complete (characters or pinyin).", "我___出租车去。(I'm taking a taxi.)", "坐", "zuò", "坐 + vehicle."),
      mc("Which is right for \"I'm going to Beijing by plane\"?", ["我坐飞机去北京。", "我去北京坐飞机在。", "我去坐北京飞机。", "飞机我去北京坐。"], 0, "坐 + vehicle + 去 + place."),
      mt("Match the transport.", [["出租车", "taxi"], ["飞机", "plane"], ["地铁", "subway"], ["火车", "train"]], "Ride any of these with 坐."),
      toEn("你来我家吧。", "Nǐ lái wǒ jiā ba.", "Come to my house.", "吧 softens the suggestion.", ["Come to my place.", "Come over to my house.", "Come over to my place.", "Why don't you come to my house?"]),
      toZh("I'm going home.", "我回家", "wǒ huí jiā", "回家: return home.", ["我要回家", "我回家了"]),
      listen("我走路去学校。", "How do they get to school?", ["On foot", "By bus", "By taxi", "By subway"], 0, "走路: walk."),
    ],
    { teaches: ["grammar.transport", "grammar.ba-suggestion"] }
  ),

  lesson(
    A,
    "zh-weather-likes",
    "Weather, Likes and Opinions",
    "Talking about the weather, saying what you like, and asking \"how is it?\"",
    "8 min",
    [
      sec(
        "The weather",
        [
          `${zh("天气", "tiānqì")} weather: ${zh("今天天气怎么样？", "jīntiān tiānqì zěnmeyàng?")} (how's the weather today?). ${zh("很好", "hěn hǎo")} nice, ${zh("很冷", "hěn lěng")} cold, ${zh("很热", "hěn rè")} hot, ${zh("下雨", "xià yǔ")} it's raining (\"falls rain\"), ${zh("下雪", "xià xuě")} it's snowing.`,
          `${zh("下雨了", "xià yǔ le")} -- \"it's started raining\": 了 at the end announces a new situation.`,
        ],
        [ex("今天天气怎么样？", "Jīntiān tiānqì zěnmeyàng?", "How's the weather today?"), ex("今天很热。", "Jīntiān hěn rè.", "It's hot today."), ex("下雨了。", "Xià yǔ le.", "It's (started) raining.")],
        [mc("How do you say \"It's snowing\"?", ["下雪了。", "雪下了是。", "是雪。", "很雪。"], 0, "下雪: \"falls snow.\"")]
      ),
      sec(
        "喜欢: to like",
        [
          `${zh("喜欢", "xǐhuan")} + noun or verb: ${zh("我喜欢猫", "wǒ xǐhuan māo")} (I like cats), ${zh("我喜欢看书", "wǒ xǐhuan kàn shū")} (I like reading). ${zh("很喜欢", "hěn xǐhuan")} is \"really like\"; ${zh("不喜欢", "bù xǐhuan")} is \"don't like.\"`,
          `${zh("你喜欢什么？", "nǐ xǐhuan shénme?")} -- what do you like?`,
        ],
        [ex("我很喜欢中国菜。", "Wǒ hěn xǐhuan Zhōngguó cài.", "I really like Chinese food."), ex("她不喜欢下雨。", "Tā bù xǐhuan xià yǔ.", "She doesn't like rain.")],
        [wo(["我", "喜欢", "喝", "茶"], "I like drinking tea.", "喜欢 + verb + object.")]
      ),
      sec(
        "怎么样: how is it?",
        [
          `${zh("怎么样", "zěnmeyàng")} at the end asks for an opinion: ${zh("这个饭店怎么样？", "zhège fàndiàn zěnmeyàng?")} (how's this restaurant?) → ${zh("很好吃！", "hěn hǎochī!")} (really tasty!). It also makes suggestions: ${zh("我们去看电影，怎么样？", "wǒmen qù kàn diànyǐng, zěnmeyàng?")} (let's see a film -- how about it?).`,
        ],
        [ex("这个饭店怎么样？", "Zhège fàndiàn zěnmeyàng?", "How's this restaurant?"), ex("很好吃！", "Hěn hǎochī!", "Really tasty!")]
      ),
    ],
    [
      fb("Complete (characters or pinyin).", "今天天气___？(How's the weather today?)", "怎么样", "zěnmeyàng", "怎么样: how is it?"),
      fb("Complete (characters or pinyin).", "我很___看电影。(I really like watching films.)", "喜欢", "xǐhuan", "喜欢 + verb."),
      mt("Match the weather.", [["很冷", "cold"], ["很热", "hot"], ["下雨", "raining"], ["下雪", "snowing"]], "Weather words."),
      wo(["我", "不", "喜欢", "下雨"], "I don't like rain.", "不 + 喜欢."),
      wo(["明天", "我们", "去", "北京", "怎么样"], "Let's go to Beijing tomorrow -- how about it?", "Suggestion + 怎么样.", [["我们", "明天", "去", "北京", "怎么样"]]),
      mc("What does 下雨了 mean?", ["It's started raining.", "It rained yesterday.", "It isn't raining.", "Will it rain?"], 0, "了 at the end announces a new situation."),
      toEn("我很喜欢中国菜。", "Wǒ hěn xǐhuan Zhōngguó cài.", "I really like Chinese food.", "很喜欢: really like.", ["I like Chinese food a lot.", "I like Chinese food very much.", "I love Chinese food."]),
      toZh("It's very cold today.", "今天很冷", "jīntiān hěn lěng", "Time + 很 + adjective.", ["今天非常冷", "今天天气很冷"]),
      listen("今天很热。", "What's the weather like?", ["Hot", "Cold", "Raining", "Snowing"], 0, "热 (rè): hot."),
    ],
    { teaches: ["vocab.weather", "grammar.xihuan", "grammar.le-new-situation"] }
  ),

  lesson(
    A,
    "zh-a1-review",
    "A1 Review: Putting It All Together",
    "A cumulative check of everything in A1 -- introductions, 是, questions, numbers, measure words, places, time, wanting, ability and 了.",
    "10 min",
    [
      sec(
        "A conversation",
        [
          "Read the dialogue, then answer the questions below.",
          "A: 你好！我叫王芳。你叫什么名字？ B: 我叫Tom，我是美国人。认识你很高兴！ A: 我也很高兴。你会说中文吗？ B: 会一点儿。我在北京学习中文。 A: 你什么时候去上海？ B: 我十月去上海。",
        ],
        [ex("你会说中文吗？", "Nǐ huì shuō Zhōngwén ma?", "Can you speak Chinese?"), ex("会一点儿。", "Huì yìdiǎnr.", "A little.")]
      ),
    ],
    [
      mc("In the dialogue, where does Tom study Chinese?", ["In Beijing", "In America", "In Shanghai", "At home"], 0, "我在北京学习中文: I study Chinese in Beijing."),
      mc("When is Tom going to Shanghai?", ["In October", "On the 10th", "In ten days", "At ten o'clock"], 0, "十月: October."),
      wo(["我", "家", "有", "四", "口", "人"], "There are four people in my family.", "有 + number + 口 + 人."),
      wo(["我", "在", "学校", "学习", "中文"], "I study Chinese at school.", "在 + place before the verb."),
      fb("Complete (characters or pinyin).", "我___有哥哥。(I don't have an older brother.)", "没", "méi", "没有, never 不有."),
      fb("Complete (characters or pinyin).", "这本书多少___？(How much is this book?)", "钱", "qián", "多少钱: how much."),
      fb("Complete (characters or pinyin).", "我昨天没___学校。(I didn't go to school yesterday.)", "去", "qù", "没 + verb, no 了."),
      ms("Which sentences are correct? (Choose all that apply.)", ["她很忙。", "我会开车。", "我是很累。", "我不有钱。"], [0, 1], "No 是 with adjectives; 有 is negated with 没."),
      mt("Match the questions and answers.", [["你叫什么名字？", "我叫李明。"], ["你是哪国人？", "我是英国人。"], ["现在几点？", "三点半。"], ["你去哪儿？", "我去商店。"]], "Each answer fills the question word's slot."),
      toEn("我想喝一杯咖啡。", "Wǒ xiǎng hē yì bēi kāfēi.", "I'd like to drink a cup of coffee.", "想 + verb; 一杯 + drink.", ["I would like a cup of coffee.", "I'd like a cup of coffee.", "I want to drink a cup of coffee.", "I would like to drink a cup of coffee.", "I'd like a coffee."]),
      toZh("There's a book on the table.", "桌子上有一本书", "zhuōzi shang yǒu yì běn shū", "Place + 有 + new thing."),
      listen("我今天不能来。", "What did they say?", ["I can't come today.", "I don't want to come today.", "I came today.", "I can come today."], 0, "不能: can't (circumstances)."),
      say("你好！我叫...。我是...人。我会说一点儿中文。", "Introduce yourself: name, nationality, and that you speak a little Chinese.", "Use 一点儿 (yìdiǎnr) for \"a little.\"", "Introduce yourself in Chinese."),
    ],
    { reviews: ["function.names", "grammar.shi", "grammar.you-meiyou", "grammar.measure-words", "grammar.zai-place-verb", "grammar.xiang-yao", "grammar.hui-neng", "grammar.le-completed", "grammar.mei-past", "grammar.question-words", "grammar.you-existence", "function.money"] }
  ),
]);
