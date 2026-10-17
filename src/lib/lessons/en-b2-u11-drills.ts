// Synced from cheneygross-afk/lengo:src/lib/lessons/en-b2-u11-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise, Lesson } from "./types";

// Required drill lessons for EN-B2 unit u11 (impersonal passive and causatives): a short recap, then graded practice.

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
  slug: `en-b2-causative-unit-drill-${n}`,
  level: "EN-B2",
  number: n,
  title: `Drill: ${title}`,
  summary,
  duration: `${Math.round((exercises.reduce((s, e) => s + SECONDS[e.type], 0) + 40) / 60)} min`,
  sections: [{ heading, body, examples: examples.map(([es, en]) => ({ es, en })) }],
  exercises,
});

export const EN_B2_U11_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. It is said that / X is said to; have and get something done
  // (Impersonal Passive and Causative, Parts 1 and 2)
  // ---------------------------------------------------------------------
  lesson(
    1,
    "It Is Said That, I Had It Done",
    "You will be able to report rumors and beliefs with \"It is said that...\" and \"X is said to...\" (including \"to have done\"), and say what professionals did for you or what bad things happened to you with have/get + object + participle.",
    "Recap: two report patterns and the causative",
    [
      "«Se dice / se cree que...» has two formal patterns: \"It is said that he is rich\" and \"He is said to be rich\". Use \"to be doing\" for now in progress and \"to have done\" for earlier events; never *Is said that or *It says that. In conversation, \"They say...\" or \"Apparently...\".",
      "If someone else did the job, use have/get + object + past participle: \"I had my car repaired\", \"I'm getting my nails done\". The same pattern describes bad experiences: \"She had her phone stolen\". The object always comes before the participle.",
    ],
    [
      ["It is thought that the fire was an accident.", "Se cree que el incendio fue un accidente."],
      ["The singer is said to be planning a new album.", "Se dice que el cantante está preparando un nuevo disco."],
      ["I got my phone screen fixed.", "Me arreglaron la pantalla del celular."],
      ["We had our car broken into.", "Nos forzaron el carro."],
    ],
    [
      fb("___ that over a million people visit the park every year.", "It is estimated", "[Se calcula] que más de un millón de personas visitan el parque cada año.",
        "\"It\" + passive reporting verb + that-clause. \"Estimate\" is the verb for numbers: «se calcula» or «se estima»."),
      fb("___ that the lake is very dangerous in winter.", ["It is said", "It is believed", "It is thought"], "[Se dice] que el lago es muy peligroso en invierno.",
        "«Se dice que» in formal English: \"It is said that\". English needs \"it\" as a subject: *Is said that is wrong."),
      mc("Which sentence is correct?", [
        "It is believed that the coin is very valuable.",
        "Is believed that the coin is very valuable.",
        "It believes that the coin is very valuable.",
        "It is believe that the coin is very valuable.",
      ], "The pattern is \"It is\" + past participle + that. Without \"it\" there's no subject; \"It believes\" is active (as if \"it\" had an opinion); and \"believe\" must be a participle."),
      tr("Se sabe que el ejercicio mejora el ánimo.", ["It is {well |}known that exercise improves {your |}mood.", "Exercise is known to improve {your |}mood."],
        "Two patterns, same meaning: \"It is known that...\" or \"Exercise is known to...\". «Ánimo» here is \"mood\"."),
      fb("The actor ___ very generous with his fans.", ["is said to be", "is believed to be", "is thought to be"], "[Se dice que] el actor [es] muy generoso con sus fans.",
        "Pattern B: the person is the subject + \"is said\" + \"to be\". It's shorter than \"It is said that the actor is...\" and very common in news."),
      tr("Se cree que el castillo tiene más de 800 años.", ["The castle is believed to be {more than|over} 800 years old.", "It is believed that the castle is {more than|over} 800 years old."],
        "Present state = \"to be\". Note \"800 years old\": English uses \"be\" + age, not *has 800 years."),
      tr("Se piensa que está viviendo en Australia.", ["{He|She} is thought to be living in Australia.", "It is thought that {he|she} is living in Australia.", "{He|She} is believed to be living in Australia.", "It is believed that {he|she} is living in Australia."],
        "An action in progress now: continuous infinitive \"to be living\"."),
      wo("There are thought to be thousands of birds on the island.", "Se cree que hay miles de pájaros en la isla.",
        "With \"there is/are\", the pattern is \"There are thought to be...\". \"There\" works as the subject."),
      fb("The thieves are believed ___ in a white van.", ["to have escaped", "to have fled", "to have gotten away", "to have got away"], "Se cree que los ladrones [huyeron] en una camioneta blanca.",
        "The escape happened before the report, so use the perfect infinitive \"to have\" + participle. Never *to escaped or *to have escape."),
      mc("Which sentence is correct?", [
        "She is said to have won the lottery twice.",
        "She is said to won the lottery twice.",
        "She is said to have win the lottery twice.",
        "She is said that she won the lottery twice.",
      ], "An earlier event: \"to have\" + past participle \"won\". After \"to\" you need a base form, so *to won is impossible, and Pattern B never takes \"that\"."),
      tr("Se dice que el restaurante fue de un futbolista.", ["The restaurant is said to have belonged to a {soccer|football} player.", "It is said that the restaurant belonged to a {soccer|football} player.", "{They|People} say {that |}the restaurant belonged to a {soccer|football} player."],
        "Earlier state: \"to have belonged\". «Ser de» someone = \"belong to\". American \"soccer\"; British \"football\"."),
      tr("Se creía que había muerto en el accidente.", ["{He|She} was believed to have died in the accident.", "It was believed that {he|she} had died in the accident."],
        "Reporting verb in the past (\"was believed\") + an even earlier event: \"to have died\" in Pattern B, past perfect \"had died\" in Pattern A."),
      lc("They say the new mall is huge.", [
        "Dicen que el centro comercial nuevo es enorme.",
        "Ellos dicen que van a hacer un centro comercial enorme.",
        "El centro comercial nuevo dice que es enorme.",
        "Se dijo que el centro comercial era enorme.",
      ], "\"They say...\" is the everyday way to say «dicen que» or «se dice que». \"They\" means people in general, not a specific group."),
      mc("Your friend asks why the concert isn't happening. Which answer sounds most natural in conversation?", [
        "Apparently, the concert has been canceled.",
        "It is reported that the concert has been canceled.",
        "The concert is reported to have been canceled.",
        "It says that the concert has been canceled.",
      ], "\"Apparently\" («por lo visto») is the conversational choice. The impersonal passives are correct but sound like news, and *It says that only works for a written text (\"It says on the website...\")."),
      dc("It was suggested that the team work from home on Fridays.",
        "\"Suggest\" only works in Pattern A: \"It was suggested that...\", followed by the base form \"work\". *The team was suggested to work is wrong."),
      fb("I ___ at a small shop near my office.", ["had my glasses fixed", "got my glasses fixed", "had my glasses repaired", "got my glasses repaired"], "[Me arreglaron los lentes] en una tiendita cerca de mi oficina.",
        "Someone else did the job: have/get + object + participle. \"Glasses\" is always plural."),
      mc("«Se cortó el pelo en la peluquería.» Which translation is correct?", [
        "He got his hair cut at the barbershop.",
        "He cut his hair at the barbershop.",
        "He had cut his hair at the barbershop.",
        "He made his hair cut at the barbershop.",
      ], "A professional cut it, so English needs the causative: \"got/had his hair cut\". \"He cut his hair\" means he used the scissors himself, \"had cut\" is a past perfect, and \"make\" doesn't work here."),
      tr("Me hice un tatuaje en la espalda.", ["I got a tattoo on my back.", "I had a tattoo done on my back.", "I got a tattoo done on my back."],
        "*I made a tattoo is a typical calque: the tattoo artist made it. Say \"I got a tattoo\" or \"I had a tattoo done\"."),
      tr("El jueves me van a limpiar los dientes.", ["I'm {getting|having} my teeth cleaned on Thursday.", "I'm going to {get|have} my teeth cleaned on Thursday."],
        "Only have/get changes tense; \"my teeth cleaned\" stays the same. The present continuous is perfect for an arrangement."),
      fb("Where do you get your shirts ___?", "ironed", "¿Dónde te [planchan] las camisas?",
        "In the causative, the past participle goes after the object: \"get your shirts ironed\". *Where do you iron your shirts? would mean you iron them yourself."),
      tr("Deberías hacerte revisar esa rodilla.", "You should {get|have} that knee {checked|looked at|examined}.",
        "«Hacerse revisar» = \"get something checked\": modal + have/get + object + participle."),
      wo("We're having our bathroom redone next month.", "El mes que viene nos van a reformar el baño.",
        "Present continuous of \"have\" for an arrangement, then object + participle \"redone\"."),
      tr("A mi hermana le robaron la bolsa en el autobús.", ["My sister had her {bag|purse} stolen on the bus.", "My sister got her {bag|purse} stolen on the bus.", "My sister's {bag|purse} was stolen on the bus.", "Someone stole my sister's {bag|purse} on the bus."],
        "A bad experience: \"had her bag stolen\", or a simple passive \"Her bag was stolen\". *My sister was stolen her bag copies the Spanish «le»."),
      mc("Which sentence means «Le robaron el celular en el concierto»?", [
        "He had his phone stolen at the concert.",
        "He had stolen his phone at the concert.",
        "He was stolen his phone at the concert.",
        "They stole him his phone at the concert.",
      ], "Object before participle: \"had his phone stolen\". \"He had stolen his phone\" is a past perfect: he was the thief!"),
      tr("Nos hackearon la cuenta del banco.", ["We had our bank account hacked.", "We got our bank account hacked.", "Our bank account was hacked.", "Our bank account got hacked."],
        "Another bad experience: have + object + participle, or a simple passive. Never *We were hacked the account."),
      sp("I had my bike stolen outside the gym.", "\"Had my bike stolen\" = someone stole it; the object sits between \"had\" and the participle.",
        "Stress \"BIKE\" and \"STOLEN\".", "Say it in English: Me robaron la bici afuera del gimnasio."),
      mt("Match each sentence with its meaning.", [
        ["I cut my hair.", "Me corté el pelo yo mismo."],
        ["I had my hair cut.", "Me cortaron el pelo (en la peluquería)."],
        ["I had cut my hair.", "Yo ya me había cortado el pelo."],
        ["I had my bag stolen.", "Me robaron la bolsa."],
      ], "Word order changes everything: have + object + participle is the causative; have + participle + object is the past perfect."),
      dc("She has her car washed every Saturday.",
        "Present simple causative for a routine: \"has her car washed\". Listen for the /t/ at the end of \"washed\"."),
      tr("Voy a cortarme el pelo mañana en la peluquería.", ["I'm going to {get|have} my hair cut tomorrow{ at the salon| at the hairdresser's| at the barbershop|}.", "I'm going to {get|have} my hair cut{ at the salon| at the hairdresser's| at the barbershop|} tomorrow."],
        "Trap: *I'm going to cut my hair at the salon sounds as if you'll take your own scissors. A professional does it, so: \"get my hair cut\"."),
      tr("Se cree que el cuadro fue robado por un empleado.", ["The painting is believed to have been stolen by an employee.", "It is believed that the painting was stolen by an employee."],
        "Trap: earlier and passive = \"to have been\" + participle. The agent is important news, so \"by an employee\" stays."),
      mc("«Ayer me arreglaron el carro.» Which translation is correct?", [
        "I had my car fixed yesterday.",
        "I have my car fixed yesterday.",
        "I had fixed my car yesterday.",
        "I got fixed my car yesterday.",
      ], "The tense goes on \"have\": \"had\" for yesterday. The object goes before the participle; *got fixed my car follows the Spanish order."),
      tr("Se espera que el presidente anuncie su renuncia hoy.", ["The president is expected to announce his resignation today.", "It is expected that the president will announce his resignation today."],
        "Future events: \"is expected to\" + base verb, or \"It is expected that... will\". English avoids the subjunctive «anuncie»."),
      wo("It is said that the house was built by a pirate.", "Se dice que la casa la construyó un pirata.",
        "Pattern A keeps a normal that-clause, here a past passive: \"was built by a pirate\"."),
      tr("Mi hermano se cortó el pelo él mismo y ahora se arrepiente.", "My brother cut his hair himself and {now he regrets it|he regrets it now|now regrets it}.",
        "Trap in reverse: «él mismo» tells you he did it himself, so NO causative: \"cut his hair himself\"."),
    ],
  ),

  // ---------------------------------------------------------------------
  // Drill 2. make, let, have, get; news-style reports; causative errors
  // (Contrast Clinic: have, get, make, let; Transform: News Style; Error Hunt: Causatives)
  // ---------------------------------------------------------------------
  lesson(
    2,
    "Make, Let, Get and News Reports",
    "You will be able to choose between make, let, have and get with the right verb form, use \"was made to\" and \"was allowed to\", rewrite rumors in both news patterns with the right infinitive, and fix the classic causative errors.",
    "Recap: who does it, and is there a \"to\"?",
    [
      "\"Make/let/have\" + person + bare infinitive (She made me wait, Let me explain, I'll have him call you); \"get\" + person + \"to\" (I got him to help). In the passive, \"make\" takes \"to\" (I was made to wait) and \"let\" becomes \"be allowed to\".",
      "\"People say he is rich\" becomes \"It is said that he is rich\" or \"He is said to be rich\"; choose to be / to be doing / to have done / to have been done by time, and make both verbs past for a past report. In causatives, the tense goes on have/get and the object goes before the participle.",
    ],
    [
      ["The coach made us run five extra laps.", "El entrenador nos hizo correr cinco vueltas más."],
      ["We weren't allowed to bring drinks.", "No nos dejaron traer bebidas."],
      ["The minister is said to have known about the problem.", "Se dice que el ministro sabía del problema."],
      ["We've had the windows replaced.", "Ya nos cambiaron las ventanas."],
    ],
    [
      fb("My boss made me ___ the whole report.", ["rewrite", "redo", "write"], "Mi jefe me hizo [reescribir] todo el informe.",
        "\"Make\" + person + bare infinitive. *made me to rewrite is one of the most frequent errors at every level."),
      fb("My parents never ___ go out on school nights.", ["let me", "let us", "allowed me to", "allowed us to"], "Mis papás nunca [me dejaban] salir entre semana.",
        "\"Let\" + person + bare infinitive (no \"to\"). \"Allow\" means the same but needs \"to\": \"allowed me to go out\"."),
      mc("Which sentence is correct?", [
        "That song always makes me feel happy.",
        "That song always makes me to feel happy.",
        "That song always makes me feeling happy.",
        "That song always makes to me feel happy.",
      ], "\"Make\" + person + bare infinitive: \"makes me feel\". No \"to\", no -ing, and no \"to\" before the person."),
      wo("Let me pay for lunch this time.", "Déjame pagar el almuerzo esta vez.",
        "\"Let me\" + bare infinitive. *Let me to pay is the classic mistake."),
      tr("La profesora nos hizo repetir el ejercicio.", "The teacher made us {repeat|redo|do} the exercise{ again|}.",
        "«Hacer» + infinitive meaning force = \"make\" + person + bare infinitive."),
      fb("I'll ___ the receptionist call you a taxi.", "have", "[Haré que] la recepcionista te pida un taxi.",
        "\"Have\" + person + bare infinitive: you arrange for someone to do something as part of their job. No \"to\" after \"have\" here."),
      fb("I finally got my dad ___ me his car for the weekend.", "to lend", "Por fin conseguí que mi papá me [prestara] su carro para el fin de semana.",
        "\"Get\" + person + \"to\" + infinitive = persuade or manage. Unlike make, let and have, \"get\" needs \"to\"."),
      mc("Which sentence is correct?", [
        "I got my roommate to clean the kitchen.",
        "I got my roommate clean the kitchen.",
        "I got to my roommate clean the kitchen.",
        "I got my roommate cleaned the kitchen.",
      ], "\"Get\" + person + \"to\" + base verb. *I got him help me is the error that comes from mixing \"get\" with \"make\" and \"let\"."),
      tr("¿Puedes conseguir que tu hermano nos ayude con la mudanza?", "Can you get your brother to help us {move|with the move}?",
        "«Conseguir que» + subjunctive = \"get someone to do\". \"Help\" can be followed by a bare infinitive: \"help us move\"."),
      tr("Nos hicieron esperar dos horas en el aeropuerto.", ["We were made to wait {for |}two hours at the airport.", "They made us wait {for |}two hours at the airport."],
        "Active: \"They made us wait\" (no \"to\"). Passive: \"We were made to wait\": in the passive, \"make\" needs \"to\"."),
      fb("We ___ use our phones during the test.", ["weren't allowed to", "weren't permitted to"], "[No nos dejaron] usar el celular durante el examen.",
        "\"Let\" has no normal passive with an infinitive, so use \"be allowed to\". Never *We weren't let to use."),
      mc("«La obligaron a pedir perdón.» Which translation is correct?", [
        "She was made to apologize.",
        "She was made apologize.",
        "She was let to apologize.",
        "She made to apologize.",
      ], "Passive of \"make\" + \"to\": \"was made to apologize\". The active has no \"to\", but the passive does."),
      tr("¿Se puede traer comida al cine?", ["Are {we|you} allowed to bring food {into|to} the {movie theater|movies|cinema}?", "Can {we|you} bring food {into|to} the {movie theater|movies|cinema}?"],
        "Asking about a rule: \"Are we allowed to...?\" or \"Can you...?\". *Is it allowed to bring is a common calque."),
      mt("Match each structure with its meaning.", [
        ["make someone do", "obligar a alguien a hacer algo"],
        ["let someone do", "dejar que alguien haga algo"],
        ["have someone do", "encargarle a alguien que haga algo"],
        ["get someone to do", "conseguir que alguien haga algo"],
      ], "Only \"get\" takes \"to\" in the active. \"Have\" is for arranging a service; \"get\" is for persuading."),
      fb("The businessman ___ three houses in Miami.", ["is said to own", "is believed to own", "is thought to own", "is said to have"], "Se dice que el empresario [tiene] tres casas en Miami.",
        "Pattern B: person + \"is said\" + \"to\" + base verb for a present state."),
      mc("«Experts believe that the dam is unsafe.» Which transformation is correct?", [
        "The dam is believed to be unsafe.",
        "The dam is believed that it is unsafe.",
        "It is believed the dam to be unsafe.",
        "The dam believes to be unsafe.",
      ], "Pattern B moves the dam to the front and turns \"is\" into \"to be\". Pattern A would be \"It is believed that the dam is unsafe\"; you can't mix the two."),
      fb("The missing hikers are thought ___ in a cave.", ["to be sheltering", "to be hiding", "to be staying", "to be waiting"], "Se cree que los excursionistas desaparecidos [se están refugiando] en una cueva.",
        "In progress at the time of the report: continuous infinitive \"to be\" + -ing."),
      tr("Se dice que mintió en la entrevista.", ["{He|She} is said to have lied {in|during} the interview.", "It is said that {he|she} lied {in|during} the interview.", "{They|People} say {that |}{he|she} lied {in|during} the interview."],
        "The lie happened before the report: perfect infinitive \"to have lied\" in Pattern B; a normal past \"lied\" in Pattern A."),
      tr("Se informa de que el avión aterrizó sin problemas.", ["The plane is reported to have landed {safely|without problems|without any problems}.", "It is reported that the plane landed {safely|without problems|without any problems}."],
        "\"Report\" works in both patterns. Earlier event: \"to have landed\"."),
      tr("Se pensaba que el barco estaba vacío.", ["The ship was thought to be empty.", "It was thought that the ship was empty."],
        "Past report (\"was thought\") about a state at the same time: \"to be\". Both verbs move into the past in Pattern A."),
      wo("The factory was believed to have closed years before.", "Se creía que la fábrica había cerrado años antes.",
        "Past report + an even earlier event: \"was believed to have closed\" (Pattern A would use \"had closed\")."),
      tr("Se cree que el puente fue construido por los romanos.", ["The bridge is believed to have been built by the Romans.", "It is believed that the bridge was built by the Romans."],
        "Earlier AND passive: \"to have been built\". Keep \"by the Romans\": the agent is the important information."),
      dc("The company is expected to hire two hundred new workers.",
        "Future events: \"is expected to\" + base verb. Listen for \"to\" before \"hire\"."),
      lc("He was thought to have left the country.", [
        "Se pensaba que se había ido del país.",
        "Se piensa que se va del país.",
        "Pensó en irse del país.",
        "Se piensa que se irá del país.",
      ], "\"Was thought\" = past report («se pensaba»); \"to have left\" = an earlier event («se había ido»)."),
      mc("Which sentence has NO mistake?", [
        "I've had my car serviced.",
        "I've got my car service.",
        "I have my car serviced yesterday.",
        "I'm having serviced my car.",
      ], "The tense goes on have/get, the object comes next, and the participle comes last: \"I've had my car serviced\". The others drop the participle, use the wrong tense, or put the participle first."),
      tr("Ya me han cambiado la batería del celular.", ["I've already had my phone battery {replaced|changed}.", "I've had my phone battery {replaced|changed} already.", "I've already gotten my phone battery {replaced|changed}.", "My phone battery has already been {replaced|changed}."],
        "Present perfect causative: \"I've had\" + object + participle. \"Have had\" looks strange, but it's normal: auxiliary \"have\" + causative \"had\". American English also says \"I've gotten\"."),
      fb("We'll ___ by a professional.", ["have the documents translated", "get the documents translated"], "[Mandaremos traducir los documentos] con un profesional.",
        "Future causative: \"will have/get\" + object + participle. Add \"by\" only when the person who does the job matters."),
      sp("Let me help you with that box.", "\"Let me\" + bare infinitive \"help\". No \"to\" after \"let\".",
        "Link \"let me\" as /lɛmi/ in natural speech.", "Say it in English: Déjame ayudarte con esa caja."),
      tr("Me hicieron llenar tres formularios.", ["They made me fill {out|in} three forms.", "I was made to fill {out|in} three forms."],
        "Active \"made me fill out\" (no \"to\") or passive \"I was made to fill out\" (with \"to\"). \"Fill out\" is American; \"fill in\" is British."),
      tr("No me dejaron entrar porque no tenía identificación.", ["They didn't let me in because I didn't have {any |}ID.", "I wasn't allowed {in|to go in|to enter} because I didn't have {any |}ID.", "They didn't let me {go in|enter} because I didn't have {any |}ID."],
        "Trap: *I wasn't let to enter. Use \"They didn't let me in\" or \"I wasn't allowed in\". «Identificación» is \"ID\"."),
      mc("Which sentence is correct?", [
        "I had the plumber check the pipes.",
        "I had the plumber to check the pipes.",
        "I had checked the pipes by the plumber.",
        "I made the plumber to check the pipes.",
      ], "\"Have\" + person + bare infinitive. With the person, there's no \"to\"; and \"make\" never takes \"to\" in the active either."),
      tr("Mi mamá no me deja manejar su carro.", "My {mom|mother} {doesn't|won't} let me drive her car.",
        "\"Let\" + person + bare infinitive: \"let me drive\". *doesn't let me to drive is the trap."),
      sp("I got the landlord to fix the heating.", "\"Get\" + person + \"to\" + verb: you persuaded the landlord.",
        "Don't swallow \"to\": /tə fɪks/.", "Say it in English: Conseguí que el casero arreglara la calefacción."),
      dc("We were allowed to leave early on Friday.",
        "\"Were allowed to\" is the passive of \"let\" + infinitive. \"Allowed\" sounds like /əˈlaʊd/, the same as \"aloud\"."),
    ],
  ),

  // ---------------------------------------------------------------------
  // Drill 3. Errands, services, the whole passive system, a changing city
  // (Dialogue Lab, Real Mission, Mastery Check, Themed Review; whole unit mixed)
  // ---------------------------------------------------------------------
  lesson(
    3,
    "Errands, Services and a Changing City",
    "You will be able to talk about errands and services in any tense, ask where and how much, plan what you'll do yourself and what you'll have done, and describe how a place has changed with the full passive system.",
    "Recap: services, progress and change",
    [
      "Arrangements use the present continuous (\"We're having the sofa delivered\"), progress uses the present perfect (\"We've had the locks changed\", \"We haven't had the gas connected yet\"), and questions keep the object before the participle: \"Where do you get your suits made?\". Use \"ourselves\" for what you do yourself.",
      "For places and plans, the passive does the work: \"has been turned into\", \"was being repaired\", \"had been abandoned\", \"will have been rebuilt\", \"should have been protected\", \"is expected to become\".",
    ],
    [
      ["I'm getting my bike tuned up on Friday.", "El viernes me ajustan la bici."],
      ["We'll paint the hallway ourselves.", "El pasillo lo pintaremos nosotros."],
      ["Have you had the electricity switched on?", "¿Ya te conectaron la luz?"],
      ["The old port has been turned into a park.", "Han convertido el viejo puerto en un parque."],
    ],
    [
      fb("I'm getting the washing machine ___ on Thursday.", ["fixed", "repaired"], "El jueves me [arreglan] la lavadora.",
        "Present continuous of \"get\" for an arrangement, then object + participle. \"Get\" is the most common choice in American conversation."),
      fb("I need to get my diploma ___ for my visa application.", ["translated", "certified"], "Tengo que [hacer traducir] mi título para la solicitud de visa.",
        "Paperwork is a classic causative topic: \"get X translated / certified / stamped / renewed\"."),
      tr("Hay que renovar mi pasaporte.", ["My passport needs to be renewed.", "My passport needs renewing.", "I need to {get|have} my passport renewed."],
        "Three natural options: \"needs to be renewed\" (passive infinitive), \"needs renewing\" (informal), or the causative \"I need to get it renewed\"."),
      tr("Todavía tengo que tomarme la foto para la licencia.", ["I still {need|have} to {have|get} my {photo|picture} taken for {the|my} license."],
        "A photographer takes it, so: \"have/get my photo taken\". *I still have to take my photo would mean you take it yourself."),
      mc("Which question is correct?", [
        "Where do you have your suits made?",
        "Where have you your suits made?",
        "Where do you have made your suits?",
        "Where you have your suits made?",
      ], "\"Have\" is the main verb here, so the present simple question needs \"do\": \"Where do you have...?\". The object still goes before the participle."),
      tr("¿Cuánto te costó arreglar la computadora?", ["How much did it cost {to get|to have} your computer {fixed|repaired}?", "How much did it cost to {fix|repair} your computer?"],
        "\"How much did it cost to get X fixed?\" makes it clear that someone else did the repair. Normal question order with \"did\"."),
      tr("¿Dónde puedo imprimir estos documentos?", ["Where can I {get|have} these documents printed?", "Where can I print these documents?"],
        "If a shop does it for you: \"Where can I get these printed?\". Both versions are natural here."),
      lc("It took them three days to fix it.", [
        "Tardaron tres días en arreglarlo.",
        "Lo arreglaron hace tres días.",
        "Lo arreglaron en el tercer intento.",
        "Me llevó tres días arreglarlo.",
      ], "\"It took them three days\" = «tardaron tres días»: \"them\" is the people who did the job, not you."),
      fb("We're going to paint the bedroom ___ to save money.", "ourselves", "Vamos a pintar el cuarto [nosotros mismos] para ahorrar dinero.",
        "Use a reflexive pronoun for what you do yourselves, and the causative for what professionals do."),
      tr("El sábado nos traen el sofá nuevo.", ["We're {having|getting} the new {sofa|couch} delivered on Saturday.", "The new {sofa|couch} is being delivered on Saturday."],
        "An arrangement already made: present continuous causative \"We're having it delivered\". Spanish uses an impersonal «nos traen»."),
      tr("Vamos a hacer que nos instalen internet la semana que viene.", "We're going to {have|get} {the |}internet {installed|connected} next week.",
        "A plan: \"going to have/get\" + object + participle."),
      fb("We haven't had the gas ___ yet.", ["connected", "turned on", "switched on", "hooked up"], "Todavía no nos han [conectado] el gas.",
        "Progress report: present perfect causative \"haven't had\" + object + participle, with \"yet\" at the end."),
      mc("Which question is correct?", [
        "Have you had the windows cleaned yet?",
        "Have you had cleaned the windows yet?",
        "Did you have had the windows cleaned yet?",
        "Have you the windows cleaned yet?",
      ], "Present perfect question: \"Have you had\" + object + participle. \"Had cleaned the windows\" is a past perfect structure, not a causative."),
      wo("By Monday we'll have had the whole apartment painted.", "Para el lunes ya nos habrán pintado todo el departamento.",
        "Future perfect causative: \"will have had\" + object + participle. Heavy, but correct for a deadline."),
      tr("Me gustaría que me limpiaran la alfombra.", "I'd like to {have|get} {the|my} {carpet|rug} cleaned.",
        "A polite request for a service: \"I'd like to have X done\"."),
      tr("¿Me lo pueden traer antes del mediodía?", ["{Can|Could} I {have|get} it delivered before noon?", "{Can|Could} you deliver it before noon?"],
        "\"Can I have it delivered...?\" is the natural way to ask a company for a service."),
      fb("The walls ___ before we move in.", ["need painting", "need to be painted"], "[Hay que pintar] las paredes antes de mudarnos.",
        "\"Need\" + -ing or \"need to be\" + participle for things that require work. *The walls need to paint is wrong."),
      sp("OK, I'll get the curtains cleaned too.", "A quick decision: \"will\" + causative \"get the curtains cleaned\".",
        "Contract \"I'll\" and stress \"CURtains\" and \"TOO\".", "Say it in English: Está bien, también voy a mandar a limpiar las cortinas."),
      tr("La carretera se está ampliando.", "The road is being {widened|expanded}.",
        "Work in progress done to the subject: \"is being\" + participle. *The road is widening would describe something that happens by itself."),
      tr("Ya se habían reservado todas las habitaciones.", ["All the rooms had already been {booked|reserved}.", "All the rooms had been {booked|reserved} already."],
        "Past perfect passive: \"had already been booked\", before another past moment."),
      mc("«Te lo deberían haber dicho antes.» Which translation is correct?", [
        "You should have been told earlier.",
        "It should have been told to you earlier.",
        "You should have told earlier.",
        "You should be told earlier.",
      ], "The person who receives the information is the subject: \"You should have been told\". *It should have been told to you is a calque."),
      dc("These watches are made in Switzerland.",
        "Present simple passive for facts: \"are made\". The \"d\" of \"made\" links into \"in\"."),
      fb("The old train station ___ into a museum.", ["has been turned", "has been converted", "has been made"], "[Han convertido] la antigua estación de tren en un museo.",
        "A change with a visible result now: present perfect passive. \"Turn into\" = «convertir en»."),
      fb("When I visited, the bridge ___.", ["was being repaired", "was being painted", "was being rebuilt"], "Cuando lo visité, [estaban reparando] el puente.",
        "Work in progress at a past moment: past continuous passive \"was being\" + participle."),
      tr("Antes había un cine en esta calle.", "There used to be a {movie theater|cinema|theater} on this street.",
        "Past state that is no longer true: \"There used to be...\". Not *Before there was a cinema."),
      tr("Para 1990, el viejo mercado ya había sido abandonado.", ["By 1990, the old market had already been abandoned.", "By 1990, the old market had been abandoned."],
        "\"By\" + a past time = past perfect passive \"had been abandoned\"."),
      dc("By 2035, the whole city center will have been rebuilt.",
        "Future perfect passive for a deadline: \"will have been rebuilt\". American spelling \"center\"."),
      tr("Se deberían haber plantado más árboles.", "More trees should have been planted.",
        "Criticism of a past decision in the passive: \"should have been\" + participle. The trees are the subject."),
      wo("The area is expected to become a popular tourist destination.", "Se espera que la zona se convierta en un destino turístico popular.",
        "Impersonal passive with a future event: \"is expected to\" + base verb."),
      mt("Match each Spanish «se» sentence with a natural English version.", [
        ["Se vende.", "For sale."],
        ["Aquí se habla inglés.", "English is spoken here."],
        ["Se dice que es rico.", "He is said to be rich."],
        ["Aquí no se puede fumar.", "You can't smoke here."],
      ], "Four kinds of «se»: a sign, a passive with the thing first, an impersonal report, and general \"you\"."),
      tr("A nuestros vecinos les están construyendo una piscina.", "Our {neighbors|neighbours} are {having|getting} a {pool|swimming pool} built.",
        "Trap: Spanish uses «les están construyendo», but the neighbors arranged it, so: present continuous causative \"are having a pool built\"."),
      mc("«Me sacaron la muela del juicio.» Which translation is correct?", [
        "I had my wisdom tooth taken out.",
        "I got taken out my wisdom tooth.",
        "I took out my wisdom tooth.",
        "I was taken out my wisdom tooth.",
      ], "The dentist did it: have/get + object + participle. \"I took out my wisdom tooth\" means you did it yourself, and *I was taken out my tooth copies the Spanish «me»."),
      tr("Se dice que el alcalde ha gastado el doble del presupuesto.", ["The mayor is said to have spent {twice|double} the budget.", "It is said that the mayor has spent {twice|double} the budget.", "{They|People} say {that |}the mayor has spent {twice|double} the budget."],
        "Trap: earlier action in Pattern B = \"to have spent\". Never *is said to has spent."),
      sp("Our building is being renovated, so we're staying with my parents.", "Continuous passive \"is being renovated\" for work in progress, then an active present continuous.",
        "Say \"being\" clearly: /ˈbiːɪŋ/.", "Say it in English: Están renovando nuestro edificio, así que nos estamos quedando con mis papás."),
    ],
  ),
];
