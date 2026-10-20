// Synced from cheneygross-afk/lengo:src/lib/lessons/en-c2-u08-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Required drill lessons for EN-C2 unit u08 (euphemism and indirect language): a short recap, then graded practice.

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

export const EN_C2_U08_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. Delicate topics, institutional euphemism, implicature and
  // indirect requests, and decoding references, reports and emails
  // ---------------------------------------------------------------------
  drill(
    "en-c2-euphemism-unit-drill-1",
    "Drill: Delicate Topics, Spin, Indirect Requests and Coded Texts",
    "Soften talk of death, age, money, work and the body, see through institutional spin, make and refuse requests indirectly, and decode what references, reports, press releases and emails are really saying.",
    "Recap: soften, spin, imply, decode",
    [
      "Delicate topics have gentle defaults: \"pass away\", \"the late\", \"terminally ill\", \"older people\" or \"seniors\" (never *ancient), \"between jobs\", \"laid off\", \"of modest means\", \"the restroom\" (US), \"she's expecting\". Institutions go further: \"collateral damage\", \"negative growth\", \"rightsizing\", \"mistakes were made\".",
      "English wraps requests in questions and modals (\"Would you mind sending...?\", \"I was wondering if you could...\") and refuses without saying no (\"I'll bear it in mind\", \"I'd love to, but...\"). In references and reports, read the shadow meaning: \"a strong personality\", \"results were mixed\", \"a frank exchange of views\", \"as per my last email\".",
    ],
    [
      ["Her uncle passed away in March.", "Su tío falleció en marzo."],
      ["The company is reducing headcount.", "La empresa está recortando personal."],
      ["Would you mind holding the door?", "¿Te importaría sostener la puerta?"],
      ["The results were mixed.", "Los resultados fueron dispares."],
    ],
    [
      tr(
        "Su abuela falleció el mes pasado.",
        "Her grandmother passed away last month.",
        [
          "His grandmother passed away last month.",
          "Their grandmother passed away last month.",
          "Her grandmother died last month.",
          "His grandmother died last month.",
          "Her grandma passed away last month.",
          "His grandma passed away last month.",
        ],
        "«Fallecer» is \"pass away\", the safe, gentle choice when speaking to or about the bereaved. \"Die\" is neutral and also correct.",
      ),
      mc(
        "\"I'm afraid Mr. Grant is no longer with us.\" What could this mean?",
        [
          "Either that he has died or that he has left the company; context decides",
          "Only that he has died",
          "Only that he is on vacation",
          "That he is in a meeting",
        ],
        0,
        "\"No longer with us\" is a gentle euphemism for death, but at work it can also mean someone has left. Make the context clear when you use it.",
      ),
      fb(
        "Her aunt is ___ ill and is receiving palliative care at home.",
        "terminally",
        "Su tía es una enferma [terminal] y recibe cuidados paliativos en casa.",
        [],
        "The adverb modifies \"ill\": \"terminally ill\". *Terminal ill is the classic error from «enfermo terminal».",
      ),
      tr(
        "El difunto señor Ortega le dejó su biblioteca a la universidad.",
        "The late Mr. Ortega left his library to the university.",
        [
          "The late Mr Ortega left his library to the university.",
          "The late Mr. Ortega donated his library to the university.",
          "The late Mr. Ortega bequeathed his library to the university.",
          "The late Mr. Ortega left the university his library.",
        ],
        "«El difunto» before a name is \"the late\": \"the late Mr. Ortega\". *The deceased Mr. Ortega sounds like a police report.",
      ),
      mc(
        "How do you say «Ayudaron a un anciano a cruzar la calle»?",
        [
          "An elderly man was helped across the street.",
          "An ancient man was helped across the street.",
          "An antique man was helped across the street.",
          "An old-fashioned man was helped across the street.",
        ],
        0,
        "False friend: «anciano» is \"elderly\" or \"an older man\". \"Ancient\" is for ruins and civilizations, or a joke about absurdly old things.",
      ),
      tr(
        "Hay un descuento para personas mayores los martes.",
        "There's a discount for seniors on Tuesdays.",
        [
          "There is a discount for seniors on Tuesdays.",
          "There's a senior discount on Tuesdays.",
          "There's a discount for older people on Tuesdays.",
          "There's a discount for older adults on Tuesdays.",
          "There's a discount for senior citizens on Tuesdays.",
          "On Tuesdays there's a discount for seniors.",
          "There's a seniors' discount on Tuesdays.",
        ],
        "\"Seniors\" (very common in the US) or \"older people/adults\" are the usual public terms. «Personas mayores» is never *major people.",
      ),
      fb(
        "My grandfather is getting ___ a bit, but he still plays tennis twice a week.",
        "on",
        "Mi abuelo [ya tiene sus años], pero todavía juega tenis dos veces por semana.",
        [],
        "\"Getting on (a bit)\" softens age with vagueness, like «ya tiene sus años».",
      ),
      tr(
        "Ahora mismo estoy sin trabajo, buscando mi próximo puesto.",
        "I'm between jobs at the moment, looking for my next role.",
        [
          "I'm between jobs right now, looking for my next role.",
          "I'm between jobs at the moment, looking for my next position.",
          "I'm between jobs right now, looking for my next position.",
          "I'm between jobs at the moment, looking for my next job.",
          "At the moment I'm between jobs, looking for my next role.",
          "I'm out of work at the moment, looking for my next role.",
          "I'm out of work right now, looking for my next job.",
        ],
        "Speaking about yourself socially, \"between jobs\" softens «sin trabajo». \"Unemployed\" is accurate but sounds like a statistic.",
      ),
      mc(
        "The factory closed because of falling demand. Three hundred workers ___.",
        ["were laid off", "were fired", "got the boot", "resigned"],
        0,
        "\"Laid off\" (US; UK \"made redundant\") means losing your job for economic reasons, not your fault. \"Fired\" suggests the worker did something wrong.",
      ),
      tr(
        "Disculpe, ¿dónde está el baño?",
        "Excuse me, where's the restroom?",
        [
          "Excuse me, where is the restroom?",
          "Excuse me, where's the bathroom?",
          "Excuse me, where is the bathroom?",
          "Excuse me, where are the restrooms?",
          "Excuse me, where are the toilets?",
          "Excuse me, where's the men's room?",
          "Excuse me, where's the ladies' room?",
        ],
        "In a US restaurant or office, ask for \"the restroom\"; at someone's home, \"the bathroom\"; in Britain, \"the toilets\". A bare \"toilet\" can sound crude to Americans.",
      ),
      mc(
        "Your colleague tells you her sister is «embarazada». Which sentence passes on the news?",
        ["Her sister is expecting.", "Her sister is embarrassed.", "Her sister is pregnated.", "Her sister is in hope."],
        0,
        "\"She's expecting\" is a warm alternative to \"pregnant\". \"Embarrassed\" is the famous false friend: it means «avergonzada».",
      ),
      tr(
        "Ha engordado un poco desde que dejó el gimnasio.",
        "He's put on a bit of weight since he stopped going to the gym.",
        [
          "He has put on a bit of weight since he stopped going to the gym.",
          "He's put on a little weight since he stopped going to the gym.",
          "He's put on a bit of weight since he quit the gym.",
          "He's put on some weight since he stopped going to the gym.",
          "She's put on a bit of weight since she stopped going to the gym.",
          "She's put on a little weight since she stopped going to the gym.",
          "She's put on a bit of weight since she quit the gym.",
          "He's gained a bit of weight since he stopped going to the gym.",
          "She's gained a bit of weight since she stopped going to the gym.",
        ],
        "\"Put on a bit of weight\" describes a change gently; adjectives like \"fat\" about a person are usually rude.",
      ),
      mc(
        "\"The air strike caused significant collateral damage.\" What is the statement avoiding?",
        [
          "That civilians were killed or their homes destroyed",
          "That the strike missed its target completely",
          "That the weapons were expensive",
          "That the soldiers were injured by their own side",
        ],
        0,
        "\"Collateral damage\" hides accidental civilian deaths and destruction. Being shot by your own side is \"friendly fire\".",
      ),
      tr(
        "El ejército sufrió numerosas bajas.",
        "The army suffered heavy casualties.",
        ["The army suffered many casualties.", "The army suffered numerous casualties.", "The army took heavy casualties.", "The army sustained heavy casualties."],
        "«Bajas» is \"casualties\" (dead and wounded); \"fatalities\" are only the dead. *Lows is a word-for-word error.",
      ),
      mt(
        "Match each piece of official language with its plain meaning.",
        [
          ["negative growth", "the economy shrank"],
          ["revenue enhancement", "a tax rise"],
          ["rightsizing", "cutting jobs"],
          ["pre-owned", "used"],
          ["efficiencies", "spending cuts"],
        ],
        "Spin replaces short, concrete words (\"shrink\", \"raise\", \"cut\") with abstract Latinate nouns. Your job as a reader is to undo it.",
      ),
      kw(
        "MADE",
        "Someone in the department made mistakes, but we won't say who.",
        "Mistakes ___.",
        "were made",
        [],
        "The agentless passive removes the person responsible: \"Mistakes were made\" (by whom?). It is the signature grammar of spin.",
      ),
      tr(
        "Pedimos disculpas por las molestias que esto haya podido ocasionar.",
        "We apologize for any inconvenience this may have caused.",
        [
          "We apologize for any inconvenience this might have caused.",
          "We apologise for any inconvenience this may have caused.",
          "We apologize for any inconvenience that this may have caused.",
          "We apologize for any inconvenience this may have caused you.",
        ],
        "\"Any inconvenience this may have caused\" is the distancing conditional: an apology that never quite admits the inconvenience happened. \"Inconvenience\" is uncountable here.",
      ),
      lc(
        "Please note that we will be adjusting our prices from January.",
        "What will happen in January?",
        ["Prices will go up", "Prices will go down", "Prices will stay the same", "The company will close"],
        0,
        "Prices that rise are \"adjusted\". The vague verb hides the direction, but customers know which way it goes.",
      ),
      tr(
        "¿Te importaría mandarme el informe antes del mediodía?",
        "Would you mind sending me the report before noon?",
        [
          "Would you mind sending me the report before midday?",
          "Would you mind sending me the report by noon?",
          "Would you mind sending me the report by midday?",
          "Would you mind sending the report to me before noon?",
        ],
        "\"Would you mind\" takes an -ing form: \"sending\", never *to send. It is far softer than the imperative «mándame».",
      ),
      mc(
        "A colleague asks, \"Would you mind closing the window?\" You're happy to. What do you say?",
        ["No, not at all.", "Yes, I mind.", "Yes, of course I mind.", "No, I don't close it."],
        0,
        "You are answering \"Do you mind?\", so \"No, not at all\" means «sí, claro». Saying \"Yes\" would mean you object.",
      ),
      tr(
        "Quería preguntarte si podrías ayudarme con la mudanza.",
        "I was wondering if you could help me with the move.",
        [
          "I was wondering if you could help me move.",
          "I was wondering whether you could help me with the move.",
          "I was wondering whether you could help me move.",
          "I was wondering if you could help me with my move.",
          "I was wondering if you could help me with moving.",
          "I was wondering if you'd be able to help me with the move.",
        ],
        "\"I was wondering if...\" uses the past for distance, but it refers to now. It is one of the softest English request frames.",
      ),
      wo(
        "I don't suppose you could give me a ride to the airport, could you?",
        "No podrías llevarme al aeropuerto, ¿verdad?",
        "The most indirect frame: a negative statement plus a tag. It makes refusing easy, which is what makes it polite.",
      ),
      mc(
        "You suggest a new filing system. Your manager says, \"Thanks, I'll bear it in mind,\" and turns back to her screen. What does she most likely mean?",
        [
          "Probably nothing will be done about it",
          "She will introduce the system next week",
          "She wants a written proposal",
          "She is offended by the suggestion",
        ],
        0,
        "\"I'll bear it in mind\" closing a conversation is often a polite no. An action and a date (\"I'll look into it by Friday\") would signal a real yes.",
      ),
      tr(
        "Me encantaría, pero me temo que tengo un compromiso esa noche.",
        "I'd love to, but I'm afraid I've got something on that evening.",
        [
          "I'd love to, but I'm afraid I've got something on that night.",
          "I'd love to, but I'm afraid I have something on that evening.",
          "I'd love to, but I'm afraid I have something on that night.",
          "I'd love to, but I'm afraid I have plans that evening.",
          "I'd love to, but I'm afraid I have plans that night.",
          "I'd love to, but I'm afraid I've got plans that evening.",
          "I'd love to, but I'm afraid I've got plans that night.",
          "I'd love to, but I'm afraid I have a prior engagement that evening.",
        ],
        "Regret + reason: \"I'd love to, but I'm afraid...\". «Compromiso» here is \"something on\" or \"plans\", not *a compromise (a mutual concession).",
      ),
      lc(
        "You might want to double-check those figures before the board meeting.",
        "What is the manager really saying?",
        [
          "Check the figures: there is probably a mistake",
          "The figures are fine, but you can check them if you like",
          "The board meeting has been canceled",
          "Someone else will check the figures",
        ],
        0,
        "A suggestion that is really an instruction: \"You might want to...\" from a manager means «revisa las cifras».",
      ),
      mc(
        "In a meeting, someone says, \"I hear what you're saying, but we're going ahead with the plan.\" What does \"I hear what you're saying\" signal?",
        [
          "I disagree and I'm not going to change my mind",
          "I completely agree with you",
          "I couldn't hear you; please repeat it",
          "I need more time to think about it",
        ],
        0,
        "\"I hear what you're saying\" acknowledges the words while rejecting the point. \"I take your point, but...\" concedes a little more.",
      ),
      mc(
        "A reference says: \"Daniel has a strong personality and is never afraid to voice his opinions.\" What might the writer be hinting?",
        [
          "Daniel may be difficult to work with",
          "Daniel is an excellent team leader",
          "Daniel is shy in meetings",
          "Daniel speaks several languages",
        ],
        0,
        "References are often positive on the surface; the message is in the wording. \"A strong personality\" can be code for confrontational.",
      ),
      fb(
        "Time management remains an area for ___.",
        "development",
        "La gestión del tiempo sigue siendo un [aspecto a mejorar].",
        ["improvement"],
        "Performance-review code: \"an area for development\" is a weakness, stated tactfully.",
      ),
      tr(
        "Los resultados del estudio fueron dispares.",
        "The results of the study were mixed.",
        ["The study's results were mixed.", "The study results were mixed.", "The results from the study were mixed."],
        "\"Mixed\" results usually means mostly disappointing. A strong result would come with a number.",
      ),
      mc(
        "\"The two foreign ministers had a frank exchange of views.\" What happened?",
        ["They argued", "They agreed on everything", "They exchanged gifts", "They didn't speak to each other"],
        0,
        "Diplomatic code: \"a frank exchange of views\" means an argument; \"constructive talks\" means some progress but no agreement.",
      ),
      tr(
        "El club y el entrenador se separaron de mutuo acuerdo.",
        "The club and the coach parted ways by mutual agreement.",
        [
          "The club and the coach have parted ways by mutual agreement.",
          "The club and the coach parted ways by mutual consent.",
          "The club and the coach have parted ways by mutual consent.",
          "The club and the coach parted company by mutual agreement.",
          "The club and the coach parted company by mutual consent.",
        ],
        "Press-release code: \"parted ways by mutual agreement\" frequently means the coach was dismissed.",
      ),
      mc(
        "An email from your manager begins: \"As per my last email, the deadline is Friday.\" What is the subtext?",
        [
          "I've already told you this",
          "I'm changing the deadline",
          "I forgot to tell you before",
          "This is just general information",
        ],
        0,
        "\"As per my last email\" is passive-aggressive code for «ya te lo dije». The neutral alternative is \"Just following up on...\".",
      ),
      dt(
        "Just a friendly reminder that the invoice is now two weeks overdue.",
        "\"Friendly reminder\" sounds soft, but it means «vas tarde». Note \"overdue\", /ˌoʊvərˈduː/.",
      ),
      dt(
        "With the greatest respect, I think you've misread the situation.",
        "\"With the greatest respect\" introduces strong disagreement: the warmer the respect phrase, the sharper what follows.",
      ),
      sp(
        "Sorry to bother you, but I was wondering if you could cover my shift on Friday.",
        "Perdona que te moleste, pero quería preguntarte si podrías cubrir mi turno el viernes.",
        "Keep \"I was wondering if\" light and quick; stress \"cover\" and \"Friday\".",
        "Apologizing for the interruption plus a distanced request: the full English politeness package.",
      ),
      sp(
        "I'm between jobs at the moment, so I've got a bit more free time.",
        "Ahora mismo estoy sin trabajo, así que tengo un poco más de tiempo libre.",
        "\"Between jobs\" is said casually, without apology.",
        "A social euphemism for being out of work that keeps the conversation relaxed.",
      ),
    ],
  ),
  // ---------------------------------------------------------------------
  // Drill 2. Euphemism vs dysphemism and inclusive language, softening
  // and sharpening corporate messages, politeness pragmatics, condolence
  // messages, and a whole-unit mix
  // ---------------------------------------------------------------------
  drill(
    "en-c2-euphemism-unit-drill-2",
    "Drill: Inclusive Language, Tactful Rewrites, Polite Refusals and Condolences",
    "Place words on the soft-neutral-harsh scale, use current inclusive terms, soften bad news without hiding the facts and strip spin back to plain English, order and refuse politely, and write condolences with the right English formulas.",
    "Recap: tone, tact and the right formula",
    [
      "Words sit on a scale: \"passed away\" (soft), \"died\" (neutral), \"kicked the bucket\" (dysphemism, fine for a dead phone, not a person). Inclusive defaults: \"accessible\", \"uses a wheelchair\", \"died by suicide\", \"firefighter\", singular \"they\". Soften bad news with regret and decision frames but keep the fact, the number and the date; sharpen spin by naming who did what.",
      "Order with questions (\"Could I have...?\", \"I'll have...\"), say \"Yes, please\" and \"No, thanks\", and refuse with regret, reason and alternative. Condolences use fixed formulas (\"I was so sorry to hear about...\", \"Thinking of you\"), never calques like *I accompany you in the feeling; \"sympathy\" means «pésame», not «simpatía».",
    ],
    [
      ["My old printer has finally kicked the bucket.", "Mi impresora vieja por fin estiró la pata."],
      ["If a guest arrives late, give them a key.", "Si un huésped llega tarde, dale una llave."],
      ["I'm afraid I can't make it, but thanks for asking.", "Me temo que no puedo ir, pero gracias por invitarme."],
      ["Thinking of you at this difficult time.", "Pienso en ti en estos momentos tan difíciles."],
    ],
    [
      mc(
        "Which expression is a dysphemism, harsher than the neutral word?",
        ["kicked the bucket", "passed away", "died", "is no longer with us"],
        0,
        "\"Died\" is neutral; \"passed away\" and \"is no longer with us\" are euphemisms; \"kicked the bucket\" is a jokey, callous dysphemism.",
      ),
      tr(
        "Mi celular viejo por fin estiró la pata.",
        "My old phone has finally kicked the bucket.",
        [
          "My old phone finally kicked the bucket.",
          "My old cell phone has finally kicked the bucket.",
          "My old cell phone finally kicked the bucket.",
          "My old cellphone has finally kicked the bucket.",
        ],
        "«Estirar la pata» matches \"kick the bucket\" in register, not in image (*stretch the leg). About a phone it is friendly humor; about a real person's death it would sound callous.",
      ),
      tr(
        "Lo echaron a las dos semanas.",
        "He got the boot after two weeks.",
        [
          "He got the boot after just two weeks.",
          "He got fired after two weeks.",
          "He was fired after two weeks.",
          "He got canned after two weeks.",
          "He got the sack after two weeks.",
          "They fired him after two weeks.",
          "He got fired after just two weeks.",
          "He was fired after just two weeks.",
        ],
        "Colloquial «lo echaron» is \"he got the boot\" (or US \"got canned\", UK \"got the sack\"); \"fired\" is neutral, \"let go\" the soft version.",
      ),
      fb(
        "The museum is fully ___ to wheelchair users.",
        "accessible",
        "El museo está totalmente [adaptado] para usuarios de silla de ruedas.",
        [],
        "\"Accessible\" is the standard word for entrances, parking and toilets; Spanish «adaptado» is never *adapted or *handicapped here.",
      ),
      mc(
        "Which sentence follows current inclusive guidance?",
        [
          "She uses a wheelchair.",
          "She is confined to a wheelchair.",
          "She is a wheelchair invalid.",
          "She suffers from a wheelchair.",
        ],
        0,
        "Say \"uses\" and \"has\". \"Confined to\", \"invalid\" and \"suffers from\" are pitying or outdated.",
      ),
      tr(
        "Hay estacionamiento para personas con discapacidad junto a la entrada.",
        "There is accessible parking next to the entrance.",
        [
          "There's accessible parking next to the entrance.",
          "There is accessible parking near the entrance.",
          "There's accessible parking near the entrance.",
          "Accessible parking is available next to the entrance.",
          "Accessible parking is available near the entrance.",
          "There is parking for people with disabilities next to the entrance.",
          "There's parking for people with disabilities next to the entrance.",
          "There is parking for people with disabilities near the entrance.",
          "There's disabled parking next to the entrance.",
        ],
        "\"Accessible parking\" is the neutral public term; \"people with disabilities\" is person-first language. Avoid \"handicapped\", the equivalent of «minusválido».",
      ),
      mc(
        "Which sentence follows current guidance for news reports?",
        [
          "The singer died by suicide in 2020.",
          "The singer committed suicide in 2020.",
          "The singer made suicide in 2020.",
          "The singer suicided himself in 2020.",
        ],
        0,
        "Health bodies and newsrooms prefer \"died by suicide\" or \"took their own life\", because \"commit\" suggests a crime. «Se suicidó» is best rendered this way in published texts.",
      ),
      mt(
        "Match each older job title with its current gender-neutral term.",
        [
          ["fireman", "firefighter"],
          ["stewardess", "flight attendant"],
          ["chairman", "chair"],
          ["spokesman", "spokesperson"],
          ["mankind", "humankind"],
        ],
        "English has largely replaced gendered titles with neutral ones; \"chair\" or \"chairperson\" is now standard in many organizations.",
      ),
      fb(
        "Two ___ were injured while putting out the blaze.",
        "firefighters",
        "Dos [bomberos] resultaron heridos mientras apagaban el incendio.",
        [],
        "Gender-neutral job titles are now standard: \"firefighter\" (not fireman), \"police officer\", \"flight attendant\", \"spokesperson\".",
      ),
      tr(
        "Si un pasajero pierde su conexión, debe hablar con el personal.",
        "If a passenger misses their connection, they should speak to the staff.",
        [
          "If a passenger misses their connection, they should speak to staff.",
          "If a passenger misses their connection, they should talk to the staff.",
          "If a passenger misses their connection, they should talk to staff.",
          "If a passenger misses their connection, they must speak to the staff.",
          "If a passenger misses their connection, they must speak to staff.",
          "If a passenger misses their connecting flight, they should speak to staff.",
          "If a passenger misses their connection, they should speak with the staff.",
          "If a passenger misses their connection, they should speak with staff.",
        ],
        "Singular \"they/their\" solves Spanish «su» when gender is unknown, with a plural verb (\"they should\"). It is cleaner than the clumsy \"he or she\".",
      ),
      mc(
        "How do you say «Nuestra nueva ingeniera empieza el lunes»?",
        [
          "Our new engineer starts on Monday.",
          "Our new woman engineer starts on Monday.",
          "Our new engineeress starts on Monday.",
          "Our new female engineer starts on Monday.",
        ],
        0,
        "Spanish needs a gendered noun; English does not. Adding \"woman\" or \"female\" sounds dated unless gender is the point.",
      ),
      mc(
        "Which is the best diplomatic version of \"We're firing forty people\"?",
        [
          "We have made the difficult decision to reduce our team by forty roles.",
          "We are embarking on an exciting journey of transformation.",
          "We're getting rid of forty people.",
          "Some colleagues may possibly be impacted by certain changes.",
        ],
        0,
        "A good rewrite keeps the fact and the number and adds a decision frame. Over-softening fails the test: could the reader repeat the key fact after one reading?",
      ),
      tr(
        "Lamentablemente, no podemos ofrecerle el puesto.",
        "Unfortunately, we are unable to offer you the position.",
        [
          "Unfortunately, we're unable to offer you the position.",
          "Unfortunately, we can't offer you the position.",
          "Unfortunately, we cannot offer you the position.",
          "Unfortunately, we are unable to offer you the job.",
          "Unfortunately, we are unable to offer you the role.",
          "Unfortunately, we can't offer you the job.",
          "Unfortunately, we are not able to offer you the position.",
        ],
        "A regret frame (\"Unfortunately\") plus \"be unable to\" softens without hiding the fact. «Lamentablemente» is not *lamentably, which sounds like a judgment.",
      ),
      tr(
        "Tras estudiarlo detenidamente, hemos decidido cerrar la sucursal de Monterrey.",
        "After careful consideration, we have decided to close the Monterrey branch.",
        [
          "After careful consideration, we've decided to close the Monterrey branch.",
          "After careful consideration, we have made the difficult decision to close the Monterrey branch.",
          "After careful consideration, we have decided to close our Monterrey branch.",
          "After careful consideration, we have decided to close the Monterrey office.",
          "After careful consideration, we've decided to close our Monterrey branch.",
        ],
        "The decision frame \"After careful consideration\" shows thought and keeps the fact clear. *After studying it detainedly is a calque.",
      ),
      kw(
        "BRING",
        "We have cancelled the project.",
        "We have decided to ___ to a close.",
        "bring the project",
        ["bring it"],
        "\"Bring something to a close\" is the softened version of \"cancel\" or \"end\": it presents the end as a considered decision.",
      ),
      mc(
        "\"We are consolidating our retail footprint.\" What does this mean in plain English?",
        ["We are closing stores.", "We are opening new stores.", "We are renovating our stores.", "We are moving our stores online only."],
        0,
        "Sharpening: ask what actually happened. Abstract nouns (\"consolidating\", \"footprint\") hide a concrete action: closing stores.",
      ),
      tr(
        "Dicho claramente: unas ochenta personas van a perder su empleo.",
        "In plain English: about eighty people are going to lose their jobs.",
        [
          "In plain English: about eighty people will lose their jobs.",
          "In plain English: around eighty people are going to lose their jobs.",
          "In plain English: around eighty people will lose their jobs.",
          "Put plainly: about eighty people are going to lose their jobs.",
          "Put plainly: about eighty people will lose their jobs.",
          "In plain English, about eighty people are going to lose their jobs.",
          "In plain English, about eighty people will lose their jobs.",
          "Simply put: about eighty people are going to lose their jobs.",
        ],
        "Sharpening turns \"some roles will be impacted\" into a number, an agent and an action. Note the plural \"their jobs\".",
      ),
      lc(
        "We have decided to sunset the app at the end of the year.",
        "What will happen to the app?",
        ["It will be discontinued", "It will get a new design", "It will only work in the evenings", "It will be free"],
        0,
        "Corporate euphemism: a product that is being killed is \"sunset\". In plain English, it is being discontinued.",
      ),
      tr(
        "Me da un café negro, por favor.",
        "Could I have a black coffee, please?",
        [
          "Can I have a black coffee, please?",
          "Could I get a black coffee, please?",
          "Can I get a black coffee, please?",
          "I'd like a black coffee, please.",
          "I'll have a black coffee, please.",
          "May I have a black coffee, please?",
        ],
        "Service Spanish uses imperatives; in English, *Give me a coffee sounds rude even with \"please\". Use a question, \"I'd like\" or \"I'll have\".",
      ),
      mc(
        "Your host asks, \"Would you like some more dessert?\" You've had enough. What do you say?",
        ["No, thanks. I'm fine.", "No.", "No, I don't want.", "Nothing."],
        0,
        "A bare \"No\" to an offer sounds curt, almost like rejecting the cook. The default is \"No, thanks\" or \"No, I'm fine, thanks\".",
      ),
      mc(
        "Someone thanks you for your help. Which reply is natural?",
        ["You're welcome.", "Of nothing.", "For nothing.", "It's nothing to thank."],
        0,
        "«De nada» is \"You're welcome\", \"No problem\", \"No worries\" or \"My pleasure\". *Of nothing is a word-for-word calque.",
      ),
      tr(
        "Me temo que esta semana no puedo encargarme de eso; estoy hasta el cuello de trabajo.",
        "I'm afraid I can't take that on this week; I'm snowed under.",
        [
          "I'm afraid I can't take that on this week; I'm snowed under with work.",
          "I'm afraid I can't take that on this week; I'm swamped.",
          "I'm afraid I can't take that on this week; I'm swamped with work.",
          "I'm afraid I can't take that on this week. I'm snowed under.",
          "I'm afraid I can't take that on this week. I'm swamped.",
          "I'm afraid I can't take that on this week; I'm up to my neck in work.",
          "I'm afraid I can't take that on this week; I'm up to my eyes in work.",
          "I'm afraid I can't take it on this week; I'm snowed under.",
        ],
        "Regret + a short, believable reason. \"Take on\" = accept a task; \"snowed under\" or \"swamped\" = overloaded. Over-explaining sounds defensive.",
      ),
      fb(
        "Thanks for thinking of me, but I'll have to ___ on this one.",
        "pass",
        "Gracias por acordarte de mí, pero esta vez [voy a tener que decir que no].",
        [],
        "\"I'll have to pass on this one\" is a friendly, firm refusal; the thanks before it softens it.",
      ),
      lc(
        "I'd love to, but can I take a rain check? I've got a lot on tonight.",
        "What is the speaker asking?",
        [
          "To do it another time",
          "Whether it will rain tonight",
          "To bring an umbrella",
          "To pay the check",
        ],
        0,
        "\"Take a rain check\" (mainly American) declines now while showing you want to accept another time: regret, reason and alternative in two lines.",
      ),
      tr(
        "Siento lo de tu abuelo.",
        "I'm sorry to hear about your grandfather.",
        [
          "I'm so sorry to hear about your grandfather.",
          "I'm sorry to hear about your grandpa.",
          "I'm sorry about your grandfather.",
          "I'm so sorry about your grandfather.",
          "I was sorry to hear about your grandfather.",
        ],
        "\"Sorry\" also expresses sympathy, not guilt. \"I'm sorry to hear about...\" is the natural match for «siento lo de...».",
      ),
      mc(
        "What is a \"sympathy card\"?",
        [
          "A card sent to someone who is grieving",
          "A card sent to thank someone for being friendly",
          "A card you give to someone you like",
          "A birthday card with a joke in it",
        ],
        0,
        "False friend: \"sympathy\" means «compasión, pésame». «Simpatía» is \"friendliness\" or \"liking\".",
      ),
      mc(
        "Which is the English formula for «Le acompaño en el sentimiento»?",
        [
          "Please accept my deepest condolences.",
          "I accompany you in the feeling.",
          "I go with you in your feelings.",
          "I feel you in the sentiment.",
        ],
        0,
        "Translate the function, not the words: \"Please accept my deepest condolences\" (formal) or \"I'm so sorry for your loss\".",
      ),
      tr(
        "Sentí muchísimo enterarme de lo de tu mamá.",
        "I was so sorry to hear about your mother.",
        [
          "I was so sorry to hear about your mom.",
          "I was so sorry to hear about your mum.",
          "I was very sorry to hear about your mother.",
          "I was very sorry to hear about your mom.",
          "I was so sorry to hear about your mother's passing.",
          "I was so sorry to hear about your mom's passing.",
        ],
        "The standard opening of a condolence message: \"I was so sorry to hear about...\", in the past because you heard the news earlier.",
      ),
      fb(
        "She will be greatly ___ by everyone in the office.",
        "missed",
        "Todos en la oficina la vamos a [extrañar] mucho.",
        [],
        "\"He/She will be greatly missed\" is the personal line that turns a formula into a real message. «Extrañar» is \"miss\".",
      ),
      mc(
        "Which line should you avoid in a condolence message?",
        [
          "Everything happens for a reason.",
          "I'll always remember her laugh.",
          "If there's anything I can do, please let me know.",
          "Thinking of you and your family.",
        ],
        0,
        "Avoid attempts to make the death positive (\"Everything happens for a reason\", \"At least she had a long life\") and claims like \"I know exactly how you feel\".",
      ),
      tr(
        "No te preocupes por el trabajo; tómate todo el tiempo que necesites.",
        "Don't worry about work; take all the time you need.",
        [
          "Please don't worry about work; take all the time you need.",
          "Don't worry about work. Take all the time you need.",
          "Please don't worry about work. Take all the time you need.",
          "Don't worry about work; take as much time as you need.",
          "Don't worry about work. Take as much time as you need.",
        ],
        "In a colleague's condolence email, releasing them from work is a concrete, kind offer. «Tómate» is just \"take\".",
      ),
      wo(
        "Thinking of you and your family at this difficult time.",
        "Pienso en ti y en tu familia en estos momentos tan difíciles.",
        "A verbless closing formula that works for every reader, religious or not.",
      ),
      wo(
        "We will be increasing our prices by three percent starting May 1.",
        "Subiremos nuestros precios un tres por ciento a partir del 1 de mayo.",
        "A softened announcement keeps the fact, the number and the date; \"will be -ing\" sounds planned and impersonal.",
      ),
      dt(
        "If there's anything I can do, please don't hesitate to let me know.",
        "\"Don't hesitate to let me know\" runs together: /doʊnt ˈhezɪteɪt tə let mi ˈnoʊ/.",
      ),
      dt(
        "After careful consideration, we have decided to discontinue the product.",
        "Formal decision frame: listen for \"consideration\", /kənˌsɪdəˈreɪʃən/, and \"discontinue\", stressed on \"-tin-\".",
      ),
      sp(
        "Thanks so much for the invitation. Can I take a rain check?",
        "Muchas gracias por la invitación. ¿Lo dejamos para otra ocasión?",
        "Warm on \"thanks so much\"; rising tone on \"rain check\".",
        "Appreciation plus a request for another time: a refusal that keeps the door open.",
      ),
      sp(
        "I was so sorry to hear about your father. He'll be greatly missed.",
        "Sentí muchísimo enterarme de lo de tu papá. Lo vamos a extrañar mucho.",
        "Speak slowly and softly; stress \"so sorry\" and \"greatly\".",
        "Opening formula plus a personal line: the core of a spoken or written condolence.",
      ),
    ],
  ),
];
