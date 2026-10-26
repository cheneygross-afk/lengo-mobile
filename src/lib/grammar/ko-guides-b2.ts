// Synced from cheneygross-afk/lengo:src/lib/grammar/ko-guides-b2.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { KoGrammarGuide } from "./ko-types";

// Korean grammar guides, Upper-intermediate (B2, TOPIK 4). See the notes at
// the top of ./ko-types.ts.
export const KO_B2_GUIDES: KoGrammarGuide[] = [
  {
    slug: "contrast-and-concession-b2",
    title: "Whereas, Despite, Just Because: 반면에, -는 데 반해, -(으)ㅁ에도 불구하고, -는데도, -다고 해서",
    description:
      "The B2 toolkit for comparing two sides and for results that go against expectation: -(으)ㄴ / 는 반면에, -는 데 반해, -(으)ㅁ에도 불구하고, -(으)ㄴ / 는데도 and -다고 해서, and how each differs from plain -지만 and -는데.",
    level: "B2",
    intro: [
      `Earlier you contrasted with -지만 and -는데. They still work, but they are blunt tools: -지만 is a plain 'but', and -는데 is so soft that it often isn't a contrast at all. Upper-intermediate Korean, especially in writing, TOPIK essays and the news, needs more precise contrast.`,
      `This guide covers two families. The first compares two sides (반면에, 데 반해): 'whereas, on the other hand'. The second is concession (-(으)ㅁ에도 불구하고, -는데도, -다고 해서): 'even though, despite, just because'.`,
    ],
    sections: [
      {
        heading: `Whereas: -(으)ㄴ / 는 반면에`,
        body: [
          `반면 means 'the opposite side'. After a clause it uses the modifier forms: adjectives and past verbs take -(으)ㄴ 반면에, present verbs take -는 반면에, and nouns take 인 반면에. 에 is optional: 비싼 반면 is common in writing.`,
          `Use it to set two subjects side by side (서울 vs 지방) or two sides of one thing (월세: 목돈이 필요 없다 vs 돈이 모이지 않다). It sounds balanced and neutral, so it is the default in essays. It can also stand at the start of a sentence: 반면에, 지방은 ...`,
        ],
        table: {
          headers: ["Stem", "Form", "Example"],
          rows: [
            ["adjective", "-(으)ㄴ 반면에", "비싼 반면에, 좋은 반면에"],
            ["verb, present", "-는 반면에", "늘어나는 반면에, 먹는 반면에"],
            ["verb, past", "-(으)ㄴ 반면에", "늘어난 반면에"],
            ["noun", "인 반면에", "학생인 반면에"],
          ],
        },
        examples: [
          { ko: "서울은 집값이 비싼 반면에 일자리가 많아요.", en: "Housing in Seoul is expensive, but on the other hand there are lots of jobs." },
          { ko: "월세는 목돈이 필요 없는 반면에 돈이 모이지 않는다.", en: "Monthly rent needs no lump sum, but on the other hand you don't save any money." },
          { ko: "형은 말이 많은 반면 동생은 조용한 편이다.", en: "The older brother talks a lot, whereas the younger one is rather quiet." },
        ],
      },
      {
        heading: `In contrast to: -는 데 반해`,
        body: [
          `데 here is the dependent noun 'case, situation', so there is a space: 늘어나는 데 반해. It means much the same as 반면에, but it is more formal and is a favourite of reports and the news, especially with statistics. Adjectives and past verbs take -(으)ㄴ 데 반해.`,
        ],
        examples: [
          { ko: "남성 흡연율은 감소한 데 반해 여성 흡연율은 증가했다.", en: "The smoking rate fell among men, whereas it rose among women." },
          { ko: "수도권 인구는 늘어나는 데 반해 지방 인구는 줄어들고 있다.", en: "The population of the capital region is growing, while the regions are shrinking." },
        ],
      },
      {
        heading: `Despite: -(으)ㅁ에도 불구하고 and -(으)ㄴ / 는데도`,
        body: [
          `-(으)ㅁ에도 불구하고 turns the clause into a noun with -(으)ㅁ and adds 에도 불구하고 'regardless even of': 비가 옴에도 불구하고, 노력했음에도 불구하고. With a noun, use N에도 불구하고: 많은 반대에도 불구하고. It is formal: perfect for writing, speeches and the news.`,
          `In conversation, use -(으)ㄴ / 는데도: 아침을 먹었는데도 배가 고파요 (I'm hungry even though I ate breakfast). It means the result is surprising given the situation. Compare -아 / 어도, which is 'even if' (hypothetical or general): 비가 와도 갈 거예요 'I'll go even if it rains', but 비가 오는데도 갔어요 'I went even though it was raining'.`,
        ],
        examples: [
          { ko: "늦은 시간에도 불구하고 많은 분들이 와 주셨습니다.", en: "Despite the late hour, many people came." },
          { ko: "정부의 지원에도 불구하고 출산율은 계속 떨어지고 있다.", en: "Despite government support, the birth rate keeps falling." },
          { ko: "약을 먹는데도 감기가 안 나아요.", en: "I'm taking medicine, but my cold isn't getting better." },
          { ko: "주말인데도 회사에 나가야 해요.", en: "Even though it's the weekend, I have to go into the office." },
        ],
      },
      {
        heading: `Just because ...: -다고 해서`,
        body: [
          `-다고 해서 heads off a hasty conclusion: 'just because X, it doesn't follow that Y'. It is built on reported speech (-다고 하다), so it takes the same forms: 산다고 해서, 비싸다고 해서, 학생이라고 해서. The second half is usually negative, very often -는 것은 아니다.`,
        ],
        examples: [
          { ko: "혼자 산다고 해서 다 외로운 것은 아니다.", en: "Just because you live alone doesn't mean you're lonely." },
          { ko: "비싸다고 해서 꼭 좋은 건 아니에요.", en: "Just because it's expensive doesn't mean it's good." },
          { ko: "나이가 많다고 해서 일을 못 하는 건 아니에요.", en: "Being older doesn't mean you can't do the job." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "서울은 비싸는 반면에 일자리가 많아요.",
        right: "서울은 비싼 반면에 일자리가 많아요.",
        why: `비싸다 is an adjective, so it takes -(으)ㄴ, not -는.`,
      },
      {
        wrong: "비가 오음에도 불구하고 행사를 진행했다.",
        right: "비가 옴에도 불구하고 행사를 진행했다.",
        why: `After a vowel stem, the noun form is -ㅁ joined to the syllable: 오다 → 옴, 하다 → 함.`,
      },
      {
        wrong: "아침을 먹어도 배가 고팠어요.",
        right: "아침을 먹었는데도 배가 고팠어요.",
        why: `For a real past fact that didn't have the expected result, use -는데도. -아 / 어도 is 'even if' and sounds odd about one specific past event.`,
        register: true,
      },
      {
        wrong: "인구가 늘어나는데 반해 일자리는 줄었다.",
        right: "인구가 늘어나는 데 반해 일자리는 줄었다.",
        why: `데 is a separate noun here, so it is spaced. -는데 written together is the background ending.`,
      },
      {
        wrong: "날씨가 좋음에도 불구하고 우리 산책할래?",
        right: "날씨도 좋은데 우리 산책할래?",
        why: `-(으)ㅁ에도 불구하고 is formal and means 'despite'. A casual suggestion with a reason uses -는데.`,
        register: true,
      },
    ],
    faqs: [
      {
        q: `Is 반면에 the same as 하지만?`,
        a: `Not quite. 하지만 can introduce any kind of 'but'. 반면에 is specifically 'on the other hand': two sides compared. If the second sentence isn't a comparison, 반면에 sounds odd.`,
      },
      {
        q: `Can I use 불구하고 without 에도?`,
        a: `In fixed phrases like 그럼에도 불구하고 ('nevertheless') you always keep 에도. In speech people sometimes drop 불구하고 and just say 그럼에도.`,
      },
    ],
    related: ["background-and-concession", "linking-go-aseo-jiman", "adding-points", "argument-essay-language"],
    lessons: [
      "b2-whereas-1",
      "b2-whereas-2",
      "b2-in-contrast-to",
      "b2-contrast-clinic-whereas-but",
      "b2-despite-1",
      "b2-despite-2",
      "b2-just-because",
      "b2-contrast-even-though-forms",
    ],
  },
  {
    slug: "adding-points",
    title: "Adding Points: 뿐만 아니라, -는 데다가, -기도 하다",
    description:
      "Piling up reasons and facts: N뿐만 아니라, -(으)ㄹ 뿐만 아니라, -(으)ㄴ / 는 데다가 and -기도 하고 -기도 하다, with how they differ from a simple -고.",
    level: "B2",
    intro: [
      `-고 lists things neutrally: 싸고 맛있어요. At B2 you need ways to add weight: 'not only ... but also', 'on top of that', 'both ... and'. These are the patterns reviewers, essay writers and anyone making a case reach for.`,
    ],
    sections: [
      {
        heading: `Not only ... but also: 뿐만 아니라`,
        body: [
          `With a noun, attach 뿐만 아니라 directly: 영어뿐만 아니라 중국어도. With verbs and adjectives, use -(으)ㄹ 뿐만 아니라, and -았 / 었을 뿐만 아니라 for the past. The second clause usually has 도 (also) or 까지 (even).`,
          `It is neutral and sits comfortably in both speech and writing. In essays, 뿐만 아니라 also starts a sentence: 뿐만 아니라, 이 정책은 ... (Moreover, ...). A shorter written form is 뿐 아니라.`,
        ],
        examples: [
          { ko: "그는 영어뿐만 아니라 중국어도 잘한다.", en: "He speaks not only English but also Chinese well." },
          { ko: "이 식당은 음식이 맛있을 뿐만 아니라 가격도 싸요.", en: "This restaurant's food isn't just tasty, it's cheap too." },
          { ko: "민수 씨는 늦었을 뿐만 아니라 연락도 안 했어요.", en: "Minsu was not only late, he didn't even get in touch." },
          { ko: "그는 가수일 뿐만 아니라 배우이기도 하다.", en: "He's not only a singer but also an actor." },
        ],
      },
      {
        heading: `On top of that: -(으)ㄴ / 는 데다가`,
        body: [
          `-는 데다가 (action verbs, present) and -(으)ㄴ 데다가 (adjectives and past verbs) add one fact on top of another, often to build up a complaint or a reason: 'and what's more'. 가 is often dropped: 비싼 데다. The second clause often has 까지 or 도.`,
          `Both halves should point the same way: two good things or two bad things. That is why it is so common before a conclusion: 비가 오는 데다가 바람까지 불어서 그냥 집에 있었어요.`,
        ],
        examples: [
          { ko: "비가 오는 데다가 바람까지 불어요.", en: "It's raining, and on top of that it's windy." },
          { ko: "그 집은 넓은 데다가 역에서도 가까워요.", en: "That flat is spacious and it's close to the station too." },
          { ko: "어제는 잠을 못 잔 데다가 아침도 못 먹었다.", en: "Yesterday I didn't sleep, and on top of that I missed breakfast." },
        ],
      },
      {
        heading: `Both this and that: -기도 하고 -기도 하다`,
        body: [
          `-기도 하다 means 'also does / is'. Doubled, it gives mixed feelings or alternating habits: 기쁘기도 하고 섭섭하기도 해요 (I'm both happy and sad). Single -기도 하다 adds 'sometimes, also': 주말에는 혼자 영화를 보기도 해요 (At weekends I sometimes watch films on my own).`,
        ],
        examples: [
          { ko: "졸업해서 기쁘기도 하고 섭섭하기도 해요.", en: "I'm both happy and a bit sad to graduate." },
          { ko: "주말에는 집에서 쉬기도 하고 친구를 만나기도 해요.", en: "At weekends I sometimes rest at home and sometimes meet friends." },
          { ko: "그 영화는 무섭기도 하지만 감동적이기도 하다.", en: "That film is scary but also moving." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "맛있을 뿐만 아니라 비싸요.",
        right: "맛있을 뿐만 아니라 싸기도 해요.",
        why: `뿐만 아니라 adds a point in the same direction. For a good point and a bad point, use 반면에 or -지만: 맛있지만 비싸요.`,
      },
      {
        wrong: "영어 뿐만 아니라 중국어도 해요.",
        right: "영어뿐만 아니라 중국어도 해요.",
        why: `뿐 after a noun is a particle and is written together with it. After a verb (-(으)ㄹ 뿐) it is spaced.`,
      },
      {
        wrong: "비가 오는 데다가 날씨가 좋았어요.",
        right: "비가 오는 데다가 바람까지 불었어요.",
        why: `-는 데다가 stacks two points the same way. 'It rained and the weather was nice' contradicts itself.`,
      },
      {
        wrong: "넓는 데다가 싸요.",
        right: "넓은 데다가 싸요.",
        why: `Adjectives take -(으)ㄴ 데다가.`,
      },
    ],
    faqs: [
      {
        q: `How is -는 데다가 different from -고?`,
        a: `-고 just lists. -는 데다가 says the second point makes the situation even more so, and it often leads to a conclusion with -아서 or 그래서.`,
      },
      {
        q: `Can 뿐만 아니라 end a sentence?`,
        a: `Not on its own. But a sentence can start with 뿐만 아니라 or 그뿐만 아니라 to add a new point: 'Not only that, ...'.`,
      },
    ],
    related: ["contrast-and-concession-b2", "particles-even-at-least", "argument-essay-language", "dependent-noun-de"],
    lessons: [
      "b2-not-only-but-also-1",
      "b2-not-only-but-also-2",
      "b2-on-top-of-that",
      "b2-both-this-and-that",
      "b2-contrast-clinic-adding",
    ],
  },
  {
    slug: "let-alone-rather-than",
    title: "Let Alone, I'd Rather, Instead Of: 커녕, -(으)ㄹ 바에야, -느니, -(으)ㄹ 게 아니라",
    description:
      "Patterns for disappointed expectations and choices between bad options: N은 / 는커녕, -기는커녕, -(으)ㄹ 바에야 차라리, -느니 차라리 and -(으)ㄹ 게 아니라, with 차라리 vs 오히려.",
    level: "B2",
    intro: [
      `These patterns all carry a strong attitude. 커녕 says 'far from X, not even Y'. -(으)ㄹ 바에야 and -느니 say 'if it comes to X, I'd rather Y'. -(으)ㄹ 게 아니라 says 'instead of just X, we should Y'. Get them right and your Korean sounds opinionated in a very native way.`,
    ],
    sections: [
      {
        heading: `Let alone: 커녕`,
        body: [
          `N은 / 는커녕 means 'far from N' or 'let alone N'. The second clause is negative and usually has 도, 조차 or 마저: 밥은커녕 물도 못 마셨어요 (I couldn't even drink water, let alone eat). With verbs, use -기는커녕: 쉬기는커녕.`,
          `With 오히려, -기는커녕 says the opposite happened: 칭찬을 받기는커녕 오히려 혼났어요 (Far from being praised, I got told off).`,
        ],
        examples: [
          { ko: "너무 바빠서 밥은커녕 물도 못 마셨어요.", en: "I was so busy I couldn't even drink water, let alone eat." },
          { ko: "고맙다는 말은커녕 인사도 안 했다.", en: "He didn't even say hello, let alone thank me." },
          { ko: "주말에 쉬기는커녕 평일보다 더 바빴어요.", en: "Far from resting at the weekend, I was busier than on weekdays." },
          { ko: "도와주기는커녕 오히려 방해만 했다.", en: "Far from helping, he only got in the way." },
        ],
      },
      {
        heading: `I'd rather: -(으)ㄹ 바에야 and -느니`,
        body: [
          `Both set up a bad option, then choose a less bad one, usually with 차라리 (rather) and -는 게 낫다 (it's better to). -(으)ㄹ 바에야 sounds firm and a little formal; -느니 is blunter and more conversational. Both attach to verbs.`,
          `차라리 means 'I'd rather, between two bad choices'. Don't confuse it with 오히려, 'on the contrary, unexpectedly', which describes a surprising result rather than a choice.`,
        ],
        examples: [
          { ko: "이렇게 비싸게 주고 살 바에야 차라리 안 사는 게 낫다.", en: "If I have to pay this much, I'd rather not buy it at all." },
          { ko: "억지로 할 바에야 안 하는 게 나아요.", en: "If you're going to do it against your will, it's better not to." },
          { ko: "이렇게 기다리느니 차라리 걸어가는 게 낫겠어요.", en: "Rather than wait like this, I'd sooner walk." },
          { ko: "그 사람이랑 일하느니 혼자 할래.", en: "I'd rather do it alone than work with him." },
        ],
      },
      {
        heading: `Instead of just ...: -(으)ㄹ 게 아니라`,
        body: [
          `-(으)ㄹ 게 아니라 (written: -(으)ㄹ 것이 아니라) rejects one course of action and proposes a better one: 걱정만 할 게 아니라 행동해야 해요 (Instead of just worrying, we need to act). It is common in essays and editorials with 만: 정부만 탓할 것이 아니라.`,
        ],
        examples: [
          { ko: "걱정만 할 게 아니라 뭐라도 해 봐요.", en: "Instead of just worrying, try doing something." },
          { ko: "정부만 탓할 것이 아니라 개인도 노력해야 한다.", en: "Instead of just blaming the government, individuals must also make an effort." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "밥은커녕 물을 마셨어요.",
        right: "밥은커녕 물도 못 마셨어요.",
        why: `커녕 needs a negative second clause: 'not even the smaller thing'.`,
      },
      {
        wrong: "쉬은커녕 일만 했어요.",
        right: "쉬기는커녕 일만 했어요.",
        why: `Verbs take -기는커녕, not 은커녕 directly.`,
      },
      {
        wrong: "이렇게 기다리느니 오히려 걸어가겠어요.",
        right: "이렇게 기다리느니 차라리 걸어가겠어요.",
        why: `Choosing the lesser evil is 차라리. 오히려 is for a result opposite to what you expected.`,
      },
      {
        wrong: "할아버지, 그렇게 하느니 차라리 안 하는 게 나아.",
        right: "할아버지, 그렇게 하시느니 차라리 안 하시는 게 나아요.",
        why: `-느니 is blunt; with an elder, add honorifics and 요 at least, or soften it.`,
        register: true,
      },
    ],
    faqs: [
      {
        q: `Is -기는커녕 the same as 'instead of'?`,
        a: `No. -기는커녕 means 'far from doing X' (the expectation failed). 'Instead of doing X' as a plain substitute is -는 대신에: 쉬는 대신에 일했어요.`,
      },
      {
        q: `Are -(으)ㄹ 바에야 and -느니 interchangeable?`,
        a: `Mostly, yes. -(으)ㄹ 바에야 sounds more deliberate and works in writing; -느니 sounds like an outburst in conversation.`,
      },
    ],
    related: ["particles-even-at-least", "contrast-and-concession-b2", "inevitability-and-truth", "politeness-strategies"],
    lessons: [
      "b2-let-alone-1",
      "b2-let-alone-2",
      "b2-would-rather-1",
      "b2-would-rather-2",
      "b2-contrast-clinic-rather",
      "b2-instead-of",
    ],
  },
  {
    slug: "inevitability-and-truth",
    title: "General Truths and Bottom Lines: 마련이다, 법이다, 셈이다, 게 뻔하다, -지 않으면 안 되다",
    description:
      "How Korean states what always happens, what amounts to what, and what has to be done: -기 / 게 마련이다, -는 법이다, -(으)ㄴ / 는 셈이다, 셈치다, -(으)ㄹ 게 뻔하다 and -지 않으면 안 되다.",
    level: "B2",
    intro: [
      `Korean has a set of noun-based endings for sounding wise, summing up, or predicting the obvious. They are short, they appear constantly in essays, dramas and advice, and each has a slightly different flavour.`,
    ],
    sections: [
      {
        heading: `Natural outcomes and moral rules: 마련이다 and 법이다`,
        body: [
          `-기 마련이다 (also -게 마련이다) states what naturally happens to anyone: 누구나 실수하기 마련이에요 (Everyone makes mistakes). -는 법이다 states a rule of life with a moral tone, often like a proverb: 급할수록 실수하는 법이에요 (The more you hurry, the more mistakes you make). Adjectives take -(으)ㄴ 법이다: 좋은 약은 입에 쓴 법이다.`,
          `Neither is used for a one-off prediction about a specific event. For that use -(으)ㄹ 것 같다 or -(으)ㄹ 게 뻔하다.`,
        ],
        examples: [
          { ko: "처음에는 누구나 긴장하기 마련이다.", en: "Everyone gets nervous at first." },
          { ko: "시간이 지나면 잊게 마련이에요.", en: "With time, you forget." },
          { ko: "열심히 하면 좋은 결과가 나오는 법이에요.", en: "If you work hard, good results come." },
          { ko: "좋은 약은 입에 쓴 법이다.", en: "Good medicine tastes bitter." },
        ],
      },
      {
        heading: `It amounts to: -(으)ㄴ / 는 셈이다 and 셈치다`,
        body: [
          `셈 means 'calculation'. -(으)ㄴ / 는 셈이다 says 'when you work it out, it comes to': 하루에 만 원씩 쓰는 셈이에요 (So that's ten thousand won a day). It also rounds things off: 거의 다 끝난 셈이에요 (It's as good as finished).`,
          `셈치다 (one word: 셈치고) means 'treat it as if': 속는 셈치고 한번 해 봐 (Just try it, even if you get taken in), 잃어버린 셈치고 잊어버려 (Consider it lost and forget about it).`,
        ],
        examples: [
          { ko: "한 달에 30만 원이니까 하루에 만 원씩 쓰는 셈이에요.", en: "That's 300,000 won a month, so it works out at 10,000 won a day." },
          { ko: "일주일에 6일 일하니까 거의 회사에서 사는 셈이다.", en: "I work six days a week, so I practically live at the office." },
          { ko: "속는 셈치고 한번 먹어 봐.", en: "Humour me and try it once." },
        ],
      },
      {
        heading: `Obviously going to: -(으)ㄹ 게 뻔하다`,
        body: [
          `뻔하다 means 'obvious'. -(으)ㄹ 게 뻔하다 makes a confident, usually unwelcome prediction from what you know: 지금 출발하면 늦을 게 뻔해요. For something already done, use -았 / 었을 게 뻔하다.`,
        ],
        examples: [
          { ko: "지금 출발하면 늦을 게 뻔해요.", en: "If we leave now, we'll obviously be late." },
          { ko: "엄마한테 말하면 또 잔소리를 하실 게 뻔하다.", en: "If I tell Mum, she'll obviously nag me again." },
        ],
      },
      {
        heading: `We simply must: -지 않으면 안 되다`,
        body: [
          `The double negative 'if not, it won't do' is a stronger 'must' than -아 / 어야 하다. It is common in speeches, editorials and urgent warnings: 지금 행동하지 않으면 안 된다.`,
        ],
        examples: [
          { ko: "지금 행동하지 않으면 안 된다.", en: "We must act now." },
          { ko: "일회용품을 줄이지 않으면 안 돼요.", en: "We simply have to cut down on disposables." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "내일 비가 오기 마련이에요.",
        right: "내일 비가 올 것 같아요.",
        why: `마련이다 is for general truths, not predictions about a specific day.`,
      },
      {
        wrong: "좋은 약은 입에 쓰는 법이다.",
        right: "좋은 약은 입에 쓴 법이다.",
        why: `쓰다 'bitter' is an adjective, so it takes -(으)ㄴ.`,
      },
      {
        wrong: "속는 셈 치고 해 봐.",
        right: "속는 셈치고 해 봐.",
        why: `셈치다 ('treat it as if') is a single verb in the standard dictionary, so it is written as one word, while 셈이다 keeps its space: 속는 셈이다.`,
      },
    ],
    faqs: [
      {
        q: `Which is more formal, 마련이다 or 법이다?`,
        a: `Both work in speech and writing. 법이다 sounds more like a lesson or proverb; 마련이다 sounds like a neutral observation.`,
      },
      {
        q: `Is 셈이다 always about numbers?`,
        a: `No. It often sums up any situation: 이 정도면 성공한 셈이에요 ('At this point, you could call it a success').`,
      },
    ],
    related: ["outcomes-and-habits", "must-may-mustnt", "degree-and-extremes", "idioms-and-proverbs"],
    lessons: [
      "b2-bound-to-happen",
      "b2-thats-how-it-is",
      "b2-contrast-clinic-truths",
      "b2-it-amounts-to-1",
      "b2-it-amounts-to-2",
      "b2-its-obvious",
      "b2-spiral-life-lessons",
      "b2-in-effect",
      "b2-simply-must",
    ],
  },
  {
    slug: "degree-and-extremes",
    title: "Degree and Extremes: 정도로, 만큼, 지경, -다 못해, 죽겠다",
    description:
      "Saying how much: -(으)ㄹ 정도로, -(으)ㄹ 만큼, -는 만큼, -(으)ㄹ 지경이다, -다 못해 and spoken -아 / 어 죽겠다, from report-neutral to dramatic.",
    level: "B2",
    intro: [
      `English says 'so tired I could drop'. Korean has a whole scale of patterns for degree, from neutral and written (정도로, 만큼) to dramatic and spoken (지경이다, 죽겠다). Choosing the right one is a matter of register as much as meaning.`,
    ],
    sections: [
      {
        heading: `So much that: -(으)ㄹ 정도로 and -(으)ㄹ 만큼`,
        body: [
          `-(으)ㄹ 정도로 describes a degree by its effect: 눈물이 날 정도로 웃었어요 (I laughed so hard I cried). At the end of a sentence: 너무 추워서 손이 얼 정도였어요. -(으)ㄹ 만큼 is a near-synonym: 배가 터질 만큼 먹었어요.`,
          `-(으)ㄴ / 는 만큼 has a second meaning: 'in proportion to, since': 노력한 만큼 결과가 나온다 (You get results in proportion to your effort), 인기가 많은 만큼 책임도 크다 (Since they're so popular, their responsibility is great).`,
        ],
        examples: [
          { ko: "눈물이 날 정도로 웃었어요.", en: "I laughed so much I cried." },
          { ko: "발이 아플 정도로 걸었다.", en: "We walked until our feet hurt." },
          { ko: "배가 터질 만큼 먹었어요.", en: "I ate until I was ready to burst." },
          { ko: "노력한 만큼 결과가 나온다.", en: "You get out what you put in." },
        ],
      },
      {
        heading: `At breaking point: -(으)ㄹ 지경이다 and -다 못해`,
        body: [
          `-(으)ㄹ 지경이다 means a bad situation has reached its limit: 배가 고파서 쓰러질 지경이에요 (I'm so hungry I could collapse). In writing: -(으)ㄹ 지경에 이르다 (to reach the point of).`,
          `-다 못해 with verbs means 'unable to keep doing it any longer, finally': 참다못해 한마디 했어요 (I couldn't hold back any longer and said something). (참다못해 has become one word.) With adjectives, it means 'so X it turns into Y': 얼굴이 하얗다 못해 파랗게 질렸다.`,
        ],
        examples: [
          { ko: "일이 너무 많아서 미칠 지경이다.", en: "I've got so much work I'm going out of my mind." },
          { ko: "기다리다 못해 먼저 갔어요.", en: "I couldn't wait any longer, so I went ahead." },
          { ko: "옆집이 너무 시끄러워서 참다못해 경찰에 신고했다.", en: "The neighbours were so loud that I finally called the police." },
        ],
      },
      {
        heading: `Spoken extremes: -아 / 어 죽겠다`,
        body: [
          `-아 / 어 죽겠다 'I'm going to die' is pure exaggeration, and it is casual and spoken only: 배고파 죽겠어, 피곤해 죽겠어요. It works for good feelings too: 좋아 죽겠다, 보고 싶어 죽겠어. Never use it in a report or essay.`,
        ],
        examples: [
          { ko: "배고파 죽겠어. 빨리 먹자.", en: "I'm starving. Let's eat." },
          { ko: "오늘 너무 피곤해 죽겠어요.", en: "I'm dead tired today." },
          { ko: "아기가 귀여워 죽겠어요.", en: "The baby is unbearably cute." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "눈물이 나는 정도로 웃었어요.",
        right: "눈물이 날 정도로 웃었어요.",
        why: `The degree pattern uses the future modifier -(으)ㄹ: 날 정도로.`,
      },
      {
        wrong: "보고서: 직원들이 피곤해 죽겠다고 응답했다.",
        right: "보고서: 직원들이 매우 피곤하다고 응답했다.",
        why: `죽겠다 is casual exaggeration; a report needs neutral language.`,
        register: true,
      },
      {
        wrong: "배가 고파서 쓰러질 지경이 좋아요.",
        right: "배가 고파서 쓰러질 지경이에요.",
        why: `지경 is for bad states only and is used with 이다 or 에 이르다.`,
      },
    ],
    faqs: [
      {
        q: `Is 정도로 the same as 너무?`,
        a: `너무 is just 'very, too'. 정도로 tells you how much by giving a consequence, which is more vivid and works in writing.`,
      },
      {
        q: `Can I say 죽겠다 to my boss?`,
        a: `With 요 it's common among colleagues (피곤해 죽겠어요), but in formal settings or to someone much more senior, say 많이 피곤하네요.`,
      },
    ],
    related: ["comparisons", "inevitability-and-truth", "spoken-korean-contractions-fillers", "the-more-and-change-over-time"],
    lessons: [
      "b2-so-much-that-1",
      "b2-so-much-that-2",
      "b2-on-the-verge",
      "b2-beyond-bearing",
      "b2-spoken-extremes",
      "b2-contrast-clinic-degree",
      "b2-to-the-degree",
    ],
  },
  {
    slug: "only-if-only-after",
    title: "Only If, Only After, As Long As: -아 / 어야, -아 / 어서야, -고서야, -는 한",
    description:
      "Conditions that must be met and things that happened late: -아 / 어야 (only if), -아 / 어서야 and -고서야 (only after), -는 한 (as long as, unless), compared with plain -(으)면 and -거든.",
    level: "B2",
    intro: [
      `-(으)면 is the all-purpose 'if'. But Korean also has a 'only if' ending, an 'only after' ending, and an 'as long as' pattern. They add the same emphasis that 'only' adds in English.`,
    ],
    sections: [
      {
        heading: `Only if: -아 / 어야`,
        body: [
          `-아 / 어야 states a condition that must be met first: 표가 있어야 들어갈 수 있어요 (You can only get in if you have a ticket). The second clause is usually about possibility or knowledge: 수 있다, 알다, 되다. -아 / 어야만 makes it even stronger.`,
          `You already know this ending from -아 / 어야 하다 'must': it is literally 'only if (you do X) is it OK'.`,
        ],
        examples: [
          { ko: "직접 가 봐야 알 수 있어요.", en: "You can only know if you go and see for yourself." },
          { ko: "열심히 해야만 합격할 수 있다.", en: "You can only pass if you work hard." },
          { ko: "자야 키가 커.", en: "You only grow if you sleep." },
        ],
      },
      {
        heading: `Only after: -아 / 어서야 and -고서야`,
        body: [
          `-아 / 어서야 says something happened late, or only after a certain point: 밤 12시가 넘어서야 집에 도착했어요 (I didn't get home until after midnight). -고서야 and -고 나서야 attach to an experience: 직접 겪고서야 알았어요 (It was only after I'd been through it myself that I understood).`,
        ],
        examples: [
          { ko: "서른 살이 돼서야 운전을 배웠다.", en: "I only learned to drive at thirty." },
          { ko: "몇 번이나 전화하고서야 연결이 됐어요.", en: "I only got through after calling several times." },
          { ko: "아프고 나서야 건강의 소중함을 알았다.", en: "Only after I got ill did I realise how precious health is." },
        ],
      },
      {
        heading: `As long as, unless: -는 한`,
        body: [
          `-는 한 'within the limit that' sets an ongoing condition: 내가 살아 있는 한 포기하지 않겠다 (As long as I live, I won't give up). With -지 않는 한 it means 'unless': 비가 오지 않는 한 행사는 예정대로 진행된다 (Unless it rains, the event will go ahead as planned). It is formal and sounds determined.`,
        ],
        examples: [
          { ko: "특별한 일이 없는 한 참석하겠습니다.", en: "Unless something comes up, I'll attend." },
          { ko: "규칙을 지키는 한 누구나 참여할 수 있다.", en: "Anyone can take part, as long as they follow the rules." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "표가 있어야 들어가세요.",
        right: "표가 있어야 들어갈 수 있어요.",
        why: `-아 / 어야 does not take a command or suggestion after it. Use 수 있다 or a statement.`,
      },
      {
        wrong: "밤 12시가 넘었어서야 도착했어요.",
        right: "밤 12시가 넘어서야 도착했어요.",
        why: `Tense goes on the final verb only: no -았 / 었 before -아서야.`,
      },
      {
        wrong: "비가 오지 않으면 한 행사를 해요.",
        right: "비가 오지 않는 한 행사를 해요.",
        why: `한 is a noun that follows the modifier -는: -지 않는 한.`,
      },
    ],
    faqs: [
      {
        q: `What's the difference between -아야 and -(으)면?`,
        a: `-(으)면 is a plain condition. -아야 says this condition, and only this condition, makes the result possible.`,
      },
      {
        q: `And -거든?`,
        a: `-거든 is a spoken 'if' that must be followed by a command, suggestion or intention: 도착하거든 연락해 (When you arrive, call me). -아야 can't be followed by a command.`,
      },
    ],
    related: ["conditionals-myeon", "time-links", "must-may-mustnt", "counterfactuals-and-impossibility"],
    lessons: ["b2-only-if", "b2-only-after-1", "b2-only-after-2", "b2-as-long-as", "b2-contrast-clinic-conditions"],
  },
  {
    slug: "as-you-know-as-if",
    title: "As You Know, As If, As Is: -다시피, -듯이, -(으)ㄴ / 는 듯하다, -는 대로",
    description:
      "Shared knowledge and comparison: 아시다시피, -다시피 하다 (practically), -듯이 (just as, as if), written -(으)ㄴ / 는 / (으)ㄹ 듯하다 (it seems) and -(으)ㄴ / 는 대로 (in the way that), compared with 처럼.",
    level: "B2",
    intro: [
      `This group of endings all compare one thing to another: what you already know, what something looks like, or how something was done. They're the polished alternatives to 처럼 and -는 것 같다.`,
    ],
    sections: [
      {
        heading: `As you know: -다시피`,
        body: [
          `-다시피 points to knowledge the listener shares. It only goes with verbs of knowing and perceiving: 알다, 보다, 듣다, 느끼다. Most often with honorifics: 아시다시피 (as you know), 보시다시피 (as you can see).`,
          `-다시피 하다 is a different, very useful pattern: 'to practically do something': 회사에서 살다시피 해요 (I practically live at the office).`,
        ],
        examples: [
          { ko: "아시다시피 다음 주부터 새 제도가 시행됩니다.", en: "As you know, the new system starts next week." },
          { ko: "보시다시피 매출이 크게 늘었습니다.", en: "As you can see, sales have risen sharply." },
          { ko: "시험 기간에는 도서관에서 살다시피 했다.", en: "During exams I practically lived in the library." },
        ],
      },
      {
        heading: `Just as, as if: -듯이 and -(으)ㄴ / 는 듯하다`,
        body: [
          `-듯이 makes a simile or a comparison to common knowledge: 돈을 물 쓰듯이 쓴다 (He spends money like water), 모두가 알듯이 (as everyone knows). The short form -듯 is common in writing.`,
          `-(으)ㄴ / 는 / (으)ㄹ 듯하다 is the written counterpart of -것 같다 'it seems': 곧 비가 올 듯하다. It's natural in essays, novels and news headlines (-할 듯). In speech, -것 같다 is more usual.`,
        ],
        examples: [
          { ko: "그 사람은 밥 먹듯이 거짓말을 한다.", en: "He lies as easily as he eats." },
          { ko: "땀이 비 오듯이 흘렀다.", en: "Sweat poured down like rain." },
          { ko: "그는 이미 알고 있는 듯했다.", en: "He seemed to know already." },
        ],
      },
      {
        heading: `In the way that: -(으)ㄴ / 는 대로`,
        body: [
          `-(으)ㄴ 대로 (past) and -는 대로 (present) mean 'exactly as': 들은 대로 말해 주세요 (Tell me exactly what you heard), 시키는 대로 했어요 (I did as I was told). With nouns: 계획대로, 마음대로. (-는 대로 also means 'as soon as' with future events: 도착하는 대로 연락할게요.)`,
        ],
        examples: [
          { ko: "생각한 대로 됐어요.", en: "It turned out just as I thought." },
          { ko: "약속한 대로 내일 다시 오겠습니다.", en: "As promised, I'll come back tomorrow." },
          { ko: "선생님이 설명하신 대로 해 보세요.", en: "Try doing it the way the teacher explained." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "먹다시피 맛있어요.",
        right: "드셔 보시면 아시겠지만 맛있어요.",
        why: `-다시피 'as you know' only goes with verbs of knowing and perceiving (알다, 보다, 듣다), not 먹다.`,
      },
      {
        wrong: "선생님 대로 하세요.",
        right: "선생님이 하신 대로 하세요.",
        why: `N대로 works with nouns like 계획, 순서, 마음. For a person, add the verb: 하신 대로.`,
      },
      {
        wrong: "친구랑 이야기할 때: 비가 올 듯해.",
        right: "비가 올 것 같아.",
        why: `-(으)ㄹ 듯하다 is grammatical but bookish in chat.`,
        register: true,
      },
    ],
    faqs: [
      {
        q: `-듯이 or 처럼?`,
        a: `처럼 attaches to nouns (꽃처럼). -듯이 attaches to verbs (물 쓰듯이). Many similes can use either: 물처럼 쓰다 / 물 쓰듯이 쓰다.`,
      },
      {
        q: `Is 아시다시피 polite?`,
        a: `Yes, in presentations and speeches. In a sensitive conversation it can sound like 'you should know this', so use it carefully.`,
      },
    ],
    related: ["guessing-and-seeming", "formal-connectives-for-writing", "beliefs-and-evidence", "noun-modifiers"],
    lessons: [
      "b2-as-you-know-1",
      "b2-as-you-know-2",
      "b2-just-as-as-if",
      "b2-it-seems-written",
      "b2-in-the-way-that",
      "b2-contrast-clinic-as-like",
    ],
  },
  {
    slug: "formal-connectives-for-writing",
    title: "Formal Connectives for Writing: -(으)며, -(으)나, -(으)므로, -고자, -(으)ㄴ 바",
    description:
      "The connectives of essays, reports and the news: -(으)며 (and, while), -(으)나 (but), -(으)므로 (because), -고자 (in order to, intending to) and -(으)ㄴ / 는 바 (as stated), and how to turn spoken sentences into written ones.",
    level: "B2",
    intro: [
      `Written Korean (한다체 essays, reports, articles) uses its own set of connectives. They make a text sound formal and compact. Using -고, -지만 and -아서 everywhere in an essay is grammatical but sounds like transcribed speech.`,
    ],
    sections: [
      {
        heading: `The written equivalents`,
        body: [
          `-(으)며 is written 'and' or 'while': 그는 의사이며 작가이다. -(으)나 is written 'but': 노력하였으나 결과는 좋지 않았다. -(으)므로 is written 'because': 위험하므로 출입을 금지한다. They take -았 / 었 for the past: 왔으며, 왔으나, 왔으므로.`,
          `Formal writing often uses the full forms 하였다 and 되었다; 했다 and 됐다 are also correct.`,
        ],
        table: {
          headers: ["Spoken", "Written", "Example"],
          rows: [
            ["-고", "-(으)며", "공기가 맑으며 물이 깨끗하다"],
            ["-지만", "-(으)나", "가격은 비싸나 품질이 좋다"],
            ["-아서 / -니까", "-(으)므로", "비가 많이 왔으므로 행사가 취소되었다"],
            ["-(으)려고", "-고자", "원인을 살펴보고자 한다"],
          ],
        },
        examples: [
          { ko: "이 지역은 공기가 맑으며 물이 깨끗하다.", en: "This area has clean air and clear water." },
          { ko: "음악을 들으며 산책했다.", en: "I took a walk while listening to music." },
          { ko: "가격은 비싸나 품질이 좋다.", en: "It is expensive, but the quality is good." },
          { ko: "비가 많이 왔으므로 행사가 취소되었다.", en: "As there was heavy rain, the event was cancelled." },
        ],
      },
      {
        heading: `Intending to: -고자`,
        body: [
          `-고자 하다 states a purpose or intention formally. It opens essays (이 글에서는 원인과 해결 방법을 살펴보고자 한다) and speeches (감사의 말씀을 드리고자 합니다). It is the formal counterpart of -(으)려고 하다.`,
        ],
        examples: [
          { ko: "이 글에서는 원인과 해결 방법을 살펴보고자 한다.", en: "This essay examines the causes and the solutions." },
          { ko: "여러분께 감사의 말씀을 드리고자 합니다.", en: "I would like to express my thanks to you all." },
        ],
      },
      {
        heading: `As stated: -(으)ㄴ / 는 바`,
        body: [
          `바 is a formal noun meaning 'what, the thing that'. -(으)ㄴ 바 있다 means 'has (once) done', a news favourite: 정부는 지난달 이 계획을 발표한 바 있다. -(으)ㄴ 바와 같이 means 'as': 앞에서 살펴본 바와 같이 (as we saw above), 위에서 언급한 바와 같이.`,
        ],
        examples: [
          { ko: "앞에서 살펴본 바와 같이 원인은 크게 두 가지이다.", en: "As we saw above, there are two main causes." },
          { ko: "정부는 지난달 이 계획을 발표한 바 있다.", en: "The government announced this plan last month." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "위험하므로 들어가지 마.",
        right: "위험하니까 들어가지 마.",
        why: `-(으)므로 is written and formal; it clashes with a casual command. Signs say 위험하므로 출입을 금지합니다.`,
        register: true,
      },
      {
        wrong: "열심히 공부함으로 합격했다.",
        right: "열심히 공부했으므로 합격했다.",
        why: `For 'because', the ending is -(으)므로, spelt with 므. -(으)ㅁ으로(써) means 'by doing': 공부함으로써 합격했다 'passed by studying' is also correct, but it says something different.`,
        register: true,
      },
      {
        wrong: "친구에게 문자: 내일 영화 보고자 해.",
        right: "내일 영화 보려고 해.",
        why: `-고자 is for formal speech and writing.`,
        register: true,
      },
    ],
    faqs: [
      {
        q: `Can I mix written connectives with 해요?`,
        a: `In speeches and presentations, yes: -고자 합니다, -(으)며 with 습니다 are normal. In a casual chat, no.`,
      },
      {
        q: `Is -(으)나 just a shortened -지만?`,
        a: `It means the same but belongs to writing. It also appears in set phrases: 늦었으나마 (late as it is), 그러나 (however).`,
      },
    ],
    related: ["written-style-handache", "formal-noun-phrases", "argument-essay-language", "purpose-endings"],
    lessons: [
      "b2-written-and-while",
      "b2-written-but",
      "b2-written-because",
      "b2-intending-to-formal",
      "b2-as-stated",
      "b2-practice-speech-to-paper",
    ],
  },
  {
    slug: "formal-noun-phrases",
    title: "Formal Postpositions: 에 대해, 에 따라, 에 비해, (으)로 인해, 을 통해, 에 의해",
    description:
      "The verb-based phrases that act like English prepositions in formal Korean: 에 대해 / 대한, 에 관해 / 관한, 에 따라 / 따른, 에 비해, (으)로 인해 / 인한, 을 / 를 통해 / 통한, 에 의해 / 의한, and when to use the adverb or the modifier form.",
    level: "B2",
    intro: [
      `English uses prepositions: about, according to, compared with, due to, through. Formal Korean builds them from a particle plus a verb: 에 대하다 'to face', 에 따르다 'to follow'. Each has two forms: an adverb form ending in -아 / 어 (대해) and a modifier form ending in -(으)ㄴ (대한), which goes before a noun.`,
    ],
    sections: [
      {
        heading: `Adverb form or modifier form?`,
        body: [
          `Use the -해 / -아 form before a verb: 환경에 대해 이야기했어요. Use the -한 / -른 form before a noun: 환경에 대한 이야기. This is the single most common error with these phrases.`,
          `대해 has a slightly more formal variant 대하여, 인해 has 인하여, and 따라 is the same in both registers.`,
        ],
        table: {
          headers: ["Meaning", "Before a verb", "Before a noun"],
          rows: [
            ["about", "에 대해(서)", "에 대한"],
            ["about (formal)", "에 관해(서)", "에 관한"],
            ["depending on, according to", "에 따라(서)", "에 따른"],
            ["compared with", "에 비해(서)", "에 비한 (rare)"],
            ["due to", "(으)로 인해(서)", "(으)로 인한"],
            ["through, via", "을 / 를 통해(서)", "을 / 를 통한"],
            ["by (an agent)", "에 의해(서)", "에 의한"],
          ],
        },
        examples: [
          { ko: "환경 문제에 대해 이야기했어요.", en: "We talked about environmental problems." },
          { ko: "환경 문제에 대한 관심이 높아지고 있다.", en: "Interest in environmental problems is growing." },
        ],
      },
      {
        heading: `In use`,
        body: [
          `에 따라 also means 'in accordance with': 규정에 따라 처리하겠습니다. 에 비해 can follow a clause with -(으)ㄴ / 는 데 비해: 노력한 데 비해 결과가 좋지 않았다. (으)로 인해 is the formal 'because of', used for causes of events, especially bad ones (태풍으로 인해). 에 의해 marks the agent of a passive: 경찰에 의해 체포되었다.`,
        ],
        examples: [
          { ko: "지역에 따라 날씨가 다르다.", en: "The weather varies by region." },
          { ko: "작년에 비해 관광객이 30% 늘었다.", en: "Tourist numbers rose 30% compared with last year." },
          { ko: "태풍으로 인해 항공편이 결항되었다.", en: "Flights were cancelled due to the typhoon." },
          { ko: "인터넷을 통해 신청할 수 있습니다.", en: "You can apply online." },
          { ko: "그 건물은 유명한 건축가에 의해 설계되었다.", en: "The building was designed by a famous architect." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "환경에 대해 문제가 심각하다.",
        right: "환경에 대한 문제가 심각하다.",
        why: `Before a noun (문제), use the modifier form 대한.`,
      },
      {
        wrong: "한국 문화에 대한 이야기했어요.",
        right: "한국 문화에 대해 이야기했어요.",
        why: `Before a verb (이야기하다), use the adverb form 대해.`,
      },
      {
        wrong: "친구한테: 비로 인해 못 갔어.",
        right: "비 때문에 못 갔어.",
        why: `(으)로 인해 is formal and written; in conversation say 때문에.`,
        register: true,
      },
      {
        wrong: "그 책은 김 작가에 의해 썼다.",
        right: "그 책은 김 작가가 썼다.",
        why: `에 의해 needs a passive verb (쓰였다). Better still, Korean prefers the active sentence. Overusing 에 의해 is classic translationese.`,
      },
    ],
    faqs: [
      {
        q: `대해 or 관해?`,
        a: `They mean the same. 관해 is slightly more formal and academic. 대해 is far more common.`,
      },
      {
        q: `Why does 에 의해 sound odd so often?`,
        a: `Korean prefers active sentences. 'The window was broken by the child' is better as 아이가 창문을 깼다. Keep 에 의해 for formal reports where the agent is officially relevant.`,
      },
    ],
    related: ["formal-connectives-for-writing", "news-and-data-language", "passive-verbs", "reasons-and-results"],
    lessons: [
      "b2-about-regarding",
      "b2-depending-on",
      "b2-compared-with",
      "b2-due-to",
      "b2-through-and-by",
      "b2-contrast-clinic-formal-postpositions",
    ],
  },
  {
    slug: "counterfactuals-and-impossibility",
    title: "If Only I Had, It Can't Be: -았 / 었더라면, -(으)ㄹ 뻔했다, -(으)ㄹ 리가 없다",
    description:
      "Talking about what didn't happen and what couldn't be true: -았 / 었더라면 ... -았 / 었을 텐데, spoken -았 / 었으면 ... -았 / 었을 거예요, mixed time, near misses with -(으)ㄹ 뻔했다 and disbelief with -(으)ㄹ 리가 없다.",
    level: "B2",
    intro: [
      `At B1 you met regret (-(으)ㄹ걸, -았 / 었어야 했는데) and near misses (-(으)ㄹ 뻔했다). B2 adds the full 'if only I had' counterfactual and strong disbelief.`,
    ],
    sections: [
      {
        heading: `If only I had: -았 / 었더라면`,
        body: [
          `-았 / 었더라면 sets up a past condition that didn't happen. The result usually ends in -았 / 었을 텐데 or -았 / 었을 거예요: 조금만 일찍 출발했더라면 비행기를 탔을 텐데 (If we'd left a little earlier, we'd have caught the plane).`,
          `In everyday speech, -았 / 었으면 does the same job: 우산을 가져왔으면 안 젖었을 거예요. The result can also be in the present ('mixed time'): 그때 열심히 공부했더라면 지금 더 좋은 직장에 다니고 있을 텐데.`,
        ],
        examples: [
          { ko: "그때 말해 줬더라면 도와줬을 텐데.", en: "If you'd told me then, I would have helped." },
          { ko: "우산을 가져왔으면 안 젖었을 거예요.", en: "If I'd brought an umbrella, I wouldn't have got wet." },
          { ko: "그때 그 집을 샀더라면 지금쯤 부자가 됐을 거야.", en: "If I'd bought that flat then, I'd be rich by now." },
        ],
      },
      {
        heading: `Near misses: -(으)ㄹ 뻔했다`,
        body: [
          `-(으)ㄹ 뻔했다 is 'nearly happened (but didn't)': 계단에서 넘어질 뻔했어요. It's always past. It's also used for exaggeration: 배고파서 죽을 뻔했어요, 큰일 날 뻔했다 (That was a close one).`,
        ],
        examples: [
          { ko: "지하철을 놓칠 뻔했다.", en: "I almost missed the subway." },
          { ko: "큰일 날 뻔했어요.", en: "That was nearly a disaster." },
        ],
      },
      {
        heading: `It can't be: -(으)ㄹ 리가 없다`,
        body: [
          `리 'reason, possibility' appears only in this pattern. -(으)ㄹ 리가 없다 expresses strong disbelief: 민수 씨가 거짓말을 할 리가 없어요 (There's no way Minsu would lie). For the past: -았 / 었을 리가 없다. The rhetorical version -(으)ㄹ 리가 있어요? means the same, and the short reply 그럴 리가요! means 'No way!'.`,
        ],
        examples: [
          { ko: "벌써 다 먹었을 리가 없다.", en: "There's no way he's eaten it all already." },
          { ko: "그 사람이 그런 말을 했을 리가 있어요?", en: "How could he possibly have said that?" },
          { ko: "그럴 리가요!", en: "No way!" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "일찍 출발하더라면 비행기를 탔을 텐데.",
        right: "일찍 출발했더라면 비행기를 탔을 텐데.",
        why: `The counterfactual needs the past marker: -았 / 었더라면.`,
      },
      {
        wrong: "내일 넘어질 뻔해요.",
        right: "넘어질 뻔했어요.",
        why: `뻔하다 'nearly' only exists in the past: it describes something that didn't happen.`,
      },
      {
        wrong: "그가 거짓말을 하는 리가 없다.",
        right: "그가 거짓말을 할 리가 없다.",
        why: `리 always takes the -(으)ㄹ modifier.`,
      },
    ],
    faqs: [
      {
        q: `-았더라면 or -았으면?`,
        a: `They mean the same. -았더라면 is a little more emphatic and literary; -았으면 is everyday speech. Don't confuse either with -았으면 좋겠다, which is a wish.`,
      },
      {
        q: `What about -다면?`,
        a: `-다면 (B1) is an imagined condition in the present or future: 복권에 당첨된다면. -았더라면 is specifically about the past that didn't happen.`,
      },
    ],
    related: ["regret-and-near-misses", "hypotheticals-damyeon", "only-if-only-after", "beliefs-and-evidence"],
    lessons: [
      "b2-if-only-had-1",
      "b2-if-only-had-2",
      "b2-close-calls",
      "b2-cant-possibly-be",
      "b2-contrast-clinic-hypotheticals",
      "b2-practice-regrets",
    ],
  },
  {
    slug: "sino-korean-affixes",
    title: "Sino-Korean Prefixes and Suffixes: 비-, 불-, 무-, 미-, -적, -화, -성, -력, -감",
    description:
      "The handful of Sino-Korean affixes that unlock thousands of B2 words: negative prefixes 비-, 불- / 부-, 무-, 미-, and suffixes -적 (-적이다, -적인, -적으로), -화, -성, -력 and -감.",
    level: "B2",
    intro: [
      `Much formal Korean vocabulary is Sino-Korean, built like Latin and Greek words in English. A few prefixes and suffixes turn up again and again. Learn what each adds, and you can guess the meaning of new words in the news and in TOPIK reading.`,
      `(The roots behind these words are explored in the Word Roots tool. Here we focus on how the affixes work in grammar.)`,
    ],
    sections: [
      {
        heading: `Negative prefixes: 비-, 불- / 부-, 무-, 미-`,
        body: [
          `비- means 'not in this category': 비공개 (not public), 비정규직 (non-permanent job), 비흡연자 (non-smoker), 비대면 (contactless). 불- negates a quality: 불가능 (impossible), 불편 (inconvenient), 불안 (anxious). Before ㄷ and ㅈ, 불 becomes 부: 부족 (lack), 부정확 (inaccurate), 부주의 (careless).`,
          `무- means 'none at all': 무료 (free of charge), 무관심 (indifference), 무선 (wireless), 무제한 (unlimited). 미- means 'not yet': 미완성 (unfinished), 미성년자 (a minor), 미확인 (unconfirmed).`,
        ],
        table: {
          headers: ["Prefix", "Meaning", "Examples"],
          rows: [
            ["비-", "non-", "비공개, 비정규직, 비대면"],
            ["불- / 부-", "un-, in-", "불가능, 불편, 부족, 부정확"],
            ["무-", "without, free of", "무료, 무관심, 무선, 무인"],
            ["미-", "not yet", "미완성, 미성년자, 미확인"],
          ],
        },
        examples: [
          { ko: "이 정보는 비공개입니다.", en: "This information is not public." },
          { ko: "신고된 사고의 원인은 아직 미확인 상태이다.", en: "The cause of the reported accident is still unconfirmed." },
          { ko: "와이파이는 무료로 이용하실 수 있습니다.", en: "You can use the Wi-Fi free of charge." },
        ],
      },
      {
        heading: `-적: the '-ic / -al' suffix`,
        body: [
          `-적 turns a noun into an adjective-like word, with three forms. -적이다 is the predicate: 그 계획은 현실적이다. -적인 goes before a noun: 현실적인 계획. -적으로 is the adverb: 현실적으로 불가능하다. Common examples: 경제적, 개인적, 적극적, 전통적, 긍정적, 부정적.`,
        ],
        examples: [
          { ko: "그 계획은 현실적이지 않다.", en: "That plan isn't realistic." },
          { ko: "전통적인 방법으로 김치를 담갔다.", en: "We made kimchi the traditional way." },
          { ko: "개인적으로는 반대해요.", en: "Personally, I'm against it." },
        ],
      },
      {
        heading: `-화, -성, -력, -감`,
        body: [
          `-화 '-isation' names a process: 고령화 (population ageing), 도시화, 세계화, 자동화. Add -되다 for 'to become' (고령화되다) or -하다 for 'to make' (자동화하다). -성 '-ness, -ity' names a quality: 가능성, 중요성, 안전성. -력 'power, ability': 경쟁력, 영향력, 집중력. -감 'a feeling or sense of': 책임감, 자신감, 안정감.`,
        ],
        examples: [
          { ko: "고령화가 빠르게 진행되고 있다.", en: "Population ageing is progressing fast." },
          { ko: "이 문제의 중요성을 강조했다.", en: "He stressed the importance of this issue." },
          { ko: "요즘 집중력이 떨어졌어요.", en: "My concentration has dropped lately." },
          { ko: "그는 책임감이 강하다.", en: "He has a strong sense of responsibility." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "현실적 계획을 세웠다.",
        right: "현실적인 계획을 세웠다.",
        why: `Bare -적 + noun exists in set phrases (경제적 문제), but in ordinary sentences -적인 is safer and more natural.`,
        register: true,
      },
      {
        wrong: "불정확한 정보",
        right: "부정확한 정보",
        why: `불 becomes 부 before ㄷ and ㅈ.`,
      },
      {
        wrong: "그 사람은 아주 책임적이에요.",
        right: "그 사람은 책임감이 강해요.",
        why: `책임 doesn't take -적. The quality word is 책임감 (a sense of responsibility).`,
      },
      {
        wrong: "미료로 들어갈 수 있어요.",
        right: "무료로 들어갈 수 있어요.",
        why: `무- means 'none' (free of charge); 미- means 'not yet'.`,
      },
    ],
    faqs: [
      {
        q: `Can I put -적 on any noun?`,
        a: `No. It goes on Sino-Korean nouns, and only on those that have an established -적 form. When unsure, look it up: there is no 책임적 or 사랑적.`,
      },
      {
        q: `What's the difference between 불확실 and 미확정?`,
        a: `불확실 is 'uncertain' (a quality). 미확정 is 'not yet decided' (it will be later).`,
      },
    ],
    related: ["news-and-data-language", "formal-noun-phrases", "idioms-and-proverbs", "hada-doeda-sikida"],
    lessons: [
      "b2-prefixes-non-un",
      "b2-prefixes-without-not-yet",
      "b2-suffix-ic-adjectives",
      "b2-suffixes-ize-ness",
      "b2-suffixes-power-sense",
      "b2-contrast-clinic-negative-prefixes",
      "b2-practice-guess-the-word",
    ],
  },
  {
    slug: "idioms-and-proverbs",
    title: "Four-Character Idioms, Body Idioms and Proverbs",
    description:
      "How 사자성어 (four-character idioms), body-part idioms (눈이 높다, 발이 넓다) and proverbs (속담) work in a sentence, with the grammar for quoting them: -(이)라는 말이 있다, -다는 말처럼, -(이)라고.",
    level: "B2",
    intro: [
      `Korean conversation, journalism and TOPIK reading all lean on fixed expressions. There are three kinds: four-syllable Sino-Korean idioms (사자성어) like 일석이조, idioms built on body parts like 발이 넓다, and native proverbs (속담) like 소 잃고 외양간 고친다.`,
      `This guide is about how to use them grammatically. Each is a ready-made chunk, but it still needs the right particles and endings to fit into a sentence.`,
    ],
    sections: [
      {
        heading: `사자성어 in a sentence`,
        body: [
          `A four-character idiom behaves like a noun. It takes 이다 (그야말로 일석이조예요), particles (작심삼일로 끝났다), or 하다 if it describes an action (우왕좌왕하다). Some common ones: 일석이조 (two birds with one stone), 작심삼일 (resolutions that last three days), 고진감래 (after hardship comes joy), 역지사지 (put yourself in their shoes), 설상가상 (to make matters worse).`,
          `설상가상으로 and 다행히 are often used as sentence adverbs: 설상가상으로 비까지 왔다.`,
        ],
        examples: [
          { ko: "운동도 하고 돈도 아끼니까 일석이조예요.", en: "I get exercise and save money: two birds with one stone." },
          { ko: "새해 다이어트는 또 작심삼일로 끝났다.", en: "My New Year diet ended after three days again." },
          { ko: "길을 잃었는데 설상가상으로 휴대폰 배터리까지 나갔다.", en: "I got lost, and to make matters worse my phone died." },
          { ko: "역지사지로 생각해 보면 그 사람도 이해가 돼요.", en: "If you put yourself in his shoes, you can understand him." },
        ],
      },
      {
        heading: `Body idioms`,
        body: [
          `Body idioms are ordinary sentences with a subject (이 / 가): 눈이 높다 (to be picky), 입이 무겁다 (to keep secrets), 귀가 얇다 (to be easily swayed), 발이 넓다 (to know a lot of people), 손이 크다 (to be generous, to make too much food), 배가 아프다 (to be jealous). They conjugate normally: 눈이 높아서, 발이 넓은 사람.`,
        ],
        examples: [
          { ko: "그 친구는 눈이 높아서 아직 결혼을 안 했어요.", en: "My friend is picky, so she hasn't married yet." },
          { ko: "민수 씨는 발이 넓어서 모르는 사람이 없어요.", en: "Minsu is so well connected that he knows everyone." },
          { ko: "할머니는 손이 크셔서 음식을 항상 많이 하신다.", en: "Grandma is generous and always cooks far too much." },
          { ko: "눈코 뜰 새 없이 바빴어요.", en: "I was so busy I didn't have time to breathe." },
        ],
      },
      {
        heading: `Quoting a proverb`,
        body: [
          `Proverbs are quoted with reported-speech grammar. -(이)라는 속담이 있어요 or -다는 말이 있잖아요 introduce one: 소 잃고 외양간 고친다는 말이 있잖아요. -다는 말처럼 applies it: 가는 말이 고와야 오는 말이 곱다는 말처럼 ... 'As the saying goes, ...'.`,
          `Everyday favourites include 누워서 떡 먹기 / 식은 죽 먹기 (a piece of cake), 하늘의 별 따기 (next to impossible), 그림의 떡 (pie in the sky) and 등잔 밑이 어둡다 (what's closest is hardest to see).`,
        ],
        examples: [
          { ko: "소 잃고 외양간 고친다는 말이 있잖아요.", en: "You know the saying: fixing the barn after the cow's gone." },
          { ko: "가는 말이 고와야 오는 말이 곱다는 말처럼 먼저 친절하게 대해 보세요.", en: "As the saying goes, be kind and kindness comes back, so try being nice first." },
          { ko: "그 시험은 누워서 떡 먹기였어요.", en: "That exam was a piece of cake." },
          { ko: "요즘 서울에서 집 사기는 하늘의 별 따기예요.", en: "Buying a home in Seoul these days is next to impossible." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "그 사람은 눈을 높아요.",
        right: "그 사람은 눈이 높아요.",
        why: `Body idioms keep their fixed particle: 눈이 높다.`,
      },
      {
        wrong: "그건 누워서 떡 먹기해요.",
        right: "그건 누워서 떡 먹기예요.",
        why: `The proverb is a noun phrase (먹기), so it takes 이다.`,
      },
      {
        wrong: "사장님께: 사장님은 귀가 얇으시네요.",
        right: "사장님께서 의견을 잘 들어 주시네요.",
        why: `귀가 얇다 is a criticism. Body idioms that judge people are risky to use about a senior.`,
        register: true,
      },
      {
        wrong: "작심삼일했어요.",
        right: "작심삼일로 끝났어요.",
        why: `작심삼일 is a noun describing the result; it doesn't take 하다.`,
      },
    ],
    faqs: [
      {
        q: `Do Koreans really use 사자성어 in conversation?`,
        a: `A few, yes: 일석이조, 작심삼일, 대기만성 and 설상가상 are everyday words. Most others belong to speeches, columns and the exam.`,
      },
      {
        q: `Can I change a proverb's ending?`,
        a: `The proverb itself is fixed in 한다체 (곱다, 고친다). You change the frame around it, not the proverb.`,
      },
    ],
    related: ["sound-and-shape-words", "sino-korean-affixes", "reported-speech", "inevitability-and-truth"],
    lessons: [
      "b2-four-character-idioms-intro",
      "b2-idioms-numbers",
      "b2-idioms-effort-reward",
      "b2-idioms-people",
      "b2-idioms-situations",
      "b2-practice-idioms-in-conversation",
      "b2-body-idioms-eyes-face",
      "b2-body-idioms-mouth-ears",
      "b2-body-idioms-hands-feet",
      "b2-body-idioms-heart-belly-head",
      "b2-proverbs-everyday-wisdom",
      "b2-proverbs-easy-impossible",
      "b2-quoting-proverbs",
    ],
  },
  {
    slug: "news-and-data-language",
    title: "News and Data Language: Headlines, Leads, Trends and Surveys",
    description:
      "How Korean news and reports are written: noun-final headlines, the one-sentence lead, reporting verbs (밝혔다, 전했다), news shorthand (전년 대비, 및, 등, 측), trend verbs, 차지하다, survey frames like -(으)로 나타났다, and background with -는 가운데.",
    level: "B2",
    intro: [
      `News Korean is a register of its own: 한다체, Sino-Korean vocabulary, dropped particles in headlines, and a set of fixed frames for reporting what people said and what the numbers show. Once you know the frames, articles and TOPIK graph questions become far easier.`,
    ],
    sections: [
      {
        heading: `Headlines`,
        body: [
          `Headlines drop particles and 하다 and end in a noun: 서울 지하철 요금 150원 인상 = 서울 지하철 요금이 150원 인상된다. Future and uncertainty are shown with 예정 (scheduled) and -(으)ㄹ 듯 (likely): 다음 달 개통 예정, 주말까지 이어질 듯. A … (말줄임표) links two parts, and quotes appear in quotation marks with no verb.`,
        ],
        examples: [
          { ko: "서울 지하철 요금 150원 인상", en: "Seoul subway fares up 150 won" },
          { ko: "내일 전국에 비 … 주말까지 이어질 듯", en: "Rain nationwide tomorrow, likely to last until the weekend" },
          { ko: "신공항 철도 다음 달 개통 예정", en: "New airport line due to open next month" },
        ],
      },
      {
        heading: `Leads and reporting verbs`,
        body: [
          `The lead (첫 문장) is one long 한다체 sentence with who, when, where and what: 지난 15일 오후 3시쯤 부산의 한 아파트에서 불이 나 주민 10여 명이 대피했다. News says 지난해 (last year), not 작년.`,
          `Sources are attributed with -에 따르면 (according to) and reporting verbs: 밝혔다 (stated), 전했다 (reported), 강조했다 (stressed), 덧붙였다 (added). Quotes end with 이라고 / 라고: 관계자는 "조사를 진행 중"이라고 밝혔다.`,
        ],
        examples: [
          { ko: "경찰에 따르면 사고는 오전 8시쯤 발생했다.", en: "According to police, the accident happened at around 8 a.m." },
          { ko: "관계자는 \"원인을 조사하고 있다\"고 밝혔다.", en: "An official said, 'We are investigating the cause.'" },
          { ko: "그는 안전이 가장 중요하다고 강조했다.", en: "He stressed that safety is the most important thing." },
        ],
      },
      {
        heading: `Numbers and trends`,
        body: [
          `Trend verbs come in native and Sino-Korean pairs: 늘다 / 증가하다, 줄다 / 감소하다; prices and rates use 상승하다 / 하락하다. Speed and size: 급증하다 (surge), 꾸준히 (steadily), 소폭 / 대폭 (slightly / sharply), 두 배 (double), 최고치를 기록하다 (hit a record high). Shorthand: 전년 대비 (year on year), 및 (and), 등 (etc.), 측 (side).`,
          `Shares use 차지하다 'to take up': 20대가 35%를 차지했다. Surveys use a fixed frame: 성인 1,000명을 대상으로 조사한 결과, ...(으)로 나타났다 'the results showed ...'. Trends use -는 추세이다 and -는 경향이 있다, and background uses -는 가운데 'amid': 고령화가 빠르게 진행되는 가운데 정부가 새 대책을 발표했다.`,
        ],
        examples: [
          { ko: "1인 가구는 전년 대비 5% 증가했다.", en: "Single-person households rose 5% year on year." },
          { ko: "20대가 35%로 가장 많았고, 30대가 그 뒤를 이었다.", en: "People in their twenties made up the largest group at 35%, followed by those in their thirties." },
          { ko: "성인 남녀 1,000명을 대상으로 조사한 결과, 응답자의 60%가 주 1회 이상 운동하는 것으로 나타났다.", en: "A survey of 1,000 adults found that 60% of respondents exercise at least once a week." },
          { ko: "1인 가구가 늘어나는 추세이다.", en: "Single-person households are on the rise." },
          { ko: "물가가 오르는 가운데 소비는 줄고 있다.", en: "Amid rising prices, spending is falling." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "응답자의 60%가 운동한다고 나타났다.",
        right: "응답자의 60%가 운동하는 것으로 나타났다.",
        why: `The survey frame is -는 것으로 나타났다, not a quotation.`,
      },
      {
        wrong: "물가가 2% 올라갔다를 기록했다.",
        right: "물가 상승률이 2%를 기록했다.",
        why: `기록하다 takes a noun object: a figure or 최고치.`,
      },
      {
        wrong: "친구한테: 나 어제 지난해 갔던 식당 갔어.",
        right: "나 어제 작년에 갔던 식당 갔어.",
        why: `지난해 is correct but sounds like the news; in conversation, 작년.`,
        register: true,
      },
      {
        wrong: "비가 오는 가운데 우리 같이 영화 볼래?",
        right: "비도 오는데 우리 같이 영화 볼래?",
        why: `-는 가운데 is formal background for reports; casual suggestions use -는데.`,
        register: true,
      },
    ],
    faqs: [
      {
        q: `Is 및 the same as 그리고?`,
        a: `및 links nouns in formal writing (서울 및 경기 지역). It can't link clauses, and it isn't used in speech.`,
      },
      {
        q: `What is TOPIK question 53?`,
        a: `A 200-300 character description of a graph or survey. The frames in this guide (차지하다, -(으)로 나타났다, 증가하다) are exactly what it needs.`,
      },
    ],
    related: ["formal-noun-phrases", "written-style-handache", "sino-korean-affixes", "argument-essay-language"],
    lessons: [
      "b2-headline-style-1",
      "b2-headline-style-2",
      "b2-news-lead-sentence",
      "b2-news-reporting-verbs",
      "b2-news-shorthand",
      "b2-practice-headlines-and-sentences",
      "b2-trend-verbs-1",
      "b2-trend-verbs-2",
      "b2-shares-and-rankings",
      "b2-survey-language",
      "b2-causes-and-outlook",
      "b2-practice-reading-charts",
      "b2-amid",
      "b2-tendencies-and-trends",
    ],
  },
  {
    slug: "argument-essay-language",
    title: "The Argumentative Essay: Structure, Position and Connectors",
    description:
      "Writing an opinion essay in Korean (TOPIK question 54): the 서론, 본론, 결론 shape, position statements (-다고 생각한다, -는 것이 바람직하다, -(으)ㄹ 필요가 있다), listing and concluding connectors, answering the other side, reference words, and 원고지 rules.",
    level: "B2",
    intro: [
      `A Korean argumentative essay is written in 한다체, follows a clear three-part shape, and leans on a predictable set of connectors. That predictability is good news: once you have the frames, your energy can go into the ideas.`,
    ],
    sections: [
      {
        heading: `Shape and position`,
        body: [
          `서론 (introduction) introduces the issue and your position. 본론 (body) gives reasons and examples. 결론 (conclusion) sums up and proposes. TOPIK question 54 asks for 600-700 characters, and each of the three questions in the prompt usually becomes a paragraph.`,
          `Position statements: -다고 생각한다 (I think), -아 / 어야 한다 (should), -는 것이 바람직하다 (it is desirable to), -(으)ㄹ 필요가 있다 (there is a need to). Avoid 제 생각에는 ...것 같아요 style: it sounds spoken and unsure.`,
        ],
        examples: [
          { ko: "조기 교육은 신중하게 결정해야 한다고 생각한다.", en: "I believe early education should be decided on carefully." },
          { ko: "아이들의 흥미를 존중하는 것이 바람직하다.", en: "It is desirable to respect children's interests." },
          { ko: "정부의 적극적인 지원이 필요하다.", en: "Active government support is needed." },
        ],
      },
      {
        heading: `Connectors and the other side`,
        body: [
          `Listing: 우선 / 먼저, 첫째 / 둘째, 또한, 게다가, -(으)ㄹ 뿐만 아니라. Turning: 그러나, 반면에, 오히려. Concluding: 따라서, 그러므로, 이처럼, 결론적으로, 요컨대.`,
          `Show the other side, then answer it: 물론 경쟁이 동기를 부여하는 측면도 있다. 그러나 ... ('Of course, competition does motivate people. However ...'). -다는 의견도 있지만 does the same in one sentence.`,
          `Hold the essay together with reference words: 이러한 문제, 이를 해결하기 위해서는, 그 결과, 이 때문에.`,
        ],
        examples: [
          { ko: "첫째, 경쟁은 학생들에게 지나친 스트레스를 준다.", en: "First, competition puts excessive stress on students." },
          { ko: "물론 경쟁이 동기를 부여하는 측면도 있다. 그러나 그 부작용이 더 크다.", en: "Of course, competition can motivate. However, its side effects are greater." },
          { ko: "이러한 문제를 해결하기 위해서는 사회 전체의 노력이 필요하다.", en: "Solving these problems requires effort from society as a whole." },
          { ko: "따라서 지나친 경쟁은 줄여야 한다.", en: "Therefore, excessive competition must be reduced." },
        ],
      },
      {
        heading: `원고지: manuscript paper`,
        body: [
          `TOPIK writing is done on 원고지, squared manuscript paper. One syllable per box; a space takes a box; indent each paragraph by one box; punctuation takes its own box. Numbers and lower-case Latin letters go two to a box.`,
        ],
      },
    ],
    mistakes: [
      {
        wrong: "저는 조기 교육이 안 좋다고 생각해요.",
        right: "조기 교육은 바람직하지 않다고 생각한다.",
        why: `The essay is in 한다체. 해요체 and 저는 make it sound spoken.`,
        register: true,
      },
      {
        wrong: "그리고, 경쟁은 스트레스를 준다. 그리고, 시간이 낭비된다.",
        right: "또한 경쟁은 스트레스를 준다. 게다가 시간도 낭비된다.",
        why: `그리고 at the start of every sentence sounds childish; vary the connectors.`,
        register: true,
      },
      {
        wrong: "경쟁은 좋은 거 같다.",
        right: "경쟁은 긍정적인 면이 있다.",
        why: `거 and -것 같다 are spoken and hedging. Essays write 것 in full and state the claim.`,
        register: true,
      },
    ],
    faqs: [
      {
        q: `Should I use 나는 in the essay?`,
        a: `Usually you leave the 'I' out entirely: -다고 생각한다 already makes it your view. Use 필자는 only in a formal paper.`,
      },
      {
        q: `Is it OK to repeat the question's wording?`,
        a: `Yes, briefly, in the introduction. But copying whole sentences wastes characters and loses marks.`,
      },
    ],
    related: ["written-style-handache", "formal-connectives-for-writing", "giving-opinions", "contrast-and-concession-b2"],
    lessons: [
      "b2-essay-structure",
      "b2-essay-position-statements",
      "b2-essay-connectors-listing",
      "b2-essay-connectors-concluding",
      "b2-essay-counterargument",
      "b2-essay-reference-words",
      "b2-manuscript-paper-rules",
    ],
  },
  {
    slug: "outcomes-and-habits",
    title: "Bad Habits and Pointless Efforts: 일쑤, 십상, -다가는, -아 / 어 봤자, -아 / 어 대다, -(으)나 마나",
    description:
      "The patterns Korean uses to grumble and warn: -기 일쑤이다 (all too often), -기 십상이다 (easily ends badly), -다가는 (keep that up and), -아 / 어 봤자 (no use even if), -아 / 어 대다 (over and over) and -(으)나 마나 (no point even).",
    level: "B2",
    intro: [
      `These patterns all carry a negative attitude: a bad habit, a likely bad result, a warning, a pointless effort. They are colourful and very common in speech, with some also at home in writing.`,
    ],
    sections: [
      {
        heading: `What tends to happen: 일쑤, 십상, 마련`,
        body: [
          `-기 일쑤이다 describes a repeated bad habit: 야근 때문에 저녁을 거르기 일쑤예요 (Because of overtime, I skip dinner all the time). -기 십상이다 says a bad result is easy to fall into: 밤늦게 먹으면 살찌기 십상이다. Compare -기 마련이다, which is neutral and general (누구나 실수하기 마련이다).`,
        ],
        examples: [
          { ko: "신입 때는 실수하기 일쑤였다.", en: "When I was new, I made mistakes all the time." },
          { ko: "무리하면 다치기 십상이에요.", en: "If you overdo it, you'll easily get hurt." },
        ],
      },
      {
        heading: `Warnings and pointless effort: -다가는, -아 / 어 봤자, -(으)나 마나`,
        body: [
          `-다가는 warns where a habit will lead: 그렇게 놀다가는 시험에 떨어질 거야 (Keep playing around like that and you'll fail). The result is usually -(으)ㄹ 거다 or -(으)ㄹ 수도 있다.`,
          `-아 / 어 봤자 says the effort is useless: 지금 가 봤자 이미 늦었어요 (There's no point going now; it's already too late). -(으)나 마나 says doing it makes no difference because the result is certain: 보나 마나 또 늦을 거야 (I don't even need to look: he'll be late again).`,
        ],
        examples: [
          { ko: "매일 밤을 새우다가는 건강을 해칠 수도 있어요.", en: "If you keep staying up all night, you could ruin your health." },
          { ko: "말해 봤자 소용없어요.", en: "There's no point telling him." },
          { ko: "아무리 일해 봤자 월급은 그대로예요.", en: "However hard I work, my salary stays the same." },
          { ko: "물어보나 마나 안 된다고 할걸요.", en: "No point even asking; they'll say no." },
        ],
      },
      {
        heading: `Over and over: -아 / 어 대다`,
        body: [
          `-아 / 어 대다 describes a repeated, excessive action, usually with annoyance: 옆자리 사람이 계속 떠들어 대요. It conjugates like 대다: 대요, 댔어요, 대서.`,
        ],
        examples: [
          { ko: "알림이 하루 종일 울려 대서 꺼 버렸어요.", en: "Notifications kept going off all day, so I turned them off." },
          { ko: "아이가 사 달라고 졸라 댔다.", en: "The child kept pestering me to buy it." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "저는 운동하기 일쑤예요.",
        right: "저는 운동을 자주 해요.",
        why: `일쑤 is for unwelcome repeated events; a good habit uses 자주.`,
      },
      {
        wrong: "열심히 공부하다가는 합격할 거예요.",
        right: "열심히 공부하다 보면 합격할 거예요.",
        why: `-다가는 warns of a bad result. For a good result from persistence, use -다 보면.`,
      },
      {
        wrong: "지금 가 봤자 아직 시간이 많아요.",
        right: "지금 가 봤자 이미 늦었어요.",
        why: `-아 / 어 봤자 is followed by a useless or disappointing result.`,
      },
      {
        wrong: "보고서: 직원들이 불만을 말해 댔다.",
        right: "보고서: 직원들이 여러 차례 불만을 제기했다.",
        why: `-아 / 어 대다 sounds annoyed and casual; reports stay neutral.`,
        register: true,
      },
    ],
    faqs: [
      {
        q: `일쑤 or 십상?`,
        a: `일쑤 describes what keeps happening (a habit). 십상 predicts that something bad will easily happen (a risk).`,
      },
      {
        q: `Is -아 / 어 봤자 the same as -아 / 어도?`,
        a: `-아 / 어도 is neutral 'even if'. -아 / 어 봤자 adds 'and it's pointless'.`,
      },
    ],
    related: ["inevitability-and-truth", "beliefs-and-evidence", "time-links", "worry-advice-wishes"],
    lessons: [
      "b2-all-too-often",
      "b2-easily-ends-badly",
      "b2-contrast-likely-often-bound",
      "b2-keep-that-up-and",
      "b2-no-use-even-if",
      "b2-no-point-even-asking",
      "b2-over-and-over",
    ],
  },
  {
    slug: "beliefs-and-evidence",
    title: "I Thought, It Seems, It Depends: 줄 알았다, 모양이다, -다 보니, 달려 있다, 나름이다",
    description:
      "Wrong assumptions, guesses from evidence, discoveries and dependencies: -는 줄 알았다 / 몰랐다, -(으)ㄴ / 는 모양이다, -다 보니(까), -에 달려 있다, -기 나름이다 and -에 따라 다르다.",
    level: "B2",
    intro: [
      `This guide gathers patterns about what you know and how you came to know it: what you wrongly assumed, what the evidence suggests, what you found after doing something for a while, and what a result depends on.`,
    ],
    sections: [
      {
        heading: `I thought (wrongly): -는 줄 알았다`,
        body: [
          `-(으)ㄴ / 는 / (으)ㄹ 줄 알았다 usually means 'I thought (but I was wrong)': 오늘 회식이 있는 줄 알았어요 (I thought there was a staff dinner today). -는 줄 몰랐다 means 'I didn't realise': 벌써 퇴근한 줄 몰랐어요. Tense goes in the modifier: 간 (past), 가는 (present), 갈 (future).`,
          `Don't mix this up with -(으)ㄹ 줄 알다 'know how to': 운전할 줄 알아요.`,
        ],
        examples: [
          { ko: "오늘 회식이 있는 줄 알았어요.", en: "I thought there was a staff dinner today." },
          { ko: "민수 씨가 벌써 퇴근한 줄 몰랐어요.", en: "I didn't realise Minsu had already left." },
          { ko: "비가 올 줄 알고 우산을 가져왔는데 안 왔네요.", en: "I brought an umbrella thinking it would rain, but it didn't." },
        ],
      },
      {
        heading: `Judging by the evidence: -(으)ㄴ / 는 모양이다`,
        body: [
          `-(으)ㄴ / 는 모양이다 is a guess based on evidence you've seen or heard: 사람들이 줄을 서 있어요. 인기가 많은 모양이에요. It sounds a little more formal and detached than -나 보다. It is never about yourself.`,
        ],
        examples: [
          { ko: "서버가 다운된 모양이다.", en: "It looks like the server has gone down." },
          { ko: "하늘이 어두워지네요. 비가 올 모양이에요.", en: "The sky's getting dark. Looks like rain." },
        ],
      },
      {
        heading: `Having done it a while: -다 보니(까)`,
        body: [
          `-다 보니(까) says that by doing something repeatedly or for a while, you found a result: 매일 한국 드라마를 보다 보니 한국어가 늘었어요 (From watching Korean dramas every day, my Korean improved). Compare -다 보면 (B1), which looks forward: 'if you keep doing it, you'll find'.`,
        ],
        examples: [
          { ko: "같이 일하다 보니 친해졌어요.", en: "Working together, we became close." },
          { ko: "이야기하다 보니까 시간이 이렇게 됐네요.", en: "We got talking and look at the time." },
        ],
      },
      {
        heading: `It depends: 달려 있다, 나름이다, 따라 다르다`,
        body: [
          `N에 달려 있다 'hangs on' says a result depends on a factor: 합격은 노력에 달려 있다. -느냐에 달려 있다 works as a chunk: 어떻게 공부하느냐에 달려 있다. -기 나름이다 says it's all in how you do it: 성적은 공부하기 나름이에요, 생각하기 나름이다. N에 따라 다르다 is plain variation: 날씨에 따라 달라요.`,
        ],
        examples: [
          { ko: "결과는 네 선택에 달려 있어.", en: "The outcome depends on your choice." },
          { ko: "아이는 부모가 키우기 나름이다.", en: "How a child turns out depends on how the parents raise them." },
          { ko: "가격은 지역에 따라 달라요.", en: "Prices vary by region." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "저는 피곤한 모양이에요.",
        right: "저는 좀 피곤해요.",
        why: `모양이다 is a guess from outside evidence; you don't guess about your own feelings.`,
      },
      {
        wrong: "한국어를 공부했다 보니 늘었어요.",
        right: "한국어를 공부하다 보니 늘었어요.",
        why: `-다 보니 attaches to the bare stem; tense goes on the final verb.`,
      },
      {
        wrong: "성공은 노력에 나름이에요.",
        right: "성공은 노력하기 나름이에요.",
        why: `나름이다 follows -기 with a verb. With a noun, use 에 달려 있다: 노력에 달려 있어요.`,
      },
      {
        wrong: "오늘 쉬는 날을 줄 알았어요.",
        right: "오늘 쉬는 날인 줄 알았어요.",
        why: `With a noun, use 인 줄: 쉬는 날인 줄.`,
      },
    ],
    faqs: [
      {
        q: `모양이다 or -나 보다?`,
        a: `Both guess from evidence. -나 보다 is more spoken and immediate; 모양이다 is a little more detached and works in writing too.`,
      },
      {
        q: `Does -는 줄 알았다 always mean I was wrong?`,
        a: `Usually, especially with stress on 알았다. With 그럴 줄 알았어 ('I knew it!'), it means you were right.`,
      },
    ],
    related: ["guessing-na-boda-tende", "guessing-and-seeming", "counterfactuals-and-impossibility", "outcomes-and-habits"],
    lessons: [
      "b2-mistaken-belief",
      "b2-judging-by-evidence",
      "b2-contrast-guessing-patterns",
      "b2-found-that",
      "b2-it-depends-on",
      "b2-up-to-you",
      "b2-contrast-depends-patterns",
    ],
  },
  {
    slug: "circumstance-patterns",
    title: "Circumstances, Double Purposes and Risks: 채로, 겸, -(으)려야 -(으)ㄹ 수가 없다, 우려",
    description:
      "Patterns for how something happened and what might happen: -(으)ㄴ 채(로) (left as it was), -(으)ㄹ 겸 (two purposes), -(으)려야 -(으)ㄹ 수가 없다 (can't even if I try), and -(으)ㄹ 우려가 있다 / 가능성이 있다 (risk and likelihood).",
    level: "B2",
    intro: [
      `These patterns don't form a family; they are four useful tools that turn up across B2 themes: the state you did something in, killing two birds with one stone, being unable however hard you try, and formal risk.`,
    ],
    sections: [
      {
        heading: `Left as it was: -(으)ㄴ 채(로)`,
        body: [
          `-(으)ㄴ 채(로) means doing something while a state stays unchanged, often a state that should have changed: 화장을 한 채로 잠들었어요 (I fell asleep with my make-up on). It always uses the past modifier -(으)ㄴ.`,
        ],
        examples: [
          { ko: "신발을 신은 채로 들어가면 안 돼요.", en: "You mustn't go in with your shoes on." },
          { ko: "창문을 열어 놓은 채 외출했다.", en: "I went out with the window left open." },
        ],
      },
      {
        heading: `Two purposes: -(으)ㄹ 겸`,
        body: [
          `-(으)ㄹ 겸 gives two purposes for one action: 운동도 할 겸 바람도 쐴 겸 한강에 갔어요 (I went to the Han River to get some exercise and some fresh air). With nouns: 아침 겸 점심 (brunch), 거실 겸 서재 (a living room that doubles as a study).`,
        ],
        examples: [
          { ko: "친구도 만날 겸 쇼핑도 할 겸 명동에 갔어요.", en: "I went to Myeongdong to see a friend and do some shopping." },
          { ko: "아침 겸 점심으로 빵을 먹었다.", en: "I had bread for brunch." },
        ],
      },
      {
        heading: `Can't even if I try: -(으)려야 -(으)ㄹ 수가 없다`,
        body: [
          `The same verb appears twice: 'even when I intend to do it, I can't'. 물가가 너무 올라서 아끼려야 아낄 수가 없어요 (Prices have gone up so much that I can't save however hard I try). It's a set pattern: -(으)려고 해도 is the plainer version.`,
        ],
        examples: [
          { ko: "그 사람은 미워하려야 미워할 수가 없어요.", en: "You just can't bring yourself to hate him." },
          { ko: "너무 시끄러워서 잠을 자려야 잘 수가 없었다.", en: "It was so noisy I couldn't sleep however hard I tried." },
        ],
      },
      {
        heading: `Risk and likelihood: 우려, 가능성`,
        body: [
          `-(으)ㄹ 우려가 있다 is formal and only for bad outcomes: 해수면이 상승할 우려가 있다 (There are fears sea levels will rise). -(으)ㄹ 가능성이 있다 / 높다 is neutral likelihood, good or bad. In speech, -(으)ㄹ 수도 있다 covers both.`,
        ],
        examples: [
          { ko: "폭우로 산사태가 발생할 우려가 있다.", en: "Heavy rain may trigger landslides." },
          { ko: "올해 경제가 회복될 가능성이 높다.", en: "The economy is likely to recover this year." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "신발을 신는 채로 들어왔어요.",
        right: "신발을 신은 채로 들어왔어요.",
        why: `채 always follows the past modifier -(으)ㄴ.`,
      },
      {
        wrong: "경제가 성장할 우려가 있다.",
        right: "경제가 성장할 가능성이 있다.",
        why: `우려 means 'concern'; it's only for bad outcomes.`,
      },
      {
        wrong: "아끼려야 아끼지 못해요.",
        right: "아끼려야 아낄 수가 없어요.",
        why: `The fixed pattern is -(으)려야 -(으)ㄹ 수가 없다.`,
      },
    ],
    faqs: [
      {
        q: `Is 겸 the same as -(으)러?`,
        a: `-(으)러 gives one purpose with a verb of movement. -(으)ㄹ 겸 gives two (or more) purposes and works with any verb.`,
      },
      {
        q: `Is 채로 always negative?`,
        a: `Often, but not always: 그 드라마는 결말을 열어 둔 채로 끝났다 ('The drama ended with the ending left open') is neutral.`,
      },
    ],
    related: ["purpose-endings", "can-cant-and-long-negation", "news-and-data-language", "completed-actions"],
    lessons: ["b2-left-as-it-was", "b2-two-purposes", "b2-cant-even-if-i-try", "b2-risk-and-likelihood"],
  },
  {
    slug: "dependent-noun-de",
    title: "-는 데 or -는데? The Dependent Noun 데",
    description:
      "The dependent noun 데 ('place, case, purpose') in -는 데 들다 / 걸리다 / 좋다 / 도움이 되다, -는 데다가 and -는 데 반해, and how one space separates it from the ending -는데.",
    level: "B2",
    intro: [
      `Korean has two things spelt 데 after a modifier. The ending -는데 (A2) gives background or soft contrast and is written together. The dependent noun 데 means 'place, case, the doing of something' and is written with a space: -는 데.`,
      `Natives mix these up in writing all the time, so getting them right makes your Korean look educated.`,
    ],
    sections: [
      {
        heading: `What it takes, what it's good for`,
        body: [
          `-는 데 + a cost verb: 집을 사는 데 돈이 많이 든다 (Buying a house costs a lot), 회사에 가는 데 한 시간 걸려요 (It takes an hour to get to work). With 좋다, 도움이 되다 or 효과적이다, it means 'good for doing': 스트레스를 푸는 데 좋다, 잠을 잘 자는 데 도움이 돼요. And 데 can simply mean 'place': 조용한 데 (somewhere quiet).`,
        ],
        examples: [
          { ko: "집을 사는 데 돈이 많이 든다.", en: "Buying a house costs a lot." },
          { ko: "보고서를 쓰는 데 세 시간이 걸렸어요.", en: "It took three hours to write the report." },
          { ko: "산책은 스트레스를 푸는 데 좋아요.", en: "Walking is good for relieving stress." },
          { ko: "어디 조용한 데 없을까요?", en: "Isn't there somewhere quiet?" },
        ],
      },
      {
        heading: `The test`,
        body: [
          `If you can put 에 after it (or replace it with 것에, 곳에), it's the noun: space it. 공부하는 데(에) 세 시간이 걸렸다 = the studying took three hours. If it means 'and / but / so (background)', it's the ending: write it together. 공부하는데 전화가 왔어요 = I was studying, and the phone rang.`,
          `The same noun appears in -는 데다가 (on top of that) and -는 데 반해 (whereas): both spaced.`,
        ],
        table: {
          headers: ["Spaced: noun 데", "Together: ending -는데"],
          rows: [
            ["공부하는 데 세 시간이 걸렸어요.", "공부하는데 전화가 왔어요."],
            ["이 약은 감기 낫는 데 좋아요.", "이 약을 먹는데 효과가 없어요."],
            ["비가 오는 데다가 바람도 불어요.", "비가 오는데 우산이 없어요."],
          ],
        },
        examples: [
          { ko: "월급의 절반을 월세를 내는 데 쓴다.", en: "I spend half my salary on rent." },
          { ko: "밥을 먹는데 친구가 왔어요.", en: "I was eating when my friend came." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "집을 사는데 돈이 많이 들어요.",
        right: "집을 사는 데 돈이 많이 들어요.",
        why: `This is 'in buying a house', the noun 데, so it is spaced.`,
      },
      {
        wrong: "비가 오는 데 우산이 없어요.",
        right: "비가 오는데 우산이 없어요.",
        why: `This is the background ending -는데, written together.`,
      },
      {
        wrong: "한국어를 배우는 데에 재미있어요.",
        right: "한국어를 배우는 게 재미있어요.",
        why: `데 is for cost, time, usefulness or place. For 'learning is fun', use -는 것 (게).`,
      },
    ],
    faqs: [
      {
        q: `Does pronunciation tell them apart?`,
        a: `No: both sound the same. Only meaning and spacing tell them apart.`,
      },
      {
        q: `Can I add 에?`,
        a: `Yes, 공부하는 데에 is correct but heavier. Most people drop it.`,
      },
    ],
    related: ["handy-noun-patterns", "spelling-traps", "adding-points", "contrast-and-concession-b2"],
    lessons: ["b2-what-it-takes", "b2-good-for", "b2-contrast-background-or-cost"],
  },
  {
    slug: "spoken-korean-contractions-fillers",
    title: "Spoken Korean: Contractions, Fast Speech and Discourse Markers",
    description:
      "How Korean actually sounds in conversation: 거, 게, 걸, 건 for 것; 전, 난, 날, 뭘; 근데, 그럼, 얘기, 걔; -아 / 어 가지고; fast-speech sounds like [하구]; and the markers 아니, 그러니까, 막, 좀, 뭐, 그냥, 그러게요, 하긴, 있잖아, plus -잖아요 vs -거든요.",
    level: "B2",
    intro: [
      `Textbook Korean is written Korean read aloud. Real conversation shrinks words, merges particles and fills the gaps with small markers that carry a lot of attitude. You need to understand all of this, and use some of it, to sound natural.`,
    ],
    sections: [
      {
        heading: `Contractions`,
        body: [
          `것 becomes 거 in speech, and merges with particles: 것이 → 게, 것을 → 걸, 것은 → 건, 것으로 → 걸로. Pronouns merge too: 저는 → 전, 나는 → 난, 너는 → 넌, 저를 → 절, 나를 → 날, 무엇을 → 뭘. Common shortened words: 그런데 → 근데, 그러면 → 그럼, 이야기 → 얘기, 이 아이 → 얘, 그 아이 → 걔, 저 아이 → 쟤.`,
          `These are all standard spellings and fine in texting and casual writing. Formal writing uses the full forms.`,
        ],
        table: {
          headers: ["Full", "Spoken"],
          rows: [
            ["것이에요", "거예요"],
            ["이것이 뭐예요?", "이게 뭐예요?"],
            ["이것으로 할게요.", "이걸로 할게요."],
            ["저는 괜찮아요.", "전 괜찮아요."],
            ["무엇을 먹을까?", "뭘 먹을까?"],
            ["그런데 그 아이는 누구야?", "근데 걔는 누구야?"],
          ],
        },
        examples: [
          { ko: "이게 뭐예요? 처음 보는 거예요.", en: "What's this? I've never seen it before." },
          { ko: "난 이걸로 할래.", en: "I'll have this one." },
          { ko: "근데 걔 얘기 들었어?", en: "By the way, did you hear about him?" },
        ],
      },
      {
        heading: `-아 / 어 가지고 and fast speech`,
        body: [
          `-아 / 어 가지고 is the spoken -아서, both for reasons (너무 피곤해 가지고 일찍 잤어) and for doing something then moving on (김밥을 사 가지고 갔어요). In fast Seoul speech it sounds like [가지구], and 하고 and 그리고 sound like [하구] and [그리구]. ㅎ often drops between vowels: 괜찮아 [괜차나].`,
          `Understand these, but write the standard spelling: 하고, not 하구.`,
        ],
        examples: [
          { ko: "너무 피곤해 가지고 일찍 잤어.", en: "I was so tired I went to bed early." },
          { ko: "김밥을 사 가지고 소풍을 갔어요.", en: "We bought gimbap and went on a picnic." },
        ],
      },
      {
        heading: `Discourse markers`,
        body: [
          `아니 doesn't only mean 'no': it opens a complaint or correction (아니, 내 말은 그게 아니라...). 그러니까 means 'that's what I mean' or 'so'. Fillers: 막 (wildly, just), 좀 (softener), 뭐 (a shrug: 뭐, 괜찮아요), 그냥 (just, for no reason). Reactions: 진짜요?, 그러게요 (I know, right), 하긴 (well, true), 글쎄요 (hmm, I'm not sure). Openers: 저기요, 있잖아 (you know what), 그게... (before bad news).`,
          `-잖아요 reminds the listener of something they know (내일 시험이잖아요). -거든요 explains something they don't know (제가 내일 시험이거든요). -잖아요 can sound like blame if used carelessly with superiors.`,
        ],
        examples: [
          { ko: "아니, 그게 아니라 내 말은...", en: "No, that's not it. What I mean is..." },
          { ko: "그러게요. 저도 그렇게 생각했어요.", en: "I know, right? I thought so too." },
          { ko: "하긴, 요즘 다들 바쁘죠.", en: "Well, true, everyone's busy these days." },
          { ko: "있잖아, 나 어제 진짜 웃긴 일 있었어.", en: "You know what? Something really funny happened yesterday." },
          { ko: "제가 요즘 좀 바쁘거든요.", en: "You see, I'm a bit busy these days." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "이건 뭐에요?",
        right: "이건 뭐예요?",
        why: `After a vowel, 이에요 contracts to 예요: 뭐예요, 거예요.`,
      },
      {
        wrong: "보고서: 근데 매출이 줄었다.",
        right: "보고서: 그런데 매출이 줄었다.",
        why: `근데 is spoken; written reports use the full forms.`,
        register: true,
      },
      {
        wrong: "부장님, 제가 말했잖아요.",
        right: "제가 말씀드렸던 것처럼요.",
        why: `Pointing out a superior's mistake with -잖아요 sounds like 'I told you so'. Soften it.`,
        register: true,
      },
      {
        wrong: "그거 내가 할께.",
        right: "그거 내가 할게.",
        why: `It sounds like [할께], but the spelling is -(으)ㄹ게.`,
      },
    ],
    faqs: [
      {
        q: `Should I write 하구 and 그리구 in texts?`,
        a: `Some people do, especially to sound cute or casual, but it's non-standard. Learn to read it; write 하고.`,
      },
      {
        q: `Is 막 rude?`,
        a: `No, it's a very common filler. Overused, it sounds young and casual.`,
      },
    ],
    related: ["attitude-endings", "casual-speech-banmal", "politeness-strategies", "spelling-traps"],
    lessons: [
      "b2-spoken-thing-contractions",
      "b2-spoken-pronoun-contractions",
      "b2-spoken-shortened-words",
      "b2-spoken-so-and-then",
      "b2-spoken-fast-speech-sounds",
      "b2-markers-no-i-mean",
      "b2-markers-fillers",
      "b2-markers-reactions",
      "b2-markers-openers",
      "b2-contrast-you-know-or-you-see",
    ],
  },
  {
    slug: "politeness-strategies",
    title: "Politeness Strategies: Softening, Requesting, Hedging and Refusing",
    description:
      "Politeness beyond honorific endings: softeners (혹시, 좀, 저기, 죄송한데요), the request ladder (해 주세요 → 해 주시면 감사하겠습니다), hedging with -(으)ㄹ 것 같아요 and -지 않을까요?, half-agreeing with -기는 하다, refusing without saying no, and offering with -(으)ㄹ 테니(까).",
    level: "B2",
    intro: [
      `You can use perfect honorifics and still sound rude. Real politeness in Korean comes from indirectness: softening words, asking rather than telling, hedging opinions, and leaving refusals unfinished. These strategies matter more at work and with strangers than any single ending.`,
    ],
    sections: [
      {
        heading: `Softeners and the request ladder`,
        body: [
          `혹시 'by any chance' softens questions (혹시 시간 있으세요?). 좀 softens requests (이것 좀 봐 주세요). 저기 or 저기요 opens politely. 실례지만 / 죄송하지만 / 죄송한데요 come before a request.`,
          `Requests climb a ladder of politeness: 해 주세요 → 해 주시겠어요? → 해 주실 수 있을까요? → 해 주시면 감사하겠습니다. The higher you go, the more indirect and polite.`,
        ],
        table: {
          headers: ["Form", "Feel"],
          rows: [
            ["보내 주세요.", "direct, fine for small things"],
            ["보내 주시겠어요?", "polite question"],
            ["보내 주실 수 있을까요?", "careful, leaves room to say no"],
            ["보내 주시면 감사하겠습니다.", "formal, typical in emails"],
          ],
        },
        examples: [
          { ko: "혹시 이것 좀 봐 주실 수 있을까요?", en: "Could you possibly take a look at this?" },
          { ko: "죄송한데요, 자리 좀 바꿔 주실 수 있으세요?", en: "Sorry, but could you possibly swap seats?" },
          { ko: "자료를 내일까지 보내 주시면 감사하겠습니다.", en: "I'd be grateful if you could send the materials by tomorrow." },
        ],
      },
      {
        heading: `Hedging and half-agreeing`,
        body: [
          `State your own view with -(으)ㄹ 것 같아요: 제 생각에는 좀 어려울 것 같아요. Suggest with -지 않을까요?: 이게 더 낫지 않을까요? Half-agree with -기는 하다: 맛있기는 한데 좀 비싸요 (It is tasty, but...). This yes-but softens disagreement.`,
        ],
        examples: [
          { ko: "제 생각에는 좀 어려울 것 같아요.", en: "I think it might be a bit difficult." },
          { ko: "이 방법이 더 낫지 않을까요?", en: "Wouldn't this way be better?" },
          { ko: "좋기는 한데 예산이 좀 부족할 것 같아요.", en: "It's good, but the budget may be a little short." },
        ],
      },
      {
        heading: `Refusing and offering`,
        body: [
          `Refusals give a trailing reason and stop: 그날은 약속이 있어서요..., 그건 좀 어려울 것 같은데요. The listener understands 'no'. Add 다음에 꼭 같이 가요 to keep the relationship warm.`,
          `-(으)ㄹ 테니(까) offers or reassures: 제가 할 테니까 걱정하지 마세요 (I'll do it, so don't worry).`,
        ],
        examples: [
          { ko: "죄송해요, 그날은 약속이 있어서요.", en: "Sorry, I have plans that day..." },
          { ko: "그건 좀 어려울 것 같은데요.", en: "That might be a bit difficult..." },
          { ko: "제가 정리할 테니까 먼저 들어가세요.", en: "I'll tidy up, so you go on ahead." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "부장님, 이거 해 주세요.",
        right: "부장님, 혹시 이것 좀 확인해 주실 수 있을까요?",
        why: `A bare 해 주세요 to a senior can sound like an order.`,
        register: true,
      },
      {
        wrong: "아니요, 안 가요.",
        right: "아, 그날은 좀 어려울 것 같아요.",
        why: `A flat no to an invitation sounds cold; a soft reason is expected.`,
        register: true,
      },
      {
        wrong: "제가 할 테니까 걱정하지 마.",
        right: "제가 할 테니까 걱정하지 마세요.",
        why: `제가 is polite but 마 is 반말: keep one level. (To a friend: 내가 할 테니까 걱정하지 마.)`,
        register: true,
      },
    ],
    faqs: [
      {
        q: `Isn't -(으)ㄹ 것 같아요 vague?`,
        a: `To English ears, yes. In Korean it's how you present your own opinion modestly; it doesn't mean you're unsure.`,
      },
      {
        q: `Is 좀 always polite?`,
        a: `In requests, yes. Said with a sharp tone (좀!), it means 'for goodness' sake'.`,
      },
    ],
    related: ["polite-requests", "workplace-honorifics", "worry-advice-wishes", "spoken-korean-contractions-fillers"],
    lessons: [
      "b2-politeness-softeners",
      "b2-politeness-request-ladder",
      "b2-politeness-hedging",
      "b2-partial-agreement",
      "b2-politeness-refusals",
      "b2-offers-and-reassurance",
    ],
  },
  {
    slug: "spelling-traps",
    title: "Spelling Traps Natives Make: 되 / 돼, 안 / 않, 대 / 데, 로서 / 로써 and Spacing",
    description:
      "The spellings that even Koreans get wrong: 되 vs 돼, 안 vs 않, -대 vs -데, (으)로서 vs (으)로써, 웬 vs 왠, 며칠, -(으)ㄹ게, -든지 vs -던지, sound-alike pairs (낫다 / 낳다, 맞히다 / 맞추다, 이따가 / 있다가) and common spacing traps.",
    level: "B2",
    intro: [
      `Korean spelling is phonemic, but not entirely. Several pairs sound identical and are spelt differently by meaning. Koreans themselves debate these online. Getting them right is a strong signal of good written Korean.`,
    ],
    sections: [
      {
        heading: `되 or 돼? 안 or 않?`,
        body: [
          `돼 is the contraction of 되어: 안 돼요, 됐어요, 돼서. Before a consonant ending, use 되: 되니까, 되면, 되고, 되는. The test: replace with 하 / 해. If 해 fits (해요), write 돼 (돼요). If 하 fits (하면), write 되 (되면). So *되요 is wrong and 돼요 is right.`,
          `안 is short for 아니 and goes before the verb: 안 가요. 않 is short for 아니하 and comes after -지: 가지 않아요, 않는다, 않은. Expand to check: 아니 가요 → 안 가요; 가지 아니해요 → 가지 않아요.`,
        ],
        table: {
          headers: ["Test", "Correct", "Wrong"],
          rows: [
            ["해요 fits", "돼요, 안 돼요", "*되요"],
            ["하면 fits", "되면", "*돼면"],
            ["before the verb", "안 가요", "*않 가요"],
            ["after -지", "가지 않아요", "*가지 안아요"],
          ],
        },
        examples: [
          { ko: "여기서 사진 찍으면 안 돼요.", en: "You can't take photos here." },
          { ko: "시간이 되면 연락 주세요.", en: "Get in touch if you have time." },
          { ko: "아직 결정되지 않았어요.", en: "It hasn't been decided yet." },
        ],
      },
      {
        heading: `-대 or -데? 로서 or 로써?`,
        body: [
          `-대 is short for -다고 해 (someone said it): 그 식당 맛있대 (I heard that place is good). -데 recalls your own experience (-더라): 그 식당 맛있데 (I've been, it's good). The ending -는데 / -(으)ㄴ데 is always 데.`,
          `(으)로서 means 'as' (status or role): 학생으로서, 부모로서. (으)로써 means 'by means of': 대화로써 해결하다, 이로써 (with this, hereby).`,
        ],
        examples: [
          { ko: "민수가 내일 못 온대.", en: "Minsu says he can't come tomorrow." },
          { ko: "부모로서 책임을 다해야 한다.", en: "As parents, we must fulfil our responsibilities." },
          { ko: "대화로써 문제를 해결했다.", en: "We solved the problem through dialogue." },
        ],
      },
      {
        heading: `Sound-alikes and meaning confusions`,
        body: [
          `웬 'what kind of, unexpected' (웬일이에요?, 웬 사람) vs 왠지 'somehow' (from 왜인지). 며칠 is always 며칠, never *몇일. -(으)ㄹ게 is spelt with 게, though it sounds like 께. -든지 is a choice (뭐든지, 가든지 말든지); -던지 is past degree (얼마나 춥던지).`,
          `Pairs mixed up by meaning: 낫다 (get better, be better), 낳다 (give birth), 낮다 (low); 맞히다 (get the answer right, hit) vs 맞추다 (match, fit, put together); 가르치다 (teach) vs 가리키다 (point at); 이따가 (later) vs 있다가 (after staying); 반드시 (without fail) vs 반듯이 (straight); 부치다 (send) vs 붙이다 (stick).`,
        ],
        examples: [
          { ko: "웬일이에요? 이렇게 일찍 오고.", en: "What's up? You're here so early." },
          { ko: "왠지 기분이 좋아요.", en: "Somehow I feel good." },
          { ko: "감기가 다 나았어요.", en: "My cold is completely better." },
          { ko: "정답을 맞혔어요.", en: "I got the answer right." },
          { ko: "이따가 전화할게요.", en: "I'll call you later." },
        ],
      },
      {
        heading: `Spacing traps`,
        body: [
          `한 번 (once, one time) vs 한번 (sometime, give it a go): 한번 먹어 보세요. 못 하다 (can't do) vs 못하다 (be worse at): 노래를 못 해요 (I can't sing now) vs 노래를 못해요 (I'm bad at singing). 지 meaning 'since' is spaced (온 지 3년), but -는지 'whether' is together (왔는지 몰라요). 수밖에 is one unit after 수: 할 수밖에 없다.`,
        ],
        examples: [
          { ko: "한국에 온 지 3년이 됐어요.", en: "It's been three years since I came to Korea." },
          { ko: "그가 왔는지 모르겠어요.", en: "I don't know whether he came." },
          { ko: "이 집 떡볶이 한번 먹어 보세요.", en: "Give this place's tteokbokki a try." },
          { ko: "기다릴 수밖에 없어요.", en: "We have no choice but to wait." },
        ],
      },
    ],
    mistakes: [
      { wrong: "그럼 안 되요.", right: "그럼 안 돼요.", why: `되어요 contracts to 돼요; *되요 is a spelling error.` },
      { wrong: "저는 가지 안아요.", right: "저는 가지 않아요.", why: `After -지, the negative is 않다 (아니하다).` },
      { wrong: "몇일 동안 쉬었어요.", right: "며칠 동안 쉬었어요.", why: `The standard spelling is always 며칠.` },
      { wrong: "왠일이에요?", right: "웬일이에요?", why: `웬일 is 웬 + 일; only 왠지 is spelt with 왠.` },
      { wrong: "학생으로써 최선을 다하겠습니다.", right: "학생으로서 최선을 다하겠습니다.", why: `'As a student' is a role: (으)로서.` },
      { wrong: "아이를 낫았어요.", right: "아이를 낳았어요.", why: `'Give birth' is 낳다; 낫다 is 'get better'.` },
    ],
    faqs: [
      {
        q: `Do Koreans really get these wrong?`,
        a: `Constantly, especially 되 / 돼 and 웬 / 왠 in casual messages. In formal writing and exams they count as errors.`,
      },
      {
        q: `What's the quickest test for 되 / 돼?`,
        a: `Swap in 하 / 해. If 해 sounds right, write 돼; if 하 sounds right, write 되.`,
      },
    ],
    related: ["dependent-noun-de", "reported-speech-short-forms", "pronunciation-rules", "deorago-and-deon"],
    lessons: [
      "b2-spelling-become-forms-review",
      "b2-spelling-hearsay-or-recall",
      "b2-spelling-not-forms",
      "b2-spelling-as-or-by-means-of",
      "b2-spelling-sound-alikes",
      "b2-spelling-meaning-confusions",
      "b2-contrast-same-sound",
      "b2-spacing-traps",
    ],
  },
];
