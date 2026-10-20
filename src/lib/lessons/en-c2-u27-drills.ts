// Synced from cheneygross-afk/lengo:src/lib/lessons/en-c2-u27-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Required drill lessons for EN-C2 unit u27 (environment and politics: climate language, loaded and deliberative language, political systems, dependent prepositions, collocations, passive reporting): a short recap, then graded practice.

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

export const EN_C2_U27_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. The language of climate, loaded language, deliberation and
  // political systems, the climate and energy word web
  // ---------------------------------------------------------------------
  drill(
    "en-c2-environment-politics-unit-drill-1",
    "Drill: Climate Language, Framing and Political Systems",
    "Talk about climate and energy with the right articles and collocations, tell loaded words from neutral ones, use the language of deliberation, and name the parts of the UK and US political systems.",
    "Recap: climate words, framing and systems",
    [
      "General abstract nouns take no article (\"Climate change is...\", \"Deforestation...\", \"Air pollution...\"), but \"the environment\", \"the climate\" and \"the planet\" do. Dirty air or water in general is \"pollution\"; \"contamination\" is one specific thing made unsafe. Emissions \"peak\" and are \"cut\"; countries \"reach net zero\", \"meet\" (not *fulfill) targets, \"phase out\" coal and pay \"subsidies\" (not *subventions).",
      "Loaded words carry a verdict (\"tax relief\", \"handouts\"); neutral ones describe (\"tax cuts\", \"benefits\"), and opinions are attributed (\"critics say\"). «Compromiso» is usually \"commitment\"; a \"compromise\" is a deal where both sides give way. UK: MP, constituency, by-election, hung parliament. US: Congress (both chambers), midterms, swing states. \"Politics\" is the field; \"policy\" is a plan.",
    ],
    [
      ["Deforestation is driving many species toward extinction.", "La deforestación está llevando a muchas especies a la extinción."],
      ["The well was contaminated with chemicals from the factory.", "El pozo estaba contaminado con productos químicos de la fábrica."],
      ["After a long night of talks, both sides accepted a compromise.", "Tras una larga noche de negociaciones, ambas partes aceptaron un acuerdo intermedio."],
      ["The bill now goes to the Senate.", "El proyecto de ley pasa ahora al Senado."],
    ],
    [
      mc(
        "Which sentence is correct?",
        [
          "Deforestation threatens hundreds of species in the region.",
          "The deforestation threatens hundreds of species in the region.",
          "A deforestation threatens hundreds of species in the region.",
          "Deforestations threaten hundreds of species in the region.",
        ],
        0,
        "Used in a general sense, \"deforestation\" takes no article and has no plural. *The deforestation copies «la deforestación».",
      ),
      fb(
        "We all have a responsibility to protect ___ environment.",
        "the",
        "Todos tenemos la responsabilidad de proteger [el] medio ambiente.",
        [],
        "\"The environment\" is one of the exceptions that almost always keep \"the\", together with \"the climate\" and \"the planet\".",
      ),
      tx(
        "La contaminación atmosférica es un problema grave en la capital.",
        "Air pollution is a {serious|major|grave} problem in the capital.",
        "Dirty air in general is \"air pollution\", with no article. *The air contamination is wrong on two counts.",
      ),
      mc(
        "Choose the word: \"Most of the city's ___ comes from traffic and heating.\"",
        ["pollution", "contamination", "polluter", "contaminant"],
        0,
        "General dirty air is \"pollution\". \"Contamination\" is for one specific thing made unsafe (water, food, soil); a \"polluter\" is who pollutes; a \"contaminant\" is a single substance.",
      ),
      fb(
        "Health inspectors confirmed that the salad had been ___ with bacteria.",
        "contaminated",
        "Los inspectores de sanidad confirmaron que la ensalada había sido [contaminada] con bacterias.",
        [],
        "One specific item made unsafe by germs is \"contaminated\". \"Polluted\" is for air, water or land in general.",
      ),
      tx(
        "Los países deben invertir tanto en mitigación como en adaptación.",
        "Countries {must|need to|should|have to} invest in both mitigation and adaptation.",
        "\"Mitigation\" tackles the causes; \"adaptation\" deals with effects that can no longer be avoided. Both are general here, so no article.",
      ),
      fb(
        "Global emissions are expected to ___ before 2030 and then start to fall.",
        "peak",
        "Se espera que las emisiones mundiales [toquen techo] antes de 2030 y luego empiecen a bajar.",
        [],
        "Emissions \"peak\" («tocan techo») and then \"fall\". \"Emissions\" is plural in this sense.",
      ),
      tx(
        "La empresa se ha comprometido a alcanzar las cero emisiones netas en 2040.",
        [
          "The company has {pledged|promised} to {reach|achieve} net zero by 2040.",
          "The company has committed to {reaching|achieving} net zero by 2040.",
          "The company has made a commitment to {reach|achieve} net zero by 2040.",
        ],
        "«Comprometerse a» is \"pledge to\" + infinitive or \"commit to\" + -ing (\"to\" is a preposition here). Deadlines take \"by\": \"by 2040\".",
      ),
      lc(
        "Scientists fear the ice sheet may be close to a tipping point.",
        "What is a tipping point here?",
        [
          "A threshold after which the change becomes very hard to reverse",
          "A spot where tourists go to see the ice",
          "A small, temporary change in temperature",
          "The moment when the ice stops melting",
        ],
        0,
        "A \"tipping point\" is a threshold beyond which change becomes self-reinforcing, close to «punto de no retorno».",
      ),
      tx(
        "Acusaron a la marca de ropa de ecopostureo.",
        [
          "The {clothing|fashion} brand was accused of greenwashing.",
          "They accused the {clothing|fashion} brand of greenwashing.",
        ],
        "\"Greenwashing\" is marketing that makes something look greener than it is. \"Accuse someone of\" + noun or -ing.",
      ),
      mc(
        "Which phrase describes lower taxes neutrally?",
        ["tax cuts", "tax relief", "a tax giveaway", "tax handouts"],
        0,
        "\"Tax cuts\" simply describes the change. \"Tax relief\" frames tax as a burden, while \"giveaway\" and \"handouts\" frame the cuts as undeserved gifts.",
      ),
      tx(
        "Se cometieron errores en la gestión del proyecto.",
        "Mistakes were made in {the management of the project|managing the project|the project's management|the running of the project|running the project}.",
        "The agentless passive \"Mistakes were made\" hides who made them. It is grammatical, but an analyst notices what it leaves out.",
      ),
      fb(
        "___ say the scheme is too expensive; supporters argue that it will pay for itself.",
        "Critics",
        "[Los críticos] dicen que el plan es demasiado caro; sus partidarios sostienen que se amortizará solo.",
        ["Opponents", "Detractors"],
        "Attributing each view to its source (\"critics say\", \"supporters argue\") is the core of neutral reporting.",
      ),
      tx(
        "Los detractores sostienen que la nueva norma aumentará el papeleo de las pequeñas empresas.",
        "{Critics|Opponents} {argue|claim|say|maintain} {that|} the new {rule|regulation} will increase paperwork for small businesses.",
        "A neutral version names who holds the view and describes the effect (\"paperwork\") without a loaded label such as \"red tape\".",
      ),
      mc(
        "Which term describes someone who has applied for protection in another country and is waiting for a decision?",
        ["an asylum seeker", "a refugee with recognized status", "an expatriate", "a tourist"],
        0,
        "An \"asylum seeker\" has applied for protection; a \"refugee\" has been recognized as qualifying for it under international law. Using the precise term is part of neutral language.",
      ),
      tx(
        "El gobierno reiteró su compromiso con la energía limpia.",
        "The government {reiterated|reaffirmed|restated} its commitment to clean energy.",
        "«Compromiso» meaning a pledge is \"commitment\" (+ to). *Its compromise with clean energy would mean it had given ground on it.",
      ),
      fb(
        "After two days of talks, the union and the management reached a ___.",
        "compromise",
        "Tras dos días de negociaciones, el sindicato y la dirección llegaron a un [acuerdo intermedio].",
        ["deal", "settlement"],
        "A \"compromise\" is an agreement in which each side gives something up. You \"reach\" or \"strike\" one.",
      ),
      mt(
        "Match the Spanish political terms with their English equivalents.",
        [
          ["diputado (Reino Unido)", "MP"],
          ["escaño", "seat"],
          ["circunscripción", "constituency"],
          ["elecciones parciales", "by-election"],
          ["elecciones de mitad de mandato", "midterms"],
          ["estado bisagra", "swing state"],
        ],
        "The first four belong to the UK system, the last two to the US system.",
      ),
      mc(
        "In the United States, what does \"Congress\" refer to?",
        [
          "Both the House of Representatives and the Senate",
          "Only the House of Representatives",
          "Only the Senate",
          "The President and the cabinet",
        ],
        0,
        "In the US \"Congress\" is the whole legislature, both chambers. In Spain «el Congreso» is only the lower house, which is a common source of confusion.",
      ),
      fb(
        "The new government changed the country's foreign ___ almost overnight.",
        "policy",
        "El nuevo gobierno cambió la [política] exterior del país casi de la noche a la mañana.",
        [],
        "A plan of action is a \"policy\": \"foreign policy\", \"climate policy\". \"Politics\" is the activity or field.",
      ),
      tx(
        "Se dedicó a la política después de dirigir una ONG.",
        "{She|He} went into politics after {running|leading|heading|directing} an NGO.",
        "The field is \"politics\" (singular verb, no article): \"go into politics\". After \"after\" the verb takes -ing.",
      ),
      wo(
        "Unlike UK elections, US presidential elections are held on fixed dates",
        "A diferencia de las elecciones del Reino Unido, las presidenciales de EE. UU. se celebran en fechas fijas.",
        "\"Unlike\" + noun phrase opens a comparison between systems; the passive \"are held\" is the standard verb for elections.",
      ),
      lc(
        "The election produced a hung parliament.",
        "What happened?",
        ["No party won an overall majority", "One party won by a landslide", "The prime minister resigned", "Parliament was dissolved"],
        0,
        "A \"hung parliament\" is one in which no party has an overall majority.",
      ),
      tx(
        "La quema de combustibles fósiles libera gases de efecto invernadero.",
        "{Burning fossil fuels|The burning of fossil fuels} {releases|emits|gives off} greenhouse gases.",
        "A general statement: no article on \"fossil fuels\" or \"greenhouse gases\". The gerund \"Burning\" is the natural subject for «la quema de».",
      ),
      fb(
        "Mangrove forests act as powerful carbon ___.",
        "sinks",
        "Los manglares actúan como potentes [sumideros] de carbono.",
        [],
        "A \"carbon sink\" absorbs and stores carbon. The plural matches \"forests\".",
      ),
      fb(
        "The city is unlikely to ___ its recycling targets this year.",
        "meet",
        "Es poco probable que la ciudad [cumpla] sus objetivos de reciclaje este año.",
        ["hit", "reach", "achieve"],
        "Targets are \"met\", \"hit\" or \"missed\". *Fulfill the targets and *accomplish the targets sound unnatural.",
      ),
      tx(
        "El gobierno recortó las subvenciones a los carros eléctricos.",
        "The government {cut|reduced|slashed} {subsidies|the subsidies} {for|on} electric cars.",
        "«Subvención» is \"subsidy\"; *subvention is very rare. \"Cut\" has the same past form.",
      ),
      mc(
        "Choose the phrase: \"The storm caused a ___ that left 200,000 homes without electricity.\"",
        ["power outage", "energy outage", "electric net cut", "energy cut"],
        0,
        "«Un apagón» is a \"power outage\" (US) or \"power cut\" (UK). \"Power\" is used for electricity supply; \"energy\" is the general idea.",
      ),
      dt(
        "The offshore wind farm will be connected to the grid next year.",
        "«Red eléctrica» is \"the grid\". Wind turbines at sea form an \"offshore wind farm\".",
      ),
      dt(
        "Extreme weather events have become more frequent across the region.",
        "\"Extreme weather events\" is a fixed phrase, with no article in a general statement.",
      ),
      dt(
        "The by-election was called after the local MP resigned.",
        "A \"by-election\" is held in one constituency when a seat becomes vacant between general elections.",
      ),
      wo(
        "Renewables now generate more than half of the country's electricity",
        "Las renovables ya generan más de la mitad de la electricidad del país.",
        "\"Renewables\" (plural noun, no article) is short for renewable energy sources.",
      ),
      sp(
        "Cutting emissions is not enough; we also need to adapt.",
        "Reducir las emisiones no basta; también tenemos que adaptarnos.",
        "Pause at the semicolon; stress \"NOT enough\" and \"aDAPT\".",
        "This is the mitigation and adaptation argument in one line. The gerund \"Cutting emissions\" takes a singular verb.",
      ),
      sp(
        "Both sides will have to accept some trade-offs.",
        "Ambas partes tendrán que aceptar algunas concesiones.",
        "Stress \"TRADE-offs\" on the first part.",
        "Naming trade-offs openly is a mark of deliberative language.",
      ),
      tx(
        "La contaminación del aire de la ciudad ha bajado desde que se eliminaron progresivamente los carros diésel.",
        "{Air pollution in the city|The city's air pollution|The air pollution in the city} has {fallen|dropped|decreased|gone down} since diesel cars were phased out.",
        "Here the article is optional because \"in the city\" narrows the noun. \"Phase out\" in the passive: \"were phased out\".",
      ),
    ],
  ),
  // ---------------------------------------------------------------------
  // Drill 2. Dependent prepositions, from polarized to deliberative,
  // strong collocations, passive reporting, and a whole-unit mix
  // ---------------------------------------------------------------------
  drill(
    "en-c2-environment-politics-unit-drill-2",
    "Drill: Prepositions, Collocations and Reporting the News",
    "Use dependent prepositions without Spanish interference, turn inflammatory statements into fair arguments, choose the verb and adverb that collocate, and report unconfirmed news without the Spanish journalistic conditional.",
    "Recap: prepositions, deliberation, collocations and reporting",
    [
      "Prepositions: depend on, insist on + -ing, married to, responsible for, aware of, dependent on, a solution to, an impact on, a rise in; no preposition after discuss, enter, attend, marry; agree with (a person), to (a proposal), on (a shared decision); result in (consequence) vs result from (cause). Deliberation: attribute views, concede (\"While I understand...\", \"I take the point that...\") and keep the claim without loaded labels.",
      "Collocations: pose a threat, draw a conclusion, play a role, take measures, raise awareness, call an election; bitterly disappointed, highly likely, deeply concerned, absolutely (not *very) exhausted. Reporting: \"X is said to be / to have done\", \"reportedly\", \"allegedly\". The Spanish journalistic conditional («habría recibido») never becomes *would have received.",
    ],
    [
      ["The final decision depends on the budget.", "La decisión final depende del presupuesto."],
      ["While I understand the concerns, the plan is necessary.", "Aunque entiendo la preocupación, el plan es necesario."],
      ["Drought poses a serious threat to local farmers.", "La sequía supone una grave amenaza para los agricultores de la zona."],
      ["The mayor is alleged to have misused public funds.", "El alcalde habría hecho un uso indebido de fondos públicos."],
    ],
    [
      mc(
        "Which sentence is correct?",
        [
          "The outcome depends on the weather.",
          "The outcome depends of the weather.",
          "The outcome depends from the weather.",
          "The outcome depends in the weather.",
        ],
        0,
        "«Depender de» is \"depend on\". *Depend of is one of the most persistent Spanish-speaker errors.",
      ),
      fb(
        "She insisted on ___ for the whole team's dinner.",
        "paying",
        "Insistió en [pagar] la cena de todo el equipo.",
        [],
        "After a preposition English uses the -ing form: \"insist on paying\". Spanish uses the infinitive, which leads to *insisted on pay or *insisted to pay.",
      ),
      tx(
        "Está casado con una ingeniera de software.",
        "He is married to a software engineer.",
        "«Casado con» is \"married to\", never *married with. (\"He married a software engineer\" would describe the wedding, not the current state.)",
      ),
      tx(
        "La agencia es responsable de supervisar la calidad del agua.",
        "The agency is responsible for {monitoring|supervising|overseeing} {water quality|the quality of the water|the water quality}.",
        "«Responsable de» is \"responsible for\" + -ing. *Responsible of is a direct calque.",
      ),
      fb(
        "There is no easy solution ___ the traffic problem.",
        "to",
        "No hay una solución fácil [al] problema del tráfico.",
        [],
        "\"A solution to\", like \"the key to\" and \"the answer to\". *The solution of the problem copies «la solución del problema».",
      ),
      tx(
        "El informe prevé un aumento de los precios de la energía.",
        "The report {predicts|forecasts|expects} {a rise|an increase} in energy prices.",
        "Words for change take \"in\" for the thing that changes: \"a rise in energy prices\". *An increase of prices copies «un aumento de».",
      ),
      mc(
        "Choose the correct option: \"The ministers ___ the budget late into the night.\"",
        ["discussed", "discussed about", "discussed on", "discussed of"],
        0,
        "\"Discuss\" takes a direct object, with no preposition. *Discussed about copies «discutir sobre».",
      ),
      fb(
        "After hours of debate, the two parties finally agreed ___ a date for the vote.",
        "on",
        "Tras horas de debate, los dos partidos por fin se pusieron de acuerdo [en] una fecha para la votación.",
        [],
        "\"Agree on\" is for a decision reached together. \"Agree with\" is for a person or opinion, and \"agree to\" for accepting a proposal.",
      ),
      kw(
        "RESULTED",
        "The floods were caused by heavy rain.",
        "The floods ___ heavy rain.",
        "resulted from",
        [],
        "\"Result from\" points to the cause; \"result in\" points to the consequence (\"Heavy rain resulted in floods\").",
      ),
      tx(
        "Muchas islas dependen mucho del turismo.",
        [
          "Many islands are {heavily|highly} dependent on tourism.",
          "Many islands {depend|rely} heavily on tourism.",
        ],
        "\"Dependent on\" (not *of) with the collocating intensifier \"heavily\"; or the verb \"depend / rely heavily on\".",
      ),
      mc(
        "Original: \"These bureaucrats are wrecking our schools.\" Which rewrite keeps the criticism but removes the inflammatory language?",
        [
          "Critics argue that the new rules have greatly increased teachers' workload.",
          "There are different views on how schools are run.",
          "School resources have been rebalanced by officials.",
          "These officials are destroying our schools.",
        ],
        0,
        "A good transformation keeps a checkable claim and attributes it. The second drains the meaning away (evasion), the third is a euphemism, and the fourth is still loaded.",
      ),
      tx(
        "Aunque entiendo la preocupación de los vecinos, creo que el proyecto es necesario.",
        "{While|Although} I understand {the residents'|residents'|local residents'} concerns, I {believe|think} {that|} the project is necessary.",
        "Acknowledging the other side before disagreeing (\"While I understand...\") is the key deliberative move. «Preocupación» about an issue is usually plural \"concerns\".",
      ),
      fb(
        "I take the ___ that change takes time; however, the delay is now unacceptable.",
        "point",
        "Acepto [el argumento de] que el cambio lleva tiempo; sin embargo, el retraso ya es inaceptable.",
        [],
        "\"I take the point that...; however, ...\" concedes part of the other side's case and then pivots to your own.",
      ),
      wo(
        "There is a legitimate case for lower fares, but not at any cost",
        "Hay argumentos legítimos a favor de bajar las tarifas, pero no a cualquier precio.",
        "\"There is a legitimate case for...\" grants the other side something before setting a limit.",
      ),
      lc(
        "Opponents of the plan argue that it will raise costs for farmers.",
        "How is the opposing view presented?",
        [
          "Neutrally, attributed to the people who hold it",
          "As an insult to the opponents",
          "As the speaker's own opinion",
          "As a proven fact",
        ],
        0,
        "\"Opponents of the plan\" is a neutral description and \"argue that\" attributes the claim.",
      ),
      mt(
        "Match each verb with the noun it collocates with.",
        [
          ["pose", "a threat"],
          ["draw", "a conclusion"],
          ["play", "a role"],
          ["raise", "awareness"],
          ["call", "an election"],
          ["take", "measures"],
        ],
        "Nouns choose their verbs: \"pose a threat\", \"draw a conclusion\", \"play a role\", \"raise awareness\", \"call an election\", \"take measures\". Falling back on \"make\" or \"do\" sounds non-native.",
      ),
      tx(
        "Sería un error sacar conclusiones firmes de un solo estudio.",
        "It would be a mistake to draw {firm|} conclusions from {a single study|just one study|one study|only one study}.",
        "«Sacar una conclusión» is \"draw a conclusion\", never *take or *make a conclusion.",
      ),
      fb(
        "Plastic waste ___ a growing threat to marine life.",
        "poses",
        "Los residuos plásticos [suponen] una amenaza creciente para la vida marina.",
        ["represents", "presents"],
        "A threat is \"posed\": \"pose a threat to\". «Suponer» here is never *suppose.",
      ),
      mc(
        "Choose the adverb: \"The negotiators were ___ disappointed by the outcome.\"",
        ["bitterly", "highly", "strongly", "heavily"],
        0,
        "\"Bitterly disappointed\" is a fixed pair. \"Highly\" goes with \"likely\" or \"critical\", \"strongly\" with \"opposed\", and \"heavily\" with \"dependent\".",
      ),
      tx(
        "La campaña pretende concientizar sobre el desperdicio de alimentos.",
        "The campaign {aims|seeks} to raise awareness {of|about} food waste.",
        "«Concientizar» is \"raise awareness of\". *Make conscience is not English, and «pretender» here means \"aim\", not *pretend.",
      ),
      sp(
        "The report was highly critical of the government's housing policy.",
        "El informe fue muy crítico con la política de vivienda del gobierno.",
        "Stress \"HIGHly CRITical\"; \"of the\" is weak.",
        "\"Highly critical\" is the natural collocation; *very very critical sounds like a learner. Note \"critical of\".",
      ),
      kw(
        "SAID",
        "Sources say that the minister is preparing a new budget.",
        "The minister is ___ a new budget.",
        "said to be preparing",
        [],
        "Pattern 2 of passive reporting: subject + \"is said\" + infinitive. The action is in progress now, so the continuous infinitive \"to be preparing\".",
      ),
      tx(
        "El alcalde habría recibido regalos de una constructora.",
        [
          "The mayor is {alleged|reported|said} to have {received|accepted} gifts from a {construction company|developer|building company}.",
          "The mayor {allegedly|reportedly} {received|accepted} gifts from a {construction company|developer|building company}.",
        ],
        "The Spanish journalistic conditional marks unconfirmed news. English uses passive reporting or an adverb; *The mayor would have received gifts describes a hypothetical, not a report.",
      ),
      mc(
        "Spanish news: «La policía habría detenido a dos sospechosos». Which is the right English?",
        [
          "Police have reportedly arrested two suspects.",
          "Police would have arrested two suspects.",
          "It is said police to have arrested two suspects.",
          "Police are said that they arrested two suspects.",
        ],
        0,
        "\"Reportedly\" marks the information as unconfirmed. The second is a false conditional; the third and fourth mix the two passive-reporting patterns.",
      ),
      fb(
        "The senator denies ___ any money from lobbyists.",
        "receiving",
        "El senador niega [haber recibido] dinero de los grupos de presión.",
        ["accepting", "taking", "having received", "having accepted", "having taken"],
        "\"Deny\" is followed by a noun or an -ing form, never by an infinitive: *denies to receive is wrong.",
      ),
      tx(
        "Se cree que el director dimitirá la semana próxima.",
        [
          "The director is expected to resign next week.",
          "The director is {believed|thought|expected} to be resigning next week.",
          "It is {believed|thought} that the director will resign next week.",
        ],
        "Both passive patterns work: \"It is believed that...\" or, in typical news style, \"The director is believed to be resigning...\" (continuous infinitive for a planned event). \"Is expected to resign\" also works. Take the subject of the «que» clause and make it the subject.",
      ),
      dt(
        "The two leaders are understood to have met in secret last month.",
        "The perfect infinitive \"to have met\" places the meeting before the reporting.",
      ),
      lc(
        "The party has dismissed the allegations as baseless.",
        "What is the party's position?",
        ["It denies the claims", "It confirms the claims", "It is investigating the claims", "It apologizes for the claims"],
        0,
        "\"Dismiss the allegations as baseless\" is a verb of denial: the party says the claims have no foundation.",
      ),
      wo(
        "The minister is alleged to have misled the committee",
        "El ministro habría engañado a la comisión.",
        "\"Is alleged to have misled\": passive reporting with a perfect infinitive replaces the Spanish journalistic conditional.",
      ),
      dt(
        "The island is heavily dependent on imported fuel.",
        "\"Heavily dependent on\": the collocating intensifier and the preposition \"on\".",
      ),
      tx(
        "Se espera que el nuevo impuesto sobre el carbono tenga un gran impacto en las emisiones.",
        [
          "The new carbon tax is expected to have a {major|big|large|significant|huge} {impact|effect} on emissions.",
          "It is expected that the new carbon tax will have a {major|big|large|significant|huge} {impact|effect} on emissions.",
        ],
        "Passive reporting with \"is expected to\", and the noun preposition \"an impact on\" (not *in). \"Emissions\" needs no article in a general statement.",
      ),
      tx(
        "Los dos partidos no lograron ponerse de acuerdo sobre la política energética.",
        "The two parties {failed to|could not|couldn't|were unable to} agree on {energy policy|the energy policy}.",
        "\"Agree on\" for a shared decision, and \"policy\" (a plan) rather than \"politics\" (the field) for «política energética».",
      ),
      dt(
        "Opponents argue that the ban will hit small farmers hardest.",
        "A neutral, attributed claim: \"Opponents argue that...\".",
      ),
      sp(
        "Supporters say the plan will cut emissions; critics say it will raise prices.",
        "Sus partidarios dicen que el plan reducirá las emisiones; sus detractores, que subirá los precios.",
        "Make the contrast audible: stress \"SUPporters\" and \"CRITics\".",
        "Balanced reporting gives each side its own attributed claim with neutral verbs.",
      ),
      mc(
        "Which sentence is correct?",
        [
          "Climate change poses a serious threat to the economy.",
          "The climate change poses a serious threat to the economy.",
          "Climate change makes a serious threat to the economy.",
          "Climate change poses a serious threat for economy.",
        ],
        0,
        "No article on general \"climate change\", the collocation \"pose a threat to\", and \"the economy\", a unique reference that keeps its article.",
      ),
    ],
  ),
];
