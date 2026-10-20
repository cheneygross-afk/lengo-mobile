// Synced from cheneygross-afk/lengo:src/lib/lessons/en-c2-u06-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Required drill lessons for EN-C2 unit u06 (humor, wordplay and informal English): a short recap, then graded practice.

type Ex = Lesson["exercises"][number];

const SECONDS: Record<string, number> = {
  "multiple-choice": 15, "multi-select": 20, "listen-choose": 20, "fill-blank": 20, translate: 30,
  "word-order": 25, matching: 30, dictation: 30, speak: 25, write: 0,
};

const tr = (source: string, answer: string, altAnswers: string[], explanation: string): Ex =>
  altAnswers.length
    ? { type: "translate", direction: "es-en", prompt: "Translate into English.", source, answer, altAnswers, explanation }
    : { type: "translate", direction: "es-en", prompt: "Translate into English.", source, answer, explanation };

const fb = (sentence: string, answer: string, en: string, altAnswers: string[], explanation: string): Ex =>
  altAnswers.length
    ? { type: "fill-blank", prompt: "Write the bold words in English.", sentence, answer, en, altAnswers, explanation }
    : { type: "fill-blank", prompt: "Write the bold words in English.", sentence, answer, en, explanation };

const kw = (key: string, original: string, sentence: string, answer: string, altAnswers: string[], explanation: string): Ex =>
  altAnswers.length
    ? { type: "fill-blank", prompt: `Complete the second sentence so it means the same as the first, using ${key}: "${original}"`, sentence, answer, altAnswers, explanation }
    : { type: "fill-blank", prompt: `Complete the second sentence so it means the same as the first, using ${key}: "${original}"`, sentence, answer, explanation };

const mc = (question: string, options: string[], correctIndex: number, explanation: string): Ex => ({
  type: "multiple-choice", question, options, correctIndex, explanation,
});

const wo = (sentence: string, translation: string, explanation: string, alts: string[] = []): Ex =>
  alts.length
    ? { type: "word-order", prompt: "Put the words in order.", words: sentence.split(" "), translation, altOrders: alts.map((a) => a.split(" ")), explanation }
    : { type: "word-order", prompt: "Put the words in order.", words: sentence.split(" "), translation, explanation };

const dt = (audio: string, explanation: string): Ex => ({ type: "dictation", audio, explanation });

const lc = (audio: string, question: string, options: string[], correctIndex: number, explanation: string): Ex => ({
  type: "listen-choose", audio, question, options, correctIndex, explanation,
});

const sp = (text: string, spanish: string, tip: string, explanation: string): Ex => ({
  type: "speak", text, prompt: `Say in English: «${spanish}»`, tip, explanation,
});

const mt = (instructions: string, pairs: [string, string][], explanation: string): Ex => ({
  type: "matching", instructions, pairs: pairs.map(([left, right]) => ({ left, right })), explanation,
});

const drill = (
  slug: string,
  title: string,
  summary: string,
  heading: string,
  body: string[],
  examples: [string, string][],
  exercises: Ex[],
): Lesson => {
  const seconds = exercises.reduce((t, e) => t + SECONDS[e.type], 0) + 45;
  return {
    slug,
    level: "EN-C2",
    number: 1,
    title,
    summary,
    duration: `${Math.round(seconds / 60)} min`,
    sections: [{ heading, body, examples: examples.map(([es, en]) => ({ es, en })) }],
    exercises,
  };
};

