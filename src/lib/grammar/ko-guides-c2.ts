// Synced from cheneygross-afk/lengo:src/lib/grammar/ko-guides-c2.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { KoGrammarGuide } from "./ko-types";

// Korean grammar guides, Mastery (C2, TOPIK 6 and beyond). See the notes at
// the top of ./ko-types.ts. The Middle Korean guide shows a few Old Hangul
// spellings for recognition only; TapText never voices them.
export const KO_C2_GUIDES: KoGrammarGuide[] = [
  {
    slug: "reading-literary-prose",
    title: "Reading Literary Prose: Point of View, Free Indirect Thought and Essay Endings",
    description:
      "The grammar of Korean fiction and the personal essay (수필): narrator and point of view, free indirect thought without quotation marks, older spellings in colonial-era texts (하엿다, 잇다), and essay endings of emphasis, reflection and address (-ㄴ 것이다, 그지없다, -는가, 벗이여).",
    level: "C2",
    intro: [
      `At C2 you read Korean literature as it was written, not in simplified form. Narrators slip into characters' thoughts without quotation marks, older stories keep spellings from before the modern rules, and essays close with reflective and rhetorical endings that rarely appear in speech.`,
    ],
    sections: [
      {
        heading: `Point of view and free indirect thought`,
        body: [
          `Korean fiction often drops the quotation frame and lets a character's thought stand as a sentence of narration: 그는 창밖을 보았다. 이제 와서 무슨 소용인가. The second sentence is his thought, in his voice, but without 라고 생각했다. Spotting the switch is key to reading modern stories.`,
          `Narrator commentary appears through -는 것이었다 and -았 / 었던 것이다, which step back and explain: 그는 매일 그 길로 돌아가는 것이었다.`,
        ],
        examples: [
          { ko: "그녀는 편지를 접었다. 이제 와서 무엇을 바라겠는가.", en: "She folded the letter. What could she hope for now?" },
          { ko: "그는 매일 저녁 그 길로 돌아가는 것이었다.", en: "Every evening, he would go back by that road." },
        ],
      },
      {
        heading: `Older spellings`,
        body: [
          `Stories written before the 1933 unified spelling rules (and some before the 1988 revision) use spellings that look wrong today but aren't typos: 하엿다 or 하얏다 (하였다), 잇다 (있다), 업다 (없다), 이약이 (이야기), 그러케 (그렇게). Public-domain editions often keep them; modernised editions change them.`,
        ],
        examples: [
          { ko: "그는 아모 말도 업시 서 잇섯다.", en: "He stood there without a word. (older spelling)" },
        ],
      },
      {
        heading: `Essay endings`,
        body: [
          `The personal essay (수필) closes thoughts with emphatic and reflective endings: -ㄴ 것이다 (그것이 내가 고향을 떠나지 못하는 이유인 것이다), -기 그지없다 (쓸쓸하기 그지없다, endlessly lonely), -(으)ㄹ 따름이다, -지 않을 수 없다. Rhetorical questions in 한다체 (-는가, -겠는가, -단 말인가) and vocatives (청춘이여, 벗이여) address the reader or an idea directly.`,
        ],
        examples: [
          { ko: "그것이 내가 고향을 떠나지 못하는 이유인 것이다.", en: "That is why I cannot leave my hometown." },
          { ko: "가을 저녁은 쓸쓸하기 그지없다.", en: "An autumn evening is unutterably lonely." },
          { ko: "이보다 더 큰 행복이 어디 있겠는가.", en: "Where could there be greater happiness than this?" },
          { ko: "벗이여, 그날을 기억하는가.", en: "My friend, do you remember that day?" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "그는 아모 말도 업시 서 잇섯다.",
        right: "그는 아무 말도 없이 서 있었다.",
        why: `Fine in a colonial-era story you're quoting; in your own writing, use modern spelling.`,
        register: true,
      },
      {
        wrong: "친구에게: 벗이여, 밥 먹었어?",
        right: "친구야, 밥 먹었어?",
        why: `-(이)여 is a literary vocative; in speech use -아 / 야.`,
        register: true,
      },
      {
        wrong: "쓸쓸하기 그지없어하다.",
        right: "쓸쓸하기 그지없다.",
        why: `그지없다 is the predicate itself; it doesn't take -어하다.`,
      },
    ],
    faqs: [
      {
        q: `How do I tell narration from a character's thought?`,
        a: `Look for a change in voice: a rhetorical question, an exclamation, 이제 or 여기 from the character's here and now, or a word the narrator wouldn't use.`,
      },
      {
        q: `Why are older stories so often in public domain editions?`,
        a: `Authors who died more than 70 years ago are out of copyright in Korea, so their works are widely republished, often with the original spelling.`,
      },
    ],
    related: ["fiction-narration", "literary-classical-endings", "twentieth-century-texts", "middle-korean-glimpse"],
    lessons: [
      "c2-fiction-point-of-view",
      "c2-fiction-free-indirect",
      "c2-narrative-connectives",
      "c2-old-spellings-colonial",
      "c2-essay-what-is-a-personal-essay",
      "c2-essay-endings-reflection",
      "c2-essay-endings-address",
      "c2-contrast-past-in-essays",
    ],
  },
  {
    slug: "literary-classical-endings",
    title: "Poetic and Classical Endings: -(으)리라, -도다, -로다, -누나, -노라, -(으)리오, -(으)랴",
    description:
      "The endings of modern poetry and classical verse (시조, 가사): promise and resolve (-(으)리라, -(으)리다, -노라), exclamation (-도다, -로다, -누나, -어라), classical statements (-나니, -더라, 하노라) and rhetorical questions (-(으)리오, -(으)랴, -(으)ㄹ쏘냐).",
    level: "C2",
    intro: [
      `Korean poetry, from 시조 to the 1920s-40s poets taught in every school, uses endings that no longer live in speech. They're few and regular, and once you can turn each into modern 한다체, the poems open up.`,
    ],
    sections: [
      {
        heading: `Promise and exclamation in modern poetry`,
        body: [
          `Resolve: -(으)리라 (I will), -(으)리다 / -(으)오리다 (I will, softer, addressed to someone), -노라. Exclamation: -도다, -로다 (after nouns), -누나, -어라, -구나, and the vocative (이)여. Read -(으)리라 as -겠다, and -도다 as -구나.`,
        ],
        table: {
          headers: ["Literary", "Modern 한다체"],
          rows: [
            ["가리라", "가겠다"],
            ["아름답도다", "아름답구나"],
            ["봄이로다", "봄이구나"],
            ["피었어라", "피었구나"],
            ["가노라", "간다 (I declare that I go)"],
          ],
        },
        examples: [
          { ko: "나는 끝까지 이 길을 가리라.", en: "I shall walk this road to the end." },
          { ko: "아, 봄이로다.", en: "Ah, it is spring." },
          { ko: "꽃이 피었어라.", en: "The flowers have bloomed!" },
        ],
      },
      {
        heading: `Classical verse: statements and rhetorical questions`,
        body: [
          `시조 statements use -노라, -도다, -나니 (and so), -더라 (I saw that), and the classic last words -(으)ㄴ가 하노라 'I wonder if ...': 꿈이런가 하노라 (I wonder, was it a dream?).`,
          `Rhetorical questions expect 'surely not': -(으)리오, -(으)랴, -(으)ㄹ쏘냐, often with 어찌: 어찌 잊으리오 = 결코 잊을 수 없다 (How could I forget? = I can never forget).`,
        ],
        examples: [
          { ko: "어찌 잊으리오.", en: "How could I ever forget?" },
          { ko: "이 몸이 죽은들 어찌 그 뜻을 버리랴.", en: "Even if I die, how could I abandon that cause?" },
          { ko: "꿈이런가 하노라.", en: "I wonder, was it all a dream?" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "어찌 잊으리오 = 나는 잊을 것이다.",
        right: "어찌 잊으리오 = 결코 잊을 수 없다.",
        why: `-(으)리오 is a rhetorical question meaning the opposite: 'surely not'.`,
      },
      {
        wrong: "선생님, 이 문제는 어렵도다.",
        right: "선생님, 이 문제는 어렵네요.",
        why: `-도다 is literary exclamation; in speech it sounds like a parody.`,
        register: true,
      },
      {
        wrong: "봄이도다.",
        right: "봄이로다.",
        why: `After a noun with 이다, the exclamation is -로다.`,
      },
    ],
    faqs: [
      {
        q: `Will I ever say these?`,
        a: `Mainly in jokes or quoting: 드디어 끝났도다! said playfully is fine. Otherwise they're for reading.`,
      },
      {
        q: `What's 하노라 at the end of a 시조?`,
        a: `A first-person 'I (feel / say) thus': it closes the poem with the speaker's own voice.`,
      },
    ],
    related: ["literary-endings", "reading-literary-prose", "old-speech-levels", "twentieth-century-texts"],
    lessons: [
      "c2-poetry-how-to-read",
      "c2-poetic-endings-resolve",
      "c2-poetic-endings-exclamation",
      "c2-figures-of-speech",
      "c2-classical-verse-form",
      "c2-classical-endings-statements",
      "c2-classical-endings-rhetorical",
    ],
  },
  {
    slug: "storyteller-endings",
    title: "Storytellers and Singers: -단다, -더래요, -답니다, -것다, -렷다",
    description:
      "How Korean tells a tale: folk-tale openings and endings (옛날 옛적에, -았 / 었답니다, -더래요, -단다), and the narrator's endings of 판소리 (-것다, -렷다, -로구나) with commands like 이리 오너라 and 물러가거라.",
    level: "C2",
    intro: [
      `Folk tales and 판소리 have their own narrative voice. A grandmother's tale uses hearsay and gentle 'you see' endings; a 판소리 singer narrates, comments and addresses the audience. Both are full of endings you'll recognise from reported speech, in new roles.`,
    ],
    sections: [
      {
        heading: `Folk-tale voice`,
        body: [
          `Tales open with 옛날 옛적에 (once upon a time), often 호랑이 담배 피우던 시절에 (when tigers smoked). They narrate with hearsay endings: -았 / 었대요, -았 / 었더래요 (so it's said), and to children -단다 / -았 / 었단다 (you see). The classic close is 그래서 둘은 오래오래 행복하게 살았답니다.`,
        ],
        examples: [
          { ko: "옛날 옛적에 호랑이 담배 피우던 시절에 한 나무꾼이 살았더래요.", en: "Once upon a time, when tigers still smoked, there lived a woodcutter." },
          { ko: "그래서 둘은 오래오래 행복하게 살았답니다.", en: "And so they lived happily ever after." },
          { ko: "그 호랑이는 다시는 마을에 오지 않았단다.", en: "And that tiger never came back to the village, you see." },
        ],
      },
      {
        heading: `판소리 narration`,
        body: [
          `In 판소리's spoken narration (아니리), the singer uses -것다 'and so he did' (그때 흥보가 박을 타것다), -렷다 'you must be' (네가 춘향이렷다), -로구나 (exclamation), and old commands: 이리 오너라 (come here; also the formula for calling at a gate), 물러가거라 (withdraw).`,
        ],
        examples: [
          { ko: "그때 흥보가 박을 타것다.", en: "And then Heungbo set to sawing the gourd." },
          { ko: "네가 춘향이렷다.", en: "You must be Chunhyang." },
          { ko: "이리 오너라!", en: "Come hither!" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "옛날 옛적에 한 나무꾼이 살아요.",
        right: "옛날 옛적에 한 나무꾼이 살았대요.",
        why: `Folk tales narrate in the past, usually with hearsay or -단다 / -답니다.`,
        register: true,
      },
      {
        wrong: "회의 끝나고 부장님께: 이리 오너라.",
        right: "부장님, 잠깐 이쪽으로 와 주시겠어요?",
        why: `오너라 is an archaic command from a superior; to a boss it's absurd, except as a joke between friends.`,
        register: true,
      },
    ],
    faqs: [
      {
        q: `Is -단다 still used?`,
        a: `Yes, by parents and grandparents telling stories or explaining to children: 해님은 매일 아침 떠오른단다.`,
      },
      {
        q: `Why 오너라 and not 와라?`,
        a: `오다 (and verbs ending in 오다) once took the special command -너라. It survives in fixed phrases and 사극.`,
      },
    ],
    related: ["reported-speech-short-forms", "old-speech-levels", "literary-classical-endings", "fiction-narration"],
    lessons: [
      "c2-sung-storytelling-intro",
      "c2-sung-storytelling-narrator-endings",
      "c2-storyteller-endings",
    ],
  },
  {
    slug: "old-speech-levels",
    title: "The Six Speech Levels: 하오체, 하게체 and Royal 하소서체",
    description:
      "The full speech-level system: 하십시오체, 하오체, 하게체, 해라체, 해요체 and 해체 side by side; 하오체 (-오 / -소, -(으)시오 on signs), 하게체 (-네, -나, -게, -세, 자네), royal speech in period dramas (-나이다, -옵니다, -(으)소서), and traps like modern -네.",
    level: "C2",
    intro: [
      `Modern Seoul speech uses four speech levels. Korean has had at least six, and the other two (하오체 and 하게체) are alive in signs, period dramas, older speakers' speech and literature. A seventh, royal 하소서체, fills every 사극.`,
    ],
    sections: [
      {
        heading: `Six levels on one chart`,
        body: [
          `Formality and deference are two separate axes. 하십시오체 and 해요체 are both deferential; 하오체 and 하게체 are 'middle' levels for equals or juniors with some respect; 해라체 and 해체 are plain.`,
        ],
        table: {
          headers: ["Level", "Statement", "Command"],
          rows: [
            ["하십시오체", "기다립니다", "기다리십시오"],
            ["하오체", "기다리오", "기다리시오"],
            ["하게체", "기다리네", "기다리게"],
            ["해라체", "기다린다", "기다려라"],
            ["해요체", "기다려요", "기다리세요"],
            ["해체", "기다려", "기다려"],
          ],
        },
      },
      {
        heading: `하오체 and 하게체`,
        body: [
          `하오체: -오 after a vowel or ㄹ-dropped stem (가오, 아오), -소 after a consonant (먹소, 좋소), 이오 after nouns (홍길동이오). Commands -(으)시오 survive on public signs: 밀지 마시오, 손대지 마시오. Exclamation: -구려 (고생이 많구려).`,
          `하게체: statements -네 (잘 왔네), questions -나 / -는가 (밥은 먹었나?), commands -게 (이리 앉게), suggestions -세 (같이 가세), with 자네 'you'. It's how a father-in-law might speak to a son-in-law, or a professor to a grown-up former student.`,
          `Trap: modern casual -네 (와, 좋네!) is a 해체 exclamation, not 하게체.`,
        ],
        examples: [
          { ko: "당신은 어디 가오?", en: "Where are you going?" },
          { ko: "밀지 마시오.", en: "Do not push." },
          { ko: "자네, 이리 앉게.", en: "Sit down here, my boy." },
          { ko: "날이 좋으니 같이 가세.", en: "It's a fine day, so let's go together." },
        ],
      },
      {
        heading: `Royal speech: 하소서체`,
        body: [
          `Subjects address a king with -나이다, -옵니다 and -(으)소서: 통촉하여 주시옵소서 (Please consider it, Your Majesty), 성은이 망극하옵니다 (Your grace is boundless). Address: 전하 (Your Majesty), 마마; self-reference: 소인, 소녀, 신. The king answers in 해라체 or 하게체.`,
        ],
        examples: [
          { ko: "전하, 통촉하여 주시옵소서.", en: "Your Majesty, I beg you to consider this." },
          { ko: "성은이 망극하옵니다.", en: "Your grace is boundless." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "선생님, 어디 가시오?",
        right: "선생님, 어디 가세요?",
        why: `하오체 sounds old-fashioned or like a sign; to a teacher today, use 해요체 or 하십시오체.`,
        register: true,
      },
      {
        wrong: "밥을 먹오.",
        right: "밥을 먹소.",
        why: `After a consonant stem, the 하오체 statement is -소.`,
      },
      {
        wrong: "할아버지께: 자네 식사했나?",
        right: "할아버지, 진지 드셨어요?",
        why: `하게체 is used to juniors, never to elders.`,
        register: true,
      },
    ],
    faqs: [
      {
        q: `Does anyone under 60 use 하오체?`,
        a: `Rarely in speech, except jokingly or in dramas. Its commands live on in signs and instructions.`,
      },
      {
        q: `Is 하게체 rude?`,
        a: `No: it shows respect to someone junior, more than 반말 does. It just sounds old-fashioned now.`,
      },
    ],
    related: ["speech-levels-and-register", "formal-speech-hamnida", "storyteller-endings", "screen-register-switches"],
    lessons: [
      "c2-six-speech-levels",
      "c2-old-semi-formal-statements",
      "c2-old-semi-formal-commands",
      "c2-old-familiar-statements",
      "c2-old-familiar-commands",
      "c2-royal-speech",
      "c2-contrast-six-levels",
      "c2-listening-period-drama",
    ],
  },
  {
    slug: "middle-korean-glimpse",
    title: "A Glimpse of Middle Korean: Hangul's Design, Lost Letters and Old Spellings",
    description:
      "For recognition: how Hangul was designed (1443 creation, 1446 promulgation), the lost letters ㆍ, ㅿ, ㆆ, ㆁ, linked spelling and other Middle Korean conventions, words that changed meaning (어리다, 어엿브다, 얼굴) and how modern spelling rules came about.",
    level: "C2",
    intro: [
      `Hangul was created in 1443 and promulgated in 1446. The Korean of that time, Middle Korean, used letters and spellings that have since disappeared. You won't speak it, but recognising it lets you read old texts, signs and brand logos, and understand why modern spelling looks the way it does. (Old letters on this page are not read aloud.)`,
    ],
    sections: [
      {
        heading: `Design and lost letters`,
        body: [
          `The basic consonants were drawn from the speech organs (ㄱ, ㄴ, ㅁ, ㅅ, ㅇ), and strokes were added for stronger sounds (ㄱ → ㅋ, ㄴ → ㄷ → ㅌ). Vowels came from heaven, earth and person: a dot, a horizontal line and a vertical line.`,
          `Lost letters: ㆍ (아래아, a vowel between ㅏ and ㅗ, still heard in Jeju), ㅿ (a z-like sound), ㆆ (a glottal stop), ㆁ (the ng sound, later merged into ㅇ). ㆍ survives in retro shop signs and logos.`,
        ],
      },
      {
        heading: `Middle Korean spelling`,
        body: [
          `Middle Korean often wrote words as they sounded across syllable boundaries (linked spelling): 기픈 for 깊은, 사ᄅᆞ미 for 사람이. There was no palatalisation yet: 됴타 later became 좋다. Clusters could begin a syllable, and dots beside a syllable marked pitch.`,
          `The famous opening of the Hangul proclamation reads 나랏말ᄊᆞ미 듕귁에 달아: 'Our country's speech differs from China's'.`,
        ],
        examples: [
          { ko: "나랏말ᄊᆞ미 듕귁에 달아", en: "The speech of our country differs from that of China. (1446; not read aloud)" },
        ],
      },
      {
        heading: `Words that changed meaning`,
        body: [
          `Many common words have shifted: 어리다 (once 'foolish', now 'young'), 어엿브다 (once 'pitiable', now 어여쁘다 'pretty'), 얼굴 (once 'form, whole appearance', now 'face'), 놈 (once just 'person', now a rude word for a man).`,
          `Modern spelling comes from the 1933 unified rules and the 1988 revision. 독립신문 (1896) was the first all-Hangul newspaper and introduced spacing between words.`,
        ],
        examples: [
          { ko: "옛날에는 어리다가 어리석다는 뜻이었다.", en: "In the old days, this word meant 'foolish'." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "한글은 1446년에 처음 만들어졌다.",
        right: "한글은 1443년에 창제되어 1446년에 반포되었다.",
        why: `1443 is the creation; 1446 is the promulgation.`,
      },
      {
        wrong: "옛 문헌에서 어엿브다는 '예쁘다'라는 뜻이다.",
        right: "옛 문헌에서 어엿브다는 '불쌍하다'라는 뜻이다.",
        why: `Watch for words whose meaning has shifted; read old texts with the old sense.`,
      },
    ],
    faqs: [
      {
        q: `Why is 한글날 on 9 October?`,
        a: `It marks the promulgation in 1446, dated from the surviving 훈민정음 해례본.`,
      },
      {
        q: `Can I type the old letters?`,
        a: `Yes, they are in Unicode, but you need a font that supports them; many phones show boxes.`,
      },
    ],
    related: ["how-hangul-works", "twentieth-century-texts", "dialects-jeolla-chungcheong-jeju", "reading-literary-prose"],
    lessons: [
      "c2-hangul-design-principles",
      "c2-lost-letters",
      "c2-reading-preface",
      "c2-middle-korean-spelling",
      "c2-semantic-change",
      "c2-spelling-reform-history",
      "c2-listening-hangul-museum",
    ],
  },
  {
    slug: "dialects-gyeongsang",
    title: "Gyeongsang Dialect: Pitch, -나 vs -노, and Everyday Words",
    description:
      "Understanding Gyeongsang (경상도) speech from Busan and Daegu: pitch accent (가가 가가?), yes/no -나 vs question-word -노, statements and polite speech (아이가, -예, -습니더, 카다), key words (단디, 억수로, 퍼뜩) and sound changes.",
    level: "C2",
    intro: [
      `Korea's dialects differ mainly in endings, sounds and some vocabulary, and the grammar underneath is shared. This course teaches you to understand dialects first and use them only when invited: imitation by outsiders can sound mocking.`,
      `Gyeongsang dialect is the most widely heard after Seoul speech: in Busan, Daegu, and many dramas and comedies.`,
    ],
    sections: [
      {
        heading: `Pitch and questions`,
        body: [
          `Gyeongsang speech keeps pitch accent: high and low pitch tell words apart. The famous 가가 가가? means 'Is that kid the one (we talked about)?', with pitch doing the work.`,
          `Questions split by type. Yes/no questions end in -나 (or -가 after nouns): 밥 뭇나? (Did you eat?), 니 학생이가? (Are you a student?). Questions with a question word end in -노 (or -고 after nouns): 뭐 하노? (What are you doing?), 니 누고? (Who are you?).`,
        ],
        table: {
          headers: ["Question type", "Gyeongsang", "Seoul"],
          rows: [
            ["yes / no", "밥 뭇나?", "밥 먹었어?"],
            ["yes / no, noun", "니 학생이가?", "너 학생이야?"],
            ["question word", "어디 가노?", "어디 가?"],
            ["question word, noun", "이게 뭐고?", "이게 뭐야?"],
          ],
        },
      },
      {
        heading: `Statements, politeness and words`,
        body: [
          `Statements: 간데이 (I'm going), 맞데이, 아이다 (no), 아이가 (isn't it?). Polite: -예 (예, 아니예), -습니더 / -심더 (고맙습니더), 어서 오이소, 단디 하이소. Quoting uses 카다: 머라 카노? (What's he saying?).`,
          `Words: 단디 (carefully), 억수로 (very), 마이 (a lot), 퍼뜩 (quickly), 고마 (just, stop it), 와? (why?), 할매 / 할배. Sounds: ㅆ often heard as ㅅ (쌀 [살]), and 기름 heard as [지름].`,
        ],
        examples: [
          { ko: "니 어디 가노?", en: "Where are you going?" },
          { ko: "단디 해라.", en: "Do it properly." },
          { ko: "억수로 덥네.", en: "It's really hot." },
          { ko: "어서 오이소.", en: "Welcome, come on in." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "니 어디 가나?",
        right: "니 어디 가노?",
        why: `With a question word (어디), Gyeongsang speech uses -노. -나 is for yes/no questions. Outsiders imitating the dialect often mix them up.`,
      },
      {
        wrong: "니 학생이고?",
        right: "니 학생이가?",
        why: `A yes/no question about a noun takes -가; -고 is for question-word questions (니 누고?).`,
      },
      {
        wrong: "면접에서: 억수로 열심히 하겠습니더.",
        right: "정말 열심히 하겠습니다.",
        why: `Unless you're from the region, put on dialect can sound mocking; job interviews expect standard speech.`,
        register: true,
      },
    ],
    faqs: [
      {
        q: `Will people mind if I use Gyeongsang words?`,
        a: `A word or two with friends from the region is usually received warmly. Full imitation can sound like teasing.`,
      },
      {
        q: `Is Busan speech different from Daegu speech?`,
        a: `Yes, in intonation and some endings, though both are Gyeongsang. Locals hear the difference instantly.`,
      },
    ],
    related: ["dialects-jeolla-chungcheong-jeju", "north-korean-standard", "screen-register-switches", "pronunciation-rules"],
    lessons: [
      "c2-dialects-overview",
      "c2-gyeongsang-pitch-accent",
      "c2-gyeongsang-questions",
      "c2-gyeongsang-statements-polite",
      "c2-gyeongsang-words",
      "c2-gyeongsang-sounds",
      "c2-contrast-busan-daegu",
    ],
  },
  {
    slug: "dialects-jeolla-chungcheong-jeju",
    title: "Jeolla, Chungcheong and Jeju: Endings, Words and a Language at Risk",
    description:
      "Understanding three regional varieties: Jeolla (-잉, -당께, 거시기, 오메, 싸게), Chungcheong (-유, 뭐여?, 그려, the polite indirect no) and Jeju (혼저 옵서예, -수다 / -우꽈, 감수다, 무사, 아래아), with the debate over whether 제주어 is a dialect or a language.",
    level: "C2",
    intro: [
      `Three more regions with famous voices: Jeolla's emphatic endings, Chungcheong's drawn-out politeness, and Jeju's speech, so distinct that UNESCO lists it as critically endangered and many call it a separate language.`,
    ],
    sections: [
      {
        heading: `Jeolla (전라도)`,
        body: [
          `Endings: -잉 softens or presses a point (it isn't a question), -당께 / -랑께 insists (내가 했당께), 근디 (그런데), 뭐 한당가? (What are you doing?). Polite: 했어라, 오씨요. Exclamations 오메, 아따; intensifiers 겁나, 징하게. 싸게 means 'quickly', not 'cheaply'.`,
          `거시기 is the all-purpose word: a noun, a verb (거시기하다) and a filler, filled in by context. It has spread across Korea.`,
        ],
        examples: [
          { ko: "내가 했당께.", en: "I'm telling you, I did it." },
          { ko: "싸게 와잉.", en: "Come quickly, OK?" },
          { ko: "그 거시기 있잖아.", en: "You know, that thingy." },
        ],
      },
      {
        heading: `Chungcheong (충청도)`,
        body: [
          `Endings: -유 for polite speech (그래유, 괜찮아유, 했슈), -여 for questions and statements (뭐여?, 맞는겨?), 그려 (yes, right). Chungcheong speech is famous for indirectness: 괜찮아유 can be a polite no, and requests come roundabout.`,
        ],
        examples: [
          { ko: "괜찮아유.", en: "It's fine. (often a polite no)" },
          { ko: "이게 뭐여?", en: "What's this?" },
        ],
      },
      {
        heading: `Jeju (제주어)`,
        body: [
          `Greetings: 혼저 옵서예 (welcome; 혼저 means 'quickly, please'), 폭삭 속았수다 (thank you for all your hard work; nothing to do with being cheated). Polite statements -수다 / -우다 (좋수다), questions -수과 / -우꽈 (얼마우꽈?), commands 옵서, 갑서. Progressive: 감수다 'I'm going', 먹엄수다 'I'm eating'. Words: 무사 (why), 게메 (well, I don't know), 하르방 and 할망.`,
          `The old vowel ㆍ (아래아) survives in Jeju pronunciation, between ㅏ and ㅗ.`,
        ],
        examples: [
          { ko: "혼저 옵서예.", en: "Welcome." },
          { ko: "폭삭 속았수다.", en: "Thank you for all your hard work." },
          { ko: "이거 얼마우꽈?", en: "How much is this?" },
          { ko: "무사 경 햄수과?", en: "Why are you doing that?" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "폭삭 속았수다 = 완전히 속았어요.",
        right: "폭삭 속았수다 = 정말 수고 많으셨습니다.",
        why: `속다 here is Jeju 'to work hard, suffer', not standard 'be deceived'.`,
      },
      {
        wrong: "감수다 = 갔어요.",
        right: "감수다 = 가고 있어요.",
        why: `The Jeju -(으)ㅁ수다 form is progressive, not past.`,
      },
    ],
    faqs: [
      {
        q: `Is 제주어 a dialect or a language?`,
        a: `It's debated. Seoul speakers often can't understand older Jeju speech, and UNESCO classes it as a separate, critically endangered language (2010).`,
      },
      {
        q: `Why does 거시기 work?`,
        a: `Because Korean is so context-heavy: when both speakers know what's meant, a placeholder word is enough.`,
      },
    ],
    related: ["dialects-gyeongsang", "middle-korean-glimpse", "north-korean-standard", "spoken-korean-contractions-fillers"],
    lessons: [
      "c2-jeolla-endings-casual",
      "c2-jeolla-endings-polite",
      "c2-whatchamacallit",
      "c2-jeolla-words",
      "c2-chungcheong-endings",
      "c2-chungcheong-indirectness",
      "c2-contrast-regional-endings",
      "c2-jeju-language-status",
      "c2-jeju-greetings",
      "c2-jeju-polite-endings",
      "c2-jeju-aspect-linking",
      "c2-jeju-sounds-words",
    ],
  },
  {
    slug: "north-korean-standard",
    title: "North Korean Standard (문화어): Spelling, Purified Words and False Friends",
    description:
      "How North Korea's 문화어 differs from South Korea's 표준어: no initial-sound rule (로동, 력사, 녀자), spacing and -여 spellings (되였다), purified words (남새, 곽밥, 손전화), Russian-route loanwords, and false friends (오징어 / 낙지, 일없다, 동무).",
    level: "C2",
    intro: [
      `Since 1945 the two Koreas have developed separate standards: South Korea's 표준어, based on Seoul speech, and North Korea's 문화어 (1966), based on Pyongyang speech. The grammar is almost entirely shared; the differences are in spelling, vocabulary and some loanwords.`,
    ],
    sections: [
      {
        heading: `Spelling`,
        body: [
          `North Korea doesn't apply the initial-sound rule (두음 법칙), so ㄹ and ㄴ stay at the start of words: 로동 (노동), 력사 (역사), 리발 (이발), 녀자 (여자), 래일 (내일), 량심 (양심). Surnames too: 리 (이), 류 (유). These aren't typos.`,
          `Other differences: more words written together (할수 있다), no 사이시옷 (나무가지 for 나뭇가지), and -여 after ㅣ and ㅐ stems (되였다, 피였다).`,
        ],
        table: {
          headers: ["South (표준어)", "North (문화어)"],
          rows: [
            ["노동", "로동"],
            ["역사", "력사"],
            ["여자", "녀자"],
            ["나뭇가지", "나무가지"],
            ["되었다", "되였다"],
          ],
        },
      },
      {
        heading: `Vocabulary`,
        body: [
          `Purified words (다듬은 말) replace loans and Sino-Korean: 남새 (채소, vegetables), 곽밥 (도시락, packed lunch), 손전화 (휴대폰), 살결물 (스킨, skin toner), 단물 (주스), 얼음과자 (아이스크림). Loanwords often came via Russian: 뜨락또르 (트랙터), 땅크 (탱크), 콤퓨터 (컴퓨터).`,
          `False friends: 오징어 and 낙지 are swapped (in the North, 오징어 is the octopus-like one), 일없다 means 'no problem' (in Seoul it sounds rude), and 동무 means 'comrade' (in the South, an old word for 'friend').`,
        ],
        examples: [
          { ko: "일없습니다.", en: "No problem. (North; in the South it can sound like 'none of your business')" },
          { ko: "손전화로 련락하라.", en: "Contact me by mobile phone. (North Korean spelling)" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "남한 신문 기사: 로동 시간이 줄었다.",
        right: "노동 시간이 줄었다.",
        why: `로동 is correct North Korean spelling, not a typo, but South Korean writing follows 표준어: 노동.`,
        register: true,
      },
      {
        wrong: "서울에서: 커피 더 드릴까요? — 일없어요.",
        right: "괜찮아요.",
        why: `In the South, 일없다 sounds curt or rude.`,
        register: true,
      },
    ],
    faqs: [
      {
        q: `Can North and South Koreans understand each other?`,
        a: `Yes, with occasional confusion over vocabulary, especially loanwords. Defectors often say South Korean speech feels 'full of English'.`,
      },
      {
        q: `Is there a joint dictionary?`,
        a: `The 겨레말큰사전 project began as a joint effort to record both standards, though work has been interrupted by politics.`,
      },
    ],
    related: ["dialects-gyeongsang", "spelling-traps", "pronunciation-rules", "translation-precision"],
    lessons: [
      "c2-two-standards-history",
      "c2-nk-spelling-initial-sounds",
      "c2-nk-spelling-spacing",
      "c2-nk-purified-words",
      "c2-nk-loanwords",
      "c2-nk-false-friends",
      "c2-reading-nk-media-style",
      "c2-listening-nk-speech",
      "c2-contrast-same-text-two-standards",
    ],
  },
  {
    slug: "slang-and-internet-korean",
    title: "Slang, New Words and Internet Korean",
    description:
      "How Korean shortens (생파, 비번, 갑분싸, 별다줄), new words adults use (소확행, 워라밸, 가성비, 얼죽아, 혼밥, 오운완), chatting in initial consonants (ㅋㅋ, ㅇㅇ, ㄱㅅ), intensifiers (개-, 꿀-, 노잼, 킹받다), internet endings (음슴체, 했당) and teen wordplay (댕댕이, 띵작).",
    level: "C2",
    intro: [
      `Korean slang is productive because syllable blocks clip so neatly: take the first syllable of each word and you have a new one. Much of it fades fast, but some becomes standard vocabulary in the news. The aim here is to recognise it, and to know who you can use it with.`,
    ],
    sections: [
      {
        heading: `Clipping and new words`,
        body: [
          `Two-syllable clippings: 생파 (생일 파티), 비번 (비밀번호), 생선 (생일 선물; also 'fish'). Phrase acronyms: 갑분싸 (갑자기 분위기 싸해짐, the mood suddenly went cold), 별다줄 (별걸 다 줄인다, you shorten everything).`,
          `New words adults use: 소확행 (small but certain happiness), 워라밸 (work-life balance), 가성비 (value for money), 얼죽아 (iced Americano even if I freeze), 혼밥 / 혼술 (eating / drinking alone), 내돈내산 (bought with my own money; not sponsored), 오운완 (today's workout done).`,
        ],
        examples: [
          { ko: "이 식당 가성비 진짜 좋다.", en: "This restaurant is really good value." },
          { ko: "요즘 혼밥하는 사람이 많아요.", en: "Lots of people eat alone these days." },
          { ko: "나는 겨울에도 얼죽아야.", en: "I drink iced Americano even in winter." },
        ],
      },
      {
        heading: `Chat, intensifiers and endings`,
        body: [
          `Initial-consonant chat: ㅋㅋ (laughing), ㅎㅎ (a softer smile), ㅠㅠ (crying), ㅇㅇ (yes), ㅇㅋ (OK), ㄱㅅ (thanks), ㅊㅋ (congrats). A single ㅋ can read as cold, and ㅇㅇ to a 팀장님 is rude.`,
          `Intensifiers: 개- (개좋다; not 'dog', and too rough for elders), 꿀- (꿀잼, 꿀팁), 노잼 (boring), 킹받다 (really annoyed). Internet endings: 음슴체 in community posts (오늘 회사 감. 팀장님 또 화냄.), cute endings (고마워용, 했당). Wordplay: 댕댕이 (멍멍이, from letter shapes), 띵작 (명작).`,
        ],
        examples: [
          { ko: "그 영화 꿀잼이었어.", en: "That film was so much fun." },
          { ko: "오늘 회사 감. 팀장님 또 화냄.", en: "Went to work today. Team leader angry again." },
          { ko: "우리 댕댕이 너무 귀여워.", en: "Our doggo is so cute." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "팀장님께 메시지: ㅇㅇ 알겠습니다.",
        right: "네, 알겠습니다.",
        why: `ㅇㅇ is casual between friends; to a senior it reads as dismissive.`,
        register: true,
      },
      {
        wrong: "할머니께: 할머니 음식 개맛있어요!",
        right: "할머니, 음식 정말 맛있어요!",
        why: `개- is rough slang; to elders, use 정말 or 너무.`,
        register: true,
      },
      {
        wrong: "보고서: 이 제품은 가성비 갑임.",
        right: "보고서: 이 제품은 가격 대비 성능이 우수하다.",
        why: `가성비 has entered the news, but 갑 and 음슴체 are internet register.`,
        register: true,
      },
    ],
    faqs: [
      {
        q: `Should I learn slang?`,
        a: `Learn to understand it: it's in dramas, variety shows and comments. Use it only with friends your own age.`,
      },
      {
        q: `Why do some new words sound dated already?`,
        a: `Slang turns over fast. Words that fill a real gap (가성비, 혼밥) last; jokes fade.`,
      },
    ],
    related: ["spoken-korean-contractions-fillers", "humour-satire-and-irony", "screen-register-switches", "casual-speech-banmal"],
    lessons: [
      "c2-slang-how-korean-shortens",
      "c2-slang-everyday-new-words",
      "c2-chat-initial-consonants",
      "c2-slang-intensifiers",
      "c2-internet-endings",
      "c2-teen-speech-wordplay",
      "c2-reading-online-community",
      "c2-listening-variety-show",
      "c2-contrast-slang-register",
    ],
  },
  {
    slug: "humour-satire-and-irony",
    title: "Humour, Sarcasm and Satire: Puns, -답시고, -다나 뭐라나",
    description:
      "How Korean is funny and how it bites: homophone puns and dad jokes (아재 개그), number puns (8282, 1004), spoken sarcasm (퍽이나, 잘~ 한다, 어련하시겠어요), sarcastic grammar (-답시고, -다나 뭐라나, 이른바) and the devices of satirical columns.",
    level: "C2",
    intro: [
      `Humour and sarcasm are the last frontier of a language. Korean humour leans heavily on homophones and sound; Korean sarcasm leans on intonation and a few biting grammatical patterns.`,
    ],
    sections: [
      {
        heading: `Puns and dad jokes`,
        body: [
          `Korean's many homophones make puns easy. Dad jokes (아재 개그) are groan-worthy puns: 세상에서 가장 가난한 왕은? — 최저 임금 (The poorest king? The minimum wage: 임금 means both 'king' and 'wage'). Number puns: 8282 (빨리빨리, quickly), 1004 (천사, angel).`,
        ],
        examples: [
          { ko: "세상에서 가장 가난한 왕은? 최저 임금!", en: "Who's the poorest king in the world? The minimum wage! (the word for 'wage' also means 'king')" },
          { ko: "8282 와!", en: "Come quick! (8282 sounds like 'quick quick')" },
        ],
      },
      {
        heading: `Sarcasm in speech`,
        body: [
          `Spoken sarcasm depends on intonation: 퍽이나 그러겠다 (Yeah, right), 잘~ 한다! (Well done, said of a mistake), 어련하시겠어요 (Of course you would, sir), 그럼 그렇지 (I knew it), 참 빨리도 오셨네요 (Nice of you to finally show up). Written down without context, they can look sincere.`,
        ],
        examples: [
          { ko: "퍽이나 그러겠다.", en: "Yeah, right." },
          { ko: "참 빨리도 오셨네요.", en: "Well, you took your time." },
        ],
      },
      {
        heading: `Sarcastic grammar and satire`,
        body: [
          `-답시고 mocks a claimed purpose: 돕는답시고 일을 더 키웠다 (Supposedly helping, he made it worse). With nouns, -(이)랍시고: 회의랍시고 모여서 커피만 마셨다. -다나 뭐라나 dismisses someone's excuse: 바쁘다나 뭐라나 하면서 안 왔다. 이른바 and 소위 ('so-called') distance the writer from a term, often with quotation marks.`,
          `Satirical columns use mock praise, exaggeration and irony: praising a policy so warmly that its absurdity shows.`,
        ],
        examples: [
          { ko: "돕는답시고 일을 더 키웠다.", en: "He was supposedly helping, but he made it worse." },
          { ko: "바쁘다나 뭐라나 하면서 결국 안 왔어.", en: "Said he was busy or something, and didn't show up in the end." },
          { ko: "이른바 \"혁신\"이라는 이름으로 직원만 줄었다.", en: "In the name of so-called 'innovation', only the staff were cut." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "선생님, 정말 돕는답시고 감사합니다.",
        right: "선생님, 도와주셔서 정말 감사합니다.",
        why: `-답시고 is mocking; it can never express real thanks.`,
      },
      {
        wrong: "회의라답시고 모였다.",
        right: "회의랍시고 모였다.",
        why: `With a noun, the form is -(이)랍시고.`,
      },
      {
        wrong: "상사에게: 퍽이나 그러시겠네요.",
        right: "아, 그러시군요.",
        why: `퍽이나 is sarcastic and would be insolent to a superior.`,
        register: true,
      },
    ],
    faqs: [
      {
        q: `How do I tell sarcasm in text messages?`,
        a: `Context, overpoliteness (어련하시겠어요), stretched vowels (자~알 한다), and emoticons like ^^ in a tense conversation are all signals.`,
      },
      {
        q: `Are dad jokes really popular?`,
        a: `As a genre, yes: people groan, but they appear in ads, variety shows and classrooms.`,
      },
    ],
    related: ["slang-and-internet-korean", "rhetoric-and-persuasion", "attitude-endings", "journalism-and-broadcast"],
    lessons: [
      "c2-humour-homophones",
      "c2-dad-jokes",
      "c2-number-sound-puns",
      "c2-word-games",
      "c2-how-jokes-work",
      "c2-satire-irony-terms",
      "c2-spoken-sarcasm",
      "c2-sarcastic-grammar",
      "c2-column-devices",
    ],
  },
  {
    slug: "legal-korean",
    title: "Legal Korean: Statutes, Provisos, Contracts and Judgments",
    description:
      "Reading Korean law at mastery level: statute structure (조, 항, 호), statute endings, provisos and exceptions (다만, -에도 불구하고, 그러하지 아니하다), contract clauses, court judgments (기각한다, 처한다), criminal procedure (피의자 / 피고인), and plain-language rewrites.",
    level: "C2",
    intro: [
      `C1 introduced contracts and notices. C2 reads the law itself: statutes, judgments and procedure. The language is archaic in places, but highly regular, and the plain-language movement is slowly modernising it.`,
    ],
    sections: [
      {
        heading: `Statutes and provisos`,
        body: [
          `Laws are divided into 조 (article), 항 (paragraph) and 호 (item): 제3조 제2항 제1호. Each article opens with its purpose in brackets: 제1조(목적). Endings: -ㄴ / 는다 for rules, -하여야 한다 (shall), -(으)ㄹ 수 있다 (may), -아 / 어서는 아니 된다 (shall not).`,
          `Provisos: 다만, ... 그러하지 아니하다 (provided that ... this shall not apply). 'Notwithstanding' is -에도 불구하고: 제2항에도 불구하고.`,
        ],
        examples: [
          { ko: "누구든지 정당한 이유 없이 타인의 정보를 수집하여서는 아니 된다.", en: "No person shall collect another person's information without good reason." },
          { ko: "다만, 본인의 동의가 있는 경우에는 그러하지 아니하다.", en: "Provided that this shall not apply where the person has consented." },
        ],
      },
      {
        heading: `Judgments and procedure`,
        body: [
          `Judgments have a fixed order (주문 'ruling' first, then 이유 'reasons') and fixed verbs: 원고의 청구를 기각한다 (the plaintiff's claim is dismissed), 피고인을 징역 1년에 처한다 (the defendant is sentenced to one year in prison). Procedure distinguishes 피의자 (a suspect, before indictment) from 피고인 (the accused, after indictment).`,
          `Plain-language rewrites turn 하여야 한다 into 해야 한다, and replace heavy Sino-Korean with everyday words.`,
        ],
        examples: [
          { ko: "원고의 청구를 기각한다.", en: "The plaintiff's claim is dismissed." },
          { ko: "피고인을 징역 1년에 처한다.", en: "The defendant is sentenced to one year's imprisonment." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "경찰이 피고인을 조사했다.",
        right: "경찰이 피의자를 조사했다.",
        why: `Before indictment, a suspect is 피의자; 피고인 only after charges are filed.`,
      },
      {
        wrong: "다만, 동의가 있는 경우에는 그러하지 않아요.",
        right: "다만, 동의가 있는 경우에는 그러하지 아니하다.",
        why: `The legal proviso formula is fixed.`,
        register: true,
      },
    ],
    faqs: [
      {
        q: `Why is legal Korean so hard?`,
        a: `It's heavily Sino-Korean, sentences are long, and some formulas are a century old. Plain-language reforms are ongoing.`,
      },
      {
        q: `What's the difference between 기각 and 각하?`,
        a: `기각 dismisses a claim on its merits; 각하 rejects it on procedural grounds without looking at the merits.`,
      },
    ],
    related: ["legal-and-official-style", "formal-noun-phrases", "medical-korean", "journalism-and-broadcast"],
    lessons: [
      "c2-legal-statute-structure",
      "c2-legal-statute-endings",
      "c2-legal-provisos-exceptions",
      "c2-legal-contract-clauses",
      "c2-legal-court-judgment",
      "c2-legal-criminal-procedure",
      "c2-legal-plain-language",
    ],
  },
  {
    slug: "medical-korean",
    title: "Medical Korean: Describing Pain, Consultations and Prescriptions",
    description:
      "The Korean of hospitals and pharmacies: describing pain precisely (쑤시다, 욱신거리다, 따끔하다, 뻐근하다, 저리다), the consultation, the hospital system, test results, consent forms, prescription instructions (식후 30분, 복용하다), and Korean medicine (한의원).",
    level: "C2",
    intro: [
      `Medical Korean combines two very different registers: vivid native words for how something feels, and formal Sino-Korean for diagnosis, tests and forms. Patients need the first; reading forms needs the second.`,
    ],
    sections: [
      {
        heading: `Describing pain and symptoms`,
        body: [
          `Korean distinguishes types of pain with native verbs, many of them sound-symbolic: 쑤시다 (ache, throb in joints), 욱신거리다 (throb), 콕콕 찌르다 (stabbing), 따끔하다 (sting), 뻐근하다 (stiff), 저리다 (numb, tingling), 더부룩하다 (bloated), 메스껍다 (nauseous). Add when and how: 밤에 더 심해요, 계속 그래요, 가끔 그래요.`,
        ],
        examples: [
          { ko: "무릎이 쑤시고 계단을 오를 때 더 아파요.", en: "My knee aches, and it's worse climbing stairs." },
          { ko: "손가락 끝이 저려요.", en: "My fingertips are tingling." },
          { ko: "밥을 먹으면 속이 더부룩해요.", en: "I feel bloated after eating." },
        ],
      },
      {
        heading: `Consultation, forms and prescriptions`,
        body: [
          `Consultations use formal verbs: 진료를 받다 (see a doctor), 검사를 받다 (have a test), 처방하다 (prescribe). Results: 정상 (normal), 이상 소견 (abnormal findings), 수치가 높다. Consent forms list 부작용 (side effects) and 합병증 (complications).`,
          `Prescriptions: 하루 세 번, 식후 30분에 복용하세요 (Take three times a day, 30 minutes after meals). Korean medicine (한의원) uses its own words: 침 (acupuncture), 한약 (herbal medicine).`,
        ],
        examples: [
          { ko: "하루 세 번, 식후 30분에 복용하세요.", en: "Take three times a day, 30 minutes after meals." },
          { ko: "검사 결과는 모두 정상입니다.", en: "All the test results are normal." },
          { ko: "드물게 어지러움 등의 부작용이 나타날 수 있습니다.", en: "Side effects such as dizziness may occur in rare cases." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "약을 식후 30분에 복용해 드세요.",
        right: "식후 30분에 복용하세요.",
        why: `복용하다 already means 'take (medicine)'; don't double the verb.`,
        register: true,
      },
      {
        wrong: "의사에게: 그냥 아파요.",
        right: "머리가 욱신거려요.",
        why: `A precise pain word helps the diagnosis. 아프다 is correct but tells the doctor little.`,
        register: true,
      },
    ],
    faqs: [
      {
        q: `Is 먹다 OK for medicine?`,
        a: `Yes, 약을 먹다 is everyday Korean. 복용하다 is the formal word on labels and from pharmacists.`,
      },
      {
        q: `What's 내과 vs 외과?`,
        a: `내과 is internal medicine; 외과 is surgery. Many small clinics are named by specialty: 이비인후과 (ENT), 피부과 (dermatology).`,
      },
    ],
    related: ["sound-and-shape-words", "hada-doeda-sikida", "legal-korean", "translation-precision"],
    lessons: [
      "c2-medical-describing-pain",
      "c2-medical-consultation",
      "c2-medical-hospital-system",
      "c2-medical-test-results",
      "c2-medical-consent-forms",
      "c2-medical-prescriptions-pharmacy",
      "c2-medical-mind-and-korean-medicine",
    ],
  },
  {
    slug: "journalism-and-broadcast",
    title: "Journalism and Broadcast Korean: Leads, Attribution, Anchors and Narration",
    description:
      "Writing and speaking like Korean journalists: the lead, attribution verbs (밝혔다, 전했다, 해명했다), unconfirmed reports (-(으)ㄴ 것으로 알려졌다 / 전해졌다), quotations, headlines and captions, corrections (바로잡습니다), anchor openings, live crosses, weather (-겠습니다) and documentary narration.",
    level: "C2",
    intro: [
      `B2 taught you to read the news. C2 teaches you to write and present it: choosing attribution verbs with care, signalling how sure you are, and switching between print and broadcast style.`,
    ],
    sections: [
      {
        heading: `Attribution and certainty`,
        body: [
          `Attribution verbs carry stance: 밝혔다 (stated, neutral), 전했다 (relayed), 주장했다 (claimed, slightly distancing), 지적했다 (pointed out), 해명했다 (explained, in response to criticism), 반박했다 (rebutted). Unconfirmed information is flagged: -(으)ㄴ 것으로 알려졌다 (is known / reported to), -(으)ㄴ 것으로 전해졌다 (is said to), 관계자에 따르면.`,
          `Corrections use a fixed heading: 바로잡습니다.`,
        ],
        examples: [
          { ko: "회사 측은 \"사실과 다르다\"고 해명했다.", en: "The company explained that the claim was untrue." },
          { ko: "두 사람은 지난달 비공개로 만난 것으로 전해졌다.", en: "The two are said to have met privately last month." },
        ],
      },
      {
        heading: `Broadcast style`,
        body: [
          `Anchors open with 안녕하십니까, introduce reports with ...기자가 보도합니다, and hand over to reporters live: 현장에 나가 있는 김민수 기자 연결합니다. 김민수 기자, 전해 주시죠. Reporters sign off with their name: ○○뉴스 김민수입니다.`,
          `Weather forecasts use -겠습니다: 내일은 전국에 비가 오겠습니다. Documentary narration uses 한다체 present: 해마다 봄이 되면 이곳에 수천 마리의 철새가 찾아온다.`,
        ],
        examples: [
          { ko: "현장에 나가 있는 김민수 기자 연결합니다.", en: "We go live to our reporter on the scene, Kim Minsu." },
          { ko: "내일은 전국에 비가 오겠습니다.", en: "Tomorrow there will be rain nationwide." },
          { ko: "해마다 봄이 되면 이곳에 수천 마리의 철새가 찾아온다.", en: "Every spring, thousands of migratory birds come here." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "장관은 사실이 아니라고 주장했다.",
        right: "장관은 사실이 아니라고 밝혔다.",
        why: `주장했다 subtly suggests doubt; for a neutral or confirmed statement, use 밝혔다.`,
        register: true,
      },
      {
        wrong: "일기 예보: 내일은 비가 올 거예요.",
        right: "내일은 비가 오겠습니다.",
        why: `Broadcast forecasts use -겠습니다.`,
        register: true,
      },
    ],
    faqs: [
      {
        q: `Why -겠습니다 in weather forecasts?`,
        a: `-겠- marks a prediction or the speaker's judgement, and 습니다 is broadcast formality.`,
      },
      {
        q: `Is 기자 a neutral word?`,
        a: `Yes. 기레기 (기자 + 쓰레기) is a harsh internet insult for sloppy journalists.`,
      },
    ],
    related: ["news-and-data-language", "formal-phrases-news-history", "speech-levels-and-register", "rhetoric-and-persuasion"],
    lessons: [
      "c2-journalism-lead",
      "c2-journalism-attribution-verbs",
      "c2-journalism-unconfirmed",
      "c2-journalism-quotation",
      "c2-journalism-story-types",
      "c2-journalism-headlines-captions",
      "c2-journalism-ethics-corrections",
      "c2-broadcast-anchor-openings",
      "c2-broadcast-live-cross",
      "c2-broadcast-contrast-print-air",
      "c2-broadcast-pronunciation",
      "c2-broadcast-weather",
      "c2-broadcast-documentary-narration",
      "c2-broadcast-sports-commentary",
    ],
  },
  {
    slug: "screen-register-switches",
    title: "Register Switches on Screen and at Speed",
    description:
      "What dramas and films do with register: the first switch to 반말 (말 놓을까요?), cold politeness in a fight, address terms (오빠, 선배, 자기야, 당신), genre voices, elliptical dialogue, subtitles, and understanding fast casual speech with backchannels and overlap.",
    level: "C2",
    intro: [
      `Korean dramas use speech levels as plot: a switch from 존댓말 to 반말 can be a declaration of love, and a switch back can end a friendship. Learning to read these switches, at full conversational speed, is the final stage of understanding Korean as it's spoken.`,
    ],
    sections: [
      {
        heading: `Switching levels`,
        body: [
          `Dropping to 반말 is negotiated: 말 놓을까요? / 말 편하게 하세요 (Shall we speak casually?). An unasked switch can be intimacy or aggression. Going the other way, a sudden 습니다 between close people is cold politeness: 알겠습니다. 그럼 이만 가 보겠습니다 can end a relationship.`,
          `Address terms carry relationships: 오빠 / 언니 / 형 / 누나, 선배, 자기야 (darling), 여보 (between spouses). 당신 'you' is used between spouses, in writing and ads, but face to face with a stranger it starts a fight.`,
        ],
        examples: [
          { ko: "우리 이제 말 놓을까요?", en: "Shall we drop the formalities now?" },
          { ko: "알겠습니다. 그럼 이만 가 보겠습니다.", en: "Understood. I'll be going, then." },
          { ko: "당신이 뭔데 나한테 이래요?", en: "Who do you think you are, treating me like this?" },
        ],
      },
      {
        heading: `Ellipsis and speed`,
        body: [
          `Screen dialogue is elliptical: subjects, objects and even verbs vanish: 밥은? (Have you eaten?), 그래서? (And?), 왜, 뭐. At speed, contractions pile up: 뭐 하고 있어 → [머하구이써], 그러니까 → [그니까]. Backchannels (응, 어, 그치, 진짜?) overlap the speaker without interrupting.`,
        ],
        examples: [
          { ko: "밥은?", en: "Have you eaten?" },
          { ko: "그니까. 내 말이.", en: "Exactly. That's what I'm saying." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "처음 만난 사람에게: 당신은 어디서 왔어요?",
        right: "어디서 오셨어요?",
        why: `당신 to a stranger's face sounds confrontational. Korean drops 'you' or uses a title.`,
        register: true,
      },
      {
        wrong: "첫 만남에서 바로: 야, 너 몇 살이야?",
        right: "실례지만 나이가 어떻게 되세요?",
        why: `반말 to someone you just met is rude unless they are a child.`,
        register: true,
      },
    ],
    faqs: [
      {
        q: `Why do drama characters ask each other's age?`,
        a: `Age sets the speech level and address terms; knowing it settles who speaks how.`,
      },
      {
        q: `Are subtitles reliable for register?`,
        a: `No: English subtitles can't show 반말 vs 존댓말, so a lot of drama tension is lost in translation.`,
      },
    ],
    related: ["speech-levels-and-register", "casual-speech-banmal", "old-speech-levels", "translation-precision"],
    lessons: [
      "c2-screen-first-casual-speech",
      "c2-screen-cold-politeness",
      "c2-screen-address-terms",
      "c2-screen-genre-voices",
      "c2-screen-elliptical-dialogue",
      "c2-screen-subtitles",
      "c2-screen-script-format",
      "c2-listening-fast-contractions",
      "c2-listening-backchannels-overlap",
      "c2-listening-stance-markers",
      "c2-listening-hard-conditions",
      "c2-listening-contrast-at-speed",
    ],
  },
  {
    slug: "translation-precision",
    title: "Translation Precision: Carrying Nuance Between English and Korean",
    description:
      "Translating at mastery level: zero pronouns, definiteness and plurals, tense and aspect, English hedges into Korean evidentials (그만뒀대요, 바쁜가 봐요, 많더라고요), nominal-to-verbal and passive-to-active shifts, register choice, and words English can't say (정, 눈치, 우리, 체면, 수고하셨습니다).",
    level: "C2",
    intro: [
      `Translating well means translating meaning, not words. English and Korean encode different things: English insists on pronouns, articles and plurals; Korean insists on speech level, evidence and relationship. Each direction needs its own adjustments.`,
    ],
    sections: [
      {
        heading: `English into Korean`,
        body: [
          `Drop pronouns that context supplies: 'I think I left my phone at home' → 휴대폰을 집에 두고 온 것 같아요. Drop articles and most plurals. Choose aspect: 'is wearing' → 입고 있다; 'is sitting' → 앉아 있다.`,
          `Turn English hedges into Korean evidentials: 'Apparently she quit' → 그만뒀대요; 'He must be busy' → 바쁜가 봐요; 'It was really crowded (I found)' → 사람이 정말 많더라고요. Turn noun-heavy English into verbs and passives into actives. And choose a speech level: English has none, Korean always needs one.`,
        ],
        examples: [
          { ko: "그 사람 회사 그만뒀대요.", en: "Apparently he quit his job." },
          { ko: "사람이 정말 많더라고요.", en: "It was really crowded, I found." },
          { ko: "회의가 취소된 걸 몰랐어요.", en: "I didn't know the meeting had been cancelled." },
        ],
      },
      {
        heading: `What English can't say`,
        body: [
          `Some Korean words need a phrase, not a word: 정 (affection built over time), 눈치 (reading the room), 한 (deep, lasting grief and grievance), 체면 (face, social standing), 우리 (we, our, used for 'my' family and country). Set phrases are tied to situations: 수고하셨습니다, 잘 먹겠습니다, 다녀오겠습니다 have no single English equivalent.`,
        ],
        examples: [
          { ko: "오래 같이 살다 보니 정이 들었어요.", en: "After living together so long, I've grown attached." },
          { ko: "그 사람은 눈치가 빨라요.", en: "He's quick to pick up on things." },
          { ko: "오늘 하루도 수고하셨습니다.", en: "Thanks for all your hard work today." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "그는 그의 손을 들었다.",
        right: "그는 손을 들었다.",
        why: `Korean doesn't repeat the possessor when it's obvious; 그의 is translationese.`,
        register: true,
      },
      {
        wrong: "커피 한 잔을 가질 수 있을까요?",
        right: "커피 한 잔 주시겠어요?",
        why: `'Can I have ...' is a request, not possession. 가지다 is a calque.`,
        register: true,
      },
      {
        wrong: "제 엄마가 전화했어요.",
        right: "저희 엄마가 전화했어요.",
        why: `For family, Korean uses 우리 / 저희 where English says 'my'.`,
        register: true,
      },
    ],
    faqs: [
      {
        q: `How do I translate 수고하셨습니다?`,
        a: `By situation: 'Thanks for your hard work', 'Good job today', 'See you tomorrow'. There's no single equivalent.`,
      },
      {
        q: `Should I translate 우리나라 as 'our country'?`,
        a: `Usually 'Korea', since 'our country' sounds odd in English. With foreigners, Koreans themselves often say 한국.`,
      },
    ],
    related: ["writing-style-translationese", "speech-levels-and-register", "beliefs-and-evidence", "topic-and-subject-in-discourse"],
    lessons: [
      "c2-translation-zero-pronouns",
      "c2-translation-definiteness-plurals",
      "c2-translation-tense-aspect",
      "c2-translation-evidentials",
      "c2-translation-nominal-to-verbal",
      "c2-translation-passive-to-active",
      "c2-translation-tone-words",
      "c2-translation-register-choice",
      "c2-untranslatable-attachment",
      "c2-untranslatable-reading-the-room",
      "c2-untranslatable-grief-and-grievance",
      "c2-untranslatable-we-and-our",
      "c2-untranslatable-emotion-words",
      "c2-untranslatable-face",
      "c2-untranslatable-set-phrases",
      "c2-untranslatable-contrast",
    ],
  },
  {
    slug: "rhetoric-and-persuasion",
    title: "Rhetoric, Persuasion and Set Pieces: Speeches, Statements, Condolences and Apologies",
    description:
      "Korean rhetoric at mastery level: devices (parallelism, repetition, climax, rhetorical question), emphasis (다름 아닌, -(이)야말로), concede-and-rebut, advertising copy, public statements (규탄한다, 촉구한다), and the set pieces of public life: wedding speeches, condolences (삼가 고인의 명복을 빕니다), official apologies and recommendation letters.",
    level: "C2",
    intro: [
      `Persuasion in Korean draws on devices that are familiar from English rhetoric, but the set pieces of public life (weddings, funerals, apologies) follow formulas that must be exactly right. Getting a condolence phrase wrong is far more noticeable than any grammar slip.`,
    ],
    sections: [
      {
        heading: `Devices and emphasis`,
        body: [
          `Classic devices: 대구 (parallelism: 말은 쉽고 실천은 어렵다), 반복 (repetition), 점층 (climax), 설의법 (rhetorical question: 이보다 중요한 일이 어디 있겠습니까?). Emphasis: 다름 아닌 (none other than), -(이)야말로, 바로. Concede, then rebut: 물론 ... 그러나 / -기는 하지만.`,
          `Public statements (성명서) use fixed verbs: 규탄한다 (we condemn), 촉구한다 (we urge), 요구한다 (we demand).`,
        ],
        examples: [
          { ko: "말은 쉽고 실천은 어렵다.", en: "Saying is easy; doing is hard." },
          { ko: "이 문제를 해결할 사람은 다름 아닌 우리 자신입니다.", en: "The people who must solve this problem are none other than ourselves." },
          { ko: "우리는 정부의 즉각적인 사과를 촉구한다.", en: "We urge the government to apologise immediately." },
        ],
      },
      {
        heading: `Set pieces`,
        body: [
          `Condolences: 삼가 고인의 명복을 빕니다 (May the deceased rest in peace), 얼마나 상심이 크십니까 (You must be heartbroken). Official apologies: 심려를 끼쳐 드려 진심으로 사과드립니다 (We sincerely apologise for the concern we have caused). Wedding speeches: 두 사람의 앞날에 행복이 가득하기를 바랍니다. Recommendation letters: ...을 / 를 자신 있게 추천합니다.`,
        ],
        examples: [
          { ko: "삼가 고인의 명복을 빕니다.", en: "My deepest condolences. (May the deceased rest in peace.)" },
          { ko: "고객 여러분께 심려를 끼쳐 드려 진심으로 사과드립니다.", en: "We sincerely apologise to our customers for the concern we have caused." },
          { ko: "두 사람의 앞날에 늘 행복이 가득하기를 바랍니다.", en: "May the two of you always be filled with happiness." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "장례식장에서: 축하드립니다.",
        right: "삼가 고인의 명복을 빕니다.",
        why: `Condolences have fixed phrases; anything cheerful is a grave faux pas.`,
        register: true,
      },
      {
        wrong: "사과문: 불편하셨다면 죄송합니다.",
        right: "불편을 끼쳐 드려 진심으로 사과드립니다.",
        why: `'If you were inconvenienced' is a conditional non-apology and is widely criticised.`,
        register: true,
      },
      {
        wrong: "삼가 고인의 명복을 빌어요.",
        right: "삼가 고인의 명복을 빕니다.",
        why: `The formula is fixed in 하십시오체.`,
        register: true,
      },
    ],
    faqs: [
      {
        q: `What do I say at a Korean funeral?`,
        a: `Often very little: a bow and 삼가 고인의 명복을 빕니다, or simply 얼마나 상심이 크십니까. Silence is respectful.`,
      },
      {
        q: `Are rhetorical questions too dramatic in speeches?`,
        a: `No: they're a staple of Korean speeches and editorials, and sound persuasive rather than theatrical.`,
      },
    ],
    related: ["editorial-and-speech-rhetoric", "politeness-strategies", "humour-satire-and-irony", "business-korean"],
    lessons: [
      "c2-rhetoric-devices-1",
      "c2-rhetoric-devices-2",
      "c2-rhetoric-emphasis",
      "c2-rhetoric-concede-rebut",
      "c2-rhetoric-speech-structure",
      "c2-rhetoric-advertising-copy",
      "c2-rhetoric-petitions-statements",
      "c2-project-wedding-speech",
      "c2-project-condolences",
      "c2-project-official-apology",
      "c2-project-civil-complaint",
      "c2-project-recommendation-letter",
      "c2-project-negotiation",
      "c2-project-panel-moderation",
      "c2-project-interpreting",
      "c2-project-talk-on-your-field",
    ],
  },
  {
    slug: "theses-and-peer-review",
    title: "Theses and Peer Review: Methods, Discussion, Limitations and Citation Ethics",
    description:
      "Korean academic writing at thesis level: chapter structure, methods and results sections, discussion and limitations (본 연구의 한계), citation ethics and plagiarism, and answering questions at a conference.",
    level: "C2",
    intro: [
      `C1 covered abstracts, hedging and citation. A full thesis adds methods, discussion and limitations sections, each with its own conventional phrasing, and academic life adds peer review and conference Q&A.`,
    ],
    sections: [
      {
        heading: `Sections and their phrasing`,
        body: [
          `Methods: 연구 대상은 ...(으)로 하였다, ...을 / 를 활용하여 분석하였다. Results: ...는 것으로 나타났다, 통계적으로 유의미한 차이가 있었다. Discussion: 이는 선행 연구의 결과와 일치한다, 이러한 결과는 ...(으)로 해석할 수 있다. Limitations: 본 연구는 ...다는 한계가 있다, 후속 연구에서는 ...을 / 를 살펴볼 필요가 있다.`,
        ],
        examples: [
          { ko: "두 집단 간에 통계적으로 유의미한 차이가 있었다.", en: "There was a statistically significant difference between the two groups." },
          { ko: "이는 선행 연구의 결과와 일치한다.", en: "This is consistent with previous findings." },
          { ko: "본 연구는 표본의 크기가 작다는 한계가 있다.", en: "This study is limited by its small sample size." },
        ],
      },
      {
        heading: `Ethics and conferences`,
        body: [
          `Citation ethics: cite every idea that isn't yours (재인용 for second-hand citation), and never copy without marking (표절). At conferences, Q&A follows politeness formulas: 좋은 질문 감사합니다, 말씀하신 부분은 후속 연구에서 보완하도록 하겠습니다.`,
        ],
        examples: [
          { ko: "좋은 질문 감사합니다.", en: "Thank you for the good question." },
          { ko: "말씀하신 부분은 후속 연구에서 보완하도록 하겠습니다.", en: "I'll address the point you raised in future research." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "본 연구는 표본이 작다는 한계를 가진다.",
        right: "본 연구는 표본이 작다는 한계가 있다.",
        why: `한계를 가지다 is a common calque of 'has limitations'; 한계가 있다 is natural.`,
        register: true,
      },
      {
        wrong: "유의미한 차이가 나타났다고 보여진다.",
        right: "유의미한 차이가 나타났다.",
        why: `Hedging a statistical result you've just reported weakens it, and 보여지다 is a double passive editors dislike.`,
        register: true,
      },
    ],
    faqs: [
      {
        q: `Is 유의미하다 the same as 의미 있다?`,
        a: `In statistics, 유의미하다 means 'significant' in the technical sense. 의미 있다 is everyday 'meaningful'.`,
      },
      {
        q: `What's 재인용?`,
        a: `Citing a source through another source you actually read: 김민수(2010), 이서연(2020)에서 재인용.`,
      },
    ],
    related: ["academic-writing-citation", "hedging-academic-korean", "writing-style-translationese", "rhetoric-and-persuasion"],
    lessons: [
      "c2-academic-thesis-structure",
      "c2-academic-methods-results",
      "c2-academic-discussion-limitations",
      "c2-academic-citation-ethics",
      "c2-academic-listening-conference",
    ],
  },
  {
    slug: "twentieth-century-texts",
    title: "Reading 20th-Century Formal Texts: Literary Endings and Classical Function Words",
    description:
      "Reading early 20th-century declarations, newspapers, constitutions and essays (in Hangul): literary endings (-노라, -도다, -(으)ㄹ지어다, -나니, -거늘, -(으)매, -인즉) and classical function words (오등, 자에, 아, 고로, 연이나, 무릇, 운운).",
    level: "C2",
    intro: [
      `Formal texts from the early 1900s, such as the 1919 Declaration of Independence, old newspapers and early constitutions, were written in a mixed style heavy with Sino-Korean and classical endings. In Hangul transcription, they're readable once you know a small set of endings and function words. (The Chinese characters behind them are covered in the Word Roots tool.)`,
    ],
    sections: [
      {
        heading: `Endings`,
        body: [
          `-노라 (I / we declare): 선언하노라. -도다 / -로다 (exclamation). -(으)ㄹ지어다 (let us, ought to): 힘쓸지어다. -나니 (and so, for). -거늘 (yet, although). -(으)매 (as, since). -인즉 (as for ..., it is). Read them into modern 한다체: 힘쓸지어다 → 힘써야 한다.`,
        ],
        examples: [
          { ko: "오등은 자에 아 조선의 독립국임과 조선인의 자주민임을 선언하노라.", en: "We hereby declare Korea an independent state and Koreans a free people. (1919)" },
          { ko: "우리 모두 힘쓸지어다.", en: "Let us all strive." },
        ],
      },
      {
        heading: `Function words`,
        body: [
          `오등 = 우리 (we), 자에 = 이에 (hereby, here), 아 = 우리의 (our), 차 = 이 (this), 기 = 그 (that), 고로 = 그러므로, 연이나 = 그러나, 무릇 (generally, as a rule), 운운 (and so on; also 'talk of'). Spot them, replace them, and the sentence becomes modern Korean.`,
        ],
        table: {
          headers: ["Classical", "Modern"],
          rows: [
            ["오등", "우리"],
            ["자에", "이에"],
            ["아", "우리의"],
            ["고로", "그러므로"],
            ["연이나", "그러나"],
          ],
        },
        examples: [
          { ko: "고로 우리는 이에 반대하노라.", en: "Therefore we oppose this." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "아 조선 = 아! 조선",
        right: "아 조선 = 우리 조선",
        why: `In these texts 아 is 'our', not the exclamation 아.`,
      },
      {
        wrong: "보고서: 고로 예산을 늘려야 한다.",
        right: "보고서: 따라서 예산을 늘려야 한다.",
        why: `고로 is classical; modern reports use 따라서 or 그러므로.`,
        register: true,
      },
    ],
    faqs: [
      {
        q: `Do I need Hanja to read these texts?`,
        a: `It helps, especially with homophones, but Hangul editions with modern glosses are widely available. The Word Roots tool covers the characters.`,
      },
      {
        q: `Is 운운 still used?`,
        a: `Yes, in formal and political language: 책임 운운하다 'to talk about responsibility' (often dismissively).`,
      },
    ],
    related: ["literary-classical-endings", "literary-endings", "middle-korean-glimpse", "legal-korean"],
    lessons: [
      "c2-sino-texts-mixed-style",
      "c2-sino-texts-literary-endings",
      "c2-sino-texts-function-words",
      "c2-sino-texts-reading-declaration",
      "c2-sino-texts-old-newspapers",
      "c2-sino-texts-reading-constitution",
      "c2-sino-texts-homophones",
      "c2-sino-texts-reading-essays",
    ],
  },
  {
    slug: "writing-style-translationese",
    title: "Writing With Style: Translationese, Agreement, Concision and Rhythm",
    description:
      "Editing Korean prose to native standard: 번역투 (에 있어서, 가지다, 로부터, 되어지다, 그녀), sentence agreement (문장 호응: *제 꿈은 의사가 되고 싶다), adverbs that demand an ending (결코 ... -지 않다), redundancy (역전 앞, 미리 예약), rhythm, and verbs over nouns.",
    level: "C2",
    intro: [
      `At C2 your Korean is grammatical; the goal now is style. Editors look for three things: translationese (번역투), sentences whose parts don't agree (문장 호응), and padding. Most fixes make the sentence shorter and more verbal.`,
    ],
    sections: [
      {
        heading: `Translationese`,
        body: [
          `Borrowed structures: -에 있어서 (한국어 학습에 있어서 → 한국어를 배울 때), -을 / 를 가지다 (회의를 가졌다 → 회의를 했다), -(으)로부터 overuse, -에 의해 passives, 그 / 그녀 repeated, -들 on every noun, -적 strings. Double passives (되어지다, 보여지다, 잊혀지다) are very common and not errors, but editors prefer 되다, 보이다, 잊히다.`,
        ],
        examples: [
          { ko: "한국어를 배울 때 가장 중요한 것은 꾸준함이다.", en: "The most important thing in learning Korean is consistency." },
          { ko: "그 일은 곧 잊혔다.", en: "The matter was soon forgotten." },
        ],
      },
      {
        heading: `Agreement and adverbs`,
        body: [
          `Subject and predicate must match: *제 꿈은 의사가 되고 싶다 → 제 꿈은 의사가 되는 것이다 (My dream is to become a doctor). 'The reason is ...' needs 때문이다: 이유는 ...기 때문이다.`,
          `Some adverbs demand a particular ending: 결코 / 절대로 ... -지 않다, 비록 ... -(으)ㄹ지라도 / -지만, 만약 ... -(으)면, 왜냐하면 ... -기 때문이다.`,
        ],
        examples: [
          { ko: "제 꿈은 의사가 되는 것입니다.", en: "My dream is to become a doctor." },
          { ko: "왜냐하면 시간이 부족했기 때문이다.", en: "That is because there wasn't enough time." },
          { ko: "그는 결코 포기하지 않았다.", en: "He never gave up." },
        ],
      },
      {
        heading: `Concision and rhythm`,
        body: [
          `Cut redundancy (중복 표현): 역전 앞 (역 = station, 전 = front, so 앞 is doubled), 미리 예약하다, 과반수 이상, 다시 재개하다, 남은 여생. Cut padding: -는 것이다, -라고 할 수 있다, -에 해당한다 when they add nothing.`,
          `Vary rhythm: alternate short and long sentences, and avoid 했다. 했다. 했다. Prefer verbs to nouns: 환경 보호를 위한 노력의 강화가 필요하다 → 환경을 지키려면 더 노력해야 한다.`,
        ],
        examples: [
          { ko: "환경을 지키려면 더 노력해야 한다.", en: "We must do more to protect the environment." },
          { ko: "식당을 예약했다.", en: "I booked the restaurant." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "제 꿈은 의사가 되고 싶다.",
        right: "제 꿈은 의사가 되는 것이다.",
        why: `The subject 꿈 needs a predicate that names a dream: -는 것이다.`,
      },
      {
        wrong: "왜냐하면 시간이 부족했다.",
        right: "왜냐하면 시간이 부족했기 때문이다.",
        why: `왜냐하면 requires -기 때문이다 at the end.`,
      },
      {
        wrong: "우리는 회의를 가졌다.",
        right: "우리는 회의를 했다.",
        why: `가지다 for events is a calque of 'have'.`,
        register: true,
      },
      {
        wrong: "역전 앞에서 만나요.",
        right: "역 앞에서 만나요.",
        why: `역전 already means 'in front of the station'; 앞 doubles it. Common, but editors cut it.`,
        register: true,
      },
    ],
    faqs: [
      {
        q: `Is 되어지다 wrong?`,
        a: `It's a double passive: very common and not an error, but style guides prefer 되다. Treat it as a style choice.`,
      },
      {
        q: `Why avoid 그녀?`,
        a: `It was coined to translate 'she' and still sounds literary. Korean prefers names, titles or no pronoun at all.`,
      },
    ],
    related: ["speech-levels-and-register", "translation-precision", "hada-doeda-sikida", "theses-and-peer-review"],
    lessons: [
      "c2-style-translationese-1",
      "c2-style-translationese-2",
      "c2-style-sentence-agreement",
      "c2-style-redundancy-concision",
      "c2-style-rhythm",
      "c2-style-verbs-over-nouns",
      "c2-style-contrast-native",
    ],
  },
];
