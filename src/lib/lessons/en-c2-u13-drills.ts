// Synced from cheneygross-afk/lengo:src/lib/lessons/en-c2-u13-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Required drill lessons for EN-C2 unit u13 (debate and persuasion: conceding, connectors, fallacies, structure, disagreement): a short recap, then graded practice.

type Ex = Lesson["exercises"][number];

const SECONDS: Record<string, number> = {
  "multiple-choice": 15, "multi-select": 20, "listen-choose": 20, "fill-blank": 20, translate: 30,
  "word-order": 25, matching: 30, dictation: 30, speak: 25, write: 0,
};

const tr = (source: string, answer: string, altAnswers: string[], explanation: string): Ex =>
  altAnswers.length
    ? { type: "translate", direction: "es-en", prompt: "Translate into English.", source, answer, altAnswers, explanation }
    : { type: "translate", direction: "es-en", prompt: "Translate into English.", source, answer, explanation };

const fb = (sentence: string, answer: string, en: string, altAnswers: string[], explanation: string): Ex =>
  altAnswers.length
    ? { type: "fill-blank", prompt: "Write the bold words in English.", sentence, answer, en, altAnswers, explanation }
    : { type: "fill-blank", prompt: "Write the bold words in English.", sentence, answer, en, explanation };

const kw = (key: string, original: string, sentence: string, answer: string, altAnswers: string[], explanation: string): Ex =>
  altAnswers.length
    ? { type: "fill-blank", prompt: `Complete the second sentence so it means the same as the first, using ${key}: "${original}"`, sentence, answer, altAnswers, explanation }
    : { type: "fill-blank", prompt: `Complete the second sentence so it means the same as the first, using ${key}: "${original}"`, sentence, answer, explanation };

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

