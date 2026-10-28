// Synced from cheneygross-afk/lengo:src/lib/ko-roots/c2.ts by scripts/sync-content.mjs -- edit it there, not here.
// The Mastery roots of the Korean Word Roots tool, most useful first.
// Written for the tool; every word was checked against the Korean lesson
// files (all of them appear in the course), but nothing here imports the
// lessons. Hanja are the traditional forms used in Korea; `r` is the
// standard reading, `initial` the reading at the start of a word (두음 법칙).
import type { KoRoot } from "./types";

export const KO_ROOTS_C2: KoRoot[] = [
  {"h": "思", "r": "사", "m": "think", "words": [{"ko": "사상", "en": "thought, ideology"}, {"ko": "사고방식", "en": "way of thinking"}, {"ko": "사춘기", "en": "puberty"}]},
  {"h": "想", "r": "상", "m": "think; imagine", "words": [{"ko": "사상", "en": "thought, ideology"}, {"ko": "상상", "en": "imagination"}, {"ko": "예상", "en": "expectation"}, {"ko": "감상", "en": "impressions"}, {"ko": "회상", "en": "recollection"}, {"ko": "명상", "en": "meditation"}]},
  {"h": "像", "r": "상", "m": "image, likeness", "words": [{"ko": "상상", "en": "imagination"}, {"ko": "영상", "en": "video, image"}, {"ko": "동상", "en": "statue"}, {"ko": "자화상", "en": "self-portrait"}, {"ko": "상상력", "en": "imagination"}]},
  {"h": "象", "r": "상", "m": "elephant; shape, phenomenon", "words": [{"ko": "현상", "en": "phenomenon"}, {"ko": "대상", "en": "object, target"}, {"ko": "인상", "en": "impression"}, {"ko": "추상", "en": "abstraction"}, {"ko": "상징", "en": "symbol"}, {"ko": "기상", "en": "weather"}]},
  {"h": "徵", "r": "징", "m": "sign; summon", "words": [{"ko": "상징", "en": "symbol"}, {"ko": "특징", "en": "characteristic"}, {"ko": "징후", "en": "symptom, sign"}, {"ko": "상징적", "en": "symbolic"}]},
  {"h": "特", "r": "특", "m": "special", "words": [{"ko": "특징", "en": "characteristic"}, {"ko": "특별", "en": "special"}, {"ko": "특히", "en": "especially"}, {"ko": "특성", "en": "characteristic"}, {"ko": "독특", "en": "uniqueness"}, {"ko": "특색", "en": "distinctive feature"}]},
  {"h": "別", "r": "별", "m": "separate; special", "words": [{"ko": "특별", "en": "special"}, {"ko": "구별", "en": "distinction"}, {"ko": "차별", "en": "discrimination"}, {"ko": "이별", "en": "parting"}, {"ko": "별로", "en": "not particularly"}, {"ko": "성별", "en": "sex, gender"}]},
  {"h": "差", "r": "차", "m": "difference", "words": [{"ko": "차이", "en": "difference"}, {"ko": "차별", "en": "discrimination"}, {"ko": "시차", "en": "time difference"}, {"ko": "격차", "en": "gap"}, {"ko": "편차", "en": "deviation"}]},
  {"h": "異", "r": "이", "m": "different", "words": [{"ko": "차이", "en": "difference"}, {"ko": "이상", "en": "strangeness (이상하다 \"strange\")"}, {"ko": "특이", "en": "peculiarity"}, {"ko": "이의", "en": "objection"}, {"ko": "이견", "en": "dissenting view"}]},
  {"h": "變", "r": "변", "m": "change", "words": [{"ko": "변화", "en": "change"}, {"ko": "변경", "en": "change, alteration"}, {"ko": "변동", "en": "fluctuation"}, {"ko": "변신", "en": "transformation"}, {"ko": "변형", "en": "deformation"}, {"ko": "변수", "en": "variable"}]},
  {"h": "革", "r": "혁", "m": "leather; reform", "words": [{"ko": "혁명", "en": "revolution"}, {"ko": "개혁", "en": "reform"}, {"ko": "혁신", "en": "innovation"}]},
  {"h": "命", "r": "명", "m": "life; order; fate", "words": [{"ko": "생명", "en": "life"}, {"ko": "혁명", "en": "revolution"}, {"ko": "운명", "en": "destiny"}, {"ko": "명령", "en": "order"}, {"ko": "수명", "en": "lifespan"}, {"ko": "사명", "en": "mission"}]},
  {"h": "令", "r": "령", "m": "order", "words": [{"ko": "명령", "en": "order"}, {"ko": "법령", "en": "laws and ordinances"}, {"ko": "영장", "en": "warrant"}], "initial": "영"},
  {"h": "批", "r": "비", "m": "criticise", "words": [{"ko": "비판", "en": "criticism"}, {"ko": "비평", "en": "critique"}, {"ko": "비판적", "en": "critical"}, {"ko": "비평가", "en": "critic"}, {"ko": "비준", "en": "ratification"}]},
  {"h": "判", "r": "판", "m": "judge", "words": [{"ko": "비판", "en": "criticism"}, {"ko": "판단", "en": "judgement"}, {"ko": "재판", "en": "trial"}, {"ko": "판결", "en": "ruling"}, {"ko": "판사", "en": "judge"}, {"ko": "심판", "en": "referee"}]},
  {"h": "斷", "r": "단", "m": "cut; decide", "words": [{"ko": "판단", "en": "judgement"}, {"ko": "중단", "en": "suspension"}, {"ko": "단절", "en": "severance"}, {"ko": "결단", "en": "decisiveness"}, {"ko": "진단", "en": "diagnosis"}, {"ko": "차단", "en": "blocking"}]},
  {"h": "診", "r": "진", "m": "examine (a patient)", "words": [{"ko": "진단", "en": "diagnosis"}, {"ko": "진료", "en": "medical treatment"}, {"ko": "진찰", "en": "medical examination"}, {"ko": "검진", "en": "medical check-up"}, {"ko": "휴진", "en": "clinic closed"}]},
  {"h": "療", "r": "료", "m": "heal", "words": [{"ko": "치료", "en": "treatment"}, {"ko": "진료", "en": "medical treatment"}, {"ko": "의료", "en": "medical care"}, {"ko": "요양", "en": "convalescence"}, {"ko": "의료비", "en": "medical costs"}], "initial": "요"},
  {"h": "罪", "r": "죄", "m": "crime, sin", "words": [{"ko": "범죄", "en": "crime"}, {"ko": "유죄", "en": "guilt"}, {"ko": "무죄", "en": "innocence"}, {"ko": "사죄", "en": "apology (formal)"}, {"ko": "죄송", "en": "being sorry"}]},
  {"h": "犯", "r": "범", "m": "commit (a crime)", "words": [{"ko": "범죄", "en": "crime"}, {"ko": "범인", "en": "culprit"}, {"ko": "범하다", "en": "to commit"}]},
  {"h": "訴", "r": "소", "m": "sue, appeal", "words": [{"ko": "소송", "en": "lawsuit"}, {"ko": "고소", "en": "legal complaint"}, {"ko": "호소", "en": "appeal"}, {"ko": "기소", "en": "indictment"}, {"ko": "패소", "en": "losing a lawsuit"}, {"ko": "승소", "en": "winning a lawsuit"}]},
  {"h": "證", "r": "증", "m": "prove, certify", "words": [{"ko": "증거", "en": "evidence"}, {"ko": "증명", "en": "proof"}, {"ko": "보증", "en": "guarantee"}, {"ko": "영수증", "en": "receipt"}, {"ko": "자격증", "en": "certificate"}, {"ko": "검증", "en": "verification"}]},
  {"h": "據", "r": "거", "m": "rely on; evidence", "words": [{"ko": "증거", "en": "evidence"}, {"ko": "근거", "en": "basis, grounds"}, {"ko": "의거", "en": "accordance"}, {"ko": "점거", "en": "occupation"}, {"ko": "논거", "en": "argument, grounds"}]},
  {"h": "根", "r": "근", "m": "root", "words": [{"ko": "근거", "en": "basis, grounds"}, {"ko": "근본", "en": "root, foundation"}, {"ko": "근본적", "en": "fundamental"}]},
  {"h": "本", "r": "본", "m": "root; origin; book", "words": [{"ko": "기본", "en": "basics"}, {"ko": "근본", "en": "root, foundation"}, {"ko": "일본", "en": "Japan"}, {"ko": "본인", "en": "oneself, the person in question"}, {"ko": "원본", "en": "original"}, {"ko": "본사", "en": "head office"}]},
  {"h": "資", "r": "자", "m": "capital; resources", "words": [{"ko": "자료", "en": "materials, data"}, {"ko": "투자", "en": "investment"}, {"ko": "자격", "en": "qualification"}, {"ko": "자산", "en": "assets"}, {"ko": "자금", "en": "funds"}]},
  {"h": "投", "r": "투", "m": "throw", "words": [{"ko": "투자", "en": "investment"}, {"ko": "투표", "en": "vote"}, {"ko": "투수", "en": "pitcher"}, {"ko": "투입", "en": "input"}, {"ko": "투자자", "en": "investor"}, {"ko": "투고", "en": "submission (of writing)"}]},
  {"h": "票", "r": "표", "m": "ticket; ballot", "words": [{"ko": "투표", "en": "vote"}, {"ko": "매표소", "en": "ticket office"}, {"ko": "개표", "en": "counting of votes"}, {"ko": "득표", "en": "votes won"}, {"ko": "우표", "en": "stamp"}]},
  {"h": "識", "r": "식", "m": "know", "words": [{"ko": "지식", "en": "knowledge"}, {"ko": "상식", "en": "common sense"}, {"ko": "의식", "en": "consciousness"}, {"ko": "인식", "en": "awareness"}]},
  {"h": "知", "r": "지", "m": "know", "words": [{"ko": "지식", "en": "knowledge"}, {"ko": "통지", "en": "notice"}, {"ko": "지능", "en": "intelligence"}, {"ko": "인지", "en": "cognition"}, {"ko": "무지", "en": "ignorance"}, {"ko": "지인", "en": "acquaintance"}]},
  {"h": "認", "r": "인", "m": "recognise, admit", "words": [{"ko": "인정", "en": "acknowledgement"}, {"ko": "인식", "en": "awareness"}, {"ko": "확인", "en": "confirmation"}, {"ko": "승인", "en": "approval"}, {"ko": "인지", "en": "cognition"}, {"ko": "공인", "en": "official recognition"}]},
  {"h": "確", "r": "확", "m": "certain, firm", "words": [{"ko": "확인", "en": "confirmation"}, {"ko": "확실", "en": "certainty"}, {"ko": "정확", "en": "accuracy"}, {"ko": "확신", "en": "conviction"}, {"ko": "명확", "en": "clarity"}, {"ko": "확보", "en": "securing"}]},
  {"h": "正", "r": "정", "m": "right, correct", "words": [{"ko": "정확", "en": "accuracy"}, {"ko": "정답", "en": "correct answer"}, {"ko": "정상", "en": "normal"}, {"ko": "정직", "en": "honesty"}, {"ko": "수정", "en": "correction"}, {"ko": "공정", "en": "fairness"}]},
  {"h": "直", "r": "직", "m": "straight; direct", "words": [{"ko": "정직", "en": "honesty"}, {"ko": "직접", "en": "direct"}, {"ko": "솔직", "en": "frankness"}, {"ko": "직진", "en": "going straight"}, {"ko": "직후", "en": "right after"}, {"ko": "직전", "en": "right before"}]},
  {"h": "接", "r": "접", "m": "touch, receive", "words": [{"ko": "직접", "en": "direct"}, {"ko": "간접", "en": "indirect"}, {"ko": "접수", "en": "reception, application"}, {"ko": "면접", "en": "interview"}, {"ko": "접근", "en": "approach"}, {"ko": "접속", "en": "connection"}]},
  {"h": "近", "r": "근", "m": "near", "words": [{"ko": "최근", "en": "recently"}, {"ko": "근처", "en": "vicinity"}, {"ko": "접근", "en": "approach"}, {"ko": "근대", "en": "modern era"}, {"ko": "근래", "en": "recently"}, {"ko": "부근", "en": "vicinity"}]},
  {"h": "最", "r": "최", "m": "most", "words": [{"ko": "최근", "en": "recently"}, {"ko": "최고", "en": "the best"}, {"ko": "최초", "en": "the first"}, {"ko": "최소", "en": "the minimum"}, {"ko": "최대", "en": "the largest"}, {"ko": "최선", "en": "one's best"}]},
  {"h": "初", "r": "초", "m": "beginning", "words": [{"ko": "최초", "en": "the first"}, {"ko": "초급", "en": "beginner level"}, {"ko": "초기", "en": "early stage"}, {"ko": "초보", "en": "beginner"}, {"ko": "초등학교", "en": "primary school"}, {"ko": "초반", "en": "early part"}]},
];
