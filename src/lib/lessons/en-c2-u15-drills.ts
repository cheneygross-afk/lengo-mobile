// Synced from cheneygross-afk/lengo:src/lib/lessons/en-c2-u15-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Required drill lessons for EN-C2 unit u15 (presentations and negotiation: openings, signposting, data, counteroffers, delivery): a short recap, then graded practice.

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


export const EN_C2_U15_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. Openings and hooks, signposting, presenting data, anchoring
  // and counteroffers
  // ---------------------------------------------------------------------
  drill(
    "en-c2-presenting-unit-drill-1",
    "Drill: Hooks, Signposts, Data and Offers",
    "Open a talk with a hook and one line of credibility, move between sections with linked signposts, describe data with precise verbs and prepositions, and anchor, condition and soften offers in a negotiation.",
    "Recap: open, signpost, describe, negotiate",
    [
      "Open with \"Good morning, everyone\", one line of thanks and a hook (\"How many of you have...?\", a striking statistic, a short story, a bold claim), then credibility in the present perfect (\"I've been working in... for ten years\") and a preview (\"I've divided my talk into three parts\"). Move on with \"That brings me to...\", frame numbers with \"To put that in context...\", and «resumir» is \"sum up\", not \"resume\".",
      "Data: \"rise\" (no object) vs \"raise\" (object), \"increase by 5%\" (size) \"to 9%\" (new level), \"an increase in sales\", \"account for 40% of\", percentage points vs percent, \"a billion\" = «mil millones». Negotiation: frame the anchor (\"in the region of\"), attach conditions (\"If you could..., we'd be prepared to...\", \"provided you order\" + present), and soften (\"That's a bit beyond our budget\", \"Would you consider extending...?\").",
    ],
    [
      ["How many of you have ever missed a train by thirty seconds?", "¿Cuántos de ustedes han perdido alguna vez un tren por treinta segundos?"],
      ["To put that in context, that's twice our annual budget.", "Para ponerlo en contexto, eso es el doble de nuestro presupuesto anual."],
      ["Costs fell by 3% to 1.2 million dollars.", "Los costos bajaron un 3 %, hasta 1,2 millones de dólares."],
      ["If you could commit to two years, we'd be prepared to lower the price.", "Si pudieran comprometerse a dos años, estaríamos dispuestos a bajar el precio."],
    ],
    [
      tr(
        "Gracias a los organizadores por invitarme; es un placer estar aquí.",
        "Thanks to the organizers for inviting me; it's a pleasure to be here.",
        [
          "Thank you to the organizers for inviting me; it's a pleasure to be here.",
          "Thanks to the organizers for inviting me. It's a pleasure to be here.",
          "Thanks to the organizers for having me; it's a pleasure to be here.",
          "Thanks to the organizers for inviting me; it's great to be here.",
          "Thanks to the organizing committee for inviting me; it's a pleasure to be here.",
          "I'd like to thank the organizers for inviting me; it's a pleasure to be here.",
          "Thanks to the organisers for inviting me; it is a pleasure to be here.",
        ],
        "«Los organizadores» or «la organización» (the people) is \"the organizers\": *the organization sounds like an institution. Keep thanks to one line.",
      ),
      fb(
        "How many of you ___ ever forgotten a password at the worst possible moment?",
        "have",
        "¿Cuántos de ustedes [han] olvidado alguna vez una contraseña en el peor momento?",
        [],
        "\"How many of you\" is the subject, so the question takes normal word order with the present perfect \"have forgotten\": no extra auxiliary.",
      ),
      tr(
        "Trabajo en ciberseguridad desde hace diez años.",
        "I've been working in cybersecurity for ten years.",
        [
          "I have been working in cybersecurity for ten years.",
          "I've worked in cybersecurity for ten years.",
          "I have worked in cybersecurity for ten years.",
          "I've been working in cyber security for ten years.",
          "For ten years, I've been working in cybersecurity.",
        ],
        "Credibility that continues to now takes the present perfect + \"for\". *I work in cybersecurity since ten years is the calque that undermines an opening.",
      ),
      fb(
        "I'm responsible ___ our operations in Central America.",
        "for",
        "Soy responsable [de] nuestras operaciones en Centroamérica.",
        [],
        "\"Responsible for\", not *responsible of. \"In charge of\" is the alternative with \"of\".",
      ),
      fb(
        "I've divided my talk ___ three parts.",
        "into",
        "He dividido mi charla [en] tres partes.",
        [],
        "English says \"divide into\": *divide in copies «dividir en».",
      ),
      wo(
        "I'll start by looking at the problem, and then I'll move on to the options.",
        "Empezaré analizando el problema y luego pasaré a las opciones.",
        "A preview is a promise: \"I'll start by + -ing\" and \"Then I'll move on to...\" tell listeners how the talk is organized.",
      ),
      dt(
        "Every year, a third of new restaurants close before their first birthday.",
        "A statistic hook works when it is striking and easy to picture. Note \"a third of\" with no \"the\".",
      ),
      tr(
        "Lo que me lleva a mi segundo punto: el precio.",
        "Which brings me to my second point: price.",
        [
          "Which brings me to my second point: the price.",
          "Which brings me to my second point: pricing.",
          "That brings me to my second point: price.",
          "That brings me to my second point: the price.",
          "That brings me to my second point: pricing.",
          "This brings me to my second point: price.",
        ],
        "\"Which/That brings me to...\" links the end of one point to the next. *What brings me to is wrong: a relative \"which\" refers back to the whole previous idea.",
      ),
      mc(
        "Which transition sounds natural in an English presentation?",
        [
          "Moving on to the budget...",
          "Passing to the next point, the budget...",
          "Following with the budget...",
          "In second place, the budget...",
        ],
        0,
        "\"Moving on to...\" or \"Let's turn now to...\" are standard. *Passing to and *Following with are calques, and \"in second place\" is about a race or ranking.",
      ),
      fb(
        "Bear ___ me for a second while I find the right file.",
        "with",
        "[Ténganme paciencia] un segundo mientras encuentro el archivo correcto.",
        [],
        "\"Bear with me\" asks for a moment of patience. It is spelled \"bear\" (tolerate), not \"bare\".",
      ),
      tr(
        "Para ponerlo en contexto, eso es más que todo nuestro presupuesto de capacitación.",
        "To put that in context, that's more than our entire training budget.",
        [
          "To put that in context, that is more than our entire training budget.",
          "To put that in context, that's more than our whole training budget.",
          "To put that into context, that's more than our entire training budget.",
          "To put that in perspective, that's more than our entire training budget.",
          "To put it in context, that's more than our entire training budget.",
          "To put that in context, it's more than our entire training budget.",
        ],
        "\"To put that in context/perspective\" signals an explanation, not a new topic. It frames a number so the audience can picture it.",
      ),
      mc(
        "«Déjenme resumir lo que hemos visto hasta ahora.» Which is correct?",
        [
          "Let me sum up what we've seen so far.",
          "Let me resume what we've seen so far.",
          "Let me resume what we have seen until now.",
          "Let me make a resume of what we've seen so far.",
        ],
        0,
        "«Resumir» is \"sum up\" or \"summarize\". \"Resume\" means start again after a pause, and an American \"resume\" is a CV.",
      ),
      lc(
        "If there's one thing I'd like you to remember, it's this: speed beats size.",
        "Where in the talk is this sentence most likely to come?",
        [
          "Near the end",
          "In the opening hook",
          "While previewing the structure",
          "In the middle of the data section",
        ],
        0,
        "\"If there's one thing I'd like you to remember...\" signposts the end, so the audience gives you their last burst of attention.",
      ),
      mt(
        "Match each verb to the movement it describes.",
        [
          ["soar", "rise fast and far"],
          ["plummet", "fall fast and far"],
          ["level off", "stop changing after a period of movement"],
          ["bottom out", "reach the lowest point before recovering"],
          ["fluctuate", "go up and down repeatedly"],
          ["dip", "fall slightly for a short time"],
        ],
        "English has a precise verb for each shape of a line. \"Peak\" (the highest point) is the counterpart of \"bottom out\".",
      ),
      mc(
        "We ___ our prices in March, and sales have fallen since.",
        [
          "raised",
          "rose",
          "rised",
          "arose",
        ],
        0,
        "\"Raise\" takes an object (we raised prices); \"rise\" does not (prices rose). Spanish «subir» covers both, hence *We rose the prices.",
      ),
      fb(
        "Sales increased ___ 12% last quarter.",
        "by",
        "Las ventas aumentaron [un] 12 % el último trimestre.",
        [],
        "\"By\" gives the size of the change. *increased in 12% and *increased a 12% copy «aumentar un 12 %».",
      ),
      tr(
        "El desempleo bajó dos puntos, hasta el 9 %.",
        "Unemployment fell by two points to 9 percent.",
        [
          "Unemployment fell by two points to 9%.",
          "Unemployment fell two points to 9 percent.",
          "Unemployment fell by two percentage points to 9 percent.",
          "Unemployment dropped by two points to 9 percent.",
          "Unemployment went down by two points to 9 percent.",
          "Unemployment fell by two points, to 9 percent.",
          "Unemployment decreased by two points to 9 percent.",
        ],
        "\"By\" for the size of the change, \"to\" for the new level. *until 9% copies «hasta», which in this sense is \"to\".",
      ),
      tr(
        "Los clientes corporativos representan el 60 % de nuestras ventas.",
        "Corporate clients account for 60 percent of our sales.",
        [
          "Corporate clients account for 60% of our sales.",
          "Corporate customers account for 60 percent of our sales.",
          "Corporate clients account for sixty percent of our sales.",
          "Corporate clients make up 60 percent of our sales.",
          "Corporate clients represent 60 percent of our sales.",
          "Business clients account for 60 percent of our sales.",
        ],
        "\"Account for\" gives a share. The trap is the article: *represent the 60% copies «representan el 60 %».",
      ),
      fb(
        "There was a 15% increase ___ complaints after the update.",
        "in",
        "Hubo un aumento del 15 % [en] las quejas después de la actualización.",
        [],
        "With the noun, the size takes \"of\" and the thing that changes takes \"in\": \"an increase of 15%\", \"an increase in complaints\".",
      ),
      mc(
        "An interest rate goes from 4% to 5%. Which statement is accurate?",
        [
          "It rose by one percentage point, an increase of 25 percent.",
          "It rose by 25 percentage points.",
          "It rose by one percent.",
          "It rose by 5 percent.",
        ],
        0,
        "The gap between 4 and 5 is one percentage point, but one is 25% of four. Mixing the two can mislead an audience by a factor of 25.",
      ),
      tr(
        "El proyecto costó 2.000 millones de dólares.",
        "The project cost two billion dollars.",
        [
          "The project cost 2 billion dollars.",
          "The project cost $2 billion.",
          "The project cost two billion US dollars.",
        ],
        "«Mil millones» is \"a billion\" in English, and \"billion\" takes no -s after a number: *two thousand millions and *two billions dollars are both wrong.",
      ),
      mc(
        "We've seen ___ growth for six years: about 3% every year.",
        [
          "steady",
          "stable",
          "steadily",
          "stably",
        ],
        0,
        "\"Steady\" means regular and continuous, the right word for growth. \"Stable\" means not changing, and an adjective is needed before the noun.",
      ),
      tr(
        "Estaríamos hablando de algo del orden de 80.000 dólares.",
        "We'd be looking at something in the region of 80,000 dollars.",
        [
          "We would be looking at something in the region of 80,000 dollars.",
          "We'd be looking at something in the region of $80,000.",
          "We'd be looking at something in the ballpark of 80,000 dollars.",
          "We'd be looking at something around 80,000 dollars.",
          "We'd be looking at something like 80,000 dollars.",
          "We'd be talking about something in the region of 80,000 dollars.",
        ],
        "The anchor is framed, not stated bluntly: \"We'd be looking at something in the region of...\". English writes 80,000 with a comma for thousands.",
      ),
      fb(
        "If you ___ commit to three years, we'd be prepared to lower the price by 6%.",
        "could",
        "Si [pudieran] comprometerse a tres años, estaríamos dispuestos a bajar el precio un 6 %.",
        ["were able to"],
        "Never give without getting: \"If you could..., we'd be prepared to...\" ties the concession to a condition and sounds less like a demand than \"if you will\".",
      ),
      mc(
        "We can offer free installation, provided you ___ at least 200 licenses.",
        [
          "order",
          "will order",
          "would order",
          "to order",
        ],
        0,
        "After \"provided (that)\", \"as long as\" and \"on condition that\", English uses the present: *provided you will order copies the future feeling of «siempre que pidan».",
      ),
      tr(
        "¿Considerarían ampliar la garantía a cinco años?",
        "Would you consider extending the warranty to five years?",
        [
          "Would you consider extending the guarantee to five years?",
          "Would you consider increasing the warranty to five years?",
          "Would you be willing to consider extending the warranty to five years?",
          "Would you consider a five-year warranty?",
        ],
        "\"Would you consider\" + -ing is the classic softened counteroffer. *consider to extend is the infinitive slip.",
      ),
      tr(
        "Eso se sale un poco de nuestro presupuesto; buscamos algo más cercano a los 30.000.",
        "That's a bit beyond our budget; we're looking for something closer to 30,000.",
        [
          "That's a bit beyond our budget. We're looking for something closer to 30,000.",
          "That is a bit beyond our budget; we are looking for something closer to 30,000.",
          "That's slightly beyond our budget; we're looking for something closer to 30,000.",
          "That's a little beyond our budget; we're looking for something closer to 30,000.",
          "That's a bit outside our budget; we're looking for something closer to 30,000.",
          "That's a bit beyond our budget; we were looking for something closer to 30,000.",
          "That's a bit beyond our budget; we're looking for something nearer 30,000.",
        ],
        "Reject the number, not the person, and point to an alternative. \"A bit\" softens; *That is out of our budget sounds blunter.",
      ),
      tr(
        "Tendría que consultarlo con mi directora.",
        "I'd need to run that by my director.",
        [
          "I would need to run that by my director.",
          "I'd need to run it by my director.",
          "I'd need to check that with my director.",
          "I'd need to check with my director.",
          "I'd have to run that by my director.",
          "I'd have to check with my director.",
          "I'd need to run that by my manager.",
        ],
        "«Consultarlo con» is \"run it by\" or \"check with\". *consult it with is a calque; \"consult\" takes the person (\"consult my director\").",
      ),
      lc(
        "Let's split the difference: forty-five thousand.",
        "What is being proposed?",
        [
          "Each side moves halfway to close the gap.",
          "The price is divided into two payments.",
          "One side simply accepts the other's figure.",
          "The negotiation is postponed.",
        ],
        0,
        "\"Split the difference\" means each side moves 50% of the gap, for example from 40,000 and 50,000 to 45,000.",
      ),
      wo(
        "So much for the problem. Now let's look at what we can do about it.",
        "Hasta aquí el problema. Ahora veamos qué podemos hacer al respecto.",
        "\"So much for...\" closes one section; \"Now let's look at...\" opens the next. Together they make a clear transition.",
      ),
      tr(
        "Las ventas se dispararon un 40 % tras el lanzamiento, lo que me lleva a mi siguiente punto.",
        "Sales soared by 40 percent after the launch, which brings me to my next point.",
        [
          "Sales soared by 40% after the launch, which brings me to my next point.",
          "Sales soared 40 percent after the launch, which brings me to my next point.",
          "Sales surged by 40 percent after the launch, which brings me to my next point.",
          "Sales skyrocketed by 40 percent after the launch, which brings me to my next point.",
          "Sales shot up by 40 percent after the launch, which brings me to my next point.",
          "Sales soared by 40 percent following the launch, which brings me to my next point.",
          "Sales soared by 40 percent after the launch. That brings me to my next point.",
        ],
        "A precise verb of movement (\"soar\") with \"by\", then a linked transition. *rose in 40% and *what brings me are the traps.",
      ),
      mc(
        "Which sentence is correct?",
        [
          "Revenue rose by 8% to 3.2 million dollars.",
          "Revenue raised in 8% until 3.2 millions dollars.",
          "Revenue rose a 8% to 3.2 millions of dollars.",
          "The revenue raised by 8% to 3,2 million dollars.",
        ],
        0,
        "Intransitive \"rose\", \"by\" for the change, \"to\" for the new level, no -s on \"million\" and a decimal point in 3.2.",
      ),
      dt(
        "To put that in perspective, the drop of two percentage points cost us four million dollars.",
        "A framing phrase, percentage points (not percent) and \"million\" with no -s after a number.",
      ),
      sp(
        "Would you consider a two-year contract? If so, we could bring the price down slightly.",
        "¿Considerarían un contrato de dos años? Si es así, podríamos bajar un poco el precio.",
        "Let \"consider\" rise as a question; stress \"two-year\" and \"slightly\".",
        "A softened counteroffer followed by a conditional concession: never give without getting.",
      ),
      sp(
        "Good morning, everyone. How many of you checked your email before breakfast today?",
        "Buenos días a todos. ¿Cuántos de ustedes revisaron su correo antes de desayunar hoy?",
        "Pause after the greeting; stress \"before breakfast\" and let the question hang.",
        "\"Good morning, everyone\" (not *to everybody) and a question hook with \"How many of you\" as the subject: no auxiliary \"did\".",
      ),
    ],
  ),
  // ---------------------------------------------------------------------
  // Drill 2. Openings for different audiences, transitions under pressure
  // and online, the counteroffer dialogue, pronunciation for presenters,
  // plus a whole-unit mix
  // ---------------------------------------------------------------------
  drill(
    "en-c2-presenting-unit-drill-2",
    "Drill: Pitch, Recap, Trade and Stress",
    "Adapt your opening to investors, conferences and your own team, recap and signpost under time pressure and online, trade offers in a friendly negotiation, and use stress, chunking and pauses so the key words land.",
    "Recap: adapt, recap, trade, stress",
    [
      "Investors want the problem, the size and the ask (\"We're raising two million dollars to expand into Mexico\"); conferences want curiosity (\"Let me explain\"); your team wants the headline (\"I'll keep this short\"). Recap selectively (\"The takeaway so far is...\"), manage time openly (\"I'm conscious of time\", \"In the interest of time\") and signpost online (\"I think you're on mute\", \"You're breaking up\").",
      "In negotiation, respond to the number, not the person (\"more than we were expecting\"), use the hypothetical past (\"What if we met you at...?\") and confirm every term (\"So, just to confirm...\"). In delivery, stress content words, move stress for contrast (\"I said MARCH, not May\"), respect noun and verb pairs (an IN-crease, to in-CREASE) and pause between thought groups.",
    ],
    [
      ["The short version is: we need a bigger warehouse.", "La versión corta es: necesitamos un almacén más grande."],
      ["In the interest of time, I'll go through this quickly.", "En aras del tiempo, repasaré esto rápidamente."],
      ["What if we met you at seven fifty?", "¿Y si les ofreciéramos siete cincuenta?"],
      ["We expect demand to increase next year.", "Esperamos que la demanda aumente el próximo año."],
    ],
    [
      tr(
        "Estamos levantando dos millones de dólares para expandirnos a Colombia.",
        "We're raising two million dollars to expand into Colombia.",
        [
          "We are raising two million dollars to expand into Colombia.",
          "We're raising 2 million dollars to expand into Colombia.",
          "We're raising $2 million to expand into Colombia.",
          "We're raising two million dollars to expand to Colombia.",
          "We're raising two million dollars in order to expand into Colombia.",
        ],
        "\"Raise money\" is «levantar o captar fondos», and a company \"expands into\" a market. \"Million\" takes no -s after a number.",
      ),
      fb(
        "We need the funding to expand ___ the Brazilian market.",
        "into",
        "Necesitamos la financiación para expandirnos [al] mercado brasileño.",
        [],
        "\"Expand into\" a market or region: movement into a new space. *expand to the market is less idiomatic in a pitch.",
      ),
      mc(
        "You are announcing a delay to your own team. Which opening fits best?",
        [
          "I'll keep this short: we're moving the launch to May, and here's why.",
          "Imagine a world where every product launched on time.",
          "Three years ago, I was sitting in a cafe in Lima, thinking about deadlines...",
          "Everything you've been told about launches is wrong.",
        ],
        0,
        "Colleagues need the headline and what it means for them. A long hook or a bold claim can feel manipulative when the news affects their work.",
      ),
      tr(
        "La versión corta es que necesitamos dos diseñadores más.",
        "The short version is that we need two more designers.",
        [
          "The short version is: we need two more designers.",
          "The short version is we need two more designers.",
          "The short answer is that we need two more designers.",
          "In short, we need two more designers.",
        ],
        "\"The short version is...\" gets an internal audience straight to the point. Note the order \"two more designers\", not *more two designers.",
      ),
      tr(
        "Antes de que pregunten: no, esto no afecta sus vacaciones.",
        "Before you ask: no, this doesn't affect your vacation.",
        [
          "Before you ask: no, this doesn't affect your vacations.",
          "Before you ask: no, this does not affect your vacation.",
          "Before you ask: no, this doesn't affect your vacation time.",
          "Before you ask: no, this doesn't affect your holidays.",
          "Before you ask, no, this doesn't affect your vacation.",
          "Before you ask: no, this won't affect your vacation.",
        ],
        "Anticipating the audience's main worry is the internal version of a hook. «Afectar» is \"affect\" (verb); \"effect\" is the noun.",
      ),
      wo(
        "What if the real problem isn't the price, but the way we sell it?",
        "¿Y si el verdadero problema no es el precio, sino la manera en que lo vendemos?",
        "A counterintuitive question hook for a conference audience, built on \"not X, but Y\" («no... sino...»).",
      ),
      tr(
        "Esto plantea la pregunta de cuánto tiempo podemos seguir así.",
        "This raises the question of how long we can go on like this.",
        [
          "This raises the question of how long we can carry on like this.",
          "This raises the question of how long we can continue like this.",
          "This raises the question of how long we can keep going like this.",
          "This raises the question of how long we can go on this way.",
          "That raises the question of how long we can go on like this.",
        ],
        "\"This raises the question of...\" turns a finding into the next section. The embedded question keeps statement order: \"how long we can go on\", not *how long can we go on.",
      ),
      fb(
        "So where does that ___ us?",
        "leave",
        "Entonces, ¿en qué situación nos [deja] eso?",
        [],
        "\"So where does that leave us?\" closes a section and opens the obvious next question. *Where does that put us is less natural.",
      ),
      fb(
        "The ___ so far is that customers care more about speed than price.",
        "takeaway",
        "[La idea clave] hasta ahora es que a los clientes les importa más la rapidez que el precio.",
        ["key takeaway", "main takeaway", "key point", "main point"],
        "A recap that helps, not repeats: \"The takeaway so far is...\" keeps one idea for the next section.",
      ),
      tr(
        "Como vamos justos de tiempo, pasaré directamente a las recomendaciones.",
        "Since we're short on time, I'll skip ahead to the recommendations.",
        [
          "Since we're short on time, I'll go straight to the recommendations.",
          "As we're short on time, I'll skip ahead to the recommendations.",
          "As we're pressed for time, I'll skip ahead to the recommendations.",
          "Since we're pressed for time, I'll go straight to the recommendations.",
          "I'm conscious of time, so I'll skip ahead to the recommendations.",
          "In the interest of time, I'll skip ahead to the recommendations.",
          "We're short on time, so I'll skip ahead to the recommendations.",
          "Since we are short on time, I will skip ahead to the recommendations.",
        ],
        "«Ir justo de tiempo» is \"be short on time\" or \"pressed for time\". *We go just of time is a word-for-word calque.",
      ),
      mc(
        "«Por falta de tiempo, nos saltaremos el último caso.» Which is correct?",
        [
          "For lack of time, we'll skip the last case study.",
          "For missing time, we'll skip the last case study.",
          "By lack of time, we'll skip the last case study.",
          "For fault of time, we'll skip the last case study.",
        ],
        0,
        "«Por falta de» is \"for lack of\" (or \"since we're short on time\"). *For missing time and *for fault of are calques.",
      ),
      fb(
        "I think we're running ___ of time, so I'll stop there.",
        "out",
        "Creo que se nos [acaba] el tiempo, así que lo dejo ahí.",
        [],
        "«Se nos acaba el tiempo» is \"we're running out of time\". When the chair signals, close cleanly: \"I'll stop there.\"",
      ),
      lc(
        "Sorry, you're breaking up a bit. Could you say that again?",
        "What is the problem?",
        [
          "The other person's connection is unstable.",
          "The other person is ending the relationship.",
          "The other person is on mute.",
          "The other person isn't sharing their screen.",
        ],
        0,
        "\"You're breaking up\" is «se te corta»: the audio keeps cutting out. \"You're on mute\" would mean nobody can hear you at all.",
      ),
      mc(
        "«Te quedaste congelado un segundo.» Which is the natural English on a video call?",
        [
          "You froze for a second.",
          "You stayed frozen a second.",
          "You remained congealed for a second.",
          "You were frozen during one second.",
        ],
        0,
        "Online problems have fixed phrases: \"You froze\", \"You're on mute\", \"You're breaking up\". *during one second is also a calque of «durante un segundo».",
      ),
      tr(
        "No duden en dejar sus preguntas en el chat.",
        "Feel free to drop your questions in the chat.",
        [
          "Please feel free to drop your questions in the chat.",
          "Feel free to put your questions in the chat.",
          "Feel free to post your questions in the chat.",
          "Feel free to leave your questions in the chat.",
          "Feel free to type your questions in the chat.",
          "Don't hesitate to drop your questions in the chat.",
        ],
        "\"Feel free to...\" invites participation warmly; online signposting has to be explicit because the audience can't see the room.",
      ),
      tr(
        "¿Qué cifra tenía en mente?",
        "What sort of figure did you have in mind?",
        [
          "What figure did you have in mind?",
          "What kind of figure did you have in mind?",
          "What figure do you have in mind?",
          "What sort of figure do you have in mind?",
          "What number did you have in mind?",
        ],
        "Inviting a counteroffer with a distancing past tense (\"did you have\") sounds open rather than pushy.",
      ),
      tr(
        "Le seré sincera: es un poco más de lo que esperábamos.",
        "I'll be honest with you: that's a bit more than we were expecting.",
        [
          "I'll be honest with you: that's a little more than we were expecting.",
          "I'll be honest: that's a bit more than we were expecting.",
          "I'll be honest with you, that's a bit more than we were expecting.",
          "I'll be honest with you: that's slightly more than we were expecting.",
          "I'll be honest with you: that's a bit more than we expected.",
          "To be honest, that's a bit more than we were expecting.",
        ],
        "Respond to the number, not the person, and soften with \"a bit\" and the past continuous \"we were expecting\". *more of what we expected copies «más de lo que».",
      ),
      fb(
        "What if we ___ you at eight fifty, and you committed to eighteen months?",
        "met",
        "¿Y si [le ofreciéramos] ocho cincuenta y usted se comprometiera a dieciocho meses?",
        [],
        "After \"What if\", a proposal takes the hypothetical past (\"met\", \"committed\"): it sounds exploratory rather than like a demand. \"Meet someone at a price\" means come to that figure.",
      ),
      tr(
        "Entiendo lo que dice, pero no es algo que podamos aceptar en este momento.",
        "I hear what you're saying, but that's not something we could agree to at the moment.",
        [
          "I hear what you're saying, but that's not something we can agree to at the moment.",
          "I hear what you're saying, but that's not something we could accept at the moment.",
          "I hear what you're saying, but that's not something we can accept right now.",
          "I hear what you're saying, but it's not something we could agree to at the moment.",
          "I understand what you're saying, but that's not something we could agree to at the moment.",
          "I hear what you are saying, but that is not something we could agree to at the moment.",
          "I hear what you're saying, but that's not something we could agree to right now.",
        ],
        "Acknowledge, then decline the term, not the relationship. The preposition stays at the end: \"something we could agree to\".",
      ),
      lc(
        "So, just to confirm: seven twenty-five a kilo, eighteen months, delivery within 48 hours.",
        "What price per kilo was agreed?",
        [
          "$7.25",
          "$7.20",
          "$72.50",
          "$725",
        ],
        0,
        "Prices are said in pairs: \"seven twenty-five\" is $7.25, as \"eight ten\" is $8.10. Confirming every term prevents misunderstandings later.",
      ),
      tr(
        "Hablemos en dos meses para ver cómo va.",
        "Let's touch base in two months to see how it's going.",
        [
          "Let's touch base in two months to see how things are going.",
          "Let's touch base in two months and see how it's going.",
          "Let's touch base in a couple of months to see how it's going.",
          "Let's check in in two months to see how it's going.",
          "Let's talk in two months to see how it's going.",
        ],
        "\"Touch base\" is a quick check-in to keep the relationship going after a deal.",
      ),
      mc(
        "In \"We want to launch the app in March\", which words carry the main stress?",
        [
          "want, launch, app, March",
          "we, to, the, in",
          "every word equally",
          "to, the, in, March",
        ],
        0,
        "Content words (main verbs, nouns, adjectives) carry the beats; function words like \"to\", \"the\" and \"in\" are reduced. Equal stress on every syllable is the Spanish rhythm that sounds monotonous in English.",
      ),
      mc(
        "A colleague thinks the meeting is on Tuesday. Which stress pattern corrects her?",
        [
          "The meeting is on THURSDAY, not Tuesday.",
          "The MEETING is on Thursday, not Tuesday.",
          "The meeting IS on Thursday, not Tuesday.",
          "The meeting is ON Thursday, not Tuesday.",
        ],
        0,
        "Contrastive stress goes on the word that carries the new information. Spanish often uses word order for this; English simply stresses the contrasting word harder.",
      ),
      mt(
        "Match each word to its stress pattern.",
        [
          ["an increase (noun)", "IN-crease"],
          ["to increase (verb)", "in-CREASE"],
          ["economy", "e-CON-o-my"],
          ["economic", "ec-o-NOM-ic"],
          ["analysis", "a-NAL-y-sis"],
          ["category", "CAT-e-go-ry"],
        ],
        "Two-syllable noun and verb pairs move the stress (noun first, verb second). Long business words often differ from their Spanish cognates: «economía», «análisis», «categoría».",
      ),
      mc(
        "Where should the pauses fall in this sentence?",
        [
          "In the first quarter / our costs rose / by eight percent.",
          "In the first / quarter our costs / rose by eight / percent.",
          "In / the first quarter our / costs rose by / eight percent.",
          "In the first quarter our costs rose by eight / percent.",
        ],
        0,
        "Speak in thought groups: each chunk is a unit of meaning with one main stress. Pausing inside a chunk breaks the meaning.",
      ),
      lc(
        "And the result? Thirty percent. In three months.",
        "Why does the presenter break this into short fragments?",
        [
          "To pause for effect and let the key number land",
          "Because she has forgotten her notes",
          "To ask the audience a real question",
          "To correct an earlier mistake",
        ],
        0,
        "A rhetorical question, a pause, the number, a pause: silence before and after a key figure lets it sink in.",
      ),
      wo(
        "Just unmute and jump in if you have a question.",
        "Solo activen el micrófono e intervengan si tienen alguna pregunta.",
        "\"Unmute\" and \"jump in\" invite participation online; explicit invitations matter when the audience can't see each other.",
      ),
      tr(
        "En resumen: los costos suben y los márgenes bajan. Tengan eso en cuenta cuando veamos los precios.",
        "So, to recap: costs are rising and margins are falling. Keep that in mind as we look at pricing.",
        [
          "So, to recap: costs are rising and margins are falling. Keep that in mind when we look at pricing.",
          "To recap: costs are rising and margins are falling. Keep that in mind as we look at pricing.",
          "To sum up: costs are rising and margins are falling. Keep that in mind as we look at prices.",
          "In short: costs are up and margins are down. Keep that in mind as we look at pricing.",
          "So, to recap: costs are up and margins are down. Bear that in mind as we look at pricing.",
          "So, to sum up: costs are rising and margins are falling. Keep that in mind as we look at prices.",
          "In a nutshell, costs are rising and margins are falling. Keep that in mind as we look at pricing.",
        ],
        "A recap that sets up the next section. «Resumir» is \"recap\" or \"sum up\", never *resume, and \"rise/fall\" need no object here.",
      ),
      mc(
        "Which is the strongest opening for an investor pitch?",
        [
          "Every year, small clinics lose 3 billion dollars to missed appointments. We've built the tool that fixes that.",
          "Good morning to everybody, and sorry for my English. Today I am going to talk about our company.",
          "First of all I want to thank the organization, and then I will explain our history since 2015.",
          "Our company is very innovative, very experienced and very, very good.",
        ],
        0,
        "Investors want the problem, its size and the solution, fast. The others apologize, use calques (*to everybody, *the organization) or rely on empty adjectives instead of facts.",
      ),
      tr(
        "¿Y si les ofreciéramos ocho veinticinco, siempre que firmen por un año?",
        "What if we offered you eight twenty-five, provided you sign for a year?",
        [
          "What if we offered you eight twenty-five, provided that you sign for a year?",
          "What if we offered you eight twenty-five, provided you sign for one year?",
          "What if we offered you eight twenty-five, as long as you sign for a year?",
          "What if we met you at eight twenty-five, provided you sign for a year?",
          "What if we offered you eight twenty-five, provided you signed for a year?",
          "What if we offered eight twenty-five, provided you sign for a year?",
          "What if we offered you $8.25, provided you sign for a year?",
        ],
        "Hypothetical past after \"What if\", and a condition with \"provided (that)\" + present (not *will sign). Every concession comes with a condition.",
      ),
      dt(
        "In the interest of time, I'll skip the details; they're all in the handout.",
        "Handling an overrun openly and calmly. \"In the interest of time\" (BrE also \"in the interests of time\").",
      ),
      dt(
        "Can everyone see my screen? Good. Let me just pull that together before we move on.",
        "Explicit online signposting plus a recap signal (\"Let me just pull that together\").",
      ),
      sp(
        "I said fifteen percent, not fifty.",
        "Dije quince por ciento, no cincuenta.",
        "Stress \"-TEEN\" in fifteen and \"FIF-\" in fifty: the contrast lives in those syllables.",
        "Contrastive stress on the word that carries the correction. \"Fifteen\" vs \"fifty\" is also a stress pair that listeners rely on.",
      ),
      sp(
        "It was midnight, and I was staring at a forecast that made no sense. Let me explain.",
        "Era medianoche y yo estaba mirando un pronóstico que no tenía ningún sentido. Déjenme explicarles.",
        "Slow down on \"made no sense\"; pause before \"Let me explain\".",
        "A short story hook with a place, a moment and a problem, followed quickly by \"Let me explain\".",
      ),
    ],
  ),
];