export const EN_C2_U13_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. Conceding and refuting, learned connectors, fallacies, structure
  // ---------------------------------------------------------------------
  drill(
    "en-c2-argument-unit-drill-1",
    "Drill: Concede, Connect, Refute",
    "Concede and pivot with granted, admittedly and that said, refute with overlook and it doesn't follow, use despite, albeit, hence, thereby and whereby correctly, name the classic fallacies and signpost a structured argument.",
    "Recap: concede, connect, refute, structure",
    [
      "Concede with \"Granted\", \"Admittedly\" or \"While it is true that...\", pivot with \"That said\" or \"Even so\", and refute with \"This overlooks the fact that...\" or \"It doesn't follow that...\". Never add \"but\" after \"although\" or \"while\", and remember that \"ignore\" means to disregard on purpose, not «no saber».",
      "\"Despite\" + noun (no \"of\"), \"albeit\" + adjective or phrase (never a clause), \"hence\" + noun phrase, \"thereby\" + -ing, \"whereby\" for a system. Name fallacies with an indefinite article (\"That's a straw man\", \"a false dilemma\"), add points with \"Moreover\" (not \"on the other hand\") and conclude with \"In the end\" or \"On balance\", never *At the end.",
    ],
    [
      ["Admittedly, the trial was small. Even so, the results are striking.", "Hay que reconocer que el ensayo fue pequeño. Aun así, los resultados son llamativos."],
      ["The bridge reopened, albeit three months late.", "El puente volvió a abrir, aunque con tres meses de retraso."],
      ["That's a false dilemma: we could do both.", "Es un falso dilema: podríamos hacer ambas cosas."],
      ["On balance, the benefits outweigh the risks.", "En general, los beneficios superan a los riesgos."],
    ],
    [
      fb(
        "___, the app is slow, but it has never lost a single file.",
        "Granted",
        "[Es cierto que] la aplicación es lenta, pero nunca ha perdido ni un solo archivo.",
        ["Admittedly", "True"],
        "\"Granted\" or \"Admittedly\" opens a concession and tells the listener a \"but\" is coming. Spanish «es cierto que» does not need a literal *It is certain that.",
      ),
      tr(
        "Hay que reconocer que el hotel era caro, pero la ubicación era perfecta.",
        "Admittedly, the hotel was expensive, but the location was perfect.",
        [
          "Granted, the hotel was expensive, but the location was perfect.",
          "True, the hotel was expensive, but the location was perfect.",
          "The hotel was admittedly expensive, but the location was perfect.",
          "Admittedly, the hotel was expensive, but the location was ideal.",
          "Granted, the hotel was expensive, but the location was ideal.",
          "Admittedly, the hotel was pricey, but the location was perfect.",
        ],
        "«Hay que reconocer que» is the natural home of \"Admittedly\" or \"Granted\". *It must be recognized that is a heavy calque, and «admitidamente» has no role here.",
      ),
      fb(
        "Our flight was delayed four hours. ___, we made it to the wedding on time.",
        "Even so",
        "Nuestro vuelo se retrasó cuatro horas. [Aun así], llegamos a tiempo a la boda.",
        ["All the same", "Still", "Nevertheless", "Nonetheless", "That said", "Having said that"],
        "\"Even so\" (or \"All the same\", \"Nevertheless\") is the pivot back after a concession: «aun así». *Even though so is not English.",
      ),
      mc(
        "Which sentence is correct?",
        [
          "Although the course is demanding, it is worth every minute.",
          "Although the course is demanding, but it is worth every minute.",
          "Despite the course is demanding, it is worth every minute.",
          "Albeit the course is demanding, it is worth every minute.",
        ],
        0,
        "\"Although\" + clause, with no \"but\" in the main clause. \"Despite\" needs a noun or -ing (\"Despite being demanding\"), and \"albeit\" never introduces a full clause.",
      ),
      tr(
        "Si bien es cierto que los alquileres han subido, los sueldos han subido aún más.",
        "While it is true that rents have risen, salaries have risen even more.",
        [
          "While it's true that rents have risen, salaries have risen even more.",
          "While it is true that rents have gone up, salaries have gone up even more.",
          "While it is true that rents have risen, wages have risen even more.",
          "While it is true that rents have gone up, wages have gone up even more.",
          "Although it is true that rents have risen, salaries have risen even more.",
          "While it is true that rents have risen, salaries have risen even faster.",
          "While it is true that rents have risen, wages have risen even faster.",
          "While rents have risen, salaries have risen even more.",
        ],
        "\"While it is true that...\" folds concession and pivot into one sentence, so the main clause takes no \"but\". Use \"rise\" (no object) for rents and salaries going up.",
      ),
      tr(
        "Ignoro si la tienda abre los domingos.",
        "I don't know whether the store opens on Sundays.",
        [
          "I don't know if the store opens on Sundays.",
          "I do not know whether the store opens on Sundays.",
          "I do not know if the store opens on Sundays.",
          "I don't know whether the shop opens on Sundays.",
          "I don't know if the shop opens on Sundays.",
          "I have no idea whether the store opens on Sundays.",
          "I have no idea if the store opens on Sundays.",
          "I'm not sure whether the store opens on Sundays.",
          "I'm not sure if the store opens on Sundays.",
        ],
        "Here «ignorar» means «no saber», so the English is \"I don't know\". *I ignore whether... would mean you deliberately pay no attention, which is the false friend this unit warns about.",
      ),
      tr(
        "Esto pasa por alto que muchos pacientes viven lejos del hospital.",
        "This overlooks the fact that many patients live far from the hospital.",
        [
          "This overlooks the fact that many patients live a long way from the hospital.",
          "This overlooks the fact that a lot of patients live far from the hospital.",
          "That overlooks the fact that many patients live far from the hospital.",
          "This fails to take into account the fact that many patients live far from the hospital.",
          "This fails to take into account that many patients live far from the hospital.",
          "This overlooks that many patients live far from the hospital.",
        ],
        "«Pasar por alto» is \"overlook\", the neutral, tactful refutation. \"Ignores\" would accuse the other side of doing it on purpose, and *passes over high is a word-for-word copy of the idiom.",
      ),
      fb(
        "With respect, your theory simply ___.",
        "doesn't hold water",
        "Con todo respeto, su teoría sencillamente [no se sostiene].",
        ["does not hold water", "doesn't hold up", "does not hold up", "doesn't stand up", "doesn't stand up to scrutiny", "does not stand up to scrutiny"],
        "«No se sostiene» is \"doesn't hold water\" (or \"doesn't hold up\"). *doesn't sustain itself is not idiomatic English.",
      ),
      wo(
        "That may well be true, but it doesn't follow that we should cancel the trip.",
        "Puede que sea verdad, pero de ahí no se deduce que debamos cancelar el viaje.",
        "\"That may well be true\" concedes the facts and \"it doesn't follow that\" rejects the conclusion: concession and refutation in a single sentence.",
      ),
      mc(
        "Which sentence is correct?",
        [
          "Despite the strike, most trains ran on time.",
          "Despite of the strike, most trains ran on time.",
          "Although the strike, most trains ran on time.",
          "In spite the strike, most trains ran on time.",
        ],
        0,
        "\"Despite\" takes a noun directly. Only \"in spite of\" has \"of\", so *despite of and *in spite the are both wrong, and \"although\" needs a clause (\"although there was a strike\").",
      ),
      kw(
        "ALBEIT",
        "The museum is very popular, although it is expensive.",
        "The museum is very popular, ___.",
        "albeit expensive",
        ["albeit an expensive one", "albeit a little expensive", "albeit somewhat expensive"],
        "\"Albeit\" is followed by an adjective or short phrase, never a full clause: *albeit it is expensive is wrong.",
      ),
      tr(
        "Se cancelaron todos los vuelos; de ahí las filas en el aeropuerto.",
        "All the flights were canceled; hence the lines at the airport.",
        [
          "All flights were canceled; hence the lines at the airport.",
          "All the flights were canceled; hence the long lines at the airport.",
          "All flights were canceled; hence the long lines at the airport.",
          "All the flights were canceled; hence the queues at the airport.",
          "All flights were canceled; hence the queues at the airport.",
          "All the flights were canceled, hence the lines at the airport.",
          "All flights were canceled, hence the lines at the airport.",
          "Every flight was canceled; hence the lines at the airport.",
        ],
        "Verbless \"hence\" + noun phrase is the elegant equivalent of «de ahí». Adding a verb (*hence there were the lines) spoils it.",
      ),
      fb(
        "The firm automated its invoicing, ___ saving thousands of working hours.",
        "thereby",
        "La empresa automatizó su facturación, ahorrando [con ello] miles de horas de trabajo.",
        [],
        "\"Thereby\" + -ing links an action to its direct result: «con ello», «de ese modo». \"Hence\" is wrong here because it is not followed by -ing in this way.",
      ),
      tr(
        "Crearon un sistema mediante el cual los clientes pueden devolver los envases vacíos.",
        "They created a system whereby customers can return the empty containers.",
        [
          "They created a system whereby customers can return empty containers.",
          "They set up a system whereby customers can return the empty containers.",
          "They set up a system whereby customers can return empty containers.",
          "They created a scheme whereby customers can return the empty containers.",
          "They set up a scheme whereby customers can return empty containers.",
          "They created a system by which customers can return the empty containers.",
          "They created a system by which customers can return empty containers.",
        ],
        "«Mediante el cual» describing how a system works is \"whereby\" (or \"by which\"). A vague *a system where... loses the idea of means.",
      ),
      mc(
        "«Que yo sepa, la clínica cierra los lunes.» Which is correct?",
        [
          "As far as I know, the clinic is closed on Mondays.",
          "Insofar as I know, the clinic is closed on Mondays.",
          "Inasmuch as I know, the clinic is closed on Mondays.",
          "As long as I know, the clinic is closed on Mondays.",
        ],
        0,
        "«Que yo sepa» is the general \"As far as I know\". \"Insofar as\" limits the scope of a claim in formal writing, \"inasmuch as\" means «puesto que», and \"as long as\" is a condition.",
      ),
      tr(
        "Sea como sea, el informe tiene que estar listo el lunes.",
        "Be that as it may, the report has to be ready on Monday.",
        [
          "Be that as it may, the report has to be ready by Monday.",
          "Be that as it may, the report must be ready on Monday.",
          "Be that as it may, the report must be ready by Monday.",
          "Be that as it may, the report needs to be ready on Monday.",
          "Be that as it may, the report needs to be ready by Monday.",
          "Be that as it may, the report has to be finished by Monday.",
        ],
        "\"Be that as it may\" is a frozen subjunctive phrase: never *Be it as it may or *Be as it be. It sets a point aside and returns to what matters.",
      ),
      fb(
        "If we reward teams for their successes, ___, we should hold them accountable for their failures.",
        "by the same token",
        "Si premiamos a los equipos por sus éxitos, [por la misma razón], deberíamos hacerlos responsables de sus fracasos.",
        ["by that same token"],
        "\"By the same token\" applies one line of reasoning to a second case: «por la misma razón», «del mismo modo». *By the same reason is a calque.",
      ),
      mt(
        "Match each fallacy to the example.",
        [
          ["straw man", "So you want to let criminals walk free?"],
          ["ad hominem", "Why listen to her? She failed her driving test twice."],
          ["slippery slope", "Allow one late submission and soon nobody will meet a deadline."],
          ["false dilemma", "Either we cut salaries or the company goes under."],
          ["whataboutism", "Before you criticize us, look at what the last government did."],
          ["appeal to authority", "A famous actor uses this shampoo, so it must work."],
        ],
        "A straw man distorts the position, ad hominem attacks the person, a slippery slope asserts an unproven chain, a false dilemma hides other options, whataboutism changes the subject and an appeal to authority borrows prestige instead of evidence.",
      ),
      tr(
        "Me estás poniendo en la boca palabras que nunca dije.",
        "You're putting words in my mouth that I never said.",
        [
          "You are putting words in my mouth that I never said.",
          "You're putting words in my mouth.",
          "You are putting words in my mouth.",
          "You're putting words into my mouth that I never said.",
          "You're putting words into my mouth.",
          "That's not what I said; you're putting words in my mouth.",
        ],
        "\"You're putting words in my mouth\" is the standard complaint against a straw man. The idiom exists in both languages, but English uses \"in\" (or \"into\") my mouth, with no article.",
      ),
      mc(
        "«El presupuesto se ha duplicado, lo que plantea la pregunta de adónde va el dinero.» Which version is safest for a careful writer?",
        [
          "The budget has doubled, which raises the question of where the money is going.",
          "The budget has doubled, which makes the question of where the money is going.",
          "The budget has doubled, which poses the question where is the money going.",
          "The budget has doubled, which begs the answer of where the money is going.",
        ],
        0,
        "\"Raises the question\" is the safe equivalent of «plantea la pregunta». \"Begs the question\" strictly means circular reasoning, and an embedded question keeps statement word order (\"where the money is going\").",
      ),
      dt(
        "Two wrongs don't make a right, and that still doesn't answer my question.",
        "\"Two wrongs don't make a right\" is the classic rebuttal to whataboutism. Note \"don't\" (plural subject) and \"answer my question\" with no preposition.",
      ),
      fb(
        "This conclusion is borne ___ by three independent studies.",
        "out",
        "Esta conclusión queda [confirmada] por tres estudios independientes.",
        [],
        "\"Be borne out by\" means to be confirmed by evidence. It is a fixed phrasal verb: \"bear out\", past participle \"borne\".",
      ),
      mc(
        "You want to add a second argument that supports the first. Which connector fits? «El plan es barato. ___, cuenta con el apoyo del personal.»",
        [
          "Moreover",
          "On the other hand",
          "In the other hand",
          "At the end",
        ],
        0,
        "To add, use \"Moreover\" or \"In addition\". \"On the other hand\" always signals a contrast, even though «por otro lado» can simply add in Spanish; *In the other hand and *At the end are not connectors.",
      ),
      tr(
        "Al final, el comité aprobó el presupuesto.",
        "In the end, the committee approved the budget.",
        [
          "Eventually, the committee approved the budget.",
          "In the end the committee approved the budget.",
          "Ultimately, the committee approved the budget.",
          "Finally, the committee approved the budget.",
        ],
        "«Al final» meaning «finalmente» is \"In the end\". \"At the end\" needs \"of\" and a time or place (\"at the end of the meeting\"), so *At the end, the committee approved... is a classic error.",
      ),
      wo(
        "It could be objected that the survey only covered large cities.",
        "Se podría objetar que la encuesta solo abarcó las grandes ciudades.",
        "\"It could be objected that...\" introduces a counter-argument you raise yourself before rebutting it: pre-empting the objection.",
      ),
      tr(
        "Mi tesis central es que el teletrabajo beneficia más a las empresas que a los empleados.",
        "My central contention is that remote work benefits companies more than employees.",
        [
          "My central contention is that remote work benefits companies more than it benefits employees.",
          "My central contention is that remote work benefits employers more than employees.",
          "My central contention is that working from home benefits companies more than employees.",
          "My central contention is that working from home benefits employers more than employees.",
          "My central argument is that remote work benefits companies more than employees.",
          "My central claim is that remote work benefits companies more than employees.",
          "My main contention is that remote work benefits companies more than employees.",
          "My central contention is that teleworking benefits companies more than employees.",
        ],
        "\"My central contention is that...\" announces the claim early and directly, as English argument expects. Avoid stacking \"In my opinion, I think that...\".",
      ),
      lc(
        "Turning now to the environmental cost, the picture is far less clear.",
        "What is the speaker doing?",
        [
          "Moving on to a new point in the argument",
          "Concluding the whole argument",
          "Conceding a point to the opponent",
          "Giving more evidence for the previous point",
        ],
        0,
        "\"Turning now to...\" is a signpost that opens a new point. A conclusion would use \"On balance\" or \"In light of the above\", and a concession \"Granted\" or \"Admittedly\".",
      ),
      wo(
        "The board approved the merger, notwithstanding the objections of several shareholders.",
        "La junta aprobó la fusión, pese a las objeciones de varios accionistas.",
        "\"Notwithstanding\" is a formal \"despite\": it takes a noun phrase, never a clause, and is typical of legal and business writing.",
      ),
      lc(
        "If we allow one exception, before we know it nobody will follow the rules at all.",
        "Which fallacy is this?",
        [
          "A slippery slope",
          "A straw man",
          "An appeal to authority",
          "Circular reasoning",
        ],
        0,
        "\"Before we know it\" announces a chain of consequences that is asserted, not demonstrated: the slippery slope.",
      ),
      tr(
        "Es cierto que el plan es caro. Dicho esto, pasa por alto que no hacer nada costaría el doble.",
        "Admittedly, the plan is expensive. That said, it overlooks the fact that doing nothing would cost twice as much.",
        [
          "Granted, the plan is expensive. That said, it overlooks the fact that doing nothing would cost twice as much.",
          "True, the plan is expensive. That said, it overlooks the fact that doing nothing would cost twice as much.",
          "Admittedly, the plan is expensive. Having said that, it overlooks the fact that doing nothing would cost twice as much.",
          "Granted, the plan is expensive. Having said that, it overlooks the fact that doing nothing would cost twice as much.",
          "It is true that the plan is expensive. That said, it overlooks the fact that doing nothing would cost twice as much.",
          "Admittedly, the plan is expensive. That said, this overlooks the fact that doing nothing would cost twice as much.",
          "Admittedly, the plan is expensive. That said, it overlooks the fact that doing nothing would cost double.",
          "Admittedly, the plan is costly. That said, it overlooks the fact that doing nothing would cost twice as much.",
        ],
        "Three beats: concede (\"Admittedly\"), pivot (\"That said\"), refute (\"overlooks the fact that\"). «Costaría el doble» is \"would cost twice as much\" (or \"double\"), not *would cost the double.",
      ),
      mc(
        "Which sentence is correct?",
        [
          "Despite the rain, the final went ahead, albeit an hour late.",
          "Despite of the rain, the final went ahead, albeit an hour late.",
          "Although the rain, the final went ahead, albeit it was an hour late.",
          "Despite the rain, the final went ahead, albeit it was an hour late.",
        ],
        0,
        "\"Despite\" + noun with no \"of\", and \"albeit\" + a short phrase (\"an hour late\"), never a clause. Each wrong option contains at least one classic Spanish-speaker trap.",
      ),
      dt(
        "Insofar as the figures are reliable, the policy has worked, albeit slowly.",
        "\"Insofar as\" limits the scope of the claim («en la medida en que»), and \"albeit slowly\" adds a concession without a full clause.",
      ),
      tr(
        "Que sea popular no significa que funcione; de ahí no se deduce que debamos ampliarlo.",
        "Being popular doesn't mean it works; it doesn't follow that we should expand it.",
        [
          "The fact that it is popular doesn't mean it works; it doesn't follow that we should expand it.",
          "The fact that it's popular doesn't mean that it works; it doesn't follow that we should expand it.",
          "Its popularity doesn't mean it works; it doesn't follow that we should expand it.",
          "Being popular doesn't mean that it works; it does not follow that we should expand it.",
          "Popularity doesn't mean it works; it doesn't follow that we should expand it.",
          "Just because it's popular doesn't mean it works; it doesn't follow that we should expand it.",
          "Being popular doesn't mean it works; it doesn't follow that we should extend it.",
        ],
        "A subject clause like «que sea popular» becomes \"Being popular\" or \"The fact that it is popular\", never *That is popular. \"It doesn't follow that...\" then rejects the conclusion.",
      ),
      sp(
        "Granted, the sample was small. Even so, the results are hard to ignore.",
        "Es cierto que la muestra era pequeña. Aun así, los resultados son difíciles de ignorar.",
        "Pause after \"Granted\" and after \"Even so\"; stress \"small\" and \"hard\".",
        "A short concession, a pivot and a firm claim: the basic persuasive rhythm of the unit.",
      ),
      sp(
        "That's a straw man: nobody here is suggesting we close the library.",
        "Eso es un hombre de paja: aquí nadie propone cerrar la biblioteca.",
        "Say \"straw man\" as two stressed words, then pause at the colon.",
        "Name the fallacy calmly with an indefinite article (\"a straw man\"), then restore your real position.",
      ),
    ],
  ),
  // ---------------------------------------------------------------------
  // Drill 2. Degrees of disagreement, fallacy spotting, conditionals and the
  // subjunctive in argument, plus a whole-unit mix
  // ---------------------------------------------------------------------
  drill(
    "en-c2-argument-unit-drill-2",
    "Drill: Disagree Precisely, Argue Formally",
    "Calibrate agreement and disagreement by strength and register, expose fallacies in real-world texts, and argue with inverted conditionals, \"if anything\" and the mandative subjunctive, combining everything from the unit.",
    "Recap: the scale, the fallacies, the formal moves",
    [
      "Agreement and disagreement form a scale: \"I couldn't agree more\" (strong agreement, despite the \"not\"), \"I agree up to a point\", \"I take your point, but...\", \"I'm not entirely convinced\", \"I beg to differ\", \"That's simply not the case\". Match the register too: \"I concur\" is formal, \"Tell me about it\" informal, and \"With all due respect\" often warns of a sharp criticism.",
      "In formal argument, drop \"if\" and invert: \"Were it not for...\", \"Should the plan fail...\", \"Had we known...\". Use \"If anything\" to correct in the opposite direction, and the bare base form after verbs of proposing: \"I propose that the meeting be postponed\", \"that the plan not be approved\".",
    ],
    [
      ["I agree with you up to a point, but the costs worry me.", "Estoy de acuerdo contigo hasta cierto punto, pero los costos me preocupan."],
      ["Being a famous chef doesn't make her an expert on medicine.", "Ser una chef famosa no la convierte en experta en medicina."],
      ["Should the supplier pull out, we would need a backup.", "Si el proveedor se retirara, necesitaríamos un plan B."],
      ["We recommend that the contract not be renewed.", "Recomendamos que no se renueve el contrato."],
    ],
    [
      tr(
        "Estoy totalmente de acuerdo contigo.",
        "I couldn't agree with you more.",
        [
          "I couldn't agree more.",
          "I could not agree with you more.",
          "I completely agree with you.",
          "I totally agree with you.",
          "I agree with you completely.",
          "I fully agree with you.",
          "I agree with you entirely.",
          "I entirely agree with you.",
        ],
        "\"I couldn't agree more\" is the strongest agreement, even though it contains \"not\". And \"agree\" is a verb: *I am agree with you copies «estoy de acuerdo».",
      ),
      fb(
        "I agree with you up to a ___, but the timing is all wrong.",
        "point",
        "Estoy de acuerdo contigo hasta cierto [punto], pero el momento es completamente equivocado.",
        [],
        "\"Up to a point\" is partial agreement, the natural bridge to a polite \"but\". *Until certain point is a calque of «hasta cierto punto».",
      ),
      mc(
        "A colleague says «Fair enough» after your explanation. What does it most likely mean?",
        [
          "She accepts your point as reasonable, without much enthusiasm.",
          "She enthusiastically agrees with everything you said.",
          "She thinks your proposal is financially fair.",
          "She is being openly sarcastic and rejects your point.",
        ],
        0,
        "\"Fair enough\" means «está bien, es razonable»: acceptance, often with a hint that the speaker wants to move on. It is not strong agreement.",
      ),
      tr(
        "Entiendo tu punto, pero no estoy seguro de que se aplique a nuestro caso.",
        "I take your point, but I'm not sure it applies to our case.",
        [
          "I take your point, but I'm not sure that it applies to our case.",
          "I take your point, but I'm not sure it applies in our case.",
          "I see your point, but I'm not sure it applies to our case.",
          "I see your point, but I'm not sure it applies in our case.",
          "I take your point, but I'm not sure it applies to our situation.",
          "I see where you're coming from, but I'm not sure it applies to our case.",
          "I take the point, but I'm not sure it applies to our case.",
          "I take your point, but I am not sure it applies to our case.",
        ],
        "\"I take your point, but...\" concedes and disagrees in one breath. *I understand your point is possible but flatter, and *I am not sure if it applies is less natural than \"that\" or no conjunction.",
      ),
      mc(
        "In a team meeting, a colleague says sales will double next year. You doubt it. Which response suits the context?",
        [
          "I'm not entirely convinced the demand is there.",
          "No, that's not true.",
          "You're wrong about that.",
          "That's absolute nonsense.",
        ],
        0,
        "In a professional setting, soften the disagreement: \"I'm not entirely convinced\" is clear but protects the relationship. A literal «No, eso no es así» sounds aggressive in English.",
      ),
      fb(
        "Madam Chair, I beg to ___.",
        "differ",
        "Señora presidenta, [me permito discrepar].",
        [],
        "\"I beg to differ\" is polite in form and firm in content: the speaker will not change their mind. It is fixed: never *I beg to disagree with you.",
      ),
      fb(
        "I would take ___ with the claim that the reform has failed.",
        "issue",
        "Yo [discreparía] de la afirmación de que la reforma ha fracasado.",
        [],
        "\"Take issue with\" is the calm, precise formal way to dispute a claim, typical of written argument.",
      ),
      tr(
        "Me temo que no puedo estar de acuerdo con usted en ese punto.",
        "I'm afraid I can't agree with you on that point.",
        [
          "I'm afraid I cannot agree with you on that point.",
          "I'm afraid I can't agree with you there.",
          "I'm afraid I can't agree with you on that.",
          "I'm afraid I have to disagree with you on that point.",
          "I'm afraid I have to disagree with you there.",
          "I'm afraid I disagree with you on that point.",
          "I am afraid I can't agree with you on that point.",
        ],
        "\"I'm afraid\" softens a firm disagreement in a professional way. English has no «usted», so the register comes from the frame itself.",
      ),
      mt(
        "Match each expression to what it signals.",
        [
          ["I concur.", "formal agreement"],
          ["Tell me about it!", "informal agreement about a shared complaint"],
          ["I have my reservations.", "serious doubts, politely understated"],
          ["I beg to differ.", "firm, formal disagreement"],
          ["That's simply not the case.", "blunt but impersonal rejection"],
          ["You've got to be kidding.", "strong, informal disagreement"],
        ],
        "The scale runs on two axes, strength and formality. \"I have my reservations\" sounds mild but usually means real doubt, and \"Tell me about it\" is not a request for more information.",
      ),
      mc(
        "Which reply has a consistent register?",
        [
          "I'm not sure the data supports that conclusion.",
          "I concur, mate.",
          "With respect, that's rubbish.",
          "I would endorse that view, dude.",
        ],
        0,
        "Mixing registers is a Mastery slip: \"I concur\" or \"I would endorse\" next to \"mate\" or \"dude\", and \"With respect\" next to \"rubbish\", clash. The first option is neutral all the way through.",
      ),
      tr(
        "Eso sencillamente no es así: las cifras muestran lo contrario.",
        "That's simply not the case: the figures show the opposite.",
        [
          "That is simply not the case: the figures show the opposite.",
          "That's simply not the case; the figures show the opposite.",
          "That's simply not the case: the figures show otherwise.",
          "That's simply not the case: the figures say the opposite.",
          "That's simply not the case: the numbers show the opposite.",
          "That's simply not true: the figures show the opposite.",
          "That's just not the case: the figures show the opposite.",
        ],
        "\"That's simply not the case\" is the most usable blunt rejection: it attacks the claim, not the person. *That is not like that is a calque of «eso no es así».",
      ),
      lc(
        "With all due respect, I think you've completely misread the report.",
        "How is this likely to sound to a native speaker?",
        [
          "Like a warning before a sharp criticism",
          "Deeply respectful and humble",
          "Like strong agreement with the other person",
          "Neutral, like a factual summary",
        ],
        0,
        "\"With all due respect\" often comes just before a sharp criticism, and native speakers hear it as a warning. \"With respect\" alone is safer, or no formula at all.",
      ),
      dt(
        "I take your point, but I'm not sure the data supports such a firm conclusion.",
        "A concession (\"I take your point\") followed by a hedged disagreement aimed at the evidence: the seminar register.",
      ),
      lc(
        "Millions of drivers can't be wrong: choose the country's favorite car insurer.",
        "Which fallacy does this advert rely on?",
        [
          "The bandwagon fallacy",
          "A slippery slope",
          "A straw man",
          "Circular reasoning",
        ],
        0,
        "\"Millions can't be wrong\" treats popularity as proof of quality: the bandwagon (ad populum) fallacy.",
      ),
      tr(
        "Que sea un gran tenista no lo convierte en experto en inversiones.",
        "Being a great tennis player doesn't make him an expert on investments.",
        [
          "Being a great tennis player doesn't make him an expert in investments.",
          "Being a great tennis player doesn't make him an expert on investing.",
          "Being a great tennis player doesn't make him an expert in investing.",
          "Being a great tennis player does not make him an expert on investments.",
          "The fact that he is a great tennis player doesn't make him an expert on investments.",
          "The fact that he's a great tennis player doesn't make him an expert on investments.",
          "Being a great tennis player doesn't make him an investment expert.",
        ],
        "This rebuts an appeal to authority by pointing out the expert is outside his field. The subject is an -ing clause or \"The fact that...\": never *That he is a great player doesn't make him...",
      ),
      mc(
        "A columnist writes: «A tax on plastic bags is the thin end of the wedge.» What is she suggesting?",
        [
          "That this small measure will lead to much bigger ones",
          "That the tax is too small to make any difference",
          "That only two options exist",
          "That the tax was proposed by unreliable people",
        ],
        0,
        "\"The thin end of the wedge\" announces a slippery slope: a small first step that supposedly leads to something much bigger, without showing why.",
      ),
      tr(
        "Plantearlo de esa manera es engañoso: esas no son las únicas dos opciones.",
        "Framing it that way is misleading: those aren't the only two options.",
        [
          "Framing it that way is misleading: those are not the only two options.",
          "Framing it like that is misleading: those aren't the only two options.",
          "Framing it that way is misleading; those aren't the only two options.",
          "Putting it that way is misleading: those aren't the only two options.",
          "Presenting it that way is misleading: those aren't the only two options.",
          "Framing it that way is misleading: those aren't the only options.",
        ],
        "The rebuttal to a false dilemma: name the distortion (\"framing it that way\") and reopen the options. «Engañoso» is \"misleading\", not *deceiving.",
      ),
      kw(
        "WERE",
        "If it weren't for the scholarship, she couldn't study abroad.",
        "___ the scholarship, she couldn't study abroad.",
        "Were it not for",
        [],
        "\"Were it not for\" is the inverted form of \"If it weren't for\" («de no ser por»). The negative \"not\" comes after \"it\", never *Weren't it for.",
      ),
      fb(
        "___ the supplier fail to deliver, we would switch to our backup plan.",
        "Should",
        "[Si] el proveedor no cumpliera con la entrega, pasaríamos a nuestro plan de respaldo.",
        [],
        "\"Should\" + subject + base form replaces \"if\" in a formal hypothesis. The verb stays bare: \"Should the supplier fail\", never *fails.",
      ),
      mc(
        "Which sentence is correct?",
        [
          "Had we known about the roadwork, we would have left earlier.",
          "Had we knew about the roadwork, we would have left earlier.",
          "If had we known about the roadwork, we would have left earlier.",
          "Had we known about the roadwork, we would leave earlier.",
        ],
        0,
        "Inverted third conditional: \"Had\" + subject + past participle, and \"would have\" + participle in the result. Don't keep \"if\" with the inversion, and don't conjugate the participle.",
      ),
      tr(
        "De haberlo sabido, habríamos reservado otro hotel.",
        "Had we known, we would have booked another hotel.",
        [
          "Had we known, we would have booked a different hotel.",
          "Had we known, we'd have booked another hotel.",
          "Had we known that, we would have booked another hotel.",
          "Had we known, we would have reserved another hotel.",
          "If we had known, we would have booked another hotel.",
          "If we'd known, we would have booked another hotel.",
          "If we had known, we would have booked a different hotel.",
        ],
        "«De haberlo sabido» maps neatly onto the inverted \"Had we known\". Avoid *Of having known, a literal copy of the Spanish infinitive construction.",
      ),
      fb(
        "The new rules haven't reduced the paperwork. ___, they've increased it.",
        "If anything",
        "Las nuevas normas no han reducido el papeleo. [En todo caso], lo han aumentado.",
        [],
        "\"If anything\" introduces a correction in the opposite direction: the truth is the reverse of what was claimed. *In any case would just change the subject.",
      ),
      tr(
        "Supongamos, por el bien del debate, que las cifras son correctas. ¿Qué se deduce de ello?",
        "Suppose, for the sake of argument, that the figures are correct. What follows?",
        [
          "Let us suppose, for the sake of argument, that the figures are correct. What follows?",
          "Let's suppose, for the sake of argument, that the figures are correct. What follows?",
          "Suppose, for the sake of argument, that the figures are correct. What follows from that?",
          "Suppose, for argument's sake, that the figures are correct. What follows?",
          "Suppose for the sake of argument that the figures are right. What follows?",
          "Let us suppose, for the sake of argument, that the figures are right. What follows from that?",
        ],
        "\"For the sake of argument\" accepts a premise temporarily; \"What follows?\" asks what conclusion it really supports. *For the good of the debate is a calque.",
      ),
      tr(
        "Proponemos que la reunión se aplace hasta marzo.",
        "We propose that the meeting be postponed until March.",
        [
          "We propose that the meeting should be postponed until March.",
          "We propose that the meeting be put off until March.",
          "We propose that the meeting be delayed until March.",
          "We propose postponing the meeting until March.",
          "We propose that the meeting be postponed till March.",
        ],
        "After \"propose\", formal English uses the bare base form for every person: \"be postponed\", not *is postponed. British English also allows \"should be postponed\".",
      ),
      mc(
        "It is vital that the data ___ shared outside the team.",
        [
          "not be",
          "doesn't be",
          "not is",
          "don't be",
        ],
        0,
        "The negative mandative subjunctive is \"not\" + base form, with no \"do\": \"that the data not be shared\".",
      ),
      wo(
        "I recommend that the proposal not be approved in its current form.",
        "Recomiendo que la propuesta no se apruebe en su forma actual.",
        "\"Recommend that\" + subject + \"not be\" + participle: the negative mandative subjunctive. Spanish «no se apruebe» is a passive here.",
      ),
      tr(
        "Por mucho que simpatice con los inquilinos, no puedo apoyar la ocupación del edificio.",
        "Much as I sympathize with the tenants, I can't support the occupation of the building.",
        [
          "Much as I sympathize with the tenants, I cannot support the occupation of the building.",
          "Much as I sympathise with the tenants, I can't support the occupation of the building.",
          "Much as I sympathize with the tenants, I can't support occupying the building.",
          "However much I sympathize with the tenants, I can't support the occupation of the building.",
          "Although I sympathize with the tenants, I can't support the occupation of the building.",
          "While I sympathize with the tenants, I can't support the occupation of the building.",
        ],
        "\"Much as I sympathize with...\" concedes a feeling before refusing the conclusion, with no \"but\" in the main clause. «Simpatizar con» is \"sympathize with\", not *sympathize the tenants.",
      ),
      tr(
        "De no ser por la subvención, el teatro cerraría; dicho esto, no puede depender de ella para siempre.",
        "Were it not for the subsidy, the theater would close; that said, it can't depend on it forever.",
        [
          "Were it not for the subsidy, the theater would close; that said, it cannot depend on it forever.",
          "Were it not for the subsidy, the theater would close; that said, it can't rely on it forever.",
          "Were it not for the subsidy, the theater would close. That said, it can't depend on it forever.",
          "Were it not for the subsidy, the theater would close; having said that, it can't depend on it forever.",
          "If it weren't for the subsidy, the theater would close; that said, it can't depend on it forever.",
          "If it were not for the subsidy, the theater would close; that said, it can't rely on it forever.",
          "Were it not for the grant, the theater would close; that said, it can't depend on it forever.",
        ],
        "An inverted conditional followed by a concession and pivot. \"Depend on\" and \"rely on\" both need \"on\"; *depend of copies «depender de».",
      ),
      mc(
        "Which response is both polite and logically sharp?",
        [
          "I take your point, but it doesn't follow that we should scrap the scheme.",
          "You're wrong, and frankly your argument is nonsense.",
          "I am agree, but the scheme is bad.",
          "Fair enough, although, but we should scrap it.",
        ],
        0,
        "A soft concession (\"I take your point\") followed by a precise logical refutation (\"it doesn't follow that\"). The others are rude, ungrammatical (*I am agree) or stack two contrast markers.",
      ),
      tr(
        "Estoy de acuerdo en parte, pero eso no responde a la pregunta.",
        "I agree up to a point, but that doesn't answer the question.",
        [
          "I agree up to a point, but that does not answer the question.",
          "I partly agree, but that doesn't answer the question.",
          "I agree to some extent, but that doesn't answer the question.",
          "I agree in part, but that doesn't answer the question.",
          "I partially agree, but that doesn't answer the question.",
          "I agree with you up to a point, but that doesn't answer the question.",
          "I agree to a certain extent, but that doesn't answer the question.",
        ],
        "Partial agreement, then the rebuttal to whataboutism or deflection. \"Answer\" takes a direct object: *answer to the question is a calque of «responder a».",
      ),
      wo(
        "Wouldn't it be better to test the idea with a smaller group first?",
        "¿No sería mejor probar la idea primero con un grupo más pequeño?",
        "A negative question invites the other person to reconsider rather than telling them they are wrong: a classic softener.",
      ),
      dt(
        "Should the vote fail, I propose that the motion be debated again next month.",
        "Inverted \"Should\" + base form for the hypothesis, then the mandative subjunctive \"be debated\" after \"propose\".",
      ),
      sp(
        "I'm afraid I have to disagree. If anything, the new system has made things slower.",
        "Me temo que tengo que discrepar. En todo caso, el nuevo sistema ha hecho que todo sea más lento.",
        "Stress \"disagree\" and \"slower\"; give \"If anything\" its own small pause.",
        "Firm, professional disagreement followed by \"If anything\", which reverses the opponent's claim.",
      ),
      sp(
        "With respect, I'd dispute that. Had we acted sooner, prices would be lower today.",
        "Con respeto, yo lo discutiría. Si hubiéramos actuado antes, los precios hoy serían más bajos.",
        "Keep \"I'd\" light; stress \"dispute\", \"sooner\" and \"lower\".",
        "\"With respect\" (not \"with all due respect\") plus a formal rebuttal, and a mixed inverted conditional: past condition, present result.",
      ),
    ],
  ),
];
