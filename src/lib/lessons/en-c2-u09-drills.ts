// Synced from cheneygross-afk/lengo:src/lib/lessons/en-c2-u09-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Required drill lessons for EN-C2 unit u09 (exclamations, emphasis, reactions and word building): a short recap, then graded practice.

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

const fe = (prompt: string, sentence: string, answer: string, altAnswers: string[], explanation: string): Ex =>
  altAnswers.length
    ? { type: "fill-blank", prompt, sentence, answer, altAnswers, explanation }
    : { type: "fill-blank", prompt, sentence, answer, explanation };

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

export const EN_C2_U09_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. Exclamations, emphasis, the intensity scale and reactions
  // ---------------------------------------------------------------------
  drill(
    "en-c2-exclamations-word-building-unit-drill-1",
    "Drill: Exclamations, Intensifiers and Reactions",
    "React like a native speaker with what/how/such/so, emphatic do, the right intensifier for each adjective, emphatic question words and echo questions, without the classic *What a news! or *Ah, yes? errors.",
    "Recap: exclamations, intensity and reactions",
    [
      "\"What\" goes with a noun (\"a/an\" only for singular countables, so never *What a news!), \"how\" with an adjective or adverb in statement order, \"such\" with a noun phrase and \"so\" with an adjective. Emphatic \"do/does/did\" is followed by the base form.",
      "Extreme adjectives (exhausted, filthy, superb) take \"absolutely\" or \"utterly\", never \"very\"; many intensifiers have fixed partners (downright rude, sheer luck, highly unlikely, by far the best). React to news with echo questions built from the speaker's auxiliary (\"Has she?\", \"Don't you?\") and tokens like \"Tell me about it\" or \"No wonder\".",
    ],
    [
      ["What useful advice!", "¡Qué consejo tan útil!"],
      ["I did lock the door, I promise.", "Que sí cerré la puerta con llave, te lo prometo."],
      ["The bathroom was absolutely filthy.", "El baño estaba asquerosísimo."],
      ["She's just resigned. / Has she?", "Acaba de renunciar. / ¿Ah, sí?"],
    ],
    [
      mc(
        "Which is the natural English for «¡Qué consejo tan útil!»?",
        [
          "What useful advice!",
          "What a useful advice!",
          "How useful advice!",
          "What an advice so useful!",
        ],
        0,
        "\"Advice\" is uncountable, so the noun pattern takes no article: \"What useful advice!\". *What a useful advice treats it as countable, \"how\" cannot go before a noun phrase, and English has no equivalent of «tan» after the noun.",
      ),
      fb(
        "___ awful traffic! We've been stuck here for an hour.",
        "What",
        "¡[Qué] tráfico más horrible! Llevamos una hora aquí atrapados.",
        [],
        "A noun (\"traffic\") needs \"what\", not \"how\". \"Traffic\" is uncountable in English, so there is no \"a\": *What a traffic wrongly treats it as countable.",
      ),
      tr(
        "¡Qué suerte tuvimos con el clima!",
        "We were so lucky with the weather!",
        [
          "How lucky we were with the weather!",
          "What luck we had with the weather!",
          "We were really lucky with the weather!",
          "We were so lucky with the weather.",
        ],
        "«¡Qué suerte!» becomes \"How lucky...!\", \"What luck...!\" or \"We were so lucky\". \"Luck\" and \"weather\" are both uncountable, so *What a luck and *a weather are impossible.",
      ),
      tr(
        "¡Qué bien cocina tu hermano!",
        "How well your brother cooks!",
        [
          "Your brother cooks so well!",
          "Your brother is such a good cook!",
          "What a good cook your brother is!",
          "Your brother cooks really well!",
        ],
        "\"How\" + adverb keeps statement word order: \"How well your brother cooks!\". *How well does your brother cook! is a question, not an exclamation. \"Such a good cook\" moves the idea into a noun phrase, which is just as natural.",
      ),
      tr(
        "¡Qué detalle de tu parte!",
        "How thoughtful of you!",
        [
          "That's so thoughtful of you!",
          "That's really thoughtful of you!",
          "So thoughtful of you!",
          "How kind of you!",
          "That's so kind of you!",
          "That's very thoughtful of you!",
        ],
        "Reactions to someone's kindness use \"of you\": \"How thoughtful of you!\". *How thoughtful for you is a common slip from «para ti», and *What thoughtful! puts \"what\" before a bare adjective.",
      ),
      fb(
        "They're ___ generous people that they never let us pay.",
        "such",
        "Son gente [tan] generosa que nunca nos dejan pagar.",
        [],
        "Before a noun phrase (\"generous people\") English uses \"such\", not \"so\". *They're so generous people is a direct calque of «tan generosa».",
      ),
      fb(
        "There were ___ many complaints that we took the form offline.",
        "so",
        "Hubo [tantas] quejas que retiramos el formulario de la web.",
        [],
        "«Tantos/tantas» with a plural countable noun is \"so many\"; with an uncountable noun it would be \"so much\". \"Such\" is wrong here because \"many\" is a quantifier, not an adjective.",
      ),
      mc(
        "Which sentence is correct?",
        [
          "That's such a good idea!",
          "That's a such good idea!",
          "That's so good idea!",
          "That's such good an idea!",
        ],
        0,
        "The article follows \"such\": \"such a good idea\". \"So\" cannot go directly before a noun phrase, and the formal alternative is \"so good an idea\", not *such good an idea.",
      ),
      wo(
        "How quickly the year has gone by!",
        "¡Qué rápido se ha pasado el año!",
        "\"How\" + adverb, then the subject and verb in statement order: \"How quickly the year has gone by!\". Inverting (*How quickly has the year gone by!) turns it into a question.",
      ),
      lc(
        "You're kidding! She actually quit after three weeks?",
        "How is the speaker reacting?",
        [
          "With disbelief at surprising news",
          "With sympathy for bad news",
          "With boredom, as if the news were obvious",
          "With agreement, from shared experience",
        ],
        0,
        "\"You're kidding!\" is a disbelief token, like «¡No me digas!» or «¡No puede ser!». The follow-up \"actually\" confirms the surprise.",
      ),
      fb(
        "I ___ lock the door; I remember checking it twice.",
        "did",
        "[Sí que] cerré la puerta con llave; me acuerdo de haberlo revisado dos veces.",
        [],
        "Emphatic \"did\" contradicts a doubt and is followed by the base form: \"I did lock\". *I did locked doubles the past tense. In speech, \"did\" carries heavy stress.",
      ),
      tr(
        "¡Que sí te dije que la reunión era a las diez!",
        "I did tell you the meeting was at ten!",
        [
          "I did tell you that the meeting was at ten!",
          "I did tell you the meeting was at 10!",
          "I did tell you that the meeting was at 10!",
          "I did tell you the meeting was at ten o'clock!",
        ],
        "«Que sí te dije» is emphatic \"did\" + base form: \"I did tell you\". The reported clause backshifts to \"was\". Avoid *I said you, which also breaks the pattern \"tell someone\".",
      ),
      tr(
        "No estoy de acuerdo, pero sí que entiendo tu preocupación.",
        "I don't agree, but I do understand your concern.",
        [
          "I disagree, but I do understand your concern.",
          "I don't agree, but I do understand your worry.",
          "I don't agree, but I do understand why you're worried.",
          "I disagree, but I do understand why you're worried.",
        ],
        "Emphatic \"do\" is the standard way to concede a point: «sí que» becomes \"I do understand\", with the stress on \"do\". *I yes understand is a literal calque.",
      ),
      mc(
        "Which sentence sounds natural to a native speaker?",
        [
          "After the hike we were absolutely exhausted.",
          "After the hike we were very exhausted.",
          "After the hike we were absolutely tired.",
          "After the hike we were slightly exhausted.",
        ],
        0,
        "\"Exhausted\" is an extreme adjective, so it takes \"absolutely\", not \"very\". \"Absolutely\" does not combine with a gradable word like \"tired\", and softeners such as \"slightly\" clash with extreme adjectives.",
      ),
      fb(
        "The hotel room was ___ filthy, so we asked for another one.",
        "absolutely",
        "La habitación del hotel estaba [completamente] asquerosa, así que pedimos otra.",
        ["completely", "totally", "utterly", "really"],
        "\"Filthy\" is the extreme rung of \"dirty\", so it takes \"absolutely\", \"completely\", \"totally\" or \"utterly\" (\"really\" works with both groups). *Very filthy is the typical error.",
      ),
      tr(
        "Es una oportunidad única.",
        "It's a unique opportunity.",
        [
          "This is a unique opportunity.",
          "It's a unique chance.",
          "It is a unique opportunity.",
          "This is a unique chance.",
        ],
        "\"Unique\" is an absolute adjective: in careful English it needs no intensifier. *A very unique opportunity, modeled on «muy única», is exactly what an editor would cut.",
      ),
      mt(
        "Match each intensifier with its most natural partner.",
        [
          ["downright", "rude"],
          ["sheer", "coincidence"],
          ["highly", "unlikely"],
          ["utterly", "pointless"],
          ["by far", "the best"],
        ],
        "\"Downright\" prefers negative words, \"sheer\" intensifies nouns, \"highly\" goes with probability and evaluation, \"utterly\" with negative or extreme adjectives, and \"by far\" with superlatives.",
      ),
      fb(
        "We only caught the last train by ___ luck.",
        "sheer",
        "Alcanzamos el último tren de [pura] suerte.",
        ["pure"],
        "«De pura suerte» is \"by sheer luck\" (or \"by pure luck\"). \"Sheer\" and \"pure\" intensify nouns; *by very luck or *by total luck are not used.",
      ),
      tr(
        "Es, con diferencia, el mejor restaurante del barrio.",
        "It's by far the best restaurant in the neighborhood.",
        [
          "It's easily the best restaurant in the neighborhood.",
          "It's the best restaurant in the neighborhood by far.",
          "It is by far the best restaurant in the area.",
          "It's by far the best restaurant in the area.",
          "It's easily the best restaurant in the area.",
        ],
        "«Con diferencia» before a superlative is \"by far\" or \"easily\" (or \"by far\" at the end). Note \"the best... in the neighborhood\": after a superlative, a place takes \"in\", not *of.",
      ),
      fb(
        "She resigned on the ___ day the merger was announced.",
        "very",
        "Renunció [justo] el día en que se anunció la fusión.",
        [],
        "\"The very\" + noun marks exactness: \"on the very day\", \"the very thing I needed\". «Justo» here is not *just the day, which sounds like «solo el día».",
      ),
      tr(
        "Él, precisamente él, debería saber lo que es quedarse sin trabajo.",
        "He, of all people, should know what it's like to lose his job.",
        [
          "He of all people should know what it's like to lose his job.",
          "He, of all people, should know what it's like to lose your job.",
          "He, of all people, should know what it's like to be out of work.",
          "He, of all people, should know what it's like to lose a job.",
          "He of all people should know what it's like to lose a job.",
        ],
        "«Él, precisamente él» is \"he, of all people\", which marks him as the last person who should get this wrong. Note \"what it's like to\", not *how it is to, for «lo que es».",
      ),
      tr(
        "¿Pero qué diablos le pasó a tu celular?",
        "What on earth happened to your phone?",
        [
          "What on earth happened to your cell phone?",
          "Whatever happened to your phone?",
          "What the heck happened to your phone?",
          "What on earth happened to your cellphone?",
          "What the heck happened to your cell phone?",
        ],
        "Surprise or bafflement in a question: add \"on earth\" after the question word (\"What on earth...?\") or use the one-word \"whatever\". \"The heck\" is the informal, polite American version.",
      ),
      wo(
        "Where on earth did you put the car keys?",
        "¿Dónde demonios pusiste las llaves del carro?",
        "\"On earth\" follows the question word directly; the rest is a normal question with \"did\": \"Where on earth did you put...?\".",
      ),
      dt(
        "Why on earth would anyone pay that much for a sandwich?",
        "\"On earth\" links to \"why\": /waɪ ɒn ɜːrθ/. Write it as three words, unlike the one-word \"whatever\" or \"whoever\".",
      ),
      mc(
        "\"Her voice is quite amazing.\" What does \"quite\" mean here?",
        [
          "Absolutely, completely",
          "Fairly, to some degree",
          "Not very",
          "Almost, but not really",
        ],
        0,
        "Before an extreme adjective such as \"amazing\", \"quite\" intensifies (\"completely\"). Before a gradable adjective (\"quite good\") it softens. That is the trap.",
      ),
      tr(
        "Me muero de hambre; no he comido nada desde el desayuno.",
        "I'm starving; I haven't eaten anything since breakfast.",
        [
          "I'm starving. I haven't eaten anything since breakfast.",
          "I'm absolutely starving; I haven't eaten anything since breakfast.",
          "I'm absolutely starving. I haven't eaten anything since breakfast.",
          "I'm starving; I haven't had anything since breakfast.",
          "I'm starving. I haven't had anything since breakfast.",
        ],
        "\"Starving\" is the extreme rung of \"hungry\" and the natural match for «me muero de hambre». \"Since breakfast\" needs the present perfect, not *I didn't eat since.",
      ),
      fe(
        "Complete the echo question.",
        "A: My sister has just bought a farm. B: ___ she? What's she going to grow?",
        "Has",
        [],
        "Echo questions copy the speaker's auxiliary (\"has\") and keep the same polarity: \"Has she?\". *Ah, yes? would sound like you are confirming something, not reacting.",
      ),
      mc(
        "A colleague tells you, \"Tom's been promoted to director.\" Which reply is correct?",
        [
          "Has he? Good for him!",
          "Is he? Good for him!",
          "Did he? Good for him!",
          "Ah, yes? Good for him!",
        ],
        0,
        "\"Tom's been promoted\" contracts \"has\", not \"is\", so the echo is \"Has he?\". \"Did he?\" would need a past simple statement, and *Ah, yes? is a calque of «¿Ah, sí?».",
      ),
      tr(
        "¡Con razón estás de mal humor!",
        "No wonder you're in a bad mood!",
        [
          "It's no wonder you're in a bad mood!",
          "No wonder you're in such a bad mood!",
          "No wonder you're grumpy!",
        ],
        "«¡Con razón...!» or «¡Normal que...!» is \"No wonder...!\", followed by an ordinary indicative clause. *With reason you are in a bad mood is a word-for-word calque.",
      ),
      lc(
        "Fair enough. If you're swamped this week, we can do it next Monday.",
        "What is the speaker doing?",
        [
          "Accepting the other person's reason",
          "Complaining that the deal is unfair",
          "Asking for more information",
          "Refusing to wait any longer",
        ],
        0,
        "\"Fair enough\" accepts someone's reason, even without fully sharing it, like «Bueno, es razonable». It has nothing to do with fairness in a deal.",
      ),
      mc(
        "Which sentence is correct?",
        [
          "What terrible news about the factory! Everyone there is absolutely furious.",
          "What a terrible news about the factory! Everyone there is absolutely furious.",
          "What terrible news about the factory! Everyone there is very furious.",
          "How terrible news about the factory! Everyone there is absolutely furious.",
        ],
        0,
        "Two traps at once: \"news\" is uncountable (no \"a\") and takes \"what\", not \"how\"; \"furious\" is extreme, so \"absolutely\", never \"very\".",
      ),
      tr(
        "¡Ni que lo digas! Mi jefe hace exactamente lo mismo.",
        "Tell me about it! My boss does exactly the same thing.",
        [
          "Tell me about it! My boss does exactly the same.",
          "You can say that again! My boss does exactly the same thing.",
          "You can say that again! My boss does exactly the same.",
          "Tell me about it! My boss does the exact same thing.",
        ],
        "«¡Ni que lo digas!» is \"Tell me about it!\" (agreement from experience) or \"You can say that again!\". It does not invite the other person to tell you anything.",
      ),
      dt(
        "It's highly unlikely that the shipment will arrive before Friday.",
        "\"Highly\" collocates with \"unlikely\"; never *very much unlikely. Listen for the weak \"that\" /ðət/ before \"the shipment\".",
      ),
      sp(
        "Such a shame you missed the concert; the band was absolutely superb.",
        "Qué pena que te perdieras el concierto; la banda estuvo buenísima.",
        "Stress \"shame\", \"missed\", \"absolutely\" and \"superb\"; let \"such a\" and \"the\" shrink.",
        "\"Such a shame\" is the clipped noun pattern, and \"superb\" is extreme, so it takes \"absolutely\". Spanish «-ísimo» has no suffix in English: choose a stronger word or an intensifier.",
      ),
      sp(
        "Whoever gave you that idea? It's downright dangerous.",
        "¿Pero quién te dio esa idea? Es francamente peligrosa.",
        "Stress \"who-\" with a rising, incredulous tone, then \"downright\" and \"dangerous\".",
        "Emphatic \"whoever\" (one word) shows bafflement, like «¿Pero quién...?», and \"downright\" is the natural intensifier for a negative word like \"dangerous\".",
      ),
      dt(
        "What lovely weather we've had all week!",
        "\"Weather\" is uncountable, so no \"a\" after \"what\". Note \"weather\" /ˈwɛðər/, which sounds exactly like \"whether\".",
      ),
    ],
  ),

  // ---------------------------------------------------------------------
  // Drill 2. Diminutives, augmentatives, affixes and stress, plus a unit mix
  // ---------------------------------------------------------------------
  drill(
    "en-c2-exclamations-word-building-unit-drill-2",
    "Drill: Size, Attitude, Affixes and Stress",
    "Translate Spanish diminutives, augmentatives and pejoratives by meaning, choose the right negative and precise prefixes and suffixes, place the stress correctly in word families, and combine it all with the unit's exclamations and intensifiers.",
    "Recap: words instead of suffixes",
    [
      "English has no living -ito or -azo: translate the meaning. Brevity is \"a quick coffee\" or \"just a sec\", warmth is \"nice and warm\", size and affection is \"a lovely little cafe\"; admiration is \"a huge hit\" or \"a flash car\", a blow is usually a verb (\"slam the door\"), and contempt is a word like \"hovel\" or \"bossy\".",
      "Prefixes are chosen word by word (impossible, irresponsible, uncomfortable, dishonest; mis-, counter-, non-, pseudo-), and suffixes often move the stress: PHO-to-graph, pho-TO-gra-pher, pho-to-GRA-phic; a RE-cord, to re-CORD.",
    ],
    [
      ["Shall we grab a quick coffee?", "¿Nos tomamos un cafecito?"],
      ["She stormed out and slammed the door.", "Se fue dando un portazo."],
      ["That was completely irresponsible.", "Eso fue totalmente irresponsable."],
      ["Japan exports cars; cars are its main export.", "Japón exporta carros; los carros son su principal exportación."],
    ],
    [
      mc(
        "Which is the most natural English for «¿Nos tomamos un cafecito antes de la reunión?»?",
        [
          "Shall we grab a quick coffee before the meeting?",
          "Shall we take a little coffee before the meeting?",
          "Shall we take a coffeeette before the meeting?",
          "Shall we drink a small coffee before the meeting?",
        ],
        0,
        "The «-ito» here means brevity, not size, so English says \"a quick coffee\". \"A little coffee\" sounds like a small amount of liquid, and \"take\" a coffee is a Spanish calque.",
      ),
      tr(
        "Un momentito, que estoy buscando las llaves.",
        "Just a sec, I'm looking for my keys.",
        [
          "Just a second, I'm looking for my keys.",
          "Just a moment, I'm looking for my keys.",
          "Just a sec, I'm looking for the keys.",
          "Just a second, I'm looking for the keys.",
          "Just a moment, I'm looking for the keys.",
          "One sec, I'm looking for my keys.",
        ],
        "«Un momentito» is \"just a sec\" or \"just a moment\": the diminutive becomes \"just\", not *a little moment. English uses \"my keys\" where Spanish uses the article.",
      ),
      fb(
        "Drink your tea while it's ___ hot.",
        "nice and",
        "Tómate el té mientras está [bien] calentito.",
        [],
        "Spanish «calentito» expresses pleasant intensity, which English renders as \"nice and\" + adjective: \"nice and hot\", \"nice and quiet\", \"nice and slowly\".",
      ),
      tr(
        "Maneja despacito, que la calle está mojada.",
        "Drive nice and slowly; the road is wet.",
        [
          "Drive nice and slowly, the road is wet.",
          "Drive nice and slow; the road is wet.",
          "Drive nice and slow, the road is wet.",
          "Drive nice and slowly because the road is wet.",
          "Drive slowly; the road is wet.",
          "Drive slowly, the road is wet.",
        ],
        "«Despacito» becomes \"nice and slowly\" (\"nice and slow\" is common in American speech). English has no *slowlito; the warmth goes into \"nice and\".",
      ),
      tr(
        "Encontramos un restaurancito encantador cerca del hotel.",
        "We found a lovely little restaurant near the hotel.",
        [
          "We found a charming little restaurant near the hotel.",
          "We found a nice little restaurant near the hotel.",
          "We found a cute little restaurant near the hotel.",
        ],
        "Opinion adjective first, then \"little\" right before the noun: \"a lovely little restaurant\". *A little lovely restaurant breaks the fixed order, and English has no suffix like «-cito».",
      ),
      wo(
        "They run a charming little bookstore near the station.",
        "Tienen una librería pequeñita y encantadora cerca de la estación.",
        "\"Charming\" (opinion) comes before \"little\", which sits just before the noun and carries both size and affection.",
      ),
      mt(
        "Match each word with its Spanish equivalent.",
        [
          ["booklet", "folleto"],
          ["duckling", "patito"],
          ["kitchenette", "cocineta"],
          ["piglet", "cerdito"],
          ["seedling", "plantita de semillero"],
        ],
        "These suffixes (-let, -ling, -ette) are fossils: they live in fixed words, but you cannot add them to new ones. *Carlet or *tablette do not exist.",
      ),
      lc(
        "We're having a barbie this arvo, so don't forget your sunnies.",
        "Where is the speaker probably from, and what is planned?",
        [
          "Australia: a barbecue this afternoon",
          "Scotland: a doll party tonight",
          "The US: a picnic tomorrow morning",
          "Ireland: a beach trip this evening",
        ],
        0,
        "\"Barbie\" (barbecue), \"arvo\" (afternoon) and \"sunnies\" (sunglasses) are Australian clippings. They signal informality, not smallness: a barbie is not a small barbecue.",
      ),
      tr(
        "¡Ay, pobrecita! Se le cayó el helado.",
        "Oh, poor thing! She dropped her ice cream.",
        [
          "Oh, poor little thing! She dropped her ice cream.",
          "Aw, poor thing! She dropped her ice cream.",
          "Aw, poor little thing! She dropped her ice cream.",
          "Poor thing! She dropped her ice cream.",
        ],
        "«Pobrecito/pobrecita» is \"poor thing\" or \"poor little thing\". Note \"her ice cream\": English uses a possessive where Spanish uses «se le».",
      ),
      tr(
        "Su primer libro fue un exitazo.",
        "Her first book was a huge hit.",
        [
          "His first book was a huge hit.",
          "Her first book was a smash hit.",
          "His first book was a smash hit.",
          "Her first book was a massive hit.",
          "His first book was a massive hit.",
          "Her first book was a huge success.",
          "His first book was a huge success.",
        ],
        "«-azo» of admiration becomes an adjective with the right attitude: \"a huge hit\", \"a smash hit\". There is no suffix to add to \"success\".",
      ),
      fb(
        "Profits rose by a ___ 60% last year.",
        "whopping",
        "Las ganancias subieron [nada menos que] un 60 % el año pasado.",
        [],
        "\"Whopping\" is the informal size word that loves numbers: \"a whopping 60%\". It conveys the surprise of «nada menos que».",
      ),
      tr(
        "Mi hermano salió de la habitación dando un portazo.",
        "My brother slammed the door as he left the room.",
        [
          "My brother left the room and slammed the door.",
          "My brother slammed the door when he left the room.",
          "My brother left the room, slamming the door.",
          "My brother stormed out of the room, slamming the door.",
          "My brother slammed the door on his way out of the room.",
        ],
        "«Dar un portazo» is a verb in English: \"slam the door\". *Give a doorslam does not exist; the violence is already inside \"slam\".",
      ),
      fb(
        "A dog ran into the road and I had to ___ the brakes.",
        "slam on",
        "Un perro se metió en la calle y tuve que [dar un] frenazo.",
        ["hit", "jam on"],
        "«Dar un frenazo» is \"slam on the brakes\" (or \"hit the brakes\"). Again, an «-azo» noun becomes a strong English verb.",
      ),
      mc(
        "Which is the natural English for «Me dio un codazo para que me fijara en el mesero»?",
        [
          "She nudged me so that I'd notice the waiter.",
          "She gave me an elbowing so I'd notice the waiter.",
          "She elbowed to me so I'd notice the waiter.",
          "She made me an elbow so I'd notice the waiter.",
        ],
        0,
        "A gentle «codazo» is \"nudge someone\" (\"elbow someone\" is rougher). Both are transitive verbs with a direct object: no \"to\", and no *give an elbowing.",
      ),
      tr(
        "Se dio un golpazo con la bicicleta.",
        "He had a nasty fall off his bike.",
        [
          "She had a nasty fall off her bike.",
          "He had a nasty fall from his bike.",
          "She had a nasty fall from her bike.",
          "He had a bad fall off his bike.",
          "She had a bad fall off her bike.",
          "He had a nasty fall off his bicycle.",
          "She had a nasty fall off her bicycle.",
        ],
        "«Darse un golpazo» is \"have a nasty fall\" or \"really hurt yourself\": the size and pain of «-azo» go into the adjective \"nasty\".",
      ),
      fb(
        "Don't be so ___! Let the others decide for once.",
        "bossy",
        "¡No seas tan [mandón]! Deja que los demás decidan por una vez.",
        [],
        "Character nouns in «-ón» usually become adjectives: «mandón» is \"bossy\", formed with the judgmental suffix \"-y\" (like \"nosy\", \"pushy\", \"preachy\").",
      ),
      mc(
        "Critics praise her paintings for their ___ sense of wonder.",
        [
          "childlike",
          "childish",
          "childly",
          "childness",
        ],
        0,
        "\"Childlike\" is positive («inocente», «de niño»); \"childish\" is pejorative («infantil», immature). The other two are not English words.",
      ),
      mc(
        "Which sentence is correct?",
        [
          "Leaving the kids alone all day was irresponsible.",
          "Leaving the kids alone all day was inresponsible.",
          "Leaving the kids alone all day was unresponsible.",
          "Leaving the kids alone all day was disresponsible.",
        ],
        0,
        "\"In-\" becomes \"ir-\" before r, with a double r: \"irresponsible\". *Inresponsible keeps the Spanish-looking prefix; *unresponsible and *disresponsible use the wrong prefix.",
      ),
      fb(
        "These new shoes are really ___.",
        "uncomfortable",
        "Estos zapatos nuevos son muy [incómodos].",
        [],
        "English uses \"un-\" where Spanish has «in-»: \"uncomfortable\", never *incomfortable or *inconfortable.",
      ),
      fb(
        "Selling antibiotics without a prescription is ___.",
        "illegal",
        "Vender antibióticos sin receta es [ilegal].",
        [],
        "\"In-\" becomes \"il-\" before l, and the l doubles: \"illegal\" (Spanish «ilegal» has one l).",
      ),
      tr(
        "Es deshonesto ocultarle información al cliente.",
        "It's dishonest to hide information from the client.",
        [
          "It's dishonest to keep information from the client.",
          "It's dishonest to hide information from the customer.",
          "It's dishonest to keep information from the customer.",
          "It's dishonest to withhold information from the client.",
          "It's dishonest to withhold information from the customer.",
        ],
        "\"Dishonest\", not *unhonest. Also \"information\" is uncountable (no -s) and you hide something \"from\" someone, not *to the client.",
      ),
      fb(
        "The health minister met her Chilean ___ yesterday.",
        "counterpart",
        "La ministra de Salud se reunió ayer con su [homólogo] chileno.",
        [],
        "«Homólogo» is \"counterpart\": someone with the same role in another country or organization. \"Counter-\" here does not mean «contra».",
      ),
      fb(
        "___, the trip was perfect, but the hotel was a letdown.",
        "Weather-wise",
        "[En cuanto al clima], el viaje fue perfecto, pero el hotel fue una decepción.",
        ["Weatherwise"],
        "Informal \"-wise\" means «en cuanto a»: \"weather-wise\", \"budget-wise\". It is fine in speech and messages, but careful writers avoid it in formal texts.",
      ),
      tr(
        "La escuela organizó una charla para concientizar sobre el acoso escolar.",
        "The school organized a talk to raise awareness of bullying.",
        [
          "The school organized a talk to raise awareness about bullying.",
          "The school held a talk to raise awareness of bullying.",
          "The school held a talk to raise awareness about bullying.",
          "The school organized a talk to raise awareness of school bullying.",
        ],
        "Not every «-izar» verb has an «-ize» twin: *concientize does not exist. «Concientizar» is \"raise awareness of/about\".",
      ),
      tr(
        "La empresa responsabilizó al proveedor del retraso.",
        "The company blamed the supplier for the delay.",
        [
          "The company held the supplier responsible for the delay.",
          "The company blamed the delay on the supplier.",
        ],
        "«Responsabilizar» is \"blame (someone for something)\" or \"hold (someone) responsible\". *Responsabilize is not English.",
      ),
      mc(
        "\"Coffee is our main export.\" How is \"export\" stressed here, and why?",
        [
          "EX-port, because it is a noun",
          "ex-PORT, because it is a noun",
          "EX-port, because it is a verb",
          "ex-PORT, because it is a verb",
        ],
        0,
        "Two-syllable noun-verb pairs: nouns in front, verbs behind. \"Our main EX-port\" is a noun; \"We ex-PORT coffee\" is a verb.",
      ),
      sp(
        "The politician gave a very political answer about the economy.",
        "El político dio una respuesta muy política sobre la economía.",
        "po-li-TI-cian, po-LI-ti-cal, e-CO-no-my: three different stress positions.",
        "\"-ian\" and \"-ical\" pull the stress to the syllable just before them, and unstressed vowels shrink to schwa. Stressing *po-LI-ti-cian after «político» is a strong Spanish marker.",
      ),
      sp(
        "Our photographer took a fantastic photograph of the Japanese garden.",
        "Nuestro fotógrafo tomó una foto fantástica del jardín japonés.",
        "pho-TO-gra-pher, PHO-to-graph, Ja-pa-NESE.",
        "The suffix \"-er\" does not move the stress, but the family shifts between \"photograph\" and \"photographer\"; \"-ese\" takes the stress itself.",
      ),
      dt(
        "Unemployment in the industry is a natural consequence of the crisis.",
        "Stress IN-dus-try and NA-tu-ral at the front, unlike «industria» and «natural»; \"unemployment\" keeps its stress on -PLOY-.",
      ),
      dt(
        "The duck and her ducklings crossed the road nice and slowly.",
        "\"Ducklings\" uses the fossil suffix \"-ling\", and \"nice and slowly\" is the English for «despacito». Listen for \"and\" reduced to /ən/.",
      ),
      tr(
        "¡Qué departamento más pequeñito! Pero la vista es absolutamente increíble.",
        "What a tiny apartment! But the view is absolutely amazing.",
        [
          "What a tiny apartment! But the view is absolutely incredible.",
          "What a tiny apartment! But the view is absolutely stunning.",
          "What a tiny little apartment! But the view is absolutely amazing.",
          "Such a tiny apartment! But the view is absolutely amazing.",
          "What a tiny apartment! The view is absolutely amazing, though.",
        ],
        "Unit mix: \"what a\" + singular noun, \"tiny\" for «pequeñito» (pure size), and \"absolutely\" with the extreme adjective \"amazing\", never *very amazing.",
      ),
      mc(
        "Which sentence is correct?",
        [
          "It's a picturesque little village, but getting there is a Kafkaesque nightmare.",
          "It's a little picturesque village, but getting there is very impossible.",
          "It's a picturesque little village, but getting there is unpossible.",
          "It's a picturesque villagette, but getting there is a Kafkaesque nightmare.",
        ],
        0,
        "Opinion adjective before \"little\", \"-esque\" for «-esco/-iano», \"impossible\" with \"im-\" and no \"very\", and no invented diminutive like *villagette.",
      ),
      tr(
        "Que sí lo leí, pero el folleto era totalmente engañoso.",
        "I did read it, but the booklet was completely misleading.",
        [
          "I did read it, but the booklet was totally misleading.",
          "I did read it, but the brochure was completely misleading.",
          "I did read it, but the brochure was totally misleading.",
          "I did read it, but the leaflet was completely misleading.",
          "I did read it, but the booklet was utterly misleading.",
        ],
        "Unit mix: emphatic \"did\" + base form, \"booklet\" for «folleto», and \"mis-\" in \"misleading\" («engañoso»). *I did read it, but the booklet was very deceiving sounds unnatural.",
      ),
      lc(
        "I slammed on the brakes about a foot from the dog. / Did you? Good grief!",
        "What does the second speaker's reaction show?",
        [
          "Shocked dismay at a near accident",
          "Boredom, as if it happened every day",
          "Agreement from personal experience",
          "Doubt that the story is true",
        ],
        0,
        "The echo question \"Did you?\" shows interest, and \"Good grief!\" expresses dismay. Neither doubts the story.",
      ),
      wo(
        "She's by far the most unprofessional photographer we've ever hired.",
        "Es, con diferencia, la fotógrafa menos profesional que hemos contratado jamás.",
        "\"By far\" goes before \"the most\"; \"unprofessional\" means badly behaved (not *non-professional, an amateur), and \"we've ever hired\" follows the superlative.",
      ),
      dt(
        "What a nasty fall! You must be absolutely exhausted.",
        "\"What a\" + singular countable noun, and \"absolutely\" with the extreme adjective \"exhausted\". Listen for \"must be\" said as \"mus be\".",
      ),
    ],
  ),
];
