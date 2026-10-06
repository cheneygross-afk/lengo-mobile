// Synced from cheneygross-afk/lengo:src/lib/lessons/zh/specs.ts by scripts/sync-content.mjs -- edit it there, not here.
// Level specs for the Chinese course: each level's units (which authored
// lessons each one holds) and the reinforce/drill lessons drafted from a
// spec to follow each teach lesson. assemble.ts builds the course from
// these plus the concept graph -- spaced reviews, unit reviews and the
// level test are generated, not listed here. See
// docs/curriculum-architecture.md (sections 3.1 and 6).
//
// To add a lesson: write it (authored teach lesson, or a layer drafted
// with `layer()` in authoring.ts against its spec here), add its slug to
// a unit or its spec to `layers`, then run
//   node --experimental-strip-types scripts/zh-curriculum.mjs check

import type { AssemblyStrings, ExerciseMix, LayerSpec, LevelSpec, UnitSpec } from "../../curriculum/spec";
import { conceptId } from "./authoring";

function unit(id: string, title: string, description: string, lessons: string[]): UnitSpec {
  return { id, title, description, lessons };
}

function layerSpec(
  slug: string,
  kind: LayerSpec["kind"],
  format: string,
  after: string,
  reviews: string[],
  mix?: ExerciseMix
): LayerSpec {
  const s: LayerSpec = { slug, kind, format, after, reviews: reviews.map(conceptId) };
  if (mix) s.mix = mix;
  return s;
}

const R = (slug: string, format: string, after: string, reviews: string[], mix?: ExerciseMix) =>
  layerSpec(slug, "reinforce", format, after, reviews, mix);
const D = (slug: string, format: string, after: string, reviews: string[], mix?: ExerciseMix) =>
  layerSpec(slug, "drill", format, after, reviews, mix);

// Sound drills need ears and voice, not just typing.
const SOUND: ExerciseMix = { production: 5, "listen-choose": 3, speak: 2 };

export const ZH_PINYIN_SPEC: LevelSpec = {
  code: "Pinyin",
  path: "pinyin",
  level: "ZH-Pinyin",
  slugPrefix: "zh-pinyin",
  units: [
    unit("zh-pinyin-u1", "Tones and sounds", "What a syllable is, the four tones and the neutral tone, and every initial and simple final.", [
      "zh-how-chinese-works",
      "zh-four-tones",
      "zh-simple-finals",
      "zh-initials-b-p-m-f-d-t-n-l",
      "zh-initials-g-k-h-j-q-x",
      "zh-initials-zh-ch-sh-r-z-c-s",
    ]),
    unit("zh-pinyin-u2", "Spelling, tone changes and characters", "Compound finals, y/w spelling, third-tone sandhi, 不 and 一, reading pinyin fluently, and how characters are built.", [
      "zh-compound-finals",
      "zh-medials-and-spelling",
      "zh-third-tone-sandhi",
      "zh-bu-yi-tone-changes",
      "zh-reading-pinyin",
      "zh-characters-101",
      "zh-pinyin-review",
    ]),
  ],
  layers: [
    D("zh-drill-tone-pairs", "Tone pairs", "zh-four-tones", ["sound.tones", "sound.neutral-tone"], SOUND),
    D("zh-drill-initials", "Minimal pairs", "zh-initials-zh-ch-sh-r-z-c-s", ["sound.aspiration", "sound.palatals", "sound.retroflex"], SOUND),
    D("zh-drill-finals", "Minimal pairs", "zh-compound-finals", ["sound.compound-finals", "sound.simple-finals"], SOUND),
    D("zh-drill-sandhi", "Tone pairs", "zh-third-tone-sandhi", ["sound.third-tone-sandhi", "sound.tones"], SOUND),
    D("zh-drill-bu-yi", "Pattern practice", "zh-bu-yi-tone-changes", ["sound.bu-yi-sandhi"], { production: 6, speak: 2 }),
    D("zh-drill-reading-pinyin", "Speed round", "zh-reading-pinyin", ["sound.pinyin-spelling", "sound.syllables"], { production: 6, "listen-choose": 2 }),
    D("zh-drill-characters", "Character focus", "zh-characters-101", ["character.basics"], { production: 4, matching: 1 }),
  ],
};

