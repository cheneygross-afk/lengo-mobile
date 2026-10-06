// Synced from cheneygross-afk/lengo:src/lib/lessons/zh/pinyin-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
// Pinyin-module drills, drafted from their specs in specs.ts. Each one
// follows the lesson it practises; no new sounds, just repetition --
// hearing, typing and saying -- climbing from recognition to production.

import type { Lesson } from "../types";
import { ex, fb, layer, listen, mc, ms, mt, say, sec, wo } from "./authoring";
import { ZH_PINYIN_SPEC as S } from "./specs";

const T = "Type the pinyin with tones (marks or numbers).";

export const ZH_PINYIN_LAYERS: Lesson[] = [
  layer(
    S,
    "zh-drill-tone-pairs",
    "Tone Pairs: Hearing Two Tones at Once",
    "Most words have two syllables, so tones come in pairs. Hear them, type them and say them.",
    "6 min",
    [
      sec(
        "Two syllables, two tones",
        [
          "Most Chinese words are two syllables long, so in real speech you rarely hear a tone on its own: you hear pairs. Each syllable keeps its own tone, said one after the other with no gap.",
          "A neutral-tone syllable is short and light and takes no mark: in 谢谢 (xièxie) the second xie is barely there. Its pitch depends on the tone before it.",
          "Practise pairs the way you'd practise chords: say each one slowly, then at normal speed, keeping both shapes.",
        ],
        [
          ex("飞机", "fēijī", "plane -- 1st + 1st"),
          ex("学习", "xuéxí", "to study -- 2nd + 2nd"),
          ex("老师", "lǎoshī", "teacher -- 3rd + 1st"),
          ex("再见", "zàijiàn", "goodbye -- 4th + 4th"),
          ex("朋友", "péngyou", "friend -- 2nd + neutral"),
        ],
        [
          listen("老师", "Which tones did you hear?", ["3rd + 1st", "1st + 3rd", "4th + 1st", "2nd + 1st"], 0, "老师 (lǎoshī): a low dip, then high and level."),
          mc("How is a neutral-tone syllable written in pinyin?", ["With no tone mark", "With a dot over the vowel", "With the number 5 always shown", "With a mark on the first letter"], 0, "Neutral tones are unmarked: 谢谢 is xièxie."),
        ]
      ),
    ],
    [
      listen("中国", "Which did you hear?", ["Zhōngguó", "Zhōngguǒ", "Zhòngguó", "Zhōngguō"], 0, "中国 (Zhōngguó): 1st tone, then 2nd."),
      listen("再见", "Which did you hear?", ["zàijiàn", "zǎijiàn", "zàijiān", "zāijiàn"], 0, "再见 (zàijiàn): two falling tones."),
      listen("明天", "Which did you hear?", ["míngtiān", "mǐngtiān", "míngtiàn", "mìngtiān"], 0, "明天 (míngtiān, tomorrow): rising, then high and level."),
      mc("Which word ends in a neutral tone?", ["谢谢 (xièxie)", "再见 (zàijiàn)", "中国 (Zhōngguó)", "老师 (lǎoshī)"], 0, "The second 谢 in 谢谢 is light and unmarked."),
      fb(T, "飞机 (plane) = ___", "fēijī", null, "Two high, level first tones: fēijī."),
      fb(T, "生日 (birthday) = ___", "shēngrì", null, "生 is 1st tone, 日 is 4th: shēngrì."),
      fb(T, "学习 (to study) = ___", "xuéxí", null, "Two rising tones: xuéxí."),
      say("老师", "老师 (lǎoshī), teacher: dip low, then jump up to a high level tone.", "Don't let the second syllable fall -- it stays high."),
      say("朋友", "朋友 (péngyou), friend: a rising tone, then a light neutral syllable.", "Say you short and soft, like an afterthought."),
      fb(T, "下午 = ___", "xiàwǔ", null, "下 falls (4th), 午 dips (3rd): xiàwǔ.", { en: "afternoon" }),
    ]
  ),

  layer(
    S,
    "zh-drill-initials",
    "Minimal Pairs: b/p, j/q/x, zh/z and More",
    "Pairs of syllables that differ by one sound: aspiration, j/q/x and the curled-tongue initials.",
    "7 min",
    [
      sec(
        "One sound apart",
        [
          "A minimal pair is two syllables that differ in one sound only. Training your ear on them is the fastest way to stop mixing initials up.",
          "Aspiration: p, t, k, q, ch, c are said with a puff of air; b, d, g, j, zh, z are not. Hold a hand in front of your mouth: 怕 (pà) pushes air, 爸 (bà) doesn't.",
          "Curled or flat: zh, ch, sh, r curl the tongue back; z, c, s keep it flat behind the teeth. j, q, x are said with the tongue flat and the lips spread, and only come before i or ü.",
        ],
        [
          ex("爸", "bà", "dad -- no puff"),
          ex("怕", "pà", "to be afraid -- puff"),
          ex("七", "qī", "seven -- tongue flat, puff"),
          ex("吃", "chī", "to eat -- tongue curled, puff"),
          ex("四", "sì", "four -- tongue flat"),
          ex("十", "shí", "ten -- tongue curled"),
        ],
        [
          listen("跑", "Which did you hear?", ["pǎo", "bǎo"], 0, "跑 (pǎo, to run) has the puff of air; bǎo doesn't."),
          mc("Which initials are said with a puff of air?", ["p, t, k, q, ch, c", "b, d, g, j, zh, z", "m, n, l, r", "f, h, s, sh"], 0, "The aspirated six: p, t, k, q, ch, c."),
        ]
      ),
    ],
    [
      listen("土", "Which did you hear?", ["tǔ", "dǔ"], 0, "土 (tǔ, earth): t with a puff of air."),
      listen("气", "Which did you hear?", ["qì", "jì", "xì", "chì"], 0, "气 (qì, air): tongue flat, lips spread, with a puff."),
      listen("中", "Which did you hear?", ["zhōng", "zōng", "chōng", "jiōng"], 0, "中 (zhōng): curled tongue, no puff."),
      listen("菜", "Which did you hear?", ["cài", "zài", "chài", "sài"], 0, "菜 (cài): flat tongue with a puff -- like \"ts\" in \"cats.\""),
      mt(
        "Match each pair to the sound that tells them apart.",
        [
          ["爸 bà / 怕 pà", "A puff of air (aspiration)"],
          ["四 sì / 十 shí", "Tongue flat or curled"],
          ["七 qī / 吃 chī", "j/q/x vs. zh/ch/sh"],
        ],
        "Aspiration, tongue curl, and the j/q/x series: the three big contrasts."
      ),
      fb(T, "哥 (older brother) = ___", "gē", null, "g without a puff, 1st tone: gē."),
      fb(T, "渴 (thirsty) = ___", "kě", null, "k with a puff, 3rd tone: kě."),
      fb(T, "西 (west) = ___", "xī", null, "x: tongue flat, lips spread, 1st tone."),
      say("四十", "四十 (sìshí), forty: flat s, then curled sh.", "Feel your tongue move back for the second syllable."),
      say("七", "七 (qī), seven: tongue flat, lips spread, a puff of air.", "Not \"chee\": keep the tongue low and flat."),
      fb(T, "吃 = ___", "chī", null, "Curled ch with a puff, 1st tone: chī.", { en: "to eat" }),
    ]
  ),

  layer(
    S,
    "zh-drill-finals",
    "Minimal Pairs: -n or -ng, ai or ei",
    "Finals that sound close to English ears: the nasal endings and the diphthongs.",
    "6 min",
    [
      sec(
        "Endings that change the word",
        [
          "The hardest finals for English speakers are the nasal pairs: -n is short, with the tongue touching behind the top teeth; -ng is longer and further back, like the end of \"sing.\" 山 (shān, mountain) and 上 (shàng, on) are different words.",
          "The diphthongs glide from one vowel to another: ai as in \"eye,\" ei as in \"day,\" ao as in \"cow,\" ou as in \"go.\"",
        ],
        [
          ex("山", "shān", "mountain -- ends in -n"),
          ex("上", "shàng", "on, up -- ends in -ng"),
          ex("新", "xīn", "new -- ends in -n"),
          ex("星", "xīng", "star -- ends in -ng"),
          ex("来", "lái", "to come -- ai, like \"eye\""),
          ex("美", "měi", "beautiful -- ei, like \"day\""),
        ],
        [listen("星", "Which did you hear?", ["xīng", "xīn"], 0, "星 (xīng) ends in -ng: longer, further back.")]
      ),
    ],
    [
      listen("山", "Which did you hear?", ["shān", "shāng"], 0, "山 (shān): a short -n."),
      listen("好", "Which did you hear?", ["hǎo", "hǒu", "hǎi", "hěi"], 0, "好 (hǎo): ao, like \"how.\""),
      listen("狗", "Which did you hear?", ["gǒu", "gǎo", "gǔ", "gě"], 0, "狗 (gǒu, dog): ou, like \"go.\""),
      mc("Which final sounds like the \"ei\" in \"day\"?", ["ei", "ai", "ao", "ou"], 0, "ei as in \"day\": 美 (měi)."),
      fb(T, "来 (to come) = ___", "lái", null, "ai with a rising tone: lái."),
      fb(T, "美 (beautiful) = ___", "měi", null, "ei with a dipping tone: měi."),
      fb(T, "上 (on, up) = ___", "shàng", null, "-ng, falling tone: shàng."),
      fb(T, "新 (new) = ___", "xīn", null, "-n, high level tone: xīn."),
      say("山上", "山上 (shān shang), on the mountain: -n, then -ng.", "Make the second syllable end further back in your mouth."),
      say("新星", "新星 (xīnxīng), a new star: the same syllable with -n, then -ng.", "Keep both high and level."),
    ]
  ),

  layer(
    S,
    "zh-drill-sandhi",
    "Tone Pairs: Third Tone + Third Tone",
    "Two third tones in a row: the first rises. Hear it, spot it and say it, while pinyin keeps the dictionary tones.",
    "6 min",
    [
      sec(
        "Write ǎ ǎ, say á ǎ",
        [
          "When two third tones meet, the first changes to a rising (second) tone: 你好 is written nǐ hǎo but said ní hǎo.",
          "Pinyin keeps the dictionary tones, so you'll see the third-tone marks: the change is something you do when speaking, not something you write.",
          "A third tone before any other tone is just low -- no dip back up: 老师 (lǎoshī) starts low, then jumps high.",
        ],
        [
          ex("你好", "nǐ hǎo", "hello -- said ní hǎo"),
          ex("可以", "kěyǐ", "can, may -- said kéyǐ"),
          ex("小姐", "xiǎojiě", "Miss -- said xiáojiě"),
          ex("老师", "lǎoshī", "teacher -- a low 3rd tone before a 1st"),
        ],
        [
          mc("How is 可以 (kěyǐ) actually said?", ["kéyǐ", "kěyǐ, both dipping", "kēyǐ", "kèyí"], 0, "Third + third: the first rises."),
        ]
      ),
    ],
    [
      listen("你好", "Which pattern did you hear?", ["rising + dipping", "dipping + dipping", "level + dipping", "falling + rising"], 0, "你好 is said ní hǎo: rising, then dipping."),
      listen("小姐", "Which pattern did you hear?", ["rising + dipping", "dipping + level", "level + level", "falling + dipping"], 0, "小姐 is said xiáojiě: rising, then dipping."),
      listen("老师", "Which pattern did you hear?", ["low + high level", "rising + dipping", "rising + high level", "falling + falling"], 0, "老师 is 3rd + 1st, so no change: a low start, then high and level."),
      ms(
        "Which words have two third tones, so the first is said rising? (Choose all that apply.)",
        ["你好 (nǐ hǎo)", "可以 (kěyǐ)", "老师 (lǎoshī)", "小姐 (xiǎojiě)"],
        [0, 1, 3],
        "老师 is 3rd + 1st, so nothing changes; the other three are 3rd + 3rd."
      ),
      mc("How do you write 你好 in pinyin?", ["nǐ hǎo", "ní hǎo", "ni hao", "nǐ háo"], 0, "Pinyin keeps the dictionary tones: nǐ hǎo."),
      fb(T, "可以 (can, may) = ___", "kěyǐ", null, "Written with two third tones: kěyǐ (said kéyǐ)."),
      fb(T, "小姐 (Miss) = ___", "xiǎojiě", null, "Written xiǎojiě, said xiáojiě."),
      fb(T, "老虎 (tiger) = ___", "lǎohǔ", null, "Written lǎohǔ, said láohǔ."),
      say("你好", "你好: written nǐ hǎo, said ní hǎo.", "Let the first syllable rise, then dip on hǎo."),
      say("可以", "可以: written kěyǐ, said kéyǐ.", "Rise on kě, then a low dip."),
      say("我也好", "Three third tones: 我也好 (wǒ yě hǎo), said wó yé hǎo or wǒ yé hǎo.", "Break it as 我 | 也好: only the last keeps its full dip."),
      fb(T, "水果 = ___", "shuǐguǒ", null, "Written shuǐguǒ, said shuíguǒ.", { en: "fruit" }),
    ],
    { previews: ["zh.grammar.ye-dou"] }
  ),

  layer(
    S,
    "zh-drill-bu-yi",
    "不 and 一: Pattern Practice",
    "Type and say 不 and 一 with the tone they actually take before each tone.",
    "6 min",
    [
      sec(
        "The two rules, once more",
        [
          "不 is fourth tone (bù), but before another fourth tone it rises: bú shì, bú qù.",
          "一 is first tone (yī) when counting or at the end of a word, fourth tone (yì) before tones 1-3, and second tone (yí) before a fourth tone.",
          "This course writes the tone you actually say for 不 and 一, so typing the spoken tone is always right (the dictionary tone is accepted too).",
        ],
        [
          ex("不去", "bú qù", "not go -- 不 rises before 4th"),
          ex("不来", "bù lái", "not come -- 不 stays 4th"),
          ex("一天", "yì tiān", "one day -- 一 is 4th before 1st"),
          ex("一样", "yíyàng", "the same -- 一 is 2nd before 4th"),
        ],
        [mc("How is 不对 (not right) said?", ["bú duì", "bù duì", "bū duì", "bǔ duì"], 0, "Before a fourth tone, 不 rises: bú duì.")]
      ),
    ],
    [
      mc("一 in 第一 (dì-yī, \"first\") is said:", ["yī, its own first tone", "yí", "yì", "yǐ"], 0, "At the end of a word, 一 keeps its first tone."),
      listen("不好", "Which did you hear?", ["bù hǎo", "bú hǎo"], 0, "Before a third tone, 不 stays fourth: bù hǎo."),
      fb(T, "不是 (is not) = ___", "bú shì", null, "是 is fourth tone, so 不 rises: bú shì."),
      fb(T, "不忙 (not busy) = ___", "bù máng", null, "Before a second tone, 不 stays fourth."),
      fb(T, "一起 (together) = ___", "yìqǐ", null, "Before a third tone, 一 is fourth: yìqǐ."),
      fb(T, "一样 (the same) = ___", "yíyàng", null, "Before a fourth tone, 一 rises: yíyàng."),
      fb(T, "十一 (eleven) = ___", "shíyī", null, "Counting, 一 keeps its first tone."),
      say("不客气", "不客气 (bú kèqi), you're welcome: 不 rises before kè.", "Rise on bú, fall on kè, then a light qi."),
      say("一天", "一天 (yì tiān), one day: 一 falls before a first tone.", "A quick fall, then high and level."),
      wo(["不", "是"], "is not (bú shì)", "不 goes before the word it negates."),
    ]
  ),

  layer(
    S,
    "zh-drill-reading-pinyin",
    "Speed Round: Reading Pinyin",
    "Read and type pinyin fast: where marks go, apostrophes, capitals and erhua.",
    "6 min",
    [
      sec(
        "Rules at a glance",
        [
          "The tone mark goes on a, then o or e; in iu and ui it goes on the second vowel: liù, duì.",
          "An apostrophe separates syllables when the next one starts with a, o or e: Xī'ān (two syllables), not xiān (one).",
          "Names of people and places start with a capital: Běijīng. Erhua adds -r to the syllable before 儿: 玩儿 (to play) is wánr.",
        ],
        [
          ex("六", "liù", "six -- the mark on u"),
          ex("对", "duì", "correct -- the mark on i"),
          ex("西安", "Xī'ān", "Xi'an -- apostrophe between syllables"),
          ex("北京", "Běijīng", "Beijing -- capital letter"),
        ],
        [mc("Where does the tone mark go in liu (fourth tone)?", ["liù", "lìu", "líu", "lìù"], 0, "In iu, the mark goes on the second vowel: liù.")]
      ),
    ],
    [
      listen("六", "Which did you hear?", ["liù", "lǜ", "lóu", "liú"], 0, "六 (liù): six."),
      listen("西安", "Which did you hear?", ["Xī'ān", "xiān"], 0, "Two syllables: Xī'ān. xiān would be one syllable."),
      mc("Which spelling is correct?", ["duì", "dùi", "dúi", "duí"], 0, "In ui, the mark goes on the second vowel: duì."),
      fb(T, "北京 (Beijing) = ___", "Běijīng", null, "A place name, so a capital B: Běijīng."),
      fb(T, "好 (good) = ___", "hǎo", null, "In ao the mark goes on a: hǎo."),
      fb(T, "狗 (dog) = ___", "gǒu", null, "In ou the mark goes on o: gǒu."),
      fb(T, "天安门 (Tiananmen) = ___", "Tiān'ānmén", null, "ān starts with a, so it gets an apostrophe: Tiān'ānmén."),
      fb(T, "月 (month, moon) = ___", "yuè", null, "üe after nothing is spelled yue; the mark goes on e."),
      say("北京", "北京 (Běijīng): a low dip, then high and level.", "Keep jīng long and high."),
      fb(T, "一点儿 = ___", "yìdiǎnr", null, "Erhua adds -r: yìdiǎnr.", { en: "a little" }),
    ]
  ),

  layer(
    S,
    "zh-drill-characters",
    "Character Focus: Radicals as Clues",
    "Spot radicals and use them as clues to meaning; match characters to sound and sense.",
    "6 min",
    [
      sec(
        "Reading a character's parts",
        [
          "Most characters combine a meaning part (the radical) with a sound part. 妈 (mā, mom) has 女 (woman) for meaning and 马 (mǎ) for sound.",
          "Radicals are clues, not rules, but they help you guess and remember: 氵 (water) appears in 河 (hé, river) and 海 (hǎi, sea); 口 (mouth) in 吃 (chī, to eat) and 喝 (hē, to drink).",
        ],
        [
          ex("妈", "mā", "mom -- 女 + 马"),
          ex("河", "hé", "river -- 氵 water"),
          ex("海", "hǎi", "sea -- 氵 water"),
          ex("喝", "hē", "to drink -- 口 mouth"),
        ],
        [mc("Which part of 妈 gives a clue to its sound?", ["马 (mǎ)", "女 (woman)", "Neither", "The tone mark"], 0, "马 (mǎ) gives the sound; 女 gives the meaning.")]
      ),
    ],
    [
      mt(
        "Match each radical to its meaning.",
        [
          ["氵", "water"],
          ["口", "mouth"],
          ["女", "woman"],
          ["亻", "person"],
        ],
        "Four of the commonest radicals."
      ),
      mc("海 (hǎi) has the water radical. It most likely means:", ["sea", "mouth", "to eat", "mother"], 0, "氵 points to water: 海 is the sea."),
      mc("吃 (to eat) and 喝 (to drink) share which radical?", ["口 (mouth)", "氵 (water)", "女 (woman)", "人 (person)"], 0, "Both are things you do with your mouth."),
      ms("Which characters contain the water radical 氵? (Choose all that apply.)", ["河", "海", "妈", "吃"], [0, 1], "河 (river) and 海 (sea) both have 氵."),
      mt(
        "Match the character to its pinyin.",
        [
          ["河", "hé"],
          ["喝", "hē"],
          ["海", "hǎi"],
        ],
        "河 and 喝 share a sound part (可) and are both he, with different tones."
      ),
      fb(T, "妈 (mom) = ___", "mā", null, "马 gives the sound ma; 妈 is first tone."),
      fb(T, "口 (mouth) = ___", "kǒu", null, "口 is kǒu: also the radical in 吃 and 喝."),
      fb(T, "河 (river) = ___", "hé", null, "河 (hé), with the water radical."),
      fb(T, "汉字 = ___", "hànzì", null, "汉字 (hànzì): Chinese characters.", { en: "Chinese characters" }),
    ]
  ),
];
