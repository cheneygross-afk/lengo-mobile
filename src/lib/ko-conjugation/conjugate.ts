// Synced from cheneygross-afk/lengo:src/lib/ko-conjugation/conjugate.ts by scripts/sync-content.mjs -- edit it there, not here.
// The Korean conjugation engine. Every form is built from the dictionary
// stem by three kinds of ending, the way Korean grammar books describe them:
//
// - 아/어 endings (-아요/어요, -았어요/었어요, -아서/어서, -아야, -아/어 주세요):
//   built on the "infinitive" (먹어, 가, 봐, 해, 도와, 들어, 하얘, 몰라).
// - (으) endings (-(으)세요, -(으)니까, -(으)면, -(으)ㄴ, -(으)ㄹ, -(으)ㅂ시다):
//   a consonant stem adds 으; ㄹ stems drop ㄹ before ㄴ ㅂ ㅅ.
// - consonant endings (-고, -지만, -습니다, -는, -겠-): straight on the stem,
//   except that ㄹ drops before ㄴ and ㅂ.
//
// Irregular stems change only in the places their class says, and each form
// is marked irregular where it differs from what the regular rules would
// give. 이다 is conjugated after a noun (학생이에요, 의사예요).
import { editLast, isJamo, lastFinal, lastVowel, split, withFinal } from "./hangul";
import type { Conjugation, Form, FormId, IrrClass, KoWord, Level, OtherId, Tense } from "./types";

type Forms = Partial<Record<FormId, Form>>;

export const stemOf = (dict: string): string => dict.slice(0, -1);

const f = (text: string, alt?: (string | undefined)[]): Form => {
  const a = [...new Set((alt ?? []).filter((x): x is string => !!x && x !== text))];
  return a.length ? { text, alt: a } : { text };
};

// ---- the three kinds of ending -------------------------------------------

/** 아 or 어: bright vowels (ㅏ ㅑ ㅗ) in the deciding syllable take 아. */
function bright(stem: string, irr: IrrClass): boolean {
  let s = stem;
  // 으, 르 and 러 stems look at the syllable before the last one (바쁘 → 바빠, 모르 → 몰라); a one-syllable 으 stem takes 어 (써).
  if (irr === "으" || irr === "르" || irr === "러") {
    if (s.length === 1) return false;
    s = s.slice(0, -1);
  }
  const v = lastVowel(s);
  return v === "ㅏ" || v === "ㅑ" || v === "ㅗ";
}

