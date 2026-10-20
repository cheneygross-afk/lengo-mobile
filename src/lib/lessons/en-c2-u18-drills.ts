// Synced from cheneygross-afk/lengo:src/lib/lessons/en-c2-u18-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Required drill lessons for EN-C2 unit u18 (paraphrase, summary, literature reviews, punctuation, nominalization, relative clauses): a short recap, then graded practice.

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

// A transformation gap-fill: complete the rewrite so it keeps the meaning of the original.
const fx = (original: string, sentence: string, answer: string, altAnswers: string[], explanation: string): Ex =>
  altAnswers.length
    ? { type: "fill-blank", prompt: `Complete the paraphrase so it means the same as: "${original}"`, sentence, answer, altAnswers, explanation }
    : { type: "fill-blank", prompt: `Complete the paraphrase so it means the same as: "${original}"`, sentence, answer, explanation };

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

export const EN_C2_U18_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. Paraphrase vs plagiarism, summarizing, the literature review, synthesis
  // ---------------------------------------------------------------------
  drill(
    "en-c2-paraphrase-unit-drill-1",
    "Drill: Paraphrase, Summary and the Literature Review",
    "Tell paraphrase from patchwriting, condense sources into stance-faithful summaries, signal a research gap and position a study, and relate sources to each other instead of listing them.",
    "Recap: from source to synthesis",
    [
      "A paraphrase rebuilds the idea in your own structure and words, keeps its meaning and certainty, and is still cited; the original skeleton with synonyms is patchwriting. A summary keeps only the main claim and its key qualification, often packed into noun phrases (\"the rise in prices\").",
      "A literature review (not *the state of the question) builds an argument towards a gap: \"Little attention has been paid to...\", \"...has yet to be examined\", \"Few studies have...\", then \"The present study addresses this gap by...\".",
      "Synthesis relates sources: \"whereas\", \"in line with\", \"by contrast\" (not \"on the contrary\"), \"building on\", \"taken together\", \"both..., yet neither examines...\".",
    ],
    [
      ["Diaz (2021) found that rising rents push young families out of city centers.", "Diaz (2021) observó que la subida de los alquileres expulsa a las familias jóvenes de los centros urbanos."],
      ["The effect, the authors note, holds only for first-time buyers.", "El efecto, señalan los autores, solo se da en quienes compran su primera vivienda."],
      ["The impact on older tenants has received scant attention.", "El impacto en los inquilinos mayores apenas ha recibido atención."],
      ["Whereas Ito reports large gains, Ruiz finds only modest ones.", "Mientras que Ito observa mejoras grandes, Ruiz solo encuentra mejoras modestas."],
    ],
    [
      mc(
        "You cite Lee (2019) but copy one of her sentences word for word without quotation marks. Is that acceptable?",
        [
          "No: it is plagiarism, because the citation credits the idea but not the words",
          "Yes: naming the author is enough",
          "Yes, as long as the source appears in the reference list",
          "No, but only because the page number is missing",
        ],
        0,
        "A citation credits the idea; quotation marks credit the words. Copying exact wording without quotation marks presents the author's language as yours, citation or not.",
      ),
      mc(
        "Original (Diaz, 2021): \"Remote work significantly increases employee satisfaction, particularly among parents of young children.\" Which version is patchwriting?",
        [
          "Working remotely considerably raises worker satisfaction, especially among parents of small children (Diaz, 2021).",
          "Diaz (2021) found that parents of young children are the employees whose satisfaction gains most from working at home.",
          "According to Diaz (2021), employees with young children benefit most when they are allowed to work from home.",
          "Employees value remote work, Diaz (2021) reports, and none more than parents of young children.",
        ],
        0,
        "Patchwriting keeps the original skeleton (subject, verb, object, \"particularly among\") and swaps synonyms. It is cited, but most institutions still treat it as plagiarism. The other versions rebuild the structure.",
      ),
      mc(
        "Original (Ford, 2020): \"Rising housing costs have forced many young adults to delay leaving their parents' home.\" Which is an acceptable paraphrase?",
        [
          "According to Ford (2020), young adults are moving out of the family home later because housing has become so expensive.",
          "Increasing housing prices have made many young people postpone leaving their parents' house (Ford, 2020).",
          "Young adults are moving out of the family home later because housing has become so expensive.",
          "Ford (2020) shows that young adults no longer leave home at all because of housing costs.",
        ],
        0,
        "A good paraphrase has its own structure, the same meaning and a citation. The second is patchwriting, the third plagiarizes the idea (no citation), and the fourth exaggerates \"delay\" into \"no longer at all\".",
      ),
      fb(
        "The new speed limit led to a sharp ___ in road deaths.",
        "reduction",
        "El nuevo límite de velocidad produjo una fuerte [reducción] de las muertes en carretera.",
        ["decline", "drop", "fall", "decrease"],
        "Changing the word class (\"reduce\" becomes \"a reduction\") is a core paraphrasing technique. Note the preposition: a reduction, rise or fall \"in\" something, not *of.",
      ),
      fb(
        "___ rising fuel costs, several airlines cut their regional routes.",
        "Owing to",
        "[Debido a] la subida de los costos del combustible, varias aerolíneas recortaron sus rutas regionales.",
        ["Due to", "Because of"],
        "A clause (\"because fuel costs rose\") becomes a phrase (\"owing to rising fuel costs\"), which changes the structure and makes the sentence denser.",
      ),
      fx(
        "Because rents rose so quickly, many families moved to the suburbs.",
        "The rapid ___ in rents drove many families to the suburbs.",
        "rise",
        ["increase"],
        "The verb \"rose\" becomes the noun \"rise\", the adverb \"quickly\" becomes the adjective \"rapid\", and the cause becomes the subject. That is rebuilding, not redecorating.",
      ),
      mc(
        "The source reports \"a slight decline in sales.\" Which paraphrase keeps the author's intensity?",
        [
          "Sales fell a little.",
          "Sales collapsed.",
          "Sales plummeted.",
          "There was a slump in sales.",
        ],
        0,
        "Synonyms are rarely exact. \"Collapse\", \"plummet\" and \"slump\" describe a dramatic fall, which misrepresents \"slight\".",
      ),
      mc(
        "Original: \"Bilingual children outperform monolinguals on tests of working memory.\" Which paraphrase handles the technical term correctly?",
        [
          "On working memory tests, children who speak two languages score higher than those who speak one.",
          "On tests of job memory, children who speak two languages score higher than those who speak one.",
          "On tests of operational recall, children who speak two languages score higher than those who speak one.",
          "On tests of active remembering, children who speak two languages score higher than those who speak one.",
        ],
        0,
        "\"Working memory\" is a technical term with no real synonym in psychology, so it stays. Paraphrase the rest of the sentence, not the terminology.",
      ),
      tr(
        "Aunque cambies la redacción, tienes que citar la fuente.",
        "Even if you change the wording, you {still |}{have to|must|need to} cite the source.",
        "An uncited paraphrase is still plagiarism of ideas: new wording does not make the idea yours.",
      ),
      mt(
        "Match each term with its description.",
        [
          ["paraphrase", "the source's idea in your own structure and words, at a similar length"],
          ["summary", "the main claim and key qualification, much shorter than the original"],
          ["patchwriting", "the original sentence skeleton with a few synonyms swapped in"],
          ["synthesis", "relating several sources to one idea: agreement, contrast, development"],
          ["the gap", "what previous research has missed or left unresolved"],
        ],
        "A paraphrase keeps the length, a summary condenses, patchwriting only redecorates (and counts as plagiarism), and synthesis organizes the review around ideas so that the gap emerges.",
      ),
      tr(
        "En pocas palabras, las autoras sostienen que las granjas pequeñas son más eficientes.",
        "{In a nutshell|In short|In brief}, the authors {argue|contend|maintain} that small farms are more efficient.",
        "\"In a nutshell\" and \"in short\" signal a summary of the main claim; \"argue\" presents it as a position without endorsing it.",
      ),
      fx(
        "Because the government failed to invest in rail, freight moved onto the roads.",
        "The government's ___ to invest in rail pushed freight onto the roads.",
        "failure",
        [],
        "\"Fail\" becomes \"failure\", and one noun phrase now carries what a whole clause used to. Nominalization is what makes summaries dense.",
      ),
      mc(
        "Original: \"Our data suggest that the curfew may have reduced crime.\" Which one-sentence summary keeps the stance?",
        [
          "Okoro (2021) suggests that the curfew may have reduced crime.",
          "Okoro (2021) demonstrates that the curfew reduced crime.",
          "Okoro (2021) shows that the curfew reduced crime.",
          "Okoro (2021) claims that the curfew reduced crime.",
        ],
        0,
        "The author only suggests a possibility. \"Demonstrates\" and \"shows\" treat it as proven, and \"claims\" both drops the hedge and makes you sound skeptical.",
      ),
      tr(
        "La autora reconoce que su muestra era pequeña.",
        "The author {acknowledges|concedes|admits} that her sample was small.",
        "\"Acknowledge\", \"concede\" and \"admit\" mark an admission, which a faithful summary keeps.",
      ),
      mc(
        "The study found that the bonus raised productivity \"only in the first three months.\" Which summary is accurate?",
        [
          "Hale (2022) finds that the bonus boosted productivity, but only in the short term.",
          "Hale (2022) finds that the bonus boosted productivity.",
          "Hale (2022) finds that the bonus had no effect on productivity.",
          "Hale (2022) finds that the bonus boosted productivity in the long term.",
        ],
        0,
        "Key qualifications (\"only for small firms\", \"in the short term\") belong in even a one-sentence summary; dropping one changes the finding.",
      ),
      wo(
        "Drawing on interviews with 40 farmers, Rojas argues that drought drives farm abandonment",
        "A partir de entrevistas con 40 agricultores, Rojas sostiene que la sequía provoca el abandono de las granjas.",
        "The one-sentence summary template: method or scope (\"Drawing on...\"), author, reporting verb, main claim.",
        ["Rojas, drawing on interviews with 40 farmers, argues that drought drives farm abandonment"],
      ),
      mc(
        "«El estado de la cuestión sobre la obesidad infantil es fragmentario.» Which version is correct?",
        [
          "The current state of research on childhood obesity is fragmented.",
          "The state of the question on childhood obesity is fragmented.",
          "The state of the art on childhood obesity is fragmented.",
          "The question's state on childhood obesity is fragmented.",
        ],
        0,
        "*The state of the question is not an English expression. \"The state of the art\" exists, but it means the most advanced level of a technology. Say \"the current state of research\" or \"the existing literature\".",
      ),
      tr(
        "La mayor parte de la bibliografía existente se ocupa de los adolescentes.",
        "Most of the existing literature {focuses on|deals with|is concerned with} {adolescents|teenagers}.",
        "«Bibliografía» in the sense of the body of scholarly work is \"the literature\", an uncountable noun with a singular verb.",
      ),
      fb(
        "The clinic has just bought two ___ scanners.",
        "state-of-the-art",
        "La clínica acaba de comprar dos escáneres [de última generación].",
        [],
        "\"State-of-the-art\" means the most advanced technology available, hyphenated before a noun. It is not a synonym for a literature review.",
      ),
      fb(
        "Research on online tutoring ___ into three broad strands.",
        "falls",
        "La investigación sobre las tutorías en línea [se divide] en tres grandes líneas.",
        ["divides", "is divided"],
        "\"The literature falls into... strands\" signals a thematic organization at the start of the review.",
      ),
      tr(
        "Se ha prestado poca atención a los cuidadores no remunerados.",
        "Little attention has been paid to unpaid {caregivers|carers}.",
        "Attention is paid \"to\" something, and the present perfect links past research to the current situation. *Little attention has been paid on is a common slip.",
      ),
      tr(
        "La relación entre el ruido y el rendimiento escolar aún no se ha estudiado.",
        "The {relationship|link} between noise and {school|academic} performance has yet to be {examined|studied|investigated}.",
        "\"Has yet to be + past participle\" is a fixed gap formula meaning «aún no se ha».",
        ["The relationship between noise and school performance has not yet been studied.", "The relationship between noise and school performance has not been studied yet."],
      ),
      mc(
        "You want to say that almost no research exists on the topic. Which sentence says it?",
        [
          "Few studies have looked at older drivers.",
          "A few studies have looked at older drivers.",
          "Some studies have looked at older drivers.",
          "Quite a few studies have looked at older drivers.",
        ],
        0,
        "\"Few\" (almost none) signals a gap; \"a few\" means some, and \"quite a few\" means a fair number. One small article changes the claim completely.",
      ),
      tr(
        "Hasta la fecha, ningún estudio ha seguido a estos pacientes más de un año.",
        "To date, no study has followed these patients for {more than|over|longer than} a year.",
        "\"To date, no study has...\" is the classic gap sentence: present perfect plus a strong negative.",
      ),
      tr(
        "Este estudio aborda esta laguna mediante entrevistas a 300 enfermeras.",
        "{The present|This} study addresses this gap {by interviewing|through interviews with} 300 nurses.",
        "Position the study with \"The present study addresses this gap by + -ing\". Avoid *our investigation: \"investigation\" suggests a police or official inquiry.",
      ),
      fb(
        "___ Ruiz (2019) argues that tutoring helps weak students most, Park (2021) finds the largest gains among strong ones.",
        "Whereas",
        "[Mientras que] Ruiz (2019) sostiene que las tutorías ayudan sobre todo a los alumnos con dificultades, Park (2021) observa las mayores mejoras entre los mejores.",
        ["While"],
        "\"Whereas\" and \"while\" join two contrasting clauses in one sentence; \"by contrast\" would start a new sentence.",
      ),
      tr(
        "En la línea de encuestas anteriores, Ito (2020) señala que la mayoría de los usuarios nunca lee las políticas de privacidad.",
        "In line with {previous|earlier} surveys, Ito (2020) {reports|notes|finds} that most users never read privacy policies.",
        "\"In line with\" is the natural rendering of «en la línea de» or «en consonancia con» for agreement between sources. Note \"most users\" with no \"the\" and a plural verb.",
      ),
      mc(
        "Smith (2018) found a strong effect in cities. ___, studies in rural areas report no such effect.",
        [
          "By contrast",
          "On the contrary",
          "In line with this",
          "Whereas",
        ],
        0,
        "\"By contrast\" starts a new sentence comparing two sources. \"On the contrary\", like «al contrario», contradicts a negative statement just made; \"whereas\" needs a second clause in the same sentence.",
      ),
      wo(
        "Both studies rely on small samples, yet neither examines older adults",
        "Ambos estudios se basan en muestras pequeñas, pero ninguno examina a los adultos mayores.",
        "\"Both..., yet neither...\" points to a shared limitation. \"Neither\" takes a singular verb in formal writing (\"examines\"); *neither examine is marked as an error in academic prose.",
      ),
      tr(
        "En conjunto, estos estudios indican que las multas funcionan mejor que las advertencias.",
        "Taken together, these studies {suggest|indicate} that fines work better than warnings.",
        "\"Taken together\" is the synthesis move that draws a conclusion from several sources at once.",
      ),
      tr(
        "Partiendo del trabajo de Mendez, Lowe (2023) amplía el modelo a las ciudades pequeñas.",
        "Building on Mendez's work, Lowe (2023) extends the model to small {towns|cities}.",
        "\"Building on\" renders «partiendo de» when one study develops another; \"extend X to Y\" renders «ampliar a».",
      ),
      dt(
        "Little attention has been paid to the role of older siblings.",
        "The classic gap formula: \"little attention\" (almost none), present perfect passive, and \"paid to\".",
      ),
      dt(
        "Whereas early studies relied on surveys, more recent work has used interviews.",
        "\"Whereas\" contrasts two clauses in one sentence; the present perfect describes a trend up to now.",
      ),
      lc(
        "A few studies have looked at this question.",
        "What does the speaker mean?",
        [
          "Some studies exist on the question",
          "Almost no studies exist on the question",
          "No studies exist on the question",
          "A great many studies exist on the question",
        ],
        0,
        "With \"a\", \"a few\" is positive: there is some research. Without it, \"few studies\" would signal a gap.",
      ),
      sp(
        "What these studies have in common is that they focus on men.",
        "Lo que estos estudios tienen en común es que se centran en hombres.",
        "Stress \"common\" and \"men\"; keep \"that they\" light.",
        "Pointing out what sources share, including a common limitation, is the most powerful synthesis move and often leads to the gap.",
      ),
      sp(
        "This study seeks to extend this line of research to older adults.",
        "Este estudio pretende ampliar esta línea de investigación a los adultos mayores.",
        "Link \"extend this\" and stress \"older adults\".",
        "«Pretender» here is \"seek\" or \"aim\", never \"pretend\", and «línea de investigación» is \"line of research\".",
      ),
      mc(
        "Which sentence is correct?",
        [
          "Little research has examined the long-term effects of the program.",
          "Few researches have examined the long-term effects of the program.",
          "A little researches have examined the long-term effects of the program.",
          "Few research have examined the long-term effects of the program.",
        ],
        0,
        "\"Research\" is uncountable: \"little research\" with a singular verb, or \"few studies\". *Researches as a noun is one of the most frequent errors in academic writing by Spanish speakers.",
      ),
    ],
  ),

  // ---------------------------------------------------------------------
  // Drill 2. Paraphrasing in practice, punctuation, nominalization, advanced relatives + unit mix
  // ---------------------------------------------------------------------
  drill(
    "en-c2-paraphrase-unit-drill-2",
    "Drill: Precise Punctuation, Nominalization and Formal Relatives",
    "Paraphrase a dense sentence without losing its logic, punctuate for precision, nominalize with the right collocations, and use formal relatives such as \"to which\", \"most of whom\", \"whereby\" and \"in which case\".",
    "Recap: the tools of a dense, precise paragraph",
    [
      "Before paraphrasing, split the source into concession, claim and reason, and keep all three with the same strength (\"has done little to\" is not \"has failed\"). Two independent clauses need a period, a conjunction or a semicolon, never just a comma, and a colon must follow a complete clause.",
      "Nominalize with care: \"a rise in\", \"analyses\", \"criteria\"; \"research\" and \"evidence\" are uncountable; you \"draw\" conclusions, \"conduct\" research and \"shed light on\" a question.",
      "Formal relatives: preposition + \"whom/which\" (never \"that\" or \"who\"), \"most of whom\", \"whose\" for things, \"whereby\", \", which\" for a whole clause (never *what), \"in which case\", \"by which time\".",
    ],
    [
      ["The scheme has done little to reduce waiting lists.", "El plan apenas ha servido para reducir las listas de espera."],
      ["The app was cheap; however, it drained the battery.", "La aplicación era barata; sin embargo, agotaba la batería."],
      ["The team interviewed 80 parents, most of whom worked shifts.", "El equipo entrevistó a 80 padres, la mayoría de los cuales trabajaban por turnos."],
      ["The strike may continue, in which case classes will move online.", "Puede que la huelga continúe, en cuyo caso las clases pasarán a ser en línea."],
    ],
    [
      mc(
        "Original (Ogun, 2022): \"Although online courses have made training cheaper, they have done little to raise completion rates, since learners lack the support of a teacher.\" Which paraphrase keeps all three parts and their links?",
        [
          "Ogun (2022) argues that, while online courses have cut the cost of training, the lack of a teacher's support means that completion rates have barely risen.",
          "Ogun (2022) argues that online courses have done little to raise completion rates.",
          "Ogun (2022) argues that online courses have completely failed to raise completion rates because learners lack support.",
          "Ogun (2022) argues that online courses are cheaper. Learners lack the support of a teacher. Completion rates are low.",
        ],
        0,
        "A faithful paraphrase keeps the concession (cheaper), the claim (completion barely improved) and the reason (no teacher), with their logical links. The others drop the concession, exaggerate \"done little\" into \"completely failed\", or break the links into unrelated sentences.",
      ),
      tr(
        "Un mayor acceso no se ha traducido en salarios más altos.",
        "Greater access has not translated into higher {pay|wages|salaries|earnings}.",
        "\"Translate into\" is the natural way to say one change has not led to another. «Mayor» is \"greater\" here, not *major.",
      ),
      mc(
        "Which sentence is punctuated correctly?",
        [
          "The flight was delayed; however, we made the connection.",
          "The flight was delayed, however, we made the connection.",
          "The flight was delayed however, we made the connection.",
          "The flight was delayed, however we made the connection.",
        ],
        0,
        "Two independent clauses joined only by a comma form a comma splice, and \"however\" does not change that. Use \"; however,\" or start a new sentence.",
      ),
      mc(
        "Which sentence is punctuated correctly?",
        [
          "The kit includes a charger, a cable and a case.",
          "The kit includes: a charger, a cable and a case.",
          "The kit includes, a charger, a cable and a case.",
          "The kit includes such as: a charger, a cable and a case.",
        ],
        0,
        "A colon must follow a complete clause, so it never comes straight after a verb like \"includes\" or after \"such as\". Here no punctuation is needed before the list.",
      ),
      mc(
        "Which sentence uses the colon correctly?",
        [
          "There was only one explanation: the server had crashed.",
          "The explanation was: the server had crashed.",
          "The reasons were: the cost and the delay.",
          "We need: more time and more staff.",
        ],
        0,
        "Test: the words before the colon must be able to stand as a sentence. \"There was only one explanation\" can; \"The explanation was\" and \"We need\" cannot.",
      ),
      mc(
        "\"The employees, who had worked overtime, received a bonus.\" What does this mean?",
        [
          "All the employees had worked overtime, and all received a bonus",
          "Only the employees who had worked overtime received a bonus",
          "Some employees received a bonus although they had not worked overtime",
          "The employees received a bonus instead of overtime pay",
        ],
        0,
        "Commas make the clause non-defining: it adds information about all the employees. Without commas (\"The employees who had worked overtime...\") it would identify only some of them.",
      ),
      mc(
        "«El sindicato de los conductores rechazó el nuevo horario.» (many drivers) Which spelling is correct?",
        [
          "The drivers' union rejected the new schedule.",
          "The driver's union rejected the new schedule.",
          "The drivers union's rejected the new schedule.",
          "The drivers's union rejected the new schedule.",
        ],
        0,
        "With a regular plural, the apostrophe goes after the -s: \"drivers'\". \"Driver's\" would mean one driver. The -'s form is more natural than *the union of the drivers.",
      ),
      mc(
        "Which sentence makes clear that the mayor and the chef are not our hosts?",
        [
          "We thanked our hosts, the mayor, and the chef.",
          "We thanked our hosts, the mayor and the chef.",
          "We thanked our hosts: the mayor and the chef.",
          "We thanked our hosts — the mayor and the chef.",
        ],
        0,
        "The Oxford (serial) comma before \"and\" makes it a list of three. Without it, \"the mayor and the chef\" can read as an explanation of who the hosts were, and the colon and dash versions say exactly that.",
      ),
      fb(
        "She signed a ___ contract with the club.",
        "three-year",
        "Firmó un contrato [de tres años] con el club.",
        ["3-year"],
        "A compound adjective before a noun is hyphenated and its noun stays singular: *a three-years contract is a very common slip.",
      ),
      mt(
        "Match each word with its noun form.",
        [
          ["rely", "reliance"],
          ["aware", "awareness"],
          ["approve", "approval"],
          ["emerge", "emergence"],
          ["reliable", "reliability"],
          ["refuse", "refusal"],
        ],
        "Learn the suffix families: -ance/-ence, -ness, -al, -ity. Note that \"rely\" and \"reliable\" produce different nouns: \"reliance\" (dependence) and \"reliability\" (being trustworthy).",
      ),
      fb(
        "The lab ran two separate ___ of the water samples.",
        "analyses",
        "El laboratorio hizo dos [análisis] distintos de las muestras de agua.",
        [],
        "\"Analysis\" has the Greek plural \"analyses\", like \"hypothesis/hypotheses\". Spanish «análisis» does not change, which is why *two analysis is common.",
      ),
      fb(
        "The two ___ used to select participants were age and income.",
        "criteria",
        "Los dos [criterios] que se usaron para seleccionar a los participantes fueron la edad y los ingresos.",
        [],
        "\"Criterion\" is singular, \"criteria\" plural (like \"phenomenon/phenomena\"). *Criterias and *two criterion are both errors.",
      ),
      tr(
        "Una prueba clave desapareció del expediente.",
        "A key piece of evidence {disappeared|went missing|vanished} from the file.",
        "\"Evidence\" is uncountable, so «una prueba» is \"a piece of evidence\". *An evidence is impossible.",
      ),
      tr(
        "Ha realizado muchas investigaciones sobre el agua potable.",
        "{She|He} has {conducted|carried out|done} {extensive|a lot of|a great deal of} research on drinking water.",
        "\"Research\" is uncountable (no *researches) and goes with \"conduct\", \"carry out\" or \"do\", never *make or *realize.",
      ),
      fb(
        "What conclusions can we ___ from the pilot program?",
        "draw",
        "¿Qué conclusiones podemos [sacar] del programa piloto?",
        ["reach"],
        "You \"draw\" or \"reach\" a conclusion. *Take out a conclusion is a calque of «sacar».",
      ),
      tr(
        "La escasez de agua supone una seria amenaza para la región.",
        "{Water scarcity poses|Water shortages pose|The water shortage poses|The lack of water poses} a serious threat to the region.",
        "A problem \"poses\" a threat or a challenge; «suponer» here is not *suppose.",
      ),
      fb(
        "The report ___ light on how families use their savings.",
        "sheds",
        "El informe [arroja] luz sobre cómo usan sus ahorros las familias.",
        ["throws", "casts"],
        "\"Shed light on\" is the fixed collocation for «arrojar luz sobre».",
      ),
      tr(
        "Hubo un fuerte aumento de los precios de la vivienda.",
        "There was a sharp {rise|increase} in {house|housing|home} prices.",
        "A rise or increase \"in\", not *of. \"Sharp\" is the natural adjective for a sudden rise.",
      ),
      fb(
        "We measured the extent to ___ screen time affects sleep.",
        "which",
        "Medimos la medida en [que] el tiempo frente a la pantalla afecta el sueño.",
        [],
        "\"The extent to which\" is a fixed academic phrase for «la medida en que». After a preposition, only \"which\" (things) or \"whom\" (people): never *to that.",
      ),
      tr(
        "La colega a la que le envié el borrador nunca contestó.",
        "The colleague {to whom I sent the draft|I sent the draft to|who I sent the draft to} never {replied|answered|wrote back}.",
        "Formal: preposition + \"whom\". Informal: the preposition moves to the end and the pronoun can disappear. *To who and *to that are never correct.",
      ),
      mc(
        "Complete: \"These are the conditions under ___ the vaccine must be stored.\"",
        [
          "which",
          "that",
          "who",
          "whom",
        ],
        0,
        "After a preposition use \"which\" for things and \"whom\" for people. \"That\" can never follow a preposition, and \"who/whom\" refer to people.",
      ),
      tr(
        "La encuesta tuvo 300 participantes, la mayoría de los cuales eran mujeres.",
        "The survey had 300 {participants|respondents}, most of whom were women.",
        "Quantifier + \"of whom\". *Most of them were women after a comma creates a comma splice; *most of who is never correct.",
      ),
      fb(
        "He wrote four novels, none of ___ was published in his lifetime.",
        "which",
        "Escribió cuatro novelas, ninguna de [las cuales] se publicó en vida.",
        [],
        "Things take \"of which\", people \"of whom\". After \"of\", never \"that\" or \"who\".",
      ),
      fb(
        "The bank launched a plan ___ customers can pay off their debts in small installments.",
        "whereby",
        "El banco lanzó un plan [mediante el cual] los clientes pueden saldar sus deudas en pequeñas cuotas.",
        ["by which", "under which"],
        "\"Whereby\" introduces a system or arrangement; it is formal and common in academic and legal English.",
      ),
      tr(
        "Es un pueblo cuya población se ha reducido a la mitad.",
        "It is a {town|village} whose population has {halved|been halved|fallen by half|dropped by half}.",
        "\"Whose\" works for things as well as people. Avoid *a town that its population, a calque of colloquial Spanish.",
      ),
      mc(
        "Complete: \"He missed the deadline, ___ cost the team the contract.\"",
        [
          "which",
          "what",
          "that",
          "who",
        ],
        0,
        "When the relative refers to the whole previous clause, English uses \", which\". «Lo que» is NOT *what here; \"what\" only opens a noun clause with no antecedent (\"What cost us the contract was...\").",
      ),
      tr(
        "Puede que el vuelo se retrase, en cuyo caso tomaremos el tren.",
        "The flight {may|might} be delayed, in which case we{ will|'ll} take the train.",
        "\"In which case\" links the consequence to the previous clause. *In this case breaks the link and would need a new sentence.",
      ),
      fb(
        "The repairs won't be finished until March, ___ the tenants will have moved out.",
        "by which time",
        "Las reparaciones no estarán terminadas hasta marzo, y [para entonces] los inquilinos ya se habrán mudado.",
        [],
        "\"By which time\" points to a deadline and usually needs the future perfect (\"will have moved\").",
      ),
      wo(
        "Whether these effects last beyond one year has yet to be examined",
        "Aún no se ha estudiado si estos efectos duran más de un año.",
        "A whether-clause can be the subject, followed by the gap formula \"has yet to be examined\".",
      ),
      wo(
        "The present study extends this line of research to secondary schools",
        "Este estudio amplía esta línea de investigación a las escuelas secundarias.",
        "Positioning the study: \"the present study\", \"extend X to Y\", \"line of research\".",
      ),
      dt(
        "A growing body of research sheds light on how teenagers manage their money.",
        "\"A growing body of research\" (uncountable research, singular verb) and \"shed light on\" are high-frequency academic collocations.",
      ),
      dt(
        "The firm hired forty interns, several of whom were later offered contracts.",
        "Quantifier + \"of whom\" for people, after a comma: the clause is non-defining.",
      ),
      lc(
        "The bus was late again, which is why I missed the first lecture.",
        "What does \"which\" refer to?",
        [
          "The fact that the bus was late again",
          "The bus itself",
          "The first lecture",
          "The speaker",
        ],
        0,
        "\", which\" can refer to a whole clause. \"Which is why\" is the natural way to give a consequence.",
      ),
      sp(
        "The results were inconclusive, which is why we repeated the experiment.",
        "Los resultados no fueron concluyentes, por lo que repetimos el experimento.",
        "Pause at the comma and stress \"repeated\".",
        "«Por lo que» referring to the whole clause is \", which is why\", never *what is why.",
      ),
      sp(
        "Few studies have been carried out on this phenomenon.",
        "Se han realizado pocos estudios sobre este fenómeno.",
        "Stress \"Few\"; \"phenomenon\" is stressed on the second syllable: phe-NOM-e-non.",
        "\"Few studies\" signals a gap; «realizar» is \"carry out\"; the singular is \"phenomenon\", the plural \"phenomena\".",
      ),
      mc(
        "Which sentence is correct?",
        [
          "The panel interviewed 200 voters, most of whom had read the report; however, few changed their minds.",
          "The panel interviewed 200 voters, most of them had read the report, however, few changed their minds.",
          "The panel interviewed 200 voters, most of who had read the report; however, few changed their minds.",
          "The panel interviewed 200 voters, what most had read the report; however, few changed their minds.",
        ],
        0,
        "\"Most of whom\" makes the second clause relative, and \"; however,\" joins the last one. The second option is a double comma splice; *most of who and *what are relative-pronoun errors.",
      ),
      tr(
        "Ambos estudios se basan en encuestas, pero ninguno examina a los trabajadores rurales.",
        "Both studies {rely on|are based on|draw on} surveys, {but|yet} neither {examines|looks at|studies} rural workers.",
        "A shared limitation leads to the gap. \"Neither\" takes a singular verb in formal writing, and a comma before \"but/yet\" joins the two clauses correctly.",
      ),
    ],
  ),
];
