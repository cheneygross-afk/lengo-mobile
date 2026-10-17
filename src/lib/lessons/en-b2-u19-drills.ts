// Synced from cheneygross-afk/lengo:src/lib/lessons/en-b2-u19-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise, Lesson } from "./types";

// Required drill lessons for EN-B2 unit u19 (practice unit: verb patterns, used to, preposition + -ing, linkers): a short recap, then graded practice.

const SLUG = "en-b2-verb-patterns-practice";

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
  slug: `${SLUG}-unit-drill-${n}`,
  level: "EN-B2",
  number: n,
  title: `Drill: ${title}`,
  summary,
  duration: `${Math.round((exercises.reduce((s, e) => s + SECONDS[e.type], 0) + 40) / 60)} min`,
  sections: [{ heading, body, examples: examples.map(([es, en]) => ({ es, en })) }],
  exercises,
});

export const EN_B2_U19_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. Be/get used to, stop/try/remember, soler, para que,
  // cover-letter patterns, preposition + -ing
  // ---------------------------------------------------------------------
  lesson(
    1,
    "Used To, Stop, Remember and Preposition + -ing",
    "You will be able to talk about adapting with be used to and get used to, choose the right meaning of stop, try and remember, translate soler and para que, and put -ing after any preposition.",
    "Recap: to + -ing, and two meanings per verb",
    [
      "\"Be used to\" (result) and \"get used to\" (process) + noun or -ing: \"I'm used to working late\". \"Used to\" + base verb is a finished past habit (= «solía»); for present «suelo», say \"I usually...\" (never *I use to). \"Stop doing\" = «dejar de»; \"stop to do\" = «pararse a»; \"try to do\" = make an effort; \"try doing\" = experiment; \"remember doing\" = a memory; \"remember to do\" = a duty.",
      "After any preposition English uses -ing where Spanish uses the infinitive: \"interested in learning\", \"good at organizing\", \"responsible for training\", \"without saying anything\", \"by watching\", \"look forward to hearing\". «Para que» = \"so that\" + can/could.",
    ],
    [
      ["It took me months to get used to the noise.", "Me costó meses acostumbrarme al ruido."],
      ["I stopped to ask for directions.", "Me paré a preguntar cómo llegar."],
      ["I usually take the bus to work.", "Suelo tomar el autobús para ir al trabajo."],
      ["She's very good at solving problems.", "Se le da muy bien resolver problemas."],
    ],
    [
      fb("I'm not used to ___ so early.", ["getting up", "waking up"], "No estoy acostumbrado a [levantarme] tan temprano.",
        "\"To\" in \"be used to\" is a preposition, so -ing follows: \"getting up\", never *used to get up."),
      fb("When I was a kid, I ___ play video games every afternoon.", "used to", "De niño [solía] jugar videojuegos todas las tardes.",
        "«Solía» = \"used to\" + base verb: a finished past habit."),
      fb("I ___ cook on Sundays.", ["usually", "normally"], "[Suelo] cocinar los domingos.",
        "Present «soler» = \"usually\" + present simple. *I use to cook doesn't exist."),
      fb("I'm still getting used to ___ on the right.", "driving", "Todavía me estoy acostumbrando a [manejar] por la derecha.",
        "\"Get used to\" + -ing. The continuous shows the process is still happening."),
      fb("I've stopped ___ soda. Now I only drink water.", "drinking", "He dejado de [tomar] refrescos. Ahora solo tomo agua.",
        "«Dejar de» = \"stop\" + -ing."),
      fb("We were tired, so we stopped ___ a coffee.", ["to have", "to get", "to drink"], "Estábamos cansados, así que paramos [a tomar] un café.",
        "\"Stop\" + to = interrupt the trip in order to do something else."),
      fb("Did you remember ___ the windows before we left?", ["to close", "to shut"], "¿Te acordaste de [cerrar] las ventanas antes de salir?",
        "A duty: \"remember\" + to. \"Remember closing\" would be a memory of doing it."),
      fb("She's very interested in ___ a second language.", ["learning", "studying"], "Está muy interesada en [aprender] un segundo idioma.",
        "After the preposition \"in\", -ing. Not *interested in learn."),
      fb("He left the meeting without ___ goodbye.", "saying", "Se fue de la reunión sin [despedirse].",
        "\"Without\" + -ing."),
      mc("Which sentence means «Recuerdo haber visto esa película de niño»?", [
        "I remember seeing that movie as a child.",
        "I remember to see that movie as a child.",
        "I remember of seeing that movie as a child.",
        "I remind seeing that movie as a child.",
      ], "A memory of the past = \"remember\" + -ing. No \"of\" after \"remember\", and \"remind\" means «recordarle algo a alguien»."),
      mc("Your friend can't sleep. Which piece of advice uses \"try\" correctly?", [
        "Try reading a book instead of looking at your phone.",
        "Try to reading a book instead of look at your phone.",
        "Try read a book instead of looking at your phone.",
        "Try for reading a book instead of looking at your phone.",
      ], "\"Try\" + -ing = experiment, see if it helps. \"Instead of\" + -ing."),
      mc("Which sentence is correct?", [
        "I'm looking forward to meeting the new team.",
        "I'm looking forward to meet the new team.",
        "I'm looking forward meeting the new team.",
        "I'm looking forward for meeting the new team.",
      ], "In \"look forward to\", \"to\" is a preposition: -ing follows."),
      mc("Which sentence is correct?", [
        "I was responsible for training new employees.",
        "I was responsible of training new employees.",
        "I was responsible for train new employees.",
        "I was responsible to train new employees.",
      ], "\"Responsible for\" + -ing. Not *responsible of (from «responsable de»)."),
      tr("Ya estoy acostumbrado al frío.", ["I'm used to the cold now.", "I'm already used to the cold.", "Now I'm used to the cold.", "I've gotten used to the cold."],
        "«Estar acostumbrado a» + noun = \"be used to\" + noun."),
      tr("Me costó un año acostumbrarme a vivir sola.", ["It took me a year to get used to living alone.", "It took me a year to get used to living on my own.", "It took me one year to get used to living {alone|on my own}."],
        "\"It took me + time + to get used to\" + -ing."),
      tr("Antes no me gustaba el pescado.", ["I didn't use to like fish.", "I used to not like fish.", "I never used to like fish."],
        "Negative past habit or state: \"didn't use to\" (no -d after \"didn't\")."),
      tr("Intenté abrir la puerta, pero estaba cerrada con llave.", ["I tried to open the door, but it was locked.", "I tried to open the door but it was locked."],
        "\"Try\" + to = make an effort that may fail."),
      tr("Acuérdate de llevar el cargador.", ["Remember to {take|bring} the charger.", "Remember to {take|bring} your charger.", "Don't forget to {take|bring} {the|your} charger."],
        "A future duty: \"remember\" + to. No \"of\"."),
      tr("Te mando la dirección para que no te pierdas.", ["I'll send you the address so {that |}you don't get lost.", "I'm sending you the address so {that |}you don't get lost.", "I'll send you the address so {that |}you won't get lost."],
        "«Para que» = \"so that\" + clause. Never *for that you don't get lost."),
      tr("Aprendí a cocinar viendo videos en internet.", ["I learned to cook by watching videos online.", "I learned {how |}to cook by watching videos {online|on the internet}.", "I learnt {how |}to cook by watching videos {online|on the internet}."],
        "The Spanish gerund of manner («viendo») = \"by\" + -ing."),
      tr("Estoy pensando en cambiar de trabajo.", ["I'm thinking about changing jobs.", "I'm thinking of changing jobs.", "I'm thinking {about|of} getting a new job."],
        "\"Think about / of\" + -ing. Note plural \"change jobs\"."),
      wo("I'm tired of waiting for the bus every morning.", "Estoy cansado de esperar el autobús todas las mañanas.",
        "\"Tired of\" + -ing."),
      wo("I enjoy working with people from different countries.", "Disfruto trabajando con gente de distintos países.",
        "\"Enjoy\" is always followed by -ing, never *enjoy to work."),
      wo("Despite having little experience, she got the job.", "A pesar de tener poca experiencia, consiguió el trabajo.",
        "\"Despite\" + -ing, never *despite she had."),
      mt("Match each Spanish structure with its English pattern.", [
        ["dejar de fumar", "stop smoking"],
        ["pararse a fumar", "stop to smoke"],
        ["estar acostumbrado a fumar", "be used to smoking"],
        ["solía fumar", "used to smoke"],
        ["suelo fumar", "usually smoke"],
      ], "Same verb, different patterns, different meanings. Only \"used to\" (past habit) takes the base verb after \"to\"."),
      lc("I'll never forget arriving in Chicago in the middle of a snowstorm.", ["Nunca olvidaré cuando llegué a Chicago en plena tormenta de nieve.", "No te olvides de llegar a Chicago antes de la tormenta.", "Nunca me acostumbraré a la nieve de Chicago.", "Olvidé que llegaba a Chicago durante la tormenta."],
        "\"Forget\" + -ing looks back at a memory."),
      lc("I'm used to working under pressure.", ["Estoy acostumbrado a trabajar bajo presión.", "Antes trabajaba bajo presión.", "Suelo trabajar bajo presión.", "Uso la presión para trabajar."],
        "\"Be used to\" + -ing = «estar acostumbrado a»; \"used to work\" would be «antes trabajaba»."),
      dc("As well as speaking three languages, I have a driver's license.",
        "\"As well as\" is a preposition here, so -ing follows: \"speaking\"."),
      dc("There's no point in arguing about it now.",
        "\"There's no point in\" + -ing = «no tiene sentido»."),
      dc("Thank you for considering my application.",
        "\"Thank you for\" + -ing."),
      sp("I'm looking forward to seeing you next week.",
        "\"Look forward to\" + -ing.",
        undefined, "Say it in English: «Tengo muchas ganas de verte la semana que viene.»"),
      sp("It took me a long time to get used to the food.",
        "\"Get used to\" + noun. Don't add \"it\" at the end.",
        "\"Used to\" sounds like \"yoos-tuh\": the d is silent."),
      tr("Aunque estoy acostumbrado a trabajar de noche, me cuesta dormir de día.", ["{Although|Even though} I'm used to working at night, I find it hard to sleep during the day.", "{Although|Even though} I'm used to working {at night|nights}, it's hard for me to sleep during the day.", "{Although|Even though} I'm used to working {at night|nights}, I {find it difficult|have trouble|struggle} {to sleep|sleeping} during the day."],
        "Trap mix: \"although\" + clause, no \"but\", and \"used to working\" (not *used to work)."),
      tr("Me interesa este puesto porque se me da bien organizar eventos.", ["I'm interested in this position because I'm good at organizing events.", "I'm interested in this {job|role|position} because I'm good at organizing events.", "I am interested in this {job|role|position} because I am good at organising events."],
        "Trap mix: \"interested\" (not *interesting) + in, and \"good at\" + -ing (not *good in organize)."),
      mc("Which sentence is correct?", [
        "Instead of complaining, he started looking for a solution.",
        "Instead of complain, he started looking for a solution.",
        "Instead to complain, he started looking for a solution.",
        "Instead of complaining, he started to looking for a solution.",
      ], "\"Instead of\" + -ing; \"start\" can take -ing or to + base verb, but never *to looking."),
    ],
  ),
  // ---------------------------------------------------------------------
  // Drill 2. -ing or to, verb + person + to, make and let; moving abroad,
  // habits, transformations and debate; whole-unit mix
  // ---------------------------------------------------------------------
  lesson(
    2,
    "Verb Patterns, Habits and Debates",
    "You will be able to choose -ing or to after common verbs, use want someone to, make and let, describe past and present habits, compare two countries and argue both sides of a debate.",
    "Recap: the verb decides the pattern",
    [
      "-ing after \"enjoy\", \"avoid\", \"mind\", \"suggest\", \"keep\", \"consider\", \"can't stand\"; to after \"want\", \"decide\", \"hope\", \"manage\", \"refuse\", \"afford\", \"would like\". «Quiero que vengas» = \"I want you to come\" (never *want that you). \"Make\" and \"let\" + person + base verb (no \"to\"); passive: \"I was made to wait\", \"We weren't allowed to leave\".",
      "Habits: a gerund as subject takes a singular verb (\"Eating late is bad for you\"); \"would\" only for repeated past actions, \"used to\" also for states. Comparing: \"whereas\" or \"on the other hand\" (\"on the contrary\" only contradicts). Debating: \"Not only does it save time, but it also...\".",
    ],
    [
      ["My parents made me study every evening.", "Mis padres me hacían estudiar todas las tardes."],
      ["Cycling to work keeps me fit.", "Ir al trabajo en bicicleta me mantiene en forma."],
      ["Back home, we would eat dinner at nine.", "En mi país, cenábamos a las nueve."],
      ["Not only is it cheaper, but it's also faster.", "No solo es más barato, sino que también es más rápido."],
    ],
    [
      fb("Do you mind ___ the window? It's cold.", ["closing", "shutting"], "¿Te importa [cerrar] la ventana? Hace frío.",
        "\"Mind\" + -ing."),
      fb("We can't afford ___ a new car this year.", "to buy", "No podemos permitirnos [comprar] un carro nuevo este año.",
        "\"Afford\" + to-infinitive."),
      fb("My manager wants ___ to finish the report today.", "me", "Mi gerente quiere [que yo] termine el informe hoy.",
        "«Quiere que yo...» = \"wants me to\" + verb. Never *wants that I finish."),
      fb("The teacher made us ___ the essay again.", "write", "La maestra nos hizo [escribir] el ensayo otra vez.",
        "\"Make\" + person + base verb, with no \"to\"."),
      fb("My parents didn't let me ___ out on school nights.", "go", "Mis padres no me dejaban [salir] entre semana.",
        "\"Let\" + person + base verb."),
      fb("We weren't ___ to take photos inside the museum.", "allowed", "No nos [dejaron] tomar fotos dentro del museo.",
        "\"Let\" has no normal passive: use \"be allowed to\"."),
      fb("___ junk food every day is bad for your health.", "Eating", "[Comer] comida chatarra todos los días es malo para la salud.",
        "An activity as subject = -ing form, with a singular verb (\"is\")."),
      fb("I'm trying to cut down ___ sugar.", "on", "Estoy intentando [reducir el consumo de] azúcar.",
        "\"Cut down on\" + noun or -ing = reduce a habit."),
      mc("Which sentence is correct?", [
        "I suggest taking the earlier train.",
        "I suggest to take the earlier train.",
        "I suggest you to take the earlier train.",
        "I suggest that we taking the earlier train.",
      ], "\"Suggest\" + -ing, or \"suggest (that) we take\". Never *suggest to or *suggest you to."),
      mc("Which sentence is correct?", [
        "I used to have long hair when I was in college.",
        "I would have long hair when I was in college.",
        "I use to have long hair when I was in college.",
        "I was used to have long hair when I was in college.",
      ], "A past state (\"have long hair\") takes \"used to\", not \"would\"."),
      mc("Which sentence is correct?", [
        "He's always leaving his dishes in the sink!",
        "He always is leaving his dishes in the sink!",
        "He's leaving always his dishes in the sink!",
        "He always leave his dishes in the sink!",
      ], "To complain about an annoying habit: \"always\" + present continuous, with \"always\" after \"is\"."),
      mc("You are comparing two cities. Which linker fits? \"Boston is expensive. ___, it has great public transportation.\"", [
        "On the other hand",
        "On the contrary",
        "On the other side",
        "In the contrary",
      ], "\"On the other hand\" compares two sides. \"On the contrary\" is only for contradicting what was just said."),
      tr("Quiero que me ayudes con la mudanza.", ["I want you to help me with the move.", "I want you to help me {move|with moving}.", "I'd like you to help me with the move."],
        "«Querer que» + subjunctive = \"want\" + person + to-infinitive."),
      tr("Mi jefe me pidió que me quedara hasta tarde.", ["My boss asked me to stay late.", "My boss asked me to stay {until late|late at work}."],
        "\"Ask\" + person + to. Not *asked me that I stay."),
      tr("Me hicieron esperar dos horas en el aeropuerto.", ["I was made to wait two hours at the airport.", "They made me wait {for |}two hours at the airport.", "I was made to wait for two hours at the airport."],
        "Active: \"made me wait\" (no \"to\"). Passive: \"I was made to wait\" (\"to\" comes back)."),
      tr("Se negó a contestar mis preguntas.", ["{He|She} refused to answer my questions."],
        "\"Refuse\" + to-infinitive."),
      tr("No pude evitar reírme.", ["I couldn't help laughing.", "I could not help laughing."],
        "\"Can't help\" + -ing = «no poder evitar»."),
      tr("Ya no como carne.", ["I don't eat meat {any more|anymore}.", "I no longer eat meat.", "I've stopped eating meat."],
        "\"Not any more\", \"no longer\" or \"stopped\" + -ing for a finished habit."),
      tr("En mi país cenamos a las nueve, mientras que aquí la gente cena a las seis.", ["In my country we have dinner at nine, {whereas|while} here people have dinner at six.", "In my country we eat dinner at nine, {whereas|while} here people eat {dinner |}at six.", "{Back home|In my country}, we have dinner at nine, {whereas|while} here people {eat|have dinner} at six."],
        "\"Whereas\" or \"while\" compares two full clauses."),
      tr("Ojalá hablara mejor el idioma.", ["I wish I spoke the language better.", "If only I spoke the language better.", "I wish I could speak the language better."],
        "\"Wish\" + past simple for a present situation. Never *I wish I speak."),
      tr("Me acuesto temprano para no estar cansado en el trabajo.", ["I go to bed early so as not to be tired at work.", "I go to bed early {in order not to|so as not to} be tired at work.", "I go to bed early so {that |}I'm not tired at work.", "I go to bed early so {that |}I won't be tired at work."],
        "«Para no» = \"so as not to\" / \"in order not to\" or \"so that I'm not\"."),
      tr("Lo apunté para que no se me olvidara.", ["I wrote it down so {that |}I wouldn't forget.", "I wrote it down so as not to forget.", "I wrote it down in order not to forget.", "I wrote it down so {that |}I wouldn't forget it."],
        "Past purpose: \"so that I wouldn't\" or \"so as not to\"."),
      wo("Not only does it save time, but it also reduces stress.", "No solo ahorra tiempo, sino que también reduce el estrés.",
        "\"Not only\" at the start causes inversion: \"does it save\"."),
      wo("On Sundays we would visit my grandparents.", "Los domingos visitábamos a mis abuelos.",
        "\"Would\" for a repeated past action once the time is clear."),
      wo("Working from home saves me two hours a day.", "Trabajar desde casa me ahorra dos horas al día.",
        "A gerund subject + singular verb (\"saves\")."),
      lc("I wish people would stop asking me where I'm from.", ["Ojalá la gente dejara de preguntarme de dónde soy.", "Quiero preguntarle a la gente de dónde es.", "La gente ya no me pregunta de dónde soy.", "Me gustaría saber de dónde es la gente."],
        "\"Wish\" + \"would\" complains about other people's behavior."),
      lc("It wasn't expensive. On the contrary, it was a real bargain.", ["No fue caro. Al contrario, fue una auténtica ganga.", "Fue caro. En cambio, la calidad era buena.", "No era una ganga, sino que fue caro.", "Por otro lado, fue bastante caro."],
        "\"On the contrary\" contradicts the previous statement: «al contrario»."),
      dc("Some people love the freedom, whereas others miss the routine.",
        "\"Whereas\" compares two groups in one sentence."),
      dc("Not getting enough sleep is dangerous for drivers.",
        "Negative gerund subject: \"Not getting\" + singular \"is\"."),
      dc("The museum is definitely worth visiting.",
        "\"Worth\" + -ing."),
      sp("Let me help you with those bags.",
        "\"Let\" + person + base verb, no \"to\".",
        undefined, "Say it in English: «Déjame ayudarte con esas bolsas.»"),
      sp("All things considered, a mix of both seems the best option.",
        "\"All things considered\" introduces your conclusion.",
        "Stress \"all\", \"mix\" and \"best\"."),
      tr("Mis padres no me dejaban salir de noche, pero ahora estoy acostumbrado a volver tarde.", ["My parents didn't let me go out at night, but now I'm used to coming {home |back |}late.", "My parents didn't {let me|allow me to} go out at night, but now I'm used to {coming|getting} {home |back |}late."],
        "Trap mix: \"let me go\" (no \"to\"), and \"used to coming\" (-ing, because \"to\" is a preposition)."),
      tr("A pesar de que el alquiler es caro, me encanta vivir aquí y nunca he pensado en volver.", ["{Despite the fact that|Although|Even though} the rent is expensive, I love living here and I've never thought {about|of} going back.", "{Despite the fact that|Although|Even though} the rent is {expensive|high}, I love living here and I have never thought {about|of} {going back|returning}."],
        "Trap mix: \"despite the fact that\" + clause, \"love living\", and \"think about\" + -ing."),
      mc("Which sentence is correct?", [
        "My doctor advised me to stop drinking so much coffee.",
        "My doctor advised me stop to drink so much coffee.",
        "My doctor advised that I stop to drink so much coffee.",
        "My doctor advised me to stop to drink so much coffee.",
      ], "\"Advise\" + person + to; then \"stop\" + -ing for ending a habit (\"stop to drink\" would mean pausing in order to drink)."),
    ],
  ),
];
