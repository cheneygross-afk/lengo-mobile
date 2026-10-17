// Synced from cheneygross-afk/lengo:src/lib/lessons/en-b1-u12-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise, Lesson } from "./types";

// Required drill lessons for EN-B1 unit u12 (ability, possibility and deduction; appearance): a short recap, then graded practice.

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
  slug: `en-b1-ability-deduction-unit-drill-${n}`,
  level: "EN-B1",
  number: n,
  title: `Drill: ${title}`,
  summary,
  duration: `${Math.round((exercises.reduce((s, e) => s + SECONDS[e.type], 0) + 40) / 60)} min`,
  sections: [{ heading, body, examples: examples.map(([es, en]) => ({ es, en })) }],
  exercises,
});


export const EN_B1_U12_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. Ability (could, was able to, managed to, be able to in every
  // tense), possibility (might, may, could) and deduction now and past
  // ---------------------------------------------------------------------
  lesson(
    1,
    "Could, Be Able To, Might & Must",
    "You will be able to talk about ability in any tense, say what is possible with might, may and could, and make deductions about the present and the past with must, might and can't.",
    "Recap: can, could, be able to, might and must",
    [
      "\"Could\" is general ability in the past; for one specific success, use \"was able to\" or \"managed to\" (\"couldn't\" is fine in the negative). \"Can\" has no other forms, so use \"be able to\": \"will be able to\", \"have been able to\", \"to be able to\", \"being able to\".",
      "For possibility, use \"might\", \"may\" or \"could\" + base verb; \"can\" is only for things that are sometimes true. For deductions, \"must\" means you're sure, \"can't\" means it's impossible (never *mustn't), and for the past add \"have\" + participle: \"She must have left\".",
    ],
    [
      ["After two hours, we managed to find a parking space.", "Después de dos horas, logramos encontrar estacionamiento."],
      ["I haven't been able to reply to your email.", "No he podido contestar tu correo."],
      ["Take a sweater. It might get cold later.", "Llévate un suéter. Puede que haga frío más tarde."],
      ["The lights are on. They must be home.", "Las luces están encendidas. Deben de estar en casa."],
    ],
    [
      fb("When I was ten, I ___ swim across the lake.", ["could", "was able to"], "A los diez años, [podía] cruzar el lago a nado.",
        "A general ability over a period in the past: \"could\" + base verb, no \"to\". «Podía» or «sabía» = \"could\"."),
      mc("\"The exam was very hard, but in the end I ___ pass it.\" Choose the best option.", ["managed to", "could", "can", "must"],
        "One specific success, with effort, is \"managed to\" (or \"was able to\"). Affirmative \"could\" is for general ability, so *in the end I could pass it sounds wrong."),
      tr("Después de varios intentos, conseguí abrir la ventana.", "After several {tries|attempts}, I {managed to|was able to} open the window.",
        "«Conseguí» for one moment = \"managed to\" or \"was able to\". *I could open the window is the classic Spanish-speaker slip."),
      tr("Lo intenté, pero no pude encontrar mis llaves.", "I tried, but I {couldn't|wasn't able to|didn't manage to} find my keys.",
        "In the negative, \"couldn't\" is perfectly natural for one specific situation, as are \"wasn't able to\" and \"didn't manage to\"."),
      fb("From our hotel room we ___ the mountains.", "could see", "Desde la habitación del hotel [se veían] las montañas.",
        "With verbs of the senses (\"see\", \"hear\", \"smell\"), \"could\" is normal even for one moment. Spanish often says «se veían» without «poder»; English likes \"could see\"."),
      tr("El próximo mes podré manejar sola al trabajo.", ["Next month I'll be able to drive to work {by myself|alone|on my own}.", "I'll be able to drive to work {by myself|alone|on my own} next month."],
        "«Podré» = \"will be able to\". *I will can does not exist, because \"can\" has no future form."),
      mc("Which sentence is correct?", [
        "I haven't been able to sleep well lately.",
        "I haven't could sleep well lately.",
        "I haven't can sleep well lately.",
        "I haven't been able sleep well lately.",
      ], "«No he podido» = \"haven't been able to\" + base verb. \"Can\" has no participle, and the \"to\" is needed."),
      tr("Me gustaría poder hablar japonés.", ["I{'d like| would like|'d love| would love} to be able to speak Japanese.", "I wish I could speak Japanese."],
        "After \"would like\", use \"to be able to\": *I'd like to can is impossible because \"can\" has no infinitive."),
      fb("My uncle is worried about not ___ his rent.", "being able to pay", "A mi tío le preocupa no [poder pagar] el alquiler.",
        "After a preposition (\"about\") English needs -ing: \"being able to\". Spanish keeps the infinitive «poder», English doesn't."),
      wo("Being able to cook is a useful skill.", "Saber cocinar es una habilidad útil.",
        "As the subject of a sentence, use the -ing form: \"Being able to\". You could also say \"It's useful to be able to cook\"."),
      tr("Puede que llegue un poco tarde a la reunión.", "I {might|may|could} be {a little|a bit} late {for|to} the meeting.",
        "«Puede que» + subjunctive = \"might\", \"may\" or \"could\" + base verb. *I can be late is wrong for one specific situation."),
      mc("«Mañana puede llover.» Which is the best translation?", [
        "It might rain tomorrow.",
        "It can rain tomorrow.",
        "It mights rain tomorrow.",
        "It might to rain tomorrow.",
      ], "One specific future situation: \"might\" + base verb. \"Can\" is only for general possibility (\"It can rain a lot here in April\")."),
      fb("___ she's still at the office. Call her there.", ["Maybe", "Perhaps"], "[Quizás] todavía esté en la oficina. Llámala allí.",
        "\"Maybe\" (one word) is an adverb, like «quizás», and the sentence keeps its verb \"she's\". \"May be\" (two words) would need a different structure: \"She may be at the office\"."),
      lc("It can get really windy here in March.", [
        "Aquí a veces hace mucho viento en marzo.",
        "Puede que mañana haga viento.",
        "Hace viento todos los días de marzo.",
        "Aquí nunca hace viento en marzo.",
      ], "\"Can\" here is general possibility: something that is sometimes true («a veces»). For one specific day, English would say \"It might be windy tomorrow\"."),
      mt("Match each sentence with its meaning.", [
        ["She must be at work.", "Seguro que está en el trabajo."],
        ["She might be at work.", "A lo mejor está en el trabajo."],
        ["She can't be at work.", "Es imposible que esté en el trabajo."],
        ["She might not be at work.", "Puede que no esté en el trabajo."],
        ["She must have gone to work.", "Seguro que se fue al trabajo."],
      ], "The deduction scale: \"must\" (sure it's true), \"might\" (maybe), \"might not\" (maybe not), \"can't\" (sure it's false). Add \"have\" + participle for the past."),
      tr("Llevas todo el día caminando. Debes de estar agotado.", "You've been walking all day. You must be {exhausted|very tired|really tired}.",
        "«Debes de» = deduction \"must\" + base verb \"be\". «Llevas... caminando» is the present perfect continuous: \"You've been walking\"."),
      mc("Your friend's car isn't outside and the house is dark. Which deduction is correct?", [
        "He can't be at home.",
        "He mustn't be at home.",
        "He doesn't must be at home.",
        "He can't to be at home.",
      ], "The negative of deduction \"must\" is \"can't\". \"Mustn't\" is only for prohibition, so *He mustn't be at home sounds like a strange rule."),
      tr("¿Quién será a esta hora?", ["Who could that be at this {hour|time}?", "Who can that be at this {hour|time}?"],
        "Spanish uses the future to guess («¿quién será?»), but English uses a modal: \"Who could that be?\". *Who will it be? is not used for guesses."),
      fb("Their phone is busy. They ___ to someone.", "must be talking", "Su teléfono está ocupado. [Deben de estar hablando] con alguien.",
        "A guess about what is happening right now: modal + \"be\" + -ing. \"Must be talking\" = «deben de estar hablando»."),
      dc("He can't be working today. The office is closed.",
        "\"Can't be\" + -ing: you're sure it isn't happening. \"Can't\" has a strong vowel, which tells you it's negative."),
      tr("Pareces preocupado. ¿Estás bien?", "You look worried. Are you {OK|okay|all right|alright}?",
        "\"Look\" + adjective, with no \"like\": *You look like worried is a very common mistake. \"Like\" only goes before a noun or a sentence."),
      mc("Which sentence is correct?", [
        "That sounds like a great plan.",
        "That sounds like great.",
        "That sound like a great plan.",
        "That is sounding like great plan.",
      ], "\"Sound like\" + noun phrase (\"a great plan\"); \"sound\" + adjective (\"That sounds great\"). \"That\" is singular, so \"sounds\"."),
      tr("Parece que va a nevar.", "It looks {like|as if|as though} it's going to snow.",
        "Before a whole sentence, use \"It looks like\" or \"It looks as if\". Spanish «parece que» has no subject; English needs \"it\"."),
      wo("Your sister looks like your mom.", "Tu hermana se parece a tu mamá.",
        "\"Look like\" + noun = «parecerse a» (physical similarity). Don't drop \"like\" here."),
      sp("They're not answering. They must be sleeping.", "Deduction about now: \"must be\" + -ing.",
        "Stress \"MUST\" lightly and \"SLEEPing\"; \"must be\" often sounds like \"muss-be\".", "Say it in English: No contestan. Deben de estar durmiendo."),
      fb("The street is wet. It ___ during the night.", "must have rained", "La calle está mojada. [Debe de haber llovido] durante la noche.",
        "Deduction about the past: \"must have\" + past participle. \"Have\" never changes after a modal."),
      tr("No puede haber perdido el tren; salió hace dos horas.", ["He {can't|couldn't} have missed the train; he left two hours ago.", "She {can't|couldn't} have missed the train; she left two hours ago."],
        "Impossible in the past: \"can't have\" or \"couldn't have\" + participle. Not *mustn't have. A train is \"missed\", not \"lost\"."),
      dc("I might've left my umbrella on the bus.",
        "\"Might've\" = \"might have\", pronounced \"MIGHT-uv\". Never write *might of."),
      lc("She must've forgotten about our meeting.", [
        "Seguro que se le olvidó nuestra reunión.",
        "Tiene que acordarse de nuestra reunión.",
        "Puede que se acuerde de la reunión.",
        "No puede haber olvidado la reunión.",
      ], "\"Must've\" + participle = a confident deduction about the past. Listen for the weak \"uv\" after \"must\"."),
      wo("They might have taken the wrong exit.", "Puede que hayan tomado la salida equivocada.",
        "Modal + \"have\" + participle for a possibility in the past. Spanish uses the perfect subjunctive («hayan tomado»); English always uses this structure."),
      tr("Puede que me haya dejado el celular en el taxi.", "I {might|may|could} have left my {phone|cell phone|cellphone} in the taxi.",
        "«Puede que haya dejado» = \"might have left\". The subjunctive disappears: modal + \"have\" + participle."),
      mc("Which sentence is correct?", [
        "She must have gone home early.",
        "She must has gone home early.",
        "She must had gone home early.",
        "She must have went home early.",
      ], "After a modal, the base form \"have\", then the past participle \"gone\" (not the past simple \"went\")."),
      tr("No he podido terminar el libro todavía; quizás pueda la semana que viene.", "I haven't been able to finish the book yet; {maybe I'll be able to|I might be able to|maybe I can} next week.",
        "«He podido» = \"have been able to\". For «quizás pueda», combine \"might\" with \"be able to\": *might can is impossible because two modals can't go together."),
      sp("It must have been a long trip.", "Deduction about the past: «debe de haber sido» = \"must have been\".",
        "Say \"must have\" as \"MUST-uv\": \"It must've been a long trip\".", "Say it in English: Debe de haber sido un viaje largo."),
      dc("We weren't able to get tickets, so we watched it at home.",
        "\"Weren't able to\" for one specific failure, like \"couldn't\". \"We\" takes \"were\"."),
      fb("Two years ago I ___ run five kilometers without stopping, but now I can.", ["couldn't", "wasn't able to"], "Hace dos años [no podía] correr cinco kilómetros sin parar, pero ahora sí.",
        "General ability in the past, in the negative: \"couldn't\" (or \"wasn't able to\"). American spelling: \"kilometers\"."),
    ],
  ),

  // ---------------------------------------------------------------------
  // Drill 2. Must for rules vs must for deduction, error hunt, detective
  // deductions, describing appearance, and the whole unit mixed
  // ---------------------------------------------------------------------
  lesson(
    2,
    "Two Musts, Deductions & Descriptions",
    "You will be able to tell rule must from deduction must, use the right negative and past for each, make deductions from evidence, and describe what people look like.",
    "Recap: two musts, deductions and descriptions",
    [
      "\"Must\" can be a rule (\"You must wear a helmet\") or a conclusion (\"You must be cold\"). Their negatives and pasts are different: for rules, \"mustn't\" or \"don't have to\" and \"had to\"; for conclusions, \"can't\" and \"must have\" + participle.",
      "To describe people, use \"be\" for age (\"She's in her forties\"), \"short\" (never *low) for height, and \"have\" + adjective + noun for features (\"He has short gray hair\"). \"Look\" takes an adjective and \"look like\" a noun: \"She looks tired\", \"She looks like her dad\".",
    ],
    [
      ["You must be freezing. Do you want my jacket?", "Debes de estar congelado. ¿Quieres mi chaqueta?"],
      ["She had to work on Sunday. She must have been annoyed.", "Tuvo que trabajar el domingo. Debió de estar molesta."],
      ["He's in his early fifties and has a short beard.", "Tiene poco más de cincuenta años y barba corta."],
      ["What's your new neighbor like?", "¿Cómo es tu nuevo vecino?"],
    ],
    [
      mc("\"You must be hungry after that long walk.\" What does \"must\" mean here?", [
        "I'm sure you're hungry.",
        "You are obliged to be hungry.",
        "It's prohibited to be hungry.",
        "You don't have to be hungry.",
      ], "With \"be\" and evidence (a long walk), \"must\" is a deduction: you can rephrase it as \"I'm sure that...\". Nobody is obliged to be hungry."),
      mc("Which sentence expresses a rule?", [
        "Visitors must leave their bags at the entrance.",
        "She must be on vacation.",
        "They must know each other.",
        "It must be very late.",
      ], "Obligation \"must\" usually goes with actions (\"leave\", \"pay\", \"wear\"). The other three are conclusions with \"be\" or state verbs (\"know\")."),
      tr("En este restaurante hay que reservar.", "You {have to|must} {book|make a reservation|reserve a table} {at|in} this restaurant.",
        "«Hay que» is an obligation: \"have to\" (or \"must\"). Impersonal Spanish becomes \"you\" in English."),
      fb("He drives a twenty-year-old car. He ___ rich.", ["can't be", "couldn't be"], "Maneja un carro de hace veinte años. [No puede ser] rico.",
        "The negative of deduction \"must\" is \"can't\": \"He can't be rich\". *He mustn't be rich would sound like a rule against being rich."),
      tr("Tuve que esperar una hora en el banco.", "I had to wait {for |}an hour at the bank.",
        "A past obligation: \"had to\" + base verb. Obligation \"must\" has no past, so *I must waited and *I musted are impossible."),
      tr("Tuvo que ser una fiesta increíble.", "It must have been an {amazing|incredible} party.",
        "Here «tuvo que ser» is a deduction, not an obligation: \"must have been\". \"Had to be\" would mean somebody forced it. Translate the meaning, not the words."),
      fb("You ___ bring anything to the party; we have lots of food.", ["don't have to", "don't need to", "needn't"], "[No tienes que] traer nada a la fiesta; tenemos mucha comida.",
        "It isn't necessary, so \"don't have to\". \"Mustn't\" would forbid it, and \"can't\" would be either a prohibition or a deduction."),
      lc("That can't be right. Let me check the bill again.", [
        "Eso no puede estar bien. Déjame revisar la cuenta otra vez.",
        "No puedes pagar la cuenta aquí.",
        "No hace falta revisar la cuenta.",
        "Eso está bien, no hace falta revisarla.",
      ], "\"That can't be right\" is a deduction: you're sure there's a mistake. \"Can't\" is stressed, with a strong vowel."),
      mc("Which sentence is correct?", [
        "I finally managed to fix my bike.",
        "I could fix my bike finally.",
        "I finally could to fix my bike.",
        "I managed fix my bike finally.",
      ], "One specific success: \"managed to\" + verb. \"Finally\" goes before the main verb, not at the end, and \"managed\" needs its \"to\"."),
      tr("Puede que sea el cartero.", "It {might|may|could} be the {mail carrier|mailman|postman}.",
        "A possibility in one specific situation: \"might\", \"may\" or \"could\". *It can be the mail carrier is wrong, because \"can\" is only for general possibility."),
      tr("La semana que viene podré ayudarte con la mudanza.", ["Next week I'll be able to help you {with the move|move}.", "I'll be able to help you {with the move|move} next week."],
        "«Podré» = \"will be able to\". Two modals can't go together, so *I will can is impossible."),
      fb("You ___ tired. Did you sleep badly?", ["look", "seem"], "[Pareces] cansado. ¿Dormiste mal?",
        "\"Look\" + adjective. Before an adjective there's no \"like\": *You look like tired is one of the most common errors."),
      wo("Someone must have eaten the last piece of cake.", "Alguien debe de haberse comido el último trozo de pastel.",
        "Deduction about the past: \"must have\" + participle \"eaten\". \"A piece of cake\" = «un trozo de pastel»."),
      tr("Hay maletas junto a la puerta. Deben de irse de viaje.", "There are suitcases {by|next to} the door. They must be going {on a trip|away}.",
        "Deduction about a plan in progress: \"must be\" + -ing. Good deductions give the evidence first, then the conclusion."),
      fb("The kitchen smells of fresh bread. Someone ___ bread this morning.", ["must have baked", "must have made"], "La cocina huele a pan recién hecho. Alguien [debe de haber horneado] pan esta mañana.",
        "Evidence now (the smell), conclusion about the past: \"must have\" + participle."),
      mt("Match each description with its meaning.", [
        ["She's in her thirties.", "Tiene treinta y tantos años."],
        ["He's of medium height.", "Es de estatura media."],
        ["She has wavy hair.", "Tiene el pelo ondulado."],
        ["He's bald.", "Es calvo."],
        ["She has freckles.", "Tiene pecas."],
      ], "Age and height use \"be\"; features use \"have\" with the adjective before the noun and no \"the\": \"She has wavy hair\"."),
      tr("Mi abuelo tiene 80 años, pero aparenta menos.", ["My {grandfather|grandpa} is 80, but he looks younger.", "My {grandfather|grandpa} is 80 years old, but he looks younger."],
        "English uses \"be\" for age: \"He's 80\". *He has 80 years is the most common mistake. «Aparentar menos» = \"look younger\"."),
      tr("Tiene el pelo corto y los ojos verdes.", "{She|He} has short hair and green eyes.",
        "English puts the adjective first and drops the article: \"short hair\", \"green eyes\", not *the hair short. \"Hair\" is uncountable."),
      mc("A friend asks: \"What's your new boss like?\" What does she want to know?", [
        "What kind of person your boss is.",
        "What your boss looks like physically.",
        "How your boss is feeling today.",
        "What your boss likes doing.",
      ], "\"What's he like?\" asks about personality («¿cómo es?»). \"What does he look like?\" asks about appearance, and \"How is he?\" about health or mood."),
      fb("My brother is very tall, but my sister is quite ___.", "short", "Mi hermano es muy alto, pero mi hermana es bastante [baja].",
        "For people, «bajo» is \"short\". \"Low\" is for things like a wall or a price, never for a person's height."),
      dc("She's a slim woman in her forties with long straight hair.",
        "A full description: general to specific, with \"with\" for features. Hair order: length, then style (\"long straight hair\")."),
      tr("Ella se parece mucho a su padre.", "She looks {a lot|very much|just} like her {father|dad}.",
        "«Parecerse a» = \"look like\" + noun. Without \"like\", the sentence doesn't work: *She looks her father."),
      sp("He must be about forty.", "Spanish guesses with the future («tendrá»), but English uses \"must be\" for a confident guess, and \"be\" for age.",
        "Stress \"ABOUT\" and \"FORty\"; \"must be\" is quick.", "Say it in English: Tendrá unos cuarenta años. (él)"),
      lc("He can't have seen us. We were behind the tree.", [
        "Es imposible que nos haya visto. Estábamos detrás del árbol.",
        "No debe vernos. Estamos detrás del árbol.",
        "No nos vio porque no quería.",
        "Puede que nos haya visto detrás del árbol.",
      ], "\"Can't have\" + participle = it's impossible that it happened. The past evidence (\"we were behind the tree\") supports it."),
      wo("I might be able to come on Saturday.", "Puede que pueda ir el sábado.",
        "«Puede que pueda» = \"might be able to\". Two modals can't go together, so *might can is impossible."),
      tr("De niña sabía tocar el piano, pero ya no puedo.", "When I was a {girl|child|kid}, I could play the piano, but I can't {anymore|now}.",
        "General past ability: \"could\". «Ya no» at the end of a sentence is \"not... anymore\"."),
      mc("Which sentence is correct?", [
        "He can't be at work. It's a holiday.",
        "He mustn't be at work. It's a holiday.",
        "He doesn't must be at work. It's a holiday.",
        "He can't is at work. It's a holiday.",
      ], "A negative deduction: \"can't\" + base form \"be\". \"Mustn't\" is a prohibition, and \"must\" never takes \"do\"."),
      fb("I can't find my wallet. I ___ it at the gym.", ["might have left", "may have left", "could have left"], "No encuentro mi billetera. [Puede que la haya dejado] en el gimnasio.",
        "Not sure about the past: \"might have\" + participle. Spanish uses «puede que haya»; English needs no subjunctive."),
      dc("You must have been so nervous before the interview.",
        "\"Must have been\" sounds like \"must-uv-bin\". It's a deduction about how someone felt in the past."),
      tr("No hace falta que te preocupes; seguro que ya llegó a casa.", "You don't {have|need} to worry; {she|he} must have {gotten|got|arrived} home {already|by now}.",
        "Two musts in one sentence: no obligation (\"don't have to\") and a past deduction (\"must have gotten\"). «Seguro que» is often \"must\" in English."),
      dc("It might snow tonight, so we may not be able to drive.",
        "\"Might\" for a possibility, then \"may not be able to\": \"be able to\" lets you add a second modal idea."),
      tr("Desde que me rompí el brazo, no he podido manejar.", ["Since I broke my arm, I haven't been able to drive.", "I haven't been able to drive since I broke my arm."],
        "«No he podido» = \"haven't been able to\", with \"since\" + past simple. \"I broke my arm\": possessive, no reflexive pronoun."),
      sp("That can't be her car; hers is red.", "A negative deduction with evidence: \"can't be\". \"Hers\" = «el suyo» (of a woman).",
        "\"Can't\" is strong and long: \"CAN'T be\". Don't swallow the \"t\".", "Say it in English: Ese no puede ser su carro; el suyo es rojo. (de ella)"),
      wo("What does your cousin look like?", "¿Cómo es tu prima físicamente?",
        "Questions about appearance: \"What does\" + subject + \"look like?\". \"Like\" goes at the end."),
    ],
  ),
];
