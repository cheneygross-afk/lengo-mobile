// Synced from cheneygross-afk/lengo:src/lib/grammar/ko-guides-b1.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { KoGrammarGuide } from "./ko-types";

// Korean grammar guides, Intermediate (B1, TOPIK 3). See the notes at the top
// of ./ko-types.ts.
export const KO_B1_GUIDES: KoGrammarGuide[] = [
  {
    slug: "reported-speech",
    title: "Reported Speech: -다고, -냐고, -자고, -(으)라고",
    description:
      "How to pass on what someone said, asked, suggested or told you to do: -다고 / -ㄴ다고 / -는다고 하다, -(이)라고 하다, -냐고 하다, -자고 하다, -(으)라고 하다, 달라고 and 주라고, plus direct quotes and how pronouns shift.",
    level: "B1",
    intro: [
      `Korean reported speech is built from four quoting endings, one for each type of sentence (statement, question, suggestion, command), followed by a reporting verb: 하다, 말하다, 묻다, 듣다. Once you can turn any sentence into its quoted form, you can pass on messages, retell conversations and write summaries.`,
      `One relief for English speakers: there is no tense backshift. 'She said she was busy' keeps the tense she actually used: 바쁘다고 했어요.`,
    ],
    sections: [
      {
        heading: `Statements: -다고 하다`,
        body: [
          `The quoted form is the plain written form of the verb + 고. Adjectives and 있다 / 없다 take -다고 (바쁘다고, 맛있다고). Action verbs take -ㄴ다고 after a vowel and -는다고 after a consonant (간다고, 먹는다고); ㄹ stems drop ㄹ (산다고, 만든다고). Past: -았 / 었다고 (갔다고). Future: -(으)ㄹ 거라고 (올 거라고) or -겠다고 (for promises: 하겠다고). Nouns: -(이)라고 (학생이라고, 의사라고), negative 아니라고.`,
          `The reporting verb carries the tense and honorifics of the moment of reporting: 바쁘다고 했어요 (she said), 바쁘다고 하셨어요 (the teacher said), 바쁘다고 들었어요 (I heard that). 'What's this called?' uses the same pattern: 이건 한국어로 뭐라고 해요?`,
        ],
        table: {
          headers: ["Original", "Reported"],
          rows: [
            ["바빠요.", "바쁘다고 했어요."],
            ["지금 가요.", "지금 간다고 했어요."],
            ["밥 먹어요.", "밥 먹는다고 했어요."],
            ["어제 갔어요.", "어제 갔다고 했어요."],
            ["내일 올 거예요.", "내일 올 거라고 했어요."],
            ["학생이에요.", "학생이라고 했어요."],
            ["의사가 아니에요.", "의사가 아니라고 했어요."],
          ],
        },
        examples: [
          { ko: "민수 씨가 오늘 좀 늦는다고 했어요.", en: "Minsu said he'll be a bit late today." },
          { ko: "지은 씨가 다음 달에 결혼한다고 들었어요.", en: "I heard Jieun is getting married next month." },
          { ko: "일기예보에서 내일 비가 올 거라고 했어요.", en: "The forecast said it'll rain tomorrow." },
          { ko: "부장님이 회의가 취소됐다고 하셨어요.", en: "The manager said the meeting was cancelled." },
        ],
      },
      {
        heading: `Questions: -냐고 하다 / 묻다`,
        body: [
          `Questions take -냐고 on any stem: 가냐고, 먹냐고, 바쁘냐고, 갔냐고; nouns take -(이)냐고: 학생이냐고. Formal writing may use -느냐고 for verbs (가느냐고). The reporting verb is often 묻다 or 물어보다: 어디 사냐고 물어봤어요 (he asked where I live).`,
        ],
        examples: [
          { ko: "선생님이 숙제 다 했냐고 물어보셨어요.", en: "The teacher asked whether I'd finished my homework." },
          { ko: "친구가 주말에 시간 있냐고 했어요.", en: "My friend asked if I was free at the weekend." },
          { ko: "저 사람이 화장실이 어디냐고 물어요.", en: "That person is asking where the bathroom is." },
        ],
      },
      {
        heading: `Suggestions, commands and requests`,
        body: [
          `Suggestions take -자고 (같이 가자고 했어요, he suggested we go together) and -지 말자고. Commands take -(으)라고: 가라고, 먹으라고, 만들라고 (ㄹ stems keep ㄹ here), and 'don't' is -지 말라고: 늦지 말라고 했어요.`,
          `Requests are split by who benefits. If the speaker asked for something for themselves, use 달라고: 물 좀 달라고 했어요 (she asked for some water), 도와 달라고 했어요 (he asked me to help him). If it's for a third person, use 주라고: 동생한테 책을 빌려주라고 했어요 (she told me to lend the book to my brother). Reporting verbs like 부탁하다, 시키다, 권하다 and 허락하다 fit here.`,
        ],
        table: {
          headers: ["Type", "Original", "Reported"],
          rows: [
            ["suggestion", "같이 가요.", "같이 가자고 했어요."],
            ["command", "빨리 오세요.", "빨리 오라고 했어요."],
            ["negative command", "늦지 마세요.", "늦지 말라고 했어요."],
            ["request (for the speaker)", "저 좀 도와주세요.", "자기를 도와 달라고 했어요."],
            ["request (for someone else)", "민수 좀 도와주세요.", "민수를 도와주라고 했어요."],
          ],
        },
        examples: [
          { ko: "친구가 이번 주말에 같이 등산하자고 했어요.", en: "My friend suggested we go hiking this weekend." },
          { ko: "의사가 술을 마시지 말라고 했어요.", en: "The doctor told me not to drink." },
          { ko: "엄마가 일찍 들어오라고 하셨어요.", en: "Mum told me to come home early." },
          { ko: "옆집 사람이 조용히 해 달라고 부탁했어요.", en: "The neighbour asked us to keep the noise down." },
        ],
      },
      {
        heading: `Direct quotes and point of view`,
        body: [
          `A direct quote keeps the exact words in quotation marks and adds 라고 (or 하고 in speech): 민수 씨가 "배고파요"라고 했어요. Indirect quotes shift the point of view, as in English: 제가 → 자기가, 저한테 → 자기한테, 여기 → 거기, 오늘 → 그날, 내일 → 다음 날.`,
        ],
        examples: [
          { ko: "지은 씨가 \"잘 먹겠습니다\"라고 했어요.", en: "Jieun said, 'Thank you for the meal.'" },
          { ko: "민수 씨가 자기는 내일 못 온다고 했어요.", en: "Minsu said he can't come tomorrow." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "학생이다고 했어요.",
        right: "학생이라고 했어요.",
        why: `Nouns never take -다고: use -(이)라고.`,
      },
      {
        wrong: "지금 가다고 했어요.",
        right: "지금 간다고 했어요.",
        why: `Action verbs in the present take -ㄴ다고 / -는다고. -다고 alone is for adjectives and 있다 / 없다.`,
      },
      {
        wrong: "그 사람이 바빴다고 했어요.",
        right: "그 사람이 바쁘다고 했어요.",
        why: `If she said 바빠요 ('I'm busy'), report it in the present. No tense backshift: keep the tense of the original words.`,
        register: true,
      },
      {
        wrong: "물 좀 주라고 했어요.",
        right: "물 좀 달라고 했어요.",
        why: `If she wanted the water herself, this is wrong. When the speaker asks for something for herself, use 달라고. 주라고 is for giving to a third person.`,
        register: true,
      },
      {
        wrong: "만들으라고 했어요.",
        right: "만들라고 했어요.",
        why: `ㄹ stems keep ㄹ and take no 으 before -라고.`,
      },
    ],
    faqs: [
      {
        q: `Is -냐고 rude, because 반말 -냐 sounds blunt?`,
        a: `No. Inside reported speech, -냐고 is neutral: the politeness is carried by the final verb (물어보셨어요, 했어요).`,
      },
      {
        q: `What's the difference between 했어요 and 그랬어요 after a quote?`,
        a: `그러다 ('to say so, do so') often replaces 하다 in speech: 바쁘다고 그랬어요. It means the same.`,
      },
    ],
    related: ["reported-speech-short-forms", "written-style-handache", "embedded-questions", "giving-opinions"],
    lessons: [
      "b1-reported-statements-1",
      "b1-reported-statements-2",
      "b1-reported-nouns",
      "b1-direct-vs-indirect-quotes",
      "b1-reported-questions",
      "b1-contrast-reported-statement-forms",
      "b1-reported-suggestions",
      "b1-reported-commands-1",
      "b1-reported-commands-2",
      "b1-contrast-give-me-or-give-them",
      "b1-reporting-verbs-requests",
      "b1-contrast-four-report-types",
      "b1-transform-direct-to-reported",
    ],
  },
  {
    slug: "reported-speech-short-forms",
    title: "Reported Speech, Spoken Short Forms: -대요, -래요, -냬요, -재요, -다면서요",
    description:
      "How everyday Korean shortens -다고 해요 to -대요 and its relatives, how to ask 'I heard that ... is that right?' with -다면서요?, and the casual -대, -래, -다며.",
    level: "B1",
    intro: [
      `In conversation, nobody says -다고 해요 every time. The quote and the verb merge: 바쁘다고 해요 becomes 바쁘대요, 가자고 해요 becomes 가재요. These short forms are everywhere in spoken Korean, from gossip to news between friends, and they are the most common way to say 'apparently' or 'they say'.`,
    ],
    sections: [
      {
        heading: `The short forms`,
        body: [
          `Drop 고 하- and merge: -다고 해요 → -대요, -(이)라고 해요 → -(이)래요, -냐고 해요 → -냬요, -자고 해요 → -재요, -(으)라고 해요 → -(으)래요, 달라고 해요 → 달래요. The past of the reporting is -댔어요, -랬어요: 늦는댔어요 (he said he'd be late).`,
          `As questions, they ask what someone said: 비가 온대요? (did they say it's going to rain?), 몇 시에 오래요? (what time did they tell us to come?).`,
        ],
        table: {
          headers: ["Full", "Short", "Example"],
          rows: [
            ["-다고 해요", "-대요", "맛있대요, 간대요, 먹는대요, 갔대요"],
            ["-(이)라고 해요", "-(이)래요", "학생이래요, 의사래요"],
            ["-냐고 해요", "-냬요", "어디 가냬요"],
            ["-자고 해요", "-재요", "같이 가재요"],
            ["-(으)라고 해요", "-(으)래요", "빨리 오래요, 먹으래요"],
            ["달라고 해요", "달래요", "도와 달래요"],
          ],
        },
        examples: [
          { ko: "그 식당 진짜 맛있대요.", en: "They say that restaurant is really good." },
          { ko: "민수 씨가 오늘 못 온대요.", en: "Minsu says he can't come today." },
          { ko: "선생님이 내일까지 숙제 내래요.", en: "The teacher says to hand in the homework by tomorrow." },
          { ko: "지은 씨가 주말에 같이 영화 보재요.", en: "Jieun's suggesting we see a film at the weekend." },
          { ko: "저 사람 누구래요?", en: "Who did they say that person was?" },
        ],
      },
      {
        heading: `Checking what you heard: -다면서요?`,
        body: [
          `-다면서요? (nouns -(이)라면서요?) means 'I heard that ... is that right?': 다음 달에 이사한다면서요? (I heard you're moving next month?), 지은 씨 동생이 의사라면서요?. It uses the same verb forms as -다고 (-ㄴ다면서요, -는다면서요, -았다면서요). Casual: -다면서? or -다며?.`,
        ],
        examples: [
          { ko: "회사 그만둔다면서요? 정말이에요?", en: "I heard you're quitting your job. Is it true?" },
          { ko: "어제 제주도 갔다 왔다면서요?", en: "I heard you went to Jeju yesterday?" },
          { ko: "너 다음 주에 생일이라며?", en: "Your birthday's next week, isn't it?" },
        ],
      },
      {
        heading: `Casual short forms, and -대요 vs -데요`,
        body: [
          `In 반말, just drop 요: 맛있대, 학생이래, 가재, 오래. Don't confuse -대요 (hearsay: someone said so) with -데요, a short form of -더라고요 (I saw it myself): 그 식당 맛있대요 (I hear it's good) vs 그 식당 맛있데요 (I went: it was good). The Intermediate guide on -더라고요 covers -데요.`,
        ],
        examples: [
          { ko: "걔 오늘 바쁘대.", en: "She says she's busy today." },
          { ko: "엄마가 빨리 집에 오래.", en: "Mum says to come home quickly." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "민수 씨가 온데요.",
        right: "민수 씨가 온대요.",
        why: `Hearsay is -대요 (from -다고 해요). -데요 reports your own experience.`,
      },
      {
        wrong: "학생이대요.",
        right: "학생이래요.",
        why: `Nouns take -(이)래요 (from -(이)라고 해요).`,
      },
      {
        wrong: "같이 가자대요.",
        right: "같이 가재요.",
        why: `-자고 해요 contracts to -재요.`,
      },
      {
        wrong: "간다면서요.",
        right: "간다면서요?",
        why: `Said flat, as a statement, this sounds odd. -다면서요 checks information with a rising question intonation.`,
        register: true,
      },
    ],
    faqs: [
      {
        q: `Are the short forms too casual for polite speech?`,
        a: `No: -대요, -래요 and -재요 are normal in polite 해요 conversation. In formal speech and writing, use the full forms (-다고 합니다).`,
      },
      {
        q: `How do I translate -대요 into English?`,
        a: `Usually 'apparently', 'I hear', 'they say', or 'he says': 내일 비 온대요 = 'Apparently it's going to rain tomorrow.'`,
      },
    ],
    related: ["reported-speech", "deorago-and-deon", "spelling-traps"],
    lessons: [
      "b1-short-reported-statements",
      "b1-short-reported-nouns",
      "b1-short-reported-questions-suggestions",
      "b1-short-reported-commands",
      "b1-checking-what-you-heard",
      "b1-casual-short-reported",
      "b1-contrast-full-vs-short-reported",
    ],
  },
  {
    slug: "written-style-handache",
    title: "The Written Style (한다체)",
    description:
      "The plain style of diaries, essays, newspapers, books and TOPIK writing: -다 for adjectives, -ㄴ다 / -는다 for verbs, -(이)다 for nouns, -았다, -(으)ㄹ 것이다, -지 않는다, and 나 and 우리 in place of 저.",
    level: "B1",
    intro: [
      `Written Korean is not addressed to anyone in particular, so it uses a plain style with no 요 and no formal -습니다: 한다체. It's the voice of newspapers, novels, academic papers, Wikipedia, diaries and the TOPIK writing section (questions 52-54). You already know its forms from reported speech: they are the quoted forms without 고.`,
    ],
    sections: [
      {
        heading: `The present`,
        body: [
          `Adjectives and 있다 / 없다 take -다, which looks like the dictionary form: 날씨가 좋다, 시간이 없다. Action verbs take -ㄴ다 after a vowel and -는다 after a consonant: 간다, 먹는다, 읽는다; ㄹ stems drop ㄹ: 산다, 만든다. Nouns take -(이)다: 학생이다, 친구다, and the negative is 아니다.`,
          `Questions in writing use -는가 / -(으)ㄴ가 (무엇이 문제인가?), or the plain -냐 / -니 in casual writing; you'll mainly need to recognise them.`,
        ],
        table: {
          headers: ["", "해요", "한다체"],
          rows: [
            ["adjective", "좋아요", "좋다"],
            ["verb, vowel stem", "가요", "간다"],
            ["verb, consonant stem", "먹어요", "먹는다"],
            ["ㄹ stem", "살아요", "산다"],
            ["noun", "학생이에요", "학생이다"],
            ["past", "갔어요", "갔다"],
            ["future", "갈 거예요", "갈 것이다"],
            ["negative", "안 가요", "가지 않는다"],
            ["negative adjective", "안 좋아요", "좋지 않다"],
          ],
        },
        examples: [
          { ko: "나는 매일 아침 일곱 시에 일어난다.", en: "I get up at seven every morning." },
          { ko: "서울은 인구가 많고 교통이 편리하다.", en: "Seoul has a large population and convenient transport." },
          { ko: "한국 사람들은 설날에 떡국을 먹는다.", en: "Koreans eat rice-cake soup at Lunar New Year." },
          { ko: "이것은 내가 처음 만든 김치이다.", en: "This is the first kimchi I made." },
        ],
      },
      {
        heading: `Past, future and negative`,
        body: [
          `The past is simply -았 / 었다: 갔다, 먹었다, 했다, 학생이었다. The future is -(으)ㄹ 것이다 (갈 것이다), and in news and reports also -(으)ㄹ 예정이다 (it is scheduled to). The negative is -지 않는다 for verbs and -지 않다 for adjectives (가지 않는다, 크지 않다), and 못 stays: 못 간다 / 가지 못한다.`,
        ],
        examples: [
          { ko: "어제는 하루 종일 비가 왔다.", en: "It rained all day yesterday." },
          { ko: "인구는 앞으로 계속 줄어들 것이다.", en: "The population will keep falling." },
          { ko: "많은 사람들이 이 사실을 알지 못한다.", en: "Many people don't know this." },
        ],
      },
      {
        heading: `Writing without 저: pronouns and connectors`,
        body: [
          `한다체 has no listener to be humble to, so 저 becomes 나 and 저희 becomes 우리: 나는 그날 일찍 집에 왔다. In essays, 'I' is often avoided altogether, or replaced by 필자 (the writer) in columns.`,
          `Written connectors replace the spoken ones: 그런데 → 그러나 or 하지만, 그래서 → 따라서 or 그러므로, 그리고 → 또한, and 한편 (meanwhile, on the other hand). Join nouns with 와 / 과, not 하고 or (이)랑.`,
        ],
        examples: [
          { ko: "나는 그날 처음으로 혼자 여행을 했다.", en: "That day I travelled alone for the first time." },
          { ko: "그러나 이 방법에는 문제가 있다.", en: "However, this method has a problem." },
          { ko: "따라서 정부와 기업의 노력이 필요하다.", en: "Therefore, effort from both government and business is needed." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "나는 매일 운동한다요.",
        right: "나는 매일 운동한다.",
        why: `한다체 never takes 요.`,
      },
      {
        wrong: "나는 밥을 먹다.",
        right: "나는 밥을 먹는다.",
        why: `Action verbs in the present take -ㄴ다 / -는다. The bare -다 is for adjectives (and the dictionary form).`,
      },
      {
        wrong: "저는 그 영화가 좋았다.",
        right: "나는 그 영화가 좋았다.",
        why: `Humble 저 doesn't fit the plain style. Use 나 (or avoid 'I').`,
        register: true,
      },
      {
        wrong: "날씨가 춥는다.",
        right: "날씨가 춥다.",
        why: `Adjectives take only -다 in the present.`,
      },
      {
        wrong: "그는 학생다.",
        right: "그는 학생이다.",
        why: `After a consonant, nouns take 이다.`,
      },
    ],
    faqs: [
      {
        q: `Is 한다체 rude if I say it to someone?`,
        a: `Spoken to a person, these forms are the plain casual style (해라체) that parents use with children or close friends use. In writing they are neutral and not rude at all.`,
      },
      {
        q: `Which style should I use in TOPIK writing?`,
        a: `Question 51 (a notice or message) usually needs 습니다 or 해요 to match the text. Questions 52, 53 and 54 should be written in 한다체. Mixing styles costs marks.`,
      },
    ],
    related: ["reported-speech", "formal-speech-hamnida", "formal-connectives-for-writing", "speech-levels-and-register"],
    lessons: [
      "b1-written-style-present",
      "b1-written-style-past-future",
      "b1-written-pronouns-connectors",
      "b1-diary-style",
      "b1-news-style-basics",
      "b1-transform-four-styles",
      "b1-topik-rewrite-written-style",
    ],
  },
  {
    slug: "deorago-and-deon",
    title: "Remembering What You Saw: -더라고요, -던데요, -던 and -곤 하다",
    description:
      "The retrospective -더-: -더라고요 to report what you saw or experienced, its short form -데요, -던데요, the modifiers -던 and -았 / 었던, and past habits with -곤 하다 and -(으)ㄹ 때마다.",
    level: "B1",
    intro: [
      `Korean has a special marker, -더-, for reporting something you personally witnessed in the past and are now recalling. English says 'I noticed', 'it turned out', 'I found that'. Korean builds it into the ending: 그 식당 맛있더라고요 means 'that restaurant was good (I went and found out)'.`,
    ],
    sections: [
      {
        heading: `-더라고요: what I saw or found out`,
        body: [
          `Add -더라고요 to any stem: 맛있더라고요, 사람이 많더라고요, 민수 씨가 노래를 잘하더라고요. For something already finished when you saw it, use -았 / 었더라고요: 벌써 다 팔렸더라고요 (they'd already sold out). Nouns take (이)더라고요. The short form -데요 and the casual -더라 mean the same: 맛있데요, 맛있더라.`,
          `The first-person rule: you can't use -더라고요 about your own deliberate actions (*제가 운동하더라고요), because you don't 'discover' them. It works with your feelings and your reactions that surprised you: 생각보다 재미있더라고요, 저도 모르게 눈물이 나더라고요.`,
        ],
        examples: [
          { ko: "어제 명동에 갔는데 사람이 정말 많더라고요.", en: "I went to Myeongdong yesterday and it was really crowded." },
          { ko: "지은 씨가 한국어를 진짜 잘하더라고요.", en: "Jieun's Korean is really good, I noticed." },
          { ko: "가 보니까 가게가 벌써 문을 닫았더라고요.", en: "When I got there, the shop had already closed." },
          { ko: "그 영화 생각보다 재미있더라.", en: "That film was better than I expected." },
        ],
      },
      {
        heading: `-던데요: what I noticed, left open`,
        body: [
          `-던데(요) combines -더- with -는데: you report what you saw and leave room for a reaction, often as a soft disagreement or hint: 그 식당 괜찮던데요? (I thought that restaurant was fine, actually), 민수 씨 아까 사무실에 있던데요 (Minsu was in the office earlier, from what I saw).`,
        ],
        examples: [
          { ko: "그 옷 잘 어울리던데요.", en: "That outfit really suited you, I thought." },
          { ko: "아까 보니까 비가 오던데 우산 있어요?", en: "I saw it was raining earlier. Have you got an umbrella?" },
        ],
      },
      {
        heading: `The modifiers -던 and -았 / 었던`,
        body: [
          `-던 before a noun recalls something that was ongoing, repeated or unfinished in the past: 제가 다니던 학교 (the school I used to go to), 먹던 빵 (bread I was eating, half-eaten), 자주 가던 카페 (the café I often went to). -았 / 었던 recalls something completed, often once: 작년에 갔던 식당 (the restaurant I went to last year), 어렸을 때 살았던 동네.`,
          `Compare the three past-looking modifiers: 먹은 빵 (bread I ate: plain past), 먹던 빵 (bread I was eating and didn't finish), 먹었던 빵 (bread I once ate, a memory).`,
        ],
        table: {
          headers: ["Form", "Feeling", "Example"],
          rows: [
            ["-(으)ㄴ", "plain past, done", "어제 본 영화"],
            ["-던", "ongoing, repeated, unfinished", "자주 보던 드라마"],
            ["-았 / 었던", "completed, a memory", "어릴 때 봤던 영화"],
          ],
        },
        examples: [
          { ko: "여기가 제가 어릴 때 살던 동네예요.", en: "This is the neighbourhood I lived in as a child." },
          { ko: "제가 마시던 커피 어디 갔어요?", en: "Where did my coffee go? (I was still drinking it)" },
          { ko: "작년에 같이 갔던 식당 기억나요?", en: "Do you remember the restaurant we went to last year?" },
        ],
      },
      {
        heading: `Past habits: -곤 하다 and -(으)ㄹ 때마다`,
        body: [
          `-곤 하다 (usually -곤 했다) means 'used to, would often': 어렸을 때 할머니 댁에 가곤 했어요 (I'd often go to my grandmother's when I was little). -(으)ㄹ 때마다 means 'every time': 이 노래를 들을 때마다 고향 생각이 나요; with nouns, 때마다 directly: 명절 때마다.`,
        ],
        examples: [
          { ko: "대학생 때는 밤새 이야기하곤 했어요.", en: "At university we'd often talk all night." },
          { ko: "서울에 올 때마다 이 식당에 와요.", en: "Every time I come to Seoul, I come to this restaurant." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "제가 어제 운동하더라고요.",
        right: "제가 어제 운동했어요.",
        why: `-더라고요 reports what you observed, not your own deliberate actions.`,
      },
      {
        wrong: "그 식당 맛있대요.",
        right: "그 식당 맛있더라고요.",
        why: `If you went yourself, don't use hearsay. -대요 is hearsay; your own experience is -더라고요 / -데요.`,
        register: true,
      },
      {
        wrong: "제가 다녔던 학교",
        right: "제가 다니던 학교",
        why: `For a school you went to for years: Both are possible, but for a long-term routine -던 is the natural choice.`,
        register: true,
      },
      {
        wrong: "가곤 해요",
        right: "가곤 했어요",
        why: `About a habit that has ended, use the past. -곤 하다 is mostly used in the past for habits you look back on.`,
        register: true,
      },
    ],
    faqs: [
      {
        q: `Is -더라고요 only for the past?`,
        a: `It reports a past observation, but the state may still be true: 그 식당 맛있더라고요 implies it's still good. It's the moment of seeing that is past.`,
      },
      {
        q: `How do -데요 and -대요 sound different?`,
        a: `In Seoul speech ㅐ and ㅔ sound the same, so they're homophones. Context tells you: did the speaker see it, or hear it from someone? In writing, the spelling must be right.`,
      },
    ],
    related: ["reported-speech-short-forms", "noun-modifiers", "storytelling-deoni-ja", "spelling-traps"],
    lessons: [
      "b1-what-i-saw-1",
      "b1-what-i-saw-2",
      "b1-retrospective-modifier",
      "b1-finished-memories",
      "b1-contrast-past-modifiers",
      "b1-what-i-noticed-left-open",
      "b1-used-to-habits",
      "b1-every-time-that",
      "b1-contrast-past-habits",
    ],
  },
  {
    slug: "background-and-concession",
    title: "Background and Contrast: -는데, -아 / 어도, -더라도, -기는 하다 and 대신",
    description:
      "The connective -(으)ㄴ / 는데 for background, setting up a question and contrast; -지만 vs -는데; -아 / 어도 and 아무리 -아도 (even if); -더라도 (even if it happens); -기는 하다 (admittedly) and 대신(에) (instead, in exchange).",
    level: "B1",
    intro: [
      `-는데 is probably the most frequent connective in spoken Korean, and the hardest to translate. It sets the scene for what follows: 'I went to the shop, and ...', 'it's raining, so ...', 'it's expensive, but ...'. This guide covers it along with the 'even if' family.`,
    ],
    sections: [
      {
        heading: `-(으)ㄴ / 는데: setting the scene`,
        body: [
          `Forms: action verbs and 있다 / 없다 take -는데 (가는데, 맛있는데), adjectives take -(으)ㄴ데 (바쁜데, 작은데), nouns 인데 (학생인데), and the past -았 / 었는데 for everything.`,
          `It gives background before a question, request or suggestion: 배고픈데 뭐 먹을까요? (I'm hungry, shall we eat something?), 내일 시간 있는데 만날래요?. It introduces a situation: 어제 명동에 갔는데 사람이 많았어요. And it contrasts, often with surprise: 열심히 공부했는데 시험을 못 봤어요.`,
        ],
        examples: [
          { ko: "날씨가 좋은데 산책할까요?", en: "The weather's nice. Shall we go for a walk?" },
          { ko: "제가 지금 바쁜데 이따가 전화해도 돼요?", en: "I'm busy right now. Can I call you later?" },
          { ko: "어제 친구를 만났는데 그 친구가 결혼한대요.", en: "I met a friend yesterday, and she says she's getting married." },
          { ko: "비싼데 맛은 별로예요.", en: "It's expensive, but it doesn't taste that good." },
        ],
      },
      {
        heading: `-지만 or -는데?`,
        body: [
          `-지만 is a clear, balanced 'but': two facts in contrast. -는데 is softer and broader: it can contrast, but it can also just give background. So use -지만 for 'A but B' contrasts, especially in writing (비싸지만 품질이 좋다); use -는데 to set up a question or request (where -지만 sounds odd), and for an unexpected outcome in conversation.`,
        ],
        examples: [
          { ko: "한국어는 어렵지만 재미있다.", en: "Korean is difficult but interesting." },
          { ko: "죄송한데 좀 비켜 주시겠어요?", en: "Sorry, could you move over a bit?" },
        ],
      },
      {
        heading: `Even if: -아 / 어도 and -더라도`,
        body: [
          `-아 / 어도 (same ㅏ / ㅗ rule) means 'even if, even though': 비가 와도 갈 거예요 (I'll go even if it rains). With 아무리 it means 'no matter how': 아무리 바빠도 아침은 꼭 먹어요. Nouns take (이)어도 / 여도: 주말이어도, 친구여도.`,
          `-더라도 is a stronger or less likely 'even if', often with a command or resolve after it: 힘들더라도 포기하지 마세요 (even if it's hard, don't give up), 무슨 일이 있더라도 갈게요 (whatever happens, I'll come).`,
        ],
        examples: [
          { ko: "아무리 피곤해도 운동은 매일 해요.", en: "However tired I am, I exercise every day." },
          { ko: "늦어도 열 시까지는 올게요.", en: "I'll be there by ten at the latest." },
          { ko: "실패하더라도 한번 해 보고 싶어요.", en: "Even if I fail, I want to give it a try." },
        ],
      },
      {
        heading: `Admittedly and instead: -기는 하다 and 대신(에)`,
        body: [
          `-기는 하다 concedes a point before a 'but': 넓기는 넓은데 비싸요 (it is big, but it's expensive), 가기는 갈 건데 늦을 거예요. In speech 기는 often becomes 긴: 좋긴 좋은데.`,
          `대신(에) means 'instead of' (noun + 대신에: 커피 대신에 차를 마셔요) or, after a modifier, 'in exchange for, but on the other hand': 이 집은 좁은 대신에 역에서 가까워요 (this flat is small, but in exchange it's close to the station).`,
        ],
        examples: [
          { ko: "맛있기는 한데 좀 비싸요.", en: "It's tasty, I'll give it that, but it's a bit expensive." },
          { ko: "월세가 싼 대신에 회사에서 좀 멀어요.", en: "The rent is cheap, but on the other hand it's a bit far from work." },
          { ko: "오늘은 제가 대신 갈게요.", en: "I'll go instead today." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "맛있은데",
        right: "맛있는데",
        why: `있다 / 없다 words take -는데, like action verbs.`,
      },
      {
        wrong: "학생는데",
        right: "학생인데",
        why: `Nouns take 인데.`,
      },
      {
        wrong: "배고프지만 뭐 먹을까요?",
        right: "배고픈데 뭐 먹을까요?",
        why: `To set up a suggestion or question, use -는데. -지만 is a contrastive 'but'.`,
        register: true,
      },
      {
        wrong: "비가 오도 갈 거예요.",
        right: "비가 와도 갈 거예요.",
        why: `-아 / 어도 contracts like -아요: 와도, 봐도, 해도.`,
      },
    ],
    faqs: [
      {
        q: `Can a sentence end in -는데?`,
        a: `Yes: -는데요 is a polite ending meaning 'but ...', 'so ...', leaving the rest unsaid. It's covered in the attitude endings guide.`,
      },
      {
        q: `What's the difference between -아도 and -더라도?`,
        a: `-아도 is the everyday 'even if / even though', for real or hypothetical situations. -더라도 leans hypothetical and emphatic: 'even supposing'. In many sentences both work.`,
      },
    ],
    related: ["linking-go-aseo-jiman", "attitude-endings", "contrast-and-concession-b2"],
    lessons: [
      "b1-setting-the-scene-1",
      "b1-contrast-and-surprise-2",
      "b1-but",
      "b1-even-if-even-though",
      "b1-even-if-it-happens",
      "b1-contrast-background-or-but",
      "b1-instead-of-trade-off",
      "b1-admittedly-but",
      "b1-contrast-concession",
    ],
  },
  {
    slug: "purpose-endings",
    title: "In Order To: -(으)려고, -기 위해(서) and -도록",
    description:
      "Three ways to express purpose: -(으)려고 (in order to; everyday), -기 위해(서) and 을 / 를 위해(서) (for the sake of; formal), and -도록 (so that, until), with -(으)러 vs -(으)려고 and -도록 하다.",
    level: "B1",
    intro: [
      `English uses 'to' and 'so that' for purpose. Korean picks an ending by register and by who does what: -(으)려고 for everyday intentions, -기 위해(서) for formal or emphatic goals, -도록 for a result you want to bring about, often for someone else.`,
    ],
    sections: [
      {
        heading: `-(으)려고 and -(으)러`,
        body: [
          `-(으)려고 means 'in order to' with any verb: 살을 빼려고 운동해요 (I exercise to lose weight), 한국에서 일하려고 한국어를 배워요. ㄹ stems add -려고 without 으: 만들려고. The main clause can't be a command or suggestion: *늦지 않으려고 빨리 가세요 → use -도록 or -(으)려면 instead.`,
          `-(으)러 (Beginner level) also means 'in order to', but only before verbs of movement (가다, 오다, 다니다): 밥 먹으러 가요. -(으)려고 works with any main verb: 밥 먹으려고 일찍 일어났어요.`,
        ],
        examples: [
          { ko: "아침에 일찍 일어나려고 알람을 세 개 맞췄어요.", en: "I set three alarms so I'd get up early." },
          { ko: "친구한테 주려고 케이크를 만들었어요.", en: "I made a cake to give to a friend." },
          { ko: "책을 빌리러 도서관에 갔어요.", en: "I went to the library to borrow a book." },
        ],
      },
      {
        heading: `-기 위해(서) and 을 / 를 위해(서)`,
        body: [
          `-기 위해(서) is the formal, written 'in order to', and it is common in speeches, essays and TOPIK writing: 건강을 지키기 위해서 매일 걷는다. After a noun, use 을 / 를 위해(서) (for the sake of, for): 가족을 위해서, 환경을 위해. Before a noun it becomes 을 / 를 위한: 외국인을 위한 안내 (a guide for foreigners).`,
          `-기 위해 works with action verbs, not adjectives: with adjectives, 건강해지기 위해 or 건강을 위해 usually sounds better than 건강하기 위해 (though a few, like 행복하기 위해, are common).`,
        ],
        examples: [
          { ko: "시험에 합격하기 위해 열심히 공부했다.", en: "I studied hard to pass the exam." },
          { ko: "아이들을 위해서 집 근처에 공원을 만들었어요.", en: "They built a park near the houses for the children." },
          { ko: "이것은 초보자를 위한 책이다.", en: "This is a book for beginners." },
        ],
      },
      {
        heading: `-도록: so that, until, and -도록 하다`,
        body: [
          `-도록 means 'so that' a result happens, and it works with commands: 늦지 않도록 일찍 출발하세요 (leave early so you're not late), 아이들이 볼 수 있도록 크게 써 주세요. It can also mean 'until, to the point that': 밤늦도록 일했어요 (I worked until late at night), 목이 아프도록 노래했어요.`,
          `-도록 하다 gives polite instructions or makes a resolution: 내일까지 제출하도록 하세요 (please make sure to submit it by tomorrow), 다음부터는 늦지 않도록 하겠습니다 (I'll make sure I'm not late from now on).`,
        ],
        examples: [
          { ko: "잊어버리지 않도록 메모해 두세요.", en: "Write it down so you don't forget." },
          { ko: "감기에 걸리지 않도록 조심하세요.", en: "Take care not to catch a cold." },
          { ko: "회의 자료는 미리 준비하도록 하겠습니다.", en: "I'll make sure the meeting materials are ready in advance." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "늦지 않으려고 빨리 가세요.",
        right: "늦지 않도록 빨리 가세요.",
        why: `-(으)려고 can't be followed by a command. Use -도록.`,
      },
      {
        wrong: "살을 빼러 운동해요.",
        right: "살을 빼려고 운동해요.",
        why: `-(으)러 only goes with verbs of movement. With 운동하다, use -(으)려고.`,
      },
      {
        wrong: "가족 위해서 일해요.",
        right: "가족을 위해서 일해요.",
        why: `After a noun the pattern is 을 / 를 위해(서). (In speech the particle is sometimes dropped, but write it.)`,
        register: true,
      },
      {
        wrong: "만들으려고",
        right: "만들려고",
        why: `ㄹ stems take -려고 without 으.`,
      },
    ],
    faqs: [
      {
        q: `Is -(으)려고 the same as -(으)려고 하다?`,
        a: `-(으)려고 하다 (Elementary) means 'intend to, be about to' and ends the sentence. -(으)려고 alone links a purpose to another clause.`,
      },
      {
        q: `Which purpose ending should I use in an essay?`,
        a: `-기 위해(서) and -도록 are the written choices. -(으)려고 sounds conversational in an essay.`,
      },
    ],
    related: ["suggestions-and-intentions", "wants-and-plans", "formal-connectives-for-writing"],
    lessons: [
      "b1-in-order-to",
      "b1-contrast-go-to-or-in-order-to",
      "b1-for-the-sake-of",
      "b1-so-that",
      "b1-until-and-make-sure",
      "b1-transform-spoken-to-written-purpose",
    ],
  },
  {
    slug: "reasons-and-results",
    title: "Reasons with Attitude: -느라고, -는 바람에, 덕분에, 탓에, -아서 그런지, -고 해서",
    description:
      "Beyond -아서 and -(으)니까: -느라고 (busy doing A, so not B), -는 바람에 (because of something unexpected), 덕분에 (thanks to), 탓에 (because of, with blame), -아서 그런지 (maybe because) and -고 해서 (among other reasons).",
    level: "B1",
    intro: [
      `The Elementary 'because' endings state a reason. The Intermediate ones add an attitude: whether the cause was your own busy activity, an unexpected event, something you're grateful for, or something you blame. Choosing the right one is what makes an excuse or an explanation sound natural.`,
    ],
    sections: [
      {
        heading: `-느라고: busy doing one thing, so not another`,
        body: [
          `-느라고 (or -느라) explains that doing A took your time or attention, so B suffered: 숙제하느라고 못 잤어요 (I didn't sleep because I was doing homework), 일하느라 바빠서 연락 못 했어요. The rules: both clauses have the same subject, the first verb is an action verb, it never takes a tense marker, and the result is usually negative. No commands or suggestions after it.`,
        ],
        examples: [
          { ko: "드라마 보느라고 밤을 새웠어요.", en: "I stayed up all night watching a drama." },
          { ko: "이사 준비하느라 정신이 없었어요.", en: "I was frantic getting ready to move." },
          { ko: "늦어서 죄송해요. 길을 찾느라고요.", en: "Sorry I'm late. I was trying to find the way." },
        ],
      },
      {
        heading: `-는 바람에: something unexpected happened`,
        body: [
          `-는 바람에 gives an unexpected or uncontrollable cause, usually with a bad result, and the main clause is in the past: 버스를 놓치는 바람에 지각했어요 (I was late because I missed the bus). The verb before it stays in the present modifier form, even for past events.`,
        ],
        examples: [
          { ko: "갑자기 비가 오는 바람에 옷이 다 젖었어요.", en: "It suddenly rained and my clothes got soaked." },
          { ko: "알람이 안 울리는 바람에 늦잠을 잤어요.", en: "My alarm didn't go off, so I overslept." },
        ],
      },
      {
        heading: `덕분에 and 탓에`,
        body: [
          `덕분에 means 'thanks to', for good results: 친구 덕분에 이사를 빨리 끝냈어요. With a verb, -(으)ㄴ / 는 덕분에: 선생님이 잘 가르쳐 주신 덕분에 합격했어요. 덕분에요 alone is a modest reply to 'how are you?' ('fine, thanks to you').`,
          `탓에 (or 탓으로) means 'because of', with blame: 날씨 탓에 경기가 취소됐다, 제가 늦게 출발한 탓에 비행기를 놓쳤어요. 남 탓을 하다 means 'to blame others'. 때문에 is neutral between the two.`,
        ],
        examples: [
          { ko: "덕분에 즐거운 시간을 보냈어요.", en: "Thanks to you, I had a great time." },
          { ko: "제가 실수한 탓에 일이 늦어졌어요.", en: "The work was delayed because of my mistake." },
        ],
      },
      {
        heading: `-아서 그런지 and -고 해서`,
        body: [
          `-아 / 어서 그런지 means 'maybe because, perhaps it's because': 잠을 못 자서 그런지 머리가 아파요 (maybe it's because I didn't sleep, but my head hurts). Nouns: (이)라서 그런지: 주말이라서 그런지 사람이 많네요.`,
          `-고 해서 gives one reason among others: 날씨도 좋고 해서 산책했어요 (the weather was nice and all, so I went for a walk). It sounds relaxed and modest.`,
        ],
        examples: [
          { ko: "날씨가 추워서 그런지 감기 걸린 사람이 많아요.", en: "Maybe because it's cold, a lot of people have colds." },
          { ko: "배도 고프고 해서 라면을 끓였어요.", en: "I was hungry and all, so I made some ramyeon." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "숙제했느라고 못 잤어요.",
        right: "숙제하느라고 못 잤어요.",
        why: `-느라고 never takes a tense marker.`,
      },
      {
        wrong: "비가 오느라고 못 갔어요.",
        right: "비가 와서 못 갔어요.",
        why: `-느라고 needs the same subject doing a deliberate activity. Rain isn't busy doing anything: use -아서 or -는 바람에.`,
      },
      {
        wrong: "선생님 탓에 합격했어요.",
        right: "선생님 덕분에 합격했어요.",
        why: `탓 is for blame; for a good result use 덕분에.`,
        register: true,
      },
      {
        wrong: "공부하느라고 일찍 자세요.",
        right: "공부하느라고 못 잤어요.",
        why: `No command after -느라고; it explains a result that already happened or is happening.`,
      },
    ],
    faqs: [
      {
        q: `Is -는 바람에 always negative?`,
        a: `Usually, but not always: it marks an unexpected cause. 친구가 갑자기 찾아오는 바람에 즐거운 시간을 보냈어요 is fine, just less common.`,
      },
      {
        q: `What's the difference between -느라고 and -아서?`,
        a: `-아서 is a neutral reason. -느라고 focuses on time or energy spent on something, as an excuse: 'I was so busy doing X that ...'.`,
      },
    ],
    related: ["reasons-because", "background-and-concession", "time-links"],
    lessons: [
      "b1-too-busy-doing-1",
      "b1-too-busy-doing-2",
      "b1-something-unexpected",
      "b1-thanks-to",
      "b1-blame",
      "b1-contrast-reason-endings",
      "b1-maybe-because-of-that",
      "b1-among-other-reasons",
      "b1-contrast-sure-or-maybe",
    ],
  },
  {
    slug: "time-links",
    title: "Time Links: -자마자, -는 대로, -는 길에, -는 김에, -다가 and -았 / 었다가",
    description:
      "As soon as (-자마자, -는 대로), on the way (-는 길에), while you're at it (-(으)ㄴ / 는 김에), doing A and then switching to B (-다가), the cause of an accident (-다가), and did A, then undid it (-았 / 었다가).",
    level: "B1",
    intro: [
      `These connectives describe how one event follows or interrupts another. Each has a precise shape, and English speakers often reach for -고 or -아서 where Korean wants one of these.`,
    ],
    sections: [
      {
        heading: `As soon as: -자마자 and -는 대로`,
        body: [
          `-자마자 means 'as soon as, the moment': 집에 오자마자 잤어요 (I went to bed as soon as I got home). It works with any tense in the main clause. -는 대로 also means 'as soon as', but only for future plans and instructions: 도착하는 대로 연락 주세요 (get in touch as soon as you arrive), 확인하는 대로 알려 드리겠습니다. Never for a past event.`,
        ],
        examples: [
          { ko: "수업이 끝나자마자 뛰어나갔어요.", en: "As soon as class ended, I ran out." },
          { ko: "결과가 나오는 대로 전화드릴게요.", en: "I'll call you as soon as the results are out." },
          { ko: "눕자마자 잠이 들었어요.", en: "I fell asleep the moment I lay down." },
        ],
      },
      {
        heading: `On the way and while you're at it`,
        body: [
          `-는 길에 means 'on the way' and goes with 가다, 오다 and their compounds: 집에 가는 길에 마트에 들렀어요 (I stopped at the supermarket on my way home), 출근하는 길에. -(으)ㄴ / 는 김에 means 'while you're at it, since you're doing it anyway': 나간 김에 우유 좀 사 와 (since you're out, grab some milk), 말 나온 김에 (now that we're on the subject).`,
        ],
        examples: [
          { ko: "회사 가는 길에 커피를 샀어요.", en: "I bought a coffee on my way to work." },
          { ko: "청소하는 김에 창문도 닦았어요.", en: "While I was cleaning anyway, I washed the windows too." },
          { ko: "부산에 간 김에 친구도 만났어요.", en: "Since I was in Busan anyway, I saw a friend too." },
        ],
      },
      {
        heading: `-다가: switching midway`,
        body: [
          `-다가 (often -다) means doing A and then, partway through, switching to B or being interrupted: 공부하다가 잠이 들었어요 (I fell asleep while studying), 쭉 가다가 오른쪽으로 가세요 (go straight, then turn right). The subject is the same. It also gives the activity during which an accident happened: 뛰다가 넘어졌어요 (I fell over while running), 요리하다가 손을 베었어요.`,
        ],
        examples: [
          { ko: "드라마를 보다가 울었어요.", en: "I cried while watching the drama." },
          { ko: "회사에 다니다가 대학원에 갔어요.", en: "I was working, and then I went to grad school." },
          { ko: "핸드폰을 보면서 걷다가 부딪혔어요.", en: "I bumped into someone while walking and looking at my phone." },
        ],
      },
      {
        heading: `-았 / 었다가: did it, then`,
        body: [
          `-았 / 었다가 means A was completed, and then B (often its reverse) followed: 문을 열었다가 닫았어요 (I opened the door and then shut it again), 코트를 입었다가 더워서 벗었어요, 은행에 갔다가 왔어요 (I went to the bank and came back). Compare: 학교에 가다가 (on the way to school, interrupted) vs 학교에 갔다가 (went to school, then left).`,
        ],
        table: {
          headers: ["Form", "Meaning", "Example"],
          rows: [
            ["가다가", "while going, switched or interrupted", "가다가 친구를 만났어요."],
            ["가는 길에", "on the way (stopping off)", "가는 길에 빵을 샀어요."],
            ["갔다가", "went (finished), then", "갔다가 바로 왔어요."],
          ],
        },
        examples: [
          { ko: "편의점에 갔다가 올게요.", en: "I'll pop to the convenience store and come back." },
          { ko: "예약했다가 취소했어요.", en: "I made a booking and then cancelled it." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "어제 집에 도착하는 대로 잤어요.",
        right: "어제 집에 도착하자마자 잤어요.",
        why: `-는 대로 is only for future plans and instructions. For a past event, use -자마자.`,
      },
      {
        wrong: "공부했다가 잠이 들었어요.",
        right: "공부하다가 잠이 들었어요.",
        why: `To say you fell asleep while studying: Interrupted in the middle is -다가. -았다가 means A was finished first.`,
        register: true,
      },
      {
        wrong: "제가 운전하다가 동생이 잤어요.",
        right: "제가 운전하는 동안 동생이 잤어요.",
        why: `-다가 needs the same subject. With two people, use -는 동안.`,
      },
      {
        wrong: "집에 가는 길에 숙제를 했어요.",
        right: "집에 가는 길에 마트에 들렀어요.",
        why: `-는 길에 describes something done during the trip, typically stopping somewhere. Homework on the way is better with -(으)면서.`,
        register: true,
      },
    ],
    faqs: [
      {
        q: `Is -다 the same as -다가?`,
        a: `Yes, -다 is the spoken short form: 가다 보니까, 자다 깼어요.`,
      },
      {
        q: `Is -는 김에 positive or negative?`,
        a: `Neutral to positive: it's about taking advantage of an opportunity. It can't express a cause of something bad.`,
      },
    ],
    related: ["time-clauses", "reasons-and-results", "storytelling-deoni-ja"],
    lessons: [
      "b1-as-soon-as",
      "b1-as-soon-as-instructions",
      "b1-on-the-way",
      "b1-while-youre-at-it",
      "b1-switching-midway",
      "b1-how-accidents-happen",
      "b1-did-it-then",
      "b1-contrast-time-links",
    ],
  },
  {
    slug: "passive-verbs",
    title: "Passive Verbs: -이-, -히-, -리-, -기-, -아 / 어지다 and 되다",
    description:
      "How Korean says 'the door was opened' and 'I got bitten': the passive suffixes (보이다, 닫히다, 열리다, 안기다), the doer with 에게 / 한테 or 에, passive -아 / 어지다, 하다 → 되다, and why Korean uses the passive less than English.",
    level: "B1",
    intro: [
      `English uses the passive freely: the window was broken, the email was sent. Korean prefers active sentences or simply drops the doer, and it builds passives from a set of verb-specific suffixes rather than one regular form. You learn the common passive verbs as vocabulary, and the rules tell you how to use them.`,
    ],
    sections: [
      {
        heading: `The four suffixes`,
        body: [
          `Many transitive verbs have a passive partner with -이-, -히-, -리- or -기- inserted after the stem. There's no rule for which suffix a verb takes, but the stem's last sound gives a hint: -히- often follows ㄱ ㄷ ㅂ ㅈ (먹히다, 닫히다, 잡히다, 읽히다), -리- follows ㄹ (열리다, 팔리다, 걸리다), -기- often follows ㄴ ㅁ ㅅ (안기다, 감기다, 씻기다).`,
          `In the passive, the object of the active verb becomes the subject with 이 / 가: 문을 열었어요 → 문이 열렸어요.`,
        ],
        table: {
          headers: ["Suffix", "Active", "Passive"],
          rows: [
            ["-이-", "보다, 쓰다, 놓다, 쌓다, 바꾸다", "보이다, 쓰이다, 놓이다, 쌓이다, 바뀌다"],
            ["-히-", "닫다, 막다, 잡다, 먹다, 읽다, 밟다", "닫히다, 막히다, 잡히다, 먹히다, 읽히다, 밟히다"],
            ["-리-", "열다, 팔다, 듣다, 걸다, 풀다, 물다", "열리다, 팔리다, 들리다, 걸리다, 풀리다, 물리다"],
            ["-기-", "안다, 끊다, 쫓다, 잠그다", "안기다, 끊기다, 쫓기다, 잠기다"],
          ],
        },
        examples: [
          { ko: "바람 때문에 문이 닫혔어요.", en: "The door blew shut." },
          { ko: "출근 시간이라서 길이 많이 막혀요.", en: "It's rush hour, so the roads are jammed." },
          { ko: "이 책은 요즘 정말 잘 팔려요.", en: "This book is selling really well these days." },
          { ko: "멀리서 바다가 보여요.", en: "You can see the sea in the distance." },
          { ko: "전화가 갑자기 끊겼어요.", en: "The call suddenly cut off." },
        ],
      },
      {
        heading: `Who did it?`,
        body: [
          `Korean passives usually leave the doer out. When it's a person or animal, it takes 에게 or 한테: 모기한테 물렸어요 (I got bitten by a mosquito), 경찰에게 잡혔어요. When it's a thing or force, it takes 에: 바람에 날렸어요, 눈에 덮였어요.`,
          `Many passives are best translated as 'can be seen / heard' or as an English intransitive: 보이다 (be visible, can see), 들리다 (be audible, can hear), 풀리다 (get solved, ease), 걸리다 (take time; catch a cold).`,
        ],
        examples: [
          { ko: "길에서 개한테 물렸어요.", en: "I got bitten by a dog in the street." },
          { ko: "옆방에서 음악 소리가 들려요.", en: "I can hear music from the next room." },
          { ko: "감기에 걸렸어요.", en: "I've caught a cold." },
        ],
      },
      {
        heading: `-아 / 어지다 and 되다`,
        body: [
          `Verbs without a suffix passive can use -아 / 어지다: 만들어지다 (be made), 지워지다 (be erased), 정해지다 (be decided), 알려지다 (become known). It's written as one word.`,
          `Sino-Korean 하다 verbs switch to 되다: 취소하다 → 취소되다 (be cancelled), 결정하다 → 결정되다, 연기하다 → 연기되다 (be postponed). This is the passive you'll see most in news and notices.`,
        ],
        examples: [
          { ko: "이 다리는 100년 전에 만들어졌다.", en: "This bridge was built a hundred years ago." },
          { ko: "비 때문에 경기가 취소됐어요.", en: "The match was cancelled because of the rain." },
          { ko: "회의가 다음 주로 연기되었습니다.", en: "The meeting has been postponed until next week." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "문이 열었어요.",
        right: "문이 열렸어요.",
        why: `With the door as subject, use the passive 열리다. 열다 needs someone who opens it.`,
      },
      {
        wrong: "모기를 물렸어요.",
        right: "모기한테 물렸어요.",
        why: `In the passive, the doer takes 한테 / 에게, not 을 / 를.`,
      },
      {
        wrong: "회의가 취소했어요.",
        right: "회의가 취소됐어요.",
        why: `The meeting didn't cancel anything: 하다 → 되다 for the passive.`,
      },
      {
        wrong: "보여지다",
        right: "보이다",
        why: `보이다 is already passive; adding -어지다 makes a double passive, avoided in careful Korean.`,
        register: true,
      },
    ],
    faqs: [
      {
        q: `Should I translate English passives into Korean passives?`,
        a: `Often not. 'The email was sent yesterday' is more natural as 어제 이메일을 보냈어요 (subject dropped). Use passives for things that happen to the subject (막히다, 걸리다, 끊기다) and in news style.`,
      },
      {
        q: `Why are 보이다 and 읽히다 also causatives?`,
        a: `Some suffixed verbs are both passive and causative: 보이다 is 'be seen' and 'show'; 읽히다 is 'be read' and 'make someone read'. Context and particles tell them apart. See the causative guide.`,
      },
    ],
    related: ["causative-verbs", "completed-actions", "change-and-becoming", "progressive-and-states"],
    lessons: [
      "b1-passive-suffixes-1",
      "b1-passive-suffixes-2",
      "b1-passive-agent",
      "b1-passive-become-forms",
      "b1-passive-everyday-chunks",
      "b1-contrast-active-passive",
    ],
  },
  {
    slug: "causative-verbs",
    title: "Causative Verbs: Making and Letting (먹이다, 입히다, -게 하다)",
    description:
      "How Korean says 'feed', 'dress the child', 'wake someone up' and 'make or let someone do': the causative suffixes -이-, -히-, -리-, -기-, -우-, -구-, -추-, the sentence pattern, and -게 하다.",
    level: "B1",
    intro: [
      `A causative verb means 'make or let someone or something do X'. English often has a separate word (feed = make eat, show = make see, raise = make grow). Korean builds them from the base verb with a suffix, and many of the results are everyday words you already need: 먹이다 (feed), 입히다 (dress someone), 깨우다 (wake someone up), 알리다 (inform).`,
    ],
    sections: [
      {
        heading: `The suffixes`,
        body: [
          `The first four suffixes are the same as the passive ones (-이-, -히-, -리-, -기-), plus three that are only causative: -우-, -구-, -추-. Again, learn each verb as a word.`,
        ],
        table: {
          headers: ["Suffix", "Base", "Causative"],
          rows: [
            ["-이-", "먹다, 보다, 끓다, 죽다", "먹이다 (feed), 보이다 (show), 끓이다 (boil), 죽이다 (kill)"],
            ["-히-", "입다, 앉다, 눕다, 읽다, 넓다", "입히다 (dress), 앉히다 (seat), 눕히다 (lay down), 읽히다, 넓히다 (widen)"],
            ["-리-", "울다, 알다, 살다, 늘다, 돌다", "울리다 (make cry), 알리다 (inform), 살리다 (save), 늘리다 (increase), 돌리다 (turn)"],
            ["-기-", "웃다, 씻다, 신다, 맡다, 벗다", "웃기다 (make laugh), 씻기다 (wash someone), 신기다, 맡기다 (entrust), 벗기다"],
            ["-우-", "깨다, 자다, 타다, 서다, 크다", "깨우다 (wake), 재우다 (put to sleep), 태우다 (give a ride), 세우다 (stop, build), 키우다 (raise)"],
            ["-구- / -추-", "달다; 낮다, 늦다, 맞다", "달구다; 낮추다 (lower), 늦추다 (delay), 맞추다 (fit, adjust)"],
          ],
        },
        examples: [
          { ko: "아기한테 우유를 먹였어요.", en: "I fed the baby milk." },
          { ko: "엄마가 아이에게 옷을 입혀요.", en: "The mother is dressing the child." },
          { ko: "내일 일곱 시에 깨워 주세요.", en: "Please wake me at seven tomorrow." },
          { ko: "그 영화 진짜 웃겨요.", en: "That film is really funny." },
          { ko: "저는 고양이 두 마리를 키워요.", en: "I have two cats." },
        ],
      },
      {
        heading: `The sentence pattern`,
        body: [
          `In a causative sentence, the person who does the base action becomes an object or takes 에게 / 한테. If the base verb is intransitive (자다, 울다, 웃다), the person takes 을 / 를: 아기를 재웠어요 (I put the baby to sleep). If the base verb has its own object (먹다, 입다), the person takes 에게 / 한테 and the thing keeps 을 / 를: 아이에게 밥을 먹였어요.`,
        ],
        examples: [
          { ko: "동생을 울렸어요.", en: "I made my little brother cry." },
          { ko: "친구한테 사진을 보여 줬어요.", en: "I showed my friend the photos." },
          { ko: "결과를 모두에게 알려 주세요.", en: "Please let everyone know the results." },
        ],
      },
      {
        heading: `-게 하다: make or let`,
        body: [
          `Any verb can be made causative with -게 하다: 아이에게 책을 읽게 했어요 (I made / had the child read a book), 일찍 가게 해 주세요 (please let me leave early). -게 하다 is indirect: you cause the person to act themselves. The suffix causatives are often direct, hands-on actions: 아이에게 밥을 먹였어요 (I fed the child, spoon in hand) vs 아이에게 밥을 먹게 했어요 (I made the child eat).`,
        ],
        examples: [
          { ko: "선생님이 학생들에게 큰 소리로 읽게 하셨어요.", en: "The teacher had the students read aloud." },
          { ko: "부모님이 밤늦게 못 나가게 하세요.", en: "My parents don't let me go out late at night." },
          { ko: "걱정하게 해서 미안해요.", en: "Sorry for making you worry." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "아기를 우유를 먹었어요.",
        right: "아기한테 우유를 먹였어요.",
        why: `'Feed' is the causative 먹이다, and the person fed takes 한테 / 에게.`,
      },
      {
        wrong: "저를 일곱 시에 깨 주세요.",
        right: "저를 일곱 시에 깨워 주세요.",
        why: `깨다 is 'wake up (yourself)'. Waking someone else is 깨우다.`,
      },
      {
        wrong: "사진을 친구한테 봤어요.",
        right: "사진을 친구한테 보여 줬어요.",
        why: `'Show' is the causative 보이다, usually with 주다: 보여 주다.`,
      },
      {
        wrong: "소개시켜 드릴게요.",
        right: "소개해 드릴게요.",
        why: `-시키다 is overused in speech where plain 하다 already means the action (소개하다, 교육하다). Careful Korean avoids it.`,
        register: true,
      },
    ],
    faqs: [
      {
        q: `How can I tell 보이다 'be seen' from 보이다 'show'?`,
        a: `By the particles. Passive: 산이 보여요 (the mountain is visible). Causative: 친구에게 사진을 보였어요 (I showed a friend a photo); in speech 'show' is usually 보여 주다.`,
      },
      {
        q: `Is 시키다 a causative?`,
        a: `시키다 means 'order, make someone do' (일을 시키다; also 'order food': 치킨 시킬까?). As a suffix in 공부시키다 or 운동시키다 it's a real causative (make someone study). Don't add it where 하다 means the same.`,
      },
    ],
    related: ["passive-verbs", "giving-and-favours", "hada-doeda-sikida"],
    lessons: [
      "b1-causative-suffixes-1",
      "b1-causative-suffixes-2",
      "b1-causative-sentence-pattern",
      "b1-make-or-let",
      "b1-contrast-causative-or-make-let",
      "b1-contrast-passive-or-causative",
    ],
  },
  {
    slug: "completed-actions",
    title: "Completed Actions: -아 / 어 놓다, -아 / 어 두다, -아 / 어 버리다, -고 말다",
    description:
      "Auxiliary verbs that say how an action ended: done in advance or left as it is (-아 / 어 놓다), kept for later (-아 / 어 두다), done completely, with relief or regret (-아 / 어 버리다), and ended up despite yourself (-고 말다).",
    level: "B1",
    intro: [
      `Korean adds a second verb to say how an action turned out, where English uses words like 'already', 'in advance', 'completely' or 'ended up'. These auxiliaries are very common in conversation, and they add exactly the nuance that plain past tense lacks.`,
    ],
    sections: [
      {
        heading: `-아 / 어 놓다 and -아 / 어 두다`,
        body: [
          `-아 / 어 놓다 means doing something in advance or leaving it in a resulting state: 예약해 놓았어요 (I've booked ahead), 창문을 열어 놓았어요 (I've left the window open). In speech 놓아 contracts to 놔: 해 놨어요. -아 / 어 두다 is close, with the extra idea of keeping it for later use: 사진을 찍어 두세요 (take a photo to keep), 메모해 두었어요. 두었어요 contracts to 뒀어요.`,
          `Compare with the state form: 문이 열려 있어요 (the door is open: just the state) vs 문을 열어 놓았어요 (I've left the door open: someone did it deliberately).`,
        ],
        examples: [
          { ko: "식당은 제가 미리 예약해 놨어요.", en: "I've booked the restaurant in advance." },
          { ko: "에어컨을 켜 놓고 나갔어요.", en: "I went out and left the air conditioning on." },
          { ko: "중요한 건 적어 두세요.", en: "Write down the important things." },
          { ko: "남은 음식은 냉장고에 넣어 뒀어요.", en: "I put the leftovers in the fridge." },
        ],
      },
      {
        heading: `-아 / 어 버리다: completely, for better or worse`,
        body: [
          `-아 / 어 버리다 stresses that an action is completely finished, with a feeling attached: relief (숙제를 다 해 버렸어요, got it over with) or regret (케이크를 다 먹어 버렸어요, I ate the whole cake, oops). 잊어버리다 (forget) and 잃어버리다 (lose) have become single words.`,
        ],
        examples: [
          { ko: "기다리다가 그냥 가 버렸어요.", en: "I got tired of waiting and just left." },
          { ko: "지갑을 잃어버렸어요.", en: "I've lost my wallet." },
          { ko: "비밀을 말해 버렸어요.", en: "I let the secret slip." },
        ],
      },
      {
        heading: `-고 말다: ended up`,
        body: [
          `-고 말다 (usually -고 말았다) means an outcome happened despite efforts or wishes: 'ended up, in the end': 참으려고 했는데 웃고 말았어요 (I tried to hold it in but ended up laughing). In written narratives it marks a dramatic, often unfortunate outcome: 결국 사고가 나고 말았다. With a strong intention, -고 말겠다 means 'I'll do it no matter what': 꼭 합격하고 말겠어요.`,
        ],
        examples: [
          { ko: "다이어트 중인데 케이크를 먹고 말았어요.", en: "I'm on a diet, but I ended up eating cake." },
          { ko: "결국 두 사람은 헤어지고 말았다.", en: "In the end, the two of them broke up." },
          { ko: "이번에는 꼭 이기고 말겠어요.", en: "This time I'm going to win, whatever it takes." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "창문이 열어 놓았어요.",
        right: "창문을 열어 놓았어요.",
        why: `-아 / 어 놓다 is active: someone opened it, so 창문 is the object. For the state alone: 창문이 열려 있어요.`,
      },
      {
        wrong: "잊어 버렸어요",
        right: "잊어버렸어요",
        why: `잊어버리다 and 잃어버리다 are single verbs written without a space.`,
      },
      {
        wrong: "약속을 잃어버렸어요.",
        right: "약속을 잊어버렸어요.",
        why: `잃어버리다 is 'lose something'; 잊어버리다 is 'forget'.`,
      },
      {
        wrong: "좋은 일이 생기고 말았어요.",
        right: "좋은 일이 생겼어요.",
        why: `-고 말다 is for outcomes that happen despite you, usually unwelcome. For good news, it sounds odd.`,
        register: true,
      },
    ],
    faqs: [
      {
        q: `Is -아 / 어 놓다 the same as -아 / 어 두다?`,
        a: `Often interchangeable: 예약해 놓다 / 예약해 두다. -두다 leans toward keeping or storing for later; -놓다 toward leaving in a state. In speech -놓다 is more frequent.`,
      },
      {
        q: `Does -아 / 어 버리다 always sound negative?`,
        a: `No. It can express relief, decisiveness or even a bit of defiance: 그냥 사 버렸어요 (I just went ahead and bought it).`,
      },
    ],
    related: ["progressive-and-states", "passive-verbs", "regret-and-near-misses"],
    lessons: [
      "b1-done-in-advance",
      "b1-leave-as-is",
      "b1-keep-for-later",
      "b1-resulting-state-passive",
      "b1-contrast-left-open-or-is-open",
      "b1-all-gone",
      "b1-ended-up",
    ],
  },
  {
    slug: "regret-and-near-misses",
    title: "Regret and Near Misses: -(으)ㄹ걸, -았 / 었어야 했는데, -(으)ㄹ 뻔했다, -아 / 어야지",
    description:
      "I should have (-(으)ㄹ걸 그랬다, -았 / 었어야 했는데), I shouldn't have (-지 말걸), I almost (-(으)ㄹ 뻔했다), and I must / you should (-아 / 어야지요).",
    level: "B1",
    intro: [
      `Regret, near misses and resolutions all come up constantly in conversation. Korean has compact endings for each, and they are warmer and more idiomatic than translating 'I should have' word for word.`,
    ],
    sections: [
      {
        heading: `I should have: -(으)ㄹ걸 (그랬다)`,
        body: [
          `-(으)ㄹ걸 그랬어요 means 'I should have (but didn't)': 우산을 가져올걸 그랬어요 (I should have brought an umbrella). Talking to yourself or a friend, -(으)ㄹ걸 alone is enough: 더 일찍 출발할걸. 'I shouldn't have' is -지 말걸 (그랬다): 그 말 하지 말걸. The ㄱ is tensed in speech: [가져올껄].`,
          `For a stronger, more serious 'should have', use -았 / 었어야 했는데: 미리 연락했어야 했는데 죄송합니다 (I should have let you know in advance; I'm sorry). Its negative is -지 말았어야 했는데.`,
        ],
        examples: [
          { ko: "아, 어제 일찍 잘걸 그랬어요.", en: "Ugh, I should have gone to bed early last night." },
          { ko: "그렇게 많이 먹지 말걸.", en: "I shouldn't have eaten so much." },
          { ko: "더 열심히 준비했어야 했는데 후회돼요.", en: "I should have prepared harder. I regret it." },
          { ko: "그때 그 집을 샀어야 했는데.", en: "I really should have bought that house back then." },
        ],
      },
      {
        heading: `I almost: -(으)ㄹ 뻔했다`,
        body: [
          `-(으)ㄹ 뻔했다 means something almost happened but didn't, usually something bad: 넘어질 뻔했어요 (I almost fell), 비행기를 놓칠 뻔했어요. It is always in the past. Compare 거의 (almost, nearly, for quantity or completion): 거의 다 먹었어요 (I've eaten almost all of it). 거의 넘어졌어요 sounds odd; use -(으)ㄹ 뻔했다 for near misses.`,
          `-(으)ㄹ 뻔했다 also exaggerates: 배고파서 죽을 뻔했어요 (I nearly died of hunger), 웃겨서 죽을 뻔했어요.`,
        ],
        examples: [
          { ko: "늦잠 자서 지각할 뻔했어요.", en: "I overslept and was nearly late." },
          { ko: "차에 부딪힐 뻔했어요.", en: "I almost got hit by a car." },
          { ko: "하마터면 큰일 날 뻔했어요.", en: "That was nearly a disaster." },
        ],
      },
      {
        heading: `I must, you should: -아 / 어야지(요)`,
        body: [
          `-아 / 어야지(요) expresses a resolution ('I must, I'd better'): 내일부터 운동해야지 (I must start exercising from tomorrow). Said to someone else, it gives firm advice: 아프면 병원에 가야지요 (if you're ill, you should go to the doctor). In the past, -았 / 었어야지 scolds: 미리 말했어야지! (you should have told me!).`,
        ],
        examples: [
          { ko: "이번 주말에는 꼭 청소해야지.", en: "I really must clean this weekend." },
          { ko: "밥은 먹고 다녀야지요.", en: "You've got to eat properly, you know." },
          { ko: "늦으면 전화를 했어야지.", en: "If you were going to be late, you should have called." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "우산을 가져올께 그랬어요.",
        right: "우산을 가져올걸 그랬어요.",
        why: `-(으)ㄹ걸 is written with 걸 (said [껄]) and attached to the verb.`,
      },
      {
        wrong: "넘어질 뻔해요.",
        right: "넘어질 뻔했어요.",
        why: `-(으)ㄹ 뻔하다 is always past: it almost happened.`,
      },
      {
        wrong: "거의 사고가 났어요.",
        right: "사고가 날 뻔했어요.",
        why: `For a near miss, use -(으)ㄹ 뻔했다. 거의 suggests the accident partly happened.`,
        register: true,
      },
      {
        wrong: "부장님, 미리 말씀하셨어야지요.",
        right: "부장님, 미리 말씀해 주셨으면 좋았을 텐데요.",
        why: `-았 / 었어야지 scolds. To a senior, it sounds like a reprimand.`,
        register: true,
      },
    ],
    faqs: [
      {
        q: `Is -(으)ㄹ걸 the same as -(으)ㄹ걸요?`,
        a: `No. -(으)ㄹ걸 (그랬다) is regret. -(으)ㄹ걸요 with a rising tone is a guess: 아마 벌써 갔을걸요 (he's probably already left, I bet). See the guessing guide.`,
      },
      {
        q: `What does 하마터면 add?`,
        a: `하마터면 is an adverb that goes with -(으)ㄹ 뻔했다 to stress the danger: 'I very nearly ...'.`,
      },
    ],
    related: ["completed-actions", "hypotheticals-damyeon", "guessing-na-boda-tende", "counterfactuals-and-impossibility"],
    lessons: [
      "b1-should-have",
      "b1-shouldnt-have",
      "b1-really-should-have",
      "b1-almost",
      "b1-contrast-almost",
      "b1-i-must-you-should",
    ],
  },
  {
    slug: "guessing-na-boda-tende",
    title: "Guessing from Evidence: -나 보다, -(으)ㄴ가 보다, -(으)ㄹ 텐데, -(으)ㄹ걸요",
    description:
      "It seems (judging from what I see): -나 보다 and -(으)ㄴ가 보다; a guess as background or a worry: -(으)ㄹ 텐데(요); since it will be so: -(으)ㄹ 테니까; and I bet: -(으)ㄹ걸요.",
    level: "B1",
    intro: [
      `Elementary Korean gave you 것 같다 for 'it seems'. The Intermediate guessing forms are more specific: -나 보다 draws a conclusion from evidence in front of you, -(으)ㄹ 텐데 uses a guess as the background for a worry or suggestion, and -(으)ㄹ걸요 bets on an answer.`,
    ],
    sections: [
      {
        heading: `-나 보다 and -(으)ㄴ가 보다`,
        body: [
          `Use these when you infer something from what you observe: 불이 꺼져 있네. 집에 없나 봐요 (the lights are off. He must not be home). Action verbs and 있다 / 없다 take -나 보다 (오나 봐요, 맛있나 봐요), and the past -았 / 었나 보다 (비가 왔나 봐요). Adjectives take -(으)ㄴ가 보다 (바쁜가 봐요, 좋은가 봐요), and nouns 인가 보다 (학생인가 봐요). In speech many people now also say -나 보다 with adjectives.`,
          `It's not used about yourself, unless you're discovering your own state: 제가 많이 피곤했나 봐요 (I must have been really tired).`,
        ],
        examples: [
          { ko: "사람들이 우산을 쓰고 있네요. 비가 오나 봐요.", en: "People have umbrellas up. It must be raining." },
          { ko: "민수 씨 표정이 안 좋아요. 무슨 일이 있나 봐요.", en: "Minsu doesn't look happy. Something must have happened." },
          { ko: "그 식당은 줄이 길어요. 맛있나 봐요.", en: "There's a long queue at that restaurant. It must be good." },
          { ko: "요즘 많이 바쁜가 봐요.", en: "You must be very busy these days." },
        ],
      },
      {
        heading: `-(으)ㄹ 텐데(요): a guess, then a worry or suggestion`,
        body: [
          `-(으)ㄹ 텐데 states a strong expectation as background: 내일 추울 텐데 따뜻하게 입으세요 (it'll probably be cold tomorrow, so dress warmly). At the end of a sentence, -(으)ㄹ 텐데요 expresses worry, sympathy or a wish: 많이 피곤하실 텐데요 (you must be very tired), 시간이 있으면 좋을 텐데 (it would be nice if I had time). For the past: -았 / 었을 텐데 (힘들었을 텐데 고생했어요).`,
        ],
        examples: [
          { ko: "지금 출발하면 길이 막힐 텐데 좀 이따가 가요.", en: "The roads will be jammed if we leave now. Let's go a bit later." },
          { ko: "혼자 이사하느라 힘들었을 텐데 왜 말 안 했어요?", en: "Moving on your own must have been hard. Why didn't you say?" },
          { ko: "같이 가면 좋을 텐데요.", en: "It'd be nice if you could come too." },
        ],
      },
      {
        heading: `-(으)ㄹ 테니까 and -(으)ㄹ걸요`,
        body: [
          `-(으)ㄹ 테니까 gives a reason based on what will be (or what I will do), usually before advice or a request: 제가 설거지할 테니까 쉬세요 (I'll do the washing up, so you rest), 길이 막힐 테니까 지하철 타세요. With 'I', it's a promise-like offer.`,
          `-(으)ㄹ걸요, with a rising tone, is a confident guess, often gently correcting the listener: 그 가게 오늘 문 닫았을걸요 (I bet that shop is shut today), 아마 모를걸요.`,
        ],
        examples: [
          { ko: "제가 자리를 맡아 놓을 테니까 천천히 오세요.", en: "I'll save us seats, so take your time." },
          { ko: "지금 가면 아마 늦을걸요.", en: "If you go now, you'll probably be late, I bet." },
          { ko: "민수 씨는 벌써 집에 갔을걸요.", en: "I bet Minsu has already gone home." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "제가 배고프나 봐요.",
        right: "배고파요.",
        why: `You don't infer your own present state from evidence. (Exception: discovering it: 제가 많이 배고팠나 봐요.)`,
        register: true,
      },
      {
        wrong: "바쁘나 봐요.",
        right: "바쁜가 봐요.",
        why: `In writing and careful speech: The standard pattern for adjectives is -(으)ㄴ가 보다; -나 보다 with adjectives is spoken.`,
        register: true,
      },
      {
        wrong: "추울 텐데 따뜻하게 입을 테니까요.",
        right: "추울 텐데 따뜻하게 입으세요.",
        why: `-(으)ㄹ 텐데 sets up the main clause; here the natural follow-up is advice.`,
      },
      {
        wrong: "학생인 나 봐요.",
        right: "학생인가 봐요.",
        why: `Nouns take 인가 보다, written together.`,
      },
    ],
    faqs: [
      {
        q: `How is -나 보다 different from -는 것 같다?`,
        a: `-는 것 같다 is a general 'it seems / I think', including your own opinions. -나 보다 is an inference from evidence you can see, and isn't used for your own opinions.`,
      },
      {
        q: `Is 텐데 from 터?`,
        a: `Yes: -(으)ㄹ 터 (expectation) + 이다 + -ㄴ데. That's why 텐데 and 테니까 share the same core meaning of expectation.`,
      },
    ],
    related: ["guessing-and-seeming", "regret-and-near-misses", "worry-advice-wishes", "beliefs-and-evidence"],
    lessons: [
      "b1-it-looks-like-1",
      "b1-it-looks-like-2",
      "b1-contrast-guessing-endings",
      "b1-guess-as-background",
      "b1-worry-and-wishes",
      "b1-since-it-will",
      "b1-i-bet-probably",
    ],
  },
  {
    slug: "embedded-questions",
    title: "Embedded Questions: -(으)ㄴ / 는지 and -(으)ㄹ지",
    description:
      "How to say 'I don't know where he lives' or 'can you check whether it's open?': -는지 / -(으)ㄴ지 / 인지 with 알다, 모르다, 궁금하다, 확인하다; yes/no questions with -는지 안 -는지; -(으)ㄹ지 for the future, and -(으)ㄹ지도 모르다 (might).",
    level: "B1",
    intro: [
      `When a question becomes part of a larger sentence (I wonder why, do you know where, let me check whether), Korean marks it with -지. The question word stays inside, and the main verb is usually one of knowing, wondering, asking or checking.`,
    ],
    sections: [
      {
        heading: `The forms`,
        body: [
          `Action verbs and 있다 / 없다 take -는지 (가는지, 있는지); adjectives take -(으)ㄴ지 (바쁜지, 좋은지); nouns take 인지 (누구인지, 얼마인지); the past is -았 / 었는지 for everything. ㄹ stems drop ㄹ: 사는지, 먼지.`,
          `Typical main verbs: 알다, 모르다, 궁금하다 (wonder), 물어보다, 알아보다 (look into), 확인하다 (check), 기억나다 (remember), 생각나다.`,
        ],
        table: {
          headers: ["", "Present", "Past"],
          rows: [
            ["action verb", "어디 가는지", "어디 갔는지"],
            ["있다 / 없다", "시간이 있는지", "시간이 있었는지"],
            ["adjective", "얼마나 바쁜지", "얼마나 바빴는지"],
            ["noun", "누구인지 (누군지)", "누구였는지"],
          ],
        },
        examples: [
          { ko: "민수 씨가 어디 사는지 알아요?", en: "Do you know where Minsu lives?" },
          { ko: "회의가 몇 시에 시작하는지 확인해 주세요.", en: "Please check what time the meeting starts." },
          { ko: "그 사람이 누군지 기억이 안 나요.", en: "I can't remember who that person is." },
          { ko: "왜 그렇게 화가 났는지 궁금해요.", en: "I wonder why he got so angry." },
        ],
      },
      {
        heading: `Whether or not`,
        body: [
          `A yes/no question becomes -는지 alone or -는지 안 -는지 / -는지 아닌지 (whether or not): 문을 열었는지 확인해 보세요 (check whether it's open), 그 사람이 오는지 안 오는지 몰라요, 사실인지 아닌지.`,
        ],
        examples: [
          { ko: "식당이 오늘 문을 여는지 전화해 볼게요.", en: "I'll call to see whether the restaurant is open today." },
          { ko: "이게 맞는지 틀린지 모르겠어요.", en: "I'm not sure whether this is right or wrong." },
        ],
      },
      {
        heading: `The future: -(으)ㄹ지 and -(으)ㄹ지도 모르다`,
        body: [
          `For an uncertain future, use -(으)ㄹ지: 내일 비가 올지 모르겠어요 (I don't know whether it'll rain tomorrow), 뭘 먹을지 정했어요? (have you decided what to eat?). -(으)ㄹ지 말지 means 'whether to or not': 갈지 말지 고민 중이에요.`,
          `-(으)ㄹ지도 모르다 means 'might': 늦을지도 몰라요 (I might be late), 벌써 갔을지도 몰라요 (he might already have gone).`,
        ],
        examples: [
          { ko: "그 사람이 올지 안 올지 모르겠어요.", en: "I don't know whether he'll come or not." },
          { ko: "어떤 선물을 살지 아직 못 정했어요.", en: "I still haven't decided what present to buy." },
          { ko: "오후에 비가 올지도 모르니까 우산 가져가세요.", en: "It might rain this afternoon, so take an umbrella." },
        ],
      },
      {
        heading: `-는지 vs -(으)ㄴ 지`,
        body: [
          `Don't confuse the attached -는지 / -(으)ㄴ지 (whether, what) with the spaced -(으)ㄴ 지 + time (since): 그가 왔는지 몰라요 (I don't know whether he came) vs 그가 온 지 3년 됐어요 (it's been three years since he came). The spacing in writing shows the difference.`,
        ],
        examples: [
          { ko: "밥을 먹었는지 기억이 안 나요.", en: "I can't remember whether I've eaten." },
          { ko: "밥을 먹은 지 한 시간 됐어요.", en: "It's been an hour since I ate." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "어디 살아요 몰라요.",
        right: "어디 사는지 몰라요.",
        why: `An embedded question needs -는지; a full sentence ending can't sit inside another sentence.`,
      },
      {
        wrong: "얼마나 바쁘는지",
        right: "얼마나 바쁜지",
        why: `Adjectives take -(으)ㄴ지.`,
      },
      {
        wrong: "한국에 온지 2년 됐어요.",
        right: "한국에 온 지 2년 됐어요.",
        why: `'Since' is the spaced dependent noun 지.`,
      },
      {
        wrong: "내일 갈지도 몰라요요.",
        right: "내일 갈지도 몰라요.",
        why: `-(으)ㄹ지도 모르다 conjugates on 모르다: 몰라요, 모르겠어요, 몰라.`,
      },
    ],
    faqs: [
      {
        q: `Can -는지 end a sentence?`,
        a: `In speech, yes, as a soft wondering question: 어디 갔는지 ... (I wonder where he went ...). -는지요 is a very polite question ending: 어떻게 지내시는지요?`,
      },
      {
        q: `What's the difference between -(으)ㄹ지도 모르다 and -(으)ㄹ 수도 있다?`,
        a: `Both mean 'might'. -(으)ㄹ지도 모르다 sounds more uncertain ('who knows, maybe'); -(으)ㄹ 수도 있다 is about possibility ('it's possible that').`,
      },
    ],
    related: ["reported-speech", "time-clauses", "guessing-na-boda-tende"],
    lessons: [
      "b1-embedded-questions-present",
      "b1-embedded-questions-past-yes-no",
      "b1-embedded-question-verbs",
      "b1-uncertain-future",
      "b1-might",
      "b1-contrast-since-or-whether",
    ],
  },
  {
    slug: "pretend-tend-worth",
    title: "Pretending, Tending and Worth It: -는 척하다, -는 편이다, -(으)ㄹ 만하다",
    description:
      "Three useful judgement patterns: pretending (-는 척하다, -(으)ㄴ 척하다, 아는 척, 못 들은 척), tending to or being on the whole (-는 편이다, -(으)ㄴ 편이다) and being worth it or bearable (-(으)ㄹ 만하다).",
    level: "B1",
    intro: [
      `These three patterns all hang a modifier clause on a noun-like word (척, 편, 만) and let you make nuanced judgements about people and things: someone is pretending, someone tends to be shy, a film is worth seeing.`,
    ],
    sections: [
      {
        heading: `-는 척하다: pretending`,
        body: [
          `-는 척하다 pretends to be doing something now: 자는 척했어요 (I pretended to be asleep), 듣는 척해요. -(으)ㄴ 척하다 pretends to a past action or to an adjective state: 못 들은 척했어요 (I pretended not to have heard), 바쁜 척해요 (he acts busy). Nouns take 인 척하다: 학생인 척. Common chunks: 아는 척하다 (act like you know; also 'acknowledge someone you know'), 모르는 척하다, 못 본 척하다. 체하다 means the same and is more literary.`,
        ],
        examples: [
          { ko: "엄마가 들어오시니까 동생이 공부하는 척했어요.", en: "When Mum came in, my brother pretended to be studying." },
          { ko: "모르는 척하지 마세요.", en: "Don't pretend you don't know." },
          { ko: "길에서 전 남자 친구를 만났는데 못 본 척했어요.", en: "I ran into my ex in the street and pretended not to see him." },
          { ko: "그 사람은 늘 부자인 척해요.", en: "He always acts like he's rich." },
        ],
      },
      {
        heading: `-는 편이다: tending to, on the whole`,
        body: [
          `-는 편이다 (action verbs) and -(으)ㄴ 편이다 (adjectives) mean 'tend to, be on the ... side, be fairly': 저는 많이 먹는 편이에요 (I tend to eat a lot), 이 동네는 조용한 편이에요 (this area is fairly quiet). It's a way to soften a judgement, especially about yourself, and it sounds modest: 한국어를 잘하는 편이에요 rather than 잘해요. In the past: 어렸을 때는 키가 작은 편이었어요.`,
        ],
        examples: [
          { ko: "저는 아침을 잘 안 먹는 편이에요.", en: "I don't usually eat breakfast." },
          { ko: "이 식당은 가격이 싼 편이에요.", en: "This restaurant is on the cheap side." },
          { ko: "민수 씨는 말이 없는 편이에요.", en: "Minsu is on the quiet side." },
        ],
      },
      {
        heading: `-(으)ㄹ 만하다: worth it, good enough`,
        body: [
          `-(으)ㄹ 만하다 means 'worth doing': 이 영화 볼 만해요 (this film is worth seeing), 가 볼 만한 곳 (places worth visiting). It also means 'good enough, bearable': 김치가 좀 맵지만 먹을 만해요 (the kimchi is a bit spicy but I can eat it), 일이 힘들지만 할 만해요.`,
        ],
        examples: [
          { ko: "제주도에 가 볼 만한 곳이 많아요.", en: "There are lots of places worth visiting in Jeju." },
          { ko: "추천할 만한 책 있어요?", en: "Is there a book you'd recommend?" },
          { ko: "처음엔 힘들었는데 이제 할 만해요.", en: "It was hard at first, but now it's manageable." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "자는 척 했어요.",
        right: "자는 척했어요.",
        why: `척하다 is written as one word after the modifier.`,
      },
      {
        wrong: "바쁘는 척해요.",
        right: "바쁜 척해요.",
        why: `Adjectives take -(으)ㄴ 척하다.`,
      },
      {
        wrong: "저는 많이 먹은 편이에요.",
        right: "저는 많이 먹는 편이에요.",
        why: `A habit uses the present -는 편이다.`,
        register: true,
      },
      {
        wrong: "볼 만 해요",
        right: "볼 만해요",
        why: `만하다 is written as one word.`,
      },
    ],
    faqs: [
      {
        q: `Is -는 편이다 like 'kind of'?`,
        a: `It's closer to 'fairly, on the whole, tend to'. It makes a statement less absolute, which is why Koreans use it when describing themselves.`,
      },
      {
        q: `What does 아는 척하다 mean when meeting someone?`,
        a: `Besides 'pretend to know', 아는 척하다 means 'to say hello to someone you know': 길에서 만나면 아는 척해 주세요 (if you see me in the street, say hi).`,
      },
    ],
    related: ["guessing-and-seeming", "noun-modifiers", "giving-opinions"],
    lessons: [
      "b1-pretending-1",
      "b1-pretending-2",
      "b1-tending-to-1",
      "b1-tending-to-2",
      "b1-worth-it",
      "b1-contrast-pretend-tend-seem",
    ],
  },
  {
    slug: "the-more-and-change-over-time",
    title: "The More, the More: -(으)ㄹ수록, -아 / 어 가다, -아 / 어 오다, -다 보면",
    description:
      "-(으)ㄹ수록 and -(으)면 -(으)ㄹ수록 (the more ... the more), 갈수록, change heading towards an end (-아 / 어 가다), continuing up to now (-아 / 어 오다), and -다 보면 (if you keep doing it, you'll find).",
    level: "B1",
    intro: [
      `These patterns describe change and progression: things getting more so, processes nearing completion, efforts sustained over time. They're common in conversation, in essays about trends and in TOPIK reading passages.`,
    ],
    sections: [
      {
        heading: `-(으)ㄹ수록: the more ... the more`,
        body: [
          `-(으)ㄹ수록 (attached, no space) means 'the more': 한국어는 배울수록 재미있어요 (the more I learn Korean, the more fun it is). Adding -(으)면 makes it emphatic: 보면 볼수록 예뻐요 (the more I look, the prettier it is). 갈수록 and 날이 갈수록 mean 'as time goes on, increasingly': 날씨가 갈수록 추워져요.`,
        ],
        examples: [
          { ko: "생각할수록 화가 나요.", en: "The more I think about it, the angrier I get." },
          { ko: "사람은 나이가 들수록 시간이 빨리 간다고 해요.", en: "They say time goes faster the older you get." },
          { ko: "그 노래는 들으면 들을수록 좋아요.", en: "That song gets better every time I hear it." },
          { ko: "날이 갈수록 물가가 오르고 있어요.", en: "Prices are going up day by day." },
        ],
      },
      {
        heading: `-아 / 어 가다 and -아 / 어 오다`,
        body: [
          `-아 / 어 가다 describes change moving forward toward an end point: 일이 거의 끝나 가요 (the work is nearly done), 날이 어두워져 가요 (it's getting dark). -아 / 어 오다 describes something continuing from the past up to now: 10년 동안 이 일을 해 왔어요 (I've been doing this work for ten years), 지금까지 참아 왔어요 (I've put up with it until now).`,
          `Compare with -고 있다, which just describes an action in progress at one moment. -아 / 어 가다 / 오다 add the direction in time.`,
        ],
        examples: [
          { ko: "밥 다 돼 가요. 조금만 기다리세요.", en: "Dinner's almost ready. Just wait a little." },
          { ko: "한국에 산 지 3년이 되어 가요.", en: "It's coming up to three years since I moved to Korea." },
          { ko: "우리 회사는 30년 동안 이 제품을 만들어 왔습니다.", en: "Our company has been making this product for thirty years." },
        ],
      },
      {
        heading: `Adverbs of change, and -다 보면`,
        body: [
          `점점 (gradually), 점차 (gradually, written), 더욱 (even more), 갈수록 (increasingly) often go with -아 / 어지다: 점점 따뜻해지고 있어요. -다 보면 means 'if you keep doing it, (you'll find)': 계속 연습하다 보면 잘하게 될 거예요 (if you keep practising, you'll get good), 쭉 가다 보면 왼쪽에 있어요 (keep going and it's on your left).`,
        ],
        examples: [
          { ko: "한국어 실력이 점점 늘고 있어요.", en: "My Korean is gradually improving." },
          { ko: "살다 보면 그런 날도 있어요.", en: "That's life: you get days like that." },
          { ko: "이 길로 쭉 가다 보면 지하철역이 나와요.", en: "Keep going along this road and you'll come to the subway station." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "배울 수록",
        right: "배울수록",
        why: `-(으)ㄹ수록 is an ending, written attached.`,
      },
      {
        wrong: "보면 보을수록",
        right: "보면 볼수록",
        why: `Vowel stems take -ㄹ수록.`,
      },
      {
        wrong: "10년 동안 일해 가요.",
        right: "10년 동안 일해 왔어요.",
        why: `From the past up to now is -아 / 어 오다. -아 / 어 가다 looks forward.`,
      },
      {
        wrong: "연습하다 보면 잘했어요.",
        right: "연습하다 보니까 잘하게 됐어요.",
        why: `-다 보면 looks to a future or general result. For what actually happened, use -다 보니(까) (Upper-intermediate).`,
      },
    ],
    faqs: [
      {
        q: `Can -(으)ㄹ수록 take the past?`,
        a: `No: the tense goes on the main verb. 배울수록 재미있었어요 (the more I learned, the more fun it was).`,
      },
      {
        q: `Is 되어 가요 the same as 돼 가요?`,
        a: `Yes: 돼 is the contraction of 되어. Both are correct; 돼 가요 is what people say.`,
      },
    ],
    related: ["change-and-becoming", "progressive-and-states", "beliefs-and-evidence"],
    lessons: [
      "b1-the-more-1",
      "b1-the-more-2",
      "b1-heading-towards",
      "b1-up-to-now",
      "b1-contrast-going-coming-ongoing",
      "b1-change-adverbs",
      "b1-if-you-keep-going",
    ],
  },
  {
    slug: "hypotheticals-damyeon",
    title: "What If: -다면, (이)라면 and -았 / 었더라면",
    description:
      "Unlikely or imagined conditions with -ㄴ다면 / -는다면 / -다면, 'if I were you' with (이)라면, and a first look at the counterfactual past -았 / 었더라면 (if only it had).",
    level: "B1",
    intro: [
      `-(으)면 handles real conditions. For imagined, unlikely or contrary-to-fact situations (if I won the lottery, if I were you, if I had known), Korean uses -다면 and -더라면. They're built on the reported-speech forms, so you already know their shapes.`,
    ],
    sections: [
      {
        heading: `-다면: an unlikely 'if'`,
        body: [
          `Use the plain written form + 면: adjectives -다면 (바쁘다면), action verbs -ㄴ다면 / -는다면 (간다면, 먹는다면), past -았 / 었다면 (갔다면), nouns -(이)라면 (학생이라면). The main clause often has -(으)ㄹ 거예요, -겠어요 or -(으)ㄹ 텐데요: 복권에 당첨된다면 세계 여행을 하겠어요 (if I won the lottery, I'd travel the world).`,
          `-(으)면 assumes the condition may well happen; -다면 marks it as hypothetical or less likely. 시간이 있으면 갈게요 (if I have time I'll go, quite possible) vs 시간이 있다면 가고 싶어요 (if I had time I'd like to go, but I probably won't).`,
        ],
        examples: [
          { ko: "다시 태어난다면 뭐가 되고 싶어요?", en: "If you were born again, what would you want to be?" },
          { ko: "한 달 동안 휴가가 있다면 제주도에서 살아 보고 싶어요.", en: "If I had a month off, I'd like to live in Jeju for a while." },
          { ko: "만약 그 사람이 거짓말을 했다면 큰 문제예요.", en: "If he lied, it's a big problem." },
        ],
      },
      {
        heading: `(이)라면: if I were, when it comes to`,
        body: [
          `Noun + (이)라면 means 'if (it) were': 내가 너라면 (if I were you), 제가 사장이라면 (if I were the boss). It also means 'when it comes to': 한국 음식이라면 다 좋아해요 (when it comes to Korean food, I like it all), 커피라면 이 카페가 최고예요.`,
        ],
        examples: [
          { ko: "제가 민수 씨라면 그 회사에 안 갈 거예요.", en: "If I were you, Minsu, I wouldn't go to that company." },
          { ko: "여행이라면 언제든지 좋아요.", en: "When it comes to travel, I'm always up for it." },
        ],
      },
      {
        heading: `If only it had: -았 / 었더라면`,
        body: [
          `-았 / 었더라면 imagines a different past: 미리 알았더라면 (if I had known in advance). It pairs with -았 / 었을 거예요 (would have) or -았 / 었을 텐데 (would have, regretfully): 조금만 일찍 출발했더라면 비행기를 탔을 거예요 (if we'd left a little earlier, we'd have made the flight). In speech, -았 / 었으면 often replaces it: 알았으면 말했을 거예요. The Upper-intermediate level covers this in full.`,
        ],
        examples: [
          { ko: "그때 열심히 공부했더라면 좋았을 텐데.", en: "If only I'd studied hard back then." },
          { ko: "네가 없었더라면 못 했을 거야.", en: "I couldn't have done it without you." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "학생다면",
        right: "학생이라면",
        why: `Nouns take -(이)라면.`,
      },
      {
        wrong: "내가 너라면",
        right: "저라면",
        why: `To a stranger or senior: 너 is 반말. Politely, say 저라면 (if it were me) and leave 'you' out.`,
        register: true,
      },
      {
        wrong: "복권에 당첨되다면",
        right: "복권에 당첨된다면",
        why: `Action verbs (되다 here) take -ㄴ다면 / -는다면 in the present.`,
      },
      {
        wrong: "미리 알았더라면 말해요.",
        right: "미리 알았더라면 말했을 거예요.",
        why: `A counterfactual past needs a counterfactual result: -았 / 었을 거예요 or -았 / 었을 텐데.`,
      },
    ],
    faqs: [
      {
        q: `Can I always use -(으)면 instead of -다면?`,
        a: `In casual speech, often yes. But -다면 makes the hypothetical feel clear, and it's the expected form in writing and in 'if I were you' type sentences.`,
      },
      {
        q: `How do I say 'if I were you' politely?`,
        a: `저라면 (if it were me) is the natural polite way to give advice, with no 'you' at all: 저라면 그냥 사겠어요 (if it were me, I'd just buy it). 제가 민수 씨라면 also works when you name the person.`,
      },
    ],
    related: ["conditionals-myeon", "regret-and-near-misses", "counterfactuals-and-impossibility"],
    lessons: [
      "b1-unlikely-if-1",
      "b1-unlikely-if-2",
      "b1-contrast-if-real-unreal",
      "b1-if-i-were-you",
      "b1-counterfactual-past-1",
      "b1-counterfactual-past-2",
    ],
  },
  {
    slug: "workplace-honorifics",
    title: "Honorifics at Work: Humble Verbs, 저희, Titles and Service Speech",
    description:
      "How to talk to and about people at work: humble verbs (드리다, 말씀드리다, 여쭤보다, 뵙다, 모시다), 저희 vs 우리, job titles with 님, 씨 vs 님, the overuse of -(으)시- in service speech, and a first look at 압존법.",
    level: "B1",
    intro: [
      `The Elementary level taught you to raise others with -(으)시-. At work you also lower yourself: Korean has a set of humble verbs that you use for your own actions toward a superior or customer. Together with job titles and the right particles, they make up the workplace Korean that every office worker uses all day.`,
    ],
    sections: [
      {
        heading: `Humble verbs`,
        body: [
          `When you do something to or for someone senior, swap in the humble verb: 주다 → 드리다 (give), 말하다 → 말씀드리다 (tell), 묻다 → 여쭤보다 / 여쭙다 (ask), 보다 / 만나다 → 뵙다 / 뵈다 (see, meet), 데리고 가다 → 모시고 가다 (take someone). These verbs lower the speaker; the person you're talking to still gets -(으)시- when they are the subject.`,
          `Note the spelling: 뵈다 + 어요 = 봬요 (내일 봬요, see you tomorrow), not *뵈요.`,
        ],
        table: {
          headers: ["Plain", "Humble", "Example"],
          rows: [
            ["주다", "드리다", "자료를 드릴게요."],
            ["말하다", "말씀드리다", "제가 말씀드리겠습니다."],
            ["묻다", "여쭤보다, 여쭙다", "하나 여쭤봐도 될까요?"],
            ["보다, 만나다", "뵙다, 뵈다", "다음 주에 뵙겠습니다. 내일 봬요."],
            ["데리고 가다", "모시고 가다", "제가 회의실로 모시겠습니다."],
          ],
        },
        examples: [
          { ko: "부장님, 잠깐 말씀드릴 게 있습니다.", en: "Sir, there's something I need to tell you." },
          { ko: "모르는 게 있으면 선배님께 여쭤보세요.", en: "If there's anything you don't know, ask your seniors." },
          { ko: "처음 뵙겠습니다. 이번에 새로 온 김지은입니다.", en: "How do you do. I'm Kim Jieun, and I've just joined." },
          { ko: "그럼 내일 봬요.", en: "See you tomorrow, then." },
        ],
      },
      {
        heading: `저희, titles and 님`,
        body: [
          `저희 is the humble 'we / our' used to outsiders: 저희 회사 (our company), 저희 팀. Use 우리 among your own group. One exception: 우리나라 ('our country', Korea) is used even to foreigners, though with them 한국 is the neutral choice.`,
          `Job titles take 님 and replace names and 'you': 팀장님, 과장님, 부장님, 사장님; with a surname, 김 부장님. 씨 is for colleagues of equal or lower rank, and never for seniors. Older colleagues from your school or company are 선배님.`,
        ],
        examples: [
          { ko: "저희 회사는 강남에 있습니다.", en: "Our company is in Gangnam." },
          { ko: "과장님, 이 보고서 확인해 주시겠어요?", en: "Could you check this report, please? (to a section chief)" },
          { ko: "민수 씨, 회의 자료 준비됐어요?", en: "Minsu, are the meeting materials ready? (to a colleague)" },
        ],
      },
      {
        heading: `Service-speech overuse and 압존법`,
        body: [
          `Shops and cafés often overuse -(으)시-, attaching it to things: *커피 나오셨습니다, *사이즈가 없으세요, *주문하신 메뉴 나오셨습니다. These are errors (honorifics are for people, not objects). The correct forms are 커피 나왔습니다, 그 사이즈는 없습니다, 주문하신 메뉴 나왔습니다 (the -시- of 주문하신 is fine: the customer ordered).`,
          `압존법 is the traditional rule of not honouring a senior when speaking to someone even more senior about them: to the CEO, a manager might say 김 과장이 왔습니다 rather than 김 과장님이 오셨습니다. It's fading in many workplaces, which now honour everyone, but you'll hear it in traditional families and the military.`,
        ],
        examples: [
          { ko: "주문하신 아메리카노 나왔습니다.", en: "Your Americano is ready." },
          { ko: "죄송하지만 그 사이즈는 지금 없습니다.", en: "I'm sorry, we don't have that size at the moment." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "커피 나오셨습니다.",
        right: "커피 나왔습니다.",
        why: `Honorifics raise people, not things. -시- on coffee is an error, however common.`,
      },
      {
        wrong: "부장님께 물어볼게요.",
        right: "부장님께 여쭤볼게요.",
        why: `Asking a senior uses humble 여쭤보다.`,
        register: true,
      },
      {
        wrong: "내일 뵈요.",
        right: "내일 봬요.",
        why: `뵈 + 어요 contracts to 봬요.`,
      },
      {
        wrong: "김 부장 씨",
        right: "김 부장님",
        why: `씨 isn't used with a title or for seniors. Title + 님.`,
      },
      {
        wrong: "우리 회사",
        right: "저희 회사",
        why: `Speaking to a client: To outsiders, humble 저희 is the polite 'our'.`,
        register: true,
      },
    ],
    faqs: [
      {
        q: `Do I say 사장님 to a shop owner?`,
        a: `Yes: 사장님 is the common polite way to address the owner of a small business, restaurant or shop, whatever their real title.`,
      },
      {
        q: `What do I call a colleague I don't know well?`,
        a: `Their title + 님 if they have one, or full name + 씨 for peers and juniors (김민수 씨, or 민수 씨 once familiar). 'Name + 님' (민수 님) is common in modern startups and online.`,
      },
    ],
    related: ["honorifics-si", "giving-and-favours", "formal-speech-hamnida", "fine-grained-honorifics"],
    lessons: [
      "b1-humble-verbs-1",
      "b1-humble-verbs-2",
      "b1-job-titles",
      "b1-talking-about-the-boss",
      "b1-service-speech-overuse",
      "b1-contrast-whom-to-honour",
      "b1-work-email",
    ],
  },
  {
    slug: "particles-even-at-least",
    title: "Particles, Part 2: 까지, 조차, 마저, (이)라도, 뿐, 대로 and -든지",
    description:
      "Even (까지, 조차, 마저), at least or any (이)라도, only (뿐, -기만 하다, -(으)ㄹ 뿐이다), according to (noun + 대로), and either / whatever (-든지, 뭐든지, 언제든지).",
    level: "B1",
    intro: [
      `English 'even' covers three Korean particles, each with its own emotional tone. This guide sorts them out and adds the particles and endings for 'at least', 'only' and 'whatever', which come up constantly in conversation and in TOPIK reading.`,
    ],
    sections: [
      {
        heading: `Even: 까지, 조차, 마저`,
        body: [
          `까지 (beyond its 'until' meaning) adds a surprising extra: 'even, on top of everything': 비가 오는데 바람까지 불어요 (it's raining, and windy too). 조차 means 'not even', almost always with a negative: 이름조차 몰라요 (I don't even know his name). 마저 means 'even the last one', with a sense of loss: 마지막 희망마저 사라졌어요 (even the last hope vanished).`,
          `도 can replace all three in casual speech (이름도 몰라요), but the specific particles add the emotion.`,
        ],
        table: {
          headers: ["Particle", "Feeling", "Example"],
          rows: [
            ["까지", "on top of that (surprise)", "선물까지 사 왔어요?"],
            ["조차", "not even (with a negative)", "물조차 못 마셨어요."],
            ["마저", "even the last one (loss)", "친구마저 떠났어요."],
            ["도", "also, even (neutral)", "물도 못 마셨어요."],
          ],
        },
        examples: [
          { ko: "늦잠을 잤는데 버스까지 놓쳤어요.", en: "I overslept, and on top of that I missed the bus." },
          { ko: "너무 바빠서 밥 먹을 시간조차 없어요.", en: "I'm so busy I don't even have time to eat." },
          { ko: "막내마저 결혼해서 집이 조용해졌어요.", en: "Now even our youngest has married, and the house has gone quiet." },
        ],
      },
      {
        heading: `At least, any: (이)라도`,
        body: [
          `(이)라도 marks a second-best choice: 'at least, even if only': 커피라도 마실래요? (how about a coffee, at least?), 전화라도 해 주세요. With question words it means 'any': 누구라도 (anyone at all), 언제라도 (any time), 뭐라도 (anything).`,
        ],
        examples: [
          { ko: "시간이 없으면 문자라도 보내 주세요.", en: "If you don't have time, at least send a text." },
          { ko: "배고프면 빵이라도 드세요.", en: "If you're hungry, have some bread at least." },
          { ko: "궁금한 게 있으면 언제라도 연락하세요.", en: "If you have questions, get in touch any time." },
        ],
      },
      {
        heading: `Only: 뿐, -기만 하다, -(으)ㄹ 뿐이다; according to: 대로`,
        body: [
          `뿐 means 'only' after a noun, usually with 이다: 제 친구는 민수 씨뿐이에요 (Minsu is my only friend). -기만 하다 means 'only do, just keep doing': 하루 종일 자기만 했어요 (I did nothing but sleep all day). -(으)ㄹ 뿐이다 means 'merely, it's just that': 저는 제 일을 했을 뿐이에요 (I was only doing my job).`,
          `Noun + 대로 means 'as, according to': 계획대로 (as planned), 마음대로 (as you like), 말씀하신 대로 (as you said; after a verb, spaced).`,
        ],
        examples: [
          { ko: "필요한 건 시간뿐이에요.", en: "All we need is time." },
          { ko: "아이가 울기만 해요.", en: "The baby just keeps crying." },
          { ko: "모든 일이 계획대로 됐어요.", en: "Everything went according to plan." },
        ],
      },
      {
        heading: `Either, whatever: -든지`,
        body: [
          `-든지 (or -든) offers a free choice: 'either ... or, whichever': 커피를 마시든지 차를 마시든지 하세요 (have coffee or tea, whichever). With question words: 뭐든지 (anything at all), 언제든지 (any time), 어디든지, 누구든지. Don't confuse it with -던지, which recalls the past (얼마나 춥던지, it was so cold!).`,
        ],
        examples: [
          { ko: "필요한 거 있으면 뭐든지 말하세요.", en: "If you need anything at all, just say." },
          { ko: "버스를 타든지 택시를 타든지 빨리 와.", en: "Take the bus or a taxi, just get here fast." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "이름조차 알아요.",
        right: "이름조차 몰라요.",
        why: `조차 is used with negatives: 'not even'.`,
      },
      {
        wrong: "커피이라도",
        right: "커피라도",
        why: `After a vowel it's 라도; after a consonant 이라도 (물이라도).`,
      },
      {
        wrong: "뭐던지 괜찮아요.",
        right: "뭐든지 괜찮아요.",
        why: `Free choice is -든지. -던지 recalls a past experience.`,
      },
      {
        wrong: "계획 대로",
        right: "계획대로",
        why: `After a noun, 대로 is a particle and is attached. After a verb modifier, it's spaced: 말한 대로.`,
      },
    ],
    faqs: [
      {
        q: `What's the difference between 뿐 and 만?`,
        a: `만 attaches to any noun inside a sentence (커피만 마셔요); 뿐 usually ends the statement with 이다 (커피뿐이에요) or appears in 뿐만 아니라 (not only). 밖에 needs a negative.`,
      },
      {
        q: `Is 까지 'until' or 'even'?`,
        a: `Both: 다섯 시까지 (until five), 너까지 (even you). Context and tone make it clear.`,
      },
    ],
    related: ["particles-only-or-every", "adding-points", "spelling-traps"],
    lessons: [
      "b1-even-surprising-addition",
      "b1-not-even-negative",
      "b1-even-the-last-one",
      "b1-contrast-even-particles",
      "b1-at-least-second-best",
      "b1-only-and-nothing-else",
      "b1-as-planned-according-to",
      "b1-only-doing-and-merely",
      "b1-either-or-whatever",
    ],
  },
  {
    slug: "notices-and-memo-style",
    title: "Notices, Forms and Memos: -(으)ㅁ, -기 and -(으)ㄹ 것",
    description:
      "The clipped written styles of Korean notices, memos and forms: -(으)ㅁ as a sentence ending (확인했음), -기 in lists and rules (손 씻기), -(으)ㄹ 것 for instructions (지참할 것), -(으)시기 바랍니다, and noun + 금지 / 중 / 주의.",
    level: "B1",
    intro: [
      `Notice boards in apartment buildings, office memos, forms and signs use their own compressed style. Sentences end in nouns or nominalised verbs, without 요 or -습니다. Reading them is essential for life in Korea, and writing them is part of TOPIK question 51.`,
    ],
    sections: [
      {
        heading: `-(으)ㅁ: memo and report style`,
        body: [
          `Add -ㅁ after a vowel stem and -음 after a consonant to end a sentence as a noun: 회의 있음 (there's a meeting), 확인했음 (checked), 문제없음 (no problems), 오늘 휴무임 (closed today). ㄹ stems add -ㅁ: 만들다 → 만듦, 살다 → 삶. It also forms regular nouns: 도움 (help), 걸음 (step), 기쁨 (joy), 잠 (sleep).`,
        ],
        examples: [
          { ko: "내일 오전 10시 회의 있음.", en: "Meeting tomorrow, 10 a.m." },
          { ko: "택배 경비실에 맡겼음.", en: "Parcel left with the security office." },
          { ko: "자료 검토 완료함.", en: "Documents reviewed." },
        ],
      },
      {
        heading: `-기: lists and rules`,
        body: [
          `-기 lists actions as items, for rules, to-do lists and resolutions: 손 씻기 (wash hands), 지각하지 않기 (don't be late), 하루에 30분 걷기. Posters often list rules this way: 1. 쓰레기 버리지 않기 2. 큰 소리로 떠들지 않기.`,
        ],
        examples: [
          { ko: "올해 목표: 매일 한국어 공부하기.", en: "This year's goal: study Korean every day." },
          { ko: "도서관 이용 규칙: 휴대폰은 진동으로 하기.", en: "Library rules: keep phones on vibrate." },
        ],
      },
      {
        heading: `Instructions: -(으)ㄹ 것, -(으)시기 바랍니다, 금지`,
        body: [
          `-(으)ㄹ 것 gives a firm written instruction: 신분증을 지참할 것 (bring ID), 시간을 엄수할 것. -(으)시기 바랍니다 is the polite notice form ('please'), and 바람 is its memo version: 협조해 주시기 바랍니다, 참고 바람.`,
          `Signs use a noun + 금지 (prohibited), 중 (in progress) or 주의 (caution): 주차 금지, 흡연 금지, 공사 중, 수리 중, 미끄럼 주의.`,
        ],
        table: {
          headers: ["Form", "Use", "Example"],
          rows: [
            ["-(으)ㅁ", "memos, reports", "확인했음."],
            ["-기", "lists, rules, goals", "쓰레기 분리하기"],
            ["-(으)ㄹ 것", "firm instructions", "8시까지 도착할 것."],
            ["-(으)시기 바랍니다", "polite notices", "양해해 주시기 바랍니다."],
            ["noun + 금지 / 중 / 주의", "signs", "출입 금지, 공사 중, 화재 주의"],
          ],
        },
        examples: [
          { ko: "엘리베이터 점검으로 오후 2시부터 4시까지 운행을 중지합니다. 주민 여러분의 양해 바랍니다.", en: "Due to elevator inspection, it will be out of service from 2 to 4 p.m. We ask residents for their understanding." },
          { ko: "시험 시작 10분 전까지 입실할 것.", en: "Enter the exam room at least ten minutes before the start." },
          { ko: "이곳은 주차 금지 구역입니다.", en: "This is a no-parking zone." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "확인했음요.",
        right: "확인했음.",
        why: `-(으)ㅁ endings never take 요. For a polite message, use 확인했습니다.`,
      },
      {
        wrong: "만들음",
        right: "만듦",
        why: `ㄹ stems add -ㅁ directly: 만듦, 삶, 앎.`,
      },
      {
        wrong: "회의 있음",
        right: "회의가 있습니다.",
        why: `In an email to a client, write full sentences. Memo style is for internal notes and lists. To an outsider, it reads as curt.`,
        register: true,
      },
    ],
    faqs: [
      {
        q: `Is 음슴체 (texting in -음) the same thing?`,
        a: `Online, some people write whole posts in -음 endings as a playful style (음슴체). It comes from the same memo style. The Mastery level touches on it with internet Korean.`,
      },
    ],
    related: ["nominalisers-gi-geot", "written-style-handache", "business-korean"],
    lessons: [
      "b1-memo-style-endings",
      "b1-list-style-endings",
      "b1-instructions-and-requests",
      "b1-apartment-notices",
      "b1-practice-filling-in-forms",
      "b1-transform-notice-to-speech",
    ],
  },
  {
    slug: "sound-and-shape-words",
    title: "Sound-and-Shape Words: 의성어 and 의태어",
    description:
      "Korean's huge family of sound words (멍멍, 쾅) and shape and motion words (반짝반짝, 두근두근), how they're reduplicated, how bright and dark vowels and plain, tense and aspirated consonants change their feel, and the verbs -거리다 and -대다.",
    level: "B1",
    intro: [
      `Korean has thousands of words that imitate sounds (의성어) or depict shapes, movements and feelings (의태어). They're not baby talk: adults use them all the time in speech, novels, ads, and even medical descriptions of pain. They usually come before the verb as adverbs, and they follow patterns that let you guess the feel of new ones.`,
    ],
    sections: [
      {
        heading: `Sound words and shape words`,
        body: [
          `Sound words imitate a noise: 멍멍 (woof), 야옹 (meow), 똑똑 (knock knock), 쾅 (bang), 쿨쿨 (snoring, sound asleep). Shape and motion words depict what can't be heard: 반짝반짝 (twinkling), 엉금엉금 (crawling slowly), 빙글빙글 (spinning), 두근두근 (heart pounding), 깜짝 (startled), 살금살금 (tiptoeing).`,
          `Most are reduplicated (반짝반짝, 두근두근); a single half often marks a single instance: 반짝 (a flash), 깜빡 (a blink; forgetting for a moment). They usually come right before the verb: 별이 반짝반짝 빛나요, 문을 똑똑 두드렸어요.`,
        ],
        examples: [
          { ko: "아기가 쿨쿨 자고 있어요.", en: "The baby is sound asleep." },
          { ko: "발표 전에 가슴이 두근두근했어요.", en: "My heart was pounding before the presentation." },
          { ko: "누가 문을 똑똑 두드렸어요.", en: "Someone knocked on the door." },
          { ko: "깜짝 놀랐어요!", en: "You startled me!" },
        ],
      },
      {
        heading: `Bright and dark, soft and strong`,
        body: [
          `Vowels set the size and tone. 'Bright' vowels (ㅏ, ㅗ) feel small, light and cute; 'dark' vowels (ㅓ, ㅜ, ㅡ) feel big, heavy or dull: 졸졸 (a stream trickling) vs 줄줄 (pouring, streaming), 반짝 vs 번쩍 (a big flash), 퐁당 (a pebble plops) vs 풍덩 (a person splashes in).`,
          `Consonants set the intensity: plain is soft, tense is sharper, aspirated is strongest. 감감 / 깜깜 / 캄캄 (dark, darker, pitch-black), 빙빙 / 핑핑 (spinning, spinning dizzily).`,
        ],
        table: {
          headers: ["Bright (small, light)", "Dark (big, heavy)", "Meaning"],
          rows: [
            ["졸졸", "줄줄", "trickling / streaming"],
            ["반짝", "번쩍", "a twinkle / a flash"],
            ["퐁당", "풍덩", "plop / splash"],
            ["말랑말랑", "물렁물렁", "soft and squishy"],
          ],
        },
        examples: [
          { ko: "시냇물이 졸졸 흘러요.", en: "The stream trickles along." },
          { ko: "땀이 줄줄 흘렀어요.", en: "Sweat was pouring off me." },
          { ko: "밖이 캄캄해요.", en: "It's pitch-dark outside." },
        ],
      },
      {
        heading: `Turning them into verbs and adjectives`,
        body: [
          `Add -거리다 or -대다 to make a verb meaning 'keep doing that': 반짝거리다 (glitter), 투덜대다 (grumble), 두근거리다 (pound, of the heart), 깜빡거리다 (blink, flicker). Add -하다 to the reduplicated form for many: 두근두근하다, 반짝반짝하다. Some food textures are -하다 adjectives: 바삭하다 (crispy), 쫄깃하다 (chewy), 촉촉하다 (moist), 아삭하다 (crunchy).`,
          `깜빡하다 means 'forget for a moment': 우산을 깜빡했어요 (I forgot my umbrella).`,
        ],
        examples: [
          { ko: "치킨이 겉은 바삭하고 속은 촉촉해요.", en: "The chicken is crispy outside and juicy inside." },
          { ko: "떡이 쫄깃쫄깃해요.", en: "The rice cakes are lovely and chewy." },
          { ko: "동생이 하루 종일 투덜거렸어요.", en: "My brother grumbled all day." },
          { ko: "약속을 깜빡했어요. 정말 미안해요.", en: "I completely forgot our plans. I'm so sorry." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "별이 반짝반짝이에요.",
        right: "별이 반짝반짝 빛나요.",
        why: `Mimetic words are usually adverbs before a verb, or verbs with -하다 / -거리다, not nouns with 이에요.`,
      },
      {
        wrong: "잊어버렸어요.",
        right: "깜빡했어요.",
        why: `For a momentary slip: not wrong, but 깜빡했어요 is the natural way to say 'it slipped my mind', which sounds less serious.`,
        register: true,
      },
    ],
    faqs: [
      {
        q: `Are these words childish?`,
        a: `Some are (멍멍, 야옹), but most are normal adult vocabulary. Even doctors ask 어떻게 아파요? 욱신욱신해요, 따끔따끔해요? to describe pain.`,
      },
      {
        q: `How do I learn so many?`,
        a: `Learn them in families and with the verb they usually go with (반짝반짝 빛나다, 쿨쿨 자다, 두근두근 뛰다), and let the vowel and consonant patterns help you guess new ones.`,
      },
    ],
    related: ["descriptive-verbs", "idioms-and-proverbs"],
    lessons: [
      "b1-sound-imitating-words",
      "b1-shape-motion-words-1",
      "b1-shape-motion-words-2",
      "b1-feeling-words",
      "b1-mimetic-verbs",
      "b1-texture-words",
      "b1-contrast-bright-dark-vowels",
    ],
  },
  {
    slug: "feelings-a-hada",
    title: "Other People's Feelings: -아 / 어하다",
    description:
      "Why Korean says 저는 무서워요 but 동생이 무서워해요: feeling adjectives (무섭다, 부럽다, 슬프다) become verbs with -아 / 어하다 for other people, 좋다 vs 좋아하다, and how this links to -아 / 어 보이다 and -나 보다.",
    level: "B1",
    intro: [
      `Korean is careful about whose inner feelings you can state directly. You can say how you feel (무서워요, I'm scared), but for someone else you describe their feelings as visible behaviour: 동생이 무서워해요 (my brother is scared, literally 'acts scared'). The ending -아 / 어하다 turns a feeling adjective into a verb that does this job.`,
    ],
    sections: [
      {
        heading: `-아 / 어하다`,
        body: [
          `Add -아 / 어하다 to a feeling adjective: 무섭다 → 무서워하다, 부럽다 → 부러워하다, 슬프다 → 슬퍼하다, 기쁘다 → 기뻐하다, 싫다 → 싫어하다, 귀찮다 → 귀찮아하다, 힘들다 → 힘들어하다. It's written as one word. The new verb takes 을 / 를 for the thing: 동생이 개를 무서워해요 (my brother is afraid of dogs).`,
          `With your own feelings, the adjective with 이 / 가 is normal: 저는 개가 무서워요. In questions to the listener, both are fine.`,
        ],
        table: {
          headers: ["Adjective (me)", "Verb (others)", "Example"],
          rows: [
            ["무섭다", "무서워하다", "아이가 어둠을 무서워해요."],
            ["부럽다", "부러워하다", "친구들이 저를 부러워해요."],
            ["슬프다", "슬퍼하다", "모두 그 소식을 슬퍼했어요."],
            ["좋다", "좋아하다", "민수 씨는 축구를 좋아해요."],
            ["싫다", "싫어하다", "고양이는 물을 싫어해요."],
          ],
        },
        examples: [
          { ko: "저는 높은 곳이 무서워요.", en: "I'm scared of heights." },
          { ko: "제 동생은 높은 곳을 무서워해요.", en: "My younger sibling is scared of heights." },
          { ko: "아이들이 선물을 받고 기뻐했어요.", en: "The children were delighted with their presents." },
          { ko: "요즘 일 때문에 많이 힘들어해요.", en: "She's been having a hard time with work lately." },
        ],
      },
      {
        heading: `좋다 or 좋아하다?`,
        body: [
          `좋다 is an adjective, 'to be good / pleasing', and takes 이 / 가: 저는 이 노래가 좋아요 (I like this song, it pleases me). 좋아하다 is a verb, 'to like', and takes 을 / 를: 저는 이 노래를 좋아해요. Both work for 'I'. For other people, 좋아하다 is the normal choice: 민수 씨는 이 노래를 좋아해요.`,
          `-지 마세요 needs a verb, so 'don't be sad' is 슬퍼하지 마세요, and 'don't be afraid' 무서워하지 마세요.`,
        ],
        examples: [
          { ko: "너무 슬퍼하지 마세요.", en: "Don't be too sad." },
          { ko: "부끄러워하지 말고 말해 보세요.", en: "Don't be shy, go on and say it." },
        ],
      },
      {
        heading: `Looking, guessing and empathising`,
        body: [
          `Three ways to talk about someone's feelings: -아 / 어 보이다 describes their appearance (슬퍼 보여요, she looks sad), -아 / 어하다 describes their visible reaction (슬퍼해요, she's sad), -나 보다 infers from evidence (슬픈가 봐요, she must be sad). To empathise, use -겠어요: 많이 속상하시겠어요 (you must be really upset).`,
        ],
        examples: [
          { ko: "지은 씨가 오늘 좀 피곤해 보여요.", en: "Jieun looks a bit tired today." },
          { ko: "시험에 떨어져서 많이 속상했겠어요.", en: "You must have been really upset to fail the exam." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "제 동생은 개가 무서워요.",
        right: "제 동생은 개를 무서워해요.",
        why: `For other people's feelings, use the -아 / 어하다 verb with 을 / 를.`,
        register: true,
      },
      {
        wrong: "슬프지 마세요.",
        right: "슬퍼하지 마세요.",
        why: `-지 마세요 needs a verb: 슬퍼하다, not the adjective 슬프다.`,
      },
      {
        wrong: "민수 씨는 축구가 좋아해요.",
        right: "민수 씨는 축구를 좋아해요.",
        why: `좋아하다 takes 을 / 를. 좋다 takes 이 / 가.`,
      },
      {
        wrong: "무서워 해요",
        right: "무서워해요",
        why: `-아 / 어하다 verbs are written as one word.`,
      },
    ],
    faqs: [
      {
        q: `Can I say 제 친구는 기뻐요?`,
        a: `It sounds as if you can read your friend's mind. In narrative and with clear context it's possible, but 기뻐해요 or 기쁜 것 같아요 is the natural choice in conversation.`,
      },
      {
        q: `Is there a 'my feelings' / 'their feelings' rule for 싶다 too?`,
        a: `Yes: -고 싶어요 for me and you, -고 싶어 해요 for others. It's the same principle.`,
      },
    ],
    related: ["wants-and-plans", "guessing-and-seeming", "guessing-na-boda-tende", "translation-precision"],
    lessons: ["b1-feelings-in-detail", "b1-others-feelings-1", "b1-others-feelings-2", "b1-guessing-feelings", "b1-comfort-and-congratulations"],
  },
  {
    slug: "worry-advice-wishes",
    title: "Worry, Advice and Wishes: -(으)ㄹ까 봐, -는 게 좋겠다, -지 그래요, -았 / 었으면 좋겠다",
    description:
      "In case or for fear that (-(으)ㄹ까 봐), advice (-는 게 좋겠어요, -지 않는 게 좋겠어요), why don't you (-지 그래요?) and why didn't you (-지 그랬어요?), and polite wishes and requests with -았 / 었으면 좋겠다.",
    level: "B1",
    intro: [
      `Giving advice, voicing worries and making requests indirectly are everyday skills that Korean handles with a handful of chunky patterns. They're softer and more natural than a direct command.`,
    ],
    sections: [
      {
        heading: `-(으)ㄹ까 봐: in case, for fear that`,
        body: [
          `-(으)ㄹ까 봐 (or -(으)ㄹ까 봐서) gives a worry as the reason for an action: 늦을까 봐 택시를 탔어요 (I took a taxi in case I was late), 잊어버릴까 봐 메모했어요. For a worry about something that may already have happened: -았 / 었을까 봐 (화가 났을까 봐 걱정했어요). It can also end a sentence: 비가 올까 봐요 (I'm worried it might rain).`,
        ],
        examples: [
          { ko: "추울까 봐 코트를 가져왔어요.", en: "I brought a coat in case it was cold." },
          { ko: "아이가 깰까 봐 조용히 들어갔어요.", en: "I went in quietly so as not to wake the baby." },
          { ko: "시험에 떨어질까 봐 걱정이에요.", en: "I'm worried I'll fail the exam." },
        ],
      },
      {
        heading: `Advice: -는 게 좋겠어요 and -지 그래요?`,
        body: [
          `-는 게 좋겠어요 (literally 'doing ... would be good') is soft advice: 병원에 가 보는 게 좋겠어요 (you'd better see a doctor). Negative: -지 않는 게 좋겠어요. -지 그래요? is a friendly suggestion, 'why don't you ...?': 좀 쉬지 그래요?. In the past, -지 그랬어요? gently reproaches: 미리 말하지 그랬어요? (why didn't you tell me?).`,
        ],
        examples: [
          { ko: "오늘은 일찍 자는 게 좋겠어요.", en: "You'd better go to bed early tonight." },
          { ko: "밤늦게 혼자 다니지 않는 게 좋겠어요.", en: "Better not to go out alone late at night." },
          { ko: "그렇게 피곤하면 하루 쉬지 그래요?", en: "If you're that tired, why not take a day off?" },
          { ko: "힘들면 나한테 말하지 그랬어.", en: "You should have told me if it was hard." },
        ],
      },
      {
        heading: `Wishes and polite requests: -았 / 었으면 좋겠다`,
        body: [
          `-았 / 었으면 좋겠다 expresses a wish ('I wish, I hope'): 주말에 날씨가 좋았으면 좋겠어요. The past form makes the wish feel stronger than -(으)면 좋겠다. With -아 / 어 주다, it becomes a polite request: 내일까지 보내 주셨으면 좋겠습니다 (I'd be grateful if you could send it by tomorrow), 조용히 해 줬으면 좋겠어.`,
        ],
        examples: [
          { ko: "빨리 방학이 왔으면 좋겠어요.", en: "I wish the holidays would hurry up and come." },
          { ko: "다음에는 미리 연락해 주셨으면 좋겠어요.", en: "Next time, I'd appreciate it if you let me know in advance." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "늦을까 봐 택시를 타세요.",
        right: "늦을 수도 있으니까 택시를 타세요.",
        why: `-(으)ㄹ까 봐 explains your own action; it isn't followed by a command or suggestion.`,
      },
      {
        wrong: "병원에 가는 것이 좋겠어요요.",
        right: "병원에 가는 게 좋겠어요.",
        why: `The pattern ends in 좋겠어요; in speech 것이 becomes 게.`,
      },
      {
        wrong: "부장님, 좀 쉬지 그래요?",
        right: "부장님, 좀 쉬시는 게 좋겠어요.",
        why: `-지 그래요 is friendly but a little familiar. To a senior, use the honorific advice form.`,
        register: true,
      },
    ],
    faqs: [
      {
        q: `Is -(으)ㄹ까 봐 related to -(으)ㄹ까요?`,
        a: `Yes: -(으)ㄹ까 'will it?' + 보다 'see, think'. 'Thinking it might happen' became 'for fear that'.`,
      },
      {
        q: `What's the formal written equivalent?`,
        a: `-(으)ㄹ 우려가 있다 (there is a risk that) and -지 않도록 (so as not to). They come at the Upper-intermediate level.`,
      },
    ],
    related: ["conditionals-myeon", "guessing-na-boda-tende", "politeness-strategies"],
    lessons: [
      "b1-advice-better-to",
      "b1-why-dont-you",
      "b1-i-wish-polite-requests",
      "b1-in-case-for-fear-that",
      "b1-contrast-intention-expectation-reason",
    ],
  },
  {
    slug: "handy-noun-patterns",
    title: "Handy Patterns: -는 중이다, -(으)ㄹ 경우, -는 데 좋다, -(으)ㄹ 수밖에 없다",
    description:
      "Four everyday patterns built on nouns: in the middle of (-는 중이다, noun + 중), in case of (-(으)ㄹ 경우(에)), good for or used for (-는 데 좋다, 에 좋다), and have no choice but (-(으)ㄹ 수밖에 없다).",
    level: "B1",
    intro: [
      `Much of intermediate Korean is built from a modifier clause plus a noun: 중 (middle), 경우 (case), 데 (place, situation), 수 (way, means). These four patterns come up in work, health, travel and opinions.`,
    ],
    sections: [
      {
        heading: `In the middle of: -는 중이다`,
        body: [
          `-는 중이다 means 'be in the middle of doing': 지금 회의하는 중이에요 (I'm in a meeting right now), 이사 준비하는 중이에요. With a Sino-Korean noun, 중 attaches directly: 회의 중, 통화 중 (on the phone), 공사 중 (under construction), 수리 중. It's more formal and more about being occupied than -고 있다.`,
        ],
        examples: [
          { ko: "지금 운전하는 중이라서 나중에 전화할게요.", en: "I'm driving right now, so I'll call you later." },
          { ko: "김 과장님은 지금 회의 중이십니다.", en: "Mr Kim is in a meeting at the moment." },
          { ko: "새 일자리를 찾는 중이에요.", en: "I'm looking for a new job." },
        ],
      },
      {
        heading: `In case of: -(으)ㄹ 경우(에)`,
        body: [
          `-(으)ㄹ 경우(에) means 'in the event that, if': 비가 올 경우에는 행사가 취소됩니다 (in the event of rain, the event will be cancelled). Nouns take 의 경우: 화재의 경우, 외국인의 경우 (for foreigners). It's common in instructions, rules and formal speech.`,
        ],
        examples: [
          { ko: "분실했을 경우에는 바로 신고하세요.", en: "If you lose it, report it immediately." },
          { ko: "학생의 경우 입장료가 50% 할인됩니다.", en: "For students, admission is half price." },
        ],
      },
      {
        heading: `Good for, used for: 에 좋다 and -는 데 좋다`,
        body: [
          `Noun + 에 좋다 means 'good for': 건강에 좋아요, 피부에 안 좋아요. With a verb, use -는 데 (spaced: 데 is a noun here): 감기 낫는 데 좋아요 (good for getting over a cold), 스트레스를 푸는 데 도움이 돼요 (it helps relieve stress), 이 칼은 고기를 자르는 데 써요 (this knife is used for cutting meat).`,
        ],
        examples: [
          { ko: "생강차는 감기에 좋아요.", en: "Ginger tea is good for colds." },
          { ko: "걷기는 살 빼는 데 도움이 돼요.", en: "Walking helps you lose weight." },
        ],
      },
      {
        heading: `No choice but: -(으)ㄹ 수밖에 없다`,
        body: [
          `-(으)ㄹ 수밖에 없다 means 'have no choice but to': 버스가 끊겨서 택시를 탈 수밖에 없었어요. It also expresses a conclusion that must follow: 그렇게 열심히 했으니 합격할 수밖에 없죠 (after working that hard, of course she passed).`,
        ],
        examples: [
          { ko: "돈이 없어서 포기할 수밖에 없었어요.", en: "I had no choice but to give up because I had no money." },
          { ko: "이 집은 인기가 많을 수밖에 없어요. 싸고 맛있거든요.", en: "No wonder this place is popular. It's cheap and good." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "회의하고 중이에요.",
        right: "회의하는 중이에요.",
        why: `중이다 takes the modifier -는.`,
      },
      {
        wrong: "감기 낫는데 좋아요.",
        right: "감기 낫는 데 좋아요.",
        why: `데 here is a noun ('for doing'), so it's spaced. -는데 attached is the connective.`,
      },
      {
        wrong: "택시를 탈 수 밖에 없었어요.",
        right: "택시를 탈 수밖에 없었어요.",
        why: `밖에 is a particle, attached to 수.`,
      },
    ],
    faqs: [
      {
        q: `Is -는 중이다 the same as -고 있다?`,
        a: `Often interchangeable. -는 중이다 stresses being occupied and is more common for activities with a set duration (meetings, calls, repairs) and in formal contexts.`,
      },
    ],
    related: ["progressive-and-states", "dependent-noun-de", "inevitability-and-truth"],
    lessons: ["b1-in-the-middle-of", "b1-no-choice-but", "b1-good-for", "b1-in-case-of"],
  },
  {
    slug: "giving-opinions",
    title: "Giving Opinions: -다고 생각하다, -다고 보다, -지 않을까 싶다",
    description:
      "How to state, frame and soften an opinion: -다고 생각하다 and -다고 보다, 제 생각에는 and 제가 보기에는, softening with -지 않을까 싶다 and -는 게 좋지 않을까요?, and agreeing and disagreeing politely.",
    level: "B1",
    intro: [
      `'I think that ...' in Korean uses the reported-speech forms: you quote your own thought. 한국어가 재미있다고 생각해요. Beyond that, Korean speakers soften opinions a great deal, and knowing the softeners matters as much as knowing the basic pattern.`,
    ],
    sections: [
      {
        heading: `-다고 생각하다 and -다고 보다`,
        body: [
          `Put the opinion in its quoted form + 생각하다: 그 영화가 좋다고 생각해요, 정부가 노력해야 한다고 생각합니다, 그건 문제라고 생각해요 (nouns -(이)라고). -다고 보다 sounds a bit more analytical, like 'I see it as, I'd say': 이 방법이 더 효과적이라고 봅니다.`,
          `To frame: 제 생각에는 (in my opinion), 제가 보기에는 (the way I see it), 개인적으로 (personally). In writing, -다고 생각한다 or -다고 본다.`,
        ],
        examples: [
          { ko: "저는 재택근무가 더 효율적이라고 생각해요.", en: "I think working from home is more efficient." },
          { ko: "제가 보기에는 이 계획에 문제가 좀 있는 것 같아요.", en: "The way I see it, this plan has a few problems." },
          { ko: "전문가들은 경기가 곧 회복될 것이라고 본다.", en: "Experts believe the economy will soon recover." },
        ],
      },
      {
        heading: `Softening`,
        body: [
          `-지 않을까 싶어요 (I wonder if ... isn't the case) is a gentle 'I suspect': 조금 더 기다리는 게 좋지 않을까 싶어요. -는 게 어떨까요? (how about ...?) and -는 게 좋지 않을까요? (wouldn't it be better to ...?) turn opinions into suggestions. 것 같아요 softens anything: 그건 좀 어려울 것 같아요.`,
        ],
        examples: [
          { ko: "이번에는 다른 방법을 써 보는 게 어떨까요?", en: "How about trying a different approach this time?" },
          { ko: "가격이 좀 비싸지 않을까 싶어요.", en: "I suspect the price might be a bit high." },
        ],
      },
      {
        heading: `Agreeing and disagreeing`,
        body: [
          `Agree with 맞아요, 그렇죠, 저도 그렇게 생각해요, 동의해요. Disagree softly: 글쎄요 (well, I'm not sure), 그럴 수도 있지만 ... (that may be so, but ...), 저는 생각이 좀 달라요, 물론 그런 면도 있지만 .... Formal: 찬성합니다 / 반대합니다.`,
        ],
        examples: [
          { ko: "물론 장점도 있지만 단점도 많다고 생각해요.", en: "Of course it has advantages, but I think it has plenty of drawbacks too." },
          { ko: "글쎄요, 저는 생각이 좀 달라요.", en: "Hmm, I see it a little differently." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "저는 그 영화가 좋아요 생각해요.",
        right: "저는 그 영화가 좋다고 생각해요.",
        why: `The opinion is quoted with -다고 before 생각하다.`,
      },
      {
        wrong: "그건 문제다고 생각해요.",
        right: "그건 문제라고 생각해요.",
        why: `Nouns take -(이)라고.`,
      },
      {
        wrong: "당신이 틀렸어요.",
        right: "제 생각은 좀 달라요.",
        why: `Direct contradiction (and 당신) sounds aggressive. Frame it as your view.`,
        register: true,
      },
    ],
    faqs: [
      {
        q: `Should I use -다고 생각하다 or 것 같다?`,
        a: `-다고 생각하다 states a considered opinion; 것 같다 is softer and more tentative. In discussions and essays, -다고 생각하다; in casual talk, 것 같아요.`,
      },
    ],
    related: ["reported-speech", "guessing-and-seeming", "argument-essay-language", "hedging-academic-korean"],
    lessons: [
      "b1-i-think-that",
      "b1-framing-an-opinion",
      "b1-softening-opinions",
      "b1-agreeing-and-disagreeing",
      "b1-pros-and-cons",
      "b1-supporting-an-opinion",
      "b1-transform-speech-to-writing",
    ],
  },
  {
    slug: "storytelling-deoni-ja",
    title: "Telling a Story: -더니, -자 and Narrative Connectives",
    description:
      "How to tell a story in Korean: connectives like 처음에는, 그러다가, 알고 보니, 결국; -더니 for 'I saw A, then B' and 'A before, B now'; narrative -자 (the moment); and keeping tenses consistent in 한다체.",
    level: "B1",
    intro: [
      `Stories in Korean lean on sentence connectives and a few dedicated endings. -더니 links two observations by the narrator; written -자 moves the action forward ('the moment ..., then'). Combined with the past and 한다체, they give you a natural narrative voice.`,
    ],
    sections: [
      {
        heading: `Story connectives`,
        body: [
          `처음에는 (at first), 그때 (then, at that moment), 그러다가 (and then, at some point), 그러자 (thereupon), 그런데 (but then), 알고 보니 (it turned out that), 결국 (in the end), 마침내 / 드디어 (finally, at last), 그 후로 (after that).`,
        ],
        examples: [
          { ko: "처음에는 한국 음식이 너무 매웠어요. 그런데 지금은 매운 음식만 찾아요.", en: "At first Korean food was too spicy. But now spicy food is all I want." },
          { ko: "알고 보니 그 사람이 제 친구의 오빠였어요.", en: "It turned out he was my friend's older brother." },
          { ko: "결국 우리는 기차를 놓치고 말았다.", en: "In the end, we missed the train." },
        ],
      },
      {
        heading: `-더니: what I saw, then what followed`,
        body: [
          `-더니 links something the speaker observed with what came next, or contrasts how something was with how it is now: 아침에는 맑더니 오후에 비가 왔어요 (it was clear in the morning, then it rained in the afternoon), 민수 씨가 열심히 공부하더니 장학금을 받았어요 (Minsu studied hard, and then he got a scholarship). The subject is usually someone other than the speaker (for 'I did A and found B', the Advanced level uses -았 / 었더니).`,
        ],
        examples: [
          { ko: "동생이 아까부터 배가 아프다고 하더니 결국 병원에 갔어요.", en: "My brother had been saying his stomach hurt, and in the end he went to hospital." },
          { ko: "어렸을 때는 키가 작더니 지금은 아주 커요.", en: "He used to be small as a kid, but now he's very tall." },
        ],
      },
      {
        heading: `Written -자: the moment`,
        body: [
          `In written narrative, -자 means 'the moment, as soon as, and then (as a result)': 문을 열자 고양이가 뛰어나왔다 (as I opened the door, a cat leapt out), 봄이 되자 꽃이 피기 시작했다. It's the literary cousin of -자마자, and stories use it with 한다체.`,
        ],
        examples: [
          { ko: "그가 들어오자 모두 조용해졌다.", en: "The moment he walked in, everyone fell silent." },
          { ko: "비가 그치자 아이들이 밖으로 나갔다.", en: "As soon as the rain stopped, the children went outside." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "제가 열심히 공부하더니 합격했어요.",
        right: "열심히 공부했더니 합격했어요.",
        why: `-더니 usually describes someone else's actions; for your own action and its result, use -았 / 었더니.`,
      },
      {
        wrong: "문을 열자마자 고양이가 뛰어나왔다.",
        right: "문을 열자 고양이가 뛰어나왔다.",
        why: `In a literary story: Both are correct; written narrative prefers the shorter -자.`,
        register: true,
      },
    ],
    faqs: [
      {
        q: `Can I mix past and present in a story?`,
        a: `Korean novels sometimes switch to the present for vividness, but in your own writing keep to the past (-았 / 었다) for events and use -고 있었다 for background.`,
      },
    ],
    related: ["deorago-and-deon", "time-links", "advanced-connectives-observed", "written-style-handache"],
    lessons: [
      "b1-story-connectives-1",
      "b1-story-connectives-2",
      "b1-after-seeing-that",
      "b1-the-moment-written",
      "b1-practice-story-tenses",
      "b1-retelling-a-folk-tale",
      "b1-contrast-story-sequence-endings",
    ],
  },
];
