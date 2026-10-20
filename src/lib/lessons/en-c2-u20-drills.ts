// Synced from cheneygross-afk/lengo:src/lib/lessons/en-c2-u20-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Required drill lessons for EN-C2 unit u20 (replying to rhetorical questions, attitude, and speeches): a short recap, then graded practice.

type Ex = Lesson["exercises"][number];

const SECONDS: Record<string, number> = {
  "multiple-choice": 15, "multi-select": 20, "listen-choose": 20, "fill-blank": 20, translate: 30,
  "word-order": 25, matching: 30, dictation: 30, speak: 25, write: 0,
};

// Expands "{a|b}" alternatives into every variant; the first variant is the main answer.
const expand = (p: string): string[] => {
  const m = p.match(/\{([^{}]*)\}/);
  if (!m) return [p.replace(/\s+/g, " ").replace(/ ([,.;:?!])/g, "$1").trim()];
  return m[1].split("|").flatMap((o) => expand(p.replace(m[0], o)));
};

const tr = (source: string, pattern: string, explanation: string, extra: string[] = []): Ex => {
  const all = [...new Set([...expand(pattern), ...extra])];
  return all.length > 1
    ? { type: "translate", direction: "es-en", prompt: "Translate into English.", source, answer: all[0], altAnswers: all.slice(1), explanation }
    : { type: "translate", direction: "es-en", prompt: "Translate into English.", source, answer: all[0], explanation };
};

const fb = (sentence: string, answer: string, en: string, altAnswers: string[], explanation: string): Ex =>
  altAnswers.length
    ? { type: "fill-blank", prompt: "Write the bold words in English.", sentence, answer, en, altAnswers, explanation }
    : { type: "fill-blank", prompt: "Write the bold words in English.", sentence, answer, en, explanation };

const mc = (question: string, options: string[], correctIndex: number, explanation: string): Ex => ({
  type: "multiple-choice", question, options, correctIndex, explanation,
});

const wo = (sentence: string, translation: string, explanation: string, alts: string[] = []): Ex =>
  alts.length
    ? { type: "word-order", prompt: "Put the words in order.", words: sentence.split(" "), translation, altOrders: alts.map((a) => a.split(" ")), explanation }
    : { type: "word-order", prompt: "Put the words in order.", words: sentence.split(" "), translation, explanation };

const dt = (audio: string, explanation: string): Ex => ({ type: "dictation", audio, explanation });

const lc = (audio: string, question: string, options: string[], correctIndex: number, explanation: string): Ex => ({
  type: "listen-choose", audio, question, options, correctIndex, explanation,
});

const sp = (text: string, spanish: string, tip: string, explanation: string): Ex => ({
  type: "speak", text, prompt: `Say in English: «${spanish}»`, tip, explanation,
});

const mt = (instructions: string, pairs: [string, string][], explanation: string): Ex => ({
  type: "matching", instructions, pairs: pairs.map(([left, right]) => ({ left, right })), explanation,
});

// A transformation gap-fill: complete the rewrite so it keeps the meaning of the original.
const fx = (original: string, sentence: string, answer: string, altAnswers: string[], explanation: string): Ex =>
  altAnswers.length
    ? { type: "fill-blank", prompt: `Complete the paraphrase so it means the same as: "${original}"`, sentence, answer, altAnswers, explanation }
    : { type: "fill-blank", prompt: `Complete the paraphrase so it means the same as: "${original}"`, sentence, answer, explanation };

const drill = (
  slug: string,
  title: string,
  summary: string,
  heading: string,
  body: string[],
  examples: [string, string][],
  exercises: Ex[],
): Lesson => {
  const seconds = exercises.reduce((t, e) => t + SECONDS[e.type], 0) + 45;
  return {
    slug,
    level: "EN-C2",
    number: 1,
    title,
    summary,
    duration: `${Math.round(seconds / 60)} min`,
    sections: [{ heading, body, examples: examples.map(([es, en]) => ({ es, en })) }],
    exercises,
  };
};

