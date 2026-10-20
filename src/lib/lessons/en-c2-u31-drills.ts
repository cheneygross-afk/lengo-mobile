// Synced from cheneygross-afk/lengo:src/lib/lessons/en-c2-u31-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Required drill lessons for EN-C2 unit u31 (business and economics): a short recap, then graded practice.

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

export const EN_C2_U31_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. Cause and effect, accounts, economic news, numbers, agreement
  // ---------------------------------------------------------------------
  drill(
    "en-c2-econ-unit-drill-1",
    "Drill: Causes, Accounts, News, Numbers and Agreement",
    "Explain economic causes and effects with precise verbs, read a company's accounts and corporate news, say large figures without the billion trap and get subject-verb agreement right in business English.",
    "Recap: the language of the business pages",
    [
      "Forward to the effect: drive, fuel, trigger, give rise to, result in, lead to (+ noun or -ing); back to the cause: stem from, result from, be attributable to; chains: \"which in turn\". Prices \"rise\" but a company \"raises\" them. In the accounts, «beneficios» is \"profit\" (never *benefits), «facturación» is \"revenue\", and assets, liabilities, cash flow, write-offs and dividends each have one exact word. News: rates are raised, cut or held; firms \"bid for\", \"merge with\" and \"take a stake in\" each other.",
      "«Mil millones» is a \"billion\" and «un billón» a \"trillion\"; English writes 3.5 and 12,000, and a rise from 2% to 3% is one percentage point. Agreement: \"A number of firms have...\" but \"The number of firms has...\"; \"neither of\" + singular verb in formal English; \"the police are\"; and advice, information, research and news take no -s.",
    ],
    [
      ["The losses are largely attributable to a weaker peso.", "Las pérdidas son atribuibles en gran parte a un peso más débil."],
      ["The company posted a net profit of 2 billion dollars.", "La empresa registró un beneficio neto de 2.000 millones de dólares."],
      ["The central bank raised rates by half a percentage point.", "El banco central subió las tasas medio punto porcentual."],
      ["A number of suppliers have raised their prices.", "Varios proveedores han subido sus precios."],
    ],
    [
      mc(
        "Cheap credit ___ a housing boom.",
        ["fueled", "provoked", "rose", "stemmed from"],
        0,
        "\"Fuel\" adds energy to something already burning: booms, inflation, speculation. \"Provoke\" is for people's reactions (outrage, a backlash), \"rise\" is intransitive, and \"stem from\" points back to a cause.",
      ),
      fb(
        "The bank's collapse ___ a wave of panic selling.",
        "triggered",
        "La quiebra del banco [desató] una ola de ventas por pánico.",
        ["sparked", "set off"],
        "\"Trigger\" and \"spark\" describe a sudden event setting off a reaction. *Provoked a wave of selling is a calque of «provocar».",
      ),
      tr(
        "Los problemas de la empresa se derivan de una mala decisión de compra.",
        "The company's problems stem from a bad purchasing decision.",
        combos(
          ["The company's problems"],
          ["stem from", "arise from", "result from", "are due to"],
          ["a bad purchasing decision.", "a poor purchasing decision.", "a bad purchase decision.", "a poor purchase decision."],
        ),
        "«Derivarse de» for problems and losses is \"stem from\" or \"arise from\". \"Derive from\" exists but is mostly for words, ideas or income.",
      ),
      gap(
        "The two-week delay resulted ___ the strike at the port.",
        "from",
        [],
        "\"Result from\" points back to the cause; \"result in\" points forward to the effect: \"The strike resulted in a two-week delay.\" Mixing up the direction is the classic error.",
      ),
      tr(
        "Alrededor de un tercio del aumento es atribuible a los costos de la energía.",
        "About a third of the increase is attributable to energy costs.",
        combos(
          ["About a third", "About one third", "Around a third", "Around one third", "Roughly a third"],
          ["of the increase is attributable to"],
          ["energy costs.", "the cost of energy.", "higher energy costs."],
        ),
        "\"Be attributable to\" is the analyst's measured phrase, often with a proportion. Keep the preposition \"to\", like Spanish «atribuible a».",
      ),
      gap(
        "The new tariff led to several factories ___ their output.",
        "cutting",
        ["reducing"],
        "\"Lead to\" is followed by a noun or an -ing form: \"led to factories cutting output\". *Led to factories cut is wrong, because \"to\" here is a preposition, not part of an infinitive.",
      ),
      tr(
        "La sequía disparó los precios del maíz, lo que a su vez encareció la carne.",
        "The drought pushed up corn prices, which in turn made meat more expensive.",
        combos(
          ["The drought"],
          ["pushed up corn prices,", "drove up corn prices,", "sent corn prices soaring,", "pushed corn prices up,", "drove corn prices up,"],
          ["which in turn"],
          ["made meat more expensive.", "pushed up the price of meat.", "drove up the price of meat.", "raised the price of meat."],
        ),
        "A transitive verb (\"pushed up\", \"drove up\") puts the cause in subject position, and \"which in turn\" («lo que a su vez») takes the reader to the next link in the chain. \"Corn\" is American English for maize.",
      ),
      mc(
        "The company ___ its prices by 6% in January.",
        ["raised", "rose", "arose", "risen"],
        0,
        "\"Raise\" is transitive (the company raises its prices); \"rise\" is intransitive (prices rise). Spanish «subir» covers both, which causes *the company rose its prices.",
      ),
      tr(
        "Cuando la demanda supera a la oferta, hay escasez y los precios se disparan.",
        "When demand outstrips supply, there's a shortage and prices soar.",
        combos(
          ["When demand"],
          ["outstrips supply,", "outpaces supply,", "exceeds supply,"],
          ["there's a shortage and prices", "there is a shortage and prices", "there's a shortage, and prices", "there is a shortage, and prices"],
          ["soar.", "surge.", "shoot up.", "skyrocket."],
        ),
        "\"Supply and demand\" take no article. A concrete lack is a \"shortage\" (\"scarcity\" is the abstract concept), and \"soar\" or \"surge\" convey prices shooting up.",
      ),
      dt(
        "A global glut of steel has pushed prices down sharply.",
        "A \"glut\" is the opposite of a shortage: far too much supply. Listen for the short vowel in \"glut\", /glʌt/.",
      ),
      mt(
        "Match each Spanish accounting term with its English equivalent.",
        [
          ["facturación", "revenue"],
          ["beneficio neto", "net profit"],
          ["activo", "assets"],
          ["pasivo", "liabilities"],
          ["flujo de caja", "cash flow"],
        ],
        "«Facturación» is not *billing (sending invoices), and «beneficio» is never *benefit. \"Assets\" and \"liabilities\" are the two sides of the balance sheet.",
      ),
      tr(
        "La empresa obtuvo beneficios por tercer año consecutivo.",
        "The company made a profit for the third year in a row.",
        combos(
          ["The company"],
          ["made a profit", "posted a profit", "turned a profit", "was profitable", "reported a profit"],
          ["for the third year in a row.", "for the third consecutive year.", "for the third straight year."],
        ),
        "A company \"makes\", \"posts\" or \"turns\" a profit; «beneficios» in accounts is never *benefits, which are advantages or perks.",
      ),
      mc(
        "Which is the right translation of «La empresa tuvo pérdidas el año pasado»?",
        [
          "The company posted a loss last year.",
          "The company had negative benefits last year.",
          "The company won less money last year.",
          "The company made losses of benefits last year.",
        ],
        0,
        "A company \"posts a loss\" or \"loses money\" (British also \"makes a loss\"). It never *wins money, and «beneficios» is \"profit\".",
      ),
      fb(
        "Rising wages have ___ the restaurant's already thin margins.",
        "squeezed",
        "El aumento de los salarios ha [reducido] los ya escasos márgenes del restaurante.",
        ["eroded"],
        "When costs rise faster than prices, margins are \"squeezed\" or \"eroded\". Thin margins are \"wafer-thin\" or \"razor-thin\".",
      ),
      fb(
        "After two difficult years, the startup finally ___.",
        "broke even",
        "Tras dos años difíciles, la startup por fin [alcanzó el punto de equilibrio].",
        [],
        "A firm that neither makes nor loses money \"breaks even\" (broke, broken). It is the natural phrase for «alcanzar el punto de equilibrio».",
      ),
      tr(
        "El banco dio por perdida la deuda.",
        "The bank wrote off the debt.",
        ["The bank wrote the debt off."],
        "Deciding that a debt or asset is worthless is a \"write-off\" (verb: \"write off\"). «Amortizar» in the sense of spreading a cost is \"depreciation\" or \"amortization\", a different idea.",
      ),
      lc(
        "Sales were up eight percent year over year.",
        "What is the sales figure compared with?",
        [
          "The same period of the previous year",
          "The previous month",
          "The company's forecast",
          "The average of the last eight years",
        ],
        0,
        "\"Year over year\" (US) or \"year on year\" (UK) is «interanual»: compared with the same period a year earlier.",
      ),
      tr(
        "La compañía recortó su dividendo a 30 centavos por acción.",
        "The company cut its dividend to 30 cents per share.",
        combos(
          ["The company cut its dividend to"],
          ["30 cents", "thirty cents"],
          ["per share.", "a share."],
        ),
        "A company \"pays\", \"raises\", \"cuts\" or \"suspends\" its dividend, quoted \"per share\". \"Cut to\" gives the new level.",
      ),
      fb(
        "The central bank decided to leave interest rates ___.",
        "unchanged",
        "El banco central decidió dejar las tasas de interés [sin cambios].",
        ["on hold", "where they are", "steady"],
        "Central banks \"raise\", \"cut\" or \"hold\" rates, or \"leave them unchanged\". «Tasas de interés» is \"interest rates\", never *interest types.",
      ),
      mc(
        "Prices are still rising, but more slowly than last year. What is this called?",
        ["disinflation", "deflation", "recession", "stagnation"],
        0,
        "\"Disinflation\" is inflation falling but still positive. \"Deflation\" means prices are actually falling, a different and rarer situation.",
      ),
      tr(
        "La economía se contrajo durante dos trimestres consecutivos.",
        "The economy contracted for two consecutive quarters.",
        combos(
          ["The economy"],
          ["contracted", "shrank"],
          ["for two consecutive quarters.", "for two quarters in a row.", "for two straight quarters."],
        ),
        "An economy \"contracts\" or \"shrinks\" in bad times; two consecutive quarters of contraction is the usual definition of a recession.",
      ),
      tr(
        "El fondo ha adquirido una participación del 12 % en la aerolínea.",
        "The fund has taken a 12% stake in the airline.",
        combos(
          ["The fund has"],
          ["taken", "acquired", "bought"],
          ["a 12% stake", "a 12 percent stake", "a 12-percent stake", "a 12% shareholding", "a 12 percent shareholding"],
          ["in the airline."],
        ),
        "«Participación» in a company is a \"stake\" or \"shareholding\", never *participation, and it is a stake IN a company.",
      ),
      mc(
        "Which sentence is correct?",
        [
          "Telco has made a hostile bid for its main rival.",
          "Telco has made a hostile bid to its main rival.",
          "Telco has made a hostile bid of its main rival.",
          "Telco has merged to its main rival.",
        ],
        0,
        "The prepositions are fixed: a bid FOR a company, merge WITH, the takeover OF. *A bid to and *merge to are classic slips.",
      ),
      sp(
        "The board rejected the offer as too low, so the buyer sweetened it.",
        "La junta rechazó la oferta por considerarla demasiado baja, así que el comprador la mejoró.",
        "Stress \"rejected\", \"too low\" and \"sweetened\"; \"sweetened\" ends in /nd/.",
        "In takeover news, a buyer \"raises\" or \"sweetens\" a bid after the target's board \"rejects\" or \"rebuffs\" it.",
      ),
      tr(
        "El proyecto costó 3.000 millones de dólares.",
        "The project cost 3 billion dollars.",
        ["The project cost three billion dollars.", "The project cost $3 billion.", "The project cost $3bn.", "The project cost 3 billion US dollars."],
        "«Mil millones» is a \"billion\", so «3.000 millones» is \"3 billion\". *3,000 million sounds like a translation, and \"billion\" takes no -s after a number.",
      ),
      sp(
        "Public debt now exceeds a trillion pesos.",
        "La deuda pública ya supera el billón de pesos.",
        "\"Trillion\" is /ˈtrɪljən/, two syllables; stress \"debt\" and \"trillion\".",
        "Spanish «un billón» is a million million, which is a \"trillion\" in English. Translating it as \"billion\" is off by a factor of a thousand.",
      ),
      dt(
        "The rate went up by half a percentage point.",
        "\"By\" gives the size of the change. A move from 2% to 2.5% is half a percentage point, but a 25 percent increase.",
      ),
      lc(
        "Mortgage rates rose from two to three percent.",
        "How big was the rise?",
        [
          "One percentage point, which is a 50 percent increase",
          "One percent",
          "Fifty percentage points",
          "Three percentage points",
        ],
        0,
        "From 2% to 3% is one percentage point but a 50 percent increase. Confusing \"percent\" and \"percentage points\" is a serious error in a report.",
      ),
      tr(
        "Uno de cada cinco empleados trabaja desde casa.",
        "One in five employees works from home.",
        combos(
          ["One in five", "One out of five", "One in every five"],
          ["employees", "workers"],
          ["works from home.", "work from home."],
        ),
        "«Uno de cada cinco» is \"one in five\", never *one of each five. Both singular and plural verbs are used after it.",
      ),
      gap(
        "Unemployment rose ___ 6.2% in March, its highest level in a decade.",
        "to",
        [],
        "\"Rise TO\" gives the new level (Spanish «al 6,2 %»); \"rise BY\" gives the size of the change («un 6,2 %»). Note the decimal point in English.",
      ),
      tr(
        "La empresa tiene unos 300 empleados.",
        "The company has some 300 employees.",
        combos(
          ["The company has"],
          ["some", "about", "around", "roughly", "approximately"],
          ["300 employees.", "three hundred employees."],
        ),
        "«Unos 300» is \"some 300\" (formal) or \"about 300\", never *a 300. \"Hundred\" takes no -s after a number.",
      ),
      mc(
        "Which sentence is correct?",
        [
          "A number of investors have complained about the fees.",
          "A number of investors has complained about the fees.",
          "The number of investors have grown since May.",
          "A number of investor have complained about the fees.",
        ],
        0,
        "\"A number of\" means «varios», so the verb agrees with the plural noun: \"have\". \"The number of\" takes a singular verb: \"The number of investors has grown.\"",
      ),
      gap(
        "Neither of the proposals ___ acceptable to the board.",
        "is",
        ["was"],
        "In formal English, \"neither of\" + plural noun takes a singular verb. A plural verb is common in speech, but a board report should use \"is\".",
      ),
      tr(
        "La policía está investigando el fraude.",
        "The police are investigating the fraud.",
        ["The police are investigating the scam.", "Police are investigating the fraud."],
        "\"Police\" is always plural: \"the police are\". Spanish «la policía» is singular, which causes *the police is.",
      ),
      gap(
        "Forty percent of the budget ___ already been spent.",
        "has",
        [],
        "Percentages agree with the noun that follows: \"the budget\" is singular, so \"has\". Compare \"Forty percent of the stores have closed.\"",
      ),
      tr(
        "Nos dieron muy buenos consejos y mucha información útil.",
        "They gave us some very good advice and a lot of useful information.",
        combos(
          ["They gave us"],
          ["some very good advice", "very good advice", "really good advice", "some really good advice"],
          ["and a lot of useful information.", "and lots of useful information.", "and plenty of useful information.", "and much useful information."],
        ),
        "\"Advice\" and \"information\" are uncountable in English: no -s and no \"a\". *Advices and *informations are classic errors.",
      ),
      wo(
        "Every department submits its budget in October.",
        "Cada departamento presenta su presupuesto en octubre.",
        "\"Every\" + singular noun takes a singular verb (\"submits\") and a singular possessive (\"its\"). Keep the two consistent.",
      ),
    ],
  ),

  // ---------------------------------------------------------------------
  // Drill 2. News reading, the merger meeting, the pitch, reports + whole unit
  // ---------------------------------------------------------------------
  drill(
    "en-c2-econ-unit-drill-2",
    "Drill: News, Meetings, Pitches and Reports",
    "Decode causes and hedges in economic news, probe figures and raise concerns diplomatically, pitch to investors with the right numbers, and write report and proposal sentences with impersonal style and the mandative subjunctive, then combine everything from the unit.",
    "Recap: reading, speaking and writing business English",
    [
      "News hides causes in \"amid\", \"on the back of\", \"in the wake of\", and forecasts in \"is expected to\", \"is set to\"; keep the hedge (\"cannot be ruled out\" is not \"will happen\"). In meetings, probe with \"Could you walk us through...?\" (never *explain me) and disagree softly: \"I'm not entirely convinced...\", \"I'd just like to flag...\". In a pitch, a market is \"growing at 12% a year\", you \"raise\" money (never *rise) and revenue \"tripled\".",
      "Reports open with \"This report examines...\", use impersonal structures (\"A decline was observed\", \"It was found that\"), nominalize (\"a sharp rise in costs\") and recommend with \"We recommend that the board approve\", \"It is essential that costs be reduced\" or \"We recommend closing\", never *recommend to close. Headings are short noun phrases.",
    ],
    [
      ["Shares slid amid fears of a slowdown.", "Las acciones bajaron en medio de temores de una desaceleración."],
      ["Could you break that figure down for us?", "¿Nos podría desglosar esa cifra?"],
      ["We're raising 2 million dollars for a 10% stake.", "Buscamos 2 millones de dólares a cambio de una participación del 10 %."],
      ["It is recommended that the plant be modernized.", "Se recomienda modernizar la planta."],
    ],
    [
      mc(
        "\"Shares in the carmaker fell amid fears of a strike.\" What does \"amid\" tell you?",
        [
          "The fears were the background, and the writer suggests a link without fully claiming it",
          "The strike definitely caused the fall",
          "The shares fell before anyone feared a strike",
          "The shares fell despite the fears",
        ],
        0,
        "\"Amid\" («en medio de») suggests a link but is weaker than \"because of\". When you summarize, don't turn it into a firm cause.",
      ),
      tr(
        "Las acciones de la aerolínea subieron a raíz del acuerdo con el sindicato.",
        "The airline's shares rose in the wake of the deal with the union.",
        combos(
          ["The airline's shares", "Shares in the airline", "The airline's stock"],
          ["rose"],
          ["in the wake of", "on the back of", "following"],
          ["the deal with the union.", "the agreement with the union."],
        ),
        "«A raíz de» is \"in the wake of\"; \"on the back of\" is the typical news phrase for a positive cause. Both hide the causal link in a preposition.",
      ),
      fb(
        "Higher fuel costs continue to ___ on airline stocks.",
        "weigh",
        "Los mayores costos del combustible siguen [pesando] sobre las acciones de las aerolíneas.",
        [],
        "Something that pushes a market down \"weighs on\" it; something that pushes it up \"buoys\" or \"lifts\" it.",
      ),
      tr(
        "Se espera que el crecimiento se ralentice el próximo año.",
        "Growth is expected to slow next year.",
        combos(
          ["Growth is"],
          ["expected", "forecast", "projected"],
          ["to slow next year.", "to slow down next year."],
        ).concat(["It is expected that growth will slow next year.", "It's expected that growth will slow next year."]),
        "The passive + infinitive (\"is expected to slow\") is the news pattern for «se espera que». *It is expected that growth slows is wrong: it would need \"will slow\".",
      ),
      lc(
        "A recession cannot be ruled out.",
        "What does the speaker mean?",
        [
          "A recession is possible, but not certain",
          "A recession will definitely happen",
          "A recession is impossible",
          "A recession has already started",
        ],
        0,
        "\"Cannot be ruled out\" is «no se puede descartar»: a weak hedge. Reporting it as \"there will be a recession\" changes the message.",
      ),
      fb(
        "The IMF has ___ its growth forecast for the region from 3% to 2.4%.",
        "revised down",
        "El FMI [revisó a la baja] su previsión de crecimiento para la región del 3 % al 2,4 %.",
        ["downgraded", "cut", "lowered", "revised downward"],
        "Forecasts are \"revised down\" or \"downgraded\". Note the English decimal point: 2.4, not *2,4.",
      ),
      lc(
        "The central bank sounded hawkish yesterday.",
        "What does this mean in plain English?",
        [
          "It suggested it might raise interest rates again",
          "It suggested it would cut interest rates soon",
          "It said economic growth was strong",
          "It refused to comment on interest rates",
        ],
        0,
        "\"Hawkish\" central bankers favor higher rates to fight inflation; \"dovish\" ones favor lower rates to support growth.",
      ),
      mt(
        "Match each piece of economic jargon with its plain-English meaning.",
        [
          ["headwinds", "problems slowing growth"],
          ["tailwinds", "factors helping growth"],
          ["a soft landing", "lower inflation without a recession"],
          ["tighten monetary policy", "raise interest rates"],
          ["dovish", "in favor of lower rates"],
        ],
        "A plain-English summary keeps the logic (cause, effect, forecast, hedge) but drops the metaphors.",
      ),
      tr(
        "Salvo sorpresas, la inflación debería bajar al 3 % antes de fin de año.",
        "Barring a shock, inflation should fall to 3% by the end of the year.",
        combos(
          ["Barring a shock,", "Barring any shocks,", "Barring surprises,", "Barring any surprises,"],
          ["inflation should fall to"],
          ["3%", "3 percent"],
          ["by the end of the year.", "by year-end.", "by the end of this year."],
        ),
        "\"Barring a shock\" is the stock phrase for «salvo sorpresas». \"Fall TO 3%\" gives the new level, and \"by the end of the year\" is the deadline.",
      ),
      tr(
        "¿Podría explicarnos paso a paso cómo llegaron a esa cifra?",
        "Could you walk us through how you arrived at that figure?",
        combos(
          ["Could you", "Can you", "Would you"],
          ["walk us through how you"],
          ["arrived at", "came up with", "reached", "got to"],
          ["that figure?", "that number?"],
        ),
        "\"Walk someone through\" is the professional way to ask for a step-by-step explanation. If you use \"explain\", it needs \"to\": \"explain to us\", never *explain us.",
      ),
      mc(
        "Which question probes a figure most diplomatically?",
        [
          "What assumptions underpin that figure?",
          "Where does this number come from?",
          "Can you explain me this number?",
          "This number is impossible, no?",
        ],
        0,
        "Asking about the assumptions treats the figure as reasonable but worth testing. A literal «¿De dónde sale este número?» sounds blunt, and *explain me is ungrammatical.",
      ),
      fb(
        "The merger would give us a larger market ___ in the north.",
        "share",
        "La fusión nos daría una mayor [participación] de mercado en el norte.",
        [],
        "«Participación» or «cuota de mercado» is \"market share\", never *market quota or *market participation. A \"quota\" is a fixed limit.",
      ),
      tr(
        "No dudo de la lógica estratégica, pero no estoy del todo convencido de que las sinergias sean alcanzables.",
        "I don't doubt the strategic logic, but I'm not entirely convinced that the synergies are achievable.",
        combos(
          ["I don't doubt the strategic"],
          ["logic,", "rationale,"],
          ["but I'm not entirely convinced", "but I'm not completely convinced", "but I'm not fully convinced"],
          ["that the synergies are achievable.", "the synergies are achievable.", "that the synergies can be achieved.", "the synergies can be achieved."],
        ),
        "Acknowledge first, then disagree with a softened verb. \"Not entirely convinced\" carries more weight in an English boardroom than *I am totally against this.",
      ),
      sp(
        "I'd just like to flag a risk with the integration timeline.",
        "Solo quisiera señalar un riesgo con el calendario de integración.",
        "Keep \"I'd just\" light and stress \"flag\", \"risk\" and \"timeline\".",
        "\"Flag\" means pointing out a risk without making a drama of it, a typical diplomatic move in meetings.",
      ),
      wo(
        "Let's park that for now and come back to it later.",
        "Dejemos eso por ahora y volvamos a ello más tarde.",
        "\"Park\" a topic means postponing it. \"Come back to it\" keeps the particle \"back\" before \"to it\".",
      ),
      gap(
        "The deal is still subject ___ board approval and due diligence.",
        "to",
        [],
        "\"Subject to\" means «sujeto a»: the deal depends on those conditions. \"Due diligence\" has no plural.",
      ),
      tr(
        "Es un mercado de 4.000 millones de dólares que crece a un ritmo del 9 % anual.",
        "It's a 4-billion-dollar market growing at 9% a year.",
        combos(
          ["It's a", "It is a"],
          ["4-billion-dollar", "four-billion-dollar", "$4 billion"],
          ["market growing at", "market that is growing at", "market that's growing at"],
          ["9% a year.", "9 percent a year.", "9% per year.", "9 percent per year.", "9% annually.", "9 percent annually."],
        ),
        "As an adjective, the number stays singular and hyphenated: \"a 4-billion-dollar market\". A market grows AT a rate, never *grows in 9%.",
      ),
      mc(
        "Which sentence is correct?",
        [
          "We're raising 3 million dollars for a 20% stake.",
          "We're rising 3 million dollars for a 20% stake.",
          "We're raising 3 millions dollars for a 20% stake.",
          "We're raising 3 millions of dollars for a 20% participation.",
        ],
        0,
        "You \"raise\" money (transitive), never *rise it. \"Million\" takes no -s after a number, and «participación» is a \"stake\".",
      ),
      tr(
        "Hemos triplicado los ingresos en dieciocho meses.",
        "We've tripled revenue in eighteen months.",
        combos(
          ["We've", "We have"],
          ["tripled revenue", "tripled our revenue", "grown revenue threefold", "grown our revenue threefold"],
          ["in eighteen months.", "in 18 months."],
        ),
        "«Triplicar» is \"triple\" or \"grow threefold\". *Multiplied by three sounds like a math exercise.",
      ),
      dt(
        "Our churn is below two percent a month.",
        "\"Churn\" is the rate at which customers cancel, /tʃɝn/. \"Percent\" never takes -s.",
      ),
      lc(
        "That gives us a runway of eighteen months.",
        "What is the speaker saying?",
        [
          "The money will last for eighteen months",
          "The company will be profitable in eighteen months",
          "The product launches in eighteen months",
          "Investors will be repaid within eighteen months",
        ],
        0,
        "\"Runway\" is how long the money lasts before the company needs more funding.",
      ),
      tr(
        "Este informe examina las causas de la caída de las ventas en la región sur.",
        "This report examines the causes of the drop in sales in the southern region.",
        combos(
          ["This report examines the causes of the"],
          ["drop in sales", "fall in sales", "decline in sales", "decrease in sales"],
          ["in the southern region.", "in the south."],
        ),
        "Reports open with \"This report\" + present verb. *In this report we are going to talk about is too informal for the genre.",
      ),
      mc(
        "Which is the right translation of «Se observó una disminución en la productividad»?",
        [
          "A decline in productivity was observed.",
          "Was observed a decline in productivity.",
          "Observed a decline in productivity.",
          "It observed a decline in productivity.",
        ],
        0,
        "English needs a subject: the passive \"A decline was observed\" or \"It was observed that...\". A subject-less calque of «se observó» is wrong.",
      ),
      tr(
        "Recomendamos que se cierre la sucursal de Lima.",
        "We recommend that the Lima branch be closed.",
        combos(
          ["We recommend"],
          ["that the Lima branch be closed.", "that the Lima branch should be closed.", "that the branch in Lima be closed.", "closing the Lima branch.", "closing the branch in Lima.", "that the Lima office be closed."],
        ),
        "After \"recommend that\", formal English uses the mandative subjunctive: \"be closed\", with no -s and no \"is\". \"Recommend closing\" (gerund) is the other correct pattern.",
      ),
      fb(
        "It is essential that every employee ___ the training before May.",
        "complete",
        "Es fundamental que todos los empleados [completen] la capacitación antes de mayo.",
        ["finish", "should complete", "do"],
        "After \"It is essential that\", the mandative subjunctive is the bare verb: \"every employee complete\", without -s. British English may use \"should complete\".",
      ),
      mc(
        "Which sentence is correct?",
        [
          "We recommend outsourcing the cleaning service.",
          "We recommend to outsource the cleaning service.",
          "We recommend the company to outsource the cleaning service.",
          "We suggest to outsource the cleaning service.",
        ],
        0,
        "\"Recommend\" and \"suggest\" take an -ing form or a that-clause. *Recommend to outsource and *recommend the company to outsource are calques of «recomendar que/a alguien que».",
      ),
      tr(
        "Sería conveniente que la junta aplazara el lanzamiento.",
        "The board would be well advised to delay the launch.",
        combos(
          ["The board would be well advised to"],
          ["delay the launch.", "postpone the launch.", "put off the launch."],
        ),
        "\"Would be well advised to\" is a fixed, polite recommending structure. Unlike \"recommend\", it takes the infinitive.",
      ),
      gap(
        "There was a sharp ___ in costs in the second quarter.",
        "rise",
        ["increase"],
        "Nominalization turns \"Costs rose sharply\" into \"There was a sharp rise in costs\": the formal report style. Note \"a rise IN\".",
      ),
      fb(
        "The survey ___ that most customers leave because of price.",
        "revealed",
        "La encuesta [reveló] que la mayoría de los clientes se van por el precio.",
        ["showed", "found", "indicated"],
        "Findings use reporting verbs with an impersonal subject. *I asked the customers and they told me... is the first-person habit to avoid.",
      ),
      mc(
        "Which is the best heading for a section of a report?",
        ["Current situation", "What is the situation now?", "Now I will talk about the situation", "The situation, which is current"],
        0,
        "Headings are short noun phrases, not questions or sentences.",
      ),
      wo(
        "The purpose of this report is to evaluate the new booking system.",
        "El propósito de este informe es evaluar el nuevo sistema de reservas.",
        "The purpose statement comes first: \"The purpose of this report is to\" + base verb.",
      ),
      tr(
        "Esta medida reduciría los costos en un 8 % aproximadamente.",
        "This measure would cut costs by approximately 8%.",
        combos(
          ["This measure would"],
          ["cut costs by", "reduce costs by"],
          ["approximately", "around", "about", "roughly", "an estimated"],
          ["8%.", "8 percent."],
        ),
        "Justify each recommendation with a \"would\" clause. \"BY 8%\" gives the size of the change, like Spanish «en un 8 %».",
      ),
      tr(
        "Los beneficios netos cayeron un 15 % debido a la subida de las tasas de interés.",
        "Net profit fell by 15% due to the rise in interest rates.",
        combos(
          ["Net profit", "Net profits"],
          ["fell by"],
          ["15%", "15 percent"],
          ["due to", "owing to", "because of"],
          ["the rise in interest rates.", "higher interest rates.", "the increase in interest rates."],
        ),
        "Three traps in one sentence: «beneficios» is \"profit\" (not *benefits), «un 15 %» is \"by 15%\", and «tasas de interés» is \"interest rates\".",
      ),
      mc(
        "Which sentence is correct?",
        [
          "The data shows that a number of firms have cut jobs.",
          "The datas show that a number of firms has cut jobs.",
          "The data shows that the number of firms have cut jobs.",
          "The data show that a number of firm has cut jobs.",
        ],
        0,
        "\"Data\" is uncountable (singular in business English, plural in science, never *datas), and \"a number of firms\" takes a plural verb.",
      ),
      sp(
        "We recommend that the company raise its prices by two percent.",
        "Recomendamos que la empresa suba sus precios un dos por ciento.",
        "Say \"raise\" without -s: /reɪz/. Stress \"recommend\", \"raise\" and \"two percent\".",
        "Mandative subjunctive (\"the company raise\", no -s) plus transitive \"raise\" and \"by\" for the size of the change.",
      ),
      tr(
        "Ninguna de las ofertas fue aceptada, y la junta dio por perdida la inversión.",
        "None of the bids was accepted, and the board wrote off the investment.",
        combos(
          ["None of the"],
          ["bids", "offers"],
          ["was accepted,", "were accepted,"],
          ["and the board wrote off the investment.", "and the board wrote the investment off."],
        ),
        "\"None of\" + plural noun takes a singular (formal) or plural verb. \"Write off\" is the accounting verb for declaring something worthless.",
      ),
      dt(
        "Inflation is expected to ease, barring a further rise in energy prices.",
        "Two news chunks: \"is expected to ease\" (forecast) and \"barring\" («salvo»). \"Inflation\" takes no article.",
      ),
    ],
  ),
];
