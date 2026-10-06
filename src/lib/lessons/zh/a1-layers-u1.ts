// Synced from cheneygross-afk/lengo:src/lib/lessons/zh/a1-layers-u1.ts by scripts/sync-content.mjs -- edit it there, not here.
// A1 unit 1 reinforce and drill lessons (greetings, names, 是), drafted
// from their specs in specs.ts.

import { ex, fb, layer, mc, ms, mt, say, sec, toEn, toZh, wo, zh } from "./authoring";
import { ZH_A1_SPEC as S } from "./specs";

const C = "Complete (characters or pinyin).";

export const ZH_A1_LAYERS_U1 = [
  layer(
    S,
    "zh-a1r-greetings",
    "Dialogue: At the Teacher's Door",
    "A short scene from arrival to goodbye: greeting a teacher, being invited in, apologising and taking leave.",
    "7 min",
    [
      sec(
        "The dialogue",
        [
          "A student knocks on a teacher's office door. Read each line, tap to hear it, and notice how short polite Chinese can be: no \"may I\" or \"would you,\" just 请 (qǐng, please) in front of the verb.",
        ],
        [
          ex("老师好！", "Lǎoshī hǎo!", "Hello, teacher!"),
          ex("你好！请进。", "Nǐ hǎo! Qǐng jìn.", "Hello! Come in, please."),
          ex("谢谢。", "Xièxie.", "Thank you."),
          ex("请坐。", "Qǐng zuò.", "Please sit down."),
          ex("对不起！", "Duìbuqǐ!", "Sorry! (knocking a book off the desk)"),
          ex("没关系。", "Méi guānxi.", "That's all right."),
          ex("再见！明天见！", "Zàijiàn! Míngtiān jiàn!", "Goodbye! See you tomorrow!"),
        ],
        [
          mc("How does the teacher invite the student in?", ["请进。", "请坐。", "再见。", "没关系。"], 0, "请进 (qǐng jìn): \"please enter.\""),
          mc("What does the student say first?", ["老师好！", "明天见！", "没关系。", "请坐。"], 0, "Title + 好 is the respectful way to greet a teacher."),
        ]
      ),
      sec(
        "Title + 好, and 明天见",
        [
          `Greet someone by their title plus 好: ${zh("老师好", "lǎoshī hǎo")} (hello, teacher), ${zh("大家好", "dàjiā hǎo")} (hello, everyone). It's warmer and more respectful than a plain 你好.`,
          `${zh("见", "jiàn")} means \"see.\" Put a time in front of it and you have a goodbye: ${zh("明天见", "míngtiān jiàn")} (see you tomorrow).`,
        ],
        [ex("大家好！", "Dàjiā hǎo!", "Hello, everyone!"), ex("明天见！", "Míngtiān jiàn!", "See you tomorrow!")],
        [mc("老师好 means:", ["Hello, teacher!", "The teacher is good.", "Goodbye, teacher!", "Thank you, teacher!"], 0, "Title + 好 is a greeting.")]
      ),
    ],
    [
      mc("Your teacher says 请坐. What do you do?", ["Sit down", "Leave the room", "Say your name", "Open the door"], 0, "请坐 (qǐng zuò): please sit."),
      mc("You bump into someone. What do you say?", ["对不起！", "不客气！", "请进！", "明天见！"], 0, "对不起 (duìbuqǐ): sorry."),
      mt(
        "Match each phrase to its meaning.",
        [
          ["请进", "Come in, please"],
          ["明天见", "See you tomorrow"],
          ["没关系", "That's all right"],
          ["大家好", "Hello, everyone"],
        ],
        "Four phrases from the scene."
      ),
      fb(C, "老师___！(Hello, teacher!)", "好", "hǎo", "Title + 好 is a greeting."),
      fb(C, "请___。(Come in, please.)", "进", "jìn", "请进: please enter."),
      toEn("没关系", "méi guānxi", "That's all right", "没关系: no problem, it doesn't matter.", ["It doesn't matter", "That's OK", "It's OK", "No problem", "Never mind", "It's all right", "That's alright"]),
      toZh("See you tomorrow!", "明天见！", "Míngtiān jiàn!", "明天 (tomorrow) + 见 (see)."),
      wo(["请", "坐"], "Please sit down.", "请 goes before the verb."),
      say("您好！", "您 (nín) is the polite \"you\": 您好 for an older stranger or someone senior.", "Third-tone hǎo after a rising nín.", "Greet an older stranger politely."),
    ]
  ),

  layer(
    S,
    "zh-a1d-greetings",
    "Pattern Practice: ___好 and 请 + Verb",
    "Two patterns, many words: greet anyone with a title + 好, and ask politely with 请 + a verb.",
    "6 min",
    [
      sec(
        "Two patterns",
        [
          `Greeting: anyone or any group + 好. ${zh("你好", "nǐ hǎo")}, ${zh("您好", "nín hǎo")}, ${zh("你们好", "nǐmen hǎo")} (hello, all of you), ${zh("老师好", "lǎoshī hǎo")}.`,
          `Polite request: 请 + verb. ${zh("请进", "qǐng jìn")} (come in), ${zh("请坐", "qǐng zuò")} (sit), ${zh("请喝茶", "qǐng hē chá")} (have some tea).`,
        ],
        [ex("你们好！", "Nǐmen hǎo!", "Hello, all of you!"), ex("请喝茶。", "Qǐng hē chá.", "Please have some tea.")],
        [mc("Which is a polite request?", ["请喝茶。", "你们好！", "谢谢。", "再见！"], 0, "请 + verb asks politely.")]
      ),
    ],
    [
      mc("Which greets a whole class?", ["你们好！", "您好！", "你好！", "再见！"], 0, "你们 is \"you\" plural."),
      mt(
        "Match the request to its meaning.",
        [
          ["请进", "Come in"],
          ["请坐", "Sit down"],
          ["请喝茶", "Have some tea"],
        ],
        "请 + verb, three ways."
      ),
      fb(C, "___好！(Hello, everyone!)", "大家", "dàjiā", "大家 (dàjiā): everybody."),
      fb(C, "___好！(Hello, polite \"you\"!)", "您", "nín", "您 is the polite \"you.\""),
      fb(C, "请___茶。(Please have some tea.)", "喝", "hē", "喝 (hē): to drink."),
      fb(C, "谢谢！-- 不___。(Thanks! -- You're welcome.)", "客气", "kèqi", "不客气 (bú kèqi): you're welcome."),
      toZh("Hello, all of you!", "你们好！", "Nǐmen hǎo!", "你们 (you, plural) + 好."),
      toZh("Please come in.", "请进。", "Qǐng jìn.", "请 + 进."),
      say("请坐。", "请坐 (qǐng zuò): please sit down.", "Third tone, then a sharp fourth.", "Invite a guest to sit down."),
    ]
  ),

  layer(
    S,
    "zh-a1r-introductions",
    "Mission: Introduce Yourself",
    "Your mission: meet a new classmate, give your name, ask theirs, and ask a teacher's surname politely.",
    "7 min",
    [
      sec(
        "Step 1: your name",
        [
          `Say your full name with ${zh("叫", "jiào")} (to be called), or just your surname with ${zh("姓", "xìng")}. Chinese names put the surname first: in 王小雨 (Wáng Xiǎoyǔ), 王 is the family name.`,
        ],
        [ex("我叫王小雨。", "Wǒ jiào Wáng Xiǎoyǔ.", "My name is Wang Xiaoyu."), ex("我姓王。", "Wǒ xìng Wáng.", "My surname is Wang.")],
        [mc("In 王小雨, which part is the surname?", ["王", "小雨", "雨", "小"], 0, "Chinese surnames come first.")]
      ),
      sec(
        "Step 2: ask theirs",
        [
          `Ask a classmate ${zh("你叫什么名字？", "Nǐ jiào shénme míngzi?")} -- 什么 (what) sits where the answer goes. Ask a teacher or an older person ${zh("您贵姓？", "Nín guìxìng?")} (your honourable surname?).`,
          `Then close with ${zh("认识你很高兴。", "Rènshi nǐ hěn gāoxìng.")} (nice to meet you).`,
        ],
        [ex("您贵姓？", "Nín guìxìng?", "What is your surname? (polite)")],
        [mc("Which question suits an older stranger?", ["您贵姓？", "你叫什么名字？", "你好吗？", "请进。"], 0, "您贵姓 is the polite way to ask a surname.")]
      ),
    ],
    [
      mc("A classmate asks 你叫什么名字？ What are they asking?", ["Your name", "Your age", "Where you're from", "How you are"], 0, "名字 (míngzi) is \"name.\""),
      mc("To answer 您贵姓？ you say:", ["我姓李。", "我叫什么名字。", "我是贵姓。", "您姓李。"], 0, "Answer with 我姓 + surname."),
      fb(C, "我___张伟。(My name is Zhang Wei.)", "叫", "jiào", "叫 + full name."),
      fb(C, "我___陈。(My surname is Chen.)", "姓", "xìng", "姓 + surname."),
      fb(C, "您叫___名字？(What's your name? -- polite)", "什么", "shénme", "什么 sits where the answer goes."),
      toEn("您贵姓？", "Nín guìxìng?", "What is your surname?", "The polite way to ask someone's surname.", ["What's your surname?", "What's your last name?", "What is your last name?", "May I ask your surname?", "What is your family name?"]),
      toZh("My surname is Li.", "我姓李。", "Wǒ xìng Lǐ.", "我 + 姓 + surname."),
      wo(["您", "贵姓"], "What is your surname? (polite)", "您 (polite you) + 贵姓 (honourable surname)."),
      say("认识你很高兴。", "认识你很高兴 (rènshi nǐ hěn gāoxìng): nice to meet you.", "Notice nǐ hěn: third + third, so nǐ rises.", "Tell your new classmate it's nice to meet them."),
    ],
    { previews: ["zh.grammar.adjective-predicates"] }
  ),

  layer(
    S,
    "zh-a1d-names",
    "Pattern Practice: 叫, 姓 and 什么",
    "Swap names into the three patterns until they come out without thinking.",
    "6 min",
    [
      sec(
        "Three patterns",
        [
          "我叫 + full name. 我姓 + surname. 你叫什么名字？ to ask.",
          "Some common surnames: 李 (Lǐ), 王 (Wáng), 张 (Zhāng), 刘 (Liú), 陈 (Chén).",
        ],
        [ex("我叫刘云。", "Wǒ jiào Liú Yún.", "My name is Liu Yun."), ex("我姓张。", "Wǒ xìng Zhāng.", "My surname is Zhang.")],
        [mt("Match the surname to its pinyin.", [["李", "Lǐ"], ["王", "Wáng"], ["张", "Zhāng"], ["陈", "Chén"]], "Four of the commonest Chinese surnames.")]
      ),
    ],
    [
      mc("我姓刘 tells you:", ["The speaker's surname is Liu", "The speaker's full name is Liu", "The speaker's friend is Liu", "The speaker is asking about Liu"], 0, "姓 + surname."),
      fb(C, "我___刘云。(My name is Liu Yun.)", "叫", "jiào", "叫 + the full name."),
      fb(C, "我___李。(My surname is Li.)", "姓", "xìng", "姓 + just the surname."),
      fb(C, "你叫什么___？(What's your name?)", "名字", "míngzi", "名字 (míngzi): name."),
      fb(C, "您贵___？(What's your surname? -- polite)", "姓", "xìng", "贵姓: honourable surname."),
      toZh("My name is Chen Jing.", "我叫陈静。", "Wǒ jiào Chén Jìng.", "叫 + full name, surname first."),
      toZh("My surname is Zhang.", "我姓张。", "Wǒ xìng Zhāng.", "姓 + surname."),
      wo(["我", "叫", "王", "小雨"], "My name is Wang Xiaoyu.", "Subject + 叫 + name."),
      say("我叫…", "Say your own full name with 我叫, surname first if you have a Chinese name.", "Wǒ jiào, then your name.", "Introduce yourself with your full name."),
    ]
  ),

  layer(
    S,
    "zh-a1r-shi-errors",
    "Error Hunt: 是 and 不是",
    "Spot and fix the mistakes learners make most with 是, 不 and nationalities.",
    "7 min",
    [
      sec(
        "Four classic mistakes",
        [
          "1. Leaving out 是 between two nouns: \"我学生\" should be 我是学生 (I am a student).",
          "2. Putting 不 after 是: \"我是不老师\" should be 我不是老师. 不 goes right before the word it negates.",
          "3. Repeating 是 at the end, as in some English-influenced sentences: \"她是老师是\" should be 她是老师.",
          "4. Forgetting 人 for nationality: 美国 is the country (America); 美国人 is the person.",
        ],
        [
          ex("我是学生。", "Wǒ shì xuésheng.", "I am a student."),
          ex("我不是老师。", "Wǒ bú shì lǎoshī.", "I am not a teacher."),
          ex("他是英国人。", "Tā shì Yīngguó rén.", "He is British."),
        ],
        [mc("Which is correct?", ["我不是老师。", "我是不老师。", "我不老师。", "我老师不是。"], 0, "不 goes before 是.")]
      ),
    ],
    [
      ms(
        "Which sentences are correct? (Choose all that apply.)",
        ["他是医生。", "她不是学生。", "我是不医生。", "他们是中国人。"],
        [0, 1, 3],
        "不 must come before 是, never after it."
      ),
      mc("What's wrong with 我是美国。?", ["It needs 人: 我是美国人。", "It needs 不", "是 should come last", "Nothing"], 0, "美国 is the country; the person is 美国人."),
      mc("What's wrong with 她学生。?", ["It's missing 是", "学生 needs 人", "她 should be 他", "Nothing"], 0, "Two nouns need 是 between them: 她是学生."),
      fb(C, "我___是医生。(I'm not a doctor.)", "不", "bù", "不 goes before 是 (and is said bú there)."),
      fb(C, "他是英国___。(He is British.)", "人", "rén", "Country + 人 is the nationality."),
      fb(C, "她___老师。(She is a teacher.)", "是", "shì", "是 links two nouns."),
      toZh("They are not students.", "他们不是学生。", "Tāmen bú shì xuésheng.", "Subject + 不是 + noun."),
      toZh("I am Chinese.", "我是中国人。", "Wǒ shì Zhōngguó rén.", "中国 + 人."),
      wo(["他", "不", "是", "医生"], "He is not a doctor.", "不 + 是 + noun."),
    ]
  ),

  layer(
    S,
    "zh-a1d-shi",
    "Pattern Practice: A 是 B, A 不是 B",
    "Statement, negative, statement again: the 是 pattern at speed.",
    "6 min",
    [
      sec(
        "The pattern",
        [
          "A 是 B: 我是学生. A 不是 B: 我不是学生. That's all there is -- 是 never changes for the person (no am/is/are) and never changes for time.",
          "Say 不是 as bú shì: 不 rises before the fourth tone of 是.",
        ],
        [ex("你是老师。", "Nǐ shì lǎoshī.", "You are a teacher."), ex("你不是老师。", "Nǐ bú shì lǎoshī.", "You are not a teacher.")],
        [mc("How many forms does 是 have?", ["One: it never changes", "Three: am, is, are", "Two: present and past", "One for each pronoun"], 0, "是 never changes.")]
      ),
    ],
    [
      mc("我们是老师 means:", ["We are teachers.", "We are not teachers.", "I am a teacher.", "You are teachers."], 0, "我们 (we) + 是."),
      mc("他不是医生 means:", ["He is not a doctor.", "He is a doctor.", "She is a doctor.", "He isn't a student."], 0, "不是: is not."),
      fb(C, "她___学生。(She is a student.)", "是", "shì", "A 是 B."),
      fb(C, "我们___老师。(We aren't teachers.)", "不是", "bú shì", "A 不是 B."),
      fb(C, "___是医生。(They are doctors.)", "他们", "tāmen", "他们: they."),
      fb(C, "你们___学生。(You all are not students.)", "不是", "bú shì", "不是: are not."),
      toZh("She is a doctor.", "她是医生。", "Tā shì yīshēng.", "她 + 是 + 医生."),
      toZh("I am not a teacher.", "我不是老师。", "Wǒ bú shì lǎoshī.", "我 + 不是 + 老师."),
      toZh("We are students.", "我们是学生。", "Wǒmen shì xuésheng.", "我们 + 是 + 学生."),
      say("我不是医生。", "我不是医生 (wǒ bú shì yīshēng).", "bú shì: rising, then falling.", "Tell someone you're not a doctor."),
    ]
  ),

  layer(
    S,
    "zh-a1d-nationality",
    "Substitution: Countries and People",
    "Country + 人 for nationality, with every pronoun: swap one word at a time.",
    "6 min",
    [
      sec(
        "Country + 人",
        [
          "Most country names end in 国 (guó, country): 中国, 美国, 英国, 法国, 德国. A few don't: 日本 (Rìběn, Japan), 加拿大 (Jiānádà, Canada).",
          "Add 人 for the person: 法国人 (a French person). Ask with 你是哪国人？ (which country are you from?).",
        ],
        [
          ex("法国", "Fǎguó", "France"),
          ex("德国人", "Déguó rén", "a German"),
          ex("日本人", "Rìběn rén", "a Japanese person"),
          ex("加拿大人", "Jiānádà rén", "a Canadian"),
        ],
        [mt("Match the country to its name.", [["中国", "China"], ["英国", "Britain"], ["法国", "France"], ["德国", "Germany"]], "Many country names end in 国.")]
      ),
    ],
    [
      mc("日本人 is:", ["a Japanese person", "Japan", "a Chinese person", "the Japanese language"], 0, "Country + 人."),
      mc("Which asks someone's nationality?", ["你是哪国人？", "你叫什么名字？", "您贵姓？", "你是学生。"], 0, "哪国人: which country's person."),
      fb(C, "她是法国___。(She is French.)", "人", "rén", "Country + 人."),
      fb(C, "他们是___人。(They are German.)", "德国", "Déguó", "德国: Germany."),
      fb(C, "我是___人。(I'm Canadian.)", "加拿大", "Jiānádà", "加拿大: Canada."),
      fb(C, "你是___人？(Which country are you from?)", "哪国", "nǎ guó", "哪国人: which country's person."),
      toZh("He is Japanese.", "他是日本人。", "Tā shì Rìběn rén.", "日本 + 人."),
      toZh("We are British.", "我们是英国人。", "Wǒmen shì Yīngguó rén.", "英国 + 人."),
      toZh("She is not American.", "她不是美国人。", "Tā bú shì Měiguó rén.", "不是 + nationality."),
      say("我是…人。", "Say your nationality: 我是 + country + 人.", "Remember to add 人.", "Tell someone which country you're from."),
    ]
  ),
];
