// A1 unit 6 reinforce and drill lessons (想/要, ordering food, 会/能,
// 了, 没 and 还没), drafted from their specs in specs.ts.

import { ex, fb, layer, listen, mc, ms, mt, say, sec, toEn, toZh, zh } from "./authoring";
import { ZH_A1_SPEC as S } from "./specs";

const C = "Complete (characters or pinyin).";

export const ZH_A1_LAYERS_U6 = [
  layer(
    S,
    "zh-a1r-ordering",
    "Dialogue: Dinner at a Noodle Shop",
    "Order a meal from start to finish: call the waiter, ask for the menu, order with 要 and 来, and pay.",
    "7 min",
    [
      sec(
        "The dialogue",
        ["Two friends sit down in a small noodle shop. Notice how short the orders are: dish + measure word, no \"could I please have.\""],
        [
          ex("服务员，菜单！", "Fúwùyuán, càidān!", "Excuse me (waiter), the menu!"),
          ex("你们想吃什么？", "Nǐmen xiǎng chī shénme?", "What would you like to eat?"),
          ex("我要一碗牛肉面。", "Wǒ yào yì wǎn niúròu miàn.", "I'll have a bowl of beef noodles."),
          ex("来二十个饺子。", "Lái èrshí ge jiǎozi.", "And twenty dumplings."),
          ex("喝什么？", "Hē shénme?", "Anything to drink?"),
          ex("两瓶水。", "Liǎng píng shuǐ.", "Two bottles of water."),
          ex("服务员，买单！", "Fúwùyuán, mǎi dān!", "Waiter, the bill!"),
        ],
        [mc("What do they order to drink?", ["Two bottles of water", "Two cups of tea", "Beer", "Coffee"], 0, "两瓶水: two bottles of water.")]
      ),
      sec(
        "Ordering words",
        [
          `${zh("要", "yào")} is the everyday way to order (\"I'll have\"); ${zh("来", "lái")} + amount is very common in restaurants (literally \"bring\"). ${zh("想", "xiǎng")} (would like) is softer and is used for wishes and plans.`,
          `Food comes with measure words: ${zh("碗", "wǎn")} (bowl), ${zh("瓶", "píng")} (bottle), ${zh("杯", "bēi")} (cup, glass), ${zh("个", "ge")} (dumplings, buns).`,
        ],
        [ex("一碗米饭", "yì wǎn mǐfàn", "a bowl of rice"), ex("一瓶啤酒", "yì píng píjiǔ", "a bottle of beer")],
        [mc("A bowl of rice:", ["一碗米饭", "一杯米饭", "一个碗米饭", "一瓶米饭"], 0, "Bowls: 碗.")]
      ),
    ],
    [
      mc("服务员 is:", ["a waiter or waitress", "the menu", "the bill", "a cook"], 0, "服务员 (fúwùyuán): server."),
      mc("To ask for the bill:", ["买单！", "菜单！", "来单！", "要菜！"], 0, "买单 (mǎi dān): the bill."),
      mt(
        "Match each food to its measure word.",
        [
          ["牛肉面", "碗"],
          ["啤酒", "瓶"],
          ["饺子", "个"],
          ["咖啡", "杯"],
        ],
        "Bowls, bottles, pieces, cups."
      ),
      fb(C, "我___一碗米饭。(I'll have a bowl of rice.)", "要", "yào", "要: I'll have."),
      fb(C, "来两___啤酒。(Two bottles of beer.)", "瓶", "píng", "Bottles: 瓶."),
      fb(C, "你们想吃___？(What would you like to eat?)", "什么", "shénme", "想吃 + 什么."),
      toZh("I'll have a bowl of beef noodles.", "我要一碗牛肉面。", "Wǒ yào yì wǎn niúròu miàn.", "要 + 一碗 + dish."),
      toZh("Waiter, the menu!", "服务员，菜单！", "Fúwùyuán, càidān!", "Call the server, then name what you need."),
      toEn("来二十个饺子。", "Lái èrshí ge jiǎozi.", "Twenty dumplings, please.", "来 + amount: bring.", ["Twenty dumplings.", "Bring twenty dumplings.", "We'll have twenty dumplings.", "I'll have twenty dumplings.", "Give us twenty dumplings."]),
      say("服务员，买单！", "服务员，买单 (fúwùyuán, mǎi dān): waiter, the bill!", "Raise your hand slightly when you say it.", "Ask for the bill."),
    ]
  ),

  layer(
    S,
    "zh-a1d-xiang-yao",
    "Pattern Practice: 想 + Verb, 要 + Noun",
    "想 and 要 with verbs and nouns, and their negatives -- drilled until the choice is automatic.",
    "6 min",
    [
      sec(
        "Four patterns",
        [
          "想 + verb: would like to (我想喝茶). 要 + noun: want / I'll have (我要一杯茶). 要 + verb: want to, plan to (我要去北京).",
          "The negative of both is usually 不想: 我不想去 (I don't want to go). 不要 on its own means \"don't!\" or \"no thanks.\"",
        ],
        [ex("我想看电影。", "Wǒ xiǎng kàn diànyǐng.", "I'd like to see a film."), ex("我不想吃饭。", "Wǒ bù xiǎng chī fàn.", "I don't want to eat.")],
        [mc("I don't want to go:", ["我不想去。", "我不要去。", "我没想去。", "我想不去。"], 0, "The usual negative is 不想.")]
      ),
    ],
    [
      mc("我要一杯咖啡 means:", ["I'll have a coffee.", "I'd like to drink coffee someday.", "I don't want coffee.", "I have a coffee."], 0, "要 + noun: ordering."),
      mc("不要！ on its own means:", ["Don't! / No thanks.", "I want it.", "I'd like to.", "Not yet."], 0, "不要: don't, no thanks."),
      fb(C, "我___看电影。(I'd like to see a film.)", "想", "xiǎng", "想 + verb: would like to."),
      fb(C, "她不___去学校。(She doesn't want to go to school.)", "想", "xiǎng", "不想: don't want to."),
      fb(C, "我___两碗面。(I'll have two bowls of noodles.)", "要", "yào", "要 + noun."),
      fb(C, "你想喝___？(What would you like to drink?)", "什么", "shénme", "想喝 + 什么."),
      toZh("I'd like to drink tea.", "我想喝茶。", "Wǒ xiǎng hē chá.", "想 + 喝茶."),
      toZh("I don't want to eat.", "我不想吃饭。", "Wǒ bù xiǎng chī fàn.", "不想 + verb."),
      toZh("We want to go to Beijing.", "我们想去北京。", "Wǒmen xiǎng qù Běijīng.", "想 + 去 + place.", ["我们要去北京。", "Wǒmen yào qù Běijīng."]),
      say("你想吃什么？", "你想吃什么 (nǐ xiǎng chī shénme): what would you like to eat?", "nǐ xiǎng: third + third, so nǐ rises.", "Ask a friend what they'd like to eat."),
    ]
  ),

  layer(
    S,
    "zh-a1r-hui-neng",
    "Contrast: 会 or 能?",
    "Both mean \"can\": 会 for skills you've learned, 能 for being able or allowed right now. See them side by side.",
    "7 min",
    [
      sec(
        "Skill or possibility",
        [
          `${zh("会", "huì")}: a learned skill. ${zh("我会游泳。", "Wǒ huì yóuyǒng.")} (I can swim -- I know how.)`,
          `${zh("能", "néng")}: able to in the circumstances, or allowed. ${zh("我今天不能游泳。", "Wǒ jīntiān bù néng yóuyǒng.")} (I can't swim today -- I'm ill, the pool is closed...)`,
          "Test: could you do it yesterday, and the reason you can't today isn't that you've forgotten? Then it's 能.",
        ],
        [
          ex("她会开车。", "Tā huì kāi chē.", "She can drive. (She knows how.)"),
          ex("她今天不能开车。", "Tā jīntiān bù néng kāi chē.", "She can't drive today."),
          ex("这儿能喝水吗？", "Zhèr néng hē shuǐ ma?", "Can we drink water here?"),
        ],
        [mc("I can speak Chinese (I've learned it):", ["我会说中文。", "我能说中文。", "我是说中文。", "我要说中文。"], 0, "A learned skill: 会.")]
      ),
    ],
    [
      ms(
        "Which use 会 correctly? (Choose all that apply.)",
        ["我会做饭。", "他会说英文。", "我今天不会来，我很忙。", "她会唱歌。"],
        [0, 1, 3],
        "Being too busy to come is circumstances: 不能来."
      ),
      mc("Can I sit here? (permission)", ["这儿能坐吗？", "这儿会坐吗？", "这儿是坐吗？", "这儿要坐吗？"], 0, "Permission: 能."),
      mc("我不会游泳 means:", ["I can't swim (I never learned).", "I can't swim today.", "I don't want to swim.", "I'm not allowed to swim."], 0, "不会: don't know how."),
      fb(C, "你___做饭吗？(Can you cook?)", "会", "huì", "A learned skill: 会."),
      fb(C, "我很忙，明天不___来。(I'm busy -- I can't come tomorrow.)", "能", "néng", "Circumstances: 能."),
      fb(C, "她___开车，她二十岁。(She can drive -- she's twenty.)", "会", "huì", "Knowing how: 会."),
      toZh("I can cook.", "我会做饭。", "Wǒ huì zuò fàn.", "A skill: 会."),
      toZh("I can't come today.", "我今天不能来。", "Wǒ jīntiān bù néng lái.", "Circumstances: 不能."),
      toEn("这儿能吃饭吗？", "Zhèr néng chī fàn ma?", "Can we eat here?", "能 for permission.", ["Can I eat here?", "Can you eat here?", "Is eating allowed here?", "Can one eat here?", "May I eat here?", "May we eat here?"]),
      say("我会说一点儿中文。", "我会说一点儿中文: I can speak a little Chinese.", "yìdiǎnr: one smooth word.", "Tell someone you speak a little Chinese."),
    ]
  ),

  layer(
    S,
    "zh-a1d-hui-neng",
    "Pattern Practice: 会, 不会, 能, 不能",
    "Skills and circumstances with every verb you know: 会/能 + verb, and their negatives.",
    "6 min",
    [
      sec(
        "The frame",
        [
          "Subject + 会/能 + verb. Negative: 不会 (never learned), 不能 (not possible or not allowed). Question: 你会…吗？ or 会不会…？",
          "Skills: 游泳 (swim), 开车 (drive), 做饭 (cook), 唱歌 (sing), 跳舞 (dance), 说中文 (speak Chinese).",
        ],
        [ex("你会不会唱歌？", "Nǐ huì bu huì chàng gē?", "Can you sing?"), ex("我不能喝酒，我要开车。", "Wǒ bù néng hē jiǔ, wǒ yào kāi chē.", "I can't drink -- I'm driving.")],
        [mt("Match the skill.", [["游泳", "swim"], ["开车", "drive"], ["做饭", "cook"], ["跳舞", "dance"]], "Skills take 会.")]
      ),
    ],
    [
      listen("我不会跳舞。", "What does the speaker say?", ["I can't dance.", "I don't want to dance.", "I can dance.", "I can't dance today."], 0, "不会: never learned."),
      mc("He can't come -- he's ill:", ["他病了，不能来。", "他病了，不会来。", "他病了，没会来。", "他病了，能不来。"], 0, "Circumstances: 不能."),
      fb(C, "我___游泳。(I can't swim -- never learned.)", "不会", "bú huì", "不会: don't know how."),
      fb(C, "他会___吗？(Can he dance?)", "跳舞", "tiàowǔ", "跳舞: dance."),
      fb(C, "这儿不___开车。(You can't drive here.)", "能", "néng", "Not allowed: 不能."),
      fb(C, "她___唱歌。(She can sing.)", "会", "huì", "A skill: 会."),
      toZh("Can you swim?", "你会游泳吗？", "Nǐ huì yóuyǒng ma?", "会 + 游泳 + 吗.", ["你会不会游泳？", "Nǐ huì bu huì yóuyǒng?"]),
      toZh("I can't drive today.", "我今天不能开车。", "Wǒ jīntiān bù néng kāi chē.", "Today's circumstances: 不能."),
      toZh("My mom can cook.", "我妈妈会做饭。", "Wǒ māma huì zuò fàn.", "A skill: 会."),
      say("你会不会说中文？", "你会不会说中文: can you speak Chinese?", "huì bu huì: the middle bu is light.", "Ask someone if they can speak Chinese."),
    ],
    { previews: ["zh.grammar.le-completed"] }
  ),

  layer(
    S,
    "zh-a1r-le",
    "Contrast: 了, 没 and 还没",
    "Did it, didn't do it, haven't done it yet: the three answers about the past, side by side.",
    "7 min",
    [
      sec(
        "Three answers",
        [
          `Done: verb + 了. ${zh("我吃了。", "Wǒ chī le.")} / ${zh("我买了一本书。", "Wǒ mǎi le yì běn shū.")}`,
          `Didn't happen: 没 + verb, and 了 disappears. ${zh("我没去。", "Wǒ méi qù.")} Saying \"我没去了\" is a classic mistake.`,
          `Not yet (but expected): 还没 + verb (+ 呢). ${zh("我还没吃。", "Wǒ hái méi chī.")}`,
        ],
        [ex("你吃饭了吗？", "Nǐ chī fàn le ma?", "Have you eaten?"), ex("吃了。", "Chī le.", "Yes, I have."), ex("还没吃。", "Hái méi chī.", "Not yet.")],
        [mc("I didn't go:", ["我没去。", "我没去了。", "我不去了。", "我去没。"], 0, "没 + verb, no 了.")]
      ),
      sec(
        "Not with 不",
        [
          "不 is for the present, future, habits and wishes: 我不去 (I'm not going / I don't go). For something that didn't happen, use 没.",
          "So 我不吃 is \"I don't eat it\" or \"I won't eat,\" and 我没吃 is \"I didn't eat.\"",
        ],
        [ex("他昨天没来。", "Tā zuótiān méi lái.", "He didn't come yesterday.")],
        [mc("He didn't come yesterday:", ["他昨天没来。", "他昨天不来。", "他昨天没来了。", "他没昨天来。"], 0, "A past non-event: 没.")]
      ),
    ],
    [
      ms(
        "Which sentences are correct? (Choose all that apply.)",
        ["我昨天没去学校。", "她买了一杯咖啡。", "我还没吃。", "他没来了。"],
        [0, 1, 2],
        "没 + verb never takes 了."
      ),
      mc("你吃饭了吗？ -- \"Not yet\":", ["还没吃。", "没吃了。", "不吃。", "吃了没。"], 0, "还没 + verb: not yet."),
      mc("我不喝咖啡 means:", ["I don't drink coffee.", "I didn't drink coffee.", "I haven't drunk coffee yet.", "I drank coffee."], 0, "不: a habit."),
      fb(C, "我昨天___去银行。(I didn't go to the bank yesterday.)", "没", "méi", "A past non-event: 没."),
      fb(C, "她买___两本书。(She bought two books.)", "了", "le", "Verb + 了 + quantity."),
      fb(C, "他___没回家。(He hasn't come home yet.)", "还", "hái", "还没: not yet."),
      toZh("I didn't eat.", "我没吃。", "Wǒ méi chī.", "没 + verb, no 了.", ["我没吃饭。", "Wǒ méi chī fàn.", "我没有吃。", "Wǒ méiyǒu chī."]),
      toZh("Have you eaten?", "你吃饭了吗？", "Nǐ chī fàn le ma?", "Verb + object + 了 + 吗.", ["你吃了吗？", "Nǐ chī le ma?"]),
      toEn("我还没买。", "Wǒ hái méi mǎi.", "I haven't bought it yet.", "还没: not yet.", ["I have not bought it yet.", "I haven't bought it yet", "I haven't bought yet.", "Not bought yet.", "I still haven't bought it."]),
      say("还没吃呢。", "还没吃呢 (hái méi chī ne): not yet.", "Two rising tones, then a high chī.", "Tell a friend you haven't eaten yet."),
    ]
  ),

  layer(
    S,
    "zh-a1d-le",
    "Pattern Practice: Verb + 了",
    "Finished actions with 了: after the verb with a number, or at the end of the sentence.",
    "6 min",
    [
      sec(
        "Where 了 goes",
        [
          "With a counted object, 了 goes right after the verb: 我喝了两杯茶 (I drank two cups of tea).",
          "With a plain object, it goes at the end: 我吃饭了 (I've eaten). Questions add 吗: 你买票了吗？",
        ],
        [ex("我喝了两杯茶。", "Wǒ hē le liǎng bēi chá.", "I drank two cups of tea."), ex("他回家了。", "Tā huí jiā le.", "He's gone home.")],
        [mc("I bought three books:", ["我买了三本书。", "我买三本书了了。", "我了买三本书。", "我买三了本书。"], 0, "Verb + 了 + number + measure word + noun.")]
      ),
    ],
    [
      listen("我看了一个电影。", "What did the speaker do?", ["Watched a film", "Bought a film ticket", "Wants to see a film", "Didn't watch a film"], 0, "看了: watched."),
      mc("你买票了吗？ asks:", ["Did you buy the ticket?", "Do you want a ticket?", "Where's the ticket?", "Will you buy a ticket?"], 0, "Verb + object + 了 + 吗."),
      fb(C, "我喝___一杯咖啡。(I drank a cup of coffee.)", "了", "le", "Verb + 了 + quantity."),
      fb(C, "她回家___。(She's gone home.)", "了", "le", "A plain object: 了 at the end."),
      fb(C, "他们吃___饺子。(They ate dumplings.)", "了", "le", "Verb + 了."),
      fb(C, "我买了两___书。(I bought two books.)", "本", "běn", "Verb + 了 + number + 本."),
      toZh("I've eaten.", "我吃饭了。", "Wǒ chī fàn le.", "了 at the end with a plain object.", ["我吃了。", "Wǒ chī le."]),
      toZh("She drank two cups of tea.", "她喝了两杯茶。", "Tā hē le liǎng bēi chá.", "Verb + 了 + 两杯茶."),
      toZh("Did he go?", "他去了吗？", "Tā qù le ma?", "Verb + 了 + 吗."),
      say("我买了一本书。", "我买了一本书 (wǒ mǎi le yì běn shū): I bought a book.", "le is short and light.", "Tell someone you bought a book."),
    ]
  ),

  layer(
    S,
    "zh-a1d-mei",
    "Substitution: 没 + Verb and 还没",
    "Negate finished actions: swap verbs into 没 + verb and 还没 + verb, dropping 了 every time.",
    "6 min",
    [
      sec(
        "Drop the 了",
        [
          "Affirmative: 我买了. Negative: 我没买 -- the 了 goes. 没有 + verb is the same as 没 + verb, a little more formal.",
          "Not yet: 还没 + verb, often with 呢 at the end: 他还没来呢.",
        ],
        [ex("我没买。", "Wǒ méi mǎi.", "I didn't buy it."), ex("他还没来呢。", "Tā hái méi lái ne.", "He hasn't come yet.")],
        [mc("Negative of 我看了: ", ["我没看。", "我没看了。", "我不看了。", "我看没。"], 0, "没 + verb, no 了.")]
      ),
    ],
    [
      mc("他还没回家 means:", ["He hasn't come home yet.", "He didn't go home.", "He won't go home.", "He went home."], 0, "还没: not yet."),
      mc("Which is correct?", ["我没喝咖啡。", "我没喝了咖啡。", "我不喝了咖啡。", "我喝没咖啡。"], 0, "没 + verb, no 了."),
      fb(C, "她昨天___来。(She didn't come yesterday.)", "没", "méi", "没 + verb."),
      fb(C, "我们还没___呢。(We haven't eaten yet.)", "吃", "chī", "还没 + verb + 呢."),
      fb(C, "你买票了吗？-- 没___。(No, I didn't.)", "买", "mǎi", "Answer with 没 + the verb."),
      fb(C, "他___没去北京。(He hasn't gone to Beijing yet.)", "还", "hái", "还没: not yet."),
      toZh("I didn't see him.", "我没看他。", "Wǒ méi kàn tā.", "没 + verb.", ["我没看见他。", "Wǒ méi kànjiàn tā.", "我没有看见他。", "Wǒ méiyǒu kànjiàn tā."]),
      toZh("She hasn't bought it yet.", "她还没买。", "Tā hái méi mǎi.", "还没 + verb.", ["她还没买呢。", "Tā hái méi mǎi ne."]),
      toZh("We didn't go to school.", "我们没去学校。", "Wǒmen méi qù xuéxiào.", "没 + 去 + place."),
      say("我没去。", "我没去 (wǒ méi qù): I didn't go.", "méi rises, qù falls.", "Say you didn't go."),
    ]
  ),
];