export const ZH_A1_SPEC: LevelSpec = {
  code: "A1",
  path: "a1",
  level: "ZH-A1",
  slugPrefix: "zh-a1",
  units: [
    unit("zh-a1-u1", "Hello, who are you?", "Greetings, thanks and apologies, names, pronouns, 是 and 不.", [
      "zh-greetings",
      "zh-names-introductions",
      "zh-pronouns-shi",
    ]),
    unit("zh-a1-u2", "Questions and numbers", "Yes/no questions with 吗, 呢, 也 and 都; numbers, 几, prices and 多少.", [
      "zh-questions-ma-ne-ye-dou",
      "zh-numbers-0-99",
      "zh-numbers-money",
    ]),
    unit("zh-a1-u3", "Things and people", "Measure words, this and that, family, 有 and 没有, and 的.", [
      "zh-measure-words",
      "zh-family-you",
      "zh-possessive-de",
    ]),
    unit("zh-a1-u4", "Describing, dates and time", "Adjective sentences with 很, 太…了 and A-not-A questions; dates, days and clock time.", [
      "zh-adjectives-hen",
      "zh-dates",
      "zh-telling-time",
    ]),
    unit("zh-a1-u5", "Where things are", "在 for location and activity, position words, 有 for existence, and every question word.", [
      "zh-places-zai",
      "zh-position-words",
      "zh-question-words",
    ]),
    unit("zh-a1-u6", "Wants, abilities and the past", "想 and 要, ordering food, 会 and 能, and finished actions with 了 and 没.", [
      "zh-wanting-ordering",
      "zh-ability-hui-neng",
      "zh-le-completed-actions",
    ]),
    unit("zh-a1-u7", "Out and about", "Transport and suggestions with 吧, the weather and likes, then the whole of A1 together.", [
      "zh-getting-around",
      "zh-weather-likes",
      "zh-a1-review",
    ]),
  ],
  layers: [
    // Unit 1
    R("zh-a1r-greetings", "Dialogue", "zh-greetings", ["function.greetings", "function.thanks-apologies", "grammar.qing"]),
    D("zh-a1d-greetings", "Pattern practice", "zh-greetings", ["function.greetings", "function.thanks-apologies"]),
    R("zh-a1r-introductions", "Mission", "zh-names-introductions", ["function.names", "grammar.question-word-in-place"]),
    D("zh-a1d-names", "Pattern practice", "zh-names-introductions", ["function.names"]),
    R("zh-a1r-shi-errors", "Error hunt", "zh-pronouns-shi", ["grammar.shi", "grammar.bu-negation", "grammar.pronouns"]),
    D("zh-a1d-shi", "Pattern practice", "zh-pronouns-shi", ["grammar.shi", "grammar.bu-negation"]),
    D("zh-a1d-nationality", "Substitution", "zh-pronouns-shi", ["function.nationality", "grammar.pronouns"]),
    // Unit 2
    R("zh-a1r-questions", "Transform", "zh-questions-ma-ne-ye-dou", ["grammar.ma-questions", "grammar.ne-questions"]),
    D("zh-a1d-ma", "Pattern practice", "zh-questions-ma-ne-ye-dou", ["grammar.ma-questions"]),
    D("zh-a1d-ye-dou", "Circuit", "zh-questions-ma-ne-ye-dou", ["grammar.ye-dou"]),
    R("zh-a1r-numbers", "Mission", "zh-numbers-0-99", ["vocab.numbers-0-99", "grammar.ji"]),
    D("zh-a1d-numbers", "Speed round", "zh-numbers-0-99", ["vocab.numbers-0-99", "grammar.ji"], { production: 6, "listen-choose": 2 }),
    R("zh-a1r-shopping", "Dialogue", "zh-numbers-money", ["function.money", "grammar.duoshao", "vocab.numbers-large"]),
    D("zh-a1d-er-liang", "Pattern practice", "zh-numbers-money", ["grammar.er-liang", "vocab.numbers-large", "function.money"]),
    // Unit 3
    R("zh-a1r-measure-words", "Contrast", "zh-measure-words", ["grammar.measure-words"]),
    D("zh-a1d-measure-words", "Pattern practice", "zh-measure-words", ["grammar.measure-words"]),
    D("zh-a1d-this-that", "Substitution", "zh-measure-words", ["grammar.demonstratives", "grammar.measure-words"]),
    R("zh-a1r-family", "Mission", "zh-family-you", ["vocab.family", "grammar.you-meiyou"]),
    D("zh-a1d-you-meiyou", "Pattern practice", "zh-family-you", ["grammar.you-meiyou", "grammar.he-and"]),
    R("zh-a1r-de-errors", "Error hunt", "zh-possessive-de", ["grammar.de-possessive", "grammar.shei"]),
    D("zh-a1d-de", "Substitution", "zh-possessive-de", ["grammar.de-possessive", "grammar.shei"]),
    // Unit 4
    R("zh-a1r-adjectives", "Contrast", "zh-adjectives-hen", ["grammar.adjective-predicates", "grammar.tai-le"]),
    D("zh-a1d-hen", "Pattern practice", "zh-adjectives-hen", ["grammar.adjective-predicates", "grammar.tai-le"]),
    D("zh-a1d-a-not-a", "Circuit", "zh-adjectives-hen", ["grammar.a-not-a"]),
    R("zh-a1r-dates", "Mission", "zh-dates", ["vocab.dates", "grammar.time-before-verb"]),
    D("zh-a1d-dates", "Speed round", "zh-dates", ["vocab.dates"], { production: 6, "listen-choose": 2 }),
    R("zh-a1r-time", "Dialogue", "zh-telling-time", ["vocab.clock-time", "grammar.time-before-verb"]),
    D("zh-a1d-time-order", "Pattern practice", "zh-telling-time", ["grammar.time-before-verb", "vocab.clock-time"]),
    D("zh-a1d-clock", "Speed round", "zh-telling-time", ["vocab.clock-time"], { production: 6, "listen-choose": 2 }),
    // Unit 5
    R("zh-a1r-zai", "Contrast", "zh-places-zai", ["grammar.zai-location", "grammar.zai-place-verb"]),
    D("zh-a1d-zai", "Pattern practice", "zh-places-zai", ["grammar.zai-location", "grammar.nar-where"]),
    D("zh-a1d-zai-verb", "Circuit", "zh-places-zai", ["grammar.zai-place-verb"]),
    R("zh-a1r-positions", "Mission", "zh-position-words", ["grammar.position-words", "grammar.you-existence"]),
    D("zh-a1d-positions", "Pattern practice", "zh-position-words", ["grammar.position-words", "grammar.you-existence"]),
    R("zh-a1r-question-words", "Transform", "zh-question-words", ["grammar.question-words"]),
    D("zh-a1d-question-words", "Circuit", "zh-question-words", ["grammar.question-words"]),
    // Unit 6
    R("zh-a1r-ordering", "Dialogue", "zh-wanting-ordering", ["grammar.xiang-yao", "function.ordering-food"]),
    D("zh-a1d-xiang-yao", "Pattern practice", "zh-wanting-ordering", ["grammar.xiang-yao"]),
    R("zh-a1r-hui-neng", "Contrast", "zh-ability-hui-neng", ["grammar.hui-neng"]),
    D("zh-a1d-hui-neng", "Pattern practice", "zh-ability-hui-neng", ["grammar.hui-neng"]),
    R("zh-a1r-le", "Contrast", "zh-le-completed-actions", ["grammar.le-completed", "grammar.mei-past", "grammar.hai-mei"]),
    D("zh-a1d-le", "Pattern practice", "zh-le-completed-actions", ["grammar.le-completed"]),
    D("zh-a1d-mei", "Substitution", "zh-le-completed-actions", ["grammar.mei-past", "grammar.hai-mei"]),
    // Unit 7
    R("zh-a1r-transport", "Mission", "zh-getting-around", ["grammar.transport", "grammar.ba-suggestion"]),
    D("zh-a1d-transport", "Pattern practice", "zh-getting-around", ["grammar.transport", "grammar.ba-suggestion"]),
    R("zh-a1r-weather", "Dialogue", "zh-weather-likes", ["vocab.weather", "grammar.xihuan", "grammar.le-new-situation"]),
    D("zh-a1d-xihuan", "Pattern practice", "zh-weather-likes", ["grammar.xihuan", "grammar.le-new-situation"]),
  ],
};

