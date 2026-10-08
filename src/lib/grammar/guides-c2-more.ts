// Synced from cheneygross-afk/lengo:src/lib/grammar/guides-c2-more.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { GrammarGuide } from "./types";

// More C2 guides: the fine points a near-native writer and reader needs
// (mood contrasts, register, free indirect style, passive and impersonal
// variants, regional grammar, dequeísmo and the modal uses of tenses).
export const C2_MORE_GUIDES: GrammarGuide[] = [
  {
    slug: "indicative-vs-subjunctive-meaning-contrasts",
    title: "Indicative or Subjunctive? When the Mood Changes the Meaning",
    metaTitle: "Indicative vs. Subjunctive: Meaning Contrasts",
    description:
      "Advanced mood choice: sentir, decir, comprender, el hecho de que, aunque and relative clauses where indicative and subjunctive mean different things.",
    level: "C2",
    readingLevelPath: "c1c2",
    intro: [
      "By C1 you know the triggers: querer que, es posible que, para que. At C2 the interesting cases are the ones where both moods are grammatical and the choice changes what you mean, or how committed you are to it.",
      "The underlying idea is simple: the indicative asserts information as new or true; the subjunctive presents it as not asserted, because it's a wish, a hypothesis, already known, or under discussion.",
    ],
    sections: [
      {
        heading: "Verbs with two meanings",
        body: [
          "Some verbs mean one thing with the indicative and another with the subjunctive. Decir reports information (indicative) or gives an order (subjunctive). Sentir means to perceive (indicative) or to regret (subjunctive). Comprender and entender mean to realize (indicative) or to sympathize with (subjunctive).",
        ],
        table: {
          headers: ["Verb", "+ indicative", "+ subjunctive"],
          rows: [
            ["decir", "report: Dice que viene.", "order: Dice que vengas."],
            ["sentir", "perceive: Siento que me miran.", "regret: Siento que no puedas venir."],
            ["comprender", "realize: Comprendo que es tarde.", "accept: Comprendo que estés cansado."],
            ["suponer", "assume: Supongo que lo sabe.", "imply: Esto supone que lo sepa todo el equipo."],
            ["insistir en", "maintain: Insiste en que es inocente.", "demand: Insiste en que paguemos ya."],
          ],
        },
      },
      {
        heading: "Information already known: el hecho de que, que at the start",
        body: [
          "A que-clause placed first, or after el hecho de que, usually refers to something everyone already knows. Because it isn't being asserted, it tends to take the subjunctive even when it's true. The indicative is possible and stresses the fact as new.",
        ],
        examples: [
          { es: "Que no te guste el trabajo no significa que debas dejarlo.", en: "The fact that you don't like the job doesn't mean you should quit." },
          { es: "El hecho de que haya dimitido no cambia nada.", en: "The fact that she has resigned changes nothing." },
          { es: "El hecho de que ha dimitido ya es oficial.", en: "The fact that she has resigned is now official. (new information)" },
        ],
      },
      {
        heading: "Aunque, por mucho que and como",
        body: [
          "Aunque + indicative concedes a fact you accept (even though). Aunque + subjunctive concedes a hypothesis, or a fact you treat as irrelevant (even if, granted that). Como + indicative is causal (since); como + subjunctive is a threat or condition (if).",
        ],
        examples: [
          { es: "Aunque llueve, salimos.", en: "Even though it's raining, we're going out." },
          { es: "Aunque llueva, salimos.", en: "Even if it rains, we're going out." },
          { es: "Como no llegaste, nos fuimos.", en: "Since you didn't arrive, we left." },
          { es: "Como no llegues a tiempo, nos vamos.", en: "If you're not on time, we're leaving." },
        ],
      },
      {
        heading: "Relative clauses: a known thing or any thing",
        body: [
          "In a relative clause, the indicative refers to something identified; the subjunctive to anything that fits the description, whether or not it exists. This is how Spanish expresses \"whatever\", \"whoever\" and \"wherever\".",
        ],
        examples: [
          { es: "Haremos lo que dice el informe.", en: "We'll do what the report says. (I know what it says.)" },
          { es: "Haremos lo que diga el informe.", en: "We'll do whatever the report says. (It isn't out yet.)" },
          { es: "Busco al abogado que lleva mi caso.", en: "I'm looking for the lawyer who handles my case." },
          { es: "Busco un abogado que hable alemán.", en: "I'm looking for a lawyer who speaks German. (any one)" },
        ],
      },
      {
        heading: "Negated opinions and questions",
        body: [
          "No creo que + subjunctive is the norm. But no creo que + indicative is possible when the speaker is actually certain and is correcting someone, and ¿no crees que...? with the indicative invites agreement with what the speaker believes.",
        ],
        examples: [
          { es: "No creo que sea verdad.", en: "I don't think it's true." },
          { es: "¿No crees que es demasiado caro?", en: "Don't you think it's too expensive? (I do.)" },
          { es: "¿Crees que sea demasiado caro?", en: "Do you think it might be too expensive? (genuinely unsure; common in Latin America)" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Siento que no puedes venir. (meaning \"I'm sorry\")",
        right: "Siento que no puedas venir.",
        why: "Sentir que + indicative means \"I sense that\"; to express regret it takes the subjunctive.",
      },
      {
        wrong: "Me dijo que lo llamo mañana. (meaning \"told me to call\")",
        right: "Me dijo que lo llamara mañana.",
        why: "Decir as an order takes the subjunctive; the indicative reports information.",
      },
      {
        wrong: "Como no llegas a tiempo, nos vamos. (as a warning)",
        right: "Como no llegues a tiempo, nos vamos.",
        why: "Como + indicative gives a cause (since you aren't on time); a warning needs the subjunctive.",
      },
    ],
    faqs: [
      {
        q: "Is \"el hecho de que\" always followed by the subjunctive?",
        a: "Usually, because it presents a known fact as a topic to comment on. The indicative appears when the clause gives new information, often after verbs like confirmar or ser oficial.",
      },
      {
        q: "Is \"aunque\" + subjunctive only for hypotheses?",
        a: "No. It can also concede a real fact while dismissing it: Aunque sea tu jefe, no tiene derecho a gritarte (even if he is your boss, he has no right to shout at you).",
      },
    ],
    related: ["spanish-subjunctive", "concessive-clauses-aunque", "subjunctive-adjective-clauses"],
  },
  {
    slug: "formal-written-spanish",
    title: "Formal Written Spanish: Shifting Register on the Page",
    metaTitle: "Formal Written Spanish: Register Shifts (C2)",
    description:
      "Move a text from conversational to formal Spanish: precise verbs, nominal style, impersonal constructions, formal connectors and bureaucratic traps.",
    level: "C2",
    readingLevelPath: "c1c2",
    intro: [
      "Most advanced learners speak well but write as they speak. Formal written Spanish, the language of reports, academic papers, official letters and quality journalism, differs from conversation in vocabulary, sentence shape and how the writer appears in the text.",
      "This guide shows the main levers you can pull to raise (or lower) the register of a text, and where formal style tips into pompous jargon.",
    ],
    sections: [
      {
        heading: "Precise verbs instead of wildcard verbs",
        body: [
          "Conversation leans on hacer, poner, tener, decir and haber. Formal writing replaces them with a verb that names the action exactly.",
        ],
        table: {
          headers: ["Conversational", "Formal"],
          rows: [
            ["hacer un informe", "elaborar / redactar un informe"],
            ["hacer una pregunta", "plantear / formular una pregunta"],
            ["poner una multa", "imponer una sanción"],
            ["tener un problema", "presentar / afrontar un problema"],
            ["decir que no", "rechazar / denegar"],
            ["hay muchas causas", "existen / concurren numerosas causas"],
          ],
        },
      },
      {
        heading: "Nominal style",
        body: [
          "Formal Spanish packs actions into nouns. Instead of a chain of verbs, it uses a noun phrase that can then be the subject of a new sentence. Used in moderation, this makes a text dense and precise; overused, it becomes unreadable.",
        ],
        examples: [
          { es: "Como subieron los precios, la gente compró menos.", en: "Because prices went up, people bought less. (conversational)" },
          { es: "La subida de los precios provocó un descenso del consumo.", en: "The rise in prices caused a fall in consumption. (formal)" },
          { es: "Tras la aprobación del presupuesto, se iniciará la obra.", en: "Once the budget is approved, work will begin." },
        ],
      },
      {
        heading: "The writer steps back: impersonal and passive forms",
        body: [
          "Formal texts avoid yo and tú. They use se (se observa, se propone), the passive with ser for institutional actions, and inclusive or authorial nosotros (como veremos). Questions to the reader become statements: cabe preguntarse si...",
        ],
        examples: [
          { es: "Creo que el plan no funcionará.", en: "I think the plan won't work. (conversational)" },
          { es: "Todo indica que el plan resultará insuficiente.", en: "Everything suggests the plan will prove insufficient. (formal)" },
          { es: "Cabe preguntarse si la medida es proporcionada.", en: "One may ask whether the measure is proportionate." },
        ],
      },
      {
        heading: "Connectors and sentence shape",
        body: [
          "Formal writing replaces pero, y, así que and o sea with a richer set: sin embargo, no obstante, asimismo, por consiguiente, es decir. Sentences are longer and use subordination rather than a string of y. Paragraphs open with a topic and close with a conclusion.",
        ],
        examples: [
          { es: "Es caro, pero vale la pena.", en: "It's expensive, but it's worth it." },
          { es: "Si bien su coste es elevado, la inversión resulta rentable a medio plazo.", en: "Although its cost is high, the investment pays off in the medium term." },
        ],
      },
      {
        heading: "Too far: bureaucratic Spanish",
        body: [
          "The opposite failure is administrative jargon: a nivel de, en base a, the gerund of posteriority (Llegó a Madrid, alojándose en un hotel), empty verbs like proceder a, and three nouns where one verb would do. Good formal Spanish is precise, not inflated.",
        ],
        examples: [
          { es: "Se procedió a la realización de la revisión.", en: "The review was carried out. (inflated)" },
          { es: "Se revisó el expediente.", en: "The file was reviewed. (better)" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "A nivel de ventas, el año fue bueno.",
        right: "En cuanto a las ventas, el año fue bueno.",
        why: "\"A nivel de\" is criticized when there are no levels involved; use en cuanto a, en lo que respecta a or respecto a.",
      },
      {
        wrong: "El ministro llegó a Bruselas, reuniéndose después con sus homólogos.",
        right: "El ministro llegó a Bruselas y después se reunió con sus homólogos.",
        why: "A gerund shouldn't express an action that happens after the main verb.",
      },
      {
        wrong: "En base a los datos...",
        right: "Con base en los datos... / A partir de los datos... / Según los datos...",
        why: "\"En base a\" is widespread but frowned on in careful writing.",
      },
    ],
    faqs: [
      {
        q: "Should I always write in nominal style in formal Spanish?",
        a: "No. Mix nouns and verbs. A sentence with four nominalizations in a row is hard to read even for native speakers; keep verbs where the action matters.",
      },
      {
        q: "Can I use \"yo\" in an academic paper?",
        a: "Traditionally Spanish academic writing avoided it in favour of se and the authorial nosotros. Some fields now accept yo, especially in the humanities, but nosotros and impersonal forms remain the safe default.",
      },
    ],
    related: ["register-and-politeness", "nominalization", "spanish-connectors"],
  },
  {
    slug: "free-indirect-style",
    title: "Free Indirect Style in Spanish: Narrating a Character's Thoughts",
    metaTitle: "Free Indirect Style in Spanish (C2)",
    description:
      "What estilo indirecto libre is, how to spot it in Spanish novels (imperfect, conditional, unquoted exclamations) and how to write it yourself.",
    level: "C2",
    readingLevelPath: "c1c2",
    intro: [
      "Spanish fiction moves constantly between the narrator's voice and a character's mind. Between direct speech (—¿Y ahora qué hago?, pensó) and indirect speech (Se preguntó qué haría) there is a third option: free indirect style, which blends the two.",
      "Recognizing it is essential for reading novels at C2, because otherwise you'll attribute a character's prejudices, doubts and exclamations to the narrator.",
    ],
    sections: [
      {
        heading: "Three ways to report a thought",
        body: [
          "Direct style quotes the thought in the character's own words and tenses. Indirect style subordinates it to a verb of thinking and shifts the tenses. Free indirect style keeps the backshifted tenses and third person of indirect style, but drops the introducing verb and keeps the character's exclamations, questions and colloquial words.",
        ],
        table: {
          headers: ["Style", "Example"],
          rows: [
            ["Direct", "—¿Y ahora qué hago? —pensó Marta—. Mañana es lunes."],
            ["Indirect", "Marta se preguntó qué haría, porque al día siguiente era lunes."],
            ["Free indirect", "¿Y ahora qué iba a hacer? Mañana era lunes, maldita sea."],
          ],
        },
      },
      {
        heading: "How to recognize it",
        body: [
          "Look for a third-person past narrative that suddenly contains questions, exclamations, interjections or evaluative words (maldita sea, el muy idiota, ¡qué vergüenza!) without quotation marks or dashes. Deictic words often stay anchored in the character's present: mañana, ahora, aquí with past tenses.",
        ],
        examples: [
          { es: "Volvió a mirar el reloj. Las once. ¿Pero dónde se había metido aquel hombre?", en: "She looked at the clock again. Eleven. Where on earth had that man got to?" },
          { es: "No, no pensaba llamarlo. Que llamara él, si tanto le importaba.", en: "No, she wasn't going to call him. Let him call, if it mattered so much to him." },
        ],
      },
      {
        heading: "The tenses it uses",
        body: [
          "Present becomes imperfect, preterite becomes pluperfect, future becomes conditional, and the present subjunctive in wishes becomes imperfect subjunctive. The conditional is especially typical: it expresses the character's plans from inside the past.",
        ],
        examples: [
          { es: "Mañana hablaría con el director. Le diría todo.", en: "Tomorrow he would talk to the director. He would tell him everything." },
          { es: "Ojalá no llamara nadie esa noche.", en: "If only nobody would call that night." },
        ],
      },
      {
        heading: "Why writers use it",
        body: [
          "It lets the narrator enter a character's mind without breaking the flow of the narrative, and it creates irony: the reader hears the character's voice while the narrator stays silent about whether the character is right. Clarín, Galdós, Carmen Martín Gaite and Javier Marías use it constantly.",
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Reading every evaluative sentence in a novel as the narrator's opinion.",
        right: "Ask whose voice it is: a sudden exclamation or insult in third person is often the character's thought.",
        why: "Free indirect style has no quotation marks, so its signals are tone, questions and deictic words.",
      },
      {
        wrong: "Mañana hablará con el director, pensaba él. (mixing future with past narration)",
        right: "Mañana hablaría con el director.",
        why: "In free indirect style inside a past narrative, the character's future is expressed with the conditional.",
      },
    ],
    faqs: [
      {
        q: "Is free indirect style only literary?",
        a: "Mostly, but journalism uses it in narrative reportage, and people use a version of it when telling anecdotes: Y yo, claro, ¿qué iba a hacer? Pues me callé.",
      },
      {
        q: "How is it different from interior monologue?",
        a: "Interior monologue is first person and present tense, like a direct quotation of the mind. Free indirect style keeps the narrator's third person and past tenses.",
      },
    ],
    related: ["reported-speech", "sequence-of-tenses", "narrative-tenses-and-historical-present"],
  },
  {
    slug: "passive-and-impersonal-variants",
    title: "Passive and Impersonal Variants: Choosing the Right One",
    metaTitle: "Spanish Passive vs. Impersonal Constructions (C2)",
    description:
      "Ser passive, estar + participle, pasiva refleja, impersonal se, plural they, uno and generic tú: what each implies and where it sounds natural.",
    level: "C2",
    readingLevelPath: "c1c2",
    intro: [
      "English uses the passive constantly; Spanish has half a dozen ways to leave the agent out or move it to the background, and each has a different tone. Choosing well is what makes a C2 text sound native rather than translated.",
    ],
    sections: [
      {
        heading: "The six options",
        body: [
          "All of these can translate an English passive or a sentence with an indefinite subject. They differ in register and in what they imply about who did it.",
        ],
        table: {
          headers: ["Construction", "Example", "Typical use"],
          rows: [
            ["ser + participle", "El puente fue inaugurado en 1998.", "news, history, formal; agent may follow with por"],
            ["estar + participle", "El puente está cerrado.", "the resulting state, not the action"],
            ["pasiva refleja", "Se inauguró el puente en 1998.", "the neutral everyday choice"],
            ["impersonal se", "Se vive bien aquí. Se busca a los culpables.", "no subject at all; people in general"],
            ["3rd person plural", "Inauguraron el puente en 1998.", "conversation; agent is unspecified others"],
            ["object first + clitic", "El puente lo inauguraron en 1998.", "the object is the topic"],
          ],
        },
      },
      {
        heading: "Ser passive: less common than in English",
        body: [
          "The ser passive is natural in news, history and legal texts, especially with a stated agent. In conversation it sounds stiff, and it is rare with an ongoing present tense: Spanish prefers Se está construyendo un hospital to Un hospital está siendo construido.",
        ],
        examples: [
          { es: "El acusado fue detenido por la Guardia Civil.", en: "The suspect was arrested by the Civil Guard." },
          { es: "Se están revisando los contratos.", en: "The contracts are being reviewed." },
        ],
      },
      {
        heading: "Pasiva refleja and impersonal se",
        body: [
          "In the pasiva refleja the verb agrees with the noun: se venden pisos. With a person introduced by a, Spanish uses the impersonal se and the verb stays singular: se contrató a dos ingenieros. Many speakers say se contrataron dos ingenieros (without a); both appear, but se + singular + a is standard for specific people.",
        ],
        examples: [
          { es: "Se alquilan habitaciones.", en: "Rooms for rent." },
          { es: "Se detuvo a tres sospechosos.", en: "Three suspects were arrested." },
          { es: "En esta empresa se trabaja mucho.", en: "People work hard in this company." },
        ],
      },
      {
        heading: "People in general: uno, tú, la gente",
        body: [
          "When the subject is everyone including the speaker, conversation uses generic tú (Cuando tienes hijos, no duermes), uno (Uno nunca sabe) or la gente. Impersonal se is impossible when the verb is already reflexive; use uno (or generic tú, la gente): Uno se acostumbra, not Se se acostumbra.",
        ],
        examples: [
          { es: "Uno se cansa de esperar.", en: "You get tired of waiting." },
          { es: "Si no reservas, no encuentras mesa.", en: "If you don't book, you don't get a table." },
        ],
      },
      {
        heading: "Topicalization: the object first",
        body: [
          "Instead of a passive, spoken and journalistic Spanish often moves the object to the front and repeats it with a pronoun. This keeps the active verb but makes the object the topic, just as an English passive would.",
        ],
        examples: [
          { es: "La carta la escribió el propio director.", en: "The letter was written by the director himself." },
          { es: "A Marta la eligieron por unanimidad.", en: "Marta was chosen unanimously." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "La casa está siendo pintada.",
        right: "Están pintando la casa. / Se está pintando la casa.",
        why: "The progressive ser passive is grammatical but sounds like a translation from English.",
      },
      {
        wrong: "Se venden piso.",
        right: "Se venden pisos. / Se vende piso.",
        why: "In the pasiva refleja the verb agrees with the noun.",
      },
      {
        wrong: "Se se ducha por la mañana.",
        right: "Uno se ducha por la mañana.",
        why: "A reflexive verb can't take impersonal se; use uno, tú or la gente.",
      },
    ],
    faqs: [
      {
        q: "Is \"se venden casas\" or \"se vende casas\" correct?",
        a: "Se venden casas is the standard form: casas is the grammatical subject. Se vende casas appears in speech and signs but is considered nonstandard.",
      },
      {
        q: "When should I use the ser passive?",
        a: "In formal writing about events with a known or important agent: El acuerdo fue firmado por ambas partes. In conversation, prefer se or the third-person plural.",
      },
    ],
    related: ["passive-and-impersonal-se", "emphasis-and-word-order", "formal-written-spanish"],
  },
  {
    slug: "regional-grammar-variation",
    title: "Regional Variation in Spanish Grammar: Spain and the Americas",
    metaTitle: "Regional Grammar Differences in Spanish (C2)",
    description:
      "Grammar differences across the Spanish-speaking world: vosotros vs. ustedes, preterite vs. perfect, voseo, leísmo, Caribbean questions and more.",
    level: "C2",
    readingLevelPath: "c1c2",
    intro: [
      "Educated Spanish is remarkably uniform in writing, but every region has grammar features that are standard locally. At C2 you should recognize them all, know which are accepted in formal writing, and choose a consistent variety for your own Spanish.",
    ],
    sections: [
      {
        heading: "Pronouns of address",
        body: [
          "Spain uses vosotros for informal plural you; the rest of the Spanish-speaking world (and the Canary Islands and parts of Andalusia) uses ustedes for both formal and informal. Voseo, vos instead of tú with its own verb forms, is standard in Argentina, Uruguay, Paraguay and much of Central America, and common in parts of Colombia, Venezuela and Chile.",
        ],
        table: {
          headers: ["Region", "you (sing., informal)", "you (plural, informal)"],
          rows: [
            ["Central and northern Spain", "tú tienes", "vosotros tenéis"],
            ["Mexico, Caribbean, Peru", "tú tienes", "ustedes tienen"],
            ["Argentina, Uruguay", "vos tenés", "ustedes tienen"],
            ["Central America", "vos tenés (with tú and usted)", "ustedes tienen"],
          ],
        },
      },
      {
        heading: "Past tenses: he comido or comí?",
        body: [
          "In most of Spain, the present perfect is used for anything that happened today or in a period that includes the present: Esta mañana he desayunado tarde. In most of Latin America, and in Galicia, Asturias and the Canaries, the preterite covers these cases: Esta mañana desayuné tarde. In parts of the Andes and Bolivia the present perfect extends to remote past.",
        ],
        examples: [
          { es: "¿Has visto a Juan hoy? (Spain)", en: "Have you seen Juan today?" },
          { es: "¿Viste a Juan hoy? (Latin America)", en: "Did you see Juan today?" },
        ],
      },
      {
        heading: "Pronouns: leísmo and friends",
        body: [
          "Central and northern Spain use le for a male person as direct object (A Juan le vi ayer), which the RAE accepts. Laísmo (La dije que viniera) is heard in Madrid and Castile but is not accepted in writing. Latin America generally keeps lo/la for direct objects. Many Latin American speakers also mark plural on se lo: Se los dije (I told them) when the indirect object is plural.",
        ],
      },
      {
        heading: "Caribbean and other features",
        body: [
          "Caribbean Spanish often keeps the subject before the verb in questions (¿Qué tú quieres?) and uses explicit subject pronouns more. Más nada and más nunca replace nada más and nunca más in Venezuela, Colombia and the Canaries. Pluralized haber (Habían muchas personas) is very widespread in Latin America and parts of Spain but still considered nonstandard in writing.",
        ],
        examples: [
          { es: "¿Qué tú quieres comer?", en: "What do you want to eat? (Caribbean)" },
          { es: "No quiero más nada.", en: "I don't want anything else. (Venezuela, Canaries)" },
          { es: "Había muchas personas. / Habían muchas personas.", en: "There were a lot of people. (standard / widespread nonstandard)" },
        ],
      },
      {
        heading: "Diminutives, ahorita and vocabulary that looks like grammar",
        body: [
          "Some differences are lexical but behave like grammar: ahorita in Mexico, the diminutive -ico in Colombia and Costa Rica, recién + verb in the Southern Cone (Recién llegué: I've just arrived), and the use of nomás (Pásele nomás) in Mexico and the Andes.",
        ],
        examples: [
          { es: "Recién llego del trabajo.", en: "I've just got in from work. (Southern Cone)" },
          { es: "Siéntese nomás.", en: "Go ahead and sit down. (Mexico, Andes)" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Mixing vosotros and ustedes forms in one text: Ustedes tenéis razón.",
        right: "Ustedes tienen razón. / Vosotros tenéis razón.",
        why: "Ustedes always takes third-person plural verbs. Pick one variety and stay consistent.",
      },
      {
        wrong: "Habían tres soluciones posibles. (in formal writing)",
        right: "Había tres soluciones posibles.",
        why: "Existential haber is impersonal and stays singular in the standard language.",
      },
      {
        wrong: "La dije la verdad.",
        right: "Le dije la verdad.",
        why: "Laísmo is a regional feature of central Spain that isn't accepted in standard Spanish.",
      },
    ],
    faqs: [
      {
        q: "Which Spanish should I learn?",
        a: "Any educated variety is correct. Choose the one you'll use most, be consistent in your own speech, and learn to understand the others. This course teaches both vosotros and ustedes.",
      },
      {
        q: "Is voseo considered incorrect?",
        a: "No. Voseo is the standard norm of Argentina, Uruguay and other countries, used by educated speakers, in the media and in literature. The RAE describes its verb forms alongside tú.",
      },
    ],
    related: ["voseo", "leismo-laismo-loismo", "present-perfect"],
  },
  {
    slug: "dequeismo-and-queismo",
    title: "Dequeísmo and Queísmo: \"de que\" or \"que\"?",
    metaTitle: "Dequeísmo and Queísmo in Spanish: De Que or Que?",
    description:
      "When Spanish needs \"de que\" and when just \"que\": dequeísmo (pienso de que) and queísmo (me acuerdo que), with a simple test to get it right.",
    level: "C2",
    readingLevelPath: "c1c2",
    intro: [
      "Even educated native speakers hesitate between que and de que. Saying pienso de que is called dequeísmo; leaving out a needed de, as in estoy seguro que, is queísmo. Both are common in speech, but in careful speech and writing they mark the difference between near-native and native-like command.",
    ],
    sections: [
      {
        heading: "The rule: keep the preposition the verb or noun needs",
        body: [
          "A que-clause takes de only when the word before it requires de with an ordinary noun. Acordarse de algo → me acuerdo de que. Pensar algo (no preposition) → pienso que. The clause simply replaces the noun.",
        ],
        table: {
          headers: ["With a noun", "With a clause"],
          rows: [
            ["Me acuerdo de eso.", "Me acuerdo de que llovía."],
            ["Estoy seguro de eso.", "Estoy seguro de que vendrá."],
            ["Me di cuenta de eso.", "Me di cuenta de que mentía."],
            ["Pienso eso.", "Pienso que tienes razón."],
            ["Me dijo eso.", "Me dijo que vendría."],
            ["Es posible eso.", "Es posible que llueva."],
          ],
        },
      },
      {
        heading: "The eso test",
        body: [
          "Replace the clause with eso, or make it a question. If you need de (¿De qué te acuerdas? De eso), keep de que. If you don't (¿Qué piensas? Eso), use que alone.",
        ],
        examples: [
          { es: "¿De qué estás convencido? → Estoy convencido de que funcionará.", en: "What are you convinced of? → I'm convinced it will work." },
          { es: "¿Qué opinas? → Opino que es tarde.", en: "What do you think? → I think it's late." },
        ],
      },
      {
        heading: "Typical dequeísmo",
        body: [
          "It appears mostly after verbs of thinking and saying: pensar, creer, decir, opinar, considerar, parecer, and after es + adjective. None of these take de with a noun, so none take de que.",
        ],
        examples: [
          { es: "✗ Creo de que tienes razón. ✓ Creo que tienes razón.", en: "I think you're right." },
          { es: "✗ Me parece de que es caro. ✓ Me parece que es caro.", en: "It seems expensive to me." },
        ],
      },
      {
        heading: "Typical queísmo",
        body: [
          "It appears after pronominal verbs and expressions that do need de: acordarse de, olvidarse de, darse cuenta de, estar seguro de, tener la impresión de, el hecho de, a pesar de. Also en (insistir en que, confiar en que) and a (aspirar a que).",
        ],
        examples: [
          { es: "✗ Me di cuenta que era tarde. ✓ Me di cuenta de que era tarde.", en: "I realized it was late." },
          { es: "✗ Insistió que pagáramos. ✓ Insistió en que pagáramos.", en: "He insisted that we pay." },
          { es: "A pesar de que llovía, salimos.", en: "Although it was raining, we went out." },
        ],
      },
      {
        heading: "Verbs that allow both",
        body: [
          "A few verbs change meaning or allow both. Advertir que (warn) vs. advertir de que (inform of a danger), both accepted. Avisar (de) que, informar (de) que (Spain prefers de que with informar), dudar (de) que are accepted with or without de.",
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Pienso de que deberíamos irnos.",
        right: "Pienso que deberíamos irnos.",
        why: "Pensar takes a direct object (pienso eso), so no de.",
      },
      {
        wrong: "Estoy seguro que lo sabe.",
        right: "Estoy seguro de que lo sabe.",
        why: "Estar seguro de algo: the clause keeps the de.",
      },
      {
        wrong: "Me alegro que hayas venido.",
        right: "Me alegro de que hayas venido.",
        why: "Alegrarse de algo. (Me alegra que hayas venido, with alegrar, is also correct.)",
      },
    ],
    faqs: [
      {
        q: "Is queísmo as serious as dequeísmo?",
        a: "Socially, dequeísmo is more stigmatized. Queísmo is so common, even in the press, that many readers don't notice it; careful editors still correct both.",
      },
      {
        q: "Why do native speakers make these mistakes?",
        a: "Because the two patterns cross: speakers who avoid queísmo overcorrect into dequeísmo, and vice versa. The eso test resolves almost every case.",
      },
    ],
    related: ["verbs-with-prepositions", "formal-written-spanish", "spanish-connectors"],
  },
  {
    slug: "modal-uses-of-tenses",
    title: "Tenses That Don't Mean Time: Politeness, Rumor and Surprise",
    metaTitle: "Modal Uses of Spanish Tenses (C2)",
    description:
      "How Spanish tenses express attitude, not time: the rumor conditional (habría muerto), the polite imperfect, the future of surprise and more.",
    level: "C2",
    readingLevelPath: "c1c2",
    intro: [
      "Spanish tenses don't only place events in time. Many uses tell you how the speaker relates to what they say: how sure they are, how polite they want to be, or whether they're quoting someone else. These are the modal uses of tenses.",
      "You met the future and conditional of probability at C1 (serán las tres). This guide covers the rest.",
    ],
    sections: [
      {
        heading: "The journalistic conditional (condicional de rumor)",
        body: [
          "News reports use the conditional to present information that hasn't been confirmed: the journalist reports it without vouching for it. It's the equivalent of \"reportedly\" or \"allegedly\". Style guides advise against overusing it, but you'll see it daily.",
        ],
        examples: [
          { es: "Según fuentes policiales, el detenido habría confesado.", en: "According to police sources, the detainee has reportedly confessed." },
          { es: "El incendio se habría originado en la cocina.", en: "The fire apparently started in the kitchen." },
        ],
      },
      {
        heading: "The polite imperfect and conditional",
        body: [
          "The imperfect softens a request or a statement of purpose, as if distancing it into the past: Quería pedirte un favor. The conditional does the same with modal verbs: ¿Podría...?, Desearía..., Deberías.... Both are standard in shops, offices and emails.",
        ],
        examples: [
          { es: "Buenos días, quería una barra de pan.", en: "Good morning, I'd like a baguette." },
          { es: "Venía a preguntar por el puesto.", en: "I've come to ask about the job." },
          { es: "¿Le importaría cerrar la ventana?", en: "Would you mind closing the window?" },
        ],
      },
      {
        heading: "The imperfect of dreams, games and plans",
        body: [
          "The imperfect sets up an imaginary world. Children assign roles with it (Yo era el policía y tú el ladrón), adults narrate dreams (Soñé que estaba en un barco y no sabía nadar), and it can express a plan that was cancelled or a near-miss (Mañana me iba de viaje, pero se ha cancelado; Un paso más y me caía).",
        ],
        examples: [
          { es: "Yo era la jefa y tú venías a pedirme un aumento.", en: "Let's say I'm the boss and you come to ask me for a raise." },
          { es: "Un segundo más y perdíamos el tren.", en: "One more second and we would have missed the train." },
        ],
      },
      {
        heading: "The future of concession and surprise",
        body: [
          "The future can concede a point before a pero: Será muy listo, pero no sabe trabajar en equipo (He may well be clever, but...). In exclamations and questions it expresses surprise or indignation: ¡Será posible! ¿Tendrá cara? (Can you believe the nerve of him?).",
        ],
        examples: [
          { es: "Tendrá mucho dinero, pero no es feliz.", en: "He may have a lot of money, but he isn't happy." },
          { es: "¡Será caradura!", en: "What a nerve he has!" },
        ],
      },
      {
        heading: "Present and future as commands",
        body: [
          "The present can give a firm instruction (Tú te callas y escuchas), and the future a solemn or authoritarian one (No matarás; Usted se presentará mañana a las ocho). Both are stronger than the imperative.",
        ],
        examples: [
          { es: "Ahora mismo te vas a tu cuarto.", en: "You're going to your room right now." },
          { es: "Los candidatos entregarán la documentación antes del día 5.", en: "Candidates shall submit their documents before the 5th." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Reading \"el ministro habría dimitido\" as \"the minister would have resigned\".",
        right: "The minister has reportedly resigned.",
        why: "In news, the conditional marks unconfirmed information, not a hypothetical.",
      },
      {
        wrong: "Quiero un café. (to a waiter, flat tone)",
        right: "Quería un café. / ¿Me pone un café?",
        why: "Quiero is fine in Spain with a friendly tone, but the imperfect or a question sounds more polite almost everywhere.",
      },
    ],
    faqs: [
      {
        q: "Is the journalistic conditional correct Spanish?",
        a: "It's grammatical and very common, but the RAE and many style guides recommend making the source explicit (según..., al parecer...) rather than relying on the conditional alone.",
      },
      {
        q: "Does \"quería\" in a shop mean I no longer want it?",
        a: "No. It's the polite imperfect: the wish is current, the past tense just softens it.",
      },
    ],
    related: ["future-and-conditional-of-probability", "narrative-tenses-and-historical-present", "register-and-politeness"],
  },
];
