// A2 unit 5 practice lessons (因为…所以, 虽然…但是, 如果…就, health,
// 应该/可以/得), drafted from their specs in specs.ts.

import { ex, fb, layer, listen, mc, ms, mt, say, sec, toEn, toZh, wo, zh } from "./authoring";
import { ZH_A2_SPEC as S } from "./specs";

const C = "Complete (characters or pinyin).";

export const ZH_A2_LAYERS_U5 = [
  layer(
    S,
    "zh-a2r-because",
    "Transform: Join Them with 因为…所以",
    "Two short sentences in, one connected sentence out: reason with 因为, result with 所以, reason first.",
    "7 min",
    [
      sec(
        "Joining two facts",
        [
          "下雨了。我没去。 → 因为下雨了，所以我没去。 The reason comes first, the result second, and Chinese is happy to keep both words.",
          `Answering 为什么: start with 因为 and stop there -- ${zh("因为我很累。", "Yīnwèi wǒ hěn lèi.")}`,
        ],
        [ex("因为太贵了，所以我没买。", "Yīnwèi tài guì le, suǒyǐ wǒ méi mǎi.", "It was too expensive, so I didn't buy it."), ex("你为什么学中文？", "Nǐ wèishénme xué Zhōngwén?", "Why are you learning Chinese?"), ex("因为我喜欢中国菜。", "Yīnwèi wǒ xǐhuan Zhōngguó cài.", "Because I like Chinese food.")],
        [mc("He was ill. He didn't come. →", ["因为他病了，所以没来。", "所以他病了，因为没来。", "因为他没来，所以病了。", "他病了因为，所以没来。"], 0, "Reason (因为) first, result (所以) second.")]
      ),
    ],
    [
      ms("Which are correct? (Choose all that apply.)", ["因为下雨，所以我们不去了。", "他病了，所以没来。", "所以我很累，因为我没睡。", "因为我很忙，我不能去。"], [0, 1, 3], "Reason first: 所以 can't open the first clause."),
      mc("你为什么不吃？ -- the best answer:", ["因为我不饿。", "所以我不饿。", "我不饿所以。", "为什么不饿。"], 0, "Answer 为什么 with 因为."),
      listen("因为我很累，所以早点儿睡了。", "Why did the speaker go to bed early?", ["Because they were tired", "Because it was late", "Because they were ill", "Because they had work"], 0, "因为我很累: because I was tired."),
      fb(C, "___太贵了，所以我没买。(It was too expensive, so I didn't buy it.)", "因为", "yīnwèi", "因为 + reason."),
      fb(C, "因为下雨了，___我们没去。(It rained, so we didn't go.)", "所以", "suǒyǐ", "所以 + result."),
      fb(C, "你___什么学中文？(Why are you learning Chinese?)", "为", "wèi", "为什么: why."),
      toZh("Because I'm busy.", "因为我很忙。", "Yīnwèi wǒ hěn máng.", "因为 + reason."),
      toZh("It's raining, so let's not go out.", "因为下雨了，所以我们别出去了。", "Yīnwèi xià yǔ le, suǒyǐ wǒmen bié chūqu le.", "因为…所以.", ["下雨了，所以我们不出去了。", "Xià yǔ le, suǒyǐ wǒmen bù chūqu le.", "因为下雨，所以我们不出去了。", "Yīnwèi xià yǔ, suǒyǐ wǒmen bù chūqu le."]),
      toEn("因为他很忙，所以没来。", "Yīnwèi tā hěn máng, suǒyǐ méi lái.", "He didn't come because he was busy.", "因为…所以.", ["He was busy, so he didn't come.", "Because he was busy, he didn't come.", "He was very busy so he didn't come.", "Since he was busy, he didn't come."]),
      say("因为我喜欢中国菜！", "因为我喜欢中国菜: because I like Chinese food!", "yīnwèi: high, then falling.", "Give a reason for learning Chinese."),
    ]
  ),

  layer(
    S,
    "zh-a2d-although",
    "Pattern Practice: 虽然…但是…",
    "Although A, (but) B: both halves marked, with 但是, 可是 or 还是 in the second.",
    "6 min",
    [
      sec(
        "The frame",
        [
          "虽然 + A，但是/可是 + B. Add 还是 (still) before the verb of B when B happens anyway: 虽然很累，他还是去了.",
          "虽然 can sit before or after the subject; 但是 always opens the second clause.",
        ],
        [ex("虽然很难，但是很有意思。", "Suīrán hěn nán, dànshì hěn yǒu yìsi.", "It's hard, but interesting."), ex("他虽然很累，还是去上班了。", "Tā suīrán hěn lèi, háishi qù shàngbān le.", "Tired as he was, he still went to work.")],
        [mc("Although it's cheap, I don't like it:", ["虽然很便宜，但是我不喜欢。", "因为很便宜，所以我不喜欢。", "虽然很便宜，所以我不喜欢。", "但是很便宜，虽然我不喜欢。"], 0, "虽然…但是.")]
      ),
    ],
    [
      listen("虽然下雨，但是我们还是去了。", "Did they go?", ["Yes, despite the rain", "No, because of the rain", "They went before the rain", "Only some of them"], 0, "虽然…但是…还是."),
      mc("Which pairs with 虽然?", ["但是", "所以", "因为", "如果"], 0, "虽然…但是."),
      fb(C, "___很累，但是很高兴。(Tired, but happy.)", "虽然", "suīrán", "虽然 + first clause."),
      fb(C, "虽然很贵，___很好吃。(It's expensive, but delicious.)", "但是", "dànshì", "但是 + second clause.", { altAnswers: ["可是", "kěshì"] }),
      fb(C, "虽然很冷，他___去跑步了。(It was cold, but he still went running.)", "还是", "háishi", "还是: still."),
      fb(C, "她虽然很忙，可是每天都___中文。(Busy as she is, she studies Chinese every day.)", "学", "xué", "Verb after 每天都."),
      toZh("Although it's hard, it's interesting.", "虽然很难，但是很有意思。", "Suīrán hěn nán, dànshì hěn yǒu yìsi.", "虽然…但是.", ["虽然很难，可是很有意思。", "Suīrán hěn nán, kěshì hěn yǒu yìsi."]),
      toZh("Although he's tired, he still went.", "虽然他很累，但是还是去了。", "Suīrán tā hěn lèi, dànshì háishi qù le.", "虽然…但是…还是.", ["他虽然很累，还是去了。", "Tā suīrán hěn lèi, háishi qù le.", "虽然他很累，他还是去了。", "Suīrán tā hěn lèi, tā háishi qù le."]),
      wo(["虽然", "很", "远", "但是", "很", "漂亮"], "Although it's far, it's beautiful.", "虽然 A，但是 B."),
      say("虽然很难，但是我喜欢。", "虽然很难，但是我喜欢: it's hard, but I like it.", "Pause at the comma.", "Say how you feel about learning Chinese."),
    ]
  ),

  layer(
    S,
    "zh-a2d-if",
    "Circuit: 如果…就…",
    "Rounds of conditions: 如果 (or 要是) for the if, 就 before the verb of the result.",
    "6 min",
    [
      sec(
        "The frame",
        [
          "如果/要是 + condition，(subject) + 就 + result. 就 goes after the subject of the second clause, right before its verb: 如果下雨，我们就不去了.",
        ],
        [ex("如果你累了，就休息一下。", "Rúguǒ nǐ lèi le, jiù xiūxi yíxià.", "If you're tired, take a rest."), ex("要是明天有空，我就去看你。", "Yàoshi míngtiān yǒu kòng, wǒ jiù qù kàn nǐ.", "If I'm free tomorrow, I'll come and see you.")],
        [mc("Where does 就 go in the second half?", ["After the subject, before the verb", "At the very start", "At the end", "Before the subject"], 0, "我们就不去了.")]
      ),
    ],
    [
      listen("如果太贵，我就不买了。", "When won't the speaker buy it?", ["If it's too expensive", "If it's cheap", "If it's sold out", "If it's ugly"], 0, "如果太贵: if too expensive."),
      mc("要是 means:", ["if", "although", "because", "then"], 0, "要是 = 如果, in speech."),
      fb(C, "___明天下雨，我们就不去了。(If it rains tomorrow, we won't go.)", "如果", "rúguǒ", "如果 + condition.", { altAnswers: ["要是", "yàoshi"] }),
      fb(C, "如果你有问题，___问我。(If you have a question, ask me.)", "就", "jiù", "就 + result."),
      fb(C, "要是你累了，就___一下。(If you're tired, have a rest.)", "休息", "xiūxi", "就 + verb."),
      fb(C, "如果有空，我就去___你。(If I'm free, I'll come and see you.)", "看", "kàn", "看你: see you."),
      toZh("If you're free, come over.", "如果你有空，就来吧。", "Rúguǒ nǐ yǒu kòng, jiù lái ba.", "如果 + condition, 就 + result.", ["要是你有空，就来吧。", "Yàoshi nǐ yǒu kòng, jiù lái ba.", "如果你有空，就过来吧。", "Rúguǒ nǐ yǒu kòng, jiù guòlai ba."]),
      toZh("If it's cheap, I'll buy it.", "如果便宜，我就买。", "Rúguǒ piányi, wǒ jiù mǎi.", "如果 + condition, 我就 + result.", ["要是便宜，我就买。", "Yàoshi piányi, wǒ jiù mǎi."]),
      wo(["如果", "下雨", "我们", "就", "不", "去", "了"], "If it rains, we won't go.", "如果 + condition, subject + 就 + result."),
      say("如果你有问题，就问我。", "如果你有问题，就问我: if you have a question, ask me.", "rúguǒ: rising, then a dip.", "Offer to answer questions."),
    ]
  ),

  layer(
    S,
    "zh-a2r-doctor",
    "Dialogue: At the Clinic",
    "A visit to the doctor: describing symptoms, how long you've had them, and following the advice.",
    "7 min",
    [
      sec(
        "The dialogue",
        ["Tom isn't feeling well and sees a doctor."],
        [
          ex("你哪儿不舒服？", "Nǐ nǎr bù shūfu?", "What seems to be the problem?"),
          ex("我头疼，还有点儿发烧。", "Wǒ tóu téng, hái yǒudiǎnr fāshāo.", "I've got a headache and a slight fever."),
          ex("发烧几天了？", "Fāshāo jǐ tiān le?", "How many days have you had the fever?"),
          ex("两天了。", "Liǎng tiān le.", "Two days."),
          ex("你感冒了。多喝水，多休息。", "Nǐ gǎnmào le. Duō hē shuǐ, duō xiūxi.", "You've got a cold. Drink plenty of water and rest."),
          ex("这个药一天吃三次。", "Zhège yào yì tiān chī sān cì.", "Take this medicine three times a day."),
        ],
        [mc("What's wrong with Tom?", ["A cold", "A broken arm", "A stomach ache", "Nothing"], 0, "你感冒了: you've got a cold.")]
      ),
    ],
    [
      mt("Match.", [["头疼", "headache"], ["发烧", "fever"], ["药", "medicine"], ["舒服", "comfortable, well"]], "At the doctor's."),
      listen("这个药一天吃三次。", "How often should Tom take the medicine?", ["Three times a day", "Once a day", "Every three days", "Three days in a row"], 0, "一天三次: three times a day."),
      fb(C, "我___疼。(I have a headache.)", "头", "tóu", "头疼: headache."),
      fb(C, "多___水，多休息。(Drink plenty of water and rest.)", "喝", "hē", "多 + verb: do more of it."),
      fb(C, "你哪儿不___？(What's the matter?)", "舒服", "shūfu", "不舒服: unwell."),
      toZh("I have a sore throat.", "我嗓子疼。", "Wǒ sǎngzi téng.", "Body part + 疼.", ["我喉咙疼。", "Wǒ hóulóng téng."]),
      toZh("Take the medicine twice a day.", "药一天吃两次。", "Yào yì tiān chī liǎng cì.", "一天 + 吃 + 两次.", ["一天吃两次药。", "Yì tiān chī liǎng cì yào.", "这个药一天吃两次。", "Zhège yào yì tiān chī liǎng cì."]),
      toEn("我感冒两天了。", "Wǒ gǎnmào liǎng tiān le.", "I've had a cold for two days.", "Duration + 了: still going.", ["I've had a cold for two days now.", "I have had a cold for two days.", "I've been sick with a cold for two days."]),
      say("我头疼，还有点儿发烧。", "我头疼，还有点儿发烧: I've got a headache and a slight fever.", "hái yǒudiǎnr: and a bit.", "Describe your symptoms."),
    ]
  ),

  layer(
    S,
    "zh-a2r-advice",
    "Contrast: 应该, 可以, 得, 会, 能",
    "Five modal verbs, five jobs: should, may, must, know how, be able. See them side by side and choose.",
    "7 min",
    [
      sec(
        "Five jobs",
        [
          "应该: should (advice). 可以: may (permission). 得 (děi): must, have to. 会: know how (a learned skill). 能: be able (circumstances).",
          "Negatives: 不应该, 不可以 / 不行, 不用 (no need -- not 不得), 不会, 不能.",
        ],
        [
          ex("你应该去看医生。", "Nǐ yīnggāi qù kàn yīshēng.", "You should see a doctor."),
          ex("我可以走了吗？", "Wǒ kěyǐ zǒu le ma?", "May I go now?"),
          ex("我得走了。", "Wǒ děi zǒu le.", "I have to go."),
          ex("我会游泳，可是今天不能去。", "Wǒ huì yóuyǒng, kěshì jīntiān bù néng qù.", "I can swim, but I can't go today."),
        ],
        [mc("You should rest more:", ["你应该多休息。", "你会多休息。", "你可以多休息吗。", "你得不多休息。"], 0, "Advice: 应该.")]
      ),
    ],
    [
      mt("Match.", [["应该", "should"], ["可以", "may"], ["得 (děi)", "must"], ["会", "know how to"]], "Five modal verbs."),
      ms("Which use the right modal? (Choose all that apply.)", ["你应该早点儿睡。", "这儿可以拍照吗？", "我会开车，可是喝了酒，不能开。", "明天不得上班。"], [0, 1, 2], "No need to: 不用, not 不得."),
      listen("明天不用上班。", "What does the speaker say?", ["There's no need to work tomorrow.", "I can't work tomorrow.", "I shouldn't work tomorrow.", "I must work tomorrow."], 0, "不用: no need."),
      fb(C, "你___早点儿睡觉。(You should go to bed earlier.)", "应该", "yīnggāi", "Advice: 应该."),
      fb(C, "我___进来吗？(May I come in?)", "可以", "kěyǐ", "Permission: 可以."),
      fb(C, "太晚了，我___走了。(It's late -- I have to go.)", "得", "děi", "Must: 得 (děi)."),
      toZh("You should see a doctor.", "你应该去看医生。", "Nǐ yīnggāi qù kàn yīshēng.", "应该 + verb.", ["你应该看医生。", "Nǐ yīnggāi kàn yīshēng.", "你应该去看病。", "Nǐ yīnggāi qù kàn bìng."]),
      toZh("No need to come tomorrow.", "明天不用来。", "Míngtiān bú yòng lái.", "不用: no need.", ["你明天不用来。", "Nǐ míngtiān bú yòng lái."]),
      toEn("这儿不可以抽烟。", "Zhèr bù kěyǐ chōuyān.", "You can't smoke here.", "不可以: not allowed.", ["No smoking here.", "Smoking isn't allowed here.", "You may not smoke here.", "Smoking is not allowed here.", "You're not allowed to smoke here."]),
      say("我得走了，明天见！", "我得走了，明天见: I've got to go -- see you tomorrow!", "děi, not dé: a different reading of 得.", "Say goodbye because you have to leave."),
    ]
  ),
];
