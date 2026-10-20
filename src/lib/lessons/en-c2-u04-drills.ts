// Synced from cheneygross-afk/lengo:src/lib/lessons/en-c2-u04-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Required drill lessons for EN-C2 unit u04 (idioms): a short recap, then graded practice.

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

export const EN_C2_U04_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. Fixed form and restrictions, register, regional variants,
  // the press and games, idioms by image
  // ---------------------------------------------------------------------
  drill(
    "en-c2-idioms-unit-drill-1",
    "Drill: Idiom Form, Register, Regional Variants and Images",
    "Use idioms in their exact frozen form and grammar, match them to the right situation, register and audience, decode twisted headlines and game idioms, and recall idioms by image.",
    "Recap: frozen form, the right situation, the right audience",
    [
      "An idiom is a frozen block: only the tense and the possessive slot change (\"You're pulling my leg\", \"I put my foot in it\"), and the small words are fixed: \"on the other hand\", \"by the skin of my teeth\". Analysable idioms allow the passive (\"strings were pulled\"); others never do (*the bucket was kicked). Many live in the negative: \"won't lift a finger\", \"can't hold a candle to\", \"don't have a leg to stand on\".",
      "Register and attitude: \"pass away\" in a condolence, \"kick the bucket\" only as a joke; \"jump on the bandwagon\" and \"cut corners\" criticize. Match the situation: \"bite the bullet\" for something you dread, \"take the plunge\" for an exciting risk, \"back to square one\" after a failure.",
      "Regional pairs: take the biscuit/cake, touch/knock on wood, spanner/monkey wrench, pinch/grain of salt; baseball gives \"ballpark figure\", \"off base\", \"out of left field\". Headlines twist one word of a familiar idiom; poker and boxing give \"call someone's bluff\" and \"throw in the towel\". By image: \"cost an arm and a leg\", \"smell a rat\", \"under the weather\", \"a piece of cake\".",
    ],
    [
      ["My old printer has finally kicked the bucket.", "Mi vieja impresora por fin pasó a mejor vida."],
      ["He won't lift a finger to help with the move.", "No mueve un dedo para ayudar con la mudanza."],
      ["We're on budget so far, knock on wood.", "De momento vamos dentro del presupuesto, toco madera."],
      ["When she offered to do my shifts for free, I smelled a rat.", "Cuando se ofreció a cubrir mis turnos gratis, me olí que había gato encerrado."],
    ],
    [
      mc(
        "Which sentence keeps the idiomatic meaning «estirar la pata»?",
        [
          "My old laptop finally kicked the bucket.",
          "My old laptop finally kicked a bucket.",
          "My old laptop finally kicked the buckets.",
          "My old laptop finally kicked the pail.",
        ],
        0,
        "The words of an idiom are frozen: no new article, no plural, no synonym. Only the verb changes tense. The other versions describe kicking a real container.",
      ),
      fb(
        "Come on, you're pulling ___ leg! You didn't really meet the president.",
        "my",
        "Vamos, [me] estás tomando el pelo. No conociste de verdad al presidente.",
        [],
        "\"Pull someone's leg\": the possessive slot changes with the person (\"my leg\", \"her leg\"). *You're pulling the leg to me copies the Spanish pronoun.",
      ),
      mc(
        "Which sentence is correct?",
        [
          "On the other hand, the commute is much shorter.",
          "In the other hand, the commute is much shorter.",
          "At the other hand, the commute is much shorter.",
          "By the other hand, the commute is much shorter.",
        ],
        0,
        "The small words of fixed expressions are part of the block: \"on the other hand\". *In the other hand is a very common error under the influence of «por otro lado» and «en cambio».",
      ),
      tr(
        "Aprobé el examen de manejo por los pelos.",
        "I passed my driving test by the skin of my teeth.",
        [
          "I passed the driving test by the skin of my teeth.",
          "I passed my driver's test by the skin of my teeth.",
          "I passed my driving exam by the skin of my teeth.",
          "I scraped through my driving test by the skin of my teeth.",
        ],
        "«Por los pelos» = \"by the skin of my teeth\", with a possessive that matches the subject. *By the skin of the teeth and *by the hairs are not English.",
      ),
      mc(
        "Which passive sentence is acceptable?",
        [
          "A few strings were pulled to get her the internship.",
          "The bucket was kicked by her grandfather last year.",
          "My leg is being pulled by everyone at work.",
          "A foot was put in it at the meeting.",
        ],
        0,
        "Idioms whose parts have meaning allow the passive: in \"pull strings\" the strings are contacts. \"Kick the bucket\", \"pull someone's leg\" and \"put your foot in it\" cannot be analysed, so their passives sound absurd.",
      ),
      tr(
        "Su hermano no mueve un dedo para ayudar en casa.",
        "Her brother won't lift a finger to help around the house.",
        [
          "His brother won't lift a finger to help around the house.",
          "Her brother doesn't lift a finger to help around the house.",
          "His brother doesn't lift a finger to help around the house.",
          "Her brother won't lift a finger to help at home.",
          "His brother won't lift a finger to help at home.",
          "Her brother never lifts a finger to help around the house.",
        ],
        "\"Lift a finger\" lives in the negative (\"won't\", \"doesn't\", \"never\"). The affirmative *He lifted a finger to help sounds wrong or deliberately playful.",
      ),
      fb(
        "The new phone can't hold a ___ to the old model.",
        "candle",
        "El nuevo teléfono no tiene ni [punto de comparación] con el modelo anterior.",
        [],
        "\"Can't hold a candle to\" = is much worse than. It is almost always negative: *It holds a candle to the old model is not used.",
      ),
      kw(
        "LEG",
        "Without any receipts, you have no argument at all.",
        "Without any receipts, you don't have a ___.",
        "leg to stand on",
        [],
        "\"Not have a leg to stand on\" = have no valid argument («no tener argumentos»). Like many idioms, it is fixed in the negative frame.",
      ),
      mc(
        "Which sentence would you write in a condolence card?",
        [
          "I was so sorry to hear that your grandmother passed away.",
          "I was so sorry to hear that your grandmother kicked the bucket.",
          "I was so sorry to hear that your grandmother bit the dust.",
          "I was so sorry to hear that your grandmother popped her clogs.",
        ],
        0,
        "The meaning is right in all four, but only \"passed away\" fits the register. Flippant idioms for death are fine for a broken lawnmower and offensive in a condolence.",
      ),
      tr(
        "Si escatiman en los materiales, el edificio no va a durar.",
        "If they cut corners on the materials, the building won't last.",
        [
          "If they cut corners on materials, the building won't last.",
          "If they cut corners on the materials, the building isn't going to last.",
          "If they cut corners on materials, the building isn't going to last.",
          "If they cut corners on the materials, the building will not last.",
        ],
        "\"Cut corners (on something)\" criticizes saving time or money at the expense of quality: it carries a negative attitude, not just a meaning.",
      ),
      lc(
        "I finally bit the bullet and told my boss I was leaving.",
        "What did the speaker do?",
        [
          "Did something unpleasant they had been putting off",
          "Took an exciting risk with no regrets",
          "Lost their temper with their boss",
          "Accidentally revealed a secret",
        ],
        0,
        "\"Bite the bullet\" = finally face something you dread («hacer de tripas corazón»). For an exciting but risky commitment you \"take the plunge\".",
      ),
      tr(
        "Ya les mandamos el presupuesto; ahora la pelota está en su cancha.",
        "We've sent them the quote; the ball is in their court now.",
        [
          "We've sent them the quote; now the ball is in their court.",
          "We sent them the quote; the ball is in their court now.",
          "We sent them the quote; now the ball is in their court.",
          "We've sent them the estimate; the ball is in their court now.",
          "We've sent them the estimate; now the ball is in their court.",
          "We've sent them the quote, so the ball is in their court now.",
          "We've sent them the quote; the ball's in their court now.",
        ],
        "\"The ball is in their court\" = it is their turn to act. Here the Latin American image «en su cancha» matches English; the Spanish «en su tejado» does not.",
      ),
      fb(
        "The funding fell through, so we're back to ___ one.",
        "square",
        "Se cayó la financiación, así que volvemos a [empezar de cero].",
        [],
        "\"Back to square one\" is for a plan that has failed completely and must start again. *Back to zero is a calque.",
      ),
      mt(
        "Match each British idiom with its American equivalent.",
        [
          ["take the biscuit", "take the cake"],
          ["touch wood", "knock on wood"],
          ["a spanner in the works", "a monkey wrench in the works"],
          ["a storm in a teacup", "a tempest in a teapot"],
          ["with a pinch of salt", "with a grain of salt"],
        ],
        "Same idea, one word changed. Mixing halves (*a spanner in the teapot) sounds odd, and switching varieties within one text looks careless.",
      ),
      tr(
        "Yo me tomaría esas encuestas con pinzas.",
        "I'd take those polls with a grain of salt.",
        [
          "I would take those polls with a grain of salt.",
          "I'd take those polls with a pinch of salt.",
          "I would take those polls with a pinch of salt.",
          "I'd take those surveys with a grain of salt.",
          "I'd take those surveys with a pinch of salt.",
          "I would take those surveys with a grain of salt.",
        ],
        "«Tomárselo con pinzas» = \"take it with a grain of salt\" (US) or \"a pinch of salt\" (UK). *Take it with tweezers means nothing in English.",
      ),
      fb(
        "Can you give me a ___ figure for the catering?",
        "ballpark",
        "¿Me puedes dar una cifra [aproximada] para el catering?",
        [],
        "\"A ballpark figure\" = a rough estimate, from baseball. It is business jargon: fine in an email, not in an essay.",
      ),
      tr(
        "Su pregunta salió de la nada.",
        "Her question came out of left field.",
        [
          "His question came out of left field.",
          "Her question came completely out of left field.",
          "His question came completely out of left field.",
          "Her question came out of nowhere.",
          "His question came out of nowhere.",
        ],
        "\"Out of left field\" (baseball) = completely unexpected or strange. For an international audience \"out of nowhere\" or \"unexpected\" is clearer.",
      ),
      lc(
        "My mother was giving out to me for leaving the back door open.",
        "What was the mother doing?",
        [
          "Scolding the speaker",
          "Giving the speaker presents",
          "Handing out keys",
          "Laughing at the speaker",
        ],
        0,
        "In Irish English \"give out (to someone)\" = complain or scold («regañar»). It has nothing to do with distributing things.",
      ),
      mc(
        "You are writing to a global team of non-native speakers. Which sentence is clearest?",
        [
          "The changes to the schedule were completely unexpected.",
          "The changes to the schedule came out of left field.",
          "The changes to the schedule left us on a sticky wicket.",
          "The changes to the schedule knocked us for six.",
        ],
        0,
        "For an international audience, prefer plain words to heavily local images from baseball or cricket. If half your readers would need the idiom explained, use the plain word.",
      ),
      mc(
        "A headline about a row between two board members of a coffee chain reads \"A storm in a coffee cup\". What does it suggest?",
        [
          "The row was trivial, and it is connected to coffee.",
          "The row was serious and damaged the company.",
          "The weather disrupted the coffee harvest.",
          "The board members threw coffee at each other.",
        ],
        0,
        "Decode it in three steps: the original is \"a storm in a teacup\" (a trivial fuss), \"teacup\" became \"coffee cup\", and the new word links it to the story. The original meaning survives.",
      ),
      tr(
        "Tras meses de pérdidas, tiraron la toalla y cerraron la tienda.",
        "After months of losses, they threw in the towel and closed the store.",
        [
          "After months of losses, they threw in the towel and closed the shop.",
          "After months of losses, they threw in the towel and shut the store.",
          "After months of losses, they threw in the towel and shut the shop.",
          "After months of losing money, they threw in the towel and closed the store.",
          "After months of losses, they threw the towel in and closed the store.",
        ],
        "Boxing gives English and Spanish the same image: \"throw in the towel\" = «tirar la toalla». Note the particle \"in\".",
      ),
      fb(
        "The union threatened to walk out, so management called their ___.",
        "bluff",
        "El sindicato amenazó con abandonar el trabajo, así que la dirección les [vio el farol].",
        [],
        "\"Call someone's bluff\" = challenge them to carry out a threat you think is empty. A \"bluff\" is «un farol»: never *see their lantern.",
      ),
      wo(
        "She's keeping her cards close to her chest about the merger.",
        "No suelta prenda sobre la fusión.",
        "\"Keep your cards close to your chest\" (US also \"close to the vest\") = keep your plans secret. The possessive changes with the subject.",
      ),
      tr(
        "Las conversaciones entre los dos partidos siguen en un punto muerto.",
        "The talks between the two parties remain at a stalemate.",
        [
          "The talks between the two parties are still at a stalemate.",
          "The talks between the two parties remain in stalemate.",
          "Talks between the two parties remain at a stalemate.",
          "The talks between the two parties are still in stalemate.",
          "The talks between the two parties have reached a stalemate.",
        ],
        "\"Stalemate\" comes from chess: neither side can make progress. It is neutral enough for political journalism.",
      ),
      lc(
        "I missed the bus, spilled coffee on my shirt, and then my phone died. The icing on the cake!",
        "How is \"the icing on the cake\" used here?",
        [
          "Ironically, for the final thing that went wrong",
          "Sincerely, for a pleasant extra",
          "Literally, about a cake",
          "As a compliment to someone",
        ],
        0,
        "Normally \"the icing on the cake\" is a pleasant final extra; after a list of disasters it becomes the final blow. Context and intonation signal the irony, as with Spanish «la guinda».",
      ),
      tr(
        "Mi socio y yo no siempre estamos de acuerdo.",
        "My business partner and I don't always see eye to eye.",
        [
          "My partner and I don't always see eye to eye.",
          "My business partner and I do not always see eye to eye.",
          "My partner and I do not always see eye to eye.",
          "My business partner and I don't always agree.",
        ],
        "\"See eye to eye\" = agree, almost always in the negative. Note the order \"My partner and I\".",
      ),
      fb(
        "He got cold ___ two days before signing the lease.",
        "feet",
        "Se [echó atrás] dos días antes de firmar el contrato de alquiler.",
        [],
        "\"Get cold feet\" = become nervous and back out of a commitment. The noun is always plural.",
      ),
      wo(
        "Nobody wanted to mention the elephant in the room.",
        "Nadie quería mencionar el tema que todos evitaban.",
        "\"The elephant in the room\" = an obvious problem that nobody wants to talk about. The article \"the\" is fixed.",
      ),
      tr(
        "¿Quién se fue de la lengua con lo del ascenso?",
        "Who let the cat out of the bag about the promotion?",
        [
          "Who spilled the beans about the promotion?",
          "Who spilt the beans about the promotion?",
        ],
        "«Irse de la lengua» = \"let the cat out of the bag\" or \"spill the beans\". Both take \"about\" for the secret.",
      ),
      fb(
        "I'm feeling a bit under the ___ today, so I'll work from home.",
        "weather",
        "Hoy no me [encuentro muy bien], así que trabajaré desde casa.",
        [],
        "\"Under the weather\" = slightly ill. It is mild: you say it about a cold, not about a serious illness.",
      ),
      mc(
        "Since she got the scholarship, she's been on cloud nine. What does this mean?",
        [
          "She has been extremely happy.",
          "She has been absent-minded.",
          "She has been very busy.",
          "She has been feeling a little ill.",
        ],
        0,
        "\"On cloud nine\" = «en el séptimo cielo». Do not confuse it with Spanish «estar en las nubes», which means absent-minded: in English that is \"miles away\".",
      ),
      tr(
        "El jazz no es lo mío.",
        "Jazz isn't really my cup of tea.",
        [
          "Jazz isn't my cup of tea.",
          "Jazz is not my cup of tea.",
          "Jazz is not really my cup of tea.",
          "Jazz isn't really my thing.",
          "Jazz isn't my thing.",
        ],
        "\"Not my cup of tea\" is used for tastes and preferences and lives in the negative. *Jazz is not the mine is a calque.",
      ),
      dt(
        "Let's call it a day and finish the report tomorrow.",
        "\"Call it a day\" = stop working for now (in the evening, \"call it a night\"). The pronoun \"it\" is part of the fixed form.",
      ),
      dt(
        "In a nutshell, the project is over budget and behind schedule.",
        "\"In a nutshell\" = in a few words («en pocas palabras»). It introduces a short summary.",
      ),
      sp(
        "Can I take a rain check on lunch? I'm exhausted today.",
        "¿Dejamos el almuerzo para otro día? Hoy estoy agotado.",
        "Stress \"RAIN check\" on the first word, as in most compound nouns.",
        "\"Take a rain check\" = decline an invitation but suggest another time. It is friendly, not a rejection.",
      ),
      sp(
        "After years of talking about it, they finally took the plunge and moved abroad.",
        "Tras años hablando de ello, por fin se lanzaron y se mudaron al extranjero.",
        "Link \"took the\" smoothly and stress \"PLUNGE\".",
        "\"Take the plunge\" is for committing to an exciting but risky step; \"bite the bullet\" would suggest dread.",
      ),
      tr(
        "Cuando se ofreció a pagar toda la cuenta, me olí que había gato encerrado.",
        "When he offered to pay the whole bill, I smelled a rat.",
        [
          "When he offered to pay the whole bill, I smelt a rat.",
          "When she offered to pay the whole bill, I smelled a rat.",
          "When she offered to pay the whole bill, I smelt a rat.",
          "When he offered to pay the entire bill, I smelled a rat.",
          "When he offered to pay the whole check, I smelled a rat.",
        ],
        "Different image, same meaning: Spanish hides a cat, English smells a rat. *There was a locked cat means nothing in English.",
      ),
    ],
  ),
  // ---------------------------------------------------------------------
  // Drill 2. Spanish idioms in English, when not to use idioms, idioms in
  // conversation, mangled idioms and mixed metaphors, plus a whole-unit mix
  // ---------------------------------------------------------------------
  drill(
    "en-c2-idioms-unit-drill-2",
    "Drill: Spanish Equivalents, Register Choice, Conversation and Errors",
    "Find the real English partner of common Spanish idioms, decide when a plain word beats an idiom, read and use conversational idioms, and fix eggcorns, mixed metaphors and calques, mixing the whole unit.",
    "Recap: equivalents, judgment and accuracy",
    [
      "Spanish idioms rarely translate word for word: «tomar el pelo» = \"pull someone's leg\", «meter la pata» = \"put your foot in it\", «costar un ojo de la cara» = \"cost an arm and a leg\", «estar en la luna» = \"be miles away\", «la gota que colma el vaso» = \"the last straw\". A few images are shared (\"break the ice\", \"rest on your laurels\"), and when you are unsure, a precise plain word (\"turn someone down\", \"rip someone off\") beats a calque.",
      "Judgment: no idioms in academic essays (\"negligible\", not \"a drop in the bucket\"), moderate ones in business email (\"keep me in the loop\"), no clichés (\"ultimately\", not \"at the end of the day\") and no dated textbook idioms (\"It's pouring\", not \"raining cats and dogs\"). In conversation, read the real intention: \"Tell me about it\" agrees, \"Don't hold your breath\" doubts, \"With all due respect\" disagrees. Use one idiom at a time.",
      "Accuracy: \"for all intents and purposes\", \"nip it in the bud\", \"a moot point\", \"case in point\", \"free rein\", \"scapegoat\"; \"I couldn't care less\" is the safe form. Avoid mixed metaphors (*burn that bridge when we come to it) and calques such as *put the leg or *a hand of paint.",
    ],
    [
      ["I really put my foot in it when I asked about her job.", "Metí la pata hasta el fondo al preguntarle por su trabajo."],
      ["The funding increase is negligible.", "El aumento de la financiación es insignificante."],
      ["A: This traffic is unbelievable. B: Tell me about it.", "A: Este tráfico es increíble. B: Ni me lo digas."],
      ["We need to nip this in the bud.", "Tenemos que cortar esto de raíz."],
    ],
    [
      tr(
        "No le creas, te está tomando el pelo.",
        "Don't believe him; he's pulling your leg.",
        [
          "Don't believe him, he's pulling your leg.",
          "Don't believe her; she's pulling your leg.",
          "Don't believe her, she's pulling your leg.",
          "Don't believe him. He's pulling your leg.",
          "Don't believe her. She's pulling your leg.",
          "Do not believe him; he is pulling your leg.",
        ],
        "«Tomar el pelo» = \"pull someone's leg\". *He's taking your hair suggests a hairdresser. The possessive slot matches the person teased: \"your leg\".",
      ),
      tr(
        "Metí la pata al mencionar la fiesta delante de ella.",
        "I put my foot in it when I mentioned the party in front of her.",
        [
          "I put my foot in it by mentioning the party in front of her.",
          "I put my foot in my mouth when I mentioned the party in front of her.",
          "I put my foot in my mouth by mentioning the party in front of her.",
          "I really put my foot in it when I mentioned the party in front of her.",
          "I put my foot in it mentioning the party in front of her.",
        ],
        "«Meter la pata» = \"put your foot in it\" (US also \"put your foot in your mouth\"). *I put the leg sounds like assembling furniture.",
      ),
      mc(
        "How do you say «Ese sofá costó un ojo de la cara»?",
        [
          "That sofa cost an arm and a leg.",
          "That sofa cost an eye of the face.",
          "That sofa cost an eye and a leg.",
          "That sofa cost the face.",
        ],
        0,
        "English sacrifices two limbs where Spanish sacrifices an eye. The image moves to a different part of the body, which is why guessing never works.",
      ),
      fb(
        "Sorry, what did you say? I was ___ away.",
        "miles",
        "Perdón, ¿qué dijiste? Estaba en la [luna].",
        [],
        "A moment of distraction («estar en la luna», «en las nubes») is \"be miles away\". *I was in the moon is a calque; \"head in the clouds\" describes a dreamy person in general.",
      ),
      mc(
        "«El examen fue pan comido.» Which is correct?",
        [
          "The exam was a piece of cake.",
          "The exam was eaten bread.",
          "The exam was a piece of bread.",
          "The exam was my cup of tea.",
        ],
        0,
        "English eats cake where Spanish eats bread. \"A walk in the park\" and \"a breeze\" also work; \"my cup of tea\" is about tastes, not difficulty.",
      ),
      mt(
        "Match each Spanish idiom with its English equivalent.",
        [
          ["no tener pelos en la lengua", "not mince your words"],
          ["estar hasta las narices", "be sick and tired of"],
          ["tirar la casa por la ventana", "go all out"],
          ["ser la gota que colma el vaso", "be the last straw"],
          ["ponerse las pilas", "get your act together"],
        ],
        "Different images, same meanings. None of these can be translated word for word: *have no hairs on the tongue or *put on the batteries mean nothing in English.",
      ),
      tr(
        "Me quedé de piedra cuando vi el precio.",
        "I was speechless when I saw the price.",
        [
          "I was stunned when I saw the price.",
          "I was gobsmacked when I saw the price.",
          "I was dumbfounded when I saw the price.",
          "I was speechless when I saw the price tag.",
          "I was stunned when I saw the price tag.",
        ],
        "«Quedarse de piedra» = \"be stunned\", \"be speechless\" or British \"be gobsmacked\". *I stayed of stone is a calque.",
      ),
      fb(
        "His third excuse in a week was the last ___.",
        "straw",
        "Su tercera excusa en una semana fue [la gota que colmó el vaso].",
        [],
        "\"The last straw\" (or \"the straw that broke the camel's back\") = «la gota que colma el vaso». *The last drop is not the English image.",
      ),
      lc(
        "She's a chip off the old block; she argues exactly like her father.",
        "What does the speaker mean?",
        [
          "She is very similar to her father",
          "She has fallen out with her father",
          "She feels resentful towards her father",
          "She is much cleverer than her father",
        ],
        0,
        "\"A chip off the old block\" = «de tal palo, tal astilla». Do not confuse it with \"a chip on your shoulder\", which means feeling resentful.",
      ),
      tr(
        "¿Me echas una mano con la mudanza?",
        "Can you give me a hand with the move?",
        [
          "Could you give me a hand with the move?",
          "Can you lend me a hand with the move?",
          "Could you lend me a hand with the move?",
          "Will you give me a hand with the move?",
          "Can you give me a hand with moving?",
        ],
        "A shared image: «echar una mano» = \"give\" or \"lend someone a hand\". The verb is not *throw.",
      ),
      fb(
        "We can't rest on our ___ just because sales were good last year.",
        "laurels",
        "No podemos dormirnos en los [laureles] solo porque las ventas fueron buenas el año pasado.",
        [],
        "\"Rest on your laurels\" shares its classical image with «dormirse en los laureles»; only the verb differs (rest, not sleep).",
      ),
      wo(
        "With this offer we're caught between a rock and a hard place.",
        "Con esta oferta estamos entre la espada y la pared.",
        "Not everything that looks shared is: «entre la espada y la pared» is \"between a rock and a hard place\", a different image.",
      ),
      mc(
        "«Le dio calabazas.» Which is correct?",
        [
          "She turned him down.",
          "She gave him pumpkins.",
          "She gave him the pumpkin.",
          "She sold him a pumpkin.",
        ],
        0,
        "*To give someone pumpkins means nothing in English. When there is no matching idiom, a precise plain phrasal verb (\"turn someone down\", \"reject someone\") sounds most natural.",
      ),
      tr(
        "Ese mecánico nos dio gato por liebre.",
        "That mechanic ripped us off.",
        [
          "That mechanic conned us.",
          "That mechanic cheated us.",
          "That mechanic took us for a ride.",
          "That mechanic sold us a pup.",
        ],
        "«Dar gato por liebre» = \"rip someone off\" or \"con someone\" (British also \"sell someone a pup\"). *He gave us cat for hare is nonsense.",
      ),
      kw(
        "HAIRS",
        "Stop overcomplicating things; the plan is fine.",
        "Stop ___; the plan is fine.",
        "splitting hairs",
        [],
        "«Buscarle tres pies al gato» = \"split hairs\" (argue about tiny, unimportant details). *Look for three feet on the cat means nothing.",
      ),
      mc(
        "Which sentence suits an academic essay?",
        [
          "The increase in funding is negligible compared with the scale of the problem.",
          "The increase in funding is a drop in the bucket compared with the scale of the problem.",
          "The increase in funding is peanuts compared with the scale of the problem.",
          "The increase in funding is just the tip of the iceberg, at the end of the day.",
        ],
        0,
        "Academic writing expects precise, literal language. Idioms, slang and clichés (\"at the end of the day\") are out of place in an essay.",
      ),
      mc(
        "Which is the best replacement for \"think outside the box\" in a report?",
        [
          "find an unconventional solution",
          "push the envelope",
          "move the needle",
          "circle back",
        ],
        0,
        "\"Think outside the box\" is a worn-out cliché, and the other options are clichés too. The fix is a plain, precise phrase.",
      ),
      tr(
        "Por favor, mantenme al tanto de cualquier cambio.",
        "Please keep me in the loop about any changes.",
        [
          "Please keep me in the loop on any changes.",
          "Please keep me posted on any changes.",
          "Please keep me posted about any changes.",
          "Please keep me informed of any changes.",
          "Please keep me informed about any changes.",
          "Please keep me updated on any changes.",
        ],
        "Moderate idioms like \"keep someone in the loop\" are fine in a business email. Avoid anything slangy or sarcastic in that register.",
      ),
      mc(
        "How would most native speakers say «Está lloviendo a cántaros» in conversation today?",
        [
          "It's pouring.",
          "It's raining cats and dogs.",
          "It's raining jugs.",
          "It's raining in pitchers.",
        ],
        0,
        "\"Raining cats and dogs\" is understood but rarely used; it marks you as a learner. \"It's pouring\" (UK also \"bucketing down\") is the everyday choice.",
      ),
      lc(
        "A: The traffic on this road is terrible. B: Tell me about it.",
        "What does B mean?",
        [
          "I completely agree",
          "Please give me more details",
          "I don't believe you",
          "I've never driven on this road",
        ],
        0,
        "\"Tell me about it\" is a reaction, not a request: «ni me lo digas». Answering it with a story is a typical learner misunderstanding.",
      ),
      tr(
        "Dice que va a dejar de fumar, pero espera sentado.",
        "He says he's going to quit smoking, but don't hold your breath.",
        [
          "He says he's going to stop smoking, but don't hold your breath.",
          "She says she's going to quit smoking, but don't hold your breath.",
          "She says she's going to stop smoking, but don't hold your breath.",
          "He says he is going to quit smoking, but don't hold your breath.",
          "He says he'll quit smoking, but don't hold your breath.",
        ],
        "«Espera sentado» = \"don't hold your breath\": it is unlikely to happen soon. *Wait sitting down is a calque.",
      ),
      fb(
        "Go on, tell me everything. I'm all ___.",
        "ears",
        "Anda, cuéntamelo todo. Soy todo [oídos].",
        [],
        "A shared image: \"I'm all ears\" = «soy todo oídos». Note \"ears\", not *hearings.",
      ),
      tr(
        "Todavía no sabemos si habrá viaje; está en el aire.",
        "We still don't know if there will be a trip; it's up in the air.",
        [
          "We still don't know whether there will be a trip; it's up in the air.",
          "We still don't know if there's going to be a trip; it's up in the air.",
          "We still don't know if the trip is happening; it's up in the air.",
          "We still don't know if there will be a trip; it's still up in the air.",
          "We don't know yet if there will be a trip; it's up in the air.",
        ],
        "Here Spanish and English agree, with one small word added: \"up in the air\" = undecided.",
      ),
      fb(
        "We're going to the beach on Sunday. Count me ___!",
        "in",
        "Vamos a la playa el domingo. ¡[Apúntame]!",
        [],
        "\"Count me in\" = I'll join («apúntame»); \"count me out\" = I won't. *Write me down is a calque.",
      ),
      mc(
        "\"With all due respect, I think the figures are wrong.\" What is the speaker doing?",
        [
          "Disagreeing, politely but firmly",
          "Agreeing enthusiastically",
          "Apologizing for a mistake",
          "Asking for more information",
        ],
        0,
        "\"With all due respect\" almost always introduces disagreement, sometimes strong. A Mastery listener reads the intention, not just the words.",
      ),
      lc(
        "Fair enough. We'll do it your way, then.",
        "How does the speaker react?",
        [
          "They accept the other person's point, perhaps reluctantly",
          "They reject the other person's idea",
          "They think the other person is being unfair",
          "They are very excited about the idea",
        ],
        0,
        "\"Fair enough\" accepts a point, often reluctantly («está bien, es razonable»). It is not a comment on fairness.",
      ),
      mc(
        "Which sentence sounds most natural?",
        [
          "We've done everything we can. The ball's in their court now.",
          "We need to bite the bullet and think outside the box, because the ball is in our court.",
          "It's now or never, so let's take the bull by the horns and get the ball rolling.",
          "We'll bite the bullet when the chips are down and the ball is in their court.",
        ],
        0,
        "Natives use one idiom at a time, often at the end as a punchline. Stacking idioms sounds artificial and mixes clashing images.",
      ),
      mc(
        "Which sentence is correct?",
        [
          "For all intents and purposes, the deal is done.",
          "For all intensive purposes, the deal is done.",
          "For all intense purposes, the deal is done.",
          "For all intents and proposes, the deal is done.",
        ],
        0,
        "\"For all intents and purposes\" = «a todos los efectos». *For all intensive purposes is a famous eggcorn: a mishearing written down.",
      ),
      fb(
        "We need to nip this problem in the ___ before it spreads.",
        "bud",
        "Tenemos que cortar este problema de [raíz] antes de que se extienda.",
        [],
        "\"Nip it in the bud\": a bud is a flower bud, cut before it opens. *Nip it in the butt is a common mishearing.",
      ),
      fb(
        "The board gave her free ___ to reorganize the department.",
        "rein",
        "La junta le dio [carta blanca] para reorganizar el departamento.",
        [],
        "\"Free rein\" comes from horse riding (loosening the reins). *Free reign is an eggcorn based on a king's reign.",
      ),
      wo(
        "We'll cross that bridge when we come to it.",
        "Ya nos ocuparemos de eso cuando llegue el momento.",
        "Keep the image complete: \"cross that bridge when we come to it\". Blending it with \"burn your bridges\" (*burn that bridge when we come to it) is a mixed metaphor.",
      ),
      tr(
        "Tiene mucha cara: me pidió dinero otra vez.",
        "He's got a lot of nerve: he asked me for money again.",
        [
          "He has a lot of nerve: he asked me for money again.",
          "She's got a lot of nerve: she asked me for money again.",
          "She has a lot of nerve: she asked me for money again.",
          "He's got a lot of nerve; he asked me for money again.",
          "She's got a lot of nerve; she asked me for money again.",
          "He's got some nerve: he asked me for money again.",
          "She's got some nerve: she asked me for money again.",
        ],
        "«Tener mucha cara» = \"have a lot of nerve\" (UK also \"be cheeky\"). *He has a lot of face is a calque that English speakers will not understand.",
      ),
      tr(
        "La cerca necesita otra mano de pintura.",
        "The fence needs another coat of paint.",
        [
          "The fence needs a second coat of paint.",
          "The fence needs one more coat of paint.",
        ],
        "«Una mano de pintura» = \"a coat of paint\". *A hand of paint uses real English words in a combination that does not exist.",
      ),
      dt(
        "Whether he knew about it or not is a moot point now.",
        "\"A moot point\" = a question that no longer matters. *A mute point is an eggcorn: \"moot\" rhymes with \"boot\".",
      ),
      dt(
        "The intern was made the scapegoat for the whole mess.",
        "\"Scapegoat\" («chivo expiatorio») is one word. *Escape goat is a mishearing.",
      ),
      sp(
        "I hear you, but we really can't change the deadline.",
        "Entiendo lo que dices, pero de verdad no podemos cambiar la fecha límite.",
        "Stress \"HEAR\" and \"can't\"; pause slightly after the comma.",
        "\"I hear you\" acknowledges a point without agreeing to it: a soft way to hold your position.",
      ),
      mc(
        "Which sentence contains no error?",
        [
          "I put my foot in it, but at least I didn't burn my bridges with the client.",
          "I put the leg, but at least I didn't burn my bridges with the client.",
          "I put my foot in it, and we'll burn that bridge when we come to it.",
          "For all intensive purposes, I put my foot in it with the client.",
        ],
        0,
        "Whole-unit check: \"put my foot in it\" (not the calque *put the leg), \"burn your bridges\" used on its own (not blended with \"cross that bridge\"), and \"intents and purposes\", not the eggcorn.",
      ),
    ],
  ),
];
