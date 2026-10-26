// Synced from cheneygross-afk/lengo:src/lib/ko-conjugation/types.ts by scripts/sync-content.mjs -- edit it there, not here.
// Types for the Korean conjugator (conjugate.ts) and its word list
// (verbs.ts). Hangul only: no romanization, no Hanja.

/** How the stem changes. "regular" covers the ordinary vowel contractions
 * (가요, 봐요, 줘요, 마셔요, 돼요), which every stem of that shape makes. */
export type IrrClass =
  | "regular"
  | "하" // 하다 and every X하다: 해요, 했어요
  | "ㄹ" // 살다: ㄹ drops before ㄴ ㅂ ㅅ and takes no 으: 사세요, 삽니다, 사는, 살면
  | "으" // 쓰다, 바쁘다: ㅡ drops before 아/어: 써요, 바빠요
  | "르" // 모르다: 몰라요, 불러요
  | "러" // 푸르다: 푸르러요
  | "우" // 푸다: 퍼요
  | "ㅂ" // 돕다, 춥다: 도와요, 추워요, 추운
  | "ㄷ" // 듣다: 들어요, 들은
  | "ㅅ" // 낫다: 나아요, 나은
  | "ㅎ"; // 하얗다: 하얘요, 하얀

/** What kind of word it is. "exist" is 있다, 없다 and their compounds
 * (맛있다, 재미없다): adjective-like in meaning, verb-like before 는. */
export type Pos = "verb" | "adj" | "exist" | "copula" | "negcopula";

export type LevelCode = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

export type KoWord = {
  /** Dictionary form: 가다. */
  dict: string;
  /** URL slug: the dictionary form, with -2 for a second word spelled the same (묻다-2). */
  slug: string;
  en: string;
  pos: Pos;
  irr: IrrClass;
  /** Course level where learners usually meet it. */
  level: LevelCode;
  /** A different honorific verb (먹다 → 드시다, 있다 → 계시다). neg: said with 안 (없다 → 안 계시다). */
  hon?: { dict: string; neg?: boolean; alt?: string[] };
  /** The ordinary -(으)시- form is also heard (먹으세요 beside 드세요). */
  plainHonOk?: boolean;
  /** Already honorific (계시다, 드시다, 주무시다): the plain forms are the honorific ones. */
  honSelf?: boolean;
  /** A noun + 하다 verb: 안 goes before 하다 (공부 안 해요). */
  split?: boolean;
  /** No honorific forms: describes things, so -시- would honor an object (*맛있으세요, *비싸세요). */
  noHon?: boolean;
  /** No requests, commands or "let's" (죽다, 알다, 생기다): involuntary or odd as an order. */
  noCommand?: boolean;
  /** No 안 negative (있다 → 없다, 알다 → 모르다, 이다 → 아니다). */
  noNeg?: boolean;
  /** Short note shown on the word's page. */
  note?: string;
};

/** One conjugated form, any other forms that are also right, and whether the stem changes irregularly here. */
export type Form = { text: string; alt?: string[]; irregular?: boolean };

export type Level = "haeyo" | "hamnida" | "banmal" | "handa";
export type Tense = "present" | "past" | "future" | "progressive" | "negPresent" | "negPast";
export type StatementId = `${Tense}.${Level}`;
export type HonId = `hon.${Tense}.${Level}`;

export type OtherId =
  | "go"
  | "jiman"
  | "aseo"
  | "nikka"
  | "myeon"
  | "neunde"
  | "myeonseo"
  | "reo"
  | "ryeogo"
  | "modPresent"
  | "modPast"
  | "modFuture"
  | "want"
  | "can"
  | "must"
  | "please"
  | "try"
  | "promise"
  | "shall"
  | "seems"
  | "become"
  | "request"
  | "formalRequest"
  | "letsFormal"
  | "letsCasual"
  | "plainCommand";

export type FormId = StatementId | HonId | OtherId;

export const LEVELS: { id: Level; en: string; ko: string; note: string }[] = [
  { id: "haeyo", en: "Polite", ko: "해요체", note: "Everyday polite speech: strangers, shops, colleagues." },
  { id: "hamnida", en: "Formal", ko: "합니다체", note: "Announcements, presentations, the news, the army, first meetings at work." },
  { id: "banmal", en: "Casual", ko: "반말", note: "Close friends, younger siblings, children." },
  { id: "handa", en: "Plain written", ko: "한다체", note: "Diaries, newspapers, essays, books; also talking to yourself." },
];

export const TENSES: { id: Tense; en: string; verbsOnly?: boolean }[] = [
  { id: "present", en: "Present" },
  { id: "past", en: "Past" },
  { id: "future", en: "Future / probably" },
  { id: "progressive", en: "Progressive (-고 있다)", verbsOnly: true },
  { id: "negPresent", en: "Negative (안)" },
  { id: "negPast", en: "Past negative" },
];

