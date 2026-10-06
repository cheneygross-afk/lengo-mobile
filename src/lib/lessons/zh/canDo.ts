// Synced from cheneygross-afk/lengo:src/lib/lessons/zh/canDo.ts by scripts/sync-content.mjs -- edit it there, not here.
// Can-do statements for the Chinese course, each linked to the concepts
// it depends on (concepts.ts), so a level page can say how many a learner
// can already do -- from the lessons they've finished now, from concept
// mastery once the review scheduler tracks it (docs/curriculum-
// architecture.md, section 7.2). Every concept must be taught in the
// same module; check.ts verifies that.

import type { CanDoStatement } from "../../curriculum/assess";

const s = (id: string, skill: CanDoStatement["skill"], text: string, concepts: string[]): CanDoStatement => ({
  id: `zh.${id}`,
  skill,
  text,
  concepts: concepts.map((c) => `zh.${c}`),
});

/** By module path ("a1"). */
export const ZH_CAN_DO: Record<string, CanDoStatement[]> = {
  pinyin: [
    s("pinyin.tones", "listening", "I can hear the four tones and the neutral tone, and tell them apart in two-syllable words.", ["sound.tones", "sound.neutral-tone"]),
    s("pinyin.read", "reading", "I can read any syllable written in pinyin aloud, including tone marks, apostrophes and erhua.", ["sound.pinyin-spelling", "sound.medials", "sound.compound-finals"]),
    s("pinyin.sounds", "speaking", "I can pronounce the initials English doesn't have: the aspirated pairs, j/q/x and zh/ch/sh/r.", ["sound.aspiration", "sound.palatals", "sound.retroflex"]),
    s("pinyin.sandhi", "speaking", "I can apply tone changes as I speak: two third tones, and 不 and 一.", ["sound.third-tone-sandhi", "sound.bu-yi-sandhi"]),
    s("pinyin.characters", "reading", "I understand how characters are built and can use radicals as clues to meaning.", ["character.basics"]),
  ],
  a1: [
    s("a1.greet", "interaction", "I can greet people, thank them, apologise and say goodbye politely.", ["function.greetings", "function.thanks-apologies", "grammar.qing"]),
    s("a1.introduce", "speaking", "I can introduce myself -- name, nationality, job -- and ask others the same.", ["function.names", "grammar.shi", "function.nationality", "grammar.question-word-in-place"]),
    s("a1.questions", "interaction", "I can ask and answer simple yes/no questions and bounce a question back.", ["grammar.ma-questions", "grammar.ne-questions", "grammar.a-not-a"]),
    s("a1.numbers", "listening", "I can understand numbers, prices, ages, dates and clock times.", ["vocab.numbers-0-99", "vocab.numbers-large", "function.money", "vocab.dates", "vocab.clock-time"]),
    s("a1.family", "speaking", "I can talk about my family and what I have, counting things with measure words.", ["vocab.family", "grammar.you-meiyou", "grammar.measure-words"]),
    s("a1.describe", "speaking", "I can describe people and things with simple adjectives.", ["grammar.adjective-predicates", "grammar.tai-le", "grammar.de-possessive"]),
    s("a1.where", "interaction", "I can ask where people and things are, and say where I live and work.", ["grammar.zai-location", "grammar.nar-where", "grammar.zai-place-verb", "grammar.position-words"]),
    s("a1.order", "interaction", "I can order food and drink and say what I want or would like to do.", ["grammar.xiang-yao", "function.ordering-food"]),
    s("a1.past", "speaking", "I can say what I did and didn't do, and what I can do.", ["grammar.le-completed", "grammar.mei-past", "grammar.hui-neng"]),
    s("a1.around", "interaction", "I can say how I get places, suggest plans, and talk about the weather and what I like.", ["grammar.transport", "grammar.ba-suggestion", "vocab.weather", "grammar.xihuan"]),
  ],
  a2: [
    s("a2.experience", "speaking", "I can talk about things I have and haven't done, and what is going on right now.", ["grammar.guo-experience", "grammar.zai-progressive", "grammar.yijing"]),
    s("a2.compare", "speaking", "I can compare people, places and things, and say how something is changing.", ["grammar.bi-comparison", "grammar.meiyou-comparison", "grammar.yue-yue"]),
    s("a2.howwell", "speaking", "I can say how well or how someone does something.", ["grammar.de-complement", "grammar.di-adverbial"]),
    s("a2.shopping", "interaction", "I can shop for clothes: ask for colours and sizes, try things on, and choose between options.", ["vocab.clothes-colors", "grammar.haishi-huozhe"]),
    s("a2.tasks", "interaction", "I can give and follow simple instructions about doing things to objects and moving them around.", ["grammar.result-complements", "grammar.direction-complements", "grammar.ba-construction"]),
    s("a2.plans", "interaction", "I can make plans by phone: suggest a time and place and arrange to meet.", ["function.phone", "grammar.cong-dao", "grammar.gei-for"]),
    s("a2.time", "speaking", "I can describe the order of events and how long things took.", ["grammar.yiqian-yihou", "grammar.duration", "grammar.jiu-cai", "grammar.yao-le"]),
    s("a2.way", "listening", "I can ask the way and follow simple directions.", ["function.directions"]),
    s("a2.reasons", "speaking", "I can give reasons, contrasts and conditions in connected sentences.", ["grammar.yinwei-suoyi", "grammar.suiran-danshi", "grammar.ruguo"]),
    s("a2.health", "interaction", "I can explain what's wrong at the doctor's and understand simple advice.", ["vocab.health", "grammar.yinggai-keyi"]),
  ],
  b1: [
    s("b1.opinions", "speaking", "I can give and ask for opinions, and compare things, including the best and the worst.", ["grammar.juede-renwei", "grammar.zui-bijiao", "grammar.youyou"]),
    s("b1.interests", "interaction", "I can talk about what I'm interested in and ask how old, far or big something is.", ["grammar.dui-guanyu", "grammar.duo-adj"]),
    s("b1.past-details", "speaking", "I can say when, where and how something happened.", ["grammar.shi-de"]),
    s("b1.ability", "interaction", "I can say whether I can manage something -- understand, find, finish -- and how things look or sound.", ["grammar.potential-complements", "grammar.qilai"]),
    s("b1.timing", "speaking", "I can say what has just happened, what happens as soon as something else does, and what happened again.", ["grammar.gang", "grammar.yi-jiu", "grammar.you-zai"]),
    s("b1.mishaps", "speaking", "I can report things that happened to me, and say what I did with things.", ["grammar.bei-passive", "grammar.ba-cheng"]),
    s("b1.work-travel", "interaction", "I can talk about my job and handle a hotel stay.", ["vocab.work", "function.travel", "vocab.measure-range"]),
    s("b1.linking", "writing", "I can link ideas: not only, besides, even, as long as and only if.", ["grammar.budan-erqie", "grammar.chule-yiwai", "grammar.lian-dou", "grammar.zhiyao-jiu", "grammar.zhiyou-cai"]),
    s("b1.everything", "speaking", "I can say anything, everyone, nowhere and the like with question words.", ["grammar.indefinite-question-words"]),
    s("b1.life", "speaking", "I can describe my feelings, tell a story in order and talk about my studies.", ["vocab.feelings", "function.sequencing", "vocab.education"]),
  ],
  b2: [
    s("b2.conditions", "speaking", "I can say what holds even if, no matter what, and since something is so -- and warn what happens otherwise.", ["grammar.jishi-ye", "grammar.buguan-dou", "grammar.jiran-jiu", "grammar.fouze"]),
    s("b2.concession", "writing", "I can admit a point and still argue against it.", ["grammar.jinguan", "grammar.bing-negation"]),
    s("b2.cause-purpose", "writing", "I can explain causes, purposes and results, in everyday and formal style.", ["grammar.weile", "grammar.youyu-yinci", "grammar.yushi", "grammar.jieguo", "grammar.zhihao-budebu"]),
    s("b2.attitude", "interaction", "I can show surprise, doubt, impatience and polite regret.", ["grammar.nandao", "grammar.daodi", "grammar.jingran", "grammar.kongpa", "grammar.chadianr"]),
    s("b2.formal", "reading", "I can follow notices, news and essays that use formal written words.", ["grammar.formal-words", "grammar.dui-laishuo", "grammar.zai-fangmian", "grammar.suizhe"]),
    s("b2.idioms", "speaking", "I can understand and use common four-character idioms.", ["vocab.chengyu"]),
    s("b2.society", "interaction", "I can discuss the environment, life online and Chinese festivals and customs.", ["vocab.environment", "vocab.internet", "function.customs"]),
  ],
  // From C1 the statements are in Chinese, like the lessons.
  c1: [
    s("c1.argue", "writing", "我能有条理地讲道理：提出转折、比较做法、表明决心，并做出总结。", ["grammar.ran-er", "grammar.yuqi-buru", "grammar.ningke", "function.shouxian-qici", "function.zongzhi"]),
    s("c1.tone", "speaking", "我能用合适的语气强调程度、表达意外和无所谓。", ["grammar.degree", "grammar.shenzhi", "grammar.hekuang", "grammar.fan-er", "grammar.fanzheng"]),
    s("c1.written", "reading", "我能读懂书面语里常见的文言成分。", ["grammar.zhi", "grammar.qi", "grammar.yi-wei", "grammar.wei-suo", "grammar.written-negatives"]),
    s("c1.work", "interaction", "我能参加会议和谈判，写正式的邮件，参加面试。", ["vocab.meetings", "vocab.negotiation", "function.business-email", "function.interview", "function.formal-politeness"]),
    s("c1.news", "reading", "我能看懂新闻和数据，并讨论社会问题。", ["function.news", "vocab.data-trends", "vocab.society"]),
  ],
  c2: [
    s("c2.classical", "reading", "我能读懂书面语里的文言虚词：者、以便、以免、因…而、即、乃、何。", ["grammar.zhe", "grammar.yibian-yimian", "grammar.yin-er", "grammar.ji-nai", "grammar.he"]),
    s("c2.rhetoric", "writing", "我能用比喻、排比、反问和夸张让表达更生动，并听懂语气词的语气。", ["function.biyu", "function.paibi", "function.fanwen", "function.kuazhang", "grammar.yuqi-ci"]),
    s("c2.sayings", "speaking", "我能理解并恰当地使用成语、俗语和歇后语，分清词语的褒贬。", ["vocab.chengyu-stories", "vocab.suyu", "vocab.xiehouyu", "vocab.baobian"]),
    s("c2.variation", "interaction", "我能听懂不同地方的说法和网络用语，并根据场合选择口语或书面语。", ["vocab.regional", "vocab.cross-strait", "vocab.cantonese-loans", "vocab.internet-slang", "function.register"]),
    s("c2.culture", "writing", "我能读懂简单的古诗和《论语》名句，并写一篇结构清楚的议论文。", ["function.poetry", "function.classics", "function.essay"]),
  ],
};
