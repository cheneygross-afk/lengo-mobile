// Synced from cheneygross-afk/lengo:src/lib/lessons/en-b1-u01-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise, Lesson } from "./types";

// Required drill lessons for EN-B1 unit u01 (present perfect continuous, for/since/ago): a short recap, then graded practice.

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
  slug: `en-b1-pp-continuous-unit-drill-${n}`,
  level: "EN-B1",
  number: n,
  title: `Drill: ${title}`,
  summary,
  duration: `${Math.round((exercises.reduce((s, e) => s + SECONDS[e.type], 0) + 40) / 60)} min`,
  sections: [{ heading, body, examples: examples.map(([es, en]) => ({ es, en })) }],
  exercises,
});

export const EN_B1_U01_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. Present perfect continuous, for/since/ago, How long, simple vs continuous
  // ---------------------------------------------------------------------
  lesson(
    1,
    "I've Been Waiting for Ages",
    "You will be able to turn «llevo...», «hace... que» and «desde hace...» into \"have been\" + -ing, choose for, since or ago, and pick the simple or the continuous.",
    "Recap: have been + -ing, for, since and ago",
    [
      "An activity that started in the past and is still going on takes \"have/has been\" + -ing: \"I've been waiting for an hour\". Spanish uses the present («espero desde hace una hora»), but English looks back from now, so *I wait since an hour is wrong.",
      "\"For\" + a period (for ten minutes), \"since\" + a starting point (since Monday), and \"ago\" + the past simple for a finished moment (two days ago). Use the simple form for results and numbers (\"I've written three emails\") and for state verbs like know, have and be (\"I've known her for years\").",
    ],
    [
      ["I've been waiting for the plumber since eight.", "Estoy esperando al plomero desde las ocho."],
      ["How long have you been living in Puebla?", "¿Cuánto tiempo llevas viviendo en Puebla?"],
      ["She's answered twenty emails today.", "Hoy ha contestado veinte correos."],
      ["We bought this house ten years ago.", "Compramos esta casa hace diez años."],
    ],
    [
      fb("I ___ for the bus for twenty minutes.", "have been waiting", "[Llevo] veinte minutos [esperando] el autobús.",
        "«Llevo + tiempo + gerundio» is \"have been\" + -ing in English. Spanish uses «llevar» or the present, but English needs the present perfect continuous because the waiting started in the past and is still going on. *I am waiting for twenty minutes is the typical mistake."),
      fb("She ___ at the hospital since March.", ["has been working", "has worked"], "[Trabaja] en el hospital desde marzo.",
        "Spanish says «trabaja» (present), but English needs \"has been working\" because the job started in March and continues now. With \"work\", the simple \"has worked\" is also correct. Use \"has\" with she."),
      mc("My brother ___ English since January.", ["has been studying", "is studying", "studies", "has been study"],
        "\"Since January\" connects the past with now, so English needs \"has been\" + -ing. *Is studying since and *studies since copy the Spanish present («estudia inglés desde enero»), and *has been study forgets the -ing."),
      fb("We've been driving ___ three hours.", "for", "Manejamos [desde hace] tres horas.",
        "«Desde hace» + a period = \"for\". Three hours is a length of time, so it is \"for three hours\", never *since three hours."),
      fb("I've had a headache ___ this morning.", "since", "Me duele la cabeza [desde] esta mañana.",
        "«Desde» + a starting point = \"since\". \"This morning\" is the moment it began. Notice that \"have\" (a headache) is a state here, so the simple \"I've had\" is used, not the continuous."),
      mt("Match each English expression with its Spanish meaning.", [
        ["for two weeks", "desde hace dos semanas"],
        ["since Tuesday", "desde el martes"],
        ["two weeks ago", "hace dos semanas"],
        ["since I was ten", "desde que tenía diez años"],
      ], "\"For\" + a length of time, \"since\" + a starting point (a day, a date or a whole clause in the past simple), and \"ago\" after a period to say when something finished happened. Spanish «hace» can be \"ago\" or \"for\", so check the meaning."),
      tr("Llevo media hora buscando mis lentes.", "I've been looking for my glasses for {half an hour|thirty minutes}.",
        "«Llevo + tiempo + gerundio» = \"I've been\" + -ing + \"for\" + time. Never translate «llevar» as \"carry\" here. «Lentes» are \"glasses\", always plural in English."),
      tr("Hace dos años que mi hermana estudia medicina.", "My sister {has been studying|has studied} medicine for two years.",
        "«Hace dos años que + presente» = present perfect continuous + \"for two years\". With \"study\", the simple \"has studied\" is also correct. *My sister studies medicine since two years has two mistakes: the tense and \"since\"."),
      tr("¿Cuánto tiempo llevas trabajando aquí?", "How long have you {been working|worked} here?",
        "\"How long\" + \"have you been\" + -ing. \"How long\" already means «cuánto tiempo», so never add \"time\" (*How long time...?). With \"work\", \"How long have you worked here?\" is also correct."),
      wo("How long have they been living in Monterrey?", "¿Cuánto tiempo llevan viviendo en Monterrey?",
        "Question order: \"How long\" + \"have\" + subject + \"been\" + -ing. The auxiliary \"have\" goes before \"they\"."),
      mc("Which sentence is correct?", [
        "How long have you been learning to drive?",
        "How long time have you been learning to drive?",
        "How long are you learning to drive?",
        "Since when you learn to drive?",
      ], "The neutral question is \"How long have you been...?\". *How long time adds an extra word, *How long are you... uses the present continuous for a period up to now, and *Since when you learn has no auxiliary and the wrong tense."),
      fb("I ___ well lately. I keep waking up at 3 a.m.", ["haven't been sleeping", "haven't slept"], "Últimamente [no duermo] bien. Me despierto a las 3 de la mañana.",
        "Negative: \"haven't been\" + -ing, very common with \"lately\" and \"recently\". Spanish uses the present («no duermo bien»), but English looks at the recent period up to now."),
      tr("Tienes las manos sucias. ¿Has estado arreglando la bici?", "Your hands are dirty. Have you been fixing {the|your} {bike|bicycle}?",
        "You see a result now (dirty hands) and ask about the activity that caused it: \"Have you been\" + -ing. Note \"Your hands are dirty\": English uses \"be\" + adjective, not *You have the hands dirty."),
      lc("You look tired. Have you been working late?", [
        "Te ves cansado. ¿Has estado trabajando hasta tarde?",
        "Te ves cansado. ¿Vas a trabajar hasta tarde?",
        "Te veías cansado. ¿Trabajabas hasta tarde?",
        "Te ves cansado. ¿Trabajas hasta tarde todos los días?",
      ], "\"Have you been working late?\" asks about a recent activity that explains what you see now (a tired face). It is not about the future, the past or a daily habit."),
      mc("\"Have you been exercising lately?\" Choose the natural short answer.", ["Yes, I have.", "Yes, I've.", "Yes, I do.", "Yes, I been."],
        "Short answers repeat the auxiliary: \"Yes, I have\" / \"No, I haven't\". A positive short answer is never contracted (*Yes, I've), and \"do\" does not match a present perfect question."),
      tr("Estoy leyendo desde las ocho.", "I've been reading since {eight|8|eight o'clock}.",
        "«Estoy leyendo» alone is \"I'm reading\", but as soon as Spanish adds «desde», English needs \"have been\" + -ing. *I'm reading since eight is a very common mistake."),
      tr("Conozco a mi mejor amiga desde que teníamos seis años.", "I've known my best friend since we were six{ years old|}.",
        "\"Know\" is a state verb, so it takes the simple present perfect even with \"since\": \"I've known\", never *I've been knowing or *I know her since. After \"since\" you can put a whole clause in the past simple: \"since we were six\". Age uses \"be\", not \"have\"."),
      mc("Which sentence is correct?", [
        "I've had this laptop since 2021.",
        "I've been having this laptop since 2021.",
        "I have this laptop since 2021.",
        "I'm having this laptop since 2021.",
      ], "\"Have\" for possession is a state verb, so it takes the simple form: \"I've had\". «Tengo esta laptop desde 2021» uses the present in Spanish, but English needs the present perfect."),
      fb("I ___ three chapters of my thesis this month.", ["have written", "have finished"], "Este mes [he escrito] tres capítulos de la tesis.",
        "A number (three chapters) means a result, so use the present perfect simple: \"have written\". The continuous would focus on the activity, not on how many."),
      fb("I ___ my thesis all morning, and I'm still on page two.", "have been writing", "[Llevo] toda la mañana [escribiendo] la tesis y sigo en la página dos.",
        "\"All morning\" says how long, and the work isn't finished, so the continuous is best: \"have been writing\"."),
      tr("¿Cuántos correos has contestado hoy?", "How many emails have you {answered|replied to} today?",
        "\"How many\" asks for a number, so use the simple: \"have you answered\". *How many emails have you been answering sounds wrong because the continuous does not count results."),
      tr("Llevamos toda la tarde limpiando el departamento.", "We've been cleaning the apartment {all afternoon|the whole afternoon}.",
        "«Llevamos + tiempo + gerundio» = \"We've been\" + -ing. \"All afternoon\" needs no preposition: not *for all afternoon. «Departamento» is \"apartment\" in American English."),
      fb("I moved to Guadalajara three years ___.", "ago", "Me mudé a Guadalajara [hace] tres años.",
        "«Hace» + time for a finished moment = time + \"ago\", with the past simple (\"moved\"). \"Ago\" goes after the period, never before: *ago three years."),
      dc("How long have you been feeling like this?",
        "A doctor's question: \"How long have you been feeling...?\" = «¿desde cuándo te sientes así?». Listen for the weak \"have\" after \"How long\"."),
      tr("Empecé este trabajo hace seis meses.", "I {started|began} this job six months ago.",
        "A finished moment in the past («empecé») takes the past simple + \"ago\". You could also say \"I've been working here for six months\", but that is a different sentence."),
      tr("Hace siglos que no veo a mis primos.", ["I haven't seen my cousins {for|in} ages.", "It's been ages since I {saw|last saw} my cousins."],
        "Two natural options: the negative present perfect \"I haven't seen my cousins for ages\", or \"It's been ages since\" + an affirmative past simple: \"since I saw\". Don't put a negative after \"since\" here: *since I didn't see is wrong."),
      wo("It's been ages since we took a vacation.", "Hace siglos que no nos tomamos unas vacaciones.",
        "\"It's been ages since\" + past simple. \"It's\" here means \"it has\". Notice the affirmative \"took\" for the Spanish «no nos tomamos»."),
      dc("She's been teaching math since she finished college.",
        "\"She's been\" = \"she has been\": the word \"been\" tells you it is \"has\", not \"is\". After \"since\" comes a clause in the past simple: \"since she finished college\"."),
      sp("I've been working from home since Monday.", "Present perfect continuous + \"since\" + a starting point. Spanish says «trabajo desde casa desde el lunes», with the present.",
        "Say \"I've been\" fast and light, like \"I've-bin\"; stress \"home\" and \"Monday\".", "Say it in English: Trabajo desde casa desde el lunes."),
      wo("She's been feeling much better since she changed jobs.", "Se siente mucho mejor desde que cambió de trabajo.",
        "\"Has been feeling\" (up to now) + \"since\" + past simple (\"changed\") for the starting point."),
      lc("I've known Daniel since college, but we haven't talked for months.", [
        "Conozco a Daniel desde la universidad, pero hace meses que no hablamos.",
        "Conocí a Daniel en la universidad y hablamos hace unos meses.",
        "Conozco a Daniel desde hace meses, pero no fuimos a la universidad juntos.",
        "Voy a conocer a Daniel en la universidad dentro de unos meses.",
      ], "\"I've known... since college\" = «lo conozco desde la universidad» (state verb, simple). \"We haven't talked for months\" = «hace meses que no hablamos»."),
      tr("Vivo en Lima desde 2019.", "I've {lived|been living} in Lima since 2019.",
        "Classic trap: *I live in Lima since 2019 copies the Spanish present. A situation that started in 2019 and is still true needs the present perfect, simple or continuous."),
      tr("Estoy esperando desde hace cuarenta minutos.", "I've been waiting for forty minutes.",
        "Two traps in one: «estoy esperando» is not *I'm waiting here, because there is a length of time, and «desde hace» is \"for\", not \"since\". *I'm waiting since forty minutes has both mistakes."),
      mc("Which sentence is correct?", [
        "She's been sick for three days.",
        "She's been sick since three days.",
        "She is sick since three days.",
        "She is sick for three days.",
      ], "Three days is a period, so \"for\". And «está enferma desde hace tres días» needs the present perfect of \"be\": \"She's been sick\". The present \"is sick\" with \"for\" or \"since\" copies Spanish."),
      tr("Mi abuela tiene 80 años y vive en la misma casa desde que se casó.", "My {grandmother|grandma} is 80{ years old|} and {has lived|has been living} in the same house since she got married.",
        "Two classic traps: age uses \"be\" (\"is 80\", never *has 80 years), and «vive... desde que» needs the present perfect: \"has lived\". After \"since\", the past simple: \"since she got married\"."),
      sp("How long have you been playing the guitar?", "\"How long\" + \"have you been\" + -ing: the natural way to ask «¿cuánto tiempo llevas tocando la guitarra?».",
        "Join the words: \"How long'v you bin playing\". Stress \"long\" and \"guitar\".", "Say it in English: ¿Cuánto tiempo llevas tocando la guitarra?"),
    ],
  ),

  // ---------------------------------------------------------------------
  // Drill 2. Errors, catching up, «llevo X sin...», personality, weak forms + whole unit
  // ---------------------------------------------------------------------
  lesson(
    2,
    "Catching Up, «Llevo... sin...» & Personality",
    "You will be able to avoid the classic for/since errors, say «llevo X sin...» naturally, catch up with an old friend and describe someone's personality without false friends.",
    "Recap: errors to avoid and what to say instead",
    [
      "Don't copy the Spanish present: «vivo aquí desde 2015» is \"I've lived here since 2015\", and «llevo dos semanas sin fumar» is the negative present perfect, \"I haven't smoked for two weeks\". «Hace dos años que me casé» is a finished event: \"I got married two years ago\".",
      "To catch up, ask \"What have you been up to?\" and use \"just\", \"already\", \"yet\" and \"ever\" for news. Watch the false friends: «simpático» is \"nice\", «sensible» is \"sensitive\", and \"sensible\" means «sensato».",
    ],
    [
      ["I haven't eaten meat for a year.", "Llevo un año sin comer carne."],
      ["What have you been up to since graduation?", "¿Qué es de tu vida desde la graduación?"],
      ["My new coworker is really nice.", "Mi nuevo compañero de trabajo es muy simpático."],
      ["He's very sensitive, so be careful what you say.", "Es muy sensible, así que ten cuidado con lo que dices."],
    ],
    [
      mc("Which sentence is correct?", [
        "I've lived here since 2015.",
        "I live here since 2015.",
        "I'm living here since 2015.",
        "I lived here since 2015.",
      ], "Something that started in 2015 and is still true needs the present perfect. *I live here since 2015 and *I'm living here since 2015 copy the Spanish present; \"I lived\" would mean you don't live there now, and it doesn't go with \"since\"."),
      fb("My dad ___ at the same factory for twenty years.", ["has been working", "has worked"], "Mi papá [trabaja] en la misma fábrica desde hace veinte años.",
        "The error *My dad works there for twenty years copies the Spanish present. Up to now = present perfect: \"has been working\" or \"has worked\"."),
      tr("Mi sobrina tiene seis años y lleva un año tocando el piano.", "My niece is six{ years old|} and {she's been playing|has been playing|she's played|has played} the piano for a year.",
        "Age with \"be\": \"is six\", never *has six years. «Lleva un año tocando» = \"has been playing... for a year\"."),
      tr("Llevo tres semanas sin tomar café.", "I haven't {had|drunk} {coffee|any coffee} {for|in} three weeks.",
        "«Llevo X sin + infinitivo» = negative present perfect simple + \"for\". Don't translate «sin» as \"without\": *I carry three weeks without coffee is not English. American English also says \"in three weeks\"."),
      fb("It ___ for two months, and the farmers are worried.", "hasn't rained", "[Hace] dos meses [que no llueve] y los agricultores están preocupados.",
        "«Hace X que no...» = \"hasn't\" + participle + \"for X\". Weather verbs need \"it\" as the subject."),
      tr("Mis papás no me llaman desde el domingo.", "My parents haven't called me since Sunday.",
        "«No me llaman desde...» describes a period with no calls up to now, so English uses the negative present perfect: \"haven't called\". *My parents don't call me since Sunday copies the Spanish present."),
      mc("How do you say «Llevo un año sin manejar»?", [
        "I haven't driven for a year.",
        "I carry a year without driving.",
        "I've been driving for a year.",
        "I don't drive since a year.",
      ], "The negative present perfect + \"for\" is the natural form. *I carry... translates «llevar» word for word, \"I've been driving for a year\" means the opposite, and *I don't drive since a year has the wrong tense and the wrong preposition."),
      tr("Hace un mes que mi primo busca trabajo.", "My cousin has been looking for {a job|work} for {a month|one month}.",
        "«Hace X que + presente» = present perfect continuous + \"for X\". Note the two \"for\"s: \"look for\" (buscar) and \"for a month\" (desde hace un mes)."),
      fb("We started the project in January. We ___ on it since January.", ["have been working", "have worked"], "Empezamos el proyecto en enero. [Trabajamos] en él desde enero.",
        "From \"ago\" or a past date to \"since\": \"We started in January\" (past simple, a finished moment) becomes \"We've been working on it since January\" (the period up to now)."),
      tr("Hace cinco años que se casaron.", ["They got married five years ago.", "They've been married for five years."],
        "«Hace X que» + a finished event is NOT the present perfect continuous: *They've been marrying is impossible. Say when it happened (\"got married five years ago\") or how long the state has lasted (\"have been married for five years\")."),
      wo("What have you been up to lately?", "¿Qué es de tu vida últimamente?",
        "\"What have you been up to?\" is the classic catching-up question: «¿qué has estado haciendo?», «¿qué es de tu vida?»."),
      tr("¡Cuánto tiempo! ¿Qué has estado haciendo?", "{Long time no see|It's been ages|It's been a long time}! What have you been {up to|doing}?",
        "\"Long time no see!\" or \"It's been ages!\" is the informal way to say «¡cuánto tiempo!». *How much time! is not used for this."),
      lc("We should get together and catch up next week.", [
        "Deberíamos vernos y ponernos al día la semana que viene.",
        "Deberíamos alcanzarnos la semana que viene.",
        "Nos vimos la semana pasada para ponernos al día.",
        "Tenemos que tomar el tren juntos la semana que viene.",
      ], "\"Get together\" = «vernos, reunirnos» and \"catch up\" = «ponerse al día». Here \"catch up\" has nothing to do with «alcanzar» or catching a train."),
      fb("Have you found a new apartment ___?", "yet", "¿[Ya] encontraste departamento nuevo?",
        "In questions and negatives, «ya» / «todavía» at the end is \"yet\". Latin American Spanish uses the preterite («encontraste»), but English prefers the present perfect when no time is given."),
      tr("Acabo de empezar un curso de fotografía.", ["I've just started a photography {course|class}.", "I just started a photography {course|class}."],
        "«Acabo de» = \"have just\" + participle. \"Just\" goes between \"have\" and the participle. In American English, \"I just started\" is also common."),
      mt("Match each word with its Spanish meaning.", [
        ["reliable", "de fiar, confiable"],
        ["easy-going", "tranquilo, relajado"],
        ["stubborn", "terco"],
        ["outgoing", "extrovertido"],
        ["sensible", "sensato"],
        ["sensitive", "sensible"],
      ], "Watch the false friends: English \"sensible\" is «sensato», and the Spanish «sensible» is \"sensitive\"."),
      mc("How do you say «Mi jefa es muy simpática»?", [
        "My boss is very nice.",
        "My boss is very sympathetic.",
        "My boss is very sensible.",
        "My boss is very sensitive.",
      ], "«Simpático» = \"nice\", \"friendly\" or \"likeable\". \"Sympathetic\" is a false friend: it means «comprensivo», someone who understands your problems."),
      fb("Don't be so ___! The bus will be here in two minutes.", "impatient", "¡No seas tan [impaciente]! El autobús llega en dos minutos.",
        "The prefix in- becomes im- before p: \"impatient\". Spanish does the same: «impaciente»."),
      fb("He never keeps his promises. He's really ___.", "unreliable", "Nunca cumple sus promesas. Es muy [poco confiable].",
        "The opposite of \"reliable\" takes un-: \"unreliable\". Spanish needs a phrase («poco confiable», «no es de fiar») where English has one word."),
      tr("Mi compañero de trabajo es muy inmaduro.", "My {coworker|colleague|co-worker} is {very|really} immature.",
        "«Inmaduro» = \"immature\", with double m: in- becomes im- before m. *Inmature is a very common spelling mistake."),
      fb("What's your new boss ___?", "like", "[¿Cómo es] tu nueva jefa?",
        "To ask about personality, say \"What's she like?\". \"How is she?\" asks about health or mood («¿cómo está?»)."),
      tr("Ha estado de muy mal humor últimamente.", "{He's|She's} been {really |very |}moody {lately|recently}.",
        "\"Moody\" = «de mal humor, temperamental». The present perfect of \"be\" + \"lately\" describes the recent period up to now."),
      dc("We've been waiting for you since six.",
        "\"We've been\" sounds like /wiːv bɪn/. Don't drop the /v/: *We been waiting is not standard English."),
      sp("They've been living in Chicago for a year.", "\"They've been living... for a year\": the present perfect continuous with \"for\".",
        "Join \"they've\" and \"been\": top teeth on your bottom lip for /v/, then both lips close for /b/. \"For\" is weak: \"fer\"."),
      lc("He's been sick all week.", ["he has", "he is", "he was", "he does"],
        "\"He's\" + \"been\" is always \"he has\": \"he is been\" is impossible. Use the word after \"'s\" to decide.", "What does \"He's\" mean in this sentence?"),
      fb("I ___ my keys yesterday, but I found them this morning.", "lost", "[Perdí] las llaves ayer, pero las encontré esta mañana.",
        "\"Yesterday\" is a finished time, so the past simple: \"lost\". *I've lost them yesterday is always wrong."),
      tr("Estaba manejando cuando me llamó mi jefe.", "I was driving when my boss called{ me|}.",
        "Past continuous for the background (\"was driving\") and past simple for the short action that interrupts it (\"called\"). Compare: \"I've been driving all day\" (up to now)."),
      mc("Which sentence is correct?", [
        "I saw her two days ago.",
        "I've seen her two days ago.",
        "I've been seeing her two days ago.",
        "I see her since two days.",
      ], "\"Ago\" always goes with the past simple: \"I saw her two days ago\". The present perfect never takes \"ago\"."),
      tr("Empecé a correr hace un año y ya he corrido dos maratones.", ["I started running a year ago{,|} and I've already run two marathons.", "I started to run a year ago{,|} and I've already run two marathons."],
        "Three choices in one sentence: \"ago\" + past simple (\"started\"), then a result with a number in the present perfect simple (\"have already run two marathons\"). \"Already\" goes between \"have\" and the participle."),
      tr("Llevo toda la mañana pintando la sala y solo he pintado una pared.", "I've been painting the living room {all morning|the whole morning}{,|} {and|but} I've only painted one wall.",
        "Activity and how long = continuous (\"I've been painting all morning\"); result and how many = simple (\"I've only painted one wall\")."),
      wo("I haven't been to the gym since my birthday.", "No voy al gimnasio desde mi cumpleaños.",
        "«No voy... desde» = a period with no visits up to now: \"I haven't been to the gym since...\". \"Been to\" = gone and come back."),
      tr("La conozco desde hace años y siempre ha sido muy sensata.", "I've known her for years{,|} and she's always been {very|really} sensible.",
        "State verb \"know\" in the simple present perfect + \"for years\". \"Always\" goes between \"has\" and \"been\". And the false friend: «sensata» = \"sensible\", not *sensitive."),
      dc("It's been two years since I last saw my grandparents.",
        "\"It's been\" = \"it has been\". \"Since I last saw\" uses the affirmative past simple, even though Spanish says «hace dos años que no veo a mis abuelos»."),
      mc("Which sentence is correct?", [
        "How long have you been dating Lucas?",
        "How long time are you dating Lucas?",
        "How long you have been dating Lucas?",
        "How much time are you dating Lucas?",
      ], "Only the first one has everything: \"How long\" (no \"time\"), the present perfect continuous and question order (\"have you\")."),
      sp("What have you been up to since college?", "The catching-up question: «¿qué es de tu vida desde la universidad?».",
        "Weak \"have\": \"Whatav you bin up to\". Stress \"up\" and \"college\".", "Say it in English: ¿Qué es de tu vida desde la universidad?"),
    ],
  ),
];
