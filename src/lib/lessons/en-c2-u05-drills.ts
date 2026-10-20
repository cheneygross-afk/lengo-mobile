// Synced from cheneygross-afk/lengo:src/lib/lessons/en-c2-u05-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Required drill lessons for EN-C2 unit u05 (proverbs and sayings): a short recap, then graded practice.

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

const cp = (sentence: string, answer: string, altAnswers: string[], explanation: string): Ex =>
  altAnswers.length
    ? { type: "fill-blank", prompt: "Complete the saying with its fixed wording.", sentence, answer, altAnswers, explanation }
    : { type: "fill-blank", prompt: "Complete the saying with its fixed wording.", sentence, answer, explanation };

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

export const EN_C2_U05_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. Half-quoted proverbs, old grammar, contradictory and ironic
  // proverbs, refranes and their English equivalents
  // ---------------------------------------------------------------------
  drill(
    "en-c2-proverbs-unit-drill-1",
    "Drill: Proverb Halves, Old Grammar and Refranes",
    "Finish half-quoted proverbs, handle their archaic grammar without copying it into everyday English, pick the proverb that supports your case, and give the real English equivalent of a refrán instead of its picture.",
    "Recap: halves, old grammar, opposites, equivalents",
    [
      "Native speakers quote the first half and let you finish it: \"When in Rome...\", \"Every cloud...\", \"People who live in glass houses...\". \"Speak of the devil\" is now the whole expression, and \"If the cap fits...\" (US \"If the shoe fits...\") always carries an edge.",
      "Proverbs freeze old grammar: \"he who\" (today \"whoever\"), verbless halves (\"Least said, soonest mended\"), negation without \"do\" (\"Waste not, want not\"), the imperative condition (\"Spare the rod and spoil the child\") and bare subjunctives (\"Come what may\", \"Suffice it to say\"). Keep it inside the proverb.",
      "Proverbs contradict each other, so you choose the one that backs your point. A refrán is rendered by its English equivalent or by its meaning, never by its image.",
    ],
    [
      ["They both collect vintage cameras. Birds of a feather...", "Los dos coleccionan cámaras antiguas. Dios los cría..."],
      ["Whoever finishes first can lock up.", "El que termine primero, que cierre."],
      ["Be that as it may, the budget is fixed.", "Sea como sea, el presupuesto es fijo."],
      ["The cobbler's children go barefoot.", "En casa de herrero, cuchillo de palo."],
    ],
    [
      mc(
        "Your manager walks into the break room just as you mention her name. What do you say?",
        ["Speak of the devil!", "Speaking about the devil!", "Talk about the devil!", "When in Rome!"],
        0,
        "\"Speak of the devil\" (UK also \"talk of the devil\") is the whole fixed expression now, the equivalent of «hablando del rey de Roma». Changing \"of\" to \"about\" or using the -ing form breaks it.",
      ),
      cp(
        "My nephew still hasn't opened the course I paid for. You can lead a horse to water, ___.",
        "but you can't make it drink",
        ["but you cannot make it drink", "but you can't make him drink"],
        "The full proverb is \"You can lead a horse to water, but you can't make it drink\": you can offer an opportunity, not force someone to take it. In conversation the second half is often left unsaid.",
      ),
      cp(
        "The buyer hasn't signed anything yet, so don't count your chickens ___.",
        "before they hatch",
        ["before they've hatched", "before they are hatched"],
        "\"Don't count your chickens before they hatch\" is «no vendas la piel del oso antes de cazarlo». The image changes completely, so a word-for-word bear would mean nothing to an English listener.",
      ),
      mc(
        "\"I'm not pointing fingers at anyone in particular. But if the shoe fits...\" What is the speaker implying?",
        [
          "The criticism does apply to the listener, who should accept it",
          "The listener is being oversensitive and should ignore it",
          "The criticism applies to everyone equally",
          "The speaker is apologizing for being too harsh",
        ],
        0,
        "\"If the shoe fits (wear it)\", UK \"if the cap fits\", is «el que se pica, ajos come»: stopping halfway makes it pointed, not apologetic.",
      ),
      tr(
        "Hablando del rey de Roma, aquí viene Ana.",
        "Speak of the devil, here comes Ana.",
        [
          "Talk of the devil, here comes Ana.",
          "Speak of the devil, here's Ana.",
          "Talk of the devil, here's Ana.",
          "Speak of the devil, here comes Ana now.",
          "Speak of the devil, here's Ana now.",
          "Speak of the devil! Here comes Ana.",
        ],
        "The king of Rome becomes the devil in English. Don't translate the image: *Speaking of the king of Rome means nothing to an English speaker.",
      ),
      tr(
        "Allí donde fueres, haz lo que vieres.",
        "When in Rome, do as the Romans do.",
        ["When in Rome do as the Romans do."],
        "The English proverb keeps Rome; the Spanish one keeps the old future subjunctive. Note \"as the Romans do\", not *like the Romans do, in the fixed form.",
      ),
      cp(
        "Let's not bring up last week's argument at dinner. Least said, ___ mended.",
        "soonest",
        [],
        "\"Least said, soonest mended\" is verbless: \"the less that is said, the sooner it is mended\". The superlatives are frozen, so *less said, sooner mended is wrong.",
      ),
      cp(
        "My grandmother saved every rubber band and paper bag. Waste not, ___ not.",
        "want",
        [],
        "\"Waste not, want not\" uses the old negative without \"do\", and \"want\" in its old sense of \"lack\": if you don't waste, you won't go short.",
      ),
      mc(
        "Which sentence sounds natural in modern, everyday English?",
        [
          "Whoever gets home first should start dinner.",
          "He who gets home first should start dinner.",
          "Who gets home first should start dinner.",
          "The who gets home first should start dinner.",
        ],
        0,
        "Spanish «el que» / «quien» is \"whoever\" (or \"anyone who\") in modern English. \"He who\" belongs to proverbs and deliberate jokes; outside them it sounds biblical.",
      ),
      tr(
        "El que llegue primero, que prenda la calefacción.",
        "Whoever gets there first should turn on the heat.",
        [
          "Whoever gets there first should turn the heat on.",
          "Whoever arrives first should turn on the heat.",
          "Whoever arrives first should turn the heat on.",
          "Whoever gets there first should turn on the heating.",
          "Whoever gets there first should turn the heating on.",
          "Whoever arrives first should turn on the heating.",
          "Whoever gets there first should switch on the heating.",
          "Whoever gets home first should turn on the heat.",
          "Anyone who gets there first should turn on the heat.",
        ],
        "«El que» + subjunctive is \"whoever\" + present. *He who gets there first is a proverb pattern and sounds absurdly solemn about a heater.",
      ),
      kw(
        "MAY",
        "Whatever happens, I'm not selling the house.",
        "Come ___, I'm not selling the house.",
        "what may",
        [],
        "\"Come what may\" is a frozen present subjunctive («pase lo que pase»): bare \"come\", no -s. *Comes what may is a false correction.",
      ),
      kw(
        "BE",
        "That may well be true, but the deadline still stands.",
        "___, the deadline still stands.",
        "Be that as it may",
        [],
        "\"Be that as it may\" concedes a point and then sets it aside, like «sea como sea». The bare subjunctive \"be\" and the inversion are fixed.",
      ),
      tr(
        "Baste decir que no volvió a pedirme el carro.",
        "Suffice it to say that he never asked to borrow my car again.",
        [
          "Suffice it to say he never asked to borrow my car again.",
          "Suffice it to say that he never asked me for the car again.",
          "Suffice it to say he never asked me for the car again.",
          "Suffice it to say that he never asked to borrow the car again.",
          "Suffice it to say he never asked to borrow the car again.",
          "Suffice it to say that she never asked to borrow my car again.",
          "Suffice it to say she never asked to borrow my car again.",
        ],
        "\"Suffice it to say\" is a frozen subjunctive, so never *Suffices it to say. «Pedir el carro» is \"ask to borrow the car\" or \"ask me for the car\".",
      ),
      tr(
        "No es que yo quiera criticar, pero tu presentación tiene cuarenta diapositivas.",
        "Far be it from me to criticize, but your presentation has forty slides.",
        [
          "Far be it from me to criticize, but your presentation is forty slides long.",
          "Far be it from me to criticise, but your presentation has forty slides.",
        ],
        "\"Far be it from me to...\" is an ironic preface: the speaker is about to criticize anyway. The subjunctive \"be\" is fixed; *Far is it from me is wrong.",
      ),
      wo(
        "Do that again and you're off the team.",
        "Vuelve a hacer eso y quedas fuera del equipo.",
        "Imperative + \"and\" = a condition (\"if you do that again, you're off\"), the same pattern as \"Spare the rod and spoil the child\".",
      ),
      cp(
        "I hate working on a Sunday, but needs ___.",
        "must",
        [],
        "\"Needs must\" (mainly British) uses \"needs\" as an old adverb, «por necesidad»: you do something unpleasant because you have no choice. Americans more often say \"You do what you have to do\".",
      ),
      dt(
        "Be that as it may, the board has already made its decision.",
        "\"Be that as it may\" runs together as one unit, /ˌbi ðæt əz ɪt ˈmeɪ/; the stress falls on \"may\".",
      ),
      mc(
        "Which proverb contradicts \"Many hands make light work\"?",
        ["Too many cooks spoil the broth.", "The early bird catches the worm.", "Birds of a feather flock together.", "Strike while the iron is hot."],
        0,
        "\"Many hands make light work\" says more people help; \"Too many cooks spoil the broth\" says more people ruin the job. Proverbs come in opposing pairs.",
      ),
      mc(
        "Prices have just peaked and your friend wants to sell her apartment this month, before they fall. Which proverb best supports her?",
        [
          "Strike while the iron is hot.",
          "The early bird catches the worm.",
          "Good things come to those who wait.",
          "Look before you leap.",
        ],
        0,
        "\"Strike while the iron is hot\" is about a favorable moment that will pass. \"The early bird\" is about being earlier than others, which is close but not the point; the other two argue for waiting.",
      ),
      tr(
        "Quien no arriesga, no gana.",
        "Nothing ventured, nothing gained.",
        [],
        "A verbless proverb in two balanced halves, like \"No pain, no gain\". It is the proverb you reach for when arguing for action, against \"Better safe than sorry\".",
      ),
      tr(
        "Muchas manos aligeran el trabajo, así que pidamos ayuda.",
        "Many hands make light work, so let's ask for help.",
        ["Many hands make light work, so let's get some help.", "Many hands make light work, so let us ask for help."],
        "\"Many hands make light work\" argues for more people; its opposite, \"Too many cooks spoil the broth\", argues for fewer. Note \"make light work\", not *make the work lighter.",
      ),
      tr(
        "Querías trabajar desde casa. Cuidado con lo que deseas.",
        "You wanted to work from home. Be careful what you wish for.",
        [
          "You wanted to work from home; be careful what you wish for.",
          "You wanted to work from home. Careful what you wish for.",
        ],
        "\"Be careful what you wish for\" is ironic from the start: getting what you want can be a disaster. Note \"wish for\", not *desire or *want.",
      ),
      cp(
        "I helped my neighbor move and now she's angry I scratched her table. No good deed goes ___.",
        "unpunished",
        [],
        "\"No good deed goes unpunished\" is a cynical twist on \"virtue is its own reward\", said when helping someone gets you into trouble (close to «así me pagan»).",
      ),
      lc(
        "We hired four consultants to fix the website and it's worse than ever. Too many cooks...",
        "What is the speaker suggesting?",
        [
          "Having too many people in charge ruined the job",
          "The consultants were too expensive",
          "The job needed more people to get it done",
          "The website was fine before and should not have been touched",
        ],
        0,
        "\"Too many cooks (spoil the broth)\": too many people in charge spoil a job. The speaker leaves the second half for you to supply.",
      ),
      mt(
        "Match each refrán with its English equivalent.",
        [
          ["A caballo regalado no le mires el diente", "Don't look a gift horse in the mouth"],
          ["Del dicho al hecho hay mucho trecho", "Easier said than done"],
          ["Perro que ladra no muerde", "His bark is worse than his bite"],
          ["Camarón que se duerme se lo lleva la corriente", "You snooze, you lose"],
          ["Más vale tarde que nunca", "Better late than never"],
        ],
        "Some pairs are almost word for word (the gift horse, better late than never); others swap the image completely (the shrimp becomes \"You snooze, you lose\").",
      ),
      tr(
        "Más vale pájaro en mano que ciento volando.",
        "A bird in the hand is worth two in the bush.",
        [],
        "Same birds, different numbers and a bush: the English proverb is fixed, so *a bird in the hand is better than a hundred flying is not recognized as a proverb at all.",
      ),
      tr(
        "Cuando el río suena, agua lleva.",
        "There's no smoke without fire.",
        ["There is no smoke without fire.", "Where there's smoke, there's fire.", "Where there is smoke, there is fire."],
        "The river becomes smoke: \"There's no smoke without fire\" (US also \"Where there's smoke, there's fire\"), meaning a rumor usually has some truth behind it.",
      ),
      cp(
        "She's a surgeon, just like her mother. Like mother, ___.",
        "like daughter",
        [],
        "«De tal palo, tal astilla» has three English versions: \"Like father, like son\" (or \"like mother, like daughter\"), \"The apple doesn't fall far from the tree\" and \"a chip off the old block\".",
      ),
      mc(
        "What is the best English equivalent of «Ojos que no ven, corazón que no siente»?",
        [
          "What you don't know can't hurt you.",
          "Out of sight, out of mind.",
          "Eyes that don't see, heart that doesn't feel.",
          "Absence makes the heart grow fonder.",
        ],
        0,
        "The refrán means that what you don't find out about can't upset you (UK also \"What the eye doesn't see, the heart doesn't grieve over\"). \"Out of sight, out of mind\" is a trap: it means you forget people who aren't around.",
      ),
      dt(
        "People who live in glass houses shouldn't throw stones.",
        "Listen for the cluster in \"shouldn't throw\", /ˈʃʊdnt θroʊ/, and the plural \"houses\", /ˈhaʊzɪz/, with a z sound.",
      ),
      tr(
        "En casa de herrero, cuchillo de palo: el electricista tiene la casa a oscuras.",
        "The cobbler's children go barefoot: the electrician's house is in the dark.",
        [
          "The shoemaker's children go barefoot: the electrician's house is in the dark.",
          "The cobbler's children go barefoot: the electrician has no lights at home.",
          "The cobbler's children go barefoot: the electrician's house has no lights.",
          "The shoemaker's children go barefoot: the electrician has no lights at home.",
        ],
        "The blacksmith becomes a cobbler (or shoemaker) in English. *In the house of the blacksmith, a wooden knife would only puzzle the listener.",
      ),
      wo(
        "Sure, look before you leap, but then again, he who hesitates is lost.",
        "Claro, piénsalo bien antes de lanzarte, pero, por otro lado, el que duda está perdido.",
        "\"Then again\" introduces the opposing proverb: a wry way to answer one proverb with its opposite.",
      ),
      mc(
        "Which sentence is correct?",
        [
          "Suffice it to say, the trip didn't go as planned.",
          "Suffices it to say, the trip didn't go as planned.",
          "It suffice to say, the trip didn't go as planned.",
          "Suffice to it say, the trip didn't go as planned.",
        ],
        0,
        "The subjunctive \"suffice\" has no -s and is followed directly by \"it to say\". Do not \"correct\" a frozen form.",
      ),
      lc(
        "Great minds think alike! And fools seldom differ.",
        "What is the second speaker doing?",
        [
          "Teasing the first speaker with the forgotten half of the proverb",
          "Agreeing that they are both very clever",
          "Politely disagreeing with the idea itself",
          "Correcting a grammar mistake in the proverb",
        ],
        0,
        "\"Great minds think alike\" is said jokingly when two people have the same idea; the cheeky reply is its little-known second half, \"...and fools seldom differ\".",
      ),
      sp(
        "Far be it from me to complain, but this is the third time this week.",
        "No es que yo quiera quejarme, pero es la tercera vez esta semana.",
        "Say \"Far be it from me\" lightly and quickly, then stress \"third\".",
        "The ironic preface makes the complaint sound measured, not aggrieved.",
      ),
      sp(
        "Every cloud, I suppose. At least now I've got time to study.",
        "No hay mal que por bien no venga, supongo. Al menos ahora tengo tiempo para estudiar.",
        "Let \"Every cloud\" trail off with a falling tone before \"I suppose\".",
        "Half-quoting \"Every cloud (has a silver lining)\" plus a softener is exactly how the proverb is used in real speech.",
      ),
    ],
  ),
  // ---------------------------------------------------------------------
  // Drill 2. Quoting proverbs naturally, the advice column, the spiral
  // review (frozen forms, variants, inversion) and a whole-unit mix
  // ---------------------------------------------------------------------
  drill(
    "en-c2-proverbs-unit-drill-2",
    "Drill: Quoting Proverbs Naturally, Frozen Forms and Inversion",
    "Frame proverbs the way native speakers do (as the saying goes, it's a case of, so much for, the proverbial), pitch them to the tone of a problem, keep idioms frozen in their UK or US form, and use proverb-like inversion.",
    "Recap: framing, tone, frozen forms",
    [
      "Frame a proverb with \"as the saying goes\", \"as they say\" or \"you know what they say\", never *like says the proverb. \"It's a case of...\" and \"So much for...\" take a noun or an -ing form; \"to coin a phrase\" is ironic; \"the proverbial...\" borrows just the image; \"adage\" and \"maxim\" are the formal words.",
      "Pitch the proverb to the problem: playful for a petty quarrel, late and gentle (or absent) for grief. Idioms are frozen (\"a piece of cake\", never *a slice of cake), with UK and US variants such as \"touch wood\" and \"knock on wood\"; and formal, proverb-like sentences invert after a negative opener: \"Little did he know...\".",
    ],
    [
      ["You know what they say: once bitten, twice shy.", "Ya sabes lo que dicen: el que se quema con leche ve una vaca y llora."],
      ["It was a classic case of too many cooks.", "Fue un caso clásico de demasiada gente mandando."],
      ["So much for the early bird.", "Y luego dicen que a quien madruga, Dios le ayuda."],
      ["Little did we know that the store was closing.", "Poco sabíamos que la tienda iba a cerrar."],
    ],
    [
      mc(
        "Which frame is correct in English?",
        [
          "As the saying goes, you get what you pay for.",
          "Like says the proverb, you get what you pay for.",
          "As says the saying, you get what you pay for.",
          "How says the proverb, you get what you pay for.",
        ],
        0,
        "English does not invert the verb in «como dice el refrán» and prefers \"goes\": \"as the saying goes\". *Like says the proverb is a word-for-word calque.",
      ),
      tr(
        "Ya sabes lo que dicen: más vale tarde que nunca.",
        "You know what they say: better late than never.",
        ["You know what they say, better late than never.", "As they say, better late than never.", "Better late than never, as they say."],
        "\"You know what they say\" invites the listener to finish the thought. «Lo que dicen» is \"what they say\", with the impersonal \"they\".",
      ),
      fb(
        "Better safe than sorry, ___.",
        "as they say",
        "Más vale prevenir que curar, [como dicen].",
        ["as the saying goes", "as the old saying goes"],
        "\"As they say\" or \"as the saying goes\" can follow the proverb as well as precede it. Casual speech also has \"like they say\", but careful English uses \"as\".",
      ),
      tr(
        "Como dice el refrán, del dicho al hecho hay mucho trecho.",
        "As the saying goes, it's easier said than done.",
        [
          "As the saying goes, easier said than done.",
          "As the saying goes, it is easier said than done.",
          "As the old saying goes, it's easier said than done.",
          "As they say, it's easier said than done.",
          "As they say, easier said than done.",
        ],
        "«Como dice el refrán» is \"as the saying goes\" (\"as the proverb says\" is rarer and bookish), and the refrán itself is \"easier said than done\".",
      ),
      kw(
        "CASE",
        "As usual, too many people were in charge and the project fell apart.",
        "It was a classic ___ too many cooks, and the project fell apart.",
        "case of",
        [],
        "\"It's a case of...\" applies a proverb to the situation, cut down to a noun phrase: \"a case of too many cooks\".",
      ),
      kw(
        "MUCH",
        "Absence was supposed to make the heart grow fonder, but he forgot me in a month.",
        "He forgot me in a month. So ___ the heart grow fonder.",
        "much for absence making",
        [],
        "\"So much for\" says the proverb turned out to be false. It takes a noun or an -ing form, so \"absence makes\" becomes \"absence making\".",
      ),
      fb(
        "Finding a plumber on a Sunday is like looking for the ___ needle in a haystack.",
        "proverbial",
        "Encontrar un plomero un domingo es como buscar [la famosa] aguja en un pajar.",
        [],
        "\"The proverbial...\" signals that you know you are borrowing a set image, which keeps it light. «La famosa» does the same job in Spanish.",
      ),
      mc(
        "\"Well, it's an ill wind, to coin a phrase.\" Why does the speaker say \"to coin a phrase\"?",
        [
          "Ironically: they know the phrase is an old cliche, not a new one",
          "To claim they have just invented the expression",
          "To ask the listener to explain the phrase",
          "To show they are quoting a famous writer exactly",
        ],
        0,
        "\"To coin a phrase\" literally means \"to invent an expression\", but it is almost always said ironically right after a cliche. \"If you'll pardon the cliche\" does the same job more openly.",
      ),
      mc(
        "Which sentence fits a formal report?",
        [
          "The old adage that prevention is better than cure applies with particular force to road safety.",
          "Like they say, better safe than sorry, right?",
          "You know what they say: better safe than sorry, guys.",
          "Better safe than sorry, to coin a phrase, lol.",
        ],
        0,
        "Formal writing comments on a proverb rather than just quoting it, and uses the formal noun \"adage\" (or \"maxim\"). The others are conversational.",
      ),
      tr(
        "Por si te sirve de algo, creo que hiciste lo correcto.",
        "For what it's worth, I think you did the right thing.",
        ["For what it is worth, I think you did the right thing.", "For what it's worth, I think you made the right call.", "For what it's worth, I think you made the right decision."],
        "\"For what it's worth\" is the advice columnist's modest opener, the natural match for «por si te sirve de algo». *If it serves you for something is a calque.",
      ),
      tr(
        "Puede sonar a tópico, pero el tiempo lo cura todo.",
        "It may sound trite, but time heals all wounds.",
        [
          "It may sound trite, but time is a great healer.",
          "It might sound trite, but time heals all wounds.",
          "It might sound trite, but time is a great healer.",
          "It may sound like a cliche, but time heals all wounds.",
          "It may sound like a cliche, but time is a great healer.",
          "It may sound trite, but time really is a great healer.",
          "It might sound like a cliche, but time is a great healer.",
        ],
        "Acknowledging the cliche (\"It may sound trite, but...\") keeps the proverb from sounding preachy. «Tópico» here is \"cliche\" or \"trite\", not *topic.",
      ),
      mc(
        "A reader writes to an advice column about losing her father last month. Which line respects her situation best?",
        [
          "There's no timetable for grief.",
          "Every cloud has a silver lining!",
          "Time heals all wounds, so try to cheer up.",
          "Easy come, easy go.",
        ],
        0,
        "With a serious problem the proverb comes late and gently, or not at all. A cheerful proverb (or \"time heals...\" plus an order to cheer up) dismisses her pain.",
      ),
      lc(
        "Dear Fed Up, here's the thing: you can't change your sister, only how you respond to her.",
        "What is the columnist advising?",
        [
          "Focus on your own reaction, since you can't control your sister",
          "Keep trying until your sister changes",
          "Stop speaking to your sister for a while",
          "Ask your sister to write to the column herself",
        ],
        0,
        "\"Here's the thing:\" announces the frank core of the advice: change your response, not the other person.",
      ),
      wo(
        "Is this really a hill worth dying on?",
        "¿De verdad vale la pena pelear por esto?",
        "Turning the saying into a question lets the reader reach the conclusion alone: the issue may not be worth the fight.",
      ),
      mc(
        "Which sentence keeps the idiom in its fixed form?",
        ["The driving test was a piece of cake.", "The driving test was a slice of cake.", "The driving test was a portion of cake.", "The driving test was a bit of cake."],
        0,
        "Idioms are frozen: a synonym that is fine elsewhere (\"slice\") breaks the idiom. It is \"a piece of cake\", «pan comido».",
      ),
      tr(
        "Elige bien tus batallas: la vida es demasiado corta.",
        "Pick your battles: life's too short.",
        ["Pick your battles: life is too short.", "Choose your battles: life's too short.", "Choose your battles: life is too short.", "Pick your battles; life's too short."],
        "\"Pick your battles\" is the advice columnist's light-touch line for a petty quarrel. «Elegir» is \"pick\" or \"choose\" here, never *elect.",
      ),
      tr(
        "Su último correo fue la gota que colmó el vaso.",
        "His last email was the last straw.",
        ["His last email was the final straw.", "Her last email was the last straw.", "Her last email was the final straw.", "His latest email was the last straw.", "Her latest email was the last straw.", "His last email was the proverbial last straw.", "Her last email was the proverbial last straw.", "Their last email was the last straw."],
        "The drop that makes the glass overflow is a straw in English (it broke the camel's back). The idiom is frozen: never *the last drop or *the last hay.",
      ),
      mt(
        "Match each British form with its American equivalent.",
        [
          ["If the cap fits", "If the shoe fits"],
          ["a skeleton in the cupboard", "a skeleton in the closet"],
          ["a storm in a teacup", "a tempest in a teapot"],
          ["touch wood", "knock on wood"],
        ],
        "Both forms are correct in their own variety. Choose one and stay consistent within a text.",
      ),
      fb(
        "We haven't had a single complaint from the new tenants so far, ___.",
        "knock on wood",
        "Hasta ahora no hemos tenido ni una queja de los nuevos inquilinos, [toco madera].",
        ["touch wood"],
        "American \"knock on wood\", British \"touch wood\": both match «toco madera». Add it after the statement you don't want to jinx.",
      ),
      tr(
        "Fue una tormenta en un vaso de agua.",
        "It was a tempest in a teapot.",
        ["It was a storm in a teacup.", "It was just a tempest in a teapot.", "It was just a storm in a teacup."],
        "US \"a tempest in a teapot\", UK \"a storm in a teacup\". Mixing them (*a storm in a glass of water) breaks the frozen form.",
      ),
      cp(
        "I've only been learning the cello for a month. Rome wasn't ___ in a day.",
        "built",
        [],
        "\"Rome wasn't built in a day\": big things take time. The passive \"wasn't built\" is part of the fixed form.",
      ),
      lc(
        "Keep applying. The early bird and all that.",
        "What does \"and all that\" do here?",
        [
          "It finishes the proverb without saying the rest of it",
          "It means the speaker doesn't believe the proverb",
          "It adds a second, different proverb",
          "It shows the speaker has forgotten the ending",
        ],
        0,
        "\"...and all that\" is a handy way to close a half-quoted proverb: \"the early bird (catches the worm) and all that\".",
      ),
      mc(
        "Which sentence is correct?",
        [
          "Little did he know that his flight had been canceled.",
          "Little he knew that his flight had been canceled.",
          "Little knew he that his flight had been canceled.",
          "Little did he knew that his flight had been canceled.",
        ],
        0,
        "After a negative opener the pattern is auxiliary + subject + bare verb. With no other auxiliary, add \"did\": \"Little did he know\". Spanish has no auxiliary to move, hence *Little he knew.",
      ),
      tr(
        "Poco sabía ella que el refrán tenía razón.",
        "Little did she know that the saying was right.",
        ["Little did she know the saying was right.", "Little did she know that the proverb was right.", "Little did she know the proverb was right."],
        "«Poco sabía» → \"Little did... know\": inversion with \"did\" and the bare verb. *Little knew she is not English.",
      ),
      kw(
        "SOONER",
        "We had just sat down when the fire alarm went off.",
        "___ than the fire alarm went off.",
        "No sooner had we sat down",
        [],
        "\"No sooner had + subject + participle... than...\" inverts after the negative opener; note \"than\", not *when or *that.",
      ),
      wo(
        "Not only did he lose the bet, but he also had to pay for dinner.",
        "No solo perdió la apuesta, sino que además tuvo que pagar la cena.",
        "\"Not only\" at the start triggers inversion with \"did\"; the second half is normal word order with \"but... also\".",
      ),
      dt(
        "As the old saying goes, you can't have your cake and eat it too.",
        "\"Have your cake and eat it\" links as /hæv jər ˈkeɪk ən ˈiːt ɪt/; American English often adds \"too\".",
      ),
      tr(
        "Dime con quién andas y te diré quién eres.",
        "A man is known by the company he keeps.",
        ["You are known by the company you keep.", "You're known by the company you keep.", "A person is known by the company they keep.", "You are who you hang out with."],
        "The formal equivalent is \"A man is known by the company he keeps\"; in conversation people say \"You are who you hang out with\" or half-quote \"Birds of a feather...\".",
      ),
      mc(
        "You want to share «No por mucho madrugar amanece más temprano» with English-speaking friends. Which is best?",
        [
          "As we say in Spanish, getting up early doesn't make the sun rise any sooner.",
          "Not for much getting up early does it dawn earlier, like says the proverb.",
          "The early bird catches the worm.",
          "As the English say, the sun waits for nobody.",
        ],
        0,
        "There is no true English equivalent, so quote the Spanish and translate it plainly. \"The early bird\" says the opposite, and the others are a calque and an invented proverb.",
      ),
      tr(
        "Llegué a las seis y ya no había boletos. Y luego dicen que a quien madruga, Dios le ayuda.",
        "I got there at six and the tickets had sold out. So much for the early bird.",
        [
          "I got there at six and the tickets were sold out. So much for the early bird.",
          "I got there at six and there were no tickets left. So much for the early bird.",
          "I arrived at six and the tickets had sold out. So much for the early bird.",
          "I arrived at six and the tickets were sold out. So much for the early bird.",
          "I arrived at six and there were no tickets left. So much for the early bird.",
          "I got there at six and the tickets had sold out. So much for the early bird catching the worm.",
          "I got there at six and the tickets had already sold out. So much for the early bird.",
          "I got there at six and the tickets were already sold out. So much for the early bird.",
        ],
        "«Y luego dicen que...» is ironic quotation, which English does with \"So much for...\" + noun or -ing. *And then they say that the early bird... misses the irony.",
      ),
      mc(
        "Which sentence is correct?",
        [
          "So much for practice making perfect.",
          "So much for practice makes perfect.",
          "So much for that practice makes perfect.",
          "So much for practice to make perfect.",
        ],
        0,
        "\"So much for\" is followed by a noun or an -ing form, so the proverb's verb changes: \"practice makes\" becomes \"practice making\".",
      ),
      dt(
        "Little did they know that pride goes before a fall.",
        "Listen for the auxiliary: \"did they know\", /dɪd ðeɪ ˈnoʊ/, and \"goes\" (modern), not \"goeth\".",
      ),
      sp(
        "Then the printer broke down. That's all we needed!",
        "Y luego se descompuso la impresora. ¡Éramos pocos y parió la abuela!",
        "Stress \"all\" and let the sentence fall: \"That's ALL we needed!\"",
        "This refrán has no English equivalent, so paraphrase the meaning with \"That's all we needed!\" or \"And to top it all...\".",
      ),
      sp(
        "You know what they say: a problem shared is a problem halved.",
        "Ya sabes lo que dicen: un problema compartido pesa la mitad.",
        "Pause after \"say\"; \"halved\" is /hævd/, with a silent l.",
        "A proverb at the turning point of the advice sums it up in one memorable line.",
      ),
    ],
  ),
];