export const ZH_A2_SPEC: LevelSpec = {
  code: "A2",
  path: "a2",
  level: "ZH-A2",
  slugPrefix: "zh-a2",
  units: [
    unit("zh-a2-u1", "Experiences and right now", "过 for experiences, 在…呢 and 着 for what's going on, 一边…一边, hobbies and 已经.", [
      "zh-a2-guo-experience",
      "zh-a2-zai-progressive",
      "zh-a2-zhe-state",
      "zh-a2-yibian",
      "zh-a2-hobbies",
      "zh-a2-yijing",
    ]),
    unit("zh-a2-u2", "Comparing and describing", "比 and 没有…那么, 一样, how well with 得 and how with 地, 越…越, clothes and colours, and two words for \"or.\"", [
      "zh-a2-bi-comparison",
      "zh-a2-meiyou-comparison",
      "zh-a2-de-complement",
      "zh-a2-di-adverbial",
      "zh-a2-yue-yue",
      "zh-a2-clothes-shopping",
      "zh-a2-haishi-huozhe",
    ]),
    unit("zh-a2-u3", "Getting things done", "Result and direction complements, 给 for and to, 把 sentences, 让, and making plans by phone.", [
      "zh-a2-result-complements",
      "zh-a2-direction-complements",
      "zh-a2-gei-for",
      "zh-a2-ba-construction",
      "zh-a2-rang-causative",
      "zh-a2-phone-plans",
    ]),
    unit("zh-a2-u4", "Time and the way there", "从…到, 就 and 才, 要…了, how long, before/after/when, and asking the way.", [
      "zh-a2-cong-dao",
      "zh-a2-jiu-cai",
      "zh-a2-yao-le",
      "zh-a2-duration",
      "zh-a2-before-after",
      "zh-a2-directions",
    ]),
    unit("zh-a2-u5", "Reasons, conditions and advice", "因为…所以, 虽然…但是, 如果…就, health and the doctor, should/may/must, and the whole of A2 together.", [
      "zh-a2-yinwei-suoyi",
      "zh-a2-suiran-danshi",
      "zh-a2-ruguo",
      "zh-a2-health",
      "zh-a2-yinggai-keyi",
      "zh-a2-review",
    ]),
  ],
  // One practice lesson per teach lesson: at A2 the units already hold six
  // or seven teach lessons, and a unit stays within 15 required lessons.
  layers: [
    // Unit 1
    D("zh-a2d-guo", "Pattern practice", "zh-a2-guo-experience", ["grammar.guo-experience"]),
    D("zh-a2d-zai-ne", "Pattern practice", "zh-a2-zai-progressive", ["grammar.zai-progressive"]),
    R("zh-a2r-zai-zhe", "Contrast", "zh-a2-zhe-state", ["grammar.zhe-state", "grammar.zai-progressive"]),
    D("zh-a2d-yibian", "Substitution", "zh-a2-yibian", ["grammar.yibian"]),
    R("zh-a2r-hobbies", "Mission", "zh-a2-hobbies", ["vocab.hobbies"]),
    R("zh-a2r-yijing", "Contrast", "zh-a2-yijing", ["grammar.yijing", "grammar.hai-mei"]),
    // Unit 2
    D("zh-a2d-bi", "Pattern practice", "zh-a2-bi-comparison", ["grammar.bi-comparison"]),
    R("zh-a2r-comparing", "Contrast", "zh-a2-meiyou-comparison", ["grammar.meiyou-comparison", "grammar.bi-comparison"]),
    D("zh-a2d-de", "Pattern practice", "zh-a2-de-complement", ["grammar.de-complement"]),
    R("zh-a2r-three-de", "Error hunt", "zh-a2-di-adverbial", ["grammar.di-adverbial", "grammar.de-complement", "grammar.de-possessive"]),
    D("zh-a2d-yue", "Circuit", "zh-a2-yue-yue", ["grammar.yue-yue"]),
    R("zh-a2r-clothes", "Dialogue", "zh-a2-clothes-shopping", ["vocab.clothes-colors"]),
    { ...D("zh-a2d-or", "Circuit", "zh-a2-haishi-huozhe", ["grammar.haishi-huozhe"]), optional: true },
    // Unit 3
    D("zh-a2d-results", "Pattern practice", "zh-a2-result-complements", ["grammar.result-complements"]),
    D("zh-a2d-directions-comp", "Substitution", "zh-a2-direction-complements", ["grammar.direction-complements"]),
    R("zh-a2r-gei", "Transform", "zh-a2-gei-for", ["grammar.gei-for"]),
    D("zh-a2d-ba", "Pattern practice", "zh-a2-ba-construction", ["grammar.ba-construction"]),
    R("zh-a2r-rang-gei", "Contrast", "zh-a2-rang-causative", ["grammar.rang-causative", "grammar.gei-for"]),
    R("zh-a2r-phone", "Dialogue", "zh-a2-phone-plans", ["function.phone"]),
    // Unit 4
    D("zh-a2d-cong-dao", "Pattern practice", "zh-a2-cong-dao", ["grammar.cong-dao"]),
    R("zh-a2r-jiu-cai", "Contrast", "zh-a2-jiu-cai", ["grammar.jiu-cai"]),
    D("zh-a2d-yao-le", "Speed round", "zh-a2-yao-le", ["grammar.yao-le"], { production: 6, "listen-choose": 2 }),
    D("zh-a2d-duration", "Pattern practice", "zh-a2-duration", ["grammar.duration"]),
    R("zh-a2r-sequence", "Transform", "zh-a2-before-after", ["grammar.yiqian-yihou"]),
    R("zh-a2r-directions", "Mission", "zh-a2-directions", ["function.directions"]),
    // Unit 5
    R("zh-a2r-because", "Transform", "zh-a2-yinwei-suoyi", ["grammar.yinwei-suoyi"]),
    D("zh-a2d-although", "Pattern practice", "zh-a2-suiran-danshi", ["grammar.suiran-danshi"]),
    D("zh-a2d-if", "Circuit", "zh-a2-ruguo", ["grammar.ruguo"]),
    R("zh-a2r-doctor", "Dialogue", "zh-a2-health", ["vocab.health"]),
    R("zh-a2r-advice", "Contrast", "zh-a2-yinggai-keyi", ["grammar.yinggai-keyi", "grammar.hui-neng"]),
  ],
};

