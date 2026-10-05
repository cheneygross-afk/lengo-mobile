// Synced from cheneygross-afk/lengo:src/lib/lessons/zh/a2-lessons-u5.ts by scripts/sync-content.mjs -- edit it there, not here.
// Chinese A2, unit 5: reasons and conditions -- 因为…所以, 虽然…但是,
// 如果…就, health and the doctor, 应该/可以/得 -- and the A2 review.

import { ex, fb, lesson, listen, mc, ms, mt, say, sec, toEn, toZh, wo, zh } from "./authoring";

const L = "ZH-A2" as const;
const C = "Complete (characters or pinyin).";

export const ZH_A2_LESSONS_U5 = [
  lesson(
    L,
    "zh-a2-yinwei-suoyi",
    "Because and So: 因为…所以…",
    "Give reasons with 因为 and results with 所以 -- often both in one sentence, reason first. And asking why with 为什么.",
    "8 min",
    [
      sec(
        "Reason first",
        [
          `${zh("因为", "yīnwèi")} (because) introduces the reason, ${zh("所以", "suǒyǐ")} (so) the result, and Chinese likes to use both: ${zh("因为下雨，所以我没去。", "Yīnwèi xià yǔ, suǒyǐ wǒ méi qù.")} (Because it rained, I didn't go.)`,
          "Either word can be dropped: 因为下雨，我没去 / 下雨了，所以我没去. The reason normally comes first.",
        ],
        [ex("因为我很累，所以早点儿睡了。", "Yīnwèi wǒ hěn lèi, suǒyǐ zǎo diǎnr shuì le.", "I was tired, so I went to bed early."), ex("他病了，所以没来上课。", "Tā bìng le, suǒyǐ méi lái shàngkè.", "He was ill, so he didn't come to class.")],
        [mc("Because it's cold, I'm not going out:", ["因为很冷，所以我不出去。", "所以很冷，因为我不出去。", "我不出去所以因为很冷。", "因为我不出去，所以很冷。"], 0, "因为 + reason, 所以 + result.")]
      ),
      sec(
        "Why?",
        [
          `Ask with ${zh("为什么", "wèishénme")} before the verb: ${zh("你为什么不来？", "Nǐ wèishénme bù lái?")} Answer with 因为…`,
        ],
        [ex("你为什么学中文？", "Nǐ wèishénme xué Zhōngwén?", "Why are you learning Chinese?"), ex("因为我想去中国工作。", "Yīnwèi wǒ xiǎng qù Zhōngguó gōngzuò.", "Because I want to work in China.")],
        [mc("Why are you late?", ["你为什么来晚了？", "你来晚了为什么？", "为什么你晚来了因为？", "你因为来晚了？"], 0, "为什么 before the verb.")]
      ),
    ],
    [
      mc("因为下雨，所以我没去 means:", ["I didn't go because it rained.", "It rained because I didn't go.", "I went even though it rained.", "If it rains, I won't go."], 0, "Reason, then result."),
      mt("Match.", [["因为", "because"], ["所以", "so"], ["为什么", "why"]], "Reason, result, question."),
      listen("你为什么学中文？", "What is being asked?", ["Why are you learning Chinese?", "Where do you learn Chinese?", "How long have you learned Chinese?", "Do you like Chinese?"], 0, "为什么: why."),
      fb(C, "___我很忙，所以不能去。(Because I'm busy, I can't go.)", "因为", "yīnwèi", "因为 + reason."),
      fb(C, "他病了，___没来。(He was ill, so he didn't come.)", "所以", "suǒyǐ", "所以 + result."),
      fb(C, "你___不吃？(Why aren't you eating?)", "为什么", "wèishénme", "为什么 before the verb."),
      toZh("Why didn't you come?", "你为什么没来？", "Nǐ wèishénme méi lái?", "为什么 + 没来."),
      toZh("Because it's too expensive.", "因为太贵了。", "Yīnwèi tài guì le.", "因为 + reason."),
      toEn("因为我很累，所以早点儿睡了。", "Yīnwèi wǒ hěn lèi, suǒyǐ zǎo diǎnr shuì le.", "I was very tired, so I went to bed early.", "因为…所以.", ["Because I was tired, I went to bed early.", "I was tired so I went to sleep early.", "Because I was very tired, I went to bed early.", "I was tired, so I went to bed early.", "Because I was tired, I slept early."]),
      say("因为我想去中国。", "因为我想去中国: because I want to go to China.", "yīnwèi: high, then falling.", "Explain why you're learning Chinese."),
    ],
    { teaches: ["grammar.yinwei-suoyi"] }
  ),

  lesson(
    L,
    "zh-a2-suiran-danshi",
    "Although…: 虽然…但是…",
    "虽然 A，但是 B: although A, (but) B. Chinese keeps both halves where English keeps only one.",
    "7 min",
    [
      sec(
        "Both halves",
        [
          `${zh("虽然", "suīrán")} (although) in the first clause, ${zh("但是", "dànshì")} (but) or 可是 in the second: ${zh("虽然很贵，但是很好吃。", "Suīrán hěn guì, dànshì hěn hǎochī.")} (Although it's expensive, it's delicious.) English would use only one of them; Chinese uses both.`,
          "虽然 can come before or after the subject: 他虽然很忙，但是… / 虽然他很忙，但是…",
        ],
        [ex("虽然下雨，但是我们还是去了。", "Suīrán xià yǔ, dànshì wǒmen háishi qù le.", "Although it was raining, we still went."), ex("他虽然很忙，可是每天跑步。", "Tā suīrán hěn máng, kěshì měitiān pǎobù.", "Although he's busy, he runs every day.")],
        [mc("Although it's cheap, it's not good:", ["虽然很便宜，但是不好。", "但是很便宜，虽然不好。", "虽然很便宜，所以不好。", "很便宜虽然，但是不好。"], 0, "虽然…但是.")]
      ),
      sec(
        "还是: still",
        [
          `In the second half, ${zh("还是", "háishi")} before the verb means \"still, all the same\" -- not the \"or\" from unit 2: 虽然很累，他还是去上班了.`,
        ],
        [ex("虽然很累，他还是去上班了。", "Suīrán hěn lèi, tā háishi qù shàngbān le.", "Tired as he was, he still went to work.")],
        [mc("In 他还是去了, 还是 means:", ["still", "or", "also", "again"], 0, "Before a verb in a statement: still.")]
      ),
    ],
    [
      mc("虽然很贵，但是很好吃 means:", ["Although it's expensive, it's delicious.", "It's expensive because it's delicious.", "It's cheap and delicious.", "If it's expensive, it's delicious."], 0, "虽然…但是."),
      ms("Which are correct? (Choose all that apply.)", ["虽然很冷，但是我们去了。", "他虽然很忙，可是很高兴。", "虽然很冷，所以我们去了。", "虽然下雨，我们还是去了。"], [0, 1, 3], "虽然 pairs with 但是/可是/还是, not 所以."),
      listen("虽然很累，但是很高兴。", "How does the speaker feel?", ["Tired but happy", "Happy and rested", "Too tired to be happy", "Sad"], 0, "虽然累，但是高兴."),
      fb(C, "___很贵，但是很好。(Although it's expensive, it's good.)", "虽然", "suīrán", "虽然 + first clause."),
      fb(C, "虽然下雨，___我们去了。(Although it rained, we went.)", "但是", "dànshì", "但是 + second clause.", { altAnswers: ["可是", "kěshì"] }),
      fb(C, "虽然很累，他___去上班了。(Tired as he was, he still went to work.)", "还是", "háishi", "还是: still."),
      toZh("Although it's cold, I'm going out.", "虽然很冷，但是我要出去。", "Suīrán hěn lěng, dànshì wǒ yào chūqu.", "虽然…但是.", ["虽然很冷，可是我要出去。", "Suīrán hěn lěng, kěshì wǒ yào chūqu.", "虽然很冷，但是我出去。", "Suīrán hěn lěng, dànshì wǒ chūqu."]),
      toEn("他虽然很忙，但是每天跑步。", "Tā suīrán hěn máng, dànshì měitiān pǎobù.", "Although he's busy, he runs every day.", "虽然…但是.", ["Although he is busy, he runs every day.", "He's busy, but he runs every day.", "Even though he's busy, he runs every day.", "He's very busy but runs every day.", "Although he's very busy, he runs every day."]),
      wo(["虽然", "很", "贵", "但是", "很", "好吃"], "Although it's expensive, it's delicious.", "虽然 A，但是 B."),
      say("虽然很难，但是很有意思。", "虽然很难，但是很有意思: although it's hard, it's interesting.", "yǒu yìsi: the si is light.", "Say Chinese is hard but interesting."),
    ],
    { teaches: ["grammar.suiran-danshi"] }
  ),

  lesson(
    L,
    "zh-a2-ruguo",
    "If…: 如果…就…",
    "如果 A，(我)就 B: if A, (then) B. The condition comes first, and 就 marks the result.",
    "7 min",
    [
      sec(
        "Condition first",
        [
          `${zh("如果", "rúguǒ")} (if) opens the condition; ${zh("就", "jiù")} before the verb of the result: ${zh("如果明天下雨，我们就不去了。", "Rúguǒ míngtiān xià yǔ, wǒmen jiù bú qù le.")} (If it rains tomorrow, we won't go.)`,
          `In speech, ${zh("要是", "yàoshi")} means the same as 如果. 就 goes after the subject of the second clause, right before the verb.`,
        ],
        [ex("如果你有空，就来我家吧。", "Rúguǒ nǐ yǒu kòng, jiù lái wǒ jiā ba.", "If you're free, come over."), ex("要是太贵，我就不买了。", "Yàoshi tài guì, wǒ jiù bù mǎi le.", "If it's too expensive, I won't buy it.")],
        [mc("If you're tired, rest:", ["如果你累，就休息吧。", "就你累，如果休息吧。", "如果休息，你就累。", "你累就如果休息。"], 0, "如果 + condition, 就 + result.")]
      ),
    ],
    [
      mc("如果明天下雨，我们就不去了 means:", ["If it rains tomorrow, we won't go.", "It rained, so we didn't go.", "Even if it rains, we'll go.", "We'll go when it stops raining."], 0, "如果 + condition, 就 + result."),
      mc("Where does 就 go?", ["After the subject, before the verb", "At the start of the result", "At the very end", "Before 如果"], 0, "我们就不去."),
      listen("要是太贵，我就不买了。", "When won't the speaker buy it?", ["If it's too expensive", "If it's cheap", "If it's ugly", "If it's sold out"], 0, "要是: if."),
      fb(C, "___你有空，就来我家吧。(If you're free, come over.)", "如果", "rúguǒ", "如果 + condition.", { altAnswers: ["要是", "yàoshi"] }),
      fb(C, "如果下雨，我们___不去了。(If it rains, we won't go.)", "就", "jiù", "就 + result."),
      fb(C, "如果你不舒服，就___休息。(If you're unwell, have a rest.)", "去", "qù", "就 + verb."),
      toZh("If it's too expensive, I won't buy it.", "如果太贵，我就不买了。", "Rúguǒ tài guì, wǒ jiù bù mǎi le.", "如果 + condition, 就 + result.", ["要是太贵，我就不买了。", "Yàoshi tài guì, wǒ jiù bù mǎi le.", "如果太贵，我就不买。", "Rúguǒ tài guì, wǒ jiù bù mǎi."]),
      toEn("如果你有问题，就问我。", "Rúguǒ nǐ yǒu wèntí, jiù wèn wǒ.", "If you have a question, ask me.", "如果 + condition, 就 + result.", ["If you have any questions, ask me.", "If you have questions, ask me.", "If you have a problem, ask me.", "Ask me if you have a question."]),
      wo(["如果", "你", "有空", "就", "来", "吧"], "If you're free, come along.", "如果 + condition, 就 + result."),
      say("如果你有空，就给我打电话。", "如果你有空，就给我打电话: if you're free, call me.", "rúguǒ: rising, then a dip.", "Ask a friend to call you if they're free."),
    ],
    { teaches: ["grammar.ruguo"] }
  ),

  lesson(
    L,
    "zh-a2-health",
    "At the Doctor's: Body and Health",
    "Say what hurts and how you feel: 头疼, 发烧, 感冒, 不舒服 -- and understand a doctor's simple questions.",
    "8 min",
    [
      sec(
        "What's wrong",
        [
          `${zh("我不舒服。", "Wǒ bù shūfu.")} (I don't feel well.) Body part + ${zh("疼", "téng")} for pain: ${zh("头疼", "tóu téng")} (headache), ${zh("肚子疼", "dùzi téng")} (stomach ache), ${zh("嗓子疼", "sǎngzi téng")} (sore throat).`,
          `${zh("感冒", "gǎnmào")} (a cold), ${zh("发烧", "fāshāo")} (a fever), ${zh("咳嗽", "késou")} (a cough). Seeing a doctor is ${zh("看病", "kàn bìng")}.`,
        ],
        [ex("我头疼，还有点儿发烧。", "Wǒ tóu téng, hái yǒudiǎnr fāshāo.", "I've got a headache and a slight fever."), ex("我感冒了。", "Wǒ gǎnmào le.", "I've caught a cold.")],
        [mc("I have a headache:", ["我头疼。", "我疼头。", "我头是疼。", "头我疼了是。"], 0, "Body part + 疼.")]
      ),
      sec(
        "The doctor asks",
        [
          `${zh("你哪儿不舒服？", "Nǐ nǎr bù shūfu?")} (What's the matter? -- literally \"where are you uncomfortable?\") ${zh("发烧多长时间了？", "Fāshāo duō cháng shíjiān le?")} (How long have you had the fever?)`,
          `Advice: ${zh("多喝水，多休息。", "Duō hē shuǐ, duō xiūxi.")} (Drink plenty of water and rest.) 多 + verb: do more of it.`,
        ],
        [ex("你哪儿不舒服？", "Nǐ nǎr bù shūfu?", "What seems to be the problem?"), ex("一天吃三次药。", "Yì tiān chī sān cì yào.", "Take the medicine three times a day.")],
        [mc("多休息 means:", ["Rest a lot.", "Too much rest.", "How much rest?", "Rest more than me."], 0, "多 + verb: do more of it.")]
      ),
    ],
    [
      mt("Match.", [["头疼", "headache"], ["发烧", "fever"], ["感冒", "a cold"], ["看病", "see a doctor"]], "Four health words."),
      mc("你哪儿不舒服？ asks:", ["What's wrong?", "Where are you going?", "Are you comfortable?", "Where's the hospital?"], 0, "Literally: where are you uncomfortable?"),
      listen("我肚子疼。", "What's wrong with the speaker?", ["A stomach ache", "A headache", "A sore throat", "A cough"], 0, "肚子疼: stomach ache."),
      fb(C, "我头___。(I have a headache.)", "疼", "téng", "Body part + 疼."),
      fb(C, "我___了，在家休息。(I've caught a cold and I'm resting at home.)", "感冒", "gǎnmào", "感冒: a cold."),
      fb(C, "多喝水，多___。(Drink plenty of water, get plenty of rest.)", "休息", "xiūxi", "多 + verb."),
      toZh("I don't feel well.", "我不舒服。", "Wǒ bù shūfu.", "不舒服: unwell.", ["我身体不舒服。", "Wǒ shēntǐ bù shūfu."]),
      toZh("I have a fever.", "我发烧了。", "Wǒ fāshāo le.", "发烧 + 了.", ["我发烧。", "Wǒ fāshāo."]),
      toEn("一天吃三次药。", "Yì tiān chī sān cì yào.", "Take the medicine three times a day.", "次: times.", ["Take medicine three times a day.", "Take the medicine 3 times a day.", "Take it three times a day.", "Three times a day."]),
      say("我嗓子疼。", "我嗓子疼 (wǒ sǎngzi téng): I have a sore throat.", "wǒ sǎng: third + third, so wǒ rises.", "Tell a doctor you have a sore throat."),
    ],
    { teaches: ["vocab.health"] }
  ),

  lesson(
    L,
    "zh-a2-yinggai-keyi",
    "Should, May, Must: 应该, 可以, 得",
    "Give advice with 应该, ask and grant permission with 可以, and say you have to with 得 (děi).",
    "8 min",
    [
      sec(
        "应该: should",
        [
          `${zh("应该", "yīnggāi")} + verb gives advice or says what's right: ${zh("你应该多休息。", "Nǐ yīnggāi duō xiūxi.")} (You should rest more.) Negative: 不应该 (shouldn't).`,
        ],
        [ex("你应该去看病。", "Nǐ yīnggāi qù kàn bìng.", "You should see a doctor."), ex("我们不应该迟到。", "Wǒmen bù yīnggāi chídào.", "We shouldn't be late.")],
        [mc("You should go to bed early:", ["你应该早点儿睡。", "你早点儿应该睡。", "应该你睡早点儿。", "你睡应该早点儿。"], 0, "应该 + verb.")]
      ),
      sec(
        "可以: may; 得: must",
        [
          `${zh("可以", "kěyǐ")} asks or gives permission: ${zh("我可以进来吗？", "Wǒ kěyǐ jìnlai ma?")} -- ${zh("可以。", "Kěyǐ.")} \"No\" is usually 不行 (bù xíng) or 不可以.`,
          `${zh("得", "děi")} (pronounced děi here) means \"have to\": ${zh("我得走了。", "Wǒ děi zǒu le.")} (I've got to go.) Its negative is 不用 (don't need to), not 不得.`,
        ],
        [ex("这儿可以拍照吗？", "Zhèr kěyǐ pāizhào ma?", "Can we take photos here?"), ex("明天不用上班。", "Míngtiān bú yòng shàngbān.", "No need to go to work tomorrow.")],
        [mc("I have to go:", ["我得走了。", "我应该走了吗。", "我可以走了。", "我走得了。"], 0, "得 (děi): must.")]
      ),
    ],
    [
      mt("Match.", [["应该", "should"], ["可以", "may"], ["得 (děi)", "have to"], ["不用", "don't need to"]], "Advice, permission, obligation, none needed."),
      mc("The negative of 得 (děi, have to) is usually:", ["不用", "不得", "没得", "不应该"], 0, "不用: no need."),
      listen("我可以进来吗？", "What does the speaker want?", ["Permission to come in", "To leave", "Help", "To sit down"], 0, "可以…吗: may I."),
      fb(C, "你___多喝水。(You should drink more water.)", "应该", "yīnggāi", "应该: should."),
      fb(C, "这儿___拍照吗？(Can we take photos here?)", "可以", "kěyǐ", "可以: may."),
      fb(C, "明天不___上班。(No need to work tomorrow.)", "用", "yòng", "不用: don't need to."),
      toZh("I've got to go.", "我得走了。", "Wǒ děi zǒu le.", "得 (děi) + 走 + 了.", ["我要走了。", "Wǒ yào zǒu le."]),
      toZh("You should see a doctor.", "你应该去看病。", "Nǐ yīnggāi qù kàn bìng.", "应该 + verb.", ["你应该去看医生。", "Nǐ yīnggāi qù kàn yīshēng.", "你应该看医生。", "Nǐ yīnggāi kàn yīshēng."]),
      toEn("我们不应该迟到。", "Wǒmen bù yīnggāi chídào.", "We shouldn't be late.", "不应该: shouldn't.", ["We should not be late.", "We shouldn't arrive late.", "We shouldn't be late", "We mustn't be late."]),
      say("我可以坐这儿吗？", "我可以坐这儿吗: may I sit here?", "kěyǐ: written with two third tones, said kéyǐ.", "Ask if a seat is free."),
    ],
    { teaches: ["grammar.yinggai-keyi"] }
  ),

  lesson(
    L,
    "zh-a2-review",
    "A2 Review: A Week in Shanghai",
    "Everything from A2 in one story: experiences, comparisons, complements, 把, reasons, conditions, time and directions.",
    "10 min",
    [
      sec(
        "The story",
        [
          "Anna writes to a friend about her first week in Shanghai. Read it with the pinyin, then answer the questions.",
        ],
        [
          ex("我以前没去过上海。", "Wǒ yǐqián méi qù guo Shànghǎi.", "I'd never been to Shanghai before."),
          ex("上海比北京热多了。", "Shànghǎi bǐ Běijīng rè duō le.", "Shanghai is much hotter than Beijing."),
          ex("我把行李放在酒店以后，就去吃饭了。", "Wǒ bǎ xíngli fàng zài jiǔdiàn yǐhòu, jiù qù chī fàn le.", "After leaving my luggage at the hotel, I went straight out to eat."),
          ex("服务员说得太快，我没听懂。", "Fúwùyuán shuō de tài kuài, wǒ méi tīng dǒng.", "The waiter spoke too fast and I didn't understand."),
          ex("虽然很累，但是我很高兴。", "Suīrán hěn lèi, dànshì wǒ hěn gāoxìng.", "Although I'm tired, I'm very happy."),
        ],
        [
          mc("Had Anna been to Shanghai before?", ["No, never", "Yes, once", "Yes, many times", "She lives there"], 0, "没去过: never been."),
          mc("Why didn't she understand the waiter?", ["He spoke too fast.", "He spoke English.", "It was too loud.", "She was too tired."], 0, "说得太快: spoke too fast."),
        ]
      ),
      sec(
        "What A2 added",
        [
          "Aspect: 过 (ever), 在…呢 (right now), 着 (a state), 已经…了 (already), 要…了 (about to).",
          "Describing: 比 and 没有…那么, 一样, 越来越, verb + 得 + how well, adjective + 地 + verb.",
          "Complements and 把: 看完, 听懂, 进来, 回去, 把书放在桌子上.",
          "Linking: 因为…所以, 虽然…但是, 如果…就, 以前/以后/的时候, 从…到.",
        ],
        [ex("如果有空，我们就一起去爬山吧。", "Rúguǒ yǒu kòng, wǒmen jiù yìqǐ qù pá shān ba.", "If we're free, let's go hiking together.")],
        [mc("Which word marks \"ever\" (experience)?", ["过", "着", "了", "得"], 0, "过: experience.")]
      ),
    ],
    [
      mc("你吃过饺子吗？-- \"Yes\":", ["吃过。", "吃了过。", "过吃。", "没吃过。"], 0, "Repeat verb + 过."),
      mc("This one is a bit cheaper:", ["这个便宜一点儿。", "这个一点儿便宜。", "这个很便宜一点儿。", "这个比便宜一点儿。"], 0, "Adjective + 一点儿."),
      ms("Which sentences are correct? (Choose all that apply.)", ["我把作业做完了。", "他说中文说得很好。", "我比他很高。", "因为下雨，所以我没去。"], [0, 1, 3], "No 很 in a 比 sentence."),
      listen("我已经吃过了。", "Has the speaker eaten?", ["Yes, already", "Not yet", "About to", "Never"], 0, "已经 + verb + 了: already."),
      fb(C, "我在北京住了两___。(I lived in Beijing for two years.)", "年", "nián", "Duration after the verb."),
      fb(C, "电影快开始___。(The film is about to start.)", "了", "le", "快 + event + 了: about to."),
      fb(C, "请把门关___。(Please shut the door.)", "上", "shang", "关上: shut.", { altAnswers: ["shàng"] }),
      toZh("Although it's far, I still want to go.", "虽然很远，但是我还是想去。", "Suīrán hěn yuǎn, dànshì wǒ háishi xiǎng qù.", "虽然…但是…还是.", ["虽然很远，我还是想去。", "Suīrán hěn yuǎn, wǒ háishi xiǎng qù.", "虽然很远，但是我想去。", "Suīrán hěn yuǎn, dànshì wǒ xiǎng qù."]),
      toZh("If you're tired, rest.", "如果你累了，就休息吧。", "Rúguǒ nǐ lèi le, jiù xiūxi ba.", "如果 + condition, 就 + result.", ["如果你累，就休息吧。", "Rúguǒ nǐ lèi, jiù xiūxi ba.", "要是你累了，就休息吧。", "Yàoshi nǐ lèi le, jiù xiūxi ba."]),
      toEn("天气越来越热了。", "Tiānqì yuè lái yuè rè le.", "It's getting hotter and hotter.", "越来越 + adjective.", ["The weather is getting hotter and hotter.", "It's getting hotter.", "The weather's getting hotter and hotter.", "The weather is getting hotter."]),
      say("虽然中文很难，但是我越学越喜欢。", "虽然中文很难，但是我越学越喜欢: Chinese is hard, but the more I learn the more I like it.", "Two patterns in one sentence: take a breath at the comma.", "Say how you feel about learning Chinese."),
    ],
    {
      reviews: [
        "grammar.guo-experience",
        "grammar.bi-comparison",
        "grammar.de-complement",
        "grammar.result-complements",
        "grammar.ba-construction",
        "grammar.yinwei-suoyi",
        "grammar.suiran-danshi",
        "grammar.ruguo",
        "grammar.yiqian-yihou",
        "grammar.duration",
        "grammar.yue-yue",
        "grammar.yao-le",
      ],
    }
  ),
];
