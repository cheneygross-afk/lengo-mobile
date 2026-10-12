// Synced from cheneygross-afk/lengo:src/lib/grammar/zh-guides-b2.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ZhGrammarGuide } from "./zh-types";

// B2 (HSK 4) Chinese grammar guides. Conventions: src/lib/lessons/zh/README.md
// (simplified characters; pinyin shows dictionary tones except 不 and 一,
// which are written as spoken; neutral tones unmarked). Chinese quoted in
// English paragraphs is written as 汉字 (pīnyīn).

export const ZH_GUIDES_B2: ZhGrammarGuide[] = [
  // ------------------------------------------------------------------
  {
    slug: "even-if-no-matter-what",
    title: "Even If and No Matter What: 即使…也, 不管…都, 哪怕…也, 再…也",
    description:
      "Four ways to say something holds whatever happens: 即使…也 for one supposition, 不管/无论…都 for every possibility, 哪怕…也 for the extreme case, and 再 + adjective + 也 for 'however …'.",
    level: "B2",
    hsk: "HSK 4",
    intro: [
      "English uses 'even if', 'no matter what' and 'however' in front of a clause and leaves the main clause alone. Chinese marks both halves: the first clause opens with a word like 即使 (jíshǐ) or 不管 (bùguǎn), and the main clause takes 也 (yě) or 都 (dōu) before its verb. Leaving out the second word is the most common mistake at this level.",
      "The four patterns differ in what the first clause holds: one hypothetical event, a whole range of possibilities, an extreme or costly case, or a degree pushed as far as it will go.",
    ],
    sections: [
      {
        heading: "即使…也: even if (one supposition)",
        body: [
          "即使 (jíshǐ) introduces a single situation, real or imagined, and 也 (yě) says the result doesn't change. 也 is an adverb, so it sits after the subject of the main clause and right before the verb: 即使下雨，我们也去 (even if it rains, we're going).",
          "即使 is neutral to slightly formal. In speech you'll also hear 就算 (jiùsuàn), which is more casual; you meet it properly at C1.",
        ],
        examples: [
          { zh: "即使明天下雨，比赛也会照常进行。", pinyin: "Jíshǐ míngtiān xià yǔ, bǐsài yě huì zhàocháng jìnxíng.", en: "Even if it rains tomorrow, the match will go ahead as usual." },
          { zh: "即使你不同意，我也要试试。", pinyin: "Jíshǐ nǐ bù tóngyì, wǒ yě yào shìshi.", en: "Even if you don't agree, I'm going to give it a try." },
        ],
      },
      {
        heading: "不管 / 无论…都: no matter what, who or how",
        body: [
          "不管 (bùguǎn) and 无论 (wúlùn) cover every possibility at once, so what follows them must be open: a question word (什么, 谁, 怎么, 哪儿), an A-not-A form (去不去), or two options joined by 还是 (háishi). The main clause takes 都 (dōu), sometimes 也.",
          "This is the key difference from 即使. 即使下雨 is one case; 不管下不下雨 is both cases. 不管下雨 on its own is wrong, because there is nothing open in it.",
          "无论 is the more written of the two; 不管 is everyday speech.",
        ],
        table: {
          headers: ["After 不管 / 无论", "Example", "Meaning"],
          rows: [
            ["question word", "不管谁来", "no matter who comes"],
            ["A-not-A", "不管你去不去", "whether or not you go"],
            ["A 还是 B", "无论刮风还是下雨", "whether it's windy or rainy"],
            ["多 + adjective", "不管多忙", "no matter how busy"],
          ],
        },
        examples: [
          { zh: "不管你什么时候来，我都在家。", pinyin: "Bùguǎn nǐ shénme shíhou lái, wǒ dōu zài jiā.", en: "Whenever you come, I'll be at home." },
          { zh: "无论刮风还是下雨，他都坚持跑步。", pinyin: "Wúlùn guā fēng háishi xià yǔ, tā dōu jiānchí pǎo bù.", en: "Whether it's windy or raining, he keeps up his running." },
        ],
      },
      {
        heading: "哪怕…也 and 再 + adjective + 也",
        body: [
          "哪怕 (nǎpà) is a more emotional 即使: it introduces an extreme, unlikely or costly case to show determination. 哪怕只有一天，我也想去 (even if it's only for one day, I want to go). It is mostly spoken. 哪怕…也好 asks for 'even just' a little: 哪怕一句话也好 (even a single word would do).",
          "再 (zài) + adjective + 也 means 'however …': 再忙也要吃饭 (however busy you are, you have to eat). The adjective comes straight after 再 with no 很. 再怎么 + verb + 也 works the same way: 再怎么解释他也不听 (however much you explain, he won't listen).",
        ],
        examples: [
          { zh: "哪怕要排三个小时的队，我也要买到票。", pinyin: "Nǎpà yào pái sān ge xiǎoshí de duì, wǒ yě yào mǎidào piào.", en: "Even if it means queueing for three hours, I'm going to get a ticket." },
          { zh: "工作再忙，也要按时吃饭。", pinyin: "Gōngzuò zài máng, yě yào ànshí chī fàn.", en: "However busy work is, you have to eat properly." },
          { zh: "这件衣服再便宜我也不买。", pinyin: "Zhè jiàn yīfu zài piányi wǒ yě bù mǎi.", en: "However cheap this jacket is, I'm not buying it." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "即使下雨，我们去爬山。",
        right: "即使下雨，我们也去爬山。",
        rightPinyin: "Jíshǐ xià yǔ, wǒmen yě qù pá shān.",
        why: "The main clause needs 也. English 'even if' does all the work alone; Chinese marks both halves.",
      },
      {
        wrong: "不管下雨，我都去。",
        right: "不管下不下雨，我都去。",
        rightPinyin: "Bùguǎn xià bu xià yǔ, wǒ dōu qù.",
        why: "不管 needs an open choice after it (A-not-A, a question word or A 还是 B). For one fixed case, use 即使.",
      },
      {
        wrong: "即使下雨，也我们去。",
        right: "即使下雨，我们也去。",
        rightPinyin: "Jíshǐ xià yǔ, wǒmen yě qù.",
        why: "也 and 都 are adverbs: they go after the subject, never before it.",
      },
    ],
    faqs: [
      {
        q: "Is 即使 the same as 虽然?",
        a: "No. 虽然 (although) concedes a fact that is true: 虽然下雨了 means it is raining. 即使 (even if) is usually a supposition: 即使下雨 means it might rain.",
      },
      {
        q: "Can I use 也 instead of 都 after 不管?",
        a: "Yes, 也 is possible, especially with a negative main clause (不管怎么说，他也不听), but 都 is the default.",
      },
    ],
    related: ["conditions-since-otherwise-unless", "concession-and-contrast-b2"],
    lessons: ["zh-b2-jishi", "zh-b2-buguan", "zh-b2-napa", "zh-b2-zai-ye"],
  },
  // ------------------------------------------------------------------
  {
    slug: "conditions-since-otherwise-unless",
    title: "Since, Otherwise, What If, Once and Unless: 既然, 否则, 万一, 一旦, 除非",
    description:
      "The B2 condition words: 既然…就 (since that's so), 否则 and 不然 (otherwise), 万一 and 假如 (what if), 一旦…就 (once) and 除非…才 (unless, only if).",
    level: "B2",
    hsk: "HSK 4",
    intro: [
      "At B1 you used 如果…就 for 'if'. B2 adds conditions with a point of view: 既然 accepts a known fact and draws a conclusion; 万一 worries about something unlikely; 一旦 says that the moment something happens, something else follows; 除非 names the one condition that matters.",
      "Most of these pair with 就 (jiù) or 才 (cái) in the main clause, after the subject.",
    ],
    sections: [
      {
        heading: "既然…就: since (given that)",
        body: [
          "既然 (jìrán) starts from something both speakers already know, and the main clause draws the obvious conclusion, often a suggestion: 既然你病了，就别去上班了 (since you're ill, don't go to work). English 'since' can be about time or reason; 既然 is only about reason, and only for facts already established.",
          "Compare 因为 (yīnwèi), which gives new information as a cause. 既然 says 'we both know this, so…'.",
        ],
        examples: [
          { zh: "既然你已经决定了，我就不多说了。", pinyin: "Jìrán nǐ yǐjīng juédìng le, wǒ jiù bù duō shuō le.", en: "Since you've already made up your mind, I won't say any more." },
          { zh: "既然来了，就多住几天吧。", pinyin: "Jìrán lái le, jiù duō zhù jǐ tiān ba.", en: "Since you're here, stay a few more days." },
        ],
      },
      {
        heading: "否则 and 不然: otherwise",
        body: [
          "否则 (fǒuzé) and 不然 (bùrán) open the second clause and mean 'otherwise, or else'. The first clause is usually advice or a necessity: 快走吧，不然要迟到了 (let's hurry, or we'll be late). 不然 is everyday speech; 否则 is more formal and common in writing and instructions.",
          "Unlike English 'otherwise', these always begin their clause, before any subject.",
        ],
        examples: [
          { zh: "请提前两个小时到机场，否则可能赶不上飞机。", pinyin: "Qǐng tíqián liǎng ge xiǎoshí dào jīchǎng, fǒuzé kěnéng gǎn bu shàng fēijī.", en: "Please get to the airport two hours early, otherwise you may miss your flight." },
          { zh: "多穿点儿，不然会感冒的。", pinyin: "Duō chuān diǎnr, bùrán huì gǎnmào de.", en: "Wear something warmer, or you'll catch a cold." },
        ],
      },
      {
        heading: "万一, 假如, 一旦…就 and 除非…才",
        body: [
          "万一 (wànyī) is 'what if, in case': something unlikely and unwelcome. 万一航班取消了怎么办？ (what if the flight is cancelled?). 假如 (jiǎrú) is a more bookish 如果 for an imagined situation.",
          "一旦 (yídàn) means 'once, the moment that': as soon as A happens, B follows, usually something serious. 一旦…就 is common in warnings and rules.",
          "除非 (chúfēi) names the only condition: 除非 A，才 B (only if A, then B) or 除非 A，否则/不然 B (unless A, B). Learners often translate 'unless' with 除非 and forget the second half.",
        ],
        table: {
          headers: ["Word", "Meaning", "Second half", "Register"],
          rows: [
            ["既然", "since (known fact)", "就", "neutral"],
            ["万一", "in case, what if (unwelcome)", "怎么办 / 就", "spoken"],
            ["假如", "if, supposing", "就", "written"],
            ["一旦", "once, the moment", "就", "neutral to formal"],
            ["除非", "only if / unless", "才 or 否则 / 不然", "neutral"],
          ],
        },
        examples: [
          { zh: "万一下雨了，我们就在家看电影。", pinyin: "Wànyī xià yǔ le, wǒmen jiù zài jiā kàn diànyǐng.", en: "If it happens to rain, we'll stay in and watch a film." },
          { zh: "护照一旦丢了，就很麻烦。", pinyin: "Hùzhào yídàn diū le, jiù hěn máfan.", en: "Once you lose your passport, it's a real headache." },
          { zh: "除非你亲自去，他才会同意。", pinyin: "Chúfēi nǐ qīnzì qù, tā cái huì tóngyì.", en: "He'll only agree if you go in person." },
          { zh: "除非有特殊情况，否则不能退票。", pinyin: "Chúfēi yǒu tèshū qíngkuàng, fǒuzé bù néng tuì piào.", en: "Unless there are special circumstances, tickets can't be refunded." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "除非你去，他不会同意。",
        right: "除非你去，否则他不会同意。",
        rightPinyin: "Chúfēi nǐ qù, fǒuzé tā bú huì tóngyì.",
        why: "除非 needs a partner: 否则 / 不然 before a negative result, or 才 before a positive one (除非你去，他才会同意).",
      },
      {
        wrong: "万一你考上了大学，我们就去旅行。",
        right: "要是你考上了大学，我们就去旅行。",
        rightPinyin: "Yàoshi nǐ kǎoshàngle dàxué, wǒmen jiù qù lǚxíng.",
        why: "万一 is for something unlikely and unwelcome. For a hoped-for event, use 要是 or 如果.",
      },
      {
        wrong: "你快点儿，我们否则会迟到。",
        right: "你快点儿，否则我们会迟到。",
        rightPinyin: "Nǐ kuài diǎnr, fǒuzé wǒmen huì chídào.",
        why: "否则 and 不然 are conjunctions: they open the clause, before the subject.",
      },
    ],
    faqs: [
      {
        q: "What's the difference between 万一 and 如果?",
        a: "如果 is a neutral 'if'. 万一 suggests the thing is unlikely and you'd rather it didn't happen: it's the word for precautions and worries.",
      },
      {
        q: "Is 要不然 the same as 不然?",
        a: "Yes. 要不然 and 要不 are slightly more casual versions of 不然. 要不 can also introduce a suggestion: 要不我们明天去？",
      },
    ],
    related: ["even-if-no-matter-what", "cause-result-and-luck"],
    lessons: ["zh-b2-jiran", "zh-b2-fouze", "zh-b2-what-if", "zh-b2-yidan", "zh-b2-chufei"],
  },
  // ------------------------------------------------------------------
  {
    slug: "concession-and-contrast-b2",
    title: "Contrast at B2: 尽管, 却, 不是…而是, 既…又 and 相反",
    description:
      "How to set two ideas against each other: 尽管 (even though), the adverb 却 (yet), 不是…而是 (not A but B), 既…又 (both … and) and 相反 (on the contrary).",
    level: "B2",
    hsk: "HSK 4",
    intro: [
      "虽然…但是 is the B1 way to say 'although'. B2 adds 尽管, a slightly more formal 'even though'; 却, an adverb that marks the surprising half; 不是…而是 for correcting a wrong idea; and 相反 for saying the opposite is true.",
      "The trap for English speakers is word order: 却 is an adverb, not a conjunction, so it goes after the subject like 也 and 都.",
    ],
    sections: [
      {
        heading: "尽管 and 却",
        body: [
          "尽管 (jǐnguǎn) means 'even though, despite the fact that' and, like 虽然, introduces something true. It pairs with 但是, 可是 or 却 in the second clause. It sounds a little more formal and emphatic than 虽然.",
          "却 (què) means 'but, yet'. It is an adverb: subject + 却 + verb. 我想去，他却不想去 (I want to go, but he doesn't). It can team up with 但是: 但是他却… . Quick test: if 也 fits in the spot, 却 fits too.",
        ],
        examples: [
          { zh: "尽管工作很忙，她每天还是抽时间陪孩子。", pinyin: "Jǐnguǎn gōngzuò hěn máng, tā měi tiān háishi chōu shíjiān péi háizi.", en: "Even though work is busy, she still finds time for her children every day." },
          { zh: "他很累，却不肯休息。", pinyin: "Tā hěn lèi, què bù kěn xiūxi.", en: "He's exhausted, yet he won't rest." },
          { zh: "大家都来了，他却没来。", pinyin: "Dàjiā dōu lái le, tā què méi lái.", en: "Everyone came, but he didn't." },
        ],
      },
      {
        heading: "不是…而是 and 既…又",
        body: [
          "不是 A，而是 B (bú shì A, ér shì B) corrects an assumption: 'it's not A, it's B'. A and B are the same kind of thing: two nouns, two verb phrases or two reasons. It's a polite way to explain yourself: 我不是不帮你，而是真的帮不上 (it's not that I won't help; I really can't).",
          "既…又 (jì … yòu) and 既…也 (jì … yě) mean 'both … and': two qualities that are both true. They sound more balanced and a little more formal than 又…又. Don't confuse 既 with 既然 (since).",
        ],
        examples: [
          { zh: "他不是不想结婚，而是还没找到合适的人。", pinyin: "Tā bú shì bù xiǎng jié hūn, ér shì hái méi zhǎodào héshì de rén.", en: "It's not that he doesn't want to get married; he just hasn't found the right person yet." },
          { zh: "她既聪明又能干。", pinyin: "Tā jì cōngming yòu nénggàn.", en: "She's both clever and capable." },
          { zh: "这样做既能省钱，也能省时间。", pinyin: "Zhèyàng zuò jì néng shěng qián, yě néng shěng shíjiān.", en: "Doing it this way saves both money and time." },
        ],
      },
      {
        heading: "相反: on the contrary",
        body: [
          "相反 (xiāngfǎn) means 'the opposite'. As a sentence opener, 相反 or 恰恰相反 (qiàqià xiāngfǎn) says the truth is the reverse of what was just suggested: 他没有生气，相反，他很高兴 (he wasn't angry; on the contrary, he was pleased). It can also be a predicate: 我们的看法正好相反 (our views are exactly opposite).",
          "相反 always follows a negative or contrasting statement; it doesn't simply mean 'but'.",
        ],
        examples: [
          { zh: "失败并不可怕，相反，它能让人变得更强。", pinyin: "Shībài bìng bù kěpà, xiāngfǎn, tā néng ràng rén biàn de gèng qiáng.", en: "Failure isn't frightening at all; on the contrary, it can make you stronger." },
          { zh: "我们俩的意见正好相反。", pinyin: "Wǒmen liǎ de yìjiàn zhènghǎo xiāngfǎn.", en: "Our opinions are exactly opposite." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "我想去，却他不想去。",
        right: "我想去，他却不想去。",
        rightPinyin: "Wǒ xiǎng qù, tā què bù xiǎng qù.",
        why: "却 is an adverb, so it goes after the subject. Put it where 也 would go.",
      },
      {
        wrong: "他不是没时间，但是不想去。",
        right: "他不是没时间，而是不想去。",
        rightPinyin: "Tā bú shì méi shíjiān, ér shì bù xiǎng qù.",
        why: "不是 A pairs with 而是 B to correct a wrong idea. 但是 adds a contrast; it doesn't replace A with B.",
      },
      {
        wrong: "她既然聪明又漂亮。",
        right: "她既聪明又漂亮。",
        rightPinyin: "Tā jì cōngming yòu piàoliang.",
        why: "'Both … and' is 既…又. 既然 means 'since' and starts a reason.",
      },
    ],
    faqs: [
      {
        q: "Can 尽管 mean something other than 'although'?",
        a: "Yes. As an adverb before a verb, 尽管 means 'feel free to': 有问题尽管问 (if you have questions, just ask). Context makes it clear.",
      },
      {
        q: "Where does 然而 fit?",
        a: "然而 is the written 'however', at the start of a sentence. It is covered with 而 in the C1 guide on contrast.",
      },
    ],
    related: ["even-if-no-matter-what", "attitude-adverbs-b2"],
    lessons: ["zh-b2-jinguan", "zh-b2-que", "zh-b2-bushi-ershi", "zh-b2-jiyou", "zh-b2-on-the-contrary"],
  },
  // ------------------------------------------------------------------
  {
    slug: "cause-result-and-luck",
    title: "And So, In the End, Luckily, No Wonder: 于是, 结果, 幸亏, 难怪",
    description:
      "Telling what happened next and why: 于是 (and so), 结果 (in the end, as it turned out), 幸亏…不然 (luckily … otherwise) and 难怪 / 怪不得 (no wonder).",
    level: "B2",
    hsk: "HSK 4",
    intro: [
      "These words link events in a story and add the speaker's view of them. 于是 moves the story on to a reaction; 结果 reports how things turned out, often unexpectedly; 幸亏 says a lucky circumstance prevented something bad; 难怪 says a new fact explains something you'd noticed.",
    ],
    sections: [
      {
        heading: "于是 and 结果",
        body: [
          "于是 (yúshì) means 'and so, thereupon': because of the first event, someone did something. It links two past events in a narrative and normally opens the second clause. It's not used for advice or the future: for 'so you should…' use 所以.",
          "结果 (jiéguǒ) means 'as a result, in the end'. It often introduces an outcome that was unexpected or disappointing: 他没复习，结果没考上 (he didn't revise, and sure enough he failed). As a noun it means 'result': 考试结果.",
        ],
        examples: [
          { zh: "他觉得头疼，于是去医院看了医生。", pinyin: "Tā juéde tóu téng, yúshì qù yīyuàn kànle yīshēng.", en: "He had a headache, so he went to the hospital to see a doctor." },
          { zh: "我以为只是感冒，结果是肺炎。", pinyin: "Wǒ yǐwéi zhǐ shì gǎnmào, jiéguǒ shì fèiyán.", en: "I thought it was just a cold, but it turned out to be pneumonia." },
        ],
      },
      {
        heading: "幸亏…不然 and 难怪 / 怪不得",
        body: [
          "幸亏 (xìngkuī) means 'luckily, thanks to': it names the fortunate circumstance, and 不然 or 否则 often follows with the bad thing that would have happened. 幸亏你提醒我，不然我就忘了 (luckily you reminded me, or I'd have forgotten). 幸好 (xìnghǎo) is a near synonym.",
          "难怪 (nánguài) and 怪不得 (guàibude) mean 'no wonder'. They come before the thing that now makes sense, and the explanation can come before or after: 他昨天没睡觉，难怪这么累 (he didn't sleep last night; no wonder he's so tired). 原来 (yuánlái, so that's why) often introduces the explanation.",
        ],
        examples: [
          { zh: "幸亏送得及时，不然后果会很严重。", pinyin: "Xìngkuī sòng de jíshí, bùrán hòuguǒ huì hěn yánzhòng.", en: "Luckily he was brought in in time; otherwise the consequences could have been serious." },
          { zh: "难怪他今天没来上班，原来是生病了。", pinyin: "Nánguài tā jīntiān méi lái shàng bān, yuánlái shì shēng bìng le.", en: "No wonder he didn't come to work today: it turns out he's ill." },
          { zh: "怪不得这么便宜，原来是二手的。", pinyin: "Guàibude zhème piányi, yuánlái shì èrshǒu de.", en: "No wonder it's so cheap: it's second-hand." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "明天会下雨，于是你应该带伞。",
        right: "明天会下雨，所以你应该带伞。",
        rightPinyin: "Míngtiān huì xià yǔ, suǒyǐ nǐ yīnggāi dài sǎn.",
        why: "于是 narrates what someone did next. For a conclusion or advice, use 所以.",
      },
      {
        wrong: "幸亏你提醒我，我忘了。",
        right: "幸亏你提醒我，不然我就忘了。",
        rightPinyin: "Xìngkuī nǐ tíxǐng wǒ, bùrán wǒ jiù wàng le.",
        why: "Without 不然, the sentence says you forgot. The unwanted outcome needs 不然 or 否则.",
      },
      {
        wrong: "他不舒服，怪不得。",
        right: "怪不得他没来，原来是不舒服。",
        rightPinyin: "Guàibude tā méi lái, yuánlái shì bù shūfu.",
        why: "In a sentence, 难怪 / 怪不得 comes before the thing that now makes sense; it isn't tacked on at the end like English 'no wonder'. (On its own, 怪不得！ works as an exclamation.)",
      },
    ],
    faqs: [
      {
        q: "Is 结果 always negative?",
        a: "No, but it often introduces an outcome the speaker didn't expect, and that is frequently a disappointment. For a neutral 'therefore', use 所以 or 因此.",
      },
      {
        q: "What's the difference between 难怪 and 怪不得?",
        a: "None in meaning. 怪不得 is a little more colloquial.",
      },
    ],
    related: ["conditions-since-otherwise-unless", "attitude-adverbs-b2"],
    lessons: ["zh-b2-yushi", "zh-b2-jieguo", "zh-b2-xingkui", "zh-b2-nanguai"],
  },
  // ------------------------------------------------------------------
  {
    slug: "attitude-adverbs-b2",
    title: "Actually, Almost, After All, To My Surprise: 并, 差点儿, 几乎, 毕竟, 竟然",
    description:
      "Adverbs that carry the speaker's attitude: 并不 / 并没有 (actually not), 差点儿 (nearly), 几乎 (almost), 毕竟 (after all), 或许 and 说不定 (maybe), 的确 (indeed), 竟然 and 没想到 (to my surprise).",
    level: "B2",
    hsk: "HSK 4",
    intro: [
      "A short adverb before the verb can change how a sentence feels: it can contradict what someone assumed, say that something nearly happened, or express surprise. These adverbs all go after the subject and before the verb (or before 不 / 没).",
    ],
    sections: [
      {
        heading: "并不 / 并没有: actually not",
        body: [
          "并 (bìng) before 不 or 没 strengthens a negative and contradicts an assumption: 'not at all, actually not (whatever you might think)'. 这个问题并不难 (this problem isn't actually hard). Use it when someone expected the opposite; it's not just a stronger 不.",
        ],
        examples: [
          { zh: "他看起来很严肃，其实并不难相处。", pinyin: "Tā kàn qilai hěn yánsù, qíshí bìng bù nán xiāngchǔ.", en: "He looks stern, but he's actually not hard to get along with." },
          { zh: "我并没有说过这句话。", pinyin: "Wǒ bìng méiyǒu shuōguo zhè jù huà.", en: "I never said that." },
        ],
      },
      {
        heading: "差点儿 and 几乎",
        body: [
          "差点儿 (chàdiǎnr) means 'nearly (but didn't)'. With something unwanted, 差点儿 and 差点儿没 mean the same: 我差点儿摔倒 = 我差点儿没摔倒 (I nearly fell over). With something wanted, 差点儿没 means it only just happened: 我差点儿没赶上 (I only just caught it).",
          "几乎 (jīhū) means 'almost' for amounts and extent: 几乎所有人 (almost everyone), 几乎每天 (almost every day). It's neutral and common in writing. 差点儿 is about an event that nearly happened; 几乎 can do that too but is more formal.",
        ],
        examples: [
          { zh: "我今天差点儿迟到。", pinyin: "Wǒ jīntiān chàdiǎnr chídào.", en: "I was nearly late today." },
          { zh: "他几乎每天都加班。", pinyin: "Tā jīhū měi tiān dōu jiā bān.", en: "He works overtime almost every day." },
        ],
      },
      {
        heading: "毕竟, 或许, 说不定, 的确",
        body: [
          "毕竟 (bìjìng) means 'after all': it reminds the listener of a basic fact that explains or excuses something. 别怪他，他毕竟还是个孩子 (don't blame him; he's still a child, after all).",
          "或许 (huòxǔ) and 也许 (yěxǔ) mean 'perhaps'; 或许 is a little more written. 说不定 (shuōbudìng) is spoken 'maybe, you never know'. 的确 (díquè) means 'indeed, it's true that', confirming a point: 他的确很努力.",
        ],
        examples: [
          { zh: "他毕竟是新来的，很多事还不熟悉。", pinyin: "Tā bìjìng shì xīn lái de, hěn duō shì hái bù shúxī.", en: "He's new, after all; he isn't familiar with a lot of things yet." },
          { zh: "说不定他已经到了。", pinyin: "Shuōbudìng tā yǐjīng dào le.", en: "He might well be there already." },
        ],
      },
      {
        heading: "竟然 and 没想到: to my surprise",
        body: [
          "竟然 (jìngrán) is an adverb that signals the speaker's surprise: 他竟然忘了 (he actually forgot!). It goes after the subject. 没想到 (méi xiǎngdào, I didn't expect) can start the sentence and is more conversational: 没想到他会来.",
          "English often shows surprise with intonation or 'actually'; Chinese prefers an explicit word.",
        ],
        examples: [
          { zh: "这么简单的题，他竟然做错了。", pinyin: "Zhème jiǎndān de tí, tā jìngrán zuòcuò le.", en: "He actually got such an easy question wrong." },
          { zh: "没想到你中文说得这么好！", pinyin: "Méi xiǎngdào nǐ Zhōngwén shuō de zhème hǎo!", en: "I had no idea your Chinese was so good!" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "这个问题并难。",
        right: "这个问题并不难。",
        rightPinyin: "Zhège wèntí bìng bù nán.",
        why: "并 in this sense only strengthens a negative: it must be followed by 不 or 没.",
      },
      {
        wrong: "竟然他忘了我的生日。",
        right: "他竟然忘了我的生日。",
        rightPinyin: "Tā jìngrán wàngle wǒ de shēngrì.",
        why: "竟然 is an adverb and normally follows the subject. 没想到 is the one that can open the sentence.",
      },
      {
        wrong: "几乎我所有的朋友都结婚了。",
        right: "我几乎所有的朋友都结婚了。",
        rightPinyin: "Wǒ jīhū suǒyǒu de péngyou dōu jié hūn le.",
        why: "几乎 sits right before what it modifies (所有的朋友) or before the verb, not at the head of the sentence like English 'almost'.",
      },
    ],
    faqs: [
      {
        q: "Is 差点儿 the same as 差不多?",
        a: "No. 差不多 means 'about, roughly the same'. 差点儿 means something nearly happened.",
      },
      {
        q: "Is 竟然 the same as 居然?",
        a: "Almost. 居然 is a little more colloquial and is covered at C1 alongside 不料.",
      },
    ],
    related: ["concession-and-contrast-b2", "cause-result-and-luck", "even-especially-as-if"],
    lessons: ["zh-b2-bing", "zh-b2-chadianr", "zh-b2-jihu", "zh-b2-bijing", "zh-b2-maybe", "zh-b2-jingran"],
  },
  // ------------------------------------------------------------------
  {
    slug: "potential-and-figurative-complements",
    title: "Can and Can't: V得了 / V不了, V得起 / V不起, 来得及, 过来 and 过去",
    description:
      "The potential complements you need at B2: 了 (manage to), 起 (afford), 来得及 (be in time), plus figurative 过来 (come round) and 过去 (pass out).",
    level: "B2",
    hsk: "HSK 4",
    intro: [
      "English uses 'can' and 'can't' for almost every kind of ability. Chinese often puts 得 or 不 between a verb and its complement to say whether something can be done: 吃得了 (can finish eating), 买不起 (can't afford). These forms are short, idiomatic and very frequent in speech.",
    ],
    sections: [
      {
        heading: "V得了 / V不了 and V得起 / V不起",
        body: [
          "了 here is read liǎo, not le. V不了 (bù liǎo) means 'can't (manage to)': because of quantity, ability or circumstances. 这么多菜，我吃不了 (I can't eat all this). It can also express a prediction: 他来不了了 (he won't be able to come).",
          "起 (qǐ) in V得起 / V不起 is about affordability or social standing: 买不起 (can't afford to buy), 住不起 (can't afford to live there). 看不起 (kàn bu qǐ) is fixed: 'look down on'.",
        ],
        table: {
          headers: ["Form", "Pinyin", "Meaning"],
          rows: [
            ["吃不了", "chī bu liǎo", "can't eat (all of it)"],
            ["受不了", "shòu bu liǎo", "can't stand it"],
            ["买不起", "mǎi bu qǐ", "can't afford it"],
            ["看不起", "kàn bu qǐ", "look down on"],
            ["来得及 / 来不及", "lái de jí / lái bu jí", "be / not be in time"],
          ],
        },
        examples: [
          { zh: "这么多工作，我一个人做不了。", pinyin: "Zhème duō gōngzuò, wǒ yí ge rén zuò bu liǎo.", en: "I can't do this much work on my own." },
          { zh: "市中心的房子太贵了，我们买不起。", pinyin: "Shì zhōngxīn de fángzi tài guì le, wǒmen mǎi bu qǐ.", en: "Flats in the city centre are too expensive; we can't afford one." },
        ],
      },
      {
        heading: "来得及 and 来不及",
        body: [
          "来得及 (lái de jí) means 'there's still time', and 来不及 (lái bu jí) means 'there isn't time, too late'. They come before a verb phrase: 还来得及买票 (there's still time to buy tickets).",
        ],
        examples: [
          { zh: "别着急，现在出发还来得及。", pinyin: "Bié zháojí, xiànzài chūfā hái lái de jí.", en: "Don't worry, if we leave now we'll still make it." },
          { zh: "来不及吃早饭了，我路上买点儿吧。", pinyin: "Lái bu jí chī zǎofàn le, wǒ lùshang mǎi diǎnr ba.", en: "There's no time for breakfast; I'll grab something on the way." },
        ],
      },
      {
        heading: "Figurative 过来 and 过去",
        body: [
          "过来 (guòlai) and 过去 (guòqu) literally mean 'come over' and 'go over'. Figuratively, 过来 is a return to a normal state (醒过来, come round; 改过来, correct it) and 过去 is a loss of it (昏过去, pass out; 晕过去, faint). After the verb they are read in the neutral tone.",
        ],
        examples: [
          { zh: "病人终于醒过来了。", pinyin: "Bìngrén zhōngyú xǐng guolai le.", en: "The patient finally came round." },
          { zh: "他听到消息，差点儿晕过去。", pinyin: "Tā tīngdào xiāoxi, chàdiǎnr yūn guoqu.", en: "When he heard the news, he nearly fainted." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "我不能吃这么多菜。",
        right: "这么多菜，我吃不了。",
        rightPinyin: "Zhème duō cài, wǒ chī bu liǎo.",
        why: "不能 suggests you aren't allowed. When the problem is quantity or capacity, Chinese uses the potential complement.",
      },
      {
        wrong: "这个包太贵了，我不买得起。",
        right: "这个包太贵了，我买不起。",
        rightPinyin: "Zhège bāo tài guì le, wǒ mǎi bu qǐ.",
        why: "The negative goes between the verb and the complement: V不起, never 不V得起.",
      },
      {
        wrong: "我来不及了买票。",
        right: "我来不及买票了。",
        rightPinyin: "Wǒ lái bu jí mǎi piào le.",
        why: "The verb phrase follows 来不及 directly; the 了 of change goes at the end of the sentence.",
      },
    ],
    faqs: [
      {
        q: "How do I ask with these forms?",
        a: "Use 吗 or the A-not-A pattern: 你吃得了吗？ or 你吃得了吃不了？",
      },
      {
        q: "Is 受不了 rude?",
        a: "No, it's everyday speech for 'I can't stand it' and can be playful: 热得受不了 (unbearably hot).",
      },
    ],
    related: ["descriptive-de-and-ba-de", "attitude-adverbs-b2"],
    lessons: ["zh-b2-guolai-guoqu", "zh-b2-v-buliao", "zh-b2-v-buqi", "zh-b2-laideji"],
  },
  // ------------------------------------------------------------------
  {
    slug: "descriptive-de-and-ba-de",
    title: "So Much That: 得 + Clause, 把…V得…, V着V着 and Paired Question Words",
    description:
      "Describing results and manner in full: 得 followed by a whole clause (高兴得跳了起来), 把 + object + V得 + result, V着V着 (while doing, suddenly…) and 想吃什么就吃什么.",
    level: "B2",
    hsk: "HSK 4",
    intro: [
      "At B1 得 was followed by a short comment: 说得很好. At B2 it can be followed by a whole clause describing the effect, which is how Chinese says 'so … that'. The same idea combines with 把 when you do something to an object until it reaches a state. Two more spoken patterns round this off: V着V着 for something that happens in the middle of an activity, and paired question words for 'whatever you like'.",
    ],
    sections: [
      {
        heading: "Verb / adjective + 得 + clause",
        body: [
          "After 得 (de) you can put a full clause saying how far the state went: 他高兴得跳了起来 (he was so happy he jumped up). English needs 'so … that'; Chinese needs only 得. Fixed endings like 得要命 (to death) and 得不得了 (extremely) work the same way.",
        ],
        examples: [
          { zh: "她感动得说不出话来。", pinyin: "Tā gǎndòng de shuō bu chū huà lai.", en: "She was so moved she couldn't speak." },
          { zh: "我累得一躺下就睡着了。", pinyin: "Wǒ lèi de yì tǎngxia jiù shuìzháo le.", en: "I was so tired I fell asleep the moment I lay down." },
        ],
      },
      {
        heading: "把 + object + V得 + result",
        body: [
          "把 (bǎ) puts the object before the verb, and 得 + result says what state it ended up in: 她把房间打扫得干干净净 (she cleaned the room until it was spotless). Reduplicated adjectives (干干净净, 整整齐齐) are typical here.",
        ],
        examples: [
          { zh: "他把衣服叠得整整齐齐。", pinyin: "Tā bǎ yīfu dié de zhěngzhěngqíqí.", en: "He folded the clothes very neatly." },
          { zh: "孩子们把客厅弄得乱七八糟。", pinyin: "Háizimen bǎ kètīng nòng de luànqībāzāo.", en: "The kids left the living room in a complete mess." },
        ],
      },
      {
        heading: "V着V着 and paired question words",
        body: [
          "V着V着 (verb + 着 twice) means 'while doing V (for a while), suddenly…'. The second clause tells what happened unexpectedly: 说着说着，她哭了 (as she was talking, she started to cry).",
          "Paired question words say 'whatever, whoever, wherever': the same question word appears in both clauses, joined by 就. 想吃什么就吃什么 (eat whatever you like), 谁先到谁买票 (whoever arrives first buys the tickets).",
        ],
        examples: [
          { zh: "他看着看着就睡着了。", pinyin: "Tā kànzhe kànzhe jiù shuìzháo le.", en: "He was reading and drifted off to sleep." },
          { zh: "周末你想去哪儿就去哪儿。", pinyin: "Zhōumò nǐ xiǎng qù nǎr jiù qù nǎr.", en: "At the weekend you can go wherever you like." },
          { zh: "谁先做完谁先走。", pinyin: "Shéi xiān zuòwán shéi xiān zǒu.", en: "Whoever finishes first can leave first." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "他很高兴，所以他跳了起来。",
        right: "他高兴得跳了起来。",
        rightPinyin: "Tā gāoxìng de tiàole qilai.",
        why: "Not wrong, but flat. 得 + clause is the natural Chinese 'so … that'.",
      },
      {
        wrong: "她打扫房间得很干净。",
        right: "她把房间打扫得很干净。",
        rightPinyin: "Tā bǎ fángjiān dǎsǎo de hěn gānjìng.",
        why: "An object can't sit between the verb and 得. Use 把 to move it forward (or repeat the verb: 打扫房间打扫得很干净).",
      },
      {
        wrong: "你想吃什么，吃。",
        right: "你想吃什么就吃什么。",
        rightPinyin: "Nǐ xiǎng chī shénme jiù chī shénme.",
        why: "The question word is repeated in the second clause, joined by 就.",
      },
    ],
    faqs: [
      {
        q: "Why is 起来 sometimes written apart, as in 说不出话来?",
        a: "With an object, a compound directional complement splits around it: 说出 + 话 + 来. The same happens with 下起雨来.",
      },
      {
        q: "Can I use 着 once instead of 着着?",
        a: "One 着 describes an ongoing state (他看着书). The doubled form specifically sets up a sudden change during the activity.",
      },
    ],
    related: ["potential-and-figurative-complements", "spoken-patterns-b2"],
    lessons: ["zh-b2-de-clause", "zh-b2-zhe-zhe", "zh-b2-correlative-qwords", "zh-b2-ba-de"],
  },
  // ------------------------------------------------------------------
  {
    slug: "written-chinese-b2",
    title: "Written Chinese at B2: 是否, 与, 以及, 曾, 此, 作为 and 无法",
    description:
      "The first step into formal written Mandarin: the written words for whether, and, as well as, once, this and cannot, plus 作为 (as) and the language of official notices.",
    level: "B2",
    hsk: "HSK 4",
    intro: [
      "Chinese has two clearly different registers. Newspapers, signs, contracts and official letters use shorter, older words: 是否 instead of 是不是, 与 instead of 和, 此 instead of 这. Knowing which word belongs where matters as much as knowing what it means: a written word in casual speech sounds stiff, and a spoken word in a report sounds childish.",
    ],
    sections: [
      {
        heading: "是否, 与 and 以及",
        body: [
          "是否 (shìfǒu) is the written 'whether, if': 请确认是否参加 (please confirm whether you will attend). It replaces A-not-A and 是不是.",
          "与 (yǔ) is the written 'and, with', used between nouns, often in titles: 《战争与和平》 (War and Peace). 以及 (yǐjí) means 'as well as' and joins the last item of a longer list.",
        ],
        table: {
          headers: ["Spoken", "Written", "Meaning"],
          rows: [
            ["是不是 / A不A", "是否", "whether"],
            ["和 / 跟", "与", "and, with"],
            ["还有", "以及", "as well as"],
            ["这", "此", "this"],
            ["没办法", "无法", "be unable to"],
          ],
        },
        examples: [
          { zh: "请于本周五前告知是否参加会议。", pinyin: "Qǐng yú běn zhōuwǔ qián gàozhī shìfǒu cānjiā huìyì.", en: "Please let us know by this Friday whether you will attend the meeting." },
          { zh: "本店提供咖啡、茶以及各种点心。", pinyin: "Běn diàn tígōng kāfēi, chá yǐjí gè zhǒng diǎnxin.", en: "We serve coffee, tea and a range of snacks." },
        ],
      },
      {
        heading: "曾, 应, 自, 此 and 此外",
        body: [
          "Written adverbs are often one syllable: 曾 (céng) or 曾经 means 'once, in the past' and pairs with 过; 应 (yīng) is the written 应该; 自 (zì) means 'from, since' (自即日起, from today).",
          "此 (cǐ) means 'this' in writing: 因此 (because of this), 此时 (at this time), 在此 (here). 此外 (cǐwài) means 'in addition, besides' and opens a sentence.",
        ],
        examples: [
          { zh: "他曾在北京工作过五年。", pinyin: "Tā céng zài Běijīng gōngzuòguo wǔ nián.", en: "He once worked in Beijing for five years." },
          { zh: "此外，申请人还应提供身份证明。", pinyin: "Cǐwài, shēnqǐngrén hái yīng tígōng shēnfèn zhèngmíng.", en: "In addition, applicants must provide proof of identity." },
        ],
      },
      {
        heading: "作为, 无法 and official notices",
        body: [
          "作为 (zuòwéi) means 'as (in the role of)': 作为老师，我… (as a teacher, I…). English 'as' has many meanings; 作为 only covers the role one.",
          "无法 (wúfǎ) + verb is the written 'be unable to': 无法联系 (cannot be contacted). Speech says 没办法 or V不了.",
          "Notices use their own vocabulary: 禁止 (jìnzhǐ, it is forbidden to), 一律 (yílǜ, without exception), 限 (xiàn, limited to). 禁止吸烟 is the standard 'No smoking'.",
        ],
        examples: [
          { zh: "作为父母，我们应该尊重孩子的选择。", pinyin: "Zuòwéi fùmǔ, wǒmen yīnggāi zūnzhòng háizi de xuǎnzé.", en: "As parents, we should respect our children's choices." },
          { zh: "由于天气原因，航班无法按时起飞。", pinyin: "Yóuyú tiānqì yuányīn, hángbān wúfǎ ànshí qǐfēi.", en: "Due to the weather, the flight cannot take off on time." },
          { zh: "车内禁止吸烟。", pinyin: "Chē nèi jìnzhǐ xī yān.", en: "No smoking in the vehicle." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "我与他去看电影了。",
        right: "我跟他去看电影了。",
        rightPinyin: "Wǒ gēn tā qù kàn diànyǐng le.",
        why: "与 is written style. In everyday speech about yourself, use 跟 or 和.",
      },
      {
        wrong: "请确认您是否参加吗？",
        right: "请确认您是否参加。",
        rightPinyin: "Qǐng quèrèn nín shìfǒu cānjiā.",
        why: "是否 already makes it a question ('whether or not'), so 吗 can't be added.",
      },
      {
        wrong: "我明天无法来。 (texting a friend)",
        right: "我明天来不了。",
        rightPinyin: "Wǒ míngtiān lái bu liǎo.",
        why: "无法 belongs in formal writing and announcements. Between friends it sounds stiff; use the potential complement.",
      },
    ],
    faqs: [
      {
        q: "Can I join two sentences with 与?",
        a: "No. Like 和, 与 joins nouns and noun phrases. To join clauses, use 而且, 并且 or 并.",
      },
      {
        q: "Is 曾经 the same as 已经?",
        a: "No. 曾经 says something happened once in the past (and is usually over); 已经 says something has already happened by now.",
      },
    ],
    related: ["perspective-and-framing-b2", "trends-and-numbers-b2"],
    lessons: ["zh-b2-formal", "zh-b2-written-adverbs", "zh-b2-ci", "zh-b2-zuowei", "zh-b2-wufa", "zh-b2-notices"],
  },
  // ------------------------------------------------------------------
  {
    slug: "perspective-and-framing-b2",
    title: "For Me, In Terms Of, Regarding: 对…来说, 在…方面, 对于, 关于, 在于, 根据",
    description:
      "The frames that set up a discussion: 对…来说 (for someone), 在…方面 / 在…上 (in terms of), 拿…来说 (take … for example), 对于 vs 关于 (regarding), 在于 (lies in) and 根据 (according to).",
    level: "B2",
    hsk: "HSK 4",
    intro: [
      "When you give an opinion or compare things, you need to say from whose point of view and in which respect. Chinese does this with frames that go at the start of the sentence or before the verb. Many of them are two-part: 对 … 来说, 在 … 方面, 拿 … 来说.",
    ],
    sections: [
      {
        heading: "对…来说, 在…方面 and 拿…来说",
        body: [
          "对 (duì) + person + 来说 (lái shuō) means 'for (someone), as far as … is concerned': 对我来说，周末最重要 (for me, weekends matter most). Don't confuse it with 对 + person + 说 (say to someone).",
          "在 + noun + 方面 (fāngmiàn) means 'in terms of, in the area of'; 在…上 is similar for abstract things (在学习上, as regards studying), and 在…下 means 'under' conditions or help (在老师的帮助下).",
          "拿 (ná) + example + 来说 means 'take … for example': 拿我来说 (take me, for example). 比如 (bǐrú) is the simpler 'for example'.",
        ],
        examples: [
          { zh: "对我来说，健康比钱重要。", pinyin: "Duì wǒ lái shuō, jiànkāng bǐ qián zhòngyào.", en: "For me, health matters more than money." },
          { zh: "在教育方面，这个城市投入了很多资金。", pinyin: "Zài jiàoyù fāngmiàn, zhège chéngshì tóurùle hěn duō zījīn.", en: "In education, this city has invested a lot of money." },
          { zh: "在大家的帮助下，我们按时完成了任务。", pinyin: "Zài dàjiā de bāngzhù xià, wǒmen ànshí wánchéngle rènwu.", en: "With everyone's help, we finished the job on time." },
        ],
      },
      {
        heading: "对于 vs 关于",
        body: [
          "Both translate as 'regarding, about', but they aren't interchangeable. 关于 (guānyú) marks the topic: 'about, on the subject of'. It is the word for titles: 关于环境的文章 (an article about the environment). 对于 (duìyú) marks the thing someone has an attitude or action towards: 对于这个问题，我有不同的看法 (on this issue, I see things differently).",
          "Rule of thumb: if you could say 'concerning the subject of', use 关于; if it's 'towards' or 'with respect to' an attitude, use 对于 (or just 对). 关于 phrases usually go at the start of the sentence, not after the subject.",
        ],
        examples: [
          { zh: "关于这件事，我们明天再讨论。", pinyin: "Guānyú zhè jiàn shì, wǒmen míngtiān zài tǎolùn.", en: "We'll discuss this matter again tomorrow." },
          { zh: "对于学生来说，时间管理非常重要。", pinyin: "Duìyú xuésheng lái shuō, shíjiān guǎnlǐ fēicháng zhòngyào.", en: "For students, time management is very important." },
        ],
      },
      {
        heading: "在于, 针对 and 根据",
        body: [
          "在于 (zàiyú) means 'lies in, depends on': 问题在于… (the problem lies in…), 成功的关键在于坚持 (the key to success lies in perseverance). 针对 (zhēnduì) means 'aimed at, in response to': 针对这个问题.",
          "根据 (gēnjù) means 'according to, on the basis of': 根据调查 (according to the survey). It cites evidence or rules, not a person's opinion; for 'according to him', say 他说 or 在他看来.",
        ],
        examples: [
          { zh: "学好语言的关键在于多练习。", pinyin: "Xuéhǎo yǔyán de guānjiàn zàiyú duō liànxí.", en: "The key to learning a language well lies in practising a lot." },
          { zh: "根据最新的调查，年轻人越来越喜欢网上购物。", pinyin: "Gēnjù zuì xīn de diàochá, niánqīngrén yuè lái yuè xǐhuan wǎngshàng gòuwù.", en: "According to the latest survey, young people increasingly like shopping online." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "我对他来说，他是个好人。",
        right: "对我来说，他是个好人。",
        rightPinyin: "Duì wǒ lái shuō, tā shì ge hǎo rén.",
        why: "The whole frame 对 + person + 来说 goes at the front; the person inside it is the one whose view counts.",
      },
      {
        wrong: "这是一本对于中国历史的书。",
        right: "这是一本关于中国历史的书。",
        rightPinyin: "Zhè shì yì běn guānyú Zhōngguó lìshǐ de shū.",
        why: "For the topic of a book, talk or article, use 关于.",
      },
      {
        wrong: "根据我，这个办法不好。",
        right: "在我看来，这个办法不好。",
        rightPinyin: "Zài wǒ kàn lái, zhège bànfǎ bù hǎo.",
        why: "根据 cites evidence, not people. For 'in my view', use 在我看来 or 我认为.",
      },
    ],
    faqs: [
      {
        q: "Is 对…来说 the same as 对…而言?",
        a: "Yes in meaning. 对…而言 is the written version, covered at C1 with 就…而言.",
      },
      {
        q: "Can I drop 方面?",
        a: "Sometimes 在 + noun + 上 replaces it (在工作上), but plain 在工作 means 'at work, working'. Keep the frame complete.",
      },
    ],
    related: ["written-chinese-b2", "trends-and-numbers-b2"],
    lessons: ["zh-b2-dui-laishuo", "zh-b2-fangmian", "zh-b2-na-laishuo", "zh-b2-duiyu-guanyu", "zh-b2-zaiyu", "zh-b2-debate", "zh-b2-genju"],
  },
  // ------------------------------------------------------------------
  {
    slug: "trends-and-numbers-b2",
    title: "Change, Trends and Amounts: 随着, 逐渐, 纷纷, 倍, 分之 and Exact Comparisons",
    description:
      "How to describe change and quantity: 随着 (as … changes), 逐渐 / 渐渐 / 逐步 (gradually), 纷纷 and 陆续 (one after another), 倍 and 分之 (times, fractions), 比 with exact amounts, and 位于 / 距离 (located at, distance from).",
    level: "B2",
    hsk: "HSK 4",
    intro: [
      "Reports, news and presentations all describe change: things growing, spreading, getting cheaper. This guide collects the words for how something changes, how fast, and by how much.",
    ],
    sections: [
      {
        heading: "随着 and gradual change",
        body: [
          "随着 (suízhe) + noun phrase means 'as, along with': it introduces a background change that causes another. 随着经济的发展，人们的生活越来越好 (as the economy develops, people's lives keep improving). It goes at the start of the sentence and is followed by a noun phrase, often with 的.",
          "逐渐 (zhújiàn) and 渐渐 (jiànjiàn) both mean 'gradually' for natural change; 渐渐 is more literary and descriptive. 逐步 (zhúbù) is 'step by step' for planned change: 逐步推广 (roll out gradually). 迅速 (xùnsù) is 'rapidly'.",
        ],
        examples: [
          { zh: "随着手机的普及，网上购物越来越方便。", pinyin: "Suízhe shǒujī de pǔjí, wǎngshàng gòuwù yuè lái yuè fāngbiàn.", en: "As smartphones have spread, online shopping has become more and more convenient." },
          { zh: "天渐渐黑了。", pinyin: "Tiān jiànjiàn hēi le.", en: "It was slowly getting dark." },
          { zh: "政府计划逐步提高最低工资。", pinyin: "Zhèngfǔ jìhuà zhúbù tígāo zuì dī gōngzī.", en: "The government plans to raise the minimum wage step by step." },
        ],
      },
      {
        heading: "纷纷 and 陆续",
        body: [
          "纷纷 (fēnfēn) means 'one after another, in large numbers', for many people or things doing the same thing: 大家纷纷表示支持 (people expressed their support one after another). 陆续 (lùxù) means 'in succession, a few at a time': 客人陆续到了 (the guests arrived in ones and twos).",
          "Both describe plural subjects only.",
        ],
        examples: [
          { zh: "消息传开后，网友纷纷留言。", pinyin: "Xiāoxi chuánkāi hòu, wǎngyǒu fēnfēn liúyán.", en: "Once the news spread, people online flocked to comment." },
          { zh: "同学们陆续走进了教室。", pinyin: "Tóngxuémen lùxù zǒujìnle jiàoshì.", en: "The students came into the classroom one after another." },
        ],
      },
      {
        heading: "倍, 分之, exact comparisons and location",
        body: [
          "倍 (bèi) means 'times': 是…的两倍 (twice as much as). Careful: strictly, 增加了两倍 means 'increased by two times', i.e. it is now three times as much; 增加到两倍 means 'doubled'.",
          "Fractions put the whole first: 三分之一 (sān fēn zhī yī, one third), 百分之二十 (twenty per cent).",
          "With 比, the exact difference goes after the adjective: 他比我高五厘米 (he's five centimetres taller than me), 贵一倍 (twice the price).",
          "位于 (wèiyú, be located at) and 距离 (jùlí, distance from) are written words for describing places: 学校位于市中心，距离火车站两公里.",
        ],
        examples: [
          { zh: "今年的销售额是去年的两倍。", pinyin: "Jīnnián de xiāoshòu'é shì qùnián de liǎng bèi.", en: "This year's sales are twice last year's." },
          { zh: "全班三分之二的学生都通过了考试。", pinyin: "Quán bān sān fēn zhī èr de xuésheng dōu tōngguòle kǎoshì.", en: "Two thirds of the class passed the exam." },
          { zh: "哥哥比我大三岁。", pinyin: "Gēge bǐ wǒ dà sān suì.", en: "My brother is three years older than me." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "他比我五厘米高。",
        right: "他比我高五厘米。",
        rightPinyin: "Tā bǐ wǒ gāo wǔ límǐ.",
        why: "The amount of difference comes after the adjective, not before it as in English.",
      },
      {
        wrong: "一分之三",
        right: "三分之一",
        rightPinyin: "sān fēn zhī yī",
        why: "Chinese fractions name the whole first: 'of three parts, one'.",
      },
      {
        wrong: "随着人口增加了，交通越来越堵。",
        right: "随着人口的增加，交通越来越堵。",
        rightPinyin: "Suízhe rénkǒu de zēngjiā, jiāotōng yuè lái yuè dǔ.",
        why: "随着 takes a noun phrase (人口的增加), not a finished clause with 了.",
      },
    ],
    faqs: [
      {
        q: "Does 翻一番 mean the same as 增加一倍?",
        a: "Yes: both mean 'double'. 翻一番 is common in economic writing and comes back at C1.",
      },
      {
        q: "Can 纷纷 describe one person?",
        a: "No. It needs many people or things acting one after another.",
      },
    ],
    related: ["perspective-and-framing-b2", "written-chinese-b2"],
    lessons: ["zh-b2-suizhe", "zh-b2-bei-fenzhi", "zh-b2-gradually", "zh-b2-one-after-another", "zh-b2-weiyu", "zh-b2-compare-looks"],
  },
  // ------------------------------------------------------------------
  {
    slug: "even-especially-as-if",
    title: "Even, Especially, As If: 甚至, 尤其, 似乎 and 像…似的",
    description:
      "Adding a stronger example with 甚至, singling one out with 尤其 / 特别是, and saying how things seem with 似乎 and 像…似的.",
    level: "B2",
    hsk: "HSK 4",
    intro: [
      "These words help you build up a description: 甚至 adds the most surprising case, 尤其 picks out the one that stands out, and 似乎 and 像…似的 say how something appears without committing to it.",
    ],
    sections: [
      {
        heading: "甚至: even",
        body: [
          "甚至 (shènzhì) adds a further, stronger or more surprising example, usually after a first one: 他忙得没时间吃饭，甚至没时间睡觉 (he's so busy he has no time to eat, even to sleep). It can stand before a noun or before the verb. It often pairs with 都 or 也.",
          "Compare 连…都 (even), which you met at B1: 连 highlights a single item inside a sentence; 甚至 adds a new step to a list. The two often appear together: 甚至连…都.",
        ],
        examples: [
          { zh: "这里的空气污染很严重，有时候甚至看不见对面的楼。", pinyin: "Zhèlǐ de kōngqì wūrǎn hěn yánzhòng, yǒu shíhou shènzhì kàn bu jiàn duìmiàn de lóu.", en: "Air pollution here is serious; sometimes you can't even see the building opposite." },
          { zh: "很多人，甚至专家，都没想到会这样。", pinyin: "Hěn duō rén, shènzhì zhuānjiā, dōu méi xiǎngdào huì zhèyàng.", en: "Many people, even experts, didn't see this coming." },
        ],
      },
      {
        heading: "尤其 and 特别是: especially",
        body: [
          "尤其 (yóuqí) singles out one member of a group: 我喜欢水果，尤其是苹果 (I like fruit, especially apples). Before a noun use 尤其是; before an adjective or verb, 尤其 alone: 今天尤其冷. 特别是 (tèbié shì) is a spoken equivalent before nouns.",
        ],
        examples: [
          { zh: "学汉语很有意思，尤其是学成语。", pinyin: "Xué Hànyǔ hěn yǒu yìsi, yóuqí shì xué chéngyǔ.", en: "Learning Chinese is great fun, especially learning idioms." },
          { zh: "这几天尤其忙。", pinyin: "Zhè jǐ tiān yóuqí máng.", en: "These last few days have been especially busy." },
        ],
      },
      {
        heading: "似乎 and 像…似的: as if",
        body: [
          "似乎 (sìhū) means 'seemingly, it seems': a soft, slightly literary way of saying how things look. 他似乎不太高兴 (he doesn't seem very happy). 好像 (hǎoxiàng) is the everyday equivalent.",
          "像 … 似的 (xiàng … shìde) means 'like, as if': 她高兴得像个孩子似的 (she was as happy as a child). Note that 似 is read shì in 似的, but sì in 似乎. 像…一样 is a neutral equivalent.",
        ],
        examples: [
          { zh: "他似乎对这个话题不感兴趣。", pinyin: "Tā sìhū duì zhège huàtí bù gǎn xìngqù.", en: "He doesn't seem interested in this topic." },
          { zh: "她高兴得像个孩子似的。", pinyin: "Tā gāoxìng de xiàng ge háizi shìde.", en: "She was as happy as a child." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "我喜欢运动，尤其游泳。",
        right: "我喜欢运动，尤其是游泳。",
        rightPinyin: "Wǒ xǐhuan yùndòng, yóuqí shì yóu yǒng.",
        why: "Before a noun or a named activity, use 尤其是. 尤其 alone goes before an adjective or verb phrase.",
      },
      {
        wrong: "他似的很累。",
        right: "他似乎很累。",
        rightPinyin: "Tā sìhū hěn lèi.",
        why: "似乎 (sìhū) is an adverb before the predicate; 似的 (shìde) closes a 像… comparison.",
      },
      {
        wrong: "甚至他不知道。",
        right: "连他都不知道。",
        rightPinyin: "Lián tā dōu bù zhīdào.",
        why: "To highlight one surprising person inside a sentence, use 连…都. 甚至 adds a further step after something else has been said.",
      },
    ],
    faqs: [
      {
        q: "Is 尤其 formal?",
        a: "Slightly. In casual speech 特别是 is more common before a noun, and 特别 before an adjective.",
      },
      {
        q: "Will I see 甚至 again?",
        a: "Yes: at C1 it returns alongside 何况 and 更不用说, in longer arguments.",
      },
    ],
    related: ["attitude-adverbs-b2", "spoken-patterns-b2"],
    lessons: ["zh-b2-youqi", "zh-b2-shenzhi", "zh-b2-sihu-side"],
  },
  // ------------------------------------------------------------------
  {
    slug: "spoken-patterns-b2",
    title: "Spoken Patterns: 叫 and 让 Passives, 替 / 帮 / 给 and 随手",
    description:
      "Everyday spoken alternatives at B2: the colloquial passives with 叫 and 让, and doing something for someone with 替, 帮 and 给.",
    level: "B2",
    hsk: "HSK 4",
    intro: [
      "Spoken Mandarin has its own versions of several structures you first learned in a neutral form. 被 is the standard passive; in conversation people often use 叫 or 让 instead. 'For someone' can be 给, 帮 or 替, each with a slightly different idea.",
    ],
    sections: [
      {
        heading: "叫 and 让 passives",
        body: [
          "叫 (jiào) and 让 (ràng) can replace 被 in speech: 我的自行车叫人偷了 (my bike got stolen). Like 被, they describe something unwelcome. Unlike 被, they need an agent after them: you can say 被偷了 but not 叫偷了. If you don't know who did it, use 人 (someone).",
          "The verb usually has a result or 了 after it, as with 被.",
        ],
        table: {
          headers: ["Word", "Register", "Agent required?"],
          rows: [
            ["被", "neutral, written and spoken", "no"],
            ["叫", "spoken", "yes"],
            ["让", "spoken", "yes"],
            ["给", "spoken (covered at C1)", "no"],
          ],
        },
        examples: [
          { zh: "我的伞叫风吹跑了。", pinyin: "Wǒ de sǎn jiào fēng chuīpǎo le.", en: "My umbrella got blown away by the wind." },
          { zh: "蛋糕让弟弟吃完了。", pinyin: "Dàngāo ràng dìdi chīwán le.", en: "The cake got eaten up by my little brother." },
        ],
      },
      {
        heading: "替, 帮 and 给 + person + verb",
        body: [
          "给 (gěi) + person + verb is 'for (the benefit of)': 给妈妈打电话 (call Mum). 帮 (bāng) + person + verb is 'help someone (do)': 帮我拿一下 (hold this for me). 替 (tì) + person + verb is 'in someone's place': 替我向他问好 (say hello to him for me), 我替你去 (I'll go instead of you).",
          "随手 (suíshǒu) means 'while you're at it, as you go': 随手关灯 (turn the lights off as you leave).",
        ],
        examples: [
          { zh: "你出去的时候随手关一下门。", pinyin: "Nǐ chūqu de shíhou suíshǒu guān yíxià mén.", en: "Shut the door behind you as you go out." },
          { zh: "我今天不舒服，你能替我去开会吗？", pinyin: "Wǒ jīntiān bù shūfu, nǐ néng tì wǒ qù kāi huì ma?", en: "I'm not well today; could you go to the meeting in my place?" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "我的钱包叫偷了。",
        right: "我的钱包叫人偷了。",
        rightPinyin: "Wǒ de qiánbāo jiào rén tōu le.",
        why: "叫 and 让 passives need an agent. If it's unknown, use 人; or switch to 被偷了.",
      },
      {
        wrong: "我的作业叫狗吃。",
        right: "我的作业叫狗吃了。",
        rightPinyin: "Wǒ de zuòyè jiào gǒu chī le.",
        why: "Like 被, a 叫 or 让 passive reports a completed event: the verb needs 了 or a result after it.",
      },
      {
        wrong: "你能帮忙我吗？",
        right: "你能帮我一下吗？",
        rightPinyin: "Nǐ néng bāng wǒ yíxià ma?",
        why: "帮忙 already contains its object (忙), so it can't take another one. Use 帮 + person, or 帮我个忙.",
      },
    ],
    faqs: [
      {
        q: "How do I know whether 让 means 'let' or a passive?",
        a: "Context and the verb's ending. A passive 让 sentence has the undergoer as subject and a result (吃完了, 吹跑了); a causative 让 sentence has the person who allows or makes something happen.",
      },
      {
        q: "Are 叫 and 让 passives used in writing?",
        a: "Rarely. Writing uses 被, and at C1 the formal 为…所.",
      },
    ],
    related: ["descriptive-de-and-ba-de", "even-especially-as-if"],
    lessons: ["zh-b2-jiao-rang-passive", "zh-b2-good-habits"],
  },
];
