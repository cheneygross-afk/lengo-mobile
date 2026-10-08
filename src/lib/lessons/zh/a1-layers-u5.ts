// A1 unit 5 reinforce and drill lessons (在, position words, 有 for
// existence, question words), drafted from their specs in specs.ts.

import { ex, fb, layer, listen, mc, ms, mt, say, sec, toEn, toZh, wo, zh } from "./authoring";
import { ZH_A1_SPEC as S } from "./specs";

const C = "Complete (characters or pinyin).";

export const ZH_A1_LAYERS_U5 = [
  layer(
    S,
    "zh-a1r-zai",
    "Contrast: 在 as \"Be At\" and 在 + Place + Verb",
    "The same 在, two jobs: on its own it's \"to be at\"; before a place and a verb it says where something happens.",
    "7 min",
    [
      sec(
        "在 as the verb",
        [
          `Subject + 在 + place: ${zh("我在家。", "Wǒ zài jiā.")} (I'm at home). Here 在 is the whole verb -- no 是. Negative: ${zh("他不在。", "Tā bú zài.")} (he's not here/in).`,
          `Ask where with 哪儿 or 哪里: ${zh("你在哪儿？", "Nǐ zài nǎr?")}`,
        ],
        [ex("妈妈在医院。", "Māma zài yīyuàn.", "Mom is at the hospital."), ex("老师不在学校。", "Lǎoshī bú zài xuéxiào.", "The teacher isn't at school.")],
        [mc("I'm at school:", ["我在学校。", "我是学校。", "我是在学校。", "学校在我。"], 0, "在 + place, no 是.")]
      ),
      sec(
        "在 + place + verb",
        [
          `To say where you do something, the place comes before the verb: ${zh("我在学校学习。", "Wǒ zài xuéxiào xuéxí.")} (I study at school). English puts \"at school\" last; Chinese never does.`,
          `After a few verbs of position -- 住 (live), 坐 (sit) -- 在 + place follows the verb: ${zh("我住在北京。", "Wǒ zhù zài Běijīng.")}`,
        ],
        [ex("她在银行工作。", "Tā zài yínháng gōngzuò.", "She works at a bank.")],
        [mc("He eats at home:", ["他在家吃饭。", "他吃饭在家。", "他家在吃饭。", "在他家吃饭。"], 0, "在 + place before the verb.")]
      ),
    ],
    [
      ms(
        "Which sentences are correct? (Choose all that apply.)",
        ["我在家。", "她在公司工作。", "他工作在银行。", "我住在上海。"],
        [0, 1, 3],
        "在 + place goes before most verbs; 住 is one of the few that put it after."
      ),
      mc("你妈妈在吗？ means:", ["Is your mom in?", "Where is your mom?", "Is that your mom?", "Your mom is here."], 0, "在 alone: to be in/here."),
      fb(C, "我爸爸___医院工作。(My dad works at a hospital.)", "在", "zài", "在 + place + verb."),
      fb(C, "你___哪儿？(Where are you?)", "在", "zài", "在 + 哪儿."),
      fb(C, "他们住___北京。(They live in Beijing.)", "在", "zài", "住在 + place."),
      fb(C, "王老师不___。(Teacher Wang isn't in.)", "在", "zài", "不在: not here."),
      toZh("I study at the library.", "我在图书馆学习。", "Wǒ zài túshūguǎn xuéxí.", "在 + place + verb."),
      toZh("Where do you live?", "你住在哪儿？", "Nǐ zhù zài nǎr?", "住在 + 哪儿.", ["你住在哪里？", "Nǐ zhù zài nǎlǐ?"]),
      toEn("她在饭店吃饭。", "Tā zài fàndiàn chī fàn.", "She eats at a restaurant.", "在饭店 before the verb.", ["She is eating at a restaurant.", "She eats at the restaurant.", "She's eating at a restaurant.", "She is eating at the restaurant.", "She's eating at the restaurant."]),
      say("我在家工作。", "我在家工作 (wǒ zài jiā gōngzuò): I work from home.", "Keep 在家 together as one chunk.", "Say you work at home."),
    ]
  ),

  layer(
    S,
    "zh-a1d-zai",
    "Pattern Practice: Who Is Where?",
    "Subject + 在 + place, and 在哪儿 questions, with every place word you know.",
    "6 min",
    [
      sec(
        "Places",
        [
          "家 (home), 学校 (school), 商店 (shop), 饭店 (restaurant), 医院 (hospital), 银行 (bank), 公司 (company, office), 图书馆 (library), 超市 (supermarket).",
          "Q: X 在哪儿？ A: X 在 + place. No 是, ever.",
        ],
        [ex("超市", "chāoshì", "supermarket"), ex("你哥哥在哪儿？", "Nǐ gēge zài nǎr?", "Where is your older brother?")],
        [mt("Match the place.", [["医院", "hospital"], ["银行", "bank"], ["图书馆", "library"], ["超市", "supermarket"]], "Four useful places.")]
      ),
    ],
    [
      listen("我在超市。", "Where is the speaker?", ["at the supermarket", "at the bank", "at home", "at school"], 0, "超市: supermarket."),
      mc("Where's the teacher?", ["老师在哪儿？", "老师是哪儿？", "哪儿老师在？", "老师在哪儿是？"], 0, "X 在哪儿？"),
      fb(C, "姐姐在___。(My older sister is at the bank.)", "银行", "yínháng", "银行: bank."),
      fb(C, "他们在___？(Where are they?)", "哪儿", "nǎr", "哪儿: where.", { altAnswers: ["哪里", "nǎlǐ"] }),
      fb(C, "我___在家。(I'm not at home.)", "不", "bú", "不在: not at.", { altAnswers: ["bù"] }),
      fb(C, "弟弟在___。(My younger brother is at school.)", "学校", "xuéxiào", "学校: school."),
      toZh("Mom is at the hospital.", "妈妈在医院。", "Māma zài yīyuàn.", "在 + 医院."),
      toZh("Where is your dog?", "你的狗在哪儿？", "Nǐ de gǒu zài nǎr?", "在哪儿 at the end.", ["你的狗在哪里？", "Nǐ de gǒu zài nǎlǐ?"]),
      toZh("We're at the library.", "我们在图书馆。", "Wǒmen zài túshūguǎn.", "在 + 图书馆."),
      say("你在哪儿？", "你在哪儿 (nǐ zài nǎr): where are you?", "nǎr: one syllable with an -r.", "Phone a friend and ask where they are."),
    ]
  ),

  layer(
    S,
    "zh-a1d-zai-verb",
    "Circuit: 在 + Place + Verb",
    "Round after round of \"doing something somewhere\": the place before the verb, every time.",
    "6 min",
    [
      sec(
        "Who + where + what",
        [
          "Subject + 在 + place + verb (+ object): 我在超市买东西 (I shop at the supermarket).",
          "Time goes before place: 我明天在家工作 (tomorrow I'm working from home). Negation goes before 在: 我不在家吃饭.",
        ],
        [ex("我在超市买东西。", "Wǒ zài chāoshì mǎi dōngxi.", "I shop at the supermarket."), ex("我明天在家工作。", "Wǒ míngtiān zài jiā gōngzuò.", "I'm working from home tomorrow.")],
        [mc("Where does the time go?", ["Before 在 + place", "After the verb", "Between 在 and the place", "At the very end"], 0, "Subject + time + 在 + place + verb.")]
      ),
    ],
    [
      mc("I don't eat at home:", ["我不在家吃饭。", "我在家不吃饭。", "我在不家吃饭。", "我吃饭不在家。"], 0, "不 before 在 negates the whole \"at home\" part."),
      mc("他在图书馆看书 means:", ["He reads at the library.", "He is at the library.", "He's reading a library book.", "He goes to the library."], 0, "在 + place + verb."),
      fb(C, "她在___买东西。(She shops at the supermarket.)", "超市", "chāoshì", "在超市 + 买东西."),
      fb(C, "我们在学校___。(We study at school.)", "学习", "xuéxí", "Verb after the place."),
      fb(C, "他___银行工作。(He works at a bank.)", "在", "zài", "在 + place + verb."),
      fb(C, "我___在家工作。(I'm working from home tomorrow.)", "明天", "míngtiān", "Time before place."),
      toZh("She works at a hospital.", "她在医院工作。", "Tā zài yīyuàn gōngzuò.", "在 + 医院 + 工作."),
      toZh("I drink coffee at home.", "我在家喝咖啡。", "Wǒ zài jiā hē kāfēi.", "在家 + 喝咖啡."),
      wo(["他们", "星期天", "在", "饭店", "吃饭"], "On Sundays they eat at a restaurant.", "Subject + time + 在 + place + verb."),
      toEn("你在哪儿工作？", "Nǐ zài nǎr gōngzuò?", "Where do you work?", "在哪儿 + verb.", ["Where do you work", "Where are you working?"]),
    ]
  ),

  layer(
    S,
    "zh-a1r-positions",
    "Mission: Describe Your Room",
    "Your mission: tell a friend where your things are and what's in your room, with position words and 有.",
    "7 min",
    [
      sec(
        "Where things are",
        [
          `Thing + 在 + place + position word: ${zh("手机在桌子上。", "Shǒujī zài zhuōzi shang.")} (the phone is on the table). The position word comes after the place: 上 (on), 下 (under), 里 (in), 旁边 (next to), 前面 (in front), 后面 (behind).`,
        ],
        [ex("书在包里。", "Shū zài bāo li.", "The book is in the bag."), ex("猫在椅子下。", "Māo zài yǐzi xià.", "The cat is under the chair.")],
        [mc("The book is on the table:", ["书在桌子上。", "书在上桌子。", "桌子上在书。", "书是桌子上。"], 0, "Place + position word.")]
      ),
      sec(
        "What's there",
        [
          `Flip it around to say what's somewhere: place + position + 有 + thing. ${zh("桌子上有一本书。", "Zhuōzi shang yǒu yì běn shū.")} (There's a book on the table.)`,
          "Use 在 when you know the thing and ask where it is; use 有 when you're saying what exists in a place.",
        ],
        [ex("房间里有一个人。", "Fángjiān li yǒu yí ge rén.", "There's someone in the room."), ex("包里没有手机。", "Bāo li méiyǒu shǒujī.", "There's no phone in the bag.")],
        [mc("There's a cat under the table:", ["桌子下有一只猫。", "一只猫有桌子下。", "桌子下在一只猫。", "有桌子下一只猫。"], 0, "Place + 有 + thing.")]
      ),
    ],
    [
      mt(
        "Match the position word.",
        [
          ["上", "on"],
          ["里", "in"],
          ["旁边", "next to"],
          ["后面", "behind"],
        ],
        "Position words follow the place."
      ),
      mc("包里有什么？ asks:", ["What's in the bag?", "Where is the bag?", "Whose bag is it?", "Is there a bag?"], 0, "Place + 有 + 什么."),
      fb(C, "手机在包___。(The phone is in the bag.)", "里", "li", "里: in.", { altAnswers: ["lǐ"] }),
      fb(C, "桌子上___一杯茶。(There's a cup of tea on the table.)", "有", "yǒu", "Place + 有 + thing."),
      fb(C, "狗在椅子___。(The dog is under the chair.)", "下", "xià", "下: under."),
      fb(C, "银行在学校___。(The bank is next to the school.)", "旁边", "pángbiān", "旁边: next to."),
      toZh("There's a book in the bag.", "包里有一本书。", "Bāo li yǒu yì běn shū.", "Place + 有 + thing."),
      toZh("The cat is on the chair.", "猫在椅子上。", "Māo zài yǐzi shang.", "Thing + 在 + place + 上."),
      toEn("房间里没有人。", "Fángjiān li méiyǒu rén.", "There's nobody in the room.", "没有: there isn't.", ["There is nobody in the room.", "There's no one in the room.", "There is no one in the room.", "Nobody is in the room.", "No one is in the room."]),
      say("我的手机在哪儿？", "我的手机在哪儿: where's my phone?", "shǒujī: a dip, then high and level.", "Ask where your phone is."),
    ]
  ),

  layer(
    S,
    "zh-a1d-positions",
    "Pattern Practice: 在 or 有?",
    "Two frames for the same picture: \"X is on Y\" with 在, \"on Y there is X\" with 有.",
    "6 min",
    [
      sec(
        "Two frames",
        [
          "Known thing, where is it? Thing + 在 + place + position: 我的书在包里.",
          "What's in a place? Place + position + 有 + thing: 包里有一本书. The negative is 没有: 包里没有书.",
        ],
        [ex("学校后面有一个超市。", "Xuéxiào hòumiàn yǒu yí ge chāoshì.", "There's a supermarket behind the school."), ex("超市在学校后面。", "Chāoshì zài xuéxiào hòumiàn.", "The supermarket is behind the school.")],
        [mc("Which says what exists somewhere?", ["桌子上有一杯水。", "水在桌子上。", "Both", "Neither"], 0, "Place + 有 + thing.")]
      ),
    ],
    [
      mc("My dog is behind the door:", ["我的狗在门后面。", "门后面有我的狗。", "我的狗有门后面。", "门后面在我的狗。"], 0, "A known thing: 在."),
      mc("There's a bank in front of the hospital:", ["医院前面有一个银行。", "一个银行在医院前面。", "医院前面在银行。", "银行有医院前面。"], 0, "Place + position + 有 + thing."),
      fb(C, "房间里___人。(There's nobody in the room.)", "没有", "méiyǒu", "Place + 没有 + thing."),
      fb(C, "你的手机___桌子上。(Your phone is on the table.)", "在", "zài", "Known thing + 在."),
      fb(C, "学校___有一个图书馆。(There's a library next to the school.)", "旁边", "pángbiān", "Place + position + 有."),
      fb(C, "猫在桌子___。(The cat is under the table.)", "下", "xià", "下: under."),
      toZh("There are two cups of tea on the table.", "桌子上有两杯茶。", "Zhuōzi shang yǒu liǎng bēi chá.", "Place + 有 + 两杯茶."),
      toZh("The supermarket is in front of the bank.", "超市在银行前面。", "Chāoshì zài yínháng qiánmiàn.", "Thing + 在 + place + 前面."),
      toZh("There's no phone in the bag.", "包里没有手机。", "Bāo li méiyǒu shǒujī.", "Place + 没有 + thing."),
      say("桌子上有什么？", "桌子上有什么 (zhuōzi shang yǒu shénme): what's on the table?", "zi and shang are both light.", "Ask what's on the table."),
    ]
  ),

  layer(
    S,
    "zh-a1r-question-words",
    "Transform: Answers into Questions",
    "Take an answer, swap in the question word where the information was, and you have the question -- no word order change.",
    "7 min",
    [
      sec(
        "Swap, don't move",
        [
          "Chinese questions keep statement order. Find the piece of information, replace it with the question word, done: 他明天来 → 他什么时候来？ (when is he coming?).",
          "谁 (who), 什么 (what), 哪儿 (where), 什么时候 (when), 怎么 (how), 几/多少 (how many). No 吗 with a question word.",
        ],
        [
          ex("他明天来。", "Tā míngtiān lái.", "He's coming tomorrow."),
          ex("他什么时候来？", "Tā shénme shíhou lái?", "When is he coming?"),
          ex("我走路去。", "Wǒ zǒulù qù.", "I'm walking there."),
          ex("你怎么去？", "Nǐ zěnme qù?", "How are you getting there?"),
        ],
        [mc("我在银行工作 → ask \"where\":", ["你在哪儿工作？", "哪儿你在工作？", "你在工作哪儿？", "你在哪儿工作吗？"], 0, "Replace the place with 哪儿, same order.")]
      ),
    ],
    [
      mc("她喝茶 → ask \"what\":", ["她喝什么？", "什么她喝？", "她什么喝？", "她喝什么吗？"], 0, "什么 replaces 茶."),
      mc("Which is wrong?", ["你去哪儿吗？", "你去哪儿？", "谁是老师？", "你什么时候来？"], 0, "No 吗 with a question word."),
      fb(C, "王老师来。→ ___来？(Who's coming?)", "谁", "shéi", "谁 replaces the person.", { altAnswers: ["shuí"] }),
      fb(C, "我八点上课。→ 你___上课？(When do you have class?)", "什么时候", "shénme shíhou", "什么时候 replaces the time.", { altAnswers: ["几点", "jǐ diǎn"] }),
      fb(C, "这个字读 hǎo。→ 这个字___读？(How is this character read?)", "怎么", "zěnme", "怎么 + verb: how."),
      toZh("Where are you going?", "你去哪儿？", "Nǐ qù nǎr?", "哪儿 where the place would go.", ["你去哪里？", "Nǐ qù nǎlǐ?"]),
      toZh("Who is that?", "那是谁？", "Nà shì shéi?", "谁 replaces the person.", ["Nà shì shuí?"]),
      toEn("你们什么时候去北京？", "Nǐmen shénme shíhou qù Běijīng?", "When are you going to Beijing?", "什么时候 before the verb.", ["When are you going to Beijing", "When do you go to Beijing?", "When will you go to Beijing?", "When are you all going to Beijing?"]),
      wo(["你", "怎么", "去", "学校"], "How do you get to school?", "怎么 + verb."),
      say("你什么时候来？", "你什么时候来: when are you coming?", "shíhou: the hou is light.", "Ask a friend when they're coming."),
    ]
  ),

  layer(
    S,
    "zh-a1d-question-words",
    "Circuit: Who, What, Where, When, How",
    "Mixed rounds of question words: pick the right one, put it in the right place, and answer.",
    "6 min",
    [
      sec(
        "One slot each",
        [
          "Who 谁 → the person's slot. What 什么 → the thing's slot. Where 哪儿 → after 在 or 去. When 什么时候 → before the verb. How 怎么 → right before the verb.",
        ],
        [ex("谁在家？", "Shéi zài jiā?", "Who's at home?"), ex("你买什么？", "Nǐ mǎi shénme?", "What are you buying?")],
        [mt("Match the question word.", [["谁", "who"], ["什么", "what"], ["哪儿", "where"], ["怎么", "how"]], "Five words, one slot each.")]
      ),
    ],
    [
      listen("你买什么？", "What's being asked?", ["What are you buying?", "Where are you buying it?", "Who is buying it?", "When are you buying it?"], 0, "买什么: buy what."),
      mc("你___去？(How are you getting there?)", ["怎么", "什么", "谁", "哪儿"], 0, "怎么 + verb: how."),
      fb(C, "你在___学习？(Where do you study?)", "哪儿", "nǎr", "在哪儿 + verb.", { altAnswers: ["哪里", "nǎlǐ"] }),
      fb(C, "___是你的老师？(Who is your teacher?)", "谁", "shéi", "谁 in the subject's slot.", { altAnswers: ["shuí"] }),
      fb(C, "他们___吃饭？(When do they eat?)", "什么时候", "shénme shíhou", "什么时候 before the verb.", { altAnswers: ["几点", "jǐ diǎn"] }),
      fb(C, "这个字___写？(How do you write this character?)", "怎么", "zěnme", "怎么 + verb."),
      toZh("What are you drinking?", "你喝什么？", "Nǐ hē shénme?", "什么 in the object's slot."),
      toZh("Who is at the bank?", "谁在银行？", "Shéi zài yínháng?", "谁 as the subject.", ["Shuí zài yínháng?"]),
      toZh("When is your birthday?", "你的生日是什么时候？", "Nǐ de shēngrì shì shénme shíhou?", "什么时候 in the time's slot.", ["你的生日是几月几号？", "Nǐ de shēngrì shì jǐ yuè jǐ hào?"]),
      say("你怎么去学校？", "你怎么去学校: how do you get to school?", "zěnme: a dip, then a light me.", "Ask a classmate how they get to school."),
    ]
  ),
];
