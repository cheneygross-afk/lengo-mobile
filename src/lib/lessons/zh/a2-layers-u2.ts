// Synced from cheneygross-afk/lengo:src/lib/lessons/zh/a2-layers-u2.ts by scripts/sync-content.mjs -- edit it there, not here.
// A2 unit 2 practice lessons (比, 没有…那么/一样, 得, 的/地/得, 越…越,
// clothes, 还是/或者), drafted from their specs in specs.ts.

import { ex, fb, layer, listen, mc, ms, mt, say, sec, toEn, toZh, wo, zh } from "./authoring";
import { ZH_A2_SPEC as S } from "./specs";

const C = "Complete (characters or pinyin).";

export const ZH_A2_LAYERS_U2 = [
  layer(
    S,
    "zh-a2d-bi",
    "Pattern Practice: A 比 B + Adjective (+ How Much)",
    "比 sentences with every adjective you know, then with a little (一点儿), a lot (多了) and exact amounts.",
    "6 min",
    [
      sec(
        "The frame",
        [
          "A 比 B + adjective (+ difference). No 很. 更 for \"even more.\" Differences: 一点儿 (a little), 多了 (much), or a number: 大三岁, 贵十块.",
        ],
        [ex("这件比那件贵十块。", "Zhè jiàn bǐ nà jiàn guì shí kuài.", "This one is ten kuai more than that one."), ex("今天比昨天热多了。", "Jīntiān bǐ zuótiān rè duō le.", "Today is much hotter than yesterday.")],
        [mc("My sister is two years younger than me:", ["我妹妹比我小两岁。", "我妹妹比我两岁小。", "我妹妹小比我两岁。", "我妹妹比我很小两岁。"], 0, "Adjective, then the difference.")]
      ),
    ],
    [
      listen("哥哥比我高一点儿。", "How does the speaker compare with his brother?", ["The brother is a little taller.", "The speaker is taller.", "The brother is much taller.", "They're the same height."], 0, "一点儿: a little."),
      mc("Which is wrong?", ["我比他很忙。", "我比他忙。", "我比他更忙。", "我比他忙多了。"], 0, "No 很 in a 比 sentence."),
      fb(C, "北京___上海冷。(Beijing is colder than Shanghai.)", "比", "bǐ", "A 比 B + adjective."),
      fb(C, "这本书比那本便宜五___。(This book is five kuai cheaper.)", "块", "kuài", "The difference after the adjective."),
      fb(C, "这家饭店比那家___好。(This restaurant is even better than that one.)", "更", "gèng", "更: even more."),
      fb(C, "今天比昨天热___了。(Today is much hotter.)", "多", "duō", "多了: much more."),
      toZh("Coffee is more expensive than tea.", "咖啡比茶贵。", "Kāfēi bǐ chá guì.", "A 比 B + 贵."),
      toZh("I'm three years older than him.", "我比他大三岁。", "Wǒ bǐ tā dà sān suì.", "大 + 三岁."),
      toZh("This one is a little cheaper.", "这个便宜一点儿。", "Zhège piányi yìdiǎnr.", "Adjective + 一点儿.", ["这个比较便宜。", "Zhège bǐjiào piányi."]),
      say("今天比昨天冷多了。", "今天比昨天冷多了: today is much colder than yesterday.", "lěng duō le: low, then high, then light.", "Compare today's weather with yesterday's."),
    ]
  ),

  layer(
    S,
    "zh-a2r-comparing",
    "Contrast: 比, 没有…那么 and 一样",
    "Three ways to compare -- more than, not as … as, the same as -- side by side, so you can pick the right one.",
    "7 min",
    [
      sec(
        "Three frames",
        [
          `More: ${zh("A 比 B 高", "A bǐ B gāo")}. Less: ${zh("A 没有 B (那么) 高", "A méiyǒu B (nàme) gāo")}. Same: ${zh("A 跟 B 一样高", "A gēn B yíyàng gāo")}.`,
          "The negative of 比 is normally 没有, not 不比: 我没有他高 (I'm not as tall as him).",
        ],
        [
          ex("我比他高。", "Wǒ bǐ tā gāo.", "I'm taller than him."),
          ex("我没有他高。", "Wǒ méiyǒu tā gāo.", "I'm not as tall as him."),
          ex("我跟他一样高。", "Wǒ gēn tā yíyàng gāo.", "I'm as tall as him."),
        ],
        [mc("I'm not as tired as you:", ["我没有你累。", "我比你不累。", "我跟你不累。", "我没比你累。"], 0, "Less: 没有.")]
      ),
    ],
    [
      mt("Match each sentence to what it means.", [["我比他高", "taller"], ["我没有他高", "shorter"], ["我跟他一样高", "the same height"]], "More, less, the same."),
      ms("Which mean \"Shanghai is warmer than Beijing\"? (Choose all that apply.)", ["上海比北京热。", "北京没有上海热。", "北京比上海热。", "上海跟北京一样热。"], [0, 1], "Two ways round: 比 or 没有."),
      listen("这个跟那个一样。", "What does the speaker say?", ["They're the same.", "This one is better.", "That one is bigger.", "They're different."], 0, "一样: the same."),
      fb(C, "我___我姐姐忙。(I'm not as busy as my older sister.)", "没有", "méiyǒu", "Less: A 没有 B + adjective."),
      fb(C, "我跟我哥哥___高。(I'm as tall as my brother.)", "一样", "yíyàng", "跟 … 一样."),
      fb(C, "今天___昨天热。(Today is hotter than yesterday.)", "比", "bǐ", "More: 比."),
      toZh("This city isn't as big as Beijing.", "这个城市没有北京大。", "Zhège chéngshì méiyǒu Běijīng dà.", "A 没有 B + adjective.", ["这个城市没有北京那么大。", "Zhège chéngshì méiyǒu Běijīng nàme dà."]),
      toZh("We're the same age.", "我们一样大。", "Wǒmen yíyàng dà.", "一样 + 大 (age).", ["我们年龄一样。", "Wǒmen niánlíng yíyàng.", "我们一样大岁数。"]),
      toEn("我的手机没有你的那么贵。", "Wǒ de shǒujī méiyǒu nǐ de nàme guì.", "My phone isn't as expensive as yours.", "没有…那么.", ["My phone is not as expensive as yours.", "My phone's not as expensive as yours.", "My phone is cheaper than yours."]),
      say("我跟你一样高。", "我跟你一样高: I'm as tall as you.", "yíyàng: 一 rises before yàng.", "Tell a friend you're the same height."),
    ]
  ),

  layer(
    S,
    "zh-a2d-de",
    "Pattern Practice: Verb + 得 + How Well",
    "说得很好, 跑得很快, 写得不好: comment on how things are done, with and without an object.",
    "6 min",
    [
      sec(
        "Two frames",
        [
          "No object: verb + 得 + description -- 他跑得很快. With an object: repeat the verb (他说中文说得很好) or put the object first (他中文说得很好).",
          "Negative: 得 + 不 + adjective. Question: 得 + 怎么样？",
        ],
        [ex("你唱得真好！", "Nǐ chàng de zhēn hǎo!", "You sing really well!"), ex("我写汉字写得很慢。", "Wǒ xiě Hànzì xiě de hěn màn.", "I write characters slowly.")],
        [mc("She cooks well:", ["她做饭做得很好。", "她做饭得很好。", "她做得饭很好。", "她很好做饭得。"], 0, "Repeat the verb before 得.")]
      ),
    ],
    [
      listen("他跑得很快。", "What does the speaker say?", ["He runs fast.", "He runs a lot.", "He ran yesterday.", "He wants to run."], 0, "跑得很快: runs fast."),
      mc("你考得怎么样？ asks:", ["How did your exam go?", "When is your exam?", "Did you take the exam?", "Is the exam hard?"], 0, "得 + 怎么样."),
      fb(C, "她说___很快。(She speaks fast.)", "得", "de", "Verb + 得 + description."),
      fb(C, "我睡得不___。(I didn't sleep well.)", "好", "hǎo", "得 + 不 + adjective."),
      fb(C, "他打篮球打得很___。(He plays basketball really well.)", "好", "hǎo", "Repeat the verb, then 得."),
      fb(C, "你来得太___了！(You're too late!)", "晚", "wǎn", "来得太晚: too late."),
      toZh("He swims very well.", "他游泳游得很好。", "Tā yóuyǒng yóu de hěn hǎo.", "Repeat the verb, then 得.", ["他游得很好。", "Tā yóu de hěn hǎo.", "他游泳游得非常好。"]),
      toZh("You speak too fast.", "你说得太快了。", "Nǐ shuō de tài kuài le.", "说 + 得 + 太快了."),
      toZh("I don't write characters well.", "我汉字写得不好。", "Wǒ Hànzì xiě de bù hǎo.", "Object first, then verb + 得.", ["我写汉字写得不好。", "Wǒ xiě Hànzì xiě de bù hǎo.", "我写得不好。", "Wǒ xiě de bù hǎo."]),
      say("你中文说得真好！", "你中文说得真好: your Chinese is really good!", "zhēn hǎo: high, then a dip.", "Compliment someone's Chinese."),
    ]
  ),

  layer(
    S,
    "zh-a2r-three-de",
    "Error Hunt: 的, 地 or 得?",
    "All three are said de. Spot which one each sentence needs -- and fix the ones that use the wrong one.",
    "7 min",
    [
      sec(
        "The rule, once more",
        [
          "的 before a noun (我的书, 漂亮的衣服). 地 before a verb (高兴地说). 得 after a verb (说得很好).",
          "A quick test: what comes right after the de? A noun → 的. A verb → 地. And if a verb comes right before it, describing how well → 得.",
        ],
        [ex("她是一个认真的学生。", "Tā shì yí ge rènzhēn de xuésheng.", "She's a conscientious student."), ex("她认真地学习。", "Tā rènzhēn de xuéxí.", "She studies conscientiously."), ex("她学得很认真。", "Tā xué de hěn rènzhēn.", "She studies conscientiously.")],
        [mc("Which de? 他慢慢___走了。", ["地", "的", "得"], 0, "A verb follows: 地.")]
      ),
    ],
    [
      mc("What's wrong with 他跑的很快?", ["It should be 得: 跑得很快", "It should be 地", "Nothing", "It needs 了"], 0, "After the verb, how well: 得."),
      mc("What's wrong with 这是我得手机?", ["It should be 的: 我的手机", "It should be 地", "Nothing", "It needs 了"], 0, "Before a noun: 的."),
      ms("Which are correct? (Choose all that apply.)", ["她高兴地笑了。", "这是漂亮的衣服。", "他说的很好。", "你写得很好。"], [0, 1, 3], "说得很好 needs 得."),
      fb(C, "我们要好好___学习。(We need to study hard.)", "地", "de", "Before a verb: 地."),
      fb(C, "他唱___很好听。(He sings beautifully.)", "得", "de", "After the verb: 得."),
      fb(C, "那是老师___书。(That's the teacher's book.)", "的", "de", "Before a noun: 的."),
      toZh("She said happily.", "她高兴地说。", "Tā gāoxìng de shuō.", "Adjective + 地 + verb."),
      toZh("He drives fast.", "他开车开得很快。", "Tā kāi chē kāi de hěn kuài.", "Verb + 得 + how.", ["他开得很快。", "Tā kāi de hěn kuài."]),
      toEn("请认真地听。", "Qǐng rènzhēn de tīng.", "Please listen carefully.", "认真地 + verb.", ["Listen carefully, please.", "Please listen attentively.", "Please listen closely."]),
      say("他高兴地说：\"谢谢！\"", "他高兴地说：谢谢: he said happily, \"Thank you!\"", "All three de sound the same: light de.", "Read the sentence aloud."),
    ]
  ),

  layer(
    S,
    "zh-a2d-yue",
    "Circuit: 越来越 and 越…越",
    "Round after round: things that keep changing (越来越) and \"the more…, the more…\" (越 A 越 B).",
    "6 min",
    [
      sec(
        "Two frames",
        [
          "越来越 + adjective (+ 了): 越来越冷了 -- it keeps getting colder. 越 + A + 越 + B: 越学越喜欢 -- the more I learn, the more I like it.",
          "No 很 with either.",
        ],
        [ex("他的中文越来越好。", "Tā de Zhōngwén yuè lái yuè hǎo.", "His Chinese keeps getting better."), ex("雨越下越大。", "Yǔ yuè xià yuè dà.", "The rain keeps getting heavier.")],
        [mc("More and more expensive:", ["越来越贵", "越来越很贵", "越贵越来", "越来贵越"], 0, "越来越 + adjective.")]
      ),
    ],
    [
      listen("天气越来越冷了。", "What's happening?", ["It's getting colder and colder.", "It's very cold.", "It's warming up.", "It was cold yesterday."], 0, "越来越冷: colder and colder."),
      mc("越多越好 means:", ["the more the better", "more and more", "too many", "better than more"], 0, "越 A 越 B."),
      fb(C, "他越说越___。(The more he talks, the faster he goes.)", "快", "kuài", "越 A 越 B."),
      fb(C, "她越来越___了。(She's getting more and more beautiful.)", "漂亮", "piàoliang", "越来越 + adjective."),
      fb(C, "这本书我越___越喜欢。(The more I read this book, the more I like it.)", "看", "kàn", "越 + verb + 越 + feeling."),
      fb(C, "人越来越___了。(There are more and more people.)", "多", "duō", "越来越多: more and more."),
      toZh("It's getting hotter and hotter.", "越来越热了。", "Yuè lái yuè rè le.", "越来越 + 热.", ["天气越来越热了。", "Tiānqì yuè lái yuè rè le.", "天越来越热了。", "Tiān yuè lái yuè rè le."]),
      toZh("The more I learn, the more I like it.", "我越学越喜欢。", "Wǒ yuè xué yuè xǐhuan.", "越 A 越 B."),
      toZh("The sooner the better.", "越快越好。", "Yuè kuài yuè hǎo.", "越 A 越 B.", ["越早越好。", "Yuè zǎo yuè hǎo."]),
      say("我的中文越来越好了！", "我的中文越来越好了: my Chinese keeps getting better!", "Keep each yuè falling.", "Tell someone your Chinese is improving."),
    ]
  ),

  layer(
    S,
    "zh-a2r-clothes",
    "Dialogue: Buying a Jacket",
    "A shop dialogue: asking for a colour, trying on, a bigger size, comparing two jackets and bargaining.",
    "7 min",
    [
      sec(
        "The dialogue",
        ["Anna is shopping for a jacket (外套, wàitào)."],
        [
          ex("我想买一件外套。", "Wǒ xiǎng mǎi yí jiàn wàitào.", "I'd like to buy a jacket."),
          ex("你喜欢什么颜色？", "Nǐ xǐhuan shénme yánsè?", "What colour do you like?"),
          ex("蓝色的。我可以试试吗？", "Lánsè de. Wǒ kěyǐ shìshi ma?", "Blue. Can I try it on?"),
          ex("有点儿小，有大一点儿的吗？", "Yǒudiǎnr xiǎo, yǒu dà yìdiǎnr de ma?", "It's a bit small -- do you have a bigger one?"),
          ex("这件比那件贵，可是更好看。", "Zhè jiàn bǐ nà jiàn guì, kěshì gèng hǎokàn.", "This one costs more than that one, but it looks better."),
          ex("便宜一点儿吧！", "Piányi yìdiǎnr ba!", "Can you make it a bit cheaper?"),
        ],
        [mc("Why does Anna ask for another jacket?", ["It's a bit small.", "It's the wrong colour.", "It's too expensive.", "It's too big."], 0, "有点儿小: a bit small.")]
      ),
      sec(
        "有点儿 vs. 一点儿",
        [
          `${zh("有点儿", "yǒudiǎnr")} + adjective: \"a bit (too)\" -- a mild complaint: 有点儿贵. Adjective + ${zh("一点儿", "yìdiǎnr")}: \"a bit more\" -- in comparisons and requests: 便宜一点儿.`,
        ],
        [ex("有点儿贵。", "Yǒudiǎnr guì.", "It's a bit pricey.")],
        [mc("Can you make it a bit cheaper?", ["便宜一点儿吧！", "有点儿便宜吧！", "一点儿便宜吧！", "便宜有点儿吧！"], 0, "Adjective + 一点儿 for \"a bit more.\"")]
      ),
    ],
    [
      mt("Match the colour.", [["白色", "white"], ["绿色", "green"], ["黑色", "black"], ["红色", "red"]], "Colour + 色."),
      listen("有大一点儿的吗？", "What is the customer asking for?", ["A bigger one", "A cheaper one", "Another colour", "A smaller one"], 0, "大一点儿: bigger."),
      fb(C, "我想买一___外套。(I'd like to buy a jacket.)", "件", "jiàn", "Jackets and tops: 件."),
      fb(C, "这条裤子___点儿长。(These trousers are a bit long.)", "有", "yǒu", "有点儿 + adjective: a bit too."),
      fb(C, "你喜欢什么___？(What colour do you like?)", "颜色", "yánsè", "颜色: colour."),
      toZh("Can I try it on?", "我可以试试吗？", "Wǒ kěyǐ shìshi ma?", "可以 + 试试 + 吗.", ["我能试试吗？", "Wǒ néng shìshi ma?", "可以试试吗？", "Kěyǐ shìshi ma?"]),
      toZh("It's a bit expensive.", "有点儿贵。", "Yǒudiǎnr guì.", "有点儿 + adjective.", ["有一点儿贵。", "Yǒu yìdiǎnr guì."]),
      toEn("这件比那件好看。", "Zhè jiàn bǐ nà jiàn hǎokàn.", "This one looks better than that one.", "比 + 好看.", ["This one is nicer than that one.", "This one looks nicer than that one.", "This is prettier than that one.", "This one is prettier than that one."]),
      say("便宜一点儿吧！", "便宜一点儿吧: make it a bit cheaper!", "Say it with a smile -- bargaining is friendly.", "Bargain at a market stall."),
    ],
    { previews: ["grammar.yinggai-keyi"] }
  ),

  layer(
    S,
    "zh-a2d-or",
    "Circuit: 还是 or 或者?",
    "Rapid rounds of \"or\": 还是 when you're asking someone to choose, 或者 when you're stating options.",
    "6 min",
    [
      sec(
        "Ask or state",
        [
          "Asking for a choice: 还是, no 吗 -- 你喝茶还是喝咖啡？ Stating options: 或者 -- 喝茶或者咖啡都可以.",
        ],
        [ex("你要红的还是蓝的？", "Nǐ yào hóng de háishi lán de?", "Do you want the red one or the blue one?"), ex("星期六或者星期天都行。", "Xīngqīliù huòzhě xīngqītiān dōu xíng.", "Saturday or Sunday are both fine.")],
        [mc("Is he a teacher or a student? (asking)", ["他是老师还是学生？", "他是老师或者学生？", "他是老师还是学生吗？", "他是老师和学生？"], 0, "A choice question: 还是.")]
      ),
    ],
    [
      listen("你今天去还是明天去？", "What is being asked?", ["Today or tomorrow?", "Are you going today?", "Today and tomorrow?", "Where are you going?"], 0, "还是: or, asking."),
      mc("Which is a statement?", ["我们坐地铁或者打车。", "你坐地铁还是打车？", "你坐地铁吗？", "你怎么去？"], 0, "或者 in statements."),
      fb(C, "你喝茶___喝咖啡？(Tea or coffee?)", "还是", "háishi", "Asking: 还是."),
      fb(C, "周末我看书___跑步。(At weekends I read or run.)", "或者", "huòzhě", "Stating: 或者."),
      fb(C, "你要大的___小的？(Big or small?)", "还是", "háishi", "Asking: 还是."),
      fb(C, "今天___明天都可以。(Today or tomorrow, either is fine.)", "或者", "huòzhě", "Stating: 或者."),
      toZh("Is this yours or hers?", "这是你的还是她的？", "Zhè shì nǐ de háishi tā de?", "还是 between the choices."),
      toZh("We can walk or take the bus.", "我们可以走路或者坐公共汽车。", "Wǒmen kěyǐ zǒulù huòzhě zuò gōnggòng qìchē.", "或者 in a statement.", ["我们走路或者坐公共汽车都可以。", "Wǒmen zǒulù huòzhě zuò gōnggòng qìchē dōu kěyǐ."]),
      toZh("Do you want rice or noodles?", "你要米饭还是面条？", "Nǐ yào mǐfàn háishi miàntiáo?", "还是 asks a choice.", ["你吃米饭还是面条？", "Nǐ chī mǐfàn háishi miàntiáo?"]),
      say("你要红的还是蓝的？", "你要红的还是蓝的: red or blue?", "Let your voice rise a little on the first choice.", "Offer a choice of two colours."),
    ],
    { previews: ["grammar.yinggai-keyi"] }
  ),
];
