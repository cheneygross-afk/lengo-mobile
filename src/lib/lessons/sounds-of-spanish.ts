// Synced from cheneygross-afk/lengo:src/lib/lessons/sounds-of-spanish.ts by scripts/sync-content.mjs -- edit it there, not here.
import { anchored, authoring } from "./authoring";
import { dict, lc, sayIt } from "./skills-authoring";
import type { SpeakExercise } from "./types";
import type { AnchoredLesson } from "./weave";

// A1 "Sounds of Spanish" (linguist review E2): the vowels, the consonants
// English speakers get wrong, spelling-to-sound rules, linking,
// intonation and a first look at stress. Every lesson mixes listening
// (minimal pairs), dictation of short words and record-and-compare
// speaking. Woven in after the first unit (see skills.ts); the written
// accent rules themselves come in A2 (a2g-spelling-stress-rules).
const { mc, ms, sec, toEs } = authoring("en");
// Transform, spelling-correction and respond-aloud items for the practice ladders.
const tf = (prompt: string, source: string, answer: string, explanation: string, alts: string[] = []) =>
  toEs(source, answer, explanation, alts, prompt);
const fixSpelling = (source: string, answer: string, explanation: string, alts: string[] = []) =>
  toEs(source, answer, explanation, alts, "Correct the spelling.");
const say = (prompt: string, text: string, explanation: string): SpeakExercise => ({ type: "speak", prompt, text, explanation });
// The last base lesson of unit 1; woven after its own reinforcement lessons.
const AFTER = "adjective-agreement";
// A firm-letter spelling check by ear: the learner hears the word and picks
// how it is written, so a misspelling of the sound this unit teaches can't
// pass as a small typo (Unit 2 audit, SP-01). Options are given right first.
const spell = (audio: string, options: string[], explanation: string) =>
  lc(audio, audio.includes(" ") ? "Listen. How is it written?" : "Listen. How is the word written?", options, 0, explanation);
// A short look back before the new sound: earlier lessons' contrasts by ear
// (Unit 2 audit, U.03).
const warmUp = (items: Parameters<typeof sec>[3]) =>
  sec("Warm-up: sounds you know", ["A quick look back before the new sound. Listen to each one as often as you like."], [], items);
const L = (
  slug: string,
  title: string,
  summary: string,
  duration: string,
  sections: Parameters<typeof anchored>[6],
  exercises: Parameters<typeof anchored>[7]
) => {
  const a = anchored("A1", AFTER, slug, title, summary, duration, sections, exercises);
  // Pronunciation lessons: the generic "Try it yourself" writing box doesn't
  // fit (auditor note 2026-11-21); each lesson ends with sound practice instead.
  return { ...a, lesson: { ...a.lesson, noTryIt: true } };
};

