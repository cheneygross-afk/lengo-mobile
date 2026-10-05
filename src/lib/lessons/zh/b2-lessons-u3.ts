// Synced from cheneygross-afk/lengo:src/lib/lessons/zh/b2-lessons-u3.ts by scripts/sync-content.mjs -- edit it there, not here.
// Chinese B2, unit 3: nuance and emphasis -- 并不, 难道…吗, 到底 and 究竟,
// 竟然 and 没想到, 恐怕, 差点儿.

import { ex, fb, lesson, listen, mc, say, sec, toEn, toZh, wo, zh } from "./authoring";

const L = "ZH-B2" as const;
const C = "填空 · Complete (characters or pinyin).";

export const ZH_B2_LESSONS_U3 = [
  lesson(
    L,
    "zh-b2-bing",
    "Actually Not: 并不 and 并没有",
    "并 before 不 or 没有 contradicts what someone assumed: it isn't spicy at all, I never said that.",
    "8 min",
    [
      sec(
        "Correcting an assumption",
        [
          `${zh("并", "bìng")} before 不 or 没(有) strengthens a negative that goes against expectations: ${zh("这个菜看起来很辣，其实并不辣。", "Zhège cài kàn qǐlai hěn là, qíshí bìng bú là.")} (It looks spicy, but actually it isn't.)`,
        ],
        [ex("这个菜看起来很辣，其实并不辣。", "Zhège cài kàn qǐlai hěn là, qíshí bìng bú là.", "This dish looks spicy, but actually it isn't."), ex("我并没有说过这句话。", "Wǒ bìng méiyǒu shuō guo zhè jù huà.", "I never said that.")],
        [mc("He thinks I'm angry, but I'm not at all:", ["他以为我生气了，其实我并没有生气。", "他以为我生气了，其实我并生气。", "他以为我生气了，其实我没并生气。", "他以为我并生气了。"], 0, "并 + 没有/不.")]
      ),
      sec(
        "并 never stands alone",
        [
          `并 needs 不 or 没 right after it. Because it corrects an expectation, it often comes with ${zh("其实", "qíshí")} (actually) or 可是.`,
        ],
        [ex("学中文并不像你想的那么难。", "Xué Zhōngwén bìng bú xiàng nǐ xiǎng de nàme nán.", "Learning Chinese isn't nearly as hard as you think.")],
        [mc("Which is correct?", ["我并不累。", "我并累。", "我不并累。", "并我不累。"], 0, "并 + 不 + adjective.")]
      ),
    ],
    [
      mc("他并不是我的男朋友 implies:", ["Someone thought he was; he isn't.", "He is my boyfriend.", "He was my boyfriend.", "I don't know him."], 0, "并: contradicts an assumption."),
      listen("大家都以为他是老师，其实他并不是。", "What is the truth?", ["He isn't a teacher.", "He is a teacher.", "He was a teacher.", "He wants to be a teacher."], 0, "并不是: actually isn't."),
      fb(C, "这件事我___不知道。(I really didn't know about this.)", "并", "bìng", "并 + 不: not at all, contrary to belief."),
      fb(C, "他说他会来，可是他并___有来。(He said he'd come, but he didn't.)", "没", "méi", "并没有 + verb."),
      fb(C, "这个问题并不___你想的那么简单。(This problem isn't as simple as you think.)", "像", "xiàng", "并不像 … 那么: not as … as you think."),
      toZh("It's actually not expensive.", "其实并不贵。", "Qíshí bìng bú guì.", "其实 + 并不.", ["其实并不太贵。", "Qíshí bìng bú tài guì.", "这其实并不贵。", "Zhè qíshí bìng bú guì.", "它其实并不贵。", "Tā qíshí bìng bú guì."]),
      toZh("I didn't forget at all.", "我并没有忘。", "Wǒ bìng méiyǒu wàng.", "并没有 + verb.", ["我并没有忘记。", "Wǒ bìng méiyǒu wàngjì.", "我并没忘。", "Wǒ bìng méi wàng."]),
      toEn("有钱的人并不一定幸福。", "Yǒu qián de rén bìng bù yídìng xìngfú.", "Rich people aren't necessarily happy.", "并不一定: not necessarily.", ["People with money aren't necessarily happy.", "Rich people are not necessarily happy.", "Being rich doesn't necessarily mean being happy.", "Wealthy people aren't always happy."]),
      wo(["这个", "菜", "其实", "并", "不", "辣"], "This dish isn't actually spicy.", "其实 + 并不 + adjective."),
      say("我并没有生气，你别担心。", "我并没有生气，你别担心: I'm not angry at all, don't worry.", "bìng: one sharp fall.", "Reassure a friend."),
    ],
    { teaches: ["grammar.bing-negation"] }
  ),

  lesson(
    L,
    "zh-b2-nandao",
    "Surely Not? 难道…吗",
    "Rhetorical questions with 难道: the speaker expects the opposite answer -- surprised, doubtful or reproachful.",
    "8 min",
    [
      sec(
        "A question that isn't one",
        [
          `${zh("难道", "nándào")} turns a question rhetorical: the speaker expects -- or insists on -- the opposite answer. ${zh("难道你不知道吗？", "Nándào nǐ bù zhīdào ma?")} means \"surely you know!\"`,
        ],
        [ex("难道你不知道吗？", "Nándào nǐ bù zhīdào ma?", "Don't tell me you didn't know!"), ex("难道他忘了？", "Nándào tā wàng le?", "Could he really have forgotten?")],
        [mc("难道你不认识他吗 implies:", ["You surely know him.", "You don't know him.", "I don't know him.", "Who is he?"], 0, "难道 + negative = surely yes.")]
      ),
      sec(
        "Flipping the answer",
        [
          "A negative 难道 question means a strong yes; a positive one means a strong no: 难道我会骗你吗？ (Would I lie to you? -- of course not).",
          "难道 goes before or after the subject, and 吗 at the end can drop: 你难道没听说？",
        ],
        [ex("难道我会骗你吗？", "Nándào wǒ huì piàn nǐ ma?", "Would I lie to you?")],
        [mc("难道我会骗你吗 means:", ["Of course I wouldn't lie to you.", "I lied to you.", "Will you lie to me?", "Did I lie?"], 0, "Positive 难道 question → strong no.")]
      ),
    ],
    [
      mc("难道这是你做的？ sounds:", ["surprised -- you did this?", "certain it was you", "pleased", "bored"], 0, "难道: surprise or doubt."),
      listen("难道你没看到吗？就在桌子上。", "What does the speaker think?", ["You must have seen it -- it's on the table.", "It isn't on the table.", "You saw it under the table.", "Nobody can see it."], 0, "难道没看到: surely you saw it."),
      fb(C, "___你不想去吗？(Don't you want to go?)", "难道", "nándào", "难道 + negative question."),
      fb(C, "你难道连这个都不知道___？(Don't tell me you don't even know this?)", "吗", "ma", "难道 … 吗."),
      fb(C, "难道我会___你吗？(Would I lie to you?)", "骗", "piàn", "骗: deceive, lie to."),
      toZh("Don't you understand?", "难道你不明白吗？", "Nándào nǐ bù míngbai ma?", "难道 + 不 + verb + 吗.", ["你难道不明白吗？", "Nǐ nándào bù míngbai ma?", "难道你不懂吗？", "Nándào nǐ bù dǒng ma?", "难道你还不明白吗？", "Nándào nǐ hái bù míngbai ma?"]),
      toZh("Could it be that he's ill?", "难道他病了？", "Nándào tā bìng le?", "难道 + a guess.", ["难道他生病了？", "Nándào tā shēngbìng le?", "难道他病了吗？", "Nándào tā bìng le ma?", "他难道病了？", "Tā nándào bìng le?", "难道他生病了吗？", "Nándào tā shēngbìng le ma?"]),
      toEn("难道你忘了今天是我的生日吗？", "Nándào nǐ wàng le jīntiān shì wǒ de shēngrì ma?", "Have you really forgotten that today's my birthday?", "难道 … 吗: surely not?", ["Don't tell me you've forgotten today is my birthday?", "Surely you haven't forgotten that it's my birthday today?", "Did you really forget today is my birthday?", "Have you forgotten that today is my birthday?"]),
      wo(["难道", "你", "没", "听说", "吗"], "Haven't you heard?", "难道 + 没 + verb + 吗."),
      say("难道你不相信我吗？", "难道你不相信我吗: don't you believe me?", "nándào: rising, then falling.", "Protest when a friend doubts you."),
    ],
    { teaches: ["grammar.nandao"] }
  ),

  lesson(
    L,
    "zh-b2-daodi",
    "On Earth: 到底 and 究竟",
    "到底 presses a question for a real answer (what on earth?) and, in statements, means in the end. 究竟 is the formal twin.",
    "8 min",
    [
      sec(
        "In questions: on earth",
        [
          `${zh("到底", "dàodǐ")} in a question demands a real answer: ${zh("你到底去不去？", "Nǐ dàodǐ qù bu qù?")} (Are you going or not?) ${zh("究竟", "jiūjìng")} means the same and is more formal.`,
          "It goes after the subject, before the verb or question word -- but before a question-word subject: 到底谁去？",
        ],
        [ex("你到底想要什么？", "Nǐ dàodǐ xiǎng yào shénme?", "What on earth do you want?"), ex("这究竟是怎么回事？", "Zhè jiūjìng shì zěnme huí shì?", "What exactly is going on?")],
        [mc("Are you coming or not?! (impatient)", ["你到底来不来？", "你来不来到底？", "到底你来吗不来？", "你来到底不来？"], 0, "到底 + A-not-A.")]
      ),
      sec(
        "No 吗, and \"in the end\"",
        [
          "到底 needs a question word or A-not-A, never 吗: not 你到底去吗.",
          "In a statement, 到底 means after all, in the end: 他到底还是来了 (he came in the end).",
        ],
        [ex("等了很久，他到底还是来了。", "Děng le hěn jiǔ, tā dàodǐ háishi lái le.", "After a long wait, he came in the end.")],
        [mc("Which is wrong?", ["你到底去吗？", "你到底去不去？", "你到底去哪儿？", "到底谁去？"], 0, "到底 can't take 吗.")]
      ),
    ],
    [
      mc("你到底喜欢谁？ sounds:", ["impatient -- tell me who you really like!", "casual -- who do you like?", "certain", "happy"], 0, "到底: pressing for an answer."),
      listen("你到底什么时候回来？", "What does the speaker want to know?", ["When you're coming back", "Where you are", "Why you left", "Who you're with"], 0, "什么时候: when."),
      fb(C, "这个字___怎么读？(How on earth do you read this character?)", "到底", "dàodǐ", "到底 + question word.", { altAnswers: ["究竟", "jiūjìng"] }),
      fb(C, "你到底去___去？(Are you going or not?)", "不", "bu", "到底 + A-not-A.", { altAnswers: ["bù", "bú"] }),
      fb(C, "___谁说得对？(Who on earth is right?)", "到底", "dàodǐ", "到底 before a question-word subject.", { altAnswers: ["究竟", "jiūjìng"] }),
      toZh("What on earth happened?", "到底发生了什么？", "Dàodǐ fāshēng le shénme?", "到底 + question.", ["到底发生了什么事？", "Dàodǐ fāshēng le shénme shì?", "究竟发生了什么？", "Jiūjìng fāshēng le shénme?", "到底怎么了？", "Dàodǐ zěnme le?"]),
      toZh("Do you want it or not?", "你到底要不要？", "Nǐ dàodǐ yào bu yào?", "到底 + A-not-A.", ["你究竟要不要？", "Nǐ jiūjìng yào bu yào?", "你到底想不想要？", "Nǐ dàodǐ xiǎng bu xiǎng yào?"]),
      toEn("这究竟是谁的错？", "Zhè jiūjìng shì shéi de cuò?", "Whose fault is this, exactly?", "究竟: the formal 到底.", ["Whose fault is this, really?", "Whose fault is this in the end?", "Exactly whose fault is this?", "Whose fault is it really?"]),
      wo(["你", "到底", "想", "去", "哪儿"], "Where on earth do you want to go?", "Subject + 到底 + verb + question word."),
      say("你到底怎么想的？", "你到底怎么想的: what do you really think?", "dàodǐ: a fall, then a dip.", "Push a friend for an honest answer."),
    ],
    { teaches: ["grammar.daodi"] }
  ),

  lesson(
    L,
    "zh-b2-jingran",
    "To My Surprise: 竟然 and 没想到",
    "竟然 (and spoken 居然) before the verb for something unexpected; 没想到 + a whole clause for \"I never thought…\".",
    "8 min",
    [
      sec(
        "竟然: surprisingly",
        [
          `${zh("竟然", "jìngrán")} goes after the subject, before the verb, and marks a surprise: ${zh("他竟然一个人去了西藏。", "Tā jìngrán yí ge rén qù le Xīzàng.")} ${zh("居然", "jūrán")} is a common spoken synonym.`,
        ],
        [ex("他竟然一个人去了西藏。", "Tā jìngrán yí ge rén qù le Xīzàng.", "He went to Tibet on his own -- can you believe it?"), ex("这么难的题，她居然做对了。", "Zhème nán de tí, tā jūrán zuò duì le.", "She actually got such a hard question right.")],
        [mc("Where does 竟然 go?", ["After the subject, before the verb", "At the very start", "At the end", "After the verb"], 0, "Subject + 竟然 + verb.")]
      ),
      sec(
        "没想到: I never thought",
        [
          `${zh("没想到", "méi xiǎng dào")} + a whole clause: ${zh("没想到你也在这儿！", "Méi xiǎng dào nǐ yě zài zhèr!")} (Fancy you being here!) The two combine: 没想到他竟然会说中文.`,
        ],
        [ex("没想到你也在这儿！", "Méi xiǎng dào nǐ yě zài zhèr!", "I didn't expect you to be here too!")],
        [mc("I never thought it would be so cold:", ["没想到这么冷。", "没想这么冷到。", "这么冷没想到了。", "想不到没这么冷。"], 0, "没想到 + clause.")]
      ),
    ],
    [
      mc("他竟然忘了自己的生日 expresses:", ["surprise", "a plan", "a wish", "a rule"], 0, "竟然: surprisingly."),
      listen("没想到今天会下雪。", "How does the speaker feel about the snow?", ["Surprised", "Glad it was forecast", "Bored", "It was expected"], 0, "没想到: didn't expect."),
      fb(C, "这么简单的问题，他___不会。(He actually can't do such an easy question!)", "竟然", "jìngrán", "竟然 + verb: surprisingly.", { altAnswers: ["居然", "jūrán"] }),
      fb(C, "没___到你会说中文！(I had no idea you spoke Chinese!)", "想", "xiǎng", "没想到 + clause."),
      fb(C, "才三岁，他居然会___一百个字。(Only three, and he can already read a hundred characters!)", "认识", "rènshi", "认识 + characters: can read."),
      toZh("I didn't expect it to be so cheap.", "没想到这么便宜。", "Méi xiǎng dào zhème piányi.", "没想到 + clause.", ["我没想到这么便宜。", "Wǒ méi xiǎng dào zhème piányi.", "没想到会这么便宜。", "Méi xiǎng dào huì zhème piányi.", "真没想到这么便宜。", "Zhēn méi xiǎng dào zhème piányi."]),
      toZh("He actually came on time.", "他竟然准时来了。", "Tā jìngrán zhǔnshí lái le.", "Subject + 竟然 + verb.", ["他居然准时来了。", "Tā jūrán zhǔnshí lái le.", "他竟然按时来了。", "Tā jìngrán ànshí lái le."]),
      toEn("没想到他竟然是我老师的儿子。", "Méi xiǎng dào tā jìngrán shì wǒ lǎoshī de érzi.", "I never imagined he'd turn out to be my teacher's son.", "没想到 + 竟然: double surprise.", ["I had no idea he was my teacher's son.", "I never thought he would be my teacher's son.", "Who'd have thought he was my teacher's son!", "I didn't expect him to be my teacher's son."]),
      wo(["这么", "难", "的", "题", "她", "竟然", "做", "对", "了"], "She actually got such a hard question right.", "Subject + 竟然 + verb."),
      say("没想到在这儿见到你！", "没想到在这儿见到你: fancy meeting you here!", "méi xiǎng dào: rising, a dip, falling.", "Greet an old friend you bump into."),
    ],
    { teaches: ["grammar.jingran"] }
  ),

  lesson(
    L,
    "zh-b2-kongpa",
    "I'm Afraid: 恐怕",
    "恐怕 softens an unwelcome guess or a refusal -- \"I'm afraid it'll rain,\" \"I'm afraid that won't work\" -- unlike 害怕, real fear.",
    "7 min",
    [
      sec(
        "A regretful guess",
        [
          `${zh("恐怕", "kǒngpà")} = I'm afraid (that), probably -- about something unwelcome: ${zh("恐怕要下雨了。", "Kǒngpà yào xià yǔ le.")} It isn't fear: being scared of something is 害怕 (我害怕狗).`,
        ],
        [ex("恐怕要下雨了。", "Kǒngpà yào xià yǔ le.", "I'm afraid it's going to rain."), ex("他恐怕不会来了。", "Tā kǒngpà bú huì lái le.", "I'm afraid he isn't coming.")],
        [mc("I'm afraid of snakes:", ["我害怕蛇。", "我恐怕蛇。", "恐怕我蛇。", "我蛇恐怕。"], 0, "害怕: fear. 恐怕: a regretful guess.")]
      ),
      sec(
        "Gentle refusals",
        [
          "恐怕 makes bad news gentler, especially when saying no: 恐怕不行 (I'm afraid that won't work). It goes before or after the subject.",
        ],
        [ex("这个周末恐怕不行，我要加班。", "Zhège zhōumò kǒngpà bù xíng, wǒ yào jiābān.", "I'm afraid this weekend won't work -- I have to work overtime.")],
        [mc("恐怕不行 means:", ["I'm afraid that won't work.", "I'm scared.", "That's fine.", "Don't be afraid."], 0, "恐怕: softens a no.")]
      ),
    ],
    [
      mc("恐怕来不及了 means:", ["I'm afraid there isn't enough time.", "Don't be afraid.", "We arrived early.", "It's too late to be scared."], 0, "来不及: not enough time."),
      listen("恐怕他已经走了。", "What does the speaker think?", ["He has probably already left.", "He's on his way.", "He's afraid.", "He will leave soon."], 0, "恐怕 + 已经: probably already."),
      fb(C, "天这么黑，___要下大雨了。(It's so dark -- I'm afraid it's going to pour.)", "恐怕", "kǒngpà", "恐怕: an unwelcome guess."),
      fb(C, "我恐怕不能___加你的婚礼了。(I'm afraid I can't come to your wedding.)", "参", "cān", "参加: attend."),
      fb(C, "我从小就___怕打针。(I've been scared of injections since I was little.)", "害", "hài", "害怕: be afraid of."),
      toZh("I'm afraid that won't work.", "恐怕不行。", "Kǒngpà bù xíng.", "恐怕 + 不行.", ["恐怕不行吧。", "Kǒngpà bù xíng ba.", "这恐怕不行。", "Zhè kǒngpà bù xíng."]),
      toZh("I'm afraid we'll be late.", "恐怕我们要迟到了。", "Kǒngpà wǒmen yào chídào le.", "恐怕 + 要 … 了.", ["我们恐怕要迟到了。", "Wǒmen kǒngpà yào chídào le.", "恐怕我们会迟到。", "Kǒngpà wǒmen huì chídào.", "我们恐怕会迟到。", "Wǒmen kǒngpà huì chídào."]),
      toEn("这么多工作，今天恐怕做不完。", "Zhème duō gōngzuò, jīntiān kǒngpà zuò bu wán.", "With this much work, I'm afraid it won't get finished today.", "恐怕 + potential complement.", ["There's so much work, I'm afraid I can't finish it today.", "With so much work, I'm afraid we won't finish today.", "I'm afraid I won't finish all this work today.", "So much work -- I'm afraid it can't be done today."]),
      wo(["明天", "我", "恐怕", "没", "时间"], "I'm afraid I won't have time tomorrow.", "Subject + 恐怕 + the bad news."),
      say("对不起，我恐怕帮不了你。", "对不起，我恐怕帮不了你: sorry, I'm afraid I can't help you.", "kǒngpà: a dip, then a fall.", "Turn down a request kindly."),
    ],
    { teaches: ["grammar.kongpa"] }
  ),

  lesson(
    L,
    "zh-b2-chadianr",
    "Almost: 差点儿",
    "差点儿 + verb: it very nearly happened. And the tricky 差点儿没, which depends on whether you wanted it.",
    "8 min",
    [
      sec(
        "差点儿: nearly",
        [
          `${zh("差点儿", "chàdiǎnr")} (or 差一点儿) + verb: it nearly happened, but didn't. ${zh("我今天差点儿迟到。", "Wǒ jīntiān chàdiǎnr chídào.")} (I was nearly late today.)`,
        ],
        [ex("我今天差点儿迟到。", "Wǒ jīntiān chàdiǎnr chídào.", "I was nearly late today."), ex("他差点儿摔倒了。", "Tā chàdiǎnr shuāi dǎo le.", "He almost fell over.")],
        [mc("我差点儿忘了 means:", ["I almost forgot (but didn't).", "I forgot a little.", "I forgot completely.", "I didn't forget at all."], 0, "差点儿: nearly.")]
      ),
      sec(
        "Wanted or not?",
        [
          "For something bad, 差点儿 and 差点儿没 both mean it didn't happen: 差点儿摔倒 = 差点儿没摔倒 (almost fell).",
          "For something you wanted, 差点儿没 means you only just made it: 我差点儿没赶上火车 (I only just caught the train). Plain 差点儿赶上 means you just missed it.",
        ],
        [ex("我差点儿没赶上火车。", "Wǒ chàdiǎnr méi gǎn shang huǒchē.", "I only just caught the train.")],
        [mc("我差点儿没考上大学 means:", ["I only just got into university.", "I didn't get into university.", "I got in easily.", "I didn't apply."], 0, "Wanted + 差点儿没: only just made it.")]
      ),
    ],
    [
      mc("他差点儿哭了 means:", ["He nearly cried.", "He cried a little.", "He cried a lot.", "He never cries."], 0, "差点儿 + verb: nearly."),
      listen("我差点儿把手机忘在出租车上。", "What nearly happened?", ["The phone was nearly left in the taxi.", "The phone was lost in the taxi.", "The taxi nearly crashed.", "The speaker missed the taxi."], 0, "差点儿 + 忘: nearly left behind."),
      fb(C, "路上很滑，我___摔倒了。(The road was slippery -- I nearly fell.)", "差点儿", "chàdiǎnr", "差点儿: nearly.", { altAnswers: ["差一点儿", "chà yìdiǎnr"] }),
      fb(C, "我差点儿___赶上飞机。(I only just made the plane.)", "没", "méi", "Wanted + 差点儿没: only just."),
      fb(C, "我差一点儿就___了！(I very nearly won!)", "赢", "yíng", "赢: win."),
      toZh("I was nearly late.", "我差点儿迟到了。", "Wǒ chàdiǎnr chídào le.", "差点儿 + verb.", ["我差点儿迟到。", "Wǒ chàdiǎnr chídào.", "我差一点儿迟到了。", "Wǒ chà yìdiǎnr chídào le.", "我差点儿就迟到了。", "Wǒ chàdiǎnr jiù chídào le."]),
      toZh("I almost forgot your birthday.", "我差点儿忘了你的生日。", "Wǒ chàdiǎnr wàng le nǐ de shēngrì.", "差点儿 + 忘了.", ["我差点儿把你的生日忘了。", "Wǒ chàdiǎnr bǎ nǐ de shēngrì wàng le.", "我差一点儿忘了你的生日。", "Wǒ chà yìdiǎnr wàng le nǐ de shēngrì."]),
      toEn("今天堵车，我差点儿没赶上会议。", "Jīntiān dǔchē, wǒ chàdiǎnr méi gǎn shang huìyì.", "The traffic was bad today -- I only just made it to the meeting.", "Wanted + 差点儿没: only just made it.", ["There was a traffic jam today and I nearly missed the meeting.", "Traffic was bad today; I almost missed the meeting.", "There was traffic today -- I almost didn't make the meeting.", "The traffic was terrible today and I nearly missed the meeting."]),
      wo(["我", "差点儿", "把", "钥匙", "丢", "了"], "I almost lost my keys.", "差点儿 + 把 + thing + verb."),
      say("吓死我了，我差点儿摔倒！", "吓死我了，我差点儿摔倒: that scared me to death -- I nearly fell!", "chàdiǎnr: a fall, then a dip.", "React after slipping on ice."),
    ],
    { teaches: ["grammar.chadianr"] }
  ),
];