export const EN_C2_U20_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. Replying to rhetorical questions, feigned doubt and attitude tags, the one-minute speech, famous speeches
  // ---------------------------------------------------------------------
  drill(
    "en-c2-rhetoric-speeches-unit-drill-1",
    "Drill: Replying Under Fire, Attitude Tags and Speech Devices",
    "Answer, turn back or reframe a rhetorical question, read and use feigned doubt and attitude tags, structure a one-minute speech, and name the devices of famous speeches.",
    "Recap: questions as weapons, speeches as craft",
    [
      "A rhetorical question is a disguised claim: answer it literally (\"Since you ask...\"), turn it back (\"What would you suggest instead?\") or reframe it (\"That's a false choice.\"). Feigned doubt (\"Is it just me, or...?\") sharpens a criticism, and tags carry attitude: \"You didn't really think that would work, did you?\" is a put-down.",
      "A one-minute speech is about 130 to 150 words and one idea: hook, claim, proof (a tricolon), turn (hypophora), close. Name the devices: anaphora, tricolon, antithesis (\"not by X but by Y\") and chiasmus (\"ask not what A can do for B...\").",
    ],
    [
      ["Since you ask, the pilot saved us twelve percent.", "Ya que lo pregunta, el piloto nos ahorró un doce por ciento."],
      ["Is it just me, or is this deadline impossible?", "¿Me lo parece a mí o este plazo es imposible?"],
      ["So you're in charge now, are you?", "Así que ahora mandas tú, ¿eh?"],
      ["It is cheaper, it is faster and it is fairer.", "Es más barato, más rápido y más justo."],
    ],
    [
      mc(
        "In a meeting, a colleague asks: \"Who would actually use this app?\" What is she really saying?",
        [
          "That nobody would use it",
          "That she wants a list of potential users",
          "That she would like to use it",
          "That everybody would use it",
        ],
        0,
        "A rhetorical question is a statement in disguise: \"Who would...?\" claims that nobody would. If you stay silent, the room hears agreement.",
      ),
      mc(
        "\"Is that really the best we can do?\" Which reply sounds composed and in control?",
        [
          "Since you ask, no, and here is how we can improve it.",
          "But what are you saying?",
          "How can you say that?",
          "I'm surprised you'd even ask that.",
        ],
        0,
        "A calm, literal answer exposes the question as an empty gesture. *But what are you saying? translates «¿Pero qué dice?» and sounds confused; the others sound wounded or defensive.",
      ),
      tr(
        "Ya que lo pregunta, la respuesta es no.",
        "Since you ask, the answer is no.",
        "\"Since you ask\" means «ya que lo pregunta» (here \"since\" is causal, not «desde»). It sounds relaxed and in control.",
        ["Since you're asking, the answer is no.", "As you ask, the answer is no."],
      ),
      fb(
        "___ you ask, we tested it with forty users last month.",
        "Since",
        "[Ya que] lo pregunta, lo probamos con cuarenta usuarios el mes pasado.",
        ["As"],
        "Answer the rhetorical question literally, briefly and with a concrete figure: that is what deflates it.",
      ),
      tr(
        "Si tiene una idea mejor, me encantaría escucharla.",
        "If you have a better idea, I'd {love|really like|genuinely like|be glad} to hear it.",
        "Turning the question back with a light touch: a neutral invitation, not a sharp *Well, what's your plan, then?",
      ),
      tr(
        "Es justo. Pero lo mismo podría decirse de su plan, ¿no?",
        "Fair point. But the same could be said of your plan, couldn't it?",
        "Acknowledge, then return. English builds the tag from the auxiliary (\"could... couldn't it?\"); an invariable *no? loses the effect.",
        ["Fair enough. But the same could be said of your plan, couldn't it?", "That's fair. But the same could be said of your plan, couldn't it?"],
      ),
      mc(
        "\"Do we want lower prices or better quality?\" Which reply refuses the trap?",
        [
          "That's a false choice: the real question is how we get both.",
          "Lower prices, obviously.",
          "Better quality, obviously.",
          "Who cares?",
        ],
        0,
        "Answering either way accepts the frame. Reframing (\"That's a false choice\", \"The real question is...\") rejects the premise.",
      ),
      tr(
        "La cuestión no es si invertimos, sino cuánto.",
        "The question {isn't|is not} whether we invest, but how much.",
        "\"The question isn't whether..., but how/how much...\" reframes a debate. \"Whether\" introduces the rejected yes/no question.",
      ),
      fb(
        "I don't accept the ___ of that question.",
        "premise",
        "No acepto la [premisa] de esa pregunta.",
        [],
        "Rejecting the premise exposes a loaded question instead of answering it on the opponent's terms.",
      ),
      tr(
        "¿Me lo parece a mí o hace muchísimo calor aquí?",
        "Is it just me, or is it {really |incredibly |}hot in here?",
        "\"Is it just me, or...?\" is feigned doubt: it states an opinion and invites agreement. The subject is \"it\", not *Is just me.",
        ["Is it just me, or is it boiling in here?", "Am I the only one who thinks it's really hot in here?"],
      ),
      mc(
        "Which sentence is correct?",
        [
          "Am I the only one who thinks the deadline is unrealistic?",
          "Am I the only one who think the deadline is unrealistic?",
          "Am I the only who thinks the deadline is unrealistic?",
          "I am the only one who thinks the deadline is unrealistic?",
        ],
        0,
        "The verb agrees with \"the only one\" (third person singular): \"who thinks\". Feigned doubt needs question order: \"Am I...?\".",
      ),
      tr(
        "Corrígeme si me equivoco, pero ¿no aprobamos esto en marzo?",
        "Correct me if I'm wrong, but didn't we approve this in March?",
        "\"Correct me if I'm wrong, but...\" softens the surface and sharpens the point: the speaker is sure. The negative question asserts that we did.",
        ["Correct me if I'm wrong, but did we not approve this in March?"],
      ),
      fb(
        "You didn't really think he'd pay you back, ___?",
        "did you",
        "No pensarías en serio que te iba a devolver el dinero, [¿no?]",
        [],
        "Negative statement + positive tag, with \"really\" and a falling tone: a scornful put-down. English builds the tag from the auxiliary \"did\".",
      ),
      fb(
        "So you're a nutritionist now, ___?",
        "are you",
        "Así que ahora eres nutricionista, [¿eh?]",
        [],
        "A same-polarity tag (positive statement, positive tag) expresses sarcasm or suspicion. It never asks for information.",
      ),
      fb(
        "Turn that music down, ___?",
        "will you",
        "Baja esa música, [¿quieres?]",
        ["would you", "can you", "could you"],
        "Imperative tags (\"will you?\", \"would you?\") add impatience. Spanish puts the attitude in «¿quieres?» and the voice; English uses the tag.",
      ),
      mc(
        "\"Oh, you've finally finished, have you?\" What is the speaker doing?",
        [
          "Being sarcastic about how long it took",
          "Asking whether the work is finished",
          "Congratulating the listener sincerely",
          "Apologizing for interrupting",
        ],
        0,
        "Same-polarity tags signal surprise, suspicion or sarcasm. With \"finally\" the meaning is clear: it took far too long.",
      ),
      mc(
        "\"My commute takes two hours.\" \"Tell me about it!\" What does the second speaker mean?",
        [
          "I know exactly what you mean: mine is bad too",
          "Please tell me more about your commute",
          "I don't believe you",
          "I don't care about your commute",
        ],
        0,
        "\"Tell me about it!\" sounds like a request but means strong agreement, like «¡A mí me lo vas a contar!».",
      ),
      lc(
        "Yeah, right.",
        "What does the speaker mean?",
        [
          "I don't believe you",
          "You are absolutely right",
          "Turn right here",
          "I agree, but only partly",
        ],
        0,
        "\"Yeah, right\" with a flat, falling tone is a dismissive comeback: I don't believe a word of it.",
      ),
      lc(
        "Oh, great. Another software update.",
        "How does the speaker feel?",
        [
          "Annoyed: it is the opposite of great",
          "Delighted about the update",
          "Surprised that updates exist",
          "Curious about what the update does",
        ],
        0,
        "\"Oh, great\" on a flat, falling tone is ironic. Intonation, not the words, carries the meaning.",
      ),
      tr(
        "¡Como si fueran a escucharnos!",
        "As if they {would|were going to} listen to us!",
        "\"As if\" introduces an imaginary situation, like «¡como si...!»: it means they won't. Informal only.",
        ["As if they'd ever listen to us!", "Like they would listen to us!", "Like they're going to listen to us!"],
      ),
      mc(
        "Which opening suits a one-minute speech in English?",
        [
          "Picture a school with no homework.",
          "First of all, I would like to thank the organizers for inviting me.",
          "So, today I'm going to talk to you about homework.",
          "Good afternoon. My topic is homework, and I have five points.",
        ],
        0,
        "Start with the hook. Thanks belong, if at all, at the very end; \"Today I'm going to talk about\" wastes seconds; five points do not fit in a minute.",
      ),
      tr(
        "Es más barato, más rápido y más limpio.",
        "It's cheaper, faster and cleaner.",
        "A tricolon: three parallel items, ideally growing in weight. Two feel like a comparison; four start to sound like a list.",
        ["It is cheaper, it is faster and it is cleaner.", "It is cheaper, faster and cleaner.", "It's cheaper, it's faster and it's cleaner."],
      ),
      tr(
        "Que quede claro: no estamos pidiendo más dinero.",
        "Let me be clear: we {are not|aren't} asking for more money.",
        "\"Let me be clear:\" signals the key sentence. Use one or two signal phrases per speech, not five.",
      ),
      fb(
        "Make no ___: the problem will not fix itself.",
        "mistake",
        "[No nos engañemos]: el problema no se va a resolver solo.",
        [],
        "\"Make no mistake:\" is a fixed signal phrase for emphasis, like «no nos engañemos» or «que nadie se engañe».",
      ),
      mc(
        "Which closing line lands best?",
        [
          "We have the tools. Now we need the courage.",
          "So, yeah, that's it.",
          "And nothing, that's all.",
          "That's all I wanted to say, thanks for listening, and one more thing about costs...",
        ],
        0,
        "A short, rhythmic line ends on a strong word. *And nothing translates «y nada» literally and means nothing in English; adding a new point at the end destroys the close.",
      ),
      tr(
        "Así que la próxima vez que tiren comida, piensen en esta cifra.",
        "So the next time you throw {away food|food away|out food|food out}, think of this {figure|number}.",
        "A close that calls back to the hook and asks for action. «La próxima vez que» is \"the next time (that)\" + present simple.",
        ["So next time you throw food away, think of this figure.", "So the next time you throw food away, think about this figure."],
      ),
      mt(
        "Match each device with its description.",
        [
          ["anaphora", "repeating the opening words of successive clauses"],
          ["tricolon", "a group of three parallel items"],
          ["antithesis", "two opposed ideas in parallel form"],
          ["chiasmus", "repeating words in reversed order"],
          ["hypophora", "asking a question and answering it yourself"],
        ],
        "In analysis, name the device and then its effect: anaphora builds momentum, antithesis sharpens a contrast, chiasmus makes a line memorable, hypophora anticipates an objection.",
      ),
      mc(
        "\"Ask not what your country can do for you; ask what you can do for your country.\" The main device is:",
        [
          "chiasmus",
          "anaphora",
          "hypophora",
          "negative inversion",
        ],
        0,
        "\"Country... you\" becomes \"you... country\": the order of words is reversed. \"Ask not\" is an archaic negative imperative chosen for its solemn ring.",
      ),
      mc(
        "\"...not be judged by the color of their skin but by the content of their character.\" The main device is:",
        [
          "antithesis",
          "chiasmus",
          "a rhetorical question",
          "fronting",
        ],
        0,
        "Two opposed ideas in parallel form (\"not by X but by Y\") make an antithesis; alliteration (color, content, character) makes it unforgettable.",
      ),
      tr(
        "No juzgamos a una empresa por lo que promete, sino por lo que entrega.",
        "We judge a company not by what it promises but by what it delivers.",
        "Antithesis packs a whole argument into one sentence. Keep both halves parallel: \"by what it promises / by what it delivers\".",
        ["We don't judge a company by what it promises but by what it delivers.", "We do not judge a company by what it promises but by what it delivers.", "We don't judge a company by what it promises, but by what it delivers."],
      ),
      wo(
        "We should eat to live, not live to eat",
        "Deberíamos comer para vivir, no vivir para comer.",
        "A chiasmus: \"eat... live\" becomes \"live... eat\".",
      ),
      dt(
        "The anaphora builds momentum, and the final clause breaks the pattern.",
        "Name the device, then its effect: \"builds momentum\", \"breaks the pattern\".",
      ),
      dt(
        "Three parallel items feel complete; four start to sound like a shopping list.",
        "The rule of three behind every tricolon.",
      ),
      sp(
        "What we need is not more time but more courage.",
        "Lo que necesitamos no es más tiempo, sino más valentía.",
        "Pause before \"but\" and stress \"time\" and \"courage\".",
        "A wh-cleft with antithesis on the key sentence of a speech: one emphasis structure where it matters most.",
      ),
      sp(
        "Never has change been so urgent.",
        "Nunca ha sido tan urgente el cambio.",
        "Stress \"Never\" and \"urgent\"; keep \"has\" light.",
        "Negative inversion gives the key sentence gravity: \"has\" before the subject.",
      ),
    ],
  ),

  // ---------------------------------------------------------------------
  // Drill 2. Under fire in a debate, rhetoric and argument, the speech mission + unit mix
  // ---------------------------------------------------------------------
  drill(
    "en-c2-rhetoric-speeches-unit-drill-2",
    "Drill: Holding Your Ground and Making the Case",
    "Handle personal jabs, scornful tags, feigned doubt and interruptions in a debate, concede without surrendering, use the verbs and emphasis structures of argument, and build the key lines of a short persuasive speech.",
    "Recap: stay calm, concede, then land the point",
    [
      "Under fire, answer briefly and pivot (\"I haven't, no. But...\"), contradict a scornful tag with the auxiliary (\"I do, actually.\"), meet feigned doubt with evidence, and hold the floor once: \"If I could just finish...\". Then return to the question you were asked.",
      "Concede and turn: \"Granted,... But...\", \"Even so,...\", \"Expensive it may be, but...\"; \"despite\" + noun or -ing, never a clause. \"Discuss\" is «hablar de», \"argue\" is «discutir»; \"refute\" means prove wrong. Key lines take one emphasis structure: a cleft, fronting or negative inversion.",
    ],
    [
      ["I haven't, no. But the teachers in the study have.", "No, no lo he hecho. Pero los profesores del estudio sí."],
      ["You haven't seen the figures, have you? I have, as it happens.", "No ha visto las cifras, ¿verdad? Pues sí, da la casualidad de que las he visto."],
      ["Granted, it takes longer. Even so, it is worth it.", "Es verdad que lleva más tiempo. Aun así, vale la pena."],
      ["Never has the case been stronger.", "Nunca habían sido tan sólidos los argumentos."],
    ],
    [
      mc(
        "\"With respect, have you ever had to meet a payroll?\" What is the speaker really doing?",
        [
          "Attacking your background instead of your argument",
          "Asking a genuine question about your career",
          "Agreeing with you politely",
          "Asking you to explain how salaries work",
        ],
        0,
        "\"Meet a payroll\" means find the money to pay your staff every month. Prefaced by \"With respect\", it is a jab at your experience, not a question that needs your CV.",
      ),
      mc(
        "Which reply to that personal jab works best on air?",
        [
          "I haven't, no. But the two hundred firms in the trial have, and here's what they found.",
          "What's that got to do with anything?",
          "I have a doctorate, two master's degrees and twenty years of experience in economics.",
          "And you, have you ever studied economics?",
        ],
        0,
        "Answer briefly and pivot to the evidence. An indignant question sounds testy, a list of qualifications shows the jab hurt, and a counter-attack drops the argument.",
      ),
      tr(
        "No creo que mi experiencia sea lo importante aquí. Lo importante son las cifras.",
        "I'm not sure my {background|experience} is the issue here. The {figures|numbers} are.",
        "Naming the move lightly and pointing to the evidence. \"The figures are\" picks up \"the issue\" with no need to repeat it.",
        ["I don't think my background is the issue here. The figures are.", "I don't think my experience is the issue here. The figures are.", "I don't think my background is what matters here. The figures are."],
      ),
      tr(
        "Pues da la casualidad de que trabajé en un hospital diez años.",
        "As it happens, I worked in a hospital for ten years.",
        "\"As it happens\" renders «da la casualidad de que» and keeps the tone calm. «Diez años» of duration needs \"for\".",
        ["As it happens, I worked at a hospital for ten years.", "As it happens, I spent ten years working in a hospital."],
      ),
      fb(
        "\"You haven't even read the proposal, have you?\" \"I ___, as it happens.\"",
        "have",
        "«Ni siquiera se ha leído la propuesta, ¿verdad?» «Pues sí, [me la he leído].»",
        [],
        "The reply picks up the auxiliary of the question: \"haven't... have you?\" gets \"I have.\" A bare \"Yes\" after a negative question is ambiguous.",
      ),
      fb(
        "\"You don't seriously think sales will recover, do you?\" \"I ___, actually.\"",
        "do",
        "«No pensará en serio que las ventas se van a recuperar, ¿no?» «Pues sí, [lo pienso].»",
        [],
        "A scornful tag expects \"No\". An unhurried \"I do, actually\", with the auxiliary, is the strongest answer; then give one piece of evidence and stop.",
      ),
      mc(
        "Why do English speakers avoid answering \"You don't think it will work, do you?\" with a bare \"Yes\"?",
        [
          "Because it is ambiguous: it could mean \"Yes, I do\" or \"Yes, you're right, I don't\"",
          "Because \"yes\" is too informal for a debate",
          "Because the tag requires a full sentence with \"that\"",
          "Because only \"no\" can follow a negative question",
        ],
        0,
        "After a negative question, \"Yes\" alone is unclear. Adding the auxiliary (\"I do\", \"I don't\") removes the ambiguity, which Spanish «sí» does not need to.",
      ),
      tr(
        "En absoluto. Lo que sugiero es que revisemos los datos primero.",
        "Not at all. {What I'm suggesting is|What I suggest is|I'm suggesting} that we {review|check|look at} the data first.",
        "\"Not at all\" rejects the loaded suggestion; the wh-cleft \"What I'm suggesting is...\" then states your real position.",
      ),
      tr(
        "Puede que no sea el único, pero los datos son públicos.",
        "You may not be the only one, but the data {are|is} public.",
        "Against feigned doubt (\"Am I the only one who...?\"), don't argue about who is naive: concede lightly and point to evidence anyone can check.",
        ["You might not be the only one, but the data are public.", "You may not be the only one, but the data is public."],
      ),
      fb(
        "If I could just ___ my point...",
        "finish",
        "Si me deja [terminar] lo que estaba diciendo...",
        [],
        "Hold the floor once, evenly: \"If I could just finish...\". Said politely and followed by your point, it works better than raising your voice.",
      ),
      tr(
        "Ahora llego a eso.",
        "I'll {come|get} to that in a {second|moment|minute}.",
        "A calm promise to answer later keeps control of your argument. \"Come to\" or \"get to\" a point.",
        ["I'm coming to that.", "I'm getting to that."],
      ),
      tr(
        "Volviendo a la pregunta que nos hicieron: sí, es rentable.",
        "So, to {come back|get back|return} to the question we were asked: yes, it's profitable.",
        "Returning to the moderator's question shows you are keeping the discussion on track. Note the passive \"we were asked\" for «nos hicieron».",
        ["To come back to the question we were asked: yes, it's profitable.", "Coming back to the question we were asked: yes, it's profitable."],
      ),
      mc(
        "«Eso es pura retórica.» Which version is correct?",
        [
          "That's just empty rhetoric.",
          "That's a pure rhetoric.",
          "That's pure rhetorics.",
          "That's a rhetoric only.",
        ],
        0,
        "\"Rhetoric\" is uncountable: no article, no plural. \"Just\" or \"empty rhetoric\" renders the dismissive «pura retórica».",
      ),
      tr(
        "Es verdad que al principio cuesta más, pero se amortiza en tres años.",
        "{Granted|Admittedly}, it costs more at first, but it pays for itself {in|within} three years.",
        "Concede, then turn. \"Pay for itself\" is the natural rendering of «amortizarse».",
        ["It's true that it costs more at first, but it pays for itself in three years.", "It's true that it costs more at first, but it pays for itself within three years."],
      ),
      mc(
        "Which sentence is correct?",
        [
          "Despite costing more, it lasts twice as long.",
          "Despite of the cost, it lasts twice as long.",
          "Despite it costs more, it lasts twice as long.",
          "In spite it costs more, it lasts twice as long.",
        ],
        0,
        "\"Despite\" and \"in spite of\" take a noun or an -ing form, never a clause and never *despite of. With a clause, use \"even though\".",
      ),
      fb(
        "It's a risky plan. Even ___, I think we should try it.",
        "so",
        "Es un plan arriesgado. [Aun así], creo que deberíamos intentarlo.",
        [],
        "\"Even so\" stands alone at the start of a sentence and means «aun así». \"Even though\" would need a clause after it.",
      ),
      tr(
        "Será lento, pero es seguro.",
        "Slow it may be, but it{'s| is} safe.",
        "Concessive fronting: the adjective comes first, then \"it may be, but...\". The neutral version (\"It may be slow, but...\") is also correct.",
        ["It may be slow, but it is safe.", "It may be slow, but it's safe."],
      ),
      fb(
        "We ___ the budget for two hours without reaching a decision.",
        "discussed",
        "[Hablamos del] presupuesto durante dos horas sin llegar a una decisión.",
        ["debated"],
        "\"Discuss\" means talk about calmly and takes a direct object: *discussed about is a common error. «Discutir» in the sense of fighting is \"argue\".",
      ),
      mc(
        "The minister simply said the accusation was false, without offering any proof. Which report is accurate?",
        [
          "The minister denied the accusation.",
          "The minister refuted the accusation.",
          "The minister disproved the accusation.",
          "The minister conceded the accusation.",
        ],
        0,
        "\"Refute\" strictly means to prove wrong, so it would side with the minister. With no evidence offered, say \"denied\" or \"rejected\".",
      ),
      tr(
        "Mis hermanos siempre discuten por dinero.",
        "My {brothers|siblings} always argue about money.",
        "«Discutir» (have a row) is \"argue\". *Discuss about money would mean a calm conversation, and \"discuss\" never takes \"about\".",
        ["My brothers are always arguing about money.", "My siblings are always arguing about money.", "My brothers always fight about money."],
      ),
      tr(
        "Fue el ruido lo que despertó a los vecinos.",
        "It was the noise that woke {up |}the {neighbors|neighbours}.",
        "An it-cleft with \"that\" focuses on the cause, like «Fue el ruido lo que».",
        ["It was the noise that woke the neighbors up.", "It was the noise that woke the neighbours up."],
      ),
      tr(
        "No solo llegó tarde el tren, sino que además estaba lleno.",
        "Not only was the train late, but it was also {full|packed|crowded}.",
        "\"Not only\" fronted inverts the first clause (\"was the train\"); the second keeps normal order with \"but... also\".",
        ["Not only was the train late, it was also full.", "Not only was the train late, it was also packed."],
      ),
      mt(
        "Match each informal comeback with what it means.",
        [
          ["As if!", "That will never happen."],
          ["Like I care.", "I don't care at all."],
          ["Yeah, right.", "I don't believe you."],
          ["Big deal.", "That isn't important."],
          ["Tell me about it!", "I know exactly what you mean."],
          ["You don't say.", "That's obvious (said sarcastically)."],
        ],
        "None of these belongs in a debate or a formal meeting. \"Tell me about it\" and \"You don't say\" are the traps: one means strong agreement, the other is sarcasm.",
      ),
      mc(
        "Which list sounds strongest in an English speech?",
        [
          "Car-free streets are cleaner, safer and better for business.",
          "Car-free streets are cleaner, safer, quieter, more modern, more human and better for business.",
          "Car-free streets are cleaner and safer.",
          "Car-free streets are better for business, cleaner and safer and also quieter.",
        ],
        0,
        "Stop at three, ideally growing in weight. Spanish speeches love long lists; in English, five or six items sound like a shopping list and two like a comparison.",
      ),
      wo(
        "This we can no longer ignore",
        "Esto ya no lo podemos ignorar.",
        "Object fronting for the key sentence, with no pronoun after \"ignore\".",
      ),
      wo(
        "Doing nothing will cost us far more",
        "No hacer nada nos costará mucho más.",
        "A gerund subject (\"Doing nothing\") answers the cost objection in a speech's turn.",
      ),
      tr(
        "¿Bajarán las ventas? Los datos dicen lo contrario.",
        "Will sales {fall|drop|go down}? The {data say|data says|evidence says|figures say} the opposite.",
        "Hypophora in the turn: raise the strongest objection yourself and answer it in a few words.",
      ),
      tr(
        "Si te pasas de tiempo, quita frases enteras en vez de hablar más rápido.",
        "If you run over, cut whole sentences {instead of|rather than} {speaking|talking} faster.",
        "\"Run over\" (time) renders «pasarse de tiempo». Speed kills clarity, so cut rather than rush.",
        ["If it runs over, cut whole sentences instead of speaking faster.", "If you go over time, cut whole sentences instead of speaking faster.", "If you go over time, cut whole sentences rather than speaking faster."],
      ),
      dt(
        "Pause before the key sentence and stress the content words.",
        "Emphasis is also physical: a one-second pause feels long to you and natural to the audience.",
      ),
      dt(
        "Admittedly, the trial was small. Even so, the results were striking.",
        "Concede (\"Admittedly\") and turn (\"Even so\"): two separate sentences, each with its own marker.",
      ),
      lc(
        "You didn't honestly expect them to agree, did you?",
        "What is the speaker's attitude?",
        [
          "Scornful: agreeing was obviously never going to happen",
          "Genuinely curious about your expectations",
          "Encouraging you to try again",
          "Surprised that they agreed",
        ],
        0,
        "Negative statement + positive tag, \"honestly\" and a falling tone: a put-down that expects \"No\".",
      ),
      lc(
        "Am I the only one who finds this a little expensive?",
        "What is the speaker doing?",
        [
          "Criticizing the price while pretending to be unsure",
          "Asking for a show of hands",
          "Admitting that they don't understand the price",
          "Praising the product's value",
        ],
        0,
        "Feigned doubt: the speaker is sure it is too expensive and recruits the room to agree. \"A little\" softens the surface and sharpens the point.",
      ),
      sp(
        "With respect, that's not the question.",
        "Con todo respeto, esa no es la pregunta.",
        "Keep your tone even; stress \"not\".",
        "\"With respect\" announces disagreement, often sharp; use it sparingly, as it can sound aggressive.",
      ),
      sp(
        "That's a fair question, and there's a simple answer.",
        "Es una pregunta legítima, y tiene una respuesta sencilla.",
        "Relaxed pace; stress \"fair\" and \"simple\".",
        "Answering a rhetorical question literally, with composure, exposes it as a debating trick.",
      ),
      mc(
        "Your opponent asks: \"Do we want safe streets or a thriving economy?\" Which reply is strongest?",
        [
          "That's a false choice: in every city that has tried it, streets got safer and shops got busier.",
          "Safe streets, obviously. Who cares about the economy?",
          "But what are you saying? That's ridiculous.",
          "A thriving economy, I suppose, but with all due respect, I disagree.",
        ],
        0,
        "Reframe the false choice and back it with evidence. The other replies accept the frame, attack instead of arguing, or contradict themselves.",
      ),
      tr(
        "Lo que necesitamos no es otro informe. ¿Por qué? Porque nunca han estado tan claras las pruebas.",
        "What we need is not another report. Why? Because never has the evidence been so clear.",
        "A wh-cleft, hypophora and negative inversion in three short sentences. \"Evidence\" is uncountable, so \"has... been\".",
        [
          "What we need isn't another report. Why? Because never has the evidence been so clear.",
          "What we need is not another report. Why? Because never have the data been so clear.",
          "What we need is not another report. Why? Because the evidence has never been so clear.",
          "What we need is not another report. Why? Because never has the evidence been clearer.",
        ],
      ),
    ],
  ),
];
