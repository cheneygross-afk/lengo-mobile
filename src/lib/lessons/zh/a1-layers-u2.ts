// Synced from cheneygross-afk/lengo:src/lib/lessons/zh/a1-layers-u2.ts by scripts/sync-content.mjs -- edit it there, not here.
// A1 unit 2 reinforce and drill lessons (吗/呢/也/都, numbers, money),
// drafted from their specs in specs.ts.

import { ex, fb, layer, listen, mc, say, sec, toEn, toZh, wo, zh } from "./authoring";
import { ZH_A1_SPEC as S } from "./specs";

const C = "Complete (characters or pinyin).";

export const ZH_A1_LAYERS_U2 = [
  layer(
    S,
    "zh-a1r-questions",
    "Transform: Statements into Questions",
    "Turn any statement into a yes/no question with 吗, bounce a question back with 呢, and answer with 是 or 不是.",
    "7 min",
    [
      sec(
        "Statement + 吗",
        [
          "To ask a yes/no question, take the statement and add 吗 at the end. Nothing else moves: 他是医生 → 他是医生吗？",
          "To answer yes, repeat the verb: 是 (yes, he is). To answer no, negate it: 不是. Chinese has no single word for \"yes\" or \"no.\"",
        ],
        [
          ex("他是医生。", "Tā shì yīshēng.", "He is a doctor."),
          ex("他是医生吗？", "Tā shì yīshēng ma?", "Is he a doctor?"),
          ex("不是，他是老师。", "Bú shì, tā shì lǎoshī.", "No, he's a teacher."),
        ],
        [mc("Turn 你是学生 into a question:", ["你是学生吗？", "吗你是学生？", "你吗是学生？", "你是吗学生？"], 0, "吗 goes at the very end.")]
      ),
      sec(
        "呢: and you?",
        [
          `After answering, bounce the question back with 呢: ${zh("我是美国人，你呢？", "Wǒ shì Měiguó rén, nǐ ne?")} (I'm American -- and you?).`,
          `Agreeing uses 也 (also) before the verb, and 都 (all, both) for groups: ${zh("我也是美国人。", "Wǒ yě shì Měiguó rén.")}`,
        ],
        [ex("我是学生，你呢？", "Wǒ shì xuésheng, nǐ ne?", "I'm a student -- and you?")],
        [mc("你呢？ after a statement means:", ["And you?", "Who are you?", "Are you?", "Thank you."], 0, "呢 bounces the topic back.")]
      ),
    ],
    [
      mc("Which is a correct question?", ["她是老师吗？", "她吗是老师？", "吗她是老师？", "她是老师呢吗？"], 0, "Statement + 吗."),
      mc("你是中国人吗？ -- the answer \"No\" is:", ["不是。", "不。", "没有。", "是不。"], 0, "Negate the verb: 不是."),
      fb(C, "他们是英国人___？(Are they British?)", "吗", "ma", "吗 makes a yes/no question."),
      fb(C, "我是医生，你___？(I'm a doctor -- and you?)", "呢", "ne", "呢: and you?"),
      fb(C, "她是学生，我___是学生。(She's a student, and I am too.)", "也", "yě", "也 goes before the verb."),
      toZh("Are you a teacher?", "你是老师吗？", "Nǐ shì lǎoshī ma?", "Statement + 吗."),
      toZh("Is he Japanese?", "他是日本人吗？", "Tā shì Rìběn rén ma?", "他是日本人 + 吗."),
      toEn("我是法国人，你呢？", "Wǒ shì Fǎguó rén, nǐ ne?", "I'm French, and you?", "呢 bounces the question back.", ["I am French, and you?", "I'm French, what about you?", "I am French, what about you?", "I'm French and you?", "I'm French. And you?"]),
      wo(["你们", "是", "学生", "吗"], "Are you students?", "吗 at the end."),
      say("你是老师吗？", "你是老师吗 (nǐ shì lǎoshī ma): 吗 is light and short.", "Don't raise your voice at the end -- 吗 already makes it a question.", "Ask someone if they're a teacher."),
    ]
  ),

  layer(
    S,
    "zh-a1d-ma",
    "Pattern Practice: …吗？ 是。/ 不是。",
    "Question and answer pairs at speed: ask with 吗, answer by repeating or negating the verb.",
    "6 min",
    [
      sec(
        "Ask, answer, repeat",
        [
          "Q: …是…吗？ A: 是。 or 不是。 Repeating the verb is how you say yes; negating it is how you say no.",
          "You can add the full sentence too: 是，我是学生。 / 不是，我不是学生。",
        ],
        [ex("你是学生吗？", "Nǐ shì xuésheng ma?", "Are you a student?"), ex("是，我是学生。", "Shì, wǒ shì xuésheng.", "Yes, I am.")],
        [mc("他是医生吗？ -- \"Yes\" is:", ["是。", "吗。", "好。", "不是。"], 0, "Repeat the verb: 是.")]
      ),
    ],
    [
      mc("她是加拿大人吗？ asks:", ["Is she Canadian?", "She is Canadian.", "Where is she from?", "Is he Canadian?"], 0, "Statement + 吗."),
      mc("Which answers 你是美国人吗？ with \"no\"?", ["不是，我是英国人。", "是，我是英国人。", "不，我英国人。", "没有，我是英国人。"], 0, "不是, then the truth."),
      fb(C, "你是医生___？(Are you a doctor?)", "吗", "ma", "吗 at the end."),
      fb(C, "她是老师吗？-- ___，她是学生。(No, she's a student.)", "不是", "bú shì", "Negate the verb to say no."),
      fb(C, "你们是中国人吗？-- ___，我们是中国人。(Yes, we are.)", "是", "shì", "Repeat the verb to say yes."),
      fb(C, "你___德国人吗？(Are you German?)", "是", "shì", "The verb stays where it is: 你是德国人吗？"),
      toZh("Are they students?", "他们是学生吗？", "Tāmen shì xuésheng ma?", "他们是学生 + 吗."),
      toZh("Is she French?", "她是法国人吗？", "Tā shì Fǎguó rén ma?", "她是法国人 + 吗."),
      toZh("No, I'm not.", "不是，我不是。", "Bú shì, wǒ bú shì.", "不是 twice: the answer, then the sentence."),
      say("是，我是学生。", "是，我是学生 (shì, wǒ shì xuésheng): yes, I am.", "Pause briefly after the first 是.", "Answer \"Are you a student?\" with yes."),
    ]
  ),

  layer(
    S,
    "zh-a1d-ye-dou",
    "Circuit: 也 and 都",
    "Round after round of 也 and 都: where they go, and how they combine with 不.",
    "6 min",
    [
      sec(
        "Before the verb, always",
        [
          "也 (also) and 都 (all, both) are adverbs: they go after the subject and before the verb. Never at the end of the sentence as in English \"me too.\"",
          "With 不: 也不 (also not) and 都不 (none of). 都 sums up a plural subject that comes before it: 我们都是学生 (we are all students).",
        ],
        [
          ex("我也是老师。", "Wǒ yě shì lǎoshī.", "I'm a teacher too."),
          ex("他们都是医生。", "Tāmen dōu shì yīshēng.", "They are all doctors."),
          ex("我们都不是学生。", "Wǒmen dōu bú shì xuésheng.", "None of us are students."),
        ],
        [mc("Where does 也 go?", ["After the subject, before the verb", "At the end", "At the start", "After the verb"], 0, "Subject + 也 + verb.")]
      ),
    ],
    [
      mc("I'm British too:", ["我也是英国人。", "我是英国人也。", "也我是英国人。", "我是也英国人。"], 0, "也 before the verb."),
      mc("他们都不是老师 means:", ["None of them are teachers.", "They are all teachers.", "Not all of them are teachers.", "They are teachers too."], 0, "都不: none."),
      fb(C, "我们___是中国人。(We are all Chinese.)", "都", "dōu", "都 sums up 我们."),
      fb(C, "她___不是医生。(She isn't a doctor either.)", "也", "yě", "也不: not either."),
      fb(C, "你们都是学生吗？-- 我们___是学生。(Yes, we all are.)", "都", "dōu", "都 before 是."),
      toZh("He is a student too.", "他也是学生。", "Tā yě shì xuésheng.", "Subject + 也 + 是."),
      toZh("They are all French.", "他们都是法国人。", "Tāmen dōu shì Fǎguó rén.", "Subject + 都 + 是."),
      wo(["我们", "也", "都", "是", "老师"], "We are all teachers too.", "Both together: 也 before 都."),
      toZh("None of us are doctors.", "我们都不是医生。", "Wǒmen dōu bú shì yīshēng.", "都不是: none are."),
      say("我也是。", "我也是 (wǒ yě shì): me too.", "Two third tones: wǒ rises to wó.", "Agree: you're a student too."),
    ]
  ),

  layer(
    S,
    "zh-a1r-numbers",
    "Mission: Ages and Phone Numbers",
    "Your mission: ask a child's age with 几, give your phone number digit by digit, and read numbers aloud.",
    "7 min",
    [
      sec(
        "Ages with 几",
        [
          `Ask a child ${zh("你几岁？", "Nǐ jǐ suì?")} -- 几 (how many) is for numbers you expect to be small. Answer with the number + 岁 (suì, years old): ${zh("我八岁。", "Wǒ bā suì.")} No 是 is needed.`,
        ],
        [ex("你几岁？", "Nǐ jǐ suì?", "How old are you? (to a child)"), ex("我七岁。", "Wǒ qī suì.", "I'm seven.")],
        [mc("我九岁 means:", ["I'm nine.", "I have nine.", "It's nine o'clock.", "Nine people."], 0, "Number + 岁: age.")]
      ),
      sec(
        "Phone numbers",
        [
          "Phone numbers are read digit by digit, and 一 is usually said yāo so it can't be mistaken for 七 (qī): 一三九 is yāo sān jiǔ.",
          `Ask ${zh("你的电话号码是多少？", "Nǐ de diànhuà hàomǎ shì duōshao?")} later in the course; for now, practise saying the digits.`,
        ],
        [ex("一三九", "yāo sān jiǔ", "1-3-9 (in a phone number)"), ex("零", "líng", "zero")],
        [mc("In phone numbers, 一 is often said:", ["yāo", "yī", "líng", "qī"], 0, "yāo keeps it distinct from qī.")]
      ),
    ],
    [
      mc("你几岁？ is asked to:", ["a child", "an elderly person", "a shop assistant", "anyone, politely"], 0, "几 expects a small number, so it's for children."),
      listen("五十八", "Which number did you hear?", ["58", "85", "18", "50"], 0, "五十八 (wǔshíbā): 5 tens + 8."),
      fb(C, "我十___岁。(I'm sixteen.)", "六", "liù", "十六: ten + six."),
      fb(C, "你___岁？(How old are you? -- to a child)", "几", "jǐ", "几 for small numbers."),
      fb(C, "九十___ (99)", "九", "jiǔ", "九十九: nine tens + nine."),
      toZh("I'm eight.", "我八岁。", "Wǒ bā suì.", "Number + 岁, no 是."),
      toZh("forty-four", "四十四", "sìshísì", "4 tens + 4."),
      toEn("七十三", "qīshísān", "73", "7 tens + 3.", ["seventy-three", "seventy three"]),
      say("一三九", "In a phone number: yāo sān jiǔ.", "Say 一 as yāo.", "Read out the digits 1-3-9 as in a phone number."),
    ],
    { previews: ["zh.grammar.de-possessive", "zh.grammar.duoshao"] }
  ),

  layer(
    S,
    "zh-a1d-numbers",
    "Speed Round: Numbers 0-99",
    "Hear it, type it, say it: two-digit numbers until they're automatic.",
    "6 min",
    [
      sec(
        "The whole system",
        [
          "Tens are number + 十: 二十 (20), 三十 (30). Then add the unit: 三十五 (35). 11-19 start with 十: 十五 (15).",
          "Watch the reversals: 十八 is 18, 八十 is 80.",
        ],
        [ex("十八", "shíbā", "18"), ex("八十", "bāshí", "80"), ex("八十八", "bāshíbā", "88")],
        [listen("十八", "Which did you hear?", ["18", "80", "88", "8"], 0, "十 first, then 八: 18.")]
      ),
    ],
    [
      listen("六十", "Which did you hear?", ["60", "16", "66", "6"], 0, "六十: six tens."),
      listen("九十七", "Which did you hear?", ["97", "79", "907", "17"], 0, "九十七: 9 tens + 7."),
      mc("二十二 is:", ["22", "20", "12", "202"], 0, "2 tens + 2."),
      fb(C, "十___ (19)", "九", "jiǔ", "十九: ten + nine."),
      fb(C, "___十 (40)", "四", "sì", "四十: four tens."),
      fb(C, "三十___ (31)", "一", "yī", "三十一: 3 tens + 1."),
      toZh("seventy", "七十", "qīshí", "7 tens."),
      toZh("fifty-five", "五十五", "wǔshíwǔ", "5 tens + 5."),
      toZh("How old are you? (to a child)", "你几岁？", "Nǐ jǐ suì?", "几 + 岁."),
      say("八十八", "八十八 (bāshíbā): 88, a lucky number in China.", "Keep all three syllables crisp.", "Say the number 88."),
    ]
  ),

  layer(
    S,
    "zh-a1r-shopping",
    "Dialogue: At the Market",
    "A shopping scene with prices: 多少钱, 块, and big numbers.",
    "7 min",
    [
      sec(
        "The dialogue",
        ["A customer at a tea stall. Read and listen; notice that the price question needs no verb at all."],
        [
          ex("茶多少钱？", "Chá duōshao qián?", "How much is the tea?"),
          ex("三十块。", "Sānshí kuài.", "Thirty kuai."),
          ex("咖啡呢？", "Kāfēi ne?", "And the coffee?"),
          ex("五十五块。", "Wǔshíwǔ kuài.", "Fifty-five kuai."),
          ex("一共多少钱？", "Yígòng duōshao qián?", "How much altogether?"),
          ex("八十五块。", "Bāshíwǔ kuài.", "Eighty-five kuai."),
        ],
        [mc("How much is the coffee?", ["55 kuai", "30 kuai", "85 kuai", "15 kuai"], 0, "咖啡 is 五十五块.")]
      ),
      sec(
        "Money words",
        [
          `${zh("钱", "qián")} is money; ${zh("块", "kuài")} is the everyday word for a yuan. Prices go number + 块: 二十块 (20 kuai).`,
          `${zh("多少", "duōshao")} (how much / how many) is for any number, large or small -- unlike 几. ${zh("一共", "yígòng")} means \"altogether.\"`,
        ],
        [ex("一百块", "yìbǎi kuài", "100 kuai"), ex("两千块", "liǎngqiān kuài", "2,000 kuai")],
        [mc("Which asks a price?", ["多少钱？", "几岁？", "你呢？", "请进。"], 0, "多少钱: how much money?")]
      ),
    ],
    [
      mc("一共 means:", ["altogether", "each", "too expensive", "cheap"], 0, "一共: in total."),
      listen("一百二十块", "How much?", ["120 kuai", "102 kuai", "12 kuai", "220 kuai"], 0, "一百二十: 100 + 20."),
      fb(C, "茶___钱？(How much is the tea?)", "多少", "duōshao", "多少钱: how much."),
      fb(C, "四十___。(Forty kuai.)", "块", "kuài", "Number + 块."),
      fb(C, "___多少钱？(How much altogether?)", "一共", "yígòng", "一共: altogether."),
      toZh("How much is the coffee?", "咖啡多少钱？", "Kāfēi duōshao qián?", "Thing + 多少钱."),
      toZh("Ninety kuai.", "九十块。", "Jiǔshí kuài.", "Number + 块."),
      toEn("一百零五块", "yìbǎi líng wǔ kuài", "105 kuai", "零 marks the empty tens place: 105.", ["105 yuan", "one hundred and five kuai", "one hundred five kuai", "105 RMB", "one hundred and five yuan"]),
      say("多少钱？", "多少钱 (duōshao qián): how much?", "duō high, shao light, qián rising.", "Ask a stallholder the price."),
    ]
  ),

  layer(
    S,
    "zh-a1d-er-liang",
    "Pattern Practice: 二 or 两?",
    "Counting uses 二; amounts of something use 两. Drill both until you choose without thinking.",
    "6 min",
    [
      sec(
        "The rule",
        [
          "二 (èr) is the digit: counting, phone numbers, inside bigger numbers (十二, 二十二).",
          "两 (liǎng) means \"two of something\": before a money word or measure, and usually before 百, 千 and 万: 两块 (two kuai), 两千 (2,000).",
        ],
        [ex("十二", "shí'èr", "12 -- the digit 二"), ex("两块", "liǎng kuài", "two kuai"), ex("两万", "liǎngwàn", "20,000")],
        [mc("Two kuai is:", ["两块", "二块", "二十块", "两十块"], 0, "An amount: 两.")]
      ),
    ],
    [
      mc("22 is:", ["二十二", "两十两", "两十二", "二十两"], 0, "Inside a number, it's always 二."),
      mc("2,000 kuai is usually:", ["两千块", "二千块", "二十块", "两百块"], 0, "两 before 千."),
      fb(C, "___块 (two kuai)", "两", "liǎng", "Two of something: 两."),
      fb(C, "十___ (12)", "二", "èr", "A digit inside a number: 二."),
      fb(C, "___百块 (200 kuai)", "两", "liǎng", "两 before 百 is the usual choice."),
      fb(C, "一万___千 (12,000)", "两", "liǎng", "一万两千: 10,000 + 2,000."),
      toZh("two thousand", "两千", "liǎngqiān", "两 before 千."),
      toZh("thirty-two kuai", "三十二块", "sānshí'èr kuài", "Inside the number: 二."),
      toZh("twenty thousand", "两万", "liǎngwàn", "两 before 万."),
      say("两百二十二", "两百二十二 (liǎngbǎi èrshí'èr): 222 -- 两 first, then 二 twice.", "Notice how the two words for two sit side by side.", "Say the number 222."),
    ]
  ),
];
