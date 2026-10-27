// Synced from cheneygross-afk/lengo:src/lib/lessons/en-b1-u23-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise, Lesson } from "./types";

// Required drill lessons for EN-B1 unit u23 (indirect and subject questions, question tags, so/neither and short answers): a short recap, then graded practice.

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
const lc = (audio: string, options: string[], explanation: string, question = "What did you hear?"): Exercise => ({ type: "listen-choose", audio, question, options, correctIndex: 0, explanation });
const sp = (text: string, explanation: string, tip?: string, prompt?: string): Exercise => ({ type: "speak", text, ...(prompt ? { prompt } : {}), ...(tip ? { tip } : {}), explanation });
const mt = (instructions: string, pairs: [string, string][], explanation: string): Exercise => ({ type: "matching", instructions, pairs: pairs.map(([left, right]) => ({ left, right })), explanation });

const SECONDS: Record<Exercise["type"], number> = {
  "multiple-choice": 15, "multi-select": 20, "listen-choose": 20, "fill-blank": 20, translate: 30,
  "word-order": 25, matching: 30, dictation: 30, speak: 25, write: 300,
};
const lesson = (
  n: number,
  topic: string,
  title: string,
  summary: string,
  heading: string,
  body: string[],
  examples: [string, string][],
  exercises: Exercise[],
): Lesson => ({
  slug: `en-b1-${topic}-unit-drill-${n}`,
  level: "EN-B1",
  number: n,
  title: `Drill: ${title}`,
  summary,
  duration: `${Math.round((exercises.reduce((s, e) => s + SECONDS[e.type], 0) + 40) / 60)} min`,
  sections: [{ heading, body, examples: examples.map(([es, en]) => ({ es, en })) }],
  exercises,
});
const say = (text: string, spanish: string, tip: string, explanation: string): Exercise => sp(text, explanation, tip, `Say in English: «${spanish}»`);

const trt = (source: string, answers: string | string[], explanation: string): Exercise =>
  tr(source, answers, explanation, "Translate into English, using a question tag.");

