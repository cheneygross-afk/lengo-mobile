// Synced from cheneygross-afk/lengo:src/lib/lessons/en-b2-u12-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise, Lesson } from "./types";

// Required drill lessons for EN-B2 unit u12 (reporting verbs and reported speech): a short recap, then graded practice.

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
  slug: `en-b2-reporting-unit-drill-${n}`,
  level: "EN-B2",
  number: n,
  title: `Drill: ${title}`,
  summary,
  duration: `${Math.round((exercises.reduce((s, e) => s + SECONDS[e.type], 0) + 40) / 60)} min`,
  sections: [{ heading, body, examples: examples.map(([es, en]) => ({ es, en })) }],
  exercises,
});

export const EN_B2_U12_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. Reporting verb patterns
  // (Reporting Verbs, Parts 1 and 2)
  // ---------------------------------------------------------------------
  lesson(
    1,
    "Agree to, Advise Me to, Deny Doing",
    "You will be able to report intentions, advice, admissions, suggestions, apologies and accusations with the right pattern for each verb: to + verb, person + to, -ing, preposition + -ing or a that-clause.",
    "Recap: learn each verb with its pattern",
    [
      "Verb + to: agree, offer, refuse, promise, threaten (no person before \"to\"). Verb + person + to: advise, persuade, remind, warn, invite, encourage. Verb + -ing: deny, admit, suggest, recommend; suggest and recommend never take person + to: \"suggested that I go\" or \"suggested going\".",
      "Preposition + -ing: apologize for, insist on, object to, accuse someone of, blame someone for, congratulate someone on. Explain, complain, claim and point out take a that-clause, and the person needs \"to\": \"She explained to me that...\".",
    ],
    [
      ["He offered to fix my bike.", "Se ofreció a arreglarme la bici."],
      ["She reminded us to lock the door.", "Nos recordó que cerráramos la puerta con llave."],
      ["He admitted forgetting her birthday.", "Admitió haberse olvidado de su cumpleaños."],
      ["They accused her of lying.", "La acusaron de mentir."],
    ],
    [
      fb("My neighbor ___ water my plants while I'm away.", "offered to", "Mi vecino [se ofreció a] regarme las plantas mientras estoy fuera.",
        "\"Offer\" + \"to\" + base verb, with no person in between. Spanish «ofrecerse a» has a different preposition, but English always uses \"to\"."),
      fb("The bank ___ give me a loan.", "refused to", "El banco [se negó a] darme un préstamo.",
        "\"Refuse to\" + base verb. *refused giving and *refused me to give are both wrong."),
      mc("Which sentence is correct?", [
        "He threatened to call my parents.",
        "He threatened with calling my parents.",
        "He threatened me to call my parents.",
        "He threatened calling my parents.",
      ], "\"Threaten\" + \"to\" + base verb. *threatened with copies «amenazar con», and there's never a person before \"to\"."),
      tr("Mi jefe accedió a darme el viernes libre.", "My boss agreed to give me {Friday off|the Friday off}.",
        "«Acceder a» = \"agree to\" + base verb. The person (me) goes after the second verb: \"agreed to give me\", never *agreed me to give."),
      tr("Prometió no llegar tarde otra vez.", "{He|She} promised not to {be|arrive|come} late again.",
        "Negative: \"not\" goes before \"to\": \"promised not to be late\". \"Didn't promise to\" would mean there was no promise."),
      mc("«Me prometió que me llamaría.» Which translation is correct?", [
        "He promised me that he would call me.",
        "He promised me to call me.",
        "He promised to me that he will call.",
        "He promised that me he would call.",
      ], "The promise trap: \"promise\" doesn't take person + to. Either \"He promised to call me\" or, with the person, a that-clause: \"He promised me that he would call\"."),
      fb("The doctor ___ less coffee.", ["advised me to drink", "told me to drink"], "El médico [me aconsejó que tomara] menos café.",
        "\"Advise\" + person + \"to\" + base verb. English doesn't use a that-clause with the subjunctive here: *advised me that I drink."),
      dc("My sister reminded me to buy bread on the way home.",
        "\"Remind\" + person + \"to\": the other person does the action («me recordó que comprara»)."),
      tr("El guía nos advirtió que no tocáramos los animales.", "The guide warned us not to touch the animals.",
        "\"Warn\" + person + \"not to\": the usual way to report a warning."),
      wo("Martin persuaded his parents to buy him a dog.", "Martin convenció a sus papás de que le compraran un perro.",
        "\"Persuade\" + person + \"to\" + base verb. \"Persuaded\" means he succeeded: they bought the dog."),
      wo("They invited us to stay for the weekend.", "Nos invitaron a quedarnos el fin de semana.",
        "\"Invite\" + person + \"to\" + base verb."),
      mc("Which sentence is correct?", [
        "She advised me to look for another job.",
        "She advised me that I look for another job.",
        "She advised me looking for another job.",
        "She advised to me to look for another job.",
      ], "\"Advise\" + person + to-infinitive. The others copy Spanish «que» + subjunctive or add a preposition."),
      lc("She tried to persuade me to stay.", [
        "Intentó convencerme de que me quedara.",
        "Me convenció de que me quedara.",
        "Me obligó a quedarme.",
        "Prometió quedarse.",
      ], "\"Tried to persuade\" = she tried, but it doesn't say she succeeded. \"She persuaded me to stay\" would mean I stayed."),
      fb("He denied ___ the window.", ["breaking", "having broken"], "Negó [haber roto] la ventana.",
        "\"Deny\" + -ing. Spanish uses the infinitive («negó haber roto»), which leads to *denied to break. \"Having broken\" is also correct."),
      fb("She admitted ___ the email to the wrong person.", ["sending", "having sent"], "Admitió [haber enviado] el correo a la persona equivocada.",
        "\"Admit\" + -ing (or \"admit to\" + -ing). Never *admitted to send."),
      mc("Which sentence is correct?", [
        "The suspect denied stealing the car.",
        "The suspect denied to steal the car.",
        "The suspect denied to have stolen the car.",
        "The suspect denied steal the car.",
      ], "\"Deny\" is followed by -ing, never by \"to\"."),
      tr("Recomiendo llevar efectivo; no aceptan tarjeta.", "I recommend {bringing|taking|carrying} cash. They don't {accept|take} cards.",
        "\"Recommend\" + -ing for a general recommendation. *I recommend to bring cash is a common calque of the Spanish infinitive."),
      tr("Mi amigo me sugirió que hablara con un abogado.", ["My friend suggested {that |}I {talk|speak} {to|with} a lawyer.", "My friend suggested {that |}I should {talk|speak} {to|with} a lawyer.", "My friend suggested {talking|speaking} {to|with} a lawyer."],
        "\"Suggest (that)\" + subject + base verb, or \"suggest\" + -ing. Never *suggested me to talk."),
      mc("«Sugirió ir en metro.» Which translation is correct?", [
        "She suggested going by subway.",
        "She suggested to go by subway.",
        "She suggested us to go by subway.",
        "She suggested go by subway.",
      ], "When the suggestion includes the speaker, use \"suggest\" + -ing. \"Suggest\" never takes \"to\" + verb, with or without a person."),
      fb("The doctor recommended that she ___ more water.", ["drink", "should drink"], "La médica le recomendó que [tomara] más agua.",
        "After \"recommend that\", American English uses the base form even with \"she\": \"that she drink\", not *drinks. British English prefers \"should drink\"."),
      tr("Se disculpó por no contestar mis llamadas.", "{He|She} apologized for not {answering|returning} my calls.",
        "\"Apologize for\" + -ing; the negative \"not\" goes before the -ing form. *apologized of comes from Spanish «de»."),
      fb("My grandmother insisted ___ the dishes.", ["on doing", "on washing"], "Mi abuela insistió [en lavar] los platos.",
        "\"Insist on\" + -ing. *insisted in is the calque of «insistir en», and *insisted to wash uses the wrong form."),
      tr("Lo acusaron de copiar en el examen.", ["They accused him of cheating {on|in} the {exam|test}.", "He was accused of cheating {on|in} the {exam|test}."],
        "\"Accuse someone of\" + -ing. *accused him to cheat and *accused him for cheating are typical errors."),
      tr("Me echó la culpa de haber perdido el boleto.", "{She|He} blamed me for {losing|having lost} the ticket.",
        "\"Blame someone for\" + -ing. «Echar la culpa» is just \"blame\"."),
      mt("Match each verb with the phrase that completes it.", [
        ["She apologized", "for being late."],
        ["He insisted", "on paying."],
        ["They accused him", "of lying."],
        ["We objected", "to working late."],
      ], "Fixed pairs: apologize for, insist on, accuse of, object to. After every preposition, an -ing form. (In \"object to\", \"to\" is a preposition.)"),
      fb("She explained ___ that the store was closed on Mondays.", "to me", "[Me] explicó que la tienda cerraba los lunes.",
        "\"Explain\" never takes a person directly: \"explained to me that...\". *She explained me that is one of the most noticeable errors."),
      tr("Se quejó de que la comida estaba fría.", "{He|She} complained {that |}the food was cold.",
        "\"Complain that\" + clause. If you add a person, use \"to\": \"complained to the waiter that...\"."),
      dc("Sofia pointed out that the prices had gone up.",
        "\"Point out that\" + clause with backshift: \"had gone up\". In names, no accent in English: Sofia."),
      sp("They agreed to meet us at the station.", "\"Agree to\" + base verb; the person (us) goes after the second verb.",
        "Link \"agreed to\" as /əˈɡriːd tə/.", "Say it in English: Acordaron reunirse con nosotros en la estación."),
      tr("Me sugirió que fuera al médico.", "{He|She} suggested {that |}I {go to|see|should go to|should see} {a|the} doctor.",
        "Trap: *suggested me to go. Use \"suggested (that) I go\" or \"suggested that I should go\"."),
      mc("Which sentence is correct?", [
        "She explained the problem to the manager.",
        "She explained the manager the problem.",
        "She explained me the problem.",
        "She said the manager the problem.",
      ], "\"Explain something to someone\". \"Explain\" and \"say\" never take the person directly; only verbs like \"tell\", \"ask\" and \"show\" do."),
      tr("Negó haber dicho eso.", ["{He|She} denied {saying|having said} that.", "{He|She} denied that {he|she} had said that."],
        "Trap: *denied to say. \"Deny\" + -ing, or \"deny that\" + clause."),
      tr("Me convenció de que me inscribiera en el curso.", "{He|She} {persuaded|convinced} me to {sign up for|enroll in|register for|join|take} the course.",
        "Trap: Spanish «de que» + subjunctive, English person + to-infinitive: \"persuaded me to sign up\"."),
      sp("He insisted on driving me home.", "\"Insist on\" + -ing: \"on driving\", never *insisted to drive.",
        "Stress \"inSISTed\" and \"DRIVing\".", "Say it in English: Insistió en llevarme a casa en carro."),
    ],
  ),

  // ---------------------------------------------------------------------
  // Drill 2. Backshift, reported questions, say/tell/ask/explain, errors
  // (Reported Speech Review, Contrast Clinic: say, tell, ask, explain; Error Hunt)
  // ---------------------------------------------------------------------
  lesson(
    2,
    "Backshift, Questions, Say and Tell",
    "You will be able to backshift tenses and time words, report questions in statement order, keep the tense when it is still true, and choose correctly between say, tell, ask and explain.",
    "Recap: one step back, statement order, the right verb",
    [
      "After a past reporting verb, tenses usually move back (is → was, has done / did → had done, will → would, can → could, must → had to), and time words follow logic: tomorrow → the next day. If it's still true, or the reporting verb is present (\"says\"), the tense can stay.",
      "Reported questions use statement order and \"if/whether\": \"She asked where I lived\", not *where did I live. \"Tell\" takes the person directly; \"say\" and \"explain\" need \"to\" before the person; \"ask someone for\" a thing and \"ask someone to\" do something.",
    ],
    [
      ["He said he was feeling better.", "Dijo que se sentía mejor."],
      ["She asked me if I had finished.", "Me preguntó si había terminado."],
      ["Tell me the truth.", "Dime la verdad."],
      ["He explained the rules to us.", "Nos explicó las reglas."],
    ],
    [
      fb("\"I'm working from home today.\" She said she ___ from home that day.", "was working", "Dijo que [estaba trabajando] desde casa ese día.",
        "Backshift: present continuous → past continuous. \"Today\" becomes \"that day\" when you report it later."),
      fb("\"We've finished the project.\" They said they ___ the project.", "had finished", "Dijeron que [habían terminado] el proyecto.",
        "Present perfect → past perfect: \"had finished\". Spanish does the same («habían terminado»)."),
      fb("\"I'll send it tomorrow.\" She said she ___ it the next day.", "would send", "Dijo que lo [enviaría] al día siguiente.",
        "\"Will\" → \"would\", like Spanish future → conditional. \"Tomorrow\" → \"the next day\"."),
      mc("\"You must wear a mask.\" Which report is correct?", [
        "He told us we had to wear a mask.",
        "He told us we must to wear a mask.",
        "He told us we have had to wear a mask.",
        "He said us we had to wear a mask.",
      ], "\"Must\" usually becomes \"had to\" in a past report. \"Tell\" takes the person directly; \"say\" never does (*said us)."),
      tr("Dijo que podía ayudarme el sábado.", "{He|She} said {that |}{he|she} could help me on Saturday.",
        "\"Can\" → \"could\" in the report, just like Spanish «puede» → «podía»."),
      tr("Me contó que se había mudado allí tres años antes.", "{He|She} told me {that |}{he|she} had moved there three years {earlier|before}.",
        "Past → past perfect \"had moved\", \"here\" → \"there\", \"ago\" → \"earlier\" or \"before\"."),
      mt("Match each word in the original with its usual form in a later report.", [
        ["today", "that day"],
        ["tomorrow", "the next day"],
        ["yesterday", "the day before"],
        ["here", "there"],
      ], "These changes follow logic: they're needed only when the time or place of the report is different from the original."),
      tr("Me preguntó dónde vivía.", "{He|She} asked {me |}where I lived.",
        "Statement order in a reported question: \"where I lived\", not *where did I live or *where lived I."),
      mc("Which sentence is correct?", [
        "She asked me what time the train left.",
        "She asked me what time did the train leave.",
        "She asked me what time the train did leave.",
        "She asked me what time left the train.",
      ], "A reported question isn't a question: no \"did\", subject before verb, and backshift (\"left\")."),
      tr("Me preguntó si tenía hermanos.", "{He|She} asked {me |}{if|whether} I had any {brothers or sisters|siblings}.",
        "Yes/no questions are reported with \"if\" or \"whether\". «Hermanos» in general = \"brothers and sisters\" or \"siblings\"."),
      fb("They wanted to know how much ___.", ["the room cost", "the room was"], "Querían saber cuánto [costaba el cuarto].",
        "After \"wanted to know\", statement order: \"how much the room cost\", not *how much did the room cost."),
      wo("I wondered why she hadn't answered my message.", "Me preguntaba por qué no había contestado mi mensaje.",
        "\"Wonder\" + question word + statement order: \"why she hadn't answered\"."),
      tr("El pronóstico dice que va a nevar el jueves.", "The forecast says {that |}it{'s going to| will} snow on Thursday.",
        "The reporting verb is present (\"says\"), so there's no backshift at all."),
      lc("He said he works at a hospital.", [
        "Dijo que trabaja en un hospital.",
        "Dice que trabajaba en un hospital.",
        "Dijo que va a trabajar en un hospital.",
        "Dijo que trabajó en un hospital.",
      ], "No backshift because it's still true: he still works there. \"He said he worked at a hospital\" would also be correct."),
      dc("She told me the store closes at nine on Sundays.",
        "A fact that's still true can keep the present tense: \"closes\". Notice \"told me\": \"tell\" + person."),
      fb("He told ___ that the trip was canceled.", "us", "[Nos] dijo que el viaje se había cancelado.",
        "\"Tell\" needs the listener right after it: \"told us\". *He told that... is wrong."),
      fb("What did you ___ to her?", "say", "¿Qué le [dijiste]?",
        "\"Say\" + \"to\" + person. With \"tell\" it would be \"What did you tell her?\" (no \"to\")."),
      mc("Which sentence is correct?", [
        "Don't leave without saying goodbye.",
        "Don't leave without telling goodbye.",
        "Don't leave without saying to goodbye.",
        "Don't leave without tell goodbye.",
      ], "Fixed phrase: \"say goodbye\" (like say sorry, say hello, say thank you). After \"without\", the -ing form."),
      tr("¿Puedes notar la diferencia?", "Can you tell the difference?",
        "\"Tell the difference\" = «notar la diferencia». It's a fixed phrase with \"tell\", like \"tell the truth\" and \"tell a joke\"."),
      tr("Deberías pedirle perdón a tu mamá.", "You should {say sorry|apologize} to your {mom|mother}.",
        "«Pedir perdón» = \"say sorry\" (a fixed phrase with \"say\") or \"apologize\". Both need \"to\" before the person."),
      tr("Le pedí ayuda a mi vecino.", "I asked my {neighbor|neighbour} for help.",
        "«Pedir algo a alguien» = \"ask someone for something\". No \"to\" before the person, and \"for\" before the thing."),
      tr("Me pidió que no le dijera nada a su esposo.", ["She asked me not to tell her husband anything.", "She asked me not to say anything to her husband."],
        "A request: \"ask someone not to\" + verb. Note \"tell her husband\" (person directly) vs \"say anything to her husband\"."),
      fb("He asked me ___ my new job.", "about", "Me preguntó [por] mi nuevo trabajo.",
        "«Preguntar por» = \"ask about\". \"Ask for\" would mean «pedir»."),
      mc("Which sentence is correct?", [
        "Could you explain the rules to me?",
        "Could you explain me the rules?",
        "Could you explain to me the rules?",
        "Could you explain me?",
      ], "\"Explain something to someone\": the person needs \"to\" and goes after the thing. *Explain me comes straight from «explícame»."),
      tr("¿Me explicas cómo se usa esta app?", "{Can|Could} you explain to me how {to use this app|this app works|you use this app}?",
        "With a clause, \"to me\" goes right after \"explain\": \"explain to me how...\". The clause has statement order."),
      sp("She told us a story about her first job.", "\"Tell a story\" is a fixed phrase, and \"tell\" takes the person directly: \"told us\".",
        "Link \"told us\" as /toʊldəs/.", "Say it in English: Nos contó una historia de su primer trabajo."),
      tr("Nos dijo que nada iba a cambiar.", ["{He|She} told us {that |}nothing {was going to|would} change.", "{He|She} said {that |}nothing {was going to|would} change."],
        "Trap: *He said us. Use \"told us\" or \"said\" (no person). \"Was going to\" backshifts from \"is going to\"."),
      mc("«Me dijo que lo había visto.» Which translation is correct?", [
        "He told me he had seen it.",
        "He said me he had seen it.",
        "He told that he had seen it.",
        "He told to me he had seen it.",
      ], "\"Told me\": tell + person, no \"to\". \"Say\" can't take the person directly, and \"tell\" can't drop it."),
      tr("Le pregunté a ella dónde estaba la estación.", "I asked her where the station was.",
        "Trap: *I asked to her copies «le pregunté a ella», and *where was the station keeps question order. \"Ask\" takes the person directly."),
      wo("She asked me whether I had locked the car.", "Me preguntó si había cerrado el carro con llave.",
        "\"Whether\" + statement order + past perfect for a past action."),
      tr("Dijo que no sabía qué hacer.", "{He|She} said {that |}{he|she} didn't know what to do.",
        "Present \"don't know\" → past \"didn't know\". \"What to do\" works exactly like Spanish «qué hacer»."),
      dc("They asked us if we were enjoying the trip.",
        "\"Asked us if\" + statement order: \"we were enjoying\"."),
      sp("I asked the receptionist where the elevator was.", "Reported question: statement order (\"the elevator was\"), and \"ask\" + person with no \"to\".",
        "Stress \"RECEPtionist\" and \"ELevator\".", "Say it in English: Le pregunté a la recepcionista dónde estaba el elevador."),
      tr("Ayer me dijo que hoy vendría.", ["{He|She} told me yesterday {that |}{he|she} would come today.", "Yesterday {he|she} told me {that |}{he|she} would come today."],
        "Trap: use logic, not a table. It was said yesterday about today, and today is still today, so \"today\" stays. \"Will\" → \"would\"."),
    ],
  ),

  // ---------------------------------------------------------------------
  // Drill 3. Quotes into reports, conversation, minutes, impersonal reports
  // (Transform, Dialogue Lab, Real Mission, Spiral Review, Mastery Check; whole unit mixed)
  // ---------------------------------------------------------------------
  lesson(
    3,
    "Reports, Gossip and Meeting Minutes",
    "You will be able to turn quotes into reports with the verb that captures the intention, pass on a conversation naturally, write meeting minutes with formal reporting language, and use impersonal reports like \"It was agreed that...\".",
    "Recap: report the intention, then the pattern",
    [
      "Ask what the speaker was doing (promising, offering, warning, admitting, accusing, suggesting) and use that verb with its pattern: \"I'll definitely call\" → \"He promised to call\"; \"It was me\" → \"She admitted breaking it\".",
      "Minutes use precise past reporting verbs (proposed -ing, objected to, agreed to/on, pointed out that), impersonal passives (\"It was agreed that...\") and action points with name + to-infinitive. In conversation, \"was like\" and \"goes\" are fine to understand, but never use them in writing.",
    ],
    [
      ["\"Don't forget the tickets!\" She reminded me to bring the tickets.", "Me recordó que llevara los boletos."],
      ["He wanted to know where I was going.", "Quería saber adónde iba."],
      ["Mark objected to moving the meeting.", "Mark se opuso a cambiar la reunión."],
      ["It was decided that the office would close early.", "Se decidió que la oficina cerraría temprano."],
    ],
    [
      fb("\"I'll definitely be there at eight.\" He ___ there at eight.", "promised to be", "[Prometió estar] allí a las ocho.",
        "A promise: \"promise to\" + base verb. \"Definitely\" disappears because \"promise\" already carries that meaning."),
      fb("\"Shall I drive you home?\" She ___ me home.", ["offered to drive", "offered to take"], "[Se ofreció a llevarme] a casa.",
        "\"Shall I...?\" is an offer: \"offered to\" + base verb. The question form disappears in the report."),
      fb("\"No way, I'm not lending you my car.\" He ___ me his car.", "refused to lend", "[Se negó a prestarme] su carro.",
        "\"No way, I'm not...\" is a refusal: \"refused to\" + base verb."),
      mc("\"If I were you, I'd talk to a lawyer.\" Which report is correct?", [
        "She advised me to talk to a lawyer.",
        "She suggested me to talk to a lawyer.",
        "She advised that I talking to a lawyer.",
        "She promised me to talk to a lawyer.",
      ], "\"If I were you, I'd...\" is advice: \"advise\" + person + to. *Suggested me to is the most famous error at this level."),
      tr("Me recordó que llevara el cargador.", "{He|She} reminded me to {take|bring} the charger.",
        "\"Don't forget the charger!\" becomes a reminder: \"remind\" + person + to.", "Translate into English with a reporting verb."),
      tr("Me suplicó que no le dijera nada a su papá.", ["She begged me not to tell her {dad|father} anything.", "He begged me not to tell his {dad|father} anything.", "She begged me not to say anything to her {dad|father}.", "He begged me not to say anything to his {dad|father}."],
        "\"Please, please don't tell Dad\" is begging: \"beg\" + person + \"not to\"."),
      wo("She encouraged me to apply for the scholarship.", "Me animó a solicitar la beca.",
        "\"Go on, apply!\" is encouragement: \"encourage\" + person + to."),
      fb("\"It was me. I broke the vase.\" She ___ the vase.", ["admitted breaking", "admitted having broken", "admitted to breaking"], "[Admitió haber roto] el jarrón.",
        "An admission: \"admit\" + -ing (or \"admit to\" + -ing). *admitted to break is wrong."),
      mc("\"You took my charger!\" Which report is correct?", [
        "She accused me of taking her charger.",
        "She accused me to take her charger.",
        "She accused me for taking her charger.",
        "She blamed me of taking her charger.",
      ], "An accusation: \"accuse someone of\" + -ing. \"Blame\" goes with \"for\", not \"of\"."),
      tr("Me felicitaron por el ascenso.", "They congratulated me on {my|the} promotion.",
        "«Felicitar por» = \"congratulate on\", not *congratulate for. \"On getting the promotion\" would also work."),
      tr("Sugirió que pidiéramos pizza.", ["{He|She} suggested {ordering|getting} pizza.", "{He|She} suggested {that |}we {order|get|should order} pizza."],
        "\"Why don't we order pizza?\" is a suggestion: \"suggest\" + -ing, or \"suggest (that) we\" + base verb."),
      lc("He insisted on paying for the drinks.", [
        "Insistió en pagar las bebidas.",
        "Se negó a pagar las bebidas.",
        "Prometió pagar las bebidas.",
        "Insistió en que pagáramos las bebidas.",
      ], "\"Insist on\" + -ing: he wanted to pay himself. \"Insisted that we pay\" would mean the opposite."),
      tr("Mi mamá quería saber cuándo volvía a casa.", "My {mom|mother} wanted to know when I {was coming|would come|was going} {back |}home.",
        "\"Wanted to know\" reports a question, with statement order: \"when I was coming home\", not *when was I coming."),
      fb("He was wondering ___ help him with his resume.", ["if we could", "whether we could"], "Se preguntaba [si podíamos] ayudarlo con su currículum.",
        "\"Was wondering if\" is a soft, polite way to report a request or question. Statement order: \"we could\"."),
      tr("Quería pagar, pero no la dejé.", "She wanted to pay, but I {didn't let her|wouldn't let her|refused to let her}.",
        "\"Let\" + person, and if a verb follows, no \"to\": \"I refused to let her pay\"."),
      mc("Your friend said: «Y ella me dijo: —¡No pienso volver!». Which is best for a formal email?", [
        "She said she would never go back.",
        "She was like, I'm never going back.",
        "She goes, I'm never going back.",
        "She said me she would never go back.",
      ], "\"Was like\" and \"goes\" are informal spoken shortcuts: fine to understand, never in writing. And \"say\" can't take the person directly."),
      dc("Mike said he had been offered a job in Lisbon.",
        "Backshift into the past perfect passive: \"had been offered\"."),
      fb("Laura ___ the meeting to Thursday.", ["proposed moving", "suggested moving"], "Laura [propuso pasar] la reunión al jueves.",
        "Minutes summarize: \"I think we should move it to Thursday\" becomes \"Laura proposed moving...\". \"Propose\" + -ing, like \"suggest\"."),
      tr("Mark se opuso a cambiar el presupuesto.", "Mark objected to changing the budget.",
        "\"Object to\" + -ing: \"to\" is a preposition here, so *objected to change is wrong."),
      mc("«Todos se pusieron de acuerdo en una nueva fecha límite.» Which translation is correct?", [
        "Everyone agreed on a new deadline.",
        "Everyone agreed in a new deadline.",
        "Everyone was agreed in a new deadline.",
        "Everyone agreed with a new deadline.",
      ], "\"Agree on\" + a decision about a thing. \"Agree with\" is for a person or an opinion, and *agree in copies «de acuerdo en»."),
      tr("Se acordó que el lanzamiento se retrasaría una semana.", ["It was agreed that the launch would be {delayed|postponed|pushed back} {by |}a week.", "It was agreed to {delay|postpone|push back} the launch {by |}a week."],
        "Impersonal minutes: \"It was agreed that\" + backshifted passive \"would be delayed\". *Was agreed that has no subject."),
      fb("___ that sales had fallen in the south.", ["It was noted", "It was pointed out"], "[Se señaló] que las ventas habían bajado en el sur.",
        "Formal minutes hide who said it: \"It was noted that...\", with a backshifted verb."),
      wo("Ana offered to contact the supplier before Friday.", "Ana se ofreció a contactar al proveedor antes del viernes.",
        "A commitment in the minutes: \"offered to\" + base verb."),
      tr("Tarea: Tom enviará el informe antes del lunes.", "Action: Tom to send the report {by|before} Monday.",
        "Action points use a compact format: name + to-infinitive. It means \"Tom will send...\"."),
      tr("Se recomendó que cada empleado cambiara su contraseña.", "It was recommended that {each|every} employee change {their|his or her} password.",
        "After \"It was recommended that\", the base form: \"change\", not *changes or *changed."),
      tr("Se anunció que la tienda cerraría en diciembre.", "It was announced that the {store|shop} would close in December.",
        "Impersonal report in the past: \"It was announced that\" + \"would\" (backshifted future)."),
      tr("Se cree que la directora renunció ayer.", ["The {director|manager} is believed to have {resigned|quit} yesterday.", "It is believed that the {director|manager} {resigned|quit} yesterday."],
        "Pattern B with an earlier event: \"is believed to have resigned\". Pattern A keeps a normal past: \"resigned\"."),
      mt("Match each quote with its report.", [
        ["\"I'll help you, I promise.\"", "He promised to help me."],
        ["\"I didn't do it!\"", "He denied doing it."],
        ["\"Sorry I'm late.\"", "He apologized for being late."],
        ["\"Don't touch the stove!\"", "He warned me not to touch the stove."],
      ], "Four families: to + verb (promise), -ing (deny), preposition + -ing (apologize for), person + not to (warn)."),
      sp("The police asked where we had been that night.", "Reported question with statement order: \"where we had been\". Backshift past → past perfect.",
        "Stress \"ASKED\", \"WHERE\" and \"NIGHT\".", "Say it in English: La policía preguntó dónde habíamos estado esa noche."),
      tr("El médico le sugirió que hiciera más ejercicio.", ["The doctor suggested {that |}{he|she} {get|do|should get|should do} more exercise.", "The doctor {advised|told} {him|her} to {get|do} more exercise."],
        "Trap: *suggested him to do. Use \"suggested (that) he get\", or switch to \"advised him to\", which does take person + to."),
      mc("«Me explicó por qué había renunciado.» Which translation is correct?", [
        "She explained to me why she had quit.",
        "She explained me why she had quit.",
        "She explained me why had she quit.",
        "She said me why she had quit.",
      ], "\"Explain to me\" + statement order: \"why she had quit\". Two traps in one: *explained me and question order."),
      tr("Me pidieron que no tocara nada.", ["They asked me not to touch anything.", "They told me not to touch anything."],
        "A request: \"ask\" + person + \"not to\". \"Told me not to\" is an order."),
      dc("He apologized for not telling us the truth.",
        "\"Apologize for\" + \"not\" + -ing; \"tell the truth\" is a fixed phrase with \"tell\"."),
      tr("Negó saber nada del accidente, pero después admitió que había estado allí.", ["He denied knowing anything about the accident, but later he admitted {that he had been there|having been there|being there}.", "She denied knowing anything about the accident, but later she admitted {that she had been there|having been there|being there}."],
        "Trap: two -ing / that verbs in one sentence. \"Deny\" + -ing (never *denied to know), \"admit that\" + past perfect, or \"admit having been\"."),
      sp("She refused to let me pay for dinner.", "\"Refuse to\" + \"let\" + person + bare infinitive: no \"to\" before \"pay\".",
        "Stress \"reFUSED\" and \"PAY\".", "Say it in English: No me dejó pagar la cena."),
    ],
  ),
];
