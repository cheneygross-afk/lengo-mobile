// B2 unit 2 practice lessons (为了, spoken vs. formal cause, 于是,
// 本来/以为…结果, 只好 and 不得不), drafted from their specs.

import { ex, fb, layer, listen, mc, mt, say, sec, toEn, toZh, wo } from "./authoring";
import { ZH_B2_SPEC as S } from "./specs";

const C = "填空 · Complete (characters or pinyin).";

export const ZH_B2_LAYERS_U2 = [
  layer(
    S,
    "zh-b2d-weile",
    "Pattern Practice: In Order To",
    "为了 + goal first, 是为了 + goal last, and 为了不 + verb for \"so as not to\".",
    "6 min",
    [
      sec(
        "The frame",
        [
          "为了 + goal, (subject +) action. Or action + 是为了 + goal. A goal you want to avoid: 为了不 + verb (so as not to).",
        ],
        [ex("为了不迟到，他六点就起床了。", "Wèile bù chídào, tā liù diǎn jiù qǐchuáng le.", "So as not to be late, he got up at six."), ex("她搬家是为了离公司近一点儿。", "Tā bānjiā shì wèile lí gōngsī jìn yìdiǎnr.", "She moved to be a bit closer to work.")],
        [mc("So as not to forget, I wrote it down:", ["为了不忘记，我写下来了。", "为了忘记不，我写下来了。", "我写下来了为了不忘记。", "不为了忘记，我写下来了。"], 0, "为了不 + verb.")]
      ),
    ],
    [
      listen("为了减肥，她每天只吃两顿饭。", "Why does she eat only two meals a day?", ["To lose weight", "To save money", "She's too busy", "She's ill"], 0, "为了减肥: to lose weight."),
      mc("他学开车是为了找工作 means:", ["He's learning to drive to find a job.", "He found a job driving.", "He drives to work.", "He doesn't want a job."], 0, "是为了 + goal."),
      fb(C, "___不吵醒孩子，我们说话很小声。(So as not to wake the baby, we spoke quietly.)", "为了", "wèile", "为了不 + verb."),
      fb(C, "我每天跑步是为___身体健康。(I run every day to stay healthy.)", "了", "le", "是为了 + goal."),
      fb(C, "为了___钱，他不坐出租车。(To save money, he doesn't take taxis.)", "省", "shěng", "省钱: save money."),
      fb(C, "为了这次考试，她准备了三个___。(She spent three months preparing for this exam.)", "月", "yuè", "Duration: 三个月."),
      toZh("To learn Chinese, she moved to Beijing.", "为了学中文，她搬到了北京。", "Wèile xué Zhōngwén, tā bān dào le Běijīng.", "为了 + goal, then the action.", ["为了学中文，她搬到北京了。", "Wèile xué Zhōngwén, tā bān dào Běijīng le.", "她为了学中文搬到了北京。", "Tā wèile xué Zhōngwén bān dào le Běijīng.", "为了学汉语，她搬到了北京。", "Wèile xué Hànyǔ, tā bān dào le Běijīng."]),
      toZh("So as not to be late, I took a taxi.", "为了不迟到，我坐了出租车。", "Wèile bù chídào, wǒ zuò le chūzūchē.", "为了不 + verb.", ["为了不迟到，我打车了。", "Wèile bù chídào, wǒ dǎchē le.", "为了不迟到，我坐出租车去了。", "Wèile bù chídào, wǒ zuò chūzūchē qù le.", "我为了不迟到，坐了出租车。", "Wǒ wèile bù chídào, zuò le chūzūchē."]),
      toZh("I'm saving money to travel.", "我存钱是为了旅行。", "Wǒ cún qián shì wèile lǚxíng.", "是为了 + goal.", ["为了旅行，我在存钱。", "Wèile lǚxíng, wǒ zài cún qián.", "我存钱是为了去旅行。", "Wǒ cún qián shì wèile qù lǚxíng."]),
      wo(["他", "每天", "早起", "是", "为了", "锻炼", "身体"], "He gets up early every day to exercise.", "是为了 + goal at the end."),
      say("为了健康，我决定不喝酒了。", "为了健康，我决定不喝酒了: for my health, I've decided to stop drinking.", "juédìng: rising, then falling.", "Announce a healthy resolution."),
    ]
  ),

  layer(
    S,
    "zh-b2r-formal-cause",
    "Transform: From Chat to Announcement",
    "Rewrite everyday 因为…所以 as the 由于 and 因此 of notices and news -- and back again.",
    "7 min",
    [
      sec(
        "Spoken to written",
        [
          "因为下雨，所以比赛推迟了 → 由于下雨，比赛推迟了 (a notice). 他很努力，所以成绩很好 → 他很努力，因此成绩很好.",
          "由于 often drops the second word, and can take a plain noun: 由于大雪. 因此 can follow the subject: 他因此没来.",
        ],
        [ex("因为天气不好，所以飞机晚点了。", "Yīnwèi tiānqì bù hǎo, suǒyǐ fēijī wǎndiǎn le.", "Because the weather was bad, the plane was late."), ex("由于天气原因，航班延误。", "Yóuyú tiānqì yuányīn, hángbān yánwù.", "Owing to the weather, the flight is delayed.")],
        [mc("因为人太多，所以我们没进去 → formal:", ["由于人太多，我们没能进去。", "既然人太多，我们没进去。", "因此人太多，由于我们没进去。", "人太多由于，我们没进去。"], 0, "由于 + cause, then the result.")]
      ),
    ],
    [
      mt("Match spoken and written.", [["因为", "由于"], ["所以", "因此"], ["晚点", "延误"], ["坐飞机", "乘坐航班"]], "Spoken ↔ written."),
      listen("由于道路维修，本站暂停使用。", "Why is the stop closed?", ["Road repairs", "A holiday", "Bad weather", "An accident"], 0, "道路维修: road repairs."),
      mc("Which sentence sounds like a news report?", ["由于大雨，多条道路被关闭。", "因为下大雨，好多路都关了。", "下大雨了，路都关了。", "雨太大了！"], 0, "由于 + formal vocabulary."),
      fb(C, "他病了，___没来上课。(He was ill, and therefore missed class.)", "因此", "yīncǐ", "因此 + result.", { altAnswers: ["所以", "suǒyǐ"] }),
      fb(C, "___设备问题，演出推迟半小时。(Owing to technical problems, the show is delayed half an hour.)", "由于", "yóuyú", "由于 + noun phrase.", { altAnswers: ["因为", "yīnwèi"] }),
      fb(C, "由于大家的努力，这次活动非常___。(Thanks to everyone's efforts, the event was a great success.)", "成功", "chénggōng", "成功: successful."),
      toZh("Because of the heavy snow, school is closed today. (formal)", "由于大雪，今天学校停课。", "Yóuyú dà xuě, jīntiān xuéxiào tíngkè.", "由于 + noun.", ["由于下大雪，今天学校停课。", "Yóuyú xià dà xuě, jīntiān xuéxiào tíngkè.", "由于大雪，学校今天停课。", "Yóuyú dà xuě, xuéxiào jīntiān tíngkè."]),
      toZh("She practised every day; therefore she won.", "她每天练习，因此赢了。", "Tā měitiān liànxí, yīncǐ yíng le.", "因此 + result.", ["她每天都练习，因此赢了。", "Tā měitiān dōu liànxí, yīncǐ yíng le.", "她每天练习，所以赢了。", "Tā měitiān liànxí, suǒyǐ yíng le.", "她每天练习，因此她赢了。", "Tā měitiān liànxí, yīncǐ tā yíng le."]),
      toEn("由于人数太多，活动改在下周举行。", "Yóuyú rénshù tài duō, huódòng gǎi zài xià zhōu jǔxíng.", "Because there are too many people, the event has been moved to next week.", "由于 + cause.", ["Owing to the large numbers, the event has been moved to next week.", "Due to too many participants, the event will be held next week instead.", "Because of the numbers, the event is moved to next week.", "Since there are too many people, the event will now take place next week."]),
      say("由于天气原因，今天的比赛取消了。", "由于天气原因，今天的比赛取消了: owing to the weather, today's match is cancelled.", "yóuyú: two rising tones.", "Announce a cancellation."),
    ]
  ),

  layer(
    S,
    "zh-b2r-yushi",
    "Mission: One Thing Led to Another",
    "Your mission: tell a friend about a chaotic day, moving the story on with 于是 -- what happened, and what you did about it.",
    "7 min",
    [
      sec(
        "Telling the day",
        [
          "Put events in order with 先 … 然后, and use 于是 for what you did because of what happened: the alarm didn't go off → 于是 I took a taxi.",
        ],
        [ex("闹钟没响，我起晚了，于是打车去了公司。", "Nàozhōng méi xiǎng, wǒ qǐ wǎn le, yúshì dǎchē qù le gōngsī.", "My alarm didn't go off and I overslept, so I took a taxi to work."), ex("路上堵车，于是我给老板打了个电话。", "Lùshang dǔchē, yúshì wǒ gěi lǎobǎn dǎ le ge diànhuà.", "The traffic was bad, so I phoned my boss.")],
        [mc("于是 introduces:", ["what someone did next because of it", "a plan for tomorrow", "a command", "a cause"], 0, "于是: and so (an action that followed).")]
      ),
    ],
    [
      listen("我的钥匙丢了，于是我找了个开锁的师傅。", "What did the speaker do?", ["Called a locksmith", "Broke a window", "Slept at a friend's", "Waited outside"], 0, "开锁的师傅: a locksmith."),
      mc("Which can follow 于是?", ["我回家拿了伞。", "明天别迟到！", "你应该回家。", "请回家。"], 0, "于是 + what someone then did."),
      fb(C, "外面下大雨，___我们决定不出去了。(It was pouring, so we decided not to go out.)", "于是", "yúshì", "于是 + decision.", { altAnswers: ["所以", "suǒyǐ"] }),
      fb(C, "咖啡店人太多，于是我们换了一___。(The café was too crowded, so we went to a different one.)", "家", "jiā", "Businesses take 家."),
      fb(C, "我看他很累，于是让他先___休息。(I saw he was tired, so I let him go and rest first.)", "去", "qù", "去 + verb: go and do."),
      toZh("I missed the bus, so I walked.", "我没赶上公共汽车，于是走路去了。", "Wǒ méi gǎn shang gōnggòng qìchē, yúshì zǒulù qù le.", "于是 + what you did.", ["我没赶上公交车，于是走路去了。", "Wǒ méi gǎn shang gōngjiāochē, yúshì zǒulù qù le.", "我没赶上车，于是走路去了。", "Wǒ méi gǎn shang chē, yúshì zǒulù qù le.", "我没赶上公共汽车，于是我走路去了。", "Wǒ méi gǎn shang gōnggòng qìchē, yúshì wǒ zǒulù qù le."]),
      toZh("My phone had no battery, so I borrowed a friend's.", "手机没电了，于是我借了朋友的。", "Shǒujī méi diàn le, yúshì wǒ jiè le péngyou de.", "于是 + action.", ["手机没电了，于是我借了朋友的手机。", "Shǒujī méi diàn le, yúshì wǒ jiè le péngyou de shǒujī.", "我的手机没电了，于是借了朋友的。", "Wǒ de shǒujī méi diàn le, yúshì jiè le péngyou de."]),
      toEn("饭菜都凉了，于是他又热了一下。", "Fàncài dōu liáng le, yúshì tā yòu rè le yíxià.", "The food had gone cold, so he heated it up again.", "于是 + what came next.", ["The food was cold, so he warmed it up again.", "The meal had gone cold, so he reheated it.", "The food had got cold, so he heated it up again.", "The dishes had gone cold, so he warmed them up again."]),
      wo(["路上", "堵车", "于是", "我", "给", "老板", "打", "了", "电话"], "There was traffic, so I phoned my boss.", "Event, then 于是 + action."),
      say("天黑了，于是我们回酒店了。", "天黑了，于是我们回酒店了: it got dark, so we went back to the hotel.", "yúshì: rising, then falling.", "Finish a travel story."),
    ]
  ),

  layer(
    S,
    "zh-b2r-jieguo",
    "Dialogue: It Didn't Go to Plan",
    "Two friends compare plans and reality with 本来 (originally), 以为 (thought) and 结果 (in the end).",
    "7 min",
    [
      sec(
        "How did it go?",
        [
          "A: 你昨天去爬山了吗？ B: 去了。本来想看日出，结果起晚了。 A: 那后来呢？ B: 我以为会很累，结果一点儿也不累，风景特别美。",
          "本来 (originally) + plan, 结果 + what really happened; 以为 + wrong belief, 结果 + the truth.",
        ],
        [ex("本来想看日出，结果起晚了。", "Běnlái xiǎng kàn rìchū, jiéguǒ qǐ wǎn le.", "I meant to see the sunrise, but I ended up oversleeping."), ex("我以为会很累，结果一点儿也不累。", "Wǒ yǐwéi huì hěn lèi, jiéguǒ yìdiǎnr yě bú lèi.", "I thought it'd be exhausting, but it wasn't tiring at all.")],
        [mc("本来 means:", ["originally (planned)", "finally", "certainly", "suddenly"], 0, "本来: originally, at first.")]
      ),
    ],
    [
      listen("我本来想睡懒觉，结果六点就醒了。", "What happened?", ["Woke at six despite wanting a lie-in", "Slept until noon", "Woke up at ten", "Didn't sleep"], 0, "结果六点就醒了: awake at six."),
      mc("Which sentence shows things turning out differently?", ["我以为他不会来，结果他来了。", "他来了，我很高兴。", "因为他来了，所以我很高兴。", "他会来的。"], 0, "以为 … 结果: an unexpected outcome."),
      fb(C, "___想坐火车去，结果票卖完了。(We meant to go by train, but the tickets sold out.)", "本来", "běnlái", "本来: originally."),
      fb(C, "我以为考得不好，___考了第一名。(I thought I'd done badly, but I came first.)", "结果", "jiéguǒ", "以为 … 结果."),
      fb(C, "比赛的结果是二比一，我们___了！(The result was two-one -- we won!)", "赢", "yíng", "赢: win."),
      toZh("I meant to go shopping, but it rained.", "本来想去买东西，结果下雨了。", "Běnlái xiǎng qù mǎi dōngxi, jiéguǒ xià yǔ le.", "本来 … 结果.", ["我本来想去买东西，结果下雨了。", "Wǒ běnlái xiǎng qù mǎi dōngxi, jiéguǒ xià yǔ le.", "本来想去逛街，结果下雨了。", "Běnlái xiǎng qù guàngjiē, jiéguǒ xià yǔ le.", "本来要去买东西，结果下雨了。", "Běnlái yào qù mǎi dōngxi, jiéguǒ xià yǔ le."]),
      toZh("I thought he was Chinese, but he turned out to be Japanese.", "我以为他是中国人，结果他是日本人。", "Wǒ yǐwéi tā shì Zhōngguórén, jiéguǒ tā shì Rìběnrén.", "以为 … 结果.", ["我以为他是中国人，结果是日本人。", "Wǒ yǐwéi tā shì Zhōngguórén, jiéguǒ shì Rìběnrén."]),
      toEn("他没看天气预报，结果被雨淋湿了。", "Tā méi kàn tiānqì yùbào, jiéguǒ bèi yǔ lín shī le.", "He didn't check the forecast and ended up drenched.", "结果 + outcome.", ["He didn't look at the weather forecast, and in the end he got soaked.", "He didn't check the weather and got soaked by the rain.", "He didn't watch the forecast, so he ended up getting wet in the rain.", "He didn't check the forecast and got caught in the rain."]),
      say("本来想早点儿到，结果路上堵车了。", "本来想早点儿到，结果路上堵车了: I meant to arrive early, but there was traffic.", "běnlái: a dip, then rising.", "Apologise for being late."),
    ]
  ),

  layer(
    S,
    "zh-b2d-zhihao",
    "Circuit: No Choice",
    "Round after round of 只好 (the only option left) and 不得不 (forced to) -- hear it, complete it, say it.",
    "6 min",
    [
      sec(
        "Two kinds of no choice",
        [
          "只好 + verb: everyday, the only option left. 不得不 + verb: stronger and more formal, forced against your wishes. Both come after the subject.",
        ],
        [ex("超市关门了，我只好去便利店。", "Chāoshì guānmén le, wǒ zhǐhǎo qù biànlìdiàn.", "The supermarket had closed, so I had to go to a corner shop."), ex("为了按时完成，我们不得不加班。", "Wèile ànshí wánchéng, wǒmen bùdébù jiābān.", "To finish on time, we had no choice but to work overtime.")],
        [mc("Which is stronger and more formal?", ["不得不", "只好", "可以", "想"], 0, "不得不: forced.")]
      ),
    ],
    [
      listen("下雨了，我们只好在家里待着。", "What did they do?", ["Stayed at home", "Went out anyway", "Took a taxi", "Went to the cinema"], 0, "只好待在家: had to stay in."),
      mc("没有别的办法，只好这样了 means:", ["There's no other way; it'll have to be like this.", "There are lots of options.", "This is the best way.", "We'll find another way."], 0, "只好: the only option."),
      fb(C, "票卖完了，我们___明天再来。(Tickets were sold out, so we had to come back tomorrow.)", "只好", "zhǐhǎo", "只好 + verb.", { altAnswers: ["不得不", "bùdébù"] }),
      fb(C, "因为生病，他不得不在家___息。(Being ill, he had to rest at home.)", "休", "xiū", "休息: rest."),
      fb(C, "钱包丢了，我只好___朋友借钱。(I lost my wallet, so I had to borrow money from a friend.)", "跟", "gēn", "跟 + person + 借钱.", { altAnswers: ["向", "xiàng"] }),
      fb(C, "雨太大了，比赛___不取消。(The rain was so heavy the match had to be called off.)", "不得", "bùdé", "不得不: forced to."),
      toZh("The lift was broken, so I had to walk up.", "电梯坏了，我只好走上去。", "Diàntī huài le, wǒ zhǐhǎo zǒu shàngqu.", "只好 + verb.", ["电梯坏了，我只好走楼梯。", "Diàntī huài le, wǒ zhǐhǎo zǒu lóutī.", "电梯坏了，我只好爬楼梯。", "Diàntī huài le, wǒ zhǐhǎo pá lóutī.", "电梯坏了，我只好走上去了。", "Diàntī huài le, wǒ zhǐhǎo zǒu shàngqu le."]),
      toZh("I had to tell him the truth.", "我不得不告诉他真相。", "Wǒ bùdébù gàosu tā zhēnxiàng.", "不得不 + verb.", ["我只好告诉他真相。", "Wǒ zhǐhǎo gàosu tā zhēnxiàng.", "我不得不跟他说实话。", "Wǒ bùdébù gēn tā shuō shíhuà.", "我只好跟他说实话。", "Wǒ zhǐhǎo gēn tā shuō shíhuà."]),
      toZh("There was no taxi, so we had to take the bus.", "没有出租车，我们只好坐公共汽车。", "Méiyǒu chūzūchē, wǒmen zhǐhǎo zuò gōnggòng qìchē.", "只好 + 坐 + vehicle.", ["没有出租车，我们只好坐公交车。", "Méiyǒu chūzūchē, wǒmen zhǐhǎo zuò gōngjiāochē.", "没有出租车了，我们只好坐公共汽车。", "Méiyǒu chūzūchē le, wǒmen zhǐhǎo zuò gōnggòng qìchē."]),
      wo(["天", "太", "晚", "了", "我", "只好", "住", "在", "朋友", "家"], "It was too late, so I had to stay at a friend's.", "Situation, then 只好 + verb."),
      say("对不起，我不得不先走了。", "对不起，我不得不先走了: sorry, I'm afraid I have to leave now.", "bùdébù: falling, rising, falling.", "Excuse yourself from a dinner."),
    ]
  ),
];
