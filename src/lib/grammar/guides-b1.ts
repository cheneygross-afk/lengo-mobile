// Synced from cheneygross-afk/lengo:src/lib/grammar/guides-b1.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { GrammarGuide } from "./types";

export const B1_GUIDES: GrammarGuide[] = [
  {
    slug: "present-perfect",
    title: "The Spanish Present Perfect: He Hablado",
    metaTitle: "Spanish Present Perfect (Pretérito Perfecto): Forms and Uses",
    description:
      "Learn the Spanish present perfect (he comido, has visto), the irregular participles, where the pronouns go, and how Spain and Latin America differ in choosing it over the preterite.",
    level: "B1",
    readingLevelPath: "b1",
    intro: [
      "The present perfect (pretérito perfecto compuesto) is formed with haber plus a past participle: he hablado, \"I have spoken.\" It links a past action to the present moment.",
      "Its use differs by region more than any other tense. In most of Spain it's the everyday past for anything that happened today. In most of Latin America the preterite does that job, and the present perfect is kept for experiences and things that are still relevant.",
    ],
    sections: [
      {
        heading: "Forming it",
        body: [
          "Conjugate haber in the present and add the past participle: -ar verbs take -ado, -er and -ir verbs take -ido. The participle never changes after haber.",
        ],
        table: {
          headers: ["", "haber", "+ participle"],
          rows: [
            ["yo", "he", "hablado / comido / vivido"],
            ["tú", "has", "hablado"],
            ["él / ella / usted", "ha", "comido"],
            ["nosotros", "hemos", "vivido"],
            ["vosotros", "habéis", "hablado"],
            ["ellos / ustedes", "han", "comido"],
          ],
        },
        examples: [
          { es: "He terminado el informe.", en: "I've finished the report." },
          { es: "¿Has comido ya?", en: "Have you eaten yet?" },
          { es: "Nunca hemos estado en Cuba.", en: "We've never been to Cuba." },
        ],
      },
      {
        heading: "Irregular participles",
        body: [
          "These common verbs have irregular participles. Compounds share them: describir → descrito, devolver → devuelto, deshacer → deshecho.",
        ],
        table: {
          headers: ["Infinitive", "Participle", "Infinitive", "Participle"],
          rows: [
            ["abrir", "abierto", "poner", "puesto"],
            ["decir", "dicho", "romper", "roto"],
            ["escribir", "escrito", "ver", "visto"],
            ["hacer", "hecho", "volver", "vuelto"],
            ["morir", "muerto", "resolver", "resuelto"],
            ["cubrir", "cubierto", "freír", "frito (or freído)"],
          ],
        },
        examples: [
          { es: "¿Quién ha roto la ventana?", en: "Who has broken the window?" },
          { es: "Todavía no he visto la película.", en: "I haven't seen the film yet." },
          { es: "¿Qué has hecho hoy?", en: "What have you done today?" },
        ],
      },
      {
        heading: "When to use it",
        body: [
          "Use it for actions in a time period that isn't over (hoy, esta semana, este año), for life experiences (alguna vez, nunca), and with ya and todavía no.",
          "Across Latin America, the preterite is normal for recent events: ¿Ya comiste? rather than ¿Ya has comido? Both are understood everywhere.",
        ],
        examples: [
          { es: "Esta mañana he tomado dos cafés.", en: "I've had two coffees this morning. (Spain)" },
          { es: "Esta mañana tomé dos cafés.", en: "I had two coffees this morning. (Latin America)" },
          { es: "¿Alguna vez has comido pulpo?", en: "Have you ever eaten octopus?" },
          { es: "Ya he llamado al banco.", en: "I've already called the bank." },
        ],
      },
      {
        heading: "Word order: nothing goes between haber and the participle",
        body: [
          "Object and reflexive pronouns go before haber, and so does no. Nothing can separate haber from the participle, unlike English \"I have often thought.\"",
        ],
        examples: [
          { es: "No lo he visto.", en: "I haven't seen it." },
          { es: "Me he levantado tarde.", en: "I got up late." },
          { es: "Siempre he pensado eso. / He pensado eso siempre.", en: "I've always thought that." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "He escribido una carta.",
        right: "He escrito una carta.",
        why: "Escribir has an irregular participle: escrito.",
      },
      {
        wrong: "He ya comido.",
        right: "Ya he comido.",
        why: "Nothing goes between haber and the participle.",
      },
      {
        wrong: "Ayer he ido al cine.",
        right: "Ayer fui al cine.",
        why: "Ayer marks a finished time, so even in Spain it takes the preterite.",
      },
      {
        wrong: "Las cartas han llegadas.",
        right: "Las cartas han llegado.",
        why: "After haber, the participle never agrees.",
      },
    ],
    faqs: [
      {
        q: "Is \"tengo hecho\" the same as \"he hecho\"?",
        a: "Not quite. Tener + participle (agreeing with the object) stresses the result: Tengo escritas tres páginas, \"I've got three pages written.\"",
      },
      {
        q: "Should I learn the Spain or Latin American usage?",
        a: "Pick the one you hear most and be consistent. Using the preterite for today's events is never wrong in Latin America, and using the present perfect is never wrong in Spain.",
      },
    ],
    related: ["spanish-pluperfect", "spanish-preterite-tense", "preterite-vs-imperfect"],
  },
  {
    slug: "spanish-pluperfect",
    title: "The Spanish Pluperfect: Había Hablado",
    metaTitle: "Spanish Past Perfect (Pluscuamperfecto): Había + Participle",
    description:
      "The Spanish pluperfect (había comido) describes the past before the past. Learn how to form it, when you need it, and how it works with ya, todavía and reported speech.",
    level: "B1",
    readingLevelPath: "b1",
    intro: [
      "The pluperfect (pluscuamperfecto) is \"had done\": an action completed before another point in the past. Cuando llegué, la película ya había empezado: when I arrived, the film had already started.",
      "It's formed exactly like the present perfect, with haber in the imperfect instead of the present.",
    ],
    sections: [
      {
        heading: "Forming it",
        body: [
          "Imperfect of haber (había, habías, había, habíamos, habíais, habían) plus the past participle. The irregular participles are the same as in the present perfect.",
        ],
        table: {
          headers: ["", "haber", "example"],
          rows: [
            ["yo", "había", "había terminado"],
            ["tú", "habías", "habías visto"],
            ["él / ella / usted", "había", "había salido"],
            ["nosotros", "habíamos", "habíamos hecho"],
            ["vosotros", "habíais", "habíais dicho"],
            ["ellos / ustedes", "habían", "habían vuelto"],
          ],
        },
      },
      {
        heading: "The past before the past",
        body: [
          "Use it when you're telling a story in the past and need to step further back. Ya (already) and todavía no / aún no (not yet) are its natural companions.",
        ],
        examples: [
          { es: "Cuando llegamos a la estación, el tren ya había salido.", en: "When we got to the station, the train had already left." },
          { es: "Nunca había visto tanta nieve.", en: "I had never seen so much snow." },
          { es: "Todavía no habían cenado cuando llamé.", en: "They still hadn't had dinner when I called." },
        ],
      },
      {
        heading: "Excuses and explanations",
        body: [
          "It's very common for explaining why something happened: the cause came first.",
        ],
        examples: [
          { es: "No pude entrar porque había olvidado las llaves.", en: "I couldn't get in because I'd forgotten my keys." },
          { es: "Estaba cansada: había dormido muy poco.", en: "She was tired: she'd slept very little." },
        ],
      },
      {
        heading: "In reported speech",
        body: [
          "When you report something someone said in the past, their preterite or present perfect usually becomes a pluperfect.",
        ],
        examples: [
          { es: "\"He perdido el móvil.\" → Dijo que había perdido el móvil.", en: "\"I've lost my phone.\" → He said he had lost his phone." },
          { es: "\"Lo compré ayer.\" → Me contó que lo había comprado el día anterior.", en: "\"I bought it yesterday.\" → She told me she had bought it the day before." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Cuando llegué, la clase ya empezó.",
        right: "Cuando llegué, la clase ya había empezado.",
        why: "The class started before you arrived, so it needs the pluperfect.",
      },
      {
        wrong: "Había ya salido.",
        right: "Ya había salido.",
        why: "As with all compound tenses, nothing goes between haber and the participle.",
      },
    ],
    faqs: [
      {
        q: "Do Spanish speakers use the pluperfect as much as English speakers?",
        a: "More, if anything. Where English often lets \"when I arrived, she left\" stand, Spanish tends to mark the order clearly with había.",
      },
      {
        q: "What is \"hubo terminado\"?",
        a: "The pretérito anterior, a literary tense meaning the same thing right after another event (Apenas hubo terminado, se fue). You only need to recognize it.",
      },
    ],
    related: ["present-perfect", "reported-speech", "preterite-vs-imperfect"],
  },
  {
    slug: "spanish-conditional-tense",
    title: "The Spanish Conditional: Would",
    metaTitle: "Spanish Conditional Tense (Hablaría): Forms, Irregulars and Uses",
    description:
      "Learn the Spanish conditional (hablaría, tendría, haría): how to form it, the irregular stems, and its uses for politeness, advice, hypotheses and the future in the past.",
    level: "B1",
    readingLevelPath: "b1",
    intro: [
      "The conditional is Spanish for \"would\": Me gustaría viajar, \"I would like to travel.\" It's built on the same stems as the future, so if you know one, you know both.",
    ],
    sections: [
      {
        heading: "Forming it",
        body: [
          "Add -ía, -ías, -ía, -íamos, -íais, -ían to the whole infinitive. All three verb groups share the same endings, which are the imperfect endings of -er/-ir verbs.",
        ],
        table: {
          headers: ["", "hablar", "comer", "vivir"],
          rows: [
            ["yo", "hablaría", "comería", "viviría"],
            ["tú", "hablarías", "comerías", "vivirías"],
            ["él / ella / usted", "hablaría", "comería", "viviría"],
            ["nosotros", "hablaríamos", "comeríamos", "viviríamos"],
            ["vosotros", "hablaríais", "comeríais", "viviríais"],
            ["ellos / ustedes", "hablarían", "comerían", "vivirían"],
          ],
        },
      },
      {
        heading: "Irregular stems",
        body: [
          "The same twelve verbs that are irregular in the future: tendría, pondría, saldría, vendría, valdría (d added); podría, sabría, habría, querría, cabría (vowel dropped); haría, diría (shortened).",
        ],
        examples: [
          { es: "¿Podrías ayudarme?", en: "Could you help me?" },
          { es: "Yo no diría eso.", en: "I wouldn't say that." },
          { es: "Habría más tiempo si saliéramos antes.", en: "There'd be more time if we left earlier." },
        ],
      },
      {
        heading: "Politeness and advice",
        body: [
          "The conditional softens requests and wishes. Yo que tú or yo en tu lugar plus the conditional gives advice.",
        ],
        examples: [
          { es: "Me gustaría reservar una mesa.", en: "I'd like to book a table." },
          { es: "¿Le importaría cerrar la ventana?", en: "Would you mind closing the window?" },
          { es: "Yo que tú, hablaría con ella.", en: "If I were you, I'd talk to her." },
          { es: "Deberías descansar más.", en: "You should rest more." },
        ],
      },
      {
        heading: "Hypotheses and the future in the past",
        body: [
          "It describes what would happen in an imagined situation, usually with a si clause in the imperfect subjunctive. It also reports a future seen from the past.",
        ],
        examples: [
          { es: "Con más dinero, viajaría por todo el mundo.", en: "With more money, I'd travel all over the world." },
          { es: "Si pudiera, lo haría.", en: "If I could, I would." },
          { es: "Dijo que llegaría a las ocho.", en: "He said he would arrive at eight." },
        ],
      },
      {
        heading: "Probability in the past",
        body: [
          "Just as the future can express a guess about the present, the conditional expresses a guess about the past.",
        ],
        examples: [
          { es: "—¿Qué hora era? —Serían las tres.", en: "—What time was it? —It must have been about three." },
          { es: "No contestó. Estaría durmiendo.", en: "He didn't answer. He was probably asleep." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Si tendría tiempo, iría.",
        right: "Si tuviera tiempo, iría.",
        why: "The conditional goes in the result clause. After si, use the imperfect subjunctive.",
      },
      {
        wrong: "Cuando era niño, iría a la playa cada verano.",
        right: "Cuando era niño, iba a la playa cada verano.",
        why: "English \"would\" for past habits is the imperfect in Spanish, not the conditional.",
      },
      {
        wrong: "Yo tenería",
        right: "Yo tendría",
        why: "Tener has the irregular stem tendr-.",
      },
    ],
    faqs: [
      {
        q: "Is quisiera more polite than querría?",
        a: "Quisiera (imperfect subjunctive) is the most common polite \"I'd like\" and sounds very natural. Querría is correct but less frequent; me gustaría is the everyday choice.",
      },
      {
        q: "How do I say \"would have\"?",
        a: "Use the conditional perfect: habría ido, \"I would have gone.\" See the guide on the pluperfect subjunctive and conditional perfect.",
      },
    ],
    related: ["si-clauses", "spanish-future-tense", "future-and-conditional-of-probability"],
  },
  {
    slug: "subjunctive-wishes-emotions-doubt",
    title: "Subjunctive After Wishes, Emotions and Doubt",
    metaTitle: "Spanish Subjunctive With Querer Que, Me Alegra Que, Dudo Que",
    description:
      "When a wish, feeling or doubt is followed by que and a new subject, Spanish uses the subjunctive. Learn the patterns, the creer/no creer contrast, and when to use an infinitive instead.",
    level: "B1",
    readingLevelPath: "b1",
    intro: [
      "The subjunctive appears in a second clause when the first clause expresses influence (a wish, request or recommendation), an emotional reaction, or doubt. Quiero que vengas: \"I want you to come.\"",
      "The key condition is a change of subject. If the person who wants, feels or doubts is the same as the one who acts, Spanish uses an infinitive instead: Quiero venir.",
    ],
    sections: [
      {
        heading: "Wishes and influence",
        body: [
          "Verbs like querer, desear, esperar, preferir, pedir, recomendar, aconsejar, sugerir, necesitar, prohibir and permitir trigger the subjunctive when they try to influence someone else.",
        ],
        examples: [
          { es: "Quiero que me llames mañana.", en: "I want you to call me tomorrow." },
          { es: "Te recomiendo que pruebes el ceviche.", en: "I recommend you try the ceviche." },
          { es: "Mis padres prefieren que vivamos cerca.", en: "My parents prefer us to live nearby." },
          { es: "Le pido que no llegue tarde.", en: "I'm asking him not to be late." },
        ],
      },
      {
        heading: "Emotions",
        body: [
          "Reactions such as alegrarse de, me alegra, me molesta, me preocupa, me sorprende, siento, tengo miedo de, me encanta, es una pena take the subjunctive, even when the fact is true. The subjunctive shows it's being reacted to, not reported.",
        ],
        examples: [
          { es: "Me alegro de que estés mejor.", en: "I'm glad you're better." },
          { es: "Me molesta que la gente hable en el cine.", en: "It bothers me when people talk in the cinema." },
          { es: "Siento que no puedas venir.", en: "I'm sorry you can't come." },
          { es: "Nos sorprende que no haya nadie.", en: "We're surprised there's nobody here." },
        ],
      },
      {
        heading: "Doubt and denial",
        body: [
          "Dudar, no creer, no pensar, no estar seguro de, negar and no es verdad take the subjunctive. Their affirmative partners (creer, pensar, estar seguro, es verdad) state a belief and take the indicative.",
        ],
        table: {
          headers: ["Belief (indicative)", "Doubt (subjunctive)"],
          rows: [
            ["Creo que tiene razón.", "No creo que tenga razón."],
            ["Pienso que es caro.", "No pienso que sea caro."],
            ["Estoy seguro de que viene.", "No estoy seguro de que venga."],
            ["Es verdad que lo sabe.", "No es verdad que lo sepa."],
            ["No dudo que es buena.", "Dudo que sea buena."],
          ],
        },
      },
      {
        heading: "Same subject: use the infinitive",
        body: [
          "When there's only one subject, drop que and use the infinitive.",
        ],
        examples: [
          { es: "Quiero ir. / Quiero que vayas.", en: "I want to go. / I want you to go." },
          { es: "Me alegro de estar aquí. / Me alegro de que estés aquí.", en: "I'm glad to be here. / I'm glad you're here." },
          { es: "Espero aprobar. / Espero que apruebes.", en: "I hope to pass. / I hope you pass." },
        ],
      },
      {
        heading: "Quizás, tal vez and a lo mejor",
        body: [
          "Quizás and tal vez take the subjunctive for more doubt or the indicative for more certainty. A lo mejor always takes the indicative.",
        ],
        examples: [
          { es: "Quizás llueva mañana.", en: "Maybe it'll rain tomorrow." },
          { es: "A lo mejor llueve mañana.", en: "Maybe it'll rain tomorrow." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Quiero que yo vaya.",
        right: "Quiero ir.",
        why: "With the same subject, use the infinitive.",
      },
      {
        wrong: "No creo que es verdad.",
        right: "No creo que sea verdad.",
        why: "No creer expresses doubt, so it takes the subjunctive.",
      },
      {
        wrong: "Creo que sea verdad.",
        right: "Creo que es verdad.",
        why: "Creer in the affirmative states a belief: indicative.",
      },
      {
        wrong: "Quiero tú vienes.",
        right: "Quiero que vengas.",
        why: "Spanish needs que and a subjunctive where English uses \"want someone to.\"",
      },
    ],
    faqs: [
      {
        q: "Why is \"Me alegro de que estés aquí\" subjunctive if it's true?",
        a: "Because the subjunctive after emotions isn't about truth. It marks the clause as the thing being reacted to rather than new information.",
      },
      {
        q: "Does \"esperar\" always take the subjunctive?",
        a: "When it means \"hope\" with a new subject, yes: Espero que llegues bien. When it means \"expect,\" you'll sometimes hear the future indicative in speech, but the subjunctive is always correct.",
      },
      {
        q: "What about questions like ¿Crees que...?",
        a: "Both are possible. ¿Crees que viene? is neutral; ¿Crees que venga? suggests the speaker has doubts.",
      },
    ],
    related: ["spanish-subjunctive", "subjunctive-impersonal-expressions", "imperfect-subjunctive"],
  },
  {
    slug: "subjunctive-impersonal-expressions",
    title: "Subjunctive After Impersonal Expressions and Ojalá",
    metaTitle: "Es Importante Que + Subjunctive, and Ojalá: Spanish Guide",
    description:
      "Expressions like es importante que, es posible que and ojalá are followed by the subjunctive. Learn which ones take it, which take the indicative (es verdad que), and how ojalá works in every tense.",
    level: "B1",
    readingLevelPath: "b1",
    intro: [
      "Impersonal expressions are phrases built on es + adjective or noun: es necesario, es posible, es una pena. When they judge, evaluate or doubt something, the next clause is in the subjunctive. When they state a fact, it's in the indicative.",
      "Ojalá, from Arabic \"if God wills,\" always takes the subjunctive.",
    ],
    sections: [
      {
        heading: "Expressions that take the subjunctive",
        body: [
          "Necessity, importance, possibility, probability, value judgments and emotion: es necesario, es importante, es fundamental, es mejor, es posible, es probable, puede que, es raro, es normal, es lógico, es una lástima, es increíble.",
        ],
        examples: [
          { es: "Es importante que duermas bien antes del examen.", en: "It's important that you sleep well before the exam." },
          { es: "Es posible que lleguen tarde.", en: "They may be late." },
          { es: "Es normal que estés nervioso.", en: "It's normal for you to be nervous." },
          { es: "Es una pena que no te quedes más.", en: "It's a shame you're not staying longer." },
        ],
      },
      {
        heading: "Expressions of certainty take the indicative",
        body: [
          "Es verdad, es cierto, es evidente, es obvio, está claro and no hay duda de state facts, so they take the indicative. Negated, they express doubt and switch to the subjunctive.",
        ],
        examples: [
          { es: "Es verdad que el piso es pequeño.", en: "It's true the flat is small." },
          { es: "No es verdad que el piso sea pequeño.", en: "It's not true that the flat is small." },
          { es: "Está claro que no quiere venir.", en: "It's clear he doesn't want to come." },
        ],
      },
      {
        heading: "With no specific person: the infinitive",
        body: [
          "If the statement is general, with no particular subject, use the infinitive.",
        ],
        examples: [
          { es: "Es importante dormir bien.", en: "It's important to sleep well." },
          { es: "Es importante que los niños duerman bien.", en: "It's important for children to sleep well." },
        ],
      },
      {
        heading: "Ojalá",
        body: [
          "Ojalá + present subjunctive is a hope for the present or future. Ojalá + imperfect subjunctive is a wish that's unlikely or contrary to fact. Ojalá + pluperfect subjunctive is a regret about the past. The que after ojalá is optional.",
        ],
        examples: [
          { es: "Ojalá (que) haga sol mañana.", en: "I hope it's sunny tomorrow." },
          { es: "Ojalá tuviera más tiempo.", en: "I wish I had more time." },
          { es: "Ojalá hubiera estudiado más.", en: "I wish I had studied more." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Es necesario que llegas pronto.",
        right: "Es necesario que llegues pronto.",
        why: "Necessity triggers the subjunctive.",
      },
      {
        wrong: "Es obvio que sea difícil.",
        right: "Es obvio que es difícil.",
        why: "Expressions of certainty take the indicative.",
      },
      {
        wrong: "Ojalá vienes.",
        right: "Ojalá vengas.",
        why: "Ojalá is always followed by the subjunctive.",
      },
    ],
    faqs: [
      {
        q: "Is \"puede que\" the same as \"es posible que\"?",
        a: "Yes. Puede que llueva (it might rain) is very common in speech, and it also takes the subjunctive.",
      },
      {
        q: "Do people really say ojalá in everyday speech?",
        a: "All the time, across the Spanish-speaking world, often on its own: \"¿Vienes mañana?\" \"¡Ojalá!\"",
      },
    ],
    related: ["subjunctive-wishes-emotions-doubt", "spanish-subjunctive", "imperfect-subjunctive"],
  },
  {
    slug: "vosotros-commands",
    title: "Vosotros and Usted Commands in Spanish",
    metaTitle: "Vosotros Commands (Hablad, No Habléis) and Usted Commands",
    description:
      "How to give commands to a group in Spain (hablad, sentaos, no habléis) and to people you address as usted or ustedes, with irregulars, pronoun placement and the -d drop.",
    level: "B1",
    readingLevelPath: "b1",
    intro: [
      "The tú command guide covers talking to one friend. This one covers everyone else: vosotros (a group of friends, in Spain), usted (one person, formally) and ustedes (a group, formally, and every group in Latin America).",
    ],
    sections: [
      {
        heading: "Affirmative vosotros: replace -r with -d",
        body: [
          "Take the infinitive and change the final -r to -d. There are no irregular forms: even ir gives id and ser gives sed.",
        ],
        table: {
          headers: ["Infinitive", "Affirmative", "Negative"],
          rows: [
            ["hablar", "hablad", "no habléis"],
            ["comer", "comed", "no comáis"],
            ["escribir", "escribid", "no escribáis"],
            ["hacer", "haced", "no hagáis"],
            ["ir", "id", "no vayáis"],
            ["sentarse", "sentaos", "no os sentéis"],
          ],
        },
        examples: [
          { es: "Chicos, abrid los libros.", en: "Kids, open your books." },
          { es: "Venid a cenar el sábado.", en: "Come for dinner on Saturday." },
        ],
      },
      {
        heading: "The -d drops before os",
        body: [
          "With reflexive verbs, the -d disappears before os: levantad + os = levantaos. -ir verbs add an accent: vestíos, idos (the one exception that keeps the d). In speech, many people in Spain use the infinitive instead (¡Sentaros!), which is common but considered incorrect in writing.",
        ],
        examples: [
          { es: "Levantaos, que es tarde.", en: "Get up, it's late." },
          { es: "Poneos las chaquetas.", en: "Put your jackets on." },
          { es: "Divertíos mucho.", en: "Have lots of fun." },
        ],
      },
      {
        heading: "Negative commands use the subjunctive",
        body: [
          "All negative commands, and all usted/ustedes commands, use present subjunctive forms.",
        ],
        examples: [
          { es: "No toquéis nada.", en: "Don't touch anything (you all)." },
          { es: "No os preocupéis.", en: "Don't worry (you all)." },
        ],
      },
      {
        heading: "Usted and ustedes",
        body: [
          "Use the present subjunctive for both affirmative and negative. Pronouns attach to affirmative commands and go before negative ones.",
        ],
        table: {
          headers: ["Infinitive", "usted", "ustedes"],
          rows: [
            ["pasar", "pase", "pasen"],
            ["tener", "tenga", "tengan"],
            ["ir", "vaya", "vayan"],
            ["sentarse", "siéntese", "siéntense"],
            ["decir (neg.)", "no me diga", "no me digan"],
          ],
        },
        examples: [
          { es: "Pase, por favor. Siéntese.", en: "Come in, please. Take a seat." },
          { es: "Tomen la segunda calle a la derecha.", en: "Take the second street on the right (you all)." },
          { es: "No se preocupe.", en: "Don't worry." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "No hablad.",
        right: "No habléis.",
        why: "Negative vosotros commands use the subjunctive.",
      },
      {
        wrong: "Sentados. / Sentados os.",
        right: "Sentaos.",
        why: "The -d drops before os: sentad + os = sentaos.",
      },
      {
        wrong: "Se siente, por favor.",
        right: "Siéntese, por favor.",
        why: "Pronouns attach to the end of affirmative commands.",
      },
    ],
    faqs: [
      {
        q: "Do I need vosotros commands in Latin America?",
        a: "No. Latin American Spanish uses ustedes commands for every group: Siéntense, chicos.",
      },
      {
        q: "Are formal commands rude?",
        a: "Not at all; they're the standard way to give instructions in shops, offices and signs. Adding por favor, or using a question (¿Podría...?), softens them further.",
      },
    ],
    related: ["spanish-commands", "spanish-subject-pronouns", "register-and-politeness"],
  },
  {
    slug: "relative-pronouns",
    title: "Spanish Relative Pronouns: Que, Quien, El Que, Lo Que",
    metaTitle: "Spanish Relative Pronouns: Que, Quien, Lo Que, Donde",
    description:
      "How to join sentences in Spanish with que, quien, el que, lo que and donde: which to use, what happens after prepositions, and why que can never be left out.",
    level: "B1",
    readingLevelPath: "b1",
    intro: [
      "Relative pronouns join two ideas about the same thing: \"the book that I bought,\" \"the woman who called.\" In Spanish the all-purpose relative is que, and it can never be dropped as \"that\" often is in English.",
    ],
    sections: [
      {
        heading: "Que: the default",
        body: [
          "Que works for people and things, as subject or object: who, that, which. Use it whenever there's no preposition in front.",
        ],
        examples: [
          { es: "El libro que compré es muy bueno.", en: "The book (that) I bought is very good." },
          { es: "La chica que vive arriba es médica.", en: "The girl who lives upstairs is a doctor." },
          { es: "Es una película que te va a encantar.", en: "It's a film you're going to love." },
        ],
      },
      {
        heading: "After a preposition: el que, la que, quien",
        body: [
          "After a preposition, use the article + que (agreeing with the noun) for people and things, or quien/quienes for people. After short prepositions like en and con, plain que is also common for things.",
          "The preposition always moves to the front of the relative; it can't be left at the end as in English.",
        ],
        examples: [
          { es: "La empresa para la que trabajo es alemana.", en: "The company I work for is German." },
          { es: "El amigo con el que viajé / con quien viajé", en: "The friend I travelled with" },
          { es: "Los chicos a los que conocí ayer", en: "The guys I met yesterday" },
          { es: "La casa en (la) que nací", en: "The house I was born in" },
        ],
      },
      {
        heading: "Lo que: what, which",
        body: [
          "Lo que refers to an idea, not a specific noun: \"what\" at the start of a clause, or \"which\" referring back to a whole situation.",
        ],
        examples: [
          { es: "Lo que necesito es dormir.", en: "What I need is sleep." },
          { es: "No entiendo lo que dices.", en: "I don't understand what you're saying." },
          { es: "Llegó tarde, lo que me molestó.", en: "He arrived late, which annoyed me." },
        ],
      },
      {
        heading: "Donde, cuando, como",
        body: [
          "Donde refers to places (en el que also works), cuando to times, como to manner. Without accents, because they're not questions.",
        ],
        examples: [
          { es: "Es el bar donde nos conocimos.", en: "It's the bar where we met." },
          { es: "Fue en verano cuando todo cambió.", en: "It was in summer that everything changed." },
          { es: "Me gusta la manera como lo explica.", en: "I like the way she explains it." },
        ],
      },
      {
        heading: "Quien as a subject",
        body: [
          "Quien is not used as the subject of a defining clause: el hombre que llamó, not el hombre quien llamó. It does appear after a comma (non-defining) and in general statements: Quien mucho abarca, poco aprieta.",
        ],
        examples: [
          { es: "Mi jefa, quien viaja mucho, está en Tokio.", en: "My boss, who travels a lot, is in Tokyo." },
          { es: "Quien quiera venir, que venga.", en: "Whoever wants to come can come." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "El libro compré es bueno.",
        right: "El libro que compré es bueno.",
        why: "Spanish can never drop que.",
      },
      {
        wrong: "La chica quien vive aquí.",
        right: "La chica que vive aquí.",
        why: "In a defining clause with no comma or preposition, use que.",
      },
      {
        wrong: "Es el hombre que hablé con.",
        right: "Es el hombre con el que hablé.",
        why: "The preposition must go before the relative pronoun.",
      },
      {
        wrong: "Que necesito es tiempo.",
        right: "Lo que necesito es tiempo.",
        why: "\"What\" meaning \"the thing that\" is lo que.",
      },
    ],
    faqs: [
      {
        q: "What about el cual and cuyo?",
        a: "They're more formal relatives used mainly in writing. See the guide on cuyo and el cual.",
      },
      {
        q: "Is it \"que\" or \"qué\"?",
        a: "Relative que has no accent. Qué with an accent asks a question or exclaims: ¿Qué quieres? ¡Qué bonito!",
      },
    ],
    related: ["cuyo-and-el-cual", "subjunctive-adjective-clauses", "prepositions-a-en-de-con"],
  },
  {
    slug: "passive-and-impersonal-se",
    title: "Passive Se, Impersonal Se and the Passive Voice",
    metaTitle: "Spanish Passive Voice: Se Vende, Se Habla and Ser + Participle",
    description:
      "How Spanish expresses the passive: se venden casas, se habla español, the ser + participle passive, and the accidental se (se me olvidó). With agreement rules and common mistakes.",
    level: "B1",
    readingLevelPath: "b1",
    intro: [
      "English uses the passive a lot: \"English is spoken,\" \"Houses for sale,\" \"It was built in 1900.\" Spanish has a passive with ser, but in everyday language it much prefers a construction with se.",
    ],
    sections: [
      {
        heading: "Passive se: the verb agrees with the thing",
        body: [
          "Se + third-person verb + noun. The verb is singular with a singular noun and plural with a plural noun, because the noun is the grammatical subject.",
        ],
        examples: [
          { es: "Se vende piso.", en: "Flat for sale." },
          { es: "Se venden pisos.", en: "Flats for sale." },
          { es: "Aquí se habla español.", en: "Spanish is spoken here." },
          { es: "Se construyeron dos puentes nuevos.", en: "Two new bridges were built." },
        ],
      },
      {
        heading: "Impersonal se: people in general",
        body: [
          "When there's no noun subject (with intransitive verbs, or a person introduced by a), the verb stays singular. It means \"people\" or \"one\" in general.",
        ],
        examples: [
          { es: "Se vive bien en esta ciudad.", en: "People live well in this city." },
          { es: "¿Cómo se dice \"thank you\" en español?", en: "How do you say \"thank you\" in Spanish?" },
          { es: "Se busca a los responsables.", en: "Those responsible are being sought." },
          { es: "Se trabaja mucho aquí.", en: "People work a lot here." },
        ],
      },
      {
        heading: "The ser passive",
        body: [
          "Ser + past participle (agreeing with the subject) + por + agent. It's used in news, history and formal writing, especially when the agent is mentioned. The passive se can't take a por phrase.",
        ],
        examples: [
          { es: "El puente fue construido en 1890.", en: "The bridge was built in 1890." },
          { es: "La novela fue escrita por García Márquez.", en: "The novel was written by García Márquez." },
          { es: "Los detenidos serán juzgados la semana próxima.", en: "The detainees will be tried next week." },
        ],
      },
      {
        heading: "Accidents: se me olvidó",
        body: [
          "Se + indirect object pronoun + verb presents an accident as something that happened to you. The verb agrees with the thing, and the pronoun shows who it affected.",
        ],
        examples: [
          { es: "Se me olvidaron las llaves.", en: "I forgot my keys. (They slipped my mind.)" },
          { es: "Se nos rompió el coche.", en: "Our car broke down." },
          { es: "¿Se te cayó algo?", en: "Did you drop something?" },
        ],
      },
      {
        heading: "Other ways to avoid naming the agent",
        body: [
          "Spanish also uses the third-person plural with no subject, like English \"they\": Dicen que va a llover. And uno + verb for \"one/you\": Uno nunca sabe.",
        ],
        examples: [
          { es: "Me han robado la cartera.", en: "My wallet has been stolen." },
          { es: "Uno se acostumbra.", en: "You get used to it." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Se vende coches.",
        right: "Se venden coches.",
        why: "In the passive se, the verb agrees with the plural noun.",
      },
      {
        wrong: "Se construyó la casa por mi abuelo.",
        right: "La casa fue construida por mi abuelo. / La construyó mi abuelo.",
        why: "The passive se doesn't take a por + agent phrase.",
      },
      {
        wrong: "Yo olvidé accidentalmente mis llaves.",
        right: "Se me olvidaron las llaves.",
        why: "Not wrong grammatically, but for accidents Spanish naturally uses se + pronoun.",
      },
    ],
    faqs: [
      {
        q: "Is \"se alquilan habitaciones\" or \"se alquila habitaciones\" correct?",
        a: "Se alquilan habitaciones. The singular with a plural noun is common in signs, but the Real Academia considers it incorrect.",
      },
      {
        q: "Is the ser passive unnatural?",
        a: "Not in writing, especially journalism. In conversation, se or an active sentence usually sounds more natural.",
      },
    ],
    related: ["reflexive-verbs", "direct-and-indirect-object-pronouns", "leismo-laismo-loismo"],
  },
  {
    slug: "verbs-with-prepositions",
    title: "Spanish Verbs With Prepositions",
    metaTitle: "Spanish Verbs + Preposition: Pensar En, Soñar Con, Depender De",
    description:
      "Many Spanish verbs need a fixed preposition (pensar en, soñar con, depender de, tratar de). Learn the most common ones grouped by preposition, and the pairs that don't match English.",
    level: "B1",
    readingLevelPath: "b1",
    intro: [
      "Some verbs are always followed by a particular preposition, and it's rarely the one English would use. You think \"about\" something in English, but pensar en in Spanish; you dream \"of\" something, but soñar con.",
      "These have to be learned verb by verb. Grouping them by preposition helps.",
    ],
    sections: [
      {
        heading: "Verbs with a",
        body: [
          "Many verbs of motion, beginning and learning take a before an infinitive.",
        ],
        examples: [
          { es: "Empiezo a entender.", en: "I'm starting to understand." },
          { es: "Aprendió a nadar de mayor.", en: "She learned to swim as an adult." },
          { es: "Me ayudó a mudarme.", en: "He helped me move." },
          { es: "Se acostumbró a vivir sola.", en: "She got used to living alone." },
          { es: "Volvió a llamar.", en: "He called again." },
        ],
      },
      {
        heading: "Verbs with de",
        body: [
          "Acordarse de, olvidarse de, depender de, tratar de, dejar de, enamorarse de, quejarse de, darse cuenta de, disfrutar de.",
        ],
        examples: [
          { es: "¿Te acuerdas de mí?", en: "Do you remember me?" },
          { es: "Depende del tiempo.", en: "It depends on the weather." },
          { es: "Trata de llegar temprano.", en: "Try to arrive early." },
          { es: "Dejé de fumar hace un año.", en: "I stopped smoking a year ago." },
          { es: "No me di cuenta del error.", en: "I didn't notice the mistake." },
        ],
      },
      {
        heading: "Verbs with en and con",
        body: [
          "En: pensar en, confiar en, insistir en, tardar en, fijarse en, quedar en. Con: soñar con, casarse con, contar con, quedar con (meet up with), bastar con.",
        ],
        examples: [
          { es: "Siempre pienso en ti.", en: "I always think about you." },
          { es: "Insistió en pagar.", en: "She insisted on paying." },
          { es: "Tardamos dos horas en llegar.", en: "It took us two hours to get there." },
          { es: "Sueño con vivir junto al mar.", en: "I dream of living by the sea." },
          { es: "Se casó con su vecino.", en: "She married her neighbor." },
          { es: "Cuenta conmigo.", en: "Count on me." },
        ],
      },
      {
        heading: "English prepositions that Spanish doesn't need",
        body: [
          "Some verbs that take a preposition in English take a direct object in Spanish: buscar (look for), esperar (wait for), escuchar (listen to), mirar (look at), pagar (pay for), pedir (ask for).",
        ],
        examples: [
          { es: "Busco mis gafas.", en: "I'm looking for my glasses." },
          { es: "Te espero en la puerta.", en: "I'll wait for you at the door." },
          { es: "¿Quién paga la cena?", en: "Who's paying for dinner?" },
        ],
      },
      {
        heading: "The preposition stays before que",
        body: [
          "When the verb is followed by a clause, the preposition stays: Me acuerdo de que..., Insisto en que... Dropping it (me acuerdo que) is common in speech in some regions. Adding a de that doesn't belong (pienso de que) is a well-known error called dequeísmo.",
        ],
        examples: [
          { es: "Me di cuenta de que era tarde.", en: "I realized it was late." },
          { es: "Pienso que tienes razón.", en: "I think you're right." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Estoy pensando sobre ti.",
        right: "Estoy pensando en ti.",
        why: "Pensar takes en when you mean \"think about.\" (Pensar de means \"have an opinion of\": ¿Qué piensas de él?)",
      },
      {
        wrong: "Busco para mi hermano.",
        right: "Busco a mi hermano.",
        why: "Buscar needs no preposition; add only the personal a for a person.",
      },
      {
        wrong: "Me casé a ella.",
        right: "Me casé con ella.",
        why: "Casarse takes con.",
      },
      {
        wrong: "Creo de que...",
        right: "Creo que...",
        why: "Creer and pensar take que directly. Adding de is dequeísmo.",
      },
    ],
    faqs: [
      {
        q: "How can I tell if it's queísmo or dequeísmo?",
        a: "Turn the clause into \"eso.\" If the verb needs de before eso (me acuerdo de eso), it needs de que. If not (creo eso), just que.",
      },
      {
        q: "Is there a list I should memorize?",
        a: "Learn the verbs in this guide first; they cover most everyday speech. Then note the preposition every time you learn a new verb.",
      },
    ],
    related: ["prepositions-a-en-de-con", "por-vs-para", "spanish-verb-periphrases"],
  },
  {
    slug: "spanish-verb-periphrases",
    title: "Spanish Verb Periphrases: Ir a, Acabar de, Volver a, Llevar + Gerund",
    metaTitle: "Spanish Verbal Periphrases: Acabar De, Soler, Llevar, Seguir",
    description:
      "Periphrases are verb + infinitive or gerund combinations that add timing and attitude: ir a, acabar de, volver a, soler, tener que, llevar/seguir + gerund. Learn the key ones with examples.",
    level: "B1",
    readingLevelPath: "b1",
    intro: [
      "A periphrasis (perífrasis verbal) is a conjugated helper verb plus an infinitive, gerund or participle, working together as one idea. Voy a comer, acabo de comer and sigo comiendo all use comer, but each says something different about when and how.",
      "They're how Spanish expresses many ideas English handles with adverbs: \"again,\" \"just,\" \"still,\" \"usually,\" \"for two hours.\"",
    ],
    sections: [
      {
        heading: "With an infinitive: time and phase",
        body: [
          "Ir a (going to), acabar de (have just), empezar a / ponerse a (start), dejar de (stop), volver a (again), estar a punto de (be about to).",
        ],
        examples: [
          { es: "Voy a llamarla esta noche.", en: "I'm going to call her tonight." },
          { es: "Acabo de llegar.", en: "I've just arrived." },
          { es: "Se puso a llorar.", en: "She burst out crying." },
          { es: "Volvió a suspender.", en: "He failed again." },
          { es: "Estábamos a punto de salir.", en: "We were about to leave." },
        ],
      },
      {
        heading: "With an infinitive: obligation and habit",
        body: [
          "Tener que (have to, personal obligation), hay que (one has to, general), deber (should, must), deber de (must, probability), soler (usually, as a habit; only in present and imperfect).",
        ],
        examples: [
          { es: "Tengo que estudiar.", en: "I have to study." },
          { es: "Hay que tener paciencia.", en: "You have to be patient." },
          { es: "Deberías llamarlo.", en: "You should call him." },
          { es: "Deben de ser las cinco.", en: "It must be about five." },
          { es: "Suelo cenar tarde.", en: "I usually have dinner late." },
          { es: "Solíamos ir al pueblo.", en: "We used to go to the village." },
        ],
      },
      {
        heading: "With a gerund: ongoing actions",
        body: [
          "Estar (be doing), seguir / continuar (still be doing, keep doing), llevar + time (have been doing for), ir (gradually), andar (going around doing, often negative).",
        ],
        examples: [
          { es: "Sigue lloviendo.", en: "It's still raining." },
          { es: "Llevo tres años estudiando español.", en: "I've been studying Spanish for three years." },
          { es: "Poco a poco voy entendiendo.", en: "Little by little I'm getting it." },
          { es: "Anda diciendo mentiras.", en: "He goes around telling lies." },
        ],
      },
      {
        heading: "With a participle: results",
        body: [
          "Tener + participle (agreeing) stresses an accumulated result. Llevar + participle counts how much is done. Dejar + participle leaves something in a state.",
        ],
        examples: [
          { es: "Tengo leídos tres capítulos.", en: "I've got three chapters read." },
          { es: "Llevo corregidos veinte exámenes.", en: "I've marked twenty exams so far." },
          { es: "Dejé la cena preparada.", en: "I left dinner ready." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Acabo llegar.",
        right: "Acabo de llegar.",
        why: "Acabar needs de to mean \"have just.\"",
      },
      {
        wrong: "Estudio español por tres años.",
        right: "Llevo tres años estudiando español. / Estudio español desde hace tres años.",
        why: "For something still going on, Spanish uses llevar + gerund or the present with desde hace, not \"por.\"",
      },
      {
        wrong: "Solí ir.",
        right: "Solía ir.",
        why: "Soler describes habits, so it's used only in the present and imperfect.",
      },
    ],
    faqs: [
      {
        q: "What's the difference between deber and deber de?",
        a: "Traditionally, deber + infinitive is obligation (Debes descansar) and deber de + infinitive is probability (Debe de estar cansado). In speech the two are often mixed, but keeping them apart is the standard.",
      },
      {
        q: "Is \"hace tres años que estudio\" the same as \"llevo tres años estudiando\"?",
        a: "Yes, both mean \"I've been studying for three years.\" Desde hace is a third option: Estudio desde hace tres años.",
      },
    ],
    related: ["present-progressive", "gerund-vs-infinitive", "verbs-with-prepositions"],
  },
];
