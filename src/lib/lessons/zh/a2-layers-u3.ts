// A2 unit 3 practice lessons (result and direction complements, 给, 把,
// 让, phone plans), drafted from their specs in specs.ts.

import { ex, fb, layer, listen, mc, ms, mt, say, sec, toEn, toZh, wo, zh } from "./authoring";
import { ZH_A2_SPEC as S } from "./specs";

const C = "Complete (characters or pinyin).";

export const ZH_A2_LAYERS_U3 = [
  layer(
    S,
    "zh-a2d-results",
    "Pattern Practice: Verb + Result",
    "完, 懂, 到, 错, 好, 见: add the result to the verb, and say when you didn't get it.",
    "6 min",
    [
      sec(
        "Attempt + result",
        [
          "Verb + result + 了 when it worked: 我看完了, 我找到了. 没 + verb + result when it didn't: 我没听懂, 我没找到.",
          "Results so far: 完 (finished), 懂 (understood), 到 (got there), 错 (wrong), 好 (done properly), 见 (perceived).",
        ],
        [ex("我买到票了。", "Wǒ mǎi dào piào le.", "I managed to buy tickets."), ex("我没看懂。", "Wǒ méi kàn dǒng.", "I didn't understand (what I read).")],
        [mc("I've finished writing:", ["我写完了。", "我写懂了。", "我写到了。", "我完写了。"], 0, "完: finished.")]
      ),
    ],
    [
      mt("Match the result.", [["买到", "manage to buy"], ["看见", "see"], ["做好", "get it done"], ["说错", "say wrongly"]], "Verb + result."),
      listen("我没听懂。", "What does the speaker say?", ["I didn't understand.", "I didn't hear.", "I'm not listening.", "I understood."], 0, "没听懂: didn't understand."),
      fb(C, "我找___我的手机了。(I've found my phone.)", "到", "dào", "找到: find."),
      fb(C, "你看___了吗？(Have you finished reading?)", "完", "wán", "看完: finish reading."),
      fb(C, "对不起，我说___了。(Sorry, I said it wrong.)", "错", "cuò", "说错: say wrongly."),
      fb(C, "我没看___他。(I didn't see him.)", "见", "jiàn", "看见: see."),
      toZh("I didn't find it.", "我没找到。", "Wǒ méi zhǎo dào.", "没 + 找到."),
      toZh("Have you finished eating?", "你吃完了吗？", "Nǐ chī wán le ma?", "吃完 + 了 + 吗.", ["你吃完了没有？", "Nǐ chī wán le méiyǒu?"]),
      toZh("I understood.", "我听懂了。", "Wǒ tīng dǒng le.", "听懂 + 了.", ["我懂了。", "Wǒ dǒng le.", "我看懂了。", "Wǒ kàn dǒng le."]),
      say("我买到票了！", "我买到票了: I got the tickets!", "mǎi dào: a dip, then a fall.", "Tell a friend you managed to get tickets."),
    ]
  ),

  layer(
    S,
    "zh-a2d-directions-comp",
    "Substitution: 进来, 出去, 回来…",
    "Swap direction words into movement verbs: up, down, in, out, back, over -- toward you (来) or away (去).",
    "6 min",
    [
      sec(
        "Building blocks",
        [
          "Direction: 上 (up), 下 (down), 进 (in), 出 (out), 回 (back), 过 (over). Then 来 (toward the speaker) or 去 (away).",
          "So 上来 (come up), 下去 (go down), 进来 (come in), 出去 (go out), 回来 (come back), 过来 (come over).",
        ],
        [ex("你过来一下。", "Nǐ guòlai yíxià.", "Come over here a moment."), ex("他回去了。", "Tā huíqu le.", "He's gone back.")],
        [mt("Match.", [["上来", "come up"], ["下去", "go down"], ["出去", "go out"], ["回来", "come back"]], "Direction + 来/去.")]
      ),
    ],
    [
      listen("你过来一下。", "What does the speaker want?", ["You to come over", "You to go out", "You to sit down", "You to go back"], 0, "过来: come over."),
      mc("You're downstairs, calling up to your friend: \"Come down!\"", ["下来吧！", "下去吧！", "上来吧！", "上去吧！"], 0, "Toward you, downward: 下来."),
      fb(C, "妈妈，我回___了！(Mom, I'm back!)", "来", "lai", "回来: come back.", { altAnswers: ["lái"] }),
      fb(C, "他出___了，不在家。(He's gone out -- he's not home.)", "去", "qu", "出去: go out.", { altAnswers: ["qù"] }),
      fb(C, "请进___。(Come in, please.)", "来", "lai", "进来: come in.", { altAnswers: ["lái"] }),
      fb(C, "你什么时候回___中国？(When are you going back to China?)", "去", "qù", "回去: go back (away from here).", { altAnswers: ["qu"] }),
      toZh("Come up!", "上来！", "Shànglai!", "上 + 来.", ["上来吧！", "Shànglai ba!"]),
      toZh("I'm going out.", "我出去。", "Wǒ chūqu.", "出 + 去.", ["我出去了。", "Wǒ chūqu le.", "我要出去。", "Wǒ yào chūqu."]),
      toEn("他还没回来。", "Tā hái méi huílai.", "He hasn't come back yet.", "还没 + 回来.", ["He isn't back yet.", "He's not back yet.", "He has not come back yet.", "He hasn't returned yet."]),
      say("你过来一下！", "你过来一下 (nǐ guòlai yíxià): come here a moment!", "yíxià softens it.", "Call someone over."),
    ]
  ),

  layer(
    S,
    "zh-a2r-gei",
    "Transform: Put 给 in Its Place",
    "English puts \"for her\" and \"to me\" at the end; Chinese puts 给 + person before the verb. Rebuild sentences the Chinese way.",
    "7 min",
    [
      sec(
        "Move it forward",
        [
          "\"I bought a present for my mom\" → 我给妈妈买了一个礼物. The 给 phrase moves in front of the verb.",
          `\"Give me…\" stays verb-first: ${zh("给我一杯水。", "Gěi wǒ yì bēi shuǐ.")} -- here 给 is the verb itself.`,
        ],
        [ex("我给你做饭。", "Wǒ gěi nǐ zuò fàn.", "I'll cook for you."), ex("他给我写了一封信。", "Tā gěi wǒ xiě le yì fēng xìn.", "He wrote me a letter.")],
        [mc("I'll cook for you:", ["我给你做饭。", "我做饭给你。", "我做给你饭。", "给我你做饭。"], 0, "给 + person before the verb.")]
      ),
    ],
    [
      ms("Which are correct? (Choose all that apply.)", ["我给朋友买了一本书。", "给我看看。", "我买了一本书给朋友的。", "他给我介绍了他的女朋友。"], [0, 1, 3], "给 + person goes before the verb."),
      mc("他给了我一个苹果 -- who has the apple now?", ["I do.", "He does.", "Nobody.", "We both do."], 0, "给 + person + thing: given to me."),
      listen("我给你介绍一下。", "What's happening?", ["An introduction", "A present", "A phone call", "A letter"], 0, "介绍: introduce."),
      fb(C, "我___妈妈买了一个礼物。(I bought Mom a present.)", "给", "gěi", "给 + person before the verb."),
      fb(C, "他给我写___一封信。(He wrote me a letter.)", "了", "le", "Verb + 了."),
      fb(C, "请给我一___水。(A glass of water, please.)", "杯", "bēi", "给 + person + amount."),
      toZh("I'll make you a cake.", "我给你做一个蛋糕。", "Wǒ gěi nǐ zuò yí ge dàngāo.", "给 + person + verb."),
      toZh("Give me a look.", "给我看看。", "Gěi wǒ kànkan.", "给我 + 看看.", ["让我看看。", "Ràng wǒ kànkan."]),
      toEn("老师给我们讲了一个故事。", "Lǎoshī gěi wǒmen jiǎng le yí ge gùshi.", "The teacher told us a story.", "给 + person + verb.", ["The teacher told a story to us.", "Our teacher told us a story.", "The teacher told us a story"]),
      say("我给你介绍一下，这是我朋友。", "我给你介绍一下，这是我朋友: let me introduce you -- this is my friend.", "jièshào yíxià: smooth and quick.", "Introduce a friend."),
    ],
    { previews: ["grammar.rang-causative"] }
  ),

  layer(
    S,
    "zh-a2d-ba",
    "Pattern Practice: 把 + Object + Verb + Result",
    "Requests and reports with 把: put it here, shut it, finish it, bring it -- always with something after the verb.",
    "7 min",
    [
      sec(
        "The frame",
        [
          "Subject + 把 + thing + verb + what happens to it: 我把书放在桌子上 (I put the book on the table), 请把门关上 (please shut the door).",
          "The verb never stands alone after 把: add a result (完, 好), a place (在…), a direction (来, 去) or 了.",
        ],
        [ex("请把窗户打开。", "Qǐng bǎ chuānghu dǎkāi.", "Please open the window."), ex("我把钥匙忘在家里了。", "Wǒ bǎ yàoshi wàng zài jiā li le.", "I left my keys at home.")],
        [mc("Please put the book on the table:", ["请把书放在桌子上。", "请把书放。", "请放书把在桌子上。", "请把放书在桌子上。"], 0, "把 + thing + verb + place.")]
      ),
    ],
    [
      listen("请把门关上。", "What's being asked?", ["Shut the door.", "Open the door.", "Come in.", "Lock the window."], 0, "关上: shut."),
      mc("Which is wrong?", ["我把饭吃。", "我把饭吃完了。", "请把饭拿来。", "他把饭做好了。"], 0, "The verb needs something after it."),
      fb(C, "请___窗户打开。(Please open the window.)", "把", "bǎ", "把 + thing + verb."),
      fb(C, "我把钥匙忘___家里了。(I left my keys at home.)", "在", "zài", "Verb + 在 + place."),
      fb(C, "你把作业做___了吗？(Have you finished your homework?)", "完", "wán", "A result after the verb."),
      fb(C, "请把那本书拿___。(Please bring that book here.)", "来", "lai", "A direction: 拿来.", { altAnswers: ["lái"] }),
      toZh("Please shut the door.", "请把门关上。", "Qǐng bǎ mén guān shang.", "把 + 门 + 关上.", ["请关上门。", "Qǐng guān shang mén.", "请关门。", "Qǐng guān mén."]),
      toZh("I put the phone on the table.", "我把手机放在桌子上了。", "Wǒ bǎ shǒujī fàng zài zhuōzi shang le.", "把 + thing + 放在 + place.", ["我把手机放在桌子上。", "Wǒ bǎ shǒujī fàng zài zhuōzi shang."]),
      wo(["请", "把", "这", "杯", "茶", "喝", "了"], "Please drink this tea.", "把 + thing + verb + 了."),
      say("请把手机放在桌子上。", "请把手机放在桌子上: please put your phone on the table.", "qǐng bǎ: third + third, so qǐng rises.", "Ask someone to put their phone down."),
    ]
  ),

  layer(
    S,
    "zh-a2r-rang-gei",
    "Contrast: 让 or 给?",
    "让 + person + verb: they do it (let, make, ask). 给 + person + verb: you do it, for them. Same slot, opposite meaning.",
    "7 min",
    [
      sec(
        "Who does the verb?",
        [
          `${zh("我让他做饭。", "Wǒ ràng tā zuò fàn.")} I had him cook -- he cooks. ${zh("我给他做饭。", "Wǒ gěi tā zuò fàn.")} I cook for him -- I cook.`,
          "Both sit before the verb with a person after them, so the only way to tell them apart is the meaning: who's actually doing it?",
        ],
        [ex("妈妈让我买菜。", "Māma ràng wǒ mǎi cài.", "Mom asked me to buy groceries."), ex("妈妈给我买菜。", "Māma gěi wǒ mǎi cài.", "Mom buys groceries for me.")],
        [mc("我让他开车 -- who drives?", ["He does.", "I do.", "Both of us.", "Nobody."], 0, "让: the person after it does the verb.")]
      ),
    ],
    [
      mt("Match.", [["我让她唱歌", "she sings"], ["我给她唱歌", "I sing (for her)"], ["他让我等", "I wait"], ["他给我做饭", "he cooks"]], "让: they do it. 给: for them."),
      ms("In which sentences does the speaker do the action? (Choose all that apply.)", ["我给你写信。", "我让你写信。", "我给妈妈做蛋糕。", "我让妈妈做蛋糕。"], [0, 2], "With 给, the subject does it."),
      listen("老师让我们写汉字。", "Who writes characters?", ["The students", "The teacher", "Nobody", "Everyone except the teacher"], 0, "让 + 我们: we write."),
      fb(C, "爸爸不___我开车。(Dad won't let me drive.)", "让", "ràng", "不让: not let."),
      fb(C, "我___你买了一杯咖啡。(I bought you a coffee.)", "给", "gěi", "给: for you."),
      fb(C, "老师___我们回家。(The teacher let us go home.)", "让", "ràng", "让 + person + verb: they do it."),
      toZh("Mom asked me to buy groceries.", "妈妈让我买菜。", "Māma ràng wǒ mǎi cài.", "让 + person + verb.", ["妈妈让我去买菜。", "Māma ràng wǒ qù mǎi cài."]),
      toZh("I'll cook for you tonight.", "我今天晚上给你做饭。", "Wǒ jīntiān wǎnshang gěi nǐ zuò fàn.", "给 + person + verb.", ["今天晚上我给你做饭。", "Jīntiān wǎnshang wǒ gěi nǐ zuò fàn.", "我晚上给你做饭。", "Wǒ wǎnshang gěi nǐ zuò fàn."]),
      toEn("妈妈让我早点儿睡。", "Māma ràng wǒ zǎo diǎnr shuì.", "Mom makes me go to bed early.", "让: makes me.", ["Mom wants me to sleep early.", "My mom makes me go to bed early.", "Mom tells me to go to bed early.", "Mom made me go to bed early.", "Mom told me to go to sleep early."]),
      say("让我想想。", "让我想想: let me think.", "wǒ xiǎng: third + third, so wǒ rises.", "Ask for a moment to think."),
    ]
  ),

  layer(
    S,
    "zh-a2r-phone",
    "Dialogue: Arranging to Meet",
    "A phone call from start to finish: 喂, asking if someone's free, agreeing a time and place, and the goodbye.",
    "7 min",
    [
      sec(
        "The call",
        ["Li Ming calls Anna to arrange a meal."],
        [
          ex("喂，是安娜吗？", "Wéi, shì Ānnà ma?", "Hello, is that Anna?"),
          ex("是我。你好，李明！", "Shì wǒ. Nǐ hǎo, Lǐ Míng!", "Speaking. Hi, Li Ming!"),
          ex("你星期六有空吗？我们一起吃饭吧。", "Nǐ xīngqīliù yǒu kòng ma? Wǒmen yìqǐ chī fàn ba.", "Are you free on Saturday? Let's eat together."),
          ex("好啊！几点？在哪儿见面？", "Hǎo a! Jǐ diǎn? Zài nǎr jiànmiàn?", "Great! What time? Where shall we meet?"),
          ex("晚上六点，在地铁站见。", "Wǎnshang liù diǎn, zài dìtiězhàn jiàn.", "Six in the evening, at the subway station."),
          ex("好，不见不散！", "Hǎo, bú jiàn bú sàn!", "OK -- see you there!"),
        ],
        [mc("Where will they meet?", ["At the subway station", "At a restaurant", "At Anna's home", "At school"], 0, "在地铁站见.")]
      ),
    ],
    [
      mc("You answer the phone and the caller asks for you. You say:", ["是我。", "我是吗。", "你是谁？", "不见不散。"], 0, "是我: speaking."),
      listen("你星期六有空吗？", "What is being asked?", ["Are you free on Saturday?", "What are you doing Saturday?", "Is Saturday OK?", "Did you call on Saturday?"], 0, "有空: free."),
      fb(C, "___，是王老师吗？(Hello, is that Teacher Wang?)", "喂", "wéi", "喂: hello on the phone."),
      fb(C, "我们晚上六点见___吧。(Let's meet at six this evening.)", "面", "miàn", "见面: meet."),
      fb(C, "我晚上给妈妈打___。(I'll call Mom this evening.)", "电话", "diànhuà", "给 + person + 打电话."),
      toZh("Are you free tomorrow?", "你明天有空吗？", "Nǐ míngtiān yǒu kòng ma?", "Time + 有空 + 吗.", ["你明天有时间吗？", "Nǐ míngtiān yǒu shíjiān ma?"]),
      toZh("See you at the subway station.", "在地铁站见。", "Zài dìtiězhàn jiàn.", "在 + place + 见.", ["我们在地铁站见。", "Wǒmen zài dìtiězhàn jiàn.", "地铁站见。", "Dìtiězhàn jiàn."]),
      toEn("不见不散！", "Bú jiàn bú sàn!", "See you there!", "A fixed promise to meet.", ["Be there!", "See you there, for sure!", "Don't leave until we meet!", "We won't leave until we meet!", "See you there for sure!"]),
      say("喂，你好！请问李明在吗？", "喂，你好！请问李明在吗: hello! Is Li Ming there?", "wéi rises, like a question.", "Call and ask for a friend."),
    ]
  ),
];
