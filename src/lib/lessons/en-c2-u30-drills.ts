// Synced from cheneygross-afk/lengo:src/lib/lessons/en-c2-u30-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Required drill lessons for EN-C2 unit u30 (art, film and literary criticism): a short recap, then graded practice.

type Ex = Lesson["exercises"][number];

const SECONDS: Record<string, number> = {
  "multiple-choice": 15, "multi-select": 20, "listen-choose": 20, "fill-blank": 20, translate: 30,
  "word-order": 25, matching: 30, dictation: 30, speak: 25, write: 0,
};

// Every combination of the given alternatives, joined with spaces.
const combos = (...parts: string[][]): string[] =>
  parts.reduce<string[]>((acc, opts) => acc.flatMap((a) => opts.map((o) => (a ? `${a} ${o}` : o))), [""]);

const tr = (source: string, answer: string, altAnswers: string[], explanation: string): Ex => {
  const alts = [...new Set(altAnswers)].filter((a) => a !== answer);
  return alts.length
    ? { type: "translate", direction: "es-en", prompt: "Translate into English.", source, answer, altAnswers: alts, explanation }
    : { type: "translate", direction: "es-en", prompt: "Translate into English.", source, answer, explanation };
};

const fb = (sentence: string, answer: string, en: string, altAnswers: string[], explanation: string): Ex =>
  altAnswers.length
    ? { type: "fill-blank", prompt: "Write the bold words in English.", sentence, answer, en, altAnswers, explanation }
    : { type: "fill-blank", prompt: "Write the bold words in English.", sentence, answer, en, explanation };

const gap = (sentence: string, answer: string, altAnswers: string[], explanation: string): Ex =>
  altAnswers.length
    ? { type: "fill-blank", prompt: "Complete the sentence with one word.", sentence, answer, altAnswers, explanation }
    : { type: "fill-blank", prompt: "Complete the sentence with one word.", sentence, answer, explanation };

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

