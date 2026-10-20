// Synced from cheneygross-afk/lengo:src/lib/lessons/en-c2-u17-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Required drill lessons for EN-C2 unit u17 (citations and references): a short recap, then graded practice.

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

export const EN_C2_U17_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. Quoting, reporting verbs, referencing styles, the apparatus
  // ---------------------------------------------------------------------
  drill(
    "en-c2-citations-unit-drill-1",
    "Drill: Quoting, Reporting Verbs and Referencing",
    "Quote and punctuate quotations the American way, choose reporting verbs that match the source's stance, format in-text citations, and use ibid., e.g., i.e. and cf. correctly.",
    "Recap: quote, report, reference, annotate",
    [
      "To \"quote\" is to reproduce exact words; to \"cite\" is to name a source. In American style, periods and commas go inside the closing quotation mark, colons and semicolons outside, and a quotation after \"that\" takes no comma, no colon and no capital letter.",
      "The reporting verb carries stance: \"state\" and \"note\" are neutral, \"suggest\" is tentative, \"argue\" and \"maintain\" are firm, \"show\" endorses, \"claim\" and \"purport\" keep distance, \"concede\" shows the source yielding. Mind the patterns: \"suggest that\", \"emphasize\" + object, \"explain to\" + person.",
      "APA writes (Brown & Lee, 2020, p. 4), MLA (Brown and Lee 4); three or more authors take \"et al.\". In notes, \"ibid.\" repeats the previous note's source, \"e.g.\" gives examples, \"i.e.\" restates, and \"cf.\" means compare.",
    ],
    [
      ["The editor called the deal \"a historic step.\"", "La editora calificó el acuerdo de «paso histórico»."],
      ["Ruiz argues that \"the market cannot regulate itself.\"", "Ruiz sostiene que «el mercado no puede regularse solo»."],
      ["Even the authors concede that the sample was small.", "Hasta los autores reconocen que la muestra era pequeña."],
      ["Okafor et al. (2022) reached a similar conclusion.", "Okafor y otros (2022) llegaron a una conclusión similar."],
    ],
    [
      mc(
        "«La tesis cita más de cien estudios, pero solo cita textualmente a dos autores.» Which translation is correct?",
        [
          "The thesis cites over a hundred studies but quotes only two authors.",
          "The thesis quotes over a hundred studies but cites only two authors.",
          "The thesis cites over a hundred studies but cites textually only two authors.",
          "The thesis mentions over a hundred studies but quotes textually only two authors.",
        ],
        0,
        "Spanish «citar» covers two English verbs: \"cite\" names a source, \"quote\" reproduces its exact words. A «cita textual» is simply a quotation, so *cites textually and *quotes textually are calques.",
      ),
      fb(
        "Her paper on urban heat is ___ in almost every textbook on the subject.",
        "cited",
        "Su artículo sobre el calor urbano se [cita] en casi todos los manuales sobre el tema.",
        ["widely cited", "quoted"],
        "Being mentioned as a source is being \"cited\". \"Quoted\" is also possible if her exact words are reproduced, but \"cited\" is the normal verb for a paper used as a reference.",
      ),
      tr(
        "Citó textualmente dos frases del discurso del presidente.",
        "{She|He} quoted two {sentences|lines} from the president's speech.",
        "Reproducing exact words is \"quote\"; «textualmente» is already inside the verb. *Cited textually is a calque, and \"cite\" would only mean she named the speech as a source.",
      ),
      tr(
        "Sus llamadas «mejoras» hicieron que la aplicación fuera más lenta.",
        "{Their|Its|His|Her} so-called \"improvements\" made the app slower.",
        "Quotation marks that distance you from a word are scare quotes, and in English they are double quotation marks, never angle quotes. \"So-called\" plus the quotation marks signals the same irony as «llamadas».",
        [
          "Their so-called \"improvements\" made the application slower.",
          "Its so-called \"improvements\" made the application slower.",
          "Their so-called \"improvements\" slowed the app down.",
          "Their so-called \"improvements\" slowed down the app.",
        ],
      ),
      mc(
        "Which sentence is punctuated correctly in American style?",
        [
          "The CEO called the merger \"a marriage of equals.\"",
          "The CEO called the merger \"a marriage of equals\".",
          "The CEO called the merger «a marriage of equals».",
          "The CEO called the merger 'a marriage of equals.'",
        ],
        0,
        "American style uses double quotation marks and puts the period inside the closing mark, even when it is not part of the original. Period outside is British (logical) style; angle quotes never appear in English; single marks are only for a quotation inside a quotation in American texts.",
      ),
      mc(
        "Which sentence is punctuated correctly?",
        [
          "Did the mayor really describe the flood as \"a minor inconvenience\"?",
          "Did the mayor really describe the flood as \"a minor inconvenience?\"",
          "Did the mayor really describe the flood as \"a minor inconvenience.\"?",
          "Did the mayor really describe the flood as: \"a minor inconvenience\"?",
        ],
        0,
        "The question mark belongs to your sentence, not to the mayor's words, so it goes outside. It goes inside only when the quotation itself is a question. A colon before a blended quotation is wrong too.",
      ),
      mc(
        "Which version handles the citation correctly?",
        [
          "The policy was \"a quiet revolution\" (Hall, 2018, p. 22).",
          "The policy was \"a quiet revolution.\" (Hall, 2018, p. 22).",
          "The policy was \"a quiet revolution.\" (Hall, 2018, p. 22)",
          "The policy was \"a quiet revolution\". (Hall, 2018, p. 22)",
        ],
        0,
        "With a parenthetical citation both American and British styles agree: close the quotation, give the citation, then one period after the closing parenthesis. A period before and after the citation is a doubled stop.",
      ),
      mc(
        "«Patel sostiene que “el mercado se corrige solo”.» Which version is correct?",
        [
          "Patel argues that \"the market corrects itself.\"",
          "Patel argues that: \"The market corrects itself.\"",
          "Patel argues, that \"the market corrects itself.\"",
          "Patel argues that, \"The market corrects itself.\"",
        ],
        0,
        "After \"that\" the quotation becomes part of your clause: no comma, no colon, and a lowercase first letter. The colon after «que» is a typical Spanish transfer.",
      ),
      fb(
        "The editor cut two sentences from the middle of the passage and marked the gap with an ___.",
        "ellipsis",
        "El editor eliminó dos oraciones de la mitad del pasaje y marcó el hueco con [puntos suspensivos].",
        [],
        "Three dots marking omitted words are an \"ellipsis\" (plural \"ellipses\"). In most English styles they stand alone, not inside brackets as Spanish writers often put them.",
      ),
      fb(
        "The auditor ___ that the bank had concealed its losses for years.",
        "stated",
        "El auditor [afirmó] que el banco había ocultado sus pérdidas durante años.",
        ["asserted", "said", "reported"],
        "«Afirmar» is \"state\", \"assert\" or \"claim\". *Affirmed is a false friend: \"affirm\" means to confirm or declare support (\"The court affirmed the ruling\").",
      ),
      fb(
        "The author ___ that the survey included only men.",
        "notes",
        "La autora [señala] que la encuesta solo incluía hombres.",
        ["points out", "observes"],
        "«Señalar» is \"note\" or \"point out\" (*signals is a calque). Both present what follows as true, which is right here because the survey's composition is a fact.",
      ),
      fb(
        "The report ___ the importance of early diagnosis.",
        "emphasizes",
        "El informe [hace hincapié en] la importancia del diagnóstico temprano.",
        ["stresses", "emphasises", "underlines", "highlights", "underscores"],
        "\"Emphasize\" and \"stress\" are transitive: you emphasize something. *Emphasizes on copies «enfatizar en»; only the noun takes \"on\" (\"an emphasis on\").",
      ),
      tr(
        "Los autores sugieren que las escuelas reduzcan la tarea.",
        "The authors suggest that schools {reduce|should reduce} {homework|the amount of homework}.",
        "\"Suggest\" takes a that-clause (with the bare subjunctive \"reduce\" or \"should reduce\") or an -ing form, never object + infinitive: *suggest schools to reduce is the classic calque.",
      ),
      tr(
        "La investigadora nos explicó que los datos estaban incompletos.",
        "The researcher explained to us that the data {were|was} incomplete.",
        "\"Explain\" needs \"to\" before the person: \"explained to us\". *Explained us is a direct calque of «nos explicó».",
      ),
      mc(
        "The original study says only that a link between screen time and poor sleep \"may exist.\" Which report is faithful?",
        [
          "The authors suggest that screen time may affect sleep.",
          "The authors prove that screen time affects sleep.",
          "The authors demonstrate that screen time affects sleep.",
          "The authors insist that screen time affects sleep.",
        ],
        0,
        "A cautious source needs a tentative verb and a hedge. \"Prove\" and \"demonstrate\" endorse the finding as established, and \"insist\" makes the authors sound adamant; all three misrepresent a claim that was only possible.",
      ),
      tr(
        "Taylor sostiene que la crisis se pudo haber evitado.",
        "Taylor {argues|maintains|contends} that the crisis could have been {avoided|prevented}.",
        "«Sostener» a position is \"argue\", \"maintain\" or \"contend\". Here \"argue\" means putting forward a reasoned view, not «discutir».",
      ),
      fb(
        "The start-up ___ to have built a battery that never wears out.",
        "claims",
        "La startup [asegura] haber construido una batería que nunca se desgasta.",
        ["purports"],
        "\"Claim to have\" + past participle reports the statement while keeping your distance. \"Purports to have\" is even more skeptical. \"States\" cannot take this infinitive pattern.",
      ),
      tr(
        "Hasta el propio ministro reconoce que el plan es caro.",
        "Even the minister {himself |}{concedes|admits|acknowledges} that the plan is {expensive|costly}.",
        "\"Concede\", \"admit\" and \"acknowledge\" show the source accepting a point that goes against its own position, which \"even\" makes explicit.",
      ),
      mc(
        "Which in-text citation follows APA style for a work by two authors?",
        [
          "(Garcia & Wong, 2021)",
          "(Garcia y Wong, 2021)",
          "(Garcia and Wong 2021)",
          "(Garcia, Wong, 2021)",
        ],
        0,
        "APA joins two names with \"&\" inside parentheses and a comma before the year. Spanish «y» never appears in an English citation, even for Spanish authors; \"and\" without a comma is the Harvard or MLA habit.",
      ),
      fb(
        "Lopez's early survey (1995, ___ Nguyen, 2020) predicted this trend.",
        "as cited in",
        "La primera encuesta de López (1995, [citado en] Nguyen, 2020) predijo esta tendencia.",
        ["cited in"],
        "If you only read Lopez through Nguyen, say so with a secondary citation: \"as cited in\" (APA) or \"cited in\" (Harvard). Only Nguyen, the source you actually read, goes in the reference list.",
      ),
      tr(
        "La lista de referencias debe ordenarse alfabéticamente por el apellido del primer autor.",
        "The reference list {should|must} be {arranged|ordered|sorted} alphabetically by the first author's {surname|last name}.",
        "Entries go in alphabetical order by the first author's surname. Note \"reference list\" (only cited works), which is narrower than a \"bibliography\".",
      ),
      tr(
        "Brown y Okafor (2020) no encontraron diferencias entre los grupos.",
        "Brown and Okafor (2020) found no {differences|difference} between the groups.",
        "In your own sentence (a narrative citation) two authors are joined with \"and\", never «y» and never \"&\", which APA keeps for parentheses.",
        ["Brown and Okafor (2020) did not find any differences between the groups.", "Brown and Okafor (2020) didn't find any differences between the groups."],
      ),
      mt(
        "Match each abbreviation with its meaning.",
        [
          ["ibid.", "the same source as the previous note"],
          ["e.g.", "for example"],
          ["i.e.", "that is, in other words"],
          ["cf.", "compare (a contrasting or related view)"],
          ["passim", "here and there throughout"],
          ["viz.", "namely"],
        ],
        "\"E.g.\" and \"i.e.\" are the pair most often confused: \"e.g.\" opens a list of examples, \"i.e.\" restates exactly. \"Cf.\" sends the reader to a contrast, not to plain support (that is \"see\").",
      ),
      fb(
        "The survey covered the three smallest Andean countries (___, Bolivia, Ecuador and Peru).",
        "i.e.",
        "La encuesta abarcó los tres países andinos más pequeños ([es decir], Bolivia, Ecuador y Perú).",
        ["that is"],
        "The list is complete and specifies exactly which countries, so it is a restatement: \"i.e.\" (in other words). \"E.g.\" would wrongly suggest there were other examples.",
      ),
      fb(
        "Some tropical fruits (___, mangoes and papayas) ripen faster in a paper bag.",
        "e.g.",
        "Algunas frutas tropicales ([p. ej.], los mangos y las papayas) maduran más rápido en una bolsa de papel.",
        ["for example"],
        "The two fruits are examples from a larger set, so \"e.g.\" (for example). Don't add \"etc.\" after it: \"e.g.\" already says the list is incomplete.",
      ),
      mc(
        "Note 7 cites Ruiz, page 30. Note 8 cites a report by Baker. Note 9 cites Ruiz again, page 31. Can note 9 read \"Ibid., 31\"?",
        [
          "No, because note 8 refers to a different source",
          "Yes, because it is the same book by Ruiz",
          "Yes, but only if it is written \"op. cit., 31\"",
          "No, because the page number has changed",
        ],
        0,
        "\"Ibid.\" can only refer to the note immediately before. Baker intervenes, so use a shortened citation (author and short title). A change of page is not a problem: \"Ibid., 31\" is fine when the previous note is the same source.",
      ),
      mc(
        "Your footnote points readers to a study that reaches the opposite conclusion. Which is best?",
        [
          "For the opposite conclusion, cf. Mendez (2018).",
          "For the opposite conclusion, ibid.",
          "For the opposite conclusion, i.e. Mendez (2018).",
          "For the opposite conclusion, viz. Mendez (2018).",
        ],
        0,
        "\"Cf.\" (compare) sends the reader to a contrasting or related view. \"Ibid.\" repeats the previous source, \"i.e.\" restates, and \"viz.\" introduces a precise specification.",
      ),
      tr(
        "Para una explicación más detallada, véase el capítulo 5.",
        "For a {more detailed|fuller} {explanation|account|discussion}, see chapter {5|five}.",
        "«Véase» is simply \"see\" in English, with no reflexive or passive form; *see itself or *it is seen are calques.",
      ),
      tr(
        "Agradezco a la doctora Chen que me llamara la atención sobre este error.",
        "I am grateful to {Dr.|Dr|Doctor} Chen for drawing my attention to this {error|mistake}.",
        "«Agradecer a alguien algo» is \"be grateful to someone for something\" (or \"thank someone for\" + -ing). The stock phrase is \"draw someone's attention to\".",
        ["I thank Dr. Chen for drawing my attention to this error.", "I would like to thank Dr. Chen for drawing my attention to this error."],
      ),
      wo(
        "In English the note number follows the comma",
        "En inglés la llamada de nota va después de la coma.",
        "English style guides put the superscript number after commas, periods, quotation marks and closing parentheses; the Spanish Academy puts it before. Only a dash comes after the number.",
        ["The note number follows the comma in English"],
      ),
      wo(
        "This is not to suggest that the editors were careless",
        "Con esto no quiero decir que los editores fueran descuidados.",
        "A stock phrase of the discursive footnote: \"This is not to suggest that...\" heads off a misreading of the main text.",
      ),
      dt(
        "Periods and commas go inside the closing quotation marks in American English.",
        "The American rule is mechanical: periods and commas always go inside, even if they are not part of the original. Colons and semicolons go outside.",
      ),
      dt(
        "With three or more authors, give the first surname followed by et al.",
        "\"Et al.\" means \"and others\". Note the spelling: no period after \"et\", one after \"al.\".",
      ),
      lc(
        "Smith, and I quote, called the merger a betrayal of the workers.",
        "What does \"and I quote\" tell you?",
        [
          "The speaker is repeating Smith's exact words",
          "The speaker disagrees with Smith",
          "The speaker is summarizing Smith in his own words",
          "The speaker is citing Smith's article in a footnote",
        ],
        0,
        "Aloud, \"and I quote\" or \"quote, unquote\" signals that the words that follow are a verbatim quotation.",
      ),
      lc(
        "The company purports to have solved the problem of plastic waste.",
        "What is the speaker's attitude to the company's statement?",
        [
          "Strongly skeptical",
          "Fully convinced",
          "Neutral, simply reporting",
          "Grateful for the discovery",
        ],
        0,
        "\"Purport to\" means to appear or profess to do something, with strong skepticism. A neutral report would use \"state\" or \"say\"; an endorsing one \"has shown\".",
      ),
      sp(
        "As Ortiz puts it, the city grew too fast for its own good.",
        "Como dice Ortiz, la ciudad creció demasiado rápido para su propio bien.",
        "Link \"As Ortiz puts it\" smoothly and pause briefly after \"it\".",
        "\"As X puts it\" is the natural signal phrase for a paraphrase or quotation. *As says Ortiz copies the Spanish inversion.",
      ),
      sp(
        "Even its critics concede that the report is rigorous.",
        "Hasta sus críticos reconocen que el informe es riguroso.",
        "Stress \"Even\" and \"concede\": they carry the argument.",
        "\"Concede\" shows the critics yielding a point against their own position, a powerful move in an argument.",
      ),
      mc(
        "Which sentence is correct?",
        [
          "Lee emphasizes the need for clean data, i.e., data with no missing values.",
          "Lee emphasizes on the need for clean data, i.e., data with no missing values.",
          "Lee emphasizes the need for clean data, e.g., data with no missing values.",
          "Lee affirms the need for clean data, i.e., data with no missing values.",
        ],
        0,
        "\"Emphasize\" takes a direct object, and the definition that follows restates \"clean data\" exactly, so \"i.e.\". *Emphasizes on is the «enfatizar en» calque, \"e.g.\" would imply one example among many, and *affirms is a false friend of «afirmar».",
      ),
    ],
  ),

  // ---------------------------------------------------------------------
  // Drill 2. Attribution verbs, transformations, reported speech, error hunt + unit mix
  // ---------------------------------------------------------------------
  drill(
    "en-c2-citations-unit-drill-2",
    "Drill: Attribution Verbs, Reported Sources and Citation Errors",
    "Use attribution verbs with their patterns and noun forms, turn quotations into integrated citations with the right tense and word order, and avoid the citation calques Spanish speakers make most.",
    "Recap: reporting a source accurately",
    [
      "Attribution verbs have patterns: \"describe/dismiss X as\", \"criticize X for\", \"credit X with\", \"attribute X to Y\", and nouns take a that-clause directly (\"the claim that\", never *the claim of that). To disagree, \"dispute\", \"challenge\" or \"take issue with\"; \"refute\" means you proved it wrong.",
      "Reporting a source changes person, time and place, keeps statement word order in questions (\"asks why the plan failed\") and keeps the source's hedges. Use the present for views (\"Smith argues\"), the past for what a study did, the present perfect for research up to now; after a past reporting verb, backshift unless the finding is still true.",
      "Hunt the calques: *According to Smith, he says; *according to me; *realize a study; *the actual debate; *pretends to show; *researches.",
    ],
    [
      ["The inspectors criticized the airline for its poor safety record.", "Los inspectores criticaron a la aerolínea por su deficiente historial de seguridad."],
      ["Their insistence that nothing went wrong is hard to believe.", "Su insistencia en que nada salió mal es difícil de creer."],
      ["The panel asked whether the budget had been approved.", "El comité preguntó si se había aprobado el presupuesto."],
      ["In my view, the survey was carried out too quickly.", "En mi opinión, la encuesta se realizó demasiado rápido."],
    ],
    [
      fb(
        "The commentator ___ the new tax as a gift to the rich.",
        "described",
        "El comentarista [calificó] el nuevo impuesto de regalo para los ricos.",
        ["characterized", "characterised", "portrayed", "branded", "dismissed"],
        "«Calificar de» is \"describe as\" (or \"characterize/portray as\"; \"dismiss as\" if the judgment is contemptuous). *Qualified the tax of is a calque: English \"qualify\" means to limit or to meet requirements.",
      ),
      fb(
        "Ada Lovelace is often credited ___ writing the first computer program.",
        "with",
        "A menudo se [le atribuye a] Ada Lovelace haber escrito el primer programa de computadora.",
        [],
        "You credit a person with an achievement (+ noun or -ing). The reverse direction is \"attribute\": the first program is attributed to Lovelace.",
      ),
      mc(
        "«La frase se atribuye a Mark Twain.» Which version is correct?",
        [
          "The line is attributed to Mark Twain.",
          "The line is attributed with Mark Twain.",
          "Mark Twain is attributed with the line.",
          "The line is attributed by Mark Twain.",
        ],
        0,
        "\"Attribute X to Y\": the idea goes to the person, just like Spanish «atribuir a». \"With\" belongs to \"credit\" (\"Twain is credited with the line\").",
      ),
      tr(
        "Su afirmación de que el puente era seguro resultó ser falsa.",
        "{Her|His|Their} claim that the bridge was safe {turned out to be|proved to be|proved} {false|untrue|wrong}.",
        "Nouns like \"claim\", \"contention\" and \"assertion\" take a that-clause directly. *The claim of that copies «la afirmación de que».",
      ),
      fb(
        "The leaked emails ___ doubt on the company's version of events.",
        "cast",
        "Los correos filtrados [ponen en] duda la versión de los hechos de la empresa.",
        ["throw"],
        "The collocation is \"cast doubt on\" (or \"throw doubt on\"). Other set phrases: \"lend support to\", \"call into question\", \"level criticism at\".",
      ),
      tr(
        "Varios economistas han cuestionado estas cifras.",
        "Several economists have {disputed|questioned|challenged|contested} these figures.",
        "\"Dispute\", \"contest\", \"question\" and \"challenge\" signal disagreement without claiming to have proved the figures wrong, which is what \"refute\" would mean.",
      ),
      mc(
        "A careful writer says \"Hughes refutes the theory.\" What does that mean?",
        [
          "Hughes has shown that the theory is wrong",
          "Hughes says the theory is wrong but offers no proof",
          "Hughes refuses to discuss the theory",
          "Hughes accepts part of the theory",
        ],
        0,
        "Traditionally \"refute\" means to prove a claim wrong, so the writer is endorsing Hughes. When no proof is offered, use \"rebut\", \"deny\" or \"reject\".",
      ),
      tr(
        "En 2021, Mora señaló que los alquileres se habían duplicado ese año.",
        "In 2021, Mora {noted|pointed out|observed} that rents had doubled that year.",
        "With a past frame, the reported clause backshifts (\"had doubled\") and the source's \"this year\" becomes \"that year\". A present frame (\"Mora notes\") would need no backshift but still an anchored time: \"in 2021\".",
      ),
      tr(
        "La autora se pregunta por qué fracasaron las negociaciones.",
        "The author {asks|wonders} why the {negotiations|talks} failed.",
        "An indirect question keeps statement word order and drops \"did\": *asks why did the negotiations fail is the classic error.",
      ),
      tr(
        "El estudio se pregunta si el teletrabajo reduce la productividad.",
        "The study asks {whether|if} {remote work|working from home|teleworking} reduces productivity.",
        "Yes/no questions are reported with \"whether\" (preferred in formal writing) or \"if\". The source's present stays present because the reporting verb is in the present.",
      ),
      mc(
        "«La OMS insta a los gobiernos a gravar las bebidas azucaradas.» Which version is correct?",
        [
          "The WHO urges governments to tax sugary drinks.",
          "The WHO urges governments that they tax sugary drinks.",
          "The WHO urges to governments to tax sugary drinks.",
          "The WHO urges governments taxing sugary drinks.",
        ],
        0,
        "\"Urge\" and \"call on\" take object + to-infinitive. Spanish «insta a los gobiernos» tempts learners to add \"to\" before the object.",
      ),
      fb(
        "The report ___ an independent review of the hospital's finances.",
        "calls for",
        "El informe [pide] una revisión independiente de las finanzas del hospital.",
        ["demands", "recommends"],
        "\"Call for\" + noun reports a demand for something. With a person it becomes \"call on someone to do something\". *Asks an independent review lacks the preposition.",
      ),
      tr(
        "Los autores advierten contra el uso de estos datos para fijar precios.",
        "The authors warn against using {these|this} data to set prices.",
        "\"Warn against\" + -ing. A preposition is always followed by the -ing form, never by an infinitive (*warn against to use).",
      ),
      mc(
        "The original says: \"The treatment may help some patients with mild symptoms.\" Which report keeps the authors' stance?",
        [
          "The authors suggest that the treatment may benefit some mildly ill patients.",
          "The authors show that the treatment helps patients with mild symptoms.",
          "The authors insist that the treatment helps patients with mild symptoms.",
          "The authors claim that the treatment cures mild symptoms.",
        ],
        0,
        "A transformation must not change how sure the source was: \"may\" and \"some\" need equivalents. \"Show\" turns a possibility into a fact, \"insist\" makes the authors adamant, and \"claim\" adds a doubt that is yours, not theirs.",
      ),
      fb(
        "In 2010 the mayor promised that the new metro line ___ ready by 2014.",
        "would be",
        "En 2010 el alcalde prometió que la nueva línea de metro [estaría] lista para 2014.",
        [],
        "After a past reporting verb, \"will\" backshifts to \"would\". This is typical when you narrate the history of a debate or a policy.",
      ),
      tr(
        "Les dijo a los periodistas que no había leído el informe.",
        "{He|She} told the {journalists|reporters} that {he|she} had not read the report.",
        "\"Tell\" takes the person directly (\"told the journalists\"); \"say\" needs \"to\" (\"said to the journalists\"). *Said them is a calque of «les dijo».",
      ),
      mc(
        "You accept the finding as a general truth today. Which report fits best?",
        [
          "The study found that regular exercise improves mood.",
          "The study found that regular exercise had improved mood.",
          "The study found that regular exercise would improve mood.",
          "The study found that regular exercise was improving mood.",
        ],
        0,
        "Backshift is optional when the content is still accepted. Keeping the present presents the finding as a current fact; \"improved\" would tie it to the study's data only.",
      ),
      tr(
        "El juez le preguntó a la testigo dónde había estado esa noche.",
        "The judge asked the witness where she had been that night.",
        "Reported questions use statement word order: \"where she had been\", not *where had she been. Backshift gives \"had been\", and «esa noche» is \"that night\".",
      ),
      mc(
        "Complete the literature review sentence: \"Ahmed (2019) ___ 300 nurses and ___ that most worked unpaid overtime.\"",
        [
          "interviewed / found",
          "interviews / finds",
          "has interviewed / has found",
          "had interviewed / found",
        ],
        0,
        "A specific study's actions and results take the past simple. The present simple is for what a text argues (\"Ahmed argues\"), the present perfect for a body of research (\"several studies have found\").",
      ),
      fb(
        "Little research ___ on the mental health of rural teachers.",
        "has been carried out",
        "Se [han realizado] pocas investigaciones sobre la salud mental de los docentes rurales.",
        ["has been conducted", "has been done"],
        "\"Research\" is uncountable, so the verb is singular (\"has been\"), and the present perfect describes the state of research up to now. «Realizar» is \"carry out\" or \"conduct\", never *realize.",
      ),
      mc(
        "Which sentence is correct?",
        [
          "According to the report, the dam is unsafe.",
          "According to the report, it says that the dam is unsafe.",
          "As says the report, the dam is unsafe.",
          "According to the report, it is said that the dam is unsafe.",
        ],
        0,
        "«Según el informe» already reports the source, so English needs either \"According to the report, the dam...\" or \"The report says that...\", not both. *As says the report copies Spanish inversion: write \"As the report says\".",
      ),
      tr(
        "En mi opinión, el informe subestima el problema.",
        "{In my view|In my opinion}, the report underestimates the problem.",
        "\"According to\" introduces someone else's view, never your own: *According to me is a calque of «según yo». Use \"In my view\" or \"I would argue that\".",
        ["I would argue that the report underestimates the problem."],
      ),
      fb(
        "The trial was ___ in four rural clinics over two years.",
        "carried out",
        "El ensayo se [realizó] en cuatro clínicas rurales durante dos años.",
        ["conducted", "run", "performed"],
        "«Realizar un estudio» is \"carry out\" or \"conduct\". English \"realize\" means to become aware of something, so *the trial was realized is a false friend.",
      ),
      tr(
        "El libro pretende explicar por qué cayó el imperio.",
        "The book {aims|sets out|seeks|attempts} to explain why the empire fell.",
        "«Pretender» is \"aim\", \"seek\" or \"set out to\"; \"pretend\" means «fingir». The embedded question keeps statement order: \"why the empire fell\".",
      ),
      tr(
        "Hay pocas pruebas de que la nueva dieta funcione.",
        "There is little evidence that the new diet works.",
        "\"Evidence\" is uncountable: \"little evidence\", \"is\", never *few evidences. Like \"claim\", it takes a that-clause directly.",
        ["There is not much evidence that the new diet works.", "There's little evidence that the new diet works."],
      ),
      mt(
        "Match each Spanish-influenced error with its correct form.",
        [
          ["*realize a study", "carry out a study"],
          ["*the actual debate", "the current debate"],
          ["*pretends to show", "sets out to show"],
          ["*according to me", "in my view"],
          ["*explains us", "explains to us"],
          ["*recent researches", "recent research"],
        ],
        "These are false friends and calques: «realizar», «actual», «pretender», «según yo», «nos explica» and «investigaciones» all have different English equivalents from the look-alike words.",
      ),
      wo(
        "The minister denied that the figures had been altered",
        "El ministro negó que las cifras se hubieran alterado.",
        "\"Deny that\" + backshifted clause. The passive \"had been altered\" matches «se hubieran alterado».",
      ),
      wo(
        "What the authors do not explain is why sales fell",
        "Lo que los autores no explican es por qué bajaron las ventas.",
        "After a citation, mark where your own comment begins. Note statement order in \"why sales fell\".",
      ),
      wo(
        "Reviewers praised the author for her careful use of sources",
        "Los reseñadores elogiaron a la autora por su uso cuidadoso de las fuentes.",
        "\"Praise X for\" + noun or -ing, like \"criticize X for\" and \"commend X for\".",
      ),
      dt(
        "Several studies have linked long commutes to lower job satisfaction.",
        "The present perfect describes a body of research up to now. \"Link X to Y\" is a common attribution pattern.",
      ),
      dt(
        "She told the panel that the data could not be shared until the following year.",
        "\"Tell\" + person, backshifted \"could not\", and \"next year\" becoming \"the following year\".",
      ),
      lc(
        "Moore grudgingly admits that the critics had a point.",
        "How does Moore feel about the critics' point?",
        [
          "He accepts it, but reluctantly",
          "He accepts it enthusiastically",
          "He rejects it completely",
          "He has not heard about it",
        ],
        0,
        "\"Admit\" shows Moore yielding a point; the adverb \"grudgingly\" adds his reluctance. Attitude can be carried by the verb plus an adverb.",
      ),
      lc(
        "The survey found that most voters trust local newspapers.",
        "How does the speaker present the finding?",
        [
          "As something that is still true now",
          "As something that is no longer true",
          "As a claim the speaker doubts",
          "As a question the survey asked",
        ],
        0,
        "The present \"trust\" after a past reporting verb (no backshift) presents the finding as a current fact the speaker accepts.",
      ),
      sp(
        "The author urges hospitals to share their data.",
        "La autora insta a los hospitales a compartir sus datos.",
        "Stress \"urges\" and \"share\"; link \"share their\".",
        "\"Urge\" + object + to-infinitive. No \"to\" before \"hospitals\".",
      ),
      sp(
        "What Smith does not explain is why the project was canceled.",
        "Lo que Smith no explica es por qué se canceló el proyecto.",
        "Pause slightly after \"explain\" and stress \"why\".",
        "This wh-structure marks your own comment on a source. The embedded question keeps statement order.",
      ),
      mc(
        "Which sentence is correct?",
        [
          "Kim et al. (2020) ask whether the policy reduced crime.",
          "Kim et. al. (2020) ask whether did the policy reduce crime.",
          "According to Kim et al. (2020), they ask if the policy reduced crime.",
          "Kim et al. (2020) ask: whether the policy reduced crime?",
        ],
        0,
        "\"Et al.\" has one period; the indirect question uses statement order, no \"did\" and no question mark; and \"according to\" cannot be followed by a second subject that repeats the source.",
      ),
      tr(
        "Como señala con razón Ahmed, la muestra excluía a los mayores de 65 años.",
        "As Ahmed rightly {points out|notes|observes}, the sample excluded {people|those} over 65.",
        "A stance adverb (\"rightly\") shows you agree. Keep subject-verb order: *As points out Ahmed copies the Spanish inversion.",
        ["As Ahmed rightly points out, the sample excluded anyone over 65.", "As Ahmed rightly points out, the sample excluded people over the age of 65."],
      ),
    ],
  ),
];
