// Synced from cheneygross-afk/lengo:src/lib/lessons/en-b2-u15-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise, Lesson } from "./types";

// Required drill lessons for EN-B2 unit u15 (practice: passives, causatives, reporting verbs and clauses): a short recap, then graded practice.

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
  slug: `en-b2-structures-unit-drill-${n}`,
  level: "EN-B2",
  number: n,
  title: `Drill: ${title}`,
  summary,
  duration: `${Math.round((exercises.reduce((s, e) => s + SECONDS[e.type], 0) + 40) / 60)} min`,
  sections: [{ heading, body, examples: examples.map(([es, en]) => ({ es, en })) }],
  exercises,
});

export const EN_B2_U15_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. Causatives, personal passives, «se dice que», reporting verbs
  // ---------------------------------------------------------------------
  lesson(
    1,
    "I Had My Car Fixed",
    "You will be able to talk about services and childhood rules with have something done and personal passives, translate «se dice que» and «me dijo que no fuera», and use the main reporting verb patterns.",
    "Recap: who does the action?",
    [
      "When someone else does a job for you, use \"have/get\" + object + past participle: \"I get my hair cut\", \"I had my phone stolen\". Spanish «me corto el pelo» or «me robaron el celular» never becomes *they stole me the phone. For childhood rules, use personal passives: \"I was told to...\", \"I wasn't allowed to...\", \"I was made to...\".",
      "«Se dice / se cree que» → \"It is said that...\" or \"He is said to be...\" (\"to have\" + participle for an earlier action). Reported orders use person + (not) to: \"She told me not to go\".",
      "Reporting verbs have three patterns: + -ing (deny, admit, suggest; insist on, accuse of), + to (refuse, agree, offer, threaten), + person + to (advise, warn, remind, ask). \"Suggest\" and \"explain\" never take a person straight after them.",
    ],
    [
      ["We had our windows cleaned yesterday.", "Ayer nos limpiaron las ventanas."],
      ["I wasn't allowed to stay up late.", "No me dejaban quedarme despierto hasta tarde."],
      ["The singer is said to be very shy.", "Se dice que el cantante es muy tímido."],
      ["He warned us not to park there.", "Nos advirtió que no estacionáramos allí."],
    ],
    [
      fb("I get my hair ___ every six weeks.", "cut", "[Me corto el pelo] cada seis semanas (en la peluquería).",
        "\"Get\" + object + past participle: a hairdresser does it for you. \"I cut my hair\" would mean you hold the scissors yourself."),
      mc("A mechanic repaired your car. Which sentence is correct?", [
        "I had my car repaired.",
        "I had repaired my car.",
        "I repaired me the car.",
        "They repaired me the car.",
      ], "The object goes before the participle: \"had my car repaired\". \"I had repaired my car\" is the past perfect: you did it yourself."),
      tr("Nos pintaron la casa el mes pasado.", ["We {had|got} our house painted last month.", "Our house was painted last month."],
        "If you paid someone, use the causative: \"We had our house painted\". The passive (\"was painted\") also works."),
      fb("I'm going to get my eyes ___ next week.", ["tested", "checked", "examined"], "La semana que viene me van a [revisar] la vista.",
        "The causative works in any tense: \"I'm going to get my eyes tested\"."),
      tr("Me robaron la billetera en el autobús.", ["I had my wallet stolen on the bus.", "My wallet was stolen on the bus.", "Someone stole my wallet on the bus."],
        "«Me robaron» becomes \"I had my wallet stolen\" (or a passive). Never *They stole me the wallet."),
      wo("She's having her dress shortened for the wedding.", "Le están acortando el vestido para la boda.",
        "Present continuous causative: \"is having\" + object + participle."),
      fb("When I was a kid, I wasn't ___ to go out after dark.", "allowed", "De niño, no me [dejaban] salir cuando oscurecía.",
        "«No me dejaban» becomes the personal passive \"I wasn't allowed to\". \"Let\" has no normal passive."),
      tr("Me enseñó a nadar mi tío.", ["I was taught {to swim|how to swim} by my uncle.", "My uncle taught me {to swim|how to swim}."],
        "The personal passive \"I was taught to swim by...\" keeps \"I\" as the topic. The active is also correct."),
      mc("How do you say «Me obligaban a hacer la cama todos los días»?", [
        "I was made to make my bed every day.",
        "I was made make my bed every day.",
        "I made to make my bed every day.",
        "They made me to make my bed every day.",
      ], "\"Make\" has no \"to\" in the active (\"They made me make\"), but \"to\" comes back in the passive: \"I was made to make\"."),
      tr("Nací en Quito y me crié en Miami.", ["I was born in Quito and {raised|brought up} in Miami.", "I was born in Quito and grew up in Miami."],
        "\"Born\" always goes with \"be\": \"I was born\", never *I born. «Me crié» is \"I was raised\" or \"I grew up\"."),
      fb("The restaurant is said ___ the best tacos in town.", ["to have", "to serve", "to make"], "[Se dice que] el restaurante tiene los mejores tacos de la ciudad.",
        "\"Subject + is said + to\" + base form: \"The restaurant is said to have...\"."),
      tr("Se cree que el ladrón escapó por la ventana.", ["The thief is {believed|thought} to have escaped through the window.", "It is {believed|thought} that the thief escaped through the window."],
        "For an earlier action use the perfect infinitive: \"is believed to have escaped\". Or start with \"It is believed that...\"."),
      tr("Se espera que bajen los precios.", ["Prices are expected to {fall|go down|drop}.", "It is expected that prices will {fall|go down|drop}."],
        "«Se espera que» → \"are expected to\" or \"It is expected that...\". English always needs a subject: never *Is expected."),
      mc("Which sentence is correct?", [
        "It is said that the lake is very deep.",
        "Is said that the lake is very deep.",
        "The lake is said that it is very deep.",
        "The lake is said being very deep.",
      ], "Either \"It is said that the lake is...\" or \"The lake is said to be...\". *Is said that has no subject."),
      tr("Me dijo que no llegara tarde.", "{She|He} told me not to {be|arrive|come} late.",
        "Reported order: \"told\" + person + \"not to\". Never *told me don't be late or *said me."),
      fb("My mom asked me ___ the dog for a walk.", "to take", "Mi mamá me pidió que [sacara] al perro a pasear.",
        "«Me pidió que» + subjunctive → \"asked me to\" + base form."),
      mc("How do you say «Nos pidieron que no usáramos el celular»?", [
        "They asked us not to use our phones.",
        "They asked us don't use our phones.",
        "They said us not to use our phones.",
        "They asked that we didn't use our phones.",
      ], "\"Ask\" + person + \"not to\". \"Say\" never takes a person directly (*said us)."),
      fb("The contract was ___ yesterday.", "signed", "El contrato [se firmó] ayer.",
        "The passive always needs the past participle: \"was signed\", not *was sign, even if you hardly hear the -ed."),
      tr("La directora nos sugirió que redujéramos gastos.", "The director suggested {that we reduce|that we should reduce|reducing} {costs|expenses|spending}.",
        "\"Suggest\" + that-clause or -ing. Never *suggested us to reduce, even though Spanish says «nos sugirió»."),
      mc("Which sentence is correct?", [
        "He explained the problem to us.",
        "He explained us the problem.",
        "He explained the problem us.",
        "He said us the problem.",
      ], "\"Explain\" + thing + \"to\" + person. *explained us is as wrong as *said us."),
      fb("He denied ___ the money.", ["taking", "having taken", "stealing", "having stolen"], "Negó [haber tomado] el dinero.",
        "\"Deny\" + -ing (or \"having\" + participle). Never *denied to take."),
      tr("Se negó a pagar la multa.", "{He|She} refused to pay the fine.",
        "«Negarse a» = \"refuse to\". It isn't reflexive in English: no \"himself\"."),
      mc("How do you say «Se negó a contestar mis preguntas»?", [
        "He refused to answer my questions.",
        "He denied to answer my questions.",
        "He refused answering my questions.",
        "He refused himself to answer my questions.",
      ], "\"Refuse to\" = say you won't do something. \"Deny\" means say something isn't true, and it takes -ing, not \"to\"."),
      tr("Me aconsejó que buscara otro trabajo.", "{She|He} advised me to {look for|find|get} {another|a new} job.",
        "\"Advise\" + person + \"to\": the English for «que» + subjunctive."),
      fb("They accused her of ___ the report.", ["copying"], "La acusaron de [copiar] el informe.",
        "\"Accuse someone of\" + -ing: after a preposition, always -ing."),
      tr("Mi casero amenazó con subir el alquiler.", "My landlord threatened to {raise|increase|put up} the rent.",
        "«Amenazar con» = \"threaten to\" + base form, not *threaten with."),
      wo("She apologized for not calling me back.", "Se disculpó por no devolverme la llamada.",
        "\"Apologize for\" + -ing; the negative is \"for not calling\"."),
      dc("The airport has been closed because of the snow.",
        "Present perfect passive: \"has been closed\". \"Been\" sounds like \"bin\" in fast speech."),
      dc("The minister denied knowing about the problem.",
        "\"Deny\" + -ing: \"denied knowing\"."),
      lc("I had my bag stolen at the station.", [
        "Me robaron la bolsa en la estación.",
        "Le robé la bolsa a alguien en la estación.",
        "Dejé la bolsa en la estación.",
        "Tenía una bolsa robada en la estación.",
      ], "\"Had + object + participle\" can describe something bad done to you: «me robaron la bolsa»."),
      lc("I was told not to touch anything.", [
        "Me dijeron que no tocara nada.",
        "Les dije que no tocaran nada.",
        "Me dijo que tocara todo.",
        "No me dijeron nada.",
      ], "\"I was told not to\" = «me dijeron que no»: a personal passive with \"I\" as the subject."),
      sp("I need to get my passport renewed.", "\"Get\" + object + participle: an office renews it for you.",
        "Stress \"passport\" and \"renewed\".", "Say it in English: Tengo que renovar el pasaporte."),
      sp("He is said to be very generous.", "\"He is said to be\" = «se dice que es».",
        "\"Said to\" sounds like \"sed-tuh\".", "Say it in English: Se dice que es muy generoso."),
      mt("Match each verb with its pattern.", [
        ["deny", "+ -ing: deny taking it"],
        ["refuse", "+ to: refuse to sign"],
        ["advise", "+ person + to: advise me to rest"],
        ["insist", "+ on + -ing: insist on paying"],
        ["suggest", "+ -ing or that: suggest leaving"],
      ], "The three main patterns: -ing (deny, suggest; or a preposition + -ing), \"to\" (refuse) and person + \"to\" (advise)."),
      tr("Me cortaron el pelo demasiado corto.", ["I {had|got} my hair cut too short.", "They cut my hair too short.", "My hair was cut too short."],
        "«Me cortaron el pelo» at the hairdresser's is a causative: \"I had my hair cut\". The object goes before the participle."),
    ],
  ),
  // ---------------------------------------------------------------------
  // Drill 2. Passives in every tense, news, office life, inventions + whole unit
  // ---------------------------------------------------------------------
  lesson(
    2,
    "It's Being Built, He's Said to Be",
    "You will be able to use passives in any tense, report news with impersonal passives and precise reporting verbs, get things done at work, and move between active, passive, reported and relative structures.",
    "Recap: the structures in one place",
    [
      "Passive = \"be\" in any tense + past participle: \"is being built\" (right now), \"has been sold\", \"will be delivered\", \"can be recycled\". «Se usa desde hace...» needs the present perfect: \"has been used for...\".",
      "At work: \"have\" + person + base form (\"I'll have Tom call you\") or \"get\" + person + to (\"I'll get Tom to call you\"); \"have/get\" + thing + participle (\"get the brochures printed\"). News: \"are believed to be trapped\", \"is thought to have started\", \"refused to comment\", \"many of whom...\".",
      "Keep switching: active ↔ passive, direct ↔ reported (\"She offered to help\", \"He asked me where I worked\"), two sentences ↔ one relative clause (\"a guy whose brother...\").",
    ],
    [
      ["The road is being repaired this week.", "Están arreglando la carretera esta semana."],
      ["Three hikers are believed to be lost.", "Se cree que hay tres excursionistas perdidos."],
      ["I'll get someone to fix the printer.", "Le pediré a alguien que arregle la impresora."],
      ["This bridge has been used for two centuries.", "Este puente se usa desde hace dos siglos."],
    ],
    [
      fb("A new hospital is ___ built near the river.", "being", "[Se está] construyendo un nuevo hospital cerca del río.",
        "Present continuous passive: \"is being\" + participle. Without \"being\", \"is built\" would describe something regular, not now."),
      fb("All the tickets have already ___ sold.", "been", "Ya [se han vendido] todas las entradas.",
        "Present perfect passive: \"have been\" + participle."),
      tr("Los formularios se tienen que entregar antes del lunes.", "The forms {must|have to} be {handed in|submitted|turned in} {by|before} Monday.",
        "Modal passive: \"must/have to\" + \"be\" + participle. «Se» + verb is usually a passive in English."),
      mc("How do you say «Se están probando carros eléctricos en la ciudad»?", [
        "Electric cars are being tested in the city.",
        "Electric cars are tested in the city.",
        "Electric cars are testing in the city.",
        "Are being tested electric cars in the city.",
      ], "«Se están probando» = \"are being tested\". \"Are tested\" is a regular action; \"are testing\" means the cars do the testing."),
      tr("La televisión se usa desde hace casi cien años.", "{Television|TV} has been used for {almost|nearly} {a hundred|one hundred|100} years.",
        "«Se usa desde hace» needs the present perfect passive + \"for\": never *is used since."),
      tr("La bombilla la inventó Edison.", "The light bulb was invented by Edison.",
        "Spanish fronts the object and repeats it («la bombilla la inventó»). English makes it the subject of a passive."),
      wo("Old batteries can be recycled at the supermarket.", "Las pilas viejas se pueden reciclar en el supermercado.",
        "Modal + \"be\" + participle: \"can be recycled\"."),
      fb("It's a small device ___ a smartwatch.", "called", "Es un aparato pequeño [llamado] reloj inteligente.",
        "\"Called\" is a past participle used like a reduced relative: \"a device (which is) called...\"."),
      fb("Two people are believed ___ trapped in the building.", "to be", "[Se cree que hay] dos personas atrapadas en el edificio.",
        "Impersonal passive for the present: \"are believed to be\"."),
      tr("Se cree que el incendio empezó en la cocina.", ["The fire is {believed|thought} to have started in the kitchen.", "It is {believed|thought} that the fire started in the kitchen."],
        "An earlier action takes the perfect infinitive: \"is believed to have started\"."),
      mc("How do you say «Se cree que hay más de cien personas dentro»?", [
        "There are thought to be more than 100 people inside.",
        "It is thought to be more than 100 people inside.",
        "Are thought to be more than 100 people inside.",
        "There is thought that there are more than 100 people inside.",
      ], "With «hay», \"there\" becomes the subject: \"There are thought to be...\". Or: \"It is thought that there are...\"."),
      dc("The passengers, many of whom were children, were taken to a hotel.",
        "\"Many of whom\" for people, between commas, is very common in the news."),
      tr("Un portavoz confirmó que se había evacuado a todos los vecinos.", "A spokesperson confirmed {that |}all the residents had been evacuated.",
        "After a past reporting verb, the past perfect passive: \"had been evacuated\"."),
      lc("The company denied breaking any rules.", [
        "La empresa negó haber incumplido ninguna norma.",
        "La empresa se negó a cumplir las normas.",
        "La empresa admitió haber roto las normas.",
        "La empresa rompió las normas sin querer.",
      ], "\"Deny\" + -ing = say you didn't do it. «Se negó a» would be \"refused to\"."),
      fb("I'll have my assistant ___ you the invoice.", "send", "Le diré a mi asistente que te [envíe] la factura.",
        "\"Have\" + person + base form, with no \"to\"."),
      fb("I'll get someone from IT ___ at your laptop.", "to look", "Le pediré a alguien de informática que [revise] tu laptop.",
        "\"Get\" + person + \"to\" + base form. Note the \"to\" with \"get\" but not with \"have\"."),
      mc("Which sentence is correct?", [
        "I'll get Tom to call you back.",
        "I'll get Tom call you back.",
        "I'll have Tom to call you back.",
        "I'll make Tom to call you back.",
      ], "\"Get\" + person + to, but \"have\" + person + base form (\"I'll have Tom call you\"). \"Make\" never takes \"to\" in the active."),
      tr("Tenemos que mandar a imprimir los folletos.", "We {need to|have to|must} {have|get} the {brochures|leaflets|flyers} printed.",
        "«Mandar a» + infinitive is a causative: \"have/get\" + thing + participle."),
      tr("Nos recordó que entregáramos los informes el viernes.", "{She|He} reminded us to {hand in|submit|turn in} the reports {on|by} Friday.",
        "\"Remind\" + person + \"to\" + base form."),
      tr("El cliente insistió en hablar con el gerente.", "The client insisted on {talking|speaking} {to|with} the manager.",
        "\"Insist on\" + -ing. Never *insisted to talk."),
      tr("¿Sabe si el cliente ha firmado el contrato?", "Do you know {if|whether} the client has signed the contract?",
        "Polite indirect question: \"if\" + subject + \"has signed\", with statement order."),
      fb("The colleague with ___ I share an office is on vacation.", "whom", "La compañera con [la que] comparto oficina está de vacaciones.",
        "After a preposition, \"whom\" for people. Never *with who or *with that."),
      mc("Rewrite: \"People say she is a brilliant chef.\"", [
        "She is said to be a brilliant chef.",
        "She is said that she is a brilliant chef.",
        "It is said her to be a brilliant chef.",
        "She says to be a brilliant chef.",
      ], "Two options: \"She is said to be...\" or \"It is said that she is...\". Don't mix them."),
      tr("Me hackearon la cuenta.", ["My account {has been|was} hacked.", "{I had|I've had} my account hacked."],
        "«Me hackearon» with no subject is a passive in English (or a causative-style \"I had my account hacked\")."),
      tr("Se ofreció a llevarme al aeropuerto.", "{She|He} offered to {take|drive} me to the airport.",
        "A reporting verb that summarizes «te llevo»: \"offer to\" + base form."),
      tr("Me preguntó dónde trabajaba.", "{She|He} asked me where I worked.",
        "Reported question: statement order (\"where I worked\"), no \"did\", no question mark."),
      wo("I know a guy whose brother plays for the national team.", "Conozco a un chico cuyo hermano juega en la selección.",
        "«Cuyo hermano» = \"whose brother\". It replaces \"his brother\" from the second sentence."),
      sp("The bridge is being repaired, so we have to take another route.", "«Están reparando» with no subject = present continuous passive: \"is being repaired\".",
        "\"Being\" has two syllables: \"bee-ing\".", "Say it in English: Están reparando el puente, así que tenemos que tomar otro camino."),
      sp("Could you tell me when the package will be delivered?", "Indirect question + future passive: subject first, then \"will be delivered\".",
        "Let your voice rise at the end.", "Say it in English: ¿Me podría decir cuándo van a entregar el paquete?"),
      dc("Thousands of trees will be planted along the new highway.",
        "Future passive: \"will be\" + participle."),
      dc("I'll have the technician check the heating tomorrow.",
        "\"Have\" + person + base form: \"have the technician check\"."),
      mt("Match each Spanish sentence with its English translation.", [
        ["Me arreglaron el carro.", "I had my car fixed."],
        ["Se cree que está enfermo.", "He is thought to be sick."],
        ["Me dijo que no fuera.", "She told me not to go."],
        ["Lo están construyendo.", "It's being built."],
        ["Ya se ha vendido.", "It has already been sold."],
      ], "Causative, impersonal passive, reported order, continuous passive and perfect passive: the five structures of the unit."),
      tr("Me arreglaron el celular en una hora.", ["I {had|got} my phone {fixed|repaired} in an hour.", "My phone was {fixed|repaired} in an hour."],
        "Causative or passive, but never *They fixed me the phone: English has no «me» pronoun here."),
      mc("Which sentence is correct?", [
        "She suggested taking a taxi.",
        "She suggested us to take a taxi.",
        "She suggested to take a taxi.",
        "She suggested that we taking a taxi.",
      ], "\"Suggest\" + -ing, or + that + subject + verb (\"that we take\"). Never a person + to."),
    ],
  ),
];
