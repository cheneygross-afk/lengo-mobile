// Synced from cheneygross-afk/lengo:src/lib/lessons/zh/a1-layers-u3.ts by scripts/sync-content.mjs -- edit it there, not here.
// A1 unit 3 reinforce and drill lessons (measure words, 这/那/哪, family,
// 有/没有, 的), drafted from their specs in specs.ts.

import { ex, fb, layer, listen, mc, ms, mt, say, sec, toEn, toZh, wo, zh } from "./authoring";
import { ZH_A1_SPEC as S } from "./specs";

const C = "Complete (characters or pinyin).";

export const ZH_A1_LAYERS_U3 = [
  layer(
    S,
    "zh-a1r-measure-words",
    "Contrast: 个, 本, 杯, 只",
    "Side by side: which measure word each kind of noun takes, and why 个 is your safety net.",
    "7 min",
    [
      sec(
        "Sorting nouns",
        [
          "Measure words group nouns by shape or kind, a little like English \"a cup of,\" \"a head of,\" \"a pair of\" -- except Chinese needs one every time a number or 这/那/哪 comes before a noun.",
          `本 (běn) for bound things: books, magazines. 杯 (bēi) for a cup or glass of a drink. 只 (zhī) for most animals. 个 (ge) for people and anything without its own measure word.`,
        ],
        [
          ex("两本书", "liǎng běn shū", "two books"),
          ex("一杯咖啡", "yì bēi kāfēi", "a cup of coffee"),
          ex("三只狗", "sān zhī gǒu", "three dogs"),
          ex("四个学生", "sì ge xuésheng", "four students"),
        ],
        [
          mt(
            "Match each noun to its measure word.",
            [
              ["猫 (cat)", "只"],
              ["书 (book)", "本"],
              ["茶 (tea)", "杯"],
              ["老师 (teacher)", "个"],
            ],
            "Animals 只, books 本, drinks 杯, people 个."
          ),
        ]
      ),
      sec(
        "When in doubt, 个",
        [
          `If you don't know a noun's measure word, ${zh("个", "ge")} will nearly always be understood. But with the common ones -- books, drinks, animals -- using the right word sounds much more natural.`,
          "One thing never changes: number + measure word + noun. A number can't go straight before a noun: 三书 is wrong, 三本书 is right.",
        ],
        [ex("这个人", "zhège rén", "this person"), ex("那只猫", "nà zhī māo", "that cat")],
        [mc("Which is correct?", ["三本书", "三书", "书三本", "三个本书"], 0, "Number + measure word + noun.")]
      ),
    ],
    [
      mc("A cup of tea:", ["一杯茶", "一个茶", "一本茶", "一只茶"], 0, "Drinks take 杯."),
      mc("Two cats:", ["两只猫", "二只猫", "两猫", "两本猫"], 0, "两 + 只 for animals."),
      ms("Which phrases are correct? (Choose all that apply.)", ["五个学生", "一本书", "三只狗", "两杯人"], [0, 1, 2], "People take 个, not 杯."),
      fb(C, "这___书多少钱？(How much is this book?)", "本", "běn", "Books: 本."),
      fb(C, "那___狗 (that dog)", "只", "zhī", "Animals: 只."),
      fb(C, "两___咖啡 (two coffees)", "杯", "bēi", "Drinks: 杯."),
      toZh("three teachers", "三个老师", "sān ge lǎoshī", "People: 个."),
      toZh("this cat", "这只猫", "zhè zhī māo", "这 + 只 + 猫."),
      toEn("那本书多少钱？", "Nà běn shū duōshao qián?", "How much is that book?", "那 + 本 + 书.", ["How much does that book cost?", "How much is that book"]),
      say("一杯茶", "一杯茶 (yì bēi chá): a cup of tea.", "一 is said yì before the first tone of 杯.", "Ask for a cup of tea -- just the phrase."),
    ]
  ),

  layer(
    S,
    "zh-a1d-measure-words",
    "Pattern Practice: Number + Measure Word + Noun",
    "The one pattern behind every count: drill it with numbers, nouns and measure words until it's automatic.",
    "6 min",
    [
      sec(
        "The slot",
        [
          "Number + measure word + noun. The measure word never disappears when there's a number, and 二 becomes 两: 两个人, not 二个人.",
          "一 changes tone before the measure word: yí ge (before the fourth tone of 个), yì běn, yì bēi, yì zhī.",
        ],
        [ex("一个人", "yí ge rén", "one person"), ex("一本书", "yì běn shū", "one book"), ex("两只猫", "liǎng zhī māo", "two cats")],
        [mc("Two people:", ["两个人", "二个人", "两人个", "二人"], 0, "两 + 个 + 人.")]
      ),
    ],
    [
      listen("五杯茶", "What did you hear?", ["five cups of tea", "five books", "five cats", "fifteen teas"], 0, "五杯茶: 5 + 杯 + 茶."),
      mc("Six students:", ["六个学生", "六学生", "六本学生", "学生六个"], 0, "Number + 个 + 学生."),
      fb(C, "我们班有二十___学生。(Our class has 20 students.)", "个", "gè", "People: 个.", { altAnswers: ["ge"] }),
      fb(C, "一___猫 (a cat)", "只", "zhī", "Animals: 只."),
      fb(C, "___本书 (two books)", "两", "liǎng", "Two of something: 两."),
      fb(C, "三___水 (three glasses of water)", "杯", "bēi", "Drinks: 杯."),
      toZh("four books", "四本书", "sì běn shū", "4 + 本 + 书."),
      toZh("two cups of coffee", "两杯咖啡", "liǎng bēi kāfēi", "两 + 杯 + 咖啡."),
      toZh("ten dogs", "十只狗", "shí zhī gǒu", "10 + 只 + 狗."),
      say("两个朋友", "两个朋友 (liǎng ge péngyou): two friends.", "ge is light and quick.", "Say \"two friends.\""),
    ],
    { previews: ["zh.grammar.you-meiyou"] }
  ),

  layer(
    S,
    "zh-a1d-this-that",
    "Substitution: 这, 那, 哪 + Measure Word",
    "This one, that one, which one: swap in measure words and nouns around 这, 那 and 哪.",
    "6 min",
    [
      sec(
        "这/那/哪 + measure word",
        [
          "Before a noun, 这 (this), 那 (that) and 哪 (which) take a measure word, just like numbers: 这本书, 那只狗, 哪个人.",
          `On their own as \"this/that\" (the subject of 是), they don't: ${zh("这是茶。", "Zhè shì chá.")} (This is tea.)`,
          "这个 and 那个 are often said zhèige and nèige in everyday speech -- both are fine.",
        ],
        [ex("哪本书？", "Nǎ běn shū?", "Which book?"), ex("那是咖啡。", "Nà shì kāfēi.", "That's coffee.")],
        [mc("Which needs a measure word?", ["这___书 (this book)", "这___是茶 (this is tea)", "Both", "Neither"], 0, "Before a noun: 这本书. As a subject: 这是…")]
      ),
    ],
    [
      mc("Which one?", ["哪个？", "那个？", "这个？", "几个？"], 0, "哪 asks which."),
      mc("那只猫 means:", ["that cat", "this cat", "which cat?", "a cat"], 0, "那 + 只 + 猫."),
      fb(C, "___个人是老师。(This person is a teacher.)", "这", "zhè", "这: this."),
      fb(C, "那___学生是美国人。(That student is American.)", "个", "gè", "People: 个.", { altAnswers: ["ge"] }),
      fb(C, "___本书？(Which book?)", "哪", "nǎ", "哪: which."),
      fb(C, "这___狗 (this dog)", "只", "zhī", "Animals: 只."),
      toZh("That is tea.", "那是茶。", "Nà shì chá.", "那 + 是, no measure word."),
      toZh("Which dog?", "哪只狗？", "Nǎ zhī gǒu?", "哪 + 只 + 狗."),
      wo(["那", "个", "人", "是", "医生"], "That person is a doctor.", "那 + 个 + 人 is the subject."),
      say("这个多少钱？", "这个多少钱 (zhège duōshao qián): how much is this?", "zhè is falling; ge is light.", "Point at something and ask its price."),
    ]
  ),

  layer(
    S,
    "zh-a1r-family",
    "Mission: Show Your Family Photo",
    "Your mission: show a photo and say who's in your family, how many people there are, and who you don't have.",
    "7 min",
    [
      sec(
        "Who's in the photo",
        [
          `Family words double the syllable: ${zh("爸爸", "bàba")} (dad), ${zh("妈妈", "māma")} (mom), ${zh("哥哥", "gēge")} (older brother), ${zh("姐姐", "jiějie")} (older sister), ${zh("弟弟", "dìdi")} (younger brother), ${zh("妹妹", "mèimei")} (younger sister). The second syllable is light.`,
          `Point and say ${zh("这是我爸爸。", "Zhè shì wǒ bàba.")} -- with family, 我 + relative is all you need: 我爸爸 (my dad).`,
        ],
        [ex("这是我姐姐。", "Zhè shì wǒ jiějie.", "This is my older sister."), ex("那是我弟弟。", "Nà shì wǒ dìdi.", "That's my younger brother.")],
        [mc("姐姐 is:", ["older sister", "younger sister", "older brother", "mom"], 0, "姐姐: older sister.")]
      ),
      sec(
        "How many, and who you don't have",
        [
          `${zh("我家有五口人。", "Wǒ jiā yǒu wǔ kǒu rén.")} -- 口 counts family members. Ask ${zh("你家有几口人？", "Nǐ jiā yǒu jǐ kǒu rén?")}`,
          `Say who you don't have with 没有 (never 不有): ${zh("我没有哥哥。", "Wǒ méiyǒu gēge.")} Join two people with 和: 爸爸和妈妈.`,
        ],
        [ex("我有一个弟弟和一个妹妹。", "Wǒ yǒu yí ge dìdi hé yí ge mèimei.", "I have a younger brother and a younger sister.")],
        [mc("I don't have an older sister:", ["我没有姐姐。", "我不有姐姐。", "我没姐姐有。", "我有不姐姐。"], 0, "有 is negated with 没.")]
      ),
    ],
    [
      mc("你家有几口人？ asks:", ["How many people are in your family?", "Who is in your family?", "Do you have a family?", "Where is your family?"], 0, "几口人: how many family members."),
      mt(
        "Match the family word.",
        [
          ["弟弟", "younger brother"],
          ["姐姐", "older sister"],
          ["哥哥", "older brother"],
          ["妹妹", "younger sister"],
        ],
        "Older: 哥哥 姐姐; younger: 弟弟 妹妹."
      ),
      fb(C, "我家有四___人。(There are four people in my family.)", "口", "kǒu", "口 counts family members."),
      fb(C, "我___有弟弟。(I don't have a younger brother.)", "没", "méi", "没有, never 不有."),
      fb(C, "这是我___。(This is my dad.)", "爸爸", "bàba", "爸爸: dad."),
      toZh("I have an older sister.", "我有一个姐姐。", "Wǒ yǒu yí ge jiějie.", "有 + 一个 + 姐姐."),
      toZh("Mom and older sister", "妈妈和姐姐", "māma hé jiějie", "和 joins two nouns."),
      toEn("我没有妹妹。", "Wǒ méiyǒu mèimei.", "I don't have a younger sister.", "没有: don't have.", ["I don't have a little sister.", "I do not have a younger sister.", "I have no younger sister.", "I don't have any younger sisters."]),
      say("我家有三口人。", "我家有三口人 (wǒ jiā yǒu sān kǒu rén): there are three people in my family.", "Many third tones: let 我 and 有 rise a little.", "Say how many people are in your family."),
    ]
  ),

  layer(
    S,
    "zh-a1d-you-meiyou",
    "Pattern Practice: 有, 没有 and 和",
    "Have, don't have, and joining nouns with 和 -- pattern by pattern.",
    "6 min",
    [
      sec(
        "Three patterns",
        [
          "A 有 B: 我有一个哥哥. A 没有 B: 我没有哥哥 (no number or measure word needed after 没有). Question: 你有哥哥吗？",
          "和 (hé, and) joins nouns only: 一个哥哥和一个妹妹. It doesn't join sentences -- for that, just use a comma.",
        ],
        [ex("你有弟弟吗？", "Nǐ yǒu dìdi ma?", "Do you have a younger brother?"), ex("没有。", "Méiyǒu.", "No (I don't).")],
        [mc("你有姐姐吗？ -- \"No\":", ["没有。", "不有。", "不是。", "没。"], 0, "Answer with the negated verb: 没有.")]
      ),
    ],
    [
      mc("我有一个妹妹和一个弟弟 means:", ["I have a younger sister and a younger brother.", "I have no sisters or brothers.", "My sister has a brother.", "I'm a sister and a brother."], 0, "有 + 和 joining two nouns."),
      mc("Which is correct?", ["她没有猫。", "她不有猫。", "她没猫有。", "她有没猫。"], 0, "有 is negated with 没."),
      fb(C, "你___哥哥吗？(Do you have an older brother?)", "有", "yǒu", "有: to have."),
      fb(C, "我没有___。(I don't have a dog.)", "狗", "gǒu", "没有 + noun."),
      fb(C, "老师___学生 (teachers and students)", "和", "hé", "和 joins nouns."),
      fb(C, "他们___有车。(They don't have a car.)", "没", "méi", "没有, never 不有."),
      toZh("Do you have a younger sister?", "你有妹妹吗？", "Nǐ yǒu mèimei ma?", "有 + 吗."),
      toZh("I don't have a cat.", "我没有猫。", "Wǒ méiyǒu māo.", "没有 + noun."),
      toZh("I have two older brothers.", "我有两个哥哥。", "Wǒ yǒu liǎng ge gēge.", "两 + 个 + 哥哥."),
      say("我有一个妹妹和一个弟弟。", "我有一个妹妹和一个弟弟: I have a younger sister and a younger brother.", "yí ge before both nouns.", "Say you have a younger sister and a younger brother."),
    ]
  ),

  layer(
    S,
    "zh-a1r-de-errors",
    "Error Hunt: 的 and 谁",
    "Find the mistakes with 的: where it goes, when to drop it, and asking whose with 谁的.",
    "7 min",
    [
      sec(
        "Owner + 的 + thing",
        [
          "的 always follows the owner: 老师的书 (the teacher's book). English \"the book of the teacher\" order is wrong in Chinese: \"书的老师\" means \"the book's teacher.\"",
          "Drop 的 with close family and your own group: 我妈妈, 我们学校. Keep it with things: 我的书.",
          `${zh("谁的", "shéi de")} asks whose: ${zh("这是谁的猫？", "Zhè shì shéi de māo?")} The answer replaces 谁: 这是我的猫. The thing can even be left out: 这是我的 (it's mine).`,
        ],
        [
          ex("老师的书", "lǎoshī de shū", "the teacher's book"),
          ex("我妈妈", "wǒ māma", "my mom"),
          ex("这是谁的？", "Zhè shì shéi de?", "Whose is this?"),
        ],
        [mc("the teacher's cat:", ["老师的猫", "猫的老师", "老师猫的", "的老师猫"], 0, "Owner + 的 + thing.")]
      ),
    ],
    [
      ms(
        "Which are correct? (Choose all that apply.)",
        ["我的书", "我妈妈", "他的狗", "书的我"],
        [0, 1, 2],
        "Owner first; family can drop 的."
      ),
      mc("What's wrong with 这是书的老师 (meaning \"this is the teacher's book\")?", ["The order: it should be 老师的书", "It needs 吗", "的 should be 得", "Nothing"], 0, "Owner + 的 + thing: 老师的书."),
      mc("这是谁的书？ -- \"It's mine\":", ["是我的。", "是我。", "是谁的。", "我是的。"], 0, "我的: mine."),
      fb(C, "这是___的书？(Whose book is this?)", "谁", "shéi", "谁的: whose.", { altAnswers: ["shuí"] }),
      fb(C, "那是我___狗。(That's my dog.)", "的", "de", "Owner + 的 + thing."),
      fb(C, "这是他___。(This is his.)", "的", "de", "的 without a noun: his."),
      toZh("my teacher's book", "我老师的书", "wǒ lǎoshī de shū", "我老师 (close relationship) + 的 + 书."),
      toZh("Whose cat is this?", "这是谁的猫？", "Zhè shì shéi de māo?", "谁的 + noun."),
      toEn("那是我们的老师。", "Nà shì wǒmen de lǎoshī.", "That is our teacher.", "我们的: our.", ["That's our teacher.", "That is our teacher"]),
    ]
  ),

  layer(
    S,
    "zh-a1d-de",
    "Substitution: X 的 Y",
    "Swap owners and things through the 的 pattern, and answer 谁的 questions.",
    "6 min",
    [
      sec(
        "The frame",
        [
          "X 的 Y: 我的书, 你的猫, 王老师的咖啡. Questions put 谁 in X: 谁的书？",
          "As a whole phrase, X 的 Y can be the subject or the object: 我的猫是黑的 (later), 这是王老师的咖啡.",
        ],
        [ex("你的茶", "nǐ de chá", "your tea"), ex("王老师的咖啡", "Wáng lǎoshī de kāfēi", "Teacher Wang's coffee")],
        [mc("your dog:", ["你的狗", "狗的你", "你狗的", "的你狗"], 0, "Owner + 的 + thing.")]
      ),
    ],
    [
      mc("她的书 means:", ["her book", "she is a book", "the book's owner", "their book"], 0, "她 + 的 + 书."),
      mc("Whose coffee?", ["谁的咖啡？", "咖啡的谁？", "谁咖啡？", "的谁咖啡？"], 0, "谁的 + noun."),
      fb(C, "这是___的茶。(This is your tea.)", "你", "nǐ", "你的: your."),
      fb(C, "那是他们___猫。(That's their cat.)", "的", "de", "他们的: their."),
      fb(C, "___的书？(Whose book?)", "谁", "shéi", "谁的: whose.", { altAnswers: ["shuí"] }),
      fb(C, "这是我___的书。(This is my friend's book.)", "朋友", "péngyou", "朋友的书: a friend's book."),
      toZh("her cat", "她的猫", "tā de māo", "她 + 的 + 猫."),
      toZh("This is my book.", "这是我的书。", "Zhè shì wǒ de shū.", "这是 + 我的书."),
      toZh("Whose is that?", "那是谁的？", "Nà shì shéi de?", "谁的 on its own: whose."),
      say("这是谁的？", "这是谁的 (zhè shì shéi de): whose is this?", "shéi rises; de is light.", "Hold up a lost phone and ask whose it is."),
    ]
  ),
];
