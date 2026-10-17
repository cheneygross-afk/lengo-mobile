// Synced from cheneygross-afk/lengo:src/lib/lessons/en-b1-u15-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise, Lesson } from "./types";

// Required drill lessons for EN-B1 unit u15 (have something done, reporting passives, processes, services): a short recap, then graded practice.

const SLUG = "en-b1-causative";

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

export const EN_B1_U15_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. Have/get something done; it is said; processes; active or passive
  // ---------------------------------------------------------------------
  lesson(
    1,
    "Have It Done, It Is Said, Processes",
    "You will be able to say when someone does a job for you, report what people say or believe with the passive, describe a process step by step, and choose between active and passive.",
    "Recap: have + thing + participle",
    [
      "When a professional does a job for you, use \"have\" (or informal \"get\") + object + past participle: \"I had my hair cut\", \"I need to get my car fixed\". The same pattern describes bad experiences: \"I had my phone stolen\". Word order matters: \"I had cut my hair\" is the past perfect.",
      "For «se dice / se cree que», use \"It is said / thought / believed that...\" or put the person first: \"He is said to be rich\". Processes use the present simple passive with sequencers: \"First, the beans are picked. Then they are dried.\" In conversation, «se» often becomes \"you\", \"people\" or \"they\".",
    ],
    [
      ["I had my glasses repaired at the mall.", "Me arreglaron los lentes en el centro comercial."],
      ["She got her phone screen replaced.", "Le cambiaron la pantalla del celular."],
      ["It is thought that the company will close.", "Se cree que la empresa va a cerrar."],
      ["First, the apples are washed and cut.", "Primero, se lavan y se cortan las manzanas."],
    ],
    [
      fb("On Saturday I ___ at the new salon.", ["had my hair cut", "got my hair cut", "had my hair done", "got my hair done"], "El sábado [me corté el pelo] en el salón nuevo.",
        "The stylist did it, so use the causative: \"had my hair cut\". \"I cut my hair\" would mean you used the scissors yourself."),
      mc("A mechanic changed your tires this morning. What do you say?", [
        "I had my tires changed this morning.",
        "I changed my tires at the mechanic's this morning.",
        "I had changed my tires this morning.",
        "I made change my tires this morning.",
      ], "Causative: have + the tires + participle. \"I changed my tires\" means you did it; \"I had changed\" is the past perfect; *made change is a translation of «hice cambiar»."),
      fb("She ___ every two weeks.", ["has her nails done", "gets her nails done"], "[Se hace las uñas] cada dos semanas.",
        "A routine: present simple \"has\" + \"her nails\" + \"done\". Only \"have\" changes for tense and person."),
      tr("Ayer nos instalaron internet.", "We {had|got} {the internet|internet} installed yesterday.",
        "Someone else did the job: \"had\" + object + \"installed\". Spanish «nos instalaron» has no subject; in English, \"we\" are the subject of \"had\"."),
      wo("She had her wedding dress made in Lima.", "Le hicieron el vestido de novia a medida en Lima.",
        "have + object (\"her wedding dress\") + participle (\"made\"). The object always goes in the middle."),
      fb("I'm ___ this week, so I'm taking the bus.", ["having my car repaired", "having my car fixed", "getting my car repaired", "getting my car fixed", "having my car serviced", "getting my car serviced"], "Esta semana [me están arreglando el carro], así que voy en autobús.",
        "Present continuous causative: \"I'm having my car repaired\". Only \"have\" takes the -ing; the participle stays the same."),
      tr("¿Cuándo te graduaste la vista por última vez?", ["When did you last {have|get} your eyes {tested|checked}?", "When was the last time you {had|got} your eyes {tested|checked}?"],
        "«Graduarse la vista» = \"have your eyes tested\". Past questions use \"did\" + base \"have\": \"When did you last have...\"."),
      mc("Which question is correct?", [
        "Did you have your suit cleaned?",
        "Had you your suit cleaned?",
        "Did you have cleaned your suit?",
        "Did you had your suit cleaned?",
      ], "In the causative, \"have\" is a normal verb, so questions use \"did\" + \"have\". The object still goes before the participle."),
      tr("Tengo que llevar el carro a revisión.", "I {need to|have to} {get|have} my car serviced.",
        "\"Service\" is a verb here: \"get my car serviced\" = «hacer la revisión del carro». After \"need to\", use the base form \"get\" or \"have\"."),
      tr("Por fin nos arreglaron la calefacción.", "We finally {got|had} the heating {fixed|repaired}.",
        "\"Get\" often suggests it took some effort to organize: «por fin conseguimos que...». Pattern: get + the heating + participle."),
      fb("Can I ___ to my office?", ["have it delivered", "get it delivered", "have it sent", "get it sent"], "¿Me lo pueden [mandar] a mi oficina?",
        "\"Have it delivered\" is the natural way to ask a store for delivery. \"It\" goes between \"have\" and the participle."),
      tr("Me robaron la mochila en el tren.", ["I had my {backpack|bag} stolen on the train.", "My {backpack|bag} was stolen on the train.", "Someone stole my {backpack|bag} on the train."],
        "A bad experience: \"I had my backpack stolen\" or the simple passive. Not *I had stolen my backpack (you were the thief) and not *They stole me my backpack."),
      mc("Which sentence means «A Diego le cancelaron el vuelo»?", [
        "Diego had his flight canceled.",
        "Diego had canceled his flight.",
        "Diego canceled his flight.",
        "Diego made cancel his flight.",
      ], "have + his flight + canceled: something happened TO Diego. In the other options Diego canceled it himself."),
      fb("My mom ___ me clean my room before I could go out.", "made", "Mi mamá me [obligó a] limpiar mi cuarto antes de salir.",
        "\"Make\" + person + base verb = force someone. It is not the service causative: you never say *I made repair my car."),
      tr("Le pedí al electricista que revisara los enchufes.", "I {had the electrician check|got the electrician to check|asked the electrician to check} the {outlets|plugs|sockets}.",
        "With the person: \"have\" + person + base verb, or \"get\" + person + \"to\" + verb. Spanish uses «que» + subjunctive."),
      fb("___ that the museum will reopen in June.", ["It is expected", "It's expected"], "[Se espera] que el museo vuelva a abrir en junio.",
        "«Se espera que» = \"It is expected that\" + will. English has no subjunctive here, and it needs the subject \"it\"."),
      tr("Se dice que el restaurante es el mejor de la ciudad.", ["It is said that the restaurant is the best in {the city|town}.", "The restaurant is said to be the best in {the city|town}.", "{People|They} say {that |}the restaurant is the best in {the city|town}."],
        "Two passive patterns: \"It is said that...\" or \"The restaurant is said to be...\". Don't forget \"it\": *Is said that is wrong."),
      mc("Which sentence is correct?", [
        "The singer is believed to be in Miami.",
        "The singer is believed that she is in Miami.",
        "Is believed that the singer is in Miami.",
        "It is believed the singer to be in Miami.",
      ], "Choose one pattern: \"It is believed that the singer is...\" or \"The singer is believed to be...\". Don't mix them."),
      tr("Se cree que el ladrón escapó en moto.", ["The thief is {believed|thought} to have escaped {on a motorcycle|by motorcycle|on a motorbike}.", "It is {believed|thought} that the thief escaped {on a motorcycle|by motorcycle|on a motorbike}."],
        "For a past action with the person first, use \"to have\" + participle: \"is believed to have escaped\"."),
      wo("It is estimated that two million tourists visit the city every year.", "Se calcula que dos millones de turistas visitan la ciudad cada año.",
        "\"It is estimated that\" + a normal clause = «se calcula que»."),
      lc("The castle is said to be over 800 years old.", ["Se dice que el castillo tiene más de 800 años.", "El castillo dice que tiene 800 años.", "Dicen que van a construir un castillo.", "El castillo se vendió hace 800 años."],
        "Person or thing first + \"is said to be\" = «se dice que es / tiene»."),
      fb("First, the oranges ___ and washed.", "are picked", "Primero, las naranjas [se recogen] y se lavan.",
        "Processes use the present simple passive. Plural subject = \"are\". You can join two steps without repeating \"are\": \"are picked and washed\"."),
      tr("Luego, la leche se calienta y se mezcla con el azúcar.", "{Then|After that,|Next,} the milk is heated and mixed with {the |}sugar.",
        "Sequencer + subject + \"is\" + participle. Don't copy the Spanish order: *Then is heated the milk."),
      mc("Which sentence is correct?", [
        "Finally, the chocolate is wrapped and sent to stores.",
        "At the end, is wrapped the chocolate and sent to stores.",
        "Finally, the chocolate wrapped and sent to stores.",
        "Finally, are wrapped the chocolates and sent to stores.",
      ], "For the last step, say \"finally\". The subject goes before the verb, and the passive needs \"is\"."),
      fb("The vegetables ___ and kept at -18 degrees.", "are frozen", "Las verduras [se congelan] y se guardan a -18 grados.",
        "freeze - froze - frozen: \"are frozen\". Irregular participles appear all the time in processes."),
      dc("After that, the cheese is cut and packed by machines.",
        "\"By machines\" is kept because it tells you something useful about the process."),
      mc("How do you ask «¿Cómo se pronuncia tu apellido?» in normal conversation?", [
        "How do you pronounce your last name?",
        "How is pronounced your last name?",
        "How it is pronounced your last name?",
        "How does it pronounce your last name?",
      ], "In conversation, «¿cómo se...?» becomes \"How do you...?\" with general \"you\", not a passive."),
      tr("En esta ciudad se puede caminar a todas partes.", ["In this city{,|} you can walk everywhere.", "You can walk everywhere in this city.", "In this city{,|} you can walk anywhere."],
        "«Se puede» + a verb with no object becomes \"you can\". *It can be walked is not English."),
      tr("La empresa la fundó mi tío en 1985.", ["The company was founded by my uncle in 1985.", "My uncle founded the company in 1985."],
        "If the company is the topic, start with it and put the new information last: \"was founded by my uncle\"."),
      sp("I had my phone screen replaced yesterday.",
        "Causative in the past: \"had\" + \"my phone screen\" + \"replaced\".",
        "Say \"phone screen\" as one unit, and stress \"replaced\"."),
      tr("Me corté el pelo en la peluquería de mi barrio.", "I {had|got} my hair cut at the {hair salon|salon|hairdresser's|barbershop|barber's} in my neighborhood.",
        "Trap: *I cut my hair at the salon means you cut it yourself while you were there. Use \"had/got my hair cut\"."),
      mt("Match each service with its meaning.", [
        ["have your car serviced", "hacer la revisión del carro"],
        ["have your eyes tested", "graduarse la vista"],
        ["have a tooth taken out", "sacarse una muela"],
        ["have a suit dry-cleaned", "llevar un traje a la tintorería"],
      ], "All four follow have + object + participle. Spanish often uses «hacerse» or «llevar a...» for the same idea."),
      fb("___ that the fire started in the garage.", ["It is thought", "It is believed", "It's thought", "It's believed"], "[Se cree] que el fuego empezó en el garaje.",
        "«Se cree» = \"It is thought / believed\". The subject \"it\" is obligatory in English."),
      tr("Se espera que suban los precios de los boletos.", ["It is expected that {ticket prices|the price of tickets} will {rise|go up}.", "Ticket prices are expected to {rise|go up}.", "The price of tickets is expected to {rise|go up}."],
        "No subjunctive in English: \"It is expected that prices will rise\", or \"Prices are expected to rise\"."),
      dc("You should have your eyes tested before you renew your license.",
        "Modal + causative: \"should have your eyes tested\". Here \"have\" is the causative verb, not the past \"should have + participle\"."),
      sp("We're going to have the house painted in the summer.",
        "Plan + causative: \"going to have\" + \"the house\" + \"painted\".",
        undefined, "Say it in English: «Vamos a mandar pintar la casa en verano.»"),
    ],
  ),

  // ---------------------------------------------------------------------
  // Drill 2. Errors, services, makeovers, spiral review, shopping
  // ---------------------------------------------------------------------
  lesson(
    2,
    "Services, Makeovers & Shopping",
    "You will be able to fix the classic causative errors, ask for services, describe changes to a home, use obligation and deduction modals, and handle returns and sales in a store.",
    "Recap: services and changes",
    [
      "Keep the order have/get + thing + participle: \"I got my watch fixed\", \"I had my bike stolen\", never *I made repair or *I had stolen my bike. For changes you can see now, use the present perfect passive (\"The walls have been painted\") or the causative (\"We've had the walls painted\").",
      "Remember the spiral: \"don't have to\" = «no hace falta», \"mustn't\" = prohibited; \"must be\" = sure, \"can't be\" = impossible. In stores you ask for \"a refund\", keep \"the receipt\", \"try it on\", and things are \"on sale\" or \"out of stock\".",
    ],
    [
      ["I got my jacket dry-cleaned for the interview.", "Llevé la chaqueta a la tintorería para la entrevista."],
      ["The floors have been replaced.", "Han cambiado los pisos."],
      ["You don't have to pay until you pick it up.", "No hace falta pagar hasta que lo recojas."],
      ["Can I try these jeans on?", "¿Me puedo probar estos jeans?"],
    ],
    [
      mc("Which sentence means that the hairdresser did it?", [
        "I got my hair cut at the new salon.",
        "I cut my hair at the new salon.",
        "I had cut my hair at the new salon.",
        "I made cut my hair at the new salon.",
      ], "\"Got/had my hair cut\" = someone else did it. \"I cut my hair\" means you did it yourself, even if you were in a salon."),
      tr("Me arreglaron el reloj en una tienda del centro.", "I {had|got} my watch {fixed|repaired} at a {store|shop} downtown.",
        "Causative: had/got + my watch + participle. «Me arreglaron» never becomes *They fixed me the watch."),
      mc("Which sentence is correct?", [
        "I had my wallet stolen at the concert.",
        "I had stolen my wallet at the concert.",
        "They stole me my wallet at the concert.",
        "I was stolen my wallet at the concert.",
      ], "Bad experience: have + object + participle. \"I had stolen my wallet\" means you stole it. \"Steal\" never takes the victim as an object."),
      fb("Cocoa ___ in Ecuador and Ghana.", "is grown", "En Ecuador y Ghana [se cultiva] cacao.",
        "Passive with the right participle: \"is grown\", not *is grow. And the subject comes first, not *Is grown cocoa."),
      tr("Quisiera pedir cita para el jueves.", "I'd like to {make|book} an appointment for Thursday{, please|}.",
        "«Quería / quisiera pedir cita» = \"I'd like to make an appointment\". \"I want\" sounds too direct, and \"I wanted\" sounds like the past."),
      fb("\"When will my jacket be ready?\" \"It'll be ready ___ Friday.\"", "by", "Estará lista [para el] viernes.",
        "\"By\" + day = «para el..., como muy tarde». Not *for Friday."),
      tr("¿Pueden quitar esta mancha de café?", ["{Can|Could} you get this coffee stain out?", "{Can|Could} you remove this coffee stain?"],
        "\"Get a stain out\" = «quitar una mancha». A request in a shop is a question with \"can\" or \"could\"."),
      lc("Can you give me an estimate before you start?", ["¿Me puede dar un presupuesto antes de empezar?", "¿Me puede hacer un descuento antes de empezar?", "¿Me puede decir cuánto va a tardar?", "¿Me puede dar el recibo antes de empezar?"],
        "\"An estimate\" (or \"a quote\") is «un presupuesto» for a job. It is not \"budget\"."),
      mc("Complete: \"My ___ for the new laptop is 900 dollars.\" («presupuesto»)", ["budget", "estimate", "quote", "receipt"],
        "\"Budget\" is the money you plan to spend. An \"estimate\" or \"quote\" is the price a business gives you for a job."),
      tr("Vengo a recoger unos pantalones.", ["I'm here to pick up {some|a pair of} pants.", "I've come to pick up {some|a pair of} pants.", "I'm here to pick up {some|a pair of} trousers."],
        "«Recoger» clothes at the dry cleaner's = \"pick up\". \"I'm here to...\" is the natural way to say «vengo a...»."),
      fb("All the old windows ___.", ["have been replaced", "have been changed"], "[Han cambiado] todas las ventanas viejas.",
        "Plural subject + present perfect passive: \"have been replaced\". The windows become the subject of the English sentence."),
      tr("Han tirado una pared y ahora la cocina es mucho más grande.", ["A wall has been knocked down{,|} and now the kitchen is much {bigger|larger}.", "They have knocked {down a wall|a wall down}{,|} and now the kitchen is much {bigger|larger}."],
        "\"Knock down a wall\" = «tirar una pared». Passive: \"has been knocked down\"; singular subject = \"has\"."),
      mc("Which sentence says that professionals did the work?", [
        "We've had the bathroom redone.",
        "We've redone the bathroom ourselves.",
        "We've redone the bathroom.",
        "We had redone the bathroom.",
      ], "\"We've had the bathroom redone\" = causative: a company did it. Without the object in the middle, you did it yourselves."),
      tr("Nos están poniendo pisos nuevos.", ["We're having new floors put in.", "We're {having|getting} new floors {put in|installed}."],
        "Work in progress: present continuous causative. \"Put in\" = «instalar, poner»."),
      wo("We're going to have the old tiles replaced next month.", "Vamos a cambiar los azulejos viejos el mes que viene.",
        "Plan + causative: \"going to have\" + object + participle."),
      fb("The living room ___ very dark, but now it's bright.", "used to be", "La sala [antes era] muy oscura, pero ahora tiene mucha luz.",
        "Before and after: \"used to be\" for the old situation, the present for now."),
      fb("You ___ pay now. You can pay when you pick it up.", ["don't have to", "do not have to", "don't need to", "do not need to", "needn't"], "[No hace falta que] pagues ahora. Puedes pagar cuando lo recojas.",
        "No obligation = \"don't have to\". \"Mustn't\" would mean you are forbidden to pay now."),
      mc("What does \"You mustn't touch the wet paint\" mean?", [
        "No debes tocar la pintura fresca.",
        "No hace falta que toques la pintura.",
        "Seguro que no has tocado la pintura.",
        "Puede que no toques la pintura.",
      ], "\"Mustn't\" is a prohibition: «no debes». It is not \"don't have to\" («no hace falta»)."),
      tr("No puede ser Ana. Está en Bogotá.", "{That|It} can't be Ana. She's in Bogota.",
        "Sure it's impossible = \"can't be\". *mustn't be is not used for deduction."),
      tr("Los celulares deben estar apagados durante el examen.", "{Phones|Cell phones|Mobile phones} {must|have to} be {switched|turned} off during the {exam|test}.",
        "Rule with a passive: modal + \"be\" + participle. Don't forget \"be\": *Phones must switched off."),
      dc("This can't be fixed, but it can be replaced.",
        "Two modal passives: \"can't be fixed\" and \"can be replaced\". Listen for the strong vowel in \"can't\"."),
      tr("Quisiera devolver esta camisa. Me queda chica.", ["I'd like to return this shirt. It's too small{ for me|}.", "I'd like to return this shirt. It doesn't fit{ me|}."],
        "«Devolver» something to a store = \"return\" or \"take back\". \"Doesn't fit\" is about size."),
      fb("Can I ___ before I buy it?", "try it on", "¿Me lo puedo [probar] antes de comprarlo?",
        "With a pronoun, \"it\" goes between \"try\" and \"on\": \"try it on\", never *try on it. And never \"prove\" («demostrar»)."),
      mc("Complete: \"These jeans are the right size, but green doesn't really ___ me.\"", ["suit", "fit", "match", "prove"],
        "\"Suit\" is about style or color («favorecer»). \"Fit\" is about size, and these jeans already fit."),
      mt("Match each word with its meaning.", [
        ["receipt", "recibo / ticket"],
        ["refund", "reembolso"],
        ["bargain", "ganga"],
        ["out of stock", "agotado"],
        ["fitting room", "probador"],
      ], "Store vocabulary. The \"p\" in \"receipt\" is silent: \"ri-SEET\"."),
      tr("Estas chaquetas están rebajadas.", "These jackets are on sale.",
        "«Rebajado» = \"on sale\" in American English. \"In the sales\" is more British."),
      tr("¿Me lo envuelve para regalo?", ["{Could|Can} you gift-wrap it{, please|}?", "{Could|Can} I have it gift-wrapped{, please|}?"],
        "\"Gift-wrap\" = «envolver para regalo». The causative \"have it gift-wrapped\" also works."),
      lc("The tickets sold out in ten minutes.", ["Los boletos se agotaron en diez minutos.", "Vendieron los boletos a diez dólares.", "Los boletos salen a la venta en diez minutos.", "Faltan diez minutos para comprar los boletos."],
        "\"Sell out\" / \"sold out\" is used for tickets and events: «agotarse»."),
      sp("I'd like to have this coat dry-cleaned, please.",
        "\"I'd like to have\" + object + participle is a perfect polite request at the dry cleaner's.",
        "Say \"dry-cleaned\" as one word with the stress on \"dry\"."),
      tr("Me tomé la foto para el pasaporte en una tienda.", ["I {had|got} my passport photo taken at a {store|shop}.", "I {had|got} my photo for my passport taken at a {store|shop}."],
        "A photographer took it, so: \"had my passport photo taken\". *I took my passport photo means you took it yourself."),
      mc("Which sentence is correct?", [
        "It is said that the hotel is haunted.",
        "Is said that the hotel is haunted.",
        "Says that the hotel is haunted.",
        "The hotel is said that it is haunted.",
      ], "«Se dice que» = \"It is said that...\". English always needs a subject, and you can't mix \"The hotel is said\" with \"that it is\"."),
      fb("She ___ while she was at the beach.", ["had her phone stolen", "had her cell phone stolen"], "[Le robaron el celular] mientras estaba en la playa.",
        "Bad experience: \"had\" + her phone + \"stolen\". *She had stolen her phone would make her the thief."),
      tr("No hace falta que traigan nada. La comida está incluida.", "You don't {have|need} to bring anything. {The food|Food} is included.",
        "No obligation = \"don't have to / don't need to\". Then a simple passive: \"is included\"."),
      dc("We've had the whole apartment painted since you last visited.",
        "Present perfect causative: \"We've had\" + object + \"painted\". Professionals did the job."),
      sp("I need to get the washing machine fixed.",
        "«Llevar a arreglar» = \"get\" + object + \"fixed\". Informal and very common in American English.",
        undefined, "Say it in English: «Tengo que llevar a arreglar la lavadora.»"),
      wo("I had the sofa delivered to my new apartment.", "Hice que me llevaran el sofá a mi nuevo departamento.",
        "\"Have it delivered\": have + object + participle."),
    ],
  ),
];