export const EN_B1_U23_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. Indirect questions (wh-, if/whether, I wonder) and subject
  // vs object questions
  // ---------------------------------------------------------------------
  lesson(
    1,
    "questions",
    "Indirect & Subject Questions",
    "Ask polite indirect questions with statement word order and if/whether, and choose between Who called? and Who did you call?",
    "Recap: polite questions and who-questions",
    [
      "After an opener like \"Could you tell me...?\" or \"Do you know...?\", use statement order and drop \"do/does/did\": \"Do you know where the pharmacy is?\", \"Could you tell me what time the museum opens?\" Yes/no questions take \"if\" or \"whether\": \"I wonder if they're home.\"",
      "When \"who\", \"what\", \"which\" or \"how many\" is the subject, there's no \"did\": \"Who sent this?\", \"What happened?\" When it's the object, use \"did\" (\"Who did you invite?\") and put the preposition at the end: \"Who did you go with?\"",
    ],
    [
      ["Can you tell me where the restroom is?", "¿Me puede decir dónde está el baño?"],
      ["Do you know if the bank is open on Saturdays?", "¿Sabes si el banco abre los sábados?"],
      ["Who left the window open?", "¿Quién dejó la ventana abierta?"],
      ["Who did you sit next to?", "¿Al lado de quién te sentaste?"],
    ],
    [
      mc(
        "Which question is correct?",
        ["Do you know where the post office is?", "Do you know where is the post office?", "Do you know where the post office is it?", "Do you know where does the post office is?"],
        "After \"Do you know\", the question part uses statement order: \"where the post office is\". Spanish «dónde está la oficina de correos» puts the verb first, but English can't here.",
      ),
      fb(
        "Could you tell me how much this jacket ___?",
        "costs",
        "¿Me podría decir cuánto [cuesta] esta chaqueta?",
        "No \"does\" in an indirect question, so the main verb carries the -s: \"this jacket costs\".",
      ),
      fb(
        "Do you know what time the last train ___?",
        "leaves",
        "¿Sabes a qué hora [sale] el último tren?",
        "Not *what time does the last train leave: the helper disappears and the -s goes back on the verb.",
      ),
      tr(
        "¿Me puede decir dónde está la parada del autobús?",
        "{Can|Could} you tell me where the bus stop is?",
        "Opener + \"where\" + subject + verb: \"where the bus stop is\".",
      ),
      tr(
        "¿Sabes cuándo empieza la película?",
        ["Do you know {when|what time} the {movie|film} {starts|begins}?"],
        "\"When the movie starts\": statement order, no \"does\", and the -s on the verb.",
      ),
      wo(
        "Do you have any idea how long the trip takes?",
        "¿Tienes idea de cuánto dura el viaje?",
        "\"Do you have any idea\" + \"how long\" + subject + verb. The question mark belongs to the opener.",
      ),
      tr(
        "No sé dónde trabaja Sofia.",
        "I don't know where Sofia works.",
        "Statement openers work the same way: \"where Sofia works\", not *where works Sofia or *where does Sofia work.",
      ),
      mc(
        "Which sentence is correct?",
        ["I can't remember what her last name is.", "I can't remember what is her last name.", "I can't remember what is her last name?", "I can't remember what her last name is?"],
        "Statement order (\"her last name is\"), and a period, because \"I can't remember\" is not a question.",
      ),
      fb(
        "Do you know ___ the pharmacy is open on Sundays?",
        ["if", "whether"],
        "¿Sabes [si] la farmacia abre los domingos?",
        "A yes/no question inside another question needs \"if\" or \"whether\", like Spanish «si».",
      ),
      tr(
        "¿Sabe si hay Wi-Fi en el tren?",
        "Do you know {if|whether} there's {Wi-Fi|wifi} on the train?",
        "\"Is there Wi-Fi?\" becomes \"if there's Wi-Fi\": add \"if\" and put \"there\" before \"is\".",
      ),
      tr(
        "Me pregunto si Diego va a venir.",
        ["I wonder {if|whether} Diego is {going to come|coming}.", "I wonder {if|whether} Diego will come."],
        "«Me pregunto si» = \"I wonder if\" + statement order. It's not a question, so no question mark.",
      ),
      lc(
        "I was wondering if you could help me with this form.",
        ["Asking politely for help", "Saying they can't help", "Asking what the form is for", "Saying the form is wrong"],
        "\"I was wondering if you could...\" is a very polite way to ask for something.",
        "What is the speaker doing?",
      ),
      say(
        "Could you tell me if the meeting has started?",
        "¿Me podría decir si ya empezó la reunión?",
        "\"Could you\" often sounds like /ˈkʊdʒə/.",
        "Opener + \"if\" + statement order: \"if the meeting has started\".",
      ),
      dc(
        "I'm not sure whether or not they accept credit cards.",
        "\"Whether or not\" stays together; \"whether\" sounds exactly like \"weather\".",
      ),
      wo(
        "Would you mind telling me where you bought that bag?",
        "¿Te importaría decirme dónde compraste esa bolsa?",
        "\"Would you mind telling me\" + \"where\" + subject + verb: \"where you bought\", not *where did you buy.",
      ),
      tr(
        "¿Tienes idea de por qué cerraron el restaurante?",
        ["Do you have any idea why they closed the restaurant?", "Do you have any idea why the restaurant closed?"],
        "\"Why they closed\": no \"did\", and the past form \"closed\" carries the tense.",
      ),
      mc(
        "Ana invited Tom. You want to know the name of the person who invited Tom. Which question is correct?",
        ["Who invited Tom?", "Who did invite Tom?", "Who did Ana invite?", "Whom invited Tom?"],
        "\"Who\" is the subject (the person who invited), so there's no \"did\". \"Who did Ana invite?\" asks about Tom.",
      ),
      fb(
        "Who ___ you this beautiful scarf?",
        "gave",
        "¿Quién te [regaló] esta bufanda tan bonita?",
        "\"Who\" is the subject, so the verb is simply in the past: \"Who gave you...?\", not *Who did give you.",
      ),
      tr(
        "¿Qué pasó en la reunión?",
        "What happened {at|in} the meeting?",
        "\"What\" is the subject of \"happen\", so no \"did\": \"What happened?\" *What did happen? is a very common mistake.",
      ),
      tr(
        "¿A quién llamaste anoche?",
        "{Who|Whom} did you call last night?",
        "«¿A quién?» marks the object, so English uses \"did\": \"Who did you call?\"",
      ),
      fb(
        "Who ___ last night? The phone rang three times.",
        "called",
        "¿Quién [llamó] anoche? El teléfono sonó tres veces.",
        "«¿Quién llamó?» has \"who\" as the subject: \"Who called?\", with no \"did\".",
      ),
      fb(
        "How many people ___ to the concert?",
        ["came", "went"],
        "¿Cuántas personas [vinieron] al concierto?",
        "\"How many people\" is the subject, so no \"did\": *How many people did come.",
      ),
      mt(
        "Match each question with its answer.",
        [
          ["Who saw you?", "My boss saw me."],
          ["Who did you see?", "I saw my boss."],
          ["What hit the car?", "A falling branch hit it."],
          ["What did the car hit?", "It hit a tree."],
          ["Whose dog bit him?", "The neighbor's dog."],
        ],
        "Without \"did\", the question word is the subject (who did the action); with \"did\", it's the object (who or what received it).",
      ),
      tr(
        "¿Con quién fuiste al cine?",
        ["Who did you go to the {movies|cinema} with?", "With whom did you go to the {movies|cinema}?"],
        "Everyday English puts the preposition at the end: \"Who did you go... with?\" *With who did you go? sounds strange; \"With whom...\" is correct but very formal.",
      ),
      lc(
        "Who told you about the job?",
        ["The person who gave the information", "The person who received the information", "When the job starts", "What the job is"],
        "No \"did\", so \"who\" is the subject: the speaker asks who gave the information.",
        "What does the speaker want to know?",
      ),
      wo(
        "What are you laughing about?",
        "¿De qué te ríes?",
        "The preposition goes at the end: \"What are you laughing about?\", not *About what are you laughing?",
      ),
      mc(
        "Which question is correct?",
        ["What happened to your car?", "What did happen to your car?", "What did happened to your car?", "What happen to your car?"],
        "\"What\" is the subject of \"happen\": past simple, no \"did\".",
      ),
      tr(
        "¿Sabes quién ganó el partido?",
        "Do you know who won the {game|match}?",
        "A subject question inside an indirect question: \"who won\", no \"did\" anywhere.",
      ),
      fb(
        "Can you tell me where ___ the keys?",
        "you put",
        "¿Me puedes decir dónde [pusiste] las llaves?",
        "Indirect question with an object: statement order and no \"did\": \"where you put\", not *where did you put.",
      ),
      tr(
        "Mi jefe me preguntó quién había roto la impresora.",
        ["My boss asked {me |}who had broken the printer.", "My boss asked {me |}who broke the printer."],
        "A reported subject question: \"who had broken\". The order is already like a statement.",
      ),
      dc(
        "Do you know which bus goes to the airport?",
        "\"Which bus\" is the subject: \"which bus goes\", with the -s and no \"does\".",
      ),
      tr(
        "¿Cuál de estos departamentos tiene estacionamiento?",
        ["Which {|one }of these apartments has {parking|a parking space}?"],
        "\"Which of these apartments\" is the subject: \"has\", not *does... have.",
      ),
      say(
        "Do you know who wrote this song?",
        "¿Sabes quién escribió esta canción?",
        "Falling intonation is fine here; stress \"who\" and \"song\".",
        "Subject question inside an indirect question: \"who wrote\".",
      ),
      dc(
        "I'd like to know how many students passed the exam.",
        "A statement opener (period at the end) + a subject question: \"how many students passed\".",
      ),
    ],
  ),

  // ---------------------------------------------------------------------
  // Drill 2. Question tags, so / neither, short answers, and a whole-unit
  // mix
  // ---------------------------------------------------------------------
  lesson(
    2,
    "questions",
    "Tags, So Do I & Short Answers",
    "Add the right question tag, agree and disagree with So do I, Neither can I, I do or I haven't, and mix every question form in the unit.",
    "Recap: tags, agreeing and short answers",
    [
      "A tag repeats the auxiliary with the opposite polarity and a pronoun: \"She's from Lima, isn't she?\", \"You didn't call, did you?\"; with no auxiliary, use do/does/did. Special tags: \"I'm late, aren't I?\", \"Pass me the salt, will you?\", \"Let's start, shall we?\", \"Nobody knows, do they?\"",
      "To agree, use \"So/Neither\" + auxiliary + subject (\"So did I\", \"Neither can I\"); to disagree, subject + auxiliary (\"I did\", \"I can't\"). Short answers repeat the auxiliary (\"Yes, I have\"), and «creo que sí» is \"I think so\".",
    ],
    [
      ["You've been to Mexico, haven't you?", "Has estado en México, ¿no?"],
      ["They don't eat meat, do they?", "No comen carne, ¿verdad?"],
      ["\"I can't sleep on planes.\" \"Neither can I.\"", "—No puedo dormir en los aviones. —Yo tampoco."],
      ["\"Is it going to rain?\" \"I don't think so.\"", "—¿Va a llover? —Creo que no."],
    ],
    [
      mc(
        "Complete: \"It's really hot today, ___?\"",
        ["isn't it", "is it", "no", "doesn't it"],
        "Positive sentence with \"is\" → negative tag with \"isn't\" + the pronoun \"it\". *It's hot, no? is a translation of «¿no?».",
      ),
      fb(
        "You're Kevin's brother, ___?",
        "aren't you",
        "Eres el hermano de Kevin, [¿verdad?]",
        "\"You're\" → \"aren't you?\": same auxiliary, made negative.",
      ),
      fb(
        "She can't drive, ___?",
        "can she",
        "No sabe manejar, [¿verdad?]",
        "Negative sentence → positive tag: \"can she?\". Never two negatives.",
      ),
      trt(
        "Trabajas desde casa, ¿no?",
        "You work from home, don't you?",
        "Present simple has no auxiliary in the positive, so the tag uses \"do\": \"don't you?\"",
      ),
      trt(
        "Ya terminaste el informe, ¿no?",
        ["You've {already |}finished the report, haven't you?", "You {already |}finished the report, didn't you?"],
        "The tag copies the auxiliary: \"have\" → \"haven't you?\", or past simple → \"didn't you?\".",
      ),
      trt(
        "Tu hermana vive en Chicago, ¿verdad?",
        "Your sister lives in Chicago, doesn't she?",
        "\"Lives\" → \"doesn't she?\": the tag uses a pronoun, not the noun. *isn't she? is a common slip.",
      ),
      trt(
        "Tom fue a la reunión, ¿no?",
        "Tom went to the meeting, didn't he?",
        "Past simple → \"didn't\" + pronoun: \"didn't he?\", not *wasn't he? and not *didn't Tom?",
      ),
      trt(
        "No has visto mis lentes, ¿verdad?",
        "You haven't seen my glasses, have you?",
        "Negative sentence → positive tag: \"have you?\". It often sounds like a polite «¿no habrás visto...?».",
      ),
      lc(
        "Nobody called while I was out, did they?",
        ["Probably nobody called", "Somebody definitely called", "Everybody called", "The speaker was at home"],
        "\"Nobody\" makes the sentence negative, so the tag is positive and uses \"they\": the speaker thinks nobody called.",
        "What does the speaker think?",
      ),
      fb(
        "I'm next in line, ___?",
        "aren't I",
        "Me toca a mí, [¿no?]",
        "The tag for \"I am\" is irregular: \"aren't I?\". *Amn't I and *am not I don't exist in standard English.",
      ),
      fb(
        "Let's order a pizza, ___?",
        ["shall we", "okay"],
        "Pidamos una pizza, [¿no?]",
        "After \"Let's\", the tag is \"shall we?\" (in American English \"okay?\" is also common).",
      ),
      trt(
        "Pásame la sal, ¿quieres?",
        ["Pass {me |}the salt, {will|could|can|would} you?"],
        "After an imperative, the tag is usually \"will you?\" (or \"could/can you?\"), which softens the order.",
      ),
      mc(
        "Complete: \"Nothing happened, ___?\"",
        ["did it", "didn't it", "did they", "didn't they"],
        "\"Nothing\" makes the sentence negative → positive tag, and \"nothing\" takes \"it\".",
      ),
      mc(
        "\"You don't eat pork, do you?\" You don't eat pork. What do you say?",
        ["No, I don't.", "Yes, I don't.", "Yes, I do.", "No, I do."],
        "Answer the facts: \"no\" goes with a negative verb. Spanish «Sí, no como» leads to *Yes, I don't, which is wrong.",
      ),
      say(
        "It's a beautiful day, isn't it?",
        "Hace un día precioso, ¿no?",
        "Let your voice go down on \"isn't it\": you're making conversation, not really asking.",
        "Small-talk tags usually have falling intonation.",
      ),
      fb(
        "\"I love Italian food.\" \"So ___ I.\"",
        "do",
        "—Me encanta la comida italiana. —[A mí también].",
        "\"Love\" is present simple, so the auxiliary is \"do\": \"So do I\". Not *So I do and not *So love I.",
      ),
      fb(
        "\"I haven't finished my homework.\" \"___ have I.\"",
        ["Neither", "Nor"],
        "—No he terminado la tarea. —[Yo tampoco].",
        "Agreeing with a negative: \"Neither\" + positive auxiliary + subject. *Me too would agree with the wrong thing.",
      ),
      mc(
        "\"I was really tired yesterday.\" How do you say «yo también»?",
        ["So was I.", "So did I.", "So I was.", "Me neither."],
        "The first sentence uses \"was\", so the reply copies it: \"So was I\".",
      ),
      mc(
        "\"I can't swim.\" How do you say «yo tampoco»?",
        ["Neither can I.", "Me too.", "Neither can't I.", "So can't I."],
        "\"Neither\" + positive auxiliary: \"Neither can I\" (or \"Me neither\"). *Me too after a negative is a very common mistake.",
      ),
      mt(
        "Match each statement with the reply that means «yo sí».",
        [
          ["I don't like jazz.", "I do."],
          ["I'm not hungry.", "I am."],
          ["I've never been to Peru.", "I have."],
          ["I can't cook.", "I can."],
          ["I didn't vote.", "I did."],
        ],
        "To disagree, use subject + auxiliary with the opposite polarity. Never *I yes.",
      ),
      fb(
        "\"Do you like spicy food?\" \"Yes, I ___.\"",
        "do",
        "—¿Te gusta la comida picante? —Sí, [me gusta].",
        "Short answers repeat the auxiliary: \"Yes, I do.\" *Yes, I like is incomplete.",
      ),
      tr(
        "—¿Va a venir Pedro? —Creo que no.",
        ["{Is Pedro coming|Is Pedro going to come|Will Pedro come}? {I|No, I} don't think so.", "I don't think so."],
        "«Creo que no» = \"I don't think so\": English makes \"think\" negative. Not *I think no. (\"I think not\" exists, but it sounds very formal.)",
      ),
      tr(
        "—¿Va a llover el día de la boda? —Espero que no.",
        ["{Is it going to rain|Will it rain} on the wedding day? I hope not.", "I hope not."],
        "«Espero que no» = \"I hope not\". Not *I don't hope so.",
      ),
      dc(
        "You don't remember my name, do you?",
        "Negative sentence + positive tag: \"do you?\" is short and unstressed.",
      ),
      dc(
        "My brother hates flying, and so does my dad.",
        "\"So does my dad\": \"so\" + auxiliary + subject also works in the middle of a sentence.",
      ),
      wo(
        "You haven't told anyone, have you?",
        "No le has dicho a nadie, ¿verdad?",
        "Negative sentence with \"haven't\" → positive tag \"have you?\".",
      ),
      mc(
        "Which question is correct?",
        ["Do you know where she works?", "Do you know where does she work?", "Do you know where she does work?", "Do you know where works she?"],
        "Indirect question: statement order and no \"does\": \"where she works\".",
      ),
      tr(
        "¿Quién rompió el vaso? Fuiste tú, ¿no?",
        ["Who broke the glass? It was you, wasn't it?", "Who broke the glass? You did, didn't you?"],
        "A subject question (\"Who broke...?\", no \"did\"), then a tag: \"It was you, wasn't it?\"",
      ),
      tr(
        "¿Sabes si Lucia habla francés?",
        "Do you know {if|whether} Lucia speaks French?",
        "Yes/no indirect question: \"if\" + statement order, with the -s on \"speaks\".",
      ),
      fb(
        "Everybody's ready, ___?",
        "aren't they",
        "Todos están listos, [¿no?]",
        "\"Everybody\" takes a singular verb (\"is\"), but the tag uses \"they\": \"aren't they?\"",
      ),
      wo(
        "Could you tell me what time breakfast starts?",
        "¿Me podría decir a qué hora empieza el desayuno?",
        "\"What time\" + subject + verb: \"what time breakfast starts\".",
      ),
      lc(
        "I'm not sure whether he's coming, but I hope so.",
        ["She doesn't know, but she wants him to come", "She knows he isn't coming", "She doesn't want him to come", "She's sure he's coming"],
        "\"I'm not sure whether\" = she doesn't know; \"I hope so\" = «espero que sí».",
        "What does the speaker think?",
      ),
      say(
        "I don't think so, but I'll ask my manager.",
        "Creo que no, pero le voy a preguntar a mi gerente.",
        "Stress \"think\" in \"I don't think so\".",
        "«Creo que no» = \"I don't think so\". \"Will\" for a decision made now.",
      ),
      trt(
        "No sabes dónde está la estación, ¿verdad?",
        "You don't know where the station is, do you?",
        "An indirect question (\"where the station is\") plus a positive tag after a negative sentence: \"do you?\"",
      ),
      dc(
        "Let's take a break, shall we?",
        "After \"Let's\", the tag is \"shall we?\": a friendly suggestion.",
      ),
    ],
  ),
];