/** The 아/어 form ("infinitive"), plus any longer spelling that's also right (보아 beside 봐). */
export function infinitive(stem: string, irr: IrrClass): { main: string; alts: string[] } {
  const a = bright(stem, irr) ? "아" : "어";
  const last = split(stem[stem.length - 1]);
  switch (irr) {
    case "하":
      return { main: editLast(stem, { vowel: "ㅐ" }), alts: [] };
    case "르": {
      // 모르 → 몰 + 라: the syllable before 르 takes ㄹ, and 르 becomes 라/러.
      const before = withFinal(stem.slice(0, -1), "ㄹ");
      return { main: before + (a === "아" ? "라" : "러"), alts: [] };
    }
    case "러":
      return { main: stem + "러", alts: [] };
    case "우":
      return { main: editLast(stem, { vowel: "ㅓ" }), alts: [] };
    case "ㅂ": {
      const base = withFinal(stem, "");
      return { main: base + (stem === "돕" || stem === "곱" ? "와" : "워"), alts: [] };
    }
    case "ㄷ":
      return { main: withFinal(stem, "ㄹ") + a, alts: [] };
    case "ㅅ":
      return { main: withFinal(stem, "") + a, alts: [] };
    case "ㅎ": {
      // ㅏ → ㅐ (빨개), ㅑ → ㅒ (하얘), ㅓ → ㅔ (누레, 꺼메), ㅕ → ㅖ (허예); but 이렇다, 그렇다, 저렇다, 어떻다 take ㅐ (그래, 어때).
      const demonstrative = /(이렇|그렇|저렇|어떻|요렇)$/.test(stem);
      const v = demonstrative ? "ㅐ" : ({ ㅏ: "ㅐ", ㅑ: "ㅒ", ㅓ: "ㅔ", ㅕ: "ㅖ" } as Record<string, string>)[last.vowel] ?? "ㅐ";
      return { main: editLast(stem, { vowel: v, final: "" }), alts: [] };
    }
    case "으":
      return { main: editLast(stem, { vowel: a === "아" ? "ㅏ" : "ㅓ" }), alts: [] };
  }
  // Regular and ㄹ stems.
  if (last.final) return { main: stem + a, alts: [] };
  const one = stem.length === 1;
  switch (last.vowel) {
    case "ㅏ":
    case "ㅓ":
    case "ㅕ":
    case "ㅒ":
    case "ㅖ":
      return { main: stem, alts: [] };
    case "ㅐ":
    case "ㅔ":
      return { main: stem, alts: [stem + "어"] };
    case "ㅗ":
      // 오다 and its compounds only ever contract (와); 보다 also has 보아.
      return { main: editLast(stem, { vowel: "ㅘ" }), alts: last.initial === "ㅇ" || !one ? [] : [stem + "아"] };
    case "ㅜ":
      return { main: editLast(stem, { vowel: "ㅝ" }), alts: one || stem === "나누" ? [stem + "어"] : [] };
    case "ㅣ":
      return { main: editLast(stem, { vowel: "ㅕ" }), alts: [] };
    case "ㅚ":
      return { main: editLast(stem, { vowel: "ㅙ" }), alts: [stem + "어"] };
    default:
      // ㅟ ㅢ ㅡ (as a regular stem) and the rest: no contraction (쉬어).
      return { main: stem + "어", alts: [] };
  }
}

/** Adds an (으) ending: tail is a jamo-led ending ("ㄴ", "ㄹ", "ㅂ시다") or a syllable-led one ("세요", "니까", "면"). */
export function attachEu(stem: string, irr: IrrClass, tail: string): string {
  const head = tail[0];
  const sound = isJamo(head) ? head : split(head).initial;
  let base: string;
  switch (irr) {
    case "ㄹ":
      if (head === "ㄹ") return stem + tail.slice(1); // 살 + ㄹ = 살
      if (sound === "ㄴ" || sound === "ㅂ" || sound === "ㅅ") base = withFinal(stem, "");
      else return stem + tail; // 살면, 살러: no 으
      break;
    case "ㅂ":
      base = withFinal(stem, "") + "우";
      break;
    case "ㄷ":
      base = withFinal(stem, "ㄹ") + "으";
      break;
    case "ㅅ":
      base = withFinal(stem, "") + "으";
      break;
    case "ㅎ":
      base = withFinal(stem, "");
      break;
    default:
      base = lastFinal(stem) ? stem + "으" : stem;
  }
  return isJamo(head) ? withFinal(base, head) + tail.slice(1) : base + tail;
}

/** Adds an ending that starts with ㄴ as a syllable (-는, -는데, -니?): ㄹ drops (사는). */
function attachN(stem: string, irr: IrrClass, tail: string): string {
  return irr === "ㄹ" ? withFinal(stem, "") + tail : stem + tail;
}

/** -(스)ㅂ니다: 갑니다, 먹습니다, 삽니다. */
function formal(stem: string, irr: IrrClass, rest = "니다"): string {
  if (!lastFinal(stem) || irr === "ㄹ") return withFinal(stem, "ㅂ") + rest;
  return stem + "습" + rest;
}

/** 한다체 present of a verb: 간다, 먹는다, 산다. */
function plainPresentVerb(stem: string, irr: IrrClass): string {
  if (!lastFinal(stem)) return withFinal(stem, "ㄴ") + "다";
  if (irr === "ㄹ") return withFinal(stem, "ㄴ") + "다";
  return stem + "는다";
}

// ---- honorific -----------------------------------------------------------

