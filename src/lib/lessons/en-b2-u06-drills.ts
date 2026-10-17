// Synced from cheneygross-afk/lengo:src/lib/lessons/en-b2-u06-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise, Lesson } from "./types";

// Required drill lessons for EN-B2 unit u06 (conditionals in practice: life choices, translating «si hubiera», advice, chains, dilemmas and turning points): a short recap, then graded practice.
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

export const EN_B2_U06_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. Life choices, translating «si hubiera», correcting common
  // mistakes, giving advice, and the 'd = had / would sounds
  // ---------------------------------------------------------------------
  lesson(
    1,
    "u06-life-choices-advice",
    "Life Choices and Advice",
    "Talk about the choices that shaped your life, translate «si hubiera», «de haber» and «yo que tú» correctly, and give advice with If I were you, You'd better and It might be worth.",
    "Recap: your past, your advice",
    [
      "For your own life, use the third conditional for past results (\"If I hadn't taken that job, I wouldn't have met my wife\") and the mixed one for present results (\"If I hadn't moved, I wouldn't speak English\"). Soften with \"probably\", \"might have\" or \"could have\".",
      "To give advice: \"If I were you, I'd...\" (never *will), \"You'd better\" + base form for a warning (no \"to\"), \"It might be worth\" + -ing, and \"Why don't you...?\". In speech, \"'d\" + participle is \"had\" and \"'d\" + base form or \"have\" is \"would\".",
    ],
    [
      ["If I hadn't joined that choir, I wouldn't have so many friends.", "Si no me hubiera unido a ese coro, no tendría tantos amigos."],
      ["If I were you, I'd ask for a second opinion.", "Yo que tú, pediría una segunda opinión."],
      ["You'd better back up your files before the update.", "Más vale que hagas una copia de tus archivos antes de la actualización."],
      ["It might be worth checking the reviews first.", "Quizás valga la pena revisar las opiniones primero."],
    ],
    [
      fb(
        "If I hadn't taken that job in sales, I ___ my best friend.",
        "wouldn't have met",
        "Si no hubiera aceptado ese trabajo en ventas, [no habría conocido] a mi mejor amiga.",
        "An imaginary past with a past result: \"wouldn't have met\". «Conocer a alguien» for the first time is \"meet\", not \"know\".",
      ),
      wo(
        "I wouldn't speak French if I hadn't moved to Canada",
        "No hablaría francés si no me hubiera mudado a Canadá.",
        "The move is past, the French is now: mixed conditional. Trust the Spanish: «hablaría» = \"would speak\", not \"would have spoken\".",
      ),
      tr(
        "Si no fuera tan desorganizado, habría terminado la tesis el año pasado.",
        "If I {weren't|wasn't} so disorganized, I would have finished {my|the} thesis last year.",
        "A present trait (I'm disorganized) explains a past result: if + past simple, would have + participle.",
      ),
      fb(
        "If I hadn't become a nurse, I'd ___ be working in my parents' store.",
        "probably",
        "Si no me hubiera hecho enfermera, [probablemente] estaría trabajando en la tienda de mis papás.",
        "\"Probably\" goes after \"would\" (\"I'd probably be\") but before a negative (\"I probably wouldn't\").",
      ),
      mc(
        "Where does \"probably\" go? «Probablemente no habría ido.»",
        [
          "I probably wouldn't have gone.",
          "I wouldn't probably have gone.",
          "I wouldn't have probably gone.",
          "Probably I wouldn't have went.",
        ],
        "With a negative, \"probably\" comes before \"wouldn't\": \"I probably wouldn't have gone\". The participle is \"gone\", never *went.",
      ),
      tr(
        "Quizás me habría quedado en Perú.",
        ["I might have stayed in Peru.", "I may have stayed in Peru.", "Maybe I would have stayed in Peru."],
        "«Quizás habría» = \"might have\" + participle: a softer imaginary past than \"would have\".",
      ),
      tr(
        "Si lo hubiera sabido, te lo hubiera dicho.",
        "If I had known, I would have told you.",
        "Spoken Spanish uses «hubiera» twice, but English splits the halves: \"had known\" after \"if\", \"would have told\" in the result. *If I would have known is wrong in careful English.",
      ),
      tr(
        "De haber ido, lo habríamos visto.",
        "If we had gone, we would have seen {it|him}.",
        "«De haber ido» has no subject, but English needs one: the rest of the sentence («habríamos») tells you it's \"we\".",
      ),
      fb(
        "___, I'd look for a cheaper apartment.",
        ["If I were you", "If I was you"],
        "[Yo que tú], buscaría un departamento más barato.",
        "«Yo que tú», «yo en tu lugar» and «si fuera tú» are all \"If I were you\". The result is \"I'd\" (would), never *I will.",
      ),
      mc(
        "«Si yo fuera ella, aceptaría la oferta.» Which is correct?",
        [
          "If I were her, I'd accept the offer.",
          "If I would be her, I'd accept the offer.",
          "If I were her, I'll accept the offer.",
          "If I am her, I'd accept the offer.",
        ],
        "\"If I were her\" (object pronoun after \"were\" in normal English) + \"I'd accept\". No \"would\" after \"if\", and no \"will\" in an imaginary result.",
      ),
      tr(
        "En caso de que llueva, la reunión será adentro.",
        "If it rains, the meeting will be {inside|indoors}.",
        "The meeting moves inside only when it rains, so «en caso de que» here means \"if\". \"In case\" would mean a precaution taken anyway.",
      ),
      tr(
        "Anota mi número por si lo necesitas.",
        "{Write down my number|Write my number down|Take down my number|Save my number} in case you need it.",
        "«Por si» = \"in case\": take the number now, as a precaution. After \"in case\" use the present: \"in case you need it\", not *in case you will need.",
      ),
      mc(
        "A forum post says: *If you will need help with your resume, send me a message. What's the correction?",
        [
          "If you need help with your resume, send me a message.",
          "If you would need help with your resume, send me a message.",
          "If you needed help with your resume, send me a message.",
          "In case you will need help with your resume, send me a message.",
        ],
        "With a future meaning, the if-clause takes the present simple: «si necesitas» = \"if you need\". Same after \"when\", \"unless\" and \"in case\".",
      ),
      fb(
        "You won't get the job unless you ___ for the interview.",
        "prepare",
        "No vas a conseguir el trabajo a menos que [te prepares] para la entrevista.",
        "\"Unless\" already means \"if not\". *Unless you don't prepare is a double negative that reverses the meaning.",
      ),
      fb(
        "If I had seen the ad earlier, I would have ___ to the fair.",
        "gone",
        "Si hubiera visto el anuncio antes, [habría ido] a la feria.",
        "After \"would have\", the past participle: \"gone\", not *went.",
      ),
      tr(
        "Más vale que salgas ahora o vas a perder el tren.",
        ["You'd better leave now or you'll miss the train.", "You'd better leave now, otherwise you'll miss the train.", "You had better leave now or you'll miss the train.", "You'd better go now or you'll miss the train."],
        "«Más vale que» = \"You'd better\" + base form, with no \"to\". The \"'d\" is \"had\", but the meaning is now or the future.",
      ),
      mc(
        "Which sentence is correct?",
        [
          "You'd better not be late tomorrow.",
          "You'd better to not be late tomorrow.",
          "You'd not better be late tomorrow.",
          "You'd better don't be late tomorrow.",
        ],
        "The negative is \"had better not\" + base form: \"You'd better not be late\". No \"to\" and no \"don't\".",
      ),
      fb(
        "It might be worth ___ the hotel before you go.",
        "calling",
        "Quizás valga la pena [llamar] al hotel antes de ir.",
        "\"Worth\" is followed by -ing: \"worth calling\". Spanish «vale la pena + infinitivo» pushes learners to *worth to call.",
      ),
      tr(
        "Ese museo vale mucho la pena.",
        ["That museum is well worth it.", "That museum is well worth a visit.", "That museum is well worth visiting.", "That museum is really worth it.", "That museum is really worth visiting."],
        "\"It's (well) worth it\" with no verb, or \"worth\" + -ing / a noun. Never *worth to visit.",
      ),
      wo(
        "Why don't you take a few days off",
        "¿Por qué no te tomas unos días libres?",
        "\"Why don't you\" + base form is a friendly suggestion, not a real question about reasons.",
      ),
      mc(
        "Which suggestion is correct?",
        [
          "I recommend booking early.",
          "I recommend you to book early.",
          "I recommend to book early.",
          "I recommend you booking early.",
        ],
        "\"Recommend\" takes -ing (\"I recommend booking\") or \"that\" + clause (\"I recommend that you book\"). *I recommend you to is a direct translation of «te recomiendo que».",
      ),
      wo(
        "Have you thought about asking your manager for help",
        "¿Has pensado en pedirle ayuda a tu jefe?",
        "\"Have you thought about\" + -ing is a very polite suggestion. After a preposition, English uses -ing.",
      ),
      lc(
        "I'd gone home by then.",
        [
          "I had gone home by then.",
          "I would go home by then.",
          "I would have gone home by then.",
          "I go home by then.",
        ],
        "\"'d\" + past participle (\"gone\") is \"had\": the past perfect.",
      ),
      lc(
        "I'd have called her.",
        [
          "I would have called her.",
          "I had called her.",
          "I would call her.",
          "I have called her.",
        ],
        "\"'d\" + \"have\" is always \"would\": \"I would have called\" = «la habría llamado».",
      ),
      fb(
        "If I'd ___ more time, I'd have visited the museum.",
        "had",
        "Si hubiera [tenido] más tiempo, habría visitado el museo.",
        "«Hubiera tenido» = \"had had\", contracted to \"I'd had\". Yes, \"had had\" is correct: the auxiliary \"had\" + the participle of \"have\".",
      ),
      mt(
        "Match each contraction with its full form.",
        [
          ["She'd left", "She had left"],
          ["She'd leave", "She would leave"],
          ["She'd have left", "She would have left"],
          ["She'd had enough", "She had had enough"],
          ["She'd better leave", "She had better leave"],
        ],
        "Look at what follows \"'d\": a participle means \"had\", a base form or \"have\" means \"would\". \"'d better\" is the exception: always \"had better\".",
      ),
      dc(
        "If I'd had the money, I'd have bought it.",
        "Both contractions in one sentence: \"I'd had\" = \"I had had\" (if-clause), \"I'd have bought\" = \"I would have bought\" (result).",
      ),
      mc(
        "Which is correct in writing?",
        [
          "You should've told me.",
          "You should of told me.",
          "You should have tell me.",
          "You should had told me.",
        ],
        "The weak /əv/ is \"have\" (\"should've\"), never *should of. After it, the participle \"told\".",
      ),
      dc(
        "We could've taken the earlier bus.",
        "\"Could've\" = \"could have\", pronounced \"COOD-uv\": a past possibility that didn't happen.",
      ),
      sp(
        "If I were you, I wouldn't worry about it.",
        "Advice with \"If I were you\" + \"wouldn't\": «yo que tú, no me preocuparía».",
        "Stress \"you\" and \"worry\": \"If I were YOU, I wouldn't WORry about it.\"",
        "Say in English: «Yo que tú, no me preocuparía por eso.»",
      ),
      tr(
        "Si no hubiera conocido a Lucía, ahora no estaría viviendo en Bogotá.",
        "If I hadn't met Lucia, I wouldn't be living in Bogota {now|}.",
        "Mixed conditional with a continuous present result. «Conocer» (for the first time) = \"meet\": *If I hadn't known Lucia changes the meaning.",
      ),
      tr(
        "Yo en tu lugar, no firmaría nada hasta que lo lea un abogado.",
        ["If I were you, I wouldn't sign anything until a lawyer reads it.", "If I were you, I wouldn't sign anything until a lawyer has read it.", "If I was you, I wouldn't sign anything until a lawyer reads it."],
        "\"If I were you\" + \"wouldn't\". In the time clause, English uses the present for the future: \"until a lawyer reads it\", not *will read (Spanish uses the subjunctive «lea»).",
      ),
      sp(
        "You'd better charge your phone before we leave.",
        "\"You'd better\" + base form, no \"to\": advice with a hidden warning.",
        "\"You'd better\" sounds like \"you-BET-er\"; the d is very light.",
        "Say in English: «Más vale que cargues tu celular antes de que salgamos.»",
      ),
      tr(
        "Si me hubieras avisado, te habría guardado un lugar.",
        "If you had {told me|warned me|let me know}, I would have saved you a {seat|place|spot}.",
        "\"Had told\" / \"had let me know\" + \"would have saved\". «Avisar» is \"tell\", \"let know\" or \"warn\", depending on context.",
      ),
      dc(
        "It might be worth asking for a refund.",
        "\"It might be worth\" + -ing: a gentle suggestion. «Quizás valga la pena pedir un reembolso.»",
      ),
    ],
  ),
  // ---------------------------------------------------------------------
  // Drill 2. Chain conditionals, quick-fire linkers, dilemmas, turning
  // points, if vs when, and the whole unit mixed
  // ---------------------------------------------------------------------
  lesson(
    2,
    "u06-conditional-chains-dilemmas",
    "Chains, Dilemmas and Turning Points",
    "Build chains of conditionals, discuss dilemmas and history with second, third and passive conditionals, and know when if takes the present and when it can take will.",
    "Recap: chains, dilemmas and if vs when",
    [
      "In a chain, each result becomes the next condition, with positive and negative flipped: \"If I hadn't overslept, I wouldn't have missed the bus. If I hadn't missed the bus...\". Dilemmas use the second conditional (\"What would you do if you found...?\") and real past cases the third (\"What would you have done?\").",
      "\"If\" and \"when\" both take the present for the future (\"when I get home\", \"if I get the job\"), but \"when\" means you expect it. \"Will\" can follow \"if\" only when \"if\" means \"whether\" (\"I don't know if he'll come\") or in polite requests (\"If you'll wait here...\").",
    ],
    [
      ["If I hadn't lost my keys, I wouldn't have been late, and my boss wouldn't have been upset.", "Si no hubiera perdido las llaves, no habría llegado tarde y mi jefe no se habría enojado."],
      ["What would you do if a colleague took credit for your work?", "¿Qué harías si un colega se llevara el mérito de tu trabajo?"],
      ["If the telephone hadn't been invented, we wouldn't have smartphones today.", "Si no se hubiera inventado el teléfono, hoy no tendríamos teléfonos inteligentes."],
      ["I'm not sure if she'll accept the offer.", "No estoy seguro de si ella aceptará la oferta."],
    ],
    [
      fb(
        "Fact: I forgot my lunch, so I bought a sandwich. Chain: If I ___ my lunch, I wouldn't have bought a sandwich.",
        "hadn't forgotten",
        "Si no [hubiera olvidado] el almuerzo, no habría comprado un sándwich.",
        "Flip the positive fact into a negative condition: \"hadn't forgotten\". The participle of \"forget\" is \"forgotten\", not *forgot.",
      ),
      fb(
        "If I hadn't bought a sandwich, I ___ so much money this week.",
        "wouldn't have spent",
        "Si no hubiera comprado un sándwich, [no habría gastado] tanto dinero esta semana.",
        "The result of the last link becomes the new condition, and the new result is \"wouldn't have spent\" (spend, spent, spent).",
      ),
      tr(
        "Si no hubiera tomado tanto café, no me habría desvelado.",
        ["If I hadn't drunk so much coffee, I wouldn't have stayed up {late|all night}.", "If I hadn't drunk so much coffee, I would have slept {well|better}.", "If I hadn't had so much coffee, I wouldn't have stayed up {late|all night}."],
        "Drink, drank, drunk: \"hadn't drunk\". In the imaginary version, \"too much\" becomes \"so much\".",
      ),
      wo(
        "If I had gotten the job I would be living in Boston now",
        "Si hubiera conseguido el trabajo, ahora estaría viviendo en Boston.",
        "A chain often ends in the present: past perfect in the if-clause, \"would be\" + -ing for now.",
        ["If I had gotten the job I would now be living in Boston"],
      ),
      mc(
        "Real chain: \"I didn't set an alarm, so I slept late.\" Which conditional is correct?",
        [
          "If I had set an alarm, I wouldn't have slept late.",
          "If I hadn't set an alarm, I wouldn't have slept late.",
          "If I set an alarm, I wouldn't have slept late.",
          "If I had set an alarm, I wouldn't sleep late.",
        ],
        "Flip both halves: \"didn't set\" becomes \"had set\", \"slept late\" becomes \"wouldn't have slept late\". \"Set\" has the same form in all three columns.",
      ),
      tr(
        "Si ganara la lotería, dejaría mi trabajo, y si dejara mi trabajo, viajaría por el mundo.",
        "If I won the lottery, I would {quit|leave} my job, and if I {quit|left} my job, I would travel {around|} the world.",
        "A future chain uses the second conditional throughout: past simple + would. \"Quit\" is the same in the past.",
      ),
      mt(
        "Match each sentence to its conditional type.",
        [
          ["If you press this button, the machine stops.", "Zero: always true"],
          ["If the bus is late, I'll take a taxi.", "First: real future"],
          ["If I lived near the sea, I'd swim every day.", "Second: imaginary now"],
          ["If you'd asked, I'd have helped.", "Third: imaginary past"],
          ["If I'd learned to drive, I'd have more freedom now.", "Mixed: past cause, present result"],
        ],
        "The tense after \"if\" and the verb in the result tell you the type. In all five, there is no \"will\" or \"would\" after \"if\".",
      ),
      fb(
        "I'll come to the party ___ I have to leave early.",
        "even if",
        "Voy a ir a la fiesta [aunque] tenga que irme temprano.",
        "«Aunque» for a possible or imaginary situation is \"even if\". Like \"if\", it takes the present for the future.",
      ),
      tr(
        "Guarda tu trabajo cada diez minutos; de lo contrario, puedes perderlo todo.",
        ["Save your work every ten minutes, otherwise you {could|might|can} lose everything.", "Save your work every ten minutes or you {could|might|can} lose everything.", "Save your work every ten minutes, or else you {could|might|can} lose everything."],
        "«De lo contrario» = \"otherwise\", or simply \"or\" / \"or else\" in speech. Not *if not.",
      ),
      tr(
        "Tomé un taxi; si no, habría llegado tarde.",
        ["I took a taxi; otherwise I would have been late.", "I took a taxi, otherwise I would have been late.", "I took a {cab|taxi}; otherwise I would have arrived late."],
        "\"Otherwise\" also works in the past: \"otherwise I would have been late\" = «si no, habría llegado tarde».",
      ),
      mc(
        "Which sentence is correct?",
        [
          "As long as you arrive on time, you can sit anywhere.",
          "As long as you will arrive on time, you can sit anywhere.",
          "As long as you would arrive on time, you can sit anywhere.",
          "As long as you arrived on time, you can sit anywhere.",
        ],
        "\"As long as\" works like \"if\": present simple for the future. Spanish «siempre que llegues» uses the subjunctive, which tempts learners to add \"will\".",
      ),
      tr(
        "¿Qué harías si encontraras una cartera llena de dinero?",
        "What would you do if you found a {wallet|purse} {full of money|full of cash}?",
        "An imaginary dilemma: \"would\" + base form, and \"if\" + past simple (\"found\"). «Encontrar» an object is \"find\", not \"meet\".",
      ),
      fb(
        "I'd ___ it in to the police.",
        "hand",
        "Lo [entregaría] a la policía.",
        "\"Hand in\" = give something to an authority. The base form after \"I'd\" (= I would): \"I'd hand it in\".",
      ),
      tr(
        "Estaría tentado a quedármelo, pero no lo haría.",
        ["I'd be tempted to keep it, but I wouldn't.", "I would be tempted to keep it, but I wouldn't do it."],
        "\"Be tempted to\" + base form is a natural, honest answer to a dilemma. The short ending \"but I wouldn't\" avoids repeating the verb.",
      ),
      mc(
        "Which sentence is correct?",
        [
          "I'm not sure what I would have done.",
          "I'm not sure what would I have done.",
          "I'm not sure what I would have do.",
          "I'm not sure what I had done would.",
        ],
        "Inside an indirect question, use statement order: \"what I would have done\", not *what would I have done.",
      ),
      tr(
        "¿Qué habrías hecho tú en su lugar?",
        "What would you have done in {her|his|their} {place|position|shoes}?",
        "A real past case uses the third conditional question: \"What would you have done...?\". «En su lugar» = \"in her position\" / \"in his shoes\".",
      ),
      tr(
        "Preferiría perder mi trabajo que mentir.",
        "I'd rather lose my job than lie.",
        "\"I'd rather\" + base form, no \"to\", with \"than\" + base form for the alternative.",
      ),
      lc(
        "I wouldn't do it even if they paid me.",
        [
          "The speaker would refuse, whatever the money.",
          "The speaker will do it for money.",
          "The speaker did it and was paid.",
          "The speaker wants to be paid first.",
        ],
        "\"Even if they paid me\" = «aunque me pagaran»: a strong position in an imaginary situation.",
        "What does the speaker mean?",
      ),
      fb(
        "If the vaccine ___ developed so quickly, many more people would have died.",
        "hadn't been",
        "Si la vacuna [no se hubiera] desarrollado tan rápido, habrían muerto muchas más personas.",
        "Spanish «se» becomes a passive: \"hadn't been developed\". *If the vaccine hadn't developed would make the vaccine the subject of the action.",
      ),
      tr(
        "Si no se hubiera construido el canal, el comercio habría sido mucho más lento.",
        "If the canal hadn't been built, trade would have been much slower.",
        "Passive if-clause (\"hadn't been built\") and a past result with \"would have been\".",
      ),
      fb(
        "Without the treaty, the war might ___ by the other side.",
        "have been won",
        "Sin el tratado, la guerra [podría haber sido ganada] por el otro lado.",
        "Passive with a modal: \"might have been won\". The order never changes: modal + have + been + participle.",
      ),
      tr(
        "Si no se hubiera inventado internet, no podríamos trabajar desde casa.",
        ["If the internet hadn't been invented, we wouldn't be able to work from home.", "If the internet hadn't been invented, we couldn't work from home."],
        "A historical turning point with a present result: mixed conditional. «No podríamos» = \"wouldn't be able to\" or \"couldn't\".",
      ),
      mc(
        "A historian isn't sure. Which sentence hedges correctly?",
        [
          "The city would probably have grown more slowly.",
          "The city would have probably grow more slowly.",
          "The city probably would grown more slowly.",
          "The city will probably have grown more slowly.",
        ],
        "Hedge with \"would probably have\" + participle. Remember: \"would probably have\", but \"probably wouldn't have\".",
      ),
      dc(
        "If the printing press hadn't been invented, books would still be copied by hand.",
        "A mixed conditional with passives in both halves: \"hadn't been invented\" (past) and \"would still be copied\" (present).",
      ),
      fb(
        "When I ___ university, I'm going to travel for a year.",
        "finish",
        "Cuando [termine] la universidad, voy a viajar un año.",
        "Time clauses take the present for the future: \"when I finish\". Spanish uses the subjunctive («termine»), English the plain present.",
      ),
      mc(
        "You expect to see your sister tonight. Which is better?",
        [
          "When I see her tonight, I'll give her the book.",
          "If I see her tonight, I'll give her the book.",
          "When I will see her tonight, I'll give her the book.",
          "If I would see her tonight, I'll give her the book.",
        ],
        "\"When\" = you expect it; \"if\" = maybe. Both take the present, never \"will\" or \"would\" after them.",
      ),
      tr(
        "No sé si vendrá a la reunión.",
        ["I don't know if {he|she}'ll come to the meeting.", "I don't know whether {he|she}'ll come to the meeting.", "I don't know if {he|she} will come to the meeting.", "I don't know whether {he|she} will come to the meeting."],
        "Here \"if\" means \"whether\" (an indirect question), so it is not a condition and \"will\" is correct: «no sé si vendrá».",
      ),
      lc(
        "If you'll wait here, I'll get the manager.",
        [
          "A polite request to wait.",
          "A threat.",
          "A question about the future.",
          "A mistake: will is never possible after if.",
        ],
        "\"If you'll wait\" = \"if you are willing to wait\": a formal, polite use of \"will\" after \"if\".",
        "What is this sentence?",
      ),
      wo(
        "I wouldn't have accepted the offer even if they had doubled my salary",
        "No habría aceptado la oferta aunque me hubieran duplicado el sueldo.",
        "\"Even if\" + past perfect for an imaginary past: «aunque me hubieran duplicado».",
      ),
      sp(
        "If I found a wallet in the street, I'd try to find the owner.",
        "Second conditional for an imaginary dilemma: \"If I found\" + \"I'd try\".",
        "\"Found a\" links: \"FOUN-da\".",
        "Say in English: «Si encontrara una cartera en la calle, intentaría encontrar al dueño.»",
      ),
      tr(
        "Si no hubiera perdido el vuelo, no habría conocido a mi socio, y hoy no tendría esta empresa.",
        "If I hadn't missed the flight, I wouldn't have met my {business partner|partner}, and I wouldn't have this company {today|now}.",
        "A chain: third conditional, then a present result (\"wouldn't have this company today\") without repeating \"if\". «Perder un vuelo» = \"miss\", not *lose.",
      ),
      tr(
        "Yo que tú, lo pensaría bien antes de renunciar, a menos que ya tengas otra oferta.",
        ["If I were you, I'd think carefully before quitting, unless you already have another offer.", "If I were you, I'd think it over before quitting, unless you already have another offer.", "If I were you, I'd think carefully before resigning, unless you already have another offer."],
        "\"If I were you, I'd\" + base form, then \"unless\" + affirmative present. After \"before\", English uses -ing (\"before quitting\").",
      ),
      dc(
        "If I'd known it was your birthday, I'd have bought you a present.",
        "\"I'd known\" = \"I had known\" (participle), \"I'd have bought\" = \"I would have bought\". Buy, bought, bought.",
      ),
      sp(
        "If penicillin hadn't been discovered, many people wouldn't be alive today.",
        "Passive past cause (\"hadn't been discovered\") and present result (\"wouldn't be alive today\").",
        "\"Hadn't been\" sounds like \"HAD-nt-bin\".",
        "Say in English: «Si no se hubiera descubierto la penicilina, mucha gente no estaría viva hoy.»",
      ),
    ],
  ),
];
