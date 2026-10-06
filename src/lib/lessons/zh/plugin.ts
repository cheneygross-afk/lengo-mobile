// Synced from cheneygross-afk/lengo:src/lib/lessons/zh/plugin.ts by scripts/sync-content.mjs -- edit it there, not here.
// The Chinese course's plugin for the curriculum engine
// (src/lib/curriculum): grading, normalisation, the form detectors behind
// the concept-leak check, and pinyin/example checks.

import type { Exercise, Lesson } from "../types";
import type { CoursePlugin, FormDetector } from "../../curriculum/types";
import { cleanHanzi, gradeChineseAnswer, hasHanzi, pinyinParts } from "./pinyin";
import { pinyinMarkProblems } from "./pinyin";

// Runs of characters (with Chinese punctuation), joined with a space: the
// only text the detectors look at, so English framing never matches.
const HAN_RUN = /[㐀-䶿一-鿿][㐀-䶿一-鿿，。？！、：；…“”]*/g;

export function chineseText(text: string): string {
  return (text.match(HAN_RUN) ?? []).join(" ");
}

const re = (concept: string, pattern: RegExp, label: string, severity: FormDetector["severity"] = "error"): FormDetector => ({
  concept: `zh.${concept}`,
  test: (t) => pattern.test(t),
  severity,
  label,
});

// Removes words whose characters would otherwise look like a grammar
// form: 现在 (now) contains 在, 没关系 contains 没, 哪儿 contains 哪 ...
function without(t: string, words: string[]): string {
  let out = t;
  for (const w of words) out = out.split(w).join(" ");
  return out;
}

