// Synced from cheneygross-afk/lengo:src/lib/lessons/zh/a2-lessons-u2.ts by scripts/sync-content.mjs -- edit it there, not here.
// Chinese A2, unit 2: comparing and describing -- 比, 没有…那么 and
// 一样, 得 for how well, 地 for how, 越…越, clothes and colours, 还是
// and 或者.

import { ex, fb, lesson, listen, mc, ms, mt, say, sec, toEn, toZh, wo, zh } from "./authoring";

const L = "ZH-A2" as const;
const C = "Complete (characters or pinyin).";

export const ZH_A2_LESSONS_U2 = [
  lesson(
    L,
    "zh-a2-bi-comparison",
    "Comparing with 比",
    "A 比 B + adjective: 我比他高. How to say by how much, and the one word you must never add (很).",
    "8 min",
    [
      sec(
        "A 比 B + adjective",
        [
          `${zh("比", "bǐ")} compares two things: ${zh("我比他高。", "Wǒ bǐ tā gāo.")} (I'm taller than him.) The adjective comes last, and it stays plain.`,
          "Never use 很 in a 比 sentence: \"我比他很高\" is wrong. For \"even more,\" use 更 (gèng): 我比他更高.",
        ],
        [
          ex("今天比昨天冷。", "Jīntiān bǐ zuótiān lěng.", "Today is colder than yesterday."),
          ex("这件比那件贵。", "Zhè jiàn bǐ nà jiàn guì.", "This one is more expensive than that one."),
          ex("她比我更忙。", "Tā bǐ wǒ gèng máng.", "She's even busier than me."),
        ],
        [mc("Today is hotter than yesterday:", ["今天比昨天热。", "今天比昨天很热。", "昨天比今天热。", "今天热比昨天。"], 0, "A 比 B + adjective, no 很.")]
      ),
      sec(
        "By how much",
        [
          `The difference goes after the adjective: ${zh("他比我大两岁。", "Tā bǐ wǒ dà liǎng suì.")} (he's two years older than me). A little: 一点儿. A lot: 多了 or 得多.`,
        ],
        [ex("这个比那个便宜一点儿。", "Zhège bǐ nàge piányi yìdiǎnr.", "This one is a little cheaper than that one."), ex("北京比上海冷多了。", "Běijīng bǐ Shànghǎi lěng duō le.", "Beijing is much colder than Shanghai.")],
        [mc("He's three years older than me:", ["他比我大三岁。", "他比我三岁大。", "他大三岁比我。", "他比我很大三岁。"], 0, "Adjective + amount.")]
      ),
    ],
    [
      mc("哥哥比我高一点儿 means:", ["My older brother is a little taller than me.", "My older brother is much taller.", "I'm taller than my brother.", "My brother is as tall as me."], 0, "一点儿: a little."),
      ms("Which sentences are correct? (Choose all that apply.)", ["我比你忙。", "这本书比那本贵。", "他比我很累。", "今天比昨天热多了。"], [0, 1, 3], "No 很 in a 比 sentence."),
      listen("我比我妹妹大五岁。", "How much older is the speaker than her sister?", ["Five years", "Two years", "Fifteen years", "One year"], 0, "大五岁: five years older."),
      fb(C, "咖啡___茶贵。(Coffee is more expensive than tea.)", "比", "bǐ", "A 比 B + adjective."),
      fb(C, "她比我___高。(She's even taller than me.)", "更", "gèng", "更: even more."),
      fb(C, "这个比那个便宜一___。(This one is a little cheaper.)", "点儿", "diǎnr", "一点儿 after the adjective.", { altAnswers: ["点", "diǎn"] }),
      toZh("Today is colder than yesterday.", "今天比昨天冷。", "Jīntiān bǐ zuótiān lěng.", "A 比 B + 冷."),
      toZh("He is two years older than me.", "他比我大两岁。", "Tā bǐ wǒ dà liǎng suì.", "大 + 两岁 after the adjective."),
      toEn("北京比上海冷多了。", "Běijīng bǐ Shànghǎi lěng duō le.", "Beijing is much colder than Shanghai.", "多了: much more.", ["Beijing is a lot colder than Shanghai.", "Beijing is much colder than Shanghai", "Beijing's much colder than Shanghai."]),
      say("我比他高。", "我比他高 (wǒ bǐ tā gāo): I'm taller than him.", "wǒ bǐ: third + third, so wǒ rises.", "Compare your height with a friend's."),
    ],
    { teaches: ["grammar.bi-comparison"], previews: ["vocab.clothes-colors"] }
  ),

  lesson(
    L,
    "zh-a2-meiyou-comparison",
    "Not As … As, and the Same: 没有 and 一样",
    "A 没有 B (那么) + adjective: not as … as. A 跟 B 一样: the same. The natural way to compare downwards.",
    "8 min",
    [
      sec(
        "没有 … 那么",
        [
          `${zh("我没有他高。", "Wǒ méiyǒu tā gāo.")} (I'm not as tall as him.) This is how Chinese usually says the negative of 比 -- \"不比\" exists but means \"no more … than,\" a contradiction.`,
          `Add ${zh("那么", "nàme")} (that) for emphasis: ${zh("今天没有昨天那么冷。", "Jīntiān méiyǒu zuótiān nàme lěng.")} (today isn't as cold as yesterday).`,
        ],
        [ex("我的中文没有你好。", "Wǒ de Zhōngwén méiyǒu nǐ hǎo.", "My Chinese isn't as good as yours."), ex("这儿没有北京那么热。", "Zhèr méiyǒu Běijīng nàme rè.", "It's not as hot here as in Beijing.")],
        [mc("I'm not as busy as you:", ["我没有你忙。", "我不比你忙。", "我比你不忙。", "我没比你忙。"], 0, "A 没有 B + adjective.")]
      ),
      sec(
        "The same: 跟 … 一样",
        [
          `${zh("A 跟 B 一样", "A gēn B yíyàng")}: A is the same as B. Add an adjective for \"as … as\": ${zh("我跟他一样高。", "Wǒ gēn tā yíyàng gāo.")} (I'm as tall as him.)`,
          "Negative: 不一样 (different): 我跟他不一样.",
        ],
        [ex("这两件衣服一样。", "Zhè liǎng jiàn yīfu yíyàng.", "These two pieces of clothing are the same."), ex("我的想法跟你不一样。", "Wǒ de xiǎngfǎ gēn nǐ bù yíyàng.", "My view is different from yours.")],
        [mc("I'm as tall as him:", ["我跟他一样高。", "我一样他高。", "我跟他高一样。", "我比他一样高。"], 0, "跟 … 一样 + adjective.")]
      ),
    ],
    [
      mc("我没有他那么忙 means:", ["I'm not as busy as him.", "I'm busier than him.", "He's not busy.", "We're equally busy."], 0, "没有 … 那么: not as."),
      mc("Which says they're different?", ["我跟你不一样。", "我跟你一样。", "我比你一样。", "我没有你一样。"], 0, "不一样: different."),
      listen("今天没有昨天那么冷。", "How is today?", ["Not as cold as yesterday", "Colder than yesterday", "As cold as yesterday", "Very hot"], 0, "没有 … 那么冷."),
      fb(C, "我的中文___你好。(My Chinese isn't as good as yours.)", "没有", "méiyǒu", "A 没有 B + adjective."),
      fb(C, "我跟他___高。(I'm as tall as him.)", "一样", "yíyàng", "跟 … 一样 + adjective."),
      fb(C, "这儿没有北京___热。(It's not as hot here as Beijing.)", "那么", "nàme", "那么 for emphasis."),
      toZh("I'm not as tall as my older brother.", "我没有我哥哥高。", "Wǒ méiyǒu wǒ gēge gāo.", "A 没有 B + 高.", ["我没有哥哥高。", "Wǒ méiyǒu gēge gāo.", "我没有我哥哥那么高。", "Wǒ méiyǒu wǒ gēge nàme gāo.", "我没有哥哥那么高。", "Wǒ méiyǒu gēge nàme gāo."]),
      toZh("These two are the same.", "这两个一样。", "Zhè liǎng ge yíyàng.", "一样: the same."),
      toEn("我的手机跟你的一样。", "Wǒ de shǒujī gēn nǐ de yíyàng.", "My phone is the same as yours.", "A 跟 B 一样.", ["My phone is the same as yours", "My phone's the same as yours.", "My mobile is the same as yours."]),
      say("我的中文没有你好。", "我的中文没有你好: my Chinese isn't as good as yours.", "méiyǒu: rising, then a dip.", "Modestly say your Chinese isn't as good as someone's."),
    ],
    { teaches: ["grammar.meiyou-comparison"] }
  ),

  lesson(
    L,
    "zh-a2-de-complement",
    "How Well: Verb + 得 + Description",
    "他说得很好 -- comment on how an action is done with 得. With objects, negatives and questions.",
    "8 min",
    [
      sec(
        "Verb + 得 + adjective",
        [
          `To say how well (fast, late…) someone does something, put ${zh("得", "de")} after the verb and the description after it: ${zh("他跑得很快。", "Tā pǎo de hěn kuài.")} (he runs fast). Here 很 is back: the description is a normal adjective sentence.`,
          `Negative: 得 + 不 + adjective: ${zh("我唱得不好。", "Wǒ chàng de bù hǎo.")} Question: ${zh("他说得怎么样？", "Tā shuō de zěnmeyàng?")}`,
        ],
        [ex("她说得很好。", "Tā shuō de hěn hǎo.", "She speaks very well."), ex("你来得太晚了！", "Nǐ lái de tài wǎn le!", "You're far too late!"), ex("我睡得不好。", "Wǒ shuì de bù hǎo.", "I didn't sleep well.")],
        [mc("He runs fast:", ["他跑得很快。", "他跑很快得。", "他很快跑得。", "他跑的很快地。"], 0, "Verb + 得 + 很快.")]
      ),
      sec(
        "With an object",
        [
          `得 must come right after the verb, so an object needs a trick: repeat the verb, ${zh("他说中文说得很好。", "Tā shuō Zhōngwén shuō de hěn hǎo.")} -- or put the object first: ${zh("他中文说得很好。", "Tā Zhōngwén shuō de hěn hǎo.")}`,
          "\"他说中文得很好\" is wrong: nothing can come between the verb and 得.",
        ],
        [ex("她做饭做得很好吃。", "Tā zuò fàn zuò de hěn hǎochī.", "She cooks really well."), ex("你汉字写得很漂亮。", "Nǐ Hànzì xiě de hěn piàoliang.", "Your characters are beautifully written.")],
        [mc("She speaks English well:", ["她英文说得很好。", "她说英文得很好。", "她说得英文很好。", "她英文得说很好。"], 0, "Object first, then verb + 得.")]
      ),
    ],
    [
      mc("我睡得不好 means:", ["I didn't sleep well.", "I'm not sleepy.", "I don't want to sleep.", "I can't sleep."], 0, "得 + 不好."),
      ms("Which are correct? (Choose all that apply.)", ["他唱得很好。", "他唱歌唱得很好。", "他唱歌得很好。", "他歌唱得很好。"], [0, 1, 3], "Nothing between the verb and 得."),
      listen("你说得很快。", "What does the speaker say?", ["You speak fast.", "You speak well.", "You came early.", "You run fast."], 0, "说得很快: speak fast."),
      fb(C, "他跑___很快。(He runs fast.)", "得", "de", "Verb + 得 + description."),
      fb(C, "你中文说得___？(How's your Chinese?)", "怎么样", "zěnmeyàng", "得 + 怎么样: how well."),
      fb(C, "我写汉字写得不___。(I don't write characters well.)", "好", "hǎo", "得 + 不 + adjective."),
      toZh("She sings very well.", "她唱得很好。", "Tā chàng de hěn hǎo.", "唱 + 得 + 很好.", ["她唱歌唱得很好。", "Tā chàng gē chàng de hěn hǎo.", "她歌唱得很好。", "Tā gē chàng de hěn hǎo."]),
      toZh("You came too late!", "你来得太晚了！", "Nǐ lái de tài wǎn le!", "来 + 得 + 太晚了."),
      toEn("他做饭做得很好吃。", "Tā zuò fàn zuò de hěn hǎochī.", "He cooks really well.", "Repeat the verb, then 得.", ["He's a really good cook.", "He cooks very well.", "His cooking is delicious.", "He cooks well.", "He's a very good cook.", "He cooks delicious food."]),
      say("你中文说得很好！", "你中文说得很好: your Chinese is very good!", "Answer such praise with 哪里哪里 (nǎli nǎli, oh, not at all).", "Compliment someone's Chinese."),
    ],
    { teaches: ["grammar.de-complement"] }
  ),

  lesson(
    L,
    "zh-a2-di-adverbial",
    "的, 地, 得: Three Ways to Say \"de\"",
    "地 before a verb says how something is done (慢慢地走). Put it next to 的 and 得 and the three \"de\" stop being confusing.",
    "7 min",
    [
      sec(
        "Adjective + 地 + verb",
        [
          `${zh("地", "de")} turns a description into a \"how\" before the verb: ${zh("他慢慢地走。", "Tā mànmàn de zǒu.")} (he walks slowly), ${zh("她高兴地说。", "Tā gāoxìng de shuō.")} (she said happily). Doubled adjectives (慢慢, 好好) are very common here.`,
        ],
        [ex("请慢慢地说。", "Qǐng mànmàn de shuō.", "Please speak slowly."), ex("我们要好好地学习。", "Wǒmen yào hǎohǎo de xuéxí.", "We must study hard.")],
        [mc("Please speak slowly:", ["请慢慢地说。", "请说慢慢地。", "请慢慢的说地。", "请说得慢慢。"], 0, "How + 地 + verb.")]
      ),
      sec(
        "Three \"de\", three jobs",
        [
          "的 + noun: description or owner before a thing -- 我的书, 漂亮的衣服.",
          "地 + verb: how, before the action -- 认真地学习 (study conscientiously).",
          "verb + 得: how well, after the action -- 学得很认真 (studies conscientiously).",
          "All three are pronounced de in the neutral tone, so this is purely a writing distinction.",
        ],
        [ex("认真的学生", "rènzhēn de xuésheng", "a conscientious student"), ex("认真地学习", "rènzhēn de xuéxí", "to study conscientiously"), ex("学得很认真", "xué de hěn rènzhēn", "studies conscientiously")],
        [mt("Match each \"de\" to what follows or comes before it.", [["的", "a noun follows"], ["地", "a verb follows"], ["得", "a verb comes before"]], "Noun after 的, verb after 地, verb before 得.")]
      ),
    ],
    [
      mc("Which \"de\"? 她高兴___说：\"太好了！\"", ["地", "的", "得"], 0, "A verb follows: 地."),
      mc("Which \"de\"? 这是我___手机。", ["的", "地", "得"], 0, "A noun follows: 的."),
      mc("Which \"de\"? 他跑___很快。", ["得", "的", "地"], 0, "After the verb, how well: 得."),
      fb(C, "请慢慢___说。(Please speak slowly.)", "地", "de", "How + 地 + verb."),
      fb(C, "她是一个认真___学生。(She's a conscientious student.)", "的", "de", "的 + noun."),
      fb(C, "他学___很认真。(He studies conscientiously.)", "得", "de", "Verb + 得."),
      toZh("Please speak slowly.", "请慢慢地说。", "Qǐng mànmàn de shuō.", "慢慢地 + 说.", ["请说慢一点儿。", "Qǐng shuō màn yìdiǎnr."]),
      toEn("他高兴地笑了。", "Tā gāoxìng de xiào le.", "He laughed happily.", "高兴地 + verb.", ["He smiled happily.", "He laughed with joy.", "He gave a happy laugh.", "He smiled with happiness."]),
      wo(["我们", "好好", "地", "学习", "吧"], "Let's study hard.", "How + 地 + verb."),
      say("请慢慢地说。", "请慢慢地说 (qǐng mànmàn de shuō): please speak slowly.", "Useful whenever someone speaks too fast.", "Ask someone to speak slowly."),
    ],
    { teaches: ["grammar.di-adverbial"], previews: ["grammar.yinggai-keyi"] }
  ),

  lesson(
    L,
    "zh-a2-yue-yue",
    "More and More: 越来越 and 越…越",
    "越来越 + adjective for something that keeps changing (越来越冷), and 越 A 越 B for \"the more…, the more….\"",
    "7 min",
    [
      sec(
        "越来越 + adjective",
        [
          `${zh("越来越", "yuè lái yuè")} + adjective: more and more, increasingly. ${zh("天气越来越冷了。", "Tiānqì yuè lái yuè lěng le.")} (It's getting colder and colder.) Like 比, it takes no 很.`,
        ],
        [ex("你的中文越来越好了。", "Nǐ de Zhōngwén yuè lái yuè hǎo le.", "Your Chinese is getting better and better."), ex("东西越来越贵。", "Dōngxi yuè lái yuè guì.", "Things are getting more and more expensive.")],
        [mc("It's getting hotter and hotter:", ["越来越热了。", "越来越很热了。", "越热越来了。", "热越来越了。"], 0, "越来越 + adjective, no 很.")]
      ),
      sec(
        "越 A 越 B",
        [
          `${zh("越 A 越 B", "yuè A yuè B")}: the more A, the more B. ${zh("他越说越快。", "Tā yuè shuō yuè kuài.")} (The more he talked, the faster he went.) ${zh("这本书我越看越喜欢。", "Zhè běn shū wǒ yuè kàn yuè xǐhuan.")}`,
        ],
        [ex("雨越下越大。", "Yǔ yuè xià yuè dà.", "The rain is getting heavier and heavier."), ex("越早越好。", "Yuè zǎo yuè hǎo.", "The sooner the better.")],
        [mc("The sooner the better:", ["越早越好。", "越来越早好。", "早越好越。", "越好越早。"], 0, "越 A 越 B.")]
      ),
    ],
    [
      mc("你的中文越来越好了 means:", ["Your Chinese is getting better and better.", "Your Chinese is very good.", "Your Chinese was better before.", "Your Chinese is better than mine."], 0, "越来越: more and more."),
      mc("雨越下越大 means:", ["The rain keeps getting heavier.", "It rained a lot.", "The rain is stopping.", "It rains more in summer."], 0, "越 A 越 B."),
      listen("天气越来越热了。", "What's happening to the weather?", ["It's getting hotter and hotter.", "It's getting colder.", "It's very hot.", "It's not hot any more."], 0, "越来越热: hotter and hotter."),
      fb(C, "东西越来___贵。(Things are getting more and more expensive.)", "越", "yuè", "越来越 + adjective."),
      fb(C, "他越说___快。(The more he talked, the faster he went.)", "越", "yuè", "越 A 越 B."),
      fb(C, "越多___好。(The more the better.)", "越", "yuè", "越 A 越 B."),
      toZh("It's getting colder and colder.", "越来越冷了。", "Yuè lái yuè lěng le.", "越来越 + 冷 + 了.", ["天气越来越冷了。", "Tiānqì yuè lái yuè lěng le.", "天越来越冷了。", "Tiān yuè lái yuè lěng le."]),
      toZh("The sooner the better.", "越早越好。", "Yuè zǎo yuè hǎo.", "越 A 越 B."),
      toEn("这本书我越看越喜欢。", "Zhè běn shū wǒ yuè kàn yuè xǐhuan.", "The more I read this book, the more I like it.", "越看越喜欢.", ["The more I read this book the more I like it.", "The more I read this book, the more I like it", "I like this book more the more I read it.", "I like this book more and more as I read it."]),
      say("越来越好！", "越来越好 (yuè lái yuè hǎo): better and better!", "Three syllables with yuè: keep each one falling.", "Say things are getting better and better."),
    ],
    { teaches: ["grammar.yue-yue"] }
  ),

  lesson(
    L,
    "zh-a2-clothes-shopping",
    "Clothes, Colours and Trying Things On",
    "Shop for clothes: measure words 件, 条 and 双, colours with 色, trying on and asking for another size.",
    "8 min",
    [
      sec(
        "What you wear",
        [
          `${zh("穿", "chuān")} is \"to wear / put on.\" Clothes have their own measure words: ${zh("件", "jiàn")} for tops and coats (一件衬衫, a shirt), ${zh("条", "tiáo")} for long things like trousers and skirts (一条裤子), ${zh("双", "shuāng")} for pairs (一双鞋, a pair of shoes).`,
        ],
        [ex("一件衬衫", "yí jiàn chènshān", "a shirt"), ex("一条裤子", "yì tiáo kùzi", "a pair of trousers"), ex("一双鞋", "yì shuāng xié", "a pair of shoes"), ex("一条裙子", "yì tiáo qúnzi", "a skirt")],
        [mc("A pair of shoes:", ["一双鞋", "一件鞋", "一条鞋", "一个鞋"], 0, "Pairs: 双.")]
      ),
      sec(
        "Colours and sizes",
        [
          `Colours are colour + ${zh("色", "sè")}: 红色 (red), 白色 (white), 黑色 (black), 蓝色 (blue), 绿色 (green), 黄色 (yellow). Before a noun add 的: 红色的裙子.`,
          `In the shop: ${zh("我可以试试吗？", "Wǒ kěyǐ shìshi ma?")} (can I try it on?), ${zh("有大一点儿的吗？", "Yǒu dà yìdiǎnr de ma?")} (do you have a bigger one?), ${zh("太小了。", "Tài xiǎo le.")}`,
        ],
        [ex("我想买一件白色的衬衫。", "Wǒ xiǎng mǎi yí jiàn báisè de chènshān.", "I'd like to buy a white shirt."), ex("有小一点儿的吗？", "Yǒu xiǎo yìdiǎnr de ma?", "Do you have a smaller one?")],
        [mc("Can I try it on?", ["我可以试试吗？", "我试试可以吗？", "可以我试吗？", "我会试试吗？"], 0, "可以 + 试试: may I try.")]
      ),
    ],
    [
      mt("Match the colour.", [["红色", "red"], ["蓝色", "blue"], ["黑色", "black"], ["黄色", "yellow"]], "Colour + 色."),
      mc("A pair of trousers:", ["一条裤子", "一件裤子", "一双裤子", "一个裤子"], 0, "Long things: 条."),
      listen("我想买一双黑色的鞋。", "What does the speaker want to buy?", ["Black shoes", "A black shirt", "White shoes", "A black skirt"], 0, "一双黑色的鞋."),
      fb(C, "这___衬衫多少钱？(How much is this shirt?)", "件", "jiàn", "Tops: 件."),
      fb(C, "有大一点儿___吗？(Do you have a bigger one?)", "的", "de", "Adjective + 的 for \"one.\""),
      fb(C, "我可以___试吗？(Can I try it on?)", "试", "shì", "试试: try it."),
      toZh("I'd like to buy a red skirt.", "我想买一条红色的裙子。", "Wǒ xiǎng mǎi yì tiáo hóngsè de qúnzi.", "一条 + 红色的 + 裙子.", ["我想买一条红裙子。", "Wǒ xiǎng mǎi yì tiáo hóng qúnzi."]),
      toZh("It's too small.", "太小了。", "Tài xiǎo le.", "太 + adjective + 了: too small."),
      toEn("你穿这件很漂亮。", "Nǐ chuān zhè jiàn hěn piàoliang.", "You look great in this.", "穿 + this one + 很漂亮.", ["You look beautiful in this one.", "This looks very pretty on you.", "You look pretty in this.", "This one looks great on you.", "You look very pretty in this one.", "You look beautiful in this."]),
      say("有小一点儿的吗？", "有小一点儿的吗: do you have a smaller one?", "yìdiǎnr de ma: keep it smooth.", "Ask for a smaller size."),
    ],
    { teaches: ["vocab.clothes-colors"], previews: ["grammar.yinggai-keyi"] }
  ),

  lesson(
    L,
    "zh-a2-haishi-huozhe",
    "Or: 还是 and 或者",
    "Chinese has two words for \"or\": 还是 in questions (tea or coffee?), 或者 in statements (tea or coffee, either is fine).",
    "7 min",
    [
      sec(
        "还是 in questions",
        [
          `When you ask someone to choose, use ${zh("还是", "háishi")}: ${zh("你喝茶还是喝咖啡？", "Nǐ hē chá háishi hē kāfēi?")} (Do you drink tea or coffee?) It's already a question, so no 吗.`,
        ],
        [ex("你今天去还是明天去？", "Nǐ jīntiān qù háishi míngtiān qù?", "Are you going today or tomorrow?"), ex("这是你的还是他的？", "Zhè shì nǐ de háishi tā de?", "Is this yours or his?")],
        [mc("Tea or coffee? (asking)", ["你喝茶还是咖啡？", "你喝茶或者咖啡？", "你喝茶还是咖啡吗？", "你喝茶和咖啡？"], 0, "A choice question: 还是, no 吗.")]
      ),
      sec(
        "或者 in statements",
        [
          `In a statement, \"or\" is ${zh("或者", "huòzhě")}: ${zh("茶或者咖啡都可以。", "Chá huòzhě kāfēi dōu kěyǐ.")} (Tea or coffee, either is fine.) ${zh("我周末看书或者跑步。", "Wǒ zhōumò kàn shū huòzhě pǎobù.")}`,
          "和 (and) only joins nouns; 或者 can join nouns or actions.",
        ],
        [ex("星期六或者星期天都行。", "Xīngqīliù huòzhě xīngqītiān dōu xíng.", "Saturday or Sunday, either works.")],
        [mc("Saturday or Sunday is fine (statement):", ["星期六或者星期天都可以。", "星期六还是星期天都可以。", "星期六和还是星期天。", "星期六还是星期天吗？"], 0, "A statement: 或者.")]
      ),
    ],
    [
      mc("Which is a question?", ["你去还是不去？", "我去或者不去。", "我们走路或者坐车。", "茶或者咖啡都行。"], 0, "还是 asks a choice."),
      ms("Which use \"or\" correctly? (Choose all that apply.)", ["你要大的还是小的？", "我明天或者后天去。", "你喝茶或者咖啡？", "你是老师还是学生？"], [0, 1, 3], "In a choice question, use 还是."),
      listen("你喝茶还是喝咖啡？", "What is being asked?", ["Tea or coffee?", "Do you want tea?", "Tea and coffee?", "Where's the coffee?"], 0, "还是: or, in a question."),
      fb(C, "你是中国人___日本人？(Are you Chinese or Japanese?)", "还是", "háishi", "A choice question: 还是."),
      fb(C, "我们坐地铁___打车都可以。(We can take the subway or a taxi.)", "或者", "huòzhě", "A statement: 或者."),
      fb(C, "这是你的还是他___？(Is this yours or his?)", "的", "de", "他的: his."),
      toZh("Are you going today or tomorrow?", "你今天去还是明天去？", "Nǐ jīntiān qù háishi míngtiān qù?", "还是 between the choices.", ["你今天还是明天去？", "Nǐ jīntiān háishi míngtiān qù?"]),
      toZh("Tea or coffee, either is fine.", "茶或者咖啡都可以。", "Chá huòzhě kāfēi dōu kěyǐ.", "或者 in a statement.", ["茶或者咖啡都行。", "Chá huòzhě kāfēi dōu xíng."]),
      toEn("你要大的还是小的？", "Nǐ yào dà de háishi xiǎo de?", "Do you want the big one or the small one?", "还是 offers a choice.", ["Do you want a big one or a small one?", "Big or small?", "Would you like the big one or the small one?", "Do you want the large one or the small one?", "Would you like a big one or a small one?"]),
      say("你喝茶还是喝咖啡？", "你喝茶还是喝咖啡: tea or coffee?", "Let your voice rise a little on the first choice.", "Offer a guest tea or coffee."),
    ],
    { teaches: ["grammar.haishi-huozhe"], previews: ["grammar.yinggai-keyi"] }
  ),
];
