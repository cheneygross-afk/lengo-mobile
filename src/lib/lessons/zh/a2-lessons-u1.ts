// Chinese A2, unit 1: experiences and what's happening now -- 过,
// 在…呢, 着, 一边…一边, hobbies and 已经. Instructions stay in English
// (see docs/curriculum-architecture.md, section 3.4).

import { ex, fb, lesson, listen, mc, ms, mt, say, sec, toEn, toZh, wo, zh } from "./authoring";

const L = "ZH-A2" as const;
const C = "Complete (characters or pinyin).";

export const ZH_A2_LESSONS_U1 = [
  lesson(
    L,
    "zh-a2-guo-experience",
    "Have You Ever…? Experience with 过",
    "Verb + 过 says you've done something at some point in your life: 我去过北京. Its negative, questions, and how it differs from 了.",
    "8 min",
    [
      sec(
        "Verb + 过",
        [
          `${zh("过", "guo")} after a verb means \"have done it before, at least once\": ${zh("我去过北京。", "Wǒ qù guo Běijīng.")} (I've been to Beijing.) It's about experience, not about when.`,
          "Count the times with 次 (cì): 我去过两次 (I've been twice). The number of times goes after 过.",
        ],
        [
          ex("我吃过饺子。", "Wǒ chī guo jiǎozi.", "I've eaten dumplings (before)."),
          ex("她学过中文。", "Tā xué guo Zhōngwén.", "She has studied Chinese."),
          ex("我去过三次上海。", "Wǒ qù guo sān cì Shànghǎi.", "I've been to Shanghai three times."),
        ],
        [mc("I've seen this film:", ["我看过这个电影。", "我过看这个电影。", "我看这个电影过。", "过我看这个电影。"], 0, "过 goes right after the verb.")]
      ),
      sec(
        "Never, and asking",
        [
          `Negative: 没 + verb + 过 -- the 过 stays (unlike 了): ${zh("我没去过日本。", "Wǒ méi qù guo Rìběn.")} (I've never been to Japan.)`,
          `Ask with 吗, or with 没有 at the end: ${zh("你吃过北京烤鸭吗？", "Nǐ chī guo Běijīng kǎoyā ma?")} / ${zh("你吃过没有？", "Nǐ chī guo méiyǒu?")}`,
        ],
        [ex("我没吃过。", "Wǒ méi chī guo.", "I've never had it."), ex("你去过中国吗？", "Nǐ qù guo Zhōngguó ma?", "Have you ever been to China?")],
        [mc("I've never been to Japan:", ["我没去过日本。", "我没去日本过。", "我不去过日本。", "我没去了日本。"], 0, "没 + verb + 过: the 过 stays.")]
      ),
      sec(
        "过 or 了?",
        [
          "了 reports that something happened, often at a particular time: 我昨天去了银行. 过 says it's part of your experience: 我去过那个银行 (I've been to that bank before).",
          "If the answer to \"when?\" matters, it's usually 了; if the point is \"ever / never,\" it's 过.",
        ],
        [ex("我昨天看了一个电影。", "Wǒ zuótiān kàn le yí ge diànyǐng.", "I watched a film yesterday."), ex("这个电影我看过。", "Zhège diànyǐng wǒ kàn guo.", "I've seen this film before.")],
        [mc("Have you ever eaten Peking duck?", ["你吃过北京烤鸭吗？", "你吃了北京烤鸭吗？", "你在吃北京烤鸭吗？", "你吃北京烤鸭了过吗？"], 0, "Experience: 过.")]
      ),
    ],
    [
      mc("我学过一年中文 means:", ["I studied Chinese for a year at some point.", "I'm studying Chinese this year.", "I'll study Chinese for a year.", "I've never studied Chinese."], 0, "过: an experience."),
      ms("Which sentences are correct? (Choose all that apply.)", ["我没去过北京。", "她看过这本书。", "我没去过了北京。", "你吃过饺子吗？"], [0, 1, 3], "过 and 了 don't stack here, and 没…过 keeps 过."),
      listen("我去过两次。", "How many times has the speaker been?", ["Twice", "Never", "Once", "Many times"], 0, "两次: twice."),
      fb(C, "我吃___北京烤鸭。(I've had Peking duck.)", "过", "guo", "Verb + 过: experience."),
      fb(C, "他___去过中国。(He's never been to China.)", "没", "méi", "没 + verb + 过."),
      fb(C, "你去过上海___？(Have you ever been to Shanghai?)", "吗", "ma", "Statement + 吗.", { altAnswers: ["没有", "méiyǒu"] }),
      toZh("I've been to Japan.", "我去过日本。", "Wǒ qù guo Rìběn.", "去 + 过."),
      toZh("I've never seen this film.", "我没看过这个电影。", "Wǒ méi kàn guo zhège diànyǐng.", "没 + 看 + 过."),
      toEn("你学过中文吗？", "Nǐ xué guo Zhōngwén ma?", "Have you ever studied Chinese?", "过 + 吗: have you ever.", ["Have you studied Chinese before?", "Have you studied Chinese?", "Did you ever study Chinese?", "Have you ever learned Chinese?"]),
      say("我没去过中国。", "我没去过中国 (wǒ méi qù guo Zhōngguó): I've never been to China.", "guo is light; stress qù.", "Say you've never been to China."),
    ],
    { teaches: ["grammar.guo-experience"] }
  ),

  lesson(
    L,
    "zh-a2-zai-progressive",
    "Right Now: 在, 正在 and 呢",
    "Say what's happening at this moment: 我在吃饭, 他正在开会, 她睡觉呢 -- and how this 在 differs from the place 在.",
    "8 min",
    [
      sec(
        "在 + verb",
        [
          `Put ${zh("在", "zài")} before a verb to say an action is going on: ${zh("我在吃饭。", "Wǒ zài chī fàn.")} (I'm eating.) ${zh("正在", "zhèngzài")} stresses \"right this moment.\"`,
          `${zh("呢", "ne")} at the end adds the same feeling, alone or together with 在: ${zh("他在睡觉呢。", "Tā zài shuìjiào ne.")} / ${zh("他睡觉呢。", "Tā shuìjiào ne.")}`,
        ],
        [
          ex("我在看书。", "Wǒ zài kàn shū.", "I'm reading."),
          ex("老师正在上课。", "Lǎoshī zhèngzài shàngkè.", "The teacher is teaching right now."),
          ex("妈妈做饭呢。", "Māma zuò fàn ne.", "Mom's cooking."),
        ],
        [mc("I'm reading:", ["我在看书。", "我看书在。", "我在书看。", "我看了书。"], 0, "在 + verb.")]
      ),
      sec(
        "Questions and negatives",
        [
          `Ask ${zh("你在做什么？", "Nǐ zài zuò shénme?")} (what are you doing?). The negative is 没(在) + verb: ${zh("我没在睡觉。", "Wǒ méi zài shuìjiào.")} (I'm not sleeping.)`,
          "Place and action together: 在 + place + verb already describes an ongoing scene: 他在图书馆看书 (he's reading in the library).",
        ],
        [ex("你在做什么？", "Nǐ zài zuò shénme?", "What are you doing?"), ex("我没在看电视。", "Wǒ méi zài kàn diànshì.", "I'm not watching TV.")],
        [mc("What are you doing?", ["你在做什么？", "你做什么在？", "你在什么做？", "你做在什么？"], 0, "在 + verb + 什么.")]
      ),
    ],
    [
      mc("他正在开会 means:", ["He's in a meeting right now.", "He's going to a meeting.", "He has had a meeting.", "He often has meetings."], 0, "正在: in progress right now."),
      mc("Which is NOT about an action in progress?", ["我在北京。", "我在吃饭。", "我吃饭呢。", "我正在吃饭。"], 0, "在 + place alone is location."),
      listen("我在做饭呢。", "What is the speaker doing?", ["Cooking", "Eating", "Sleeping", "Reading"], 0, "做饭: cooking."),
      fb(C, "我___看电视。(I'm watching TV.)", "在", "zài", "在 + verb.", { altAnswers: ["正在", "zhèngzài"] }),
      fb(C, "他睡觉___。(He's sleeping.)", "呢", "ne", "呢: ongoing."),
      fb(C, "我___在睡觉。(I'm not sleeping.)", "没", "méi", "没(在) + verb."),
      toZh("What are you doing?", "你在做什么？", "Nǐ zài zuò shénme?", "在 + 做什么.", ["你在干什么？", "Nǐ zài gàn shénme?", "你做什么呢？", "Nǐ zuò shénme ne?"]),
      toZh("Mom is cooking.", "妈妈在做饭。", "Māma zài zuò fàn.", "在 + 做饭.", ["妈妈正在做饭。", "Māma zhèngzài zuò fàn.", "妈妈在做饭呢。", "Māma zài zuò fàn ne.", "妈妈做饭呢。", "Māma zuò fàn ne."]),
      wo(["她", "正在", "图书馆", "看书"], "She's reading in the library right now.", "正在 can sit before the place phrase.", [["她", "在", "图书馆", "看书"]]),
      say("我在开车呢。", "我在开车呢 (wǒ zài kāi chē ne): I'm driving (right now).", "ne is light.", "Tell a caller you're driving."),
    ],
    { teaches: ["grammar.zai-progressive"] }
  ),

  lesson(
    L,
    "zh-a2-zhe-state",
    "States with 着: The Door Is Open",
    "着 describes a state that continues -- 门开着 (the door is open) -- and the way one action accompanies another: 笑着说.",
    "8 min",
    [
      sec(
        "A lasting state",
        [
          `Verb + ${zh("着", "zhe")} describes a state that stays as it is: ${zh("门开着。", "Mén kāi zhe.")} (the door is open), ${zh("灯开着。", "Dēng kāi zhe.")} (the light is on).`,
          "Where 在 is an action in motion (他在开门 -- he's opening the door), 着 is the state that results (门开着 -- the door stands open).",
        ],
        [ex("门开着。", "Mén kāi zhe.", "The door is open."), ex("他穿着一件红衣服。", "Tā chuān zhe yí jiàn hóng yīfu.", "He's wearing red."), ex("她在床上躺着。", "Tā zài chuáng shang tǎng zhe.", "She's lying on the bed.")],
        [mc("The window is open:", ["窗户开着。", "窗户在开。", "窗户开了着。", "着窗户开。"], 0, "A lasting state: verb + 着.")]
      ),
      sec(
        "Doing one thing while…",
        [
          `Verb₁ + 着 + verb₂: the first describes how the second is done. ${zh("他笑着说。", "Tā xiào zhe shuō.")} (he said with a smile), ${zh("我们走着去吧。", "Wǒmen zǒu zhe qù ba.")} (let's go on foot).`,
          `Place + verb + 着 + thing describes a scene: ${zh("墙上挂着一张地图。", "Qiáng shang guà zhe yì zhāng dìtú.")} (a map hangs on the wall).`,
        ],
        [ex("他笑着说：\"没关系。\"", "Tā xiào zhe shuō: \"Méi guānxi.\"", "He said with a smile, \"No problem.\""), ex("桌子上放着一本书。", "Zhuōzi shang fàng zhe yì běn shū.", "There's a book lying on the table.")],
        [mc("他坐着吃饭 means:", ["He eats sitting down.", "He's sitting, then he'll eat.", "He sat and ate.", "He's going to sit."], 0, "Verb₁ + 着 + verb₂: the manner.")]
      ),
    ],
    [
      mc("灯开着 means:", ["The light is on.", "Someone is turning on the light.", "The light was turned on yesterday.", "Turn on the light."], 0, "着: a state."),
      mc("Which describes a scene with 着?", ["墙上挂着一张画。", "他在挂画。", "他挂了一张画。", "他想挂一张画。"], 0, "Place + verb + 着 + thing."),
      mt("Match the 着 phrase.", [["门开着", "the door is open"], ["站着", "standing"], ["穿着", "wearing"], ["笑着说", "said smiling"]], "Four common 着 phrases."),
      fb(C, "门开___。(The door is open.)", "着", "zhe", "Verb + 着: a lasting state."),
      fb(C, "她穿___一条裙子。(She's wearing a skirt.)", "着", "zhe", "穿着: wearing."),
      fb(C, "我们走___去吧。(Let's walk there.)", "着", "zhe", "走着去: go on foot."),
      toZh("The light is on.", "灯开着。", "Dēng kāi zhe.", "开 + 着."),
      toEn("他笑着说：\"谢谢。\"", "Tā xiào zhe shuō: \"Xièxie.\"", "He said thank you with a smile.", "笑着 describes how he spoke.", ["He smiled and said thank you.", "He said \"thanks\" with a smile.", "Smiling, he said thank you.", "He said thanks with a smile.", "He said \"thank you\" with a smile.", "Smiling, he said thanks."]),
      wo(["桌子", "上", "放着", "一本", "书"], "There's a book on the table.", "Place + verb + 着 + thing."),
      say("窗户开着。", "窗户开着 (chuānghu kāi zhe): the window is open.", "zhe is light.", "Point out that the window is open."),
    ],
    { teaches: ["grammar.zhe-state"], previews: ["vocab.clothes-colors"] }
  ),

  lesson(
    L,
    "zh-a2-yibian",
    "Two Things at Once: 一边…一边…",
    "一边 A 一边 B: doing two things at the same time, like eating while watching TV.",
    "7 min",
    [
      sec(
        "The pattern",
        [
          `${zh("一边", "yìbiān")} + action, ${zh("一边", "yìbiān")} + action: ${zh("我一边吃饭一边看电视。", "Wǒ yìbiān chī fàn yìbiān kàn diànshì.")} (I eat while watching TV.) The subject comes once, at the front.`,
          "Both actions need a real verb, and both are done by the same person. In quick speech the first 一 can drop: 边吃边看.",
        ],
        [
          ex("她一边听音乐一边做作业。", "Tā yìbiān tīng yīnyuè yìbiān zuò zuòyè.", "She does homework while listening to music."),
          ex("我们一边走一边说。", "Wǒmen yìbiān zǒu yìbiān shuō.", "We talked as we walked."),
        ],
        [mc("Where does the subject go?", ["Once, before the first 一边", "After each 一边", "At the end", "Between the two halves"], 0, "Subject + 一边 A 一边 B.")]
      ),
      sec(
        "Rude or fine?",
        [
          "Chinese parents say it too: 不要一边吃饭一边看手机！ (Don't look at your phone while you eat!) -- 不要 before the whole pattern.",
        ],
        [ex("不要一边开车一边打手机。", "Bú yào yìbiān kāi chē yìbiān dǎ shǒujī.", "Don't use your phone while driving.")],
        [mc("Don't eat while you watch TV!", ["不要一边吃饭一边看电视！", "一边不要吃饭一边看电视！", "不要吃饭一边看电视！", "一边吃饭不要一边看电视！"], 0, "不要 before the whole pattern.")]
      ),
    ],
    [
      mc("他一边唱歌一边跳舞 means:", ["He sings while he dances.", "He sings, then dances.", "He can sing and dance.", "He likes singing and dancing."], 0, "Two actions at once."),
      listen("我一边喝咖啡一边看书。", "What two things is the speaker doing?", ["Drinking coffee and reading", "Eating and reading", "Drinking coffee and writing", "Drinking tea and reading"], 0, "喝咖啡 + 看书."),
      fb(C, "我一边吃饭一边看___。(I look at my phone while I eat.)", "手机", "shǒujī", "一边 A 一边 B: 看手机 is the second action."),
      fb(C, "她一边___音乐一边做作业。(She does homework while listening to music.)", "听", "tīng", "听音乐: listen to music."),
      fb(C, "我们一边走一边___。(We talked as we walked.)", "说", "shuō", "Each half needs a verb."),
      toZh("I drink coffee while I read.", "我一边喝咖啡一边看书。", "Wǒ yìbiān hē kāfēi yìbiān kàn shū.", "一边 A 一边 B."),
      toZh("She sings while she cooks.", "她一边做饭一边唱歌。", "Tā yìbiān zuò fàn yìbiān chàng gē.", "一边 + action, twice."),
      wo(["他", "一边", "开车", "一边", "听", "音乐"], "He listens to music while he drives.", "Subject + 一边 A 一边 B."),
      toEn("不要一边吃饭一边说话。", "Bú yào yìbiān chī fàn yìbiān shuōhuà.", "Don't talk while you're eating.", "不要 + the whole pattern.", ["Don't talk while eating.", "Don't speak while you eat.", "Don't talk while you eat.", "Don't eat and talk at the same time.", "Don't talk with your mouth full."]),
      say("我一边吃饭一边看电视。", "我一边吃饭一边看电视: I eat while watching TV.", "yìbiān: 一 falls before biān.", "Say you watch TV while you eat."),
    ],
    { teaches: ["grammar.yibian"] }
  ),

  lesson(
    L,
    "zh-a2-hobbies",
    "Hobbies and Weekends",
    "Talk about what you do in your free time: sports, music, hiking and travel -- and ask about others' hobbies.",
    "8 min",
    [
      sec(
        "Free-time words",
        [
          `${zh("爱好", "àihào")} is a hobby; ${zh("周末", "zhōumò")} the weekend; ${zh("有空", "yǒu kòng")} \"to have free time.\" Ask ${zh("你有什么爱好？", "Nǐ yǒu shénme àihào?")} (what are your hobbies?).`,
          `Sports take different verbs: ${zh("打篮球", "dǎ lánqiú")} (play basketball -- 打 for games played with the hands), ${zh("踢足球", "tī zúqiú")} (play football -- 踢 is \"kick\"), ${zh("跑步", "pǎobù")} (run), ${zh("游泳", "yóuyǒng")} (swim).`,
        ],
        [
          ex("我喜欢爬山。", "Wǒ xǐhuan pá shān.", "I like hiking."),
          ex("他周末常常打篮球。", "Tā zhōumò chángcháng dǎ lánqiú.", "He often plays basketball at the weekend."),
          ex("我的爱好是听音乐。", "Wǒ de àihào shì tīng yīnyuè.", "My hobby is listening to music."),
        ],
        [mc("Play football:", ["踢足球", "打足球", "玩足球", "做足球"], 0, "踢: kick.")]
      ),
      sec(
        "How often",
        [
          `Frequency words go before the verb: ${zh("常常", "chángcháng")} (often), ${zh("有时候", "yǒushíhou")} (sometimes), ${zh("每天", "měitiān")} (every day), ${zh("很少", "hěn shǎo")} (rarely).`,
          `${zh("运动", "yùndòng")} is \"sport, exercise\" as a noun and a verb: 你喜欢运动吗？`,
        ],
        [ex("我每天跑步。", "Wǒ měitiān pǎobù.", "I run every day."), ex("我很少看电视。", "Wǒ hěn shǎo kàn diànshì.", "I rarely watch TV.")],
        [mc("I sometimes go swimming:", ["我有时候去游泳。", "我去游泳有时候。", "有时候游泳我去。", "我游泳去有时候。"], 0, "Frequency before the verb.")]
      ),
    ],
    [
      mt(
        "Match the hobby.",
        [
          ["爬山", "hiking"],
          ["打篮球", "basketball"],
          ["听音乐", "listening to music"],
          ["旅游", "travelling"],
        ],
        "Four common hobbies."
      ),
      mc("你有什么爱好？ asks:", ["What are your hobbies?", "Do you have free time?", "What do you do for work?", "Where do you like to go?"], 0, "爱好: hobby."),
      listen("我周末常常去爬山。", "What does the speaker often do at weekends?", ["Go hiking", "Go swimming", "Play basketball", "Watch films"], 0, "爬山: hiking."),
      fb(C, "他喜欢___篮球。(He likes playing basketball.)", "打", "dǎ", "打 for ball games played with the hands."),
      fb(C, "我___天跑步。(I run every day.)", "每", "měi", "每天: every day."),
      fb(C, "你周末___空吗？(Are you free at the weekend?)", "有", "yǒu", "有空: to be free."),
      toZh("My hobby is travelling.", "我的爱好是旅游。", "Wǒ de àihào shì lǚyóu.", "我的爱好是 + activity."),
      toZh("I rarely watch TV.", "我很少看电视。", "Wǒ hěn shǎo kàn diànshì.", "很少 before the verb."),
      toEn("你喜欢做什么运动？", "Nǐ xǐhuan zuò shénme yùndòng?", "What sports do you like?", "做运动: do sport.", ["What sport do you like?", "What kind of sports do you like?", "What exercise do you like to do?", "What sports do you like to do?", "What sport do you like doing?", "Which sports do you like?"]),
      say("我的爱好是爬山。", "我的爱好是爬山: my hobby is hiking.", "àihào: two falling tones.", "Tell someone your hobby."),
    ],
    { teaches: ["vocab.hobbies"] }
  ),

  lesson(
    L,
    "zh-a2-yijing",
    "Already: 已经…了",
    "已经 + verb + 了 says something has already happened -- earlier than you might think. With times and ages, too.",
    "7 min",
    [
      sec(
        "已经 … 了",
        [
          `${zh("已经", "yǐjīng")} (already) goes before the verb, and the sentence usually ends with 了: ${zh("我已经吃饭了。", "Wǒ yǐjīng chī fàn le.")} (I've already eaten.)`,
          "Its opposite is 还没 (not yet), which you know from A1: 我已经吃了 / 我还没吃.",
        ],
        [ex("他已经走了。", "Tā yǐjīng zǒu le.", "He's already left."), ex("我已经买了票。", "Wǒ yǐjīng mǎi le piào.", "I've already bought the tickets.")],
        [mc("I've already eaten:", ["我已经吃了。", "我已经吃。", "我吃已经了。", "已经我吃。"], 0, "已经 + verb + 了.")]
      ),
      sec(
        "With times, ages and states",
        [
          `已经 + time/number + 了 means \"it's already…\": ${zh("已经十二点了！", "Yǐjīng shí'èr diǎn le!")} (it's already twelve!), ${zh("她已经八十岁了。", "Tā yǐjīng bāshí suì le.")} (she's already eighty).`,
          "And with adjectives for a change that has happened: 天已经黑了 (it's already dark).",
        ],
        [ex("已经很晚了。", "Yǐjīng hěn wǎn le.", "It's already late."), ex("天已经黑了。", "Tiān yǐjīng hēi le.", "It's already dark.")],
        [mc("It's already ten o'clock:", ["已经十点了。", "十点已经。", "已经十点。", "十点了已经。"], 0, "已经 + time + 了.")]
      ),
    ],
    [
      mc("他已经回家了 means:", ["He's already gone home.", "He hasn't gone home yet.", "He's going home.", "He often goes home."], 0, "已经…了: already."),
      ms("Which mean \"already\"? (Choose all that apply.)", ["我已经做了。", "已经很晚了。", "我还没做。", "她已经二十岁了。"], [0, 1, 3], "还没 means not yet."),
      listen("已经十一点了。", "What does the speaker say?", ["It's already eleven.", "It's not eleven yet.", "It's about to be eleven.", "It's seven."], 0, "已经 + time + 了."),
      fb(C, "我___吃饭了。(I've already eaten.)", "已经", "yǐjīng", "已经 + verb + 了."),
      fb(C, "他已经走___。(He's already left.)", "了", "le", "已经 + verb + 了: already done."),
      fb(C, "你买票了吗？-- 还___买。(Not yet.)", "没", "méi", "还没: not yet."),
      toZh("It's already late.", "已经很晚了。", "Yǐjīng hěn wǎn le.", "已经 + 很晚 + 了.", ["已经晚了。", "Yǐjīng wǎn le."]),
      toZh("I've already bought the tickets.", "我已经买票了。", "Wǒ yǐjīng mǎi piào le.", "已经 + verb + object + 了.", ["我已经买了票。", "Wǒ yǐjīng mǎi le piào."]),
      toEn("她已经九十岁了。", "Tā yǐjīng jiǔshí suì le.", "She's already ninety.", "已经 + age + 了.", ["She is already ninety.", "She's already 90.", "She is already 90.", "She's already ninety years old.", "She's ninety already."]),
      say("我已经到了。", "我已经到了 (wǒ yǐjīng dào le): I've already arrived.", "yǐjīng: a low dip, then high and level.", "Text-voice a friend that you've arrived."),
    ],
    { teaches: ["grammar.yijing"] }
  ),
];
