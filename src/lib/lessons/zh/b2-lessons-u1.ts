// Synced from cheneygross-afk/lengo:src/lib/lessons/zh/b2-lessons-u1.ts by scripts/sync-content.mjs -- edit it there, not here.
// Chinese B2, unit 1: conditions and concessions -- 即使…也, 不管/无论…都,
// 既然…就, 否则 and 不然, 尽管. From B2 instructions are mixed: exercise
// prompts carry their Chinese name, explanations stay in English
// (docs/curriculum-architecture.md, section 3.4).

import { ex, fb, lesson, listen, mc, ms, say, sec, toEn, toZh, wo, zh } from "./authoring";

const L = "ZH-B2" as const;
const C = "填空 · Complete (characters or pinyin).";

export const ZH_B2_LESSONS_U1 = [
  lesson(
    L,
    "zh-b2-jishi",
    "Even If: 即使…也",
    "即使 + a supposed condition, 也 + a result that holds anyway -- and 哪怕, its stronger spoken twin.",
    "9 min",
    [
      sec(
        "即使…也: even if",
        [
          `${zh("即使", "jíshǐ")} + condition, (subject +) ${zh("也", "yě")} + result: the result holds whatever happens. ${zh("即使明天下雨，我们也要去。", "Jíshǐ míngtiān xià yǔ, wǒmen yě yào qù.")} (Even if it rains tomorrow, we're still going.)`,
          "Compare 如果…就 (if A, then B): 即使…也 says the condition won't change the outcome. The condition is usually a supposition, not a fact.",
        ],
        [ex("即使明天下雨，我们也要去。", "Jíshǐ míngtiān xià yǔ, wǒmen yě yào qù.", "Even if it rains tomorrow, we're still going."), ex("即使很累，他也每天跑步。", "Jíshǐ hěn lèi, tā yě měitiān pǎobù.", "Even when he's tired, he runs every day.")],
        [mc("Even if it's expensive, I'll buy it:", ["即使很贵，我也要买。", "即使很贵，我就要买。", "如果很贵，我也要买。", "即使很贵，也我要买。"], 0, "即使 … 也: the result holds anyway.")]
      ),
      sec(
        "哪怕: even if (spoken, stronger)",
        [
          `${zh("哪怕", "nǎpà")} works like 即使 but is more emphatic and common in speech, often with an extreme: ${zh("哪怕只有一天，我也想去看看。", "Nǎpà zhǐ yǒu yì tiān, wǒ yě xiǎng qù kànkan.")} ${zh("即便", "jíbiàn")} is a written synonym of 即使.`,
          "也 is an adverb, so it goes after the subject: 我也去, never 也我去.",
        ],
        [ex("哪怕只有一天，我也想去看看。", "Nǎpà zhǐ yǒu yì tiān, wǒ yě xiǎng qù kànkan.", "Even if it's just one day, I'd like to go and see.")],
        [mc("Where does 也 go?", ["After the subject: 我也去", "Before the subject: 也我去", "At the very end", "Right after 即使"], 0, "Subject + 也 + verb.")]
      ),
    ],
    [
      mc("即使你不来，我也会等你 means:", ["Even if you don't come, I'll wait for you.", "If you don't come, I won't wait.", "You came, so I waited.", "I'll wait until you come."], 0, "即使 … 也: even if."),
      ms("Which are correct? (Choose all that apply.)", ["即使下雨，我们也去。", "哪怕很难，我也要学。", "即使下雨，我们就去。", "即使下雨，也我们去。"], [0, 1], "即使/哪怕 pair with 也, after the subject."),
      listen("即使工作很忙，她也每天学中文。", "What does she do every day?", ["Study Chinese", "Work late", "Go running", "Cook"], 0, "即使忙，也学中文: busy or not."),
      fb(C, "___明天下雪，我们也要出发。(Even if it snows tomorrow, we're setting off.)", "即使", "jíshǐ", "即使 + condition.", { altAnswers: ["哪怕", "nǎpà", "即便", "jíbiàn"] }),
      fb(C, "即使你说对不起，我___不会原谅你。(Even if you apologise, I won't forgive you.)", "也", "yě", "即使 … 也."),
      fb(C, "哪怕只有十块钱，我也___给你。(Even if I only have ten kuai, I'll give it to you.)", "会", "huì", "也 + 会: will still.", { altAnswers: ["要", "yào"] }),
      toZh("Even if it's expensive, I want to buy it.", "即使很贵，我也想买。", "Jíshǐ hěn guì, wǒ yě xiǎng mǎi.", "即使 … 也.", ["即使很贵，我也要买。", "Jíshǐ hěn guì, wǒ yě yào mǎi.", "哪怕很贵，我也想买。", "Nǎpà hěn guì, wǒ yě xiǎng mǎi.", "哪怕很贵，我也要买。", "Nǎpà hěn guì, wǒ yě yào mǎi."]),
      toZh("Even if you don't help me, I can do it.", "即使你不帮我，我也能做。", "Jíshǐ nǐ bù bāng wǒ, wǒ yě néng zuò.", "即使 + negative condition.", ["即使你不帮我，我也可以做。", "Jíshǐ nǐ bù bāng wǒ, wǒ yě kěyǐ zuò.", "哪怕你不帮我，我也能做。", "Nǎpà nǐ bù bāng wǒ, wǒ yě néng zuò."]),
      toEn("哪怕再累，他也不休息。", "Nǎpà zài lèi, tā yě bù xiūxi.", "However tired he is, he doesn't rest.", "哪怕再 + adjective: however … .", ["No matter how tired he is, he doesn't rest.", "Even when he's exhausted, he doesn't rest.", "Even if he's really tired, he won't rest.", "He doesn't rest even when he's very tired."]),
      wo(["即使", "没有", "时间", "我", "也", "会", "来"], "Even if I don't have time, I'll come.", "即使 + condition, subject + 也."),
      say("哪怕只有一天，我也想去。", "哪怕只有一天，我也想去: even if it's only one day, I want to go.", "nǎpà: a dip, then a fall.", "Insist on a short trip."),
    ],
    { teaches: ["grammar.jishi-ye"] }
  ),

  lesson(
    L,
    "zh-b2-buguan",
    "No Matter What: 不管/无论…都",
    "不管 + every possibility (a question word, A-not-A or 还是), 都 + a result that never changes -- and 无论, the formal twin.",
    "9 min",
    [
      sec(
        "不管…都: no matter",
        [
          `${zh("不管", "bùguǎn")} + a question word, an A-not-A or 还是, then ${zh("都", "dōu")} (or 也) + result. ${zh("不管谁来，我都欢迎。", "Bùguǎn shéi lái, wǒ dōu huānyíng.")} (Whoever comes, they're welcome.)`,
          "The 不管 part must open up every possibility: 不管多贵 (however expensive), 不管你去不去 (whether or not you go), 不管是你还是我 (whether it's you or me).",
        ],
        [ex("不管多贵，我都要买。", "Bùguǎn duō guì, wǒ dōu yào mǎi.", "No matter how expensive it is, I'm buying it."), ex("不管下不下雨，比赛都会举行。", "Bùguǎn xià bu xià yǔ, bǐsài dōu huì jǔxíng.", "Whether or not it rains, the match will go ahead.")],
        [mc("No matter who comes, they're welcome:", ["不管谁来，我都欢迎。", "不管有人来，我都欢迎。", "不管谁来，我就欢迎。", "谁不管来，我都欢迎。"], 0, "不管 + question word, 都 + result.")]
      ),
      sec(
        "无论: the formal twin",
        [
          `${zh("无论", "wúlùn")} means the same as 不管 in writing and formal speech: ${zh("无论遇到什么困难，我们都不会放弃。", "Wúlùn yù dào shénme kùnnan, wǒmen dōu bú huì fàngqì.")}`,
          "Compare 即使: 即使 + one condition (even if it rains); 不管 + every possibility (whatever the weather).",
        ],
        [ex("无论遇到什么困难，我们都不会放弃。", "Wúlùn yù dào shénme kùnnan, wǒmen dōu bú huì fàngqì.", "Whatever difficulties we meet, we won't give up.")],
        [mc("Which needs a question word or A-not-A after it?", ["不管", "即使", "如果", "虽然"], 0, "不管 + every possibility.")]
      ),
    ],
    [
      mc("不管你去不去，我都去 means:", ["I'm going whether you go or not.", "I'll go only if you go.", "If you don't go, I won't.", "Neither of us is going."], 0, "不管 + A-not-A."),
      listen("无论多忙，他都给妈妈打电话。", "What does he always do?", ["Phone his mother", "Work late", "Visit his mother", "Forget to call"], 0, "无论多忙: however busy."),
      fb(C, "___你说什么，他都不听。(Whatever you say, he doesn't listen.)", "不管", "bùguǎn", "不管 + question word.", { altAnswers: ["无论", "wúlùn"] }),
      fb(C, "不管天气怎么样，我们___去爬山。(Whatever the weather, we're going hiking.)", "都", "dōu", "不管 … 都.", { altAnswers: ["也", "yě"] }),
      fb(C, "不管你___不去，我都去。(Whether you go or not, I'm going.)", "去", "qù", "A-not-A: 去不去."),
      toZh("No matter who calls, I'm not in.", "不管谁打电话，我都不在。", "Bùguǎn shéi dǎ diànhuà, wǒ dōu bú zài.", "不管 + 谁, 都 + result.", ["无论谁打电话，我都不在。", "Wúlùn shéi dǎ diànhuà, wǒ dōu bú zài.", "Bùguǎn shuí dǎ diànhuà, wǒ dōu bú zài."]),
      toZh("Whether or not it rains, I'll go.", "不管下不下雨，我都去。", "Bùguǎn xià bu xià yǔ, wǒ dōu qù.", "不管 + A-not-A.", ["无论下不下雨，我都去。", "Wúlùn xià bu xià yǔ, wǒ dōu qù.", "不管下不下雨，我都会去。", "Bùguǎn xià bu xià yǔ, wǒ dōu huì qù.", "不管下不下雨，我也去。", "Bùguǎn xià bu xià yǔ, wǒ yě qù."]),
      toEn("无论做什么工作，都要认真。", "Wúlùn zuò shénme gōngzuò, dōu yào rènzhēn.", "Whatever job you do, you should take it seriously.", "无论 + 什么, 都 + result.", ["Whatever work you do, you must be conscientious.", "No matter what job you do, you should take it seriously.", "Whatever job you do, you must do it carefully.", "No matter what work you do, you have to be serious about it."]),
      wo(["不管", "多", "难", "我", "都", "要", "学", "好"], "However hard it is, I'm going to learn it well.", "不管 + 多 + adjective, 都."),
      say("不管怎么样，我都支持你。", "不管怎么样，我都支持你: whatever happens, I'm behind you.", "zhīchí: high, then rising.", "Back a friend's decision."),
    ],
    { teaches: ["grammar.buguan-dou"] }
  ),

  lesson(
    L,
    "zh-b2-jiran",
    "Since That's So: 既然…就",
    "既然 + a fact everyone accepts, 就 + the conclusion -- usually a suggestion, a decision or a pointed question.",
    "8 min",
    [
      sec(
        "既然…就: since",
        [
          `${zh("既然", "jìrán")} + a known fact, (subject +) ${zh("就", "jiù")} + conclusion: ${zh("既然你不舒服，就早点儿回家吧。", "Jìrán nǐ bù shūfu, jiù zǎo diǎnr huí jiā ba.")} (Since you're not feeling well, go home early.)`,
        ],
        [ex("既然你不舒服，就早点儿回家吧。", "Jìrán nǐ bù shūfu, jiù zǎo diǎnr huí jiā ba.", "Since you're not feeling well, go home early."), ex("既然来了，就多住几天。", "Jìrán lái le, jiù duō zhù jǐ tiān.", "Since you're here, stay a few more days.")],
        [mc("Since you've decided, go ahead:", ["既然你决定了，就去做吧。", "既然你决定了，也去做吧。", "因为你决定了，就去做吧。", "既然你决定了，去就做吧。"], 0, "既然 … 就.")]
      ),
      sec(
        "既然 vs. 因为",
        [
          "因为 gives a cause as new information: 因为下雨，我没去. 既然 takes a fact already on the table and draws a conclusion from it: 既然下雨了，我们就别去了.",
          "So 既然 is followed by a suggestion (吧), a decision, or a question: 既然你知道，为什么不告诉我？",
        ],
        [ex("既然下雨了，我们就别去了。", "Jìrán xià yǔ le, wǒmen jiù bié qù le.", "Since it's raining, let's not go.")],
        [mc("Which fits best? ___大家都同意，我们就这样做吧。", ["既然", "因为", "虽然", "即使"], 0, "Known fact → decision: 既然.")]
      ),
    ],
    [
      mc("既然你喜欢，就买吧 means:", ["Since you like it, buy it.", "If you like it, don't buy it.", "Even if you like it, don't buy it.", "You bought it because you liked it."], 0, "既然 … 就: since."),
      listen("既然你知道了，我就不说了。", "Why won't the speaker say more?", ["The listener already knows.", "It's a secret.", "The speaker forgot.", "There's no time."], 0, "既然你知道了: since you know."),
      fb(C, "___你没时间，我们就改天吧。(Since you don't have time, let's make it another day.)", "既然", "jìrán", "既然 + known fact."),
      fb(C, "既然来了，___多玩儿几天吧。(Since you've come, stay and have fun a few more days.)", "就", "jiù", "既然 … 就."),
      fb(C, "既然大家都同意，我们就这么___吧。(Since everyone agrees, let's do it this way.)", "办", "bàn", "这么办: do it this way.", { altAnswers: ["做", "zuò"] }),
      toZh("Since you're tired, have a rest.", "既然你累了，就休息一下吧。", "Jìrán nǐ lèi le, jiù xiūxi yíxià ba.", "既然 … 就 + suggestion.", ["既然累了，就休息一下吧。", "Jìrán lèi le, jiù xiūxi yíxià ba.", "既然你累了，就休息吧。", "Jìrán nǐ lèi le, jiù xiūxi ba.", "既然你累了，就休息休息吧。", "Jìrán nǐ lèi le, jiù xiūxi xiūxi ba."]),
      toZh("Since you know, why didn't you tell me?", "既然你知道，为什么不告诉我？", "Jìrán nǐ zhīdào, wèishénme bú gàosu wǒ?", "既然 + fact, then a question.", ["既然你知道，为什么没告诉我？", "Jìrán nǐ zhīdào, wèishénme méi gàosu wǒ?", "你既然知道，为什么不告诉我？", "Nǐ jìrán zhīdào, wèishénme bú gàosu wǒ?"]),
      toEn("既然你不喜欢这个工作，就换一个吧。", "Jìrán nǐ bù xǐhuan zhège gōngzuò, jiù huàn yí ge ba.", "Since you don't like this job, change it.", "既然 … 就 + advice.", ["Since you don't like this job, get another one.", "Since you don't like this job, find another one.", "Since you don't like this job, switch to another one.", "Since you don't like this job, change jobs."]),
      wo(["既然", "你", "不", "想", "去", "就", "别", "去", "了"], "Since you don't want to go, don't go.", "既然 … 就 + 别."),
      say("既然这样，我们就明天再说吧。", "既然这样，我们就明天再说吧: in that case, let's talk about it tomorrow.", "jìrán: falling, then rising.", "Put off a decision politely."),
    ],
    { teaches: ["grammar.jiran-jiu"] }
  ),

  lesson(
    L,
    "zh-b2-fouze",
    "Otherwise: 否则 and 不然",
    "Say what has to happen, then 否则 (formal) or 不然 (spoken) + what goes wrong if it doesn't.",
    "8 min",
    [
      sec(
        "Instruction, then the risk",
        [
          `First what must happen, then ${zh("不然", "bùrán")} (spoken) or ${zh("否则", "fǒuzé")} (formal) + the bad result: ${zh("快走吧，不然要迟到了。", "Kuài zǒu ba, bùrán yào chídào le.")} (Let's hurry, or we'll be late.)`,
          "The result often ends in 会…的 or 要…了: 会感冒的, 要迟到了.",
        ],
        [ex("快走吧，不然要迟到了。", "Kuài zǒu ba, bùrán yào chídào le.", "Let's hurry, or we'll be late."), ex("你必须早点儿订票，否则就买不到了。", "Nǐ bìxū zǎo diǎnr dìng piào, fǒuzé jiù mǎi bu dào le.", "You must book early, otherwise you won't get tickets.")],
        [mc("Hurry up, or we'll miss the train:", ["快点儿，不然赶不上火车了。", "不然快点儿，赶不上火车了。", "快点儿，否则就赶上火车了。", "快点儿，如果赶不上火车了。"], 0, "Instruction first, then 不然 + bad result.")]
      ),
      sec(
        "要不然 and 否则的话",
        [
          `${zh("要不然", "yàobùrán")} is a common, slightly longer spoken form; ${zh("否则的话", "fǒuzé dehuà")} is written. All mean \"if not, then …\".`,
        ],
        [ex("你最好带伞，要不然会淋湿的。", "Nǐ zuìhǎo dài sǎn, yàobùrán huì lín shī de.", "You'd better take an umbrella, otherwise you'll get soaked.")],
        [mc("Which is the most formal?", ["否则", "不然", "要不然", "不然的话"], 0, "否则: written and formal.")]
      ),
    ],
    [
      mc("多喝水，不然会生病的 means:", ["Drink more water, or you'll get ill.", "Don't drink water, or you'll get ill.", "If you're ill, drink water.", "Water makes you ill."], 0, "不然: otherwise."),
      listen("我们得早点儿出发，否则会堵车。", "Why leave early?", ["To avoid traffic", "To get good seats", "To have breakfast", "To see the sunrise"], 0, "否则会堵车: otherwise there'll be traffic."),
      fb(C, "快点儿吃，___饭菜就凉了。(Eat up, or the food will get cold.)", "不然", "bùrán", "不然 + bad result.", { altAnswers: ["否则", "fǒuzé", "要不然", "yàobùrán"] }),
      fb(C, "你应该告诉他，否则他会___气的。(You should tell him, otherwise he'll be angry.)", "生", "shēng", "生气: get angry."),
      fb(C, "我们必须现在走，___就赶不上飞机了。(We must leave now, otherwise we'll miss the plane.)", "否则", "fǒuzé", "否则: formal otherwise.", { altAnswers: ["不然", "bùrán", "要不然", "yàobùrán"] }),
      toZh("Hurry up, or we'll be late.", "快点儿，不然要迟到了。", "Kuài diǎnr, bùrán yào chídào le.", "Instruction + 不然 + result.", ["快点儿，不然会迟到的。", "Kuài diǎnr, bùrán huì chídào de.", "快点儿，否则要迟到了。", "Kuài diǎnr, fǒuzé yào chídào le.", "快点儿，要不然要迟到了。", "Kuài diǎnr, yàobùrán yào chídào le.", "快点儿，不然我们要迟到了。", "Kuài diǎnr, bùrán wǒmen yào chídào le."]),
      toZh("Write it down, otherwise you'll forget.", "写下来，不然你会忘的。", "Xiě xiàlai, bùrán nǐ huì wàng de.", "不然 + 会 … 的.", ["写下来，否则你会忘的。", "Xiě xiàlai, fǒuzé nǐ huì wàng de.", "写下来，不然会忘的。", "Xiě xiàlai, bùrán huì wàng de.", "写下来，要不然你会忘的。", "Xiě xiàlai, yàobùrán nǐ huì wàng de."]),
      toEn("你得多穿点儿，否则会感冒的。", "Nǐ děi duō chuān diǎnr, fǒuzé huì gǎnmào de.", "You should wear more, otherwise you'll catch a cold.", "否则: otherwise.", ["Put more clothes on, or you'll catch a cold.", "You need to wear more, otherwise you'll catch cold.", "Wear more, or you'll get a cold.", "You have to dress warmer or you'll catch a cold."]),
      wo(["你", "最好", "现在", "睡觉", "不然", "明天", "会", "很", "累"], "You'd better sleep now, or you'll be tired tomorrow.", "Advice, then 不然 + result."),
      say("别玩儿手机了，不然作业写不完。", "别玩儿手机了，不然作业写不完: stop playing on your phone or you won't finish your homework.", "bùrán: falling, then rising.", "Nag a younger brother or sister."),
    ],
    { teaches: ["grammar.fouze"] }
  ),

  lesson(
    L,
    "zh-b2-jinguan",
    "Even Though: 尽管",
    "尽管 + a real fact, 还是/但是 + what happens anyway -- a firmer, more written 虽然, and how it differs from 即使.",
    "8 min",
    [
      sec(
        "尽管…还是: even though",
        [
          `${zh("尽管", "jǐnguǎn")} + fact, then ${zh("还是", "háishi")}, 但是, 可是 or ${zh("仍然", "réngrán")} (still): ${zh("尽管很累，他还是坚持跑完了。", "Jǐnguǎn hěn lèi, tā háishi jiānchí pǎo wán le.")} (Even though he was exhausted, he kept going to the finish.)`,
        ],
        [ex("尽管很累，他还是坚持跑完了。", "Jǐnguǎn hěn lèi, tā háishi jiānchí pǎo wán le.", "Even though he was exhausted, he kept going to the finish."), ex("尽管下着大雨，比赛还是开始了。", "Jǐnguǎn xià zhe dà yǔ, bǐsài háishi kāishǐ le.", "Although it was pouring, the match still began.")],
        [mc("Which states a real fact, not a supposition?", ["尽管很贵，他还是买了。", "即使很贵，他也会买。", "如果很贵，他就不买。", "哪怕很贵，他也要买。"], 0, "尽管: something actually true.")]
      ),
      sec(
        "尽管, 虽然 and 即使",
        [
          "虽然 and 尽管 both start from a fact; 尽管 sounds firmer and more written. 即使 and 哪怕 start from a supposition.",
          "So: 尽管下雨，我们还是去了 (it did rain), but 即使下雨，我们也会去 (it might rain).",
        ],
        [ex("尽管他是外国人，但是他的中文说得很地道。", "Jǐnguǎn tā shì wàiguórén, dànshì tā de Zhōngwén shuō de hěn dìdao.", "Although he's a foreigner, his Chinese is very authentic.")],
        [mc("尽管 is closest to:", ["虽然", "即使", "如果", "因为"], 0, "Both start from a fact.")]
      ),
    ],
    [
      mc("尽管天气不好，我们还是去了 means:", ["Although the weather was bad, we still went.", "Because the weather was bad, we went.", "If the weather is bad, we won't go.", "The weather was bad, so we stayed."], 0, "尽管 … 还是."),
      listen("尽管他很努力，可是考试还是没通过。", "What happened?", ["He worked hard but still failed.", "He worked hard and passed.", "He didn't study and failed.", "He didn't take the exam."], 0, "尽管 … 还是没通过."),
      fb(C, "___很忙，他还是来帮我了。(Even though he was busy, he still came to help me.)", "尽管", "jǐnguǎn", "尽管 + real fact.", { altAnswers: ["虽然", "suīrán"] }),
      fb(C, "尽管她病了，___是坚持上班。(Although she was ill, she still kept going to work.)", "还", "hái", "尽管 … 还是."),
      fb(C, "尽管我们说了很多次，他___然不听。(Although we've told him many times, he still won't listen.)", "仍", "réng", "仍然: still (written)."),
      toZh("Although it was expensive, he still bought it.", "尽管很贵，他还是买了。", "Jǐnguǎn hěn guì, tā háishi mǎi le.", "尽管 … 还是.", ["尽管很贵，但是他还是买了。", "Jǐnguǎn hěn guì, dànshì tā háishi mǎi le.", "虽然很贵，他还是买了。", "Suīrán hěn guì, tā háishi mǎi le.", "尽管很贵，可是他还是买了。", "Jǐnguǎn hěn guì, kěshì tā háishi mǎi le."]),
      toZh("Although she's young, she's very capable.", "尽管她很年轻，但是很有能力。", "Jǐnguǎn tā hěn niánqīng, dànshì hěn yǒu nénglì.", "尽管 … 但是.", ["尽管她很年轻，可是很有能力。", "Jǐnguǎn tā hěn niánqīng, kěshì hěn yǒu nénglì.", "尽管她很年轻，但是她很有能力。", "Jǐnguǎn tā hěn niánqīng, dànshì tā hěn yǒu nénglì.", "虽然她很年轻，但是很有能力。", "Suīrán tā hěn niánqīng, dànshì hěn yǒu nénglì."]),
      toEn("尽管失败了很多次，他也没有放弃。", "Jǐnguǎn shībài le hěn duō cì, tā yě méiyǒu fàngqì.", "Even though he failed many times, he didn't give up.", "尽管 + fact, 也没有 + verb.", ["Although he failed many times, he never gave up.", "Despite failing many times, he didn't give up.", "Even though he failed many times, he never gave up.", "Although he failed lots of times, he didn't give up."]),
      wo(["尽管", "下", "着", "雨", "我们", "还是", "出去", "了"], "Even though it was raining, we still went out.", "尽管 + fact, 还是 + result."),
      say("尽管很难，我还是想试试。", "尽管很难，我还是想试试: even though it's hard, I still want to give it a try.", "jǐnguǎn: two dips -- the first one rises.", "Say you'll take on a challenge."),
    ],
    { teaches: ["grammar.jinguan"] }
  ),
];
