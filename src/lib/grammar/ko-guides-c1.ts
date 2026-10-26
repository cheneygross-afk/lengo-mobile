// Synced from cheneygross-afk/lengo:src/lib/grammar/ko-guides-c1.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { KoGrammarGuide } from "./ko-types";

// Korean grammar guides, Advanced (C1, TOPIK 5). See the notes at the top of
// ./ko-types.ts.
export const KO_C1_GUIDES: KoGrammarGuide[] = [
  {
    slug: "advanced-connectives-observed",
    title: "What I Saw and What Followed: -더니, -았 / 었더니, -고 보니, -다 보니, -는 통에",
    description:
      "Connectives built on observation and discovery: -더니 (I saw A, then B), -았 / 었더니 (I did A, and found B), -고 보니 (having done it, I realised), -다 보니 (ended up) and -는 통에 (because of all the commotion).",
    level: "C1",
    intro: [
      `These endings tell a little story: something was observed or done, and something followed. They depend on who did what and who saw it, which is exactly where advanced learners slip. Native speakers use them constantly in conversation and in writing about personal experience.`,
    ],
    sections: [
      {
        heading: `-더니: I saw A, then B`,
        body: [
          `-더니 joins something the speaker observed in the past to what came after. The first clause is usually about someone else (or about the weather, a place, a thing). Three uses: a change (아침에는 맑더니 오후에 비가 왔다), a contrast (어제는 바쁘다더니 오늘은 한가하네), and a cause and result (열심히 공부하더니 결국 합격했다).`,
          `In speech, -더니 can end a sentence, leaving the result unsaid, often with a critical tone: 그렇게 놀더니... ('All that playing around, and look...').`,
        ],
        examples: [
          { ko: "아침에는 맑더니 오후에 비가 왔다.", en: "It was clear in the morning, but it rained in the afternoon." },
          { ko: "민수가 매일 연습하더니 실력이 많이 늘었어요.", en: "Minsu practised every day, and his skill really improved." },
          { ko: "동생이 아까부터 배가 아프다고 하더니 결국 병원에 갔어요.", en: "My brother had been saying his stomach hurt, and in the end he went to hospital." },
        ],
      },
      {
        heading: `-았 / 었더니: I did A, and found B`,
        body: [
          `-았 / 었더니 is the first-person counterpart: I did something, and then I discovered or caused something. 집에 갔더니 아무도 없었어요 (I went home and nobody was there). 약을 먹었더니 좀 나아졌어요 (I took the medicine and I feel a bit better). The first clause's subject is usually 'I', or the speaker's side.`,
        ],
        table: {
          headers: ["Ending", "First clause", "Example"],
          rows: [
            ["-더니", "what I observed (usually someone else)", "친구가 열심히 하더니 합격했다."],
            ["-았 / 었더니", "what I did", "내가 열심히 했더니 합격했다."],
          ],
        },
        examples: [
          { ko: "아침에 일찍 일어났더니 하루가 길게 느껴졌다.", en: "I got up early, and the day felt long." },
          { ko: "친구한테 물어봤더니 모른다고 했어요.", en: "I asked my friend, and she said she didn't know." },
        ],
      },
      {
        heading: `-고 보니, -다 보니, -는 통에`,
        body: [
          `-고 보니 'having done it and looked': a realisation after the fact: 듣고 보니 맞는 말이네요 (Now that I've heard it, you're right). -다 보니 'in the course of doing': 이야기하다 보니 시간이 늦었다 (We got talking, and it got late).`,
          `-는 통에 gives a cause in the form of chaos or disturbance, with a bad result: 아이가 우는 통에 잠을 한숨도 못 잤다 (The baby was crying, so I didn't sleep a wink).`,
        ],
        examples: [
          { ko: "듣고 보니 그 말이 맞네요.", en: "Now that I hear it, you're right." },
          { ko: "옆집에서 공사하는 통에 일에 집중할 수가 없었다.", en: "The building work next door meant I couldn't concentrate." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "제가 열심히 공부하더니 합격했어요.",
        right: "제가 열심히 공부했더니 합격했어요.",
        why: `With yourself as the doer of the first clause, use -았 / 었더니. -더니 reports something you observed.`,
      },
      {
        wrong: "아이가 우는 통에 잘 잤어요.",
        right: "아이가 우는 통에 잠을 못 잤어요.",
        why: `-는 통에 is followed by a bad result.`,
      },
      {
        wrong: "친구가 비가 오더니 우산을 샀어요.",
        right: "비가 오길래 친구가 우산을 샀어요.",
        why: `-더니 needs a link of change or sequence from what was observed. For a reason prompting someone's action, use -길래 or -아서.`,
      },
    ],
    faqs: [
      {
        q: `Can -더니 ever have 'I' as the subject?`,
        a: `Yes, when you look back on your own past state as an outsider would: 어제는 머리가 아프더니 오늘은 괜찮아요 (Yesterday I had a headache, but today I'm fine).`,
      },
      {
        q: `Is -고 보니 the same as -고 나서?`,
        a: `-고 나서 is plain sequence. -고 보니 adds a realisation: 'after doing it, I saw that ...'.`,
      },
    ],
    related: ["storytelling-deoni-ja", "deorago-and-deon", "beliefs-and-evidence", "concession-and-grounds"],
    lessons: [
      "c1-observed-change-1",
      "c1-observed-change-2",
      "c1-i-did-it-and-then",
      "c1-contrast-observed-or-my-action",
      "c1-realising-and-ending-up",
      "c1-all-the-commotion",
    ],
  },
  {
    slug: "concession-and-grounds",
    title: "Even If, What's More, Seeing That: -(으)ㄴ들, -(으)ㄹ지언정, -(으)ㄹ지라도, -거니와, -기에, -길래",
    description:
      "Advanced concession and reasons: -(으)ㄴ들 (even if ..., what use?), -(으)ㄹ지언정 (I'd rather X than Y), -(으)ㄹ지라도 (even though), -거니와 (and what's more), and -기에 / -길래 (seeing that, because I noticed).",
    level: "C1",
    intro: [
      `By B2 you can say 'even if' with -아 / 어도 and -더라도. C1 adds endings with a sharper attitude: the rhetorical 'what's the use?' of -(으)ㄴ들, the defiant 'I'd sooner ...' of -(으)ㄹ지언정, and the observational reasons -기에 and -길래.`,
    ],
    sections: [
      {
        heading: `-(으)ㄴ들: even if ..., what use?`,
        body: [
          `-(으)ㄴ들 sets up a hypothetical and dismisses it, usually with a rhetorical question: 아무리 후회한들 무슨 소용이 있겠어요? (However much you regret it, what use is it?). With nouns: N인들. With question words it means 'any ... at all': 누군들 그걸 원하겠어요? (Who on earth would want that?).`,
        ],
        examples: [
          { ko: "지금 간들 만날 수 있겠어요?", en: "Even if we went now, would we really see him?" },
          { ko: "아무리 돈이 많은들 건강을 살 수는 없다.", en: "However rich you are, you can't buy health." },
          { ko: "그 상황이라면 누군들 화가 안 나겠어요?", en: "In that situation, who wouldn't be angry?" },
        ],
      },
      {
        heading: `-(으)ㄹ지언정 and -(으)ㄹ지라도`,
        body: [
          `-(으)ㄹ지언정 accepts something bad to reject something worse, with strong will: 굶어 죽을지언정 남의 것은 훔치지 않겠다 (I'd sooner starve than steal). -(으)ㄹ지라도 is a formal 'even though, even if', close to -더라도: 비록 실패할지라도 포기하지 않겠다.`,
        ],
        examples: [
          { ko: "가난할지언정 비굴하게 살고 싶지 않다.", en: "I may be poor, but I won't live without dignity." },
          { ko: "비록 시간이 오래 걸릴지라도 끝까지 해 보겠습니다.", en: "Even if it takes a long time, I'll see it through." },
        ],
      },
      {
        heading: `-거니와: and what's more`,
        body: [
          `-거니와 adds a point, with the first treated as already obvious: 그 식당은 음식도 맛있거니와 서비스도 좋다. It's written and formal. 말할 것도 없거니와 'needless to say' is a common chunk.`,
        ],
        examples: [
          { ko: "그는 실력도 뛰어나거니와 성격도 좋다.", en: "He's highly skilled, and what's more, he has a good personality." },
        ],
      },
      {
        heading: `-기에 and -길래: seeing that`,
        body: [
          `-기에 and its spoken form -길래 give a reason based on something the speaker noticed, and the second clause is the speaker's own reaction: 세일하길래 하나 샀어요 (It was on sale, so I bought one). They can't be followed by a command or suggestion. -기에 is also used in writing to give grounds: 위험하다고 판단되기에 출입을 금지한다.`,
          `In a question, -길래 means 'what made you ...?': 무슨 일이 있었길래 그렇게 울어? (What happened that's got you crying like that?).`,
        ],
        examples: [
          { ko: "날씨가 좋길래 산책을 나갔어요.", en: "The weather was nice, so I went out for a walk." },
          { ko: "친구가 아프다고 하길래 죽을 사다 줬다.", en: "My friend said she was ill, so I bought her some porridge." },
          { ko: "뭘 먹었길래 이렇게 배가 아파?", en: "What did you eat to give you such a stomach ache?" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "세일하길래 하나 사세요.",
        right: "세일하니까 하나 사세요.",
        why: `-길래 can't be followed by a command or suggestion.`,
      },
      {
        wrong: "내가 배고프길래 밥을 먹었어.",
        right: "배가 고파서 밥을 먹었어.",
        why: `-길래 is a reason the speaker noticed from outside; your own hunger is just -아서.`,
      },
      {
        wrong: "아무리 후회한들 소용이 있어요.",
        right: "아무리 후회한들 무슨 소용이 있겠어요?",
        why: `-(으)ㄴ들 leads to dismissal: a rhetorical question or a negative.`,
      },
      {
        wrong: "친구에게: 비가 올지라도 갈게.",
        right: "비가 와도 갈게.",
        why: `-(으)ㄹ지라도 is formal and literary; in chat, -아 / 어도.`,
        register: true,
      },
    ],
    faqs: [
      {
        q: `-기에 or -길래?`,
        a: `Same meaning. -길래 is spoken; -기에 is written and slightly formal.`,
      },
      {
        q: `-(으)ㄹ지언정 sounds dramatic. Do people say it?`,
        a: `Mostly in writing, speeches and dramas. In speech, -는 한이 있어도 or -느니 차라리 are more common.`,
      },
    ],
    related: ["contrast-and-concession-b2", "let-alone-rather-than", "advanced-connectives-observed", "literary-endings"],
    lessons: [
      "c1-even-if-what-use-1",
      "c1-even-if-what-use-2",
      "c1-never-mind-even-if",
      "c1-contrast-concession",
      "c1-and-whats-more",
      "c1-reasons-i-noticed",
    ],
  },
  {
    slug: "literary-endings",
    title: "Formal and Literary Endings: -건대, -(으)ㄹ진대, -노라면, -(으)ㄹ세라, -노라, -(으)리라",
    description:
      "Endings you meet in speeches, essays, song lyrics and literature: -건대 (as I see it), -(으)ㄹ진대 (given that), -노라면 (if you keep on), -(으)ㄹ세라 (for fear that), and the declaratives -노라, -(으)리라 and the written command -(으)라.",
    level: "C1",
    intro: [
      `These endings belong to formal and literary Korean. You'll produce a few of them (요컨대, 바라건대) in speeches and essays, and recognise the rest in literature, lyrics, slogans and historical dramas.`,
    ],
    sections: [
      {
        heading: `-건대 and -(으)ㄹ진대`,
        body: [
          `-건대 attaches to verbs of thinking, seeing and wishing: 생각하건대 (as I think), 바라건대 (I hope that), 듣건대 (I hear that), 요컨대 (in short; from 요하건대). Formal speeches and essays use them as sentence openers.`,
          `-(으)ㄹ진대 'given that' sets up an argument from the lesser to the greater, usually with 하물며 'all the more': 짐승도 은혜를 알진대 하물며 사람이야 (If even animals know gratitude, how much more should people).`,
        ],
        examples: [
          { ko: "요컨대 문제는 비용이다.", en: "In short, the problem is cost." },
          { ko: "바라건대 모두 건강하시기를 빕니다.", en: "I hope with all my heart that you all stay well." },
          { ko: "어린아이도 그 정도는 알진대 하물며 어른이 모르겠는가?", en: "If even a child knows that much, how could an adult not?" },
        ],
      },
      {
        heading: `-노라면 and -(으)ㄹ세라`,
        body: [
          `-노라면 'if you keep on doing' is a literary -다 보면: 사노라면 좋은 날도 오겠지 (Live on, and good days will come). ㄹ stems drop ㄹ: 살다 → 사노라면.`,
          `-(으)ㄹ세라 'for fear that' describes anxious care: 아이가 깰세라 조심조심 문을 닫았다 (She closed the door gently in case the baby woke).`,
        ],
        examples: [
          { ko: "열심히 하노라면 언젠가는 기회가 올 것이다.", en: "If you keep working hard, an opportunity will come someday." },
          { ko: "누가 볼세라 얼른 편지를 숨겼다.", en: "For fear someone might see, she quickly hid the letter." },
        ],
      },
      {
        heading: `Recognition: -노라, -(으)리라, -(으)라`,
        body: [
          `-노라 is an old first-person declaration: 나는 이 땅을 사랑하노라. -(으)리라 expresses will or prediction: 반드시 돌아오리라 (I will surely return). The written command -(으)라 (not -아 / 어라) appears in slogans, headlines and exam instructions: 정부는 대책을 마련하라! (The government must come up with measures!).`,
          `Recognise these, but don't use them in conversation: they sound like a poem or a protest banner.`,
        ],
        examples: [
          { ko: "다시 일어서리라.", en: "I will rise again." },
          { ko: "책임자를 처벌하라!", en: "Punish those responsible!" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "살노라면 좋은 날도 오겠지.",
        right: "사노라면 좋은 날도 오겠지.",
        why: `ㄹ drops before ㄴ: 사노라면.`,
      },
      {
        wrong: "친구에게: 요컨대 나 배고파.",
        right: "한마디로 나 배고파.",
        why: `요컨대 is a formal discourse marker; in chat, 한마디로 or 그러니까.`,
        register: true,
      },
      {
        wrong: "아이가 깨세라 조용히 했다.",
        right: "아이가 깰세라 조용히 했다.",
        why: `The ending is -(으)ㄹ세라, with ㄹ.`,
      },
    ],
    faqs: [
      {
        q: `Do Koreans actually use -건대?`,
        a: `As a few fixed words: 요컨대, 바라건대, 생각하건대, mostly in speeches and writing.`,
      },
      {
        q: `What's the difference between -(으)라 and -아 / 어라?`,
        a: `-아 / 어라 is a direct command to someone (먹어라). -(으)라 is the impersonal written command and the quoted form (먹으라고).`,
      },
    ],
    related: ["literary-classical-endings", "old-speech-levels", "concession-and-grounds", "rhetoric-and-persuasion"],
    lessons: [
      "c1-as-i-see-it",
      "c1-given-that-how-much-more",
      "c1-if-you-keep-on",
      "c1-for-fear-that",
      "c1-literary-declaratives",
      "c1-practice-literary-endings",
    ],
  },
  {
    slug: "topic-and-subject-in-discourse",
    title: "은 / 는 and 이 / 가 in Discourse: Exhaustive, Contrastive, Embedded and Double Subjects",
    description:
      "The advanced picture of 은 / 는 vs 이 / 가: new vs known information, exhaustive 이 / 가 ('it was me'), contrastive 은 / 는 on any phrase, 이 / 가 inside clauses, double-subject sentences, 은 / 는 and the scope of negation, and topic flow in a paragraph.",
    level: "C1",
    intro: [
      `At A1 you learned that 은 / 는 marks the topic and 이 / 가 the subject. At C1 you need the full picture, because the choice shapes meaning and flow, not just grammar. The same sentence with a different particle can say something quite different.`,
    ],
    sections: [
      {
        heading: `New, exhaustive and contrastive`,
        body: [
          `은 / 는 marks what we're talking about (known); 이 / 가 marks new information. In answers to 'who?' questions, 이 / 가 is exhaustive: 누가 했어요? — 제가 했어요 (It was me, and nobody else).`,
          `Contrastive 은 / 는 can attach to almost any phrase: objects (커피는 마시는데 차는 안 마셔요), times (오늘은 바빠요, implying other days aren't), adverbs, even verbs (-기는 하다).`,
        ],
        examples: [
          { ko: "누가 창문을 깼어요? — 민수가 깼어요.", en: "Who broke the window? — Minsu did." },
          { ko: "서울에는 가 봤는데 부산에는 못 가 봤어요.", en: "I've been to Seoul, but not to Busan." },
          { ko: "이 책은 제가 이미 읽었어요.", en: "This book, I've already read." },
        ],
      },
      {
        heading: `Inside clauses and double subjects`,
        body: [
          `Inside a modifier clause or a subordinate clause, the subject takes 이 / 가, not 은 / 는: 내가 어제 만난 사람, 동생이 오면. 은 / 는 there sounds contrastive.`,
          `Double-subject sentences have a topic and then a subject: 코끼리는 코가 길다 (Elephants have long trunks), 저는 머리가 아파요 (I have a headache), 서울은 교통이 편리하다. The topic is the whole; the subject is a part or aspect.`,
        ],
        examples: [
          { ko: "제가 어제 만난 사람은 대학 선배예요.", en: "The person I met yesterday is an older student from my university." },
          { ko: "할머니는 귀가 잘 안 들리세요.", en: "Grandma is hard of hearing." },
          { ko: "이 동네는 집값이 비싸요.", en: "Housing is expensive in this neighbourhood." },
        ],
      },
      {
        heading: `Negation scope and paragraph flow`,
        body: [
          `은 / 는 changes what a negative covers. 학생들이 다 안 왔어요 usually means none of the students came (though it can be read as 'not all'). 학생들이 다는 안 왔어요 can only mean not all of them came (some did).`,
          `In a paragraph, a new referent enters with 이 / 가, then continues with 은 / 는, then is often dropped: 옛날에 한 농부가 살았다. 농부는 아주 부지런했다. 매일 아침 일찍 밭에 나갔다.`,
        ],
        examples: [
          { ko: "옛날 옛적에 한 나무꾼이 살았어요. 나무꾼은 마음씨가 착했어요.", en: "Once upon a time there lived a woodcutter. The woodcutter was kind-hearted." },
          { ko: "숙제를 다는 못 했어요.", en: "I didn't manage to do all of my homework." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "제는 어제 만난 사람이 친구예요.",
        right: "제가 어제 만난 사람은 친구예요.",
        why: `Inside the modifier clause, the subject takes 이 / 가 (제가); the whole phrase is then the topic.`,
      },
      {
        wrong: "누가 왔어요? — 민수는 왔어요.",
        right: "누가 왔어요? — 민수가 왔어요.",
        why: `The answer to 'who?' is new information: 이 / 가. 민수는 왔어요 implies 'Minsu did, but others didn't'.`,
        register: true,
      },
      {
        wrong: "옛날에 한 농부는 살았다.",
        right: "옛날에 한 농부가 살았다.",
        why: `A new character enters with 이 / 가; 한 농부 is by definition new.`,
      },
    ],
    faqs: [
      {
        q: `Is there a simple rule?`,
        a: `Ask: is this what the sentence is about (은 / 는), or is it the new part (이 / 가)? Then check for contrast and clause boundaries.`,
      },
      {
        q: `Why does 저는 sound strange in some answers?`,
        a: `Because it adds contrast: 저는 괜찮아요 can imply 'I'm fine (but someone else isn't)'.`,
      },
    ],
    related: ["topic-particle-eun-neun", "subject-particle-i-ga", "speech-levels-and-register", "translation-precision"],
    lessons: [
      "c1-topic-subject-spiral",
      "c1-exhaustive-subject",
      "c1-contrastive-topic",
      "c1-subject-inside-clauses",
      "c1-double-subject",
      "c1-topic-negation-scope",
      "c1-topic-flow-paragraph",
      "c1-contrast-same-sentence",
    ],
  },
  {
    slug: "hedging-academic-korean",
    title: "Hedging and Stance: -는 것으로 보인다, -다고 볼 수 있다, -지 않을까 한다",
    description:
      "How academic and formal Korean qualifies its claims: -는 것으로 보인다, -(으)ㄹ 것으로 예상된다, -다고 볼 수 있다 / 할 수 있다, 가능성, tendencies, -지 않을까 한다, -는 듯하다 and -다고 하기는 어렵다.",
    level: "C1",
    intro: [
      `Academic Korean avoids bare claims. Results 'appear', things 'can be said', and limits are stated openly. These frames are essential for reports, theses and TOPIK essays, and they sound measured rather than vague.`,
    ],
    sections: [
      {
        heading: `Appearing, expecting, being able to say`,
        body: [
          `-는 것으로 보인다 'it appears that' (from data or evidence): 소비가 회복되고 있는 것으로 보인다. -(으)ㄹ 것으로 예상된다 / 전망된다 'it is expected that'. -다고 볼 수 있다 and -다고 할 수 있다 'it can be considered / said that' make an interpretation: 이는 사회 구조의 변화 때문이라고 볼 수 있다.`,
        ],
        examples: [
          { ko: "청년층의 소비가 줄어든 것으로 보인다.", en: "Spending among young people appears to have fallen." },
          { ko: "내년에도 이러한 추세는 계속될 것으로 예상된다.", en: "This trend is expected to continue next year." },
          { ko: "이는 성공적인 정책이었다고 할 수 있다.", en: "This can be called a successful policy." },
        ],
      },
      {
        heading: `Soft claims and stated limits`,
        body: [
          `-지 않을까 한다 / 싶다 is a modest 'I suspect that': 원인은 다른 데 있지 않을까 한다. -는 듯하다 is a written 'seems'. -는 경향이 있다 and -(으)ㄹ 가능성이 높다 / 낮다 qualify by degree.`,
          `State limits with -다고 하기는 어렵다 'it is hard to say that': 이 결과만으로 단정하기는 어렵다 (It is hard to conclude from these results alone).`,
        ],
        examples: [
          { ko: "추가 연구가 필요하지 않을까 한다.", en: "Further research may be needed." },
          { ko: "이 결과를 일반화하기는 어렵다.", en: "It is difficult to generalise these results." },
          { ko: "나이가 많을수록 변화를 꺼리는 경향이 있다.", en: "The older people are, the more they tend to avoid change." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "논문: 원인은 스트레스인 것 같아요.",
        right: "논문: 원인은 스트레스인 것으로 보인다.",
        why: `Academic writing is 한다체 and uses 것으로 보인다, not spoken -것 같아요.`,
        register: true,
      },
      {
        wrong: "소비가 회복된다고 보인다.",
        right: "소비가 회복되는 것으로 보인다.",
        why: `보이다 'appear' takes -는 것으로; -다고 goes with 볼 수 있다.`,
      },
      {
        wrong: "이 결과로 확실히 증명된다고 할 수 있다고 보인다.",
        right: "이 결과는 가설을 뒷받침한다고 볼 수 있다.",
        why: `Stacking hedges makes the claim meaningless; use one.`,
        register: true,
      },
    ],
    faqs: [
      {
        q: `Doesn't hedging make my writing weak?`,
        a: `In Korean academic writing, an appropriate hedge sounds professional. Unhedged claims (반드시, 확실히) sound naive unless your evidence is overwhelming.`,
      },
      {
        q: `Can I use these in speech?`,
        a: `In presentations and meetings, yes, with 습니다: 회복되는 것으로 보입니다.`,
      },
    ],
    related: ["academic-writing-citation", "giving-opinions", "politeness-strategies", "argument-essay-language"],
    lessons: [
      "c1-hedge-appears",
      "c1-hedge-can-be-said",
      "c1-hedge-likelihood",
      "c1-hedge-tendency",
      "c1-hedge-soft-claims",
      "c1-hedge-limits",
    ],
  },
  {
    slug: "academic-writing-citation",
    title: "Academic Writing: Abstracts, Findings, Citation and Cohesion",
    description:
      "The frames of Korean academic prose: the abstract (초록), reporting findings with -는 것으로 나타났다, citing with -에 따르면 / -에 의하면 and reporting verbs, cohesion with 이에, 이를 통해, 이상에서, and concluding with -(으)ㅁ을 알 수 있다.",
    level: "C1",
    intro: [
      `Korean academic writing is built from a small set of frames. Learn them and you can write an abstract, report results, cite others and conclude, all in natural academic Korean.`,
    ],
    sections: [
      {
        heading: `Abstract and findings`,
        body: [
          `An abstract (초록) moves through purpose (본 연구는 ...을 / 를 목적으로 한다 / 살펴보고자 한다), method (...을 / 를 대상으로 설문 조사를 실시하였다), results (...는 것으로 나타났다) and implications (...에 시사하는 바가 크다). 본 연구 'this study' replaces 'I'.`,
        ],
        examples: [
          { ko: "본 연구는 대학생의 수면 습관을 분석하는 것을 목적으로 한다.", en: "This study aims to analyse university students' sleep habits." },
          { ko: "대학생 300명을 대상으로 설문 조사를 실시하였다.", en: "A survey of 300 university students was conducted." },
          { ko: "수면 시간이 짧을수록 학업 성취도가 낮은 것으로 나타났다.", en: "Shorter sleep was associated with lower academic achievement." },
        ],
      },
      {
        heading: `Citing sources`,
        body: [
          `-에 따르면 and -에 의하면 'according to' introduce a source. Reporting verbs carry stance: 주장하다 (argue), 지적하다 (point out), 제시하다 (propose), 밝히다 (show, reveal), 보고하다 (report). The cited claim is quoted with -다고: 김민수(2020)는 ...다고 지적하였다.`,
        ],
        examples: [
          { ko: "선행 연구에 따르면 수면 부족은 집중력을 떨어뜨린다.", en: "According to previous research, lack of sleep reduces concentration." },
          { ko: "이 연구는 기존 이론의 한계를 지적하였다.", en: "This study pointed out the limitations of existing theory." },
        ],
      },
      {
        heading: `Cohesion and conclusions`,
        body: [
          `Link sections with 이에 (accordingly), 이를 통해 (through this), 이상에서 (from the above), 다시 말해 (in other words). Conclude with -(으)ㅁ을 알 수 있다 'we can see that': 이상에서 수면이 학업에 큰 영향을 미침을 알 수 있다.`,
        ],
        examples: [
          { ko: "이에 본 연구에서는 새로운 방안을 제시하고자 한다.", en: "Accordingly, this study proposes a new approach." },
          { ko: "이상에서 두 변인 사이에 밀접한 관계가 있음을 알 수 있다.", en: "From the above, it is clear that the two variables are closely related." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "제 연구는 수면 습관을 봤어요.",
        right: "본 연구는 수면 습관을 분석하였다.",
        why: `Academic prose uses 본 연구 and 한다체, with formal verbs.`,
        register: true,
      },
      {
        wrong: "관계가 있다를 알 수 있다.",
        right: "관계가 있음을 알 수 있다.",
        why: `A clause needs to become a noun before 을: -(으)ㅁ을 or -다는 것을.`,
      },
      {
        wrong: "김 교수에 따르면 수면은 중요하다고 주장했다.",
        right: "김 교수는 수면이 중요하다고 주장했다.",
        why: `에 따르면 and a reporting verb with the same source double up. Use one or the other.`,
      },
    ],
    faqs: [
      {
        q: `Should I write 하였다 or 했다?`,
        a: `Both are correct. Many academic writers use 하였다 for a more formal feel.`,
      },
      {
        q: `Is 필자 the same as 'the author'?`,
        a: `Yes, it's how writers refer to themselves in essays and papers, though many modern papers avoid self-reference altogether.`,
      },
    ],
    related: ["hedging-academic-korean", "news-and-data-language", "formal-connectives-for-writing", "writing-style-translationese"],
    lessons: [
      "c1-abstract-structure",
      "c1-reporting-findings",
      "c1-citing-sources-1",
      "c1-citing-sources-2",
      "c1-academic-cohesion",
      "c1-conclusions-noun-clauses",
    ],
  },
  {
    slug: "editorial-and-speech-rhetoric",
    title: "Editorials, Speeches and Debate: Cannot But, Must, At a Time Like This",
    description:
      "The language of opinion pieces, speeches and debates: -지 않을 수 없다, -(으)ㄹ 수밖에 없다, -아 / 어야 할 것이다, -(으)ㄹ 일이다, -기 바란다, -(으)ㄴ / 는 마당에, -(으)ㄴ / 는 이상, rhetorical questions, calls to action and rebuttals.",
    level: "C1",
    intro: [
      `Editorials (사설), columns (칼럼), speeches and formal debates share a persuasive grammar: strong necessity, prescriptions for others, rhetorical questions and appeals. These forms carry authority in writing and sound commanding when spoken.`,
    ],
    sections: [
      {
        heading: `Necessity and prescription`,
        body: [
          `-지 않을 수 없다 'cannot but': 우려하지 않을 수 없다 (We cannot help but be concerned). -(으)ㄹ 수밖에 없다 'have no choice but to'. Editorials prescribe for others with -아 / 어야 할 것이다 (should), -(으)ㄹ 일이다 (ought to), and -기 바란다 (we urge): 정부는 신속히 대책을 마련해야 할 것이다.`,
        ],
        examples: [
          { ko: "이번 사태에 대해 깊은 유감을 표하지 않을 수 없다.", en: "We cannot help but express deep regret over this affair." },
          { ko: "정부는 신속히 대책을 마련해야 할 것이다.", en: "The government should urgently put measures in place." },
          { ko: "관계 당국은 이번 사고를 철저히 조사하기 바란다.", en: "We urge the authorities to investigate this accident thoroughly." },
        ],
      },
      {
        heading: `At a time like this, now that`,
        body: [
          `-(으)ㄴ / 는 마당에 'at a time like this, in this situation' adds indignation: 다들 힘든 마당에 혼자 휴가를 가겠다니 (At a time when everyone's struggling, he wants to go on holiday?). -(으)ㄴ / 는 이상 'now that, as long as' commits to the consequence: 시작한 이상 끝까지 해야 한다.`,
        ],
        examples: [
          { ko: "물가가 이렇게 오르는 마당에 요금까지 올린다니 말이 되는가?", en: "With prices rising like this, how can they raise fares too?" },
          { ko: "약속한 이상 지켜야 합니다.", en: "Now that you've promised, you must keep it." },
        ],
      },
      {
        heading: `Rhetorical questions and calls to action`,
        body: [
          `Written rhetorical questions end in -(으)ㄴ가 / -는가 or -(으)ㄹ까: 과연 이것이 최선인가? (Is this really the best we can do?). Speeches close with a call to action: 함께 힘을 모읍시다, 지금이야말로 행동할 때입니다.`,
          `In debates, refer to the other side as 상대측 / 반대측 and frame rebuttals: 상대측의 주장에는 두 가지 문제가 있습니다. 첫째, ...`,
        ],
        examples: [
          { ko: "과연 이것이 최선의 방법인가?", en: "Is this really the best way?" },
          { ko: "지금이야말로 우리 모두가 행동할 때입니다.", en: "Now, if ever, is the time for all of us to act." },
          { ko: "상대측은 비용 문제를 지적했지만, 장기적으로 보면 오히려 비용이 절감됩니다.", en: "The other side raised the cost issue, but in the long run costs actually fall." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "걱정하지 않을 수 있다.",
        right: "걱정하지 않을 수 없다.",
        why: `For 'cannot help but', the pattern is a double negative: -지 않을 수 없다 'cannot not'. 걱정하지 않을 수 있다 means 'it is possible not to worry'.`,
        register: true,
      },
      {
        wrong: "다들 바쁜 마당에 도와줘서 고마워요.",
        right: "다들 바쁜데 도와줘서 고마워요.",
        why: `-는 마당에 carries indignation or resignation; it clashes with thanks.`,
        register: true,
      },
      {
        wrong: "시작하는 이상 끝까지 해야 한다.",
        right: "시작한 이상 끝까지 해야 한다.",
        why: `For an action already begun, use the past modifier: 시작한 이상. (-는 이상 is for a present or general condition.)`,
        register: true,
      },
    ],
    faqs: [
      {
        q: `How do I tell an editorial from a column?`,
        a: `An editorial (사설) speaks for the paper: impersonal, prescriptive, 한다체. A column (칼럼) has a named author, a personal voice, and often anecdotes.`,
      },
      {
        q: `Is -기 바란다 rude?`,
        a: `In writing it's a formal exhortation. Said to someone's face it sounds like an order; use -아 / 어 주시기 바랍니다 in announcements.`,
      },
    ],
    related: ["argument-essay-language", "rhetoric-and-persuasion", "hedging-academic-korean", "inevitability-and-truth"],
    lessons: [
      "c1-editorial-structure",
      "c1-cannot-but",
      "c1-editorial-prescriptions",
      "c1-rhetorical-questions-writing",
      "c1-at-a-time-like-this",
      "c1-columnist-voice",
      "c1-contrast-editorial-column-article",
      "c1-speech-openings-closings",
      "c1-rhetorical-questions-speech",
      "c1-now-that-as-long-as",
      "c1-calls-to-action",
      "c1-debate-structure",
      "c1-debate-rebuttal",
    ],
  },
  {
    slug: "business-korean",
    title: "Business Korean: Emails, Reports, Meetings and Negotiation",
    description:
      "The language of Korean workplaces: the email frame, requests and replies, report style (개조식: -함, -음), the proposal (기안서), office verbs (검토, 승인, 결재, 공유), meeting language, -는 차원에서, -는 방향으로, -다는 점에서, negotiation and presentation signposts.",
    level: "C1",
    intro: [
      `Business Korean is formal, formulaic and full of Sino-Korean office verbs. The good news is that the formulas are stable: once you have the email frame and the meeting phrases, you can work in Korean with confidence.`,
    ],
    sections: [
      {
        heading: `The email frame`,
        body: [
          `Open with a greeting and self-introduction: 안녕하십니까. ○○팀 김민수입니다. State the purpose: ...관련하여 연락드립니다. Request with -아 / 어 주시면 감사하겠습니다 or 확인 부탁드립니다. Mention attachments: 첨부 파일을 확인해 주시기 바랍니다. Close: 감사합니다. 김민수 드림.`,
          `Replies: 회신이 늦어 죄송합니다 (sorry for the late reply), 말씀하신 자료를 보내 드립니다. Follow-ups: 지난번에 요청드린 건 관련하여 다시 연락드립니다.`,
        ],
        examples: [
          { ko: "다음 주 회의 일정 관련하여 연락드립니다.", en: "I'm writing about next week's meeting schedule." },
          { ko: "첨부한 견적서를 검토해 주시면 감사하겠습니다.", en: "I'd be grateful if you could review the attached quote." },
          { ko: "회신이 늦어 대단히 죄송합니다.", en: "My apologies for the late reply." },
        ],
      },
      {
        heading: `Report style (개조식) and office verbs`,
        body: [
          `Internal reports use 개조식: bullet points ending in nouns or in -함 / -음: 일정 변경 필요, 예산 초과됨, 추가 검토가 필요함. Office verbs are Sino-Korean nouns + 하다: 검토하다 (review), 승인하다 (approve), 결재하다 (sign off), 협조하다 (cooperate), 공유하다 (share), 보고하다 (report).`,
        ],
        examples: [
          { ko: "1. 일정 지연: 부품 공급 문제로 2주 연기됨", en: "1. Schedule delay: postponed two weeks due to a parts supply problem" },
          { ko: "부장님 결재를 받아야 진행할 수 있습니다.", en: "We can only proceed once the department head has signed off." },
          { ko: "회의 자료를 팀원들과 공유해 주세요.", en: "Please share the meeting materials with the team." },
        ],
      },
      {
        heading: `Meetings, negotiation and presentations`,
        body: [
          `Running a meeting: 그럼 회의를 시작하겠습니다, 다음 안건으로 넘어가겠습니다. Proposing and objecting: ...하는 것이 어떨까 싶습니다, 좋은 의견이지만 한 가지 우려되는 점이 있습니다. Formal framings: -는 차원에서 (as a matter of, at the level of), -는 방향으로 (in the direction of), -다는 점에서 (in that).`,
          `Negotiation uses conditions: 수량을 늘려 주신다면 단가를 조정해 드릴 수 있습니다. Presentations signpost: 먼저 ...에 대해 말씀드리겠습니다, 다음으로, 마지막으로, 정리하자면.`,
        ],
        examples: [
          { ko: "비용 절감 차원에서 출장을 줄이기로 했습니다.", en: "We've decided to cut business trips as a cost-saving measure." },
          { ko: "고객의 의견을 반영하는 방향으로 수정하겠습니다.", en: "We'll revise it to reflect customer feedback." },
          { ko: "이 제안은 비용이 적게 든다는 점에서 의미가 있습니다.", en: "This proposal is valuable in that it costs little." },
          { ko: "수량을 늘려 주신다면 단가를 조정해 드릴 수 있습니다.", en: "If you increase the quantity, we can adjust the unit price." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "고객에게: 내일까지 보내 주세요.",
        right: "내일까지 보내 주시면 감사하겠습니다.",
        why: `A bare request reads as curt in a client email.`,
        register: true,
      },
      {
        wrong: "김민수 올림",
        right: "김민수 드림",
        why: `To a junior colleague: 올림 is for superiors and elders; 드림 is the neutral polite sign-off.`,
        register: true,
      },
      {
        wrong: "예산이 초과되었음입니다.",
        right: "예산 초과됨",
        why: `-음 / -함 already ends the item; don't add 입니다.`,
      },
    ],
    faqs: [
      {
        q: `Is 수고하세요 OK in emails?`,
        a: `To peers and juniors, yes. To superiors, many people avoid it because it can sound like you're evaluating their work. 감사합니다 is safe.`,
      },
      {
        q: `What's the difference between 승인 and 결재?`,
        a: `승인 is approval in general. 결재 is the formal sign-off on a document in the company's approval chain.`,
      },
    ],
    related: ["fine-grained-honorifics", "notices-and-memo-style", "workplace-honorifics", "politeness-strategies"],
    lessons: [
      "c1-business-email-frame",
      "c1-business-email-requests",
      "c1-business-email-replies",
      "c1-report-style-bullet-points",
      "c1-the-proposal",
      "c1-business-sino-verbs",
      "c1-running-a-meeting",
      "c1-proposing-objecting",
      "c1-as-mentioned-in-that",
      "c1-at-the-level-of-in-the-direction-of",
      "c1-negotiation-conditions",
      "c1-presentation-signposting",
    ],
  },
  {
    slug: "fine-grained-honorifics",
    title: "Fine-Grained Honorifics: 압존법, Indirect Honorifics and Service-Speech Overuse",
    description:
      "Honorifics at native level: the three layers (subject, listener, object), 압존법 (talking about a senior to someone more senior), indirect honorifics (할머니께서 다리가 아프세요), the overuse in *커피 나오셨습니다, humble verbs, honorifics on compound verbs, and writing to superiors.",
    level: "C1",
    intro: [
      `By now you know -시-, the special honorific verbs and the humble ones. C1 is about judgement: when to raise whom when several people are involved, which things can be honoured, and where natives themselves overdo it.`,
    ],
    sections: [
      {
        heading: `Three layers and 압존법`,
        body: [
          `Korean honours three things separately: the subject (-시-, 께서), the listener (the speech level: 습니다, 요) and the object or recipient (드리다, 께, 여쭙다, 뵙다). They combine freely: 제가 할머니께 선물을 드렸어요 honours the recipient and the listener, but not the subject (me).`,
          `압존법 is the traditional rule of lowering a senior when speaking to someone even more senior: 할아버지, 아버지가 아직 안 왔습니다. Families still use it in places, but the standard etiquette guidance says not to apply it at work: 부장님, 김 과장님은 외근 가셨습니다 is the recommended form.`,
        ],
        examples: [
          { ko: "제가 선생님께 여쭤볼게요.", en: "I'll ask the teacher." },
          { ko: "부장님, 김 과장님은 지금 회의 중이십니다.", en: "Sir, Manager Kim is in a meeting right now." },
        ],
      },
      {
        heading: `Indirect honorifics and overuse`,
        body: [
          `Things closely belonging to an honoured person also get -시-: their body, illness, belongings and words. 할머니께서 다리가 아프세요, 사장님 말씀이 있으시겠습니다, 선생님 넥타이가 멋있으세요.`,
          `But service staff often stretch -시- to things unrelated to the customer: *커피 나오셨습니다. The coffee is not being honoured, so this is an error: 주문하신 커피 나왔습니다. Likewise *그 사이즈는 없으세요 → 그 사이즈는 없습니다, and *가격은 만 원이세요 → 가격은 만 원입니다.`,
        ],
        examples: [
          { ko: "주문하신 커피 나왔습니다.", en: "Your coffee is ready." },
          { ko: "할아버지께서 요즘 허리가 안 좋으세요.", en: "Grandad's back hasn't been good lately." },
          { ko: "고객님, 그 사이즈는 지금 없습니다.", en: "I'm sorry, we don't have that size right now." },
        ],
      },
      {
        heading: `Compound verbs and writing to superiors`,
        body: [
          `With compound verbs, put -시- on the last verb: 읽어 주세요, 가 보셨어요?, 하고 계세요. 있다 has two honorific forms: 계시다 for a person's location or progressive (하고 계시다), and 있으시다 for possession or circumstance (시간 있으세요?).`,
          `Writing to superiors: 부장님께, 말씀드린 대로, 확인 부탁드립니다, and close with 올림 or 드림.`,
        ],
        examples: [
          { ko: "사장님께서 지금 회의를 하고 계십니다.", en: "The CEO is in a meeting at the moment." },
          { ko: "혹시 내일 시간 있으세요?", en: "Do you happen to have time tomorrow?" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "커피 나오셨습니다.",
        right: "커피 나왔습니다.",
        why: `-시- honours a person or what closely belongs to them, not the coffee.`,
      },
      {
        wrong: "가격은 만 원이세요.",
        right: "가격은 만 원입니다.",
        why: `Prices are not honoured.`,
      },
      {
        wrong: "선생님이 시간이 계세요?",
        right: "선생님께서 시간이 있으세요?",
        why: `For possession, the honorific is 있으시다; 계시다 is only for a person's presence.`,
      },
      {
        wrong: "부장님께서 읽으셔 주셨어요.",
        right: "부장님께서 읽어 주셨어요.",
        why: `Put -시- on the final verb only.`,
        register: true,
      },
    ],
    faqs: [
      {
        q: `Should I use 압존법 at my Korean job?`,
        a: `The standard guidance says no: honour every senior you mention. Some traditional workplaces and the military differ, so follow local practice.`,
      },
      {
        q: `If natives say 커피 나오셨습니다, why learn the correct form?`,
        a: `Because many Koreans find it grating, and it's a well-known error. The correct form is what's taught and expected in writing.`,
      },
    ],
    related: ["workplace-honorifics", "honorifics-si", "business-korean", "speech-levels-and-register"],
    lessons: [
      "c1-honorifics-spiral",
      "c1-senior-to-more-senior",
      "c1-indirect-honorifics",
      "c1-honorific-overuse",
      "c1-humble-verbs-depth",
      "c1-honorific-auxiliaries",
      "c1-writing-to-superiors",
      "c1-contrast-same-event-listeners",
    ],
  },
  {
    slug: "legal-and-official-style",
    title: "Legal and Official Korean: Contracts, Conditions and Notices",
    description:
      "Reading laws, contracts and official notices: the statute style, 갑 and 을 as parties, -(으)ㄴ 경우에는, 다만, -(으)로 본다 (is deemed), 및 / 또는 / 등, 공문 and 공고, lease and deposit language, and how to paraphrase into plain Korean.",
    level: "C1",
    intro: [
      `Legal and official Korean is dense with Sino-Korean nouns, conditions and lists. It is very regular, though: a handful of frames account for most sentences. You'll need them for leases, employment contracts and government notices.`,
    ],
    sections: [
      {
        heading: `The style of laws and contracts`,
        body: [
          `Statutes use the plain present and 하여야 한다: 임차인은 보증금을 지급하여야 한다. Permission is -(으)ㄹ 수 있다; prohibition is -아 / 어서는 아니 된다. Contracts name the parties 갑 and 을 (like 'Party A' and 'Party B').`,
        ],
        examples: [
          { ko: "을은 계약 기간 동안 월세를 매월 말일까지 지급하여야 한다.", en: "Party B shall pay the rent by the last day of each month during the contract period." },
          { ko: "누구든지 허가 없이 이 구역에 출입하여서는 아니 된다.", en: "No person shall enter this area without permission." },
        ],
      },
      {
        heading: `Conditions, exceptions and deeming`,
        body: [
          `Conditions: -(으)ㄴ 경우에는, -(으)ㄹ 때에는. Exceptions start with 다만 (provided that, however). Deeming: -(으)로 본다 (is deemed to be): 기한 내에 이의를 제기하지 않은 경우에는 동의한 것으로 본다. Lists: 및 (and), 또는 (or), 등 (and so on).`,
        ],
        examples: [
          { ko: "계약을 해지하려는 경우에는 1개월 전에 통보하여야 한다.", en: "A party wishing to terminate the contract must give one month's notice." },
          { ko: "다만, 천재지변의 경우에는 그러하지 아니하다.", en: "However, this shall not apply in the case of natural disasters." },
          { ko: "기한 내에 신청하지 않은 경우에는 포기한 것으로 본다.", en: "Failure to apply within the deadline shall be deemed a waiver." },
        ],
      },
      {
        heading: `Notices and plain Korean`,
        body: [
          `Official documents (공문) and public notices (공고) use noun-heavy style: 신청 기간, 제출 서류, 문의처. Practise turning legal sentences into plain Korean: 보증금을 지급하여야 한다 → 보증금을 내야 해요.`,
        ],
        examples: [
          { ko: "제출 서류: 신청서 1부, 신분증 사본 1부", en: "Documents required: one application form, one copy of ID" },
          { ko: "계약이 끝나면 집주인은 보증금을 돌려줘야 해요.", en: "When the contract ends, the landlord has to return the deposit." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "임차인은 보증금을 지급해야 해요.",
        right: "임차인은 보증금을 지급하여야 한다.",
        why: `Contracts and laws are written in plain 한다체, not 해요.`,
        register: true,
      },
      {
        wrong: "동의한 것으로 봐요.",
        right: "동의한 것으로 본다.",
        why: `The deeming formula is fixed in contract style.`,
        register: true,
      },
      {
        wrong: "신청서 및 제출하십시오.",
        right: "신청서 및 신분증을 제출하십시오.",
        why: `및 links nouns: it needs a noun on both sides.`,
      },
    ],
    faqs: [
      {
        q: `What do 갑 and 을 mean outside contracts?`,
        a: `갑 has come to mean the party with power, and 을 the weaker one: 갑질 is the abuse of that power.`,
      },
      {
        q: `What's the difference between 전세 and 월세?`,
        a: `전세 is a large lump-sum deposit with no monthly rent; 월세 is a smaller deposit plus monthly rent.`,
      },
    ],
    related: ["legal-korean", "formal-noun-phrases", "business-korean", "notices-and-memo-style"],
    lessons: [
      "c1-legal-style",
      "c1-contract-parties",
      "c1-legal-conditions",
      "c1-legal-lists-deeming",
      "c1-official-notices",
      "c1-lease-and-deposit",
      "c1-practice-legal-paraphrase",
    ],
  },
  {
    slug: "formal-phrases-news-history",
    title: "Formal Phrases for the News, Economy and History: 앞두고, 둘러싸고, 불과하다, 힘입어, 이래, 말미암아",
    description:
      "The formal phrases of serious news and history writing: -에 불과하다, -는 데 그치다, -에 힘입어, -(으)로 이어지다, -(으)ㄹ 전망이다, -을 / 를 앞두고, -을 / 를 둘러싸고, -(으)ㄹ 방침이다, -다는 입장이다, -(으)ㄴ 이래, -(으)ㄹ 무렵, -에 걸쳐, -(으)로 말미암아, -기에 이르다, -는 것으로 알려지다, -(으)ㄹ 소지가 있다.",
    level: "C1",
    intro: [
      `Serious journalism and history writing share a set of formal phrases. Each is a fixed frame with a specific meaning. Learn them as chunks, and news articles, history texts and TOPIK reading passages open up.`,
    ],
    sections: [
      {
        heading: `Economy: merely, boosted by, leads to, forecast`,
        body: [
          `-에 불과하다 'is merely': 성장률은 1%에 불과했다. -는 데 그치다 / -에 머물다 'stop at, remain at'. -에 힘입어 'boosted by': 수출 호조에 힘입어. -(으)로 이어지다 'lead to'. -(으)ㄹ 전망이다 'is forecast to'.`,
        ],
        examples: [
          { ko: "올해 경제 성장률은 1%에 불과했다.", en: "Economic growth this year was a mere 1%." },
          { ko: "반도체 수출 호조에 힘입어 무역 흑자가 늘었다.", en: "Boosted by strong chip exports, the trade surplus grew." },
          { ko: "금리 인상은 소비 위축으로 이어질 전망이다.", en: "The rate rise is expected to lead to weaker consumption." },
        ],
      },
      {
        heading: `Politics: ahead of, over, plans, positions`,
        body: [
          `-을 / 를 앞두고 'ahead of': 선거를 앞두고. -을 / 를 둘러싸고 'over (a dispute)': 예산을 둘러싸고 갈등이 커지고 있다. -(으)ㄹ 방침이다 'plans to (officially)'. -기로 합의하다 'agree to'. -다는 입장이다 'takes the position that'.`,
        ],
        examples: [
          { ko: "선거를 앞두고 후보들의 토론이 열렸다.", en: "Ahead of the election, a candidates' debate was held." },
          { ko: "새 법안을 둘러싸고 여야의 갈등이 이어지고 있다.", en: "The ruling and opposition parties remain in conflict over the new bill." },
          { ko: "정부는 다음 달부터 지원을 확대할 방침이다.", en: "The government plans to expand support from next month." },
          { ko: "회사 측은 사실이 아니라는 입장이다.", en: "The company maintains that it is untrue." },
        ],
      },
      {
        heading: `History, science and risk`,
        body: [
          `Time: -(으)ㄴ 이래 'since', -(으)ㄹ 무렵 'around the time', -에 걸쳐 'over (a period)'. Cause and outcome: -(으)로 말미암아 'owing to' (very formal), -기에 이르다 'came to the point of'. Knowledge: -는 것으로 알려지다 'is known / reported to', 밝혀지다 'turn out, be revealed'. Room for doubt: -(으)ㄹ 소지가 있다 'there is potential for (trouble)', -(으)ㄹ 여지가 있다 'there is room for'.`,
        ],
        examples: [
          { ko: "조선이 건국된 이래 한양은 수도였다.", en: "Since the founding of Joseon, Hanyang was the capital." },
          { ko: "전쟁으로 말미암아 많은 문화재가 소실되었다.", en: "Owing to the war, many cultural treasures were lost." },
          { ko: "이 성분은 염증을 줄이는 것으로 알려져 있다.", en: "This ingredient is known to reduce inflammation." },
          { ko: "이 조항은 오해의 소지가 있다.", en: "This clause could be misunderstood." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "선거를 앞두어 토론이 열렸다.",
        right: "선거를 앞두고 토론이 열렸다.",
        why: `The fixed form is 앞두고.`,
      },
      {
        wrong: "성장률이 1%에 불과하게 늘었다.",
        right: "성장률은 1%에 불과했다.",
        why: `-에 불과하다 is a predicate: 'was merely'.`,
      },
      {
        wrong: "친구한테: 비로 말미암아 못 갔어.",
        right: "비 때문에 못 갔어.",
        why: `-(으)로 말미암아 is formal and written.`,
        register: true,
      },
      {
        wrong: "좋은 결과가 나올 소지가 있다.",
        right: "좋은 결과가 나올 가능성이 있다.",
        why: `소지 is for potential problems; for neutral likelihood use 가능성.`,
      },
    ],
    faqs: [
      {
        q: `Is 방침이다 the same as 계획이다?`,
        a: `Both mean a plan. 방침 is an official policy decision, typical of governments and companies.`,
      },
      {
        q: `What's 여야?`,
        a: `여당 (ruling party) and 야당 (opposition): 여야 is 'both parties'.`,
      },
    ],
    related: ["news-and-data-language", "journalism-and-broadcast", "formal-noun-phrases", "hada-doeda-sikida"],
    lessons: [
      "c1-econ-trends-spiral",
      "c1-merely-stop-at",
      "c1-boosted-by-leads-to",
      "c1-forecasts-trends",
      "c1-ahead-of",
      "c1-over-a-dispute",
      "c1-policy-plans",
      "c1-reporting-positions",
      "c1-contrast-neutral-loaded",
      "c1-history-time-expressions",
      "c1-history-cause-outcome",
      "c1-practice-retelling-history",
      "c1-known-revealed",
      "c1-risk-and-concern",
    ],
  },
  {
    slug: "definitions-and-emphasis",
    title: "Defining and Emphasising: -(이)란, -(이)야말로, -(으)ㅁ으로써, -는 데 있다, -(으)ㄹ 따름이다",
    description:
      "Patterns for essays and speeches on ideas: -(이)란 (X is ...), -(이)야말로 (precisely X), -(으)ㅁ으로써 (by doing), -는 데(에) 있다 (lies in) and -(으)ㄹ 따름이다 (merely, nothing but).",
    level: "C1",
    intro: [
      `Writing about ideas needs ways to define, to single something out and to say where the point lies. These five patterns do exactly that, and they appear constantly in essays, lectures and speeches.`,
    ],
    sections: [
      {
        heading: `Defining and singling out`,
        body: [
          `-(이)란 introduces a definition or a big question: 행복이란 무엇인가? (What is happiness?). 사랑이란 서로를 이해하는 것이다. -(이)야말로 'precisely, if anything': 건강이야말로 가장 큰 재산이다 (Health is truly the greatest wealth).`,
        ],
        examples: [
          { ko: "교육이란 사람을 사람답게 만드는 일이다.", en: "Education is what makes people truly human." },
          { ko: "지금이야말로 변화가 필요한 때이다.", en: "Now, more than ever, is the time for change." },
          { ko: "이 사람이야말로 진정한 영웅이다.", en: "This person is a true hero." },
        ],
      },
      {
        heading: `By doing, lies in, merely`,
        body: [
          `-(으)ㅁ으로써 'by doing': 대화함으로써 오해를 풀었다. Don't confuse it with -(으)므로 'because'. -는 데(에) 있다 'lies in': 문제는 소통이 부족하다는 데 있다. -(으)ㄹ 따름이다 'merely, nothing but', often humble: 최선을 다했을 따름입니다, 감사할 따름입니다.`,
        ],
        examples: [
          { ko: "서로 대화함으로써 오해를 풀 수 있었다.", en: "By talking to each other, we could clear up the misunderstanding." },
          { ko: "이 정책의 목적은 출산율을 높이는 데 있다.", en: "The aim of this policy lies in raising the birth rate." },
          { ko: "저는 맡은 일을 했을 따름입니다.", en: "I merely did my job." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "열심히 공부하므로써 합격했다.",
        right: "열심히 공부함으로써 합격했다.",
        why: `'By doing' is -(으)ㅁ으로써; -(으)므로 is 'because' and never takes 써.`,
      },
      {
        wrong: "문제는 소통이 부족한 데 이다.",
        right: "문제는 소통이 부족한 데 있다.",
        why: `The pattern is -는 데(에) 있다 'lies in', with 있다.`,
      },
      {
        wrong: "친구에게: 고마울 따름이야.",
        right: "진짜 고마워.",
        why: `-(으)ㄹ 따름이다 is formal and humble; in casual chat it sounds stiff.`,
        register: true,
      },
    ],
    faqs: [
      {
        q: `Is -(이)란 the same as -(이)라는 것은?`,
        a: `Yes, it's the contracted form. -(이)란 also appears in speech: 친구란 그런 거야.`,
      },
      {
        q: `-(이)야말로 or 은 / 는?`,
        a: `-(이)야말로 is a strong 'precisely, truly'. Plain 은 / 는 just marks the topic.`,
      },
    ],
    related: ["formal-connectives-for-writing", "editorial-and-speech-rhetoric", "spelling-traps", "nominalisers-gi-geot"],
    lessons: ["c1-iran-definitions", "c1-precisely", "c1-by-doing", "c1-point-lies-merely"],
  },
  {
    slug: "hada-doeda-sikida",
    title: "-하다, -되다, -시키다, -받다, -당하다: Voice with Sino-Korean Verbs",
    description:
      "How Sino-Korean nouns become active, passive and causative verbs: -하다 vs -되다, -받다 and -당하다, the overuse of -시키다 (소개시키다), and describing processes in science and medicine.",
    level: "C1",
    intro: [
      `Sino-Korean nouns like 결정, 발견, 교육 become verbs by adding 하다. Changing that light verb changes the voice: 결정하다 (decide), 결정되다 (be decided), 결정시키다 (make someone decide). Choosing well is a hallmark of good formal Korean.`,
    ],
    sections: [
      {
        heading: `-하다, -되다, -받다, -당하다`,
        body: [
          `-하다 is active: 정부가 계획을 발표했다. -되다 is passive or change of state: 계획이 발표되었다. -받다 is passive with a sense of receiving: 사랑받다, 인정받다, 초대받다. -당하다 is an unwanted passive: 사기당하다 (be swindled), 무시당하다 (be ignored).`,
        ],
        table: {
          headers: ["Noun", "-하다", "Passive"],
          rows: [
            ["결정", "결정하다", "결정되다"],
            ["발견", "발견하다", "발견되다"],
            ["인정", "인정하다", "인정받다"],
            ["무시", "무시하다", "무시당하다"],
          ],
        },
        examples: [
          { ko: "회의에서 새 일정이 결정되었다.", en: "A new schedule was decided at the meeting." },
          { ko: "그는 실력을 인정받았다.", en: "His skill was recognised." },
          { ko: "온라인에서 사기당하는 사람이 늘고 있다.", en: "More and more people are being scammed online." },
        ],
      },
      {
        heading: `-시키다 and its overuse`,
        body: [
          `-시키다 is causative: 'make someone do': 아이를 입원시키다 (have the child admitted), 학생들에게 발표를 시키다. Using it where -하다 is meant is a widely criticised habit: 소개시켜 주세요 for 소개해 주세요, 교육시키다 for 교육하다. Natives say it, but careful writing avoids it.`,
          `In describing processes (science, medicine), -되다 and -아 / 어지다 are common: 물이 수증기로 변화된다, 혈관이 좁아진다.`,
        ],
        examples: [
          { ko: "친구를 소개해 줄게.", en: "I'll introduce you to a friend." },
          { ko: "의사는 환자를 바로 입원시켰다.", en: "The doctor had the patient admitted immediately." },
          { ko: "열을 가하면 물이 수증기로 변한다.", en: "When heated, water turns into steam." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "제 친구를 소개시켜 드릴게요.",
        right: "제 친구를 소개해 드릴게요.",
        why: `You're doing the introducing, so -하다 is the precise form. -시키다 here is common in speech but criticised in careful Korean.`,
        register: true,
      },
      {
        wrong: "새 규칙이 결정했다.",
        right: "새 규칙이 결정되었다.",
        why: `A rule can't decide; with the thing as subject, use -되다.`,
      },
      {
        wrong: "선생님에게 칭찬당했어요.",
        right: "선생님에게 칭찬받았어요.",
        why: `-당하다 is for unwelcome things. Praise is received: 칭찬받다.`,
      },
    ],
    faqs: [
      {
        q: `Is 소개시키다 wrong?`,
        a: `It's in the dictionary as 'have someone introduce', and very common in speech. As a plain substitute for 소개하다, editors and teachers flag it.`,
      },
      {
        q: `Can every -하다 noun take -되다?`,
        a: `No: only nouns for actions that can happen to something. 공부되다, for example, has a special meaning ('be a learning experience').`,
      },
    ],
    related: ["passive-verbs", "causative-verbs", "sino-korean-affixes", "writing-style-translationese"],
    lessons: ["c1-sino-passives", "c1-causative-overuse", "c1-describing-processes"],
  },
  {
    slug: "fiction-narration",
    title: "Reading Fiction: Narrative Tense, -는 것이었다, -(으)ㄹ락 말락, -는 둥 마는 둥, -(으)ㄴ 양, -(으)ㄹ 법하다",
    description:
      "The grammar of Korean short fiction: narrative past and present, the distancing -는 것이었다 and -(으)ㄹ 터였다, -곤 했다 and -(으)ㄴ 채, -(으)ㄹ락 말락 (almost), -는 둥 마는 둥 (half-heartedly), -(으)ㄴ / 는 양 (as if), -(으)ㄹ 법하다 (plausible), and parsing long modifiers.",
    level: "C1",
    intro: [
      `Korean fiction is written in 한다체 past, but it moves in and out of the present, piles up long modifier clauses, and uses a set of descriptive endings rarely heard in speech. This guide prepares you to read modern short stories.`,
    ],
    sections: [
      {
        heading: `Narrative tense and distance`,
        body: [
          `Narration is normally past (-았 / 었다), but writers switch to the present (-ㄴ / 는다) for vividness or immediacy. -는 것이었다 adds narrative distance, as if the narrator explains: 그는 매일 밤 창밖을 바라보는 것이었다. -(으)ㄹ 터였다 is a past expectation: 내일이면 그가 돌아올 터였다 (He was supposed to return tomorrow).`,
          `-곤 했다 'used to' and -(으)ㄴ 채 'with ... left as it was' are everywhere in fiction: 그녀는 불을 켠 채 잠이 들곤 했다.`,
        ],
        examples: [
          { ko: "그는 아무 말 없이 창밖만 바라보는 것이었다.", en: "He would simply gaze out of the window without a word." },
          { ko: "그 집에는 아무도 살지 않을 터였다.", en: "Nobody was supposed to be living in that house." },
          { ko: "어머니는 내가 잠들 때까지 노래를 불러 주시곤 했다.", en: "Mother used to sing to me until I fell asleep." },
        ],
      },
      {
        heading: `Descriptive endings`,
        body: [
          `-(으)ㄹ락 말락 'on the verge of, almost': 손이 닿을락 말락 했다 (My hand could just about reach). -는 둥 마는 둥 'half-heartedly': 밥을 먹는 둥 마는 둥 하고 나갔다. -(으)ㄴ / 는 양 'as if, pretending': 아무 일도 없었던 양 웃었다. -(으)ㄹ 법하다 'plausible, only natural': 화가 날 법도 하다 (It's natural to be angry).`,
        ],
        examples: [
          { ko: "비가 올락 말락 하는 하늘이었다.", en: "The sky looked as though it might rain at any moment." },
          { ko: "그는 대답을 하는 둥 마는 둥 했다.", en: "He barely bothered to answer." },
          { ko: "그녀는 아무것도 모르는 양 고개를 갸웃했다.", en: "She tilted her head as if she knew nothing." },
          { ko: "그런 일을 겪었으니 화가 날 법도 하다.", en: "After going through that, it's only natural to be angry." },
        ],
      },
      {
        heading: `Parsing long modifiers`,
        body: [
          `Korean modifiers come before the noun, so a long noun phrase can stretch across a whole line: 어린 시절 할머니가 매일 아침 끓여 주시던 된장찌개 냄새. Read it from the head noun outward: 냄새 (smell) ← 된장찌개 (of doenjang stew) ← 할머니가 끓여 주시던 (that grandma used to make) ← 어린 시절 매일 아침 (every morning in my childhood).`,
        ],
        examples: [
          { ko: "어린 시절 할머니가 매일 아침 끓여 주시던 된장찌개 냄새가 났다.", en: "There was the smell of the doenjang stew Grandma used to make every morning when I was a child." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "손이 닿을락 말락이에요.",
        right: "손이 닿을락 말락 해요.",
        why: `-(으)ㄹ락 말락 is followed by 하다.`,
      },
      {
        wrong: "밥을 먹는 둥 안 먹는 둥 했다.",
        right: "밥을 먹는 둥 마는 둥 했다.",
        why: `The fixed expression is -는 둥 마는 둥.`,
      },
      {
        wrong: "화가 나는 법하다.",
        right: "화가 날 법하다.",
        why: `법하다 'plausible' takes -(으)ㄹ. (-는 법이다 is a different pattern: a general truth.)`,
      },
    ],
    faqs: [
      {
        q: `Why does the narrator suddenly switch to the present?`,
        a: `It's a stylistic choice: the present tense pulls the reader into the scene, much like the historic present in English.`,
      },
      {
        q: `Is -는 것이었다 the same as -았다?`,
        a: `The event is the same, but -는 것이었다 adds a reflective, slightly distanced or explanatory tone.`,
      },
    ],
    related: ["completed-actions", "storyteller-endings", "advanced-connectives-observed", "noun-modifiers"],
    lessons: [
      "c1-fiction-narrative-tense",
      "c1-narrative-it-was-that",
      "c1-used-to-and-as-it-was",
      "c1-almost-and-half-hearted",
      "c1-parsing-long-modifiers",
      "c1-dialogue-in-fiction",
      "c1-talking-about-literature",
      "c1-acting-as-if",
      "c1-only-natural",
    ],
  },
  {
    slug: "advanced-idioms-and-allusions",
    title: "Advanced Idioms, Allusions and Figurative Language",
    description:
      "Four-character idioms beyond B2 and the stories behind them (새옹지마, 형설지공), advanced body and emotion idioms, action metaphors (첫 단추를 끼우다, 물꼬를 트다), harder proverbs, and the figurative language of news headlines (빨간불이 켜지다, 직격탄을 맞다).",
    level: "C1",
    intro: [
      `At C1, idioms move from decoration to necessity: editorials, speeches and news headlines rely on them. Many four-character idioms come with a story, and knowing it makes the idiom stick.`,
    ],
    sections: [
      {
        heading: `Idioms with stories`,
        body: [
          `새옹지마 (the old man of the frontier's horse): his horse ran away (bad), came back with another (good), his son broke a leg riding it (bad), and so escaped the war (good). It means 'fortune and misfortune are hard to predict'. 형설지공 (the work of fireflies and snow): two poor scholars studied by firefly light and moonlight on snow; it means 'success through hard study'.`,
          `Others to know: 인과응보 (what goes around comes around), 사필귀정 (truth prevails in the end), 진퇴양난 (caught between a rock and a hard place), 사면초가 (surrounded on all sides), 감언이설 (sweet talk), 우유부단 (indecisive).`,
        ],
        examples: [
          { ko: "인생은 새옹지마라고 하잖아요.", en: "They do say life's ups and downs are hard to predict." },
          { ko: "그는 형설지공으로 마침내 시험에 합격했다.", en: "Through years of hard study, he finally passed the exam." },
          { ko: "회사는 진퇴양난에 빠졌다.", en: "The company found itself in a dilemma." },
        ],
      },
      {
        heading: `Body, emotion and action metaphors`,
        body: [
          `Body and emotion: 발목을 잡다 (hold back), 어깨가 무겁다 (feel the weight of responsibility), 코가 납작해지다 (be humbled), 등을 돌리다 (turn your back on), 가슴이 철렁하다 (heart sinks), 애가 타다 (be anxious). Action metaphors: 첫 단추를 잘 끼우다 (get off to a good start), 발을 빼다 (pull out), 칼을 빼 들다 (take decisive action), 물꼬를 트다 (open the way).`,
        ],
        examples: [
          { ko: "새 팀장을 맡아서 어깨가 무겁다.", en: "Taking over as team leader, I feel the weight of responsibility." },
          { ko: "아이가 안 보여서 가슴이 철렁했다.", en: "My heart sank when I couldn't see my child." },
          { ko: "이번 회담이 대화의 물꼬를 텄다.", en: "These talks opened the way to dialogue." },
        ],
      },
      {
        heading: `Figurative news language`,
        body: [
          `Headlines love metaphor: 경제에 빨간불이 켜졌다 (warning lights for the economy), 청신호 (a green light), 직격탄을 맞다 (take a direct hit), 숨 고르기 (catching one's breath, a pause), 날개를 달다 (take off), 발등에 불이 떨어지다 (face an urgent crisis).`,
        ],
        examples: [
          { ko: "수출 감소로 경제에 빨간불이 켜졌다.", en: "Falling exports have set off warning lights for the economy." },
          { ko: "자영업자들이 경기 침체의 직격탄을 맞았다.", en: "The self-employed have taken the brunt of the downturn." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "합격 소식에 가슴이 철렁했어요.",
        right: "합격 소식에 가슴이 벅찼어요.",
        why: `가슴이 철렁하다 is a shock or fear; for joy, 벅차다 or 설레다.`,
      },
      {
        wrong: "첫 단추를 잘 입었다.",
        right: "첫 단추를 잘 끼웠다.",
        why: `Buttons are done up with 끼우다; the idiom's verb is fixed.`,
      },
      {
        wrong: "사장님 앞에서: 사장님 우유부단하시네요.",
        right: "사장님, 조금 더 검토가 필요할 것 같습니다.",
        why: `Character idioms judge people. Using them about a superior is risky.`,
        register: true,
      },
    ],
    faqs: [
      {
        q: `How many 사자성어 do I need?`,
        a: `For TOPIK 5-6 and reading the news, a working knowledge of 100-150 common ones goes a long way.`,
      },
      {
        q: `Are idioms OK in academic writing?`,
        a: `Sparingly. They suit editorials and speeches better than papers.`,
      },
    ],
    related: ["idioms-and-proverbs", "sound-and-shape-words", "editorial-and-speech-rhetoric", "translation-precision"],
    lessons: [
      "c1-idioms-in-sentences",
      "c1-idioms-fate",
      "c1-idioms-character",
      "c1-idioms-predicaments",
      "c1-idioms-effort-study",
      "c1-idioms-relationships",
      "c1-idioms-speech",
      "c1-allusion-stories",
      "c1-contrast-idiom-near-pairs",
      "c1-body-idioms-advanced",
      "c1-emotion-idioms",
      "c1-action-metaphors",
      "c1-proverbs-advanced",
      "c1-figurative-news",
    ],
  },
  {
    slug: "speech-levels-and-register",
    title: "Style and Register: One Message, Five Audiences",
    description:
      "Choosing the right register: the four speech levels in use today (하십시오체, 해요체, 해체, 한다체), spoken vs written word choice (되게 / 매우, 근데 / 그런데), lecture and broadcast style, reformulation markers (즉, 다시 말해), translationese (번역투), and softening or sharpening tone.",
    level: "C1",
    intro: [
      `At C1 the question is rarely 'is this grammatical?' and more often 'is this right for this listener and this medium?'. The same message to a friend, a parent, a boss, a client and a newspaper reader needs five different versions.`,
    ],
    sections: [
      {
        heading: `The register map`,
        body: [
          `Four speech levels are in everyday use. 하십시오체 (-습니다) is formal: announcements, presentations, the military, first meetings. 해요체 (-아 / 어요) is polite: most daily speech with non-intimates. 해체 (반말, -아 / 어) is intimate. 한다체 (-ㄴ / 는다) is the written plain style, and is also used to intimates in speech.`,
          `Word choice shifts with register too: 되게 / 엄청 (spoken) vs 매우 / 상당히 (written), 근데 vs 그런데, 그래서 vs 따라서, 진짜 vs 정말.`,
        ],
        table: {
          headers: ["Audience", "Version"],
          rows: [
            ["friend", "나 내일 못 가. 미안!"],
            ["parent", "엄마, 저 내일 못 가요. 죄송해요."],
            ["boss", "부장님, 죄송하지만 내일은 참석이 어렵겠습니다."],
            ["client (email)", "부득이한 사정으로 내일 회의에 참석하지 못하게 되었습니다."],
            ["notice", "내일 회의 불참"],
          ],
        },
        examples: [
          { ko: "그 영화 되게 재밌었어.", en: "That film was really good." },
          { ko: "이 영화는 상당히 흥미로운 작품이다.", en: "This film is a highly engaging work." },
        ],
      },
      {
        heading: `Lectures and broadcasts`,
        body: [
          `Lectures mix 습니다 and 요 with signposts: 자, 오늘은 ...에 대해 알아보겠습니다; 다음으로; 정리하면. Reformulation markers: 즉 (that is), 다시 말해 (in other words), 이를테면 (for instance). Broadcast news uses 습니다 throughout: ...것으로 전해졌습니다, ...기자가 보도합니다.`,
        ],
        examples: [
          { ko: "자, 오늘은 조선 시대의 신분 제도에 대해 알아보겠습니다.", en: "Right, today we'll look at the class system of the Joseon period." },
          { ko: "즉, 수요가 공급보다 많다는 뜻입니다.", en: "That is, demand exceeds supply." },
        ],
      },
      {
        heading: `Translationese (번역투)`,
        body: [
          `Calques from English and Japanese make Korean sound stiff: ...에 있어서 (in, with regard to), 회의를 가지다 (to have a meeting; say 회의를 하다), 가장 ... 중의 하나 (one of the most), heavy 에 의해 passives, and plural 들 everywhere. Natural Korean prefers verbs, active sentences and dropped subjects.`,
        ],
        examples: [
          { ko: "다음 주에 회의를 할 예정입니다.", en: "We're planning to hold a meeting next week." },
          { ko: "교육은 아이들의 미래에 큰 영향을 준다.", en: "Education has a big influence on children's future." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "우리는 다음 주에 회의를 가질 것이다.",
        right: "다음 주에 회의를 할 예정이다.",
        why: `회의를 가지다 is a calque of 'have a meeting'; Korean says 회의를 하다.`,
        register: true,
      },
      {
        wrong: "교육에 있어서 가장 중요한 것은 ...",
        right: "교육에서 가장 중요한 것은 ...",
        why: `에 있어서 is translationese; 에서 is enough.`,
        register: true,
      },
      {
        wrong: "부장님께: 내일 못 가. 미안!",
        right: "부장님, 죄송하지만 내일은 참석이 어렵겠습니다.",
        why: `반말 to a boss is a serious register error.`,
        register: true,
      },
    ],
    faqs: [
      {
        q: `Is 하십시오체 too stiff for daily life?`,
        a: `It's normal for service staff, announcements and formal meetings. Among colleagues, 해요체 is usual, with 습니다 for formal moments.`,
      },
      {
        q: `Can I use 한다체 when speaking?`,
        a: `To close friends and younger people, yes (나 간다!). Otherwise it's the written style.`,
      },
    ],
    related: ["formal-speech-hamnida", "casual-speech-banmal", "writing-style-translationese", "old-speech-levels"],
    lessons: [
      "c1-register-map",
      "c1-five-audiences-1",
      "c1-five-audiences-2",
      "c1-spoken-vs-written-words",
      "c1-translationese",
      "c1-tone-softening-sharpening",
      "c1-lecture-signposts",
      "c1-reformulation-markers",
      "c1-spoken-academic-endings",
      "c1-broadcast-news-style",
    ],
  },
];