const LESSONS: AnchoredLesson[] = [
  L(
    "sounds-vowels",
    "Sounds of Spanish: The Five Vowels",
    "A, e, i, o, u: five short, pure sounds that never change, never glide and never fade to \"uh\".",
    "9 min",
    [
      sec(
        "Five letters, five sounds",
        [
          "English has around a dozen vowel sounds for five letters. Spanish has exactly five, and each vowel keeps its sound in every word. (One exception comes later: in que, qui, gue and gui the u is silent, as in queso and guitarra.)",
          "Rough guides: a as in \"father\", e as in \"met\", i as in \"see\", o as in \"more\" with rounded lips, u as in \"food\". English accents vary, so let the audio be your model: tap each word to hear it.",
        ],
        [
          ["casa", "house -- both a's are the same \"ah\""],
          ["mesa", "table"],
          ["sí", "yes"],
          ["sol", "sun"],
          ["tú", "you"],
          ["Ana mira la luna.", "Ana looks at the moon."],
        ],
        [
          mc(
            "Fila (line, queue) is a new word. Its i sounds the same as the i in...",
            ["sí (yes)", "English \"fill\" (short i)", "English \"file\" (i as \"eye\")", "English \"field\", but with a glide"],
            0,
            "Spanish i is always \"ee\", short and pure, like sí. Fila is \"FEE-la\", never the short i of \"fill\" or the \"eye\" of \"file\"."
          ),
          mc(
            "Pala (shovel) is a new word. How do its two a's sound?",
            ["Both the same as the a's in casa", "The first like casa, the second weaker", "Different from each other", "The second one is silent"],
            0,
            "Each Spanish vowel keeps its sound, so both a's in pala sound like the a's in casa. The first one is stressed (PA-la), but the second keeps its full sound; Spanish never weakens it."
          ),
        ]
      ),
      sec(
        "Short and pure: no glide",
        [
          "English long vowels slide into another sound: \"no\" is really \"noh-oo\", \"day\" is \"deh-ee\". Spanish vowels hold still. Say \"no\" and \"de\" short and clean, as if the sound were cut off with scissors.",
          "Keep your jaw and lips still until the vowel is over. This single habit makes your accent sound far more Spanish.",
        ],
        [
          ["no", "no -- not \"noh-oo\""],
          ["de", "of, from -- not \"day\""],
          ["yo", "I"],
          ["té", "tea"],
          ["lo sé", "I know (a set phrase: learn it as one piece)"],
        ],
        [
          mc(
            "Which describes the Spanish o in the new word dos (two)?",
            ["Short and steady, lips rounded the whole time", "It slides into \"oo\" like English \"no\"", "It sounds like \"uh\"", "It's longer than in English"],
            0,
            "Spanish o holds still from start to finish, in dos just as in no. Sliding into \"oo\" (\"dose\") is the English habit, and \"uh\" is the English reduced vowel, which Spanish doesn't have."
          ),
        ]
      ),
      sec(
        "Every vowel keeps its full sound",
        [
          "Most words have one stressed syllable: ba-NA-na, ha-BLAR. Little words like el, la, de, en, mi and que usually have none: they lean on the next word. English weakens the other vowels to \"uh\". Spanish never does: in banana all three a's keep the same sound, only the middle one is louder. In chocolate the final e is said too: cho-co-la-te.",
          "This matters for meaning: the last vowel is often the only clue. You saw it in Unit 1: niño, niña; alto, alta. A swallowed final vowel leaves the listener guessing.",
        ],
        [
          ["banana", "banana -- ba-NA-na, three a's with the same sound"],
          ["chocolate", "chocolate -- cho-co-la-te"],
          ["importante", "important -- im-por-tan-te"],
          ["Es muy importante.", "It's very important."],
        ],
        [
          mc(
            "Tomate (tomato) is a new word. How many syllables does it have in Spanish?",
            ["3: to-ma-te", "2: to-mate", "4: to-ma-t-e", "1: tmate"],
            0,
            "The final e is a full syllable: to-MA-te, like cho-co-la-te. \"To-mate\" is how English swallows the last vowel."
          ),
        ]
      ),
      sec(
        "Vowel pairs: one beat",
        [
          "Most syllables have one vowel, but i and u are quick vowels. Next to another vowel they glide into it, and the two share one beat: bien is one beat, bue-no two, a-gua two, ciu-dad two, Juan one.",
          "A, e and o side by side keep a beat each: le-o (I read), te-a-tro (theater). Tap each word and count the beats.",
        ],
        [
          ["bien", "well -- one beat"],
          ["bueno", "good -- bue-no"],
          ["agua", "water -- a-gua"],
          ["la ciudad", "the city -- ciu-dad"],
          ["el teatro", "the theater -- te-a-tro"],
        ],
        [
          mc(
            "Bueno (good) has how many syllables?",
            ["2: bue-no", "3: bu-e-no", "1: bueno", "4: b-u-e-no"],
            0,
            "U next to another vowel glides into it, so ue is one beat: bue-no. Saying \"bu-e-no\" adds a beat Spanish doesn't have."
          ),
          mc(
            "Which word has two vowels side by side in separate syllables?",
            ["leo (I read)", "bien (well)", "agua (water)", "Juan"],
            0,
            "E and o each keep their own beat: le-o. In bien, agua and Juan the i or u glides into the next vowel: bien and Juan are one beat, a-gua two."
          ),
        ]
      ),
    ],
    [
      lc(
        "piso",
        "Listen. Which word did you hear?",
        ["piso", "peso", "paso", "puso"],
        0,
        "You heard piso (floor, flat): the i is a clear \"ee\". Peso has e, paso has a and puso has u -- only the first vowel changes, and each is a different word."
      ),
      lc(
        "masa",
        "Listen. Which word did you hear?",
        ["masa", "mesa", "misa", "musa"],
        0,
        "You heard masa (dough): \"ah\" in both syllables. Mesa (table) has e, misa (mass) i and musa (muse) u. One vowel is enough to change the meaning."
      ),
      lc(
        "sol",
        "Listen. Which word did you hear?",
        ["sol", "sal", "sul"],
        0,
        "Sol (sun) has a rounded o. Sal (salt) has an open a, and sul isn't a Spanish word."
      ),
      lc(
        "Es una mesa.",
        "Listen. What is it?",
        ["A table (mesa)", "A mass (misa)", "Dough (masa)", "A muse (musa)"],
        0,
        "Es una mesa: \"It's a table.\" Me-sa has a short, pure e. Misa has i, masa a and musa u: one vowel changes the word."
      ),
      {
        type: "matching",
        instructions: "Sort by sound: match each new word to the Spanish word whose first vowel sounds the same.",
        pairs: [
          { left: "pato (duck)", right: "casa" },
          { left: "peso (weight)", right: "mesa" },
          { left: "libro (book)", right: "sí" },
          { left: "foto (photo)", right: "sol" },
          { left: "mundo (world)", right: "tú" },
        ],
        explanation: "Each Spanish vowel has one sound, so you can sort any word by its vowels: pa-to like ca-sa, pe-so like me-sa, li-bro like sí, fo-to like sol, mun-do like tú.",
      },
      lc(
        "todo",
        "Listen. Which word did you hear?",
        ["todo", "toda", "tuda"],
        0,
        "Todo ends in a clear o (masculine); toda ends in a (feminine). Tuda isn't a word: the stressed vowel is o, pure and rounded."
      ),
      dict("luna", "Luna (moon): the u is always \"oo\"."),
      lc("bueno", "Listen. How many beats (syllables) do you hear?", ["2: bue-no", "3: bu-e-no"], 0, "Bue-no: the u glides into the e, so ue is one beat. Two beats in all."),
      dict("Mi casa es tu casa.", "Mi casa es tu casa -- \"my house is your house\", i.e. make yourself at home. Every a is the same open \"ah\"."),
      sayIt("casa", "house", "Open your mouth wide for both a's; the second one is as clear as the first. The check hears your words, not your accent: after it says \"That's it!\", play your recording next to the model and listen to the vowels.", "Casa: CA-sa, two equal \"ah\" sounds, stress on the first."),
      sayIt("No, no sé.", "No, I don't know.", "Cut each vowel off short: no glide into \"oo\" or \"ee\".", "No, no sé -- \"No, I don't know.\" Three short, pure vowels."),
      sayIt("chocolate", "chocolate", "Four beats, and the final e is a full \"eh\": cho-co-la-te.", "Chocolate: cho-co-LA-te, stress on la."),
      sayIt("Muy bien, gracias.", "Very well, thanks.", "Bien is one beat: the i glides into the e. Every other vowel stays short and pure.", "Muy bien, gracias -- \"Very well, thanks.\""),
      sayIt("Hablo un poco de español.", "I speak a little Spanish.", "Keep the o of hablo and poco short and round, not \"oh-oo\".", "Hablo un poco de español -- \"I speak a little Spanish.\" Stress: HA-blo, PO-co, es-pa-ÑOL."),
      mc(
        "Noche (night) is a new word. How does it end?",
        ["With a full, short \"eh\"", "Silent: \"noch\"", "With \"ee\"", "With \"uh\""],
        0,
        "NO-che: the final e is a full, short \"eh\". Spanish never drops a final vowel or turns it into \"uh\"."
      ),
      mc(
        "Presidente is a new word. How many syllables does it have in Spanish?",
        ["3", "4", "5", "2"],
        1,
        "pre-si-DEN-te: four syllables, because every vowel is a beat and the final e is always pronounced. Its s is a hiss, too, never the buzz of English \"president\"."
      ),
      mc(
        "How is the e in the new word pez (fish) pronounced?",
        ["Short and pure, like the e in \"met\"", "Like English \"pay\"", "Like \"uh\"", "It's silent"],
        0,
        "Spanish e never glides into \"ee\": pez rhymes with the start of \"pet\", not with \"pays\"."
      ),
      ms(
        "Read these new words aloud. Which ones end in the same vowel sound as casa?",
        ["cama (bed)", "come (eats)", "lava (washes)", "dime (tell me)", "pisa (steps on)"],
        [0, 2, 4],
        "Each letter keeps its sound, so every word ending in a ends in the same open \"ah\" as casa: cama, lava, pisa. Come and dime end in e, a different sound."
      ),
      fixSpelling(
        "Es un estudiant de Canadá.",
        "Es un estudiante de Canadá.",
        "English drops the final vowel; Spanish never does: es-tu-DIAN-te. The final e is written and said, and ia is one beat."
      ),
      tf(
        "Make it feminine.",
        "El niño es alto.",
        "La niña es alta.",
        "In these nouns and adjectives the final vowel shows the gender: o → a. Say each final a fully, or niña and niño blur together."
      ),
      fixSpelling(
        "Es muy important.",
        "Es muy importante.",
        "English drops the final vowel; Spanish never does. im-por-TAN-te has four syllables, and the final e is written and said.",
      ),
      lc("Es importante.", "Listen. How many beats (syllables) does importante have?", ["4: im-por-tan-te", "3: im-por-tant", "5: im-po-r-tan-te"], 0, "Im-por-TAN-te: four beats, and the final e is said in full."),
      toEs("Yes, I know.", "Sí, lo sé.", "Sí (yes) has an accent; the i is a pure \"ee\" and the e in sé is short, with no glide.", ["Sí, ya lo sé."]),
      say(
        "Respond aloud: say that the house is big and the table is pretty.",
        "La casa es grande y la mesa es bonita.",
        "Every final vowel is clear: ca-sa, gran-de, me-sa, bo-ni-ta. No \"uh\" anywhere."
      ),

    ]
  ),
  L(
    "sounds-b-v-d-g",
    "Sounds of Spanish: B = V, and the Soft D and G",
    "B and v are one sound, and b, d and g go soft between vowels: why Cuba, nada and agua sound so gentle.",
    "10 min",
    [
      warmUp([
        lc("misa", "Listen. Which word did you hear?", ["misa (mass)", "mesa (table)", "masa (dough)"], 0, "Misa: a short, pure \"ee\". Mesa has e and masa a. (Lesson 1: the five vowels.)"),
        lc("ciudad", "Listen. How many beats (syllables) do you hear?", ["2: ciu-dad", "3: ci-u-dad"], 0, "Ciu-dad: the i and u share one beat. (Lesson 1: vowel pairs.)"),
        lc("Somos de Chile.", "Listen. Who is from Chile?", ["We are", "They are", "I am"], 0, "Somos = we are. (Unit 1: ser.)"),
      ]),
      sec(
        "B and v: one sound, two spellings",
        [
          "In Spanish, b and v are pronounced exactly the same. There is no English v (top teeth on the lower lip) in standard Spanish: bota (boot) and vota (votes), tubo and tuvo sound identical.",
          "At the start of what you say, and after m or n, it's a firm b, like English \"boy\": ¡Vamos!, un vaso (said \"um baso\"). Everywhere else, especially between vowels, it's soft: the lips come close but don't quite touch, letting a little air through: Cuba, uva, la vaca.",
          "Because the sound doesn't tell you the letter, learn each word's spelling with the word.",
        ],
        [
          ["¡Vamos!", "Let's go! -- firm b at the start"],
          ["un vaso", "a glass -- firm, after n"],
          ["Cuba", "soft b between vowels"],
          ["la uva", "the grape -- soft"],
          ["Vivo en Bolivia.", "I live in Bolivia."],
        ],
        [
          mc(
            "Vela (candle) is a new word. How is its v pronounced?",
            ["Exactly like b", "Like English v, teeth on the lip", "Like f", "It's silent"],
            0,
            "Spanish v and b are the same sound in every word. English v (teeth on the lip) isn't used in standard Spanish, and v is never silent or an f."
          ),
          ms(
            "In which of these new phrases is the b/v firm, with the lips closed?",
            ["un beso (a kiss)", "la boca (the mouth)", "¡Vale! (said on its own)", "el vino (the wine)"],
            [0, 2],
            "B and v are firm only at the very start of what you say (¡Vale!) and after m or n (un beso, said \"um beso\"). After a vowel or l they're soft: la boca, el vino."
          ),
        ]
      ),
      sec(
        "The soft d",
        [
          "Spanish has a firm d and a soft d. The firm d comes at the start of what you say (after a pause) and after n or l: ¡Dos!, donde, el día. Inside a phrase, a d at the start of a word is soft when a vowel comes before it: la dama, de dónde. For the firm d the tongue presses against the back of the upper front teeth (English d touches the ridge behind them).",
          "Everywhere else, especially between vowels, d is soft: the tongue only comes close to the edge of the upper teeth and lets air through, like a light th in \"this\": nada, todo, cada. At the end of a word it's soft and light: Madrid, usted.",
        ],
        [
          ["dos", "two -- firm d"],
          ["nada", "nothing -- soft d"],
          ["todo", "everything -- soft d"],
          ["Madrid", "the final d is soft and light"],
          ["¿Y usted?", "And you? (formal)"],
        ],
        [
          mc(
            "Moda (fashion) is a new word. The d between the o and the a sounds...",
            ["soft, close to the th in \"this\"", "like English d in \"ladder\"", "like t", "silent"],
            0,
            "Between vowels d softens toward the th of \"this\", as in nada and todo. It's never a t, and it isn't silent in careful speech. English \"ladder\" has a flap, which sounds like Spanish r, not d."
          ),
          mc(
            "In which new phrase is the d firm?",
            ["un dato (a fact)", "el modo (the way)", "poder (to be able)", "cuidado (careful)"],
            0,
            "D is firm at the start, after n or after l: un dato, with the tongue pressed to the teeth. In modo, poder and cuidado every d comes after a vowel, so it's soft."
          ),
        ]
      ),
      sec(
        "The soft g",
        [
          "G before a, o, u or a consonant is like English \"go\" at the start of what you say and after n: ¡Gol!, tengo, un gato.",
          "Between vowels it softens: the back of the tongue comes close to the roof of the mouth but doesn't close, so the sound keeps flowing. Listen for it in agua, lago and hago.",
          "(G before e or i is a different sound, like the j in jamón. That comes in the lesson on j, g and h.)",
        ],
        [
          ["gato", "cat -- firm g"],
          ["tengo", "I have (a set phrase for now) -- firm, after n"],
          ["agua", "water -- soft g"],
          ["el lago", "the lake -- soft g"],
          ["Hago la tarea.", "I do my homework."],
        ],
        [
          mc(
            "Where is the g soft?",
            ["el amigo", "gracias, at the very start", "un gol, after n", "tengo, after n"],
            0,
            "G softens between vowels, as in a-mi-go. At the very start (gracias) and after n (un gol, tengo) it stays firm."
          ),
        ]
      ),
      sec(
        "P, t and k: no puff of air",
        [
          "Say \"pin\" with your hand in front of your mouth: you feel a puff of air. Spanish p, t and k have no puff, like the p in \"spin\". Keep them short and clean.",
          "T, like d, is made with the tongue on the back of the upper front teeth, not on the ridge behind them.",
        ],
        [
          ["papá", "dad -- no puff on either p"],
          ["el tomate", "the tomato"],
          ["la casa", "the house -- k sound, no puff"],
          ["Tengo tiempo.", "I have time."],
        ],
        [
          mc(
            "Hold a sheet of paper in front of your mouth and say papá. What should happen?",
            ["The paper barely moves", "The paper jumps on each p", "The paper jumps only on the second p", "The p is silent"],
            0,
            "Spanish p has no puff of air, like the p in \"spin\", so the paper barely moves. A jump means an English p."
          ),
        ]
      ),
    ],
    [
      lc(
        "lago",
        "Listen. Which word did you hear?",
        ["lago", "lado", "lavo"],
        0,
        "Lago (lake) has a soft g. Lado (side) has a soft d, close to \"th\", and lavo (I wash) a soft b-sound with the lips. All three are soft between vowels, so listen for where the sound is made."
      ),
      lc(
        "lado",
        "Listen. Which word did you hear?",
        ["lado", "lago", "lavo"],
        0,
        "Lado (side): the soft d is made with the tongue at the teeth, like a light \"th\". Lago has the soft g at the back of the mouth, and lavo the soft b at the lips."
      ),
      lc(
        "Tengo un tubo.",
        "Listen. Which spelling is right? (B and v sound the same, so think of the meaning: a tube.)",
        ["Tengo un tubo.", "Tengo un tuvo."],
        0,
        "Tubo (tube) and tuvo (had) sound exactly the same, because b = v. Here it's a thing you have, a tube: tubo, with b."
      ),
      lc(
        "Vivo en Venezuela.",
        "Listen. Where does the person live?",
        ["Venezuela", "Bolivia", "Valencia", "Buenos Aires"],
        0,
        "Vivo en Venezuela. Every v here sounds like b: firm at the start of vivo, soft in the middle of vivo, and firm again in Venezuela because it comes after the n of en."
      ),
      dict("nada", "Nada (nothing): the d between vowels is soft, but it's still written d."),
      dict("agua", "Agua (water): soft g, written g."),
      spell("verdad", ["verdad", "berdad", "verdá"], "Verdad (true, truth) is written with v, though it sounds like b; and the final d is light but always written. Same sound, other letter: learn the spelling with the word."),
      dict("Tengo un gato.", "Tengo un gato -- \"I have a cat\" (tengo = I have, a set phrase for now). Firm g in tengo (after n) and in gato (after n of un)."),
      sayIt("Vivo en Valencia.", "I live in Valencia.", "Keep your top teeth off your lip: every v here is a b-sound, firm at the start of vivo and after the n of en, soft in the middle of vivo.", "Vivo en Valencia -- \"I live in Valencia.\" VI-vo en va-LEN-cia."),
      sayIt("Todo está bien.", "Everything's fine.", "Let the d of todo be soft, almost \"th\"; don't flap it like the tt in \"butter\".", "Todo está bien -- \"Everything's fine\" (está = is: a set phrase for now). TO-do es-TÁ BIEN."),
      sayIt("¿Quieres agua?", "Do you want some water?", "The g in agua barely closes: let the air keep flowing.", "¿Quieres agua? -- \"Do you want some water?\" (quieres = do you want: a set phrase for now). Let the voice rise at the end."),
      sayIt("¿De dónde es usted?", "Where are you from? (formal)", "Firm d in de (start of the sentence) and in the -de of dónde (after n); soft d at the start of dónde (after the e of de). The final d of usted is very light.", "¿De dónde es usted? -- \"Where are you from?\" (formal)."),
      sayIt("Tengo tiempo.", "I have time.", "No puff of air on the t's or the p: keep them short, like the p in \"spin\".", "Tengo tiempo -- \"I have time.\""),
      mc(
        "In which word is the d soft?",
        ["dos", "pido (I ask for)", "el día", "donde"],
        1,
        "Between vowels (pi-do) the d goes soft. At the start (dos, donde) or after l (el día) it's firm."
      ),
      ms(
        "In which of these new words is the g soft?",
        ["pagar (to pay)", "un gorro (a hat)", "la soga (the rope)", "¡Gol! (said on its own)"],
        [0, 2],
        "G softens between vowels: pa-gar, la so-ga. After n (un gorro) and at the very start (¡Gol!) it stays firm."
      ),
      mc(
        "Say un vaso (a glass) aloud. How does the v sound after the n of un?",
        ["A firm b, lips closed: \"um baso\"", "A soft b, lips almost touching", "An English v, teeth on the lip"],
        0,
        "After n (and m) b and v are firm: un vaso sounds like \"um baso\". After l or a vowel it's soft: el va-so, la va-ca, lips almost touching. Standard Spanish never uses the English v."
      ),
      fixSpelling(
        "¿Quieres un baso de leche?",
        "¿Quieres un vaso de leche?",
        "Vaso and baso would sound exactly the same, so the ear can't help: vaso (glass) is spelled with v. Learn the letter with the word."
      ),
      fixSpelling(
        "Madri es una ciudad bonita.",
        "Madrid es una ciudad bonita.",
        "The final d of Madrid is very light, almost silent, but it's always written."
      ),
      spell("un vaso de agua", ["un vaso de agua", "un baso de agua", "un vaso de awa"], "Same sound, other letter: vaso is spelled with v. Agua has the soft g, written g."),
      say(
        "Respond aloud: say that you have a cat and nothing else (tengo = I have).",
        "Tengo un gato y nada más.",
        "Firm g in tengo and gato (both after n), soft d in nada (between vowels)."
      ),

    ]
  ),
  L(
    "sounds-r-rr",
    "Sounds of Spanish: R and RR",
    "The quick tap of pero and the trill of perro -- and why the r at the start of rojo is always trilled.",
    "10 min",
    [
      warmUp([
        lc("lado", "Listen. Which word did you hear?", ["lado (side)", "lago (lake)", "lavo (I wash)"], 0, "Lado: a soft d, made at the teeth. (Lesson 2: soft d and g.)"),
        mc("Which d is soft?", ["the d of nada", "the d of un dato"], 0, "Between vowels (na-da) the d is soft; after n (un dato) it's firm. (Lesson 2.)"),
        lc("peso", "Listen. Which word did you hear?", ["peso (weight)", "piso (floor)", "paso (step)"], 0, "Peso: a short, pure e. (Lesson 1: vowels.)"),
        lc("Ellos son altos.", "Listen. Who is tall?", ["They are", "We are", "You are"], 0, "Ellos son = they are. (Unit 1: ser.)"),
      ]),
      sec(
        "The tap: one quick touch",
        [
          "A single r between vowels is one very quick tap of the tongue tip on the ridge behind the upper teeth. You already make this sound: it's the tt in American \"butter\" or the dd in \"ladder\" said fast.",
          "If your English says a clear t in \"butter\", try this: say \"edda\" very fast, letting the tongue just flick the ridge behind your teeth once. That flick is the Spanish r.",
          "Say \"pot o' tea\" quickly and you're close to para. The tongue never curls back like the English r.",
          "The same tap is used at the end of a syllable: comer, puerta, verde.",
        ],
        [
          ["pero", "but -- one tap"],
          ["cara", "face"],
          ["para", "for"],
          ["hablar", "to speak -- tap at the end"],
          ["la puerta", "the door"],
        ],
        [
          mc(
            "Toro (bull) is a new word. Which English sound is closest to its r?",
            ["The tt in American \"butter\"", "The r in \"red\"", "The rr in \"carry\"", "The d in \"day\""],
            0,
            "A single r between vowels is a tap, one fast flick of the tongue, like the tt in American \"butter\". English r in \"red\" or \"carry\" curls the tongue back and never touches, and d in \"day\" is a full stop, not a flick."
          ),
        ]
      ),
      sec(
        "The trill: rr and r at the start",
        [
          "The trill is several taps in a row: the tongue tip vibrates against the ridge as air flows over it. It's written rr between vowels (perro, carro) and a single r at the start of a word (rojo, Roma, rico) or after n, l or s (Enrique, alrededor, Israel).",
          "Can't trill yet? Relax your tongue, put it where you say d, and blow. Tr and dr words (tres, tren, madre) have a tap, not a trill, but they put your tongue in the right place: use them as a warm-up, then trill rojo and perro.",
          "A tap is fine as a first step, but keep working on the trill: it can change the meaning, as in pero (but) and perro (dog).",
        ],
        [
          ["perro", "dog -- trill"],
          ["carro", "car (Latin America; coche in Spain)"],
          ["rojo", "red -- trilled at the start"],
          ["Roma", "Rome"],
          ["Enrique", "Enrique -- trill after n"],
          ["tres", "three -- a tap, good as a warm-up"],
        ],
        [
          mc(
            "Rana (frog) is a new word. How is its r pronounced?",
            ["Trilled, like rr", "A single tap, like in pero", "Like English r", "Silent"],
            0,
            "A single r at the start of a word is always trilled, just like rr (rojo, Roma). The single tap happens between vowels, after consonants like t, d or b (tres, madre), and at the end of a syllable, and English r is never used."
          ),
          ms(
            "These words are new. Which ones have a trill?",
            ["honrado (honest)", "arena (sand)", "ratón (mouse)", "tierra (earth)", "hora (hour)"],
            [0, 2, 3],
            "Trill = rr, r at the start of a word, or r after n, l or s: honrado (after n), ratón (start), tierra (rr). Arena and hora have one r between vowels, a tap."
          ),
        ]
      ),
      sec(
        "Tap or trill changes the word",
        [
          "Between vowels, changing a single r to rr can change the meaning of a word. Getting this right matters: pero is \"but\", perro is \"dog\"; caro is \"expensive\", carro is \"car\"; cero is \"zero\", cerro is \"hill\".",
        ],
        [
          ["pero / perro", "but / dog"],
          ["caro / carro", "expensive / car"],
          ["cero / cerro", "zero / hill"],
          ["Es caro, pero es bonito.", "It's expensive, but it's pretty."],
        ],
        [
          ms(
            "Which of these new words have a trill?",
            ["barro (mud)", "Israel", "cara (face)", "pera (pear)", "risa (laughter)"],
            [0, 1, 4],
            "Barro has rr, Israel has r after s, and risa starts with r: all trilled. Cara and pera have a single r between vowels, which is a tap."
          ),
        ]
      ),
    ],
    [
      lc("perro", "Listen. Which word did you hear?", ["perro (dog)", "pero (but)"], 0, "You heard the trill: perro, \"dog\". Pero, \"but\", has a single quick tap."),
      lc("pero", "Listen. Which word did you hear?", ["pero (but)", "perro (dog)"], 0, "One quick tap: pero, \"but\". Perro would have a long trill."),
      lc("carro", "Listen. Which word did you hear?", ["carro (car)", "caro (expensive)"], 0, "The trill means carro, \"car\" in Latin America. Caro, \"expensive\", has a tap."),
      lc("cero", "Listen. Which word did you hear?", ["cero (zero)", "cerro (hill)"], 0, "A single tap: cero, \"zero\". Cerro, \"hill\", is trilled."),
      lc(
        "El perro es caro.",
        "Listen. What is expensive?",
        ["The dog", "The car", "The hill", "Nothing: it says \"but\""],
        0,
        "El perro es caro: \"The dog is expensive.\" Perro is trilled (dog) and caro is tapped (expensive). A car would be carro, a hill cerro, and \"but\" is pero."
      ),
      spell("perros", ["perros", "peros", "perrros"], "Perros (dogs): the trill between vowels is written rr, two r's, never one or three. Peros would be \"buts\"."),
      dict("pero", "Pero (but): the tap is written with one r."),
      spell("rojo", ["rojo", "rrojo"], "Rojo (red): at the start of a word the trill is written with one r, never rr."),
      spell("Tengo tres perros.", ["Tengo tres perros.", "Tengo tres peros.", "Tengo trres perros."], "Tengo tres perros -- \"I have three dogs.\" Tres has a tap after t, written r; perros has the trill, written rr."),
      sayIt("pero, perro", "but, dog", "Short flick for pero, then a long buzz for perro. Make the difference big.", "Pero (but) vs. perro (dog): tap vs. trill."),
      { type: "speak", prompt: "Say it in Spanish: \"but\"", text: "pero", tip: "One quick tap, no trill: a trill would say perro, \"dog\".", explanation: "Pero, \"but\": one r, one tap." },
      sayIt("Mi perro es rojo.", "My dog is red.", "The r at the start of rojo trills, just like the rr in perro.", "Mi perro es rojo -- \"My dog is red.\""),
      sayIt("rojo, rico, Roma", "red, delicious, Rome", "Start each word with a trill: tongue relaxed behind the upper teeth, then blow so it vibrates.", "Rojo, rico, Roma: a single r at the start of a word is always trilled."),
      {
        type: "speak",
        prompt: "Say this line from a famous tongue twister: \"Fast run the cars.\" (Rápido corren los carros.)",
        text: "Rápido corren los carros.",
        altAnswers: ["Los carros corren rápido.", "Los carros corren rápidamente."],
        tip: "Three trills: the r of rápido and the rr of corren and carros. Go slowly first.",
        explanation: "Rápido corren los carros -- \"The cars run fast.\" Part of a famous trill tongue twister; in plain speech you'd say Los carros corren rápido.",
      },
      sayIt("Tres tristes tigres.", "Three sad tigers.", "A tongue twister with taps: tr puts your tongue right where the trill starts too. Go slowly first.", "Tres tristes tigres -- \"three sad tigers\", the start of a famous tongue twister."),
      sayIt("Enrique es de Puerto Rico.", "Enrique is from Puerto Rico.", "After n the r is trilled (Enrique); Puerto has a tap; Rico is trilled.", "Enrique es de Puerto Rico -- \"Enrique is from Puerto Rico.\""),
      sayIt("Es caro, pero es muy bonito.", "It's expensive, but it's very pretty.", "Tap in caro, tap in pero -- no trills here at all.", "Es caro, pero es muy bonito -- \"It's expensive, but it's very pretty.\""),
      mc("Which word means \"expensive\"?", ["caro", "carro"], 0, "Caro (one r, a tap) = expensive; carro (rr, a trill) = car. Between vowels, one letter changes the word."),
      mc(
        "Why is the r in Enrique trilled?",
        ["It comes right after n", "Because it's a name", "Because it's before i", "It isn't trilled"],
        0,
        "A single r after n, l or s, or at the start of a word, is trilled. Being a name or coming before i has nothing to do with it."
      ),
      ms(
        "Read these new words. In which is every r a single tap?",
        ["pera (pear)", "rana (frog)", "mirar (to look)", "sonrisa (smile)", "barato (cheap)"],
        [0, 2, 4],
        "One r between vowels or at the end of a word is a tap: pe-ra, mi-rar, ba-ra-to. Rana starts with r and sonrisa has r after n, so both are trilled."
      ),
      tf(
        "Change pero so it means \"dog\".",
        "pero",
        "perro",
        "Between vowels, one r (a tap) means \"but\"; rr (a trill) means \"dog\". Spelling and sound go together."
      ),
      tf(
        "Change carro so it means \"expensive\".",
        "carro",
        "caro",
        "Drop one r: the trill of carro (car) becomes the tap of caro (expensive)."
      ),
      fixSpelling(
        "Mi pero es negro.",
        "Mi perro es negro.",
        "Pero (one r, a tap) means \"but\". A dog is perro, with rr and a trill."
      ),
      fixSpelling(
        "Es un caro rojo.",
        "Es un carro rojo.",
        "A car is carro, with rr. Caro, with one r, means \"expensive\".",
        ["Es un coche rojo."]
      ),
      fixSpelling(
        "Vivo en Puerto Rrico.",
        "Vivo en Puerto Rico.",
        "Rr is only written between vowels. At the start of a word a single r is already trilled: Rico, rojo, Roma."
      ),
      toEs("The dog is expensive.", "El perro es caro.", "Perro has the trill (rr), caro the tap (one r). Swap them and you'd say \"the but is a car\".", ["El perro es costoso."]),
      say(
        "Respond aloud: say that Roberto has three dogs (tiene = he has).",
        "Roberto tiene tres perros.",
        "Trill the R at the start of Roberto and the rr of perros; tap the second r of Roberto and the r of tres."
      ),
      {
        type: "speak",
        prompt: "Respond aloud: say that Roberto's dog is red and very fast.",
        text: "El perro de Roberto es rojo y muy rápido.",
        altAnswers: ["El perro de Roberto es rojo y rápido."],
        explanation: "Four trills: perro, Roberto, rojo, rápido. Tap the second r of Roberto.",
      },

    ]
  ),
  L(
    "sounds-j-g-h-n",
    "Sounds of Spanish: J, G, H and Ñ",
    "The throaty j (and the g of gente), the h you never pronounce, and ñ, the \"ny\" of mañana.",
    "9 min",
    [
      warmUp([
        lc("cerro", "Listen. Which word did you hear?", ["cerro (hill)", "cero (zero)"], 0, "Cerro: a trill, written rr. (Lessons 3-4: r and rr.)"),
        lc("Mi perro es rojo.", "Listen. What is red?", ["My dog", "My car", "Nothing: it says \"but\""], 0, "Perro (trill) is \"dog\". (Lessons 3-4.)"),
        spell("vaso", ["vaso", "baso"], "Vaso (glass) is written with v; b and v sound the same. (Lesson 2.)"),
        lc("Es una profesora simpática.", "Listen. Who is it about?", ["A woman teacher", "A man teacher", "Several teachers"], 0, "Una profesora simpática: feminine, one person. (Unit 1: articles and adjectives.)"),
      ]),
      sec(
        "J, and g before e or i",
        [
          "Spanish j is made at the back of the mouth: a breathy sound, like a strong English h in \"hot\". Many speakers make it rougher, like the ch in Scottish \"loch\". Both are correct: you'll hear the soft version in much of Latin America and the rougher one in Spain and parts of Mexico. Use either.",
          "G before e or i makes the same sound: gente, girar, página. So jirafa and girasol start with the same sound but different letters -- learn the spelling with the word.",
          "A few place names keep an old x for this sound: México, Oaxaca, Texas. (Before a, o, u, g is the \"go\" sound from the earlier lesson.)",
        ],
        [
          ["jamón", "ham"],
          ["Juan", "Juan"],
          ["la gente", "people"],
          ["la página", "the page"],
          ["México", "Mexico -- x sounds like j"],
        ],
        [
          ms(
            "These words are new. Which ones have the j sound?",
            ["girasol (sunflower)", "gorila (gorilla)", "jugo (juice)", "Texas", "guapo (good-looking)"],
            [0, 2, 3],
            "Girasol (g before i), jugo (j) and Texas (the old x) all have the j sound. Gorila and guapo have g before o or u, which is the hard \"go\" sound."
          ),
        ]
      ),
      sec(
        "H is always silent",
        [
          "Spanish h is never pronounced: hola is \"o-la\", hotel is \"o-tel\", ahora is \"a-o-ra\". It's only there for spelling.",
          "So some words sound exactly alike: hola (hello) and ola (wave), hecho (done, fact) and echo (I throw). Context tells them apart.",
          "The pair ch is different: it's one sound, like English ch in \"church\": chico, mucho, noche.",
        ],
        [
          ["hola", "hello -- \"o-la\""],
          ["el hotel", "the hotel"],
          ["ahora", "now -- \"a-o-ra\""],
          ["Hoy hablo con Hugo.", "Today I'm talking with Hugo."],
          ["mucho", "a lot -- ch as in \"church\""],
        ],
        [
          mc(
            "Humo (smoke) is a new word. How do you say it?",
            ["U-mo, no h sound", "HU-mo, like English h", "JU-mo, with a j sound", "CHU-mo, like ch in \"church\""],
            0,
            "H is always silent, so humo is U-mo, just as hotel is o-TEL. Pronouncing it like English h or like Spanish j are both mistakes, and ch is a different letter pair: a single h is always silent."
          ),
        ]
      ),
      sec(
        "Ñ: \"ny\"",
        [
          "Ñ is close to the ny in \"canyon\", but English says n and then y, and Spanish ñ is one sound: press the middle of your tongue to the roof of your mouth. Hear it in cañón (canyon). It's a separate letter, after n in the dictionary.",
          "N and ñ make different words: una (one, a) vs. uña (fingernail), mono (monkey) vs. moño (hair bun). Always write the tilde.",
        ],
        [
          ["el cañón", "the canyon -- one ñ sound, not n + y"],
          ["mañana", "tomorrow, morning"],
          ["España", "Spain"],
          ["el niño", "the boy, the child"],
          ["el año", "the year"],
          ["Tengo veinte años.", "I'm twenty years old. (Spanish says \"I have twenty years\": tener + años for age.)"],
        ],
        [
          mc(
            "Piña (pineapple) is a new word. What does its ñ sound like?",
            ["One sound, close to the ny in \"canyon\"", "The n in \"no\"", "The ng in \"sing\"", "Two separate sounds, n then y"],
            0,
            "Ñ is a single sound, close to the ny in \"canyon\" (which English says as n + y). A plain n would make a different word, and ng (\"sing\") is made further back."
          ),
        ]
      ),
    ],
    [
      lc(
        "La ola es muy grande.",
        "Listen. What is very big?",
        ["The wave", "The greeting", "The time", "The pot"],
        0,
        "Ola (wave) and hola (hello) sound the same because h is silent; la ola es muy grande only makes sense as \"the wave is very big\". Hora (time) has an r, and olla (pot) has ll."
      ),
      lc(
        "La gente es simpática.",
        "Listen. Who is nice?",
        ["The people", "The cat", "The girl", "The boy"],
        0,
        "Gente has the j sound (g before e): \"people\". Gato (cat) has a hard g, chica (girl) starts with ch and chico (boy) too."
      ),
      lc("uña", "Listen. Which word did you hear?", ["uña (fingernail)", "una (one, a)"], 0, "You heard the \"ny\" sound: uña, \"fingernail\". Una has a plain n."),
      lc("mono", "Listen. Which word did you hear?", ["mono (monkey)", "moño (hair bun)"], 0, "A plain n: mono, \"monkey\". Moño would have the \"ny\" of ñ."),
      lc(
        "Hoy trabajo en un hotel.",
        "Listen. Where does the person work today?",
        ["In a hotel", "In a hospital", "At home", "In a school"],
        0,
        "Hoy trabajo en un hotel -- \"Today I work in a hotel.\" The h of hoy and hotel is silent, and the j of trabajo is the breathy back sound."
      ),
      dict("hola", "Hola (hello): the h is silent but always written."),
      spell("mañana", ["mañana", "manana", "mañanna"], "Ñ is its own letter, not an accent: mañana, with one ñ."),
      dict("jamón", "Jamón (ham): j, and a written accent on the o."),
      dict("Hoy hace frío.", "Hoy hace frío -- \"It's cold today.\" Two silent h's: hoy and hace."),
      spell("España", ["España", "Espana", "Hespaña"], "España (Spain): ñ is its own letter, and there's no h. A capital E for the country."),
      sayIt("Juan es joven.", "Juan is young.", "Breathe out from the back of the throat for each j, like a strong h.", "Juan es joven -- \"Juan is young.\""),
      sayIt("Hola, ¿hablas español?", "Hi, do you speak Spanish?", "No h sound at all: \"o-la\", \"a-blas\".", "Hola, ¿hablas español? -- \"Hi, do you speak Spanish?\""),
      sayIt("Hasta mañana.", "See you tomorrow.", "Silent h in hasta; ñ is one smooth \"ny\" sound.", "Hasta mañana -- \"See you tomorrow.\""),
      sayIt("La gente de México", "the people of Mexico", "G in gente and x in México both make the j sound.", "La gente de México -- \"the people of Mexico.\""),
      sayIt("El niño tiene cinco años.", "The boy is five years old.", "Two ñ's: press the middle of your tongue up for \"ny\".", "El niño tiene cinco años -- \"The boy is five years old\" (tiene ... años: Spanish says \"has five years\")."),
      mc(
        "Which pair sounds exactly the same?",
        ["hola / ola", "una / uña", "mono / moño", "gato / gente"],
        0,
        "H is silent, so hola and ola sound identical. N and ñ are different sounds, and the g of gato is hard while the g of gente sounds like j."
      ),
      mc(
        "Which word starts with the same sound as jamón?",
        ["gente", "gato", "hola", "guerra"],
        0,
        "G before e or i sounds like j. Gato and guerra have a hard g; hola starts with a silent h."
      ),
      ms(
        "These words are new. Which ones start with a vowel sound?",
        ["hermano (brother)", "hijo (son)", "chico (boy)", "jefe (boss)", "hora (hour)"],
        [0, 1, 4],
        "H is silent, so hermano, hijo and hora start with a vowel sound: er-MA-no, I-jo, O-ra. Ch is its own sound (\"church\"), and j is the breathy back sound."
      ),
      fixSpelling("Hasta manana.", "Hasta mañana.", "Ñ is its own letter, not an accent: mañana, with the \"ny\" sound."),
      fixSpelling("Soy de Espana.", "Soy de España.", "España has ñ, one \"ny\" sound. Without the tilde it's a misspelling."),
      fixSpelling("Mi hijo tiene diez anos.", "Mi hijo tiene diez años.", "Años (years) needs the tilde. Without it you write a very different, rude word."),
      toEs("the people of Mexico", "la gente de México", "Gente has g before e and México has the old x: both are the j sound.", ["la gente mexicana", "las personas de México", "los mexicanos"]),

      say(
        "Respond aloud: say that Juan is from Mexico and he's twenty years old.",
        "Juan es de México y tiene veinte años.",
        "J in Juan and x in México are the same breathy back sound; años has the ny of ñ."
      ),
    ]
  ),
  L(
    "sounds-ll-y-c-z-s",
    "Sounds of Spanish: LL and Y, C, Z and S",
    "Why calle and playa share one sound, when y is just a vowel, and why cinco, zapato and gracias all have an s sound.",
    "10 min",
    [
      warmUp([
        lc("uña", "Listen. Which word did you hear?", ["uña (fingernail)", "una (one, a)"], 0, "Uña: the \"ny\" of ñ. (Lesson 5.)"),
        lc("La ola es grande.", "Listen. What is big?", ["The wave", "The greeting"], 0, "Ola and hola sound the same (h is silent); only \"the wave\" fits. (Lesson 5.)"),
        lc("carro", "Listen. Which word did you hear?", ["carro (car)", "caro (expensive)"], 0, "Carro: a trill. (Lessons 3-4.)"),
        lc("Son estudiantes.", "Listen. How many students?", ["More than one", "Just one"], 0, "Son + estudiantes: more than one. (Unit 1: ser and plurals.)"),
      ]),
      sec(
        "LL and y: one sound for most speakers",
        [
          "For almost every Spanish speaker today, ll and y sound the same: like the y in \"yes\", often a little stronger, sometimes close to the j in \"jam\" at the start of a word. This merger is called yeísmo, and it's the norm in Spain and Latin America.",
          "In Argentina and Uruguay you'll hear ll and y as \"sh\" or \"zh\": yo sounds like \"sho\", calle like \"ca-she\". Recognize it; you don't need to use it.",
        ],
        [
          ["la calle", "the street"],
          ["yo", "I"],
          ["Me llamo Yolanda y vivo en Sevilla.", "My name is Yolanda and I live in Seville."],
          ["la playa", "the beach"],
        ],
        [
          mc(
            "For most speakers, which new word starts with the same sound as llueve (it rains)?",
            ["yate (yacht)", "lago (lake)", "jamón (ham)", "nada (nothing)"],
            0,
            "With yeísmo, ll and y are one sound, so llueve and yate start the same way. Lago has a plain l (one l is not ll), and the Spanish j of jamón is a throaty h, not a y."
          ),
        ]
      ),
      sec(
        "The y that is just a vowel",
        [
          "Y on its own (\"and\") and y at the end of a word (hoy, muy, rey) is just the vowel i. Before a vowel it's the consonant: yo, playa.",
        ],
        [
          ["hoy y mañana", "today and tomorrow -- y is \"ee\""],
          ["muy bien", "very well -- y is \"ee\""],
          ["yo", "I -- y before a vowel, like \"yes\""],
        ],
        [
          mc(
            "How does the y sound in the new word ley (law)?",
            ["Like the vowel i (\"lei\")", "Like the y in \"yes\"", "Like \"sh\"", "It is silent"],
            0,
            "A y at the end of a word is just the vowel i, as in hoy and muy, so ley sounds like \"lei\". The consonant sound (as in \"yes\") only comes before a vowel, and Spanish letters are not silent."
          ),
        ]
      ),
      sec(
        "C, z and s: seseo",
        [
          "C before a, o, u is a k sound: casa, cosa, Cuba.",
          "C before e or i, and z everywhere, sound like s: cinco is \"sin-co\", zapato is \"sa-pa-to\". This is called seseo. It's standard in Latin America and it's what most Spanish speakers do.",
          "In most of Spain, ce, ci and z are said with a \"th\" as in \"think\": cinco sounds like \"thin-co\". You'll hear it in films from Spain, and in the Spain voice if you choose it in Settings. This course teaches the s sound, which is understood everywhere.",
        ],
        [
          ["cinco", "five"],
          ["el zapato", "the shoe"],
          ["Cuba", "Cuba -- c before u is k"],
        ],
        [
          mc(
            "A speaker from Mexico says the new word cielo (sky). What does it sound like?",
            ["\"sie-lo\"", "\"kie-lo\"", "\"chie-lo\"", "\"ie-lo\""],
            0,
            "Latin America uses seseo: c before e or i sounds like s, \"sie-lo\". C before e or i is never k or ch, and it's never silent."
          ),
        ]
      ),
      sec(
        "S: a clear hiss, and some words sound alike",
        [
          "Spanish s is normally the hissing s of \"sun\", even between vowels. English often buzzes it (\"rose\", \"president\"); Spanish doesn't: casa, rosa, presidente.",
          "With seseo, some pairs sound identical: casa (house) and caza (hunt), ves (you see) and vez (time, occasion). Context tells you which word it is, and you learn the spelling with the word.",
        ],
        [
          ["la casa", "the house -- a hissing s"],
          ["la rosa", "the rose -- no buzz"],
          ["una vez", "once"],
          ["¿Lo ves?", "Do you see it?"],
        ],
        [
          mc(
            "Why do the new words cocer (to cook) and coser (to sew) sound the same?",
            ["In Latin America c before e sounds like s (seseo)", "Because c is silent", "Because s sounds like z in Spanish", "They never sound the same"],
            0,
            "With seseo, ce is pronounced \"se\", so cocer sounds like coser, just like casa and caza. Context and spelling tell them apart."
          ),
        ]
      ),
    ],
    [
      lc(
        "Vivo en una casa grande.",
        "Listen. Where does the person live?",
        ["In a big house (casa)", "In a big hunt (caza)"],
        0,
        "Only casa (house) makes sense. With seseo, casa and caza sound exactly the same, so the context decides."
      ),
      lc(
        "La calle está llena.",
        "Listen. What is full?",
        ["The street", "The beach", "The key", "The rain"],
        0,
        "La calle está llena -- \"The street is full.\" Playa (beach), llave (key) and lluvia (rain) share the ll/y sound, but only calle fits."
      ),
      lc(
        "Tengo cinco hermanos.",
        "Listen. How many siblings does the person have?",
        ["5", "15", "50", "500"],
        0,
        "Cinco is 5. Fifteen would be quince, fifty cincuenta and five hundred quinientos. Cinco sounds like \"sin-co\": c before i is an s sound."
      ),
      lc(
        "Una vez al año.",
        "Listen. How often?",
        ["Once a year", "You see a year", "One day a year", "Always"],
        0,
        "Una vez al año -- \"once a year\". Vez (time, occasion) sounds like ves (you see) in Latin America, but una vez is a fixed phrase. Día would be \"day\" and siempre \"always\"."
      ),
      dict("calle", "Calle (street): spelled with ll, though it sounds like y for most speakers."),
      spell("cinco", ["cinco", "sinco", "zinco"], "Cinco (five) is written with c: c before i is an s sound. Same sound, other letter."),
      spell("zapato", ["zapato", "sapato", "capato"], "Zapato (shoe) is written with z, though it sounds like s in Latin America. Ca would be a k sound."),
      dict("Me llamo Yolanda.", "Me llamo Yolanda -- \"My name is Yolanda.\" Llamo with ll, Yolanda with Y: same sound, different letters."),
      { ...sayIt("Me llamo Guillermo.", "My name is Guillermo.", "Ll in llamo and Guillermo is the y of \"yes\"; the u of Gui is silent.", "Me llamo Guillermo -- \"My name is Guillermo.\""), altAnswers: ["Yo me llamo Guillermo."] },
      sayIt("Muchas gracias.", "Thank you very much.", "\"Gra-sias\": c before i is an s sound, and both s's hiss.", "Muchas gracias -- \"Thank you very much.\""),
      sayIt("Cinco zapatos azules.", "Five blue shoes.", "Every c before i and every z is an s sound: \"sin-co sa-pa-tos a-su-les\".", "Cinco zapatos azules -- \"five blue shoes.\""),
      sayIt("Una casa en la playa.", "A house on the beach.", "Keep the s of casa a sharp hiss, never a buzz like English \"rose\".", "Una casa en la playa -- \"a house on the beach.\""),
      sayIt("Hoy y mañana, en la playa.", "Today and tomorrow, at the beach.", "Hoy and the word y are the vowel \"ee\"; y in playa is the y of \"yes\".", "Hoy y mañana, en la playa -- \"Today and tomorrow, at the beach.\""),
      mc(
        "With seseo (Latin America), which pair sounds exactly the same?",
        ["ves / vez", "casa / cosa", "cena / Cuba", "rosa / roja"],
        0,
        "With seseo z sounds like s, so ves (you see) and vez (time) are identical; context tells them apart. The other pairs differ in a vowel or consonant."
      ),
      mc(
        "In hoy y mañana, how is the y of hoy pronounced?",
        ["Like the vowel i", "Like Spanish j", "Like sh", "It's silent"],
        0,
        "Y at the end of a word, and y meaning \"and\", is just the vowel i."
      ),
      ms(
        "With seseo (Latin America), which of these new words contain an s sound?",
        ["cereza (cherry)", "corto (short)", "zorro (fox)", "cuna (cradle)", "cine (cinema)"],
        [0, 2, 4],
        "Ce, ci and z all sound like s with seseo: cereza (twice), zorro, cine. Co and cu are k sounds."
      ),
      fixSpelling("Me yamo Ana.", "Me llamo Ana.", "Llamar is spelled with ll. Ll and y sound alike for most speakers, so you learn the spelling with the word."),
      fixSpelling("La sena es a las nueve.", "La cena es a las nueve.", "Dinner is cena, with c. With seseo it sounds like \"se-na\", but the spelling keeps the c."),
      toEs("I live on a quiet (tranquila) street.", "Vivo en una calle tranquila.", "Calle is written with ll; tranquila has qu, a k sound. Feminine calle → tranquila. (vivo = I live: a set phrase for now.)", ["Vivo en una calle silenciosa.", "Yo vivo en una calle tranquila."]),
      say(
        "Respond aloud: say thank you very much, and that the city is very pretty.",
        "Muchas gracias. La ciudad es muy bonita.",
        "Gracias and ciudad have s sounds (c before i). Keep the s of muchas a sharp hiss."
      ),
      {
        type: "speak",
        prompt: "Respond aloud: say that the city is pretty and the streets are very nice.",
        text: "La ciudad es bonita y las calles son muy lindas.",
        altAnswers: ["La ciudad es bonita y las calles son muy bonitas."],
        explanation: "Ciudad has an s sound (seseo); calles has the y of \"yes\".",
      },
    ]
  ),
  L(
    "sounds-qu-gu-gue",
    "Sounds of Spanish: Spelling the Sounds (Z to C, QU, GU and GÜ)",
    "Lápices, queso, guitarra, pingüino: why z turns into c, when the u is silent, when it's heard, and how Spanish spells the k and hard g sounds.",
    "10 min",
    [
      warmUp([
        lc("Vivo en una casa grande.", "Listen. Where does the person live?", ["In a big house (casa)", "In a big hunt (caza)"], 0, "Casa and caza sound the same with seseo; only \"house\" fits. (Lesson 6.)"),
        lc("yo", "Listen. How does the y sound?", ["Like the y in \"yes\"", "Like the vowel i, \"ee\""], 0, "Before a vowel, y is the y of \"yes\". (Lesson 6.)"),
        spell("hola", ["hola", "jola"], "H is silent but always written; j would be the breathy back sound. (Lesson 5.)"),
        lc("Las chicas son simpáticas.", "Listen. Who is nice?", ["The girls", "The girl", "The boys"], 0, "Las chicas son: plural and feminine. (Unit 1.)"),
      ]),
      sec(
        "Why z turns into c",
        [
          "Spelling follows from the sound: ce and ci already make the s sound, so z is normally written only before a, o and u. That's why lápiz becomes lápices and vez becomes veces.",
        ],
        [
          ["gracias", "thank you -- \"gra-sias\""],
          ["la cena", "dinner -- \"se-na\""],
          ["el lápiz, los lápices", "the pencil, the pencils -- z before e becomes c"],
        ],
        [
          mc(
            "Which of these new words has an s sound, though it's not written with s?",
            ["zorro (fox)", "cama (bed)", "coche (car)", "cuna (cradle)"],
            0,
            "Z always sounds like s, so zorro is \"so-rro\". C before a, o or u is a k: cama, coche, cuna."
          ),
          mc(
            "Un pez (a fish), dos... Which plural is spelled right?",
            ["peces", "pezes", "pesez"],
            0,
            "Plural -es puts an e after the z, and z isn't written before e: ce already makes the sound. Same sound, so pez becomes peces, like lápiz, lápices."
          ),
        ]
      ),
      sec(
        "Why z turns into c",
        [
          "Spelling follows from the sound: ce and ci already make the s sound, so z is normally written only before a, o and u. That's why lápiz becomes lápices and vez becomes veces.",
        ],
        [
          ["gracias", "thank you -- \"gra-sias\""],
          ["la cena", "dinner -- \"se-na\""],
          ["el lápiz, los lápices", "the pencil, the pencils -- z before e becomes c"],
        ],
        [
          mc(
            "Which of these new words has an s sound, though it's not written with s?",
            ["zorro (fox)", "cama (bed)", "coche (car)", "cuna (cradle)"],
            0,
            "Z always sounds like s, so zorro is \"so-rro\". C before a, o or u is a k: cama, coche, cuna."
          ),
          mc(
            "Un pez (a fish), dos... Which plural is spelled right?",
            ["peces", "pezes", "pesez"],
            0,
            "Plural -es puts an e after the z, and z isn't written before e: ce already makes the sound. Same sound, so pez becomes peces, like lápiz, lápices."
          ),
        ]
      ),
      sec(
        "The k sound: ca, que, qui, co, cu",
        [
          "Before e and i, c changes sound (cena, cine), so Spanish needs another way to write \"ke\" and \"ki\": que and qui. The u is silent -- it's only a spelling signal.",
          "So queso is \"ke-so\", aquí is \"a-ki\", quiero is \"kie-ro\". The letter k appears only in a few borrowed words: kilo, kiwi, karate.",
        ],
        [
          ["la casa", "ca -- the house"],
          ["el queso", "que -- cheese, \"ke-so\""],
          ["aquí", "qui -- here, \"a-ki\""],
          ["la cosa", "co -- the thing"],
          ["¿Quién es?", "Who is it?"],
        ],
        [
          mc(
            "How do you say the number quince (fifteen)?",
            ["\"KIN-se\"", "\"KWIN-se\"", "\"ku-IN-se\"", "\"SIN-se\""],
            0,
            "Qui is \"ki\", with a silent u, like aquí. It's never \"kw\" as in English \"quick\", and qu is never an s sound (only the c of ce makes that)."
          ),
        ]
      ),
      sec(
        "The hard g: ga, gue, gui, go, gu",
        [
          "The same trick works for the hard g of \"go\". Before e and i, g sounds like j (gente, girar), so the hard sound is written gue and gui, again with a silent u: guerra, guitarra, Miguel.",
          "Compare: ge sounds like \"he\" (gente), but gue sounds like \"ge\" in \"get\" (guerra).",
        ],
        [
          ["el gato", "ga -- the cat"],
          ["la guerra", "gue -- war, u silent"],
          ["la guitarra", "gui -- guitar, u silent"],
          ["Miguel", "gue -- Miguel"],
          ["la gente", "ge -- people, the j sound"],
        ],
        [
          mc(
            "Guiso (stew) is a new word. Why is there a u in it?",
            ["So the g stays hard before i", "Because the u is pronounced \"w\"", "It's an old spelling that means nothing", "So the g sounds like j"],
            0,
            "Without the u, gi would sound like j (as in girar). The u keeps the g hard and is itself silent -- not \"w\" -- and it's there precisely so the g does not sound like j."
          ),
        ]
      ),
      sec(
        "Güe and güi: when you do hear the u",
        [
          "Sometimes the u really is pronounced after g, as a \"w\" sound: \"gwe\", \"gwi\". Spanish marks this with two dots, the diéresis: pingüino (\"pin-gwi-no\"), vergüenza, bilingüe.",
          "No dots, no \"w\": guerra is \"ge-rra\". With dots: cigüeña is \"si-gwe-ña\". Before a and o no dots are needed, because the u is always heard: agua, antiguo.",
          "This pattern explains spelling changes you'll see later: buscar becomes busqué and llegar becomes llegué to keep the same sound.",
        ],
        [
          ["el pingüino", "penguin -- \"pin-gwi-no\""],
          ["la vergüenza", "embarrassment, shame"],
          ["bilingüe", "bilingual"],
          ["el agua", "water -- no dots needed before a"],
        ],
        [
          mc(
            "Which word is pronounced with a \"gw\" sound?",
            ["antigüedad (antiquity)", "guerra", "Miguel", "guitarra"],
            0,
            "Only the two dots on ü make the u sound: an-ti-gwe-DAD. In guerra, Miguel and guitarra the u is silent."
          ),
        ]
      ),
    ],
    [
      lc("guitarra", "Listen. How is the word spelled?", ["guitarra", "gitarra", "güitarra"], 0, "Guitarra: the hard g before i needs gu, and the u is silent. Gitarra would sound like \"hi-tarra\", and güitarra would say \"gwi-tarra\"."),
      lc("pingüino", "Listen. How is the word spelled?", ["pingüino", "pinguino", "pingino"], 0, "You hear \"gwi\", so the u needs dots: pingüino. Without them, pinguino would be \"pin-gi-no\", and pingino would sound like \"pin-hi-no\"."),
      lc("queso", "Listen. How is the word spelled?", ["queso", "keso", "cueso"], 0, "\"Ke\" is written que: queso. K is only used in a few borrowed words, and cueso would be \"kwe-so\"."),
      lc("Miguel", "Listen. How is the name spelled?", ["Miguel", "Migel", "Migüel"], 0, "Miguel: hard g before e needs gu, u silent. Migel would sound like \"mi-hel\", and Migüel would add a \"w\"."),
      spell("la guerra", ["la guerra", "la gerra", "la güerra"], "Guerra (war): gu before e keeps the g hard, and the u is silent. Ge would sound like \"he\", and güe would add a \"w\"."),
      spell("bilingüe", ["bilingüe", "bilingue", "bilinge"], "Bilingüe (bilingual): you hear the u (\"bi-lin-gwe\"), so it needs the two dots."),
      dict("¿Quién quiere queso?", "¿Quién quiere queso? -- \"Who wants cheese?\" Three qu's, three silent u's. Quién has an accent because it's a question word."),
      sayIt("¿Quieres queso?", "Do you want cheese?", "Don't say \"kw\": quieres is \"kie-res\", queso is \"ke-so\".", "¿Quieres queso? -- \"Do you want cheese?\""),
      sayIt("Miguel toca la guitarra.", "Miguel plays the guitar.", "The u after g is silent in both Miguel and guitarra.", "Miguel toca la guitarra -- \"Miguel plays the guitar.\""),
      sayIt("El pingüino es bilingüe.", "The penguin is bilingual.", "Here the dots mean you say the u: \"pin-gwi-no\", \"bi-lin-gwe\".", "El pingüino es bilingüe -- \"The penguin is bilingual.\""),
      { ...sayIt("Aquí hay quince cosas.", "There are fifteen things here.", "Aquí and quince both have the silent u of qu.", "Aquí hay quince cosas -- \"There are fifteen things here.\""), altAnswers: ["Hay quince cosas aquí."] },
      mc(
        "Química (chemistry) starts with a k sound before i. How is it spelled?",
        ["química", "kímica", "címica", "cuímica"],
        0,
        "Ki is written qui: química. K is only for a few borrowed words, ci would sound like \"si\", and cui would say \"kwi\"."
      ),
      spell("los lápices", ["los lápices", "los lápizes", "los lápises"], "Lápiz adds -es, and because ce already makes the s sound, the z is written c: lápices. Same sound, other letter."),
      fixSpelling("Tengo dos lápizes.", "Tengo dos lápices.", "Same sound, but z isn't written before e: lápiz → lápices."),
      tf(
        "Add -ito (\"little\") to the word. Keep the same sound.",
        "poco",
        "poquito",
        "Poco + -ito: before i, c would sound like s, so the k sound is written qu: poquito."
      ),
      mc(
        "Amigo + -ito (\"little\"): which spelling keeps the hard g of amigo?",
        ["amiguito", "amigito", "amigüito"],
        0,
        "Before i, g would sound like j, so the hard g is written gu: amiguito, with a silent u. Amigito would say \"a-mi-hi-to\", and ü would add a \"w\"."
      ),
      fixSpelling("El keso es rico.", "El queso es rico.", "Ke is written que in Spanish: queso. The u is silent."),
      fixSpelling("El pinguino es negro y blanco.", "El pingüino es negro y blanco.", "You hear the u (\"pin-gwi-no\"), so it needs the dots: pingüino. Without them it would say \"pin-gi-no\"."),
      fixSpelling("Mi amigo toca la gitarra.", "Mi amigo toca la guitarra.", "Hard g before i is written gui. Gi would sound like \"hi\"."),
      spell("¿Quién es Miguel?", ["¿Quién es Miguel?", "¿Quién es Migel?", "¿Kién es Miguel?"], "Quién: k sound before ie, written qu. Miguel: hard g before e, written gu. Both u's are silent."),
      {
        ...say(
          "Respond aloud: say that there are fifteen guitars here.",
          "Aquí hay quince guitarras.",
          "Three silent u's: aquí, quince, guitarras. Don't add a \"w\" after the k or g."
        ),
        altAnswers: ["Hay quince guitarras aquí."],
      },

    ]
  ),
  L(
    "sounds-linking-intonation",
    "Sounds of Spanish: Linking Words and the Melody of Questions",
    "Why Spanish sounds like one long word (los otros = \"lo-so-tros\"), and how your voice turns a statement into a question.",
    "10 min",
    [
      warmUp([
        spell("queso", ["queso", "keso", "cueso"], "\"Ke\" is written que: queso. (Lesson 7.)"),
        lc("calle", "Listen. Which word did you hear?", ["calle (street)", "cae (falls)", "Cali (the city)"], 0, "Calle: ll is the y of \"yes\". (Lesson 6.)"),
        lc("mono", "Listen. Which word did you hear?", ["mono (monkey)", "moño (hair bun)"], 0, "Mono: a plain n. (Lesson 5.)"),
        lc("Mis amigas son de Perú.", "Listen. Who is from Peru?", ["My female friends", "My male friend", "My female friend"], 0, "Mis amigas son: plural and feminine. (Unit 1.)"),
      ]),
      sec(
        "Consonant + vowel: the words join",
        [
          "Spanish doesn't pause between words inside a phrase. A consonant at the end of one word joins the vowel that starts the next: los otros sounds like \"lo-so-tros\", un amigo like \"u-na-mi-go\", es importante like \"e-sim-por-tan-te\".",
          "That's why fast Spanish seems to have no gaps. When you listen, expect the words to run together; when you speak, don't stop between them. The spellings in quotes only show how the syllables group: tap each phrase to hear the real sound.",
        ],
        [
          ["los otros", "the others -- \"lo-so-tros\""],
          ["un amigo", "a friend -- \"u-na-mi-go\""],
          ["Es importante.", "It's important. -- \"e-sim-por-tan-te\""],
          ["mis hijos", "my children -- \"mi-si-jos\" (h is silent)"],
        ],
        [
          lc(
            "dos hermanos",
            "Listen to dos hermanos (two brothers). What happens between the two words?",
            [
              "The s of dos runs straight into the e of hermanos, with no pause",
              "There is a short pause after dos",
              "The h of hermanos is said like English h",
              "The s of dos is dropped",
            ],
            0,
            "The h of hermanos is silent, so the word starts with the vowel e. The s of dos is fully said and joins that e with no pause, just like mis hijos."
          ),
        ]
      ),
      sec(
        "Vowel + vowel: sinalefa",
        [
          "When one word ends in a vowel and the next begins with one, the two vowels glide into a single syllable. This is called sinalefa: mi amigo sounds like \"mia-mi-go\", ¿Cómo estás? like \"co-moes-tás\", todo el día like \"to-doel-dí-a\".",
          "Two identical vowels merge into one, slightly longer: va a hablar sounds like \"va-blar\" with a long a (remember, h is silent). Listen for that extra length: it's often the only trace of the little word a.",
        ],
        [
          ["mi amigo", "my friend -- \"mia-mi-go\""],
          ["¿Cómo estás?", "How are you? -- \"co-moes-tás\""],
          ["Va a hablar.", "He's going to speak (a set phrase for now) -- \"va-blar\", long a"],
          ["todo el día", "all day"],
          ["la otra", "the other one"],
        ],
        [
          mc(
            "In Voy a hablar, what happens to the little word a?",
            ["It merges with the a of hablar into one long a", "It's pronounced separately after a pause", "It disappears completely with no trace", "It becomes \"ha\""],
            0,
            "Hablar starts with a vowel sound (h is silent), so a + a merge into one slightly longer a. There's no pause, it doesn't vanish without a trace, and no h is pronounced."
          ),
        ]
      ),
      sec(
        "Intonation: statements and questions",
        [
          "A statement ends with the voice falling: Tienes hambre. (You're hungry.)",
          "A yes/no question usually ends with the voice rising: ¿Tienes hambre? (Are you hungry?). Often the melody is the only difference -- the words are identical. In writing, the ¿ at the start warns you a question is coming.",
          "A question with a question word (qué, dónde, cómo, cuándo...) usually falls at the end, like a statement: ¿Dónde vives? The question word already tells you it's a question. A slight rise makes it sound friendlier.",
          "In a list, the voice rises on each item and falls on the last: Quiero pan, leche y fruta.",
        ],
        [
          ["Tienes hambre.", "You're hungry. -- voice falls"],
          ["¿Tienes hambre?", "Are you hungry? -- voice rises"],
          ["¿Dónde vives?", "Where do you live? -- voice falls"],
          ["Quiero pan, leche y fruta.", "I want bread, milk and fruit."],
        ],
        [
          mc(
            "Tienes frío and ¿Tienes frío? use the same words. What tells them apart when spoken?",
            ["The voice rises at the end of the question", "The question is said louder", "The question changes the word order", "Nothing -- you can't tell"],
            0,
            "A yes/no question rises at the end; the statement falls. Volume doesn't mark a question, Spanish doesn't need to change the word order, and the melody is enough to tell them apart."
          ),
          tf(
            "Turn it into a question.",
            "Eres de aquí.",
            "¿Eres de aquí?",
            "The words stay the same. In writing, add ¿ at the start and ? at the end; in speech, let your voice rise at the end."
          ),
        ]
      ),
    ],
    [
      lc("¿Tienes hambre?", "Listen. What kind of sentence is it?", ["A yes/no question (voice rises)", "A statement (voice falls)", "A question with a question word (voice falls)"], 0, "The voice rises at the end and there's no question word: ¿Tienes hambre? -- \"Are you hungry?\" As a statement, Tienes hambre would fall."),
      lc("¿Dónde vives?", "Listen. What kind of sentence is it?", ["A question with a question word (voice falls)", "A yes/no question (voice rises)", "A statement (voice falls)"], 0, "Dónde is a question word, so the voice can fall at the end, like a statement. The word itself tells you it's a question."),
      dict("Va a hablar con Ana.", "You hear \"va-bla-rco-na-na\" in one breath, but it's five words: va a hablar con Ana. The long a is the little word a."),
      lc(
        "Los otros están aquí.",
        "Listen. Who is here?",
        ["The others", "The bears", "The hotels", "The eyes"],
        0,
        "Los otros runs together as \"lo-so-tros\": \"the others\". Osos (bears), hoteles (hotels) and ojos (eyes) would sound different after the s joins them."
      ),
      lc(
        "¿Dónde está mi amigo?",
        "Listen. What is the person asking about?",
        ["Where their friend is", "Where their friends are", "How their friend is", "When their friend arrives"],
        0,
        "¿Dónde está mi amigo? -- mi amigo links into \"mia-mi-go\", one friend. Friends would be mis amigos and están; \"how\" would be cómo and \"when\" cuándo."
      ),
      dict("¿Cómo estás?", "¿Cómo estás? -- spoken as \"co-moes-tás\", written as two words, with accents on cómo and estás."),
      dict("Es un amigo.", "Es un amigo -- \"He's a friend.\" You hear \"e-su-na-mi-go\", but it's three separate words: es, un, amigo."),
      dict("Vamos a comer.", "Vamos a comer -- \"Let's eat\" or \"We're going to eat.\" The a is short but it's there: vamos a + infinitive."),
      dict("¿Tienes hambre?", "¿Tienes hambre? -- \"Are you hungry?\" The rising voice tells you it's a question; write ¿ at the start and ? at the end."),
      sayIt("¿Cómo estás?", "How are you?", "Link cómo into estás with no break: \"co-moes-tás\".", "¿Cómo estás? -- a question-word question: the voice can fall at the end."),
      sayIt("Mi amigo es inglés.", "My friend is English.", "One smooth line: \"mia-mi-goe-sin-glés\".", "Mi amigo es inglés -- \"My friend is English.\" Voice falls: it's a statement."),
      sayIt("¿Tienes hambre?", "Are you hungry?", "Let your voice climb on the last word. Play your recording: does your voice go up on hambre? If it stays flat, try again.", "¿Tienes hambre? -- a yes/no question, so it rises."),
      sayIt("Es una amiga de Ana.", "She's a friend of Ana's.", "One smooth line: \"e-su-na-mi-ga-dea-na\". The s and n join the next vowel.", "Es una amiga de Ana -- \"She's a friend of Ana's.\""),
      sayIt("Quiero café, agua y fruta.", "I want coffee, water and fruit.", "Rise on café and agua, fall on fruta to show the list is over.", "Quiero café, agua y fruta -- \"I want coffee, water and fruit.\""),
      mc(
        "How does mis amigos sound in natural speech?",
        ["\"mi-sa-mi-gos\"", "\"mis -- a-mi-gos\" with a pause", "\"mi-ha-mi-gos\"", "\"mis-mi-gos\""],
        0,
        "The final s joins the next vowel: consonant + vowel always link, with no pause and nothing added or dropped."
      ),
      mc(
        "Which question usually ends with the voice falling?",
        ["¿Dónde vives?", "¿Tienes hambre?", "¿Hablas inglés?", "¿Eres de aquí?"],
        0,
        "Questions with a question word (dónde, qué...) fall, like statements; yes/no questions rise."
      ),
      ms(
        "Which of these questions usually end with the voice rising?",
        ["¿Tienes un perro?", "¿Cómo te llamas?", "¿Es caro?", "¿Qué quieres?"],
        [0, 2],
        "Yes/no questions rise: ¿Tienes un perro?, ¿Es caro? Questions with a question word (cómo, qué) usually fall."
      ),
      toEs("Is it important?", "¿Es importante?", "Same words as the statement, with ¿? and a rising voice. Said as one flow: e-sim-por-tan-te.", ["¿Eso es importante?"]),
      toEs(
        "Tienes frío?",
        "¿Tienes frío?",
        "Spanish marks a question at both ends: ¿ at the start, ? at the end. The opening ¿ tells the reader to start the rising melody.",
        [],
        "Correct the punctuation."
      ),
      toEs(
        "My friends are from Uruguay.",
        "Mis amigos son de Uruguay.",
        "Said as one flow: mis amigos links into \"mi-sa-mi-gos\", and de Uruguay glides into \"deu-ru-guay\".",
        ["Mis amigas son de Uruguay.", "Mis amigos son uruguayos.", "Mis amigas son uruguayas."]

      ),
      say(
        "Respond aloud: ask a friend if they're hungry, then answer that you're not.",
        "¿Tienes hambre? No, no tengo hambre.",
        "The question rises at the end; the answer, a statement, falls."
      ),
    ]
  ),
  L(
    "sounds-stress",
    "Sounds of Spanish: Which Syllable Is Stressed?",
    "Every Spanish word has one strong syllable, and moving it can change the word: papa or papá, hablo or habló.",
    "9 min",
    [
      warmUp([
        lc("dos hermanos", "Listen. What happens between the two words?", ["The s runs straight into the e, no pause", "There is a short pause", "You hear an h"], 0, "\"Do-ser-ma-nos\": the s joins the next vowel, and h is silent. (Lesson 8.)"),
        spell("guitarra", ["guitarra", "gitarra", "güitarra"], "Gui for a hard g before i, with a silent u. (Lesson 7.)"),
        lc("pero", "Listen. Which word did you hear?", ["pero (but)", "perro (dog)"], 0, "One tap: pero. (Lessons 3-4.)"),
        lc("Somos muy altos.", "Listen. Who is very tall?", ["We are", "They are", "You are"], 0, "Somos = we are. (Unit 1: ser.)"),
      ]),
      sec(
        "One strong syllable per word",
        [
          "Most words have one stressed syllable: a little louder, longer and higher. CA-sa, ha-BLAR, te-LÉ-fo-no. Little words like el, la, de, en, mi and que usually have none: they lean on the next word.",
          "Unlike English, the other syllables keep their full vowels (remember: no \"uh\"). So the stress is carried by loudness and length, not by swallowing the other vowels.",
        ],
        [
          ["casa", "CA-sa"],
          ["hablar", "ha-BLAR"],
          ["teléfono", "te-LÉ-fo-no"],
          ["ciudad", "ciu-DAD"],
          ["zapatos", "za-PA-tos"],
        ],
        [
          mc(
            "Which syllable is stressed in ventanas (windows)?",
            ["ven-TA-nas", "VEN-ta-nas", "ven-ta-NAS"],
            0,
            "Like zapatos, ventanas ends in s with no written accent, so the stress falls on the second-to-last syllable: ven-TA-nas."
          ),
        ]
      ),
      sec(
        "Reading the stress from the spelling",
        [
          "Spanish spelling tells you where the stress goes, so you can say any word you read:",
          "1. If there's a written accent (á, é, í, ó, ú), stress that syllable: café, teléfono, árbol, están.",
          "2. No accent, and the word ends in a vowel, n or s? Stress the second-to-last syllable: casa, hablan, zapatos.",
        ],
        [
          ["el café", "ca-FÉ -- accent: stress it"],
          ["el árbol", "ÁR-bol -- the accent decides"],
          ["hablan", "HA-blan -- ends in n: second-to-last"],
        ],
        [
          mc(
            "Where does the stress go in examen (no written accent)?",
            ["e-XA-men", "E-xa-men", "e-xa-MEN"],
            0,
            "Examen ends in n with no accent, so the stress falls on the second-to-last syllable: e-XA-men. Stressing the last syllable would need a written accent, and the first isn't stressed."
          ),
        ]
      ),
      sec(
        "Any other final consonant: stress the last syllable",
        [
          "3. No accent, and it ends in any other consonant? Stress the last syllable: hablar, papel, ciudad.",
          "When to write an accent is the other side of the same rules, and it comes in the Elementary level (lesson: \"Spelling: ¿ ¡, Capitals and Where the Stress Falls\"). For now, just follow the accent when you see one.",
        ],
        [
          ["el papel", "pa-PEL -- ends in l: last"],
          ["la ciudad", "ciu-DAD -- ends in d: last"],
          ["el árbol", "ÁR-bol -- the accent overrides rule 3"],
        ],
        [
          mc(
            "Where is the stress in hotel (no written accent)?",
            ["ho-TEL", "HO-tel"],
            0,
            "Hotel ends in l, a consonant other than n or s, and has no accent, so rule 3 puts the stress on the last syllable: ho-TEL. HO-tel would need a written accent."
          ),
          mc(
            "Where is the stress in reloj (no written accent)?",
            ["re-LOJ", "RE-loj"],
            0,
            "It ends in a consonant other than n or s, so the stress falls on the last syllable (rule 3). RE-loj would need a written accent."
          ),
        ]
      ),
      sec(
        "Stress can change the word",
        [
          "Because stress is part of the word, moving it can change the meaning: papa (potato, or the Pope) vs. papá (dad); hablo (I speak) vs. habló (he or she spoke); esta (this) vs. está (is).",
          "Stress also tells you the tense: termino (I finish), terminó (he finished), término (end, term).",
        ],
        [
          ["papa / papá", "potato / dad"],
          ["Hablo con Ana.", "I speak with Ana."],
          ["Habló con Ana.", "He/She spoke with Ana."],
          ["Esta casa está lejos.", "This house is far away."],
        ],
        [
          mc(
            "You hear tra-ba-JÓ en Madrid. What does it mean?",
            ["He or she worked in Madrid", "I work in Madrid", "Work in Madrid!"],
            0,
            "Stress on the last syllable is the past, like habló: trabajó, \"he or she worked\". Tra-BA-jo would be \"I work\", and the command ¡Trabaja! is stressed on BA."
          ),
        ]
      ),
    ],
    [
      lc("teléfono", "Listen. Which syllable is stressed?", ["te-LÉ-fo-no", "TE-le-fo-no", "te-le-FO-no"], 0, "Te-LÉ-fo-no: the written accent on é marks the stress, three syllables from the end."),
      lc("ciudad", "Listen. Which syllable is stressed?", ["ciu-DAD", "CIU-dad"], 0, "Ciudad ends in d (not a vowel, n or s), so the stress falls on the last syllable: ciu-DAD."),
      lc("papá", "Listen. Which word did you hear?", ["papá (dad)", "papa (potato)"], 0, "Stress on the last syllable: pa-PÁ, \"dad\". PA-pa is \"potato\" (or \"the Pope\")."),
      lc(
        "Habló con el profesor.",
        "Listen. When did this happen?",
        ["In the past: he or she spoke", "Now: I speak"],
        0,
        "Ha-BLÓ, stressed on the last syllable, is the past: \"He or she spoke with the teacher.\" \"I speak\" would be HA-blo, stressed on the first."
      ),
      lc(
        "Termino a las cinco.",
        "Listen. What does it mean?",
        ["I finish at five.", "He finished at five.", "The end is at five."],
        0,
        "Ter-MI-no, stressed in the middle, is \"I finish\". Termi-NÓ would be \"he finished\" and TÉR-mino \"end\"."
      ),
      spell("café", ["café", "cafe"], "Ca-FÉ: the stress falls on the last syllable, and the accent on é shows it. Without it you'd read CA-fe."),
      spell("el sofá", ["el sofá", "el sofa"], "So-FÁ, stressed on the last syllable, so it needs the accent. That's papá (dad) too: without the accent it becomes papa (potato)."),
      dict("El árbol está aquí.", "El árbol está aquí -- \"The tree is here.\" Three accents: ÁR-bol, es-TÁ, a-QUÍ."),
      sayIt("Mi papá come papas.", "My dad eats potatoes.", "Pa-PÁ, then PA-pas: move the beat and the word changes.", "Mi papá come papas -- \"My dad eats potatoes.\""),
      sayIt("El teléfono está en la mesa.", "The phone is on the table.", "Hit the stressed syllables: te-LÉ-fo-no, es-TÁ, ME-sa.", "El teléfono está en la mesa -- \"The phone is on the table.\""),
      sayIt("La música es fantástica.", "The music is fantastic.", "Two words stressed three syllables from the end: MÚ-si-ca, fan-TÁS-ti-ca.", "La música es fantástica -- \"The music is fantastic.\""),
      mc(
        "Where is the stress in mesas?",
        ["ME-sas", "me-SAS"],
        0,
        "It ends in s with no accent, so the stress falls on the second-to-last syllable (rule 2)."
      ),
      mc(
        "Which one means \"he or she cooked\"?",
        ["cocinó", "cocino"],
        0,
        "Co-ci-NÓ, stressed on the last syllable with a written accent, is the past, like habló. Co-CI-no is \"I cook\"."
      ),
      ms(
        "Using the rules, which of these new words are stressed on the last syllable?",
        ["comer (to eat)", "lunes (Monday)", "feliz (happy)", "joven (young)", "pared (wall)"],
        [0, 2, 4],
        "No accent and a final consonant other than n or s → last syllable: co-MER, fe-LIZ, pa-RED. Lunes and joven end in s and n, so they stress the second-to-last: LU-nes, JO-ven."
      ),
      tf(
        "Change the word so it means \"dad\".",
        "Mi papa es alto.",
        "Mi papá es alto.",
        "Pa-PÁ (dad) is stressed on the last syllable, so it needs the accent. PA-pa is a potato."
      ),
      mc(
        "Read los exámenes (the exams) aloud. Which syllable is stressed?",
        ["e-XÁ-me-nes", "E-xa-me-nes", "e-xa-ME-nes"],
        0,
        "The written accent tells you: e-XÁ-me-nes. Rule 1 always wins: stress the syllable with the accent."
      ),
      mc(
        "Read canciones (songs) aloud. Which syllable is stressed?",
        ["can-CIO-nes", "CAN-cio-nes", "can-cio-NES"],
        0,
        "No written accent, and it ends in s: stress the second-to-last syllable, can-CIO-nes (cio is one beat). In the singular, can-CIÓN, the accent shows the stress is at the end."
      ),
      fixSpelling("Mi papa es de Chile.", "Mi papá es de Chile.", "Papá (dad) is stressed on the last syllable, so it needs the accent. Papa, PA-pa, is a potato or the Pope."),
      fixSpelling("El telefono está aquí.", "El teléfono está aquí.", "Te-LÉ-fo-no is stressed three syllables from the end, which no rule predicts, so the é must be written."),
      say(
        "Respond aloud: say that your dad is from Chile and is very tall.",
        "Mi papá es de Chile y es muy alto.",
        "Pa-PÁ stresses the last syllable; CHI-le and AL-to follow rule 2, second-to-last."
      ),

    ]
  ),
];