export const ZH_B1_SPEC: LevelSpec = {
  code: "B1",
  path: "b1",
  level: "ZH-B1",
  slugPrefix: "zh-b1",
  units: [
    unit("zh-b1-u1", "Opinions and comparisons", "最 and 比较, 觉得 and 认为, 多 + adjective questions, 又…又, 对 and 关于, and 是…的 for the details of the past.", [
      "zh-b1-zui-bijiao",
      "zh-b1-juede-renwei",
      "zh-b1-duo-adj",
      "zh-b1-youyou",
      "zh-b1-dui-guanyu",
      "zh-b1-shi-de",
    ]),
    unit("zh-b1-u2", "Can you manage it?", "Potential complements, 起来, doing things briefly (看看, 一下), 一…就, 刚 and 刚才, and 又 vs. 再.", [
      "zh-b1-potential-complements",
      "zh-b1-qilai",
      "zh-b1-verb-reduplication",
      "zh-b1-yi-jiu",
      "zh-b1-gang",
      "zh-b1-you-zai",
    ]),
    unit("zh-b1-u3", "Doing things to things", "The 被 passive, 把 into/to/for, more measure words, and Chinese at work and on the road.", [
      "zh-b1-bei-passive",
      "zh-b1-ba-cheng",
      "zh-b1-measure-range",
      "zh-b1-work",
      "zh-b1-travel",
    ]),
    unit("zh-b1-u4", "Linking ideas", "不但…而且, 除了…以外, 连…都, 只要…就 and 只有…才, and question words meaning any-, every- and no-.", [
      "zh-b1-budan-erqie",
      "zh-b1-chule-yiwai",
      "zh-b1-lian-dou",
      "zh-b1-zhiyao-jiu",
      "zh-b1-zhiyou-cai",
      "zh-b1-indefinite",
    ]),
    unit("zh-b1-u5", "Life and study", "Feelings, telling things in order, school and study, and the whole of B1 together.", [
      "zh-b1-feelings",
      "zh-b1-sequencing",
      "zh-b1-education",
      "zh-b1-review",
    ]),
  ],
  // One practice lesson per teach lesson, as at A2.
  layers: [
    // Unit 1
    D("zh-b1d-zui", "Pattern practice", "zh-b1-zui-bijiao", ["grammar.zui-bijiao"]),
    R("zh-b1r-opinions", "Dialogue", "zh-b1-juede-renwei", ["grammar.juede-renwei"]),
    D("zh-b1d-duo-adj", "Speed round", "zh-b1-duo-adj", ["grammar.duo-adj"], { production: 6, "listen-choose": 2 }),
    D("zh-b1d-youyou", "Substitution", "zh-b1-youyou", ["grammar.youyou"]),
    R("zh-b1r-interests", "Mission", "zh-b1-dui-guanyu", ["grammar.dui-guanyu"]),
    R("zh-b1r-shi-de", "Contrast", "zh-b1-shi-de", ["grammar.shi-de", "grammar.le-completed"]),
    // Unit 2
    D("zh-b1d-potential", "Pattern practice", "zh-b1-potential-complements", ["grammar.potential-complements"]),
    R("zh-b1r-qilai", "Transform", "zh-b1-qilai", ["grammar.qilai"]),
    D("zh-b1d-reduplication", "Substitution", "zh-b1-verb-reduplication", ["grammar.verb-reduplication"]),
    D("zh-b1d-yi-jiu", "Circuit", "zh-b1-yi-jiu", ["grammar.yi-jiu"]),
    R("zh-b1r-gang", "Contrast", "zh-b1-gang", ["grammar.gang", "grammar.yijing"]),
    D("zh-b1d-you-zai", "Circuit", "zh-b1-you-zai", ["grammar.you-zai"]),
    // Unit 3
    R("zh-b1r-ba-bei", "Transform", "zh-b1-bei-passive", ["grammar.bei-passive", "grammar.ba-construction"]),
    D("zh-b1d-ba-cheng", "Pattern practice", "zh-b1-ba-cheng", ["grammar.ba-cheng"]),
    D("zh-b1d-measure", "Speed round", "zh-b1-measure-range", ["vocab.measure-range"], { production: 6, "listen-choose": 2 }),
    R("zh-b1r-work", "Dialogue", "zh-b1-work", ["vocab.work"]),
    R("zh-b1r-hotel", "Mission", "zh-b1-travel", ["function.travel"]),
    // Unit 4
    D("zh-b1d-budan", "Pattern practice", "zh-b1-budan-erqie", ["grammar.budan-erqie"]),
    D("zh-b1d-chule", "Circuit", "zh-b1-chule-yiwai", ["grammar.chule-yiwai"]),
    R("zh-b1r-lian", "Transform", "zh-b1-lian-dou", ["grammar.lian-dou"]),
    R("zh-b1r-conditions", "Contrast", "zh-b1-zhiyou-cai", ["grammar.zhiyou-cai", "grammar.zhiyao-jiu", "grammar.ruguo"]),
    D("zh-b1d-zhiyao", "Pattern practice", "zh-b1-zhiyao-jiu", ["grammar.zhiyao-jiu"]),
    D("zh-b1d-indefinite", "Substitution", "zh-b1-indefinite", ["grammar.indefinite-question-words"]),
    // Unit 5
    R("zh-b1r-feelings", "Dialogue", "zh-b1-feelings", ["vocab.feelings"]),
    R("zh-b1r-story", "Mission", "zh-b1-sequencing", ["function.sequencing"]),
    R("zh-b1r-study", "Dialogue", "zh-b1-education", ["vocab.education"]),
  ],
};

