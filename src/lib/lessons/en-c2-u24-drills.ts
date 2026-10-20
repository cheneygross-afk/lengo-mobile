// Synced from cheneygross-afk/lengo:src/lib/lessons/en-c2-u24-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Required drill lessons for EN-C2 unit u24 (historical narrative: narrative tenses, inverted past perfect, future in the past, historic present, free indirect style, used to and would, tense nuance, counterfactuals): a short recap, then graded practice.

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

export const EN_C2_U24_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. Parts 1-5: narrative tenses, inversions, future in the past, historic present, free indirect style
  // ---------------------------------------------------------------------
  drill(
    "en-c2-history-unit-drill-1",
    "Drill: Narrative Tenses, Inversion and the Future in the Past",
    "Narrate historical events with the right layering of past tenses, use literary inversions with no sooner and hardly, look forward from the past with would and was to, keep the historic present in its place, and write free indirect thought.",
    "Recap: the historian's tense toolkit",
    [
      "The past simple carries the main line, the past continuous paints a backdrop in progress, and the past perfect steps back to an earlier layer (essential after \"by the time\" and verbs like discover or realize, optional after \"after\" and \"before\"). States stay in the past simple. Fronted \"No sooner\" pairs with \"than\", fronted \"Hardly / Scarcely / Barely\" with \"when\", and both force inversion: \"No sooner had... than\".",
      "From a past point, \"would\" looks forward to destiny (\"He would never return\"), \"was to\" to fate or a formal plan, \"was about to\" / \"on the point of\" + -ing to something imminent, and \"was to have\" + participle to a plan that failed. Formal English history uses the past; the present belongs in timelines, captions, headlines and dramatic narration. Free indirect style backshifts a character's thoughts but keeps questions and words like \"now\" and \"tomorrow\".",
    ],
    [
      ["The rebels had already fled by the time the troops entered the village.", "Los rebeldes ya habían huido cuando las tropas entraron en el pueblo."],
      ["Hardly had the ceasefire begun when the shelling resumed.", "Apenas había empezado el alto el fuego cuando se reanudaron los bombardeos."],
      ["The young printer would later become one of the founders of the republic.", "El joven impresor llegaría a ser uno de los fundadores de la república."],
      ["Could they hold the bridge until morning? Nobody believed it.", "¿Podrían resistir en el puente hasta la mañana? Nadie lo creía."],
    ],
    [
      // --- Part 1: main line, backdrop, past perfect ---
      mc(
        "«La reina era muy popular y tenía muchos aliados en el parlamento.» Which is the best translation?",
        [
          "The queen was very popular and had many allies in parliament.",
          "The queen was being very popular and was having many allies in parliament.",
          "The queen would be very popular and would have many allies in parliament.",
          "The queen has been very popular and has had many allies in parliament.",
        ],
        0,
        "Stative verbs (be, have) stay in the past simple even in the background. Not every «imperfecto» becomes a past continuous, and \"would\" for states sounds hypothetical.",
      ),
      fb(
        "The delegates ___ still arguing about the border when news of the uprising reached Vienna.",
        "were",
        "Los delegados [todavía discutían] sobre la frontera cuando la noticia del levantamiento llegó a Viena.",
        [],
        "The past continuous paints an action in progress at the moment another event happened. \"Still\" sits between \"were\" and the -ing form.",
      ),
      tr(
        "Mientras los ingenieros reparaban el puente, el enemigo avanzaba por el valle.",
        "While the engineers were repairing the bridge, the enemy was advancing through the valley.",
        [
          "While the engineers were repairing the bridge, the enemy was advancing along the valley.",
          "While the engineers were repairing the bridge, the enemy was advancing up the valley.",
          "While the engineers were repairing the bridge, the enemy was moving through the valley.",
          "As the engineers were repairing the bridge, the enemy was advancing through the valley.",
          "The enemy was advancing through the valley while the engineers were repairing the bridge.",
          "While the engineers repaired the bridge, the enemy was advancing through the valley.",
        ],
        "Two processes running side by side: both can take the past continuous. Here the «imperfecto» really is an action in progress, so the continuous fits.",
      ),
      tr(
        "Cuando llegaron los inspectores, el tesorero ya había destruido los documentos.",
        "When the inspectors arrived, the treasurer had already destroyed the documents.",
        [
          "By the time the inspectors arrived, the treasurer had already destroyed the documents.",
          "When the inspectors arrived, the treasurer had already destroyed the papers.",
          "By the time the inspectors arrived, the treasurer had destroyed the documents.",
          "When the inspectors arrived the treasurer had already destroyed the documents.",
          "When the inspectors arrived, the treasurer had already destroyed the records.",
          "The treasurer had already destroyed the documents when the inspectors arrived.",
        ],
        "The destruction came first, so it takes the past perfect. Without it (*the treasurer destroyed the documents) the reader assumes he did it after they arrived.",
      ),
      fb(
        "The archaeologists realized that someone ___ the tomb centuries earlier.",
        "had opened",
        "Los arqueólogos se dieron cuenta de que alguien [había abierto] la tumba siglos antes.",
        ["had entered", "had robbed", "had looted"],
        "After a past verb of realizing or discovering, an earlier event needs the past perfect. Spanish sometimes tolerates the «indefinido» here; English is stricter.",
      ),
      tr(
        "Los refugiados llevaban dos semanas caminando cuando llegaron a la frontera.",
        "The refugees had been walking for two weeks when they reached the border.",
        [
          "The refugees had been walking for two weeks when they arrived at the border.",
          "The refugees had been walking for two weeks when they got to the border.",
          "The refugees had been on the road for two weeks when they reached the border.",
          "The refugees had been walking for a fortnight when they reached the border.",
          "The refugees had been walking for two weeks by the time they reached the border.",
        ],
        "«Llevaban... + gerundio» up to a past moment is the past perfect continuous with \"for\".",
      ),
      mc(
        "Which version of the sequence sounds like natural historical prose?",
        [
          "The fleet left Cadiz, crossed the Atlantic and reached Havana in six weeks.",
          "The fleet had left Cadiz, had crossed the Atlantic and had reached Havana in six weeks.",
          "The fleet was leaving Cadiz, was crossing the Atlantic and was reaching Havana in six weeks.",
          "The fleet has left Cadiz, has crossed the Atlantic and has reached Havana in six weeks.",
        ],
        0,
        "A chain of events told in order needs only the past simple. Stacking past perfects with no later reference point is a classic sign of non-native writing.",
      ),
      wo(
        "After the general resigned, the army split into rival factions.",
        "Tras la dimisión del general, el ejército se dividió en facciones rivales.",
        "\"After\" already makes the order clear, so the past simple is fine in both clauses (\"after he had resigned\" is also correct and more formal).",
      ),
      // --- Part 2: flashbacks and inversion ---
      fb(
        "It was the first time a woman ___ been elected to the city council.",
        "had",
        "Era la primera vez que una mujer [había] sido elegida para el concejo municipal.",
        [],
        "\"It was the first time\" looks back from a past point, so it pairs with the past perfect. Under pressure, learners slip into *was elected.",
      ),
      mc(
        "Which sentence is correct?",
        [
          "No sooner had the king signed the decree than riots broke out.",
          "No sooner had the king signed the decree when riots broke out.",
          "No sooner the king had signed the decree than riots broke out.",
          "No sooner did the king had signed the decree than riots broke out.",
        ],
        0,
        "\"No sooner\" is a comparative, so it pairs with \"than\", and when fronted it forces inversion: \"had the king signed\". *No sooner... when mixes two patterns.",
      ),
      mc(
        "Which sentence is correct?",
        [
          "Scarcely had the ship left port when the storm struck.",
          "Scarcely had the ship left port than the storm struck.",
          "Scarcely the ship had left port when the storm struck.",
          "Scarcely had left the ship port when the storm struck.",
        ],
        0,
        "\"Scarcely\", \"hardly\" and \"barely\" are not comparatives, so they take \"when\" (or \"before\"). Fronted, they need inversion: \"had the ship left\".",
      ),
      kw(
        "SOONER",
        "The new law came into force and was challenged in court almost immediately.",
        "No ___ into force than it was challenged in court.",
        "sooner had the new law come",
        [],
        "Fronted \"No sooner\" + \"had\" + subject + participle, then \"than\" + past simple.",
      ),
      kw(
        "HARDLY",
        "He took office, and the scandal broke almost at once.",
        "___ office when the scandal broke.",
        "Hardly had he taken",
        [],
        "\"Hardly had he taken office when...\": inversion after the fronted adverb, and \"when\", not \"than\".",
      ),
      tr(
        "Solo cuando terminó el asedio se supo el verdadero número de víctimas.",
        "Only after the siege had ended did the true number of victims become known.",
        [
          "Only after the siege ended did the true number of victims become known.",
          "Only when the siege had ended did the true number of victims become known.",
          "Only when the siege ended did the true number of victims become known.",
          "Only after the siege had ended did the real number of victims become known.",
          "Only after the siege had ended was the true number of victims known.",
          "Only once the siege had ended did the true number of victims become known.",
          "Only after the siege was over did the true number of victims become known.",
        ],
        "With fronted \"Only after...\", the inversion falls in the main clause (\"did the number become known\"), not in the time clause. *Only after had the siege ended inverts the wrong clause.",
      ),
      tr(
        "Nunca antes se había enfrentado el país a una sequía semejante.",
        "Never before had the country faced such a drought.",
        [
          "Never before had the country faced a drought like this.",
          "Never before had the country faced a drought like that.",
          "Never before had the country faced such a severe drought.",
          "The country had never before faced such a drought.",
          "The country had never faced such a drought before.",
          "Never before had the nation faced such a drought.",
        ],
        "Fronted \"Never before\" forces inversion with \"had\" + subject, and the past perfect looks back from the past moment of the narrative.",
      ),
      dt(
        "Little did they know that the plot had already been betrayed.",
        "\"Little did they know\" expresses dramatic irony; it uses \"did\" + base form. Listen for \"had already been\".",
      ),
      // --- Part 3: future in the past ---
      fb(
        "In 1840 she was a seamstress in Lyon; twenty years later she ___ run one of the largest textile firms in France.",
        "would",
        "En 1840 era costurera en Lyon; veinte años después [dirigiría] una de las mayores empresas textiles de Francia.",
        [],
        "\"Would\" here is the past of \"will\": destiny seen from the past, like the Spanish conditional «dirigiría». *Will run would only work in the historic present.",
      ),
      tr(
        "Partió hacia el exilio en 1939; nunca volvería a ver su ciudad natal.",
        "He left for exile in 1939; he would never see his hometown again.",
        [
          "He went into exile in 1939; he would never see his hometown again.",
          "He left for exile in 1939; he would never see his home town again.",
          "He left for exile in 1939; he would never see his native city again.",
          "He went into exile in 1939; he would never see his native city again.",
          "He left for exile in 1939; he was never to see his hometown again.",
          "He went into exile in 1939; he was never to see his hometown again.",
          "She left for exile in 1939; she would never see her hometown again.",
        ],
        "\"Would never\" + \"again\" looks forward from the past to what did not happen later. \"Was never to see\" is the more solemn equivalent.",
      ),
      tr(
        "Esta habría de ser su última expedición al Amazonas.",
        "This was to be his last expedition to the Amazon.",
        [
          "This was to be her last expedition to the Amazon.",
          "This would be his last expedition to the Amazon.",
          "This would be her last expedition to the Amazon.",
          "This was to be his final expedition to the Amazon.",
          "This would turn out to be his last expedition to the Amazon.",
          "This was to prove his last expedition to the Amazon.",
        ],
        "\"Was to be\" expresses destiny, more solemn than \"would\": it maps onto «habría de» or «estaba destinado a».",
      ),
      mc(
        "\"The treaty was to be signed in Lisbon.\" What can you be sure of from this sentence alone?",
        [
          "There was an official plan to sign it in Lisbon",
          "The treaty was definitely signed in Lisbon",
          "The treaty was never signed at all",
          "The treaty should be signed in Lisbon in the future",
        ],
        0,
        "\"Was to\" can express destiny or simply a formal plan, so the context decides whether it happened. To show the plan failed, use \"was to have been signed\".",
      ),
      fb(
        "The government was on the point of ___ when the army intervened.",
        "collapsing",
        "El gobierno estaba [a punto de caer] cuando intervino el ejército.",
        ["falling", "resigning"],
        "\"On the point of\" takes -ing (\"of\" is a preposition), while \"about to\" takes the infinitive. *On the point to collapse maps «a punto de» word for word.",
      ),
      tr(
        "La exposición iba a inaugurarse en marzo, pero el museo se inundó.",
        "The exhibition was to have opened in March, but the museum flooded.",
        [
          "The exhibition was to have opened in March, but the museum was flooded.",
          "The exhibition was going to open in March, but the museum flooded.",
          "The exhibition was going to open in March, but the museum was flooded.",
          "The exhibition was supposed to open in March, but the museum flooded.",
          "The exhibition was supposed to open in March, but the museum was flooded.",
          "The exhibition was to have been inaugurated in March, but the museum flooded.",
          "The exhibition was due to open in March, but the museum flooded.",
        ],
        "\"Was to have\" + participle tells the reader at once that the plan failed. \"Was going to\" or \"was supposed to\" + \"but\" are less formal equivalents.",
      ),
      lc(
        "The country was on the verge of bankruptcy.",
        "What does this mean?",
        [
          "The country was very close to going bankrupt",
          "The country had just recovered from bankruptcy",
          "The country had been bankrupt for years",
          "The country would never go bankrupt",
        ],
        0,
        "\"On the verge of\" (and the more dramatic \"on the brink of\") means very close to a big change or catastrophe: «al borde de».",
      ),
      // --- Part 4: the historic present ---
      mc(
        "You are translating a Spanish academic article: «En 1810 Hidalgo convoca al pueblo y se inicia la guerra de independencia.» Which version suits an English history journal?",
        [
          "In 1810 Hidalgo called on the people to rise, and the war of independence began.",
          "In 1810 Hidalgo calls on the people to rise, and the war of independence begins.",
          "In 1810 Hidalgo has called on the people to rise, and the war of independence has begun.",
          "In 1810 Hidalgo calls on the people to rise, and the war of independence began.",
        ],
        0,
        "Formal English history writing is overwhelmingly in the past, so the Spanish «presente histórico» becomes the past simple. The present perfect cannot go with \"in 1810\", and mixing frames is the worst option.",
      ),
      fb(
        "1969: Apollo 11 ___ on the Moon.",
        "lands",
        "1969: el Apolo 11 [llega] a la Luna.",
        [],
        "Timelines and captions use the present simple for past events, just as Spanish does. Keep the habit out of the paragraphs of an essay.",
      ),
      mt(
        "Match each headline with its meaning.",
        [
          ["President to Visit Peru", "The president will visit Peru"],
          ["Bridge Reopened After Repairs", "The bridge has been reopened"],
          ["Minister Resigns", "The minister has resigned"],
          ["Ancient Ship Found off Crete", "An ancient ship has been found"],
        ],
        "Headlines drop articles and auxiliaries: the present simple for a recent event, the bare participle for a passive, and \"to\" + infinitive for a future event.",
      ),
      tr(
        "La autora sostiene que la crisis se podría haber evitado.",
        "The author argues that the crisis could have been avoided.",
        [
          "The author argues the crisis could have been avoided.",
          "The author maintains that the crisis could have been avoided.",
          "The author contends that the crisis could have been avoided.",
          "The author claims that the crisis could have been avoided.",
          "The writer argues that the crisis could have been avoided.",
          "The author argues that the crisis might have been avoided.",
        ],
        "What authors, books and documents say goes in the present (\"argues\", \"states\", \"claims\"): the text is still there. The event itself stays in the past.",
      ),
      mc(
        "Which sentence keeps the time frame consistent?",
        [
          "Napoleon escapes from Elba and lands in France with a few hundred men.",
          "Napoleon escapes from Elba and landed in France with a few hundred men.",
          "Napoleon escaped from Elba and lands in France with a few hundred men.",
          "Napoleon has escaped from Elba and landed in France with a few hundred men.",
        ],
        0,
        "Once you choose the historic present, stay in it for the chain of events. Switching back and forth inside one sequence is the main fault examiners notice.",
      ),
      // --- Part 5: free indirect style ---
      mc(
        "Which sentence is free indirect thought?",
        [
          "Would the letter arrive in time? She doubted it.",
          "She wondered whether the letter would arrive in time.",
          "She thought, \"Will the letter arrive in time?\"",
          "She asked if the letter will arrive in time.",
        ],
        0,
        "Free indirect style keeps the question form but uses the narrator's past tense and third person, with no reporting verb. The second is ordinary indirect speech, the third is direct, and the last mixes tenses.",
      ),
      tr(
        "Mañana llegarían los refuerzos. Hasta entonces, tenían que aguantar.",
        "Tomorrow the reinforcements would arrive. Until then, they had to hold on.",
        [
          "Tomorrow the reinforcements would arrive. Until then they had to hold on.",
          "Tomorrow the reinforcements would arrive. Until then, they had to hold out.",
          "The reinforcements would arrive tomorrow. Until then, they had to hold on.",
          "The reinforcements would arrive tomorrow. Until then, they had to hold out.",
          "Tomorrow the reinforcements would come. Until then, they had to hold on.",
          "Tomorrow the reinforcements would arrive. Till then, they had to hold on.",
        ],
        "Free indirect style: the narrator's backshifted \"would\" and \"had to\", but the character's \"tomorrow\". Writing \"the next day\" would break the effect.",
      ),
      kw(
        "WOULD",
        "He thought, \"I will leave the city tomorrow.\"",
        "Free indirect style: He ___ the city tomorrow.",
        "would leave",
        [],
        "Backshift the tense and the person (\"I will\" becomes \"He would\"), but keep the character's \"tomorrow\". Changing it to \"the next day\" pulls the reader out of his mind.",
      ),
      mc(
        "A student rewrites \"She thought, 'I can't stay here. They'll find me by tomorrow.'\" in free indirect style. Which version is correct?",
        [
          "She couldn't stay here. They would find her by tomorrow.",
          "She couldn't stay there. They would find her by the next day.",
          "She couldn't stay here. They will find her by tomorrow.",
          "She can't stay here. They would find her by tomorrow.",
        ],
        0,
        "Tenses follow the narrative (\"couldn't\", \"would\"); deictic words follow the character (\"here\", \"tomorrow\"). Mixing systems, as in the last two, is the halfway-house error.",
      ),
      // --- Combined and traps ---
      tr(
        "Apenas había terminado la guerra cuando comenzó una nueva crisis económica.",
        "Hardly had the war ended when a new economic crisis began.",
        [
          "Barely had the war ended when a new economic crisis began.",
          "Scarcely had the war ended when a new economic crisis began.",
          "No sooner had the war ended than a new economic crisis began.",
          "The war had hardly ended when a new economic crisis began.",
          "The war had barely ended when a new economic crisis began.",
          "The war had scarcely ended when a new economic crisis began.",
          "Hardly had the war ended when a new economic crisis started.",
        ],
        "«Apenas... cuando» maps onto \"Hardly / Scarcely / Barely had... when\". If you use \"No sooner\", switch to \"than\". In neutral order: \"The war had hardly ended when...\".",
      ),
      dt(
        "The bridge was to have been finished by 1905, but the money ran out.",
        "\"Was to have been finished\": a passive plan that failed. Listen for the weak \"to have\" /tə əv/.",
      ),
      sp(
        "No sooner had the news reached the capital than the government fell.",
        "Apenas llegó la noticia a la capital, cayó el gobierno.",
        "Stress \"No sooner\" and \"fell\"; \"had\" is short and unstressed.",
        "Fronted \"No sooner\" with inversion and \"than\": the most dramatic way to show immediacy in historical prose.",
      ),
      wo(
        "Little did the king know that his own guards had betrayed him.",
        "El rey no tenía ni idea de que sus propios guardias lo habían traicionado.",
        "Fronted \"Little\" + \"did\" + subject + base form, followed by a past perfect for the earlier betrayal.",
      ),
      tr(
        "Hacía diez años que el puerto no recibía un barco extranjero.",
        "It was ten years since the port had last received a foreign ship.",
        [
          "It had been ten years since the port had last received a foreign ship.",
          "It had been ten years since the port last received a foreign ship.",
          "It was ten years since the port last received a foreign ship.",
          "The port had not received a foreign ship for ten years.",
          "The port hadn't received a foreign ship for ten years.",
          "The port had not received a foreign ship in ten years.",
        ],
        "Looking back from a past point: \"It was / had been ten years since...\" or the past perfect with \"for\". *The port didn't receive a ship since ten years is a double calque.",
      ),
      sp(
        "The army was about to withdraw when the enemy's supply lines collapsed.",
        "El ejército estaba a punto de retirarse cuando se derrumbaron las líneas de suministro enemigas.",
        "Link \"about to\" smoothly: /əˈbaʊtə/.",
        "\"Was about to\" + infinitive sets up the interruption with \"when\".",
      ),
    ],
  ),
  // ---------------------------------------------------------------------
  // Drill 2. Used to and would, tense and aspect nuance, counterfactuals, error hunt + whole-unit mix
  // ---------------------------------------------------------------------
  drill(
    "en-c2-history-unit-drill-2",
    "Drill: Used To, Would, Tense Nuance and Counterfactuals",
    "Share out the work of the Spanish «imperfecto» between used to, would, the past continuous and the past simple, choose tense and aspect for effect, argue counterfactual history with the right conditionals and hedges, and fix the classic tense errors in historical writing.",
    "Recap: habits, nuance and other histories",
    [
      "\"Used to\" covers past states and habits that are over; \"would\" covers repeated actions only, never states (*The duke would be rich); the past continuous needs a moment or a parallel action; the past simple is always safe. News opens with the present perfect and switches to the past simple once a finished time appears; «desde hace» is \"for\" + present perfect; the continuous adds irritation (\"always interrupting\"), temporariness or behavior (\"You're being unreasonable\").",
      "Counterfactuals: third conditional for a different past (\"If... had..., ... would have...\"), mixed for a different present (\"... would be different today\"), formal inversion (\"Had it not been for...\", \"Were it not for...\") and \"but for\". Choose \"would have\", \"might have\" or \"may well have\" by the strength of the claim; \"even if\" for a condition that would not have changed the result.",
    ],
    [
      ["Every autumn the villagers would gather to press the grapes.", "Cada otoño los aldeanos se reunían para pisar la uva."],
      ["The square used to be a cattle market.", "La plaza era antes un mercado de ganado."],
      ["Had the rains come a month earlier, the harvest might have been saved.", "De haber llegado las lluvias un mes antes, quizá se habría salvado la cosecha."],
      ["Historians have long debated why the colony was abandoned.", "Los historiadores llevan mucho tiempo debatiendo por qué se abandonó la colonia."],
    ],
    [
      // --- Used to, would, past continuous ---
      mc(
        "«El conde era un hombre muy rico.» Which sentence is correct in a historical narrative?",
        [
          "The count was a very rich man.",
          "The count would be a very rich man.",
          "The count was being a very rich man.",
          "The count has been a very rich man.",
        ],
        0,
        "\"Would\" describes repeated actions, never states: *The count would be rich can only mean a hypothesis or a future in the past. A state takes the past simple (or \"used to be\").",
      ),
      fb(
        "Every Sunday the whole family ___ walk to the cathedral for Mass.",
        "would",
        "Todos los domingos la familia entera [iba] caminando a la catedral para la misa.",
        ["used to"],
        "A repeated action in the past: \"would\" (literary, nostalgic) or \"used to\". The past simple \"walked\" would also be correct.",
      ),
      tr(
        "Antes la ciudad no tenía alumbrado público.",
        "The city did not use to have street lighting.",
        [
          "The city didn't use to have street lighting.",
          "The city didn't use to have street lights.",
          "The city did not use to have street lights.",
          "The city never used to have street lighting.",
          "The city never used to have street lights.",
          "The city used to have no street lighting.",
          "In the past the city had no street lighting.",
          "The city had no street lighting before.",
        ],
        "The negative is \"did not use to\" (no -d after \"did\"). \"Would\" is impossible here because \"have\" is a state, and \"would not\" usually means refusal.",
      ),
      mc(
        "Which sentence is correct?",
        [
          "She lived in Havana for twelve years.",
          "She used to live in Havana for twelve years.",
          "She would live in Havana for twelve years.",
          "She was living in Havana for twelve years.",
        ],
        0,
        "\"Used to\" never takes a precise duration or number of times. For a finished period of known length, use the past simple.",
      ),
      fb(
        "By the third winter, the soldiers were used to ___ in the snow.",
        "sleeping",
        "Para el tercer invierno, los soldados ya estaban acostumbrados a [dormir] en la nieve.",
        [],
        "\"Be used to\" + -ing means «estar acostumbrado a»; \"to\" is a preposition. Do not confuse it with \"used to\" + infinitive for past habits.",
      ),
      tr(
        "En el siglo XIX la gente viajaba largas distancias en diligencia.",
        "In the nineteenth century people traveled long distances by stagecoach.",
        [
          "In the nineteenth century, people traveled long distances by stagecoach.",
          "In the nineteenth century people travelled long distances by stagecoach.",
          "In the 19th century people traveled long distances by stagecoach.",
          "In the 19th century, people traveled long distances by stagecoach.",
          "In the nineteenth century people used to travel long distances by stagecoach.",
          "In the 19th century people used to travel long distances by stagecoach.",
          "In the nineteenth century people traveled long distances by coach.",
        ],
        "A habit across a whole era has no moment to be \"in progress\" at, so the past continuous (*people were traveling) does not fit. Use the past simple or \"used to\".",
      ),
      lc(
        "The minister was always complaining about the climate in the capital.",
        "What does the past continuous with \"always\" add?",
        [
          "A note of irritation at a repeated habit",
          "That he complained only once",
          "That he was complaining at one precise moment",
          "That the complaints were polite and formal",
        ],
        0,
        "The continuous with \"always\" or \"constantly\" expresses a repeated action with emotional coloring, usually irritation. Use it on purpose, not as a neutral habit marker.",
      ),
      wo(
        "The monks used to rise before dawn and would pray in silence.",
        "Los monjes se levantaban antes del alba y rezaban en silencio.",
        "Writers often set the frame with \"used to\" and continue with \"would\" for further repeated actions.",
      ),
      // --- Tense and aspect nuance ---
      mc(
        "Which pair is correct for a news report?",
        [
          "Divers have found a sunken galleon off Cartagena. They located the wreck last Friday.",
          "Divers found a sunken galleon off Cartagena. They have located the wreck last Friday.",
          "Divers have found a sunken galleon off Cartagena. They have located the wreck last Friday.",
          "Divers find a sunken galleon off Cartagena. They have located the wreck last Friday.",
        ],
        0,
        "The opening announces the news with the present perfect; once a finished time appears (\"last Friday\"), English switches to the past simple. *have located... last Friday is impossible.",
      ),
      tr(
        "Vivo en Montevideo desde hace cinco años.",
        "I have lived in Montevideo for five years.",
        [
          "I've lived in Montevideo for five years.",
          "I have been living in Montevideo for five years.",
          "I've been living in Montevideo for five years.",
          "I have lived in Montevideo for the past five years.",
          "I've lived in Montevideo for the last five years.",
          "I've been living in Montevideo for the past five years.",
        ],
        "«Desde hace» + present is the present perfect + \"for\" in English. *I live in Montevideo since five years combines two errors: the tense and the preposition.",
      ),
      fb(
        "I ___ known the director since we were at university together.",
        "have",
        "[Conozco] al director desde que estábamos juntos en la universidad.",
        [],
        "\"Know\" is stative, so only the simple form is possible: \"I have known\", never *I have been knowing. \"Since\" introduces a starting point.",
      ),
      mc(
        "\"You're being very unreasonable about the schedule.\" What does the continuous suggest?",
        [
          "The person is behaving unreasonably right now, not that it is their character",
          "The person is always an unreasonable person",
          "The person was unreasonable in the past but not now",
          "The speaker is unsure whether the person is unreasonable",
        ],
        0,
        "\"Be\" in the continuous describes behavior at the moment, like «te estás poniendo...» versus «eres...».",
      ),
      tr(
        "Mañana cenamos con el embajador.",
        "We're having dinner with the ambassador tomorrow.",
        [
          "We are having dinner with the ambassador tomorrow.",
          "Tomorrow we're having dinner with the ambassador.",
          "Tomorrow we are having dinner with the ambassador.",
          "We're having dinner with the ambassador tomorrow night.",
          "We're dining with the ambassador tomorrow.",
          "We are dining with the ambassador tomorrow.",
        ],
        "A fixed future arrangement takes the present continuous, where Spanish uses the plain present. *We have dinner with the ambassador tomorrow sounds like a timetable or habit.",
      ),
      tr(
        "Siempre me está interrumpiendo cuando hablo con los clientes.",
        "He is always interrupting me when I talk to clients.",
        [
          "He's always interrupting me when I talk to clients.",
          "She's always interrupting me when I talk to clients.",
          "She is always interrupting me when I talk to clients.",
          "He's always interrupting me when I'm talking to clients.",
          "He's always interrupting me when I speak to clients.",
          "He's constantly interrupting me when I talk to clients.",
          "He's forever interrupting me when I talk to clients.",
          "He's always interrupting me when I talk to the clients.",
        ],
        "\"Always\" + present continuous complains about a habit, like «siempre está...» or «no para de...». The neutral \"He always interrupts me\" loses the irritation.",
      ),
      fb(
        "I ___ thinking of applying for a research post in Lisbon.",
        "am",
        "[Estoy] pensando en postularme a un puesto de investigación en Lisboa.",
        [],
        "\"Think\" meaning consider is dynamic, so it takes the continuous: \"I'm thinking of\" + -ing. \"I think\" for an opinion stays simple.",
      ),
      // --- Counterfactuals ---
      mc(
        "Which sentence is correct?",
        [
          "If the ambassador had delivered the letter, the war would have been avoided.",
          "If the ambassador would have delivered the letter, the war would have been avoided.",
          "If the ambassador delivered the letter, the war would have been avoided.",
          "If the ambassador had delivered the letter, the war had been avoided.",
        ],
        0,
        "Third conditional: past perfect in the if-clause, \"would have\" + participle in the main clause. *If... would have copies «si hubiera... habría» into both halves.",
      ),
      tr(
        "Si la revolución hubiera fracasado, el país sería hoy una monarquía.",
        "If the revolution had failed, the country would be a monarchy today.",
        [
          "If the revolution had failed, the country would be a monarchy now.",
          "If the revolution had failed, the country would still be a monarchy today.",
          "If the revolution had failed, today the country would be a monarchy.",
          "Had the revolution failed, the country would be a monarchy today.",
          "If the revolution had failed, the nation would be a monarchy today.",
          "If the revolution had failed, the country would still be a monarchy.",
        ],
        "A mixed conditional links a different past (\"had failed\") to a different present (\"would be... today\"): historians use it to argue that past events still shape the present.",
      ),
      kw(
        "HAD",
        "If the fleet had not been delayed, the invasion would have succeeded.",
        "___ delayed, the invasion would have succeeded.",
        "Had the fleet not been",
        [],
        "Formal inversion drops \"if\": \"Had\" + subject + \"not\" + participle. Never *Hadn't the fleet been.",
      ),
      tr(
        "Si no fuera por los diarios de la enfermera, no sabríamos casi nada del hospital.",
        "Were it not for the nurse's diaries, we would know almost nothing about the hospital.",
        [
          "If it were not for the nurse's diaries, we would know almost nothing about the hospital.",
          "If it weren't for the nurse's diaries, we would know almost nothing about the hospital.",
          "If it wasn't for the nurse's diaries, we would know almost nothing about the hospital.",
          "Were it not for the nurse's diaries, we'd know almost nothing about the hospital.",
          "But for the nurse's diaries, we would know almost nothing about the hospital.",
          "Without the nurse's diaries, we would know almost nothing about the hospital.",
          "Were it not for the nurse's diaries, we would know next to nothing about the hospital.",
        ],
        "\"Were it not for\" is the fixed formal formula for a present counterfactual; \"Had it not been for\" is its past equivalent.",
      ),
      fb(
        "___ for the storm, the fleet would have reached the coast in two days.",
        "But",
        "[De no ser por] la tormenta, la flota habría llegado a la costa en dos días.",
        [],
        "\"But for\" + noun is a compact formal way of saying \"if it had not been for\".",
      ),
      fb(
        "The levee held; ___, the whole district would have flooded.",
        "otherwise",
        "El dique resistió; [de lo contrario], todo el distrito se habría inundado.",
        [],
        "\"Otherwise\" introduces the counterfactual result of a real fact: «de lo contrario», «si no».",
      ),
      tr(
        "Sin los préstamos extranjeros, el gobierno no habría podido pagar a sus soldados.",
        "Without foreign loans, the government could not have paid its soldiers.",
        [
          "Without foreign loans, the government couldn't have paid its soldiers.",
          "Without the foreign loans, the government could not have paid its soldiers.",
          "Without the foreign loans, the government couldn't have paid its soldiers.",
          "Without foreign loans, the government would not have been able to pay its soldiers.",
          "Without foreign loans, the government wouldn't have been able to pay its soldiers.",
          "But for foreign loans, the government could not have paid its soldiers.",
          "Without foreign loans, the government could not have paid its troops.",
        ],
        "\"Without\" + noun is the neutral way to state a counterfactual condition; «no habría podido» is \"could not have\" + participle.",
      ),
      wo(
        "But for the rain, the battle would have ended sooner.",
        "De no ser por la lluvia, la batalla habría terminado antes.",
        "\"But for\" + noun opens the sentence, followed by a comma and the \"would have\" result.",
      ),
      lc(
        "It is far from certain that an earlier peace would have saved the empire.",
        "How does the speaker view the counterfactual?",
        [
          "With strong doubt: it probably would not have made a difference",
          "With complete confidence that it would have saved the empire",
          "As a proven historical fact",
          "As a plan that was later carried out",
        ],
        0,
        "\"It is far from certain that...\" is a polite way of dismissing a counterfactual claim: the speaker doubts it.",
      ),
      mc(
        "A historian wants to present a counterfactual as a strong probability, not a certainty. Which sentence fits?",
        [
          "An earlier treaty may well have prevented the famine.",
          "An earlier treaty would have prevented the famine.",
          "An earlier treaty prevented the famine.",
          "An earlier treaty must prevent the famine.",
        ],
        0,
        "\"May well have\" signals strong probability; \"would have\" states a confident conclusion; \"might have\" or \"could have\" a mere possibility.",
      ),
      tr(
        "Aunque el rey hubiera sobrevivido, la monarquía probablemente habría caído.",
        "Even if the king had survived, the monarchy would probably have fallen.",
        [
          "Even if the king had survived, the monarchy probably would have fallen.",
          "Even had the king survived, the monarchy would probably have fallen.",
          "Even if the king had lived, the monarchy would probably have fallen.",
          "Even if the king had survived, the monarchy would most likely have fallen.",
          "Even if the king had survived, the monarchy would probably still have fallen.",
          "Even had the king lived, the monarchy would probably have fallen.",
        ],
        "\"Even if\" (or \"even had\") introduces a condition that would not have changed the result. *Although the king had survived would state a fact, not a hypothesis.",
      ),
      // --- Error hunt ---
      mc(
        "Which sentence has NO tense error?",
        [
          "The Incas built Machu Picchu in the fifteenth century.",
          "The Incas have built Machu Picchu in the fifteenth century.",
          "The Incas were building Machu Picchu in the fifteenth century and finished it.",
          "The Incas had built Machu Picchu in the fifteenth century.",
        ],
        0,
        "A finished time expression closes the door on the present perfect. The past perfect needs a later reference point, which this sentence does not have.",
      ),
      tr(
        "Desde la apertura de los archivos, nuestra visión de la guerra ha cambiado radicalmente.",
        "Since the archives were opened, our view of the war has changed dramatically.",
        [
          "Since the opening of the archives, our view of the war has changed dramatically.",
          "Since the archives were opened, our view of the war has changed radically.",
          "Since the opening of the archives, our view of the war has changed radically.",
          "Since the archives opened, our view of the war has changed dramatically.",
          "Since the archives opened, our view of the war has changed radically.",
          "Since the archives were opened, our understanding of the war has changed dramatically.",
        ],
        "The present perfect is right when the period reaches the present: \"since\" + a past starting point.",
      ),
      tr(
        "Antes de la guerra, la familia tenía dos haciendas en el norte.",
        "Before the war, the family owned two estates in the north.",
        [
          "Before the war the family owned two estates in the north.",
          "Before the war, the family had two estates in the north.",
          "Before the war, the family used to own two estates in the north.",
          "Before the war, the family used to have two estates in the north.",
          "Before the war, the family owned two ranches in the north.",
          "Before the war, the family owned two haciendas in the north.",
          "Before the war, the family owned two farms in the north.",
        ],
        "Ownership is a state: past simple or \"used to\". *The family would own two estates is the classic \"would\" for states error.",
      ),
      fb(
        "The guide told us the fortress ___ been built by the Portuguese.",
        "had",
        "El guía nos dijo que la fortaleza [había] sido construida por los portugueses.",
        [],
        "The building came before the telling, so it takes the past perfect. *The fortress would be built by the Portuguese is the wrong conditional.",
      ),
      // --- Whole-unit mix and traps ---
      tr(
        "Cuando llegó la policía, los ladrones se habían escapado por el techo.",
        "When the police arrived, the thieves had escaped through the roof.",
        [
          "When the police arrived, the thieves had already escaped through the roof.",
          "By the time the police arrived, the thieves had escaped through the roof.",
          "By the time the police arrived, the thieves had already escaped through the roof.",
          "When the police arrived, the thieves had got away through the roof.",
          "When the police arrived, the thieves had gotten away through the roof.",
          "When the police arrived, the robbers had escaped through the roof.",
        ],
        "Without the past perfect (*the thieves escaped) the sentence would mean they escaped after, or because of, the police's arrival: the tense changes the history.",
      ),
      dt(
        "Had it not been for the printing press, the movement might have remained a local dispute.",
        "Inverted conditional plus a hedged result. Listen for \"Had it not been\" and the weak \"have\" in \"might have\".",
      ),
      sp(
        "If the bridge had collapsed, the army would have been trapped, and the map of Europe would look very different today.",
        "Si el puente se hubiera derrumbado, el ejército habría quedado atrapado, y el mapa de Europa sería hoy muy distinto.",
        "Contract naturally: \"would've been\"; stress \"trapped\" and \"today\".",
        "A third conditional followed by a mixed result in the present: the core of counterfactual history.",
      ),
      mt(
        "Match each Spanish «imperfecto» with the best English form in a history essay.",
        [
          ["La catedral era de madera (estado)", "The cathedral was made of wood."],
          ["Cada mayo los pastores subían a la sierra (hábito)", "Every May the shepherds would climb to the mountains."],
          ["A medianoche los guardias cambiaban el turno (en ese momento)", "At midnight the guards were changing shifts."],
          ["Antes aquí había un convento (ya no)", "There used to be a convent here."],
        ],
        "A state takes the past simple; a repeated action can take \"would\"; an action in progress at a moment takes the past continuous; a state that is over, contrasted with now, suits \"used to\".",
      ),
      mc(
        "Which sentence correctly keeps the historic present?",
        [
          "Bolivar, who has spent years in exile, lands in Venezuela. He will never again leave South America.",
          "Bolivar, who has spent years in exile, landed in Venezuela. He will never again leave South America.",
          "Bolivar, who spent years in exile, lands in Venezuela. He would never again left South America.",
          "Bolivar has spent years in exile and lands in Venezuela, and he never again left South America.",
        ],
        0,
        "Inside a historic present frame, earlier events take the present perfect and later ones \"will\". Switching the main chain between present and past is the error.",
      ),
      dt(
        "She has written four books on the subject, but she wrote the first one in prison.",
        "Present perfect for a career that continues, past simple for a finished event. Listen for \"has written\" and \"wrote\".",
      ),
      sp(
        "People used to believe the river was sacred, and every spring they would throw flowers into it.",
        "La gente creía que el río era sagrado, y cada primavera le arrojaba flores.",
        "\"Used to\" sounds like /ˈjuːstə/; keep \"would\" light.",
        "\"Used to\" works with states (\"believe\"); \"would\" only with repeated actions (\"throw\").",
      ),
    ],
  ),
];
