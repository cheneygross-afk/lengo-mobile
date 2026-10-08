// A2 unit 1 practice lessons (过, 在…呢, 着, 一边…一边, hobbies, 已经),
// drafted from their specs in specs.ts.

import { ex, fb, layer, listen, mc, ms, mt, say, sec, toEn, toZh, wo, zh } from "./authoring";
import { ZH_A2_SPEC as S } from "./specs";

const C = "Complete (characters or pinyin).";

export const ZH_A2_LAYERS_U1 = [
  layer(
    S,
    "zh-a2d-guo",
    "Pattern Practice: Have You Ever…?",
    "Verb + 过 for experiences, 没 + verb + 过 for never, and 次 for how many times -- drilled with everyday verbs.",
    "6 min",
    [
      sec(
        "Three frames",
        [
          "Ever: verb + 过 + object -- 我吃过饺子. Never: 没 + verb + 过 -- 我没吃过. How many times: verb + 过 + number + 次 -- 我去过两次.",
          "Ask with 吗 or with 没有 at the end: 你去过北京吗？ / 你去过北京没有？",
        ],
        [ex("我看过这本书。", "Wǒ kàn guo zhè běn shū.", "I've read this book."), ex("我没坐过飞机。", "Wǒ méi zuò guo fēijī.", "I've never been on a plane.")],
        [mc("I've never been on a plane:", ["我没坐过飞机。", "我不坐过飞机。", "我没坐飞机过。", "我坐过没飞机。"], 0, "没 + verb + 过.")]
      ),
    ],
    [
      listen("我去过三次北京。", "How many times has the speaker been to Beijing?", ["Three times", "Never", "Once", "Twice"], 0, "三次: three times."),
      mc("你喝过中国茶吗？ asks:", ["Have you ever had Chinese tea?", "Are you drinking Chinese tea?", "Do you want Chinese tea?", "Did you drink tea yesterday?"], 0, "过 + 吗: have you ever."),
      fb(C, "我看___这个电影。(I've seen this film.)", "过", "guo", "Verb + 过: experience."),
      fb(C, "她没学___日文。(She's never studied Japanese.)", "过", "guo", "没 + verb + 过."),
      fb(C, "我去过两___上海。(I've been to Shanghai twice.)", "次", "cì", "Number + 次: times."),
      fb(C, "你吃过饺子___？(Have you ever eaten dumplings?)", "吗", "ma", "过 + 吗.", { altAnswers: ["没有", "méiyǒu"] }),
      toZh("I've been to China.", "我去过中国。", "Wǒ qù guo Zhōngguó.", "去 + 过."),
      toZh("I've never had Peking duck.", "我没吃过北京烤鸭。", "Wǒ méi chī guo Běijīng kǎoyā.", "没 + 吃 + 过."),
      toZh("Have you ever been on a plane?", "你坐过飞机吗？", "Nǐ zuò guo fēijī ma?", "坐 + 过 + 吗.", ["你坐过飞机没有？", "Nǐ zuò guo fēijī méiyǒu?"]),
      say("我没去过日本。", "我没去过日本 (wǒ méi qù guo Rìběn): I've never been to Japan.", "guo is light.", "Say somewhere you've never been."),
    ]
  ),

  layer(
    S,
    "zh-a2d-zai-ne",
    "Pattern Practice: What Are You Doing?",
    "在 + verb, 正在 + verb and verb + 呢: say what's happening right now, and ask what someone's doing.",
    "6 min",
    [
      sec(
        "Right now",
        [
          "在 + verb (+ 呢): 我在做饭(呢). 正在 for \"right at this moment.\" 呢 alone after the verb phrase also works: 我做饭呢.",
          "Question: 你在做什么？ Negative: 没(在) + verb: 我没在看电视.",
        ],
        [ex("他在洗澡呢。", "Tā zài xǐzǎo ne.", "He's in the shower."), ex("我正在开车。", "Wǒ zhèngzài kāi chē.", "I'm driving right now.")],
        [mc("She's reading (right now):", ["她在看书。", "她看书了。", "她看过书。", "她要看书。"], 0, "在 + verb: in progress.")]
      ),
    ],
    [
      listen("妈妈在做饭呢。", "What is Mom doing?", ["Cooking", "Eating", "Shopping", "Sleeping"], 0, "做饭: cook."),
      mc("你在做什么？ -- the best answer:", ["我在写作业。", "我写过作业。", "我写作业了吗。", "我要写作业过。"], 0, "在 + verb for what's going on now."),
      fb(C, "我___吃饭，等一下。(I'm eating -- hang on.)", "在", "zài", "在 + verb.", { altAnswers: ["正在", "zhèngzài"] }),
      fb(C, "他睡觉___。(He's asleep.)", "呢", "ne", "呢: ongoing."),
      fb(C, "我没在___电视。(I'm not watching TV.)", "看", "kàn", "没在 + verb."),
      fb(C, "你在做___？(What are you doing?)", "什么", "shénme", "在 + 做什么."),
      toZh("I'm cooking.", "我在做饭。", "Wǒ zài zuò fàn.", "在 + 做饭.", ["我正在做饭。", "Wǒ zhèngzài zuò fàn.", "我在做饭呢。", "Wǒ zài zuò fàn ne.", "我做饭呢。", "Wǒ zuò fàn ne."]),
      toZh("They're watching TV.", "他们在看电视。", "Tāmen zài kàn diànshì.", "在 + 看电视.", ["他们正在看电视。", "Tāmen zhèngzài kàn diànshì.", "他们在看电视呢。", "Tāmen zài kàn diànshì ne."]),
      toZh("What is he doing?", "他在做什么？", "Tā zài zuò shénme?", "在 + 做什么.", ["他在干什么？", "Tā zài gàn shénme?"]),
      say("我在学中文呢。", "我在学中文呢: I'm studying Chinese (right now).", "ne at the end is light.", "Tell a caller what you're doing."),
    ]
  ),

  layer(
    S,
    "zh-a2r-zai-zhe",
    "Contrast: 在 (Doing) or 着 (Staying)?",
    "在 + verb is an action in motion; verb + 着 is the state it leaves behind. Opening the door vs. the door standing open.",
    "7 min",
    [
      sec(
        "Action vs. state",
        [
          `${zh("他在开门。", "Tā zài kāi mén.")} He's opening the door -- something is happening. ${zh("门开着。", "Mén kāi zhe.")} The door is open -- a state that stays.`,
          `${zh("她在穿衣服。", "Tā zài chuān yīfu.")} She's getting dressed. ${zh("她穿着红衣服。", "Tā chuān zhe hóng yīfu.")} She's wearing red.`,
          "Ask yourself: could you take a photo of it with nothing moving? Then it's probably 着.",
        ],
        [ex("他在坐下。", "Tā zài zuò xia.", "He's sitting down."), ex("他坐着。", "Tā zuò zhe.", "He's sitting (seated).")],
        [mc("The light is on (a state):", ["灯开着。", "灯在开。", "灯开了着。", "在灯开。"], 0, "A state: 着.")]
      ),
    ],
    [
      mt("Match each sentence.", [["他在开门", "he's opening the door"], ["门开着", "the door is open"], ["她在穿衣服", "she's getting dressed"], ["她穿着裙子", "she's wearing a skirt"]], "Action with 在, state with 着."),
      ms("Which describe a lasting state? (Choose all that apply.)", ["窗户开着。", "他站着。", "他在跑步。", "墙上挂着一张画。"], [0, 1, 3], "Running is an action: 在跑步."),
      mc("他笑着说 describes:", ["how he spoke (smiling)", "that he's laughing now", "that he stopped laughing", "that he will laugh"], 0, "Verb₁ + 着 + verb₂: manner."),
      fb(C, "灯开___。(The light is on.)", "着", "zhe", "A state that stays: 着."),
      fb(C, "他___写信。(He's writing a letter.)", "在", "zài", "An action in progress: 在."),
      fb(C, "她穿___一条白裙子。(She's wearing a white skirt.)", "着", "zhe", "穿着: wearing."),
      toZh("The window is open.", "窗户开着。", "Chuānghu kāi zhe.", "开 + 着."),
      toZh("He's opening the window.", "他在开窗户。", "Tā zài kāi chuānghu.", "在 + 开窗户.", ["他正在开窗户。", "Tā zhèngzài kāi chuānghu."]),
      toEn("桌子上放着一杯咖啡。", "Zhuōzi shang fàng zhe yì bēi kāfēi.", "There's a cup of coffee on the table.", "Place + verb + 着 + thing.", ["A cup of coffee is on the table.", "There is a cup of coffee on the table.", "There's a coffee on the table.", "On the table there's a cup of coffee."]),
      say("他坐着看书。", "他坐着看书: he's sitting reading.", "zhe is light.", "Describe someone reading in a chair."),
    ]
  ),

  layer(
    S,
    "zh-a2d-yibian",
    "Substitution: 一边…一边…",
    "Swap pairs of activities through 一边 A 一边 B until the pattern comes out on its own.",
    "6 min",
    [
      sec(
        "The frame",
        [
          "Subject + 一边 + action + 一边 + action. Both halves need a verb; the subject comes once.",
          "Activities: 吃饭, 看电视, 听音乐, 做作业, 走路, 说话, 唱歌, 开车, 喝咖啡, 看书.",
        ],
        [ex("他一边走路一边看手机。", "Tā yìbiān zǒulù yìbiān kàn shǒujī.", "He looks at his phone as he walks.")],
        [mc("Where does the subject go?", ["Before the first 一边", "Before each 一边", "At the end", "Between the halves"], 0, "Once, at the front.")]
      ),
    ],
    [
      listen("她一边唱歌一边做饭。", "What two things is she doing?", ["Singing and cooking", "Singing and dancing", "Cooking and eating", "Reading and cooking"], 0, "唱歌 + 做饭."),
      mc("他一边看电视一边吃饭 means:", ["He eats while watching TV.", "He watches TV, then eats.", "He doesn't eat in front of the TV.", "He likes TV and food."], 0, "Two actions at once."),
      fb(C, "我一边听音乐一边___作业。(I do homework while listening to music.)", "做", "zuò", "做作业: do homework."),
      fb(C, "他们一边走一边___。(They talk as they walk.)", "说话", "shuōhuà", "说话: talk."),
      fb(C, "她一边喝咖啡一边看___。(She reads while drinking coffee.)", "书", "shū", "看书: read."),
      fb(C, "我们一边吃饭一边___天。(We chat while eating.)", "聊", "liáo", "聊天: chat."),
      toZh("I listen to music while I run.", "我一边跑步一边听音乐。", "Wǒ yìbiān pǎobù yìbiān tīng yīnyuè.", "一边 A 一边 B.", ["我一边听音乐一边跑步。", "Wǒ yìbiān tīng yīnyuè yìbiān pǎobù."]),
      toZh("He drives while singing.", "他一边开车一边唱歌。", "Tā yìbiān kāi chē yìbiān chàng gē.", "一边 A 一边 B.", ["他一边唱歌一边开车。", "Tā yìbiān chàng gē yìbiān kāi chē."]),
      wo(["她", "一边", "做饭", "一边", "听", "音乐"], "She listens to music while she cooks.", "Subject + 一边 A 一边 B."),
      say("我一边喝茶一边看书。", "我一边喝茶一边看书: I read while drinking tea.", "Two even halves.", "Say what you do while you drink tea."),
    ]
  ),

  layer(
    S,
    "zh-a2r-hobbies",
    "Mission: Find a Weekend Partner",
    "Your mission: ask a new friend about their hobbies, find something you both like, and say how often you do it.",
    "7 min",
    [
      sec(
        "Asking",
        [
          `${zh("你有什么爱好？", "Nǐ yǒu shénme àihào?")} ${zh("你周末常常做什么？", "Nǐ zhōumò chángcháng zuò shénme?")} ${zh("你喜欢运动吗？", "Nǐ xǐhuan yùndòng ma?")}`,
          "Answer with 我喜欢 + activity, and a frequency word before the verb: 我每个星期打两次篮球 (I play basketball twice a week).",
        ],
        [ex("我每个星期打两次篮球。", "Wǒ měi ge xīngqī dǎ liǎng cì lánqiú.", "I play basketball twice a week."), ex("我们一起去爬山吧！", "Wǒmen yìqǐ qù pá shān ba!", "Let's go hiking together!")],
        [mc("你周末常常做什么？ asks:", ["What do you usually do at weekends?", "Are you free this weekend?", "What did you do last weekend?", "Do you like weekends?"], 0, "常常: often, usually.")]
      ),
      sec(
        "Finding common ground",
        [
          "Agree with 也: 我也喜欢爬山! Then suggest with 一起 … 吧: 我们一起去吧. Use 有时候 (sometimes) and 很少 (rarely) to be honest about how often.",
        ],
        [ex("我也喜欢游泳！", "Wǒ yě xǐhuan yóuyǒng!", "I like swimming too!")],
        [mc("Let's go swimming together:", ["我们一起去游泳吧。", "我们去游泳一起吧。", "一起我们游泳去吧。", "我们吧一起去游泳。"], 0, "一起 before the verb, 吧 at the end.")]
      ),
    ],
    [
      mt("Match the hobby.", [["跑步", "running"], ["踢足球", "football"], ["看电影", "watching films"], ["爬山", "hiking"]], "Everyday hobbies."),
      listen("我每个星期跑三次步。", "How often does the speaker run?", ["Three times a week", "Every day", "Three times a month", "Rarely"], 0, "每个星期 … 三次."),
      fb(C, "你有什么___？(What are your hobbies?)", "爱好", "àihào", "爱好: hobby."),
      fb(C, "我___喜欢爬山！(I like hiking too!)", "也", "yě", "也 before the verb."),
      fb(C, "我们一起去游泳___。(Let's go swimming together.)", "吧", "ba", "吧: let's."),
      toZh("I sometimes play football.", "我有时候踢足球。", "Wǒ yǒushíhou tī zúqiú.", "有时候 before the verb."),
      toZh("What do you usually do at the weekend?", "你周末常常做什么？", "Nǐ zhōumò chángcháng zuò shénme?", "Time + frequency + verb.", ["你周末常常干什么？", "Nǐ zhōumò chángcháng gàn shénme?", "你周末做什么？", "Nǐ zhōumò zuò shénme?"]),
      toEn("我很少看电视。", "Wǒ hěn shǎo kàn diànshì.", "I rarely watch TV.", "很少: rarely.", ["I seldom watch TV.", "I hardly ever watch TV.", "I don't watch much TV.", "I rarely watch television."]),
      say("我们一起去爬山吧！", "我们一起去爬山吧: let's go hiking together!", "yìqǐ: 一 falls before qǐ.", "Suggest a weekend hike."),
    ]
  ),

  layer(
    S,
    "zh-a2r-yijing",
    "Contrast: 已经 or 还没?",
    "Already done or not yet: 已经…了 and 还没…(呢) side by side, with the questions that lead to them.",
    "6 min",
    [
      sec(
        "Two answers to one question",
        [
          `${zh("你吃饭了吗？", "Nǐ chī fàn le ma?")} -- ${zh("已经吃了。", "Yǐjīng chī le.")} (Already have.) / ${zh("还没吃呢。", "Hái méi chī ne.")} (Not yet.)`,
          "已经 takes 了; 还没 drops it. Both go before the verb.",
        ],
        [ex("他已经到了。", "Tā yǐjīng dào le.", "He's already here."), ex("他还没到。", "Tā hái méi dào.", "He's not here yet.")],
        [mc("Not yet:", ["还没。", "已经了。", "没了。", "还了。"], 0, "还没: not yet.")]
      ),
    ],
    [
      ms("Which are correct? (Choose all that apply.)", ["我已经做完了。", "我还没做完。", "我还没做完了。", "她已经走了。"], [0, 1, 3], "还没 never takes 了."),
      mc("你买票了吗？ -- \"I already have\":", ["已经买了。", "还没买。", "已经买。", "买了还没。"], 0, "已经 + verb + 了."),
      listen("电影已经开始了。", "What's the situation?", ["The film has already started.", "The film hasn't started yet.", "The film is about to start.", "There's no film."], 0, "已经 + verb + 了: already happened."),
      fb(C, "他___到了。(He's already here.)", "已经", "yǐjīng", "已经 + verb + 了."),
      fb(C, "我还___吃饭呢。(I haven't eaten yet.)", "没", "méi", "还没: not yet."),
      fb(C, "她已经回家___。(She's already gone home.)", "了", "le", "已经 + verb + 了: already."),
      toZh("Not yet.", "还没。", "Hái méi.", "还没: not yet.", ["还没呢。", "Hái méi ne."]),
      toZh("I've already finished.", "我已经做完了。", "Wǒ yǐjīng zuò wán le.", "已经 + verb + 了.", ["我已经好了。", "Wǒ yǐjīng hǎo le.", "我已经完了。", "Wǒ yǐjīng wán le."]),
      toEn("他还没起床呢。", "Tā hái méi qǐchuáng ne.", "He hasn't got up yet.", "还没 + verb (+ 呢): not yet.", ["He hasn't gotten up yet.", "He's not up yet.", "He is not up yet.", "He still hasn't got up.", "He hasn't woken up yet."]),
      say("我已经吃了。", "我已经吃了 (wǒ yǐjīng chī le): I've already eaten.", "wǒ yǐ: third + third, so wǒ rises.", "Turn down food politely: you've already eaten."),
    ],
    { previews: ["grammar.result-complements"] }
  ),
];
