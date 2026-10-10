// Synced from cheneygross-afk/lengo:src/lib/grammar/guides-c1.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { GrammarGuide } from "./types";

export const C1_GUIDES: GrammarGuide[] = [
  {
    slug: "concessive-clauses-aunque",
    title: "Aunque With the Indicative or Subjunctive",
    metaTitle: "Aunque + Indicative or Subjunctive",
    description:
      "Aunque llueve or aunque llueva? How the mood after aunque changes the meaning, plus a pesar de que, por mucho que, por más que and si bien.",
    level: "C1",
    readingLevelPath: "c1c2",
    intro: [
      "Aunque (although, even though, even if) can be followed by the indicative or the subjunctive, and the choice is meaningful. The indicative presents the obstacle as a fact you're reporting. The subjunctive presents it as hypothetical, or as something already known that you don't consider relevant.",
    ],
    sections: [
      {
        heading: "The three meanings",
        body: [
          "Indicative: a fact the listener may not know. Present subjunctive: a possibility, or a known fact the speaker dismisses. Imperfect subjunctive: a situation contrary to reality.",
        ],
        table: {
          headers: ["Sentence", "Meaning"],
          rows: [
            ["Aunque llueve, salgo.", "It is raining (I'm telling you), but I'm going out."],
            ["Aunque llueva, salgo.", "Even if it rains / Rain or not, I'm going out."],
            ["Aunque lloviera, saldría.", "Even if it rained (it isn't), I'd go out."],
            ["Aunque hubiera llovido, habría salido.", "Even if it had rained (it didn't), I'd have gone out."],
          ],
        },
      },
      {
        heading: "The dismissive subjunctive",
        body: [
          "The subjunctive after aunque can refer to something both speakers know is true. It signals \"that doesn't matter.\" This is the use that most surprises learners.",
        ],
        examples: [
          { es: "—Es tu jefe. —Aunque sea mi jefe, no tiene derecho a gritarme.", en: "—He's your boss. —Even if he is my boss, he has no right to shout at me." },
          { es: "Aunque no te guste, tienes que ir.", en: "Whether you like it or not, you have to go." },
        ],
      },
      {
        heading: "Other concessive structures",
        body: [
          "A pesar de que and pese a que follow the same mood rules as aunque. Si bien (formal) always takes the indicative. Por mucho que, por más que, por muy + adjective + que usually take the subjunctive.",
        ],
        examples: [
          { es: "A pesar de que estaba cansada, terminó el informe.", en: "Although she was tired, she finished the report." },
          { es: "Por mucho que insistas, no voy a cambiar de opinión.", en: "However much you insist, I'm not going to change my mind." },
          { es: "Por muy rico que sea, no puede comprarlo todo.", en: "However rich he may be, he can't buy everything." },
          { es: "Si bien el plan es ambicioso, es viable.", en: "While the plan is ambitious, it's feasible." },
        ],
      },
      {
        heading: "Reduplicated and universal concessives",
        body: [
          "Subjunctive + relative + same subjunctive expresses \"whatever,\" \"whoever,\" \"wherever\": diga lo que diga, pase lo que pase, sea como sea, vayas donde vayas.",
        ],
        examples: [
          { es: "Pase lo que pase, te llamo.", en: "Whatever happens, I'll call you." },
          { es: "Digan lo que digan, lo haré.", en: "Whatever they say, I'll do it." },
          { es: "Sea como sea, hay que terminarlo hoy.", en: "One way or another, it has to be finished today." },
        ],
      },
      {
        heading: "Concessive markers between sentences",
        body: [
          "Aun así, con todo, de todas formas, de todos modos and así y todo concede and move on.",
        ],
        examples: [
          { es: "El sueldo es bajo. Aun así, acepté el puesto.", en: "The salary is low. Even so, I accepted the job." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Aunque tendré tiempo, no iré.",
        right: "Aunque tenga tiempo, no iré.",
        why: "To mean \"even if I have time\", use the present subjunctive. Aunque tendré tiempo only works as news (\"even though I will have time\").",
      },
      {
        wrong: "Por mucho que estudias, no apruebas.",
        right: "Por mucho que estudies, no apruebas.",
        why: "Por mucho que normally takes the subjunctive; the indicative is possible for a known fact, but the subjunctive is the safer default.",
      },
      {
        wrong: "Si bien sea difícil...",
        right: "Si bien es difícil...",
        why: "Si bien always takes the indicative.",
      },
    ],
    faqs: [
      {
        q: "Is \"aunque\" ever \"but\"?",
        a: "Yes, after a comma in speech it can soften a statement like \"though\": Es caro, aunque vale la pena.",
      },
      {
        q: "Which is more common, aunque + indicative or subjunctive?",
        a: "Both are very frequent. Ask whether you're informing the listener of a fact (indicative) or treating the obstacle as irrelevant or hypothetical (subjunctive).",
      },
    ],
    related: ["subjunctive-adverbial-clauses", "spanish-connectors", "discourse-markers"],
  },
  {
    slug: "gerund-vs-infinitive",
    title: "Gerund vs. Infinitive in Spanish",
    metaTitle: "Spanish Gerund vs. Infinitive",
    description:
      "English \"-ing\" often becomes a Spanish infinitive. Learn when Spanish uses the infinitive and when the gerund, and the gerund errors examiners mark.",
    level: "C1",
    readingLevelPath: "c1c2",
    intro: [
      "English \"-ing\" does many jobs: noun (\"Smoking kills\"), after prepositions (\"before leaving\"), adjective (\"a talking parrot\"), and verb (\"I'm talking\"). Spanish splits these between the infinitive and the gerund, and the gerund covers far fewer of them.",
      "The key rule: when \"-ing\" works like a noun, Spanish uses the infinitive.",
    ],
    sections: [
      {
        heading: "The infinitive as a noun",
        body: [
          "As a subject or object, use the infinitive, optionally with el.",
        ],
        examples: [
          { es: "(El) fumar es malo para la salud.", en: "Smoking is bad for your health." },
          { es: "Me encanta bailar.", en: "I love dancing." },
          { es: "Prohibido aparcar.", en: "No parking." },
        ],
      },
      {
        heading: "After prepositions: always the infinitive",
        body: [
          "Spanish never puts a gerund after a preposition. Al + infinitive means \"when/on doing.\"",
        ],
        examples: [
          { es: "Antes de salir, apaga la luz.", en: "Before leaving, turn off the light." },
          { es: "Gracias por venir.", en: "Thanks for coming." },
          { es: "Estoy cansado de esperar.", en: "I'm tired of waiting." },
          { es: "Al llegar, me di cuenta del error.", en: "On arriving, I noticed the mistake." },
        ],
      },
      {
        heading: "The gerund: manner, means and simultaneity",
        body: [
          "The gerund describes how something is done, or an action happening at the same time as the main verb. It also forms the progressive and other periphrases.",
        ],
        examples: [
          { es: "Aprendí español viendo series.", en: "I learned Spanish by watching series." },
          { es: "Salió corriendo.", en: "He ran out." },
          { es: "Llegó a casa llorando.", en: "She came home crying." },
          { es: "Estudiando así, aprobarás.", en: "If you study like that, you'll pass." },
        ],
      },
      {
        heading: "Gerund errors to avoid",
        body: [
          "Don't use the gerund as an adjective after a noun (una caja conteniendo libros); use a relative clause. Don't use it for an action that happens after the main verb (the gerundio de posterioridad): Estudió en Salamanca, obteniendo el título en 2010 is considered incorrect.",
          "An accepted exception is the caption use (Niños jugando en el parque) and a few fixed forms: agua hirviendo, un clavo ardiendo.",
        ],
        examples: [
          { es: "una caja que contiene libros", en: "a box containing books" },
          { es: "Estudió en Salamanca, donde obtuvo el título en 2010.", en: "She studied in Salamanca, where she got her degree in 2010." },
          { es: "Se necesita personal que hable inglés.", en: "Staff speaking English needed." },
        ],
      },
      {
        heading: "Verbs of perception",
        body: [
          "After ver, oír, escuchar and sentir, the infinitive presents the whole action and the gerund presents it in progress.",
        ],
        examples: [
          { es: "La vi cruzar la calle.", en: "I saw her cross the street." },
          { es: "La vi cruzando la calle.", en: "I saw her crossing the street." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Nadando es mi deporte favorito.",
        right: "Nadar es mi deporte favorito.",
        why: "As a subject, \"-ing\" is an infinitive in Spanish.",
      },
      {
        wrong: "después de comiendo",
        right: "después de comer",
        why: "Prepositions are always followed by the infinitive.",
      },
      {
        wrong: "Tuvo un accidente, muriendo horas después.",
        right: "Tuvo un accidente y murió horas después.",
        why: "A gerund can't express an action that happens after the main one.",
      },
      {
        wrong: "Una ley regulando el alquiler",
        right: "Una ley que regula el alquiler",
        why: "Don't use a gerund as an adjective after a noun.",
      },
    ],
    faqs: [
      {
        q: "Why do I see the gerund as an adjective in newspapers?",
        a: "Because of translation from English. Style guides at Spanish newspapers flag it as an anglicism.",
      },
      {
        q: "Can a gerund begin a sentence?",
        a: "Yes, for manner, cause or condition: Siendo así, no voy (That being the case, I'm not going).",
      },
    ],
    related: ["present-progressive", "spanish-verb-periphrases", "nominalization"],
  },
  {
    slug: "future-and-conditional-of-probability",
    title: "The Future and Conditional of Probability",
    metaTitle: "Spanish Future of Probability: ¿Dónde Estará?",
    description:
      "Spanish uses the future to guess about the present (Estará en casa) and the conditional to guess about the past (Serían las tres). Learn the full system.",
    level: "C1",
    readingLevelPath: "c1c2",
    intro: [
      "In Spanish, the future and conditional don't only talk about time. They also express conjecture: what you suppose is true. ¿Dónde estará Juan? doesn't ask where he will be; it wonders where he is.",
      "Each tense shifts one step back in time when used this way.",
    ],
    sections: [
      {
        heading: "The system",
        body: [
          "Match the tense to the time you're guessing about.",
        ],
        table: {
          headers: ["Guess about", "Tense", "Example", "Meaning"],
          rows: [
            ["the present", "simple future", "Estará en casa.", "He's probably at home."],
            ["the recent past", "future perfect", "Habrá salido.", "She must have gone out."],
            ["the past", "conditional", "Serían las tres.", "It must have been about three."],
            ["before a past moment", "conditional perfect", "Ya habría terminado.", "He must already have finished."],
          ],
        },
      },
      {
        heading: "Wondering questions",
        body: [
          "In questions, the future and conditional express \"I wonder.\"",
        ],
        examples: [
          { es: "¿Qué hora será?", en: "I wonder what time it is." },
          { es: "¿Quién habrá llamado a estas horas?", en: "Who could have called at this hour?" },
          { es: "¿Por qué no vendría?", en: "I wonder why he didn't come." },
        ],
      },
      {
        heading: "Alternatives with different certainty",
        body: [
          "Deber de + infinitive, seguramente, probablemente, a lo mejor and quizás are other ways to guess. The future of probability sounds natural and slightly more confident than quizás.",
        ],
        examples: [
          { es: "Debe de tener unos cuarenta años. / Tendrá unos cuarenta años.", en: "He must be about forty." },
          { es: "Seguramente está en el atasco. / Estará en el atasco.", en: "She's probably stuck in traffic." },
        ],
      },
      {
        heading: "The concessive future",
        body: [
          "The future (and conditional) can concede a point before a pero: \"it may be ... but.\"",
        ],
        examples: [
          { es: "Será muy listo, pero no sabe trabajar en equipo.", en: "He may be very clever, but he can't work in a team." },
          { es: "Tendría mucho dinero, pero era infeliz.", en: "He may have had a lot of money, but he was unhappy." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "—¿Dónde está? —Estaría en casa. (about now)",
        right: "—¿Dónde está? —Estará en casa.",
        why: "A guess about the present uses the future, not the conditional.",
      },
      {
        wrong: "Serán las tres cuando llegó.",
        right: "Serían las tres cuando llegó.",
        why: "A guess about the past uses the conditional.",
      },
    ],
    faqs: [
      {
        q: "How do I know if \"estará\" is a prediction or a guess?",
        a: "Context. With a future time word (mañana estará) it's a prediction. Without one, especially in answer to a question about now, it's usually a guess.",
      },
      {
        q: "Is this used in speech or only in writing?",
        a: "Constantly in speech, all over the Spanish-speaking world. ¿Qué será? and Estará ocupado are everyday phrases.",
      },
    ],
    related: ["spanish-future-tense", "spanish-conditional-tense", "concessive-clauses-aunque"],
  },
  {
    slug: "discourse-markers",
    title: "Discourse Markers in Spanish: Pues, O Sea, Es Decir, De Hecho",
    metaTitle: "Spanish Discourse Markers: Pues, Bueno, O Sea",
    description:
      "Small words that make Spanish sound fluent: o sea, es decir, pues, bueno, vale, oye, de hecho, en realidad, por cierto, and how to use them naturally.",
    level: "C1",
    readingLevelPath: "c1c2",
    intro: [
      "Discourse markers don't add content; they organize it and signal attitude. \"Well,\" \"I mean,\" \"actually\" and \"anyway\" do this in English. Using Spanish equivalents well is one of the clearest differences between an advanced learner and a fluent speaker.",
      "They're also context-sensitive: some belong in conversation, others in writing.",
    ],
    sections: [
      {
        heading: "Reformulating: saying it another way",
        body: [
          "Es decir (that is) is neutral. O sea is its conversational twin. Mejor dicho corrects yourself. En otras palabras restates.",
        ],
        examples: [
          { es: "Llegará el 15, es decir, dentro de dos semanas.", en: "She'll arrive on the 15th, that is, in two weeks." },
          { es: "No me apetece, o sea, que no voy.", en: "I don't feel like it, I mean, I'm not going." },
          { es: "Son tres, mejor dicho, cuatro.", en: "There are three, or rather, four." },
        ],
      },
      {
        heading: "Reinforcing and correcting",
        body: [
          "De hecho (in fact) adds evidence. En realidad and la verdad es que correct an impression. Al fin y al cabo (after all) gives the deciding argument.",
        ],
        examples: [
          { es: "No es caro; de hecho, es más barato que el otro.", en: "It isn't expensive; in fact, it's cheaper than the other one." },
          { es: "Parece serio, pero en realidad es muy divertido.", en: "He seems serious, but actually he's very funny." },
          { es: "Al fin y al cabo, es tu decisión.", en: "After all, it's your decision." },
        ],
      },
      {
        heading: "Conversational markers",
        body: [
          "Pues introduces an answer or reaction. Bueno accepts, hesitates or changes topic. Vale (Spain) and dale (Río de la Plata) agree. Oye and mira get attention. Por cierto brings in a side topic. En fin wraps up or sighs.",
        ],
        examples: [
          { es: "—¿Vienes? —Pues no sé, depende.", en: "—Are you coming? —Well, I don't know, it depends." },
          { es: "Bueno, vamos a empezar.", en: "Right, let's get started." },
          { es: "Por cierto, ¿has visto a Laura?", en: "By the way, have you seen Laura?" },
          { es: "En fin, así es la vida.", en: "Oh well, that's life." },
          { es: "Oye, ¿me pasas la sal?", en: "Hey, can you pass the salt?" },
        ],
      },
      {
        heading: "Structuring an argument",
        body: [
          "In essays and presentations: en primer lugar, por otra parte, asimismo (likewise), en cuanto a (as for), cabe destacar que (it's worth noting), dicho esto (that said), en definitiva (ultimately).",
        ],
        examples: [
          { es: "En cuanto al presupuesto, cabe destacar que se ha reducido un 10 %.", en: "As for the budget, it's worth noting that it has been cut by 10%." },
          { es: "Dicho esto, el proyecto sigue siendo viable.", en: "That said, the project is still feasible." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Actualmente, no estoy de acuerdo.",
        right: "En realidad, no estoy de acuerdo.",
        why: "Actualmente means \"currently.\" \"Actually\" is en realidad or la verdad es que.",
      },
      {
        wrong: "O sea, en conclusión, el estudio demuestra...",
        right: "En conclusión, el estudio demuestra...",
        why: "O sea is conversational; don't use it in formal writing.",
      },
      {
        wrong: "Eventualmente lo entenderás.",
        right: "Al final lo entenderás. / Tarde o temprano lo entenderás.",
        why: "Eventualmente means \"possibly, occasionally,\" not \"eventually.\"",
      },
    ],
    faqs: [
      {
        q: "Is overusing o sea or pues a problem?",
        a: "In moderation they make you sound natural. Filling every pause with them sounds as tic-like as \"like\" in English.",
      },
      {
        q: "Are markers different between countries?",
        a: "Some are regional: vale (Spain), dale and che (Argentina), órale (Mexico), pues (very frequent in Mexico and Colombia at sentence end). Es decir, de hecho and por cierto are universal.",
      },
    ],
    related: ["spanish-connectors", "register-and-politeness", "concessive-clauses-aunque"],
  },
  {
    slug: "register-and-politeness",
    title: "Register and Politeness in Spanish: Tú, Usted and Softening",
    metaTitle: "Formal vs. Informal Spanish: Tú, Usted, Vos",
    description:
      "How formality works in Spanish: tú, usted or vos by country, softening requests with the conditional and imperfect, formal emails, and switching register.",
    level: "C1",
    readingLevelPath: "c1c2",
    intro: [
      "Register is the level of formality you choose. In Spanish it shows up in the form of address (tú, vos, usted), in verb tenses used to soften requests, and in vocabulary and fixed formulas.",
      "Norms vary widely by country and generation, so the most useful skill is noticing how people address you and adjusting.",
    ],
    sections: [
      {
        heading: "Tú, vos and usted across the Spanish-speaking world",
        body: [
          "Spain uses tú widely, even with strangers of similar age and in many workplaces; usted signals respect or distance. Mexico and Peru use usted more with strangers and older people. Colombia and parts of Central America use usted even between friends and family. Argentina, Uruguay and much of Central America use vos for informal address.",
        ],
        examples: [
          { es: "¿Me permite su pasaporte, por favor?", en: "May I see your passport, please? (usted)" },
          { es: "¿Nos tuteamos?", en: "Shall we use tú with each other?" },
          { es: "Puede tutearme.", en: "You can call me tú." },
        ],
      },
      {
        heading: "Softening requests",
        body: [
          "Direct commands are normal among friends. To be more polite, use a question, the conditional, the imperfect (quería), or the imperfect subjunctive (quisiera). Each step adds distance.",
        ],
        table: {
          headers: ["Form", "Example", "Tone"],
          rows: [
            ["command", "Dame un café.", "familiar, fine among friends and in bars in Spain"],
            ["present question", "¿Me das un café?", "friendly, neutral"],
            ["poder + infinitive", "¿Me puede dar un café?", "polite"],
            ["imperfect", "Quería un café.", "polite, common in shops"],
            ["conditional", "¿Podría darme un café?", "more polite"],
            ["imperfect subjunctive", "Quisiera un café.", "formal, courteous"],
          ],
        },
      },
      {
        heading: "Hedging and indirectness",
        body: [
          "Disagreeing politely usually involves softening: no sé si, a lo mejor, igual (Spain: maybe), ¿no crees?, tal vez convendría.",
        ],
        examples: [
          { es: "No sé si sería mejor esperar.", en: "I wonder if it would be better to wait." },
          { es: "Igual convendría revisarlo otra vez, ¿no?", en: "Maybe it would be worth checking it again?" },
        ],
      },
      {
        heading: "Formal writing",
        body: [
          "Formal emails and letters open with Estimado/a + title + surname and a colon (not a comma), use usted, and close with formulas like Atentamente, Un cordial saludo or Quedo a la espera de su respuesta.",
        ],
        examples: [
          { es: "Estimada señora López:", en: "Dear Ms. López," },
          { es: "Le escribo para solicitar información sobre...", en: "I am writing to request information about..." },
          { es: "Agradecería que me enviara...", en: "I would be grateful if you could send me..." },
          { es: "Atentamente,", en: "Yours sincerely," },
        ],
      },
      {
        heading: "Colloquial register",
        body: [
          "Informal Spanish uses intensifiers (súper, re- in Argentina, tope in Spain), clipped words (el profe, la uni, el finde) and filler markers. Recognize them, but keep them out of formal contexts.",
        ],
        examples: [
          { es: "Este finde voy a casa de mis padres.", en: "This weekend I'm going to my parents'." },
          { es: "La peli estuvo súper bien.", en: "The film was really good." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Querida señora López, (formal email)",
        right: "Estimada señora López:",
        why: "Querido/a is for people you know well; formal letters use estimado/a and a colon.",
      },
      {
        wrong: "Usted puedes venir mañana.",
        right: "Usted puede venir mañana.",
        why: "Don't mix usted with tú verb forms. Keep the register consistent.",
      },
      {
        wrong: "Quiero un café. (to a stranger, in a formal setting)",
        right: "Quería un café, por favor. / Quisiera un café.",
        why: "The present of querer can sound abrupt; the imperfect or quisiera softens it.",
      },
    ],
    faqs: [
      {
        q: "Is it rude to use tú with an older person in Spain?",
        a: "Often not, especially in informal settings, but usted remains the respectful choice with elderly people and in formal service. When in doubt, use usted until invited to switch.",
      },
      {
        q: "Why does \"quería\" sound polite if it's past?",
        a: "The imperfect creates distance from the present request, much like English \"I was wondering if...\"",
      },
    ],
    related: ["spanish-subject-pronouns", "voseo", "spanish-conditional-tense"],
  },
  {
    slug: "voseo",
    title: "Voseo: How Vos Works in Spanish",
    metaTitle: "Voseo: Vos Conjugations (Vos Sos, Vos Tenés)",
    description:
      "Vos replaces tú in Argentina, Uruguay and much of Central America. Learn the present, command and subjunctive forms (vos sos, tenés, vení) and variants.",
    level: "C1",
    readingLevelPath: "c1c2",
    intro: [
      "Vos is the informal \"you\" for millions of speakers: it's standard in Argentina, Uruguay and Paraguay, widespread in Central America, and used in parts of Colombia, Venezuela, Bolivia, Ecuador and Chile. It isn't slang; it appears in literature, advertising and government communication.",
      "Only the subject pronoun and a few verb forms change. The object pronoun is still te, and the possessive is still tu.",
    ],
    sections: [
      {
        heading: "Present tense (Río de la Plata)",
        body: [
          "Take the vosotros form and drop the i: habláis → hablás, tenéis → tenés, vivís stays vivís. The stress falls on the ending, so there are no stem changes: vos querés, vos podés, vos dormís. Ser is vos sos.",
        ],
        table: {
          headers: ["Infinitive", "tú", "vos"],
          rows: [
            ["hablar", "hablas", "hablás"],
            ["tener", "tienes", "tenés"],
            ["vivir", "vives", "vivís"],
            ["querer", "quieres", "querés"],
            ["poder", "puedes", "podés"],
            ["ser", "eres", "sos"],
            ["ir", "vas", "vas"],
            ["saber", "sabes", "sabés"],
          ],
        },
        examples: [
          { es: "¿Vos sos de acá?", en: "Are you from here?" },
          { es: "¿Querés un mate?", en: "Do you want a mate?" },
          { es: "Vos sabés que te quiero.", en: "You know I love you." },
        ],
      },
      {
        heading: "Commands",
        body: [
          "Drop the final -r of the infinitive and stress the last vowel: hablá, comé, vení, decí, poné, tené. Ir has no vos command in common use; people say andá. Negative commands usually use the tú subjunctive (no vengas), though no vengás is common in Argentina.",
        ],
        examples: [
          { es: "Vení, sentate acá.", en: "Come here, sit down." },
          { es: "Decime la verdad.", en: "Tell me the truth." },
          { es: "Andá a dormir.", en: "Go to sleep." },
          { es: "No te preocupes.", en: "Don't worry." },
        ],
      },
      {
        heading: "Pronouns that go with vos",
        body: [
          "Vos is the subject and the pronoun after prepositions (para vos, con vos). The object and reflexive pronoun is te, and the possessive is tu/tuyo.",
        ],
        examples: [
          { es: "Te lo traje para vos.", en: "I brought it for you." },
          { es: "¿Vos te acordás de tu primer día?", en: "Do you remember your first day?" },
        ],
      },
      {
        heading: "Other tenses and regional variation",
        body: [
          "Most other tenses use tú forms: vos tenías, vos fuiste (sometimes fuistes in speech), vos tendrás. In the present subjunctive both tengas and tengás are heard. Chilean voseo is different: it uses forms like tú estái, ¿cómo estái?, ¿querís?, mostly with tú as the pronoun, and is informal.",
        ],
        examples: [
          { es: "Cuando vos eras chico...", en: "When you were little..." },
          { es: "¿Cachái? (Chile)", en: "Get it? (Chile, very informal)" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Vos eres de Buenos Aires.",
        right: "Vos sos de Buenos Aires.",
        why: "The vos form of ser is sos.",
      },
      {
        wrong: "Vos quieres / Vos quierés",
        right: "Vos querés",
        why: "Vos forms are stressed on the ending, so there's no stem change.",
      },
      {
        wrong: "Os lo digo a vos.",
        right: "Te lo digo a vos.",
        why: "The object pronoun for vos is te, not os.",
      },
    ],
    faqs: [
      {
        q: "Do I need to learn voseo?",
        a: "If you'll spend time in Argentina, Uruguay or Central America, yes: you'll hear it constantly. Everyone there understands tú, so you don't have to use vos yourself.",
      },
      {
        q: "Is voseo formal?",
        a: "No. Vos is the informal \"you,\" the equivalent of tú. Voseo regions use usted for formality.",
      },
    ],
    related: ["spanish-subject-pronouns", "register-and-politeness", "spanish-commands"],
  },
  {
    slug: "leismo-laismo-loismo",
    title: "Leísmo, Laísmo and Loísmo",
    metaTitle: "Leísmo, Laísmo and Loísmo Explained",
    description:
      "Why some Spaniards say \"le vi\" instead of \"lo vi\": the regional use of le, la and lo, what the Real Academia accepts, and which a learner should use.",
    level: "C1",
    readingLevelPath: "c1c2",
    intro: [
      "In standard Spanish, lo and la are direct object pronouns and le is the indirect object pronoun. In parts of Spain, especially the centre and north, speakers use them differently. These patterns are called leísmo, laísmo and loísmo.",
      "You'll hear them constantly in Madrid and read them in Spanish novels, so it helps to recognize them, even if you don't copy them.",
    ],
    sections: [
      {
        heading: "The standard system",
        body: [
          "The pronoun depends on the function (direct or indirect object), not on the person or gender alone.",
        ],
        table: {
          headers: ["", "Direct object", "Indirect object"],
          rows: [
            ["masc. singular", "lo", "le"],
            ["fem. singular", "la", "le"],
            ["masc. plural", "los", "les"],
            ["fem. plural", "las", "les"],
          ],
        },
        examples: [
          { es: "A Juan lo vi ayer.", en: "I saw Juan yesterday. (direct)" },
          { es: "A Juan le di el libro.", en: "I gave Juan the book. (indirect)" },
        ],
      },
      {
        heading: "Leísmo: le for a male person",
        body: [
          "Using le as the direct object for a male person (Le vi ayer, meaning \"I saw him\") is widespread in Spain. The Real Academia accepts it for a single male person, though lo is still preferred in writing. Le for things (El libro le compré) and les for people in the plural are not accepted.",
          "Usted also triggers le in many regions, including Latin America, as a mark of politeness: ¿Le acompaño?",
        ],
        examples: [
          { es: "A tu hermano le conozco. (accepted leísmo)", en: "I know your brother." },
          { es: "A tu hermano lo conozco. (standard)", en: "I know your brother." },
          { es: "¿Le ayudo, señora?", en: "Can I help you, madam?" },
        ],
      },
      {
        heading: "Laísmo and loísmo",
        body: [
          "Laísmo uses la for a female indirect object (La dije que viniera, instead of Le dije). Loísmo uses lo for a masculine indirect object (Lo di un regalo). Both are regional and are considered errors in standard Spanish.",
        ],
        examples: [
          { es: "La dije la verdad. → Le dije la verdad.", en: "I told her the truth." },
          { es: "Lo di un abrazo. → Le di un abrazo.", en: "I gave him a hug." },
        ],
      },
      {
        heading: "Verbs that cause confusion",
        body: [
          "Some verbs take a direct object in some regions and an indirect object in others, or change according to meaning: ayudar, llamar, avisar, obedecer, and emotional verbs like molestar and preocupar (le molesta with an unintentional cause; la molesta when someone deliberately annoys her).",
        ],
        examples: [
          { es: "Le preocupa el examen.", en: "The exam worries her." },
          { es: "Su hermano la molesta todo el rato.", en: "Her brother bothers her all the time." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Los libros les compré ayer.",
        right: "Los libros los compré ayer.",
        why: "Le/les for things is never accepted.",
      },
      {
        wrong: "A mi madre la escribí una carta.",
        right: "A mi madre le escribí una carta.",
        why: "Your mother receives the letter: indirect object, le. Using la is laísmo.",
      },
    ],
    faqs: [
      {
        q: "Should I use leísmo?",
        a: "As a learner, stick to the standard system (lo/la for direct objects, le for indirect). It's correct everywhere. If you live in central Spain and pick up \"le vi\" for a man, that's accepted too.",
      },
      {
        q: "Is there leísmo in Latin America?",
        a: "Very little, apart from le with usted (¿Le ayudo?) and some areas like Paraguay and the Andes. Latin American Spanish generally follows the standard system.",
      },
    ],
    related: ["direct-and-indirect-object-pronouns", "passive-and-impersonal-se", "register-and-politeness"],
  },
  {
    slug: "nominalization",
    title: "Nominalization in Spanish: Lo, El Hecho de Que and Abstract Nouns",
    metaTitle: "Spanish Nominalization: Lo Importante and More",
    description:
      "Turn verbs, adjectives and clauses into nouns: lo importante, el hecho de que + subjunctive, el + infinitive, and abstract nouns. Key for formal Spanish.",
    level: "C1",
    readingLevelPath: "c1c2",
    intro: [
      "Nominalization means turning an action, quality or idea into a noun phrase: \"the government decided\" becomes \"the government's decision.\" It makes writing more compact and formal, and it's a hallmark of academic, legal and journalistic Spanish.",
    ],
    sections: [
      {
        heading: "Lo + adjective: the ... thing",
        body: [
          "Neuter lo turns an adjective or participle into an abstract idea.",
        ],
        examples: [
          { es: "Lo importante es participar.", en: "The important thing is to take part." },
          { es: "Lo peor fue la espera.", en: "The worst part was the wait." },
          { es: "Lo ocurrido no tiene explicación.", en: "What happened has no explanation." },
        ],
      },
      {
        heading: "El hecho de que",
        body: [
          "El hecho de que (the fact that) turns a clause into a noun. It usually takes the subjunctive, because the clause is presented as a topic to be evaluated, even when it's true. When the fact is simply reported as new information, the indicative also occurs.",
        ],
        examples: [
          { es: "El hecho de que no haya llamado me preocupa.", en: "The fact that he hasn't called worries me." },
          { es: "El hecho de que sea gratis no significa que sea bueno.", en: "The fact that it's free doesn't mean it's good." },
        ],
      },
      {
        heading: "El + infinitive",
        body: [
          "The infinitive with el works as a noun, especially in formal or literary style, and can take adjectives and objects.",
        ],
        examples: [
          { es: "El constante ir y venir de la gente me cansa.", en: "People's constant coming and going tires me." },
          { es: "El saber no ocupa lugar.", en: "Knowledge takes up no space. (saying)" },
        ],
      },
      {
        heading: "Abstract nouns from verbs and adjectives",
        body: [
          "Common suffixes: -ción/-sión (decidir → decisión), -miento (crecer → crecimiento), -dad/-idad (posible → posibilidad), -eza (bello → belleza), -ura (alto → altura), -ncia (tolerar → tolerancia). Rewriting a verb clause as a noun phrase is a standard feature of formal writing.",
        ],
        table: {
          headers: ["Verbal", "Nominalized"],
          rows: [
            ["Los precios subieron mucho.", "la fuerte subida de los precios"],
            ["El Gobierno decidió cerrar la planta.", "la decisión del Gobierno de cerrar la planta"],
            ["La población ha crecido.", "el crecimiento de la población"],
            ["Es posible que llueva.", "la posibilidad de lluvia"],
          ],
        },
      },
    ],
    mistakes: [
      {
        wrong: "La cosa importante es...",
        right: "Lo importante es...",
        why: "La cosa + adjective sounds clumsy; lo + adjective is the natural structure.",
      },
      {
        wrong: "El fumar cigarrillos es prohibido.",
        right: "Está prohibido fumar.",
        why: "El + infinitive is fine, but overusing it sounds unnatural; and \"forbidden\" as a state is estar prohibido.",
      },
    ],
    faqs: [
      {
        q: "Should I nominalize in speech?",
        a: "Not much. Heavy nominalization sounds bureaucratic in conversation. Use it in essays, reports and formal emails.",
      },
      {
        q: "Can el hecho de que take the indicative?",
        a: "Yes, sometimes, when the clause presents new information rather than a topic being evaluated. The subjunctive is more common and always safe.",
      },
    ],
    related: ["gerund-vs-infinitive", "spanish-subjunctive", "discourse-markers"],
  },
  {
    slug: "spanish-punctuation",
    title: "Spanish Punctuation: ¿?, ¡!, Commas, Colons and Dialogue Dashes",
    metaTitle: "Spanish Punctuation Rules: ¿ ¡ and the Raya",
    description:
      "How Spanish punctuation differs from English: opening ¿ and ¡, comma rules, colons in letters, the raya for dialogue, quotation marks and number formats.",
    level: "C1",
    readingLevelPath: "c1c2",
    intro: [
      "Spanish punctuation looks familiar but has several rules English doesn't. Getting them right is part of the written tasks in the DELE and SIELE, and it makes your writing look native.",
    ],
    sections: [
      {
        heading: "Opening question and exclamation marks",
        body: [
          "Put ¿ and ¡ exactly where the question or exclamation starts, which isn't always the start of the sentence. No full stop after the closing mark.",
        ],
        examples: [
          { es: "¿Vienes mañana?", en: "Are you coming tomorrow?" },
          { es: "Si no te gusta, ¿por qué lo compraste?", en: "If you don't like it, why did you buy it?" },
          { es: "¡Qué sorpresa!", en: "What a surprise!" },
        ],
      },
      {
        heading: "Commas",
        body: [
          "Never put a comma between the subject and the verb, even when the subject is long. Put commas around vocatives (names you address), after sentence-initial connectors, and around parenthetical phrases. No comma before y in a list (no Oxford comma), except to avoid confusion.",
        ],
        examples: [
          { es: "Los alumnos que no hayan entregado el trabajo deben hablar conmigo.", en: "Students who haven't handed in the assignment must talk to me." },
          { es: "Hola, María. / Gracias, doctor.", en: "Hi, María. / Thank you, doctor." },
          { es: "Compré pan, leche y huevos.", en: "I bought bread, milk and eggs." },
          { es: "Sin embargo, no dijo nada.", en: "However, he said nothing." },
        ],
      },
      {
        heading: "Colons",
        body: [
          "Letters and emails open with a colon: Estimado señor: / Querida Ana: After a colon, continue in lowercase unless it's the start of a letter body or a quotation.",
        ],
        examples: [
          { es: "Querida Ana:", en: "Dear Ana, (the letter continues on a new line with a capital)" },
          { es: "Necesito tres cosas: tiempo, dinero y paciencia.", en: "I need three things: time, money and patience." },
        ],
      },
      {
        heading: "Dialogue and quotations",
        body: [
          "In narrative, dialogue is introduced with a long dash (raya), not quotation marks. A second raya separates the narrator's words. Quotations use comillas: angled « » in careful printed Spanish, or \" \" (and ' ' inside them).",
        ],
        examples: [
          { es: "—¿Vienes? —preguntó Luis.", en: "\"Are you coming?\" Luis asked." },
          { es: "—Ahora voy —le contesté.", en: "\"I'll be right there,\" I answered." },
          { es: "Dijo: «No pienso volver».", en: "He said, \"I'm not going back.\"" },
        ],
      },
      {
        heading: "Numbers, capitals and other differences",
        body: [
          "The Real Academia accepts both a decimal comma and a decimal point, recommending the point (Spain traditionally uses 3,5; Mexico 3.5) and a space for thousands (10 000). Days, months, languages and nationalities are lowercase: el lunes 3 de mayo, hablo inglés, es francesa. Only the first word of a title is capitalized: Cien años de soledad.",
        ],
        examples: [
          { es: "Nos vemos el martes 12 de abril.", en: "See you on Tuesday, April 12." },
          { es: "Leí El amor en los tiempos del cólera.", en: "I read Love in the Time of Cholera." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "El problema más grave que tenemos en la empresa, es la falta de tiempo.",
        right: "El problema más grave que tenemos en la empresa es la falta de tiempo.",
        why: "Never separate a subject from its verb with a comma.",
      },
      {
        wrong: "Estimado Sr. Ruiz,",
        right: "Estimado Sr. Ruiz:",
        why: "Spanish letters and emails open with a colon.",
      },
      {
        wrong: "Hablo Inglés y Francés los Lunes.",
        right: "Hablo inglés y francés los lunes.",
        why: "Languages and days of the week are lowercase in Spanish.",
      },
    ],
    faqs: [
      {
        q: "Can I skip the opening ¿ in texts and chats?",
        a: "Many people do in casual messages. In anything formal, including exams, always use it.",
      },
      {
        q: "Is a comma before \"pero\" required?",
        a: "Yes, generally: a comma goes before pero, aunque and sino when they join clauses: Quería ir, pero no pude.",
      },
    ],
    related: ["spanish-accent-marks", "spanish-connectors", "register-and-politeness"],
  },
];