/** The four statement forms, past and future of an honorific stem ending in 시 (가시, 드시, 계시). */
function honorificStatements(h: string, verbLike: boolean, prefix = ""): Partial<Record<`${"present" | "past" | "future"}.${Level}`, string[]>> {
  const ses = h.slice(0, -1) + "세요";
  const sye = editLast(h, { vowel: "ㅕ" });
  const syeot = withFinal(sye, "ㅆ");
  const sil = withFinal(h, "ㄹ");
  const p = (xs: string[]) => xs.map((x) => prefix + x);
  return {
    "present.haeyo": p([ses]),
    "present.hamnida": p([withFinal(h, "ㅂ") + "니다"]),
    "present.banmal": p([sye]),
    "present.handa": p([verbLike ? withFinal(h, "ㄴ") + "다" : h + "다"]),
    "past.haeyo": p([syeot + "어요"]),
    "past.hamnida": p([syeot + "습니다"]),
    "past.banmal": p([syeot + "어"]),
    "past.handa": p([syeot + "다"]),
    "future.haeyo": p([sil + " 거예요"]),
    "future.hamnida": p([sil + " 겁니다", h + "겠습니다", sil + " 것입니다"]),
    "future.banmal": p([sil + " 거야"]),
    "future.handa": p([sil + " 것이다", h + "겠다"]),
  };
}

// ---- regular words (verbs, adjectives, 있다/없다) --------------------------

// 그렇다, 이렇다, 저렇다, 어떻다 describe a manner, not a quality: no -아/어지다.
const DEMONSTRATIVES = ["그렇다", "이렇다", "저렇다", "어떻다"];

const LEVEL_IDS: Level[] = ["haeyo", "hamnida", "banmal", "handa"];

