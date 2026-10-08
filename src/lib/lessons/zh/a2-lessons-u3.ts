// Chinese A2, unit 3: getting things done -- result and direction
// complements, 给, 把, 让, and making plans by phone.

import { ex, fb, lesson, listen, mc, ms, mt, say, sec, toEn, toZh, wo, zh } from "./authoring";

const L = "ZH-A2" as const;
const C = "Complete (characters or pinyin).";

export const ZH_A2_LESSONS_U3 = [
  lesson(
    L,
    "zh-a2-result-complements",
    "Finished, Understood, Found: Result Complements",
    "Verb + result: 看完 (finish reading), 听懂 (understand by listening), 找到 (find), 写错 (write wrongly). How to say you did or didn't get the result.",
    "8 min",
    [
      sec(
        "Verb + result",
        [
          "Chinese verbs often name only the attempt; a second word says what came of it. 看 is \"look,\" 看见 is \"see\"; 找 is \"look for,\" 找到 is \"find.\"",
          `Common results: ${zh("完", "wán")} (finished), ${zh("懂", "dǒng")} (understood), ${zh("到", "dào")} (reached, got), ${zh("错", "cuò")} (wrong), ${zh("好", "hǎo")} (done properly), ${zh("见", "jiàn")} (perceived).`,
        ],
        [
          ex("我看完了这本书。", "Wǒ kàn wán le zhè běn shū.", "I've finished reading this book."),
          ex("你听懂了吗？", "Nǐ tīng dǒng le ma?", "Did you understand (what you heard)?"),
          ex("我找到我的手机了。", "Wǒ zhǎo dào wǒ de shǒujī le.", "I've found my phone."),
          ex("对不起，我写错了。", "Duìbuqǐ, wǒ xiě cuò le.", "Sorry, I wrote it wrong."),
        ],
        [mc("找 means \"look for.\" Which means \"find\"?", ["找到", "找完", "找错", "找懂"], 0, "到: the search reached its goal.")]
      ),
      sec(
        "Didn't get there",
        [
          `Negative: 没 + verb + result (no 了): ${zh("我没听懂。", "Wǒ méi tīng dǒng.")} (I didn't understand.) ${zh("我没找到。", "Wǒ méi zhǎo dào.")} (I couldn't find it.)`,
          "These two are worth memorising whole: 听懂了吗？ -- 没听懂，请再说一次。",
        ],
        [ex("我没听懂，请再说一次。", "Wǒ méi tīng dǒng, qǐng zài shuō yí cì.", "I didn't understand -- please say it again."), ex("他还没做完。", "Tā hái méi zuò wán.", "He hasn't finished yet.")],
        [mc("I didn't understand:", ["我没听懂。", "我没听懂了。", "我不听懂。", "我听没懂。"], 0, "没 + verb + result, no 了.")]
      ),
    ],
    [
      mt("Match the result.", [["看完", "finish reading"], ["听懂", "understand"], ["找到", "find"], ["写错", "write wrongly"]], "Verb + result."),
      mc("我没看见他 means:", ["I didn't see him.", "I didn't look for him.", "I don't know him.", "I haven't finished him."], 0, "看见: see."),
      listen("你听懂了吗？", "What's being asked?", ["Did you understand?", "Did you hear it?", "Are you listening?", "Did you finish?"], 0, "听懂: understand by listening."),
      fb(C, "我吃___了。(I've finished eating.)", "完", "wán", "完: finished."),
      fb(C, "我没找___我的钥匙。(I couldn't find my keys.)", "到", "dào", "找到: find."),
      fb(C, "这个字你写___了。(You wrote this character wrong.)", "错", "cuò", "错: wrong."),
      toZh("I didn't understand.", "我没听懂。", "Wǒ méi tīng dǒng.", "没 + 听懂.", ["我没看懂。", "Wǒ méi kàn dǒng."]),
      toZh("I've found it.", "我找到了。", "Wǒ zhǎo dào le.", "找到 + 了."),
      toEn("你做完作业了吗？", "Nǐ zuò wán zuòyè le ma?", "Have you finished your homework?", "做完: finish doing.", ["Did you finish your homework?", "Have you done your homework?", "Have you finished the homework?", "Did you finish the homework?"]),
      say("对不起，我没听懂。", "对不起，我没听懂: sorry, I didn't understand.", "méi tīng dǒng: rising, level, dipping.", "Tell someone politely that you didn't understand."),
    ],
    { teaches: ["grammar.result-complements"], previews: ["grammar.you-zai"] }
  ),

  lesson(
    L,
    "zh-a2-direction-complements",
    "Come In, Go Out: Direction Complements",
    "Verb + 来/去 says which way the movement goes relative to the speaker: 进来 (come in), 出去 (go out), 拿来 (bring), 回去 (go back).",
    "8 min",
    [
      sec(
        "来 toward, 去 away",
        [
          `After a movement verb, ${zh("来", "lai")} means toward the speaker, ${zh("去", "qu")} away from them: ${zh("进来", "jìnlai")} (come in), ${zh("进去", "jìnqu")} (go in), ${zh("出来", "chūlai")} (come out), ${zh("出去", "chūqu")} (go out).`,
          "Others: 上 (up), 下 (down), 回 (back), 过 (over, across): 上来, 下去, 回来, 过来.",
        ],
        [
          ex("请进来！", "Qǐng jìnlai!", "Come in, please!"),
          ex("他出去了。", "Tā chūqu le.", "He's gone out."),
          ex("你什么时候回来？", "Nǐ shénme shíhou huílai?", "When are you coming back?"),
        ],
        [mc("Someone knocks; you say \"come in\":", ["请进来。", "请进去。", "请出来。", "请出去。"], 0, "Toward you: 来.")]
      ),
      sec(
        "With things and places",
        [
          `Verbs of carrying take 来/去 too: ${zh("拿来", "ná lai")} (bring), ${zh("拿去", "ná qu")} (take away), ${zh("带来", "dài lai")} (bring along).`,
          `A place goes between the verb and 来/去: ${zh("他回家去了。", "Tā huí jiā qu le.")} ${zh("请到这儿来。", "Qǐng dào zhèr lái.")} (Please come over here.)`,
        ],
        [ex("请把书拿来。", "Qǐng bǎ shū ná lai.", "Please bring the book."), ex("下来吃饭吧！", "Xiàlai chī fàn ba!", "Come down and eat!")],
        [mc("Come down and eat!", ["下来吃饭吧！", "下去吃饭吧！", "上来吃饭吧！", "吃饭下来吧！"], 0, "Toward the speaker below: 下来.")]
      ),
    ],
    [
      mc("You're upstairs; your friend calls up 你上来吧！ They want you to:", ["come up", "go down", "come down", "go out"], 0, "上来: come up toward them."),
      mc("他出去了 means:", ["He's gone out.", "He's come in.", "He's come back.", "He's going down."], 0, "出去: out, away."),
      listen("请进来！", "What does the speaker want?", ["You to come in", "You to go out", "You to come down", "You to go back"], 0, "进来: come in."),
      fb(C, "请进___！(Come in, please!)", "来", "lai", "Toward the speaker: 来.", { altAnswers: ["lái"] }),
      fb(C, "你什么时候回___？(When are you coming back?)", "来", "lai", "回来: come back.", { altAnswers: ["lái"] }),
      fb(C, "他从楼上走下___了。(He came downstairs.)", "来", "lai", "下来: come down.", { altAnswers: ["lái"] }),
      toZh("He's gone out.", "他出去了。", "Tā chūqu le.", "出 + 去 + 了."),
      toZh("Please come in.", "请进来。", "Qǐng jìnlai.", "请 + 进来.", ["请进。", "Qǐng jìn."]),
      wo(["你", "明天", "回来", "吗"], "Are you coming back tomorrow?", "Time before the verb."),
      say("快下来吃饭！", "快下来吃饭 (kuài xiàlai chī fàn): come down and eat, quick!", "xiàlai: lai is light.", "Call someone downstairs for dinner."),
    ],
    { teaches: ["grammar.direction-complements"], previews: ["grammar.ba-construction", "grammar.cong-dao"] }
  ),

  lesson(
    L,
    "zh-a2-gei-for",
    "给: To, For and Give",
    "给 + person + verb: doing something for or to someone -- 给妈妈买礼物, 给我看看 -- and 给 as the verb \"give.\"",
    "7 min",
    [
      sec(
        "给 as \"give\"",
        [
          `On its own, ${zh("给", "gěi")} is the verb \"give\": ${zh("给我一杯水。", "Gěi wǒ yì bēi shuǐ.")} (Give me a glass of water.) Person first, then the thing.`,
        ],
        [ex("他给了我一本书。", "Tā gěi le wǒ yì běn shū.", "He gave me a book."), ex("给你。", "Gěi nǐ.", "Here you are.")],
        [mc("Here you are (handing something over):", ["给你。", "你给。", "给我。", "谢谢你。"], 0, "给你: (this is) for you.")]
      ),
      sec(
        "给 + person + verb",
        [
          `Before a verb, 给 + person means \"for\" or \"to\" them: ${zh("我给妈妈买了一个礼物。", "Wǒ gěi māma mǎi le yí ge lǐwù.")} (I bought Mom a present.) ${zh("给我看看。", "Gěi wǒ kànkan.")} (Let me have a look.)`,
          "The 给 phrase goes before the verb -- never at the end as in English \"for my mom.\"",
        ],
        [ex("他给我写了一封信。", "Tā gěi wǒ xiě le yì fēng xìn.", "He wrote me a letter."), ex("我给你介绍一下。", "Wǒ gěi nǐ jièshào yíxià.", "Let me introduce you.")],
        [mc("I bought a present for my mom:", ["我给妈妈买了一个礼物。", "我买了一个礼物给妈妈的。", "我买给了妈妈礼物一个。", "给我妈妈买了礼物。"], 0, "给 + person before the verb.")]
      ),
    ],
    [
      mc("给我看看 means:", ["Let me have a look.", "Look at me.", "Give me a look-alike.", "I'll show you."], 0, "给 + person + verb."),
      mc("他给了我一个苹果 means:", ["He gave me an apple.", "I gave him an apple.", "He bought an apple for himself.", "He ate my apple."], 0, "给 as \"give\": person, then thing."),
      listen("我给你介绍一下。", "What is the speaker about to do?", ["Introduce someone", "Give a present", "Write a letter", "Buy something"], 0, "介绍: introduce."),
      fb(C, "___我一杯水，好吗？(Could you give me a glass of water?)", "给", "gěi", "给 + person + thing."),
      fb(C, "我给妈妈___了一个礼物。(I bought Mom a present.)", "买", "mǎi", "给 + person + verb."),
      fb(C, "他给我写了一封___。(He wrote me a letter.)", "信", "xìn", "一封信: a letter."),
      toZh("Here you are.", "给你。", "Gěi nǐ.", "给你: for you."),
      toZh("Let me introduce you.", "我给你介绍一下。", "Wǒ gěi nǐ jièshào yíxià.", "给 + person + verb."),
      toEn("我给朋友做了一个蛋糕。", "Wǒ gěi péngyou zuò le yí ge dàngāo.", "I made a cake for my friend.", "给 + person + 做.", ["I made my friend a cake.", "I baked a cake for my friend.", "I baked my friend a cake.", "I made a cake for a friend."]),
      say("给我看看！", "给我看看 (gěi wǒ kànkan): let me see!", "gěi wǒ: third + third, so gěi rises.", "Ask to see someone's photo."),
    ],
    { teaches: ["grammar.gei-for"] }
  ),

  lesson(
    L,
    "zh-a2-ba-construction",
    "Doing Something to Something: 把",
    "把 + object + verb + result: 我把作业做完了. Use it when you do something to a specific thing and it ends up somewhere or somehow.",
    "9 min",
    [
      sec(
        "The pattern",
        [
          `${zh("把", "bǎ")} moves a known object in front of the verb: subject + 把 + object + verb + what happens to it. ${zh("我把作业做完了。", "Wǒ bǎ zuòyè zuò wán le.")} (I've finished my homework.)`,
          "The verb can't stand alone after 把: it needs something after it -- a result (完, 好), a place (在桌子上), a direction (拿来) or 了.",
        ],
        [
          ex("请把门关上。", "Qǐng bǎ mén guān shang.", "Please shut the door."),
          ex("我把书放在桌子上了。", "Wǒ bǎ shū fàng zài zhuōzi shang le.", "I put the book on the table."),
          ex("他把我的咖啡喝了！", "Tā bǎ wǒ de kāfēi hē le!", "He drank my coffee!"),
        ],
        [mc("Please shut the door:", ["请把门关上。", "请把关上门。", "请关上把门。", "把请门关上。"], 0, "把 + object + verb + result.")]
      ),
      sec(
        "When to use it",
        [
          "Use 把 for an action on a definite thing (this book, my phone, the door) that changes where it is or what state it's in. Instructions and requests are a natural home for it: 请把手机给我 (please give me the phone).",
          "Negatives go before 把: 我没把作业做完 (I didn't finish my homework).",
        ],
        [ex("请把手机给我。", "Qǐng bǎ shǒujī gěi wǒ.", "Please give me the phone."), ex("我没把钱带来。", "Wǒ méi bǎ qián dài lai.", "I didn't bring the money.")],
        [mc("Which is wrong?", ["我把书看。", "我把书看完了。", "我把书放在包里。", "请把书拿来。"], 0, "After 把 + object, the verb needs something after it.")]
      ),
    ],
    [
      ms("Which sentences are correct? (Choose all that apply.)", ["我把作业做完了。", "请把窗户打开。", "他把门。", "我没把手机带来。"], [0, 1, 3], "把 needs a verb and what happens."),
      mc("他把我的蛋糕吃了 means:", ["He ate my cake.", "He gave me cake.", "He wants my cake.", "He made my cake."], 0, "把 + object + verb + 了."),
      listen("请把门关上。", "What does the speaker want?", ["Shut the door", "Open the door", "Come in", "Lock the window"], 0, "关上: shut."),
      fb(C, "请___手机给我。(Please give me the phone.)", "把", "bǎ", "把 + object + verb."),
      fb(C, "我把书放___桌子上了。(I put the book on the table.)", "在", "zài", "Verb + 在 + place."),
      fb(C, "我没把作业做___。(I didn't finish my homework.)", "完", "wán", "A result after the verb."),
      toZh("Please open the window.", "请把窗户打开。", "Qǐng bǎ chuānghu dǎkāi.", "把 + 窗户 + 打开.", ["请打开窗户。", "Qǐng dǎkāi chuānghu."]),
      toZh("I've finished my homework.", "我把作业做完了。", "Wǒ bǎ zuòyè zuò wán le.", "把 + 作业 + 做完 + 了.", ["我做完作业了。", "Wǒ zuò wán zuòyè le.", "我做完了作业。", "Wǒ zuò wán le zuòyè."]),
      wo(["他", "把", "我的", "咖啡", "喝了"], "He drank my coffee.", "Subject + 把 + object + verb + 了."),
      say("请把门关上。", "请把门关上 (qǐng bǎ mén guān shang): please shut the door.", "qǐng bǎ: third + third, so qǐng rises.", "Ask someone to close the door."),
    ],
    { teaches: ["grammar.ba-construction"] }
  ),

  lesson(
    L,
    "zh-a2-rang-causative",
    "让: Let, Make, Ask Someone To",
    "让 + person + verb: 妈妈让我早点睡 (Mom makes me go to bed early), 让我想想 (let me think).",
    "7 min",
    [
      sec(
        "让 + person + verb",
        [
          `${zh("让", "ràng")} puts someone else in charge of the next verb: ${zh("老师让我们写作业。", "Lǎoshī ràng wǒmen xiě zuòyè.")} (The teacher had us write homework.) Depending on context it's \"make,\" \"let\" or \"ask to.\"`,
          `${zh("让我想想。", "Ràng wǒ xiǎngxiang.")} (Let me think.) is a phrase to keep: it buys you time in any conversation.`,
        ],
        [
          ex("妈妈让我早点睡。", "Māma ràng wǒ zǎo diǎn shuì.", "Mom makes me go to bed early."),
          ex("让我看看。", "Ràng wǒ kànkan.", "Let me see."),
          ex("他让我帮他。", "Tā ràng wǒ bāng tā.", "He asked me to help him."),
        ],
        [mc("Let me think:", ["让我想想。", "我让想想。", "让想想我。", "我想让想。"], 0, "让 + person + verb.")]
      ),
      sec(
        "Feelings: 让人…",
        [
          `With feelings, 让 means \"make (someone feel)\": ${zh("这个消息让我很高兴。", "Zhège xiāoxi ràng wǒ hěn gāoxìng.")} (This news makes me very happy.)`,
          "Negative: 不让 (not let): 爸爸不让我开车 (Dad won't let me drive).",
        ],
        [ex("爸爸不让我开车。", "Bàba bú ràng wǒ kāi chē.", "Dad won't let me drive.")],
        [mc("爸爸不让我开车 means:", ["Dad won't let me drive.", "Dad doesn't drive.", "I won't let Dad drive.", "Dad can't drive."], 0, "不让: not let.")]
      ),
    ],
    [
      mc("老师让我们回家 means:", ["The teacher let us go home.", "We let the teacher go home.", "The teacher went home.", "The teacher wants to go home."], 0, "让 + person + verb."),
      mc("Which means \"Let me see\"?", ["让我看看。", "给我看看。", "Both", "Neither"], 2, "Both work: 给我看看 and 让我看看."),
      listen("这个消息让我很高兴。", "How does the news make the speaker feel?", ["Happy", "Sad", "Tired", "Worried"], 0, "让我很高兴: makes me happy."),
      fb(C, "___我想想。(Let me think.)", "让", "ràng", "让 + person + verb."),
      fb(C, "妈妈不让我___电视。(Mom won't let me watch TV.)", "看", "kàn", "不让 + person + verb."),
      fb(C, "他让我___他。(He asked me to help him.)", "帮", "bāng", "帮: help."),
      toZh("Let me see.", "让我看看。", "Ràng wǒ kànkan.", "让 + 我 + 看看.", ["给我看看。", "Gěi wǒ kànkan."]),
      toZh("The teacher had us write characters.", "老师让我们写汉字。", "Lǎoshī ràng wǒmen xiě Hànzì.", "让 + person + verb."),
      toEn("爸爸不让我开车。", "Bàba bú ràng wǒ kāi chē.", "Dad won't let me drive.", "不让: not let.", ["Dad doesn't let me drive.", "My dad won't let me drive.", "My dad doesn't let me drive.", "Dad does not let me drive."]),
      say("让我想想。", "让我想想 (ràng wǒ xiǎngxiang): let me think.", "wǒ xiǎng: third + third, so wǒ rises.", "Buy yourself a moment to think."),
    ],
    { teaches: ["grammar.rang-causative"] }
  ),

  lesson(
    L,
    "zh-a2-phone-plans",
    "On the Phone: Making Plans",
    "Answer the phone with 喂, ask if someone's free, suggest a time and place to meet, and say goodbye -- by phone or message.",
    "8 min",
    [
      sec(
        "Calling",
        [
          `Answer or open a call with ${zh("喂", "wéi")} (hello? -- only on the phone). Ask for someone: ${zh("请问，王老师在吗？", "Qǐngwèn, Wáng lǎoshī zài ma?")}`,
          `To call someone is ${zh("给…打电话", "gěi … dǎ diànhuà")}: ${zh("我明天给你打电话。", "Wǒ míngtiān gěi nǐ dǎ diànhuà.")} Messages: ${zh("发微信", "fā Wēixìn")} (send a WeChat).`,
        ],
        [ex("喂，你好！", "Wéi, nǐ hǎo!", "Hello? (on the phone)"), ex("你打错了。", "Nǐ dǎ cuò le.", "You've got the wrong number.")],
        [mc("You answer the phone:", ["喂？", "再见。", "请进。", "给你。"], 0, "喂: hello on the phone.")]
      ),
      sec(
        "Making a plan",
        [
          `${zh("你明天有空吗？", "Nǐ míngtiān yǒu kòng ma?")} (Are you free tomorrow?) ${zh("我们在哪儿见面？", "Wǒmen zài nǎr jiànmiàn?")} (Where shall we meet?) ${zh("几点见？", "Jǐ diǎn jiàn?")}`,
          `Close with ${zh("不见不散！", "Bú jiàn bú sàn!")} -- \"we won't leave until we've met\": see you there, for sure.`,
        ],
        [ex("我们三点在咖啡店见面吧。", "Wǒmen sān diǎn zài kāfēidiàn jiànmiàn ba.", "Let's meet at the café at three."), ex("不见不散！", "Bú jiàn bú sàn!", "See you there!")],
        [mc("Are you free tomorrow?", ["你明天有空吗？", "你明天空有吗？", "你有明天空吗？", "明天你空吗有？"], 0, "有空: have free time.")]
      ),
    ],
    [
      mc("你打错了 means:", ["You've got the wrong number.", "You called too late.", "You hit the wrong key.", "You spoke wrongly."], 0, "打错: dialled wrong."),
      mc("不见不散 means:", ["See you there for sure.", "Don't go away.", "We won't see each other.", "Goodbye forever."], 0, "A fixed promise to meet."),
      listen("我们在哪儿见面？", "What's being asked?", ["Where shall we meet?", "When shall we meet?", "Are you free?", "Who are we meeting?"], 0, "在哪儿见面: where to meet."),
      fb(C, "我明天给你打___。(I'll call you tomorrow.)", "电话", "diànhuà", "给 + person + 打电话."),
      fb(C, "你今天晚上有___吗？(Are you free tonight?)", "空", "kòng", "有空: free."),
      fb(C, "我们几点___面？(What time shall we meet?)", "见", "jiàn", "见面: meet."),
      toZh("I'll call you tomorrow.", "我明天给你打电话。", "Wǒ míngtiān gěi nǐ dǎ diànhuà.", "Time + 给你 + 打电话."),
      toZh("Let's meet at three.", "我们三点见面吧。", "Wǒmen sān diǎn jiànmiàn ba.", "Time + 见面 + 吧.", ["我们三点见吧。", "Wǒmen sān diǎn jiàn ba."]),
      toEn("喂，请问李明在吗？", "Wéi, qǐngwèn Lǐ Míng zài ma?", "Hello, is Li Ming there?", "On the phone: 喂, then ask for the person.", ["Hello, is Li Ming in?", "Hello, may I speak to Li Ming?", "Hello? Is Li Ming there?", "Hi, is Li Ming there?", "Hello, excuse me, is Li Ming there?"]),
      say("喂，你好！", "喂，你好 (wéi, nǐ hǎo): hello? (on the phone).", "wéi rises like a question.", "Answer the phone."),
    ],
    { teaches: ["function.phone"] }
  ),
];
