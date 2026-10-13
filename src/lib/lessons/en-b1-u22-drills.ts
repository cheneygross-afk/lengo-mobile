// Synced from cheneygross-afk/lengo:src/lib/lessons/en-b1-u22-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise, Lesson } from "./types";

// Required drill lesson for EN-B1 unit u22 (verb patterns in practice): a short recap, then graded practice mixing the whole unit.

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
  slug: `en-b1-${topic}-unit-drill-${n}`,
  level: "EN-B1",
  number: n,
  title: `Drill: ${title}`,
  summary,
  duration: `${Math.round((exercises.reduce((s, e) => s + SECONDS[e.type], 0) + 40) / 60)} min`,
  sections: [{ heading, body, examples: examples.map(([es, en]) => ({ es, en })) }],
  exercises,
});
const say = (text: string, spanish: string, tip: string, explanation: string): Exercise => sp(text, explanation, tip, `Say in English: «${spanish}»`);

export const EN_B1_U22_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. The whole unit: remember / forget / stop / try / regret /
  // go on, make / let / allow, like vs would like, prefer and would rather
  // ---------------------------------------------------------------------
  lesson(
    1,
    "verb-patterns",
    "Verb Patterns in Practice",
    "Choose the right pattern after remember, forget, stop, try, regret, go on, make, let, allow, like, prefer and would rather.",
    "Recap: patterns that change the meaning",
    [
      "\"To\" looks forward and -ing looks back: \"Remember to call\" (a task) vs \"I remember calling\" (a memory); \"stop smoking\" (quit) vs \"stop to smoke\" (pause in order to smoke); \"try to\" (make an effort) vs \"try doing\" (experiment); \"go on doing\" (continue) vs \"go on to do\" (next step).",
      "\"Make\" and \"let\" take person + base verb (\"made me wait\", \"let me go\"); \"allow\" takes \"to\"; in the passive, \"I was made to wait\", \"I was allowed to go\".",
      "\"I like swimming\" is a taste and \"I'd like to swim\" a wish; \"prefer A to B\", \"would rather\" + base verb (+ than), and \"I'd rather you didn't\" for another person.",
    ],
    [
      ["Don't forget to water the plants.", "No te olvides de regar las plantas."],
      ["I stopped drinking coffee last month.", "Dejé de tomar café el mes pasado."],
      ["My boss let me leave early.", "Mi jefe me dejó salir temprano."],
      ["I'd rather take the train than fly.", "Prefiero ir en tren que en avión."],
    ],
    [
      mc(
        "«Acuérdate de comprar leche.»",
        ["Remember to buy milk.", "Remember buying milk.", "Remember of buying milk.", "Remember buy milk."],
        "A task you still have to do = \"remember to\" + verb. \"Remember buying\" is a memory of the past, and there's no \"of\" after \"remember\".",
      ),
      fb(
        "I remember ___ my passport in my bag, so it must be there.",
        "putting",
        "Me acuerdo de [haber puesto] el pasaporte en la bolsa, así que tiene que estar ahí.",
        "A memory of something you already did = \"remember\" + -ing. The -ing points back.",
      ),
      tr(
        "Se me olvidó mandarte el archivo.",
        ["I forgot to send you the file.", "I forgot to send the file to you."],
        "«Se me olvidó hacer algo» = \"I forgot to\" + verb. English uses \"I\" as the subject, not *it forgot me.",
      ),
      dc(
        "I'll never forget meeting my niece for the first time.",
        "\"Never forget\" + -ing for a memory of the past.",
      ),
      fb(
        "My uncle stopped ___ meat when he was forty.",
        "eating",
        "Mi tío dejó de [comer] carne cuando tenía cuarenta años.",
        "«Dejar de» = \"stop\" + -ing. \"Stopped to eat\" would mean he paused in order to eat.",
      ),
      mc(
        "«Nos paramos a comprar gasolina.»",
        ["We stopped to buy gas.", "We stopped buying gas.", "We stopped for buy gas.", "We stopped of buying gas."],
        "«Pararse a hacer algo» = \"stop to\" + verb: we stopped the car in order to buy gas. \"Stopped buying gas\" means we don't buy it anymore.",
      ),
      lc(
        "I stopped to talk to my neighbor.",
        ["I paused what I was doing to talk to my neighbor", "I don't talk to my neighbor anymore", "My neighbor stopped me from talking", "I never talk to my neighbor"],
        "\"Stop to\" + verb = stop one activity in order to do another.",
        "What happened?",
      ),
      tr(
        "Intenté llamarte, pero no tenías señal.",
        ["I tried to call you, but you {didn't have|had no} {signal|reception}.", "I tried to call you, but you didn't have any {signal|reception}."],
        "Making an effort that didn't work = \"try to\" + verb.",
      ),
      fb(
        "If your laptop is slow, try ___ it.",
        ["restarting", "rebooting"],
        "Si tu laptop está lenta, prueba [reiniciarla].",
        "An experiment to see if it helps = \"try\" + -ing. Restarting is easy; the question is whether it solves the problem.",
      ),
      tr(
        "Me arrepiento de no haber aprendido a nadar.",
        "I regret not {learning|having learned} {how |}to swim.",
        "«Arrepentirse de no haber hecho» = \"regret not\" + -ing. No \"of\": *regret of not learning.",
      ),
      fb(
        "We regret ___ you that the concert has been canceled.",
        ["to inform", "to tell"],
        "Lamentamos [informarle] que el concierto ha sido cancelado.",
        "\"Regret to inform/tell\" is the formal way to give bad news now. (\"Canceled\" is the American spelling; British English writes \"cancelled\".)",
      ),
      mt(
        "Match each sentence with its meaning.",
        [
          ["He went on talking.", "Siguió hablando."],
          ["He went on to become a doctor.", "Después llegó a ser médico."],
          ["I tried calling her.", "Probé a llamarla, a ver si funcionaba."],
          ["I tried to call her.", "Intenté llamarla, pero no pude."],
          ["I stopped calling her.", "Dejé de llamarla."],
        ],
        "\"Go on\" + -ing continues the same action; \"go on to\" is a new step. \"Try\" + -ing is an experiment; \"try to\" is an effort. \"Stop\" + -ing = quit.",
      ),
      tr(
        "Después de la universidad, pasó a dirigir su propia empresa.",
        "After college, {she|he} went on to {run|manage} {her|his} own company.",
        "«Pasar a hacer algo» (a new step) = \"go on to\" + verb.",
      ),
      mc(
        "Which sentence is correct?",
        ["My parents made me practice the piano every day.", "My parents made me to practice the piano every day.", "My parents made me practicing the piano every day.", "My parents obliged me practice the piano every day."],
        "\"Make\" + person + base verb, with no \"to\". *Made me to practice is the big mistake.",
      ),
      fb(
        "The teacher let us ___ early because of the storm.",
        ["leave", "go"],
        "La maestra nos dejó [salir] temprano por la tormenta.",
        "\"Let\" + person + base verb, no \"to\": \"let us leave\".",
      ),
      tr(
        "Mis papás no me dejaban usar el celular en la mesa.",
        ["My parents {didn't|wouldn't} let me use my {phone|cell phone} at the table.", "My parents didn't allow me to use my {phone|cell phone} at the table."],
        "Permission = \"let\" + person + base verb, or \"allow\" + person + \"to\". Never *leave me use: \"leave\" is «dejar» a place or a thing.",
      ),
      tr(
        "En mi trabajo no nos permiten usar jeans.",
        ["At {my job|work} we {aren't|are not} allowed to wear jeans.", "We {aren't|are not} allowed to wear jeans at {my job|work}.", "They don't {allow us to|let us} wear jeans at {my job|work}."],
        "Rules: \"be allowed to\" + verb. Clothes are \"wear\", not *use.",
      ),
      fb(
        "At the airport, we were made ___ for three hours.",
        "to wait",
        "En el aeropuerto, nos [hicieron esperar] tres horas.",
        "In the passive, \"make\" gets its \"to\" back: \"were made to wait\". Active: \"They made us wait.\"",
      ),
      wo(
        "The hotel allowed us to check in early",
        "El hotel nos permitió hacer el check-in temprano.",
        "\"Allow\" + person + \"to\" + verb. Compare \"The hotel let us check in early\".",
      ),
      dc(
        "Let me know if you need anything else.",
        "\"Let me know\" = «avísame». \"Let me\" sounds like one word: /ˈlemi/.",
      ),
      lc(
        "Would you like to go dancing on Saturday?",
        ["An invitation", "A question about the listener's tastes in general", "An order", "A complaint"],
        "\"Would you like to...?\" invites; \"Do you like...?\" asks about tastes.",
        "What is this?",
      ),
      mc(
        "«Me gustaría vivir cerca del mar.»",
        ["I'd like to live near the ocean.", "I like living near the ocean.", "I'd like living near the ocean.", "I would like live near the ocean."],
        "A wish = \"would like\" + \"to\". *I'd like living is a calque of «me gustaría vivir»; \"I like living\" means you already do and enjoy it.",
      ),
      tr(
        "Prefiero leer a ver la tele.",
        ["I prefer reading to watching TV.", "I prefer to read rather than watch TV."],
        "\"Prefer A to B\" with -ing on both sides, or \"prefer to... rather than...\". Never *prefer... than.",
      ),
      fb(
        "I'd rather ___ home tonight, if you don't mind.",
        "stay",
        "Preferiría [quedarme] en casa esta noche, si no te importa.",
        "\"Would rather\" + base verb, no \"to\": *I'd rather to stay is the typical mistake.",
      ),
      tr(
        "Preferiría manejar que ir en avión.",
        ["I'd rather drive than fly.", "I'd rather drive than take a plane.", "I'd prefer to drive rather than fly."],
        "\"Would rather\" + base verb + \"than\" + base verb. With \"would prefer\", use \"to\" + verb and \"rather than\".",
      ),
      fb(
        "\"Do you mind if I smoke here?\" \"Well, I'd rather you ___.\"",
        "didn't",
        "—¿Te importa si fumo aquí? —Bueno, preferiría que [no lo hicieras].",
        "\"Would rather\" + another person + past: \"I'd rather you didn't\". Not *I'd rather you don't.",
      ),
      tr(
        "Preferiría que me llamaras antes de venir.",
        ["I'd rather you called me before {coming|you came}.", "I'd prefer you to call me before {coming|you come}.", "I'd prefer it if you called me before {coming|you came}."],
        "For another person: \"would rather\" + person + past (\"you called\"), or \"would prefer\" + person + \"to\" + verb.",
      ),
      say(
        "I'd rather not drive in the snow.",
        "Preferiría no manejar con nieve.",
        "\"I'd rather\" sounds like /aɪd ˈræðər/; the \"d\" is short but present.",
        "The negative is \"would rather not\" + base verb.",
      ),
      mc(
        "Which sentence is correct?",
        ["They let me use their car while they were away.", "They let me to use their car while they were away.", "They left me use their car while they were away.", "They allowed me use their car while they were away."],
        "\"Let\" + person + base verb; \"allow\" needs \"to\". \"Left\" is the past of \"leave\", not of \"let\".",
      ),
      tr(
        "¿Te acordaste de apagar el horno?",
        ["Did you remember to {turn|switch} off the oven?", "Did you remember to {turn|switch} the oven off?"],
        "A task = \"remember to\" + verb. Not *remember of turning off.",
      ),
      wo(
        "I'll never forget seeing snow for the first time",
        "Nunca olvidaré la primera vez que vi la nieve.",
        "A memory: \"never forget\" + -ing.",
      ),
      dc(
        "When I was a kid, my mom made me eat all my vegetables.",
        "\"Made me eat\": no \"to\" after \"make\" + person in the active.",
      ),
      tr(
        "Cuando era niño, mis papás no me dejaban salir solo, pero me obligaban a hacer deporte.",
        ["When I was a {kid|child}, my parents {didn't|wouldn't} let me go out alone, but they made me {play|do} {sports|sport}."],
        "\"Let\" for permission and \"make\" for obligation, both with no \"to\". «Hacer deporte» is \"play sports\" or \"do sport\".",
      ),
      say(
        "Try drinking more water, and remember to sleep eight hours.",
        "Prueba tomar más agua y acuérdate de dormir ocho horas.",
        "\"Try\" + -ing for a suggestion to experiment; \"remember to\" for a task.",
        "Advice often uses \"try\" + -ing; a reminder uses \"remember to\".",
      ),
      tr(
        "Dejé de comer azúcar y ahora prefiero la fruta a los postres.",
        ["I {stopped|quit} eating sugar and now I prefer fruit to {desserts|dessert}.", "I've stopped eating sugar and now I prefer fruit to {desserts|dessert}."],
        "\"Stop\" + -ing = quit; \"prefer A to B\", never *prefer... than.",
      ),
    ],
  ),
];
