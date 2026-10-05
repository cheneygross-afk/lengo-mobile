// Synced from cheneygross-afk/lengo:src/lib/lessons/zh/b1-lessons-u3.ts by scripts/sync-content.mjs -- edit it there, not here.
// Chinese B1, unit 3: doing things to things -- the 被 passive, 把…成/到/
// 给, more measure words, work and travel.

import { ex, fb, lesson, listen, mc, ms, mt, say, sec, toEn, toZh, wo, zh } from "./authoring";

const L = "ZH-B1" as const;
const C = "Complete (characters or pinyin).";

export const ZH_B1_LESSONS_U3 = [
  lesson(
    L,
    "zh-b1-bei-passive",
    "Things That Happened to You: 被",
    "Thing + 被 + doer + verb + result: 我的自行车被偷了. Chinese uses the passive mostly for something unwelcome.",
    "9 min",
    [
      sec(
        "The pattern",
        [
          `${zh("被", "bèi")} turns a 把 sentence around: the thing affected comes first. ${zh("我的手机被弟弟弄坏了。", "Wǒ de shǒujī bèi dìdi nòng huài le.")} (My phone got broken by my little brother.)`,
          "Like 把, the verb needs something after it -- a result or 了. The doer can be left out: 我的自行车被偷了 (my bike was stolen).",
        ],
        [
          ex("我的自行车被偷了。", "Wǒ de zìxíngchē bèi tōu le.", "My bike was stolen."),
          ex("蛋糕被他吃完了。", "Dàngāo bèi tā chī wán le.", "The cake got eaten up by him."),
        ],
        [mc("My wallet was stolen:", ["我的钱包被偷了。", "我的钱包偷了被。", "被我的钱包偷了。", "我的钱包被偷。"], 0, "Thing + 被 + verb + 了.")]
      ),
      sec(
        "Mostly for bad news",
        [
          "Everyday Chinese uses 被 mainly for something unwanted: stolen, broken, scolded, caught in the rain. For neutral or good events a plain active sentence sounds more natural: 这本书是鲁迅写的, not 被鲁迅写的.",
          "Negative: 没 before 被 -- 我的车没被撞坏 (my car wasn't damaged).",
        ],
        [ex("他被老师批评了。", "Tā bèi lǎoshī pīpíng le.", "He got told off by the teacher."), ex("我今天被雨淋了。", "Wǒ jīntiān bèi yǔ lín le.", "I got caught in the rain today.")],
        [mc("Which sounds most natural?", ["我的手机被偷了。", "这顿饭被我做好了。", "这首歌被很多人喜欢。", "这本书被我买了。"], 0, "被 is mainly for something unwelcome.")]
      ),
    ],
    [
      mc("蛋糕被弟弟吃了 -- who ate the cake?", ["The younger brother", "The speaker", "Nobody", "The cake was thrown away"], 0, "被 + doer: by the brother."),
      ms("Which are correct? (Choose all that apply.)", ["我的钱包被偷了。", "我的车被撞坏了。", "我的钱包被偷。", "他被老师批评了。"], [0, 1, 3], "After 被, the verb needs 了 or a result."),
      listen("我的自行车被偷了！", "What happened?", ["The bike was stolen.", "The bike broke down.", "The speaker bought a bike.", "The bike was found."], 0, "被偷了: was stolen."),
      fb(C, "我的手机___弟弟弄坏了。(My phone got broken by my brother.)", "被", "bèi", "被 + doer + verb."),
      fb(C, "他被老师批评___。(He got told off by the teacher.)", "了", "le", "被 + verb + 了."),
      fb(C, "我的车没___撞坏。(My car wasn't damaged.)", "被", "bèi", "没 + 被."),
      toZh("My bike was stolen.", "我的自行车被偷了。", "Wǒ de zìxíngchē bèi tōu le.", "Thing + 被 + 偷 + 了."),
      toZh("The cake got eaten up.", "蛋糕被吃完了。", "Dàngāo bèi chī wán le.", "被 + verb + result.", ["蛋糕被吃了。", "Dàngāo bèi chī le."]),
      toEn("我今天被雨淋了。", "Wǒ jīntiān bèi yǔ lín le.", "I got caught in the rain today.", "被雨淋: drenched by rain.", ["I got rained on today.", "I got soaked by the rain today.", "I got wet in the rain today.", "I was caught in the rain today."]),
      say("我的钱包被偷了！", "我的钱包被偷了: my wallet's been stolen!", "bèi tōu le: fall, high, light.", "Report a theft."),
    ],
    { teaches: ["grammar.bei-passive"] }
  ),

  lesson(
    L,
    "zh-b1-ba-cheng",
    "把 Something Into, To, For: 把…成/到/给",
    "把 with a destination or a change: translate it into English (翻译成), send it to the office (送到), give it to her (交给).",
    "8 min",
    [
      sec(
        "Change: 把…成",
        [
          `${zh("把 A 翻译成 B", "bǎ A fānyì chéng B")}: translate A into B. 成 marks what something becomes: ${zh("把这句话翻译成英文。", "Bǎ zhè jù huà fānyì chéng Yīngwén.")} Also 换成 (change into), 看成 (mistake for).`,
        ],
        [ex("请把这句话翻译成中文。", "Qǐng bǎ zhè jù huà fānyì chéng Zhōngwén.", "Please translate this sentence into Chinese."), ex("我把\"八\"看成\"人\"了。", "Wǒ bǎ \"bā\" kàn chéng \"rén\" le.", "I misread 八 as 人.")],
        [mc("Translate it into English:", ["把它翻译成英文。", "把它翻译英文成。", "翻译成把它英文。", "把成它翻译英文。"], 0, "把 + thing + 翻译成 + language.")]
      ),
      sec(
        "Destination: 把…到 / 把…给",
        [
          `${zh("把…送到…", "bǎ … sòng dào …")}: deliver to a place. ${zh("把…交给…", "bǎ … jiāo gěi …")}: hand over to someone. ${zh("请把作业交给老师。", "Qǐng bǎ zuòyè jiāo gěi lǎoshī.")}`,
        ],
        [ex("请把这些东西送到我家。", "Qǐng bǎ zhèxiē dōngxi sòng dào wǒ jiā.", "Please deliver these things to my home."), ex("我把钥匙交给他了。", "Wǒ bǎ yàoshi jiāo gěi tā le.", "I handed the keys to him.")],
        [mc("Hand the homework to the teacher:", ["把作业交给老师。", "把老师交给作业。", "交给把作业老师。", "把作业给交老师。"], 0, "把 + thing + 交给 + person.")]
      ),
    ],
    [
      mt("Match.", [["翻译成", "translate into"], ["送到", "deliver to"], ["交给", "hand to"], ["换成", "change into"]], "把 + verb + 成/到/给."),
      mc("我把\"八\"看成\"人\"了 means:", ["I misread 八 as 人.", "I wrote 八 and 人.", "I saw eight people.", "I turned 八 into 人."], 0, "看成: mistake for."),
      listen("请把这句话翻译成英文。", "What is being asked?", ["Translate a sentence into English", "Read a sentence aloud", "Write a sentence in Chinese", "Explain a word"], 0, "翻译成英文."),
      fb(C, "请把这句话翻译___中文。(Translate this sentence into Chinese.)", "成", "chéng", "翻译成: into."),
      fb(C, "请把这个包送___我的房间。(Please take this bag to my room.)", "到", "dào", "送到: deliver to."),
      fb(C, "我把钥匙交___他了。(I handed the keys to him.)", "给", "gěi", "交给: hand to."),
      toZh("Please translate this into English.", "请把这个翻译成英文。", "Qǐng bǎ zhège fānyì chéng Yīngwén.", "把 + thing + 翻译成.", ["请把这个翻译成英语。", "Qǐng bǎ zhège fānyì chéng Yīngyǔ."]),
      toZh("I gave the book to my friend.", "我把书给了我朋友。", "Wǒ bǎ shū gěi le wǒ péngyou.", "把 + thing + 给 + person.", ["我把书给我朋友了。", "Wǒ bǎ shū gěi wǒ péngyou le.", "我把书交给我朋友了。", "Wǒ bǎ shū jiāo gěi wǒ péngyou le."]),
      wo(["请", "把", "这些", "东西", "送到", "我家"], "Please deliver these things to my home.", "把 + thing + 送到 + place."),
      say("请把这句话翻译成中文。", "请把这句话翻译成中文: please translate this into Chinese.", "fānyì chéng: high, fall, rise.", "Ask a teacher to translate a sentence."),
    ],
    { teaches: ["grammar.ba-cheng"] }
  ),

  lesson(
    L,
    "zh-b1-measure-range",
    "More Measure Words: 张, 条, 辆, 台, 封, 位, 家",
    "Beyond 个 and 本: the measure words for flat things, long things, vehicles, machines, letters, polite people and businesses.",
    "8 min",
    [
      sec(
        "By shape and kind",
        [
          `${zh("张", "zhāng")} flat things: 一张纸, 一张桌子, 一张票. ${zh("条", "tiáo")} long thin things: 一条路, 一条河, 一条鱼. ${zh("辆", "liàng")} vehicles: 一辆车. ${zh("台", "tái")} machines: 一台电脑.`,
          `${zh("封", "fēng")} letters: 一封信. ${zh("位", "wèi")} people, politely: 一位老师, 几位？ (how many in your party?). ${zh("家", "jiā")} businesses: 一家饭店, 一家公司.`,
        ],
        [ex("一张票", "yì zhāng piào", "a ticket"), ex("一条鱼", "yì tiáo yú", "a fish"), ex("一辆出租车", "yí liàng chūzūchē", "a taxi"), ex("一家咖啡店", "yì jiā kāfēidiàn", "a café")],
        [mt("Match the measure word.", [["票", "张"], ["车", "辆"], ["电脑", "台"], ["信", "封"]], "Flat 张, vehicles 辆, machines 台, letters 封.")]
      ),
      sec(
        "位 for politeness",
        [
          `In restaurants and formal settings people get ${zh("位", "wèi")} instead of 个: ${zh("请问几位？", "Qǐngwèn jǐ wèi?")} (How many in your party?) -- ${zh("三位。", "Sān wèi.")}`,
        ],
        [ex("这位是王经理。", "Zhè wèi shì Wáng jīnglǐ.", "This is Manager Wang.")],
        [mc("A waiter asks how many you are:", ["请问几位？", "请问几个？", "请问几张？", "请问几家？"], 0, "位: polite measure word for people.")]
      ),
    ],
    [
      mc("一条路 is:", ["a road", "a ticket", "a car", "a shop"], 0, "条: long things."),
      ms("Which pairs are right? (Choose all that apply.)", ["一张桌子", "一辆自行车", "一台电视", "一封饭店"], [0, 1, 2], "Businesses take 家: 一家饭店."),
      listen("请问几位？", "Where are you probably?", ["At a restaurant entrance", "At the bank counter", "In a taxi", "At home"], 0, "几位: how many in your party."),
      fb(C, "我买了两___电影票。(I bought two cinema tickets.)", "张", "zhāng", "Flat things: 张."),
      fb(C, "他有一___新车。(He has a new car.)", "辆", "liàng", "Vehicles: 辆."),
      fb(C, "这___饭店很有名。(This restaurant is famous.)", "家", "jiā", "Businesses: 家."),
      toZh("a letter", "一封信", "yì fēng xìn", "Letters: 封."),
      toZh("two computers", "两台电脑", "liǎng tái diànnǎo", "Machines: 台."),
      toEn("这位是我的老师。", "Zhè wèi shì wǒ de lǎoshī.", "This is my teacher.", "位: a polite measure word.", ["This is my teacher", "This person is my teacher.", "Let me introduce my teacher."]),
      say("请问几位？", "请问几位 (qǐngwèn jǐ wèi): how many in your party?", "jǐ wèi: a dip, then a fall.", "Greet diners at a restaurant door."),
    ],
    { teaches: ["vocab.measure-range"] }
  ),

  lesson(
    L,
    "zh-b1-work",
    "At Work: Jobs, Colleagues and Days Off",
    "Talk about your job, your company and colleagues, working overtime, asking for leave and taking a meeting.",
    "8 min",
    [
      sec(
        "Who and where",
        [
          `${zh("你做什么工作？", "Nǐ zuò shénme gōngzuò?")} (What do you do?) -- ${zh("我在一家公司工作，是经理。", "Wǒ zài yì jiā gōngsī gōngzuò, shì jīnglǐ.")} ${zh("同事", "tóngshì")} are colleagues; ${zh("老板", "lǎobǎn")} the boss.`,
          `Jobs: ${zh("工程师", "gōngchéngshī")} (engineer), ${zh("会计", "kuàijì")} (accountant), ${zh("律师", "lǜshī")} (lawyer), ${zh("护士", "hùshi")} (nurse), ${zh("司机", "sījī")} (driver).`,
        ],
        [ex("你做什么工作？", "Nǐ zuò shénme gōngzuò?", "What do you do?"), ex("我是工程师。", "Wǒ shì gōngchéngshī.", "I'm an engineer.")],
        [mc("What do you do (for work)?", ["你做什么工作？", "你工作什么做？", "你什么工作？", "你做工作吗？"], 0, "做什么工作.")]
      ),
      sec(
        "Overtime, leave and meetings",
        [
          `${zh("加班", "jiābān")} (work overtime), ${zh("请假", "qǐngjià")} (ask for leave), ${zh("开会", "kāihuì")} (have a meeting), ${zh("出差", "chūchāi")} (go on a business trip).`,
          `${zh("我明天想请一天假。", "Wǒ míngtiān xiǎng qǐng yì tiān jià.")} -- the length goes in the middle of 请假.`,
        ],
        [ex("他今天又加班了。", "Tā jīntiān yòu jiābān le.", "He's working late again today."), ex("经理在开会。", "Jīnglǐ zài kāihuì.", "The manager is in a meeting.")],
        [mc("I'd like to take a day off tomorrow:", ["我明天想请一天假。", "我明天想请假一天。", "我想一天请假明天。", "我明天想一天请假。"], 0, "The length goes inside 请…假.")]
      ),
    ],
    [
      mt("Match.", [["加班", "work overtime"], ["请假", "ask for leave"], ["开会", "have a meeting"], ["出差", "go on a business trip"]], "Work verbs."),
      mc("同事 means:", ["colleague", "boss", "customer", "friend"], 0, "同事: colleague."),
      listen("经理在开会。", "Where is the manager?", ["In a meeting", "On a business trip", "On leave", "At lunch"], 0, "开会: in a meeting."),
      fb(C, "你做什么___？(What do you do?)", "工作", "gōngzuò", "做什么工作."),
      fb(C, "我下个星期要去上海出___。(I'm going to Shanghai on business next week.)", "差", "chāi", "出差: business trip."),
      fb(C, "我明天想请一天___。(I'd like a day off tomorrow.)", "假", "jià", "请…假: ask for leave."),
      toZh("I'm working overtime tonight.", "我今天晚上加班。", "Wǒ jīntiān wǎnshang jiābān.", "Time + 加班.", ["今天晚上我要加班。", "Jīntiān wǎnshang wǒ yào jiābān.", "我今晚加班。", "Wǒ jīnwǎn jiābān."]),
      toZh("She's an engineer.", "她是工程师。", "Tā shì gōngchéngshī.", "是 + job."),
      toEn("我在一家公司工作。", "Wǒ zài yì jiā gōngsī gōngzuò.", "I work at a company.", "在 + 一家公司 + 工作.", ["I work for a company.", "I work in a company.", "I work at a firm."]),
      say("经理，我明天想请假。", "经理，我明天想请假: manager, I'd like to take tomorrow off.", "qǐngjià: a dip, then a fall.", "Ask your boss for a day off."),
    ],
    { teaches: ["vocab.work"] }
  ),

  lesson(
    L,
    "zh-b1-travel",
    "Travel: Booking, Checking In, Checking Out",
    "Book a room, check in with your passport, ask about breakfast and Wi-Fi, and check out -- the hotel conversation from start to finish.",
    "9 min",
    [
      sec(
        "Booking and checking in",
        [
          `${zh("订", "dìng")} is to book: ${zh("我想订一个房间。", "Wǒ xiǎng dìng yí ge fángjiān.")} ${zh("单人间", "dānrénjiān")} (single), ${zh("双人间", "shuāngrénjiān")} (double). Checking in is ${zh("入住", "rùzhù")} or ${zh("办入住", "bàn rùzhù")}.`,
          `${zh("请出示一下您的护照。", "Qǐng chūshì yíxià nín de hùzhào.")} (May I see your passport, please?)`,
        ],
        [ex("我想订一个双人间，住三个晚上。", "Wǒ xiǎng dìng yí ge shuāngrénjiān, zhù sān ge wǎnshang.", "I'd like to book a double room for three nights."), ex("请出示一下您的护照。", "Qǐng chūshì yíxià nín de hùzhào.", "May I see your passport, please?")],
        [mc("I'd like to book a room:", ["我想订一个房间。", "我想买一个房间。", "我想找一个房间订。", "我订想一个房间。"], 0, "订: book.")]
      ),
      sec(
        "Questions and checking out",
        [
          `${zh("早饭几点到几点？", "Zǎofàn jǐ diǎn dào jǐ diǎn?")} (Breakfast is from when to when?) ${zh("无线网的密码是多少？", "Wúxiànwǎng de mìmǎ shì duōshao?")} (What's the Wi-Fi password?)`,
          `Checking out: ${zh("我要退房。", "Wǒ yào tuìfáng.")} Leave your bags: ${zh("我可以把行李放在这儿吗？", "Wǒ kěyǐ bǎ xíngli fàng zài zhèr ma?")}`,
        ],
        [ex("我要退房。", "Wǒ yào tuìfáng.", "I'd like to check out."), ex("密码是多少？", "Mìmǎ shì duōshao?", "What's the password?")],
        [mc("I'd like to check out:", ["我要退房。", "我要入住。", "我要订房。", "我要房间。"], 0, "退房: check out.")]
      ),
    ],
    [
      mt("Match.", [["订", "book"], ["退房", "check out"], ["护照", "passport"], ["行李", "luggage"]], "Hotel words."),
      mc("双人间 is:", ["a double room", "a single room", "a suite", "two rooms"], 0, "双人: two people."),
      listen("早饭七点到十点。", "When is breakfast?", ["7 to 10", "7 to 9", "10 to 12", "7:10"], 0, "七点到十点."),
      fb(C, "我想___一个单人间。(I'd like to book a single room.)", "订", "dìng", "订: book."),
      fb(C, "请出示一下您的___。(May I see your passport?)", "护照", "hùzhào", "护照: passport."),
      fb(C, "我可以把___放在这儿吗？(Can I leave my luggage here?)", "行李", "xíngli", "行李: luggage."),
      toZh("I'd like to check out.", "我要退房。", "Wǒ yào tuìfáng.", "要 + 退房.", ["我想退房。", "Wǒ xiǎng tuìfáng."]),
      toZh("What's the Wi-Fi password?", "无线网的密码是多少？", "Wúxiànwǎng de mìmǎ shì duōshao?", "密码是多少.", ["WiFi密码是多少？", "Wi-Fi密码是多少？", "密码是多少？", "Mìmǎ shì duōshao?"]),
      toEn("我想订一个双人间，住两个晚上。", "Wǒ xiǎng dìng yí ge shuāngrénjiān, zhù liǎng ge wǎnshang.", "I'd like to book a double room for two nights.", "订 + room + 住 + nights.", ["I want to book a double room for two nights.", "I'd like a double room for two nights.", "I would like to book a double room for two nights."]),
      say("你好，我想办入住。", "你好，我想办入住: hello, I'd like to check in.", "bàn rùzhù: two falling tones.", "Check in at a hotel desk."),
    ],
    { teaches: ["function.travel"] }
  ),
];
