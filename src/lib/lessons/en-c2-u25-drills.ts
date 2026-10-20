// Synced from cheneygross-afk/lengo:src/lib/lessons/en-c2-u25-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Required drill lessons for EN-C2 unit u25 (writing history: connectors, the historian's voice, register, process vocabulary, periods, confusables): a short recap, then graded practice.

type Ex = Lesson["exercises"][number];

const SECONDS: Record<string, number> = {
  "multiple-choice": 15, "multi-select": 20, "listen-choose": 20, "fill-blank": 20, translate: 30,
  "word-order": 25, matching: 30, dictation: 30, speak: 25, write: 0,
};

// Expands "a {b|c} d" into ["a b d", "a c d"] (nested groups are not supported).
const expand = (pattern: string): string[] => {
  const m = pattern.match(/\{([^{}]*)\}/);
  if (!m) return [pattern.replace(/\s+/g, " ").replace(/ ([,.?])/g, "$1").trim()];
  return m[1].split("|").flatMap((o) => expand(pattern.replace(m[0], o)));
};

const tr = (source: string, answer: string, altAnswers: string[], explanation: string): Ex =>
  altAnswers.length
    ? { type: "translate", direction: "es-en", prompt: "Translate into English.", source, answer, altAnswers, explanation }
    : { type: "translate", direction: "es-en", prompt: "Translate into English.", source, answer, explanation };

// Translate with answer variants written as patterns: the first expansion is the model answer.
const tx = (source: string, patterns: string | string[], explanation: string): Ex => {
  const all = [...new Set([patterns].flat().flatMap(expand))];
  return tr(source, all[0], all.slice(1), explanation);
};

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

