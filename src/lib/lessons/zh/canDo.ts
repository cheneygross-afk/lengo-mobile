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
};