export const ZH_B2_SPEC: LevelSpec = {
  code: "B2",
  path: "b2",
  level: "ZH-B2",
  slugPrefix: "zh-b2",
  units: [
    unit("zh-b2-u1", "Conditions and concessions", "即使…也, 不管/无论…都, 既然…就, 否则 and 不然, and the formal 尽管.", [
      "zh-b2-jishi",
      "zh-b2-buguan",
      "zh-b2-jiran",
      "zh-b2-fouze",
      "zh-b2-jinguan",
    ]),
    unit("zh-b2-u2", "Cause, result and purpose", "为了, 由于…因此, 于是, 结果, and 只好 and 不得不.", [
      "zh-b2-weile",
      "zh-b2-youyu-yinci",
      "zh-b2-yushi",
      "zh-b2-jieguo",
      "zh-b2-zhihao",
    ]),
    unit("zh-b2-u3", "Nuance and emphasis", "并不, 难道…吗, 到底, 竟然 and 没想到, 恐怕, and 差点儿.", [
      "zh-b2-bing",
      "zh-b2-nandao",
      "zh-b2-daodi",
      "zh-b2-jingran",
      "zh-b2-kongpa",
      "zh-b2-chadianr",
    ]),
    unit("zh-b2-u4", "Formal Chinese", "Written-style 是否, 与 and 以及, 对…来说, 在…方面, 随着, and everyday four-character idioms.", [
      "zh-b2-formal",
      "zh-b2-dui-laishuo",
      "zh-b2-fangmian",
      "zh-b2-suizhe",
      "zh-b2-chengyu",
    ]),
    unit("zh-b2-u5", "Society and the world", "The environment, life online, festivals and customs, and the whole of B2 together.", [
      "zh-b2-environment",
      "zh-b2-internet",
      "zh-b2-customs",
      "zh-b2-review",
    ]),
  ],
  // One practice lesson per teach lesson, as at A2 and B1.
  layers: [
    // Unit 1
    D("zh-b2d-jishi", "Pattern practice", "zh-b2-jishi", ["grammar.jishi-ye"]),
    R("zh-b2r-buguan", "Contrast", "zh-b2-buguan", ["grammar.buguan-dou", "grammar.jishi-ye"]),
    D("zh-b2d-jiran", "Substitution", "zh-b2-jiran", ["grammar.jiran-jiu"]),
    R("zh-b2r-fouze", "Dialogue", "zh-b2-fouze", ["grammar.fouze"]),
    R("zh-b2r-concession", "Contrast", "zh-b2-jinguan", ["grammar.jinguan", "grammar.suiran-danshi", "grammar.jishi-ye"]),
    // Unit 2
    D("zh-b2d-weile", "Pattern practice", "zh-b2-weile", ["grammar.weile"]),
    R("zh-b2r-formal-cause", "Transform", "zh-b2-youyu-yinci", ["grammar.youyu-yinci", "grammar.yinwei-suoyi"]),
    R("zh-b2r-yushi", "Mission", "zh-b2-yushi", ["grammar.yushi"]),
    R("zh-b2r-jieguo", "Dialogue", "zh-b2-jieguo", ["grammar.jieguo"]),
    D("zh-b2d-zhihao", "Circuit", "zh-b2-zhihao", ["grammar.zhihao-budebu"]),
    // Unit 3
    R("zh-b2r-bing", "Transform", "zh-b2-bing", ["grammar.bing-negation"]),
    D("zh-b2d-nandao", "Substitution", "zh-b2-nandao", ["grammar.nandao"]),
    D("zh-b2d-daodi", "Circuit", "zh-b2-daodi", ["grammar.daodi"]),
    R("zh-b2r-surprise", "Dialogue", "zh-b2-jingran", ["grammar.jingran"]),
    R("zh-b2r-kongpa", "Mission", "zh-b2-kongpa", ["grammar.kongpa"]),
    D("zh-b2d-chadianr", "Speed round", "zh-b2-chadianr", ["grammar.chadianr"], { production: 6, "listen-choose": 2 }),
    // Unit 4
    R("zh-b2r-formal", "Transform", "zh-b2-formal", ["grammar.formal-words"]),
    D("zh-b2d-laishuo", "Pattern practice", "zh-b2-dui-laishuo", ["grammar.dui-laishuo"]),
    D("zh-b2d-fangmian", "Substitution", "zh-b2-fangmian", ["grammar.zai-fangmian"]),
    R("zh-b2r-suizhe", "Mission", "zh-b2-suizhe", ["grammar.suizhe"]),
    D("zh-b2d-chengyu", "Speed round", "zh-b2-chengyu", ["vocab.chengyu"], { production: 6, "listen-choose": 2 }),
    // Unit 5
    R("zh-b2r-environment", "Dialogue", "zh-b2-environment", ["vocab.environment"]),
    R("zh-b2r-online", "Mission", "zh-b2-internet", ["vocab.internet"]),
    R("zh-b2r-festival", "Dialogue", "zh-b2-customs", ["function.customs"]),
  ],
};

