// Synced from cheneygross-afk/lengo:src/lib/grammar/zh-guides-c2.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ZhGrammarGuide } from "./zh-types";

// C2 (HSK 7–9) Chinese grammar guides. Conventions: src/lib/lessons/zh/README.md
// (simplified characters; pinyin shows dictionary tones except 不 and 一,
// which are written as spoken; neutral tones unmarked). Chinese quoted in
// English paragraphs is written as 汉字 (pīnyīn).

export const ZH_GUIDES_C2: ZhGrammarGuide[] = [
  // ------------------------------------------------------------------
  {
    slug: "classical-words-1-c2",
    title: "Classical Function Words I: 者, 即, 乃 and 何",
    description:
      "Four classical words that run through modern written Chinese: 者 (the one who; 前者 and 后者), 即 and 乃 (is, namely), and 何 (what, why, how) in 何时, 为何, 如何 and 何必.",
    level: "C2",
    hsk: "HSK 7–9",
    intro: [
      "Classical Chinese (文言, wényán) was the written standard for two thousand years, and modern formal writing still borrows its function words. They're short, dense and often replace a whole spoken phrase: 为何 does the work of 为什么, 即 the work of 就是. Recognising them is essential for reading; using a few of them well marks your writing as genuinely advanced.",
    ],
    sections: [
      {
        heading: "者: the one who, the former and the latter",
        body: [
          "者 (zhě) after a verb or adjective makes a noun for a person: 'the one who …'. Many are ordinary words: 读者 (reader), 作者 (author), 记者 (journalist), 消费者 (consumer), 志愿者 (volunteer). In writing it can be attached to a phrase: 违者罚款 (offenders will be fined).",
          "前者 (qiánzhě, the former) and 后者 (hòuzhě, the latter) refer back to two things just mentioned. 或者 and 再者 (furthermore) also contain it.",
        ],
        examples: [
          { zh: "城市和农村各有优点：前者方便，后者安静。", pinyin: "Chéngshì hé nóngcūn gè yǒu yōudiǎn: qiánzhě fāngbiàn, hòuzhě ānjìng.", en: "Town and country each have their advantages: the former is convenient, the latter quiet." },
          { zh: "公园内禁止钓鱼，违者罚款。", pinyin: "Gōngyuán nèi jìnzhǐ diào yú, wéizhě fá kuǎn.", en: "Fishing is prohibited in the park. Offenders will be fined." },
        ],
      },
      {
        heading: "即 and 乃: is, namely",
        body: [
          "即 (jí) means 'that is, namely' or 'is precisely': 即将 (about to), 即使 (even if) and 立即 (at once) contain it. On its own it defines or explains: 农历正月初一，即春节 (the first day of the first lunar month, that is, Spring Festival). It also means 'immediately': 一触即发 (ready to explode at a touch).",
          "乃 (nǎi) is a literary 'is, is indeed': 胜败乃兵家常事 (victory and defeat are a normal part of war). It appears mainly in set phrases and elevated rhetoric.",
        ],
        examples: [
          { zh: "农历正月初一，即春节，是中国最重要的节日。", pinyin: "Nónglì zhēngyuè chū yī, jí Chūnjié, shì Zhōngguó zuì zhòngyào de jiérì.", en: "The first day of the first lunar month, that is, Spring Festival, is China's most important holiday." },
          { zh: "失败乃成功之母。", pinyin: "Shībài nǎi chénggōng zhī mǔ.", en: "Failure is the mother of success." },
        ],
      },
      {
        heading: "何: what, why, how",
        body: [
          "何 (hé) is the classical question word. It survives in many compounds: 何时 (when), 何处 (where), 为何 (why), 如何 (how), 任何 (any), 何况 (let alone), 何必 (why must, there's no need). In writing these replace the spoken 什么时候, 哪里, 为什么 and 怎么样.",
          "何必 (hébì) and 何苦 (hékǔ) are rhetorical: 'why bother, why put yourself through that'. They're common in speech too.",
        ],
        table: {
          headers: ["Written", "Spoken", "Meaning"],
          rows: [
            ["何时", "什么时候", "when"],
            ["何处", "哪里", "where"],
            ["为何", "为什么", "why"],
            ["如何", "怎么样 / 怎么", "how"],
            ["何必", "为什么一定要", "why must, no need to"],
          ],
        },
        examples: [
          { zh: "会议何时开始尚未确定。", pinyin: "Huìyì héshí kāishǐ shàngwèi quèdìng.", en: "When the meeting will start has not yet been decided." },
          { zh: "一点小事，何必生气？", pinyin: "Yì diǎn xiǎo shì, hébì shēng qì?", en: "It's such a small thing; why get angry?" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "苹果、香蕉和橙子，我最喜欢前者。",
        right: "苹果、香蕉和橙子，我最喜欢苹果。",
        rightPinyin: "Píngguǒ, xiāngjiāo hé chéngzi, wǒ zuì xǐhuan píngguǒ.",
        why: "前者 and 后者 only work for exactly two items. With three or more, name the one you mean.",
      },
      {
        wrong: "你为何不来？ (texting a friend)",
        right: "你为什么不来？",
        rightPinyin: "Nǐ wèi shénme bù lái?",
        why: "为何 is written style. In a casual message it sounds theatrical.",
      },
      {
        wrong: "如何你打算前往？",
        right: "您打算如何前往？",
        rightPinyin: "Nín dǎsuan rúhé qiánwǎng?",
        why: "Like 怎么, 如何 stays in place before the verb; Chinese question words don't move to the front.",
      },
    ],
    faqs: [
      {
        q: "Is 如何 too formal for speech?",
        a: "It's fine in a formal spoken context (a meeting, a presentation) and in set questions like 你觉得如何？ In casual talk, 怎么样 is more natural.",
      },
      {
        q: "Is 即 the same as 就?",
        a: "Often: 即 is the written equivalent of 就 / 就是 in 'that is' and 'immediately'.",
      },
    ],
    related: ["classical-words-2-c2", "er-ze-qie-c2", "wenyan-and-chengyu-c2"],
    lessons: ["zh-c2-zhe", "zh-c2-ji", "zh-c2-he"],
  },
  // ------------------------------------------------------------------
  {
    slug: "classical-words-2-c2",
    title: "Classical Function Words II: 也, 矣, 乎, 焉, 哉, 之 and 以",
    description:
      "The classical final particles you meet in quotations and set phrases, 之 as a pronoun and in fixed phrases (总之, 久而久之), and the full range of 以: by means of, because of, according to and in order to.",
    level: "C2",
    hsk: "HSK 7–9",
    intro: [
      "Classical final particles carry tone the way 吗, 吧 and 啊 do today, and they live on in proverbs, quotations and chengyu. 之 and 以 are more active: they appear in modern formal prose every day, in meanings that go well beyond what you met at C1.",
    ],
    sections: [
      {
        heading: "也, 矣, 乎, 焉 and 哉",
        body: [
          "也 (yě) at the end of a classical sentence marks a statement or judgement ('is'), not 'also'. 矣 (yǐ) marks a change or completion, like modern 了. 乎 (hū) marks a question or exclamation, like 吗 or 呢; it also survives in words like 几乎 and 似乎. 焉 (yān) means 'there, in it' or 'how'. 哉 (zāi) is an exclamation or a rhetorical question.",
          "You don't use these in modern sentences, except jokingly. You do need to recognise them in quotations such as 学而时习之，不亦说乎 (说 here is read yuè, 'pleased').",
        ],
        table: {
          headers: ["Particle", "Modern equivalent", "Set phrase"],
          rows: [
            ["也", "是 / 的 (statement)", "非我所愿也"],
            ["矣", "了", "悔之晚矣 (too late for regrets)"],
            ["乎", "吗 / 呢", "不亦乐乎"],
            ["焉", "在这里 / 怎么", "心不在焉 (absent-minded)"],
            ["哉", "啊 (exclamation)", "呜呼哀哉"],
          ],
        },
        examples: [
          { zh: "他上课总是心不在焉。", pinyin: "Tā shàng kè zǒngshì xīnbúzàiyān.", en: "He's always miles away in class." },
          { zh: "现在才后悔，悔之晚矣。", pinyin: "Xiànzài cái hòuhuǐ, huǐ zhī wǎn yǐ.", en: "Regretting it now is too late." },
        ],
      },
      {
        heading: "之 as a pronoun and in fixed phrases",
        body: [
          "Besides its C1 role as a written 的, 之 (zhī) can be an object pronoun meaning 'it, him, them': 取而代之 (take its place), 总而言之 (to sum it up), 久而久之 (over time), 置之不理 (ignore it). It also links a subject and verb into a noun phrase: 大道之行也 (when the Great Way prevails), where 之 turns 'the Great Way prevails' into 'the prevailing of the Great Way'.",
        ],
        examples: [
          { zh: "他每天熬夜，久而久之身体就垮了。", pinyin: "Tā měi tiān áo yè, jiǔ'érjiǔzhī shēntǐ jiù kuǎ le.", en: "He stayed up late every night, and over time his health broke down." },
          { zh: "对于这些批评，他一概置之不理。", pinyin: "Duìyú zhèxiē pīpíng, tā yígài zhì zhī bù lǐ.", en: "He ignored all of these criticisms." },
        ],
      },
      {
        heading: "以 in full",
        body: [
          "以 (yǐ) has four main written meanings. Means: 'with, by' (以实际行动支持, support with concrete action). Reason: 'because of' (以…而闻名, famous for). Standard: 'according to, by' (以…为准, take … as the standard). Purpose: 'in order to' (以满足需求, so as to meet demand).",
          "It also forms many compounds: 以便, 以免, 以及, 以致, 可以, 所以, 以为.",
        ],
        examples: [
          { zh: "杭州以西湖而闻名。", pinyin: "Hángzhōu yǐ Xīhú ér wénmíng.", en: "Hangzhou is famous for the West Lake." },
          { zh: "比赛时间以通知为准。", pinyin: "Bǐsài shíjiān yǐ tōngzhī wéi zhǔn.", en: "For match times, the official notice is what counts." },
          { zh: "我们将增加班次，以满足乘客的需求。", pinyin: "Wǒmen jiāng zēngjiā bāncì, yǐ mǎnzú chéngkè de xūqiú.", en: "We will add more services to meet passenger demand." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "我吃饭矣。",
        right: "我吃饭了。",
        rightPinyin: "Wǒ chī fàn le.",
        why: "Classical particles belong in quotations and set phrases. In a modern sentence, 矣 sounds like a parody.",
      },
      {
        wrong: "杭州闻名以西湖。",
        right: "杭州以西湖闻名。",
        rightPinyin: "Hángzhōu yǐ Xīhú wénmíng.",
        why: "以 + reason comes before the verb, not after it like English 'famous for': 以 A 闻名 or 以 A 而闻名.",
      },
      {
        wrong: "总之而言",
        right: "总而言之",
        rightPinyin: "zǒng ér yán zhī",
        why: "The set phrase is 总而言之 (or the short form 总之). Fixed classical phrases can't be rearranged.",
      },
    ],
    faqs: [
      {
        q: "Why is 说 read yuè in 不亦说乎?",
        a: "In Classical Chinese 说 was also used for 悦 (pleased). Quotations keep the old reading.",
      },
      {
        q: "Should I use 也 at the end of sentences in an essay?",
        a: "No. Modern essays quote classical lines but don't imitate their grammar.",
      },
    ],
    related: ["classical-words-1-c2", "er-ze-qie-c2", "wenyan-and-chengyu-c2"],
    lessons: ["zh-c2-ye-yi-hu", "zh-c2-zhi-object", "zh-c2-yi-full"],
  },
  // ------------------------------------------------------------------
  {
    slug: "er-ze-qie-c2",
    title: "Linking in Writing: 因…而, 而, 则, 且, 亦, 皆, 所 and 无非",
    description:
      "The written linkers of advanced prose: 因…而… (because of … therefore), the full range of 而, 则 (then, whereas), 且, 亦, 皆 and 均 (and, also, all), 有所 and 无所, and 无非 / 不外乎 / 不过是…而已 (nothing but).",
    level: "C2",
    hsk: "HSK 7–9",
    intro: [
      "Where spoken Chinese uses two-character words (而且, 也, 都, 那么), formal prose often uses single classical characters (且, 亦, 皆, 则). They make writing tighter and more balanced, and they're what gives an editorial or academic paper its texture.",
    ],
    sections: [
      {
        heading: "因…而… and 而 in full",
        body: [
          "因 A 而 B (yīn A ér B) means 'B happens because of A': 因病而缺席 (absent through illness). The cause is short; the result follows 而.",
          "而 (ér) joins two predicates with several meanings. Addition: 简单而有效 (simple and effective). Contrast: 有其名而无其实 (in name but not in reality). Manner, linking how to what: 匆匆而去 (left in a hurry). Purpose or result: 为…而奋斗 (fight for …).",
        ],
        examples: [
          { zh: "比赛因天气原因而推迟。", pinyin: "Bǐsài yīn tiānqì yuányīn ér tuīchí.", en: "The match has been postponed because of the weather." },
          { zh: "这个方法简单而有效。", pinyin: "Zhège fāngfǎ jiǎndān ér yǒuxiào.", en: "This method is simple and effective." },
          { zh: "他为理想而奋斗了一生。", pinyin: "Tā wèi lǐxiǎng ér fèndòule yìshēng.", en: "He fought for his ideals all his life." },
        ],
      },
      {
        heading: "则, 且, 亦, 皆 and 均",
        body: [
          "则 (zé) means 'then' in conditions (如有问题，则应及时报告, if there is a problem, it should be reported promptly) and 'whereas, as for' in contrasts (前者重理论，后者则重实践). In a contrast it comes after the second subject, right before the verb; in a condition it opens the result clause and can come before that clause's subject (若一方违约，则另一方有权终止合同), which 就 can't.",
          "且 (qiě) means 'and also, moreover': 既…且… (both … and), 并且, 而且. 亦 (yì) is the written 也. 皆 (jiē) and 均 (jūn) are the written 都: 人人皆知 (everyone knows), 均已完成 (all completed).",
        ],
        table: {
          headers: ["Written", "Spoken", "Meaning"],
          rows: [
            ["则", "就 / 那么", "then; whereas"],
            ["且", "而且", "moreover"],
            ["亦", "也", "also"],
            ["皆 / 均", "都", "all"],
          ],
        },
        examples: [
          { zh: "北方干燥，南方则比较潮湿。", pinyin: "Běifāng gānzào, nánfāng zé bǐjiào cháoshī.", en: "The north is dry, whereas the south is rather humid." },
          { zh: "所有申请材料均须于月底前提交。", pinyin: "Suǒyǒu shēnqǐng cáiliào jūn xū yú yuèdǐ qián tíjiāo.", en: "All application materials must be submitted by the end of the month." },
        ],
      },
      {
        heading: "所 phrases, 有所 and 无所; 无非 and 而已",
        body: [
          "有所 (yǒusuǒ) + two-syllable verb means 'to some extent': 有所提高 (has improved somewhat), 有所不同 (differs somewhat). 无所 (wúsuǒ) + verb means 'nothing to …': 无所谓 (doesn't matter), 无所不知 (knows everything).",
          "无非 (wúfēi) and 不外乎 (búwàihū) mean 'nothing more than, simply': 他说的无非是想要钱 (all he's saying is that he wants money). 不过是…而已 (búguò shì … éryǐ) belittles: 'merely … that's all'.",
        ],
        examples: [
          { zh: "今年的销售情况比去年有所好转。", pinyin: "Jīnnián de xiāoshòu qíngkuàng bǐ qùnián yǒusuǒ hǎozhuǎn.", en: "Sales this year have improved somewhat on last year." },
          { zh: "他这么做，无非是想引起大家的注意。", pinyin: "Tā zhème zuò, wúfēi shì xiǎng yǐnqǐ dàjiā de zhùyì.", en: "He's only doing this to get people's attention." },
          { zh: "这不过是个小问题而已。", pinyin: "Zhè búguò shì ge xiǎo wèntí éryǐ.", en: "This is just a minor problem, that's all." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "则如果下雨，比赛取消。",
        right: "如遇下雨，则比赛取消。",
        rightPinyin: "Rú yù xià yǔ, zé bǐsài qǔxiāo.",
        why: "则 opens the result clause, after the condition. In formal writing the condition itself uses 如 or 若.",
      },
      {
        wrong: "大家皆都知道。",
        right: "人人皆知。",
        rightPinyin: "Rénrén jiē zhī.",
        why: "皆 and 都 mean the same; use one, and match register: written 人人皆知, or spoken 大家都知道.",
      },
      {
        wrong: "他的汉语有所提高很多。",
        right: "他的汉语提高了很多。",
        rightPinyin: "Tā de Hànyǔ tígāole hěn duō.",
        why: "有所 means 'somewhat', so it can't combine with 很多. Choose one degree.",
      },
    ],
    faqs: [
      {
        q: "Does 亦 sound pretentious?",
        a: "In speech, yes, except in set phrases (亦师亦友, both teacher and friend). In formal writing it's normal.",
      },
      {
        q: "How do I tell 而 'and' from 而 'but'?",
        a: "From the meaning of the two halves: similar ideas (简单而有效) mean 'and'; opposite ideas mean 'but, whereas'.",
      },
    ],
    related: ["classical-words-1-c2", "formal-conditions-c2", "register-and-written-words-c2"],
    lessons: ["zh-c2-yin-er", "zh-c2-er-full", "zh-c2-ze", "zh-c2-qie-yi-jie", "zh-c2-suo-youshuo", "zh-c2-wufei"],
  },
  // ------------------------------------------------------------------
  {
    slug: "formal-conditions-c2",
    title: "Formal Conditions and Purpose: 以便, 以免, 倘若, 纵然, 唯有 and 为…起见",
    description:
      "The written forms of if, even if, only if and so that: 以便 and 以免 (so that, so as not to), 倘若 / 若 / 假若 (should it be that), 纵然 / 纵使 / 虽说 (even though), 唯有…才 and 唯独 (only), 非…莫属, and 为…起见 / 出于…考虑 (for the sake of).",
    level: "C2",
    hsk: "HSK 7–9",
    intro: [
      "Laws, regulations, contracts and formal essays have their own set of conditional and purpose words. They're mostly upgrades of words you know: 若 for 如果, 纵然 for 即使, 以便 for 为了. Choosing the formal word keeps a document consistent in tone.",
    ],
    sections: [
      {
        heading: "以便 and 以免",
        body: [
          "以便 (yǐbiàn) means 'so that, in order to make it easier to'. It opens the second clause, after the action: 请留下电话，以便我们联系您 (please leave your number so that we can contact you).",
          "以免 (yǐmiǎn) means 'so as not to, lest': 请保管好行李，以免丢失 (please look after your luggage to avoid losing it). Its spoken relative is 免得. Unlike 为了, neither can open the sentence.",
        ],
        examples: [
          { zh: "请提前预约，以便我们安排时间。", pinyin: "Qǐng tíqián yùyuē, yǐbiàn wǒmen ānpái shíjiān.", en: "Please book in advance so that we can arrange a time." },
          { zh: "雨天路滑，请减速慢行，以免发生事故。", pinyin: "Yǔtiān lù huá, qǐng jiǎnsù màn xíng, yǐmiǎn fāshēng shìgù.", en: "Roads are slippery in the rain; please slow down to avoid accidents." },
        ],
      },
      {
        heading: "倘若 / 若 and 纵然 / 虽说",
        body: [
          "倘若 (tǎngruò), 若 (ruò), 如若 (rúruò) and 假若 (jiǎruò) are formal versions of 如果. 若 is the most common in regulations: 若有疑问，请致电客服. The main clause often takes 则 or 便.",
          "纵然 (zòngrán) and 纵使 (zòngshǐ) are literary versions of 即使, with 也. 虽说 (suīshuō) is a spoken-to-neutral 'although': 虽说是周末，他还是去了公司.",
        ],
        examples: [
          { zh: "倘若对方不同意，我们便另作安排。", pinyin: "Tǎngruò duìfāng bù tóngyì, wǒmen biàn lìng zuò ānpái.", en: "Should the other party not agree, we will make other arrangements." },
          { zh: "纵然困难重重，我们也不会放弃。", pinyin: "Zòngrán kùnnan chóngchóng, wǒmen yě bú huì fàngqì.", en: "However many difficulties there may be, we will not give up." },
        ],
      },
      {
        heading: "唯有…才, 唯独, 非…莫属 and 为…起见",
        body: [
          "唯有 (wéiyǒu) is the written 只有: 唯有 A，才 B (only by A can B). 唯独 (wéidú) means 'only, alone (as an exception)': 大家都同意，唯独他反对. 非 X 莫属 (fēi X mò shǔ) means 'it can only be X': 冠军非他莫属 (the title is bound to be his).",
          "为 (wèi) + adjective / noun + 起见 (qǐjiàn) means 'for the sake of': 为安全起见 (for safety's sake). 出于…考虑 (chūyú … kǎolǜ) means 'out of consideration for'.",
        ],
        examples: [
          { zh: "唯有坚持不懈，才能取得成功。", pinyin: "Wéiyǒu jiānchí búxiè, cái néng qǔdé chénggōng.", en: "Only by persevering can you succeed." },
          { zh: "为安全起见，请系好安全带。", pinyin: "Wèi ānquán qǐjiàn, qǐng jìhǎo ānquándài.", en: "For your safety, please fasten your seat belt." },
          { zh: "出于环保考虑，酒店不再提供一次性牙刷。", pinyin: "Chūyú huánbǎo kǎolǜ, jiǔdiàn bú zài tígōng yícìxìng yáshuā.", en: "For environmental reasons, the hotel no longer provides disposable toothbrushes." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "以便我们联系您，请留下电话。",
        right: "请留下电话，以便我们联系您。",
        rightPinyin: "Qǐng liúxià diànhuà, yǐbiàn wǒmen liánxì nín.",
        why: "以便 and 以免 introduce the second clause. To put purpose first, use 为了.",
      },
      {
        wrong: "为了安全起见，请系好安全带。",
        right: "为安全起见，请系好安全带。",
        rightPinyin: "Wèi ānquán qǐjiàn, qǐng jìhǎo ānquándài.",
        why: "The set frame is 为…起见. 为了…起见 is common in speech but considered a mixed construction in careful writing.",
      },
      {
        wrong: "唯有努力，就能成功。",
        right: "唯有努力，才能成功。",
        rightPinyin: "Wéiyǒu nǔlì, cái néng chénggōng.",
        why: "唯有 / 只有 pairs with 才. 就 belongs with 只要 (as long as).",
      },
    ],
    faqs: [
      {
        q: "What's the difference between 以免 and 免得?",
        a: "Meaning is the same; 以免 is written and 免得 is spoken.",
      },
      {
        q: "Is 若 used in speech?",
        a: "Rarely, except in fixed phrases like 若有所思 (lost in thought). Use 如果 or 要是.",
      },
    ],
    related: ["er-ze-qie-c2", "register-and-written-words-c2", "academic-argument-c2"],
    lessons: ["zh-c2-yibian", "zh-c2-tangruo", "zh-c2-zongran", "zh-c2-weiyou", "zh-c2-wei-qijian"],
  },
  // ------------------------------------------------------------------
  {
    slug: "rhetoric-c2",
    title: "Rhetoric: 比喻, 排比, 对偶, 夸张, 拟人 and Descriptive Adjectives",
    description:
      "The figures of speech every Chinese student learns by name: simile and metaphor (比喻; 仿佛, 如同, 犹如, 宛如), parallelism and antithesis (排比, 对偶), hyperbole (夸张), personification and metonymy (拟人, 借代), and vivid ABB and AABB adjectives.",
    level: "C2",
    hsk: "HSK 7–9",
    intro: [
      "Chinese schools teach rhetoric (修辞, xiūcí) explicitly, with names for each figure, and good writing is expected to use them. Many have close English equivalents; the difference lies in how much Chinese prizes balance and rhythm, which makes parallel structures far more common than in English prose.",
    ],
    sections: [
      {
        heading: "比喻: simile and metaphor",
        body: [
          "A simile (明喻) uses a comparison word: 像 (xiàng), 好像, 仿佛 (fǎngfú, as if), 如同 (rútóng, just like), 犹如 (yóurú) and 宛如 (wǎnrú), the last two literary. 好比 (hǎobǐ) means 'is like, can be compared to' and introduces an explanatory comparison. A metaphor (暗喻) says A 是 B directly: 时间就是金钱.",
          "The literary words usually come with a full comparison and often 一般 or 似的 at the end: 湖面犹如一面镜子 (the lake was like a mirror).",
        ],
        examples: [
          { zh: "月光洒在湖面上，仿佛铺了一层银子。", pinyin: "Yuèguāng sǎ zài húmiàn shang, fǎngfú pūle yì céng yínzi.", en: "Moonlight fell on the lake as if it had been spread with silver." },
          { zh: "学习好比逆水行舟，不进则退。", pinyin: "Xuéxí hǎobǐ nì shuǐ xíng zhōu, bú jìn zé tuì.", en: "Studying is like rowing upstream: if you don't advance, you fall back." },
        ],
      },
      {
        heading: "排比 and 对偶: parallelism and antithesis",
        body: [
          "排比 (páibǐ) is three or more clauses with the same structure, building momentum: common in speeches and essay conclusions. 对偶 (duì'ǒu) is two lines of equal length with matching grammar and contrasting or complementary meaning, the principle behind couplets (对联) and many proverbs.",
        ],
        examples: [
          { zh: "读书使人明智，读诗使人灵秀，读史使人深刻。", pinyin: "Dú shū shǐ rén míngzhì, dú shī shǐ rén língxiù, dú shǐ shǐ rén shēnkè.", en: "Reading makes us wise, poetry makes us sensitive, history makes us profound." },
          { zh: "海阔凭鱼跃，天高任鸟飞。", pinyin: "Hǎi kuò píng yú yuè, tiān gāo rèn niǎo fēi.", en: "The sea is wide for fish to leap; the sky is high for birds to fly." },
        ],
      },
      {
        heading: "夸张, 拟人 and 借代",
        body: [
          "夸张 (kuāzhāng) is hyperbole, overstating or understating: 白发三千丈 (white hair three thousand zhang long), 等了一万年 (waited forever). 拟人 (nǐrén) gives human qualities to things: 春风轻轻地抚摸着大地. 借代 (jièdài) names something by an associated feature, like English 'the crown' for the monarchy: 红领巾 (red scarves) for Young Pioneers.",
        ],
        examples: [
          { zh: "他的嗓门大得能把屋顶掀翻。", pinyin: "Tā de sǎngmén dà de néng bǎ wūdǐng xiānfān.", en: "His voice is loud enough to lift the roof off." },
          { zh: "小草从地下探出头来。", pinyin: "Xiǎo cǎo cóng dìxià tàn chū tóu lai.", en: "Little shoots of grass poked their heads out of the earth." },
        ],
      },
      {
        heading: "ABB and AABB adjectives",
        body: [
          "Descriptive writing uses reduplicated adjectives for vividness: ABB forms like 绿油油 (lǜyóuyóu, lush green), 热乎乎 (warm and cosy), 亮晶晶 (sparkling), and AABB forms like 干干净净, 高高兴兴. They already express a high degree, so they don't take 很, and they usually take 的 before a noun or at the end of a predicate.",
        ],
        examples: [
          { zh: "田里的麦子绿油油的。", pinyin: "Tián li de màizi lǜyóuyóu de.", en: "The wheat in the fields was lush and green." },
          { zh: "孩子们高高兴兴地去上学了。", pinyin: "Háizimen gāogāoxìngxìng de qù shàng xué le.", en: "The children set off happily for school." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "草地很绿油油的。",
        right: "草地绿油油的。",
        rightPinyin: "Cǎodì lǜyóuyóu de.",
        why: "ABB and AABB adjectives already express degree; 很 can't be added.",
      },
      {
        wrong: "他跑得犹如风。",
        right: "他跑得像风一样快。",
        rightPinyin: "Tā pǎo de xiàng fēng yíyàng kuài.",
        why: "犹如 is literary and wants a fuller, balanced image. In a plain sentence, use 像…一样.",
      },
      {
        wrong: "读书使人明智，读诗让人变得很灵秀，历史能使人深刻。",
        right: "读书使人明智，读诗使人灵秀，读史使人深刻。",
        rightPinyin: "Dú shū shǐ rén míngzhì, dú shī shǐ rén língxiù, dú shǐ shǐ rén shēnkè.",
        why: "Parallelism only works if the structures really match: same verb, same length, same shape.",
      },
    ],
    faqs: [
      {
        q: "Is parallelism overused in Chinese?",
        a: "By English standards, it's used a lot, and a Chinese reader expects it in speeches and essays. Over-using it in a casual piece still sounds forced.",
      },
      {
        q: "Are ABB forms fixed?",
        a: "Yes. Each adjective has its own ABB endings (绿油油, not 绿乎乎), so learn them as words.",
      },
    ],
    related: ["questions-tone-attitude-c2", "academic-argument-c2", "wenyan-and-chengyu-c2"],
    lessons: ["zh-c2-biyu", "zh-c2-paibi", "zh-c2-kuazhang", "zh-c2-niren", "zh-c2-youru", "zh-c2-senses"],
  },
  // ------------------------------------------------------------------
  {
    slug: "questions-tone-attitude-c2",
    title: "Questions, Tone and Attitude: 反问, 岂, 何尝, 莫非, 语气词 and 罢了",
    description:
      "How Chinese shows attitude: rhetorical questions (反问) with 难道, 岂, 何尝 and 莫非; the sentence-final particles 吧, 嘛, 呗, 啊 and 呢; 而已 and 罢了 (just, merely); and gentle contradiction with 不是…吗, 还不是 and 可不是.",
    level: "C2",
    hsk: "HSK 7–9",
    intro: [
      "Much of what Chinese speakers mean is carried by tone rather than content: a question that is really a statement, a particle that turns an instruction into a shrug. Misreading these leads to real misunderstandings, and using them well is one of the clearest signs of near-native command.",
    ],
    sections: [
      {
        heading: "反问: rhetorical questions",
        body: [
          "A rhetorical question (反问, fǎnwèn) asserts the opposite of its literal form: a positive question means a negative statement, and vice versa. 这不是很明显吗？ = 这很明显 (isn't it obvious? = it's obvious).",
          "Spoken: 难道…吗 (surely not …?), 怎么能…呢 (how could …?), 不是…吗. Written and literary: 岂 (qǐ, how could): 岂有此理 (outrageous!), 岂不是 (wouldn't that be…); 何尝 (hécháng, when has … ever): 我何尝不想去 (it's not as if I don't want to go); 莫非 (mòfēi, could it be that): 莫非他知道了？",
        ],
        examples: [
          { zh: "你这样做，岂不是让大家都为难吗？", pinyin: "Nǐ zhèyàng zuò, qǐ bú shì ràng dàjiā dōu wéinán ma?", en: "If you do that, won't you put everyone in a difficult position?" },
          { zh: "我何尝不想休息，可是工作做不完啊。", pinyin: "Wǒ hécháng bù xiǎng xiūxi, kěshì gōngzuò zuò bu wán a.", en: "It's not that I don't want a rest, but the work never ends." },
          { zh: "他一直不说话，莫非是生气了？", pinyin: "Tā yìzhí bù shuō huà, mòfēi shì shēng qì le?", en: "He hasn't said a word. Could he be angry?" },
        ],
      },
      {
        heading: "Sentence-final particles: 吧, 嘛, 呗, 啊, 呢",
        body: [
          "吧 (ba) softens: a suggestion, a guess or reluctant agreement. 嘛 (ma) says 'it's obvious', sometimes with mild impatience: 我早就说过嘛 (I told you so). 呗 (bei) is a shrug, 'that's all there is to it': 不会就学呗 (if you can't, just learn). 啊 (a) adds warmth or emphasis and changes sound after some vowels (呀, 哪, 哇). 呢 (ne) marks a continuing situation or invites an answer.",
        ],
        table: {
          headers: ["Particle", "Attitude", "Example"],
          rows: [
            ["吧", "suggestion, guess", "我们走吧"],
            ["嘛", "it's obvious", "这是我的嘛"],
            ["呗", "shrug, no big deal", "那就算了呗"],
            ["啊", "warmth, emphasis", "好漂亮啊"],
            ["呢", "ongoing; follow-up question", "他还在睡呢"],
          ],
        },
        examples: [
          { zh: "有话就直说嘛，别绕弯子。", pinyin: "Yǒu huà jiù zhí shuō ma, bié rào wānzi.", en: "If you've got something to say, just say it; don't beat about the bush." },
          { zh: "不想去就别去呗。", pinyin: "Bù xiǎng qù jiù bié qù bei.", en: "If you don't want to go, then just don't." },
        ],
      },
      {
        heading: "而已 and 罢了; 不是…吗, 还不是, 可不是",
        body: [
          "而已 (éryǐ) and 罢了 (bà le) at the end of a sentence mean 'just, merely, that's all', usually with 只是 or 不过 earlier: 我只是开个玩笑而已 (I was only joking). 而已 is a little more written.",
          "不是…吗 contradicts gently by reminding: 你不是说要来吗？ (didn't you say you'd come?). 还不是 means 'it's all because of, it's just': 还不是因为你 (it's all your fault). 可不是 (kěbúshì) or 可不是嘛 means 'exactly, you can say that again'.",
        ],
        examples: [
          { zh: "我只是随便问问而已。", pinyin: "Wǒ zhǐshì suíbiàn wènwen éryǐ.", en: "I was only asking, that's all." },
          { zh: "—今天真热！—可不是嘛！", pinyin: "— Jīntiān zhēn rè! — Kěbúshì ma!", en: "\"It's so hot today!\" \"You can say that again!\"" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "难道你不知道吗？ (asking for information)",
        right: "你不知道吗？",
        rightPinyin: "Nǐ bù zhīdào ma?",
        why: "难道 makes the question rhetorical and accusing ('surely you know!'). For a genuine question, drop it.",
      },
      {
        wrong: "老板，明天休息呗。 (to your boss)",
        right: "老板，明天可以休息吗？",
        rightPinyin: "Lǎobǎn, míngtiān kěyǐ xiūxi ma?",
        why: "呗 is casual and offhand. With a superior, ask politely.",
      },
      {
        wrong: "我只是开玩笑而已罢了。",
        right: "我只是开玩笑而已。",
        rightPinyin: "Wǒ zhǐshì kāi wánxiào éryǐ.",
        why: "而已 and 罢了 mean the same; use one.",
      },
    ],
    faqs: [
      {
        q: "Is 嘛 rude?",
        a: "Not inherently, but it can sound impatient or childish depending on tone. It's warm between friends and best avoided with people you need to be formal with.",
      },
      {
        q: "Why is 我何尝不想 positive?",
        a: "何尝 asks 'when have I ever not wanted to?', which asserts 'of course I want to'. Rhetorical questions flip the polarity.",
      },
    ],
    related: ["rhetoric-c2", "classical-words-1-c2"],
    lessons: ["zh-c2-fanwen", "zh-c2-yuqici", "zh-c2-qi-hechang", "zh-c2-eryi", "zh-c2-attitude", "zh-c2-bushi-ma"],
  },
  // ------------------------------------------------------------------
  {
    slug: "register-and-written-words-c2",
    title: "Register: Spoken and Written Words, Officialese, 致使, Verb + 于 and New Words",
    description:
      "How Chinese changes between registers: spoken and written pairs (买 and 购买), single-character written words (购, 需, 获, 均, 仍), official notices (兹, 特此, 届时), cause verbs by register (致使, 导致, 引发, 促成), verb + 于 compounds (有助于, 致力于, 源于), and how new words and abbreviations are made.",
    level: "C2",
    hsk: "HSK 7–9",
    intro: [
      "At C2 the question is rarely 'is this grammatical?' and usually 'does this fit?'. Chinese has a wide gap between spoken (口语) and written (书面语) vocabulary, and a third, even more formal register in official documents (公文). Mixing them is the commonest flaw in advanced learners' writing.",
    ],
    sections: [
      {
        heading: "Spoken and written pairs",
        body: [
          "Many everyday verbs have a two-character written counterpart: 买 / 购买 (buy), 看 / 观看 (watch), 帮 / 帮助 (help), 用 / 使用 (use), 找 / 寻找 (look for). Written prose also uses single classical characters inside fixed patterns: 购 (buy), 需 (need), 须 (must), 获 (obtain), 均 (all), 仍 (still), 甚 (very): 需提前预约, 获一等奖, 甚少.",
          "Two-character written verbs often can't take a one-character object and vice versa: 购买商品 but 买东西.",
        ],
        table: {
          headers: ["Spoken", "Written", "Meaning"],
          rows: [
            ["买", "购买 / 购", "buy"],
            ["要", "需要 / 需", "need"],
            ["得", "获得 / 获", "obtain, win"],
            ["都", "均", "all"],
            ["还", "仍 / 仍然", "still"],
            ["很", "甚", "very"],
          ],
        },
        examples: [
          { zh: "游客可在网上购票。", pinyin: "Yóukè kě zài wǎngshàng gòu piào.", en: "Visitors can buy tickets online." },
          { zh: "参观需提前三天预约。", pinyin: "Cānguān xū tíqián sān tiān yùyuē.", en: "Visits must be booked three days in advance." },
        ],
      },
      {
        heading: "Official notices: 兹, 特此, 届时",
        body: [
          "Official documents (公文, gōngwén) have fixed openings and closings: 兹 (zī, hereby, now) opens: 兹定于… (it has been decided that…). 特此通知 (tècǐ tōngzhī, notice is hereby given) closes. 届时 (jièshí, at that time) refers to a scheduled event. 拟 (nǐ, plan to) and 系 (xì, is) appear in announcements: 本公司拟于下月… .",
        ],
        examples: [
          { zh: "兹定于五月十日召开全体员工大会，届时请准时出席。特此通知。", pinyin: "Zī dìng yú wǔ yuè shí rì zhàokāi quántǐ yuángōng dàhuì, jièshí qǐng zhǔnshí chūxí. Tècǐ tōngzhī.", en: "A general staff meeting will be held on 10 May. Please attend punctually. Notice is hereby given." },
        ],
      },
      {
        heading: "Cause verbs and verb + 于",
        body: [
          "Cause verbs differ in register and colouring. 导致 (dǎozhì, lead to) and 致使 (zhìshǐ, cause) usually introduce bad results; 引发 (yǐnfā, trigger) is for events and debates; 促成 (cùchéng, bring about) and 促进 (cùjìn, promote) are positive; 造成 (zàochéng, cause) is mostly negative.",
          "Verb + 于 compounds are compact written verbs: 有助于 (helpful for), 致力于 (devoted to), 得益于 (thanks to), 源于 (originate from), 在于 (lie in), 有利于 (beneficial to). The object follows directly.",
        ],
        examples: [
          { zh: "长期熬夜会导致免疫力下降。", pinyin: "Chángqī áo yè huì dǎozhì miǎnyìlì xiàjiàng.", en: "Staying up late for long periods leads to weaker immunity." },
          { zh: "这项研究有助于我们了解气候变化。", pinyin: "Zhè xiàng yánjiū yǒuzhùyú wǒmen liǎojiě qìhòu biànhuà.", en: "This research helps us understand climate change." },
          { zh: "该组织多年来致力于保护野生动物。", pinyin: "Gāi zǔzhī duō nián lái zhìlìyú bǎohù yěshēng dòngwù.", en: "The organisation has been dedicated to protecting wildlife for many years." },
        ],
      },
      {
        heading: "New words and abbreviations",
        body: [
          "New words are made by compounding existing morphemes (网 + 购 = 网购, online shopping), adding productive affixes (-化 -ize, -性 -ness, 超- super-, -族 tribe, as in 上班族, office workers), and abbreviating long names by taking key characters: 高速铁路 → 高铁, 北京大学 → 北大, 环境保护 → 环保. Numerical slogans compress policies: 双减 (the 'double reduction' of homework and tutoring).",
        ],
        examples: [
          { zh: "坐高铁从北京到上海只要四个多小时。", pinyin: "Zuò gāotiě cóng Běijīng dào Shànghǎi zhǐ yào sì ge duō xiǎoshí.", en: "The high-speed train from Beijing to Shanghai takes just over four hours." },
          { zh: "现在越来越多的人选择网购。", pinyin: "Xiànzài yuè lái yuè duō de rén xuǎnzé wǎnggòu.", en: "More and more people now choose to shop online." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "我昨天去超市购买了一点儿东西。",
        right: "我昨天去超市买了点儿东西。",
        rightPinyin: "Wǒ zuótiān qù chāoshì mǎile diǎnr dōngxi.",
        why: "购买 is written style; with spoken words like 一点儿东西 it clashes. Keep a sentence in one register.",
      },
      {
        wrong: "他的努力导致了成功。",
        right: "他的努力促成了这次成功。",
        rightPinyin: "Tā de nǔlì cùchéngle zhè cì chénggōng.",
        why: "导致 and 致使 carry a negative colouring. For a good result, use 促成, 带来 or 使…成功.",
      },
      {
        wrong: "运动有助于对健康。",
        right: "运动有助于健康。",
        rightPinyin: "Yùndòng yǒuzhùyú jiànkāng.",
        why: "于 already plays the role of the preposition; the object follows directly.",
      },
    ],
    faqs: [
      {
        q: "How can I tell which register a word belongs to?",
        a: "Single classical characters (需, 获, 均) and formal two-character verbs (购买, 使用) are written; monosyllabic everyday verbs (买, 用) are spoken. A good learner's dictionary marks 〈书〉 for written and 〈口〉 for spoken.",
      },
      {
        q: "Is 系 the same as 是?",
        a: "In official and legal writing, yes: 系 (xì) means 'is'. 此事系谣言 (this is a rumour).",
      },
    ],
    related: ["er-ze-qie-c2", "academic-argument-c2", "regional-mandarin-c2"],
    lessons: ["zh-c2-register", "zh-c2-monosyllabic", "zh-c2-officialese", "zh-c2-word-formation", "zh-c2-abbreviations", "zh-c2-corporate", "zh-c2-zhishi", "zh-c2-verb-yu"],
  },
  // ------------------------------------------------------------------
  {
    slug: "academic-argument-c2",
    title: "Arguing in Writing: 与其说…不如说, 诚然, 究其原因, 综上所述 and Hedging",
    description:
      "The grammar of academic and argumentative writing: reframing with 与其说…不如说, conceding with 诚然 and 不可否认, analysing causes (究其原因, 归根到底), hedging and certainty (或许, 有待, 显然, 毋庸置疑), defining terms, rebutting and concluding (由此可见, 综上所述).",
    level: "C2",
    hsk: "HSK 7–9",
    intro: [
      "The Chinese argumentative essay (议论文, yìlùnwén) has a recognisable shape: a thesis (论点), evidence (论据) and a conclusion, held together by a set of formulas. Knowing those formulas lets you read academic papers and editorials quickly and write a convincing argument of your own.",
    ],
    sections: [
      {
        heading: "Reframing and conceding",
        body: [
          "与其说 A，不如说 B (yǔqí shuō A, bùrú shuō B) means 'it's less A than B, it would be truer to say B': 与其说他是老师，不如说他是朋友. Unlike 与其…不如 (a choice between actions, C1), this one is about how to describe something; you met it briefly in the C1 与其 lesson, and at C2 it becomes a standard tool for correcting a label in an argument.",
          "诚然 (chéngrán) concedes a point before countering it, like a formal 固然: 诚然，…，但是…. 不可否认 (bùkě fǒurèn, it's undeniable that) and 尽管如此 (jǐnguǎn rúcǐ, even so) serve the same structure.",
        ],
        examples: [
          { zh: "与其说这是一次失败，不如说这是一次宝贵的经验。", pinyin: "Yǔqí shuō zhè shì yí cì shībài, bùrú shuō zhè shì yí cì bǎoguì de jīngyàn.", en: "It's less a failure than a valuable experience." },
          { zh: "诚然，科技给生活带来了便利，但也带来了新的问题。", pinyin: "Chéngrán, kējì gěi shēnghuó dàiláile biànlì, dàn yě dàiláile xīn de wèntí.", en: "Technology has, admittedly, made life more convenient, but it has also brought new problems." },
        ],
      },
      {
        heading: "Causes, definitions and hedging",
        body: [
          "究其原因 (jiū qí yuányīn, if we look into the reasons) and 归根到底 (guī gēn dào dǐ, in the final analysis) introduce causal analysis. 所谓 A，是指 B (what is called A refers to B), 简称 (abbreviated as) and 定义为 (defined as) introduce terms.",
          "Hedging: 或许 (perhaps), 在一定程度上 (to a certain extent), 有待 (yǒudài, remains to be): 有待进一步研究 (requires further research). Certainty: 显然 (clearly), 毋庸置疑 (wúyōng zhìyí, beyond doubt). Citing: 据…研究, 正如…所言 (as … said).",
        ],
        examples: [
          { zh: "究其原因，主要是缺乏有效的管理。", pinyin: "Jiū qí yuányīn, zhǔyào shì quēfá yǒuxiào de guǎnlǐ.", en: "If we look into the reasons, it is mainly a lack of effective management." },
          { zh: "这一结论在一定程度上仍有待验证。", pinyin: "Zhè yì jiélùn zài yídìng chéngdù shang réng yǒudài yànzhèng.", en: "To some extent, this conclusion still remains to be verified." },
          { zh: "正如鲁迅所说，地上本没有路，走的人多了，也便成了路。", pinyin: "Zhèngrú Lǔ Xùn suǒ shuō, dì shang běn méiyǒu lù, zǒu de rén duō le, yě biàn chéngle lù.", en: "As Lu Xun said, there was no road on the ground to begin with; when enough people walk a way, it becomes a road." },
        ],
      },
      {
        heading: "Rebutting and concluding",
        body: [
          "To disagree politely in writing: 此说法值得商榷 (this view is open to debate), 这种观点忽略了… (this view overlooks…). Avoid blunt 这是错的 in academic prose.",
          "To conclude: 由此可见 (from this it can be seen), 综上所述 (zōngshàng suǒ shù, to sum up the above), 总而言之 (in short), 因此我们认为… (we therefore conclude…). 综上所述 belongs at the start of the conclusion, after the evidence: it sums up what has already been said.",
        ],
        examples: [
          { zh: "综上所述，保护环境需要每个人的参与。", pinyin: "Zōngshàng suǒ shù, bǎohù huánjìng xūyào měi ge rén de cānyù.", en: "To sum up, protecting the environment requires everyone's participation." },
          { zh: "笔者认为，这一说法值得商榷。", pinyin: "Bǐzhě rènwéi, zhè yì shuōfǎ zhíde shāngquè.", en: "The present writer believes this claim is open to question." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "与其说他是老师，不如他是朋友。",
        right: "与其说他是老师，不如说他是朋友。",
        rightPinyin: "Yǔqí shuō tā shì lǎoshī, bùrú shuō tā shì péngyou.",
        why: "Both halves take 说: 与其说…不如说.",
      },
      {
        wrong: "综上所述，我先谈谈第一个原因。",
        right: "首先，我想谈谈第一个原因。",
        rightPinyin: "Shǒuxiān, wǒ xiǎng tántan dì yī ge yuányīn.",
        why: "综上所述 means 'to sum up the above' and belongs at the end. Use 首先 to start.",
      },
      {
        wrong: "我认为毋庸置疑这可能是对的。",
        right: "这在一定程度上可能是对的。",
        rightPinyin: "Zhè zài yídìng chéngdù shang kěnéng shì duì de.",
        why: "毋庸置疑 (beyond doubt) and 可能 (possibly) contradict each other. Hedge or assert, not both.",
      },
    ],
    faqs: [
      {
        q: "Why do Chinese writers call themselves 笔者?",
        a: "笔者 (the writer) is a modest, impersonal 'I' in academic and journalistic writing, much like 'the present author'.",
      },
      {
        q: "Is the Chinese essay structure different from the English one?",
        a: "The core (thesis, evidence, conclusion) is the same. Chinese essays tend to open with a broader framing, quote proverbs or classical lines as evidence, and close with a call to action.",
      },
    ],
    related: ["register-and-written-words-c2", "formal-conditions-c2", "rhetoric-c2"],
    lessons: ["zh-c2-abstract", "zh-c2-definitions", "zh-c2-hedging", "zh-c2-citing", "zh-c2-charts", "zh-c2-essay", "zh-c2-yuqishuo", "zh-c2-chengran", "zh-c2-rebuttal", "zh-c2-cause-analysis", "zh-c2-conclusions"],
  },
  // ------------------------------------------------------------------
  {
    slug: "regional-mandarin-c2",
    title: "Regional Mandarin: Southern and Taiwan Grammar and Colloquial Frames",
    description:
      "How Mandarin grammar varies: southern features (有 + verb, 先 at the end, 给 for 让), Taiwan Mandarin usage (有没有 + verb, 会 for adjectives, different words), and colloquial frames like 想来想去, 东找西找 and 不吃白不吃.",
    level: "C2",
    hsk: "HSK 7–9",
    intro: [
      "The course teaches mainland standard Mandarin (普通话), but you'll hear many varieties. Speakers from the south and from Taiwan carry grammar from their local languages into Mandarin, and some of it has spread widely through media. This guide helps you understand these forms. In your own Mandarin, stick to the standard unless you live in one of these regions.",
    ],
    sections: [
      {
        heading: "Southern Mandarin features",
        body: [
          "有 + verb for a completed action: 我有去过 (I did go) instead of 我去过. 先 at the end of a clause, from Cantonese: 你走先 (you go first) for 你先走. 给 for causative 让 'let', as in Cantonese and Min: 别给他跑了 (don't let him get away); 给 as a passive marker (钱包给偷了), by contrast, is ordinary colloquial Mandarin everywhere. 好 + adjective for a plain 'very' in ordinary statements (今天好开心, 这个好好吃), where northern speech prefers 很 or 真 and keeps 好 mostly for exclamations (好漂亮啊！). Speakers also often merge zh / z, ch / c, sh / s and n / l.",
        ],
        table: {
          headers: ["Southern usage", "Standard Mandarin", "Meaning"],
          rows: [
            ["我有吃过", "我吃过", "I've eaten it"],
            ["你走先", "你先走", "you go first"],
            ["我吃多一碗", "我多吃一碗", "I'll have another bowl"],
          ],
        },
        examples: [
          { zh: "你先走，我马上就来。", pinyin: "Nǐ xiān zǒu, wǒ mǎshàng jiù lái.", en: "You go first; I'll be right there." },
        ],
      },
      {
        heading: "Taiwan Mandarin",
        body: [
          "Taiwan Mandarin (国语 / 國語) is a standard of its own, written in traditional characters. Grammar points include 有没有 + verb as a past question (你有没有去？ = 你去了没有？), 会 with adjectives meaning 'is' (会不会冷？ = 冷不冷？), and less use of the neutral tone and erhua. Vocabulary also differs: 计程车 vs 出租车 (taxi), 捷运 vs 地铁 (metro), 软体 vs 软件 (software).",
        ],
        examples: [
          { zh: "你昨天去看电影了没有？", pinyin: "Nǐ zuótiān qù kàn diànyǐng le méiyǒu?", en: "Did you go and see the film yesterday?" },
        ],
      },
      {
        heading: "Colloquial frames",
        body: [
          "Spoken Mandarin has productive frames with repeated or paired verbs. V来V去 (想来想去, after thinking it over and over): repeated back-and-forth action, often getting nowhere or leading up to a conclusion (想来想去，还是决定不去). 东 V 西 V (东找西找, search all over): scattered action. 不 V 白不 V (不吃白不吃, it's free, so you'd be a fool not to): taking advantage of something free. 越 V 越… and 一 V 就… you already know.",
        ],
        examples: [
          { zh: "我想来想去，还是决定不去了。", pinyin: "Wǒ xiǎng lái xiǎng qù, háishi juédìng bú qù le.", en: "After thinking it over and over, I decided not to go after all." },
          { zh: "反正是免费的，不吃白不吃。", pinyin: "Fǎnzhèng shì miǎnfèi de, bù chī bái bù chī.", en: "It's free anyway, so we might as well eat." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "我有看过这部电影。 (in a standard Mandarin exam)",
        right: "我看过这部电影。",
        rightPinyin: "Wǒ kànguo zhè bù diànyǐng.",
        why: "有 + verb is southern and Taiwan usage. In standard mainland Mandarin, 过 or 了 alone marks the experience or completion.",
      },
      {
        wrong: "我们走先吧。",
        right: "我们先走吧。",
        rightPinyin: "Wǒmen xiān zǒu ba.",
        why: "Final 先 comes from Cantonese. Standard Mandarin puts 先 before the verb.",
      },
      {
        wrong: "反正是免费的，不吃不白吃。",
        right: "反正是免费的，不吃白不吃。",
        rightPinyin: "Fǎnzhèng shì miǎnfèi de, bù chī bái bù chī.",
        why: "The frame is 不 V 白不 V: 白 ('for nothing, a wasted chance') sits right before the second 不, so it reads 'not eating = wasting the chance'. Moving 白 after 不 breaks the fixed frame, a common slip because English 'you'd be a fool not to' has no matching word order.",
      },
    ],
    faqs: [
      {
        q: "Is Taiwan Mandarin 'wrong'?",
        a: "No. It's a standard variety with its own norms. The course teaches the mainland standard, so exams and exercises here follow that.",
      },
      {
        q: "Should I learn traditional characters?",
        a: "If you plan to read material from Taiwan, Hong Kong or older texts, learning to recognise them is worthwhile. Most traditional forms are predictable from the simplified ones.",
      },
    ],
    related: ["register-and-written-words-c2", "questions-tone-attitude-c2"],
    lessons: ["zh-c2-colloquial-frames", "zh-c2-southern-mandarin", "zh-c2-taiwan-mandarin"],
  },
  // ------------------------------------------------------------------
  {
    slug: "wenyan-and-chengyu-c2",
    title: "Reading 文言 and How 成语 Work",
    description:
      "The basics of Classical Chinese grammar (one-character words, omission, inverted word order, nouns as verbs) and how four-character idioms are built and used in a modern sentence.",
    level: "C2",
    hsk: "HSK 7–9",
    intro: [
      "Classical Chinese (文言) is not a different language, but it works on different principles: almost every word is one character, subjects and objects are freely dropped, and a word's part of speech depends on its position. Chengyu (成语) are fossils of that grammar, so understanding a little 文言 makes thousands of idioms transparent.",
    ],
    sections: [
      {
        heading: "Basic 文言 grammar",
        body: [
          "One character, one word: 学 (to study), 习 (to practise), 知 (to know). Modern two-character words often split back into their classical halves: 学而时习之 (study and practise it regularly).",
          "Omission: subjects, objects and even verbs are left out when clear from context. Inversion: question-word objects go before the verb (何以 = 以何, 'by what means'), and pronoun objects in negative sentences can too (不吾知 = 不知吾, 'do not know me'). Word-class shifts: a noun can act as a verb, an adjective as a causative: 春风又绿江南岸 (the spring wind has greened the southern shore again).",
        ],
        examples: [
          { zh: "温故而知新，可以为师矣。", pinyin: "Wēn gù ér zhī xīn, kěyǐ wéi shī yǐ.", en: "Reviewing the old to understand the new: one who can do this may be a teacher." },
          { zh: "己所不欲，勿施于人。", pinyin: "Jǐ suǒ bú yù, wù shī yú rén.", en: "Do not do to others what you would not want done to yourself." },
        ],
      },
      {
        heading: "How 成语 are built",
        body: [
          "Most chengyu have four characters and an internal grammar: subject + predicate (胸有成竹, have a plan ready), two parallel halves (山清水秀, green hills and clear waters), verb + object (画蛇添足, add legs to a snake). Many come from a story: 守株待兔 (wait by the stump for a hare) means relying on luck rather than effort.",
          "A chengyu takes the grammatical role of its type: one describing a state works like an adjective (他做事总是马马虎虎), one describing an action works like a verb phrase. Many can't take an object, and their colouring (褒义 praise or 贬义 criticism) must fit the context.",
        ],
        table: {
          headers: ["Structure", "Chengyu", "Meaning"],
          rows: [
            ["parallel", "山清水秀", "beautiful scenery"],
            ["verb + object", "画蛇添足", "overdo it, spoil by adding"],
            ["subject + predicate", "胸有成竹", "have a well-thought-out plan"],
            ["story", "守株待兔", "wait for luck instead of working"],
          ],
        },
        examples: [
          { zh: "这篇文章已经很好了，再加这段就是画蛇添足。", pinyin: "Zhè piān wénzhāng yǐjīng hěn hǎo le, zài jiā zhè duàn jiù shì huà shé tiān zú.", en: "The article is already good; adding this paragraph would be overdoing it." },
          { zh: "对这次比赛，他早已胸有成竹。", pinyin: "Duì zhè cì bǐsài, tā zǎo yǐ xiōng yǒu chéng zhú.", en: "He went into the competition with a well-prepared plan." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "他画蛇添足了这篇文章。",
        right: "他修改这篇文章，结果画蛇添足了。",
        rightPinyin: "Tā xiūgǎi zhè piān wénzhāng, jiéguǒ huà shé tiān zú le.",
        why: "画蛇添足 already contains a verb and object, so it can't take another object.",
      },
      {
        wrong: "他的成绩非常好，真是守株待兔。",
        right: "他的成绩非常好，真是功夫不负有心人。",
        rightPinyin: "Tā de chéngjì fēicháng hǎo, zhēn shì gōngfu bú fù yǒuxīnrén.",
        why: "守株待兔 is critical (relying on luck). Praising effort needs a positive expression.",
      },
      {
        wrong: "这里很山清水秀。",
        right: "这里山清水秀。",
        rightPinyin: "Zhèlǐ shān qīng shuǐ xiù.",
        why: "A descriptive chengyu already carries degree, so it doesn't take 很.",
      },
    ],
    faqs: [
      {
        q: "Do I need to read whole classical texts?",
        a: "Not for daily life. But a little 文言 helps you read chengyu, proverbs, signs at historic sites and quotations in essays and speeches.",
      },
      {
        q: "Are all four-character phrases chengyu?",
        a: "No. Chinese loves four-character rhythm, and many set phrases (一路平安, 身体健康) are fixed expressions rather than classical chengyu.",
      },
    ],
    related: ["classical-words-1-c2", "classical-words-2-c2", "rhetoric-c2"],
    lessons: ["zh-c2-chengyu-structure", "zh-c2-classics", "zh-c2-wenyan-basics", "zh-c2-fables-wenyan"],
  },
];
