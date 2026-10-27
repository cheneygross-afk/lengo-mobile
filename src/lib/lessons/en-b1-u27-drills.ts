// Synced from cheneygross-afk/lengo:src/lib/lessons/en-b1-u27-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise, Lesson } from "./types";

// Required drill lessons for EN-B1 unit u27 (adjectives, comparisons, like/as, reflexives and adverbs): a short recap, then graded practice.

// ---- small authoring helpers (local to this file) ----------------------
// Answer patterns use {a|b|} for alternatives; every combination is
// accepted, and the first combination is the main answer.
function x(p: string): string[] {
  const m = p.match(/\{([^{}]*)\}/);
  if (!m || m.index === undefined) return [p.replace(/\s+/g, " ").replace(/\s+([,.!?;])/g, "$1").trim()];
  const out: string[] = [];
  for (const opt of m[1].split("|")) out.push(...x(p.slice(0, m.index) + opt + p.slice(m.index + m[0].length)));
  return out;
}
function xs(ps: string | string[]): string[] {
  return [...new Set((Array.isArray(ps) ? ps : [ps]).flatMap(x))];
}
const tr = (source: string, answers: string | string[], explanation: string, prompt = "Translate into English."): Exercise => {
  const [answer, ...alts] = xs(answers);
  return { type: "translate", direction: "es-en", prompt, source, answer, ...(alts.length ? { altAnswers: alts } : {}), explanation };
};
const fb = (sentence: string, answers: string | string[], en: string, explanation: string): Exercise => {
  const [answer, ...alts] = xs(answers);
  return { type: "fill-blank", prompt: "Write the bold words in English.", sentence, answer, en, ...(alts.length ? { altAnswers: alts } : {}), explanation };
};
const mc = (question: string, options: string[], explanation: string): Exercise => ({ type: "multiple-choice", question, options, correctIndex: 0, explanation });
const wo = (sentence: string, translation: string, explanation: string, alts?: string[]): Exercise => ({
  type: "word-order",
  prompt: "Put the words in order.",
  words: sentence.split(" "),
  translation,
  ...(alts ? { altOrders: alts.map((a) => a.split(" ")) } : {}),
  explanation,
});
const dc = (audio: string, explanation: string): Exercise => ({ type: "dictation", audio, explanation });
const lc = (audio: string, options: string[], explanation: string, question = "What does it mean?"): Exercise => ({ type: "listen-choose", audio, question, options, correctIndex: 0, explanation });
const sp = (text: string, explanation: string, tip?: string, prompt?: string): Exercise => ({ type: "speak", text, ...(prompt ? { prompt } : {}), ...(tip ? { tip } : {}), explanation });
const mt = (instructions: string, pairs: [string, string][], explanation: string): Exercise => ({ type: "matching", instructions, pairs: pairs.map(([left, right]) => ({ left, right })), explanation });

const SECONDS: Record<Exercise["type"], number> = {
  "multiple-choice": 15, "multi-select": 20, "listen-choose": 20, "fill-blank": 20, translate: 30,
  "word-order": 25, matching: 30, dictation: 30, speak: 25, write: 300,
};
const lesson = (
  n: number,
  title: string,
  summary: string,
  heading: string,
  body: string[],
  examples: [string, string][],
  exercises: Exercise[],
): Lesson => ({
  slug: `en-b1-adjectives-comparisons-unit-drill-${n}`,
  level: "EN-B1",
  number: n,
  title: `Drill: ${title}`,
  summary,
  duration: `${Math.round((exercises.reduce((s, e) => s + SECONDS[e.type], 0) + 40) / 60)} min`,
  sections: [{ heading, body, examples: examples.map(([es, en]) => ({ es, en })) }],
  exercises,
});

