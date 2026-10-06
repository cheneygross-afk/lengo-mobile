// Synced from cheneygross-afk/lengo:src/lib/lessons/zh/b1-lessons-u2.ts by scripts/sync-content.mjs -- edit it there, not here.
// Chinese B1, unit 2: ability and timing -- potential complements, 起来,
// verb reduplication, 一…就, 刚/刚才, 又 and 再.

import { ex, fb, lesson, listen, mc, ms, mt, say, sec, toEn, toZh, wo, zh } from "./authoring";

const L = "ZH-B1" as const;
const C = "Complete (characters or pinyin).";

export const ZH_B1_LESSONS_U2 = [
  lesson(
    L,
    "zh-b1-potential-complements",
    "Can You Manage It? 看得懂, 听不懂",
    "Put 得 or 不 between a verb and its result to say whether something can be achieved: 看得懂 (can understand reading it), 买不到 (can't get hold of).",
    "9 min",
    [
      sec(
        "Verb + 得/不 + result",
        [
          "You know results: 看懂 (read and understand), 找到 (find). Put 得 between them for \"can,\" 不 for \"can't\": 看得懂 / 看不懂, 找得到 / 找不到.",
          `It's the natural way to say whether you can manage something: ${zh("我听不懂。", "Wǒ tīng bu dǒng.")} (I can't understand -- what I'm hearing.) Using 不能 here would sound wrong.`,
        ],
        [
          ex("这本书你看得懂吗？", "Zhè běn shū nǐ kàn de dǒng ma?", "Can you understand this book?"),
          ex("我听不懂上海话。", "Wǒ tīng bu dǒng Shànghǎihuà.", "I can't understand Shanghainese."),
          ex("票买不到了。", "Piào mǎi bu dào le.", "The tickets can't be had any more."),
        ],
        [mc("I can't understand (what I'm hearing):", ["我听不懂。", "我不能听懂。", "我没听懂得。", "我听得不懂。"], 0, "Verb + 不 + result.")]
      ),
      sec(
        "Common ones",
        [
          `${zh("吃不完", "chī bu wán")} (can't finish eating), ${zh("睡不着", "shuì bu zháo")} (can't get to sleep), ${zh("看不见", "kàn bu jiàn")} (can't see), ${zh("拿不动", "ná bu dòng")} (too heavy to carry).`,
          "Ask with the positive and negative together: 你看得见看不见？ or simply 你看得见吗？",
        ],
        [ex("太多了，我吃不完。", "Tài duō le, wǒ chī bu wán.", "It's too much -- I can't finish it."), ex("昨天晚上我睡不着。", "Zuótiān wǎnshang wǒ shuì bu zháo.", "I couldn't get to sleep last night.")],
        [mc("睡不着 means:", ["can't get to sleep", "doesn't want to sleep", "slept badly", "didn't sleep"], 0, "睡 + 不 + 着: can't manage to fall asleep.")]
      ),
    ],
    [
      mt("Match.", [["看不懂", "can't understand (reading)"], ["找不到", "can't find"], ["吃不完", "can't finish eating"], ["拿不动", "too heavy to carry"]], "Verb + 不 + result."),
      ms("Which mean \"can\"? (Choose all that apply.)", ["看得懂", "听得见", "买不到", "找得到"], [0, 1, 3], "得 between: can."),
      listen("我听不懂，请说慢一点儿。", "What's the problem?", ["The speaker can't understand.", "The speaker can't hear.", "The speaker is busy.", "The speaker is tired."], 0, "听不懂: can't understand."),
      fb(C, "这个字太小，我看不___。(This character is too small -- I can't see it.)", "见", "jiàn", "看不见: can't see.", { altAnswers: ["清楚", "qīngchu"] }),
      fb(C, "菜太多了，我们吃不___。(There's too much -- we can't finish it.)", "完", "wán", "吃不完: can't finish."),
      fb(C, "你看___懂中文报纸吗？(Can you read a Chinese newspaper?)", "得", "de", "Verb + 得 + result: can."),
      toZh("I can't find my phone.", "我找不到我的手机。", "Wǒ zhǎo bu dào wǒ de shǒujī.", "找 + 不 + 到.", ["我找不到手机。", "Wǒ zhǎo bu dào shǒujī."]),
      toZh("I couldn't get to sleep.", "我睡不着。", "Wǒ shuì bu zháo.", "睡 + 不 + 着.", ["我睡不着觉。", "Wǒ shuì bu zháo jiào."]),
      toEn("这个箱子太重了，我拿不动。", "Zhège xiāngzi tài zhòng le, wǒ ná bu dòng.", "This suitcase is too heavy -- I can't carry it.", "拿不动: can't move it.", ["This box is too heavy, I can't lift it.", "This suitcase is too heavy for me to carry.", "The case is too heavy for me.", "This box is too heavy for me to carry.", "This suitcase is too heavy, I can't carry it."]),
      say("对不起，我听不懂。", "对不起，我听不懂: sorry, I can't understand.", "tīng bu dǒng: the middle bu is light.", "Tell someone you can't follow what they're saying."),
    ],
    { teaches: ["grammar.potential-complements"] }
  ),

  lesson(
    L,
    "zh-b1-qilai",
    "起来: Starting, Seeming, Remembering",
    "Verb + 起来 has three everyday jobs: an action starting (笑起来), how something seems (看起来很好吃), and recalling (想起来).",
    "8 min",
    [
      sec(
        "Starting to",
        [
          `Verb + ${zh("起来", "qǐlai")}: suddenly starting. ${zh("大家都笑起来了。", "Dàjiā dōu xiào qǐlai le.")} (Everyone burst out laughing.) ${zh("下起雨来了。", "Xià qǐ yǔ lai le.")} (It's started raining.) -- an object splits 起 and 来.`,
        ],
        [ex("孩子哭起来了。", "Háizi kū qǐlai le.", "The child started crying.")],
        [mc("Everyone started laughing:", ["大家都笑起来了。", "大家都起来笑了。", "大家笑都起来。", "大家起来都笑了。"], 0, "Verb + 起来.")]
      ),
      sec(
        "Seeming and remembering",
        [
          `看起来 / 听起来 / 吃起来: how something looks, sounds, tastes. ${zh("这个菜看起来很好吃。", "Zhège cài kàn qǐlai hěn hǎochī.")} ${zh("听起来不错！", "Tīng qǐlai búcuò!")} (Sounds good!)`,
          `${zh("想起来", "xiǎng qǐlai")}: remember, come to mind. ${zh("我想起来了！", "Wǒ xiǎng qǐlai le!")} (I've remembered!) Negative: 想不起来 (can't recall).`,
        ],
        [ex("听起来不错！", "Tīng qǐlai búcuò!", "Sounds good!"), ex("他的名字我想不起来了。", "Tā de míngzi wǒ xiǎng bu qǐlai le.", "I can't remember his name.")],
        [mc("It looks delicious:", ["看起来很好吃。", "看很好吃起来。", "起来看很好吃。", "好吃看起来很。"], 0, "看起来 + description.")]
      ),
    ],
    [
      mt("Match.", [["看起来", "looks"], ["听起来", "sounds"], ["想起来", "remember"], ["笑起来", "start laughing"]], "Four uses of 起来."),
      mc("想不起来 means:", ["can't remember", "don't want to get up", "can't think", "won't laugh"], 0, "想 + 不 + 起来."),
      listen("听起来不错！", "How does the speaker react?", ["It sounds good.", "It sounds bad.", "They didn't hear.", "It's too loud."], 0, "听起来: sounds."),
      fb(C, "这个菜看___很好吃。(This dish looks delicious.)", "起来", "qǐlai", "看起来: looks."),
      fb(C, "我想起来___！(I've remembered!)", "了", "le", "想起来了: I remember now."),
      fb(C, "孩子哭___了。(The child started crying.)", "起来", "qǐlai", "Verb + 起来: start."),
      toZh("Sounds good!", "听起来不错！", "Tīng qǐlai búcuò!", "听起来 + description.", ["听起来很好！", "Tīng qǐlai hěn hǎo!"]),
      toZh("I can't remember his name.", "我想不起来他的名字。", "Wǒ xiǎng bu qǐlai tā de míngzi.", "想不起来: can't recall.", ["他的名字我想不起来了。", "Tā de míngzi wǒ xiǎng bu qǐlai le.", "我想不起来他叫什么。", "Wǒ xiǎng bu qǐlai tā jiào shénme."]),
      toEn("你看起来很累。", "Nǐ kàn qǐlai hěn lèi.", "You look tired.", "看起来: look, seem.", ["You look very tired.", "You seem tired.", "You seem very tired.", "You look exhausted."]),
      say("这个看起来很好吃！", "这个看起来很好吃: this looks delicious!", "kàn qǐlai: fall, then a dip and a light lai.", "Compliment someone's cooking before you taste it."),
    ],
    { teaches: ["grammar.qilai"] }
  ),

  lesson(
    L,
    "zh-b1-verb-reduplication",
    "Just a Bit: 看看, 试一试, 一下",
    "Doubling a verb, or adding 一下, makes an action short and casual -- and a request softer: 你看看, 我试一试, 等一下.",
    "7 min",
    [
      sec(
        "Doubling the verb",
        [
          `Say a verb twice for \"do it a little, have a go\": ${zh("看看", "kànkan")}, ${zh("想想", "xiǎngxiang")}, ${zh("尝尝", "chángchang")} (have a taste). The second one is light. One-syllable verbs can take 一 in between: ${zh("试一试", "shì yi shì")}.`,
          `Two-syllable verbs double as ABAB: ${zh("休息休息", "xiūxi xiūxi")} (have a little rest), ${zh("介绍介绍", "jièshào jièshào")}.`,
        ],
        [ex("你尝尝这个菜。", "Nǐ chángchang zhège cài.", "Have a taste of this dish."), ex("我们休息休息吧。", "Wǒmen xiūxi xiūxi ba.", "Let's have a little rest.")],
        [mc("Have a little rest (casual):", ["休息休息", "休休息息", "休息一休息", "休息息"], 0, "Two-syllable verbs: ABAB.")]
      ),
      sec(
        "一下",
        [
          `Verb + ${zh("一下", "yíxià")} does the same job and works with any verb: ${zh("等一下", "děng yíxià")} (wait a moment), ${zh("介绍一下", "jièshào yíxià")}, ${zh("看一下", "kàn yíxià")}.`,
          "These make requests polite: 请等一下 is much softer than 请等.",
        ],
        [ex("请等一下。", "Qǐng děng yíxià.", "Please wait a moment."), ex("我来介绍一下。", "Wǒ lái jièshào yíxià.", "Let me introduce...")],
        [mc("Wait a moment, please:", ["请等一下。", "请一下等。", "请等等一下。", "一下请等。"], 0, "Verb + 一下.")]
      ),
    ],
    [
      ms("Which are natural ways to say \"have a look\"? (Choose all that apply.)", ["看看", "看一看", "看一下", "看看看"], [0, 1, 2], "Double it, add 一, or add 一下."),
      mc("尝尝 means:", ["have a taste", "taste a lot", "already tasted", "don't taste"], 0, "Doubling: do it a little."),
      listen("请等一下。", "What is the speaker asking?", ["Wait a moment.", "Hurry up.", "Come here.", "Sit down."], 0, "等一下: wait a moment."),
      fb(C, "你___尝这个菜。(Have a taste of this dish.)", "尝", "cháng", "Double the verb: 尝尝."),
      fb(C, "我可以试一___吗？(Can I try it?)", "试", "shì", "试一试: have a try."),
      fb(C, "我来介绍___。(Let me introduce...)", "一下", "yíxià", "Verb + 一下."),
      toZh("Let me think about it.", "让我想想。", "Ràng wǒ xiǎngxiang.", "Double the verb: 想想.", ["我想一想。", "Wǒ xiǎng yi xiǎng.", "我想想。", "Wǒ xiǎngxiang.", "让我想一想。", "Ràng wǒ xiǎng yi xiǎng."]),
      toZh("Let's have a little rest.", "我们休息休息吧。", "Wǒmen xiūxi xiūxi ba.", "ABAB + 吧.", ["我们休息一下吧。", "Wǒmen xiūxi yíxià ba."]),
      toEn("你看看这个。", "Nǐ kànkan zhège.", "Have a look at this.", "看看: have a look.", ["Take a look at this.", "Look at this.", "Have a look at this one.", "Take a look at this one."]),
      say("请等一下！", "请等一下 (qǐng děng yíxià): please wait a moment!", "qǐng děng: third + third, so qǐng rises.", "Ask someone on the phone to hold on."),
    ],
    { teaches: ["grammar.verb-reduplication"] }
  ),

  lesson(
    L,
    "zh-b1-yi-jiu",
    "As Soon As: 一…就…",
    "一 A 就 B: B happens the moment A does. 我一到家就睡觉 -- as soon as I get home, I sleep.",
    "7 min",
    [
      sec(
        "The pattern",
        [
          `${zh("一", "yī")} before the first verb, ${zh("就", "jiù")} before the second: ${zh("我一到家就给你打电话。", "Wǒ yí dào jiā jiù gěi nǐ dǎ diànhuà.")} (I'll call you as soon as I get home.)`,
          "It also describes what always happens: 他一喝酒就脸红 (whenever he drinks, he goes red).",
          "Subjects: each sits before its own 一 or 就 -- 他一来，我们就走.",
        ],
        [ex("他一喝酒就脸红。", "Tā yì hē jiǔ jiù liǎn hóng.", "Whenever he drinks, he goes red."), ex("老师一来，我们就开始。", "Lǎoshī yì lái, wǒmen jiù kāishǐ.", "As soon as the teacher comes, we'll start.")],
        [mc("As soon as I get home, I sleep:", ["我一到家就睡觉。", "我就到家一睡觉。", "一我到家就睡觉。", "我到家一就睡觉。"], 0, "一 + first verb, 就 + second.")]
      ),
    ],
    [
      mc("他一喝酒就脸红 means:", ["Whenever he drinks, he goes red.", "He went red after one drink.", "He drinks once, then goes red.", "He only drinks one."], 0, "一…就: whenever, as soon as."),
      ms("Which are correct? (Choose all that apply.)", ["我一下课就回家。", "她一看书就想睡觉。", "我就一下课回家。", "他一来，我们就走。"], [0, 1, 3], "一 before the first verb, 就 before the second."),
      listen("我一到就给你打电话。", "When will the speaker call?", ["As soon as they arrive", "Before they leave", "Tomorrow", "After lunch"], 0, "一到就…: as soon as I arrive."),
      fb(C, "我___下班就回家。(I go home as soon as I finish work.)", "一", "yí", "一 + first verb.", { altAnswers: ["yī"] }),
      fb(C, "她一看电视___睡着了。(She falls asleep as soon as she watches TV.)", "就", "jiù", "就 + second verb."),
      fb(C, "老师一来，我们就开___。(We'll start as soon as the teacher comes.)", "始", "shǐ", "开始: start."),
      toZh("I'll call you as soon as I arrive.", "我一到就给你打电话。", "Wǒ yí dào jiù gěi nǐ dǎ diànhuà.", "一 + first verb, 就 + second.", ["我一到就打电话给你。", "Wǒ yí dào jiù dǎ diànhuà gěi nǐ."]),
      toZh("As soon as class ends, we'll eat.", "一下课我们就吃饭。", "Yí xià kè wǒmen jiù chī fàn.", "一 + 下课, 就 + 吃饭.", ["我们一下课就吃饭。", "Wǒmen yí xià kè jiù chī fàn."]),
      wo(["他", "一", "喝", "咖啡", "就", "睡不着"], "Whenever he drinks coffee, he can't sleep.", "一 A 就 B."),
      say("我一到家就给你打电话。", "我一到家就给你打电话: I'll call you as soon as I'm home.", "yí dào: 一 rises before the fourth tone.", "Promise to call when you get home."),
    ],
    { teaches: ["grammar.yi-jiu"] }
  ),

  lesson(
    L,
    "zh-b1-gang",
    "Just Now: 刚 and 刚才",
    "刚 (just, a moment ago) is an adverb before the verb; 刚才 (just now) is a time word that can open the sentence. Easy to confuse -- here's the difference.",
    "7 min",
    [
      sec(
        "刚: has just",
        [
          `${zh("刚", "gāng")} before the verb: something has only just happened. ${zh("我刚到。", "Wǒ gāng dào.")} (I've just arrived.) No 了 is needed, and 刚 can be relative: 我刚来北京的时候… (when I'd just come to Beijing…).`,
        ],
        [ex("我刚吃完饭。", "Wǒ gāng chī wán fàn.", "I've just finished eating."), ex("他刚走。", "Tā gāng zǒu.", "He's just left.")],
        [mc("I've just arrived:", ["我刚到。", "我到刚。", "刚我到了了。", "我刚才到刚。"], 0, "刚 + verb.")]
      ),
      sec(
        "刚才: a moment ago",
        [
          `${zh("刚才", "gāngcái")} is a time word, \"a moment ago,\" and can stand before the subject or before the verb: ${zh("刚才谁来了？", "Gāngcái shéi lái le?")} (Who came just now?) It takes 了 like any past time, and can be negated: 我刚才没看见.`,
          "Test: if it could be replaced by 昨天 or 上午, it's 刚才.",
        ],
        [ex("刚才谁给我打电话了？", "Gāngcái shéi gěi wǒ dǎ diànhuà le?", "Who called me just now?"), ex("我刚才没听见。", "Wǒ gāngcái méi tīngjiàn.", "I didn't hear just now.")],
        [mc("Who came just now?", ["刚才谁来了？", "刚谁来了？", "谁刚才了来？", "谁来刚了？"], 0, "刚才 can open the sentence.")]
      ),
    ],
    [
      ms("Which are correct? (Choose all that apply.)", ["我刚到。", "刚才他来了。", "刚他来了。", "我刚才没看见。"], [0, 1, 3], "刚 can't open the sentence; 刚才 can."),
      mc("他刚走 means:", ["He's just left.", "He's leaving now.", "He left a while ago.", "He's about to leave."], 0, "刚: just."),
      listen("刚才谁给我打电话了？", "What is being asked?", ["Who called just now?", "Who's calling?", "Will someone call?", "Did I call someone?"], 0, "刚才: just now."),
      fb(C, "我___到，你等等。(I've just arrived -- hang on.)", "刚", "gāng", "刚 + verb."),
      fb(C, "___你去哪儿了？(Where did you go just now?)", "刚才", "gāngcái", "刚才 opens the sentence."),
      fb(C, "他刚吃___饭。(He's just finished eating.)", "完", "wán", "刚 + verb + result."),
      toZh("I've just come back.", "我刚回来。", "Wǒ gāng huílai.", "刚 + verb.", ["我刚刚回来。", "Wǒ gānggāng huílai."]),
      toZh("Who was that just now?", "刚才那是谁？", "Gāngcái nà shì shéi?", "刚才 + question.", ["刚才是谁？", "Gāngcái shì shéi?"]),
      toEn("我刚才没听见。", "Wǒ gāngcái méi tīngjiàn.", "I didn't hear just now.", "刚才 + 没.", ["I didn't hear it just now.", "I didn't catch that just now.", "I didn't hear that.", "I didn't hear you just now."]),
      say("我刚到。", "我刚到 (wǒ gāng dào): I've just arrived.", "gāng is high and level.", "Tell a friend you've just arrived."),
    ],
    { teaches: ["grammar.gang"] }
  ),

  lesson(
    L,
    "zh-b1-you-zai",
    "Again: 又 or 再?",
    "Both mean \"again\": 又 for a repeat that has already happened (他又来了), 再 for one still to come (明天再来).",
    "8 min",
    [
      sec(
        "Already vs. still to come",
        [
          `${zh("又", "yòu")}: it happened again -- often with 了, and often a little exasperated. ${zh("他又迟到了。", "Tā yòu chídào le.")} (He's late again.)`,
          `${zh("再", "zài")}: it will happen again, or should. ${zh("请再说一遍。", "Qǐng zài shuō yí biàn.")} (Please say it again.) ${zh("明天再来吧。", "Míngtiān zài lái ba.")} 再见 is literally \"see again.\"`,
        ],
        [ex("他又迟到了。", "Tā yòu chídào le.", "He's late again."), ex("请再说一遍。", "Qǐng zài shuō yí biàn.", "Please say it again.")],
        [mc("Please say it again:", ["请再说一遍。", "请又说一遍。", "请说再一遍。", "请又再说。"], 0, "Still to come: 再.")]
      ),
      sec(
        "再 for \"then\"",
        [
          `再 also means \"and then, not until then\" for a future sequence: ${zh("吃了饭再走吧。", "Chī le fàn zài zǒu ba.")} (Eat first, then go.) ${zh("我们想想再说。", "Wǒmen xiǎngxiang zài shuō.")} (Let's think about it and talk later.)`,
        ],
        [ex("吃了饭再走吧。", "Chī le fàn zài zǒu ba.", "Eat before you go.")],
        [mc("吃了饭再走 means:", ["eat first, then go", "go and eat again", "eat again and go", "don't eat, go"], 0, "再: and then.")]
      ),
    ],
    [
      mc("Which talks about a repeat that already happened?", ["他又来了。", "明天再来吧。", "请再说一遍。", "再见！"], 0, "又: already happened again."),
      ms("Which are correct? (Choose all that apply.)", ["你又忘了！", "明天再来。", "他昨天再来了。", "我们想想再说。"], [0, 1, 3], "A repeat in the past is 又."),
      listen("他又迟到了。", "What happened?", ["He was late again.", "He'll be late again.", "He's never late.", "He was early."], 0, "又…了: again (already)."),
      fb(C, "请___说一遍。(Please say it again.)", "再", "zài", "Still to come: 再."),
      fb(C, "你怎么___忘了？(How have you forgotten again?)", "又", "yòu", "Already happened again: 又."),
      fb(C, "吃了饭___走吧。(Eat first, then go.)", "再", "zài", "再: and then."),
      toZh("It's raining again.", "又下雨了。", "Yòu xià yǔ le.", "又 + 了.", ["今天又下雨了。", "Jīntiān yòu xià yǔ le."]),
      toZh("Come again tomorrow.", "明天再来吧。", "Míngtiān zài lái ba.", "再 + verb.", ["明天再来。", "Míngtiān zài lái.", "你明天再来吧。", "Nǐ míngtiān zài lái ba."]),
      toEn("我们想想再说。", "Wǒmen xiǎngxiang zài shuō.", "Let's think about it and talk later.", "再: and then.", ["Let's think about it first.", "We'll think about it and decide later.", "Let us think about it and then talk.", "Let's think about it before deciding.", "We'll think it over and talk later."]),
      say("请再说一遍，好吗？", "请再说一遍，好吗: could you say that again?", "zài shuō: fall, then high.", "Ask someone to repeat themselves."),
    ],
    { teaches: ["grammar.you-zai"] }
  ),
];
