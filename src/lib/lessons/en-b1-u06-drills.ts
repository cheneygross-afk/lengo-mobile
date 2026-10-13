// Synced from cheneygross-afk/lengo:src/lib/lessons/en-b1-u06-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise, Lesson } from "./types";

// Required drill lessons for EN-B1 unit u06 (future time clauses, real conditions, unless, in case): a short recap, then graded practice.

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
  slug: `en-b1-time-clauses-unit-drill-${n}`,
  level: "EN-B1",
  number: n,
  title: `Drill: ${title}`,
  summary,
  duration: `${Math.round((exercises.reduce((s, e) => s + SECONDS[e.type], 0) + 40) / 60)} min`,
  sections: [{ heading, body, examples: examples.map(([es, en]) => ({ es, en })) }],
  exercises,
});

export const EN_B1_U06_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. Future time clauses, zero and first conditional
  // ---------------------------------------------------------------------
  lesson(
    1,
    "When I Get Home, If It Rains",
    "You will be able to say «cuando llegue», «en cuanto haya terminado» and «hasta que» with the present after the time word, and use the zero and first conditional without \"will\" after \"if\".",
    "Recap: no will after when or if",
    [
      "After \"when\", \"as soon as\", \"before\", \"after\" and \"until\", English uses the present (or the present perfect) for the future, where Spanish uses the subjunctive: «te llamo cuando llegue» = \"I'll call you when I arrive\". The \"will\" goes in the main clause, never in both: *when I will arrive is wrong. «Hasta que no» is just \"until\".",
      "Zero conditional for facts and habits: \"if\" + present, present (\"If you heat water, it boils\"). First conditional for a real future possibility: \"if\" + present, \"will\" (\"If it rains tomorrow, we'll stay home\"). Never *if it will rain.",
    ],
    [
      ["I'll text you as soon as the plane lands.", "Te escribo en cuanto aterrice el avión."],
      ["Don't start until I've explained the rules.", "No empiecen hasta que haya explicado las reglas."],
      ["If I eat too late, I sleep badly.", "Si ceno muy tarde, duermo mal."],
      ["If we leave now, we'll get there before dark.", "Si salimos ahora, llegaremos antes de que oscurezca."],
    ],
    [
      fb("I'll send you the photos when I ___ home.", ["get", "arrive", "go"], "Te mandaré las fotos cuando [llegue] a casa.",
        "After \"when\", the present simple for the future: \"when I get home\". Spanish uses the subjunctive («llegue»); *when I will get home is the classic mistake."),
      fb("As soon as the bank ___, I'll go and pay the bill.", "opens", "En cuanto [abra] el banco, iré a pagar la cuenta.",
        "\"As soon as\" = «en cuanto». Present simple after it, with the third-person -s: \"opens\"."),
      mc("Which sentence is correct?", [
        "We'll eat when your sister arrives.",
        "We'll eat when your sister will arrive.",
        "We eat when your sister will arrive.",
        "We'll eat when your sister arrive.",
      ], "\"Will\" in the main clause, present after \"when\". Don't forget the -s: \"your sister arrives\"."),
      tr("Te llamo cuando salga del trabajo.", ["I'll call you when I {leave work|get off work|finish work|leave the office}.", "When I {leave work|get off work|finish work|leave the office}, I'll call you."],
        "A promise like this takes \"will\" in the main clause (Spanish often uses the present, «te llamo»). After \"when\", the present: \"when I leave work\"."),
      tr("¿Qué vas a estudiar cuando termines la prepa?", ["What {will you study|are you going to study} when you finish high school?", "When you finish high school, what {will you study|are you going to study}?"],
        "«Cuando termines» = \"when you finish\". The question goes in the main clause: \"What will you study...?\"."),
      fb("Turn off the stove before you ___.", ["leave", "go out", "go"], "Apaga la estufa antes de [salir].",
        "\"Before\" + subject + present: \"before you leave\". You can also say \"before leaving\", but never *before to leave."),
      mc("How do you say «Antes de salir, revisa las ventanas»?", [
        "Before going out, check the windows.",
        "Before to go out, check the windows.",
        "Before go out, check the windows.",
        "Before of going out, check the windows.",
      ], "After \"before\" + a verb with no subject, use -ing: \"before going out\". *Before to go out is a word-for-word copy of «antes de salir»."),
      tr("Vamos a ver la película después de que se duerman los niños.", ["We're going to watch the movie after the {kids|children} {fall asleep|go to sleep|go to bed}.", "We'll watch the movie after the {kids|children} {fall asleep|go to sleep|go to bed}."],
        "«Después de que» + subjunctive = \"after\" + present simple. The main clause can be \"going to\" or \"will\"."),
      fb("I'll stay with you ___ the doctor comes.", ["until", "till"], "Me quedo contigo [hasta que] venga el doctor.",
        "«Hasta que» = \"until\" + present. Never *until the doctor will come."),
      mc("Which sentence is correct?", [
        "I'm not paying until you fix the car.",
        "I'm not paying until you don't fix the car.",
        "I'm not paying until you will fix the car.",
        "I'm not paying until you fixed the car.",
      ], "Spanish «hasta que no arregles» has an extra «no» that is not really negative. Don't copy it: *until you don't fix means the opposite."),
      tr("No le digas nada hasta que yo te avise.", "Don't tell {him|her|them} anything until I {tell you|let you know|say so}.",
        "Imperative + \"until\" + present. «Hasta que yo te avise» = \"until I tell you\"."),
      wo("As soon as she gets the results, she'll call us.", "En cuanto tenga los resultados, nos llamará.",
        "When the time clause goes first, put a comma after it. Present in the time clause, \"will\" in the main clause."),
      tr("Cuando lleguemos, te escribo.", ["{When we arrive|When we get there|When we get in}, I'll {text|message|write to} you.", "I'll {text|message|write to} you {when we arrive|when we get there|when we get in}."],
        "Spanish can drop both subjects; English needs them: \"When we arrive, I'll text you\". The promise takes \"will\"."),
      fb("You can use my laptop as soon as I ___ this email.", ["have sent", "send", "have finished"], "Puedes usar mi laptop en cuanto [haya enviado] este correo.",
        "«En cuanto haya enviado» = \"as soon as I've sent\": the present perfect shows the first action will be complete before the second one."),
      tr("Te llamo en cuanto haya hablado con el abogado.", ["I'll call you as soon as I've {spoken|talked} {to|with} the lawyer.", "As soon as I've {spoken|talked} {to|with} the lawyer, I'll call you."],
        "«En cuanto haya + participio» = \"as soon as I have\" + participle. No \"will\" after \"as soon as\"."),
      mc("What does \"When I've called the hotel, I'll let you know\" mean?", [
        "Después de llamar al hotel, te aviso.",
        "Mientras llamo al hotel, te aviso.",
        "Cuando llamaba al hotel, te avisaba.",
        "Ya llamé al hotel y te avisé.",
      ], "\"When I've called\" = after the call is over («cuando haya llamado»). \"When I call\" could mean at the same moment."),
      fb("Text me as soon as you ___ at the hotel.", ["arrive", "get"], "Mándame un mensaje en cuanto [llegues] al hotel.",
        "Imperative + time clause: the verb after \"as soon as\" stays in the present. \"Arrive at\" a building, never *arrive to."),
      tr("Voy a comprar un carro cuando consiga trabajo.", ["I'm going to buy a car {when|as soon as} I {get|find} a job.", "{When|As soon as} I {get|find} a job, I'm going to buy a car."],
        "The main clause can be \"going to\" (a plan). The time clause still takes the present: \"when I get a job\"."),
      fb("If you ___ water to 100 degrees, it boils.", "heat", "Si [calientas] el agua a 100 grados, hierve.",
        "Zero conditional for scientific facts: \"if\" + present, present. \"You\" here means people in general."),
      fb("If my cat ___ hungry, she sits next to the fridge.", ["is", "gets"], "Si mi gata [tiene] hambre, se sienta junto al refrigerador.",
        "Zero conditional for a habit. Watch the trap: «tener hambre» = \"be hungry\", so \"is hungry\", never *has hungry."),
      mc("Which sentence is correct?", [
        "If you don't hurry, you'll miss the flight.",
        "If you won't hurry, you'll miss the flight.",
        "If you don't hurry, you miss the flight tomorrow.",
        "If you will not hurry, you'll miss the flight.",
      ], "First conditional: \"if\" + present (\"don't hurry\"), \"will\" in the result. No \"will\" after \"if\"."),
      tr("Si ves a Pablo, dile que lo extraño.", "If you see Pablo, tell him {that |}I miss him.",
        "\"If\" + present + imperative. «Extrañar» = \"miss\": \"I miss him\"."),
      tr("¿Qué harás si no te dan la visa?", ["What will you do if they don't give you the visa?", "What will you do if you don't get the visa?", "What are you going to do if {they don't give you the visa|you don't get the visa}?"],
        "The question goes in the result part: \"What will you do...?\". After \"if\", the present: \"if they don't give you\"."),
      lc("If I'm late, I take a taxi.", [
        "Cuando llego tarde, tomo un taxi (siempre).",
        "Si llego tarde mañana, tomaré un taxi.",
        "Si llegara tarde, tomaría un taxi.",
        "Llegué tarde y tomé un taxi.",
      ], "Present in both parts = zero conditional, a habit: «si llego tarde, (siempre) tomo un taxi». For one future day you'd hear \"I'll take\"."),
      wo("If she passes the exam, she'll study in Canada.", "Si aprueba el examen, estudiará en Canadá.",
        "\"If\" + present (\"passes\"), comma, \"will\" + base verb."),
      wo("Turn off your phone before the movie starts.", "Apaga el celular antes de que empiece la película.",
        "«Antes de que empiece» = \"before the movie starts\": present simple, with -s."),
      dc("We'll leave as soon as the rain stops.",
        "\"As soon as\" + present (\"stops\"), \"will\" in the main clause (\"We'll leave\")."),
      dc("If you mix red and white, you get pink.",
        "Zero conditional: a fact, present in both parts."),
      lc("I'll tell you as soon as I know.", [
        "Te lo diré en cuanto lo sepa.",
        "Te lo dije en cuanto lo supe.",
        "Te lo diré cuando lo sepas.",
        "Te lo digo siempre que lo sé.",
      ], "\"As soon as I know\" = «en cuanto lo sepa»: present in English, subjunctive in Spanish."),
      sp("Call me when you get to the airport.", "Imperative + \"when\" + present: \"when you get to\", never *when you will get.",
        "Stress \"call\" and \"airport\"; \"to the\" is weak: \"tuh-thuh\".", "Say it in English: Llámame cuando llegues al aeropuerto."),
      sp("If it's sunny on Saturday, we'll have a barbecue.", "First conditional: \"if\" + present, \"will\" + base verb.",
        "Pause slightly at the comma. Stress \"sunny\" and \"barbecue\".", "Say it in English: Si el sábado hace sol, haremos una parrillada."),
      tr("Cuando me jubile, voy a vivir junto al mar.", ["When I retire, I'm going to live {by|near} the {sea|ocean|beach}.", "When I retire, I'll live {by|near} the {sea|ocean|beach}.", "I'm going to live {by|near} the {sea|ocean|beach} when I retire."],
        "«Cuando me jubile» = \"when I retire\": no reflexive and no \"will\". *When I will retire is the typical mistake."),
      tr("No vamos a cenar hasta que no llegue tu papá.", ["We're not {having dinner|eating dinner|eating} until your {dad|father} {arrives|gets here|gets home}.", "We won't {have dinner|eat dinner|eat} until your {dad|father} {arrives|gets here|gets home}."],
        "Trap: drop the second «no». «Hasta que no llegue» is just \"until he arrives\" in English."),
      tr("Si mañana hace sol, iremos a la playa en cuanto nos levantemos.", ["If it's sunny tomorrow, we'll go to the beach as soon as we {get up|wake up}.", "If it's sunny tomorrow, as soon as we {get up|wake up}, we'll go to the beach."],
        "Two traps in one: \"if it's sunny\" (not *if it will make sun) and \"as soon as we get up\" (not *will get up). Only the main clause has \"will\"."),
      mc("Which sentence is correct?", [
        "When I finish, I'll call you.",
        "When I will finish, I call you.",
        "When I will finish, I'll call you.",
        "When I finish, I call you tomorrow.",
      ], "The \"will\" moves out of the time clause into the main clause: \"When I finish, I'll call you\". That's exactly the opposite of what Spanish speakers tend to do."),
    ],
  ),

  // ---------------------------------------------------------------------
  // Drill 2. Unless, as long as, in case, chains, weather + whole unit
  // ---------------------------------------------------------------------
  lesson(
    2,
    "Unless, As Long As, In Case & Chains",
    "You will be able to set conditions with unless, as long as and provided that, take precautions with \"in case\", build chains of consequences and talk about the weather.",
    "Recap: if, unless, as long as, in case",
    [
      "\"Unless\" = \"if... not\", with an affirmative verb: \"I won't go unless you come\" (never *unless you don't come). \"As long as\" and \"provided that\" = «siempre que», «con tal de que». All of them take the present, not \"will\".",
      "\"In case\" + present = «por si», a precaution you take now: \"Take a jacket in case it gets cold\". \"In case of\" + noun only: \"in case of fire\". In chains, the result moves into the next \"if\" and loses its \"will\": \"I'll be late. If I'm late...\". Weather: \"It's cold\", never *It makes cold.",
    ],
    [
      ["I won't sign unless they change the contract.", "No firmaré a menos que cambien el contrato."],
      ["You can bring your dog as long as he's quiet.", "Puedes traer a tu perro siempre que esté tranquilo."],
      ["Save your work in case the power goes out.", "Guarda tu trabajo por si se va la luz."],
      ["If I save money, I'll be able to travel.", "Si ahorro, podré viajar."],
    ],
    [
      fb("I won't go to the party unless you ___ too.", ["come", "go"], "No iré a la fiesta a menos que [vengas] tú también.",
        "\"Unless\" + present (not *will come, not the subjunctive). «A menos que vengas» = \"unless you come\"."),
      fb("We'll eat outside ___ it gets too cold.", "unless", "Comeremos afuera [a menos que] haga demasiado frío.",
        "\"Unless\" = «a menos que» / «a no ser que» = \"if... not\"."),
      mc("Which sentence is correct?", [
        "Unless you study, you won't pass.",
        "Unless you don't study, you won't pass.",
        "Unless you will study, you won't pass.",
        "Unless you study, you don't pass tomorrow.",
      ], "\"Unless\" already contains the \"not\", so the verb is affirmative: \"unless you study\". *Unless you don't study means «a menos que no estudies»."),
      tr("No lo compres a menos que esté en oferta.", "Don't buy it unless it's on sale.",
        "\"Unless\" + present: \"it's on sale\". Spanish uses the subjunctive («esté»); English doesn't."),
      tr("Si no te apuras, vamos a perder el vuelo.", ["Unless you hurry, we'll miss the flight.", "Unless you hurry, we're going to miss the flight.", "We'll miss the flight unless you hurry.", "We're going to miss the flight unless you hurry."],
        "\"If you don't hurry\" = \"unless you hurry\": only one negative. «Perder» a flight is \"miss\", not *lose.", "Translate into English using \"unless\"."),
      fb("You can use my bike ___ you bring it back by six.", ["as long as", "provided that", "provided", "providing"], "Puedes usar mi bici [siempre que] me la devuelvas antes de las seis.",
        "«Siempre que» as a condition = \"as long as\" or \"provided (that)\". Present after it: \"you bring it back\"."),
      tr("Te presto el dinero con tal de que me lo devuelvas el lunes.", "I'll lend you the money {as long as|provided that|provided|providing} you {pay me back|give it back to me|give it back|return it} {on Monday|Monday}.",
        "«Con tal de que» = \"as long as\" / \"provided that\". Note \"lend\" (prestar a alguien) vs \"borrow\" (pedir prestado)."),
      mc("How do you say «Siempre que voy a Lima, como ceviche» (= cada vez que)?", [
        "Whenever I go to Lima, I eat ceviche.",
        "As long as I go to Lima, I eat ceviche.",
        "Provided I go to Lima, I eat ceviche.",
        "Unless I go to Lima, I eat ceviche.",
      ], "«Siempre que» meaning «cada vez que» is \"whenever\". \"As long as\" and \"provided\" are only for conditions."),
      fb("Bring some snacks ___ the kids get hungry.", "in case", "Trae algo de comer [por si] a los niños les da hambre.",
        "A precaution you take now = \"in case\" + present. «Por si» = \"in case\"."),
      mc("I'll give you my number ___ you get lost.", ["in case", "if", "unless", "in case of"],
        "I give it to you now, to be safe = \"in case\". \"If you get lost\" would mean I give you the number only after you're lost. \"In case of\" needs a noun."),
      tr("Voy a guardar una copia por si se borra el archivo.", "I'm going to {save|keep|make} a copy in case the file {gets deleted|is deleted|gets erased}.",
        "\"In case\" + present for a precaution. Never *in case the file will be deleted."),
      fb("___ emergency, press the red button.", ["In case of an", "In case of"], "[En caso de] emergencia, presione el botón rojo.",
        "\"In case of\" + noun = «en caso de», typical of signs and instructions."),
      tr("Llévate el cargador, por si acaso.", "{Take|Bring} {your|the} charger{,|} just in case.",
        "\"Just in case\" at the end of the sentence = «por si acaso», with nothing after it."),
      mt("Match each word with its Spanish meaning.", [
        ["unless", "a menos que"],
        ["as long as", "siempre que / con tal de que"],
        ["in case", "por si"],
        ["in case of", "en caso de"],
        ["whenever", "cada vez que"],
        ["until", "hasta que"],
      ], "All of these are followed by the present when they talk about the future, except \"in case of\", which takes a noun."),
      tr("En cuanto lleguemos al hotel, vamos a dejar las maletas y salir a comer.", ["As soon as we {get to|arrive at} the hotel, we're going to {drop off our bags|drop our bags off|leave our bags} and go out to eat.", "As soon as we {get to|arrive at} the hotel, we'll {drop off our bags|drop our bags off|leave our bags} and go out to eat."],
        "\"As soon as\" + present (\"we get to\"), then \"going to\" or \"will\". \"Drop off\" = «dejar» something quickly."),
      fb("Let's leave early ___ there's traffic on the highway.", "in case", "Salgamos temprano [por si] hay tráfico en la carretera.",
        "Leaving early is a precaution, so \"in case\", not \"if\"."),
      fb("If I don't finish this report, I ___ able to leave early.", "won't be", "Si no termino este informe, [no podré] salir temprano.",
        "«No podré» = \"won't be able to\". *Will can and *won't can are impossible: modals don't combine."),
      mc("How do you say «Si ahorro, podré viajar»?", [
        "If I save money, I'll be able to travel.",
        "If I save money, I will can travel.",
        "If I will save money, I can travel.",
        "If I save money, I could to travel.",
      ], "\"Will be able to\" is the future of \"can\". And no \"will\" after \"if\"."),
      tr("Si llego tarde, mi jefe se enojará, y si se enoja, no me dará el día libre.", "If I'm late, my boss will {get angry|get mad|be angry}, and if he {gets angry|gets mad|is angry}, he won't give me the day off.",
        "A chain: the result \"will get angry\" becomes the next condition \"if he gets angry\". \"Will\" disappears after \"if\"."),
      wo("If I go to bed early, I might feel better tomorrow.", "Si me acuesto temprano, puede que mañana me sienta mejor.",
        "\"Might\" = «puede que» for a result that isn't certain. Still no \"will\" after \"if\"."),
      mc("How do you say «Hace mucho frío hoy»?", [
        "It's very cold today.",
        "It makes a lot of cold today.",
        "There is much cold today.",
        "It has very cold today.",
      ], "Weather = \"it\" + \"be\" + adjective. *It makes cold is a word-for-word translation of «hace frío»."),
      fb("There's going to be a ___ in the south: no rain for months.", "drought", "Va a haber una [sequía] en el sur: meses sin lluvia.",
        "\"Drought\" = «sequía». It rhymes with \"out\", not with \"thought\"."),
      tr("Si sigue la ola de calor, los ríos se van a secar.", "If the {heatwave|heat wave} {continues|goes on|lasts}, the rivers {will dry up|are going to dry up}.",
        "First conditional about nature: \"if\" + present, \"will\" in the result. «Ola de calor» = \"heatwave\"."),
      tr("¿Qué tiempo va a hacer mañana?", ["What's the weather going to be like tomorrow?", "What will the weather be like tomorrow?"],
        "«¿Qué tiempo hace?» = \"What's the weather like?\". Never *What time makes?: \"time\" is «hora», and weather doesn't use \"make\"."),
      lc("Don't go near the edge of the cliff in this wind.", [
        "No te acerques al borde del acantilado con este viento.",
        "No te acerques a la orilla del río con esta lluvia.",
        "No vayas al valle con este viento.",
        "Ven a la orilla del mar cuando pare el viento.",
      ], "\"Cliff\" = «acantilado»; \"edge\" = «borde»."),
      lc("We'll go to the lake unless it's too windy.", [
        "Iremos al lago a menos que haga demasiado viento.",
        "Iremos al lago si hace mucho viento.",
        "No iremos al lago aunque haga viento.",
        "Fuimos al lago aunque hacía viento.",
      ], "\"Unless it's too windy\" = «a menos que haga demasiado viento»: we'll go if it is NOT too windy."),
      wo("As long as it doesn't rain, the concert will start at nine.", "Siempre que no llueva, el concierto empezará a las nueve.",
        "\"As long as\" + present (here negative, which is fine: only \"unless\" avoids a second negative)."),
      dc("You can stay with us as long as you need.",
        "\"As long as\" here is a condition and a time limit: «todo el tiempo que necesites»."),
      dc("Write down the address in case your phone dies.",
        "\"In case\" + present (\"dies\"). \"My phone died\" = my battery ran out."),
      sp("We'll have the party outside unless it rains.", "\"Unless\" + affirmative present: \"unless it rains\" = «a menos que llueva».",
        "Stress \"outside\" and \"rains\".", "Say it in English: Haremos la fiesta afuera a menos que llueva."),
      sp("Leave a key with your neighbor in case you lose yours.", "\"In case\" for a precaution: you leave the key now, to be safe.",
        "Link \"in case you\": \"in-KAY-syou\".", "Say it in English: Deja una llave con tu vecino por si pierdes la tuya."),
      tr("Si llueve, no iremos al parque; pero lleva un paraguas por si acaso.", "If it rains, we won't go to the park{;|,|.} {but|But} take an umbrella{,|} just in case.",
        "\"If\" for a real condition, \"just in case\" for a precaution. Both in one sentence show the difference."),
      tr("No abras la puerta a menos que sepas quién es.", "Don't open the door unless you know who it is.",
        "\"Unless\" + present (\"you know\"), not the subjunctive. And the indirect question keeps statement order: \"who it is\", not *who is it."),
      tr("Cuando haga calor, iremos al lago, siempre que el carro funcione.", "When it's {hot|warm}, we'll go to the lake{,|} {as long as|provided that|provided} the car {works|is working|runs}.",
        "Three clauses, one rule: present after \"when\" (\"it's hot\") and after \"as long as\" (\"the car works\"); \"will\" only in the main clause."),
      mc("Which sentence is correct?", [
        "I'll bring extra chairs in case your cousins come.",
        "I'll bring extra chairs in case of your cousins come.",
        "I'll bring extra chairs in case your cousins will come.",
        "I'll bring extra chairs unless your cousins don't come.",
      ], "\"In case\" + subject + present. \"In case of\" only takes a noun, there's no \"will\" after \"in case\", and \"unless\" + a negative is a double negative."),
    ],
  ),
];
