// Synced from cheneygross-afk/lengo:src/lib/lessons/zh/b1-layers-u2.ts by scripts/sync-content.mjs -- edit it there, not here.
// B1 unit 2 practice lessons (potential complements, 起来, verb
// reduplication, 一…就, 刚 vs. 已经, 又/再), drafted from their specs.

import { ex, fb, layer, listen, mc, ms, mt, say, sec, toEn, toZh, wo } from "./authoring";
import { ZH_B1_SPEC as S } from "./specs";

const C = "Complete (characters or pinyin).";

export const ZH_B1_LAYERS_U2 = [
  layer(
    S,
    "zh-b1d-potential",
    "Pattern Practice: Can or Can't Manage It",
    "Verb + 得/不 + result with every result you know: 看得见, 买不到, 吃得完, 睡不着, 拿得动.",
    "6 min",
    [
      sec(
        "The frame",
        [
          "Can: verb + 得 + result -- 听得懂. Can't: verb + 不 + result -- 听不懂. Ask: 听得懂吗？ or 听得懂听不懂？",
          "Results: 懂 (understand), 见 (perceive), 到 (get), 完 (finish), 着 (manage to sleep), 动 (move), 下 (fit), 开 (open).",
        ],
        [ex("这个箱子放得下吗？", "Zhège xiāngzi fàng de xià ma?", "Will this case fit?"), ex("门打不开。", "Mén dǎ bu kāi.", "The door won't open.")],
        [mc("The door won't open:", ["门打不开。", "门不打开。", "门没打开得。", "门打开不。"], 0, "Verb + 不 + result.")]
      ),
    ],
    [
      listen("我看不见，前面的人太高了。", "What's the problem?", ["The speaker can't see.", "The speaker can't hear.", "The speaker is too tall.", "The speaker is late."], 0, "看不见: can't see."),
      mc("吃得完吗？ asks:", ["Can you finish it?", "Did you eat it?", "Do you want to eat?", "Is it tasty?"], 0, "吃得完: able to finish eating."),
      fb(C, "门打不___。(The door won't open.)", "开", "kāi", "打不开: can't open."),
      fb(C, "这么多菜，我们吃得___吗？(Can we finish all this food?)", "完", "wán", "吃得完: can finish."),
      fb(C, "太吵了，我睡不___。(It's too noisy -- I can't sleep.)", "着", "zháo", "睡不着: can't get to sleep."),
      fb(C, "你说得太快，我听___懂。(You speak too fast -- I can't follow.)", "不", "bu", "Verb + 不 + result.", { altAnswers: ["bù"] }),
      toZh("I can't find it.", "我找不到。", "Wǒ zhǎo bu dào.", "找 + 不 + 到."),
      toZh("Can you see it?", "你看得见吗？", "Nǐ kàn de jiàn ma?", "看 + 得 + 见 + 吗.", ["你看得见看不见？", "Nǐ kàn de jiàn kàn bu jiàn?"]),
      toZh("This suitcase won't fit.", "这个箱子放不下。", "Zhège xiāngzi fàng bu xià.", "放 + 不 + 下.", ["箱子放不下。", "Xiāngzi fàng bu xià."]),
      say("太吵了，我睡不着。", "太吵了，我睡不着: it's too noisy, I can't sleep.", "shuì bu zháo: fall, light, rise.", "Complain about a noisy hotel room."),
    ]
  ),

  layer(
    S,
    "zh-b1r-qilai",
    "Transform: Say It with 起来",
    "Rephrase sentences with 起来: \"it seems\" becomes 看起来/听起来, \"began to\" becomes verb + 起来, \"remembered\" becomes 想起来.",
    "7 min",
    [
      sec(
        "Three rewrites",
        [
          "这个菜好像很好吃 (this dish seems tasty) → 这个菜看起来很好吃.",
          "他开始笑了 (he began to laugh) → 他笑起来了.",
          "我记起他的名字了 → 我想起他的名字来了 / 我想起来了.",
        ],
        [ex("这首歌听起来很熟悉。", "Zhè shǒu gē tīng qǐlai hěn shúxī.", "This song sounds familiar."), ex("天冷起来了。", "Tiān lěng qǐlai le.", "It's getting cold.")],
        [mc("他开始哭了 → with 起来:", ["他哭起来了。", "他起来哭了。", "他哭了起来来。", "起来他哭了。"], 0, "Verb + 起来 + 了.")]
      ),
    ],
    [
      mt("Match.", [["看起来", "looks"], ["听起来", "sounds"], ["吃起来", "tastes"], ["想起来", "remember"]], "起来 for seeming and recalling."),
      ms("Which use 起来 correctly? (Choose all that apply.)", ["这个主意听起来不错。", "她笑起来很好看。", "我想起来了！", "我起来看很好吃。"], [0, 1, 2], "起来 follows the verb."),
      listen("这首歌听起来很熟悉。", "What does the speaker say about the song?", ["It sounds familiar.", "It's too loud.", "It's new.", "It's sad."], 0, "听起来很熟悉: sounds familiar."),
      fb(C, "这个主意听___不错。(That idea sounds good.)", "起来", "qǐlai", "听起来: sounds."),
      fb(C, "天冷起来___。(It's getting cold.)", "了", "le", "Adjective + 起来 + 了: getting."),
      fb(C, "我想___了，他叫王明！(I remember now -- he's called Wang Ming!)", "起来", "qǐlai", "想起来: remember."),
      toZh("This dish tastes great.", "这个菜吃起来很好吃。", "Zhège cài chī qǐlai hěn hǎochī.", "吃起来 + description.", ["这个菜吃起来很香。", "Zhège cài chī qǐlai hěn xiāng.", "这道菜吃起来很好吃。", "Zhè dào cài chī qǐlai hěn hǎochī."]),
      toZh("It's started to rain.", "下起雨来了。", "Xià qǐ yǔ lai le.", "Verb + 起 + object + 来.", ["开始下雨了。", "Kāishǐ xià yǔ le.", "下雨了。", "Xià yǔ le."]),
      toEn("她笑起来很好看。", "Tā xiào qǐlai hěn hǎokàn.", "She looks lovely when she smiles.", "笑起来: when she smiles.", ["She's pretty when she smiles.", "She looks beautiful when she smiles.", "Her smile is lovely.", "She has a lovely smile."]),
      say("听起来不错！", "听起来不错: sounds good!", "búcuò: 不 rises before cuò.", "React to a friend's plan."),
    ]
  ),

  layer(
    S,
    "zh-b1d-reduplication",
    "Substitution: 看看, 试试, 休息休息",
    "Swap verbs into the casual \"have a go\" forms: AA, A一A, ABAB and verb + 一下.",
    "6 min",
    [
      sec(
        "Four forms",
        [
          "One syllable: AA (看看) or A一A (看一看). Two syllables: ABAB (休息休息). Any verb: + 一下 (看一下).",
          "Past actions double with 了 in the middle: 我看了看 (I had a quick look).",
        ],
        [ex("我看了看，没找到。", "Wǒ kàn le kàn, méi zhǎo dào.", "I had a quick look but didn't find it."), ex("我们讨论讨论吧。", "Wǒmen tǎolùn tǎolùn ba.", "Let's talk it over.")],
        [mc("I had a quick look:", ["我看了看。", "我看看了。", "我看了一看了。", "我了看看。"], 0, "Past: A了A.")]
      ),
    ],
    [
      mt("Match each verb to its casual form.", [["看", "看看"], ["休息", "休息休息"], ["试", "试一试"], ["介绍", "介绍一下"]], "AA, ABAB, A一A, + 一下."),
      listen("我们讨论讨论吧。", "What's being suggested?", ["Talking it over", "Leaving", "Eating", "Resting"], 0, "讨论讨论: talk it over."),
      fb(C, "你___看这件衣服。(Have a look at this outfit.)", "看", "kàn", "AA: 看看."),
      fb(C, "我们休息___吧。(Let's have a little rest.)", "一下", "yíxià", "Verb + 一下: do it briefly.", { altAnswers: ["yí xià"] }),
      fb(C, "我看了___，没找到。(I had a quick look but didn't find it.)", "看", "kàn", "Past: 看了看."),
      fb(C, "请等___，我马上来。(Wait a moment -- I'm coming.)", "一下", "yíxià", "Verb + 一下."),
      toZh("Let me have a try.", "我试试。", "Wǒ shìshi.", "AA: 试试.", ["让我试试。", "Ràng wǒ shìshi.", "我试一试。", "Wǒ shì yi shì.", "我试一下。", "Wǒ shì yíxià."]),
      toZh("Let's talk it over.", "我们讨论讨论吧。", "Wǒmen tǎolùn tǎolùn ba.", "ABAB + 吧.", ["我们讨论一下吧。", "Wǒmen tǎolùn yíxià ba."]),
      toZh("Please introduce yourself.", "请你介绍一下自己。", "Qǐng nǐ jièshào yíxià zìjǐ.", "Verb + 一下.", ["请介绍一下你自己。", "Qǐng jièshào yíxià nǐ zìjǐ.", "请介绍一下自己。", "Qǐng jièshào yíxià zìjǐ."]),
      say("你尝尝，很好吃！", "你尝尝，很好吃: have a taste -- it's delicious!", "chángchang: rising, then light.", "Offer a friend some of your food."),
    ]
  ),

  layer(
    S,
    "zh-b1d-yi-jiu",
    "Circuit: As Soon As",
    "Rounds of 一 A 就 B: daily habits, reactions and promises.",
    "6 min",
    [
      sec(
        "The frame",
        [
          "(Subject) + 一 + verb A, (subject) + 就 + verb B. Habits: 我一起床就喝咖啡. Promises: 我一到就告诉你. Reactions: 他一听就笑了.",
        ],
        [ex("我一起床就喝咖啡。", "Wǒ yì qǐchuáng jiù hē kāfēi.", "I have coffee as soon as I get up."), ex("他一听就笑了。", "Tā yì tīng jiù xiào le.", "He laughed as soon as he heard it.")],
        [mc("I'll tell you as soon as I arrive:", ["我一到就告诉你。", "我就到一告诉你。", "一我到告诉你就。", "我到一就告诉你。"], 0, "一 + verb, 就 + verb.")]
      ),
    ],
    [
      listen("他一听就笑了。", "What did he do when he heard it?", ["He laughed straight away.", "He got angry.", "He didn't hear.", "He left."], 0, "一听就笑: laughed at once."),
      mc("我一累就头疼 means:", ["Whenever I'm tired, I get a headache.", "I'm tired and have a headache now.", "I got a headache once.", "A headache makes me tired."], 0, "一…就: whenever."),
      fb(C, "我一起床___喝咖啡。(I have coffee as soon as I get up.)", "就", "jiù", "就 + second verb."),
      fb(C, "她___回家就做饭。(She cooks as soon as she gets home.)", "一", "yì", "一 + first verb.", { altAnswers: ["yī"] }),
      fb(C, "我一到就___你。(I'll tell you as soon as I arrive.)", "告诉", "gàosu", "告诉: tell."),
      fb(C, "他一喝咖啡就睡不___。(Whenever he drinks coffee he can't sleep.)", "着", "zháo", "睡不着: can't sleep."),
      toZh("I'll text you as soon as I arrive.", "我一到就给你发短信。", "Wǒ yí dào jiù gěi nǐ fā duǎnxìn.", "一 + arrive, 就 + text.", ["我一到就给你发信息。", "Wǒ yí dào jiù gěi nǐ fā xìnxī.", "我一到就发短信给你。", "Wǒ yí dào jiù fā duǎnxìn gěi nǐ."]),
      toZh("Whenever I'm tired, I get a headache.", "我一累就头疼。", "Wǒ yí lèi jiù tóu téng.", "一…就 here means whenever."),
      wo(["她", "一", "看", "书", "就", "想", "睡觉"], "Whenever she reads, she gets sleepy.", "一 A 就 B."),
      say("我一到家就给你打电话。", "我一到家就给你打电话: I'll call you as soon as I'm home.", "yí dào: 一 rises before dào.", "Promise to call when you get home."),
    ]
  ),

  layer(
    S,
    "zh-b1r-gang",
    "Contrast: 刚 or 已经?",
    "刚 says something happened only a moment ago; 已经 says it's done -- maybe long ago. Choose by how recent it is.",
    "7 min",
    [
      sec(
        "Recent vs. done",
        [
          `刚 + verb: very recent, no 了 needed -- 他刚走 (he's just this moment left). 已经 + verb + 了: done, with no hint of when -- 他已经走了 (he's already gone).`,
          "刚才 is a point in time a moment ago and works like 昨天: 刚才他来了.",
        ],
        [ex("火车刚开。", "Huǒchē gāng kāi.", "The train has just left."), ex("火车已经开了。", "Huǒchē yǐjīng kāi le.", "The train has already left.")],
        [mc("The film has just started (a moment ago):", ["电影刚开始。", "电影已经开始。", "电影刚开始了了。", "电影开始刚。"], 0, "Very recent: 刚.")]
      ),
    ],
    [
      mt("Match.", [["他刚走", "he's just left"], ["他已经走了", "he's already gone"], ["刚才他来了", "he came a moment ago"]], "刚, 已经, 刚才."),
      ms("Which are correct? (Choose all that apply.)", ["我刚到。", "我已经到了。", "我已经到。", "刚才我看见他了。"], [0, 1, 3], "已经 needs 了."),
      listen("火车刚开。", "When did the train leave?", ["Just now", "Long ago", "It hasn't left", "Tomorrow"], 0, "刚: just."),
      fb(C, "我___吃完饭，不饿。(I've just eaten -- I'm not hungry.)", "刚", "gāng", "Very recent: 刚."),
      fb(C, "他已经回家___。(He's already gone home.)", "了", "le", "已经 + verb + 了."),
      fb(C, "___你给谁打电话了？(Who were you calling just now?)", "刚才", "gāngcái", "刚才: a moment ago."),
      toZh("The meeting has just started.", "会议刚开始。", "Huìyì gāng kāishǐ.", "刚 + verb.", ["会刚开始。", "Huì gāng kāishǐ."]),
      toZh("The meeting has already started.", "会议已经开始了。", "Huìyì yǐjīng kāishǐ le.", "已经 + verb + 了.", ["会已经开始了。", "Huì yǐjīng kāishǐ le."]),
      toEn("我刚学中文的时候，觉得很难。", "Wǒ gāng xué Zhōngwén de shíhou, juéde hěn nán.", "When I first started learning Chinese, I found it hard.", "刚 + verb + 的时候.", ["When I'd just started learning Chinese, I thought it was hard.", "When I first started learning Chinese I found it difficult.", "When I first began learning Chinese, it felt hard.", "When I had just started learning Chinese, I found it very hard."]),
      say("我刚到，你在哪儿？", "我刚到，你在哪儿: I've just arrived -- where are you?", "gāng dào: high, then falling.", "Call a friend from the station."),
    ]
  ),

  layer(
    S,
    "zh-b1d-you-zai",
    "Circuit: 又 or 再, Round by Round",
    "Rapid choices between 又 (again, already) and 再 (again, still to come; and then).",
    "6 min",
    [
      sec(
        "The test",
        [
          "Has the repeat happened? 又 (with 了). Is it still to come? 再. Is it \"first X, then Y\" in the future? 再.",
        ],
        [ex("你怎么又迟到了？", "Nǐ zěnme yòu chídào le?", "Why are you late again?"), ex("我们下次再来。", "Wǒmen xià cì zài lái.", "We'll come again next time.")],
        [mc("We'll come again next time:", ["我们下次再来。", "我们下次又来。", "我们又下次来。", "我们下次来再。"], 0, "Still to come: 再.")]
      ),
    ],
    [
      listen("你怎么又迟到了？", "What's the complaint?", ["You're late again.", "You're early again.", "You'll be late.", "Don't come again."], 0, "又…了: again (already)."),
      listen("我们下次再来。", "When will they come?", ["Next time", "Never", "Just now", "Again today"], 0, "下次再来: come again next time."),
      mc("He went to Beijing again yesterday:", ["他昨天又去北京了。", "他昨天再去北京了。", "他昨天去又北京。", "他又昨天去北京再。"], 0, "Already happened: 又."),
      fb(C, "他昨天___没来上课。(He missed class again yesterday.)", "又", "yòu", "A repeat that already happened: 又."),
      fb(C, "这个菜很好吃，我想___吃一次。(I want to eat it once more.)", "再", "zài", "A repeat still to come: 再."),
      fb(C, "先吃饭，___看电视。(Eat first, then watch TV.)", "再", "zài", "再: and then."),
      fb(C, "今天___下雨了。(It's raining again today.)", "又", "yòu", "Already: 又 + 了."),
      toZh("Come again next time.", "下次再来。", "Xià cì zài lái.", "再 + verb.", ["下次再来吧。", "Xià cì zài lái ba.", "欢迎下次再来。", "Huānyíng xià cì zài lái."]),
      toZh("He's late again.", "他又迟到了。", "Tā yòu chídào le.", "又 + verb + 了."),
      say("欢迎下次再来！", "欢迎下次再来: please come again!", "huānyíng: high, then rising.", "Say goodbye to a guest."),
    ]
  ),
];