export const EN_C2_U30_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. Plot and character, film language, evaluating a work
  // ---------------------------------------------------------------------
  drill(
    "en-c2-criticism-unit-drill-1",
    "Drill: Plot, Film Language and Evaluation",
    "Summarize a plot in the narrative present, name film techniques precisely and judge a work with exact evaluative adjectives and balanced frames instead of interesting or nice.",
    "Recap: talking about a work like a critic",
    [
      "Plot summaries use the present (\"she returns and discovers that her brother has sold the house\"), and a story \"is set in\" a time and place. «Argumento» is \"plot\", never \"argument\"; characters have \"arcs\" and are \"well-rounded\" or \"flat/one-dimensional\". Film language: «primer plano» is a \"close-up\", «plano secuencia» a \"long take\", «montaje» usually \"editing\", «fotografía» \"cinematography\", and the composed music is the \"score\".",
      "Judge precisely: \"gripping\", \"poignant\", \"understated\", \"a tour de force\"; \"derivative\", \"overwrought\", \"self-indulgent\", \"heavy-handed\", \"far-fetched\", \"wooden\". «Emotiva» is \"moving\" (not \"emotive\"), an actor \"gives\" a performance, and balance comes from \"For all its flaws...\", \"let down by\", \"never quite lives up to\", \"well worth seeing\".",
    ],
    [
      ["Halfway through, Lucia realizes that her mentor has been lying to her.", "A la mitad, Lucía se da cuenta de que su mentor le ha estado mintiendo."],
      ["The camera lingers on the unopened letter.", "La cámara se detiene en la carta sin abrir."],
      ["It's a moving, beautifully understated film.", "Es una película emotiva y de una contención admirable."],
      ["A strong cast is let down by a far-fetched plot.", "Un reparto sólido se ve lastrado por una trama inverosímil."],
    ],
    [
      mc(
        "Which sentence is best for a plot summary in a review?",
        [
          "Halfway through the novel, Rosa discovers that her husband has a second family.",
          "Halfway through the novel, Rosa discovered that her husband had a second family.",
          "Halfway through the novel, Rosa is discovering that her husband is having a second family.",
          "Halfway through the novel, Rosa will discover that her husband has a second family.",
        ],
        0,
        "English critics narrate what happens in a work in the present simple (the narrative present). The past tense makes it sound like an anecdote rather than a discussion of a text.",
      ),
      fb(
        "After losing his job, Tomas ___ to his hometown and opens a small bakery.",
        "returns",
        "Tras perder su trabajo, Tomás [regresa] a su pueblo y abre una pequeña panadería.",
        ["goes back", "moves back", "comes back"],
        "Keep the whole summary in the present: \"returns... opens\". Switching to *returned in the middle of a synopsis is the most common Spanish-speaker slip.",
      ),
      tr(
        "La novela está ambientada en Buenos Aires en los años setenta.",
        "The novel is set in Buenos Aires in the 1970s.",
        [
          "The novel is set in Buenos Aires in the seventies.",
          "The novel is set in 1970s Buenos Aires.",
          "The novel is set in Buenos Aires during the 1970s.",
          "The novel is set in Buenos Aires during the seventies.",
          "The novel is set in Buenos Aires in the '70s.",
        ],
        "«Estar ambientada en» is \"be set in\", the critic's standard phrase. *Is situated in or *is ambiented in are calques; \"takes place in\" is possible but weaker.",
      ),
      fb(
        "The whole story ___ on a phone call that nobody answers.",
        "hinges",
        "Toda la historia [depende] de una llamada que nadie contesta.",
        ["turns", "depends"],
        "A plot \"hinges on\" a single event: everything turns on it, like a door on its hinge. Note the preposition ON, where Spanish says «depende de».",
      ),
      tr(
        "La parte central se hace pesada, pero el final tiene un ritmo trepidante.",
        "The middle section drags, but the ending is tightly paced.",
        combos(
          ["The middle section", "The middle"],
          ["drags,", "sags,"],
          ["but the ending is tightly paced.", "but the ending is fast-paced.", "but the ending is gripping."],
        ),
        "A slow section \"drags\" or \"sags\"; good pacing is \"tight\" or \"taut\". Avoid *becomes heavy, a calque of «se hace pesada».",
      ),
      tr(
        "Sin desvelar demasiado, el giro final lo cambia todo.",
        "Without giving too much away, the final twist changes everything.",
        combos(
          ["Without giving too much away,", "Without giving away too much,", "Without revealing too much,"],
          ["the final twist changes everything.", "the twist at the end changes everything.", "the twist ending changes everything."],
        ),
        "\"Without giving too much away\" is the critic's spoiler warning. «Giro» is a \"twist\" (or \"plot twist\"); a twist at the very end is a \"twist ending\".",
      ),
      fb(
        "Her ___, from shy student to fearless lawyer, feels completely earned.",
        "arc",
        "Su [evolución], de estudiante tímida a abogada intrépida, resulta totalmente merecida.",
        ["character arc"],
        "A character's development across the story is their \"arc\". \"Evolution\" sounds biological here, and \"earned\" means the change is convincingly prepared.",
      ),
      wo(
        "The villain is one-dimensional and never really changes.",
        "El villano es plano y nunca cambia de verdad.",
        "\"One-dimensional\" (or \"flat\") is the opposite of \"well-rounded\". \"Really\" goes between \"never\" and the verb.",
      ),
      tr(
        "Los personajes secundarios son poco más que estereotipos.",
        "The supporting characters are little more than stock characters.",
        combos(
          ["The supporting characters are little more than", "The secondary characters are little more than", "The minor characters are little more than"],
          ["stock characters.", "stereotypes.", "cardboard cutouts.", "cliches."],
        ),
        "«Personajes secundarios» are \"supporting characters\" (in film, \"supporting roles\"). A \"stock character\" is a familiar type; \"little more than\" is a typical critical understatement.",
      ),
      dt(
        "The film relies on an ensemble cast rather than a single lead.",
        "\"Ensemble\" is /ɑnˈsɑmbəl/: an \"ensemble cast\" shares the weight between many characters instead of one \"lead\".",
      ),
      mt(
        "Match each Spanish film term with its English equivalent.",
        [
          ["primer plano", "close-up"],
          ["plano secuencia", "long take"],
          ["travelling", "tracking shot"],
          ["montaje", "editing"],
          ["fotografía (de una película)", "cinematography"],
        ],
        "None of these is a word-for-word match: *first plane, *sequence plane, *montage (for the editing in general) and *photography are all classic calques.",
      ),
      tr(
        "La película se abre con un plano general de una ciudad bajo la nieve.",
        "The film opens with a wide shot of a city under snow.",
        combos(
          ["The film opens with a"],
          ["wide shot", "long shot"],
          ["of a city under snow.", "of a snowy city.", "of a city covered in snow.", "of a snow-covered city."],
        ),
        "«Plano» in film is a \"shot\", never *plane. A \"wide shot\" or \"long shot\" shows the whole setting; films \"open with\" a shot.",
      ),
      fb(
        "The camera ___ on the empty chair for several seconds.",
        "lingers",
        "La cámara [se detiene] en la silla vacía durante varios segundos.",
        ["dwells", "stays", "rests"],
        "\"Linger on\" means staying on something longer than expected, which makes the viewer notice it. Present tense, third person: \"lingers\".",
      ),
      mc(
        "Which sentence is correct?",
        [
          "The entire chase is filmed in one unbroken long take.",
          "The entire chase is filmed in one unbroken sequence plane.",
          "The entire chase is filmed in one unbroken first plane.",
          "The entire chase is rolled in one unbroken plane.",
        ],
        0,
        "«Plano secuencia» is a \"long take\" (or \"single take\"). *Sequence plane and *first plane are calques, and a scene is \"filmed\" or \"shot\", not *rolled.",
      ),
      tr(
        "El montaje es ágil y ninguna escena sobra.",
        "The editing is crisp, and not a single scene feels wasted.",
        combos(
          ["The editing is"],
          ["crisp,", "brisk,", "taut,", "tight,"],
          ["and not a single scene feels wasted.", "and no scene feels wasted.", "and there isn't a single wasted scene.", "and no scene is wasted."],
        ),
        "«Montaje» in this sense is \"editing\". In English, a \"montage\" is a specific sequence of short shots compressing time, so *the montage is crisp would be misunderstood.",
      ),
      lc(
        "The director cross-cuts between the job interview and the hospital.",
        "What does the director do?",
        [
          "Alternates between two scenes happening at the same time",
          "Makes an abrupt cut within the same scene",
          "Goes back in time to an earlier event",
          "Slowly darkens the image between scenes",
        ],
        0,
        "\"Cross-cutting\" (or \"intercutting\") alternates between simultaneous scenes. An abrupt cut within a scene is a \"jump cut\", going back is a \"flashback\", and darkening is a \"fade\".",
      ),
      fb(
        "The ___ was composed by a young Mexican musician.",
        "score",
        "La [música original] la compuso un joven músico mexicano.",
        ["original score", "film score"],
        "The music written for a film is the \"score\". \"Soundtrack\" can mean all the sound or an album of songs, so it is less precise here.",
      ),
      tr(
        "La ausencia de música aumenta la tensión.",
        "The absence of music heightens the tension.",
        combos(
          ["The absence of", "The lack of"],
          ["music", "a score"],
          ["heightens the tension.", "increases the tension.", "intensifies the tension."],
        ),
        "Linking technique to effect is the key skill. \"Heighten\" is the critic's verb for making tension or emotion stronger.",
      ),
      sp(
        "The handheld camera gives the scene a raw, documentary feel.",
        "La cámara en mano le da a la escena un aire crudo, documental.",
        "Stress \"handheld\" on the first syllable: /ˈhændhɛld/. \"Documentary\" has four syllables.",
        "\"Handheld\" camerawork shakes slightly, which feels urgent. Note \"a documentary feel\": \"feel\" is a noun here, like «aire».",
      ),
      wo(
        "The warm lighting softens an otherwise brutal scene.",
        "La iluminación cálida suaviza una escena que, por lo demás, es brutal.",
        "\"Otherwise\" goes before the adjective it limits: \"an otherwise brutal scene\" = brutal except for this element.",
      ),
      mc(
        "Which is the right translation of «La película es muy emotiva»?",
        ["The film is very moving.", "The film is very emotive.", "The film is very emotional.", "The film is very sensible."],
        0,
        "A film that touches you is \"moving\", \"touching\" or \"poignant\". \"Emotive\" means arousing strong, often political feeling (\"an emotive issue\"), and \"sensible\" means «sensato».",
      ),
      fb(
        "It's a ___ thriller: I couldn't put it down until three in the morning.",
        "gripping",
        "Es un thriller [atrapante]: no pude soltarlo hasta las tres de la mañana.",
        ["compelling", "riveting"],
        "\"Gripping\" or \"compelling\" says exactly what kind of quality the book has. \"Interesting\" would tell the reader almost nothing.",
      ),
      tr(
        "Es un retrato sensible de un hombre que está perdiendo la memoria.",
        "It's a sensitive portrait of a man who is losing his memory.",
        combos(
          ["It's a sensitive portrait of a man", "It is a sensitive portrait of a man"],
          ["who is losing his memory.", "who's losing his memory.", "losing his memory."],
        ),
        "«Sensible» (delicate, perceptive) is \"sensitive\". *A sensible portrait would mean a «sensato» one, which is not what you want to say.",
      ),
      fb(
        "The plot is ___, borrowing almost every scene from older horror films.",
        "derivative",
        "La trama es [poco original] y toma casi todas las escenas de películas de terror más antiguas.",
        ["unoriginal"],
        "\"Derivative\" accuses a work of copying earlier works too obviously. It is stronger than \"predictable\" and different from \"formulaic\" (following a recipe).",
      ),
      tr(
        "Su interpretación del viejo pescador es una auténtica proeza.",
        "His performance as the old fisherman is a tour de force.",
        combos(
          ["His performance as the old fisherman is", "Her performance as the old fisherman is", "His portrayal of the old fisherman is"],
          ["a tour de force.", "a real tour de force.", "an absolute tour de force.", "a true tour de force."],
        ),
        "\"A tour de force\" is a noun phrase for a brilliant display of skill, so it needs \"a\". An actor's \"performance AS\" a character, or \"portrayal OF\" one.",
      ),
      mc(
        "A director makes a four-hour film that seems designed mainly to please himself. The film is ___.",
        ["self-indulgent", "heavy-handed", "understated", "gripping"],
        0,
        "\"Self-indulgent\" means made for the artist's pleasure rather than the audience's. \"Heavy-handed\" makes its point too obviously; \"understated\" and \"gripping\" are praise.",
      ),
      tr(
        "Pese a sus defectos, es una ópera prima extraordinaria.",
        "For all its flaws, it's a remarkable debut.",
        combos(
          ["For all its flaws,", "Despite its flaws,", "In spite of its flaws,"],
          ["it's a remarkable debut.", "it's an extraordinary debut.", "it is a remarkable debut.", "it is an extraordinary debut."],
        ),
        "\"For all\" + noun = «a pesar de». «Ópera prima» is simply a \"debut\" (or \"first film\", \"first novel\").",
      ),
      fb(
        "A brilliant cast is ___ by a weak script.",
        "let down",
        "Un reparto brillante se ve [lastrado] por un guion flojo.",
        ["undermined", "dragged down"],
        "\"Be let down by\" says that one weakness spoils something otherwise good. It is passive: \"is let down by\", with the past participle \"let\".",
      ),
      fb(
        "It may not be a masterpiece, but it's well worth ___.",
        "seeing",
        "Quizá no sea una obra maestra, pero vale mucho la pena [verla].",
        ["watching", "a look"],
        "\"Worth\" is followed by -ing (or a noun): \"worth seeing\". *Worth to see is the classic error.",
      ),
      tr(
        "El giro final es inverosímil.",
        "The final twist is far-fetched.",
        combos(
          ["The final twist is", "The twist at the end is", "The twist ending is"],
          ["far-fetched.", "implausible.", "hard to believe."],
        ),
        "«Inverosímil» is \"far-fetched\" (everyday) or \"implausible\" (formal). *Inverisimilar does not exist in English.",
      ),
      mc(
        "Which sentence is correct?",
        [
          "She gives a nuanced, career-best performance.",
          "She makes a nuanced, career-best performance.",
          "She does a nuanced, career-best interpretation.",
          "She realizes a nuanced, career-best performance.",
        ],
        0,
        "An actor \"gives\" or \"delivers\" a performance, never *makes or *realizes one. And «interpretación» of a role is a \"performance\".",
      ),
      lc(
        "The supporting cast is wooden, and the lead is frankly hammy.",
        "What does the critic think of the acting?",
        [
          "It is stiff in some roles and exaggerated in the lead",
          "It is subtle and natural throughout",
          "It is strong apart from the lead",
          "It is good but the script is weak",
        ],
        0,
        "\"Wooden\" is stiff acting; \"hammy\" is exaggerated, «sobreactuado». Both are clear criticism.",
      ),
      dt(
        "Her prose is lucid, spare and never showy.",
        "\"Lucid\" (clear) and \"spare\" (economical) are high praise for prose. Listen for the /s/ in \"spare\" linking to \"and\".",
      ),
      tr(
        "La trama se vuelve tan enrevesada que el final no tiene sentido.",
        "The plot becomes so convoluted that the ending makes no sense.",
        combos(
          ["The plot", "The storyline"],
          ["becomes", "gets"],
          ["so convoluted that the ending"],
          ["makes no sense.", "doesn't make sense."],
        ),
        "«Enrevesado» is \"convoluted\". «No tiene sentido» is \"makes no sense\", never *has no sense.",
      ),
      mc(
        "Which sentence is correct?",
        [
          "The film is set in Bogota, and its plot hinges on a stolen painting.",
          "The film is situated in Bogota, and its argument hinges on a stolen painting.",
          "The film is set in Bogota, and its argument depends of a stolen painting.",
          "The film was situated in Bogota, and its plot hinges of a stolen painting.",
        ],
        0,
        "Three traps at once: \"set in\" (not *situated in), \"plot\" (not *argument) and \"hinge on\" (not *of). The present tense is right for a work.",
      ),
      sp(
        "What it lacks in originality, it makes up for in charm.",
        "Lo que le falta de originalidad lo compensa con encanto.",
        "Stress \"lacks\" and \"makes up\"; pause briefly after \"originality\".",
        "\"What it lacks in X, it makes up for in Y\" is a balanced verdict frame. Note \"make up FOR\" + \"IN\".",
      ),
      tr(
        "La serie nunca acaba de estar a la altura de su brillante primer episodio.",
        "The series never quite lives up to its brilliant first episode.",
        combos(
          ["The series", "The show"],
          ["never quite lives up to its brilliant first episode."],
        ),
        "«No acabar de estar a la altura» is \"never quite live up to\". \"Quite\" softens the criticism, and \"series\" takes a singular verb: \"lives\".",
      ),
    ],
  ),

  // ---------------------------------------------------------------------
  // Drill 2. Faint praise, describing a scene, vivid verbs, reviews + whole unit
  // ---------------------------------------------------------------------
  drill(
    "en-c2-criticism-unit-drill-2",
    "Drill: Faint Praise, Scenes, Vivid Verbs and Reviews",
    "Decode faint praise, describe a still or a scene from frame to meaning, choose exact verbs of light, sound and movement, and phrase a review's hook and verdict, then combine everything from the unit.",
    "Recap: reading and writing reviews",
    [
      "Faint praise criticizes politely: \"competent\", \"perfectly adequate\", \"serviceable\", \"pleasant enough\", \"not without its charms\", \"ambitious\". Describe a scene in the present: \"In the foreground...\" (not *in first plane), \"framed by\", \"dwarfed by\", \"silhouetted against\", \"We cut to...\", \"The camera pulls back to reveal...\", and link technique to effect (\"suggests that...\", never *suggests to).",
      "Precise verbs replace «brillar», «crujir» or «caminar» + adverb: flicker, glimmer, gleam, glare, glow; creak, crunch, crackle, hum, thud; stroll, trudge, stagger, stride, dart, shuffle. A review starts with a hook, not *In this review I am going to talk about, and recommends with \"I'd recommend seeing it\", never *recommend to see.",
    ],
    [
      ["The acting is perfectly adequate.", "La actuación es correcta, sin más."],
      ["In the background, a man is silhouetted against the window.", "Al fondo, un hombre se recorta contra la ventana."],
      ["She trudged home as the streetlights flickered on.", "Volvió a casa arrastrando los pies mientras las farolas se encendían parpadeando."],
      ["I'd recommend reading it slowly.", "Recomiendo leerlo despacio."],
    ],
    [
      mc(
        "A critic calls a big-budget film \"perfectly competent\". What is the real message?",
        [
          "It is unremarkable: don't expect much.",
          "It is excellent and well worth seeing.",
          "It is full of technical mistakes.",
          "It is highly original.",
        ],
        0,
        "Applied to art, \"competent\" is faint praise: it praises the minimum and, by saying nothing else, signals disappointment. Spanish «correcta» can be neutral; English \"competent\" rarely is.",
      ),
      lc(
        "It's pleasant enough, though you'll have forgotten it by the time you get home.",
        "What is the critic's verdict?",
        ["Forgettable: mildly enjoyable at best", "A must-see", "Unpleasant from start to finish", "Too long, but memorable"],
        0,
        "\"Pleasant enough\" lowers the praise (\"enough\" after an adjective), and \"though\" introduces the real opinion: it is forgettable.",
      ),
      gap(
        "The book is not ___ its charms, but most readers will give up halfway.",
        "without",
        [],
        "\"Not without its charms\" is litotes: a double negative that sounds kind but means the charms are few.",
      ),
      tr(
        "Es una adaptación que cumple, sin más.",
        "It's a serviceable adaptation, nothing more.",
        combos(
          ["It's a", "It is a"],
          ["serviceable adaptation,", "perfectly adequate adaptation,", "competent adaptation,", "workmanlike adaptation,"],
          ["nothing more.", "but nothing more."],
        ).concat(["It's a serviceable adaptation that does the job.", "It is a serviceable adaptation that does the job."]),
        "«Cumple, sin más» is exactly what \"serviceable\" or \"perfectly adequate\" mean in a review: it works, but there is no spark.",
      ),
      mc(
        "Which word is double-edged, often praising the intention while hinting that the work fails?",
        ["ambitious", "gripping", "poignant", "masterly"],
        0,
        "\"Ambitious\" praises what a work tries to do and often implies it doesn't succeed. The other three are straightforward praise.",
      ),
      tr(
        "Bellamente fotografiada, aunque bastante superficial.",
        "Beautifully shot, though rather shallow.",
        combos(
          ["Beautifully shot,", "Beautifully filmed,"],
          ["though", "but", "although"],
          ["rather shallow.", "rather superficial.", "fairly shallow.", "fairly superficial.", "quite shallow."],
        ),
        "In \"X, though Y\" the second half carries the real verdict. «Fotografiada» for a film is \"shot\" or \"filmed\", not *photographed.",
      ),
      lc(
        "Die-hard fans of the band will find plenty to enjoy.",
        "What is the critic suggesting?",
        [
          "People who aren't already fans probably won't enjoy it",
          "Everyone will enjoy it",
          "Even fans will be disappointed",
          "It is the band's best work",
        ],
        0,
        "Limiting the praise to fans is a classic faint-praise move: what is NOT said (that others will enjoy it) is the real message.",
      ),
      dt(
        "The experiment is bold, but not entirely successful.",
        "\"Not entirely successful\" is polite understatement for «no funciona». Listen for the stress on \"entirely\".",
      ),
      tr(
        "En primer plano hay una maleta abierta sobre la cama.",
        "In the foreground, there's an open suitcase on the bed.",
        [
          "In the foreground, there is an open suitcase on the bed.",
          "In the foreground there's an open suitcase on the bed.",
          "In the foreground there is an open suitcase on the bed.",
          "In the foreground, an open suitcase lies on the bed.",
          "In the foreground, an open suitcase sits on the bed.",
          "In the foreground, we see an open suitcase on the bed.",
        ],
        "For position in the image, «en primer plano» is \"in the foreground\". \"Close-up\" describes shot size, not position.",
      ),
      mc(
        "Which is the right translation of «En primer plano vemos a un niño y, al fondo, una fábrica»?",
        [
          "In the foreground we see a boy, and in the background, a factory.",
          "In close-up we see a boy, and in the back, a factory.",
          "In the first plane we see a boy, and in the bottom, a factory.",
          "In the front plan we see a boy, and at the end, a factory.",
        ],
        0,
        "Foreground and background are the terms for position in the frame. «Al fondo» is \"in the background\", never *in the bottom or *at the end.",
      ),
      fb(
        "The tiny boat is ___ by the enormous waves around it.",
        "dwarfed",
        "El pequeño bote queda [empequeñecido] por las enormes olas que lo rodean.",
        [],
        "\"Dwarfed by\" means made to look small next to something huge, an effect critics use to suggest vulnerability.",
      ),
      fb(
        "The two riders are ___ against the orange sky.",
        "silhouetted",
        "Los dos jinetes se [recortan] contra el cielo naranja.",
        [],
        "\"Be silhouetted against\" is the English for «recortarse contra». It is passive in form: \"are silhouetted\".",
      ),
      tr(
        "La cámara se aleja y revela que la casa está rodeada de policías.",
        "The camera pulls back to reveal that the house is surrounded by police.",
        combos(
          ["The camera pulls back"],
          ["to reveal that", "to reveal", "and reveals that", "and reveals"],
          ["the house is surrounded by police.", "the house is surrounded by police officers."],
        ),
        "\"Pull back\" is the camera moving away; \"to reveal\" expresses the purpose and result. «Rodeada de» is \"surrounded BY\", not *of.",
      ),
      tr(
        "Pasamos a una cocina vacía, donde todavía suena la radio.",
        "We cut to an empty kitchen, where the radio is still playing.",
        combos(
          ["We cut to an empty kitchen, where the radio is still"],
          ["playing.", "on."],
        ),
        "\"Cut to\" is the standard way to describe a change of shot. Use the present, because you are describing the film as it unfolds.",
      ),
      wo(
        "By keeping the camera still, the director makes us wait with her.",
        "Al mantener la cámara quieta, el director nos hace esperar con ella.",
        "\"By + -ing\" names the technique, and the main clause gives the effect. \"Make\" + object + base verb: \"makes us wait\".",
      ),
      mc(
        "Which sentence is correct?",
        [
          "The broken mirror suggests that the marriage is falling apart.",
          "The broken mirror suggests to the marriage falling apart.",
          "The broken mirror suggests the marriage to fall apart.",
          "The broken mirror is suggesting to fall apart the marriage.",
        ],
        0,
        "\"Suggest\" takes a that-clause or a noun (\"suggests his absence\"), never *suggest to or an infinitive. It is the key verb for interpretation.",
      ),
      sp(
        "The long silence could be read as a sign of guilt.",
        "El largo silencio podría interpretarse como una señal de culpa.",
        "Say \"could be read\" as one unit, /kʊd bi rɛd/: \"read\" is the past participle here.",
        "\"Could be read as\" hedges an interpretation, which makes it sound mature rather than dogmatic.",
      ),
      mt(
        "Match each verb of light with the kind of light it describes.",
        [
          ["flicker", "se enciende y se apaga rápido (una vela, un foco que falla)"],
          ["glimmer", "luz débil e inestable, lejana"],
          ["gleam", "brillo limpio y reflejado (metal pulido)"],
          ["glare", "luz dura y molesta"],
          ["glow", "luz cálida y constante, sin llama"],
        ],
        "Spanish uses «brillar» for most of these; English writers pick the exact verb. Several work figuratively too: a glimmer of hope, glowing reviews.",
      ),
      fb(
        "The old floorboards ___ every time someone walked down the hall.",
        "creaked",
        "Las tablas viejas del piso [crujían] cada vez que alguien caminaba por el pasillo.",
        [],
        "Wood \"creaks\". «Crujir» has three English equivalents: \"creak\" (wood), \"crunch\" (gravel, snow, chips) and \"crackle\" (fire).",
      ),
      fb(
        "From the hotel room we could hear the ___ of the traffic below.",
        "hum",
        "Desde la habitación del hotel se oía el [zumbido] del tráfico de abajo.",
        ["murmur", "rumble", "drone"],
        "\"Hum\" is a low, continuous sound, as a verb or a noun: \"the hum of traffic\".",
      ),
      tr(
        "La grava crujía bajo las llantas del carro.",
        "The gravel crunched under the car's tires.",
        combos(
          ["The gravel crunched"],
          ["under", "beneath"],
          ["the car's tires.", "the tires of the car.", "the car's wheels.", "the wheels of the car."],
        ),
        "Gravel \"crunches\"; *creaked would suggest wood. Choose the verb by what makes the sound. \"Tires\" is the American spelling (British \"tyres\").",
      ),
      lc(
        "The keys fell onto the carpet with a dull thud.",
        "What kind of sound was it?",
        ["A dull, heavy impact", "A sharp metallic ring", "A low continuous sound", "A soft rustling"],
        0,
        "A \"thud\" is a dull, heavy impact. A continuous low sound is a \"hum\", and the soft sound of leaves or paper is a \"rustle\".",
      ),
      tr(
        "Un niño cruzó la calle corriendo.",
        "A boy darted across the street.",
        combos(
          ["A boy", "A child", "A kid"],
          ["darted", "ran", "dashed"],
          ["across the street."],
        ),
        "Spanish puts the direction in the verb («cruzó») and the manner in a gerund («corriendo»). English does the opposite: manner in the verb (\"darted\"), direction in the particle (\"across\").",
      ),
      tr(
        "Los excursionistas caminaron penosamente por la nieve durante horas.",
        "The hikers trudged through the snow for hours.",
        ["The hikers trudged through the snow for hours on end.", "The hikers plodded through the snow for hours."],
        "\"Trudge\" means walking heavily and wearily, so it replaces \"walk\" plus a long adverb. It takes a direction: \"trudge through\", \"trudge home\".",
      ),
      fb(
        "After the accident, he ___ into the kitchen, holding his arm.",
        "staggered",
        "Después del accidente, entró [tambaleándose] en la cocina, sujetándose el brazo.",
        ["stumbled", "limped"],
        "\"Stagger\" is walking unsteadily, almost falling. Again, the manner goes in the verb and the direction in \"into\".",
      ),
      fb(
        "She ___ into the boardroom and took the seat at the head of the table.",
        "strode",
        "[Entró con paso decidido] en la sala de juntas y se sentó a la cabecera de la mesa.",
        ["marched"],
        "\"Stride\" (strode, stridden) is walking with long, confident steps. \"Shuffle\" or \"tiptoe\" would contradict the confidence of the scene.",
      ),
      dt(
        "We strolled along the river while the city lights glimmered in the water.",
        "\"Strolled\" (relaxed walk) and \"glimmered\" (faint, unsteady light): two precise verbs in one sentence. The -ed endings are /d/.",
      ),
      mc(
        "Which is the best opening for an English-language review?",
        [
          "On paper, a silent film about a lighthouse keeper shouldn't work.",
          "In this review I am going to talk about a film about a lighthouse keeper.",
          "Hello, today I will review a film about a lighthouse keeper.",
          "This review is about a film that I watched about a lighthouse keeper.",
        ],
        0,
        "English reviews start directly with a hook. Announcing the review (*In this review I am going to talk about...) is a school-essay habit.",
      ),
      tr(
        "Recomiendo verla en el cine, no en casa.",
        "I'd recommend seeing it in a theater, not at home.",
        combos(
          ["I'd recommend seeing it", "I recommend seeing it", "I would recommend seeing it", "I'd recommend watching it", "I recommend watching it"],
          ["in a theater,", "in theaters,", "at the movies,", "in a movie theater,", "at the cinema,", "in the cinema,"],
          ["not at home."],
        ),
        "\"Recommend\" + -ing: \"I'd recommend seeing it\". *I recommend to see it is the classic error. A \"theater\" or \"movie theater\" is American; \"cinema\" British.",
      ),
      fb(
        "Where the documentary really ___ is in its use of archive footage.",
        "excels",
        "Donde el documental realmente [brilla] es en su uso de material de archivo.",
        ["shines"],
        "\"Where X really excels is in...\" is a strong analysis frame. Don't translate «brillar» here as *brights or *glows.",
      ),
      tr(
        "El punto débil es el final, que se siente forzado.",
        "The weak link is the ending, which feels contrived.",
        combos(
          ["The weak link is the ending,", "The weak point is the ending,", "The weakest link is the ending,"],
          ["which feels contrived.", "which feels forced."],
        ),
        "\"The weak link\" names the part that lets the work down. \"Contrived\" means artificially arranged, the critic's word for «forzado».",
      ),
      wo(
        "Told in the first person, the novel moves between two continents.",
        "Narrada en primera persona, la novela alterna entre dos continentes.",
        "A participle clause (\"Told in the first person\") opens the sentence and must refer to the subject that follows: the novel.",
      ),
      tr(
        "La película sigue a una enfermera que regresa a su pueblo y descubre que su hermano vendió la casa.",
        "The film follows a nurse who returns to her hometown and discovers that her brother has sold the house.",
        combos(
          ["The film follows a nurse who"],
          ["returns to her hometown", "goes back to her hometown", "returns to her village", "returns to her town"],
          ["and discovers that", "and discovers", "and finds out that", "and finds out"],
          ["her brother has sold the house."],
        ),
        "Narrative present for the plot (\"follows\", \"returns\", \"discovers\") and present perfect for what happened before that point (\"has sold\"), even though Spanish uses «vendió».",
      ),
      mc(
        "Which sentence is correct?",
        [
          "The cinematography is stunning, and the editing is taut.",
          "The photography is stunning, and the montage is taut.",
          "The cinematographer is stunning, and the montage is taut.",
          "The photographer is stunning, and the edition is taut.",
        ],
        0,
        "«Fotografía» of a film is \"cinematography\" and «montaje» is \"editing\". *Edition is a version of a book or newspaper.",
      ),
      sp(
        "It's not without its flaws, but it's well worth reading.",
        "No está exenta de defectos, pero vale mucho la pena leerla.",
        "Stress \"flaws\" and \"well worth\"; the \"t\" in \"it's\" is light.",
        "A balanced verdict: litotes (\"not without its flaws\") followed by a clear recommendation with \"worth\" + -ing.",
      ),
      tr(
        "Su actuación es correcta, sin más, y la trama es predecible.",
        "Her performance is perfectly competent, and the plot is predictable.",
        combos(
          ["Her performance", "His performance", "The acting"],
          ["is perfectly competent,", "is competent, nothing more,", "is perfectly adequate,", "is adequate, nothing more,"],
          ["and the plot is predictable."],
        ),
        "Faint praise (\"perfectly competent\") paired with mild criticism (\"predictable\"): the reader understands the verdict is negative. «Actuación» is a \"performance\".",
      ),
      dt(
        "The candle flickered out just as the stairs began to creak.",
        "\"Flicker out\" is a light dying unsteadily; \"creak\" is the sound of old wood. Listen for the linking in \"just as\".",
      ),
    ],
  ),
];