function build(word: KoWord, irr: IrrClass): Forms {
  const stem = stemOf(word.dict);
  const verb = word.pos === "verb";
  const exist = word.pos === "exist";
  const verbLike = verb || exist;
  const forms: Forms = {};
  const set = (id: FormId, xs: (string | undefined)[]) => {
    const [main, ...rest] = xs.filter((x): x is string => !!x);
    if (main) forms[id] = f(main, rest);
  };

  const neg = word.pos === "negcopula";
  // 아니다 keeps 아니어 in full (아니었어요, 아니어야); its present is 아니에요.
  const inf = neg ? { main: "아니어", alts: [] } : infinitive(stem, irr);
  const A = [inf.main, ...inf.alts];
  const P = A.map((x) => withFinal(x, "ㅆ"));
  const eu = (tail: string) => attachEu(stem, irr, tail);

  // Statements, plain.
  if (word.honSelf) {
    const hs = honorificStatements(stem, verbLike);
    for (const [id, xs] of Object.entries(hs)) set(id as FormId, xs);
  } else {
    set("present.haeyo", neg ? ["아니에요", "아니어요"] : A.map((x) => x + "요"));
    set("present.hamnida", [formal(stem, irr)]);
    set("present.banmal", neg ? ["아니야"] : A);
    set("present.handa", [verb ? plainPresentVerb(stem, irr) : word.dict]);
    set("past.haeyo", P.map((x) => x + "어요"));
    set("past.hamnida", P.map((x) => x + "습니다"));
    set("past.banmal", P.map((x) => x + "어"));
    set("past.handa", P.map((x) => x + "다"));
    const l = eu("ㄹ");
    set("future.haeyo", [l + " 거예요"]);
    set("future.hamnida", [l + " 겁니다", stem + "겠습니다", l + " 것입니다"]);
    set("future.banmal", [l + " 거야"]);
    set("future.handa", [l + " 것이다", stem + "겠다"]);
  }
  if (verb && word.honSelf) {
    // 드시고 계세요, 주무시고 계세요: an honorific verb takes the honorific 계시다 (계시다 itself has no progressive).
    if (word.dict !== "계시다") {
      set("progressive.haeyo", [stem + "고 계세요"]);
      set("progressive.hamnida", [stem + "고 계십니다"]);
      set("progressive.banmal", [stem + "고 계셔"]);
      set("progressive.handa", [stem + "고 계신다"]);
    }
  } else if (verb) {
    set("progressive.haeyo", [stem + "고 있어요"]);
    set("progressive.hamnida", [stem + "고 있습니다"]);
    set("progressive.banmal", [stem + "고 있어"]);
    set("progressive.handa", [stem + "고 있다"]);
  }

  // 안 negatives, with the long -지 않다 form as an alternative.
  if (!word.noNeg) {
    const noun = word.split ? word.dict.slice(0, -2) : "";
    const an = (x: string) => (noun ? `${noun} 안 ${x.slice(noun.length)}` : `안 ${x}`);
    const ji = stem + "지 않";
    const long: Record<`${"negPresent" | "negPast"}.${Level}`, string> = {
      "negPresent.haeyo": ji + "아요",
      "negPresent.hamnida": ji + "습니다",
      "negPresent.banmal": ji + "아",
      "negPresent.handa": verb ? ji + "는다" : ji + "다",
      "negPast.haeyo": ji + "았어요",
      "negPast.hamnida": ji + "았습니다",
      "negPast.banmal": ji + "았어",
      "negPast.handa": ji + "았다",
    };
    for (const lv of LEVEL_IDS) {
      for (const [t, from] of [
        ["negPresent", "present"],
        ["negPast", "past"],
      ] as const) {
        const base = forms[`${from}.${lv}`];
        if (base) set(`${t}.${lv}`, [an(base.text), long[`${t}.${lv}`]]);
      }
    }
  }

  // Honorific -(으)시-, or the word's own honorific verb.
  if (!word.honSelf && !word.noHon) {
    const stems: { h: string; prefix: string; dictStem: string; verbLike: boolean }[] = [];
    if (word.hon) {
      stems.push({ h: stemOf(word.hon.dict), prefix: word.hon.neg ? "안 " : "", dictStem: stemOf(word.hon.dict), verbLike });
      // 있으시다 / 없으시다 (possession) are adjective-like: 있으시다, not 있으신다.
      for (const alt of word.hon.alt ?? []) stems.push({ h: stemOf(alt), prefix: "", dictStem: stemOf(alt), verbLike: verb });
      if (word.plainHonOk) stems.push({ h: eu("시"), prefix: "", dictStem: stem, verbLike: verb });
    } else {
      // 맛있으시다, not 맛있으신다: without 계시다, 있다-words are adjective-like.
      stems.push({ h: eu("시"), prefix: "", dictStem: stem, verbLike: verb });
    }
    const all = stems.map((s) => honorificStatements(s.h, s.verbLike, s.prefix));
    for (const key of Object.keys(all[0]) as (keyof (typeof all)[0])[]) {
      // Every spelling of the main honorific, then just the first of each other one.
      set(`hon.${key}` as FormId, all.flatMap((hs, i) => (i === 0 ? (hs[key] ?? []) : (hs[key] ?? []).slice(0, 1))));
    }
    if (verb) {
      // The honorific sits on 있다 → 계시다: 가고 계세요; a suppletive verb keeps its own (드시고 계세요).
      const s = stems[0].dictStem;
      set("hon.progressive.haeyo", [s + "고 계세요"]);
      set("hon.progressive.hamnida", [s + "고 계십니다"]);
      set("hon.progressive.banmal", [s + "고 계셔"]);
      set("hon.progressive.handa", [s + "고 계신다"]);
    }
    if (!word.noNeg) {
      for (const lv of LEVEL_IDS) {
        for (const [t, from] of [
          ["negPresent", "present"],
          ["negPast", "past"],
        ] as const) {
          const base = forms[`hon.${from}.${lv}`];
          if (!base) continue;
          const noun = word.split ? word.dict.slice(0, -2) : "";
          const an = (x: string) => (noun && x.startsWith(noun) ? `${noun} 안 ${x.slice(noun.length)}` : `안 ${x}`);
          const s = stems[0].dictStem;
          const long =
            t === "negPresent"
              ? { haeyo: "지 않으세요", hamnida: "지 않으십니다", banmal: "지 않으셔", handa: verbLike ? "지 않으신다" : "지 않으시다" }[lv]
              : { haeyo: "지 않으셨어요", hamnida: "지 않으셨습니다", banmal: "지 않으셨어", handa: "지 않으셨다" }[lv];
          set(`hon.${t}.${lv}`, [an(base.text), s + long]);
        }
      }
    }
  }

  // Connecting forms.
  set("go", [stem + "고"]);
  set("jiman", [stem + "지만"]);
  set("aseo", neg ? ["아니어서", "아니라서"] : A.map((x) => x + "서"));
  set("nikka", [eu("니까")]);
  set("myeon", [eu("면")]);
  set("neunde", [verbLike ? attachN(stem, irr, "는데") : eu("ㄴ데")]);
  set("myeonseo", [eu("면서")]);
  if (verb) {
    set("reo", [eu("러")]);
    set("ryeogo", [eu("려고")]);
  }

  // Before a noun.
  set("modPresent", [verbLike ? attachN(stem, irr, "는") : eu("ㄴ")]);
  set("modPast", verb ? [eu("ㄴ")] : P.map((x) => x + "던"));
  set("modFuture", [eu("ㄹ")]);

  // Patterns.
  const doing = verb && !word.noCommand;
  if (doing) {
    // An honorific verb never describes yourself: no *드시고 싶어요, *드실게요.
    if (!word.honSelf) {
      set("want", [stem + "고 싶어요"]);
      set("please", [...A.map((x) => x + " 주세요"), ...A.map((x) => x + "주세요")]);
      set("promise", [eu("ㄹ게요")]);
    }
    set("try", [...A.map((x) => x + " 보세요"), ...A.map((x) => x + "보세요")]);
    set("shall", [eu("ㄹ까요") + "?"]);
  }
  if (verb || exist) set("can", [eu("ㄹ") + " 수 있어요"]);
  set("must", [...A.map((x) => x + "야 해요"), ...A.map((x) => x + "야 돼요")]);
  set("seems", [eu("ㄹ") + " 것 같아요"]);
  if (word.pos === "adj" && !DEMONSTRATIVES.includes(word.dict)) set("become", A.map((x) => x + "져요"));

  // Requests and commands.
  if (doing || (exist && word.hon && !word.hon.neg)) {
    const hs = word.hon && !word.honSelf ? [stemOf(word.hon.dict), ...(word.hon.alt ?? []).map(stemOf)] : [word.honSelf ? stem : eu("시")];
    if (word.plainHonOk) hs.push(eu("시"));
    set("request", hs.map((h) => h.slice(0, -1) + "세요"));
    set("formalRequest", hs.map((h) => withFinal(h, "ㅂ") + "시오"));
    if (doing && !word.honSelf) {
      set("letsFormal", [eu("ㅂ시다")]);
      set("letsCasual", [stem + "자"]);
      set("plainCommand", A.map((x) => x + "라"));
    }
  }
  return forms;
}

