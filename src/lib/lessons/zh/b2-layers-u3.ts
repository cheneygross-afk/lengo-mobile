// B2 unit 3 practice lessons (并不, 难道, 到底, 竟然/没想到, 恐怕,
// 差点儿), drafted from their specs.

import { ex, fb, layer, listen, mc, say, sec, toEn, toZh, wo } from "./authoring";
import { ZH_B2_SPEC as S } from "./specs";

const C = "填空 · Complete (characters or pinyin).";

export const ZH_B2_LAYERS_U3 = [
  layer(
    S,
    "zh-b2r-bing",
    "Transform: Setting the Record Straight",
    "Turn a plain negative into a correction with 并: 我没说 becomes 我并没有说 when someone thought you did.",
    "7 min",
    [
      sec(
        "Adding 并",
        [
          "A plain negative states a fact: 他不是老师. Add 并 when you're correcting what someone assumed: 其实他并不是老师 (actually, he isn't).",
          "我没说 → 我并没有说 (I never said that -- whatever you heard).",
        ],
        [ex("大家都觉得他很有钱，其实他并不富。", "Dàjiā dōu juéde tā hěn yǒu qián, qíshí tā bìng bú fù.", "Everyone thinks he's rich, but actually he isn't."), ex("你以为我忘了？我并没有忘。", "Nǐ yǐwéi wǒ wàng le? Wǒ bìng méiyǒu wàng.", "You thought I'd forgotten? I hadn't.")],
        [mc("我没有生气 → correcting someone who thinks you're angry:", ["我并没有生气。", "我没有并生气。", "我生气并没有。", "并我没有生气。"], 0, "并 right before 没有.")]
      ),
    ],
    [
      mc("When is 并不 natural?", ["When correcting what someone assumed", "When ordering food", "When asking a question", "When giving directions"], 0, "并: contradicts an expectation."),
      listen("这道题看起来很难，其实并不难。", "What's the truth about the question?", ["It isn't hard.", "It's very hard.", "It's impossible.", "It's long."], 0, "并不难: actually not hard."),
      fb(C, "大家都说那个电影好看，可是我觉得___不好看。(Everyone said the film was good, but I didn't think so.)", "并", "bìng", "并 + 不: contradicting others."),
      fb(C, "我并___有说过要去。(I never said I'd go.)", "没", "méi", "并没有 + verb."),
      fb(C, "其实他并不___你想的那么坏。(He's not actually as bad as you think.)", "像", "xiàng", "并不像 … 那么."),
      toZh("I'm not actually hungry.", "我其实并不饿。", "Wǒ qíshí bìng bú è.", "其实 + 并不.", ["其实我并不饿。", "Qíshí wǒ bìng bú è.", "我并不饿。", "Wǒ bìng bú è."]),
      toZh("He didn't actually come.", "他其实并没有来。", "Tā qíshí bìng méiyǒu lái.", "并没有 + verb.", ["其实他并没有来。", "Qíshí tā bìng méiyǒu lái.", "他并没有来。", "Tā bìng méiyǒu lái.", "他并没来。", "Tā bìng méi lái."]),
      toEn("学得慢并不代表学不会。", "Xué de màn bìng bú dàibiǎo xué bu huì.", "Learning slowly doesn't mean you can't learn it.", "并不代表: doesn't mean.", ["Being a slow learner doesn't mean you can't learn.", "Learning slowly does not mean you can't learn it.", "Slow learning doesn't mean failing to learn.", "Learning slowly doesn't mean being unable to learn."]),
      wo(["他", "看起来", "很", "严肃", "其实", "并", "不", "凶"], "He looks serious, but actually he isn't fierce.", "其实 + 并不 + adjective."),
      say("我并不是不想去，只是没时间。", "我并不是不想去，只是没时间: it's not that I don't want to go -- I just don't have time.", "bìng bú shì: falling, rising, falling.", "Explain why you're turning down an invitation."),
    ]
  ),

  layer(
    S,
    "zh-b2d-nandao",
    "Substitution: Surely Not?",
    "Swap the verb in 难道…吗 -- didn't you see, don't you remember, could I be wrong -- and flip the answer each time.",
    "6 min",
    [
      sec(
        "Swap the verb",
        [
          "难道你不知道吗？ → 难道你不记得吗？ / 难道你没看见吗？ / 难道你不饿吗？ A negative 难道 question means surely yes; a positive one means surely not: 难道我会忘吗？",
        ],
        [ex("难道你没看见那个牌子吗？", "Nándào nǐ méi kàn jiàn nàge páizi ma?", "Didn't you see the sign?"), ex("难道我说错了吗？", "Nándào wǒ shuō cuò le ma?", "Did I say something wrong?")],
        [mc("难道你不饿吗 means:", ["Surely you're hungry?", "You aren't hungry.", "Are you full?", "I'm hungry."], 0, "Negative 难道 question → surely yes.")]
      ),
    ],
    [
      listen("难道你不记得我了吗？", "What is the speaker surprised by?", ["The listener doesn't remember them.", "The listener remembers everything.", "The listener is late.", "The listener is hungry."], 0, "不记得我: doesn't remember me."),
      mc("难道我会不管你吗 means:", ["Of course I'd never abandon you.", "I won't help you.", "Will you help me?", "I don't care about you."], 0, "Positive question → strong no."),
      fb(C, "难道你没___我的短信吗？(Didn't you get my text?)", "收到", "shōudào", "收到: receive."),
      fb(C, "___这么简单的问题你都不会吗？(Can't you even do such an easy question?)", "难道", "nándào", "难道 + negative question."),
      fb(C, "难道你不想家___？(Don't you miss home?)", "吗", "ma", "难道 … 吗."),
      fb(C, "难道我会___你吗？(Would I forget you?)", "忘了", "wàng le", "Positive 难道 question: of course not.", { altAnswers: ["忘记", "wàngjì"] }),
      toZh("Haven't you eaten yet?", "难道你还没吃饭吗？", "Nándào nǐ hái méi chī fàn ma?", "难道 + 还没.", ["你难道还没吃饭吗？", "Nǐ nándào hái méi chī fàn ma?", "难道你还没吃吗？", "Nándào nǐ hái méi chī ma?"]),
      toZh("Isn't it too expensive?", "难道不太贵吗？", "Nándào bú tài guì ma?", "难道不 … 吗: surely it is.", ["这难道不太贵吗？", "Zhè nándào bú tài guì ma?", "难道这不太贵吗？", "Nándào zhè bú tài guì ma?"]),
      toZh("Could I be wrong?", "难道我错了？", "Nándào wǒ cuò le?", "难道 + a doubtful guess.", ["难道我错了吗？", "Nándào wǒ cuò le ma?", "难道是我错了？", "Nándào shì wǒ cuò le?", "难道是我错了吗？", "Nándào shì wǒ cuò le ma?"]),
      wo(["难道", "你", "不", "觉得", "太", "贵", "了", "吗"], "Don't you think it's too expensive?", "难道 + 不觉得 + 吗."),
      say("难道你没听说吗？他要结婚了！", "难道你没听说吗？他要结婚了: haven't you heard? He's getting married!", "nándào: rising, then falling.", "Share surprising news."),
    ]
  ),

  layer(
    S,
    "zh-b2d-daodi",
    "Circuit: What on Earth?",
    "Round after round of 到底 and 究竟: with a question word, with A-not-A, and 到底还是 for \"in the end\".",
    "6 min",
    [
      sec(
        "Pressing for an answer",
        [
          "到底 + a question word or A-not-A: 到底去哪儿, 到底买不买. 究竟 is the formal twin. Never with 吗. In a statement, 到底还是 means in the end.",
        ],
        [ex("我们到底去哪儿吃饭？", "Wǒmen dàodǐ qù nǎr chī fàn?", "So where are we going to eat, then?"), ex("你到底买不买？", "Nǐ dàodǐ mǎi bu mǎi?", "Are you buying it or not?")],
        [mc("Which is correct?", ["你到底喜不喜欢？", "你到底喜欢吗？", "到底你喜欢吗？", "你喜欢到底吗？"], 0, "到底 + A-not-A, no 吗.")]
      ),
    ],
    [
      listen("这个问题究竟怎么解决？", "What does the speaker want?", ["A real solution to the problem", "To ignore the problem", "To ask someone else", "To go home"], 0, "究竟怎么解决: how exactly to solve it."),
      mc("他到底还是来了 means:", ["He came in the end.", "He never came.", "He came early.", "Will he come?"], 0, "到底还是: after all."),
      fb(C, "你___想要哪一个？(Which one do you actually want?)", "到底", "dàodǐ", "到底 + question word.", { altAnswers: ["究竟", "jiūjìng"] }),
      fb(C, "你到底同___同意？(Do you agree or not?)", "不", "bu", "A-not-A: 同不同意.", { altAnswers: ["bù"] }),
      fb(C, "这到底是___的错？(Whose fault is this, really?)", "谁", "shéi", "到底 + question word.", { altAnswers: ["shuí"] }),
      fb(C, "等了半天，他到底___是来了。(After a long wait, he came in the end.)", "还", "hái", "到底还是: in the end."),
      toZh("What exactly do you want to say?", "你到底想说什么？", "Nǐ dàodǐ xiǎng shuō shénme?", "到底 + question word.", ["你究竟想说什么？", "Nǐ jiūjìng xiǎng shuō shénme?", "你到底要说什么？", "Nǐ dàodǐ yào shuō shénme?"]),
      toZh("Is it true or not?", "到底是不是真的？", "Dàodǐ shì bu shì zhēn de?", "到底 + A-not-A.", ["这到底是不是真的？", "Zhè dàodǐ shì bu shì zhēn de?", "究竟是不是真的？", "Jiūjìng shì bu shì zhēn de?"]),
      toZh("Where on earth have you been?", "你到底去哪儿了？", "Nǐ dàodǐ qù nǎr le?", "到底 + 哪儿.", ["你到底去哪里了？", "Nǐ dàodǐ qù nǎlǐ le?", "你究竟去哪儿了？", "Nǐ jiūjìng qù nǎr le?"]),
      wo(["我们", "到底", "什么", "时候", "出发"], "So when exactly are we leaving?", "到底 + question word."),
      say("你到底怎么了？跟我说说。", "你到底怎么了？跟我说说: what's really wrong? Talk to me.", "dàodǐ: a fall, then a dip.", "Get a worried friend to open up."),
    ]
  ),

  layer(
    S,
    "zh-b2r-surprise",
    "Dialogue: Fancy Meeting You Here",
    "Two old friends bump into each other and keep surprising each other -- 没想到, 竟然 and 居然 in a real conversation.",
    "7 min",
    [
      sec(
        "In the street",
        [
          "A: 小王？没想到在这儿见到你！ B: 是啊！我上个月搬到这儿了。 A: 你竟然一个人搬家？ B: 对，而且我居然找到了一个很便宜的房子。",
          "没想到 opens a surprising clause; 竟然 and 居然 sit before the verb.",
        ],
        [ex("没想到你也住在这儿！", "Méi xiǎng dào nǐ yě zhù zài zhèr!", "I had no idea you lived here too!"), ex("他居然一个人搬了家。", "Tā jūrán yí ge rén bān le jiā.", "He actually moved house all by himself.")],
        [mc("居然 is closest to:", ["竟然", "已经", "当然", "虽然"], 0, "居然 ≈ 竟然: surprisingly.")]
      ),
    ],
    [
      listen("没想到这家小饭馆的菜这么好吃。", "What surprised the speaker?", ["How good the food was", "How expensive it was", "How small it was", "How slow it was"], 0, "没想到 + 这么好吃."),
      mc("他竟然没来 expresses:", ["surprise that he didn't come", "certainty he'd come", "a plan", "an order"], 0, "竟然: unexpectedly."),
      fb(C, "___想到你会做饭！(I never knew you could cook!)", "没", "méi", "没想到 + clause."),
      fb(C, "他每天都迟到，今天居然___到了。(He's late every day, but today he actually arrived early.)", "早", "zǎo", "早到: arrive early."),
      fb(C, "真没想到，八十岁的奶奶竟然___上网。(Who'd have thought -- grandma, at eighty, goes online.)", "会", "huì", "会 + skill."),
      toZh("I never thought it would snow in April.", "没想到四月会下雪。", "Méi xiǎng dào sìyuè huì xià xuě.", "没想到 + clause.", ["没想到四月还会下雪。", "Méi xiǎng dào sìyuè hái huì xià xuě.", "真没想到四月会下雪。", "Zhēn méi xiǎng dào sìyuè huì xià xuě.", "我没想到四月会下雪。", "Wǒ méi xiǎng dào sìyuè huì xià xuě."]),
      toZh("She actually remembered my name.", "她竟然记得我的名字。", "Tā jìngrán jìde wǒ de míngzi.", "Subject + 竟然 + verb.", ["她居然记得我的名字。", "Tā jūrán jìde wǒ de míngzi.", "她竟然还记得我的名字。", "Tā jìngrán hái jìde wǒ de míngzi."]),
      toEn("这么贵的手机，他居然丢了。", "Zhème guì de shǒujī, tā jūrán diū le.", "He actually lost such an expensive phone.", "居然: surprisingly.", ["He lost such an expensive phone -- unbelievable.", "Such an expensive phone, and he lost it!", "Incredibly, he lost such an expensive phone.", "He went and lost such an expensive phone."]),
      say("哇，没想到你中文说得这么好！", "哇，没想到你中文说得这么好: wow, I had no idea your Chinese was so good!", "méi xiǎng dào: rising, a dip, falling.", "Compliment someone's Chinese."),
    ]
  ),

  layer(
    S,
    "zh-b2r-kongpa",
    "Mission: Saying No Nicely",
    "Your mission: three invitations this week and you can't make any of them. Turn each down with 恐怕, give a reason and suggest another time.",
    "7 min",
    [
      sec(
        "Three polite refusals",
        [
          "恐怕 + the bad news, then a reason, then another time: 周六恐怕不行，我要陪父母。下个周末怎么样？",
          "Potential complements make it gentler still: 去不了 (can't make it), 来不及 (no time).",
        ],
        [ex("周六恐怕不行，我要陪父母。", "Zhōuliù kǒngpà bù xíng, wǒ yào péi fùmǔ.", "Saturday's no good, I'm afraid -- I'm spending it with my parents."), ex("恐怕我去不了，下次吧。", "Kǒngpà wǒ qù bu liǎo, xià cì ba.", "I'm afraid I can't make it -- next time.")],
        [mc("A gentle no:", ["恐怕我去不了。", "我不去。", "我害怕去。", "我不想去。"], 0, "恐怕 softens it.")]
      ),
    ],
    [
      listen("这个周末恐怕不行，下个周末怎么样？", "What does the speaker suggest?", ["Next weekend", "This weekend", "Tonight", "Never"], 0, "下个周末: next weekend."),
      mc("恐怕 or 害怕 -- which one is fear?", ["害怕", "恐怕", "Both", "Neither"], 0, "害怕: be afraid of."),
      fb(C, "明天的聚会我___去不了了。(I'm afraid I can't make tomorrow's party.)", "恐怕", "kǒngpà", "恐怕: softens bad news."),
      fb(C, "恐怕今天来不___了，我们改天吧。(I'm afraid there isn't time today -- let's make it another day.)", "及", "jí", "来不及: not enough time."),
      fb(C, "恐怕我帮不___你，我明天要出差。(I'm afraid I can't help -- I'm away on business tomorrow.)", "了", "liǎo", "帮不了: can't help."),
      toZh("I'm afraid I can't come tomorrow.", "恐怕我明天来不了。", "Kǒngpà wǒ míngtiān lái bu liǎo.", "恐怕 + 来不了.", ["我明天恐怕来不了。", "Wǒ míngtiān kǒngpà lái bu liǎo.", "恐怕我明天不能来。", "Kǒngpà wǒ míngtiān bù néng lái.", "我恐怕明天来不了。", "Wǒ kǒngpà míngtiān lái bu liǎo."]),
      toZh("I'm afraid it's too late.", "恐怕太晚了。", "Kǒngpà tài wǎn le.", "恐怕 + 太 … 了.", ["恐怕已经太晚了。", "Kǒngpà yǐjīng tài wǎn le.", "现在恐怕太晚了。", "Xiànzài kǒngpà tài wǎn le."]),
      toEn("这么大的雨，比赛恐怕要取消了。", "Zhème dà de yǔ, bǐsài kǒngpà yào qǔxiāo le.", "With rain this heavy, I'm afraid the match will be cancelled.", "恐怕 + 要 … 了.", ["It's raining so hard, the match will probably be cancelled.", "With this much rain, I'm afraid the game will be called off.", "The rain is so heavy that I'm afraid the match will be cancelled.", "In this heavy rain, the match will probably be cancelled."]),
      say("真不好意思，这次恐怕去不了了。", "真不好意思，这次恐怕去不了了: I'm really sorry, I'm afraid I can't make it this time.", "bù hǎoyìsi: falling, a dip, falling, light.", "Decline a wedding invitation politely."),
    ]
  ),

  layer(
    S,
    "zh-b2d-chadianr",
    "Speed Round: Near Misses",
    "Quick-fire 差点儿 and 差点儿没: nearly fell, nearly forgot, only just made it.",
    "5 min",
    [
      sec(
        "Fast picks",
        [
          "差点儿 + verb: nearly. Something bad: 差点儿 = 差点儿没 (it didn't happen). Something wanted: 差点儿没 = only just made it.",
        ],
        [ex("我差点儿把咖啡洒了。", "Wǒ chàdiǎnr bǎ kāfēi sǎ le.", "I nearly spilt the coffee."), ex("他差点儿没考上。", "Tā chàdiǎnr méi kǎo shang.", "He only just passed the entrance exam.")],
        [mc("差点儿摔倒 means the same as:", ["差点儿没摔倒", "摔倒了", "没差点儿摔倒", "摔倒差点儿"], 0, "Something bad: both mean you didn't fall.")]
      ),
    ],
    [
      listen("我差点儿错过了最后一班地铁。", "What nearly happened?", ["Missing the last train", "Losing a ticket", "Falling asleep", "Getting lost"], 0, "差点儿错过: nearly missed."),
      listen("好险！差点儿撞车。", "What nearly happened?", ["A car crash", "A fire", "A robbery", "A flood"], 0, "差点儿撞车: nearly crashed."),
      mc("我差点儿没赶上 means:", ["I only just made it.", "I missed it.", "I was early.", "I didn't try."], 0, "Wanted + 差点儿没: only just."),
      fb(C, "我___忘了今天是你的生日。(I nearly forgot it's your birthday today.)", "差点儿", "chàdiǎnr", "差点儿: nearly.", { altAnswers: ["差一点儿", "chà yìdiǎnr"] }),
      fb(C, "他差点儿___车撞了。(He was nearly hit by a car.)", "被", "bèi", "差点儿 + 被."),
      fb(C, "我们差一点儿就___了比赛。(We very nearly lost the match.)", "输", "shū", "输: lose."),
      fb(C, "考试太难了，我差点儿没___。(The exam was so hard I only just passed.)", "及格", "jígé", "及格: pass a test.", { altAnswers: ["通过", "tōngguò"] }),
      toZh("I nearly cried.", "我差点儿哭了。", "Wǒ chàdiǎnr kū le.", "差点儿 + verb.", ["我差一点儿哭了。", "Wǒ chà yìdiǎnr kū le.", "我差点儿就哭了。", "Wǒ chàdiǎnr jiù kū le."]),
      toZh("He only just caught the plane.", "他差点儿没赶上飞机。", "Tā chàdiǎnr méi gǎn shang fēijī.", "Wanted + 差点儿没.", ["他差一点儿没赶上飞机。", "Tā chà yìdiǎnr méi gǎn shang fēijī."]),
      toZh("I nearly lost my passport.", "我差点儿把护照丢了。", "Wǒ chàdiǎnr bǎ hùzhào diū le.", "差点儿 + 把 + thing + verb.", ["我差点儿丢了护照。", "Wǒ chàdiǎnr diū le hùzhào.", "我差一点儿把护照丢了。", "Wǒ chà yìdiǎnr bǎ hùzhào diū le."]),
      say("好险，我差点儿没看见那辆车！", "好险，我差点儿没看见那辆车: that was close -- I almost didn't see that car!", "hǎo xiǎn: two dips -- the first one rises.", "React to a near miss."),
    ]
  ),
];
