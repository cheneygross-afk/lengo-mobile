// Chinese B1, unit 1: opinions and comparisons -- 最 and 比较, 觉得 and
// 认为, 多 + adjective, 又…又, 对 and 关于, 是…的. Instructions stay in
// English through B1 (docs/curriculum-architecture.md, section 3.4).

import { ex, fb, lesson, listen, mc, ms, mt, say, sec, toEn, toZh, zh } from "./authoring";

const L = "ZH-B1" as const;
const C = "Complete (characters or pinyin).";

export const ZH_B1_LESSONS_U1 = [
  lesson(
    L,
    "zh-b1-zui-bijiao",
    "The Most and Fairly: 最 and 比较",
    "最 for the top of the scale (最好, 最喜欢), and 比较 for a mild \"fairly, rather\" -- the softer cousin of 很.",
    "8 min",
    [
      sec(
        "最: the most",
        [
          `${zh("最", "zuì")} before an adjective or a liking verb marks the top: ${zh("最好", "zuì hǎo")} (the best), ${zh("最贵", "zuì guì")} (the most expensive), ${zh("我最喜欢夏天。", "Wǒ zuì xǐhuan xiàtiān.")} (I like summer best).`,
          "To say \"of all\" or \"in the class,\" put the group first: 我们班他最高 (he's the tallest in our class).",
        ],
        [ex("这是最好的饭店。", "Zhè shì zuì hǎo de fàndiàn.", "This is the best restaurant."), ex("我们班他最高。", "Wǒmen bān tā zuì gāo.", "He's the tallest in our class.")],
        [mc("I like coffee best:", ["我最喜欢咖啡。", "我喜欢最咖啡。", "我喜欢咖啡最。", "最我喜欢咖啡。"], 0, "最 before the verb or adjective.")]
      ),
      sec(
        "比较: fairly, rather",
        [
          `${zh("比较", "bǐjiào")} + adjective softens a statement: ${zh("今天比较冷。", "Jīntiān bǐjiào lěng.")} (It's fairly cold today.) It's more cautious than 很, and very common in polite talk.`,
          "比较 can also mean \"comparatively\" -- compared with something understood: 这个比较便宜 (this one's cheaper, of the two).",
        ],
        [ex("中文比较难。", "Zhōngwén bǐjiào nán.", "Chinese is fairly hard."), ex("我比较喜欢喝茶。", "Wǒ bǐjiào xǐhuan hē chá.", "I rather prefer tea.")],
        [mc("Which is the most cautious?", ["比较贵", "很贵", "太贵了", "最贵"], 0, "比较: fairly, rather.")]
      ),
    ],
    [
      mc("最好吃的菜 means:", ["the tastiest dish", "a fairly tasty dish", "a tastier dish", "a very tasty dish"], 0, "最: the most."),
      mt("Match.", [["最贵", "the most expensive"], ["比较贵", "fairly expensive"], ["更贵", "even more expensive"], ["太贵了", "too expensive"]], "Four degrees of expensive."),
      listen("我最喜欢秋天。", "Which season does the speaker like best?", ["Autumn", "Summer", "Spring", "Winter"], 0, "秋天: autumn."),
      fb(C, "这是___好的办法。(This is the best way.)", "最", "zuì", "最 + adjective."),
      fb(C, "今天___冷，多穿一点儿。(It's fairly cold today -- wear more.)", "比较", "bǐjiào", "比较 + adjective."),
      fb(C, "我们家我妹妹最___。(My younger sister is the youngest in our family.)", "小", "xiǎo", "Group first, then 最 + adjective."),
      toZh("Which one is the cheapest?", "哪个最便宜？", "Nǎge zuì piányi?", "哪个 + 最 + adjective."),
      toZh("Chinese is fairly hard.", "中文比较难。", "Zhōngwén bǐjiào nán.", "比较 + 难."),
      toEn("你最喜欢什么运动？", "Nǐ zuì xǐhuan shénme yùndòng?", "What's your favourite sport?", "最喜欢: like best.", ["What sport do you like best?", "What sport do you like the most?", "What's your favorite sport?", "Which sport do you like most?"]),
      say("我最喜欢夏天。", "我最喜欢夏天 (wǒ zuì xǐhuan xiàtiān): I like summer best.", "zuì is a sharp fall.", "Say your favourite season."),
    ],
    { teaches: ["grammar.zui-bijiao"] }
  ),

  lesson(
    L,
    "zh-b1-juede-renwei",
    "I Think: 觉得 and 认为",
    "Give opinions with 觉得 (feel, think -- everyday) and 认为 (consider -- more formal), and ask others what they think.",
    "8 min",
    [
      sec(
        "觉得: everyday opinions",
        [
          `${zh("我觉得", "wǒ juéde")} + statement is the most common way to give an opinion: ${zh("我觉得这个电影很好看。", "Wǒ juéde zhège diànyǐng hěn hǎokàn.")} Ask ${zh("你觉得怎么样？", "Nǐ juéde zěnmeyàng?")} (what do you think?)`,
          "Negating it: put 不 inside, on the opinion -- 我觉得不好 -- or on 觉得 for \"I don't think\": 我不觉得很难.",
        ],
        [ex("我觉得有点儿冷。", "Wǒ juéde yǒudiǎnr lěng.", "I feel a bit cold."), ex("你觉得这件衣服怎么样？", "Nǐ juéde zhè jiàn yīfu zěnmeyàng?", "What do you think of this outfit?")],
        [mc("What do you think?", ["你觉得怎么样？", "你认为吗？", "你觉得什么？", "你怎么觉得？"], 0, "觉得 + 怎么样.")]
      ),
      sec(
        "认为 and 看法",
        [
          `${zh("认为", "rènwéi")} is \"consider, hold the view\" -- more considered, used in discussions and writing: ${zh("我认为这个办法不好。", "Wǒ rènwéi zhège bànfǎ bù hǎo.")}`,
          `Ask for someone's view: ${zh("你的看法呢？", "Nǐ de kànfǎ ne?")} / ${zh("你对这个问题有什么看法？", "Nǐ duì zhège wèntí yǒu shénme kànfǎ?")} (later in this unit, 对).`,
        ],
        [ex("很多人认为中文很难。", "Hěn duō rén rènwéi Zhōngwén hěn nán.", "Many people consider Chinese hard.")],
        [mc("Which sounds more formal?", ["我认为…", "我觉得…", "Both the same", "Neither"], 0, "认为 is more considered.")]
      ),
    ],
    [
      mc("我觉得有点儿累 means:", ["I feel a bit tired.", "I think he's tired.", "I'm not tired.", "I was tired."], 0, "觉得: feel."),
      ms("Which give an opinion? (Choose all that apply.)", ["我觉得很好。", "我认为不对。", "我去了北京。", "我觉得他说得对。"], [0, 1, 3], "觉得 and 认为 introduce opinions."),
      listen("我觉得这个电影很好看。", "What does the speaker think of the film?", ["It's good.", "It's boring.", "It's too long.", "They haven't seen it."], 0, "很好看: very good."),
      fb(C, "你___怎么样？(What do you think?)", "觉得", "juéde", "觉得 + 怎么样."),
      fb(C, "很多人___中文很难。(Many people consider Chinese hard.)", "认为", "rènwéi", "认为: consider.", { altAnswers: ["觉得", "juéde"] }),
      fb(C, "你的___呢？(What's your view?)", "看法", "kànfǎ", "看法: view, opinion."),
      toZh("I think it's a good idea.", "我觉得这是个好主意。", "Wǒ juéde zhè shì ge hǎo zhǔyi.", "我觉得 + statement.", ["我觉得这个主意很好。", "Wǒ juéde zhège zhǔyi hěn hǎo.", "我觉得是个好主意。", "Wǒ juéde shì ge hǎo zhǔyi."]),
      toZh("I don't think it's difficult.", "我不觉得很难。", "Wǒ bù juéde hěn nán.", "不觉得: don't think.", ["我觉得不难。", "Wǒ juéde bù nán."]),
      toEn("你觉得这件衣服怎么样？", "Nǐ juéde zhè jiàn yīfu zěnmeyàng?", "What do you think of this outfit?", "觉得 + 怎么样.", ["What do you think of these clothes?", "What do you think of this?", "How do you like this outfit?", "What do you think of this piece of clothing?", "How do you like these clothes?"]),
      say("我觉得你说得对。", "我觉得你说得对: I think you're right.", "juéde: rising, then light.", "Agree with someone politely."),
    ],
    { teaches: ["grammar.juede-renwei"], previews: ["grammar.dui-guanyu"] }
  ),

  lesson(
    L,
    "zh-b1-duo-adj",
    "How Old, How Far, How Tall: 多 + Adjective",
    "Ask for measurements with 多 + adjective: 多大, 多远, 多高, 多重 -- and answer with the number.",
    "7 min",
    [
      sec(
        "多 + adjective",
        [
          `${zh("多", "duō")} before a measurable adjective asks \"how … ?\": ${zh("你多大？", "Nǐ duō dà?")} (how old are you? -- to an adult), ${zh("离这儿多远？", "Lí zhèr duō yuǎn?")} (how far?), ${zh("你多高？", "Nǐ duō gāo?")} (how tall?).`,
          "Add 了 for how much something has reached: 你多大了？ is the usual way to ask a peer's age; 几岁 is for children, 多大年纪 for the elderly.",
        ],
        [ex("你今年多大？", "Nǐ jīnnián duō dà?", "How old are you this year?"), ex("学校离这儿多远？", "Xuéxiào lí zhèr duō yuǎn?", "How far is the school from here?"), ex("你多高？", "Nǐ duō gāo?", "How tall are you?")],
        [mc("How old are you? (to an adult)", ["你多大？", "你几岁？", "你多少大？", "你大多？"], 0, "多大 for adults; 几岁 for children.")]
      ),
      sec(
        "Answering",
        [
          `Give the number and the unit: ${zh("二十五岁", "èrshíwǔ suì")}, ${zh("三公里", "sān gōnglǐ")} (3 km), ${zh("一米八", "yì mǐ bā")} (1.8 m), ${zh("六十公斤", "liùshí gōngjīn")} (60 kg).`,
        ],
        [ex("一米八", "yì mǐ bā", "1.8 metres"), ex("三公里", "sān gōnglǐ", "three kilometres")],
        [mc("一米七 is:", ["1.7 metres", "17 metres", "1.7 kilograms", "17 years old"], 0, "米: metre.")]
      ),
    ],
    [
      mc("多远 asks about:", ["distance", "age", "height", "weight"], 0, "远: far."),
      mt("Match.", [["多大", "how old"], ["多远", "how far"], ["多高", "how tall"], ["多重", "how heavy"]], "多 + adjective."),
      listen("离这儿多远？", "What is being asked?", ["How far is it from here?", "Is it near?", "Where is it?", "How long does it take?"], 0, "多远: how far."),
      fb(C, "你今年___大？(How old are you this year?)", "多", "duō", "多 + 大."),
      fb(C, "机场离这儿多___？(How far is the airport from here?)", "远", "yuǎn", "多 + 远."),
      fb(C, "他一___八，很高。(He's 1.8 m -- very tall.)", "米", "mǐ", "米: metre."),
      toZh("How old are you? (to a friend)", "你多大了？", "Nǐ duō dà le?", "多大 + 了.", ["你多大？", "Nǐ duō dà?"]),
      toZh("How tall is your brother?", "你哥哥多高？", "Nǐ gēge duō gāo?", "多 + 高.", ["你弟弟多高？", "Nǐ dìdi duō gāo?"]),
      toEn("你的行李多重？", "Nǐ de xíngli duō zhòng?", "How heavy is your luggage?", "多 + 重.", ["How much does your luggage weigh?", "How heavy is your bag?", "How heavy are your bags?", "How heavy is your baggage?"]),
      say("你多大了？", "你多大了 (nǐ duō dà le): how old are you?", "duō high, dà falling.", "Ask a new friend their age."),
    ],
    { teaches: ["grammar.duo-adj"], previews: ["function.travel"] }
  ),

  lesson(
    L,
    "zh-b1-youyou",
    "Both … and …: 又…又…",
    "又 A 又 B links two qualities of the same thing: 又便宜又好吃. Both must point the same way -- good with good, bad with bad.",
    "7 min",
    [
      sec(
        "Two qualities",
        [
          `${zh("又", "yòu")} + adjective + ${zh("又", "yòu")} + adjective: ${zh("这家饭店又便宜又好吃。", "Zhè jiā fàndiàn yòu piányi yòu hǎochī.")} (This restaurant is both cheap and good.) No 很 inside.`,
          "Both qualities lean the same way: 又贵又难吃 (pricey and bad) is fine; 又贵又好吃 sounds odd -- use 虽然…但是 for a contrast.",
          "It works with verbs too: 他又唱又跳 (he sang and danced).",
        ],
        [ex("她又聪明又漂亮。", "Tā yòu cōngming yòu piàoliang.", "She's both clever and pretty."), ex("今天又冷又刮风。", "Jīntiān yòu lěng yòu guā fēng.", "Today it's cold and windy.")],
        [mc("Cheap and tasty:", ["又便宜又好吃", "又便宜很好吃", "很便宜又好吃又", "又很便宜又很好吃"], 0, "又 + adjective + 又 + adjective, no 很.")]
      ),
    ],
    [
      mc("Which pair sounds natural?", ["又便宜又好", "又便宜又贵", "又好吃又难吃", "又快又慢"], 0, "Both qualities should lean the same way."),
      ms("Which are correct? (Choose all that apply.)", ["他又高又帅。", "这个房间又大又干净。", "这个苹果又很大又很甜。", "她又唱又跳。"], [0, 1, 3], "No 很 inside 又…又."),
      listen("这家饭店又便宜又好吃。", "What's the restaurant like?", ["Cheap and good", "Expensive but good", "Cheap but bad", "Expensive and bad"], 0, "又便宜又好吃."),
      fb(C, "这个房间___大又干净。(This room is big and clean.)", "又", "yòu", "又 A 又 B."),
      fb(C, "今天又冷又___风。(It's cold and windy today.)", "刮", "guā", "刮风: windy."),
      fb(C, "她又___明又漂亮。(She's clever and pretty.)", "聪", "cōng", "聪明: clever."),
      toZh("cheap and good", "又便宜又好", "yòu piányi yòu hǎo", "又 A 又 B.", ["又便宜又好吃", "yòu piányi yòu hǎochī"]),
      toZh("It's both far and expensive.", "又远又贵。", "Yòu yuǎn yòu guì.", "又 A 又 B.", ["又贵又远。", "Yòu guì yòu yuǎn."]),
      toEn("他做的菜又好看又好吃。", "Tā zuò de cài yòu hǎokàn yòu hǎochī.", "The food he makes looks good and tastes good.", "又 A 又 B: both qualities.", ["His dishes look and taste great.", "The dishes he makes are both beautiful and delicious.", "His cooking looks good and tastes good.", "The food he cooks is pretty and delicious."]),
      say("又便宜又好吃！", "又便宜又好吃: cheap and delicious!", "Stress the two adjectives, not 又.", "Recommend a restaurant."),
    ],
    { teaches: ["grammar.youyou"] }
  ),

  lesson(
    L,
    "zh-b1-dui-guanyu",
    "Toward and About: 对 and 关于",
    "对 marks who or what something is directed at (对…感兴趣, 对…好, 对身体不好); 关于 means \"about, on the subject of.\"",
    "8 min",
    [
      sec(
        "对: toward",
        [
          `${zh("对", "duì")} + person/thing + verb or adjective: ${zh("我对中国文化很感兴趣。", "Wǒ duì Zhōngguó wénhuà hěn gǎn xìngqù.")} (I'm very interested in Chinese culture.) ${zh("她对我很好。", "Tā duì wǒ hěn hǎo.")} (She's very kind to me.)`,
          `${zh("对身体不好", "duì shēntǐ bù hǎo")}: bad for your health. The 对 phrase goes before the adjective or verb, never after.`,
        ],
        [ex("抽烟对身体不好。", "Chōuyān duì shēntǐ bù hǎo.", "Smoking is bad for your health."), ex("你对什么感兴趣？", "Nǐ duì shénme gǎn xìngqù?", "What are you interested in?")],
        [mc("I'm interested in music:", ["我对音乐很感兴趣。", "我很感兴趣音乐。", "我感兴趣对音乐。", "音乐对我感兴趣。"], 0, "对 + thing + 感兴趣.")]
      ),
      sec(
        "关于: about",
        [
          `${zh("关于", "guānyú")} + topic: a book, a talk, a film about something. ${zh("一本关于中国历史的书", "yì běn guānyú Zhōngguó lìshǐ de shū")} (a book about Chinese history). With 的 before a noun.`,
        ],
        [ex("我看了一个关于熊猫的电影。", "Wǒ kàn le yí ge guānyú xióngmāo de diànyǐng.", "I watched a film about pandas.")],
        [mc("a book about China:", ["一本关于中国的书", "一本对中国的书", "一本书关于中国", "关于一本中国书"], 0, "关于 + topic + 的 + noun.")]
      ),
    ],
    [
      mc("对身体不好 means:", ["bad for your health", "about the body", "not good at sport", "good for the body"], 0, "对: toward, for."),
      ms("Which use 对 correctly? (Choose all that apply.)", ["他对我很好。", "我对历史很感兴趣。", "我感兴趣对历史。", "喝水对身体好。"], [0, 1, 3], "The 对 phrase goes before the adjective."),
      listen("你对什么感兴趣？", "What is being asked?", ["What are you interested in?", "What do you like to eat?", "What's wrong?", "What are you doing?"], 0, "对…感兴趣."),
      fb(C, "我___中国菜很感兴趣。(I'm interested in Chinese food.)", "对", "duì", "对 + thing + 感兴趣."),
      fb(C, "这是一本___熊猫的书。(This is a book about pandas.)", "关于", "guānyú", "关于 + topic."),
      fb(C, "抽烟对身体不___。(Smoking is bad for your health.)", "好", "hǎo", "对身体不好."),
      toZh("She's very kind to me.", "她对我很好。", "Tā duì wǒ hěn hǎo.", "对 + person + 很好."),
      toZh("I'm interested in Chinese history.", "我对中国历史很感兴趣。", "Wǒ duì Zhōngguó lìshǐ hěn gǎn xìngqù.", "对 + topic + 感兴趣.", ["我对中国历史感兴趣。", "Wǒ duì Zhōngguó lìshǐ gǎn xìngqù.", "我对中国的历史很感兴趣。", "Wǒ duì Zhōngguó de lìshǐ hěn gǎn xìngqù."]),
      toEn("你对这个问题有什么看法？", "Nǐ duì zhège wèntí yǒu shénme kànfǎ?", "What's your view on this question?", "对…有什么看法.", ["What do you think about this problem?", "What's your opinion on this issue?", "What is your view on this question?", "What do you think about this question?", "What's your opinion about this?"]),
      say("我对中国文化很感兴趣。", "我对中国文化很感兴趣: I'm very interested in Chinese culture.", "gǎn xìngqù: a dip, then a fall.", "Say what you're interested in."),
    ],
    { teaches: ["grammar.dui-guanyu"] }
  ),

  lesson(
    L,
    "zh-b1-shi-de",
    "When, Where, How It Happened: 是…的",
    "For an event you both know happened, 是…的 puts the spotlight on the detail: 我是昨天来的, 你是怎么来的？",
    "9 min",
    [
      sec(
        "Spotlight on the detail",
        [
          "When you already know something happened, and the question is when, where, how or with whom, Chinese frames the detail with 是…的: 你是什么时候来的？-- 我是昨天来的.",
          "是 goes right before the detail (the time, the place, 坐飞机, 跟谁); 的 goes at the end. In speech 是 is often dropped: 我昨天来的.",
        ],
        [
          ex("你是什么时候来的？", "Nǐ shì shénme shíhou lái de?", "When did you come?"),
          ex("我是昨天来的。", "Wǒ shì zuótiān lái de.", "I came yesterday."),
          ex("我们是坐飞机去的。", "Wǒmen shì zuò fēijī qù de.", "We went by plane."),
        ],
        [mc("How did you come here? (you know they came)", ["你是怎么来的？", "你怎么来了？", "你来怎么的？", "你是来怎么？"], 0, "是 + how + verb + 的.")]
      ),
      sec(
        "是…的 or 了?",
        [
          "了 reports that something happened: 我去了北京 (I went to Beijing -- news). 是…的 picks out a detail of something already known: 我是跟朋友一起去的 (it was with friends that I went).",
          "Negative: 不是…的 -- 我不是坐飞机来的，是坐火车来的.",
        ],
        [ex("我不是一个人去的，是跟朋友一起去的。", "Wǒ bú shì yí ge rén qù de, shì gēn péngyou yìqǐ qù de.", "I didn't go alone -- I went with friends.")],
        [mc("Which asks about a detail of a known event?", ["你是在哪儿买的？", "你买了吗？", "你买什么？", "你要买吗？"], 0, "是…的: where did you buy it?")]
      ),
    ],
    [
      mc("我是去年来中国的 stresses:", ["when the speaker came", "that the speaker came", "where the speaker came from", "how the speaker came"], 0, "是 + 去年 + 来…的: the time."),
      ms("Which are correct? (Choose all that apply.)", ["你是怎么来的？", "我是坐地铁来的。", "我是来坐地铁的了。", "她是在北京出生的。"], [0, 1, 3], "是 + detail + verb + 的."),
      listen("我们是坐火车去的。", "How did they go?", ["By train", "By plane", "By car", "On foot"], 0, "坐火车: by train."),
      fb(C, "你是什么时候来___？(When did you come?)", "的", "de", "是 + detail + verb + 的."),
      fb(C, "我___昨天到的。(I arrived yesterday.)", "是", "shì", "是 + detail."),
      fb(C, "这件衣服你是在哪儿买___？(Where did you buy this?)", "的", "de", "是 + detail + verb + 的."),
      toZh("I came by plane.", "我是坐飞机来的。", "Wǒ shì zuò fēijī lái de.", "是 + 坐飞机 + 来 + 的.", ["我坐飞机来的。", "Wǒ zuò fēijī lái de."]),
      toZh("When did you arrive?", "你是什么时候到的？", "Nǐ shì shénme shíhou dào de?", "是 + 什么时候 + 到 + 的.", ["你什么时候到的？", "Nǐ shénme shíhou dào de?"]),
      toEn("我不是一个人来的。", "Wǒ bú shì yí ge rén lái de.", "I didn't come alone.", "不是 + detail + verb + 的.", ["I did not come alone.", "I didn't come by myself.", "I didn't come on my own.", "I'm not here alone."]),
      say("我是去年来的。", "我是去年来的: I came last year.", "de at the end is light.", "Say when you came to a new city."),
    ],
    { teaches: ["grammar.shi-de"] }
  ),
];
