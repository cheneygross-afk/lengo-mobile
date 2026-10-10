// Synced from cheneygross-afk/lengo:src/lib/grammar/guides-b2.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { GrammarGuide } from "./types";

export const B2_GUIDES: GrammarGuide[] = [
  {
    slug: "subjunctive-adjective-clauses",
    title: "Subjunctive in Adjective Clauses: Busco a Alguien Que...",
    metaTitle: "Subjunctive in Spanish Relative Clauses",
    description:
      "Why Spanish says \"busco un piso que tenga terraza\" but \"vivo en un piso que tiene terraza\": the subjunctive for unknown or non-existent things, and more.",
    level: "B2",
    readingLevelPath: "b2",
    intro: [
      "An adjective clause describes a noun: \"a flat that has a terrace.\" In Spanish, the verb in that clause is indicative if the noun is something known to exist, and subjunctive if it's hypothetical, unknown or doesn't exist.",
      "The same sentence can go either way depending on what you know: Busco al chico que habla ruso (a specific boy I know) vs. Busco un chico que hable ruso (any boy who does, if there is one).",
    ],
    sections: [
      {
        heading: "Known vs. unknown",
        body: [
          "Indicative: the speaker knows the thing exists and can identify it. Subjunctive: it's a requirement, a wish, or a description of something not yet found.",
        ],
        table: {
          headers: ["Known (indicative)", "Unknown or hypothetical (subjunctive)"],
          rows: [
            ["Tengo un piso que tiene terraza.", "Busco un piso que tenga terraza."],
            ["Conozco a alguien que habla chino.", "¿Conoces a alguien que hable chino?"],
            ["Hay un bar que abre hasta tarde.", "¿Hay algún bar que abra hasta tarde?"],
            ["Haz lo que dice el médico.", "Haz lo que quieras."],
          ],
        },
      },
      {
        heading: "Negative antecedents: no hay nadie que",
        body: [
          "When the noun is denied (nadie, nada, ningún, no hay), the clause always takes the subjunctive: you're describing something that doesn't exist.",
        ],
        examples: [
          { es: "No hay nadie que entienda este formulario.", en: "There's nobody who understands this form." },
          { es: "No tengo ningún amigo que viva en Roma.", en: "I don't have any friends who live in Rome." },
          { es: "No hay nada que puedas hacer.", en: "There's nothing you can do." },
        ],
      },
      {
        heading: "Whoever, whatever, wherever",
        body: [
          "Cualquiera que, lo que, quien, donde and como + subjunctive leave the choice open: \"whatever,\" \"whoever,\" \"however.\"",
        ],
        examples: [
          { es: "Cualquiera que lo vea lo va a entender.", en: "Anyone who sees it will understand." },
          { es: "Pide lo que te apetezca.", en: "Order whatever you feel like." },
          { es: "Siéntate donde quieras.", en: "Sit wherever you like." },
          { es: "Hazlo como puedas.", en: "Do it however you can." },
        ],
      },
      {
        heading: "In the past",
        body: [
          "When the main verb is past, the subjunctive moves to the imperfect subjunctive.",
        ],
        examples: [
          { es: "Buscaban a alguien que tuviera experiencia.", en: "They were looking for someone who had experience." },
          { es: "No había nadie que supiera la respuesta.", en: "There was nobody who knew the answer." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Busco un compañero de piso que es ordenado.",
        right: "Busco un compañero de piso que sea ordenado.",
        why: "You haven't found this person yet; it's a requirement, so subjunctive.",
      },
      {
        wrong: "No conozco a nadie que habla japonés.",
        right: "No conozco a nadie que hable japonés.",
        why: "A denied antecedent always takes the subjunctive.",
      },
      {
        wrong: "Busco la médica que me atendió. / Busco a un médico que atienda los domingos.",
        right: "Busco a la médica que me atendió. / Busco un médico que atienda los domingos.",
        why: "Drop the personal a for an unspecified person; keep it for a specific one.",
      },
    ],
    faqs: [
      {
        q: "Can the same sentence take either mood?",
        a: "Yes, and the mood tells the listener what you know. Quiero comprar un coche que no gasta mucho means you have a particular car in mind; que no gaste mucho means any car that fits.",
      },
      {
        q: "Does \"el que\" take the subjunctive?",
        a: "It can: El que llegue primero, gana (Whoever arrives first wins). The same known/unknown rule applies.",
      },
    ],
    related: ["relative-pronouns", "spanish-subjunctive", "subjunctive-adverbial-clauses"],
  },
  {
    slug: "subjunctive-adverbial-clauses",
    title: "Subjunctive After Cuando, Para Que, Antes de Que and Other Conjunctions",
    metaTitle: "Subjunctive After Cuando, Para Que, Antes De",
    description:
      "Which Spanish conjunctions always take the subjunctive (para que, antes de que), which switch with time (cuando, hasta que), and when to use an infinitive.",
    level: "B2",
    readingLevelPath: "b2",
    intro: [
      "Adverbial clauses say when, why, how or on what condition something happens. Some conjunctions always introduce a subjunctive, some never do, and the time conjunctions switch depending on whether the event has happened yet.",
    ],
    sections: [
      {
        heading: "Always subjunctive",
        body: [
          "These conjunctions describe purpose, anticipation or conditions, all of which point to something not yet real: para que, a fin de que, antes de que, sin que, con tal de que, a menos que, a no ser que, en caso de que.",
        ],
        examples: [
          { es: "Te lo explico para que lo entiendas.", en: "I'm explaining it so that you understand." },
          { es: "Llámame antes de que salgas.", en: "Call me before you leave." },
          { es: "Salió sin que nadie lo viera.", en: "He left without anyone seeing him." },
          { es: "Iré con tal de que vengas tú.", en: "I'll go as long as you come." },
          { es: "Lleva paraguas en caso de que llueva.", en: "Take an umbrella in case it rains." },
        ],
      },
      {
        heading: "Time conjunctions: future means subjunctive",
        body: [
          "Cuando, en cuanto, tan pronto como, hasta que, después de que and mientras take the subjunctive when the event is still in the future, and the indicative for habits and past events.",
        ],
        table: {
          headers: ["Habit or past (indicative)", "Future (subjunctive)"],
          rows: [
            ["Cuando llego a casa, ceno.", "Cuando llegue a casa, cenaré."],
            ["Cuando era niño, vivía en Lima.", "Cuando sea mayor, viviré en Lima."],
            ["Esperé hasta que llegó.", "Espera hasta que llegue."],
            ["En cuanto lo supe, te llamé.", "En cuanto lo sepa, te llamo."],
          ],
        },
      },
      {
        heading: "Same subject: preposition + infinitive",
        body: [
          "When both clauses have the same subject, para que, antes de que, sin que and después de que turn into para, antes de, sin and después de + infinitive.",
        ],
        examples: [
          { es: "Ahorro para comprar un coche.", en: "I'm saving to buy a car." },
          { es: "Ahorro para que mis hijos estudien.", en: "I'm saving so my children can study." },
          { es: "Lávate las manos antes de comer.", en: "Wash your hands before eating." },
        ],
      },
      {
        heading: "Cause and consequence stay indicative",
        body: [
          "Porque, ya que, puesto que, como (at the start) and así que state facts, so they take the indicative. No porque + subjunctive denies a cause: No lo digo porque sea tu amigo.",
        ],
        examples: [
          { es: "Como no llegabas, empezamos sin ti.", en: "Since you hadn't turned up, we started without you." },
          { es: "Ya que estás aquí, ayúdame.", en: "Since you're here, help me." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Cuando llegaré, te llamo.",
        right: "Cuando llegue, te llamo.",
        why: "Conjunction cuando never takes the future: a future event takes the present subjunctive. (Only question cuándo can: ¿Cuándo llegarás?)",
      },
      {
        wrong: "Te llamo antes de que salgo.",
        right: "Te llamo antes de salir. / Te llamo antes de que salgas.",
        why: "Antes de que always takes the subjunctive; with the same subject, use antes de + infinitive.",
      },
      {
        wrong: "Estudio para que aprendo.",
        right: "Estudio para aprender.",
        why: "Same subject: para + infinitive.",
      },
    ],
    faqs: [
      {
        q: "What about aunque?",
        a: "Aunque takes the indicative for facts and the subjunctive for possibilities or points you don't care to argue. It has its own guide.",
      },
      {
        q: "Does \"después de que\" take the subjunctive in the past?",
        a: "By the rule, past events take the indicative: después de que llegó. But in writing you'll often see después de que llegara, especially in journalism. Both appear; the indicative is safer.",
      },
    ],
    related: ["concessive-clauses-aunque", "subjunctive-adjective-clauses", "spanish-subjunctive"],
  },
  {
    slug: "sequence-of-tenses",
    title: "Sequence of Tenses: Quiero Que Vengas, Quería Que Vinieras",
    metaTitle: "Spanish Sequence of Tenses Explained",
    description:
      "How the main verb's tense decides the subjunctive tense in Spanish: present with present, past with imperfect subjunctive, and the exceptions.",
    level: "B2",
    readingLevelPath: "b2",
    intro: [
      "When a sentence has a main verb and a subordinate clause in the subjunctive, their tenses have to fit together. This is called the sequence (or concordance) of tenses: la concordancia de tiempos.",
      "The basic idea: a present or future main verb pairs with the present subjunctive; a past or conditional main verb pairs with the imperfect subjunctive.",
    ],
    sections: [
      {
        heading: "The main pattern",
        body: [
          "Look at the main verb first, then pick the subjunctive tense.",
        ],
        table: {
          headers: ["Main verb", "Subjunctive", "Example"],
          rows: [
            ["present", "present", "Quiero que vengas."],
            ["future", "present", "Querré que vengas."],
            ["command", "present", "Dile que venga."],
            ["present perfect", "present (or imperfect)", "Le he pedido que venga."],
            ["preterite", "imperfect", "Quise que vinieras."],
            ["imperfect", "imperfect", "Quería que vinieras."],
            ["conditional", "imperfect", "Querría que vinieras."],
            ["pluperfect", "imperfect", "Había querido que vinieras."],
          ],
        },
      },
      {
        heading: "Earlier actions: perfect subjunctives",
        body: [
          "If the subordinate action happened before the main verb, use the present perfect subjunctive (haya hecho) after a present main verb, and the pluperfect subjunctive (hubiera hecho) after a past one.",
        ],
        examples: [
          { es: "Me alegro de que hayas venido.", en: "I'm glad you've come." },
          { es: "Me alegré de que hubieras venido.", en: "I was glad you had come." },
          { es: "No creo que lo haya terminado.", en: "I don't think he's finished it." },
        ],
      },
      {
        heading: "Past main verb, present effect",
        body: [
          "After a preterite, you can use the present subjunctive when the request or wish still applies now or in the future. This is especially common in Latin America and in speech.",
        ],
        examples: [
          { es: "Me pidió que la llame mañana.", en: "She asked me to call her tomorrow. (still pending)" },
          { es: "Me pidió que la llamara.", en: "She asked me to call her. (neutral)" },
        ],
      },
      {
        heading: "Present main verb about the past",
        body: [
          "A present main verb can take the imperfect subjunctive when the clause is about a past situation.",
        ],
        examples: [
          { es: "Es normal que estuvieras cansado ayer.", en: "It's normal that you were tired yesterday." },
          { es: "No creo que Colón supiera dónde estaba.", en: "I don't think Columbus knew where he was." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Quería que vengas.",
        right: "Quería que vinieras.",
        why: "An imperfect main verb normally takes the imperfect subjunctive.",
      },
      {
        wrong: "Me gustaría que vengas.",
        right: "Me gustaría que vinieras.",
        why: "The conditional pairs with the imperfect subjunctive.",
      },
      {
        wrong: "Espero que llegaste bien.",
        right: "Espero que hayas llegado bien.",
        why: "After esperar (present), an earlier action takes the perfect subjunctive.",
      },
    ],
    faqs: [
      {
        q: "Is the sequence of tenses a strict rule?",
        a: "The main pattern is strong, especially with conditional main verbs. The exceptions exist because the subordinate clause can refer to a different time; the rule is really about keeping time references consistent.",
      },
      {
        q: "Does this apply to the indicative too?",
        a: "Yes, in reported speech: Dice que viene becomes Dijo que venía. See the reported speech guide.",
      },
    ],
    related: ["imperfect-subjunctive", "reported-speech", "pluperfect-subjunctive-and-conditional-perfect"],
  },
  {
    slug: "reported-speech",
    title: "Reported Speech in Spanish (Estilo Indirecto)",
    metaTitle: "Spanish Reported Speech: Dijo Que...",
    description:
      "How to report what someone said in Spanish: tense backshift (dice que viene, dijo que venía), reported questions and commands, and time and place words.",
    level: "B2",
    readingLevelPath: "b2",
    intro: [
      "Reported speech (estilo indirecto) retells what someone said without quoting them: \"Estoy cansada\" becomes Dijo que estaba cansada. If the reporting verb is in the present, nothing changes. If it's in the past, most tenses shift back one step.",
    ],
    sections: [
      {
        heading: "Tense changes after a past reporting verb",
        body: [
          "The imperfect, pluperfect, conditional and imperfect subjunctive don't change.",
        ],
        table: {
          headers: ["Direct speech", "Reported (dijo que...)"],
          rows: [
            ["present: \"Vivo aquí.\"", "imperfect: vivía allí"],
            ["preterite: \"Lo vi.\"", "pluperfect (or preterite): lo había visto"],
            ["present perfect: \"He comido.\"", "pluperfect: había comido"],
            ["future: \"Iré.\"", "conditional: iría"],
            ["ir a: \"Voy a llamar.\"", "iba a llamar"],
            ["present subjunctive: \"Ojalá venga.\"", "imperfect subjunctive: ojalá viniera"],
            ["command: \"¡Ven!\"", "imperfect subjunctive: que viniera"],
          ],
        },
        examples: [
          { es: "\"Mañana te llamo.\" → Me dijo que me llamaría al día siguiente.", en: "\"I'll call you tomorrow.\" → He said he'd call me the next day." },
          { es: "\"No he terminado.\" → Dijo que no había terminado.", en: "\"I haven't finished.\" → She said she hadn't finished." },
        ],
      },
      {
        heading: "Commands and requests",
        body: [
          "A reported command becomes que + subjunctive, after verbs like decir, pedir or ordenar. With decir, the mood tells you whether it's information (indicative) or an instruction (subjunctive).",
        ],
        examples: [
          { es: "\"Cierra la puerta.\" → Me pidió que cerrara la puerta.", en: "\"Close the door.\" → He asked me to close the door." },
          { es: "Me dijo que venía.", en: "She told me she was coming. (information)" },
          { es: "Me dijo que viniera.", en: "She told me to come. (instruction)" },
        ],
      },
      {
        heading: "Questions",
        body: [
          "Yes/no questions are reported with si. Wh- questions keep the question word, with its accent. Preguntar is the usual verb.",
        ],
        examples: [
          { es: "\"¿Tienes hambre?\" → Me preguntó si tenía hambre.", en: "\"Are you hungry?\" → He asked if I was hungry." },
          { es: "\"¿Dónde vives?\" → Me preguntó dónde vivía.", en: "\"Where do you live?\" → She asked where I lived." },
        ],
      },
      {
        heading: "Words that change with the point of view",
        body: [
          "Just as in English, people, times and places shift: hoy → ese día, mañana → al día siguiente, ayer → el día anterior, aquí → allí, este → ese/aquel, venir → ir, traer → llevar.",
        ],
        examples: [
          { es: "\"Ven aquí mañana.\" → Me dijo que fuera allí al día siguiente.", en: "\"Come here tomorrow.\" → He told me to go there the next day." },
        ],
      },
      {
        heading: "Beyond decir",
        body: [
          "Good reporting uses varied verbs: explicar, contar, comentar, añadir, asegurar, admitir, negar, prometer, advertir, sugerir, recomendar, quejarse de que.",
        ],
        examples: [
          { es: "Admitió que se había equivocado.", en: "He admitted he'd been wrong." },
          { es: "Nos advirtió que no saliéramos.", en: "She warned us not to go out." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Dijo que viene mañana. (reported days later)",
        right: "Dijo que vendría al día siguiente.",
        why: "Once the moment has passed, the future and \"mañana\" both shift.",
      },
      {
        wrong: "Me preguntó que si tenía hambre.",
        right: "Me preguntó si tenía hambre.",
        why: "Que si is common in speech, but standard written Spanish uses si alone.",
      },
      {
        wrong: "Me dijo que cierro la puerta.",
        right: "Me dijo que cerrara la puerta.",
        why: "A reported command takes the subjunctive.",
      },
    ],
    faqs: [
      {
        q: "Do I always have to backshift?",
        a: "No. If what was said is still true, many speakers keep the original tense: Dijo que vive en Lima (and she still does). Backshifting is never wrong, though.",
      },
      {
        q: "What's free indirect style?",
        a: "A literary technique that blends a narrator's voice with a character's thoughts, without dijo que. It's covered in the Mastery lessons on narration.",
      },
    ],
    related: ["sequence-of-tenses", "spanish-pluperfect", "spanish-conditional-tense"],
  },
  {
    slug: "pluperfect-subjunctive-and-conditional-perfect",
    title: "Would Have and Had Done: Habría and Hubiera",
    metaTitle: "Spanish Conditional Perfect: Hubiera Hecho",
    description:
      "The past that didn't happen: si hubiera sabido, habría venido. Learn the conditional perfect, the pluperfect subjunctive and mixed conditionals.",
    level: "B2",
    readingLevelPath: "b2",
    intro: [
      "To talk about how the past could have been different, Spanish uses two compound forms: the pluperfect subjunctive (hubiera hecho, \"had done\") in the si clause, and the conditional perfect (habría hecho, \"would have done\") in the result.",
      "Si hubiera sabido que venías, habría hecho una tarta: If I had known you were coming, I would have made a cake.",
    ],
    sections: [
      {
        heading: "The forms",
        body: [
          "Both use haber plus the past participle. The pluperfect subjunctive also has a -se form (hubiese), heard more in Spain than in Latin America and in writing, though hubiera is more frequent everywhere.",
        ],
        table: {
          headers: ["", "Pluperfect subjunctive", "Conditional perfect"],
          rows: [
            ["yo", "hubiera hablado", "habría hablado"],
            ["tú", "hubieras hablado", "habrías hablado"],
            ["él / ella / usted", "hubiera hablado", "habría hablado"],
            ["nosotros", "hubiéramos hablado", "habríamos hablado"],
            ["vosotros", "hubierais hablado", "habríais hablado"],
            ["ellos / ustedes", "hubieran hablado", "habrían hablado"],
          ],
        },
      },
      {
        heading: "Unreal past conditions",
        body: [
          "Si + pluperfect subjunctive, conditional perfect. In speech, hubiera is often used in both halves: Si lo hubiera sabido, no hubiera ido. Both are correct.",
        ],
        examples: [
          { es: "Si hubieras salido antes, no habrías perdido el tren.", en: "If you had left earlier, you wouldn't have missed the train." },
          { es: "Si me lo hubieran dicho, habría ayudado.", en: "If they had told me, I would have helped." },
          { es: "Yo no lo habría hecho así.", en: "I wouldn't have done it that way." },
        ],
      },
      {
        heading: "Mixed conditions",
        body: [
          "A past condition can have a present result, and a present situation can explain a past result.",
        ],
        examples: [
          { es: "Si hubiera estudiado medicina, ahora sería médico.", en: "If I had studied medicine, I'd be a doctor now." },
          { es: "Si fuera más organizado, no habría olvidado la cita.", en: "If I were more organized, I wouldn't have forgotten the appointment." },
        ],
      },
      {
        heading: "Regrets and reproaches",
        body: [
          "Ojalá + pluperfect subjunctive expresses a regret. The conditional of deber or poder + haber + participle makes a reproach.",
        ],
        examples: [
          { es: "Ojalá hubiera aceptado ese trabajo.", en: "I wish I had taken that job." },
          { es: "Me lo podrías haber dicho.", en: "You could have told me." },
          { es: "Deberías haber llamado.", en: "You should have called." },
        ],
      },
      {
        heading: "Probability in the past",
        body: [
          "The conditional perfect can also express a guess about something before a past moment.",
        ],
        examples: [
          { es: "Cuando llegué, ya se habría ido.", en: "When I arrived, he must already have left." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Si habría sabido, habría venido.",
        right: "Si hubiera sabido, habría venido.",
        why: "Never use the conditional after si.",
      },
      {
        wrong: "Si hubiera sabido, vendría.",
        right: "Si hubiera sabido, habría venido.",
        why: "A past result needs the conditional perfect. (Vendría would mean a present or future result.)",
      },
      {
        wrong: "Ojalá habría ido.",
        right: "Ojalá hubiera ido.",
        why: "Ojalá takes the subjunctive, never the conditional.",
      },
    ],
    faqs: [
      {
        q: "Is \"si lo hubiera sabido, no hubiera ido\" correct?",
        a: "Yes. Using hubiera in the result clause is fully accepted, and very common in speech across the Spanish-speaking world.",
      },
      {
        q: "What about \"de haberlo sabido\"?",
        a: "De + perfect infinitive is a compact, slightly formal alternative to the si clause: De haberlo sabido, habría venido.",
      },
    ],
    related: ["si-clauses", "imperfect-subjunctive", "sequence-of-tenses"],
  },
  {
    slug: "ser-and-estar-with-adjectives",
    title: "Ser and Estar With Adjectives That Change Meaning",
    metaTitle: "Ser vs. Estar With Adjectives: Es/Está Listo",
    description:
      "Ser and estar with adjectives, advanced: meaning changes (ser listo, estar listo), estar for impressions, estar + participle vs. the ser passive.",
    level: "B2",
    readingLevelPath: "b2",
    intro: [
      "At the Beginner level you learn ser for identity and estar for states. At the Advanced level the interesting cases are adjectives, where the choice changes the meaning, or shows whether you're describing something as it always is or as you experience it right now.",
    ],
    sections: [
      {
        heading: "Adjectives that change meaning",
        body: [
          "These are the pairs worth memorizing.",
        ],
        table: {
          headers: ["Adjective", "with ser", "with estar"],
          rows: [
            ["listo", "clever", "ready"],
            ["despierto", "sharp, alert", "awake"],
            ["atento", "considerate, polite", "paying attention"],
            ["orgulloso", "arrogant", "proud (of someone)"],
            ["rico", "rich", "delicious"],
            ["vivo", "lively, quick-witted", "alive"],
            ["delicado", "delicate, fragile", "in poor health"],
            ["molesto", "annoying", "annoyed"],
            ["seguro", "safe", "sure"],
            ["negro", "black", "furious (colloquial)"],
          ],
        },
      },
      {
        heading: "Estar for impressions and changes",
        body: [
          "With ordinary adjectives, ser presents a trait as defining. Estar presents it as how something looks, tastes or seems now, or as a change from what you expected.",
        ],
        examples: [
          { es: "Tu hijo es muy alto.", en: "Your son is very tall. (a trait)" },
          { es: "¡Qué alto está tu hijo!", en: "Your son has got so tall! (a change you notice)" },
          { es: "La paella es un plato típico.", en: "Paella is a typical dish." },
          { es: "La paella está buenísima.", en: "The paella is delicious. (tasting it now)" },
          { es: "Estás muy guapa hoy.", en: "You look lovely today." },
        ],
      },
      {
        heading: "Estar + participle vs. ser + participle",
        body: [
          "Ser + participle is the passive: the action. Estar + participle is the resulting state.",
        ],
        examples: [
          { es: "La puerta fue cerrada a las ocho.", en: "The door was closed at eight. (someone closed it)" },
          { es: "La puerta estaba cerrada.", en: "The door was closed. (its state)" },
          { es: "El museo está cerrado los lunes.", en: "The museum is closed on Mondays." },
        ],
      },
      {
        heading: "Ser, estar and haber",
        body: [
          "Hay introduces something; estar locates it; ser locates events. Estar de + noun describes a temporary role or situation.",
        ],
        examples: [
          { es: "Hay una reunión a las diez. La reunión es en la sala 3.", en: "There's a meeting at ten. The meeting is in room 3." },
          { es: "Está de camarero este verano.", en: "He's working as a waiter this summer." },
          { es: "Estamos de vacaciones.", en: "We're on holiday." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Soy listo para salir.",
        right: "Estoy listo para salir.",
        why: "\"Ready\" is estar listo; ser listo means clever.",
      },
      {
        wrong: "Es muerto.",
        right: "Está muerto.",
        why: "Death is treated as a resulting state: estar.",
      },
      {
        wrong: "El concierto está en el estadio.",
        right: "El concierto es en el estadio.",
        why: "The location of an event uses ser.",
      },
    ],
    faqs: [
      {
        q: "Is \"estar casado\" or \"ser casado\" correct?",
        a: "Estar casado is by far the most common. Ser casado exists, meaning \"to be a married man\" as a category, but you'll rarely need it.",
      },
      {
        q: "Why \"estar embarazada\" but \"ser joven\"?",
        a: "Pregnancy is a state with a beginning and end. Youth is presented as a phase of who you are, though estar joven (look young) is common too.",
      },
    ],
    related: ["ser-vs-estar", "hay-vs-estar", "verbs-of-change"],
  },
  {
    slug: "verbs-of-change",
    title: "Verbs of Change: Ponerse, Volverse, Hacerse, Quedarse, Llegar a Ser",
    metaTitle: "How to Say \"Become\" in Spanish: Ponerse",
    description:
      "Spanish has no single verb for \"to become.\" Learn when to use ponerse, volverse, hacerse, quedarse, convertirse en and llegar a ser, with examples.",
    level: "B2",
    readingLevelPath: "b2",
    intro: [
      "English \"become\" (or \"get,\" \"go,\" \"turn\") covers many kinds of change. Spanish splits them among several verbs depending on whether the change is quick or lasting, voluntary or not, and what kind of word follows.",
    ],
    sections: [
      {
        heading: "Ponerse: quick changes of mood, appearance or state",
        body: [
          "Ponerse + adjective for temporary changes, often sudden: emotions, color, health.",
        ],
        examples: [
          { es: "Se puso rojo cuando lo vio.", en: "He went red when he saw him." },
          { es: "Me pongo nerviosa en los exámenes.", en: "I get nervous in exams." },
          { es: "Se puso enfermo en el viaje.", en: "He got sick on the trip." },
        ],
      },
      {
        heading: "Volverse: deep, often involuntary changes of character",
        body: [
          "Volverse + adjective (or un/una + noun) for changes in personality or nature, usually lasting and often negative.",
        ],
        examples: [
          { es: "Se ha vuelto muy desconfiado.", en: "He's become very distrustful." },
          { es: "Con la fama se volvió un egoísta.", en: "Fame turned him into a selfish person." },
          { es: "¿Te has vuelto loco?", en: "Have you gone mad?" },
        ],
      },
      {
        heading: "Hacerse: changes through effort or gradual process",
        body: [
          "Hacerse for professions, religion, ideology, wealth and changes that result from time or effort. Also hacerse tarde, hacerse de noche.",
        ],
        examples: [
          { es: "Se hizo abogada.", en: "She became a lawyer." },
          { es: "Se hicieron ricos con el negocio.", en: "They got rich from the business." },
          { es: "Se hace tarde.", en: "It's getting late." },
        ],
      },
      {
        heading: "Quedarse: the result of an event",
        body: [
          "Quedarse + adjective describes a state left behind by something that happened, often a loss: quedarse ciego, sordo, viudo, sin trabajo, embarazada, dormido, callado.",
        ],
        examples: [
          { es: "Se quedó sin trabajo.", en: "He lost his job. (was left without work)" },
          { es: "Me quedé dormido en el sofá.", en: "I fell asleep on the sofa." },
          { es: "Nos quedamos sorprendidos.", en: "We were left surprised." },
        ],
      },
      {
        heading: "Convertirse en and llegar a ser",
        body: [
          "Convertirse en + noun: a transformation into something else. Llegar a ser: reaching a status after a long process.",
        ],
        examples: [
          { es: "La casa se convirtió en un museo.", en: "The house became a museum." },
          { es: "Llegó a ser presidente del club.", en: "He went on to become club president." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Se volvió nervioso antes del examen.",
        right: "Se puso nervioso antes del examen.",
        why: "A temporary mood change is ponerse.",
      },
      {
        wrong: "Se puso médico.",
        right: "Se hizo médico.",
        why: "Professions reached through effort use hacerse (or llegar a ser).",
      },
      {
        wrong: "Se convirtió rico.",
        right: "Se hizo rico.",
        why: "Convertirse takes en + noun, not an adjective.",
      },
    ],
    faqs: [
      {
        q: "Is there a verb for \"to get + adjective\" in general?",
        a: "Often Spanish uses a single reflexive verb instead: enfadarse (get angry), cansarse (get tired), aburrirse (get bored), mojarse (get wet), casarse (get married).",
      },
      {
        q: "Hacerse or volverse with \"famoso\"?",
        a: "Hacerse famoso is the most common, since fame usually comes through effort or time. Volverse famoso also occurs.",
      },
    ],
    related: ["ser-and-estar-with-adjectives", "reflexive-verbs", "spanish-verb-periphrases"],
  },
  {
    slug: "cuyo-and-el-cual",
    title: "Cuyo, El Cual and Formal Relative Pronouns",
    metaTitle: "Spanish Cuyo (Whose) and El Cual",
    description:
      "How to say \"whose\" in Spanish with cuyo, cuya, cuyos and cuyas, and when to use el cual, la cual or lo cual instead of que in formal writing.",
    level: "B2",
    readingLevelPath: "b2",
    intro: [
      "Que and lo que handle most relative clauses. For \"whose,\" and in more formal or complex sentences, Spanish uses cuyo and el cual.",
    ],
    sections: [
      {
        heading: "Cuyo: whose",
        body: [
          "Cuyo agrees with the thing possessed, not with the owner, and never takes an article. In speech it's often replaced by que + su, which is considered incorrect.",
        ],
        table: {
          headers: ["Possessed noun", "Form", "Example"],
          rows: [
            ["masc. singular", "cuyo", "el autor cuyo libro leí"],
            ["fem. singular", "cuya", "la vecina cuya hija es actriz"],
            ["masc. plural", "cuyos", "un país cuyos habitantes..."],
            ["fem. plural", "cuyas", "el pueblo cuyas calles..."],
          ],
        },
        examples: [
          { es: "Es un escritor cuyas novelas se leen en todo el mundo.", en: "He's a writer whose novels are read all over the world." },
          { es: "La empresa, cuyo director dimitió ayer, ha emitido un comunicado.", en: "The company, whose director resigned yesterday, has issued a statement." },
        ],
      },
      {
        heading: "El cual: after prepositions and commas",
        body: [
          "El cual (la cual, los cuales, las cuales) can replace el que after a preposition, and is preferred after longer or compound prepositions (según, durante, a través de, gracias a, delante de). It's also used in non-defining clauses to make the reference clear.",
        ],
        examples: [
          { es: "El proyecto, en el cual trabajé dos años, ganó un premio.", en: "The project, which I worked on for two years, won a prize." },
          { es: "Es una ley según la cual todos deben votar.", en: "It's a law according to which everyone must vote." },
          { es: "Hablé con la hermana de Juan, la cual vive en Quito.", en: "I spoke to Juan's sister, who lives in Quito. (the sister, not Juan)" },
        ],
      },
      {
        heading: "Lo cual: which, referring to a whole idea",
        body: [
          "Lo cual, like lo que, refers back to a whole clause after a comma.",
        ],
        examples: [
          { es: "No contestó, lo cual me preocupó.", en: "He didn't answer, which worried me." },
          { es: "Subieron los precios, por lo cual las ventas cayeron.", en: "Prices went up, because of which sales fell." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "El chico que su padre es médico.",
        right: "El chico cuyo padre es médico.",
        why: "Que su is common in speech but nonstandard; use cuyo.",
      },
      {
        wrong: "La autora cuyo libros leí.",
        right: "La autora cuyos libros leí.",
        why: "Cuyo agrees with the thing possessed (libros), not the owner.",
      },
      {
        wrong: "El libro el cual compré.",
        right: "El libro que compré.",
        why: "El cual isn't used in a defining clause with no preposition.",
      },
    ],
    faqs: [
      {
        q: "Is cuyo used in speech?",
        a: "Less than in writing, but it's normal in careful speech. Many speakers rephrase instead: el chico del que te hablé, su padre es médico.",
      },
      {
        q: "Can I ask \"whose?\" with cuyo?",
        a: "No. The question is ¿De quién es? (Whose is it?). Cuyo is only a relative.",
      },
    ],
    related: ["relative-pronouns", "subjunctive-adjective-clauses", "spanish-connectors"],
  },
  {
    slug: "spanish-connectors",
    title: "Spanish Connectors: Sin Embargo, Por Lo Tanto, Ya Que and More",
    metaTitle: "Spanish Linking Words and Connectors",
    description:
      "Spanish connectors that make writing flow: contrast (sin embargo), cause (ya que, debido a), consequence (por lo tanto), addition and conclusion.",
    level: "B2",
    readingLevelPath: "b2",
    intro: [
      "Connectors (conectores) link ideas and tell the reader how they relate. Moving beyond y, pero and porque is one of the clearest signs of Advanced writing, and DELE and SIELE examiners look for it.",
      "Pay attention to punctuation: connectors that start a new idea are usually followed by a comma.",
    ],
    sections: [
      {
        heading: "Contrast and opposition",
        body: [
          "Pero is neutral. Sin embargo and no obstante are more formal and usually start a sentence. En cambio contrasts two different things. Sino corrects a negative.",
        ],
        examples: [
          { es: "El hotel era caro. Sin embargo, valió la pena.", en: "The hotel was expensive. However, it was worth it." },
          { es: "Mi hermano es tímido; yo, en cambio, hablo con todo el mundo.", en: "My brother is shy; I, on the other hand, talk to everyone." },
          { es: "No es rojo, sino naranja.", en: "It's not red, but orange." },
        ],
      },
      {
        heading: "Cause",
        body: [
          "Porque normally follows the main clause. Como goes at the start. Ya que and puesto que can go either way. Debido a and a causa de take a noun.",
        ],
        examples: [
          { es: "Como llovía, nos quedamos en casa.", en: "As it was raining, we stayed home." },
          { es: "Ya que estás aquí, cenamos juntos.", en: "Since you're here, let's have dinner together." },
          { es: "El vuelo se canceló debido a la niebla.", en: "The flight was cancelled due to fog." },
        ],
      },
      {
        heading: "Consequence",
        body: [
          "Así que and entonces are conversational. Por lo tanto, por eso, por consiguiente and de modo que are more structured.",
        ],
        examples: [
          { es: "Estaba cansada, así que me fui a dormir.", en: "I was tired, so I went to bed." },
          { es: "Los costes han subido; por lo tanto, subiremos los precios.", en: "Costs have gone up; therefore, we will raise prices." },
        ],
      },
      {
        heading: "Addition, examples and conclusion",
        body: [
          "Además, también, incluso, es más (what's more), por ejemplo, es decir, en resumen, en conclusión, por último, en definitiva.",
        ],
        examples: [
          { es: "El piso es luminoso. Además, está muy bien comunicado.", en: "The flat is bright. What's more, it has good transport links." },
          { es: "En resumen, la propuesta tiene ventajas y riesgos.", en: "In short, the proposal has advantages and risks." },
        ],
      },
      {
        heading: "Concession",
        body: [
          "Aunque, a pesar de (que), si bien (formal) and aun así admit a point and go on anyway.",
        ],
        examples: [
          { es: "A pesar de la lluvia, el concierto fue un éxito.", en: "Despite the rain, the concert was a success." },
          { es: "Si bien es cierto que hay problemas, también hay avances.", en: "While it's true there are problems, there is also progress." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "No es azul, pero verde.",
        right: "No es azul, sino verde.",
        why: "After a negative, when you replace one idea with another, use sino.",
      },
      {
        wrong: "Porque llovía, nos quedamos.",
        right: "Como llovía, nos quedamos.",
        why: "To give the cause first, use como. Porque usually comes after the main clause.",
      },
      {
        wrong: "Sin embargo el hotel era bueno.",
        right: "Sin embargo, el hotel era bueno.",
        why: "Sentence-initial connectors are followed by a comma.",
      },
    ],
    faqs: [
      {
        q: "Are sin embargo and no obstante interchangeable?",
        a: "Yes. No obstante is slightly more formal and is common in official and academic writing.",
      },
      {
        q: "Which connectors impress examiners?",
        a: "Variety and correct use matter more than rare words. A text that uses sin embargo, por lo tanto, además and en cambio correctly already shows Advanced-level range.",
      },
    ],
    related: ["discourse-markers", "concessive-clauses-aunque", "spanish-punctuation"],
  },
  {
    slug: "emphasis-and-word-order",
    title: "Emphasis and Word Order in Spanish",
    metaTitle: "Spanish Word Order and Emphasis",
    description:
      "How Spanish highlights information: flexible word order, fronting with pronouns (el libro lo tengo yo), cleft sentences and lo que pasa es que.",
    level: "B2",
    readingLevelPath: "b2",
    intro: [
      "English stresses words with the voice: \"*I* did it.\" Spanish often moves words around instead, and puts new or important information at the end of the sentence.",
    ],
    sections: [
      {
        heading: "New information goes last",
        body: [
          "Spanish word order is flexible. The subject often follows the verb, especially when the subject is the news.",
        ],
        examples: [
          { es: "—¿Quién ha llamado? —Ha llamado tu madre.", en: "—Who called? —Your mother called." },
          { es: "Me lo dijo Ana.", en: "Ana told me. (It was Ana who told me.)" },
          { es: "Llegan mañana los invitados.", en: "The guests arrive tomorrow." },
        ],
      },
      {
        heading: "Fronting the object: repeat it with a pronoun",
        body: [
          "When a direct or indirect object moves to the front, Spanish repeats it with a pronoun. This topicalizes it: \"As for the book...\"",
        ],
        examples: [
          { es: "El libro lo tengo yo.", en: "I've got the book." },
          { es: "A tu hermano no lo conozco.", en: "Your brother, I don't know him." },
          { es: "Las entradas ya las he comprado.", en: "I've already bought the tickets." },
        ],
      },
      {
        heading: "Cleft sentences: es ... quien / donde / cuando",
        body: [
          "Ser + the highlighted element + a relative. The verb ser usually matches the tense of the main verb (though es is common too: Es aquí donde nos conocimos), and the relative matches the element: quien/el que for people, donde for places, cuando for times, como for manner.",
        ],
        examples: [
          { es: "Fue Marta quien me lo contó.", en: "It was Marta who told me." },
          { es: "Es aquí donde nos conocimos.", en: "It's here that we met." },
          { es: "Fue entonces cuando lo entendí.", en: "It was then that I understood." },
          { es: "Lo que necesito es un café.", en: "What I need is a coffee." },
        ],
      },
      {
        heading: "Lo + adjective + que and lo que pasa es que",
        body: [
          "Lo + adjective or adverb + que means \"how\" in an emphatic sense. Lo que pasa es que (the thing is that) introduces an explanation or excuse.",
        ],
        examples: [
          { es: "No sabes lo difícil que fue.", en: "You don't know how hard it was." },
          { es: "Me sorprende lo bien que hablas.", en: "I'm surprised at how well you speak." },
          { es: "Lo que pasa es que no tengo tiempo.", en: "The thing is, I don't have time." },
        ],
      },
      {
        heading: "Emphatic sí and sí que",
        body: [
          "Sí before the verb, or sí que, contradicts or reinforces: \"I *do*.\"",
        ],
        examples: [
          { es: "Yo no fui, pero ella sí.", en: "I didn't go, but she did." },
          { es: "Eso sí que es una sorpresa.", en: "Now that really is a surprise." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "El libro tengo yo.",
        right: "El libro lo tengo yo.",
        why: "A fronted definite direct object (el libro, a tu hermano) must be repeated with a pronoun; only bare or emphatic objects skip it (Dinero no tengo).",
      },
      {
        wrong: "Es Marta que me lo contó.",
        right: "Es Marta quien me lo contó. / Fue Marta la que me lo contó.",
        why: "In a cleft sentence about a person, use quien or el/la que.",
      },
      {
        wrong: "No sabes cómo difícil fue.",
        right: "No sabes lo difícil que fue.",
        why: "Emphatic \"how + adjective\" is lo + adjective + que.",
      },
    ],
    faqs: [
      {
        q: "Is \"Fue en Madrid que nos conocimos\" wrong?",
        a: "It's common in Latin America (que galicado), but standard Spanish prefers donde: Fue en Madrid donde nos conocimos.",
      },
      {
        q: "Why is the subject so often after the verb?",
        a: "Because Spanish marks the subject on the verb, the subject noun is free to move to the end, where new information naturally goes.",
      },
    ],
    related: ["direct-and-indirect-object-pronouns", "spanish-connectors", "relative-pronouns"],
  },
];
