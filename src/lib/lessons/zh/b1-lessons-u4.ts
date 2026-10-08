// Chinese B1, unit 4: linking ideas -- 不但…而且, 除了…以外, 连…都,
// 只要…就, 只有…才, and question words as "any-/every-/no-".

import { ex, fb, lesson, listen, mc, ms, mt, say, sec, toEn, toZh, wo, zh } from "./authoring";

const L = "ZH-B1" as const;
const C = "Complete (characters or pinyin).";

export const ZH_B1_LESSONS_U4 = [
  lesson(
    L,
    "zh-b1-budan-erqie",
    "Not Only … But Also: 不但…而且…",
    "不但 A，而且 B adds a second, stronger point: 他不但会说中文，而且说得很好.",
    "8 min",
    [
      sec(
        "Adding a stronger point",
        [
          `${zh("不但", "búdàn")} (not only) in the first clause, ${zh("而且", "érqiě")} (but also) in the second: ${zh("这家饭店不但便宜，而且很好吃。", "Zhè jiā fàndiàn búdàn piányi, érqiě hěn hǎochī.")}`,
          "Same subject: it comes first, before 不但. Different subjects: 不但 goes before the first subject -- 不但我喜欢，而且我妈妈也喜欢. 也 or 还 often join 而且.",
        ],
        [ex("他不但会说中文，而且说得很好。", "Tā búdàn huì shuō Zhōngwén, érqiě shuō de hěn hǎo.", "Not only can he speak Chinese, he speaks it well."), ex("不但我喜欢，而且我妈妈也喜欢。", "Búdàn wǒ xǐhuan, érqiě wǒ māma yě xǐhuan.", "Not only do I like it -- my mom does too.")],
        [mc("Not only cheap but also good:", ["不但便宜，而且很好。", "而且便宜，不但很好。", "不但便宜，所以很好。", "虽然便宜，而且很好。"], 0, "不但…而且.")]
      ),
    ],
    [
      mc("而且 adds:", ["a further, stronger point", "a contrast", "a reason", "a condition"], 0, "而且: what's more."),
      ms("Which are correct? (Choose all that apply.)", ["她不但聪明，而且很努力。", "不但他去，而且我也去。", "他不但会唱歌，而且会跳舞。", "不但很贵，但是很好。"], [0, 1, 2], "不但 pairs with 而且, not 但是."),
      listen("这家饭店不但便宜，而且很好吃。", "What's the restaurant like?", ["Cheap and tasty", "Cheap but not tasty", "Expensive and tasty", "Expensive but not tasty"], 0, "不但便宜，而且好吃."),
      fb(C, "她___会说英文，而且会说法文。(She speaks not only English but also French.)", "不但", "búdàn", "不但 + first point.", { altAnswers: ["不仅", "bùjǐn"] }),
      fb(C, "这个房间不但大，___很干净。(This room is not only big but also clean.)", "而且", "érqiě", "而且 + second point."),
      fb(C, "不但我喜欢，而且我朋友___喜欢。(Not only I like it -- my friend does too.)", "也", "yě", "而且 … 也."),
      toZh("He's not only smart but also hard-working.", "他不但聪明，而且很努力。", "Tā búdàn cōngming, érqiě hěn nǔlì.", "不但…而且.", ["他不仅聪明，而且很努力。", "Tā bùjǐn cōngming, érqiě hěn nǔlì."]),
      toEn("中文不但有意思，而且很有用。", "Zhōngwén búdàn yǒu yìsi, érqiě hěn yǒuyòng.", "Chinese is not only interesting but also very useful.", "不但…而且.", ["Chinese isn't only interesting, it's also useful.", "Chinese is interesting and also very useful.", "Not only is Chinese interesting, it's also very useful.", "Chinese is not only interesting but also useful."]),
      wo(["他", "不但", "会", "唱歌", "而且", "会", "跳舞"], "He can not only sing but also dance.", "Same subject first, then 不但…而且."),
      say("这家饭店不但便宜，而且很好吃。", "这家饭店不但便宜，而且很好吃: this restaurant is cheap and delicious too.", "búdàn: 不 rises before dàn.", "Recommend a restaurant enthusiastically."),
    ],
    { teaches: ["grammar.budan-erqie"] }
  ),

  lesson(
    L,
    "zh-b1-chule-yiwai",
    "Besides and Except: 除了…以外",
    "除了 A (以外)，还/也 B means \"besides A, also B\"; 除了 A (以外)，都 B means \"everyone except A.\" The adverb decides.",
    "8 min",
    [
      sec(
        "Besides: 还/也",
        [
          `${zh("除了…以外", "chúle … yǐwài")} + 还 or 也: in addition. ${zh("除了中文以外，我还会说日文。", "Chúle Zhōngwén yǐwài, wǒ hái huì shuō Rìwén.")} (Besides Chinese, I also speak Japanese.) 以外 is often dropped.`,
        ],
        [ex("除了咖啡，我还喜欢喝茶。", "Chúle kāfēi, wǒ hái xǐhuan hē chá.", "Besides coffee, I also like tea.")],
        [mc("Besides Chinese, I also study French:", ["除了中文，我还学法文。", "除了中文，我都学法文。", "除了中文，我不学法文。", "除了我中文，还学法文。"], 0, "除了 … 还: besides.")]
      ),
      sec(
        "Except: 都",
        [
          `With ${zh("都", "dōu")} it excludes: ${zh("除了他以外，我们都去了。", "Chúle tā yǐwài, wǒmen dōu qù le.")} (Everyone went except him.)`,
          "So the same opening means opposite things depending on 还/也 (adding) or 都 (excluding).",
        ],
        [ex("除了星期天，我每天都上班。", "Chúle xīngqītiān, wǒ měitiān dōu shàngbān.", "I work every day except Sunday.")],
        [mc("除了他，我们都去了 means:", ["We all went except him.", "Besides him, we also went.", "Only he went.", "Nobody went."], 0, "除了 … 都: except.")]
      ),
    ],
    [
      mc("除了星期天，我每天都上班 -- does the speaker work on Sunday?", ["No", "Yes", "Sometimes", "Only on Sunday"], 0, "除了 … 都: except Sunday."),
      ms("Which mean \"besides … also\"? (Choose all that apply.)", ["除了茶，我还喝咖啡。", "除了北京，我也去过上海。", "除了他，大家都来了。", "除了英文以外，她还会说中文。"], [0, 1, 3], "还/也: adding."),
      listen("除了他以外，我们都去了。", "Who didn't go?", ["Him", "Us", "Everyone", "Nobody"], 0, "除了 … 都: except him."),
      fb(C, "___中文以外，我还会说日文。(Besides Chinese, I speak Japanese.)", "除了", "chúle", "除了 … 以外."),
      fb(C, "除了咖啡，我___喜欢喝茶。(Besides coffee, I also like tea.)", "还", "hái", "Adding: 还.", { altAnswers: ["也", "yě"] }),
      fb(C, "除了星期天，我每天___上班。(I work every day except Sunday.)", "都", "dōu", "Excluding: 都."),
      toZh("Everyone came except him.", "除了他，大家都来了。", "Chúle tā, dàjiā dōu lái le.", "除了 … 都.", ["除了他以外，大家都来了。", "Chúle tā yǐwài, dàjiā dōu lái le.", "除了他，我们都来了。", "Chúle tā, wǒmen dōu lái le."]),
      toZh("Besides Beijing, I've also been to Shanghai.", "除了北京，我还去过上海。", "Chúle Běijīng, wǒ hái qù guo Shànghǎi.", "除了 … 还.", ["除了北京以外，我还去过上海。", "Chúle Běijīng yǐwài, wǒ hái qù guo Shànghǎi.", "除了北京，我也去过上海。", "Chúle Běijīng, wǒ yě qù guo Shànghǎi."]),
      toEn("除了猫以外，她还有一只狗。", "Chúle māo yǐwài, tā hái yǒu yì zhī gǒu.", "Besides a cat, she also has a dog.", "除了 … 还.", ["As well as a cat, she has a dog.", "Apart from a cat, she also has a dog.", "Besides the cat, she also has a dog.", "In addition to a cat, she has a dog."]),
      say("除了中文，我还会说法文。", "除了中文，我还会说法文: besides Chinese, I also speak French.", "chúle: rising, then light.", "Say what languages you speak."),
    ],
    { teaches: ["grammar.chule-yiwai"] }
  ),

  lesson(
    L,
    "zh-b1-lian-dou",
    "Even: 连…都/也",
    "连 A 都/也 + verb picks out a surprising extreme: 他连饭都没吃 (he didn't even eat). Often negative.",
    "8 min",
    [
      sec(
        "The pattern",
        [
          `${zh("连", "lián")} + the surprising thing + ${zh("都", "dōu")} or ${zh("也", "yě")} + verb: ${zh("他忙得连饭都没吃。", "Tā máng de lián fàn dōu méi chī.")} (He was so busy he didn't even eat.)`,
          "The thing after 连 can be the object (moved forward) or the subject: 连小孩子都知道 (even children know).",
        ],
        [ex("连小孩子都知道。", "Lián xiǎo háizi dōu zhīdào.", "Even children know that."), ex("我连他的名字也不知道。", "Wǒ lián tā de míngzi yě bù zhīdào.", "I don't even know his name.")],
        [mc("I don't even know his name:", ["我连他的名字都不知道。", "我都连他的名字不知道。", "连我他的名字不知道。", "我不知道连他的名字都。"], 0, "连 + thing + 都 + verb.")]
      ),
      sec(
        "Even one",
        [
          `With 一 + measure word + negative: not even one. ${zh("我连一块钱都没有。", "Wǒ lián yí kuài qián dōu méiyǒu.")} (I don't have even one kuai.)`,
        ],
        [ex("他连一个字都没写。", "Tā lián yí ge zì dōu méi xiě.", "He didn't write a single character.")],
        [mc("我连一块钱都没有 means:", ["I don't have a single kuai.", "I have one kuai.", "Even one kuai is enough.", "I lost one kuai."], 0, "连 + 一 + measure + 都 + negative: not even one.")]
      ),
    ],
    [
      mc("连小孩子都知道 means:", ["Even children know.", "Only children know.", "Children don't know.", "Children and adults know."], 0, "连…都: even."),
      ms("Which are correct? (Choose all that apply.)", ["他连饭都没吃。", "我连一个人都不认识。", "他都连饭没吃。", "连老师也不知道。"], [0, 1, 3], "连 + thing + 都/也 + verb."),
      listen("我连一块钱都没有。", "How much money does the speaker have?", ["None at all", "One kuai", "A little", "A lot"], 0, "Not even one kuai."),
      fb(C, "他忙得___饭都没吃。(He was so busy he didn't even eat.)", "连", "lián", "连 + thing + 都."),
      fb(C, "连小孩子___知道。(Even children know.)", "都", "dōu", "连 … 都.", { altAnswers: ["也", "yě"] }),
      fb(C, "我连一个字都没___懂。(I didn't understand a single word.)", "看", "kàn", "看懂: understand (reading).", { altAnswers: ["听", "tīng"] }),
      toZh("I don't even know his name.", "我连他的名字都不知道。", "Wǒ lián tā de míngzi dōu bù zhīdào.", "连 … 都 + 不.", ["我连他的名字也不知道。", "Wǒ lián tā de míngzi yě bù zhīdào.", "他的名字我都不知道。", "Tā de míngzi wǒ dōu bù zhīdào."]),
      toZh("Even the teacher doesn't know.", "连老师都不知道。", "Lián lǎoshī dōu bù zhīdào.", "连 + subject + 都.", ["连老师也不知道。", "Lián lǎoshī yě bù zhīdào."]),
      toEn("他连一句中文都不会说。", "Tā lián yí jù Zhōngwén dōu bú huì shuō.", "He can't speak a single sentence of Chinese.", "连 + 一 + 都 + negative.", ["He can't say even one sentence in Chinese.", "He can't speak a word of Chinese.", "He can't even say one sentence in Chinese.", "He doesn't know a single sentence of Chinese."]),
      say("我忙得连饭都没吃。", "我忙得连饭都没吃: I was so busy I didn't even eat.", "lián fàn dōu: rising, falling, high.", "Complain about a busy day."),
    ],
    { teaches: ["grammar.lian-dou"] }
  ),

  lesson(
    L,
    "zh-b1-zhiyao-jiu",
    "As Long As: 只要…就…",
    "只要 A，就 B: A is enough to get B. 只要你努力，就能学好.",
    "7 min",
    [
      sec(
        "A sufficient condition",
        [
          `${zh("只要", "zhǐyào")} (as long as) sets a condition that's enough on its own; ${zh("就", "jiù")} brings the result: ${zh("只要你每天练习，就能学好。", "Zhǐyào nǐ měitiān liànxí, jiù néng xué hǎo.")} (As long as you practise every day, you'll learn it well.)`,
          "It's more encouraging than 如果: the condition is small, the result is sure.",
        ],
        [ex("只要有时间，我就去看你。", "Zhǐyào yǒu shíjiān, wǒ jiù qù kàn nǐ.", "As long as I have time, I'll come and see you."), ex("只要不下雨，我们就去爬山。", "Zhǐyào bú xià yǔ, wǒmen jiù qù pá shān.", "As long as it doesn't rain, we'll go hiking.")],
        [mc("As long as you try, you can do it:", ["只要你努力，就能做到。", "只有你努力，才能做到。", "因为你努力，所以能做到。", "虽然你努力，但是能做到。"], 0, "只要 … 就.")]
      ),
    ],
    [
      mc("只要 means:", ["as long as", "only if", "although", "because"], 0, "只要: a condition that's enough."),
      ms("Which are correct? (Choose all that apply.)", ["只要你喜欢，就买吧。", "只要不下雨，我们就去。", "只要你来，所以我高兴。", "只要有空，我就去游泳。"], [0, 1, 3], "只要 pairs with 就."),
      listen("只要不下雨，我们就去爬山。", "When will they go hiking?", ["As long as it doesn't rain", "Only if it rains", "Tomorrow, whatever happens", "Never"], 0, "只要不下雨."),
      fb(C, "___你喜欢，就买吧。(As long as you like it, buy it.)", "只要", "zhǐyào", "只要 + condition."),
      fb(C, "只要有时间，我___去看你。(As long as I have time, I'll come and see you.)", "就", "jiù", "就 + result."),
      fb(C, "只要每天练习，就能学___。(Practise every day and you'll learn it well.)", "好", "hǎo", "学好: learn well."),
      toZh("As long as you're happy.", "只要你高兴就好。", "Zhǐyào nǐ gāoxìng jiù hǎo.", "只要 … 就好.", ["只要你开心就好。", "Zhǐyào nǐ kāixīn jiù hǎo."]),
      toZh("As long as it doesn't rain, we'll go.", "只要不下雨，我们就去。", "Zhǐyào bú xià yǔ, wǒmen jiù qù.", "只要 … 就."),
      toEn("只要你努力，就能学好中文。", "Zhǐyào nǐ nǔlì, jiù néng xué hǎo Zhōngwén.", "As long as you work hard, you can learn Chinese well.", "只要 … 就.", ["If you work hard, you can learn Chinese well.", "As long as you try hard, you'll learn Chinese well.", "As long as you put in the effort, you can master Chinese.", "As long as you work hard, you'll learn Chinese well."]),
      say("只要你喜欢就好。", "只要你喜欢就好: as long as you like it, that's what matters.", "zhǐyào: a dip, then a fall.", "Reassure a friend about a present."),
    ],
    { teaches: ["grammar.zhiyao-jiu"] }
  ),

  lesson(
    L,
    "zh-b1-zhiyou-cai",
    "Only If: 只有…才…",
    "只有 A，才 B: B happens only with A. Compare 只要…就 (A is enough) -- 只有…才 is stricter (A is required).",
    "8 min",
    [
      sec(
        "A necessary condition",
        [
          `${zh("只有", "zhǐyǒu")} (only if) + the one condition, ${zh("才", "cái")} (only then) + the result: ${zh("只有多说，才能说得好。", "Zhǐyǒu duō shuō, cái néng shuō de hǎo.")} (Only by speaking a lot can you speak well.)`,
          "Compare: 只要努力，就能学好 (try and you'll succeed -- encouraging); 只有努力，才能学好 (you won't succeed without trying -- strict).",
        ],
        [ex("只有周末，我才有时间。", "Zhǐyǒu zhōumò, wǒ cái yǒu shíjiān.", "I only have time at the weekend."), ex("只有你去，他才会去。", "Zhǐyǒu nǐ qù, tā cái huì qù.", "He'll only go if you go.")],
        [mc("He'll only go if you go:", ["只有你去，他才会去。", "只要你去，他就会去。", "只有你去，他就会去。", "只要你去，他才会去。"], 0, "只有 … 才.")]
      ),
    ],
    [
      mt("Match.", [["只要…就", "as long as (enough)"], ["只有…才", "only if (required)"], ["如果…就", "if"]], "Three condition patterns."),
      mc("只有周末我才有时间 means:", ["I only have time at weekends.", "I have time every weekend and weekday.", "At the weekend I have no time.", "I want time at the weekend."], 0, "只有 … 才: only."),
      listen("只有你去，他才会去。", "When will he go?", ["Only if you go", "As long as you go", "Whether or not you go", "Never"], 0, "只有 … 才."),
      fb(C, "___多说，才能说得好。(Only by speaking a lot can you speak well.)", "只有", "zhǐyǒu", "只有 + the required condition."),
      fb(C, "只有周末，我___有时间。(I only have time at weekends.)", "才", "cái", "才 + result."),
      fb(C, "只要努力，___能学好。(Try hard and you'll learn it well.)", "就", "jiù", "只要 … 就."),
      toZh("Only by practising every day can you learn well.", "只有每天练习，才能学好。", "Zhǐyǒu měitiān liànxí, cái néng xué hǎo.", "只有 … 才.", ["只有每天练习才能学好。", "Zhǐyǒu měitiān liànxí cái néng xué hǎo."]),
      toZh("He'll only come if you invite him.", "只有你请他，他才会来。", "Zhǐyǒu nǐ qǐng tā, tā cái huì lái.", "只有 … 才.", ["只有你请他，他才来。", "Zhǐyǒu nǐ qǐng tā, tā cái lái.", "只有你邀请他，他才会来。", "Zhǐyǒu nǐ yāoqǐng tā, tā cái huì lái."]),
      toEn("只有晚上，他才在家。", "Zhǐyǒu wǎnshang, tā cái zài jiā.", "He's only home in the evenings.", "只有 … 才: only.", ["He is only home in the evening.", "He's home only in the evening.", "Only in the evening is he at home.", "He's only at home in the evenings."]),
      say("只有多说，才能说得好。", "只有多说，才能说得好: only by speaking a lot can you speak well.", "cái néng: two rising tones.", "Give a friend advice on learning Chinese."),
    ],
    { teaches: ["grammar.zhiyou-cai"] }
  ),

  lesson(
    L,
    "zh-b1-indefinite",
    "Anything, Anyone, Anywhere: 什么都, 谁都, 哪儿都",
    "A question word + 都/也 means every-/any-/no-: 什么都吃 (eats anything), 谁都知道 (everyone knows), 哪儿都不想去 (doesn't want to go anywhere).",
    "8 min",
    [
      sec(
        "Question word + 都/也",
        [
          `Put 都 (or 也) after a question word and it becomes \"every\" or \"any\": ${zh("他什么都吃。", "Tā shénme dōu chī.")} (He eats anything.) ${zh("谁都知道。", "Shéi dōu zhīdào.")} (Everyone knows.)`,
          `With a negative it becomes \"no-, not any\": ${zh("我什么都不想吃。", "Wǒ shénme dōu bù xiǎng chī.")} (I don't want to eat anything.) ${zh("他哪儿也没去。", "Tā nǎr yě méi qù.")} (He didn't go anywhere.)`,
        ],
        [ex("我什么都不想吃。", "Wǒ shénme dōu bù xiǎng chī.", "I don't want to eat anything."), ex("周末我哪儿也没去。", "Zhōumò wǒ nǎr yě méi qù.", "I didn't go anywhere at the weekend.")],
        [mc("He eats anything:", ["他什么都吃。", "他吃什么都。", "他都什么吃。", "什么他都吃吗？"], 0, "Question word + 都 + verb.")]
      ),
      sec(
        "怎么都 and the object first",
        [
          "The question word sits before 都, so an object moves forward: 他什么都知道 (he knows everything). 怎么也 + negative: no matter how -- 我怎么也想不起来 (I just can't remember, however I try).",
        ],
        [ex("我怎么也想不起来。", "Wǒ zěnme yě xiǎng bu qǐlai.", "I just can't remember.")],
        [mc("谁都不认识他 means:", ["Nobody knows him.", "Everybody knows him.", "Who knows him?", "He knows nobody."], 0, "谁都 + negative: nobody.")]
      ),
    ],
    [
      mt("Match.", [["什么都吃", "eats anything"], ["谁都知道", "everyone knows"], ["哪儿也没去", "didn't go anywhere"], ["什么都不要", "doesn't want anything"]], "Question word + 都/也."),
      ms("Which mean \"nothing / nobody / nowhere\"? (Choose all that apply.)", ["我什么都不要。", "谁也没来。", "他什么都吃。", "我哪儿都不去。"], [0, 1, 3], "With a negative: no-."),
      listen("周末我哪儿也没去。", "What did the speaker do at the weekend?", ["Didn't go anywhere", "Went everywhere", "Went to Beijing", "Went out with friends"], 0, "哪儿也没去."),
      fb(C, "他什么___吃。(He eats anything.)", "都", "dōu", "什么 + 都.", { altAnswers: ["也", "yě"] }),
      fb(C, "___都知道这件事。(Everyone knows about this.)", "谁", "shéi", "谁 + 都: everyone.", { altAnswers: ["shuí"] }),
      fb(C, "我怎么___想不起来。(I just can't remember.)", "也", "yě", "怎么 + 也 + negative.", { altAnswers: ["都", "dōu"] }),
      toZh("I don't want to eat anything.", "我什么都不想吃。", "Wǒ shénme dōu bù xiǎng chī.", "什么 + 都 + 不.", ["我什么也不想吃。", "Wǒ shénme yě bù xiǎng chī."]),
      toZh("Nobody came.", "谁都没来。", "Shéi dōu méi lái.", "谁 + 都 + 没.", ["谁也没来。", "Shéi yě méi lái.", "Shuí dōu méi lái.", "Shuí yě méi lái."]),
      toEn("他什么都知道。", "Tā shénme dōu zhīdào.", "He knows everything.", "什么都: everything.", ["He knows it all.", "He knows everything", "He knows anything and everything."]),
      say("我什么都吃。", "我什么都吃: I'll eat anything.", "shénme dōu: rising, light, high.", "Tell a host you're not a fussy eater."),
    ],
    { teaches: ["grammar.indefinite-question-words"] }
  ),
];
