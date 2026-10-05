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

import type { ExerciseMix, LayerSpec, LevelSpec, UnitSpec } from "../../curriculum/spec";
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

/** Every level spec, in course order. */
export const ZH_SPECS: LevelSpec[] = [ZH_PINYIN_SPEC, ZH_A1_SPEC, ZH_A2_SPEC, ZH_B1_SPEC];