// From C1 everything a learner sees is in Chinese, the generated
// reviews and level test included.
const CHINESE_STRINGS: AssemblyStrings = {
  unitLabel: (n, title) => `第${n}单元 · ${title}`,
  conceptLine: (name, gloss) => `${name}：${gloss}`,
  nameList: (names, more) => `${names.join("、")}${more ? "等" : ""}`,
  spacedTitle: "间隔复习",
  spacedSummary: (list) => `在你快要忘记的时候再练一次：${list}。`,
  spacedHeading: "复习的内容",
  spacedIntro: "这些题目来自前面的单元。在快要忘记的时候复习，记得最牢；有几题觉得比第一次难，是很正常的。",
  unitReviewTitle: (n) => `第${n}单元复习`,
  unitReviewSummary: (list) => `小测验、听力和口语：${list}。`,
  unitReviewHeading: (n) => `第${n}单元一览`,
  unitReviewIntro: "这一课总结本单元：先做一个小测验，再用本单元的句子练习听和说。",
  meaningQuestion: "这句话是什么意思？",
  speakTip: "先听示范，再模仿它的声调。",
  listeningHeading: "听力",
  listeningBody: "听一听，然后选择正确的意思。可以多听几遍。",
  speakingHeading: "口语",
  speakingBody: "大声读每个句子，然后跟示范比较。",
  levelTestTitle: (code) => `${code} 水平测试`,
  levelTestSummary: (total) => `共 ${total} 题，覆盖整个级别：听力、阅读和语法，最后自己写出答案。`,
  part1Heading: "第一部分 · 听力",
  part1Body: "测试包括本级别的所有单元。先做听力，每段录音可以多听几遍。",
  part2Heading: "第二部分 · 阅读和语法",
  part2Body: "选择或排列正确的答案。",
  part3Heading: "第三部分 · 自己写",
  part3Body: "自己输入答案。最后一部分是最难的题目。",
};

