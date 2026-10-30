// Synced from cheneygross-afk/lengo:src/lib/lessons/sounds-of-spanish.ts by scripts/sync-content.mjs -- edit it there, not here.
import { anchored, authoring } from "./authoring";
import { dict, lc, spk } from "./skills-authoring";
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
const L = (
  slug: string,
  title: string,
  summary: string,
  duration: string,
  sections: Parameters<typeof anchored>[6],
  exercises: Parameters<typeof anchored>[7]
) => anchored("A1", AFTER, slug, title, summary, duration, sections, exercises);

export const SOUNDS_OF_SPANISH: AnchoredLesson[] = [
  L(
    "sounds-vowels",
    "Sounds of Spanish: The Five Vowels",
    "A, e, i, o, u: five short, pure sounds that never change, never glide and never fade to \"uh\".",
    "9 min",
    [
      sec(
        "Five letters, five sounds",
        [
          "English has around a dozen vowel sounds for five letters. Spanish has exactly five, and each letter always makes the same one, in every word, stressed or not.",
          "a is like the a in \"father\". e is like the e in \"met\", a little tenser. i is like \"ee\" in \"see\". o is like the o in \"more\", with rounded lips. u is like \"oo\" in \"food\".",
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
            "Fila (line, queue) is a new word. How is its i pronounced?",
            ["Like \"ee\" in \"see\"", "Like i in \"sit\"", "Like i in \"time\"", "It depends on the word"],
            0,
            "Spanish i is always \"ee\", in every word: FEE-la. The short i of \"sit\" and the \"eye\" of \"time\" don't exist in Spanish, and the sound never depends on the word."
          ),
          mc(
            "Pala (shovel) is a new word. How do its two a's sound?",
            ["Both the same open \"ah\"", "The first \"ah\", the second a weak \"uh\"", "Like the a in English \"pal\"", "The second one is silent"],
            0,
            "Each Spanish letter has one sound, stressed or not, so both a's are the \"ah\" of \"father\": PA-la. English would weaken the second one to \"uh\"; Spanish never does."
          ),
        ]
      ),
      sec(
        "Short and pure: no glide",
        [
          "English long vowels slide into another sound: \"no\" is really \"noh-oo\", \"day\" is \"deh-ee\". Spanish vowels hold still. Say no and de short and clean, as if the sound were cut off with scissors.",
          "Keep your jaw and lips still until the vowel is over. This single habit makes your accent sound far more Spanish.",
        ],
        [
          ["no", "no -- not \"noh-oo\""],
          ["de", "of, from -- not \"day\""],
          ["yo", "I"],
          ["té", "tea"],
          ["lo sé", "I know"],
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
        "Every vowel counts, even unstressed",
        [
          "English turns most unstressed vowels into a weak \"uh\" (the a's in \"banana\"). Spanish never does. In banana all three a's sound the same, and in chocolate the final e is fully pronounced: cho-co-la-te, four syllables.",
          "This matters for meaning: the last vowel often tells you who is doing something or whether a word is masculine or feminine. Hablo is \"I speak\", habla is \"he or she speaks\".",
        ],
        [
          ["banana", "banana -- ba-na-na, three equal a's"],
          ["chocolate", "chocolate -- cho-co-la-te"],
          ["importante", "important -- im-por-tan-te"],
          ["Hablo inglés.", "I speak English."],
          ["Habla inglés.", "He/She speaks English."],
        ],
        [
          mc(
            "Tomate (tomato) is a new word. How many syllables does it have in Spanish?",
            ["3: to-ma-te", "2: to-mate", "4: to-ma-t-e", "1: tmate"],
            0,
            "Every Spanish vowel is its own beat, so the final e is a full syllable: to-MA-te, like cho-co-la-te. \"To-mate\" is how English swallows the last vowel."
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
        "Habla inglés.",
        "Listen. Who speaks English?",
        ["He or she does (habla)", "I do (hablo)", "You do (hablas)"],
        0,
        "The last vowel of habla is a clear a, so it's he or she. Hablo ends in o (I) and hablas ends in -as (you). Unstressed vowels are never swallowed, so listen to the end of the verb."
      ),
      lc(
        "todo",
        "Listen. Which word did you hear?",
        ["todo", "toda", "tuda"],
        0,
        "Todo ends in a clear o (masculine); toda ends in a (feminine). Tuda isn't a word: the stressed vowel is o, pure and rounded."
      ),
      dict("mesa", "Mesa (table): m-e-s-a. Each vowel is written exactly as it sounds."),
      dict("luna", "Luna (moon): the u is always \"oo\"."),
      dict("piso", "Piso (floor, flat): Spanish \"ee\" is written i."),
      dict("Mi casa es tu casa.", "Mi casa es tu casa -- \"my house is your house\", i.e. make yourself at home. Every a is the same open \"ah\"."),
      spk("casa", "Open your mouth wide for both a's; the second one is as clear as the first.", "Casa: CA-sa, two equal \"ah\" sounds, stress on the first."),
      spk("No, no sé.", "Cut each vowel off short: no glide into \"oo\" or \"ee\".", "No, no sé -- \"No, I don't know.\" Three short, pure vowels."),
      spk("chocolate", "Four beats, and the final e is a full \"eh\": cho-co-la-te.", "Chocolate: cho-co-LA-te, stress on la."),
      spk("Ana mira la mesa.", "Every a sounds the same, stressed or not: no \"uh\" anywhere.", "Ana mira la mesa -- \"Ana looks at the table.\""),
      spk("Hablo un poco de español.", "Keep the o of hablo and poco short and round, not \"oh-oo\".", "Hablo un poco de español -- \"I speak a little Spanish.\" Stress: HA-blo, PO-co, es-pa-ÑOL."),
      mc(
        "You hear \"HA-bla in-GLÉS\", with a clear final a. Who speaks English?",
        ["he or she", "I", "we", "they"],
        0,
        "A final a (habla) means he or she; a final o (hablo) means I. That's why final vowels must never fade to \"uh\": the vowel is the only clue."
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
      tf(
        "Change to él.",
        "Trabajo en Madrid.",
        "Él trabaja en Madrid.",
        "Trabajar (to work) follows the same pattern as hablar: the final o means I, a final a means he or she. Say it fully: that vowel is the whole difference.",
        ["Trabaja en Madrid."]
      ),
      tf(
        "Make it feminine.",
        "El niño es alto.",
        "La niña es alta.",
        "The final vowel carries the gender: o → a in every word. Say each final a fully, or niña and niño blur together."
      ),
      fixSpelling(
        "Es muy important.",
        "Es muy importante.",
        "English drops the final vowel; Spanish never does. im-por-TAN-te has four syllables, and the final e is written and said.",
      ),
      toEs(
        "Ella hablo inglés.",
        "Ella habla inglés.",
        "With ella the verb ends in a: habla. Hablo (with o) can only mean \"I speak\", so the last vowel has to match the person.",
        ["Habla inglés."],
        "Correct the sentence."
      ),
      toEs("Yes, I know.", "Sí, lo sé.", "Sí (yes) has an accent; the i is a pure \"ee\" and the e in sé is short, with no glide.", ["Sí, ya lo sé."]),
      say(
        "Respond aloud: say that you speak Spanish and that she speaks English.",
        "Hablo español y ella habla inglés.",
        "Hablo ends in a round, short o (I); habla ends in an open a (she). Keep both final vowels clear, because they carry the meaning."
      ),
    ]
  ),
  L(
    "sounds-b-v-d-g",
    "Sounds of Spanish: B = V, and the Soft D and G",
    "B and v are one sound, and b, d and g go soft between vowels: why Cuba, nada and agua sound so gentle.",
    "10 min",
    [
      sec(
        "B and v: one sound, two spellings",
        [
          "In Spanish, b and v are pronounced exactly the same. There is no English v (top teeth on the lower lip) in standard Spanish: vaca and baca, tubo and tuvo sound identical.",
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
          "Spanish d is made with the tongue touching the back of the upper front teeth, not the gum ridge behind them as in English. At the start and after n or l it's firm: dos, donde, el día.",
          "Between vowels it goes soft, close to the th in \"this\" but lighter: nada, todo, cada. At the end of a word it's softer still, almost gone: Madrid, usted, verdad.",
          "In relaxed speech in Spain, -ado often loses its d: cansado sounds like \"cansao\". That's informal; say the soft d.",
        ],
        [
          ["dos", "two -- firm d"],
          ["nada", "nothing -- soft d"],
          ["todo", "everything -- soft d"],
          ["Madrid", "the final d is very light"],
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
            ["un dato (a fact)", "la duda (the doubt)", "poder (to be able)", "cuidado (careful)"],
            0,
            "D is firm at the start, after n or after l: un dato. In la duda, poder and cuidado every d comes after a vowel, so it's soft."
          ),
        ]
      ),
      sec(
        "The soft g",
        [
          "G before a, o, u or a consonant is like English \"go\" at the start and after n: gato, tengo, grande.",
          "Between vowels it softens: the back of the tongue comes close to the roof of the mouth but doesn't close, so the sound keeps flowing. Listen for it in agua, lago and hago.",
          "(G before e or i is a different sound, like the j in jamón. That comes in the lesson on j, g and h.)",
        ],
        [
          ["gato", "cat -- firm g"],
          ["tengo", "I have -- firm, after n"],
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
        "Tuvo un problema.",
        "Listen. What does the sentence mean?",
        ["He had a problem.", "A tube is a problem.", "He has a problem.", "We had a problem."],
        0,
        "Tuvo (he/she had, a past form of tener you will meet later) and tubo (tube) sound exactly the same, because b = v. Only meaning tells them apart: tuvo un problema is \"he had a problem\". \"He has\" would be tiene, and \"we had\" tuvimos."
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
      dict("verdad", "Verdad (true, truth): v at the start, d in the middle and at the end, both soft. You have to learn v vs. b word by word."),
      dict("Tengo un gato.", "Tengo un gato -- \"I have a cat.\" Firm g in tengo (after n) and in gato (after n of un)."),
      spk("Vivo en Valencia.", "Keep your top teeth off your lip: every v here is a b-sound, firm at the start of vivo and after the n of en, soft in the middle of vivo.", "Vivo en Valencia -- \"I live in Valencia.\" VI-vo en va-LEN-cia."),
      spk("Todo está bien.", "Let the d of todo be soft, almost \"th\"; don't flap it like the tt in \"butter\".", "Todo está bien -- \"Everything's fine.\" TO-do es-TÁ BIEN."),
      spk("¿Quieres agua?", "The g in agua barely closes: let the air keep flowing.", "¿Quieres agua? -- \"Do you want some water?\" Let the voice rise at the end."),
      spk("¿De dónde es usted?", "Tongue against the back of your upper teeth for each d; the final d of usted is very light.", "¿De dónde es usted? -- \"Where are you from?\" (formal)."),
      spk("un vaso de vino", "Firm b in un vaso (after n), soft b in de vino (between vowels).", "Un vaso de vino -- \"a glass of wine.\""),
      mc(
        "Do tubo and tuvo sound different?",
        ["No: b and v sound the same", "Yes: the v uses teeth on the lip", "Yes: the b is silent", "Yes: the v sounds like f"],
        0,
        "Spanish b and v are one sound, so tubo (tube) and tuvo (he had) are identical. That's why you learn the spelling with each word."
      ),
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
      tf(
        "Change el to un.",
        "el vaso",
        "un vaso",
        "The spelling stays vaso, but the sound changes: after n the v becomes a firm b, said \"um baso\". After el it was soft."
      ),
      tf(
        "Make it plural.",
        "la ciudad",
        "las ciudades",
        "The letter d stays, but its sound moves: the final d of ciudad is very light, while in ciu-da-des it sits between vowels and is a soft, clear d."
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
      toEs("a glass of water", "un vaso de agua", "Vaso is spelled with v (firm b sound after n); agua has the soft g."),
      toEs("And you? (formal)", "¿Y usted?", "Usted ends in a very light d, but it's still written."),
      say(
        "Respond aloud: say that you have a cat and nothing else.",
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
      sec(
        "The tap: one quick touch",
        [
          "A single r between vowels is one very quick tap of the tongue tip on the ridge behind the upper teeth. You already make this sound: it's the tt in American \"butter\" or the dd in \"ladder\" said fast.",
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
          "Can't trill yet? Relax your tongue, put it where you say d, and blow. Practise with tr and dr words (tres, tren, madre), where the tongue is already in place. A strong single tap is understood while you learn.",
        ],
        [
          ["perro", "dog -- trill"],
          ["carro", "car (Latin America; coche in Spain)"],
          ["rojo", "red -- trilled at the start"],
          ["Roma", "Rome"],
          ["Enrique", "Enrique -- trill after n"],
          ["tres", "three -- practice word"],
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
          "Between vowels, one r and two r's are different words. Getting this right matters: pero is \"but\", perro is \"dog\"; caro is \"expensive\", carro is \"car\"; cero is \"zero\", cerro is \"hill\".",
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
      dict("perro", "Perro (dog): the trill between vowels is written rr."),
      dict("pero", "Pero (but): the tap is written with one r."),
      dict("rojo", "Rojo (red): at the start of a word the trill is written with one r -- never rr."),
      dict("Tengo tres perros.", "Tengo tres perros -- \"I have three dogs.\" Tres has a tap after t; perros has rr."),
      spk("pero, perro", "Short flick for pero, then a long buzz for perro. Make the difference big.", "Pero (but) vs. perro (dog): tap vs. trill."),
      spk("Mi perro es rojo.", "The r at the start of rojo trills, just like the rr in perro.", "Mi perro es rojo -- \"My dog is red.\""),
      spk("Tres tristes tigres.", "A tongue twister: tr puts your tongue right where the tap happens. Go slowly first.", "Tres tristes tigres -- \"three sad tigers\", the start of a famous tongue twister."),
      spk("Enrique es de Puerto Rico.", "After n the r is trilled (Enrique); Puerto has a tap; Rico is trilled.", "Enrique es de Puerto Rico -- \"Enrique is from Puerto Rico.\""),
      spk("Es caro, pero me gusta.", "Tap in caro, tap in pero -- no trills here at all.", "Es caro, pero me gusta -- \"It's expensive, but I like it.\""),
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
      toEs("The dog is expensive.", "El perro es caro.", "Perro has the trill (rr), caro the tap (one r). Swap them and you'd say \"the but is a car\"."),
      say(
        "Respond aloud: say that Roberto has three dogs.",
        "Roberto tiene tres perros.",
        "Trill the R at the start of Roberto and the rr of perros; tap the second r of Roberto and the r of tres."
      ),
    ]
  ),
  L(
    "sounds-j-g-h-n",
    "Sounds of Spanish: J, G, H and Ñ",
    "The throaty j (and the g of gente), the h you never pronounce, and ñ, the \"ny\" of mañana.",
    "9 min",
    [
      sec(
        "J, and g before e or i",
        [
          "Spanish j is made at the back of the mouth. In Latin America and the Caribbean it's usually a breathy sound like English h in \"hot\". In most of Spain it's rougher, like the ch in Scottish \"loch\". Both are correct.",
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
            ["U-mo, no h sound", "HU-mo, like English h", "JU-mo, with a j sound", "U-mo-e"],
            0,
            "H is always silent, so humo is U-mo, just as hotel is o-TEL. Pronouncing it like English h or like Spanish j are both mistakes."
          ),
        ]
      ),
      sec(
        "Ñ: \"ny\"",
        [
          "Ñ sounds like the ny in \"canyon\" -- one sound, with the middle of the tongue pressed to the roof of the mouth. It's a separate letter, after n in the dictionary.",
          "N and ñ make different words: una (one, a) vs. uña (fingernail), mono (monkey) vs. moño (hair bun). Always write the tilde.",
        ],
        [
          ["mañana", "tomorrow, morning"],
          ["España", "Spain"],
          ["el niño", "the boy, the child"],
          ["el año", "the year"],
          ["Tengo veinte años.", "I'm twenty years old."],
        ],
        [
          mc(
            "Piña (pineapple) is a new word. What does its ñ sound like?",
            ["The ny in \"canyon\"", "The n in \"no\"", "The ng in \"sing\"", "The n in \"onion\" said as two sounds, n-y"],
            0,
            "Ñ is one sound, like the ny in \"canyon\". A plain n would make a different word, and ng (\"sing\") is made further back."
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
      dict("mañana", "Mañana (tomorrow): don't forget the tilde on the ñ."),
      dict("jamón", "Jamón (ham): j, and a written accent on the o."),
      dict("Hoy hace frío.", "Hoy hace frío -- \"It's cold today.\" Two silent h's: hoy and hace."),
      dict("España", "España (Spain): ñ, and a capital E for the country."),
      spk("Juan es joven.", "Breathe out from the back of the throat for each j; softer in Latin America, rougher in Spain.", "Juan es joven -- \"Juan is young.\""),
      spk("Hola, ¿hablas español?", "No h sound at all: \"o-la\", \"a-blas\".", "Hola, ¿hablas español? -- \"Hi, do you speak Spanish?\""),
      spk("Hasta mañana.", "Silent h in hasta; ñ is one smooth \"ny\" sound.", "Hasta mañana -- \"See you tomorrow.\""),
      spk("La gente de México", "G in gente and x in México both make the j sound.", "La gente de México -- \"the people of Mexico.\""),
      spk("El niño tiene cinco años.", "Two ñ's: press the middle of your tongue up for \"ny\".", "El niño tiene cinco años -- \"The boy is five years old.\""),
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
      tf(
        "Make it plural.",
        "el reloj",
        "los relojes",
        "Reloj ends in a consonant, so add -es. The j stays a j in writing even though ge would sound the same: you learn which letter each word uses."
      ),
      tf(
        "Make it feminine.",
        "el niño español",
        "la niña española",
        "The ñ never changes: niño → niña, español → española. Only the endings show the gender."
      ),
      fixSpelling("Hasta manana.", "Hasta mañana.", "Mañana has the \"ny\" sound, so it needs the tilde: ñ. N and ñ are different letters."),
      fixSpelling("Soy de Espana.", "Soy de España.", "España has ñ, the \"ny\" of canyon. Without the tilde it's a misspelling."),
      fixSpelling("Mi hijo tiene diez anos.", "Mi hijo tiene diez años.", "Años (years) needs the tilde. Without it you write a very different, rude word."),
      toEs("the people of Spain", "la gente de España", "Gente has g before e (the j sound), and España has ñ.", ["la gente española"]),
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
    "Why calle and cayó rhyme, how Buenos Aires says yo, and the two standard ways to say cinco and gracias.",
    "10 min",
    [
      sec(
        "LL and y: one sound for most speakers",
        [
          "For almost every Spanish speaker today, ll and y sound the same: like the y in \"yes\", often a little stronger, sometimes close to the j in \"jam\" at the start of a word. This merger is called yeísmo, and it's the norm in Spain and Latin America.",
          "Regional note: in Argentina and Uruguay (Rioplatense Spanish), ll and y sound like \"sh\" (most younger speakers) or like the s in \"measure\" (older speakers): yo sounds like \"sho\", calle like \"ca-she\". A few areas, such as parts of the Andes, still keep ll different, closer to the lli in \"million\".",
          "Y on its own (\"and\") and y at the end of a word (hoy, muy, rey) is just the vowel i.",
        ],
        [
          ["la calle", "the street"],
          ["yo", "I"],
          ["Me llamo Yolanda y vivo en Sevilla.", "My name is Yolanda and I live in Seville."],
          ["la playa", "the beach"],
          ["hoy y mañana", "today and tomorrow -- y is \"ee\""],
        ],
        [
          mc(
            "In Buenos Aires, how does the new word llave (key) usually sound?",
            ["Like \"sha-ve\" (or \"zha-ve\")", "Like \"ya-ve\" with an English y", "Like \"la-ve\"", "Like \"ja-ve\" with a Spanish j"],
            0,
            "Rioplatense Spanish (Argentina, Uruguay) says ll and y as \"sh\" or \"zh\", so llave sounds like \"sha-ve\". The English-style y is what most other regions use, and ll is never an l or a Spanish j."
          ),
        ]
      ),
      sec(
        "C, z and s: seseo and distinción",
        [
          "C before a, o, u is a k sound: casa, cosa, Cuba. C before e or i, and z everywhere, has two standard pronunciations.",
          "In Latin America (and the Canary Islands and much of Andalusia) they sound like s: cinco is \"sin-co\", zapato is \"sa-pa-to\". This is called seseo, and it's what most Spanish speakers do.",
          "In most of Spain they sound like the th in \"think\": cinco is \"thin-co\", zapato is \"tha-pa-to\", while s stays s. This is called distinción. Both are correct: choose one and use it consistently.",
          "Spelling follows from this: ce and ci already make the sound, so z is normally written only before a, o and u. That's why lápiz becomes lápices and vez becomes veces.",
        ],
        [
          ["cinco", "five"],
          ["el zapato", "the shoe"],
          ["gracias", "thank you -- \"gra-sias\" or \"gra-thias\""],
          ["la cena", "dinner"],
          ["Cuba", "Cuba -- c before u is k"],
        ],
        [
          mc(
            "A speaker from Mexico says the new word cielo (sky). What does it sound like?",
            ["\"sie-lo\"", "\"thie-lo\"", "\"kie-lo\"", "\"chie-lo\""],
            0,
            "Latin America uses seseo: c before e or i sounds like s, \"sie-lo\". \"Thie-lo\" is the distinción of most of Spain. C before e or i is never k or ch."
          ),
          mc(
            "In most of Spain, which of these new words has the th sound?",
            ["zumo (juice)", "sopa (soup)", "cama (bed)", "coche (car)"],
            0,
            "Distinción gives th to z and to c before e or i: zumo is \"thu-mo\". S stays s (sopa), and c before a or o is a k (cama, coche)."
          ),
        ]
      ),
      sec(
        "S is always a hiss, and some words sound alike",
        [
          "Spanish s is always the hissing s of \"sun\", even between vowels. English often buzzes it (\"rose\", \"president\"); Spanish doesn't: casa, rosa, presidente.",
          "With seseo, some pairs sound identical: casa (house) and caza (hunt), ves (you see) and vez (time, occasion). In Spain they're different. In Latin America, context tells you which word it is -- and spelling has to be learned.",
        ],
        [
          ["la casa", "the house -- a hissing s"],
          ["la rosa", "the rose -- no buzz"],
          ["una vez", "once"],
          ["¿Lo ves?", "Do you see it?"],
        ],
        [
          mc(
            "Why might the new words cocer (to cook) and coser (to sew) sound the same in Mexico?",
            ["In Latin America c before e sounds like s (seseo)", "Because c is silent", "Because s sounds like z in Spanish", "They never sound the same"],
            0,
            "With seseo, ce is pronounced \"se\", so cocer sounds like coser, just like casa and caza. In most of Spain cocer has \"th\" and the words differ."
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
        "Only casa (house) makes sense. With a Latin American voice, casa and caza sound exactly the same (seseo), so the context decides; with a Spain voice, caza would have the \"th\" sound."
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
        "Cinco is 5. Fifteen would be quince, fifty cincuenta and five hundred quinientos. Cinco may sound like \"sin-co\" or \"thin-co\" depending on the voice."
      ),
      lc(
        "Una vez al año.",
        "Listen. How often?",
        ["Once a year", "You see a year", "One day a year", "Always"],
        0,
        "Una vez al año -- \"once a year\". Vez (time, occasion) sounds like ves (you see) in Latin America, but una vez is a fixed phrase. Día would be \"day\" and siempre \"always\"."
      ),
      dict("calle", "Calle (street): spelled with ll, though it sounds like y for most speakers."),
      dict("cinco", "Cinco (five): c before i, the s or \"th\" sound depending on the region."),
      dict("zapato", "Zapato (shoe): z at the start, even though it sounds like s in Latin America."),
      dict("Me llamo Yolanda.", "Me llamo Yolanda -- \"My name is Yolanda.\" Llamo with ll, Yolanda with Y: same sound, different letters."),
      spk("Yo me llamo Guillermo.", "Y and ll the same, like \"yes\". In Argentina you'd hear \"Sho me shamo Guishermo\".", "Yo me llamo Guillermo -- \"My name is Guillermo.\""),
      spk("Muchas gracias.", "Latin America: \"gra-sias\". Spain: \"gra-thias\". Both are right; pick one and be consistent.", "Muchas gracias -- \"Thank you very much.\""),
      spk("Cinco zapatos azules.", "Every c before i and every z sounds the same: all s or all \"th\".", "Cinco zapatos azules -- \"five blue shoes.\""),
      spk("Una casa en la playa.", "Keep the s of casa a sharp hiss, never a buzz like English \"rose\".", "Una casa en la playa -- \"a house on the beach.\""),
      spk("Hoy y mañana llueve.", "Hoy and the word y are the vowel \"ee\"; ll in llueve is the y of \"yes\".", "Hoy y mañana llueve -- \"It's raining today and tomorrow.\""),
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
      tf(
        "Make it plural.",
        "el lápiz",
        "los lápices",
        "Lápiz adds -es, and because ce already makes the s / th sound, the z is written c: lápices."
      ),
      tf(
        "Change it to two times.",
        "una vez",
        "dos veces",
        "Vez adds -es for the plural, and z becomes c before e: veces."
      ),
      fixSpelling("Tengo dos lápizes.", "Tengo dos lápices.", "Before e, Spanish writes c, not z: lápiz → lápices. The sound is the same."),
      fixSpelling("Me yamo Ana.", "Me llamo Ana.", "Llamar is spelled with ll. Ll and y sound alike for most speakers, so you learn the spelling with the word."),
      fixSpelling("La sena es a las nueve.", "La cena es a las nueve.", "Dinner is cena, with c. With seseo it sounds like \"se-na\", but the spelling keeps the c."),
      toEs("I live on a quiet street.", "Vivo en una calle tranquila.", "Calle is written with ll; tranquila has qu, a k sound. Feminine calle → tranquila.", ["Vivo en una calle tranquila"]),
      say(
        "Respond aloud: say thank you very much, and that the city is very pretty.",
        "Muchas gracias. La ciudad es muy bonita.",
        "Gracias and ciudad: s sounds in Latin America, th sounds in most of Spain. Keep the s of muchas a sharp hiss."
      ),
    ]
  ),
  L(
    "sounds-qu-gu-gue",
    "Sounds of Spanish: QU, GU and GÜ",
    "Queso, guitarra, pingüino: when the u is silent, when it's heard, and how Spanish spells the k and hard g sounds.",
    "8 min",
    [
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
            ["\"KIN-se\" (\"KIN-the\" in Spain)", "\"KWIN-se\"", "\"ku-IN-se\"", "\"SIN-se\""],
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
      lc("aquí", "Listen. How is the word spelled?", ["aquí", "akí", "ací"], 0, "\"Ki\" is written qui: aquí, \"here\". Akí isn't Spanish spelling, and ací would sound like \"a-si\"."),
      dict("queso", "Queso (cheese): qu before e, silent u."),
      dict("guitarra", "Guitarra (guitar): gu before i for a hard g, and rr for the trill."),
      dict("pingüino", "Pingüino (penguin): ü because you hear the u."),
      dict("¿Quién quiere queso?", "¿Quién quiere queso? -- \"Who wants cheese?\" Three qu's, three silent u's. Quién has an accent because it's a question word."),
      spk("¿Quieres queso?", "Don't say \"kw\": quieres is \"kie-res\", queso is \"ke-so\".", "¿Quieres queso? -- \"Do you want cheese?\""),
      spk("Miguel toca la guitarra.", "The u after g is silent in both Miguel and guitarra.", "Miguel toca la guitarra -- \"Miguel plays the guitar.\""),
      spk("El pingüino es bilingüe.", "Here the dots mean you say the u: \"pin-gwi-no\", \"bi-lin-gwe\".", "El pingüino es bilingüe -- \"The penguin is bilingual.\""),
      spk("Aquí hay quince cosas.", "Aquí and quince both have the silent u of qu.", "Aquí hay quince cosas -- \"There are fifteen things here.\""),
      mc(
        "How is guerra pronounced?",
        ["ge-rra: the u is silent", "gwe-rra", "je-rra", "gu-e-rra"],
        0,
        "No dots means a silent u; it only keeps the g hard. With gue the g sounds like the g of \"get\", never like j."
      ),
      mc(
        "Química (chemistry) starts with a k sound before i. How is it spelled?",
        ["química", "kímica", "címica", "cuímica"],
        0,
        "Ki is written qui: química. K is only for a few borrowed words, ci would sound like \"si\", and cui would say \"kwi\"."
      ),
      ms(
        "Which spellings are correct?",
        ["quiero", "kiero", "guerra", "gerra", "cigüeña"],
        [0, 2, 4],
        "Ke/ki is written que/qui (quiero), hard ge/gi is written gue/gui (guerra), and ü marks a u you hear (cigüeña). Kiero uses k, and gerra would sound like \"he-rra\"."
      ),
      tf(
        "Make it small: add -ito.",
        "poco",
        "poquito",
        "Poco + -ito: before i, c would sound like s, so the k sound is written qu: poquito."
      ),
      tf(
        "Make it small: add -ito.",
        "amigo",
        "amiguito",
        "Amigo + -ito: before i, g would sound like j, so the hard g is written gu: amiguito. The u is silent."
      ),
      fixSpelling("Me gusta el keso.", "Me gusta el queso.", "Ke is written que in Spanish: queso. The u is silent."),
      fixSpelling("El pinguino es negro y blanco.", "El pingüino es negro y blanco.", "You hear the u (\"pin-gwi-no\"), so it needs the dots: pingüino. Without them it would say \"pin-gi-no\"."),
      fixSpelling("Mi amigo toca la gitarra.", "Mi amigo toca la guitarra.", "Hard g before i is written gui. Gi would sound like \"hi\"."),
      toEs("Who is Miguel?", "¿Quién es Miguel?", "Quién: k sound before ie, written qu. Miguel: hard g before e, written gu. Both u's are silent."),
      say(
        "Respond aloud: say that there are fifteen guitars here.",
        "Aquí hay quince guitarras.",
        "Three silent u's: aquí, quince, guitarras. Don't add a \"w\" after the k or g."
      ),
    ]
  ),
  L(
    "sounds-linking-intonation",
    "Sounds of Spanish: Linking Words and the Melody of Questions",
    "Why Spanish sounds like one long word (los otros = \"lo-so-tros\"), and how your voice turns a statement into a question.",
    "10 min",
    [
      sec(
        "Consonant + vowel: the words join",
        [
          "Spanish doesn't pause between words inside a phrase. A consonant at the end of one word joins the vowel that starts the next: los otros sounds like \"lo-so-tros\", un amigo like \"u-na-mi-go\", es importante like \"e-sim-por-tan-te\".",
          "That's why fast Spanish seems to have no gaps. When you listen, expect the words to run together; when you speak, don't stop between them.",
        ],
        [
          ["los otros", "the others -- \"lo-so-tros\""],
          ["un amigo", "a friend -- \"u-na-mi-go\""],
          ["Es importante.", "It's important. -- \"e-sim-por-tan-te\""],
          ["mis hijos", "my children -- \"mi-si-jos\" (h is silent)"],
        ],
        [
          mc(
            "How does a speaker say dos hermanos (two brothers)?",
            ["As one flow: \"do-ser-ma-nos\"", "With a pause: \"dos -- hermanos\"", "\"dos-jer-ma-nos\"", "\"do-her-ma-nos\""],
            0,
            "The h is silent, so hermanos starts with a vowel, and the s of dos joins it: \"do-ser-ma-nos\", like mis hijos. No pause, and no h sound."
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
          ["Va a hablar.", "He's going to speak. -- \"va-blar\", long a"],
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
      lc("¿Tienes hambre?", "Listen. Is this a statement or a yes/no question?", ["A yes/no question", "A statement"], 0, "The voice rises at the end: ¿Tienes hambre? -- \"Are you hungry?\" As a statement, Tienes hambre would fall."),
      lc("Hablas inglés.", "Listen. Is this a statement or a yes/no question?", ["A statement", "A yes/no question"], 0, "The voice falls at the end: Hablas inglés -- \"You speak English.\" As a question it would rise: ¿Hablas inglés?"),
      lc(
        "Voy a hablar con ella.",
        "Listen. What does the person say?",
        ["I'm going to talk to her.", "I talk to her.", "I talked to her.", "I'm going with her."],
        0,
        "Voy a hablar: the a merges into hablar (\"vo-ya-blar\"), but voy + a + infinitive means \"going to\". \"I talk\" would be hablo, \"I talked\" hablé, and \"going with her\" has no hablar."
      ),
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
      spk("¿Cómo estás?", "Link cómo into estás with no break: \"co-moes-tás\".", "¿Cómo estás? -- a question-word question: the voice can fall at the end."),
      spk("Mi amigo es inglés.", "One smooth line: \"mia-mi-goe-sin-glés\".", "Mi amigo es inglés -- \"My friend is English.\" Voice falls: it's a statement."),
      spk("¿Tienes hambre?", "Let your voice climb on the last word.", "¿Tienes hambre? -- a yes/no question, so it rises."),
      spk("Voy a ir a Argentina.", "Merge a + a into one long a: \"vo-ya-i-rar-gen-ti-na\".", "Voy a ir a Argentina -- \"I'm going to go to Argentina.\""),
      spk("Quiero café, agua y fruta.", "Rise on café and agua, fall on fruta to show the list is over.", "Quiero café, agua y fruta -- \"I want coffee, water and fruit.\""),
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
      mc(
        "In su amiga (her friend), the u of su and the a of amiga...",
        ["glide into one syllable: \"sua-mi-ga\"", "are separated by a pause", "become an h sound", "drop the u completely"],
        0,
        "Vowel + vowel across words merge into one syllable (sinalefa), just like mi amigo. Both vowels are still heard."
      ),
      ms(
        "Which of these questions usually end with the voice rising?",
        ["¿Tienes un perro?", "¿Cómo te llamas?", "¿Es caro?", "¿Qué quieres?"],
        [0, 2],
        "Yes/no questions rise: ¿Tienes un perro?, ¿Es caro? Questions with a question word (cómo, qué) usually fall."
      ),
      tf(
        "Turn it into a question.",
        "Hablas inglés.",
        "¿Hablas inglés?",
        "Same words as the statement; the ¿? in writing and the rising voice in speech make it a yes/no question."
      ),
      toEs("Is it important?", "¿Es importante?", "Same words as the statement, with ¿? and a rising voice. Said as one flow: e-sim-por-tan-te."),
      toEs(
        "Tienes frío?",
        "¿Tienes frío?",
        "Spanish marks a question at both ends: ¿ at the start, ? at the end. The opening ¿ tells the reader to start the rising melody.",
        [],
        "Correct the punctuation."
      ),
      toEs(
        "¿Dónde vives.",
        "¿Dónde vives?",
        "A question opens with ¿ and must close with ?, never with a full stop.",
        [],
        "Correct the punctuation."
      ),
      toEs(
        "My friends are from Uruguay.",
        "Mis amigos son de Uruguay.",
        "Said as one flow: mis amigos links into \"mi-sa-mi-gos\", and de Uruguay glides into \"deu-ru-guay\".",
        []
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
      sec(
        "One strong syllable per word",
        [
          "In every Spanish word of two or more syllables, one syllable is stressed: a little louder, longer and higher. CA-sa, ha-BLAR, te-LÉ-fo-no.",
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
          "3. No accent, and it ends in any other consonant? Stress the last syllable: hablar, papel, ciudad.",
          "When to write an accent is the other side of the same rules, and it comes in the Elementary level (lesson: \"Spelling: ¿ ¡, Capitals and Where the Stress Falls\"). For now, just follow the accent when you see one.",
        ],
        [
          ["el café", "ca-FÉ -- accent: stress it"],
          ["el árbol", "ÁR-bol -- accent overrides rule 3"],
          ["hablan", "HA-blan -- ends in n: second-to-last"],
          ["el papel", "pa-PEL -- ends in l: last"],
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
      dict("café", "Café: the stress falls on the last syllable, and the accent on é shows it."),
      dict("papá", "Papá (dad): write the accent, or it becomes papa (potato)."),
      dict("El árbol está aquí.", "El árbol está aquí -- \"The tree is here.\" Three accents: ÁR-bol, es-TÁ, a-QUÍ."),
      dict("Hablo español.", "Hablo español -- \"I speak Spanish.\" HA-blo has no accent; es-pa-ÑOL ends in l and stresses the last syllable, so it needs none either."),
      spk("Mi papá come papas.", "Pa-PÁ, then PA-pas: move the beat and the word changes.", "Mi papá come papas -- \"My dad eats potatoes.\""),
      spk("El teléfono está en la mesa.", "Hit the stressed syllables: te-LÉ-fo-no, es-TÁ, ME-sa.", "El teléfono está en la mesa -- \"The phone is on the table.\""),
      spk("Hablo con Juan. Habló con Juan.", "Say both: HA-blo (I speak), then ha-BLÓ (he spoke).", "Hablo con Juan vs. Habló con Juan: present \"I\" vs. past \"he or she\"."),
      spk("La música es fantástica.", "Two words stressed three syllables from the end: MÚ-si-ca, fan-TÁS-ti-ca.", "La música es fantástica -- \"The music is fantastic.\""),
      mc(
        "Where is the stress in reloj (no written accent)?",
        ["re-LOJ", "RE-loj"],
        0,
        "It ends in a consonant other than n or s, so the stress falls on the last syllable (rule 3)."
      ),
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
        "Change it to the past: he or she.",
        "Trabajo mucho.",
        "Trabajó mucho.",
        "Moving the stress to the last syllable (and writing the accent) turns tra-BA-jo, \"I work\", into tra-ba-JÓ, \"he or she worked\"."
      ),
      tf(
        "Make it plural.",
        "el examen",
        "los exámenes",
        "Examen is e-XA-men by rule 2. In the plural the stress stays on XA, but now it's three syllables from the end, which no rule predicts, so it needs a written accent: exámenes."
      ),
      tf(
        "Make it plural.",
        "la canción",
        "las canciones",
        "Can-CIÓN ends in n but stresses the last syllable, so it needs the accent. In the plural, can-CIO-nes, the stress is second-to-last, exactly where rule 2 puts it, so the accent goes."
      ),
      fixSpelling("Mi papa es de Chile.", "Mi papá es de Chile.", "Papá (dad) is stressed on the last syllable, so it needs the accent. Papa, PA-pa, is a potato or the Pope."),
      fixSpelling("El telefono está aquí.", "El teléfono está aquí.", "Te-LÉ-fo-no is stressed three syllables from the end, which no rule predicts, so the é must be written."),
      say(
        "Respond aloud: say that your dad works a lot.",
        "Mi papá trabaja mucho.",
        "Pa-PÁ stresses the last syllable; tra-BA-ja and MU-cho follow rule 2, second-to-last."
      ),
    ]
  ),
];
