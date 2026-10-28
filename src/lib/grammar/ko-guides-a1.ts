// Synced from cheneygross-afk/lengo:src/lib/grammar/ko-guides-a1.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { KoGrammarGuide } from "./ko-types";

// Korean grammar guides, Beginner (A1, TOPIK 1). See the notes at the top of
// ./ko-types.ts.
export const KO_A1_GUIDES: KoGrammarGuide[] = [
  {
    slug: "copula-ieyo-yeyo",
    title: "To Be a Noun: 이에요 / 예요 and 아니에요",
    description:
      "How Korean says 'I am a student' and 'it's not mine': 이에요 after a consonant, 예요 after a vowel, the negative 이 / 가 아니에요, and why there is no separate word for 'am'.",
    level: "A1",
    intro: [
      `English uses to be for everything. Korean splits the job. When you say what something is (a noun), you attach 이에요 or 예요 to the noun: 학생이에요 (I'm a student), 커피예요 (it's coffee). When you say where something is or that it exists, you use a different verb, 있어요, which has its own guide.`,
      `이에요 and 예요 are not separate words: they are written attached to the noun, with no space, and they carry the polite 해요 style you use with almost everyone you don't know well.`,
    ],
    sections: [
      {
        heading: `이에요 after a consonant, 예요 after a vowel`,
        body: [
          `Look at the last syllable of the noun. If it ends in a consonant (a 받침), add 이에요: 선생님이에요, 회사원이에요, 지은이에요. If it ends in a vowel, add 예요: 의사예요, 민수예요, 커피예요. The two are the same word; 예요 is just 이에요 squeezed after a vowel.`,
          `Because Korean drops the subject when it is obvious, 학생이에요 alone is a full sentence: I'm a student, she's a student, or are you a student? with a rising voice. Say 저는 once to set the topic and then leave it out. In speech the final consonant links forward: 선생님이에요 [선생니미에요], 사람이에요 [사라미에요].`,
        ],
        table: {
          headers: ["Noun ends in", "Add", "Examples"],
          rows: [
            ["a consonant", "이에요", "학생이에요, 한국 사람이에요, 책이에요"],
            ["a vowel", "예요", "의사예요, 친구예요, 저예요"],
            ["question", "same form, rising voice", "학생이에요? 뭐예요?"],
          ],
        },
        examples: [
          { ko: "안녕하세요. 저는 김서연이에요.", en: "Hello. I'm Kim Seoyeon." },
          { ko: "저는 미국 사람이에요.", en: "I'm American." },
          { ko: "이건 제 가방이에요.", en: "This is my bag." },
          { ko: "준호 씨는 의사예요?", en: "Is Junho a doctor?" },
          { ko: "네, 의사예요.", en: "Yes, he's a doctor." },
        ],
      },
      {
        heading: `The negative: 이 / 가 아니에요`,
        body: [
          `To say something is not a noun, put the subject particle on the noun and add 아니에요: after a consonant 이 아니에요 (학생이 아니에요), after a vowel 가 아니에요 (의사가 아니에요). 아니에요 is one form for every noun; the 이 / 가 is the part that changes.`,
          `A natural correction pairs the two: 학생이 아니에요. 회사원이에요 (I'm not a student. I'm an office worker). The short answer 아니요 means 'no'; 아니에요 is also used alone to brush off thanks or an apology: 아니에요, 괜찮아요.`,
        ],
        examples: [
          { ko: "저는 중국 사람이 아니에요. 한국 사람이에요.", en: "I'm not Chinese. I'm Korean." },
          { ko: "이거 제 거 아니에요.", en: "This isn't mine." },
          { ko: "민수 씨는 선생님이 아니에요.", en: "Minsu isn't a teacher." },
          { ko: "고마워요. 아니에요.", en: "Thank you. Not at all." },
        ],
      },
      {
        heading: `In the past: 이었어요 / 였어요`,
        body: [
          `The past of 이에요 follows the same consonant and vowel split: 이었어요 after a consonant (학생이었어요) and 였어요 after a vowel (의사였어요). The negative past is 이 / 가 아니었어요. These are taught with the past tense; they are here so you see the whole family.`,
        ],
        table: {
          headers: ["", "After a consonant", "After a vowel"],
          rows: [
            ["It is", "학생이에요", "의사예요"],
            ["It isn't", "학생이 아니에요", "의사가 아니에요"],
            ["It was", "학생이었어요", "의사였어요"],
            ["It wasn't", "학생이 아니었어요", "의사가 아니었어요"],
          ],
        },
        examples: [
          { ko: "작년에는 학생이었어요.", en: "I was a student last year." },
          { ko: "어제는 제 생일이었어요.", en: "Yesterday was my birthday." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "저는 민수이에요.",
        right: "저는 민수예요.",
        why: `민수 ends in a vowel, so it takes 예요. 이에요 is only for nouns ending in a consonant.`,
      },
      {
        wrong: "저는 지은예요.",
        right: "저는 지은이에요.",
        why: `지은 ends in the consonant ㄴ, so it takes 이에요.`,
      },
      {
        wrong: "저는 학생 이에요.",
        right: "저는 학생이에요.",
        why: `이에요 is attached to the noun with no space.`,
      },
      {
        wrong: "저는 학생이요.",
        right: "저는 학생이에요.",
        why: `학생이요 is not a sentence ending here. (이)요 only follows a word in a short answer or a list, as in 뭐 드릴까요? 커피요.`,
      },
      {
        wrong: "저는 학생 아니에요 의사.",
        right: "저는 학생이 아니에요. 의사예요.",
        why: `The verb comes last in Korean, and each sentence takes its own ending.`,
      },
    ],
    faqs: [
      {
        q: `Is 이에요 a verb?`,
        a: `Grammatically it is the copula 이다, which behaves like a verb and takes endings, but it is always attached to a noun. That is why it is written without a space: 학생이다, 학생이에요, 학생입니다.`,
      },
      {
        q: `When do I use 입니다 instead?`,
        a: `입니다 is the formal version (저는 김민수입니다), used in presentations, announcements and very formal first meetings. Beginners use 이에요 / 예요 in conversation; the formal style is taught at the Elementary level.`,
      },
      {
        q: `Why is it 저예요 and not 제예요?`,
        a: `저 (I, humble) is a noun like any other and simply takes 예요: 저예요 (it's me). 제 is a different form, used before a noun (제 가방, my bag) and before 가 (제가).`,
      },
    ],
    related: ["topic-particle-eun-neun", "itda-eopda", "subject-particle-i-ga", "formal-speech-hamnida"],
    lessons: [
      "a1-introductions-1",
      "a1-introductions-2",
      "a1-jobs-and-countries",
      "a1-not-this",
      "a1-past-tense-3",
      "a1-contrast-be-or-exist",
    ],
  },
  {
    slug: "topic-particle-eun-neun",
    title: "The Topic Particle 은 / 는",
    description:
      "What 은 / 는 really does: it sets the topic ('as for me ...'), carries contrast and comes back when you change subject. With the consonant and vowel forms and when to leave it out.",
    level: "A1",
    intro: [
      `은 / 는 marks the topic of a sentence: what you are talking about. 저는 학생이에요 is literally 'as for me, (I) am a student'. English has no particle like it, which is why it feels strange at first and why the difference between 은 / 는 and the subject particle 이 / 가 takes a while to master.`,
      `The good news: the topic particle follows a simple form rule, and for the first months you can use it in a few clear situations: introducing yourself, changing the topic, and contrasting two things.`,
    ],
    sections: [
      {
        heading: `The forms`,
        body: [
          `After a consonant use 은 (선생님은, 서울은, 이름은); after a vowel use 는 (저는, 민수 씨는, 커피는). The particle is written attached to the noun.`,
        ],
        table: {
          headers: ["Noun ends in", "Particle", "Examples"],
          rows: [
            ["a consonant", "은", "이름은, 오늘은, 한국은"],
            ["a vowel", "는", "저는, 친구는, 주말에는"],
          ],
        },
        examples: [
          { ko: "저는 캐나다 사람이에요.", en: "I'm Canadian." },
          { ko: "이름이 뭐예요? 제 이름은 하준이에요.", en: "What's your name? My name is Hajun." },
          { ko: "서울은 커요.", en: "Seoul is big." },
        ],
      },
      {
        heading: `Setting the topic, then dropping it`,
        body: [
          `Use 은 / 는 when you bring something up as the thing you are talking about: 저는 ... , 제 동생은 ... , 오늘은 .... Once the topic is clear, Korean leaves it out. A whole introduction needs 저는 only once: 저는 톰이에요. 미국 사람이에요. 학생이에요. Repeating 저는 in every sentence sounds like a translation from English.`,
          `When you switch to a new topic, mark it with 은 / 는 again. The typical exchange 저는 학생이에요. 민수 씨는요? (I'm a student. And you, Minsu?) uses 은 / 는 to hand the topic over.`,
        ],
        examples: [
          { ko: "저는 톰이에요. 미국 사람이에요.", en: "I'm Tom. I'm American." },
          { ko: "저는 커피를 좋아해요. 지은 씨는요?", en: "I like coffee. What about you, Jieun?" },
          { ko: "제 동생은 대학생이에요.", en: "My younger sibling is a university student." },
          { ko: "오늘은 바빠요.", en: "Today I'm busy." },
        ],
      },
      {
        heading: `Contrast`,
        body: [
          `은 / 는 also contrasts: 'this one, as opposed to others'. 커피는 좋아해요 suggests 'coffee I like (but not something else)'. 오늘은 바빠요 hints 'today I'm busy (unlike other days)'. Two topics side by side make the contrast explicit: 형은 키가 커요. 저는 작아요.`,
          `Because of this, 은 / 는 can attach to almost anything, not only subjects: 주말에는 쉬어요 (at weekends I rest), 한국에서는 (in Korea, at least). The Elementary and Advanced levels come back to this.`,
        ],
        examples: [
          { ko: "고기는 안 먹어요. 생선은 먹어요.", en: "I don't eat meat. I do eat fish." },
          { ko: "형은 키가 커요. 저는 작아요.", en: "My brother is tall. I'm short." },
          { ko: "주말에는 집에서 쉬어요.", en: "At weekends I rest at home." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "저은 학생이에요.",
        right: "저는 학생이에요.",
        why: `저 ends in a vowel, so it takes 는.`,
      },
      {
        wrong: "선생님는 한국 사람이에요.",
        right: "선생님은 한국 사람이에요.",
        why: `선생님 ends in a consonant, so it takes 은.`,
      },
      {
        wrong: "저는 톰이에요. 저는 미국 사람이에요. 저는 학생이에요.",
        right: "저는 톰이에요. 미국 사람이에요. 학생이에요.",
        why: `Not wrong, but unnatural: once the topic is set, Korean drops it.`,
        register: true,
      },
      {
        wrong: "누구는 민수 씨예요?",
        right: "누가 민수 씨예요?",
        why: `A question word asking for new information can't be the topic, because the topic is something already known. As the subject of a question it takes 이 / 가 (누구 + 가 = 누가).`,
      },
    ],
    faqs: [
      {
        q: `What is the difference between 은 / 는 and 이 / 가?`,
        a: `In short: 은 / 는 presents something known as the topic or contrasts it; 이 / 가 marks a subject that is new, the focus, or the answer to a question. 저는 민수예요 introduces me; 제가 민수예요 means 'I'm the one who is Minsu' (answering 'Who's Minsu?'). The guide to 이 / 가 sets the two side by side.`,
      },
      {
        q: `What does 민수 씨는요? mean?`,
        a: `It is a short question built on the topic particle: 'and as for you, Minsu?' Add 요 to keep it polite. It is the natural way to bounce a question back.`,
      },
    ],
    related: ["subject-particle-i-ga", "copula-ieyo-yeyo", "particles-only-or-every", "topic-and-subject-in-discourse"],
    lessons: ["a1-introductions-1", "a1-topic-particle", "a1-contrast-topic-subject", "a2-topic-particle-for-contrast"],
  },
  {
    slug: "this-that-here-there",
    title: "This, That and Over There: 이, 그, 저",
    description:
      "Korean has three demonstratives where English has two: 이 (near me), 그 (near you or already mentioned) and 저 (over there). With 이거 / 그거 / 저거, 여기 / 거기 / 저기, 뭐예요? and 누구예요?",
    level: "A1",
    intro: [
      `English divides the world into this and that. Korean divides it into three: 이 for what is near the speaker, 그 for what is near the listener (or something you both already know about), and 저 for what is far from both of you. The same three-way split runs through 'this thing', 'here' and 'this way'.`,
    ],
    sections: [
      {
        heading: `The three sets`,
        body: [
          `이, 그 and 저 go directly before a noun: 이 사람 (this person), 그 책 (that book, near you), 저 건물 (that building over there). Add 것 (thing) and you get 이것, 그것, 저것, which in speech are almost always shortened to 이거, 그거, 저거.`,
          `The place words follow the same pattern: 여기 (here), 거기 (there, near you, or the place we mentioned), 저기 (over there). 저기요 is also how you call a waiter or get a stranger's attention.`,
        ],
        table: {
          headers: ["", "Near me (이)", "Near you / known (그)", "Over there (저)"],
          rows: [
            ["+ noun", "이 사람", "그 사람", "저 사람"],
            ["thing", "이거 (이것)", "그거 (그것)", "저거 (저것)"],
            ["place", "여기", "거기", "저기"],
            ["with 이 / 가", "이게", "그게", "저게"],
            ["with 을 / 를", "이걸 (이것을)", "그걸", "저걸"],
          ],
        },
        examples: [
          { ko: "이거 얼마예요?", en: "How much is this?" },
          { ko: "그거 제 핸드폰이에요.", en: "That's my phone (the one by you)." },
          { ko: "저 사람은 누구예요?", en: "Who's that person over there?" },
          { ko: "여기가 화장실이에요?", en: "Is this the bathroom?" },
          { ko: "저기요, 물 좀 주세요.", en: "Excuse me, could I have some water?" },
        ],
      },
      {
        heading: `그 for things already mentioned`,
        body: [
          `그 also points back to something in the conversation, where English says that or the: 어제 영화 봤어요. 그 영화 정말 재미있었어요 (I saw a film yesterday. That film was really good). On the phone, 거기 means 'where you are': 거기 날씨 어때요? Use 저 only for something you can both actually see.`,
        ],
        examples: [
          { ko: "그 식당 어디에 있어요?", en: "Where is that restaurant (you mentioned)?" },
          { ko: "거기 지금 비 와요?", en: "Is it raining there now?" },
          { ko: "그게 무슨 뜻이에요?", en: "What does that mean?" },
        ],
      },
      {
        heading: `What is it? Who is it?`,
        body: [
          `뭐예요? asks 'what is it?' (written 무엇이에요? in formal texts) and 누구예요? asks 'who is it?'. As a subject, 누구 + 가 becomes 누가: 누가 왔어요? (who came?). To ask whose, say 누구 거예요? (whose is it?), answered with 제 거예요 (it's mine).`,
        ],
        examples: [
          { ko: "이게 뭐예요? 김밥이에요.", en: "What's this? It's gimbap." },
          { ko: "저분은 누구세요?", en: "Who is that (respected) person?" },
          { ko: "이 우산 누구 거예요?", en: "Whose umbrella is this?" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "이 것 뭐예요?",
        right: "이거 뭐예요?",
        why: `이것 is one word (no space), and in speech it is 이거.`,
      },
      {
        wrong: "저 책 좀 보여 주세요.",
        right: "그 책 좀 보여 주세요.",
        why: `Asking about the book in the listener's hand: something near the listener is 그, not 저. 저 is for things far from both of you.`,
        register: true,
      },
      {
        wrong: "이는 제 친구예요.",
        right: "이 사람은 제 친구예요.",
        why: `In speech 이 needs a noun after it. (Written 이는 'this' refers to a fact, never to a person.) For people use 이 사람 or, politely, 이분.`,
      },
      {
        wrong: "누구가 왔어요?",
        right: "누가 왔어요?",
        why: `누구 + 가 contracts to 누가.`,
      },
    ],
    faqs: [
      {
        q: `Is it 이게 or 이것이?`,
        a: `Both are correct. 이것이 is the full written form; 이게 is what everyone says. Likewise 그게 / 그것이, 이건 / 이것은 and 이걸 / 이것을.`,
      },
      {
        q: `Why do Koreans say 저기요 to call a waiter?`,
        a: `It is literally 'over there' with 요, a polite way of saying 'excuse me' without using a name or title. 여기요 ('over here') is also common in restaurants.`,
      },
    ],
    related: ["possessive-ui", "question-words", "copula-ieyo-yeyo"],
    lessons: [
      "a1-this-that-1",
      "a1-this-that-2",
      "a1-what-and-who",
      "a1-here-there",
      "a1-contrast-this-that-here-there",
      "a1-error-hunt-this-that",
    ],
  },
  {
    slug: "possessive-ui",
    title: "Whose Is It? The Particle 의, 제 and 내",
    description:
      "Possession in Korean: the particle 의 (said [에]), when Koreans drop it, the short forms 제 and 내, 거 for 'mine' and 'yours', and humble 제가 and 저를.",
    level: "A1",
    intro: [
      `The particle 의 links two nouns like English 's or of: 민수 씨의 책 (Minsu's book). But in everyday Korean it is dropped more often than it is used: 민수 씨 책 means the same. And the most common possessives, my and your, have short forms of their own.`,
    ],
    sections: [
      {
        heading: `의 and when to drop it`,
        body: [
          `The owner comes first, then 의, then the thing: 선생님의 차 (the teacher's car), 한국의 수도 (the capital of Korea). As a particle 의 is usually pronounced [에]: 친구의 [친구에].`,
          `In conversation, Koreans leave 의 out whenever the meaning is clear: 친구 집, 회사 이름, 엄마 생일. Keep it in writing, in titles and when the phrase gets long or abstract.`,
        ],
        examples: [
          { ko: "이건 민수 씨 가방이에요.", en: "This is Minsu's bag." },
          { ko: "서울은 한국의 수도예요.", en: "Seoul is the capital of Korea." },
          { ko: "친구 집에 가요.", en: "I'm going to my friend's house." },
          { ko: "선생님 전화번호 알아요?", en: "Do you know the teacher's phone number?" },
        ],
      },
      {
        heading: `My and your: 제, 내, 네`,
        body: [
          `저의 (my, humble) contracts to 제, and 나의 (my, casual) to 내. Use 제 in polite speech: 제 이름은 ... , 제 친구. Use 내 with friends in 반말. 'Your' is harder: Korean avoids a word for 'you' with adults and uses the person's name or title instead: 민수 씨 가방이에요? To a friend, 네 (your) is written 네 but usually said [니] to avoid confusion with 내.`,
          `우리 (our) is also used where English says my, for things shared with a group: 우리 엄마 (my mum), 우리 회사 (my company), 우리 집 (my home). In polite speech to outsiders, 저희 is the humble version: 저희 회사.`,
        ],
        table: {
          headers: ["", "Polite / humble", "Casual"],
          rows: [
            ["my", "제 (저의)", "내 (나의)"],
            ["mine", "제 거", "내 거"],
            ["I (subject)", "제가", "내가"],
            ["me (object)", "저를 (절)", "나를 (날)"],
            ["our / my (group)", "저희", "우리"],
          ],
        },
        examples: [
          { ko: "제 이름은 박준호예요.", en: "My name is Park Junho." },
          { ko: "이 우산 제 거예요.", en: "This umbrella is mine." },
          { ko: "우리 엄마는 요리를 잘해요.", en: "My mum is a good cook." },
          { ko: "제가 할게요.", en: "I'll do it." },
        ],
      },
      {
        heading: `거: 'the one belonging to'`,
        body: [
          `거 (spoken for 것, thing) after a noun means 'the one belonging to': 제 거 (mine), 민수 씨 거 (Minsu's), 누구 거예요? (whose is it?). It turns a possessive into a noun, the way English mine and yours do.`,
        ],
        examples: [
          { ko: "이 커피 누구 거예요? 지은 씨 거예요.", en: "Whose coffee is this? It's Jieun's." },
          { ko: "그거 제 거 아니에요.", en: "That isn't mine." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "저 이름은 톰이에요.",
        right: "제 이름은 톰이에요.",
        why: `Before a noun, 'my' is 제 (from 저의), not 저.`,
      },
      {
        wrong: "저가 할게요.",
        right: "제가 할게요.",
        why: `저 becomes 제 before the subject particle 가. The same with 나 → 내가 and 너 → 네가.`,
      },
      {
        wrong: "이 가방은 제예요.",
        right: "이 가방은 제 거예요.",
        why: `제 is only 'my' before a noun. 'Mine' needs 거: 제 거.`,
      },
      {
        wrong: "당신의 이름은 뭐예요?",
        right: "이름이 뭐예요?",
        why: `당신 is not a neutral 'you' and sounds odd or rude here. Leave 'you' out, or use the person's name or title.`,
        register: true,
      },
    ],
    faqs: [
      {
        q: `Why do Koreans say 우리 엄마 when they're an only child?`,
        a: `Because 우리 expresses belonging to a group (my family, my company, my country) rather than literal plural ownership. 우리 남편 (my husband) is completely normal. To an outsider in polite speech, 저희 is the humble version.`,
      },
      {
        q: `How do I say 'your' to a stranger?`,
        a: `Usually you don't: Koreans leave it out (이름이 뭐예요?) or use a title or name (선생님 차, 민수 씨 거). 당신 exists, but between strangers it can sound confrontational; it is mostly used between spouses and in writing.`,
      },
    ],
    related: ["this-that-here-there", "copula-ieyo-yeyo", "casual-speech-banmal"],
    lessons: ["a1-possessive-particle", "a1-my-and-mine", "a1-error-hunt-this-that", "a1-humble-me"],
  },
  {
    slug: "sino-korean-numbers",
    title: "Sino-Korean Numbers: Money, Dates and Phone Numbers",
    description:
      "일, 이, 삼: the numbers for prices, dates, months, minutes, phone numbers and floors, how Korean counts in units of ten thousand (만), and the special spellings 유월 and 시월.",
    level: "A1",
    intro: [
      `Korean has two sets of numbers. The Sino-Korean set (일, 이, 삼 ...) came into Korean long ago and is used for anything that is measured or numbered: money, dates, months, years, minutes, phone numbers, floors and most units. The native set (하나, 둘, 셋 ...) is for counting things and hours, and has its own guide.`,
      `The Sino-Korean numbers are perfectly regular once you know ten digits and four big units. The only real trap for English speakers is that Korean groups big numbers by ten thousand, not by thousand.`,
    ],
    sections: [
      {
        heading: `One to a billion`,
        body: [
          `The digits are 일, 이, 삼, 사, 오, 육, 칠, 팔, 구, then 십 (10). Larger numbers are built like a calculator: 십일 (11), 이십 (20), 이십삼 (23), 백 (100), 천 (1,000), 만 (10,000). Don't put 일 before 십, 백, 천 or 만 in speech: 10,000 is 만 and 100 is 백 (일만 appears only in very formal writing, such as on cheques).`,
          `The key unit is 만. Korean counts up to 9,999 and then starts counting in 만: 20,000 is 이만, 100,000 is 십만, 1,000,000 is 백만, and 100,000,000 is 억. So 35,000 won is 삼만 오천 원 and 1,200,000 won is 백이십만 원. Nasalisation changes the sound of some combinations: 십만 [심만], 백만 [뱅만], 육만 [융만].`,
        ],
        table: {
          headers: ["Number", "Korean", "Number", "Korean"],
          rows: [
            ["1", "일", "10", "십"],
            ["2", "이", "100", "백"],
            ["3", "삼", "1,000", "천"],
            ["4", "사", "10,000", "만"],
            ["5", "오", "50,000", "오만"],
            ["6", "육", "100,000", "십만 [심만]"],
            ["7", "칠", "1,000,000", "백만 [뱅만]"],
            ["8", "팔", "10,000,000", "천만"],
            ["9", "구", "100,000,000", "억"],
          ],
        },
        examples: [
          { ko: "이거 얼마예요? 만 오천 원이에요.", en: "How much is this? It's 15,000 won." },
          { ko: "커피 두 잔에 구천 원이에요.", en: "Two coffees come to 9,000 won." },
          { ko: "월세가 오십만 원이에요.", en: "The rent is 500,000 won a month." },
          { ko: "사무실은 3층에 있어요.", en: "The office is on the third floor." },
        ],
      },
      {
        heading: `Phone numbers, months and dates`,
        body: [
          `Phone numbers are read digit by digit, with 공 for zero and [에] for the dash (it is the particle 의, often written 에): 010-1234-5678 is 공일공에 일이삼사에 오육칠팔. Months are the number plus 월: 일월, 이월 ... 십이월, with two special spellings: 유월 (June, not *육월) and 시월 (October, not *십월). Days are the number plus 일: 삼일, 십오일, 삼십일일.`,
          `Dates go from big to small: year, month, day. 2026년 3월 1일 is 이천이십육 년 삼월 일일. Ask the date with the set phrase 몇 월 며칠이에요? (spelled 며칠, never *몇일).`,
        ],
        examples: [
          { ko: "제 전화번호는 공일공에 사오육칠에 팔구공일이에요.", en: "My phone number is 010-4567-8901." },
          { ko: "오늘 몇 월 며칠이에요? 유월 십일이에요.", en: "What's the date today? It's June 10th." },
          { ko: "제 생일은 시월 이십오일이에요.", en: "My birthday is October 25th." },
          { ko: "저는 이천 년에 태어났어요.", en: "I was born in 2000." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "일만 원",
        right: "만 원",
        why: `In speech Koreans don't say 일 before 십, 백, 천 or 만 when the number is just one of them. 일만 is limited to very formal writing.`,
        register: true,
      },
      {
        wrong: "십천 원",
        right: "만 원",
        why: `Korean doesn't count thousands past 9,000: 10,000 is a new unit, 만.`,
      },
      {
        wrong: "육월",
        right: "유월",
        why: `June and October have fixed spellings: 유월 and 시월.`,
      },
      {
        wrong: "몇일이에요?",
        right: "며칠이에요?",
        why: `'What day of the month' is always spelled 며칠.`,
      },
      {
        wrong: "다섯 월",
        right: "오월",
        why: `Months use Sino-Korean numbers. Native numbers are for counting things and hours.`,
      },
    ],
    faqs: [
      {
        q: `How do I read 3,500,000 quickly?`,
        a: `Split from the right into groups of four digits: 350|0000. The left group is 350 만, so 삼백오십만. For 12,345,678: 1234|5678 = 천이백삼십사만 오천육백칠십팔.`,
      },
      {
        q: `Which do I use for minutes and hours?`,
        a: `Hours use native numbers (세 시, three o'clock) and minutes use Sino-Korean (삼십 분, thirty minutes): 세 시 삼십 분. The counting guide covers time.`,
      },
    ],
    related: ["native-numbers-and-counters", "polite-requests"],
    lessons: [
      "a1-sino-numbers-1",
      "a1-sino-numbers-2",
      "a1-prices",
      "a1-please-give-me",
      "a1-phone-numbers",
      "a1-months-and-dates",
      "a1-error-hunt-numbers",
    ],
  },
  {
    slug: "native-numbers-and-counters",
    title: "Native Numbers, Counters and Telling the Time",
    description:
      "하나, 둘, 셋: the native Korean numbers, their short forms before a counter (한 개, 두 명, 세 시), the common counters, the word order noun + number + counter, and how to tell the time.",
    level: "A1",
    intro: [
      `Native Korean numbers are the ones you use to count things, people, ages and hours. They go up to 99 (one hundred and above switch to Sino-Korean), and in practice you use them most from one to about thirty.`,
      `Korean, like Japanese and Chinese, counts with a counter word: not 'two coffees' but 'coffee two cups', 커피 두 잔. Learning the handful of everyday counters is the real work of this point.`,
    ],
    sections: [
      {
        heading: `The numbers and their short forms`,
        body: [
          `One to ten are 하나, 둘, 셋, 넷, 다섯, 여섯, 일곱, 여덟, 아홉, 열; the tens are 스물 (20), 서른 (30), 마흔 (40), 쉰 (50). Eleven is 열하나, twenty-five 스물다섯.`,
          `Before a counter, five numbers shorten: 하나 → 한, 둘 → 두, 셋 → 세, 넷 → 네, 스물 → 스무. So it is 한 개, 두 명, 세 시, 네 살, 스무 살, and also 열한 개, 스물두 명. Everything else stays as it is: 다섯 개, 여덟 시.`,
        ],
        table: {
          headers: ["Number", "Alone", "Before a counter"],
          rows: [
            ["1", "하나", "한 개"],
            ["2", "둘", "두 명"],
            ["3", "셋", "세 시"],
            ["4", "넷", "네 살"],
            ["5", "다섯", "다섯 잔"],
            ["10", "열", "열 권"],
            ["11", "열하나", "열한 개"],
            ["20", "스물", "스무 살"],
            ["21", "스물하나", "스물한 살"],
          ],
        },
        examples: [
          { ko: "사과 세 개 주세요.", en: "Three apples, please." },
          { ko: "저는 스물다섯 살이에요.", en: "I'm twenty-five." },
          { ko: "우리 가족은 네 명이에요.", en: "There are four of us in my family." },
          { ko: "고양이 두 마리가 있어요.", en: "I have two cats." },
        ],
      },
      {
        heading: `Counters and word order`,
        body: [
          `The order is noun, number, counter: 커피 두 잔 (two cups of coffee), 학생 다섯 명 (five students). The noun can take a particle: 맥주를 두 병 마셨어요. Write the number and counter with a space (두 잔), though Arabic numerals join the counter (2잔).`,
          `개 is the general counter for things, and you can fall back on it when you don't know the right one. To ask how many, use 몇 + counter: 몇 개?, 몇 명?, 몇 살이에요? (how old are you?). Note the pronunciation: 몇 개 [멷깨], 몇 명 [면명].`,
        ],
        table: {
          headers: ["Counter", "For", "Example"],
          rows: [
            ["개", "things in general", "가방 한 개"],
            ["명 (분 honorific)", "people", "친구 세 명, 손님 두 분"],
            ["살", "age", "열 살"],
            ["잔", "cups, glasses", "커피 두 잔"],
            ["병", "bottles", "물 한 병"],
            ["권", "books, notebooks", "책 네 권"],
            ["마리", "animals", "개 한 마리"],
            ["장", "flat things: paper, tickets", "표 두 장"],
          ],
        },
        examples: [
          { ko: "아메리카노 두 잔하고 라떼 한 잔 주세요.", en: "Two Americanos and one latte, please." },
          { ko: "몇 분이세요? 세 명이에요.", en: "How many of you are there? Three." },
          { ko: "책을 몇 권 샀어요?", en: "How many books did you buy?" },
        ],
      },
      {
        heading: `Telling the time: native hours, Sino-Korean minutes`,
        body: [
          `Hours use native numbers with 시: 한 시, 두 시, 세 시 ... 열두 시. Minutes use Sino-Korean numbers with 분: 십 분, 삼십오 분. Half past is 반: 세 시 반. Add 오전 (a.m.) or 오후 (p.m.) in front: 오후 두 시 십 분.`,
          `Ask the time with 지금 몇 시예요? (what time is it now?) and 'at' a time with 에: 일곱 시에 일어나요.`,
        ],
        examples: [
          { ko: "지금 몇 시예요? 네 시 이십 분이에요.", en: "What time is it now? It's 4:20." },
          { ko: "수업은 오전 아홉 시 반에 시작해요.", en: "Class starts at 9:30 a.m." },
          { ko: "열두 시에 점심을 먹어요.", en: "I have lunch at twelve." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "하나 개 주세요.",
        right: "한 개 주세요.",
        why: `하나 shortens to 한 before a counter. Likewise 두, 세, 네, 스무.`,
      },
      {
        wrong: "두 커피 주세요.",
        right: "커피 두 잔 주세요.",
        why: `Korean order is noun + number + counter.`,
      },
      {
        wrong: "삼 시",
        right: "세 시",
        why: `Hours use native numbers. Minutes use Sino-Korean ones: 세 시 삼십 분.`,
      },
      {
        wrong: "이십 살",
        right: "스무 살",
        why: `Age in everyday speech uses native numbers. 이십 세 exists, but only in forms and formal writing.`,
      },
      {
        wrong: "스물 살",
        right: "스무 살",
        why: `스물 shortens to 스무 before a counter, but 스물한 살, 스물두 살 keep 스물.`,
      },
    ],
    faqs: [
      {
        q: `How do I know which number system to use?`,
        a: `Rule of thumb: native numbers count (things, people, hours, age); Sino-Korean numbers measure and name (money, minutes, dates, months, phone numbers, floors, numbers above 99). The course has a Contrast Clinic just for this.`,
      },
      {
        q: `Do Koreans really count age differently?`,
        a: `Since a 2023 law, official documents use international age (만 나이). In daily life most people now give that age too, though older people may still mention the traditional count, in which you are one at birth.`,
      },
    ],
    related: ["sino-korean-numbers", "place-particles-e-eseo"],
    lessons: [
      "a1-native-numbers-1",
      "a1-native-numbers-2",
      "a1-counters-things-drinks",
      "a1-counting-people",
      "a1-age",
      "a1-telling-time",
      "a1-contrast-native-sino",
      "a1-error-hunt-counting",
    ],
  },
  {
    slug: "itda-eopda",
    title: "There Is, There Isn't: 있어요 and 없어요",
    description:
      "있다 and 없다 for existence, location and having: 동생이 있어요, 가방에 있어요, 시간이 없어요. With position words (위, 아래, 앞, 뒤, 옆, 안, 밖) and the difference between 이에요 and 있어요.",
    level: "A1",
    intro: [
      `있어요 means there is, it's (somewhere), and I have. 없어요 means the opposite: there isn't, it's not there, I don't have. Korean doesn't distinguish 'have' from 'there is': 동생이 있어요 is both 'I have a younger sibling' and literally 'a younger sibling exists'.`,
    ],
    sections: [
      {
        heading: `Having and existing`,
        body: [
          `The thing that exists takes the subject particle 이 / 가: 시간이 있어요 (I have time), 돈이 없어요 (I have no money), 질문이 있어요 (I have a question). To say who has it, put the person first as a topic: 저는 형이 있어요 (I have an older brother). There is no 을 / 를 here, because 있다 is not an action done to the thing.`,
          `The pronunciation links: 있어요 [이써요], 없어요 [업써요]; and the dictionary forms are said [읻따] and [업따].`,
        ],
        examples: [
          { ko: "오늘 시간 있어요?", en: "Do you have time today?" },
          { ko: "저는 형이 한 명 있어요.", en: "I have one older brother." },
          { ko: "죄송해요, 지금 현금이 없어요.", en: "Sorry, I don't have any cash right now." },
          { ko: "질문 있어요?", en: "Any questions?" },
        ],
      },
      {
        heading: `Where something is: place + 에 있어요`,
        body: [
          `For location, put the place with 에 before 있어요: 가방에 있어요 (it's in the bag), 서울에 있어요 (it's in Seoul). To ask, use 어디에 있어요? or, more simply, 어디 있어요?`,
          `Position words are nouns, and they come after the reference point: 책상 위에 (on the desk, literally 'desk top at'), 의자 아래에 or 의자 밑에 (under the chair), 집 앞에 (in front of the house), 은행 옆에 (next to the bank). English puts the preposition first; Korean puts the place first.`,
        ],
        table: {
          headers: ["Word", "Meaning", "Example"],
          rows: [
            ["위", "on, above", "책상 위에 있어요"],
            ["아래 / 밑", "under, below", "침대 밑에 있어요"],
            ["앞", "in front of", "역 앞에 있어요"],
            ["뒤", "behind", "학교 뒤에 있어요"],
            ["옆", "next to", "편의점 옆에 있어요"],
            ["안", "inside", "가방 안에 있어요"],
            ["밖", "outside", "건물 밖에 있어요"],
            ["사이", "between", "은행하고 카페 사이에 있어요"],
          ],
        },
        examples: [
          { ko: "화장실이 어디에 있어요?", en: "Where is the bathroom?" },
          { ko: "핸드폰은 책상 위에 있어요.", en: "The phone is on the desk." },
          { ko: "편의점은 지하철역 옆에 있어요.", en: "The convenience store is next to the subway station." },
          { ko: "고양이가 침대 밑에 있어요.", en: "The cat is under the bed." },
        ],
      },
      {
        heading: `이에요 or 있어요?`,
        body: [
          `Use 이에요 / 예요 to say what something is (identity) and 있어요 to say where it is or that it exists. 여기가 화장실이에요 means 'this is the bathroom'; 화장실이 여기 있어요 means 'the bathroom is here'. A useful test: if English could replace is with is located, you need 있어요.`,
          `With respected people, 있다 meaning 'be somewhere' becomes 계시다 (선생님이 교실에 계세요), and 있다 meaning 'have' becomes 있으시다 (시간 있으세요?). These are taught with honorifics.`,
        ],
        examples: [
          { ko: "여기가 제 방이에요.", en: "This is my room." },
          { ko: "제 방은 2층에 있어요.", en: "My room is on the second floor." },
          { ko: "선생님, 시간 있으세요?", en: "Do you have a moment, teacher?" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "저는 시간을 있어요.",
        right: "저는 시간이 있어요.",
        why: `있다 takes 이 / 가 for the thing that exists, not the object particle.`,
      },
      {
        wrong: "은행이에요 옆에 카페.",
        right: "은행 옆에 카페가 있어요.",
        why: `Location is 있어요, and the position word comes after its reference point: 은행 옆에.`,
      },
      {
        wrong: "가방이 위에 책상 있어요.",
        right: "가방이 책상 위에 있어요.",
        why: `Reference point first, then the position word with 에.`,
      },
      {
        wrong: "화장실이 어디예요 있어요?",
        right: "화장실이 어디에 있어요?",
        why: `Either 어디예요? (where is it?) or 어디에 있어요?, not both. Both are natural.`,
      },
    ],
    faqs: [
      {
        q: `Is 어디예요? the same as 어디에 있어요?`,
        a: `Nearly. 화장실이 어디예요? and 화장실이 어디에 있어요? both ask where the bathroom is. 어디예요? is also used for 'where are you?' on the phone: 지금 어디예요?`,
      },
      {
        q: `What about 재미있어요 and 맛있어요?`,
        a: `They are compounds with 있다: 재미 (fun) + 있다 = 'to be fun', 맛 (taste) + 있다 = 'to be tasty'. Their opposites use 없다: 재미없어요, 맛없어요. Note 맛있어요 [마시써요] and 맛없어요 [마덥써요].`,
      },
    ],
    related: ["copula-ieyo-yeyo", "subject-particle-i-ga", "place-particles-e-eseo", "honorifics-si"],
    lessons: [
      "a1-there-is-1",
      "a1-there-is-2",
      "a1-position-words",
      "a1-family-words",
      "a1-do-you-have-siblings",
      "a1-contrast-be-or-exist",
      "a1-error-hunt-existence",
    ],
  },
  {
    slug: "polite-present-haeyo",
    title: "Verb Stems and the Polite 해요 Ending",
    description:
      "How every Korean verb works: dictionary form, stem, and the polite present -아요 / -어요 / 해요, with the vowel contractions (가요, 봐요, 마셔요, 배워요, 돼요) that make it sound natural.",
    level: "A1",
    intro: [
      `Korean verbs don't change for person: 가요 is I go, you go, she goes, we go and they go. What changes is the ending, which tells you the tense, the speech level and the speaker's attitude. The everyday polite present ends in 요, and it is the form you'll use more than any other.`,
      `Every verb is listed in the dictionary with -다: 가다 (to go), 먹다 (to eat), 공부하다 (to study). Take off -다 and you have the stem (가-, 먹-, 공부하-), and the stem is what all endings attach to.`,
    ],
    sections: [
      {
        heading: `The rule: look at the last vowel of the stem`,
        body: [
          `If the stem's last vowel is ㅏ or ㅗ, add -아요: 살다 → 살아요, 좋다 → 좋아요, 받다 → 받아요. With any other vowel, add -어요: 먹다 → 먹어요, 읽다 → 읽어요, 있다 → 있어요. Every 하다 verb becomes 해요: 공부하다 → 공부해요, 일하다 → 일해요.`,
          `The same 요 form is a statement, a question and even a suggestion: only the intonation changes. 가요. (I'm going.) 가요? (Are you going?) 같이 가요! (Let's go together!)`,
        ],
        table: {
          headers: ["Stem's last vowel", "Ending", "Examples"],
          rows: [
            ["ㅏ or ㅗ", "-아요", "앉다 → 앉아요, 놀다 → 놀아요, 좋다 → 좋아요"],
            ["any other vowel", "-어요", "먹다 → 먹어요, 읽다 → 읽어요, 웃다 → 웃어요"],
            ["하다", "해요", "공부하다 → 공부해요, 운동하다 → 운동해요"],
          ],
        },
        examples: [
          { ko: "저는 서울에 살아요.", en: "I live in Seoul." },
          { ko: "아침을 안 먹어요.", en: "I don't eat breakfast." },
          { ko: "지금 뭐 해요?", en: "What are you doing now?" },
          { ko: "주말에 운동해요.", en: "I exercise at weekends." },
        ],
      },
      {
        heading: `Contraction when the stem ends in a vowel`,
        body: [
          `When a stem ends in a vowel, the ending merges with it. ㅏ + 아 is just ㅏ: 가다 → 가요, 사다 → 사요. ㅓ + 어 is ㅓ: 서다 → 서요. ㅗ + 아 becomes ㅘ: 오다 → 와요, 보다 → 봐요. ㅜ + 어 becomes ㅝ: 배우다 → 배워요, 주다 → 줘요. ㅣ + 어 becomes ㅕ: 마시다 → 마셔요, 기다리다 → 기다려요. ㅐ and ㅔ usually stay: 보내다 → 보내요. 되다 becomes 돼요 (되 + 어).`,
          `These contractions are not optional in speech: 가아요 and 마시어요 are not said. Learn each verb with its 요 form.`,
        ],
        table: {
          headers: ["Stem ends in", "Becomes", "Examples"],
          rows: [
            ["ㅏ", "ㅏ요", "가다 → 가요, 자다 → 자요"],
            ["ㅓ / ㅕ", "ㅓ요 / ㅕ요", "서다 → 서요, 켜다 → 켜요"],
            ["ㅗ", "ㅘ요", "오다 → 와요, 보다 → 봐요"],
            ["ㅜ", "ㅝ요", "배우다 → 배워요, 주다 → 줘요"],
            ["ㅣ", "ㅕ요", "마시다 → 마셔요, 가르치다 → 가르쳐요"],
            ["ㅐ / ㅔ", "unchanged", "보내다 → 보내요, 세다 → 세요"],
            ["ㅚ", "ㅙ요", "되다 → 돼요"],
          ],
        },
        examples: [
          { ko: "몇 시에 와요?", en: "What time are you coming?" },
          { ko: "저는 한국어를 배워요.", en: "I'm learning Korean." },
          { ko: "커피를 마셔요.", en: "I'm drinking coffee." },
          { ko: "여기서 기다려요.", en: "I'll wait here." },
          { ko: "괜찮아요, 돼요.", en: "That's fine, it works." },
        ],
      },
      {
        heading: `What the present covers`,
        body: [
          `The 요 present covers English 'I do', 'I'm doing' and often 'I'm going to': 지금 공부해요 (I'm studying now), 매일 공부해요 (I study every day), 내일 부산에 가요 (I'm going to Busan tomorrow). Korean has a separate progressive (-고 있어요) and future (-(으)ㄹ 거예요), but the simple present is fine for a scheduled plan.`,
        ],
        examples: [
          { ko: "내일 친구를 만나요.", en: "I'm meeting a friend tomorrow." },
          { ko: "매일 아침 일곱 시에 일어나요.", en: "I get up at seven every morning." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "먹아요",
        right: "먹어요",
        why: `The stem 먹- has ㅓ, so it takes -어요. Only ㅏ and ㅗ take -아요.`,
      },
      {
        wrong: "마시어요",
        right: "마셔요",
        why: `ㅣ + 어 contracts to ㅕ. 마시어요 is not wrong on paper, but nobody says it.`,
        register: true,
      },
      {
        wrong: "공부하요",
        right: "공부해요",
        why: `Every 하다 verb becomes 해요.`,
      },
      {
        wrong: "되요",
        right: "돼요",
        why: `되 + 어요 = 돼요. 되요 is one of the most common spelling mistakes, even among Koreans.`,
      },
      {
        wrong: "저는 가요 학교에.",
        right: "저는 학교에 가요.",
        why: `The verb always comes at the end of the sentence.`,
      },
    ],
    faqs: [
      {
        q: `Does the 요 form work for everyone?`,
        a: `It is the safe polite style for strangers, shop staff, colleagues and anyone older. Very formal situations use -ㅂ니다 / -습니다, and close friends of the same age use 반말 (the 요 form without 요). Both come at the Elementary level.`,
      },
      {
        q: `Why is it 좋아요 and not 좋어요?`,
        a: `The stem 좋- has the vowel ㅗ, which takes -아요. The rule always looks at the last vowel of the stem, whatever consonant follows.`,
      },
      {
        q: `What about verbs like 듣다 and 덥다?`,
        a: `A few groups of verbs change their stem before a vowel: 듣다 → 들어요, 덥다 → 더워요, 바쁘다 → 바빠요. These are the irregular verbs, introduced gently at Beginner and covered fully at Elementary.`,
      },
    ],
    related: ["object-particle-eul-reul", "past-tense", "descriptive-verbs", "irregular-verbs-1"],
    lessons: [
      "a1-verb-stems",
      "a1-polite-present-1",
      "a1-polite-present-2",
      "a1-polite-present-3",
      "a1-transform-dictionary-to-polite",
      "a1-error-hunt-verb-endings",
    ],
  },
  {
    slug: "object-particle-eul-reul",
    title: "The Object Particle 을 / 를",
    description:
      "을 / 를 marks the thing you act on: 밥을 먹어요, 커피를 마셔요. The forms, when it's dropped in speech, and the verbs that take 이 / 가 or another particle instead.",
    level: "A1",
    intro: [
      `In English, word order tells you who did what: the dog bit the man. In Korean the verb comes last and the order of the other words is flexible, so particles do the job. 을 / 를 marks the object: the thing that is eaten, read, bought or liked.`,
    ],
    sections: [
      {
        heading: `The forms and the order`,
        body: [
          `After a consonant use 을 (밥을, 책을, 음악을); after a vowel use 를 (커피를, 영화를, 친구를). The usual order is subject, object, verb: 저는 커피를 마셔요. Because the particles carry the roles, you can also say 커피를 저는 마셔요 for emphasis, though the basic order is more common.`,
        ],
        table: {
          headers: ["Noun ends in", "Particle", "Examples"],
          rows: [
            ["a consonant", "을", "밥을, 사진을, 한국어를 (어 is a vowel)"],
            ["a vowel", "를", "커피를, 노래를, 저를"],
          ],
        },
        examples: [
          { ko: "아침에 빵을 먹어요.", en: "I eat bread in the morning." },
          { ko: "주말에 영화를 봐요.", en: "I watch a film at the weekend." },
          { ko: "저는 한국 음악을 좋아해요.", en: "I like Korean music." },
          { ko: "누구를 기다려요?", en: "Who are you waiting for?" },
        ],
      },
      {
        heading: `Dropping it in speech`,
        body: [
          `In casual and polite conversation, 을 / 를 is often left out when the meaning is obvious: 밥 먹었어요?, 커피 마실래요?, 숙제 했어요? This is natural, not lazy. In writing and in careful speech, keep it. Learners should write it until they are confident, and then let it go where Koreans do.`,
          `With 하다 verbs, the noun can take 을 / 를 and split off: 공부해요 = 공부를 해요, 운동해요 = 운동을 해요. Negation then goes between: 공부를 안 해요.`,
        ],
        examples: [
          { ko: "밥 먹었어요?", en: "Have you eaten?" },
          { ko: "매일 한국어 공부를 해요.", en: "I study Korean every day." },
          { ko: "운동을 별로 안 해요.", en: "I don't exercise much." },
        ],
      },
      {
        heading: `Verbs that don't take 을 / 를 the way English suggests`,
        body: [
          `Some English 'objects' are not objects in Korean. 있다 and 없다 take 이 / 가 (시간이 있어요). Descriptive verbs take 이 / 가 (머리가 아파요). 되다 (become) takes 이 / 가 (의사가 됐어요). Meeting is 를 만나다 (친구를 만나요), but riding is 를 타다 (버스를 타요), and going is 에 가다, never 을 / 를.`,
          `좋다 means 'to be good' and takes 이 / 가 (저는 이 노래가 좋아요, this song is good to me), while 좋아하다 means 'to like' and takes 을 / 를 (저는 이 노래를 좋아해요). Both are natural.`,
        ],
        examples: [
          { ko: "저는 고양이가 좋아요.", en: "I like cats." },
          { ko: "저는 고양이를 좋아해요.", en: "I like cats." },
          { ko: "지하철을 타요.", en: "I take the subway." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "커피을 마셔요.",
        right: "커피를 마셔요.",
        why: `커피 ends in a vowel, so it takes 를.`,
      },
      {
        wrong: "학교를 가요.",
        right: "학교에 가요.",
        why: `Destinations take 에. (학교를 가요 is heard in casual speech and is not wrong, but learn 에 first.)`,
        register: true,
      },
      {
        wrong: "저는 돈을 없어요.",
        right: "저는 돈이 없어요.",
        why: `있다 and 없다 take 이 / 가.`,
      },
      {
        wrong: "저는 고양이를 좋아요.",
        right: "저는 고양이를 좋아해요.",
        why: `좋다 takes 이 / 가; 좋아하다 takes 을 / 를. Don't mix them.`,
      },
    ],
    faqs: [
      {
        q: `Is 한국어 followed by 을 or 를?`,
        a: `를: 한국어 ends in the vowel ㅓ (the ㅇ of 어 is silent at the top of the block). 한국어를 배워요.`,
      },
      {
        q: `Can I always drop the particles?`,
        a: `Not always. Drop 을 / 를 in quick conversation when the object is right before the verb. Keep it when the sentence is long, when the object is far from the verb, and in writing. Topic and contrast particles carry meaning and usually can't be dropped.`,
      },
    ],
    related: ["polite-present-haeyo", "subject-particle-i-ga", "topic-particle-eun-neun"],
    lessons: ["a1-object-particle", "a1-food-and-drink", "a1-practice-daily-routine"],
  },
  {
    slug: "place-particles-e-eseo",
    title: "Places and Times: 에, 에서, 부터 and 까지",
    description:
      "에 for destinations, location and time, 에서 for where an action happens and where you come from, the time words that take no 에, and 부터 / 까지 and 에서 / 까지 for from and until.",
    level: "A1",
    intro: [
      `English uses at, in, on and to. Korean uses two main place particles, and the choice depends on the verb, not the place: 에 for where you go or where something is, 에서 for where you do something. The same 에 also marks time: 세 시에 (at three).`,
    ],
    sections: [
      {
        heading: `에: destination, location, time`,
        body: [
          `에 marks a destination with verbs of movement: 학교에 가요, 집에 와요, 회사에 다녀요 (I work at a company, literally 'go back and forth to'). It marks where something is with 있다 and 없다: 가방에 있어요. And it marks a point in time: 일곱 시에, 월요일에, 주말에, 아침에.`,
          `Some time words never take 에: 오늘, 내일, 어제, 지금, 매일 and 언제. Say 내일 가요, not *내일에 가요.`,
        ],
        examples: [
          { ko: "다음 주에 부산에 가요.", en: "I'm going to Busan next week." },
          { ko: "아홉 시에 회사에 가요.", en: "I go to work at nine." },
          { ko: "토요일에 뭐 해요?", en: "What are you doing on Saturday?" },
          { ko: "오늘 시간 있어요?", en: "Are you free today?" },
        ],
      },
      {
        heading: `에서: where an action happens, and 'from'`,
        body: [
          `에서 marks the place where an action takes place: 도서관에서 공부해요 (I study at the library), 카페에서 친구를 만나요. If you're doing something there, it's 에서; if you're going there or something is there, it's 에.`,
          `에서 also means 'from' a place: 미국에서 왔어요 (I'm from the US, literally 'I came from America'), 집에서 회사까지 (from home to the office).`,
        ],
        table: {
          headers: ["Verb type", "Particle", "Example"],
          rows: [
            ["going, coming", "에", "도서관에 가요"],
            ["being, existing", "에", "도서관에 있어요"],
            ["doing any action", "에서", "도서관에서 공부해요"],
            ["coming from", "에서", "도서관에서 왔어요"],
          ],
        },
        examples: [
          { ko: "저는 은행에서 일해요.", en: "I work at a bank." },
          { ko: "집에서 쉬어요.", en: "I'm resting at home." },
          { ko: "어디에서 왔어요? 영국에서 왔어요.", en: "Where are you from? I'm from the UK." },
          { ko: "편의점에서 김밥을 샀어요.", en: "I bought gimbap at the convenience store." },
        ],
      },
      {
        heading: `From and until: 부터 / 까지, 에서 / 까지`,
        body: [
          `For time, 'from ... until' is 부터 ... 까지: 아홉 시부터 여섯 시까지 (from nine to six), 월요일부터 금요일까지. For places, 'from ... to' is 에서 ... 까지: 서울에서 부산까지 (from Seoul to Busan). 까지 alone means until or as far as: 몇 시까지 해요? (until what time are you open?)`,
        ],
        examples: [
          { ko: "수업은 열 시부터 열두 시까지예요.", en: "Class is from ten to twelve." },
          { ko: "서울에서 부산까지 KTX로 두 시간 반 걸려요.", en: "It takes two and a half hours from Seoul to Busan by KTX." },
          { ko: "금요일까지 보내 주세요.", en: "Please send it by Friday." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "도서관에 공부해요.",
        right: "도서관에서 공부해요.",
        why: `Studying is an action, so the place takes 에서.`,
      },
      {
        wrong: "집에서 있어요.",
        right: "집에 있어요.",
        why: `있다 (be somewhere) takes 에.`,
      },
      {
        wrong: "내일에 만나요.",
        right: "내일 만나요.",
        why: `오늘, 내일, 어제, 지금 and 매일 take no 에.`,
      },
      {
        wrong: "서울부터 부산까지",
        right: "서울에서 부산까지",
        why: `For places, 'from' is 에서. 부터 is for time (you'll hear 서울부터 too, but 에서 is the usual choice).`,
        register: true,
      },
    ],
    faqs: [
      {
        q: `Why is it 회사에 다녀요 and not 회사에서 다녀요?`,
        a: `다니다 means to go regularly to a place, so the place is a destination and takes 에. 'I work at a company' can also be 회사에서 일해요, with an action verb and 에서.`,
      },
      {
        q: `Is 여기서 the same as 여기에서?`,
        a: `Yes: after 여기, 거기 and 저기, 에서 is usually shortened to 서: 여기서 기다려요.`,
      },
    ],
    related: ["itda-eopda", "native-numbers-and-counters", "particles-people-and-direction"],
    lessons: [
      "a1-going-places",
      "a1-doing-things-at-places",
      "a1-contrast-place-particles",
      "a1-time-words",
      "a1-days-of-the-week",
      "a1-from-until",
      "a1-error-hunt-places-times",
    ],
  },
  {
    slug: "negation-an-mot",
    title: "Not and Can't: 안 and 못",
    description:
      "The short negatives: 안 (don't, not by choice) and 못 (can't, not able), where they go with 하다 verbs (공부 안 해요), and the pronunciation 못 해요 [모태요].",
    level: "A1",
    intro: [
      `Korean puts its negatives in front of the verb. 안 makes a plain 'not': 안 가요 (I'm not going). 못 means you can't or couldn't, for a reason outside your control: 못 가요 (I can't go). Choosing between them is a matter of will versus ability.`,
    ],
    sections: [
      {
        heading: `안: plain negation`,
        body: [
          `Put 안 directly before the verb or descriptive verb, with a space: 안 먹어요, 안 바빠요, 안 비싸요. It covers 'don't', 'doesn't', 'isn't' and, in the past, 'didn't': 안 갔어요.`,
          `With 하다 verbs made from a noun (공부하다, 운동하다, 일하다), 안 goes between the noun and 하다: 공부 안 해요, 운동 안 해요. With true one-word verbs like 좋아하다 and 싫어하다, it goes in front: 안 좋아해요. With descriptive 하다 verbs it also goes in front: 안 피곤해요.`,
        ],
        examples: [
          { ko: "저는 고기를 안 먹어요.", en: "I don't eat meat." },
          { ko: "오늘은 안 바빠요.", en: "I'm not busy today." },
          { ko: "주말에는 일 안 해요.", en: "I don't work at weekends." },
          { ko: "어제 숙제 안 했어요.", en: "I didn't do my homework yesterday." },
        ],
      },
      {
        heading: `못: can't`,
        body: [
          `못 goes in the same places as 안, and means you are unable: 못 가요 (I can't go), 수영 못 해요 (I can't swim), 어제 잠을 못 잤어요 (I couldn't sleep last night). It is also the polite way to decline: 내일은 못 가요 sounds like 'I'd love to, but I can't', while 안 가요 sounds like 'I'm not going' (by choice).`,
          `Mind the sound changes: 못 해요 [모태요], 못 와요 [모돠요], 못 먹어요 [몬머거요]. 못 is rarely used with descriptive verbs; use the long form -지 못하다 there, or rephrase.`,
        ],
        examples: [
          { ko: "미안해요, 내일은 못 가요.", en: "Sorry, I can't go tomorrow." },
          { ko: "저는 운전 못 해요.", en: "I can't drive." },
          { ko: "너무 매워서 못 먹어요.", en: "It's too spicy for me to eat." },
          { ko: "어제 잠을 못 잤어요.", en: "I couldn't sleep last night." },
        ],
      },
      {
        heading: `What doesn't take 안`,
        body: [
          `Three verbs have their own negative partner instead: 있다 → 없다 (not 안 있다), 알다 → 모르다 (not 안 알다), and 이다 → 아니다 (학생이 아니에요). 재미있다 → 재미없다 and 맛있다 → 맛없다 usually follow 있다, though 안 맛있어요 is also common in speech.`,
        ],
        table: {
          headers: ["Positive", "Negative", "Not"],
          rows: [
            ["있어요", "없어요", "안 있어요"],
            ["알아요", "몰라요", "안 알아요"],
            ["학생이에요", "학생이 아니에요", "안 학생이에요"],
            ["재미있어요", "재미없어요", "(안 재미있어요 is heard, but less usual)"],
          ],
        },
        examples: [
          { ko: "그 사람 몰라요.", en: "I don't know that person." },
          { ko: "이 영화는 재미없어요.", en: "This film is boring." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "안 공부해요.",
        right: "공부 안 해요.",
        why: `With noun + 하다 verbs, 안 goes before 하다. 안 공부해요 is understood and some people say it, but it is not standard and sounds foreign.`,
        register: true,
      },
      {
        wrong: "저는 안 알아요.",
        right: "저는 몰라요.",
        why: `알다 has its own negative, 모르다.`,
      },
      {
        wrong: "돈이 안 있어요.",
        right: "돈이 없어요.",
        why: `The negative of 있다 is 없다.`,
      },
      {
        wrong: "못 공부해요.",
        right: "공부 못 해요.",
        why: `못 follows the same placement rule as 안. 못 공부해요 is understood but sounds foreign.`,
        register: true,
      },
    ],
    faqs: [
      {
        q: `Is there a long negative too?`,
        a: `Yes: -지 않다 (먹지 않아요) and -지 못하다 (먹지 못해요). They mean the same as 안 and 못 but sound more formal and are preferred in writing and with long verbs. They are taught at the Elementary level.`,
      },
      {
        q: `Is 못하다 one word or two?`,
        a: `Both exist. 못 하다 (two words) is 'can't do'. 못하다 (one word) means 'to be bad at': 노래를 못해요 (I'm a bad singer). Likewise 잘하다 (be good at). Strictly, lack of skill is written as one word (수영 못해요) and being prevented is spaced (오늘은 운동 못 해요); the early lessons space both so the 못 slot stays visible.`,
      },
    ],
    related: ["can-cant-and-long-negation", "polite-present-haeyo", "past-tense"],
    lessons: ["a1-saying-not", "a1-cannot", "a1-contrast-dont-or-cant", "a1-error-hunt-negation-questions"],
  },
  {
    slug: "subject-particle-i-ga",
    title: "The Subject Particle 이 / 가 (and How It Differs from 은 / 는)",
    description:
      "이 / 가 marks a new or focused subject: with 있다 / 없다, with descriptive verbs, with question words and their answers. Set side by side with the topic particle 은 / 는.",
    level: "A1",
    intro: [
      `Korean has two particles that can sit on the subject: 은 / 는 (topic) and 이 / 가 (subject). Both can translate as English 'is' sentences, and learners mix them up for years. You don't need every nuance at once. A few clear patterns cover most sentences, and the rest becomes intuitive with exposure.`,
    ],
    sections: [
      {
        heading: `The forms`,
        body: [
          `After a consonant use 이 (책이, 사람이, 시간이); after a vowel use 가 (친구가, 커피가, 비가). Four pronouns change before 가: 저 → 제가, 나 → 내가, 너 → 네가 (said [니가]), 누구 → 누가.`,
        ],
        table: {
          headers: ["Noun ends in", "Particle", "Examples"],
          rows: [
            ["a consonant", "이", "동생이, 가방이, 문이"],
            ["a vowel", "가", "언니가, 날씨가, 머리가"],
            ["special", "", "제가, 내가, 네가, 누가"],
          ],
        },
        examples: [
          { ko: "비가 와요.", en: "It's raining." },
          { ko: "머리가 아파요.", en: "I have a headache." },
          { ko: "제가 할게요.", en: "I'll do it." },
        ],
      },
      {
        heading: `When to use 이 / 가`,
        body: [
          `Use 이 / 가 for something new in the conversation or for what exists: 동생이 있어요, 저기 버스가 와요. Use it with descriptive verbs for the thing described: 날씨가 좋아요, 이 가방이 예뻐요. Use it with question words as the subject of a question, where they don't take 은 / 는: 누가 왔어요?, 뭐가 좋아요?, 어디가 아파요? And use it in the answer to such a question: 민수 씨가 왔어요 (Minsu is the one who came).`,
          `This last use is focus: 제가 민수예요 means 'I'm the one who's Minsu', answering 'Which of you is Minsu?' Compare 저는 민수예요, 'I'm Minsu', an introduction.`,
        ],
        examples: [
          { ko: "누가 김 선생님이에요? 제가 김 선생님이에요.", en: "Who's Mr Kim? I am." },
          { ko: "뭐가 제일 맛있어요?", en: "What's the tastiest thing here?" },
          { ko: "어디가 아파요? 배가 아파요.", en: "Where does it hurt? My stomach hurts." },
          { ko: "저기 지하철이 와요.", en: "Here comes the train." },
        ],
      },
      {
        heading: `은 / 는 or 이 / 가: a working guide`,
        body: [
          `Use 은 / 는 for the topic: someone or something already known that you're about to say something about, and for contrast. Use 이 / 가 for new information, focus, existence and the subject of a description. One sentence often has both: 저는 동생이 있어요 (as for me, a younger sibling exists), 서울은 사람이 많아요 (Seoul has a lot of people).`,
          `A typical exchange shows the switch: 어제 누가 왔어요? 지은 씨가 왔어요. 지은 씨는 제 친구예요. The question word gets 가, the answer gets 가, and once 지은 is known she becomes the topic with 는.`,
        ],
        table: {
          headers: ["Situation", "Particle", "Example"],
          rows: [
            ["introducing yourself", "은 / 는", "저는 하준이에요."],
            ["changing topic, contrast", "은 / 는", "저는 커피, 동생은 차를 좋아해요."],
            ["question word as subject", "이 / 가", "누가 했어요?"],
            ["answer to who / what", "이 / 가", "제가 했어요."],
            ["what exists, what is described", "이 / 가", "시간이 없어요. 날씨가 추워요."],
            ["inside 'I have ...'", "은 / 는 + 이 / 가", "저는 형이 있어요."],
          ],
        },
        examples: [
          { ko: "서울은 사람이 많아요.", en: "There are a lot of people in Seoul." },
          { ko: "저는 눈이 나빠요.", en: "My eyesight is bad." },
          { ko: "이 식당은 김치찌개가 유명해요.", en: "This restaurant is famous for its kimchi stew." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "누구는 왔어요?",
        right: "누가 왔어요?",
        why: `Question words can't be topics. 누구 + 가 = 누가.`,
      },
      {
        wrong: "저가 할게요.",
        right: "제가 할게요.",
        why: `저 becomes 제 before 가.`,
      },
      {
        wrong: "날씨를 좋아요.",
        right: "날씨가 좋아요.",
        why: `Descriptive verbs take 이 / 가, never 을 / 를.`,
      },
      {
        wrong: "누가 민수 씨예요? 저는 민수예요.",
        right: "누가 민수 씨예요? 제가 민수예요.",
        why: `The answer to 'who?' is the focus and takes 이 / 가. 저는 민수예요 is an introduction, not an answer to 'which one?'.`,
        register: true,
      },
    ],
    faqs: [
      {
        q: `Will I be misunderstood if I mix them up?`,
        a: `Rarely. The meaning usually comes through; the sentence just sounds a little off. Keep the working rules above and listen to what Koreans do. The Advanced level returns to 은 / 는 and 이 / 가 across whole paragraphs.`,
      },
      {
        q: `Why is it 저는 머리가 아파요 with two subjects?`,
        a: `Korean often has a topic (the whole: me) and a subject (the part: my head). 'As for me, the head hurts'. The same pattern gives 코끼리는 코가 길어요 (elephants have long trunks).`,
      },
    ],
    related: ["topic-particle-eun-neun", "itda-eopda", "question-words", "topic-and-subject-in-discourse"],
    lessons: ["a1-there-is-1", "a1-subject-particle", "a1-contrast-topic-subject", "a1-question-words-2"],
  },
  {
    slug: "question-words",
    title: "Question Words: 뭐, 누구, 어디, 언제, 왜, 어떻게, 몇, 무슨",
    description:
      "How to ask questions in Korean: the question words, where they go (where the answer would go), 누가 and 뭐가, 몇 with counters, 무슨 and 어떤, and yes/no questions by intonation.",
    level: "A1",
    intro: [
      `English moves question words to the front: Where are you going? Korean leaves them where the answer would be: 어디에 가요? (literally 'where-to go?'), answered 학교에 가요. Questions keep the same word order as statements, and a yes/no question is just a statement with a rising voice.`,
    ],
    sections: [
      {
        heading: `The question words`,
        body: [
          `Each question word takes the particle the answer would take: 어디에 가요? (학교에 가요), 누구를 만나요? (친구를 만나요), 언제 와요? (내일 와요). 뭐 is the spoken form of 무엇; 뭘 (뭐 + 를) and 뭐가 are common. 누구 becomes 누가 as a subject.`,
        ],
        table: {
          headers: ["Word", "Meaning", "Example"],
          rows: [
            ["뭐 (무엇)", "what", "뭐 먹어요?"],
            ["누구 / 누가", "who", "누구예요? 누가 했어요?"],
            ["어디", "where", "어디 살아요?"],
            ["언제", "when", "언제 시간 있어요?"],
            ["왜", "why", "왜 안 와요?"],
            ["어떻게", "how", "어떻게 가요?"],
            ["몇 + counter", "how many, what (number)", "몇 시예요? 몇 명이에요?"],
            ["얼마", "how much (price)", "얼마예요?"],
            ["무슨 + noun", "what (kind of)", "무슨 음식 좋아해요?"],
            ["어느 + noun", "which (of a set)", "어느 나라 사람이에요?"],
            ["어떤 + noun", "what kind of, what ... like", "어떤 사람이에요?"],
          ],
        },
        examples: [
          { ko: "주말에 뭐 했어요?", en: "What did you do at the weekend?" },
          { ko: "어디에서 내려요?", en: "Where do I get off?" },
          { ko: "왜 한국어를 배워요?", en: "Why are you learning Korean?" },
          { ko: "명동에 어떻게 가요?", en: "How do I get to Myeongdong?" },
          { ko: "무슨 요일이에요?", en: "What day is it?" },
        ],
      },
      {
        heading: `무슨, 어느 and 어떤`,
        body: [
          `All three come before a noun. 무슨 asks what kind or what (무슨 영화?, 무슨 일이에요? 'what's the matter?'). 어느 asks which one from a known set (어느 나라?, 어느 쪽?). 어떤 asks what something is like (어떤 사람이에요? 'what kind of person is he?'). In practice 무슨 and 어떤 often overlap.`,
          `몇 asks a number and needs a counter: 몇 살, 몇 개, 몇 시, 몇 번. The date is the exception, spelled as one word: 며칠.`,
        ],
        examples: [
          { ko: "무슨 일 있어요?", en: "Is something wrong?" },
          { ko: "어느 역에서 갈아타요?", en: "Which station do I change at?" },
          { ko: "어떤 음악 좋아해요?", en: "What kind of music do you like?" },
          { ko: "몇 번 버스 타요?", en: "Which number bus do you take?" },
        ],
      },
      {
        heading: `Yes/no questions and answers`,
        body: [
          `Raise your voice at the end: 학생이에요? 바빠요? 내일 와요? Answer with 네 (yes) or 아니요 (no). Careful with negative questions: 네 agrees with the statement, so to 안 바빠요? (aren't you busy?) the answer 네 means 'right, I'm not busy', and 아니요 means 'no, I am busy'. This is the opposite of English habit.`,
        ],
        examples: [
          { ko: "커피 좋아해요? 네, 좋아해요.", en: "Do you like coffee? Yes, I do." },
          { ko: "안 추워요? 네, 안 추워요.", en: "Aren't you cold? No, I'm not." },
          { ko: "밥 안 먹었어요? 아니요, 먹었어요.", en: "Haven't you eaten? Yes, I have." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "어디 당신은 가요?",
        right: "어디 가요?",
        why: `Question words stay in the answer's position, and 'you' is normally left out.`,
      },
      {
        wrong: "무엇을 해요 주말에?",
        right: "주말에 뭐 해요?",
        why: `The verb comes last. In speech 무엇을 is usually 뭐 or 뭘.`,
      },
      {
        wrong: "몇 일이에요?",
        right: "며칠이에요?",
        why: `'What date' is spelled 며칠.`,
      },
      {
        wrong: "누구가 전화했어요?",
        right: "누가 전화했어요?",
        why: `누구 + 가 contracts to 누가.`,
      },
    ],
    faqs: [
      {
        q: `Can Korean question words mean 'something' or 'someone'?`,
        a: `Yes. With a neutral rising intonation, 뭐 먹었어요? can mean 'did you eat something?' and 어디 가요? can mean 'are you going somewhere?'. Context and intonation tell you which. This is why 어디 가세요? is a common greeting that doesn't really need a full answer.`,
      },
      {
        q: `Is 왜요? rude?`,
        a: `Not by itself: 왜요? means 'why?' or 'what is it?'. Said sharply it can sound defensive, so when someone calls you, 네? is a softer reply.`,
      },
    ],
    related: ["subject-particle-i-ga", "this-that-here-there", "sino-korean-numbers"],
    lessons: ["a1-what-and-who", "a1-question-words-1", "a1-question-words-2", "a1-error-hunt-negation-questions"],
  },
  {
    slug: "past-tense",
    title: "The Past Tense: -았어요 / -었어요 / 했어요",
    description:
      "How to say what happened: the past ending follows the same ㅏ / ㅗ rule as the present, with the same contractions (갔어요, 봤어요, 마셨어요), plus 이었어요 / 였어요, the past with 안 and 못, and past time words.",
    level: "A1",
    intro: [
      `If you know the polite present, you already know the past: take the 요 form, replace 요 with ㅆ어요, and you have it. 가요 → 갔어요, 먹어요 → 먹었어요, 해요 → 했어요. The Korean past covers English 'I did', 'I have done' and often 'I was doing'.`,
    ],
    sections: [
      {
        heading: `Forming the past`,
        body: [
          `Stems with ㅏ or ㅗ add -았어요 (앉았어요, 좋았어요); all others add -었어요 (먹었어요, 읽었어요); 하다 becomes 했어요. Vowel stems contract exactly as in the present: 가다 → 갔어요, 오다 → 왔어요, 보다 → 봤어요, 마시다 → 마셨어요, 배우다 → 배웠어요, 되다 → 됐어요.`,
          `Pronunciation links everything forward: 먹었어요 [머거써요], 읽었어요 [일거써요], 갔어요 [가써요].`,
        ],
        table: {
          headers: ["Dictionary", "Present", "Past"],
          rows: [
            ["가다", "가요", "갔어요"],
            ["오다", "와요", "왔어요"],
            ["먹다", "먹어요", "먹었어요"],
            ["마시다", "마셔요", "마셨어요"],
            ["배우다", "배워요", "배웠어요"],
            ["하다", "해요", "했어요"],
            ["되다", "돼요", "됐어요"],
            ["있다", "있어요", "있었어요"],
          ],
        },
        examples: [
          { ko: "어제 친구를 만났어요.", en: "I met a friend yesterday." },
          { ko: "주말에 영화를 봤어요.", en: "I saw a film at the weekend." },
          { ko: "아침에 커피를 마셨어요.", en: "I had coffee this morning." },
          { ko: "지난주에 부산에 갔어요.", en: "I went to Busan last week." },
          { ko: "점심 먹었어요?", en: "Have you had lunch?" },
        ],
      },
      {
        heading: `Was a noun, wasn't, didn't, couldn't`,
        body: [
          `The past of 이에요 / 예요 is 이었어요 after a consonant and 였어요 after a vowel: 학생이었어요, 의사였어요. Its negative is 이 / 가 아니었어요. 있어요 and 없어요 become 있었어요 and 없었어요.`,
          `안 and 못 stay in front of the verb: 안 갔어요 (I didn't go), 못 갔어요 (I couldn't go), 숙제 안 했어요.`,
        ],
        examples: [
          { ko: "어제는 일요일이었어요.", en: "Yesterday was Sunday." },
          { ko: "그 사람은 제 친구가 아니었어요.", en: "That person wasn't my friend." },
          { ko: "어제 집에 아무도 없었어요.", en: "There was nobody home yesterday." },
          { ko: "바빠서 못 갔어요.", en: "I was busy, so I couldn't go." },
        ],
      },
      {
        heading: `Past time words and sentence links`,
        body: [
          `Common past time words: 어제 (yesterday), 그저께 (the day before yesterday), 지난주 (last week), 지난달 (last month), 작년 (last year), 아까 (a little while ago). Like 오늘, 어제 and 아까 take no 에; 지난주에 and 작년에 usually do.`,
          `To tell a story, link sentences with 그리고 (and), 그래서 (so) and 그런데 (but, by the way): 시장에 갔어요. 그런데 문을 닫았어요. 그래서 집에 왔어요.`,
        ],
        examples: [
          { ko: "아까 전화했어요.", en: "I called a little while ago." },
          { ko: "작년에 한국에 처음 왔어요.", en: "I came to Korea for the first time last year." },
          { ko: "시장에 갔어요. 그런데 문을 닫았어요.", en: "I went to the market. But it was closed." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "가았어요",
        right: "갔어요",
        why: `Vowel stems contract in the past just as in the present.`,
      },
      {
        wrong: "어제 공부했었어요.",
        right: "어제 공부했어요.",
        why: `-었었- is a separate form meaning 'used to / had once but no longer'. For a simple past use one ㅆ.`,
        register: true,
      },
      {
        wrong: "학생였어요",
        right: "학생이었어요",
        why: `After a consonant the past of 이에요 is 이었어요; 였어요 is only after a vowel.`,
      },
      {
        wrong: "어제에 갔어요.",
        right: "어제 갔어요.",
        why: `어제, like 오늘 and 내일, takes no 에.`,
      },
    ],
    faqs: [
      {
        q: `How do I say 'I have been to Korea'?`,
        a: `The simple past often covers it (한국에 갔어요 can be 'I went' or 'I have been'), but for life experience Korean uses -(으)ㄴ 적이 있다: 한국에 가 본 적이 있어요. That comes at the Elementary level.`,
      },
      {
        q: `Does the past change with the person?`,
        a: `No. 갔어요 is I went, you went, she went and they went. Context and dropped subjects do the work.`,
      },
    ],
    related: ["polite-present-haeyo", "copula-ieyo-yeyo", "negation-an-mot", "experience-a-boda"],
    lessons: [
      "a1-past-tense-1",
      "a1-past-tense-2",
      "a1-past-tense-3",
      "a1-past-time-words",
      "a1-sentence-connectors",
      "a1-transform-present-to-past",
      "a1-error-hunt-past",
    ],
  },
  {
    slug: "descriptive-verbs",
    title: "Describing Words Are Verbs: Adjectives in Korean",
    description:
      "Korean adjectives conjugate like verbs (비싸요, 좋아요, 바빴어요), take 이 / 가, and have their own patterns: the 으 drop (바빠요, 커요), a first look at ㅂ irregulars (추워요, 매워요), and intensifiers like 아주, 너무 and 별로.",
    level: "A1",
    intro: [
      `Korean has no 'to be' + adjective. 'Expensive' is not a word you put after is; it is a verb meaning 'to be expensive': 비싸다. It conjugates exactly like 가다: 비싸요 (it's expensive), 비쌌어요 (it was expensive), 안 비싸요 (it isn't expensive). Linguists call these descriptive verbs; in this course we call them adjectives for short.`,
    ],
    sections: [
      {
        heading: `Adjectives conjugate and take 이 / 가`,
        body: [
          `Use the same -아요 / -어요 / 해요 endings: 작다 → 작아요, 많다 → 많아요, 맛있다 → 맛있어요, 따뜻하다 → 따뜻해요, 피곤하다 → 피곤해요. The thing described takes 이 / 가 (or 은 / 는 as a topic): 날씨가 좋아요, 이 방은 넓어요.`,
          `Before a noun, adjectives take a modifier ending (비싼 가방, 'an expensive bag'), which is taught at the Elementary level. For now, describe things at the end of the sentence.`,
        ],
        examples: [
          { ko: "이 가방은 너무 비싸요.", en: "This bag is too expensive." },
          { ko: "오늘 날씨가 따뜻해요.", en: "It's warm today." },
          { ko: "서울은 사람이 많아요.", en: "There are lots of people in Seoul." },
          { ko: "어제 정말 피곤했어요.", en: "I was really tired yesterday." },
        ],
      },
      {
        heading: `The 으 drop`,
        body: [
          `When a stem ends in the vowel ㅡ, the ㅡ drops before -아요 / -어요. Which ending? Look at the vowel before the ㅡ: ㅏ or ㅗ gives -아요 (바쁘다 → 바빠요, 아프다 → 아파요, 나쁘다 → 나빠요), anything else gives -어요 (예쁘다 → 예뻐요, 슬프다 → 슬퍼요). One-syllable stems take -어요: 크다 → 커요, 쓰다 → 써요, 끄다 → 꺼요.`,
        ],
        table: {
          headers: ["Dictionary", "Polite present", "Past"],
          rows: [
            ["바쁘다 (busy)", "바빠요", "바빴어요"],
            ["아프다 (hurt, ill)", "아파요", "아팠어요"],
            ["예쁘다 (pretty)", "예뻐요", "예뻤어요"],
            ["크다 (big)", "커요", "컸어요"],
            ["쓰다 (write, use)", "써요", "썼어요"],
          ],
        },
        examples: [
          { ko: "요즘 많이 바빠요.", en: "I'm very busy these days." },
          { ko: "머리가 아파요.", en: "I have a headache." },
          { ko: "그 옷 정말 예뻐요.", en: "Those clothes are really pretty." },
        ],
      },
      {
        heading: `A first look at the ㅂ irregular, and degree words`,
        body: [
          `Many adjectives ending in ㅂ change ㅂ to 우 before a vowel: 춥다 → 추워요 (cold), 덥다 → 더워요 (hot), 맵다 → 매워요 (spicy), 쉽다 → 쉬워요 (easy), 어렵다 → 어려워요 (difficult), 귀엽다 → 귀여워요 (cute). The full set of irregular verbs comes at the Elementary level.`,
          `Degree words go before the adjective: 아주 / 정말 / 진짜 (very, really), 너무 (too, and in speech also 'so'), 조금 / 좀 (a little). 별로 (not very) and 전혀 (not at all) need a negative: 별로 안 비싸요.`,
        ],
        examples: [
          { ko: "오늘 진짜 추워요.", en: "It's really cold today." },
          { ko: "이 김치찌개는 조금 매워요.", en: "This kimchi stew is a bit spicy." },
          { ko: "한국어는 어렵지만 재미있어요.", en: "Korean is hard but fun." },
          { ko: "그 영화는 별로 재미없었어요.", en: "That film wasn't that good." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "날씨가 좋이에요.",
        right: "날씨가 좋아요.",
        why: `Adjectives are verbs. Don't attach 이에요 to them.`,
      },
      {
        wrong: "바쁘어요",
        right: "바빠요",
        why: `Stems in ㅡ drop the ㅡ, and 바- (ㅏ) chooses -아요.`,
      },
      {
        wrong: "추웁어요",
        right: "추워요",
        why: `춥다 is a ㅂ irregular: ㅂ becomes 우 before a vowel.`,
      },
      {
        wrong: "별로 비싸요.",
        right: "별로 안 비싸요.",
        why: `별로 needs a negative: 'not very'.`,
      },
      {
        wrong: "날씨를 좋아요.",
        right: "날씨가 좋아요.",
        why: `Adjectives describe a subject and never take 을 / 를.`,
      },
    ],
    faqs: [
      {
        q: `Is 너무 negative?`,
        a: `Traditionally 너무 means 'too (much)', but in everyday speech it is used for strong positive feelings too: 너무 좋아요 (I love it), 너무 맛있어요. In formal writing prefer 매우 or 아주 for 'very'.`,
      },
      {
        q: `Are 입다 and 좁다 irregular too?`,
        a: `No: 입다 → 입어요 and 좁다 → 좁아요 are regular. Most ㅂ adjectives are irregular, most ㅂ action verbs are regular, but you learn each with its 요 form.`,
      },
    ],
    related: ["polite-present-haeyo", "irregular-verbs-1", "irregular-verbs-2", "noun-modifiers"],
    lessons: [
      "a1-adjectives-are-verbs",
      "a1-vowel-drop",
      "a1-b-irregular-preview",
      "a1-very-a-little",
      "a1-weather-and-people",
      "a1-error-hunt-describing",
    ],
  },
  {
    slug: "saying-and",
    title: "Saying 'And': -고, 하고, (이)랑, 와 / 과, 그리고",
    description:
      "Korean has different words for 'and' depending on what you join: -고 between verbs and clauses, 하고, (이)랑 and 와 / 과 between nouns, and 그리고 between sentences.",
    level: "A1",
    intro: [
      `English and joins anything. Korean picks a different form for each job: one ending for verbs and clauses, three particles for nouns (by style), and a separate word to start a new sentence. Mixing them up is one of the most common beginner errors.`,
    ],
    sections: [
      {
        heading: `Joining verbs and clauses: -고`,
        body: [
          `Add -고 to any verb or adjective stem: 싸고 맛있어요 (it's cheap and tasty), 밥을 먹고 커피를 마셔요 (I eat and then have coffee). The tense goes only on the last verb: 어제 영화를 보고 쇼핑했어요 (yesterday I watched a film and went shopping). With nouns it's 이고: 저는 학생이고 동생은 회사원이에요.`,
          `-고 lists things and also gives a sequence (do A, then B). The Elementary level adds -아서 / -어서 for actions that are closely linked.`,
        ],
        examples: [
          { ko: "이 식당은 싸고 맛있어요.", en: "This restaurant is cheap and good." },
          { ko: "주말에 청소하고 빨래해요.", en: "At weekends I clean and do the laundry." },
          { ko: "어제 친구를 만나고 영화를 봤어요.", en: "Yesterday I met a friend and saw a film." },
          { ko: "형은 의사이고 누나는 변호사예요.", en: "My older brother is a doctor and my older sister is a lawyer." },
        ],
      },
      {
        heading: `Joining nouns: 하고, (이)랑, 와 / 과`,
        body: [
          `Three particles join nouns and also mean 'with'. 하고 is neutral and used everywhere in speech: 빵하고 우유, 친구하고 같이. (이)랑 is casual and warm: 이랑 after a consonant, 랑 after a vowel (동생이랑, 친구랑). 와 / 과 is for writing and formal speech: 과 after a consonant, 와 after a vowel (책과 연필, 커피와 차).`,
          `Pick one style per sentence and stay with it. With 같이 ('together') they mean 'with': 친구하고 같이 가요.`,
        ],
        table: {
          headers: ["Particle", "Style", "After a consonant", "After a vowel"],
          rows: [
            ["하고", "neutral, spoken", "빵하고", "우유하고"],
            ["(이)랑", "casual, spoken", "빵이랑", "우유랑"],
            ["와 / 과", "written, formal", "빵과", "우유와"],
          ],
        },
        examples: [
          { ko: "김밥하고 라면 주세요.", en: "Gimbap and ramyeon, please." },
          { ko: "주말에 언니랑 같이 쇼핑했어요.", en: "I went shopping with my older sister at the weekend." },
          { ko: "한국과 일본은 가까워요.", en: "Korea and Japan are close." },
        ],
      },
      {
        heading: `Between sentences: 그리고`,
        body: [
          `그리고 starts a new sentence: 'and', 'and also'. 아침에 운동했어요. 그리고 회사에 갔어요. In speech it doesn't join two nouns inside a sentence; 하고 or (이)랑 does that.`,
        ],
        examples: [
          { ko: "저는 커피를 좋아해요. 그리고 차도 좋아해요.", en: "I like coffee. And I like tea too." },
          { ko: "숙제를 했어요. 그리고 잤어요.", en: "I did my homework. Then I went to bed." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "빵 그리고 우유를 샀어요.",
        right: "빵하고 우유를 샀어요.",
        why: `그리고 joins sentences, not nouns. A noun list with 그리고 is seen in titles and headings, but in a sentence it sounds translated: use 하고, (이)랑 or 와 / 과.`,
        register: true,
      },
      {
        wrong: "싸요 그리고 맛있어요.",
        right: "싸고 맛있어요.",
        why: `Inside one sentence, join verbs with -고.`,
      },
      {
        wrong: "어제 친구와 만났어.",
        right: "어제 친구랑 만났어.",
        why: `In a casual chat 와 / 과 sounds bookish. Use 하고 or (이)랑.`,
        register: true,
      },
      {
        wrong: "어제 밥을 먹었고 잤어요.",
        right: "어제 밥을 먹고 잤어요.",
        why: `In a simple sequence the past goes only on the last verb. (-었고 is grammatical, but it lists two separate past facts rather than one sequence.)`,
        register: true,
      },
    ],
    faqs: [
      {
        q: `Is 친구하고 같이 the same as 친구랑 같이?`,
        a: `Yes, the meaning is identical. 랑 just sounds more casual and friendly. Both are fine in polite 해요 speech.`,
      },
      {
        q: `Can 하고 come after the last noun too?`,
        a: `In speech you'll hear lists like 빵하고 우유하고 샀어요, but the standard is to put it only between the nouns: 빵하고 우유를 샀어요.`,
      },
    ],
    related: ["linking-go-aseo-jiman", "past-tense", "wants-and-plans"],
    lessons: ["a1-sentence-connectors", "a1-linking-and", "a1-with-and"],
  },
  {
    slug: "wants-and-plans",
    title: "Wants and Plans: -고 싶어요, -(으)ㄹ 거예요 and -(으)러 가요",
    description:
      "Saying what you want to do (-고 싶어요, and -고 싶어 해요 for other people), what you're going to do (-(으)ㄹ 거예요, said [꺼예요]) and what you're going somewhere to do (-(으)러 가요).",
    level: "A1",
    intro: [
      `Three endings let you talk about the future at the Beginner level. -고 싶어요 is a wish (I want to go), -(으)ㄹ 거예요 is a plan or prediction (I'm going to go, I will go), and -(으)러 가요 / 와요 gives the purpose of a movement (I'm going to eat).`,
    ],
    sections: [
      {
        heading: `Want to: -고 싶어요`,
        body: [
          `Add -고 싶어요 to any action verb stem: 가고 싶어요, 먹고 싶어요, 쉬고 싶어요. It is for your own wishes and for asking the listener: 뭐 먹고 싶어요? The object can take 을 / 를 or, in speech, 이 / 가: 커피를 마시고 싶어요 / 커피가 마시고 싶어요.`,
          `For a third person, Korean doesn't claim to know their feelings directly: use -고 싶어 해요 (민수 씨가 한국에 가고 싶어 해요, Minsu wants to go to Korea). To want a thing rather than an action, use 갖고 싶어요 (I want to have) or simply ... 주세요 in a shop.`,
        ],
        examples: [
          { ko: "주말에는 집에서 쉬고 싶어요.", en: "I want to rest at home at the weekend." },
          { ko: "뭐 먹고 싶어요? 떡볶이 먹고 싶어요.", en: "What do you want to eat? I want tteokbokki." },
          { ko: "동생이 고양이를 키우고 싶어 해요.", en: "My younger sibling wants to get a cat." },
          { ko: "새 핸드폰을 갖고 싶어요.", en: "I want a new phone." },
        ],
      },
      {
        heading: `Will, going to: -(으)ㄹ 거예요`,
        body: [
          `After a vowel stem add -ㄹ 거예요 (갈 거예요, 볼 거예요, 할 거예요); after a consonant stem -을 거예요 (먹을 거예요, 읽을 거예요). ㄹ stems just add 거예요: 만들다 → 만들 거예요, 살다 → 살 거예요. It is said with a tense ㄱ: 갈 거예요 [갈 꺼예요], 먹을 거예요 [머글 꺼예요].`,
          `With I and you it expresses a plan or intention (내일 영화 볼 거예요); with other subjects it is often a prediction (내일 비가 올 거예요, it will probably rain). Remember the simple present also works for fixed plans: 내일 부산에 가요.`,
        ],
        examples: [
          { ko: "이번 주말에 뭐 할 거예요?", en: "What are you going to do this weekend?" },
          { ko: "친구하고 전주에 갈 거예요.", en: "I'm going to Jeonju with a friend." },
          { ko: "내일은 아마 추울 거예요.", en: "It'll probably be cold tomorrow." },
          { ko: "저녁에 김치찌개를 만들 거예요.", en: "I'm going to make kimchi stew this evening." },
        ],
      },
      {
        heading: `Going somewhere to do something: -(으)러 가요`,
        body: [
          `-(으)러 + 가다 / 오다 / 다니다 gives the purpose of going: 밥 먹으러 가요 (I'm going to eat), 책 사러 서점에 가요 (I'm going to the bookshop to buy a book). After a vowel or ㄹ stem it's -러 (보러, 놀러, 만들러); after a consonant -으러 (먹으러, 읽으러). It only works with verbs of movement.`,
        ],
        examples: [
          { ko: "점심 먹으러 가요.", en: "Let's go and get lunch." },
          { ko: "한국에 일하러 왔어요.", en: "I came to Korea to work." },
          { ko: "주말에 친구 집에 놀러 갈 거예요.", en: "I'm going to visit a friend's place at the weekend." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "민수 씨는 가고 싶어요.",
        right: "민수 씨는 가고 싶어 해요.",
        why: `For other people's wishes, add 해요: -고 싶어 해요. (Fine in questions to the listener and about yourself.)`,
        register: true,
      },
      {
        wrong: "먹을 꺼예요",
        right: "먹을 거예요",
        why: `It is said [꺼] but always written 거.`,
      },
      {
        wrong: "만들을 거예요",
        right: "만들 거예요",
        why: `ㄹ stems take no extra 으.`,
      },
      {
        wrong: "공부하러 해요.",
        right: "공부하러 도서관에 가요.",
        why: `-(으)러 needs a verb of movement after it: 가다, 오다 or 다니다.`,
      },
    ],
    faqs: [
      {
        q: `What's the difference between 갈 거예요 and 가요 for the future?`,
        a: `Both are natural for plans. 가요 presents it as settled or scheduled; 갈 거예요 stresses intention or prediction. For guesses about other things (the weather, someone's reaction), use -(으)ㄹ 거예요.`,
      },
      {
        q: `Is 거예요 the same 거 as in 제 거예요?`,
        a: `Yes: it is 것 (thing), shortened to 거, + 이에요. -(으)ㄹ 거예요 is literally 'it is a thing that will happen'.`,
      },
    ],
    related: ["suggestions-and-intentions", "saying-and", "polite-present-haeyo"],
    lessons: ["a1-want-to", "a1-hobbies", "a1-future-plans-1", "a1-future-plans-2", "a1-go-to-do", "a1-contrast-want-plan"],
  },
  {
    slug: "polite-requests",
    title: "Polite Requests: -(으)세요, -아 / 어 주세요 and -지 마세요",
    description:
      "Asking people to do things politely: 주세요 for things, -(으)세요 for instructions, -아 / 어 주세요 for favours, -지 마세요 for 'please don't', 좀 as a softener, and the honorific -시- in questions.",
    level: "A1",
    intro: [
      `Korean has several ways to say please, each for a different situation. 주세요 asks for a thing. -(으)세요 tells someone politely what to do (please sit down). -아 / 어 주세요 asks a favour (please do it for me). -지 마세요 asks someone not to do something.`,
    ],
    sections: [
      {
        heading: `Things: N 주세요`,
        body: [
          `Name the thing (and the number) and add 주세요: 물 주세요, 아메리카노 두 잔 주세요, 이거 주세요. Add 좀 (a little, please) to soften: 물 좀 주세요. In a shop or restaurant, this is all you need.`,
        ],
        examples: [
          { ko: "저기요, 물 좀 주세요.", en: "Excuse me, could I have some water?" },
          { ko: "김밥 한 줄 주세요.", en: "One roll of gimbap, please." },
          { ko: "영수증 주세요.", en: "Can I have the receipt, please?" },
        ],
      },
      {
        heading: `Instructions: -(으)세요`,
        body: [
          `Add -세요 to a vowel stem and -으세요 to a consonant stem: 오세요, 보세요, 앉으세요, 읽으세요. ㄹ stems drop ㄹ: 만들다 → 만드세요, 살다 → 사세요. Some verbs have special honorific forms: 먹다 / 마시다 → 드세요, 자다 → 주무세요, 있다 → 계세요 (stay).`,
          `This ending contains the honorific -시-, which shows respect to the listener. So it is polite but still a direction, used by teachers, staff and hosts: 여기 앉으세요, 맛있게 드세요. The same form is also a respectful question about the listener: 어디 가세요? (where are you going?), 뭐 하세요? (what do you do?). The full honorific system comes at the Elementary level.`,
        ],
        table: {
          headers: ["Dictionary", "-(으)세요", "Note"],
          rows: [
            ["가다", "가세요", "vowel stem"],
            ["앉다", "앉으세요", "consonant stem"],
            ["만들다", "만드세요", "ㄹ drops"],
            ["듣다", "들으세요", "ㄷ irregular"],
            ["먹다 / 마시다", "드세요", "special verb"],
            ["자다", "주무세요", "special verb"],
          ],
        },
        examples: [
          { ko: "이쪽으로 오세요.", en: "Come this way, please." },
          { ko: "잠깐만 기다리세요.", en: "Please wait a moment." },
          { ko: "맛있게 드세요.", en: "Enjoy your meal." },
          { ko: "주말에 뭐 하세요?", en: "What do you do at weekends?" },
        ],
      },
      {
        heading: `Favours and 'please don't'`,
        body: [
          `-아 / 어 주세요 asks someone to do something for you: 도와주세요 (please help me), 천천히 말해 주세요 (please speak slowly), 사진 좀 찍어 주세요 (could you take a photo for me?). It is softer than -(으)세요 because it frames the action as a favour, so it is the right choice with strangers and staff.`,
          `-지 마세요 means 'please don't': 걱정하지 마세요 (don't worry), 여기서 사진 찍지 마세요. Use 제가 (humble I) to offer to do something: 제가 할게요, and 저를 / 절 for 'me' as an object.`,
        ],
        examples: [
          { ko: "다시 한번 말해 주세요.", en: "Could you say that again, please?" },
          { ko: "강남역에서 세워 주세요.", en: "Please stop at Gangnam Station." },
          { ko: "걱정하지 마세요.", en: "Don't worry." },
          { ko: "여기에 주차하지 마세요.", en: "Please don't park here." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "많이 먹으세요.",
        right: "많이 드세요.",
        why: `To a guest at dinner: 먹다 has a special honorific verb, 드시다. 먹으세요 sounds odd to most speakers.`,
        register: true,
      },
      {
        wrong: "만들으세요",
        right: "만드세요",
        why: `ㄹ stems drop ㄹ before -세요 and take no 으.`,
      },
      {
        wrong: "말해 세요",
        right: "말해 주세요",
        why: `For a favour, add 주세요 after the -아 / 어 form.`,
      },
      {
        wrong: "여기에 주차하지 마요.",
        right: "여기에 주차하지 마세요.",
        why: `To a customer: -지 마요 is casual-polite; with strangers and customers -지 마세요 is the polite standard.`,
        register: true,
      },
    ],
    faqs: [
      {
        q: `Is -(으)세요 rude because it's a command?`,
        a: `No, it's polite, and the honorific -시- inside it shows respect. But asking a favour of a stranger sounds kinder with -아 / 어 주세요 or -아 / 어 주시겠어요? (Elementary level).`,
      },
      {
        q: `Should I say -(으)세요 about myself?`,
        a: `Never. The honorific -시- raises the subject, so it is only for other people. 저는 학생이세요 is wrong: say 저는 학생이에요.`,
      },
    ],
    related: ["honorifics-si", "giving-and-favours", "must-may-mustnt"],
    lessons: [
      "a1-please-give-me",
      "a1-polite-request",
      "a1-honorific-first-look",
      "a1-please-do-for-me",
      "a1-please-dont",
      "a1-humble-me",
      "a1-contrast-requests",
    ],
  },
];
