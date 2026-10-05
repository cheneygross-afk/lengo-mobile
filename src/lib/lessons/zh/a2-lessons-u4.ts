// Synced from cheneygross-afk/lengo:src/lib/lessons/zh/a2-lessons-u4.ts by scripts/sync-content.mjs -- edit it there, not here.
// Chinese A2, unit 4: time and sequence -- 从…到, 就 and 才, 要…了,
// how long, before/after/when, and asking the way.

import { ex, fb, lesson, listen, mc, ms, mt, say, sec, toEn, toZh, wo, zh } from "./authoring";

const L = "ZH-A2" as const;
const C = "Complete (characters or pinyin).";

export const ZH_A2_LESSONS_U4 = [
  lesson(
    L,
    "zh-a2-cong-dao",
    "From … To: 从…到…",
    "从 A 到 B for times and places: 从九点到五点, 从北京到上海 -- and 从 alone for where someone comes from.",
    "7 min",
    [
      sec(
        "Times and places",
        [
          `${zh("从", "cóng")} … ${zh("到", "dào")} … marks a span: ${zh("我从九点到五点上班。", "Wǒ cóng jiǔ diǎn dào wǔ diǎn shàngbān.")} (I work from nine to five.) ${zh("从北京到上海", "cóng Běijīng dào Shànghǎi")} (from Beijing to Shanghai).`,
          "Like every time or place phrase, the whole 从…到 phrase goes before the verb.",
        ],
        [ex("从星期一到星期五", "cóng xīngqīyī dào xīngqīwǔ", "Monday to Friday"), ex("从我家到学校很近。", "Cóng wǒ jiā dào xuéxiào hěn jìn.", "It's close from my home to school.")],
        [mc("I have class from 8 to 12:", ["我从八点到十二点上课。", "我上课从八点到十二点。", "我从八点上课到十二点到。", "从我八点到十二点上课。"], 0, "从…到 before the verb.")]
      ),
      sec(
        "Where from",
        [
          `从 + place + 来 says where someone comes from: ${zh("他从美国来。", "Tā cóng Měiguó lái.")} Ask ${zh("你从哪儿来？", "Nǐ cóng nǎr lái?")}`,
        ],
        [ex("我刚从商店回来。", "Wǒ gāng cóng shāngdiàn huílai.", "I've just come back from the shop.")],
        [mc("Where are you from?", ["你从哪儿来？", "你来哪儿从？", "你哪儿从来？", "从你哪儿来？"], 0, "从 + 哪儿 + 来.")]
      ),
    ],
    [
      mc("从北京到上海 means:", ["from Beijing to Shanghai", "from Shanghai to Beijing", "Beijing and Shanghai", "between Beijing"], 0, "从 A 到 B."),
      listen("我从九点到五点上班。", "When does the speaker work?", ["9 to 5", "5 to 9", "9 to 12", "Only at 9"], 0, "从九点到五点."),
      mt("Match the phrase.", [["从…到…", "from … to …"], ["从哪儿来", "come from where"], ["从星期一", "starting Monday"]], "从 marks the starting point."),
      fb(C, "___星期一到星期五 (Monday to Friday)", "从", "cóng", "从 … 到 …"),
      fb(C, "从我家___学校很远。(It's far from my home to school.)", "到", "dào", "从 A 到 B."),
      fb(C, "他从美国___。(He's from the US.)", "来", "lái", "从 + place + 来."),
      toZh("I work from nine to five.", "我从九点到五点工作。", "Wǒ cóng jiǔ diǎn dào wǔ diǎn gōngzuò.", "从…到 before the verb.", ["我从九点到五点上班。", "Wǒ cóng jiǔ diǎn dào wǔ diǎn shàngbān."]),
      toZh("Where are you from?", "你从哪儿来？", "Nǐ cóng nǎr lái?", "从 + 哪儿 + 来.", ["你从哪里来？", "Nǐ cóng nǎlǐ lái?"]),
      wo(["从", "北京", "到", "上海", "很", "远"], "It's a long way from Beijing to Shanghai.", "从 A 到 B + adjective."),
      say("从星期一到星期五", "从星期一到星期五: Monday to Friday.", "cóng rises, dào falls.", "Say \"Monday to Friday.\""),
    ],
    { teaches: ["grammar.cong-dao"], previews: ["grammar.gang"] }
  ),

  lesson(
    L,
    "zh-a2-jiu-cai",
    "Early or Late: 就 and 才",
    "就 says something happened sooner or more easily than expected; 才 says later or with more difficulty. 他七点就来了 vs. 他十点才来.",
    "8 min",
    [
      sec(
        "就: already, so soon",
        [
          `${zh("就", "jiù")} before the verb says \"as early as, so soon\": ${zh("他七点就来了。", "Tā qī diǎn jiù lái le.")} (He came as early as seven.) It usually takes 了.`,
        ],
        [ex("我五分钟就到。", "Wǒ wǔ fēnzhōng jiù dào.", "I'll be there in just five minutes."), ex("他六岁就会游泳了。", "Tā liù suì jiù huì yóuyǒng le.", "He could swim at just six.")],
        [mc("他七点就来了 suggests seven o'clock was:", ["earlier than expected", "later than expected", "exactly on time", "too late"], 0, "就: sooner than expected.")]
      ),
      sec(
        "才: not until",
        [
          `${zh("才", "cái")} says \"not until, only then\": ${zh("他十点才来。", "Tā shí diǎn cái lái.")} (He didn't come until ten.) No 了 with 才.`,
          "Same time, different feeling: 八点就到了 (got there by eight -- early), 八点才到 (didn't arrive till eight -- late).",
        ],
        [ex("我昨天十二点才睡。", "Wǒ zuótiān shí'èr diǎn cái shuì.", "I didn't go to bed until twelve last night."), ex("他学了三年才会说。", "Tā xué le sān nián cái huì shuō.", "It took him three years before he could speak it.")],
        [mc("I didn't get up until ten:", ["我十点才起床。", "我十点就起床了。", "我才十点起床了。", "我十点起床才。"], 0, "才 + verb, no 了.")]
      ),
    ],
    [
      ms("Which suggest \"late\"? (Choose all that apply.)", ["他十点才来。", "我十二点才睡。", "她六点就起床了。", "火车九点才到。"], [0, 1, 3], "才: later than expected."),
      mc("Which is wrong?", ["他十点才来了。", "他十点才来。", "他七点就来了。", "我马上就来。"], 0, "才 doesn't take 了."),
      listen("我五分钟就到。", "When will the speaker arrive?", ["In just five minutes", "In fifty minutes", "Not for a while", "At five"], 0, "就: so soon."),
      fb(C, "他七点___来了。(He came as early as seven.)", "就", "jiù", "就 + verb + 了."),
      fb(C, "我昨天十二点___睡。(I didn't sleep until twelve.)", "才", "cái", "才: not until."),
      fb(C, "我马上___来！(I'm coming right now!)", "就", "jiù", "马上就: right away."),
      toZh("He didn't come until ten.", "他十点才来。", "Tā shí diǎn cái lái.", "才, no 了."),
      toZh("I'm coming right away.", "我马上就来。", "Wǒ mǎshàng jiù lái.", "马上就 + verb."),
      toEn("她六岁就会说英文了。", "Tā liù suì jiù huì shuō Yīngwén le.", "She could speak English when she was only six.", "就: as early as.", ["She could already speak English at six.", "She could speak English at just six.", "She spoke English by age six.", "She could speak English by the age of six.", "She could speak English at only six."]),
      say("我马上就来！", "我马上就来 (wǒ mǎshàng jiù lái): I'm coming right away!", "mǎshàng: a dip, then a fall.", "Tell someone you'll be right there."),
    ],
    { teaches: ["grammar.jiu-cai"], previews: ["grammar.duration"] }
  ),

  lesson(
    L,
    "zh-a2-yao-le",
    "About to Happen: 要…了 and 快…了",
    "要…了, 快要…了 and 快…了 say something is about to happen: 火车要开了 (the train's about to leave).",
    "7 min",
    [
      sec(
        "About to",
        [
          `Wrap the event in 要 … 了: ${zh("火车要开了。", "Huǒchē yào kāi le.")} (The train is about to leave.) ${zh("快", "kuài")} or ${zh("快要", "kuàiyào")} make it more urgent: ${zh("快下雨了。", "Kuài xià yǔ le.")} (It's about to rain.)`,
          "With a specific time, use 就要…了, not 快要: 我们明天就要走了 (we're leaving tomorrow).",
        ],
        [ex("电影快开始了。", "Diànyǐng kuài kāishǐ le.", "The film's about to start."), ex("我快要到了。", "Wǒ kuàiyào dào le.", "I'm almost there."), ex("她下个月就要结婚了。", "Tā xià ge yuè jiù yào jiéhūn le.", "She's getting married next month.")],
        [mc("It's about to rain:", ["快下雨了。", "下雨快了。", "快下雨。", "下雨了快。"], 0, "快 + event + 了.")]
      ),
    ],
    [
      mc("我快要到了 means:", ["I'm almost there.", "I've arrived.", "I arrived quickly.", "I won't arrive."], 0, "快要…了: about to."),
      mc("We're leaving tomorrow (a specific time):", ["我们明天就要走了。", "我们明天快要走了。", "我们快明天走了。", "我们明天走快了。"], 0, "With a time: 就要…了."),
      listen("电影快开始了。", "What's happening?", ["The film is about to start.", "The film has ended.", "The film started long ago.", "The film was cancelled."], 0, "快…了: about to."),
      fb(C, "火车___开了。(The train's about to leave.)", "要", "yào", "要 + event + 了: about to.", { altAnswers: ["快要", "kuàiyào", "快", "kuài"] }),
      fb(C, "快下雨___。(It's about to rain.)", "了", "le", "快 + event + 了: about to."),
      fb(C, "我们明天就___走了。(We're leaving tomorrow.)", "要", "yào", "就要…了 with a time."),
      toZh("I'm almost there.", "我快到了。", "Wǒ kuài dào le.", "快 + 到 + 了.", ["我快要到了。", "Wǒ kuàiyào dào le.", "我要到了。", "Wǒ yào dào le."]),
      toZh("The film is about to start.", "电影快开始了。", "Diànyǐng kuài kāishǐ le.", "快 + 开始 + 了.", ["电影要开始了。", "Diànyǐng yào kāishǐ le.", "电影快要开始了。", "Diànyǐng kuàiyào kāishǐ le."]),
      toEn("天快黑了。", "Tiān kuài hēi le.", "It's almost dark.", "快…了: about to.", ["It's getting dark.", "It's about to get dark.", "It will be dark soon.", "It's nearly dark.", "It's going to be dark soon."]),
      say("快点儿，火车要开了！", "快点儿，火车要开了: hurry, the train's about to leave!", "Two different 快s: hurry, and about to.", "Hurry a friend for the train."),
    ],
    { teaches: ["grammar.yao-le"] }
  ),

  lesson(
    L,
    "zh-a2-duration",
    "How Long: Hours, Days and Years",
    "Say how long something lasts: 我学了两年中文, 等了十分钟. Where the duration goes, and asking 多长时间.",
    "8 min",
    [
      sec(
        "Duration after the verb",
        [
          `How long goes after the verb (unlike when, which goes before): ${zh("我睡了八个小时。", "Wǒ shuì le bā ge xiǎoshí.")} (I slept for eight hours.) Units: ${zh("分钟", "fēnzhōng")} (minutes), ${zh("小时", "xiǎoshí")} (hours, with 个), 天 (days), 个星期 (weeks), 个月 (months), 年 (years).`,
          `Ask ${zh("多长时间？", "Duō cháng shíjiān?")} (how long?): ${zh("你等了多长时间？", "Nǐ děng le duō cháng shíjiān?")}`,
        ],
        [ex("我等了二十分钟。", "Wǒ děng le èrshí fēnzhōng.", "I waited twenty minutes."), ex("他在中国住了三年。", "Tā zài Zhōngguó zhù le sān nián.", "He lived in China for three years.")],
        [mc("I waited ten minutes:", ["我等了十分钟。", "我十分钟等了。", "我等十分钟了了。", "十分钟我等了。"], 0, "Verb + 了 + duration.")]
      ),
      sec(
        "With an object",
        [
          `Repeat the verb, or put the duration before the object: ${zh("我学中文学了两年。", "Wǒ xué Zhōngwén xué le liǎng nián.")} = ${zh("我学了两年中文。", "Wǒ xué le liǎng nián Zhōngwén.")}`,
          "A 了 at the end too means it's still going on: 我学了两年中文了 (I've been studying Chinese for two years -- and still am).",
        ],
        [ex("我学了两年中文了。", "Wǒ xué le liǎng nián Zhōngwén le.", "I've been learning Chinese for two years."), ex("她每天跑一个小时步。", "Tā měitiān pǎo yí ge xiǎoshí bù.", "She runs for an hour every day.")],
        [mc("I studied Chinese for two years:", ["我学了两年中文。", "我两年学了中文。", "我学中文了两年。", "我学两年了中文了了。"], 0, "Duration before the object.")]
      ),
    ],
    [
      mc("你等了多长时间？ asks:", ["How long did you wait?", "When did you wait?", "Did you wait?", "How many people waited?"], 0, "多长时间: how long."),
      mt("Match the length of time.", [["半个小时", "half an hour"], ["三天", "three days"], ["一个星期", "a week"], ["两年", "two years"]], "Hours and weeks take 个."),
      listen("我睡了八个小时。", "How long did the speaker sleep?", ["Eight hours", "Until eight", "Eight minutes", "Two hours"], 0, "八个小时: eight hours."),
      fb(C, "我等了二十___。(I waited twenty minutes.)", "分钟", "fēnzhōng", "分钟: minutes."),
      fb(C, "他在中国住了三___。(He lived in China for three years.)", "年", "nián", "年: years."),
      fb(C, "你学了多长___中文？(How long have you studied Chinese?)", "时间", "shíjiān", "多长时间: how long."),
      toZh("I slept for eight hours.", "我睡了八个小时。", "Wǒ shuì le bā ge xiǎoshí.", "Verb + 了 + duration.", ["我睡了八个小时的觉。", "Wǒ shuì le bā ge xiǎoshí de jiào."]),
      toZh("How long did you wait?", "你等了多长时间？", "Nǐ děng le duō cháng shíjiān?", "多长时间 after the verb.", ["你等了多久？", "Nǐ děng le duō jiǔ?"]),
      toEn("我学了两年中文了。", "Wǒ xué le liǎng nián Zhōngwén le.", "I've been studying Chinese for two years.", "了…了: and still going.", ["I have been studying Chinese for two years.", "I've been learning Chinese for two years.", "I have been learning Chinese for two years.", "I've studied Chinese for two years."]),
      say("我学了一年中文。", "我学了一年中文: I studied Chinese for a year.", "yì nián: 一 falls before nián.", "Say how long you've studied Chinese."),
    ],
    { teaches: ["grammar.duration"] }
  ),

  lesson(
    L,
    "zh-a2-before-after",
    "Before, After and When: 以前, 以后, …的时候",
    "Clauses of time come first: 吃饭以前, 下课以后, 我在中国的时候 -- the opposite order from English \"before eating.\"",
    "8 min",
    [
      sec(
        "Action + 以前 / 以后",
        [
          `Put ${zh("以前", "yǐqián")} (before) or ${zh("以后", "yǐhòu")} (after) after the action, and the whole phrase at the front: ${zh("吃饭以前，我洗手。", "Chī fàn yǐqián, wǒ xǐ shǒu.")} (Before eating, I wash my hands.)`,
          "On their own, 以前 means \"before, in the past\" and 以后 \"later, in future\": 我以前住在上海.",
        ],
        [ex("下课以后，我们去吃饭吧。", "Xià kè yǐhòu, wǒmen qù chī fàn ba.", "After class, let's go and eat."), ex("睡觉以前不要喝咖啡。", "Shuìjiào yǐqián bú yào hē kāfēi.", "Don't drink coffee before bed.")],
        [mc("After class:", ["下课以后", "以后下课", "下以后课", "以后的下课"], 0, "Action + 以后.")]
      ),
      sec(
        "…的时候: when",
        [
          `${zh("的时候", "de shíhou")} after a clause means \"when\": ${zh("我在中国的时候，每天说中文。", "Wǒ zài Zhōngguó de shíhou, měitiān shuō Zhōngwén.")} (When I was in China, I spoke Chinese every day.)`,
          `${zh("小时候", "xiǎoshíhou")} (as a child) is a fixed phrase: 我小时候很喜欢画画儿.`,
        ],
        [ex("吃饭的时候不要看手机。", "Chī fàn de shíhou bú yào kàn shǒujī.", "Don't look at your phone while eating."), ex("我小时候住在北京。", "Wǒ xiǎoshíhou zhù zài Běijīng.", "I lived in Beijing as a child.")],
        [mc("When I was in China:", ["我在中国的时候", "的时候我在中国", "我的时候在中国", "时候我在中国的"], 0, "Clause + 的时候.")]
      ),
    ],
    [
      mc("睡觉以前 means:", ["before sleeping", "after sleeping", "while sleeping", "since sleeping"], 0, "以前: before."),
      mc("Which is correct?", ["下班以后我去超市。", "以后下班我去超市。", "我去超市以后下班。", "我去超市下班以后。"], 0, "Time clause first."),
      listen("吃饭的时候不要看手机。", "What is the advice?", ["Don't look at your phone while eating.", "Look at your phone after eating.", "Eat before using your phone.", "Don't eat near your phone."], 0, "…的时候: while/when."),
      fb(C, "下课___，我们去吃饭吧。(After class, let's go and eat.)", "以后", "yǐhòu", "Action + 以后."),
      fb(C, "睡觉___不要喝咖啡。(Don't drink coffee before bed.)", "以前", "yǐqián", "Action + 以前."),
      fb(C, "我在北京的___，常常爬山。(When I was in Beijing, I often went hiking.)", "时候", "shíhou", "…的时候: when."),
      toZh("after work", "下班以后", "xiàbān yǐhòu", "Action + 以后."),
      toZh("I lived in Shanghai as a child.", "我小时候住在上海。", "Wǒ xiǎoshíhou zhù zài Shànghǎi.", "小时候 before the verb."),
      toEn("吃饭以前要洗手。", "Chī fàn yǐqián yào xǐ shǒu.", "You should wash your hands before eating.", "以前: before.", ["Wash your hands before eating.", "You must wash your hands before you eat.", "Wash your hands before you eat.", "You have to wash your hands before eating.", "You need to wash your hands before eating."]),
      say("下课以后见！", "下课以后见 (xià kè yǐhòu jiàn): see you after class!", "yǐhòu: a dip, then a fall.", "Arrange to see a classmate after class."),
    ],
    { teaches: ["grammar.yiqian-yihou"] }
  ),

  lesson(
    L,
    "zh-a2-directions",
    "Asking the Way",
    "Ask how to get somewhere, understand 往左拐, 一直走 and 离…远/近, and follow simple directions.",
    "8 min",
    [
      sec(
        "Asking",
        [
          `${zh("请问，地铁站怎么走？", "Qǐngwèn, dìtiězhàn zěnme zǒu?")} (Excuse me, how do I get to the subway station?) 怎么走 means \"how do you walk/go there.\"`,
          `${zh("离", "lí")} gives distance from a point: ${zh("这儿离火车站远吗？", "Zhèr lí huǒchēzhàn yuǎn ma?")} (Is the station far from here?) -- ${zh("很近，走路五分钟。", "Hěn jìn, zǒulù wǔ fēnzhōng.")}`,
        ],
        [ex("医院离这儿不远。", "Yīyuàn lí zhèr bù yuǎn.", "The hospital isn't far from here."), ex("请问，银行怎么走？", "Qǐngwèn, yínháng zěnme zǒu?", "Excuse me, how do I get to the bank?")],
        [mc("Is it far from here?", ["离这儿远吗？", "从这儿远吗？", "这儿远离吗？", "远离这儿吗？"], 0, "离 + point + 远/近.")]
      ),
      sec(
        "Directions",
        [
          `${zh("一直走", "yìzhí zǒu")} (go straight on), ${zh("往左拐", "wǎng zuǒ guǎi")} (turn left), ${zh("往右拐", "wǎng yòu guǎi")} (turn right), ${zh("到路口", "dào lùkǒu")} (at the junction), ${zh("红绿灯", "hónglǜdēng")} (traffic lights).`,
          "Directions chain with 然后 (then): 一直走，到红绿灯往右拐，然后…",
        ],
        [ex("一直走，到路口往左拐。", "Yìzhí zǒu, dào lùkǒu wǎng zuǒ guǎi.", "Go straight, then turn left at the junction."), ex("银行就在左边。", "Yínháng jiù zài zuǒbian.", "The bank is right there on the left.")],
        [mc("Turn right:", ["往右拐", "往左拐", "一直走", "往前拐"], 0, "右: right.")]
      ),
    ],
    [
      mt("Match the direction.", [["一直走", "go straight on"], ["往左拐", "turn left"], ["往右拐", "turn right"], ["红绿灯", "traffic lights"]], "The four you'll hear most."),
      mc("医院离这儿很近 means:", ["The hospital is close to here.", "The hospital is far from here.", "The hospital is next to the bank.", "Go to the hospital."], 0, "离 + 近: close."),
      listen("一直走，到红绿灯往右拐。", "What should you do at the traffic lights?", ["Turn right", "Turn left", "Go straight", "Stop"], 0, "往右拐: turn right."),
      fb(C, "请问，地铁站怎么___？(How do I get to the subway station?)", "走", "zǒu", "怎么走: how to get there."),
      fb(C, "这儿___火车站远吗？(Is the train station far from here?)", "离", "lí", "离: distance from."),
      fb(C, "到路口往___拐。(Turn left at the junction.)", "左", "zuǒ", "左: left."),
      toZh("Go straight on.", "一直走。", "Yìzhí zǒu.", "一直 + 走.", ["一直往前走。", "Yìzhí wǎng qián zǒu."]),
      toZh("Excuse me, how do I get to the bank?", "请问，银行怎么走？", "Qǐngwèn, yínháng zěnme zǒu?", "Place + 怎么走."),
      toEn("超市离这儿不远。", "Chāoshì lí zhèr bù yuǎn.", "The supermarket isn't far from here.", "离 + point + 不远.", ["The supermarket is not far from here.", "The supermarket isn't far from here", "It's not far from here to the supermarket."]),
      say("请问，地铁站怎么走？", "请问，地铁站怎么走: excuse me, how do I get to the subway?", "qǐngwèn: a dip, then a fall.", "Ask a stranger the way to the subway."),
    ],
    { teaches: ["function.directions"] }
  ),
];
