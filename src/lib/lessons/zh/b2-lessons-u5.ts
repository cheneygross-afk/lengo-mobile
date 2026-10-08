// Chinese B2, unit 5: society and the world -- the environment, life
// online, festivals and customs, and the B2 review.

import { ex, fb, lesson, listen, mc, ms, mt, say, sec, toEn, toZh, wo, zh } from "./authoring";

const L = "ZH-B2" as const;
const C = "填空 · Complete (characters or pinyin).";

export const ZH_B2_LESSONS_U5 = [
  lesson(
    L,
    "zh-b2-environment",
    "The Environment: Pollution and Protection",
    "Talk about pollution, rubbish and saving resources, and what each of us can do to protect the environment.",
    "9 min",
    [
      sec(
        "The problems",
        [
          `${zh("环境", "huánjìng")} (environment), ${zh("污染", "wūrǎn")} (pollution), ${zh("空气", "kōngqì")} (air), ${zh("垃圾", "lājī")} (rubbish), ${zh("塑料袋", "sùliàodài")} (plastic bag), ${zh("严重", "yánzhòng")} (serious).`,
        ],
        [ex("这个城市的空气污染很严重。", "Zhège chéngshì de kōngqì wūrǎn hěn yánzhòng.", "Air pollution in this city is serious."), ex("河里有很多垃圾。", "Hé li yǒu hěn duō lājī.", "There's a lot of rubbish in the river.")],
        [mc("污染 means:", ["pollution", "environment", "rubbish", "protection"], 0, "污染: pollution.")]
      ),
      sec(
        "What we can do",
        [
          `${zh("保护", "bǎohù")} (protect), ${zh("节约", "jiéyuē")} (save, economise), ${zh("垃圾分类", "lājī fēnlèi")} (sorting rubbish), 少用塑料袋 (use fewer plastic bags), 坐公共交通 (take public transport).`,
        ],
        [ex("我们应该保护环境。", "Wǒmen yīnggāi bǎohù huánjìng.", "We should protect the environment."), ex("请节约用水。", "Qǐng jiéyuē yòng shuǐ.", "Please save water.")],
        [mc("节约用电 means:", ["save electricity", "use more electricity", "cut the power", "pay the electricity bill"], 0, "节约: save, economise.")]
      ),
    ],
    [
      mt("Match.", [["环境", "environment"], ["污染", "pollution"], ["垃圾", "rubbish"], ["保护", "protect"]], "Environment words."),
      listen("为了保护环境，我每天骑自行车上班。", "How does the speaker get to work?", ["By bike", "By car", "By bus", "On foot"], 0, "骑自行车: ride a bike."),
      fb(C, "这里的空气___很严重。(The air pollution here is serious.)", "污染", "wūrǎn", "污染: pollution."),
      fb(C, "请不要乱扔___。(Please don't drop litter.)", "垃圾", "lājī", "乱扔垃圾: drop litter."),
      fb(C, "我们要___用水。(We must save water.)", "节约", "jiéyuē", "节约: save, economise."),
      toZh("Use fewer plastic bags.", "少用塑料袋。", "Shǎo yòng sùliàodài.", "少 + verb: do less of it.", ["请少用塑料袋。", "Qǐng shǎo yòng sùliàodài.", "少用一点儿塑料袋。", "Shǎo yòng yìdiǎnr sùliàodài."]),
      toZh("Pollution is getting more and more serious.", "污染越来越严重了。", "Wūrǎn yuè lái yuè yánzhòng le.", "越来越 + 严重.", ["污染越来越严重。", "Wūrǎn yuè lái yuè yánzhòng.", "环境污染越来越严重了。", "Huánjìng wūrǎn yuè lái yuè yánzhòng le."]),
      toEn("保护环境是每个人的责任。", "Bǎohù huánjìng shì měi ge rén de zérèn.", "Protecting the environment is everyone's responsibility.", "责任: responsibility.", ["Protecting the environment is everybody's responsibility.", "It's everyone's responsibility to protect the environment.", "Protecting the environment is the responsibility of everyone.", "Environmental protection is everyone's responsibility."]),
      wo(["我们", "应该", "把", "垃圾", "分类"], "We should sort our rubbish.", "把 + 垃圾 + 分类."),
      say("为了保护环境，我们少开车吧。", "为了保护环境，我们少开车吧: to protect the environment, let's drive less.", "bǎohù huánjìng: a dip, a fall, rising, a fall.", "Suggest a green habit."),
    ],
    { teaches: ["vocab.environment"] }
  ),

  lesson(
    L,
    "zh-b2-internet",
    "Life Online: Shopping, Paying and Charging",
    "Shop online, pay by scanning a code, download an app, and deal with the everyday problems: slow Wi-Fi, a dead phone, a forgotten password.",
    "8 min",
    [
      sec(
        "Online",
        [
          `${zh("上网", "shàngwǎng")} (go online), ${zh("网上购物", "wǎngshang gòuwù")} or ${zh("网购", "wǎnggòu")} (shop online), ${zh("下载", "xiàzài")} (download), ${zh("手机支付", "shǒujī zhīfù")} (pay by phone), ${zh("扫码", "sǎo mǎ")} (scan a code).`,
        ],
        [ex("现在很多人在网上买东西。", "Xiànzài hěn duō rén zài wǎngshang mǎi dōngxi.", "Nowadays lots of people buy things online."), ex("可以扫码付款吗？", "Kěyǐ sǎo mǎ fùkuǎn ma?", "Can I pay by scanning the code?")],
        [mc("网购 is short for:", ["网上购物 (online shopping)", "上网 (going online)", "网友 (online friend)", "网速 (internet speed)"], 0, "网购 = 网上购物.")]
      ),
      sec(
        "When things go wrong",
        [
          `网速很慢 (the connection is slow), 手机没电了 (the phone's dead), ${zh("充电", "chōngdiàn")} (charge), ${zh("充电器", "chōngdiànqì")} (charger), 忘了密码 (forgot the password).`,
        ],
        [ex("我的手机没电了，可以借你的充电器吗？", "Wǒ de shǒujī méi diàn le, kěyǐ jiè nǐ de chōngdiànqì ma?", "My phone's dead -- can I borrow your charger?"), ex("这里的网速太慢了。", "Zhèli de wǎngsù tài màn le.", "The internet here is too slow.")],
        [mc("手机没电了 means:", ["The phone's battery is dead.", "The phone is broken.", "There's no signal.", "The phone is lost."], 0, "没电: out of power.")]
      ),
    ],
    [
      mt("Match.", [["上网", "go online"], ["下载", "download"], ["充电", "charge"], ["扫码", "scan a code"]], "Online words."),
      listen("你可以用手机支付。", "How can you pay?", ["By phone", "Only in cash", "By cheque", "Only by card"], 0, "手机支付: pay by phone."),
      fb(C, "我每天晚上都上___。(I go online every evening.)", "网", "wǎng", "上网: go online."),
      fb(C, "这个软件可以免费___。(This app can be downloaded for free.)", "下载", "xiàzài", "下载: download."),
      fb(C, "我的手机没电了，要___电。(My phone's dead; I need to charge it.)", "充", "chōng", "充电: charge."),
      toZh("I often shop online.", "我经常在网上买东西。", "Wǒ jīngcháng zài wǎngshang mǎi dōngxi.", "在网上 + verb.", ["我经常网购。", "Wǒ jīngcháng wǎnggòu.", "我常常在网上买东西。", "Wǒ chángcháng zài wǎngshang mǎi dōngxi.", "我经常在网上购物。", "Wǒ jīngcháng zài wǎngshang gòuwù.", "我常常网购。", "Wǒ chángcháng wǎnggòu."]),
      toZh("I forgot my password.", "我忘了密码。", "Wǒ wàng le mìmǎ.", "忘了 + 密码.", ["我把密码忘了。", "Wǒ bǎ mìmǎ wàng le.", "我忘记密码了。", "Wǒ wàngjì mìmǎ le.", "我忘了我的密码。", "Wǒ wàng le wǒ de mìmǎ.", "我密码忘了。", "Wǒ mìmǎ wàng le."]),
      toEn("现在买东西几乎不用带现金。", "Xiànzài mǎi dōngxi jīhū bú yòng dài xiànjīn.", "Nowadays you hardly need to carry cash to buy things.", "几乎: almost; 现金: cash.", ["These days you barely need cash to shop.", "Nowadays you almost don't need to bring cash when shopping.", "Now you hardly need cash to buy things.", "Nowadays shopping hardly requires carrying cash."]),
      wo(["我", "可以", "用", "手机", "付款", "吗"], "Can I pay with my phone?", "可以 + verb + 吗."),
      say("这里有无线网吗？密码是多少？", "这里有无线网吗？密码是多少: is there Wi-Fi here? What's the password?", "wúxiànwǎng: rising, falling, a dip.", "Ask about Wi-Fi in a café."),
    ],
    { teaches: ["vocab.internet"] }
  ),

  lesson(
    L,
    "zh-b2-customs",
    "Festivals and Customs: 春节, 中秋节 and More",
    "The big festivals -- Spring Festival, Mid-Autumn, Dragon Boat -- what people eat and do, red envelopes, New Year greetings, and a few customs worth knowing.",
    "9 min",
    [
      sec(
        "The big festivals",
        [
          `${zh("春节", "Chūn Jié")} (Spring Festival, Chinese New Year) with ${zh("除夕", "chúxī")} (New Year's Eve); ${zh("中秋节", "Zhōngqiū Jié")} (Mid-Autumn) with ${zh("月饼", "yuèbing")} (mooncakes); ${zh("端午节", "Duānwǔ Jié")} (Dragon Boat Festival). ${zh("过年", "guò nián")} is to celebrate New Year.`,
        ],
        [ex("春节的时候，大家都回家过年。", "Chūn Jié de shíhou, dàjiā dōu huí jiā guò nián.", "At Spring Festival everyone goes home for New Year."), ex("中秋节我们吃月饼、看月亮。", "Zhōngqiū Jié wǒmen chī yuèbing, kàn yuèliang.", "At Mid-Autumn we eat mooncakes and look at the moon.")],
        [mc("What do people eat at 中秋节?", ["月饼 (mooncakes)", "蛋糕 (cake)", "面包 (bread)", "汉堡 (burgers)"], 0, "中秋节: mooncakes.")]
      ),
      sec(
        "Customs and greetings",
        [
          `${zh("红包", "hóngbāo")} (a red envelope of money), ${zh("拜年", "bàinián")} (pay New Year visits), ${zh("恭喜发财", "gōngxǐ fācái")} (wishing you prosperity), ${zh("风俗", "fēngsú")} (custom), ${zh("习惯", "xíguàn")} (habit).`,
        ],
        [ex("过年的时候，长辈给孩子发红包。", "Guò nián de shíhou, zhǎngbèi gěi háizi fā hóngbāo.", "At New Year, older relatives give children red envelopes."), ex("恭喜发财！", "Gōngxǐ fācái!", "Wishing you wealth and prosperity!")],
        [mc("红包 contains:", ["money", "sweets", "a letter", "a photo"], 0, "红包: a red envelope of money.")]
      ),
    ],
    [
      mt("Match.", [["春节", "Spring Festival"], ["中秋节", "Mid-Autumn Festival"], ["红包", "red envelope"], ["月饼", "mooncake"]], "Festival words."),
      listen("除夕晚上，我们全家一起包饺子。", "What does the family do on New Year's Eve?", ["Make dumplings together", "Eat mooncakes", "Go out for dinner", "Go to bed early"], 0, "包饺子: make dumplings."),
      fb(C, "春节的时候，孩子们都喜欢收___。(At New Year, children love getting red envelopes.)", "红包", "hóngbāo", "红包: red envelope."),
      fb(C, "我们每年都回老家过___。(We go back to our home town for New Year every year.)", "年", "nián", "过年: celebrate New Year."),
      fb(C, "每个国家都有自己的___俗。(Every country has its own customs.)", "风", "fēng", "风俗: custom."),
      toZh("Happy New Year!", "新年快乐！", "Xīnnián kuàilè!", "新年 + 快乐.", ["春节快乐！", "Chūn Jié kuàilè!", "过年好！", "Guò nián hǎo!"]),
      toZh("We eat mooncakes at the Mid-Autumn Festival.", "中秋节我们吃月饼。", "Zhōngqiū Jié wǒmen chī yuèbing.", "Festival + 吃 + food.", ["我们中秋节吃月饼。", "Wǒmen Zhōngqiū Jié chī yuèbing.", "中秋节的时候我们吃月饼。", "Zhōngqiū Jié de shíhou wǒmen chī yuèbing."]),
      toEn("在中国，送礼物不能送钟。", "Zài Zhōngguó, sòng lǐwù bù néng sòng zhōng.", "In China, you shouldn't give a clock as a present.", "送钟 sounds like 送终, attending a deathbed.", ["In China you mustn't give a clock as a gift.", "In China, you can't give clocks as presents.", "In China, don't give someone a clock as a gift.", "In China, a clock should not be given as a gift."]),
      wo(["过年", "的", "时候", "我们", "去", "亲戚", "家", "拜年"], "At New Year we visit relatives to wish them a happy New Year.", "Time + 去 + place + 拜年."),
      say("新年快乐，恭喜发财！", "新年快乐，恭喜发财: Happy New Year, and may you prosper!", "gōngxǐ fācái: high, a dip, high, rising.", "Greet someone at Chinese New Year."),
    ],
    { teaches: ["function.customs"] }
  ),

  lesson(
    L,
    "zh-b2-review",
    "B2 Review: Less Shopping, More Saving",
    "Everything from B2 in one blog post: conditions and concessions, cause and purpose, surprise and emphasis, formal words, and life online.",
    "10 min",
    [
      sec(
        "The blog post",
        ["Li Na writes about giving up online shopping for a month. Read it with the pinyin, then answer."],
        [
          ex("随着网上购物的普及，我们的生活越来越方便了。", "Suízhe wǎngshang gòuwù de pǔjí, wǒmen de shēnghuó yuè lái yuè fāngbiàn le.", "As online shopping has spread, our lives have become more and more convenient."),
          ex("可是，方便并不一定是好事。", "Kěshì, fāngbiàn bìng bù yídìng shì hǎo shì.", "But convenience isn't necessarily a good thing."),
          ex("由于快递越来越多，垃圾也越来越多。", "Yóuyú kuàidì yuè lái yuè duō, lājī yě yuè lái yuè duō.", "Because there are more and more deliveries, there's more and more rubbish too."),
          ex("为了保护环境，我决定一个月不网购。", "Wèile bǎohù huánjìng, wǒ juédìng yí ge yuè bù wǎnggòu.", "To protect the environment, I decided not to shop online for a month."),
          ex("没想到，一个月以后，我竟然省了很多钱！", "Méi xiǎng dào, yí ge yuè yǐhòu, wǒ jìngrán shěng le hěn duō qián!", "To my surprise, a month later I'd saved a lot of money!"),
        ],
        [
          mc("Why is there more rubbish?", ["More deliveries", "More tourists", "Fewer bins", "The festivals"], 0, "由于快递越来越多."),
          mc("What surprised Li Na?", ["She saved a lot of money.", "She lost weight.", "She bought more.", "She made more rubbish."], 0, "竟然省了很多钱."),
        ]
      ),
      sec(
        "What B2 added",
        [
          "Conditions and concessions: 即使…也, 不管/无论…都, 既然…就, 否则/不然, 尽管.",
          "Cause and purpose: 为了, 由于…因此, 于是, 结果, 只好, 不得不. Nuance: 并不, 难道, 到底, 竟然, 没想到, 恐怕, 差点儿.",
          "Formal Chinese: 是否, 与, 以及, 对…来说, 在…方面, 随着, and everyday 成语.",
        ],
        [ex("不管多忙，都要照顾好自己。", "Bùguǎn duō máng, dōu yào zhàogù hǎo zìjǐ.", "However busy you are, look after yourself.")],
        [mc("Which word means \"even if\"?", ["即使", "既然", "尽管", "于是"], 0, "即使 … 也: even if.")]
      ),
    ],
    [
      mc("方便并不一定是好事 means:", ["Convenience isn't necessarily a good thing.", "Convenience is always good.", "It's not convenient.", "Good things are convenient."], 0, "并不一定: not necessarily."),
      ms("Which are correct? (Choose all that apply.)", ["即使下雨，我也去。", "不管多贵，我都买。", "你到底去吗？", "我差点儿没赶上火车。"], [0, 1, 3], "到底 can't take 吗."),
      listen("为了保护环境，我决定一个月不网购。", "What did Li Na decide?", ["Not to shop online for a month", "To shop online more", "To move house", "To buy a car"], 0, "一个月不网购: no online shopping for a month."),
      fb(C, "___网上购物的普及，生活越来越方便。(As online shopping spreads, life gets more convenient.)", "随着", "suízhe", "随着 + change."),
      fb(C, "既然你不舒服，___早点儿休息吧。(Since you're unwell, get some rest early.)", "就", "jiù", "既然 … 就."),
      fb(C, "快走吧，___要迟到了。(Let's hurry, or we'll be late.)", "不然", "bùrán", "不然: otherwise.", { altAnswers: ["否则", "fǒuzé", "要不然", "yàobùrán"] }),
      fb(C, "我以为很难，___很容易。(I thought it'd be hard, but it turned out easy.)", "结果", "jiéguǒ", "以为 … 结果."),
      toZh("Even if it's hard, I won't give up.", "即使很难，我也不会放弃。", "Jíshǐ hěn nán, wǒ yě bú huì fàngqì.", "即使 … 也.", ["即使很难，我也不放弃。", "Jíshǐ hěn nán, wǒ yě bú fàngqì.", "哪怕很难，我也不会放弃。", "Nǎpà hěn nán, wǒ yě bú huì fàngqì.", "尽管很难，我也不会放弃。", "Jǐnguǎn hěn nán, wǒ yě bú huì fàngqì."]),
      toZh("For me, the environment matters most.", "对我来说，环境最重要。", "Duì wǒ lái shuō, huánjìng zuì zhòngyào.", "对…来说 + view.", ["对我来说，环境是最重要的。", "Duì wǒ lái shuō, huánjìng shì zuì zhòngyào de.", "对我来说，保护环境最重要。", "Duì wǒ lái shuō, bǎohù huánjìng zuì zhòngyào."]),
      toEn("没想到他竟然一个人完成了。", "Méi xiǎng dào tā jìngrán yí ge rén wánchéng le.", "I never expected him to finish it all by himself.", "没想到 + 竟然: a double surprise.", ["Who'd have thought he'd finish it on his own!", "I didn't expect him to complete it alone.", "I never thought he would finish it by himself.", "Surprisingly, he finished it all by himself."]),
      say("由于快递越来越多，垃圾也越来越多。", "由于快递越来越多，垃圾也越来越多: as deliveries increase, so does the rubbish.", "Break it after the comma.", "Explain a problem caused by online shopping."),
    ],
    {
      reviews: [
        "grammar.jishi-ye",
        "grammar.buguan-dou",
        "grammar.jiran-jiu",
        "grammar.fouze",
        "grammar.weile",
        "grammar.youyu-yinci",
        "grammar.jieguo",
        "grammar.bing-negation",
        "grammar.daodi",
        "grammar.jingran",
        "grammar.chadianr",
        "grammar.dui-laishuo",
        "grammar.suizhe",
        "vocab.environment",
        "vocab.internet",
      ],
    }
  ),
];
