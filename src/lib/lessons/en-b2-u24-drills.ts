// Synced from cheneygross-afk/lengo:src/lib/lessons/en-b2-u24-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise, Lesson } from "./types";

// Required drill lessons for EN-B2 unit u24 (vocabulary: work, business, money, society, politics, crime, make and do, false friends and phrasal verbs): a short recap, then graded practice.
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
const lc = (audio: string, options: string[], explanation: string, question = "What did you hear?"): Exercise => ({ type: "listen-choose", audio, question, options, correctIndex: 0, explanation });
const sp = (text: string, explanation: string, tip?: string, prompt?: string): Exercise => ({ type: "speak", text, ...(prompt ? { prompt } : {}), ...(tip ? { tip } : {}), explanation });
const mt = (instructions: string, pairs: [string, string][], explanation: string): Exercise => ({ type: "matching", instructions, pairs: pairs.map(([left, right]) => ({ left, right })), explanation });

const SECONDS: Record<Exercise["type"], number> = {
  "multiple-choice": 15, "multi-select": 20, "listen-choose": 20, "fill-blank": 20, translate: 30,
  "word-order": 25, matching: 30, dictation: 30, speak: 25, write: 300,
};
const lesson = (
  n: number,
  topic: string,
  title: string,
  summary: string,
  heading: string,
  body: string[],
  examples: [string, string][],
  exercises: Exercise[],
): Lesson => ({
  slug: `en-b2-${topic}-unit-drill-${n}`,
  level: "EN-B2",
  number: n,
  title: `Drill: ${title}`,
  summary,
  duration: `${Math.round((exercises.reduce((s, e) => s + SECONDS[e.type], 0) + 40) / 60)} min`,
  sections: [{ heading, body, examples: examples.map(([es, en]) => ({ es, en })) }],
  exercises,
});