// ---- 이다 --------------------------------------------------------------

function copula(noun: string): Forms {
  const v = !lastFinal(noun); // ends in a vowel: 의사예요; consonant: 학생이에요
  const n = noun;
  // Contracted after a vowel (의사예요, 의사였어요), full after a consonant.
  const both = (contracted: string, full: string): Form => (v ? f(n + contracted, [n + full]) : f(n + full));
  const fullFirst = (contracted: string, full: string): Form => (v ? f(n + full, [n + contracted]) : f(n + full));
  const forms: Forms = {
    "present.haeyo": f(n + (v ? "예요" : "이에요")),
    "present.hamnida": f(n + "입니다"),
    "present.banmal": f(n + (v ? "야" : "이야")),
    "present.handa": both("다", "이다"),
    "past.haeyo": both("였어요", "이었어요"),
    "past.hamnida": both("였습니다", "이었습니다"),
    "past.banmal": both("였어", "이었어"),
    "past.handa": both("였다", "이었다"),
    "future.haeyo": f(n + "일 거예요"),
    "future.hamnida": f(n + "일 겁니다", [n + "일 것입니다"]),
    "future.banmal": f(n + "일 거야"),
    "future.handa": f(n + "일 것이다"),
    "hon.present.haeyo": both("세요", "이세요"),
    "hon.present.hamnida": fullFirst("십니다", "이십니다"),
    "hon.present.banmal": both("셔", "이셔"),
    "hon.present.handa": fullFirst("시다", "이시다"),
    "hon.past.haeyo": both("셨어요", "이셨어요"),
    "hon.past.hamnida": fullFirst("셨습니다", "이셨습니다"),
    "hon.past.banmal": both("셨어", "이셨어"),
    "hon.past.handa": fullFirst("셨다", "이셨다"),
    "hon.future.haeyo": fullFirst("실 거예요", "이실 거예요"),
    "hon.future.hamnida": fullFirst("실 겁니다", "이실 겁니다"),
    "hon.future.banmal": fullFirst("실 거야", "이실 거야"),
    "hon.future.handa": fullFirst("실 것이다", "이실 것이다"),
    go: fullFirst("고", "이고"),
    jiman: both("지만", "이지만"),
    aseo: v ? f(n + "여서", [n + "이어서", n + "라서"]) : f(n + "이어서", [n + "이라서"]),
    nikka: both("니까", "이니까"),
    myeon: both("면", "이면"),
    neunde: f(n + "인데"),
    myeonseo: both("면서", "이면서"),
    modPresent: f(n + "인"),
    modPast: both("였던", "이었던"),
    modFuture: f(n + "일"),
    must: v ? f(n + "여야 해요", [n + "이어야 해요", n + "여야 돼요", n + "이어야 돼요"]) : f(n + "이어야 해요", [n + "이어야 돼요"]),
    seems: f(n + "일 것 같아요"),
  };
  return forms;
}

