// Synced from cheneygross-afk/lengo:src/lib/lessons/en-c2-u28-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Required drill lessons for EN-C2 unit u28 (philosophy and abstract ideas: free will and responsibility, abstract nouns and articles, analyzing and debating arguments): a short recap, then graded practice.

type Ex = Lesson["exercises"][number];

const SECONDS: Record<string, number> = {
  "multiple-choice": 15, "multi-select": 20, "listen-choose": 20, "fill-blank": 20, translate: 30,
  "word-order": 25, matching: 30, dictation: 30, speak: 25, write: 0,
};

// Expands "a {b|c} d" into ["a b d", "a c d"] (nested groups are not supported).
const expand = (pattern: string): string[] => {
  const m = pattern.match(/\{([^{}]*)\}/);
  if (!m) return [pattern.replace(/\s+/g, " ").replace(/ ([,.?])/g, "$1").trim()];
  return m[1].split("|").flatMap((o) => expand(pattern.replace(m[0], o)));
};

const tr = (source: string, answer: string, altAnswers: string[], explanation: string): Ex =>
  altAnswers.length
    ? { type: "translate", direction: "es-en", prompt: "Translate into English.", source, answer, altAnswers, explanation }
    : { type: "translate", direction: "es-en", prompt: "Translate into English.", source, answer, explanation };

// Translate with answer variants written as patterns: the first expansion is the model answer.
const tx = (source: string, patterns: string | string[], explanation: string): Ex => {
  const all = [...new Set([patterns].flat().flatMap(expand))];
  return tr(source, all[0], all.slice(1), explanation);
};

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