export const ZH_C1_SPEC: LevelSpec = {
  strings: CHINESE_STRINGS,
  code: "C1",
  path: "c1",
  level: "ZH-C1",
  slugPrefix: "zh-c1",
  units: [
    unit("zh-c1-u1", "论证与表达", "然而, 与其…不如, 宁可…也不, 首先…其次, 总之: 写文章、讲道理的连接词。", [
      "zh-c1-ran-er",
      "zh-c1-yuqi",
      "zh-c1-ningke",
      "zh-c1-shouxian",
      "zh-c1-zongzhi",
    ]),
    unit("zh-c1-u2", "程度与语气", "极了, 甚至, 何况, 反而, 反正: 加强语气、表达意外。", [
      "zh-c1-degree",
      "zh-c1-shenzhi",
      "zh-c1-hekuang",
      "zh-c1-fan-er",
      "zh-c1-fanzheng",
    ]),
    unit("zh-c1-u3", "书面语里的文言", "之, 其, 以…为…, 为…所, 无/未/勿: 现代书面语里常见的文言成分。", [
      "zh-c1-zhi",
      "zh-c1-qi",
      "zh-c1-yi-wei",
      "zh-c1-wei-suo",
      "zh-c1-negatives",
    ]),
    unit("zh-c1-u4", "职场中文", "开会、谈判、写邮件、面试, 以及正式场合的客气话。", [
      "zh-c1-meetings",
      "zh-c1-negotiation",
      "zh-c1-email",
      "zh-c1-interview",
      "zh-c1-politeness",
    ]),
    unit("zh-c1-u5", "新闻与社会", "看新闻、读数据、谈社会问题, 以及 C1 总复习。", [
      "zh-c1-news",
      "zh-c1-data",
      "zh-c1-society",
      "zh-c1-review",
    ]),
  ],
  // One practice lesson per teach lesson; formats named in Chinese too.
  layers: [
    // Unit 1
    D("zh-c1d-ran-er", "句型练习", "zh-c1-ran-er", ["grammar.ran-er"]),
    R("zh-c1r-yuqi", "改写", "zh-c1-yuqi", ["grammar.yuqi-buru", "grammar.bi-comparison"]),
    R("zh-c1r-ningke", "对比", "zh-c1-ningke", ["grammar.ningke", "grammar.yuqi-buru"]),
    R("zh-c1r-shouxian", "任务", "zh-c1-shouxian", ["function.shouxian-qici"]),
    D("zh-c1d-zongzhi", "循环练习", "zh-c1-zongzhi", ["function.zongzhi"]),
    // Unit 2
    D("zh-c1d-degree", "快速练习", "zh-c1-degree", ["grammar.degree"], { production: 6, "listen-choose": 2 }),
    R("zh-c1r-shenzhi", "改写", "zh-c1-shenzhi", ["grammar.shenzhi", "grammar.lian-dou"]),
    R("zh-c1r-hekuang", "对比", "zh-c1-hekuang", ["grammar.hekuang", "grammar.shenzhi"]),
    R("zh-c1r-fan-er", "对话", "zh-c1-fan-er", ["grammar.fan-er"]),
    R("zh-c1r-fanzheng", "对比", "zh-c1-fanzheng", ["grammar.fanzheng", "grammar.fan-er"]),
    // Unit 3
    D("zh-c1d-zhi", "快速练习", "zh-c1-zhi", ["grammar.zhi"], { production: 6, "listen-choose": 2 }),
    D("zh-c1d-qi", "替换练习", "zh-c1-qi", ["grammar.qi"]),
    D("zh-c1d-yi-wei", "句型练习", "zh-c1-yi-wei", ["grammar.yi-wei"]),
    R("zh-c1r-wei-suo", "改写", "zh-c1-wei-suo", ["grammar.wei-suo", "grammar.bei-passive"]),
    R("zh-c1r-negatives", "任务", "zh-c1-negatives", ["grammar.written-negatives"]),
    // Unit 4
    R("zh-c1r-meeting", "对话", "zh-c1-meetings", ["vocab.meetings"]),
    R("zh-c1r-negotiation", "任务", "zh-c1-negotiation", ["vocab.negotiation"]),
    R("zh-c1r-email", "改写", "zh-c1-email", ["function.business-email"]),
    R("zh-c1r-interview", "对话", "zh-c1-interview", ["function.interview"]),
    D("zh-c1d-politeness", "快速练习", "zh-c1-politeness", ["function.formal-politeness"], { production: 6, "listen-choose": 2 }),
    // Unit 5
    R("zh-c1r-news", "改写", "zh-c1-news", ["function.news"]),
    D("zh-c1d-data", "句型练习", "zh-c1-data", ["vocab.data-trends"]),
    R("zh-c1r-society", "任务", "zh-c1-society", ["vocab.society"]),
  ],
};

