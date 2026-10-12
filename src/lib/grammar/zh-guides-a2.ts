// Synced from cheneygross-afk/lengo:src/lib/grammar/zh-guides-a2.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ZhGrammarGuide } from "./zh-types";

// A2 (HSK 2) guides. Conventions: ./zh-types.ts and
// src/lib/lessons/zh/README.md (pinyin shows dictionary tones, except 不
// and 一, which are written as spoken; neutral tones unmarked).

export const ZH_GUIDES_A2: ZhGrammarGuide[] = [
  {
    slug: "guo-and-zai-aspect",
    title: "过 and 在: Experiences and Actions in Progress",
    description:
      "Verb + 过 for things you have ever done, 在 / 正在 … 呢 for actions happening right now, and how to choose between 了, 过, 着 and 在.",
    level: "A2",
    hsk: "HSK 2",
    intro: [
      "Chinese verbs don't change for tense, but small aspect words show how an action unfolds. At A1 you met 了 for a completed action. A2 adds two more: 过 (guo) for experience, \"have you ever ...?\", and 在 (zài) before a verb for something in progress, \"I'm doing it right now\".",
      "Think of them as answers to different questions. 了: did it happen? 过: has it ever happened? 在: is it happening now?",
    ],
    sections: [
      {
        heading: "Verb + 过: have ever done",
        body: [
          "过 (neutral tone) goes straight after the verb, before the object. It says the experience is part of your life, usually with the sense that it's over: 我去过北京 means you've been and come back.",
          "Negate with 没 and keep 过: 没去过. Ask with 吗 or 没有.",
        ],
        examples: [
          { zh: "我去过北京。", pinyin: "Wǒ qù guo Běijīng.", en: "I've been to Beijing." },
          { zh: "你吃过北京烤鸭吗？", pinyin: "Nǐ chī guo Běijīng kǎoyā ma?", en: "Have you ever had Peking duck?" },
          { zh: "我没去过中国。", pinyin: "Wǒ méi qù guo Zhōngguó.", en: "I've never been to China." },
          { zh: "你见过他没有？", pinyin: "Nǐ jiàn guo tā méiyǒu?", en: "Have you ever met him?" },
        ],
      },
      {
        heading: "在 / 正在 + verb (+ 呢): in progress",
        body: [
          "在 before a verb means the action is going on. 正在 stresses \"right at this moment\", and 呢 at the end adds a friendly, ongoing feel. Any of the three can do the job alone: 我在吃饭, 我正在吃饭, 我吃饭呢.",
          "The progressive works for the past too, as long as a time is given: 昨天八点我在看书. Negate with 没(在): 我没在看电视.",
        ],
        examples: [
          { zh: "我在吃饭。", pinyin: "Wǒ zài chī fàn.", en: "I'm eating." },
          { zh: "他正在开会呢。", pinyin: "Tā zhèngzài kāi huì ne.", en: "He's in a meeting right now." },
          { zh: "你在做什么？", pinyin: "Nǐ zài zuò shénme?", en: "What are you doing?" },
          { zh: "昨天八点我在看书。", pinyin: "Zuótiān bā diǎn wǒ zài kàn shū.", en: "At eight yesterday I was reading." },
        ],
      },
      {
        heading: "Choosing the aspect",
        body: [
          "Each aspect answers a different question about the action. 着, for a lasting state, has its own guide. Note the negatives: 没 cancels 了 but keeps 过.",
        ],
        table: {
          headers: ["Aspect", "Meaning", "Example", "Negative"],
          rows: [
            ["了", "completed", "我看了那个电影。 I watched that film.", "我没看那个电影。"],
            ["过", "ever, experience", "我看过那个电影。 I've seen that film.", "我没看过那个电影。"],
            ["着", "lasting state", "门开着。 The door is open.", "门没开着。"],
            ["在", "in progress", "我在看电影。 I'm watching a film.", "我没在看电影。"],
          ],
        },
      },
    ],
    mistakes: [
      {
        wrong: "我去北京过。",
        right: "我去过北京。",
        rightPinyin: "Wǒ qù guo Běijīng.",
        why: "过 attaches directly to the verb, before the object.",
      },
      {
        wrong: "我没去过了。",
        right: "我没去过。",
        rightPinyin: "Wǒ méi qù guo.",
        why: "没 cancels 了, but 过 stays.",
      },
      {
        wrong: "我在喜欢他。",
        right: "我很喜欢他。",
        rightPinyin: "Wǒ hěn xǐhuan tā.",
        why: "在 is for actions in progress. States like 喜欢, 知道 and 是 aren't actions and don't take it.",
      },
    ],
    faqs: [
      {
        q: "What's the difference between 我去了北京 and 我去过北京?",
        a: "我去了北京 reports one trip (and you may still be there). 我去过北京 says it's part of your experience: you've been at some point and come back.",
      },
      {
        q: "Do I need 在 every time I'd use \"-ing\" in English?",
        a: "No. Chinese uses it less than English uses \"-ing\". 我明天去北京 (I'm going to Beijing tomorrow) is a plan, not an action in progress, so there's no 在.",
      },
    ],
    related: ["zhe-states-and-manner", "duration-and-frequency", "time-adverbs-yijing-jiu-cai"],
    lessons: ["zh-a2-zai-progressive", "zh-a2-guo-experience", "zh-a2-aspect-choice"],
  },
  {
    slug: "zhe-states-and-manner",
    title: "着: Lasting States and Doing Things in a Certain Way",
    description:
      "Verb + 着 for a state that lasts (门开着, 他穿着红衣服), and verb + 着 + verb for the way something is done (笑着说, 坐着看书).",
    level: "A2",
    hsk: "HSK 2",
    intro: [
      "着 (zhe) describes how things are rather than what happens. 门开了 says the door opened (an event). 门开着 says the door is open (a state that continues). That's the main job of 着: freezing an action into a scene.",
      "Its second job is describing manner: 笑着说 is \"say, smiling\". The verb with 着 is the background, the second verb is the main action.",
    ],
    sections: [
      {
        heading: "Verb + 着: a lasting state",
        body: [
          "Use 着 with verbs whose result can last: open, close, wear, sit, stand, hang, hold. The sentence describes the state, not the moment it began.",
        ],
        examples: [
          { zh: "门开着。", pinyin: "Mén kāi zhe.", en: "The door is open." },
          { zh: "他穿着一件红衣服。", pinyin: "Tā chuān zhe yí jiàn hóng yīfu.", en: "He's wearing a red top." },
          { zh: "她手里拿着一本书。", pinyin: "Tā shǒu li ná zhe yì běn shū.", en: "She's holding a book." },
          { zh: "灯没开着。", pinyin: "Dēng méi kāi zhe.", en: "The light isn't on." },
        ],
      },
      {
        heading: "Verb + 着 + verb: how it's done",
        body: [
          "The first verb, with 着, says the position or manner; the second is the actual action. English often uses \"-ing\" or \"while\" for this.",
        ],
        examples: [
          { zh: "他笑着说：“没关系。”", pinyin: "Tā xiào zhe shuō: “Méi guānxi.”", en: "\"It's fine,\" he said with a smile." },
          { zh: "我喜欢坐着看书。", pinyin: "Wǒ xǐhuan zuò zhe kàn shū.", en: "I like to read sitting down." },
          { zh: "我们走着去吧。", pinyin: "Wǒmen zǒu zhe qù ba.", en: "Let's walk there." },
        ],
      },
      {
        heading: "着 or 在?",
        body: [
          "在 is about an action that's going on: 他在穿衣服 (he's getting dressed). 着 is about the state that results: 他穿着衣服 (he's got clothes on). The same verb can tell two different stories.",
        ],
        table: {
          headers: ["", "Action in progress (在)", "Resulting state (着)"],
          rows: [
            ["穿", "他在穿衣服。 He's getting dressed.", "他穿着衣服。 He's dressed."],
            ["开", "他在开门。 He's opening the door.", "门开着。 The door is open."],
          ],
        },
      },
    ],
    mistakes: [
      {
        wrong: "门开了着。",
        right: "门开着。",
        rightPinyin: "Mén kāi zhe.",
        why: "着 and 了 don't combine on one verb: one describes a state, the other an event.",
      },
      {
        wrong: "他说着笑。 (meaning he said it with a smile)",
        right: "他笑着说。",
        rightPinyin: "Tā xiào zhe shuō.",
        why: "The manner verb with 着 comes first; the main action comes second.",
      },
    ],
    faqs: [
      {
        q: "Can 着 go with any verb?",
        a: "No. It needs a verb that can produce a lasting state or be done in an ongoing way: 开, 关, 穿, 戴, 坐, 站, 拿, 等, 笑. Verbs of instant change like 死 (die) or 到 (arrive) don't take it.",
      },
      {
        q: "What's 墙上挂着一张地图?",
        a: "That's the existential pattern, place + verb + 着 + thing: \"on the wall hangs a map\". It's a B1 point; see the guide on describing scenes.",
      },
    ],
    related: ["guo-and-zai-aspect", "direction-complements", "de-complement-and-di"],
    lessons: ["zh-a2-zhe-state", "zh-a2-zhe-manner"],
  },
  {
    slug: "comparisons-bi",
    title: "Comparisons: 比, 没有…那么, 更, 像 and 一样",
    description:
      "A 比 B + adjective, how to add \"much\" or \"a bit\", not as … as with 没有, even more with 更, and saying things are the same or alike with 一样, 像 and 差不多.",
    level: "A2",
    hsk: "HSK 2",
    intro: [
      "English compares with \"-er than\". Chinese uses 比 (bǐ) between the two things and leaves the adjective in its plain form: 他比我高, \"he compared-to me tall\". There's no -er, and no 很.",
      "The rest of the comparison toolkit hangs off that frame: how much, not as, even more, the same as.",
    ],
    sections: [
      {
        heading: "A 比 B + adjective",
        body: [
          "The difference, if you mention it, goes after the adjective: 多了 or 得多 (much), 一点儿 (a bit), or an exact amount (三岁, 十块).",
        ],
        examples: [
          { zh: "他比我高。", pinyin: "Tā bǐ wǒ gāo.", en: "He's taller than me." },
          { zh: "今天比昨天冷多了。", pinyin: "Jīntiān bǐ zuótiān lěng duō le.", en: "Today is much colder than yesterday." },
          { zh: "这个比那个便宜一点儿。", pinyin: "Zhège bǐ nàge piányi yìdiǎnr.", en: "This one is a bit cheaper than that one." },
          { zh: "我哥哥比我大三岁。", pinyin: "Wǒ gēge bǐ wǒ dà sān suì.", en: "My brother is three years older than me." },
        ],
      },
      {
        heading: "Not as … as: 没有…(那么)",
        body: [
          "The usual negative of a 比 sentence is A 没有 B (那么) + adjective: \"A doesn't reach B's level\". 不比 exists but has a special meaning (\"no more ... than\", contradicting someone), so stick with 没有. 不如 (not as good as) is a shorter, slightly formal option.",
        ],
        examples: [
          { zh: "我没有他那么高。", pinyin: "Wǒ méiyǒu tā nàme gāo.", en: "I'm not as tall as him." },
          { zh: "北京没有上海那么热。", pinyin: "Běijīng méiyǒu Shànghǎi nàme rè.", en: "Beijing isn't as hot as Shanghai." },
          { zh: "坐公交车不如坐地铁快。", pinyin: "Zuò gōngjiāochē bùrú zuò dìtiě kuài.", en: "The bus isn't as fast as the subway." },
        ],
      },
      {
        heading: "Even more: 更",
        body: [
          "更 (gèng) before the adjective means \"even more\". It works in a 比 sentence (他比我更忙) or without one, when the comparison is clear from context. Never put 很 or 非常 in a 比 sentence.",
        ],
        examples: [
          { zh: "我觉得这个更好。", pinyin: "Wǒ juéde zhège gèng hǎo.", en: "I think this one is even better." },
          { zh: "他比我更忙。", pinyin: "Tā bǐ wǒ gèng máng.", en: "He's even busier than me." },
        ],
      },
      {
        heading: "The same and alike: 一样, 像, 差不多",
        body: [
          "A 跟 B 一样 means A is the same as B; add an adjective for \"as ... as\": 我跟他一样高. 像 (xiàng) means \"resemble\": 他像他爸爸. 差不多 (chàbuduō) is \"about the same, nearly\". 不同 and 不一样 mean different.",
        ],
        examples: [
          { zh: "我跟他一样高。", pinyin: "Wǒ gēn tā yíyàng gāo.", en: "I'm as tall as him." },
          { zh: "他很像他爸爸。", pinyin: "Tā hěn xiàng tā bàba.", en: "He looks a lot like his dad." },
          { zh: "这两个差不多。", pinyin: "Zhè liǎng ge chàbuduō.", en: "These two are about the same." },
          { zh: "我的想法跟你的不一样。", pinyin: "Wǒ de xiǎngfǎ gēn nǐ de bù yíyàng.", en: "My view is different from yours." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "他比我很高。",
        right: "他比我高。 / 他比我高多了。",
        rightPinyin: "Tā bǐ wǒ gāo. / Tā bǐ wǒ gāo duō le.",
        why: "No 很, 非常 or 太 in a 比 sentence. To say \"much\", put 多了 after the adjective.",
      },
      {
        wrong: "他比我三岁大。",
        right: "他比我大三岁。",
        rightPinyin: "Tā bǐ wǒ dà sān suì.",
        why: "The amount of difference goes after the adjective.",
      },
      {
        wrong: "我不比他高。 (meaning \"I'm not as tall as him\")",
        right: "我没有他高。",
        rightPinyin: "Wǒ méiyǒu tā gāo.",
        why: "The plain negative of 比 is 没有. 不比 means \"not taller than\", and is used to contradict someone.",
      },
    ],
    faqs: [
      {
        q: "Where does 比 go if there's a verb?",
        a: "Usually before the verb phrase or with the 得 pattern: 他跑得比我快 or 他比我跑得快 (he runs faster than me). Both are fine.",
      },
      {
        q: "Is 一样 one word or two?",
        a: "One word: yíyàng, literally \"one kind\". 一 is said yí before the fourth tone of 样.",
      },
    ],
    related: ["de-complement-and-di", "degree-youdianr-zheme", "opinions-and-comparisons"],
    lessons: ["zh-a2-bi-comparison", "zh-a2-meiyou-comparison", "zh-a2-geng", "zh-a2-xiang", "zh-a2-same-different"],
  },
  {
    slug: "de-complement-and-di",
    title: "得 and 地: How Well and How Something Is Done",
    description:
      "Verb + 得 + description (说得很好), what to do when there's an object (说汉语说得很好), adjective + 地 + verb (慢慢地走), and the three de's: 的, 地, 得.",
    level: "A2",
    hsk: "HSK 2",
    intro: [
      "English uses adverbs for both \"he speaks well\" and \"he spoke quietly\". Chinese splits them. When you evaluate how well someone does something, the comment comes after the verb with 得 (de). When you describe the way they do it, the description comes before the verb with 地 (de).",
      "Both are pronounced exactly like 的, so the difference only shows in writing, and in word order.",
    ],
    sections: [
      {
        heading: "Verb + 得 + comment",
        body: [
          "Use 得 to judge an action: how well, fast, late, clearly. The comment is an adjective phrase, usually with 很 or another degree word. Negate the comment, not the verb: 说得不好.",
        ],
        examples: [
          { zh: "他说得很好。", pinyin: "Tā shuō de hěn hǎo.", en: "He speaks well." },
          { zh: "你来得太晚了。", pinyin: "Nǐ lái de tài wǎn le.", en: "You came too late." },
          { zh: "我唱得不好。", pinyin: "Wǒ chàng de bù hǎo.", en: "I don't sing well." },
          { zh: "她跑得快不快？", pinyin: "Tā pǎo de kuài bu kuài?", en: "Does she run fast?" },
        ],
      },
      {
        heading: "When there's an object",
        body: [
          "Nothing may come between a verb and 得, not even its object. Either say the verb twice (once with the object, once with 得), or move the object to the front.",
        ],
        examples: [
          { zh: "他说汉语说得很流利。", pinyin: "Tā shuō Hànyǔ shuō de hěn liúlì.", en: "He speaks Chinese fluently." },
          { zh: "他汉语说得很好。", pinyin: "Tā Hànyǔ shuō de hěn hǎo.", en: "His Chinese is good. (He speaks Chinese well.)" },
          { zh: "我爸爸开车开得很慢。", pinyin: "Wǒ bàba kāi chē kāi de hěn màn.", en: "My dad drives very slowly." },
        ],
      },
      {
        heading: "Adjective + 地 + verb: the way you do it",
        body: [
          "地 turns a description into an adverb before the verb: 高兴地说 (said happily), 认真地学习 (study conscientiously). Reduplicated adjectives are especially common here: 慢慢地走, 好好地休息. Short everyday phrases often drop 地 or skip it entirely: 大声说 (speak loudly), 快点儿走 (hurry up).",
        ],
        examples: [
          { zh: "他高兴地说：“太好了！”", pinyin: "Tā gāoxìng de shuō: “Tài hǎo le!”", en: "\"Great!\" he said happily." },
          { zh: "请慢慢地说。", pinyin: "Qǐng mànmàn de shuō.", en: "Please speak slowly." },
          { zh: "请大声说。", pinyin: "Qǐng dàshēng shuō.", en: "Please speak up." },
        ],
      },
      {
        heading: "的, 地 and 得",
        body: [
          "All three are pronounced de. The character tells you which slot you're in.",
        ],
        table: {
          headers: ["Character", "Position", "Example"],
          rows: [
            ["的", "description + 的 + noun", "漂亮的衣服 pretty clothes"],
            ["地", "description + 地 + verb", "认真地学习 study hard"],
            ["得", "verb + 得 + comment", "学得很好 learn well"],
          ],
        },
      },
    ],
    mistakes: [
      {
        wrong: "他说汉语得很好。",
        right: "他说汉语说得很好。",
        rightPinyin: "Tā shuō Hànyǔ shuō de hěn hǎo.",
        why: "得 must follow the verb directly. Repeat the verb after the object, or move the object to the front.",
      },
      {
        wrong: "他不说得好。",
        right: "他说得不好。",
        rightPinyin: "Tā shuō de bù hǎo.",
        why: "He does speak; it's the quality that's lacking. Negate the comment after 得.",
      },
      {
        wrong: "他很好地说汉语。",
        right: "他汉语说得很好。",
        rightPinyin: "Tā Hànyǔ shuō de hěn hǎo.",
        why: "Judging how well someone does something is 得's job. 地 describes the manner of a particular action, not a skill.",
      },
    ],
    faqs: [
      {
        q: "Do native speakers mix up 的, 地 and 得?",
        a: "In casual typing, often, especially 的 for the other two. In careful writing the distinction is kept, and exams test it.",
      },
      {
        q: "Can I compare with 得?",
        a: "Yes: 他跑得比我快 (he runs faster than me). The 比 phrase can go after 得 or before the verb.",
      },
    ],
    related: ["comparisons-bi", "result-complements", "degree-youdianr-zheme"],
    lessons: ["zh-a2-de-complement", "zh-a2-de-object", "zh-a2-di-adverbial", "zh-a2-manner"],
  },
  {
    slug: "degree-youdianr-zheme",
    title: "有点儿, 一点儿, 这么, 这样 and 多么: Degree and Exclamations",
    description:
      "有点儿 (a bit too) vs 一点儿 (a bit more), 这么 / 那么 (so) vs 这样 / 那样 (like this), and exclaiming with 多么 and 啊.",
    level: "A2",
    hsk: "HSK 2",
    intro: [
      "English uses \"a bit\" for both \"a bit expensive\" and \"a bit cheaper\". Chinese uses two different words in two different places, and mixing them up is one of the most common A2 mistakes. This guide sorts them out, along with the words for \"so\" and \"like this\".",
    ],
    sections: [
      {
        heading: "有点儿 vs 一点儿",
        body: [
          "有点儿 (yǒudiǎnr) goes before an adjective and usually signals something unwelcome: 有点儿贵 (a bit too expensive), 有点儿累 (a bit tired). 一点儿 (yìdiǎnr) goes after an adjective and means \"a bit more so\", often when comparing or asking: 便宜一点儿 (a bit cheaper).",
          "一点儿也 / 都 + negative means \"not at all\": 一点儿也不贵.",
        ],
        table: {
          headers: ["", "Position", "Example"],
          rows: [
            ["有点儿", "before the adjective", "这个有点儿贵。 This is a bit (too) expensive."],
            ["一点儿", "after the adjective", "便宜一点儿吧。 Make it a bit cheaper."],
            ["一点儿也不", "before the adjective", "一点儿也不贵。 Not expensive at all."],
          ],
        },
        examples: [
          { zh: "今天有点儿冷。", pinyin: "Jīntiān yǒudiǎnr lěng.", en: "It's a bit cold today." },
          { zh: "请说得慢一点儿。", pinyin: "Qǐng shuō de màn yìdiǎnr.", en: "Please speak a bit more slowly." },
          { zh: "这个菜一点儿也不辣。", pinyin: "Zhège cài yìdiǎnr yě bú là.", en: "This dish isn't spicy at all." },
        ],
      },
      {
        heading: "这么 / 那么 vs 这样 / 那样",
        body: [
          "这么 (zhème) and 那么 (nàme) + adjective mean \"so, this / that\": 这么贵 (so expensive). 这样 and 那样 mean \"like this, like that\": before a verb they describe how (这样做, do it like this), and with 的 they describe a kind (这样的人, this kind of person).",
        ],
        examples: [
          { zh: "这里的东西这么贵！", pinyin: "Zhèlǐ de dōngxi zhème guì!", en: "Things here are so expensive!" },
          { zh: "你应该这样做。", pinyin: "Nǐ yīnggāi zhèyàng zuò.", en: "You should do it like this." },
          { zh: "我不喜欢那样的人。", pinyin: "Wǒ bù xǐhuan nàyàng de rén.", en: "I don't like people like that." },
        ],
      },
      {
        heading: "Exclaiming: 多么 and 啊",
        body: [
          "多(么) + adjective + 啊 means \"how ...!\". 啊 (a) on its own warms up a sentence: 好啊 (sure!), 真好看啊 (it's so pretty!). After some sounds 啊 changes to 呀 or 哪 in speech and writing.",
        ],
        examples: [
          { zh: "今天的天气多好啊！", pinyin: "Jīntiān de tiānqì duō hǎo a!", en: "What lovely weather today!" },
          { zh: "好啊，我们走吧。", pinyin: "Hǎo a, wǒmen zǒu ba.", en: "Sure, let's go." },
          { zh: "这件衣服真好看啊！", pinyin: "Zhè jiàn yīfu zhēn hǎokàn a!", en: "This top is so nice!" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "这个一点儿贵。",
        right: "这个有点儿贵。",
        rightPinyin: "Zhège yǒudiǎnr guì.",
        why: "Before an adjective, \"a bit\" is 有点儿.",
      },
      {
        wrong: "请有点儿便宜。",
        right: "请便宜一点儿。",
        rightPinyin: "Qǐng piányi yìdiǎnr.",
        why: "Asking for \"a bit more\" of a quality puts 一点儿 after the adjective.",
      },
      {
        wrong: "这样贵！",
        right: "这么贵！",
        rightPinyin: "Zhème guì!",
        why: "Before an adjective, \"so\" is 这么. 这样 means \"like this\" and goes before verbs or 的.",
      },
    ],
    faqs: [
      {
        q: "Can 有点儿 be positive?",
        a: "Mostly no. 有点儿 suggests \"more than I'd like\": 有点儿忙, 有点儿难. For a mild positive, use 挺…的 (tǐng…de, quite): 挺好的.",
      },
      {
        q: "Why does 那么 also mean \"well then\"?",
        a: "At the start of a sentence 那么 (or just 那) means \"in that case\": 那么，我们明天见. It's the same word, pointing back at what was just said.",
      },
    ],
    related: ["comparisons-bi", "de-complement-and-di", "adjectives-and-hen"],
    lessons: ["zh-a2-ah-exclaim", "zh-a2-zheme-name", "zh-a2-youdianr"],
  },
  {
    slug: "result-complements",
    title: "Result Complements: 看完, 听懂, 找到, 做好 and 变成",
    description:
      "Verb + result (看完, 听懂, 写错, 找到, 做好) shows whether an action achieved anything. How to negate it with 没, the common result words, and becoming with 变 and 变成.",
    level: "A2",
    hsk: "HSK 2",
    intro: [
      "English often lets one verb hold both the attempt and the result: \"I understood\", \"I found it\". Chinese separates them. 听 is to listen; 听懂 is to listen and understand. 找 is to look for; 找到 is to find. The second part, the result complement, tells you how the action ended.",
      "This makes Chinese very precise: 我听了，可是没听懂 (I listened, but didn't understand) is a perfectly natural sentence.",
    ],
    sections: [
      {
        heading: "Verb + result",
        body: [
          "The result is an adjective or verb glued to the main verb. The pair works like a single verb: 了 goes after the whole thing, and so does the object.",
        ],
        table: {
          headers: ["Result", "Meaning", "Examples"],
          rows: [
            ["完", "finished", "吃完, 看完, 做完"],
            ["懂", "understood", "听懂, 看懂"],
            ["到", "reached, got", "找到, 买到, 看到, 收到"],
            ["好", "done properly, ready", "做好, 准备好"],
            ["错", "wrong", "写错, 说错, 打错"],
            ["对", "right", "说对, 做对"],
            ["清楚", "clearly", "看清楚, 听清楚"],
          ],
        },
        examples: [
          { zh: "我看完了这本书。", pinyin: "Wǒ kànwán le zhè běn shū.", en: "I've finished reading this book." },
          { zh: "你听懂了吗？", pinyin: "Nǐ tīngdǒng le ma?", en: "Did you understand?" },
          { zh: "我找到我的钥匙了。", pinyin: "Wǒ zhǎodào wǒ de yàoshi le.", en: "I've found my keys." },
          { zh: "对不起，我写错了。", pinyin: "Duìbuqǐ, wǒ xiěcuò le.", en: "Sorry, I wrote it wrong." },
        ],
      },
      {
        heading: "Negating a result: 没 + verb + result",
        body: [
          "A result either happened or it didn't, so the negative is 没, without 了. 没听懂 means you listened but didn't get it.",
        ],
        examples: [
          { zh: "我没听懂。", pinyin: "Wǒ méi tīngdǒng.", en: "I didn't understand." },
          { zh: "作业还没做完。", pinyin: "Zuòyè hái méi zuòwán.", en: "The homework isn't finished yet." },
          { zh: "我没买到票。", pinyin: "Wǒ méi mǎidào piào.", en: "I didn't manage to get a ticket." },
        ],
      },
      {
        heading: "Becoming: 变, 变成, 成了",
        body: [
          "变 + adjective + 了 says a quality changed: 天气变冷了. 变成 / 成了 + noun says something turned into something else. 改 is to change or correct something on purpose (改作业); 改变 is a bigger, more abstract change (改变主意).",
        ],
        examples: [
          { zh: "天气变冷了。", pinyin: "Tiānqì biàn lěng le.", en: "The weather has turned cold." },
          { zh: "水变成了冰。", pinyin: "Shuǐ biànchéng le bīng.", en: "The water turned into ice." },
          { zh: "他们成了好朋友。", pinyin: "Tāmen chéng le hǎo péngyou.", en: "They became good friends." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "我听了，可是没听。",
        right: "我听了，可是没听懂。",
        rightPinyin: "Wǒ tīng le, kěshì méi tīngdǒng.",
        why: "You did listen; what failed was the result. Negate the result complement.",
      },
      {
        wrong: "我不找到我的手机。",
        right: "我没找到我的手机。",
        rightPinyin: "Wǒ méi zhǎodào wǒ de shǒujī.",
        why: "A result complement reports an outcome, so it's negated with 没, not 不.",
      },
      {
        wrong: "我看了完这本书。",
        right: "我看完了这本书。",
        rightPinyin: "Wǒ kànwán le zhè běn shū.",
        why: "The verb and its result are a unit; 了 goes after both.",
      },
    ],
    faqs: [
      {
        q: "What's the difference between 看 and 看到?",
        a: "看 is the act of looking. 看到 (or 看见) is the result: actually seeing. You can 看 and still 没看到.",
      },
      {
        q: "How do I say \"can't understand\"?",
        a: "That's a potential complement: 听不懂 (can't understand by listening), 看不懂 (can't understand by reading). It's a B1 point built on result complements.",
      },
    ],
    related: ["direction-complements", "ba-sentences", "potential-complements"],
    lessons: ["zh-a2-result-complements", "zh-a2-results-2", "zh-a2-become", "zh-a2-complement-choice"],
  },
  {
    slug: "direction-complements",
    title: "Direction Complements: 来, 去, 拿出来, 走进去 and 送给",
    description:
      "Verb + 来 / 去 for movement toward or away from the speaker, compound directions (拿出来, 走进去, 带回来), where the object and place go, and verb + 给 + person.",
    level: "A2",
    hsk: "HSK 2",
    intro: [
      "English uses particles to show direction: come in, go out, bring back. Chinese adds direction words after the verb, and always says whether the movement is toward the speaker (来) or away from them (去).",
      "This viewpoint is built in. If you're upstairs calling someone up, it's 上来; if you're downstairs sending them up, it's 上去.",
    ],
    sections: [
      {
        heading: "Verb + 来 / 去",
        body: [
          "来 means toward the speaker, 去 means away. They're said with a neutral tone after the verb: 回来 (come back), 进去 (go in), 上来 (come up).",
        ],
        table: {
          headers: ["", "+ 来 (toward me)", "+ 去 (away from me)"],
          rows: [
            ["上 up", "上来", "上去"],
            ["下 down", "下来", "下去"],
            ["进 in", "进来", "进去"],
            ["出 out", "出来", "出去"],
            ["回 back", "回来", "回去"],
            ["过 over", "过来", "过去"],
          ],
        },
        examples: [
          { zh: "请进来。", pinyin: "Qǐng jìnlai.", en: "Please come in." },
          { zh: "他回去了。", pinyin: "Tā huíqu le.", en: "He's gone back." },
          { zh: "你下来吧！", pinyin: "Nǐ xiàlai ba!", en: "Come on down!" },
        ],
      },
      {
        heading: "Compound directions: 拿出来, 走进去",
        body: [
          "Put an action verb before the direction pair: 拿出来 (take out), 走进去 (walk in), 跑过来 (run over here), 带回来 (bring back).",
          "A place goes before 来 / 去: 走进教室去, 回家来. An ordinary object can go before 来 / 去 or after the whole complement: 拿出一本书来 or 拿出来一本书.",
        ],
        examples: [
          { zh: "他从包里拿出来一本书。", pinyin: "Tā cóng bāo li ná chūlai yì běn shū.", en: "He took a book out of his bag." },
          { zh: "孩子们跑过来了。", pinyin: "Háizimen pǎo guòlai le.", en: "The children came running over." },
          { zh: "他走进教室去了。", pinyin: "Tā zǒu jìn jiàoshì qu le.", en: "He walked into the classroom." },
          { zh: "我给你带回来一个礼物。", pinyin: "Wǒ gěi nǐ dài huílai yí ge lǐwù.", en: "I brought you back a present." },
        ],
      },
      {
        heading: "Verb + 给 + person",
        body: [
          "Verbs of handing over put 给 + the receiver right after them: 送给 (give as a gift), 交给 (hand in to), 借给 (lend to), 卖给 (sell to). To borrow from someone, use 跟…借: 我跟他借了一本书.",
        ],
        examples: [
          { zh: "我把作业交给老师了。", pinyin: "Wǒ bǎ zuòyè jiāo gěi lǎoshī le.", en: "I handed my homework in to the teacher." },
          { zh: "这本书是他送给我的。", pinyin: "Zhè běn shū shì tā sòng gěi wǒ de.", en: "He gave me this book." },
          { zh: "我跟朋友借了一百块。", pinyin: "Wǒ gēn péngyou jiè le yìbǎi kuài.", en: "I borrowed a hundred yuan from a friend." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "他回家去了来。",
        right: "他回家来了。",
        rightPinyin: "Tā huí jiā lai le.",
        why: "Choose one viewpoint: 来 (toward me) or 去 (away from me), never both.",
      },
      {
        wrong: "他走进去教室。",
        right: "他走进教室去。",
        rightPinyin: "Tā zǒu jìn jiàoshì qu.",
        why: "A place always goes before 来 or 去.",
      },
      {
        wrong: "我借给他一本书。 (meaning you borrowed it from him)",
        right: "我跟他借了一本书。",
        rightPinyin: "Wǒ gēn tā jiè le yì běn shū.",
        why: "借给 means lend to. Borrowing from someone is 跟 + person + 借.",
      },
    ],
    faqs: [
      {
        q: "How do I know whether to use 来 or 去?",
        a: "Picture where the speaker is. Movement toward the speaker (or the place being talked about as \"here\") is 来; movement away is 去. On the phone, 你过来吧 means \"come over to where I am\".",
      },
      {
        q: "Do direction complements have other meanings?",
        a: "Yes, many. 想起来 (remember), 看出来 (make out), 说下去 (keep talking) are figurative. They're covered in the B1 guide on figurative complements.",
      },
    ],
    related: ["result-complements", "ba-sentences", "figurative-complements"],
    lessons: ["zh-a2-direction-complements", "zh-a2-compound-directions", "zh-a2-verb-gei"],
  },
  {
    slug: "ba-sentences",
    title: "把 Sentences: Doing Something to Something",
    description:
      "The 把 construction (我把门关上了) puts the object before the verb to say what was done to it and with what result. When you need it, its word order and its rules.",
    level: "A2",
    hsk: "HSK 2",
    intro: [
      "Normally the object follows the verb: 我关了门. With 把 (bǎ), the object moves up front: 我把门关上了, \"I took the door and shut it\". The focus shifts to what happened to the door.",
      "把 isn't just an alternative word order. It's the natural choice whenever you handle something and it ends up in a new state or a new place, and some sentences can only be said with 把.",
    ],
    sections: [
      {
        heading: "Subject + 把 + object + verb + result",
        body: [
          "The object after 把 is specific, something both speakers can identify (the door, my phone). The verb can't stand alone: it needs something after it that says what happened, such as a result, a direction, a place, 了, or a repeated verb.",
        ],
        examples: [
          { zh: "我把门关上了。", pinyin: "Wǒ bǎ mén guānshang le.", en: "I shut the door." },
          { zh: "他把咖啡喝完了。", pinyin: "Tā bǎ kāfēi hēwán le.", en: "He finished the coffee." },
          { zh: "请把手机拿出来。", pinyin: "Qǐng bǎ shǒujī ná chūlai.", en: "Please take out your phones." },
          { zh: "别把我的书弄坏了。", pinyin: "Bié bǎ wǒ de shū nònghuài le.", en: "Don't damage my book." },
        ],
      },
      {
        heading: "Moving things: 把 + object + verb + 在 / 到 + place",
        body: [
          "When you put something somewhere, 把 is required: the object comes before the verb and the destination after it.",
        ],
        examples: [
          { zh: "我把书放在桌子上了。", pinyin: "Wǒ bǎ shū fàng zài zhuōzi shang le.", en: "I put the book on the table." },
          { zh: "请把行李拿到房间里。", pinyin: "Qǐng bǎ xíngli ná dào fángjiān li.", en: "Please take the luggage to the room." },
        ],
      },
      {
        heading: "When to use 把",
        body: [
          "Reach for 把 in instructions (put it here, close the window) and when telling what happened to something. Don't use it with verbs that don't affect their object: 喜欢, 知道, 看见, 有, 是 never take 把.",
        ],
        table: {
          headers: ["Plain order", "With 把", "Notes"],
          rows: [
            ["我关了门。", "我把门关上了。", "both fine; 把 stresses the result"],
            ["(no plain order)", "我把书放在桌子上。", "putting something somewhere needs 把"],
            ["我喜欢他。", "(no 把)", "喜欢 doesn't act on its object"],
          ],
        },
      },
    ],
    mistakes: [
      {
        wrong: "我把门关。",
        right: "我把门关上了。",
        rightPinyin: "Wǒ bǎ mén guānshang le.",
        why: "The verb in a 把 sentence can't stand bare; it needs a result, direction, place or 了 after it.",
      },
      {
        wrong: "我放书在桌子上。",
        right: "我把书放在桌子上。",
        rightPinyin: "Wǒ bǎ shū fàng zài zhuōzi shang.",
        why: "Verb + object + 在 + place doesn't work. Move the object in front with 把.",
      },
      {
        wrong: "我把一本书看完了。",
        right: "我把那本书看完了。",
        rightPinyin: "Wǒ bǎ nà běn shū kànwán le.",
        why: "The object of 把 must be something specific that the listener can identify, not \"a book\".",
      },
    ],
    faqs: [
      {
        q: "Where do 不, 没 and 要 go in a 把 sentence?",
        a: "Before 把: 我没把门关上 (I didn't shut the door), 你要把作业做完. This is covered in detail at B1.",
      },
      {
        q: "Is 把 formal?",
        a: "Not at all. It's everyday spoken Chinese, especially in instructions: 把门关上, 把手机给我.",
      },
    ],
    related: ["result-complements", "direction-complements", "ba-in-depth", "bei-passive"],
    lessons: ["zh-a2-ba-construction"],
  },
  {
    slug: "because-although-but",
    title: "Because, Although, But: 因为…所以, 虽然…但是 and the Four Buts",
    description:
      "Linking reasons and contrasts: 因为…所以…, 虽然…但是…, the four words for but (但是, 可是, 不过, 但), asking why with 为什么, and which half of a pair can drop.",
    level: "A2",
    hsk: "HSK 2",
    intro: [
      "Chinese likes to mark both halves of a complex sentence. Where English says \"because it rained, we stayed in\", Chinese says \"because it rained, so we stayed in\": 因为下雨，所以我们没出去. To English ears that's doubled up; in Chinese it's normal and clear.",
      "Either half can usually be left out in speech, but you should learn the pairs together.",
    ],
    sections: [
      {
        heading: "因为…所以…",
        body: [
          "因为 (yīnwèi) introduces the reason, 所以 (suǒyǐ) the result. The reason normally comes first. To ask, use 为什么 (why); the answer starts with 因为.",
        ],
        examples: [
          { zh: "因为下雨，所以我们没出去。", pinyin: "Yīnwèi xià yǔ, suǒyǐ wǒmen méi chūqu.", en: "Because it was raining, we didn't go out." },
          { zh: "我今天很累，所以想早点儿睡。", pinyin: "Wǒ jīntiān hěn lèi, suǒyǐ xiǎng zǎo diǎnr shuì.", en: "I'm tired today, so I want to go to bed early." },
          { zh: "你为什么不来？——因为我病了。", pinyin: "Nǐ wèishénme bù lái? — Yīnwèi wǒ bìng le.", en: "Why aren't you coming? — Because I'm ill." },
        ],
      },
      {
        heading: "虽然…但是…",
        body: [
          "虽然 (suīrán, although) and 但是 (dànshì, but) go together, unlike in English, where you'd never say \"although ..., but ...\". 虽然 can go before or after the subject; 但是 starts the second clause. Add 还是 or 也 for \"still\".",
        ],
        examples: [
          { zh: "虽然中文很难，但是很有意思。", pinyin: "Suīrán Zhōngwén hěn nán, dànshì hěn yǒu yìsi.", en: "Chinese is hard, but it's very interesting." },
          { zh: "他虽然很忙，但是每天都运动。", pinyin: "Tā suīrán hěn máng, dànshì měi tiān dōu yùndòng.", en: "Although he's busy, he exercises every day." },
        ],
      },
      {
        heading: "The four buts",
        body: [
          "All four open the second clause. They differ in strength and register.",
        ],
        table: {
          headers: ["Word", "Feel", "Example"],
          rows: [
            ["但是 dànshì", "neutral, all-purpose", "很好，但是太贵了。"],
            ["可是 kěshì", "spoken, a bit more emotional", "我想去，可是没时间。"],
            ["不过 búguò", "soft, \"mind you\"", "很好吃，不过有点儿辣。"],
            ["但 dàn", "short, written", "价格高，但质量好。"],
          ],
        },
        examples: [
          { zh: "我想去，可是没时间。", pinyin: "Wǒ xiǎng qù, kěshì méi shíjiān.", en: "I'd like to go, but I don't have time." },
          { zh: "很好吃，不过有点儿辣。", pinyin: "Hěn hǎochī, búguò yǒudiǎnr là.", en: "It's delicious, though a bit spicy." },
        ],
      },
      {
        heading: "Reasons and results: 为, 原因, 结果",
        body: [
          "原因 (yuányīn) is \"the reason\" as a noun; 结果 (jiéguǒ) is \"the result\", and at the start of a clause it means \"as it turned out\". 为 + person + feeling means \"for someone\": 我为你高兴 (I'm happy for you).",
        ],
        examples: [
          { zh: "原因很简单。", pinyin: "Yuányīn hěn jiǎndān.", en: "The reason is simple." },
          { zh: "他没复习，结果没考好。", pinyin: "Tā méi fùxí, jiéguǒ méi kǎohǎo.", en: "He didn't revise, and as a result he did badly in the exam." },
          { zh: "我真为你高兴！", pinyin: "Wǒ zhēn wèi nǐ gāoxìng!", en: "I'm so happy for you!" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "所以我没去，因为下雨。",
        right: "因为下雨，所以我没去。",
        rightPinyin: "Yīnwèi xià yǔ, suǒyǐ wǒ méi qù.",
        why: "所以 always introduces the result in the second half. Reason first, result second is the default order.",
      },
      {
        wrong: "虽然很贵，很好。",
        right: "虽然很贵，但是很好。",
        rightPinyin: "Suīrán hěn guì, dànshì hěn hǎo.",
        why: "After 虽然 the second clause needs 但是 (or 可是, 不过). Unlike English, Chinese marks both halves.",
      },
    ],
    faqs: [
      {
        q: "Can I leave out 因为 or 所以?",
        a: "Yes, either one. In speech you'll often hear just one of them: 我很累，所以不去了, or 因为很累，我不去了. Leaving out both is fine too when the link is obvious.",
      },
      {
        q: "Can 因为 come second, like English?",
        a: "Yes, as an afterthought: 我没去，因为下雨. But then there's no 所以. Reason-first is the more typical Chinese order.",
      },
    ],
    related: ["if-or-while-the-more", "time-clauses", "adding-ideas"],
    lessons: ["zh-a2-yinwei-suoyi", "zh-a2-why", "zh-a2-but", "zh-a2-suiran-danshi", "zh-a2-linking"],
  },
  {
    slug: "if-or-while-the-more",
    title: "If, Or, While and The More: 如果, 的话, 还是, 或者, 一边, 越…越",
    description:
      "如果…就… and …的话 for if, 还是 vs 或者 for or, 一边…一边… for doing two things at once, and 越…越… for the more … the more.",
    level: "A2",
    hsk: "HSK 2",
    intro: [
      "These are the A2 sentence frames that link two ideas. Each has a fixed shape, and like all Chinese frames they mark both halves: \"if ..., then ...\", \"the more ..., the more ...\".",
    ],
    sections: [
      {
        heading: "如果…(的话)，就…",
        body: [
          "如果 (rúguǒ) opens the condition and 就 (jiù) introduces the result. 就 goes after the subject of the second clause, before the verb. …的话 at the end of the condition also means \"if\": it can go with 如果 or replace it in speech.",
        ],
        examples: [
          { zh: "如果明天下雨，我们就不去了。", pinyin: "Rúguǒ míngtiān xià yǔ, wǒmen jiù bú qù le.", en: "If it rains tomorrow, we won't go." },
          { zh: "你有空的话，来我家吃饭吧。", pinyin: "Nǐ yǒu kòng de huà, lái wǒ jiā chī fàn ba.", en: "If you're free, come over for dinner." },
          { zh: "如果你不喜欢的话，就别买了。", pinyin: "Rúguǒ nǐ bù xǐhuan de huà, jiù bié mǎi le.", en: "If you don't like it, don't buy it." },
        ],
      },
      {
        heading: "还是 vs 或者: or",
        body: [
          "还是 (háishi) is \"or\" in a question that asks someone to choose. 或者 (huòzhě) is \"or\" in a statement, listing options. Using 或者 in a question changes it into a yes-no question.",
        ],
        table: {
          headers: ["", "Use", "Example"],
          rows: [
            ["还是", "question: which one?", "你喝茶还是喝咖啡？ Tea or coffee?"],
            ["或者", "statement: either", "喝茶或者喝咖啡都可以。 Tea or coffee, either is fine."],
          ],
        },
        examples: [
          { zh: "你今天去还是明天去？", pinyin: "Nǐ jīntiān qù háishi míngtiān qù?", en: "Are you going today or tomorrow?" },
          { zh: "周末我常常看书或者看电影。", pinyin: "Zhōumò wǒ chángcháng kàn shū huòzhě kàn diànyǐng.", en: "At weekends I usually read or watch a film." },
        ],
      },
      {
        heading: "一边…一边…: while",
        body: [
          "一边 (yìbiān) before each of two verbs means doing both at once. The subject comes first, before the first 一边.",
        ],
        examples: [
          { zh: "他一边吃饭一边看手机。", pinyin: "Tā yìbiān chī fàn yìbiān kàn shǒujī.", en: "He looks at his phone while he eats." },
          { zh: "我喜欢一边听音乐一边做作业。", pinyin: "Wǒ xǐhuan yìbiān tīng yīnyuè yìbiān zuò zuòyè.", en: "I like listening to music while I do my homework." },
        ],
      },
      {
        heading: "越…越…: the more … the more",
        body: [
          "越 (yuè) + verb, 越 + adjective: \"the more ..., the more ...\". With one subject it can be compact: 越来越 + adjective means \"more and more\". No 很 after 越.",
        ],
        examples: [
          { zh: "雨越下越大。", pinyin: "Yǔ yuè xià yuè dà.", en: "The rain is getting heavier and heavier." },
          { zh: "他的中文越来越好了。", pinyin: "Tā de Zhōngwén yuèláiyuè hǎo le.", en: "His Chinese is getting better and better." },
          { zh: "我越想越生气。", pinyin: "Wǒ yuè xiǎng yuè shēngqì.", en: "The more I think about it, the angrier I get." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "你喝茶或者喝咖啡？",
        right: "你喝茶还是喝咖啡？",
        rightPinyin: "Nǐ hē chá háishi hē kāfēi?",
        why: "When you ask someone to pick, \"or\" is 还是. 或者 is for statements.",
      },
      {
        wrong: "如果下雨，就我们不去。",
        right: "如果下雨，我们就不去。",
        rightPinyin: "Rúguǒ xià yǔ, wǒmen jiù bú qù.",
        why: "就 is an adverb: it goes after the subject, right before the verb.",
      },
      {
        wrong: "天气越来越很冷。",
        right: "天气越来越冷。",
        rightPinyin: "Tiānqì yuèláiyuè lěng.",
        why: "越 already expresses degree, so no 很 after it.",
      },
    ],
    faqs: [
      {
        q: "Is 要是 the same as 如果?",
        a: "Yes, 要是 (yàoshi) is the spoken \"if\". It's covered in the B1 guide on conditions.",
      },
      {
        q: "Can 还是 mean anything else?",
        a: "Yes: before a verb 还是 means \"still\" or \"had better\": 我还是不去了 (I think I'd better not go).",
      },
    ],
    related: ["because-although-but", "time-clauses", "conditions"],
    lessons: ["zh-a2-yibian", "zh-a2-yue-yue", "zh-a2-haishi-huozhe", "zh-a2-ruguo", "zh-a2-dehua"],
  },
  {
    slug: "time-clauses",
    title: "Before, After, When and From … To: 以前, 以后, 的时候, 从…到…",
    description:
      "Time clauses that come before the main verb: …以前, …以后, …的时候, 从…到…, and telling events in order with 然后, 后来 and 当时.",
    level: "A2",
    hsk: "HSK 2",
    intro: [
      "English time clauses can go at either end: \"before I eat\" / \"I wash my hands before I eat\". Chinese time clauses always come first, and the words for before, after and when go at the end of the clause, not the start: 吃饭以前 is \"eat-meal before\".",
    ],
    sections: [
      {
        heading: "…以前, …以后, …的时候",
        body: [
          "Put 以前 (yǐqián, before), 以后 (yǐhòu, after) or 的时候 (de shíhou, when) at the end of the time clause, then the main clause. On their own, 以前 means \"in the past\" and 以后 \"in future\".",
        ],
        examples: [
          { zh: "吃饭以前要洗手。", pinyin: "Chī fàn yǐqián yào xǐ shǒu.", en: "Wash your hands before you eat." },
          { zh: "下课以后我们去喝咖啡吧。", pinyin: "Xià kè yǐhòu wǒmen qù hē kāfēi ba.", en: "Let's get a coffee after class." },
          { zh: "我小的时候住在上海。", pinyin: "Wǒ xiǎo de shíhou zhù zài Shànghǎi.", en: "When I was little I lived in Shanghai." },
          { zh: "以前我不喜欢吃鱼。", pinyin: "Yǐqián wǒ bù xǐhuan chī yú.", en: "I used to not like fish." },
        ],
      },
      {
        heading: "从…到…: from … to",
        body: [
          "从 (cóng) … 到 (dào) … gives a span of time or distance. The whole phrase comes before the verb.",
        ],
        examples: [
          { zh: "我从九点到五点工作。", pinyin: "Wǒ cóng jiǔ diǎn dào wǔ diǎn gōngzuò.", en: "I work from nine to five." },
          { zh: "从这儿到机场要一个小时。", pinyin: "Cóng zhèr dào jīchǎng yào yí ge xiǎoshí.", en: "It takes an hour to get from here to the airport." },
        ],
      },
      {
        heading: "Telling it in order: 然后, 后来, 接着, 当时",
        body: [
          "然后 (ránhòu) is the next step in a sequence, past or future. 接着 is \"straight after that\". 后来 (hòulái) is \"later on\", only about the past. 当时 (dāngshí) is \"at that time\" when telling a story.",
        ],
        table: {
          headers: ["Word", "Meaning", "Time"],
          rows: [
            ["然后", "then, next", "past or future"],
            ["接着", "straight after", "past or future"],
            ["后来", "later on", "past only"],
            ["以后", "after; in future", "mostly future"],
            ["当时", "at that time", "past"],
          ],
        },
        examples: [
          { zh: "我们先吃饭，然后去看电影。", pinyin: "Wǒmen xiān chī fàn, ránhòu qù kàn diànyǐng.", en: "We'll eat first, then go and see a film." },
          { zh: "他去年去了中国，后来在那儿找到了工作。", pinyin: "Tā qùnián qù le Zhōngguó, hòulái zài nàr zhǎodào le gōngzuò.", en: "He went to China last year and later found a job there." },
          { zh: "当时我很害怕。", pinyin: "Dāngshí wǒ hěn hàipà.", en: "I was very scared at the time." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "以前吃饭，要洗手。",
        right: "吃饭以前要洗手。",
        rightPinyin: "Chī fàn yǐqián yào xǐ shǒu.",
        why: "以前, 以后 and 的时候 go at the end of the time clause.",
      },
      {
        wrong: "我工作从九点到五点。",
        right: "我从九点到五点工作。",
        rightPinyin: "Wǒ cóng jiǔ diǎn dào wǔ diǎn gōngzuò.",
        why: "A time span goes before the verb, like other time expressions.",
      },
      {
        wrong: "明天我们吃饭，后来看电影。",
        right: "明天我们先吃饭，然后看电影。",
        rightPinyin: "Míngtiān wǒmen xiān chī fàn, ránhòu kàn diànyǐng.",
        why: "后来 is only for the past. For the next step of a plan, use 然后.",
      },
    ],
    faqs: [
      {
        q: "Can 的时候 refer to the future?",
        a: "Yes: 你到的时候给我打电话 (call me when you arrive). It's about time, not tense.",
      },
      {
        q: "What's the difference between 以后 and 后来?",
        a: "以后 can follow a clause (下课以后) and can point to the future. 后来 stands alone and only tells what happened later in a past story.",
      },
    ],
    related: ["time-adverbs-yijing-jiu-cai", "duration-and-frequency", "because-although-but"],
    lessons: ["zh-a2-cong-dao", "zh-a2-before-after", "zh-a2-houlai", "zh-a2-dangshi"],
  },
  {
    slug: "time-adverbs-yijing-jiu-cai",
    title: "已经, 就, 才, 要…了 and Other Time Adverbs",
    description:
      "已经 (already), 就 vs 才 (sooner or later than expected), 要…了 (about to), 还 and 一直 (still, all along), and 忽然, 原来 and 最近.",
    level: "A2",
    hsk: "HSK 2",
    intro: [
      "Chinese time adverbs carry a lot of attitude. 就 and 才 don't just say when something happened; they say whether that was earlier or later than you expected. Getting them right is one of the clearest signs of an intermediate speaker.",
      "All of these adverbs sit after the subject and before the verb.",
    ],
    sections: [
      {
        heading: "已经…了: already",
        body: [
          "已经 (yǐjīng) usually comes with 了 at the end: the situation is already in place.",
        ],
        examples: [
          { zh: "他已经走了。", pinyin: "Tā yǐjīng zǒu le.", en: "He's already left." },
          { zh: "已经十点了。", pinyin: "Yǐjīng shí diǎn le.", en: "It's already ten o'clock." },
        ],
      },
      {
        heading: "就 vs 才: early or late",
        body: [
          "就 (jiù) says something happened early, quickly or easily, and usually takes 了. 才 (cái) says it happened late or with difficulty, and never takes 了. The time word goes before both.",
        ],
        table: {
          headers: ["", "Feel", "Example"],
          rows: [
            ["就", "earlier than expected", "他七点就来了。 He came at seven (already)."],
            ["才", "later than expected", "他十点才来。 He didn't come until ten."],
          ],
        },
        examples: [
          { zh: "我六点就起床了。", pinyin: "Wǒ liù diǎn jiù qǐ chuáng le.", en: "I was up by six." },
          { zh: "他十二点才睡觉。", pinyin: "Tā shí'èr diǎn cái shuì jiào.", en: "He didn't go to bed until midnight." },
        ],
      },
      {
        heading: "要…了: about to",
        body: [
          "要 + verb + 了 means something is about to happen. 快要 and 就要 make it more immediate. With a specific time, use 就要, not 快要.",
        ],
        examples: [
          { zh: "要下雨了。", pinyin: "Yào xià yǔ le.", en: "It's about to rain." },
          { zh: "火车快要开了。", pinyin: "Huǒchē kuài yào kāi le.", en: "The train is about to leave." },
          { zh: "他下个月就要结婚了。", pinyin: "Tā xià ge yuè jiù yào jiéhūn le.", en: "He's getting married next month." },
        ],
      },
      {
        heading: "Still, all along, suddenly, lately",
        body: [
          "还 (still): 他还在睡觉. 一直 (all along, continuously): 我一直在等你. 老是 is \"always\" with a note of complaint. 最近 (lately), 平时 (usually, normally). 忽然 (suddenly) for an unexpected event, 原来 (so it turns out) for discovering the truth.",
        ],
        examples: [
          { zh: "他还在睡觉。", pinyin: "Tā hái zài shuì jiào.", en: "He's still asleep." },
          { zh: "我一直在等你。", pinyin: "Wǒ yìzhí zài děng nǐ.", en: "I've been waiting for you the whole time." },
          { zh: "最近我很忙。", pinyin: "Zuìjìn wǒ hěn máng.", en: "I've been busy lately." },
          { zh: "原来你是老师！", pinyin: "Yuánlái nǐ shì lǎoshī!", en: "Oh, so you're a teacher!" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "他十点才来了。",
        right: "他十点才来。",
        rightPinyin: "Tā shí diǎn cái lái.",
        why: "才 never takes 了, even though the event is in the past.",
      },
      {
        wrong: "我已经吃饭。",
        right: "我已经吃饭了。",
        rightPinyin: "Wǒ yǐjīng chī fàn le.",
        why: "已经 is almost always paired with 了 at the end.",
      },
      {
        wrong: "下个月快要放假了。",
        right: "下个月就要放假了。",
        rightPinyin: "Xià ge yuè jiù yào fàng jià le.",
        why: "With a specific time word, use 就要. 快要 can't follow a time expression.",
      },
    ],
    faqs: [
      {
        q: "Does 就 always mean \"early\"?",
        a: "No. 就 has many jobs: \"then\" after a condition (如果…就), \"right away\" (我就来), \"exactly\" (就是他). The early-or-late contrast with 才 is just one of them.",
      },
      {
        q: "Is 一直 the same as 总是?",
        a: "No. 一直 is continuous, without a break (一直在下雨, it's been raining non-stop). 总是 is \"always, every time\" (他总是迟到, he's always late).",
      },
    ],
    related: ["time-clauses", "guo-and-zai-aspect", "expectation-and-reality"],
    lessons: ["zh-a2-yijing", "zh-a2-hai-yizhi", "zh-a2-recently", "zh-a2-suddenly", "zh-a2-jiu-cai", "zh-a2-yao-le"],
  },
  {
    slug: "duration-and-frequency",
    title: "How Long and How Often: Duration, 次, 遍 and Separable Verbs",
    description:
      "Verb + duration (学了两年), where the object goes (学汉语学了两年), counting times with 次 and 遍, and separable verbs like 见面 and 洗澡 that split around 了, 过 and counts.",
    level: "A2",
    hsk: "HSK 2",
    intro: [
      "Time words that say when (明天, 三点) go before the verb. Time phrases that say how long go after it: 我学了两年, \"I studied for two years\". The same goes for how many times: 我去过两次.",
      "The tricky part is the object: it competes for the space after the verb. This guide shows the three ways Chinese handles that.",
    ],
    sections: [
      {
        heading: "Verb + (了) + duration",
        body: [
          "The duration follows the verb directly. Ask with 多长时间 or 多久.",
        ],
        examples: [
          { zh: "我等了十分钟。", pinyin: "Wǒ děng le shí fēnzhōng.", en: "I waited ten minutes." },
          { zh: "他在中国住了三年。", pinyin: "Tā zài Zhōngguó zhù le sān nián.", en: "He lived in China for three years." },
          { zh: "你学了多长时间中文？", pinyin: "Nǐ xué le duō cháng shíjiān Zhōngwén?", en: "How long did you study Chinese?" },
        ],
      },
      {
        heading: "Duration with an object",
        body: [
          "Either repeat the verb (学汉语学了两年), or put the duration between verb and object, often with 的 (学了两年(的)汉语). If the object is a person or pronoun, it comes before the duration: 等了他半天.",
          "To say how long it's been since something happened, put the duration first and negate: 我三年没回家了 (I haven't been home for three years).",
        ],
        examples: [
          { zh: "我学汉语学了两年。", pinyin: "Wǒ xué Hànyǔ xué le liǎng nián.", en: "I studied Chinese for two years." },
          { zh: "我学了两年汉语。", pinyin: "Wǒ xué le liǎng nián Hànyǔ.", en: "I studied Chinese for two years." },
          { zh: "我等了他半天。", pinyin: "Wǒ děng le tā bàntiān.", en: "I waited ages for him." },
          { zh: "他三年没回家了。", pinyin: "Tā sān nián méi huí jiā le.", en: "He hasn't been home for three years." },
        ],
      },
      {
        heading: "How many times: 次 and 遍",
        body: [
          "次 (cì) counts occasions; 遍 (biàn) counts times through something from start to finish (reading, listening, saying). The count follows the verb (+ 了 / 过). A place usually comes after the count; a person or pronoun comes before it.",
        ],
        examples: [
          { zh: "我去过两次北京。", pinyin: "Wǒ qù guo liǎng cì Běijīng.", en: "I've been to Beijing twice." },
          { zh: "我见过他一次。", pinyin: "Wǒ jiàn guo tā yí cì.", en: "I've met him once." },
          { zh: "请再说一遍。", pinyin: "Qǐng zài shuō yí biàn.", en: "Please say it again." },
        ],
      },
      {
        heading: "Separable verbs: 见面, 洗澡, 睡觉",
        body: [
          "Many two-syllable verbs are really verb + object: 见面 (see-face, meet), 洗澡 (wash-bath), 睡觉 (sleep-sleep), 游泳, 照相, 排队. Aspect words, durations and counts go between the two halves, and they can't take another object directly.",
        ],
        examples: [
          { zh: "我们见过一次面。", pinyin: "Wǒmen jiàn guo yí cì miàn.", en: "We've met once." },
          { zh: "我昨天睡了八个小时觉。", pinyin: "Wǒ zuótiān shuì le bā ge xiǎoshí jiào.", en: "I slept eight hours last night." },
          { zh: "我想跟你见面。", pinyin: "Wǒ xiǎng gēn nǐ jiànmiàn.", en: "I'd like to meet you." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "我两年学了汉语。",
        right: "我学了两年汉语。",
        rightPinyin: "Wǒ xué le liǎng nián Hànyǔ.",
        why: "How long goes after the verb. Before the verb, a time phrase means \"when\" (or, with a negative, \"for how long not\").",
      },
      {
        wrong: "我见面他了。",
        right: "我跟他见面了。",
        rightPinyin: "Wǒ gēn tā jiànmiàn le.",
        why: "见面 already contains its object (面). The person goes before it with 跟.",
      },
      {
        wrong: "我洗澡了两次。",
        right: "我洗了两次澡。",
        rightPinyin: "Wǒ xǐ le liǎng cì zǎo.",
        why: "Separable verbs split: the count goes between the verb and its built-in object.",
      },
    ],
    faqs: [
      {
        q: "How do I know if a verb is separable?",
        a: "Dictionaries mark them (often with // between the syllables, as in 见//面). As a rule of thumb, if the second syllable is a noun that the first acts on, the verb probably separates.",
      },
      {
        q: "What does 学了两年了 mean, with two 了?",
        a: "That you've been studying for two years and still are. With one 了 the studying is over. See the B1 guide on time spans.",
      },
    ],
    related: ["guo-and-zai-aspect", "time-clauses", "time-spans-and-experience"],
    lessons: ["zh-a2-action-measures", "zh-a2-duration", "zh-a2-duration-object", "zh-a2-separable-verbs"],
  },
  {
    slug: "should-must-may",
    title: "Should, Must, May and Only: 应该, 得, 必须, 可以, 不用, 只",
    description:
      "The A2 helping verbs for obligation and permission: 应该 (should), 得 and 必须 (must), 可以 (may), 不用 (no need), 不要 and 别 (don't), plus 打算 and 愿意 and only with 只.",
    level: "A2",
    hsk: "HSK 2",
    intro: [
      "English \"must\", \"should\" and \"may\" each map onto a small family of Chinese words. The forms are easy (they all go before the main verb and don't change), but the negatives don't line up with English, and that's where mistakes happen.",
    ],
    sections: [
      {
        heading: "Should and must",
        body: [
          "应该 (yīnggāi) is should. 得 (děi) is the spoken must, have to; 必须 (bìxū) is a stronger, more formal must. 该…了 means \"it's time to\".",
          "The negatives are the trap: \"don't have to\" is 不用 (or formally 不必), not 不得 or 不必须.",
        ],
        table: {
          headers: ["Meaning", "Positive", "Negative"],
          rows: [
            ["should", "应该", "不应该 shouldn't"],
            ["must, have to", "得 / 必须", "不用 / 不必 don't have to"],
            ["may, can", "可以", "不可以 / 不能 mustn't"],
            ["don't!", "", "不要 / 别"],
          ],
        },
        examples: [
          { zh: "你应该多喝水。", pinyin: "Nǐ yīnggāi duō hē shuǐ.", en: "You should drink more water." },
          { zh: "我得走了。", pinyin: "Wǒ děi zǒu le.", en: "I have to go." },
          { zh: "明天你不用来。", pinyin: "Míngtiān nǐ bú yòng lái.", en: "You don't need to come tomorrow." },
          { zh: "该睡觉了。", pinyin: "Gāi shuì jiào le.", en: "It's time for bed." },
        ],
      },
      {
        heading: "May: 可以",
        body: [
          "可以 (kěyǐ) asks for and gives permission. 不可以 and 不能 both forbid. Answer a 可以 question with 可以 or 不行.",
        ],
        examples: [
          { zh: "我可以进来吗？", pinyin: "Wǒ kěyǐ jìnlai ma?", en: "May I come in?" },
          { zh: "这儿不可以抽烟。", pinyin: "Zhèr bù kěyǐ chōu yān.", en: "You can't smoke here." },
        ],
      },
      {
        heading: "Don't, watch out: 不要, 别, 小心",
        body: [
          "不要 and 别 + verb tell someone not to do something. 别…了 asks them to stop. 小心 means \"careful!\". Soften a request with 吧 or 好吗.",
        ],
        examples: [
          { zh: "不要在这儿停车。", pinyin: "Bú yào zài zhèr tíng chē.", en: "Don't park here." },
          { zh: "别哭了，好吗？", pinyin: "Bié kū le, hǎo ma?", en: "Stop crying, OK?" },
          { zh: "小心！车来了！", pinyin: "Xiǎoxīn! Chē lái le!", en: "Careful! There's a car coming!" },
        ],
      },
      {
        heading: "Plans and only: 打算, 愿意, 只",
        body: [
          "打算 (dǎsuàn) + verb is \"plan to\"; 愿意 (yuànyì) + verb is \"be willing to\". 只 (zhǐ, only) goes before the verb, even when English \"only\" points at the object: 我只喝茶 (I only drink tea). 够 (gòu) means enough.",
        ],
        examples: [
          { zh: "我打算明年去中国。", pinyin: "Wǒ dǎsuàn míngnián qù Zhōngguó.", en: "I'm planning to go to China next year." },
          { zh: "你愿意帮我吗？", pinyin: "Nǐ yuànyì bāng wǒ ma?", en: "Would you be willing to help me?" },
          { zh: "我只喝茶。", pinyin: "Wǒ zhǐ hē chá.", en: "I only drink tea." },
          { zh: "钱不够。", pinyin: "Qián bú gòu.", en: "There isn't enough money." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "你不得来。 (meaning \"you don't have to come\")",
        right: "你不用来。",
        rightPinyin: "Nǐ bú yòng lái.",
        why: "得 has no everyday negative. \"Don't have to\" is 不用.",
      },
      {
        wrong: "我喝只茶。",
        right: "我只喝茶。",
        rightPinyin: "Wǒ zhǐ hē chá.",
        why: "只 is an adverb, so it goes before the verb.",
      },
      {
        wrong: "你不用说话！ (meaning \"don't talk!\")",
        right: "你别说话！",
        rightPinyin: "Nǐ bié shuō huà!",
        why: "不用 means there's no need. To forbid, use 别 or 不要.",
      },
    ],
    faqs: [
      {
        q: "Is 得 here the same character as the 得 in 说得很好?",
        a: "Same character, different word. As \"must\" it's read děi and goes before a verb. As the complement marker it's read de and goes after a verb.",
      },
      {
        q: "能 or 可以 for permission?",
        a: "Both work: 我能进来吗？ and 我可以进来吗？ 可以 is the more typical choice for asking permission; 能 leans toward ability.",
      },
    ],
    related: ["how-sure-maybe-surely", "wanting-ability-likes", "requests-and-suggestions"],
    lessons: ["zh-a2-buyao", "zh-a2-plans", "zh-a2-only", "zh-a2-yinggai-keyi", "zh-a2-must"],
  },
  {
    slug: "how-sure-maybe-surely",
    title: "How Sure: 可能, 也许, 一定, 会, 以为 and 感觉",
    description:
      "Saying how sure you are with 可能, 也许 and 一定, 会 for the likely future, 以为 for a belief that turned out wrong, 感觉 vs 觉得, and 其实 / 实在 for what's really true.",
    level: "A2",
    hsk: "HSK 2",
    intro: [
      "At A1 you could only say what is. A2 adds the shades in between: maybe, probably, surely, I thought (wrongly), I feel. These words go before the verb, and several of them combine with each other in a fixed order.",
    ],
    sections: [
      {
        heading: "Maybe and surely: 可能, 也许, 一定",
        body: [
          "可能 (kěnéng) and 也许 (yěxǔ) both mean maybe, probably. 一定 (yídìng) means surely, definitely, and as an instruction \"be sure to\". 不一定 means \"not necessarily\". 不可能 means \"impossible\".",
          "With 会 or 不, the order is: 可能 / 一定 first, then 会 / 不: 他可能不来, 明天一定会下雨.",
        ],
        examples: [
          { zh: "他可能不来了。", pinyin: "Tā kěnéng bù lái le.", en: "He probably isn't coming." },
          { zh: "也许他忘了。", pinyin: "Yěxǔ tā wàng le.", en: "Maybe he forgot." },
          { zh: "你一定要来！", pinyin: "Nǐ yídìng yào lái!", en: "You must come!" },
          { zh: "贵的不一定好。", pinyin: "Guì de bù yídìng hǎo.", en: "Expensive things aren't necessarily good." },
        ],
      },
      {
        heading: "会 for the likely future",
        body: [
          "会 + verb predicts what will (probably) happen. 会…的 makes it a reassurance: 他会来的 (he will come, don't worry). 不会吧 is \"no way!\".",
        ],
        examples: [
          { zh: "明天会下雨。", pinyin: "Míngtiān huì xià yǔ.", en: "It'll rain tomorrow." },
          { zh: "别担心，他会来的。", pinyin: "Bié dānxīn, tā huì lái de.", en: "Don't worry, he'll come." },
        ],
      },
      {
        heading: "以为 vs 认为: I thought (wrongly)",
        body: [
          "以为 (yǐwéi) is a belief that turned out to be wrong: 我以为你走了 means \"I thought you'd left (but you hadn't)\". 认为 (rènwéi) is a considered opinion. 原来 often follows to reveal the truth.",
        ],
        examples: [
          { zh: "我以为你走了。", pinyin: "Wǒ yǐwéi nǐ zǒu le.", en: "I thought you'd gone." },
          { zh: "我以为他是中国人，原来他是日本人。", pinyin: "Wǒ yǐwéi tā shì Zhōngguó rén, yuánlái tā shì Rìběn rén.", en: "I thought he was Chinese, but it turns out he's Japanese." },
        ],
      },
      {
        heading: "Feelings and facts: 感觉, 感到, 实在, 其实",
        body: [
          "觉得 is \"think\" (an opinion). 感觉 (gǎnjué) is \"feel\" (a sensation or impression) and also \"a feeling\" as a noun. 感到 + feeling is a slightly written \"feel\": 感到高兴. 实在 (shízài) means \"really, honestly\" for emphasis; 实际上 means \"in fact\"; 真正 + noun means \"real, genuine\".",
        ],
        examples: [
          { zh: "我感觉有点儿冷。", pinyin: "Wǒ gǎnjué yǒudiǎnr lěng.", en: "I feel a bit cold." },
          { zh: "我实在太累了。", pinyin: "Wǒ shízài tài lèi le.", en: "I'm honestly exhausted." },
          { zh: "他是我真正的朋友。", pinyin: "Tā shì wǒ zhēnzhèng de péngyou.", en: "He's a real friend." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "他会可能来。",
        right: "他可能会来。",
        rightPinyin: "Tā kěnéng huì lái.",
        why: "可能 comes before 会.",
      },
      {
        wrong: "我以为中文很有意思。 (meaning your genuine opinion)",
        right: "我认为中文很有意思。 / 我觉得中文很有意思。",
        rightPinyin: "Wǒ rènwéi Zhōngwén hěn yǒu yìsi. / Wǒ juéde Zhōngwén hěn yǒu yìsi.",
        why: "以为 implies you were wrong. For an opinion you still hold, use 觉得 or 认为.",
      },
    ],
    faqs: [
      {
        q: "Is 一定 the same in 一定要来 and 不一定?",
        a: "Same word. 一定要 is \"must, be sure to\"; 不一定 is \"not necessarily\". Don't use 不一定 to mean \"definitely not\": that's 一定不.",
      },
      {
        q: "Can 会 mean both \"can\" and \"will\"?",
        a: "Yes. 我会游泳 is a skill (can); 明天会下雨 is a prediction (will). Context makes it clear.",
      },
    ],
    related: ["should-must-may", "opinions-and-comparisons", "certainty-and-necessity"],
    lessons: ["zh-a2-yiwei", "zh-a2-maybe-surely", "zh-a2-hui-future", "zh-a2-really-actually", "zh-a2-feeling-sensing"],
  },
  {
    slug: "gei-rang-and-toward",
    title: "给, 让 and 往: For Someone, Letting Someone, Toward",
    description:
      "给 + person + verb (doing something for or to someone), 让 + person + verb (let, make, ask someone to), and 往 / 向 for direction.",
    level: "A2",
    hsk: "HSK 2",
    intro: [
      "Chinese prepositions come before the verb, with their noun: \"for me buy\" rather than \"buy for me\". This guide covers three that you'll hear every day: 给 (for, to), 让 (let, make) and 往 (toward).",
    ],
    sections: [
      {
        heading: "给 + person + verb",
        body: [
          "给 (gěi) + person before the verb marks who receives or benefits: 给我打电话 (call me), 给妈妈做饭 (cook for Mum). Note that English \"to\" in \"write to me\" or \"call me\" is often 给 in Chinese.",
        ],
        examples: [
          { zh: "到了给我打电话。", pinyin: "Dào le gěi wǒ dǎ diànhuà.", en: "Call me when you get there." },
          { zh: "我给你介绍一下。", pinyin: "Wǒ gěi nǐ jièshào yíxià.", en: "Let me introduce you." },
          { zh: "他每天给女儿做早饭。", pinyin: "Tā měi tiān gěi nǚ'ér zuò zǎofàn.", en: "He makes breakfast for his daughter every day." },
        ],
      },
      {
        heading: "让 + person + verb",
        body: [
          "让 (ràng) + person + verb covers English let, make and ask (someone to do something). With feelings it means \"make someone feel\": 这让我很高兴.",
        ],
        examples: [
          { zh: "让我想想。", pinyin: "Ràng wǒ xiǎngxiang.", en: "Let me think." },
          { zh: "老师让我们写作业。", pinyin: "Lǎoshī ràng wǒmen xiě zuòyè.", en: "The teacher had us do homework." },
          { zh: "妈妈不让我玩手机。", pinyin: "Māma bú ràng wǒ wán shǒujī.", en: "Mum won't let me play on my phone." },
          { zh: "这件事让我很高兴。", pinyin: "Zhè jiàn shì ràng wǒ hěn gāoxìng.", en: "This made me very happy." },
        ],
      },
      {
        heading: "往 and 向: toward",
        body: [
          "往 (wǎng) + direction + verb gives directions: 往前走 (go straight ahead), 往左拐 (turn left). 向 (xiàng) also means toward and is used with people too: 向他学习 (learn from him). 对面 is opposite, 经过 is to pass by.",
        ],
        examples: [
          { zh: "一直往前走，然后往右拐。", pinyin: "Yìzhí wǎng qián zǒu, ránhòu wǎng yòu guǎi.", en: "Go straight ahead, then turn right." },
          { zh: "银行在超市对面。", pinyin: "Yínháng zài chāoshì duìmiàn.", en: "The bank is opposite the supermarket." },
          { zh: "我们应该向他学习。", pinyin: "Wǒmen yīnggāi xiàng tā xuéxí.", en: "We should learn from him." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "我打电话你。",
        right: "我给你打电话。",
        rightPinyin: "Wǒ gěi nǐ dǎ diànhuà.",
        why: "打电话 already has its object (电话), so the person you call needs 给: before the verb, or after it as 打电话给你.",
      },
      {
        wrong: "我让他。 (meaning \"I let him do it\")",
        right: "我让他去了。",
        rightPinyin: "Wǒ ràng tā qù le.",
        why: "让 needs a verb after the person: let him do what?",
      },
      {
        wrong: "走往前。",
        right: "往前走。",
        rightPinyin: "Wǎng qián zǒu.",
        why: "Like all prepositions, 往 + direction comes before the verb.",
      },
    ],
    faqs: [
      {
        q: "Is 让 the same as 叫?",
        a: "In \"make / tell someone to\" they overlap: 老师叫我们写作业 means the same. 让 is the more neutral choice and also covers \"let\".",
      },
      {
        q: "When is 给 a verb and when is it a preposition?",
        a: "As a verb it means give: 给我一本书. Before another verb it's a preposition, \"for, to\": 给我买一本书 (buy a book for me).",
      },
    ],
    related: ["direction-complements", "should-must-may", "prepositions-b1"],
    lessons: ["zh-a2-gei-for", "zh-a2-rang-causative", "zh-a2-towards"],
  },
  {
    slug: "everyday-words-a2",
    title: "咱们, 自己, 所有, 什么样 and 怎么办: Useful A2 Words with Grammar",
    description:
      "Inclusive 咱们, 自己 (oneself), 大家 (everyone), quantity words like 所有…都 and 大部分, question phrases 什么样 and 怎么办, and the verbs 出现, 发现 and 进行.",
    level: "A2",
    hsk: "HSK 2",
    intro: [
      "Some words carry their own little grammar rules: 所有 needs 都, 进行 needs a two-syllable verb, 出现 puts the new thing after it. This guide collects the A2 words where a rule matters.",
    ],
    sections: [
      {
        heading: "咱们, 自己, 大家",
        body: [
          "咱们 (zánmen) is \"we\" including the listener (you and me); 我们 can include or exclude them. 自己 (zìjǐ) is oneself: 我自己 (myself), 自己做 (do it yourself). 大家 (dàjiā) is everyone in the group.",
        ],
        examples: [
          { zh: "咱们走吧。", pinyin: "Zánmen zǒu ba.", en: "Let's go (you and me)." },
          { zh: "我自己做。", pinyin: "Wǒ zìjǐ zuò.", en: "I'll do it myself." },
          { zh: "大家好！", pinyin: "Dàjiā hǎo!", en: "Hello, everyone!" },
        ],
      },
      {
        heading: "Quantities: 所有…都, 大部分, 不少",
        body: [
          "所有 (suǒyǒu, all) and 全部 come before the noun and need 都 before the verb. 大部分 (most), 一部分 (some), 少数 (a minority) and 不少 (quite a few) describe how much. 以上 and 以下 mean above and below a number.",
        ],
        examples: [
          { zh: "所有的学生都来了。", pinyin: "Suǒyǒu de xuésheng dōu lái le.", en: "All the students came." },
          { zh: "大部分人都同意。", pinyin: "Dàbùfen rén dōu tóngyì.", en: "Most people agree." },
          { zh: "他有不少朋友。", pinyin: "Tā yǒu bù shǎo péngyou.", en: "He has quite a few friends." },
        ],
      },
      {
        heading: "什么样 and 怎么办",
        body: [
          "什么样的 + noun asks \"what kind of\". 怎么办 (zěnme bàn) is \"what should I do?\". 怎么 + verb with surprise means \"how come?\": 你怎么来了？ (What are you doing here?).",
        ],
        examples: [
          { zh: "你喜欢什么样的音乐？", pinyin: "Nǐ xǐhuan shénmeyàng de yīnyuè?", en: "What kind of music do you like?" },
          { zh: "我的护照丢了，怎么办？", pinyin: "Wǒ de hùzhào diū le, zěnme bàn?", en: "I've lost my passport. What do I do?" },
          { zh: "你怎么没来？", pinyin: "Nǐ zěnme méi lái?", en: "How come you didn't come?" },
        ],
      },
      {
        heading: "出现, 发现, 进行, 提高",
        body: [
          "出现 (appear) puts the new thing after the verb: 出现了问题 (a problem came up). 发现 (discover, notice) takes a whole clause. 进行 (carry out) is formal and is followed by a two-syllable verb: 进行讨论. 提高 (raise, improve) goes with 水平, 成绩 and similar nouns.",
        ],
        examples: [
          { zh: "出现了一个问题。", pinyin: "Chūxiàn le yí ge wèntí.", en: "A problem has come up." },
          { zh: "我发现他不在家。", pinyin: "Wǒ fāxiàn tā bú zài jiā.", en: "I found that he wasn't home." },
          { zh: "我想提高我的中文水平。", pinyin: "Wǒ xiǎng tígāo wǒ de Zhōngwén shuǐpíng.", en: "I want to improve my Chinese." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "所有的学生来了。",
        right: "所有的学生都来了。",
        rightPinyin: "Suǒyǒu de xuésheng dōu lái le.",
        why: "所有 and 全部 need 都 before the verb.",
      },
      {
        wrong: "咱们 (said to a stranger to mean \"we, not you\")",
        right: "我们",
        rightPinyin: "wǒmen",
        why: "咱们 always includes the listener. If they're not part of the group, say 我们.",
      },
      {
        wrong: "我们进行学。",
        right: "我们进行学习。",
        rightPinyin: "Wǒmen jìnxíng xuéxí.",
        why: "进行 is followed by a two-syllable verb. With a one-syllable verb, just use the verb.",
      },
    ],
    faqs: [
      {
        q: "Is 咱们 used everywhere?",
        a: "It's most typical of northern speech. Southern speakers often use 我们 for both meanings, and that's always correct.",
      },
      {
        q: "Is 自己 the same as \"alone\"?",
        a: "Close: 我自己去 can mean \"I'll go by myself\". For \"alone, on your own\" you'll also hear 一个人: 我一个人住 (I live alone).",
      },
    ],
    related: ["how-sure-maybe-surely", "any-every-some", "question-words"],
    lessons: ["zh-a2-ziji-zanmen", "zh-a2-what-kind", "zh-a2-progress", "zh-a2-appear-discover", "zh-a2-quantities"],
  },
];
