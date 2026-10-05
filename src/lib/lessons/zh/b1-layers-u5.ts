// Synced from cheneygross-afk/lengo:src/lib/lessons/zh/b1-layers-u5.ts by scripts/sync-content.mjs -- edit it there, not here.
// B1 unit 5 practice lessons (feelings, telling a story in order,
// study), drafted from their specs.

import { ex, fb, layer, listen, mc, say, sec, toEn, toZh, wo, zh } from "./authoring";
import { ZH_B1_SPEC as S } from "./specs";

const C = "Complete (characters or pinyin).";

export const ZH_B1_LAYERS_U5 = [
  layer(
    S,
    "zh-b1r-feelings",
    "Dialogue: A Friend in a Panic",
    "A friend can't find their passport the night before a flight -- follow the conversation, then comfort, reassure and calm someone down yourself.",
    "7 min",
    [
      sec(
        "The night before the flight",
        [
          `A: ${zh("你怎么了？你看起来很着急。", "Nǐ zěnme le? Nǐ kàn qǐlai hěn zháojí.")} B: ${zh("我的护照找不到了，明天就要坐飞机了！", "Wǒ de hùzhào zhǎo bu dào le, míngtiān jiù yào zuò fēijī le!")}`,
          `A: ${zh("别着急，我帮你找。你放心，一定能找到。", "Bié zháojí, wǒ bāng nǐ zhǎo. Nǐ fàngxīn, yídìng néng zhǎo dào.")}`,
        ],
        [ex("我有点儿担心他。", "Wǒ yǒudiǎnr dānxīn tā.", "I'm a bit worried about him."), ex("听到这个消息，她很难过。", "Tīng dào zhège xiāoxi, tā hěn nánguò.", "She was very upset to hear the news.")],
        [mc("Your friend says 我很着急. They are:", ["anxious", "angry", "afraid", "relieved"], 0, "着急: anxious, in a hurry.")]
      ),
    ],
    [
      listen("别生气了，他不是故意的。", "What is the speaker saying?", ["Don't be angry -- he didn't mean it.", "Don't be sad -- it's over.", "Don't worry -- he's fine.", "Hurry -- he's waiting."], 0, "别生气: don't be angry."),
      mc("Your friend failed an exam and looks upset. Say:", ["别难过。", "别着急。", "别害怕。", "别生气。"], 0, "难过: sad, upset."),
      fb(C, "听到这个好消息，我就___了。(When I heard the good news, I stopped worrying.)", "放心", "fàngxīn", "放心: at ease."),
      fb(C, "我女儿很___狗。(My daughter is very scared of dogs.)", "害怕", "hàipà", "害怕 + thing: afraid of."),
      fb(C, "妈妈一直很___我的身体。(Mum is always worried about my health.)", "担心", "dānxīn", "担心 + thing: worried about."),
      fb(C, "已经八点了，他很___。(It's already eight -- he's in a real hurry.)", "着急", "zháojí", "着急: anxious, in a hurry."),
      toZh("Don't be angry.", "别生气。", "Bié shēngqì.", "别 + feeling.", ["不要生气。", "Bú yào shēngqì.", "别生气了。", "Bié shēngqì le."]),
      toZh("Are you angry with me?", "你对我生气了吗？", "Nǐ duì wǒ shēngqì le ma?", "对 + person + 生气.", ["你生我的气了吗？", "Nǐ shēng wǒ de qì le ma?", "你是不是生我的气了？", "Nǐ shì bu shì shēng wǒ de qì le?", "你对我生气吗？", "Nǐ duì wǒ shēngqì ma?"]),
      toEn("你放心，我一定会来。", "Nǐ fàngxīn, wǒ yídìng huì lái.", "Don't worry, I'll definitely come.", "放心: rest easy.", ["Rest assured, I'll definitely come.", "Don't worry, I'll be there for sure.", "Don't worry, I'll definitely be there.", "Relax, I'll definitely come."]),
      say("你怎么了？你看起来很难过。", "你怎么了？你看起来很难过: what's wrong? You look upset.", "nánguò: rising, then falling.", "Check on a friend who looks sad."),
    ]
  ),

  layer(
    S,
    "zh-b1r-story",
    "Mission: Tell Me About Your Day",
    "Your mission: tell a friend how your day went, step by step -- what you did first, what came next, and how it ended.",
    "7 min",
    [
      sec(
        "Your day, in order",
        [
          "Start with 先 (first), carry on with 然后 or 接着 (then, next), and finish with 最后 (finally). Add how you felt and what you thought with the words from earlier units.",
        ],
        [ex("我先去了银行，然后去买菜。", "Wǒ xiān qù le yínháng, ránhòu qù mǎi cài.", "I went to the bank first, then went to buy groceries."), ex("接着，我们去看了一个电影。", "Jiēzhe, wǒmen qù kàn le yí ge diànyǐng.", "Next, we went to see a film.")],
        [mc("Which word starts the last step?", ["最后", "先", "然后", "接着"], 0, "最后: finally.")]
      ),
    ],
    [
      listen("我们先吃了饭，然后去唱歌了。", "What did they do second?", ["Went to sing karaoke", "Had a meal", "Went home", "Went shopping"], 0, "然后: then -- the second step."),
      mc("Put these in order: 然后 / 先 / 最后", ["先 → 然后 → 最后", "然后 → 先 → 最后", "最后 → 先 → 然后", "先 → 最后 → 然后"], 0, "First, then, finally."),
      fb(C, "我们先去了长城，___去了故宫。(We went to the Great Wall first, then the Forbidden City.)", "然后", "ránhòu", "然后: then.", { altAnswers: ["接着", "jiēzhe"] }),
      fb(C, "到了以后，我___给妈妈打了个电话。(When I arrived, the first thing I did was call Mum.)", "先", "xiān", "先 + first action."),
      fb(C, "___，我们坐出租车回了酒店。(Finally, we took a taxi back to the hotel.)", "最后", "zuìhòu", "最后: the last step."),
      toZh("First wash your hands, then eat.", "先洗手，然后吃饭。", "Xiān xǐ shǒu, ránhòu chī fàn.", "先 … 然后.", ["先洗手，再吃饭。", "Xiān xǐ shǒu, zài chī fàn.", "你先洗手，然后吃饭。", "Nǐ xiān xǐ shǒu, ránhòu chī fàn."]),
      toZh("Next, we went to a museum.", "接着，我们去了博物馆。", "Jiēzhe, wǒmen qù le bówùguǎn.", "接着: next.", ["接着我们去了博物馆。", "Jiēzhe wǒmen qù le bówùguǎn.", "然后，我们去了博物馆。", "Ránhòu, wǒmen qù le bówùguǎn.", "然后我们去了博物馆。", "Ránhòu wǒmen qù le bówùguǎn."]),
      toEn("我先去了超市，然后回家做饭了。", "Wǒ xiān qù le chāoshì, ránhòu huí jiā zuò fàn le.", "I went to the supermarket first, then went home and cooked.", "先 … 然后.", ["First I went to the supermarket, then I went home and cooked.", "I went to the supermarket first and then went home to cook.", "First I went to the supermarket, then went home to cook.", "I went to the supermarket first, then I went home and made dinner."]),
      wo(["最后", "我们", "一起", "看", "了", "电影"], "Finally, we watched a film together.", "最后 + clause.", [["我们", "最后", "一起", "看", "了", "电影"]]),
      say("今天我先上课，然后去打工。", "今天我先上课，然后去打工: today I've got class first, then my part-time job.", "dǎgōng: a dip, then high.", "Tell a friend your plans for the day."),
    ]
  ),

  layer(
    S,
    "zh-b1r-study",
    "Dialogue: Two Students Compare Notes",
    "Two students talk about their majors, exams, results and plans to study abroad -- follow along, then talk about your own studies.",
    "7 min",
    [
      sec(
        "On campus",
        [
          `A: ${zh("你学什么专业？", "Nǐ xué shénme zhuānyè?")} B: ${zh("我学法律，明年毕业。你呢？", "Wǒ xué fǎlǜ, míngnián bìyè. Nǐ ne?")}`,
          `A: ${zh("我学中文，下个学期想去北京留学。", "Wǒ xué Zhōngwén, xià ge xuéqī xiǎng qù Běijīng liúxué.")} B: ${zh("你的成绩那么好，一定没问题。", "Nǐ de chéngjì nàme hǎo, yídìng méi wèntí.")}`,
        ],
        [ex("这个学期我有五门课。", "Zhège xuéqī wǒ yǒu wǔ mén kè.", "I have five classes this semester."), ex("考试考得不错。", "Kǎoshì kǎo de búcuò.", "The exam went pretty well.")],
        [mc("学期 is:", ["a semester", "a major", "a classmate", "an exam"], 0, "学期: term, semester.")]
      ),
    ],
    [
      listen("我明年大学毕业。", "When does the speaker graduate?", ["Next year", "This year", "Last year", "In two years"], 0, "明年毕业: graduates next year."),
      mc("Someone asks 你考得怎么样? They want to know:", ["how your exam went", "what you study", "when you graduate", "where you study"], 0, "考得怎么样: how did it go."),
      fb(C, "我学的___是法律。(My major is law.)", "专业", "zhuānyè", "专业: major."),
      fb(C, "这次考试的___出来了吗？(Are the results of this exam out yet?)", "成绩", "chéngjì", "成绩: results, grades."),
      fb(C, "他考___了一所很好的大学。(He got into a very good university.)", "上", "shang", "考上: get in by exam.", { altAnswers: ["shàng"] }),
      toZh("When did you graduate?", "你是什么时候毕业的？", "Nǐ shì shénme shíhou bìyè de?", "是 … 的 for a past event.", ["你什么时候毕业的？", "Nǐ shénme shíhou bìyè de?", "你是哪年毕业的？", "Nǐ shì nǎ nián bìyè de?"]),
      toZh("I want to go to Beijing to study next year.", "我明年想去北京留学。", "Wǒ míngnián xiǎng qù Běijīng liúxué.", "去 + place + 留学.", ["明年我想去北京留学。", "Míngnián wǒ xiǎng qù Běijīng liúxué.", "我明年想去北京学习。", "Wǒ míngnián xiǎng qù Běijīng xuéxí."]),
      toEn("我去年大学毕业以后就开始工作了。", "Wǒ qùnián dàxué bìyè yǐhòu jiù kāishǐ gōngzuò le.", "After I graduated from university last year, I started working.", "毕业以后: after graduating.", ["I started working after graduating from university last year.", "After graduating from university last year, I started working.", "I graduated from university last year and then started working.", "After I graduated from college last year, I started work."]),
      wo(["你", "这次", "考", "得", "怎么样"], "How did your exam go this time?", "考得 + 怎么样."),
      say("我学中文，明年想去中国留学。", "我学中文，明年想去中国留学: I study Chinese, and next year I want to study in China.", "liúxué: two rising tones.", "Tell a classmate your plans."),
    ]
  ),
];
