// Synced from cheneygross-afk/lengo:src/lib/lessons/en-b2-u26-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise, Lesson } from "./types";

// Required drill lessons for EN-B2 unit u26 (word webs: personality, feelings, relationships, health, the mind, education, arts, idioms, dependent prepositions, prefixes): a short recap, then graded practice.

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
  slug: `en-b2-people-mind-unit-drill-${n}`,
  level: "EN-B2",
  number: n,
  title: `Drill: ${title}`,
  summary,
  duration: `${Math.round((exercises.reduce((s, e) => s + SECONDS[e.type], 0) + 40) / 60)} min`,
  sections: [{ heading, body, examples: examples.map(([es, en]) => ({ es, en })) }],
  exercises,
});

export const EN_B2_U26_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. Personality, feelings and relationships
  // ---------------------------------------------------------------------
  lesson(
    1,
    "Personality, Feelings and Relationships",
    "You will be able to describe what people are like, choose between -ed and -ing feeling adjectives, avoid the false friends \"sensible\", \"embarrassed\" and \"sympathetic\", and talk about friends and couples with get along, fall out, make up and break up.",
    "Recap: what people are like and how they get along",
    [
      "\"What is she like?\" asks about personality: outgoing, easy-going, reliable, stubborn, bossy, moody, mean (US: unkind). «Simpático» is \"nice\" or \"friendly\", «sensible» is \"sensitive\", «sensato» is \"sensible\", and «educado» (manners) is \"polite\".",
      "The -ed form is how you feel (\"I'm bored\"), the -ing form is what causes it (\"The class is boring\"). «Embarazada» is \"pregnant\"; \"embarrassed\" is «avergonzado». We \"get along with\" people, \"fall out\" and \"make up\", \"break up with\" someone and \"get married to\" (never *married with) them.",
    ],
    [
      ["What's your new roommate like?", "¿Cómo es tu nuevo compañero de cuarto?"],
      ["The lecture was so boring that everyone was bored.", "La conferencia fue tan aburrida que todos estaban aburridos."],
      ["I felt really embarrassed when my phone rang in class.", "Me dio mucha vergüenza cuando sonó mi celular en clase."],
      ["They fell out over money, but they made up a week later.", "Se pelearon por dinero, pero hicieron las paces una semana después."],
    ],
    [
      mc("Your friend has a new boss. You want to know about her personality. What do you ask?", [
        "What's she like?",
        "How is she?",
        "What does she look like?",
        "How does she like?",
      ], "\"What is she like?\" asks about personality. \"What does she look like?\" asks about appearance, and \"How is she?\" asks about her health or mood."),
      fb("My brother is very ___. He loves meeting new people at parties.", "outgoing", "Mi hermano es muy [extrovertido]. Le encanta conocer gente nueva en las fiestas.",
        "\"Outgoing\" = sociable, «extrovertido». \"Easy-going\" is different: relaxed, «tranquilo»."),
      tr("Mi jefa es muy tranquila. Nunca se estresa.", "My boss is {very|really} easy-going. She never gets stressed.",
        "\"Easy-going\" = relaxed and calm with people. \"Get stressed\" describes a change of state."),
      fb("You can trust Daniel. He's really ___.", "reliable", "Puedes confiar en Daniel. Es muy [responsable].",
        "\"Reliable\" means you can trust someone to do what they say. «Responsable» in this sense is \"reliable\" or \"responsible\"."),
      mc("Translate: «Tu nueva vecina es muy simpática.»", [
        "Your new neighbor is very nice.",
        "Your new neighbor is very sympathetic.",
        "Your new neighbor is very sensible.",
        "Your new neighbor is very sensitive.",
      ], "«Simpático» = \"nice\", \"friendly\" or \"likeable\". \"Sympathetic\" means understanding when someone has a problem («comprensivo»)."),
      tr("Mi abuelo es muy terco. Nunca cambia de opinión.", "My grandfather is {very|really|so} stubborn. He never changes his mind.",
        "«Terco», «cabezota» = \"stubborn\". \"Change your mind\" uses the possessive: \"his mind\"."),
      fb("Stop telling everyone what to do! Don't be so ___.", "bossy", "¡Deja de decirle a todo el mundo lo que tiene que hacer! No seas tan [mandón].",
        "«Mandón» = \"bossy\": someone who always gives orders."),
      tr("Mi jefe puede ser un poco temperamental los lunes.", "My boss can be a {bit|little} moody on Mondays.",
        "\"Moody\" = his or her mood changes a lot. \"Can be a bit\" softens a criticism, which is very common in English."),
      mc("Translate: «No le digas eso, es muy sensible.»", [
        "Don't tell him that. He's very sensitive.",
        "Don't tell him that. He's very sensible.",
        "Don't say him that. He's very sensitive.",
        "Don't tell that to him. He's very sensible.",
      ], "«Sensible» = \"sensitive\"; \"sensible\" means «sensato». Also: \"tell someone something\" but \"say something to someone\"."),
      fb("Wearing a coat in this weather is a ___ idea.", "sensible", "Ponerse un abrigo con este tiempo es una idea [sensata].",
        "\"Sensible\" = practical and reasonable («sensato»). It's a false friend of Spanish «sensible»."),
      tr("Tu sobrino es muy educado.", "Your nephew is {very|really} {polite|well-mannered}.",
        "«Educado» (good manners) is \"polite\". \"Educated\" means you've studied a lot («culto»)."),
      fb("I'm so ___. Can we do something fun?", "bored", "Estoy muy [aburrido]. ¿Podemos hacer algo divertido?",
        "How you feel takes -ed: \"I'm bored\". *I'm boring means «soy aburrido»."),
      mc("Which sentence is correct?", [
        "The instructions were confusing, so I was confused.",
        "The instructions were confused, so I was confusing.",
        "The instructions were confusing, so I was confusing.",
        "The instructions were confused, so I was confused.",
      ], "The -ing adjective describes what causes the feeling (the instructions); the -ed adjective describes how the person feels."),
      tr("Fue un viaje agotador. Estábamos agotados.", "It was an exhausting {trip|journey}. We were exhausted.",
        "\"Exhausting\" describes the trip (the cause); \"exhausted\" describes how you felt."),
      tr("Mi prima está embarazada de gemelos.", "My cousin is pregnant with twins.",
        "«Embarazada» = \"pregnant\". \"Embarrassed\" means «avergonzado» and would give a very different message."),
      fb("I felt so ___ when I called my teacher \"Mom\".", "embarrassed", "Me dio mucha [vergüenza] cuando llamé \"mamá\" a mi profesora.",
        "\"Embarrassed\" (double r, double s) = uncomfortable because of something silly that happened in front of others."),
      lc("He's ashamed of what he did.", [
        "Se avergüenza de lo que hizo.",
        "Le da vergüenza hablar en público.",
        "Está embarazado de lo que hizo.",
        "Está orgulloso de lo que hizo.",
      ], "\"Ashamed\" is stronger than \"embarrassed\": you feel guilty because you did something wrong."),
      mt("Match the English with the Spanish.", [
        ["upset", "disgustado, dolido"],
        ["relieved", "aliviado"],
        ["overwhelmed", "agobiado"],
        ["disappointed", "decepcionado"],
        ["annoyed", "molesto, irritado"],
        ["disgusted", "asqueado"],
      ], "Watch the false friends: «disgustado» is \"upset\", and \"disgusted\" means «asqueado». «Decepcionado» is \"disappointed\", not *deceived."),
      tr("Me sentí muy aliviada cuando encontré las llaves.", "I felt {so|really|very} relieved when I found {the|my} keys.",
        "«Aliviado» = \"relieved\". Note: \"I felt relieved\", never *I felt me relieved."),
      tr("La película nos decepcionó.", ["We were disappointed {with|by|in} the {movie|film}.", "The {movie|film} was disappointing."],
        "«Decepcionar» = \"disappoint\": \"We were disappointed\" or \"It was disappointing\". \"Deceive\" means «engañar»."),
      fb("I always ___ nervous before a job interview.", "get", "Siempre me [pongo] nervioso antes de una entrevista de trabajo.",
        "«Ponerse» + feeling = \"get\": \"get nervous\", \"get angry\", \"get upset\"."),
      sp("I'm so excited about the trip!", "\"Excited\" is the natural match for «me hace mucha ilusión».",
        "Stress \"SO\" and \"exCIted\".", "Say it in English: ¡Me hace mucha ilusión el viaje!"),
      tr("Me llevo muy bien con mis suegros.", "I get {along|on} {really|very} well with my in-laws.",
        "«Llevarse bien con» = \"get along with\" (US) or \"get on with\" (UK)."),
      wo("My wife and I hit it off on our first date.", "Mi esposa y yo congeniamos en nuestra primera cita.",
        "\"Hit it off\" = like each other immediately. «Conocerse» for the first time is \"meet\"."),
      fb("Ana and her sister ___ over the inheritance and didn't speak for a year.", "fell out", "Ana y su hermana [se pelearon] por la herencia y no se hablaron durante un año.",
        "\"Fall out\" (past: \"fell out\") = argue and stop being friends. The reason takes \"over\" or \"about\"."),
      tr("¿Ya hicieron las paces?", ["Have they made up yet?", "Did they make up yet?", "Have you made up yet?", "Did you make up yet?"],
        "«Hacer las paces» = \"make up\". \"Yet\" goes at the end of questions."),
      mc("Which sentence is correct?", [
        "Let's discuss the schedule at lunch.",
        "Let's discuss about the schedule at lunch.",
        "Let's argue the schedule calmly at lunch.",
        "Let's discuss of the schedule at lunch.",
      ], "\"Discuss\" takes a direct object: \"discuss the schedule\", never *discuss about. And \"argue\" means an angry «discusión»."),
      tr("Cortó con su novio después de tres años.", "She broke up with her boyfriend after three years.",
        "«Cortar con alguien» = \"break up with someone\" (past: \"broke up\")."),
      mc("Translate: «Está casada con un músico.»", [
        "She's married to a musician.",
        "She's married with a musician.",
        "She's married of a musician.",
        "She's marrying with a musician.",
      ], "Spanish «casado con» is \"married to\" in English. *Married with is a classic mistake."),
      wo("You can always rely on your older brother.", "Siempre puedes contar con tu hermano mayor.",
        "\"Rely on\" or \"count on\" = «contar con»."),
      lc("I promise I won't let you down.", [
        "Te prometo que no te voy a fallar.",
        "Te prometo que no te voy a bajar del carro.",
        "Te prometo que no te voy a dejar sola en casa.",
        "Te prometo que no te voy a despertar.",
      ], "\"Let someone down\" = disappoint them, «fallarle a alguien»."),
      tr("Mis amigos me apoyaron cuando me quedé sin trabajo.", "My friends supported me when I lost my job.",
        "\"Support\" = «apoyar». It never means «soportar» (that's \"stand\" or \"put up with\")."),
      mc("Translate: «No soporto a la gente maleducada.»", [
        "I can't stand rude people.",
        "I can't support rude people.",
        "I don't support the rude people.",
        "I can't stand uneducated people.",
      ], "«Soportar» (tolerate) is \"can't stand\". \"Support\" means «apoyar». «Maleducado» is \"rude\"."),
      dc("I've always looked up to my aunt because she's so hard-working.",
        "\"Look up to\" = admire. \"Hard-working\" is a positive personality adjective."),
      dc("She got upset when her best friend didn't invite her to the wedding.",
        "\"Get upset\" = «disgustarse». A change of feeling takes \"get\"."),
      sp("We don't have much in common, but we get along really well.", "\"Have (a lot) in common\" and \"get along\" in one sentence.",
        "Link \"get along\": ge-da-LONG.", "Say it in English: No tenemos mucho en común, pero nos llevamos muy bien."),
    ],
  ),
  // ---------------------------------------------------------------------
  // Drill 2. Health, the mind, education
  // ---------------------------------------------------------------------
  lesson(
    2,
    "Health, the Mind and Education",
    "You will be able to describe symptoms and injuries, talk about getting better, use remember and remind, stress and make up your mind correctly, and talk about exams, degrees and classes without the classic false friends.",
    "Recap: symptoms, memory and exams",
    [
      "\"I have a headache / a sore throat / a fever\" (with \"a\"), \"My back hurts\", \"I broke my arm\" (possessive, no reflexive). «Estar resfriado» is \"have a cold\" (\"constipated\" is «estreñido»), a doctor's «receta» is a \"prescription\", and you \"recover from\" or \"get over\" an illness.",
      "You \"remember\" in your own head but \"remind\" someone else. \"Stressed\" is how you feel, \"stressful\" is the situation; you \"cope with\" problems and \"make up your mind\". You \"take\" an exam and then \"pass\" or \"fail\" it (never *approve), «carrera» is a \"degree\" or \"major\", and «asistir a clase» is \"attend class\".",
    ],
    [
      ["My son has a cough and a sore throat.", "Mi hijo tiene tos y le duele la garganta."],
      ["She sprained her wrist playing volleyball.", "Se torció la muñeca jugando voleibol."],
      ["Can you remind me to call the dentist?", "¿Me recuerdas que llame al dentista?"],
      ["I passed my driving test on the second try.", "Aprobé el examen de manejo al segundo intento."],
    ],
    [
      fb("I can't go to work today. I have a terrible ___.", "headache", "Hoy no puedo ir a trabajar. Tengo un [dolor de cabeza] terrible.",
        "«Dolor de cabeza» = \"headache\", one word, and English needs \"a\": \"a headache\", \"a cough\", \"a fever\"."),
      tr("Tengo fiebre y me moquea la nariz.", "I have a fever and a runny nose.",
        "«Tener fiebre» = \"have a fever\" (with \"a\"), and «me moquea la nariz» = \"I have a runny nose\"."),
      mc("Translate: «Me duele la espalda.»", [
        "My back hurts.",
        "The back hurts me.",
        "Me hurts the back.",
        "I have pain in the back of me.",
      ], "English uses the possessive with parts of the body: \"My back hurts\" or \"I have a backache\"."),
      tr("Me siento un poco mareado desde esta mañana.", ["I've been feeling a {bit|little} dizzy since this morning.", "I've felt a {bit|little} dizzy since this morning."],
        "«Estar mareado» = \"feel dizzy\". \"Feel\" has no reflexive pronoun: never *I feel me."),
      mc("You have a cold. What do you tell the doctor?", [
        "I have a cold.",
        "I'm constipated.",
        "I have a constipation.",
        "I'm cold.",
      ], "«Estar resfriado / constipado» = \"have a cold\". \"Constipated\" means «estreñido», and \"I'm cold\" just means you feel the low temperature."),
      tr("La doctora me dio una receta para unos antibióticos.", "The doctor gave me a prescription for {some |}antibiotics.",
        "A doctor's «receta» is a \"prescription\" (verb: \"prescribe\"). A \"receipt\" is what a store gives you after you pay."),
      fb("I think I'm ___ a cold. My throat feels strange.", "catching", "Creo que me estoy [resfriando]. Siento la garganta rara.",
        "«Resfriarse» = \"catch a cold\". \"I'm catching a cold\" = it's starting now."),
      tr("¿Su hija está tomando algún medicamento?", "Is your daughter taking any {medication|medicine}?",
        "«Medicamento» = \"medicine\" or \"medication\". \"Drugs\" often means illegal drugs, so it's a risky translation."),
      tr("Me rompí el brazo jugando futbol.", "I broke my arm playing {soccer|football}.",
        "English uses the possessive and no reflexive: \"I broke my arm\", never *I broke me the arm. In the US, «futbol» is \"soccer\"."),
      fb("She ___ her ankle when she fell down the stairs.", ["sprained", "twisted", "hurt"], "Se [torció] el tobillo cuando se cayó por las escaleras.",
        "«Torcerse» = \"sprain\" (or \"twist\"). Again, the possessive: \"her ankle\"."),
      mc("Which sentence is correct?", [
        "He got injured in the second half.",
        "He got hurted in the second half.",
        "He injured in the second half.",
        "He got injury in the second half.",
      ], "\"Get injured\" or \"be injured\" = «lesionarse». \"Hurt\" is irregular (hurt, hurt), and \"injury\" is the noun."),
      lc("I have a huge bruise on my knee.", [
        "Tengo un moretón enorme en la rodilla.",
        "Tengo una herida enorme en la rodilla.",
        "Me rompí la rodilla.",
        "Tengo la rodilla muy hinchada.",
      ], "A \"bruise\" is «un moretón». A \"wound\" (/wuːnd/) is «una herida»."),
      tr("Tardé diez días en recuperarme de la gripe.", "It took me ten days to {get over|recover from} the flu.",
        "\"Get over\" (everyday) or \"recover from\" (neutral). In the US it's \"the flu\"."),
      sp("I hope you get better soon.", "\"Get better\" = «mejorarse». The fixed short version is \"Get well soon!\"",
        "Link \"get better\": ge-BE-der.", "Say it in English: Espero que te mejores pronto."),
      fb("Can you ___ me to buy milk on the way home?", "remind", "¿Me [recuerdas] que compre leche de camino a casa?",
        "\"Remind\" = make someone else remember. *Remember me to buy milk is a classic mistake."),
      mc("Which sentence is correct?", [
        "This place reminds me of my grandmother's house.",
        "This place remembers me my grandmother's house.",
        "This place reminds me to my grandmother's house.",
        "This place remembers me of my grandmother's house.",
      ], "\"Remind someone of\" = «recordar a, hacer pensar en». \"Remember\" never takes the person who remembers as an object."),
      tr("Tengo muy buenos recuerdos de esa ciudad.", "I have {very |really |}{good|happy|great} memories of that city.",
        "«Un recuerdo» in your head is \"a memory\". \"Souvenir\" is an object you buy on a trip."),
      tr("Tuvimos que aprendernos la canción de memoria.", ["We had to learn the song by heart.", "We had to memorize the song."],
        "«Aprenderse de memoria» = \"learn by heart\" or \"memorize\"."),
      fb("Teaching is a very ___ job, but I love it.", "stressful", "Dar clases es un trabajo muy [estresante], pero me encanta.",
        "\"Stressful\" describes the situation; \"stressed\" describes how you feel."),
      tr("Estoy muy estresada con los exámenes.", ["I'm {so|really|very} stressed {out |}about {the|my} exams.", "I'm {so|really|very} stressed {out |}with {the|my} exams."],
        "How you feel: \"stressed\" or \"stressed out\". Start \"stressed\" with the s sound: no e before it."),
      wo("How do you cope with stress at work?", "¿Cómo sobrellevas el estrés en el trabajo?",
        "\"Cope with\" = «sobrellevar, afrontar»."),
      fb("I can't make up my ___ about which job to accept.", "mind", "No [me decido] sobre qué trabajo aceptar.",
        "\"Make up your mind\" = «decidirse», always with the possessive: \"my mind\", \"her mind\"."),
      wo("I was going to go to the party, but I changed my mind.", "Iba a ir a la fiesta, pero cambié de opinión.",
        "«Cambiar de opinión» = \"change your mind\". *Change my opinion is understood but much less natural."),
      tr("Ten en cuenta que el museo cierra a las cinco.", "{Keep|Bear} in mind that the museum closes at five.",
        "«Tener en cuenta» = \"keep in mind\" or \"bear in mind\"."),
      mc("Translate: «Aprobé el examen.»", [
        "I passed the exam.",
        "I approved the exam.",
        "I took the exam.",
        "I made the exam.",
      ], "«Aprobar un examen» = \"pass\". \"Approve\" means «dar el visto bueno», and \"take an exam\" just means «presentarse», with no result."),
      fb("I'm ___ my driving test next Tuesday. Wish me luck!", "taking", "El martes que viene [me presento al] examen de manejo. ¡Deséame suerte!",
        "«Presentarse a un examen» = \"take an exam\". The present continuous shows a fixed arrangement."),
      tr("Reprobó química, así que tiene que volver a presentarse.", "{He|She} failed chemistry, so {he|she} has to {retake it|take it again}.",
        "«Reprobar», «suspender» = \"fail\". «Volver a presentarse» = \"retake\" or \"take it again\"."),
      mc("Translate: «Mi hermano siempre saca buenas notas en matemáticas.»", [
        "My brother always gets good grades in math.",
        "My brother always takes good notes in math.",
        "My brother always gets good notes in math.",
        "My brother always approves math with good notes.",
      ], "«Notas» (results) = \"grades\" (US) or \"marks\" (UK). \"Notes\" are «apuntes»."),
      tr("¿Qué carrera estudió tu hermana?", ["What did your sister major in?", "What did your sister study {at|in} {college|university}?", "What was your sister's major?", "What's your sister's degree in?"],
        "«Carrera» (university studies) = \"degree\" or, in the US, \"major\". A \"career\" is your professional life."),
      fb("She ___ from college last year and now works in a bank.", "graduated", "[Se graduó] en la universidad el año pasado y ahora trabaja en un banco.",
        "«Graduarse en» = \"graduate from\". In the US, \"college\" means any university studies."),
      lc("He got a scholarship to study in Canada.", [
        "Consiguió una beca para estudiar en Canadá.",
        "Pagó la matrícula para estudiar en Canadá.",
        "Lo aceptaron en una escuela de Canadá.",
        "Consiguió un título para trabajar en Canadá.",
      ], "A \"scholarship\" = «una beca». \"Tuition\" is the money you pay to study."),
      mc("Which sentence is correct?", [
        "Attendance is compulsory, so I go to class every day.",
        "Assistance is compulsory, so I assist to class every day.",
        "Attendance is compulsory, so I assist class every day.",
        "Assistance is compulsory, so I attend to class every day.",
      ], "«Asistir a clase» = \"attend class\" or \"go to class\"; the noun is \"attendance\". \"Assist\" means «ayudar»."),
      dc("If I were you, I'd see a doctor about that cough.",
        "Second conditional for advice: \"If I were you, I'd\" + verb. \"A cough\" with the article."),
      dc("I was so stressed out before the exam, but I passed with a good grade.",
        "\"Stressed out\" (how you feel), \"pass\" an exam and get \"a good grade\"."),
      sp("I'm a bit under pressure at work, but I'm learning to cope with it.", "\"Under pressure\" = «bajo presión», and \"cope with\" = «sobrellevar».",
        "Stress \"PRESSure\" and \"COPE\".", "Say it in English: Estoy un poco bajo presión en el trabajo, pero estoy aprendiendo a sobrellevarlo."),
    ],
  ),
  // ---------------------------------------------------------------------
  // Drill 3. Arts, idioms, dependent prepositions, prefixes + whole unit
  // ---------------------------------------------------------------------
  lesson(
    3,
    "Culture, Idioms, Prepositions and Prefixes",
    "You will be able to talk about plays, films and exhibitions, use common idioms, choose the right preposition after verbs and adjectives, build words with prefixes and -en, -ize, -ify, and combine all the vocabulary of the unit.",
    "Recap: plot, idioms, depend on and unfair",
    [
      "The \"plot\" is «el argumento» (an \"argument\" is a fight), the \"cast\" is «el reparto», a show's «público» is the \"audience\", and a film gets good \"reviews\" from \"critics\". Idioms are fixed: \"a piece of cake\", \"cost an arm and a leg\", \"under the weather\", \"hit the nail on the head\".",
      "Learn prepositions in chunks: \"depend on\", \"consist of\", \"insist on\", \"good at\", \"proud of\", \"married to\", \"arrive in\" a city / \"at\" a building. Prefixes: \"unfair\", \"dishonest\", \"impatient\", \"irresponsible\", \"misunderstand\", \"oversleep\", \"rewrite\"; verbs: \"strengthen\", \"simplify\". And \"realize\" means «darse cuenta».",
    ],
    [
      ["The plot was hard to follow, but the cast was brilliant.", "El argumento era difícil de seguir, pero el reparto era genial."],
      ["The interview was a piece of cake.", "La entrevista fue pan comido."],
      ["It depends on the price.", "Depende del precio."],
      ["Sorry, I think I misunderstood you.", "Perdona, creo que te entendí mal."],
    ],
    [
      tr("El argumento de la película es muy original.", "The plot of the {movie|film} is {very|really} original.",
        "«Argumento» of a story = \"plot\". An \"argument\" is «una discusión»."),
      fb("The novel is ___ in Mexico City in the 1950s.", "set", "La novela [transcurre] en la Ciudad de México en los años cincuenta.",
        "A story is \"set in\" a place or time = «transcurre en»."),
      mc("Translate: «El público aplaudió durante diez minutos.»", [
        "The audience applauded for ten minutes.",
        "The public applauded for ten minutes.",
        "The audiences applauded for ten minutes.",
        "The spectators public applauded for ten minutes.",
      ], "People watching a show are the \"audience\". \"The public\" means people in general («abierto al público»)."),
      tr("El museo está abierto al público los domingos.", "The museum is open to the public on Sundays.",
        "Here «público» means people in general, so it's \"the public\"."),
      fb("The film got excellent ___, but it wasn't popular.", "reviews", "La película recibió [críticas] excelentes, pero no fue popular.",
        "«Críticas» of a film or book = \"reviews\". A \"critic\" is the person who writes them."),
      lc("Many people think it's his masterpiece.", [
        "Mucha gente piensa que es su obra maestra.",
        "Mucha gente piensa que es su primera obra.",
        "Mucha gente piensa que es su maestro.",
        "Mucha gente piensa que es su peor obra.",
      ], "A \"masterpiece\" = «una obra maestra»."),
      tr("Hay una exposición de fotografía en la galería.", ["There's a photography {exhibition|exhibit} at the gallery.", "There's a photo {exhibition|exhibit} at the gallery."],
        "«Exposición» of art = \"exhibition\" (US also \"exhibit\"). \"Exposition\" is rare and formal."),
      mt("Match each idiom with its meaning.", [
        ["a piece of cake", "pan comido"],
        ["cost an arm and a leg", "costar un ojo de la cara"],
        ["once in a blue moon", "muy de vez en cuando"],
        ["under the weather", "un poco enfermo"],
        ["the last straw", "la gota que colmó el vaso"],
        ["pull someone's leg", "tomarle el pelo a alguien"],
      ], "Idioms are fixed: you can't change their words. Many have a Spanish equivalent with a different image."),
      fb("Fixing the bike was a ___ of cake.", "piece", "Arreglar la bici fue [pan] comido.",
        "The idiom is \"a piece of cake\". Never *a slice of cake or *a cake piece."),
      tr("Esos zapatos cuestan un ojo de la cara.", "Those shoes cost an arm and a leg.",
        "Spanish uses an eye; English uses \"an arm and a leg\"."),
      tr("Hoy mi jefe no se encuentra muy bien.", ["My boss is feeling a {bit |little |}under the weather today.", "My boss feels a {bit |little |}under the weather today.", "My boss isn't feeling very well today.", "My boss doesn't feel very well today."],
        "\"Under the weather\" = slightly ill. It has nothing to do with the weather."),
      fb("Good point! You've hit the ___ on the head.", "nail", "¡Buena observación! Has dado en el [clavo].",
        "«Dar en el clavo» = \"hit the nail on the head\"."),
      sp("Let's make sure we're all on the same page.", "\"Be on the same page\" = agree or understand something in the same way.",
        "Stress \"SURE\", \"SAME\" and \"PAGE\".", "Say it in English: Asegurémonos de que todos estamos de acuerdo."),
      mc("Which sentence is correct?", [
        "It depends on the traffic.",
        "It depends of the traffic.",
        "It depends from the traffic.",
        "It depends in the traffic.",
      ], "«Depender de» = \"depend on\". *Depend of is one of the most frequent Spanish-speaker mistakes."),
      wo("The course consists of ten classes.", "El curso consiste en diez clases.",
        "«Consistir en» = \"consist of\", never *consist in (in everyday English)."),
      fb("She insisted ___ paying for the taxi.", "on", "Insistió [en] pagar el taxi.",
        "\"Insist on\" + -ing. After a preposition the verb always takes -ing."),
      tr("Anoche soñé con mis vacaciones.", "Last night I dreamed {about|of} my vacation.",
        "«Soñar con» = \"dream about\" or \"dream of\", never *dream with. (British English also uses \"dreamt\".)"),
      fb("My son is really good ___ drawing.", "at", "Mi hijo es muy bueno [para] dibujar.",
        "\"Good at\" / \"bad at\" + noun or -ing. *Good in drawing is a typical mistake."),
      tr("Tu abuela está muy orgullosa de ti.", "Your grandmother is {very|so|really} proud of you.",
        "\"Proud of\" = «orgulloso de»."),
      mc("Complete: \"We arrived ___ Chicago at midnight and ___ the hotel half an hour later.\"", ["in / at", "to / to", "at / in", "in / to"],
        "\"Arrive in\" a city or country, \"arrive at\" a building or station. Never *arrive to."),
      tr("¿A qué hora llegaste a casa?", ["What time did you {get|arrive|come} home?", "When did you {get|arrive|come} home?"],
        "With \"home\" there's no preposition: \"arrive home\", \"get home\"."),
      wo("Can you listen to this song for a minute?", "¿Puedes escuchar esta canción un momento?",
        "\"Listen to\" needs a preposition in English, but «escuchar» doesn't in Spanish."),
      fb("It's ___ to park on this side of the street.", "illegal", "Es [ilegal] estacionarse de este lado de la calle.",
        "Before l, the negative prefix becomes \"il-\": \"illegal\" (double l)."),
      mc("Translate: «¡Es injusto!»", ["It's unfair!", "It's infair!", "It's disfair!", "It's unjust fair!"],
        "«Injusto» = \"unfair\". Spanish uses «in-» where English often uses \"un-\": \"uncomfortable\", \"unexpected\"."),
      tr("Lo siento, pero no estoy de acuerdo con el plan.", ["{I'm sorry|Sorry}, but I disagree with the plan.", "{I'm sorry|Sorry}, but I don't agree with the plan."],
        "«No estar de acuerdo con» = \"disagree with\" (dis- + agree). Note: \"I disagree\", never *I'm disagree."),
      tr("Llegué tarde al trabajo porque me quedé dormida.", ["I was late for work because I overslept.", "I got to work late because I overslept.", "I arrived late {for|at} work because I overslept."],
        "«Quedarse dormido» (and wake up late) = \"oversleep\" (past: \"overslept\")."),
      lc("Teachers in my country are overworked and underpaid.", [
        "En mi país los maestros trabajan demasiado y cobran poco.",
        "En mi país los maestros trabajan poco y cobran demasiado.",
        "En mi país los maestros no tienen trabajo ni sueldo.",
        "En mi país los maestros cobran las horas extra.",
      ], "\"Over-\" = too much; \"under-\" = not enough."),
      fb("Can you ___ the instructions? Nobody understands them.", "simplify", "¿Puedes [simplificar] las instrucciones? Nadie las entiende.",
        "\"Simple\" + -ify = \"simplify\". Other verbs: \"clarify\", \"modernize\", \"strengthen\"."),
      mc("Translate: «No me di cuenta de que la tienda estaba cerrada.»", [
        "I didn't realize the store was closed.",
        "I didn't realize me that the store was closed.",
        "I didn't give me account the store was closed.",
        "I didn't carry out that the store was closed.",
      ], "«Darse cuenta» = \"realize\". For «realizar» (a study, a task), use \"carry out\" or \"do\"."),
      tr("Ojalá no hubiera sido tan impaciente con él.", "I wish I hadn't been so impatient with him.",
        "Past regret: \"I wish\" + past perfect. \"Impatient\" uses \"im-\" before p."),
      tr("Es un profesor cuyas clases nunca son aburridas.", "He's a teacher whose classes are never boring.",
        "\"Whose\" for possession in a relative clause, and \"boring\" (-ing) because the classes cause the feeling."),
      tr("Aunque estaba resfriado, fue a ver la obra de teatro.", ["{Although|Even though} he had a cold, he went to see the play.", "{Despite|In spite of} having a cold, he went to see the play."],
        "\"Although\" + clause, or \"despite\" + -ing. «Estar resfriado» = \"have a cold\"; a theater piece is \"a play\"."),
      dc("I'm not used to getting up so early, but I'm getting used to it.",
        "\"Be used to\" and \"get used to\" + -ing or a noun: the \"to\" is a preposition."),
      dc("She was really disappointed with the ending of the play.",
        "\"Disappointed with\" and \"the ending\" («el final»)."),
      sp("I was so embarrassed when I fell asleep in the middle of the performance.", "\"Embarrassed\" (not pregnant!) and \"performance\" = one showing of a play or concert.",
        "Stress emBARRassed and perFORMance.", "Say it in English: Me dio muchísima vergüenza quedarme dormido en medio de la función."),
    ],
  ),
];