export const ZH_DETECTORS: FormDetector[] = [
  re("grammar.ma-questions", /吗/, "吗"),
  re("grammar.ne-questions", /呢/, "呢"),
  re("grammar.ye-dou", /[也都]/, "也/都"),
  { concept: "zh.grammar.adjective-predicates", test: (t) => /很/.test(t), severity: "error", label: "很 + adjective" },
  re("grammar.de-possessive", /的/, "的"),
  { concept: "zh.grammar.you-meiyou", test: (t) => /有/.test(without(t, ["没关系"])), severity: "error", label: "有/没有" },
  { concept: "zh.grammar.mei-past", test: (t) => /没(?=[\u4e00-\u9fff])(?!有|关系)/.test(t) || /没有[去来吃喝看买说做买回坐写读学]/.test(t), severity: "error", label: "没 + verb" },
  re("grammar.hai-mei", /还没/, "还没"),
  re("grammar.tai-le", /太[^，。？！ ]{1,4}了/, "太…了"),
  {
    concept: "zh.grammar.le-completed",
    // After a verb (a 了 on its own is a word being talked about, e.g. the
    // answer to a 太…___ blank).
    test: (t) => /[一-鿿]了/.test(t.replace(/太[^，。？！ ]{1,4}了/g, " ").replace(/[下]雨了|[下]雪了/g, " ")),
    severity: "error",
    label: "了",
  },
  re("grammar.le-new-situation", /下[雨雪]了/, "下雨了 (new situation)"),
  re("grammar.ba-suggestion", /吧/, "吧"),
  { concept: "zh.grammar.zai-location", test: (t) => /在/.test(without(t, ["现在", "正在"])), severity: "error", label: "在" },
  re("grammar.nar-where", /哪儿|哪里/, "哪儿/哪里"),
  { concept: "zh.grammar.demonstratives", test: (t) => /[这那哪]/.test(without(t, ["哪儿", "哪里", "那儿", "这儿", "哪国"])), severity: "error", label: "这/那/哪" },
  re("grammar.measure-words", /[一两二三四五六七八九十几这那哪每][个本杯口只碗]/, "number + measure word"),
  re("grammar.ji", /几/, "几"),
  re("grammar.duoshao", /多少/, "多少"),
  re("grammar.er-liang", /两/, "两"),
  re("grammar.shei", /谁/, "谁"),
  re("grammar.he-and", /和/, "和"),
  re("grammar.hui-neng", /[会能]/, "会/能"),
  re("grammar.xiang-yao", /[想要]/, "想/要"),
  re("grammar.xihuan", /喜欢/, "喜欢"),
  re("grammar.question-words", /什么时候|怎么/, "什么时候/怎么"),
  re("grammar.a-not-a", /([忙好是去有要喜对])不\1/, "A-not-A"),
  re("grammar.position-words", /旁边|前面|后面|[子包家]里|子[上下]/, "position word"),
  re("grammar.transport", /坐(出租车|飞机|火车|地铁|公共汽车)/, "坐 + vehicle"),
  { concept: "zh.vocab.clock-time", test: (t) => /[一二两三四五六七八九十几]点|点半/.test(without(t, ["一点儿", "一点"])), severity: "error", label: "clock time" },
  re("vocab.dates", /星期|[一二三四五六七八九十]月|[一二三四五六七八九十]号|几号/, "dates/weekdays"),
  // A2 and later (taught later; any use before then is a leak).
  re("grammar.guo-experience", /[去吃看听来做学过]过/, "verb + 过", "warning"),
  re("grammar.zai-progressive", /正在|在[^。？！，]{1,6}呢/, "在/正在…呢"),
  re("grammar.bi-comparison", /比/, "比"),
  // Not 觉得/记得/懂得 (think, remember, understand), which only contain 得.
  { concept: "zh.grammar.de-complement", test: (t) => /得(很|太|非常|不|好|快|慢)/.test(without(t, ["觉得", "记得", "懂得"])), severity: "error", label: "得 complement" },
  re("grammar.result-complements", /[看听做写吃学找]完|听懂|看懂|找到|写错|说错/, "result complement", "warning"),
  re("grammar.yinwei-suoyi", /因为|所以/, "因为/所以"),
  re("grammar.suiran-danshi", /虽然|但是/, "虽然/但是"),
  re("grammar.yijing", /已经/, "已经"),
  re("grammar.jiu-cai", /[就才]/, "就/才", "warning"),
  re("grammar.yao-le", /[快就]?要[^，。？！ ]{1,4}了/, "要…了", "warning"),
  re("grammar.cong-dao", /从/, "从"),
  re("grammar.gei-for", /给/, "给", "warning"),
  re("grammar.rang-causative", /让/, "让"),
  re("grammar.ruguo", /如果|要是/, "如果"),
  re("grammar.haishi-huozhe", /还是|或者/, "还是/或者"),
  re("grammar.yibian", /一边/, "一边…一边"),
  re("grammar.zhe-state", /[着]/, "着", "warning"),
  // Not the measure word: 一把椅子 (a chair), 两把伞.
  { concept: "zh.grammar.ba-construction", test: (t) => /把/.test(t.replace(/[一两二三四五六七八九十几这那哪每]把/g, " ")), severity: "error", label: "把" },
  re("grammar.yue-yue", /越.{1,6}越/, "越…越"),
  re("grammar.meiyou-comparison", /没有[^，。？！ ]{1,6}[那这]么/, "没有…那么"),
  { concept: "zh.grammar.di-adverbial", test: (t) => /[一-鿿]地(?=[说走跑看写学做吃喝唱叫笑开])/.test(without(t, ["地铁", "地方", "地图", "地址"])), severity: "error", label: "adverb + 地" },
  re("grammar.duration", /小时|分钟/, "duration (小时/分钟)"),
  re("grammar.yiqian-yihou", /以前|以后|的时候/, "以前/以后/的时候"),
  re("grammar.yinggai-keyi", /应该/, "应该"),
  re("function.phone", /喂|打电话/, "喂/打电话"),
  re("function.directions", /往[左右前后东西南北]|[左右]拐|一直走/, "directions"),
  re("grammar.bei-passive", /被/, "被"),
  // B1
  re("grammar.zui-bijiao", /最(?!后|近|初)|比较/, "最/比较"),
  re("grammar.juede-renwei", /觉得|认为/, "觉得/认为"),
  // 多长 (时间) and 多久 belong to A2's duration lesson.
  re("grammar.duo-adj", /多(大|远|高|重)/, "多 + adjective"),
  re("grammar.youyou", /又[^，。？！ ]{1,4}又/, "又…又"),
  re("grammar.dui-guanyu", /感兴趣|有兴趣|关于|对于/, "对…感兴趣/关于"),
  re("grammar.shi-de", /是(昨天|今天|去年|上个|什么时候|怎么|坐|跟|在|从|一个人)[^。？！，]{0,8}的/, "是…的"),
  re("grammar.potential-complements", /[看听找买吃做写学睡回进出拿走]([得不])(懂|到|完|见|动|起|下|着)/, "potential complement"),
  re("grammar.qilai", /起来|想起/, "起来"),
  { concept: "zh.grammar.yi-jiu", test: (t) => /一[^，。？！ 一]{1,6}就/.test(without(t, ["一会儿", "一下"])), severity: "warning", label: "一…就" },
  re("grammar.gang", /刚/, "刚/刚才", "warning"),
  { concept: "zh.grammar.you-zai", test: (t) => /[又再](来|去|说|做|吃|买|看|写|试|问)/.test(without(t, ["再见"])), severity: "warning", label: "又/再 again" },
  re("grammar.ba-cheng", /把[^，。？！ ]{1,8}(成|到)[^了]/, "把…成/到", "warning"),
  re("grammar.budan-erqie", /不但|不仅|而且/, "不但…而且"),
  re("grammar.chule-yiwai", /除了/, "除了"),
  re("grammar.lian-dou", /连[^，。？！ ]{1,8}[都也]/, "连…都"),
  re("grammar.zhiyao-jiu", /只要/, "只要"),
  re("grammar.zhiyou-cai", /只有[^，。？！ ]{0,10}才|只有[^，。？！]{1,10}，[^。？！]{0,8}才/, "只有…才"),
  re("grammar.indefinite-question-words", /(什么|谁|哪儿|哪里|怎么)(都|也)/, "什么都/谁都"),
  re("function.sequencing", /先[^，。？！]{1,10}，?然后/, "先…然后"),
  // B2
  re("grammar.jishi-ye", /即使|即便|哪怕/, "即使…也"),
  re("grammar.buguan-dou", /不管|无论/, "不管/无论"),
  re("grammar.jiran-jiu", /既然/, "既然"),
  re("grammar.fouze", /否则|不然/, "否则/不然"),
  re("grammar.jinguan", /尽管/, "尽管"),
  re("grammar.weile", /为了/, "为了"),
  re("grammar.youyu-yinci", /由于|因此/, "由于/因此"),
  re("grammar.yushi", /于是/, "于是"),
  re("grammar.jieguo", /结果/, "结果"),
  re("grammar.zhihao-budebu", /只好|不得不/, "只好/不得不"),
  re("grammar.bing-negation", /并(不|没)/, "并不/并没"),
  re("grammar.nandao", /难道/, "难道"),
  re("grammar.daodi", /到底|究竟/, "到底/究竟"),
  re("grammar.jingran", /竟然|居然|没想到/, "竟然/没想到"),
  re("grammar.kongpa", /恐怕/, "恐怕"),
  re("grammar.chadianr", /差点儿|差一点/, "差点儿"),
  re("grammar.formal-words", /是否|以及|与/, "是否/与/以及"),
  re("grammar.dui-laishuo", /对[^，。？！]{1,8}来说/, "对…来说"),
  re("grammar.zai-fangmian", /方面/, "方面"),
  re("grammar.suizhe", /随着/, "随着"),
  // C1
  re("grammar.ran-er", /然而/, "然而"),
  re("grammar.yuqi-buru", /与其/, "与其…不如"),
  re("grammar.ningke", /宁可|宁愿/, "宁可"),
  re("function.shouxian-qici", /首先|其次/, "首先/其次"),
  re("function.zongzhi", /总之|总的来说|换句话说|总而言之/, "总之"),
  re("grammar.degree", /极了|得不得了|极其/, "极了/极其"),
  re("grammar.shenzhi", /甚至/, "甚至"),
  re("grammar.hekuang", /何况|更不用说/, "何况"),
  re("grammar.fan-er", /反而/, "反而"),
  re("grammar.fanzheng", /反正/, "反正"),
  re("grammar.zhi", /之一|之间|之后|之前|之内|之外|分之|之所以/, "之"),
  re("grammar.qi", /其中|其余|及其|尤其/, "其"),
  re("grammar.yi-wei", /以[^，。？！ ]{1,6}为(主|例|荣|目标|中心|准)/, "以…为"),
  // Not 因为…所以 run together.
  re("grammar.wei-suo", /[为被][^，。？！ ]{1,8}所(?!以|有)/, "为…所"),
  re("grammar.written-negatives", /无法|尚未|请勿|未必|非[^，。？！常]{1,4}不可/, "无法/未/勿"),
  re("function.news", /据报道|据悉|据了解/, "据报道"),
  re("vocab.data-trends", /百分之|下降/, "百分之/下降"),
];

