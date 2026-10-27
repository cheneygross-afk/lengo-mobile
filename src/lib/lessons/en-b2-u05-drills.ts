// Synced from cheneygross-afk/lengo:src/lib/lessons/en-b2-u05-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise, Lesson } from "./types";

// Required drill lessons for EN-B2 unit u05 (third and mixed conditionals, unless, as long as, in case, otherwise and formal inversion): a short recap, then graded practice.
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

export const EN_B2_U05_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. Third conditional, mixed conditionals and the contrast of
  // zero, first, second and third
  // ---------------------------------------------------------------------
  lesson(
    1,
    "u05-third-mixed-conditionals",
    "Third and Mixed Conditionals",
    "Imagine a different past with the third conditional, link past and present with mixed conditionals, and choose the right conditional for each situation.",
    "Recap: the imaginary past and mixed times",
    [
      "The third conditional imagines a past that did not happen: if + past perfect, then would have + past participle. «Si lo hubiera sabido, habría venido» is \"If I had known, I would have come\", never *If I would have known.",
      "Mixed conditionals combine two times. A past cause with a present result: \"If I had studied medicine, I would be a doctor now.\" A present fact with a past result: \"If I weren't so shy, I would have spoken to her.\" Follow the Spanish verb: «habría hablado» = \"would have spoken\", «hablaría» = \"would speak\".",
    ],
    [
      ["If we had taken a taxi, we wouldn't have missed the start of the movie.", "Si hubiéramos tomado un taxi, no nos habríamos perdido el principio de la película."],
      ["If she hadn't gone to that conference, she wouldn't have her current job.", "Si no hubiera ido a esa conferencia, no tendría su trabajo actual."],
      ["If I liked spicy food, I would have ordered the curry.", "Si me gustara la comida picante, habría pedido el curry."],
      ["If it snows tonight, the schools will close.", "Si nieva esta noche, las escuelas cerrarán."],
    ],
    [
      mc(
        "We missed the train. Which sentence imagines a different past?",
        [
          "If we had left earlier, we would have caught the train.",
          "If we leave earlier, we will catch the train.",
          "If we left earlier, we would catch the train.",
          "If we would have left earlier, we would have caught the train.",
        ],
        "An imaginary past needs if + past perfect (\"had left\") and would have + participle (\"would have caught\"). The present and past simple versions talk about the future, and *If we would have left puts \"would\" in the if-clause, which standard English never does.",
      ),
      fb(
        "If I ___ the address, I would have sent you a postcard.",
        "had known",
        "Si [hubiera sabido] la dirección, te habría mandado una postal.",
        "«Hubiera sabido» goes into the if-clause as the past perfect: \"had known\". Not *would have known and not *had knew: \"know\" has the participle \"known\".",
      ),
      fb(
        "If she had asked me, I ___ her with the move.",
        "would have helped",
        "Si me lo hubiera pedido, la [habría ayudado] con la mudanza.",
        "The result of an imaginary past is would have + past participle: \"would have helped\" = «habría ayudado». Never *would had helped: after a modal, \"have\" doesn't change.",
      ),
      tr(
        "Si hubiéramos reservado antes, habríamos pagado menos.",
        "If we had {booked|reserved} {earlier|sooner|before}, we would have paid less.",
        "If-clause: past perfect \"had booked\" («hubiéramos reservado»). Result: \"would have paid\" («habríamos pagado»). Spanish speakers often copy «hubiéramos» into both halves; English keeps \"would\" out of the if-clause.",
      ),
      tr(
        "Si no hubiera llovido, habríamos ido a la playa.",
        ["If it hadn't rained, we would have gone to the beach.", "We would have gone to the beach if it hadn't rained."],
        "English needs the subject \"it\" with weather verbs: \"If it hadn't rained\". The participle of \"go\" is \"gone\", so \"would have gone\", not *would have went.",
      ),
      wo(
        "I would have called you if I had known",
        "Te habría llamado si lo hubiera sabido.",
        "When the result comes first, no comma is needed. \"Would have called\" is the result; \"if I had known\" is the condition. Spanish «lo» disappears in English.",
        ["If I had known I would have called you"],
      ),
      mc(
        "Which sentence is correct?",
        [
          "If he had saved more, he could have bought the house.",
          "If he would have saved more, he could have bought the house.",
          "If he had saved more, he could had bought the house.",
          "If he had saved more, he can have bought the house.",
        ],
        "\"Could have\" + participle is a softer result («podría haber comprado»). The if-clause takes \"had saved\", not \"would have saved\"; after \"could\" the form is \"have\", not \"had\"; and \"can have\" doesn't express an imaginary past.",
      ),
      tr(
        "Si hubiera estudiado más, podría haber aprobado el examen.",
        ["If I had studied {more|harder}, I could have passed the exam.", "If I had studied {more|harder}, I would have been able to pass the exam."],
        "«Podría haber aprobado» = \"could have passed\" (or \"would have been able to pass\"). Remember the participle \"passed\", not the base form: *could have pass.",
      ),
      dc(
        "If they had invited us, we would have gone.",
        "Two halves, two forms: \"had invited\" (if-clause) and \"would have gone\" (result). In fast speech you hear \"If they'd invited us, we'd have gone\".",
      ),
      lc(
        "If she'd taken the job, she'd have moved to Chicago.",
        [
          "She didn't take the job, and she didn't move.",
          "She took the job and moved to Chicago.",
          "She took the job but didn't move.",
          "She will probably take the job.",
        ],
        "A third conditional always means the opposite of what happened: she didn't take the job, so she didn't move. The first 'd is \"had\" (before \"taken\"), the second is \"would\" (before \"have\").",
        "What really happened?",
      ),
      fb(
        "If I had studied medicine, I ___ a doctor now.",
        "would be",
        "Si hubiera estudiado medicina, ahora [sería] médico.",
        "Past cause, present result: \"now\" tells you the result is in the present, so use would + base form, «sería» = \"would be\". *Would have been a doctor now mixes the times.",
      ),
      tr(
        "Si no hubiera perdido mi celular, ahora podría llamarte.",
        [
          "If I hadn't lost my {cell phone|phone|cellphone}, I could call you now.",
          "If I hadn't lost my {cell phone|phone|cellphone}, I would be able to call you now.",
          "If I hadn't lost my {cell phone|phone|cellphone}, I could call you.",
        ],
        "The loss is past (\"hadn't lost\"), the result is now (\"could call\"). «Podría» = \"could\", «podría haber» = \"could have\": here it's the first, because of «ahora».",
      ),
      tr(
        "Si no fuera tan tímido, habría hablado con ella en la fiesta.",
        "If I {weren't|wasn't} so shy, I would have {talked|spoken} {to|with} her at the party.",
        "A present fact about me (I am shy) explains a past result: if + past simple (\"weren't\"), then would have + participle. \"Were\" is the careful form; \"wasn't\" is common in speech. «Hablar con» is usually \"talk to\" or \"speak to\".",
      ),
      mc(
        "Ana didn't accept the job in Madrid, so she doesn't live in Spain now. Which sentence describes this?",
        [
          "If Ana had accepted the job, she would live in Spain now.",
          "If Ana accepted the job, she would have lived in Spain now.",
          "If Ana had accepted the job, she would have lived in Spain now.",
          "If Ana would have accepted the job, she would live in Spain now.",
        ],
        "Past cause (\"had accepted\") plus present result (\"would live... now\"). \"Would have lived... now\" clashes with \"now\", and \"would\" never goes in the if-clause.",
      ),
      wo(
        "He would still have his job if he hadn't lied",
        "Todavía tendría su trabajo si no hubiera mentido.",
        "Present result (\"would still have\") and past cause (\"if he hadn't lied\"). \"Still\" goes after \"would\": \"would still have\".",
        ["If he hadn't lied he would still have his job"],
      ),
      fb(
        "If Marta ___ allergic to cats, she would have adopted the kitten.",
        ["weren't", "wasn't"],
        "Si Marta [no fuera] alérgica a los gatos, habría adoptado al gatito.",
        "Her allergy is a permanent present fact, so the if-clause uses the past simple: \"weren't\" (or informal \"wasn't\"). The result is past: \"would have adopted\".",
      ),
      tr(
        "Si hubiera ahorrado más el año pasado, ahora no estaría preocupado por el dinero.",
        "If I had saved more last year, I wouldn't be worried about money {now|}.",
        "Past cause (\"had saved... last year\"), present result (\"wouldn't be worried... now\"). «Preocupado por» is \"worried about\", not *worried for.",
      ),
      lc(
        "If I spoke German, I would have applied for that job.",
        [
          "The speaker doesn't speak German.",
          "The speaker speaks German.",
          "The speaker applied for the job.",
          "The speaker is learning German now.",
        ],
        "\"If I spoke\" is an unreal present: the speaker doesn't speak German (now or ever), and so didn't apply for the job in the past.",
        "What is true?",
      ),
      dc(
        "If we hadn't missed the flight, we'd be in Lima now.",
        "Past cause (\"hadn't missed\"), present result (\"we'd be\" = \"we would be\"). \"Now\" confirms the present result.",
      ),
      sp(
        "If I hadn't moved to the city, I wouldn't have this job.",
        "A mixed conditional: the move was in the past, the job is now. «No tendría» = \"wouldn't have\" (present), not \"wouldn't have had\".",
        "\"Hadn't moved\": the -ed sounds like /d/, and \"wouldn't\" sounds like \"WOOD-nt\".",
        "Say in English: «Si no me hubiera mudado a la ciudad, no tendría este trabajo.»",
      ),
      mt(
        "Match each condition with its result.",
        [
          ["If you heat butter,", "it melts."],
          ["If it's sunny tomorrow,", "we'll go hiking."],
          ["If I had more free time,", "I'd learn to paint."],
          ["If you'd left on time,", "you wouldn't have missed the bus."],
          ["If I'd taken that job,", "I'd be rich now."],
        ],
        "Zero (present + present: a general truth), first (present + will: a real future), second (past + would: imaginary now), third (had + participle, would have + participle: imaginary past) and mixed (past perfect + would: past cause, present result).",
      ),
      fb(
        "If it ___ tomorrow, we'll cancel the barbecue.",
        "rains",
        "Si [llueve] mañana, cancelaremos la parrillada.",
        "A real future condition takes the present simple, just like «si llueve». *If it will rain is a typical mistake: \"will\" goes only in the result.",
      ),
      fb(
        "If I ___ you, I would ask for a raise.",
        ["were", "was"],
        "Si [fuera] tú, pediría un aumento.",
        "«Si fuera tú» = \"If I were you\". \"Were\" is the safe form for all persons in an unreal condition; \"was\" is informal. Never *If I would be you.",
      ),
      tr(
        "Si ganara la lotería, dejaría mi trabajo.",
        "If I won the lottery, I would {quit|leave} my job.",
        "An unlikely future: if + past simple (\"won\"), would + base form (\"would quit\"). «Ganara» is imperfect subjunctive, so English uses the past: not *If I win..., I would.",
      ),
      tr(
        "Si mezclas rojo y azul, obtienes morado.",
        "{If|When} you mix red and blue, you {get|make} purple.",
        "A general truth is a zero conditional: present + present. No \"will\" is needed because it is always true. \"When\" works too.",
      ),
      mc(
        "Which sentence is correct?",
        [
          "If I had more money, I would travel more.",
          "If I would have more money, I would travel more.",
          "If I have more money, I would travel more.",
          "If I had more money, I will travel more.",
        ],
        "An imaginary present is past + would: \"If I had..., I would travel\". Don't mix first and second conditionals (*If I have..., I would / *If I had..., I will), and never put \"would\" after \"if\".",
      ),
      wo(
        "We will stay home if it snows tonight",
        "Nos quedaremos en casa si nieva esta noche.",
        "First conditional: \"will\" in the result, the present simple after \"if\": \"if it snows\", not *if it will snow.",
        ["If it snows tonight we will stay home"],
      ),
      tr(
        "Si me hubieras llamado, te habría recogido en el aeropuerto.",
        "If you had called me, I would have picked you up {at|from} the airport.",
        "Third conditional: \"had called\" + \"would have picked up\". \"Pick up\" is a phrasal verb, and the pronoun goes in the middle: \"picked you up\", not *picked up you.",
      ),
      tr(
        "Si hubiera sabido que estabas enfermo, te habría visitado.",
        "If I had known {that |}you were {sick|ill}, I would have visited you.",
        "The classic trap is *If I would have known, copied from colloquial «si habría sabido». \"Were sick\" stays in the past simple, as in narrative tenses: «estabas enfermo» = \"you were sick\".",
      ),
      mc(
        "Which sentence is correct?",
        [
          "If I had seen the sign, I wouldn't have parked there.",
          "If I would have seen the sign, I wouldn't have parked there.",
          "If I had saw the sign, I wouldn't have parked there.",
          "If I had seen the sign, I wouldn't parked there.",
        ],
        "After \"had\" you need the participle (\"seen\", not *saw), the if-clause has no \"would\", and the result needs \"have\": \"wouldn't have parked\".",
      ),
      fb(
        "The meeting ran late. If it hadn't run late, I ___ the 6:15 train.",
        "would have caught",
        "La reunión se alargó. Si no se hubiera alargado, [habría tomado] el tren de las 6:15.",
        "«Habría tomado» = \"would have caught\": would have + participle. \"Catch\" is irregular: catch, caught, caught. Not *would have catched.",
      ),
      tr(
        "Si no hubiéramos vendido el carro, ahora no tendríamos que tomar el autobús.",
        "If we hadn't sold the car, we wouldn't have to take the bus {now|}.",
        "Mixed: past cause (\"hadn't sold\"), present result. «No tendríamos que» = \"wouldn't have to\" (present). *Wouldn't have had to take would put the result in the past.",
      ),
      dc(
        "If I'd had more time, I'd have checked the report twice.",
        "\"I'd had\" = \"I had had\" (past perfect of \"have\", «hubiera tenido»); \"I'd have checked\" = \"I would have checked\". Yes, \"had had\" is correct English.",
      ),
      sp(
        "If you had asked me, I would have told you the truth.",
        "If-clause: \"had asked\". Result: \"would have told\". The Spanish «si me hubieras preguntado, te hubiera dicho» uses «hubiera» twice, but English never does.",
        "In natural speech: \"If you'd asked me, I'd've told you\", with a weak \"have\".",
        "Say in English: «Si me hubieras preguntado, te habría dicho la verdad.»",
      ),
      tr(
        "Si lo hubiera visto, te lo habría dicho.",
        ["If I had seen it, I would have told you.", "I would have told you if I had seen it."],
        "«Lo... te lo» become \"it... you\": English doesn't repeat the object in the result. And again: \"had seen\" after \"if\", never *would have seen.",
      ),
    ],
  ),
  // ---------------------------------------------------------------------
  // Drill 2. Unless, as long as, in case, otherwise; fixing conditional
  // errors; facts into conditionals; formal inversion
  // ---------------------------------------------------------------------
  lesson(
    2,
    "u05-conditional-linkers-inversion",
    "Unless, In Case and Formal Conditionals",
    "Set conditions with unless, as long as, provided that and in case, turn facts into conditionals, and recognize formal forms like Had I known and Should you need.",
    "Recap: other ways to say if",
    [
      "\"Unless\" means \"if not\", so the verb after it is affirmative: \"unless you hurry\", never *unless you don't hurry. \"As long as\" and \"provided (that)\" mean «siempre que»; \"in case\" means «por si», a precaution. All of them take the present for the future.",
      "To turn a fact into a conditional, flip positive and negative: \"I missed the bus\" becomes \"If I hadn't missed the bus\". In formal English, \"if\" can disappear: \"Had I known\" = \"If I had known\", \"Should you need help\" = \"If you need help\".",
    ],
    [
      ["We'll eat outside unless it gets too cold.", "Comeremos afuera a menos que haga demasiado frío."],
      ["You can borrow my laptop as long as you return it by Friday.", "Puedes usar mi computadora siempre que me la devuelvas antes del viernes."],
      ["Take some cash in case the card doesn't work.", "Lleva algo de efectivo por si la tarjeta no funciona."],
      ["Should you have any questions, please contact our office.", "Si tiene alguna pregunta, comuníquese con nuestra oficina."],
    ],
    [
      fb(
        "I won't sign the contract ___ my lawyer reads it first.",
        "unless",
        "No firmaré el contrato [a menos que] mi abogado lo lea primero.",
        "«A menos que» = \"unless\" = \"if not\". English uses the present simple after it (\"reads\"), not a subjunctive and not \"will read\".",
      ),
      mc(
        "Which sentence means \"If you don't book a table, we won't get in\"?",
        [
          "We won't get in unless you book a table.",
          "We won't get in unless you don't book a table.",
          "We won't get in in case you book a table.",
          "We won't get in unless you will book a table.",
        ],
        "\"Unless\" already contains \"not\", so the verb is affirmative: \"unless you book\". *Unless you don't book is a double negative, \"in case\" means «por si», and no \"will\" after \"unless\".",
      ),
      tr(
        "No vas a mejorar a menos que practiques todos los días.",
        "You {won't|aren't going to} {improve|get better} unless you practice every day.",
        "\"Unless you practice\": affirmative and in the present. Spanish uses the subjunctive «practiques», English the plain present. (British spelling: \"practise\".)",
      ),
      fb(
        "You can use the car ___ you fill up the tank afterwards.",
        ["as long as", "provided", "provided that", "providing", "so long as"],
        "Puedes usar el carro [siempre que] llenes el tanque después.",
        "«Siempre que» with the meaning «con tal de que» is \"as long as\" or \"provided (that)\". Not *always that: that's a word-for-word translation that English speakers don't understand.",
      ),
      tr(
        "Te presto el dinero con tal de que me lo devuelvas el mes que viene.",
        "I'll lend you the money {as long as|provided|provided that|providing} you {pay me back|pay it back|return it|give it back} next month.",
        "«Con tal de que» = \"as long as\" or \"provided\". After it, the present simple for the future: \"you pay me back\", not *you will pay me back.",
      ),
      fb(
        "Bring a sweater ___ it gets cold at night.",
        "in case",
        "Lleva un suéter [por si] hace frío en la noche.",
        "«Por si» is \"in case\": you take the sweater now as a precaution. \"If it gets cold\" would mean you only bring it when it's cold, which makes no sense here.",
      ),
      mc(
        "«Si hay un incendio, use las escaleras.» Which is the right translation?",
        [
          "If there's a fire, use the stairs.",
          "In case there's a fire, use the stairs.",
          "Unless there's a fire, use the stairs.",
          "If there will be a fire, use the stairs.",
        ],
        "You use the stairs only when there is a fire, so this is a condition: \"if\". \"In case\" would mean using the stairs now as a precaution. Notices also say \"In case of fire\" + noun.",
      ),
      tr(
        "Guardé una copia del archivo por si se borraba el original.",
        "I {saved|kept} a copy of the file in case the original {got deleted|was deleted}.",
        "\"In case\" in the past is followed by the past simple: \"in case the original got deleted\". It explains a precaution you took.",
      ),
      tr(
        "Apúrate; si no, vamos a llegar tarde.",
        ["Hurry up, otherwise we'll be late.", "Hurry up or we'll be late.", "Hurry up, or else we'll be late.", "Hurry up, otherwise we're going to be late.", "Hurry up or we're going to be late."],
        "«Si no» at the start of a new clause is \"otherwise\" (or \"or\" / \"or else\"). *Hurry up, if not we'll be late is a literal translation that sounds wrong.",
      ),
      wo(
        "You can come with us as long as you are ready by eight",
        "Puedes venir con nosotros siempre que estés listo para las ocho.",
        "\"As long as\" introduces the condition, with the present simple: \"as long as you are ready\".",
        ["As long as you are ready by eight you can come with us"],
      ),
      lc(
        "I'll take my umbrella in case it rains.",
        [
          "The speaker will take the umbrella now, rain or no rain.",
          "The speaker will only take the umbrella if it's raining.",
          "The speaker won't take an umbrella.",
          "It is raining now.",
        ],
        "\"In case\" = a precaution: the speaker takes the umbrella anyway, because rain is possible.",
        "What does the speaker mean?",
      ),
      mc(
        "Which sentence is correct?",
        [
          "If you need help with the form, call me.",
          "If you will need help with the form, call me.",
          "If you would need help with the form, call me.",
          "If you needed help with the form, call me.",
        ],
        "A real future condition takes the present simple after \"if\": \"If you need help\". *If you will need comes from thinking about the future; Spanish says «si necesitas» too.",
      ),
      fb(
        "If I had seen the ad earlier, I would have ___ to the job fair.",
        "gone",
        "Si hubiera visto el anuncio antes, habría [ido] a la feria de empleo.",
        "After \"would have\" use the past participle: \"gone\", not the past simple *went. Same with \"seen\", \"done\", \"written\".",
      ),
      mc(
        "Which sentence is correct?",
        [
          "You won't get a seat unless you arrive early.",
          "You won't get a seat unless you don't arrive early.",
          "You won't get a seat unless you will arrive early.",
          "You won't get a seat in case you arrive early.",
        ],
        "\"Unless\" + affirmative present: \"unless you arrive\". No double negative, no \"will\", and \"in case\" doesn't mean «a menos que».",
      ),
      tr(
        "Si hubiera tomado el otro camino, habría llegado a tiempo.",
        "If I had taken the other {road|route|way}, I would have {arrived|gotten there|been there} on time.",
        "Two classic errors to avoid: *If I would have taken and *would have arrive. If-clause: \"had taken\" (participle of \"take\"); result: \"would have arrived\".",
      ),
      tr(
        "Si hubiera hecho la tarea anoche, ahora no estaría estresado.",
        "If I had done the homework last night, I wouldn't be stressed {now|}.",
        "The time trap: the homework was last night (past perfect), the stress is now (\"wouldn't be\"). *Wouldn't have been stressed now mixes up the result. «Hacer la tarea» = \"do the homework\", not *make.",
      ),
      fb(
        "Fact: I didn't charge my phone, so it died. Conditional: If I ___ my phone, it wouldn't have died.",
        "had charged",
        "Si [hubiera cargado] el celular, no se habría apagado.",
        "Flip the fact: \"I didn't charge\" (negative) becomes \"If I had charged\" (positive), in the past perfect.",
      ),
      fb(
        "Fact: She drank too much coffee, so she couldn't sleep. Conditional: If she hadn't drunk so much coffee, she ___ to sleep.",
        "would have been able",
        "Si no hubiera tomado tanto café, [habría podido] dormir.",
        "The negative \"couldn't sleep\" becomes positive: \"would have been able to sleep\". \"Too much\" becomes \"so much\" in the imaginary version.",
      ),
      tr(
        "Perdí el autobús porque me quedé dormido. Si no me hubiera quedado dormido, no lo habría perdido.",
        "I missed the bus because I overslept. If I hadn't overslept, I wouldn't have missed {it|the bus}.",
        "With \"because\", the cause is the part after \"because\" (\"I overslept\"). Flip it into the if-clause (\"hadn't overslept\") and flip the result (\"wouldn't have missed\").",
      ),
      wo(
        "If the store had been open we would have bought some bread",
        "Si la tienda hubiera estado abierta, habríamos comprado pan.",
        "Fact: the store was closed, so we didn't buy bread. The flip: \"had been open\", \"would have bought\".",
        ["We would have bought some bread if the store had been open"],
      ),
      dc(
        "If you hadn't reminded me, I would have forgotten the meeting.",
        "\"Hadn't reminded\" (you did remind me) and \"would have forgotten\" (I didn't forget). The participle of \"forget\" is \"forgotten\".",
      ),
      mc(
        "What does \"Had I known about the strike, I would have taken the train\" mean?",
        [
          "If I had known about the strike, I would have taken the train.",
          "I knew about the strike, so I took the train.",
          "I have known about the strike for a long time.",
          "If I know about a strike, I take the train.",
        ],
        "\"Had I known\" is the formal inversion of \"If I had known\" («de haberlo sabido»). The meaning doesn't change: I didn't know, so I didn't take the train.",
      ),
      fb(
        "___ you need any further information, please let us know.",
        ["Should", "If"],
        "[Si] necesita más información, avísenos.",
        "In formal emails, \"Should you need\" = \"If you need\". The verb after \"should\" is the base form: \"Should you need\", not *Should you needed.",
      ),
      tr(
        "De haberlo sabido, habría venido antes.",
        ["Had I known, I would have come {earlier|sooner}.", "If I had known, I would have come {earlier|sooner}."],
        "«De haberlo sabido» = \"Had I known\" (formal) or \"If I had known\" (everyday). Spanish leaves out the subject; English needs one: \"I\".",
      ),
      mc(
        "Which formal sentence is correct?",
        [
          "Had we not received your payment, the order would have been canceled.",
          "Hadn't we received your payment, the order would have been canceled.",
          "Had we not receive your payment, the order would have been canceled.",
          "If had we not received your payment, the order would have been canceled.",
        ],
        "In negative inversion, \"not\" goes after the subject and is never contracted: \"Had we not received\". You don't keep \"if\" and invert at the same time.",
      ),
      lc(
        "Were it not for your help, I would never have finished the project.",
        [
          "Without your help, I would never have finished the project.",
          "Your help wasn't necessary for the project.",
          "I finished the project alone.",
          "I will need your help with the project.",
        ],
        "\"Were it not for\" / \"Had it not been for\" = «si no fuera por», «de no haber sido por»: without your help.",
        "What does the speaker mean?",
      ),
      tr(
        "Si no hubiera sido por el GPS, nos habríamos perdido.",
        ["If it hadn't been for the GPS, we would have gotten lost.", "Had it not been for the GPS, we would have gotten lost.", "If it hadn't been for the GPS, we would have got lost.", "Had it not been for the GPS, we would have got lost."],
        "«Si no hubiera sido por» = \"If it hadn't been for\" or, formally, \"Had it not been for\". \"Get lost\" = «perderse»; American \"gotten\", British \"got\".",
      ),
      sp(
        "Should you have any problems, call the front desk.",
        "\"Should you have\" = \"If you have\": a formal, polite condition typical of hotels and offices.",
        "Stress \"problems\" and \"front desk\"; \"should you\" is quick and light.",
        "Say in English (formal): «Si tiene algún problema, llame a la recepción.»",
      ),
      tr(
        "Te dejo usar mi bici siempre que la cuides, y si no, te la voy a pedir de vuelta.",
        ["I'll let you use my {bike|bicycle} as long as you take care of it, otherwise I'll ask for it back.", "I'll let you use my {bike|bicycle} as long as you take care of it, or I'll ask for it back.", "I'll let you use my {bike|bicycle} provided you take care of it, otherwise I'll ask for it back."],
        "\"As long as\" + present (\"you take care of it\"), then \"otherwise\" for «si no». Two traps avoided: *as long as you will take care and *if not I'll ask.",
      ),
      mc(
        "«Llámame en caso de que llegues tarde.» You will only call if you're late. Which is best?",
        [
          "Call me if you're going to be late.",
          "Call me in case you're going to be late.",
          "Call me unless you're going to be late.",
          "Call me in case you will be late.",
        ],
        "«En caso de que» often just means \"if\": the call depends on being late. \"In case\" would mean calling now as a precaution, and *in case you will be adds a forbidden \"will\".",
      ),
      tr(
        "Si no hubieras olvidado las llaves, no estaríamos esperando afuera.",
        "If you hadn't forgotten {the|your} keys, we wouldn't be waiting outside.",
        "Mixed conditional with a continuous result: past cause (\"hadn't forgotten\"), present situation in progress (\"wouldn't be waiting\"). Participle: \"forgotten\", not *forgot.",
      ),
      dc(
        "Unless the weather improves, the flight will be canceled.",
        "\"Unless the weather improves\" = \"if the weather doesn't improve\". Present simple after \"unless\", \"will\" only in the result. British spelling: \"cancelled\".",
      ),
      sp(
        "If I had known you were coming, I would have cooked something.",
        "\"Had known\" after \"if\", \"would have cooked\" in the result, and \"you were coming\" for the plan you didn't know about.",
        "Fast speech: \"If I'd known you were coming, I'd've cooked something.\"",
        "Say in English: «Si hubiera sabido que venías, habría cocinado algo.»",
      ),
      wo(
        "Take your passport in case they ask for ID",
        "Lleva tu pasaporte por si te piden una identificación.",
        "\"In case\" = «por si»: take it now, because they might ask. Present simple after \"in case\".",
      ),
    ],
  ),
  // ---------------------------------------------------------------------
  // Drill 3. What-if questions, chains and passives in past conditionals,
  // and the whole unit mixed
  // ---------------------------------------------------------------------
  lesson(
    3,
    "u05-conditionals-mixed",
    "All Conditionals Mixed",
    "Ask what-if questions, build chains of past hypotheticals (also in the passive), and choose confidently between every conditional and linker in the unit.",
    "Recap: questions, chains and the passive",
    [
      "What-if questions keep the same forms: \"What would you have done if you had lost your passport?\", \"Where would you be living now if you hadn't moved?\" In speech, \"would have\" shrinks to \"would've\" or even \"I'd've\", but you write \"would have\".",
      "In a chain, each result can lead to the next: \"If the bridge hadn't been built, the town would have stayed small, and it wouldn't have a university today.\" Passive past conditionals use \"had (not) been\" + participle and \"would have been\" + participle.",
    ],
    [
      ["What would you have studied if you hadn't chosen law?", "¿Qué habrías estudiado si no hubieras elegido Derecho?"],
      ["If the vaccine hadn't been developed so fast, many more people would have died.", "Si la vacuna no se hubiera desarrollado tan rápido, habrían muerto muchas más personas."],
      ["If there hadn't been a strike, the shipment would have arrived on time.", "Si no hubiera habido una huelga, el envío habría llegado a tiempo."],
      ["I'll help you move on Saturday, unless my boss needs me.", "Te ayudo con la mudanza el sábado, a menos que mi jefe me necesite."],
    ],
    [
      fb(
        "What ___ if you had lost your passport on that trip?",
        "would you have done",
        "¿Qué [habrías hecho] si hubieras perdido el pasaporte en ese viaje?",
        "A what-if question about the past: question word + \"would\" + subject + \"have\" + participle. Not *what you would have done in a direct question.",
      ),
      tr(
        "¿Dónde vivirías ahora si no te hubieras mudado a Toronto?",
        ["Where would you {be living|live} now if you hadn't moved to Toronto?", "Where would you {be living|live} if you hadn't moved to Toronto?"],
        "Mixed question: present result (\"would you be living now\") and past cause (\"if you hadn't moved\"). «Vivirías» is present, so not *would you have lived.",
      ),
      wo(
        "What would you have done in my place",
        "¿Qué habrías hecho tú en mi lugar?",
        "Direct question order: \"What would you have done\". «En mi lugar» = \"in my place\" (or \"in my shoes\").",
      ),
      lc(
        "I'd've told you, but you'd already left.",
        [
          "I would have told you, but you had already left.",
          "I had told you, but you would already leave.",
          "I would tell you, but you would leave.",
          "I told you, and then you left.",
        ],
        "\"I'd've\" is the spoken form of \"I would have\"; \"you'd already left\" is \"you had already left\" (\"'d\" + participle = had).",
        "What did the speaker say?",
      ),
      mc(
        "Which spelling is correct in writing?",
        [
          "We would have won if Diego hadn't been injured.",
          "We would of won if Diego hadn't been injured.",
          "We would have win if Diego hadn't been injured.",
          "We would had won if Diego hadn't been injured.",
        ],
        "The weak sound /əv/ is \"have\", never *of. After \"would have\" use the participle \"won\", and \"have\" never changes to \"had\" after a modal.",
      ),
      sp(
        "If you hadn't called me, I would've missed the whole thing.",
        "\"Would've\" is a normal written contraction; the spoken form is very weak: \"WOOD-uv\".",
        "Don't pronounce \"have\" fully: \"I would've\" = /aɪ wʊdəv/.",
        "Say in English: «Si no me hubieras llamado, me habría perdido todo.»",
      ),
      fb(
        "If penicillin ___ discovered, millions of people would have died.",
        "hadn't been",
        "Si la penicilina [no se hubiera] descubierto, habrían muerto millones de personas.",
        "Penicillin didn't discover anything, it was discovered: passive past perfect \"hadn't been discovered\". *If penicillin hadn't discovered changes the meaning completely.",
      ),
      tr(
        "Si no se hubiera inventado la imprenta, los libros seguirían siendo muy caros.",
        "If the printing press hadn't been invented, books would still be very expensive.",
        "Spanish «se» often becomes an English passive: \"hadn't been invented\". The result is still true today, so \"would still be\" (mixed).",
      ),
      fb(
        "If the bridge had been finished on time, the new road ___ last year.",
        "would have been opened",
        "Si el puente se hubiera terminado a tiempo, la nueva carretera [se habría abierto] el año pasado.",
        "Passive result: would have been + participle. The order is fixed: \"would have been opened\", never *would been have opened.",
      ),
      tr(
        "Si no hubiera habido tanto tráfico, habríamos llegado antes de la cena.",
        "If there hadn't been so much traffic, we would have {arrived|gotten there|got there} before dinner.",
        "«Hubiera habido» = \"there had been\", so \"If there hadn't been\". Uncountable \"traffic\" takes \"so much\".",
      ),
      tr(
        "Si no se hubiera cancelado el vuelo, habríamos estado en la boda.",
        ["If the flight hadn't been canceled, we would have been at the wedding.", "If the flight hadn't been cancelled, we would have been at the wedding."],
        "«Se hubiera cancelado» is a passive idea: \"hadn't been canceled\". The result: «habríamos estado» = \"would have been\".",
      ),
      dc(
        "If she hadn't won the scholarship, she couldn't have gone to college, and she wouldn't be an engineer now.",
        "A chain: third conditional (\"couldn't have gone\") and then a present result (\"wouldn't be... now\"), without repeating \"if\".",
      ),
      wo(
        "If I had stayed in Chile I would be working at my uncle's company now",
        "Si me hubiera quedado en Chile, ahora estaría trabajando en la empresa de mi tío.",
        "Mixed conditional with a continuous present result: \"would be working... now\".",
        ["If I had stayed in Chile I would now be working at my uncle's company"],
      ),
      mc(
        "Chain: \"If I hadn't overslept, I wouldn't have been late. If I hadn't been late, ___.\" Which ending is correct?",
        [
          "my boss wouldn't have been angry",
          "my boss won't be angry",
          "my boss wouldn't be angry yesterday",
          "my boss hadn't been angry",
        ],
        "Each link of a past chain is another third conditional: \"wouldn't have been angry\". \"Yesterday\" can't go with \"wouldn't be\", and the result never takes the past perfect alone.",
      ),
      mt(
        "Match each Spanish linker with its English equivalent.",
        [
          ["a menos que", "unless"],
          ["siempre que (con tal de que)", "as long as"],
          ["por si", "in case"],
          ["de lo contrario", "otherwise"],
          ["de haberlo sabido", "had I known"],
        ],
        "\"Unless\" = if not; \"as long as\" / \"provided\" = a condition that must be met; \"in case\" = a precaution; \"otherwise\" = «si no» at the start of a clause; \"had I known\" = formal \"if I had known\".",
      ),
      tr(
        "Si el agua llega a 100 grados, hierve.",
        "{If|When} water {reaches|gets to} 100 degrees, it boils.",
        "A scientific fact is a zero conditional: present + present. No \"will\" is needed.",
      ),
      fb(
        "If you ___ me your email, I'll send you the photos tonight.",
        "give",
        "Si me [das] tu correo, te mando las fotos esta noche.",
        "First conditional: present after \"if\" (\"give\"), \"will\" in the result. Not *will give.",
      ),
      tr(
        "Si tuviera un jardín, plantaría tomates.",
        "If I had a {garden|yard}, I would {plant|grow} tomatoes.",
        "Unreal present: past simple (\"had\") + would. «Tuviera» is imperfect subjunctive, so English uses the past, not *If I have.",
      ),
      mc(
        "«Si hubiera salido a tiempo, ahora estaría aquí.» Which translation is correct?",
        [
          "If he had left on time, he would be here now.",
          "If he left on time, he would have been here now.",
          "If he would have left on time, he would be here now.",
          "If he had left on time, he will be here now.",
        ],
        "Past cause, present result: \"had left\" + \"would be... now\". The Spanish tenses map exactly: «hubiera salido» = \"had left\", «estaría» = \"would be\".",
      ),
      tr(
        "Vamos a cancelar el picnic a menos que deje de llover.",
        "We{'re going to| will} cancel the picnic unless it stops raining.",
        "\"Unless it stops\": affirmative present. *Unless it doesn't stop would mean the opposite, and *unless it will stop is not possible.",
      ),
      lc(
        "Provided the tickets aren't too expensive, we'll go to the concert.",
        [
          "They will go if the tickets aren't too expensive.",
          "They won't go because the tickets are expensive.",
          "They went to the concert last week.",
          "They will go even if the tickets are expensive.",
        ],
        "\"Provided\" = \"as long as\", «siempre que»: the cheap tickets are the condition for going.",
        "What does the speaker mean?",
      ),
      tr(
        "Si me hubieras dicho que no tenías dinero, te habría prestado.",
        "If you had told me {that |}you didn't have {any |}money, I would have lent you some.",
        "\"Had told\" + \"would have lent\". «Prestar» = \"lend\" (lent, lent), not \"borrow\". English needs an object: \"lent you some\" (or \"lent you money\").",
      ),
      fb(
        "Should you ___ to cancel your booking, please call us 24 hours in advance.",
        "wish",
        "Si [desea] cancelar su reservación, llámenos con 24 horas de anticipación.",
        "\"Should you\" + base form = formal \"If you\": \"Should you wish\". Not *Should you wished or *Should you to wish.",
      ),
      tr(
        "Si fuera tú, hablaría con el gerente.",
        "If I {were|was} you, I would {talk|speak} to the manager.",
        "«Si fuera tú» = \"If I were you\". The result is \"would\", never *will: the situation is imaginary.",
      ),
      dc(
        "Had it not been for the storm, the boat would have arrived yesterday.",
        "\"Had it not been for\" = «de no haber sido por» (formal). \"Not\" goes after \"it\" and isn't contracted.",
      ),
      mc(
        "Which sentence is correct?",
        [
          "I'll call you as soon as I land, unless the battery dies.",
          "I'll call you as soon as I will land, unless the battery dies.",
          "I'll call you as soon as I land, unless the battery won't die.",
          "I'll call you as soon as I land, unless the battery doesn't die.",
        ],
        "Time clauses (\"as soon as I land\") and \"unless\" both take the present simple for the future. No \"will\", and no negative after \"unless\".",
      ),
      tr(
        "Si hubiera revisado el pronóstico, habría llevado un paraguas.",
        "If I had checked the {forecast|weather forecast}, I would have {taken|brought} an umbrella.",
        "\"Had checked\" + \"would have taken\". «Llevar» here is \"take\" or \"bring\" (participles \"taken\", \"brought\"), not *would have took.",
      ),
      fb(
        "If I ___ so tired, I would have gone out with you last night.",
        ["weren't", "wasn't"],
        "Si [no estuviera] tan cansado, habría salido con ustedes anoche.",
        "Present state (I'm always tired these days) with a past result: \"If I weren't so tired... would have gone\". If you mean only last night, \"If I hadn't been so tired\" also works, but the blank is the present form.",
      ),
      tr(
        "Habríamos ganado el partido si Tomás no se hubiera lesionado.",
        "We would have won the {game|match} if Tomas hadn't {gotten|been|got} injured.",
        "Result first, no comma. \"Hadn't gotten injured\" or \"hadn't been injured\" = «no se hubiera lesionado». Not *if Tomas wouldn't have gotten injured.",
      ),
      wo(
        "Had I known about the delay I would have stayed at home",
        "De haber sabido lo del retraso, me habría quedado en casa.",
        "Formal inversion: \"Had I known\" replaces \"If I had known\".",
      ),
      sp(
        "If I had taken that job in Miami, I would be living by the beach now.",
        "Past cause (\"had taken\"), present result in progress (\"would be living... now\").",
        "Link the words: \"I'd be living\" sounds like one unit.",
        "Say in English: «Si hubiera aceptado ese trabajo en Miami, ahora estaría viviendo junto a la playa.»",
      ),
      tr(
        "Lleva el cargador por si te quedas sin batería; si no, no vas a poder llamarnos.",
        ["Take the charger in case your battery runs out, otherwise you won't be able to call us.", "Take the charger in case your battery runs out, or you won't be able to call us.", "Take the charger in case you run out of battery, otherwise you won't be able to call us.", "Take the charger in case your battery dies, otherwise you won't be able to call us."],
        "\"In case\" for «por si» (a precaution) + present simple, then \"otherwise\" for «si no». *If not you won't be able is a word-for-word translation.",
      ),
    ],
  ),
];
