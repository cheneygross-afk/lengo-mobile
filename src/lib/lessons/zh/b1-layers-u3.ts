// B1 unit 3 practice lessons (把 and 被, 把…成/到/给, more measure
// words, work, the hotel), drafted from their specs.

import { ex, fb, layer, listen, mc, ms, say, sec, toEn, toZh, wo, zh } from "./authoring";
import { ZH_B1_SPEC as S } from "./specs";

const C = "Complete (characters or pinyin).";

export const ZH_B1_LAYERS_U3 = [
  layer(
    S,
    "zh-b1r-ba-bei",
    "Transform: 把 and 被, One Event Two Ways",
    "Turn 把 sentences into 被 sentences and back: the doer comes first with 把, the thing affected comes first with 被.",
    "7 min",
    [
      sec(
        "Turning it around",
        [
          `${zh("小狗把我的鞋咬坏了。", "Xiǎogǒu bǎ wǒ de xié yǎo huài le.")} (The puppy chewed up my shoe.) → ${zh("我的鞋被小狗咬坏了。", "Wǒ de xié bèi xiǎogǒu yǎo huài le.")}`,
          "把: doer + 把 + thing + verb + result. 被: thing + 被 + doer + verb + result. The verb part stays the same; only the order changes. Choose 被 when the thing is your topic and the news is bad.",
        ],
        [ex("弟弟把杯子打破了。", "Dìdi bǎ bēizi dǎ pò le.", "My brother broke the cup."), ex("杯子被弟弟打破了。", "Bēizi bèi dìdi dǎ pò le.", "The cup got broken by my brother.")],
        [mc("弟弟把杯子打破了 → with 被:", ["杯子被弟弟打破了。", "弟弟被杯子打破了。", "杯子把弟弟打破了。", "被杯子弟弟打破了。"], 0, "Thing first, then 被 + doer.")]
      ),
    ],
    [
      listen("我的雨伞被别人拿走了。", "What happened to the umbrella?", ["Someone took it.", "It broke.", "It was left at home.", "Someone gave it back."], 0, "被别人拿走: taken by someone else."),
      ms("Which describe the same event as 小狗把我的鞋咬坏了? (Choose all that apply.)", ["我的鞋被小狗咬坏了。", "小狗咬坏了我的鞋。", "小狗被我的鞋咬坏了。", "我的鞋把小狗咬坏了。"], [0, 1], "Same event: 把, 被, or plain order."),
      fb(C, "我的手表___人偷了。(My watch was stolen.)", "被", "bèi", "Thing + 被 + doer + verb."),
      fb(C, "妈妈___衣服洗干净了。(Mum washed the clothes clean.)", "把", "bǎ", "Doer + 把 + thing + verb + result."),
      fb(C, "杯子被弟弟打___了。(The cup got broken by my brother.)", "破", "pò", "打破: break by hitting."),
      toZh("The dog ate my homework.", "我的作业被狗吃了。", "Wǒ de zuòyè bèi gǒu chī le.", "Thing + 被 + 狗 + 吃了.", ["狗把我的作业吃了。", "Gǒu bǎ wǒ de zuòyè chī le.", "我的作业被小狗吃了。", "Wǒ de zuòyè bèi xiǎogǒu chī le."]),
      toZh("I lost my keys.", "我把钥匙丢了。", "Wǒ bǎ yàoshi diū le.", "把 + thing + 丢了.", ["我的钥匙丢了。", "Wǒ de yàoshi diū le.", "我把钥匙弄丢了。", "Wǒ bǎ yàoshi nòng diū le."]),
      toEn("我的自行车被朋友骑走了。", "Wǒ de zìxíngchē bèi péngyou qí zǒu le.", "My bike was ridden off by a friend.", "被 + 朋友 + 骑走.", ["My friend rode off on my bike.", "My friend rode my bike away.", "My bike was taken by a friend.", "A friend rode off on my bike."]),
      wo(["那本书", "被", "同学", "借走", "了"], "That book was borrowed by a classmate.", "Thing + 被 + doer + verb + 走 + 了."),
      say("我的手机被小偷偷了！", "我的手机被小偷偷了: my phone was stolen by a thief!", "xiǎotōu tōu le: a dip, then high, high, light.", "Tell a police officer what happened."),
    ]
  ),

  layer(
    S,
    "zh-b1d-ba-cheng",
    "Pattern Practice: 把 It Into, To, For",
    "把 + thing + verb + 成/到/给/在 again and again: change it into, take it to, hand it to, put it at.",
    "6 min",
    [
      sec(
        "The frame",
        [
          "把 + thing + verb + 成 + what it becomes (换成, 翻译成, 写成). 把 + thing + verb + 到 + place (送到, 放到, 搬到). 把 + thing + verb + 给 + person (交给, 还给). 把 + thing + verb + 在 + place (放在, 停在).",
        ],
        [ex("我把美元换成了人民币。", "Wǒ bǎ měiyuán huàn chéng le rénmínbì.", "I changed my dollars into RMB."), ex("请把车开到门口。", "Qǐng bǎ chē kāi dào ménkǒu.", "Please drive the car to the entrance.")],
        [mc("Change dollars into RMB:", ["把美元换成人民币。", "把人民币换成美元。", "换成把美元人民币。", "把美元成换人民币。"], 0, "把 + thing + 换成 + new thing.")]
      ),
    ],
    [
      listen("请把这些书放到桌子上。", "Where should the books go?", ["On the table", "Under the table", "In the bag", "On the shelf"], 0, "放到桌子上: put on the table."),
      mc("我把他的名字写成了王明 means:", ["I wrote his name as 王明 by mistake.", "I asked his name.", "His name is 王明.", "I wrote to 王明."], 0, "写成: wrote it as."),
      fb(C, "请把这篇文章翻译___英文。(Translate this article into English.)", "成", "chéng", "翻译成: into a language."),
      fb(C, "我把车停___楼下了。(I parked the car downstairs.)", "在", "zài", "停在: park at a place."),
      fb(C, "请把这本书还___他。(Please give this book back to him.)", "给", "gěi", "还给: give back to."),
      fb(C, "他把箱子搬___了房间里。(He carried the case into the room.)", "到", "dào", "搬到: carry to a place."),
      toZh("Please send this to my office.", "请把这个送到我的办公室。", "Qǐng bǎ zhège sòng dào wǒ de bàngōngshì.", "把 + thing + 送到 + place.", ["请把这个送到我办公室。", "Qǐng bǎ zhège sòng dào wǒ bàngōngshì."]),
      toZh("I gave the money to her.", "我把钱交给她了。", "Wǒ bǎ qián jiāo gěi tā le.", "把 + 钱 + 交给 + person.", ["我把钱给她了。", "Wǒ bǎ qián gěi tā le.", "我把钱交给了她。", "Wǒ bǎ qián jiāo gěi le tā."]),
      toZh("Translate this word into Chinese.", "把这个词翻译成中文。", "Bǎ zhège cí fānyì chéng Zhōngwén.", "把 + 词 + 翻译成 + language.", ["请把这个词翻译成中文。", "Qǐng bǎ zhège cí fānyì chéng Zhōngwén.", "把这个词翻译成汉语。", "Bǎ zhège cí fānyì chéng Hànyǔ."]),
      wo(["我", "把", "美元", "换成", "了", "人民币"], "I changed my dollars into RMB.", "把 + thing + 换成 + new thing."),
      say("请把我的箱子送到房间。", "请把我的箱子送到房间: please take my case up to the room.", "sòng dào: two falling tones.", "Ask a hotel porter for help."),
    ]
  ),

  layer(
    S,
    "zh-b1d-measure",
    "Speed Round: The Right Measure Word",
    "Quick-fire 张, 条, 辆, 台, 封, 位 and 家 -- hear it, pick it, type it.",
    "5 min",
    [
      sec(
        "Fast picks",
        [
          "张 flat (票, 纸, 桌子, 床), 条 long (路, 河, 鱼, 裤子), 辆 vehicles, 台 machines, 封 letters, 位 people politely, 家 businesses.",
        ],
        [ex("两条裤子", "liǎng tiáo kùzi", "two pairs of trousers"), ex("一台洗衣机", "yì tái xǐyījī", "a washing machine")],
        [mc("a river:", ["一条河", "一张河", "一辆河", "一台河"], 0, "Long things: 条.")]
      ),
    ],
    [
      listen("我要两张去北京的票。", "How many tickets?", ["Two", "One", "Three", "Ten"], 0, "两张票: two tickets."),
      listen("门口有三辆出租车。", "What is at the door?", ["Three taxis", "Three buses", "Two taxis", "Three people"], 0, "三辆出租车: three taxis."),
      mc("台 goes with:", ["电视", "鱼", "信", "路"], 0, "Machines: 台."),
      fb(C, "我给妈妈写了一___信。(I wrote Mum a letter.)", "封", "fēng", "Letters: 封."),
      fb(C, "这___裤子太长了。(These trousers are too long.)", "条", "tiáo", "Trousers are long things: 条."),
      fb(C, "桌子上有一___纸。(There's a sheet of paper on the desk.)", "张", "zhāng", "Flat things: 张."),
      fb(C, "我家附近有两___超市。(There are two supermarkets near my home.)", "家", "jiā", "Businesses: 家."),
      fb(C, "我们公司买了十___电脑。(Our company bought ten computers.)", "台", "tái", "Machines: 台."),
      toZh("three teachers (polite)", "三位老师", "sān wèi lǎoshī", "Polite for people: 位."),
      toZh("a bicycle", "一辆自行车", "yí liàng zìxíngchē", "Vehicles: 辆."),
      toZh("two roads", "两条路", "liǎng tiáo lù", "Long things: 条."),
      say("服务员，我们四位。", "服务员，我们四位: waiter, there are four of us.", "sì wèi: two falling tones.", "Tell a waiter how many you are."),
    ]
  ),

  layer(
    S,
    "zh-b1r-work",
    "Dialogue: A Busy Week at the Office",
    "Two colleagues talk about overtime, a meeting, a business trip and a day off -- follow them, then join in.",
    "7 min",
    [
      sec(
        "At the office",
        [
          `A: ${zh("小李，你怎么还没下班？", "Xiǎo Lǐ, nǐ zěnme hái méi xiàbān?")} B: ${zh("我今天要加班，明天上午要开会。", "Wǒ jīntiān yào jiābān, míngtiān shàngwǔ yào kāihuì.")}`,
          `A: ${zh("你下个星期是不是要去广州出差？", "Nǐ xià ge xīngqī shì bu shì yào qù Guǎngzhōu chūchāi?")} B: ${zh("对，回来以后我想请两天假。", "Duì, huílai yǐhòu wǒ xiǎng qǐng liǎng tiān jià.")}`,
          `${zh("下班", "xiàbān")} is to finish work; ${zh("上班", "shàngbān")} to start or go to work.`,
        ],
        [ex("你怎么还没下班？", "Nǐ zěnme hái méi xiàbān?", "How come you haven't gone home from work yet?"), ex("我们的老板人很好。", "Wǒmen de lǎobǎn rén hěn hǎo.", "Our boss is a nice person.")],
        [mc("下班 means:", ["finish work", "start work", "work overtime", "go on a trip"], 0, "下班: get off work.")]
      ),
    ],
    [
      listen("我明天要去北京出差。", "Why is the speaker going to Beijing?", ["A business trip", "A holiday", "To see family", "To study"], 0, "出差: business trip."),
      mc("A colleague says 老板在开会. Where is the boss?", ["In a meeting", "On leave", "On a business trip", "Working overtime"], 0, "开会: in a meeting."),
      fb(C, "我是医院的___。(I'm a nurse at the hospital.)", "护士", "hùshi", "护士: nurse."),
      fb(C, "我们几点下___？(What time do we finish work?)", "班", "bān", "下班: finish work."),
      fb(C, "我和我的___关系很好。(I get on well with my colleagues.)", "同事", "tóngshì", "同事: colleague."),
      toZh("My boss is away on a business trip.", "我的老板出差了。", "Wǒ de lǎobǎn chūchāi le.", "老板 + 出差了.", ["我老板出差了。", "Wǒ lǎobǎn chūchāi le.", "老板去出差了。", "Lǎobǎn qù chūchāi le."]),
      toZh("I want to ask for two days off.", "我想请两天假。", "Wǒ xiǎng qǐng liǎng tiān jià.", "请 + length + 假."),
      toEn("他是律师，工作很忙。", "Tā shì lǜshī, gōngzuò hěn máng.", "He's a lawyer and his work is very busy.", "律师: lawyer.", ["He's a lawyer and he's very busy at work.", "He is a lawyer; his job is very busy.", "He's a lawyer and his job keeps him busy.", "He's a lawyer and very busy with work."]),
      wo(["我", "今天", "不", "加班", "了"], "I'm not working overtime today after all.", "不 + 加班 + 了: a change of plan.", [["今天", "我", "不", "加班", "了"]]),
      say("你好，我是新来的同事。", "你好，我是新来的同事: hi, I'm the new colleague.", "tóngshì: rising, then falling.", "Introduce yourself on your first day."),
    ]
  ),

  layer(
    S,
    "zh-b1r-hotel",
    "Mission: Two Nights in Xi'an",
    "Your mission: book a room, check in, sort out a problem in the room, and check out -- all in Chinese.",
    "8 min",
    [
      sec(
        "The plan",
        [
          `Book: ${zh("我想订一个单人间，住两个晚上。", "Wǒ xiǎng dìng yí ge dānrénjiān, zhù liǎng ge wǎnshang.")} Check in: ${zh("我订了一个房间，我姓王。", "Wǒ dìng le yí ge fángjiān, wǒ xìng Wáng.")}`,
          `A problem: ${zh("房间里的空调坏了。", "Fángjiān li de kōngtiáo huài le.")} (The air conditioning in the room is broken.) Leaving: ${zh("我要退房。", "Wǒ yào tuìfáng.")}`,
        ],
        [ex("您的房间在八楼。", "Nín de fángjiān zài bā lóu.", "Your room is on the eighth floor."), ex("热水没有了。", "Rèshuǐ méiyǒu le.", "There's no hot water.")],
        [mc("You arrive at the desk with a booking. Say:", ["我订了一个房间。", "我要退房。", "我想订一张票。", "我的房间坏了。"], 0, "订了: I've booked.")]
      ),
    ],
    [
      listen("您的房间是八零六。", "Which room is yours?", ["806", "608", "886", "816"], 0, "八零六: 806."),
      mc("The receptionist says 请出示一下您的护照. Hand over:", ["your passport", "your key", "your bill", "your bags"], 0, "护照: passport."),
      fb(C, "我订了一个单人___。(I booked a single room.)", "间", "jiān", "单人间: single room."),
      fb(C, "我想住三个___。(I'd like to stay three nights.)", "晚上", "wǎnshang", "Count nights with 晚上."),
      fb(C, "请问几点以前___房？(By what time do I have to check out?)", "退", "tuì", "退房: check out."),
      toZh("I booked a double room.", "我订了一个双人间。", "Wǒ dìng le yí ge shuāngrénjiān.", "订了 + room."),
      toZh("Where is breakfast?", "早饭在哪儿？", "Zǎofàn zài nǎr?", "在哪儿 for places.", ["早饭在哪里？", "Zǎofàn zài nǎlǐ?", "在哪儿吃早饭？", "Zài nǎr chī zǎofàn?"]),
      toEn("房间里的空调坏了。", "Fángjiān li de kōngtiáo huài le.", "The air conditioning in the room is broken.", "空调: air conditioning.", ["The air conditioner in the room is broken.", "The room's air conditioning is broken.", "The AC in the room is broken.", "The air conditioning in my room is broken."]),
      wo(["我", "想", "订", "一个", "单人间"], "I'd like to book a single room.", "想 + 订 + room."),
      say("你好，我订了一个房间，我姓王。", "你好，我订了一个房间，我姓王: hello, I've booked a room -- the name is Wang.", "dìng le: a fall, then light.", "Give your booking name at the desk."),
    ]
  ),
];
