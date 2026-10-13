// Synced from cheneygross-afk/lengo:src/lib/lessons/en-b1-u04-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise, Lesson } from "./types";

// Required drill lessons for EN-B1 unit u04 (used to, would, be/get used to): a short recap, then graded practice.

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
  slug: `en-b1-used-to-unit-drill-${n}`,
  level: "EN-B1",
  number: n,
  title: `Drill: ${title}`,
  summary,
  duration: `${Math.round((exercises.reduce((s, e) => s + SECONDS[e.type], 0) + 40) / 60)} min`,
  sections: [{ heading, body, examples: examples.map(([es, en]) => ({ es, en })) }],
  exercises,
});

export const EN_B1_U04_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. Used to, didn't use to, usually, not anymore, would
  // ---------------------------------------------------------------------
  lesson(
    1,
    "Used To, Would & Usually",
    "You will be able to talk about past habits and states with \"used to\" and \"would\", form negatives and questions with \"use to\", and say «suelo» correctly with \"usually\".",
    "Recap: true before, not true now",
    [
      "\"Used to\" + base verb is for past habits and states that are not true now: \"I used to live in Lima\", \"There used to be a park here\". It never changes (*she uses to), and after \"did\" it loses the -d: \"I didn't use to\", \"Did you use to...?\". For present habits («suelo»), use \"usually\" + present simple, never *I use to.",
      "\"Would\" + base verb also tells repeated past actions in a story (\"Every summer we would go to the beach\"), but never states: *I would have a dog sounds conditional. For single events or a number of times, use the past simple: \"I went to Cuba twice\".",
    ],
    [
      ["My uncle used to drive a truck.", "Mi tío antes manejaba un camión."],
      ["Did you use to walk to school?", "¿Ibas caminando a la escuela?"],
      ["I usually go to bed at eleven.", "Suelo acostarme a las once."],
      ["On Saturdays my grandma would make soup for everyone.", "Los sábados mi abuela hacía sopa para todos."],
    ],
    [
      fb("My dad ___ a motorcycle, but he sold it.", ["used to have", "used to ride"], "Mi papá [tenía] una moto, pero la vendió.",
        "A past state that is no longer true = \"used to\" + base verb. Spanish uses the imperfect («tenía»); English has no single tense for it, and \"used to\" shows that it has changed."),
      fb("We ___ in a tiny apartment downtown.", "used to live", "[Antes vivíamos] en un departamento diminuto en el centro.",
        "«Antes + imperfecto» = \"used to\" + base verb. \"Live\" stays in the base form: never *used to lived or *used to living."),
      mc("Which sentence is correct?", [
        "She used to work at a bank.",
        "She uses to work at a bank.",
        "She used to worked at a bank.",
        "She use to work at a bank.",
      ], "\"Used to\" is the same for every person and has no present form: *she uses to is always wrong. The verb after it is the base form (\"work\")."),
      fb("There ___ a movie theater on this street.", "used to be", "[Antes había] un cine en esta calle.",
        "«Antes había» = \"there used to be\". Perfect for describing places that have changed."),
      tr("Antes no me gustaban las verduras.", ["I didn't use to like vegetables.", "I never used to like vegetables."],
        "Negative: \"didn't use to\" (no -d after \"did\", like \"I didn't go\"). \"Never used to\" is also very common; there's no \"did\", so the -d stays."),
      fb("___ play any sports at school?", "Did you use to", "[¿Practicabas] algún deporte en la escuela?",
        "Questions about past habits: \"Did you use to\" + base verb. After \"did\", it's \"use\", not *used."),
      tr("¿Dónde trabajabas antes?", ["Where did you use to work?", "Where did you work before?"],
        "\"Where did you use to work?\" asks about a past situation that has changed. The -d disappears after \"did\"."),
      mc("How do you say «Suelo almorzar en la oficina»?", [
        "I usually have lunch at the office.",
        "I use to have lunch at the office.",
        "I used to have lunch at the office.",
        "I am used to have lunch at the office.",
      ], "«Suelo» is a present habit: \"I usually\" + present simple. *I use to does not exist for present habits, and \"I used to have lunch\" means you don't do it anymore («solía»)."),
      tr("Normalmente hago las compras los sábados.", "I {usually|normally} {do the shopping|go shopping|go grocery shopping|buy groceries} on Saturdays.",
        "Present habit = present simple + \"usually\" or \"normally\", placed before the main verb."),
      mc("I ___ to Cuba twice.", ["went", "used to go", "use to go", "would go"],
        "A specific number of times (\"twice\") takes the past simple, never \"used to\" or \"would\": those are for habits without a count."),
      fb("When I was a teenager, I ___ to the gym every day.", ["used to go", "would go", "went"], "Cuando era adolescente, [iba] al gimnasio todos los días.",
        "A past habit: \"used to go\", \"would go\" (an action, so it's fine) or simply \"went\". \"Used to\" adds that you don't do it now."),
      tr("Viví en Chicago cuatro años.", "I lived in Chicago for four years.",
        "An exact length of time = past simple, not \"used to\": *I used to live in Chicago for four years sounds wrong. «Viví» (preterite) is always the past simple."),
      tr("Antes comía carne, pero ya no.", ["I used to eat meat, but I don't {anymore|any more}.", "I used to eat meat, but not {anymore|any more}."],
        "«Ya no» at the end = \"not... anymore\". In American English \"anymore\" is one word."),
      fb("She ___ works here. She moved to another company.", "no longer", "[Ya no] trabaja aquí. Se cambió a otra empresa.",
        "\"No longer\" goes before the main verb and is already negative: never *doesn't no longer."),
      mc("Which sentence is correct?", [
        "We don't see each other anymore.",
        "We don't no longer see each other.",
        "We no longer don't see each other.",
        "We don't see each other no more.",
      ], "Choose one negative: \"don't... anymore\" or \"no longer\". Two negatives together (*don't no longer, *don't... no more) are not standard English."),
      wo("This neighborhood used to be very dangerous.", "Este barrio antes era muy peligroso.",
        "Subject + \"used to\" + \"be\" + adjective: a past state that has changed."),
      tr("Antes había un mercado aquí; ahora hay un estacionamiento.", "There used to be a market here{;|,|.} {now|Now} there's a {parking lot|car park}.",
        "\"There used to be\" + the present \"there is\" shows the change. «Estacionamiento» is a \"parking lot\" in American English."),
      lc("I used it to open the bottle.", [
        "Lo usé para abrir la botella.",
        "Antes abría la botella.",
        "Solía abrir botellas.",
        "Estoy acostumbrado a abrir botellas.",
      ], "\"I used it to...\" is the verb \"use\" (utilizar), with a /z/ sound. The past habit \"used to\" sounds like \"YOOS-tuh\", with an /s/."),
      fb("Every summer my grandfather ___ us to the river.", ["would take", "used to take"], "Todos los veranos mi abuelo nos [llevaba] al río.",
        "A repeated action in a nostalgic story: \"would\" + base verb (or \"used to\"). It is often contracted: \"he'd take\"."),
      mc("When I was a kid, I ___ a cat called Tiger.", ["used to have", "would have", "use to have", "was having"],
        "\"Have\" (possession) is a state, so \"would\" is impossible: *I would have a cat means «tendría un gato». Use \"used to have\"."),
      tr("Los domingos mi mamá hacía panqueques.", "On Sundays my {mom|mother} {would make|used to make|made} pancakes.",
        "A repeated action in the past: \"would make\", \"used to make\" or \"made\". The Spanish imperfect («hacía») here is a habit, not an action in progress, so not *was making."),
      tr("De niño, era muy tímido.", ["When I was a {child|kid|boy}, I used to be very shy.", "When I was a {child|kid|boy}, I was very shy.", "As a {child|kid|boy}, I {used to be|was} very shy.", "I used to be very shy {when I was a child|as a child|when I was a kid|as a kid}."],
        "\"Be\" is a state, so \"used to be\" or \"was\", never *would be (that's «sería»)."),
      mc("What does \"On Fridays we would order pizza\" mean?", [
        "Los viernes pedíamos pizza.",
        "Los viernes pediríamos pizza.",
        "Los viernes vamos a pedir pizza.",
        "Los viernes estamos acostumbrados a pedir pizza.",
      ], "With a clear past habit (\"On Fridays\" in a story), \"would\" = the Spanish imperfect («pedíamos»), not the conditional."),
      lc("I would travel more if I had time.", [
        "Viajaría más si tuviera tiempo.",
        "Antes viajaba más cuando tenía tiempo.",
        "Viajo más cuando tengo tiempo.",
        "Solía viajar más que ahora.",
      ], "With \"if\" and no past time phrase, \"would\" is conditional: «viajaría». Past-habit \"would\" needs a past context like \"every summer\"."),
      wo("After school we would play in the street until dark.", "Después de clases jugábamos en la calle hasta que oscurecía.",
        "Time phrase first (\"After school\"), then \"would\" + base verb for the repeated action."),
      dc("My grandparents used to have a small farm near Oaxaca.",
        "\"Used to have\": a past state. The \"d\" of \"used\" is silent before \"to\", so you hear \"yoos-tuh\", but you must write \"used\"."),
      dc("We didn't use to have a car, so we walked everywhere.",
        "After \"didn't\", write \"use to\" (no -d). It sounds exactly like \"used to\", so the grammar tells you the spelling."),
      sp("I used to live in Quito, but I don't anymore.", "\"Used to\" + \"but I don't anymore\" contrasts then and now.",
        "Say \"used to\" as /ˈjuːstə/: \"YOOS-tuh\".", "Say it in English: Antes vivía en Quito, pero ya no."),
      sp("Every night my father would read us a story.", "\"Would\" for a repeated action in a childhood memory.",
        "In fast speech, \"my father'd read\" or a very weak \"would\": /wəd/.", "Say it in English: Todas las noches mi padre nos leía un cuento."),
      mt("Match each English form with its Spanish meaning.", [
        ["used to + verb", "solía / antes + imperfecto"],
        ["usually + present", "suelo + infinitivo"],
        ["not... anymore", "ya no (al final)"],
        ["no longer", "ya no (antes del verbo)"],
        ["there used to be", "antes había"],
      ], "The key contrast: «solía» = \"used to\", but «suelo» = \"usually\"."),
      tr("Antes jugaba al tenis, pero el año pasado me rompí la rodilla.", ["I used to play tennis, but last year I {broke|hurt|injured} my knee.", "I used to play tennis, but I {broke|hurt|injured} my knee last year."],
        "The habit takes \"used to\"; the single event with a date (\"last year\") takes the past simple. *I used to break my knee would mean it happened often."),
      tr("—¿Tu papá fumaba? —Sí, pero lo dejó hace diez años.", ["Did your {dad|father} use to smoke? Yes, {he did, |}but he {quit|stopped|gave up} ten years ago."],
        "Question with \"Did... use to\" (no -d). The single event (\"ten years ago\") is past simple. \"Quit, quit, quit\": the past is the same as the base form."),
      tr("Suelo despertarme a las seis, pero antes me levantaba a las nueve.", "I usually {wake up|get up} at six, but I used to {get up|wake up} at nine.",
        "The classic pair: «suelo» = \"usually\" (present), «antes + imperfecto» = \"used to\" (past). *I use to wake up at six is the trap."),
      fb("Did your parents ___ you to the beach?", "use to take", "¿Tus papás te [llevaban] a la playa?",
        "After \"did\", always \"use to\": *Did your parents used to take you? is a very common spelling mistake."),
    ],
  ),

  // ---------------------------------------------------------------------
  // Drill 2. Be used to, get used to, contrast, errors, home life + whole unit
  // ---------------------------------------------------------------------
  lesson(
    2,
    "Be Used To, Get Used To & Home Life",
    "You will be able to say «estoy acostumbrado» and «me estoy acostumbrando» with -ing, tell all three \"used to\" structures apart, and talk about chores and renting.",
    "Recap: used to, be used to, get used to",
    [
      "\"Be used to\" + noun or -ing = «estar acostumbrado a»: \"I'm used to the noise\", \"I'm used to working late\". \"Get used to\" + noun or -ing = «acostumbrarse», in any tense: \"I'm getting used to it\", \"You'll get used to it\", \"I've gotten used to it\". In both, \"to\" is a preposition, so the verb ends in -ing: never *I'm used to work.",
      "Compare: \"I used to work nights\" (antes), \"I'm used to working nights\" (estoy acostumbrado), \"I'm getting used to working nights\" (me estoy acostumbrando) and \"I usually work nights\" (suelo). Home words: do the laundry, do the dishes, take out the trash, furniture (uncountable), roommate, landlord, and a \"carpet\" is an «alfombra», not a «carpeta».",
    ],
    [
      ["She's used to working with children.", "Está acostumbrada a trabajar con niños."],
      ["I'm getting used to the new keyboard.", "Me estoy acostumbrando al teclado nuevo."],
      ["It took us a month to get used to the time difference.", "Tardamos un mes en acostumbrarnos a la diferencia horaria."],
      ["Whose turn is it to take out the trash?", "¿A quién le toca sacar la basura?"],
    ],
    [
      fb("I'm used to ___ the subway every day.", ["taking", "riding"], "Estoy acostumbrado a [tomar] el metro todos los días.",
        "After \"be used to\", a verb takes -ing, because \"to\" is a preposition. Spanish uses the infinitive («tomar»), which is why *I'm used to take is so common."),
      fb("She ___ to long working hours.", "is used", "[Está acostumbrada] a las jornadas largas.",
        "\"Be used to\" + noun. \"Used\" works like an adjective with no gender: «acostumbrado» and «acostumbrada» are both \"used to\"."),
      mc("Which sentence is correct?", [
        "I'm used to working at night.",
        "I'm used to work at night.",
        "I used to working at night.",
        "I'm use to working at night.",
      ], "\"Be\" + \"used to\" + -ing. *I'm used to work forgets the -ing; *I used to working mixes the past-habit structure with -ing."),
      tr("No estoy acostumbrado a manejar con tanto tráfico.", "I'm not used to driving {in|with} {so much|this much} traffic.",
        "The negative is made with \"be\": \"I'm not used to\" + -ing. «Manejar» = \"drive\", so \"driving\"."),
      tr("¿Estás acostumbrada a hablar inglés en el trabajo?", "Are you used to speaking English at work?",
        "Questions are made with \"be\": \"Are you used to\" + -ing? Don't use \"do\": *Do you used to speaking is wrong."),
      fb("At first, we ___ used to the noise.", "weren't", "Al principio, [no estábamos] acostumbrados al ruido.",
        "\"Be\" can be in any tense: \"we weren't used to\" = «no estábamos acostumbrados»."),
      fb("I'm slowly ___ used to my new glasses.", "getting", "Poco a poco [me estoy acostumbrando] a mis nuevos lentes.",
        "The process of adapting = \"get used to\". Present continuous for a process happening now: \"I'm getting used to\". English has no reflexive: never *I'm getting used myself."),
      tr("Me acostumbré rápido al horario nuevo.", ["I got used to the new {schedule|timetable} {quickly|fast}.", "I quickly got used to the new {schedule|timetable}."],
        "A completed process = \"got used to\" (past simple of \"get\"). «Me acostumbré» has a reflexive «me», but English doesn't."),
      tr("Nunca me voy a acostumbrar a levantarme a las cinco.", ["I'll never get used to {getting up|waking up} at five{ a.m.| o'clock|}.", "I'm never going to get used to {getting up|waking up} at five{ a.m.| o'clock|}."],
        "\"I'll never get used to\" + -ing: the verb after \"to\" is \"getting up\", not *get up."),
      tr("Me he acostumbrado a trabajar con audífonos.", ["I've gotten used to working with headphones.", "I've got used to working with headphones."],
        "Present perfect of \"get used to\": \"I've gotten used to\" (American) or \"I've got used to\" (British) + -ing."),
      mc("Which sentence is correct?", [
        "She's getting used to the new city.",
        "She's getting used herself to the new city.",
        "She's getting use to the new city.",
        "She gets used herself to the new city.",
      ], "No reflexive pronoun in English: the person is already the subject. And it's always \"used\", with -d, in \"get used to\"."),
      fb("It took my mom months to ___ used to her new phone.", "get", "A mi mamá le tomó meses [acostumbrarse] a su nuevo celular.",
        "\"It took (someone) + time + to get used to\" = «le costó / le tomó... acostumbrarse». \"Get\" is the verb of change."),
      mt("Match each sentence with its meaning.", [
        ["I used to work nights.", "Antes trabajaba de noche."],
        ["I'm used to working nights.", "Estoy acostumbrado a trabajar de noche."],
        ["I'm getting used to working nights.", "Me estoy acostumbrando a trabajar de noche."],
        ["I usually work nights.", "Normalmente trabajo de noche."],
      ], "No \"be\" + base verb = past habit. \"Be\" + -ing = accustomed. \"Get\" + -ing = adapting. \"Usually\" = present habit."),
      mc("In \"She's used to driving on the left\", what does \"'s\" stand for?", ["is", "has", "was", "does"],
        "In \"be used to\", \"'s\" is always \"is\": \"She is used to driving\". It is never \"has\" in this structure."),
      lc("My brother used to drive a taxi.", [
        "Mi hermano antes manejaba un taxi.",
        "Mi hermano está acostumbrado a manejar un taxi.",
        "Mi hermano se está acostumbrando a manejar un taxi.",
        "Mi hermano suele manejar un taxi.",
      ], "No \"be\", base verb \"drive\" = a past habit that has changed: «antes manejaba»."),
      lc("My sister's getting used to living in the city.", [
        "Mi hermana se está acostumbrando a vivir en la ciudad.",
        "Mi hermana antes vivía en la ciudad.",
        "Mi hermana está acostumbrada a vivir en la ciudad.",
        "Mi hermana suele vivir en la ciudad.",
      ], "\"Getting used to\" + -ing = the process of adapting now: «se está acostumbrando»."),
      tr("Antes cocinaba para seis personas; ahora me estoy acostumbrando a cocinar para dos.", "I used to cook for six people{;|,|.} {now|Now} I'm getting used to cooking for two.",
        "Two structures side by side: \"used to cook\" (past habit, base verb) and \"getting used to cooking\" (adapting, -ing)."),
      mc("Which sentence is correct?", [
        "I usually take the bus to work.",
        "I use to take the bus to work.",
        "I'm used to take the bus to work.",
        "I'm usually to take the bus to work.",
      ], "Error 1 of the unit: «suelo tomar» = \"I usually take\". *I use to take has no present meaning in modern English."),
      fb("Can you ___ the laundry tonight? I'm exhausted.", "do", "¿Puedes [lavar] la ropa esta noche? Estoy agotado.",
        "\"Do the laundry\" = «lavar la ropa». Many chores use \"do\": do the dishes, do the housework."),
      fb("There's a lot of ___ in this apartment: three sofas, two beds and a huge table.", "furniture", "Hay muchos [muebles] en este departamento: tres sofás, dos camas y una mesa enorme.",
        "\"Furniture\" is uncountable: \"a lot of furniture\", never *furnitures. For one item, \"a piece of furniture\"."),
      mc("How do you say «Puse los recibos en una carpeta azul»?", [
        "I put the receipts in a blue folder.",
        "I put the receipts in a blue carpet.",
        "I put the receipts in a blue rug.",
        "I put the receipts in a blue furniture.",
      ], "«Carpeta» = \"folder\". \"Carpet\" is a false friend: it means «alfombra»."),
      tr("Mi compañero de departamento nunca saca la basura.", "My {roommate|flatmate} never {takes out the trash|takes the trash out|takes out the garbage|takes the garbage out|takes out the rubbish}.",
        "\"Roommate\" (American) = «compañero de departamento». \"Take out the trash\" = «sacar la basura». \"Never\" goes before the main verb."),
      tr("Le escribí al casero porque la regadera no funciona.", "I {wrote to|emailed|texted|messaged} the {landlord|landlady} because the shower {isn't working|doesn't work}.",
        "\"Landlord\" = «casero» (\"landlady\" for a woman). «Regadera» is \"shower\"."),
      wo("My kids aren't used to making their beds.", "Mis hijos no están acostumbrados a hacer la cama.",
        "\"Aren't used to\" + -ing. \"Make the bed\" = «hacer la cama»; English uses \"their beds\" for each child."),
      wo("We used to share a room when we were little.", "Compartíamos cuarto cuando éramos chicos.",
        "\"Used to\" + base verb (\"share\") for a past situation that has changed."),
      dc("I still haven't gotten used to the time difference.",
        "\"Haven't gotten used to\" + noun. \"Still\" goes before \"haven't\" and shows that it's taking a long time."),
      dc("Back home, we would eat lunch with the whole family.",
        "\"Back home\" = «en mi país / allá». \"Would\" + base verb for a repeated action in the past."),
      sp("I've gotten used to driving in the snow.", "\"I've gotten used to\" + -ing = «ya me acostumbré / me he acostumbrado».",
        "\"Gotten used to\": the t's are soft in American English, almost \"gaddn yoos-tuh\".", "Say it in English: Ya me acostumbré a manejar con nieve."),
      sp("Here people usually eat dinner early, but I'm not used to it yet.", "\"Usually\" for the local habit; \"I'm not used to it yet\" for how you feel.",
        "Stress \"early\" and \"yet\".", "Say it in English: Aquí la gente suele cenar temprano, pero todavía no me acostumbro."),
      tr("Antes vivía con mis papás y no estaba acostumbrado a pagar renta.", "I used to live with my parents{,|} {and|so} I wasn't used to paying {rent|the rent}.",
        "Both structures in one sentence: \"used to live\" (past situation) and \"wasn't used to paying\" (not accustomed, -ing)."),
      tr("¿Hacías la tarea con tu hermano de niña?", ["Did you use to do your homework with your brother when you were {a child|a kid|little}?", "Did you use to do your homework with your brother as a {child|kid}?"],
        "\"Did you use to\" + base verb. «Tarea» = \"homework\", uncountable, with \"do\": never *make the homework."),
      tr("Al principio odiaba la lluvia, pero ya me acostumbré.", ["At first I hated the rain, but I've gotten used to it{ now|}.", "At first I hated the rain, but I've got used to it{ now|}.", "At first I hated the rain, but now I'm used to it.", "At first I hated the rain, but I got used to it."],
        "«Ya me acostumbré» = the change is complete: \"I've gotten used to it\", \"I got used to it\" or \"now I'm used to it\"."),
      mc("Which sentence is correct?", [
        "I used to have a dog when I was a kid.",
        "I would have a dog when I was a kid.",
        "I was used to have a dog when I was a kid.",
        "I use to have a dog when I was a kid.",
      ], "\"Have\" (possession) is a state: \"used to have\". *I would have a dog sounds conditional, and *I was used to have mixes two structures."),
      fb("Every weekend we ___ to my aunt's house, and she'd make tamales.", ["would go", "used to go", "went"], "Cada fin de semana [íbamos] a casa de mi tía, y ella hacía tamales.",
        "A repeated action in a story: \"would go\" (or \"used to go\", \"went\"). \"She'd make\" continues the story with \"would\"."),
    ],
  ),
];