// ---- public --------------------------------------------------------------

/** Nouns the 이다 tables are shown with: one ending in a consonant, one in a vowel. */
export const COPULA_NOUNS = ["학생", "의사"] as const;

const IRREGULAR_FROM_REGULAR: IrrClass[] = ["하", "ㄹ", "으", "르", "러", "우", "ㅂ", "ㄷ", "ㅅ", "ㅎ"];

const cache = new Map<string, Conjugation>();

/** Every form of a word. For 이다, pass the noun it follows (default 학생). */
export function conjugate(word: KoWord, noun?: string): Conjugation {
  const key = `${word.slug}|${noun ?? ""}`;
  const hit = cache.get(key);
  if (hit) return hit;
  let result: Conjugation;
  if (word.pos === "copula") {
    const n = noun ?? COPULA_NOUNS[0];
    result = { word, noun: n, forms: copula(n) };
  } else {
    const forms = build(word, word.irr);
    // Mark the forms where the stem changes: wherever the regular rules
    // would give something else, and every form of a different honorific verb.
    if (IRREGULAR_FROM_REGULAR.includes(word.irr)) {
      const regular = build(word, "regular");
      for (const [id, form] of Object.entries(forms) as [FormId, Form][]) {
        if (regular[id]?.text !== form.text) form.irregular = true;
      }
    }
    if (word.hon && !word.honSelf) {
      for (const [id, form] of Object.entries(forms) as [FormId, Form][]) {
        if (id.startsWith("hon.") || id === "request" || id === "formalRequest") form.irregular = true;
      }
    }
    result = { word, forms };
  }
  cache.set(key, result);
  return result;
}

export function statementId(t: Tense, l: Level, hon = false): FormId {
  return (hon ? `hon.${t}.${l}` : `${t}.${l}`) as FormId;
}

export function isOtherId(id: FormId): id is OtherId {
  return !id.includes(".");
}

/** Every form text of a conjugation (main and alternatives), for search. */
export function allFormTexts(c: Conjugation): string[] {
  const out: string[] = [];
  for (const form of Object.values(c.forms)) {
    if (!form) continue;
    out.push(form.text, ...(form.alt ?? []));
  }
  return out;
}
