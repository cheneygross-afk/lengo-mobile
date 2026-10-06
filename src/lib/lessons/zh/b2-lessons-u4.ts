// Synced from cheneygross-afk/lengo:src/lib/lessons/zh/b2-lessons-u4.ts by scripts/sync-content.mjs -- edit it there, not here.
// Chinese B2, unit 4: formal Chinese -- written-style 是否, 与 and 以及,
// 对…来说, 在…方面 and 在…上/下, 随着, and everyday four-character idioms.

import { ex, fb, lesson, listen, mc, mt, say, sec, toEn, toZh, wo, zh } from "./authoring";

const L = "ZH-B2" as const;
const C = "填空 · Complete (characters or pinyin).";

export const ZH_B2_LESSONS_U4 = [
  lesson(
    L,
    "zh-b2-formal",
    "Written Chinese: 是否, 与 and 以及",
    "The words of forms, signs and notices: 是否 for 是不是, 与 for 和, 以及 for \"as well as\" -- and their everyday partners.",
    "8 min",
    [
      sec(
        "是否: whether",
        [
          `${zh("是否", "shìfǒu")} is the written 是不是: whether. It goes before the verb or adjective, with no 吗: ${zh("请告诉我们您是否参加。", "Qǐng gàosu wǒmen nín shìfǒu cānjiā.")}`,
        ],
        [ex("请告诉我们您是否参加。", "Qǐng gàosu wǒmen nín shìfǒu cānjiā.", "Please let us know whether you will attend."), ex("我不知道他是否同意。", "Wǒ bù zhīdào tā shìfǒu tóngyì.", "I don't know whether he agrees.")],
        [mc("The written form of 是不是:", ["是否", "是吗", "不是", "否是"], 0, "是否: whether.")]
      ),
      sec(
        "与 and 以及: and",
        [
          `${zh("与", "yǔ")} means and, with -- in titles, signs and formal writing: 历史与文化 (history and culture). ${zh("以及", "yǐjí")} means as well as, before the last item of a list. Speech keeps 和 and 跟.`,
        ],
        [ex("这是一本关于历史与文化的书。", "Zhè shì yì běn guānyú lìshǐ yǔ wénhuà de shū.", "This is a book about history and culture."), ex("会议讨论了价格、质量以及服务。", "Huìyì tǎolùn le jiàgé, zhìliàng yǐjí fúwù.", "The meeting discussed price, quality and service.")],
        [mc("Where would you most likely see 与?", ["A book title or a sign", "A text to a friend", "Ordering food", "Chatting with family"], 0, "与: formal and written.")]
      ),
    ],
    [
      mc("请问您是否需要发票？ means:", ["May I ask whether you need a receipt?", "Here is your receipt.", "You don't need a receipt.", "Is this your receipt?"], 0, "是否: whether (formal)."),
      mt("Match each formal word to its everyday partner.", [["是否", "是不是"], ["与", "和"], ["以及", "还有"], ["因此", "所以"]], "Written ↔ spoken."),
      listen("请确认您是否参加明天的会议。", "What should you confirm?", ["Whether you'll attend tomorrow's meeting", "The meeting time", "The meeting place", "Who is attending"], 0, "是否参加: whether you'll attend."),
      fb(C, "我不确定他___会来。(I'm not sure whether he'll come.)", "是否", "shìfǒu", "是否: whether.", { altAnswers: ["是不是", "shì bu shì"] }),
      fb(C, "老师___学生们一起参观了博物馆。(The teacher and the students visited the museum together.)", "与", "yǔ", "与: formal and/with.", { altAnswers: ["和", "hé", "跟", "gēn"] }),
      fb(C, "请带上护照、机票___签证。(Please bring your passport, ticket and visa.)", "以及", "yǐjí", "以及: as well as, before the last item.", { altAnswers: ["和", "hé"] }),
      toZh("Please confirm whether the information is correct.", "请确认信息是否正确。", "Qǐng quèrèn xìnxī shìfǒu zhèngquè.", "是否 + adjective.", ["请确认信息是不是正确。", "Qǐng quèrèn xìnxī shì bu shì zhèngquè.", "请确认一下信息是否正确。", "Qǐng quèrèn yíxià xìnxī shìfǒu zhèngquè."]),
      toZh("China and the World (a book title)", "中国与世界", "Zhōngguó yǔ shìjiè", "Titles use 与.", ["中国和世界", "Zhōngguó hé shìjiè"]),
      toEn("本店出售咖啡、茶以及各种点心。", "Běn diàn chūshòu kāfēi, chá yǐjí gè zhǒng diǎnxin.", "This shop sells coffee, tea and all kinds of snacks.", "以及 + last item; 本店: this shop (formal).", ["We sell coffee, tea and all kinds of snacks.", "This shop sells coffee, tea and various snacks.", "This store sells coffee, tea, and all sorts of pastries.", "This shop sells coffee and tea as well as all kinds of snacks."]),
      say("请问您是否需要帮助？", "请问您是否需要帮助: may I ask whether you need any help?", "shìfǒu: a fall, then a dip.", "Offer help formally at a front desk."),
    ],
    { teaches: ["grammar.formal-words"] }
  ),

  lesson(
    L,
    "zh-b2-dui-laishuo",
    "For Me: 对…来说",
    "对 + person + 来说 gives a point of view -- for me, for children, for foreigners -- not to be confused with 对…说, say to.",
    "7 min",
    [
      sec(
        "From someone's point of view",
        [
          `${zh("对", "duì")} + person + ${zh("来说", "lái shuō")} = for someone, as far as they're concerned: ${zh("对我来说，汉字最难。", "Duì wǒ lái shuō, Hànzì zuì nán.")} It usually opens the sentence.`,
        ],
        [ex("对我来说，汉字最难。", "Duì wǒ lái shuō, Hànzì zuì nán.", "For me, characters are the hardest part."), ex("对孩子来说，玩儿也是学习。", "Duì háizi lái shuō, wánr yě shì xuéxí.", "For children, playing is learning too.")],
        [mc("For him, this is very important:", ["对他来说，这很重要。", "对他说，这很重要。", "他来说对，这很重要。", "对来说他，这很重要。"], 0, "对 + person + 来说.")]
      ),
      sec(
        "Three kinds of 对",
        [
          "对 + person + adjective says how something affects them: 运动对身体好. 对…来说 gives a point of view: 对我来说，运动是一种休息. And 对 + person + 说 is simply \"say to\": 他对我说….",
        ],
        [ex("对很多人来说，周末就是睡觉。", "Duì hěn duō rén lái shuō, zhōumò jiù shì shuìjiào.", "For a lot of people, the weekend just means sleeping.")],
        [mc("他对我说 means:", ["He said to me", "For him", "In my opinion", "He's right about me"], 0, "对 + person + 说: say to.")]
      ),
    ],
    [
      mc("对我来说 means:", ["for me, as far as I'm concerned", "say to me", "right for me", "opposite me"], 0, "对…来说: from someone's point of view."),
      listen("对留学生来说，找房子不容易。", "Who finds it hard to find housing?", ["International students", "Teachers", "Children", "Landlords"], 0, "对留学生来说: for international students."),
      fb(C, "对我___说，这个价格太贵了。(For me, this price is too high.)", "来", "lái", "对 + person + 来说."),
      fb(C, "___老人来说，冬天特别难过。(For old people, winter is especially hard.)", "对", "duì", "对 + person + 来说."),
      fb(C, "对他来说，家人比工作更___。(For him, family matters more than work.)", "重要", "zhòngyào", "重要: important."),
      toZh("For me, Chinese grammar isn't hard.", "对我来说，中文语法不难。", "Duì wǒ lái shuō, Zhōngwén yǔfǎ bù nán.", "对 + person + 来说, then the view.", ["对我来说，汉语语法不难。", "Duì wǒ lái shuō, Hànyǔ yǔfǎ bù nán.", "对我来说，中文的语法不难。", "Duì wǒ lái shuō, Zhōngwén de yǔfǎ bù nán.", "对我来说，中文语法并不难。", "Duì wǒ lái shuō, Zhōngwén yǔfǎ bìng bù nán."]),
      toZh("For children, sleep is very important.", "对孩子来说，睡觉很重要。", "Duì háizi lái shuō, shuìjiào hěn zhòngyào.", "对 + 孩子 + 来说.", ["对孩子来说，睡眠很重要。", "Duì háizi lái shuō, shuìmián hěn zhòngyào.", "对小孩子来说，睡觉很重要。", "Duì xiǎo háizi lái shuō, shuìjiào hěn zhòngyào."]),
      toEn("对外国人来说，声调是最大的问题。", "Duì wàiguórén lái shuō, shēngdiào shì zuì dà de wèntí.", "For foreigners, tones are the biggest problem.", "对…来说: for.", ["For foreigners, the tones are the biggest problem.", "For foreign people, tones are the biggest difficulty.", "For foreigners, tones are the hardest part.", "Tones are the biggest problem for foreigners."]),
      wo(["对", "我", "来说", "健康", "最", "重要"], "For me, health matters most.", "对 + person + 来说 + view."),
      say("对我来说，最难的是汉字。", "对我来说，最难的是汉字: for me, the hardest thing is the characters.", "lái shuō: rising, then high.", "Tell a classmate what you find hardest."),
    ],
    { teaches: ["grammar.dui-laishuo"] }
  ),

  lesson(
    L,
    "zh-b2-fangmian",
    "In Terms Of: 在…方面, 在…上, 在…下",
    "Frame what you're talking about: 在学习方面 (as regards study), 在工作上 (at work), 在大家的帮助下 (with everyone's help), and 一方面…另一方面.",
    "8 min",
    [
      sec(
        "在…方面: as regards",
        [
          `${zh("在", "zài")} + area + ${zh("方面", "fāngmiàn")} = in terms of, as regards: ${zh("在学习方面，他很努力。", "Zài xuéxí fāngmiàn, tā hěn nǔlì.")} 方面 also counts sides: ${zh("一方面…另一方面…", "yì fāngmiàn … lìng yì fāngmiàn …")} (on the one hand … on the other).`,
        ],
        [ex("在学习方面，他很努力。", "Zài xuéxí fāngmiàn, tā hěn nǔlì.", "When it comes to studying, he works hard."), ex("一方面工资高，另一方面离家近。", "Yì fāngmiàn gōngzī gāo, lìng yì fāngmiàn lí jiā jìn.", "On the one hand the pay is good, on the other it's close to home.")],
        [mc("As regards health, you should be careful:", ["在健康方面，你要注意。", "在方面健康，你要注意。", "健康在方面，你要注意。", "在健康，方面你要注意。"], 0, "在 + area + 方面.")]
      ),
      sec(
        "在…上 and 在…下",
        [
          "在 + abstract noun + 上 = on the level of: 在工作上 (at work), 在生活上 (in daily life), 在这个问题上 (on this question).",
          "在 + …的帮助/支持 + 下 = under, with (conditions): 在大家的帮助下 (with everyone's help).",
        ],
        [ex("在大家的帮助下，我完成了工作。", "Zài dàjiā de bāngzhù xià, wǒ wánchéng le gōngzuò.", "With everyone's help, I finished the job.")],
        [mc("在老师的帮助下 means:", ["with the teacher's help", "under the teacher's desk", "on the teacher's side", "about the teacher's help"], 0, "在…下: under (conditions).")]
      ),
    ],
    [
      mc("一方面…另一方面… means:", ["on the one hand … on the other", "in one place … in another", "first … finally", "not only … but also"], 0, "Two sides of a question."),
      listen("在工作上，他是我的老师；在生活上，他是我的朋友。", "What is he to the speaker?", ["Teacher at work, friend in life", "Only a teacher", "Only a friend", "A neighbour"], 0, "在…上: in terms of."),
      fb(C, "在语法___，中文比较简单。(In terms of grammar, Chinese is fairly simple.)", "方面", "fāngmiàn", "在 + area + 方面.", { altAnswers: ["上", "shang"] }),
      fb(C, "在朋友们的帮助___，我找到了工作。(With my friends' help, I found a job.)", "下", "xià", "在…的帮助下."),
      fb(C, "一方面我想去，___方面我没有时间。(On the one hand I want to go; on the other, I don't have time.)", "另一", "lìng yì", "一方面 … 另一方面.", { altAnswers: ["lìng yī"] }),
      toZh("In terms of price, this one is better.", "在价格方面，这个更好。", "Zài jiàgé fāngmiàn, zhège gèng hǎo.", "在 + area + 方面.", ["在价格上，这个更好。", "Zài jiàgé shang, zhège gèng hǎo.", "在价格方面，这个比较好。", "Zài jiàgé fāngmiàn, zhège bǐjiào hǎo."]),
      toZh("We see this question differently.", "在这个问题上，我们的看法不一样。", "Zài zhège wèntí shang, wǒmen de kànfǎ bù yíyàng.", "在 + 问题 + 上.", ["在这个问题上，我们的看法不同。", "Zài zhège wèntí shang, wǒmen de kànfǎ bùtóng.", "我们在这个问题上的看法不一样。", "Wǒmen zài zhège wèntí shang de kànfǎ bù yíyàng.", "在这个问题上，我们的意见不一样。", "Zài zhège wèntí shang, wǒmen de yìjiàn bù yíyàng."]),
      toEn("在生活方面，他需要别人的照顾。", "Zài shēnghuó fāngmiàn, tā xūyào biérén de zhàogù.", "In daily life, he needs other people to look after him.", "在…方面: as regards.", ["When it comes to daily life, he needs others to take care of him.", "In terms of daily life, he needs looking after.", "As far as daily life goes, he needs others' care.", "In everyday life, he needs other people's care."]),
      wo(["在", "学习", "方面", "他", "非常", "努力"], "When it comes to study, he works extremely hard.", "在 + area + 方面, then the comment."),
      say("在大家的帮助下，我们成功了。", "在大家的帮助下，我们成功了: with everyone's help, we succeeded.", "bāngzhù xià: high, then two falls.", "Thank your team."),
    ],
    { teaches: ["grammar.zai-fangmian"] }
  ),

  lesson(
    L,
    "zh-b2-suizhe",
    "As Things Change: 随着",
    "随着 + a change (…的发展, …的变化, …的增加), then a second change -- the backbone of news and essay Chinese.",
    "8 min",
    [
      sec(
        "随着 + a change",
        [
          `${zh("随着", "suízhe")} + a change (usually a noun phrase with 的), then what changes along with it: ${zh("随着经济的发展，人们的生活越来越好。", "Suízhe jīngjì de fāzhǎn, rénmen de shēnghuó yuè lái yuè hǎo.")} It often pairs with 越来越 or 也.`,
        ],
        [ex("随着经济的发展，人们的生活越来越好。", "Suízhe jīngjì de fāzhǎn, rénmen de shēnghuó yuè lái yuè hǎo.", "As the economy develops, people's lives keep getting better."), ex("随着年龄的增长，他越来越安静了。", "Suízhe niánlíng de zēngzhǎng, tā yuè lái yuè ānjìng le.", "As he got older, he became quieter and quieter.")],
        [mc("What comes after 随着?", ["A change, usually a noun phrase with 的", "A person", "A place", "A question word"], 0, "随着 + …的 + 发展/变化/增长.")]
      ),
      sec(
        "Change words",
        [
          `${zh("发展", "fāzhǎn")} (development), ${zh("变化", "biànhuà")} (change), ${zh("增加", "zēngjiā")} (increase), ${zh("提高", "tígāo")} (improvement), ${zh("普及", "pǔjí")} (spread, becoming common).`,
        ],
        [ex("随着手机的普及，很多人不带钱包了。", "Suízhe shǒujī de pǔjí, hěn duō rén bú dài qiánbāo le.", "As smartphones spread, many people stopped carrying wallets.")],
        [mc("变化 means:", ["change", "development", "increase", "spread"], 0, "变化: change.")]
      ),
    ],
    [
      mc("随着天气变冷，… means:", ["As the weather gets colder, …", "Because it's cold, …", "Even if it's cold, …", "Whatever the weather, …"], 0, "随着: as … changes."),
      listen("随着中国的发展，学中文的人越来越多。", "What's increasing?", ["The number of people learning Chinese", "The number of Chinese tourists", "The price of lessons", "The number of teachers"], 0, "学中文的人越来越多: more and more learners."),
      fb(C, "___时间的推移，我慢慢习惯了。(As time went by, I slowly got used to it.)", "随着", "suízhe", "随着 + …的 + change."),
      fb(C, "随着收入的___，人们的要求也提高了。(As incomes rise, people expect more.)", "增加", "zēngjiā", "增加: increase."),
      fb(C, "随着城市的发展，交通___越来越方便。(As the city develops, transport gets more and more convenient.)", "也", "yě", "随着 … 也."),
      toZh("As the weather gets warmer, more and more people go out.", "随着天气变暖，出门的人越来越多。", "Suízhe tiānqì biàn nuǎn, chūmén de rén yuè lái yuè duō.", "随着 + change, then 越来越.", ["随着天气变暖，出去的人越来越多。", "Suízhe tiānqì biàn nuǎn, chūqu de rén yuè lái yuè duō.", "随着天气变暖，越来越多的人出门。", "Suízhe tiānqì biàn nuǎn, yuè lái yuè duō de rén chūmén.", "随着天气变暖和，出门的人越来越多。", "Suízhe tiānqì biàn nuǎnhuo, chūmén de rén yuè lái yuè duō."]),
      toZh("As technology develops, life gets more convenient.", "随着科技的发展，生活越来越方便。", "Suízhe kējì de fāzhǎn, shēnghuó yuè lái yuè fāngbiàn.", "随着 + …的发展.", ["随着科技的发展，生活变得越来越方便。", "Suízhe kējì de fāzhǎn, shēnghuó biàn de yuè lái yuè fāngbiàn.", "随着技术的发展，生活越来越方便。", "Suízhe jìshù de fāzhǎn, shēnghuó yuè lái yuè fāngbiàn.", "随着科技的发展，生活越来越方便了。", "Suízhe kējì de fāzhǎn, shēnghuó yuè lái yuè fāngbiàn le."]),
      toEn("随着年龄的增长，他的身体越来越差。", "Suízhe niánlíng de zēngzhǎng, tā de shēntǐ yuè lái yuè chà.", "As he gets older, his health gets worse and worse.", "随着年龄的增长: as one ages.", ["As he grows older, his health is getting worse.", "With age, his health keeps getting worse.", "As he ages, his health gets worse and worse.", "As he gets older, his health is getting worse and worse."]),
      wo(["随着", "手机", "的", "普及", "人们", "的", "生活", "变", "了"], "As mobile phones spread, people's lives changed.", "随着 + noun + 的 + change."),
      say("随着时间的推移，一切都会好的。", "随着时间的推移，一切都会好的: as time goes on, everything will be all right.", "suízhe: rising, then light.", "Comfort a friend going through a hard time."),
    ],
    { teaches: ["grammar.suizhe"] }
  ),

  lesson(
    L,
    "zh-b2-chengyu",
    "Four-Character Idioms: 成语",
    "成语 are set four-character phrases, many from old stories. Learn the handful people actually use every day -- 马马虎虎, 一路平安, 入乡随俗, 乱七八糟.",
    "9 min",
    [
      sec(
        "Everyday 成语",
        [
          `${zh("成语", "chéngyǔ")} are fixed four-character phrases. A few are part of everyday speech: ${zh("马马虎虎", "mǎmahūhū")} (so-so; careless), ${zh("一路平安", "yílù píng'ān")} (have a safe trip), ${zh("入乡随俗", "rùxiāng suísú")} (when in Rome), ${zh("一模一样", "yìmú yíyàng")} (exactly alike).`,
        ],
        [ex("我的中文马马虎虎。", "Wǒ de Zhōngwén mǎmahūhū.", "My Chinese is so-so."), ex("祝你一路平安！", "Zhù nǐ yílù píng'ān!", "Have a safe trip!")],
        [mc("祝你一路平安 is said to someone who is:", ["setting off on a journey", "eating", "getting married", "ill"], 0, "一路平安: a safe journey.")]
      ),
      sec(
        "How they fit in a sentence",
        [
          `More you'll hear: ${zh("一心一意", "yìxīn yíyì")} (wholeheartedly), ${zh("半途而废", "bàntú ér fèi")} (give up halfway), ${zh("自言自语", "zìyán zìyǔ")} (talk to oneself), ${zh("乱七八糟", "luànqībāzāo")} (in a mess).`,
          "A 成语 does the job of a verb, adjective or adverb: 他的房间乱七八糟 (adjective); 他一心一意地工作 (adverb, with 地).",
        ],
        [ex("他的房间乱七八糟。", "Tā de fángjiān luànqībāzāo.", "His room is a complete mess."), ex("学语言不能半途而废。", "Xué yǔyán bù néng bàntú ér fèi.", "When learning a language you mustn't give up halfway.")],
        [mc("乱七八糟 describes:", ["a mess", "a party", "a sum", "a rainbow"], 0, "乱七八糟: chaos, a mess.")]
      ),
    ],
    [
      mt("Match.", [["马马虎虎", "so-so"], ["一路平安", "safe journey"], ["一模一样", "exactly alike"], ["入乡随俗", "when in Rome"]], "Everyday 成语."),
      mc("双胞胎长得一模一样 means the twins:", ["look exactly alike", "look nothing alike", "are tall", "are noisy"], 0, "一模一样: identical."),
      listen("你怎么一个人自言自语？", "What is the person doing?", ["Talking to themselves", "Singing", "Reading aloud to a friend", "Sleeping"], 0, "自言自语: talk to oneself."),
      fb(C, "考得怎么样？ -- 马马___。(How did the exam go? -- So-so.)", "虎虎", "hūhū", "马马虎虎: so-so."),
      fb(C, "来到中国，要入乡___俗。(In China, do as the locals do.)", "随", "suí", "入乡随俗: when in Rome."),
      fb(C, "他一心一___地学习。(He studies wholeheartedly.)", "意", "yì", "一心一意: wholeheartedly."),
      toZh("Have a safe trip!", "一路平安！", "Yílù píng'ān!", "一路平安: a safe journey.", ["祝你一路平安！", "Zhù nǐ yílù píng'ān!"]),
      toZh("My room is in a mess.", "我的房间乱七八糟。", "Wǒ de fángjiān luànqībāzāo.", "乱七八糟 as an adjective.", ["我的房间乱七八糟的。", "Wǒ de fángjiān luànqībāzāo de.", "我房间乱七八糟。", "Wǒ fángjiān luànqībāzāo."]),
      toEn("做事不能半途而废。", "Zuò shì bù néng bàntú ér fèi.", "You shouldn't give up halfway through things.", "半途而废: give up halfway.", ["You can't give up halfway.", "Don't give up halfway when you do something.", "You mustn't quit halfway through.", "You shouldn't give up halfway when doing things."]),
      say("入乡随俗嘛，我也试试用筷子。", "入乡随俗嘛，我也试试用筷子: when in Rome -- I'll try chopsticks too.", "rùxiāng suísú: falling, high, rising, rising.", "Join in with local customs."),
    ],
    { teaches: ["vocab.chengyu"] }
  ),
];
