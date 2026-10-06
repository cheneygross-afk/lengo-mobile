// Synced from cheneygross-afk/lengo:src/lib/lessons/zh/a1-layers-u7.ts by scripts/sync-content.mjs -- edit it there, not here.
// A1 unit 7 reinforce and drill lessons (transport, 吧, weather, 喜欢,
// 了 for a new situation), drafted from their specs in specs.ts.

import { ex, fb, layer, listen, mc, mt, say, sec, toEn, toZh, wo, zh } from "./authoring";
import { ZH_A1_SPEC as S } from "./specs";

const C = "Complete (characters or pinyin).";

export const ZH_A1_LAYERS_U7 = [
  layer(
    S,
    "zh-a1r-transport",
    "Mission: Plan a Day Out",
    "Your mission: suggest a trip with 吧, agree how to get there, and say how everyone travels.",
    "7 min",
    [
      sec(
        "How you go",
        [
          `Vehicle before the movement verb: ${zh("坐", "zuò")} + vehicle + 去/来 + place. ${zh("我坐地铁去公司。", "Wǒ zuò dìtiě qù gōngsī.")} (I take the subway to work.)`,
          `Bikes are ridden: ${zh("骑自行车", "qí zìxíngchē")}. Cars are driven: ${zh("开车", "kāi chē")}. On foot: ${zh("走路", "zǒulù")}. Ask ${zh("你怎么去？", "Nǐ zěnme qù?")}`,
        ],
        [
          ex("坐出租车", "zuò chūzūchē", "by taxi"),
          ex("坐公共汽车", "zuò gōnggòng qìchē", "by bus"),
          ex("骑自行车去", "qí zìxíngchē qù", "go by bike"),
          ex("坐火车", "zuò huǒchē", "by train"),
        ],
        [mc("I take the bus to school:", ["我坐公共汽车去学校。", "我去学校坐公共汽车。", "我坐去学校公共汽车。", "公共汽车我去坐学校。"], 0, "坐 + vehicle + 去 + place.")]
      ),
      sec(
        "Suggesting with 吧",
        [
          `吧 at the end turns a statement into a suggestion: ${zh("我们去公园吧。", "Wǒmen qù gōngyuán ba.")} (let's go to the park). Agree with ${zh("好！", "Hǎo!")} or ${zh("好吧。", "Hǎo ba.")} (OK then).`,
        ],
        [ex("我们坐地铁去吧。", "Wǒmen zuò dìtiě qù ba.", "Let's take the subway."), ex("你来我家吧。", "Nǐ lái wǒ jiā ba.", "Come to my place.")],
        [mc("Let's walk:", ["我们走路去吧。", "我们走路去吗。", "吧我们走路去。", "我们吧走路去。"], 0, "吧 at the end: let's.")]
      ),
    ],
    [
      mt(
        "Match the transport.",
        [
          ["地铁", "subway"],
          ["出租车", "taxi"],
          ["自行车", "bicycle"],
          ["火车", "train"],
        ],
        "Taken with 坐, except bikes (骑)."
      ),
      mc("你怎么去北京？ asks:", ["How are you getting to Beijing?", "When are you going to Beijing?", "Why are you going to Beijing?", "Are you going to Beijing?"], 0, "怎么 + verb: how."),
      fb(C, "我___自行车去学校。(I ride my bike to school.)", "骑", "qí", "Bikes are ridden: 骑."),
      fb(C, "我们坐出租车去___。(Let's take a taxi.)", "吧", "ba", "吧: let's."),
      fb(C, "她坐地铁___公司。(She takes the subway to work.)", "去", "qù", "坐 + vehicle + 去 + place."),
      toZh("Let's go to the park.", "我们去公园吧。", "Wǒmen qù gōngyuán ba.", "Suggestion + 吧."),
      toZh("I take the train to Shanghai.", "我坐火车去上海。", "Wǒ zuò huǒchē qù Shànghǎi.", "坐 + 火车 + 去 + place."),
      toEn("你开车来吧。", "Nǐ kāi chē lái ba.", "Drive here.", "吧 softens a suggestion.", ["Why don't you drive here?", "You drive here.", "Come by car.", "Drive over.", "Drive here, then.", "Why don't you drive?", "You should drive here."]),
      wo(["我们", "坐", "公共汽车", "去", "吧"], "Let's take the bus.", "坐 + vehicle + 去, then 吧."),
      say("我们走路去吧。", "我们走路去吧: let's walk there.", "ba is light; don't stress it.", "Suggest walking."),
    ]
  ),

  layer(
    S,
    "zh-a1d-transport",
    "Pattern Practice: 坐 + Vehicle + 去 + Place",
    "Swap people, vehicles and places through the travel frame, and add 吧 for suggestions.",
    "6 min",
    [
      sec(
        "The frame",
        [
          "Subject + (time) + 坐/骑/开 + vehicle + 去/来/回 + place. 我明天坐飞机回家 (I'm flying home tomorrow).",
          "回 (huí) means \"go back\": 回家 (go home), 回国 (go back to your country).",
        ],
        [ex("我明天坐飞机回家。", "Wǒ míngtiān zuò fēijī huí jiā.", "I'm flying home tomorrow."), ex("他骑自行车来。", "Tā qí zìxíngchē lái.", "He's coming by bike.")],
        [mc("Where does 明天 go?", ["Before 坐", "After the vehicle", "At the end", "After 去"], 0, "Time comes before the whole verb phrase.")]
      ),
    ],
    [
      listen("我坐地铁回家。", "How is the speaker going home?", ["By subway", "By bus", "On foot", "By taxi"], 0, "坐地铁: by subway."),
      mc("回国 means:", ["go back to your country", "come to China", "leave the country", "take a plane"], 0, "回: go back."),
      fb(C, "我们坐___去北京。(We're flying to Beijing.)", "飞机", "fēijī", "飞机: plane."),
      fb(C, "她骑自行车___家。(She rides her bike home.)", "回", "huí", "回家: go home."),
      fb(C, "你___来吧！(Come by car!)", "开车", "kāi chē", "开车: drive."),
      fb(C, "他坐___去医院。(He took a taxi to the hospital.)", "出租车", "chūzūchē", "出租车: taxi."),
      toZh("I go to school by bus.", "我坐公共汽车去学校。", "Wǒ zuò gōnggòng qìchē qù xuéxiào.", "坐 + vehicle + 去 + place."),
      toZh("Let's take the subway.", "我们坐地铁吧。", "Wǒmen zuò dìtiě ba.", "坐地铁 + 吧.", ["我们坐地铁去吧。", "Wǒmen zuò dìtiě qù ba."]),
      toZh("I'm going home tomorrow.", "我明天回家。", "Wǒ míngtiān huí jiā.", "Time + 回家."),
      say("你怎么来的？", "你怎么来的 (nǐ zěnme lái de): how did you get here?", "de at the end is light.", "Ask a guest how they got here."),
    ]
  ),

  layer(
    S,
    "zh-a1r-weather",
    "Dialogue: What's the Weather Like?",
    "A phone call between friends in two cities: comparing the weather, saying what's changed with 了, and what they like.",
    "7 min",
    [
      sec(
        "The dialogue",
        ["Xiaoyu in Beijing calls Tom in Shanghai."],
        [
          ex("北京天气怎么样？", "Běijīng tiānqì zěnmeyàng?", "What's the weather like in Beijing?"),
          ex("下雪了！很冷。", "Xià xuě le! Hěn lěng.", "It's started snowing! It's cold."),
          ex("上海不冷，下雨了。", "Shànghǎi bù lěng, xià yǔ le.", "Shanghai isn't cold, but it's raining now."),
          ex("我很喜欢下雪。", "Wǒ hěn xǐhuan xià xuě.", "I really like snow."),
          ex("我不喜欢下雨。", "Wǒ bù xǐhuan xià yǔ.", "I don't like rain."),
        ],
        [mc("What's the weather in Beijing?", ["It's snowing and cold", "It's raining", "It's hot", "It's sunny"], 0, "下雪了，很冷.")]
      ),
      sec(
        "了 for something new",
        [
          `了 at the end of a sentence can mean a new situation, not a finished action: ${zh("下雨了。", "Xià yǔ le.")} (it's raining now -- it wasn't before), ${zh("天冷了。", "Tiān lěng le.")} (it's got cold).`,
          `${zh("喜欢", "xǐhuan")} takes a noun or a verb: 喜欢茶, 喜欢喝茶. 很喜欢 is \"really like.\"`,
        ],
        [ex("天热了。", "Tiān rè le.", "It's got hot."), ex("我喜欢喝茶。", "Wǒ xǐhuan hē chá.", "I like drinking tea.")],
        [mc("下雨了 means:", ["It's (started) raining.", "It rained yesterday.", "It will rain.", "It doesn't rain."], 0, "了: a new situation.")]
      ),
    ],
    [
      mc("天气怎么样？ asks:", ["What's the weather like?", "Is it raining?", "Do you like the weather?", "What day is it?"], 0, "怎么样: how is it."),
      mt(
        "Match the weather.",
        [
          ["下雨", "rain"],
          ["下雪", "snow"],
          ["很热", "hot"],
          ["很冷", "cold"],
        ],
        "下 + rain/snow."
      ),
      fb(C, "外面下雨___。(It's started raining outside.)", "了", "le", "了 for a new situation."),
      fb(C, "我很___冬天。(I really like winter.)", "喜欢", "xǐhuan", "很喜欢: really like."),
      fb(C, "今天天气___？(What's the weather like today?)", "怎么样", "zěnmeyàng", "怎么样: how is it."),
      toZh("It's snowing!", "下雪了！", "Xià xuě le!", "下雪 + 了: it's (started) snowing."),
      toZh("I don't like rain.", "我不喜欢下雨。", "Wǒ bù xǐhuan xià yǔ.", "不喜欢 + 下雨."),
      toEn("天冷了。", "Tiān lěng le.", "It's getting cold.", "了: a change.", ["It's got cold.", "It has become cold.", "It's gotten cold.", "It's cold now.", "It's become cold.", "It got cold.", "The weather's got cold."]),
      say("北京天气怎么样？", "北京天气怎么样: what's the weather like in Beijing?", "zěnmeyàng: a dip, then two light syllables and a rise.", "Ask a friend about the weather where they are."),
    ]
  ),

  layer(
    S,
    "zh-a1d-xihuan",
    "Pattern Practice: 喜欢 and 了 for Change",
    "Likes and dislikes with nouns and verbs, then 了 for something that's changed.",
    "6 min",
    [
      sec(
        "Two patterns",
        [
          "喜欢 + noun or verb: 我喜欢狗, 我喜欢看书. 不喜欢 for dislikes, 很喜欢 for \"really like.\" Question: 你喜欢…吗？ or 你喜不喜欢…？",
          "Adjective / event + 了 for a change: 天热了 (it's got hot), 下雨了 (it's raining now).",
        ],
        [ex("你喜欢看电影吗？", "Nǐ xǐhuan kàn diànyǐng ma?", "Do you like watching films?"), ex("我饿了。", "Wǒ è le.", "I'm hungry now.")],
        [mc("I like reading:", ["我喜欢看书。", "我喜欢书看。", "我看书喜欢。", "喜欢我看书。"], 0, "喜欢 + verb + object.")]
      ),
    ],
    [
      listen("我不喜欢下雨。", "What does the speaker dislike?", ["Rain", "Snow", "Hot weather", "Winter"], 0, "不喜欢下雨: doesn't like rain."),
      mc("我饿了 means:", ["I'm hungry (now).", "I was hungry.", "I'm not hungry.", "I ate."], 0, "了 for a new state."),
      fb(C, "她很喜欢___。(She really likes dancing.)", "跳舞", "tiàowǔ", "喜欢 + verb."),
      fb(C, "你喜___喜欢咖啡？(Do you like coffee?)", "不", "bu", "A-not-A with a two-syllable verb: 喜不喜欢.", { altAnswers: ["bù"] }),
      fb(C, "天热___。(It's got hot.)", "了", "le", "了 for a change."),
      fb(C, "我不___喝啤酒。(I don't like drinking beer.)", "喜欢", "xǐhuan", "不喜欢 + verb."),
      toZh("I like dogs.", "我喜欢狗。", "Wǒ xǐhuan gǒu.", "喜欢 + noun."),
      toZh("Do you like watching films?", "你喜欢看电影吗？", "Nǐ xǐhuan kàn diànyǐng ma?", "喜欢 + verb + 吗.", ["你喜不喜欢看电影？", "Nǐ xǐ bu xǐhuan kàn diànyǐng?"]),
      toZh("It's started raining.", "下雨了。", "Xià yǔ le.", "下雨 + 了 for a change."),
      say("我很喜欢中国菜。", "我很喜欢中国菜: I really like Chinese food.", "Third tones on 我 and 很: let wǒ rise.", "Say you really like Chinese food."),
    ]
  ),
];
