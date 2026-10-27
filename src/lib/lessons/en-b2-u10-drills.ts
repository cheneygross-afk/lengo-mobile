// Synced from cheneygross-afk/lengo:src/lib/lessons/en-b2-u10-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise, Lesson } from "./types";

// Required drill lessons for EN-B2 unit u10 (the passive in all tenses): a short recap, then graded practice.

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
  slug: `en-b2-passive-unit-drill-${n}`,
  level: "EN-B2",
  number: n,
  title: `Drill: ${title}`,
  summary,
  duration: `${Math.round((exercises.reduce((s, e) => s + SECONDS[e.type], 0) + 40) / 60)} min`,
  sections: [{ heading, body, examples: examples.map(([es, en]) => ({ es, en })) }],
  exercises,
});

export const EN_B2_U10_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. Passive in every tense; modals, infinitives, gerunds, get, by
  // (The Passive: All Tenses, Parts 1 and 2)
  // ---------------------------------------------------------------------
  lesson(
    1,
    "The Passive in Every Tense",
    "You will be able to form the passive in any tense, with modals (must be signed, should have been told), as an infinitive or gerund (needs to be fixed, being interrupted), with get, and decide when to keep \"by\".",
    "Recap: the tense lives in \"be\"",
    [
      "Every passive is a form of \"be\" + past participle, and only \"be\" changes: is done, was done, has been done, had been done, is being done, will be done, will have been done. After a modal use \"be\" (must be paid) or \"have been\" (should have been paid).",
      "After verbs that take \"to\", use \"to be\" + participle (I want to be invited); after prepositions and verbs that take -ing, use \"being\" + participle (without being seen). \"Get\" replaces \"be\" for sudden or bad events (got fired), and \"by\" + agent only stays when it is real information.",
    ],
    [
      ["The car is being washed right now.", "Están lavando el carro ahora mismo."],
      ["The flight had been delayed twice.", "Habían retrasado el vuelo dos veces."],
      ["The rent must be paid by the fifth.", "La renta se tiene que pagar antes del día cinco."],
      ["She hates being called by her full name.", "Odia que la llamen por su nombre completo."],
    ],
    [
      fb("The new schedule ___ next Monday.", ["will be announced", "is going to be announced"], "El nuevo horario [se anunciará] el próximo lunes.",
        "Future passive: \"will be\" + participle. Spanish uses «se» + future; English has no «se», so the passive does the job."),
      fb("My wallet ___! I can't find it anywhere.", ["has been stolen", "was stolen", "got stolen"], "¡Me [han robado] la billetera! No la encuentro por ningún lado.",
        "Recent news with a result now: present perfect passive \"has been stolen\". Don't forget \"been\": *My wallet has stolen would mean the wallet stole something."),
      fb("When we got to the restaurant, our table ___ to another family.", "had been given", "Cuando llegamos al restaurante, [le habían dado] nuestra mesa a otra familia.",
        "Something that happened before another past moment: past perfect passive \"had been\" + participle. It's the passive version of «habían dado»."),
      fb("The elevator ___ right now, so please use the stairs.", ["is being repaired", "is being fixed"], "[Están arreglando] el elevador ahora mismo, así que usen las escaleras, por favor.",
        "An action in progress done to the subject: \"is being\" + participle. Without \"being\", *The elevator is repairing would mean the elevator repairs something."),
      mc("Which sentence is correct?", [
        "A new library is being built downtown.",
        "A new library is being build downtown.",
        "A new library is building downtown.",
        "A new library is been built downtown.",
      ], "Continuous passive = \"is being\" + past participle \"built\". *Is being build uses the base form, *is building makes the library the builder, and *is been mixes two tenses."),
      tr("Han cancelado el partido por la lluvia.", "The {game|match} has been {canceled|cancelled} {because of|due to} the rain.",
        "«Han cancelado» with no real subject = present perfect passive \"has been canceled\". American spelling has one l (canceled); British has two."),
      tr("Están pintando el edificio esta semana.", ["The building is being painted this week.", "They{'re| are} painting the building this week."],
        "«Están pintando» with an unknown \"they\" becomes a continuous passive: the building is the topic, so it goes first."),
      tr("Cuando llegó la policía, ya habían robado el dinero.", ["When the police {arrived|got there}, the money had already been stolen.", "When the police {arrived|got there}, the money had been stolen already.", "The money had already been stolen when the police {arrived|got there}."],
        "Past perfect passive: \"had (already) been stolen\". \"Police\" is plural in English: \"the police arrived / were\"."),
      wo("By next summer the new airport will have been completed.", "Para el próximo verano ya se habrá terminado el nuevo aeropuerto.",
        "\"By\" + a future time + the idea of «ya» = future perfect passive \"will have been\" + participle.",
        ["The new airport will have been completed by next summer."]),
      tr("Van a derribar el estadio viejo.", "The old stadium is going to be {demolished|torn down|knocked down}.",
        "A plan: \"is going to be\" + participle. Spanish uses the third person plural with no subject; English starts with the stadium."),
      dc("The documents were being checked when the system crashed.",
        "Past continuous passive: \"were being checked\". Listen for \"being\" after \"were\"; it's short but essential."),
      fb("Seat belts ___ at all times.", ["must be worn", "have to be worn", "should be worn"], "[Se deben llevar] los cinturones de seguridad en todo momento.",
        "Modal + \"be\" + participle: \"must be worn\". After a modal, always the base form \"be\": never *must are worn or *must to be worn."),
      tr("Estos platos se pueden lavar en el lavavajillas.", ["These {plates|dishes} can be {washed|put} in the dishwasher.", "These {plates|dishes} are dishwasher safe."],
        "«Se pueden lavar» = \"can be washed\": modal + \"be\" + participle. The plates are the subject, as in the Spanish."),
      mc("Which sentence is correct?", [
        "The package should be delivered before noon.",
        "The package should is delivered before noon.",
        "The package should to be delivered before noon.",
        "The package should been delivered before noon.",
      ], "After \"should\" comes the bare infinitive \"be\" + participle. Modals never take \"to\" or a conjugated verb, and \"been\" only appears in \"should have been\"."),
      fb("I ___ about the delay. Nobody called me.", ["should have been told", "should have been informed", "should have been warned"], "[Me deberían haber avisado] del retraso. Nadie me llamó.",
        "«Me deberían haber avisado» = \"I should have been told\": the person who receives the information is the subject. *It should have been told to me is a calque."),
      tr("El incendio se podría haber evitado.", "The fire could have been {avoided|prevented}.",
        "Possible in the past, but it didn't happen: \"could have been\" + participle."),
      tr("El paquete debe de haberse enviado a la dirección equivocada.", ["The {package|parcel} must have been sent to the wrong address.", "They must have sent the {package|parcel} to the wrong address."],
        "A confident deduction about the past in the passive: \"must have been\" + participle. «Debe de» = \"must\" for a deduction."),
      lc("I should have been invited.", [
        "Me deberían haber invitado.",
        "Debería haber invitado a alguien.",
        "Seguro que me invitaron.",
        "Me van a invitar.",
      ], "\"Should have been invited\" = passive criticism: they didn't invite me, and they should have. \"I should have invited\" (active) would be your own mistake."),
      fb("The printer needs ___ before Monday.", ["to be fixed", "to be repaired", "fixing", "repairing"], "[Hay que arreglar] la impresora antes del lunes.",
        "\"Need\" + passive infinitive: \"needs to be fixed\". The short form \"needs fixing\" means the same. Spanish «hay que» has no subject; English uses the printer."),
      tr("No me gusta que me tomen fotos.", ["I don't like being photographed.", "I don't like having my {photo|picture|photograph} taken.", "I don't like it when people take {pictures|photos} of me."],
        "Spanish «que» + subjunctive after «gustar» becomes a passive gerund in English: \"being\" + participle."),
      tr("Mi hermana espera que la elijan para el equipo.", "My sister {hopes|expects|is hoping} to be {chosen|picked|selected} for the team.",
        "\"Hope/expect\" + passive infinitive \"to be chosen\". English avoids the Spanish «que» + subjunctive: *hopes that they choose her is possible but less natural."),
      wo("He walked out of the store without being noticed.", "Salió de la tienda sin que nadie lo notara.",
        "After a preposition (\"without\"), the passive is \"being\" + participle. Spanish «sin que» + subjunctive."),
      fb("My brother ___ from his job last week.", ["got fired", "was fired", "got laid off", "was laid off"], "A mi hermano lo [despidieron] del trabajo la semana pasada.",
        "Bad news that happens suddenly: the get-passive \"got fired\" is very common in conversation. \"Was fired\" is also correct."),
      tr("Nos perdimos en el centro de la ciudad.", "We got lost {downtown|in the city center|in the center of the city|in the city centre}.",
        "«Perderse» is \"get lost\", one of the fixed get-expressions (get married, get stuck, get hurt). *We lost ourselves is a calque."),
      mc("«Me robaron la laptop en el aeropuerto.» Which sentence sounds most natural?", [
        "My laptop was stolen at the airport.",
        "My laptop was stolen by someone at the airport.",
        "My laptop was stolen by people at the airport.",
        "Someone was stolen my laptop at the airport.",
      ], "The thief is unknown, so drop the agent: \"by someone\" or \"by people\" adds nothing. *Someone was stolen my laptop mixes active and passive."),
      tr("Esta canción la escribió una profesora de Texas.", ["This song was written by {a teacher from Texas|a Texas teacher}.", "A teacher from Texas wrote this song."],
        "Here the agent is the interesting information, so keep \"by\". Spanish puts the new information at the end («una profesora de Texas»), and so does the English passive."),
      mt("Match each active tense with its passive partner.", [
        ["they are building it", "it is being built"],
        ["they have built it", "it has been built"],
        ["they had built it", "it had been built"],
        ["they will have built it", "it will have been built"],
      ], "Move the active tense onto \"be\" and add the participle: continuous needs \"being\", perfect needs \"been\"."),
      sp("Your order has been shipped and will be delivered tomorrow.", "Two passives in one sentence: present perfect \"has been shipped\" and future \"will be delivered\".",
        "Contract \"has been\" to \"'s been\" in fast speech, but keep \"been\" audible.", "Say it in English: Su pedido se ha enviado y se entregará mañana."),
      dc("Nobody likes being ignored at a meeting.",
        "\"Like\" + -ing, so the passive is \"being ignored\". Spanish: «A nadie le gusta que lo ignoren»."),
      tr("Se están arreglando las calles del centro.", ["The streets downtown are being {repaired|fixed}.", "The streets {in the city center|in the center|in the city centre} are being {repaired|fixed}.", "The downtown streets are being {repaired|fixed}."],
        "Trap: «se están arreglando» looks reflexive, but the streets don't fix themselves. *The streets are repairing is wrong; you need \"are being repaired\"."),
      mc("«Me robaron el celular.» Which translation is correct?", [
        "My phone was stolen.",
        "My phone stole.",
        "I was stolen my phone.",
        "My phone has stolen.",
      ], "The phone is what was stolen, so it's the subject of a passive. *I was stolen my phone copies the Spanish «me»; in English you can't \"be stolen\" a thing."),
      tr("Para el viernes ya se habrán corregido todos los exámenes.", "By Friday, all the exams will have been {graded|marked|corrected}.",
        "\"By\" + future deadline + «ya habrán» = future perfect passive \"will have been\" + participle. American English \"grade\" an exam; British \"mark\"."),
      tr("Si me lo hubieran dicho, habría llegado a tiempo.", ["If {I had been told|they had told me|you had told me}, I would have {arrived|gotten there|been there|come} on time.", "I would have {arrived|gotten there|been there|come} on time if {I had been told|they had told me|you had told me}."],
        "Trap: a third conditional with a passive in the \"if\" clause: \"had been told\". *If they would have told me puts \"would\" in the wrong clause."),
      sp("This contract should have been signed last week.", "\"Should have been\" + participle criticizes something that didn't happen.",
        "Stress \"SHOULD\" and \"SIGNED\"; \"have been\" is weak: /ʃʊdəvbɪn/.", "Say it in English: Este contrato se tendría que haber firmado la semana pasada."),
    ],
  ),

  // ---------------------------------------------------------------------
  // Drill 2. Spanish se, passive errors, news style
  // (Contrast Clinic: se, Error Hunt: Passives, Transform: Headline Story)
  // ---------------------------------------------------------------------
  lesson(
    2,
    "Se, Passive Errors and News Style",
    "You will be able to translate Spanish «se» naturally, avoid the classic passive errors (was build, is repairing, was happened, I born) and turn news into passive sentences and headlines.",
    "Recap: the thing becomes the subject",
    [
      "With «se» + a thing, the thing becomes the subject and goes first: \"English is spoken here\", never *Is spoken English. Signs drop the verb (For sale, For rent), «se dice que» becomes \"It is said that...\", \"X is said to...\" or \"They say...\", and «se puede» in conversation is general \"you\".",
      "Check every passive: a form of \"be\", the past participle (built, not *build), \"being\" for continuous, \"been\" for perfect. Verbs with no object (happen, rise, die) are never passive, «nacer» is \"be born\", and news drops \"by\" unless the agent is new information.",
    ],
    [
      ["Rooms for rent.", "Se rentan cuartos."],
      ["Coffee is grown in the mountains.", "En las montañas se cultiva café."],
      ["The meeting was held in the main office.", "La reunión se celebró en la oficina principal."],
      ["Bank robbed in broad daylight.", "Asaltan un banco a plena luz del día."],
    ],
    [
      tr("Se renta casa con jardín.", ["House with {a |}{yard|garden} for rent.", "House for rent with {a |}{yard|garden}."],
        "Signs and ads drop the verb: «se renta» is \"For rent\" (British \"To let\"). *Is rented house or *It rents house are impossible."),
      mc("«Se venden bicicletas usadas.» What does the sign say?", [
        "Used bikes for sale",
        "Are sold used bikes",
        "It sells used bikes",
        "Used bikes sell",
      ], "On signs, «se vende(n)» is \"For sale\". English needs a subject before a verb, so *Are sold used bikes and *It sells... don't work."),
      fb("Millions of avocados ___ to the United States every year.", ["are exported", "are sent", "are shipped"], "[Se exportan] millones de aguacates a Estados Unidos cada año.",
        "«Se» + thing (pasiva refleja) = passive with the thing as subject: \"avocados are exported\". The verb agrees with \"avocados\" (plural)."),
      tr("Aquí se habla portugués.", ["Portuguese is spoken here.", "We speak Portuguese here."],
        "Subject first: \"Portuguese is spoken here\". *Is spoken Portuguese here and *Here is spoken Portuguese copy the Spanish order."),
      mc("Which sentence is correct?", [
        "French is spoken in parts of Canada.",
        "Is spoken French in parts of Canada.",
        "It is spoken French in parts of Canada.",
        "French speaks in parts of Canada.",
      ], "The language is the subject and comes before the passive verb. A dummy \"it\" can't replace it, and *French speaks makes the language the speaker."),
      tr("Se contrató a tres enfermeras nuevas.", "Three new nurses {were|have been} {hired|employed|taken on}.",
        "«Se» + «a» + people: in English the people simply become the subject of a passive. Plural subject, so \"were hired\"."),
      tr("Nos dijeron que trajéramos el pasaporte.", "We were told to bring our {passports|passport}.",
        "«Nos dijeron que» + subjunctive = \"We were told to\" + base verb. The people who receive the instruction are the subject."),
      fb("I ___ a free upgrade at the hotel.", ["was given", "was offered"], "[Me dieron] una mejora gratis en el hotel.",
        "With \"give\", \"offer\", \"tell\" and \"show\", English prefers the person as subject: \"I was given...\". \"An upgrade was given to me\" is correct but much less natural."),
      tr("Dicen que este restaurante es el mejor de la ciudad.", ["They say {that |}this restaurant is the best in {the city|town}.", "People say {that |}this restaurant is the best in {the city|town}.", "It is said that this restaurant is the best in {the city|town}.", "This restaurant is said to be the best in {the city|town}."],
        "Three registers: \"They/People say\" in conversation, \"It is said that\" in reports, \"X is said to be\" in compact news style. Never *Says that or *It says that."),
      fb("___ that the storm will reach the coast tonight.", "It is expected", "[Se espera] que la tormenta llegue a la costa esta noche.",
        "«Se espera que» in a news report: \"It is expected that...\". English needs \"it\" as the subject: *Is expected that is impossible."),
      tr("¿Cómo se abre esta ventana?", ["How do {you|I} open this window?", "How does this window open?"],
        "General «se» in a question = \"you\": \"How do you...?\". A passive (\"How is this window opened?\") is grammatical but sounds odd in conversation."),
      lc("You can't take photos in the museum.", [
        "No se pueden tomar fotos en el museo.",
        "Tú no sabes tomar fotos en el museo.",
        "No tomaste fotos en el museo.",
        "No se pudieron tomar fotos en el museo.",
      ], "General \"you\" + \"can't\" is the conversational translation of «no se puede». It isn't about you personally."),
      mc("Which sentence is correct?", [
        "The stadium was built in 2005.",
        "The stadium was build in 2005.",
        "The stadium was builded in 2005.",
        "The stadium built in 2005.",
      ], "Passive = \"was\" + past participle \"built\" (build, built, built). *Was build uses the base form, *builded doesn't exist, and without \"was\" there's no passive."),
      fb("The winner ___ by the audience.", "was chosen", "Al ganador lo [eligió] el público.",
        "Choose, chose, chosen: the passive needs the third form, \"was chosen\", not *was chose or *was choose."),
      fb("The report ___ in Spanish and then translated.", "was written", "El informe [se escribió] en español y luego se tradujo.",
        "Write, wrote, written: \"was written\". *Was wrote is one of the most frequent participle errors."),
      tr("Mi computadora se está reparando.", ["My computer is being {repaired|fixed}.", "They're {repairing|fixing} my computer."],
        "The computer doesn't repair anything, so you need the continuous passive \"is being repaired\". *My computer is repairing is the classic «se» error."),
      mc("Which sentence is correct?", [
        "The accident happened on the highway.",
        "The accident was happened on the highway.",
        "The accident has been happened on the highway.",
        "The accident was happen on the highway.",
      ], "\"Happen\" has no object, so it can never be passive. Spanish «ocurrió» is active too: \"The accident happened\"."),
      tr("Los precios han subido mucho este año.", "Prices have {gone up|risen|increased} a lot this year.",
        "\"Rise\" and \"go up\" have no object, so no passive: *Prices have been risen is impossible. (\"Raise\", with an object, is different: \"They have raised prices\".)"),
      tr("Mi abuelo nació en Guadalajara en 1950.", "My grandfather was born in Guadalajara in 1950.",
        "«Nacer» is a verb, but \"born\" is a participle, so it always needs \"be\": \"was born\". Never *My grandfather born or *is born for a past event."),
      tr("Cinco personas resultaron heridas en el choque.", "Five people were {injured|hurt} in the {crash|accident|collision}.",
        "«Resultar herido» is the fixed passive \"be injured\" or \"be hurt\", not *result injured."),
      fb("The hotel ___ right next to the beach.", ["is located", "is situated"], "El hotel [está situado] justo al lado de la playa.",
        "«Estar situado» = \"be located\", a fixed passive. *The hotel locates next to the beach is wrong."),
      wo("A teenager has been arrested at the border.", "Han detenido a un adolescente en la frontera.",
        "Present perfect passive: \"has been\" + participle. Without \"been\", *A teenager has arrested would mean the teenager arrested someone."),
      dc("The missing dog still hasn't been found.",
        "\"Hasn't been found\": negative present perfect passive. \"Still\" goes before \"hasn't\"."),
      fb("The main road ___ because of the flooding.", "has been closed", "[Han cerrado] la carretera principal por las inundaciones.",
        "Active \"They have closed the main road\" becomes passive with the same tense: \"has been closed\". Singular subject, so \"has\"."),
      mc("«Police are questioning two men.» Which passive keeps the meaning?", [
        "Two men are being questioned.",
        "Two men are questioned.",
        "Two men have questioned.",
        "Two men are being question.",
      ], "Keep the tense: \"are questioning\" becomes \"are being questioned\". The agent (police) is obvious, so news usually drops it."),
      mt("Match each headline with its full sentence.", [
        ["Mayor to resign", "The mayor is going to resign."],
        ["Two men arrested", "Two men have been arrested."],
        ["Storm hits coast", "A storm has hit the coast."],
        ["School to be closed", "The school is going to be closed."],
      ], "Headline code: participle alone = passive past event; \"to\" + verb = future; present simple = recent event; \"to be\" + participle = future passive."),
      tr("El incendio lo provocó una vela.", ["The fire was {started|caused} by a candle.", "A candle {started|caused} the fire."],
        "The cause is the news here, so keep \"by\" + agent. «Provocar un incendio» is \"start a fire\"."),
      tr("Atacaron al cartero con un palo.", "The {mail carrier|mailman|postman|letter carrier} was attacked with a stick.",
        "\"With\" introduces the tool, \"by\" the agent. Spanish «con» is always \"with\" here: *attacked by a stick would mean the stick attacked him."),
      sp("Two people have been rescued from the river.", "Present perfect passive for fresh news: \"have been rescued\". The rescuers are obvious, so no \"by\".",
        "Say \"have been\" quickly: /əv bɪn/, and stress \"RESCUED\" and \"RIVER\".", "Say it in English: Han rescatado a dos personas del río."),
      wo("The new museum will be opened by the president.", "La presidenta inaugurará el nuevo museo.",
        "Future passive \"will be opened\"; the agent is important (the president), so \"by\" stays."),
      tr("Se dice que el dueño es millonario.", ["The owner is said to be a millionaire.", "It is said that the owner is a millionaire.", "{They|People} say {that |}the owner is a millionaire."],
        "Trap: *Is said that the owner... has no subject. English needs \"It is said that\", or the owner as subject: \"The owner is said to be...\"."),
      tr("Se venden más carros eléctricos que nunca.", "More electric cars are {being |}sold than ever{ before|}.",
        "Trap: the cars are the subject and come first. *Are sold more electric cars copies the Spanish order."),
      mc("«No se permite fumar dentro del edificio.» Which translation is correct?", [
        "Smoking is not allowed inside the building.",
        "It is not allowed smoke inside the building.",
        "Is not allowed smoking inside the building.",
        "Smoking not allows inside the building.",
      ], "In rules and signs, the passive with the activity as subject: \"Smoking is not allowed\". In conversation you'd say \"You can't smoke inside\"."),
      dc("I was offered a job in Denver, but I turned it down.",
        "\"I was offered a job\": the person is the subject of the passive, just like \"I was given\" and \"I was told\"."),
    ],
  ),

  // ---------------------------------------------------------------------
  // Drill 3. Chasing repairs, describing processes, and the whole unit
  // (Dialogue Lab, Real Mission: Process, Spiral Review)
  // ---------------------------------------------------------------------
  lesson(
    3,
    "Updates, Complaints and Processes",
    "You will be able to ask for and give updates in the passive, complain politely about what should have been done, describe a process step by step, and choose between active and passive in any tense.",
    "Recap: when the thing is the topic",
    [
      "To chase a repair or an order, put the auxiliary first: \"Has it been fixed yet?\", \"Is it being looked at?\". Complaints use \"should have been\" + participle and \"I was told it would...\", and prepositions stay after the participle: \"It's being dealt with\".",
      "Processes use the present simple passive (\"The beans are roasted\"), linked with first, then, once + present perfect passive, or after/before + being + participle. Verbs with no object (boil, rise, happen) stay active.",
    ],
    [
      ["Has my order been shipped yet?", "¿Ya enviaron mi pedido?"],
      ["It's being taken care of.", "Nos estamos ocupando de eso."],
      ["It should have been delivered on Monday.", "Lo tendrían que haber entregado el lunes."],
      ["After being cleaned, the fish is frozen.", "Después de limpiarlo, el pescado se congela."],
    ],
    [
      fb("Has my car ___ yet?", ["been repaired", "been fixed"], "¿Ya [han arreglado] mi carro?",
        "Present perfect passive question: \"Has\" + subject + \"been\" + participle. The car is the topic, so the passive is natural."),
      mc("Which question is correct?", [
        "Has my refund been processed yet?",
        "Does my refund been processed yet?",
        "Has my refund processed yet?",
        "Is my refund been processed yet?",
      ], "Passive questions put the first auxiliary before the subject: \"Has... been processed?\". Never add \"do\", and don't drop \"been\"."),
      tr("¿Cuándo me van a mandar la factura?", ["When will the {invoice|bill} be sent {to me|}?", "When is the {invoice|bill} going to be sent {to me|}?", "When will I be sent the {invoice|bill}?"],
        "Future passive question: \"When will it be sent?\". The invoice is what matters, so it becomes the subject.", "Translate into English using the passive."),
      fb("Your application ___ at the moment.", ["is being reviewed", "is being processed", "is being checked"], "[Estamos revisando] su solicitud en este momento.",
        "Service staff use the continuous passive for work in progress: \"is being\" + participle."),
      mc("Which sentence is complete?", [
        "It's being looked at by our technician.",
        "It's being looked by our technician.",
        "It's looking at by our technician.",
        "It's been look at by our technician.",
      ], "With \"look at\", the preposition stays after the participle: \"being looked at\". Dropping \"at\" is a frequent Spanish-speaker error."),
      tr("Ya nos ocupamos del problema.", "The problem has been {taken care of|dealt with|solved|fixed}.",
        "\"Take care of\" and \"deal with\" keep their prepositions in the passive: \"has been taken care of\".", "Translate into English using the passive."),
      tr("Le avisaremos por mensaje cuando esté listo.", "You'll be {notified|told|informed|contacted} by text{ message|} when it's ready.",
        "A promise in the future passive: \"You'll be notified\". Note \"when it's ready\": present tense after \"when\", not *when it will be ready."),
      fb("My laptop ___ last Monday, and I still don't have it.", ["should have been returned", "should have been sent back", "should have been delivered"], "[Me tendrían que haber devuelto] la laptop el lunes pasado, y todavía no la tengo.",
        "A polite but firm complaint: \"should have been\" + participle for what didn't happen."),
      tr("Me dijeron que estaría listo para el jueves.", "I was told {that |}it would be ready by Thursday.",
        "\"I was told\" + reported future \"would be\": the promise was made in the past, so not *will be. «Para el jueves» = \"by Thursday\"."),
      tr("Me prometieron un descuento.", ["I was promised a discount.", "They promised me a discount."],
        "Like \"tell\" and \"give\", \"promise\" makes the person the subject of the passive: \"I was promised...\"."),
      wo("I'm afraid the heating still hasn't been repaired.", "Me temo que todavía no han arreglado la calefacción.",
        "\"I'm afraid\" softens the complaint; \"still hasn't been repaired\" is the negative present perfect passive."),
      lc("Your payment is being checked.", [
        "Estamos verificando su pago.",
        "Su pago ya se verificó.",
        "Tiene que verificar su pago.",
        "Su pago se verificará mañana.",
      ], "\"Is being checked\" = in progress now. \"Has been checked\" would be finished, and \"will be checked\" future."),
      fb("First, the apples ___ by hand.", ["are picked", "are collected", "are harvested"], "Primero, las manzanas [se recogen] a mano.",
        "Processes use the present simple passive: \"are\" + participle. Spanish uses «se»; English has no «se», so the passive does the job."),
      fb("Then the juice ___ into bottles.", ["is poured", "is put"], "Luego el jugo [se vierte] en botellas.",
        "\"Juice\" is singular (uncountable), so \"is poured\"."),
      tr("Las naranjas se lavan, se pelan y se exprimen.", "The oranges are washed, peeled and squeezed.",
        "Several steps with the same subject: say \"are\" once and list the participles. No need to repeat \"are\" or the subject."),
      mc("Which sentence is correct?", [
        "Once the bread has been baked, it is cut into slices.",
        "Once the bread has been baked, it cuts into slices.",
        "Once the bread has been bake, it is cut into slices.",
        "Once the bread is been baked, it is cut into slices.",
      ], "\"Once\" + present perfect passive (\"has been baked\"), then the next step in the present simple passive (\"is cut\"). The bread doesn't cut anything, so \"it cuts\" is wrong."),
      tr("Después de ser revisada, cada maleta se carga en el avión.", "After being {checked|inspected|screened}, each suitcase is loaded {onto|on|into} the {plane|airplane}.",
        "After a preposition, the passive is \"being\" + participle: \"after being checked\". *After be checked is wrong."),
      wo("Before being sold, the cheese is aged for six months.", "Antes de venderse, el queso se cura durante seis meses.",
        "\"Before being\" + participle joins two steps in one sentence."),
      mc("Which sentence is correct?", [
        "When the milk boils, the heat is turned down.",
        "When the milk is boiled, the heat turns down.",
        "When the milk boils, the heat turns down by the cook.",
        "When the milk is boiling, the heat is turn down.",
      ], "\"Boil\" happens by itself, so it stays active. Turning down the heat is done by someone, so it's passive: \"is turned down\". Spanish «se» does not always mean passive."),
      dc("Once the forms have been checked, they are sent to the main office.",
        "\"Once\" + \"have been checked\" (present perfect passive), then \"are sent\" (present simple passive)."),
      sp("Finally, the boxes are labeled and shipped to the stores.", "One \"are\" for two participles: \"are labeled and shipped\".",
        "American spelling \"labeled\"; British \"labelled\". Pronounce \"shipped\" with a final /t/.", "Say it in English: Por último, las cajas se etiquetan y se envían a las tiendas."),
      tr("¿Dónde se fabrican estos tenis?", "Where are these {sneakers|shoes|trainers|tennis shoes} {made|manufactured}?",
        "Questions in the passive use \"be\", never \"do\": \"Where are they made?\", not *Where do they made?"),
      mc("Which question is correct?", [
        "When was the museum opened?",
        "When did the museum opened?",
        "When the museum was opened?",
        "When did the museum be opened?",
      ], "Passive question: question word + \"was\" + subject + participle. \"Do/did\" never appears in a passive."),
      mt("Match each active verb with its passive form.", [
        ["they must pay it", "it must be paid"],
        ["they are cleaning it", "it is being cleaned"],
        ["they have sold it", "it has been sold"],
        ["they will have finished it", "it will have been finished"],
      ], "The tense moves onto \"be\": modal + be, continuous + being, perfect + been."),
      tr("El año que viene se abrirá otra sucursal.", ["Another branch {will be|is going to be} opened next year.", "Next year another branch {will be|is going to be} opened.", "Another branch will open next year."],
        "Future passive: \"will be\" + participle. «Sucursal» = \"branch\". \"Is going to be opened\" is also fine for a plan."),
      tr("Mi hermano escribió este libro.", ["My brother wrote this book.", "This book was written by my brother."],
        "If you're talking about your brother, the active is better: the agent is the topic. The passive is correct too, but you would use it if the book were the topic."),
      fb("Something strange ___ at the office yesterday.", "happened", "Ayer [pasó] algo raro en la oficina.",
        "Trap: \"happen\" has no object, so it's never passive. *Something strange was happened is impossible."),
      tr("Mi hijo nació en un taxi camino al hospital.", "My son was born in a {taxi|cab} on the way to the hospital.",
        "Trap: «nació» = \"was born\", always with \"be\". *My son born and *My son was borned are wrong."),
      tr("La escuela se debería haber renovado hace años.", "The school should have been {renovated|repaired|remodeled|modernized|updated} years ago.",
        "Modal past passive: \"should have been\" + participle, criticizing something that didn't happen."),
      fb("Your new card ___ to your home address within five days.", ["will be sent", "will be mailed", "will be delivered"], "Su nueva tarjeta [se enviará] a su domicilio en cinco días.",
        "A promise: future passive \"will be\" + participle."),
      tr("Para 2030 se habrán plantado un millón de árboles.", "By 2030, {a|one} million trees will have been planted.",
        "Deadline in the future + «ya se habrán» = future perfect passive \"will have been planted\"."),
      tr("Cuando llegamos, ya habían vendido todas las entradas.", ["When we {arrived|got there}, all the tickets had already been sold.", "When we {arrived|got there}, all the tickets had been sold already."],
        "Past perfect passive: \"had already been sold\", before the moment we arrived. In American English \"tickets\" works for concerts and movies."),
      dc("The meeting has been moved to Thursday afternoon.",
        "\"Has been moved\": present perfect passive. In speech, \"has been\" often sounds like \"'s been\"."),
      sp("I was told it would be delivered on Monday, but it hasn't arrived.", "\"I was told\" + \"would be delivered\" (reported future passive), then active \"hasn't arrived\": \"arrive\" has no object, so it's never passive.",
        "Stress \"TOLD\", \"MONday\" and \"HASN'T\".", "Say it in English: Me dijeron que lo entregarían el lunes, pero no ha llegado."),
    ],
  ),
];