export const ZH_C2_SPEC: LevelSpec = {
  strings: CHINESE_STRINGS,
  code: "C2",
  path: "c2",
  level: "ZH-C2",
  slugPrefix: "zh-c2",
  units: [
    unit("zh-c2-u1", "文言虚词", "者、以便、以免、因…而、即、乃、何：现代书面语里的文言虚词。", [
      "zh-c2-zhe",
      "zh-c2-yibian",
      "zh-c2-yin-er",
      "zh-c2-ji",
      "zh-c2-he",
    ]),
    unit("zh-c2-u2", "修辞", "比喻、排比和对偶、反问、夸张，以及语气词带来的不同语气。", [
      "zh-c2-biyu",
      "zh-c2-paibi",
      "zh-c2-fanwen",
      "zh-c2-kuazhang",
      "zh-c2-yuqici",
    ]),
    unit("zh-c2-u3", "成语和俗语", "成语故事、俗语和谚语、歇后语，以及词语的褒贬。", [
      "zh-c2-chengyu-stories",
      "zh-c2-suyu",
      "zh-c2-xiehouyu",
      "zh-c2-baobian",
    ]),
    unit("zh-c2-u4", "地域与语体", "南北差异、两岸用语、粤语借词、网络用语，以及口语和书面语。", [
      "zh-c2-regional",
      "zh-c2-cross-strait",
      "zh-c2-cantonese",
      "zh-c2-internet-slang",
      "zh-c2-register",
    ]),
    unit("zh-c2-u5", "文学与思想", "古诗、《论语》名句、议论文的写法，以及 C2 总复习。", [
      "zh-c2-poetry",
      "zh-c2-classics",
      "zh-c2-essay",
      "zh-c2-review",
    ]),
  ],
  layers: [],
};

/** Every level spec, in course order. */
export const ZH_SPECS: LevelSpec[] = [ZH_PINYIN_SPEC, ZH_A1_SPEC, ZH_A2_SPEC, ZH_B1_SPEC, ZH_B2_SPEC, ZH_C1_SPEC, ZH_C2_SPEC];
