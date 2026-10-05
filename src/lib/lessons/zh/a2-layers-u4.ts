// Synced from cheneygross-afk/lengo:src/lib/lessons/zh/a2-layers-u4.ts by scripts/sync-content.mjs -- edit it there, not here.
// A2 unit 4 practice lessons (从…到, 就/才, 要…了, duration, 以前/以后/
// 的时候, directions), drafted from their specs in specs.ts.

import { ex, fb, layer, listen, mc, ms, mt, say, sec, toEn, toZh, wo, zh } from "./authoring";
import { ZH_A2_SPEC as S } from "./specs";

const C = "Complete (characters or pinyin).";

export const ZH_A2_LAYERS_U4 = [
  layer(
    S,
    "zh-a2d-cong-dao",
    "Pattern Practice: 从…到…",
    "Spans of time and distance with 从…到…, always before the verb -- and 从 + place + 来 for where people come from.",
    "6 min",
    [
      sec(
        "The frame",
        [
          "从 A 到 B + verb: 我从八点到十二点上课. 从 A 到 B + description: 从这儿到机场很远.",
          "Where from: 从 + place + 来/回来: 他刚从上海回来 (he's just back from Shanghai).",
        ],
        [ex("从星期一到星期五我都上班。", "Cóng xīngqīyī dào xīngqīwǔ wǒ dōu shàngbān.", "I work Monday to Friday."), ex("他刚从上海回来。", "Tā gāng cóng Shànghǎi huílai.", "He's just back from Shanghai.")],
        [mc("From here to the airport is far:", ["从这儿到机场很远。", "这儿从到机场很远。", "从这儿机场到很远。", "到这儿从机场很远。"], 0, "从 A 到 B + description.")]
      ),
    ],
    [
      listen("我从九点到五点上班。", "When does the speaker work?", ["Nine to five", "Five to nine", "From nine", "Until nine"], 0, "从九点到五点."),
      mc("从八点到十点 means:", ["from eight to ten", "eight or ten", "after eight", "before ten"], 0, "从 A 到 B: a span."),
      fb(C, "___一月到三月很冷。(It's cold from January to March.)", "从", "cóng", "从 … 到 …"),
      fb(C, "从这儿___学校很近。(It's close from here to school.)", "到", "dào", "从 A 到 B."),
      fb(C, "他刚从中国回___。(He's just back from China.)", "来", "lai", "从 + place + 回来.", { altAnswers: ["lái"] }),
      fb(C, "你从___来？(Where are you from?)", "哪儿", "nǎr", "从哪儿来: where from.", { altAnswers: ["哪里", "nǎlǐ"] }),
      toZh("I have class from eight to twelve.", "我从八点到十二点上课。", "Wǒ cóng bā diǎn dào shí'èr diǎn shàngkè.", "从…到 before the verb.", ["从八点到十二点我上课。", "Cóng bā diǎn dào shí'èr diǎn wǒ shàngkè.", "我从八点到十二点上课", "Wǒ cóng bā diǎn dào shí'èr diǎn shàngkè."]),
      toZh("It's far from my home to the airport.", "从我家到机场很远。", "Cóng wǒ jiā dào jīchǎng hěn yuǎn.", "从 A 到 B + 很远."),
      wo(["他", "从", "上海", "回来", "了"], "He's back from Shanghai.", "从 + place + 回来."),
      say("从星期一到星期五", "从星期一到星期五: Monday to Friday.", "Keep cóng and dào crisp.", "Say \"Monday to Friday.\""),
    ]
  ),

  layer(
    S,
    "zh-a2r-jiu-cai",
    "Contrast: Early 就, Late 才",
    "Same clock time, two attitudes: 八点就到了 (already there by eight) vs. 八点才到 (not until eight).",
    "7 min",
    [
      sec(
        "Same time, different feeling",
        [
          `${zh("他八点就到了。", "Tā bā diǎn jiù dào le.")} -- he was there by eight: early, quick, easy. ${zh("他八点才到。", "Tā bā diǎn cái dào.")} -- he didn't get there until eight: late, slow, difficult.`,
          "就 takes 了; 才 doesn't. Both come right before the verb.",
        ],
        [ex("我五分钟就做完了。", "Wǒ wǔ fēnzhōng jiù zuò wán le.", "I finished in just five minutes."), ex("我做了一个晚上才做完。", "Wǒ zuò le yí ge wǎnshang cái zuò wán.", "It took me the whole evening to finish.")],
        [mc("他十点才起床 suggests ten was:", ["late", "early", "on time", "unusual for everyone"], 0, "才: later than expected.")]
      ),
    ],
    [
      ms("Which suggest \"early\" or \"quickly\"? (Choose all that apply.)", ["她六点就起床了。", "他十二点才睡。", "我一会儿就来。", "飞机晚上十点才到。"], [0, 2], "就: early, soon."),
      mc("Which is wrong?", ["她九点才到了。", "她九点才到。", "她七点就到了。", "我马上就去。"], 0, "才 doesn't take 了."),
      listen("我昨天十二点才睡。", "When did the speaker go to bed?", ["Not until twelve (late)", "At twelve, early", "At two", "They didn't sleep"], 0, "才: not until."),
      fb(C, "她六点___起床了。(She was up as early as six.)", "就", "jiù", "Early: 就 + 了."),
      fb(C, "火车晚了，十点___到。(The train was late -- it didn't arrive till ten.)", "才", "cái", "Late: 才, no 了."),
      fb(C, "我马上___来！(Coming right away!)", "就", "jiù", "马上就: right away."),
      toZh("He didn't get up until eleven.", "他十一点才起床。", "Tā shíyī diǎn cái qǐchuáng.", "才 + verb, no 了."),
      toZh("I'll be there right away.", "我马上就到。", "Wǒ mǎshàng jiù dào.", "马上就 + verb.", ["我马上就来。", "Wǒ mǎshàng jiù lái."]),
      toEn("他五岁就会游泳了。", "Tā wǔ suì jiù huì yóuyǒng le.", "He could swim when he was only five.", "就: as early as.", ["He could swim at just five.", "He could already swim at five.", "He could swim by age five.", "He could swim at only five.", "He could swim at the age of five."]),
      say("我马上就好！", "我马上就好: I'll be ready in a second!", "mǎshàng jiù: quick and light.", "Tell someone waiting that you're nearly ready."),
    ],
    { previews: ["grammar.duration"] }
  ),

  layer(
    S,
    "zh-a2d-yao-le",
    "Speed Round: About to Happen",
    "要…了, 快…了, 快要…了 and 就要…了 at speed: hear what's about to happen and say it.",
    "6 min",
    [
      sec(
        "Four ways",
        [
          "要…了 (about to), 快…了 / 快要…了 (any moment now), 就要…了 (with a definite time: 明天就要走了).",
          "Don't use 快要 with a specific time: \"明天快要走了\" is wrong.",
        ],
        [ex("要下雨了。", "Yào xià yǔ le.", "It's about to rain."), ex("我们明天就要走了。", "Wǒmen míngtiān jiù yào zǒu le.", "We're leaving tomorrow.")],
        [listen("快到了。", "What does the speaker say?", ["We're nearly there.", "We've arrived.", "Hurry up.", "It's far."], 0, "快…了: nearly.")]
      ),
    ],
    [
      listen("电影要开始了。", "What's about to happen?", ["The film is starting.", "The film is ending.", "The film was cancelled.", "The film is long."], 0, "要…了: about to."),
      listen("我们下个月就要结婚了。", "When is the wedding?", ["Next month", "This month", "Next year", "Tomorrow"], 0, "下个月就要…了."),
      mc("With a specific time, use:", ["就要…了", "快要…了", "快…了", "要…过"], 0, "明天就要走了."),
      fb(C, "快下雪___。(It's about to snow.)", "了", "le", "快 + event + 了."),
      fb(C, "火车___开了！(The train's about to leave!)", "要", "yào", "要 + event + 了.", { altAnswers: ["快要", "kuàiyào", "快", "kuài"] }),
      fb(C, "她明天___要回国了。(She's going back to her country tomorrow.)", "就", "jiù", "With a time: 就要…了."),
      fb(C, "天快___了。(It's nearly dark.)", "黑", "hēi", "快 + 黑 + 了."),
      toZh("We're almost home.", "我们快到家了。", "Wǒmen kuài dào jiā le.", "快 + 到家 + 了.", ["我们快要到家了。", "Wǒmen kuàiyào dào jiā le.", "我们要到家了。", "Wǒmen yào dào jiā le."]),
      toZh("It's about to rain.", "要下雨了。", "Yào xià yǔ le.", "要 + 下雨 + 了.", ["快下雨了。", "Kuài xià yǔ le.", "快要下雨了。", "Kuàiyào xià yǔ le."]),
      say("快点儿，电影要开始了！", "快点儿，电影要开始了: hurry, the film's about to start!", "Two 了s of urgency: keep them light.", "Hurry a friend into the cinema."),
    ]
  ),

  layer(
    S,
    "zh-a2d-duration",
    "Pattern Practice: How Long?",
    "Verb + duration, with and without an object, and 了…了 for something still going on.",
    "6 min",
    [
      sec(
        "Three frames",
        [
          "Verb + 了 + duration: 我等了二十分钟. With an object: 我学了两年中文 or 我学中文学了两年. Still going on: add 了 at the end -- 我学了两年中文了.",
          "Units: 分钟, 个小时, 天, 个星期, 个月, 年. Ask 多长时间？",
        ],
        [ex("我坐了两个小时的火车。", "Wǒ zuò le liǎng ge xiǎoshí de huǒchē.", "I was on the train for two hours."), ex("他在北京住了三年了。", "Tā zài Běijīng zhù le sān nián le.", "He's been living in Beijing for three years.")],
        [mc("I waited half an hour:", ["我等了半个小时。", "我半个小时等了。", "我等半个小时了了。", "半个小时我了等。"], 0, "Verb + 了 + duration.")]
      ),
    ],
    [
      listen("我睡了十个小时。", "How long did the speaker sleep?", ["Ten hours", "Until ten", "Ten minutes", "Two hours"], 0, "十个小时: ten hours."),
      mc("他学了三年中文了 means:", ["He's been studying Chinese for three years (and still is).", "He studied Chinese three years ago.", "He'll study Chinese for three years.", "He stopped after three years."], 0, "了…了: still going."),
      fb(C, "我等了四十___。(I waited forty minutes.)", "分钟", "fēnzhōng", "Minutes: 分钟."),
      fb(C, "她在中国住了两___。(She lived in China for two years.)", "年", "nián", "Years: 年."),
      fb(C, "你在这儿住了多长___？(How long have you lived here?)", "时间", "shíjiān", "多长时间: how long."),
      fb(C, "我每天跑步半个___。(I run for half an hour every day.)", "小时", "xiǎoshí", "半个小时: half an hour."),
      toZh("I waited for an hour.", "我等了一个小时。", "Wǒ děng le yí ge xiǎoshí.", "Verb + 了 + duration."),
      toZh("How long have you lived here?", "你在这儿住了多长时间？", "Nǐ zài zhèr zhù le duō cháng shíjiān?", "多长时间 after the verb.", ["你在这儿住了多久？", "Nǐ zài zhèr zhù le duō jiǔ?"]),
      toZh("I've been studying Chinese for a year.", "我学了一年中文了。", "Wǒ xué le yì nián Zhōngwén le.", "了…了: still going.", ["我学中文学了一年了。", "Wǒ xué Zhōngwén xué le yì nián le."]),
      say("我等了半个小时！", "我等了半个小时: I waited half an hour!", "bàn ge: light ge.", "Complain that you waited half an hour."),
    ]
  ),

  layer(
    S,
    "zh-a2r-sequence",
    "Transform: Before, After, When",
    "Rebuild English \"before/after/when\" sentences the Chinese way: the time clause first, 以前/以后/的时候 at its end.",
    "7 min",
    [
      sec(
        "Flip the clause",
        [
          "\"I wash my hands before I eat\" → 吃饭以前，我洗手. \"Call me after work\" → 下班以后给我打电话. \"When I was in China, …\" → 我在中国的时候，…",
          "In English the word comes first (before eating); in Chinese it comes last (吃饭以前).",
        ],
        [ex("睡觉以前，我看一会儿书。", "Shuìjiào yǐqián, wǒ kàn yíhuìr shū.", "I read for a while before bed."), ex("我小的时候住在农村。", "Wǒ xiǎo de shíhou zhù zài nóngcūn.", "When I was little, I lived in the countryside.")],
        [mc("Before bed:", ["睡觉以前", "以前睡觉", "睡以前觉", "觉睡以前"], 0, "Action + 以前.")]
      ),
    ],
    [
      ms("Which are in natural Chinese order? (Choose all that apply.)", ["吃饭以前要洗手。", "下班以后我去超市。", "以后下班我去超市。", "我在北京的时候很忙。"], [0, 1, 3], "以后 follows the action."),
      mc("我小的时候 means:", ["when I was little", "a small time", "after I was little", "my little hour"], 0, "…的时候: when."),
      listen("下班以后给我打电话。", "When should you call?", ["After work", "Before work", "At work", "Tomorrow morning"], 0, "下班以后: after work."),
      fb(C, "睡觉___，不要喝咖啡。(Don't drink coffee before bed.)", "以前", "yǐqián", "Action + 以前."),
      fb(C, "下课___，我们去打篮球。(After class, we play basketball.)", "以后", "yǐhòu", "Action + 以后."),
      fb(C, "我在上海的___，常常去外滩。(When I was in Shanghai, I often went to the Bund.)", "时候", "shíhou", "…的时候: when."),
      toZh("Before eating, wash your hands.", "吃饭以前洗手。", "Chī fàn yǐqián xǐ shǒu.", "Action + 以前 first.", ["吃饭以前要洗手。", "Chī fàn yǐqián yào xǐ shǒu.", "吃饭以前，先洗手。", "Chī fàn yǐqián, xiān xǐ shǒu."]),
      toZh("After work, I go running.", "下班以后，我去跑步。", "Xiàbān yǐhòu, wǒ qù pǎobù.", "Action + 以后 first.", ["下班以后我去跑步。", "Xiàbān yǐhòu wǒ qù pǎobù.", "我下班以后去跑步。", "Wǒ xiàbān yǐhòu qù pǎobù."]),
      toEn("我上大学的时候学过法语。", "Wǒ shàng dàxué de shíhou xué guo Fǎyǔ.", "I studied French when I was at university.", "…的时候 + 过.", ["When I was at university, I studied French.", "I studied French in college.", "When I was in college I studied French.", "I learned French at university.", "I studied French at university."]),
      say("吃饭以前要洗手。", "吃饭以前要洗手: wash your hands before eating.", "yǐqián: a dip, then a rise.", "Remind a child to wash their hands."),
    ]
  ),

  layer(
    S,
    "zh-a2r-directions",
    "Mission: Find the Museum",
    "Your mission: ask a stranger the way to the museum, follow their directions, and check how far it is.",
    "7 min",
    [
      sec(
        "Ask and listen",
        [
          `${zh("请问，博物馆怎么走？", "Qǐngwèn, bówùguǎn zěnme zǒu?")} Listen for: ${zh("一直走", "yìzhí zǒu")} (straight on), ${zh("到第二个路口往右拐", "dào dì-èr ge lùkǒu wǎng yòu guǎi")} (turn right at the second junction), ${zh("在你的左边", "zài nǐ de zuǒbian")} (on your left).`,
          `Check the distance: ${zh("离这儿远吗？", "Lí zhèr yuǎn ma?")} -- ${zh("不远，走路十分钟。", "Bù yuǎn, zǒulù shí fēnzhōng.")}`,
        ],
        [ex("到第二个路口往右拐。", "Dào dì-èr ge lùkǒu wǎng yòu guǎi.", "Turn right at the second junction."), ex("博物馆在银行对面。", "Bówùguǎn zài yínháng duìmiàn.", "The museum is opposite the bank.")],
        [mc("Opposite the bank:", ["在银行对面", "在银行旁边", "在银行后面", "在银行里"], 0, "对面: opposite.")]
      ),
    ],
    [
      mt("Match.", [["一直走", "go straight on"], ["往右拐", "turn right"], ["对面", "opposite"], ["路口", "junction"]], "Direction words."),
      listen("一直走，到红绿灯往左拐。", "What should you do at the lights?", ["Turn left", "Turn right", "Go straight on", "Stop"], 0, "往左拐: turn left."),
      fb(C, "请问，博物馆怎么___？(Excuse me, how do I get to the museum?)", "走", "zǒu", "怎么走: how to get there."),
      fb(C, "这儿___地铁站远吗？(Is the subway station far from here?)", "离", "lí", "离: distance from."),
      fb(C, "到第二个路口往___拐。(Turn right at the second junction.)", "右", "yòu", "右: right."),
      toZh("Go straight on, then turn left.", "一直走，然后往左拐。", "Yìzhí zǒu, ránhòu wǎng zuǒ guǎi.", "一直走 + 然后 + 往左拐.", ["一直走，再往左拐。", "Yìzhí zǒu, zài wǎng zuǒ guǎi.", "一直走，往左拐。", "Yìzhí zǒu, wǎng zuǒ guǎi."]),
      toZh("Is it far from here?", "离这儿远吗？", "Lí zhèr yuǎn ma?", "离 + 这儿 + 远吗.", ["离这里远吗？", "Lí zhèlǐ yuǎn ma?"]),
      toEn("银行在超市对面。", "Yínháng zài chāoshì duìmiàn.", "The bank is opposite the supermarket.", "对面: opposite.", ["The bank is across from the supermarket.", "The bank's opposite the supermarket.", "The bank is across the street from the supermarket."]),
      say("请问，博物馆怎么走？", "请问，博物馆怎么走: excuse me, how do I get to the museum?", "bówùguǎn: rising, falling, dipping.", "Ask a stranger the way."),
    ]
  ),
];
