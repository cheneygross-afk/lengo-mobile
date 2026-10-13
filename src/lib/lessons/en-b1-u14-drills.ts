// Synced from cheneygross-afk/lengo:src/lib/lessons/en-b1-u14-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise, Lesson } from "./types";

// Required drill lessons for EN-B1 unit u14 (the passive): a short recap, then graded practice.

const SLUG = "en-b1-passive";

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
  level: "EN-B1",
  number: n,
  title: `Drill: ${title}`,
  summary,
  duration: `${Math.round((exercises.reduce((s, e) => s + SECONDS[e.type], 0) + 40) / 60)} min`,
  sections: [{ heading, body, examples: examples.map(([es, en]) => ({ es, en })) }],
  exercises,
});

export const EN_B1_U14_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. Be + participle in every tense; «se»; born; by
  // ---------------------------------------------------------------------
  lesson(
    1,
    "The Passive in Every Tense",
    "You will be able to form the passive in the present, past, present perfect, future, continuous and with modals, and turn Spanish «se» sentences into natural English.",
    "Recap: change \"be\", keep the participle",
    [
      "Every passive is \"be\" + past participle. Only \"be\" shows the tense: \"is sold\", \"was sold\", \"has been sold\", \"is being sold\", \"will be sold\", \"can be sold\". After \"want/need\" use \"to be\" + participle; after \"like/hate\" or a preposition use \"being\" + participle.",
      "Spanish «se vende», «se construyó» or «lo arreglaron» usually becomes an English passive with the thing as subject. Negatives and questions never use do/did: \"It wasn't sent\", \"When was it built?\". Add \"by\" only when the agent is new, useful information.",
    ],
    [
      ["Fresh bread is baked here every morning.", "Aquí se hornea pan fresco todas las mañanas."],
      ["The concert was canceled at the last minute.", "Cancelaron el concierto a última hora."],
      ["The streets are being cleaned right now.", "Están limpiando las calles ahora mismo."],
      ["This mistake can't be repeated.", "Este error no se puede repetir."],
    ],
    [
      fb("Rice ___ in many parts of Asia.", ["is grown", "is cultivated"], "En muchas partes de Asia [se cultiva] arroz.",
        "A general fact: present simple passive, \"is\" + participle. \"Grow\" is irregular: grow - grew - grown. Spanish puts the thing after the verb, but in English \"rice\" is the subject."),
      fb("These sneakers ___ in Vietnam.", ["are made", "are produced", "are manufactured"], "Estos tenis [se fabrican] en Vietnam.",
        "Plural subject, so \"are\" + participle: \"are made\". «Se fabrican» never becomes *it makes or *makes."),
      mc("Which sentence is correct?", [
        "Spanish and English are spoken at this hotel.",
        "Spanish and English is spoken at this hotel.",
        "It is spoken Spanish and English at this hotel.",
        "Speaks Spanish and English at this hotel.",
      ], "Two languages = plural subject, so \"are spoken\". Spanish «se habla» is never *it is spoken + noun or a verb with no subject."),
      tr("Se venden boletos en la entrada.", "Tickets are sold at the {entrance|door}.",
        "«Se venden boletos» = the tickets are the subject: \"Tickets are sold\". Not *It sells tickets or *Sell tickets."),
      fb("My wallet ___ on the subway last night.", "was stolen", "Anoche [me robaron] la cartera en el metro.",
        "A finished past event with an unknown thief: \"was\" + \"stolen\". Spanish «me robaron» has no subject; English makes the wallet the subject."),
      tr("Estas casas se construyeron en 1970.", "These houses were built in 1970.",
        "Plural + past = \"were\" + \"built\". «Se construyeron», «fueron construidas» and «las construyeron» are all the same English passive."),
      fb("The invitations ___ last Monday.", ["were sent", "were mailed", "went out"], "Las invitaciones [se enviaron] el lunes pasado.",
        "\"Were\" because \"invitations\" is plural; \"sent\" is the participle of \"send\"."),
      tr("Las propinas no están incluidas.", ["Tips {aren't|are not} included.", "{The tip isn't|The tip is not} included."],
        "Passive negative: \"aren't\" + participle. Never *don't included: the verb \"be\" already does the work."),
      mc("Which question is correct?", [
        "When was this bridge built?",
        "When did this bridge built?",
        "When was built this bridge?",
        "When this bridge was built?",
      ], "Question word + \"was\" + subject + participle. *When did it built mixes two structures; passive questions never use \"did\"."),
      tr("¿En qué año nació tu abuela?", "{What year|Which year|In what year|In which year} was your {grandmother|grandma} born?",
        "«Nacer» is active in Spanish, but English \"be born\" is passive: \"was your grandmother born\". Never *did your grandmother born."),
      fb("My son ___ on July 4.", "was born", "Mi hijo [nació] el 4 de julio.",
        "\"Was born\" + \"on\" with a specific date. Use \"in\" for a year or a month: \"in 2019\", \"in July\"."),
      tr("Esta novela la escribió una enfermera de Quito.", "This novel was written by a nurse from Quito.",
        "The novel is the topic and the writer is new information, so use the passive with \"by\". «Por» = \"by\", not \"for\"."),
      mc("Which sentence sounds most natural?", [
        "My bike was fixed yesterday.",
        "My bike was fixed by someone yesterday.",
        "My bike was fixed by a person yesterday.",
        "Someone was fixed my bike yesterday.",
      ], "\"By someone\" and \"by a person\" add no information, so drop them. The last option mixes active and passive."),
      lc("The meeting has been moved to Thursday.", ["Han cambiado la reunión al jueves.", "La reunión se hizo el jueves.", "La reunión será el jueves que viene.", "Vamos a cambiar la reunión al jueves."],
        "\"Has been moved\" is the present perfect passive: a recent change that matters now, like «han cambiado» or «se ha cambiado»."),
      fb("Your account ___. Please call the bank.", ["has been blocked", "has been locked", "has been frozen", "has been suspended"], "Tu cuenta [ha sido bloqueada]. Por favor, llama al banco.",
        "Recent news with a result now: \"has been\" + participle. Don't forget \"been\": *Your account has blocked means the account blocked something."),
      tr("Todavía no han arreglado el ascensor.", "The {elevator|lift} {hasn't|has not} been {fixed|repaired} yet.",
        "«Todavía no han arreglado» = \"hasn't been fixed yet\". The elevator is the subject; \"yet\" goes at the end in negatives."),
      tr("Te pagarán a final de mes.", ["You will be paid at the end of the month.", "You're going to be paid at the end of the month."],
        "Future passive: \"will be\" + participle. Spanish «te pagarán» has no subject; English makes \"you\" the subject. *You will paid forgets \"be\"."),
      fb("The new library ___ next year.", ["will be built", "is going to be built"], "La nueva biblioteca [se construirá] el año que viene.",
        "Future: \"will be\" + participle. \"Is going to be built\" is also correct, especially for plans."),
      wo("Glass can be recycled many times.", "El vidrio se puede reciclar muchas veces.",
        "Modal + \"be\" + participle: «se puede reciclar» = \"can be recycled\"."),
      tr("Este formulario se tiene que firmar con tinta azul.", "This form {has to|must|needs to} be signed in blue ink.",
        "«Se tiene que» / «hay que» + a thing = \"has to be\" or \"must be\" + participle. Note \"in ink\", not *with ink."),
      mc("Which sentence is correct?", [
        "Old batteries shouldn't be thrown in the trash.",
        "Old batteries shouldn't thrown in the trash.",
        "Old batteries shouldn't be throw in the trash.",
        "Old batteries shouldn't to be thrown in the trash.",
      ], "Modal + \"be\" + participle: \"shouldn't be thrown\". The other options forget \"be\", use the base form, or add \"to\" after a modal."),
      fb("Sorry about the noise. The kitchen ___ this week.", ["is being painted", "is being renovated", "is being remodeled", "is being redone"], "Perdona el ruido. Esta semana [están pintando] la cocina.",
        "Something happening now to a thing: \"is being\" + participle. *The kitchen is painting would mean the kitchen is doing the painting."),
      tr("Están arreglando mi computadora.", ["My computer is being {repaired|fixed}.", "They're {repairing|fixing} my computer."],
        "The continuous passive: \"is being repaired\". *My computer is repairing is the classic mistake: a computer can't repair anything."),
      dc("When we got to the hotel, our room was still being cleaned.",
        "\"Was being cleaned\" is the past continuous passive: an action in progress when something else happened."),
      mt("Match each tense with its passive form.", [
        ["present simple", "is made"],
        ["past simple", "was made"],
        ["present perfect", "has been made"],
        ["present continuous", "is being made"],
        ["future", "will be made"],
      ], "The participle \"made\" never changes; only \"be\" moves through the tenses."),
      fb("She hates ___ in front of other people.", ["being criticized", "being criticised", "being corrected"], "Odia [que la critiquen] delante de otras personas.",
        "After \"hate\", \"like\" or \"enjoy\", the passive is \"being\" + participle. Spanish uses «que» + subjunctive; English never says *hates that they criticize her."),
      tr("Quiero que me avisen si hay algún cambio.", "I want to be {told|informed|notified} if there {are any changes|is any change}.",
        "After \"want\", the passive is \"to be\" + participle. *I want that they tell me is a word-for-word translation that doesn't work in English."),
      lc("I don't like being told what to wear.", ["No me gusta que me digan qué ponerme.", "No me gusta decirle a la gente qué ponerse.", "No me dijeron qué ponerme.", "No me gusta la ropa que llevo."],
        "\"Being told\" is passive: someone else tells me. «Que me digan» (subjunctive) becomes \"being\" + participle."),
      wo("Our team expects to be paid before the holidays.", "Nuestro equipo espera que le paguen antes de las fiestas.",
        "\"Expect\" + \"to be\" + participle: the team receives the payment."),
      mc("Make it passive: \"They have canceled the concert.\"", [
        "The concert has been canceled.",
        "The concert has canceled.",
        "The concert has been cancel.",
        "The concert is been canceled.",
      ], "Same tense (present perfect) + \"been\" + participle. \"The concert has canceled\" says the concert canceled something."),
      tr("En mi país se almuerza a las dos.", ["In my country{,|} people {have|eat} lunch at two{ o'clock|}.", "In my country{,|} we {have|eat} lunch at two{ o'clock|}.", "{People|We} {have|eat} lunch at two{ o'clock|} in my country."],
        "This «se» has no object, so there is no passive. Use a general subject like \"people\" or \"we\". *It is lunched at two means nothing."),
      tr("Desde mi ventana se ven las montañas.", ["You can see the mountains from my window.", "From my window{,|} you can see the mountains."],
        "«Se ve(n)» for something anyone can see is \"you can see\". General \"you\" is the natural choice here, not a passive."),
      dc("Was the bill sent to the right address?",
        "Passive question: \"Was\" + subject + participle. No \"did\" anywhere."),
      tr("¿Cuándo se inventó la radio?", "When was the radio invented?",
        "Past passive question: \"When was\" + subject + \"invented\". The typical error *When did the radio invented mixes \"did\" with a participle."),
      sp("The winners will be announced next Friday.",
        "Future passive: \"will be\" + \"announced\". Say \"will be\" as one quick unit.",
        "Stress \"winners\", \"announced\" and \"Friday\"; \"will be\" is weak, almost \"wil-bi\"."),
      sp("My phone is being repaired.",
        "«Me están arreglando el celular» = \"My phone is being repaired\". The phone is the subject, and \"being\" is essential.",
        undefined, "Say it in English: «Me están arreglando el celular.»"),
    ],
  ),

  // ---------------------------------------------------------------------
  // Drill 2. Errors, signs, news, the city, and the whole unit
  // ---------------------------------------------------------------------
  lesson(
    2,
    "Passive Signs, News & Mistakes",
    "You will be able to avoid the classic passive mistakes, read and write signs and headlines, report news, and describe buildings and places in a city.",
    "Recap: participles, signs and headlines",
    [
      "Check the third form: \"was built\" (not *was build), \"was written\" (not *was wrote), \"is being repaired\" (not *is repairing). \"Be born\" needs \"was/were\", with \"in\" for years and \"on\" for dates.",
      "Notices use the present passive (\"Breakfast is served...\", \"Guests are asked to...\") and rules use \"must (not) be\" + participle. Headlines drop \"be\": \"Man arrested\" = a man has been arrested; \"to be built\" = will be built.",
    ],
    [
      ["The airport was closed because of the snow.", "Cerraron el aeropuerto por la nieve."],
      ["Visitors are asked to turn off their phones.", "Se ruega a los visitantes que apaguen el celular."],
      ["Five people were hurt in the fire.", "Cinco personas resultaron heridas en el incendio."],
      ["The old market was turned into a food hall.", "El viejo mercado se convirtió en un patio de comidas."],
    ],
    [
      mc("Which sentence is correct?", [
        "The stadium was built in 1998.",
        "The stadium was build in 1998.",
        "The stadium was builded in 1998.",
        "The stadium built in 1998.",
      ], "Passive = \"was\" + past participle. \"Build\" is irregular: build - built - built. Without \"was\", the stadium did the building."),
      fb("This letter ___ by hand a hundred years ago.", "was written", "Esta carta [se escribió] a mano hace cien años.",
        "The participle of \"write\" is \"written\". *was wrote uses the past simple, a very common error."),
      fb("Our new manager ___ from more than fifty candidates.", ["was chosen", "was selected", "was picked"], "A nuestra nueva gerente [la eligieron] entre más de cincuenta candidatos.",
        "choose - chose - chosen: \"was chosen\". Spanish «la eligieron» has no subject; English makes the manager the subject."),
      mc("Your laptop is at the repair shop right now. What do you say?", [
        "My laptop is being repaired.",
        "My laptop is repairing.",
        "My laptop is repaired now.",
        "My laptop repairs.",
      ], "Work in progress = \"is being\" + participle. \"Is repaired now\" says the work is finished, and \"is repairing\" says the laptop is the mechanic."),
      tr("Mi abuelo nació en 1948.", "My {grandfather|grandpa} was born in 1948.",
        "\"Be born\" is always passive in English: \"was born\". *My grandfather born or *is born are typical errors. Years take \"in\"."),
      mc("Which sentence is correct?", [
        "She was born on April 2, 1990.",
        "She was born in April 2, 1990.",
        "She born on April 2, 1990.",
        "She is born on April 2, 1990.",
      ], "A full date takes \"on\"; a year or month alone takes \"in\". And \"born\" always needs \"was\" for a past birth."),
      mc("Which sentence sounds most natural?", [
        "The thief was caught near the station.",
        "The thief was caught by someone near the station.",
        "The police was caught the thief near the station.",
        "The thief caught near the station.",
      ], "Of course the police caught him, so no agent is needed. \"By someone\" says nothing, and the other two are not correct passives."),
      fb("Breakfast ___ from 6:30 to 10:00.", "is served", "El desayuno [se sirve] de 6:30 a 10:00.",
        "Hotel notices use the present simple passive: the guests care about the service, not about who serves it."),
      tr("Se ruega a los pasajeros que no dejen su equipaje sin vigilancia.", "Passengers are asked not to leave their {luggage|bags} unattended.",
        "Polite notices use \"are asked (not) to\" + verb. Note \"luggage\" is uncountable, and \"unattended\" is «sin vigilancia»."),
      fb("In the park, dogs ___ on a leash.", ["must be kept", "have to be kept", "must be"], "En el parque, los perros [deben llevarse] con correa.",
        "Rules: \"must be\" + participle. Formal signs love this structure: \"must be kept\", \"must be worn\"."),
      mc("What does the sign \"Closed for repairs\" mean?", ["Cerrado por obras.", "Aquí se hacen reparaciones.", "Abierto durante las reparaciones.", "Las reparaciones han terminado."],
        "Short signs drop \"be\" and the article: \"Closed for repairs\" = \"The store is closed for repairs\"."),
      mt("Match each sign with its meaning.", [
        ["For rent", "Se alquila"],
        ["Out of order", "No funciona"],
        ["Staff only", "Solo personal autorizado"],
        ["Cash only", "Solo efectivo"],
        ["No entry", "Prohibido el paso"],
      ], "Common short signs: no \"be\", no article. \"For rent\" is American; British English uses \"To let\"."),
      tr("Está prohibido tomar fotos en el museo.", ["Taking {photos|pictures} {is not|isn't} {allowed|permitted} in the museum.", "{Photos|Pictures} {are not|aren't} {allowed|permitted} in the museum.", "You {can't|aren't allowed to} take {photos|pictures} in the museum."],
        "Make the activity (-ing) or the thing the subject: \"Taking photos is not allowed\". «Prohibido» + infinitive is not *It is prohibited to take."),
      fb("Four people ___ in the accident.", ["were injured", "were hurt"], "Cuatro personas [resultaron heridas] en el accidente.",
        "In accidents, «herido» is \"injured\" or \"hurt\". \"Wounded\" is for weapons."),
      tr("Han detenido a una mujer en el aeropuerto.", "A woman has been arrested at the airport.",
        "News starts with the present perfect passive: \"has been arrested\". Spanish «han detenido» has no subject; the woman becomes the subject."),
      lc("Two children were rescued from the river.", ["Rescataron a dos niños del río.", "Dos niños rescataron a alguien en el río.", "Van a rescatar a dos niños del río.", "Dos niños se cayeron al río."],
        "\"Were rescued\" is passive: the children received the action. In the active, they would be the rescuers."),
      mc("What does the headline \"New bridge to be built in Cusco\" mean?", [
        "A new bridge will be built in Cusco.",
        "A new bridge was built in Cusco.",
        "A new bridge is being built in Cusco right now.",
        "Cusco wants a new bridge, but it can't build one.",
      ], "In headlines, \"to be\" + participle refers to the future: \"will be built\"."),
      fb("Headline: \"Man arrested after robbery\" = A man ___ after a robbery.", ["has been arrested", "was arrested"], "[Han detenido] a un hombre tras un robo.",
        "Headlines drop \"has been\" and the article. A participle at the start of a headline is a passive, not the past simple."),
      dc("Several houses were damaged by the strong winds.",
        "\"Were damaged by\" + the cause. Here \"by the strong winds\" is useful information, so we keep it."),
      tr("Trabajo en el centro, pero vivo en las afueras.", ["I work downtown, but I live in the suburbs.", "I work {downtown|in the city center|in the city centre}, but I live {in the suburbs|on the outskirts{ of the city| of town|}}."],
        "«El centro» = \"downtown\" (no \"in\" before it) or \"the city center\". «Las afueras» = \"the suburbs\" or \"the outskirts\" (with \"on\")."),
      fb("Walk on the ___. There's a lot of traffic.", ["sidewalk", "pavement"], "Camina por la [banqueta]. Hay mucho tráfico.",
        "American English \"sidewalk\" = «acera» or «banqueta». British English says \"pavement\"."),
      mc("Which sentence is correct?", [
        "There's no parking on this street.",
        "There's no a parking on this street.",
        "There isn't any parkings on this street.",
        "Is not parking in this street.",
      ], "\"Parking\" alone is uncountable: \"no parking\", never *a parking or *parkings. A place to park is a \"parking lot\"."),
      tr("El viejo cine se convirtió en un gimnasio.", "The old {movie theater|cinema} was turned into a gym.",
        "\"Turn into\" = «convertir en»; in the passive: \"was turned into\". The building is the topic, so the passive is natural."),
      tr("Van a derribar el edificio el mes que viene.", ["The building is going to be torn down next month.", "The building will be torn down next month.", "They're going to tear {down the building|the building down} next month."],
        "\"Tear down\" (tore - torn) = «derribar». Passive with \"going to\": \"is going to be torn down\"."),
      fb("The theater ___ in 2012, and now it looks brand new.", ["was renovated", "was restored", "was remodeled", "was remodelled"], "El teatro [se remodeló] en 2012 y ahora parece nuevo.",
        "For a building, «reformar / remodelar» is \"renovate\" or \"remodel\", not *reform. Past passive: \"was renovated\"."),
      wo("The old station has been turned into a hotel.", "La vieja estación se ha convertido en un hotel.",
        "Present perfect passive: \"has been\" + \"turned into\"."),
      sp("Smoking is not permitted anywhere in the building.",
        "A formal rule: the activity (-ing) is the subject + \"is not permitted\".",
        "Stress \"smoking\", \"not\" and \"anywhere\"."),
      wo("The museum is closed on Mondays for cleaning.", "El museo cierra los lunes por limpieza.",
        "\"Is closed\" describes a state on a regular day; \"for cleaning\" gives the reason."),
      lc("Your order will be delivered on Thursday.", ["Te entregarán el pedido el jueves.", "Entregaste el pedido el jueves.", "El jueves tienes que hacer el pedido.", "El pedido se entregó el jueves."],
        "\"Will be delivered\" is the future passive: «te lo entregarán»."),
      tr("Aquí se habla portugués.", ["Portuguese is spoken here.", "{People|We|They} speak Portuguese here."],
        "«Se habla» + a language = \"is spoken\". On a short sign you can even drop \"is\": \"Portuguese spoken\"."),
      tr("¿Dónde nació tu mamá?", "Where was your {mom|mother} born?",
        "Question + \"be born\": \"Where was your mom born?\". *Where did your mom born? is one of the most common errors."),
      mc("Which sentence is correct?", [
        "Nothing was stolen, but the door was damaged.",
        "Nothing was stolen, but the door damaged.",
        "Nothing stole, but the door was damaged.",
        "Nothing was stole, but the door was damaged.",
      ], "Two passives: \"was stolen\" and \"was damaged\". Each needs \"was\" + the correct participle (steal - stole - stolen)."),
      tr("Estaban pintando el edificio cuando llegamos.", ["The building was being painted when we {arrived|got there}.", "They were painting the building when we {arrived|got there}."],
        "Past continuous passive: \"was being painted\". The building is the topic; the painters are obvious."),
      fb("The road ___ at the moment, so take the bridge.", ["is being repaired", "is being fixed"], "En este momento [están arreglando] la calle, así que toma el puente.",
        "Work in progress = \"is being\" + participle. *The road is repairing is the classic mistake."),
      tr("Odio que me llamen durante la cena.", "I hate being called during dinner.",
        "After \"hate\", the passive is \"being\" + participle. Spanish «que me llamen» (subjunctive) becomes a simple \"being called\"."),
      dc("The new hospital won't be finished until next year.",
        "Future passive negative: \"won't be\" + participle. \"Until next year\" = «hasta el año que viene»."),
      sp("This building was built in 1920 and renovated in 2010.",
        "Two past passives joined by \"and\": you don't need to repeat \"was\".",
        undefined, "Say it in English: «Este edificio se construyó en 1920 y se remodeló en 2010.»"),
    ],
  ),
];
