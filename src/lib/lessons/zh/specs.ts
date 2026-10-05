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

/** Every level spec, in course order. */
export const ZH_SPECS: LevelSpec[] = [ZH_PINYIN_SPEC, ZH_A1_SPEC];