// "By the end of this lesson you can..." for each lesson (Unit 2 audit,
// U.04 / Appendix B).
const GOALS: Record<string, string> = {
  "sounds-vowels": "say the five Spanish vowels short and pure, keep every unstressed vowel clear, count the beats in words with vowel pairs (bien, bue-no), and tell piso, peso, paso and puso apart by ear.",
  "sounds-b-v-d-g": "say b and v the same, switch between firm and soft b, d and g, say p, t and k without a puff of air, and spell common b/v words correctly.",
  "sounds-r-rr": "tap a single r, trill rr and a starting r, use both in whole sentences and tongue twisters, and hear the difference between pero and perro.",
  "sounds-j-g-h-n": "say j (and g before e and i) from the back of the mouth, keep h silent, and say and write ñ.",
  "sounds-ll-y-c-z-s": "say ll and y the same, say c before e/i and z as s, and recognize the Spain \"th\" and the Argentine \"sh\".",
  "sounds-qu-gu-gue": "spell the s, k and hard g sounds with z/c, qu and gu, and know when ü is needed.",
  "sounds-linking-intonation": "link words in a phrase without pauses and make your voice rise for yes/no questions.",
  "sounds-stress": "find the stressed syllable of any written word with three rules, and hear papa vs. papá.",
};

export const SOUNDS_OF_SPANISH: AnchoredLesson[] = LESSONS.map((a) =>
  GOALS[a.lesson.slug] ? { ...a, lesson: { ...a.lesson, goal: GOALS[a.lesson.slug] } } : a
);
