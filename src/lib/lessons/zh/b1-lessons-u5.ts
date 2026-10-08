// Chinese B1, unit 5: life topics -- feelings, telling things in order,
// school and study -- and the B1 review.

import { ex, fb, lesson, listen, mc, ms, mt, say, sec, toEn, toZh, wo, zh } from "./authoring";

const L = "ZH-B1" as const;
const C = "Complete (characters or pinyin).";

export const ZH_B1_LESSONS_U5 = [
  lesson(
    L,
    "zh-b1-feelings",
    "How You Feel: Worried, Angry, Relieved",
    "Name your feelings and ask about someone else's: 担心, 生气, 害怕, 着急, 难过, 放心 -- and what to say back.",
    "8 min",
    [
      sec(
        "Feeling words",
        [
          `${zh("担心", "dānxīn")} (worried), ${zh("生气", "shēngqì")} (angry), ${zh("害怕", "hàipà")} (afraid), ${zh("着急", "zháojí")} (anxious, in a hurry), ${zh("难过", "nánguò")} (sad, upset), ${zh("放心", "fàngxīn")} (at ease, relieved).`,
          `What they're about goes after or with 对/为: ${zh("别担心！", "Bié dānxīn!")} (Don't worry!) ${zh("我很担心我妈妈。", "Wǒ hěn dānxīn wǒ māma.")} ${zh("他对我很生气。", "Tā duì wǒ hěn shēngqì.")}`,
        ],
        [ex("别着急，慢慢来。", "Bié zháojí, mànmàn lái.", "Don't rush -- take your time."), ex("你放心吧，没问题。", "Nǐ fàngxīn ba, méi wèntí.", "Don't worry, it's fine.")],
        [mc("Don't worry!", ["别担心！", "别生气！", "别害怕！", "别难过！"], 0, "担心: worry.")]
      ),
      sec(
        "Asking and comforting",
        [
          `${zh("你怎么了？", "Nǐ zěnme le?")} (What's wrong?) ${zh("你看起来不太高兴。", "Nǐ kàn qǐlai bú tài gāoxìng.")} (You don't look very happy.) Comfort with 别 + feeling: 别难过, 别害怕.`,
        ],
        [ex("你怎么了？", "Nǐ zěnme le?", "What's the matter?")],
        [mc("你怎么了？ asks:", ["What's the matter?", "How are you getting there?", "How did you do it?", "Where are you?"], 0, "怎么了: what's wrong.")]
      ),
    ],
    [
      mt("Match.", [["担心", "worried"], ["生气", "angry"], ["害怕", "afraid"], ["难过", "sad"]], "Feelings."),
      mc("别着急 means:", ["Don't rush / don't worry.", "Don't be angry.", "Don't be sad.", "Don't be afraid."], 0, "着急: anxious, in a hurry."),
      listen("你放心吧，没问题。", "What does the speaker mean?", ["Don't worry, it's fine.", "Be careful.", "There's a problem.", "Hurry up."], 0, "放心: be at ease."),
      fb(C, "别___，我们会帮你。(Don't be afraid -- we'll help you.)", "害怕", "hàipà", "害怕: afraid."),
      fb(C, "他对我很___。(He's angry with me.)", "生气", "shēngqì", "生气: angry."),
      fb(C, "你怎么___？(What's the matter?)", "了", "le", "怎么了: what's wrong."),
      toZh("Don't worry.", "别担心。", "Bié dānxīn.", "别 + 担心.", ["不要担心。", "Bú yào dānxīn.", "你放心吧。", "Nǐ fàngxīn ba.", "放心吧。", "Fàngxīn ba."]),
      toZh("I'm worried about my exam.", "我很担心我的考试。", "Wǒ hěn dānxīn wǒ de kǎoshì.", "担心 + thing.", ["我担心我的考试。", "Wǒ dānxīn wǒ de kǎoshì.", "我很担心考试。", "Wǒ hěn dānxīn kǎoshì."]),
      toEn("你看起来不太高兴。", "Nǐ kàn qǐlai bú tài gāoxìng.", "You don't look very happy.", "看起来 + 不太.", ["You don't seem very happy.", "You look a bit unhappy.", "You look unhappy.", "You don't look too happy."]),
      say("别着急，慢慢来。", "别着急，慢慢来: don't rush -- take your time.", "zháojí: two rising tones.", "Calm a friend who's in a hurry."),
    ],
    { teaches: ["vocab.feelings"] }
  ),

  lesson(
    L,
    "zh-b1-sequencing",
    "First, Then, Finally: 先…然后…最后",
    "Tell a story or give instructions in order: 先 (first), 然后 / 再 (then), 最后 (finally) -- plus 接着 (next).",
    "8 min",
    [
      sec(
        "The order words",
        [
          `${zh("先", "xiān")} before the first verb, ${zh("然后", "ránhòu")} (then) at the start of the next step, ${zh("最后", "zuìhòu")} (finally) for the last: ${zh("我先洗澡，然后吃早饭，最后去上班。", "Wǒ xiān xǐzǎo, ránhòu chī zǎofàn, zuìhòu qù shàngbān.")}`,
          "先 is an adverb (subject + 先 + verb); 然后 and 最后 can open a clause. 再 can replace 然后 for future steps: 先吃饭，再看电视.",
        ],
        [ex("先往前走，然后往左拐。", "Xiān wǎng qián zǒu, ránhòu wǎng zuǒ guǎi.", "First go straight, then turn left."), ex("最后，我们一起去吃饭了。", "Zuìhòu, wǒmen yìqǐ qù chī fàn le.", "Finally, we all went for a meal.")],
        [mc("First eat, then watch TV:", ["先吃饭，然后看电视。", "然后吃饭，先看电视。", "吃饭先，看电视然后。", "最后吃饭，先看电视。"], 0, "先 … 然后.")]
      ),
      sec(
        "A recipe",
        [
          `Instructions use the same words: ${zh("先把鸡蛋打好，然后放一点儿盐，最后炒两分钟。", "Xiān bǎ jīdàn dǎ hǎo, ránhòu fàng yìdiǎnr yán, zuìhòu chǎo liǎng fēnzhōng.")} (First beat the eggs, then add a little salt, and finally stir-fry for two minutes.)`,
        ],
        [ex("先把鸡蛋打好。", "Xiān bǎ jīdàn dǎ hǎo.", "First beat the eggs.")],
        [mc("最后 means:", ["finally", "first", "most", "then"], 0, "最后: finally, last.")]
      ),
    ],
    [
      mt("Match.", [["先", "first"], ["然后", "then"], ["接着", "next"], ["最后", "finally"]], "Order words."),
      ms("Which are in a natural order? (Choose all that apply.)", ["先洗手，然后吃饭。", "我先去银行，再去超市。", "然后洗手，先吃饭。", "先看书，最后睡觉。"], [0, 1, 3], "先 comes first."),
      listen("我先洗澡，然后吃早饭。", "What does the speaker do first?", ["Shower", "Eat breakfast", "Go to work", "Get dressed"], 0, "先洗澡: shower first."),
      fb(C, "我___洗澡，然后吃早饭。(First I shower, then I have breakfast.)", "先", "xiān", "先 + first step."),
      fb(C, "先往前走，___往左拐。(First go straight, then turn left.)", "然后", "ránhòu", "然后: then.", { altAnswers: ["再", "zài"] }),
      fb(C, "___，我们一起去吃饭了。(Finally, we all went for a meal.)", "最后", "zuìhòu", "最后: finally."),
      toZh("First do your homework, then play.", "先做作业，然后玩儿。", "Xiān zuò zuòyè, ránhòu wánr.", "先 … 然后.", ["先做作业，再玩儿。", "Xiān zuò zuòyè, zài wánr.", "先写作业，然后玩儿。", "Xiān xiě zuòyè, ránhòu wánr."]),
      toZh("Finally, I went home.", "最后，我回家了。", "Zuìhòu, wǒ huí jiā le.", "最后 + clause.", ["最后我回家了。", "Zuìhòu wǒ huí jiā le."]),
      wo(["我们", "先", "去", "银行", "然后", "去", "超市"], "We'll go to the bank first, then the supermarket.", "先 … 然后."),
      say("先往前走，然后往右拐。", "先往前走，然后往右拐: first go straight on, then turn right.", "xiān: high and level.", "Give simple directions."),
    ],
    { teaches: ["function.sequencing"] }
  ),

  lesson(
    L,
    "zh-b1-education",
    "School and Study: Exams, Majors, Graduating",
    "Talk about what you study, exams and results, graduating, and studying abroad.",
    "8 min",
    [
      sec(
        "Studying",
        [
          `${zh("专业", "zhuānyè")} is your major: ${zh("你学什么专业？", "Nǐ xué shénme zhuānyè?")} -- ${zh("我学经济。", "Wǒ xué jīngjì.")} (Economics.) ${zh("上大学", "shàng dàxué")} (go to university), ${zh("毕业", "bìyè")} (graduate), ${zh("留学", "liúxué")} (study abroad).`,
          `${zh("我去年大学毕业了。", "Wǒ qùnián dàxué bìyè le.")} 毕业 takes no object: say 大学毕业, not \"毕业大学.\"`,
        ],
        [ex("你学什么专业？", "Nǐ xué shénme zhuānyè?", "What's your major?"), ex("她想去中国留学。", "Tā xiǎng qù Zhōngguó liúxué.", "She wants to study in China.")],
        [mc("I graduated from university last year:", ["我去年大学毕业了。", "我去年毕业大学了。", "我毕业了去年大学。", "我大学去年了毕业。"], 0, "大学 + 毕业.")]
      ),
      sec(
        "Exams",
        [
          `${zh("考试", "kǎoshì")} (exam, take an exam), ${zh("考得怎么样？", "kǎo de zěnmeyàng?")} (how did it go?), ${zh("成绩", "chéngjì")} (results, grades), ${zh("考上", "kǎo shang")} (pass the entrance exam for).`,
        ],
        [ex("你考得怎么样？", "Nǐ kǎo de zěnmeyàng?", "How did your exam go?"), ex("他考上了北京大学。", "Tā kǎo shang le Běijīng Dàxué.", "He got into Peking University.")],
        [mc("你考得怎么样？ -- the best answer:", ["考得还不错。", "我考了。", "考试很多。", "我明天考。"], 0, "考得 + how it went.")]
      ),
    ],
    [
      mt("Match.", [["专业", "major"], ["毕业", "graduate"], ["留学", "study abroad"], ["成绩", "grades"]], "Study words."),
      mc("他考上了北京大学 means:", ["He got into Peking University.", "He graduated from Peking University.", "He visited Peking University.", "He failed the exam."], 0, "考上: get in by exam."),
      listen("我学经济。", "What does the speaker study?", ["Economics", "History", "Chinese", "Law"], 0, "经济: economics."),
      fb(C, "你学什么___？(What's your major?)", "专业", "zhuānyè", "专业: major."),
      fb(C, "她明年大学___。(She graduates from university next year.)", "毕业", "bìyè", "大学 + 毕业."),
      fb(C, "你考___怎么样？(How did your exam go?)", "得", "de", "考得 + 怎么样."),
      toZh("I want to study in China.", "我想去中国留学。", "Wǒ xiǎng qù Zhōngguó liúxué.", "去 + place + 留学.", ["我想在中国留学。", "Wǒ xiǎng zài Zhōngguó liúxué."]),
      toZh("I have an exam tomorrow.", "我明天有考试。", "Wǒ míngtiān yǒu kǎoshì.", "有 + 考试.", ["明天我有考试。", "Míngtiān wǒ yǒu kǎoshì.", "我明天考试。", "Wǒ míngtiān kǎoshì."]),
      toEn("他的成绩很好。", "Tā de chéngjì hěn hǎo.", "His grades are very good.", "成绩: grades.", ["His grades are good.", "He has very good grades.", "His results are very good.", "He got very good grades."]),
      say("我大学学的是经济。", "我大学学的是经济: I studied economics at university.", "xué de shì: rising, light, falling.", "Say what you studied."),
    ],
    { teaches: ["vocab.education"] }
  ),

  lesson(
    L,
    "zh-b1-review",
    "B1 Review: A Year Abroad",
    "Everything from B1 in one story: opinions, 是…的, potential complements, 被 and 把, linking words, feelings and study.",
    "10 min",
    [
      sec(
        "The story",
        ["Tom writes about his year studying in Shanghai. Read it with the pinyin, then answer."],
        [
          ex("我是去年九月来上海留学的。", "Wǒ shì qùnián jiǔyuè lái Shànghǎi liúxué de.", "I came to Shanghai to study last September."),
          ex("刚来的时候，我连菜单都看不懂。", "Gāng lái de shíhou, wǒ lián càidān dōu kàn bu dǒng.", "When I'd just arrived, I couldn't even read a menu."),
          ex("有一次，我的钱包被偷了，我很着急。", "Yǒu yí cì, wǒ de qiánbāo bèi tōu le, wǒ hěn zháojí.", "Once my wallet was stolen and I was really anxious."),
          ex("可是我的同学不但帮了我，而且请我吃饭。", "Kěshì wǒ de tóngxué búdàn bāng le wǒ, érqiě qǐng wǒ chī fàn.", "But my classmates not only helped me, they took me out for a meal."),
          ex("我觉得只要多说，中文就会越来越好。", "Wǒ juéde zhǐyào duō shuō, Zhōngwén jiù huì yuè lái yuè hǎo.", "I think as long as you speak a lot, your Chinese keeps getting better."),
        ],
        [
          mc("When did Tom come to Shanghai?", ["Last September", "This September", "Last year in January", "Two years ago"], 0, "是去年九月来的."),
          mc("What happened to his wallet?", ["It was stolen.", "He lost it.", "He found one.", "He bought one."], 0, "被偷了: was stolen."),
        ]
      ),
      sec(
        "What B1 added",
        [
          "Opinions and comparisons: 最, 比较, 觉得, 认为, 又…又, 对…感兴趣, 关于.",
          "Ability and timing: 看得懂/看不懂, 起来, 看看/一下, 一…就, 刚/刚才, 又/再.",
          "Things done to things: 被, 把…成/到/给. Linking: 不但…而且, 除了, 连…都, 只要…就, 只有…才, 什么都. And 是…的 for the details of the past.",
        ],
        [ex("我对中国文化越来越感兴趣了。", "Wǒ duì Zhōngguó wénhuà yuè lái yuè gǎn xìngqù le.", "I'm getting more and more interested in Chinese culture.")],
        [mc("Which word introduces \"not only\"?", ["不但", "而且", "只要", "除了"], 0, "不但 … 而且.")]
      ),
    ],
    [
      mc("刚来的时候 means:", ["when I'd just arrived", "just now", "when I left", "before I came"], 0, "刚 + verb + 的时候."),
      ms("Which sentences are correct? (Choose all that apply.)", ["我的手机被偷了。", "我是坐飞机来的。", "我连一个字都看不懂。", "我看不懂得。"], [0, 1, 2], "看不懂 needs no 得."),
      listen("只要多说，中文就会越来越好。", "What's the advice?", ["Speak a lot and you'll improve.", "Only study grammar.", "Don't speak until you're ready.", "Read more books."], 0, "只要多说: as long as you speak a lot."),
      fb(C, "我___去年九月来的。(It was last September that I came.)", "是", "shì", "是 + time + 来 + 的."),
      fb(C, "我连菜单都看不___。(I couldn't even read the menu.)", "懂", "dǒng", "看不懂: can't understand."),
      fb(C, "他不但帮了我，___请我吃饭。(He not only helped me but took me out for a meal.)", "而且", "érqiě", "不但 … 而且."),
      fb(C, "除了中文，我___学了书法。(Besides Chinese, I also studied calligraphy.)", "还", "hái", "除了 … 还."),
      toZh("I think Shanghai is the most interesting city.", "我觉得上海是最有意思的城市。", "Wǒ juéde Shànghǎi shì zuì yǒu yìsi de chéngshì.", "觉得 + 最 + adjective.", ["我认为上海是最有意思的城市。", "Wǒ rènwéi Shànghǎi shì zuì yǒu yìsi de chéngshì."]),
      toZh("My wallet was stolen.", "我的钱包被偷了。", "Wǒ de qiánbāo bèi tōu le.", "被 + 偷 + 了."),
      toEn("只有每天练习，才能说得好。", "Zhǐyǒu měitiān liànxí, cái néng shuō de hǎo.", "Only by practising every day can you speak well.", "只有 … 才.", ["You can only speak well if you practise every day.", "Only if you practise every day can you speak well.", "Only daily practice will let you speak well.", "You only speak well if you practice every day."]),
      say("我对中国文化越来越感兴趣了。", "我对中国文化越来越感兴趣了: I'm getting more and more interested in Chinese culture.", "Break it after 文化.", "Say how your interest in China has grown."),
    ],
    {
      reviews: [
        "grammar.shi-de",
        "grammar.potential-complements",
        "grammar.bei-passive",
        "grammar.budan-erqie",
        "grammar.lian-dou",
        "grammar.zhiyao-jiu",
        "grammar.zhiyou-cai",
        "grammar.chule-yiwai",
        "grammar.juede-renwei",
        "grammar.zui-bijiao",
        "grammar.gang",
        "vocab.feelings",
      ],
    }
  ),
];
