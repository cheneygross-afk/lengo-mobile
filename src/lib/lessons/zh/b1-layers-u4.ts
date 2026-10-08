// B1 unit 4 practice lessons (不但…而且, 除了, 连…都, conditions with
// 只要/只有/如果, indefinite question words), drafted from their specs.

import { ex, fb, layer, listen, mc, say, sec, toEn, toZh, wo, zh } from "./authoring";
import { ZH_B1_SPEC as S } from "./specs";

const C = "Complete (characters or pinyin).";

export const ZH_B1_LAYERS_U4 = [
  layer(
    S,
    "zh-b1d-budan",
    "Pattern Practice: Not Only… But Also",
    "不但 A，而且 B over and over: people, places, food and weather, with 而且还 and 而且也 for the second point.",
    "6 min",
    [
      sec(
        "The frame",
        [
          "不但 A，而且 B: not only A but also B. When both halves share a subject, it goes before 不但: 他不但…，而且…. 而且 often brings 还 or 也 with it: 不但…而且还….",
          `${zh("不仅", "bùjǐn")} means the same as 不但 and is common in writing.`,
        ],
        [ex("这件衣服不但好看，而且很便宜。", "Zhè jiàn yīfu búdàn hǎokàn, érqiě hěn piányi.", "This top is not only nice but cheap too."), ex("她不但会弹钢琴，而且还会画画。", "Tā búdàn huì tán gāngqín, érqiě hái huì huà huà.", "She can not only play the piano but paint as well.")],
        [mc("Not only nice but also cheap:", ["不但好看，而且很便宜。", "而且好看，不但很便宜。", "不但好看，但是很便宜。", "好看不但，而且很便宜。"], 0, "不但 opens, 而且 adds the second point.")]
      ),
    ],
    [
      listen("我的新同事不但很聪明，而且很热情。", "What is the new colleague like?", ["Smart and friendly", "Smart but cold", "Friendly but slow", "Neither"], 0, "不但聪明，而且热情."),
      mc("Both halves share the subject 他. Where does it go?", ["Before 不但", "After 不但", "After 而且", "At the end"], 0, "Shared subject: 他不但…而且…."),
      fb(C, "这个手机不但便宜，___很好用。(This phone is cheap and easy to use too.)", "而且", "érqiě", "而且 + second point."),
      fb(C, "他___会做饭，而且做得很好吃。(He can not only cook -- he cooks really well.)", "不但", "búdàn", "不但 + first point.", { altAnswers: ["不仅", "bùjǐn"] }),
      fb(C, "她不但会唱歌，而且___会跳舞。(She can sing, and she can dance too.)", "还", "hái", "而且还: and also.", { altAnswers: ["也", "yě"] }),
      fb(C, "坐地铁不但快，而且很___。(Taking the subway is fast and cheap too.)", "便宜", "piányi", "便宜: cheap."),
      toZh("This restaurant is not only clean but also cheap.", "这家饭店不但干净，而且很便宜。", "Zhè jiā fàndiàn búdàn gānjìng, érqiě hěn piányi.", "不但 + clean, 而且 + cheap.", ["这家饭店不但很干净，而且很便宜。", "Zhè jiā fàndiàn búdàn hěn gānjìng, érqiě hěn piányi.", "这家饭店不仅干净，而且很便宜。", "Zhè jiā fàndiàn bùjǐn gānjìng, érqiě hěn piányi."]),
      toZh("She speaks not only Chinese but also Japanese.", "她不但会说中文，而且会说日文。", "Tā búdàn huì shuō Zhōngwén, érqiě huì shuō Rìwén.", "Shared subject before 不但.", ["她不但会说中文，而且还会说日文。", "Tā búdàn huì shuō Zhōngwén, érqiě hái huì shuō Rìwén.", "她不但会说汉语，而且会说日语。", "Tā búdàn huì shuō Hànyǔ, érqiě huì shuō Rìyǔ."]),
      toZh("Today it's not only cold but windy too.", "今天不但很冷，而且风很大。", "Jīntiān búdàn hěn lěng, érqiě fēng hěn dà.", "不但 + cold, 而且 + windy.", ["今天不但冷，而且风很大。", "Jīntiān búdàn lěng, érqiě fēng hěn dà.", "今天天气不但很冷，而且风很大。", "Jīntiān tiānqì búdàn hěn lěng, érqiě fēng hěn dà."]),
      wo(["这本书", "不但", "有意思", "而且", "很", "有用"], "This book is not only interesting but also useful.", "Topic + 不但 A + 而且 B."),
      say("这里的冬天不但冷，而且很长。", "这里的冬天不但冷，而且很长: winters here are cold and long too.", "érqiě: rising, then a dip.", "Describe the winters where you live."),
    ]
  ),

  layer(
    S,
    "zh-b1d-chule",
    "Circuit: Besides or Except?",
    "Round after round of 除了…以外: add with 还/也, leave out with 都 -- hear it, complete it, say it.",
    "6 min",
    [
      sec(
        "Two meanings",
        [
          "除了 A (以外)，还/也 B: besides A, also B -- adding. 除了 A (以外)，都 B: everyone or everything except A -- leaving out. The second word tells you which.",
        ],
        [ex("除了跑步以外，他还喜欢游泳。", "Chúle pǎobù yǐwài, tā hái xǐhuan yóuyǒng.", "Besides running, he also likes swimming."), ex("除了我，大家都去过长城。", "Chúle wǒ, dàjiā dōu qù guo Chángchéng.", "Everyone except me has been to the Great Wall.")],
        [mc("除了我，大家都去过长城 -- has the speaker been?", ["No", "Yes", "Twice", "We don't know"], 0, "除了 … 都: everyone except me.")]
      ),
    ],
    [
      listen("除了小王，大家都到了。", "Who hasn't arrived?", ["Xiao Wang", "Everyone", "Nobody", "The speaker"], 0, "除了 … 都: all but Xiao Wang."),
      mc("除了中文，他还学日文 -- what does he study?", ["Chinese and Japanese", "Only Japanese", "Only Chinese", "Neither"], 0, "除了 … 还: adding."),
      fb(C, "除了周末以外，我每天___很忙。(I'm busy every day except weekends.)", "都", "dōu", "Leaving out: 都."),
      fb(C, "___苹果以外，我还买了香蕉。(Besides apples, I also bought bananas.)", "除了", "chúle", "除了 … 以外."),
      fb(C, "除了打篮球，他___喜欢踢足球。(Besides basketball, he likes football too.)", "还", "hái", "Adding: 还.", { altAnswers: ["也", "yě"] }),
      fb(C, "除了他以___，我们都会游泳。(Apart from him, we can all swim.)", "外", "wài", "除了 … 以外."),
      toZh("Everyone except me likes coffee.", "除了我，大家都喜欢咖啡。", "Chúle wǒ, dàjiā dōu xǐhuan kāfēi.", "除了 … 都: leaving out.", ["除了我以外，大家都喜欢咖啡。", "Chúle wǒ yǐwài, dàjiā dōu xǐhuan kāfēi.", "除了我，大家都喜欢喝咖啡。", "Chúle wǒ, dàjiā dōu xǐhuan hē kāfēi."]),
      toZh("Besides English, she also speaks Chinese.", "除了英文，她还会说中文。", "Chúle Yīngwén, tā hái huì shuō Zhōngwén.", "除了 … 还: adding.", ["除了英文以外，她还会说中文。", "Chúle Yīngwén yǐwài, tā hái huì shuō Zhōngwén.", "除了英语，她还会说汉语。", "Chúle Yīngyǔ, tā hái huì shuō Hànyǔ.", "除了英文，她也会说中文。", "Chúle Yīngwén, tā yě huì shuō Zhōngwén."]),
      toEn("除了星期一，这家店每天都开门。", "Chúle xīngqīyī, zhè jiā diàn měitiān dōu kāimén.", "This shop is open every day except Monday.", "除了 … 都: except.", ["This shop opens every day except Monday.", "Except for Monday, this shop is open every day.", "The shop is open every day apart from Monday.", "This store is open every day except Monday."]),
      wo(["除了", "茶", "以外", "我", "还", "喜欢", "喝", "咖啡"], "Besides tea, I also like coffee.", "除了 … 以外 + subject + 还."),
      say("除了鱼以外，别的我都爱吃。", "除了鱼以外，别的我都爱吃: I love everything except fish.", "biéde: rising, then light.", "Tell a host what you don't eat."),
    ]
  ),

  layer(
    S,
    "zh-b1r-lian",
    "Transform: Make It Stronger with 连…都",
    "Take a plain sentence and add \"even\": 我没吃饭 becomes 我连饭都没吃, 我没有钱 becomes 我连一块钱都没有.",
    "7 min",
    [
      sec(
        "Adding \"even\"",
        [
          "Put 连 before the surprising thing and 都 (or 也) after it. The thing often moves before the verb: 我没吃饭 → 我连饭都没吃 (I didn't even eat).",
          "With 一 + measure word it means \"not a single\": 我没有钱 → 我连一块钱都没有.",
        ],
        [ex("他连自己的生日都忘了。", "Tā lián zìjǐ de shēngrì dōu wàng le.", "He even forgot his own birthday."), ex("这个问题连老师也不会。", "Zhège wèntí lián lǎoshī yě bú huì.", "Even the teacher can't do this one.")],
        [mc("我没喝水 → stronger with 连:", ["我连水都没喝。", "我都连水没喝。", "连我水都没喝。", "我没连水都喝。"], 0, "连 + thing + 都 + 没 + verb.")]
      ),
    ],
    [
      listen("他连早饭都没吃就走了。", "What did he do?", ["Left without even eating breakfast", "Ate breakfast and left", "Made breakfast", "Stayed for breakfast"], 0, "连早饭都没吃: didn't even eat breakfast."),
      mc("我不认识他 → stronger:", ["我连他都不认识。", "我不认识他了。", "我也认识他。", "我都认识他。"], 0, "连 + 他 + 都: not even him."),
      fb(C, "这么简单的问题，___我妹妹都会。(Even my little sister can do such an easy question.)", "连", "lián", "连 + surprising person + 都."),
      fb(C, "他累得连话都不想___。(He's so tired he doesn't even want to talk.)", "说", "shuō", "说话: talk."),
      fb(C, "我连一张照片___没拍。(I didn't take a single photo.)", "都", "dōu", "连 + 一 + measure + 都 + 没.", { altAnswers: ["也", "yě"] }),
      toZh("I didn't even drink any water.", "我连水都没喝。", "Wǒ lián shuǐ dōu méi hē.", "连 + thing + 都 + 没.", ["我连水也没喝。", "Wǒ lián shuǐ yě méi hē.", "我连一口水都没喝。", "Wǒ lián yì kǒu shuǐ dōu méi hē."]),
      toZh("Even my grandma uses WeChat.", "连我奶奶都用微信。", "Lián wǒ nǎinai dōu yòng Wēixìn.", "连 + person + 都.", ["连我奶奶也用微信。", "Lián wǒ nǎinai yě yòng Wēixìn."]),
      toEn("这件事连他的妈妈都不知道。", "Zhè jiàn shì lián tā de māma dōu bù zhīdào.", "Even his mother doesn't know about this.", "连 + person + 都 + 不.", ["Even his mum doesn't know about this.", "Not even his mother knows about this.", "Even his mother doesn't know this.", "Not even his mum knows about this."]),
      wo(["我", "连", "一分钟", "都", "没", "休息"], "I didn't rest for even a minute.", "连 + 一 + measure + 都 + 没."),
      say("他连自己的生日都忘了。", "他连自己的生日都忘了: he even forgot his own birthday.", "lián zìjǐ: rising, falling, a dip.", "Tell a friend how forgetful he is."),
    ]
  ),

  layer(
    S,
    "zh-b1d-zhiyao",
    "Pattern Practice: As Long As…",
    "只要 + condition，就 + result, and the short endings 就行, 就好 and 就可以: that's all it takes.",
    "6 min",
    [
      sec(
        "The frame",
        [
          "只要 + condition，(subject +) 就 + result. The subject can stand before 只要 or after it, but always before 就.",
          "Short endings: 只要…就行 / 就好 / 就可以 -- that's all it takes.",
        ],
        [ex("只要你说一声，我就来帮你。", "Zhǐyào nǐ shuō yì shēng, wǒ jiù lái bāng nǐ.", "Just say the word and I'll come and help."), ex("你只要多听多说就行。", "Nǐ zhǐyào duō tīng duō shuō jiù xíng.", "All you need to do is listen and speak a lot.")],
        [mc("All you need is a passport:", ["只要有护照就行。", "只要有护照才行。", "有护照只要就行。", "只要就有护照行。"], 0, "只要 + condition + 就行.")]
      ),
    ],
    [
      listen("只要天气好，我们就去海边。", "When will they go to the beach?", ["As long as the weather is good", "Only if it rains", "Tomorrow, whatever happens", "Never"], 0, "只要天气好: as long as it's fine."),
      mc("你只要多练习就行 means:", ["All you need is more practice.", "You practise too much.", "Practice isn't enough.", "You never practise."], 0, "只要 … 就行: that's all it takes."),
      fb(C, "只要你愿意，我们___一起去。(As long as you're willing, we'll go together.)", "就", "jiù", "就 + result."),
      fb(C, "___打个电话，他就会来。(Just make a phone call and he'll come.)", "只要", "zhǐyào", "只要 + condition."),
      fb(C, "你只要说中文就___。(You just need to speak Chinese, that's all.)", "行", "xíng", "只要 … 就行.", { altAnswers: ["可以", "kěyǐ", "好", "hǎo"] }),
      fb(C, "只要不堵车，二十分钟就___到。(As long as there's no traffic, we can get there in twenty minutes.)", "能", "néng", "就能: then you can.", { altAnswers: ["会", "huì", "可以", "kěyǐ"] }),
      toZh("As long as you're free, call me.", "只要你有空，就给我打电话。", "Zhǐyào nǐ yǒu kòng, jiù gěi wǒ dǎ diànhuà.", "只要 + free, 就 + call.", ["只要有空，就给我打电话。", "Zhǐyào yǒu kòng, jiù gěi wǒ dǎ diànhuà.", "你只要有空，就给我打电话。", "Nǐ zhǐyào yǒu kòng, jiù gěi wǒ dǎ diànhuà.", "只要你有时间，就给我打电话。", "Zhǐyào nǐ yǒu shíjiān, jiù gěi wǒ dǎ diànhuà."]),
      toZh("All you need is a passport.", "只要有护照就行。", "Zhǐyào yǒu hùzhào jiù xíng.", "只要 … 就行.", ["只要有护照就可以。", "Zhǐyào yǒu hùzhào jiù kěyǐ.", "你只要有护照就行。", "Nǐ zhǐyào yǒu hùzhào jiù xíng."]),
      toZh("As long as you study hard, you'll pass the exam.", "只要你努力学习，就能通过考试。", "Zhǐyào nǐ nǔlì xuéxí, jiù néng tōngguò kǎoshì.", "只要 … 就能.", ["只要努力学习，就能通过考试。", "Zhǐyào nǔlì xuéxí, jiù néng tōngguò kǎoshì.", "只要你努力学习，就会通过考试。", "Zhǐyào nǐ nǔlì xuéxí, jiù huì tōngguò kǎoshì.", "你只要努力学习，就能通过考试。", "Nǐ zhǐyào nǔlì xuéxí, jiù néng tōngguò kǎoshì."]),
      wo(["只要", "你", "说", "一声", "我", "就", "来"], "Just say the word and I'll come.", "只要 + condition, subject + 就."),
      say("只要有时间，我就给你打电话。", "只要有时间，我就给你打电话: whenever I have time, I'll call you.", "zhǐyào: a dip, then a fall.", "Promise a friend you'll keep in touch."),
    ]
  ),

  layer(
    S,
    "zh-b1r-conditions",
    "Contrast: 只要, 只有 and 如果",
    "Three ways to set a condition: 只要…就 (that's enough), 只有…才 (nothing else will do) and 如果…就 (plain if).",
    "8 min",
    [
      sec(
        "Enough, necessary, or just if",
        [
          "只要…就: the condition is enough -- as long as. 只有…才: the condition is the only way -- only if. 如果…就: a plain if, with no extra weight.",
          "The partners don't mix: 只要 goes with 就, 只有 with 才.",
        ],
        [
          ex("只要你来，我就高兴。", "Zhǐyào nǐ lái, wǒ jiù gāoxìng.", "As long as you come, I'll be happy."),
          ex("只有你来，我才高兴。", "Zhǐyǒu nǐ lái, wǒ cái gāoxìng.", "I'll only be happy if you come."),
          ex("如果你来，我就请你吃饭。", "Rúguǒ nǐ lái, wǒ jiù qǐng nǐ chī fàn.", "If you come, I'll treat you to a meal."),
        ],
        [mc("Only if you go will he go:", ["只有你去，他才去。", "只要你去，他就去。", "如果你去，他就去。", "只有你去，他就去。"], 0, "只有 … 才: the only condition.")]
      ),
    ],
    [
      mc("只要 … 就 says the condition is:", ["enough", "the only one", "impossible", "in the past"], 0, "只要: as long as -- that's enough."),
      mc("只有 … 才 says the condition is:", ["necessary -- nothing else works", "enough", "unlikely", "finished"], 0, "只有: only if."),
      listen("如果明天下雨，我们就不去了。", "What happens if it rains?", ["They won't go.", "They'll go anyway.", "They'll go early.", "They'll take umbrellas."], 0, "如果 … 就: if."),
      fb(C, "___有票，就能进去。(As long as you have a ticket, you can go in.)", "只要", "zhǐyào", "Enough: 只要 … 就."),
      fb(C, "只有会员___能进去。(Only members can go in.)", "才", "cái", "只有 … 才."),
      fb(C, "如果你累了，___休息一下吧。(If you're tired, have a rest.)", "就", "jiù", "如果 … 就."),
      fb(C, "只有你帮我，我___能做完。(I can only finish it if you help me.)", "才", "cái", "Necessary condition: 才."),
      toZh("As long as you're free, come over.", "只要你有空，就来吧。", "Zhǐyào nǐ yǒu kòng, jiù lái ba.", "只要 … 就.", ["只要你有时间，就来吧。", "Zhǐyào nǐ yǒu shíjiān, jiù lái ba.", "只要有空，你就来吧。", "Zhǐyào yǒu kòng, nǐ jiù lái ba."]),
      toZh("Only when your homework is done can you go out.", "只有做完作业，你才能出去。", "Zhǐyǒu zuò wán zuòyè, nǐ cái néng chūqu.", "只有 … 才能.", ["只有做完作业，才能出去。", "Zhǐyǒu zuò wán zuòyè, cái néng chūqu.", "你只有做完作业，才能出去。", "Nǐ zhǐyǒu zuò wán zuòyè, cái néng chūqu."]),
      toEn("如果你不舒服，就别去上班了。", "Rúguǒ nǐ bù shūfu, jiù bié qù shàngbān le.", "If you don't feel well, don't go to work.", "如果 … 就: if.", ["If you're not feeling well, don't go to work.", "If you feel unwell, don't go to work.", "If you don't feel well, don't go in to work.", "If you're unwell, don't go to work."]),
      say("只要你喜欢，我们就买。", "只要你喜欢，我们就买: as long as you like it, we'll buy it.", "zhǐyào: a dip, then a fall.", "Tell a friend you'll buy the jacket they like."),
    ]
  ),

  layer(
    S,
    "zh-b1d-indefinite",
    "Substitution: Anything, Anyone, Anywhere",
    "Swap the question word in 什么都, 谁都, 哪儿都 and 怎么也 -- yes with 都, no with 都 or 也.",
    "6 min",
    [
      sec(
        "Swap the question word",
        [
          "Question word + 都 + verb: 什么都 (everything), 谁都 (everyone), 哪儿都 (everywhere). With a negative, 都 or 也: 什么也不, 谁也没, 哪儿也不 (nothing, nobody, nowhere).",
          "怎么 + verb + 也 + negative: however hard you try, it won't happen.",
        ],
        [ex("他哪儿都去过。", "Tā nǎr dōu qù guo.", "He's been everywhere."), ex("这个周末我谁也不想见。", "Zhège zhōumò wǒ shéi yě bù xiǎng jiàn.", "I don't want to see anyone this weekend.")],
        [mc("He's been everywhere → he hasn't been anywhere:", ["他哪儿也没去过。", "他哪儿都去过。", "他没哪儿去过。", "他哪儿去过也没。"], 0, "哪儿 + 也 + 没.")]
      ),
    ],
    [
      listen("他什么也没说就走了。", "What did he do?", ["Left without a word", "Said goodbye", "Talked a lot", "Stayed"], 0, "什么也没说: said nothing."),
      mc("谁都喜欢她 means:", ["Everyone likes her.", "Nobody likes her.", "Who likes her?", "She likes everyone."], 0, "谁 + 都: everyone."),
      fb(C, "我饿了，___都想吃。(I'm hungry -- I'd eat anything.)", "什么", "shénme", "什么 + 都: anything."),
      fb(C, "这个问题___都不会回答。(Nobody can answer this question.)", "谁", "shéi", "谁 + 都 + 不: nobody.", { altAnswers: ["shuí"] }),
      fb(C, "我的钥匙找不到了，___都找了。(My keys are missing -- I've looked everywhere.)", "哪儿", "nǎr", "哪儿 + 都: everywhere.", { altAnswers: ["哪里", "nǎlǐ"] }),
      fb(C, "这个字我怎么写___写不好。(However I write this character, it doesn't look right.)", "也", "yě", "怎么 + verb + 也 + negative.", { altAnswers: ["都", "dōu"] }),
      toZh("Nobody knows.", "谁都不知道。", "Shéi dōu bù zhīdào.", "谁 + 都 + 不.", ["谁也不知道。", "Shéi yě bù zhīdào.", "Shuí dōu bù zhīdào.", "Shuí yě bù zhīdào."]),
      toZh("I didn't buy anything.", "我什么都没买。", "Wǒ shénme dōu méi mǎi.", "什么 + 都 + 没.", ["我什么也没买。", "Wǒ shénme yě méi mǎi."]),
      toZh("I'm not going anywhere tomorrow.", "明天我哪儿也不去。", "Míngtiān wǒ nǎr yě bú qù.", "哪儿 + 也 + 不.", ["明天我哪儿都不去。", "Míngtiān wǒ nǎr dōu bú qù.", "我明天哪儿也不去。", "Wǒ míngtiān nǎr yě bú qù.", "我明天哪儿都不去。", "Wǒ míngtiān nǎr dōu bú qù.", "明天我哪里也不去。", "Míngtiān wǒ nǎlǐ yě bú qù."]),
      wo(["这个", "周末", "我", "谁", "也", "不", "想", "见"], "I don't want to see anyone this weekend.", "谁 + 也 + 不.", [["我", "这个", "周末", "谁", "也", "不", "想", "见"]]),
      say("我什么也没听见。", "我什么也没听见: I didn't hear a thing.", "shénme yě: rising, light, a dip.", "Tell someone you missed the announcement."),
    ]
  ),
];
