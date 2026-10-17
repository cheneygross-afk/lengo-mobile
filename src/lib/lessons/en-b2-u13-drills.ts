// Synced from cheneygross-afk/lengo:src/lib/lessons/en-b2-u13-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise, Lesson } from "./types";

// Required drill lessons for EN-B2 unit u13 (questions): a short recap, then graded practice.

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
  slug: `en-b2-questions-unit-drill-${n}`,
  level: "EN-B2",
  number: n,
  title: `Drill: ${title}`,
  summary,
  duration: `${Math.round((exercises.reduce((s, e) => s + SECONDS[e.type], 0) + 40) / 60)} min`,
  sections: [{ heading, body, examples: examples.map(([es, en]) => ({ es, en })) }],
  exercises,
});

export const EN_B2_U13_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. Indirect questions (Part 1)
  // ---------------------------------------------------------------------
  lesson(
    1,
    "Could You Tell Me Where It Is?",
    "You will be able to ask polite indirect questions with Could you tell me..., Do you know... and I was wondering if..., using statement word order and no do, does or did.",
    "Recap: opening + statement order",
    [
      "After an opening like \"Could you tell me\", \"Do you know\" or \"Do you happen to know\", the rest is a statement: question word + subject + verb. \"Where is the gym?\" becomes \"Do you know where the gym is?\".",
      "\"Do\", \"does\" and \"did\" disappear, so the verb gets its -s or its past form back: \"What time does it close?\" becomes \"Do you know what time it closes?\". Other auxiliaries and modals stay, after the subject: \"when it will be ready\".",
      "Yes/no questions take \"if\" or \"whether\" («si»), never \"that\". Statement openings like \"I was wondering if...\" and \"I wonder...\" end with a period.",
    ],
    [
      ["Could you tell me where the gym is?", "¿Me podría decir dónde está el gimnasio?"],
      ["Do you know what time the pharmacy closes?", "¿Sabes a qué hora cierra la farmacia?"],
      ["Do you happen to know if Laura got the job?", "¿Sabes por casualidad si Laura consiguió el trabajo?"],
      ["I was wondering if you could lend me your charger.", "Me preguntaba si podrías prestarme tu cargador."],
    ],
    [
      fb("Could you tell me where the elevator ___?", "is", "¿Me podría decir dónde [está] el ascensor?",
        "After \"Could you tell me where\", the subject (\"the elevator\") comes first and the verb (\"is\") goes at the end. Spanish keeps «está» before the subject, but English moves it."),
      mc("Which sentence is correct?", [
        "Do you know where the post office is?",
        "Do you know where is the post office?",
        "Do you know where does the post office is?",
        "Do you know where the post office it is?",
      ], "Opening + \"where\" + subject + verb. *where is the post office keeps question order, and there's no extra \"does\" or \"it\"."),
      tr("¿Sabes dónde está mi celular?", "Do you know where my {phone|cell phone|cellphone} is?",
        "\"Do you know\" already asks the question, so the rest is a statement: \"where my phone is\", not *where is my phone."),
      tr("¿Me puede decir cuánto cuesta este abrigo?", "{Can|Could} you tell me how much this coat costs?",
        "\"How much does this coat cost?\" loses \"does\" in an indirect question, and \"cost\" takes its -s back: \"how much this coat costs\"."),
      fb("Do you know what time the bank ___ on Saturdays?", "opens", "¿Sabes a qué hora [abre] el banco los sábados?",
        "\"What time does the bank open?\" becomes \"what time the bank opens\": \"does\" disappears and its -s moves to the verb."),
      tr("¿Sabes dónde trabaja Martin?", "Do you know where Martin works?",
        "Subject before verb, and the third-person -s comes back: \"where Martin works\". *where does Martin work is the direct-question order."),
      fb("Can you tell me when the package ___?", "arrived", "¿Me puede decir cuándo [llegó] el paquete?",
        "\"When did the package arrive?\" loses \"did\", so the main verb goes into the past: \"when the package arrived\"."),
      mc("Make it indirect: \"When did the meeting start?\"", [
        "Do you know when the meeting started?",
        "Do you know when did the meeting start?",
        "Do you know when the meeting did start?",
        "Do you know when started the meeting?",
      ], "Without \"did\", the past goes on the main verb: \"started\". Subject (\"the meeting\") first, then the verb."),
      wo("Could you tell me what time the train leaves?", "¿Me podría decir a qué hora sale el tren?",
        "Opening + \"what time\" + subject + verb with -s: \"the train leaves\"."),
      tr("¿Sabe cuándo estará listo mi carro?", "Do you know when my car will be ready?",
        "Modals like \"will\" stay in an indirect question, but after the subject: \"when my car will be ready\", not *when will my car be ready."),
      fb("Do you know how long they ___ in this neighborhood?", ["have lived", "have been living"], "¿Sabes cuánto tiempo [llevan viviendo] en este barrio?",
        "«Llevar» + time is the present perfect in English. In the indirect question \"have\" follows the subject: \"how long they have lived\"."),
      dc("Do you happen to know where the nearest ATM is?",
        "\"Do you happen to know\" is a soft opening. The verb \"is\" comes last, after the whole subject \"the nearest ATM\"."),
      fb("Do you know ___ the museum is open on Mondays?", ["if", "whether"], "¿Sabes [si] el museo abre los lunes?",
        "A yes/no question (\"Is the museum open?\") needs \"if\" or \"whether\" to become indirect. This is the «si» of Spanish."),
      mc("Which sentence means «¿Sabes si la tienda está cerrada?»", [
        "Do you know if the store is closed?",
        "Do you know that the store is closed?",
        "Do you know is the store closed?",
        "Do you know if is the store closed?",
      ], "«Si» is \"if\" (or \"whether\"). \"Do you know that the store is closed?\" means «¿Sabes que la tienda está cerrada?», a different question."),
      tr("¿Me podría decir si hay wifi en el tren?", "{Could|Can} you tell me {if|whether} {there is|there's} {Wi-Fi|wifi|WiFi} on the train?",
        "\"Is there Wi-Fi?\" becomes \"if there is Wi-Fi\": \"there\" goes back before the verb, as in a statement."),
      tr("¿Sabes si Pablo llamó?", "Do you know {if|whether} Pablo called?",
        "\"Did Pablo call?\" becomes \"if Pablo called\": add \"if\", drop \"did\" and put \"call\" in the past."),
      lc("Would you happen to know if the library has free Wi-Fi?", [
        "¿Sabría usted si la biblioteca tiene wifi gratis?",
        "¿Sabía usted que la biblioteca tiene wifi gratis?",
        "¿Por qué la biblioteca tiene wifi gratis?",
        "¿Desde cuándo tiene wifi gratis la biblioteca?",
      ], "\"Would you happen to know if...\" is a very polite «¿Sabría usted si...?». \"If\" is «si», not «que»."),
      fb("I was wondering ___ you could help me with my resume.", ["if", "whether"], "Me preguntaba [si] podrías ayudarme con mi currículum.",
        "\"I was wondering if...\" is one of the softest ways to ask for a favor. The past tense is for politeness; it refers to now."),
      mc("Which sentence is written correctly?", [
        "I was wondering if you had time to talk later.",
        "I was wondering if you had time to talk later?",
        "I was wondering if had you time to talk later.",
        "I was wondering did you have time to talk later?",
      ], "\"I was wondering\" is a statement, so it ends with a period. After \"if\" comes statement order: \"you had\"."),
      tr("Me preguntaba si podrías prestarme tu laptop.", "I was wondering {if|whether} you could lend me your {laptop|computer}.",
        "\"I was wondering if\" + \"you could\" (subject before the modal). No question mark: the opening is a statement."),
      tr("Me pregunto por qué no contestó Sofia.", "I wonder why Sofia didn't {answer|reply|respond}.",
        "\"Why didn't Sofia answer?\" becomes \"why Sofia didn't answer\". In a negative, \"didn't\" stays because it carries the \"not\", but it goes after the subject."),
      wo("Do you know whether the flight is on time?", "¿Sabes si el vuelo va a tiempo?",
        "\"Whether\" works like \"if\" in yes/no indirect questions; then subject + verb: \"the flight is\"."),
      wo("Do you happen to know who that woman is?", "¿Sabes por casualidad quién es esa mujer?",
        "Even with \"who\", the verb goes after the subject in an indirect question: \"who that woman is\"."),
      sp("Do you know what time the last bus leaves?", "No \"does\" after the opening, so \"leave\" takes -s: \"the last bus leaves\".",
        "Let your voice rise a little at the end; it's a real question.", "Say it in English: ¿Sabes a qué hora sale el último autobús?"),
      dc("Can you tell me how long the flight takes?",
        "\"How long does the flight take?\" becomes \"how long the flight takes\" after the opening."),
      tr("¿Sabes cuánto gana un enfermero en Canadá?", "Do you know how much a nurse {earns|makes} in Canada?",
        "No \"does\" in the indirect question, so the verb takes -s: \"a nurse earns\"."),
      fb("Do you know where the closest subway station to the office ___?", "is", "¿Sabes dónde [está] la estación de metro más cercana a la oficina?",
        "With a long subject, keep it together and put the verb at the very end: \"where the closest subway station to the office is\"."),
      mc("Which sentence is correct?", [
        "Can you tell me what your email address is?",
        "Can you tell me what is your email address?",
        "Can you tell me which is your email address?",
        "Can you tell me what your email address it is?",
      ], "«¿Cuál es tu correo?» uses \"what\" in English, and in an indirect question the verb goes last: \"what your email address is\"."),
      lc("Do you know if Ana passed her driving test?", [
        "¿Sabes si Ana aprobó el examen de manejo?",
        "¿Sabías que Ana aprobó el examen de manejo?",
        "¿Ana aprobó el examen de manejo?",
        "¿Sabes cuándo es el examen de manejo de Ana?",
      ], "\"Do you know if\" = «¿Sabes si...?». \"Passed\" is past because \"did\" has disappeared."),
      mt("Match each direct question with its indirect version.", [
        ["Where does he live?", "Do you know where he lives?"],
        ["Did he call?", "Do you know if he called?"],
        ["When will it start?", "Do you know when it will start?"],
        ["Is it far?", "Do you know if it's far?"],
        ["Who is she?", "Do you know who she is?"],
      ], "In every indirect question the subject comes before the verb. \"Does\" and \"did\" disappear, \"will\" stays after the subject, and yes/no questions add \"if\"."),
      tr("¿Sabes qué significa esta palabra?", "Do you know what this word means?",
        "The direct question is \"What does this word mean?\". In the indirect version \"does\" goes and \"mean\" takes -s: \"what this word means\". *What means this word is wrong in both."),
      tr("¿Sabes por casualidad a qué hora cierra el supermercado los domingos?", "Do you happen to know what time the {supermarket|grocery store} closes on Sundays?",
        "«Por casualidad» fits \"Do you happen to know\". Then statement order: \"the supermarket closes\", with -s."),
      tr("¿Me puede decir por qué no llegó mi pedido?", "{Can|Could} you tell me why my order {didn't arrive|hasn't arrived|never arrived}?",
        "The negative \"didn't\" stays, but after the subject: \"why my order didn't arrive\". *why didn't arrive my order keeps the Spanish order."),
      mc("You want to ask a stranger «¿Dónde está la parada de taxis?» politely. Which is best?", [
        "Excuse me, could you tell me where the taxi stand is?",
        "Excuse me, could you tell me where is the taxi stand?",
        "Excuse me, do you know that the taxi stand is here?",
        "Excuse me, where the taxi stand is?",
      ], "A polite opening + statement order. Without an opening, a question needs normal question order (\"Where is the taxi stand?\")."),
      sp("I was wondering whether you had a table for four tonight.", "\"I was wondering whether\" + statement order: \"you had\". It's a statement, so your voice falls at the end.",
        "Let your voice fall at the end: it isn't a real question.", "Say it in English (on the phone to a restaurant): Quería saber si tenían una mesa para cuatro esta noche."),
      dc("I'm not sure whether or not the price includes taxes.",
        "Right before \"or not\", use \"whether\", not \"if\". \"Includes\" has -s because there's no \"does\"."),
    ],
  ),
  // ---------------------------------------------------------------------
  // Drill 2. Question forms: subject/object, prepositions, negative questions, tags
  // ---------------------------------------------------------------------
  lesson(
    2,
    "Who Called or Who Did You Call?",
    "You will be able to choose between subject and object questions, put prepositions at the end, use negative questions and add tags after imperatives and let's.",
    "Recap: who did what, and where the preposition goes",
    [
      "When \"who\" or \"what\" is the subject, there's no \"do\", \"does\" or \"did\": \"Who called you?\". When it's the object, you need the auxiliary: \"Who did you call?\". Spanish marks the difference with «a»; English marks it with \"did\".",
      "Prepositions go at the end: \"Who are you talking to?\", \"What's it for?\". Negative questions (\"Didn't you know?\") show surprise, and you answer the facts: \"Yes, I did\" if you knew.",
      "Imperatives take \"will you?\" (or \"would you?\", \"could you?\") and \"Let's\" takes \"shall we?\". Ordinary tags need an auxiliary and a pronoun, never *no?.",
    ],
    [
      ["Who taught you to cook?", "¿Quién te enseñó a cocinar?"],
      ["Who did you invite?", "¿A quién invitaste?"],
      ["What are you laughing at?", "¿De qué te ríes?"],
      ["Grab me a coffee, will you?", "Tráeme un café, ¿quieres?"],
    ],
    [
      fb("Who ___ the window? It's freezing in here.", "opened", "¿Quién [abrió] la ventana? Hace un frío horrible aquí.",
        "\"Who\" is the subject (someone opened it), so there's no \"did\": the verb is in the past, as in a statement."),
      fb("Who ___ you meet at the conference?", "did", "¿A quién [conociste] en el congreso?",
        "Here \"who\" is the object (you met someone), so you need \"did\" + subject + base form: \"Who did you meet?\"."),
      mc("Which question means «¿Quién invitó a Martin?»", [
        "Who invited Martin?",
        "Who did Martin invite?",
        "Who did invite Martin?",
        "Whom invited Martin?",
      ], "The answer goes at the start (\"Sofia invited Martin\"), so \"who\" is the subject: no \"did\". \"Who did Martin invite?\" asks about the guest."),
      tr("¿Quién te enseñó a manejar?", "Who taught you {to drive|how to drive}?",
        "\"Who\" is the subject (someone taught you), so the verb stays in the past with no \"did\". *Who did teach you is wrong."),
      tr("¿A quién le pediste ayuda?", ["Who did you ask for help?", "Whom did you ask for help?"],
        "\"Who\" is the object (you asked someone), so \"did\" + subject + base form. Spanish marks it with «a»; English uses \"did\"."),
      tr("¿Cuántos estudiantes aprobaron el examen?", "How many students passed the {exam|test}?",
        "\"How many students\" is the subject, so no \"did\": *How many students did pass is only possible to contradict someone."),
      fb("Which bus ___ to the airport?", "goes", "¿Qué autobús [va] al aeropuerto?",
        "\"Which bus\" is the subject, so the verb has the same form as in a statement: \"goes\", with no \"does\"."),
      mc("Which sentence is correct?", [
        "Whose phone is ringing?",
        "Whose phone does ring?",
        "Whose phone it is ringing?",
        "Whose is ringing phone?",
      ], "\"Whose phone\" is the subject, so the question keeps statement order: \"Whose phone is ringing?\"."),
      wo("Who did you have lunch with?", "¿Con quién almorzaste?",
        "Object question (\"did you\") with the preposition at the end. *With who did you have lunch sounds like Spanish."),
      tr("¿De qué tienes miedo?", "What are you {afraid|scared} of?",
        "\"Afraid of\": the preposition goes at the end of the question, not before \"what\"."),
      tr("¿Con quién vas a ir al concierto?", ["Who are you going to the concert with?", "Who are you going to go to the concert with?"],
        "«Con quién» puts \"with\" at the end in English: \"Who are you going with?\". *With who are you going sounds wrong."),
      fb("What is this cable ___?", "for", "¿[Para qué] sirve este cable?",
        "«¿Para qué sirve?» is \"What is it for?\", with \"for\" at the end."),
      mc("Choose the most natural question for «¿De qué trata el libro?»", [
        "What's the book about?",
        "About what is the book?",
        "Of what is the book?",
        "What is about the book?",
      ], "\"Be about\" = «tratar de». The preposition goes at the end: \"What's the book about?\"."),
      wo("What do you need so much money for?", "¿Para qué necesitas tanto dinero?",
        "«¿Para qué...?» becomes \"What... for?\": object question with \"do\", and \"for\" at the end."),
      dc("Who were you talking to on the phone?",
        "\"Talk to\" keeps its preposition at the end: \"Who were you talking to?\"."),
      tr("¿Qué significa este mensaje de error?", "What does this error message mean?",
        "\"Mean\" is an ordinary verb, so a direct question needs \"does\": \"What does it mean?\". *What means this message is a classic error."),
      tr("¿Por qué no puedo abrir el archivo?", "Why can't I open the file?",
        "In a direct question the modal goes before the subject: \"can't I\". *Why I can't open is the indirect-question order, wrong here."),
      mc("Which question is correct?", [
        "Can you send me the invoice again?",
        "Do you can send me the invoice again?",
        "Can send you me the invoice again?",
        "Could you to send me the invoice again?",
      ], "Modals invert on their own and never take \"do\": \"Can you...?\". No \"to\" after a modal."),
      fb("___ you hear the alarm? It was so loud!", "Didn't", "¿[No] oíste la alarma? ¡Sonó muy fuerte!",
        "A negative question shows surprise: you expected the person to hear it. \"Didn't\" + subject + base form."),
      lc("Isn't this view amazing?", [
        "¡Qué vista tan increíble!, ¿no?",
        "Esta vista no es increíble.",
        "¿No te parece fea esta vista?",
        "¿No hay vista desde aquí?",
      ], "\"Isn't it...?\" is really an exclamation that invites you to agree, like «¡Qué...!, ¿no?»."),
      mc("Your friend asks \"Aren't you cold?\" You ARE cold. What do you say?", [
        "Yes, I am.",
        "No, I am.",
        "No, I'm not.",
        "Yes, I'm not.",
      ], "In English \"yes\" and \"no\" refer to the facts, not to the form of the question. You are cold, so \"Yes, I am\"."),
      tr("¿No has terminado todavía?", ["Haven't you finished yet?", "Have you not finished yet?"],
        "A negative question shows surprise: you expected the person to be done. \"Yet\" goes at the end."),
      fb("Turn the music down, ___?", ["will you", "would you", "could you", "can you"], "Baja la música, [¿quieres?]",
        "After an imperative, the tag \"will you?\" turns an order into a request; \"would you?\" and \"could you?\" are more polite."),
      fb("Let's order a pizza, ___?", "shall we", "Pidamos una pizza, [¿sí?]",
        "After \"Let's\", the tag is \"shall we?\". Many Americans just say \"OK?\"."),
      tr("Salgamos temprano mañana, ¿sí?", "Let's leave early tomorrow, {shall we|OK|okay}?",
        "\"Let's\" + base form, and the tag \"shall we?\" (or a casual \"OK?\")."),
      tr("Recibiste mi mensaje, ¿no?", "You {got|received} my message, {didn't you|right}?",
        "A tag needs an auxiliary and a pronoun with the opposite polarity: \"didn't you?\". In casual American English \"right?\" also works, but never *no?."),
      fb("There's a pharmacy near the hotel, ___?", "isn't there", "Hay una farmacia cerca del hotel, [¿no?]",
        "\"There is\" takes \"isn't there?\" as a tag: same auxiliary, opposite polarity, and \"there\" as the pronoun."),
      wo("What are you looking for?", "¿Qué estás buscando?",
        "«Buscar» has no preposition in Spanish, but \"look for\" does, and \"for\" goes at the end of the question."),
      sp("Who did you give the keys to?", "Object question (\"did you\") with \"to\" at the end, like \"give something to someone\".",
        "Stress \"keys\" and let your voice fall on \"to\".", "Say it in English: ¿A quién le diste las llaves?"),
      sp("Didn't you see the sign?", "A negative question shows surprise: you think the person should have seen it.",
        "Stress \"see\" and \"sign\"; \"didn't you\" sounds like \"didncha\".", "Say it in English, surprised: ¿No viste el letrero?"),
      dc("Which hotel did you stay at in Chicago?",
        "\"Stay at a hotel\": the preposition \"at\" goes at the end of the question."),
      dc("Pass me the remote, would you?",
        "\"Would you?\" after an imperative makes it a polite request."),
      lc("Who told you that?", [
        "¿Quién te dijo eso?",
        "¿A quién le dijiste eso?",
        "¿Quién se lo dijo a él?",
        "¿Qué te dijo?",
      ], "No \"did\", so \"who\" is the subject: someone told you. \"Who did you tell?\" would be «¿A quién se lo dijiste?»."),
      tr("¿Quién ganó el partido anoche?", "Who won the {game|match} last night?",
        "\"Who\" is the subject, so \"won\" stays as in a statement. *Who did win the game is the typical Spanish-speaker addition."),
      mc("Which sentence is correct?", [
        "What made you change your mind?",
        "What did make you change your mind?",
        "What did you make change your mind?",
        "What you made change your mind?",
      ], "\"What\" is the subject (something made you change your mind), so there's no \"did\": \"What made you...?\"."),
    ],
  ),
  // ---------------------------------------------------------------------
  // Drill 3. Polite openings, replies and reported questions + whole unit
  // ---------------------------------------------------------------------
  lesson(
    3,
    "Would You Mind...? So Do I, Neither Do I",
    "You will be able to use polite openings like Would you mind..., react with short answers, reply questions and So do I / Neither do I, and report the questions you asked, mixing everything from the unit.",
    "Recap: polite openings, replies and reports",
    [
      "\"Would you mind\" + -ing asks very politely, and you agree with \"Not at all\" or \"No problem\", never *Yes, of course. Statement openings (\"I'd like to know...\", \"I was wondering...\") end with a period; after any opening, use statement order.",
      "Short answers and reply questions repeat the auxiliary: \"Yes, I did\", \"Oh, have you?\". «Yo también» is \"So do I\" (or \"So am I\", \"So have I\"), «yo tampoco» is \"Neither do I\" or \"Me neither\", and «a mí sí / a mí no» is \"I do\" / \"I don't\".",
      "Reported questions follow the indirect rule: \"I asked them how often they cooked\", \"She asked me if I was ready\", with \"ask\" + person and no \"to\".",
    ],
    [
      ["Would you mind turning off your camera?", "¿Le importaría apagar la cámara?"],
      ["I've finished the book. Have you? That was quick!", "Terminé el libro. ¿Ah, sí? ¡Qué rápido!"],
      ["I can't stand horror movies. Neither can I.", "No soporto las películas de terror. Yo tampoco."],
      ["She asked me where I had studied.", "Me preguntó dónde había estudiado."],
    ],
    [
      fb("Would you mind ___ the door for me?", "holding", "¿Le importaría [sostener] la puerta?",
        "\"Would you mind\" is always followed by -ing. *Would you mind to hold is a typical error."),
      mc("Someone asks \"Would you mind waiting here for a minute?\" You're happy to wait. What do you say?", [
        "Not at all.",
        "Yes, of course.",
        "Yes, I would.",
        "Yes, I mind.",
      ], "The question asks if waiting bothers you, so \"yes\" would mean you object. To agree, say \"Not at all\", \"No problem\" or \"No, of course not\"."),
      tr("¿Le importa si cierro la ventana?", ["Do you mind if I close the window?", "Would you mind if I closed the window?"],
        "\"Do you mind if I\" + present, or the more polite \"Would you mind if I\" + past simple. The past is politeness, not past time."),
      tr("Me gustaría saber cuándo empiezan las clases.", "I'd like to know when {the classes|classes} start.",
        "\"I'd like to know\" is a statement: question word + subject + verb, no \"do\", and a period at the end."),
      mc("Which sentence is written correctly?", [
        "I'd like to know where the conference room is.",
        "I'd like to know where is the conference room?",
        "I'd like to know where the conference room is?",
        "I'd like to know where is the conference room.",
      ], "Statement order after the opening, and a period, because \"I'd like to know\" is a statement, not a question."),
      tr("¿Tienes idea de dónde dejé mis lentes?", ["Any idea where I left my glasses?", "Do you have any idea where I left my glasses?"],
        "\"Any idea...?\" is the casual opening. After it, statement order and no \"did\": \"where I left\"."),
      tr("¿Puedo preguntarte cuánto pagaste por el departamento?", "Can I ask {you|} how much you paid for the apartment?",
        "\"Can I ask\" is a question, but what follows is a statement: \"how much you paid\", not *how much did you pay."),
      fb("Do you know if ___ a bank near here?", ["there's", "there is"], "¿Sabes si [hay] un banco cerca de aquí?",
        "\"Is there a bank?\" becomes \"if there's a bank\": \"there\" moves back before the verb."),
      wo("Could you let me know when the results are ready?", "¿Me avisas cuando estén listos los resultados?",
        "\"Could you let me know\" is a polite opening; then \"when\" + subject + verb: \"the results are ready\"."),
      fb("\"I love this song.\" \"So ___ I.\"", "do", "\"Me encanta esta canción.\" \"A mí [también].\"",
        "«A mí también» after a present simple statement is \"So do I\": \"so\" + the auxiliary of the first sentence + subject."),
      mc("\"I didn't enjoy the movie.\" You didn't either. What do you say?", [
        "Neither did I.",
        "Me too.",
        "So did I.",
        "Neither I did.",
      ], "After a negative, «yo tampoco» is \"Neither did I\" (or \"Me neither\"). \"Me too\" after a negative sounds like you DID enjoy it."),
      tr("—He estado en Perú. —Yo también.", ["I've been to Peru. So have I.", "I've been to Peru. Me too."],
        "The first sentence uses \"have\", so «yo también» is \"So have I\". \"Me too\" is fine in casual speech."),
      tr("—No me gusta el café. —A mí sí.", "I don't like coffee. I do.",
        "To disagree, use subject + auxiliary with the opposite polarity: \"I do\". *Me yes and *I yes don't exist."),
      tr("—Nunca he manejado un camión. —Yo sí.", "I've never driven a truck. I have.",
        "\"Never\" makes the first sentence negative, so «yo sí» is \"I have\", with the same auxiliary."),
      mc("Which reply means «yo tampoco»?", [
        "Me neither.",
        "Me too.",
        "Me no.",
        "I neither.",
      ], "\"Me neither\" (or \"Neither do I\") is «yo tampoco». *Me no is a literal translation that doesn't exist."),
      fb("\"I'm moving to Canada.\" \"___ you? That's exciting!\"", "Are", "\"Me mudo a Canadá.\" \"[¿En serio?] ¡Qué emocionante!\"",
        "A reply question uses the same auxiliary and the same polarity as the statement: \"I'm moving\" → \"Are you?\"."),
      fb("\"My brother didn't get the job.\" \"___ he? What a shame.\"", "Didn't", "\"Mi hermano no consiguió el trabajo.\" \"[¿No?] Qué lástima.\"",
        "Reply questions keep the polarity: a negative statement gets a negative reply question, \"Didn't he?\"."),
      lc("I've just bought a house. Have you? Congratulations!", [
        "Acabo de comprar una casa. ¿Ah, sí? ¡Felicidades!",
        "Acabo de comprar una casa. ¿Tú también? ¡Felicidades!",
        "Acabo de comprar una casa. ¿No la has comprado?",
        "Voy a comprar una casa. ¿Cuándo? ¡Felicidades!",
      ], "\"Have you?\" here is a reply question, like «¿Ah, sí?»: it shows interest. It doesn't mean «tú también»."),
      tr("—¿Puedes venir el sábado? —Sí, puedo.", "Can you come on Saturday? Yes, I can.",
        "A short answer repeats the auxiliary from the question: \"Yes, I can\", not a bare \"Yes\" or *Yes, I come."),
      fb("I'm on the guest list, ___?", "aren't I", "Estoy en la lista de invitados, [¿no?]",
        "\"I am\" takes the special tag \"aren't I?\". *amn't I doesn't exist."),
      fb("You haven't paid yet, ___?", "have you", "Todavía no has pagado, [¿verdad?]",
        "A negative statement takes a positive tag with the same auxiliary: \"haven't\" → \"have you?\"."),
      tr("Nadie se quejó, ¿verdad?", "Nobody complained, did they?",
        "\"Nobody\" makes the sentence negative, so the tag is positive, and it uses \"they\": \"did they?\"."),
      tr("Les pregunté con qué frecuencia hacían ejercicio.", "I asked them how often they {exercised|worked out}.",
        "A reported question has statement order and no \"did\": \"how often they exercised\". \"Ask\" takes the person directly: \"asked them\", never *asked to them."),
      fb("She asked me whether I ___ ever been to Mexico.", "had", "Me preguntó si alguna vez [había] estado en México.",
        "In a past report, \"Have you ever been...?\" moves back to \"whether I had ever been\", with statement order."),
      mc("Report this question: \"Do you work from home?\"", [
        "I asked her if she worked from home.",
        "I asked her did she work from home.",
        "I asked to her if she worked from home.",
        "I asked her if did she work from home.",
      ], "Yes/no question → \"if\" + statement order, no \"did\", and \"ask\" + person with no \"to\"."),
      tr("La mayoría dijo que leía las noticias en el celular.", "{Most people|Most of them} said {that|} they read the news on their {phones|cell phones}.",
        "Report the answers with \"said (that)\" + a clause. \"Read\" is the past here (it sounds like \"red\")."),
      wo("She asked me how long I had worked there.", "Me preguntó cuánto tiempo había trabajado allí.",
        "Reported question: \"how long\" + subject + verb, with the tense moved back to \"had worked\"."),
      dc("Half of the people I asked said they had never used the app.",
        "A typical survey report: \"Half of the people I asked said (that)...\" + the past perfect for an earlier experience."),
      dc("Didn't you know? The meeting was moved to Thursday.",
        "\"Didn't you know?\" is a negative question that shows surprise, like «¿No lo sabías?»."),
      sp("Would you mind sending me the details again?", "\"Would you mind\" + -ing: \"sending\". It's very polite.",
        "Link \"mind\" and \"sending\": \"mine-sending\".", "Say it in English: ¿Te importaría enviarme los detalles otra vez?"),
      sp("I don't. I find it boring.", "To disagree with \"I love golf\", use the auxiliary with the opposite polarity: \"I don't\".",
        "Stress \"I\" and \"don't\" to make the contrast clear.", "Your friend says \"I love golf.\" Say it in English: A mí no. Me parece aburrido."),
      lc("I can't swim. I can't either.", [
        "No sé nadar. Yo tampoco.",
        "No sé nadar. Yo sí.",
        "No sé nadar. Yo también.",
        "No sé nadar. ¿De verdad?",
      ], "\"I can't either\" is the American way to say «yo tampoco», like \"Neither can I\"."),
      mt("Match each statement with the reply that means «yo también» or «yo tampoco».", [
        ["I'm hungry.", "So am I."],
        ["I didn't sleep well.", "Neither did I."],
        ["I've seen it twice.", "So have I."],
        ["I can't drive.", "Neither can I."],
        ["I love jazz.", "So do I."],
      ], "The auxiliary in the reply matches the first sentence: \"am\" → \"So am I\", \"didn't\" → \"Neither did I\", \"have\" → \"So have I\", \"can't\" → \"Neither can I\", present simple → \"So do I\"."),
      tr("¿Sabes con quién está saliendo Lucia?", "Do you know who Lucia is {dating|going out with|seeing}?",
        "Two rules at once: statement order after \"Do you know\" (\"Lucia is\"), and with \"go out with\" the preposition stays at the end."),
      mc("Which sentence is correct?", [
        "Do you know who called me?",
        "Do you know who did call me?",
        "Do you know who me called?",
        "Do you know who called me did?",
      ], "\"Who called me?\" is a subject question, which already has statement order, so it doesn't change after \"Do you know\"."),
    ],
  ),
];
