// Synced from cheneygross-afk/lengo:src/lib/lessons/en-b2-u19-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Extra practice (optional) lessons for EN-B2 unit u19 (verb patterns,
// linkers, preposition + -ing). Drill-focused: a short recap, then a long
// mixed set of exercises.

// Expands "{a|b|}" choices into every combination, for altAnswers. The
// answer itself is left out of the list.
function alts(answer: string, ...templates: string[]): string[] {
  const expand = (t: string): string[] => {
    const m = t.match(/\{([^{}]*)\}/);
    if (!m || m.index === undefined) return [t.replace(/\s+/g, " ").replace(/\s([.,!?])/g, "$1").trim()];
    const before = t.slice(0, m.index);
    const after = t.slice(m.index + m[0].length);
    return m[1].split("|").flatMap((opt) => expand(before + opt + after));
  };
  const out = new Set<string>();
  for (const t of templates) for (const s of expand(t)) if (s !== answer) out.add(s);
  return [...out];
}

export const EN_B2_U19_EXTRA: Lesson[] = [
  // ---------------------------------------------------------------------
  // Extra 1. aunque, para que, acordarse de, dejar de, volver a
  // ---------------------------------------------------------------------
  {
    slug: "en-b2-aunque-para-que-drill-1",
    optional: true,
    level: "EN-B2",
    number: 1,
    title: "Extra Practice: aunque, para que, acordarse de",
    summary: "Drill the Spanish structures that trip people up: «aunque» (\"although\" or \"even if\"), «para que» (\"so that\"), «acordarse de» (\"remember to\" or \"remember -ing\"), «dejar de» and «volver a».",
    duration: "12 min",
    sections: [
      {
        heading: "Quick recap: aunque and para que",
        body: [
          "«Aunque» + a fact (indicative) is \"although\" or \"even though\": \"Although it was late, we kept talking\". «Aunque» + a possibility (subjunctive) is \"even if\": \"Even if it rains, we'll go\". Never add \"but\" to the other half: *Although it was late, but we kept talking.",
          "«Para que» + subjunctive is \"so (that)\" + subject + a normal verb, often with can/could/will/would: \"I'll speak slowly so (that) you can understand\". Never *for that you understand, and never *for you understand.",
          "After \"even if\" the future goes in the present tense, just like after \"if\": \"Even if she calls, I won't answer\", not *even if she will call.",
        ],
        examples: [
          { es: "Although it was late, we kept talking.", en: "Aunque era tarde, seguimos hablando. (incorrecto: *Although it was late, but...)" },
          { es: "Even though I was tired, I finished the report.", en: "Aunque estaba cansado, terminé el informe." },
          { es: "Even if it rains, we'll go to the concert.", en: "Aunque llueva, iremos al concierto." },
          { es: "I'll speak slowly so that you can understand.", en: "Hablaré despacio para que me entiendas. (incorrecto: *for that you understand)" },
          { es: "She whispered so the baby wouldn't wake up.", en: "Susurró para que el bebé no se despertara." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "«Aunque me lo pidas de rodillas, no voy a ir.» Which is correct?",
            options: [
              "Even if you beg me on your knees, I'm not going.",
              "Although you beg me on your knees, I'm not going.",
              "Even if you will beg me on your knees, I'm not going.",
              "Even you beg me on your knees, but I'm not going.",
            ],
            correctIndex: 0,
            explanation: "«Aunque» + subjunctive describes something that may or may not happen, so it's \"even if\" + present tense. \"Although\" is for facts.",
          },
          {
            type: "translate",
            direction: "es-en",
            prompt: "Translate into English.",
            source: "Te mando la dirección para que no te pierdas.",
            answer: "I'll send you the address so that you don't get lost.",
            altAnswers: alts(
              "I'll send you the address so that you don't get lost.",
              "I'll send you the address {so that|so} you don't get lost.",
              "I'm sending you the address {so that|so} you don't get lost.",
              "I'll send you the address {so that|so} you won't get lost.",
              "I'm sending you the address {so that|so} you won't get lost.",
            ),
            explanation: "«Para que no» = \"so (that)\" + subject + negative verb. Never *for that you don't get lost.",
          },
        ],
      },
      {
        heading: "Quick recap: remember, forget, stop, again",
        body: [
          "\"Remember to do\" / \"forget to do\" look forward: a task you have to do («acordarse de hacer», «olvidarse de hacer»). \"Remember doing\" / \"never forget doing\" look back at a memory («recordar haber hecho»).",
          "«Dejar de» is \"stop\" + -ing (or \"quit\" / \"give up\" + -ing for habits). \"Stop to do\" means you stop one thing in order to do another: \"We stopped to eat\" = «paramos para comer».",
          "«Volver a» + verb has no verb in English: just add \"again\". «Volvió a llamar» = \"He called again\". *He returned to call is a calque.",
        ],
        examples: [
          { es: "Remember to lock the door.", en: "Acuérdate de cerrar la puerta con llave." },
          { es: "I remember meeting her at a wedding.", en: "Recuerdo haberla conocido en una boda." },
          { es: "I forgot to buy bread.", en: "Se me olvidó comprar pan." },
          { es: "She stopped eating meat last year.", en: "Dejó de comer carne el año pasado." },
          { es: "We stopped to buy gas.", en: "Paramos para echar gasolina." },
          { es: "He made the same mistake again.", en: "Volvió a cometer el mismo error. (incorrecto: *He returned to make...)" },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "«Paramos a tomar un café.» Which is correct?",
            options: ["We stopped to have a coffee.", "We stopped having a coffee.", "We stopped for have a coffee.", "We stopped of having a coffee."],
            correctIndex: 0,
            explanation: "\"Stop to do\" = stop in order to do something. \"We stopped having a coffee\" would mean we gave up the coffee habit.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "es-en",
        prompt: "Translate into English.",
        source: "Aunque llueva mañana, iremos a la playa.",
        answer: "Even if it rains tomorrow, we'll go to the beach.",
        altAnswers: alts(
          "Even if it rains tomorrow, we'll go to the beach.",
          "Even if it rains tomorrow, we{'ll go|'re going|'re still going|'ll still go} to the beach.",
          "We{'ll go|'re going|'re still going|'ll still go} to the beach{,|} even if it rains tomorrow.",
        ),
        explanation: "«Aunque» + subjunctive (a possibility) = \"even if\". After \"even if\" use the present for the future: \"even if it rains\", not *even if it will rain.",
      },
      {
        type: "translate",
        direction: "es-en",
        prompt: "Translate into English.",
        source: "Aunque estaba cansada, fue a trabajar.",
        answer: "Although she was tired, she went to work.",
        altAnswers: alts(
          "Although she was tired, she went to work.",
          "{Although|Even though|Though} {she|he} was tired, {she|he} went to work.",
          "{She|He} went to work{,|} {although|even though|though} {she|he} was tired.",
        ),
        explanation: "«Aunque» + a fact = \"although\" / \"even though\". One linker is enough: no \"but\" in the second half.",
      },
      {
        type: "multiple-choice",
        question: "Correct the learner: *Although the hotel was expensive, but the rooms were small.",
        options: [
          "Although the hotel was expensive, the rooms were small.",
          "Although the hotel was expensive, but the rooms small.",
          "Even if the hotel was expensive, but the rooms were small.",
          "Although that the hotel was expensive, the rooms were small.",
        ],
        correctIndex: 0,
        explanation: "\"Although\" already links the two ideas, so drop \"but\". Spanish allows «aunque... pero» in speech; English doesn't.",
      },
      {
        type: "fill-blank",
        prompt: "Write the bold words in English.",
        sentence: "I'll explain it slowly ___ you can follow.",
        answer: "so that",
        altAnswers: ["so"],
        en: "Te lo explicaré despacio [para que] puedas seguirme.",
        explanation: "«Para que» = \"so (that)\" + subject + verb. Never *for that or *for you can.",
      },
      {
        type: "translate",
        direction: "es-en",
        prompt: "Translate into English.",
        source: "Le presté dinero a mi hermano para que pudiera pagar el alquiler.",
        answer: "I lent my brother money so that he could pay the rent.",
        altAnswers: alts(
          "I lent my brother money so that he could pay the rent.",
          "I lent my brother {some |}money {so that|so} he could pay {the|his} rent.",
          "I lent {some |}money to my brother {so that|so} he could pay {the|his} rent.",
        ),
        explanation: "Past main verb → \"so (that) he could\". «Prestar» is \"lend\" (you give); \"borrow\" is «pedir prestado».",
      },
      {
        type: "translate",
        direction: "es-en",
        prompt: "Translate into English.",
        source: "Acuérdate de regar las plantas.",
        answer: "Remember to water the plants.",
        altAnswers: ["Don't forget to water the plants."],
        explanation: "A task still to do = \"remember to\" + base verb. Never *Remember of watering.",
      },
      {
        type: "translate",
        direction: "es-en",
        prompt: "Translate into English.",
        source: "Me acuerdo de jugar en este parque de pequeño.",
        answer: "I remember playing in this park as a child.",
        altAnswers: alts(
          "I remember playing in this park as a child.",
          "I remember playing in this park {as a child|as a kid|when I was a child|when I was a kid|when I was little|when I was small}.",
        ),
        explanation: "A memory of the past = \"remember\" + -ing. «Acordarse de» has no \"of\" in English: *I remember of playing is wrong.",
      },
      {
        type: "multiple-choice",
        question: "«Se me olvidó llamar a mi madre.» Which is correct?",
        options: ["I forgot to call my mother.", "I forgot calling my mother.", "Me forgot to call my mother.", "It forgot me to call my mother."],
        correctIndex: 0,
        explanation: "A task you didn't do = \"forget to\". The Spanish «se me olvidó» becomes a normal subject + verb: \"I forgot\".",
      },
      {
        type: "translate",
        direction: "es-en",
        prompt: "Translate into English.",
        source: "Paramos en un pueblo para comer algo.",
        answer: "We stopped in a village to eat something.",
        altAnswers: alts(
          "We stopped in a village to eat something.",
          "We stopped {in|at} a {village|small town|town} to {eat something|get something to eat|have something to eat|grab something to eat|grab a bite}.",
        ),
        explanation: "\"Stop to do\" = stop in order to do it. Compare \"We stopped eating\" = «dejamos de comer».",
      },
      {
        type: "fill-blank",
        prompt: "Write the bold words in English.",
        sentence: "My father ___ smoking ten years ago.",
        answer: "quit",
        altAnswers: ["stopped", "gave up"],
        en: "Mi padre [dejó de] fumar hace diez años.",
        explanation: "«Dejar de» = \"stop\" / \"quit\" / \"give up\" + -ing. Never *stopped to smoke here: that means he stopped in order to smoke.",
      },
      {
        type: "translate",
        direction: "es-en",
        prompt: "Translate into English.",
        source: "No vuelvas a hacer eso.",
        answer: "Don't do that again.",
        altAnswers: ["Don't ever do that again.", "Never do that again.", "Don't do it again."],
        explanation: "«Volver a» + verb = the verb + \"again\". «No vuelvas a» = \"Don't... again\" or \"Never... again\".",
      },
      {
        type: "translate",
        direction: "es-en",
        prompt: "Translate into English.",
        source: "Volvió a llamarme a las once de la noche.",
        answer: "He called me again at eleven at night.",
        altAnswers: alts(
          "He called me again at eleven at night.",
          "{He|She} {called|phoned} me again at {eleven|11} {at night|p.m.|pm|o'clock at night}.",
        ),
        explanation: "«Volvió a llamar» = \"called again\". *He returned to call me is a literal calque and sounds wrong.",
      },
      {
        type: "matching",
        instructions: "Match the English with the Spanish.",
        pairs: [
          { left: "I remember locking the door.", right: "Recuerdo haber cerrado la puerta con llave." },
          { left: "Remember to lock the door.", right: "Acuérdate de cerrar la puerta con llave." },
          { left: "We stopped talking.", right: "Dejamos de hablar." },
          { left: "We stopped to talk.", right: "Paramos para hablar." },
          { left: "I forgot to lock the door.", right: "Se me olvidó cerrar la puerta con llave." },
        ],
        explanation: "\"To\" points forward (a purpose or a task); -ing points to the action itself or to a memory.",
      },
      {
        type: "translate",
        direction: "es-en",
        prompt: "Translate into English.",
        source: "Nunca olvidaré ver la aurora boreal por primera vez.",
        answer: "I'll never forget seeing the northern lights for the first time.",
        altAnswers: alts(
          "I'll never forget seeing the northern lights for the first time.",
          "I{'ll| will} never forget seeing the {northern lights|aurora borealis} for the first time.",
        ),
        explanation: "\"Never forget\" + -ing = a memory you'll always keep. \"Never forget to\" would be a task.",
      },
      {
        type: "fill-blank",
        prompt: "Write the bold words in English.",
        sentence: "___ you apologize, she won't forgive you.",
        answer: "Even if",
        en: "[Aunque] le pidas perdón, no te va a perdonar.",
        explanation: "«Aunque» + subjunctive = \"even if\". \"Although you apologize\" would state it as a fact.",
      },
      {
        type: "word-order",
        prompt: "Put the words in order.",
        words: ["She", "left", "the", "light", "on", "so", "that", "the", "kids", "wouldn't", "be", "scared"],
        translation: "Dejó la luz encendida para que los niños no tuvieran miedo.",
        explanation: "\"So that\" + subject + \"wouldn't\" after a past main verb.",
      },
      {
        type: "translate",
        direction: "es-en",
        prompt: "Translate into English.",
        source: "Aunque ganaba poco, era feliz en ese trabajo.",
        answer: "Although I earned little, I was happy in that job.",
        altAnswers: alts(
          "Although I earned little, I was happy in that job.",
          "{Although|Even though|Though} {I|he|she} {earned|made|was earning|was making} {little|very little|little money|very little money|not much|a low salary}, {I|he|she} was happy {in|at} that job.",
        ),
        explanation: "A fact → \"although\" / \"even though\". «Ganar» money is \"earn\" or \"make\", not \"win\".",
      },
      {
        type: "dictation",
        audio: "Even though it was raining, we went for a walk.",
        explanation: "\"Even though\" introduces a fact that makes the main clause surprising.",
      },
    ],
  },
  // ---------------------------------------------------------------------
  // Extra 2. Preposition + -ing patterns
  // ---------------------------------------------------------------------
  {
    slug: "en-b2-dependent-prepositions-ing-drill-1",
    optional: true,
    level: "EN-B2",
    number: 2,
    title: "Extra Practice: Preposition + -ing Patterns",
    summary: "Drill adjective, noun and verb + preposition + -ing: \"good at\", \"tired of\", \"capable of\", \"the idea of\", \"responsible for\", \"insist on\", \"look forward to\". No more *capable to do or *the possibility to.",
    duration: "12 min",
    sections: [
      {
        heading: "Quick recap: after a preposition, -ing",
        body: [
          "Any verb that comes straight after a preposition takes -ing: \"good at cooking\", \"tired of waiting\", \"interested in learning\". Spanish uses the infinitive there («cansado de esperar»), so learners write *tired of wait or switch to *tired to wait.",
          "Learn the preposition with the word: \"capable of\", \"afraid of\", \"proud of\", \"fond of\", \"interested in\", \"keen on\", \"responsible for\", \"famous for\", \"used to\", \"good at\". Note: «capaz de» is \"capable of doing\", never *capable to do.",
          "In \"look forward to\", \"be used to\" and \"object to\", \"to\" is a preposition, so -ing follows: \"I look forward to hearing from you\", not *to hear.",
        ],
        examples: [
          { es: "She's very good at solving problems.", en: "Se le da muy bien resolver problemas." },
          { es: "I'm tired of waiting for the bus.", en: "Estoy harto de esperar el autobús. (incorrecto: *tired to wait)" },
          { es: "He's perfectly capable of doing it himself.", en: "Es perfectamente capaz de hacerlo él solo. (incorrecto: *capable to do)" },
          { es: "Who's responsible for booking the hotel?", en: "¿Quién se encarga de reservar el hotel?" },
          { es: "We look forward to hearing from you.", en: "Esperamos tener noticias suyas." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Correct the learner: *My son is not capable to sit still.",
            options: ["My son isn't capable of sitting still.", "My son isn't capable for sitting still.", "My son isn't capable of sit still.", "My son isn't capable sitting still."],
            correctIndex: 0,
            explanation: "\"Capable of\" + -ing. Compare \"able to\" + base verb: \"He isn't able to sit still\".",
          },
        ],
      },
      {
        heading: "Quick recap: nouns and verbs + preposition + -ing",
        body: [
          "Many nouns work the same way: \"the idea of moving\", \"the possibility of losing\", \"the point of arguing\", \"a reason for leaving\", \"in favor of changing\". *The possibility to lose is a very common Spanish-speaker error.",
          "Verbs too: \"insist on paying\", \"succeed in finding\", \"apologize for being late\", \"think of / about moving\", \"dream of becoming\". And \"before\", \"after\", \"without\", \"instead of\" and \"by\" are prepositions: \"without saying goodbye\".",
        ],
        examples: [
          { es: "I love the idea of living by the sea.", en: "Me encanta la idea de vivir junto al mar." },
          { es: "There's a possibility of losing the deal.", en: "Existe la posibilidad de perder el contrato. (incorrecto: *possibility to lose)" },
          { es: "She insisted on driving me home.", en: "Insistió en llevarme a casa en coche." },
          { es: "He apologized for being rude.", en: "Pidió perdón por haber sido maleducado." },
          { es: "She left without saying goodbye.", en: "Se fue sin despedirse." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the bold words in English.",
            sentence: "We're thinking ___ to Canada.",
            answer: "of moving",
            altAnswers: ["about moving"],
            en: "Estamos pensando [en mudarnos] a Canadá.",
            explanation: "«Pensar en» + infinitive = \"think of / about\" + -ing. Never *thinking in moving or *thinking to move.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "fill-blank",
        prompt: "Write the bold words in English.",
        sentence: "She's perfectly ___ fixing it herself.",
        answer: "capable of",
        en: "Es perfectamente [capaz de] arreglarlo ella sola.",
        explanation: "«Capaz de» = \"capable of\" + -ing. *Capable to fix is a calque.",
      },
      {
        type: "translate",
        direction: "es-en",
        prompt: "Translate into English.",
        source: "Estoy harto de recoger lo que dejan todos.",
        answer: "I'm tired of cleaning up after everyone.",
        altAnswers: alts(
          "I'm tired of cleaning up after everyone.",
          "I'm {tired of|sick of|fed up with|sick and tired of} {cleaning up after|picking up after|tidying up after} {everyone|everybody}.",
        ),
        explanation: "\"Tired of\" / \"sick of\" / \"fed up with\" + -ing. Never *tired to clean.",
      },
      {
        type: "translate",
        direction: "es-en",
        prompt: "Translate into English.",
        source: "Me encanta la idea de vivir en el campo.",
        answer: "I love the idea of living in the country.",
        altAnswers: alts(
          "I love the idea of living in the country.",
          "I {love|really like} the idea of living in the {country|countryside}.",
        ),
        explanation: "\"The idea of\" + -ing. Not *the idea to live in this sense.",
      },
      {
        type: "multiple-choice",
        question: "Correct the learner: *Is there any possibility to change my flight?",
        options: [
          "Is there any possibility of changing my flight?",
          "Is there any possibility of change my flight?",
          "Is there any possibility for to change my flight?",
          "Is there any possibility changing my flight?",
        ],
        correctIndex: 0,
        explanation: "\"Possibility of\" + -ing. If you want an infinitive, use \"chance\" or \"opportunity\": \"a chance to change\".",
      },
      {
        type: "translate",
        direction: "es-en",
        prompt: "Translate into English.",
        source: "¿Quién es el responsable de cerrar la oficina por la noche?",
        answer: "Who is responsible for locking up the office at night?",
        altAnswers: alts(
          "Who is responsible for locking up the office at night?",
          "Who{ is|'s} responsible for {locking up|locking|closing|closing up} the office at night?",
          "Who{ is|'s} in charge of {locking up|locking|closing|closing up} the office at night?",
        ),
        explanation: "\"Responsible for\" + -ing. «El responsable de» is just \"responsible for\" with no article in English.",
      },
      {
        type: "fill-blank",
        prompt: "Write the bold words in English.",
        sentence: "I'm really looking forward to ___ again.",
        answer: "seeing you",
        en: "Tengo muchas ganas de [verte] otra vez.",
        explanation: "In \"look forward to\", \"to\" is a preposition, so -ing follows: \"to seeing you\", not *to see you.",
      },
      {
        type: "translate",
        direction: "es-en",
        prompt: "Translate into English.",
        source: "Consiguió aprobar el examen sin estudiar.",
        answer: "She managed to pass the exam without studying.",
        altAnswers: alts(
          "She managed to pass the exam without studying.",
          "{She|He} {managed to pass|succeeded in passing} the {exam|test} without studying.",
        ),
        explanation: "\"Without\" is a preposition: \"without studying\". \"Succeed in\" also takes -ing, while \"manage\" takes \"to\".",
      },
      {
        type: "translate",
        direction: "es-en",
        prompt: "Translate into English.",
        source: "Insistieron en acompañarme a casa.",
        answer: "They insisted on walking me home.",
        altAnswers: alts(
          "They insisted on walking me home.",
          "They insisted on {walking me home|taking me home|seeing me home|coming home with me|going home with me|driving me home}.",
        ),
        explanation: "\"Insist on\" + -ing. *Insisted in or *insisted to walk are typical errors.",
      },
      {
        type: "multiple-choice",
        question: "«No sirve de nada quejarse.» Which is correct?",
        options: ["There's no point in complaining.", "There's no point to complain.", "It doesn't serve for complaining.", "There's no point of complain."],
        correctIndex: 0,
        explanation: "\"There's no point (in)\" + -ing. «Servir para» is not \"serve for\" here.",
      },
      {
        type: "translate",
        direction: "es-en",
        prompt: "Translate into English.",
        source: "A mi hermano se le da muy bien arreglar bicis.",
        answer: "My brother is very good at fixing bikes.",
        altAnswers: alts(
          "My brother is very good at fixing bikes.",
          "My brother{ is|'s} {very|really} good at {fixing|repairing} {bikes|bicycles}.",
        ),
        explanation: "«Se le da bien» = \"be good at\" + -ing. Never *good in fixing.",
      },
      {
        type: "fill-blank",
        prompt: "Write the bold words in English.",
        sentence: "I apologize ___ late this morning.",
        answer: "for being",
        altAnswers: ["for arriving", "for coming"],
        en: "Pido disculpas [por llegar] tarde esta mañana.",
        explanation: "\"Apologize for\" + -ing. Late arrivals are usually \"for being late\".",
      },
      {
        type: "translate",
        direction: "es-en",
        prompt: "Translate into English.",
        source: "Tiene miedo de perder su trabajo.",
        answer: "She's afraid of losing her job.",
        altAnswers: alts(
          "She's afraid of losing her job.",
          "{She's|She is} {afraid of|scared of|frightened of|worried about} losing her job.",
          "{He's|He is} {afraid of|scared of|frightened of|worried about} losing his job.",
        ),
        explanation: "\"Afraid of\" + -ing. «Su» could be his or her: match it to the subject.",
      },
      {
        type: "matching",
        instructions: "Match the English with the Spanish.",
        pairs: [
          { left: "interested in learning", right: "interesado en aprender" },
          { left: "proud of finishing", right: "orgulloso de terminar" },
          { left: "keen on hiking", right: "aficionado al senderismo" },
          { left: "famous for making", right: "famoso por hacer" },
          { left: "used to getting up early", right: "acostumbrado a madrugar" },
        ],
        explanation: "Each adjective has its own preposition, and every verb after it takes -ing.",
      },
      {
        type: "translate",
        direction: "es-en",
        prompt: "Translate into English.",
        source: "Mi madre está acostumbrada a trabajar de noche.",
        answer: "My mother is used to working at night.",
        altAnswers: alts(
          "My mother is used to working at night.",
          "My {mother|mom|mum}{ is|'s} {used to|accustomed to} working {at night|nights|the night shift}.",
        ),
        explanation: "\"Be used to\" + -ing = «estar acostumbrado a». Don't confuse with \"used to work\" (past habit, «antes trabajaba»).",
      },
      {
        type: "multiple-choice",
        question: "Correct the learner: *I'm thinking in changing jobs.",
        options: ["I'm thinking of changing jobs.", "I'm thinking to change jobs.", "I'm thinking in change jobs.", "I'm thinking for changing jobs."],
        correctIndex: 0,
        explanation: "«Pensar en» = \"think of\" or \"think about\" + -ing. \"In\" is the Spanish preposition leaking through.",
      },
      {
        type: "translate",
        direction: "es-en",
        prompt: "Translate into English.",
        source: "¿Qué tal si pedimos una pizza?",
        answer: "How about ordering a pizza?",
        altAnswers: ["What about ordering a pizza?", "How about we order a pizza?", "Why don't we order a pizza?", "Shall we order a pizza?", "Should we order a pizza?", "How about getting a pizza?", "What about getting a pizza?"],
        explanation: "\"How about / What about\" + -ing for suggestions. \"About\" is a preposition.",
      },
      {
        type: "word-order",
        prompt: "Put the words in order.",
        words: ["He", "left", "the", "party", "without", "saying", "goodbye", "to", "anyone"],
        translation: "Se fue de la fiesta sin despedirse de nadie.",
        explanation: "\"Without\" + -ing. Note \"anyone\" (not \"no one\") after the negative idea of \"without\".",
      },
      {
        type: "dictation",
        audio: "We're thinking of moving closer to the coast.",
        explanation: "\"Think of\" + -ing for plans you are considering.",
      },
    ],
  },
];
