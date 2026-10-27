// Synced from cheneygross-afk/lengo:src/lib/lessons/en-b2-u07-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise, Lesson } from "./types";

// Required drill lessons for EN-B2 unit u07 (wishes and regrets: wish, if only, hope, should have, could have, would have, would rather and it's time): a short recap, then graded practice.
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
  slug: `en-b2-${topic}-unit-drill-${n}`,
  level: "EN-B2",
  number: n,
  title: `Drill: ${title}`,
  summary,
  duration: `${Math.round((exercises.reduce((s, e) => s + SECONDS[e.type], 0) + 40) / 60)} min`,
  sections: [{ heading, body, examples: examples.map(([es, en]) => ({ es, en })) }],
  exercises,
});

export const EN_B2_U07_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. Wish and if only (present and past), wish + would, and
  // hope or wish
  // ---------------------------------------------------------------------
  lesson(
    1,
    "u07-wish-if-only-hope",
    "Wish, If Only and Hope",
    "Wish the present or the past were different with wish and if only, complain with wish + would, and choose between hope and wish for every «ojalá».",
    "Recap: one «ojalá», several English forms",
    [
      "Unreal present: \"wish\" / \"if only\" + past simple (\"I wish I had a car\", \"I wish it were Friday\"). Past regret: + past perfect (\"I wish I hadn't said that\"). Complaints about someone else's behavior: + \"would\" (\"I wish you would stop interrupting\"), never *I wish I would.",
      "\"Hope\" is for real possibilities and keeps normal tenses: \"I hope you pass\", \"I hope it doesn't rain\". The Spanish verb after «ojalá» is your clue: present subjunctive = hope; imperfect or pluperfect subjunctive = wish. «Espero que» is always \"hope\".",
    ],
    [
      ["I wish I knew how to fix this.", "Ojalá supiera cómo arreglar esto."],
      ["If only we had bought the tickets earlier!", "¡Si al menos hubiéramos comprado los boletos antes!"],
      ["I wish my neighbor would turn the music down.", "Ojalá mi vecino bajara la música."],
      ["I hope the interview goes well.", "Ojalá te vaya bien en la entrevista."],
    ],
    [
      fb(
        "I wish I ___ more free time.",
        "had",
        "Ojalá [tuviera] más tiempo libre.",
        "\"Wish\" + past simple for an unreal present: \"had\". *I wish I have is the typical mistake: the past form means \"not real\", not past time.",
      ),
      fb(
        "I wish I ___ the answer.",
        "knew",
        "Ojalá [supiera] la respuesta.",
        "«Supiera» (imperfect subjunctive) = \"knew\". The present \"know\" is wrong after \"wish\" for an unreal present.",
      ),
      tr(
        "Ojalá viviera más cerca de mi trabajo.",
        "I wish I lived closer to {my job|work|my office}.",
        "\"I wish I lived\": English needs the subject twice (\"I wish I\"), and the verb steps back to the past.",
      ),
      fb(
        "I wish it ___ Friday already.",
        ["were", "was"],
        "Ojalá ya [fuera] viernes.",
        "With \"to be\", careful English uses \"were\" for every person: \"I wish it were\". \"Was\" is common in conversation.",
      ),
      tr(
        "Ojalá mi hermana no estuviera tan lejos.",
        "I wish my sister {weren't|wasn't} so far away.",
        "Unreal present with \"be\": \"weren't\" (or informal \"wasn't\"). Not *I wish my sister isn't.",
      ),
      mc(
        "Which sentence is correct?",
        [
          "I wish I could speak Japanese.",
          "I wish I can speak Japanese.",
          "I wish I would speak Japanese.",
          "I wish could I speak Japanese.",
        ],
        "\"Can\" steps back to \"could\" after \"wish\". *I wish I would is wrong: you don't use \"would\" about your own abilities.",
      ),
      fb(
        "I wish I ___ that to my boss yesterday.",
        "hadn't said",
        "Ojalá [no le hubiera dicho] eso a mi jefe ayer.",
        "A regret about the past needs the past perfect: \"hadn't said\". *I wish I didn't say is about now, and *I wish I wouldn't have said is wrong in careful English.",
      ),
      wo(
        "I wish I had studied engineering",
        "Ojalá hubiera estudiado ingeniería.",
        "«Ojalá hubiera...» = \"I wish I had\" + participle. The real past (\"I didn't study\") moves one step back.",
      ),
      tr(
        "¡Si al menos hubiéramos salido más temprano!",
        "If only we had left {earlier|sooner}!",
        "\"If only\" + past perfect: a stronger, more emotional regret. It can stand alone with an exclamation mark.",
      ),
      wo(
        "If only I had a bigger kitchen",
        "Si al menos tuviera una cocina más grande.",
        "\"If only\" + past simple = unreal present: I don't have a bigger kitchen.",
      ),
      lc(
        "I wish I'd taken that photography course.",
        [
          "The speaker didn't take the course and regrets it.",
          "The speaker took the course and enjoyed it.",
          "The speaker wants to take the course next year.",
          "The speaker is taking the course now.",
        ],
        "\"I'd taken\" = \"I had taken\": wish + past perfect expresses regret about something that didn't happen.",
        "What does the speaker mean?",
      ),
      dc(
        "If only I'd listened to my mother.",
        "\"I'd listened\" = \"I had listened\": a past regret with \"if only\".",
      ),
      fb(
        "I wish you ___ interrupting me when I'm talking.",
        "would stop",
        "Ojalá [dejaras] de interrumpirme cuando estoy hablando.",
        "Annoyance about someone else's behavior: \"wish\" + \"would\" + verb. Polite on the surface, but clearly a complaint.",
      ),
      tr(
        "Ojalá dejara de llover.",
        ["{I wish|If only} it would stop raining.", "{I wish|If only} the rain would stop."],
        "A situation you want to change but can't control: \"I wish it would stop\". \"Stop\" + -ing: \"stop raining\".",
      ),
      tr(
        "Ojalá mi compañero de cuarto no dejara los platos sucios en el fregadero.",
        ["I wish my roommate wouldn't leave dirty dishes in the sink.", "I wish my roommate wouldn't leave the dirty dishes in the sink.", "I wish my roommate didn't leave {the |}dirty dishes in the sink."],
        "An irritating habit of someone else: \"wouldn't leave\". \"Didn't leave\" is also correct.",
      ),
      mc(
        "Which sentence is correct?",
        [
          "I wish I didn't eat so much sugar.",
          "I wish I would eat less sugar.",
          "I wish I would not eat so much sugar.",
          "I wish I don't eat so much sugar.",
        ],
        "About yourself, use the past simple or \"could\", not \"would\": you control your own actions. *I wish I would... is a common mistake.",
      ),
      mc(
        "Which sentence is correct?",
        [
          "I wish I were rich.",
          "I wish I would be rich.",
          "I wish I am rich.",
          "I wish I would have been rich.",
        ],
        "\"Would\" isn't used for states (be, have, know). A state takes the past simple: \"I wish I were rich\".",
      ),
      mt(
        "Match each Spanish sentence with its English translation.",
        [
          ["Ojalá llueva mañana.", "I hope it rains tomorrow."],
          ["Ojalá lloviera más aquí.", "I wish it rained more here."],
          ["Ojalá hubiera llovido ayer.", "I wish it had rained yesterday."],
          ["Ojalá dejara de llover.", "I wish it would stop raining."],
        ],
        "Present subjunctive (possible) = \"hope\" + present. Imperfect subjunctive (unreal now) = \"wish\" + past simple. Pluperfect (too late) = \"wish\" + past perfect. Wanting something to change = \"wish\" + \"would\".",
      ),
      fb(
        "I ___ you pass your driving test next week.",
        "hope",
        "[Espero que] apruebes el examen de manejo la próxima semana.",
        "A real possibility in the future: \"hope\" + present. *I wish you pass is wrong: \"wish\" is for unreal situations.",
      ),
      tr(
        "Espero que hayas tenido un buen viaje.",
        "I hope {you|you've} had a {good|nice} trip.",
        "\"Hope\" can look at the past when you don't know what happened. It's real, so no backshift: \"you had\". Never *I wait that.",
      ),
      tr(
        "Ojalá apruebes el examen.",
        ["I hope you pass the {exam|test}.", "I hope you'll pass the {exam|test}.", "Hopefully {you|you'll} pass the {exam|test}."],
        "«Ojalá» + present subjunctive is a realistic wish: \"hope\" + present. «Ojalá aprobaras» would be \"wish\".",
      ),
      mc(
        "\"Is it going to rain at the wedding?\" \"I ___.\" (You want good weather.)",
        [
          "hope not",
          "hope no",
          "don't hope",
          "hope that not",
        ],
        "Short answers: \"I hope so\" («eso espero») and \"I hope not\" («espero que no»). Never *I hope no or *I hope yes.",
      ),
      fb(
        "We ___ to see you at the conference in May.",
        "hope",
        "[Esperamos] verte en la conferencia en mayo.",
        "Same subject: \"hope to\" + base form. «Esperar» here is \"hope\", not \"wait\" or \"expect\".",
      ),
      tr(
        "Te deseo mucha suerte en tu nuevo trabajo.",
        ["I wish you {good luck|lots of luck|the best of luck|luck} {in|with|at} your new job.", "I wish you all the best {in|with|at} your new job."],
        "\"Wish\" + person + noun sends good wishes: \"I wish you luck\". This is the one use of \"wish\" that isn't unreal.",
      ),
      mc(
        "Which sentence is correct?",
        [
          "I hope you have a great time in Cancun.",
          "I wish you have a great time in Cancun.",
          "I wish you to have a great time in Cancun.",
          "I hope you would have a great time in Cancun.",
        ],
        "\"Wish you\" needs a noun (\"I wish you a great trip\"). With a verb, use \"hope\": \"I hope you have\".",
      ),
      lc(
        "We wish you a merry Christmas.",
        [
          "Sending good wishes for Christmas.",
          "Saying Christmas wasn't merry.",
          "Regretting last Christmas.",
          "Asking about Christmas plans.",
        ],
        "\"Wish\" + person + noun is a fixed formula for good wishes, not an unreal situation.",
        "What is the speaker doing?",
      ),
      dc(
        "I hope the package arrives before the weekend.",
        "\"Hope\" + present for a real future possibility: \"arrives\", not *will arrive (although \"will\" is possible after \"hope\", the present is more natural).",
      ),
      tr(
        "Ojalá supiera tocar la guitarra; habría tocado en la fiesta.",
        ["I wish I could play the guitar; I would have played at the party.", "I wish I knew how to play the guitar; I would have played at the party.", "I wish I could play {the |}guitar, I would have played at the party."],
        "«Supiera tocar» = \"could play\" or \"knew how to play\" (unreal present). Then a past result: \"would have played\" (like a mixed conditional).",
      ),
      tr(
        "Ojalá no hubiera vendido mi carro; ahora tengo que tomar dos autobuses.",
        ["I wish I hadn't sold my car; now I have to take two buses.", "I wish I hadn't sold my car, now I have to take two buses.", "If only I hadn't sold my car; now I have to take two buses."],
        "Past regret: \"hadn't sold\". *I wish I didn't sell is a classic mistake: that form is for the present.",
      ),
      fb(
        "If only my parents ___ here now to see this!",
        "were",
        "¡Si al menos mis papás [estuvieran] aquí ahora para ver esto!",
        "\"If only\" + past simple for an unreal present: «estuvieran» = \"were\". With a plural subject, \"was\" is impossible.",
      ),
      tr(
        "Espero que no te moleste, pero ojalá hablaras más despacio.",
        ["I hope you don't mind, but I wish you would speak more slowly.", "I hope you don't mind, but I wish you spoke more slowly.", "I hope you don't mind, but I wish you'd talk more slowly."],
        "Both verbs in one sentence: \"hope\" (real: maybe you mind) and \"wish\" + would (a complaint about how someone behaves).",
      ),
      sp(
        "I wish I had more time to read.",
        "Unreal present: \"wish\" + past simple. «Ojalá tuviera más tiempo para leer.»",
        "Stress \"wish\" and \"time\": \"I WISH I had more TIME to read.\"",
        "Say in English: «Ojalá tuviera más tiempo para leer.»",
      ),
      sp(
        "I hope you feel better soon.",
        "A real possibility: \"hope\" + present. It's the standard phrase for someone who is sick.",
        "\"Feel better\" links smoothly: \"FEEL-better\".",
        "Say in English: «Espero que te mejores pronto.»",
      ),
    ],
  ),
  // ---------------------------------------------------------------------
  // Drill 2. Should have, could have, would have; fixing wish errors;
  // turning facts and complaints into wishes
  // ---------------------------------------------------------------------
  lesson(
    2,
    "u07-should-could-would-have",
    "Should Have, Could Have and Turning Facts into Wishes",
    "Criticize and look back with should have, could have and would have, fix the typical wish mistakes, and turn facts and complaints into wishes and regrets.",
    "Recap: modal + have + participle, and the flip",
    [
      "\"Should have\" = it was the right thing, but it didn't happen (criticism or regret); \"could have\" = it was possible, but it didn't happen; \"would have\" = the imaginary result of a different past. Always modal + \"have\" + past participle: never *should had or *could have went.",
      "To turn a fact into a wish, flip it and step back: \"I don't have a car\" → \"I wish I had a car\"; \"I sold my bike\" → \"I wish I hadn't sold my bike\" (or \"I shouldn't have sold it\"); \"He never helps\" → \"I wish he would help\".",
    ],
    [
      ["You should have told me you were coming.", "Deberías haberme dicho que venías."],
      ["We could have taken the train, but we drove.", "Podríamos haber tomado el tren, pero fuimos en carro."],
      ["I would have helped you, but you didn't ask.", "Te habría ayudado, pero no me pediste."],
      ["My phone is so slow. I wish it were faster.", "Mi celular es muy lento. Ojalá fuera más rápido."],
    ],
    [
      fb(
        "You ___ me. I would have picked you up at the station.",
        "should have called",
        "[Deberías haberme llamado]. Te habría recogido en la estación.",
        "Criticism of the past: \"should have\" + participle. «Deberías haber llamado» is not *you should call (present advice).",
      ),
      fb(
        "I ___ so much at dinner. Now I feel sick.",
        "shouldn't have eaten",
        "[No debería haber comido] tanto en la cena. Ahora me siento mal.",
        "Regret about something you did: \"shouldn't have\" + participle. Eat, ate, eaten: not *shouldn't have ate.",
      ),
      tr(
        "Deberías haber guardado el recibo.",
        "You should have kept the receipt.",
        "Keep, kept, kept. «Deberías haber» = \"should have\"; the verb \"have\" never changes to \"had\" after a modal.",
      ),
      mc(
        "Which sentence is correct?",
        [
          "She should have asked for help.",
          "She should had asked for help.",
          "She should have ask for help.",
          "She should of asked for help.",
        ],
        "Modal + \"have\" + participle: \"should have asked\". Not *should had, not the base form, and *should of is a spelling mistake that comes from the sound /əv/.",
      ),
      tr(
        "Deberían haber pedido permiso primero.",
        ["They should have asked {for permission|permission} first.", "They ought to have asked {for permission|permission} first."],
        "\"Should have\" or the slightly more formal \"ought to have\". «Pedir permiso» = \"ask (for) permission\".",
      ),
      fb(
        "We ___ a taxi, but we decided to walk.",
        "could have taken",
        "[Podríamos haber tomado] un taxi, pero decidimos caminar.",
        "\"Could have\" = a real option in the past that nobody took. Take, took, taken.",
      ),
      tr(
        "¡Podrías haberme avisado!",
        ["You could have told me!", "You could have warned me!", "You could have let me know!"],
        "\"You could have...!\" is a soft reproach: you didn't tell me, and you should have.",
      ),
      tr(
        "El accidente podría haber sido mucho peor.",
        "The accident could have been much worse.",
        "\"Could have been\" for a lucky escape: it was possible, but it didn't happen.",
      ),
      fb(
        "I ___ it without your help. Thank you so much.",
        "couldn't have done",
        "No [podría haberlo hecho] sin tu ayuda. Muchas gracias.",
        "\"Couldn't have\" + participle = it was impossible. Do, did, done.",
      ),
      mc(
        "«Deberías haber ido al médico.» Which is the correct translation?",
        [
          "You should have gone to the doctor.",
          "You could have gone to the doctor.",
          "You would have gone to the doctor.",
          "You should go to the doctor.",
        ],
        "«Debería haber» = \"should have\" (it was the right thing). «Podría haber» = \"could have\"; «habría» = \"would have\". Don't mix up «debería» and «podría».",
      ),
      tr(
        "Te habría prestado mi carro, pero no me lo pediste.",
        "I would have lent you my car, but you didn't ask {me|for it|me for it|}.",
        "\"Would have\" = an imaginary result: if you had asked, I would have lent it. Lend, lent, lent.",
      ),
      lc(
        "You shoulda seen his face!",
        [
          "You should have seen his face!",
          "You should see his face!",
          "You saw his face.",
          "You could have seen his face.",
        ],
        "\"Shoulda\" is how \"should have\" sounds in fast speech. In writing, use \"should have\" or \"should've\".",
      ),
      dc(
        "We should've left earlier.",
        "\"Should've\" = \"should have\". It sounds like \"SHOOD-uv\", but it is never written *should of.",
      ),
      mt(
        "Match each sentence with its meaning.",
        [
          ["You should have called.", "It was the right thing, and you didn't do it."],
          ["You could have called.", "It was possible, but you didn't do it."],
          ["I would have called.", "In a different situation, I'd have done it."],
          ["I wish I had called.", "I regret that I didn't do it."],
        ],
        "Same pattern, different modals: \"should have\" (criticism), \"could have\" (unused possibility), \"would have\" (imaginary result). \"I wish I had\" + participle is a regret about my own past.",
      ),
      mc(
        "Lucia writes: *I wish I have a bigger apartment. What's the correction?",
        [
          "I wish I had a bigger apartment.",
          "I wish I would have a bigger apartment.",
          "I hope I had a bigger apartment.",
          "I wish I am having a bigger apartment.",
        ],
        "An unreal present needs the past simple after \"wish\": \"had\". \"Would\" isn't used for states like \"have\".",
      ),
      mc(
        "*If only I didn't went to that party. What's the correction?",
        [
          "If only I hadn't gone to that party.",
          "If only I didn't go to that party.",
          "If only I wouldn't have gone to that party.",
          "If only I hadn't went to that party.",
        ],
        "A past regret needs the past perfect with the participle: \"hadn't gone\". *Didn't went is a double past, and *hadn't went has the wrong form.",
      ),
      fb(
        "Fact: I didn't save any money last year. Wish: I wish I ___ some money last year.",
        "had saved",
        "Ojalá [hubiera ahorrado] algo de dinero el año pasado.",
        "Flip the negative into a positive and step back to the past perfect: \"had saved\".",
      ),
      tr(
        "No ahorré nada. Debería haber ahorrado más.",
        "I didn't save {anything|any money}. I {should|ought to} have saved more.",
        "The same regret with \"should have\": it sounds more like a judgment about the right thing to do.",
      ),
      fb(
        "Fact: My apartment is tiny. Wish: I wish my apartment ___ bigger.",
        ["were", "was"],
        "Ojalá mi departamento [fuera] más grande.",
        "Present fact, so step back to the past: \"is\" becomes \"were\" (or informal \"was\").",
      ),
      fb(
        "Fact: I can't swim. Wish: I wish I ___ swim.",
        "could",
        "Ojalá [supiera] nadar.",
        "\"Can't\" becomes \"could\": \"I wish I could swim\". Never *I wish I would swim.",
      ),
      wo(
        "I wish I hadn't shouted at my brother",
        "Ojalá no le hubiera gritado a mi hermano.",
        "Fact: I shouted. Regret: \"I wish I hadn't shouted\". «Gritarle a alguien» = \"shout at someone\".",
      ),
      wo(
        "I shouldn't have shouted at my brother",
        "No debería haberle gritado a mi hermano.",
        "The same regret with \"shouldn't have\" + participle.",
      ),
      tr(
        "Mi hermano nunca ayuda en casa. Ojalá ayudara.",
        ["My brother never helps at home. I wish he would help.", "My brother never helps around the house. I wish he would help.", "My brother never helps at home. I wish he helped."],
        "Someone else's habit: \"I wish he would help\". \"I wish he helped\" is also possible.",
      ),
      tr(
        "Siempre llega tarde. Ojalá llegara a tiempo.",
        ["He always arrives late. I wish he would arrive on time.", "She always arrives late. I wish she would arrive on time.", "He's always late. I wish he would be on time."],
        "A habit that annoys you: \"wish\" + \"would\" + action. Spanish leaves out the subject; choose \"he\" or \"she\".",
      ),
      mc(
        "Fact: \"Our manager is so rude.\" Which wish is correct?",
        [
          "I wish our manager weren't so rude.",
          "I wish our manager wouldn't be so rude.",
          "I wish our manager isn't so rude.",
          "I wish our manager hadn't been so rude now.",
        ],
        "\"Rude\" is a state, so use the past simple (\"weren't\"), not \"would\". Present tense after \"wish\" is never right for an unreal present.",
      ),
      lc(
        "I could have been a musician, but I chose medicine.",
        [
          "Music was a real option, but the speaker didn't choose it.",
          "The speaker is a musician.",
          "The speaker was forced to study medicine.",
          "The speaker regrets not being a doctor.",
        ],
        "\"Could have been\" = a possibility in the past that didn't happen.",
        "What does the speaker mean?",
      ),
      dc(
        "I wish I'd brought a jacket. It's freezing.",
        "\"I'd brought\" = \"I had brought\": a regret about the past with wish + past perfect.",
      ),
      tr(
        "Si hubiera revisado el correo, no me habría perdido la reunión. Debería haberlo revisado.",
        "If I had checked my {email|emails|mail}, I wouldn't have missed the meeting. I should have checked it.",
        "Third conditional plus \"should have\": the same regret from two angles. «Revisar el correo» = \"check my email\".",
      ),
      tr(
        "Ojalá no hubiera dicho eso; podría haberme callado.",
        ["I wish I hadn't said that; I could have kept quiet.", "I wish I hadn't said that; I could have stayed quiet.", "I wish I hadn't said that, I could have kept my mouth shut.", "I wish I hadn't said that; I could have said nothing."],
        "\"Wish\" + past perfect for the regret, then \"could have\" for the option you didn't take.",
      ),
      fb(
        "We ___ won the game if our goalkeeper hadn't been injured.",
        "would have",
        "[Habríamos] ganado el partido si nuestro portero no se hubiera lesionado.",
        "\"Would have\" goes in the result, never after \"if\". «Habríamos ganado» = \"we would have won\".",
      ),
      tr(
        "No deberías haber manejado tan rápido; podrías haber tenido un accidente.",
        ["You shouldn't have driven so fast; you could have had an accident.", "You shouldn't have driven so fast, you could have had an accident.", "You shouldn't have driven so fast; you could have crashed."],
        "Drive, drove, driven: \"shouldn't have driven\" (criticism) + \"could have had\" (a danger that didn't happen). Not *shouldn't have drove.",
      ),
      sp(
        "You should have seen the view from the top.",
        "\"You should have seen...\" is also a fixed expression to say something was amazing.",
        "Fast speech: \"You shoulda seen the view.\"",
        "Say in English: «¡Hubieras visto el paisaje desde arriba!»",
      ),
      sp(
        "I wish my neighbors wouldn't park in front of my garage.",
        "A complaint about other people's habit: \"wish\" + \"wouldn't\".",
        "\"Wouldn't\" = \"WOOD-nt\", with a soft d.",
        "Say in English: «Ojalá mis vecinos no se estacionaran frente a mi cochera.»",
      ),
    ],
  ),
  // ---------------------------------------------------------------------
  // Drill 3. It's time + past, would rather, letters to your younger
  // self, and the whole unit mixed
  // ---------------------------------------------------------------------
  lesson(
    3,
    "u07-hypotheticals-mixed",
    "Wishes, Regrets and Preferences Mixed",
    "Use it's time and would rather with the past simple, write regrets and lessons to your younger self, and choose confidently between wish, hope, should have and conditionals.",
    "Recap: one logic, step back to be unreal",
    [
      "\"It's time\" + subject + past simple means we should do it now: \"It's time we changed the process\". Without criticism, use \"It's time to\" + verb. \"Would rather\" + base form is about your own preference (\"I'd rather stay home\"); \"would rather\" + person + past simple is about someone else (\"I'd rather you didn't smoke here\").",
      "Everything in this unit follows one logic: past simple for an unreal present (\"I wish I had\", \"If I had\", \"I'd rather you came\"), past perfect for an unreal past (\"I wish I had had\", \"If I had known\"). \"Hope\" and the first conditional are real, so they keep normal tenses.",
    ],
    [
      ["It's about time you got a haircut.", "Ya es hora de que te cortes el pelo."],
      ["I'd rather not talk about it.", "Preferiría no hablar de eso."],
      ["I'd rather you didn't tell anyone.", "Preferiría que no se lo dijeras a nadie."],
      ["If you had studied design, you would have found your passion earlier.", "Si hubieras estudiado diseño, habrías encontrado tu pasión antes."],
    ],
    [
      fb(
        "It's time we ___ a new car. This one keeps breaking down.",
        "bought",
        "Ya es hora de que [compremos] un carro nuevo. Este se descompone a cada rato.",
        "\"It's time\" + subject + past simple: \"bought\". The past form means \"we haven't done it, and we should\". Spanish uses the subjunctive «compremos».",
      ),
      tr(
        "Ya es hora de que te busques un trabajo.",
        ["It's time you {found|got|looked for} a job.", "It's about time you {found|got|looked for} a job.", "It's high time you {found|got|looked for} a job."],
        "\"It's (about / high) time\" + past simple, often with criticism. Not *It's time you find.",
      ),
      mc(
        "Which sentence is correct?",
        [
          "It's time to go. The taxi is here.",
          "It's time we go. The taxi is here.",
          "It's time going. The taxi is here.",
          "It's time that we will go. The taxi is here.",
        ],
        "Without a subject, \"It's time to\" + base form. With a subject, the past simple: \"It's time we went\". *It's time we go mixes the two.",
      ),
      wo(
        "It's high time the government did something about it",
        "Ya es hora de que el gobierno haga algo al respecto.",
        "\"It's high time\" + subject + past simple (\"did\"): a strong criticism.",
      ),
      tr(
        "Es hora de que los niños se vayan a dormir.",
        ["It's time for the {kids|children} to go to bed.", "It's time the {kids|children} went to bed.", "It's time for the {kids|children} to go to sleep."],
        "Two correct patterns: \"It's time for\" + person + \"to\" + verb, or \"It's time\" + subject + past simple (\"went\").",
      ),
      fb(
        "I'd rather ___ home tonight. I'm exhausted.",
        "stay",
        "Preferiría [quedarme] en casa esta noche. Estoy agotado.",
        "\"Would rather\" + base form, no \"to\": \"I'd rather stay\". *I'd rather to stay is a typical mistake.",
      ),
      tr(
        "Preferiría no hablar de mi sueldo.",
        "I'd rather not talk about my {salary|pay}.",
        "The negative is \"would rather not\" + base form: \"I'd rather not talk\". Not *I'd rather don't talk.",
      ),
      fb(
        "I'd rather you ___ your shoes inside. I just cleaned the floor.",
        "didn't wear",
        "Preferiría que [no usaras] los zapatos adentro. Acabo de limpiar el piso.",
        "About someone else: \"would rather\" + person + past simple. *I'd rather you don't wear is wrong.",
      ),
      tr(
        "Preferiría que vinieras el lunes.",
        ["I'd rather you came on Monday.", "I'd prefer it if you came on Monday.", "I'd prefer you to come on Monday."],
        "«Que vinieras» (another person) = \"you came\": the past simple refers to the future here.",
      ),
      mc(
        "\"Do you mind if I open the window?\" Which is a polite way to say no?",
        [
          "I'd rather you didn't.",
          "I'd rather you don't.",
          "I'd rather not you.",
          "I rather you didn't.",
        ],
        "\"I'd rather you didn't\" is the standard polite refusal. \"Would\" is required: *I rather is wrong.",
      ),
      lc(
        "I'd rather take the stairs than wait for the elevator.",
        [
          "The speaker prefers the stairs.",
          "The speaker prefers the elevator.",
          "The speaker had to take the stairs.",
          "The speaker is waiting for the elevator.",
        ],
        "\"Would rather A than B\": both verbs in the base form. The speaker prefers taking the stairs.",
        "What does the speaker prefer?",
      ),
      dc(
        "It's about time we fixed the leak in the bathroom.",
        "\"It's about time\" + past simple (\"fixed\"): we should have done it already.",
      ),
      tr(
        "Querido yo de 18 años: ojalá alguien te hubiera dicho que está bien no saber qué quieres.",
        ["Dear 18-year-old me, I wish someone had told you {that |}it's {OK|okay|fine} not to know what you want."],
        "\"I wish someone had told you\": wish + past perfect for a regret about the past. \"It's OK not to know\": \"not\" before \"to\".",
      ),
      tr(
        "Deberías haber elegido lo que te gustaba, no lo que parecía seguro.",
        "You should have chosen what you {loved|liked}, not what {looked|seemed} safe.",
        "Choose, chose, chosen: \"should have chosen\". Not *should have chose.",
      ),
      tr(
        "Algún día te darás cuenta de que tenías razón.",
        "One day you'll realize {that |}you were right.",
        "«Darse cuenta» = \"realize\" (British \"realise\"), not «realizar». «Tener razón» = \"be right\", not *have reason.",
      ),
      fb(
        "If you had learned English earlier, you ___ it fluently now.",
        "would speak",
        "Si hubieras aprendido inglés antes, ahora lo [hablarías] con fluidez.",
        "Past cause, present result: mixed conditional with \"would speak... now\", not *would have spoken.",
      ),
      sp(
        "Don't be afraid to make mistakes. One day you'll realize they taught you everything.",
        "Advice from the future: imperative + a prediction with \"will\".",
        "\"Realize\" = \"REE-uh-lize\", three syllables.",
        "Say in English: «No tengas miedo de equivocarte. Algún día te darás cuenta de que te enseñaron todo.»",
      ),
      mt(
        "Match each beginning with its correct ending.",
        [
          ["I wish I", "had more energy."],
          ["I wish you", "would stop complaining."],
          ["I hope you", "have a great weekend."],
          ["I'd rather you", "didn't call so late."],
          ["It's time we", "left."],
        ],
        "Unreal present: \"wish I\" + past. Complaint: \"wish you would\". Real wish: \"hope\" + present. Someone else's action: \"I'd rather you\" + past. \"It's time we\" + past.",
      ),
      mc(
        "«Ojalá vengas a mi fiesta.» Which is correct?",
        [
          "I hope you come to my party.",
          "I wish you came to my party.",
          "I wish you would have come to my party.",
          "I hope you came to my party.",
        ],
        "Present subjunctive after «ojalá» = a real possibility = \"hope\" + present.",
      ),
      mc(
        "«Ojalá hubieras venido a mi fiesta.» Which is correct?",
        [
          "I wish you had come to my party.",
          "I hope you had come to my party.",
          "I wish you came to my party.",
          "I wish you would come to my party yesterday.",
        ],
        "Pluperfect subjunctive = too late = \"wish\" + past perfect: \"had come\".",
      ),
      tr(
        "Ojalá no tuviera que trabajar mañana.",
        "{I wish|If only} I didn't have to work tomorrow.",
        "Unreal present (or future you can't change): \"wish\" + past simple: \"didn't have to\".",
      ),
      tr(
        "Si hubiera escuchado a mi papá, no habría perdido tanto dinero.",
        "If I had listened to my {dad|father}, I wouldn't have lost so much money.",
        "Third conditional: \"had listened\" + \"wouldn't have lost\". «Escuchar a» = \"listen to\".",
      ),
      fb(
        "If I ___ so impatient, I would have waited for the sale.",
        ["weren't", "wasn't"],
        "Si [no fuera] tan impaciente, habría esperado las rebajas.",
        "A present trait with a past result: if + past simple (\"weren't\"), would have + participle.",
      ),
      wo(
        "I wish I had listened to your advice",
        "Ojalá hubiera escuchado tu consejo.",
        "Wish + past perfect: \"had listened\". «Consejo» = \"advice\" (uncountable).",
      ),
      lc(
        "I'd rather you didn't invite him.",
        [
          "The speaker doesn't want him to be invited.",
          "The speaker wants to invite him.",
          "The speaker invited him yesterday.",
          "The speaker is happy he was invited.",
        ],
        "\"Would rather\" + person + past simple is about someone else's action now or in the future: «preferiría que no lo invitaras».",
        "What does the speaker mean?",
      ),
      mc(
        "Which sentence is correct?",
        [
          "I hope it doesn't rain tomorrow.",
          "I wish it doesn't rain tomorrow.",
          "I hope it wouldn't rain tomorrow.",
          "I wish it didn't rain tomorrow.",
        ],
        "Rain tomorrow is possible, so \"hope\" + present. \"Wish\" is only for unreal or impossible situations.",
      ),
      tr(
        "Ojalá mi jefe me escuchara; es hora de que cambiemos el sistema.",
        ["I wish my boss would listen to me; it's time we changed the system.", "I wish my boss listened to me; it's time we changed the system.", "I wish my boss would listen to me, it's time we changed the system."],
        "Two backshifts in one sentence: \"wish\" + would/past (complaint) and \"it's time\" + past simple.",
      ),
      tr(
        "Ojalá no hubieras gastado todo el dinero; podríamos haber ido de vacaciones.",
        ["I wish you hadn't spent all the money; we could have gone on vacation.", "I wish you hadn't spent all the money, we could have gone on vacation.", "If only you hadn't spent all the money; we could have gone on vacation.", "I wish you hadn't spent all the money; we could have gone on {a |}holiday."],
        "A past regret: \"I wish you hadn't spent\" (spend, spent, spent). Then \"could have gone\" for the option you lost.",
      ),
      dc(
        "I wish I hadn't sold my guitar. I should have kept it.",
        "\"Wish\" + past perfect for the regret, then \"should have\" + participle: the same regret as a judgment.",
      ),
      tr(
        "Espero que te haya gustado el regalo. Ojalá hubiera podido ir a tu cumpleaños.",
        ["I hope you liked the {gift|present}. I wish I had been able to go to your birthday {party|}.", "I hope you liked the {gift|present}. I wish I could have gone to your birthday {party|}."],
        "\"Hope\" for a real past you don't know about (no backshift: \"liked\"), \"wish\" + past perfect for the regret.",
      ),
      sp(
        "It's time we stopped arguing and found a solution.",
        "\"It's time\" + subject + past simple for both verbs: \"stopped\", \"found\".",
        "\"Stopped\" ends in /t/, one syllable.",
        "Say in English: «Es hora de que dejemos de discutir y encontremos una solución.»",
      ),
      tr(
        "No debería haberte gritado. Preferiría que lo olvidáramos.",
        "I shouldn't have {shouted|yelled} at you. I'd rather we forgot {it|about it}.",
        "\"Shouldn't have\" + participle for the regret, then \"would rather\" + subject + past simple (\"we forgot\").",
      ),
      dc(
        "If only I had known then what I know now.",
        "\"If only\" + past perfect for a past regret, contrasted with a real present: \"what I know now\".",
      ),
    ],
  ),
];
