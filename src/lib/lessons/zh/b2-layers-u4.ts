// B2 unit 4 practice lessons (spoken to formal, 对…来说, 在…方面,
// 随着, four-character idioms), drafted from their specs.

import { ex, fb, layer, listen, mc, say, sec, toEn, toZh, wo } from "./authoring";
import { ZH_B2_SPEC as S } from "./specs";

const C = "填空 · Complete (characters or pinyin).";

export const ZH_B2_LAYERS_U4 = [
  layer(
    S,
    "zh-b2r-formal",
    "Transform: Make It Official",
    "Rewrite everyday sentences in the style of forms and signs: 是不是 → 是否, 和 → 与, 还有 → 以及.",
    "7 min",
    [
      sec(
        "Spoken to written",
        [
          "是不是 → 是否 (before the verb, no 吗). 和 → 与 in titles and signs. 还有 → 以及 before the last item of a list. 因为 → 由于, 所以 → 因此.",
        ],
        [ex("请问您是否需要帮忙？", "Qǐngwèn nín shìfǒu xūyào bāngmáng?", "May I ask whether you need a hand?"), ex("本店出售茶叶以及茶具。", "Běn diàn chūshòu cháyè yǐjí chájù.", "This shop sells tea as well as tea sets.")],
        [mc("你是不是学生？ → formal:", ["您是否是学生？", "您是不是否学生？", "是否您学生？", "您是学生是否？"], 0, "是否 before the verb.")]
      ),
    ],
    [
      mc("Which belongs on a notice?", ["请确认您是否已付款。", "你付钱了没有？", "钱给了吗？", "付了吧？"], 0, "是否 + formal words: notice style."),
      listen("考试时间与地点以后通知。", "What will be announced later?", ["The exam time and place", "The exam results", "The teacher's name", "The fees"], 0, "时间与地点: time and place."),
      fb(C, "请告诉我们您___能参加。(Please let us know whether you can attend.)", "是否", "shìfǒu", "是否 + verb.", { altAnswers: ["是不是", "shì bu shì"] }),
      fb(C, "人___自然 (Man and Nature -- a documentary title)", "与", "yǔ", "Titles use 与.", { altAnswers: ["和", "hé"] }),
      fb(C, "会上讨论了工资、假期___工作时间。(The meeting covered pay, holidays and working hours.)", "以及", "yǐjí", "以及 before the last item.", { altAnswers: ["和", "hé"] }),
      toZh("Excuse me, is this seat taken? (formal)", "请问这个座位是否有人？", "Qǐngwèn zhège zuòwèi shìfǒu yǒu rén?", "是否 + 有人.", ["这个座位是否有人？", "Zhège zuòwèi shìfǒu yǒu rén?", "请问这个座位有没有人？", "Qǐngwèn zhège zuòwèi yǒu méiyǒu rén?", "请问这里是否有人？", "Qǐngwèn zhèli shìfǒu yǒu rén?"]),
      toZh("Teachers and Students (a title)", "老师与学生", "lǎoshī yǔ xuésheng", "与: formal and.", ["教师与学生", "jiàoshī yǔ xuésheng", "老师和学生", "lǎoshī hé xuésheng"]),
      toEn("请检查行李是否已经带好。", "Qǐng jiǎnchá xíngli shìfǒu yǐjīng dài hǎo.", "Please check whether you have all your luggage.", "是否 + 已经.", ["Please check that you have all your luggage.", "Please make sure you've taken all your bags.", "Please check whether your luggage is all with you.", "Please check whether you have brought your luggage."]),
      say("请问您是否预订了房间？", "请问您是否预订了房间: may I ask whether you have a reservation?", "yùdìng: two falling tones.", "Greet a guest at a hotel desk."),
    ]
  ),

  layer(
    S,
    "zh-b2d-laishuo",
    "Pattern Practice: For Me, For Them",
    "对 + person + 来说 again and again: for me, for children, for students, for old people.",
    "6 min",
    [
      sec(
        "The frame",
        [
          "对 + person or group + 来说，+ a view or a fact about them. Swap the person: 对我来说, 对孩子来说, 对老人来说, 对学生来说.",
        ],
        [ex("对学生来说，暑假最开心。", "Duì xuésheng lái shuō, shǔjià zuì kāixīn.", "For students, the summer holiday is the happiest time."), ex("对老人来说，上网不太容易。", "Duì lǎorén lái shuō, shàngwǎng bú tài róngyì.", "For old people, going online isn't very easy.")],
        [mc("For beginners, tones are hard:", ["对初学者来说，声调很难。", "对初学者说，声调很难。", "初学者对来说，声调很难。", "对来说初学者，声调很难。"], 0, "对 + person + 来说.")]
      ),
    ],
    [
      listen("对我来说，周末最重要的是休息。", "What matters most to the speaker at the weekend?", ["Resting", "Working", "Shopping", "Studying"], 0, "最重要的是休息: rest comes first."),
      mc("对他来说，钱不是最重要的 means:", ["For him, money isn't the most important thing.", "He said money isn't important.", "He has no money.", "Money is important to everyone."], 0, "对…来说: his point of view."),
      fb(C, "___我来说，早起很难。(For me, getting up early is hard.)", "对", "duì", "对 + person + 来说."),
      fb(C, "对小孩子来___，这本书太难了。(For young children, this book is too hard.)", "说", "shuō", "对 … 来说."),
      fb(C, "对上班族___说，时间最宝贵。(For office workers, time is most precious.)", "来", "lái", "对 … 来说."),
      fb(C, "对外国人来说，用筷子不太___。(For foreigners, chopsticks aren't easy.)", "容易", "róngyì", "容易: easy."),
      toZh("For me, this is too expensive.", "对我来说，这太贵了。", "Duì wǒ lái shuō, zhè tài guì le.", "对我来说 + view.", ["对我来说，这个太贵了。", "Duì wǒ lái shuō, zhège tài guì le.", "对我来说太贵了。", "Duì wǒ lái shuō tài guì le."]),
      toZh("For students, exams are stressful.", "对学生来说，考试压力很大。", "Duì xuésheng lái shuō, kǎoshì yālì hěn dà.", "对 + group + 来说.", ["对学生来说，考试的压力很大。", "Duì xuésheng lái shuō, kǎoshì de yālì hěn dà.", "对学生来说，考试很有压力。", "Duì xuésheng lái shuō, kǎoshì hěn yǒu yālì."]),
      toZh("For my parents, family is everything.", "对我父母来说，家就是一切。", "Duì wǒ fùmǔ lái shuō, jiā jiù shì yíqiè.", "对 + person + 来说.", ["对我父母来说，家庭就是一切。", "Duì wǒ fùmǔ lái shuō, jiātíng jiù shì yíqiè.", "对我的父母来说，家就是一切。", "Duì wǒ de fùmǔ lái shuō, jiā jiù shì yíqiè."]),
      wo(["对", "我", "来说", "学", "中文", "很", "有意思"], "For me, learning Chinese is very interesting.", "对我来说 + view."),
      say("对我来说，家人最重要。", "对我来说，家人最重要: for me, family matters most.", "duì wǒ: a fall, then a dip.", "Say what matters most to you."),
    ]
  ),

  layer(
    S,
    "zh-b2d-fangmian",
    "Substitution: In Terms Of…",
    "Swap the area in 在…方面, 在…上 and 在…的帮助下: study, work, price, service, daily life.",
    "6 min",
    [
      sec(
        "Swap the area",
        [
          "在 + area + 方面: 在学习方面, 在工作方面, 在价格方面. 在 + noun + 上: 在工作上, 在生活上. 在 + …的帮助/支持 + 下: with someone's help or support.",
        ],
        [ex("在饮食方面，他很注意。", "Zài yǐnshí fāngmiàn, tā hěn zhùyì.", "He's careful about what he eats."), ex("在父母的支持下，她出国留学了。", "Zài fùmǔ de zhīchí xià, tā chūguó liúxué le.", "With her parents' support, she went abroad to study.")],
        [mc("在工作上 means:", ["at work, in work matters", "on top of work", "after work", "about to work"], 0, "在 + noun + 上: in that area.")]
      ),
    ],
    [
      listen("在服务方面，这家酒店做得很好。", "What is the hotel good at?", ["Service", "Price", "Location", "Food"], 0, "在服务方面: as regards service."),
      mc("在…的帮助下 means:", ["with …'s help", "under …'s table", "because of …", "in front of …"], 0, "在…下: under (conditions)."),
      fb(C, "在价格___，这家店最便宜。(In terms of price, this shop is the cheapest.)", "方面", "fāngmiàn", "在 + area + 方面.", { altAnswers: ["上", "shang"] }),
      fb(C, "在老师的帮助___，他进步很快。(With the teacher's help, he's improving fast.)", "下", "xià", "在…的帮助下."),
      fb(C, "在生活___，我们互相帮助。(In daily life, we help each other.)", "上", "shang", "在 + noun + 上.", { altAnswers: ["方面", "fāngmiàn", "shàng"] }),
      fb(C, "一方面我想换工作，___一方面又怕找不到。(On the one hand I want a new job; on the other, I'm afraid I won't find one.)", "另", "lìng", "另一方面: on the other hand."),
      toZh("As regards study, she's very strict with herself.", "在学习方面，她对自己要求很严格。", "Zài xuéxí fāngmiàn, tā duì zìjǐ yāoqiú hěn yángé.", "在 + area + 方面.", ["在学习上，她对自己要求很严格。", "Zài xuéxí shang, tā duì zìjǐ yāoqiú hěn yángé.", "在学习方面，她对自己很严格。", "Zài xuéxí fāngmiàn, tā duì zìjǐ hěn yángé."]),
      toZh("With everyone's support, we finished the project.", "在大家的支持下，我们完成了这个项目。", "Zài dàjiā de zhīchí xià, wǒmen wánchéng le zhège xiàngmù.", "在…的支持下.", ["在大家的支持下，我们完成了项目。", "Zài dàjiā de zhīchí xià, wǒmen wánchéng le xiàngmù.", "在大家的帮助下，我们完成了这个项目。", "Zài dàjiā de bāngzhù xià, wǒmen wánchéng le zhège xiàngmù."]),
      toEn("在这方面，你比我有经验。", "Zài zhè fāngmiàn, nǐ bǐ wǒ yǒu jīngyàn.", "In this area, you're more experienced than me.", "在这方面: in this respect.", ["You have more experience than me in this area.", "In this respect, you're more experienced than I am.", "When it comes to this, you have more experience than me.", "In this area you have more experience than I do."]),
      wo(["在", "工作", "上", "他", "是", "我", "的", "老师"], "At work, he's my teacher.", "在 + noun + 上."),
      say("在这方面，我还要多学习。", "在这方面，我还要多学习: in this area, I still have a lot to learn.", "fāngmiàn: high, then falling.", "Admit modestly that you're still learning."),
    ]
  ),

  layer(
    S,
    "zh-b2r-suizhe",
    "Mission: Ten Years of Change",
    "Your mission: describe how your home town has changed in ten years, news style -- 随着 for the change, 越来越 for the trend.",
    "8 min",
    [
      sec(
        "Writing like the news",
        [
          "Open with 随着 + …的 + change word (发展, 增加, 普及, 开通), then what changed along with it -- often with 越来越 or 更. Add 由于, 因此 and 以及 for a formal finish.",
        ],
        [ex("随着地铁的开通，出行越来越方便。", "Suízhe dìtiě de kāitōng, chūxíng yuè lái yuè fāngbiàn.", "With the subway opening, getting around has become more and more convenient."), ex("随着外地人的增加，城市变得更热闹了。", "Suízhe wàidìrén de zēngjiā, chéngshì biàn de gèng rènao le.", "As more people from elsewhere arrive, the city has become livelier.")],
        [mc("Which opening fits a news report?", ["随着经济的发展，…", "我觉得吧，…", "哎呀，…", "你知道吗？…"], 0, "随着 + …的发展: news style.")]
      ),
    ],
    [
      listen("随着网上购物的普及，很多小商店关门了。", "What happened to small shops?", ["Many closed down.", "They got busier.", "They moved online.", "They opened longer."], 0, "关门了: closed down."),
      mc("随着 is usually followed by:", ["…的 + a change word", "a person's name", "a question", "a command"], 0, "随着 + …的发展/变化/增加."),
      fb(C, "随着人口的___，房价越来越高。(As the population grows, housing prices keep rising.)", "增加", "zēngjiā", "增加: increase.", { altAnswers: ["增长", "zēngzhǎng"] }),
      fb(C, "随着生活水平的___，人们更注意健康了。(As living standards rise, people pay more attention to health.)", "提高", "tígāo", "提高: raise, improve."),
      fb(C, "___城市的发展，空气也越来越差。(As the city develops, the air gets worse and worse.)", "随着", "suízhe", "随着 + change."),
      toZh("As the city develops, there are more and more tall buildings.", "随着城市的发展，高楼越来越多。", "Suízhe chéngshì de fāzhǎn, gāolóu yuè lái yuè duō.", "随着 + 发展, then 越来越.", ["随着城市的发展，高楼越来越多了。", "Suízhe chéngshì de fāzhǎn, gāolóu yuè lái yuè duō le.", "随着城市的发展，高楼大厦越来越多。", "Suízhe chéngshì de fāzhǎn, gāolóu dàshà yuè lái yuè duō."]),
      toZh("As time passes, I miss home more and more.", "随着时间的推移，我越来越想家。", "Suízhe shíjiān de tuīyí, wǒ yuè lái yuè xiǎng jiā.", "随着 + 时间的推移.", ["随着时间的推移，我越来越想家了。", "Suízhe shíjiān de tuīyí, wǒ yuè lái yuè xiǎng jiā le."]),
      toEn("随着手机的普及，写信的人越来越少了。", "Suízhe shǒujī de pǔjí, xiě xìn de rén yuè lái yuè shǎo le.", "As mobile phones have spread, fewer and fewer people write letters.", "随着 + 普及.", ["With the spread of mobile phones, fewer people write letters.", "As mobile phones became common, fewer and fewer people wrote letters.", "As phones spread, letter writers are getting fewer and fewer.", "With mobile phones everywhere, fewer and fewer people write letters."]),
      say("随着地铁的开通，我们的生活方便多了。", "随着地铁的开通，我们的生活方便多了: with the subway open, our lives are much more convenient.", "kāitōng: two high tones.", "Describe a change in your town."),
    ]
  ),

  layer(
    S,
    "zh-b2d-chengyu",
    "Speed Round: Idioms",
    "Quick-fire recall of the everyday 成语: hear them, finish them, use them.",
    "5 min",
    [
      sec(
        "Quick recall",
        [
          "马马虎虎 (so-so; careless), 一路平安 (safe journey), 入乡随俗 (when in Rome), 一模一样 (exactly alike), 一心一意 (wholeheartedly), 半途而废 (give up halfway), 自言自语 (talk to oneself), 乱七八糟 (a mess).",
        ],
        [ex("这两件衣服一模一样。", "Zhè liǎng jiàn yīfu yìmú yíyàng.", "These two tops are exactly the same."), ex("他做事总是马马虎虎的。", "Tā zuò shì zǒngshì mǎmahūhū de.", "He's always careless in what he does.")],
        [mc("马马虎虎 can also mean:", ["careless", "brave", "tidy", "generous"], 0, "马马虎虎: so-so, or careless.")]
      ),
    ],
    [
      listen("祝你一路平安！", "When would you hear this?", ["When someone sets off on a trip", "At a birthday", "At a meal", "Before an exam"], 0, "一路平安: a safe journey."),
      listen("我的书桌乱七八糟的。", "What is the desk like?", ["Very messy", "Very tidy", "Very big", "Brand new"], 0, "乱七八糟: a mess."),
      mc("Someone gave up the guitar after a week. They:", ["半途而废", "一心一意", "入乡随俗", "一路平安"], 0, "半途而废: gave up halfway."),
      fb(C, "他们俩长得一___一样。(The two of them look exactly alike.)", "模", "mú", "一模一样: identical."),
      fb(C, "在国外要入___随俗。(Abroad, do as the locals do.)", "乡", "xiāng", "入乡随俗: when in Rome."),
      fb(C, "别半途而___，坚持下去！(Don't give up halfway -- keep going!)", "废", "fèi", "半途而废: give up halfway."),
      fb(C, "她一个人在房间里自言自___。(She was talking to herself in her room.)", "语", "yǔ", "自言自语: talk to oneself."),
      toZh("so-so", "马马虎虎", "mǎmahūhū", "马马虎虎: so-so."),
      toZh("exactly the same", "一模一样", "yìmú yíyàng", "一模一样: identical."),
      toZh("wholeheartedly", "一心一意", "yìxīn yíyì", "一心一意: with one heart and mind."),
      say("我的中文还马马虎虎，要一心一意地学。", "我的中文还马马虎虎，要一心一意地学: my Chinese is still so-so -- I need to study wholeheartedly.", "mǎmahūhū: a dip, light, then two high tones.", "Describe your study plan."),
    ]
  ),
];
