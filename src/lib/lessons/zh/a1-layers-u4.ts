// Synced from cheneygross-afk/lengo:src/lib/lessons/zh/a1-layers-u4.ts by scripts/sync-content.mjs -- edit it there, not here.
// A1 unit 4 reinforce and drill lessons (adjective sentences, A-not-A,
// dates, clock time and time-before-verb), drafted from their specs in
// specs.ts.

import { ex, fb, layer, listen, mc, ms, mt, say, sec, toEn, toZh, wo, zh } from "./authoring";
import { ZH_A1_SPEC as S } from "./specs";

const C = "Complete (characters or pinyin).";

export const ZH_A1_LAYERS_U4 = [
  layer(
    S,
    "zh-a1r-adjectives",
    "Contrast: 很 + Adjective, Never 是 + Adjective",
    "The biggest early trap: English \"is busy\" is not 是忙. See why 很 is there, when it's dropped, and how 太…了 differs.",
    "7 min",
    [
      sec(
        "Adjectives are verbs",
        [
          "In Chinese an adjective works like a verb on its own: 忙 means \"to be busy.\" So there's no 是: \"我是忙\" is wrong; 我很忙 is right.",
          "In a plain statement, 很 (hěn) fills the gap. It's barely \"very\" -- 我很忙 is simply \"I'm busy.\" Without 很, a bare adjective sounds like a comparison: 我忙，他不忙 (I'm the busy one, he isn't).",
          "The negative takes 不 and drops 很: 我不忙.",
        ],
        [
          ex("我很累。", "Wǒ hěn lèi.", "I'm tired."),
          ex("我不累。", "Wǒ bú lèi.", "I'm not tired."),
          ex("这本书很贵。", "Zhè běn shū hěn guì.", "This book is expensive."),
        ],
        [mc("I'm busy:", ["我很忙。", "我是忙。", "我是很忙。", "我忙是。"], 0, "很 + adjective, no 是.")]
      ),
      sec(
        "很 vs. 太…了",
        [
          `很 is a neutral link; 太…了 (tài … le) is \"too\" or an exclamation: ${zh("太贵了！", "tài guì le!")} (way too expensive!), ${zh("太好了！", "tài hǎo le!")} (great!).`,
          "Don't mix them: 很 never takes 了, and 太 needs its 了 at the end of the sentence.",
        ],
        [ex("今天太冷了！", "Jīntiān tài lěng le!", "It's way too cold today!")],
        [mc("Way too expensive!", ["太贵了！", "很贵了！", "是太贵！", "太很贵！"], 0, "太 + adjective + 了.")]
      ),
    ],
    [
      ms(
        "Which sentences are correct? (Choose all that apply.)",
        ["我很高兴。", "她是很忙。", "今天不冷。", "这个太大了！"],
        [0, 2, 3],
        "Adjectives take no 是."
      ),
      mc("我不累 means:", ["I'm not tired.", "I'm very tired.", "I'm too tired.", "Am I tired?"], 0, "不 + adjective, no 很."),
      mc("The best reply to great news:", ["太好了！", "很好了！", "是好！", "好很！"], 0, "太好了: great!"),
      fb(C, "他___高兴。(He is happy.)", "很", "hěn", "很 links subject and adjective."),
      fb(C, "今天___热。(It's not hot today.)", "不", "bú", "不 + adjective; no 很.", { altAnswers: ["bù"] }),
      fb(C, "这本书太贵___！(This book is way too expensive!)", "了", "le", "太 + adjective + 了 for \"too\"."),
      toZh("I'm very tired.", "我很累。", "Wǒ hěn lèi.", "很 + 累."),
      toZh("This cat is small.", "这只猫很小。", "Zhè zhī māo hěn xiǎo.", "这只猫 + 很 + 小."),
      toEn("太好吃了！", "Tài hǎochī le!", "It's delicious!", "太…了 as an exclamation.", ["So delicious!", "Delicious!", "It's so delicious!", "It's really delicious!", "Too delicious!", "It's so tasty!", "So tasty!"]),
      say("我很忙。", "我很忙 (wǒ hěn máng): I'm busy.", "Two third tones: wǒ rises to wó.", "Tell a friend you're busy."),
    ]
  ),

  layer(
    S,
    "zh-a1d-hen",
    "Pattern Practice: 很, 不 and 太…了",
    "Subject + 很 + adjective; subject + 不 + adjective; 太 + adjective + 了 -- drilled with every adjective you know.",
    "6 min",
    [
      sec(
        "Three slots",
        [
          "Statement: Subject + 很 + Adj. Negative: Subject + 不 + Adj. Exclamation: 太 + Adj + 了.",
          "Adjectives so far: 忙 (busy), 累 (tired), 高兴 (happy), 冷 (cold), 热 (hot), 大 (big), 小 (small), 贵 (expensive), 便宜 (cheap), 好 (good), 漂亮 (pretty), 好吃 (tasty).",
        ],
        [ex("咖啡很便宜。", "Kāfēi hěn piányi.", "The coffee is cheap."), ex("我不冷。", "Wǒ bù lěng.", "I'm not cold.")],
        [mc("The coffee is cheap:", ["咖啡很便宜。", "咖啡是便宜。", "咖啡便宜很。", "很咖啡便宜。"], 0, "Subject + 很 + Adj.")]
      ),
    ],
    [
      mc("太热了！ means:", ["It's so hot!", "It's not hot.", "Is it hot?", "It's a little hot."], 0, "太…了: too / so."),
      mc("She isn't busy:", ["她不忙。", "她不很忙。", "她没忙。", "她是不忙。"], 0, "不 + adjective."),
      fb(C, "这只狗很___。(This dog is big.)", "大", "dà", "大: big."),
      fb(C, "茶很___。(The tea is cheap.)", "便宜", "piányi", "便宜: cheap."),
      fb(C, "我___冷。(I'm not cold.)", "不", "bù", "不 + adjective."),
      fb(C, "太___了！(So tired!)", "累", "lèi", "太 + adjective + 了: 累 is tired."),
      toZh("My older sister is pretty.", "我姐姐很漂亮。", "Wǒ jiějie hěn piàoliang.", "很 + 漂亮."),
      toZh("It's too cold!", "太冷了！", "Tài lěng le!", "太 + 冷 + 了."),
      toZh("The teacher is not busy.", "老师不忙。", "Lǎoshī bù máng.", "不 + 忙."),
      say("太贵了！", "太贵了 (tài guì le): way too expensive!", "Two falling tones, then a light le.", "React to a price that's far too high."),
    ]
  ),

  layer(
    S,
    "zh-a1d-a-not-a",
    "Circuit: A-not-A Questions",
    "忙不忙？是不是？有没有？ -- ask yes/no questions by doubling the verb or adjective with 不 in the middle.",
    "6 min",
    [
      sec(
        "Verb + 不 + verb",
        [
          "Besides 吗, you can ask a yes/no question by saying the verb or adjective, then 不, then the verb again: 你忙不忙？ (are you busy?). Don't add 吗 as well.",
          "有 uses 没: 你有没有哥哥？ The 不 in the middle is light: máng bu máng.",
        ],
        [
          ex("你忙不忙？", "Nǐ máng bu máng?", "Are you busy?"),
          ex("他是不是老师？", "Tā shì bu shì lǎoshī?", "Is he a teacher?"),
          ex("你有没有猫？", "Nǐ yǒu méiyǒu māo?", "Do you have a cat?"),
        ],
        [mc("Which is correct?", ["你累不累？", "你累不累吗？", "你不累累？", "你累累不？"], 0, "A-not-A without 吗.")]
      ),
    ],
    [
      mc("她是不是医生？ means:", ["Is she a doctor?", "She is not a doctor.", "She is a doctor.", "Which doctor is she?"], 0, "是不是: is or isn't."),
      mc("The A-not-A form of 有 is:", ["有没有", "有不有", "没有有", "有有没"], 0, "有 is negated with 没."),
      mc("Which mixes two question forms by mistake?", ["你忙不忙吗？", "你忙吗？", "你忙不忙？", "你是不是老师？"], 0, "Use A-not-A or 吗, not both."),
      fb(C, "你冷___冷？(Are you cold?)", "不", "bu", "A-not-A: 冷不冷.", { altAnswers: ["bù"] }),
      fb(C, "他们___学生？(Are they students?)", "是不是", "shì bu shì", "是不是 in the verb's place.", { altAnswers: ["shì bú shì"] }),
      fb(C, "你有___姐姐？(Do you have an older sister?)", "没有", "méiyǒu", "有 doubles as 有没有."),
      toZh("Is this book expensive?", "这本书贵不贵？", "Zhè běn shū guì bu guì?", "Adjective + 不 + adjective: 贵不贵."),
      toZh("Are you happy?", "你高兴不高兴？", "Nǐ gāoxìng bu gāoxìng?", "Two-syllable adjectives repeat in full.", ["你高不高兴？", "nǐ gāo bu gāoxìng?"]),
      wo(["你", "是", "不", "是", "中国人"], "Are you Chinese?", "是不是 sits in the verb's place."),
      say("你忙不忙？", "你忙不忙 (nǐ máng bu máng): are you busy?", "The middle bu is light and quick.", "Ask a friend if they're busy."),
    ]
  ),

  layer(
    S,
    "zh-a1r-dates",
    "Mission: Birthdays and Plans",
    "Your mission: say when your birthday is, ask the date, and put days in the right place in a sentence.",
    "7 min",
    [
      sec(
        "Big to small",
        [
          `Dates run from big to small: month, then day. ${zh("五月三号", "wǔyuè sān hào")} is May 3rd. Ask ${zh("今天几号？", "Jīntiān jǐ hào?")} (what's the date today?).`,
          `Weekdays are 星期 + a number from Monday: ${zh("星期一", "xīngqīyī")} (Monday) to ${zh("星期六", "xīngqīliù")} (Saturday). Sunday is ${zh("星期天", "xīngqītiān")}.`,
        ],
        [
          ex("我的生日是十月八号。", "Wǒ de shēngrì shì shíyuè bā hào.", "My birthday is October 8th."),
          ex("今天星期三。", "Jīntiān xīngqīsān.", "Today is Wednesday."),
        ],
        [mc("May 3rd:", ["五月三号", "三月五号", "三号五月", "五号三月"], 0, "Month, then day.")]
      ),
      sec(
        "When comes before what",
        [
          `Time words go before the verb, usually right after the subject: ${zh("我明天去学校。", "Wǒ míngtiān qù xuéxiào.")} (I'm going to school tomorrow). Putting them at the end, as in English, is wrong.`,
          "With dates and weekdays, 是 is optional: 今天星期三 and 今天是星期三 are both fine.",
        ],
        [ex("她星期五来。", "Tā xīngqīwǔ lái.", "She's coming on Friday.")],
        [mc("I'll come tomorrow:", ["我明天来。", "我来明天。", "明天来我。", "我来了明天。"], 0, "Time before the verb.")]
      ),
    ],
    [
      mc("今天几号？ asks:", ["What's the date today?", "What day of the week is it?", "What time is it?", "How old are you?"], 0, "几号: which day of the month."),
      mt(
        "Match the day.",
        [
          ["星期一", "Monday"],
          ["星期五", "Friday"],
          ["星期六", "Saturday"],
          ["星期天", "Sunday"],
        ],
        "星期 + number; Sunday is 星期天."
      ),
      fb(C, "我的生日是十二月___号。(My birthday is December 25th.)", "二十五", "èrshíwǔ", "Month, then the day number + 号."),
      fb(C, "明天___四。(Tomorrow is Thursday.)", "星期", "xīngqī", "星期四: Thursday."),
      fb(C, "他___去学校。(He's going to school tomorrow.)", "明天", "míngtiān", "Time before the verb."),
      toZh("Today is Sunday.", "今天星期天。", "Jīntiān xīngqītiān.", "是 is optional with weekdays.", ["今天是星期天。", "Jīntiān shì xīngqītiān."]),
      toZh("My birthday is March 6th.", "我的生日是三月六号。", "Wǒ de shēngrì shì sānyuè liù hào.", "Month + day + 号."),
      wo(["我们", "星期六", "去", "北京"], "We're going to Beijing on Saturday.", "Subject + time + verb."),
      say("今天几号？", "今天几号 (jīntiān jǐ hào): what's the date today?", "jǐ is a low dip.", "Ask what today's date is."),
    ]
  ),

  layer(
    S,
    "zh-a1d-dates",
    "Speed Round: Months, Days and Dates",
    "Months, weekdays and full dates at speed: hear them, type them, say them.",
    "6 min",
    [
      sec(
        "Counting does it all",
        [
          "Months are number + 月: 一月 (January) to 十二月 (December). Days of the month are number + 号 in speech (日 in writing). Weekdays are 星期 + 1-6, and 星期天.",
          "Yesterday, today, tomorrow: 昨天, 今天, 明天.",
        ],
        [ex("十一月", "shíyīyuè", "November"), ex("昨天", "zuótiān", "yesterday"), ex("星期二", "xīngqī'èr", "Tuesday")],
        [listen("七月", "Which month did you hear?", ["July", "January", "April", "October"], 0, "七月: the 7th month.")]
      ),
    ],
    [
      listen("星期四", "Which day did you hear?", ["Thursday", "Wednesday", "Friday", "Tuesday"], 0, "星期四: day 4, Thursday."),
      listen("九月十号", "Which date did you hear?", ["September 10th", "October 9th", "September 1st", "October 10th"], 0, "九月 + 十号."),
      mc("昨天 is:", ["yesterday", "today", "tomorrow", "Sunday"], 0, "昨天: yesterday."),
      fb(C, "___月 (February)", "二", "èr", "February is month 2: 二月."),
      fb(C, "星期___ (Wednesday)", "三", "sān", "Monday is 1, so Wednesday is 3."),
      fb(C, "八月一___ (August 1st)", "号", "hào", "Day number + 号."),
      toZh("Saturday", "星期六", "xīngqīliù", "星期 + 6."),
      toZh("December", "十二月", "shí'èryuè", "Month 12."),
      toZh("January 1st", "一月一号", "yīyuè yī hào", "Month + day + 号."),
      say("星期天", "星期天 (xīngqītiān): Sunday.", "Three high, level tones.", "Say \"Sunday.\""),
    ]
  ),

  layer(
    S,
    "zh-a1r-time",
    "Dialogue: A Busy Day",
    "Two friends compare their days: what time they get up, eat and work -- with time always before the verb.",
    "7 min",
    [
      sec(
        "The dialogue",
        ["Lin and Mark compare schedules. Every time phrase sits before its verb."],
        [
          ex("你几点起床？", "Nǐ jǐ diǎn qǐchuáng?", "What time do you get up?"),
          ex("我六点半起床。", "Wǒ liù diǎn bàn qǐchuáng.", "I get up at half past six."),
          ex("你几点上班？", "Nǐ jǐ diǎn shàngbān?", "What time do you start work?"),
          ex("我八点上班，下午五点下班。", "Wǒ bā diǎn shàngbān, xiàwǔ wǔ diǎn xiàbān.", "I start at eight and finish at five in the afternoon."),
          ex("太早了！我十点起床。", "Tài zǎo le! Wǒ shí diǎn qǐchuáng.", "That's so early! I get up at ten."),
        ],
        [mc("When does Lin get up?", ["6:30", "6:00", "8:00", "10:00"], 0, "六点半: half past six.")]
      ),
      sec(
        "Times of day",
        [
          `Put the part of the day before the clock time: ${zh("上午九点", "shàngwǔ jiǔ diǎn")} (9 a.m.), ${zh("晚上八点", "wǎnshang bā diǎn")} (8 p.m.). Others: 早上 (early morning), 中午 (noon), 下午 (afternoon).`,
          "Order: subject + time + verb. 我晚上看书 (I read in the evening).",
        ],
        [ex("中午十二点", "zhōngwǔ shí'èr diǎn", "12 noon")],
        [mc("8 p.m.:", ["晚上八点", "八点晚上", "上午八点", "晚八点上"], 0, "Part of the day, then the time.")]
      ),
    ],
    [
      mc("你几点上班？ asks:", ["What time do you start work?", "How many hours do you work?", "Where do you work?", "Do you work today?"], 0, "几点: what time."),
      listen("下午三点", "When?", ["3 p.m.", "3 a.m.", "1 p.m.", "3:30"], 0, "下午: afternoon."),
      fb(C, "我七点___。(I get up at seven.)", "起床", "qǐchuáng", "起床: get up."),
      fb(C, "她___五点下班。(She finishes work at 5 p.m.)", "下午", "xiàwǔ", "下午: afternoon."),
      fb(C, "我六点___起床。(I get up at half past six.)", "半", "bàn", "点半: half past."),
      toZh("What time do you get up?", "你几点起床？", "Nǐ jǐ diǎn qǐchuáng?", "几点 before the verb."),
      toZh("I start work at nine a.m.", "我上午九点上班。", "Wǒ shàngwǔ jiǔ diǎn shàngbān.", "上午 + 九点, then the verb."),
      toEn("他晚上十一点睡觉。", "Tā wǎnshang shíyī diǎn shuìjiào.", "He goes to bed at 11 p.m.", "晚上十一点 + 睡觉.", ["He sleeps at 11 p.m.", "He goes to bed at eleven at night.", "He goes to sleep at 11pm.", "He goes to bed at 11pm.", "He sleeps at eleven at night.", "He goes to bed at 11 at night."]),
      wo(["我", "晚上", "八点", "吃饭"], "I eat at 8 in the evening.", "Subject + time + verb."),
      say("我早上七点起床。", "我早上七点起床: I get up at 7 in the morning.", "Keep the time phrase together, then the verb.", "Say what time you get up."),
    ]
  ),

  layer(
    S,
    "zh-a1d-time-order",
    "Pattern Practice: Subject + Time + Verb",
    "The order English gets wrong: drill time phrases into the slot before the verb.",
    "6 min",
    [
      sec(
        "The slot",
        [
          "Subject + when + verb: 我明天工作, 她星期一上课, 他们晚上八点吃饭.",
          "The time can also open the sentence, before the subject: 明天我工作. It never goes at the end.",
        ],
        [ex("她星期一上课。", "Tā xīngqīyī shàngkè.", "She has class on Monday."), ex("明天我工作。", "Míngtiān wǒ gōngzuò.", "Tomorrow I work.")],
        [mc("He works on Saturday:", ["他星期六工作。", "他工作星期六。", "工作他星期六。", "他工作在星期六。"], 0, "Time before the verb.")]
      ),
    ],
    [
      mc("Which is wrong?", ["我吃饭晚上七点。", "我晚上七点吃饭。", "晚上七点我吃饭。", "我七点吃饭。"], 0, "The time can't come after the verb."),
      mc("今天我不上班 means:", ["I'm not working today.", "I didn't work today.", "I work every day.", "I'm working today."], 0, "今天 can open the sentence."),
      fb(C, "我们___去学校。(We go to school on Monday.)", "星期一", "xīngqīyī", "Time before the verb."),
      fb(C, "她明天___。(She works tomorrow.)", "工作", "gōngzuò", "Verb after the time."),
      fb(C, "他___十点睡觉。(He goes to bed at ten p.m.)", "晚上", "wǎnshang", "晚上 + 十点."),
      fb(C, "你几点___？(What time do you have class?)", "上课", "shàngkè", "几点 + verb."),
      toZh("I work on Friday.", "我星期五工作。", "Wǒ xīngqīwǔ gōngzuò.", "Time before the verb.", ["星期五我工作。", "Xīngqīwǔ wǒ gōngzuò."]),
      toZh("She gets up at seven.", "她七点起床。", "Tā qī diǎn qǐchuáng.", "Time before the verb.", ["她七点钟起床。"]),
      wo(["他们", "明天", "上午", "来"], "They're coming tomorrow morning.", "Bigger time unit first."),
      say("我明天上午上课。", "我明天上午上课: I have class tomorrow morning.", "明天上午 -- day, then part of the day.", "Say you have class tomorrow morning."),
    ]
  ),

  layer(
    S,
    "zh-a1d-clock",
    "Speed Round: What Time Is It?",
    "点, 分, 半 and 刻: read clock times aloud and hear them fast.",
    "6 min",
    [
      sec(
        "Clock words",
        [
          "Hour + 点: 三点 (3:00). Minutes + 分: 三点十分 (3:10). Half past: 三点半. A quarter: 一刻 (15 min) -- 三点一刻 (3:15).",
          "2:00 is 两点, not 二点. Ask the time with 现在几点？ (what time is it now?).",
        ],
        [ex("两点", "liǎng diǎn", "2:00"), ex("九点一刻", "jiǔ diǎn yí kè", "9:15"), ex("现在几点？", "Xiànzài jǐ diǎn?", "What time is it?")],
        [listen("十点半", "What time?", ["10:30", "10:00", "4:30", "10:15"], 0, "十点半: half past ten.")]
      ),
    ],
    [
      listen("两点十分", "What time?", ["2:10", "10:02", "2:30", "12:10"], 0, "两点 + 十分."),
      listen("五点一刻", "What time?", ["5:15", "5:45", "5:01", "1:05"], 0, "一刻 is fifteen minutes."),
      mc("2:00 is:", ["两点", "二点", "十二点", "二十点"], 0, "Clock hours use 两 for two."),
      fb(C, "现在___点？(What time is it now?)", "几", "jǐ", "几点: what time."),
      fb(C, "七点___ (7:30)", "半", "bàn", "半: half past."),
      fb(C, "十二点二十___ (12:20)", "分", "fēn", "Minutes + 分."),
      toZh("4:30", "四点半", "sì diǎn bàn", "Hour + 点 + 半."),
      toZh("8:15", "八点一刻", "bā diǎn yí kè", "一刻: a quarter.", ["八点十五分", "bā diǎn shíwǔ fēn", "八点十五", "bā diǎn shíwǔ"]),
      toZh("2:05", "两点五分", "liǎng diǎn wǔ fēn", "两点 + 五分.", ["两点零五分", "liǎng diǎn líng wǔ fēn", "两点零五", "liǎng diǎn líng wǔ"]),
      say("现在三点一刻。", "现在三点一刻 (xiànzài sān diǎn yí kè): it's 3:15 now.", "yí kè: 一 rises before the fourth tone of 刻.", "Tell someone it's 3:15."),
    ]
  ),
];