export const EN_C2_U06_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. Puns and double meanings, irony and understatement, humor
  // across the English-speaking world, homophones, homographs and
  // ambiguous headlines
  // ---------------------------------------------------------------------
  drill(
    "en-c2-humor-unit-drill-1",
    "Drill: Puns, Understatement and Humor Across Cultures",
    "Explain how a pun works, hear the two pronunciations of a homograph, decode understatement, litotes and deadpan irony, and recognize British, American, Irish and Australian styles of humor.",
    "Recap: how English jokes are built",
    [
      "Puns make one stretch of language carry two meanings: homophones (\"sole/soul\", \"knead/need\"), words with two senses (\"interest\", \"dough\") and idioms read literally (\"it grew on me\"). Homographs change pronunciation with meaning (a tear /tɪr/, to tear /ter/; a RE-cord, to re-CORD), and headlines that drop little words become ambiguous.",
      "Understatement says less than you mean (\"a bit chilly\" at minus ten); litotes denies the opposite (\"not exactly cheap\", \"I wouldn't say no\"); deadpan irony says the opposite with a straight face. Britain leans on self-deprecation, the US on exaggeration and the set-up and punchline, Ireland on storytelling and \"the craic\", Australia on banter.",
    ],
    [
      ["It's a pun on the two meanings of interest.", "Es un juego de palabras con los dos sentidos de \"interest\"."],
      ["The hotel is lovely, but it's not exactly cheap.", "El hotel es precioso, pero no es precisamente barato."],
      ["Oh, brilliant. The train's canceled.", "Ay, genial. Cancelaron el tren."],
      ["I'm hopeless with names, I'm afraid.", "Me temo que soy un desastre con los nombres."],
    ],
    [
      mc(
        "\"I used to work in a shoe recycling shop. It was sole destroying.\" What does the joke hinge on?",
        [
          "\"Sole\" (the bottom of a shoe) sounds exactly like \"soul\"",
          "\"Destroying\" has a second meaning in the shoe trade",
          "\"Recycling\" can also mean riding a bicycle again",
          "The shop was literally destroyed",
        ],
        0,
        "A homophone pun: \"soul-destroying\" means depressing and dull, and \"sole\" is the part of the shoe. Say it aloud and the second word appears.",
      ),
      lc(
        "I'm on a seafood diet. I see food and I eat it.",
        "What is the pun?",
        [
          "\"Seafood\" sounds like \"see food\"",
          "\"Diet\" also means a parliament",
          "\"Eat\" sounds like \"it\"",
          "The speaker only eats fish",
        ],
        0,
        "\"Seafood\" and \"see food\" are pronounced the same, so the diet is not about fish but about eating anything you see.",
      ),
      fb(
        "Sorry, I don't ___ it. What's the joke?",
        "get",
        "Perdón, no [lo capto]. ¿Dónde está la gracia?",
        [],
        "To understand a joke is to \"get\" it: \"I don't get it\". *I don't catch it is a calque of «no lo capto».",
      ),
      fb(
        "The whole joke ___ on the double meaning of the word bark.",
        "hinges",
        "Todo el chiste [depende] del doble sentido de la palabra \"bark\".",
        ["turns"],
        "\"The joke hinges on...\" is the standard way to name the key to a joke. It takes \"on\", like \"depend on\".",
      ),
      tr(
        "Es un juego de palabras con los dos significados de \"bark\".",
        "It's a pun on the two meanings of bark.",
        [
          "It's a play on the two meanings of bark.",
          "It's a pun on the two meanings of the word bark.",
          "It's a play on words with the two meanings of bark.",
          "It's a pun on the two senses of bark.",
          "It is a pun on the two meanings of bark.",
        ],
        "\"A pun on\" or \"a play on\" names the word that carries two meanings («juego de palabras con»). \"Bark\" is a dog's sound and the outside of a tree.",
      ),
      mc(
        "\"I used to be a train driver, but I got sidetracked.\" Why is this a pun?",
        [
          "\"Sidetracked\" means distracted, and a train can literally be moved onto a side track",
          "\"Driver\" can also mean a golf club",
          "\"Train\" can also mean to practice",
          "It isn't a pun; it's a true story",
        ],
        0,
        "It follows the \"I used to be a..., but...\" frame: the second half uses a word from that job in its everyday sense.",
      ),
      tr(
        "Los estudiantes le jugaron una broma a la maestra.",
        "The students played a prank on the teacher.",
        [
          "The students played a joke on the teacher.",
          "The students pulled a prank on the teacher.",
          "The students played a trick on the teacher.",
          "The students played a prank on their teacher.",
          "The students played a joke on their teacher.",
          "The students pulled a prank on their teacher.",
          "The students played a trick on their teacher.",
        ],
        "«Jugar/gastar una broma a alguien» is \"play a prank (or joke) on someone\", with \"on\". *Made a joke to the teacher would mean telling her a funny story.",
      ),
      mc(
        "\"She was close to the door, so she decided to close it.\" How are the two words \"close\" pronounced?",
        [
          "The first ends in an /s/ sound, the second in a /z/ sound",
          "Both end in a /z/ sound",
          "Both end in an /s/ sound",
          "The first ends in a /z/ sound, the second in an /s/ sound",
        ],
        0,
        "A homograph: the adjective \"close\" (near) is /kloʊs/; the verb \"close\" (shut) is /kloʊz/. Decide the grammar first, then the sound.",
      ),
      mc(
        "\"The farm will produce more this year.\" Where is the stress in \"produce\"?",
        [
          "On the second syllable: pro-DUCE",
          "On the first syllable: PRO-duce",
          "Equally on both syllables",
          "It depends on the speaker's accent only",
        ],
        0,
        "Noun/verb pairs shift stress: the noun is PRO-duce (fruit and vegetables), the verb is pro-DUCE, like RE-cord / re-CORD.",
      ),
      dt(
        "The nurse wound a bandage around the wound.",
        "Same spelling, two sounds: the verb \"wound\" (past of \"wind\") is /waʊnd/; the noun \"wound\" (an injury) is /wuːnd/.",
      ),
      mc(
        "\"The man who hunts ducks out on weekends.\" What does \"ducks\" mean in this sentence?",
        [
          "It's a verb: he avoids his duties (ducks out) on weekends",
          "It's a noun: he hunts ducks on weekends",
          "It's an adjective describing the man",
          "It's a noun: the ducks go out on weekends",
        ],
        0,
        "A garden-path sentence: you first read \"hunts ducks\" as verb + object, then hit \"out\" and must reparse. \"The man who hunts\" is the subject, and \"ducks out\" (escapes, slips away) is the verb.",
      ),
      mc(
        "Your colleague says the product launch \"could have gone better\". The website crashed for eight hours. What does she mean?",
        [
          "It went very badly",
          "It went well, with a few small problems",
          "It went exactly as expected",
          "She doesn't know yet how it went",
        ],
        0,
        "Understatement: the softener is far too small for the facts. Spanish humor leans toward exaggeration, so learners often take this literally and underestimate the problem.",
      ),
      tr(
        "Me preocupa un poco que el carro esté echando humo.",
        "I'm slightly concerned that the car is smoking.",
        [
          "I'm a bit concerned that the car is smoking.",
          "I'm slightly worried that the car is smoking.",
          "I'm a bit worried that the car is smoking.",
          "I'm slightly concerned that the car is giving off smoke.",
          "I'm a little worried that the car is smoking.",
          "I'm a little concerned that the car is smoking.",
          "I'm slightly concerned the car is smoking.",
          "I'm a bit worried the car is smoking.",
        ],
        "Deadpan understatement: \"slightly\" or \"a bit\" clashes with an alarming fact. The humor lies in the mismatch.",
      ),
      fb(
        "The view is spectacular, but the hotel is not ___ cheap.",
        "exactly",
        "La vista es espectacular, pero el hotel no es [precisamente] barato.",
        [],
        "Litotes: \"not exactly cheap\" means expensive. «No es precisamente» is the same move in Spanish.",
      ),
      tr(
        "No me vendría mal un café.",
        "I wouldn't say no to a coffee.",
        [
          "I wouldn't say no to a cup of coffee.",
          "I wouldn't mind a coffee.",
          "I wouldn't mind a cup of coffee.",
          "I could use a coffee.",
          "I could do with a coffee.",
        ],
        "\"I wouldn't say no to...\" and \"I wouldn't mind...\" mean \"yes, please\" by denying the opposite. *It wouldn't come badly to me is a calque.",
      ),
      fb(
        "She's run three marathons this year; she's no ___ to hard training.",
        "stranger",
        "Corrió tres maratones este año; [sabe muy bien lo que es] entrenar duro.",
        [],
        "\"Be no stranger to\" = know something very well. The negative \"no stranger\" affirms a strong positive.",
      ),
      tr(
        "Tu presentación no estuvo nada mal.",
        "Your presentation wasn't bad at all.",
        ["Your presentation was not bad at all.", "Your presentation wasn't half bad."],
        "\"Not bad at all\" is real praise, warmer than a flat \"not bad\". In British English, \"not half bad\" is warmer still.",
      ),
      mc(
        "Your bus drives past without stopping in the pouring rain. Your friend says, deadpan, \"Oh, perfect.\" Which reply shows you got it?",
        [
          "Yeah, just what we needed.",
          "Really? Why is it perfect?",
          "No, I think it's terrible.",
          "Yes, the weather is perfect today.",
        ],
        0,
        "Deadpan irony gives no laugh or wink: the clash between \"perfect\" and the facts is the cue. Answering literally breaks the joke.",
      ),
      lc(
        "Another two-hour meeting about making meetings shorter. Can't wait.",
        "How does the speaker feel about the meeting?",
        [
          "They are dreading it and find it absurd",
          "They are genuinely excited about it",
          "They think it will be short",
          "They have forgotten when it is",
        ],
        0,
        "Dry irony: \"Can't wait\" in a dull situation means the opposite. The flat delivery is the signal.",
      ),
      mc(
        "A British manager calls your plan to change suppliers next week \"a very brave proposal\". What is she most likely saying?",
        [
          "That the plan is risky and probably unwise",
          "That you are a courageous employee",
          "That the plan should start immediately",
          "That she fully supports the plan",
        ],
        0,
        "\"Very brave\" is a polite phrase with a hidden meaning in British English: it often means \"bold to the point of foolish\".",
      ),
      tr(
        "Con el debido respeto, creo que las cifras están desactualizadas.",
        "With all due respect, I think the figures are out of date.",
        [
          "With all due respect, I think the figures are outdated.",
          "With all due respect, I think the numbers are out of date.",
          "With all due respect, I think the numbers are outdated.",
          "With all due respect, I believe the figures are out of date.",
        ],
        "\"With all due respect\" almost always introduces disagreement, sometimes strong disagreement. It is not a compliment.",
      ),
      wo(
        "I'm hopeless with maps; I once got lost in my own building.",
        "Soy un desastre con los mapas; una vez me perdí en mi propio edificio.",
        "Self-deprecation, the British way to seem modest and approachable: \"hopeless with\" + noun.",
      ),
      tr(
        "Toco un poco la guitarra, nada serio.",
        "I just dabble in the guitar, nothing serious.",
        [
          "I dabble in the guitar, nothing serious.",
          "I just dabble in guitar, nothing serious.",
          "I play the guitar a little, nothing serious.",
          "I play a little guitar, nothing serious.",
          "I play the guitar a bit, nothing serious.",
          "I just play the guitar a little, nothing serious.",
        ],
        "\"Dabble in\" = do something casually. British speakers often say it about a skill they are actually good at.",
      ),
      mc(
        "A colleague's paintings are in a gallery, but she says, \"Oh, I just dabble.\" What's the polite reaction?",
        [
          "Dabble? Your work is in a gallery!",
          "Yes, it shows.",
          "Then you should take some classes.",
          "Why would you exhibit them, then?",
        ],
        0,
        "Self-deprecation is not a real confession. The polite move is to contradict it lightly, never to agree.",
      ),
      tr(
        "Hacía tanto calor que se derretían los semáforos.",
        "It was so hot that the traffic lights were melting.",
        ["It was so hot the traffic lights were melting.", "It was so hot that the traffic lights were melting!"],
        "American tall-tale exaggeration: \"so + adjective + (that) + absurd result\". The bigger the claim, the clearer the joke.",
      ),
      fb(
        "We went to my cousin's wedding in Dublin and the ___ was mighty.",
        "craic",
        "Fuimos a la boda de mi prima en Dublín y [lo pasamos en grande].",
        ["crack"],
        "Irish \"the craic\" (pronounced like \"crack\") is fun, good company and conversation. \"The craic was mighty\" = we had a great time.",
      ),
      mt(
        "Match each term with its meaning.",
        [
          ["the punchline", "the final line that delivers the joke"],
          ["a dad joke", "a corny, innocent pun"],
          ["take the mickey", "tease or make fun of someone"],
          ["an in-joke", "a joke only a group of insiders gets"],
          ["deadpan", "with a completely straight face"],
        ],
        "The vocabulary for talking about humor: these terms let you name what is going on instead of explaining the whole joke.",
      ),
      dt(
        "They're not sure whether their flight will leave on time.",
        "Homophones in one sentence: \"they're\" sounds like \"their\" and \"there\", and \"whether\" like \"weather\". Choose the spelling from the grammar.",
      ),
      tr(
        "Era una broma interna; había que estar ahí.",
        "It was an in-joke; you had to be there.",
        [
          "It was an inside joke; you had to be there.",
          "It was an in-joke. You had to be there.",
          "It was an inside joke. You had to be there.",
        ],
        "\"An in-joke\" (US also \"an inside joke\") is one of the kinds of humor that travel badly. \"You had to be there\" is the standard admission.",
      ),
      mc(
        "Which sentence is correct?",
        [
          "My brother played a prank on me.",
          "My brother made a prank to me.",
          "My brother did a joke to me.",
          "My brother gave me a prank.",
        ],
        0,
        "You \"play a prank/joke on\" someone, \"tell\" or \"crack\" a joke, and \"get\" a joke. Spanish «hacer una broma a alguien» leads to *made a prank to me.",
      ),
      dt(
        "Irony rarely comes across well in a text message.",
        "\"Comes across\" (is understood as intended) links as one unit, /kʌmz əˈkrɔs/.",
      ),
      wo(
        "The joke would have been funnier if I hadn't had to explain it.",
        "El chiste habría sido más gracioso si no hubiera tenido que explicarlo.",
        "Explaining a joke is famously said to kill it. Note the third conditional with \"hadn't had to\".",
      ),
      sp(
        "I wouldn't say no to a slice of that cake.",
        "No me vendría mal una rebanada de ese pastel.",
        "Stress \"wouldn't\" and \"no\"; let \"slice of that cake\" run together.",
        "Litotes as a polite way to accept: it means \"Yes, please\".",
      ),
      sp(
        "Oh, brilliant. The Wi-Fi's down again.",
        "Ay, genial. Se cayó el wifi otra vez.",
        "Say \"brilliant\" flat and slow: deadpan, no smile in the voice.",
        "Ironic \"brilliant\" in a bad situation: the words clash with the facts.",
      ),
    ],
  ),
  // ---------------------------------------------------------------------
  // Drill 2. Irony vs sarcasm, banter and comebacks, informal spoken
  // English, paronyms and confusables, and a whole-unit mix
  // ---------------------------------------------------------------------
  drill(
    "en-c2-humor-unit-drill-2",
    "Drill: Sarcasm, Banter, Informal Speech and Confusables",
    "Tell irony from sarcasm and friendly from hostile teasing, answer banter with a natural comeback, sound relaxed with vague language and fillers, and choose correctly between affect/effect, imply/infer, economic/economical and similar pairs.",
    "Recap: tone, teasing, register and confusables",
    [
      "Irony can be kind; sarcasm has a target (\"Oh, you're early\" to someone late); litotes denies the opposite (\"no small feat\"). Some phrases are almost always sarcastic: \"Yeah, right\", \"You don't say!\", \"Thanks for nothing\". Answer friendly teasing lightly (\"Guilty as charged\", \"Look who's talking!\", \"Says the person who...\") and apologize simply if you go too far (\"Sorry, that was out of line\").",
      "Vague language (\"seven-ish\", \"or something\", \"and stuff\") and fillers (\"I mean\", \"actually\" = «en realidad») sound natural in conversation, not in an interview. Confusables: affect (verb) / effect (noun), imply (speaker) / infer (listener), economic / economical, historic / historical, continual / continuous, discreet / discrete.",
    ],
    [
      ["You'll finish it tonight? Yeah, right.", "¿Que lo vas a terminar esta noche? Sí, claro."],
      ["Says the man who still prints his emails.", "Dijo el que todavía imprime sus correos."],
      ["She's a photographer or something.", "Es fotógrafa o algo así."],
      ["The delay didn't affect our plans.", "El retraso no afectó nuestros planes."],
    ],
    [
      mc(
        "Your friend arrives an hour late to the movie. You say, \"Oh, you're early. It only started an hour ago.\" What is this?",
        ["Sarcasm", "Litotes", "Understatement", "Banter that cannot offend"],
        0,
        "Irony with a target and an edge is sarcasm. Irony about a situation (\"Lovely weather\") has no victim; this remark mocks a person.",
      ),
      mc(
        "\"Finishing that degree while working full time was no small feat.\" Which figure is this?",
        ["Litotes", "Sarcasm", "Hyperbole", "Deadpan irony"],
        0,
        "Litotes affirms by denying the opposite: \"no small feat\" means a big achievement.",
      ),
      mt(
        "Match each sarcastic phrase with what it really means.",
        [
          ["Yeah, right.", "I don't believe you."],
          ["You don't say!", "That's obvious."],
          ["Thanks for nothing.", "You didn't help at all."],
          ["Like that's going to happen.", "It will never happen."],
          ["Tell me something I don't know.", "That's not news to me."],
        ],
        "These phrases are sarcastic almost by default, especially with a long, falling tone. Taking them literally is a classic learner mistake.",
      ),
      tr(
        "¿Que va a llegar temprano? Sí, claro.",
        "He's going to arrive early? Yeah, right.",
        [
          "He's going to be early? Yeah, right.",
          "He'll arrive early? Yeah, right.",
          "He'll be early? Yeah, right.",
          "She's going to arrive early? Yeah, right.",
          "She's going to be early? Yeah, right.",
          "She'll be early? Yeah, right.",
          "He's going to get here early? Yeah, right.",
        ],
        "Sarcastic «sí, claro» is \"Yeah, right\". *Yes, of course would sound sincere in English.",
      ),
      lc(
        "Nice of you to join us.",
        "A teacher says this, in front of the class, to a student who walks in twenty minutes late. How is it meant?",
        [
          "As a sarcastic rebuke",
          "As a warm welcome",
          "As friendly banter between equals",
          "As a genuine thank-you",
        ],
        0,
        "Same words, different force: from a friend it's banter; from someone with power, in public, to a target who can't answer back, it's a rebuke.",
      ),
      tr(
        "No hace falta ser sarcástico.",
        "There's no need to be sarcastic.",
        ["There is no need to be sarcastic.", "You don't need to be sarcastic.", "You don't have to be sarcastic.", "No need to be sarcastic."],
        "\"There's no need to...\" is the natural way to object to a tone. Note the stress: sar-CAS-tic.",
      ),
      fb(
        "Wait, are you winding me ___? You didn't really sell my bike?",
        "up",
        "Espera, ¿me estás [tomando el pelo]? ¿De verdad no vendiste mi bici?",
        [],
        "British \"wind someone up\" = tease them to get a reaction. Its American cousin is \"mess with someone\".",
      ),
      mc(
        "Which verb suggests the teasing is unkind or unfair, not friendly?",
        ["pick on", "rib", "kid", "pull someone's leg"],
        0,
        "\"Pick on someone\" means bully or criticize unfairly. \"Rib\", \"kid\" and \"pull someone's leg\" are friendly.",
      ),
      tr(
        "¡Mira quién habla!",
        "Look who's talking!",
        ["Look who is talking!"],
        "The direct equivalent of «¡Mira quién habla!»: a comeback that turns the teasing around.",
      ),
      kw(
        "SAYS",
        "You're criticizing my driving, but you failed your driving test three times.",
        "___ failed their driving test three times!",
        "Says the person who",
        ["Says the guy who", "Says the man who", "Says the woman who", "Says the one who"],
        "\"Says the person who...\" + something the teaser does is a quick, friendly comeback, close to «dijo el que...».",
      ),
      wo(
        "Rub it in, why don't you?",
        "Anda, sigue echándome sal en la herida.",
        "Playing wounded with obvious irony: a light reply that shows you got the joke and are not hurt.",
      ),
      sp(
        "Guilty as charged. What can I say? It's a gift.",
        "Culpable, lo confieso. ¿Qué quieres que te diga? Es un don.",
        "Short, quick lines; smile on \"gift\".",
        "Agree and exaggerate: the easiest comeback to friendly teasing.",
      ),
      mc(
        "Your joke about a colleague's divorce clearly hurt her. Which response is best?",
        [
          "Sorry, that was out of line.",
          "Can't you take a joke?",
          "Relax, I was only kidding.",
          "No offense, but it's kind of true.",
        ],
        0,
        "Apologize simply and sincerely. \"Can't you take a joke?\" blames the hurt person, and \"No offense, but...\" makes it worse.",
      ),
      tr(
        "Perdón, me pasé.",
        "Sorry, I went too far.",
        ["Sorry, that was out of line.", "Sorry, I went too far there.", "Sorry, I overstepped.", "Sorry, that was uncalled for.", "Sorry, I crossed the line."],
        "«Me pasé» is \"I went too far\" or \"that was out of line\". *I passed myself means nothing.",
      ),
      tr(
        "Llego como a las ocho.",
        "I'll be there at eight-ish.",
        [
          "I'll be there around eight.",
          "I'll be there at around eight.",
          "I'll be there at about eight.",
          "I'll be there eight-ish.",
          "I'll get there around eight.",
          "I'll get there at eight-ish.",
          "I'll get there at about eight.",
          "I'll arrive around eight.",
          "I'll be there around eight-ish.",
        ],
        "\"-ish\" or \"around\" makes the time deliberately vague, which sounds relaxed. Note the future \"I'll be there\" for an arrival, not the present *I arrive.",
      ),
      tr(
        "Es arquitecta o algo así.",
        "She's an architect or something.",
        ["She's an architect or something like that.", "She is an architect or something.", "She's an architect or whatever."],
        "\"Or something\" closes the statement vaguely, like «o algo así». Keep the article: \"an architect\".",
      ),
      fb(
        "___, I think the deadline is Thursday, not Friday.",
        "Actually",
        "[En realidad], creo que la fecha límite es el jueves, no el viernes.",
        [],
        "\"Actually\" means «en realidad» and softens a correction. It never means «actualmente».",
      ),
      tr(
        "Actualmente trabajo desde casa.",
        "I currently work from home.",
        [
          "Currently, I work from home.",
          "I'm currently working from home.",
          "At the moment, I work from home.",
          "At the moment, I'm working from home.",
          "Right now, I'm working from home.",
          "These days, I work from home.",
          "Currently I'm working from home.",
        ],
        "«Actualmente» is \"currently\", \"at the moment\" or \"these days\". *Actually I work from home would mean «en realidad trabajo desde casa».",
      ),
      mc(
        "In a job interview, which answer strikes the right register?",
        [
          "I was extremely disappointed when the project was canceled.",
          "Honestly, I was totally gutted when they axed the project.",
          "I was, like, super bummed about the project and stuff.",
          "The project got canned, which was a real pain, you know?",
        ],
        0,
        "Slang and vague tags make you sound natural with friends but unprofessional at an interview. Save \"gutted\" and \"bummed\" for informal talk.",
      ),
      mc(
        "An American coworker says, \"I'm beat. I'm heading home.\" What does she mean?",
        ["She's exhausted", "She lost a game", "She's been hit", "She's very disappointed"],
        0,
        "US \"beat\" = exhausted (UK \"knackered\"). \"Disappointed\" would be US \"bummed\" or UK \"gutted\".",
      ),
      dt(
        "We just hung out at her place and watched movies and stuff.",
        "\"Hung out\" links as /hʌŋ aʊt/, and \"and stuff\" shrinks to /ən stʌf/.",
      ),
      fb(
        "The new rules will ___ every employee who works remotely.",
        "affect",
        "Las nuevas reglas [afectarán a] todos los empleados que trabajan a distancia.",
        [],
        "\"Affect\" is the verb («afectar»); \"effect\" is normally the noun («efecto»): \"The rules will have an effect on...\".",
      ),
      tr(
        "¿Estás insinuando que no hice mi parte?",
        "Are you implying that I didn't do my part?",
        [
          "Are you implying I didn't do my part?",
          "Are you implying that I didn't do my share?",
          "Are you implying I didn't do my share?",
          "Are you suggesting that I didn't do my part?",
          "Are you suggesting I didn't do my part?",
        ],
        "The speaker \"implies\" («insinuar»); the listener \"infers\" («deducir»). *Are you inferring that... is a common native error careful writers avoid.",
      ),
      tr(
        "Por su tono, deduje que estaba molesta.",
        "From her tone, I inferred that she was annoyed.",
        [
          "From her tone, I inferred she was annoyed.",
          "From her tone, I inferred that she was upset.",
          "From her tone, I inferred she was upset.",
          "From her tone of voice, I inferred that she was annoyed.",
          "I inferred from her tone that she was annoyed.",
          "I inferred from her tone that she was upset.",
        ],
        "The listener infers. *I implied that she was annoyed would mean you hinted it to someone else.",
      ),
      tr(
        "El puesto implica trabajar los fines de semana.",
        "The position involves working on weekends.",
        [
          "The position involves working weekends.",
          "The job involves working on weekends.",
          "The job involves working weekends.",
          "The position involves weekend work.",
          "The job involves weekend work.",
          "The position entails working on weekends.",
          "The position entails working weekends.",
          "The job entails working weekends.",
        ],
        "False friend: «implicar» here is \"involve\" or \"entail\", followed by -ing. English \"imply\" only means «insinuar».",
      ),
      fb(
        "This hybrid is very ___ to run: it barely uses any fuel.",
        "economical",
        "Este híbrido es muy [económico] de mantener: casi no gasta combustible.",
        [],
        "\"Economical\" = not wasting money or resources. \"Economic\" is about the economy (\"economic growth\"), and a cheap restaurant is \"cheap\" or \"affordable\", never *economic.",
      ),
      fb(
        "Winning the league after fifty years was a ___ moment for the town.",
        "historic",
        "Ganar la liga después de cincuenta años fue un momento [histórico] para el pueblo.",
        [],
        "\"Historic\" = important, likely to be remembered. \"Historical\" = about the past (\"historical records\"). Spanish «histórico» covers both.",
      ),
      mc(
        "\"The neighbors' ___ arguments, night after night for a month, kept us awake.\" Which word fits best?",
        ["continual", "continuous", "discrete", "historical"],
        0,
        "\"Continual\" = repeated again and again, with breaks, and usually annoying. \"Continuous\" = with no break at all (\"continuous rain for three days\").",
      ),
      lc(
        "In principle, we agree, but we need to see the numbers first.",
        "What does the speaker mean?",
        [
          "They agree in general but haven't committed yet",
          "They agree as a matter of moral principle",
          "They agreed at the beginning but have changed their minds",
          "They refuse to agree until the end",
        ],
        0,
        "\"In principle\" = in general, in theory. Never confuse \"principle\" (a rule or belief) with «principio» meaning beginning, which is \"beginning\".",
      ),
      tr(
        "El equipo hizo una temporada discreta.",
        "The team had a modest season.",
        [
          "The team had a fairly modest season.",
          "The team had an unremarkable season.",
          "The team had a mediocre season.",
          "The team had an average season.",
        ],
        "False friend: «discreto» meaning modest or mediocre is never \"discreet\", which means tactful (\"I'll be discreet\").",
      ),
      wo(
        "Don't worry, I'll be discreet about your new job.",
        "No te preocupes, seré discreta con lo de tu nuevo trabajo.",
        "\"Discreet\" (tactful) and \"discrete\" (separate) are homophones; only the spelling tells them apart.",
      ),
      mc(
        "Which sentence is correct?",
        [
          "From his silence, I inferred he was angry.",
          "From his silence, I implied he was angry.",
          "His silence inferred that he was angry.",
          "From his silence, I affected he was angry.",
        ],
        0,
        "The listener infers from evidence; the speaker (or a silence) implies. \"His silence implied that he was angry\" would also be correct.",
      ),
      dt(
        "Her compliment was the perfect complement to a great evening.",
        "Homophones: \"compliment\" (praise) and \"complement\" (something that completes) sound identical; only the middle vowel letter differs.",
      ),
      dt(
        "Sorry, that was a bit below the belt.",
        "\"A bit below the belt\" links as /ə bɪt bɪˈloʊ ðə belt/: an understated way to say a joke went too far.",
      ),
      sp(
        "To be honest, I'm absolutely beat. Can we grab a coffee tomorrow instead?",
        "La verdad, estoy molido. ¿Podemos tomar un café mañana mejor?",
        "\"To be honest\" is one quick unit; stress \"beat\" and \"tomorrow\".",
        "A frank opener, US slang and a relaxed suggestion: natural, informal and polite.",
      ),
    ],
  ),
];
