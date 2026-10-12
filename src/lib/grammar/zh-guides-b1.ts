// Synced from cheneygross-afk/lengo:src/lib/grammar/zh-guides-b1.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ZhGrammarGuide } from "./zh-types";

// B1 (HSK 3) guides. Conventions: ./zh-types.ts and
// src/lib/lessons/zh/README.md (pinyin shows dictionary tones, except 不
// and 一, which are written as spoken; neutral tones unmarked).

export const ZH_GUIDES_B1: ZhGrammarGuide[] = [
  {
    slug: "opinions-and-comparisons",
    title: "Opinions and Comparisons: 认为, 比较, 更加, 跟…相比 and 多 + Adjective",
    description:
      "觉得 vs 认为 for opinions, 比较 (fairly) vs 最 (most), 更加 and 相当, comparing with 跟…相比 and 区别, and measuring questions like 多高 and 多远.",
    level: "B1",
    hsk: "HSK 3",
    intro: [
      "At A2 you compared things with 比. B1 adds the language of discussion: giving a considered view, saying something is \"fairly\" or \"quite\" so, and setting two things side by side in a more formal way.",
    ],
    sections: [
      {
        heading: "觉得 vs 认为",
        body: [
          "觉得 (juéde) is personal and casual: what you feel or think. It's also the only choice for physical sensations. 认为 (rènwéi) is a considered judgement, common in discussion and writing, and sounds more formal.",
        ],
        examples: [
          { zh: "我觉得有点儿冷。", pinyin: "Wǒ juéde yǒudiǎnr lěng.", en: "I feel a bit cold." },
          { zh: "你觉得这部电影怎么样？", pinyin: "Nǐ juéde zhè bù diànyǐng zěnmeyàng?", en: "What did you think of the film?" },
          { zh: "我认为这个办法不太好。", pinyin: "Wǒ rènwéi zhège bànfǎ bú tài hǎo.", en: "In my view, this approach isn't very good." },
        ],
      },
      {
        heading: "Degree words: 比较, 更加, 相当, 较",
        body: [
          "比较 (bǐjiào) before an adjective means \"fairly, relatively\", with no explicit comparison. 更加 (gèngjiā) is a fuller form of 更, usually with two-syllable words. 相当 (xiāngdāng) is \"quite, considerably\". 较 is the written short form of 比较: 较大, 较多.",
        ],
        examples: [
          { zh: "这家饭馆比较便宜。", pinyin: "Zhè jiā fànguǎn bǐjiào piányi.", en: "This restaurant is fairly cheap." },
          { zh: "他现在更加努力了。", pinyin: "Tā xiànzài gèngjiā nǔlì le.", en: "He works even harder now." },
          { zh: "他的中文相当不错。", pinyin: "Tā de Zhōngwén xiāngdāng búcuò.", en: "His Chinese is pretty good." },
        ],
      },
      {
        heading: "跟…相比, 相似 and 区别",
        body: [
          "跟 (or 和) A 相比，B 更… sets up a comparison more formally than 比. A 跟 B 很相似 means they're similar; A 跟 B 的区别 is the difference between them.",
        ],
        examples: [
          { zh: "跟北京相比，上海更热。", pinyin: "Gēn Běijīng xiāngbǐ, Shànghǎi gèng rè.", en: "Compared with Beijing, Shanghai is hotter." },
          { zh: "这两个词的区别是什么？", pinyin: "Zhè liǎng ge cí de qūbié shì shénme?", en: "What's the difference between these two words?" },
        ],
      },
      {
        heading: "多 + adjective: how tall, how far",
        body: [
          "多 (duō) + a \"positive\" adjective asks about size or amount: 多高 (how tall), 多远 (how far), 多重 (how heavy), 多长 (how long), 多大 (how old, how big). 有 can come before it: 有多远？",
        ],
        examples: [
          { zh: "你多高？——一米七五。", pinyin: "Nǐ duō gāo? — Yì mǐ qī wǔ.", en: "How tall are you? — One metre seventy-five." },
          { zh: "从这儿到车站有多远？", pinyin: "Cóng zhèr dào chēzhàn yǒu duō yuǎn?", en: "How far is it from here to the station?" },
          { zh: "你今年多大？", pinyin: "Nǐ jīnnián duō dà?", en: "How old are you?" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "我认为有点儿冷。",
        right: "我觉得有点儿冷。",
        rightPinyin: "Wǒ juéde yǒudiǎnr lěng.",
        why: "Physical sensations take 觉得. 认为 is for reasoned opinions.",
      },
      {
        wrong: "他比较我高。",
        right: "他比我高。",
        rightPinyin: "Tā bǐ wǒ gāo.",
        why: "比较 before an adjective means \"fairly\". To compare two things directly, use 比.",
      },
      {
        wrong: "你多老？",
        right: "你多大？",
        rightPinyin: "Nǐ duō dà?",
        why: "Age is asked with 多大. 老 means old in the sense of elderly; to an older person say 您多大年纪？",
      },
    ],
    faqs: [
      {
        q: "Is 比较 also a verb?",
        a: "Yes, \"to compare\": 比较一下这两个 (compare these two). Before an adjective, it's the adverb \"fairly\".",
      },
      {
        q: "Why 多高 and not 多矮?",
        a: "Like English \"how tall\" (not \"how short\"), the question uses the neutral, \"large\" end of the scale. 多矮 sounds like you already think they're short.",
      },
    ],
    related: ["comparisons-bi", "certainty-and-necessity", "vivid-descriptions"],
    lessons: ["zh-b1-duo-adj", "zh-b1-juede-renwei", "zh-b1-zui-bijiao", "zh-b1-gen-xiangbi", "zh-b1-degree-adverbs"],
  },
  {
    slug: "shi-de",
    title: "是…的: Stressing When, Where and How",
    description:
      "Use 是…的 to talk about the details of something that already happened: when, where, how, with whom or who did it. How it differs from 了, and where the object goes.",
    level: "B1",
    hsk: "HSK 3",
    intro: [
      "Once both speakers know something happened, the conversation moves to the details. \"You're here! When did you arrive? How did you come?\" For those questions Chinese uses 是…的 (shì…de) around the detail, not 了.",
      "了 announces an event. 是…的 takes the event for granted and focuses on one circumstance of it.",
    ],
    sections: [
      {
        heading: "是 + detail + verb + 的",
        body: [
          "是 goes right before the detail you're stressing (time, place, manner, companion, person); 的 goes at the end. In positive sentences 是 can be dropped, 的 can't. The negative is 不是…的.",
        ],
        examples: [
          { zh: "你是什么时候来的？——我是去年来的。", pinyin: "Nǐ shì shénme shíhou lái de? — Wǒ shì qùnián lái de.", en: "When did you come? — Last year." },
          { zh: "你是怎么来的？——坐飞机来的。", pinyin: "Nǐ shì zěnme lái de? — Zuò fēijī lái de.", en: "How did you get here? — By plane." },
          { zh: "他是跟朋友一起去的。", pinyin: "Tā shì gēn péngyou yìqǐ qù de.", en: "He went with friends." },
          { zh: "我不是在北京出生的。", pinyin: "Wǒ bú shì zài Běijīng chūshēng de.", en: "I wasn't born in Beijing." },
          { zh: "这是谁做的？", pinyin: "Zhè shì shéi zuò de?", en: "Who made this?" },
        ],
      },
      {
        heading: "了 or 是…的?",
        body: [
          "The question is whether the event itself is the news. If it is, use 了. If it's known and you're asking or telling about a detail, use 是…的.",
        ],
        table: {
          headers: ["", "Focus", "Example"],
          rows: [
            ["了", "the event is news", "他来了。 He's arrived."],
            ["是…的", "a detail of a known event", "他是昨天来的。 He arrived yesterday (it was yesterday that he came)."],
          ],
        },
      },
      {
        heading: "Where the object goes",
        body: [
          "With an object, 的 can come at the end or right before the object. Before the object is very common in speech.",
        ],
        examples: [
          { zh: "你是在哪儿学的中文？", pinyin: "Nǐ shì zài nǎr xué de Zhōngwén?", en: "Where did you learn Chinese?" },
          { zh: "我是在大学学中文的。", pinyin: "Wǒ shì zài dàxué xué Zhōngwén de.", en: "I learned Chinese at university." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "我是去年来了。",
        right: "我是去年来的。",
        rightPinyin: "Wǒ shì qùnián lái de.",
        why: "是 pairs with 的, not 了.",
      },
      {
        wrong: "你什么时候来了中国？",
        right: "你是什么时候来中国的？",
        rightPinyin: "Nǐ shì shénme shíhou lái Zhōngguó de?",
        why: "The arrival is known; you're asking about a detail of it, so use 是…的.",
      },
      {
        wrong: "我没是坐飞机来的。",
        right: "我不是坐飞机来的。",
        rightPinyin: "Wǒ bú shì zuò fēijī lái de.",
        why: "The negative of 是 is always 不是.",
      },
    ],
    faqs: [
      {
        q: "Can 是…的 talk about the future?",
        a: "Not in this pattern: it's for past events. A different 的 at the end of a sentence adds certainty (他会来的, he will come), but that's not stressing a detail.",
      },
      {
        q: "Can I leave out 是?",
        a: "Yes, in positive statements and questions: 你什么时候来的？ is very common. In the negative 是 must stay: 不是…的.",
      },
    ],
    related: ["le-and-mei", "guo-and-zai-aspect", "describing-scenes"],
    lessons: ["zh-b1-shi-de"],
  },
  {
    slug: "potential-complements",
    title: "Potential Complements: 看得懂, 听不懂, 买不到, 来不及",
    description:
      "Verb + 得 / 不 + result says whether something can or can't be achieved: 听不懂, 吃不完, 回不来. How it differs from 能 and 不能, and the fixed ones like 来不及, 受不了 and 买不起.",
    level: "B1",
    hsk: "HSK 3",
    intro: [
      "English \"can't\" covers several situations: not allowed, not able, not managing. When the problem is the outcome (you listen but can't understand, you look but can't find), Chinese uses a potential complement: 听不懂, 找不到.",
      "It's built from the result and direction complements you know from A2. Put 得 (can) or 不 (can't) between the verb and its result.",
    ],
    sections: [
      {
        heading: "Verb + 得 / 不 + result",
        body: [
          "看懂 (read and understand) becomes 看得懂 (can understand) or 看不懂 (can't). The negative is far more common: you usually mention ability when something goes wrong. Questions: 看得懂吗？ or 看得懂看不懂？",
        ],
        examples: [
          { zh: "他说得太快，我听不懂。", pinyin: "Tā shuō de tài kuài, wǒ tīng bu dǒng.", en: "He talks too fast; I can't understand him." },
          { zh: "这本书我看得懂。", pinyin: "Zhè běn shū wǒ kàn de dǒng.", en: "I can understand this book." },
          { zh: "菜太多了，我们吃不完。", pinyin: "Cài tài duō le, wǒmen chī bu wán.", en: "There's too much food; we can't finish it." },
          { zh: "太晚了，他今天回不来了。", pinyin: "Tài wǎn le, tā jīntiān huí bu lái le.", en: "It's too late; he can't get back today." },
        ],
      },
      {
        heading: "不能 or Verb + 不 + result?",
        body: [
          "不能 is about permission or general ability: 我不能去 (I'm not allowed to go / I can't make it). The potential complement is about whether the action can reach its result: 我去不了 (it's impossible for me to get there).",
        ],
        table: {
          headers: ["", "Meaning"],
          rows: [
            ["我不能看。", "I'm not allowed to look."],
            ["我看不见。", "I can't see it (it's too dark, too far)."],
            ["我看不懂。", "I can't understand it (reading)."],
          ],
        },
      },
      {
        heading: "Fixed potential forms",
        body: [
          "Some potential forms are words in their own right: 来不及 (not enough time) and 来得及, 受不了 (can't stand it), 买不起 (can't afford), 了 read liǎo in 去不了 and 来不了 (can't make it).",
        ],
        examples: [
          { zh: "快点儿，要来不及了！", pinyin: "Kuài diǎnr, yào lái bu jí le!", en: "Hurry up, we're going to be late!" },
          { zh: "我受不了这么热的天气。", pinyin: "Wǒ shòu bu liǎo zhème rè de tiānqì.", en: "I can't stand weather this hot." },
          { zh: "太贵了，我买不起。", pinyin: "Tài guì le, wǒ mǎi bu qǐ.", en: "It's too expensive; I can't afford it." },
          { zh: "明天我去不了。", pinyin: "Míngtiān wǒ qù bu liǎo.", en: "I can't make it tomorrow." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "我不能听懂。",
        right: "我听不懂。",
        rightPinyin: "Wǒ tīng bu dǒng.",
        why: "Failing to understand is about the outcome, so use the potential complement, not 不能.",
      },
      {
        wrong: "我看得不懂。",
        right: "我看不懂。",
        rightPinyin: "Wǒ kàn bu dǒng.",
        why: "In the negative, 不 replaces 得. 看得不… is the degree pattern (\"looks in a way that isn't ...\").",
      },
      {
        wrong: "我看不懂了这本书。",
        right: "这本书我看不懂。",
        rightPinyin: "Zhè běn shū wǒ kàn bu dǒng.",
        why: "Potential complements describe ability, not a completed action, so no 了 after them. The object often moves to the front.",
      },
    ],
    faqs: [
      {
        q: "说不好 and 说得不好: what's the difference?",
        a: "说得不好 is degree: \"speaks badly\". 说不好 is potential: \"can't say for sure\". 我说不好他会不会来 means \"I can't say whether he'll come\".",
      },
      {
        q: "Why is 不 written without a tone mark here?",
        a: "In potential complements 不 is said lightly, with a neutral tone, like in A-not-A questions: kàn bu dǒng.",
      },
    ],
    related: ["result-complements", "figurative-complements", "direction-complements"],
    lessons: ["zh-b1-potential-complements"],
  },
  {
    slug: "figurative-complements",
    title: "起来, 出来, 下去 and 下来: Figurative Direction Complements",
    description:
      "Direction complements beyond movement: 起来 (start, seem, recall), 出来 (make out, come up with), 下去 (keep going), 下来 (come to a stop, write down), plus 看上去 and 显得.",
    level: "B1",
    hsk: "HSK 3",
    intro: [
      "Up, out, down and on have figurative meanings in English: \"cheer up\", \"figure out\", \"carry on\", \"write down\". Chinese direction complements do the same, and many of the figurative ones are so common that they're the first meaning people think of.",
    ],
    sections: [
      {
        heading: "起来: start, seem, recall",
        body: [
          "起来 (qǐlai) after a verb can mean \"start to\" (笑起来, burst out laughing), \"when you try it, it seems\" (看起来, 听起来, 吃起来), or \"recall\" (想起来). An object goes between 起 and 来: 下起雨来.",
        ],
        examples: [
          { zh: "他突然笑了起来。", pinyin: "Tā tūrán xiào le qǐlai.", en: "He suddenly burst out laughing." },
          { zh: "外面下起雨来了。", pinyin: "Wàimiàn xià qǐ yǔ lai le.", en: "It's started raining outside." },
          { zh: "这个菜看起来很好吃。", pinyin: "Zhège cài kàn qǐlai hěn hǎochī.", en: "This dish looks delicious." },
          { zh: "我想起来了！", pinyin: "Wǒ xiǎng qǐlai le!", en: "Now I remember!" },
        ],
      },
      {
        heading: "出来: make out, come up with",
        body: [
          "出来 (chūlai) after a verb of perception means you could tell or identify something: 看出来, 听出来, 认出来. 想出来 is to come up with something new (想起来 is to recall something you knew).",
        ],
        examples: [
          { zh: "我听出来了，是你！", pinyin: "Wǒ tīng chūlai le, shì nǐ!", en: "I recognised your voice. It's you!" },
          { zh: "你认不出来我了吗？", pinyin: "Nǐ rèn bu chūlai wǒ le ma?", en: "Don't you recognise me?" },
          { zh: "我想出来一个好办法。", pinyin: "Wǒ xiǎng chūlai yí ge hǎo bànfǎ.", en: "I've come up with a good idea." },
        ],
      },
      {
        heading: "下去 and 下来: keep going, come to rest",
        body: [
          "下去 (xiàqu) means carrying on from now into the future: 说下去 (go on talking), 坚持下去 (keep at it). 下来 (xiàlai) means coming to a stop, being recorded, or lasting up to now: 停下来 (stop), 记下来 (write down), 传下来 (be handed down).",
        ],
        examples: [
          { zh: "请说下去。", pinyin: "Qǐng shuō xiàqu.", en: "Please go on." },
          { zh: "你要坚持下去。", pinyin: "Nǐ yào jiānchí xiàqu.", en: "You have to keep going." },
          { zh: "车停下来了。", pinyin: "Chē tíng xiàlai le.", en: "The car came to a stop." },
          { zh: "请把电话号码记下来。", pinyin: "Qǐng bǎ diànhuà hàomǎ jì xiàlai.", en: "Please write down the phone number." },
        ],
      },
      {
        heading: "Looks and comes across: 看上去, 显得, 上来",
        body: [
          "看上去 (kàn shàngqu) is \"looks\" to the eye; 看起来 also covers \"seems\" more broadly. 显得 + adjective is \"comes across as\". 上来 in 说不上来 and 答不上来 means you can't quite produce an answer.",
        ],
        examples: [
          { zh: "她今天显得很累。", pinyin: "Tā jīntiān xiǎnde hěn lèi.", en: "She seems very tired today." },
          { zh: "这个问题我答不上来。", pinyin: "Zhège wèntí wǒ dá bu shànglai.", en: "I can't answer this question." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "我想出来他的名字了。 (meaning you remembered it)",
        right: "我想起来他的名字了。",
        rightPinyin: "Wǒ xiǎng qǐlai tā de míngzi le.",
        why: "Recalling something you already knew is 想起来. 想出来 is inventing something new.",
      },
      {
        wrong: "下雨起来了。",
        right: "下起雨来了。",
        rightPinyin: "Xià qǐ yǔ lai le.",
        why: "With 起来, the object goes between 起 and 来.",
      },
      {
        wrong: "请说下来。 (meaning \"please continue\")",
        right: "请说下去。",
        rightPinyin: "Qǐng shuō xiàqu.",
        why: "Continuing into the future is 下去. 下来 points to stopping or recording.",
      },
    ],
    faqs: [
      {
        q: "Are 来 and 去 stressed in these?",
        a: "No, they're usually said lightly. In 想起来 and 看出来 the whole complement is often unstressed.",
      },
      {
        q: "How do I learn all the meanings?",
        a: "Learn them as whole words with an example: 想起来 (recall), 看出来 (tell), 坚持下去 (keep going). The meanings are less logical than they look, just like English phrasal verbs.",
      },
    ],
    related: ["direction-complements", "potential-complements", "result-complements"],
    lessons: ["zh-b1-qilai", "zh-b1-looks-like", "zh-b1-chulai-figurative", "zh-b1-shanglai-shangqu", "zh-b1-xiaqu-xialai"],
  },
  {
    slug: "bei-passive",
    title: "被, 受, 由 and 使: Passives and Making Someone Feel",
    description:
      "The 被 passive (我的钱包被偷了), when Chinese doesn't need a passive at all, 受 for what you undergo (受欢迎, 受伤), 由 for who's responsible, and 使 for causing a feeling.",
    level: "B1",
    hsk: "HSK 3",
    intro: [
      "English uses the passive constantly: \"the letter was sent\", \"the house was built in 1900\". Chinese uses its passive marker 被 (bèi) much less, mainly for things that happen to someone, often unpleasant ones. Most English passives come out as ordinary active sentences in Chinese.",
    ],
    sections: [
      {
        heading: "Object + 被 + (doer) + verb + result",
        body: [
          "The thing affected comes first, then 被 and the doer (which can be left out), then the verb. Like 把, the verb needs something after it: a result, a direction, or at least 了. In speech, 叫 and 让 can replace 被 when a doer is named.",
        ],
        examples: [
          { zh: "我的钱包被偷了。", pinyin: "Wǒ de qiánbāo bèi tōu le.", en: "My wallet was stolen." },
          { zh: "他被老师批评了。", pinyin: "Tā bèi lǎoshī pīpíng le.", en: "He was told off by the teacher." },
          { zh: "蛋糕被弟弟吃完了。", pinyin: "Dàngāo bèi dìdi chīwán le.", en: "My little brother ate all the cake." },
          { zh: "我的自行车让人骑走了。", pinyin: "Wǒ de zìxíngchē ràng rén qízǒu le.", en: "Someone rode off on my bike." },
        ],
      },
      {
        heading: "Passives without 被",
        body: [
          "When there's no one to blame and nothing unpleasant, Chinese just puts the object first with no marker: 饭做好了 (dinner is ready), 信寄出去了 (the letter has been sent). Adding 被 here sounds like a translation.",
        ],
        examples: [
          { zh: "饭做好了。", pinyin: "Fàn zuòhǎo le.", en: "Dinner's ready." },
          { zh: "信已经寄出去了。", pinyin: "Xìn yǐjīng jì chūqu le.", en: "The letter has been sent." },
        ],
      },
      {
        heading: "受, 由 and 使",
        body: [
          "受 (shòu) is \"undergo, receive\": 受伤 (get hurt), 受到 + noun (影响, 欢迎, 批评), 受欢迎 (popular). 由 (yóu) + person + verb says who is responsible: 这件事由我负责. 使 (shǐ) + person + feeling is the written version of 让: \"make someone feel\".",
        ],
        examples: [
          { zh: "他在比赛中受伤了。", pinyin: "Tā zài bǐsài zhōng shòushāng le.", en: "He got hurt during the match." },
          { zh: "这首歌很受欢迎。", pinyin: "Zhè shǒu gē hěn shòu huānyíng.", en: "This song is very popular." },
          { zh: "这件事由我负责。", pinyin: "Zhè jiàn shì yóu wǒ fùzé.", en: "I'm in charge of this." },
          { zh: "这个消息使我很难过。", pinyin: "Zhège xiāoxi shǐ wǒ hěn nánguò.", en: "The news made me very sad." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "我被他看。",
        right: "我被他看见了。",
        rightPinyin: "Wǒ bèi tā kànjiàn le.",
        why: "A 被 sentence needs more than a bare verb: add a result, a direction or 了.",
      },
      {
        wrong: "这本书被写得很好。",
        right: "这本书写得很好。",
        rightPinyin: "Zhè běn shū xiě de hěn hǎo.",
        why: "Neutral descriptions don't use 被. Just put the topic first.",
      },
      {
        wrong: "他被欢迎。",
        right: "他很受欢迎。",
        rightPinyin: "Tā hěn shòu huānyíng.",
        why: "\"Popular, well received\" is the set phrase 受欢迎.",
      },
    ],
    faqs: [
      {
        q: "Is 被 always negative?",
        a: "Traditionally it was mostly for unwelcome events, and that's still the safest way to use it. Modern Chinese also uses it neutrally, especially in news and formal writing: 他被选为班长 (he was elected class monitor).",
      },
      {
        q: "Where do 没 and 不 go?",
        a: "Before 被: 他没被批评 (he wasn't criticised).",
      },
    ],
    related: ["ba-in-depth", "ba-sentences", "gei-rang-and-toward"],
    lessons: ["zh-b1-shi-causative", "zh-b1-bei-passive", "zh-b1-shou", "zh-b1-you-in-charge"],
  },
  {
    slug: "ba-in-depth",
    title: "把 in Depth: 把…成, 把…到, Negatives, Breaking Things and 买大了",
    description:
      "Beyond basic 把: turning one thing into another (把…翻译成), moving it (把…送到), where 没 and 别 go, the break verbs 破, 断 and 坏, and verb + adjective + 了 for results that missed.",
    level: "B1",
    hsk: "HSK 3",
    intro: [
      "At A2, 把 moved an object before the verb to show what happened to it. At B1 you use it for transforming and relocating things, combine it with negatives and modals, and describe accidents: what broke, and how.",
    ],
    sections: [
      {
        heading: "把 + object + verb + 成 / 到 / 给 / 在",
        body: [
          "成 (into), 到 (to), 给 (to someone) and 在 (at) after the verb say where the object ends up. With these endings, 把 is usually the only natural word order.",
        ],
        examples: [
          { zh: "请把这句话翻译成中文。", pinyin: "Qǐng bǎ zhè jù huà fānyì chéng Zhōngwén.", en: "Please translate this sentence into Chinese." },
          { zh: "他把“大”写成了“太”。", pinyin: "Tā bǎ “dà” xiěchéng le “tài”.", en: "He wrote 大 as 太 by mistake." },
          { zh: "我把这些书送到图书馆去。", pinyin: "Wǒ bǎ zhèxiē shū sòngdào túshūguǎn qu.", en: "I'll take these books to the library." },
          { zh: "请把盐递给我。", pinyin: "Qǐng bǎ yán dì gěi wǒ.", en: "Please pass me the salt." },
        ],
      },
      {
        heading: "Negatives and modals go before 把",
        body: [
          "没, 别, 不, 能, 要, 应该 and other adverbs and modals all go before 把, never before the verb.",
        ],
        examples: [
          { zh: "我没把门关上。", pinyin: "Wǒ méi bǎ mén guānshang.", en: "I didn't shut the door." },
          { zh: "别把东西放在这儿。", pinyin: "Bié bǎ dōngxi fàng zài zhèr.", en: "Don't put things here." },
          { zh: "你应该把作业做完。", pinyin: "Nǐ yīnggāi bǎ zuòyè zuòwán.", en: "You should finish your homework." },
        ],
      },
      {
        heading: "Breaking things: 破, 断, 坏",
        body: [
          "Each describes a different kind of damage and attaches to the verb that caused it. 破 (pò): cracked, torn, smashed (glass, paper, clothes). 断 (duàn): snapped in two (a bone, a stick, a cable). 坏 (huài): broken and not working (machines), or gone off (food). 弄坏 is the all-purpose \"break, damage\".",
        ],
        examples: [
          { zh: "他把杯子打破了。", pinyin: "Tā bǎ bēizi dǎpò le.", en: "He broke the glass." },
          { zh: "我的腿摔断了。", pinyin: "Wǒ de tuǐ shuāiduàn le.", en: "I fell and broke my leg." },
          { zh: "手机被我弄坏了。", pinyin: "Shǒujī bèi wǒ nònghuài le.", en: "I broke the phone." },
        ],
      },
      {
        heading: "Verb + adjective + 了: missed the target",
        body: [
          "买大了 is \"bought it too big\", 来早了 \"came too early\". The adjective names the way the result missed. With clothes, adjective + 了 alone means it doesn't fit: 这条裤子长了 (these trousers are too long).",
        ],
        examples: [
          { zh: "鞋买小了。", pinyin: "Xié mǎi xiǎo le.", en: "I bought the shoes too small." },
          { zh: "我们来早了。", pinyin: "Wǒmen lái zǎo le.", en: "We've come too early." },
          { zh: "这条裤子长了。", pinyin: "Zhè tiáo kùzi cháng le.", en: "These trousers are too long." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "我把门没关上。",
        right: "我没把门关上。",
        rightPinyin: "Wǒ méi bǎ mén guānshang.",
        why: "Negatives go before 把, not before the verb.",
      },
      {
        wrong: "他把这个句子翻译中文。",
        right: "他把这个句子翻译成中文。",
        rightPinyin: "Tā bǎ zhège jùzi fānyì chéng Zhōngwén.",
        why: "\"Into\" needs 成 after the verb.",
      },
      {
        wrong: "我把手机坏了。",
        right: "我把手机弄坏了。",
        rightPinyin: "Wǒ bǎ shǒujī nònghuài le.",
        why: "坏 is the result; it needs an action verb in front of it (弄, 摔, 用).",
      },
    ],
    faqs: [
      {
        q: "Is 买大了 the same as 买得太大了?",
        a: "Yes in meaning. Verb + adjective + 了 is shorter and very common in speech.",
      },
      {
        q: "Can I use both 把 and 被 in one sentence?",
        a: "Occasionally, but it's heavy. Choose one: 我把杯子打破了 (I broke it) or 杯子被我打破了 (it got broken by me).",
      },
    ],
    related: ["ba-sentences", "bei-passive", "result-complements"],
    lessons: ["zh-b1-breaking-things", "zh-b1-ba-cheng", "zh-b1-ba-negation", "zh-b1-too-big"],
  },
  {
    slug: "again-never-again-keep-on",
    title: "又, 再, 再也不 and 继续: Again, Never Again and Keep On",
    description:
      "又 for \"again\" about the past, 再 about the future, 再也不 / 再也没 for never again, 重新 and 反复, and 继续, 不断, 持续 and 连续 for keeping on.",
    level: "B1",
    hsk: "HSK 3",
    intro: [
      "English has one \"again\"; Chinese has two, split by time. 又 (yòu) looks back at a repetition that has happened. 再 (zài) looks forward to one that hasn't. Getting this right is a big step toward natural Chinese.",
    ],
    sections: [
      {
        heading: "又 vs 再",
        body: [
          "又 + verb + 了 is a repetition that has happened, often with a sigh. 再 + verb is a repetition still to come, in plans, requests and suggestions. 又 is also used for predictable future repeats on the calendar: 明天又是星期一了.",
        ],
        table: {
          headers: ["", "Time", "Example"],
          rows: [
            ["又", "already happened", "他又迟到了。 He's late again."],
            ["再", "still to come", "明天再来吧。 Come again tomorrow."],
          ],
        },
        examples: [
          { zh: "他昨天来了，今天又来了。", pinyin: "Tā zuótiān lái le, jīntiān yòu lái le.", en: "He came yesterday, and he came again today." },
          { zh: "请你明天再来一次。", pinyin: "Qǐng nǐ míngtiān zài lái yí cì.", en: "Please come again tomorrow." },
          { zh: "明天又是星期一了。", pinyin: "Míngtiān yòu shì xīngqīyī le.", en: "It's Monday again tomorrow." },
        ],
      },
      {
        heading: "Never again: 再也不 / 再也没",
        body: [
          "再也不 + verb + 了 is a resolution about the future: \"I'll never ... again\". 再也没 + verb (+ 过) is a fact about the past: \"never ... again after that\". 重新 (chóngxīn) is \"start over, anew\"; 反复 (fǎnfù) is \"over and over\".",
        ],
        examples: [
          { zh: "我再也不喝酒了。", pinyin: "Wǒ zài yě bù hē jiǔ le.", en: "I'll never drink again." },
          { zh: "他走了以后，再也没回来过。", pinyin: "Tā zǒu le yǐhòu, zài yě méi huílai guo.", en: "After he left, he never came back." },
          { zh: "我们重新开始吧。", pinyin: "Wǒmen chóngxīn kāishǐ ba.", en: "Let's start over." },
        ],
      },
      {
        heading: "Keep on: 继续, 不断, 持续, 连续",
        body: [
          "继续 (jìxù) + verb: carry on doing. 不断 (búduàn) + verb: constantly, with a process that keeps developing. 持续 (chíxù) + duration: last for. 连续 (liánxù) + number: in a row.",
        ],
        examples: [
          { zh: "请继续说。", pinyin: "Qǐng jìxù shuō.", en: "Please carry on." },
          { zh: "这个城市在不断发展。", pinyin: "Zhège chéngshì zài búduàn fāzhǎn.", en: "This city keeps on developing." },
          { zh: "大雨持续了三天。", pinyin: "Dàyǔ chíxù le sān tiān.", en: "The heavy rain lasted three days." },
          { zh: "他连续工作了十个小时。", pinyin: "Tā liánxù gōngzuò le shí ge xiǎoshí.", en: "He worked ten hours straight." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "我明天又来。",
        right: "我明天再来。",
        rightPinyin: "Wǒ míngtiān zài lái.",
        why: "For a repeat that hasn't happened yet, use 再.",
      },
      {
        wrong: "他昨天再迟到了。",
        right: "他昨天又迟到了。",
        rightPinyin: "Tā zuótiān yòu chídào le.",
        why: "For a repeat that already happened, use 又.",
      },
      {
        wrong: "我再也没喝酒了。 (as a resolution)",
        right: "我再也不喝酒了。",
        rightPinyin: "Wǒ zài yě bù hē jiǔ le.",
        why: "A promise about the future takes 再也不. 再也没 reports the past.",
      },
    ],
    faqs: [
      {
        q: "Can 还 mean \"again\"?",
        a: "Sometimes, with 想 or 要: 我还想去 (I want to go again / still want to go). Often 还 and 再 combine: 我还想再去一次.",
      },
      {
        q: "Is 不断 written búduàn?",
        a: "Yes: 不 changes to bú before the fourth tone of 断.",
      },
    ],
    related: ["first-then-again-still", "time-spans-and-experience", "timing-as-soon-as-until"],
    lessons: ["zh-b1-you-zai", "zh-b1-again-spiral", "zh-b1-keep-on"],
  },
  {
    slug: "time-spans-and-experience",
    title: "刚, 曾经, 从来, 自从 and Verb + 了 + Time + 了",
    description:
      "刚 vs 刚才 (just), 曾经 (once), 从来不 vs 从来没…过 (never), 自从 (since), still with 仍然, and the double 了 for something that's still going on.",
    level: "B1",
    hsk: "HSK 3",
    intro: [
      "English uses the present perfect for a lot of this: \"I've just arrived\", \"I've never been\", \"I've lived here for five years\". Chinese has no such tense, so it uses adverbs and, for ongoing durations, a second 了.",
    ],
    sections: [
      {
        heading: "刚 vs 刚才",
        body: [
          "刚 (gāng) is an adverb before the verb: \"just\", relative to now, and the gap can be days or months (我刚来北京一个月). 刚才 (gāngcái) is a time word: \"a moment ago\", minutes at most, and it can go before the subject.",
        ],
        examples: [
          { zh: "我刚到。", pinyin: "Wǒ gāng dào.", en: "I've just arrived." },
          { zh: "我刚来北京一个月。", pinyin: "Wǒ gāng lái Běijīng yí ge yuè.", en: "I've only been in Beijing a month." },
          { zh: "刚才有人给你打电话。", pinyin: "Gāngcái yǒu rén gěi nǐ dǎ diànhuà.", en: "Someone called you a moment ago." },
        ],
      },
      {
        heading: "曾经, 从来不, 从来没…过",
        body: [
          "曾经 (céngjīng) + verb + 过: \"once, at one time\". 从来不 (cónglái bù): \"never\" as a habit or principle. 从来没 + verb + 过: \"have never (ever)\" as an experience. 始终 is \"all along, from start to finish\".",
        ],
        examples: [
          { zh: "我曾经在中国工作过。", pinyin: "Wǒ céngjīng zài Zhōngguó gōngzuò guo.", en: "I once worked in China." },
          { zh: "他从来不喝酒。", pinyin: "Tā cónglái bù hē jiǔ.", en: "He never drinks." },
          { zh: "我从来没见过他。", pinyin: "Wǒ cónglái méi jiàn guo tā.", en: "I've never met him." },
        ],
      },
      {
        heading: "Since: 自从…以后 / 以来",
        body: [
          "自从 (zìcóng) + event + 以后 / 以来: \"ever since\". 至今 is a written \"up to now\". 很久没…了 is \"haven't ... for ages\".",
        ],
        examples: [
          { zh: "自从搬家以后，我很少见到他。", pinyin: "Zìcóng bān jiā yǐhòu, wǒ hěn shǎo jiàndào tā.", en: "Since I moved, I've hardly seen him." },
          { zh: "我们很久没见了。", pinyin: "Wǒmen hěn jiǔ méi jiàn le.", en: "We haven't seen each other for ages." },
        ],
      },
      {
        heading: "Verb + 了 + time + 了: still going",
        body: [
          "One 了 after the verb plus one at the end means the time has passed so far and it's still continuing. Without the final 了, the action is over.",
        ],
        table: {
          headers: ["Sentence", "Meaning"],
          rows: [
            ["我学了两年中文。", "I studied Chinese for two years (and stopped)."],
            ["我学了两年中文了。", "I've been studying Chinese for two years (and still am)."],
          ],
        },
        examples: [
          { zh: "我在这儿住了五年了。", pinyin: "Wǒ zài zhèr zhù le wǔ nián le.", en: "I've lived here for five years." },
          { zh: "他学中文学了三年了。", pinyin: "Tā xué Zhōngwén xué le sān nián le.", en: "He's been studying Chinese for three years." },
        ],
      },
      {
        heading: "Still and at present: 仍然, 目前",
        body: [
          "仍然 (réngrán) and 仍 are written versions of 还 (still). 已 and 早已 are written \"already\" and \"long since\". 目前 (mùqián) is \"at present\", a period; 现在 is \"now\".",
        ],
        examples: [
          { zh: "雨仍然在下。", pinyin: "Yǔ réngrán zài xià.", en: "It's still raining." },
          { zh: "目前情况还不错。", pinyin: "Mùqián qíngkuàng hái búcuò.", en: "At present, things are going fairly well." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "我刚才到北京一年。",
        right: "我刚到北京一年。",
        rightPinyin: "Wǒ gāng dào Běijīng yì nián.",
        why: "刚才 is only for a moment ago. For \"just\" relative to a longer span, use 刚.",
      },
      {
        wrong: "我从来没去北京。",
        right: "我从来没去过北京。",
        rightPinyin: "Wǒ cónglái méi qù guo Běijīng.",
        why: "\"Never (in my experience)\" needs 过.",
      },
      {
        wrong: "我从来不见过他。",
        right: "我从来没见过他。",
        rightPinyin: "Wǒ cónglái méi jiàn guo tā.",
        why: "过 goes with 没, not 不. 从来不 is for habits.",
      },
    ],
    faqs: [
      {
        q: "Does 刚 take 了?",
        a: "Usually not: 我刚吃完饭 (I've just eaten). The 刚 already places the event.",
      },
      {
        q: "Is 曾经 formal?",
        a: "A little. In conversation 以前…过 does the same job: 我以前在中国工作过.",
      },
    ],
    related: ["duration-and-frequency", "again-never-again-keep-on", "guo-and-zai-aspect"],
    lessons: ["zh-b1-gang", "zh-b1-cengjing", "zh-b1-zicong-yilai", "zh-b1-recently", "zh-b1-still", "zh-b1-double-le"],
  },
  {
    slug: "brief-actions-and-counting",
    title: "看看, 一下, 趟, 左右 and 至少: Brief Actions and Rough Numbers",
    description:
      "Reduplicated verbs (看看, 试一试, 休息休息) and 一下 for doing something briefly, verb measure words (次, 遍, 趟, 顿, 场), approximate numbers (左右, 多, 大概) and 至少 / 整整.",
    level: "B1",
    hsk: "HSK 3",
    intro: [
      "Chinese softens requests and casual actions by doubling the verb or adding 一下: 我看看 is \"let me have a look\". This guide also covers counting actions and giving numbers loosely, which you need constantly in real conversation.",
    ],
    sections: [
      {
        heading: "Doubling the verb and 一下",
        body: [
          "One-syllable verbs double as AA (看看) or A一A (看一看). Two-syllable verbs double as ABAB (休息休息). Verb + 一下 does the same job. All of them mean \"briefly, a little\" and make a request sound relaxed. For a completed action, 了 goes in the middle: 看了看.",
        ],
        examples: [
          { zh: "我看看。", pinyin: "Wǒ kànkan.", en: "Let me have a look." },
          { zh: "你试一试。", pinyin: "Nǐ shì yi shì.", en: "Give it a try." },
          { zh: "我们休息休息吧。", pinyin: "Wǒmen xiūxi xiūxi ba.", en: "Let's take a little break." },
          { zh: "请等一下。", pinyin: "Qǐng děng yíxià.", en: "Wait a moment, please." },
          { zh: "他看了看手表。", pinyin: "Tā kàn le kàn shǒubiǎo.", en: "He glanced at his watch." },
        ],
      },
      {
        heading: "Verb measure words",
        body: [
          "These count actions and follow the verb: 次 (occasions), 遍 (start to finish), 趟 (a round trip), 顿 (meals, scoldings), 场 (rainfalls, illnesses, matches).",
        ],
        examples: [
          { zh: "我去了一趟上海。", pinyin: "Wǒ qù le yí tàng Shànghǎi.", en: "I made a trip to Shanghai." },
          { zh: "他被妈妈骂了一顿。", pinyin: "Tā bèi māma mà le yí dùn.", en: "He got a telling-off from his mum." },
          { zh: "昨天下了一场大雨。", pinyin: "Zuótiān xià le yì cháng dà yǔ.", en: "There was a heavy downpour yesterday." },
        ],
      },
      {
        heading: "Rough numbers",
        body: [
          "左右 (zuǒyòu) goes after a number and measure word: 三十岁左右. 大概 and 大约 go before. 多 after a round number means \"over\": 十多个. Its position matters: 十多个小时 is \"over ten hours\" (11, 12...), 十个多小时 is \"ten-and-a-bit hours\". 将近 is \"nearly\".",
        ],
        examples: [
          { zh: "他三十岁左右。", pinyin: "Tā sānshí suì zuǒyòu.", en: "He's about thirty." },
          { zh: "大概有二十个人。", pinyin: "Dàgài yǒu èrshí ge rén.", en: "There are about twenty people." },
          { zh: "我等了十多分钟。", pinyin: "Wǒ děng le shí duō fēnzhōng.", en: "I waited for over ten minutes." },
        ],
      },
      {
        heading: "至少, 最多, 整整",
        body: [
          "至少 (zhìshǎo) is at least, 最多 at most. 整整 (zhěngzhěng) + amount stresses a full amount: a whole two hours.",
        ],
        examples: [
          { zh: "至少要三天。", pinyin: "Zhìshǎo yào sān tiān.", en: "It'll take at least three days." },
          { zh: "他整整等了两个小时。", pinyin: "Tā zhěngzhěng děng le liǎng ge xiǎoshí.", en: "He waited a whole two hours." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "我看看了。",
        right: "我看了看。",
        rightPinyin: "Wǒ kàn le kàn.",
        why: "With a doubled verb, 了 goes between the two halves.",
      },
      {
        wrong: "他二十左右岁。",
        right: "他二十岁左右。",
        rightPinyin: "Tā èrshí suì zuǒyòu.",
        why: "左右 follows the whole number + measure word.",
      },
      {
        wrong: "我看一下了。",
        right: "我看了一下。",
        rightPinyin: "Wǒ kàn le yíxià.",
        why: "了 follows the verb, before 一下.",
      },
    ],
    faqs: [
      {
        q: "Is there a difference between 看看 and 看一下?",
        a: "Very little. Both make the action brief and casual. 一下 is a bit more neutral; doubling sounds a bit more relaxed.",
      },
      {
        q: "Why is 场 read cháng here?",
        a: "For weather and illnesses (一场雨, 一场病) it's cháng. For performances and matches (一场比赛) it's chǎng.",
      },
    ],
    related: ["duration-and-frequency", "requests-and-suggestions", "measure-words-and-numbers"],
    lessons: ["zh-b1-verb-reduplication", "zh-b1-approx-numbers", "zh-b1-verb-measures", "zh-b1-at-least"],
  },
  {
    slug: "vivid-descriptions",
    title: "又…又…, AABB Adjectives and 极了: Describing Vividly",
    description:
      "Listing qualities with 又…又… (又便宜又好吃), doubled adjectives (慢慢, 高高兴兴, 干干净净), and strong degree endings like 极了, 死了, 坏了 and 得很, plus 简直.",
    level: "B1",
    hsk: "HSK 3",
    intro: [
      "Plain 很 + adjective gets the job done. To sound lively, Chinese doubles adjectives, stacks qualities with 又…又…, and finishes adjectives with intensifiers like 极了 (extremely).",
    ],
    sections: [
      {
        heading: "又 A 又 B: both",
        body: [
          "又…又… lists two qualities (or actions) that point the same way: both good or both bad.",
        ],
        examples: [
          { zh: "这家饭馆的菜又便宜又好吃。", pinyin: "Zhè jiā fànguǎn de cài yòu piányi yòu hǎochī.", en: "The food at this restaurant is cheap and tasty." },
          { zh: "他又累又饿。", pinyin: "Tā yòu lèi yòu è.", en: "He's tired and hungry." },
        ],
      },
      {
        heading: "Doubled adjectives: AA and AABB",
        body: [
          "One-syllable adjectives double as AA (慢慢, 好好); two-syllable ones as AABB (高高兴兴, 干干净净). Before a verb they take 地; as a description they take 的. They're already vivid, so never add 很 or 不.",
        ],
        examples: [
          { zh: "你好好休息吧。", pinyin: "Nǐ hǎohǎo xiūxi ba.", en: "Get some proper rest." },
          { zh: "孩子们高高兴兴地去上学了。", pinyin: "Háizimen gāogāoxìngxìng de qù shàng xué le.", en: "The children went off to school happily." },
          { zh: "房间收拾得干干净净的。", pinyin: "Fángjiān shōushi de gāngānjìngjìng de.", en: "The room has been tidied spotless." },
        ],
      },
      {
        heading: "Strong endings: 极了, 死了, 坏了, 得很",
        body: [
          "These follow the adjective. 极了 (jí le) is \"extremely\", 死了 (sǐ le) is casual \"to death\", 坏了 (huài le) \"awfully\" with bad feelings, 得很 is \"very\". 简直 (jiǎnzhí) before the predicate means \"simply, practically\" and goes with exaggeration.",
        ],
        examples: [
          { zh: "这个电影好看极了。", pinyin: "Zhège diànyǐng hǎokàn jí le.", en: "This film is fantastic." },
          { zh: "我今天累死了。", pinyin: "Wǒ jīntiān lèi sǐ le.", en: "I'm dead tired today." },
          { zh: "孩子们饿坏了。", pinyin: "Háizimen è huài le.", en: "The children are starving." },
          { zh: "这简直太难了！", pinyin: "Zhè jiǎnzhí tài nán le!", en: "This is just impossibly hard!" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "他很高高兴兴。",
        right: "他高高兴兴的。",
        rightPinyin: "Tā gāogāoxìngxìng de.",
        why: "Doubled adjectives are already intense, so they don't take 很. Add 的 instead.",
      },
      {
        wrong: "这家饭馆又便宜又不好吃。",
        right: "这家饭馆虽然便宜，但是不好吃。",
        rightPinyin: "Zhè jiā fànguǎn suīrán piányi, dànshì bù hǎochī.",
        why: "又…又… joins qualities that point the same way. For a good point and a bad point, use a contrast.",
      },
      {
        wrong: "很好极了。",
        right: "好极了。",
        rightPinyin: "Hǎo jí le.",
        why: "极了 already means \"extremely\"; 很 can't come before it.",
      },
    ],
    faqs: [
      {
        q: "Is 累死了 rude or alarming?",
        a: "Not at all. It's casual exaggeration, like \"I'm dead tired\". Use it with friends, not in formal writing.",
      },
      {
        q: "Why do people say hǎohāor?",
        a: "In Beijing-style speech the second syllable of 好好 is often said with a first tone and 儿: hǎohāor. This course writes the dictionary tones, hǎohǎo.",
      },
    ],
    related: ["adjectives-and-hen", "de-complement-and-di", "emphasis-and-rhetorical-questions"],
    lessons: ["zh-b1-youyou", "zh-b1-degree-complements", "zh-b1-adj-reduplication"],
  },
  {
    slug: "emphasis-and-rhetorical-questions",
    title: "Emphasis: 连…都, 一点儿也不, 根本, 不是…吗, 难道 and 到底",
    description:
      "Even with 连…都, total negatives (一个人也不认识), 根本 and 绝对, and rhetorical questions with 不是…吗, 难道…吗, 到底 and casual 干吗.",
    level: "B1",
    hsk: "HSK 3",
    intro: [
      "Real conversation is full of emphasis: \"not even\", \"not at all\", \"didn't you say ...?\", \"what on earth ...?\". Chinese has a fixed pattern for each, and most of them hang on 都 or 也 before the verb.",
    ],
    sections: [
      {
        heading: "连…都 / 也: even",
        body: [
          "连 (lián) + the surprising item + 都 / 也 + verb. The item can be the subject or the object; either way it moves in front of the verb.",
        ],
        examples: [
          { zh: "这个问题连孩子都知道。", pinyin: "Zhège wèntí lián háizi dōu zhīdao.", en: "Even a child knows this." },
          { zh: "他忙得连饭都没吃。", pinyin: "Tā máng de lián fàn dōu méi chī.", en: "He was so busy he didn't even eat." },
        ],
      },
      {
        heading: "Not at all, not a single one",
        body: [
          "一点儿也 / 都 + 不 / 没: not at all. 一 + measure word (+ noun) + 也 / 都 + 不 / 没: not a single one. 根本 (gēnběn) + negative: simply not, not in the least. 绝对 (juéduì): absolutely.",
        ],
        examples: [
          { zh: "我一个人也不认识。", pinyin: "Wǒ yí ge rén yě bú rènshi.", en: "I don't know a single person." },
          { zh: "他一次也没来过。", pinyin: "Tā yí cì yě méi lái guo.", en: "He hasn't come once." },
          { zh: "我根本不知道这件事。", pinyin: "Wǒ gēnběn bù zhīdao zhè jiàn shì.", en: "I had no idea about this at all." },
          { zh: "我绝对不会告诉别人。", pinyin: "Wǒ juéduì bú huì gàosu biéren.", en: "I absolutely won't tell anyone." },
        ],
      },
      {
        heading: "Rhetorical questions: 不是…吗, 难道…吗",
        body: [
          "不是…吗 reminds or objects: \"didn't you say ...?\". 难道 (nándào) …吗 is stronger disbelief: \"surely you don't mean ...?\". Neither expects an answer.",
        ],
        examples: [
          { zh: "你不是说你今天不来吗？", pinyin: "Nǐ bú shì shuō nǐ jīntiān bù lái ma?", en: "Didn't you say you weren't coming today?" },
          { zh: "难道你不知道吗？", pinyin: "Nándào nǐ bù zhīdao ma?", en: "Surely you knew?" },
        ],
      },
      {
        heading: "到底, 究竟, 干吗",
        body: [
          "到底 (dàodǐ) in a question means \"on earth, after all\" and pushes for a real answer; 究竟 is its written twin. 干吗 (gànmá) is casual \"why, what for\". 怎么 can mean \"how come\", and 如何 is the formal \"how\".",
        ],
        examples: [
          { zh: "你到底去不去？", pinyin: "Nǐ dàodǐ qù bu qù?", en: "Are you going or not?" },
          { zh: "你干吗不早说？", pinyin: "Nǐ gànmá bù zǎo shuō?", en: "Why didn't you say so earlier?" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "连孩子知道。",
        right: "连孩子都知道。",
        rightPinyin: "Lián háizi dōu zhīdao.",
        why: "连 always needs 都 or 也 before the verb.",
      },
      {
        wrong: "我不认识一个人。 (meaning \"not a single person\")",
        right: "我一个人也不认识。",
        rightPinyin: "Wǒ yí ge rén yě bú rènshi.",
        why: "For \"not a single\", the 一 + measure word phrase moves before the verb with 也 / 都.",
      },
      {
        wrong: "你到底去吗？",
        right: "你到底去不去？",
        rightPinyin: "Nǐ dàodǐ qù bu qù?",
        why: "到底 goes with question words or A-not-A, not with 吗.",
      },
    ],
    faqs: [
      {
        q: "How do I answer 你不是说…吗?",
        a: "It's a reminder, so you respond to the content: 对，可是… (yes, but ...) or 我没说过 (I never said that).",
      },
      {
        q: "Does 到底 have other meanings?",
        a: "Yes, in statements it means \"in the end, after all\": 他到底还是来了 (he came after all).",
      },
    ],
    related: ["any-every-some", "vivid-descriptions", "yes-no-questions"],
    lessons: ["zh-b1-bushi-ma", "zh-b1-lian-dou", "zh-b1-yidianr-ye-bu", "zh-b1-genben-juedui", "zh-b2-nandao", "zh-b2-daodi", "zh-b1-ganma-ruhe"],
  },
  {
    slug: "any-every-some",
    title: "Any, Every and Some: 什么都, 每, 任何, 某 and 不论",
    description:
      "Question words + 都 / 也 for any-, every- and no- (什么都吃, 谁都不认识), 每 and 各, 任何 and 一切, 某 for \"a certain\", and 不论 for \"no matter\".",
    level: "B1",
    hsk: "HSK 3",
    intro: [
      "Chinese makes \"anything\", \"everyone\" and \"nowhere\" by reusing question words. Put 什么 before 都 and it means everything; add a negative and it means nothing. The same 都 shows up after 每, 任何 and 不论 too.",
    ],
    sections: [
      {
        heading: "Question word + 都 / 也",
        body: [
          "什么都 (everything), 谁都 (everyone), 哪儿都 (everywhere), 怎么都 (no matter how). With a negative they mean nothing, no one, nowhere. The question word comes before the verb.",
        ],
        examples: [
          { zh: "我什么都吃。", pinyin: "Wǒ shénme dōu chī.", en: "I eat anything." },
          { zh: "他谁都不认识。", pinyin: "Tā shéi dōu bú rènshi.", en: "He doesn't know anyone." },
          { zh: "我哪儿也不想去。", pinyin: "Wǒ nǎr yě bù xiǎng qù.", en: "I don't want to go anywhere." },
        ],
      },
      {
        heading: "每, 各, 整个",
        body: [
          "每 (měi) + measure word + noun needs 都 before the verb. Doubled measure words (个个, 天天, 人人) mean the same and also take 都. 各 (gè) means \"each, various\": 各国, 各种. 各位 addresses a group politely. 整个 (zhěnggè) is \"the whole\" of one thing; 全 is \"all, entire\".",
        ],
        examples: [
          { zh: "每个人都有自己的想法。", pinyin: "Měi ge rén dōu yǒu zìjǐ de xiǎngfǎ.", en: "Everyone has their own ideas." },
          { zh: "他天天都去跑步。", pinyin: "Tā tiāntiān dōu qù pǎo bù.", en: "He goes running every day." },
          { zh: "商店里有各种各样的水果。", pinyin: "Shāngdiàn li yǒu gè zhǒng gè yàng de shuǐguǒ.", en: "The shop has all kinds of fruit." },
        ],
      },
      {
        heading: "任何, 一切, 某",
        body: [
          "任何 (rènhé) + noun + 都 / 也: any at all. 一切 (yíqiè): everything. 某 (mǒu) + noun: a certain (某人, 某天); 某些 is \"certain, some\". Question words without 都 can also mean \"some-\": 我好像在哪儿见过他 (I think I've seen him somewhere).",
        ],
        examples: [
          { zh: "任何人都可以参加。", pinyin: "Rènhé rén dōu kěyǐ cānjiā.", en: "Anyone can take part." },
          { zh: "一切都很顺利。", pinyin: "Yíqiè dōu hěn shùnlì.", en: "Everything went smoothly." },
          { zh: "我好像在哪儿见过他。", pinyin: "Wǒ hǎoxiàng zài nǎr jiàn guo tā.", en: "I think I've seen him somewhere." },
        ],
      },
      {
        heading: "不论…都: no matter",
        body: [
          "不论 (bùlùn) + a question word, A 还是 B, or A-not-A, then 都 / 也 in the main clause. 无论 is more formal; 不管 is the everyday spoken form.",
        ],
        examples: [
          { zh: "不论天气怎么样，他都去跑步。", pinyin: "Bùlùn tiānqì zěnmeyàng, tā dōu qù pǎo bù.", en: "Whatever the weather, he goes running." },
          { zh: "不管你去不去，我都去。", pinyin: "Bùguǎn nǐ qù bu qù, wǒ dōu qù.", en: "Whether you go or not, I'm going." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "我什么不吃。",
        right: "我什么都不吃。",
        rightPinyin: "Wǒ shénme dōu bù chī.",
        why: "For \"nothing\", the question word needs 都 or 也 before the negative.",
      },
      {
        wrong: "每个人有手机。",
        right: "每个人都有手机。",
        rightPinyin: "Měi ge rén dōu yǒu shǒujī.",
        why: "每 is almost always followed by 都 before the verb.",
      },
      {
        wrong: "不论天气怎么样，他去跑步。",
        right: "不论天气怎么样，他都去跑步。",
        rightPinyin: "Bùlùn tiānqì zěnmeyàng, tā dōu qù pǎo bù.",
        why: "不论 needs 都 (or 也) in the main clause.",
      },
    ],
    faqs: [
      {
        q: "What's the difference between 不论 and 只要?",
        a: "不论 says the result holds in every case (whatever happens). 只要 says one condition is enough (as long as). See the guide on conditions.",
      },
      {
        q: "Can 什么 mean \"something\" on its own?",
        a: "Yes, in questions and uncertain statements: 你想吃点儿什么吗？ (Do you want to eat something?).",
      },
    ],
    related: ["conditions", "emphasis-and-rhetorical-questions", "everyday-words-a2"],
    lessons: ["zh-b1-indefinite", "zh-b1-every-each", "zh-b1-any-all", "zh-b1-mou", "zh-b1-bulun"],
  },
  {
    slug: "conditions",
    title: "Conditions: 只要…就, 只有…才, 要是 and 没有…就没有",
    description:
      "As long as (只要…就) vs only if (只有…才), spoken if with 要是…的话 and otherwise with 要不, and necessary conditions with 没有 A 就没有 B.",
    level: "B1",
    hsk: "HSK 3",
    intro: [
      "At A2 you met 如果…就 for if. B1 adds conditions with attitude: \"as long as\" (an easy condition) and \"only if\" (a demanding one). The second half changes with them: 只要 pairs with 就, 只有 with 才.",
    ],
    sections: [
      {
        heading: "只要…就 vs 只有…才",
        body: [
          "只要 (zhǐyào) gives a condition that's enough: meet it and the result follows. 只有 (zhǐyǒu) gives the one condition without which the result won't happen. 就 and 才 go after the subject of the second clause.",
        ],
        table: {
          headers: ["Pattern", "Meaning", "Example"],
          rows: [
            ["只要…就…", "as long as (enough)", "只要你努力，就能学好。"],
            ["只有…才…", "only if (necessary)", "只有多练习，才能说得流利。"],
          ],
        },
        examples: [
          { zh: "只要你努力，就能学好。", pinyin: "Zhǐyào nǐ nǔlì, jiù néng xuéhǎo.", en: "As long as you work hard, you'll learn it well." },
          { zh: "只有多练习，才能说得流利。", pinyin: "Zhǐyǒu duō liànxí, cái néng shuō de liúlì.", en: "Only by practising a lot can you speak fluently." },
        ],
      },
      {
        heading: "要是…(的话) and 要不",
        body: [
          "要是 (yàoshi) is the everyday spoken \"if\"; 如果 is neutral and works in writing. 要不 (yàobù) means \"otherwise\" and also \"how about\" when making a suggestion.",
        ],
        examples: [
          { zh: "要是你不舒服，就早点儿回家吧。", pinyin: "Yàoshi nǐ bù shūfu, jiù zǎo diǎnr huí jiā ba.", en: "If you're not feeling well, go home early." },
          { zh: "快走吧，要不就迟到了。", pinyin: "Kuài zǒu ba, yàobù jiù chídào le.", en: "Let's hurry, or we'll be late." },
        ],
      },
      {
        heading: "没有 A 就没有 B; 不…就不…",
        body: [
          "没有 A，就没有 B: without A there would be no B. With verbs, 你不去，我就不去 (if you don't go, I won't). Repeating the same verb, 不去就不去, is a defiant \"I'm not going, and that's that\".",
        ],
        examples: [
          { zh: "没有你的帮助，就没有我的今天。", pinyin: "Méiyǒu nǐ de bāngzhù, jiù méiyǒu wǒ de jīntiān.", en: "I wouldn't be where I am today without your help." },
          { zh: "你不去，我就不去。", pinyin: "Nǐ bú qù, wǒ jiù bú qù.", en: "If you don't go, I won't either." },
          { zh: "不去就不去！", pinyin: "Bú qù jiù bú qù!", en: "Fine, I'm not going then!" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "只有多练习，就能说好。",
        right: "只有多练习，才能说好。",
        rightPinyin: "Zhǐyǒu duō liànxí, cái néng shuō hǎo.",
        why: "只有 pairs with 才; 只要 pairs with 就.",
      },
      {
        wrong: "只要你来，我才高兴。",
        right: "只要你来，我就高兴。",
        rightPinyin: "Zhǐyào nǐ lái, wǒ jiù gāoxìng.",
        why: "只要 introduces a sufficient condition, so the result takes 就.",
      },
      {
        wrong: "要是下雨，就我们不去。",
        right: "要是下雨，我们就不去。",
        rightPinyin: "Yàoshi xià yǔ, wǒmen jiù bú qù.",
        why: "就 goes after the subject, before the verb.",
      },
    ],
    faqs: [
      {
        q: "Is 只有 here the same as 只 + 有 (only have)?",
        a: "Same characters. As a conjunction before a clause it means \"only if\"; before a noun it can simply mean \"only have\": 我只有十块钱.",
      },
      {
        q: "Can 要是 and 的话 be used together?",
        a: "Yes: 要是你有时间的话. Either one alone is also fine.",
      },
    ],
    related: ["if-or-while-the-more", "any-every-some", "adding-ideas"],
    lessons: ["zh-b1-zhiyao-jiu", "zh-b1-no-x-no-y", "zh-b1-zhiyou-cai", "zh-b1-yaoshi"],
  },
  {
    slug: "adding-ideas",
    title: "Adding Ideas: 不但…而且, 不仅, 除了…以外, 一方面 and 同时",
    description:
      "Not only … but also (不但…而且, 不仅…还), besides vs except (除了…以外 with 还 or 都), two sides with 一方面…另一方面, and 同时, 并且 and 另外.",
    level: "B1",
    hsk: "HSK 3",
    intro: [
      "Building an argument or a description means adding points. Chinese gives you pairs that mark the addition at both ends, and it's careful about where the subject goes.",
    ],
    sections: [
      {
        heading: "不但…而且… / 不仅…还…",
        body: [
          "不但 (búdàn) or 不仅 (bùjǐn) opens the first point; 而且 (érqiě), 还 or 也 adds the second. With one subject, the subject comes first, before 不但. With two different subjects, each clause keeps its own subject after the connector.",
        ],
        examples: [
          { zh: "他不但会说中文，而且说得很好。", pinyin: "Tā búdàn huì shuō Zhōngwén, érqiě shuō de hěn hǎo.", en: "Not only can he speak Chinese, he speaks it well." },
          { zh: "不但我喜欢，而且我妈妈也喜欢。", pinyin: "Búdàn wǒ xǐhuan, érqiě wǒ māma yě xǐhuan.", en: "Not only do I like it, my mum likes it too." },
          { zh: "这仅仅是开始。", pinyin: "Zhè jǐnjǐn shì kāishǐ.", en: "This is only the beginning." },
        ],
      },
      {
        heading: "除了…以外: besides or except",
        body: [
          "除了 (chúle) … (以外) means \"besides\" when followed by 还 or 也, and \"except\" when followed by 都.",
        ],
        table: {
          headers: ["Pattern", "Meaning"],
          rows: [
            ["除了 A 以外，还 / 也 …", "besides A, also ..."],
            ["除了 A 以外，都 …", "except A, all ..."],
          ],
        },
        examples: [
          { zh: "除了中文以外，他还会说英语。", pinyin: "Chúle Zhōngwén yǐwài, tā hái huì shuō Yīngyǔ.", en: "Besides Chinese, he also speaks English." },
          { zh: "除了他以外，我们都去了。", pinyin: "Chúle tā yǐwài, wǒmen dōu qù le.", en: "All of us went except him." },
        ],
      },
      {
        heading: "一方面…另一方面…",
        body: [
          "Two sides or two reasons: 一方面 (on the one hand) … 另一方面 (on the other hand). Unlike English, both halves often point the same way: two reasons, not a contrast.",
        ],
        examples: [
          { zh: "我学中文，一方面是为了工作，另一方面是因为我喜欢中国文化。", pinyin: "Wǒ xué Zhōngwén, yì fāngmiàn shì wèile gōngzuò, lìng yì fāngmiàn shì yīnwèi wǒ xǐhuan Zhōngguó wénhuà.", en: "I'm learning Chinese partly for work and partly because I love Chinese culture." },
        ],
      },
      {
        heading: "同时, 并且, 另外, 只是",
        body: [
          "同时 (tóngshí) is \"at the same time, also\". 并且 (bìngqiě) joins verbs or clauses (\"and also\"); written 并 does the same. 另外 (lìngwài) opens an extra point (\"in addition\"). 只是 (zhǐshì) adds a small reservation: \"it's just that\".",
        ],
        examples: [
          { zh: "他是老师，同时也是作家。", pinyin: "Tā shì lǎoshī, tóngshí yě shì zuòjiā.", en: "He's a teacher and a writer as well." },
          { zh: "另外，我还想说一件事。", pinyin: "Lìngwài, wǒ hái xiǎng shuō yí jiàn shì.", en: "There's one more thing I'd like to say." },
          { zh: "我很想去，只是没有时间。", pinyin: "Wǒ hěn xiǎng qù, zhǐshì méiyǒu shíjiān.", en: "I'd love to go; it's just that I don't have time." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "他不但会说中文，但是说得很好。",
        right: "他不但会说中文，而且说得很好。",
        rightPinyin: "Tā búdàn huì shuō Zhōngwén, érqiě shuō de hěn hǎo.",
        why: "不但 adds, it doesn't contrast. Its partner is 而且, 还 or 也.",
      },
      {
        wrong: "除了中文以外，他会说英语。",
        right: "除了中文以外，他还会说英语。",
        rightPinyin: "Chúle Zhōngwén yǐwài, tā hái huì shuō Yīngyǔ.",
        why: "Without 还 or 都, the 除了 sentence is ambiguous. Use 还 for \"besides\".",
      },
      {
        wrong: "不但他喜欢，而且也喜欢唱歌。",
        right: "他不但喜欢跳舞，而且也喜欢唱歌。",
        rightPinyin: "Tā búdàn xǐhuan tiàowǔ, érqiě yě xǐhuan chàng gē.",
        why: "With one subject, put it before 不但, and give each half its own content.",
      },
    ],
    faqs: [
      {
        q: "Can I leave out 以外 after 除了?",
        a: "Yes: 除了他，我们都去了. 以外 (or 之外) makes it a little more complete.",
      },
      {
        q: "Is 一方面…另一方面 a contrast like \"on the other hand\"?",
        a: "It can be, but more often it lists two aspects or reasons. For a contrast, 但是 or 不过 is clearer.",
      },
    ],
    related: ["because-although-but", "conditions", "cause-and-no-choice"],
    lessons: ["zh-b1-budan-erqie", "zh-b1-tongshi", "zh-b1-chule-yiwai", "zh-b1-bujin", "zh-b1-yifangmian", "zh-b1-furthermore"],
  },
  {
    slug: "cause-and-no-choice",
    title: "由于…因此, 为了, 只好 and 不得不: Causes, Purposes and Having No Choice",
    description:
      "The formal cause-and-effect pair 由于…因此, 为了 for purpose, and 只好 vs 不得不 for doing something because you have no other option.",
    level: "B1",
    hsk: "HSK 3",
    intro: [
      "因为…所以 from A2 is perfect for conversation. In reports, news and essays, Chinese switches to 由于…因此. This guide also covers purpose (为了, in order to) and the two ways to say you had no choice.",
    ],
    sections: [
      {
        heading: "由于…因此…",
        body: [
          "由于 (yóuyú) \"owing to\" introduces the cause; 因此 (yīncǐ) \"therefore\" the result. Both are more formal than 因为 and 所以. 由于 can also take a noun phrase: 由于天气原因 (due to the weather).",
        ],
        examples: [
          { zh: "由于天气原因，航班取消了。", pinyin: "Yóuyú tiānqì yuányīn, hángbān qǔxiāo le.", en: "The flight was cancelled due to the weather." },
          { zh: "由于准备得很充分，因此他们成功了。", pinyin: "Yóuyú zhǔnbèi de hěn chōngfèn, yīncǐ tāmen chénggōng le.", en: "Because they prepared thoroughly, they succeeded." },
        ],
      },
      {
        heading: "为了: in order to",
        body: [
          "为了 (wèile) + goal states a purpose, usually at the start of the sentence. Compare 为 + person (for someone) and 因为 (because): 为了 looks forward to an aim, 因为 back to a cause.",
        ],
        examples: [
          { zh: "为了学好中文，他每天都练习。", pinyin: "Wèile xuéhǎo Zhōngwén, tā měi tiān dōu liànxí.", en: "He practises every day so he can learn Chinese well." },
          { zh: "我这么做是为了你。", pinyin: "Wǒ zhème zuò shì wèile nǐ.", en: "I'm doing this for your sake." },
        ],
      },
      {
        heading: "只好 vs 不得不",
        body: [
          "只好 (zhǐhǎo) + verb: \"had to settle for\", the only option left, often with mild resignation. 不得不 (bùdébù) + verb: \"have no choice but to\", stronger and a little more formal, stressing outside pressure.",
        ],
        examples: [
          { zh: "没有出租车了，我们只好走回家。", pinyin: "Méiyǒu chūzūchē le, wǒmen zhǐhǎo zǒu huí jiā.", en: "There were no taxis, so we had to walk home." },
          { zh: "公司让我加班，我不得不取消约会。", pinyin: "Gōngsī ràng wǒ jiā bān, wǒ bùdébù qǔxiāo yuēhuì.", en: "Work made me stay late, so I had no choice but to cancel my date." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "因为学好中文，他每天练习。",
        right: "为了学好中文，他每天练习。",
        rightPinyin: "Wèile xuéhǎo Zhōngwén, tā měi tiān liànxí.",
        why: "Learning Chinese well is the goal, not the cause. Goals take 为了.",
      },
      {
        wrong: "我只好不去。 (meaning \"I'm forced not to go\")",
        right: "我只好不去了。",
        rightPinyin: "Wǒ zhǐhǎo bú qù le.",
        why: "只好 usually ends with 了 to show the situation forced a change of plan.",
      },
    ],
    faqs: [
      {
        q: "Can I mix 由于 with 所以?",
        a: "Yes, 由于…所以… is common too. 因为…因此… is also heard. The full formal pair is 由于…因此….",
      },
      {
        q: "Is 不得不 a double negative?",
        a: "Literally \"not able not to\", which comes out as a strong positive: you must. Don't add another 不.",
      },
    ],
    related: ["because-although-but", "prepositions-b1", "certainty-and-necessity"],
    lessons: ["zh-b2-weile", "zh-b2-youyu-yinci", "zh-b1-causing", "zh-b2-zhihao"],
  },
  {
    slug: "timing-as-soon-as-until",
    title: "一…就, 直到…才 and Hurry Words: 立刻, 马上, 赶紧, 连忙",
    description:
      "As soon as with 一…就, not until with 直到…才, verb + 到 + time, and the difference between 立刻, 马上, 赶紧 / 赶快 and 连忙.",
    level: "B1",
    hsk: "HSK 3",
    intro: [
      "These patterns pin down exactly when something happens relative to something else: immediately after, not until, right away. As with 就 and 才 at A2, they also tell you whether things went faster or slower than expected.",
    ],
    sections: [
      {
        heading: "一…就…: as soon as",
        body: [
          "一 + first action, 就 + second action. Both go after their subjects. It also describes a reliable habit: whenever A, then B.",
        ],
        examples: [
          { zh: "我一到家就给你打电话。", pinyin: "Wǒ yí dào jiā jiù gěi nǐ dǎ diànhuà.", en: "I'll call you as soon as I get home." },
          { zh: "他一喝酒就脸红。", pinyin: "Tā yì hē jiǔ jiù liǎn hóng.", en: "Whenever he drinks, he goes red." },
        ],
      },
      {
        heading: "直到…才…: not until",
        body: [
          "直到 (zhídào) + time or event + 才 + verb means it only happened at that late point. 直到现在…还没 means \"still haven't, even now\". Verb + 到 + time means \"until\": 聊到半夜.",
        ],
        examples: [
          { zh: "他直到十二点才回来。", pinyin: "Tā zhídào shí'èr diǎn cái huílai.", en: "He didn't come back until midnight." },
          { zh: "直到现在我还没收到。", pinyin: "Zhídào xiànzài wǒ hái méi shōudào.", en: "I still haven't received it, even now." },
          { zh: "我们聊到半夜。", pinyin: "Wǒmen liáo dào bànyè.", en: "We chatted until midnight." },
        ],
      },
      {
        heading: "Right away: 立刻, 马上, 赶紧, 连忙",
        body: [
          "马上 (mǎshàng) is \"right away\" or \"very soon\". 立刻 (lìkè) is \"immediately\", more formal and more instant. 赶紧 / 赶快 (gǎnjǐn / gǎnkuài) is \"hurry and ...\", common in commands. 连忙 (liánmáng) is \"hastily\" and only narrates what someone did: it can't give a command.",
        ],
        table: {
          headers: ["Word", "Commands?", "Feel"],
          rows: [
            ["马上", "yes", "right away, soon"],
            ["立刻", "yes", "immediately, formal"],
            ["赶紧 / 赶快", "yes", "hurry up and"],
            ["连忙", "no", "hastily (narration)"],
          ],
        },
        examples: [
          { zh: "你赶快走吧！", pinyin: "Nǐ gǎnkuài zǒu ba!", en: "Hurry up and go!" },
          { zh: "他看见老师，连忙站了起来。", pinyin: "Tā kànjiàn lǎoshī, liánmáng zhàn le qǐlai.", en: "When he saw the teacher, he hurriedly stood up." },
          { zh: "收到通知后，请立刻回复。", pinyin: "Shōudào tōngzhī hòu, qǐng lìkè huífù.", en: "Please reply immediately on receiving this notice." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "我一到家，我给你打电话。",
        right: "我一到家就给你打电话。",
        rightPinyin: "Wǒ yí dào jiā jiù gěi nǐ dǎ diànhuà.",
        why: "一 needs its partner 就 in the second half.",
      },
      {
        wrong: "你连忙走吧！",
        right: "你赶紧走吧！",
        rightPinyin: "Nǐ gǎnjǐn zǒu ba!",
        why: "连忙 only describes what someone did. For a command, use 赶紧 or 赶快.",
      },
      {
        wrong: "他直到十二点才回来了。",
        right: "他直到十二点才回来。",
        rightPinyin: "Tā zhídào shí'èr diǎn cái huílai.",
        why: "才 doesn't take 了.",
      },
    ],
    faqs: [
      {
        q: "Why is 一 sometimes yí and sometimes yì here?",
        a: "It follows the tone of the next syllable: yí before a fourth tone (一到), yì before the others (一喝).",
      },
      {
        q: "Is 马上 always immediate?",
        a: "Not always. 我马上就到 can mean \"I'll be there in a few minutes\". 立刻 is more strictly immediate.",
      },
    ],
    related: ["time-adverbs-yijing-jiu-cai", "again-never-again-keep-on", "expectation-and-reality"],
    lessons: ["zh-b1-yi-jiu", "zh-b1-right-away", "zh-b1-zhidao-cai"],
  },
  {
    slug: "expectation-and-reality",
    title: "本来, 原来, 果然, 终于, 其实 and 突然: Expectations and What Really Happened",
    description:
      "Words that compare what you expected with what happened: 本来 (originally) vs 原来 (so it turns out), 果然 (sure enough) vs 竟然 (unexpectedly), 终于 (at last), 其实 vs 确实, and 突然.",
    level: "B1",
    hsk: "HSK 3",
    intro: [
      "Stories are about expectations: what was planned, what you thought, and what actually happened. Chinese has a precise adverb for each relationship, and they're what make a narrative sound natural.",
    ],
    sections: [
      {
        heading: "本来 vs 原来",
        body: [
          "本来 (běnlái) + verb: what was originally planned or the case, before it changed. 本来就 means \"in the first place, anyway\". 原来 (yuánlái) at the start of a clause is the moment of discovery: \"so that's why, it turns out\". 难怪…原来… is \"no wonder ..., it turns out ...\". 原来的 + noun means \"the original\".",
        ],
        examples: [
          { zh: "我本来想去，后来有事没去成。", pinyin: "Wǒ běnlái xiǎng qù, hòulái yǒu shì méi qùchéng.", en: "I was going to go, but something came up." },
          { zh: "原来是你！", pinyin: "Yuánlái shì nǐ!", en: "Oh, it's you!" },
          { zh: "难怪他没来，原来他病了。", pinyin: "Nánguài tā méi lái, yuánlái tā bìng le.", en: "No wonder he didn't come. He's ill." },
        ],
      },
      {
        heading: "果然, 竟然, 终于",
        body: [
          "果然 (guǒrán): sure enough, as predicted. 竟然 (jìngrán): against all expectation. 终于 (zhōngyú) + verb + 了: at last, after waiting or effort (usually a welcome outcome). 最后 is the neutral \"finally, in the end\".",
        ],
        examples: [
          { zh: "天气预报说今天下雨，果然下雨了。", pinyin: "Tiānqì yùbào shuō jīntiān xià yǔ, guǒrán xià yǔ le.", en: "The forecast said rain, and sure enough it rained." },
          { zh: "他竟然忘了我的生日。", pinyin: "Tā jìngrán wàng le wǒ de shēngrì.", en: "He actually forgot my birthday." },
          { zh: "等了一个小时，车终于来了。", pinyin: "Děng le yí ge xiǎoshí, chē zhōngyú lái le.", en: "After an hour's wait, the bus finally came." },
        ],
      },
      {
        heading: "其实 vs 确实",
        body: [
          "其实 (qíshí) corrects an impression: \"actually, in fact (not what you'd think)\". 确实 (quèshí) confirms one: \"indeed, really\".",
        ],
        examples: [
          { zh: "他看起来很年轻，其实已经五十岁了。", pinyin: "Tā kàn qǐlai hěn niánqīng, qíshí yǐjīng wǔshí suì le.", en: "He looks young, but he's actually fifty." },
          { zh: "这个办法确实不错。", pinyin: "Zhège bànfǎ quèshí búcuò.", en: "This method really is good." },
        ],
      },
      {
        heading: "突然 vs 忽然",
        body: [
          "Both mean suddenly before a verb. 突然 (tūrán) is also an adjective: 很突然, 太突然了. 忽然 is only an adverb. 意外 is an accident (出意外) or \"unexpected\" (很意外).",
        ],
        examples: [
          { zh: "这个消息太突然了。", pinyin: "Zhège xiāoxi tài tūrán le.", en: "This news is so sudden." },
          { zh: "他突然站了起来。", pinyin: "Tā tūrán zhàn le qǐlai.", en: "He suddenly stood up." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "这个消息很忽然。",
        right: "这个消息很突然。",
        rightPinyin: "Zhège xiāoxi hěn tūrán.",
        why: "Only 突然 works as an adjective after 很.",
      },
      {
        wrong: "等了很久，他终于没来。",
        right: "等了很久，他最后还是没来。",
        rightPinyin: "Děng le hěn jiǔ, tā zuìhòu háishi méi lái.",
        why: "终于 marks a long-awaited outcome that happened. For an outcome that didn't, use 最后 or 还是.",
      },
      {
        wrong: "我确实以为他是老师，其实他是学生。",
        right: "我以为他是老师，其实他是学生。",
        rightPinyin: "Wǒ yǐwéi tā shì lǎoshī, qíshí tā shì xuésheng.",
        why: "确实 confirms; it doesn't fit a belief that turned out wrong. 其实 corrects it.",
      },
    ],
    faqs: [
      {
        q: "Can 原来 also mean \"originally\"?",
        a: "Yes: 原来的计划 (the original plan), 他原来住在这儿 (he used to live here). But for a plan that changed, 本来 is the usual choice, and for a discovery, only 原来 works.",
      },
      {
        q: "Is 竟然 always negative?",
        a: "No, just unexpected: 他竟然考了第一 (he came first, of all things).",
      },
    ],
    related: ["time-adverbs-yijing-jiu-cai", "how-sure-maybe-surely", "timing-as-soon-as-until"],
    lessons: ["zh-b1-qishi-shishi", "zh-b1-suddenly", "zh-b1-benlai-yuanlai", "zh-b1-guoran-zhongyu"],
  },
  {
    slug: "certainty-and-necessity",
    title: "敢, 需要, 值得, 尽量, 恐怕 and the Certainty Scale",
    description:
      "Daring (敢), needing (需要, 必要, 不必), worth (值得, 值), trying your best (尽量, 千万), how likely something is from 必然 to 不可能 (with 恐怕), and 往往 vs 常常 vs 通常.",
    level: "B1",
    hsk: "HSK 3",
    intro: [
      "B1 fills in the gaps between \"must\" and \"can\": daring to, needing to, being worth doing. It also gives you a full scale for how sure you are, which is essential for discussing anything with nuance.",
    ],
    sections: [
      {
        heading: "敢, 需要, 不必",
        body: [
          "敢 (gǎn) + verb: dare to. 需要 (xūyào) + noun or verb: need. 有必要 / 没必要: it's necessary / pointless. 不必 (búbì) and 不用 mean \"no need to\"; 不要 means \"don't\".",
        ],
        examples: [
          { zh: "我不敢一个人去。", pinyin: "Wǒ bù gǎn yí ge rén qù.", en: "I don't dare go on my own." },
          { zh: "我们需要你的帮助。", pinyin: "Wǒmen xūyào nǐ de bāngzhù.", en: "We need your help." },
          { zh: "没必要买新的。", pinyin: "Méi bìyào mǎi xīn de.", en: "There's no need to buy a new one." },
          { zh: "你不必担心。", pinyin: "Nǐ búbì dānxīn.", en: "You needn't worry." },
        ],
      },
      {
        heading: "值得, 值, 尽量, 千万",
        body: [
          "值得 (zhíde) + verb: worth doing. 值 + amount: worth (money). 值钱: valuable. 尽量 (jǐnliàng) + verb: as much as possible, do your best to. 千万 (qiānwàn) + 要 / 别: be absolutely sure to / whatever you do, don't.",
        ],
        examples: [
          { zh: "这本书很值得一看。", pinyin: "Zhè běn shū hěn zhíde yí kàn.", en: "This book is well worth reading." },
          { zh: "这块表值多少钱？", pinyin: "Zhè kuài biǎo zhí duōshao qián?", en: "How much is this watch worth?" },
          { zh: "我尽量早点儿来。", pinyin: "Wǒ jǐnliàng zǎo diǎnr lái.", en: "I'll try to come as early as I can." },
          { zh: "你千万别告诉他！", pinyin: "Nǐ qiānwàn bié gàosu tā!", en: "Whatever you do, don't tell him!" },
        ],
      },
      {
        heading: "The certainty scale",
        body: [
          "From certain to impossible. 恐怕 (kǒngpà) is \"I'm afraid (that)\": a likely outcome you don't welcome. 估计 is \"I reckon\".",
        ],
        table: {
          headers: ["Word", "How sure"],
          rows: [
            ["必然", "inevitably (formal)"],
            ["一定 / 肯定", "definitely"],
            ["大概 / 估计 / 恐怕", "probably"],
            ["可能 / 也许", "maybe"],
            ["不一定", "not necessarily"],
            ["不可能", "impossible"],
          ],
        },
        examples: [
          { zh: "他肯定知道。", pinyin: "Tā kěndìng zhīdao.", en: "He definitely knows." },
          { zh: "恐怕他今天来不了了。", pinyin: "Kǒngpà tā jīntiān lái bu liǎo le.", en: "I'm afraid he won't be able to come today." },
        ],
      },
      {
        heading: "往往, 常常, 通常, 总是",
        body: [
          "常常 is \"often\". 通常 (tōngcháng) is \"usually, as a rule\". 总是 is \"always\". 往往 (wǎngwǎng) is \"tends to, under these conditions\": it generalises from experience and isn't used for plans or one person's future.",
        ],
        examples: [
          { zh: "周末超市里往往人很多。", pinyin: "Zhōumò chāoshì li wǎngwǎng rén hěn duō.", en: "Supermarkets tend to be crowded at weekends." },
          { zh: "我通常七点起床。", pinyin: "Wǒ tōngcháng qī diǎn qǐ chuáng.", en: "I usually get up at seven." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "这个电影值得。",
        right: "这个电影值得看。",
        rightPinyin: "Zhège diànyǐng zhíde kàn.",
        why: "值得 needs a verb: worth doing what? (很值得 alone works only as a reply.)",
      },
      {
        wrong: "以后我往往去健身房。",
        right: "以后我会常常去健身房。",
        rightPinyin: "Yǐhòu wǒ huì chángcháng qù jiànshēnfáng.",
        why: "往往 describes tendencies observed so far, not plans for the future.",
      },
      {
        wrong: "你千万要不说。",
        right: "你千万不要说。",
        rightPinyin: "Nǐ qiānwàn bú yào shuō.",
        why: "千万 is followed directly by 要 or by 不要 / 别.",
      },
    ],
    faqs: [
      {
        q: "Does 恐怕 mean I'm scared?",
        a: "Not here. 恐怕 softens unwelcome news: \"I'm afraid that ...\". For being scared, use 怕 or 害怕.",
      },
      {
        q: "What's the difference between 一定 and 肯定?",
        a: "Very close. 肯定 sounds a bit more like a confident judgement, 一定 can also be a demand (你一定要来). Both work for \"definitely\".",
      },
    ],
    related: ["how-sure-maybe-surely", "should-must-may", "cause-and-no-choice"],
    lessons: ["zh-b1-generalising", "zh-b2-kongpa", "zh-b1-dare-need", "zh-b1-worth-it", "zh-b1-do-your-best", "zh-b1-certainty-scale"],
  },
  {
    slug: "prepositions-b1",
    title: "B1 Prepositions: 对, 关于, 为, 按照, 朝 and 通过",
    description:
      "对 (toward, to) vs 关于 (about), 为 (for someone) vs 为了 (in order to), 按照 (according to), 往, 向 and 朝 (toward), 通过 and 利用 (by means of), and position words like 周围 and 背后.",
    level: "B1",
    hsk: "HSK 3",
    intro: [
      "Chinese prepositions sit before the verb with their noun, and each has a narrower meaning than its English counterpart. \"About\" is 关于 for a topic but 对 for an attitude; \"for\" is 为 for a person but 为了 for a goal.",
    ],
    sections: [
      {
        heading: "对 vs 关于",
        body: [
          "对 (duì) + person or thing: attitude or effect toward it. It appears in set frames like 对…感兴趣 (be interested in), 对…好 (be kind to), 对…有好处 (be good for). 关于 (guānyú) is \"about, on the topic of\", usually before a noun with 的 or at the start of a sentence.",
        ],
        examples: [
          { zh: "他对我很好。", pinyin: "Tā duì wǒ hěn hǎo.", en: "He's very good to me." },
          { zh: "我对历史很感兴趣。", pinyin: "Wǒ duì lìshǐ hěn gǎn xìngqù.", en: "I'm very interested in history." },
          { zh: "这是一本关于中国历史的书。", pinyin: "Zhè shì yì běn guānyú Zhōngguó lìshǐ de shū.", en: "This is a book about Chinese history." },
        ],
      },
      {
        heading: "为 vs 为了",
        body: [
          "为 (wèi) + person + verb: for someone, on their behalf (为大家服务), and with feelings (为你高兴). 为了 (wèile) + goal: in order to.",
        ],
        examples: [
          { zh: "他们为大家服务。", pinyin: "Tāmen wèi dàjiā fúwù.", en: "They serve everyone." },
          { zh: "为了健康，他不再抽烟了。", pinyin: "Wèile jiànkāng, tā bú zài chōu yān le.", en: "He's stopped smoking for his health." },
        ],
      },
      {
        heading: "按照, 按",
        body: [
          "按照 (ànzhào) + rule or plan: according to. 按时 is \"on time\". 按 + unit: by the (hour, person).",
        ],
        examples: [
          { zh: "请按照要求做。", pinyin: "Qǐng ànzhào yāoqiú zuò.", en: "Please do it as required." },
          { zh: "这里按小时收费。", pinyin: "Zhèlǐ àn xiǎoshí shōu fèi.", en: "They charge by the hour here." },
        ],
      },
      {
        heading: "往, 向, 朝",
        body: [
          "往 (wǎng) + direction + verb gives directions. 向 (xiàng) + person or direction: toward, and with verbs like 学习 and 介绍, \"from\" or \"to\" a person. 朝 (cháo) is \"facing\": 房子朝南 (the house faces south).",
        ],
        examples: [
          { zh: "他向我走过来。", pinyin: "Tā xiàng wǒ zǒu guòlai.", en: "He walked toward me." },
          { zh: "我们的房子朝南。", pinyin: "Wǒmen de fángzi cháo nán.", en: "Our house faces south." },
        ],
      },
      {
        heading: "通过, 利用, and positions",
        body: [
          "通过 (tōngguò) + means: through, by means of. 利用 (lìyòng) + resource: make use of. 用 A 来 + verb: use A to do. For position, B1 adds 底下 (underneath), 背后 (behind, also figurative), 周围 (around) and written 内 (室内, 国内).",
        ],
        examples: [
          { zh: "我们是通过朋友认识的。", pinyin: "Wǒmen shì tōngguò péngyou rènshi de.", en: "We met through friends." },
          { zh: "他利用周末的时间学习。", pinyin: "Tā lìyòng zhōumò de shíjiān xuéxí.", en: "He uses his weekends to study." },
          { zh: "学校周围有很多饭馆。", pinyin: "Xuéxiào zhōuwéi yǒu hěn duō fànguǎn.", en: "There are lots of restaurants around the school." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "我感兴趣历史。",
        right: "我对历史感兴趣。",
        rightPinyin: "Wǒ duì lìshǐ gǎn xìngqù.",
        why: "感兴趣 can't take an object. The topic goes before it with 对.",
      },
      {
        wrong: "他关于我很好。",
        right: "他对我很好。",
        rightPinyin: "Tā duì wǒ hěn hǎo.",
        why: "Attitude toward someone is 对. 关于 is only for topics.",
      },
      {
        wrong: "我为了你高兴。",
        right: "我为你高兴。",
        rightPinyin: "Wǒ wèi nǐ gāoxìng.",
        why: "Feeling something for someone takes 为. 为了 introduces a purpose.",
      },
    ],
    faqs: [
      {
        q: "Is 向 the same as 往?",
        a: "In directions they overlap: 向前走 and 往前走 both mean go straight ahead. Only 向 works with people (向他学习), and only 往 is used for destinations of transport (开往北京的火车, a train bound for Beijing).",
      },
      {
        q: "Can 对 also mean \"correct\"?",
        a: "Yes, as an adjective: 对 (right), 不对 (wrong). As a preposition it means toward or to.",
      },
    ],
    related: ["gei-rang-and-toward", "cause-and-no-choice", "zai-and-position-words"],
    lessons: ["zh-b1-dui-guanyu", "zh-b1-around-behind", "zh-b1-toward", "zh-b1-according-to", "zh-b1-wei-for", "zh-b1-ways-means"],
  },
  {
    slug: "describing-scenes",
    title: "Long Modifiers and Scene Descriptions: 我昨天买的书, 墙上挂着一张地图",
    description:
      "Relative clauses before the noun with 的 (我昨天买的书, 写这篇文章的人), where 那本 and 这个 go, dropping the noun (我要的是…), and existential sentences: place + verb + 着 + thing.",
    level: "B1",
    hsk: "HSK 3",
    intro: [
      "English puts descriptions of a noun after it: \"the book that I bought yesterday\". Chinese puts them all before the noun, joined with 的: 我昨天买的书. There's no word for \"that\", \"who\" or \"which\".",
      "The same before-the-noun habit appears in scene descriptions, where the place comes first and the thing last.",
    ],
    sections: [
      {
        heading: "Clause + 的 + noun",
        body: [
          "Take the clause, drop the noun out of it, add 的, then put the noun at the end. It works for subjects (the person who wrote it) and objects (the book I bought).",
        ],
        examples: [
          { zh: "这是我昨天买的书。", pinyin: "Zhè shì wǒ zuótiān mǎi de shū.", en: "This is the book I bought yesterday." },
          { zh: "写这篇文章的人是谁？", pinyin: "Xiě zhè piān wénzhāng de rén shì shéi?", en: "Who's the person who wrote this article?" },
          { zh: "在门口等你的那个人是谁？", pinyin: "Zài ménkǒu děng nǐ de nàge rén shì shéi?", en: "Who's that person waiting for you at the door?" },
        ],
      },
      {
        heading: "Demonstratives and dropping the noun",
        body: [
          "这 / 那 + measure word can go before the whole clause or right before the noun: 那本我昨天买的书 or 我昨天买的那本书. If the noun is obvious, drop it: 我要的是这个 (what I want is this one).",
        ],
        examples: [
          { zh: "我昨天买的那本书很有意思。", pinyin: "Wǒ zuótiān mǎi de nà běn shū hěn yǒu yìsi.", en: "That book I bought yesterday is very interesting." },
          { zh: "我想要的不是这个。", pinyin: "Wǒ xiǎng yào de bú shì zhège.", en: "This isn't what I wanted." },
        ],
      },
      {
        heading: "Place + verb + 着 + thing",
        body: [
          "To describe a scene, put the place first, then a position verb with 着, then the number and the thing: 墙上挂着一张地图, \"on the wall hangs a map\". Compare 有 (there is), 是 (what occupies the place) and verb + 着 (how it's positioned).",
        ],
        table: {
          headers: ["Pattern", "Example", "Focus"],
          rows: [
            ["place + 有 + thing", "墙上有一张地图。", "there is"],
            ["place + 是 + thing", "房子前面是一个公园。", "what the place is"],
            ["place + verb 着 + thing", "墙上挂着一张地图。", "how it's positioned"],
          ],
        },
        examples: [
          { zh: "墙上挂着一张地图。", pinyin: "Qiáng shang guà zhe yì zhāng dìtú.", en: "There's a map hanging on the wall." },
          { zh: "门口站着一个人。", pinyin: "Ménkǒu zhàn zhe yí ge rén.", en: "Someone is standing at the door." },
          { zh: "桌子上放着几本书。", pinyin: "Zhuōzi shang fàng zhe jǐ běn shū.", en: "There are a few books on the table." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "那个人谁在门口等你？",
        right: "在门口等你的那个人是谁？",
        rightPinyin: "Zài ménkǒu děng nǐ de nàge rén shì shéi?",
        why: "There's no relative \"who\". The whole description goes before the noun with 的.",
      },
      {
        wrong: "书我昨天买的很有意思。",
        right: "我昨天买的书很有意思。",
        rightPinyin: "Wǒ zuótiān mǎi de shū hěn yǒu yìsi.",
        why: "The description comes before the noun, not after it.",
      },
      {
        wrong: "一张地图挂着在墙上。",
        right: "墙上挂着一张地图。",
        rightPinyin: "Qiáng shang guà zhe yì zhāng dìtú.",
        why: "In a scene description the place comes first, the thing last.",
      },
    ],
    faqs: [
      {
        q: "How long can a modifier be?",
        a: "As long as you like, but very long ones are hard to follow. In speech, people often split them: 我昨天买了一本书，很有意思.",
      },
      {
        q: "Why is the thing in an existential sentence always 一张, 一个, 几本?",
        a: "Because it's being introduced as new, like English \"a map\". A known thing would use 在: 地图在墙上.",
      },
    ],
    related: ["de-possession-and-description", "zhe-states-and-manner", "you-have-and-there-is"],
    lessons: ["zh-b1-long-modifiers", "zh-b1-existential"],
  },
];
