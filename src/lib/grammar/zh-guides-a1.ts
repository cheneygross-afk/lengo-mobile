// Synced from cheneygross-afk/lengo:src/lib/grammar/zh-guides-a1.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ZhGrammarGuide } from "./zh-types";

// A1 (HSK 1) guides. Conventions: ./zh-types.ts and
// src/lib/lessons/zh/README.md (pinyin shows dictionary tones, except 不
// and 一, which are written as spoken; neutral tones unmarked).

export const ZH_GUIDES_A1: ZhGrammarGuide[] = [
  {
    slug: "shi-and-simple-sentences",
    title: "是 and Simple Sentences: Pronouns, 是 and 不",
    description:
      "How Chinese builds its first sentences: personal pronouns, 是 (to be) between two nouns, negation with 不, and the number sentences that need no 是 at all.",
    level: "A1",
    hsk: "HSK 1",
    intro: [
      "Good news first: the basic Chinese sentence runs subject, verb, object, just like English. Better news: nothing changes shape. 是 (shì, to be) is the same for I, you, she and they, and it is the same today, yesterday and tomorrow. There are no articles (a, the) and nouns don't take a plural ending.",
      "The catch is that 是 is narrower than English \"to be\". It links two nouns (\"she is a teacher\"), but not a noun and an adjective (that's a separate pattern, see the guide on adjectives), and it usually drops out of sentences about age, prices and dates.",
    ],
    sections: [
      {
        heading: "Personal pronouns",
        body: [
          "Chinese pronouns have no separate object form: 我 (wǒ) is both I and me, 他 (tā) both he and him. To make any of them plural, add 们 (men).",
          "他 (he), 她 (she) and 它 (it) are all pronounced tā. Only the written form tells them apart, so in speech context does the work. 您 (nín) is the polite you, for older people, teachers and customers.",
        ],
        table: {
          headers: ["", "Singular", "Plural"],
          rows: [
            ["I / we", "我 wǒ", "我们 wǒmen"],
            ["you", "你 nǐ (polite: 您 nín)", "你们 nǐmen"],
            ["he / she / it", "他 / 她 / 它 tā", "他们 / 她们 / 它们 tāmen"],
          ],
        },
        examples: [
          { zh: "我们是学生。", pinyin: "Wǒmen shì xuésheng.", en: "We're students." },
          { zh: "他们是老师。", pinyin: "Tāmen shì lǎoshī.", en: "They're teachers." },
          { zh: "您是王老师吗？", pinyin: "Nín shì Wáng lǎoshī ma?", en: "Are you Teacher Wang? (polite)" },
        ],
      },
      {
        heading: "A 是 B",
        body: [
          "是 joins two nouns: who or what someone is. There's no word for \"a\" or \"the\", so 她是医生 is simply \"she is a doctor\". The noun also stays the same in the plural: 他们是学生 (they are students), never 学生们 after a plural subject.",
        ],
        examples: [
          { zh: "我是美国人。", pinyin: "Wǒ shì Měiguó rén.", en: "I'm American." },
          { zh: "她是医生。", pinyin: "Tā shì yīshēng.", en: "She's a doctor." },
          { zh: "李明是我朋友。", pinyin: "Lǐ Míng shì wǒ péngyou.", en: "Li Ming is my friend." },
        ],
      },
      {
        heading: "Negating with 不",
        body: [
          "Put 不 (bù) right before the verb: 不是 means \"is not\". 不 is normally fourth tone, but before another fourth tone it changes to second: bú shì. This course writes 不 with the tone you actually say.",
        ],
        examples: [
          { zh: "他不是医生。", pinyin: "Tā bú shì yīshēng.", en: "He isn't a doctor." },
          { zh: "我不是中国人，我是英国人。", pinyin: "Wǒ bú shì Zhōngguó rén, wǒ shì Yīngguó rén.", en: "I'm not Chinese, I'm British." },
        ],
      },
      {
        heading: "Number sentences without 是",
        body: [
          "When the description is a number (age, price, date, floor), Chinese usually leaves 是 out: 我二十岁 is literally \"I twenty years\". In the negative, though, 是 comes back, because 不 needs a verb to attach to: 我不是二十岁.",
        ],
        examples: [
          { zh: "我二十岁。", pinyin: "Wǒ èrshí suì.", en: "I'm twenty." },
          { zh: "咖啡三十块。", pinyin: "Kāfēi sānshí kuài.", en: "The coffee is thirty yuan." },
          { zh: "今天星期一。", pinyin: "Jīntiān xīngqīyī.", en: "Today is Monday." },
          { zh: "他不是十八岁，他十九岁。", pinyin: "Tā bú shì shíbā suì, tā shíjiǔ suì.", en: "He isn't eighteen, he's nineteen." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "我是很忙。",
        right: "我很忙。",
        rightPinyin: "Wǒ hěn máng.",
        why: "是 links nouns, not adjectives. English \"I am busy\" becomes \"I very busy\" in Chinese.",
      },
      {
        wrong: "我不二十岁。",
        right: "我不是二十岁。",
        rightPinyin: "Wǒ bú shì èrshí suì.",
        why: "不 can't negate a number directly. Bring 是 back in the negative.",
      },
      {
        wrong: "他们是学生们。",
        right: "他们是学生。",
        rightPinyin: "Tāmen shì xuésheng.",
        why: "Ordinary nouns don't mark the plural. 们 goes on pronouns and on a few nouns for people when addressing a group (同学们), never after a subject that is already plural.",
      },
    ],
    faqs: [
      {
        q: "When should I use 您 instead of 你?",
        a: "Use 您 (nín) with older people, teachers, customers and anyone you want to show respect to, especially when you first meet. Between friends and people your age, 你 is normal. For a group, say 你们 or 大家 (dàjiā, everyone); 您们 is rare.",
      },
      {
        q: "How do I say \"a\" or \"the\"?",
        a: "You don't need to. Context tells the listener which you mean. When you count something you add a number and a measure word (一个学生, one student), and 这/那 (this, that) do some of the work of \"the\"; see the guide on measure words.",
      },
    ],
    related: ["adjectives-and-hen", "yes-no-questions", "measure-words-and-numbers"],
    lessons: ["zh-pronouns-shi", "zh-a1-people-jobs", "zh-a1-number-labels"],
  },
  {
    slug: "yes-no-questions",
    title: "Yes-No Questions: 吗, 呢, A-not-A and 是不是",
    description:
      "Four ways to ask a question without a question word: add 吗, bounce it back with 呢, say the verb twice (忙不忙), or check a guess with 是不是. Plus how to answer without a word for yes.",
    level: "A1",
    hsk: "HSK 1",
    intro: [
      "English turns a statement into a question by moving words around: \"you are\" becomes \"are you?\". Chinese never does. The words stay exactly where they are, and a small particle or a repeated verb does the job.",
      "Chinese also has no all-purpose word for yes or no. You answer by repeating the verb, positive or negative. Once that habit clicks, Chinese questions are among the easiest parts of the language.",
    ],
    sections: [
      {
        heading: "Statement + 吗",
        body: [
          "Take any statement and put 吗 (ma, neutral tone) on the end. That's it. To answer, repeat the verb or adjective: 是 / 不是, 去 / 不去, 忙 / 不忙. 对 (duì, right) works when you are confirming a fact.",
        ],
        examples: [
          { zh: "你是老师吗？", pinyin: "Nǐ shì lǎoshī ma?", en: "Are you a teacher?" },
          { zh: "你喝咖啡吗？", pinyin: "Nǐ hē kāfēi ma?", en: "Do you drink coffee?" },
          { zh: "你去吗？——去。", pinyin: "Nǐ qù ma? — Qù.", en: "Are you going? — Yes. (Going.)" },
          { zh: "他忙吗？——不忙。", pinyin: "Tā máng ma? — Bù máng.", en: "Is he busy? — No. (Not busy.)" },
        ],
      },
      {
        heading: "呢: and you?",
        body: [
          "After a noun or pronoun, 呢 (ne) bounces the last question back: \"and you?\", \"what about him?\". On its own after a thing, it asks where that thing is.",
        ],
        examples: [
          { zh: "我很好，你呢？", pinyin: "Wǒ hěn hǎo, nǐ ne?", en: "I'm fine, and you?" },
          { zh: "我是英国人，他呢？", pinyin: "Wǒ shì Yīngguó rén, tā ne?", en: "I'm British. What about him?" },
          { zh: "我的手机呢？", pinyin: "Wǒ de shǒujī ne?", en: "Where's my phone?" },
        ],
      },
      {
        heading: "A-not-A: 忙不忙？",
        body: [
          "Say the verb or adjective, then 不, then the verb again: 忙不忙 (busy not busy?). In this pattern 不 is said lightly, with a neutral tone. With a two-syllable verb you can repeat just the first syllable: 喜不喜欢. The verb 有 uses 没: 有没有.",
          "An A-not-A question is already a question, so it never takes 吗. It also can't take adverbs like 也, 都 or 很 in front of it: for \"are you also going?\" go back to 吗.",
        ],
        examples: [
          { zh: "你去不去？", pinyin: "Nǐ qù bu qù?", en: "Are you going or not?" },
          { zh: "他是不是中国人？", pinyin: "Tā shì bu shì Zhōngguó rén?", en: "Is he Chinese?" },
          { zh: "你有没有时间？", pinyin: "Nǐ yǒu méiyǒu shíjiān?", en: "Do you have time?" },
          { zh: "你喜不喜欢喝茶？", pinyin: "Nǐ xǐ bu xǐhuan hē chá?", en: "Do you like tea?" },
        ],
      },
      {
        heading: "是不是: checking a guess",
        body: [
          "是不是 in front of the predicate, or tacked on at the end after a comma, means you think something is true and want it confirmed, like English \"aren't you?\" or \"right?\".",
        ],
        examples: [
          { zh: "你是不是很累？", pinyin: "Nǐ shì bu shì hěn lèi?", en: "You're tired, aren't you?" },
          { zh: "你是老师，是不是？", pinyin: "Nǐ shì lǎoshī, shì bu shì?", en: "You're a teacher, right?" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "你忙不忙吗？",
        right: "你忙不忙？",
        rightPinyin: "Nǐ máng bu máng?",
        why: "A-not-A is already a question. Adding 吗 asks the question twice.",
      },
      {
        wrong: "你也去不去？",
        right: "你也去吗？",
        rightPinyin: "Nǐ yě qù ma?",
        why: "Adverbs like 也, 都 and 很 can't sit in front of an A-not-A verb. Use 吗 instead.",
      },
      {
        wrong: "你喜欢咖啡吗？——是。",
        right: "你喜欢咖啡吗？——喜欢。",
        rightPinyin: "Nǐ xǐhuan kāfēi ma? — Xǐhuan.",
        why: "是 means \"to be\", not \"yes\". Answer by repeating the verb of the question.",
      },
      {
        wrong: "你是哪国人吗？",
        right: "你是哪国人？",
        rightPinyin: "Nǐ shì nǎ guó rén?",
        why: "A question word (什么, 哪, 谁 ...) already makes a question. 吗 is only for yes-no questions.",
      },
    ],
    faqs: [
      {
        q: "Is there any difference between 吗 and A-not-A?",
        a: "Both ask a yes-no question. 吗 is the more neutral, all-purpose choice and works with any sentence. A-not-A sounds a little more direct, as if you want a clear answer either way, and is common in speech.",
      },
      {
        q: "How do I say a plain \"yes\" or \"no\"?",
        a: "Repeat the verb: 是, 有, 去, 喜欢, or their negatives 不是, 没有, 不去, 不喜欢. For \"that's right\" say 对 (duì); for \"no, that's wrong\" say 不对 (bú duì). 嗯 (ng) is a casual \"mm-hm\".",
      },
    ],
    related: ["question-words", "shi-and-simple-sentences", "requests-and-suggestions"],
    lessons: ["zh-questions-ma-ne-ye-dou", "zh-adjectives-hen", "zh-a1-feelings"],
  },
  {
    slug: "question-words",
    title: "Question Words: 什么, 谁, 哪儿, 几, 多少 and 怎么",
    description:
      "Chinese question words stay where the answer goes, with no change of word order. The full A1 set, from 什么 and 谁 to 几 vs 多少 and 怎么 vs 怎么样.",
    level: "A1",
    hsk: "HSK 1",
    intro: [
      "In English, question words jump to the front: \"you are going to Beijing\" becomes \"where are you going?\". In Chinese they stay put. Write the answer you expect, then swap the part you don't know for a question word: 你去北京 becomes 你去哪儿？",
      "That one rule covers every question word in this guide. What's left is choosing the right word, especially between 几 and 多少, and between 怎么 and 怎么样.",
    ],
    sections: [
      {
        heading: "The answer slot",
        body: [
          "Match each question to its answer and you'll see the word order is identical. The question word sits exactly where the new information will go.",
        ],
        examples: [
          { zh: "你叫什么名字？——我叫李明。", pinyin: "Nǐ jiào shénme míngzi? — Wǒ jiào Lǐ Míng.", en: "What's your name? — I'm Li Ming." },
          { zh: "他是谁？——他是我老师。", pinyin: "Tā shì shéi? — Tā shì wǒ lǎoshī.", en: "Who is he? — He's my teacher." },
          { zh: "你去哪儿？——我去北京。", pinyin: "Nǐ qù nǎr? — Wǒ qù Běijīng.", en: "Where are you going? — To Beijing." },
          { zh: "这是谁的手机？", pinyin: "Zhè shì shéi de shǒujī?", en: "Whose phone is this?" },
        ],
      },
      {
        heading: "The A1 question words",
        body: [
          "哪 (nǎ, which) needs a measure word after it (哪个, 哪本), while 哪儿 and 哪里 both mean where. 哪儿 is typical of the north, 哪里 of the south; both are standard.",
        ],
        table: {
          headers: ["Word", "Pinyin", "Meaning"],
          rows: [
            ["什么", "shénme", "what"],
            ["谁 / 谁的", "shéi / shéi de", "who / whose"],
            ["哪儿 / 哪里", "nǎr / nǎlǐ", "where"],
            ["哪 + measure word", "nǎ", "which"],
            ["几", "jǐ", "how many (a small number)"],
            ["多少", "duōshao", "how many, how much"],
            ["什么时候", "shénme shíhou", "when"],
            ["怎么", "zěnme", "how (to do something)"],
            ["怎么样", "zěnmeyàng", "how is it, what about"],
          ],
        },
      },
      {
        heading: "几 or 多少?",
        body: [
          "几 expects a small number, roughly under ten, and always takes a measure word: 几个, 几本. It's also used for the date and time (几月几号, 几点) and for a child's age (几岁). 多少 is for any number and the measure word is optional: 多少学生, 多少钱.",
        ],
        examples: [
          { zh: "你有几个孩子？", pinyin: "Nǐ yǒu jǐ ge háizi?", en: "How many children do you have?" },
          { zh: "你们班有多少学生？", pinyin: "Nǐmen bān yǒu duōshao xuésheng?", en: "How many students are in your class?" },
          { zh: "这个多少钱？", pinyin: "Zhège duōshao qián?", en: "How much is this?" },
          { zh: "你几岁？", pinyin: "Nǐ jǐ suì?", en: "How old are you? (to a child)" },
        ],
      },
      {
        heading: "When and how: 什么时候, 怎么, 怎么样",
        body: [
          "什么时候 (when) behaves like any time word, so it goes before the verb. 怎么 + verb asks how to do something. 怎么样 stands at the end and asks for an opinion (\"how is it?\") or makes a suggestion (\"how about ...?\").",
        ],
        examples: [
          { zh: "你什么时候去？", pinyin: "Nǐ shénme shíhou qù?", en: "When are you going?" },
          { zh: "这个字怎么写？", pinyin: "Zhège zì zěnme xiě?", en: "How do you write this character?" },
          { zh: "这个菜怎么样？", pinyin: "Zhège cài zěnmeyàng?", en: "How is this dish?" },
          { zh: "明天怎么样？", pinyin: "Míngtiān zěnmeyàng?", en: "How about tomorrow?" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "什么是你的名字？",
        right: "你叫什么名字？",
        rightPinyin: "Nǐ jiào shénme míngzi?",
        why: "Don't move the question word to the front, and use the Chinese way of asking a name: \"you are called what name?\".",
      },
      {
        wrong: "你有几朋友？",
        right: "你有几个朋友？",
        rightPinyin: "Nǐ yǒu jǐ ge péngyou?",
        why: "几 always needs a measure word between it and the noun, just like a number.",
      },
      {
        wrong: "你去什么时候？",
        right: "你什么时候去？",
        rightPinyin: "Nǐ shénme shíhou qù?",
        why: "Time comes before the verb in Chinese, and 什么时候 is a time word.",
      },
    ],
    faqs: [
      {
        q: "Is 谁 pronounced shéi or shuí?",
        a: "Both are standard. Shéi is far more common in everyday speech, and it's what this course uses.",
      },
      {
        q: "How do I ask an adult's age?",
        a: "几岁 is for children. For an adult you'd say 你多大？ (Nǐ duō dà?, how old are you), and for an older person the respectful 您多大年纪？ (Nín duō dà niánjì?).",
      },
    ],
    related: ["yes-no-questions", "measure-words-and-numbers", "word-order-time-and-place"],
    lessons: ["zh-names-introductions", "zh-numbers-0-99", "zh-numbers-money", "zh-possessive-de", "zh-places-zai", "zh-question-words"],
  },
  {
    slug: "adjectives-and-hen",
    title: "Adjectives: 很, 太…了, 最 and Other Degree Words",
    description:
      "Why Chinese says 我很忙 and not 我是忙, what 很 really adds, and how to say very, too, not very, the most and a little bit.",
    level: "A1",
    hsk: "HSK 1",
    intro: [
      "In Chinese, adjectives act like verbs: 忙 means \"to be busy\" all by itself, so there's no 是. But a bare adjective sounds like a comparison (\"this one is big, that one is small\"), so in a plain statement Chinese adds 很 (hěn). Here 很 works as a link, not a real \"very\".",
      "Once you know that, the rest is a short list of degree words, each with its own slot and flavour.",
    ],
    sections: [
      {
        heading: "Subject + 很 + adjective",
        body: [
          "For a plain description, put 很 before the adjective. In the negative, 很 drops out and 不 takes its place. A bare adjective is fine in questions (忙吗？) and in contrasts.",
        ],
        examples: [
          { zh: "我很忙。", pinyin: "Wǒ hěn máng.", en: "I'm busy." },
          { zh: "今天很冷。", pinyin: "Jīntiān hěn lěng.", en: "It's cold today." },
          { zh: "我不忙。", pinyin: "Wǒ bù máng.", en: "I'm not busy." },
          { zh: "这个大，那个小。", pinyin: "Zhège dà, nàge xiǎo.", en: "This one is big, that one is small." },
        ],
      },
      {
        heading: "Very, really, too, the most",
        body: [
          "These words all go in 很's slot, right before the adjective. 太…了 frames the adjective: it means \"too\" in complaints and \"so\" in praise (太好了, great!). 真 is for exclaiming about what's in front of you. 不太 softens a negative.",
        ],
        table: {
          headers: ["Word", "Meaning", "Example"],
          rows: [
            ["很 hěn", "(link); very when stressed", "很好 good"],
            ["非常 fēicháng", "very, extremely", "非常好 excellent"],
            ["真 zhēn", "really, so! (exclaiming)", "真好 so good!"],
            ["太…了 tài…le", "too; so", "太贵了 too expensive"],
            ["不太 bú tài", "not very", "不太好 not very good"],
            ["最 zuì", "the most", "最好 the best"],
          ],
        },
        examples: [
          { zh: "他非常高兴。", pinyin: "Tā fēicháng gāoxìng.", en: "He's very happy." },
          { zh: "这儿的菜真好吃！", pinyin: "Zhèr de cài zhēn hǎochī!", en: "The food here is so good!" },
          { zh: "太贵了！", pinyin: "Tài guì le!", en: "That's too expensive!" },
          { zh: "我不太饿。", pinyin: "Wǒ bú tài è.", en: "I'm not very hungry." },
          { zh: "她最高。", pinyin: "Tā zuì gāo.", en: "She's the tallest." },
        ],
      },
      {
        heading: "一点儿: a little",
        body: [
          "一点儿 (yìdiǎnr) goes after an adjective to mean \"a bit more so\", often in requests: 便宜一点儿 (a bit cheaper). After a verb it means \"a little\" of something: 说一点儿中文. With 也 and a negative it means \"not at all\".",
        ],
        examples: [
          { zh: "便宜一点儿吧。", pinyin: "Piányi yìdiǎnr ba.", en: "Make it a bit cheaper." },
          { zh: "我会说一点儿中文。", pinyin: "Wǒ huì shuō yìdiǎnr Zhōngwén.", en: "I can speak a little Chinese." },
          { zh: "我一点儿也不累。", pinyin: "Wǒ yìdiǎnr yě bú lèi.", en: "I'm not tired at all." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "我是很忙。",
        right: "我很忙。",
        rightPinyin: "Wǒ hěn máng.",
        why: "Adjectives don't take 是. The adjective is the verb of the sentence.",
      },
      {
        wrong: "我不很忙。",
        right: "我不太忙。",
        rightPinyin: "Wǒ bú tài máng.",
        why: "不很 sounds stilted. The everyday way to say \"not very\" is 不太.",
      },
      {
        wrong: "我一点儿累。",
        right: "我有点儿累。",
        rightPinyin: "Wǒ yǒudiǎnr lèi.",
        why: "一点儿 goes after an adjective, not before. For \"a bit (too) tired\" Chinese uses 有点儿 before the adjective, covered at A2.",
      },
    ],
    faqs: [
      {
        q: "Does 很 always mean \"very\"?",
        a: "No. In 我很好 it's mostly a link and \"I'm fine\" is the right translation. If you really mean very, stress 很 when you speak, or use 非常 or 真.",
      },
      {
        q: "Why does 太好了 mean \"great\" when 太 means \"too\"?",
        a: "太…了 is about going past a normal level. With a negative quality (贵, expensive) that's a complaint; with a positive one it's enthusiasm. 太好了 and 太棒了 are everyday ways to cheer.",
      },
    ],
    related: ["shi-and-simple-sentences", "de-possession-and-description", "wanting-ability-likes"],
    lessons: ["zh-adjectives-hen", "zh-a1-really-very", "zh-a1-yidianr"],
  },
  {
    slug: "measure-words-and-numbers",
    title: "Measure Words, 这/那/哪, 二 vs 两, 些 and 第",
    description:
      "Why Chinese needs a measure word between every number and noun, the common ones (个, 本, 杯, 口, 只), this/that/which, when 二 becomes 两, and plurals with 些.",
    level: "A1",
    hsk: "HSK 1",
    intro: [
      "English uses \"counters\" with some nouns: a cup of tea, a sheet of paper, a head of cattle. Chinese uses one with every noun it counts. Between a number and a noun there is always a measure word: 三本书, three (volumes of) books.",
      "The same slot follows 这 (this), 那 (that) and 哪 (which), and the measure word you'll use most is the all-purpose 个.",
    ],
    sections: [
      {
        heading: "Number + measure word + noun",
        body: [
          "个 (ge) works for people and for most things without a measure word of their own. Others group nouns by shape or type: 本 for books, 杯 for cups of a drink, 口 for members of a family, 只 for many animals.",
          "个 is said with a neutral tone, but underneath it is fourth tone, so 一 before it becomes yí: 一个 yí ge.",
        ],
        table: {
          headers: ["Measure word", "Used for", "Example"],
          rows: [
            ["个 ge", "people, most things", "三个人 three people"],
            ["本 běn", "books, notebooks", "两本书 two books"],
            ["杯 bēi", "cups, glasses of", "一杯茶 a cup of tea"],
            ["口 kǒu", "family members", "四口人 four people (in a family)"],
            ["只 zhī", "many animals", "一只猫 a cat"],
          ],
        },
        examples: [
          { zh: "我有三个朋友。", pinyin: "Wǒ yǒu sān ge péngyou.", en: "I have three friends." },
          { zh: "我要一杯茶。", pinyin: "Wǒ yào yì bēi chá.", en: "I'd like a cup of tea." },
          { zh: "我家有四口人。", pinyin: "Wǒ jiā yǒu sì kǒu rén.", en: "There are four people in my family." },
        ],
      },
      {
        heading: "这, 那, 哪 + measure word",
        body: [
          "This, that and which also take a measure word: 这本书 (this book), 那个人 (that person), 哪个？ (which one?). A number goes between them: 这三本书, these three books.",
        ],
        examples: [
          { zh: "这本书很好。", pinyin: "Zhè běn shū hěn hǎo.", en: "This book is good." },
          { zh: "那个人是谁？", pinyin: "Nàge rén shì shéi?", en: "Who's that person?" },
          { zh: "你要哪个？", pinyin: "Nǐ yào nǎge?", en: "Which one do you want?" },
        ],
      },
      {
        heading: "二 or 两?",
        body: [
          "Both mean two. 两 (liǎng) is used to count things, so it goes before a measure word, and before 百, 千 and 万. 二 (èr) is used for the number itself: counting aloud, phone numbers, ordinals (第二) and inside bigger numbers (十二, 二十).",
        ],
        examples: [
          { zh: "两个人", pinyin: "liǎng ge rén", en: "two people" },
          { zh: "十二个人", pinyin: "shí'èr ge rén", en: "twelve people" },
          { zh: "两千块", pinyin: "liǎngqiān kuài", en: "two thousand yuan" },
        ],
      },
      {
        heading: "些, 第 and 次",
        body: [
          "些 (xiē) makes a vague plural: 这些 (these), 那些 (those), 哪些 (which ones), 一些 (some). It never takes a number. 第 (dì) makes ordinals: 第一 (first), 第二课 (lesson two). 次 (cì) counts occasions: 第一次 (the first time), 上次 (last time), 下次 (next time).",
        ],
        examples: [
          { zh: "这些书是我的。", pinyin: "Zhèxiē shū shì wǒ de.", en: "These books are mine." },
          { zh: "我想买一些水果。", pinyin: "Wǒ xiǎng mǎi yìxiē shuǐguǒ.", en: "I'd like to buy some fruit." },
          { zh: "这是我第一次来中国。", pinyin: "Zhè shì wǒ dì-yī cì lái Zhōngguó.", en: "This is my first time in China." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "三书",
        right: "三本书",
        rightPinyin: "sān běn shū",
        why: "A number can't touch a noun directly. Put a measure word in between.",
      },
      {
        wrong: "二个人",
        right: "两个人",
        rightPinyin: "liǎng ge rén",
        why: "Before a measure word, two is 两.",
      },
      {
        wrong: "这三些书",
        right: "这三本书 / 这些书",
        rightPinyin: "zhè sān běn shū / zhèxiē shū",
        why: "些 is already a vague plural and can't be counted. Use a real measure word with a number.",
      },
      {
        wrong: "第两课",
        right: "第二课",
        rightPinyin: "dì-èr kè",
        why: "Ordinals use the number itself, so it's always 第二.",
      },
    ],
    faqs: [
      {
        q: "Can I just use 个 for everything?",
        a: "You'll be understood, and native speakers fall back on 个 too. But the common specific ones (本, 杯, 口, and at B1 张, 条, 辆) sound natural, so learn each noun with its measure word.",
      },
      {
        q: "Do I need a measure word after 这 and 那 every time?",
        a: "Before a noun, yes in careful speech: 这个人, 那本书. In 这是… and 那是… (this is ..., that is ...) there's no noun right after, so no measure word.",
      },
    ],
    related: ["question-words", "de-possession-and-description", "you-have-and-there-is"],
    lessons: ["zh-numbers-0-99", "zh-numbers-money", "zh-a1-ordinals-ci", "zh-measure-words", "zh-a1-xie"],
  },
  {
    slug: "de-possession-and-description",
    title: "的: Possession and Description",
    description:
      "How 的 joins an owner or a description to a noun, when it drops out (我妈妈, 新书), and how 大的 means \"the big one\".",
    level: "A1",
    hsk: "HSK 1",
    intro: [
      "的 (de, neutral tone) is the most common character in Chinese. At A1 it does one job in two flavours: it attaches something to the front of a noun. That something can be an owner (我的书, my book) or a description (很大的房子, a very big house).",
      "The order is always the same: the extra information first, then 的, then the noun. It's like English 's, which also puts the owner first: Li Ming's mum is 李明的妈妈.",
    ],
    sections: [
      {
        heading: "Owner + 的 + thing",
        body: [
          "Any pronoun or noun can be the owner. 谁的 asks whose. If the noun is clear from context, it can be dropped: 这本书是我的 (this book is mine).",
        ],
        examples: [
          { zh: "这是我的书。", pinyin: "Zhè shì wǒ de shū.", en: "This is my book." },
          { zh: "老师的电话是多少？", pinyin: "Lǎoshī de diànhuà shì duōshao?", en: "What's the teacher's phone number?" },
          { zh: "这是谁的手机？——是我的。", pinyin: "Zhè shì shéi de shǒujī? — Shì wǒ de.", en: "Whose phone is this? — It's mine." },
        ],
      },
      {
        heading: "When 的 drops out",
        body: [
          "After a pronoun, 的 usually disappears before close relationships and before groups you belong to: 我妈妈 (my mum), 我朋友 (my friend), 我们学校 (our school), 我家 (my home). With a noun as owner it usually stays: 李明的妈妈.",
        ],
        examples: [
          { zh: "我妈妈是老师。", pinyin: "Wǒ māma shì lǎoshī.", en: "My mum is a teacher." },
          { zh: "我们学校很大。", pinyin: "Wǒmen xuéxiào hěn dà.", en: "Our school is big." },
          { zh: "李明的妈妈是医生。", pinyin: "Lǐ Míng de māma shì yīshēng.", en: "Li Ming's mum is a doctor." },
        ],
      },
      {
        heading: "Adjective + 的 + noun",
        body: [
          "A one-syllable adjective usually joins its noun directly: 新书 (new book), 好人 (good person). Add 很 or use a longer adjective and 的 is needed: 很大的房子, 漂亮的衣服.",
          "Leave the noun off and the phrase means \"the ... one\": 大的 (the big one). 别的 means \"other\", and 有的…有的… means \"some ..., others ...\".",
        ],
        examples: [
          { zh: "我想买一本新书。", pinyin: "Wǒ xiǎng mǎi yì běn xīn shū.", en: "I want to buy a new book." },
          { zh: "他们有一个很大的房子。", pinyin: "Tāmen yǒu yí ge hěn dà de fángzi.", en: "They have a very big house." },
          { zh: "我要大的。", pinyin: "Wǒ yào dà de.", en: "I want the big one." },
          { zh: "有的人喜欢茶，有的人喜欢咖啡。", pinyin: "Yǒude rén xǐhuan chá, yǒude rén xǐhuan kāfēi.", en: "Some people like tea, others like coffee." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "书的我",
        right: "我的书",
        rightPinyin: "wǒ de shū",
        why: "The owner always comes first. Don't copy English \"the book of mine\".",
      },
      {
        wrong: "很大房子",
        right: "很大的房子",
        rightPinyin: "hěn dà de fángzi",
        why: "Once the adjective has 很 in front of it, it needs 的 to attach to a noun.",
      },
      {
        wrong: "她是我的好的朋友。",
        right: "她是我的好朋友。",
        rightPinyin: "Tā shì wǒ de hǎo péngyou.",
        why: "One-syllable adjectives like 好 join the noun directly. Two 的 in a row sounds clumsy.",
      },
    ],
    faqs: [
      {
        q: "Is 我的妈妈 wrong?",
        a: "No, it's grammatical, but it sounds deliberate, as if you're stressing \"MY mum (not yours)\". In everyday speech 我妈妈 is normal.",
      },
      {
        q: "Are there other characters pronounced de?",
        a: "Yes: 地 (how something is done) and 得 (how well something is done), both at A2. All three are said de; only the writing differs.",
      },
    ],
    related: ["measure-words-and-numbers", "adjectives-and-hen", "you-have-and-there-is"],
    lessons: ["zh-possessive-de", "zh-a1-adjective-de"],
  },
  {
    slug: "you-have-and-there-is",
    title: "有, 没有 and 和: Having, There Is and And",
    description:
      "有 means both \"have\" and \"there is\", it's negated only with 没, and 和 joins nouns but never sentences. Plus when to use 有 and when to use 在.",
    level: "A1",
    hsk: "HSK 1",
    intro: [
      "有 (yǒu) is one of the first verbs you learn and one of the most useful: it means \"to have\", and with a place in front of it, \"there is\". It has one quirk that catches every learner: its negative is 没有, never 不有.",
      "This guide also covers 和 (hé, and), which is narrower than English \"and\".",
    ],
    sections: [
      {
        heading: "有 and 没有: to have",
        body: [
          "Person + 有 + thing. The negative is 没有 (méiyǒu), or casually just 没. The A-not-A question is 有没有.",
        ],
        examples: [
          { zh: "我有一个哥哥。", pinyin: "Wǒ yǒu yí ge gēge.", en: "I have an older brother." },
          { zh: "我没有车。", pinyin: "Wǒ méiyǒu chē.", en: "I don't have a car." },
          { zh: "你有没有中文书？", pinyin: "Nǐ yǒu méiyǒu Zhōngwén shū?", en: "Do you have any Chinese books?" },
        ],
      },
      {
        heading: "Place + 有: there is",
        body: [
          "Put the place first, then 有, then the thing: \"on the table has a book\". English puts \"there is\" first and the place last; Chinese reverses it.",
        ],
        examples: [
          { zh: "桌子上有一本书。", pinyin: "Zhuōzi shang yǒu yì běn shū.", en: "There's a book on the table." },
          { zh: "学校旁边有一个银行。", pinyin: "Xuéxiào pángbiān yǒu yí ge yínháng.", en: "There's a bank next to the school." },
          { zh: "这儿没有人。", pinyin: "Zhèr méiyǒu rén.", en: "There's nobody here." },
        ],
      },
      {
        heading: "有 or 在?",
        body: [
          "Use 有 to introduce something new: \"there is a bank next to the school\". Use 在 to say where a known thing is: \"my book is on the table\". With 有 the thing comes last and often has 一个; with 在 the thing comes first and is something both speakers know about.",
        ],
        table: {
          headers: ["", "Pattern", "Example"],
          rows: [
            ["New thing", "place + 有 + thing", "桌子上有一本书。 There's a book on the table."],
            ["Known thing", "thing + 在 + place", "我的书在桌子上。 My book is on the table."],
          ],
        },
      },
      {
        heading: "和: and (between nouns)",
        body: [
          "和 joins nouns and pronouns: 我和你, 爸爸和妈妈. It doesn't join two sentences. To link clauses, Chinese often uses nothing at all, just a comma, or an adverb like 也 (also) or 还 (as well).",
        ],
        examples: [
          { zh: "我有一个哥哥和一个妹妹。", pinyin: "Wǒ yǒu yí ge gēge hé yí ge mèimei.", en: "I have an older brother and a younger sister." },
          { zh: "我和我朋友都是学生。", pinyin: "Wǒ hé wǒ péngyou dōu shì xuésheng.", en: "My friend and I are both students." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "我不有钱。",
        right: "我没有钱。",
        rightPinyin: "Wǒ méiyǒu qián.",
        why: "有 is the one verb that is never negated with 不. Always 没有 or 没.",
      },
      {
        wrong: "有一本书在桌子上。",
        right: "桌子上有一本书。",
        rightPinyin: "Zhuōzi shang yǒu yì běn shū.",
        why: "In a \"there is\" sentence the place comes first and the thing last.",
      },
      {
        wrong: "我是学生和我住在北京。",
        right: "我是学生，我住在北京。",
        rightPinyin: "Wǒ shì xuésheng, wǒ zhù zài Běijīng.",
        why: "和 joins nouns, not sentences. Between clauses a comma is enough.",
      },
    ],
    faqs: [
      {
        q: "Is there a difference between 没有 and 没?",
        a: "Not in meaning. 没 alone is more casual: 我没钱. At the end of a sentence or as a one-word answer, say the full 没有.",
      },
      {
        q: "Does 没有 also mean \"didn't\"?",
        a: "Yes, 没(有) + verb negates a completed action: 我没去 (I didn't go). See the guide on 了 and 没.",
      },
    ],
    related: ["zai-and-position-words", "le-and-mei", "measure-words-and-numbers"],
    lessons: ["zh-family-you", "zh-position-words"],
  },
  {
    slug: "zai-and-position-words",
    title: "在 and Position Words: Where Things Are and Where Things Happen",
    description:
      "在 as \"to be at\", 在 + place before the verb (我在银行工作), and the position words that follow a noun: 上, 下, 里, 旁边, 前面, 后面, 左边, 右边.",
    level: "A1",
    hsk: "HSK 1",
    intro: [
      "English says \"I work at a bank\", with the place at the end. Chinese says 我在银行工作, \"I at bank work\": the place comes before the action. This is one of the biggest word-order differences between the two languages, and getting it right instantly makes you sound more natural.",
      "The other thing to know is that \"on\", \"in\" and \"under\" come after the noun in Chinese, not before it: 桌子上 is \"table on\".",
    ],
    sections: [
      {
        heading: "在 as a verb: to be at",
        body: [
          "Person or thing + 在 + place says where it is. Negate with 不在. Ask with 在哪儿.",
        ],
        examples: [
          { zh: "我在家。", pinyin: "Wǒ zài jiā.", en: "I'm at home." },
          { zh: "老师在哪儿？", pinyin: "Lǎoshī zài nǎr?", en: "Where's the teacher?" },
          { zh: "他不在。", pinyin: "Tā bú zài.", en: "He isn't here." },
        ],
      },
      {
        heading: "在 + place + verb",
        body: [
          "When something happens somewhere, the place goes before the verb. The one common exception is 住 (to live), which can also take the place after it: 我住在北京 or 我在北京住.",
        ],
        examples: [
          { zh: "我在银行工作。", pinyin: "Wǒ zài yínháng gōngzuò.", en: "I work at a bank." },
          { zh: "我们在家吃饭。", pinyin: "Wǒmen zài jiā chī fàn.", en: "We eat at home." },
          { zh: "他住在上海。", pinyin: "Tā zhù zài Shànghǎi.", en: "He lives in Shanghai." },
        ],
      },
      {
        heading: "Position words after the noun",
        body: [
          "On, under, in and next to are words that follow the noun. The short forms 上, 下 and 里 attach directly and are said with a neutral tone: 桌子上 (on the table), 包里 (in the bag). The longer -边 and -面 forms can also stand alone: 旁边 (next to it), 前面 (in front).",
          "An ordinary object needs a position word to become a place: 书在桌子上, not 书在桌子. Countries and cities are already places and never take 里: 在中国.",
        ],
        table: {
          headers: ["Short", "Longer forms", "Meaning"],
          rows: [
            ["上", "上边 / 上面", "on, above"],
            ["下", "下边 / 下面", "under, below"],
            ["里", "里边 / 里面", "in, inside"],
            ["", "外边 / 外面", "outside"],
            ["", "前边 / 前面", "in front"],
            ["", "后边 / 后面", "behind"],
            ["", "左边 / 右边", "left / right"],
            ["", "旁边, 中间", "next to, in the middle"],
          ],
        },
        examples: [
          { zh: "手机在包里。", pinyin: "Shǒujī zài bāo li.", en: "The phone is in the bag." },
          { zh: "超市在银行旁边。", pinyin: "Chāoshì zài yínháng pángbiān.", en: "The supermarket is next to the bank." },
          { zh: "我家在学校后面。", pinyin: "Wǒ jiā zài xuéxiào hòumiàn.", en: "My home is behind the school." },
          { zh: "洗手间在左边。", pinyin: "Xǐshǒujiān zài zuǒbian.", en: "The toilet is on the left." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "我工作在银行。",
        right: "我在银行工作。",
        rightPinyin: "Wǒ zài yínháng gōngzuò.",
        why: "Where an action happens goes before the verb.",
      },
      {
        wrong: "书在桌子。",
        right: "书在桌子上。",
        rightPinyin: "Shū zài zhuōzi shang.",
        why: "An object isn't a place by itself. Add a position word: on the table, in the bag.",
      },
      {
        wrong: "我在中国里。",
        right: "我在中国。",
        rightPinyin: "Wǒ zài Zhōngguó.",
        why: "Countries and cities are already places, so they don't take 里.",
      },
    ],
    faqs: [
      {
        q: "Is there a difference between 前边 and 前面?",
        a: "No. -边 (bian) and -面 (miàn) forms mean the same; -边 is a little more colloquial. 里边 and 里面, 外边 and 外面 work the same way.",
      },
      {
        q: "Can 在 mean \"in the middle of doing\"?",
        a: "Yes, at A2: 我在吃饭 means \"I'm eating (right now)\". That's 在 before a verb with no place. See the A2 guide on actions in progress.",
      },
    ],
    related: ["you-have-and-there-is", "word-order-time-and-place", "question-words"],
    lessons: ["zh-places-zai", "zh-position-words", "zh-a1-bian-words"],
  },
  {
    slug: "word-order-time-and-place",
    title: "Word Order: Time, Place, How and Who With",
    description:
      "The order of a Chinese sentence: time before the verb, 也 and 都 before the verb, then who with, how and where, and the action last. Covers transport, 去 + place + verb and 跟…一起.",
    level: "A1",
    hsk: "HSK 1",
    intro: [
      "English piles details up after the verb: \"I'm going to school by subway with my friend tomorrow\". Chinese puts them all before the verb, and the verb and its object close the sentence: 我明天跟朋友坐地铁去学校.",
      "Learn the slots once and you can build long sentences without guessing.",
    ],
    sections: [
      {
        heading: "The slots",
        body: [
          "Not every sentence uses every slot, but the order stays the same. Time can also go first, before the subject, to set the scene.",
        ],
        table: {
          headers: ["Subject", "Time", "Adverb", "With whom", "How / where", "Verb + object"],
          rows: [
            ["我", "明天", "也", "跟朋友", "坐地铁", "去学校"],
            ["他", "每天", "都", "", "在家", "吃早饭"],
          ],
        },
        examples: [
          { zh: "我明天去北京。", pinyin: "Wǒ míngtiān qù Běijīng.", en: "I'm going to Beijing tomorrow." },
          { zh: "明天我去北京。", pinyin: "Míngtiān wǒ qù Běijīng.", en: "Tomorrow I'm going to Beijing." },
          { zh: "他每天都在家吃早饭。", pinyin: "Tā měi tiān dōu zài jiā chī zǎofàn.", en: "He has breakfast at home every day." },
        ],
      },
      {
        heading: "也, 都 and how often",
        body: [
          "也 (also) and 都 (all, both) sit right after the subject, before the verb, never at the start or end. 都 refers back to a plural subject: 我们都 means \"we all\". When both appear, 也 comes first: 我们也都是学生.",
          "Frequency words do the same: 常常 (often), 有时候 (sometimes), 不常 (not often) go before the verb.",
        ],
        examples: [
          { zh: "我也是学生。", pinyin: "Wǒ yě shì xuésheng.", en: "I'm a student too." },
          { zh: "我们都喜欢喝茶。", pinyin: "Wǒmen dōu xǐhuan hē chá.", en: "We all like tea." },
          { zh: "我常常喝咖啡。", pinyin: "Wǒ chángcháng hē kāfēi.", en: "I often drink coffee." },
          { zh: "他有时候在家工作。", pinyin: "Tā yǒu shíhou zài jiā gōngzuò.", en: "He sometimes works from home." },
        ],
      },
      {
        heading: "Going places: 去, 来, 回 and 坐",
        body: [
          "去 (go), 来 (come) and 回 (return) take the place directly, with no word for \"to\": 去学校, 回家. How you travel comes first, with 坐 (sit, ride) + vehicle: 坐地铁去学校, \"ride the subway, go to school\". Why you go comes after: 去超市买东西, \"go to the supermarket, buy things\".",
          "用 + tool works the same way: 用筷子吃饭 (eat with chopsticks).",
        ],
        examples: [
          { zh: "我坐地铁去学校。", pinyin: "Wǒ zuò dìtiě qù xuéxiào.", en: "I go to school by subway." },
          { zh: "我去超市买东西。", pinyin: "Wǒ qù chāoshì mǎi dōngxi.", en: "I'm going to the supermarket to do some shopping." },
          { zh: "他用筷子吃饭。", pinyin: "Tā yòng kuàizi chī fàn.", en: "He eats with chopsticks." },
        ],
      },
      {
        heading: "跟…一起: with someone",
        body: [
          "跟 (or 和) + person + 一起 + verb: \"with someone, together, do\". Adverbs like 也 and 不 go before 跟, not before the verb.",
        ],
        examples: [
          { zh: "我跟朋友一起吃饭。", pinyin: "Wǒ gēn péngyou yìqǐ chī fàn.", en: "I'm eating with a friend." },
          { zh: "我不跟他一起去。", pinyin: "Wǒ bù gēn tā yìqǐ qù.", en: "I'm not going with him." },
          { zh: "我们一起去吧！", pinyin: "Wǒmen yìqǐ qù ba!", en: "Let's go together!" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "我去北京明天。",
        right: "我明天去北京。",
        rightPinyin: "Wǒ míngtiān qù Běijīng.",
        why: "Time words go before the verb (or before the subject), never at the end.",
      },
      {
        wrong: "也我是学生。",
        right: "我也是学生。",
        rightPinyin: "Wǒ yě shì xuésheng.",
        why: "也 and 都 are adverbs: they sit after the subject and before the verb.",
      },
      {
        wrong: "我去学校坐地铁。",
        right: "我坐地铁去学校。",
        rightPinyin: "Wǒ zuò dìtiě qù xuéxiào.",
        why: "How you travel comes before where you go.",
      },
      {
        wrong: "我吃饭跟朋友。",
        right: "我跟朋友一起吃饭。",
        rightPinyin: "Wǒ gēn péngyou yìqǐ chī fàn.",
        why: "\"With someone\" goes before the verb, like every other detail.",
      },
    ],
    faqs: [
      {
        q: "Is 我明天去 or 明天我去 better?",
        a: "Both are correct. Putting the time first sets the scene or contrasts it with another time (明天我去，后天他去). After the subject is the neutral choice.",
      },
      {
        q: "Why does 都 come after 我们, not before?",
        a: "都 is an adverb that looks back at the plural before it and says it applies to all of them. Adverbs in Chinese sit before the verb, so 都 lands between the subject and the verb.",
      },
    ],
    related: ["zai-and-position-words", "first-then-again-still", "question-words"],
    lessons: ["zh-questions-ma-ne-ye-dou", "zh-dates", "zh-a1-how-often", "zh-getting-around", "zh-a1-go-and-do", "zh-a1-together"],
  },
  {
    slug: "first-then-again-still",
    title: "先, 再, 还 and 最后: First, Then, Again and Still",
    description:
      "Putting actions in order with 先…再… and 最后, 再 for \"again\" and \"then\" in the future, 还 for \"still\" and \"also\", and 马上 and 一会儿.",
    level: "A1",
    hsk: "HSK 1",
    intro: [
      "These little adverbs do a lot of work in everyday Chinese: giving instructions, making plans, ordering food. Like all adverbs they go before the verb, after the subject.",
      "The one to watch is 再: it means \"again\" or \"then\", but only about things that haven't happened yet.",
    ],
    sections: [
      {
        heading: "先…再…: first ..., then ...",
        body: [
          "先 (xiān) marks what happens first; 再 (zài) marks what comes after it. This pair is for plans, suggestions and instructions. 最后 (zuìhòu) means \"finally, in the end\".",
        ],
        examples: [
          { zh: "我们先吃饭，再看电影。", pinyin: "Wǒmen xiān chī fàn, zài kàn diànyǐng.", en: "Let's eat first, then watch a film." },
          { zh: "你先走吧。", pinyin: "Nǐ xiān zǒu ba.", en: "You go ahead (first)." },
          { zh: "最后我们回家了。", pinyin: "Zuìhòu wǒmen huí jiā le.", en: "In the end we went home." },
        ],
      },
      {
        heading: "再: again (in the future)",
        body: [
          "再 + verb means \"again\" or \"some more\" about an action still to come. That's why goodbye is 再见, \"see again\".",
        ],
        examples: [
          { zh: "请再说一次。", pinyin: "Qǐng zài shuō yí cì.", en: "Please say it again." },
          { zh: "明天再来。", pinyin: "Míngtiān zài lái.", en: "Come back tomorrow." },
          { zh: "再喝一杯吧。", pinyin: "Zài hē yì bēi ba.", en: "Have another cup." },
        ],
      },
      {
        heading: "还: still, also",
        body: [
          "还 (hái) means \"still\" (他还在学校, he's still at school) or \"also, in addition\" when you add to a list: 我要一杯茶，还要一个包子. 还有 opens an extra point: \"and also ...\".",
        ],
        examples: [
          { zh: "他还在学校。", pinyin: "Tā hái zài xuéxiào.", en: "He's still at school." },
          { zh: "我要一杯茶，还要一个包子。", pinyin: "Wǒ yào yì bēi chá, hái yào yí ge bāozi.", en: "I'd like a cup of tea, and a steamed bun as well." },
        ],
      },
      {
        heading: "马上 and 一会儿",
        body: [
          "马上 (mǎshàng) + verb means right away. 一会儿 (yíhuìr) is \"a moment\": before the verb it means \"in a moment\", after it \"for a moment\".",
        ],
        examples: [
          { zh: "我马上来。", pinyin: "Wǒ mǎshàng lái.", en: "I'm coming right now." },
          { zh: "请等一会儿。", pinyin: "Qǐng děng yíhuìr.", en: "Please wait a moment." },
          { zh: "我一会儿去。", pinyin: "Wǒ yíhuìr qù.", en: "I'll go in a moment." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "请说再一次。",
        right: "请再说一次。",
        rightPinyin: "Qǐng zài shuō yí cì.",
        why: "再 is an adverb, so it goes before the verb.",
      },
      {
        wrong: "我们先吃饭，然后再看电影了。",
        right: "我们先吃饭，再看电影。",
        rightPinyin: "Wǒmen xiān chī fàn, zài kàn diànyǐng.",
        why: "先…再… is for plans, so there's nothing completed and no 了 at the end.",
      },
      {
        wrong: "我要一杯茶，和一个包子。",
        right: "我要一杯茶，还要一个包子。",
        rightPinyin: "Wǒ yào yì bēi chá, hái yào yí ge bāozi.",
        why: "To add a second thing after a comma, use 还 + verb. 和 only joins two nouns directly: 一杯茶和一个包子.",
      },
    ],
    faqs: [
      {
        q: "What about \"again\" for something that already happened?",
        a: "That's 又 (yòu): 他又来了 (he came again). 再 looks forward, 又 looks back. The two are compared in the B1 guide on 又 and 再.",
      },
      {
        q: "Is 再 in 再见 the same word?",
        a: "Yes. 再见 is literally \"again see\": see you again.",
      },
    ],
    related: ["word-order-time-and-place", "le-and-mei", "requests-and-suggestions"],
    lessons: ["zh-a1-ordinals-ci", "zh-a1-how-often"],
  },
  {
    slug: "le-and-mei",
    title: "了 and 没: Finished Actions, Not Yet and Change",
    description:
      "了 isn't a past tense: it marks a completed action or a new situation. How to use verb + 了, sentence-final 了, 没 for \"didn't\" (with no 了) and 还没 for \"not yet\".",
    level: "A1",
    hsk: "HSK 1",
    intro: [
      "Chinese verbs have no tenses. Time words (昨天, 明天) tell you when; 了 (le) tells you something else: that an action is complete, or that a situation has changed. Because English uses the past tense for both, learners tend to treat 了 as \"the past tense marker\" and put it everywhere. This guide shows where it really goes.",
    ],
    sections: [
      {
        heading: "了 for a completed action",
        body: [
          "There are two common positions. Sentence-final 了 reports that something happened: 我吃饭了 (I've eaten). Verb + 了 + an object with a number or description focuses on what was done: 我买了三本书 (I bought three books).",
          "If the object after verb-了 is bare (我买了书), the sentence sounds unfinished, as if \"... and then\" should follow. Either give the object a number or move 了 to the end.",
          "Describing a past state or a habit takes no 了: 我昨天很忙 (I was busy yesterday).",
        ],
        examples: [
          { zh: "我吃饭了。", pinyin: "Wǒ chī fàn le.", en: "I've eaten." },
          { zh: "我买了三本书。", pinyin: "Wǒ mǎi le sān běn shū.", en: "I bought three books." },
          { zh: "他昨天去了上海。", pinyin: "Tā zuótiān qù le Shànghǎi.", en: "He went to Shanghai yesterday." },
          { zh: "我昨天很忙。", pinyin: "Wǒ zuótiān hěn máng.", en: "I was busy yesterday." },
        ],
      },
      {
        heading: "没 for \"didn't\" and 还没 for \"not yet\"",
        body: [
          "To say an action didn't happen, use 没 (or 没有) before the verb, and drop 了: the two cancel each other out. 不 is for \"won't\" and \"don't (usually)\". 还没 + verb means \"not yet\", often with 呢 at the end.",
          "To ask, add 吗 or 没有: 你吃饭了吗？ / 你吃饭了没有？ Answer 吃了 or 没吃.",
        ],
        examples: [
          { zh: "我昨天没去。", pinyin: "Wǒ zuótiān méi qù.", en: "I didn't go yesterday." },
          { zh: "你吃饭了吗？——没吃。", pinyin: "Nǐ chī fàn le ma? — Méi chī.", en: "Have you eaten? — No, I haven't." },
          { zh: "我还没吃饭呢。", pinyin: "Wǒ hái méi chī fàn ne.", en: "I haven't eaten yet." },
        ],
      },
      {
        heading: "了 for a new situation",
        body: [
          "At the end of a sentence, 了 can also mean \"now\": things have changed. 下雨了 is \"it's started raining\", 我不去了 is \"I'm not going any more\" (change of plan).",
        ],
        examples: [
          { zh: "下雨了。", pinyin: "Xià yǔ le.", en: "It's raining now." },
          { zh: "天冷了。", pinyin: "Tiān lěng le.", en: "It's got cold." },
          { zh: "我不去了。", pinyin: "Wǒ bú qù le.", en: "I'm not going after all." },
          { zh: "他二十岁了。", pinyin: "Tā èrshí suì le.", en: "He's twenty now." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "我没去了。",
        right: "我没去。",
        rightPinyin: "Wǒ méi qù.",
        why: "没 already says the action didn't happen, so there's no completed action for 了 to mark.",
      },
      {
        wrong: "我昨天不去。",
        right: "我昨天没去。",
        rightPinyin: "Wǒ zuótiān méi qù.",
        why: "不 is for will not or don't usually. For something that didn't happen, use 没.",
      },
      {
        wrong: "我昨天很忙了。",
        right: "我昨天很忙。",
        rightPinyin: "Wǒ zuótiān hěn máng.",
        why: "A past state needs no 了. 昨天 already sets the time; 了 here would mean \"I've become busy\".",
      },
      {
        wrong: "我买了书。",
        right: "我买了一本书。 / 我买书了。",
        rightPinyin: "Wǒ mǎi le yì běn shū. / Wǒ mǎi shū le.",
        why: "A bare object after verb + 了 sounds unfinished. Add a number, or put 了 at the end.",
      },
    ],
    faqs: [
      {
        q: "Can 了 be used about the future?",
        a: "Yes, because it marks completion, not past time. 明天吃了饭再走 means \"tomorrow, after eating, (then) leave\". The meal will be complete before the leaving.",
      },
      {
        q: "Can a sentence have two 了?",
        a: "Yes: 我学了两年了 means \"I've been studying for two years (and still am)\". That's a B1 pattern; see the B1 guide on time spans.",
      },
    ],
    related: ["you-have-and-there-is", "first-then-again-still", "verbs-and-their-objects"],
    lessons: ["zh-le-completed-actions", "zh-weather-likes"],
  },
  {
    slug: "wanting-ability-likes",
    title: "想, 要, 会, 能, 喜欢 and 觉得: Wanting, Ability, Likes and Opinions",
    description:
      "The A1 helping verbs: 想 vs 要 for wanting, 会 vs 能 for can, 喜欢 + noun or verb for likes, and 觉得 for giving an opinion.",
    level: "A1",
    hsk: "HSK 1",
    intro: [
      "English has \"want\" and \"can\"; Chinese splits each in two. 想 and 要 both mean want, but differ in strength. 会 and 能 both mean can, but one is about skills you've learned and the other about whether you're able or allowed right now.",
      "All of these go before the main verb, and all are negated with 不.",
    ],
    sections: [
      {
        heading: "想 and 要: want",
        body: [
          "想 (xiǎng) + verb is \"would like to\": soft and polite. 要 (yào) is firmer and also takes a noun directly, which makes it the word for ordering. The negative of both is usually 不想, because 不要 means \"don't!\".",
          "想 + a person (no verb) means \"to miss\": 我想你 is \"I miss you\".",
        ],
        examples: [
          { zh: "我想去中国。", pinyin: "Wǒ xiǎng qù Zhōngguó.", en: "I'd like to go to China." },
          { zh: "我要一杯咖啡。", pinyin: "Wǒ yào yì bēi kāfēi.", en: "I'd like a coffee." },
          { zh: "我不想去。", pinyin: "Wǒ bù xiǎng qù.", en: "I don't want to go." },
        ],
      },
      {
        heading: "会 and 能: can",
        body: [
          "会 (huì) is a skill you've learned: swimming, driving, a language. 能 (néng) is being able in the circumstances (time, health) or being allowed.",
        ],
        examples: [
          { zh: "我会游泳。", pinyin: "Wǒ huì yóuyǒng.", en: "I can swim. (I know how.)" },
          { zh: "我今天不能游泳。", pinyin: "Wǒ jīntiān bù néng yóuyǒng.", en: "I can't swim today." },
          { zh: "你会说中文吗？", pinyin: "Nǐ huì shuō Zhōngwén ma?", en: "Can you speak Chinese?" },
          { zh: "这儿能拍照吗？", pinyin: "Zhèr néng pāizhào ma?", en: "Can I take photos here?" },
        ],
      },
      {
        heading: "喜欢: like",
        body: [
          "喜欢 (xǐhuan) takes a noun or a verb phrase. Make it stronger with 很 or 最, or say 不太喜欢 for \"don't really like\".",
        ],
        examples: [
          { zh: "我喜欢茶。", pinyin: "Wǒ xǐhuan chá.", en: "I like tea." },
          { zh: "我很喜欢看书。", pinyin: "Wǒ hěn xǐhuan kàn shū.", en: "I really like reading." },
          { zh: "我最喜欢夏天。", pinyin: "Wǒ zuì xǐhuan xiàtiān.", en: "I like summer best." },
        ],
      },
      {
        heading: "觉得: I think",
        body: [
          "觉得 (juéde) + a whole clause gives your opinion or feeling. The negative usually goes inside the clause: 我觉得不难 (I don't think it's hard).",
        ],
        examples: [
          { zh: "我觉得中文不太难。", pinyin: "Wǒ juéde Zhōngwén bú tài nán.", en: "I don't think Chinese is that hard." },
          { zh: "你觉得怎么样？", pinyin: "Nǐ juéde zěnmeyàng?", en: "What do you think?" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "我想咖啡。",
        right: "我想喝咖啡。 / 我要咖啡。",
        rightPinyin: "Wǒ xiǎng hē kāfēi. / Wǒ yào kāfēi.",
        why: "想 needs a verb after it. 想 + noun means \"miss\", so 我想咖啡 sounds like you're pining for coffee.",
      },
      {
        wrong: "我不要去。 (meaning \"I don't want to go\")",
        right: "我不想去。",
        rightPinyin: "Wǒ bù xiǎng qù.",
        why: "不要 + verb is a command: \"don't go!\". For \"don't want to\", use 不想.",
      },
      {
        wrong: "我觉得是很好。",
        right: "我觉得很好。",
        rightPinyin: "Wǒ juéde hěn hǎo.",
        why: "The clause after 觉得 follows the normal rules, so no 是 before an adjective.",
      },
    ],
    faqs: [
      {
        q: "Can 会 mean \"will\"?",
        a: "Yes: 明天会下雨 means \"it will (probably) rain tomorrow\". That use of 会 for predictions is taught at A2.",
      },
      {
        q: "Is 要 rude when ordering?",
        a: "No. 我要… is the normal way to order in shops and restaurants. 我想要… is a touch softer, and 请给我… (please give me) is polite.",
      },
    ],
    related: ["adjectives-and-hen", "requests-and-suggestions", "verbs-and-their-objects"],
    lessons: ["zh-wanting-ordering", "zh-ability-hui-neng", "zh-weather-likes", "zh-a1-juede"],
  },
  {
    slug: "verbs-and-their-objects",
    title: "Verbs and Their Objects: 说中文, 知道 vs 认识, 看 vs 看见, 给 and 告诉",
    description:
      "Verb-object words like 说话 and 吃饭, the three \"knows\" (知道, 认识, 会), look vs see (看 vs 看见), and verbs with two objects: 给我一杯茶.",
    level: "A1",
    hsk: "HSK 1",
    intro: [
      "Many everyday Chinese verbs come with an object built in. 吃饭 is \"eat (rice)\", 说话 is \"speak (words)\", 睡觉 is \"sleep (a sleep)\". When you name a specific object you replace the built-in one, rather than adding to it.",
      "This guide also sorts out three pairs where English uses one verb and Chinese uses two.",
    ],
    sections: [
      {
        heading: "Verb + object words",
        body: [
          "说话 (talk), 吃饭 (eat, have a meal), 睡觉 (sleep), 写字 (write), 唱歌 (sing) are verbs with their object already inside. \"I'm eating\" is 我在吃饭, not just 我在吃. To say what language you speak, swap the object: 说中文, not 说话中文.",
        ],
        examples: [
          { zh: "他在说话。", pinyin: "Tā zài shuō huà.", en: "He's talking." },
          { zh: "他说中文。", pinyin: "Tā shuō Zhōngwén.", en: "He speaks Chinese." },
          { zh: "我们去吃饭吧。", pinyin: "Wǒmen qù chī fàn ba.", en: "Let's go and eat." },
        ],
      },
      {
        heading: "Three kinds of knowing",
        body: [
          "知道 (zhīdao) is knowing a fact. 认识 (rènshi) is knowing a person, a place or a character, being acquainted with it. 会 is knowing how to do something. Related verbs: 明白 (understand), 记得 (remember), 忘 (forget).",
        ],
        table: {
          headers: ["Verb", "You know ...", "Example"],
          rows: [
            ["知道", "a fact", "我知道他的名字。 I know his name."],
            ["认识", "a person, a character", "我认识他。 I know him."],
            ["会", "how to do something", "我会开车。 I can drive."],
          ],
        },
        examples: [
          { zh: "我不知道。", pinyin: "Wǒ bù zhīdao.", en: "I don't know." },
          { zh: "你认识这个字吗？", pinyin: "Nǐ rènshi zhège zì ma?", en: "Do you know this character?" },
        ],
      },
      {
        heading: "Look and see: 看 vs 看见",
        body: [
          "看 (kàn) is the action of looking or watching. 看见 (kànjiàn) is actually seeing: the result. The same split works for 听 / 听到 (listen / hear) and 找 / 找到 (look for / find). Negate the result with 没: 没看见, 没找到.",
        ],
        examples: [
          { zh: "你看见我的手机了吗？", pinyin: "Nǐ kànjiàn wǒ de shǒujī le ma?", en: "Have you seen my phone?" },
          { zh: "我找了，可是没找到。", pinyin: "Wǒ zhǎo le, kěshì méi zhǎodào.", en: "I looked, but I didn't find it." },
          { zh: "我听到了。", pinyin: "Wǒ tīngdào le.", en: "I heard it." },
        ],
      },
      {
        heading: "Two objects: 给, 告诉, 教, 问",
        body: [
          "A few verbs take a person and a thing, in that order: verb + person + thing. English does the same in \"give me a cup of tea\", but Chinese never switches to \"give a cup of tea to me\".",
        ],
        examples: [
          { zh: "请给我一杯茶。", pinyin: "Qǐng gěi wǒ yì bēi chá.", en: "Please give me a cup of tea." },
          { zh: "告诉我你的名字。", pinyin: "Gàosu wǒ nǐ de míngzi.", en: "Tell me your name." },
          { zh: "王老师教我们中文。", pinyin: "Wáng lǎoshī jiāo wǒmen Zhōngwén.", en: "Teacher Wang teaches us Chinese." },
          { zh: "我问你一个问题。", pinyin: "Wǒ wèn nǐ yí ge wèntí.", en: "Let me ask you a question." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "我说话中文。",
        right: "我说中文。",
        rightPinyin: "Wǒ shuō Zhōngwén.",
        why: "说话 already has its object (话). Replace it with the language instead of adding one.",
      },
      {
        wrong: "我知道李明。 (meaning you've met him)",
        right: "我认识李明。",
        rightPinyin: "Wǒ rènshi Lǐ Míng.",
        why: "Knowing a person is 认识. 我知道李明 only means you've heard of him.",
      },
      {
        wrong: "我看了，可是没看。",
        right: "我看了，可是没看见。",
        rightPinyin: "Wǒ kàn le, kěshì méi kànjiàn.",
        why: "Looking and seeing are different verbs. What you failed to do was see: 没看见.",
      },
      {
        wrong: "给一杯茶我。",
        right: "给我一杯茶。",
        rightPinyin: "Gěi wǒ yì bēi chá.",
        why: "With two objects, the person comes first, then the thing.",
      },
    ],
    faqs: [
      {
        q: "What's the difference between 看见 and 见?",
        a: "看见 is seeing something with your eyes. 见 on its own is mostly meeting people: 明天见 (see you tomorrow), 见面 (meet up).",
      },
      {
        q: "Is 听到 the same as 听见?",
        a: "Almost. Both mean \"hear\". 听见 is purely about the sound reaching you; 听到 is a little broader (听到消息, hear the news). Either works in most sentences.",
      },
    ],
    related: ["wanting-ability-likes", "le-and-mei", "word-order-time-and-place"],
    lessons: ["zh-a1-languages", "zh-a1-knowing", "zh-a1-see-find", "zh-a1-give-tell"],
  },
  {
    slug: "requests-and-suggestions",
    title: "Requests and Suggestions: 请, 吧, 别, 不用 and 帮",
    description:
      "Asking politely with 请, suggesting with 吧, telling someone not to with 别, saying \"no need\" with 不用, and asking for help with 帮 + person + verb.",
    level: "A1",
    hsk: "HSK 1",
    intro: [
      "Chinese has no special command form of the verb: a bare verb is already an instruction (坐！ Sit!). Politeness and tone come from small words around it: 请 in front makes it polite, 吧 at the end turns it into a suggestion, 别 makes it a \"don't\".",
    ],
    sections: [
      {
        heading: "请: please",
        body: [
          "请 (qǐng) + verb is a polite invitation or request: 请坐 (please sit down), 请进 (come in). 请问 (qǐngwèn) means \"excuse me, may I ask\" and opens a question to a stranger.",
        ],
        examples: [
          { zh: "请坐。", pinyin: "Qǐng zuò.", en: "Please sit down." },
          { zh: "请喝茶。", pinyin: "Qǐng hē chá.", en: "Please have some tea." },
          { zh: "请问，银行在哪儿？", pinyin: "Qǐngwèn, yínháng zài nǎr?", en: "Excuse me, where's the bank?" },
        ],
      },
      {
        heading: "吧: let's, OK?",
        body: [
          "吧 (ba) at the end softens a sentence into a suggestion: 我们走吧 (let's go). After a statement it can also mean \"I suppose\", asking for confirmation: 你是李明吧？ (You're Li Ming, I take it?)",
        ],
        examples: [
          { zh: "我们走吧。", pinyin: "Wǒmen zǒu ba.", en: "Let's go." },
          { zh: "你来吧。", pinyin: "Nǐ lái ba.", en: "Why don't you come?" },
          { zh: "你是李明吧？", pinyin: "Nǐ shì Lǐ Míng ba?", en: "You must be Li Ming?" },
        ],
      },
      {
        heading: "别 and 不用: don't, no need",
        body: [
          "别 (bié) + verb means \"don't\". 别…了 means \"stop doing it\". 不用 (bú yòng) + verb means \"there's no need to\": it's kind, not a ban. 不用谢 is \"no need to thank me\".",
        ],
        examples: [
          { zh: "别走！", pinyin: "Bié zǒu!", en: "Don't go!" },
          { zh: "别说了。", pinyin: "Bié shuō le.", en: "Stop talking. / Say no more." },
          { zh: "你不用来。", pinyin: "Nǐ bú yòng lái.", en: "You don't need to come." },
          { zh: "别客气。", pinyin: "Bié kèqi.", en: "Don't mention it. / Make yourself at home." },
        ],
      },
      {
        heading: "帮 + person + verb",
        body: [
          "To ask someone to do something for you, use 帮 (bāng, help): 帮我 + verb. Add 请 or 能…吗 to make it polite.",
        ],
        examples: [
          { zh: "你能帮我买一杯咖啡吗？", pinyin: "Nǐ néng bāng wǒ mǎi yì bēi kāfēi ma?", en: "Could you buy me a coffee?" },
          { zh: "请帮我看看。", pinyin: "Qǐng bāng wǒ kànkan.", en: "Please take a look for me." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "我们走吗？ (meaning \"let's go\")",
        right: "我们走吧。",
        rightPinyin: "Wǒmen zǒu ba.",
        why: "吗 asks a yes-no question (\"are we going?\"). 吧 makes the suggestion.",
      },
      {
        wrong: "不用去！ (meaning \"don't go!\")",
        right: "别去！",
        rightPinyin: "Bié qù!",
        why: "不用 says there's no need. To stop someone, use 别 (or 不要).",
      },
      {
        wrong: "请问给我一杯水。",
        right: "请给我一杯水。",
        rightPinyin: "Qǐng gěi wǒ yì bēi shuǐ.",
        why: "请问 means \"may I ask\" and only opens a question. For \"please\", use 请 alone.",
      },
    ],
    faqs: [
      {
        q: "Is 别 the same as 不要?",
        a: "Yes, both mean \"don't\" before a verb. 别 is shorter and a little more common in speech; 不要 can sound slightly firmer.",
      },
      {
        q: "Do Chinese speakers say 请 as much as English speakers say please?",
        a: "Less. Between friends and family, tone and 吧 do the work, and 请 can sound formal. Use it with strangers, in service situations and when inviting someone to do something.",
      },
    ],
    related: ["wanting-ability-likes", "yes-no-questions", "first-then-again-still"],
    lessons: ["zh-greetings", "zh-getting-around", "zh-a1-dont"],
  },
];
