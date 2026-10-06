// Synced from cheneygross-afk/lengo:src/lib/lessons/zh/b2-layers-u5.ts by scripts/sync-content.mjs -- edit it there, not here.
// B2 unit 5 practice lessons (the environment, shopping online,
// festivals), drafted from their specs.

import { ex, fb, layer, listen, mc, say, sec, toEn, toZh } from "./authoring";
import { ZH_B2_SPEC as S } from "./specs";

const C = "填空 · Complete (characters or pinyin).";

export const ZH_B2_LAYERS_U5 = [
  layer(
    S,
    "zh-b2r-environment",
    "Dialogue: The New Rubbish Rules",
    "Two neighbours grumble about sorting rubbish, then talk themselves round -- the environment words in a real conversation.",
    "7 min",
    [
      sec(
        "On the stairs",
        [
          "A: 你知道吗？从下个月开始，垃圾要分类了。 B: 真的吗？怎么分？ A: 可回收的、厨余的、有害的和其他的。 B: 太麻烦了！ A: 虽然麻烦，但是对保护环境很有好处。",
          "可回收 (recyclable), 厨余 (kitchen waste), 有害 (hazardous), 好处 (benefit).",
        ],
        [ex("从下个月开始，垃圾要分类了。", "Cóng xià ge yuè kāishǐ, lājī yào fēnlèi le.", "From next month, rubbish has to be sorted."), ex("虽然麻烦，但是对环境有好处。", "Suīrán máfan, dànshì duì huánjìng yǒu hǎochu.", "It's a hassle, but it's good for the environment.")],
        [mc("垃圾分类 means:", ["sorting rubbish", "throwing rubbish away", "collecting rubbish", "burning rubbish"], 0, "分类: sort into types.")]
      ),
    ],
    [
      listen("为了保护环境，我们应该少开车，多坐公共交通。", "What does the speaker suggest?", ["Drive less, use public transport", "Buy an electric car", "Walk everywhere", "Stay at home"], 0, "少开车，多坐公共交通."),
      mc("Which is good for the environment?", ["节约用水", "乱扔垃圾", "多用塑料袋", "整天开着空调"], 0, "节约用水: save water."),
      fb(C, "这条河以前很干净，现在被___了。(This river used to be clean; now it's been polluted.)", "污染", "wūrǎn", "被 + 污染."),
      fb(C, "出门的时候记得关灯，___电。(Turn the lights off when you go out to save electricity.)", "节约", "jiéyuē", "节约: save.", { altAnswers: ["节省", "jiéshěng", "省", "shěng"] }),
      fb(C, "不管多麻烦，垃圾都要___类。(However much of a hassle, rubbish must be sorted.)", "分", "fēn", "分类: sort."),
      toZh("The air here is much better than before.", "这里的空气比以前好多了。", "Zhèli de kōngqì bǐ yǐqián hǎo duō le.", "比 + 以前 + 好多了.", ["这儿的空气比以前好多了。", "Zhèr de kōngqì bǐ yǐqián hǎo duō le.", "这里的空气比以前好得多。", "Zhèli de kōngqì bǐ yǐqián hǎo de duō."]),
      toZh("Everyone should sort their rubbish.", "每个人都应该把垃圾分类。", "Měi ge rén dōu yīnggāi bǎ lājī fēnlèi.", "把 + 垃圾 + 分类.", ["大家都应该把垃圾分类。", "Dàjiā dōu yīnggāi bǎ lājī fēnlèi.", "每个人都应该垃圾分类。", "Měi ge rén dōu yīnggāi lājī fēnlèi.", "每个人都应该给垃圾分类。", "Měi ge rén dōu yīnggāi gěi lājī fēnlèi."]),
      toEn("由于污染严重，这里的鱼越来越少了。", "Yóuyú wūrǎn yánzhòng, zhèli de yú yuè lái yuè shǎo le.", "Because of serious pollution, there are fewer and fewer fish here.", "由于 + cause.", ["Owing to serious pollution, the fish here are getting fewer and fewer.", "Due to heavy pollution, there are fewer and fewer fish here.", "Because the pollution is serious, there are fewer fish here.", "The pollution is so bad that there are fewer and fewer fish here."]),
      say("保护环境，从我做起。", "保护环境，从我做起: protecting the environment starts with me.", "cóng wǒ zuò qǐ: rising, a dip, falling, a dip.", "Read out an environmental slogan."),
    ]
  ),

  layer(
    S,
    "zh-b2r-online",
    "Mission: The Wrong Size",
    "Your mission: order shoes online, pay by phone, and when the wrong size arrives, sort it out with customer service.",
    "8 min",
    [
      sec(
        "From order to return",
        [
          "网上买东西 / 网购 (shop online), 扫码付款 (pay by scanning), 快递 (delivery), 客服 (customer service), 退货 (return), 换货 (exchange), 大小不合适 (the wrong size).",
        ],
        [ex("我在网上买了一双鞋，可是大小不合适。", "Wǒ zài wǎngshang mǎi le yì shuāng xié, kěshì dàxiǎo bù héshì.", "I bought a pair of shoes online, but they're the wrong size."), ex("可以退货吗？", "Kěyǐ tuìhuò ma?", "Can I return it?")],
        [mc("退货 means:", ["return goods", "order goods", "deliver goods", "pay for goods"], 0, "退货: return an item.")]
      ),
    ],
    [
      listen("您的快递已经到了，请到门口取一下。", "Where is the delivery?", ["At the door", "At the post office", "On the way", "Lost"], 0, "到门口取: collect it at the door."),
      mc("客服 is:", ["customer service", "a customer", "a computer server", "a delivery driver"], 0, "客服: customer service."),
      fb(C, "我想把这双鞋退了，可以___货吗？(I want to return these shoes -- can I?)", "退", "tuì", "退货: return."),
      fb(C, "请扫这个___付款。(Please scan this code to pay.)", "码", "mǎ", "扫码: scan a code.", { altAnswers: ["二维码", "èrwéimǎ"] }),
      fb(C, "我的快递三天了还没___。(My parcel still hasn't arrived after three days.)", "到", "dào", "还没到: not here yet."),
      toZh("Can I exchange these for a bigger size?", "可以换大一号的吗？", "Kěyǐ huàn dà yí hào de ma?", "换 + 大一号.", ["能换大一号的吗？", "Néng huàn dà yí hào de ma?", "可以换一个大一号的吗？", "Kěyǐ huàn yí ge dà yí hào de ma?", "我可以换大一号的吗？", "Wǒ kěyǐ huàn dà yí hào de ma?"]),
      toZh("I paid with my phone.", "我是用手机付的钱。", "Wǒ shì yòng shǒujī fù de qián.", "是 … 的 for how.", ["我用手机付的钱。", "Wǒ yòng shǒujī fù de qián.", "我是用手机付款的。", "Wǒ shì yòng shǒujī fùkuǎn de.", "我用手机付款了。", "Wǒ yòng shǒujī fùkuǎn le."]),
      toEn("网上买东西虽然方便，但是有时候质量不好。", "Wǎngshang mǎi dōngxi suīrán fāngbiàn, dànshì yǒu shíhou zhìliàng bù hǎo.", "Shopping online is convenient, but sometimes the quality isn't good.", "虽然 … 但是.", ["Although online shopping is convenient, the quality is sometimes poor.", "Buying online is convenient, but sometimes the quality is bad.", "Online shopping is convenient, but the quality isn't always good.", "Although shopping online is convenient, sometimes the quality is not good."]),
      say("你好，我买的鞋大小不合适，可以退吗？", "你好，我买的鞋大小不合适，可以退吗: hi, the shoes I bought are the wrong size -- can I return them?", "tuì: one sharp fall.", "Call customer service."),
    ]
  ),

  layer(
    S,
    "zh-b2r-festival",
    "Dialogue: New Year with a Chinese Family",
    "A classmate invites you home for Spring Festival: what to bring, what not to give, and what to say when you get there.",
    "7 min",
    [
      sec(
        "The invitation",
        [
          "A: 春节你回国吗？ B: 不回，太远了。 A: 那来我家过年吧！我们一起包饺子。 B: 太好了！我应该带什么礼物？ A: 带点儿水果就行。对了，别送钟。",
        ],
        [ex("春节来我家过年吧！", "Chūn Jié lái wǒ jiā guò nián ba!", "Come to my place for Spring Festival!"), ex("带点儿水果就行。", "Dài diǎnr shuǐguǒ jiù xíng.", "Just bring some fruit.")],
        [mc("过年 means:", ["celebrate New Year", "a year passes", "a year ago", "next year"], 0, "过年: spend the New Year.")]
      ),
    ],
    [
      listen("我们家每年除夕都一起看春节晚会。", "What does the family do every New Year's Eve?", ["Watch the Spring Festival Gala together", "Go to a temple", "Travel abroad", "Go to bed early"], 0, "春节晚会: the Spring Festival Gala."),
      mc("Your host's grandmother gives you a 红包. Say:", ["谢谢！新年快乐！", "对不起！", "不用了。", "再见！"], 0, "Thank her and wish her a happy New Year."),
      fb(C, "除夕晚上，我们全家一起包___。(On New Year's Eve, the whole family makes dumplings.)", "饺子", "jiǎozi", "包饺子: make dumplings."),
      fb(C, "中秋节的时候，大家一起吃月饼、___月亮。(At Mid-Autumn, everyone eats mooncakes and admires the moon.)", "赏", "shǎng", "赏月: admire the moon.", { altAnswers: ["看", "kàn"] }),
      fb(C, "入乡随___，我也学会了用筷子。(When in Rome -- I learned to use chopsticks too.)", "俗", "sú", "入乡随俗: when in Rome."),
      toZh("Come to my place for New Year!", "来我家过年吧！", "Lái wǒ jiā guò nián ba!", "来 + place + 过年 + 吧.", ["到我家过年吧！", "Dào wǒ jiā guò nián ba!", "来我家过春节吧！", "Lái wǒ jiā guò Chūn Jié ba!"]),
      toZh("What present should I bring?", "我应该带什么礼物？", "Wǒ yīnggāi dài shénme lǐwù?", "应该 + 带 + 什么.", ["我该带什么礼物？", "Wǒ gāi dài shénme lǐwù?", "我应该送什么礼物？", "Wǒ yīnggāi sòng shénme lǐwù?", "应该带什么礼物？", "Yīnggāi dài shénme lǐwù?"]),
      toEn("对我来说，春节最重要的是跟家人在一起。", "Duì wǒ lái shuō, Chūn Jié zuì zhòngyào de shì gēn jiārén zài yìqǐ.", "For me, the most important thing about Spring Festival is being with family.", "对…来说: for me.", ["For me, the most important part of Spring Festival is being with my family.", "To me, what matters most at Spring Festival is being with family.", "For me, being with family is the most important thing at Spring Festival.", "For me, the main thing at Chinese New Year is being with family."]),
      say("谢谢你们请我来过年，祝你们新年快乐！", "谢谢你们请我来过年，祝你们新年快乐: thank you for inviting me for New Year -- Happy New Year!", "guò nián: falling, then rising.", "Thank your host family."),
    ]
  ),
];
