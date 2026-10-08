// B1 unit 1 practice lessons (最/比较, opinions, 多 + adjective, 又…又,
// interests, 是…的), drafted from their specs in specs.ts.

import { ex, fb, layer, listen, mc, ms, mt, say, sec, toEn, toZh, wo, zh } from "./authoring";
import { ZH_B1_SPEC as S } from "./specs";

const C = "Complete (characters or pinyin).";

export const ZH_B1_LAYERS_U1 = [
  layer(
    S,
    "zh-b1d-zui",
    "Pattern Practice: The Best, the Most, Fairly",
    "最 + adjective for the top of a group, 最 + verb for favourites, and 比较 to soften -- drilled with everyday topics.",
    "6 min",
    [
      sec(
        "Three frames",
        [
          "Group + subject + 最 + adjective: 我们家我爸爸最高. Subject + 最 + liking verb: 我最喜欢春天. Subject + 比较 + adjective: 这个比较贵.",
          "最 + adjective + 的 + noun for \"the …-est thing\": 最好的朋友 (best friend).",
        ],
        [ex("她是我最好的朋友。", "Tā shì wǒ zuì hǎo de péngyou.", "She's my best friend."), ex("这儿的冬天比较冷。", "Zhèr de dōngtiān bǐjiào lěng.", "Winters here are fairly cold.")],
        [mc("my best friend:", ["我最好的朋友", "我好最的朋友", "我的最朋友好", "最我好的朋友"], 0, "最 + adjective + 的 + noun.")]
      ),
    ],
    [
      listen("我最喜欢春天。", "Which season does the speaker like most?", ["Spring", "Summer", "Autumn", "Winter"], 0, "春天: spring."),
      mc("Who's tallest in our class?", ["我们班谁最高？", "我们班最谁高？", "谁我们班高最？", "我们班谁高最？"], 0, "Group, then 谁 + 最 + adjective."),
      fb(C, "她是我___好的朋友。(She's my best friend.)", "最", "zuì", "最 + adjective + 的."),
      fb(C, "这儿的冬天___冷。(Winters here are fairly cold.)", "比较", "bǐjiào", "比较 + adjective."),
      fb(C, "我最喜欢的菜是___。(My favourite dish is dumplings.)", "饺子", "jiǎozi", "最喜欢的 + noun."),
      fb(C, "这三个里面，哪个最___？(Of these three, which is the cheapest?)", "便宜", "piányi", "最 + adjective."),
      toZh("What's your favourite colour?", "你最喜欢什么颜色？", "Nǐ zuì xǐhuan shénme yánsè?", "最喜欢 + 什么.", ["你最喜欢的颜色是什么？", "Nǐ zuì xǐhuan de yánsè shì shénme?"]),
      toZh("This is the most expensive one.", "这个最贵。", "Zhège zuì guì.", "最 + 贵.", ["这是最贵的。", "Zhè shì zuì guì de.", "这个是最贵的。", "Zhège shì zuì guì de."]),
      toZh("Chinese is fairly difficult.", "中文比较难。", "Zhōngwén bǐjiào nán.", "比较 + 难.", ["汉语比较难。", "Hànyǔ bǐjiào nán."]),
      say("她是我最好的朋友。", "她是我最好的朋友: she's my best friend.", "zuì hǎo: a fall, then a dip.", "Introduce your best friend."),
    ]
  ),

  layer(
    S,
    "zh-b1r-opinions",
    "Dialogue: What Did You Think of the Film?",
    "Two friends leave the cinema and disagree: giving opinions with 觉得 and 认为, agreeing and disagreeing politely.",
    "7 min",
    [
      sec(
        "The dialogue",
        ["Lin and Mark have just seen a film."],
        [
          ex("你觉得这个电影怎么样？", "Nǐ juéde zhège diànyǐng zěnmeyàng?", "What did you think of the film?"),
          ex("我觉得很好看，特别是最后。", "Wǒ juéde hěn hǎokàn, tèbié shì zuìhòu.", "I thought it was great, especially the ending."),
          ex("是吗？我觉得有点儿长。", "Shì ma? Wǒ juéde yǒudiǎnr cháng.", "Really? I thought it was a bit long."),
          ex("我同意，可是演员都很好。", "Wǒ tóngyì, kěshì yǎnyuán dōu hěn hǎo.", "I agree, but the actors were all good."),
          ex("我认为这是今年最好的电影。", "Wǒ rènwéi zhè shì jīnnián zuì hǎo de diànyǐng.", "I'd say it's the best film this year."),
        ],
        [mc("What did Mark think?", ["It was a bit long.", "It was the best film ever.", "The actors were bad.", "He didn't see it."], 0, "有点儿长: a bit long.")]
      ),
      sec(
        "Agreeing and disagreeing",
        [
          `${zh("我同意", "wǒ tóngyì")} (I agree), ${zh("我不同意", "wǒ bù tóngyì")} (I disagree), ${zh("你说得对", "nǐ shuō de duì")} (you're right). Soften a disagreement with 是吗？ or 可能吧 (maybe).`,
        ],
        [ex("你说得对。", "Nǐ shuō de duì.", "You're right.")],
        [mc("I agree:", ["我同意。", "我同意不。", "我是同意的吗。", "同意我。"], 0, "同意: agree.")]
      ),
    ],
    [
      mt("Match.", [["我同意", "I agree"], ["我不同意", "I disagree"], ["你说得对", "you're right"], ["可能吧", "maybe"]], "Reacting to opinions."),
      listen("我觉得有点儿长。", "What's the speaker's opinion?", ["It was a bit long.", "It was too short.", "It was great.", "It was boring."], 0, "有点儿长: a bit long."),
      fb(C, "你___这个电影怎么样？(What did you think of the film?)", "觉得", "juéde", "觉得 + 怎么样."),
      fb(C, "我不___，我觉得很好看。(I disagree -- I thought it was great.)", "同意", "tóngyì", "不同意: disagree."),
      fb(C, "我___这是今年最好的电影。(I consider it the best film this year.)", "认为", "rènwéi", "认为: consider.", { altAnswers: ["觉得", "juéde"] }),
      toZh("I think it's a bit expensive.", "我觉得有点儿贵。", "Wǒ juéde yǒudiǎnr guì.", "觉得 + 有点儿 + adjective.", ["我觉得有一点儿贵。", "Wǒ juéde yǒu yìdiǎnr guì."]),
      toZh("You're right.", "你说得对。", "Nǐ shuō de duì.", "说得对: said it right.", ["你是对的。", "Nǐ shì duì de."]),
      toEn("我同意你的看法。", "Wǒ tóngyì nǐ de kànfǎ.", "I agree with your view.", "同意 + 看法.", ["I agree with you.", "I share your view.", "I agree with your opinion.", "I agree with what you think."]),
      say("我觉得很好看，你觉得呢？", "我觉得很好看，你觉得呢: I thought it was great -- what about you?", "Rise slightly on 呢.", "Give your opinion of a film and ask your friend's."),
    ]
  ),

  layer(
    S,
    "zh-b1d-duo-adj",
    "Speed Round: How Big, How Far, How Tall",
    "多 + adjective questions and their number answers, fast: ages, distances, heights and weights.",
    "6 min",
    [
      sec(
        "Questions and answers",
        [
          "多大 (age) → 二十八岁. 多远 (distance) → 两公里. 多高 (height) → 一米六五. 多重 (weight) → 五公斤.",
          "多大 also asks about size: 你的房间多大？ -- 二十平方米 (20 m²).",
        ],
        [ex("你的房间多大？", "Nǐ de fángjiān duō dà?", "How big is your room?"), ex("二十平方米。", "Èrshí píngfāngmǐ.", "Twenty square metres.")],
        [listen("你多高？", "What's being asked?", ["How tall are you?", "How old are you?", "How heavy are you?", "How far is it?"], 0, "多高: how tall.")]
      ),
    ],
    [
      listen("离这儿两公里。", "How far is it?", ["Two kilometres", "Twelve kilometres", "Two metres", "Twenty minutes"], 0, "两公里: two kilometres."),
      listen("我一米六五。", "How tall is the speaker?", ["1.65 m", "1.56 m", "1.75 m", "65 kg"], 0, "一米六五: 1.65 metres."),
      mc("多重 asks about:", ["weight", "height", "age", "distance"], 0, "重: heavy."),
      fb(C, "你的房间___大？(How big is your room?)", "多", "duō", "多 + adjective."),
      fb(C, "火车站离这儿多___？(How far is the station?)", "远", "yuǎn", "多远: how far."),
      fb(C, "这个箱子多___？(How heavy is this case?)", "重", "zhòng", "多重: how heavy."),
      fb(C, "我今年三十___。(I'm thirty this year.)", "岁", "suì", "Age: number + 岁."),
      toZh("How far is the airport?", "机场多远？", "Jīchǎng duō yuǎn?", "多 + 远.", ["机场离这儿多远？", "Jīchǎng lí zhèr duō yuǎn?"]),
      toZh("How big is your apartment?", "你的公寓多大？", "Nǐ de gōngyù duō dà?", "多 + 大.", ["你家多大？", "Nǐ jiā duō dà?", "你的房子多大？", "Nǐ de fángzi duō dà?"]),
      say("你的房间多大？", "你的房间多大: how big is your room?", "duō dà: high, then falling.", "Ask a friend about their room."),
    ]
  ),

  layer(
    S,
    "zh-b1d-youyou",
    "Substitution: 又…又…",
    "Swap pairs of matching qualities through 又 A 又 B: people, food, places and weather.",
    "6 min",
    [
      sec(
        "The frame",
        [
          "Subject + 又 + quality + 又 + quality, both leaning the same way. People: 又高又帅, 又聪明又努力. Food: 又香又甜. Places: 又安静又干净. Weather: 又冷又湿.",
        ],
        [ex("这个苹果又大又甜。", "Zhège píngguǒ yòu dà yòu tián.", "This apple is big and sweet."), ex("那个地方又安静又干净。", "Nàge dìfang yòu ānjìng yòu gānjìng.", "That place is quiet and clean.")],
        [mc("Big and sweet:", ["又大又甜", "又大很甜", "大又甜又", "很大又很甜"], 0, "又 A 又 B, no 很.")]
      ),
    ],
    [
      listen("他又高又帅。", "What's he like?", ["Tall and handsome", "Short and kind", "Tall but shy", "Clever and funny"], 0, "又高又帅: tall and handsome."),
      mc("Which pair sounds natural?", ["又安静又干净", "又安静又吵", "又干净又脏", "又冷又热"], 0, "Both qualities lean the same way."),
      fb(C, "这个苹果又大又___。(This apple is big and sweet.)", "甜", "tián", "甜: sweet."),
      fb(C, "她又聪明___努力。(She's clever and hard-working.)", "又", "yòu", "又 A 又 B."),
      fb(C, "今天又冷又___。(Today is cold and damp.)", "湿", "shī", "湿: damp, wet."),
      fb(C, "那个地方又安静又___。(That place is quiet and clean.)", "干净", "gānjìng", "干净: clean."),
      toZh("tall and handsome", "又高又帅", "yòu gāo yòu shuài", "又 A 又 B.", ["又帅又高", "yòu shuài yòu gāo"]),
      toZh("The room is big and bright.", "房间又大又亮。", "Fángjiān yòu dà yòu liàng.", "又 A 又 B.", ["这个房间又大又亮。", "Zhège fángjiān yòu dà yòu liàng."]),
      wo(["这", "家", "店", "又", "便宜", "又", "方便"], "This shop is cheap and convenient.", "又 A 又 B."),
      say("这里又安静又干净。", "这里又安静又干净: it's quiet and clean here.", "ānjìng, gānjìng: both end on a light jìng.", "Describe a good hotel room."),
    ]
  ),

  layer(
    S,
    "zh-b1r-interests",
    "Mission: Find a Book for a Friend",
    "Your mission: find out what a friend is interested in, recommend a book about it, and say why it's good for them.",
    "7 min",
    [
      sec(
        "Asking about interests",
        [
          `${zh("你对什么感兴趣？", "Nǐ duì shénme gǎn xìngqù?")} -- ${zh("我对历史很感兴趣。", "Wǒ duì lìshǐ hěn gǎn xìngqù.")} Then recommend: ${zh("这是一本关于唐朝的书。", "Zhè shì yì běn guānyú Tángcháo de shū.")} (a book about the Tang dynasty).`,
          `Say why it suits them with 对: ${zh("这本书对学中文很有帮助。", "Zhè běn shū duì xué Zhōngwén hěn yǒu bāngzhù.")} (This book is very helpful for learning Chinese.)`,
        ],
        [ex("这本书对你很有用。", "Zhè běn shū duì nǐ hěn yǒuyòng.", "This book will be useful to you."), ex("你看过关于熊猫的书吗？", "Nǐ kàn guo guānyú xióngmāo de shū ma?", "Have you read any books about pandas?")],
        [mc("This book is useful to you:", ["这本书对你很有用。", "这本书你对很有用。", "对这本书你很有用。", "这本书很有用对你。"], 0, "对 + person before the adjective.")]
      ),
    ],
    [
      mt("Match.", [["感兴趣", "interested"], ["关于", "about"], ["有帮助", "helpful"], ["有用", "useful"]], "Interest words."),
      listen("我对历史很感兴趣。", "What is the speaker interested in?", ["History", "Music", "Sport", "Cooking"], 0, "历史: history."),
      fb(C, "你___什么感兴趣？(What are you interested in?)", "对", "duì", "对 + thing + 感兴趣."),
      fb(C, "这是一本___中国菜的书。(This is a book about Chinese food.)", "关于", "guānyú", "关于 + topic."),
      fb(C, "这本书对学中文很有___。(This book really helps with learning Chinese.)", "帮助", "bāngzhù", "有帮助: helpful."),
      toZh("I'm interested in Chinese films.", "我对中国电影很感兴趣。", "Wǒ duì Zhōngguó diànyǐng hěn gǎn xìngqù.", "对 + topic + 感兴趣.", ["我对中国电影感兴趣。", "Wǒ duì Zhōngguó diànyǐng gǎn xìngqù."]),
      toZh("a book about pandas", "一本关于熊猫的书", "yì běn guānyú xióngmāo de shū", "关于 + topic + 的 + noun."),
      toEn("运动对身体很好。", "Yùndòng duì shēntǐ hěn hǎo.", "Exercise is good for your health.", "对身体好: good for the body.", ["Sport is good for your health.", "Exercise is good for the body.", "Exercise is very good for your health.", "Sport is good for the body."]),
      say("你对什么感兴趣？", "你对什么感兴趣: what are you interested in?", "gǎn xìngqù: a dip, then a fall.", "Ask a new friend about their interests."),
    ]
  ),

  layer(
    S,
    "zh-b1r-shi-de",
    "Contrast: 了 or 是…的?",
    "了 reports that something happened; 是…的 picks out a detail of something already known. Same event, two questions.",
    "7 min",
    [
      sec(
        "News vs. detail",
        [
          `New information: ${zh("我去了北京。", "Wǒ qù le Běijīng.")} (I went to Beijing.) The listener now knows -- so the follow-up questions use 是…的: ${zh("你是什么时候去的？", "Nǐ shì shénme shíhou qù de?")} ${zh("你是怎么去的？", "Nǐ shì zěnme qù de?")}`,
          "So a conversation usually starts with 了 and then switches to 是…的 for the details.",
        ],
        [ex("我买了一个新手机。", "Wǒ mǎi le yí ge xīn shǒujī.", "I bought a new phone."), ex("你是在哪儿买的？", "Nǐ shì zài nǎr mǎi de?", "Where did you buy it?")],
        [mc("Your friend says 我买了一辆车. You ask when:", ["你是什么时候买的？", "你什么时候买了吗？", "你买了什么时候？", "你是买了什么时候？"], 0, "A detail of a known event: 是…的.")]
      ),
    ],
    [
      ms("Which ask about a detail of a known event? (Choose all that apply.)", ["你是跟谁去的？", "你是怎么来的？", "你去了吗？", "这是在哪儿拍的？"], [0, 1, 3], "是…的 picks out a detail."),
      mc("Which reports news?", ["我昨天去了长城。", "我是昨天去的。", "我是坐车去的。", "我是跟朋友去的。"], 0, "了: something happened."),
      listen("你是跟谁一起去的？", "What does the speaker want to know?", ["Who you went with", "Where you went", "When you went", "Whether you went"], 0, "跟谁: with whom."),
      fb(C, "我去___上海。(I went to Shanghai.)", "了", "le", "News: verb + 了."),
      fb(C, "你是坐火车去___？(Did you go by train?)", "的", "de", "是…的 for how."),
      fb(C, "这张照片是在哪儿___的？(Where was this photo taken?)", "拍", "pāi", "拍照片: take a photo."),
      toZh("I bought a new phone.", "我买了一个新手机。", "Wǒ mǎi le yí ge xīn shǒujī.", "News: 了.", ["我买了新手机。", "Wǒ mǎi le xīn shǒujī."]),
      toZh("Where did you buy it?", "你是在哪儿买的？", "Nǐ shì zài nǎr mǎi de?", "是…的 for where.", ["你在哪儿买的？", "Nǐ zài nǎr mǎi de?", "你是在哪里买的？", "Nǐ shì zài nǎlǐ mǎi de?"]),
      toEn("我是跟家人一起去的。", "Wǒ shì gēn jiārén yìqǐ qù de.", "I went with my family.", "是…的 for with whom.", ["I went together with my family.", "I went with family.", "It was with my family that I went.", "I went with my family members."]),
      say("你是怎么来的？", "你是怎么来的: how did you get here?", "de at the end is light.", "Ask a guest how they came."),
    ]
  ),
];
