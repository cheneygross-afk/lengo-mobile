// Synced from cheneygross-afk/lengo:src/lib/lessons/zh/concepts.ts by scripts/sync-content.mjs -- edit it there, not here.
// The Chinese course's concept graph: every sound, grammar point and
// function the course teaches, with prerequisites. Lessons tag what they
// teach (`teaches`) and review (`reviews`) with these ids; the validator
// (src/lib/curriculum) uses them to check that nothing is used before it
// is taught, and review and tests use them to pick questions.
// Concepts for modules not written yet are listed so their forms are
// already caught by the leak check (see plugin.ts).

import type { Concept } from "../../curriculum/types";

const c = (level: string, type: Concept["type"], id: string, name: string, gloss: string, requires: string[] = []): Concept => ({
  id: `zh.${type}.${id}`,
  type,
  name,
  gloss,
  level,
  requires: requires.map((r) => (r.startsWith("zh.") ? r : `zh.${r}`)),
});

export const ZH_CONCEPTS: Concept[] = [
  // ---- Pinyin & Tones ----
  c("Pinyin", "sound", "syllables", "Syllable structure", "Initial + final + tone; characters are syllables"),
  c("Pinyin", "sound", "tones", "The four tones", "Level, rising, dipping and falling pitch", ["sound.syllables"]),
  c("Pinyin", "sound", "neutral-tone", "Neutral tone", "Light, unmarked syllables (吗, 妈妈)", ["sound.tones"]),
  c("Pinyin", "sound", "simple-finals", "Simple finals", "a o e i u ü", ["sound.syllables"]),
  c("Pinyin", "sound", "aspiration", "Aspiration", "b/p, d/t: the puff of air; m f n l", ["sound.simple-finals"]),
  c("Pinyin", "sound", "palatals", "g k h, j q x", "Back consonants and the palatal j q x", ["sound.aspiration"]),
  c("Pinyin", "sound", "retroflex", "zh ch sh r, z c s", "Retroflex and dental initials, the buzzing -i", ["sound.palatals"]),
  c("Pinyin", "sound", "compound-finals", "Compound finals", "ai ei ao ou; -n vs -ng", ["sound.simple-finals"]),
  c("Pinyin", "sound", "medials", "i/u/ü finals and y/w spelling", "iao, uan, üe ... and spelling with y and w", ["sound.compound-finals"]),
  c("Pinyin", "sound", "third-tone-sandhi", "Third-tone sandhi", "3+3 becomes 2+3; the half-third tone", ["sound.tones"]),
  c("Pinyin", "sound", "bu-yi-sandhi", "不 and 一 tone changes", "bú/yí before 4th tone, yì before others", ["sound.tones"]),
  c("Pinyin", "sound", "pinyin-spelling", "Reading pinyin", "Tone-mark placement, apostrophes, capitals, erhua", ["sound.medials"]),
  c("Pinyin", "character", "basics", "Characters 101", "Strokes, stroke order, radicals, meaning + sound parts", ["sound.syllables"]),

  // ---- A1 ----
  c("A1", "function", "greetings", "Greetings", "你好/您好, 再见, 早上好", ["sound.tones"]),
  c("A1", "function", "thanks-apologies", "Thanks and apologies", "谢谢/不客气, 对不起/没关系", ["sound.tones"]),
  c("A1", "grammar", "qing", "请 (please)", "请 + verb to invite; 请问", ["function.greetings"]),
  c("A1", "function", "names", "Names and introductions", "我叫…, 我姓…, 您贵姓, 认识你很高兴", ["function.greetings"]),
  c("A1", "grammar", "question-word-in-place", "Question words stay in place", "你叫什么名字？ -- no inversion", ["function.names"]),
  c("A1", "grammar", "pronouns", "Personal pronouns", "我 你 您 他 她 它 + 们", ["function.greetings"]),
  c("A1", "grammar", "shi", "是 with nouns", "A 是 B; no articles", ["grammar.pronouns"]),
  c("A1", "grammar", "bu-negation", "不 negation", "不 + verb/adjective (bú before 4th tone)", ["grammar.shi", "sound.bu-yi-sandhi"]),
  c("A1", "function", "nationality", "Nationalities", "Country + 人; 哪国人", ["grammar.shi"]),
  c("A1", "grammar", "ma-questions", "吗 questions", "Statement + 吗; answer by repeating the verb", ["grammar.shi"]),
  c("A1", "grammar", "ne-questions", "呢 (and you?)", "Noun + 呢 bounces the question back", ["grammar.ma-questions"]),
  c("A1", "grammar", "ye-dou", "也 and 都", "also / all, before the verb", ["grammar.shi"]),
  c("A1", "vocab", "numbers-0-99", "Numbers 0-99", "零 to 九十九; 幺 in phone numbers", ["sound.tones"]),
  c("A1", "grammar", "ji", "几 (how many, small)", "几 + measure word; 几岁", ["vocab.numbers-0-99"]),
  c("A1", "vocab", "numbers-large", "Hundreds and thousands", "百, 千, 零 in the middle", ["vocab.numbers-0-99"]),
  c("A1", "grammar", "er-liang", "二 vs 两", "两 before measure words and 百/千", ["vocab.numbers-large"]),
  c("A1", "function", "money", "Money and prices", "多少钱, 块/元, 毛; 便宜/贵", ["vocab.numbers-large"]),
  c("A1", "grammar", "duoshao", "多少 (how many/much)", "多少 for any number; 多少钱", ["grammar.ji"]),
  c("A1", "grammar", "measure-words", "Measure words", "Number + 个/本/杯/口/只 + noun", ["vocab.numbers-0-99"]),
  c("A1", "grammar", "demonstratives", "这, 那, 哪", "This/that/which + measure word", ["grammar.measure-words"]),
  c("A1", "vocab", "family", "Family members", "爸爸 妈妈 哥哥 姐姐 弟弟 妹妹 …", ["grammar.pronouns"]),
  c("A1", "grammar", "you-meiyou", "有 and 没有", "To have; negated only with 没", ["grammar.measure-words"]),
  c("A1", "grammar", "he-and", "和 (and)", "Joins nouns, not sentences", ["grammar.pronouns"]),
  c("A1", "grammar", "de-possessive", "的 for possession", "Owner + 的 + thing; dropped with family", ["grammar.pronouns"]),
  c("A1", "grammar", "shei", "谁 / 谁的", "Who / whose", ["grammar.question-word-in-place", "grammar.de-possessive"]),
  c("A1", "grammar", "adjective-predicates", "Adjective sentences with 很", "No 是 with adjectives; 很 as a link", ["grammar.bu-negation"]),
  c("A1", "grammar", "tai-le", "太…了", "Too…; 太好了", ["grammar.adjective-predicates"]),
  c("A1", "grammar", "a-not-a", "A-not-A questions", "忙不忙？ 是不是？", ["grammar.ma-questions", "grammar.bu-negation"]),
  c("A1", "vocab", "dates", "Dates and weekdays", "今天/明天/昨天, 月, 号, 星期", ["vocab.numbers-0-99"]),
  c("A1", "grammar", "time-before-verb", "Time words before the verb", "我明天去 -- time comes before the action", ["vocab.dates"]),
  c("A1", "vocab", "clock-time", "Telling the time", "点, 分, 半; 上午/下午/晚上", ["vocab.numbers-0-99", "grammar.time-before-verb"]),
  c("A1", "grammar", "zai-location", "在 (to be at)", "Person/thing + 在 + place", ["grammar.shi"]),
  c("A1", "grammar", "nar-where", "哪儿/哪里 (where)", "在哪儿？", ["grammar.zai-location", "grammar.question-word-in-place"]),
  c("A1", "grammar", "zai-place-verb", "在 + place + verb", "Where an action happens goes before the verb", ["grammar.zai-location"]),
  c("A1", "grammar", "position-words", "Position words", "Noun + 上/下/里/旁边/前面/后面", ["grammar.zai-location"]),
  c("A1", "grammar", "you-existence", "Place + 有 (there is)", "有 for new things, 在 for known ones", ["grammar.position-words", "grammar.you-meiyou"]),
  c("A1", "grammar", "question-words", "More question words", "什么时候, 怎么, 怎么样", ["grammar.question-word-in-place", "grammar.time-before-verb"]),
  c("A1", "grammar", "xiang-yao", "想 and 要", "Would like to / want; 想 needs a verb", ["grammar.bu-negation"]),
  c("A1", "function", "ordering-food", "Ordering food", "服务员, 来…, 买单; food and drink words", ["grammar.xiang-yao", "grammar.measure-words"]),
  c("A1", "grammar", "hui-neng", "会 vs 能", "Learned skill vs able/allowed now", ["grammar.xiang-yao"]),
  c("A1", "grammar", "le-completed", "了 for completed actions", "Verb + 了 (+ object); 了 at the end", ["grammar.time-before-verb"]),
  c("A1", "grammar", "mei-past", "没 for past negation", "没(有) + verb, never with 了", ["grammar.le-completed", "grammar.you-meiyou"]),
  c("A1", "grammar", "hai-mei", "还没 (not yet)", "还没 + verb", ["grammar.mei-past"]),
  c("A1", "grammar", "ba-suggestion", "吧 (suggestion)", "Softens a suggestion: 我们走吧", ["grammar.ma-questions"]),
  c("A1", "grammar", "transport", "Going places and transport", "去/来/回 + place; 坐 + vehicle + 去", ["grammar.zai-place-verb"]),
  c("A1", "vocab", "weather", "Weather", "冷, 热, 下雨, 下雪", ["grammar.adjective-predicates"]),
  c("A1", "grammar", "xihuan", "喜欢", "To like + noun or verb", ["grammar.bu-negation"]),
  c("A1", "grammar", "le-new-situation", "了 for a new situation", "下雨了 -- something has changed", ["grammar.le-completed"]),

  // ---- A2 (planned; listed so their forms are caught by the leak check) ----
  c("A2", "grammar", "guo-experience", "过 (experience)", "Verb + 过: have ever done", ["grammar.le-completed"]),
  c("A2", "grammar", "zai-progressive", "在/正在 … 呢 (ongoing)", "Action in progress", ["grammar.zai-place-verb"]),
  c("A2", "grammar", "bi-comparison", "比 comparisons", "A 比 B + adjective (+ amount)", ["grammar.adjective-predicates"]),
  c("A2", "grammar", "de-complement", "得 complements of degree", "Verb + 得 + description: 说得很好", ["grammar.adjective-predicates"]),
  c("A2", "grammar", "result-complements", "Result complements", "看完, 听懂, 找到, 写错", ["grammar.le-completed"]),
  c("A2", "grammar", "direction-complements", "Direction complements", "Verb + 来/去, 上来, 回去", ["grammar.transport"]),
  c("A2", "grammar", "yinwei-suoyi", "因为…所以…", "Because…so…", ["grammar.adjective-predicates"]),
  c("A2", "grammar", "suiran-danshi", "虽然…但是…", "Although…but…", ["grammar.yinwei-suoyi"]),
  c("A2", "grammar", "yijing", "已经 (already)", "已经 + verb + 了", ["grammar.le-completed"]),
  c("A2", "grammar", "jiu-cai", "就 and 才", "Sooner/later than expected", ["grammar.time-before-verb"]),
  c("A2", "grammar", "yao-le", "要…了 (about to)", "Something is about to happen", ["grammar.le-new-situation"]),
  c("A2", "grammar", "cong-dao", "从…到…", "From…to… (time and place)", ["grammar.transport"]),
  c("A2", "grammar", "gei-for", "给 (for, to)", "给 + person + verb", ["grammar.he-and"]),
  c("A2", "grammar", "rang-causative", "让 (let, make)", "让 + person + verb", ["grammar.xiang-yao"]),
  c("A2", "grammar", "ruguo", "如果…就…", "If…then…", ["grammar.jiu-cai"]),
  c("A2", "grammar", "haishi-huozhe", "还是 vs 或者", "Or in questions vs statements", ["grammar.ma-questions"]),
  c("A2", "grammar", "yibian", "一边…一边…", "Doing two things at once", ["grammar.zai-progressive"]),
  c("A2", "grammar", "zhe-state", "着 (ongoing state)", "Verb + 着", ["grammar.zai-progressive"]),
  c("A2", "grammar", "ba-construction", "把 sentences (intro)", "把 + object + verb + result", ["grammar.result-complements"]),
  c("A2", "grammar", "yue-yue", "越…越…", "The more…the more…", ["grammar.bi-comparison"]),
  c("B1", "grammar", "bei-passive", "被 passive", "Object + 被 + doer + verb", ["grammar.ba-construction"]),
];
