// Synced from cheneygross-afk/lengo:src/lib/lessons/en-c2-u29-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Required drill lessons for EN-C2 unit u29 (psychology and complex emotions): a short recap, then graded practice.

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

export const EN_C2_U29_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. Mixed feelings, nuanced emotions, therapy talk, the emotion wheel
  // ---------------------------------------------------------------------
  drill(
    "en-c2-psych-unit-drill-1",
    "Drill: Mixed Feelings and Precise Emotions",
    "Describe conflicting and finely graded emotions with the right fixed phrase, adjective and preposition: torn between, can't help feeling, rueful, sheepish, apprehensive about, burned out, absolutely livid.",
    "Recap: mixed feelings and precise emotions",
    [
      "Mixed feelings have fixed frames: \"torn between A and B\", \"of two minds about\", \"mixed feelings about\", \"on the fence\", \"tinged with\", \"part of me... part of me\". \"Ambivalent\" means conflicting feelings, never «me da igual» (\"indifferent\"). \"Can't help\" takes -ing (\"can't help feeling\") or \"but\" + base verb, and \"rationalize\" means inventing excuses, not «racionalizar» a process (\"streamline\").",
      "Precise words often describe the face: a wistful smile, a rueful grin, a smug look, a sheepish shrug; \"resent\" takes -ing, \"apprehensive\" is worried about what is coming (not «aprensivo», which is \"squeamish\"). Therapy talk: bottle up, vent, process, set boundaries, burned out, low self-esteem, be mindful of. Extreme adjectives (livid, petrified, devastated) take \"absolutely\" or \"utterly\", not \"very\".",
    ],
    [
      ["I'm torn between staying in Lima and moving to Chicago.", "Estoy dividido entre quedarme en Lima y mudarme a Chicago."],
      ["I can't help feeling we missed something.", "No puedo evitar sentir que se nos pasó algo."],
      ["He resents having to commute two hours a day.", "Le molesta muchísimo tener que viajar dos horas al día al trabajo."],
      ["She was absolutely livid about the mistake.", "Estaba furiosa por el error."],
    ],
    [
      mc(
        "Which sentence is correct?",
        [
          "I'm torn between studying law and studying medicine.",
          "I'm torn among studying law and studying medicine.",
          "I'm torn about studying law or studying medicine.",
          "I'm torn of studying law and medicine.",
        ],
        0,
        "The fixed frame is \"torn between A and B\": two options, so \"between\". *Torn about... or and *torn of are calques of «dividido sobre/de», and \"among\" is for three or more.",
      ),
      fb(
        "We're still ___ about moving to Denver.",
        "on the fence",
        "Todavía [no nos decidimos] sobre si mudarnos a Denver.",
        ["of two minds", "in two minds", "undecided", "torn"],
        "\"On the fence\" (or \"of two minds\", British \"in two minds\") is the idiomatic way to say you can't decide yet. Each phrase takes \"about\".",
      ),
      tr(
        "Tengo sentimientos encontrados sobre volver a trabajar en la oficina.",
        "I have mixed feelings about going back to work in the office.",
        combos(
          ["I have", "I've got"],
          ["mixed feelings about"],
          ["going back to work in the office.", "going back to work at the office.", "returning to work in the office.", "returning to work at the office.", "going back to the office.", "returning to the office."],
        ),
        "«Sentimientos encontrados» is \"mixed feelings\", followed by \"about\" + -ing. *Encountered feelings is a literal calque that means nothing in English.",
      ),
      mc(
        "\"My brother is ambivalent about the wedding.\" What does this mean?",
        [
          "He has conflicting feelings about it: partly for, partly against.",
          "He doesn't care about it at all.",
          "He is completely against it.",
          "He has two different roles in it.",
        ],
        0,
        "\"Ambivalent\" means holding two opposing feelings at once. It is not «indiferente» (\"indifferent\", \"couldn't care less\"), and it never means having two uses, as Spanish «ambivalente» can.",
      ),
      tr(
        "Sinceramente, me da igual dónde cenemos.",
        "Honestly, I don't mind where we have dinner.",
        combos(
          ["Honestly,"],
          ["I don't mind", "I don't care", "I'm indifferent about", "it makes no difference to me"],
          ["where we have dinner.", "where we eat.", "where we eat dinner."],
        ),
        "«Me da igual» is \"I don't mind\" or \"I'm indifferent\". Saying *I'm ambivalent would mean the opposite: that you have strong feelings pulling both ways.",
      ),
      fb(
        "Her joy at the promotion was ___ with sadness, because it meant leaving her team.",
        "tinged",
        "Su alegría por el ascenso estaba [teñida] de tristeza, porque significaba dejar a su equipo.",
        ["laced"],
        "\"Tinged with\" says that one feeling has a little of another inside it. Note the preposition: tinged WITH, not *of, even though Spanish says «teñida de».",
      ),
      tr(
        "Una parte de mí quiere vender el carro, pero otra parte sabe que lo voy a extrañar.",
        "Part of me wants to sell the car, but part of me knows I'm going to miss it.",
        combos(
          ["Part of me wants to sell the car, but"],
          ["part of me", "another part of me", "another part"],
          ["knows I'm going to miss it.", "knows I'll miss it.", "knows that I'm going to miss it.", "knows that I'll miss it."],
        ),
        "For split feelings English says \"part of me... (another) part of me\", with no article before the first \"part\". «Por una parte... por otra» is for arguments, not emotions.",
      ),
      wo(
        "Graduating was a bittersweet moment for the whole family.",
        "Graduarse fue un momento agridulce para toda la familia.",
        "The -ing form \"Graduating\" is the subject; \"bittersweet\" goes before the noun \"moment\", like any adjective.",
      ),
      fb(
        "I can't help ___ that we've forgotten something important.",
        "feeling",
        "No puedo evitar [sentir] que olvidamos algo importante.",
        ["thinking"],
        "\"Can't help\" is followed by -ing: \"can't help feeling\". *Can't help to feel and *can't avoid feeling are the classic Spanish-speaker errors; \"avoid\" means keeping away from something.",
      ),
      mc(
        "Which sentence is correct?",
        [
          "I couldn't help but laugh at the photo.",
          "I couldn't help but laughing at the photo.",
          "I couldn't avoid to laugh at the photo.",
          "I couldn't help to laugh at the photo.",
        ],
        0,
        "Two correct patterns exist: \"couldn't help laughing\" and \"couldn't help but laugh\" (base verb). Mixing them (*help but laughing) is wrong, and \"avoid\" never means «evitar» a reaction.",
      ),
      tr(
        "No me quito de la cabeza la sensación de que el vuelo se va a retrasar.",
        "I can't shake the feeling that the flight is going to be delayed.",
        combos(
          ["I can't shake the feeling", "I can't help feeling", "I can't help thinking"],
          ["that the flight is going to be delayed.", "the flight is going to be delayed.", "that the flight will be delayed.", "the flight will be delayed."],
        ),
        "\"I can't shake the feeling that...\" is the natural chunk for a nagging suspicion, «no me quito de la cabeza». \"Shake\" here means getting rid of something that clings to you.",
      ),
      dt(
        "She talked herself out of buying a new laptop.",
        "\"Talk yourself out of\" + -ing means persuading yourself NOT to do something. Listen for the linked \"out of\", /ˈaʊɾəv/.",
      ),
      tr(
        "Se convenció de pedir el préstamo, aunque sabía que era un error.",
        "He talked himself into taking out the loan, even though he knew it was a mistake.",
        [
          ...combos(
            ["He talked himself into"],
            ["taking out the loan,", "taking the loan,", "applying for the loan,", "getting the loan,"],
            ["even though", "although"],
            ["he knew it was a mistake."],
          ),
          ...combos(
            ["She talked herself into"],
            ["taking out the loan,", "taking the loan,", "applying for the loan,", "getting the loan,"],
            ["even though", "although"],
            ["she knew it was a mistake."],
          ),
        ],
        "«Convencerse de hacer algo» is \"talk yourself into\" + -ing; the reflexive pronoun must match the subject (himself, herself). It is a typical rationalization move.",
      ),
      fb(
        "He ___ skipping the gym by telling himself he needed the rest.",
        "rationalized",
        "[Justificó] no ir al gimnasio diciéndose que necesitaba descansar.",
        ["justified"],
        "In psychology, \"rationalize\" means inventing a reasonable-sounding excuse for what you did. Spanish «racionalizar» (make efficient) is \"streamline\" in English.",
      ),
      mc(
        "A manager wants to «racionalizar» the delivery routes, meaning make them simpler and more efficient. Which verb is clearest?",
        ["streamline", "rationalize", "talk into", "justify"],
        0,
        "\"Streamline\" means making a process simpler and more efficient. \"Rationalize\" in everyday English usually suggests finding excuses, so it is a risky choice here.",
      ),
      mt(
        "Match each word with its closest Spanish description.",
        [
          ["wistful", "con una melancolía suave"],
          ["rueful", "con pesar, pero sonriendo"],
          ["smug", "pagado de sí mismo, irritante"],
          ["sheepish", "apenado por una tontería"],
          ["crestfallen", "abatido de golpe por una desilusión"],
        ],
        "All five tend to describe what we see on someone's face: a wistful look, a rueful grin, a smug smile, a sheepish shrug, a crestfallen face.",
      ),
      tr(
        "No hace falta que te regodees; ganaste por un punto.",
        "There's no need to gloat; you won by one point.",
        combos(
          ["There's no need to gloat;", "You don't need to gloat;", "There's no need to gloat,"],
          ["you won by one point.", "you won by a single point.", "you only won by one point.", "you only won by a point.", "you won by a point."],
        ),
        "\"Gloat\" is the verb for showing smug pleasure at your own success or someone else's failure: «regodearse». It needs no object: \"Stop gloating\".",
      ),
      lc(
        "He gave a sheepish grin when I found the empty cookie jar.",
        "How did he feel?",
        [
          "A little embarrassed about something silly he did",
          "Deeply ashamed of a serious wrong",
          "Proud of himself in an irritating way",
          "Sad about something he could no longer have",
        ],
        0,
        "\"Sheepish\" is light embarrassment at having done something silly, usually visible in a grin or a shrug. Deep moral shame is \"ashamed\"; irritating pride is \"smug\"; gentle longing is \"wistful\".",
      ),
      fb(
        "I resent ___ to explain the same procedure every single week.",
        "having",
        "Me molesta muchísimo [tener] que explicar el mismo procedimiento cada semana.",
        [],
        "\"Resent\" takes a noun or -ing: \"resent having to\". *Resent to have is wrong, and \"resent\" is not «resentirse» (to be weakened); it means feeling bitter about unfair treatment.",
      ),
      tr(
        "Puso los ojos en blanco, exasperada.",
        "She rolled her eyes in exasperation.",
        ["She rolled her eyes, exasperated.", "Exasperated, she rolled her eyes.", "She rolled her eyes in exasperation."],
        "«Poner los ojos en blanco» is \"roll your eyes\", and the noun phrase \"in exasperation\" describes the gesture. Exasperation is patience running out after repeated annoyance.",
      ),
      tr(
        "Estoy un poco inquieto por la entrevista de mañana.",
        "I'm a little apprehensive about tomorrow's interview.",
        combos(
          ["I'm a little", "I'm a bit", "I'm slightly", "I'm somewhat"],
          ["apprehensive about", "uneasy about", "nervous about"],
          ["tomorrow's interview.", "the interview tomorrow."],
        ),
        "\"Apprehensive about\" is worry about something that is coming. Use \"about\", not *of or *for, and don't confuse it with «aprensivo» (\"squeamish\").",
      ),
      mc(
        "Which is the right translation of «Mi tía es muy aprensiva: no soporta ver sangre»?",
        [
          "My aunt is very squeamish: she can't stand the sight of blood.",
          "My aunt is very apprehensive: she can't stand the sight of blood.",
          "My aunt is very sensible: she can't stand the sight of blood.",
          "My aunt is very resentful: she can't stand the sight of blood.",
        ],
        0,
        "«Aprensivo» about blood or germs is \"squeamish\" (or \"a hypochondriac\" about illness). \"Apprehensive\" is a false friend: it means worried about something that is going to happen.",
      ),
      sp(
        "His face fell when he saw his grade.",
        "Se le cambió la cara cuando vio su calificación.",
        "Stress \"face\" and \"fell\"; \"when he\" links smoothly, /wɛnɪ/.",
        "\"His face fell\" is the idiomatic way to show sudden disappointment from the outside, like \"crestfallen\". The verb is \"fall\" (fell), not *fallen.",
      ),
      tr(
        "Mi papá se lo guarda todo y nunca habla de sus problemas.",
        "My dad bottles everything up and never talks about his problems.",
        combos(
          ["My dad", "My father"],
          ["bottles everything up", "bottles it all up", "bottles things up", "keeps everything bottled up"],
          ["and never talks about his problems."],
        ),
        "\"Bottle up\" is a separable phrasal verb: \"bottle everything up\", \"bottle it up\". English imagines feelings in a bottle that may eventually explode.",
      ),
      wo(
        "He finally opened up to his sister about the divorce.",
        "Por fin se sinceró con su hermana sobre el divorcio.",
        "\"Open up to\" someone \"about\" something: two prepositions with different jobs. \"Finally\" goes before the main verb.",
      ),
      tr(
        "Todavía estoy asimilando la noticia del despido.",
        "I'm still processing the news of the layoff.",
        combos(
          ["I'm still processing", "I'm still taking in", "I'm still coming to terms with"],
          ["the news of the layoff.", "the news about the layoff.", "the news of my layoff.", "the news about my layoff."],
        ),
        "\"Process\" a piece of news means taking time to understand and accept it emotionally. «Asimilar» here is \"process\", not *assimilate, which sounds technical.",
      ),
      fb(
        "You need to set clearer ___ with your clients, or they'll keep calling you at midnight.",
        "boundaries",
        "Tienes que ponerles [límites] más claros a tus clientes, o te van a seguir llamando a medianoche.",
        [],
        "«Poner límites» in the personal sense is \"set boundaries\" (plural). *Put limits is a calque; \"limits\" is for speed, budgets and numbers.",
      ),
      mc(
        "Which sentence is correct?",
        [
          "After two years of double shifts, she was completely burned out.",
          "After two years of double shifts, she was completely burnout.",
          "After two years of double shifts, she had a burnout completely.",
          "After two years of double shifts, she was completely burning.",
        ],
        0,
        "The adjective is \"burned out\" (or \"burnt out\"); the noun is \"burnout\" (\"suffer from burnout\"). Spanish «estar quemado» tempts learners into *was burnout.",
      ),
      gap(
        "Years of criticism had left him with very ___ self-esteem.",
        "low",
        [],
        "\"Self-esteem\" collocates with \"low\" and \"high\": \"low self-esteem\". *Little self-esteem is a calque of «poca autoestima».",
      ),
      dt(
        "Kids are often more resilient than their parents expect.",
        "\"Resilient\" is /rɪˈzɪliənt/, stress on the second syllable; the \"s\" sounds like /z/.",
      ),
      tr(
        "Por favor, tengan en cuenta que hay gente trabajando en el piso de arriba.",
        "Please be mindful that there are people working on the floor above.",
        combos(
          ["Please be mindful that there are people working"],
          ["on the floor above.", "upstairs.", "on the next floor up."],
        ).concat(["Please be mindful of the people working upstairs.", "Please be mindful of the people working on the floor above."]),
        "\"Be mindful of / that\" means «tener en cuenta», being aware and considerate. It is the everyday cousin of \"mindfulness\".",
      ),
      mc(
        "Which is the most considerate way to say you like your kitchen very organized?",
        [
          "I'm very particular about how my kitchen is organized.",
          "I'm so OCD about my kitchen.",
          "My kitchen makes me totally bipolar.",
          "I get depressed if my kitchen is messy.",
        ],
        0,
        "\"Particular about\" (or \"a bit of a neat freak\") is precise and doesn't trivialize real conditions. Casual clinical labels like \"so OCD\" can hurt people who live with them.",
      ),
      mc(
        "Which sentence is correct?",
        [
          "I was absolutely petrified when the plane started shaking.",
          "I was very petrified when the plane started shaking.",
          "I was absolutely nervous when the plane started shaking.",
          "I was utterly uneasy when the plane started shaking.",
        ],
        0,
        "Extreme adjectives (petrified, livid, devastated) take \"absolutely\" or \"utterly\". Gradable ones (nervous, uneasy) take \"very\" or \"a little\": *absolutely nervous and *very petrified mix the two scales.",
      ),
      gap(
        "I'm not disappointed ___ you; I'm disappointed with the result.",
        "in",
        [],
        "With a person, \"disappointed in\" (or \"with\"); with a thing, \"disappointed with\". Spanish «decepcionado con» covers both, so learners often miss \"in\".",
      ),
      tr(
        "Estoy harta del ruido de la obra de enfrente.",
        "I'm fed up with the noise from the construction site across the street.",
        combos(
          ["I'm fed up with", "I'm sick of", "I'm tired of", "I'm sick and tired of"],
          ["the noise from the construction site across the street.", "the noise from the construction across the street.", "the noise of the construction site across the street."],
        ),
        "\"Fed up WITH\", but \"sick OF\" and \"tired OF\": the preposition belongs to the adjective, not to Spanish «de».",
      ),
      dt(
        "I'm dreading the conversation with my landlord.",
        "\"Dread\" is deep fear of something coming, and it takes a direct object: \"dreading the conversation\", no preposition.",
      ),
      sp(
        "We were utterly devastated when the project was canceled.",
        "Nos quedamos completamente destrozados cuando cancelaron el proyecto.",
        "Stress \"utterly\" and the second syllable of \"devastated\": /ˈdɛvəsteɪɾɪd/.",
        "\"Devastated\" is extreme, so it pairs with \"utterly\" or \"absolutely\". \"Canceled\" is the American spelling (British \"cancelled\").",
      ),
      tr(
        "Le molesta muchísimo que su hermano le cuente a todo el mundo sus problemas.",
        "She resents her brother telling everyone about her problems.",
        [
          "She resents her brother telling everybody about her problems.",
          "She resents it when her brother tells everyone about her problems.",
          "She resents it when her brother tells everybody about her problems.",
          "She resents her brother's telling everyone about her problems.",
          "He resents his brother telling everyone about his problems.",
          "He resents it when his brother tells everyone about his problems.",
        ],
        "\"Resent\" + object + -ing (\"resent her brother telling\") or \"resent it when...\". *Resents that her brother tells is unnatural, and \"resent\" is never «resentirse».",
      ),
    ],
  ),

  // ---------------------------------------------------------------------
  // Drill 2. False friends, supportive talk, wishes, character + whole unit
  // ---------------------------------------------------------------------
  drill(
    "en-c2-psych-unit-drill-2",
    "Drill: False Friends, Support, Wishes and Character",
    "Avoid the emotion false friends, respond supportively, express wishes and regrets with the unreal past, and describe character and manner precisely, then combine everything from the unit.",
    "Recap: what to say, what not to say",
    [
      "False friends: embarrassed «avergonzado» (pregnant is «embarazada»), excited «ilusionado», sensible «sensato» (sensitive is «sensible»), sympathetic «comprensivo» (nice is «simpático»), preoccupied «absorto», deception «engaño» (disappointment is «decepción»), bother «molestar» (never molest). Supportive talk reflects (\"It sounds like...\"), validates (\"No wonder you're tired\") and asks before advising; \"advice\" is uncountable.",
      "Wish / if only + past for the present, + past perfect for regrets, + would for someone else's annoying habit; \"I'd rather you didn't\", \"It's high time we talked\". Character: gregarious, aloof, standoffish, meticulous, abrasive, unassuming, self-effacing; manner verbs show feeling: mutter, glare, shrug, fidget, wince, snap.",
    ],
    [
      ["I was so embarrassed when my phone rang during the exam.", "Me dio muchísima vergüenza que me sonara el celular durante el examen."],
      ["No wonder you're stressed; you haven't had a day off in months.", "Con razón estás estresado; no has tenido un día libre en meses."],
      ["I'd rather you didn't post that photo.", "Preferiría que no publicaras esa foto."],
      ["He glared at the waiter and muttered something.", "Fulminó al mesero con la mirada y murmuró algo."],
    ],
    [
      mc(
        "Your friend tells you she is expecting a baby. Which sentence says «Está embarazada»?",
        ["She's pregnant.", "She's embarrassed.", "She's expected.", "She's in hope."],
        0,
        "«Embarazada» is \"pregnant\" (or \"expecting\"). \"Embarrassed\" means «avergonzado»: the most famous false friend for Spanish speakers.",
      ),
      tr(
        "Me dio muchísima vergüenza olvidar el nombre de mi jefe.",
        "I was so embarrassed when I forgot my boss's name.",
        [
          "I was really embarrassed when I forgot my boss's name.",
          "I was so embarrassed to forget my boss's name.",
          "I was really embarrassed to forget my boss's name.",
          "It was so embarrassing to forget my boss's name.",
          "It was really embarrassing to forget my boss's name.",
          "Forgetting my boss's name was so embarrassing.",
          "I was incredibly embarrassed when I forgot my boss's name.",
        ],
        "«Me dio vergüenza» for a silly social moment is \"I was embarrassed\" (or \"It was embarrassing\"). \"Ashamed\" would suggest moral guilt, which is too strong here.",
      ),
      fb(
        "The kids are really ___ about the trip to the beach.",
        "excited",
        "Los niños están muy [ilusionados] con el viaje a la playa.",
        [],
        "\"Excited about\" is the innocent, everyday word for «ilusionado» or «emocionado». Sexual excitement is \"aroused\"; nervous agitation is \"worked up\".",
      ),
      tr(
        "Fue una decisión muy sensata dadas las circunstancias.",
        "It was a very sensible decision given the circumstances.",
        [
          "It was a very sensible decision, given the circumstances.",
          "It was a very sensible decision under the circumstances.",
          "It was a very sensible decision, under the circumstances.",
          "Given the circumstances, it was a very sensible decision.",
          "Under the circumstances, it was a very sensible decision.",
          "It was a very wise decision given the circumstances.",
          "It was a very reasonable decision given the circumstances.",
        ],
        "«Sensato» is \"sensible\". It is the false friend of Spanish «sensible», which is \"sensitive\".",
      ),
      fb(
        "My grandfather is very ___ to the cold, so we keep the heating on.",
        "sensitive",
        "Mi abuelo es muy [sensible] al frío, así que dejamos la calefacción prendida.",
        [],
        "Spanish «sensible» (easily affected) is \"sensitive\". *Sensible to the cold would mean «sensato», which makes no sense here.",
      ),
      tr(
        "Mi jefa fue muy comprensiva cuando mi hijo estuvo enfermo.",
        "My boss was very sympathetic when my son was sick.",
        combos(
          ["My boss was"],
          ["very sympathetic", "very understanding", "really sympathetic", "really understanding"],
          ["when my son was sick.", "when my son was ill.", "while my son was sick."],
        ),
        "«Comprensivo» is \"sympathetic\" or \"understanding\". \"Sympathetic\" never means «simpático»; for that, say \"nice\" or \"friendly\".",
      ),
      mc(
        "Which is the right translation of «Tu nuevo compañero de trabajo es muy simpático»?",
        [
          "Your new coworker is really nice.",
          "Your new coworker is really sympathetic.",
          "Your new coworker is really sensible.",
          "Your new coworker is really pretentious.",
        ],
        0,
        "«Simpático» is \"nice\", \"friendly\" or \"likeable\". \"Sympathetic\" means showing compassion for someone's problems, which is a different idea.",
      ),
      fb(
        "Sorry to ___ you, but is this seat taken?",
        "bother",
        "Perdón que te [moleste], ¿está ocupado este asiento?",
        ["disturb", "trouble", "interrupt"],
        "«Molestar» is \"bother\", \"disturb\" or \"trouble\". \"Molest\" means sexual abuse, so *Sorry to molest you would cause real alarm.",
      ),
      lc(
        "You look preoccupied. Is something on your mind?",
        "What has the speaker noticed?",
        [
          "The other person seems distracted, lost in thought",
          "The other person seems to be in a hurry",
          "The other person seems bored with the conversation",
          "The other person seems to have a cold",
        ],
        0,
        "\"Preoccupied\" means your mind is busy with something else, «absorto». Spanish «preocupado» is \"worried\" or \"concerned\".",
      ),
      tr(
        "La nueva temporada de la serie fue una gran decepción.",
        "The new season of the show was a huge disappointment.",
        combos(
          ["The new season of the"],
          ["show", "series"],
          ["was a huge disappointment.", "was a big disappointment.", "was a great disappointment.", "was a real disappointment.", "was really disappointing."],
        ),
        "«Decepción» is \"disappointment\". \"Deception\" means «engaño», so *a huge deception would accuse the show of fraud.",
      ),
      mc(
        "Which is the right translation of «No quiero decepcionarte»?",
        [
          "I don't want to let you down.",
          "I don't want to deceive you.",
          "I don't want to give you a deception.",
          "I don't want to pretend you.",
        ],
        0,
        "«Decepcionar» is \"let down\" or \"disappoint\". \"Deceive\" means «engañar», and \"pretend\" means «fingir».",
      ),
      fb(
        "No ___ you're exhausted; you've been working double shifts all month.",
        "wonder",
        "[Con razón] estás agotado; llevas todo el mes trabajando turnos dobles.",
        [],
        "\"No wonder\" validates a feeling: «con razón», «no me extraña». It goes straight before the clause, with no \"that\" needed (\"It's no wonder\" also works, just longer).",
      ),
      tr(
        "Parece que te sientes desbordada con la mudanza.",
        "It sounds like you're feeling overwhelmed by the move.",
        combos(
          ["It sounds like", "It sounds as if", "It sounds as though"],
          ["you're feeling overwhelmed", "you feel overwhelmed"],
          ["by the move.", "with the move."],
        ),
        "\"It sounds like...\" reflects back what you heard: in a supportive conversation it beats «parece que» translated as *It seems that, which sounds like a detached judgment.",
      ),
      mc(
        "A friend says: \"I didn't get the job.\" Which reply validates without minimizing?",
        [
          "That must be really disappointing.",
          "At least you have another interview next week.",
          "Everything happens for a reason.",
          "It could be worse.",
        ],
        0,
        "\"That must be...\" accepts the feeling. \"At least...\", \"Everything happens for a reason\" and \"It could be worse\" are well meant but dismissive.",
      ),
      tr(
        "¿Puedo darte un consejo?",
        "Can I give you a piece of advice?",
        [
          "Can I give you some advice?",
          "Could I give you a piece of advice?",
          "Could I give you some advice?",
          "May I give you a piece of advice?",
          "May I give you some advice?",
          "Can I give you a bit of advice?",
          "Can I offer you some advice?",
        ],
        "\"Advice\" is uncountable: \"a piece of advice\" or \"some advice\", never *an advice or *advices. And asking first is exactly what good listeners do.",
      ),
      wo(
        "Do you want my advice, or do you just need to vent?",
        "¿Quieres mi consejo o solo necesitas desahogarte?",
        "Two questions joined by \"or\", each with its own auxiliary \"do\". \"Just\" goes before the main verb \"need\".",
      ),
      sp(
        "I'm here whenever you're ready. No pressure.",
        "Aquí estoy para cuando quieras. Sin presión.",
        "Stress \"here\" and \"ready\"; let \"No pressure\" fall gently.",
        "Giving the other person an exit is a core supportive move in English: \"No pressure\", \"Only if you want to\".",
      ),
      dt(
        "What's been on your mind lately?",
        "\"What's been\" is \"what has been\" contracted: /wʌts bɪn/. An open question like this invites a longer answer than \"Are you sad?\".",
      ),
      fb(
        "I wish I ___ how to tell her the truth.",
        "knew",
        "Ojalá [supiera] cómo decirle la verdad.",
        [],
        "A present wish takes the past simple: \"I wish I knew\". *I wish I know and *I wish I would know are the classic errors.",
      ),
      tr(
        "Ojalá no hubiera aceptado ese trabajo.",
        "I wish I hadn't accepted that job.",
        combos(
          ["I wish I hadn't", "If only I hadn't", "I wish I had not", "If only I had not"],
          ["accepted that job.", "taken that job."],
        ),
        "A regret about the past takes the past perfect: \"I wish I hadn't accepted\". *I wish I wouldn't have accepted is a common but incorrect calque of the Spanish subjunctive.",
      ),
      mc(
        "Which sentence is correct?",
        [
          "I wish you would stop leaving dishes in the sink.",
          "I wish I would be more organized.",
          "I wish you stop leaving dishes in the sink.",
          "I wish you will stop leaving dishes in the sink.",
        ],
        0,
        "\"Wish\" + \"would\" complains about someone else's habit. About yourself, use the past: \"I wish I were more organized\", not *I wish I would be.",
      ),
      fb(
        "I'd rather you ___ anyone about my diagnosis yet.",
        "didn't tell",
        "Preferiría que [no le contaras] a nadie lo de mi diagnóstico todavía.",
        ["did not tell", "didn't mention it to"],
        "\"Would rather\" + another subject takes the past: \"I'd rather you didn't tell\". *I'd rather you don't tell is the typical error.",
      ),
      tr(
        "Preferiría que no se lo hubieras contado a mis papás.",
        "I'd rather you hadn't told my parents.",
        [
          "I would rather you hadn't told my parents.",
          "I'd prefer it if you hadn't told my parents.",
          "I would prefer it if you hadn't told my parents.",
          "I'd rather you had not told my parents.",
          "I'd sooner you hadn't told my parents.",
        ],
        "For a past action you regret, \"would rather\" + subject + past perfect: \"I'd rather you hadn't told\". «Papás» is simply \"parents\".",
      ),
      fb(
        "It's high time we ___ a proper budget for the household.",
        "made",
        "Ya es hora de que [hagamos] un presupuesto como se debe para la casa.",
        ["set", "drew up", "had", "created", "set up", "worked out"],
        "\"It's (high) time\" + subject takes the past simple with present meaning: \"we made\". *It's high time we make is the Spanish-subjunctive trap.",
      ),
      tr(
        "Ya va siendo hora de que pases página.",
        "It's about time you moved on.",
        [
          "It's high time you moved on.",
          "It's time you moved on.",
          "It's about time you drew a line under it.",
          "It's high time you drew a line under it.",
          "It's time you drew a line under it.",
          "It's about time for you to move on.",
          "It's time for you to move on.",
        ],
        "\"It's about time\" + subject + past simple sounds impatient, exactly like «ya va siendo hora». \"Move on\" and \"draw a line under it\" both translate «pasar página».",
      ),
      mt(
        "Match each character word with its Spanish description.",
        [
          ["gregarious", "sociable, le encanta estar con gente"],
          ["aloof", "distante y frío"],
          ["meticulous", "minucioso con los detalles"],
          ["abrasive", "áspero, de trato brusco"],
          ["self-effacing", "que se quita importancia"],
        ],
        "\"Aloof\" is distance, not shyness; \"abrasive\" rubs people the wrong way; \"self-effacing\" people play down their own achievements.",
      ),
      fb(
        "She's so ___ that she thanked everyone on the team except herself.",
        "self-effacing",
        "Es tan [modesta y poco dada a darse importancia] que les dio las gracias a todos en el equipo menos a sí misma.",
        ["unassuming", "modest"],
        "\"Self-effacing\" describes someone who plays down their own role. \"Unassuming\" (sin pretensiones) is close; \"shy\" would describe a different trait.",
      ),
      tr(
        "Murmuró algo entre dientes y colgó.",
        "He muttered something under his breath and hung up.",
        [
          "She muttered something under her breath and hung up.",
          "He mumbled something under his breath and hung up.",
          "She mumbled something under her breath and hung up.",
          "He muttered something and hung up.",
          "She muttered something and hung up.",
        ],
        "\"Mutter under your breath\" is «murmurar entre dientes», usually with irritation. \"Hang up\" (hung up) is «colgar» the phone.",
      ),
      mc(
        "Which is the right translation of «Me fulminó con la mirada»?",
        ["He glared at me.", "He glanced at me.", "He stared me.", "He peered at me."],
        0,
        "\"Glare at\" is looking angrily. \"Glance at\" is a quick look and \"peer at\" is looking with effort; \"stare\" needs \"at\" (*stared me is wrong).",
      ),
      dt(
        "The new manager seemed a bit standoffish at first.",
        "\"Standoffish\" is one word, /stændˈɔfɪʃ/: informal and negative, stronger than \"reserved\".",
      ),
      lc(
        "\"Not now,\" he snapped, without looking up from his laptop.",
        "How did he speak?",
        ["Sharply and irritably", "Quietly and unclearly", "Nervously, repeating sounds", "Sadly, with a sigh"],
        0,
        "\"Snap\" is to answer sharply and irritably. \"Mumble\" is speaking unclearly, \"stammer\" repeating sounds, \"sigh\" breathing out sadly.",
      ),
      tr(
        "Estaba tan preocupada por su examen que no pudo evitar morderse las uñas.",
        "She was so worried about her exam that she couldn't help biting her nails.",
        combos(
          ["She was so"],
          ["worried", "anxious"],
          ["about her exam that she"],
          ["couldn't help biting her nails.", "couldn't help but bite her nails."],
        ),
        "Two traps at once: «preocupada» is \"worried\", not *preoccupied, and \"couldn't help\" takes -ing (or \"but\" + base verb), never *couldn't avoid to bite.",
      ),
      mc(
        "Which sentence is correct?",
        [
          "I'm ashamed of how I spoke to him; I wish I had apologized.",
          "I'm ashamed of how I spoke to him; I wish I apologized.",
          "I'm embarrassed for how I spoke to him; I wish I would apologize.",
          "I'm ashamed for how I spoke to him; I wish I have apologized.",
        ],
        0,
        "Moral regret is \"ashamed of\", and a past regret after \"wish\" needs the past perfect: \"I wish I had apologized\".",
      ),
      tr(
        "Me molesta que me traten como si no fuera sensata.",
        "I resent being treated as if I weren't sensible.",
        combos(
          ["I resent being treated"],
          ["as if", "as though", "like"],
          ["I weren't sensible.", "I wasn't sensible."],
        ),
        "Three unit points: \"resent\" + -ing (here passive, \"being treated\"), \"as if\" + unreal past (\"weren't\", or \"wasn't\" in speech), and \"sensible\" for «sensata».",
      ),
      sp(
        "I wish you'd told me you were feeling burned out.",
        "Ojalá me hubieras dicho que te sentías quemado.",
        "\"You'd\" is short and light: /jʊd/. Stress \"told\" and \"burned out\".",
        "\"Wish\" + past perfect (\"you'd told\") for a past regret, plus the adjective \"burned out\" from therapy talk.",
      ),
      wo(
        "It's high time we set some boundaries at home.",
        "Ya es hora de que pongamos algunos límites en casa.",
        "\"It's high time\" + subject + past: \"set\" here is the past simple (set, set, set). \"Boundaries\" is the right word for personal limits.",
      ),
    ],
  ),
];