/** True for an answer typed in Chinese (characters or pinyin). */
function typedInTarget(e: Exercise): boolean {
  if (e.type === "fill-blank" || e.type === "dictation") return true;
  if (e.type === "translate") return e.direction === "en-es";
  return false;
}

function lessonChecks(l: Lesson): string[] {
  const out: string[] = [];
  if (!l.slug.startsWith("zh-")) out.push(`slug should start with "zh-"`);
  l.sections.forEach((s) => {
    for (const ex of s.examples ?? []) {
      if (!hasHanzi(ex.es)) out.push(`example without characters: ${ex.es}`);
      const py = (ex.en ?? "").split(" -- ")[0];
      if (!ex.en?.includes(" -- ") || !pinyinParts(py)) out.push(`example needs "pinyin -- meaning": ${ex.en}`);
      if (ex.es.includes("--")) out.push(`one example, one sentence (split it): ${ex.es}`);
      else for (const q of pinyinMarkProblems(py)) out.push(`example ${ex.es}: ${q}`);
    }
  });
  const answers = [...l.sections.flatMap((s) => s.checkpoint ?? []), ...l.exercises].flatMap((e) =>
    e.type === "fill-blank" || (e.type === "translate" && e.direction === "en-es") ? [e.answer, ...(e.altAnswers ?? [])] : []
  );
  for (const a of answers) if (!hasHanzi(a)) for (const q of pinyinMarkProblems(a)) out.push(`answer "${a}": ${q}`);
  return out;
}

export const ZH_PLUGIN: CoursePlugin = {
  course: "zh",
  grade: gradeChineseAnswer,
  normalize: (t) => cleanHanzi(t.toLowerCase()),
  targetText: chineseText,
  detectors: ZH_DETECTORS,
  lessonChecks,
  typedInTarget,
};
