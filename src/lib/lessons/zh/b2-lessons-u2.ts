// Chinese B2, unit 2: cause, result and purpose -- 为了, 由于…因此, 于是,
// 结果, 只好 and 不得不.

import { ex, fb, lesson, listen, mc, say, sec, toEn, toZh, wo, zh } from "./authoring";

const L = "ZH-B2" as const;
const C = "填空 · Complete (characters or pinyin).";

export const ZH_B2_LESSONS_U2 = [
  lesson(
    L,
    "zh-b2-weile",
    "In Order To: 为了",
    "为了 + a goal, then the action taken for it -- or 是为了 at the end. And 为了 + a person: for their sake.",
    "8 min",
    [
      sec(
        "为了 + goal",
        [
          `${zh("为了", "wèile")} + purpose, (subject +) action: ${zh("为了学好中文，他每天看中国电影。", "Wèile xué hǎo Zhōngwén, tā měitiān kàn Zhōngguó diànyǐng.")} The goal usually comes first.`,
          `To put the goal last, use ${zh("是为了", "shì wèile")}: ${zh("我来中国是为了学中文。", "Wǒ lái Zhōngguó shì wèile xué Zhōngwén.")}`,
        ],
        [ex("为了学好中文，他每天看中国电影。", "Wèile xué hǎo Zhōngwén, tā měitiān kàn Zhōngguó diànyǐng.", "To learn Chinese well, he watches Chinese films every day."), ex("我来中国是为了学中文。", "Wǒ lái Zhōngguó shì wèile xué Zhōngwén.", "I came to China to learn Chinese.")],
        [mc("To stay healthy, she runs every day:", ["为了身体健康，她每天跑步。", "她每天跑步为了身体健康。", "因为身体健康，她每天跑步。", "为了她每天跑步，身体健康。"], 0, "为了 + goal first (or 是为了 at the end).")]
      ),
      sec(
        "为了 vs. 因为",
        [
          "因为 gives a cause -- something already true. 为了 gives a goal -- something you want. 因为生病，他没来 (cause); 为了看病，他请了假 (goal).",
          "为了 + a person means for their sake: 为了孩子，他们搬到了北京.",
        ],
        [ex("为了孩子，他们搬到了北京。", "Wèile háizi, tāmen bān dào le Běijīng.", "For the children's sake, they moved to Beijing.")],
        [mc("Which word gives a goal, not a cause?", ["为了", "因为", "所以", "既然"], 0, "为了: in order to.")]
      ),
    ],
    [
      mc("我早起是为了看日出 means:", ["I get up early to see the sunrise.", "I get up early because of the sunrise.", "The sunrise wakes me up.", "I didn't see the sunrise."], 0, "是为了: in order to."),
      listen("为了省钱，我每天自己做饭。", "Why does the speaker cook every day?", ["To save money", "Because it's tasty", "To lose weight", "For the family"], 0, "为了省钱: to save money."),
      fb(C, "___买房子，他们存了十年钱。(To buy a flat, they saved for ten years.)", "为了", "wèile", "为了 + goal."),
      fb(C, "我学中文是___了跟中国朋友聊天。(I'm learning Chinese so I can chat with Chinese friends.)", "为", "wèi", "是为了 + goal."),
      fb(C, "为了孩子的健康，他不再抽___了。(For his child's health, he's given up smoking.)", "烟", "yān", "抽烟: smoke."),
      toZh("To learn Chinese well, I watch Chinese TV.", "为了学好中文，我看中国电视。", "Wèile xué hǎo Zhōngwén, wǒ kàn Zhōngguó diànshì.", "为了 + goal, then action.", ["为了学好中文，我看中文电视。", "Wèile xué hǎo Zhōngwén, wǒ kàn Zhōngwén diànshì.", "我看中国电视是为了学好中文。", "Wǒ kàn Zhōngguó diànshì shì wèile xué hǎo Zhōngwén.", "为了学好汉语，我看中国电视。", "Wèile xué hǎo Hànyǔ, wǒ kàn Zhōngguó diànshì."]),
      toZh("He works hard for his family.", "为了家人，他努力工作。", "Wèile jiārén, tā nǔlì gōngzuò.", "为了 + person: for their sake.", ["他为了家人努力工作。", "Tā wèile jiārén nǔlì gōngzuò.", "为了家，他努力工作。", "Wèile jiā, tā nǔlì gōngzuò.", "他为了家人很努力地工作。", "Tā wèile jiārén hěn nǔlì de gōngzuò."]),
      toEn("为了保持健康，她每天走一万步。", "Wèile bǎochí jiànkāng, tā měitiān zǒu yí wàn bù.", "To stay healthy, she walks ten thousand steps a day.", "为了 + goal.", ["To keep healthy, she walks 10,000 steps every day.", "She walks ten thousand steps a day to stay healthy.", "To stay fit, she walks ten thousand steps every day.", "In order to stay healthy, she walks 10,000 steps a day."]),
      wo(["我", "来", "北京", "是", "为了", "找", "工作"], "I came to Beijing to find work.", "是为了 + goal at the end."),
      say("为了学好中文，我每天都练习。", "为了学好中文，我每天都练习: to learn Chinese well, I practise every day.", "wèile: a fall, then light.", "Say why you practise."),
    ],
    { teaches: ["grammar.weile"] }
  ),

  lesson(
    L,
    "zh-b2-youyu-yinci",
    "Owing To… Therefore: 由于 and 因此",
    "The formal cause and effect of news, notices and writing: 由于 for 因为, 因此 for 所以.",
    "8 min",
    [
      sec(
        "The formal pair",
        [
          `${zh("由于", "yóuyú")} (owing to, due to) is the formal 因为; ${zh("因此", "yīncǐ")} (therefore, for this reason) is the formal 所以. You meet them in news, announcements and essays: ${zh("由于天气原因，航班取消了。", "Yóuyú tiānqì yuányīn, hángbān qǔxiāo le.")}`,
        ],
        [ex("由于天气原因，航班取消了。", "Yóuyú tiānqì yuányīn, hángbān qǔxiāo le.", "Owing to the weather, the flight was cancelled."), ex("他每天练习，因此进步很快。", "Tā měitiān liànxí, yīncǐ jìnbù hěn kuài.", "He practises every day, and so he's improving fast.")],
        [mc("The formal word for 因为:", ["由于", "因此", "所以", "然后"], 0, "由于 ≈ 因为.")]
      ),
      sec(
        "How they combine",
        [
          "由于 can pair with 因此 or 所以; 由于 can also take just a noun: 由于大雾 (due to heavy fog). 因此 can open a new sentence, and can follow the subject: 他因此没来 (and so he didn't come).",
        ],
        [ex("由于大雾，高速公路关闭了。", "Yóuyú dà wù, gāosù gōnglù guānbì le.", "Due to heavy fog, the motorway was closed.")],
        [mc("Which would you see on an airport notice?", ["由于天气原因，航班推迟。", "因为天气不好，飞机晚了。", "天气不好，所以飞机晚了。", "天气太不好了！"], 0, "由于: notice and news style.")]
      ),
    ],
    [
      mc("因此 means:", ["therefore", "because", "although", "even if"], 0, "因此: for this reason."),
      listen("由于下大雪，学校今天停课。", "Why is there no school today?", ["Heavy snow", "A holiday", "A storm", "The teachers are ill"], 0, "由于下大雪: owing to heavy snow."),
      fb(C, "___天气原因，比赛推迟了。(Owing to the weather, the match was postponed.)", "由于", "yóuyú", "由于: owing to (formal).", { altAnswers: ["因为", "yīnwèi"] }),
      fb(C, "他每天都锻炼，___身体很好。(He exercises every day, so he's very healthy.)", "因此", "yīncǐ", "因此: therefore (formal).", { altAnswers: ["所以", "suǒyǐ"] }),
      fb(C, "由于工作忙，他___没参加聚会。(Busy with work, he therefore missed the party.)", "因此", "yīncǐ", "Subject + 因此 + verb."),
      toZh("Owing to the rain, the flight was delayed.", "由于下雨，航班晚点了。", "Yóuyú xià yǔ, hángbān wǎndiǎn le.", "由于 + cause.", ["由于下雨，航班推迟了。", "Yóuyú xià yǔ, hángbān tuīchí le.", "由于下雨，飞机晚点了。", "Yóuyú xià yǔ, fēijī wǎndiǎn le.", "因为下雨，航班晚点了。", "Yīnwèi xià yǔ, hángbān wǎndiǎn le."]),
      toZh("He studied hard, and therefore passed the exam.", "他学习很努力，因此通过了考试。", "Tā xuéxí hěn nǔlì, yīncǐ tōngguò le kǎoshì.", "因此 + result.", ["他努力学习，因此通过了考试。", "Tā nǔlì xuéxí, yīncǐ tōngguò le kǎoshì.", "他学习很努力，所以通过了考试。", "Tā xuéxí hěn nǔlì, suǒyǐ tōngguò le kǎoshì."]),
      toEn("由于人太多，我们没买到票。", "Yóuyú rén tài duō, wǒmen méi mǎi dào piào.", "Because there were too many people, we didn't get tickets.", "由于 + cause.", ["Owing to the crowds, we didn't get tickets.", "There were too many people, so we couldn't get tickets.", "Because it was too crowded, we didn't manage to buy tickets.", "Due to the crowds, we didn't get any tickets."]),
      wo(["由于", "大雾", "航班", "取消", "了"], "Owing to heavy fog, the flight was cancelled.", "由于 + cause, then the result."),
      say("由于时间关系，今天就说到这儿。", "由于时间关系，今天就说到这儿: as time is short, we'll stop here for today.", "yóuyú: two rising tones.", "Close a meeting politely."),
    ],
    { teaches: ["grammar.youyu-yinci"] }
  ),

  lesson(
    L,
    "zh-b2-yushi",
    "And So: 于是",
    "于是 moves a story on: one event led to the next. It narrates what someone did -- unlike 所以, it never gives advice or plans.",
    "8 min",
    [
      sec(
        "Telling what happened next",
        [
          `${zh("于是", "yúshì")} links two events in a story: the first led naturally to the second. ${zh("天快下雨了，于是他带上了伞。", "Tiān kuài xià yǔ le, yúshì tā dài shang le sǎn.")} (It was about to rain, so he took an umbrella.)`,
        ],
        [ex("天快下雨了，于是他带上了伞。", "Tiān kuài xià yǔ le, yúshì tā dài shang le sǎn.", "It was about to rain, so he took an umbrella."), ex("我们都饿了，于是去了附近的饭馆。", "Wǒmen dōu è le, yúshì qù le fùjìn de fànguǎn.", "We were all hungry, so we went to a restaurant nearby.")],
        [mc("Which fits 于是?", ["他很累，于是早早睡了。", "你很累，于是早点儿睡吧。", "明天于是我们去。", "于是他很累。"], 0, "于是: past events in sequence.")]
      ),
      sec(
        "于是 vs. 所以",
        [
          "所以 states a logical result and works in any tense: 因为太贵，所以我没买. 于是 tells what someone then did, in a story: 太贵了，于是我去了别的商店.",
          "So 于是 can't introduce advice or a command: not 你累了，于是睡吧.",
        ],
        [ex("太贵了，于是我去了别的商店。", "Tài guì le, yúshì wǒ qù le bié de shāngdiàn.", "It was too expensive, so I went to another shop.")],
        [mc("Which of these can't follow 于是?", ["A command: take an umbrella!", "He took an umbrella.", "They went to a restaurant.", "She went home."], 0, "于是 narrates; it doesn't command.")]
      ),
    ],
    [
      mc("他听说那部电影很好，于是去看了 means:", ["He heard the film was good, so he went to see it.", "He saw the film, then heard it was good.", "He heard the film was bad.", "He wants to see the film."], 0, "于是: and so (what he did next)."),
      listen("我找不到路，于是问了一个警察。", "What did the speaker do?", ["Asked a police officer", "Took a taxi", "Went home", "Called a friend"], 0, "于是问了警察: so they asked a police officer."),
      fb(C, "商店关门了，___我们回家了。(The shop was closed, so we went home.)", "于是", "yúshì", "于是: so (next in the story).", { altAnswers: ["所以", "suǒyǐ"] }),
      fb(C, "他觉得冷，于是把窗户关___了。(He felt cold, so he shut the window.)", "上", "shang", "关上: close.", { altAnswers: ["shàng"] }),
      fb(C, "我们聊得很开心，于是又___了一个小时。(We were enjoying the chat, so we talked for another hour.)", "聊", "liáo", "又 + verb: did it again."),
      toZh("It was raining, so we stayed at home.", "下雨了，于是我们待在家里。", "Xià yǔ le, yúshì wǒmen dāi zài jiā li.", "于是 + what came next.", ["下雨了，于是我们在家里待着。", "Xià yǔ le, yúshì wǒmen zài jiā li dāi zhe.", "下雨了，于是我们待在家。", "Xià yǔ le, yúshì wǒmen dāi zài jiā.", "下雨了，所以我们待在家里。", "Xià yǔ le, suǒyǐ wǒmen dāi zài jiā li."]),
      toZh("He was hungry, so he went to buy something to eat.", "他饿了，于是去买东西吃。", "Tā è le, yúshì qù mǎi dōngxi chī.", "于是 + action.", ["他饿了，于是去买吃的。", "Tā è le, yúshì qù mǎi chī de.", "他饿了，于是他去买东西吃。", "Tā è le, yúshì tā qù mǎi dōngxi chī."]),
      toEn("老师没来，于是我们自己练习。", "Lǎoshī méi lái, yúshì wǒmen zìjǐ liànxí.", "The teacher didn't come, so we practised on our own.", "于是: and so.", ["The teacher didn't come, so we practiced by ourselves.", "The teacher didn't turn up, so we practised by ourselves.", "The teacher didn't come, so we practised ourselves.", "The teacher wasn't there, so we practised on our own."]),
      wo(["我们", "都", "饿", "了", "于是", "去", "吃饭", "了"], "We were all hungry, so we went to eat.", "Event, then 于是 + next event."),
      say("我等了很久，于是给他打了个电话。", "我等了很久，于是给他打了个电话: I waited a long time, so I gave him a call.", "yúshì: rising, then falling.", "Say what you did when a friend was late."),
    ],
    { teaches: ["grammar.yushi"] }
  ),

  lesson(
    L,
    "zh-b2-jieguo",
    "In the End: 结果",
    "结果 the noun (the result) and 结果 the linker (and in the end…) -- often with 以为 when things turn out differently.",
    "8 min",
    [
      sec(
        "Result and \"in the end\"",
        [
          `As a noun, ${zh("结果", "jiéguǒ")} is a result: ${zh("考试的结果出来了。", "Kǎoshì de jiéguǒ chūlai le.")} As a linker it introduces how things turned out -- often not as expected.`,
        ],
        [ex("考试的结果出来了。", "Kǎoshì de jiéguǒ chūlai le.", "The exam results are out."), ex("我以为今天会下雨，结果天气很好。", "Wǒ yǐwéi jīntiān huì xià yǔ, jiéguǒ tiānqì hěn hǎo.", "I thought it would rain today, but in the end the weather was fine.")],
        [mc("我以为他会来，结果他没来 means:", ["I thought he'd come, but in the end he didn't.", "He came, as I expected.", "I didn't know if he'd come.", "He came, but I didn't."], 0, "结果: how it turned out.")]
      ),
      sec(
        "以为…结果",
        [
          `${zh("以为", "yǐwéi")} means \"thought\" -- usually wrongly -- so 以为…结果 is a classic pair for surprises. 结果 also reports a plain consequence: 他每天练习，结果进步很快.`,
        ],
        [ex("他每天练习，结果进步很快。", "Tā měitiān liànxí, jiéguǒ jìnbù hěn kuài.", "He practised every day, and as a result he improved quickly.")],
        [mc("以为 means:", ["thought (wrongly)", "knew", "hoped", "forgot"], 0, "以为: assumed -- usually wrongly.")]
      ),
    ],
    [
      mc("他没带伞，结果被雨淋了 means:", ["He didn't take an umbrella and ended up soaked.", "He took an umbrella, so he stayed dry.", "It didn't rain.", "He bought an umbrella."], 0, "结果: as a result."),
      listen("我以为很难，结果很容易。", "How was it?", ["Easy", "Hard", "Boring", "Expensive"], 0, "以为难，结果容易: easier than expected."),
      fb(C, "他起晚了，___没赶上飞机。(He got up late and ended up missing the plane.)", "结果", "jiéguǒ", "结果: and in the end."),
      fb(C, "我___为他是老师，结果他是学生。(I thought he was a teacher, but he turned out to be a student.)", "以", "yǐ", "以为: thought (wrongly)."),
      fb(C, "比赛的___怎么样？(What was the result of the match?)", "结果", "jiéguǒ", "结果 as a noun: result."),
      toZh("I thought it would be expensive, but it turned out cheap.", "我以为会很贵，结果很便宜。", "Wǒ yǐwéi huì hěn guì, jiéguǒ hěn piányi.", "以为 … 结果.", ["我以为很贵，结果很便宜。", "Wǒ yǐwéi hěn guì, jiéguǒ hěn piányi.", "我以为会很贵，结果挺便宜的。", "Wǒ yǐwéi huì hěn guì, jiéguǒ tǐng piányi de."]),
      toZh("He didn't revise, and in the end he failed.", "他没复习，结果没通过考试。", "Tā méi fùxí, jiéguǒ méi tōngguò kǎoshì.", "结果 + outcome.", ["他没学习，结果考试没通过。", "Tā méi xuéxí, jiéguǒ kǎoshì méi tōngguò.", "他没复习，结果考试没通过。", "Tā méi fùxí, jiéguǒ kǎoshì méi tōngguò.", "他没学习，结果没通过考试。", "Tā méi xuéxí, jiéguǒ méi tōngguò kǎoshì."]),
      toEn("我们等了两个小时，结果他没来。", "Wǒmen děng le liǎng ge xiǎoshí, jiéguǒ tā méi lái.", "We waited two hours, and in the end he didn't come.", "结果: in the end.", ["We waited for two hours, but he never came.", "We waited two hours and he didn't show up.", "We waited for two hours and in the end he didn't come.", "We waited two hours, but in the end he didn't turn up."]),
      wo(["我", "以为", "他", "会", "生气", "结果", "他", "笑", "了"], "I thought he'd be angry, but he laughed.", "以为 … 结果."),
      say("本来想早点儿睡，结果看了一晚上电视。", "本来想早点儿睡，结果看了一晚上电视: I meant to go to bed early, but ended up watching TV all evening.", "běnlái: a dip, then rising.", "Own up to a lazy evening."),
    ],
    { teaches: ["grammar.jieguo"] }
  ),

  lesson(
    L,
    "zh-b2-zhihao",
    "No Choice: 只好 and 不得不",
    "只好 for the only option left, 不得不 for being forced against your wishes.",
    "8 min",
    [
      sec(
        "只好: the only way left",
        [
          `${zh("只好", "zhǐhǎo")} + verb: given the situation, there's nothing else to do. The subject goes before it: ${zh("没有出租车了，我们只好走回家。", "Méiyǒu chūzūchē le, wǒmen zhǐhǎo zǒu huí jiā.")}`,
        ],
        [ex("没有出租车了，我们只好走回家。", "Méiyǒu chūzūchē le, wǒmen zhǐhǎo zǒu huí jiā.", "There were no taxis left, so we had to walk home."), ex("票卖完了，我只好下次再来。", "Piào mài wán le, wǒ zhǐhǎo xià cì zài lái.", "The tickets had sold out, so I'll have to come back next time.")],
        [mc("The shop was shut, so I had to go to another one:", ["商店关门了，我只好去别的商店。", "商店关门了，只好我去别的商店。", "商店关门了，我好只去别的商店。", "只好商店关门了，我去别的商店。"], 0, "Subject + 只好 + verb.")]
      ),
      sec(
        "不得不: forced to",
        [
          `${zh("不得不", "bùdébù")} -- literally \"can't not\" -- is stronger and more formal: circumstances force you, often against your wishes. It's close to 必须 (must), with a note of regret.`,
        ],
        [ex("因为下大雨，比赛不得不取消。", "Yīnwèi xià dà yǔ, bǐsài bùdébù qǔxiāo.", "Because of the heavy rain, the match had to be cancelled.")],
        [mc("不得不 means:", ["have no choice but to", "don't have to", "can't", "mustn't"], 0, "不得不: be forced to.")]
      ),
    ],
    [
      mc("电梯坏了，我们只好走楼梯 means:", ["The lift was broken, so we had to take the stairs.", "We took the stairs for exercise.", "The stairs were broken.", "We waited for the lift."], 0, "只好: the only option."),
      listen("最后一班车走了，我只好打车回家。", "How did the speaker get home?", ["By taxi", "By bus", "On foot", "By bike"], 0, "打车: take a taxi."),
      fb(C, "下雨了，我们___在家看电视。(It rained, so we had to stay in and watch TV.)", "只好", "zhǐhǎo", "只好 + verb."),
      fb(C, "为了赶飞机，他不___不早起。(To catch the plane, he had to get up early.)", "得", "dé", "不得不: have to."),
      fb(C, "钱不够，我们只___少买一点儿。(We didn't have enough money, so we had to buy less.)", "好", "hǎo", "只好: no choice."),
      toZh("There were no taxis, so we had to walk.", "没有出租车，我们只好走路。", "Méiyǒu chūzūchē, wǒmen zhǐhǎo zǒulù.", "只好 + verb.", ["没有出租车了，我们只好走路。", "Méiyǒu chūzūchē le, wǒmen zhǐhǎo zǒulù.", "没有出租车，我们只好走路去。", "Méiyǒu chūzūchē, wǒmen zhǐhǎo zǒulù qù."]),
      toZh("I had to work overtime.", "我不得不加班。", "Wǒ bùdébù jiābān.", "不得不 + verb.", ["我只好加班。", "Wǒ zhǐhǎo jiābān.", "我不得不加班了。", "Wǒ bùdébù jiābān le."]),
      toEn("由于身体原因，他不得不放弃比赛。", "Yóuyú shēntǐ yuányīn, tā bùdébù fàngqì bǐsài.", "For health reasons, he had to pull out of the competition.", "不得不: forced to.", ["Owing to health reasons, he had to give up the competition.", "Because of his health, he had to pull out of the competition.", "For health reasons, he was forced to give up the match.", "Due to health reasons, he had to quit the competition."]),
      wo(["电梯", "坏", "了", "我们", "只好", "走", "楼梯"], "The lift is broken, so we have to take the stairs.", "Situation, then subject + 只好."),
      say("没办法，我们只好等下一班。", "没办法，我们只好等下一班: nothing for it, we'll have to wait for the next one.", "zhǐhǎo: two dips -- the first one rises.", "Make the best of a missed bus."),
    ],
    { teaches: ["grammar.zhihao-budebu"] }
  ),
];