export const EN_B1_U27_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. -ed/-ing, adjective order, compounds and prefixes, comparisons 1
  // ---------------------------------------------------------------------
  lesson(
    1,
    "Bored or Boring, Much Bigger",
    "You will be able to choose -ed or -ing, put several adjectives in the right order, build compounds like \"a two-hour flight\" and opposites with un-, im-, il-, ir- and dis-, and say how big a difference is.",
    "Recap: feelings, order and how much bigger",
    [
      "\"-ed\" is how a person feels (\"I'm bored\", \"We were surprised\"); \"-ing\" is what causes the feeling (\"a boring class\", \"surprising news\"). Before a noun, adjectives go opinion, size, age, shape, color, origin, material, purpose, and never take -s: \"two big dogs\", \"a ten-minute walk\", \"a five-year-old son\".",
      "To grade a comparative, use \"much\", \"a lot\" or \"far\" (big difference) and \"a bit\" or \"slightly\" (small one), never \"very\" or \"more\" + -er. \"By far the best\", \"one of the best\" + plural noun, \"as fast as\", \"the same as\", \"similar to\", \"different from\".",
    ],
    [
      ["The lecture was boring, so I was bored.", "La conferencia era aburrida, así que yo estaba aburrido."],
      ["She found a beautiful old wooden box.", "Encontró una caja de madera antigua preciosa."],
      ["It was a twelve-hour flight.", "Fue un vuelo de doce horas."],
      ["This laptop is much faster than my old one.", "Esta laptop es mucho más rápida que la vieja."],
    ],
    [
      fb("The lecture was so ___ that half the class fell asleep.", "boring", "La conferencia era tan [aburrida] que la mitad de la clase se durmió.",
        "The lecture causes the feeling, so \"-ing\": \"boring\". Spanish «aburrida» covers both meanings; English splits them."),
      fb("I was ___ by the results.", "surprised", "Los resultados me [sorprendieron].",
        "Spanish makes the results the subject; English makes the person the subject with an -ed adjective: \"I was surprised by the results\"."),
      mc("Which sentence is correct?", [
        "I'm bored. Let's do something.",
        "I'm boring. Let's do something.",
        "I'm bore. Let's do something.",
        "I'm boredom. Let's do something.",
      ], "How you feel is \"-ed\": \"I'm bored\". \"I'm boring\" means «soy aburrido», a person nobody wants to talk to."),
      tr("Me interesa mucho la fotografía.", "I'm {very|really} interested in photography.",
        "Spanish «me interesa» becomes a person subject + \"interested in\". *I'm interesting in photography means something else entirely."),
      tr("Fue un viaje muy agotador.", ["It was a {very|really} tiring trip.", "The trip was {very|really} tiring.", "It was an exhausting trip."],
        "The trip causes the tiredness, so \"tiring\". You were \"tired\" after it."),
      lc("I was so embarrassed!", ["¡Qué vergüenza pasé!", "¡Estaba embarazada!", "¡Estaba muy enojada!", "¡Me dio mucho miedo!"],
        "\"Embarrassed\" is «avergonzado». The false friend «embarazada» is \"pregnant\"."),
      tr("Me preocupa mi hermano.", "I'm worried about my brother.",
        "«Me preocupa» puts the brother first in Spanish; English says \"I'm worried about\". *My brother worries me is possible but much less natural."),
      dc("We were disappointed with the hotel, but the beach was amazing.",
        "People feel \"disappointed\" (-ed); the beach causes amazement, so \"amazing\" (-ing)."),
      mc("Choose the natural order.", ["a lovely little cafe", "a little lovely cafe", "a cafe little lovely", "a lovely cafe little"],
        "Opinion (\"lovely\") comes before size (\"little\"), and all adjectives go before the noun."),
      wo("She found a beautiful old wooden box at the market.", "Encontró una caja de madera antigua preciosa en el mercado.",
        "Opinion (\"beautiful\") + age (\"old\") + material (\"wooden\") + noun. Spanish «de madera» becomes an adjective before the noun."),
      wo("I want some new running shoes.", "Quiero unos tenis para correr nuevos.",
        "Age (\"new\") before purpose (\"running\"). «Para correr» becomes \"running\" right before the noun."),
      fb("I gave him ___.", "a blue silk tie", "Le regalé [una corbata de seda azul].",
        "Color (\"blue\") before material (\"silk\"), and no \"of\": *a tie of silk is a Spanish-style structure."),
      mc("Which sentence is correct?", [
        "She has a five-year-old son.",
        "She has a five-years-old son.",
        "She has a five-year-olds son.",
        "She has a son five years.",
      ], "Before a noun, the age is a compound adjective, so no -s: \"a five-year-old son\". Compare \"He is five years old\"."),
      fb("It's a ___ walk to the beach.", ["ten-minute", "10-minute", "ten minute"], "Son [diez minutos] caminando hasta la playa.",
        "Number + noun before another noun works as an adjective, so it stays singular: \"a ten-minute walk\", never *a ten-minutes walk."),
      tr("Fue un vuelo de doce horas.", "{It was|It's} a {twelve-hour|12-hour|twelve hour} flight.",
        "«De doce horas» becomes a hyphenated adjective before \"flight\": \"twelve-hour\", with no -s on \"hour\"."),
      tr("Mi jefa es muy tranquila; nunca se enoja.", "My boss is very {easy-going|easygoing}. She never gets {angry|mad}.",
        "«Tranquilo» for personality is \"easy-going\". «Enojarse» is \"get angry\", not reflexive in English."),
      fb("This sofa is really ___.", "uncomfortable", "Este sofá es muy [incómodo].",
        "\"Comfortable\" takes \"un-\": \"uncomfortable\". *Incomfortable copies the Spanish prefix."),
      mt("Match each adjective with its opposite.", [
        ["patient", "impatient"],
        ["honest", "dishonest"],
        ["responsible", "irresponsible"],
        ["friendly", "unfriendly"],
      ], "\"Im-\" before p, \"ir-\" before r, \"dis-\" with words like \"honest\", and \"un-\" with \"friendly\" (Spanish «antipático»)."),
      tr("La recepcionista fue bastante antipática.", "The receptionist was {quite|pretty|rather|really|very} unfriendly.",
        "«Antipático» is \"unfriendly\" (un- + friendly). *Antipathetic is not used for people."),
      fb("This laptop is ___ than my old one.", ["much faster", "a lot faster", "far faster"], "Esta laptop es [mucho más rápida] que la vieja.",
        "\"Much\", \"a lot\" or \"far\" + comparative for a big difference. Never *very faster or *more faster."),
      mc("Which sentence is correct?", [
        "Today I feel much better.",
        "Today I feel more better.",
        "Today I feel very better.",
        "Today I feel much more better.",
      ], "\"Better\" is already a comparative, so never add \"more\". Use \"much\" or \"a lot\" to grade it."),
      lc("This exam was a lot easier than the last one.", [
        "Este examen fue mucho más fácil que el anterior.",
        "Este examen fue tan fácil como el anterior.",
        "Este examen fue un poco más fácil que el anterior.",
        "Este examen fue más difícil que el anterior.",
      ], "\"A lot easier\" is «mucho más fácil». \"A bit easier\" would be «un poco más fácil»."),
      tr("Es por mucho el mejor restaurante del barrio.", ["It's by far the best restaurant in the {neighborhood|area}.", "It's the best restaurant in the {neighborhood|area} by far."],
        "\"By far\" strengthens a superlative. After a superlative, places take \"in\", not \"of\": *the best restaurant of the neighborhood."),
      tr("Mi carro no es tan rápido como el tuyo.", "My car {isn't|is not} {as|so} fast as yours.",
        "Equality: \"as\" + adjective + \"as\", with the plain adjective (\"fast\", not \"faster\"). «El tuyo» is just \"yours\"."),
      fb("Her dress is ___ the one I bought last week.", "the same as", "Su vestido es [igual que] el que compré la semana pasada.",
        "«Igual que» is \"the same as\". Never *the same that or *the same than."),
      dc("The train is slightly more expensive, but it's far more comfortable.",
        "\"Slightly\" for a small difference, \"far\" for a big one, both before \"more\" + long adjective."),
      sp("The second hotel was a bit cheaper than the first.", "\"A bit\" + comparative for a small difference.",
        "Stress \"bit\" and \"cheaper\".", "Say it in English: «El segundo hotel era un poco más barato que el primero»"),
      // Traps: combine the whole first half
      tr("Es una de las ciudades más interesantes del mundo.", "{It's|It is} one of the most interesting cities in the world.",
        "Three traps: \"one of the\" + PLURAL noun (\"cities\"), \"interesting\" (-ing, the city causes interest) and \"in the world\", not *of the world."),
      tr("Los niños estaban emocionados porque el partido fue muy emocionante.", "The {kids|children} were excited because the {game|match} was {very|really} exciting.",
        "The kids feel \"excited\"; the game causes it, so \"exciting\". One Spanish root, two English adjectives."),
      tr("Mi hermana es parecida a mi mamá, pero muy diferente de mi papá.", "My sister is similar to my {mom|mother}, but {very|really} different {from|than} my {dad|father}.",
        "\"Similar to\" (never *similar than) and \"different from\" (Americans also say \"different than\"; never *different of)."),
      mc("Which sentence is correct?", [
        "We stayed in a lovely five-star hotel.",
        "We stayed in a five-stars lovely hotel.",
        "We stayed in a lovely five-stars hotel.",
        "We stayed in a hotel lovely five-star.",
      ], "Opinion (\"lovely\") first, and the compound \"five-star\" stays singular because it's an adjective."),
      wo("The new apartment is much bigger than the old one.", "El departamento nuevo es mucho más grande que el viejo.",
        "\"Much\" + comparative + \"than\". \"The old one\" avoids repeating \"apartment\"."),
      fb("This movie ___ the book.", ["isn't as interesting as", "is not as interesting as", "is less interesting than", "isn't so interesting as"], "Esta película [no es tan interesante como] el libro.",
        "\"Not as\" + adjective + \"as\" is the natural negative comparison. And the movie causes interest, so \"interesting\"."),
      dc("I'm not interested in politics, but this article is really interesting.",
        "\"Interested in\" (how you feel) vs \"interesting\" (what causes it) in one sentence."),
      sp("I was so embarrassed when I forgot her name.", "\"Embarrassed\" (-ed) for how you felt; never \"embarazada\".",
        "Four syllables: em-BAR-rassed, with the -ed as /t/.", "Say it in English: «Me dio muchísima vergüenza cuando olvidé su nombre»"),
    ],
  ),

  // ---------------------------------------------------------------------
  // Drill 2. Comparisons 2, like/as, reflexives, adverbs, emotions + unit
  // ---------------------------------------------------------------------
  lesson(
    2,
    "The More, the Better, Like or As",
    "You will be able to use \"the more..., the better\" and \"more and more\", choose like or as, use reflexives and each other correctly, place adverbs, and mix them with the rest of the unit.",
    "Recap: comparisons, like/as, reflexives and adverbs",
    [
      "«Cuanto más..., más...» is \"the more..., the more...\"; «cada vez más» is \"colder and colder\" or \"more and more expensive\"; a superlative takes \"I've ever\", never *I've never. \"Like\" + noun = «parecido a»; \"as\" + noun = a real role (\"She works as a pilot\"); \"as if\" = «como si».",
      "Many Spanish «se» verbs aren't reflexive in English (\"I relax\", \"I feel tired\"); \"each other\" is «se» between people. \"Hard\" means «mucho», \"hardly\" means «casi no», and an adverb never goes between the verb and its object: \"I like it very much\". Use \"absolutely\" with extreme adjectives and \"I agree\", never *I am agree.",
    ],
    [
      ["The more I earn, the more I spend.", "Cuanto más gano, más gasto."],
      ["She works as a flight attendant.", "Trabaja de auxiliar de vuelo."],
      ["My grandparents love each other very much.", "Mis abuelos se quieren mucho."],
      ["I like this neighborhood very much.", "Me gusta mucho este barrio."],
    ],
    [
      fb("The more you sleep, ___ you feel.", "the better", "Cuanto más duermes, [mejor] te sientes.",
        "\"The\" + comparative twice: \"the more..., the better...\". Never *how better or *more better."),
      tr("Cuanto más gano, más gasto.", "The more I {earn|make}, the more I spend.",
        "«Cuanto más..., más...» is \"The more..., the more...\", with normal word order after each part: \"the more I spend\"."),
      tr("La comida está cada vez más cara.", "Food is {getting|becoming} more and more expensive.",
        "«Cada vez más» + long adjective is \"more and more\" + adjective. Never *each time more expensive."),
      fb("I go to the movies ___ these days.", "less and less", "Últimamente voy al cine [cada vez menos].",
        "The opposite of \"more and more\" is \"less and less\"."),
      tr("Es la peor película que he visto en mi vida.", "{It's|It is} the worst {movie|film} {I've|I have} ever seen.",
        "Superlative + present perfect + \"ever\". «En mi vida» or «nunca» here is \"ever\": *the worst movie I've never seen would mean you haven't seen it."),
      mc("Choose the correct option: \"This is the ___ comfortable chair in the house.\"", ["least", "less", "fewest", "most less"],
        "\"The least\" is the opposite of \"the most\": «la silla menos cómoda»."),
      fb("She works ___ a flight attendant.", "as", "Trabaja [de] auxiliar de vuelo.",
        "For a real job or role, use \"as\". *She works like a flight attendant would mean she isn't one."),
      fb("You look ___ your father in this photo.", "like", "En esta foto [te pareces a] tu papá.",
        "\"Look like\" + noun = «parecerse a» in appearance. \"Like\" is for similarity."),
      mc("What does \"What's your new boss like?\" mean?", [
        "¿Cómo es tu nuevo jefe?",
        "¿Te gusta tu nuevo jefe?",
        "¿A quién se parece tu nuevo jefe?",
        "¿Qué le gusta a tu nuevo jefe?",
      ], "\"What's X like?\" asks for a description, «¿cómo es?». \"Do you like X?\" would be «¿te gusta?»."),
      tr("De niña, vivía en Monterrey.", "As a {child|girl|kid}, I {lived|used to live} in Monterrey.",
        "«De niño / de niña» is \"as a child\": \"as\" for a real role or stage of life, not \"like\"."),
      tr("Habla como si fuera el jefe.", ["He {talks|speaks} {as if|as though|like} he {was|were} the boss.", "She {talks|speaks} {as if|as though|like} she {was|were} the boss."],
        "«Como si» is \"as if\" or \"as though\" (informal American English also uses \"like\"). The past (\"was\" / \"were\") shows it isn't true."),
      lc("It sounds like a great plan.", ["Parece un plan genial.", "Escucha este plan genial.", "Suena la música del plan.", "Me gusta mucho tu plan."],
        "\"Sound like\" + noun is «parecer» from what you hear: \"That sounds like a good idea\"."),
      fb("Be careful with that knife. You'll cut ___.", "yourself", "Cuidado con ese cuchillo. [Te] vas a cortar.",
        "\"Cut\" needs a reflexive when you hurt your own body: \"cut yourself\". One person, so \"yourself\" (plural \"yourselves\")."),
      mc("Which sentence is correct?", [
        "I usually relax after dinner.",
        "I usually relax myself after dinner.",
        "I usually relax me after dinner.",
        "I usually me relax after dinner.",
      ], "«Relajarse» is just \"relax\" in English, with no reflexive pronoun."),
      tr("Mis abuelos se quieren mucho.", ["My grandparents love each other {very much|a lot|so much}.", "My grandparents really love each other."],
        "«Se quieren» (each one loves the other) is \"love each other\". \"Love themselves\" would mean each one loves himself or herself."),
      tr("Vivo solo desde enero.", "I've {been living|lived} {by myself|on my own|alone} since January.",
        "«Solo» (without company) is \"by myself\" or \"on my own\". «Desde enero» with an action that continues needs the present perfect."),
      fb("Did you ___ at the party?", ["enjoy yourself", "enjoy yourselves"], "¿[La pasaste bien] en la fiesta?",
        "\"Enjoy\" always needs an object: \"enjoy yourself\" (one person) or \"enjoy yourselves\" (more). Never just *Did you enjoy?"),
      sp("Help yourself to some more coffee.", "\"Help yourself\" is «sírvete»: one of the fixed expressions with a reflexive.",
        "Stress \"help\" and \"coffee\".", "Say it in English: «Sírvete más café»"),
      dc("We met at a conference and wrote to each other for a year.",
        "«Nos conocimos» is just \"we met\" (nothing after it), but «nos escribimos» is \"wrote to each other\"."),
      lc("They don't talk to each other anymore.", ["Ya no se hablan.", "Ya no hablan solos.", "Ya no hablan con nadie.", "Ya no hablan de sí mismos."],
        "\"Each other\" is «el uno al otro»: «se hablan». \"Themselves\" would be «a sí mismos»."),
      mc("\"He hardly works\" means...", ["Casi no trabaja.", "Trabaja muchísimo.", "Trabaja con dificultad.", "Trabaja muy duro."],
        "\"Hardly\" is «casi no». \"He works hard\" means the opposite: «trabaja mucho»."),
      fb("She studies ___ every night.", ["hard", "a lot"], "Estudia [mucho] todas las noches.",
        "\"Study hard\" (with effort) has no -ly. *She studies hardly would mean «casi no estudia»."),
      fb("I've been sleeping really badly ___.", ["lately", "recently"], "[Últimamente] estoy durmiendo muy mal.",
        "\"Lately\" is «últimamente» and goes with the present perfect (continuous). \"Late\" means «tarde»."),
      tr("Me gusta mucho este barrio.", ["I like this neighborhood {very much|a lot}.", "I really like this neighborhood."],
        "The adverb never goes between the verb and its object: *I like very much this neighborhood is the classic mistake. Put \"very much\" at the end or \"really\" before \"like\"."),
      wo("I nearly missed my flight this morning.", "Esta mañana casi pierdo el vuelo.",
        "\"Nearly\" (casi) goes before the main verb. \"Near\" would mean «cerca»."),
      mt("Match each phrase with its extreme adjective.", [
        ["very hungry", "starving"],
        ["very angry", "furious"],
        ["very cold", "freezing"],
        ["very big", "huge"],
      ], "Extreme adjectives already include «muy», so they take \"absolutely\" or \"really\", not \"very\"."),
      fb("After the marathon I was ___ exhausted.", ["absolutely", "really", "completely", "totally", "so"], "Después del maratón estaba [completamente] agotado.",
        "\"Exhausted\" is extreme, so \"absolutely\" (or \"really\"), never *very exhausted."),
      tr("Estoy de acuerdo contigo, pero es demasiado tarde.", "I agree with you, but {it's|it is} too late.",
        "«Estar de acuerdo» is the verb \"agree\": no \"be\". *I am agree is one of the most common mistakes."),
      mc("Which sentence is correct?", [
        "I don't agree with you.",
        "I'm not agree with you.",
        "I am no agree with you.",
        "I don't agree to you.",
      ], "\"Agree\" is a verb, so the negative uses \"don't\": \"I don't agree with you\" (or \"I disagree\")."),
      // Traps: the whole unit
      tr("Este examen fue mucho más fácil de lo que esperaba.", "This exam was {much|a lot|far} easier than I {expected|thought}.",
        "\"Much\" + comparative, never *more easier. «De lo que esperaba» is simply \"than I expected\"."),
      tr("Me siento cansada porque casi no dormí anoche.", ["I feel tired because I {hardly|barely} slept last night.", "I'm tired because I {hardly|barely} slept last night."],
        "«Me siento» is \"I feel\" (never *I feel myself), and «casi no» is \"hardly\", already negative, so no \"didn't\"."),
      tr("Trabaja de profesor, pero habla como un político.", "He works as a teacher, but {he |}{talks|speaks} like a politician.",
        "\"As\" for his real job, \"like\" for similarity: he isn't a politician."),
      dc("The older I get, the less I worry about small things.",
        "\"The\" + comparative in both halves, with normal word order: \"the less I worry\"."),
      dc("It was absolutely freezing, so we stayed home by ourselves.",
        "\"Absolutely\" with the extreme adjective \"freezing\", and \"by ourselves\" for «solos»."),
      sp("In my opinion, life is getting more and more expensive.", "\"In my opinion\" (never *According to me), \"life\" with no article, and \"more and more\" for «cada vez más».",
        "Stress \"opinion\" and the second \"more\".", "Say it in English: «En mi opinión, la vida está cada vez más cara»"),
      wo("It's the most relaxing place I've ever been to.", "Es el lugar más relajante en el que he estado nunca.",
        "Superlative + \"I've ever\" + participle. The place causes relaxation, so \"relaxing\"."),
    ],
  ),
];