export const EN_C2_U28_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. Free will and responsibility, abstract nouns and articles,
  // analyzing arguments
  // ---------------------------------------------------------------------
  drill(
    "en-c2-philosophy-unit-drill-1",
    "Drill: Free Will, Abstract Nouns and Arguments",
    "Discuss free will, causation and responsibility with the right prepositions and past modals, use articles and countability with abstract nouns, and describe arguments as valid or sound, necessary or sufficient.",
    "Recap: free will, abstract nouns and argument terms",
    [
      "Abstract nouns in a general sense take no article, even with an adjective: \"free will\", \"determinism\", \"human nature\", \"Western philosophy\". \"The\" returns for an identified instance (\"the history of Peru\", \"the freedom we enjoy\"), \"a\" for a kind (\"a thorough knowledge of\"), and advice, evidence, research, progress and information are uncountable. Positions: hard determinist, libertarian, compatibilist; a universe is \"deterministic\".",
      "Patterns: \"cause someone to do\" (never *cause that), \"stem from\", \"hold someone responsible for\", \"blame X on Y\", \"accountable to\" a person, \"could have done otherwise\", \"can't have\" + participle, \"need not\". Arguments are valid or invalid, sound or unsound (statements are true or false); a conclusion \"follows from\" premises; we \"draw\" a conclusion; \"necessary for\", \"sufficient for\", \"a counterexample to\".",
    ],
    [
      ["Many neuroscientists doubt that we have free will.", "Muchos neurocientíficos dudan de que tengamos libre albedrío."],
      ["What caused him to abandon the project?", "¿Qué hizo que abandonara el proyecto?"],
      ["She has a thorough knowledge of medieval logic.", "Tiene un conocimiento profundo de la lógica medieval."],
      ["The argument is valid, but its first premise is false.", "El argumento es válido, pero su primera premisa es falsa."],
    ],
    [
      mc(
        "Which sentence is correct?",
        [
          "Some neuroscientists doubt that we have free will.",
          "Some neuroscientists doubt that we have the free will.",
          "Some neuroscientists doubt that we have a free will.",
          "Some neuroscientists doubt that we have free wills.",
        ],
        0,
        "\"Free will\" is an abstract concept used in a general sense, so it takes no article and no plural, although Spanish says «el libre albedrío».",
      ),
      fb(
        "If the universe is ___, every event was fixed long before it happened.",
        "deterministic",
        "Si el universo es [determinista], todo acontecimiento estaba fijado mucho antes de ocurrir.",
        [],
        "The adjective for a system or a universe is \"deterministic\". \"A determinist\" is a person who holds the theory, and \"determinism\" is the theory itself.",
      ),
      mt(
        "Match each position with what it holds.",
        [
          ["hard determinist", "free will is an illusion"],
          ["libertarian", "determinism is false and we are free"],
          ["compatibilist", "freedom and determinism can coexist"],
          ["incompatibilist", "freedom and determinism cannot both be true"],
          ["fatalist", "what will happen will happen whatever we do"],
        ],
        "These labels are fixed. Note that \"libertarian\" in metaphysics has nothing to do with politics, and fatalism is not the same as determinism.",
      ),
      tx(
        "Los compatibilistas sostienen que la libertad no exige la ausencia de causas.",
        "Compatibilists {argue|maintain|hold|contend} that freedom {does not|doesn't} require the absence of causes.",
        "\"Freedom\" is general (no article), but \"the absence of causes\" is identified by its \"of\" phrase, so it keeps \"the\".",
      ),
      tx(
        "Los adolescentes necesitan sentir que tienen capacidad de decisión.",
        [
          "{Teenagers|Adolescents} need to feel {that|} they have agency.",
          "{Teenagers|Adolescents} need a sense of agency.",
        ],
        "\"Agency\" in this sense is the capacity to act and make things happen, not an office or a business. Generic plural \"teenagers\" takes no article.",
      ),
      fb(
        "What caused her ___ her mind at the last minute?",
        "to change",
        "¿Qué hizo que [cambiara] de opinión en el último momento?",
        [],
        "\"Cause\" + object + to-infinitive. *What caused that she changed her mind copies «hizo que».",
      ),
      tx(
        "No podemos responsabilizar a nadie de lo que no podía controlar.",
        "We {cannot|can't} hold {anyone|anybody} responsible for {what they could not control|what they couldn't control|what was beyond their control|things beyond their control}.",
        "«Responsabilizar a alguien de algo» is \"hold someone responsible for something\". *Responsible of is a calque.",
      ),
      fb(
        "The official report blamed the delays ___ the contractor.",
        "on",
        "El informe oficial culpó de los retrasos [a] la constructora.",
        [],
        "Two patterns: \"blame something on someone\" or \"blame someone for something\" (\"blamed the contractor for the delays\").",
      ),
      tx(
        "Él no podría haber elegido de otro modo.",
        "He {could not|couldn't} have chosen {otherwise|differently}.",
        "An unrealized past possibility needs the perfect infinitive: \"could have chosen\". *He couldn't choose otherwise refers to ability, not to this past choice.",
      ),
      mc(
        "Choose the form: \"If she was asleep at the time, she ___ the message.\"",
        ["can't have sent", "mustn't have sent", "couldn't send", "can't send"],
        0,
        "Negative deduction about the past is \"can't have\" (or \"couldn't have\") + past participle. \"Mustn't have\" is not the usual negative of deductive \"must have\", and the last two do not refer to a completed past action.",
      ),
      kw(
        "NEED",
        "Determinism does not necessarily undermine responsibility.",
        "Determinism ___ undermine responsibility.",
        "need not",
        ["needn't", "does not need to", "doesn't need to"],
        "\"Need not\" («no tiene por qué») says something is not necessarily so, which is exactly what \"does not necessarily\" means.",
      ),
      dt(
        "One could object that our sense of choice is an illusion.",
        "\"One could object that...\" is a cautious, academic way to introduce an objection.",
      ),
      tx(
        "La felicidad no se puede comprar.",
        ["Happiness {cannot|can't} be bought.", "You {cannot|can't} buy happiness."],
        "General \"happiness\" takes no article. *The happiness cannot be bought would refer to one particular, already mentioned happiness.",
      ),
      mc(
        "Which sentence is correct?",
        [
          "Western philosophy has long been obsessed with certainty.",
          "The Western philosophy has long been obsessed with certainty.",
          "A Western philosophy has long been obsessed with certainty.",
          "The Western philosophies has long been obsessed with certainty.",
        ],
        0,
        "An adjective does not make a general abstract noun specific: \"Western philosophy\", \"human nature\", \"modern society\", all without \"the\".",
      ),
      tx(
        "La naturaleza humana no cambia de un siglo a otro.",
        "Human nature {does not|doesn't} change from one century to {another|the next}.",
        "*The human nature is one of the clearest markers of Spanish interference in writing; adjective + abstract noun stays general.",
      ),
      tx(
        "La libertad de la que disfrutamos hoy costó siglos de lucha.",
        "The freedom {that|which|} we enjoy today {cost|took} centuries of struggle.",
        "Here \"the\" returns because the relative clause identifies one particular freedom. Compare general \"Freedom matters\".",
      ),
      fb(
        "He has ___ thorough knowledge of medieval law.",
        "a",
        "Tiene [unos] conocimientos profundos de derecho medieval.",
        [],
        "\"Knowledge\" is uncountable, but \"a good / thorough knowledge of\" + subject is standard. The plural *knowledges is always wrong.",
      ),
      mc(
        "Choose the option: \"She showed ___ courage during the trial.\"",
        ["great", "a great", "the great", "greats"],
        0,
        "Here courage is a quantity, so no article: \"great courage\". \"A\" appears only when a phrase turns it into one particular kind (\"a courage that surprised everyone\").",
      ),
      tx(
        "Me dio un consejo muy útil.",
        "{He|She} gave me {a very useful piece of advice|some very useful advice|a very helpful piece of advice|some very helpful advice|a really useful piece of advice}.",
        "\"Advice\" is uncountable: \"a piece of advice\" or \"some advice\", never *an advice or *advices.",
      ),
      fb(
        "The evidence against him ___ overwhelming.",
        "was",
        "Las pruebas en su contra [eran] abrumadoras.",
        [],
        "\"Evidence\" is uncountable and takes a singular verb, even though Spanish uses the plural «las pruebas eran».",
      ),
      mc(
        "Choose the word: \"We haven't made ___ progress this month.\"",
        ["much", "many", "a", "several"],
        0,
        "\"Progress\" is uncountable, so \"much\" (or \"a lot of\"), never \"many\", \"several\" or \"a\".",
      ),
      tx(
        "La conclusión no se deduce de las premisas.",
        "The conclusion {does not|doesn't} follow from the premises.",
        "A conclusion \"follows from\" the premises. *Follows of copies «se deduce de».",
      ),
      fb(
        "What conclusion can we ___ from these figures?",
        "draw",
        "¿Qué conclusión podemos [sacar] de estas cifras?",
        [],
        "We \"draw\" (or \"reach\") a conclusion. *Take a conclusion is a calque of «sacar una conclusión».",
      ),
      mc(
        "An argument whose form guarantees its conclusion, but which has a false premise, is...",
        ["valid but unsound", "sound but invalid", "true but invalid", "valid and sound"],
        0,
        "Validity is about form; soundness requires validity plus true premises. Arguments are never \"true\": that word is for statements.",
      ),
      tx(
        "Una buena nota es necesaria pero no suficiente para conseguir la beca.",
        "A {good|high} {grade|mark} is necessary but not sufficient {to get|for getting|to win|for winning|for} the scholarship.",
        "\"Necessary but not sufficient\" is the standard evaluative phrase: you need it, but it does not guarantee the result. Note \"sufficient for\".",
      ),
      wo(
        "You can apply only if you have lived here for two years",
        "Solo puedes presentar la solicitud si llevas dos años viviendo aquí.",
        "\"B only if A\" states a necessary condition: living here two years is required, but may not be enough.",
      ),
      fb(
        "One clear counterexample ___ his theory is the case of identical twins.",
        "to",
        "Un claro contraejemplo [a] su teoría es el caso de los gemelos idénticos.",
        [],
        "\"A counterexample to\" takes \"to\", not *of.",
      ),
      wo(
        "Determinism holds that every event has a prior cause",
        "El determinismo sostiene que todo acontecimiento tiene una causa anterior.",
        "General \"Determinism\" opens the sentence without an article; \"holds that\" introduces the thesis.",
      ),
      lc(
        "You're attacking a straw man; nobody here holds that view.",
        "What is the speaker saying?",
        [
          "The other person is attacking a weakened version of a view",
          "The other person has found a valid counterexample",
          "The other person agrees with everyone",
          "The other person's argument is sound",
        ],
        0,
        "A \"straw man\" is a weakened version of an opponent's view that is easy to knock down.",
      ),
      lc(
        "Some argue that wealth is necessary but not sufficient for happiness.",
        "What is the claim?",
        [
          "You need wealth to be happy, but wealth alone is not enough",
          "Wealth guarantees happiness",
          "Wealth has nothing to do with happiness",
          "Happiness is necessary for wealth",
        ],
        0,
        "A necessary condition is required; a sufficient one guarantees the result. \"Necessary but not sufficient\" means required but not enough on its own.",
      ),
      sp(
        "If that were true, every accident would be a crime, which is absurd.",
        "Si eso fuera cierto, todo accidente sería un delito, lo cual es absurdo.",
        "Pause before \"which is absurd\" and stress \"ABsurd\".",
        "A reductio ad absurdum shows that a view leads to an absurd consequence. Note \"were\" in the unreal condition.",
      ),
      sp(
        "Being a citizen is necessary but not sufficient for voting.",
        "Ser ciudadano es necesario pero no suficiente para votar.",
        "Stress \"NECessary\" and \"sufFICient\".",
        "\"Sufficient for\" + -ing or noun; *sufficient to voting is wrong.",
      ),
      dt(
        "A valid argument with a false premise can still lead to a false conclusion.",
        "Validity guarantees only that true premises give a true conclusion; it says nothing about premises that are false.",
      ),
      dt(
        "Nobody is to blame for the delay.",
        "\"Be to blame for\" («tener la culpa de») uses the active infinitive \"to blame\".",
      ),
      tx(
        "Hay pocas pruebas de que tengamos libre albedrío.",
        [
          "There is little evidence that we have free will.",
          "There is {not much|very little} evidence that we have free will.",
        ],
        "Two Mastery traps in one: uncountable \"evidence\" with \"little\" and a singular verb, and generic \"free will\" with no article.",
      ),
    ],
  ),
  // ---------------------------------------------------------------------
  // Drill 2. Abstract nouns in context, generic and unique reference,
  // the seminar debate, reconstructing arguments, and a whole-unit mix
  // ---------------------------------------------------------------------
  drill(
    "en-c2-philosophy-unit-drill-2",
    "Drill: Articles in Context, Debate and Argument Analysis",
    "Proofread abstract nouns and articles, use noun + that-clause and \"the extent to which\", choose generic and unique reference, take part in a seminar debate, and reconstruct and criticize an argument.",
    "Recap: articles in context, debate moves and weak links",
    [
      "Noun + that-clause has no \"of\": \"the idea that\", \"the assumption that\" (never *the idea of that); \"the question of whether\"; \"the extent to which\", \"the conditions under which\". Generic reference: \"Blue whales are endangered\" or \"The blue whale is...\", never *A blue whale is endangered; \"People say...\" (not *The people). Unique: \"the economy\", \"the future\"; institutions: \"in (the) hospital\", \"in prison\"; names: \"the Netherlands\" but \"Switzerland\", \"the UN\" but \"NATO\".",
      "Seminar moves: \"I'm inclined to think...\", \"What exactly do you mean by...?\", \"Wouldn't that commit you to...?\", \"Fair enough, I'll grant you that. But...\". Analysis: an argument \"hinges on\" a premise, \"takes for granted that\" (not *takes as granted), \"overlooks the possibility that\"; weak links include false dilemma, slippery slope, hasty generalization and equivocation; a step can be \"unwarranted\".",
    ],
    [
      ["She rejects the assumption that people always act rationally.", "Rechaza el supuesto de que las personas siempre actúan de forma racional."],
      ["People say that patience is a virtue.", "La gente dice que la paciencia es una virtud."],
      ["Wouldn't that commit you to saying that nobody is ever to blame?", "¿No te obligaría eso a decir que nadie tiene nunca la culpa?"],
      ["The argument overlooks the possibility that both are caused by stress.", "El argumento pasa por alto la posibilidad de que ambas cosas las cause el estrés."],
    ],
    [
      mc(
        "Which sentence is correct?",
        [
          "According to Aristotle, virtue is a habit.",
          "According to the Aristotle, the virtue is a habit.",
          "According to Aristotle, the virtue is a habit.",
          "According to the Aristotle, virtue is a habit.",
        ],
        0,
        "Personal names take no article, and \"virtue\" in a general sense takes none either. \"A habit\" is correct: it classifies virtue as one kind of habit.",
      ),
      tx(
        "Rechaza la idea de que el progreso sea inevitable.",
        "{He|She} rejects the {idea|notion|view} that progress is inevitable.",
        "\"The idea that\" + indicative, with no \"of\" (*the idea of that). General \"progress\" takes no article, and English needs no subjunctive here.",
      ),
      fb(
        "The whole argument rests on the assumption ___ people always act rationally.",
        "that",
        "Todo el argumento se basa en el supuesto [de que] las personas siempre actúan racionalmente.",
        [],
        "A content clause follows the noun directly with \"that\". «De que» never becomes *of that.",
      ),
      mc(
        "In which sentence could \"that\" be replaced by \"which\"?",
        [
          "The theory that she defended in her thesis was controversial.",
          "The theory that the mind is purely physical is controversial.",
          "The claim that time is an illusion is hard to test.",
          "The fact that he refused to answer is revealing.",
        ],
        0,
        "Only in a relative clause, where \"that\" stands for the noun (she defended the theory). In the other three, \"that\" introduces a content clause stating what the theory, claim or fact is, and \"which\" is impossible.",
      ),
      tx(
        "La cuestión de si las máquinas pueden pensar sigue abierta.",
        "The question of whether {machines|computers} can think {remains|is still} {open|unresolved|unsettled}.",
        "«La cuestión de si» is \"the question of whether\". Generic plural \"machines\" takes no article.",
      ),
      fb(
        "It is unclear to what ___ we can control our emotions.",
        "extent",
        "No está claro hasta qué [punto] podemos controlar nuestras emociones.",
        ["degree"],
        "In indirect questions \"to what extent\" is the natural form; as a noun phrase it becomes \"the extent to which\". *In which measure is not English.",
      ),
      tx(
        "No están claras las condiciones en que se hizo el experimento.",
        [
          "The conditions under which the experiment was {carried out|conducted|done|performed} {are not|aren't} clear.",
          "The conditions under which the experiment was {carried out|conducted|done|performed} {are|remain} unclear.",
          "It is not clear under what conditions the experiment was {carried out|conducted|done|performed}.",
        ],
        "The preposition comes from the collocation \"under certain conditions\", hence \"the conditions under which\". *The conditions in which the experiment was done is less idiomatic in formal writing.",
      ),
      wo(
        "There is a sense in which every promise limits our freedom",
        "En cierto sentido, toda promesa limita nuestra libertad.",
        "\"There is a sense in which\" comes from \"in a sense\". General \"freedom\" with a possessive needs no article.",
      ),
      mc(
        "Which sentence about the whole species is correct?",
        [
          "Blue whales are endangered.",
          "A blue whale is endangered.",
          "The blue whales are endangered.",
          "Blue whale is endangered.",
        ],
        0,
        "Zero article + plural is the everyday generic form. \"A\" + singular means any single member and cannot carry a fact about the whole species; \"the blue whales\" would mean a particular group.",
      ),
      fb(
        "___ smartphone has changed the way people communicate.",
        "The",
        "[El] teléfono inteligente ha cambiado la forma en que la gente se comunica.",
        [],
        "\"The\" + singular can present an invention as a type, typical of formal or encyclopedic style: \"The printing press...\", \"The smartphone...\".",
      ),
      tx(
        "La gente dice que el tiempo lo cura todo.",
        "People say {that|} time heals {everything|all wounds}.",
        "«La gente» is \"people\" (no article; *the people means a particular group or «el pueblo»), and general \"time\" takes no article.",
      ),
      tx(
        "Su abuela está en el hospital desde el lunes.",
        "{Her|His|Their} grandmother has been in {the hospital|hospital} since Monday.",
        "American English says \"in the hospital\"; British English \"in hospital\" for a patient. «Desde el lunes» with a state continuing now takes the present perfect.",
      ),
      mc(
        "Choose the article: \"The journalist went to ___ prison to interview an inmate.\"",
        ["the", "no article", "a", "an"],
        0,
        "Without an article, \"in prison\" means as a prisoner. Visiting the building for another purpose needs \"the\": \"went to the prison\".",
      ),
      fb(
        "Many young people are worried about ___ economy.",
        "the",
        "Muchos jóvenes están preocupados por [la] economía.",
        [],
        "\"The economy\" is a unique reference, like \"the environment\" and \"the future\", so it keeps \"the\".",
      ),
      tx(
        "Los Países Bajos y Suiza tienen sistemas políticos muy distintos.",
        "The Netherlands and Switzerland have very different political systems.",
        "Plural names take \"the\" (\"the Netherlands\"); most singular country names do not (\"Switzerland\"). Note the singular-sounding \"the Netherlands has\" when it stands alone.",
      ),
      fb(
        "I'm ___ to think that free will is compatible with determinism.",
        "inclined",
        "Me [inclino] a pensar que el libre albedrío es compatible con el determinismo.",
        [],
        "\"I'm inclined to think\" signals moderate commitment and sounds thoughtful in a seminar, a good alternative to a repeated \"I think\".",
      ),
      tx(
        "¿Qué quieres decir exactamente con «justo»?",
        ["What exactly do you mean by \"fair\"?", "What exactly do you mean by fair?", "What do you mean exactly by \"fair\"?", "What do you mean exactly by fair?", "What exactly do you mean by \"just\"?", "What exactly do you mean by just?"],
        "\"What exactly do you mean by...?\" asks for clarification of a term. «Querer decir con» is \"mean by\", not *want to say with.",
      ),
      tx(
        "¿Estás diciendo que el castigo nunca está justificado?",
        "Are you saying {that|} punishment is never justified?",
        "\"Are you saying that...?\" checks the other person's claim. General \"punishment\" takes no article.",
      ),
      fb(
        "Wouldn't that ___ you to the view that nobody should ever be punished?",
        "commit",
        "¿No te [obligaría] eso a defender que nunca habría que castigar a nadie?",
        [],
        "\"Commit someone to\" a view shows that their position has a consequence they would not accept: a polite mini reductio.",
      ),
      lc(
        "Fair enough, I'll grant you that. But it doesn't show that we're responsible.",
        "What is the speaker doing?",
        [
          "Conceding a point but keeping their position",
          "Changing their mind completely",
          "Ending the discussion",
          "Asking for a definition",
        ],
        0,
        "\"Fair enough, I'll grant you that\" concedes; \"But it doesn't show...\" holds the ground.",
      ),
      lc(
        "Could you unpack that a bit?",
        "What does the speaker want?",
        ["A more detailed explanation of an idea", "Help with their luggage", "The other person to stop talking", "A summary of the whole discussion"],
        0,
        "\"Unpack\" here means explain the parts of an idea.",
      ),
      sp(
        "With respect, I'd question the idea that our choices are fixed in advance.",
        "Con todo respeto, yo cuestionaría la idea de que nuestras decisiones están fijadas de antemano.",
        "Soften \"With respect\"; stress \"QUEStion\" and \"adVANCE\".",
        "Hedged challenges (\"I'd question...\") sound firm but courteous; a bare \"You're wrong\" sounds aggressive in English.",
      ),
      dt(
        "So, if I've understood you correctly, blame is never deserved.",
        "Paraphrasing checks understanding and lets the speaker correct you.",
      ),
      fb(
        "The argument takes ___ granted that all students have internet access at home.",
        "for",
        "El argumento [da por] sentado que todos los estudiantes tienen acceso a internet en casa.",
        [],
        "The idiom is \"take for granted that\" (or \"take it for granted that\"); *take as granted is wrong.",
      ),
      fb(
        "Recent research ___ that memory is less reliable than we think.",
        "suggests",
        "Las investigaciones recientes [indican] que la memoria es menos fiable de lo que creemos.",
        ["shows", "indicates"],
        "\"Research\" is uncountable and takes a singular verb: \"research suggests\", never *researches suggest.",
      ),
      mt(
        "Match each weak link or fallacy with its description.",
        [
          ["equivocation", "a key word changes meaning midway"],
          ["false dilemma", "only two options are offered when there are more"],
          ["slippery slope", "an unsupported chain of consequences"],
          ["hasty generalization", "a general rule drawn from too few cases"],
          ["straw man", "a weakened version of the opponent's view"],
          ["begging the question", "assuming what you set out to prove"],
        ],
        "Naming the weak link precisely is the last step of argument analysis.",
      ),
      mc(
        "\"Either we ban cars from the center, or the city will choke.\" Which weak link is this?",
        ["a false dilemma", "a slippery slope", "a hasty generalization", "equivocation"],
        0,
        "Only two options are presented, ignoring others (better buses, congestion charges, and so on): a false dilemma.",
      ),
      tx(
        "Este paso no está justificado: como mucho, los datos muestran una correlación.",
        "This step is {unwarranted|not justified|unjustified}: at most, the data {show|shows} a correlation.",
        "\"Unwarranted\" (not justified by the evidence) and \"at most\" make a precise, proportionate verdict. \"The data show\" is formal; \"the data shows\" is now accepted too.",
      ),
      wo(
        "The argument overlooks the possibility that the causation runs the other way",
        "El argumento pasa por alto la posibilidad de que la causalidad vaya en sentido contrario.",
        "\"Overlook the possibility that\" names a hidden assumption; \"the causation\" is specific here, so it keeps \"the\".",
      ),
      dt(
        "Even so, the argument shows that responsibility comes in degrees.",
        "The principle of charity: after criticizing, say what survives. General \"responsibility\" takes no article.",
      ),
      dt(
        "The nature of time remains a mystery to physicists.",
        "\"The nature of time\" is one identified nature, so it keeps \"the\"; general \"time\" inside the phrase does not.",
      ),
      tx(
        "Hasta qué punto somos responsables de nuestro carácter es una cuestión abierta.",
        [
          "The extent to which we are responsible for our character is an open question.",
          "To what extent we are responsible for our character is an open question.",
          "{How far|How much} we are responsible for our character is an open question.",
        ],
        "As a subject, «hasta qué punto» becomes \"the extent to which\". \"Responsible for\", not *of.",
      ),
      tx(
        "Podría objetarse que la definición de libertad es demasiado amplia.",
        [
          "It {might|could} be objected that the definition of freedom is too {broad|wide}.",
          "One {might|could} object that the definition of freedom is too {broad|wide}.",
        ],
        "\"It might be objected that\" keeps the objection at an academic distance. \"The definition of freedom\" keeps \"the\", while \"freedom\" inside it stays general.",
      ),
      sp(
        "I take your point, but the objection doesn't touch my claim.",
        "Entiendo lo que dices, pero la objeción no afecta a mi tesis.",
        "Stress \"POINT\" and \"TOUCH\"; pause slightly before \"but\".",
        "Concede, then limit: \"doesn't touch my claim\" is a courteous way to say the objection misses the point.",
      ),
    ],
  ),
];