export const EN_B2_U24_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. Work and careers, business, money, consumer society
  // ---------------------------------------------------------------------
  lesson(
    1,
    "word-web-work-money",
    "Job or Work? Lend or Borrow?",
    "You will be able to talk about jobs, companies, money and shopping with the right words and collocations: job and work, apply for, get promoted, be laid off, do business, make a profit, earn and win, lend and borrow, afford, bargain and refund.",
    "Recap: one Spanish word, two English ones",
    [
      "«Trabajo» is \"job\" (countable: a position) or \"work\" (uncountable: the activity or the place: \"at work\"). You \"apply for\" a job, \"get promoted\", \"resign\" or \"quit\", and you're \"fired\" (your fault) or \"laid off\" (the company cuts jobs). You \"run\" a business, \"do business\" (never *make business) and \"make a profit\".",
      "«Ganar» is \"earn\" or \"make\" (a salary) but \"win\" (a prize). «Prestar» is \"lend\" (it goes away from you); «pedir prestado» is \"borrow\" (it comes to you). You \"owe\" money, \"can't afford\" things, and in a store you keep the \"receipt\" to get a \"refund\".",
    ],
    [
      ["He lost his job when the factory closed.", "Perdió el trabajo cuando cerró la fábrica."],
      ["My brother runs a small restaurant.", "Mi hermano lleva un pequeño restaurante."],
      ["Could you lend me your umbrella?", "¿Me prestas tu paraguas?"],
      ["We can't afford a vacation this year.", "Este año no nos podemos permitir unas vacaciones."],
    ],
    [
      // --- work and careers
      fb("She's looking for a new ___ in marketing.", "job", "Está buscando un [trabajo] nuevo en marketing.",
        "A position you have and get paid for is a \"job\" (countable). *A new work is wrong: \"work\" is uncountable."),
      mc("Which sentence is correct?", [
        "I have a lot of work this month.",
        "I have a lot of works this month.",
        "I have many works this month.",
        "I have much works this month.",
      ], "\"Work\" as the activity is uncountable: no plural. \"A work\" only means «una obra», as in \"a work of art\"."),
      tr("Mi esposo todavía está en el trabajo.", [
        "My husband is still at work.",
      ], "The place is \"work\" with no article: \"at work\", never *at the work."),
      fb("I ___ for five jobs last month, but nobody called me.", "applied", "El mes pasado [solicité] cinco puestos, pero nadie me llamó.",
        "You \"apply for\" a job. *Applied five jobs leaves out the preposition."),
      tr("Ella está a cargo del departamento de ventas.", [
        "She's in charge of the sales department.",
        "She is in charge of the sales department.",
      ], "«Estar a cargo de» = \"be in charge of\"."),
      tr("Lo ascendieron después de dos años.", [
        "He {got|was} promoted after two years.",
      ], "«Lo ascendieron» = \"he got promoted\" or \"he was promoted\". The noun is \"a promotion\"."),
      mc("A company closed a factory and 300 workers lost their jobs, through no fault of their own. Which sentence fits?", [
        "They were laid off.",
        "They were fired.",
        "They retired.",
        "They resigned.",
      ], "\"Laid off\" = the company cut jobs for economic reasons. \"Fired\" suggests it was the worker's fault; \"resign\" and \"retire\" are the worker's own decisions."),
      tr("Mi papá se jubila el año que viene.", [
        "My {dad|father} {is retiring|will retire|retires} next year.",
      ], "«Jubilarse» = \"retire\". \"Retire\" does not mean «retirar» money; that's \"withdraw\"."),
      fb("If we don't finish tonight, we'll miss the ___.", "deadline", "Si no terminamos esta noche, se nos pasará [la fecha límite].",
        "A \"deadline\" is «la fecha límite» or «el plazo». You \"meet\" it (on time) or \"miss\" it (late)."),
      tr("Trabajo como diseñadora independiente.", [
        "I work {as a freelance designer|freelance as a designer}.",
        "I'm a freelance designer.",
      ], "Someone who works for different clients is \"freelance\" or \"a freelancer\" («independiente», «autónomo»)."),
      // --- business
      tr("Mi tía lleva una pequeña panadería.", [
        "My aunt runs a small bakery.",
      ], "You \"run\" a business («llevar un negocio»), not *lead or *carry it."),
      mc("Which sentence is correct?", [
        "We do business with several companies in Brazil.",
        "We make business with several companies in Brazil.",
        "We make businesses with several companies in Brazil.",
        "We do businesses with several companies in Brazil.",
      ], "«Hacer negocios» = \"do business\", uncountable. *Make business is a classic calque."),
      fb("After many hours of talks, we finally closed the ___.", "deal", "Tras muchas horas de negociación, por fin cerramos el [trato].",
        "«Cerrar un trato» = \"close a deal\" or \"make a deal\"."),
      tr("Esa librería quebró el año pasado.", [
        "That bookstore went out of business last year.",
        "That bookstore went bankrupt last year.",
        "That bookshop went {out of business|bankrupt} last year.",
      ], "A company that fails and closes \"goes out of business\" or, more formally, \"goes bankrupt\". «Librería» is \"bookstore\", not \"library\"."),
      wo("The two companies merged in 2019.", "Las dos empresas se fusionaron en 2019.",
        "«Fusionarse» = \"merge\", with no reflexive pronoun. The noun is \"a merger\"."),
      fb("The company made a ___ of three million dollars this year.", "profit", "La empresa obtuvo un [beneficio] de tres millones de dólares este año.",
        "«Beneficio» in business is \"profit\"; you \"make a profit\". \"Benefits\" are advantages or extras like health insurance."),
      mt("Match each business word with its Spanish meaning.", [
        ["launch", "lanzar al mercado"],
        ["take over", "adquirir otra empresa"],
        ["branch", "sucursal"],
        ["market share", "cuota de mercado"],
        ["staff", "personal, empleados"],
      ], "These are the core words for talking about companies: they \"launch\" products, \"take over\" other firms, open \"branches\", fight for \"market share\" and hire \"staff\"."),
      // --- money
      mc("Which sentence is correct?", [
        "Can you lend me ten dollars?",
        "Can you borrow me ten dollars?",
        "Can I lend ten dollars from you?",
        "Can you borrow ten dollars to me?",
      ], "\"Lend\" = give temporarily («prestar»): \"lend me\". \"Borrow\" = take temporarily: \"Can I borrow ten dollars from you?\"."),
      tr("Le pedí prestado el carro a mi hermana.", [
        "I borrowed my sister's car.",
        "I borrowed the car from my sister.",
      ], "The car came to me, so \"borrow ... from\". Never *I lent the car from my sister."),
      fb("She ___ $50,000 a year as a nurse.", ["earns", "makes"], "[Gana] 50.000 dólares al año como enfermera.",
        "A salary is something you \"earn\" or \"make\". \"Win\" is for prizes and games."),
      tr("Mi primo ganó un viaje a Cancún en un concurso.", [
        "My cousin won a trip to Cancun in a {contest|competition}.",
      ], "Prizes and contests take \"win\". *Earned a trip would mean he worked for it."),
      tr("Todavía le debo dinero al banco.", [
        "I still owe the bank money.",
        "I still owe money to the bank.",
      ], "«Deber» money = \"owe\". \"Must\" is obligation, never money."),
      fb("We can't ___ a new car this year.", "afford", "Este año no [nos podemos permitir] un carro nuevo.",
        "\"Afford\" = have enough money for something, almost always with \"can\" or \"can't\"."),
      wo("They took out a mortgage to buy their first house.", "Pidieron una hipoteca para comprar su primera casa.",
        "You \"take out\" a mortgage («pedir una hipoteca»). The t in \"mortgage\" is silent."),
      tr("Estoy sin un peso hasta el viernes.", [
        "I'm broke until Friday.",
        "I'm broke till Friday.",
      ], "Informal «no tener ni un peso» = \"be broke\". A company in that situation is \"bankrupt\"."),
      // --- consumer society
      fb("This jacket was half price. What a ___!", "bargain", "Esta chaqueta estaba a mitad de precio. ¡Qué [ganga]!",
        "Something much cheaper than its real value is \"a bargain\". The opposite is \"a rip-off\"."),
      mc("You return a shirt, and the clerk asks for the paper you got when you paid («el ticket»). Which word does she use?", [
        "receipt",
        "ticket",
        "recipe",
        "note",
      ], "In a store it's a \"receipt\" (silent p: rih-SEET). A \"ticket\" is for a train or a concert, and a \"recipe\" is for cooking."),
      tr("¿Me pueden devolver el dinero? La lámpara llegó rota.", [
        "{Can|Could} I {get|have} a refund? The lamp arrived {broken|damaged}.",
      ], "«Devolver el dinero» = \"a refund\": you \"get a refund\" or the store \"refunds\" you."),
      tr("Mi mamá se quejó del servicio.", [
        "My {mom|mother} complained about the service.",
      ], "\"Complain about\" something («quejarse de»). «Reclamar» isn't \"reclaim\", which means get something back."),
      lc("What a rip-off!", [
        "¡Qué robo! (Es carísimo.)",
        "¡Qué ganga!",
        "¡Qué buen trato!",
        "¡Qué descuento!",
      ], "\"A rip-off\" is something far too expensive. It's the opposite of \"a bargain\"."),
      dc("That watch was an impulse buy, and now I regret it.",
        "\"An impulse buy\" = something you buy without planning («compra impulsiva»)."),
      dc("My laptop is still under warranty, so the repair is free.",
        "\"Under warranty\" = «en garantía». The product will be repaired or replaced at no cost."),
      sp("I can't afford to quit my job, so I'm working overtime.",
        "\"Can't afford\" + to-infinitive; \"quit\" = leave a job (informal); \"work overtime\" = «hacer horas extra».",
        "Stress \"afford\" on the second syllable: a-FORD.",
        "Say it in English: «No me puedo permitir dejar el trabajo, así que estoy haciendo horas extra.»"),
      sp("Could I borrow your charger? I'll give it back tomorrow.",
        "The charger comes to me, so \"borrow\". \"Give it back\" = «devolverlo».",
        "Rising intonation on the question, and stress \"borrow\" and \"back\".",
        "Say it in English: «¿Me prestas tu cargador? Te lo devuelvo mañana.»"),
    ],
  ),

  // ---------------------------------------------------------------------
  // Drill 2. Society, rise and raise, politics, crime and the law,
  // make or do
  // ---------------------------------------------------------------------
  lesson(
    2,
    "word-web-society-law",
    "Raise Awareness, Commit a Crime, Make a Decision",
    "You will be able to talk about social problems, politics and crime with the right collocations (tackle poverty, run for office, commit a crime, be charged with), choose between \"rise\" and \"raise\" and \"rob\" and \"steal\", and decide between \"make\" and \"do\".",
    "Recap: words that travel together",
    [
      "Social problems are usually uncountable and take no article in general: \"Poverty is rising\", not *The poverty. You \"tackle\" or \"address\" a problem and \"raise awareness\" of it. \"Rise\" has no object (\"Prices rose\"); \"raise\" needs one (\"They raised taxes\", \"raise money\"). The person is a \"politician\", the subject is \"politics\", a specific plan is a \"policy\"; you \"vote for\" someone and \"run for\" office.",
      "You \"steal\" a thing but \"rob\" a person or place. You \"commit\" a crime (never *make), get \"arrested\", \"charged with\" a crime, \"sentenced to\" prison or \"fined\". \"Make\" is for creating and fixed blocks (a decision, a mistake, progress, an appointment); \"do\" is for tasks and others (research, damage, a favor, your best).",
    ],
    [
      ["Homelessness is a growing problem in many cities.", "La falta de vivienda es un problema creciente en muchas ciudades."],
      ["The bank raised interest rates again.", "El banco volvió a subir las tasas de interés."],
      ["Someone stole my laptop from the car.", "Alguien me robó la computadora portátil del carro."],
      ["Don't worry if you make a mistake. Just do your best.", "No te preocupes si cometes un error. Haz lo que puedas."],
    ],
    [
      // --- social problems
      fb("___ affects millions of families in the region.", "Poverty", "La [pobreza] afecta a millones de familias en la región.",
        "General statements about social problems take no article: \"Poverty affects ...\", not *The poverty affects."),
      mc("Which sentence is correct?", [
        "Unemployment is falling in my country.",
        "The unemployment is falling in my country.",
        "Unemployed is falling in my country.",
        "The unemployments are falling in my country.",
      ], "\"Unemployment\" is the uncountable noun, with no article in a general statement. \"Unemployed\" is the adjective: \"He's unemployed\"."),
      tr("Mi vecino lleva seis meses desempleado.", [
        "My neighbor has been unemployed for six months.",
        "My neighbor has been out of work for six months.",
      ], "«Llevar» + time = present perfect + \"for\". The adjective is \"unemployed\"; never *he's in unemployment."),
      tr("El gobierno tiene que combatir la desigualdad.", [
        "The government {has to|must|needs to} {tackle|address|fight|deal with} inequality.",
      ], "You \"tackle\", \"address\", \"fight\" or \"deal with\" a social problem. \"Inequality\" in general takes no article."),
      fb("The video helped to raise ___ about homelessness.", "awareness", "El video ayudó a [crear conciencia] sobre la falta de vivienda.",
        "\"Raise awareness\" (of or about something) = make people know about a problem («concientizar», «sensibilizar»)."),
      tr("Mi hermana hace voluntariado en un refugio para animales.", [
        "My sister does volunteer work at an animal shelter.",
        "My sister volunteers at an animal shelter.",
      ], "«Hacer voluntariado» = \"do volunteer work\" or simply \"volunteer\"."),
      // --- rise or raise
      mc("Which sentence is correct?", [
        "Prices rose again last month.",
        "Prices raised again last month.",
        "Prices were risen again last month.",
        "Prices rised again last month.",
      ], "Prices go up by themselves, so \"rise\" (rose, risen), with no object. \"Raise\" needs an object, and *rised doesn't exist."),
      fb("The company ___ salaries by five percent.", "raised", "La empresa [subió] los sueldos un cinco por ciento.",
        "Someone makes something go up, so \"raise\" + object: \"raised salaries\". Test: \"raised what?\" Salaries."),
      tr("Recaudamos dos mil dólares para la escuela.", [
        "We raised {two thousand dollars|$2,000|2,000 dollars} for the school.",
      ], "«Recaudar» money = \"raise money\". Same verb as \"raise taxes\" and \"raise children\"."),
      lc("Unemployment rose to ten percent.", [
        "El desempleo subió al diez por ciento.",
        "El gobierno subió el desempleo al diez por ciento.",
        "El desempleo bajó al diez por ciento.",
        "El desempleo se mantuvo en el diez por ciento.",
      ], "\"Rose\" is the past of \"rise\": unemployment went up by itself. There's no object, so nobody \"raised\" it."),
      // --- politics
      mt("Match each English word with its Spanish meaning.", [
        ["politician", "político (la persona)"],
        ["political", "político (adjetivo)"],
        ["politics", "la política en general"],
        ["policy", "una política concreta"],
        ["election", "elecciones"],
      ], "Spanish «político» and «política» each split in two in English. A single vote is usually \"the election\", singular."),
      mc("Which sentence is correct?", [
        "My uncle is a politician.",
        "My uncle is a politic.",
        "My uncle is a political.",
        "My uncle is a policy.",
      ], "The person is a \"politician\". \"Political\" is the adjective, and \"politic\" is a rare word meaning «prudente»."),
      tr("Nunca hablo de política con mis suegros.", [
        "I never talk about politics with my in-laws.",
        "I never discuss politics with my in-laws.",
      ], "«La política» in general = \"politics\", which takes a singular verb. \"Discuss\" takes no \"about\"."),
      fb("Who did you vote ___ in the last election?", "for", "¿[A] quién votaste en las últimas elecciones?",
        "You \"vote for\" a candidate and \"vote against\" a proposal. The preposition goes at the end of the question."),
      tr("Se presenta a alcalde el año que viene.", [
        "He's running for mayor next year.",
        "He is running for mayor next year.",
        "He's standing for mayor next year.",
      ], "A candidate \"runs for\" an office in American English (\"stands for\" in British English): \"running for mayor\"."),
      wo("The government passed a law to protect forests.", "El gobierno aprobó una ley para proteger los bosques.",
        "A government \"passes\" a law («aprobar una ley»). \"Approve\" is used for plans or budgets, but laws are \"passed\"."),
      // --- crime and the law
      mc("Which sentence is correct?", [
        "Someone stole my wallet on the bus.",
        "Someone robbed my wallet on the bus.",
        "Someone stole me on the bus.",
        "Someone stole me my wallet on the bus.",
      ], "You \"steal\" a thing (my wallet) and \"rob\" a person or place. *Stole me would mean you were kidnapped."),
      tr("Atracaron un banco en el centro ayer.", [
        "{They|Someone} robbed a bank downtown yesterday.",
        "A bank was robbed downtown yesterday.",
      ], "A bank is a place, so \"rob\" a bank. The passive is very natural in news: \"A bank was robbed\"."),
      tr("Le robaron la bicicleta a mi hijo en la escuela.", [
        "My son's {bike|bicycle} was stolen at school.",
        "Someone stole my son's {bike|bicycle} at school.",
      ], "The thing is stolen: \"my son's bike was stolen\". Never *they robbed my son the bike."),
      fb("He ___ a serious crime when he was young.", "committed", "[Cometió] un delito grave cuando era joven.",
        "You \"commit\" a crime, never *make or *do one."),
      fb("The suspect was ___ with fraud.", "charged", "Al sospechoso lo [acusaron formalmente] de fraude.",
        "\"Be charged with\" a crime = «ser acusado formalmente de». Note the preposition \"with\"."),
      tr("La condenaron a dos años de cárcel.", [
        "She was sentenced to two years in {prison|jail}.",
      ], "«Condenar a» = \"sentence to\": \"She was sentenced to two years in prison\". The noun is \"a sentence\"."),
      tr("Me pusieron una multa por exceso de velocidad.", [
        "I got a fine for speeding.",
        "I was fined for speeding.",
      ], "«Una multa» = \"a fine\"; the verb is \"fine\": \"I was fined\". \"Speeding\" = «exceso de velocidad»."),
      wo("They fined him two hundred dollars.", "Le pusieron una multa de doscientos dólares.",
        "\"Fine\" as a verb takes the person, then the amount: \"fined him two hundred dollars\"."),
      lc("The jury found him not guilty.", [
        "El jurado lo declaró inocente.",
        "El jurado lo declaró culpable.",
        "El jurado no lo encontró.",
        "El jurado no se presentó.",
      ], "\"Find someone guilty / not guilty\" = «declarar culpable / inocente». Here \"find\" doesn't mean «encontrar»."),
      // --- make or do
      fb("We need to ___ a decision before Friday.", "make", "Tenemos que [tomar] una decisión antes del viernes.",
        "«Tomar una decisión» = \"make a decision\". \"Take a decision\" is British, but \"make\" is standard everywhere."),
      mc("Which sentence is correct?", [
        "Could you do me a favor?",
        "Could you make me a favor?",
        "Could you make a favor for me?",
        "Could you do me favor?",
      ], "\"Do someone a favor\", with the person first and the article: \"do me a favor\". Never *make me a favor."),
      tr("Cometí un error en el informe.", [
        "I made a mistake in the report.",
      ], "«Cometer un error» = \"make a mistake\". *Do a mistake is always wrong."),
      tr("Está investigando sobre energía solar.", [
        "{She's|He's|She is|He is} doing research {on|into} solar energy.",
        "{She's|He's|She is|He is} researching solar energy.",
      ], "«Investigar» = \"do research\". \"Research\" is uncountable: never *a research or *researches."),
      tr("Has avanzado mucho con tu inglés.", [
        "You've made a lot of progress with your English.",
        "You have made a lot of progress with your English.",
      ], "«Avanzar», «hacer progresos» = \"make progress\". \"Progress\" is uncountable: never *progresses."),
      fb("The storm ___ a lot of damage to the houses.", ["did", "caused"], "La tormenta [causó] muchos daños a las casas.",
        "\"Do damage\" (or \"cause damage\"). \"Damage\" is uncountable here: \"a lot of damage\", not *damages."),
      dc("I need to make an appointment with the dentist.",
        "«Pedir cita» = \"make an appointment\". It's one of the fixed \"make\" collocations."),
      dc("Two men were arrested after a witness called the police.",
        "\"Arrest\" = «detener». News uses the passive: \"were arrested\". A \"witness\" is «un testigo»."),
      sp("Poverty and unemployment have risen this year, and the government must tackle them.",
        "No article with general social problems; \"have risen\" (no object, so \"rise\"); \"tackle\" a problem.",
        "Say \"risen\" as RIZ-n, with a short i.",
        "Say it in English: «La pobreza y el desempleo han aumentado este año, y el gobierno tiene que combatirlos.»"),
      sp("I made a lot of mistakes, but I did my best.",
        "\"Make a mistake\" but \"do your best\": learn each noun with its verb.",
        "Stress \"mistakes\" and \"best\".",
        "Say it in English: «Cometí muchos errores, pero hice lo que pude.»"),
    ],
  ),

  // ---------------------------------------------------------------------
  // Drill 3. False friends at work, phrasal verbs for work and money,
  // vocabulary in the passive with reporting verbs, the economy; then
  // the whole unit mixed
  // ---------------------------------------------------------------------
  lesson(
    3,
    "word-web-economy-mixed",
    "Actually, Turn It Down, the Economy",
    "You will be able to avoid the false friends of the office (actually, eventually, attend, realize, sensible), use work and money phrasal verbs in the right word order, report business and political news, and talk about the economy with linkers of result.",
    "Recap: false friends, phrasal verbs and the economy",
    [
      "\"Actually\" = «en realidad» (for «actualmente», say \"currently\"); \"eventually\" = «al final»; \"attend\" = «asistir a»; \"realize\" = «darse cuenta» (for «realizar», say \"carry out\"); \"sensible\" = «sensato». Phrasal verbs: \"set up\", \"take on\", \"carry out\", \"turn down\" are separable, but a pronoun goes in the middle (\"turn it down\"); \"come up with\", \"run out of\" and \"cut down on\" never split.",
      "News uses passives (\"Fifty jobs were lost\") and reporting verbs with fixed patterns: \"deny\" and \"admit\" + -ing, \"promise\" + to, \"claim\" and \"announce\" + that. \"The economy\" is the system, \"economics\" the subject, \"economic\" means related to the economy, \"economical\" means cheap to run. Results: \"so\", \"As a result,\", \"Therefore,\".",
    ],
    [
      ["Actually, I'm currently looking for a new job.", "En realidad, actualmente estoy buscando otro trabajo."],
      ["They offered me a promotion, but I turned it down.", "Me ofrecieron un ascenso, pero lo rechacé."],
      ["The company denied breaking the law.", "La empresa negó haber violado la ley."],
      ["Costs went up. As a result, prices rose.", "Los costos subieron. Como consecuencia, subieron los precios."],
    ],
    [
      // --- false friends
      fb("I'm ___ working on a big project for a client in Chile.", "currently", "[Actualmente] estoy trabajando en un proyecto grande para un cliente en Chile.",
        "«Actualmente» = \"currently\" or \"at the moment\". \"Actually\" means «en realidad»."),
      mc("Which sentence means «En realidad, no soy de aquí»?", [
        "Actually, I'm not from here.",
        "Currently, I'm not from here.",
        "Eventually, I'm not from here.",
        "Actually, I'm not of here.",
      ], "\"Actually\" corrects or adds surprising information («en realidad», «de hecho»). Origin takes \"from\", not *of."),
      tr("Al final encontramos un departamento cerca de la oficina.", [
        "We eventually found an apartment near the office.",
        "{Eventually|In the end}, we found an apartment near the office.",
      ], "«Al final», after a long time or effort, = \"eventually\" or \"in the end\". It doesn't mean «eventualmente»."),
      tr("El costo real del proyecto fue el doble.", [
        "The {actual|real} cost of the project was {double|twice as much|twice as high}.",
      ], "«Real», «verdadero» = \"actual\". «Actual» (current) is \"current\": \"the current cost\" would mean «el costo actual»."),
      fb("More than two hundred people ___ the conference.", ["attended", "went to"], "Más de doscientas personas [asistieron a] la conferencia.",
        "«Asistir a» = \"attend\" (with no preposition) or \"go to\". \"Assist\" means «ayudar»."),
      tr("De repente me di cuenta de que había dejado la cartera en casa.", [
        "I suddenly realized {that |}I had left my wallet at home.",
        "Suddenly{,|} I realized {that |}I had left my wallet at home.",
      ], "«Darse cuenta de» = \"realize\". The forgetting happened earlier, so past perfect: \"had left\"."),
      tr("La empresa realizó una encuesta a sus clientes.", [
        "The company {carried out|did|conducted} a survey of its customers.",
      ], "«Realizar» = \"carry out\", \"do\" or \"conduct\". \"Realize\" only means «darse cuenta»."),
      mt("Match each English word with its Spanish meaning.", [
        ["library", "biblioteca"],
        ["bookstore", "librería"],
        ["folder", "carpeta"],
        ["sensible", "sensato"],
        ["sensitive", "sensible"],
      ], "False friends look like Spanish words but mean something else: \"library\" is not «librería», \"carpet\" is not «carpeta», and \"sensible\" means «sensato»."),
      mc("Which sentence is correct?", [
        "My boss is very sensitive to criticism.",
        "My boss is very sensible to criticism.",
        "My boss is very sensitive of criticism.",
        "My boss is very sensible of criticism.",
      ], "«Sensible» = \"sensitive\", with \"to\". \"Sensible\" means «sensato»: \"a sensible decision\"."),
      // --- phrasal verbs
      mc("Which sentence is correct?", [
        "They offered her the job, but she turned it down.",
        "They offered her the job, but she turned down it.",
        "They offered her the job, but she down turned it.",
        "They offered her the job, but she turned down.",
      ], "With a pronoun, a separable phrasal verb must split: \"turn it down\", never *turn down it. \"Turn down\" needs its object here."),
      fb("We've run ___ of printer paper. Can you order some?", "out", "Se nos [acabó] el papel de la impresora. ¿Puedes pedir más?",
        "\"Run out of\" = have none left («quedarse sin», «acabarse»). It's a three-word verb, so it never splits."),
      tr("A mi hermano se le ocurrió una idea genial para el negocio.", [
        "My brother came up with a {great|brilliant} idea for the business.",
      ], "«Se le ocurrió» = \"came up with\", with the person as subject. *An idea occurred to my brother is possible but much less natural."),
      tr("Por fin terminamos de pagar el carro.", [
        "We finally paid off the car.",
        "We finally paid the car off.",
        "We've finally paid off the car.",
      ], "\"Pay off\" = pay all of something («terminar de pagar»). It's separable: \"paid off the car\" or \"paid the car off\"."),
      tr("Tenemos que reducir los gastos de viaje.", [
        "We {need to|have to|must} cut down on travel {expenses|costs}.",
      ], "«Reducir» consumption or spending = \"cut down on\". It's inseparable: \"cut down on costs\", \"cut down on them\"."),
      fb("The store is taking ___ ten new employees for the summer.", "on", "La tienda va a [contratar] a diez empleados nuevos para el verano.",
        "\"Take on\" staff = hire them («contratar»). It can also mean accept work: \"take on a project\"."),
      wo("They set up a new office in Bogota last year.", "Montaron una nueva oficina en Bogotá el año pasado.",
        "\"Set up\" = create a company, office or system («montar»)."),
      lc("All that hard work paid off.", [
        "Todo ese esfuerzo dio fruto.",
        "Terminé de pagar todo ese trabajo.",
        "Todo ese trabajo no sirvió de nada.",
        "Me pagaron por todo ese trabajo.",
      ], "Without an object, \"pay off\" means «dar fruto»: the effort was worth it."),
      // --- vocabulary in the passive, reporting verbs
      fb("Five hundred jobs ___ lost if the factory closes.", "will be", "Se [perderán] quinientos puestos de trabajo si cierra la fábrica.",
        "Future passive: \"will be\" + participle. Spanish uses «se», but English news prefers the passive."),
      tr("El nuevo modelo se lanzó en junio.", [
        "The new model was launched in June.",
      ], "A product is \"launched\" («lanzar al mercado»). The passive replaces the Spanish «se»."),
      tr("Un grupo japonés compró la empresa.", [
        "A Japanese group {took over|bought|acquired} the company.",
        "The company was {taken over|bought|acquired} by a Japanese group.",
      ], "When one company buys another, it \"takes it over\" or \"acquires\" it. The noun is \"a takeover\"."),
      mc("Which sentence is correct?", [
        "The manager denied making a mistake.",
        "The manager denied to make a mistake.",
        "The manager denied that make a mistake.",
        "The manager denied of making a mistake.",
      ], "\"Deny\" + -ing (or + \"that\" + full clause). And it's \"make\" a mistake, never *do."),
      tr("Admitió haber perdido los documentos.", [
        "He admitted {losing|having lost} the documents.",
        "He admitted that he had lost the documents.",
        "She admitted {losing|having lost} the documents.",
        "She admitted that she had lost the documents.",
      ], "\"Admit\" + -ing, like \"deny\". «Haber perdido» doesn't need a perfect form: \"admitted losing\" is enough."),
      tr("El alcalde prometió bajar los impuestos.", [
        "The mayor promised to {lower|cut|reduce} taxes.",
      ], "\"Promise\" + to-infinitive. Note: \"lower\" or \"cut\" taxes; to \"raise\" taxes is the opposite."),
      fb("The company ___ that it would open three new stores.", "announced", "La empresa [anunció] que abriría tres tiendas nuevas.",
        "\"Announce\" = say officially, followed by \"that\" + clause. After a past verb, \"will\" becomes \"would\"."),
      // --- the economy
      mc("Which sentence is correct?", [
        "She has a degree in economics.",
        "She has a degree in economy.",
        "She has a degree in economic.",
        "She has a degree in economical.",
      ], "The academic subject is \"economics\". \"The economy\" is a country's economic system."),
      fb("This car is very ___: it uses very little gas.", "economical", "Este carro es muy [económico]: gasta muy poca gasolina.",
        "Cheap to run = \"economical\". \"Economic\" means related to the economy: \"economic growth\"."),
      wo("The economy grew by three percent last year.", "La economía creció un tres por ciento el año pasado.",
        "\"The economy\" takes \"the\". A change of a percentage uses \"by\"."),
      tr("Subieron las tasas de interés, así que mucha gente dejó de comprar casas.", [
        "Interest rates {went up|rose}, so {many|a lot of|lots of} people stopped buying {houses|homes}.",
      ], "Rates go up by themselves: \"rose\" or \"went up\", not *raised. \"So\" links cause and result in one sentence, and \"stop\" + -ing means quit doing it."),
      fb("Sales fell sharply. As a ___, the company cut 200 jobs.", "result", "Las ventas cayeron mucho. [Como consecuencia], la empresa recortó 200 puestos.",
        "\"As a result,\" starts a new sentence with the consequence. \"Therefore,\" and \"Consequently,\" work the same way."),
      tr("Si el gobierno baja los impuestos, la gente gastará más.", [
        "If the government {lowers|cuts|reduces} taxes, people will spend more.",
      ], "First conditional: present after \"if\", \"will\" in the result. Never *If the government will lower."),
      mc("Which sentence is correct?", [
        "Unless we cut costs, we'll make a loss.",
        "Unless we will cut costs, we'll make a loss.",
        "Unless we don't cut costs, we'll make a loss.",
        "Unless we cut costs, we'll do a loss.",
      ], "\"Unless\" = \"if not\", so it takes a positive present verb. And a company \"makes a loss\", never *does a loss."),
      // --- mix
      dc("If I earned more, I would pay off my debts faster.",
        "Second conditional with \"earn\" (a salary) and \"pay off\" (a debt). The b in \"debt\" is silent."),
      dc("The minister claimed that the economy was growing.",
        "\"Claim\" = say something is true without proof, followed by \"that\" + clause."),
      sp("Actually, I eventually turned down the offer because the salary was too low.",
        "Two false friends: \"actually\" («en realidad») and \"eventually\" («al final»), plus \"turn down\" = «rechazar».",
        "Stress \"AC-tually\" and \"e-VEN-tually\" on the right syllables.",
        "Say it in English: «En realidad, al final rechacé la oferta porque el sueldo era demasiado bajo.»"),
      sp("Unemployment has risen, so the government has announced new policies.",
        "\"Rise\" without an object (\"has risen\"), \"announce\" officially, and \"policies\" = specific plans («políticas»).",
        "Say \"policies\" as PAH-luh-seez, stress on the first syllable.",
        "Say it in English: «El desempleo ha aumentado, así que el gobierno ha anunciado nuevas políticas.»"),
    ],
  ),
];
