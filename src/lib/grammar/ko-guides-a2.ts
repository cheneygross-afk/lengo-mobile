// Synced from cheneygross-afk/lengo:src/lib/grammar/ko-guides-a2.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { KoGrammarGuide } from "./ko-types";

// Korean grammar guides, Elementary (A2, TOPIK 2). See the notes at the top
// of ./ko-types.ts.
export const KO_A2_GUIDES: KoGrammarGuide[] = [
  {
    slug: "formal-speech-hamnida",
    title: "Formal Speech: -ㅂ니다 / -습니다",
    description:
      "The formal 합니다 style of news, announcements, presentations and first days at work: statements, questions, past and future, -(으)십시오, -(으)ㅂ시다, -겠- for intention, and how it mixes with 해요 in real conversation.",
    level: "A2",
    intro: [
      `Korean marks how formal you are being in the last syllable of every sentence. The 해요 style you know is polite and friendly. The 합니다 style is polite and formal: it is the voice of the subway announcement, the TV news, the job interview, the presentation and the customer-service line. You will hear it every day in Korea, and you need it the moment you speak in public or at work.`,
    ],
    sections: [
      {
        heading: `Statements and questions`,
        body: [
          `After a vowel stem add -ㅂ니다 (갑니다, 마십니다, 합니다); after a consonant stem add -습니다 (먹습니다, 읽습니다, 있습니다). Questions replace 다 with 까: 갑니까?, 먹습니까?. Nouns take 입니다 and 입니까?, and the negative is 이 / 가 아닙니다.`,
          `ㄹ stems drop their ㄹ before ㅂ: 살다 → 삽니다, 만들다 → 만듭니다, 알다 → 압니다. Every formal ending nasalises: 습니다 [슴니다], 갑니다 [감니다], 먹습니까 [먹씀니까].`,
        ],
        table: {
          headers: ["", "Vowel stem (가다)", "Consonant stem (먹다)", "Noun (학생)"],
          rows: [
            ["statement", "갑니다", "먹습니다", "학생입니다"],
            ["question", "갑니까?", "먹습니까?", "학생입니까?"],
            ["past", "갔습니다", "먹었습니다", "학생이었습니다"],
            ["future", "갈 겁니다 / 가겠습니다", "먹을 겁니다", "학생일 겁니다"],
            ["negative", "가지 않습니다", "먹지 않습니다", "학생이 아닙니다"],
          ],
        },
        examples: [
          { ko: "처음 뵙겠습니다. 김민수입니다.", en: "How do you do. I'm Kim Minsu." },
          { ko: "이번 역은 시청역입니다.", en: "This stop is City Hall." },
          { ko: "회의는 몇 시에 시작합니까?", en: "What time does the meeting start?" },
          { ko: "어제 보고서를 보냈습니다.", en: "I sent the report yesterday." },
          { ko: "저는 서울에 삽니다.", en: "I live in Seoul." },
        ],
      },
      {
        heading: `Commands, suggestions and -겠-`,
        body: [
          `The formal command is -(으)십시오 (앉으십시오, 기다려 주십시오) and its negative -지 마십시오. The formal 'let's' is -(으)ㅂ시다 (갑시다, 시작합시다), used by a speaker to a group, by seniors to juniors or among equals; never say it to your boss, where 같이 가시죠 or 같이 가시겠어요? is the polite version.`,
          `-겠- in the formal style shows the speaker's intention or a humble readiness: 제가 하겠습니다 (I'll do it), 내일 다시 오겠습니다 (I'll come back tomorrow). It also lives in set phrases you should learn whole: 알겠습니다 (understood), 모르겠습니다 (I'm not sure), 잘 먹겠습니다 (said before eating), 처음 뵙겠습니다.`,
        ],
        examples: [
          { ko: "잠시만 기다려 주십시오.", en: "Please wait a moment." },
          { ko: "안전선 밖으로 한 걸음 물러서 주시기 바랍니다.", en: "Please step back behind the safety line." },
          { ko: "회의를 시작합시다.", en: "Let's start the meeting." },
          { ko: "네, 알겠습니다. 바로 확인하겠습니다.", en: "Yes, understood. I'll check right away." },
        ],
      },
      {
        heading: `When to use 합니다 and how it mixes with 해요`,
        body: [
          `Use 합니다 for public speaking, presentations, interviews, formal first meetings, the military, news and announcements, and when answering a senior at work in a formal setting. Use 해요 in ordinary polite conversation, including with colleagues and strangers in a shop.`,
          `Real conversations mix the two. A new employee might answer 네, 알겠습니다 and a minute later ask 이거 어디에 놓을까요?. Formal endings make you sound respectful and serious; too many in a friendly chat can sound stiff. As a rule, start formal in formal settings, and follow the other person's lead.`,
        ],
        examples: [
          { ko: "안녕하십니까? 오늘 발표를 맡은 박준호입니다.", en: "Good afternoon. I'm Park Junho and I'll be presenting today." },
          { ko: "네, 알겠습니다. 그런데 이거 어디에 둘까요?", en: "Yes, understood. And where shall I put this?" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "먹읍니다",
        right: "먹습니다",
        why: `After a consonant the ending is -습니다. (-읍니다 was an old spelling, abolished in 1988.)`,
      },
      {
        wrong: "만들습니다",
        right: "만듭니다",
        why: `ㄹ stems drop ㄹ and take -ㅂ니다: 삽니다, 만듭니다, 압니다.`,
      },
      {
        wrong: "부장님, 같이 갑시다.",
        right: "부장님, 같이 가시죠.",
        why: `-(으)ㅂ시다 is not used to a superior. Use -(으)시죠 or a question instead.`,
        register: true,
      },
      {
        wrong: "학생입니다요.",
        right: "학생입니다.",
        why: `합니다 and 해요 are separate styles. Don't add 요 to a formal ending.`,
      },
    ],
    faqs: [
      {
        q: `Is 합니다 more polite than 해요?`,
        a: `More formal rather than more polite. Both are respectful; 합니다 adds distance and seriousness. Talking to a friend's grandmother you'd use warm 해요 with honorifics, not 합니다.`,
      },
      {
        q: `Why do announcements say 바랍니다?`,
        a: `-(으)시기 바랍니다 ('we hope you will ...') is a soft formal instruction used in notices and announcements. It is taught with written notices at the Intermediate level.`,
      },
    ],
    related: ["casual-speech-banmal", "polite-present-haeyo", "honorifics-si", "speech-levels-and-register"],
    lessons: [
      "a2-formal-statements",
      "a2-formal-questions-past",
      "a2-drill-formal-endings",
      "a2-formal-commands-lets",
      "a2-practice-announcements",
      "a2-when-to-use-formal",
      "a2-contrast-formal-polite",
      "a2-transform-polite-to-formal",
      "a2-error-hunt-formal",
    ],
  },
  {
    slug: "casual-speech-banmal",
    title: "Casual Speech (반말): Talking to Friends",
    description:
      "반말 is the 해요 style without 요: 가, 먹어, 했어, 학생이야. The forms, the pronouns 나 and 너, calling friends with 아 / 야, and who you can (and can't) use it with.",
    level: "A2",
    intro: [
      `반말 literally means 'half speech'. It is how Koreans talk to close friends of the same age, to younger siblings and to children, and how they write in group chats with friends. Using it with the right person signals closeness; using it with the wrong person is a real social mistake, so the 'who' matters as much as the grammar.`,
    ],
    sections: [
      {
        heading: `The forms: drop 요`,
        body: [
          `Take the 해요 form and drop 요: 가요 → 가, 먹어요 → 먹어, 해요 → 해, 갔어요 → 갔어, 갈 거예요 → 갈 거야. Like 해요, the same form is a statement, a question or a request depending on intonation: 밥 먹어? (are you eating?), 빨리 먹어 (eat up).`,
          `Nouns are the exception: 이에요 / 예요 become 이야 after a consonant and 야 after a vowel: 학생이야, 친구야, 뭐야?. The negative is 아니야. 'Don't' is -지 마: 가지 마. Yes and no are 응 or 어, and 아니.`,
        ],
        table: {
          headers: ["", "해요", "반말"],
          rows: [
            ["go", "가요", "가"],
            ["eat", "먹어요", "먹어"],
            ["do", "해요", "해"],
            ["went", "갔어요", "갔어"],
            ["will go", "갈 거예요", "갈 거야"],
            ["it's a student", "학생이에요", "학생이야"],
            ["it's a friend", "친구예요", "친구야"],
            ["it isn't", "아니에요", "아니야"],
            ["don't go", "가지 마세요", "가지 마"],
            ["yes / no", "네 / 아니요", "응, 어 / 아니"],
          ],
        },
        examples: [
          { ko: "지금 어디야?", en: "Where are you now?" },
          { ko: "나 지금 집에 가.", en: "I'm heading home now." },
          { ko: "어제 그 영화 봤어? 응, 진짜 재밌었어.", en: "Did you see that film yesterday? Yeah, it was really good." },
          { ko: "걱정하지 마. 괜찮아.", en: "Don't worry. It's fine." },
          { ko: "이거 누구 거야?", en: "Whose is this?" },
        ],
      },
      {
        heading: `나, 너 and names`,
        body: [
          `In 반말 'I' is 나 (내가 before 가, 내 for 'my') and 'you' is 너 (네가, 네). Because 내가 and 네가 sound the same, almost everyone says 네가 as [니가] and 네 as [니], and many people write 니가 in texts; the standard spelling is still 네가.`,
          `Call a friend by name with 아 after a consonant and 야 after a vowel: 지은아, 민수야. In the middle of a sentence, names ending in a consonant often take 이: 지은이가 그랬어. Thanks and apologies become 고마워 and 미안해, and 안녕 is both hi and bye.`,
        ],
        examples: [
          { ko: "민수야, 내일 시간 있어?", en: "Minsu, are you free tomorrow?" },
          { ko: "지은아, 이거 네 거야?", en: "Jieun, is this yours?" },
          { ko: "내가 할게.", en: "I'll do it." },
          { ko: "고마워. 다음에 내가 살게.", en: "Thanks. Next time it's on me." },
        ],
      },
      {
        heading: `Who gets 반말`,
        body: [
          `Use 반말 with close friends of your own age (in Korea, born in the same year), with younger people once you are close, and with children. Don't start it yourself with anyone older or with strangers. With people a few years older, you use 해요 and call them 형, 오빠, 누나 or 언니 (depending on your gender and theirs), and they may use 반말 to you.`,
          `Switching is negotiated: the older person usually offers with 말 놓으세요 or 말 편하게 하세요 ('feel free to drop the formality'), or someone asks 우리 말 놓을까요?. Until then, stay with 해요.`,
        ],
        table: {
          headers: ["Who you are", "Older man", "Older woman"],
          rows: [
            ["a man", "형", "누나"],
            ["a woman", "오빠", "언니"],
          ],
        },
        examples: [
          { ko: "우리 동갑이네요. 말 놓을까요?", en: "We're the same age. Shall we drop the formalities?" },
          { ko: "형, 오늘 저녁 같이 먹어요.", en: "Let's have dinner together tonight. (to an older male friend)" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "저는 학생야.",
        right: "나는 학생이야.",
        why: `In 반말, 'I' is 나, not 저, and 학생 ends in a consonant, so it takes 이야.`,
      },
      {
        wrong: "이거 얼마야?",
        right: "이거 얼마예요?",
        why: `To a shop assistant: 반말 with a stranger sounds rude. Stay with 해요 until invited.`,
        register: true,
      },
      {
        wrong: "민수아",
        right: "민수야",
        why: `After a vowel the calling particle is 야; after a consonant 아 (지은아).`,
      },
      {
        wrong: "그 사람 학생야.",
        right: "그 사람 학생이야.",
        why: `After a consonant the 반말 copula is 이야; 야 is only after a vowel (친구야).`,
      },
    ],
    faqs: [
      {
        q: `Can I use 반말 with my Korean partner?`,
        a: `Usually yes: couples typically use 반말 once they're together, sometimes even with an age gap. Many couples keep 해요 in front of parents.`,
      },
      {
        q: `What is 해체 and 해라체?`,
        a: `해체 is the 반말 you've just learned (가, 먹어). 해라체 is a plainer casual style (간다, 먹어라, 가자) used by parents to children, in writing and among very close friends. Its written use, 한다체, is taught at the Intermediate level.`,
      },
    ],
    related: ["formal-speech-hamnida", "possessive-ui", "suggestions-and-intentions", "speech-levels-and-register"],
    lessons: [
      "a2-casual-present",
      "a2-casual-nouns-past-future",
      "a2-casual-pronouns",
      "a2-drill-casual-endings",
      "a2-who-gets-casual-speech",
      "a2-contrast-polite-or-casual",
      "a2-error-hunt-casual-speech",
      "a2-transform-three-speech-levels",
    ],
  },
  {
    slug: "linking-go-aseo-jiman",
    title: "Linking Clauses: -고, -고 나서, -아서 / -어서 and -지만",
    description:
      "How to join two actions or facts in one sentence: -고 (and, then), -고 나서 (after finishing), -아서 / -어서 for closely linked actions (가서, 만나서, 앉아서) and -지만 for 'but'.",
    level: "A2",
    intro: [
      `English strings clauses together with and, then and but. Korean does it with endings on the first verb. The tense goes on the last verb only (with exceptions noted below), and the choice of ending tells the listener how the two actions are related.`,
    ],
    sections: [
      {
        heading: `-고 and -고 나서: one thing, then another`,
        body: [
          `-고 lists actions or facts, and with actions it also gives an order: 손을 씻고 밥을 먹어요 (I wash my hands and eat). -고 나서 stresses that the first action is finished: 숙제를 하고 나서 놀았어요 (after doing my homework, I played). The past goes only at the end: *숙제를 했고 나서.`,
        ],
        examples: [
          { ko: "아침을 먹고 회사에 가요.", en: "I have breakfast and then go to work." },
          { ko: "수업이 끝나고 나서 도서관에 갔어요.", en: "After class finished, I went to the library." },
          { ko: "샤워하고 잤어요.", en: "I showered and went to bed." },
        ],
      },
      {
        heading: `-아서 / -어서: actions that belong together`,
        body: [
          `-아서 / -어서 (same ㅏ / ㅗ rule as -아요; 하다 → 해서) links two actions where the second depends on the first: you go somewhere and do something there, you make something and give it, you sit and then wait. 학교에 가서 공부해요 means 'I go to school and study there'; with -고, 학교에 가고 공부해요 sounds like two separate things.`,
          `This is why movement verbs (가다, 오다, 들어가다), posture verbs (앉다, 서다, 눕다) and 만나다, 만들다, 사다 so often take -아서: 친구를 만나서 영화를 봤어요 (I met a friend and we saw a film together). -아서 never takes a past ending (*갔어서) in this use.`,
        ],
        table: {
          headers: ["", "-고 (separate)", "-아서 (linked)"],
          rows: [
            ["go and study", "도서관에 가고 공부해요 (two things)", "도서관에 가서 공부해요 (study there)"],
            ["meet and eat", "친구를 만나고 밥을 먹었어요", "친구를 만나서 밥을 먹었어요 (with the friend)"],
            ["buy and give", "꽃을 사고 케이크를 샀어요", "꽃을 사서 엄마한테 줬어요 (the flowers)"],
          ],
        },
        examples: [
          { ko: "여기 앉아서 기다리세요.", en: "Please sit here and wait." },
          { ko: "케이크를 만들어서 친구한테 줬어요.", en: "I made a cake and gave it to a friend." },
          { ko: "명동에 가서 쇼핑할 거예요.", en: "I'm going to Myeongdong to shop." },
          { ko: "일찍 일어나서 운동했어요.", en: "I got up early and exercised." },
        ],
      },
      {
        heading: `-지만: but`,
        body: [
          `-지만 means 'but': 비싸지만 맛있어요 (it's expensive but tasty). Unlike -아서, it can take the past: 어제는 추웠지만 오늘은 따뜻해요. Nouns take 이지만 after a consonant and 지만 after a vowel: 학생이지만, 친구지만. Set phrases: 죄송하지만 ... (I'm sorry, but ...) and 실례지만 ... (excuse me, but ...).`,
          `-지만 joins two clauses in one sentence. 하지만 and 그런데 start a new sentence.`,
        ],
        examples: [
          { ko: "한국어는 어렵지만 재미있어요.", en: "Korean is hard but fun." },
          { ko: "열심히 공부했지만 시험을 잘 못 봤어요.", en: "I studied hard but did badly on the exam." },
          { ko: "실례지만, 화장실이 어디예요?", en: "Excuse me, where's the bathroom?" },
          { ko: "죄송하지만 지금은 안 돼요.", en: "I'm sorry, but now isn't possible." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "학교에 갔어서 공부했어요.",
        right: "학교에 가서 공부했어요.",
        why: `-아서 takes no past ending. The tense goes on the final verb.`,
      },
      {
        wrong: "친구를 만나고 같이 밥을 먹었어요.",
        right: "친구를 만나서 같이 밥을 먹었어요.",
        why: `When the second action happens with or because of the first (eating with the friend you met), use -아서.`,
        register: true,
      },
      {
        wrong: "비싸요 하지만 맛있어요.",
        right: "비싸지만 맛있어요.",
        why: `Inside one sentence use -지만. 하지만 starts a new sentence: 비싸요. 하지만 맛있어요.`,
      },
      {
        wrong: "학생지만",
        right: "학생이지만",
        why: `After a consonant, nouns take 이지만.`,
      },
    ],
    faqs: [
      {
        q: `Is -아서 the same as 'because'?`,
        a: `-아서 has two uses: linking actions (this guide) and giving a reason (바빠서 못 갔어요). Context tells them apart. The reasons guide covers the second use.`,
      },
      {
        q: `Can -고 take the past tense?`,
        a: `When it lists two separate past facts, yes: 어제는 비가 왔고 오늘은 맑아요. In a simple sequence of actions, leave the past to the last verb.`,
      },
    ],
    related: ["saying-and", "reasons-because", "time-clauses", "background-and-concession"],
    lessons: [
      "a2-first-this-then-that",
      "a2-one-action-leads-on",
      "a2-but",
      "a2-contrast-and-or-and-then",
      "a2-error-hunt-linking",
    ],
  },
  {
    slug: "reasons-because",
    title: "Because: -아서 / -어서, -(으)니까, -기 때문에 and -거든요",
    description:
      "Four ways to give a reason and when each one is right: -아서 (the everyday reason, no past, no commands), -(으)니까 (reasons for commands and suggestions), -기 때문에 (formal, emphatic) and -거든요 (explaining after the fact).",
    level: "A2",
    intro: [
      `Korean has several 'because' endings, and the choice is not free. The rules that decide it are about what comes after the reason (a statement, or a command and suggestion), whether the reason can be in the past, and how formal you are. Get those three right and you'll choose correctly almost every time.`,
    ],
    sections: [
      {
        heading: `-아서 / -어서: the everyday reason`,
        body: [
          `-아서 is the most common reason ending in speech: 바빠서 못 갔어요 (I couldn't go because I was busy), 늦어서 죄송해요 (sorry I'm late). Two rules: it takes no past tense (*늦었어서), and it can't be followed by a command or suggestion (*바빠서 내일 오세요). Nouns use 이라서 / 라서: 학생이라서, 주말이라서. On its own as a short answer: 왜 안 왔어요? 바빠서요.`,
          `Set phrases of thanks and apology use it: 만나서 반가워요, 도와줘서 고마워요, 늦어서 미안해요.`,
        ],
        examples: [
          { ko: "길이 막혀서 늦었어요.", en: "I'm late because the traffic was bad." },
          { ko: "오늘은 일요일이라서 은행이 문을 닫았어요.", en: "The bank is closed because it's Sunday." },
          { ko: "와 줘서 고마워요.", en: "Thanks for coming." },
          { ko: "왜 안 먹어요? 배불러서요.", en: "Why aren't you eating? Because I'm full." },
        ],
      },
      {
        heading: `-(으)니까: reasons for commands and suggestions`,
        body: [
          `-(으)니까 (-니까 after a vowel, -으니까 after a consonant) is the reason to use before a command, request or suggestion: 비가 오니까 우산 가져가세요 (take an umbrella, it's raining), 늦었으니까 택시 탈까요?. It can take the past (늦었으니까), and it often sounds like 'since, as you can see'. Nouns take 이니까 / 니까.`,
          `In statements -(으)니까 can sound pointed (the reason is obvious), so for neutral explanations prefer -아서. It also means 'when I did X, I found Y': 집에 가니까 아무도 없었어요 (when I got home, nobody was there).`,
        ],
        examples: [
          { ko: "추우니까 따뜻하게 입으세요.", en: "It's cold, so dress warmly." },
          { ko: "시간이 없으니까 빨리 가요.", en: "We don't have time, so let's go quickly." },
          { ko: "내일 시험이니까 일찍 자.", en: "You've got an exam tomorrow, so go to bed early." },
          { ko: "문을 여니까 고양이가 있었어요.", en: "When I opened the door, there was a cat." },
        ],
      },
      {
        heading: `-기 때문에 and -거든요`,
        body: [
          `-기 때문에 is the firm, explicit 'because' of writing, presentations and serious explanations: 비용이 많이 들기 때문에 계획을 바꿨습니다. It can take the past (-았기 때문에) but, like -아서, not a following command. Nouns use 때문에 directly: 일 때문에 (because of work), 감기 때문에.`,
          `-거든요 gives a reason the listener didn't know, after the main statement: 오늘 못 가요. 일이 있거든요 (I can't go today. I've got something on, you see). It ends the sentence and has a rise-and-fall intonation.`,
        ],
        table: {
          headers: ["Ending", "Past before it?", "Command or suggestion after?", "Feel"],
          rows: [
            ["-아서 / -어서", "no", "no", "everyday, neutral"],
            ["-(으)니까", "yes", "yes", "since, as you see"],
            ["-기 때문에", "yes", "no", "formal, emphatic"],
            ["-거든요", "yes", "(ends the sentence)", "explaining, 'you see'"],
          ],
        },
        examples: [
          { ko: "날씨 때문에 비행기가 늦게 출발했어요.", en: "The plane left late because of the weather." },
          { ko: "인구가 줄었기 때문에 학교가 문을 닫았다.", en: "The school closed because the population fell." },
          { ko: "저 오늘 일찍 가야 해요. 친구 생일이거든요.", en: "I have to leave early today. It's my friend's birthday." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "늦었어서 죄송해요.",
        right: "늦어서 죄송해요.",
        why: `-아서 never takes the past: the main verb carries the tense.`,
      },
      {
        wrong: "비가 와서 우산을 가져가세요.",
        right: "비가 오니까 우산을 가져가세요.",
        why: `Before a command or suggestion, use -(으)니까, not -아서.`,
      },
      {
        wrong: "바쁘기 때문에 내일 만납시다.",
        right: "바쁘니까 내일 만납시다.",
        why: `-기 때문에 is not followed by a suggestion or command.`,
      },
      {
        wrong: "학생라서",
        right: "학생이라서",
        why: `After a consonant, nouns take 이라서.`,
      },
    ],
    faqs: [
      {
        q: `Is 그래서 the same as -아서?`,
        a: `그래서 ('so, therefore') starts a new sentence and corresponds to -아서. 그러니까 corresponds to -(으)니까 and is used before advice: 비가 와요. 그러니까 우산 가져가세요.`,
      },
      {
        q: `Which one do I use in an essay?`,
        a: `-기 때문에 and 때문이다 (…기 때문이다, 'it is because …') are the written workhorses. -(으)므로 is even more formal, taught at the Upper-intermediate level.`,
      },
    ],
    related: ["linking-go-aseo-jiman", "attitude-endings", "nominalisers-gi-geot", "reasons-and-results"],
    lessons: [
      "a2-because-reason",
      "a2-because-so-do-it",
      "a2-contrast-two-becauses",
      "a2-because-of",
      "a2-contrast-four-reasons",
      "a2-error-hunt-linking",
    ],
  },
  {
    slug: "particles-only-or-every",
    title: "Particles That Change the Meaning: 만, 밖에, (이)나, 마다, 도",
    description:
      "만 (only), 밖에 + negative (only, nothing but), (이)나 (or, as many as, or something), 마다 (every), 도 (also, even) and 은 / 는 for contrast, plus how particles stack (에서도, 한테만).",
    level: "A2",
    intro: [
      `Some particles don't mark a role like subject or object; they add meaning: only, also, every, or. They usually replace 이 / 가 and 을 / 를, but they sit after 에, 에서 and 한테, stacking up to give precise meanings like 에서도 (at ... too) and 한테만 (only to).`,
    ],
    sections: [
      {
        heading: `만 and 밖에: only`,
        body: [
          `만 means 'only' with a neutral or positive verb: 커피만 마셔요 (I only drink coffee), 한 개만 주세요 (just one, please). 밖에 also means 'only', but it must be followed by a negative and adds 'not enough': 천 원밖에 없어요 (I only have 1,000 won, and that's not enough). 시간이 10분밖에 안 남았어요 (only ten minutes left!).`,
          `만 replaces 이 / 가 and 을 / 를 but follows other particles: 너한테만 말했어 (I told only you), 집에서만 (only at home).`,
        ],
        examples: [
          { ko: "저는 주말에만 운동해요.", en: "I only exercise at weekends." },
          { ko: "물만 주세요.", en: "Just water, please." },
          { ko: "지갑에 오천 원밖에 없어요.", en: "I've only got 5,000 won in my wallet." },
          { ko: "한국어를 조금밖에 못 해요.", en: "I only speak a little Korean." },
        ],
      },
      {
        heading: `(이)나: or, as many as, or something`,
        body: [
          `(이)나 (이나 after a consonant, 나 after a vowel) means 'or' between nouns: 커피나 차 (coffee or tea). After a number it means 'as many as', surprised that it's a lot: 두 시간이나 기다렸어요 (I waited a whole two hours). With a single noun in a suggestion, it softens: 'or something': 커피나 마실까요? (shall we get a coffee or something?).`,
        ],
        examples: [
          { ko: "토요일이나 일요일에 만나요.", en: "Let's meet on Saturday or Sunday." },
          { ko: "케이크를 세 조각이나 먹었어요.", en: "I ate three whole slices of cake." },
          { ko: "주말에 영화나 볼까요?", en: "Shall we see a film or something at the weekend?" },
        ],
      },
      {
        heading: `마다 and 도`,
        body: [
          `마다 means 'every, each': 날마다 (every day), 주말마다 (every weekend), 사람마다 (each person), 두 시간마다 (every two hours). Don't combine it with 매-: 매일마다 is a redundant doubling that careful writers avoid, since 매일 and 날마다 already mean every day.`,
          `도 means 'also, too', and with a negative 'not ... either': 저도 학생이에요, 저도 안 가요. It replaces 이 / 가 and 을 / 를 but follows 에, 에서 and 한테: 서울에도 있어요, 친구한테도 말했어요. With a number or 하나 and a negative, it means 'not even': 한 명도 없어요.`,
        ],
        examples: [
          { ko: "그 식당은 주말마다 사람이 많아요.", en: "That restaurant is busy every weekend." },
          { ko: "나라마다 문화가 달라요.", en: "Every country has a different culture." },
          { ko: "부산에도 지하철이 있어요.", en: "Busan has a subway too." },
          { ko: "교실에 아무도 없어요.", en: "There's nobody in the classroom." },
        ],
      },
      {
        heading: `은 / 는 for contrast and stacking`,
        body: [
          `은 / 는 on a non-subject sets it against something else: 서울에서는 지하철을 타요 (in Seoul, I take the subway, unlike elsewhere), 오늘은 바빠요 (today, at least, I'm busy). It stacks onto other particles the same way: 한테는, 에서는, 에는.`,
        ],
        table: {
          headers: ["Base", "+ 도", "+ 만", "+ 은 / 는"],
          rows: [
            ["에", "에도", "에만", "에는"],
            ["에서", "에서도", "에서만", "에서는"],
            ["한테", "한테도", "한테만", "한테는"],
            ["이 / 가, 을 / 를", "도 (replaces)", "만 (replaces)", "은 / 는 (replaces)"],
          ],
        },
        examples: [
          { ko: "회사에서는 존댓말을 써요.", en: "At work I use polite speech." },
          { ko: "이 얘기는 너한테만 하는 거야.", en: "I'm only telling you this." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "천 원밖에 있어요.",
        right: "천 원밖에 없어요.",
        why: `밖에 always needs a negative verb. With a positive verb use 만: 천 원만 있어요.`,
      },
      {
        wrong: "저가도 학생이에요.",
        right: "저도 학생이에요.",
        why: `도 replaces 이 / 가; it doesn't stack after it.`,
      },
      {
        wrong: "매일마다 운동해요.",
        right: "매일 운동해요.",
        why: `매일 already means every day. Use 매일 or 날마다, not both: the doubled form is common in speech but marked as redundant.`,
        register: true,
      },
      {
        wrong: "커피이나 차",
        right: "커피나 차",
        why: `After a vowel it's 나; 이나 is after a consonant (물이나 주스).`,
      },
    ],
    faqs: [
      {
        q: `What's the difference between 만 and 밖에 in feeling?`,
        a: `만 states a limit neutrally. 밖에 complains that it's too little. 학생이 세 명만 왔어요 (only three students came); 학생이 세 명밖에 안 왔어요 (only three students came, which is disappointing).`,
      },
      {
        q: `Can I say 커피라도?`,
        a: `(이)라도 means 'at least, if nothing better': 커피라도 마실래요? (how about at least a coffee?). It comes at the Intermediate level with 조차 and 마저.`,
      },
    ],
    related: ["topic-particle-eun-neun", "particles-people-and-direction", "particles-even-at-least"],
    lessons: [
      "a2-only",
      "a2-only-bakke",
      "a2-or-as-many-as",
      "a2-every",
      "a2-topic-particle-for-contrast",
      "a2-drill-particles",
      "a2-contrast-particle-pairs",
      "a2-error-hunt-particles",
    ],
  },
  {
    slug: "particles-people-and-direction",
    title: "To, From and By: 에게, 한테, 께, 한테서 and (으)로",
    description:
      "Particles for people (에게 and 한테 'to', 께 for respected people, 에게서 and 한테서 'from') versus 에 for places, and the many jobs of (으)로: by means of, toward, and into.",
    level: "A2",
    intro: [
      `에 marks a place you go to. But when you give, send or say something to a person or animal, Korean switches to a different particle: 친구한테 전화했어요, not *친구에 전화했어요. And (으)로 covers a cluster of meanings English splits between by, with, toward and into.`,
    ],
    sections: [
      {
        heading: `To a person: 에게, 한테, 께`,
        body: [
          `에게 and 한테 mean the same: 'to' a person or animal. 한테 is the spoken choice; 에게 is used in writing and careful speech. 께 is the honorific version for someone you respect: 할머니께 선물을 드렸어요. For places and organisations, use 에: 회사에 전화했어요, 은행에 이메일을 보냈어요.`,
          `'From' a person is 에게서 or 한테서 (and, in speech, often just 한테): 친구한테서 편지를 받았어요. From a place or organisation it's 에서: 학교에서 연락이 왔어요.`,
        ],
        table: {
          headers: ["", "Spoken", "Written", "Honorific", "Places, organisations"],
          rows: [
            ["to", "한테", "에게", "께", "에"],
            ["from", "한테서 (한테)", "에게서", "께", "에서"],
          ],
        },
        examples: [
          { ko: "동생한테 문자를 보냈어요.", en: "I texted my younger sibling." },
          { ko: "고양이에게 밥을 줬어요.", en: "I fed the cat." },
          { ko: "선생님께 이메일을 드렸어요.", en: "I emailed my teacher." },
          { ko: "엄마한테서 소포를 받았어요.", en: "I got a parcel from my mum." },
          { ko: "회사에서 연락이 왔어요.", en: "I heard from the company." },
        ],
      },
      {
        heading: `(으)로: by means of`,
        body: [
          `After a vowel or ㄹ, use 로; after any other consonant, 으로. The first meaning is the means or tool: 지하철로 가요 (by subway), 손으로 먹어요 (with my hands), 한국어로 말해 주세요 (in Korean), 카드로 계산할게요 (I'll pay by card). Note 지하철로 and 연필로 (ㄹ takes 로, like a vowel: 버스로, 택시로), but 젓가락으로 and 손으로.`,
        ],
        examples: [
          { ko: "학교에 버스로 가요.", en: "I go to school by bus." },
          { ko: "이걸 한국어로 뭐라고 해요?", en: "What do you call this in Korean?" },
          { ko: "젓가락으로 먹어요.", en: "I eat with chopsticks." },
          { ko: "카드로 결제할게요.", en: "I'll pay by card." },
        ],
      },
      {
        heading: `(으)로: toward, and change into`,
        body: [
          `(으)로 also marks direction, 'toward': 오른쪽으로 가세요 (go right), 이쪽으로 오세요 (this way, please), 부산으로 출발했어요 (left for Busan). With 가다, both 부산에 가요 and 부산으로 가요 work; 으로 stresses the direction.`,
          `With 바꾸다 and 되다 it means 'into, as': 큰 사이즈로 바꿔 주세요 (please change it to a bigger size), 아메리카노로 할게요 (I'll have an Americano, literally 'I'll do it as an Americano').`,
        ],
        examples: [
          { ko: "다음 사거리에서 왼쪽으로 가세요.", en: "Turn left at the next intersection." },
          { ko: "이 셔츠를 다른 색으로 바꿀 수 있어요?", en: "Can I swap this shirt for a different colour?" },
          { ko: "저는 녹차로 할게요.", en: "I'll have green tea." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "친구에 전화했어요.",
        right: "친구한테 전화했어요.",
        why: `To a person, use 한테 or 에게. 에 is for places and organisations.`,
      },
      {
        wrong: "지하철으로 가요.",
        right: "지하철로 가요.",
        why: `After ㄹ, (으)로 is just 로.`,
      },
      {
        wrong: "할머니한테 드렸어요.",
        right: "할머니께 드렸어요.",
        why: `With humble 드리다 and a respected person, 께 is the matching particle. 한테 isn't wrong in speech but clashes with the respect of 드리다.`,
        register: true,
      },
      {
        wrong: "학교에 버스에 가요.",
        right: "학교에 버스로 가요.",
        why: `The means of transport takes (으)로. 버스에 가요 would mean 'I go to the bus'.`,
      },
    ],
    faqs: [
      {
        q: `Why is it 친구를 만나요 and not 친구한테 만나요?`,
        a: `Meeting is not giving something to someone; 만나다 takes an object (친구를) or 와 / 하고 (친구하고 만나요). Use 한테 with verbs of giving, sending, saying and asking.`,
      },
      {
        q: `Is 한테 rude?`,
        a: `No, it's simply spoken. Use 께 when you also use honorific or humble verbs (드리다, 여쭤보다).`,
      },
    ],
    related: ["place-particles-e-eseo", "particles-only-or-every", "giving-and-favours", "honorifics-si"],
    lessons: ["a2-to-from-people", "a2-by-toward-into", "a2-contrast-particle-pairs", "a2-error-hunt-particles"],
  },
  {
    slug: "progressive-and-states",
    title: "Happening Now: -고 있다, -아 / 어 있다 and How Often",
    description:
      "-고 있다 for actions in progress (now and these days), wearing verbs (입고 있어요), -아 / 어 있다 for the state left by an action (앉아 있어요, 열려 있어요), and the frequency words 항상, 자주, 가끔, 거의 안.",
    level: "A2",
    intro: [
      `Korean's simple present already covers 'I'm doing it', but when you want to stress that something is in progress, you use -고 있다. And there is a second 'being' form, -아 / 어 있다, for a state that remains after something happened: sitting, standing, a door being open. English uses -ing for both, which is why learners confuse them.`,
    ],
    sections: [
      {
        heading: `-고 있다: in progress`,
        body: [
          `Add -고 있다 to an action verb stem: 먹고 있어요 (I'm eating), 기다리고 있어요 (I'm waiting). It covers right now and also an ongoing period: 요즘 한국어를 배우고 있어요 (these days I'm learning Korean). Past: 자고 있었어요 (I was sleeping). Honorific: -고 계시다 (아버지가 신문을 읽고 계세요).`,
          `With verbs of putting on clothes (입다, 신다, 쓰다 for hats and glasses, 끼다 for gloves and rings, 매다 for ties), -고 있다 describes what someone is wearing: 빨간 코트를 입고 있어요 (she's wearing a red coat).`,
        ],
        examples: [
          { ko: "지금 뭐 하고 있어요? 밥 먹고 있어요.", en: "What are you doing now? I'm eating." },
          { ko: "요즘 운전을 배우고 있어요.", en: "I'm learning to drive these days." },
          { ko: "전화했을 때 자고 있었어요.", en: "I was asleep when you called." },
          { ko: "그 사람은 안경을 쓰고 있어요.", en: "He's wearing glasses." },
        ],
      },
      {
        heading: `-아 / 어 있다: the state that remains`,
        body: [
          `-아 / 어 있다 (same ㅏ / ㅗ rule) is used with verbs that describe a change of state, mostly intransitive and passive verbs: 앉다 → 앉아 있어요 (is sitting, seated), 서다 → 서 있어요 (is standing), 열리다 → 열려 있어요 (is open), 붙다 → 붙어 있어요 (is stuck on). It describes the result, not the action.`,
          `So 앉고 있어요 means 'is in the act of sitting down', and 앉아 있어요 means 'is sitting (there)'. Honorific: 앉아 계세요.`,
        ],
        table: {
          headers: ["", "-고 있다 (the action)", "-아 / 어 있다 (the state)"],
          rows: [
            ["sit", "앉고 있어요 (sitting down)", "앉아 있어요 (seated)"],
            ["stand", "일어나고 있어요 (getting up)", "서 있어요 (standing)"],
            ["open", "문을 열고 있어요 (opening it)", "문이 열려 있어요 (it's open)"],
            ["wear", "옷을 입고 있어요 (wearing / putting on)", "not used"],
          ],
        },
        examples: [
          { ko: "할머니가 소파에 앉아 계세요.", en: "Grandma is sitting on the sofa." },
          { ko: "창문이 열려 있어요.", en: "The window is open." },
          { ko: "벽에 사진이 걸려 있어요.", en: "There's a photo hanging on the wall." },
          { ko: "버스에서 계속 서 있었어요.", en: "I was standing the whole way on the bus." },
        ],
      },
      {
        heading: `How often`,
        body: [
          `Frequency words go before the verb: 항상 / 늘 (always), 자주 (often), 보통 (usually), 가끔 (sometimes), 거의 안 (hardly ever), 전혀 안 (never at all). In these meanings 거의 and 전혀 need a negative. 'Twice a week' is 일주일에 두 번, 'three times a day' 하루에 세 번, with 에.`,
          `-(으)면서 (while) is in the time clauses guide.`,
        ],
        examples: [
          { ko: "저는 보통 일곱 시에 일어나요.", en: "I usually get up at seven." },
          { ko: "일주일에 세 번 헬스장에 가요.", en: "I go to the gym three times a week." },
          { ko: "술은 거의 안 마셔요.", en: "I hardly ever drink." },
          { ko: "가끔 친구들하고 노래방에 가요.", en: "Sometimes I go to karaoke with friends." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "할머니가 하루 종일 소파에 앉고 계세요.",
        right: "할머니가 하루 종일 소파에 앉아 계세요.",
        why: `For the state of sitting, use -아 / 어 있다. -고 있다 is the act of sitting down.`,
      },
      {
        wrong: "문이 열고 있어요.",
        right: "문이 열려 있어요.",
        why: `The door isn't doing anything: it is in a state. Use the passive 열리다 + -어 있다.`,
      },
      {
        wrong: "가끔 안 가요.",
        right: "거의 안 가요.",
        why: `'Hardly ever' is 거의 안. 가끔 안 가요 means 'sometimes I don't go'.`,
      },
    ],
    faqs: [
      {
        q: `Do I need -고 있다 every time English uses -ing?`,
        a: `No. 지금 뭐 해요? and 지금 공부해요 are perfectly natural. Use -고 있다 when you want to stress that the action is ongoing or for a longer period.`,
      },
      {
        q: `Can I use -고 있다 with adjectives?`,
        a: `No: adjectives already describe states. For a change in an adjective, use -아 / 어지고 있다: 날씨가 따뜻해지고 있어요 (it's getting warmer).`,
      },
    ],
    related: ["time-clauses", "passive-verbs", "change-and-becoming", "completed-actions"],
    lessons: [
      "a2-in-progress-now",
      "a2-in-progress-these-days-wearing",
      "a2-resulting-state",
      "a2-how-often",
      "a2-contrast-simple-progressive",
      "a2-error-hunt-now-habits",
    ],
  },
  {
    slug: "time-clauses",
    title: "When, Before, After, While: -(으)ㄹ 때, -기 전에, -(으)ㄴ 후에, -는 동안, -(으)면서",
    description:
      "Time clauses in Korean: -(으)ㄹ 때 and -았 / 었을 때 (when), -기 전에 (before), -(으)ㄴ 후에 / 다음에 (after), -는 동안 (during), -(으)면서 (while doing both) and -(으)ㄴ 지 ... 되다 (it's been ... since).",
    level: "A2",
    intro: [
      `English time clauses start with a conjunction: when I was young, before I eat. Korean puts the clause first and ends it with a noun-like word: 'young-time', 'eat-before'. Most of these patterns are built on the noun modifiers, so the ending changes with tense: 갈 때, 간 후에, 가는 동안.`,
    ],
    sections: [
      {
        heading: `When: -(으)ㄹ 때 and -았 / 었을 때`,
        body: [
          `-(으)ㄹ 때 means 'when, at the time': 한국에 갈 때 (when I go to Korea), 밥 먹을 때 (when eating). For a finished event in the past, use -았 / 었을 때: 어렸을 때 (when I was young), 한국에 처음 왔을 때 (when I first came to Korea). With nouns, just 때: 방학 때, 점심때, 크리스마스 때.`,
        ],
        examples: [
          { ko: "시간이 있을 때 연락해 주세요.", en: "Get in touch when you have time." },
          { ko: "어렸을 때 부산에 살았어요.", en: "I lived in Busan when I was young." },
          { ko: "한국에 처음 왔을 때 한국어를 전혀 못 했어요.", en: "When I first came to Korea, I couldn't speak any Korean." },
          { ko: "방학 때 뭐 할 거예요?", en: "What are you doing over the holidays?" },
        ],
      },
      {
        heading: `Before and after`,
        body: [
          `'Before' is -기 전에 after a verb (자기 전에, 먹기 전에) and 전에 after a noun (수업 전에, 일주일 전에). It never takes a past ending: *먹었기 전에. 'After' is -(으)ㄴ 후에 or -(으)ㄴ 다음에 (먹은 후에, 끝난 다음에), and after a noun simply 후에: 수업 후에. -고 나서 means much the same in speech.`,
        ],
        table: {
          headers: ["", "After a verb", "After a noun"],
          rows: [
            ["before", "자기 전에", "수업 전에, 3일 전에"],
            ["after", "먹은 후에 / 먹은 다음에", "식사 후에, 1년 후에"],
          ],
        },
        examples: [
          { ko: "자기 전에 이를 닦아요.", en: "I brush my teeth before bed." },
          { ko: "회의가 끝난 후에 전화할게요.", en: "I'll call after the meeting finishes." },
          { ko: "식사 전에 손을 씻으세요.", en: "Wash your hands before eating." },
          { ko: "졸업한 다음에 뭐 할 거예요?", en: "What will you do after you graduate?" },
        ],
      },
      {
        heading: `During and while`,
        body: [
          `-는 동안 (and noun + 동안) means 'during, for the time that': 제가 요리하는 동안 (while I cook), 방학 동안 (during the holidays), 3년 동안 (for three years). The two clauses can have different subjects.`,
          `-(으)면서 means 'while' for one person doing two things at once: 음악을 들으면서 공부해요 (I study while listening to music). The subject must be the same. With nouns it's 이면서: 학생이면서 회사원이에요 (she's both a student and an employee).`,
        ],
        examples: [
          { ko: "제가 샤워하는 동안 기다려 주세요.", en: "Please wait while I shower." },
          { ko: "한국에서 2년 동안 살았어요.", en: "I lived in Korea for two years." },
          { ko: "운전하면서 전화하지 마세요.", en: "Don't talk on the phone while driving." },
          { ko: "커피를 마시면서 이야기했어요.", en: "We talked over coffee." },
        ],
      },
      {
        heading: `It's been ... since: -(으)ㄴ 지 ... 되다`,
        body: [
          `To say how long it has been since something happened, use the past modifier + 지 + time + 되다 (or 넘다, 지나다): 한국에 온 지 1년 됐어요 (it's been a year since I came to Korea), 밥 먹은 지 얼마 안 됐어요 (I ate not long ago). Note the space: 온 지. Without a space, -는지 is a different ending (whether).`,
        ],
        examples: [
          { ko: "한국어를 배운 지 6개월 됐어요.", en: "I've been learning Korean for six months." },
          { ko: "우리 만난 지 벌써 10년이 넘었어요.", en: "It's been more than ten years since we met." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "먹었기 전에",
        right: "먹기 전에",
        why: `-기 전에 never takes a past ending.`,
      },
      {
        wrong: "제가 요리하면서 동생이 청소했어요.",
        right: "제가 요리하는 동안 동생이 청소했어요.",
        why: `-(으)면서 needs the same subject for both actions. With two people, use -는 동안.`,
      },
      {
        wrong: "한국에 온지 1년 됐어요.",
        right: "한국에 온 지 1년 됐어요.",
        why: `지 meaning 'since' is a separate noun and is spaced.`,
      },
    ],
    faqs: [
      {
        q: `Is -(으)ㄴ 후에 the same as -고 나서?`,
        a: `Very close. -(으)ㄴ 후에 sounds a little more formal and focuses on the time after; -고 나서 is common in speech and stresses completion.`,
      },
      {
        q: `Why is it 갈 때 even when I'm going in the past?`,
        a: `-(으)ㄹ 때 doesn't mark future here; it means 'at the time of going'. 학교에 갈 때 친구를 만났어요 is 'I met a friend on my way to school'. -았을 때 means the going was finished: 학교에 갔을 때 친구가 있었어요 ('when I got to school, my friend was there').`,
      },
    ],
    related: ["noun-modifiers", "progressive-and-states", "linking-go-aseo-jiman", "time-links"],
    lessons: [
      "a2-while-doing",
      "a2-time-since",
      "a2-when",
      "a2-before-after",
      "a2-during",
      "a2-error-hunt-modifiers-2",
    ],
  },
  {
    slug: "can-cant-and-long-negation",
    title: "Can, Can't, Know How and the Long Negatives",
    description:
      "-(으)ㄹ 수 있다 / 없다 (can, can't, possible), -(으)ㄹ 줄 알다 / 모르다 (know how to), 잘하다 and 못하다, and the long negatives -지 않다 and -지 못하다 that you need for formal and written Korean.",
    level: "A2",
    intro: [
      `At the Beginner level you said 'can't' with 못. Now you get the full set: a general 'can' and 'possible', a 'know how', and the long forms of negation that formal speech and writing prefer.`,
    ],
    sections: [
      {
        heading: `-(으)ㄹ 수 있다 / 없다`,
        body: [
          `Add -ㄹ 수 있다 after a vowel stem (갈 수 있어요) and -을 수 있다 after a consonant (먹을 수 있어요); ㄹ stems just add 수 (만들 수 있어요). The negative is -(으)ㄹ 수 없다. It covers ability (한국어를 읽을 수 있어요) and possibility or permission (여기서 사진을 찍을 수 있어요?). Said with a tense ㅅ: 갈 수 [갈 쑤].`,
        ],
        examples: [
          { ko: "매운 음식을 먹을 수 있어요?", en: "Can you eat spicy food?" },
          { ko: "오늘은 일이 많아서 만날 수 없어요.", en: "I can't meet today because I've got a lot of work." },
          { ko: "이 카드로 지하철을 탈 수 있어요.", en: "You can take the subway with this card." },
          { ko: "김치를 만들 수 있어요?", en: "Can you make kimchi?" },
        ],
      },
      {
        heading: `Know how: -(으)ㄹ 줄 알다 / 모르다`,
        body: [
          `-(으)ㄹ 줄 알다 means 'know how to', a learned skill: 수영할 줄 알아요 (I know how to swim), 운전할 줄 몰라요 (I don't know how to drive). It is about technique, not opportunity: if you can swim but the pool is closed, you say 수영할 수 없어요, not 수영할 줄 몰라요.`,
          `잘하다 and 못하다 (one word each) mean 'be good at' and 'be bad at': 노래를 잘해요, 요리를 못해요. 잘 못해요 (two words) means 'can't do it well'. Spacing changes the meaning: 못 해요 is 'can't do', 못해요 is 'is bad at'.`,
        ],
        examples: [
          { ko: "한글 읽을 줄 알아요?", en: "Can you read Hangul?" },
          { ko: "저는 자전거를 탈 줄 몰라요.", en: "I don't know how to ride a bike." },
          { ko: "민수 씨는 요리를 정말 잘해요.", en: "Minsu is a really good cook." },
          { ko: "저는 노래를 잘 못해요.", en: "I'm not much of a singer." },
        ],
      },
      {
        heading: `The long negatives: -지 않다 and -지 못하다`,
        body: [
          `-지 않다 means the same as 안: 먹지 않아요 = 안 먹어요. -지 못하다 means the same as 못: 가지 못해요 = 못 가요. The long forms are preferred in writing, formal speech (먹지 않습니다) and with long words, especially noun + 하다 verbs and adjectives: 깨끗하지 않아요 sounds more natural than 안 깨끗해요 for many speakers.`,
          `The long forms take tense and politeness on 않다 and 못하다: 가지 않았어요, 가지 못했습니다. Remember 않 is the spelling here (from 아니하다), while the short form is 안.`,
        ],
        table: {
          headers: ["", "Short", "Long"],
          rows: [
            ["don't go", "안 가요", "가지 않아요"],
            ["didn't eat", "안 먹었어요", "먹지 않았어요"],
            ["can't go", "못 가요", "가지 못해요"],
            ["(formal) don't", "안 갑니다", "가지 않습니다"],
          ],
        },
        examples: [
          { ko: "저는 술을 마시지 않습니다.", en: "I don't drink." },
          { ko: "어제는 바빠서 연락하지 못했어요.", en: "I couldn't get in touch yesterday because I was busy." },
          { ko: "이 방은 별로 넓지 않아요.", en: "This room isn't very big." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "만들을 수 있어요",
        right: "만들 수 있어요",
        why: `ㄹ stems take no extra 으.`,
      },
      {
        wrong: "가지 안아요",
        right: "가지 않아요",
        why: `The long negative is spelled 않 (아니하). 안 is the short adverb.`,
      },
      {
        wrong: "수영할 줄 있어요.",
        right: "수영할 줄 알아요.",
        why: `The 'know how' form uses 알다 / 모르다, not 있다 / 없다.`,
      },
      {
        wrong: "안 공부할 수 있어요.",
        right: "공부할 수 없어요.",
        why: `'Can't' is -(으)ㄹ 수 없다 (or 못). 안 before -(으)ㄹ 수 있다 doesn't make 'can't'.`,
      },
    ],
    faqs: [
      {
        q: `Is 못 가요 the same as 갈 수 없어요?`,
        a: `Nearly. 못 is short and conversational; -(으)ㄹ 수 없다 sounds more definite and is common in writing. Both mean 'can't'.`,
      },
      {
        q: `When should I use the long negative in speech?`,
        a: `With adjectives and long verbs it often sounds smoother (편하지 않아요, 이해하지 못했어요), and in formal 합니다 speech it is the default. In quick casual speech, the short forms dominate.`,
      },
    ],
    related: ["negation-an-mot", "must-may-mustnt", "formal-speech-hamnida"],
    lessons: [
      "a2-can-ability",
      "a2-can-possibility",
      "a2-know-how-to",
      "a2-long-negation",
      "a2-long-cant",
      "a2-contrast-dont-cant-unable",
      "a2-error-hunt-ability",
    ],
  },
  {
    slug: "must-may-mustnt",
    title: "Must, May, Mustn't and Don't Have To",
    description:
      "Obligation and permission: -아야 / 어야 하다 or 되다 (have to), -아도 / 어도 되다 (may), -(으)면 안 되다 (mustn't), -지 않아도 되다 (don't have to), and the spelling of 되 and 돼.",
    level: "A2",
    intro: [
      `Rules, permissions and obligations in Korean are built from a few endings plus 되다 ('to be OK, to work'). The trap for English speakers is that 'mustn't' and 'don't have to' look similar in English but are very different in Korean, as in English if you think about it.`,
    ],
    sections: [
      {
        heading: `Have to: -아야 / 어야 하다 / 되다`,
        body: [
          `Add -아야 or -어야 (same ㅏ / ㅗ rule; 하다 → 해야) and then 하다 or 되다: 가야 해요 = 가야 돼요 (I have to go). 되다 is more common in speech; 하다 is more neutral and is the written choice. Past: 가야 했어요 (I had to go).`,
        ],
        examples: [
          { ko: "내일 일찍 일어나야 돼요.", en: "I have to get up early tomorrow." },
          { ko: "비자를 연장해야 해요.", en: "I need to extend my visa." },
          { ko: "어제는 야근해야 했어요.", en: "I had to work late yesterday." },
        ],
      },
      {
        heading: `May: -아도 / 어도 되다, and mustn't: -(으)면 안 되다`,
        body: [
          `-아도 / 어도 되다 asks or gives permission: 여기 앉아도 돼요? (may I sit here?) Answers: 네, 돼요 / 네, 앉으세요 (yes) or 아니요, 안 돼요 (no). -(으)면 안 되다 means 'must not': 여기서 담배를 피우면 안 돼요 (you mustn't smoke here). Literally: 'if you smoke here, it's not OK'.`,
        ],
        examples: [
          { ko: "창문 좀 열어도 돼요?", en: "Is it OK if I open the window?" },
          { ko: "사진 찍어도 돼요? 네, 찍으세요.", en: "Can I take photos? Yes, go ahead." },
          { ko: "박물관에서 음식을 먹으면 안 돼요.", en: "You mustn't eat in the museum." },
          { ko: "늦으면 안 돼요!", en: "Don't be late!" },
        ],
      },
      {
        heading: `Don't have to: -지 않아도 되다`,
        body: [
          `To say something isn't necessary, use -지 않아도 되다 or, in speech, 안 -아도 되다: 오지 않아도 돼요 = 안 와도 돼요 (you don't have to come). Compare: 오면 안 돼요 means 'you mustn't come'.`,
        ],
        table: {
          headers: ["Meaning", "Korean", "Example"],
          rows: [
            ["have to", "-아야 하다 / 되다", "가야 돼요"],
            ["may, it's OK to", "-아도 되다", "가도 돼요"],
            ["mustn't", "-(으)면 안 되다", "가면 안 돼요"],
            ["don't have to", "-지 않아도 되다 / 안 -아도 되다", "안 가도 돼요"],
          ],
        },
        examples: [
          { ko: "내일은 회사에 안 가도 돼요.", en: "I don't have to go to work tomorrow." },
          { ko: "예약하지 않아도 돼요.", en: "You don't need a reservation." },
        ],
      },
      {
        heading: `되 or 돼?`,
        body: [
          `돼 is the contraction of 되어. So write 돼 wherever 되어 could stand: 돼요, 됐어요, 돼서, 돼도. Write 되 where the stem 되- takes an ending starting with a consonant or 으: 되고, 되면, 되지만, 되세요, 됩니다. A quick test: swap in 하 / 해. If 해 fits (해요, 했어요, 해서), write 돼; if 하 fits (하고, 하면, 하세요), write 되.`,
        ],
        table: {
          headers: ["해 fits → 돼", "하 fits → 되"],
          rows: [
            ["돼요 (해요)", "되고 (하고)"],
            ["됐어요 (했어요)", "되면 (하면)"],
            ["돼서 (해서)", "되세요 (하세요)"],
            ["안 돼요 (안 해요)", "됩니다 (합니다)"],
          ],
        },
        examples: [
          { ko: "이제 가도 돼요?", en: "Can I go now?" },
          { ko: "의사가 되고 싶어요.", en: "I want to become a doctor." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "가야 되요.",
        right: "가야 돼요.",
        why: `되 + 어요 = 돼요. 되요 is always wrong.`,
      },
      {
        wrong: "내일은 회사에 오면 안 돼요.",
        right: "내일은 회사에 안 와도 돼요.",
        why: `To say 'you don't have to come in tomorrow': -(으)면 안 되다 is 'mustn't'. 'Don't have to' is -지 않아도 되다 / 안 -아도 되다.`,
      },
      {
        wrong: "여기서 사진 찍으면 돼요?",
        right: "여기서 사진 찍어도 돼요?",
        why: `Asking permission is -아 / 어도 되다. -(으)면 되다 means 'all you have to do is'.`,
      },
      {
        wrong: "가야해요",
        right: "가야 해요",
        why: `하다 / 되다 is a separate word after -아야: space it.`,
      },
    ],
    faqs: [
      {
        q: `Is -아야 되다 informal?`,
        a: `It's very common in polite speech and fine with almost anyone. In formal writing and announcements, -아야 하다 / -아야 합니다 is preferred.`,
      },
      {
        q: `What does 안 돼! mean on its own?`,
        a: `'No! / You can't! / That's not allowed!' — a very common exclamation. 돼요? on its own means 'Is that OK? / Does it work?'.`,
      },
    ],
    related: ["conditionals-myeon", "can-cant-and-long-negation", "polite-requests"],
    lessons: [
      "a2-must",
      "a2-may-i",
      "a2-mustnt",
      "a2-dont-have-to",
      "a2-spelling-become-forms",
      "a2-contrast-mustnt-dont-have-to",
      "a2-error-hunt-rules",
    ],
  },
  {
    slug: "irregular-verbs-1",
    title: "Irregular Verbs, Part 1: ㅂ, ㄷ and ㅅ",
    description:
      "Three irregular classes whose final consonant changes before a vowel: ㅂ → 우 (더워요, 도와요), ㄷ → ㄹ (들어요, 걸어요) and ㅅ dropped (나아요, 지어요), with the regular verbs that look the same.",
    level: "A2",
    intro: [
      `Korean irregular verbs are irregular in a regular way. Each class changes its stem in the same way, and only before endings that start with a vowel (-아요, -았어요, -아서, -(으)니까, -(으)면, -(으)ㄹ 수 있다). Before a consonant (-고, -지만, -습니다, -는) they look regular. The catch is that some verbs with the same final consonant are perfectly regular, so you learn each verb with its 요 form.`,
    ],
    sections: [
      {
        heading: `ㅂ irregular: ㅂ becomes 우`,
        body: [
          `Most adjectives ending in ㅂ, and a few verbs, change ㅂ to 우 before a vowel, which then contracts: 덥다 → 더워요, 춥다 → 추워요, 쉽다 → 쉬워요, 어렵다 → 어려워요, 맵다 → 매워요, 가깝다 → 가까워요, 무겁다 → 무거워요, 고맙다 → 고마워요. Before -(으) endings, 우 replaces ㅂ + 으: 더우면, 추우니까, 매운.`,
          `Two verbs take 오 instead: 돕다 → 도와요 and 곱다 → 고와요. And several common ㅂ verbs are regular: 입다 → 입어요, 좁다 → 좁아요, 잡다 → 잡아요, 씹다 → 씹어요.`,
        ],
        table: {
          headers: ["Dictionary", "-아 / 어요", "-(으)면", "-고"],
          rows: [
            ["덥다 (hot)", "더워요", "더우면", "덥고"],
            ["어렵다 (difficult)", "어려워요", "어려우면", "어렵고"],
            ["돕다 (help)", "도와요", "도우면", "돕고"],
            ["입다 (wear) regular", "입어요", "입으면", "입고"],
            ["좁다 (narrow) regular", "좁아요", "좁으면", "좁고"],
          ],
        },
        examples: [
          { ko: "오늘 너무 더워요.", en: "It's so hot today." },
          { ko: "가방이 무거우면 제가 들어 드릴게요.", en: "If your bag is heavy, I'll carry it for you." },
          { ko: "친구가 이사를 도와줬어요.", en: "A friend helped me move." },
          { ko: "코트를 입어요.", en: "I'm putting my coat on." },
        ],
      },
      {
        heading: `ㄷ irregular: ㄷ becomes ㄹ`,
        body: [
          `A few common verbs change ㄷ to ㄹ before a vowel: 듣다 → 들어요 (listen), 걷다 → 걸어요 (walk), 묻다 → 물어요 (ask), 싣다 → 실어요 (load). Before a consonant they keep ㄷ: 듣고, 걷지만, 묻습니다.`,
          `Other ㄷ verbs are regular: 받다 → 받아요, 닫다 → 닫아요, 믿다 → 믿어요, 얻다 → 얻어요, and 묻다 meaning 'bury' → 묻어요.`,
        ],
        examples: [
          { ko: "매일 아침 라디오를 들어요.", en: "I listen to the radio every morning." },
          { ko: "회사까지 걸어서 가요.", en: "I walk to work." },
          { ko: "길을 물어봐도 돼요?", en: "Could I ask you for directions?" },
          { ko: "문 좀 닫아 주세요.", en: "Please close the door." },
        ],
      },
      {
        heading: `ㅅ irregular: ㅅ drops, with no contraction`,
        body: [
          `A small group drops ㅅ before a vowel and does not contract: 낫다 → 나아요 (get better), 짓다 → 지어요 (build), 붓다 → 부어요 (swell; pour), 젓다 → 저어요 (stir). Note 나아요, not *나요. Before a consonant the ㅅ stays: 낫고, 짓습니다.`,
          `Regular ㅅ verbs keep it: 웃다 → 웃어요, 씻다 → 씻어요, 벗다 → 벗어요.`,
        ],
        examples: [
          { ko: "감기가 다 나았어요.", en: "My cold is completely better." },
          { ko: "여기에 새 아파트를 지어요.", en: "They're building new flats here." },
          { ko: "손을 씻으세요.", en: "Please wash your hands." },
          { ko: "빨리 나으세요.", en: "Get well soon." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "더웁어요",
        right: "더워요",
        why: `ㅂ becomes 우 and contracts with -어요.`,
      },
      {
        wrong: "음악을 듣어요.",
        right: "음악을 들어요.",
        why: `듣다 is a ㄷ irregular: 들어요, 들었어요, 들으면.`,
      },
      {
        wrong: "옷을 이워요.",
        right: "옷을 입어요.",
        why: `입다 is regular, despite the ㅂ.`,
      },
      {
        wrong: "감기가 나요.",
        right: "감기가 나아요.",
        why: `ㅅ irregulars drop ㅅ but don't contract: 나아요.`,
      },
      {
        wrong: "선물을 받어요.",
        right: "선물을 받아요.",
        why: `받다 is regular, and its stem vowel ㅏ takes -아요.`,
      },
    ],
    faqs: [
      {
        q: `How can I tell which ㅂ verbs are irregular?`,
        a: `A strong tendency: ㅂ adjectives (덥다, 쉽다, 가깝다) are almost all irregular; ㅂ action verbs (입다, 잡다, 씹다) are mostly regular, with 돕다 and 굽다 (grill) as common exceptions. Learn each with its 요 form.`,
      },
      {
        q: `Why is it 도와요 and not 도워요?`,
        a: `Historically, the ㅂ became a sound that turned into 오 after ㅗ in one-syllable stems. Only 돕다 and 곱다 keep it today.`,
      },
    ],
    related: ["irregular-verbs-2", "descriptive-verbs", "polite-present-haeyo"],
    lessons: [
      "a1-b-irregular-preview",
      "a2-irregular-b-1",
      "a2-irregular-b-2",
      "a2-drill-irregular-b",
      "a2-irregular-d",
      "a2-irregular-s",
      "a2-drill-irregular-d-s",
      "a2-contrast-regular-irregular-1",
      "a2-error-hunt-irregular-1",
      "a2-transform-irregular-endings-1",
    ],
  },
  {
    slug: "irregular-verbs-2",
    title: "Irregular Verbs, Part 2: 르, ㄹ, ㅎ and 으",
    description:
      "The other irregular classes: 르 verbs double their ㄹ (몰라요, 불러요), ㄹ stems drop ㄹ before ㄴ ㅂ ㅅ and take no 으 (사세요, 삽니다, 사는), ㅎ adjectives lose ㅎ (빨개요, 어때요), and the 으 drop (바빠요, 써요).",
    level: "A2",
    intro: [
      `These four classes complete the picture. Two of them (르 and ㅎ) are true irregulars; the other two (ㄹ stems and 으 stems) are regular patterns that every verb of the shape follows, but they change the form enough that learners treat them as irregular too.`,
    ],
    sections: [
      {
        heading: `르 irregular`,
        body: [
          `Stems ending in 르 drop the ㅡ and add an extra ㄹ before -아 / -어: 모르다 → 몰라요, 부르다 → 불러요, 빠르다 → 빨라요, 다르다 → 달라요, 고르다 → 골라요, 자르다 → 잘라요, 마르다 → 말라요, 서두르다 → 서둘러요. The vowel before 르 picks -라 or -러 as usual.`,
          `Before other endings, 르 is regular: 모르고, 모르면, 모르는. Exception: 따르다 (follow; pour) and 치르다 just drop ㅡ: 따라요, 치러요.`,
        ],
        examples: [
          { ko: "잘 모르겠어요.", en: "I'm not sure." },
          { ko: "그 노래 불러 주세요.", en: "Please sing that song." },
          { ko: "KTX가 버스보다 훨씬 빨라요.", en: "The KTX is much faster than the bus." },
          { ko: "서울하고 부산은 말투가 달라요.", en: "People in Seoul and Busan speak differently." },
        ],
      },
      {
        heading: `ㄹ stems`,
        body: [
          `Stems ending in ㄹ (살다, 만들다, 알다, 열다, 놀다, 팔다, 길다, 멀다) follow two rules. First, the ㄹ drops before an ending starting with ㄴ, ㅂ or ㅅ: 사세요, 삽니다, 사는, 사니까, 만드세요, 아세요. Second, they never take the extra 으: 살면 (not *살으면), 만들 수 있어요, 만들러.`,
          `Before -아 / -어 and -고, they are regular: 살아요, 만들어요, 살고. Because 살다 drops ㄹ, some forms look like 사다 (buy): 사는 곳 is 'the place where I live', 사는 것 can be either.`,
        ],
        table: {
          headers: ["Ending", "살다 (live)", "만들다 (make)", "Rule"],
          rows: [
            ["-아 / 어요", "살아요", "만들어요", "regular"],
            ["-(으)세요", "사세요", "만드세요", "ㄹ drops before ㅅ"],
            ["-ㅂ니다", "삽니다", "만듭니다", "ㄹ drops before ㅂ"],
            ["-는", "사는", "만드는", "ㄹ drops before ㄴ"],
            ["-(으)니까", "사니까", "만드니까", "drops before ㄴ"],
            ["-(으)면", "살면", "만들면", "no 으"],
            ["-(으)ㄹ 거예요", "살 거예요", "만들 거예요", "no extra ㄹ"],
          ],
        },
        examples: [
          { ko: "어디 사세요?", en: "Where do you live?" },
          { ko: "제가 만든 케이크예요.", en: "It's a cake I made." },
          { ko: "그 사람 아세요?", en: "Do you know him?" },
          { ko: "회사가 집에서 머니까 일찍 나가요.", en: "My office is far from home, so I leave early." },
        ],
      },
      {
        heading: `ㅎ irregular`,
        body: [
          `Colour and 'this / that way' adjectives ending in ㅎ (빨갛다, 노랗다, 파랗다, 하얗다, 까맣다, 그렇다, 이렇다, 저렇다, 어떻다) drop ㅎ. Before -아 / -어 the vowel becomes ㅐ: 빨갛다 → 빨개요, 노랗다 → 노래요, 그렇다 → 그래요, 어떻다 → 어때요; 하얗다 → 하얘요. Before -(으) endings, ㅎ and 으 both disappear: 빨간, 빨가면, 그런, 어떤.`,
          `좋다, 놓다, 넣다, 많다, 괜찮다 and 싫다 are regular: 좋아요, 좋은.`,
        ],
        examples: [
          { ko: "단풍이 정말 빨개요.", en: "The autumn leaves are really red." },
          { ko: "빨간 가방 있어요?", en: "Do you have a red bag?" },
          { ko: "그래요? 몰랐어요.", en: "Really? I didn't know." },
          { ko: "날씨 어때요?", en: "How's the weather?" },
        ],
      },
      {
        heading: `The 으 drop, reviewed`,
        body: [
          `Stems ending in ㅡ drop it before -아 / -어 (바쁘다 → 바빠요, 예쁘다 → 예뻐요, 크다 → 커요, 쓰다 → 써요, 끄다 → 꺼요, 기쁘다 → 기뻐요, 슬프다 → 슬퍼요). This is the pattern behind 르 verbs too, so don't confuse them: 르 adds an ㄹ (몰라요), 으 does not (바빠요).`,
        ],
        examples: [
          { ko: "불 좀 꺼 주세요.", en: "Could you turn off the light?" },
          { ko: "이름을 여기에 써 주세요.", en: "Please write your name here." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "몰르어요",
        right: "몰라요",
        why: `르 verbs drop ㅡ and double the ㄹ: 몰라요.`,
      },
      {
        wrong: "어디 살으세요?",
        right: "어디 사세요?",
        why: `ㄹ stems drop ㄹ before ㅅ and never take 으.`,
      },
      {
        wrong: "빨갛은 차",
        right: "빨간 차",
        why: `ㅎ adjectives drop ㅎ and 으 before the modifier: 빨간, 하얀, 그런.`,
      },
      {
        wrong: "만들으면",
        right: "만들면",
        why: `No 으 after an ㄹ stem.`,
      },
    ],
    faqs: [
      {
        q: `Is 들다 a ㄷ verb or an ㄹ verb?`,
        a: `들다 (hold, carry; enter) is an ㄹ stem: 들어요, 드세요, 드는. 듣다 (listen) is the ㄷ irregular, and in the 요 form both are 들어요: context tells you which.`,
      },
      {
        q: `Why is it 하얘요 and not 하애요?`,
        a: `하얗다 has ㅑ, and ㅑ + ㅎ-drop becomes ㅒ. Among the common ㅎ adjectives it is the only one with that vowel.`,
      },
    ],
    related: ["irregular-verbs-1", "noun-modifiers", "descriptive-verbs"],
    lessons: [
      "a2-irregular-double-l",
      "a2-drill-irregular-double-l",
      "a2-irregular-l-stems-1",
      "a2-irregular-l-stems-2",
      "a2-irregular-h",
      "a2-vowel-drop-review",
      "a2-drill-irregular-l-h-vowel-drop",
      "a2-contrast-irregular-classes",
      "a2-error-hunt-irregular-2",
      "a2-transform-irregular-speech-levels",
    ],
  },
  {
    slug: "noun-modifiers",
    title: "Noun Modifiers and Relative Clauses: -(으)ㄴ, -는, -(으)ㄹ",
    description:
      "How Korean puts describing words and whole clauses before a noun: 예쁜 꽃, 먹는 사람, 어제 본 영화, 내일 할 일. Adjectives, verbs in three tenses, 있다 / 없다, nouns with 인, and the irregular forms.",
    level: "A2",
    intro: [
      `English puts relative clauses after the noun: the film that I saw yesterday. Korean puts them before, with no word for who, which or that: 어제 본 영화 (yesterday-saw film). The last verb of the clause takes a modifier ending, and that ending shows the tense. This is one of the most important patterns in Korean, because almost every complex sentence uses it.`,
    ],
    sections: [
      {
        heading: `Adjectives before a noun: -(으)ㄴ`,
        body: [
          `Adjectives take -ㄴ after a vowel (예쁜, 비싼, 큰) and -은 after a consonant (작은, 좋은, 많은). 있다 and 없다 and the words built on them take -는 instead: 맛있는, 재미있는, 맛없는. Nouns take 인: 학생인 친구 (a friend who is a student).`,
          `Irregulars apply: 춥다 → 추운, 맵다 → 매운, 빨갛다 → 빨간, 길다 → 긴, 멀다 → 먼, 다르다 → 다른.`,
        ],
        table: {
          headers: ["Dictionary", "Modifier", "Example"],
          rows: [
            ["예쁘다", "예쁜", "예쁜 꽃"],
            ["작다", "작은", "작은 방"],
            ["맛있다", "맛있는", "맛있는 음식"],
            ["춥다 (ㅂ)", "추운", "추운 날"],
            ["빨갛다 (ㅎ)", "빨간", "빨간 차"],
            ["길다 (ㄹ)", "긴", "긴 머리"],
            ["학생이다", "학생인", "학생인 동생"],
          ],
        },
        examples: [
          { ko: "조용한 카페를 좋아해요.", en: "I like quiet cafés." },
          { ko: "매운 음식 잘 먹어요?", en: "Are you good with spicy food?" },
          { ko: "재미있는 영화 추천해 주세요.", en: "Recommend me a good film." },
          { ko: "저는 긴 머리가 더 좋아요.", en: "I prefer long hair." },
        ],
      },
      {
        heading: `Verbs before a noun: -는, -(으)ㄴ, -(으)ㄹ`,
        body: [
          `Action verbs have three modifier tenses. Present -는: 먹는 사람 (the person who's eating), 제가 사는 곳 (the place where I live). Past -(으)ㄴ: 먹은 음식 (the food I ate), 어제 본 영화. Future or not yet -(으)ㄹ: 먹을 음식 (food to eat), 내일 할 일 (things to do tomorrow). ㄹ stems drop ㄹ before -는 and -ㄴ: 만드는, 만든, 만들.`,
          `The future modifier tenses the next consonant: 갈 데 [갈 떼], 먹을 거 [머글 꺼], 갈 곳 [갈 꼳]. (Before 이, it adds [ㄹ] instead: 할 일 [할릴].)`,
        ],
        table: {
          headers: ["Verb", "Present -는", "Past -(으)ㄴ", "Future -(으)ㄹ"],
          rows: [
            ["보다", "보는", "본", "볼"],
            ["먹다", "먹는 [멍는]", "먹은", "먹을"],
            ["만들다 (ㄹ)", "만드는", "만든", "만들"],
            ["듣다 (ㄷ)", "듣는 [든는]", "들은", "들을"],
            ["돕다 (ㅂ)", "돕는", "도운", "도울"],
          ],
        },
        examples: [
          { ko: "저기 서 있는 사람이 우리 선생님이에요.", en: "The person standing over there is our teacher." },
          { ko: "어제 본 영화 정말 좋았어요.", en: "The film I saw yesterday was really good." },
          { ko: "제가 만든 김치예요. 드셔 보세요.", en: "It's kimchi I made. Try some." },
          { ko: "오늘 할 일이 많아요.", en: "I have a lot to do today." },
          { ko: "주말에 갈 곳을 찾고 있어요.", en: "I'm looking for somewhere to go at the weekend." },
        ],
      },
      {
        heading: `Building relative clauses`,
        body: [
          `Any clause can go before a noun: 제가 어제 명동에서 산 가방 (the bag I bought in Myeongdong yesterday). Inside the clause, the subject takes 이 / 가, not 은 / 는: 친구가 추천한 식당 (the restaurant my friend recommended). The noun after the clause can be anything: a person, a place, a time (제가 태어난 해), or 것 (thing): 제가 좋아하는 것.`,
          `Because Korean has no relative pronoun, the same kind of clause can relate to the noun in different ways: 제가 만난 사람 (the person I met: the noun is the object), 친구를 만난 카페 (the café where I met a friend: the noun is the place), 제가 사는 집 (the house I live in). Context and common sense decide.`,
        ],
        examples: [
          { ko: "친구가 추천한 식당에 갔어요.", en: "I went to the restaurant my friend recommended." },
          { ko: "한국어를 가르치는 친구가 있어요.", en: "I have a friend who teaches Korean." },
          { ko: "제가 제일 좋아하는 음식은 비빔밥이에요.", en: "My favourite food is bibimbap." },
          { ko: "이건 우리가 처음 만난 카페예요.", en: "This is the café where we first met." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "예뻐요 꽃",
        right: "예쁜 꽃",
        why: `Before a noun, adjectives take the modifier ending, not the sentence ending.`,
      },
      {
        wrong: "맛있은 음식",
        right: "맛있는 음식",
        why: `있다 / 없다 and words ending in them take -는.`,
      },
      {
        wrong: "제가 만들은 케이크",
        right: "제가 만든 케이크",
        why: `ㄹ stems drop ㄹ and take -ㄴ: 만든.`,
      },
      {
        wrong: "제가는 좋아하는 노래",
        right: "제가 좋아하는 노래",
        why: `Inside a modifier clause, the subject takes 이 / 가, not 은 / 는 (and never both).`,
      },
      {
        wrong: "추운은 날씨",
        right: "추운 날씨",
        why: `The ㅂ irregular already gives 추운; don't add another ending.`,
      },
    ],
    faqs: [
      {
        q: `What is -던 and -았던?`,
        a: `They are retrospective modifiers for things you remember or that were ongoing in the past: 제가 다니던 학교 (the school I used to go to). They come at the Intermediate level.`,
      },
      {
        q: `Why is 산 both 'bought' and 'lived'?`,
        a: `사다 (buy) → 산 (bought); 살다 (live) → 산 (lived), because ㄹ drops before -ㄴ. Context makes it clear: 어제 산 옷 vs 10년 동안 산 집.`,
      },
    ],
    related: ["time-clauses", "irregular-verbs-2", "nominalisers-gi-geot", "deorago-and-deon"],
    lessons: [
      "a2-modifiers-descriptive-1",
      "a2-modifiers-descriptive-2",
      "a2-drill-adjective-modifiers",
      "a2-modifiers-present-verbs",
      "a2-relative-clauses-1",
      "a2-relative-clauses-2",
      "a2-drill-verb-modifiers",
      "a2-contrast-modifier-predicate",
      "a2-modifiers-past-verbs",
      "a2-modifiers-future",
      "a2-drill-modifier-tenses",
      "a2-contrast-modifier-tenses",
      "a2-spiral-modifiers",
    ],
  },
  {
    slug: "suggestions-and-intentions",
    title: "Shall We? Let's! Suggestions, Offers and Intentions",
    description:
      "-(으)ㄹ까요? (shall we, shall I, I wonder), -(으)ㄹ래요? (do you want to, I'll have), casual -자 and -(으)ㄹ까?, -(으)려고 하다 (intend to, was going to) and -기로 하다 (decide, agree).",
    level: "A2",
    intro: [
      `Making plans with people needs a set of endings English handles with shall, let's, do you want to and I'm planning to. Korean has a dedicated form for each, and they also signal who decides: you, the listener, or both together.`,
    ],
    sections: [
      {
        heading: `-(으)ㄹ까요?: shall we, shall I, I wonder`,
        body: [
          `With 'we' it suggests: 같이 점심 먹을까요? (shall we have lunch together?). Answer 네, 좋아요 or with -아요 / -(으)ㅂ시다: 네, 그래요 / 네, 갑시다. With 'I' it offers: 제가 도와드릴까요? (shall I help you?), 창문 열까요? (shall I open the window?). About a third person or the weather it wonders: 내일 비가 올까요? (do you think it'll rain tomorrow?).`,
          `After a vowel stem: -ㄹ까요 (갈까요); after a consonant: -을까요 (먹을까요); ㄹ stems: 만들까요. The casual form is -(으)ㄹ까? and the casual 'let's' is -자: 같이 가자!, 'let's not' is -지 말자.`,
        ],
        examples: [
          { ko: "주말에 같이 영화 볼까요?", en: "Shall we see a film at the weekend?" },
          { ko: "제가 사진 찍어 드릴까요?", en: "Shall I take a photo for you?" },
          { ko: "그 사람이 올까요?", en: "Do you think he'll come?" },
          { ko: "배고파. 뭐 먹을까? 치킨 먹자!", en: "I'm hungry. What shall we eat? Let's get chicken!" },
        ],
      },
      {
        heading: `-(으)ㄹ래요?: do you want to? / I'll ...`,
        body: [
          `-(으)ㄹ래요 asks what the listener wants, casually and warmly: 커피 마실래요? (do you want a coffee?), 뭐 먹을래요?. As a statement it says what you choose to do: 저는 비빔밥 먹을래요 (I'll have bibimbap). It is for friends and relaxed polite speech; to a senior, -(으)실래요? or -(으)시겠어요? is better.`,
        ],
        examples: [
          { ko: "이따가 같이 산책할래요?", en: "Do you want to go for a walk later?" },
          { ko: "저는 그냥 집에 있을래요.", en: "I think I'll just stay home." },
          { ko: "뭐 드실래요?", en: "What would you like?" },
        ],
      },
      {
        heading: `Intending and deciding: -(으)려고 하다 and -기로 하다`,
        body: [
          `-(으)려고 하다 means 'intend to, plan to, be about to': 다음 달에 이사하려고 해요 (I'm planning to move next month). In the past it often means 'was going to (but didn't)': 전화하려고 했어요 (I was going to call you). In speech it's often shortened: 가려고요.`,
          `-기로 하다 means 'decide to' or 'agree to' (with someone): 내년에 한국에 가기로 했어요 (I've decided to go to Korea next year), 우리 일곱 시에 만나기로 했잖아요 (we agreed to meet at seven, remember). It is almost always in the past.`,
        ],
        table: {
          headers: ["Form", "Meaning", "Example"],
          rows: [
            ["-(으)ㄹ 거예요", "will, plan (neutral)", "주말에 쉴 거예요"],
            ["-(으)려고 해요", "intend, am planning to", "주말에 쉬려고 해요"],
            ["-기로 했어요", "have decided / agreed", "주말에 쉬기로 했어요"],
          ],
        },
        examples: [
          { ko: "올해는 운동을 시작하려고 해요.", en: "I'm planning to start exercising this year." },
          { ko: "어제 연락하려고 했는데 잊어버렸어요.", en: "I meant to get in touch yesterday, but I forgot." },
          { ko: "우리 결혼하기로 했어요.", en: "We've decided to get married." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "할머니, 제가 도와줄까요?",
        right: "할머니, 제가 도와드릴까요?",
        why: `Offering a favour to someone senior uses humble 드리다.`,
        register: true,
      },
      {
        wrong: "사장님, 같이 먹을래요?",
        right: "사장님, 같이 드실래요?",
        why: `-(으)ㄹ래요 is casual-polite. With a senior, add the honorific: 드실래요?, or use 드시겠어요?.`,
        register: true,
      },
      {
        wrong: "만들을까요?",
        right: "만들까요?",
        why: `ㄹ stems take no 으.`,
      },
      {
        wrong: "내년에 한국에 가기로 해요.",
        right: "내년에 한국에 가기로 했어요.",
        why: `To report a decision already made, -기로 하다 goes in the past. 가기로 해요 is not wrong, but it means 'let's agree to go'.`,
        register: true,
      },
    ],
    faqs: [
      {
        q: `What's the difference between 갈까요? and 갈래요??`,
        a: `갈까요? proposes or asks for an opinion ('shall we go?'); 갈래요? asks about the listener's wish ('do you want to go?'). In practice both work as invitations.`,
      },
      {
        q: `Is -(으)려고 the same as -(으)려고 하다?`,
        a: `-(으)려고 on its own is a connective, 'in order to': 살 빼려고 운동해요. It's taught at the Intermediate level with other purpose endings.`,
      },
    ],
    related: ["wants-and-plans", "casual-speech-banmal", "purpose-endings", "giving-and-favours"],
    lessons: [
      "a2-shall-we",
      "a2-offers-and-wondering",
      "a2-do-you-want-to",
      "a2-lets-casual",
      "a2-planning-to",
      "a2-decided-to",
      "a2-drill-suggestions-plans",
      "a2-contrast-plans",
    ],
  },
  {
    slug: "experience-a-boda",
    title: "Trying and Experience: -아 / 어 보다 and -(으)ㄴ 적이 있다",
    description:
      "-아 / 어 보다 (try doing; have done), -아 / 어 보세요 (recommendations), -(으)ㄴ 적이 있다 / 없다 (have ever / never), and 처음, 벌써, 이미, 아직, 한 번도.",
    level: "A2",
    intro: [
      `Korean expresses 'try' and 'have you ever' with two very common patterns. -아 / 어 보다 literally means 'do and see', and it is how Koreans recommend things, ask for a taste, and talk about having tried something. -(으)ㄴ 적이 있다 means 'there has been an occasion when', the 'have you ever' of Korean.`,
    ],
    sections: [
      {
        heading: `-아 / 어 보다: try, and have done`,
        body: [
          `Add -아 / 어 보다 (same ㅏ / ㅗ rule; 하다 → 해 보다) to an action verb: 먹어 봐요 (try eating it), 입어 봐도 돼요? (can I try it on?). As a recommendation, -아 / 어 보세요 is very common and polite: 한번 가 보세요 (you should go sometime). In the past it means 'have tried, have done': 제주도에 가 봤어요 (I've been to Jeju).`,
          `보다 itself doesn't take -아 / 어 보다 in the 'see' sense: 'I've seen it' is just 봤어요.`,
        ],
        examples: [
          { ko: "이거 한번 먹어 보세요. 맛있어요.", en: "Try this. It's good." },
          { ko: "이 신발 신어 봐도 돼요?", en: "Can I try these shoes on?" },
          { ko: "한복을 입어 봤어요.", en: "I've tried on a hanbok." },
          { ko: "모르면 선생님한테 물어보세요.", en: "If you don't know, ask the teacher." },
        ],
      },
      {
        heading: `-(으)ㄴ 적이 있다 / 없다: have ever, have never`,
        body: [
          `Past modifier + 적 (occasion) + 이 있다 / 없다: 한국에 간 적이 있어요 (I've been to Korea), 그 영화를 본 적이 없어요 (I've never seen that film). It is very often combined with -아 / 어 보다: 가 본 적이 있어요, 먹어 본 적이 없어요. Ask with 있어요?: 김치 먹어 본 적 있어요? (have you ever tried kimchi?)`,
          `It is for experiences, not things you do regularly: 'I've eaten breakfast' is 아침 먹었어요.`,
        ],
        examples: [
          { ko: "번지 점프를 해 본 적이 있어요?", en: "Have you ever bungee jumped?" },
          { ko: "저는 한 번도 지각한 적이 없어요.", en: "I've never once been late." },
          { ko: "어릴 때 일본에 산 적이 있어요.", en: "I lived in Japan once when I was little." },
        ],
      },
      {
        heading: `처음, 벌써, 이미, 아직, 한 번도`,
        body: [
          `처음 (for the first time; at first) and 처음으로: 이번에 처음 와 봤어요. 벌써 means 'already' with surprise (벌써 다 먹었어요?), 이미 is neutral 'already' (이미 알고 있었어요). 아직 + negative past means 'not yet': 아직 안 먹었어요. 한 번도 + negative means 'never once'.`,
          `Spacing matters: 한번 (one word) means 'once, sometime, just try' (한번 해 보세요); 한 번 (two words) means 'one time' as a count (한 번, 두 번).`,
        ],
        examples: [
          { ko: "벌써 열한 시예요? 가야겠어요.", en: "It's already eleven? I'd better go." },
          { ko: "숙제 다 했어요? 아니요, 아직 못 했어요.", en: "Have you finished your homework? No, not yet." },
          { ko: "제주도에 두 번 가 봤어요.", en: "I've been to Jeju twice." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "영화를 봐 봤어요.",
        right: "영화를 봤어요.",
        why: `With 보다 (see), 봤어요 already means 'I've seen it'. 봐 보다 is used only for 'try looking'.`,
        register: true,
      },
      {
        wrong: "한국에 가는 적이 있어요.",
        right: "한국에 간 적이 있어요.",
        why: `적이 있다 takes the past modifier -(으)ㄴ.`,
      },
      {
        wrong: "아직 먹었어요.",
        right: "아직 안 먹었어요.",
        why: `'Not yet' needs a negative with 아직.`,
      },
      {
        wrong: "한 번 해 보세요.",
        right: "한번 해 보세요.",
        why: `'Give it a try' is 한번 (one word). 한 번 counts one time.`,
      },
    ],
    faqs: [
      {
        q: `Is 가 봤어요 the same as 간 적이 있어요?`,
        a: `Very close. 가 봤어요 says you have tried or done it; 간 적이 있어요 stresses there was at least one occasion. 가 본 적이 있어요 combines both and is the most common 'I've been there'.`,
      },
      {
        q: `Why is 물어보다 written as one word?`,
        a: `Some -아 / 어 보다 combinations became single verbs: 물어보다 (ask), 알아보다 (look into), 찾아보다 (look up), 돌아보다 (look back). They are written without a space.`,
      },
    ],
    related: ["past-tense", "noun-modifiers", "suggestions-and-intentions"],
    lessons: [
      "a2-try-it-1",
      "a2-try-it-2",
      "a2-have-you-ever",
      "a2-already-yet-first",
      "a2-drill-experience",
      "a2-contrast-tried-or-ever",
      "a2-error-hunt-experience",
    ],
  },
  {
    slug: "comparisons",
    title: "Comparing: 보다, 제일, 처럼, 만큼, 같다 and 다르다",
    description:
      "More than (보다 더), the most (제일, 가장, 중에서), like (처럼, 같이), as ... as (만큼), same, similar and different (같다, 비슷하다, 다르다 with 와 / 과), and 더 vs 많이.",
    level: "A2",
    intro: [
      `Korean adjectives have no comparative or superlative forms: no -er or -est. Instead you mark what you compare against with a particle (보다, 'than') and optionally add 더 (more) or 제일 (most) in front of the adjective.`,
    ],
    sections: [
      {
        heading: `More than: 보다 (더)`,
        body: [
          `The thing you compare against takes 보다: 서울이 부산보다 커요 (Seoul is bigger than Busan). 더 (more) is optional but common: 부산보다 더 커요. 덜 means 'less': 어제보다 덜 추워요. Much more is 훨씬: 훨씬 비싸요. The order of the two nouns is flexible: 부산보다 서울이 커요 means the same.`,
          `To compare actions, use -는 것보다: 집에서 먹는 것보다 밖에서 먹는 게 더 편해요 (eating out is easier than eating at home).`,
        ],
        examples: [
          { ko: "오늘이 어제보다 더 추워요.", en: "Today is colder than yesterday." },
          { ko: "지하철이 버스보다 훨씬 빨라요.", en: "The subway is much faster than the bus." },
          { ko: "저는 커피보다 차를 더 좋아해요.", en: "I prefer tea to coffee." },
          { ko: "혼자 가는 것보다 같이 가는 게 좋아요.", en: "Going together is better than going alone." },
        ],
      },
      {
        heading: `The most: 제일, 가장, 중에서`,
        body: [
          `제일 (spoken) or 가장 (written, formal) before the adjective or verb makes the superlative: 제일 좋아요, 가장 유명한 곳. 'Among' is 중에서: 과일 중에서 딸기를 제일 좋아해요 (of all fruits, I like strawberries best). 'In the world' is 세상에서, 'in Korea' 한국에서.`,
        ],
        examples: [
          { ko: "가족 중에서 제가 제일 키가 커요.", en: "I'm the tallest in my family." },
          { ko: "한국에서 가장 높은 산은 한라산이에요.", en: "The highest mountain in Korea is Hallasan." },
          { ko: "뭐가 제일 맛있어요?", en: "What's the best thing here?" },
        ],
      },
      {
        heading: `Like and as ... as: 처럼, 같이, 만큼`,
        body: [
          `처럼 and 같이 (attached to the noun) mean 'like': 가수처럼 노래를 잘해요 (she sings like a singer), 아이같이 웃어요. 처럼 is the more common for similes. 만큼 means 'as ... as' (to the same degree): 형만큼 키가 커요 (I'm as tall as my brother). With a negative, it means 'not as ... as': 서울만큼 안 추워요.`,
          `같다 (be the same), 비슷하다 (be similar) and 다르다 (be different) take 와 / 과, 하고 or (이)랑: 제 생각은 민수 씨 생각하고 같아요, 한국 음식은 일본 음식과 달라요.`,
        ],
        examples: [
          { ko: "한국 사람처럼 한국어를 하고 싶어요.", en: "I want to speak Korean like a Korean." },
          { ko: "부산은 서울만큼 춥지 않아요.", en: "Busan isn't as cold as Seoul." },
          { ko: "제 가방은 지은 씨 가방하고 똑같아요.", en: "My bag is exactly the same as Jieun's." },
          { ko: "두 단어는 뜻이 비슷하지만 달라요.", en: "The two words are similar in meaning but different." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "서울이 더 크보다 부산.",
        right: "서울이 부산보다 더 커요.",
        why: `보다 attaches to the thing compared against, and the adjective comes last.`,
      },
      {
        wrong: "제 생각은 민수 씨 생각을 같아요.",
        right: "제 생각은 민수 씨 생각과 같아요.",
        why: `같다 and 다르다 take 와 / 과 (or 하고, (이)랑), not 을 / 를.`,
      },
      {
        wrong: "가장 제일 좋아요.",
        right: "제일 좋아요.",
        why: `제일 and 가장 mean the same; use one.`,
      },
    ],
    faqs: [
      {
        q: `Is 같이 'together' or 'like'?`,
        a: `Both. 같이 alone (친구하고 같이 가요) means 'together'. Attached to a noun (꽃같이 예뻐요) it means 'like'. 처럼 is the safer choice for 'like'.`,
      },
      {
        q: `Can 보다 also mean 'see'?`,
        a: `Yes: 보다 the verb means 'see, watch'. The particle 보다 is attached to a noun (부산보다), so they don't get confused.`,
      },
    ],
    related: ["descriptive-verbs", "nominalisers-gi-geot", "degree-and-extremes"],
    lessons: [
      "a2-bigger-than",
      "a2-superlative",
      "a2-like-as",
      "a2-as-as",
      "a2-same-different",
      "a2-rather-than",
      "a2-drill-comparisons",
      "a2-contrast-compare",
      "a2-error-hunt-comparing",
    ],
  },
  {
    slug: "conditionals-myeon",
    title: "If and Whenever: -(으)면, -(으)려면, -거든 and -(으)면 좋겠다",
    description:
      "-(으)면 (if, whenever), noun + (이)면, 만약에, -(으)면 되다 (all you have to do is), -(으)면 좋겠다 (I wish), -(으)려면 (if you want to) and -거든 (if ..., then do this).",
    level: "A2",
    intro: [
      `-(으)면 is the basic 'if'. It covers real conditions (if it rains), general truths (whenever spring comes) and future 'when' (when you arrive, call me). Several very common set patterns are built on it, and two relatives, -(으)려면 and -거든, add specific meanings.`,
    ],
    sections: [
      {
        heading: `-(으)면`,
        body: [
          `After a vowel or ㄹ stem add -면 (가면, 만들면); after a consonant add -으면 (먹으면, 있으면). Irregulars follow their rules: 추우면, 들으면, 나으면, 모르면. Nouns take 이면 / 면: 학생이면, 주말이면. 만약(에) at the start of the sentence makes the 'if' clearer.`,
          `-(으)면 also means 'when' for a future event: 도착하면 전화하세요 (call me when you arrive). The main clause can be anything: a statement, question, command or suggestion.`,
        ],
        examples: [
          { ko: "비가 오면 집에 있을 거예요.", en: "If it rains, I'll stay home." },
          { ko: "봄이 되면 꽃이 피어요.", en: "When spring comes, the flowers bloom." },
          { ko: "서울역에 도착하면 연락 주세요.", en: "Let me know when you get to Seoul Station." },
          { ko: "만약에 복권에 당첨되면 뭐 할 거예요?", en: "If you won the lottery, what would you do?" },
        ],
      },
      {
        heading: `-(으)면 되다 and -(으)면 좋겠다`,
        body: [
          `-(으)면 되다 means 'all you need to do is, you just have to': 이 버튼을 누르면 돼요 (just press this button), 몇 번 버스 타면 돼요? (which bus should I take?). -(으)면 안 되다, its negative cousin, means 'mustn't'.`,
          `-(으)면 좋겠다 means 'I wish, it would be nice if', and is a soft way to express a hope or request: 주말에 날씨가 좋으면 좋겠어요, 빨리 나았으면 좋겠어요 (I hope you get better soon; the past -았으면 makes the wish stronger).`,
        ],
        examples: [
          { ko: "여기에 이름만 쓰시면 돼요.", en: "You just need to write your name here." },
          { ko: "시청역에서 2호선으로 갈아타면 돼요.", en: "You just change to Line 2 at City Hall." },
          { ko: "시험에 합격하면 좋겠어요.", en: "I hope I pass the exam." },
          { ko: "같이 갔으면 좋겠어요.", en: "I'd really like it if you came along." },
        ],
      },
      {
        heading: `-(으)려면 and -거든`,
        body: [
          `-(으)려면 means 'if you want to, if you intend to': 명동에 가려면 4호선을 타세요 (to get to Myeongdong, take Line 4). The main clause gives the condition for achieving it, often -아야 하다 or a command.`,
          `-거든 means 'if (that turns out to be the case)', and its main clause must be a command, suggestion, promise or intention: 도착하거든 전화해 (call me if you get there), 시간 있거든 같이 가자. It is a bit more spoken and conditional than -(으)면.`,
        ],
        examples: [
          { ko: "한국어를 잘하려면 매일 연습해야 돼요.", en: "If you want to be good at Korean, you have to practise every day." },
          { ko: "표를 사려면 어디로 가야 해요?", en: "Where do I go to buy a ticket?" },
          { ko: "모르는 게 있거든 언제든지 물어보세요.", en: "If there's anything you don't know, ask any time." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "만들으면",
        right: "만들면",
        why: `ㄹ stems take -면, no 으.`,
      },
      {
        wrong: "춥으면",
        right: "추우면",
        why: `춥다 is a ㅂ irregular: 추우면, 추워요.`,
      },
      {
        wrong: "비가 오거든 길이 막혀요.",
        right: "비가 오면 길이 막혀요.",
        why: `-거든 needs a command, suggestion or intention after it. For a general fact, use -(으)면.`,
      },
    ],
    faqs: [
      {
        q: `How do I say 'if I were you' or 'if I had known'?`,
        a: `Unreal conditions use -다면 and -았더라면: 내가 너라면 (if I were you), 알았더라면 (if I had known). They are taught at the Intermediate and Upper-intermediate levels.`,
      },
      {
        q: `Is -(으)면 the same as -(으)ㄹ 때?`,
        a: `-(으)면 is conditional (if, whenever); -(으)ㄹ 때 is the time at which something happens. 한국에 가면 연락할게요 (I'll get in touch if / when I go to Korea); 한국에 갈 때 연락할게요 (I'll get in touch at the time I'm going).`,
      },
    ],
    related: ["must-may-mustnt", "time-clauses", "hypotheticals-damyeon"],
    lessons: [
      "a2-if-clauses-1",
      "a2-if-clauses-2",
      "a2-thats-all-and-i-wish",
      "a2-if-you-want-to",
      "a2-if-then-do-this",
      "a2-drill-conditionals",
      "a2-contrast-if-when-if-you-want",
      "a2-error-hunt-conditionals",
    ],
  },
  {
    slug: "honorifics-si",
    title: "Honorifics: -(으)시-, 께서 and the Special Honorific Words",
    description:
      "How Korean shows respect to the person you're talking about: the honorific -(으)시- in every tense, 께서 and 께, the special verbs (계시다, 드시다, 주무시다, 말씀하시다, 돌아가시다) and nouns (연세, 성함, 댁, 생신), and why you never honour yourself.",
    level: "A2",
    intro: [
      `Korean politeness has two separate layers. The speech level (합니다, 해요, 반말) is about the listener. Honorifics are about the subject of the sentence: when the person doing or being something deserves respect (a parent, a teacher, a customer, an older person), you raise them with -(으)시- and with special vocabulary. 할머니가 주무세요 is about grandma, even if you are talking to your little brother.`,
    ],
    sections: [
      {
        heading: `-(으)시- in every form`,
        body: [
          `-시- goes after a vowel or ㄹ stem (ㄹ drops: 사시다, 만드시다), -으시- after a consonant (읽으시다). Then the ending is added. In the 해요 present it becomes -(으)세요; in the past -(으)셨어요; the future -(으)실 거예요; formal -(으)십니다 / -(으)셨습니다; modifiers -(으)시는 / -(으)신.`,
          `Irregulars apply first: 듣다 → 들으세요, 돕다 → 도우세요, 낫다 → 나으세요, 모르다 → 모르세요, 알다 → 아세요.`,
        ],
        table: {
          headers: ["", "가다", "읽다", "살다 (ㄹ)"],
          rows: [
            ["present (해요)", "가세요", "읽으세요", "사세요"],
            ["past", "가셨어요", "읽으셨어요", "사셨어요"],
            ["future", "가실 거예요", "읽으실 거예요", "사실 거예요"],
            ["formal", "가십니다", "읽으십니다", "사십니다"],
            ["modifier", "가시는 / 가신", "읽으시는 / 읽으신", "사시는 / 사신"],
          ],
        },
        examples: [
          { ko: "아버지는 은행에서 일하세요.", en: "My father works at a bank." },
          { ko: "선생님이 벌써 가셨어요.", en: "The teacher has already left." },
          { ko: "사장님은 내일 출장 가실 거예요.", en: "The boss is going on a business trip tomorrow." },
          { ko: "할머니가 부산에 사세요.", en: "My grandmother lives in Busan." },
        ],
      },
      {
        heading: `Honorific particles and special verbs`,
        body: [
          `The subject particle becomes 께서 (께서는 as topic): 할아버지께서 오셨어요. 'To' becomes 께: 선생님께 드렸어요. These are common in formal speech and writing; in everyday talk many people just use -시- with 이 / 가.`,
          `Some verbs have their own honorific form instead of -시-. 있다 meaning 'be somewhere' becomes 계시다, but 있다 meaning 'have' becomes 있으시다: 사장님이 사무실에 계세요 vs 사장님이 시간이 있으세요. 먹다 and 마시다 become 드시다 (or 잡수시다), 자다 becomes 주무시다, 말하다 becomes 말씀하시다, 죽다 becomes 돌아가시다, 아프다 becomes 편찮으시다 (for illness).`,
        ],
        table: {
          headers: ["Plain", "Honorific", "Example"],
          rows: [
            ["있다 (be there)", "계시다", "어머니는 집에 계세요."],
            ["있다 (have)", "있으시다", "질문 있으세요?"],
            ["먹다 / 마시다", "드시다", "아침 드셨어요?"],
            ["자다", "주무시다", "안녕히 주무세요."],
            ["말하다", "말씀하시다", "천천히 말씀해 주세요."],
            ["아프다 (ill)", "편찮으시다", "할머니가 편찮으세요."],
            ["죽다", "돌아가시다", "할아버지는 작년에 돌아가셨어요."],
          ],
        },
        examples: [
          { ko: "할아버지께서 신문을 읽고 계세요.", en: "Grandpa is reading the newspaper." },
          { ko: "부모님은 잘 계세요?", en: "Are your parents well?" },
          { ko: "맛있게 드세요.", en: "Enjoy your meal." },
        ],
      },
      {
        heading: `Honorific nouns, and never yourself`,
        body: [
          `A few nouns have honorific versions used about respected people: 나이 → 연세 (age), 이름 → 성함 (name), 집 → 댁 (home), 생일 → 생신 (birthday), 말 → 말씀 (words), 사람 → 분 (person). 성함이 어떻게 되세요? is the polite 'what is your name?'.`,
          `Never use -시- or honorific words about yourself: 저는 학생이에요, not *저는 학생이세요; 제 이름은 ..., not *제 성함은. When you describe your own actions toward a senior, you use humble words instead (드리다, 여쭤보다, 뵙다), taught with favours and at the Intermediate level.`,
        ],
        examples: [
          { ko: "실례지만, 연세가 어떻게 되세요?", en: "Excuse me, may I ask how old you are?" },
          { ko: "성함이 어떻게 되세요?", en: "May I have your name?" },
          { ko: "다음 주가 어머니 생신이에요.", en: "Next week is my mother's birthday." },
          { ko: "저분이 우리 사장님이세요.", en: "That's our company president." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "저는 회사원이세요.",
        right: "저는 회사원이에요.",
        why: `Never honour yourself. -시- is for other people you respect.`,
      },
      {
        wrong: "선생님이 교실에 있으세요.",
        right: "선생님이 교실에 계세요.",
        why: `For 'be somewhere', the honorific is 계시다. 있으시다 is 'have'.`,
      },
      {
        wrong: "할머니가 자세요.",
        right: "할머니가 주무세요.",
        why: `자다 has a special honorific verb: 주무시다.`,
      },
      {
        wrong: "커피 나오셨습니다.",
        right: "커피 나왔습니다.",
        why: `Things don't get honorifics. Coffee can't be honoured, however polite the café wants to be.`,
      },
      {
        wrong: "만들으세요",
        right: "만드세요",
        why: `ㄹ stems drop ㄹ before -시- and take no 으.`,
      },
    ],
    faqs: [
      {
        q: `Do I use honorifics when talking to a friend about my teacher?`,
        a: `Yes. The speech level matches the listener (반말 to your friend), but -시- matches the subject: 선생님이 오늘 안 오셨어 (the teacher didn't come today).`,
      },
      {
        q: `Is 드세요 always the honorific of 먹다?`,
        a: `드시다 is the honorific of both 먹다 and 마시다. Separately, 들다 (take, have) also gives 드세요 as a polite command, and in practice they overlap: 많이 드세요.`,
      },
    ],
    related: ["polite-requests", "giving-and-favours", "formal-speech-hamnida", "workplace-honorifics"],
    lessons: [
      "a1-honorific-first-look",
      "a2-honorific-present",
      "a2-honorific-tenses",
      "a2-drill-honorific-everywhere",
      "a2-honorific-particles",
      "a2-honorific-verbs",
      "a2-honorific-nouns",
      "a2-contrast-special-honorific-verbs",
      "a2-error-hunt-honorifics",
      "a2-transform-friend-to-grandparent",
    ],
  },
  {
    slug: "giving-and-favours",
    title: "Giving, Receiving and Favours: 주다, 드리다, -아 / 어 주다 and -(으)ㄹ게요",
    description:
      "주다 and humble 드리다, honorific 주시다, 받다, doing things for people with -아 / 어 주다 and -아 / 어 드리다, polite requests with -아 / 어 주시겠어요?, offers with -아 / 어 드릴까요?, promises with -(으)ㄹ게요, and 빌리다 vs 빌려주다.",
    level: "A2",
    intro: [
      `Giving in Korean depends on who gives to whom. Giving to a friend or a junior is 주다; giving to someone senior is the humble 드리다; when a senior gives to you, it's the honorific 주시다. The same three verbs attach to other verbs to say you do something for someone, which is the heart of polite requests and offers.`,
    ],
    sections: [
      {
        heading: `주다, 드리다, 주시다 and 받다`,
        body: [
          `친구한테 선물을 줬어요 (I gave a friend a present). 할머니께 꽃을 드렸어요 (I gave Grandma flowers; humble). 선생님이 책을 주셨어요 (the teacher gave me a book; honorific). 'Receive' is 받다, and 'from' a person is 한테서 / 에게서: 친구한테서 편지를 받았어요.`,
        ],
        table: {
          headers: ["Who gives", "To whom", "Verb", "Example"],
          rows: [
            ["anyone", "an equal or junior", "주다", "동생한테 용돈을 줬어요."],
            ["anyone", "a senior", "드리다", "부모님께 선물을 드렸어요."],
            ["a senior", "anyone", "주시다", "사장님이 보너스를 주셨어요."],
          ],
        },
        examples: [
          { ko: "생일에 친구가 케이크를 줬어요.", en: "A friend gave me a cake for my birthday." },
          { ko: "선생님께 카드를 드렸어요.", en: "I gave my teacher a card." },
          { ko: "할아버지가 용돈을 주셨어요.", en: "Grandpa gave me some pocket money." },
        ],
      },
      {
        heading: `Doing something for someone`,
        body: [
          `-아 / 어 주다 means 'do something for someone': 친구가 길을 가르쳐 줬어요 (a friend showed me the way), 제가 사진 찍어 줄게요 (I'll take your photo). For a senior, use -아 / 어 드리다: 할머니 가방을 들어 드렸어요 (I carried Grandma's bag). 도와주다 (help) and 빌려주다 (lend) are written as one word.`,
          `Requests climb in politeness: -아 / 어 주세요 → -아 / 어 주시겠어요? → -아 / 어 주실 수 있어요?. Offers to a senior use -아 / 어 드릴까요?: 짐 들어 드릴까요? (shall I carry your bags?).`,
        ],
        examples: [
          { ko: "창문 좀 닫아 주시겠어요?", en: "Would you mind closing the window?" },
          { ko: "제가 설명해 드릴게요.", en: "Let me explain it for you." },
          { ko: "뭐 도와드릴까요?", en: "Can I help you with something?" },
          { ko: "우산 좀 빌려줄 수 있어?", en: "Can you lend me an umbrella?" },
        ],
      },
      {
        heading: `-(으)ㄹ게요: I'll do it (a promise)`,
        body: [
          `-(으)ㄹ게요 announces what you will do, as a promise or a decision made with the listener in mind: 제가 할게요 (I'll do it), 내일 전화할게요, 먼저 갈게요 (I'll head off first). Casual: -(으)ㄹ게. It is written with 게 and said with a tense sound: 할게요 [할께요]. It is only for the speaker, never for 'you' or 'he'.`,
          `Compare -(으)ㄹ 거예요, a plan or prediction: 내일 갈 거예요 (I'm going tomorrow: information), 내일 갈게요 (I'll come tomorrow: a commitment to you).`,
        ],
        examples: [
          { ko: "다 먹고 연락할게요.", en: "I'll message you after I eat." },
          { ko: "제가 계산할게요.", en: "I'll get this." },
          { ko: "늦어서 미안해. 다음부터 일찍 올게.", en: "Sorry I'm late. From now on I'll come early." },
        ],
      },
      {
        heading: `빌리다 or 빌려주다?`,
        body: [
          `빌리다 is 'borrow': 친구한테서 책을 빌렸어요. 빌려주다 is 'lend': 친구한테 책을 빌려줬어요. To ask someone to lend you something, use 빌려주세요 (lend it to me), or 빌려도 돼요? (may I borrow it?).`,
        ],
        examples: [
          { ko: "펜 좀 빌려주세요.", en: "Could you lend me a pen?" },
          { ko: "도서관에서 책을 세 권 빌렸어요.", en: "I borrowed three books from the library." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "할께요",
        right: "할게요",
        why: `Written 게, said [께]. Only -(으)ㄹ까요 is written with ㄲ.`,
      },
      {
        wrong: "민수 씨가 할게요.",
        right: "민수 씨가 할 거예요.",
        why: `-(으)ㄹ게요 is a promise by the speaker. For others, use -(으)ㄹ 거예요.`,
      },
      {
        wrong: "펜 좀 빌리세요.",
        right: "펜 좀 빌려주세요.",
        why: `빌리세요 tells the other person to borrow. To ask them to lend, use 빌려주다.`,
      },
      {
        wrong: "할머니한테 선물을 줬어요.",
        right: "할머니께 선물을 드렸어요.",
        why: `Giving to a senior uses humble 드리다 (and 께).`,
        register: true,
      },
    ],
    faqs: [
      {
        q: `Why is 도와주다 one word but 들어 주다 two?`,
        a: `도와주다 and 빌려주다 have become single dictionary verbs. Most other combinations stay two words (가르쳐 주다, 들어 주다, 사 주다), though spacing slips here are very common even among Koreans.`,
      },
      {
        q: `What does 수고하셨습니다 have to do with this?`,
        a: `Nothing grammatically, but it is the set phrase for thanking someone for their work at the end of a job or day. It belongs with the formal set phrases.`,
      },
    ],
    related: ["honorifics-si", "polite-requests", "particles-people-and-direction", "politeness-strategies"],
    lessons: [
      "a2-giving",
      "a2-receiving",
      "a2-doing-a-favour",
      "a2-favour-for-a-senior",
      "a2-ill-do-it",
      "a2-drill-giving-favours",
      "a2-contrast-borrow-give",
      "a2-error-hunt-favours",
    ],
  },
  {
    slug: "attitude-endings",
    title: "Endings with Attitude: -네요, -죠, -군요, -는데요, -거든요, -잖아요",
    description:
      "The sentence endings that add feeling: -네요 (oh, I notice), -죠 (right?), -군요 (I see), -는데요 (soft, leaving something unsaid), -거든요 (you see) and -잖아요 (you know).",
    level: "A2",
    intro: [
      `Much of what makes Korean sound natural lives in the very last syllables. Instead of adding words like 'oh', 'right?', 'you know' and 'well', Korean uses sentence endings. They don't change the facts, but they change the relationship between you, the listener and the information, and Koreans use them constantly.`,
    ],
    sections: [
      {
        heading: `-네요: noticing on the spot`,
        body: [
          `-네요 reacts to something you notice right now, often with mild surprise or admiration: 한국어 잘하시네요! (wow, your Korean is good!), 비가 오네요 (oh, it's raining). It attaches to any stem (ㄹ drops: 머네요) and to nouns as 이네요 / 네요. Past: 많이 컸네요 (you've grown!). Note 좋네요 [존네요].`,
        ],
        examples: [
          { ko: "이 집 김치찌개 진짜 맛있네요.", en: "The kimchi stew here is really good." },
          { ko: "벌써 열 시네요.", en: "Oh, it's already ten." },
          { ko: "사진 잘 찍으셨네요.", en: "You took great photos." },
        ],
      },
      {
        heading: `-죠 and -군요: checking and realising`,
        body: [
          `-지요, almost always shortened to -죠, seeks agreement or checks something: 날씨 좋죠? (lovely weather, isn't it?), 이거 맞죠? (this is right, isn't it?). With a falling tone it agrees or states softly: 그렇죠 (that's right). It also softens a question: 어디 가시죠?`,
          `-군요 says 'I see', realising something you've just learned: 아, 부산 출신이시군요 (ah, so you're from Busan). It sounds a little formal or bookish in speech, where -네요 or 그렇구나 (casual -구나) are more common.`,
        ],
        examples: [
          { ko: "오늘 좀 춥죠?", en: "It's a bit cold today, isn't it?" },
          { ko: "같이 가시죠.", en: "Let's go together. (polite)" },
          { ko: "아, 그래서 늦으셨군요.", en: "Ah, so that's why you were late." },
          { ko: "그렇구나. 몰랐어.", en: "I see. I didn't know." },
        ],
      },
      {
        heading: `-(으)ㄴ / 는데요: soft and open-ended`,
        body: [
          `-는데요 (action verbs, 있다 / 없다, and past -았는데요), -(으)ㄴ데요 (adjectives) and 인데요 (nouns) give background and leave the sentence open, expecting a reaction. It softens refusals and answers: 지금 없는데요 (he's not here at the moment ...), 좀 비싼데요 (it's a bit expensive ...). On the phone, 김민수인데요 introduces yourself.`,
        ],
        examples: [
          { ko: "저 지금 바쁜데요.", en: "I'm a bit busy right now ..." },
          { ko: "여보세요, 박지은인데요. 민수 씨 계세요?", en: "Hello, this is Park Jieun. Is Minsu there?" },
          { ko: "그건 좀 어려울 것 같은데요.", en: "That might be a bit difficult ..." },
        ],
      },
      {
        heading: `-거든요 and -잖아요: you see, you know`,
        body: [
          `-거든요 explains a reason or background the listener didn't know: 저 내일 못 가요. 시험이 있거든요 (I can't go tomorrow. I have an exam, you see). It's also used to start a story: 제가 어제 명동에 갔거든요 ... (so, yesterday I went to Myeongdong ...).`,
          `-잖아요 reminds the listener of something they already know: 제가 말했잖아요 (I told you, didn't I?), 내일 주말이잖아요 (tomorrow's the weekend, you know). It can sound pushy if overused, especially with seniors.`,
        ],
        table: {
          headers: ["Ending", "Feeling", "Example"],
          rows: [
            ["-네요", "I notice now", "예쁘네요!"],
            ["-죠", "right? / let's agree", "예쁘죠?"],
            ["-군요", "I see (just learned)", "그렇군요."],
            ["-는데요", "soft, open, but ...", "좀 비싼데요."],
            ["-거든요", "explaining: you see", "시간이 없거든요."],
            ["-잖아요", "you know (you already know)", "제가 말했잖아요."],
          ],
        },
        examples: [
          { ko: "왜 안 먹어요? 아까 많이 먹었거든요.", en: "Why aren't you eating? I ate a lot earlier, you see." },
          { ko: "우산 가져가세요. 비 온다고 했잖아요.", en: "Take an umbrella. They said it would rain, remember." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "저는 학생이네요.",
        right: "저는 학생이에요.",
        why: `-네요 expresses noticing something new. You don't discover that you're a student.`,
      },
      {
        wrong: "부장님, 제가 말했잖아요.",
        right: "부장님, 제가 지난번에 말씀드렸는데요.",
        why: `-잖아요 can sound like 'as you should know'. With seniors, soften it.`,
        register: true,
      },
      {
        wrong: "왜 늦었어요? 길이 막혔잖아요.",
        right: "왜 늦었어요? 길이 막혔거든요.",
        why: `The listener didn't know about the traffic, so the reason takes -거든요. -잖아요 treats it as something they should already know, which sounds defensive.`,
        register: true,
      },
      {
        wrong: "맛있은데요",
        right: "맛있는데요",
        why: `있다 / 없다 words take -는데요.`,
      },
    ],
    faqs: [
      {
        q: `Is it rude to answer with -는데요?`,
        a: `Not at all: it's one of the politest ways to give unwelcome information. But in some contexts (저는 학생인데요? with a rising tone) it can sound like 'so what?'. Intonation matters.`,
      },
      {
        q: `What's the difference between -네요 and -군요?`,
        a: `Both react to new information. -네요 is for what you perceive directly, right now; -군요 is for what you realise or learn (often from what you've been told). In speech, -네요 is much more common.`,
      },
    ],
    related: ["reasons-because", "background-and-concession", "spoken-korean-contractions-fillers"],
    lessons: [
      "a2-noticing",
      "a2-checking-right",
      "a2-realising",
      "a2-drill-noticing-checking-realising",
      "a2-softening-endings",
      "a2-you-see-and-you-know",
      "a2-contrast-noticing-realising-checking",
      "a2-contrast-answering-why",
      "a2-practice-hearing-attitude",
      "a2-error-hunt-attitude",
    ],
  },
  {
    slug: "guessing-and-seeming",
    title: "Guessing and Seeming: -는 것 같다, -겠-, -아 / 어 보이다",
    description:
      "How to say 'it seems', 'I think', 'it must be' and 'it looks': -는 / -(으)ㄴ / -(으)ㄹ 것 같다 by tense, 것 같아요 to soften your own opinion, -겠- for on-the-spot guesses, -아 / 어 보이다 for appearances, and 아마 and 혹시.",
    level: "A2",
    intro: [
      `Korean speakers hedge a lot. Stating opinions too directly can sound blunt, so 'I think', 'it seems' and 'it looks like' are everywhere, and the most common of all is 것 같아요. Learning to guess and soften naturally will make your Korean sound much more Korean.`,
    ],
    sections: [
      {
        heading: `것 같다 in three tenses`,
        body: [
          `Put a modifier before 것 같다, choosing the tense of what you're guessing about. Present: action verbs -는 것 같아요 (비가 오는 것 같아요, it seems to be raining), adjectives -(으)ㄴ 것 같아요 (바쁜 것 같아요), nouns 인 것 같아요 (학생인 것 같아요). Past: -(으)ㄴ 것 같아요 (비가 온 것 같아요, it seems it rained). Future or a guess about something unseen: -(으)ㄹ 것 같아요 (비가 올 것 같아요, it looks like it'll rain).`,
          `In speech 것 같아요 is said [걷 까타요] and often written as 거 같아요 in texts.`,
        ],
        table: {
          headers: ["", "Action verb (오다)", "Adjective (바쁘다)", "Noun (학생)"],
          rows: [
            ["now", "오는 것 같아요", "바쁜 것 같아요", "학생인 것 같아요"],
            ["past", "온 것 같아요", "바빴던 것 같아요", "학생이었던 것 같아요"],
            ["future / unseen", "올 것 같아요", "바쁠 것 같아요", "학생일 것 같아요"],
          ],
        },
        examples: [
          { ko: "밖에 비가 오는 것 같아요.", en: "It seems to be raining outside." },
          { ko: "민수 씨가 벌써 집에 간 것 같아요.", en: "It looks like Minsu has already gone home." },
          { ko: "이 옷은 좀 작을 것 같아요.", en: "I think these clothes might be a bit small." },
          { ko: "저 사람은 선생님인 것 같아요.", en: "That person seems to be a teacher." },
        ],
      },
      {
        heading: `Softening your own opinion`,
        body: [
          `Koreans use 것 같아요 even about their own feelings and opinions, to sound modest: 이게 더 좋은 것 같아요 (I think this one's better), 배부른 것 같아요 (I think I'm full). It's natural, though teachers sometimes tease students who say 맛있는 것 같아요 about food they're eating right now.`,
        ],
        examples: [
          { ko: "제 생각에는 이 방법이 더 나은 것 같아요.", en: "I think this way is better." },
          { ko: "오늘은 일찍 자야 할 것 같아요.", en: "I think I should go to bed early tonight." },
        ],
      },
      {
        heading: `-겠- and -아 / 어 보이다`,
        body: [
          `-겠- reacts to what you see or hear with an immediate guess or empathy: 맛있겠어요! (that looks delicious!), 힘들겠어요 (that must be hard), 피곤하시겠어요 (you must be tired). Weather forecasts use it too: 내일은 비가 오겠습니다.`,
          `-아 / 어 보이다 with adjectives means 'look, appear': 피곤해 보여요 (you look tired), 맛있어 보여요 (it looks tasty), 젊어 보이세요 (you look young). It describes an appearance; it doesn't work with action verbs.`,
        ],
        examples: [
          { ko: "와, 이 케이크 맛있겠어요.", en: "Wow, this cake looks delicious." },
          { ko: "매일 야근해요? 정말 힘들겠어요.", en: "You work late every day? That must be really hard." },
          { ko: "오늘 기분이 좋아 보여요.", en: "You look happy today." },
        ],
      },
      {
        heading: `아마 and 혹시`,
        body: [
          `아마 (probably) usually goes with -(으)ㄹ 거예요 or -(으)ㄹ 것 같아요: 아마 늦을 거예요 (he'll probably be late). 혹시 (by any chance) softens a question: 혹시 김민수 씨세요? (are you by any chance Kim Minsu?), 혹시 펜 있어요?.`,
        ],
        examples: [
          { ko: "아마 내일은 괜찮을 거예요.", en: "It'll probably be fine tomorrow." },
          { ko: "혹시 이 근처에 약국 있어요?", en: "Is there a pharmacy around here, by any chance?" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "비가 오은 것 같아요.",
        right: "비가 온 것 같아요.",
        why: `The past modifier of 오다 is 온.`,
      },
      {
        wrong: "바쁘는 것 같아요.",
        right: "바쁜 것 같아요.",
        why: `Adjectives take -(으)ㄴ in the present: 바쁜 것 같아요.`,
      },
      {
        wrong: "그 사람이 와 보여요.",
        right: "그 사람이 오는 것 같아요.",
        why: `-아 / 어 보이다 is for adjectives (appearances). For actions, use 것 같다.`,
      },
      {
        wrong: "저는 피곤하겠어요.",
        right: "저는 피곤한 것 같아요.",
        why: `-겠- guesses about others or reacts to what you see. About your own present state, use 것 같다 or just state it.`,
        register: true,
      },
    ],
    faqs: [
      {
        q: `Isn't it strange to say 'it seems' about my own opinion?`,
        a: `In English, a bit; in Korean, it's normal modesty. Overdoing it is a stereotype of young speakers, but using it to soften opinions and refusals is good manners.`,
      },
      {
        q: `Are there other guessing forms?`,
        a: `Yes: -나 보다 and -(으)ㄴ가 보다 (it seems, from evidence), -(으)ㄹ 텐데 (it must be, so ...) and -(으)ㄴ 모양이다 (apparently). They come at the Intermediate and Upper-intermediate levels.`,
      },
    ],
    related: ["noun-modifiers", "attitude-endings", "guessing-na-boda-tende"],
    lessons: [
      "a2-seems-present",
      "a2-seems-past-future",
      "a2-softening-opinions",
      "a2-it-looks",
      "a2-guess-must-be",
      "a2-probably-perhaps",
      "a2-drill-guessing",
      "a2-contrast-guesses",
      "a2-error-hunt-guessing",
    ],
  },
  {
    slug: "nominalisers-gi-geot",
    title: "Turning Verbs into Nouns: -기 and -는 것",
    description:
      "-기 and -는 것 turn a verb into 'doing': 취미는 사진 찍기예요, 요리하는 것을 좋아해요. When to use which, the spoken forms 게, 걸, 건, 거, and the patterns -기 쉽다, -기 시작하다 and -기 때문에.",
    level: "A2",
    intro: [
      `To say 'I like cooking' or 'reading is hard', English uses -ing. Korean has two ways to make a verb into a noun: -기 and -는 것. They overlap a lot, but each has patterns it fits best, and many fixed expressions use one and not the other.`,
    ],
    sections: [
      {
        heading: `-기`,
        body: [
          `Add -기 to a stem: 읽기 (reading), 듣기 (listening), 사진 찍기 (taking photos), 걷기 (walking). It names an activity, which is why it appears in titles, lists, skills and hobbies: 듣기, 말하기, 읽기, 쓰기 are the four language skills, and 제 취미는 요리하기예요.`,
          `Many fixed patterns are built on -기: -기 쉽다 / 어렵다 (easy / hard to do), -기 좋다 / 싫다, -기 편하다 / 불편하다, -기 시작하다 (start doing), -기 전에 (before), -기로 하다 (decide), -기 때문에 (because).`,
        ],
        examples: [
          { ko: "제 취미는 사진 찍기예요.", en: "My hobby is taking photos." },
          { ko: "한국어는 읽기는 쉬운데 듣기가 어려워요.", en: "Reading Korean is easy, but listening is hard." },
          { ko: "이 동네는 살기 좋아요.", en: "This neighbourhood is a nice place to live." },
          { ko: "작년부터 한국어를 배우기 시작했어요.", en: "I started learning Korean last year." },
        ],
      },
      {
        heading: `-는 것 and its spoken forms`,
        body: [
          `-는 것 (for action verbs; -(으)ㄴ 것 for adjectives and past) means 'the act of doing' or 'the fact that': 요리하는 것을 좋아해요 (I like cooking), 한국어로 말하는 것이 어려워요. With 좋아하다 and 싫어하다, -는 것 is the usual choice.`,
          `In speech 것 shortens: 것이 → 게, 것을 → 걸, 것은 → 건, 것 → 거. So 요리하는 걸 좋아해요, 혼자 사는 게 편해요, 그건 아니에요.`,
        ],
        table: {
          headers: ["Written", "Spoken", "Example"],
          rows: [
            ["것이", "게", "운동하는 게 좋아요."],
            ["것을", "걸", "노래하는 걸 좋아해요."],
            ["것은", "건", "이건 제 거예요."],
            ["것", "거", "먹을 거 있어요?"],
          ],
        },
        examples: [
          { ko: "저는 영화 보는 걸 좋아해요.", en: "I like watching films." },
          { ko: "혼자 여행하는 게 생각보다 재미있어요.", en: "Travelling alone is more fun than I thought." },
          { ko: "그 사람이 결혼한 것을 몰랐어요.", en: "I didn't know that he'd got married." },
        ],
      },
      {
        heading: `-기 or -는 것?`,
        body: [
          `Use -기 in fixed patterns (-기 쉽다, -기 시작하다, -기 전에), in lists and titles, and for named activities. Use -는 것 for 'the fact that', with tenses (먹은 것, 먹을 것), and with verbs of liking, knowing and forgetting. When both work (요리하기를 좋아해요 / 요리하는 것을 좋아해요), -는 것 is the safer everyday choice.`,
          `-기 때문에 (because) and noun + 때문에 (because of) are covered in the reasons guide.`,
        ],
        examples: [
          { ko: "규칙: 수업 시간에 핸드폰 보지 않기.", en: "Rule: no looking at phones in class." },
          { ko: "내일 할 것을 메모했어요.", en: "I wrote down what to do tomorrow." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "요리해요를 좋아해요.",
        right: "요리하는 것을 좋아해요.",
        why: `A sentence ending can't take a particle. Make it a noun with -는 것 or -기.`,
      },
      {
        wrong: "책을 읽는 것 시작했어요.",
        right: "책을 읽기 시작했어요.",
        why: `-기 시작하다 is the whole pattern: start doing.`,
      },
      {
        wrong: "운동하는 게를 좋아해요.",
        right: "운동하는 걸 좋아해요.",
        why: `게 already contains the particle 이. 것을 is 걸.`,
      },
    ],
    faqs: [
      {
        q: `What's -(으)ㅁ, as in 삶 and 도움?`,
        a: `A third nominaliser, used in writing, notices and fixed nouns: 삶 (life), 도움 (help), 확인했음 (confirmed). It's taught at the Intermediate level with memo style.`,
      },
      {
        q: `Is 거 always 것?`,
        a: `In speech, yes: 제 거 (mine), 먹을 거 (something to eat), 갈 거예요 (I'll go). In writing, use 것.`,
      },
    ],
    related: ["noun-modifiers", "reasons-because", "notices-and-memo-style"],
    lessons: [
      "a2-verbs-as-nouns",
      "a2-easy-to-do",
      "a2-the-act-of-doing",
      "a2-because-of",
      "a2-drill-nominalising",
      "a2-contrast-two-nominalisers",
      "a2-error-hunt-nominalising",
    ],
  },
  {
    slug: "change-and-becoming",
    title: "Change and Becoming: -아 / 어지다, 되다, -게 되다 and -게",
    description:
      "Getting warmer (따뜻해졌어요), becoming something (의사가 됐어요), ending up doing something (한국에 살게 됐어요), adverbs with -게 (맛있게, 쉽게), and change over time with -아 / 어 가다 / 오다.",
    level: "A2",
    intro: [
      `English uses get and become for every kind of change: it got cold, she became a doctor, I got to know him. Korean has a separate pattern for each: adjectives change with -아 / 어지다, nouns with 되다, and life circumstances with -게 되다.`,
    ],
    sections: [
      {
        heading: `Adjectives that change: -아 / 어지다`,
        body: [
          `Add -아 / 어지다 to an adjective stem (same ㅏ / ㅗ rule; 하다 → 해지다): 따뜻하다 → 따뜻해지다 (get warm), 예쁘다 → 예뻐지다, 춥다 → 추워지다, 빨갛다 → 빨개지다. It's written as one word. Past: 따뜻해졌어요 (it's got warm). Progressive: 점점 추워지고 있어요 (it's getting colder and colder).`,
        ],
        examples: [
          { ko: "날씨가 많이 따뜻해졌어요.", en: "The weather's got a lot warmer." },
          { ko: "한국어가 점점 쉬워져요.", en: "Korean is gradually getting easier." },
          { ko: "얼굴이 빨개졌어요.", en: "Her face went red." },
          { ko: "요즘 채소가 많이 비싸졌어요.", en: "Vegetables have got a lot more expensive lately." },
        ],
      },
      {
        heading: `Becoming something: noun + 이 / 가 되다`,
        body: [
          `To become a noun, use 이 / 가 되다: 의사가 됐어요 (she became a doctor), 봄이 됐어요 (spring has come), 어른이 되면 (when I grow up). Note the particle: 이 / 가, not 을 / 를. 되다 also means 'to work, be done': 다 됐어요 (it's done), 돼요? (does it work?).`,
        ],
        examples: [
          { ko: "제 동생은 작년에 선생님이 됐어요.", en: "My younger sibling became a teacher last year." },
          { ko: "벌써 12월이 됐어요.", en: "It's already December." },
          { ko: "커피 다 됐습니다.", en: "Your coffee is ready." },
        ],
      },
      {
        heading: `Ending up: -게 되다`,
        body: [
          `-게 되다 with a verb means a change that happened through circumstances rather than your direct choice: 'come to, end up, get to'. 한국에 살게 됐어요 (I ended up living in Korea), 그 사람을 좋아하게 됐어요 (I came to like him), 회사 일로 부산에 가게 됐어요 (I'm going to Busan for work, as it turns out). It sounds modest, which is why it's common in formal self-introductions.`,
        ],
        examples: [
          { ko: "친구 덕분에 한국 음식을 좋아하게 됐어요.", en: "Thanks to a friend, I've come to like Korean food." },
          { ko: "다음 달부터 서울 지사에서 일하게 되었습니다.", en: "From next month I'll be working at the Seoul branch." },
        ],
      },
      {
        heading: `Adverbs with -게, and change over time`,
        body: [
          `-게 turns an adjective into an adverb: 맛있게 드세요 (enjoy your meal, literally 'eat deliciously'), 쉽게 설명해 주세요 (explain it simply), 크게 말해 주세요 (speak up). Some adverbs are words of their own: 빨리, 천천히, 잘, 많이.`,
          `-아 / 어 가다 and -아 / 어 오다 describe change over time: 다 되어 가요 (it's nearly done), 10년 동안 한국어를 공부해 왔어요 (I've been studying Korean for ten years, up to now). They come back at the Intermediate level.`,
        ],
        examples: [
          { ko: "좀 더 크게 말해 주세요.", en: "Could you speak a little louder?" },
          { ko: "머리를 짧게 잘랐어요.", en: "I had my hair cut short." },
          { ko: "일이 거의 끝나 가요.", en: "The work is nearly finished." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "의사를 됐어요.",
        right: "의사가 됐어요.",
        why: `되다 takes 이 / 가.`,
      },
      {
        wrong: "날씨가 따뜻하게 됐어요.",
        right: "날씨가 따뜻해졌어요.",
        why: `For adjectives, change is -아 / 어지다. (-게 되다 is mainly for verbs.)`,
        register: true,
      },
      {
        wrong: "따뜻해 졌어요",
        right: "따뜻해졌어요",
        why: `-아 / 어지다 is written as one word with the adjective.`,
      },
      {
        wrong: "맛있이 드세요.",
        right: "맛있게 드세요.",
        why: `Adverbs from adjectives take -게 (a few take -이, like 깨끗이, but not 맛있다).`,
      },
    ],
    faqs: [
      {
        q: `What's the difference between 알게 됐어요 and 알았어요?`,
        a: `알게 됐어요 means 'I came to know / I found out', focusing on how you learned. 알았어요 means 'I knew' or, very often, 'OK, got it'.`,
      },
      {
        q: `Is -아 / 어지다 also a passive?`,
        a: `With some action verbs, yes: 만들어지다 (be made), 정해지다 (be decided). That use is taught with passive verbs at the Intermediate level.`,
      },
    ],
    related: ["descriptive-verbs", "progressive-and-states", "passive-verbs", "the-more-and-change-over-time"],
    lessons: [
      "a2-getting-warmer",
      "a2-becoming-something",
      "a2-it-turned-out",
      "a2-adverbs-from-adjectives",
      "a2-going-coming-preview",
      "a2-drill-change",
      "a2-contrast-change-forms",
      "a2-error-hunt-change",
    ],
  },
];
