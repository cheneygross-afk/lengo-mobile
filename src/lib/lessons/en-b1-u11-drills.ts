// Synced from cheneygross-afk/lengo:src/lib/lessons/en-b1-u11-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise, Lesson } from "./types";

// Required drill lessons for EN-B1 unit u11 (obligation, prohibition and advice; health): a short recap, then graded practice.

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
  slug: `en-b1-obligation-unit-drill-${n}`,
  level: "EN-B1",
  number: n,
  title: `Drill: ${title}`,
  summary,
  duration: `${Math.round((exercises.reduce((s, e) => s + SECONDS[e.type], 0) + 40) / 60)} min`,
  sections: [{ heading, body, examples: examples.map(([es, en]) => ({ es, en })) }],
  exercises,
});


export const EN_B1_U11_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. Must / have to, mustn't vs don't have to, need, allowed to,
  // supposed to, should / ought to / had better, should have
  // ---------------------------------------------------------------------
  lesson(
    1,
    "Must, Have To, Should & Should Have",
    "You will be able to say what is necessary, not necessary, prohibited or expected, give advice with should, ought to and had better, and criticize the past with should have.",
    "Recap: must, have to, mustn't, should and should have",
    [
      "\"Must\" and \"have to\" both mean «tener que», but only \"have to\" has a past (\"had to\") and a future (\"will have to\"). In the negative they split: \"mustn't\" (or \"can't\", \"aren't allowed to\") means it is prohibited, while \"don't have to\" (or \"don't need to\") means it isn't necessary.",
      "\"Should\", \"ought to\" and \"'d better\" give advice; only \"ought to\" takes \"to\". For a past mistake, use \"should have\" or \"shouldn't have\" + past participle, and for a plan or rule that people don't follow, \"be supposed to\".",
    ],
    [
      ["You don't have to bring a gift, but you mustn't be late.", "No hace falta que traigas regalo, pero no puedes llegar tarde."],
      ["We had to wait an hour for the bus.", "Tuvimos que esperar una hora el autobús."],
      ["You'd better charge your phone before the trip.", "Más vale que cargues el celular antes del viaje."],
      ["I should have saved more money last year.", "Tendría que haber ahorrado más dinero el año pasado."],
    ],
    [
      fb("She ___ get up at five on weekdays.", "has to", "[Tiene que] levantarse a las cinco entre semana.",
        "\"Have to\" is a normal verb, so it takes -s with \"she\": \"has to\". \"Must\" would also be grammatical, but for a routine imposed by work or a timetable, \"has to\" is the natural choice."),
      mc("Which sentence is correct?", [
        "I must finish this report today.",
        "I must to finish this report today.",
        "I musts finish this report today.",
        "I must finishing this report today.",
      ], "\"Must\" is a modal: base verb right after it, no \"to\", no -s. The «que» in «tengo que» is what tempts learners to add *to."),
      tr("¿Tienes que trabajar el sábado?", "Do you have to work {on Saturday|this Saturday|Saturday}?",
        "Questions with \"have to\" need \"do\": \"Do you have to...?\". *Have you to work? is not used in modern English."),
      fb("Last year we ___ move to a smaller apartment.", "had to", "El año pasado [tuvimos que] mudarnos a un departamento más pequeño.",
        "\"Must\" has no past form, so «tuvimos que» is always \"had to\". *We musted is impossible."),
      tr("Tendrás que mostrar tu boleto en la entrada.", "You will {have|need} to show your ticket at the {entrance|door}.",
        "\"Must\" has no future either: «tendrás que» is \"will have to\". *You will must does not exist."),
      tr("No tuvimos que pagar la cena; invitó mi jefe.", "We didn't have to pay for {|the }dinner; my boss {paid|paid for it|treated us}.",
        "Past negative: \"didn't have to\" + base verb. Only \"didn't\" carries the past, so *didn't had to is wrong. You \"pay for\" something you buy."),
      mt("Match each sentence with its meaning.", [
        ["You mustn't park here.", "Está prohibido."],
        ["You don't have to park here.", "No es necesario."],
        ["You're not supposed to park here.", "La norma dice que no, pero hay quien lo hace."],
        ["You must park here.", "Es obligatorio."],
        ["You're allowed to park here.", "Está permitido."],
      ], "Five different ideas: prohibition (\"mustn't\"), no obligation (\"don't have to\"), an expected rule (\"be supposed to\"), obligation (\"must\") and permission (\"be allowed to\")."),
      fb("You ___ bring towels; the hotel gives you some.", ["don't have to", "don't need to", "needn't"], "[No tienes que] traer toallas; el hotel te da.",
        "Bringing towels is optional, not forbidden, so \"don't have to\" (or \"don't need to\", \"needn't\"). Test: «aunque puedes si quieres» still makes sense."),
      fb("Passengers ___ open the doors while the train is moving.", ["must not", "can't", "are not allowed to"], "Los pasajeros [no deben] abrir las puertas mientras el tren está en marcha.",
        "This is a prohibition, typical of written rules: \"must not\" (or \"can't\", \"aren't allowed to\"). \"Don't have to\" would mean it's optional, which is dangerous here."),
      mc("Your friend offers to drive you to the airport, but you've already booked a taxi. What do you say?", [
        "Thanks, but you don't have to.",
        "Thanks, but you mustn't.",
        "Thanks, but you don't must.",
        "Thanks, but you haven't to.",
      ], "It isn't necessary, so \"you don't have to\". \"You mustn't\" would forbid your friend from helping, and *don't must mixes two systems."),
      tr("No hace falta que me llames cuando llegues.", "You don't {have|need} to call me when you {arrive|get there|get here}.",
        "«No hace falta» = \"don't have to\" or \"don't need to\". After \"when\", English uses the present for the future: \"when you arrive\", not *when you will arrive."),
      tr("No se nos permite usar el celular en el trabajo.", ["We aren't allowed to use our {phones|cell phones|cellphones} at work.", "We can't use our {phones|cell phones|cellphones} at work."],
        "English makes the person the subject: \"We aren't allowed to\". Remember \"be\" and the -ed: never *We don't allowed to or *We aren't allow to."),
      wo("Kids under twelve aren't allowed to use the pool.", "Los niños menores de doce años no pueden usar la piscina.",
        "Subject + \"aren't allowed to\" + base verb. \"Under twelve\" = «menores de doce»."),
      lc("I wasn't allowed to stay out late when I was a teenager.", [
        "De adolescente, no me dejaban quedarme fuera hasta tarde.",
        "De adolescente, no quería quedarme fuera hasta tarde.",
        "De adolescente, no tenía que volver temprano.",
        "De adolescente, me quedaba fuera hasta tarde aunque estaba prohibido.",
      ], "\"I wasn't allowed to\" = «no me dejaban». Spanish makes the parents the subject; English makes the person who gets (or doesn't get) permission the subject."),
      tr("Se supone que el museo abre a las nueve, pero todavía está cerrado.", "The museum is supposed to open at {nine|nine o'clock}, but it's still closed.",
        "\"Be supposed to\" = what the plan or the rule says, often when reality is different. Keep \"is\" and the -d: never *The museum suppose to open."),
      fb("I ___ call my sister yesterday, but I forgot.", "was supposed to", "Ayer [tenía que] llamar a mi hermana, pero se me olvidó.",
        "«Tenía que» for a plan that didn't happen is \"was supposed to\". \"Had to\" would mean it was necessary and you did it."),
      dc("You're supposed to turn off your phone during the movie.",
        "In speech \"supposed to\" sounds like \"supposta\", but in writing keep the \"d\" and the \"to\": \"You're supposed to\"."),
      tr("Deberías tomar más agua.", ["You should drink more water.", "You ought to drink more water."],
        "Advice: \"should\" + base verb, no \"to\" (*should to drink). With water and other drinks, «tomar» is \"drink\"."),
      fb("I don't think you ___ buy that car; it's too expensive.", "should", "Creo que no [deberías] comprar ese carro; es demasiado caro.",
        "English prefers \"I don't think you should...\" to \"I think you shouldn't...\" for «creo que no deberías». The negative moves to \"think\"."),
      mc("Which sentence is correct?", [
        "You'd better not forget your keys.",
        "You'd better don't forget your keys.",
        "You hadn't better forget your keys.",
        "You'd better to not forget your keys.",
      ], "The negative of \"had better\" is \"had better not\" + base verb. No \"do\", no \"to\", and \"not\" goes after \"better\"."),
      tr("Más vale que salgamos ya, o vamos a llegar tarde.", "We'd better {leave|go} now, {or|otherwise} we {will|are going to} be late.",
        "Strong advice with a warning is \"'d better\" (\"had better\"), even though it is about now. No \"to\" after it: *We'd better to leave is wrong."),
      sp("We ought to leave soon.", "\"Ought to\" means the same as \"should\" but, unlike \"should\", it has \"to\".",
        "\"Ought to\" sounds like \"AW-tuh\".", "Say it in English using \"ought to\": Deberíamos irnos pronto."),
      fb("You ___ me about the party. I would have come!", "should have told", "[Deberías haberme contado] lo de la fiesta. ¡Habría ido!",
        "Criticism of the past: \"should have\" + past participle. *You should told me and *You should tell me yesterday are the typical slips."),
      tr("No debería haber comido tanto pastel.", "I shouldn't have eaten so much cake.",
        "A regret about something you did: \"shouldn't have\" + participle \"eaten\". The participle, not the past simple: never *shouldn't have ate."),
      wo("We should have left the house earlier.", "Deberíamos haber salido de casa antes.",
        "\"Should\" + \"have\" + participle \"left\", then the rest. All three parts are needed."),
      dc("She shouldn't have spent all her money on clothes.",
        "\"Shouldn't have\" is said fast: \"SHOULD-nt-uv\". \"Spent\" is the participle of \"spend\", and you spend money \"on\" something."),
      lc("Oh, you shouldn't have!", [
        "Se dice al recibir un regalo, para dar las gracias.",
        "Se dice para criticar a alguien por un error grave.",
        "Se dice para prohibir algo.",
        "Se dice cuando alguien llega tarde.",
      ], "Said when someone gives you a present, it means «no tenías que haberte molestado». It's polite thanks, not criticism.", "When do people say this?"),
      wo("You don't need to bring your laptop tomorrow.", "Mañana no hace falta que traigas tu computadora portátil.",
        "\"Don't need to\" works like a normal verb: \"don't\" + \"need to\" + base verb. It means the same as \"don't have to\"."),
      mc("A parent sees a child near a hot oven. Which sentence fits?", [
        "Don't touch the oven! It's hot!",
        "You don't have to touch the oven! It's hot!",
        "You don't need to touch the oven! It's hot!",
        "You needn't touch the oven! It's hot!",
      ], "The child needs a prohibition: \"Don't touch\", \"You can't touch\" or \"You mustn't touch\". The other three all mean «no hace falta», as if touching were fine."),
      tr("Tuve que trabajar hasta tarde, así que no pude ir al gimnasio.", ["I had to work late, so I couldn't go to the gym.", "I had to work late, so I wasn't able to go to the gym."],
        "\"Had to\" + base verb \"work\": one past form is enough (*had to worked is wrong). \"Couldn't\" is fine for one specific negative situation."),
      tr("Ojalá hubiera estudiado más; tendría que haber empezado antes.", "I wish I had studied more; I should have started {earlier|sooner}.",
        "Two ways to express regret: \"I wish I had\" + participle and \"I should have\" + participle. Neither takes \"would\"."),
      tr("Si me hubieras avisado, no habría tenido que esperar.", "If you had {told me|let me know|warned me}, I wouldn't have had to wait.",
        "Third conditional with \"have to\": the past of \"have to\" in an imaginary past is \"would have had to\". \"Must\" can't do this, which is why \"have to\" is so useful."),
      fb("Visitors ___ to take photos inside the museum.", "aren't allowed", "Los visitantes [no pueden] tomar fotos dentro del museo.",
        "A rule about permission: \"aren't allowed to\". The \"to\" is already in the sentence, so the blank is \"aren't allowed\". Not *don't allowed."),
      dc("We had to take a taxi because we missed the last bus.",
        "\"Had to take\": the past is only on \"had\". \"Missed\" is right for a bus or a train («perder»); \"lost\" is for objects."),
      sp("You don't have to come if you're tired.", "«No hace falta que vengas» is \"You don't have to come\": kind and optional. \"You mustn't come\" would be an order.",
        "Stress \"DON'T\" and \"TIRED\"; say \"have to\" as \"HAF-tuh\".", "Say it in English: No hace falta que vengas si estás cansado."),
      mc("Which sentence is correct?", [
        "Do I have to sign here?",
        "Do I must sign here?",
        "Must I to sign here?",
        "Do I have sign here?",
      ], "Everyday questions about obligation use \"Do I have to...?\". \"Must\" never takes \"do\", and \"have to\" needs its \"to\"."),
    ],
  ),

  // ---------------------------------------------------------------------
  // Drill 2. Error hunt, house rules, at the doctor's, health words,
  // and the whole unit mixed
  // ---------------------------------------------------------------------
  lesson(
    2,
    "House Rules, the Doctor's & the Whole Unit",
    "You will be able to write and understand house rules, describe symptoms and follow a doctor's advice, and pick the right modal of obligation, prohibition or advice without the typical errors.",
    "Recap: rules, advice and health",
    [
      "Choose by meaning, not by the Spanish word: obligation (\"have to\", \"must\"), no obligation (\"don't have to\", \"don't need to\"), prohibition (\"can't\", \"mustn't\", \"aren't allowed to\"), advice (\"should\", \"'d better\") and past regret (\"should have\" + participle). Modals take the bare verb, never \"to\", and \"must\" never takes \"do\".",
      "At the doctor's: \"make an appointment\", \"I've had a cough since Friday\", \"take\" medicine, and a \"prescription\" (a recipe is for cooking). For pain, the body part is the subject (\"My back hurts\"), and remember that \"constipated\" means «estreñido».",
    ],
    [
      ["Guests can't use the kitchen after ten.", "Los huéspedes no pueden usar la cocina después de las diez."],
      ["I've had a headache since this morning.", "Me duele la cabeza desde esta mañana."],
      ["You should take this medicine twice a day.", "Deberías tomar este medicamento dos veces al día."],
      ["We take turns doing the dishes.", "Nos turnamos para lavar los platos."],
    ],
    [
      mc("Which sentence is correct?", [
        "You should see a dentist.",
        "You should to see a dentist.",
        "You should seeing a dentist.",
        "You shoulds see a dentist.",
      ], "\"Should\" is a modal: base verb straight after it, with no \"to\" and no -s."),
      fb("We ___ leave the hotel before noon. Those are the rules.", ["have to", "must"], "[Tenemos que] dejar el hotel antes del mediodía. Son las normas.",
        "An external rule, so \"have to\" is the most natural choice; \"must\" is also correct, especially in written rules."),
      tr("No se puede fumar en el edificio.", ["You can't smoke in the building.", "You {mustn't|aren't allowed to} smoke in the building.", "Smoking {isn't allowed|is prohibited} in the building."],
        "A prohibition: \"can't\" is the everyday choice, \"mustn't\" and \"aren't allowed to\" sound more like written rules. The impersonal «se» often becomes \"you\" in English."),
      mc("Which sentence is correct?", [
        "She didn't have to pay for the course.",
        "She didn't had to pay for the course.",
        "She didn't must pay for the course.",
        "She didn't has to pay for the course.",
      ], "After \"didn't\", the verb is in the base form: \"have to\". The past is already in \"didn't\", and \"must\" never goes with \"do\"."),
      tr("Ayer tuvimos que caminar a casa porque no había autobuses.", ["Yesterday we had to walk home because there {weren't any|were no} buses.", "We had to walk home yesterday because there {weren't any|were no} buses."],
        "«Tuvimos que» = \"had to\" + base verb \"walk\". \"Walk home\" needs no \"to\" before \"home\"."),
      fb("Everyone ___ take out the trash on Mondays, but some people forget.", "is supposed to", "[Se supone que] todos sacan la basura los lunes, pero algunos se olvidan.",
        "A house rule that people don't always follow: \"be supposed to\". \"Everyone\" is singular in English, so \"is\"."),
      tr("Nos turnamos para limpiar la cocina.", ["We take turns cleaning the kitchen.", "We take turns to clean the kitchen."],
        "«Turnarse» = \"take turns\" + -ing (American) or + \"to\" (British). The verb is \"take\", not *make turns."),
      tr("Los invitados no pueden quedarse más de dos noches.", "Guests {can't|aren't allowed to|mustn't} stay {for |}more than two nights.",
        "A house rule: \"can't\", \"aren't allowed to\" or \"mustn't\" + base verb. A general group like \"guests\" takes no \"the\" in English."),
      wo("Feel free to borrow my books.", "Puedes tomar prestados mis libros cuando quieras.",
        "\"Feel free to\" + verb is a friendly way to give permission («puedes... cuando quieras»). It softens a list of rules."),
      tr("No hace falta que pidas permiso para usar el wifi.", "You don't {have|need} to ask {|for }permission {to use|before using} the {wifi|Wi-Fi}.",
        "«No hace falta» = no obligation: \"don't have to\" or \"don't need to\". After \"before\", use -ing: \"before using\"."),
      mt("Match each health word with its meaning.", [
        ["a headache", "dolor de cabeza"],
        ["a sore throat", "dolor de garganta"],
        ["a runny nose", "mocos"],
        ["a bruise", "un moretón"],
        ["constipated", "estreñido"],
        ["a prescription", "una receta médica"],
      ], "Watch the false friends: \"constipated\" is «estreñido» (a cold is \"a cold\" or \"congested\"), and a \"prescription\" is the doctor's «receta», while a \"recipe\" is for cooking."),
      tr("Quería pedir cita con el dentista para el lunes.", "I'd like to make an appointment with the dentist {for|on} Monday.",
        "«Pedir cita» = \"make an appointment\", never *take an appointment or *ask an appointment. \"I'd like to\" is the polite way to ask."),
      fb("I ___ a fever since yesterday.", "have had", "[Tengo] fiebre desde ayer.",
        "With \"since\", English uses the present perfect: \"I have had a fever since yesterday\". *I have a fever since yesterday copies the Spanish present."),
      tr("Me duele la espalda.", ["My back hurts.", "I have {a backache|back pain}."],
        "The body part is the subject, with a possessive: \"My back hurts\". Never *Me hurts the back. With \"back\", the noun \"backache\" also works."),
      mc("You have a cold and your nose is blocked. What do you tell the doctor?", [
        "I have a cold and I'm congested.",
        "I'm constipated.",
        "I have a constipation.",
        "I make a cold.",
      ], "For a blocked nose say \"I'm congested\" or \"I have a stuffy nose\". \"Constipated\" means «estreñido», which would get you a very different treatment!"),
      tr("Me torcí el tobillo jugando fútbol.", "I sprained my ankle playing {soccer|football}.",
        "English uses the possessive and no reflexive pronoun: \"I sprained my ankle\", not *I sprained me the ankle. «Fútbol» is \"soccer\" in the US."),
      lc("You'll have to take these tablets three times a day.", [
        "Tendrá que tomarse estas pastillas tres veces al día.",
        "Puede tomarse estas pastillas cuando quiera.",
        "No debe tomar estas pastillas más de tres días.",
        "Se tomó estas pastillas tres veces ayer.",
      ], "\"Will have to\" is a future obligation («tendrá que»). With medicine, «tomar» is \"take\", never \"drink\" for pills."),
      dc("You mustn't drive while you're taking this medicine.",
        "The first \"t\" in \"mustn't\" is silent: \"MUSS-ent\". It's a prohibition, typical of a doctor's or pharmacist's instructions."),
      fb("My grandfather ___ an operation on his hip last month.", "had", "A mi abuelo lo [operaron] de la cadera el mes pasado.",
        "The patient \"has an operation\" (or \"has surgery\"); the surgeon \"operates on\" the patient. *He made an operation is the classic mistake."),
      tr("Deberías quedarte en cama y tomar mucho líquido.", "You should stay in bed and drink {lots of|a lot of|plenty of} {fluids|liquids}.",
        "Advice with \"should\" + two base verbs joined by \"and\". «Tomar» a drink is \"drink\"."),
      sp("I hope you get better soon.", "\"Get better\" = «mejorarse». After \"hope\", use the present (\"you get\"), not a subjunctive form.",
        "Stress \"BETter\" and \"SOON\"; link \"get better\" smoothly.", "Say it in English: Espero que te mejores pronto."),
      mc("The doctor says: \"You don't have to come back unless you feel worse.\" What does she mean?", [
        "Only come back if you feel worse.",
        "You must come back next week.",
        "You mustn't come back.",
        "Come back even if you feel better.",
      ], "\"Don't have to\" = it isn't necessary, and \"unless you feel worse\" = \"if you don't feel worse\". So you only need to return if things get worse."),
      wo("You'd better not drink alcohol with these pills.", "Más vale que no tomes alcohol con estas pastillas.",
        "\"'d better not\" + base verb: \"not\" goes after \"better\", and there is no \"to\"."),
      fb("I'm sorry. I ___ shouted at you.", "shouldn't have", "Lo siento. [No debería haberte] gritado.",
        "Apologizing for something you did: \"shouldn't have\" + participle. The participle \"shouted\" is already there."),
      dc("Do I need a prescription for these painkillers?",
        "\"Do I need...?\" is a normal question with \"do\". A \"painkiller\" is «un analgésico»; a \"prescription\" is the doctor's «receta»."),
      tr("No hace falta que traigas nada, pero no puedes llegar tarde.", "You don't {have|need} to bring anything, but you {can't|mustn't} be late.",
        "Two different negatives in one sentence: «no hace falta» = \"don't have to\" (optional) and «no puedes» = \"can't\" or \"mustn't\" (prohibited). «Llegar tarde» = \"be late\"."),
      tr("Cuando era niño, no me dejaban ver la tele entre semana.", ["When I was a {kid|child}, I wasn't allowed to watch TV {on weeknights|during the week|on weekdays}.", "When I was a {kid|child}, my parents didn't let me watch TV {on weeknights|during the week|on weekdays}."],
        "«No me dejaban» = \"I wasn't allowed to\" (the person is the subject) or \"my parents didn't let me\" + base verb, with no \"to\" after \"let\"."),
      fb("You look pale. You ___ go home and rest.", ["should", "had better", "ought to"], "Estás pálido. [Deberías] irte a casa a descansar.",
        "Advice: \"should\" (or \"ought to\", or the stronger \"'d better\"), followed by the base verb \"go\". *You should to go is wrong."),
      tr("Tendría que haber ido al médico antes; ahora tengo que tomar antibióticos.", "I should have {gone to|seen} the doctor {earlier|sooner}; now I have to take antibiotics.",
        "Past regret: \"should have\" + participle \"gone\" (not *went). Then a present obligation from outside, the doctor: \"have to take\"."),
      mc("Which sentence is correct?", [
        "We had to cancel the trip because I had the flu.",
        "We had to canceled the trip because I had the flu.",
        "We musted cancel the trip because I had the flu.",
        "We must cancel the trip yesterday because I had the flu.",
      ], "Past obligation is \"had to\" + base verb. \"Must\" has no past, so *musted and \"must\" with \"yesterday\" are wrong. Americans say \"the flu\"."),
      sp("You don't have to book, but you have to arrive before eight.", "Same verb, opposite ideas: \"don't have to\" (optional) and \"have to\" (necessary).",
        "Stress \"DON'T\" in the first half; say \"have to\" as \"HAF-tuh\" both times.", "Say it in English: No hace falta que reserves, pero tienes que llegar antes de las ocho."),
      dc("If you'd told me you were sick, I would have brought you some soup.",
        "\"You'd told\" = \"you had told\" (third conditional). \"Sick\" is the everyday American word for «enfermo»."),
      wo("Are we allowed to bring our own food?", "¿Podemos traer nuestra propia comida?",
        "Question: \"Are\" + subject + \"allowed to\" + base verb. When you ask about a rule, \"Are we allowed to\" is clearer than \"Can we\"."),
      lc("I've been sneezing all morning and my nose is running.", [
        "Llevo toda la mañana estornudando y con mocos.",
        "Toda la mañana he tenido fiebre y tos.",
        "Ayer estornudé toda la mañana.",
        "Me duele la nariz desde la mañana.",
      ], "\"Sneezing\" = «estornudando», and \"my nose is running\" = «tengo mocos». \"I've been\" + -ing links it to now."),
    ],
  ),
];
