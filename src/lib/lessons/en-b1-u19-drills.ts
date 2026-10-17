// Synced from cheneygross-afk/lengo:src/lib/lessons/en-b1-u19-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise, Lesson } from "./types";

// Required drill lessons for EN-B1 unit u19 (reported statements, say vs tell): a short recap, then graded practice.

const SLUG = "en-b1-reported-speech";

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

export const EN_B1_U19_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. Backshift, pronouns, time/place words, modals, say vs tell,
  // when not to backshift
  // ---------------------------------------------------------------------
  lesson(
    1,
    "Reporting What People Said",
    "You will be able to report statements with the right tense, pronouns and time words, choose between say and tell, and know when you don't need to backshift.",
    "Recap: one step back, and tell + person",
    [
      "When you report later, the verb usually moves one step back: am/is → was, live → lived, am working → was working, have done / did → had done, will → would, can → could, must → had to. Pronouns and time words follow the new situation: \"I\" → \"she\", \"tomorrow\" → \"the next day\", \"here\" → \"there\".",
      "\"Tell\" needs a person right after it (\"She told me...\"); \"say\" doesn't (\"She said...\", \"She said to me...\"). *She said me is always wrong. You can keep the present when it is still true, with \"says\", or when the words were said a moment ago.",
    ],
    [
      ["He told me he was looking for a new job.", "Me dijo que estaba buscando un trabajo nuevo."],
      ["She said she had already paid.", "Dijo que ya había pagado."],
      ["They said they would arrive the next day.", "Dijeron que llegarían al día siguiente."],
      ["My dad says he's proud of you.", "Mi papá dice que está orgulloso de ti."],
    ],
    [
      fb("\"I'm nervous about the interview.\" → Lucia said she ___ nervous about the interview.", "was", "Lucia dijo que [estaba] nerviosa por la entrevista.",
        "Present \"am\" moves back to \"was\". Spanish does the same: «estoy» → «estaba»."),
      fb("\"I work in a bank.\" → Martin said he ___ in a bank.", ["worked", "works"], "Martin dijo que [trabajaba] en un banco.",
        "Present simple → past simple: \"worked\". If he still works there, \"works\" is also correct."),
      fb("When I called last night, they said they ___ a movie.", "were watching", "Cuando llamé anoche, dijeron que [estaban viendo] una película.",
        "Present continuous \"we're watching\" → past continuous \"were watching\"."),
      mc("\"I've lost my passport.\" Which report is correct?", [
        "He said he had lost his passport.",
        "He said he has lost my passport.",
        "He said me he had lost his passport.",
        "He said he had lose his passport.",
      ], "Present perfect → past perfect (\"had lost\"), and \"my\" → \"his\". *said me is never possible."),
      tr("Carla me dijo que había terminado el proyecto.", ["Carla told me {|that }she had finished the project.", "Carla said {|that }she had finished the project."],
        "«Me dijo» = \"told me\" (not *said me). «Había terminado» = \"had finished\"."),
      tr("Dijeron que nunca habían visto la nieve.", "They said {|that }they had never seen snow.",
        "Past perfect for something that happened before the moment of speaking. Note: \"snow\" in general takes no article."),
      fb("\"I love my new apartment,\" said Ana. → Ana said she loved ___ new apartment.", "her", "Ana dijo que le encantaba [su] nuevo departamento.",
        "«Su» depends on the owner: Ana is a woman, so \"her\"."),
      fb("\"Our son is a doctor,\" said Mr. and Mrs. Brown. → They said ___ son was a doctor.", "their", "Los señores Brown dijeron que [su] hijo era médico.",
        "Two owners = \"their\". Spanish «su» hides the difference, but English must choose his, her or their."),
      mc("On Monday, Emma said: \"I'll call you tomorrow.\" On Friday, you report it: Emma said she would call me ___.", ["the next day", "tomorrow", "the day before", "yesterday"],
        "On Friday, Monday's \"tomorrow\" is not tomorrow anymore: \"the next day\" (or \"the following day\")."),
      tr("Dijo que se iba a Chile la semana siguiente.", "{He|She} said {|that }{he|she} was {leaving for|going to} Chile the {following|next} week.",
        "\"Next week\" → \"the following week\" when you report later. Present continuous → past continuous."),
      fb("\"I saw her yesterday.\" (reported a week later) → He said he had seen her ___.", ["the day before", "the previous day"], "Dijo que la había visto [el día anterior].",
        "\"Yesterday\" → \"the day before\" or \"the previous day\" when you report on another day."),
      mc("Your friend in Cancun texted you: \"I love it here.\" You tell your family at home:", [
        "She said she loved it there.",
        "She said she loved it here.",
        "She said me she loved it there.",
        "She told she loved it there.",
      ], "You are not in Cancun, so \"here\" → \"there\". \"Tell\" needs a person; \"say\" never takes one directly."),
      tr("Lucia dijo que podía llevarnos al aeropuerto.", "Lucia said {|that }she could {take|drive} us to the airport.",
        "\"Can\" → \"could\". After a modal, the base verb with no \"to\"."),
      tr("Me dijo que me llamaría el domingo.", "{He|She} told me {|that }{he|she} would call me on Sunday.",
        "\"Will\" → \"would\": «me llamaría». «Me dijo» = \"told me\"."),
      fb("\"I must finish this report.\" → He said he ___ finish the report.", "had to", "Dijo que [tenía que] terminar el informe.",
        "\"Must\" has no past form, so in reported speech it becomes \"had to\"."),
      wo("They said it might snow in the mountains.", "Dijeron que podría nevar en las montañas.",
        "\"May\" → \"might\"; \"might\" stays \"might\". Weather verbs need \"it\"."),
      mc("Complete: \"She ___ me she was moving to Mexico City.\"", ["told", "said", "said to", "told to"],
        "A person (\"me\") follows directly, so \"told\". \"Said\" needs \"to\" before the person, and \"tell\" never takes \"to\"."),
      fb("What did he ___ to you?", "say", "¿Qué te [dijo]?",
        "\"Say\" + \"to\" + person. With \"tell\" it would be \"What did he tell you?\" (no \"to\")."),
      tr("Les dije a mis papás que había aprobado.", "I told my {parents|mom and dad} {|that }I had passed{ the exam| the test| my exams|}.",
        "\"Tell\" + person + that-clause. «Aprobar» = \"pass\", past perfect because it happened before you told them."),
      mc("Which sentence is correct?", [
        "He told everyone the truth.",
        "He said everyone the truth.",
        "He told to everyone the truth.",
        "He said the truth to everyone.",
      ], "Fixed phrase: \"tell the truth\" (not *say the truth). \"Tell\" + person, no \"to\"."),
      fb("My grandmother ___ the best stories.", "tells", "Mi abuela [cuenta] las mejores historias.",
        "«Contar» a story is \"tell\", never *count (which is «contar números»)."),
      tr("Dile hola a tu hermano de mi parte.", ["Say hello to your brother {for me|from me}.", "Say hi to your brother {for me|from me}.", "Tell your brother I said {hello|hi}."],
        "\"Say hello to\" + person. \"Say\" takes the words; the person goes after \"to\"."),
      tr("No noto la diferencia entre los dos.", "I can't tell the difference between {the two|them|the two of them}.",
        "\"Tell the difference\" = «notar la diferencia». A fixed phrase with \"tell\"."),
      mt("Match each phrase with its meaning.", [
        ["tell a joke", "contar un chiste"],
        ["say sorry", "pedir perdón"],
        ["tell a lie", "decir una mentira"],
        ["say goodbye", "despedirse"],
        ["tell the time", "decir la hora"],
      ], "Learn these as fixed phrases: they don't follow the person rule."),
      mc("Ana texts you: \"I'm running late.\" You tell the group right away. Which is most natural?", [
        "Ana says she's running late.",
        "Ana says she was running late.",
        "Ana says me she's running late.",
        "Ana said she has been late.",
      ], "With a present reporting verb (\"says\"), nothing moves back. Perfect for messages and texts."),
      tr("El correo dice que la reunión es a las nueve.", "The email says {|that }the meeting is at nine{ o'clock|}.",
        "\"Says\" for what a text says, with no backshift. Not *It says in the email is the meeting."),
      tr("Mi mamá te manda saludos.", ["My {mom|mother} says hi.", "My {mom|mother} says hello."],
        "\"My mom says hi\" is the natural English for «te manda saludos»."),
      fb("He said he ___ coming, but he never showed up.", "was", "Dijo que [venía], pero nunca apareció.",
        "The moment has passed and it didn't happen, so you must backshift: \"was coming\", not *is coming."),
      lc("The teacher said the Earth goes around the Sun.", ["El profesor dijo que la Tierra gira alrededor del Sol.", "El profesor dijo que la Tierra giraba alrededor del Sol, pero ya no.", "El profesor preguntó si la Tierra gira alrededor del Sol.", "El profesor dice que el Sol gira alrededor de la Tierra."],
        "General truths often keep the present: \"goes\", because it is always true."),
      dc("She told me she'd already bought the tickets.",
        "\"She'd\" here is \"she had\" (past perfect), because \"bought\" follows. Listen for the short \"d\"."),
      dc("Tom says he can't come to the party tonight.",
        "\"Says\" (present) = no backshift: \"can't\" stays."),
      sp("She said she had never been to Japan.",
        "Past perfect in reported speech: \"had never been\".",
        "\"Had\" is weak and short; stress \"never\" and \"Japan\"."),
      sp("He told me he was very busy.",
        "«Me dijo» = \"He told me\". Never *He said me.",
        undefined, "Say it in English: «Me dijo que estaba muy ocupado.»"),
      tr("Mi hermana me dijo que su novio era de Colombia.", ["My sister told me {|that }her boyfriend {was|is} from Colombia.", "My sister said {|that }her boyfriend {was|is} from Colombia."],
        "Trap 1: «me dijo» = \"told me\", not *said me. Trap 2: «su» = \"her\" (my sister's boyfriend)."),
      tr("Dijo que era tarde y que se iba a casa.", "{She|He} said {|that }it was late and {that |}{she|he} was going home.",
        "English always needs a subject: \"it was late\", \"she was going home\". *She said was late is wrong."),
      mc("Last week Diego said: \"I'll fix your bike tomorrow.\" Which report is correct today?", [
        "Diego said he would fix my bike the next day.",
        "Diego said he will fix my bike tomorrow.",
        "Diego said me he would fix my bike the next day.",
        "Diego told he would fix my bike the next day.",
      ], "An old promise: \"will\" → \"would\", \"tomorrow\" → \"the next day\", \"your\" → \"my\". And \"said\" + no person."),
    ],
  ),

  // ---------------------------------------------------------------------
  // Drill 2. Transformations, errors, gossip, messages, communication verbs
  // ---------------------------------------------------------------------
  lesson(
    2,
    "Gossip, Messages & Communication",
    "You will be able to transform direct speech with several changes at once, avoid the say/tell errors, pass on news and phone messages, and use verbs like discuss, argue, explain and complain correctly.",
    "Recap: four checks and the right verb",
    [
      "To report, check four things: the verb (one step back), the people (I → she, my → her), time and place (tomorrow → the next day, here → there), and say or tell. For requests in messages, use \"asked you to\" or \"wants you to\" + verb.",
      "Communication verbs have their own patterns: \"discuss\" something (no \"about\"), \"argue with\" someone «discutir, pelear», \"explain something to someone\" (not *explain me), \"complain to\" someone \"about\" something, \"shout at\" someone when angry.",
    ],
    [
      ["Emma said she had left her keys at work.", "Emma dijo que había dejado las llaves en el trabajo."],
      ["Apparently, the store is closing next month.", "Por lo visto, la tienda cierra el mes que viene."],
      ["He asked you to send him the photos.", "Te pidió que le mandaras las fotos."],
      ["We discussed the schedule with the whole team.", "Hablamos del horario con todo el equipo."],
    ],
    [
      fb("\"We've already eaten,\" they said. → They said they ___ already eaten.", "had", "Dijeron que ya [habían] comido.",
        "Present perfect \"have eaten\" → past perfect \"had eaten\"."),
      tr("«No puedo venir hoy», me dijo Pedro.", ["Pedro told me {|that }he couldn't come that day.", "Pedro said {|that }he couldn't come that day."],
        "Two changes: \"can't\" → \"couldn't\" and \"today\" → \"that day\". «Me dijo» = \"told me\".", "Report it in English (you are telling the story a week later)."),
      mc("\"I'll help you,\" Ana told me. Which report is correct?", [
        "Ana told me she would help me.",
        "Ana told me she would help you.",
        "Ana told me I would help her.",
        "Ana said me she would help me.",
      ], "\"I\" → \"she\", \"you\" (me) → \"me\", \"will\" → \"would\"."),
      tr("«Perdí mis llaves aquí ayer», dijo Tom.", "Tom said {|that }he had lost his keys there the {day before|previous day}.",
        "Four changes: \"I\" → \"he\", \"lost\" → \"had lost\", \"here\" → \"there\", \"yesterday\" → \"the day before\".", "Report it in English (a week later, in another place)."),
      mc("\"He said he couldn't find his glasses.\" What were his exact words?", [
        "\"I can't find my glasses.\"",
        "\"He can't find his glasses.\"",
        "\"I couldn't found my glasses.\"",
        "\"You can't find your glasses.\"",
      ], "Back to direct speech: \"couldn't\" → \"can't\", \"he/his\" → \"I/my\"."),
      wo("She said she would see us the following week.", "Dijo que nos vería la semana siguiente.",
        "\"Will see\" → \"would see\"; \"next week\" → \"the following week\"."),
      mc("Which sentence is correct?", [
        "My boss told me the meeting was canceled.",
        "My boss said me the meeting was canceled.",
        "My boss told to me the meeting was canceled.",
        "My boss told that the meeting was canceled.",
      ], "\"Told\" + person, with no \"to\". *said me and *told that (with no person) are the classic errors."),
      tr("¿Qué te dijo el médico?", ["What did the doctor {tell you|say to you|say}?", "What did the doctor {tell|say to} you?"],
        "\"What did he tell you?\" or \"What did he say (to you)?\". Never *What did he say you?."),
      fb("She ___ that she was leaving the company.", "said", "[Dijo] que se iba de la empresa.",
        "No person after the verb, so it must be \"said\". *She told that is wrong: \"tell\" always needs a person."),
      tr("Ana dijo que su hermano estaba enfermo.", "Ana said {|that }her brother was {sick|ill}.",
        "«Su» = \"her\" because Ana is a woman. Spanish speakers often choose \"his\" by mistake."),
      fb("\"I'm tired.\" → She said ___ was tired.", "she", "Dijo que [ella] estaba cansada.",
        "English always needs a subject after \"said\": *She said was tired is wrong."),
      tr("Por lo visto, Emma está embarazada.", "Apparently{,|} Emma is pregnant.",
        "\"Apparently\" = «por lo visto». And «embarazada» is \"pregnant\" (\"embarrassed\" = «avergonzada»)."),
      tr("¿Te enteraste de lo de Carlos?", ["Did you hear about Carlos?", "Have you heard about Carlos?"],
        "\"Hear about\" + person = «enterarse de lo de...». A classic way to start gossip."),
      fb("___ to Lucia, the new boss is very strict.", "According", "[Según] Lucia, el nuevo jefe es muy estricto.",
        "\"According to\" = «según». Never *according with."),
      mc("\"Tom got a promotion.\" — \"___? Good for him!\"", ["Did he", "Was he", "Does he", "Got he"],
        "Echo questions use the auxiliary of the sentence. \"Got\" is past simple, so the auxiliary is \"did\"."),
      lc("You're kidding! Who told you that?", ["¡No puede ser! ¿Quién te dijo eso?", "Te estás riendo. ¿Quién te lo contó?", "¿Quién te contó ese chiste?", "¿Con quién estás hablando?"],
        "\"You're kidding!\" shows surprise («¡No me digas!»). \"Who told you that?\" asks for the source."),
      tr("Hola, soy Martin, de Recursos Humanos.", ["Hi, this is Martin from {Human Resources|HR}.", "Hi, it's Martin from {Human Resources|HR}."],
        "On the phone, «soy» = \"This is\" or \"It's\", not *I am Martin or *Here is Martin."),
      fb("Can you call me ___ when you get this?", "back", "¿Me puedes [devolver] la llamada cuando escuches esto?",
        "\"Call back\" = «devolver la llamada». \"When you get this\" = when you hear this message."),
      tr("Llamó Ana. Quiere que le mandes el contrato.", ["Ana called. She wants you to send her the contract.", "Ana called. She wants you to send the contract to her."],
        "«Quiere que» + subjunctive = \"wants you to\" + verb. Never *wants that you send."),
      tr("Te pidió que le devolvieras la llamada.", ["{He|She} asked you to call {him|her} back.", "{He|She} asked you to return {his|her} call."],
        "Requests: \"asked you to\" + verb. Not *He said you call him."),
      mc("Which message is correct?", [
        "Carlos called. He asked you to call him back.",
        "Carlos called. He said you call him back.",
        "Carlos called. He said me to call him back.",
        "Carlos called. He asked you that you call him back.",
      ], "Passing on a request: \"asked you to\" + base verb."),
      dc("Lucia called. She said the meeting had been moved to Monday.",
        "Reported speech + passive: \"had been moved\" (past perfect passive)."),
      mc("Which sentence is correct?", [
        "We discussed the budget for an hour.",
        "We discussed about the budget for an hour.",
        "We discussed on the budget for an hour.",
        "We discussed of the budget for an hour.",
      ], "\"Discuss\" takes a direct object, with no preposition. *discuss about is a very common mistake."),
      tr("Mis vecinos discuten todas las noches.", "My {neighbors|neighbours} argue every night.",
        "«Discutir» (fighting with words) = \"argue\". \"Discuss\" is calm and needs an object."),
      fb("Can you explain this word ___ me?", "to", "¿[Me] explicas esta palabra?",
        "\"Explain something TO someone\". *Can you explain me this word? is the typical Spanish-speaker error."),
      tr("Se quejó con el gerente por el ruido.", "{He|She} complained to the manager about the noise.",
        "\"Complain to\" + person + \"about\" + thing."),
      tr("No me lo comentó.", "{He|She} didn't mention it to me.",
        "\"Mention\" + thing + \"to\" + person. Not *He didn't mention me it."),
      mc("Complete: \"Don't shout ___ me! I'm not deaf.\"", ["at", "to", "for", "on"],
        "\"Shout at\" someone = angry («gritarle a alguien»). \"Shout to\" is just to be heard from far away."),
      mt("Match each verb with its meaning.", [
        ["chat", "charlar"],
        ["gossip", "chismear"],
        ["argue", "discutir (pelear)"],
        ["discuss", "hablar de, debatir"],
        ["whisper", "susurrar"],
      ], "«Discutir» has two translations: \"argue\" (angry) or \"discuss\" (calm)."),
      sp("Apparently, they had a big argument about money.",
        "\"An argument\" = «una discusión», not «un argumento».",
        "Stress \"apparently\" on the second syllable: a-PAR-ent-ly."),
      sp("Diego called. He said he'd be late tomorrow.",
        "Passing on a message: who called, then what he said. On the same day, \"tomorrow\" stays; \"he'll be late\" is also fine.",
        undefined, "Pass this voicemail on to Emma in English: «Hi Emma, it's Diego. I'll be late tomorrow.»"),
      tr("Me dijo que me lo explicaría al día siguiente.", "{He|She} told me {|that }{he|she} would explain it to me the {next|following} day.",
        "Trap mix: \"told me\", \"would\", \"explain it to me\" (not *explain me it) and \"the next day\"."),
      tr("Dijeron que habían discutido el problema con el director.", "They said {|that }they had discussed the problem with the {director|manager}.",
        "Trap mix: past perfect \"had discussed\" and no \"about\" after \"discuss\"."),
      mc("Which sentence is correct?", [
        "He told me he had argued with his girlfriend.",
        "He said me he had argued with his girlfriend.",
        "He told me he had discussed with his girlfriend.",
        "He told he had argued with his girlfriend.",
      ], "\"Told me\" + \"argued with\" (fight). \"Discuss\" needs an object, \"said\" never takes a person, and \"told\" always does."),
      dc("According to my brother, the new manager is very easy to talk to.",
        "\"According to\" + source. \"Easy to talk to\" keeps its preposition at the end."),
      lc("Tom says hi, and he's sorry he couldn't come.", ["Tom te manda saludos y siente no haber podido venir.", "Tom dijo hola y luego se fue.", "Tom dice que no quiere venir.", "Tom pidió perdón porque llegó tarde."],
        "\"Says hi\" = «te manda saludos». With \"says\" (present) we keep \"he's sorry\"."),
    ],
  ),
];
