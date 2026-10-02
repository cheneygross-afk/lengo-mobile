// Synced from cheneygross-afk/lengo:src/lib/grammar/guides.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { GrammarGuide } from "./types";
import { A1_GUIDES } from "./guides-a1";
import { A2_GUIDES } from "./guides-a2";
import { B1_GUIDES } from "./guides-b1";
import { B2_GUIDES } from "./guides-b2";
import { C1_GUIDES } from "./guides-c1";
import { C2_GUIDES } from "./guides-c2";

// The first twelve guides live here; the rest are split by level into
// guides-<level>.ts so no one file gets unwieldy.
const CORE_GUIDES: GrammarGuide[] = [
  {
    slug: "ser-vs-estar",
    title: "Ser vs. Estar: When to Use Each",
    metaTitle: "Ser vs. Estar: The Simple Rule, With Examples",
    description:
      "Ser and estar both mean \"to be\" in Spanish. Learn the difference with clear rules, real examples, the adjectives that change meaning, and common mistakes.",
    level: "A1",
    readingLevelPath: "a1",
    intro: [
      "Spanish has two verbs that mean \"to be\": ser and estar. English speakers usually hear a rule like \"ser is permanent, estar is temporary.\" It is a decent starting point, but it breaks quickly: you are dead with estar (estar muerto) and a party is at 8 p.m. with ser (la fiesta es a las ocho).",
      "A more reliable way to think about it: ser tells you what something is, its identity and defining traits. Estar tells you how or where something is, its state or location at the moment.",
    ],
    sections: [
      {
        heading: "Use ser for identity and characteristics",
        body: [
          "Use ser for who or what someone or something is: names, jobs, nationality, origin, what something is made of, and traits you would use to describe it to someone who has never seen it.",
          "Ser is also the verb for time, dates, and where an event takes place.",
        ],
        examples: [
          { es: "Soy Ana. Soy de México.", en: "I'm Ana. I'm from Mexico." },
          { es: "Mi hermano es médico.", en: "My brother is a doctor." },
          { es: "La mesa es de madera.", en: "The table is (made of) wood." },
          { es: "Son las tres y media.", en: "It's three thirty." },
          { es: "El concierto es en el parque.", en: "The concert is (takes place) in the park." },
        ],
      },
      {
        heading: "Use estar for states, location, and results",
        body: [
          "Use estar for how someone feels, the condition something is in right now, and where a person or object is located.",
          "Estar is also the helper verb for the progressive tenses (estoy comiendo, \"I'm eating\").",
        ],
        examples: [
          { es: "Estoy cansado hoy.", en: "I'm tired today." },
          { es: "La sopa está fría.", en: "The soup is cold." },
          { es: "¿Dónde está el baño?", en: "Where is the bathroom?" },
          { es: "Madrid está en España.", en: "Madrid is in Spain." },
          { es: "Estamos estudiando.", en: "We're studying." },
        ],
      },
      {
        heading: "Adjectives that change meaning",
        body: [
          "Some adjectives mean something different depending on which verb you use. These are worth memorizing, because using the wrong one can say something you didn't mean.",
        ],
        examples: [
          { es: "Es aburrido. / Está aburrido.", en: "He's boring. / He's bored." },
          { es: "Es listo. / Está listo.", en: "He's clever. / He's ready." },
          { es: "Es rico. / Está rico.", en: "He's rich. / It's delicious." },
          { es: "Es malo. / Está malo.", en: "He's a bad person. / He's sick." },
          { es: "Es verde. / Está verde.", en: "It's green. / It's unripe." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Soy cansado.",
        right: "Estoy cansado.",
        why: "Being tired is a state you're in, not part of who you are.",
      },
      {
        wrong: "La fiesta está en mi casa.",
        right: "La fiesta es en mi casa.",
        why: "Where an event takes place uses ser. Estar is for where people and objects are.",
      },
      {
        wrong: "Está profesora.",
        right: "Es profesora.",
        why: "Professions are identity, so they take ser, even if it's a temporary job.",
      },
    ],
    faqs: [
      {
        q: "Is \"ser is permanent, estar is temporary\" correct?",
        a: "It works for many beginner sentences, but not all. Death (estar muerto) and location (Madrid está en España) use estar even though they are permanent. \"Identity vs. state\" is a more reliable rule.",
      },
      {
        q: "Do I use ser or estar for location?",
        a: "Estar for where a person, place, or thing is. Ser only for where an event takes place.",
      },
      {
        q: "Which verb do I use with feelings?",
        a: "Estar: estoy feliz, estoy triste, estoy nervioso. Personality traits use ser: es feliz means \"he's a happy person.\"",
      },
    ],
    related: ["saber-vs-conocer", "por-vs-para", "reflexive-verbs"],
  },
  {
    slug: "por-vs-para",
    title: "Por vs. Para: A Clear Guide",
    metaTitle: "Por vs. Para: When to Use Each (With Examples)",
    description:
      "Por and para both translate as \"for\" in Spanish. Learn when to use each with simple rules, many examples, fixed expressions and the most common mistakes.",
    level: "A2",
    readingLevelPath: "a2",
    intro: [
      "Por and para can both translate as \"for,\" which is exactly why they are confusing. The good news is that most uses fall into a few patterns.",
      "A helpful picture: para points forward to a goal, destination, deadline, or recipient. Por looks back at a cause, or describes the path, exchange, or duration involved.",
    ],
    sections: [
      {
        heading: "Para: goals, destinations, and deadlines",
        body: [
          "Use para for purpose (in order to), destination, a deadline, the person something is intended for, and opinions (\"for me\").",
        ],
        examples: [
          { es: "Estudio para aprender.", en: "I study (in order) to learn." },
          { es: "Salimos para Lima mañana.", en: "We leave for Lima tomorrow." },
          { es: "Necesito el informe para el lunes.", en: "I need the report by Monday." },
          { es: "Este regalo es para ti.", en: "This gift is for you." },
          { es: "Para mí, es demasiado caro.", en: "For me (in my opinion), it's too expensive." },
        ],
      },
      {
        heading: "Por: cause, exchange, duration, and movement through",
        body: [
          "Use por for the reason behind something, exchanges and prices, how long something lasts, movement through or around a place, means of communication or transport, and the agent in a passive sentence.",
        ],
        examples: [
          { es: "Gracias por tu ayuda.", en: "Thanks for your help." },
          { es: "Lo compré por diez euros.", en: "I bought it for ten euros." },
          { es: "Viví allí por dos años.", en: "I lived there for two years." },
          { es: "Caminamos por el parque.", en: "We walked through the park." },
          { es: "Te llamo por teléfono.", en: "I'll call you on the phone." },
          { es: "El libro fue escrito por Cortázar.", en: "The book was written by Cortázar." },
        ],
      },
      {
        heading: "Fixed expressions with por",
        body: [
          "Many everyday expressions simply use por. Learn them as whole phrases.",
        ],
        examples: [
          { es: "por favor", en: "please" },
          { es: "por fin", en: "finally" },
          { es: "por eso", en: "that's why" },
          { es: "por ejemplo", en: "for example" },
          { es: "por supuesto", en: "of course" },
          { es: "por la mañana", en: "in the morning" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Gracias para todo.",
        right: "Gracias por todo.",
        why: "You're thanking someone because of something, so it's a cause: por.",
      },
      {
        wrong: "Trabajo por ganar dinero.",
        right: "Trabajo para ganar dinero.",
        why: "\"In order to\" is a purpose, which always uses para.",
      },
      {
        wrong: "Lo cambié para uno nuevo.",
        right: "Lo cambié por uno nuevo.",
        why: "Swapping one thing for another is an exchange: por.",
      },
    ],
    faqs: [
      {
        q: "Is there one rule for por vs. para?",
        a: "Not a perfect one, but \"para = goal or destination, por = cause or path\" covers most sentences. Fixed expressions like por favor and por fin are simply memorized.",
      },
      {
        q: "Por or para with time?",
        a: "Para for a deadline (para el viernes, \"by Friday\"). Por for a duration (por una hora, \"for an hour\") or a general part of the day (por la tarde).",
      },
      {
        q: "Can the choice change the meaning?",
        a: "Yes. Lo hice por ti means \"I did it because of you / on your behalf.\" Lo hice para ti means \"I made it for you\" (you're the recipient).",
      },
    ],
    related: ["ser-vs-estar", "preterite-vs-imperfect", "direct-and-indirect-object-pronouns"],
  },
  {
    slug: "preterite-vs-imperfect",
    title: "Preterite vs. Imperfect: Spanish Past Tenses Explained",
    metaTitle: "Preterite vs. Imperfect in Spanish",
    description:
      "When to use the Spanish preterite and when the imperfect, with signal words, examples, and how the two past tenses work together in a story.",
    level: "A2",
    readingLevelPath: "a2",
    intro: [
      "Spanish has two simple past tenses, and English speakers often use the wrong one because English doesn't make the same distinction. \"I ate\" can be comí (preterite) or comía (imperfect), depending on what you mean.",
      "The short version: the preterite reports completed events, what happened. The imperfect describes the background, what was going on or what used to happen.",
    ],
    sections: [
      {
        heading: "The preterite: completed actions",
        body: [
          "Use the preterite for actions with a clear beginning or end, a specific number of times, or a sequence of events that move a story forward.",
        ],
        examples: [
          { es: "Ayer comí paella.", en: "Yesterday I ate paella." },
          { es: "Vivimos en Chile tres años.", en: "We lived in Chile for three years (and then left)." },
          { es: "Llegó, se sentó y pidió un café.", en: "He arrived, sat down, and ordered a coffee." },
        ],
      },
      {
        heading: "The imperfect: background and habits",
        body: [
          "Use the imperfect for descriptions, ongoing actions with no clear end, habits (\"used to\" or \"would\"), age, time, and feelings in the past.",
        ],
        examples: [
          { es: "De niño, comía paella los domingos.", en: "As a kid, I used to eat paella on Sundays." },
          { es: "Hacía sol y la gente paseaba.", en: "It was sunny and people were strolling." },
          { es: "Eran las diez y tenía sueño.", en: "It was ten o'clock and I was sleepy." },
        ],
      },
      {
        heading: "Using both in one sentence",
        body: [
          "In a story, the imperfect sets the scene and the preterite is the event that interrupts it.",
        ],
        examples: [
          { es: "Leía cuando sonó el teléfono.", en: "I was reading when the phone rang." },
          { es: "Llovía mucho, así que nos quedamos en casa.", en: "It was raining a lot, so we stayed home." },
        ],
      },
      {
        heading: "Signal words",
        body: [
          "These words often point to one tense or the other. They're hints, not rules.",
          "Preterite: ayer, anoche, el año pasado, una vez, de repente, en 2019.",
          "Imperfect: siempre, a menudo, todos los días, mientras, de niño, antes.",
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Cuando fui niño, jugué al fútbol todos los días.",
        right: "Cuando era niño, jugaba al fútbol todos los días.",
        why: "Childhood and daily habits are background, so both verbs go in the imperfect.",
      },
      {
        wrong: "Estaba en Madrid el verano pasado por dos semanas.",
        right: "Estuve en Madrid dos semanas el verano pasado.",
        why: "A trip with a defined length is a completed event: preterite.",
      },
    ],
    faqs: [
      {
        q: "Is the imperfect the same as \"was -ing\"?",
        a: "Often, yes: comía can mean \"I was eating.\" But it also means \"I used to eat\" or simply describes a past state, like era alto (\"he was tall\").",
      },
      {
        q: "Do some verbs change meaning between the two tenses?",
        a: "Yes. Conocí means \"I met\" while conocía means \"I knew.\" Supe means \"I found out\" while sabía means \"I knew.\" Quise means \"I tried\" while quería means \"I wanted.\"",
      },
    ],
    related: ["por-vs-para", "spanish-subjunctive", "saber-vs-conocer"],
  },
  {
    slug: "spanish-subjunctive",
    title: "The Spanish Subjunctive: When to Use It",
    metaTitle: "Spanish Subjunctive: When to Use It (WEIRDO)",
    description:
      "A plain-English guide to the Spanish present subjunctive: what it is, the triggers that need it (wishes, emotions, doubt), how to form it, common mistakes.",
    level: "B1",
    readingLevelPath: "b1",
    intro: [
      "The subjunctive isn't a tense. It's a mood, a different set of verb forms Spanish uses when a sentence is about something that isn't simply stated as fact: a wish, a feeling, a doubt, or a possibility.",
      "Most of the time it appears after que, in a second clause with a different subject: Quiero que vengas (\"I want you to come\").",
    ],
    sections: [
      {
        heading: "How to form the present subjunctive",
        body: [
          "Take the yo form of the present tense, drop the -o, and add the \"opposite\" endings: -ar verbs take -e endings, and -er/-ir verbs take -a endings.",
          "Because it starts from the yo form, irregular stems carry over: tengo becomes tenga, hago becomes haga, conozco becomes conozca.",
          "A few verbs are fully irregular: ser (sea), estar (esté), ir (vaya), saber (sepa), haber (haya), dar (dé).",
        ],
        examples: [
          { es: "hablar → hable, hables, hable, hablemos, habléis, hablen", en: "to speak" },
          { es: "comer → coma, comas, coma, comamos, comáis, coman", en: "to eat" },
          { es: "tener → tenga, tengas, tenga, tengamos, tengáis, tengan", en: "to have" },
        ],
      },
      {
        heading: "The triggers: WEIRDO",
        body: [
          "Many learners use the acronym WEIRDO for situations that call for the subjunctive: Wishes, Emotions, Impersonal expressions, Recommendations, Doubt or denial, and Ojalá.",
        ],
        examples: [
          { es: "Espero que estés bien.", en: "I hope you're well. (wish)" },
          { es: "Me alegra que hayas venido.", en: "I'm glad you came. (emotion)" },
          { es: "Es importante que duermas.", en: "It's important that you sleep. (impersonal)" },
          { es: "Te recomiendo que lo pruebes.", en: "I recommend you try it. (recommendation)" },
          { es: "Dudo que llueva.", en: "I doubt it will rain. (doubt)" },
          { es: "Ojalá que gane mi equipo.", en: "I hope my team wins. (ojalá)" },
        ],
      },
      {
        heading: "After certain conjunctions",
        body: [
          "Some connectors always take the subjunctive: para que, antes de que, sin que, a menos que, con tal de que.",
          "Time words like cuando, hasta que, and en cuanto take the subjunctive when they refer to the future.",
        ],
        examples: [
          { es: "Te lo explico para que lo entiendas.", en: "I'll explain it so that you understand." },
          { es: "Llámame cuando llegues.", en: "Call me when you arrive." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Quiero que tú vienes.",
        right: "Quiero que vengas.",
        why: "A wish about someone else's action needs the subjunctive.",
      },
      {
        wrong: "Creo que sea verdad.",
        right: "Creo que es verdad.",
        why: "Creer que expresses belief, not doubt, so it takes the indicative. No creo que sea verdad does take the subjunctive.",
      },
      {
        wrong: "Cuando llego, te llamo.",
        right: "Cuando llegue, te llamo.",
        why: "Cuando pointing to the future takes the subjunctive.",
      },
    ],
    faqs: [
      {
        q: "Do Spanish speakers really use the subjunctive in conversation?",
        a: "Constantly. Phrases like ojalá, que te vaya bien, and cuando puedas are everyday speech, not formal writing.",
      },
      {
        q: "What if both clauses have the same subject?",
        a: "Use an infinitive instead: Quiero ir (\"I want to go\"), not Quiero que yo vaya.",
      },
      {
        q: "What level is the subjunctive?",
        a: "Most courses introduce the present subjunctive at B1, and the imperfect subjunctive at B2.",
      },
    ],
    related: ["imperfect-subjunctive", "spanish-commands", "si-clauses"],
  },
  {
    slug: "gustar-and-similar-verbs",
    title: "How to Use Gustar (and Verbs Like It)",
    metaTitle: "How to Use Gustar: Me Gusta vs. Me Gustan",
    description:
      "Gustar works backwards from English \"to like.\" Learn me gusta vs. me gustan, a mí and a ella, and verbs that work the same way: encantar, doler, interesar.",
    level: "A1",
    readingLevelPath: "a1",
    intro: [
      "Gustar doesn't really mean \"to like.\" It means \"to be pleasing to.\" So me gusta el café literally says \"coffee is pleasing to me.\"",
      "Once you see it that way, the grammar makes sense: the thing you like is the subject, and the verb agrees with it.",
    ],
    sections: [
      {
        heading: "Me gusta vs. me gustan",
        body: [
          "Use gusta with one thing or with an action (an infinitive). Use gustan with more than one thing.",
          "The pronoun in front shows who does the liking: me, te, le, nos, os, les.",
        ],
        examples: [
          { es: "Me gusta el chocolate.", en: "I like chocolate." },
          { es: "Me gustan los perros.", en: "I like dogs." },
          { es: "Nos gusta bailar.", en: "We like to dance." },
          { es: "¿Te gustan las películas de terror?", en: "Do you like horror movies?" },
        ],
      },
      {
        heading: "Adding a mí, a ti, a ella",
        body: [
          "Le and les can refer to several people, so Spanish often adds a + person to be clear. You can also add it for emphasis. The pronoun stays even when you add the a phrase.",
        ],
        examples: [
          { es: "A María le gusta el té.", en: "María likes tea." },
          { es: "A mí me gusta, pero a él no.", en: "I like it, but he doesn't." },
          { es: "A mis padres les gusta viajar.", en: "My parents like to travel." },
        ],
      },
      {
        heading: "Other verbs that work the same way",
        body: [
          "A whole family of verbs uses the same pattern.",
        ],
        examples: [
          { es: "Me encanta esta canción.", en: "I love this song." },
          { es: "Me duele la cabeza.", en: "My head hurts." },
          { es: "Nos interesa la historia.", en: "We're interested in history." },
          { es: "Me falta tiempo.", en: "I'm short on time." },
          { es: "¿Te molesta el ruido?", en: "Does the noise bother you?" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Yo gusto el café.",
        right: "Me gusta el café.",
        why: "Yo gusto would mean \"I am pleasing.\" The coffee is the subject.",
      },
      {
        wrong: "Me gusta las fresas.",
        right: "Me gustan las fresas.",
        why: "The verb agrees with the thing liked. Strawberries are plural.",
      },
      {
        wrong: "A Juan gusta el fútbol.",
        right: "A Juan le gusta el fútbol.",
        why: "The indirect object pronoun le is required even with a Juan.",
      },
    ],
    faqs: [
      {
        q: "How do I say \"I like you\" with gustar?",
        a: "Me gustas, since you are the one who is pleasing. It usually implies attraction; for friends, people say me caes bien.",
      },
      {
        q: "Is it me gusta or me gustan with two verbs?",
        a: "Me gusta. Infinitives are singular even in a list: Me gusta leer y cocinar.",
      },
    ],
    related: ["direct-and-indirect-object-pronouns", "reflexive-verbs", "ser-vs-estar"],
  },
  {
    slug: "reflexive-verbs",
    title: "Spanish Reflexive Verbs: A Beginner's Guide",
    metaTitle: "Spanish Reflexive Verbs: Pronouns and Uses",
    description:
      "How Spanish reflexive verbs work: me, te, se, nos, os, where the pronoun goes, daily-routine verbs, and verbs that change meaning with se.",
    level: "A1",
    readingLevelPath: "a1",
    intro: [
      "A reflexive verb is one where the subject does something to itself. You'll spot them in the dictionary by the -se on the end: levantarse, ducharse, llamarse.",
      "They are everywhere in daily routines, which is why you meet them so early.",
    ],
    sections: [
      {
        heading: "The reflexive pronouns",
        body: [
          "Each subject has its own pronoun: yo me, tú te, él/ella/usted se, nosotros nos, vosotros os, ellos/ustedes se.",
          "The pronoun goes before a conjugated verb, or attaches to the end of an infinitive or gerund.",
        ],
        examples: [
          { es: "Me llamo Carlos.", en: "My name is Carlos. (I call myself Carlos.)" },
          { es: "Nos levantamos a las siete.", en: "We get up at seven." },
          { es: "Voy a ducharme. / Me voy a duchar.", en: "I'm going to shower." },
        ],
      },
      {
        heading: "Daily-routine verbs",
        body: [
          "These are the verbs you'll use to describe your day.",
        ],
        examples: [
          { es: "despertarse", en: "to wake up" },
          { es: "levantarse", en: "to get up" },
          { es: "vestirse", en: "to get dressed" },
          { es: "cepillarse los dientes", en: "to brush your teeth" },
          { es: "acostarse", en: "to go to bed" },
        ],
      },
      {
        heading: "Verbs that change meaning with se",
        body: [
          "Some verbs take on a different meaning in their reflexive form.",
        ],
        examples: [
          { es: "ir / irse", en: "to go / to leave" },
          { es: "dormir / dormirse", en: "to sleep / to fall asleep" },
          { es: "llamar / llamarse", en: "to call / to be named" },
          { es: "poner / ponerse", en: "to put / to put on (clothes), to become" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Me lavo mis manos.",
        right: "Me lavo las manos.",
        why: "With body parts and clothing, Spanish uses the article because the reflexive pronoun already shows whose hands they are.",
      },
      {
        wrong: "Levanto a las siete.",
        right: "Me levanto a las siete.",
        why: "Without me, levantar means to lift something else.",
      },
    ],
    faqs: [
      {
        q: "Why is it \"se\" for both he and they?",
        a: "Spanish uses se for all third-person forms (él, ella, usted, ellos, ellas, ustedes). Context tells you who.",
      },
      {
        q: "Can a reflexive verb mean \"each other\"?",
        a: "Yes, in the plural: Nos vemos mañana (\"We'll see each other tomorrow\"), Se quieren mucho (\"They love each other a lot\").",
      },
    ],
    related: ["gustar-and-similar-verbs", "direct-and-indirect-object-pronouns", "ser-vs-estar"],
  },
  {
    slug: "direct-and-indirect-object-pronouns",
    title: "Direct and Indirect Object Pronouns in Spanish",
    metaTitle: "Spanish Object Pronouns: Lo, Le, Se Lo",
    description:
      "Spanish object pronouns: lo, la, los, las vs. le and les, where they go, how to combine them, and why le lo becomes se lo. With examples and mistakes.",
    level: "A2",
    readingLevelPath: "a2",
    intro: [
      "Object pronouns replace nouns so you don't have to repeat them. In \"I bought the book and gave it to her,\" \"it\" is a direct object and \"to her\" is an indirect object.",
      "Spanish has a pronoun for each, and they go in a different place than in English.",
    ],
    sections: [
      {
        heading: "Direct object pronouns: what receives the action",
        body: [
          "me, te, lo/la, nos, os, los/las. Lo and la match the gender of the noun they replace.",
        ],
        examples: [
          { es: "¿Tienes las llaves? Sí, las tengo.", en: "Do you have the keys? Yes, I have them." },
          { es: "Compré el libro y lo leí en un día.", en: "I bought the book and read it in a day." },
        ],
      },
      {
        heading: "Indirect object pronouns: to or for whom",
        body: [
          "me, te, le, nos, os, les. These tell you who receives the direct object or benefits from the action.",
        ],
        examples: [
          { es: "Le escribí una carta.", en: "I wrote him/her a letter." },
          { es: "¿Me pasas la sal?", en: "Can you pass me the salt?" },
        ],
      },
      {
        heading: "Where the pronouns go",
        body: [
          "Before a conjugated verb. With an infinitive, a gerund, or a positive command, they can attach to the end. The indirect pronoun always comes first.",
        ],
        examples: [
          { es: "Te lo doy.", en: "I'm giving it to you." },
          { es: "Voy a dártelo.", en: "I'm going to give it to you." },
          { es: "¡Dímelo!", en: "Tell it to me!" },
        ],
      },
      {
        heading: "Why le lo becomes se lo",
        body: [
          "When le or les comes right before lo, la, los, or las, it changes to se. This is purely for sound.",
        ],
        examples: [
          { es: "Le di el regalo → Se lo di.", en: "I gave him the gift → I gave it to him." },
          { es: "Les mandé las fotos → Se las mandé.", en: "I sent them the photos → I sent them to them." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Le lo compré.",
        right: "Se lo compré.",
        why: "Le/les before lo/la/los/las always becomes se.",
      },
      {
        wrong: "Lo voy a lo comprar.",
        right: "Lo voy a comprar. / Voy a comprarlo.",
        why: "The pronoun goes in one place: before the conjugated verb or attached to the infinitive, never both.",
      },
    ],
    faqs: [
      {
        q: "Why do Spanish speakers say le and a él in the same sentence?",
        a: "Adding a él, a ella, or a usted clarifies who le refers to, or adds emphasis. The pronoun stays even with the clarifying phrase.",
      },
      {
        q: "What is leísmo?",
        a: "In parts of Spain, people use le instead of lo for a male person: Le vi ayer (\"I saw him yesterday\"). It's accepted for people, but lo is the standard everywhere.",
      },
    ],
    related: ["gustar-and-similar-verbs", "spanish-commands", "reflexive-verbs"],
  },
  {
    slug: "saber-vs-conocer",
    title: "Saber vs. Conocer: The Difference",
    metaTitle: "Saber vs. Conocer: When to Use Each",
    description:
      "Saber and conocer both mean \"to know.\" Learn which to use for facts, skills, people and places, with examples, conjugation tips and the preterite change.",
    level: "A1",
    readingLevelPath: "a1",
    intro: [
      "English has one verb for \"to know\"; Spanish has two. Saber is knowing information or how to do something. Conocer is being familiar with a person, place, or thing.",
    ],
    sections: [
      {
        heading: "Saber: facts and skills",
        body: [
          "Use saber for facts, information, and, followed by an infinitive, for knowing how to do something. Note the irregular yo form: sé.",
        ],
        examples: [
          { es: "No sé dónde está.", en: "I don't know where it is." },
          { es: "¿Sabes nadar?", en: "Do you know how to swim?" },
          { es: "Sabemos que es verdad.", en: "We know it's true." },
        ],
      },
      {
        heading: "Conocer: people, places, and familiarity",
        body: [
          "Use conocer for people you've met, places you've been, and things you're familiar with, like a book, a song, or a type of food. The yo form is conozco. A person as the object takes the personal a.",
        ],
        examples: [
          { es: "Conozco a tu hermana.", en: "I know your sister." },
          { es: "¿Conoces Buenos Aires?", en: "Have you been to Buenos Aires?" },
          { es: "No conozco esa canción.", en: "I don't know that song." },
        ],
      },
      {
        heading: "The meaning change in the past",
        body: [
          "In the preterite, both verbs describe a moment of change: conocí means \"I met,\" and supe means \"I found out.\"",
        ],
        examples: [
          { es: "Conocí a mi novia en 2020.", en: "I met my girlfriend in 2020." },
          { es: "Supe la noticia ayer.", en: "I found out the news yesterday." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Sé a Pedro.",
        right: "Conozco a Pedro.",
        why: "Knowing a person is familiarity, so it's conocer.",
      },
      {
        wrong: "Conozco cocinar.",
        right: "Sé cocinar.",
        why: "Knowing how to do something is saber + infinitive.",
      },
    ],
    faqs: [
      {
        q: "Which one do I use with a phone number or address?",
        a: "Saber, since it's a piece of information: ¿Sabes su número?",
      },
      {
        q: "Can I use saber with a subject I've studied?",
        a: "Saber for specific knowledge (Sé mucho de historia), conocer for general familiarity (Conozco bien la historia de Perú). Both are heard.",
      },
    ],
    related: ["ser-vs-estar", "preterite-vs-imperfect", "reflexive-verbs"],
  },
  {
    slug: "spanish-future-tense",
    title: "The Spanish Future Tense (and Ir a + Infinitive)",
    metaTitle: "Spanish Future Tense: Forms, Irregulars, Ir a",
    description:
      "How to talk about the future in Spanish: the simple future (hablaré), ir a + infinitive, irregular stems, and the future of probability (¿Dónde estará?).",
    level: "B1",
    readingLevelPath: "b1",
    intro: [
      "Spanish has two main ways to talk about the future. In everyday conversation, ir a + infinitive (voy a comer) is the most common. The simple future (comeré) is a little more formal or distant, and it has a special use for guessing.",
    ],
    sections: [
      {
        heading: "Ir a + infinitive",
        body: [
          "Conjugate ir in the present, add a, then the infinitive. It works like \"going to\" in English.",
        ],
        examples: [
          { es: "Voy a llamar a mi madre.", en: "I'm going to call my mother." },
          { es: "¿Qué vas a hacer este fin de semana?", en: "What are you going to do this weekend?" },
        ],
      },
      {
        heading: "The simple future",
        body: [
          "Add the endings -é, -ás, -á, -emos, -éis, -án to the whole infinitive. The endings are the same for -ar, -er, and -ir verbs.",
        ],
        examples: [
          { es: "hablaré, hablarás, hablará, hablaremos, hablaréis, hablarán", en: "I will speak, you will speak..." },
          { es: "Mañana lloverá en el norte.", en: "Tomorrow it will rain in the north." },
        ],
      },
      {
        heading: "Irregular stems",
        body: [
          "A dozen common verbs use a shortened stem with the same endings: tener (tendr-), poner (pondr-), salir (saldr-), venir (vendr-), poder (podr-), saber (sabr-), haber (habr-), querer (querr-), decir (dir-), hacer (har-).",
        ],
        examples: [
          { es: "Tendré tiempo el lunes.", en: "I'll have time on Monday." },
          { es: "Te lo diré mañana.", en: "I'll tell you tomorrow." },
        ],
      },
      {
        heading: "The future of probability",
        body: [
          "Spanish also uses the future to guess about the present, like \"I wonder\" or \"must be\" in English.",
        ],
        examples: [
          { es: "¿Dónde estará Luis?", en: "I wonder where Luis is." },
          { es: "Serán las cinco.", en: "It must be about five o'clock." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Voy comer.",
        right: "Voy a comer.",
        why: "The a is required between ir and the infinitive.",
      },
      {
        wrong: "Teneré tiempo.",
        right: "Tendré tiempo.",
        why: "Tener has an irregular future stem: tendr-.",
      },
    ],
    faqs: [
      {
        q: "Which future do people use more?",
        a: "In conversation, ir a + infinitive. The simple future is common in writing, promises, predictions, and for guessing.",
      },
      {
        q: "Can I use the present tense for the future?",
        a: "Yes, for scheduled or near-certain plans: Mañana trabajo (\"I'm working tomorrow\").",
      },
    ],
    related: ["si-clauses", "spanish-subjunctive", "preterite-vs-imperfect"],
  },
  {
    slug: "spanish-commands",
    title: "Spanish Commands (the Imperative)",
    metaTitle: "Spanish Commands: Tú, Usted and Negative",
    description:
      "How to give commands in Spanish: affirmative and negative tú commands, usted and ustedes commands, the eight irregular tú forms, and where pronouns go.",
    level: "A2",
    readingLevelPath: "a2",
    intro: [
      "Commands let you tell someone to do something: give directions, share a recipe, or just say \"come here.\" The forms depend on who you're talking to and whether the command is positive or negative.",
    ],
    sections: [
      {
        heading: "Affirmative tú commands",
        body: [
          "For regular verbs, use the él/ella form of the present tense.",
          "Eight common verbs have short irregular forms: di (decir), haz (hacer), ve (ir), pon (poner), sal (salir), sé (ser), ten (tener), ven (venir).",
        ],
        examples: [
          { es: "Habla más despacio.", en: "Speak more slowly." },
          { es: "Come las verduras.", en: "Eat the vegetables." },
          { es: "Ven aquí.", en: "Come here." },
          { es: "Haz la tarea.", en: "Do your homework." },
        ],
      },
      {
        heading: "Negative commands and usted commands",
        body: [
          "Negative tú commands and all usted/ustedes commands use the present subjunctive.",
        ],
        examples: [
          { es: "No hables tan rápido.", en: "Don't talk so fast." },
          { es: "No vengas tarde.", en: "Don't come late." },
          { es: "Pase, por favor.", en: "Come in, please. (usted)" },
          { es: "Siéntense.", en: "Sit down. (ustedes)" },
        ],
      },
      {
        heading: "Where pronouns go",
        body: [
          "Attach pronouns to the end of an affirmative command, adding an accent to keep the stress. Put them before the verb in a negative command.",
        ],
        examples: [
          { es: "Dímelo. / No me lo digas.", en: "Tell me. / Don't tell me." },
          { es: "Siéntate. / No te sientes.", en: "Sit down. / Don't sit down." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "No habla.",
        right: "No hables.",
        why: "Negative tú commands use the subjunctive form.",
      },
      {
        wrong: "Me dilo.",
        right: "Dímelo.",
        why: "In affirmative commands pronouns attach to the end, indirect before direct.",
      },
    ],
    faqs: [
      {
        q: "How do I make a command more polite?",
        a: "Add por favor, use usted, or soften it into a question: ¿Me pasas la sal?",
      },
      {
        q: "What about vosotros commands?",
        a: "Used in Spain: replace the final -r of the infinitive with -d (hablad, comed, venid).",
      },
    ],
    related: ["spanish-subjunctive", "direct-and-indirect-object-pronouns", "reflexive-verbs"],
  },
  {
    slug: "si-clauses",
    title: "Si Clauses: Conditional Sentences in Spanish",
    metaTitle: "Spanish Si Clauses: Real, Unreal and Past",
    description:
      "How to build \"if\" sentences in Spanish: real conditions, hypothetical ones with the imperfect subjunctive and conditional, and past regrets.",
    level: "B2",
    readingLevelPath: "b2",
    intro: [
      "\"If\" sentences in Spanish follow three main patterns, depending on how likely or real the situation is. Once you know the tense pairs, they become very predictable.",
    ],
    sections: [
      {
        heading: "Real or likely conditions",
        body: [
          "Si + present, then present, future, or a command.",
        ],
        examples: [
          { es: "Si llueve, nos quedamos en casa.", en: "If it rains, we stay home." },
          { es: "Si tienes tiempo, llámame.", en: "If you have time, call me." },
        ],
      },
      {
        heading: "Hypothetical or unlikely conditions",
        body: [
          "Si + imperfect subjunctive, then conditional.",
        ],
        examples: [
          { es: "Si tuviera dinero, viajaría por Sudamérica.", en: "If I had money, I'd travel around South America." },
          { es: "Si fuera tú, no lo haría.", en: "If I were you, I wouldn't do it." },
        ],
      },
      {
        heading: "Past situations that didn't happen",
        body: [
          "Si + pluperfect subjunctive, then conditional perfect.",
        ],
        examples: [
          { es: "Si hubiera estudiado, habría aprobado.", en: "If I had studied, I would have passed." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Si tendría dinero, viajaría.",
        right: "Si tuviera dinero, viajaría.",
        why: "The conditional never goes right after si. Use the imperfect subjunctive.",
      },
      {
        wrong: "Si llueva, no salgo.",
        right: "Si llueve, no salgo.",
        why: "The present subjunctive is never used after si.",
      },
    ],
    faqs: [
      {
        q: "Can the si clause go second?",
        a: "Yes. Viajaría si tuviera dinero means the same thing. Drop the comma when si comes second.",
      },
      {
        q: "Tuviera or tuviese?",
        a: "Both are correct forms of the imperfect subjunctive. The -ra forms are far more common in speech.",
      },
    ],
    related: ["imperfect-subjunctive", "spanish-future-tense", "spanish-subjunctive"],
  },
  {
    slug: "imperfect-subjunctive",
    title: "The Imperfect Subjunctive in Spanish",
    metaTitle: "Spanish Imperfect Subjunctive: Forms and Uses",
    description:
      "The Spanish imperfect subjunctive (hablara, comiera, fuera): how to form it from the preterite, when it's required, and how it works with the conditional.",
    level: "B2",
    readingLevelPath: "b2",
    intro: [
      "The imperfect subjunctive is the past version of the subjunctive. You need it when a subjunctive trigger (a wish, emotion, doubt, or recommendation) happens in the past, and in hypothetical si clauses.",
    ],
    sections: [
      {
        heading: "How to form it",
        body: [
          "Take the ellos form of the preterite, drop -ron, and add -ra, -ras, -ra, -ramos, -rais, -ran. The nosotros form takes an accent.",
          "Because it comes from the preterite, all its irregulars carry over: tuvieron gives tuviera, fueron gives fuera, dijeron gives dijera.",
        ],
        examples: [
          { es: "hablaron → hablara, hablaras, hablara, habláramos, hablarais, hablaran", en: "to speak" },
          { es: "tuvieron → tuviera, tuvieras, tuviera, tuviéramos, tuvierais, tuvieran", en: "to have" },
        ],
      },
      {
        heading: "When the trigger is in the past",
        body: [
          "If the main verb is in a past tense or the conditional, the subjunctive verb after que usually moves into the imperfect subjunctive.",
        ],
        examples: [
          { es: "Quería que vinieras.", en: "I wanted you to come." },
          { es: "Me pidió que no dijera nada.", en: "She asked me not to say anything." },
          { es: "Sería mejor que lo hicieras tú.", en: "It would be better if you did it." },
        ],
      },
      {
        heading: "Politeness and wishes",
        body: [
          "Quisiera is a polite way to say \"I would like.\" Ojalá with the imperfect subjunctive expresses a wish that's unlikely or contrary to reality.",
        ],
        examples: [
          { es: "Quisiera un café, por favor.", en: "I'd like a coffee, please." },
          { es: "Ojalá estuvieras aquí.", en: "I wish you were here." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Quería que vengas.",
        right: "Quería que vinieras.",
        why: "A past-tense trigger usually takes the imperfect subjunctive.",
      },
      {
        wrong: "Si sería rico...",
        right: "Si fuera rico...",
        why: "After si in a hypothetical, use the imperfect subjunctive, not the conditional.",
      },
    ],
    faqs: [
      {
        q: "What's the difference between -ra and -se endings?",
        a: "Hablara and hablase mean the same thing. The -se forms are more common in Spain and in writing.",
      },
      {
        q: "Is the imperfect subjunctive used in everyday speech?",
        a: "Yes, especially in si clauses, with ojalá, and in reported requests like Me dijo que esperara.",
      },
    ],
    related: ["si-clauses", "spanish-subjunctive", "preterite-vs-imperfect"],
  },
];

export const GRAMMAR_GUIDES: GrammarGuide[] = [
  ...CORE_GUIDES,
  ...A1_GUIDES,
  ...A2_GUIDES,
  ...B1_GUIDES,
  ...B2_GUIDES,
  ...C1_GUIDES,
  ...C2_GUIDES,
];

export function getGrammarGuide(slug: string): GrammarGuide | undefined {
  return GRAMMAR_GUIDES.find((guide) => guide.slug === slug);
}