export type OtherInfo = { id: OtherId; en: string; ko: string; note?: string; group: "connect" | "modify" | "pattern" | "command" };

export const OTHER_FORMS: OtherInfo[] = [
  { id: "go", group: "connect", en: "and (then)", ko: "-고", note: "Joins two actions or facts." },
  { id: "jiman", group: "connect", en: "but", ko: "-지만" },
  { id: "aseo", group: "connect", en: "so, and then", ko: "-아서/어서", note: "Reason, or one action leading to the next. Never with a past ending inside." },
  { id: "nikka", group: "connect", en: "because, since", ko: "-(으)니까", note: "A reason the listener should accept; can come before a request." },
  { id: "myeon", group: "connect", en: "if, when", ko: "-(으)면" },
  { id: "neunde", group: "connect", en: "and, but (background)", ko: "-는데 / -(으)ㄴ데", note: "Sets the scene for what comes next." },
  { id: "myeonseo", group: "connect", en: "while", ko: "-(으)면서", note: "The same person doing two things at once." },
  { id: "reo", group: "connect", en: "in order to (with go, come)", ko: "-(으)러", note: "Only before 가다, 오다 and their compounds." },
  { id: "ryeogo", group: "connect", en: "intending to", ko: "-(으)려고" },
  { id: "modPresent", group: "modify", en: "Before a noun: present", ko: "-는 / -(으)ㄴ", note: "Verbs take -는, adjectives -(으)ㄴ: 먹는 사람, 큰 집." },
  { id: "modPast", group: "modify", en: "Before a noun: past", ko: "-(으)ㄴ / -았던", note: "Verbs take -(으)ㄴ (먹은 음식); adjectives -았던/었던 (추웠던 날)." },
  { id: "modFuture", group: "modify", en: "Before a noun: future", ko: "-(으)ㄹ", note: "Things still to happen, and before 때, 거예요, 수 있다." },
  { id: "want", group: "pattern", en: "want to", ko: "-고 싶어요" },
  { id: "can", group: "pattern", en: "can", ko: "-(으)ㄹ 수 있어요" },
  { id: "must", group: "pattern", en: "have to", ko: "-아야/어야 해요" },
  { id: "please", group: "pattern", en: "please do (for me)", ko: "-아/어 주세요" },
  { id: "try", group: "pattern", en: "try doing", ko: "-아/어 보세요" },
  { id: "promise", group: "pattern", en: "I'll (promise)", ko: "-(으)ㄹ게요", note: "Spelled 게, never 께." },
  { id: "shall", group: "pattern", en: "shall we? / shall I?", ko: "-(으)ㄹ까요?" },
  { id: "seems", group: "pattern", en: "I think it will", ko: "-(으)ㄹ 것 같아요" },
  { id: "become", group: "pattern", en: "become, get", ko: "-아/어져요", note: "Adjective to change of state: 추워져요 'it's getting cold'." },
  { id: "request", group: "command", en: "Please (polite)", ko: "-(으)세요", note: "The everyday polite request; it carries the honorific -시-." },
  { id: "formalRequest", group: "command", en: "Please (formal)", ko: "-(으)십시오", note: "Signs, announcements, formal speech." },
  { id: "letsFormal", group: "command", en: "Let's (formal)", ko: "-(으)ㅂ시다", note: "To equals or juniors in a group; not to a boss." },
  { id: "letsCasual", group: "command", en: "Let's (casual)", ko: "-자" },
  { id: "plainCommand", group: "command", en: "Do it! (plain)", ko: "-아라/어라", note: "Blunt; to children, or in writing (a written instruction uses -(으)라)." },
];

export const POS_LABEL: Record<Pos, string> = {
  verb: "Verb",
  adj: "Adjective (descriptive verb)",
  exist: "Existential (있다 / 없다)",
  copula: "Copula",
  negcopula: "Negative copula",
};

export const IRR_LABEL: Record<IrrClass, string> = {
  regular: "Regular",
  하: "하다 verb",
  ㄹ: "ㄹ-dropping",
  으: "으-dropping",
  르: "르 irregular",
  러: "러 irregular",
  우: "우 irregular",
  ㅂ: "ㅂ irregular",
  ㄷ: "ㄷ irregular",
  ㅅ: "ㅅ irregular",
  ㅎ: "ㅎ irregular",
};

/** Every form of a word, keyed by FormId (absent where the word has no such form). */
export type Conjugation = {
  word: KoWord;
  /** For 이다: the noun it follows. */
  noun?: string;
  forms: Partial<Record<FormId, Form>>;
};
