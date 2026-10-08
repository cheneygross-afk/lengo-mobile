// B2 unit 1 practice lessons (即使, 不管 vs. 即使, 既然, 否则/不然,
// 虽然/尽管 vs. 即使), drafted from their specs.

import { ex, fb, layer, listen, mc, say, sec, toEn, toZh, wo } from "./authoring";
import { ZH_B2_SPEC as S } from "./specs";

const C = "填空 · Complete (characters or pinyin).";

export const ZH_B2_LAYERS_U1 = [
  layer(
    S,
    "zh-b2d-jishi",
    "Pattern Practice: Even If",
    "即使/哪怕 + a supposed condition, subject + 也 + a result that holds anyway -- with weather, money, time and effort.",
    "6 min",
    [
      sec(
        "The frame",
        [
          "即使 (or 哪怕) + supposed condition, subject + 也 + result. Negative results: 也不, 也没. 哪怕再 + adjective means however … it gets.",
        ],
        [ex("即使没有人帮我，我也能完成。", "Jíshǐ méiyǒu rén bāng wǒ, wǒ yě néng wánchéng.", "Even if nobody helps me, I can finish it."), ex("哪怕下大雪，他也不会迟到。", "Nǎpà xià dà xuě, tā yě bú huì chídào.", "Even if it snows heavily, he won't be late.")],
        [mc("Even if I'm busy, I'll call you:", ["即使很忙，我也会给你打电话。", "即使很忙，我会也给你打电话。", "即使很忙，也我会给你打电话。", "很忙即使，我也会给你打电话。"], 0, "Subject + 也 + 会.")]
      ),
    ],
    [
      listen("即使你不同意，我也要试试。", "What will the speaker do?", ["Try anyway", "Give up", "Ask again", "Wait for agreement"], 0, "即使不同意，也要试: tries anyway."),
      mc("哪怕只有五分钟，也要休息一下 means:", ["Even if it's only five minutes, take a break.", "Only rest for five minutes.", "Don't rest for five minutes.", "Five minutes is too long."], 0, "哪怕 … 也: even if."),
      fb(C, "即使明天考试，他___在玩儿游戏。(Even with an exam tomorrow, he's still gaming.)", "也", "yě", "即使 … 也 + result.", { altAnswers: ["还", "hái"] }),
      fb(C, "___再贵，我也要去看这场演出。(However pricey it is, I'm going to this show.)", "哪怕", "nǎpà", "哪怕再 + adjective.", { altAnswers: ["即使", "jíshǐ"] }),
      fb(C, "即使失败了，我也不___后悔。(Even if I fail, I won't regret it.)", "会", "huì", "也不会: won't."),
      fb(C, "哪怕只有一个人来，比赛也___进行。(Even if only one person comes, the match will go on.)", "要", "yào", "也要: still has to.", { altAnswers: ["会", "huì"] }),
      toZh("Even if it's raining, I'll go running.", "即使下雨，我也去跑步。", "Jíshǐ xià yǔ, wǒ yě qù pǎobù.", "即使 + condition, 也 + result.", ["即使下雨，我也要去跑步。", "Jíshǐ xià yǔ, wǒ yě yào qù pǎobù.", "哪怕下雨，我也去跑步。", "Nǎpà xià yǔ, wǒ yě qù pǎobù.", "即使下雨，我也会去跑步。", "Jíshǐ xià yǔ, wǒ yě huì qù pǎobù."]),
      toZh("Even if you don't come, we'll start.", "即使你不来，我们也开始。", "Jíshǐ nǐ bù lái, wǒmen yě kāishǐ.", "即使 + negative condition.", ["即使你不来，我们也会开始。", "Jíshǐ nǐ bù lái, wǒmen yě huì kāishǐ.", "哪怕你不来，我们也开始。", "Nǎpà nǐ bù lái, wǒmen yě kāishǐ.", "即使你不来，我们也要开始。", "Jíshǐ nǐ bù lái, wǒmen yě yào kāishǐ."]),
      toZh("Even if I'm very tired, I study every day.", "即使很累，我也每天学习。", "Jíshǐ hěn lèi, wǒ yě měitiān xuéxí.", "即使 + adjective.", ["即使很累，我每天也学习。", "Jíshǐ hěn lèi, wǒ měitiān yě xuéxí.", "哪怕很累，我也每天学习。", "Nǎpà hěn lèi, wǒ yě měitiān xuéxí.", "即使我很累，我也每天学习。", "Jíshǐ wǒ hěn lèi, wǒ yě měitiān xuéxí."]),
      wo(["哪怕", "再", "忙", "他", "也", "每天", "给", "妈妈", "打电话"], "However busy he is, he calls his mum every day.", "哪怕再 + adjective, subject + 也."),
      say("即使你不相信，这也是真的。", "即使你不相信，这也是真的: even if you don't believe it, it's true.", "jíshǐ: rising, then a dip.", "Insist on something surprising."),
    ]
  ),

  layer(
    S,
    "zh-b2r-buguan",
    "Contrast: 不管 or 即使?",
    "One supposed condition takes 即使; every possibility -- a question word, A-not-A or 还是 -- takes 不管 or 无论.",
    "7 min",
    [
      sec(
        "One condition or every condition",
        [
          "即使 + one \"what if\": 即使下雨 (even if it rains). 不管 + every possibility: 不管下不下雨, 不管天气怎么样 (whatever the weather). Both take 也 or 都 in the second half.",
          "The test: does the condition hold a question word, an A-not-A or 还是? Then 不管. Is it a single supposition? Then 即使.",
        ],
        [ex("即使下雨，我们也去。", "Jíshǐ xià yǔ, wǒmen yě qù.", "Even if it rains, we'll go."), ex("不管天气怎么样，我们都去。", "Bùguǎn tiānqì zěnmeyàng, wǒmen dōu qù.", "Whatever the weather, we'll go.")],
        [mc("___你同意不同意，我都要去。", ["不管", "即使", "既然", "虽然"], 0, "A-not-A → 不管.")]
      ),
    ],
    [
      mc("___明天下雨，比赛也照常进行。", ["即使", "不管", "无论", "既然"], 0, "One supposed condition → 即使."),
      mc("___谁问你，你都说不知道。", ["不管", "即使", "哪怕", "尽管"], 0, "A question word → 不管."),
      listen("不管你说什么，我都不会改变主意。", "What does the speaker mean?", ["Nothing you say will change my mind.", "Tell me what to do.", "I'll change my mind if you ask.", "I don't know what to say."], 0, "不管 + 什么: whatever."),
      fb(C, "___多晚，我都等你。(However late it is, I'll wait for you.)", "不管", "bùguǎn", "不管 + 多 + adjective.", { altAnswers: ["无论", "wúlùn"] }),
      fb(C, "___只有一点儿希望，我们也要试试。(Even if there's only a little hope, we must try.)", "即使", "jíshǐ", "One supposition → 即使.", { altAnswers: ["哪怕", "nǎpà", "即便", "jíbiàn"] }),
      fb(C, "无论你去哪儿，我___跟着你。(Wherever you go, I'll follow you.)", "都", "dōu", "无论 … 都.", { altAnswers: ["也", "yě"] }),
      toZh("Whoever you are, you have to queue.", "不管你是谁，都要排队。", "Bùguǎn nǐ shì shéi, dōu yào páiduì.", "不管 + 谁.", ["无论你是谁，都要排队。", "Wúlùn nǐ shì shéi, dōu yào páiduì.", "不管你是谁，你都要排队。", "Bùguǎn nǐ shì shéi, nǐ dōu yào páiduì.", "Bùguǎn nǐ shì shuí, dōu yào páiduì."]),
      toZh("Even if you're right, don't get angry.", "即使你是对的，也别生气。", "Jíshǐ nǐ shì duì de, yě bié shēngqì.", "即使 + supposition, 也 + advice.", ["即使你对，也别生气。", "Jíshǐ nǐ duì, yě bié shēngqì.", "即使你是对的，也不要生气。", "Jíshǐ nǐ shì duì de, yě bú yào shēngqì.", "哪怕你是对的，也别生气。", "Nǎpà nǐ shì duì de, yě bié shēngqì."]),
      toEn("不管是大城市还是小城市，房子都越来越贵了。", "Bùguǎn shì dà chéngshì háishi xiǎo chéngshì, fángzi dōu yuè lái yuè guì le.", "Whether in big cities or small ones, housing is getting more and more expensive.", "不管是 A 还是 B.", ["In big cities and small cities alike, housing keeps getting more expensive.", "Whether it's a big city or a small one, homes are getting pricier.", "Whether big city or small, houses are getting more and more expensive.", "Be it a big or small city, housing is getting more and more expensive."]),
      say("不管发生什么，我都在你身边。", "不管发生什么，我都在你身边: whatever happens, I'm by your side.", "fāshēng: two high tones.", "Promise to stand by someone."),
    ]
  ),

  layer(
    S,
    "zh-b2d-jiran",
    "Substitution: Since That's So",
    "Swap the fact after 既然 and draw the conclusion that goes with it: since it's raining, since you like it, since everyone's here.",
    "6 min",
    [
      sec(
        "Swap the fact",
        [
          "既然 + fact, (subject +) 就 + conclusion. 既然下雨了 → 就别去了. 既然你喜欢 → 就买吧. 既然大家都到了 → 就开始吧. The subject of the second half goes before 就.",
        ],
        [ex("既然大家都到了，我们就开始吧。", "Jìrán dàjiā dōu dào le, wǒmen jiù kāishǐ ba.", "Since everyone's here, let's begin."), ex("既然你已经决定了，我就不说什么了。", "Jìrán nǐ yǐjīng juédìng le, wǒ jiù bù shuō shénme le.", "Since you've already decided, I won't say any more.")],
        [mc("Since it's late, let's go home:", ["既然这么晚了，我们就回家吧。", "既然这么晚了，我们也回家吧。", "这么晚了既然，我们就回家吧。", "既然这么晚了，就我们回家吧。"], 0, "Subject before 就.")]
      ),
    ],
    [
      listen("既然你不想吃，就别吃了。", "What does the speaker say?", ["Don't eat it if you don't want to.", "Eat it all.", "Try it first.", "I'll eat it."], 0, "既然 … 就别: then don't."),
      mc("既然 starts from:", ["a fact both people accept", "a guess", "a wish", "a question"], 0, "既然: given that."),
      fb(C, "___你会说中文，就帮我翻译一下吧。(Since you speak Chinese, translate this for me.)", "既然", "jìrán", "既然 + known fact."),
      fb(C, "既然下雨了，我们___在家看电影吧。(Since it's raining, let's watch a film at home.)", "就", "jiù", "既然 … 就."),
      fb(C, "既然你已经道歉了，我就___生气了。(Since you've apologised, I'm not angry any more.)", "不", "bù", "不 … 了: no longer."),
      fb(C, "既然票都买好了，我们就一定___去。(Since the tickets are bought, we have to go.)", "要", "yào", "一定要: must.", { altAnswers: ["得", "děi"] }),
      toZh("Since you like it, buy it.", "既然你喜欢，就买吧。", "Jìrán nǐ xǐhuan, jiù mǎi ba.", "既然 … 就 + 吧.", ["既然喜欢，就买吧。", "Jìrán xǐhuan, jiù mǎi ba.", "既然你喜欢，就买了吧。", "Jìrán nǐ xǐhuan, jiù mǎi le ba.", "你既然喜欢，就买吧。", "Nǐ jìrán xǐhuan, jiù mǎi ba."]),
      toZh("Since you're busy, I'll come back tomorrow.", "既然你很忙，我就明天再来。", "Jìrán nǐ hěn máng, wǒ jiù míngtiān zài lái.", "既然 … 就 + plan.", ["既然你忙，我就明天再来。", "Jìrán nǐ máng, wǒ jiù míngtiān zài lái.", "既然你很忙，那我明天再来。", "Jìrán nǐ hěn máng, nà wǒ míngtiān zài lái.", "既然你很忙，我明天再来吧。", "Jìrán nǐ hěn máng, wǒ míngtiān zài lái ba."]),
      toZh("Since it's so expensive, let's not buy it.", "既然这么贵，我们就别买了。", "Jìrán zhème guì, wǒmen jiù bié mǎi le.", "既然 … 就别.", ["既然这么贵，就别买了。", "Jìrán zhème guì, jiù bié mǎi le.", "既然这么贵，我们就不买了。", "Jìrán zhème guì, wǒmen jiù bù mǎi le.", "既然太贵了，我们就别买了。", "Jìrán tài guì le, wǒmen jiù bié mǎi le."]),
      wo(["既然", "你", "知道", "了", "我", "就", "不", "说", "了"], "Since you know, I won't say anything.", "既然 … 就不 … 了."),
      say("既然来了，就尝尝这里的小吃吧！", "既然来了，就尝尝这里的小吃吧: since you're here, try the local snacks!", "chángchang: rising, then light.", "Welcome a visiting friend."),
    ]
  ),

  layer(
    S,
    "zh-b2r-fouze",
    "Dialogue: The Night Before the Trip",
    "A parent and a teenager the night before a flight: go to bed, pack, charge your phone, don't forget your passport -- or else.",
    "7 min",
    [
      sec(
        "Packing",
        [
          "A: 明天几点出发？ B: 七点。你早点儿睡，不然起不来。 A: 我还得收拾行李呢。 B: 那快点儿收拾，否则来不及了。 A: 知道了。 B: 别忘了带护照，要不然上不了飞机！",
          "起不来 (can't get up), 来不及 (not enough time), 上不了 (can't get on) -- potential complements are the usual \"bad result\".",
        ],
        [ex("你早点儿睡，不然明天起不来。", "Nǐ zǎo diǎnr shuì, bùrán míngtiān qǐ bu lái.", "Go to bed early, or you won't be able to get up tomorrow."), ex("别忘了带护照，要不然上不了飞机。", "Bié wàng le dài hùzhào, yàobùrán shàng bu liǎo fēijī.", "Don't forget your passport, or you can't board the plane.")],
        [mc("起不来 means:", ["can't get up", "won't come", "didn't stand", "get up early"], 0, "Potential complement: can't manage to get up.")]
      ),
    ],
    [
      listen("快收拾行李，否则来不及了。", "Why hurry?", ["Otherwise there won't be time.", "The taxi is waiting.", "The bags are heavy.", "It's raining."], 0, "否则来不及: otherwise too late."),
      mc("Which line warns about a bad result?", ["多穿点儿，不然会冷的。", "我们明天出发。", "几点出发？", "我收拾好了。"], 0, "不然 + bad result."),
      fb(C, "带上雨伞，___会被雨淋的。(Take an umbrella, or you'll get soaked.)", "不然", "bùrán", "不然 + 会 … 的.", { altAnswers: ["否则", "fǒuzé", "要不然", "yàobùrán"] }),
      fb(C, "你得先订酒店，否则到时候就没有房间___。(Book the hotel first, or there'll be no rooms left.)", "了", "le", "没有 … 了: none left."),
      fb(C, "把手机充好电，要不___路上没电了怎么办？(Charge your phone, or what if it dies on the way?)", "然", "rán", "要不然: otherwise."),
      toZh("Set an alarm, or you'll oversleep.", "定个闹钟，不然你会睡过头的。", "Dìng ge nàozhōng, bùrán nǐ huì shuì guò tóu de.", "Advice + 不然 + result.", ["定个闹钟，否则你会睡过头的。", "Dìng ge nàozhōng, fǒuzé nǐ huì shuì guò tóu de.", "定一个闹钟，不然你会睡过头。", "Dìng yí ge nàozhōng, bùrán nǐ huì shuì guò tóu.", "定个闹钟，要不然会睡过头的。", "Dìng ge nàozhōng, yàobùrán huì shuì guò tóu de."]),
      toZh("Leave now, otherwise you'll miss the bus.", "现在走吧，不然赶不上公共汽车了。", "Xiànzài zǒu ba, bùrán gǎn bu shàng gōnggòng qìchē le.", "不然 + 赶不上.", ["现在就走吧，不然赶不上公交车了。", "Xiànzài jiù zǒu ba, bùrán gǎn bu shàng gōngjiāochē le.", "现在走吧，否则赶不上公共汽车了。", "Xiànzài zǒu ba, fǒuzé gǎn bu shàng gōnggòng qìchē le.", "现在走吧，不然赶不上车了。", "Xiànzài zǒu ba, bùrán gǎn bu shàng chē le."]),
      toEn("记得带护照，要不然上不了飞机。", "Jìde dài hùzhào, yàobùrán shàng bu liǎo fēijī.", "Remember your passport, otherwise you can't get on the plane.", "要不然: otherwise.", ["Remember to bring your passport, or you won't be able to board.", "Don't forget your passport, otherwise you can't board the plane.", "Remember your passport or you can't get on the plane.", "Remember to take your passport, otherwise you won't get on the plane."]),
      say("快点儿，不然我们就不等你了！", "快点儿，不然我们就不等你了: hurry up, or we won't wait for you!", "bùrán: falling, then rising.", "Hurry a friend who's running late."),
    ]
  ),

  layer(
    S,
    "zh-b2r-concession",
    "Contrast: Fact or Supposition?",
    "虽然 and 尽管 start from something true; 即使 and 哪怕 from something that might be. Choose by asking: is it true now?",
    "7 min",
    [
      sec(
        "Is it true now?",
        [
          "虽然/尽管 + a fact, then 但是, 可是 or 还是. 即使/哪怕 + a supposition, then 也.",
          "Ask: is the condition true now, or did it happen? → 虽然/尽管. Might it be true? → 即使/哪怕.",
        ],
        [ex("虽然他很累，但是还在工作。", "Suīrán tā hěn lèi, dànshì hái zài gōngzuò.", "Although he's tired, he's still working."), ex("即使他很累，也会来帮忙。", "Jíshǐ tā hěn lèi, yě huì lái bāngmáng.", "Even if he's tired, he'll come and help.")],
        [mc("It WAS raining, but we went anyway:", ["尽管下雨，我们还是去了。", "即使下雨，我们也去。", "如果下雨，我们就不去。", "哪怕下雨，我们也去。"], 0, "A fact → 尽管/虽然.")]
      ),
    ],
    [
      mc("___明天下雪，我们也要出发。", ["即使", "尽管", "虽然", "因为"], 0, "Tomorrow: a supposition → 即使."),
      mc("___昨天下了大雪，我们还是出发了。", ["尽管", "即使", "哪怕", "如果"], 0, "Yesterday: a fact → 尽管."),
      listen("虽然这家饭店很贵，可是菜很好吃。", "What's true of the restaurant?", ["Expensive but delicious", "Cheap and delicious", "Expensive and bad", "Cheap but bad"], 0, "虽然贵，可是好吃."),
      fb(C, "___他学了三年中文，但是还不太会说。(Although he's studied Chinese for three years, he can't speak it well.)", "虽然", "suīrán", "Fact → 虽然.", { altAnswers: ["尽管", "jǐnguǎn"] }),
      fb(C, "即使你不喜欢，___要尊重别人的选择。(Even if you don't like it, respect other people's choices.)", "也", "yě", "即使 … 也."),
      fb(C, "尽管很多人反对，他___是坚持了自己的想法。(Although many objected, he stuck to his idea.)", "还", "hái", "尽管 … 还是."),
      toZh("Although it's far, I walk there every day.", "虽然很远，但是我每天走路去。", "Suīrán hěn yuǎn, dànshì wǒ měitiān zǒulù qù.", "Fact → 虽然 … 但是.", ["虽然很远，我每天还是走路去。", "Suīrán hěn yuǎn, wǒ měitiān háishi zǒulù qù.", "尽管很远，我每天还是走路去。", "Jǐnguǎn hěn yuǎn, wǒ měitiān háishi zǒulù qù.", "虽然很远，可是我每天走路去。", "Suīrán hěn yuǎn, kěshì wǒ měitiān zǒulù qù."]),
      toZh("Even if it's far, I'll walk there.", "即使很远，我也走路去。", "Jíshǐ hěn yuǎn, wǒ yě zǒulù qù.", "Supposition → 即使 … 也.", ["即使很远，我也要走路去。", "Jíshǐ hěn yuǎn, wǒ yě yào zǒulù qù.", "哪怕很远，我也走路去。", "Nǎpà hěn yuǎn, wǒ yě zǒulù qù.", "即使很远，我也会走路去。", "Jíshǐ hěn yuǎn, wǒ yě huì zǒulù qù."]),
      toEn("尽管他没说，我也知道他不高兴。", "Jǐnguǎn tā méi shuō, wǒ yě zhīdào tā bù gāoxìng.", "Even though he didn't say so, I knew he wasn't happy.", "尽管 + fact.", ["Although he didn't say it, I knew he was unhappy.", "He didn't say anything, but I knew he wasn't happy.", "Even though he said nothing, I could tell he was unhappy.", "Although he didn't say so, I knew he wasn't happy."]),
      say("虽然很难，但是很有意思。", "虽然很难，但是很有意思: it's hard, but it's interesting.", "suīrán: two rising tones.", "Describe learning Chinese."),
    ]
  ),
];
