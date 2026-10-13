// Synced from cheneygross-afk/lengo:src/lib/lessons/en-b1-u10-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise, Lesson } from "./types";

// Required drill lesson for EN-B1 unit u10 (conditionals in practice): a short recap, then graded practice mixing the whole unit.

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
  slug: `en-b1-conditionals-unit-drill-${n}`,
  level: "EN-B1",
  number: n,
  title: `Drill: ${title}`,
  summary,
  duration: `${Math.round((exercises.reduce((s, e) => s + SECONDS[e.type], 0) + 40) / 60)} min`,
  sections: [{ heading, body, examples: examples.map(([es, en]) => ({ es, en })) }],
  exercises,
});

export const EN_B1_U10_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. The whole unit: all conditionals, unless / as long as /
  // in case / otherwise, mixed conditionals, wish vs hope, what-if talk
  // ---------------------------------------------------------------------
  lesson(
    1,
    "Conditionals in Practice",
    "You will be able to choose and build the right conditional, real or unreal, about now or the past, and use unless, as long as, in case, otherwise, wish and hope without the classic Spanish-speaker slips.",
    "Recap: real or unreal, now or past",
    [
      "Real conditions use the present after \"if\" (\"If it rains, we'll stay in\"). Unreal ones step back in time: the past for now or the future (\"If I had a car, I'd drive\") and the past perfect for the past (\"If I had known, I'd have come\"). When a past cause has a present result, mix them: \"If I had taken the job, I'd be rich now\".",
      "\"Will\" and \"would\" never go after \"if\", \"unless\", \"as long as\" or \"in case\", just as Spanish never says «si tendré». \"Unless\" already contains the \"not\", \"in case\" is a precaution («por si»), \"hope\" is for real possibilities and \"wish\" for unreal ones.",
    ],
    [
      ["If you leave now, you'll catch the bus.", "Si sales ahora, alcanzarás el autobús."],
      ["If I spoke French, I'd apply for the job in Paris.", "Si hablara francés, me postularía al trabajo en París."],
      ["If we had checked the map, we wouldn't have gotten lost.", "Si hubiéramos mirado el mapa, no nos habríamos perdido."],
      ["Take a jacket in case it gets cold.", "Llévate una chaqueta por si hace frío."],
    ],
    [
      fb("If it ___ tomorrow, we'll cancel the picnic.", "rains", "Si [llueve] mañana, cancelaremos el picnic.",
        "First conditional: a real possibility in the future takes the present after \"if\": \"If it rains\". *If it will rain is the classic slip; Spanish also says «si llueve», not «si lloverá»."),
      fb("If I ___ more free time, I'd learn to play the piano.", "had", "Si [tuviera] más tiempo libre, aprendería a tocar el piano.",
        "«Tuviera» is imaginary, so the second conditional steps back to the past simple: \"If I had\". The result goes with \"would\" (\"I'd learn\")."),
      fb("If she had set an alarm, she ___ late for work.", ["wouldn't have been", "wouldn't have arrived"], "Si hubiera puesto una alarma, [no habría llegado] tarde al trabajo.",
        "Third conditional: \"had set\" in the if-part, \"wouldn't have\" + past participle in the result. «Llegar tarde» is usually \"be late\" in English."),
      tr("Si calientas el agua a cien grados, hierve.", "{If|When} you heat water to 100 degrees, it boils.",
        "A general truth, so the zero conditional: present + present. \"Water\" in general takes no \"the\" in English, unlike «el agua»."),
      tr("Si veo a Martin en la oficina, le daré tu mensaje.", ["If I see Martin {at|in} the office, I'll give him your message.", "If I see Martin {at|in} the office, I'll give your message to him."],
        "First conditional: \"If I see\" (present), \"I'll give\" (will). *If I will see is wrong for the same reason «si veré» is wrong in Spanish."),
      mc("Choose the best option: \"I don't have a car. If I ___ one, I'd drive to work.\"", ["had", "have", "would have", "will have"],
        "The first sentence tells us the situation is unreal (no car), and the result has \"I'd\", so the if-part needs the past simple \"had\". \"Would\" never goes in the if-part."),
      wo("If I were you, I'd call the bank today.", "Yo que tú, llamaría al banco hoy.",
        "«Yo que tú» = \"If I were you\", followed by \"I'd\" + verb. \"Were\" is the safe choice for every person in this expression."),
      lc("If I'd known about the meeting, I'd have come.", [
        "Si hubiera sabido lo de la reunión, habría venido.",
        "Si supiera lo de la reunión, vendría.",
        "Sabía lo de la reunión, así que vine.",
        "Si sé lo de la reunión, vendré.",
      ], "The first \"I'd\" is \"I had\" (it comes before the participle \"known\"); the second is \"I would\" (before \"have come\"). Third conditional: an imaginary past."),
      fb("If I ___ so hard right now, I'd come to the gym with you.", ["weren't working", "wasn't working"], "Si [no estuviera trabajando] tanto ahora mismo, iría al gimnasio contigo.",
        "An action in progress now, imagined differently: second conditional with the past continuous, \"weren't working\" (\"wasn't working\" is also common in speech)."),
      tr("Si no hubiera estado manejando tan rápido, la policía no lo habría parado.", "If he hadn't been driving so fast, the police wouldn't have stopped him.",
        "An action in progress in the past: \"had been\" + -ing in the if-part, \"wouldn't have\" + participle in the result. «Manejar» is \"drive\"."),
      tr("No te prestaré el carro a menos que me prometas tener cuidado.", "I won't lend you {the|my} car unless you promise to be careful.",
        "\"Unless\" + present simple, even though Spanish uses the subjunctive («prometas»). And \"unless\" already means \"if... not\", so never *unless you don't promise."),
      mc("Which sentence is correct?", [
        "We'll eat outside unless it rains.",
        "We'll eat outside unless it doesn't rain.",
        "We'll eat outside unless it will rain.",
        "We'll eat outside unless it would rain.",
      ], "\"Unless it rains\" = \"if it doesn't rain\". Adding \"doesn't\" doubles the negative and reverses the meaning, and \"will\" or \"would\" can't follow \"unless\"."),
      fb("You can use my laptop ___ you save your files in a separate folder.", ["as long as", "provided that", "provided", "providing", "so long as"], "Puedes usar mi computadora portátil [siempre que] guardes tus archivos en una carpeta aparte.",
        "«Siempre que» with the meaning of a condition is \"as long as\" (or the more formal \"provided that\"), followed by the present simple \"save\", not a subjunctive-like form."),
      tr("Apúrate, si no vamos a perder el vuelo.", "Hurry{ up|}, {otherwise|or} we {will|are going to} miss the flight.",
        "«Si no» at the start of a new idea is \"otherwise\" (or \"or\"). For flights and trains, «perder» is \"miss\"; \"lose\" is for objects."),
      dc("We would've caught the train if the taxi had come on time.",
        "\"Would've\" is \"would have\", pronounced \"would-uv\". Never write *would of. The if-part has \"had come\", the third-conditional form."),
      tr("Llévate un paraguas por si llueve.", "{Take|Bring} {an|your} umbrella in case it rains.",
        "«Por si» is \"in case\", a precaution: take it now. \"If it rains\" would mean take it only when it starts raining. After \"in case\", use the present: never *in case it will rain."),
      mc("\"Write down the address ___ you forget it.\" Which word fits?", ["in case", "if", "unless", "as long as"],
        "You write it now as a precaution against forgetting, which is \"in case\" («por si»). \"If you forget it\" would mean writing it only after forgetting it, which makes no sense."),
      mt("Match each beginning with its ending.", [
        ["If you mix yellow and blue,", "you get green."],
        ["If the bus is late again,", "I'll take a taxi."],
        ["If I lived closer to the beach,", "I'd go swimming every day."],
        ["If we had booked earlier,", "we'd have paid less."],
        ["If I hadn't stayed up so late,", "I wouldn't be so tired now."],
      ], "Zero (present + present), first (present + will), second (past + would), third (had + participle + would have) and mixed (past perfect + would, with \"now\")."),
      tr("Si tuviera pasaporte, podría viajar a Canadá.", ["If I had a passport, I could travel to Canada.", "If I had a passport, I would be able to travel to Canada."],
        "«Podría» in a conditional is \"could\", the past of \"can\". *would can does not exist."),
      fb("If we had left earlier, we ___ there by now.", "would be", "Si hubiéramos salido antes, ya [estaríamos] allí.",
        "A past cause (\"had left\") with a present result: a mixed conditional. \"By now\" points to the present, so \"would be\", not \"would have been\"."),
      tr("Si no hubiera comido tanto, ahora no me sentiría tan mal.", ["If I hadn't eaten so much, I wouldn't feel so {bad|sick|awful} now.", "If I hadn't eaten so much, I wouldn't be feeling so {bad|sick|awful} now.", "If I hadn't eaten so much, now I wouldn't feel so {bad|sick|awful}."],
        "Mixed conditional again: the eating is past (\"hadn't eaten\"), the feeling is now (\"wouldn't feel\"). Spanish shows the same split: «hubiera comido» + «sentiría»."),
      wo("What would you do if you lost your phone?", "¿Qué harías si perdieras el celular?",
        "Question order: \"What\" + \"would\" + \"you\" + verb. The if-part keeps normal order and the past simple \"lost\". Here «perder» is an object, so \"lose\"."),
      sp("I probably wouldn't tell anyone.", "\"Probably\" goes before \"wouldn't\" (\"I probably wouldn't\") but after \"would\" (\"I'd probably tell\").",
        "Stress \"PROBably\" and \"WOULDn't\"; link \"tell anyone\" as one word.", "Say it in English: Probablemente no se lo diría a nadie."),
      lc("A: I wouldn't move abroad. B: Neither would I.", [
        "B tampoco se mudaría al extranjero.",
        "B sí se mudaría al extranjero.",
        "B ya vive en el extranjero.",
        "B no sabe si se mudaría.",
      ], "\"Neither would I\" (or \"Me neither\") agrees with a negative: «yo tampoco». To disagree, B would say \"Really? I would!\".", "What does B mean?"),
      mc("Your friend says: \"I'd love to live in a big city.\" You disagree. What do you say?", ["Really? I wouldn't!", "Me neither.", "Neither would I.", "Really? I would!"],
        "To disagree with a positive \"I'd\", answer with the negative auxiliary: \"I wouldn't!\". \"Me neither\" and \"Neither would I\" agree with negatives."),
      tr("Ojalá no tuviera que trabajar este sábado.", "I wish I didn't have to work this Saturday.",
        "«Ojalá» about an unreal present is \"I wish\" + past: \"didn't have to\". *I wish I don't have to and *I hope I didn't have to mix up the two verbs."),
      tr("Espero que tu entrevista salga bien mañana.", "I hope {that |}your interview {goes|will go} well tomorrow.",
        "A real possibility, so \"hope\", not \"wish\". After \"hope\", English uses the present (or \"will\"), never a subjunctive: \"goes well\"."),
      fb("I wish I ___ to the doctor sooner. Now the pain is worse.", "had gone", "Ojalá [hubiera ido] al médico antes. Ahora el dolor es peor.",
        "A regret about the past: \"wish\" + past perfect, \"had gone\". *I wish I would have gone is a common mistake; «hubiera ido» = \"had gone\"."),
      dc("If I were you, I wouldn't sign the contract yet.",
        "\"If I were you\" is said fast, with weak \"were\". \"Wouldn't\" has two syllables: WOOD-nt; listen for the \"n\"."),
      mc("Which sentence is correct?", [
        "If I had known it was your birthday, I would have bought you a present.",
        "If I would have known it was your birthday, I would have bought you a present.",
        "If I had knew it was your birthday, I would have bought you a present.",
        "If I have known it was your birthday, I would have bought you a present.",
      ], "Third conditional: \"had\" + past participle \"known\" in the if-part, \"would have bought\" in the result. «Si lo hubiera sabido» = \"If I had known\", never *If I would have known."),
      tr("Si ganara la lotería, me gastaría una parte en un viaje y ahorraría el resto.", "If I won the lottery, I'd spend {some|part} of it on a {trip|vacation} and {|I'd }save the rest.",
        "Unlikely, so the second conditional: \"If I won\", \"I'd spend\". You \"win\" the lottery (you \"earn\" money by working), and you spend money \"on\" something, not *in."),
      tr("Si hubieras estado prestando atención, habrías entendido la explicación.", "If you had been paying attention, you would have understood the explanation.",
        "Past continuous idea in an imaginary past: \"had been paying\". The result is \"would have understood\". Keep \"would\" out of the if-part."),
      wo("You can borrow my bike as long as you bring it back tonight.", "Puedes usar mi bici siempre que me la devuelvas esta noche.",
        "\"As long as\" + present simple (\"bring\"), even though Spanish uses the subjunctive «devuelvas». \"Borrow\" is what you take; \"lend\" is what you give."),
      sp("If you'd told me, I'd have helped you.", "Third conditional, fully contracted: \"you'd told\" = \"you had told\", \"I'd have helped\" = \"I would have helped\".",
        "Both \"'d\" sounds are tiny. Say \"I'd have\" as \"I'd-uv\".", "Say it in English: Si me lo hubieras dicho, te habría ayudado."),
      dc("Unless you hurry, you'll be late for the interview.",
        "\"Unless you hurry\" = \"If you don't hurry\". There's no \"not\" after \"unless\", and the verb is in the present."),
    ],
  ),
];
