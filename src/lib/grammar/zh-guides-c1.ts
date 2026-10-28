// Synced from cheneygross-afk/lengo:src/lib/grammar/zh-guides-c1.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ZhGrammarGuide } from "./zh-types";

// C1 (HSK 5–6) Chinese grammar guides. Conventions: src/lib/lessons/zh/README.md
// (simplified characters; pinyin shows dictionary tones except 不 and 一,
// which are written as spoken; neutral tones unmarked). Chinese quoted in
// English paragraphs is written as 汉字 (pīnyīn).

export const ZH_GUIDES_C1: ZhGrammarGuide[] = [
  // ------------------------------------------------------------------
  {
    slug: "contrast-and-choice-c1",
    title: "Contrast and Choice: 然而, 而, 固然, 与其…不如, 宁可, 就算 and 要不是",
    description:
      "Advanced ways to contrast and choose: written 然而 and 而 (however, whereas), 固然…但 (admittedly … but), 与其…不如 (rather than … better to), 宁可…也不 (would rather), 就算 / 即便 (even supposing) and 要不是 (if it weren't for).",
    level: "C1",
    hsk: "HSK 5–6",
    intro: [
      "At C1 you start to argue: to concede a point and then push back, to weigh two options, to say which you'd choose even at a cost. These patterns are the backbone of essays, debates and serious conversation. Most have a written flavour; the guide notes the spoken equivalents.",
    ],
    sections: [
      {
        heading: "然而 and 而",
        body: [
          "然而 (rán'ér) is the written 'however'. It opens a sentence or clause, before the subject: 然而，事情并没有那么简单 (however, things were not so simple).",
          "而 (ér) on its own joins two clauses or phrases and, at this level, most often means 'whereas, while' in a contrast: 南方人爱吃米饭，而北方人爱吃面食 (southerners love rice, whereas northerners love wheat-based food). It sits at the start of the second clause. In speech, people say 但是 or 可是, or simply put the two clauses side by side.",
        ],
        examples: [
          { zh: "大家都以为他会赢，然而他输了。", pinyin: "Dàjiā dōu yǐwéi tā huì yíng, rán'ér tā shū le.", en: "Everyone thought he'd win. However, he lost." },
          { zh: "城市人口不断增加，而农村人口逐年减少。", pinyin: "Chéngshì rénkǒu búduàn zēngjiā, ér nóngcūn rénkǒu zhúnián jiǎnshǎo.", en: "The urban population keeps growing, while the rural population falls year by year." },
        ],
      },
      {
        heading: "固然…但 and 就算 / 即便",
        body: [
          "固然 (gùrán) concedes a point before arguing against it: 'admittedly, it's true that … but'. 钱固然重要，但健康更重要 (money is admittedly important, but health matters more). It goes after the subject of the first clause, and the second clause opens with 但, 但是 or 可是.",
          "就算 (jiùsuàn) and 即便 (jíbiàn) both mean 'even if, even supposing', like 即使. 就算 is spoken; 即便 is written. Both pair with 也. 决不 (juébù, absolutely never) often follows in a strong refusal: 就算再难，我也决不放弃.",
        ],
        examples: [
          { zh: "这个方法固然好，但成本太高。", pinyin: "Zhège fāngfǎ gùrán hǎo, dàn chéngběn tài gāo.", en: "Admittedly this method is good, but the cost is too high." },
          { zh: "就算你不说，我也知道。", pinyin: "Jiùsuàn nǐ bù shuō, wǒ yě zhīdao.", en: "Even if you don't tell me, I know." },
        ],
      },
      {
        heading: "与其…不如 and 宁可…也不",
        body: [
          "与其 A，不如 B (yǔqí A, bùrú B) weighs two options and prefers the second: 'rather than A, it's better to B'. 与其在家发愁，不如出去走走 (rather than worrying at home, you'd be better off going out). The preferred option comes second, the reverse of English 'I'd rather B than A'. A subject can go before 与其 or right before 不如 (与其抱怨，我们不如想想办法), and 还不如 adds 'you might as well'. 与其说 A，不如说 B relabels rather than chooses: 'it's not so much A as B' (与其说他懒，不如说他太累了).",
          "宁可 A，也不 B (nìngkě A, yě bù B) expresses a firm choice of a hard option to avoid a worse one: 'would rather A than B'. 我宁可走路，也不坐他的车 (I'd rather walk than ride in his car). Here the chosen option comes first. 宁愿 (nìngyuàn) is a near synonym.",
        ],
        table: {
          headers: ["Pattern", "Which option is chosen", "Typical use"],
          rows: [
            ["与其 A，不如 B", "B (the second)", "advice, weighing options"],
            ["宁可 A，也不 B", "A (the first, at a cost)", "firm personal choice"],
          ],
        },
        examples: [
          { zh: "与其抱怨，不如想想办法。", pinyin: "Yǔqí bàoyuàn, bùrú xiǎngxiang bànfǎ.", en: "Rather than complaining, why not think of a solution?" },
          { zh: "我宁可少赚点钱，也不想天天加班。", pinyin: "Wǒ nìngkě shǎo zhuàn diǎn qián, yě bù xiǎng tiāntiān jiā bān.", en: "I'd rather earn a bit less than work overtime every day." },
        ],
      },
      {
        heading: "要不是: if it weren't for",
        body: [
          "要不是 (yàobúshì) introduces a fact that prevented something, and the main clause says what would have happened: 要不是你帮忙，我早就放弃了 (if it weren't for your help, I'd have given up long ago). 就 or 早就 and a final 了 are typical. It's the spoken counterpart of 幸亏…不然 seen from the other side.",
        ],
        examples: [
          { zh: "要不是下大雨，我们早就到了。", pinyin: "Yàobúshì xià dà yǔ, wǒmen zǎo jiù dào le.", en: "If it hadn't been for the heavy rain, we'd have arrived long ago." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "与其走路，不如坐车。 (meaning: I'd rather walk than take the bus)",
        right: "与其坐车，不如走路。",
        rightPinyin: "Yǔqí zuò chē, bùrú zǒu lù.",
        why: "The option you reject goes after 与其 and the one you recommend after 不如. English 'I'd rather walk than take the bus' names the preferred option first, so learners copy that order and end up recommending the opposite.",
      },
      {
        wrong: "我宁可走路，不坐出租车。",
        right: "我宁可走路，也不坐出租车。",
        rightPinyin: "Wǒ nìngkě zǒu lù, yě bú zuò chūzūchē.",
        why: "宁可 needs 也不 (or 也要 for a positive choice) in the second clause.",
      },
      {
        wrong: "我想去，然而我没钱。 (chatting with a friend)",
        right: "我想去，可是没钱。",
        rightPinyin: "Wǒ xiǎng qù, kěshì méi qián.",
        why: "然而 is written style. In conversation, use 可是, 但是 or 不过.",
      },
    ],
    faqs: [
      {
        q: "Is 而 always 'whereas'?",
        a: "No. 而 is a flexible written linker: 'and', 'but', 'whereas', or linking manner to action (匆匆而去). The C2 guide on 而, 则 and 且 covers its full range.",
      },
      {
        q: "What's the difference between 宁可 and 宁愿?",
        a: "Very little. 宁愿 leans towards personal preference; 宁可 can also be used for principles. Both take 也不 or 也要.",
      },
    ],
    related: ["building-an-argument-c1", "against-expectation-c1"],
    lessons: ["zh-c1-ran-er", "zh-c1-guran", "zh-c1-yuqi", "zh-c1-ningke", "zh-c1-jiusuan-jibian", "zh-c1-opinions", "zh-c1-yaobushi"],
  },
  // ------------------------------------------------------------------
  {
    slug: "building-an-argument-c1",
    title: "Building an Argument: 首先, 之所以…是因为, 从而, 可见, 一来…二来, 以致",
    description:
      "The discourse markers of structured Chinese: ordering points, stating the reason why, drawing consequences (从而, 进而, 因而, 以致), concluding (可见, 总之) and rephrasing (换句话说).",
    level: "C1",
    hsk: "HSK 5–6",
    intro: [
      "A good argument in any language signposts its steps. Chinese essays, speeches and presentations use a clear set of markers: words to list points, to explain the reason behind a fact, to show how one thing leads to another, and to sum up. Using them makes your Chinese sound organised; misusing them (especially the consequence words) makes it sound oddly formal or wrong.",
    ],
    sections: [
      {
        heading: "Ordering and summing up",
        body: [
          "首先 (shǒuxiān, first), 其次 (qícì, second, next), 再次 (zàicì, thirdly) and 最后 (zuìhòu, finally) list points in order. 一方面…另一方面 (on the one hand … on the other) balances two sides. 一来…二来 (yī lái … èr lái) gives two reasons in conversation: 'for one thing … for another'.",
          "总之 (zǒngzhī, in short) and 总而言之 (more formal) sum up; 换句话说 (huàn jù huà shuō, in other words) rephrases. 可见 (kějiàn) and 由此可见 (yóucǐ kějiàn) mean 'this shows that, it follows that': they draw a conclusion from evidence just given.",
        ],
        examples: [
          { zh: "首先，我们要明确目标；其次，要制定详细的计划。", pinyin: "Shǒuxiān, wǒmen yào míngquè mùbiāo; qícì, yào zhìdìng xiángxì de jìhuà.", en: "First, we need to be clear about our goals; second, we need to draw up a detailed plan." },
          { zh: "我不想去，一来太远，二来我也没时间。", pinyin: "Wǒ bù xiǎng qù, yī lái tài yuǎn, èr lái wǒ yě méi shíjiān.", en: "I don't want to go: for one thing it's too far, and for another I don't have time." },
          { zh: "他连续三年获得冠军，可见他的实力有多强。", pinyin: "Tā liánxù sān nián huòdé guànjūn, kějiàn tā de shílì yǒu duō qiáng.", en: "He has won the championship three years running, which shows how strong he is." },
        ],
      },
      {
        heading: "之所以…是因为: the reason why",
        body: [
          "之所以 A，是因为 B (zhīsuǒyǐ A, shì yīnwèi B) reverses the usual order: the result comes first, then the reason. 'The reason A is that B.' 他之所以成功，是因为他从不放弃 (the reason he succeeded is that he never gave up). Use it when the result is already known and you're explaining it.",
          "之所以 goes after the subject; 是因为 opens the second clause.",
        ],
        examples: [
          { zh: "我之所以学中文，是因为对中国文化很感兴趣。", pinyin: "Wǒ zhīsuǒyǐ xué Zhōngwén, shì yīnwèi duì Zhōngguó wénhuà hěn gǎn xìngqù.", en: "The reason I'm learning Chinese is that I'm very interested in Chinese culture." },
        ],
      },
      {
        heading: "Consequences: 从而, 进而, 因而, 以致",
        body: [
          "从而 (cóng'ér) means 'thereby, and thus': a planned action achieves a further result. 改进技术，从而提高效率 (improve the technology and thereby raise efficiency).",
          "进而 (jìn'ér) means 'and then go further to': the next stage. 因而 (yīn'ér) is a formal 'therefore'.",
          "以致 (yǐzhì) and 以至于 (yǐzhìyú) mean 'with the result that', and the result is usually bad: 他太粗心，以致出了大错 (he was so careless that he made a serious mistake).",
        ],
        table: {
          headers: ["Word", "Meaning", "Result is usually"],
          rows: [
            ["从而", "thereby", "intended, positive"],
            ["进而", "and then further", "the next step"],
            ["因而", "therefore (formal)", "neutral"],
            ["以致", "so that, with the result that", "negative"],
          ],
        },
        examples: [
          { zh: "公司简化了流程，从而节省了大量时间。", pinyin: "Gōngsī jiǎnhuàle liúchéng, cóng'ér jiéshěngle dàliàng shíjiān.", en: "The company simplified its procedures, thereby saving a great deal of time." },
          { zh: "他长期熬夜，以致身体越来越差。", pinyin: "Tā chángqī áo yè, yǐzhì shēntǐ yuè lái yuè chà.", en: "He stayed up late for years, so that his health got worse and worse." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "因为他从不放弃，之所以他成功了。",
        right: "他之所以成功，是因为他从不放弃。",
        rightPinyin: "Tā zhīsuǒyǐ chénggōng, shì yīnwèi tā cóng bú fàngqì.",
        why: "之所以 introduces the result first, and 是因为 the reason second. It isn't a fancy 所以.",
      },
      {
        wrong: "他每天锻炼，以致身体很好。",
        right: "他每天锻炼，因此身体很好。",
        rightPinyin: "Tā měi tiān duànliàn, yīncǐ shēntǐ hěn hǎo.",
        why: "以致 introduces an unwelcome result. For a good one, use 因此, 所以 or 从而.",
      },
      {
        wrong: "我们加强合作，从而我们提高了效率。",
        right: "我们加强合作，从而提高了效率。",
        rightPinyin: "Wǒmen jiāqiáng hézuò, cóng'ér tígāole xiàolǜ.",
        why: "从而 links two actions by the same subject, so the subject isn't repeated after it.",
      },
    ],
    faqs: [
      {
        q: "Can I use 首先 in conversation?",
        a: "Yes, in a structured explanation. In relaxed talk 第一…第二… or 先…然后… is more natural.",
      },
      {
        q: "Is 可见 the same as 看得见?",
        a: "No. 可见 is a written conclusion marker ('it can be seen that'); 看得见 means physically able to see.",
      },
    ],
    related: ["contrast-and-choice-c1", "formal-frames-c1"],
    lessons: ["zh-c1-shouxian", "zh-c1-zhisuoyi", "zh-c1-conger", "zh-c1-kejian", "zh-c1-yilai-erlai", "zh-c1-zongzhi", "zh-c1-yizhi"],
  },
  // ------------------------------------------------------------------
  {
    slug: "degree-and-emphasis-c1",
    title: "Degree and Emphasis: 极其, 得不得了, 简直, 明明, 可, 倒是 and 令人",
    description:
      "Saying how strongly you feel: degree words (极了, 极其, 得不得了, 得要命), 简直 (simply) and 明明 (obviously), emphatic 可 and 倒是, 罢了 and 算了, and 令人 + feeling.",
    level: "C1",
    hsk: "HSK 5–6",
    intro: [
      "很 and 非常 get you through B1. At C1 you need words with more colour: some written (极其), some vivid and spoken (得要命), some that carry an attitude rather than a degree (简直, 明明, 可). Each has a fixed position, which is where most mistakes happen.",
    ],
    sections: [
      {
        heading: "Degree words and their positions",
        body: [
          "Some degree words go before the adjective: 极其 (jíqí, extremely; written), 十分 (shífēn), 格外 (géwài, especially). Others come after it: 极了 (jí le), 得很 (de hěn), 得不得了 (de bùdéliǎo), 得要命 (de yàomìng, to death), 死了 (sǐ le, colloquial). Adjectives with a degree word after them don't take 很 as well.",
        ],
        table: {
          headers: ["Before the adjective", "After the adjective", "Register"],
          rows: [
            ["极其重要", "", "written"],
            ["十分满意", "", "neutral to formal"],
            ["", "好极了", "neutral"],
            ["", "高兴得不得了", "spoken"],
            ["", "累得要命 / 累死了", "very colloquial"],
          ],
        },
        examples: [
          { zh: "这个决定极其重要。", pinyin: "Zhège juédìng jíqí zhòngyào.", en: "This decision is extremely important." },
          { zh: "听到这个好消息，她高兴得不得了。", pinyin: "Tīngdào zhège hǎo xiāoxi, tā gāoxìng de bùdéliǎo.", en: "When she heard the good news she was absolutely delighted." },
        ],
      },
      {
        heading: "简直 and 明明",
        body: [
          "简直 (jiǎnzhí) means 'simply, practically': it introduces an exaggeration and often pairs with 太…了 or 像: 这简直是个奇迹 (this is simply a miracle).",
          "明明 (míngmíng) means 'clearly, obviously (and yet)': it states a plain fact that someone is ignoring or contradicting. 你明明知道，为什么不告诉我？ (you obviously knew, so why didn't you tell me?). It usually leads into a complaint or a question.",
        ],
        examples: [
          { zh: "他做的菜简直跟饭店的一样好吃。", pinyin: "Tā zuò de cài jiǎnzhí gēn fàndiàn de yíyàng hǎochī.", en: "His cooking is practically as good as a restaurant's." },
          { zh: "他明明听见了，却装作没听见。", pinyin: "Tā míngmíng tīngjiàn le, què zhuāngzuò méi tīngjiàn.", en: "He obviously heard, but pretended he hadn't." },
        ],
      },
      {
        heading: "Emphatic 可, 倒是, 罢了 and 算了",
        body: [
          "可 (kě) before an adjective or verb adds spoken emphasis: 今天可真冷！ (it's really cold today!). 可不是 (kěbúshì) means 'you can say that again'. 可别 means 'whatever you do, don't'.",
          "倒是 (dàoshì) introduces something contrary to expectation, or a concession: 这件衣服贵倒是不贵，就是不好看 (it's not expensive, I'll give it that, but it isn't nice).",
          "罢了 (bà le) at the end of a sentence means 'that's all, merely': 我只是随便说说罢了 (I was just saying). 算了 (suàn le) means 'forget it, let it go'.",
        ],
        examples: [
          { zh: "你可别忘了！", pinyin: "Nǐ kě bié wàng le!", en: "Whatever you do, don't forget!" },
          { zh: "他说的倒是有道理。", pinyin: "Tā shuō de dàoshì yǒu dàolǐ.", en: "He does have a point, actually." },
        ],
      },
      {
        heading: "令人 + feeling",
        body: [
          "令人 (lìngrén) + feeling means 'makes people feel …': 令人感动 (moving), 令人失望 (disappointing), 令人担心 (worrying). It turns a feeling verb into an English '-ing' adjective and is common in reviews and written comment. 让人 is the spoken version.",
        ],
        examples: [
          { zh: "这部电影的结局令人感动。", pinyin: "Zhè bù diànyǐng de jiéjú lìngrén gǎndòng.", en: "The ending of this film is very moving." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "今天很冷极了。",
        right: "今天冷极了。",
        rightPinyin: "Jīntiān lěng jí le.",
        why: "A degree complement after the adjective replaces 很; you can't have both.",
      },
      {
        wrong: "这个问题极其。",
        right: "这个问题极其复杂。",
        rightPinyin: "Zhège wèntí jíqí fùzá.",
        why: "极其 is an adverb before an adjective or verb; it can't stand alone like 极了.",
      },
      {
        wrong: "这本书令我很无聊。",
        right: "这本书让我觉得很无聊。",
        rightPinyin: "Zhè běn shū ràng wǒ juéde hěn wúliáo.",
        why: "令 + person + feeling suits formal writing; in speech, and with an everyday feeling like 无聊, use 让…觉得.",
      },
    ],
    faqs: [
      {
        q: "Is 死了 rude?",
        a: "Not rude, just very informal. 累死了 and 饿死了 are everyday exaggerations; keep them out of written work.",
      },
      {
        q: "Does 可 here have anything to do with 可以?",
        a: "Historically, yes, but emphatic 可 is a separate spoken adverb. It doesn't mean 'may'.",
      },
    ],
    related: ["even-let-alone-c1", "against-expectation-c1"],
    lessons: ["zh-c1-degree", "zh-c1-jianzhi-mingming", "zh-c1-ke-dao", "zh-c1-emotions"],
  },
  // ------------------------------------------------------------------
  {
    slug: "even-let-alone-c1",
    title: "Even and Let Alone: 甚至, 何况, 更不用说, 尚且…何况 and 别说…连",
    description:
      "Building up to the strongest case: 甚至 (even), 何况 and 更不用说 (let alone, not to mention), 尚且…何况 (if even X, then surely Y) and 别说…连…也 (never mind …, not even …).",
    level: "C1",
    hsk: "HSK 5–6",
    intro: [
      "These patterns compare two cases on a scale. You state one, and the other follows a fortiori: if even the easy case fails, the hard one certainly will; if even an expert can't, a beginner certainly can't. English uses 'let alone' and 'never mind'; Chinese has a richer set, from spoken 别说 to written 尚且.",
    ],
    sections: [
      {
        heading: "甚至 at C1",
        body: [
          "甚至 (shènzhì) adds a further, more extreme example. At C1 it often comes in the middle of a series, sometimes as 甚至于 or with 连: 他不但不道歉，甚至还怪别人 (not only did he not apologise, he even blamed others).",
        ],
        examples: [
          { zh: "这个病很难治，有的人甚至要治好几年。", pinyin: "Zhège bìng hěn nán zhì, yǒu de rén shènzhì yào zhì hǎo jǐ nián.", en: "This illness is hard to treat; some people even need several years of treatment." },
        ],
      },
      {
        heading: "何况 and 更不用说",
        body: [
          "何况 (hékuàng) means 'let alone, all the more so': the second case follows obviously from the first. 这个问题大人都不懂，何况孩子呢？ (even adults don't understand this, let alone children). It often ends in 呢 as a rhetorical question.",
          "更不用说 (gèng búyòng shuō) means 'not to mention': it adds a case that obviously follows. It's neutral and used in both speech and writing.",
        ],
        examples: [
          { zh: "这么重的箱子，大人都搬不动，何况孩子呢？", pinyin: "Zhème zhòng de xiāngzi, dàrén dōu bān bu dòng, hékuàng háizi ne?", en: "Even adults can't lift a box this heavy, let alone a child." },
          { zh: "他连英语都说不好，更不用说法语了。", pinyin: "Tā lián Yīngyǔ dōu shuō bu hǎo, gèng búyòng shuō Fǎyǔ le.", en: "He can't even speak English well, let alone French." },
        ],
      },
      {
        heading: "尚且…何况 and 别说…连…也",
        body: [
          "尚且 (shàngqiě) is the written 'even': 尚且 A，何况 B means 'if even A, then all the more B'. 专家尚且不能解决，何况我们呢？ (if even experts can't solve it, how could we?).",
          "别说 (biéshuō) puts the harder case first: 别说 B，连 A 也/都… means 'never mind B, not even A'. 别说出国了，他连省都没出过 (never mind going abroad, he's never even left the province). It's spoken and lively.",
        ],
        table: {
          headers: ["Pattern", "Order", "Register"],
          rows: [
            ["连 A 都…，更不用说 B", "easy case, then hard", "neutral"],
            ["A 都…，何况 B 呢", "easy case, then hard", "neutral"],
            ["A 尚且…，何况 B", "easy case, then hard", "written"],
            ["别说 B，连 A 也…", "hard case, then easy", "spoken"],
          ],
        },
        examples: [
          { zh: "成年人尚且做不到，何况孩子？", pinyin: "Chéngniánrén shàngqiě zuò bu dào, hékuàng háizi?", en: "If even adults can't manage it, how could a child?" },
          { zh: "别说一万块，我连一千块都没有。", pinyin: "Biéshuō yíwàn kuài, wǒ lián yìqiān kuài dōu méiyǒu.", en: "Never mind ten thousand yuan, I don't even have a thousand." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "他连跑步都跑不快，何况走路呢？",
        right: "他连路都走不稳，何况跑步呢？",
        rightPinyin: "Tā lián lù dōu zǒu bu wěn, hékuàng pǎo bù ne?",
        why: "何况 introduces the harder case, which follows from the easier one. Put the easy case (walking) with 连…都 and the hard one (running) after 何况.",
      },
      {
        wrong: "别说一千块，我也没有一万块。",
        right: "别说一万块，我连一千块都没有。",
        rightPinyin: "Biéshuō yíwàn kuài, wǒ lián yìqiān kuài dōu méiyǒu.",
        why: "别说 takes the bigger, harder case, and 连…都 the smaller one that also fails.",
      },
      {
        wrong: "专家尚且不能解决，我们何况呢？",
        right: "专家尚且不能解决，何况我们呢？",
        rightPinyin: "Zhuānjiā shàngqiě bù néng jiějué, hékuàng wǒmen ne?",
        why: "何况 opens its clause, before the noun it introduces.",
      },
    ],
    faqs: [
      {
        q: "Is 何况 always a question?",
        a: "Often, with 呢, but not always: 何况他还是个孩子 (besides, he's only a child) adds an extra reason as a statement.",
      },
      {
        q: "Can I use 尚且 in speech?",
        a: "It will sound bookish. In conversation say 连…都…，更不用说… or 别说….",
      },
    ],
    related: ["degree-and-emphasis-c1", "against-expectation-c1"],
    lessons: ["zh-c1-shenzhi", "zh-c1-hekuang", "zh-c1-shangqie"],
  },
  // ------------------------------------------------------------------
  {
    slug: "against-expectation-c1",
    title: "Against Expectations: 反而, 反正, 不料, 偏偏, 总算, 未必 and 难免",
    description:
      "Adverbs for when things don't go as expected: 反而 (on the contrary), 反正 (anyway), 不料 and 居然 (unexpectedly), 偏偏 (just my luck, insist on), 总算 and 好不容易 (at long last), 未必 and 不见得 (not necessarily), and 难免 / 不免 / 未免 (bound to, rather too).",
    level: "C1",
    hsk: "HSK 5–6",
    intro: [
      "Much of real conversation is about things turning out differently from what someone expected. These adverbs carry that attitude in a single word. They all sit after the subject and before the verb, except 不料, which opens its clause.",
    ],
    sections: [
      {
        heading: "反而 and 反正",
        body: [
          "反而 (fǎn'ér) means 'instead, on the contrary': the result is the opposite of what the first clause would lead you to expect. 吃了药，病反而更重了 (after taking the medicine, he got worse instead). It often follows 不但不 / 不仅没有: 他不但没生气，反而笑了.",
          "反正 (fǎnzhèng) means 'anyway, in any case': whatever the circumstances, the conclusion stays the same. 你去不去都行，反正我要去 (go or don't, I'm going anyway). It often comes after a 不管 clause or a choice.",
        ],
        examples: [
          { zh: "他不但没帮忙，反而添了不少麻烦。", pinyin: "Tā búdàn méi bāng máng, fǎn'ér tiānle bù shǎo máfan.", en: "Far from helping, he actually caused a lot of trouble." },
          { zh: "别着急，反正还有时间。", pinyin: "Bié zháojí, fǎnzhèng hái yǒu shíjiān.", en: "Don't rush, there's still time anyway." },
        ],
      },
      {
        heading: "不料, 居然 and 偏偏",
        body: [
          "不料 (búliào) means 'unexpectedly, who'd have thought': it opens the clause that brings the surprise, usually in narration. 居然 (jūrán) is an adverb after the subject, like 竟然, and more colloquial. 意想不到 (yìxiǎng bú dào) means 'unexpected' as an adjective.",
          "偏偏 (piānpiān) has two uses: 'as luck would have it' (just when you didn't want it), and 'insist on doing (against advice)'. 我急着出门，偏偏下起雨来 (I was in a hurry to go out and, just my luck, it started raining). 偏要 is 'insist on': 不让他去，他偏要去.",
        ],
        examples: [
          { zh: "本来想给她一个惊喜，不料她早就知道了。", pinyin: "Běnlái xiǎng gěi tā yí ge jīngxǐ, búliào tā zǎo jiù zhīdao le.", en: "I meant to surprise her, but it turned out she'd known all along." },
          { zh: "我越不让他碰，他偏偏要碰。", pinyin: "Wǒ yuè bú ràng tā pèng, tā piānpiān yào pèng.", en: "The more I tell him not to touch it, the more he insists on touching it." },
        ],
      },
      {
        heading: "总算, 好不容易, 未必 and 不见得",
        body: [
          "总算 (zǒngsuàn) means 'at long last, finally (with relief)'. 好不容易 (hǎobù róngyì) means 'with great difficulty', despite looking like a negative: 好不容易 = 好容易 = very hard. 我好不容易才买到票 (I only managed to get a ticket with great difficulty).",
          "未必 (wèibì) and 不见得 (bú jiànde) mean 'not necessarily': they politely cast doubt. 贵的未必好 (expensive isn't necessarily good). 未必 is more written; 不见得 more spoken. 不至于 (búzhìyú) means 'it won't go so far as'.",
        ],
        examples: [
          { zh: "等了两个小时，车总算来了。", pinyin: "Děngle liǎng ge xiǎoshí, chē zǒngsuàn lái le.", en: "After two hours of waiting, the bus finally came." },
          { zh: "他说的不见得对。", pinyin: "Tā shuō de bú jiànde duì.", en: "What he says isn't necessarily right." },
        ],
      },
      {
        heading: "难免, 不免 and 未免",
        body: [
          "难免 (nánmiǎn) means 'hard to avoid, bound to happen': 刚开始工作，犯错是难免的 (when you've just started, mistakes are inevitable). 不免 (bùmiǎn) is similar but describes a natural reaction: 想起往事，不免有些伤心.",
          "未免 (wèimiǎn) is a polite criticism: 'rather too, a bit much'. 你这样说未免太过分了 (saying that is going a bit too far).",
        ],
        examples: [
          { zh: "第一次上台，紧张是难免的。", pinyin: "Dì yī cì shàng tái, jǐnzhāng shì nánmiǎn de.", en: "The first time on stage, it's only natural to be nervous." },
          { zh: "这个价格未免太高了吧。", pinyin: "Zhège jiàgé wèimiǎn tài gāo le ba.", en: "This price is rather on the high side, isn't it?" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "下雨了，反而我们没去。",
        right: "下雨了，所以我们没去。",
        rightPinyin: "Xià yǔ le, suǒyǐ wǒmen méi qù.",
        why: "反而 marks a result opposite to the expected one. Not going because of rain is the expected result; and 反而 goes after the subject anyway.",
      },
      {
        wrong: "我好不容易找到了工作。 (meaning: it was easy)",
        right: "我很容易就找到了工作。",
        rightPinyin: "Wǒ hěn róngyì jiù zhǎodàole gōngzuò.",
        why: "好不容易 means 'with great difficulty', not 'not easy' = easy. To say it was easy, use 很容易.",
      },
      {
        wrong: "反正下不下雨，我都去。",
        right: "不管下不下雨，我都去。",
        rightPinyin: "Bùguǎn xià bu xià yǔ, wǒ dōu qù.",
        why: "The 'whether or not' clause needs 不管. 反正 belongs in the conclusion: 下不下雨无所谓，反正我要去.",
      },
    ],
    faqs: [
      {
        q: "What's the difference between 居然 and 竟然?",
        a: "They're nearly interchangeable. 居然 is a little more colloquial; 竟然 a little more written.",
      },
      {
        q: "Is 未免 the same as 难免?",
        a: "No. 难免 says something is inevitable; 未免 politely criticises something as excessive.",
      },
    ],
    related: ["contrast-and-choice-c1", "degree-and-emphasis-c1"],
    lessons: ["zh-c1-fan-er", "zh-c1-fanzheng", "zh-c1-buliao", "zh-c1-pianpian", "zh-c1-zongsuan", "zh-c1-weibi", "zh-c1-nanmian"],
  },
  // ------------------------------------------------------------------
  {
    slug: "spoken-structures-c1",
    title: "Spoken Structures at C1: Figurative Complements, 把 Revisited, 彼此 and 动不动就",
    description:
      "Advanced spoken grammar: figurative directional complements (想起来, 坚持下去), fixed potential forms (舍不得, 看不惯), 把 with negation and modals, colloquial 给, 彼此 and 互相, 动不动就, and frames like 爱V不V and 说V就V.",
    level: "C1",
    hsk: "HSK 5–6",
    intro: [
      "C1 speech is full of short, idiomatic structures that a textbook rarely spells out: complements that have drifted far from their literal meaning, fixed potential forms that work like single words, and frames that express impatience or indifference. They make your Chinese sound natural rather than translated.",
    ],
    sections: [
      {
        heading: "Figurative directional and fixed potential complements",
        body: [
          "Directional complements often have abstract meanings. 起来 (qǐlai): start, or recall (想起来). 下去 (xiaqu): continue (坚持下去). 出来 (chūlai): identify, emerge (看出来, 听出来). 下来 (xialai): settle into a lasting state (安静下来, 记下来).",
          "Some potential forms are fixed expressions: 舍不得 (shěbude, can't bear to part with), 看不惯 (kàn bu guàn, can't stand the sight of), 合得来 (hé de lái, get on) and 合不来 (hé bu lái, not get on), 处得来 (chǔ de lái, get along).",
        ],
        table: {
          headers: ["Complement", "Literal", "Figurative example"],
          rows: [
            ["起来", "up", "想起来 (remember)"],
            ["下去", "down (away)", "说下去 (go on talking)"],
            ["出来", "out", "看出来 (make out, tell)"],
            ["下来", "down (towards)", "冷静下来 (calm down)"],
          ],
        },
        examples: [
          { zh: "我想起来了，我们在上海见过！", pinyin: "Wǒ xiǎng qilai le, wǒmen zài Shànghǎi jiànguo!", en: "Now I remember, we met in Shanghai!" },
          { zh: "再难也要坚持下去。", pinyin: "Zài nán yě yào jiānchí xiaqu.", en: "However hard it is, you have to keep going." },
          { zh: "我跟新同事挺合得来的。", pinyin: "Wǒ gēn xīn tóngshì tǐng hé de lái de.", en: "I get on pretty well with my new colleagues." },
        ],
      },
      {
        heading: "把 revisited and colloquial 给",
        body: [
          "In a 把 sentence, negatives and modal verbs go before 把, not before the verb: 我没把钥匙带来 (I didn't bring the keys), 你应该把话说清楚 (you should make yourself clear).",
          "In speech, 给 (gěi) is often slipped in right before the verb in 把 and 被 sentences, adding a sense of something done (often regrettably): 我把这事给忘了 (I went and forgot about it), 杯子被他给打碎了. This 给 has no meaning of 'give' and is optional.",
        ],
        examples: [
          { zh: "你别把这件事告诉他。", pinyin: "Nǐ bié bǎ zhè jiàn shì gàosu tā.", en: "Don't tell him about this." },
          { zh: "糟糕，我把他的生日给忘了。", pinyin: "Zāogāo, wǒ bǎ tā de shēngrì gěi wàng le.", en: "Oh no, I went and forgot his birthday." },
        ],
      },
      {
        heading: "彼此, 互相, 相互 and 各自",
        body: [
          "互相 (hùxiāng) is an adverb: 'each other', before the verb. 相互 (xiānghù) is its written twin and can also modify nouns (相互关系). 彼此 (bǐcǐ) is a pronoun, 'each other, one another', and can be an object or stand alone: 彼此彼此 (likewise, same to you). 各自 (gèzì) means 'each (separately)'.",
        ],
        examples: [
          { zh: "朋友之间应该互相帮助。", pinyin: "Péngyou zhījiān yīnggāi hùxiāng bāngzhù.", en: "Friends should help each other." },
          { zh: "我们彼此都很了解。", pinyin: "Wǒmen bǐcǐ dōu hěn liǎojiě.", en: "We know each other very well." },
        ],
      },
      {
        heading: "动不动就, 爱V不V, A是A and 说V就V",
        body: [
          "动不动就 (dòngbudòng jiù) means 'at the slightest provocation, all the time' and complains about a habit: 他动不动就发脾气 (he loses his temper at the drop of a hat).",
          "爱 V 不 V (ài V bù V) shrugs: 'do it or not, I don't care': 你爱去不去. A 是 A, 可是… concedes: 好是好，可是太贵 (it's good, sure, but too expensive). 说 V 就 V means 'do it the moment you say it': 说走就走 (just up and go).",
          "要想 A，就得 B (yào xiǎng A, jiù děi B) means 'if you want A, you have to B'.",
        ],
        examples: [
          { zh: "这孩子动不动就哭。", pinyin: "Zhè háizi dòngbudòng jiù kū.", en: "This child cries at the slightest thing." },
          { zh: "这件衣服漂亮是漂亮，就是太贵了。", pinyin: "Zhè jiàn yīfu piàoliang shì piàoliang, jiùshì tài guì le.", en: "This dress is lovely, sure, but it's too expensive." },
          { zh: "要想身体好，就得多运动。", pinyin: "Yào xiǎng shēntǐ hǎo, jiù děi duō yùndòng.", en: "If you want to be healthy, you have to exercise more." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "我把钥匙没带来。",
        right: "我没把钥匙带来。",
        rightPinyin: "Wǒ méi bǎ yàoshi dàilai.",
        why: "In a 把 sentence, 没, 不 and modal verbs go before 把.",
      },
      {
        wrong: "我们互相彼此帮助。",
        right: "我们互相帮助。",
        rightPinyin: "Wǒmen hùxiāng bāngzhù.",
        why: "互相 and 彼此 both mean 'each other'; use one. 互相 goes before a verb; 彼此 works as a pronoun.",
      },
      {
        wrong: "我想出来他的名字了。",
        right: "我想起来他的名字了。",
        rightPinyin: "Wǒ xiǎng qilai tā de míngzi le.",
        why: "想起来 is recalling something you knew; 想出来 is coming up with something new (an idea, a solution).",
      },
    ],
    faqs: [
      {
        q: "Is 爱V不V rude?",
        a: "It can be: it shows impatience. Between friends it's teasing; with a stranger or a superior it's rude.",
      },
      {
        q: "Does colloquial 给 change the meaning?",
        a: "No. It adds a spoken, often regretful tone. Leave it out in writing.",
      },
    ],
    related: ["passives-c1", "narration-c1"],
    lessons: ["zh-c1-direction-figurative", "zh-c1-potential-more", "zh-c1-gei-colloquial", "zh-c1-relationships", "zh-c1-bici", "zh-c1-ba-advanced", "zh-c1-dongbudong", "zh-c1-ai-v-bu-v", "zh-c1-diet-sleep"],
  },
  // ------------------------------------------------------------------
  {
    slug: "passives-c1",
    title: "Passives in Full: 被, 叫, 让, 给, 为…所 and 遭到 / 受到",
    description:
      "Every way Chinese expresses the passive, from spoken 叫 and 让 to written 为…所 and 被…所, plus the 'suffering' verbs 遭, 遭到, 受到 and 挨.",
    level: "C1",
    hsk: "HSK 5–6",
    intro: [
      "English uses the passive constantly and neutrally. Chinese uses it far less, and traditionally for things that happen to someone against their will. Many English passives are best translated as active sentences or with a topic: 'The letter has been sent' is 信已经发了, with no passive marker at all. When Chinese does mark the passive, it chooses among several words by register and meaning.",
    ],
    sections: [
      {
        heading: "Choosing the passive marker",
        body: [
          "被 (bèi) is neutral and can drop the agent: 他被批评了. 叫 (jiào) and 让 (ràng) are spoken and always need an agent (叫人偷了, never 叫偷了). 给 (gěi) is spoken and, like 被, can drop the agent: 钱包给偷了.",
          "为…所 (wéi … suǒ) and 被…所 are written: 为人们所熟悉 (be familiar to people). The verb after 所 is usually two syllables, and nothing follows it: no 了, no result complement.",
        ],
        table: {
          headers: ["Marker", "Register", "Agent optional?", "Example"],
          rows: [
            ["被", "neutral", "yes", "被偷了"],
            ["叫 / 让", "spoken", "no", "叫人偷了"],
            ["给", "spoken", "yes", "给偷了"],
            ["为…所", "written", "no", "为人们所接受"],
          ],
        },
        examples: [
          { zh: "这种观点已经为大多数人所接受。", pinyin: "Zhè zhǒng guāndiǎn yǐjīng wéi dàduōshù rén suǒ jiēshòu.", en: "This view has been accepted by most people." },
          { zh: "他的作品深受读者喜爱，被许多人所熟知。", pinyin: "Tā de zuòpǐn shēn shòu dúzhě xǐ'ài, bèi xǔduō rén suǒ shúzhī.", en: "His work is much loved by readers and widely known." },
        ],
      },
      {
        heading: "遭, 遭到, 受到 and 挨",
        body: [
          "Some verbs build the passive meaning in. They take a noun (often a verb used as a noun) as their object.",
          "受到 (shòudào) is neutral and can be positive or negative: 受到欢迎 (be welcomed), 受到批评 (be criticised). 遭到 (zāodào) and 遭 are negative and formal: 遭到拒绝 (be refused), 遭受损失 (suffer losses). 挨 (ái) is colloquial and negative: 挨打 (get hit), 挨骂 (get told off).",
        ],
        examples: [
          { zh: "这个建议受到了大家的欢迎。", pinyin: "Zhège jiànyì shòudàole dàjiā de huānyíng.", en: "The suggestion was welcomed by everyone." },
          { zh: "他的申请遭到了拒绝。", pinyin: "Tā de shēnqǐng zāodàole jùjué.", en: "His application was rejected." },
          { zh: "小时候我经常挨骂。", pinyin: "Xiǎo shíhou wǒ jīngcháng ái mà.", en: "I used to get told off a lot when I was little." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "这本书被写在1990年。",
        right: "这本书是1990年写的。",
        rightPinyin: "Zhè běn shū shì yī jiǔ jiǔ líng nián xiě de.",
        why: "Neutral English passives are usually not 被 sentences in Chinese. Use 是…的 or an active sentence.",
      },
      {
        wrong: "他遭到了表扬。",
        right: "他受到了表扬。",
        rightPinyin: "Tā shòudàole biǎoyáng.",
        why: "遭到 is only for bad things. For praise or a welcome, use 受到.",
      },
      {
        wrong: "这个方法为大家所接受了。",
        right: "这个方法为大家所接受。",
        rightPinyin: "Zhège fāngfǎ wéi dàjiā suǒ jiēshòu.",
        why: "Nothing follows the verb in 为…所: no 了 or complement.",
      },
    ],
    faqs: [
      {
        q: "Is 为 in 为…所 read wèi?",
        a: "No: in the passive it is wéi. wèi is 'for, for the sake of'.",
      },
      {
        q: "Can 被 be used for good news now?",
        a: "Yes. Modern Chinese, partly under English influence, uses 被 more widely (被选为, be elected), but the unwelcome meaning is still the default.",
      },
    ],
    related: ["spoken-structures-c1", "zhi-qi-suo-c1"],
    lessons: ["zh-c1-wei-suo", "zh-c1-passive-review", "zh-c1-zao-shou-ai", "zh-c1-facts", "zh-c1-disputes"],
  },
  // ------------------------------------------------------------------
  {
    slug: "zhi-qi-suo-c1",
    title: "Classical Traces: 之, 其, 所 and 此, 该, 本, 某, 各",
    description:
      "The classical words that survive in modern written Chinese: 之 (the written 的), 其 (his, its, their), 所 + verb (what is …), and the written demonstratives 此, 该, 本, 某 and 各.",
    level: "C1",
    hsk: "HSK 5–6",
    intro: [
      "Modern written Chinese keeps a handful of words from Classical Chinese. You can't read a newspaper, a contract or an instruction leaflet without them, and they appear in hundreds of fixed words (之一, 其中, 所以, 所谓). This guide covers the ones you need for reading and for formal writing.",
    ],
    sections: [
      {
        heading: "之: the written 的",
        body: [
          "之 (zhī) links a modifier to a noun, like 的: 城市之间 (between cities), 原因之一 (one of the reasons), 三分之一 (one third). It survives mostly in fixed patterns: X 之一 (one of X), X 之间 (between), X 之后 / 之前 (after, before), X 之中 (among).",
          "In free writing, 之 appears in balanced four-character phrases: 无价之宝 (a priceless treasure).",
        ],
        examples: [
          { zh: "长城是世界上最著名的建筑之一。", pinyin: "Chángchéng shì shìjiè shang zuì zhùmíng de jiànzhù zhī yī.", en: "The Great Wall is one of the most famous structures in the world." },
          { zh: "两国之间的贸易不断增长。", pinyin: "Liǎng guó zhījiān de màoyì búduàn zēngzhǎng.", en: "Trade between the two countries keeps growing." },
        ],
      },
      {
        heading: "其: his, its, their, that",
        body: [
          "其 (qí) is a written pronoun meaning 'his, her, its, their' or 'that, the said': 其原因 (its cause), 其他 (other), 其中 (among them), 尤其 (especially), 及其 (and its). It refers back to something just mentioned and can't be the subject of a main sentence on its own.",
        ],
        examples: [
          { zh: "公司有五百名员工，其中一半是女性。", pinyin: "Gōngsī yǒu wǔbǎi míng yuángōng, qízhōng yíbàn shì nǚxìng.", en: "The company has five hundred employees, half of whom are women." },
          { zh: "我们应该尊重每个人及其选择。", pinyin: "Wǒmen yīnggāi zūnzhòng měi ge rén jí qí xuǎnzé.", en: "We should respect every individual and their choices." },
        ],
      },
      {
        heading: "所 + verb, 所谓 and 所在",
        body: [
          "所 (suǒ) + verb turns the verb into 'what is V-ed': 我所知道的 (what I know), 他所说的话 (what he said). The 的 often follows. It's formal: in speech 我知道的 is enough.",
          "所谓 (suǒwèi) means 'so-called, what is called': it can be neutral (introducing a term) or sceptical. 所在 (suǒzài) means 'where something lies': 问题所在 (where the problem lies).",
        ],
        examples: [
          { zh: "据我所知，他已经离开公司了。", pinyin: "Jù wǒ suǒ zhī, tā yǐjīng líkāi gōngsī le.", en: "As far as I know, he has already left the company." },
          { zh: "所谓“内卷”，就是过度竞争。", pinyin: "Suǒwèi “nèijuǎn”, jiù shì guòdù jìngzhēng.", en: "What's called 'involution' is simply excessive competition." },
        ],
      },
      {
        heading: "此, 该, 本, 某 and 各",
        body: [
          "These are the written demonstratives. 此 (cǐ): this (此人, 此事). 该 (gāi): the said, the aforementioned (该公司, the company in question). 本 (běn): this, our own (本店, 本市, 本人). 某 (mǒu): a certain (某人, 某公司). 各 (gè): each, every (各位, 各国).",
          "Spoken equivalents: 这个, 那个, 我们, 有个, 每个.",
        ],
        examples: [
          { zh: "本店今日停业。", pinyin: "Běn diàn jīnrì tíngyè.", en: "This shop is closed today." },
          { zh: "该公司去年利润增长了百分之二十。", pinyin: "Gāi gōngsī qùnián lìrùn zēngzhǎngle bǎi fēn zhī èrshí.", en: "The company's profits grew by twenty per cent last year." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "她是我最好的朋友之一个。",
        right: "她是我最好的朋友之一。",
        rightPinyin: "Tā shì wǒ zuì hǎo de péngyou zhī yī.",
        why: "之一 is a fixed form: no measure word follows.",
      },
      {
        wrong: "其很重要。",
        right: "这一点很重要。",
        rightPinyin: "Zhè yì diǎn hěn zhòngyào.",
        why: "其 can't stand alone as a subject in modern Chinese; it modifies a noun or appears inside fixed words.",
      },
      {
        wrong: "该人很友好。 (talking about a friend)",
        right: "这个人很友好。",
        rightPinyin: "Zhège rén hěn yǒuhǎo.",
        why: "该 is bureaucratic: reports, police statements, news. In conversation it sounds absurd.",
      },
    ],
    faqs: [
      {
        q: "Is 所以 related to 所?",
        a: "Yes: historically 所以 meant 'that by which, the reason'. In modern Chinese, treat it as one word.",
      },
      {
        q: "Does 本人 mean 'this person'?",
        a: "It means 'myself' or 'the person in question': 本人签字 (to be signed in person).",
      },
    ],
    related: ["formal-frames-c1", "passives-c1", "classical-words-1-c2"],
    lessons: ["zh-c1-zhi", "zh-c1-qi", "zh-c1-suo", "zh-c1-ci-gai-ben"],
  },
  // ------------------------------------------------------------------
  {
    slug: "formal-frames-c1",
    title: "Formal Frames and Prepositions: 以…为, 于, 将, 加以, 凭, 鉴于, 就…而言, 至于 and 使",
    description:
      "The building blocks of formal Chinese: 以…为 (take A as B), written 于 and 将, the verbs 进行 / 加以 / 予以 / 给予, 凭 and 趁, 视为, 鉴于 / 本着 / 基于, 就…而言 and 至于, 由…组成, and the written causatives 使 and 令.",
    level: "C1",
    hsk: "HSK 5–6",
    intro: [
      "Formal Chinese is built from a fairly small set of frames that recur in every report, contract, news story and academic paper. They often have a spoken equivalent that does the same job with more words or simpler verbs. Learning them as frames (with their slots) is far easier than learning them as isolated words.",
    ],
    sections: [
      {
        heading: "以…为…, 视为 and 由…组成",
        body: [
          "以 A 为 B (yǐ A wéi B) means 'take A as B': 以…为主 (mainly …), 以…为例 (take … as an example), 以…为中心 (centred on …). 为 here is wéi.",
          "视为 (shìwéi) means 'regard as': 被视为 (be regarded as). Spoken equivalents are 看作, 当作 and 当成.",
          "由 A 组成 / 构成 (yóu … zǔchéng / gòuchéng) means 'made up of A'. 分为 (fēnwéi) means 'divided into'.",
        ],
        examples: [
          { zh: "这家餐厅以川菜为主。", pinyin: "Zhè jiā cāntīng yǐ chuāncài wéi zhǔ.", en: "This restaurant mainly serves Sichuan food." },
          { zh: "委员会由七名专家组成。", pinyin: "Wěiyuánhuì yóu qī míng zhuānjiā zǔchéng.", en: "The committee is made up of seven experts." },
          { zh: "他被视为这个领域最重要的学者。", pinyin: "Tā bèi shìwéi zhège lǐngyù zuì zhòngyào de xuézhě.", en: "He is regarded as the most important scholar in the field." },
        ],
      },
      {
        heading: "于 and 将",
        body: [
          "于 (yú) is a written preposition with several meanings: 'at, in, on' (会议于明天举行, the meeting will be held tomorrow), 'from' (毕业于北京大学, graduated from Peking University), 'than' (大于, greater than), 'to' (有利于, beneficial to). For time and place it can come before the verb, as in 会议于明天举行; in the other meanings it follows the verb or adjective (毕业于, 大于, 有利于), where spoken Chinese would use a different word or order (在北京大学毕业, 比…大).",
          "将 (jiāng) has two written meanings: 'will, is going to' (会议将于下周召开) and the written 把 (将文件发送给我, send me the file).",
        ],
        examples: [
          { zh: "他1998年毕业于清华大学。", pinyin: "Tā yī jiǔ jiǔ bā nián bìyè yú Qīnghuá Dàxué.", en: "He graduated from Tsinghua University in 1998." },
          { zh: "请将表格填好后交给前台。", pinyin: "Qǐng jiāng biǎogé tiánhǎo hòu jiāo gěi qiántái.", en: "Please fill in the form and hand it to reception." },
        ],
      },
      {
        heading: "进行, 加以, 予以 and 给予",
        body: [
          "These formal verbs take another verb (two syllables) as their object: 进行调查 (carry out an investigation), 加以分析 (subject to analysis), 予以批准 (grant approval), 给予帮助 (give help). They make a sentence sound official. The verb that follows can't take an object of its own: 对问题进行讨论, not 进行讨论问题.",
        ],
        examples: [
          { zh: "警方正在对事故原因进行调查。", pinyin: "Jǐngfāng zhèngzài duì shìgù yuányīn jìnxíng diàochá.", en: "The police are investigating the cause of the accident." },
          { zh: "对于困难家庭，政府将给予一定的补助。", pinyin: "Duìyú kùnnan jiātíng, zhèngfǔ jiāng jǐyǔ yídìng de bǔzhù.", en: "The government will give some financial support to families in difficulty." },
        ],
      },
      {
        heading: "凭, 趁, 鉴于, 就…而言, 至于 and 使 / 令",
        body: [
          "凭 (píng) means 'by virtue of, on the strength of': 凭票入场 (admission by ticket). 趁 (chèn) means 'taking advantage of (while it lasts)': 趁热吃 (eat it while it's hot). 依照 and 依据 mean 'in accordance with'.",
          "鉴于 (jiànyú, in view of), 本着 (běnzhe, in the spirit of) and 基于 (jīyú, based on) open formal sentences. 就…而言 (jiù … ér yán) and 对…而言 mean 'as far as … is concerned'; 在…看来 means 'in the view of'. 至于 (zhìyú) means 'as for' and changes topic.",
          "使 (shǐ) and 令 (lìng) are the written versions of causative 让: 使人感到… (makes people feel…). The subject is usually a thing or event.",
        ],
        examples: [
          { zh: "趁年轻，多去看看世界。", pinyin: "Chèn niánqīng, duō qù kànkan shìjiè.", en: "See the world while you're young." },
          { zh: "鉴于目前的情况，会议推迟举行。", pinyin: "Jiànyú mùqián de qíngkuàng, huìyì tuīchí jǔxíng.", en: "In view of the current situation, the meeting has been postponed." },
          { zh: "就价格而言，这款手机很有优势。", pinyin: "Jiù jiàgé ér yán, zhè kuǎn shǒujī hěn yǒu yōushì.", en: "In terms of price, this phone has a clear advantage." },
          { zh: "这次失败使他认识到了自己的不足。", pinyin: "Zhè cì shībài shǐ tā rènshi dàole zìjǐ de bùzú.", en: "This failure made him realise his own shortcomings." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "我们进行讨论这个问题。",
        right: "我们对这个问题进行讨论。",
        rightPinyin: "Wǒmen duì zhège wèntí jìnxíng tǎolùn.",
        why: "After 进行 / 加以, the verb takes no object. Move the object forward with 对.",
      },
      {
        wrong: "我在北京大学毕业。",
        right: "我毕业于北京大学。",
        rightPinyin: "Wǒ bìyè yú Běijīng Dàxué.",
        why: "毕业 takes 于 after it (or speech says 我是北京大学毕业的). 在…毕业 is heard in casual speech, but in formal writing it reads as loose; 毕业于 is the standard written form.",
      },
      {
        wrong: "至于价格很便宜。",
        right: "至于价格，我们可以再商量。",
        rightPinyin: "Zhìyú jiàgé, wǒmen kěyǐ zài shāngliang.",
        why: "至于 introduces a new topic, followed by a comma and a comment about it.",
      },
    ],
    faqs: [
      {
        q: "Should I use these frames in conversation?",
        a: "Mostly no. 趁, 凭 and 至于 are fine in speech. 予以, 鉴于 and 于 belong in writing and formal speeches.",
      },
      {
        q: "Is 将 'will' the same as 会?",
        a: "Close. 将 is written and announces something planned; 会 is spoken and also expresses likelihood.",
      },
    ],
    related: ["zhi-qi-suo-c1", "written-rules-and-instructions-c1", "news-and-trends-c1"],
    lessons: ["zh-c1-yi-wei", "zh-c1-yu-prep", "zh-c1-jiang-ba", "zh-c1-jiayi-yuyi", "zh-c1-ping-chen", "zh-c1-shiwei", "zh-c1-jiu-eryan", "zh-c1-zhiyu", "zh-c1-jianyu", "zh-c1-mental-health", "zh-c1-youzucheng"],
  },
  // ------------------------------------------------------------------
  {
    slug: "written-rules-and-instructions-c1",
    title: "Rules, Warnings and Requests: 无, 未, 勿, 非…不可, 禁止, 务必, 免得 and 尽量",
    description:
      "The language of rules, notices, contracts and safety instructions: written negatives (无, 未, 勿, 非…不可), prohibitions (禁止, 严禁, 不得), strong advice (务必, 千万, 切记), 免得 / 省得 (so as not to) and the 尽 family (尽量, 尽快, 尽早).",
    level: "C1",
    hsk: "HSK 5–6",
    intro: [
      "Signs, rules and contracts compress a lot into very few characters. Their negatives and modal words are the written forms of everyday 没, 不, 别 and 一定要. Knowing them lets you read any notice and write a formal request.",
    ],
    sections: [
      {
        heading: "Written negatives",
        body: [
          "无 (wú) = 没有: 无人 (no one), 无关 (unrelated), 无法 (unable to). 未 (wèi) = 没 / 还没: 未成年人 (minors), 尚未 (not yet). 勿 (wù) = 别 / 不要, on signs and in polite requests: 请勿吸烟 (please do not smoke). 非 (fēi) = 不是: 非卖品 (not for sale).",
          "非…不可 (fēi … bùkě) means 'absolutely must': 这件事非你去不可 (you're the only one who can go). It's emphatic and used in speech too.",
        ],
        table: {
          headers: ["Written", "Spoken", "Example"],
          rows: [
            ["无", "没有", "无人值守 (unstaffed)"],
            ["未", "没 / 还没", "未经允许 (without permission)"],
            ["勿", "别 / 不要", "请勿触摸 (please do not touch)"],
            ["非", "不是", "非工作人员 (non-staff)"],
          ],
        },
        examples: [
          { zh: "未经允许，请勿拍照。", pinyin: "Wèi jīng yǔnxǔ, qǐng wù pāi zhào.", en: "Please do not take photographs without permission." },
          { zh: "这个手术非做不可。", pinyin: "Zhège shǒushù fēi zuò bùkě.", en: "This operation absolutely has to be done." },
        ],
      },
      {
        heading: "Prohibitions and strong advice",
        body: [
          "禁止 (jìnzhǐ, prohibited) and 严禁 (yánjìn, strictly prohibited) appear on signs and in rules. 不得 (bùdé) means 'must not' in regulations and contracts: 不得转让 (may not be transferred). 不准 (bùzhǔn) is the plainer, more everyday 'not allowed' (不准停车 on a hand-written sign, 妈妈不准我去 at home).",
          "务必 (wùbì) means 'must, be sure to' in formal requests: 请务必准时参加. 千万 (qiānwàn) is the spoken 'whatever you do', usually with 别 or 要. 切记 (qièjì) means 'be sure to remember'.",
          "Contracts also use 应 (yīng, shall), 须 (xū, must) and 有权 (yǒuquán, be entitled to).",
        ],
        examples: [
          { zh: "公共场所严禁吸烟。", pinyin: "Gōnggòng chǎngsuǒ yánjìn xī yān.", en: "Smoking is strictly prohibited in public places." },
          { zh: "请务必在周五前回复。", pinyin: "Qǐng wùbì zài zhōuwǔ qián huífù.", en: "Please be sure to reply by Friday." },
          { zh: "你千万别告诉别人。", pinyin: "Nǐ qiānwàn bié gàosu biéren.", en: "Whatever you do, don't tell anyone." },
        ],
      },
      {
        heading: "免得 / 省得, 一旦 / 万一 and the 尽 family",
        body: [
          "免得 (miǎnde) and 省得 (shěngde) mean 'so as not to, to avoid': they open the second clause. 多带件衣服，免得着凉 (take an extra layer so you don't catch cold). 省得 is more colloquial and often means saving trouble. 以防 (yǐfáng, in case) is the written equivalent.",
          "尽量 (jǐnliàng) means 'as far as possible'; 尽快 (jǐnkuài), 尽早 (jǐnzǎo) and 尽可能 (jǐn kěnéng) mean 'as soon / early / much as possible'. 尽力 (jìnlì, do one's best) is read with fourth tone.",
          "Safety instructions use 一旦 (once, in the event that) and 万一 (in case) with 应急 (emergency): 一旦发生火灾，请立即撤离.",
        ],
        examples: [
          { zh: "出门前看看天气预报，免得被雨淋。", pinyin: "Chū mén qián kànkan tiānqì yùbào, miǎnde bèi yǔ lín.", en: "Check the forecast before you go out so you don't get caught in the rain." },
          { zh: "请尽快把材料发给我。", pinyin: "Qǐng jǐnkuài bǎ cáiliào fā gěi wǒ.", en: "Please send me the materials as soon as possible." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "请勿不要吸烟。",
        right: "请勿吸烟。",
        rightPinyin: "Qǐng wù xī yān.",
        why: "勿 already means 'don't'. Doubling it with 不要 is a double negative.",
      },
      {
        wrong: "我非去。",
        right: "我非去不可。",
        rightPinyin: "Wǒ fēi qù bùkě.",
        why: "The standard pattern is 非…不可. (Colloquially 非 + verb alone can mean 'insist on', but it's best to use the full frame.)",
      },
      {
        wrong: "我们尽力完成任务尽快。",
        right: "我们会尽快完成任务。",
        rightPinyin: "Wǒmen huì jǐnkuài wánchéng rènwu.",
        why: "尽快 is an adverb before the verb, not after it like English 'as soon as possible'.",
      },
    ],
    faqs: [
      {
        q: "Is 尽 in 尽量 the same character as in 尽力?",
        a: "Yes, but read differently: jǐn in 尽量, 尽快, 尽早 and 尽管; jìn in 尽力, 尽头 and 尽心.",
      },
      {
        q: "Can I say 请勿 in an email?",
        a: "It sounds like a sign. In a polite email, write 请不要 or rephrase positively.",
      },
    ],
    related: ["formal-frames-c1", "news-and-trends-c1"],
    lessons: ["zh-c1-negatives", "zh-c1-jinzhi", "zh-c1-wubi", "zh-c1-mian-de", "zh-c1-yidan-wanyi", "zh-c1-contracts", "zh-c1-email", "zh-c1-politeness", "zh-c1-jinliang"],
  },
  // ------------------------------------------------------------------
  {
    slug: "news-and-trends-c1",
    title: "Reading the News: 据报道, 已 / 仍 / 尚未, 日益, 屡次 and Numbers at C1",
    description:
      "The grammar of the press: reporting verbs (表示, 称, 指出, 强调), written time words (已, 曾, 正, 将, 仍, 尚未), gradual and repeated change (日益, 逐步, 一再, 屡次), approximate numbers, 成 and 折, and measure words for abstract things.",
    level: "C1",
    hsk: "HSK 5–6",
    intro: [
      "News Chinese is compact and formulaic. Single-character time words replace spoken 已经 and 还, reporting verbs signal how a source spoke, and numbers come with their own vocabulary (成 for tenths, 折 for discounts, 翻一番 for doubling). Once you know the formulas, a news article becomes much easier to read than a novel.",
    ],
    sections: [
      {
        heading: "Reporting and written time words",
        body: [
          "据报道 (jù bàodào, according to reports) and 据悉 (jùxī, it is learned that) open news stories. Reporting verbs differ in force: 表示 (biǎoshì, said, stated), 称 (chēng, claimed, said), 指出 (zhǐchū, pointed out), 强调 (qiángdiào, stressed).",
          "Written time words are one syllable: 已 (yǐ, already), 曾 (céng, once), 正 (zhèng, currently), 将 (jiāng, will), 仍 (réng, still), 尚未 (shàngwèi, not yet). Compare spoken 已经, 曾经, 正在, 会 / 要, 还, 还没.",
        ],
        table: {
          headers: ["Written", "Spoken", "Meaning"],
          rows: [
            ["已", "已经", "already"],
            ["仍", "还 / 仍然", "still"],
            ["尚未", "还没", "not yet"],
            ["将", "会 / 要", "will"],
            ["正", "正在", "currently"],
          ],
        },
        examples: [
          { zh: "据报道，事故已造成三人受伤。", pinyin: "Jù bàodào, shìgù yǐ zàochéng sān rén shòu shāng.", en: "According to reports, the accident has left three people injured." },
          { zh: "发言人表示，具体原因尚未查明。", pinyin: "Fāyánrén biǎoshì, jùtǐ yuányīn shàngwèi chámíng.", en: "The spokesperson said the exact cause has not yet been established." },
        ],
      },
      {
        heading: "Gradual and repeated change",
        body: [
          "日益 (rìyì) means 'increasingly, day by day' and is written: 日益严重 (increasingly serious). 逐步 and 逐渐 (gradually), 陆续 and 纷纷 (one after another) return from B2 in more formal contexts.",
          "一再 (yízài) and 再三 (zàisān) mean 'again and again', usually for requests and warnings: 他一再强调…; 再三 can follow the verb (考虑再三). 屡次 (lǚcì) is written 'repeatedly'. 反复 (fǎnfù) means 'over and over', also of illnesses that keep returning.",
        ],
        examples: [
          { zh: "城市交通问题日益严重。", pinyin: "Chéngshì jiāotōng wèntí rìyì yánzhòng.", en: "Urban traffic problems are becoming increasingly serious." },
          { zh: "医生一再提醒他少喝酒。", pinyin: "Yīshēng yízài tíxǐng tā shǎo hē jiǔ.", en: "The doctor reminded him again and again to drink less." },
        ],
      },
      {
        heading: "Numbers: approximation, 成, 折 and abstract measure words",
        body: [
          "Approximate numbers: 左右 (zuǒyòu, about) and 上下 follow the number; 近 (jìn, nearly) and 约 (yuē, approximately) precede it; 多 (more than) follows a round number: 三十多人. Two adjacent numbers mean 'or so': 三四天.",
          "成 (chéng) is tenths: 八成 (80%). 折 (zhé) is a discount expressed as what you pay: 打八折 (pay 80%, i.e. 20% off). 百分点 (bǎifēndiǎn) is a percentage point. 翻一番 (fān yì fān) means 'double'.",
          "Abstract nouns have their own measure words: 一项研究 (a study), 一批产品 (a batch), 第十届 (the tenth session), 一番努力 (a lot of effort), 一系列措施 (a series of measures).",
        ],
        examples: [
          { zh: "全场商品一律打八折。", pinyin: "Quán chǎng shāngpǐn yílǜ dǎ bā zhé.", en: "Everything in the shop is 20% off." },
          { zh: "一项新的研究表明，近七成的年轻人睡眠不足。", pinyin: "Yí xiàng xīn de yánjiū biǎomíng, jìn qī chéng de niánqīngrén shuìmián bùzú.", en: "A new study shows that nearly 70% of young people don't get enough sleep." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "打两折 (meaning 20% off)",
        right: "打八折",
        rightPinyin: "dǎ bā zhé",
        why: "折 states the fraction you pay, not the discount: 八折 means you pay 80%.",
      },
      {
        wrong: "对方尚未回复了。",
        right: "对方尚未回复。",
        rightPinyin: "Duìfāng shàngwèi huífù.",
        why: "尚未, like 还没, negates completion, so the verb takes no 了.",
      },
      {
        wrong: "左右三十人",
        right: "三十人左右",
        rightPinyin: "sānshí rén zuǒyòu",
        why: "左右 follows the number (and its noun); 约 or 大约 would go before it.",
      },
    ],
    faqs: [
      {
        q: "Is 称 always neutral?",
        a: "Mostly, but in some contexts (especially with 声称) it hints that the claim is doubtful. 表示 is the neutral default.",
      },
      {
        q: "Does 增长了一倍 mean 'doubled'?",
        a: "Yes: 增长了一倍 = 翻了一番 = doubled. 增长到两倍 also means doubled.",
      },
    ],
    related: ["formal-frames-c1", "written-rules-and-instructions-c1", "narration-c1"],
    lessons: ["zh-c1-approx-numbers", "zh-c1-multiples", "zh-c1-news", "zh-c1-written-aspect", "zh-c1-headlines", "zh-c1-reported", "zh-c1-gradual", "zh-c1-yizai", "zh-c1-measure-abstract", "zh-c1-science-method"],
  },
  // ------------------------------------------------------------------
  {
    slug: "narration-c1",
    title: "Telling a Story: 着, 了, 过 in Narration, 顿时, 不由得 and 时而…时而",
    description:
      "The grammar of narrative: how 着, 了 and 过 work in a story, double 了 with durations, story timing words (顿时, 随即, 一下子), involuntary reactions (不由得, 不禁, 忍不住) and alternation (时而…时而, 要么…要么).",
    level: "C1",
    hsk: "HSK 5–6",
    intro: [
      "In a story, Chinese doesn't mark every past verb. It uses 了 for the events that move the plot forward, 着 for background states, and leaves the rest unmarked. Getting that balance right, plus a few timing words, is what makes narration sound native.",
    ],
    sections: [
      {
        heading: "着, 了 and 过 in narration",
        body: [
          "Background description takes 着 (zhe): 门开着，桌上放着一封信 (the door was open; a letter lay on the table). Plot events take 了 (le), but not every verb: a chain of quick actions usually only marks the last one, and habitual or ongoing actions in the past take no 了 at all. 过 (guo) refers to an experience before the story's time.",
          "With durations, the position of 了 matters: 我病了三天 (I was ill for three days, now over); 我病了三天了 (I've been ill for three days, still ill).",
        ],
        examples: [
          { zh: "他推开门，走进房间，在窗边坐了下来。", pinyin: "Tā tuīkāi mén, zǒujìn fángjiān, zài chuāng biān zuòle xialai.", en: "He pushed the door open, walked into the room and sat down by the window." },
          { zh: "我已经发烧三天了，还没好。", pinyin: "Wǒ yǐjīng fā shāo sān tiān le, hái méi hǎo.", en: "I've had a fever for three days now and I'm still not better." },
        ],
      },
      {
        heading: "Timing: 顿时, 随即 and 一下子",
        body: [
          "顿时 (dùnshí) means 'immediately, all at once' for a sudden change of state, in writing: 大家顿时安静下来 (everyone fell silent at once). 随即 (suíjí) means 'immediately afterwards' for the next action. 一下子 (yíxiàzi) is the spoken 'all of a sudden, in one go'.",
        ],
        examples: [
          { zh: "听到这个消息，教室里顿时热闹起来。", pinyin: "Tīngdào zhège xiāoxi, jiàoshì li dùnshí rènao qilai.", en: "When they heard the news, the classroom instantly came alive." },
          { zh: "他看了一眼手表，随即离开了会场。", pinyin: "Tā kànle yì yǎn shǒubiǎo, suíjí líkāile huìchǎng.", en: "He glanced at his watch and left the hall straight away." },
        ],
      },
      {
        heading: "Involuntary reactions and alternation",
        body: [
          "不由得 (bùyóude), 不禁 (bùjīn) and 忍不住 (rěn bu zhù) all mean 'couldn't help (doing)'. 不禁 is literary; 忍不住 is everyday speech and can take a 了 at the end.",
          "时而 A 时而 B (shí'ér … shí'ér) means 'sometimes A, sometimes B' in quick alternation, in writing. 要么 A 要么 B (yàome … yàome) means 'either A or B' (choose one).",
        ],
        examples: [
          { zh: "看到这张老照片，她不禁流下了眼泪。", pinyin: "Kàndào zhè zhāng lǎo zhàopiàn, tā bùjīn liúxiàle yǎnlèi.", en: "Seeing the old photo, she couldn't hold back her tears." },
          { zh: "音乐时而轻快，时而低沉。", pinyin: "Yīnyuè shí'ér qīngkuài, shí'ér dīchén.", en: "The music was light one moment and sombre the next." },
          { zh: "要么现在走，要么就别去了。", pinyin: "Yàome xiànzài zǒu, yàome jiù bié qù le.", en: "Either we leave now or we don't go at all." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "小时候我每天了走路去学校。",
        right: "小时候我每天走路去学校。",
        rightPinyin: "Xiǎo shíhou wǒ měi tiān zǒu lù qù xuéxiào.",
        why: "了 marks completed events, not past habits. A habit in the past takes no aspect marker.",
      },
      {
        wrong: "他忍不住笑。",
        right: "他忍不住笑了。",
        rightPinyin: "Tā rěn bu zhù xiào le.",
        why: "In a narrative about one moment, the reaction is an event, so it needs 了 (or 起来).",
      },
      {
        wrong: "我们顿时去吃饭吧。",
        right: "我们马上去吃饭吧。",
        rightPinyin: "Wǒmen mǎshàng qù chī fàn ba.",
        why: "顿时 describes a sudden change in a narrative, not a plan or suggestion. For 'right away', use 马上 or 立刻.",
      },
    ],
    faqs: [
      {
        q: "Do I need 了 on every verb in a past story?",
        a: "No. Marking every verb sounds mechanical. Mark the key events and let time words and context do the rest.",
      },
      {
        q: "Is 一下子 the same as 一下?",
        a: "No. 一下 softens a verb (看一下, have a look); 一下子 means 'all at once, suddenly'.",
      },
    ],
    related: ["spoken-structures-c1", "against-expectation-c1"],
    lessons: ["zh-c1-le-duration", "zh-c1-narrative-aspect", "zh-c1-buyoude", "zh-c1-sudden", "zh-c1-shier", "zh-c1-review-writing"],
  },
];
