// Synced from cheneygross-afk/lengo:src/lib/grammar/ko-guides-hangul.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { KoGrammarGuide } from "./ko-types";

// Korean guides for the Hangul module: the writing system, the final
// consonants and the Pronunciation Rules reference (see the notes at the top
// of ./ko-types.ts).
export const KO_HANGUL_GUIDES: KoGrammarGuide[] = [
  {
    slug: "how-hangul-works",
    title: "How Hangul Works: Letters, Blocks and Sounds",
    description:
      "The Korean alphabet in one page: consonants and vowels, how letters stack into syllable blocks, the plain, aspirated and tense consonants, ㅐ and ㅔ, and the combined vowels with the three readings of ㅢ.",
    level: "Hangul",
    intro: [
      `Hangul is an alphabet, not a set of pictures and not a syllabary. Each letter stands for one sound, and the letters are grouped into square blocks of one syllable each: 한 is ㅎ + ㅏ + ㄴ, 글 is ㄱ + ㅡ + ㄹ. Once you can read the 24 basic letters and the way they combine, you can sound out any word in the language, including words you have never seen.`,
      `The alphabet was designed on purpose, in the 1440s under King 세종, and the design still shows. The basic consonants draw the mouth that says them (ㄱ is the back of the tongue touching the soft palate, ㄴ the tip of the tongue on the ridge behind the teeth, ㅁ the closed lips, ㅅ a tooth, ㅇ the open throat), and adding a stroke adds breath: ㄱ → ㅋ, ㄷ → ㅌ, ㅂ → ㅍ, ㅈ → ㅊ.`,
    ],
    sections: [
      {
        heading: `The syllable block`,
        body: [
          `Every block starts with a consonant. When a syllable starts with a vowel sound, the silent letter ㅇ fills the consonant slot: 아, 오, 우유. Vertical vowels (ㅏ ㅓ ㅣ ㅐ ㅔ) go to the right of the consonant (가, 너, 미); horizontal vowels (ㅗ ㅜ ㅡ) go underneath (고, 누, 크). A final consonant, called 받침, sits at the bottom of the block: 각, 곰, 산.`,
          `The same letter ㅇ has two jobs. At the top of a block it is silent; at the bottom it is the ng of sing: 강, 공, 영어. Read each block as one syllable, not as separate letters, and you will already sound much more Korean.`,
        ],
        table: {
          headers: ["Shape", "Pattern", "Examples"],
          rows: [
            ["consonant + vertical vowel", "ㄱ + ㅏ", "가, 나, 미, 서"],
            ["consonant + horizontal vowel", "ㄱ + ㅗ", "고, 누, 스, 므"],
            ["consonant + vowel + final", "ㄱ + ㅏ + ㅁ", "감, 산, 물, 책"],
            ["silent ㅇ + vowel", "ㅇ + ㅜ", "우, 아, 이, 오"],
            ["two final letters", "ㄷ + ㅏ + ㄺ", "닭, 값, 읽, 앉"],
          ],
        },
        examples: [
          { ko: "한국", en: "Korea" },
          { ko: "우유", en: "milk" },
          { ko: "나무", en: "tree" },
          { ko: "가방", en: "bag" },
          { ko: "서울", en: "Seoul" },
        ],
      },
      {
        heading: `The vowels`,
        body: [
          `The ten basic vowels are built from three shapes: a dot (now a short stroke), a flat line ㅡ and an upright line ㅣ. A second short stroke adds a y-glide: ㅏ → ㅑ, ㅓ → ㅕ, ㅗ → ㅛ, ㅜ → ㅠ.`,
          `Three vowels need care. ㅓ is an open sound, like the vowel of son held a little longer, and it is not an o; ㅗ is a rounded o with the lips pushed forward. ㅡ has no English equivalent: spread the lips as for ee and pull the tongue back. ㅜ is the same tongue position as ㅡ with rounded lips. Today most Seoul speakers say ㅐ and ㅔ the same, so 개 (dog) and 게 (crab) sound alike and you learn the spelling with each word.`,
        ],
        table: {
          headers: ["Vowel", "With ㅇ", "Rough sound", "Word"],
          rows: [
            ["ㅏ", "아", "a in father", "아이 (child)"],
            ["ㅓ", "어", "u in son, held longer", "어머니 (mother)"],
            ["ㅗ", "오", "o with rounded lips", "오이 (cucumber)"],
            ["ㅜ", "우", "oo in food", "우유 (milk)"],
            ["ㅡ", "으", "no English match: lips spread, tongue back", "으 (in 크다, big)"],
            ["ㅣ", "이", "ee in see", "이 (tooth; two)"],
            ["ㅐ / ㅔ", "애 / 에", "e in bed (said the same in Seoul)", "개, 게"],
            ["ㅑ ㅕ ㅛ ㅠ", "야 여 요 유", "y + the basic vowel", "야구, 여자, 요리, 유리"],
          ],
        },
        examples: [
          { ko: "여자", en: "woman" },
          { ko: "요리", en: "cooking" },
          { ko: "노래", en: "song" },
          { ko: "세계", en: "the world" },
        ],
      },
      {
        heading: `Plain, aspirated and tense consonants`,
        body: [
          `English has two kinds of stop (the t of top and the d of dog). Korean has three, and the difference is breath and tension, not voicing. Plain ㄱ ㄷ ㅂ ㅈ have a light puff at the start of a word and become soft and voiced between vowels (고기, 바다). Aspirated ㅋ ㅌ ㅍ ㅊ have a strong puff: hold a tissue in front of your mouth and it should move. Tense ㄲ ㄸ ㅃ ㅆ ㅉ have no puff at all, a tight throat and a slightly higher pitch on the vowel, like the k in skin said with force.`,
          `ㅅ has only two members, plain ㅅ and tense ㅆ, and before ㅣ it sounds like the sh of she: 시, 신발. The three-way contrast changes meaning, so train your ear on sets like 달 (moon), 탈 (mask), 딸 (daughter) and 불 (fire), 풀 (grass), 뿔 (horn).`,
        ],
        table: {
          headers: ["Plain", "Aspirated", "Tense", "Example set"],
          rows: [
            ["ㄱ", "ㅋ", "ㄲ", "기 / 키 / 끼"],
            ["ㄷ", "ㅌ", "ㄸ", "달 / 탈 / 딸"],
            ["ㅂ", "ㅍ", "ㅃ", "불 / 풀 / 뿔"],
            ["ㅈ", "ㅊ", "ㅉ", "자다 / 차다 / 짜다"],
            ["ㅅ", "none", "ㅆ", "사다 / 싸다"],
          ],
        },
        examples: [
          { ko: "아빠", en: "dad" },
          { ko: "기차", en: "train" },
          { ko: "토끼", en: "rabbit" },
          { ko: "비싸요.", en: "It's expensive." },
          { ko: "짜요.", en: "It's salty." },
        ],
      },
      {
        heading: `Combined vowels and the three readings of ㅢ`,
        body: [
          `Seven vowels are written by joining two: ㅗ + ㅏ = ㅘ (과자), ㅜ + ㅓ = ㅝ (뭐), ㅜ + ㅣ = ㅟ (귀), ㅡ + ㅣ = ㅢ (의자), and ㅙ ㅚ ㅞ, which Seoul speakers all say about the same: 왜, 외, 웨. Say the two parts quickly as one glide.`,
          `ㅢ has three readings. At the start of a word it is a true ㅢ glide: 의사, 의자. After a consonant, or later in a word, it is usually [이]: 희망 [히망], 회의 [회의] or [회이]. As the particle 의 meaning 'of', it is usually [에]: 저의 [저에], 친구의 책 [친구에 책]. ㅖ after a consonant other than ㄹ is likewise usually said [ㅔ]: 시계 [시게], but 예 and 차례 keep the glide.`,
        ],
        examples: [
          { ko: "사과", en: "apple" },
          { ko: "회사", en: "company" },
          { ko: "가위", en: "scissors" },
          { ko: "의사", en: "doctor" },
          { ko: "돼지", en: "pig" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "ㅏ",
        right: "아",
        why: `A vowel never stands alone in a block: a vowel-initial syllable takes the silent ㅇ in front.`,
      },
      {
        wrong: "ㄱㅏㅂㅏㅇ",
        right: "가방",
        why: `Letters are always grouped into syllable blocks. The keyboard does this for you as you type.`,
      },
      {
        wrong: "고기 [코기]",
        right: "고기 [고기]",
        why: `English speakers over-aspirate a plain ㄱ at the start of a word, so it sounds like ㅋ. Keep the puff light.`,
      },
      {
        wrong: "여자 [요자]",
        right: "여자 [여자]",
        why: `ㅕ is y + the open ㅓ vowel, not yo. 여자 (woman) and 요리 (cooking) have different vowels.`,
      },
    ],
    faqs: [
      {
        q: `Should I learn the letters with romanization?`,
        a: `Only for the first few days. Romanization hides the very contrasts that matter (plain, aspirated and tense consonants, ㅓ and ㅗ, ㅡ and ㅜ), and Korean signs, menus and keyboards never use it. The course drops it after the ninth Hangul lesson and shows pronunciation in Hangul brackets instead: 읽다 [익따].`,
      },
      {
        q: `If ㅐ and ㅔ sound the same, how do I know which to write?`,
        a: `You learn it with the word, as English speakers learn there, their and they're. A few pairs are worth memorising early: 내 (my) and 네 (your; yes), 개 (dog) and 게 (crab), 새 (new; bird) and 세 (three, before a counter).`,
      },
      {
        q: `Why does the same letter sound different in different words?`,
        a: `Because Korean spelling shows the word's parts, not its sound in every position. 밥 ends in a held [ㅂ], but in 밥이 the ㅂ moves forward: [바비]. The final consonants guide and the Pronunciation Rules guide cover these regular changes.`,
      },
    ],
    related: ["final-consonants", "pronunciation-rules"],
    lessons: [
      "hangul-how-hangul-works",
      "hangul-basic-vowels",
      "hangul-first-consonants",
      "hangul-more-consonants",
      "hangul-y-vowels",
      "hangul-aspirated-consonants",
      "hangul-tense-consonants",
      "hangul-practice-plain-aspirated-tense",
      "hangul-vowels-ae-e",
      "hangul-combined-vowels",
    ],
  },
  {
    slug: "final-consonants",
    title: "Final Consonants (받침): Seven Sounds and Double Finals",
    description:
      "Why any letter can sit at the bottom of a block but only seven sounds are said there, which letter of a double final you pronounce, and how finals jump to the next block before a vowel.",
    level: "Hangul",
    intro: [
      `The consonant at the bottom of a block is the 받침 (literally 'the support'). Korean writes many different letters there, but at the end of a syllable it pronounces only seven sounds: [ㄱ ㄴ ㄷ ㄹ ㅁ ㅂ ㅇ]. So 옷 (clothes) and 옻 (lacquer) are spelled differently but sound the same: [옫].`,
      `English speakers usually release a final consonant with a little puff (cap-uh). Korean holds it: the mouth closes for ㅂ or touches the palate for ㄱ, and stops there. Holding the final is half the battle for a natural accent.`,
    ],
    sections: [
      {
        heading: `The seven final sounds`,
        body: [
          `Every final letter is said as one of seven sounds. All the ㄱ-family letters become [ㄱ]; ㅍ becomes [ㅂ]; and a whole group of letters made with the tongue tip (ㄷ ㅌ ㅅ ㅆ ㅈ ㅊ ㅎ) becomes an unreleased [ㄷ]. ㄹ at the end of a syllable is a clear l, as in 물 and 서울, never an English r.`,
        ],
        table: {
          headers: ["Said as", "Written", "Examples"],
          rows: [
            ["[ㄱ]", "ㄱ ㅋ ㄲ", "책 [책], 부엌 [부억], 밖 [박]"],
            ["[ㄴ]", "ㄴ", "산 [산], 눈 [눈]"],
            ["[ㄷ]", "ㄷ ㅌ ㅅ ㅆ ㅈ ㅊ ㅎ", "옷 [옫], 밭 [받], 낮 [낟], 꽃 [꼳], 있다 [읻따]"],
            ["[ㄹ]", "ㄹ", "물 [물], 서울 [서울]"],
            ["[ㅁ]", "ㅁ", "감 [감], 봄 [봄]"],
            ["[ㅂ]", "ㅂ ㅍ", "밥 [밥], 앞 [압]"],
            ["[ㅇ]", "ㅇ", "강 [강], 방 [방]"],
          ],
        },
        examples: [
          { ko: "꽃", en: "flower" },
          { ko: "부엌", en: "kitchen" },
          { ko: "앞", en: "front" },
          { ko: "낮", en: "daytime" },
        ],
      },
      {
        heading: `Before a vowel, the real letter comes back`,
        body: [
          `When the next block starts with silent ㅇ, the final consonant moves across and is said in full, with its own sound: 꽃이 [꼬치], 옷이 [오시], 밭에 [바테], 앞에 [아페], 부엌에 [부어케]. This is why you have to learn the spelling: the plain form 꽃 [꼳] does not tell you that the particle form is [꼬치].`,
          `The exception is ㅇ itself: a final ㅇ never moves, because it is the ng sound and the next ㅇ is silent: 영어 [영어], 고양이 [고양이]. And ㅎ simply disappears before a vowel: 좋아요 [조아요].`,
        ],
        examples: [
          { ko: "꽃이 예뻐요.", en: "The flowers are pretty." },
          { ko: "옷을 샀어요.", en: "I bought clothes." },
          { ko: "집 앞에 있어요.", en: "It's in front of the house." },
          { ko: "부엌에서 요리해요.", en: "I cook in the kitchen." },
        ],
      },
      {
        heading: `Double finals: which letter do you say?`,
        body: [
          `Some blocks have two final letters (닭, 값, 앉다, 읽다). At the end of a word or before a consonant, only one is pronounced. In most of them the first letter wins: 앉다 [안따], 값 [갑], 여덟 [여덜], 넓다 [널따], 없다 [업따]. With ㄺ ㄻ ㄿ the second letter wins: 닭 [닥], 읽다 [익따], 젊다 [점따], 삶 [삼].`,
          `Two small refinements. ㄺ is said [ㄹ] before a ㄱ in a verb ending: 읽고 [일꼬], 맑게 [말께]. And 밟다 keeps [ㅂ]: [밥따]. Before a vowel, both letters are heard, the second moving into the next block: 닭이 [달기], 값이 [갑씨], 앉아요 [안자요], 읽어요 [일거요]. With ㄶ and ㅀ the ㅎ is silent before a vowel and turns the next ㄱ ㄷ ㅈ aspirated: 많아요 [마나요], 많다 [만타], 싫어요 [시러요], 싫다 [실타].`,
        ],
        table: {
          headers: ["Double final", "Before a consonant or at the end", "Before a vowel"],
          rows: [
            ["ㄳ", "몫 [목]", "몫이 [목씨]"],
            ["ㄵ", "앉다 [안따]", "앉아요 [안자요]"],
            ["ㄶ", "많다 [만타]", "많아요 [마나요]"],
            ["ㄺ", "읽다 [익따], 읽고 [일꼬]", "읽어요 [일거요]"],
            ["ㄻ", "젊다 [점따]", "젊어요 [절머요]"],
            ["ㄼ", "넓다 [널따], 밟다 [밥따]", "넓어요 [널버요]"],
            ["ㄾ", "핥다 [할따]", "핥아요 [할타요]"],
            ["ㅀ", "싫다 [실타]", "싫어요 [시러요]"],
            ["ㅄ", "없다 [업따], 값 [갑]", "없어요 [업써요], 값이 [갑씨]"],
          ],
        },
        examples: [
          { ko: "닭이 맛있어요.", en: "The chicken is tasty." },
          { ko: "값이 얼마예요?", en: "How much is it?" },
          { ko: "여기 앉으세요.", en: "Please sit here." },
          { ko: "책을 읽고 있어요.", en: "I'm reading a book." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "밥 [바브]",
        right: "밥 [밥]",
        why: `Don't release a final consonant with a vowel after it. Close your lips and stop.`,
      },
      {
        wrong: "꽃이 [꼬시]",
        right: "꽃이 [꼬치]",
        why: `Before a vowel the real letter comes back. The final of 꽃 is ㅊ, so 꽃이 is [꼬치], even though 꽃 alone is [꼳].`,
      },
      {
        wrong: "닭 [달]",
        right: "닭 [닥]",
        why: `With ㄺ the second letter is said at the end of a word. Both come back before a vowel: 닭이 [달기].`,
      },
      {
        wrong: "없어요 [어서요]",
        right: "없어요 [업써요]",
        why: `Both letters of ㅄ are heard before a vowel: ㅂ stays and ㅅ moves across, tensed by the ㅂ.`,
      },
    ],
    faqs: [
      {
        q: `If 낮 and 낫 sound the same, why spell them differently?`,
        a: `Because Korean spelling shows the word's stable form, which you hear as soon as a vowel follows: 낮에 [나제] (in the daytime), 낫이 [나시] (the sickle). This makes reading easier once you know the word, and it is why dictation of words with finals is a skill to practise.`,
      },
      {
        q: `Is ㄹ at the end really an l?`,
        a: `Yes. ㄹ is a flap (close to the tt of American butter) between vowels, as in 나라, and a clear l at the end of a syllable or doubled as ㄹㄹ: 물, 서울, 빨리. It is never the English r.`,
      },
    ],
    related: ["how-hangul-works", "pronunciation-rules"],
    lessons: ["hangul-final-consonants-1", "hangul-final-consonants-2", "hangul-linking-sounds", "hangul-review-and-test"],
  },
  {
    slug: "pronunciation-rules",
    title: "Pronunciation Rules: How Korean Is Really Said",
    description:
      "Every regular sound change in one reference, with Hangul bracket pronunciations: liaison, nasalisation, ㄹ changes, tensing, the four things ㅎ does, palatalisation, ㄴ insertion, the 사이시옷 and the readings of ㅢ and ㅖ.",
    level: "Hangul",
    intro: [
      `Korean is spelled by its parts and said by its sounds. 합니다 is written with ㅂ but said [함니다]; 같이 is written with ㅌ but said [가치]. These changes are not exceptions to memorise one by one: they are a small set of regular rules that every native speaker applies without thinking, and once you know them you can read any word aloud correctly.`,
      `This guide collects the rules in the order the course teaches them. The pronunciation is always shown in Hangul brackets: the spelling first, then the sound, as in 국물 [궁물]. Most rules apply inside a word and across a particle or ending; between separate words they apply in connected speech, as in 무슨 일 [무슨닐].`,
    ],
    sections: [
      {
        heading: `1. Liaison: a final moves into an empty block`,
        body: [
          `When a syllable ends in a consonant and the next one starts with silent ㅇ, the consonant moves across: 한국어 [한구거], 이름이 [이르미], 음악 [으막], 선생님이에요 [선생니미에요]. This happens with particles and endings all the time: 먹었어요 [머거써요], 읽어요 [일거요], 있어요 [이써요].`,
          `A final ㅇ never moves (영어 [영어]) and ㅎ drops out (좋아요 [조아요]). Across a boundary between real words, a final is first reduced to its basic sound and then moves: 맛없어요 [마덥써요], 못 와요 [모돠요], 옷 안에 [오다네]. 맛있어요 is said [마시써요], and [마디써요] is also standard.`,
        ],
        examples: [
          { ko: "저는 미국 사람이에요.", en: "I'm American. [사라미에요]" },
          { ko: "한국어를 배워요.", en: "I'm learning Korean. [한구거를]" },
          { ko: "어제 뭐 먹었어요?", en: "What did you eat yesterday? [머거써요]" },
          { ko: "이 집은 맛없어요.", en: "This place isn't good. [마덥써요]" },
        ],
      },
      {
        heading: `2. Nasalisation: ㄱ ㄷ ㅂ before ㄴ and ㅁ`,
        body: [
          `A final [ㄱ], [ㄷ] or [ㅂ] sound turns into the nasal made in the same place, [ㅇ], [ㄴ] or [ㅁ], when the next syllable starts with ㄴ or ㅁ. This is the rule behind every formal ending: 합니다 [함니다], 감사합니다 [감사함니다], 먹습니까 [먹씀니까]. Remember that many letters are said [ㄷ] at the end, so 있는 [인는], 맛있는 [마신는], 꽃만 [꼰만] and 씻는 [씬는] follow it too.`,
          `It applies across words in normal speech: 몇 명 [면명], 못 먹어요 [몬머거요], 한국 노래 [한궁노래].`,
        ],
        table: {
          headers: ["Final sound", "Before ㄴ / ㅁ", "Examples"],
          rows: [
            ["[ㄱ]", "[ㅇ]", "국물 [궁물], 먹는 [멍는], 백만 [뱅만], 작년 [장년]"],
            ["[ㄷ]", "[ㄴ]", "받는 [반는], 있는 [인는], 끝나요 [끈나요], 몇 년 [면년]"],
            ["[ㅂ]", "[ㅁ]", "합니다 [함니다], 십만 [심만], 앞문 [암문], 없는 [엄는]"],
          ],
        },
        examples: [
          { ko: "만나서 반갑습니다.", en: "Nice to meet you. [반갑씀니다]" },
          { ko: "수업이 끝나면 전화할게요.", en: "I'll call you when class finishes. [끈나면]" },
          { ko: "제가 제일 좋아하는 음식은 국물 있는 음식이에요.", en: "My favourite food is food with broth. [궁물 인는]" },
          { ko: "작년에 왔어요.", en: "I came last year. [장녀네]" },
        ],
      },
      {
        heading: `3. The ㄹ changes`,
        body: [
          `ㄴ next to ㄹ, in either order, becomes [ㄹ]: 신라 [실라], 연락 [열락], 편리 [펼리], 설날 [설랄], 일 년 [일련]. A handful of Sino-Korean words with a suffix go the other way (의견란 [의견난], 생산량 [생산냥]); you learn those as you meet them.`,
          `After any other consonant, ㄹ is said [ㄴ]. After ㅁ and ㅇ that is the whole change: 정류장 [정뉴장], 종로 [종노], 음료수 [음뇨수], 대통령 [대통녕]. After ㄱ and ㅂ the new [ㄴ] then nasalises them too: 국립 [궁닙], 독립 [동닙], 협력 [혐녁], 합리적 [함니적].`,
        ],
        examples: [
          { ko: "나중에 연락할게요.", en: "I'll be in touch later. [열라칼께요]" },
          { ko: "설날에 고향에 가요.", en: "I go home for Lunar New Year. [설라레]" },
          { ko: "버스 정류장이 어디예요?", en: "Where's the bus stop? [정뉴장]" },
          { ko: "국립 박물관에 갔어요.", en: "I went to the national museum. [궁닙 방물과네]" },
        ],
      },
      {
        heading: `4. Tensing: when a plain consonant becomes tense`,
        body: [
          `After a final [ㄱ], [ㄷ] or [ㅂ], a plain ㄱ ㄷ ㅂ ㅅ ㅈ always becomes tense: 학교 [학꾜], 식당 [식땅], 몇 시 [멷씨], 입다 [입따], 늦게 [늗께], 없다 [업따]. You can't say the plain sound there even if you try, so this one takes care of itself once you hold your finals.`,
          `Three other cases have to be learned. Endings after a verb stem in ㄴ or ㅁ are tensed: 신고 [신꼬], 감다 [감따], 앉고 [안꼬] (but the noun 신고, 'a report', is [신고]). After the future modifier -(으)ㄹ, the next consonant is tensed: 갈 거예요 [갈 꺼예요], 먹을 거 [머글 꺼], 할게요 [할께요], 살 집 [살 찝]; note that only -(으)ㄹ까요 writes it, never -(으)ㄹ게요. In Sino-Korean words ㄹ tenses a following ㄷ ㅅ ㅈ: 일정 [일쩡], 출장 [출짱], 발달 [발딸]. Many compounds tense their second part too: 물병 [물뼝], 김밥 [김밥] or [김빱].`,
        ],
        table: {
          headers: ["Where", "Examples"],
          rows: [
            ["after [ㄱ ㄷ ㅂ]", "학교 [학꾜], 몇 개 [멷깨], 듣고 [듣꼬], 입구 [입꾸]"],
            ["after a stem in ㄴ / ㅁ", "신다 [신따], 안고 [안꼬], 젊지 [점찌]"],
            ["after the -(으)ㄹ modifier", "갈 데 [갈 떼], 할 수 [할 쑤], 할게요 [할께요]"],
            ["ㄹ + ㄷ ㅅ ㅈ in Sino-Korean words", "결정 [결쩡], 열심히 [열씸히], 일시 [일씨]"],
            ["in compounds", "물병 [물뼝], 손등 [손뜽], 강가 [강까]"],
          ],
        },
        examples: [
          { ko: "몇 시에 만날까요?", en: "What time shall we meet? [멷씨에]" },
          { ko: "내일 출장을 갈 거예요.", en: "I'm going on a business trip tomorrow. [출짱을 갈 꺼예요]" },
          { ko: "제가 할게요.", en: "I'll do it. [할께요]" },
          { ko: "신발을 신고 나갔어요.", en: "He put his shoes on and went out. [신꼬]" },
        ],
      },
      {
        heading: `5. The four things ㅎ does`,
        body: [
          `ㅎ next to ㄱ ㄷ ㅂ ㅈ, in either order, merges with it into the aspirated sound: 좋다 [조타], 많고 [만코], 놓지 [노치], 축하 [추카], 입학 [이팍], 백화점 [배콰점], 못 해요 [모태요]. Before a vowel ㅎ disappears: 좋아요 [조아요], 많아요 [마나요], 싫어요 [시러요]. Before ㄴ it becomes [ㄴ]: 좋네요 [존네요], 놓는 [논는]. Before ㅅ it makes the ㅅ tense: 좋습니다 [조씀니다], 많습니다 [만씀니다].`,
          `Finally, between vowels and after ㄴ ㄹ ㅁ ㅇ, ㅎ is weakened, and at normal speed it is usually not heard at all: 전화 [저놔], 은행 [으냉], 결혼 [겨론], 열심히 [열씨미]. Dictionaries keep the ㅎ in these words, and careful speech keeps it, but you need to recognise the weak forms to follow real conversation.`,
        ],
        table: {
          headers: ["Next to", "Result", "Examples"],
          rows: [
            ["ㄱ ㄷ ㅂ ㅈ", "aspirated ㅋ ㅌ ㅍ ㅊ", "좋다 [조타], 생각해요 [생가캐요], 급해요 [그패요]"],
            ["a vowel", "silent", "넣어요 [너어요], 괜찮아요 [괜차나요]"],
            ["ㄴ", "[ㄴ]", "좋네요 [존네요], 않는 [안는]"],
            ["ㅅ", "tense [ㅆ]", "좋습니다 [조씀니다], 그렇습니다 [그러씀니다]"],
            ["after ㄴ ㄹ ㅁ ㅇ (speech)", "weak or silent", "전화 [저놔], 간호사 [가노사], 영화 [영와]"],
          ],
        },
        examples: [
          { ko: "생일 축하해요!", en: "Happy birthday! [추카해요]" },
          { ko: "오늘 날씨가 좋네요.", en: "The weather's lovely today. [존네요]" },
          { ko: "괜찮아요, 천천히 하세요.", en: "It's fine, take your time. [괜차나요]" },
          { ko: "이따가 전화할게요.", en: "I'll call you in a bit. [저놔할께요]" },
        ],
      },
      {
        heading: `6. Palatalisation: ㄷ ㅌ before 이`,
        body: [
          `When a final ㄷ or ㅌ meets a following 이 (a particle, a suffix or the ending of a passive), it becomes [ㅈ] or [ㅊ]: 같이 [가치], 굳이 [구지], 해돋이 [해도지], 끝이 [끄치], 밭이 [바치]. ㄷ + 히 becomes [치]: 닫히다 [다치다], 묻히다 [무치다].`,
          `The rule only fires before 이 or 히. Before any other vowel the ㅌ links as itself: 같아요 [가타요], 같은 [가튼], 끝에 [끄테], 밭을 [바틀].`,
        ],
        examples: [
          { ko: "같이 가요!", en: "Let's go together! [가치]" },
          { ko: "영화 끝이 좋았어요.", en: "The end of the film was good. [끄치]" },
          { ko: "문이 닫혔어요.", en: "The door is shut. [다처써요]" },
          { ko: "저도 같은 생각이에요.", en: "I think the same. [가튼]" },
        ],
      },
      {
        heading: `7. ㄴ insertion and the 사이시옷`,
        body: [
          `In a compound or a phrase whose second part starts with 이, 야, 여, 요 or 유, and whose first part ends in a consonant, an [ㄴ] is usually added (not in every word: 금요일 is [그묘일]): 무슨 일 [무슨닐], 담요 [담뇨], 한여름 [한녀름], 시청역 [시청녁], 색연필 [생년필] (the [ㄴ] also nasalises the ㄱ). After ㄹ the added sound becomes [ㄹ]: 서울역 [서울력], 할 일 [할릴], 물약 [물략].`,
          `The 사이시옷 is an ㅅ written at the bottom of the first part of some native compounds (바닷가, 햇빛, 콧물, 깻잎, 나뭇잎). It shows that the compound is said with a tense or added sound: before a plain consonant it tenses it (바닷가 [바다까], 햇빛 [해삗]); before ㄴ or ㅁ it becomes [ㄴ] (콧물 [콘물], 뱃머리 [밴머리]); before 이 it becomes [ㄴㄴ] (깻잎 [깬닙], 나뭇잎 [나문닙]). The course teaches the first standard pronunciation; [바닫까] and [핻삗] are also standard.`,
        ],
        examples: [
          { ko: "무슨 일이 있어요?", en: "Is something wrong? [무슨니리]" },
          { ko: "서울역에서 만나요.", en: "Let's meet at Seoul Station. [서울려게서]" },
          { ko: "주말에 바닷가에 갔어요.", en: "I went to the seaside at the weekend. [바다까에]" },
          { ko: "감기 때문에 콧물이 나요.", en: "I have a runny nose because of a cold. [콘무리]" },
        ],
      },
      {
        heading: `8. Vowel readings: ㅢ and ㅖ`,
        body: [
          `ㅢ is a true glide only at the start of a word (의사, 의자, 의견). After a consonant it is [이]: 희망 [히망], 무늬 [무니]. Elsewhere in a word, [ㅢ] and [이] are both standard: 회의 [회의] or [회이], 주의 [주의] or [주이]. The particle 의 ('of') is usually [에]: 저의 [저에], 나라의 [나라에].`,
          `ㅖ after a consonant other than ㄹ is usually said [ㅔ]: 시계 [시게], 계세요 [게세요], 혜택 [헤택]. 예 on its own and 례 keep the glide: 예약, 차례 [차례].`,
        ],
        table: {
          headers: ["Spelling", "Usual pronunciation", "Examples"],
          rows: [
            ["ㅢ at the start of a word", "[의]", "의사, 의자, 의미"],
            ["ㅢ after a consonant", "[이]", "희망 [히망], 띄어쓰기 [띠어쓰기]"],
            ["ㅢ later in a word", "[의] or [이]", "회의 [회의 / 회이]"],
            ["the particle 의", "[에] (also [의])", "친구의 책 [친구에 책]"],
            ["ㅖ after a consonant (not ㄹ)", "[ㅔ]", "시계 [시게], 지폐 [지페]"],
          ],
        },
        examples: [
          { ko: "회의가 몇 시예요?", en: "What time is the meeting? [회이가 멷씨예요]" },
          { ko: "이건 제 동생의 가방이에요.", en: "This is my sibling's bag. [동생에]" },
          { ko: "시계가 고장 났어요.", en: "The clock is broken. [시게가]" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "감사합니다 [감사합니다]",
        right: "감사합니다 [감사함니다]",
        why: `ㅂ before ㄴ is always said [ㅁ]. Reading the formal ending letter by letter is the most common accent giveaway.`,
      },
      {
        wrong: "같이 [가티]",
        right: "같이 [가치]",
        why: `Palatalisation: ㅌ before 이 becomes [ㅊ]. Before other vowels it stays: 같아요 [가타요].`,
      },
      {
        wrong: "연락 [연낙]",
        right: "연락 [열락]",
        why: `ㄴ and ㄹ next to each other usually become [ㄹㄹ]; only a few Sino-Korean words with a suffix go to [ㄴㄴ] (의견란 [의견난]).`,
      },
      {
        wrong: "할께요",
        right: "할게요",
        why: `-(으)ㄹ게요 is said [할께요] but always written with ㄱ. Only -(으)ㄹ까요 is written with ㄲ.`,
      },
      {
        wrong: "좋다 [조다]",
        right: "좋다 [조타]",
        why: `ㅎ + ㄷ merge into the aspirated [ㅌ]. Before a vowel the ㅎ is silent instead: 좋아요 [조아요].`,
      },
    ],
    faqs: [
      {
        q: `Do I have to learn all of this before I can speak?`,
        a: `No. The course teaches one rule per unit with the words that need it, so by the end of Elementary you have met them all in context. Use this page as the map: when a word surprises you, find the rule here.`,
      },
      {
        q: `Why isn't Korean just spelled the way it sounds?`,
        a: `Because spelling the parts keeps words recognisable. 먹다, 먹어요 and 먹는 are said [먹따], [머거요] and [멍는], three different ways, but you see the same stem 먹 every time. The rules then tell you how to say it.`,
      },
      {
        q: `Do these rules apply between words too?`,
        a: `In connected speech, yes, within a phrase said in one breath: 무슨 일 [무슨닐], 못 먹어요 [몬머거요], 몇 시 [멷씨]. If you pause between the words, the change is lighter or absent.`,
      },
      {
        q: `What about vowel length?`,
        a: `Standard Korean still distinguishes long and short vowels in a few pairs (눈 'snow' is long, 눈 'eye' short; 말 'speech' long, 말 'horse' short), and broadcasters keep them, but most younger Seoul speakers no longer do. You don't need it to be understood; the Mastery level touches on it for broadcast Korean.`,
      },
    ],
    related: ["final-consonants", "how-hangul-works", "formal-speech-hamnida", "noun-modifiers"],
    lessons: [
      "hangul-linking-sounds",
      "a1-introductions-1",
      "a1-sino-numbers-2",
      "a1-native-numbers-1",
      "a1-there-is-1",
      "a1-polite-present-3",
      "a1-going-places",
      "a1-saying-not",
      "a1-past-tense-1",
      "a1-future-plans-1",
      "a2-formal-statements",
      "a2-first-this-then-that",
    ],
  },
];
