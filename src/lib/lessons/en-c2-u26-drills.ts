// Synced from cheneygross-afk/lengo:src/lib/lessons/en-c2-u26-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Required drill lessons for EN-C2 unit u26 (science and technology: hypotheses, innovation, popular science, reporting a study, research vocabulary, hedging and boosting): a short recap, then graded practice.

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

export const EN_C2_U26_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. Hypotheses and findings, innovation and disruption,
  // popular science
  // ---------------------------------------------------------------------
  drill(
    "en-c2-science-tech-unit-drill-1",
    "Drill: Hypotheses, Innovation and Popular Science",
    "State and report hypotheses and findings with the right verbs and hedges, talk about breakthroughs, disruption and roll-outs, and explain a technical idea to a general reader with definitions, analogies and reformulation.",
    "Recap: findings, innovation and explaining science",
    [
      "Hypotheses are \"put forward\" and \"tested\" (never *proved); a reported prediction uses \"would\" (\"We hypothesized that X would...\"). Findings \"suggest\", \"indicate\", \"lend support to\" or \"cast doubt on\" (no personal object: *suggest us). Correlations are \"associated with\" or \"linked to\"; \"significant\" means statistically significant. One or two hedges, not a stack.",
      "Teams \"make a breakthrough\"; \"progress\" is uncountable; \"state-of-the-art\" and \"cutting-edge\" take hyphens before a noun; inventions \"render\" things obsolete; products are \"rolled out\", \"phased out\" (with a pronoun: \"phase them out\") and produced \"at scale\"; general \"AI\" takes no article. For a general reader: define with an appositive or \"known as\", use \"Think of it as...\" or \"It's as if...\" + past, and restate with \"In other words\".",
    ],
    [
      ["We hypothesized that the new coating would reduce corrosion.", "Planteamos la hipótesis de que el nuevo recubrimiento reduciría la corrosión."],
      ["These results cast doubt on the official estimate.", "Estos resultados ponen en duda la estimación oficial."],
      ["The city is rolling out electric buses on every route.", "La ciudad está implantando autobuses eléctricos en todas las rutas."],
      ["Think of a server as a restaurant kitchen that cooks web pages.", "Piensa en un servidor como la cocina de un restaurante que prepara páginas web."],
    ],
    [
      mc(
        "Choose the verb form: \"We hypothesized that the new fertilizer ___ crop yields.\"",
        ["would increase", "will increase", "increased", "would have increased"],
        0,
        "A prediction reported after the study moves into the past, so \"will\" becomes \"would\": «aumentaría». \"Increased\" states a result, not a prediction, and \"would have increased\" suggests something that did not happen.",
      ),
      fb(
        "In 2019 the team ___ a bold hypothesis about the origin of the outbreak.",
        "put forward",
        "En 2019 el equipo [planteó] una hipótesis audaz sobre el origen del brote.",
        ["advanced", "proposed"],
        "«Plantear una hipótesis» is \"put forward\", \"advance\" or \"propose\" a hypothesis. *Made a hypothesis and *raised a hypothesis are calques.",
      ),
      tx(
        "Los datos no respaldaron nuestra hipótesis.",
        ["The data did not support our hypothesis.", "Our hypothesis was not supported by the data."],
        "Data \"support\" or \"do not support\" a hypothesis; scientists \"test\" it rather than *prove it. «Respaldar» here is simply \"support\".",
      ),
      mc(
        "Which sentence is correct?",
        [
          "The results suggest that the vaccine is effective in older adults.",
          "The results suggest us that the vaccine is effective in older adults.",
          "The results suggest to us the vaccine to be effective in older adults.",
          "The results are suggesting us that the vaccine is effective in older adults.",
        ],
        0,
        "\"Suggest\" takes a \"that\" clause directly and no personal object. *Suggest us that copies «nos sugieren que».",
      ),
      fb(
        "These new measurements ___ doubt on the official explanation.",
        "cast",
        "Estas nuevas mediciones [ponen en] duda la explicación oficial.",
        ["throw"],
        "The fixed frame is \"cast doubt on\" («poner en duda»). \"Cast\" is the same in present and past.",
      ),
      tx(
        "Los resultados concuerdan con los de estudios anteriores.",
        "{The|Our} {results|findings} are {consistent|in line} with those of {earlier|previous|prior} studies.",
        "\"Be consistent with\" means the results agree. \"Those of\" avoids repeating \"results\", just like «los de».",
      ),
      tx(
        "Es probable que el clima también influya.",
        [
          "It is likely that {the climate|climate} {also plays a role|plays a role too|also has an influence|is also a factor}.",
          "{The climate|Climate} is also likely to {play a role|have an influence|be a factor}.",
        ],
        "\"It is likely that\" + indicative, or the personal pattern \"X is likely to\" + infinitive. English needs no subjunctive after \"likely that\".",
      ),
      mc(
        "Which sentence hedges appropriately?",
        [
          "The treatment may reduce pain in some patients.",
          "It might possibly perhaps be that the treatment could reduce pain.",
          "The treatment cures pain in all patients.",
          "It seems to be that the treatment reduces pain.",
        ],
        0,
        "One well-placed hedge (\"may\") plus a limit of scope (\"in some patients\") is enough. Stacked hedges say nothing, a categorical claim overclaims, and *It seems to be that is a calque of «parece ser que».",
      ),
      fb(
        "In the survey, heavy social media use was ___ with lower self-esteem.",
        "associated",
        "En la encuesta, el uso intensivo de las redes sociales se [asoció] con una menor autoestima.",
        ["linked", "correlated"],
        "For a correlation, say \"was associated with\" or \"was linked to\". \"Caused\" would claim causation, which a survey cannot show.",
      ),
      lc(
        "The difference was statistically significant, but too small to matter in practice.",
        "What does the speaker mean?",
        [
          "The result is unlikely to be due to chance, but it is not important in real life",
          "The difference is large and very important",
          "The difference is probably due to chance",
          "The study failed to find any difference",
        ],
        0,
        "\"Statistically significant\" means unlikely to be due to chance; it says nothing about size or practical importance.",
      ),
      tx(
        "La diferencia entre los dos grupos no fue estadísticamente significativa.",
        [
          "The difference between the two groups was not statistically significant.",
          "There was no statistically significant difference between the two groups.",
        ],
        "In a results section \"significant\" is a statistical claim. «Significativo» used loosely for «importante» should not become \"significant\" in a paper.",
      ),
      fb(
        "Engineers have ___ a major breakthrough in solar panel efficiency.",
        "made",
        "Los ingenieros han [logrado] un gran avance en la eficiencia de los paneles solares.",
        ["achieved"],
        "You \"make\" or \"achieve\" a breakthrough, never *do one.",
      ),
      mc(
        "Which sentence is correct?",
        [
          "There has been a lot of progress in battery research.",
          "There have been a lot of progresses in battery research.",
          "There has been a big progress in battery research.",
          "There have been many progress in battery research.",
        ],
        0,
        "\"Progress\" is uncountable: \"a lot of progress\", \"much progress\", singular verb. To count steps, say \"advances\" or \"a step forward\".",
      ),
      tx(
        "El hospital ha comprado escáneres de última generación.",
        "The hospital has {bought|purchased|acquired} {state-of-the-art|cutting-edge|latest-generation} scanners.",
        "«De última generación» is \"state-of-the-art\" or \"latest-generation\", hyphenated before the noun. *Last generation would mean the previous model.",
      ),
      mc(
        "Choose the verb: \"Many of today's coding skills could ___ obsolete within a few years.\"",
        ["become", "stay", "rest", "keep"],
        0,
        "«Quedarse obsoleto» is \"become obsolete\" (or \"be rendered obsolete\"). *Stay obsolete would mean it was already obsolete and remains so.",
      ),
      fb(
        "The bank will ___ the new app to all its customers next spring.",
        "roll out",
        "El banco [implantará] la nueva aplicación para todos sus clientes la próxima primavera.",
        ["launch", "release"],
        "\"Roll out\" means launch widely or gradually; «implantar» is often \"roll out\" or \"introduce\", not *implant.",
      ),
      wo(
        "The company is phasing them out gradually",
        "La empresa los está retirando progresivamente.",
        "With a pronoun object, the particle of a phrasal verb must follow it: \"phasing them out\", never *phasing out them.",
        ["The company is gradually phasing them out"],
      ),
      tx(
        "Lo difícil es producir la vacuna a gran escala.",
        "The {hard|difficult|tricky} part is {producing|manufacturing|making} the vaccine {at scale|on a large scale}.",
        "\"At scale\" is the compact technical phrase for «a gran escala»; \"on a large scale\" is the everyday version. «Lo difícil» is \"the hard part\".",
      ),
      mc(
        "Which sentence is correct?",
        [
          "AI is changing how lawyers prepare their cases.",
          "The AI is changing how lawyers prepare their cases.",
          "The artificial intelligence is changing how lawyers prepare their cases.",
          "An artificial intelligence are changing how lawyers prepare their cases.",
        ],
        0,
        "In the general sense \"AI\" takes no article, even though Spanish says «la inteligencia artificial». Use an article only for a specific system (\"the AI we tested\").",
      ),
      tx(
        "Muchos empleos administrativos se automatizarán en la próxima década.",
        "Many {administrative|office|clerical} jobs will be automated {in|over|within|during} the next decade.",
        "Jobs \"are automated\" (passive). Spanish «se automatizarán» maps onto \"will be automated\", not *will automate themselves.",
      ),
      mt(
        "Match the Spanish expressions with their English equivalents.",
        [
          ["de última generación", "state-of-the-art"],
          ["a la vanguardia de", "at the cutting edge of"],
          ["obsolescencia programada", "planned obsolescence"],
          ["los primeros usuarios", "early adopters"],
          ["retirar progresivamente", "phase out"],
          ["reciclarse profesionalmente", "retrain"],
        ],
        "These are the standard equivalents. Note that \"cutting edge\" has no hyphens as a noun phrase (\"at the cutting edge of\") but does before a noun (\"cutting-edge research\").",
      ),
      tx(
        "El estudio se centró en la microbiota, los billones de bacterias que viven en el intestino.",
        "The study focused on the {microbiome|microbiota|gut microbiome}, the trillions of bacteria {that|which} live in {the gut|our gut|the intestine|our intestines}.",
        "An appositive after a comma defines the term without stopping the flow. «Billones» (10^12) is \"trillions\" in English, a classic number false friend.",
      ),
      fb(
        "Think ___ the immune system as an army that remembers its enemies.",
        "of",
        "Piensa [en] el sistema inmunitario como un ejército que recuerda a sus enemigos.",
        [],
        "The analogy frame is \"think of X as Y\". *Think in the immune system copies «pensar en».",
      ),
      tx(
        "Es como si el cerebro tuviera su propio filtro de spam.",
        "{It's|It is} as {if|though} the brain had its own spam filter.",
        "«Es como si» + subjunctive is \"it's as if\" or \"it's as though\" + a past form (\"had\"), which marks the comparison as imaginary.",
      ),
      mc(
        "Choose the best link: \"The drug has a long half-life; ___, it stays in the body for days.\"",
        ["in other words", "or be", "so be", "that means to say"],
        0,
        "\"In other words\" (or \"that is\") restates a difficult idea plainly. *Or be and *so be are literal translations of «o sea».",
      ),
      wo(
        "In other words, the virus spreads before people feel ill",
        "Es decir, el virus se propaga antes de que la gente se sienta mal.",
        "Reformulation signposts open the sentence and are followed by a comma; then a plain subject and active verb.",
      ),
      fb(
        "Giving people iron supplements ___ their fatigue.",
        "reduced",
        "Dar suplementos de hierro a la gente [redujo] su fatiga.",
        ["cut", "lowered", "eased"],
        "Popular science turns \"The administration of iron supplements resulted in a reduction in fatigue\" into a plain verb with a clear subject: \"Giving people iron supplements reduced their fatigue.\"",
      ),
      dt(
        "Mitochondria, the tiny power plants inside our cells, turn food into energy.",
        "An appositive between commas defines the technical term for a general reader.",
      ),
      dt(
        "So far, the drug has only been tested on a few dozen volunteers.",
        "Keeping the caveat (\"only\", \"a few dozen\") is part of honest popular science; the present perfect suits news up to now.",
      ),
      lc(
        "Think of a firewall as a security guard who checks everyone at the door.",
        "What is the speaker doing?",
        ["Using an analogy to explain a term", "Reporting a statistical result", "Challenging a claim", "Hedging a conclusion"],
        0,
        "\"Think of X as...\" maps an unfamiliar idea onto a familiar one.",
      ),
      sp(
        "Put simply, the new battery stores more energy in less space.",
        "Dicho de forma sencilla, la nueva batería almacena más energía en menos espacio.",
        "Pause after \"Put simply\"; stress \"MORE energy\" and \"LESS space\".",
        "\"Put simply\" announces a plain restatement for a general audience.",
      ),
      sp(
        "These findings lend support to the view that exercise protects the brain.",
        "Estos resultados respaldan la idea de que el ejercicio protege el cerebro.",
        "Link \"lend support\" smoothly; stress \"VIEW\" and \"proTECTS\".",
        "\"Lend support to the view that\" adds weight to an idea without claiming proof.",
      ),
      dt(
        "Uptake of the new software has been slower than expected.",
        "\"Uptake\" is the noun for how many people start using a product or service.",
      ),
      tx(
        "Los resultados sugieren que la nueva técnica podría reducir los costos.",
        "The {results|findings} suggest that the new technique {could|may|might} {reduce|cut|lower} {costs|the costs|the cost}.",
        "One hedge is enough: the reporting verb \"suggest\" plus a modal for the prediction. No personal object after \"suggest\".",
      ),
      tx(
        "Se han hecho muchos progresos, pero la tecnología todavía no es escalable.",
        [
          "{A lot of|Much} progress has been made, but the technology {is not|isn't} {yet scalable|scalable yet}.",
          "There has been {a lot of|much} progress, but the technology {is not|isn't} {yet scalable|scalable yet}.",
        ],
        "\"Progress\" is uncountable, so \"a lot of progress has been made\", never *many progresses have been made. \"Scalable\" means it keeps working as it grows.",
      ),
    ],
  ),
  // ---------------------------------------------------------------------
  // Drill 2. Reporting a study, interviewing a scientist, research
  // vocabulary, hedging and boosting, and a whole-unit mix
  // ---------------------------------------------------------------------
  drill(
    "en-c2-science-tech-unit-drill-2",
    "Drill: Reporting Research, Interviews and Calibrated Claims",
    "Report a study with the right tenses, ask and challenge politely in an interview, use the vocabulary of the scientific method without false friends, and calibrate claims with hedges and boosters.",
    "Recap: reporting, interviewing and calibrating",
    [
      "Report a study in the past (\"We recruited...\", \"Samples were analyzed...\"), switch to the present for conclusions (\"These findings suggest...\"), and name limitations (\"One limitation is that...\", \"Further research is needed\": research is uncountable). In an interview: \"Could you unpack that for us?\", \"Can you explain that to us?\" (never *explain me), \"Isn't there a risk that...?\", and tags that match the verb (\"isn't it?\", \"couldn't they?\").",
      "Method vocabulary: control group, sample size, confounding variable, bias / biased, peer review / peer-reviewed, preprint, replicate (repeat a study; «replicar» = reply), experience (feel) vs experiment (test). Calibrate: hedges for your own new finding (\"suggest\", \"may\", \"appear to\", \"it could be argued that\"), boosters only when the evidence is overwhelming (\"clearly\", \"it is well established that\").",
    ],
    [
      ["Participants completed a questionnaire at the start of the study.", "Los participantes completaron un cuestionario al inicio del estudio."],
      ["These findings suggest that light exposure affects mood.", "Estos resultados indican que la exposición a la luz influye en el estado de ánimo."],
      ["Could you explain that to our listeners?", "¿Podría explicárselo a nuestros oyentes?"],
      ["The effect has been replicated in three countries.", "El efecto se ha reproducido en tres países."],
    ],
    [
      mc(
        "Choose the verb form for the method section: \"We ___ 180 volunteers through local clinics.\"",
        ["recruited", "recruit", "have recruited", "are recruiting"],
        0,
        "Everything that happened during the study is reported in the past simple. The Spanish-style historic present (*We recruit 180 volunteers) sounds like instructions or a plan in English.",
      ),
      tx(
        "Las muestras se analizaron dos veces en laboratorios distintos.",
        "The samples were {analyzed|analysed} twice {in|at|by} {different|separate|two different} {laboratories|labs}.",
        "Method sentences often use the passive because the procedure matters more than who performed it: \"were analyzed\".",
      ),
      fb(
        "This study ___ to assess the impact of remote learning on reading skills.",
        "aimed",
        "Este estudio [tenía como objetivo] evaluar el impacto de la educación a distancia en la lectura.",
        ["set out", "sought"],
        "\"Aim to\" + infinitive states the purpose of a study, in the past because the study is finished. «Evaluar» is \"assess\".",
      ),
      mc(
        "Choose the verb form for the conclusion: \"Taken together, these findings ___ that short naps improve alertness.\"",
        ["suggest", "suggested", "were suggesting", "will suggest"],
        0,
        "Specific results stay in the past, but the conclusion drawn from them is presented as generally true now, so the present \"suggest\". This past-to-present shift is a hallmark of the genre.",
      ),
      tx(
        "No se encontraron diferencias significativas entre los hombres y las mujeres.",
        [
          "No significant difference was found between {men and women|the men and the women|male and female participants}.",
          "No significant differences were found between {men and women|the men and the women|male and female participants}.",
        ],
        "A specific result goes in the past passive. Make the verb agree: \"no significant difference was\" or \"no significant differences were\".",
      ),
      tx(
        "Una limitación de este estudio es que todos los participantes eran estudiantes.",
        "One limitation of this study is that all {the|of the|} participants were {students|university students|college students}.",
        "\"One limitation of this study is that...\" is the standard frame for an honest report. The study's facts stay in the past (\"were\").",
      ),
      fb(
        "Further research ___ needed to confirm these results.",
        "is",
        "Se [necesitan] más investigaciones para confirmar estos resultados.",
        [],
        "\"Research\" is uncountable, so the verb is singular: \"Further research is needed\", even though Spanish uses the plural «se necesitan más investigaciones».",
      ),
      mc(
        "Which sentence is correct?",
        [
          "More studies are needed before the drug can be approved.",
          "More researches are needed before the drug can be approved.",
          "A further research is needed before the drug can be approved.",
          "Further researches is needed before the drug can be approved.",
        ],
        0,
        "To count pieces of research, say \"studies\". \"Research\" has no plural and no \"a\": \"more research is needed\" or \"more studies are needed\".",
      ),
      tx(
        "No podemos descartar la influencia de otros factores.",
        [
          "We {cannot|can't} rule out the influence of other factors.",
          "We {cannot|can't} rule out the possibility that other factors {played a role|had an influence|were involved}.",
          "We {cannot|can't} exclude the influence of other factors.",
        ],
        "«Descartar» in a limitations section is \"rule out\". A cautious writer admits that confounding factors may be at work.",
      ),
      mc(
        "Which question is correct and polite?",
        [
          "Could you explain that to us?",
          "Can you explain me that?",
          "Explain us this, please.",
          "Could you explain us that?",
        ],
        0,
        "\"Explain\" never takes a personal object directly: \"explain it to us\" or \"explain what that means\". *Explain me copies «explícame».",
      ),
      fb(
        "Could you ___ that for us? It sounds rather technical.",
        "unpack",
        "¿Podría [explicarnos con más detalle] eso? Suena bastante técnico.",
        ["explain", "break down", "clarify"],
        "\"Unpack\" means explain the parts of a complex idea, a common interviewer's request on behalf of the audience.",
      ),
      fb(
        "That's a very small sample, ___ it?",
        "isn't",
        "Es una muestra muy pequeña, [¿no]?",
        [],
        "English tags match the verb of the sentence: positive \"That's\" takes the negative tag \"isn't it?\". Spanish uses one invariable «¿no?».",
      ),
      fb(
        "The models could be wrong, ___ they?",
        "couldn't",
        "Los modelos podrían estar equivocados, [¿no]?",
        [],
        "The tag repeats the modal: \"could\" becomes \"couldn't they?\". *Isn't it? would not match the verb or the subject.",
      ),
      tx(
        "Algunos críticos dirían que estas cifras son exageradas.",
        "Some critics would say {that|} these {figures|numbers} are {exaggerated|inflated|overstated}.",
        "Attributing a challenge to others (\"Some critics would say...\") lets an interviewer push back without sounding personal.",
      ),
      wo(
        "So what you're saying is that the effect disappears after a year",
        "Entonces, lo que usted dice es que el efecto desaparece al cabo de un año.",
        "\"So what you're saying is that...\" summarizes to check understanding before moving on.",
      ),
      sp(
        "Let me play devil's advocate for a moment.",
        "Déjeme hacer de abogado del diablo un momento.",
        "Stress \"DEVil's ADvocate\"; \"for a\" is weak, /fər ə/.",
        "\"Play devil's advocate\" signals that the challenge is deliberate and not personal.",
      ),
      lc(
        "Isn't there a risk that the sample is simply too small?",
        "What is the presenter doing?",
        ["Politely challenging the scientist's claim", "Agreeing with the scientist", "Thanking the scientist for coming", "Asking for a definition of a term"],
        0,
        "A negative question (\"Isn't there a risk that...?\") is a polite way to push back.",
      ),
      mt(
        "Match each term with its meaning.",
        [
          ["control group", "receives no treatment or a placebo"],
          ["confounding variable", "a hidden factor that affects both variables"],
          ["peer review", "evaluation by other experts before publication"],
          ["preprint", "a version posted online before review"],
          ["replicate", "repeat a study to check the results"],
          ["selection bias", "a sample that is not representative"],
        ],
        "These are the core terms of study design and publication. Note \"peer review\" (noun, no hyphen) vs \"peer-reviewed\" (adjective).",
      ),
      tx(
        "Los pacientes experimentaron menos dolor después de la operación.",
        "{The|} patients experienced less pain after the {operation|surgery}.",
        "«Experimentar» meaning to feel or undergo is \"experience\". *Experimented less pain would mean they ran tests on pain. \"Pain\" is uncountable, so \"less\".",
      ),
      mc(
        "Choose the verb: \"Two other labs have tried, and failed, to ___ the results.\"",
        ["replicate", "reply", "retort", "experiment"],
        0,
        "\"Replicate\" means repeat a study to see if the results hold. «Replicar» in the sense of answering back is \"reply\" or \"retort\".",
      ),
      fb(
        "There is ___ evidence that the supplement improves memory in older adults.",
        "growing",
        "Hay [cada vez más] pruebas de que el suplemento mejora la memoria en personas mayores.",
        ["increasing", "mounting"],
        "\"Growing evidence\" (singular, uncountable) is the natural rendering of «cada vez más pruebas». *Growing evidences is wrong.",
      ),
      tx(
        "Mi hermana investiga sobre el sueño en adolescentes.",
        [
          "My sister {does|carries out|conducts} research {on|into} sleep in {teenagers|adolescents}.",
          "My sister researches sleep in {teenagers|adolescents}.",
        ],
        "You \"do\" or \"carry out research on / into\" a topic. *Makes researches is wrong twice: wrong verb and a plural of an uncountable noun.",
      ),
      dt(
        "The study, which has not yet been peer-reviewed, was posted online last week.",
        "Preprints should be reported with this caveat. \"Peer-reviewed\" is hyphenated as an adjective.",
      ),
      mc(
        "Which sentence best reports the result of a single small study?",
        [
          "This study suggests a link between screen time and poor sleep.",
          "This study proves that screen time causes poor sleep.",
          "It is evident that this study demonstrates that screens destroy sleep.",
          "This study might possibly perhaps suggest a potential link with sleep.",
        ],
        0,
        "One study rarely proves anything, so \"suggests a link\" matches the evidence. The second and third overclaim; the fourth stacks hedges until nothing is said.",
      ),
      tx(
        "Se podría argumentar que la muestra era demasiado pequeña.",
        ["It could be argued that the sample was too small.", "One could argue that the sample was too small."],
        "Impersonal frames like \"it could be argued that\" render «se podría argumentar que» and keep a critical point at a polite distance.",
      ),
      tx(
        "Parece ser que las estimaciones iniciales eran demasiado pesimistas.",
        [
          "It would seem that the {initial|early|first|original} estimates were too pessimistic.",
          "It {appears|seems} that the {initial|early|first|original} estimates were too pessimistic.",
          "The {initial|early|first|original} estimates {appear|seem} to have been too pessimistic.",
        ],
        "«Parece ser que» is \"it would seem that\", \"it appears that\" or \"X appears to have been\". *It seems to be that is a calque.",
      ),
      fb(
        "As Figure 2 ___ shows, sales dropped sharply after the price increase.",
        "clearly",
        "Como muestra [claramente] la figura 2, las ventas cayeron bruscamente tras la subida de precios.",
        [],
        "Boosters are fine close to evidence the reader can check: \"As Figure 2 clearly shows...\".",
      ),
      wo(
        "Our findings indicate that, in this sample, the app was associated with better sleep",
        "Nuestros resultados indican que, en esta muestra, la aplicación se asoció con un mejor descanso.",
        "A calibrated claim: one hedging verb (\"indicate\"), a limit of scope (\"in this sample\") and \"was associated with\" instead of a causal verb.",
      ),
      dt(
        "It is well established that regular exercise lowers blood pressure.",
        "\"It is well established that\" is a booster for knowledge that is widely accepted, so it needs no hedge.",
      ),
      lc(
        "Undoubtedly, this is the most comprehensive survey to date.",
        "How confident is the writer?",
        ["Very confident", "Not sure at all", "Neutral, just describing", "Doubtful about the survey"],
        0,
        "\"Undoubtedly\" is a booster: it signals strong confidence in the claim.",
      ),
      sp(
        "Our findings indicate that older adults may benefit the most.",
        "Nuestros resultados indican que las personas mayores podrían ser las más beneficiadas.",
        "Stress \"INdicate\" and \"BENefit\"; keep \"may\" light but clear.",
        "A cautious verb (\"indicate\") plus one modal (\"may\") is the right strength for your own new finding.",
      ),
      dt(
        "One limitation of the study is that it relied on self-reported data.",
        "\"Rely on\" takes \"on\", and \"self-reported\" is hyphenated before the noun.",
      ),
      tx(
        "Los resultados sugieren que el teletrabajo podría estar asociado a una mayor productividad, pero se necesita más investigación.",
        "The {results|findings} suggest that {remote work|working from home|teleworking} {may|might|could} be associated with {higher|greater|increased} productivity, but {further|more} research is needed.",
        "A whole-unit sentence: \"suggest\" + one modal, \"associated with\" for a correlation, and \"research is\" (uncountable, singular).",
      ),
      tx(
        "El estudio, que aún no ha sido revisado por pares, indica que el fármaco parece reducir la inflamación.",
        [
          "The study, which has not yet been peer-reviewed, {suggests|indicates} that the drug {appears|seems} to reduce inflammation.",
          "The study, which has not been peer-reviewed yet, {suggests|indicates} that the drug {appears|seems} to reduce inflammation.",
        ],
        "A non-defining clause carries the caveat between commas, and \"appears to\" + infinitive hedges the finding.",
      ),
      mc(
        "Which sentence is correct?",
        [
          "The evidence is strong, and further research is under way.",
          "The evidences are strong, and further researches are under way.",
          "The evidence are strong, and a further research is under way.",
          "The evidences is strong, and further research are under way.",
        ],
        0,
        "Both \"evidence\" and \"research\" are uncountable: no plural, no \"a\", and a singular verb.",
      ),
    ],
  ),
];
