// Synced from cheneygross-afk/lengo:src/lib/lessons/en-b2-u23-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise, Lesson } from "./types";

// Required drill lessons for EN-B2 unit u23 (mixed review of the Upper Intermediate level so far): a short recap, then graded practice.
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


export const EN_B2_U23_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. Narrative tenses, third conditional and regrets; present
  // perfect with since, futures, reporting; passives and "is believed
  // to"; deduction; wish, used to; future perfect, conditionals, unless;
  // gerund or infinitive
  // ---------------------------------------------------------------------
  lesson(
    1,
    "mixed-review-stories-plans",
    "Stories, Plans, News and Habits",
    "You will be able to mix the main Upper Intermediate structures so far: narrative tenses, conditionals and regrets, present perfect with \"since\", future forms, passives, deduction, \"wish\", \"used to\" and verb patterns.",
    "Recap: the big structures in one place",
    [
      "Stories: past simple for events, past continuous for background, past perfect for earlier events, past perfect continuous for duration up to a past moment (\"We had been waiting for hours\"). Regrets: \"If I had known, I would have ...\" (no \"would\" after \"if\"), \"I wish I had ...\", \"You should have ...\". Up to now: \"I've lived here since 2018\", never *I live here since.",
      "Futures: \"will\", \"going to\", the present continuous, \"will have done\" by a deadline, and the present after \"when\" or \"as soon as\". News: passives (\"has been arrested\") and \"is believed to have ...\"; deduction with \"must have\" and \"can't have\". Habits: \"used to\" + verb, \"be/get used to\" + -ing. Patterns: \"spend time doing\", \"stop doing\" versus \"stop to do\".",
    ],
    [
      ["We had been driving for hours when we realized we were lost.", "Llevábamos horas manejando cuando nos dimos cuenta de que estábamos perdidos."],
      ["If I had checked the date, I wouldn't have missed the concert.", "Si hubiera revisado la fecha, no me habría perdido el concierto."],
      ["The museum will have reopened by the summer.", "Para el verano el museo habrá vuelto a abrir."],
      ["I'm finally used to working from home.", "Por fin estoy acostumbrado a trabajar desde casa."],
    ],
    [
      // --- narrative tenses
      fb("We ___ for three hours when the bus finally arrived.", "had been waiting", "[Llevábamos] tres horas [esperando] cuando por fin llegó el autobús.",
        "Duration up to a moment in the past = past perfect continuous: \"had been waiting for three hours\". Never *were waiting since three hours."),
      tr("Cuando llegamos al hotel, ya habían cancelado nuestra reserva.", [
        "When we {got to|arrived at} the hotel, they had already {canceled|cancelled} our {reservation|booking}.",
        "When we {got to|arrived at} the hotel, our {reservation|booking} had already been {canceled|cancelled}.",
      ], "The cancellation happened before we arrived, so past perfect: \"had already canceled\", or the passive \"had already been canceled\". «Llegar a» = \"get to\" or \"arrive at\", never *arrive to."),
      mc("Which sentence is correct?", [
        "I had been working there for two years when I met her.",
        "I was working there since two years when I met her.",
        "I have been working there for two years when I met her.",
        "I had been work there for two years when I met her.",
      ], "Duration before a past event: \"had been\" + -ing + \"for\" + length of time. The present perfect can't connect to a past moment, and \"since\" needs a starting point, not a length."),
      // --- third conditional, wish, should have
      tr("Si hubiéramos revisado el carro, no se habría descompuesto en la carretera.", [
        "If we had checked the car, it {wouldn't|would not} have broken down on the {highway|road}.",
      ], "Third conditional: \"if\" + past perfect, then \"would have\" + participle. \"Broken\" is the participle of \"break\"."),
      fb("If I ___ about the storm, I would have stayed home.", "had known", "Si [hubiera sabido] lo de la tormenta, me habría quedado en casa.",
        "The if-clause takes the past perfect. *If I would have known copies colloquial Spanish «si lo habría sabido» and is always wrong in English."),
      tr("Ojalá no hubiera reservado ese vuelo tan barato.", [
        "{I wish|If only} I {hadn't|had not} booked that cheap flight.",
        "{I wish|If only} I {hadn't|had not} booked such a cheap flight.",
      ], "A past regret: \"I wish\" or \"If only\" + past perfect. *I wish I wouldn't have booked is wrong."),
      fb("You ___ your passport in the car. Now we can't check in.", "shouldn't have left", "No [deberías haber dejado] el pasaporte en el carro. Ahora no podemos documentar.",
        "Criticizing a past action: \"shouldn't have\" + participle. Never *shouldn't had left."),
      // --- present perfect, future forms, reporting
      tr("Vivo en Monterrey desde 2018.", [
        "I've {lived|been living} in Monterrey since 2018.",
      ], "Spanish present + «desde» = English present perfect + \"since\". *I live in Monterrey since 2018 is the most persistent error at this level."),
      mc("Which question is correct?", [
        "When did you finish your degree?",
        "When have you finished your degree?",
        "When you finished your degree?",
        "When did you finished your degree?",
      ], "\"When\" asks about a finished moment, so past simple. The question needs \"did\" + base form."),
      fb("I'll call you as soon as I ___ the results.", ["get", "have", "receive"], "Te llamaré en cuanto [tenga] los resultados.",
        "After \"as soon as\", \"when\", \"before\" and \"after\", English uses the present for the future. Spanish uses a subjunctive, which leads to *as soon as I will get."),
      tr("Para diciembre habré terminado el curso.", [
        "By December{,|} I'll have finished the course.",
      ], "Something completed before a future deadline: future perfect, \"will have\" + participle. «Para» + date is \"by\", not \"until\"."),
      tr("Me sugirió que hablara con el gerente.", [
        "{She|He} suggested {that |}I {talk|speak} to the manager.",
        "{She|He} suggested {that |}I should {talk|speak} to the manager.",
        "{She|He} suggested {talking|speaking} to the manager.",
      ], "\"Suggest\" never takes *me to. Use \"suggested that I talk\" or \"suggested talking\"."),
      mc("Which question is correct?", [
        "Could you tell me where the meeting room is?",
        "Could you tell me where is the meeting room?",
        "Could you tell me where the meeting room it is?",
        "Could you tell me where does the meeting room is?",
      ], "After \"Could you tell me\", the question becomes a statement: subject + verb (\"where the meeting room is\")."),
      tr("Me explicó que el puesto era temporal.", [
        "{He|She} explained {to me |}that the {position|job} was temporary.",
      ], "\"Explain\" needs \"to\" before the person: \"explained to me\", never *explained me."),
      // --- news: passives, is believed to, deduction, reported speech
      fb("Three cars ___ from the parking lot last night.", "were stolen", "Anoche [robaron] tres carros del estacionamiento.",
        "Spanish impersonal «robaron» = English passive: \"were stolen\" (\"be\" in the past + participle)."),
      wo("The painting is said to be worth a million dollars.", "Se dice que el cuadro vale un millón de dólares.",
        "Subject + \"is said to\" + simple infinitive for the same time. «Se dice que» doesn't translate word for word."),
      mc("Which sentence is correct?", [
        "It is believed that the fire started in the kitchen.",
        "Is believed that the fire started in the kitchen.",
        "The fire is believed that it started in the kitchen.",
        "It is believed the fire to have started in the kitchen.",
      ], "Pattern 1 needs the subject \"It\": \"It is believed that ...\". Pattern 2 would be \"The fire is believed to have started\". Don't mix them."),
      tr("No puede haber sido Marta: estaba en Chicago.", [
        "It {can't|couldn't|cannot} have been Marta{:|,|;} she was in Chicago.",
      ], "Sure it didn't happen: \"can't have\" + participle. The negative of deductive \"must have\" is \"can't have\", not *mustn't have."),
      fb("The door wasn't forced. The thief ___ had a key.", "must have", "La puerta no estaba forzada. El ladrón [debió de] tener una llave.",
        "Almost sure about the past: \"must have\" + participle. Don't confuse it with \"should have\" («debería haber»), which criticizes."),
      tr("La testigo dijo que había visto un carro rojo.", [
        "The witness said {that |}she had seen a red car.",
        "The witness said {that |}she saw a red car.",
      ], "Reported speech after a past verb usually backshifts: \"I saw\" becomes \"she had seen\". Use \"say\" without a person, \"tell\" with one."),
      // --- wish, used to, relatives
      fb("I wish my brother ___ closer. I only see him once a year.", "lived", "Ojalá mi hermano [viviera] más cerca. Solo lo veo una vez al año.",
        "A present situation you want to be different: \"I wish\" + past simple (\"lived\"). It refers to now, not the past."),
      tr("Ojalá dejaras de interrumpirme.", [
        "I wish you would stop interrupting me.",
        "I wish you'd stop interrupting me.",
      ], "Irritation with someone's behavior: \"I wish\" + person + \"would\". \"Stop\" + -ing = quit doing it."),
      mc("Which sentence is correct?", [
        "I'm used to getting up early.",
        "I'm used to get up early.",
        "I use to get up early.",
        "I'm used getting up early.",
      ], "In \"be used to\", \"to\" is a preposition, so -ing follows. For present habits use \"usually\", not *I use to."),
      tr("Me costó mucho acostumbrarme a manejar por la izquierda.", [
        "It took me a {long time|while} to get used to driving on the left.",
        "It was {hard|difficult} to get used to driving on the left.",
        "I found it {hard|difficult} to get used to driving on the left.",
      ], "The process «acostumbrarse a» = \"get used to\" + -ing: \"get used to driving\", never *get used to drive."),
      wo("That's the restaurant where my parents met.", "Ese es el restaurante donde se conocieron mis papás.",
        "«Donde» after a place = \"where\". English keeps subject + verb order in the clause: \"where my parents met\"."),
      // --- environment: by, conditionals, unless
      fb("___ 2040, the city will have replaced all its buses.", "By", "[Para] 2040, la ciudad habrá reemplazado todos sus autobuses.",
        "A deadline with the future perfect takes \"by\". \"Until\" is for a situation that continues up to a moment."),
      tr("Si todo el mundo usara menos el carro, habría menos contaminación.", [
        "If {everyone|everybody} used {their cars|the car|cars} less, there would be less pollution.",
      ], "Imaginary present or future: second conditional, past simple + \"would\". \"Pollution\" is uncountable, so \"less\"."),
      fb("We won't have enough water ___ it rains soon.", "unless", "No tendremos suficiente agua [a menos que] llueva pronto.",
        "\"Unless\" = \"if not\", followed by the present for the future, never *unless it will rain."),
      // --- gerund or infinitive
      mc("Which sentence is correct?", [
        "I spend too much time checking my phone.",
        "I spend too much time to check my phone.",
        "I spend too much time for checking my phone.",
        "I spend too much time check my phone.",
      ], "\"Spend time\" + -ing: \"spend time checking\". Spanish uses an infinitive here, which leads to *to check."),
      fb("Remember ___ off the lights when you leave.", "to turn", "Acuérdate de [apagar] las luces cuando salgas.",
        "\"Remember to do\" = don't forget (future). \"Remember doing\" is a memory of the past."),
      // --- mix
      mt("Match each sentence with its meaning.", [
        ["I used to swim every day.", "Antes nadaba todos los días."],
        ["I'm used to swimming every day.", "Estoy acostumbrado a nadar todos los días."],
        ["I'm getting used to swimming every day.", "Me estoy acostumbrando a nadar todos los días."],
        ["I usually swim every day.", "Suelo nadar todos los días."],
        ["I wish I could swim every day.", "Ojalá pudiera nadar todos los días."],
      ], "\"Used to\" + verb = past habit; \"be used to\" + -ing = it's normal for me; \"get used to\" + -ing = the process; \"usually\" = present habit; \"wish\" + \"could\" = an ability or possibility you don't have."),
      lc("I wish I had called her.", [
        "Ojalá la hubiera llamado.",
        "Ojalá la llamara.",
        "Ojalá me llamara.",
        "Espero haberla llamado.",
      ], "\"I wish\" + past perfect (\"had called\") is a regret about the past. \"I wish I called\" would be about now."),
      dc("If I had known about the delay, I wouldn't have run to the airport.",
        "Third conditional: \"had known\" in the if-clause, \"wouldn't have run\" in the result. \"Run\" is also the participle."),
      dc("The bridge is being repaired, so we have to take another road.",
        "Present continuous passive: \"is being\" + participle, for something happening now. Spanish would say «están arreglando el puente»."),
      sp("By the time we get there, the store will have closed.",
        "\"By the time\" + present, then the future perfect for something completed before that moment.",
        "Contract naturally: \"the store'll have closed\" in fast speech, with \"have\" weak (\"uv\").",
        "Say it in English: «Para cuando lleguemos, la tienda ya habrá cerrado.»"),
      sp("I've been learning English for six years, but I'm still not used to the accent.",
        "Present perfect continuous with \"for\" for something still going on, and \"be used to\" + noun.",
        "Say \"I've been\" quickly (\"ive-bin\") and stress \"six\" and \"accent\".",
        "Say it in English: «Llevo seis años aprendiendo inglés, pero todavía no estoy acostumbrado al acento.»"),
    ],
  ),

  // ---------------------------------------------------------------------
  // Drill 2. Advice and deduction, causatives; mixed conditionals,
  // reporting verbs, contrast linkers; state verbs, How long have you
  // been, was going to / about to / supposed to; would rather, it's
  // time, wish vs hope; participle clauses; stubborn interference errors
  // ---------------------------------------------------------------------
  lesson(
    2,
    "mixed-review-unreal-structures",
    "Advice, the Unreal and Sentence Structures",
    "You will be able to give advice, make deductions, use mixed conditionals, \"would rather\" and \"it's time\", report what people said with the right verb pattern, and avoid the interference errors that still survive at this level.",
    "Recap: advice, the unreal and fixed patterns",
    [
      "Advice: \"should\", \"ought to\", \"had better\" + base verb (no \"to\"), \"If I were you, I'd ...\". Deduction: \"must be\", \"can't be\", \"might be\", and \"must have / can't have\" + participle for the past. Causative: \"I had my eyes tested\" (someone did it for me). Mixed conditionals: \"If I had studied medicine, I would be a doctor now\".",
      "\"I'd rather\" + base verb, or + someone + past simple; \"It's time we left\". Reporting verbs have fixed patterns: \"accuse of\" + -ing, \"encourage someone to\", \"deny\" + -ing, \"offer to\". Contrast: \"although\" + clause, \"despite\" + noun or -ing (never *despite of). And the stubborn ones: \"I'm 30\", \"depend on\", \"married to\", \"I agree\", \"discuss\" with no \"about\".",
    ],
    [
      ["You'd better take something for that headache.", "Más vale que tomes algo para ese dolor de cabeza."],
      ["If I had learned to cook, I wouldn't eat so much fast food now.", "Si hubiera aprendido a cocinar, ahora no comería tanta comida rápida."],
      ["I'd rather you called me before you come.", "Preferiría que me llamaras antes de venir."],
      ["She accused me of reading her messages.", "Me acusó de leer sus mensajes."],
    ],
    [
      // --- advice, deduction, causative
      fb("You'd better ___ a doctor about that pain.", "see", "Más vale que [vayas al] médico por ese dolor.",
        "\"Had better\" (usually \"'d better\") + base verb, with no \"to\": never *you'd better to see."),
      mc("Which sentence is correct?", [
        "If I were you, I'd get some rest.",
        "If I would be you, I'd get some rest.",
        "If I were you, I will get some rest.",
        "If I am you, I'd get some rest.",
      ], "\"If I were you, I'd ...\" is the fixed advice frame: past form in the if-clause, \"would\" in the result, and never \"would\" after \"if\"."),
      tr("Estoy resfriado desde el lunes.", [
        "I've had a cold since Monday.",
      ], "«Estar resfriado» (or «constipado» in Spain) = \"have a cold\"; \"constipated\" means «estreñido». And «desde» with something still true takes the present perfect: \"I've had\"."),
      fb("She ___ slept much last night. She looks exhausted.", ["can't have", "couldn't have"], "[No puede haber] dormido mucho anoche. Se ve agotada.",
        "Sure something didn't happen: \"can't have\" or \"couldn't have\" + participle."),
      tr("Ayer me hice un análisis de sangre.", [
        "I had a blood test yesterday.",
        "Yesterday I had a blood test.",
        "I had my blood tested yesterday.",
      ], "«Hacerse» a test = \"have a test\" or the causative \"have my blood tested\". *I made a blood test is a calque of «hacer»."),
      // --- mixed conditionals, education, reporting verbs
      fb("If I had studied engineering, I ___ in a lab now.", ["would be working", "would work"], "Si hubiera estudiado ingeniería, ahora [estaría trabajando] en un laboratorio.",
        "Mixed conditional: past condition (\"had studied\"), present result (\"would be working now\")."),
      tr("Si fuera más organizada, no habría perdido el boleto.", [
        "If I {were|was} more organized, I {wouldn't|would not} have lost the ticket.",
      ], "Mixed the other way: a permanent present fact (\"If I were more organized\") with a past result (\"wouldn't have lost\")."),
      mc("You want to say «Aprobé el examen de manejo». Which sentence is correct?", [
        "I passed my driving test.",
        "I approved my driving test.",
        "I suspended my driving test.",
        "I approbed my driving test.",
      ], "«Aprobar» an exam is \"pass\"; «reprobar» or «suspender» is \"fail\". \"Approve\" means «dar el visto bueno»."),
      tr("Lo acusaron de copiar en el examen.", [
        "They accused him of cheating {on|in} the {exam|test}.",
        "He was accused of cheating {on|in} the {exam|test}.",
      ], "\"Accuse someone of\" + -ing. «Copiar» in an exam is \"cheat\", not \"copy\". Never *accused him to cheat."),
      fb("My teacher encouraged me ___ for the scholarship.", "to apply", "Mi profesora me animó [a solicitar] la beca.",
        "\"Encourage someone to\" + base verb. Never *encouraged me for apply."),
      tr("Asistí a todas las reuniones.", [
        "I attended all the meetings.",
        "I attended every meeting.",
        "I went to all the meetings.",
        "I went to every meeting.",
      ], "«Asistir a» = \"attend\" (no preposition) or \"go to\". \"Assist\" means «ayudar»."),
      // --- contrast linkers
      mc("Which sentence is correct?", [
        "Despite the rain, we went for a walk.",
        "Despite of the rain, we went for a walk.",
        "Despite it was raining, we went for a walk.",
        "Although the rain, we went for a walk.",
      ], "\"Despite\" + noun or -ing, never \"of\" and never a full clause. \"Although\" needs a full clause: \"Although it was raining\"."),
      tr("Aunque estaba cansado, terminó el informe.", [
        "{Although|Even though|Though} he was tired, he finished the report.",
        "Despite being tired, he finished the report.",
        "In spite of being tired, he finished the report.",
      ], "\"Although\" + clause, or \"despite / in spite of\" + -ing. Both are correct here."),
      fb("The hotel was expensive. ___, the view was amazing.", "However", "El hotel era caro. [Sin embargo], la vista era increíble.",
        "\"However\" links two sentences and takes a comma after it."),
      // --- time: state verbs, how long, future in the past
      mc("Which sentence is correct?", [
        "I had known him for years before we worked together.",
        "I had been knowing him for years before we worked together.",
        "I was knowing him for years before we worked together.",
        "I have known him for years before we worked together.",
      ], "\"Know\" is a state verb, so no continuous form. Before a past moment, past perfect simple: \"had known\"."),
      tr("¿Cuánto tiempo llevas trabajando aquí?", [
        "How long have you been working here?",
      ], "«¿Cuánto tiempo llevas ...?» = \"How long have you been\" + -ing. Never *How long are you working or *Since when do you work."),
      fb("I ___ call you, but my phone died.", "was going to", "[Iba a] llamarte, pero se me descargó el celular.",
        "An unfulfilled plan from the past = \"was going to\", exactly like «iba a»."),
      tr("Estábamos a punto de cenar cuando sonó el timbre.", [
        "We were about to {have|eat} dinner when the {doorbell|bell} rang.",
      ], "«Estar a punto de» = \"be about to\" + base verb. «Cenar» = \"have dinner\"."),
      lc("She was supposed to call me.", [
        "Se suponía que me iba a llamar.",
        "Supuse que me llamaría.",
        "Me llamó, como se esperaba.",
        "Tiene que llamarme.",
      ], "\"Was supposed to\" = «se suponía que»: it was the plan, but it probably didn't happen."),
      // --- would rather, it's time, wish vs hope
      fb("I'd rather you ___ smoke in the car.", "didn't", "Preferiría que [no] fumaras en el carro.",
        "\"I'd rather\" + another person + past simple, with present meaning: \"I'd rather you didn't\". Never *I'd rather you don't."),
      tr("Ya es hora de que nos vayamos a casa.", [
        "It's {high |}time we went home.",
        "It's time {for us |}to go home.",
      ], "\"It's time\" + subject + past simple (\"we went\"), or \"It's time to\" + verb. Never *It's time that we go."),
      mc("Which sentence is correct?", [
        "I'd rather stay in tonight.",
        "I'd rather to stay in tonight.",
        "I'd rather staying in tonight.",
        "I'd rather that I stay in tonight.",
      ], "For your own action, \"I'd rather\" + base verb, with no \"to\"."),
      tr("Ojalá haga buen tiempo el sábado.", [
        "I hope {it's|the weather is|it will be|the weather will be} {nice|good|sunny} {on Saturday|this Saturday}.",
      ], "«Ojalá» about a possible future is \"I hope\" + present or \"will\". \"I wish\" is only for things that are unreal: never *I wish it is sunny."),
      // --- causatives, participle clauses, reporting, clefts
      fb("I'm having my car ___ this afternoon.", ["fixed", "repaired"], "Hoy en la tarde me [arreglan] el carro.",
        "Causative: \"have\" + object + past participle. Someone else is fixing it for me."),
      tr("Conseguí que mi vecino me ayudara con la mudanza.", [
        "I got my neighbor to help me {with the move|move|with moving}.",
      ], "\"Get someone to do something\" (with \"to\"), but \"have someone do something\" (without \"to\")."),
      mc("Which sentence is correct?", [
        "Having finished the exam, I went home.",
        "Having finished the exam, the teacher let me go home.",
        "Finished the exam, I went home.",
        "Having finish the exam, I went home.",
      ], "The subject of a participle clause must be the subject of the main clause: I finished, so \"I went home\". With \"the teacher\" as subject, the teacher seems to have finished the exam."),
      wo("She offered to drive me to the station.", "Se ofreció a llevarme a la estación.",
        "\"Offer\" + to-infinitive: \"offered to drive\". «Llevar a alguien en carro» = \"drive someone\"."),
      // --- stubborn interference errors
      mc("Which sentence is correct?", [
        "My sister is 25, and she's married to a Canadian.",
        "My sister has 25 years, and she's married with a Canadian.",
        "My sister is 25 years, and she's married with a Canadian.",
        "My sister has 25, and she's married to a Canadian.",
      ], "Age uses \"be\": \"is 25\" or \"is 25 years old\", never *has 25 years. «Casada con» = \"married to\"."),
      tr("Depende del precio.", [
        "It depends on the price.",
      ], "«Depender de» = \"depend on\", never *depend of. And English needs the subject \"It\"."),
      tr("Estoy de acuerdo contigo, pero tenemos que discutir el horario.", [
        "I agree with you, but we {have to|need to|must} discuss the schedule.",
      ], "\"Agree\" is a verb: \"I agree\", never *I am agree. \"Discuss\" takes a direct object: never *discuss about."),
      mt("Match each reporting verb with the way it continues.", [
        ["She warned me", "not to touch it."],
        ["He denied", "taking the money."],
        ["They accused him", "of lying."],
        ["She suggested", "going to the beach."],
        ["He offered", "to help me."],
      ], "Each reporting verb has its own pattern: \"warn someone (not) to\", \"deny\" + -ing, \"accuse someone of\" + -ing, \"suggest\" + -ing, \"offer to\" + verb."),
      dc("I should have taken an umbrella this morning.",
        "\"Should have\" + participle criticizes a past action. In speech it sounds like \"should've\", but never write *should of."),
      dc("It was in this cafe that she told me the news.",
        "It-cleft focusing on a place: \"It was in ... that ...\". \"News\" is uncountable and singular."),
      sp("If I had saved more money, I wouldn't be so stressed now.",
        "Mixed conditional: past condition (\"had saved\"), present result (\"wouldn't be ... now\").",
        "Contract \"I had\" in speech: \"If I'd saved\".",
        "Say it in English: «Si hubiera ahorrado más dinero, ahora no estaría tan estresado.»"),
      sp("It's time we had a serious talk about our plans.",
        "\"It's time\" + subject + past simple (\"we had\") with present meaning: it should already be happening.",
        "Stress \"time\" and \"serious\".",
        "Say it in English: «Ya es hora de que tengamos una conversación seria sobre nuestros planes.»"),
    ],
  ),
];
