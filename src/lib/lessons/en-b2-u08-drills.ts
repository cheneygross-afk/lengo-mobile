// Synced from cheneygross-afk/lengo:src/lib/lessons/en-b2-u08-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise, Lesson } from "./types";

// Required drill lessons for EN-B2 unit u08 (modals of deduction, past obligation and ability, and speculating): a short recap, then graded practice.
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

export const EN_B2_U08_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. Deduction about the present and the past, and must for
  // obligation or deduction
  // ---------------------------------------------------------------------
  lesson(
    1,
    "u08-deduction-present-past",
    "Deduction: Must, Might, Can't",
    "Make deductions about the present and the past with must, might, may, could and can't, and tell a deduction (must have) from an obligation (had to).",
    "Recap: how sure are you?",
    [
      "Present: \"must\" (almost certain), \"might / may / could\" (possible), \"can't\" (almost certainly not) + base form, or + \"be\" + -ing for actions in progress. The negative deduction is \"can't\", not *mustn't, which means prohibition.",
      "Past: the same modals + \"have\" + past participle: \"She must have left\", \"They can't have seen us\", \"He must have been sleeping\". Past obligation is different: «tuve que irme» is \"I had to leave\", never *I must have left.",
    ],
    [
      ["The lights are off. They must be asleep.", "Las luces están apagadas. Deben de estar dormidos."],
      ["He can't be at the office. It's Sunday.", "No puede estar en la oficina. Es domingo."],
      ["She might have missed the bus.", "Puede que haya perdido el autobús."],
      ["I had to work late, so I missed the game.", "Tuve que trabajar hasta tarde, así que me perdí el partido."],
    ],
    [
      fb(
        "Her car isn't here. She ___ at work.",
        "must be",
        "Su carro no está. [Debe de estar] en el trabajo.",
        "«Debe de estar» = \"must be\": almost certain, from the evidence. No \"to\" after \"must\".",
      ),
      fb(
        "He ___ at home. All the lights are off.",
        "can't be",
        "[No puede estar] en casa. Todas las luces están apagadas.",
        "A confident negative deduction is \"can't\". *He mustn't be sounds like a rule (\"he is not allowed to be\").",
      ),
      mc(
        "«No debe de ser muy caro; todos lo compran.» Which is correct?",
        [
          "It can't be very expensive; everyone buys it.",
          "It mustn't be very expensive; everyone buys it.",
          "It can't to be very expensive; everyone buys it.",
          "It doesn't must be very expensive; everyone buys it.",
        ],
        "The negative of deduction \"must\" is \"can't\". \"Mustn't\" = prohibition. And never \"to\" after a modal. (American English also allows \"must not be\".)",
      ),
      tr(
        "Puede que esté en el gimnasio.",
        ["{She|He} might be at the gym.", "{She|He} may be at the gym.", "{She|He} could be at the gym."],
        "«Puede que» = \"might\", \"may\" or \"could\" + base form. Not *can be: \"can\" is for general possibility, not a specific guess.",
      ),
      mc(
        "«Puede que llueva esta tarde.» Which is correct?",
        [
          "It might rain this afternoon.",
          "It can rain this afternoon.",
          "It maybe rains this afternoon.",
          "It might to rain this afternoon.",
        ],
        "A specific possibility uses \"might\" / \"may\" / \"could\", not \"can\". \"Maybe\" is an adverb (\"Maybe it'll rain\"), not a verb.",
      ),
      fb(
        "She ___ know about the meeting. Nobody told her.",
        ["might not", "may not"],
        "[Puede que no] sepa lo de la reunión. Nadie le dijo.",
        "A negative possibility is \"might not\" / \"may not\". \"Couldn't know\" would mean it's impossible.",
      ),
      tr(
        "Deben de estar cenando; no contestan el teléfono.",
        ["They must be having dinner; they're not answering the phone.", "They must be having dinner, they aren't answering the phone.", "They must be eating dinner; they're not answering the phone.", "They must be having dinner; they aren't picking up the phone."],
        "An action in progress now: modal + \"be\" + -ing: \"must be having dinner\".",
      ),
      wo(
        "He can't be working today because it's a holiday",
        "No puede estar trabajando hoy porque es feriado.",
        "\"Can't be\" + -ing: a confident negative deduction about an action in progress.",
      ),
      dc(
        "You must be Ana's brother. You look just like her.",
        "\"You must be...\" is a deduction (I'm sure from the evidence), not an obligation.",
      ),
      fb(
        "The door is open. Someone ___ it.",
        "must have opened",
        "La puerta está abierta. Alguien [debe de haberla abierto].",
        "A deduction about the past: \"must have\" + participle. «Debe de haber abierto» maps directly.",
      ),
      fb(
        "They ___ us. They didn't wave.",
        ["can't have seen", "couldn't have seen"],
        "[No pueden habernos visto]. No saludaron.",
        "Negative past deduction: \"can't have\" / \"couldn't have\" + participle. See, saw, seen.",
      ),
      tr(
        "Debe de haber olvidado nuestra cita.",
        ["{He|She} must have forgotten our {appointment|date|meeting}.", "{He|She} must have forgotten about our {appointment|date|meeting}."],
        "Forget, forgot, forgotten: \"must have forgotten\", not *must have forgot.",
      ),
      mc(
        "Which sentence is correct?",
        [
          "She might have taken the wrong bus.",
          "She might have took the wrong bus.",
          "She might had taken the wrong bus.",
          "She might of taken the wrong bus.",
        ],
        "Modal + \"have\" + past participle: \"might have taken\". Not the past simple *took, not *had, and *might of is a spelling mistake.",
      ),
      tr(
        "Puede que hayan perdido el vuelo.",
        ["They might have missed the{ir|} flight.", "They may have missed the{ir|} flight.", "They could have missed the{ir|} flight."],
        "«Puede que hayan perdido» = \"might have missed\". «Perder un vuelo» is \"miss\", not *lose.",
      ),
      mc(
        "«No puede haber estado en la fiesta anoche.» Which is correct?",
        [
          "She can't have been at the party last night.",
          "She can't be at the party last night.",
          "She mustn't have been at the party last night.",
          "She can't have be at the party last night.",
        ],
        "The event is past, so the deduction needs \"have\" + participle: \"can't have been\". *Can't be... last night mixes present and past.",
      ),
      fb(
        "She didn't answer when I called. She ___ sleeping.",
        "must have been",
        "No contestó cuando la llamé. [Debía de estar] durmiendo.",
        "An action in progress at a past moment: modal + \"have been\" + -ing: \"must have been sleeping\".",
      ),
      wo(
        "He must have been driving when you called",
        "Debía de estar manejando cuando llamaste.",
        "\"Must have been\" + -ing: a deduction about something in progress at a past moment.",
      ),
      lc(
        "They must've left already.",
        [
          "They must have left already.",
          "They must leave already.",
          "They mustn't leave yet.",
          "They had to leave already.",
        ],
        "\"Must've\" sounds like \"MUST-uv\": it is \"must have\" + participle, a past deduction.",
      ),
      mt(
        "Match each sentence with how sure the speaker is.",
        [
          ["He must have known.", "I'm almost sure he knew."],
          ["He might have known.", "Perhaps he knew."],
          ["He can't have known.", "I'm almost sure he didn't know."],
          ["He might not have known.", "Perhaps he didn't know."],
        ],
        "The deduction scale in the past: \"must have\" (yes), \"might / may / could have\" (maybe), \"might not have\" (maybe not), \"can't / couldn't have\" (no).",
      ),
      mc(
        "\"You must wear a helmet on the construction site.\" What does \"must\" express?",
        [
          "An obligation",
          "A deduction",
          "A possibility",
          "A criticism",
        ],
        "With an action you control (wear, pay, sign), \"must\" is usually a rule. If you can replace it with \"I'm sure that...\", it's a deduction.",
      ),
      tr(
        "Debes de estar agotado después de ese viaje.",
        "You must be {exhausted|so tired|really tired} after that trip.",
        "«Debes de estar» is a deduction, not an order: \"You must be exhausted\".",
      ),
      mc(
        "Which sentence is a deduction?",
        [
          "This has to be the best pizza in town.",
          "I have to renew my passport this month.",
          "You have to sign here.",
          "We have to leave at six.",
        ],
        "\"Have to\" is normally obligation. \"Has to be\" + superlative (\"the best\") is an informal exception: a very strong opinion.",
      ),
      tr(
        "Tuve que irme temprano porque mi hijo estaba enfermo.",
        "I had to leave early because my {son|kid|child} was sick.",
        "Past obligation is \"had to\". *I must have left would mean «supongo que me fui», a deduction that makes no sense about yourself.",
      ),
      fb(
        "Nobody answered the door. They ___ out.",
        "must have gone",
        "Nadie abrió la puerta. [Deben de haber salido].",
        "A past deduction, not an obligation: \"must have gone\". \"Had to go out\" would mean they were obliged to.",
      ),
      mc(
        "«Debió irse temprano.» You mean «tuvo que irse» (it was necessary). Which is correct?",
        [
          "She had to leave early.",
          "She must have left early.",
          "She should have left early.",
          "She must leave early.",
        ],
        "Spanish «debió» is ambiguous. If it means obligation, use \"had to\". \"Must have left\" = deduction; \"should have left\" = criticism.",
      ),
      dc(
        "The streets are wet. It must have rained last night.",
        "Evidence now (wet streets), deduction about the past: \"must have rained\".",
      ),
      tr(
        "No puede haber sido Tomás; estaba en Lima esa semana.",
        ["It can't have been Tomas; he was in Lima that week.", "It couldn't have been Tomas; he was in Lima that week.", "It can't have been Tomas, he was in Lima that week."],
        "Negative past deduction with \"it\": \"It can't have been Tomas\". Not *It mustn't have been.",
      ),
      tr(
        "Ella debe de saber la respuesta; es la experta.",
        "She must know the answer; she's the expert.",
        "\"I'm sure she knows\" becomes \"She must know\": the -s disappears after a modal.",
      ),
      wo(
        "They might be waiting for us at the entrance",
        "Puede que nos estén esperando en la entrada.",
        "\"Might be\" + -ing: a possible action in progress now.",
      ),
      sp(
        "He can't have finished the report already. He only started an hour ago.",
        "\"Can't have\" + participle for a negative past deduction, supported by evidence.",
        "\"Can't have\" sounds like \"CAN-tuv\", with the stress on \"can't\".",
        "Say in English: «No puede haber terminado el informe ya. Empezó hace solo una hora.»",
      ),
      tr(
        "Tuvimos que esperar dos horas; el tren debe de haberse descompuesto.",
        ["We had to wait two hours; the train must have broken down.", "We had to wait for two hours; the train must have broken down.", "We had to wait two hours, the train must have broken down."],
        "Both in one sentence: \"had to\" (obligation, it happened) and \"must have broken down\" (deduction). Break, broke, broken.",
      ),
      sp(
        "You must be tired. You've been working all day.",
        "Deduction now (\"must be\") from evidence in the present perfect continuous.",
        "\"Must be\": the t almost disappears before b: \"mus' be\".",
        "Say in English: «Debes de estar cansado. Has estado trabajando todo el día.»",
      ),
      tr(
        "Puede que no haya recibido mi mensaje; si lo hubiera recibido, me habría contestado.",
        ["He {might|may} not have {gotten|got|received} my message{;|,} if he had {gotten|got|received} it, he would have {answered|replied}.", "She {might|may} not have {gotten|got|received} my message{;|,} if she had {gotten|got|received} it, she would have {answered|replied}."],
        "\"Might not have\" + participle (possible negative past) plus a third conditional from unit 5. Keep the subject consistent (he or she).",
      ),
    ],
  ),
  // ---------------------------------------------------------------------
  // Drill 2. Past obligation and ability, fixing deduction errors, and
  // turning "I'm sure" into modals
  // ---------------------------------------------------------------------
  lesson(
    2,
    "u08-past-obligation-deduction-errors",
    "Past Obligation, Ability and Deduction Errors",
    "Talk about past necessity and ability with had to, didn't need to, needn't have, managed to and was supposed to, fix typical deduction errors, and turn I'm sure... into must and can't.",
    "Recap: what was necessary, what you managed",
    [
      "\"Had to\" is the past of \"must\". \"Didn't need to\" / \"didn't have to\" = it wasn't necessary (usually you didn't do it); \"needn't have\" + participle = you did it, but it wasn't necessary. For one specific success, use \"managed to\" or \"was able to\", not affirmative \"could\". \"Was supposed to\" = a plan that didn't happen.",
      "To rewrite \"I'm sure\" sentences: \"I'm sure he knows\" → \"He must know\"; \"I'm sure he forgot\" → \"He must have forgotten\"; \"I'm sure they didn't see us\" → \"They can't have seen us\"; \"It's possible she missed it\" → \"She might have missed it\".",
    ],
    [
      ["We didn't need to book; the restaurant was almost empty.", "No hizo falta reservar; el restaurante estaba casi vacío."],
      ["You needn't have brought wine. We have plenty.", "No hacía falta que trajeras vino. Tenemos mucho."],
      ["After three tries, I managed to fix the printer.", "Después de tres intentos, logré arreglar la impresora."],
      ["The meeting was supposed to start at nine.", "Se suponía que la reunión empezaba a las nueve."],
    ],
    [
      fb(
        "I ___ get up at five yesterday to catch the flight.",
        "had to",
        "[Tuve que] levantarme a las cinco ayer para alcanzar el vuelo.",
        "\"Must\" has no past form for obligation: use \"had to\". *I must got up and *I musted don't exist.",
      ),
      mc(
        "Which question is correct?",
        [
          "Did you have to wait long?",
          "Had you to wait long?",
          "Must you wait long yesterday?",
          "Did you must wait long?",
        ],
        "\"Had to\" makes questions with \"did\": \"Did you have to wait?\". *Had you to wait sounds very old-fashioned.",
      ),
      tr(
        "No tuvimos que pagar la entrada.",
        ["We didn't have to pay {for the entrance|the entrance fee|to get in|for admission|for the tickets}.", "We didn't need to pay {for the entrance|the entrance fee|to get in|for admission|for the tickets}."],
        "No obligation in the past: \"didn't have to\" / \"didn't need to\" + base form.",
      ),
      fb(
        "I ___ cook last night because we went out for dinner.",
        ["didn't need to", "didn't have to"],
        "No [hizo falta que] cocinara anoche porque salimos a cenar.",
        "It wasn't necessary, so you didn't do it: \"didn't need to\" or \"didn't have to\".",
      ),
      fb(
        "You ___ a present! But thank you, it's lovely.",
        ["needn't have brought", "didn't have to bring", "didn't need to bring"],
        "[No hacía falta que trajeras] un regalo. Pero gracias, está precioso.",
        "You brought it, but it wasn't necessary: \"needn't have\" + participle (British and formal) or \"didn't have to bring\" (American).",
      ),
      mc(
        "Which sentence is correct?",
        [
          "We needn't have hurried; the movie started late.",
          "We needn't to have hurried; the movie started late.",
          "We needn't have hurry; the movie started late.",
          "We needn't hurried; the movie started late.",
        ],
        "\"Needn't\" is a modal: no \"to\" after it, and \"needn't have\" + past participle (\"hurried\").",
      ),
      lc(
        "I needn't have taken a taxi.",
        [
          "The speaker took a taxi, but it wasn't necessary.",
          "The speaker didn't take a taxi.",
          "The speaker had to take a taxi.",
          "The speaker will take a taxi.",
        ],
        "\"Needn't have\" + participle = you did it, and later it turned out to be unnecessary.",
        "What happened?",
      ),
      fb(
        "I ___ swim when I was five.",
        "could",
        "[Sabía] nadar cuando tenía cinco años.",
        "General ability in the past: \"could\". «Sabía nadar» is \"could swim\", not *knew swim.",
      ),
      fb(
        "After an hour, I ___ open the jar.",
        ["managed to", "was able to"],
        "Después de una hora, [logré] abrir el frasco.",
        "One specific success after difficulty: \"managed to\" or \"was able to\". Affirmative \"could\" isn't used for a single achievement.",
      ),
      mc(
        "«Por fin pude hablar con el gerente.» Which is best?",
        [
          "I finally managed to talk to the manager.",
          "I finally could talk to the manager.",
          "I finally could to talk to the manager.",
          "I finally must talk to the manager.",
        ],
        "Spanish «pude» covers everything, English \"could\" doesn't: one specific success = \"managed to\" / \"was able to\".",
      ),
      tr(
        "No pude dormir anoche por el ruido.",
        ["I couldn't sleep last night because of the noise.", "I wasn't able to sleep last night because of the noise."],
        "In the negative, \"couldn't\" works for everything, general or specific.",
      ),
      tr(
        "Se suponía que el paquete llegaba ayer.",
        "The package was {supposed|meant} to arrive yesterday.",
        "\"Was supposed to\" = a plan or expectation that didn't happen. Pronounced \"su-POSED-tuh\".",
      ),
      tr(
        "¡Tenías que llamarme!",
        "You were {supposed|meant} to call me!",
        "«Tenías que» for something someone failed to do is \"were supposed to\". \"You had to call me\" would mean it was necessary and you did it.",
      ),
      wo(
        "We'd better not be late for the interview",
        "Más vale que no lleguemos tarde a la entrevista.",
        "\"Had better\" looks past but gives advice about now or the future. Negative: \"had better not\" + base form.",
      ),
      dc(
        "We were supposed to meet at six, but she didn't show up.",
        "\"Were supposed to\": a plan that failed. \"Show up\" = «aparecer», «llegar».",
      ),
      mc(
        "Which sentence is correct?",
        [
          "She can't be serious.",
          "She can't to be serious.",
          "She mustn't be serious.",
          "She doesn't can be serious.",
        ],
        "Modals take the base form without \"to\": \"can't be\". \"Mustn't\" for a negative deduction comes from «no debe de» and is wrong.",
      ),
      mc(
        "Which sentence is correct?",
        [
          "They must have forgotten.",
          "They must have forget.",
          "They must had forgotten.",
          "They must of forgotten.",
        ],
        "Modal + \"have\" + past participle: \"must have forgotten\". Not the base form, not *had, never *of.",
      ),
      fb(
        "He can't ___ at the meeting yesterday. He was on vacation.",
        "have been",
        "No [puede haber estado] en la reunión ayer. Estaba de vacaciones.",
        "\"Yesterday\" is past, so the modal needs \"have\" + participle: \"can't have been\". *Can't be... yesterday is a common mistake.",
      ),
      mc(
        "\"I just saw her at her desk.\" Which deduction fits the evidence?",
        [
          "She must be at work.",
          "She might be at work.",
          "She can't be at work.",
          "She may be at work maybe.",
        ],
        "You saw her, so the evidence is strong: \"must\". \"Might\" is grammatically fine but logically too weak.",
      ),
      tr(
        "Puede que el paquete llegue mañana.",
        ["The package might arrive tomorrow.", "The package may arrive tomorrow.", "The package could arrive tomorrow."],
        "A specific possibility: \"might\" / \"may\" / \"could\", not \"can\". *The package can arrive tomorrow comes from «puede que».",
      ),
      fb(
        "I'm sure he knows the password. → He ___ the password.",
        "must know",
        "Seguro que sabe la contraseña. → [Debe de saber] la contraseña.",
        "\"I'm sure\" = \"must\". The -s disappears: \"must know\", not *must knows.",
      ),
      fb(
        "Perhaps she's in a meeting. → She ___ in a meeting.",
        ["might be", "may be", "could be"],
        "A lo mejor está en una reunión. → [Puede que esté] en una reunión.",
        "\"Perhaps\" = \"might / may / could\". \"May be\" (two words) is the verb; \"maybe\" (one word) is the adverb.",
      ),
      fb(
        "I'm sure he forgot. → He ___.",
        "must have forgotten",
        "Seguro que se le olvidó. → [Debe de habérsele olvidado].",
        "A past \"I'm sure\" sentence becomes \"must have\" + participle: forgot → \"forgotten\".",
      ),
      tr(
        "Estoy seguro de que no nos vieron. → No pueden habernos visto.",
        ["They can't have seen us.", "They couldn't have seen us."],
        "\"I'm sure they didn't see us\" → \"They can't have seen us\": past simple \"didn't see\" becomes the participle \"seen\".",
      ),
      tr(
        "Es posible que haya perdido el tren.",
        ["{She|He} might have missed the train.", "{She|He} may have missed the train.", "{She|He} could have missed the train."],
        "\"It's possible that\" + past → \"might have\" + participle.",
      ),
      tr(
        "Seguro que fue caro.",
        ["{It|That} must have been expensive.", "I'm sure it was expensive."],
        "\"I'm sure it was\" → \"It must have been\": \"was\" becomes \"have been\".",
      ),
      mt(
        "Match each verb with its past participle.",
        [
          ["steal", "stolen"],
          ["hide", "hidden"],
          ["fall", "fallen"],
          ["choose", "chosen"],
          ["leave", "left"],
        ],
        "Past deductions depend on fast participles: \"must have stolen\", \"might have hidden\", \"can't have fallen\", \"must have chosen\", \"might have left\".",
      ),
      wo(
        "Someone must have stolen my bike last night",
        "Alguien debe de haber robado mi bici anoche.",
        "Steal, stole, stolen: \"must have stolen\", not *must have stole.",
      ),
      dc(
        "She can't have written this. It's not her handwriting.",
        "Write, wrote, written: \"can't have written\" = «no puede haberlo escrito».",
      ),
      tr(
        "No hizo falta que llevara paraguas; al final no llovió. Pero debe de haber llovido en el centro.",
        ["I needn't have taken an umbrella; it didn't rain in the end. But it must have rained downtown.", "I didn't need to take an umbrella; it didn't rain in the end. But it must have rained downtown.", "I didn't have to take an umbrella; it didn't rain after all. But it must have rained downtown."],
        "Past necessity (\"needn't have taken\" if you took it) next to a past deduction (\"must have rained\").",
      ),
      tr(
        "Tuve que pedir un taxi porque se suponía que mi hermano me recogía, pero debe de haberse olvidado.",
        ["I had to {call|get|order} a taxi because my brother was supposed to pick me up, but he must have forgotten.", "I had to {call|get|order} a {cab|taxi} because my brother was supposed to pick me up, but he must have forgotten."],
        "Three structures: obligation (\"had to\"), failed plan (\"was supposed to\"), deduction (\"must have forgotten\").",
      ),
      sp(
        "I didn't need to go to the bank, so I stayed home.",
        "\"Didn't need to\" + base form: it wasn't necessary, so I didn't do it.",
        "\"Need to\" sounds like \"NEED-tuh\".",
        "Say in English: «No necesité ir al banco, así que me quedé en casa.»",
      ),
      sp(
        "After a long search, we managed to find a parking space.",
        "One specific success after difficulty: \"managed to\", not affirmative \"could\".",
        "Stress \"MAN-aged\": two syllables, the -ed sounds like /d/.",
        "Say in English: «Después de buscar mucho, logramos encontrar un lugar para estacionar.»",
      ),
    ],
  ),
  // ---------------------------------------------------------------------
  // Drill 3. Speculating: I bet, I doubt, bound to, look and seem; old
  // and new modals; the whole unit mixed
  // ---------------------------------------------------------------------
  lesson(
    3,
    "u08-speculating-modals-mixed",
    "Speculating and All Modals Mixed",
    "Speculate with I bet, I doubt, there's no way, be bound to, look like and seem to have, and choose confidently between deduction, obligation, criticism and past possibility.",
    "Recap: speculating, and modals old and new",
    [
      "\"I bet\" (= «seguro que»), \"I doubt\" (= «dudo que») and \"There's no way\" (= «es imposible que») take normal tenses, not the subjunctive: \"I doubt she'll call\". \"Be bound to\" + base form = certain to happen. To describe photos: \"look\" + adjective (\"She looks tired\"), \"look like\" + noun, \"look as if\" + clause, \"seem to be\" / \"seem to have\" + participle.",
      "Keep the systems apart: \"mustn't\" = prohibition, \"don't have to\" = not necessary, \"had to\" = past obligation, \"must have\" = past deduction, \"should have\" = criticism, \"could\" = past ability, \"could have\" = a possibility that didn't happen.",
    ],
    [
      ["I bet they're stuck in traffic.", "Seguro que están atrapados en el tráfico."],
      ["I doubt the store will be open on a holiday.", "Dudo que la tienda esté abierta en un feriado."],
      ["It looks as if they've just won something.", "Parece que acaban de ganar algo."],
      ["You don't have to come, but you mustn't tell anyone.", "No tienes que venir, pero no debes decírselo a nadie."],
    ],
    [
      fb(
        "Don't worry about the noise. I ___ it's the neighbors having another party.",
        "bet",
        "No te preocupes por el ruido. [Seguro que] son los vecinos con otra fiesta.",
        "\"I bet (that)...\" = «seguro que...»: informal and confident, followed by a normal verb.",
      ),
      tr(
        "Dudo que venga a la reunión.",
        ["I doubt {he'll|she'll} come to the meeting.", "I doubt {he|she} will come to the meeting.", "I doubt {that |}{he'll|she'll} come to the meeting."],
        "«Dudo que venga» uses the subjunctive, but English uses a normal tense, often \"will\": \"I doubt he'll come\", not *I doubt he comes.",
      ),
      mc(
        "«Es imposible que estén de fiesta un lunes.» Which is correct?",
        [
          "There's no way they're having a party on a Monday.",
          "There's no way they be having a party on a Monday.",
          "There's no way they must have a party on a Monday.",
          "It's no way that they having a party on a Monday.",
        ],
        "\"There's no way (that)\" + normal verb. English has no subjunctive here: \"they're having\".",
      ),
      fb(
        "Diego is ___ to be late. He always is.",
        "bound",
        "[Seguro que] Diego llega tarde. Siempre llega tarde.",
        "\"Be bound to\" + base form = certain to happen, often because it's typical: \"He's bound to be late\".",
      ),
      tr(
        "Seguro que llueve el fin de semana; siempre llueve cuando tenemos planes.",
        ["It's bound to rain this weekend; it always rains when we have plans.", "It's bound to rain on the weekend; it always rains when we have plans.", "I bet it'll rain this weekend; it always rains when we have plans.", "I bet it rains this weekend; it always rains when we have plans."],
        "«Seguro que» can be \"be bound to\" (certain, typical) or \"I bet\" (confident guess).",
      ),
      lc(
        "The doorbell's ringing. That must be him.",
        [
          "The speaker is sure the visitor is the person they're waiting for.",
          "The speaker is not sure who it is.",
          "The speaker must open the door.",
          "The speaker knows it isn't him.",
        ],
        "\"That must be him\" is the classic deduction when the phone or doorbell rings. Note \"him\", not *he, after \"be\" in conversation.",
        "What does the speaker mean?",
      ),
      mc(
        "«Parece cansada.» Which is correct?",
        [
          "She looks tired.",
          "She looks like tired.",
          "She looks as tired.",
          "She seems that tired.",
        ],
        "\"Look\" + adjective, with no \"like\": \"She looks tired\". \"Look like\" needs a noun or a clause.",
      ),
      fb(
        "It looks ___ a wedding. Everyone is dressed up.",
        "like",
        "[Parece] una boda. Todos están muy arreglados.",
        "\"Look like\" + noun: \"It looks like a wedding\".",
      ),
      tr(
        "Parece que van a perder el tren.",
        ["It looks as if they're going to miss the train.", "It looks like they're going to miss the train.", "It looks as though they're going to miss the train."],
        "\"Look as if / as though / like\" + clause. \"Look as if\" sounds more careful, which helps in an exam.",
      ),
      fb(
        "They seem ___ finished the meal already.",
        "to have",
        "Parece que [ya han] terminado de comer.",
        "\"Seem to have\" + participle: speculation about something that happened before, without a modal.",
      ),
      tr(
        "Parece que se perdieron.",
        ["They seem to have gotten lost.", "They seem to have got lost.", "It seems that they got lost.", "It seems {that |}they've gotten lost.", "It looks like they got lost."],
        "\"Seem to have\" + participle, or \"It seems that...\". Never *seems that without a subject: English needs \"It\".",
      ),
      wo(
        "She seems to be waiting for someone",
        "Parece que está esperando a alguien.",
        "\"Seem to be\" + -ing: speculation about an action in progress now.",
      ),
      dc(
        "In the first photo, the people look relaxed, whereas in the second one they seem to be under pressure.",
        "Describing and comparing photos: \"look\" + adjective, \"seem to be\", and \"whereas\" for contrast.",
      ),
      mt(
        "Match each Spanish phrase with its English equivalent.",
        [
          ["seguro que (informal)", "I bet"],
          ["dudo que", "I doubt"],
          ["es imposible que", "there's no way"],
          ["parece que acaban de", "they seem to have just"],
          ["no hace falta que", "you don't have to"],
        ],
        "All of these take normal English tenses, even where Spanish uses the subjunctive.",
      ),
      mc(
        "«No tienes que venir mañana.» (It's not necessary.) Which is correct?",
        [
          "You don't have to come tomorrow.",
          "You mustn't come tomorrow.",
          "You can't have come tomorrow.",
          "You haven't to come tomorrow.",
        ],
        "\"Don't have to\" = not necessary. \"Mustn't\" = prohibited, which changes the meaning completely.",
      ),
      tr(
        "No debes usar el celular mientras manejas.",
        ["You mustn't use your {phone|cell phone} while {driving|you're driving|you drive}.", "You must not use your {phone|cell phone} while {driving|you're driving|you drive}.", "You can't use your {phone|cell phone} while {driving|you're driving|you drive}."],
        "Prohibition: \"mustn't\" (or \"can't\"). Here «no debes» is a rule, not a deduction.",
      ),
      mc(
        "Which sentence is a criticism?",
        [
          "You should have called me.",
          "You must have called me.",
          "You had to call me.",
          "You could call me.",
        ],
        "\"Should have\" = criticism (you didn't). \"Must have\" = deduction (I think you did); \"had to\" = obligation (you did it).",
      ),
      tr(
        "Deberías habérmelo dicho.",
        "You should have told me.",
        "«Deberías habérmelo dicho» = criticism: \"should have told\". *You had to tell me means it was an obligation and you did it.",
      ),
      fb(
        "We ___ won the match, but we missed a penalty in the last minute.",
        "could have",
        "[Podríamos haber] ganado el partido, pero fallamos un penal en el último minuto.",
        "«Pudimos haber ganado» = \"could have won\": a possibility that didn't happen. Not *could won.",
      ),
      mc(
        "«No pude dormir.» Which is correct?",
        [
          "I couldn't sleep.",
          "I couldn't have slept.",
          "I can't have slept.",
          "I mustn't sleep.",
        ],
        "Past inability: \"couldn't\" + base form. \"Couldn't have slept\" is a deduction or an imaginary past, not a simple fact.",
      ),
      lc(
        "It could have been Tom, but I'm not sure.",
        [
          "Perhaps it was Tom.",
          "It was definitely Tom.",
          "It definitely wasn't Tom.",
          "Tom was able to do it.",
        ],
        "\"Could have been\" here is a past deduction: a possibility, not a certainty.",
        "What does the speaker mean?",
      ),
      tr(
        "Las luces están prendidas; deben de estar en casa.",
        ["The lights are on; they must be {at home|home}.", "The lights are on, they must be {at home|home}."],
        "Present deduction: \"must be\". «Prendidas» = \"on\".",
      ),
      tr(
        "No puede estar dormida; acabo de oírla hablar por teléfono.",
        ["She can't be asleep; I just heard her talking on the phone.", "She can't be sleeping; I just heard her talking on the phone.", "She can't be asleep; I've just heard her talking on the phone."],
        "Negative present deduction: \"can't be\", not *mustn't be.",
      ),
      fb(
        "The road is wet. It ___ rained during the night.",
        "must have",
        "La calle está mojada. [Debe de haber] llovido durante la noche.",
        "Evidence now, deduction about the past: \"must have\" + participle.",
      ),
      wo(
        "There's no way he could have done it alone",
        "Es imposible que lo haya hecho solo.",
        "\"There's no way\" + normal clause; \"could have done\" for past ability that you doubt.",
      ),
      tr(
        "Ana tuvo que quedarse en la oficina; debe de estar agotada.",
        ["Ana had to stay at the office; she must be exhausted.", "Ana had to stay at the office, she must be exhausted.", "Ana had to stay {in|at} the office; she must be {exhausted|really tired|so tired}."],
        "Past obligation (\"had to\") + present deduction (\"must be\"). Not *Ana must have stayed (that's a guess).",
      ),
      mc(
        "Which sentence is correct?",
        [
          "He might have been working when you called.",
          "He might be working when you called.",
          "He might have be working when you called.",
          "He might has been working when you called.",
        ],
        "In progress at a past moment: modal + \"have been\" + -ing. \"Have\" never changes after a modal.",
      ),
      tr(
        "Dudo que hayan recibido mi correo; si no, ya me habrían contestado.",
        ["I doubt they've {received|gotten|got} my email; otherwise they would have answered by now.", "I doubt they {received|got} my email; otherwise they would have {answered|replied} already.", "I doubt they've {received|gotten|got} my email; otherwise they would have {replied|answered} already."],
        "\"I doubt\" + normal tense, then \"otherwise\" + \"would have\" + participle for an imaginary past result.",
      ),
      dc(
        "She must have been waiting for hours. She looks exhausted.",
        "Past continuous deduction (\"must have been waiting\") supported by present evidence (\"looks exhausted\": look + adjective).",
      ),
      sp(
        "I doubt it'll be finished by Friday.",
        "\"I doubt\" + \"will\": English uses a normal future, not a subjunctive.",
        "\"Doubt\": the b is silent: /daʊt/.",
        "Say in English: «Dudo que esté terminado para el viernes.»",
      ),
      tr(
        "No hacía falta que lavaras los platos, pero gracias; deben de haberte llevado una hora.",
        ["You needn't have {washed|done} the dishes, but {thanks|thank you}; {they|it} must have taken you an hour.", "You didn't {have|need} to {wash|do} the dishes, but {thanks|thank you}; {they|it} must have taken you an hour."],
        "You did it but it wasn't necessary: \"needn't have washed\" / \"didn't have to wash\". Then a past deduction: \"must have taken\" (take, took, taken).",
      ),
      sp(
        "They look as if they've been running. They must be training for a race.",
        "\"Look as if\" + clause, then a present continuous deduction: \"must be training\".",
        "\"Look as if\" links: \"LOOK-a-ZIF\".",
        "Say in English: «Parece que han estado corriendo. Deben de estar entrenando para una carrera.»",
      ),
    ],
  ),
];