export const EN_C2_U25_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. Connectors, the historian's voice, the learned register,
  // the vocabulary of historical processes
  // ---------------------------------------------------------------------
  drill(
    "en-c2-writing-history-unit-drill-1",
    "Drill: Connectors, Voice, Register and Process Vocabulary",
    "Link historical events with thereafter, whereupon, by then and in the wake of, mark how sure you are, choose the right register, and use the collocations of revolt, war and power.",
    "Recap: linking, hedging and naming historical change",
    [
      "Link events precisely: \"thereafter\" (from then on), \"whereupon\" (immediate reaction, after a comma), \"by then\" + past perfect, \"in due course\", and \"in the wake of / in the aftermath of / as a consequence of\" + a NOUN PHRASE. \"Hitherto\" means «hasta entonces».",
      "Show how sure you are: \"It is widely held that...\", \"There is little evidence to suggest that...\" (evidence is uncountable), \"arguably\", \"ostensibly\", \"allegedly\", \"the extent to which\". Prefer plain verbs (begin, end, find out) unless the Latinate one is more precise, nominalize processes (\"the withdrawal of\"), and learn the verb with the noun: stage a coup, wage war, lay siege to, sue for peace.",
    ],
    [
      ["The governor died in 1702; thereafter, the colony was ruled from the capital.", "El gobernador murió en 1702; a partir de entonces, la colonia se gobernó desde la capital."],
      ["In the wake of the bank's collapse, thousands lost their savings.", "A raíz de la quiebra del banco, miles de personas perdieron sus ahorros."],
      ["There is little evidence to suggest that the duke knew of the plot.", "Hay pocos indicios de que el duque conociera el complot."],
      ["The withdrawal of the garrison left the port undefended.", "La retirada de la guarnición dejó el puerto sin defensa."],
    ],
    [
      mc(
        "Choose the best connector: \"The general was captured in March; ___, the rebels had no clear leader.\"",
        ["thereafter", "whereupon", "hitherto", "in the wake of"],
        0,
        "\"Thereafter\" means «a partir de entonces» and describes the situation from that point on. \"Whereupon\" introduces an immediate reaction, not a lasting state; \"hitherto\" means «hasta entonces», the opposite direction; \"in the wake of\" needs a noun phrase after it.",
      ),
      fb(
        "The ambassador refused to sign the protocol, ___ the talks broke down.",
        "whereupon",
        "El embajador se negó a firmar el protocolo, [tras lo cual] las negociaciones se rompieron.",
        [],
        "\"Whereupon\" links an action to the reaction it immediately provoked, usually after a comma. «Tras lo cual» is its exact equivalent; \"then\" would lose the cause-and-reaction link.",
      ),
      fb(
        "By the time the reinforcements arrived, most of the defenders ___ the fort.",
        "had abandoned",
        "Para cuando llegaron los refuerzos, la mayoría de los defensores [habían abandonado] el fuerte.",
        ["had already abandoned", "had left", "had already left", "had deserted", "had fled"],
        "\"By then / by the time\" looks back from a past moment, so the earlier action takes the past perfect. *abandoned alone would suggest they left after the reinforcements arrived.",
      ),
      tx(
        "A raíz de la huelga, el director de la empresa dimitió.",
        [
          "In the wake of the strike, the {company's director|director of the company|company director} resigned.",
          "The {company's director|director of the company|company director} resigned in the wake of the strike.",
        ],
        "«A raíz de» + noun is \"in the wake of\" + noun phrase: the strike triggered the resignation. Do not turn it into a clause (*in the wake that the strike...).",
      ),
      kw(
        "CONSEQUENCE",
        "The bridge collapsed, so the town was cut off for weeks.",
        "The town was cut off for weeks ___ the collapse of the bridge.",
        "as a consequence of",
        [],
        "\"As a consequence of\" + noun phrase states the cause directly. Without \"of\" (\"as a consequence\") it becomes a sentence connector and cannot take a noun after it.",
      ),
      mc(
        "Which sentence is correct?",
        [
          "In the aftermath of the war, bread was rationed for six years.",
          "In the aftermath that the war ended, bread was rationed for six years.",
          "At the aftermath of the war, bread was rationed for six years.",
          "In the aftermath the war, bread was rationed for six years.",
        ],
        0,
        "The phrase is fixed: \"in the aftermath of\" + noun phrase. It cannot introduce a clause with \"that\", it takes \"in\" (not \"at\"), and \"of\" cannot be dropped.",
      ),
      tx(
        "La expedición cartografió costas hasta entonces desconocidas.",
        [
          "The expedition mapped {coasts|coastlines} hitherto unknown.",
          "The expedition mapped hitherto unknown {coasts|coastlines}.",
          "The expedition mapped {coasts|coastlines} {that were|which were|} {hitherto|until then|previously} unknown.",
        ],
        "\"Hitherto\" is the formal historian's word for «hasta entonces», and it sits naturally before an adjective or participle: \"hitherto unknown\". \"Until then unknown\" is possible but heavier.",
      ),
      wo(
        "Never before had the country faced such a severe drought",
        "Nunca antes se había enfrentado el país a una sequía tan grave.",
        "Fronted \"Never before\" triggers inversion: auxiliary \"had\" before the subject \"the country\". This is the emphatic English answer to «nunca hasta entonces».",
      ),
      tx(
        "Hasta entonces, ningún extranjero había visitado el valle.",
        [
          "{Until|Up to|Up until} then, no {foreigner|foreigners} had visited the valley.",
          "No {foreigner|foreigners} had visited the valley until then.",
          "{Until|Up to|Up until} then, the valley had never been visited by a foreigner.",
        ],
        "In a past narrative \"until then\" takes the past perfect. English uses a single negative (\"no foreigner had\"), never Spanish-style double negation (*no foreigner had not).",
      ),
      fb(
        "The temporary curfew was, ___, made permanent.",
        "in due course",
        "El toque de queda provisional, [con el tiempo], se hizo permanente.",
        ["in time", "eventually"],
        "\"In due course\" presents the later outcome as the natural result of a process. It fits neatly between commas inside the verb phrase, a typical historian's rhythm.",
      ),
      fb(
        "It is widely ___ that the epidemic arrived on a merchant ship.",
        "held",
        "Se [sostiene] ampliamente que la epidemia llegó en un barco mercante.",
        ["believed", "accepted", "thought", "assumed"],
        "\"It is widely held that...\" is the impersonal frame for a view most historians share, the English counterpart of «se suele sostener que». The verb is a past participle after \"is\".",
      ),
      tx(
        "Hay pocos indicios de que el incendio fuera intencionado.",
        [
          "There is little evidence {to suggest|} that the fire was {deliberate|intentional|started deliberately|started on purpose}.",
          "There is little evidence {to suggest|} the fire was {deliberate|intentional|started deliberately|started on purpose}.",
        ],
        "\"Little evidence\" (uncountable, singular verb) + \"to suggest\" + an indicative clause. English needs no subjunctive after «indicios de que», and *there are few evidences is wrong.",
      ),
      mc(
        "Which sentence is correct?",
        [
          "There is little evidence that the letters are forgeries.",
          "There are few evidences that the letters are forgeries.",
          "There is few evidence that the letters are forgeries.",
          "There are little evidences that the letters are forgeries.",
        ],
        0,
        "\"Evidence\" is uncountable: \"little evidence\", \"a piece of evidence\", \"a body of evidence\", with a singular verb. \"Few\" and the plural *evidences are typical transfers from «pocas pruebas».",
      ),
      tx(
        "El general fue posiblemente el mejor estratega de su generación.",
        "The general was arguably the {best|greatest|finest} strategist of his generation.",
        "\"Arguably\" makes a bold claim while admitting it can be challenged, which is what «posiblemente» means here. It is not \"supposedly\", which would cast doubt on the claim.",
      ),
      mc(
        "Choose the adverb that suggests the official reason hid another one: \"The delegation traveled to the capital, ___ to discuss trade, but in reality to gather intelligence.\"",
        ["ostensibly", "arguably", "undoubtedly", "consequently"],
        0,
        "\"Ostensibly\" («en apariencia, supuestamente») contrasts a stated purpose with the real one, which is exactly what \"but in reality\" spells out. \"Arguably\" evaluates a claim, \"undoubtedly\" boosts it, and \"consequently\" states a result.",
      ),
      fb(
        "The mayor ___ diverted public funds to his brother's company.",
        "allegedly",
        "El alcalde [presuntamente] desvió fondos públicos a la empresa de su hermano.",
        ["reportedly"],
        "\"Allegedly\" («presuntamente») reports an accusation that has not been proven. \"Ostensibly\" would be wrong: it concerns a declared purpose, not an accusation.",
      ),
      tx(
        "Los historiadores discrepan sobre hasta qué punto la reforma benefició a los campesinos.",
        "Historians disagree {about|on|over} the extent to which the reform {benefited|helped} {the peasants|peasants}.",
        "«Hasta qué punto» is \"the extent to which\", with \"to\" because we say \"to an extent\". *The extent in which and *until what point are calques.",
      ),
      mc(
        "Choose the verb: \"Several scholars ___ this interpretation, arguing that the key documents were forged.\"",
        ["dispute", "discuss", "debate about", "contend"],
        0,
        "To reject or challenge a view is to \"dispute\" it. \"Discuss\" only means to talk about something, so it is a false friend of «discutir» in the sense of disagreeing. \"Contend\" needs a \"that\" clause (\"contend that...\").",
      ),
      dt(
        "There is little evidence to suggest that the treaty was ever enforced.",
        "\"Little evidence\" is singular and uncountable, and \"to suggest\" is followed by an ordinary indicative clause.",
      ),
      lc(
        "The fleet was sent, ostensibly to protect merchant ships.",
        "What does the speaker imply?",
        [
          "The stated reason may have hidden a different purpose",
          "The fleet certainly protected the merchant ships",
          "The fleet failed to reach the merchant ships",
          "The speaker is sure the ships were in danger",
        ],
        0,
        "\"Ostensibly\" signals the declared purpose and hints that it was not the real one.",
      ),
      mc(
        "Which sentence sounds most natural in a history essay?",
        [
          "The siege began in April and ended in October.",
          "The siege commenced in April and terminated in October.",
          "The siege initiated in April and terminated in October.",
          "The siege was commenced in April and was terminated in October.",
        ],
        0,
        "Plain Germanic verbs (\"begin\", \"end\") are normal in historical prose. \"Commence\" and \"terminate\" feel natural to Spanish speakers (comenzar, terminar) but sound bureaucratic here, and \"initiate\" needs an object.",
      ),
      tx(
        "La retirada de las tropas dejó la frontera sin protección.",
        [
          "The withdrawal of {the troops|troops} left the border {unprotected|undefended|without protection}.",
          "The troops' withdrawal left the border {unprotected|undefended|without protection}.",
        ],
        "Nominalization: the action «retirarse» becomes the noun \"withdrawal\", linked with \"of\", and the process becomes the subject of the sentence.",
      ),
      kw(
        "REFUSAL",
        "The government refused to negotiate, which prolonged the strike.",
        "The government's ___ to negotiate prolonged the strike.",
        "refusal",
        [],
        "\"Refusal\" keeps the infinitive of its verb: \"refuse to negotiate\" becomes \"the refusal to negotiate\". The agent goes before it as a possessive (\"the government's\") or after it with \"of\".",
      ),
      tx(
        "El estallido de la guerra interrumpió la construcción del ferrocarril.",
        "The outbreak of {war|the war} {interrupted|halted} {the construction of the railway|the construction of the railroad|construction of the railway|construction of the railroad|the building of the railway|the building of the railroad}.",
        "\"The outbreak of war\" is the standard nominalization for «el estallido de la guerra», and \"the construction of\" packs the second process into a noun phrase.",
      ),
      wo(
        "The rapid decline of the textile industry left thousands unemployed",
        "El rápido declive de la industria textil dejó a miles de personas sin empleo.",
        "A dense nominalized subject (\"The rapid decline of the textile industry\") followed by an active verb: the typical shape of a sentence about a historical process.",
      ),
      mt(
        "Match each noun with the verb it collocates with.",
        [
          ["a coup", "stage"],
          ["war", "wage"],
          ["a siege", "lay"],
          ["a treaty", "ratify"],
          ["a rebellion", "crush"],
          ["power", "seize"],
        ],
        "Historical nouns choose their verbs: \"stage a coup\", \"wage war\", \"lay siege to\", \"ratify a treaty\", \"crush a rebellion\", \"seize power\". Translating «hacer» or «tomar» word for word (*make war, *take power by a coup) sounds non-native.",
      ),
      fb(
        "A rebellion ___ out in the northern provinces in 1569.",
        "broke",
        "En 1569 [estalló] una rebelión en las provincias del norte.",
        [],
        "Uprisings and wars \"break out\" («estallar»). The past is irregular: \"broke out\", never *breaked out.",
      ),
      tx(
        "Después de perder la capital, los rebeldes pidieron la paz.",
        [
          "After losing the capital, the rebels sued for peace.",
          "Having lost the capital, the rebels sued for peace.",
          "After they {lost|had lost} the capital, the rebels sued for peace.",
        ],
        "«Pedir la paz» after a defeat is \"sue for peace\", not *ask the peace. After a preposition the verb takes -ing: \"after losing\", never *after to lose.",
      ),
      dt(
        "Thereafter, the power of the dynasty declined steadily.",
        "\"Thereafter\" is one word, stressed on the last syllable, and it opens the sentence followed by a comma.",
      ),
      lc(
        "The truce was broken within a week, whereupon both sides resumed the siege.",
        "What happened after the truce was broken?",
        [
          "The siege started again almost immediately",
          "Both sides signed a treaty",
          "The siege was lifted for good",
          "The truce was extended for another week",
        ],
        0,
        "\"Whereupon\" introduces an immediate reaction: once the truce collapsed, the siege resumed.",
      ),
      sp(
        "The army staged a coup and seized control of the radio station.",
        "El ejército dio un golpe de Estado y se hizo con el control de la emisora de radio.",
        "\"Coup\" is /kuː/, with no p sound; link \"staged a\" smoothly.",
        "\"Stage a coup\" and \"seize control\" are the standard collocations; *made a coup and *took the control are calques.",
      ),
      tx(
        "Para entonces, el régimen ya había perdido el apoyo del ejército.",
        [
          "By then, the regime had {already|} lost the {support of the army|army's support}.",
          "By that time, the regime had {already|} lost the {support of the army|army's support}.",
          "The regime had {already|} lost the {support of the army|army's support} by then.",
        ],
        "\"By then\" looks back from a past moment, so it takes the past perfect. «Régimen» in this political sense is \"regime\" (diet would be \"diet\").",
      ),
      tx(
        "Se acepta en general que la sublevación fue aplastada en pocas semanas.",
        [
          "It is generally accepted that the {uprising|revolt|rebellion} was {crushed|put down|suppressed} {within|in} a few weeks.",
          "Most historians agree that the {uprising|revolt|rebellion} was {crushed|put down|suppressed} {within|in} a few weeks.",
        ],
        "Two layers: the impersonal frame \"It is generally accepted that\" for consensus, and the passive collocation \"was crushed / put down / suppressed\" for a failed uprising.",
      ),
      sp(
        "In the aftermath of the famine, hundreds of thousands emigrated.",
        "Tras la hambruna, cientos de miles de personas emigraron.",
        "Stress \"AFtermath\" and \"FAMine\"; keep \"of the\" weak.",
        "\"In the aftermath of\" + noun suits the suffering that follows a disaster, and it saves you from a clause like *after the famine ended.",
      ),
      dt(
        "The withdrawal of foreign troops was completed in due course.",
        "A nominalized subject (\"The withdrawal of foreign troops\") and the formal connector \"in due course\" at the end.",
      ),
    ],
  ),
  // ---------------------------------------------------------------------
  // Drill 2. Periods and dates, the word web of change, confusable words,
  // narrative grammar, and a whole-unit mix
  // ---------------------------------------------------------------------
  drill(
    "en-c2-writing-history-unit-drill-2",
    "Drill: Periods, Confusables and Narrative Grammar",
    "Name decades, centuries and periods correctly, collocate the vocabulary of power and change, avoid confusable pairs like historic/historical and fewer/less, and combine it all with participle clauses, passive reporting and formal relative clauses.",
    "Recap: periods, word web, confusables and narrative grammar",
    [
      "Periods: \"the 1920s\" (no apostrophe, never *the 20s years), \"the nineteenth century\" (= the 1800s, ordinal, no Roman numerals), \"a nineteenth-century house\", \"in the early / mid- / late...\", \"the Middle Ages\", \"44 BC\", \"AD 711\", \"c. 1450\". Word web: ascend the throne, abdicate in favor of, launch an offensive, quell unrest; prices soar or plummet; plural \"crises\".",
      "Confusables: historic (important) vs historical (about the past), economic vs economical, affect (verb) vs effect (noun), principle vs principal, imply vs infer, comprise / be composed of / consist of (never passive), continual vs continuous, fewer (count) vs less. Narrative grammar: \"Having signed...\", \"He is said to have...\", \"the treaty under which...\", \"many of whom...\".",
    ],
    [
      ["The mill was built in the late 1890s.", "El molino se construyó a finales de la década de 1890."],
      ["It was a historic vote for the island.", "Fue una votación histórica para la isla."],
      ["The board comprises seven members.", "La junta consta de siete miembros."],
      ["The bishop is thought to have hidden the manuscripts.", "Se cree que el obispo escondió los manuscritos."],
    ],
    [
      mc(
        "How do you write «los años treinta» in a history essay?",
        ["the 1930s", "the 30s years", "the 1930's", "the thirties years"],
        0,
        "Decades are \"the 1930s\" (said \"the nineteen thirties\"), with no apostrophe in careful writing. *The 30s years and *the thirties years copy «años».",
      ),
      fb(
        "Most of the houses on this street were built in the ___.",
        "1950s",
        "La mayoría de las casas de esta calle se construyeron en [los años cincuenta].",
        ["fifties", "nineteen fifties", "'50s"],
        "«Los años cincuenta» is \"the 1950s\" or \"the fifties\". The article \"the\" is already in the sentence; no word for «años» is needed.",
      ),
      tx(
        "Es especialista en pintura holandesa del siglo XVII.",
        "{She|He} is {a specialist|an expert} {in|on} {seventeenth-century|17th-century} Dutch painting.",
        "Centuries use ordinals, never Roman numerals, and before a noun they are hyphenated: \"seventeenth-century Dutch painting\". Roman numerals are kept only for monarchs and popes.",
      ),
      tx(
        "La fábrica cerró a mediados de los años ochenta.",
        "The factory {closed|closed down|shut down} in the {mid-1980s|mid-eighties|mid 1980s|mid eighties}.",
        "«A mediados de» is \"in the mid-\" + decade or century. *At the middle of the eighties and *in the 80s years are calques.",
      ),
      fb(
        "The cathedral was finally completed in the ___ Middle Ages.",
        "late",
        "La catedral se terminó por fin [a finales de] la Edad Media.",
        [],
        "«A finales de» is \"in the late\": \"in the late Middle Ages\". Note that \"the Middle Ages\" is always plural, never *the Middle Age.",
      ),
      tx(
        "A principios del siglo XX, la ciudad tenía tres teatros.",
        [
          "In the early {twentieth|20th} century, the city had three {theaters|theatres}.",
          "At the {beginning|start} of the {twentieth|20th} century, the city had three {theaters|theatres}.",
        ],
        "«A principios de» is \"in the early\" (or \"at the beginning of\"), never *at the principles of. «El siglo XX» is \"the twentieth century\", the 1900s.",
      ),
      lc(
        "The poet was born circa 1460 and died in 1502.",
        "When was the poet born?",
        ["Around 1460", "Exactly in 1460", "In 1406", "After 1502"],
        0,
        "\"Circa\" (written \"c.\" or \"ca.\") means «hacia, aproximadamente», so the birth year is only approximate.",
      ),
      dt(
        "The city was founded around 750 BC.",
        "\"BC\" goes after the year. \"Around\" is the natural running-prose alternative to \"circa\".",
      ),
      mt(
        "Match each noun with the verb it typically takes.",
        [
          ["the throne", "ascend"],
          ["an offensive", "launch"],
          ["a siege", "lift"],
          ["unrest", "quell"],
          ["reforms", "carry out"],
          ["suffrage", "grant"],
        ],
        "Learn the verb with the noun: a monarch \"ascends the throne\", an army \"launches an offensive\", a siege is \"lifted\", police \"quell unrest\", governments \"carry out reforms\" and \"grant suffrage\".",
      ),
      tx(
        "La reina abdicó en favor de su hija.",
        "The queen abdicated in {favor|favour} of her daughter.",
        "«Abdicar en favor de» is \"abdicate in favor of\". No object is needed after \"abdicate\"; the throne is implied.",
      ),
      mc(
        "Choose the verb: \"The elected government was ___ by the army in a matter of hours.\"",
        ["overthrown", "abdicated", "ascended", "deposited"],
        0,
        "\"Overthrow\" is the general word for removing a government by force. \"Abdicate\" is what a monarch does voluntarily, \"ascend\" goes with \"the throne\", and \"deposited\" is a false match for «depuesto» (\"deposed\" is for a monarch or leader).",
      ),
      fb(
        "After the crash, share prices ___ by forty percent in a single week.",
        "plummeted",
        "Tras el crac, las acciones [se desplomaron] un cuarenta por ciento en una sola semana.",
        ["plunged", "fell", "dropped", "collapsed", "tumbled"],
        "\"Plummet\" is the vivid verb for a steep fall in prices; its opposite is \"soar\". Note \"by forty percent\" for the size of the change.",
      ),
      tx(
        "El malestar social se extendió por las zonas mineras.",
        "Social unrest spread {through|across} the mining {areas|regions|districts|towns}.",
        "\"Unrest\" is uncountable (never *unrests) and \"spreads\". «Malestar social» is \"social unrest\", not *social discomfort.",
      ),
      mc(
        "Choose the word that fits: \"The peace agreement was a ___ moment for both countries.\"",
        ["historic", "historical", "historian", "historicist"],
        0,
        "\"Historic\" means important and likely to be remembered. \"Historical\" simply means related to the past (\"historical documents\"), so it would make the moment sound merely old.",
      ),
      fb(
        "She writes ___ novels set in ancient Rome.",
        "historical",
        "Escribe novelas [históricas] ambientadas en la antigua Roma.",
        [],
        "A novel about the past is a \"historical novel\". \"Historic\" would mean the novels themselves are landmark events.",
      ),
      tx(
        "La crisis económica afectó sobre todo a los jóvenes.",
        [
          "The economic crisis {mainly|mostly|especially|above all|primarily} affected young people.",
          "The economic crisis affected young people {above all|most of all|most|in particular}.",
          "The economic crisis affected {mainly|mostly|especially|above all|primarily} young people.",
        ],
        "«Económico» referring to the economy is \"economic\" (*economical crisis means a cheap crisis). \"Affect\" is the verb; \"effect\" is normally the noun.",
      ),
      mc(
        "Which sentence is correct?",
        [
          "The new tariffs had a serious effect on exports.",
          "The new tariffs had a serious affect on exports.",
          "The new tariffs effected exports badly.",
          "The new tariffs affected on exports seriously.",
        ],
        0,
        "\"Have an effect on\" uses the noun \"effect\". The verb is \"affect\" with a direct object (\"affected exports\"), never with \"on\"; \"effect\" as a verb means «lograr» (\"effect change\").",
      ),
      fb(
        "___, the council supports the plan, but it has not yet approved the budget.",
        "In principle",
        "[En principio], el concejo apoya el plan, pero todavía no ha aprobado el presupuesto.",
        [],
        "«En principio» is \"in principle\", with \"principle\" (a basic idea or rule). \"Principal\" means main, or a school head.",
      ),
      mc(
        "Choose the verb: \"Are you ___ that the figures were invented?\"",
        ["implying", "inferring", "inducing", "concluding"],
        0,
        "The speaker implies («da a entender»); the listener infers («deduce»). Asking someone what they are hinting at needs \"implying\".",
      ),
      tx(
        "El comité consta de nueve miembros.",
        "The committee {consists of|comprises|is composed of|is made up of} nine members.",
        "«Constar de» is \"consist of\", \"comprise\" (no \"of\"), \"be composed of\" or \"be made up of\". \"Consist\" is never passive: *is consisted of is always wrong.",
      ),
      fb(
        "The meeting was impossible to follow because of the ___ interruptions.",
        "continual",
        "Era imposible seguir la reunión por las [continuas] interrupciones.",
        ["constant", "repeated", "frequent"],
        "Interruptions stop and start, so they are \"continual\" (repeated, often annoying). \"Continuous\" means without a break, like continuous rain.",
      ),
      fb(
        "There were ___ applicants this year than last year.",
        "fewer",
        "Este año hubo [menos] solicitantes que el año pasado.",
        [],
        "\"Applicants\" is a plural countable noun, so it takes \"fewer\". \"Less\" is for uncountable nouns (\"less money\") and single quantities of time, money or distance.",
      ),
      tx(
        "Tras firmar el acuerdo, los dos líderes dieron una rueda de prensa.",
        [
          "Having signed the agreement, the two leaders {gave|held} a press conference.",
          "After signing the agreement, the two leaders {gave|held} a press conference.",
          "After they {signed|had signed} the agreement, the two leaders {gave|held} a press conference.",
        ],
        "A perfect participle clause (\"Having signed...\") shows that one action was complete before the next. Its subject is the subject of the main clause: the leaders signed and the leaders spoke.",
      ),
      mc(
        "Which sentence is correct?",
        [
          "Having crossed the mountains, the soldiers finally reached the coast.",
          "Having crossed the mountains, the coast was finally reached.",
          "Having crossed the mountains, the coast finally appeared to the soldiers.",
          "After to cross the mountains, the soldiers finally reached the coast.",
        ],
        0,
        "The participle's subject must be the main subject: the soldiers crossed. In the second and third, the coast seems to cross the mountains (a dangling participle). *After to cross should be \"After crossing\".",
      ),
      kw(
        "BELIEVED",
        "People believe that the abbot wrote the chronicle.",
        "The abbot is believed ___ the chronicle.",
        "to have written",
        [],
        "In passive reporting the person becomes the subject. The writing happened before the believing, so it needs the perfect infinitive \"to have written\".",
      ),
      tx(
        "Se dice que el castillo está embrujado.",
        ["The castle is said to be haunted.", "It is said that the castle is haunted.", "People say {that|} the castle is haunted."],
        "\"The castle is said to be haunted\" puts the topic first, with a simple infinitive because the haunting is present. *The castle is said that... mixes the two patterns.",
      ),
      wo(
        "The treaty under which the island was returned was signed in 1802",
        "El tratado en virtud del cual se devolvió la isla se firmó en 1802.",
        "Formal prose puts the preposition before \"which\": \"the treaty under which\", not *the treaty which the island was returned under.",
      ),
      tx(
        "Los mineros, muchos de los cuales habían perdido su empleo, marcharon hacia la capital.",
        "The miners, many of whom had lost their jobs, marched {on|to|toward|towards|into} the capital.",
        "«Muchos de los cuales» about people is \"many of whom\" (object form after \"of\"), inside a non-defining clause between commas. *many of who and *many of them that are wrong.",
      ),
      dt(
        "The guild, whose members controlled the wool trade, lost its privileges in the 1790s.",
        "\"Whose\" («cuyo») works for groups and things as well as people. \"The 1790s\" has no apostrophe.",
      ),
      wo(
        "Built in the 1890s, the station has recently been restored",
        "Construida en la década de 1890, la estación ha sido restaurada recientemente.",
        "A past participle clause (\"Built in the 1890s\") has a passive meaning and refers to the subject that follows, \"the station\".",
      ),
      lc(
        "The king is thought to have died in the spring of 1189.",
        "How sure is the speaker about the date?",
        [
          "It is the commonly held view, but not certain",
          "It is confirmed by an official record",
          "The speaker has no idea when the king died",
          "The king is still alive",
        ],
        0,
        "\"Is thought to have died\" reports a common belief without the writer committing to it.",
      ),
      wo(
        "There were fewer strikes in the late 1990s than in the previous decade",
        "Hubo menos huelgas a finales de los años noventa que en la década anterior.",
        "\"Fewer\" with the countable \"strikes\", and \"in the late 1990s\" for «a finales de los noventa».",
      ),
      sp(
        "Unemployment soared in the early 1930s.",
        "El desempleo se disparó a principios de los años treinta.",
        "Say \"the early nineteen thirties\"; stress \"SOARED\" and \"THIRties\".",
        "\"Soar\" is the vivid verb for a steep rise, and decades are said in two parts: \"nineteen thirties\".",
      ),
      sp(
        "Defeated in the north, the rebels retreated into the mountains.",
        "Derrotados en el norte, los rebeldes se replegaron hacia las montañas.",
        "Keep a short pause after \"north\"; stress \"deFEATed\" and \"reTREATed\".",
        "The past participle clause \"Defeated in the north\" has a passive meaning and its subject is \"the rebels\".",
      ),
      dt(
        "In the wake of the boom, wages rose faster than prices.",
        "\"In the wake of\" takes a noun phrase (\"the boom\"); \"rose\" is the irregular past of \"rise\".",
      ),
      tx(
        "A raíz de la crisis económica de los años noventa, hubo continuos disturbios.",
        [
          "In the wake of the economic crisis of the {1990s|nineties}, there was {continual|constant|repeated} unrest.",
          "In the wake of the {1990s|nineties} economic crisis, there was {continual|constant|repeated} unrest.",
          "In the wake of the economic crisis of the {1990s|nineties}, there were {continual|constant|repeated} {riots|disturbances}.",
          "In the wake of the {1990s|nineties} economic crisis, there were {continual|constant|repeated} {riots|disturbances}.",
        ],
        "A whole-unit sentence: \"in the wake of\" + noun phrase, \"economic\" (not *economical), \"the 1990s\", and \"continual\" for disturbances that keep breaking out. With uncountable \"unrest\" the verb is \"was\"; with \"riots\" or \"disturbances\" it is \"were\".",
      ),
    ],
  ),
];
