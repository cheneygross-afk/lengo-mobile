// Synced from cheneygross-afk/lengo:src/lib/grammar/guides-a2.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { GrammarGuide } from "./types";

export const A2_GUIDES: GrammarGuide[] = [
  {
    slug: "personal-a",
    title: "The Personal A in Spanish",
    metaTitle: "The Personal A in Spanish: When to Use It",
    description:
      "Spanish puts \"a\" before a direct object that is a person: Veo a María. Learn when the personal a is required, when it's dropped, and tricky cases.",
    level: "A2",
    readingLevelPath: "a2",
    intro: [
      "When the direct object of a verb is a specific person, Spanish puts a in front of it. Veo el coche (I see the car), but Veo a Carlos (I see Carlos). The a has no English translation; it simply marks the person receiving the action.",
      "It exists partly because Spanish word order is flexible. The a makes it clear who is doing what to whom, even when the object comes first.",
    ],
    sections: [
      {
        heading: "Use it with specific people",
        body: [
          "Use the personal a before names, family members, people described with el/la or a possessive, and pronouns that refer to people: alguien, nadie, quién, todos.",
        ],
        examples: [
          { es: "Conozco a tu hermano.", en: "I know your brother." },
          { es: "Busco a la profesora.", en: "I'm looking for the teacher." },
          { es: "¿Ves a alguien?", en: "Do you see anyone?" },
          { es: "No conozco a nadie aquí.", en: "I don't know anyone here." },
          { es: "¿A quién llamas?", en: "Who are you calling?" },
        ],
      },
      {
        heading: "Pets and personified things",
        body: [
          "Pets and animals you have a relationship with usually get the a; animals in general don't. Places and things can take it when they are treated like people, for example a country acting as a team or a government.",
        ],
        examples: [
          { es: "Paseo a mi perro todos los días.", en: "I walk my dog every day." },
          { es: "Vi un perro en la calle.", en: "I saw a dog in the street." },
          { es: "España venció a Italia.", en: "Spain beat Italy." },
        ],
      },
      {
        heading: "When there is no personal a",
        body: [
          "Leave it out when the person is unspecified or hypothetical (often after buscar or necesitar with un/una), and after tener and hay, even with people.",
          "Don't confuse it with the a of direction (Voy a Madrid) or with the a before an indirect object (Le doy el libro a Ana), which is always there.",
        ],
        examples: [
          { es: "Busco un médico que hable inglés.", en: "I'm looking for a doctor who speaks English (any doctor)." },
          { es: "Busco al médico que habla inglés.", en: "I'm looking for the doctor who speaks English (a specific one)." },
          { es: "Tengo tres hermanos.", en: "I have three brothers." },
          { es: "Hay mucha gente.", en: "There are a lot of people." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Visito mi abuela.",
        right: "Visito a mi abuela.",
        why: "Your grandmother is a specific person, so she takes the personal a.",
      },
      {
        wrong: "Tengo a dos hijos.",
        right: "Tengo dos hijos.",
        why: "Tener doesn't take the personal a.",
      },
      {
        wrong: "Veo a la película.",
        right: "Veo la película.",
        why: "A film is a thing, not a person.",
      },
    ],
    faqs: [
      {
        q: "Does a + el become al here too?",
        a: "Yes: Llamo al médico. The contraction happens with every a.",
      },
      {
        q: "Do I use it with \"querer\"?",
        a: "Yes, and it changes the meaning. Quiero a mi novia means \"I love my girlfriend.\" Quiero una novia means \"I want a girlfriend.\"",
      },
    ],
    related: ["direct-and-indirect-object-pronouns", "prepositions-a-en-de-con", "spanish-negative-words"],
  },
  {
    slug: "spanish-preterite-tense",
    title: "The Spanish Preterite Tense: Regular Verbs",
    metaTitle: "Spanish Preterite: Regular Verbs and Spelling",
    description:
      "How to conjugate regular -ar, -er and -ir verbs in the Spanish preterite, the yo spelling changes (busqué, llegué, empecé), accents, and when to use it.",
    level: "A2",
    readingLevelPath: "a2",
    intro: [
      "The preterite (pretérito indefinido or pretérito perfecto simple) is the past tense for completed actions: Ayer hablé con Ana, \"Yesterday I spoke with Ana.\"",
      "Regular verbs have one set of endings for -ar and a shared set for -er and -ir. The written accents on yo and él/ella matter: hablo is \"I speak\" but habló is \"he spoke.\"",
    ],
    sections: [
      {
        heading: "The endings",
        body: [
          "Note that the nosotros form of -ar and -ir verbs is the same as in the present. Context tells you which is meant.",
        ],
        table: {
          headers: ["", "hablar", "comer", "vivir"],
          rows: [
            ["yo", "hablé", "comí", "viví"],
            ["tú", "hablaste", "comiste", "viviste"],
            ["él / ella / usted", "habló", "comió", "vivió"],
            ["nosotros", "hablamos", "comimos", "vivimos"],
            ["vosotros", "hablasteis", "comisteis", "vivisteis"],
            ["ellos / ustedes", "hablaron", "comieron", "vivieron"],
          ],
        },
        examples: [
          { es: "Anoche cené con mis padres.", en: "Last night I had dinner with my parents." },
          { es: "¿A qué hora volviste?", en: "What time did you get back?" },
          { es: "Escribieron un correo al director.", en: "They wrote an email to the director." },
        ],
      },
      {
        heading: "Spelling changes in the yo form",
        body: [
          "Verbs ending in -car, -gar and -zar change their spelling in yo only, to keep the sound of the consonant: c→qu, g→gu, z→c.",
          "-er and -ir verbs whose stem ends in a vowel change i to y in the third person: leer → leyó, leyeron; oír → oyó; construir → construyó.",
        ],
        examples: [
          { es: "buscar → busqué", en: "I looked for" },
          { es: "llegar → llegué", en: "I arrived" },
          { es: "empezar → empecé", en: "I started" },
          { es: "Ella leyó el libro en un día.", en: "She read the book in one day." },
        ],
      },
      {
        heading: "-ir stem-changing verbs",
        body: [
          "-ir verbs that change their stem in the present also change in the preterite, but only in the third person: e→i and o→u. -ar and -er stem-changers are regular in the preterite.",
        ],
        examples: [
          { es: "pedir → pidió, pidieron", en: "he asked for, they asked for" },
          { es: "dormir → durmió, durmieron", en: "she slept, they slept" },
          { es: "Pensé que era tarde.", en: "I thought it was late. (pensar: no change)" },
        ],
      },
      {
        heading: "Time words that go with the preterite",
        body: [
          "The preterite often appears with expressions that pin an action to a finished moment: ayer, anoche, anteayer, el lunes pasado, la semana pasada, hace dos años, en 2019, de repente.",
        ],
        examples: [
          { es: "Hace tres años viajé a Cuba.", en: "Three years ago I travelled to Cuba." },
          { es: "El sábado pasado jugamos al tenis.", en: "Last Saturday we played tennis." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Ayer hablo con ella.",
        right: "Ayer hablé con ella.",
        why: "Without the accent, hablo is the present (\"I speak\").",
      },
      {
        wrong: "Yo llegé tarde.",
        right: "Yo llegué tarde.",
        why: "-gar verbs add a u in the yo form to keep the hard g sound.",
      },
      {
        wrong: "Él dormió bien.",
        right: "Él durmió bien.",
        why: "-ir stem-changing verbs change o→u in the third person of the preterite.",
      },
    ],
    faqs: [
      {
        q: "Preterite or present perfect for \"I have eaten\"?",
        a: "In most of Spain, the present perfect (he comido) is used for actions today or in an unfinished time period, and the preterite for earlier. Most of Latin America uses the preterite for both. See the present perfect guide.",
      },
      {
        q: "Why is \"vi\" written without an accent?",
        a: "One-syllable forms never take an accent: vi, vio, di, dio, fui, fue.",
      },
    ],
    related: ["irregular-preterite-verbs", "preterite-vs-imperfect", "spanish-imperfect-tense"],
  },
  {
    slug: "irregular-preterite-verbs",
    title: "Irregular Preterite Verbs in Spanish",
    metaTitle: "Spanish Irregular Preterite Verbs",
    description:
      "The most common Spanish verbs have irregular preterites. Learn the strong stems (tuv-, estuv-, hic-, dij-), their endings, ser/ir (fui) and dar/ver.",
    level: "A2",
    readingLevelPath: "a2",
    intro: [
      "The irregular preterites look chaotic at first, but most of them follow one pattern: an irregular stem plus a special set of endings with no written accents. Learn the stem and the rest falls into place.",
    ],
    sections: [
      {
        heading: "The strong stems",
        body: [
          "These verbs take a new stem and the endings -e, -iste, -o, -imos, -isteis, -ieron. Stems ending in j drop the i in the plural: dijeron, trajeron, condujeron.",
        ],
        table: {
          headers: ["Verb", "Stem", "yo", "él / ella", "ellos"],
          rows: [
            ["tener", "tuv-", "tuve", "tuvo", "tuvieron"],
            ["estar", "estuv-", "estuve", "estuvo", "estuvieron"],
            ["poder", "pud-", "pude", "pudo", "pudieron"],
            ["poner", "pus-", "puse", "puso", "pusieron"],
            ["saber", "sup-", "supe", "supo", "supieron"],
            ["venir", "vin-", "vine", "vino", "vinieron"],
            ["querer", "quis-", "quise", "quiso", "quisieron"],
            ["hacer", "hic-", "hice", "hizo", "hicieron"],
            ["decir", "dij-", "dije", "dijo", "dijeron"],
            ["traer", "traj-", "traje", "trajo", "trajeron"],
          ],
        },
        examples: [
          { es: "Tuvimos un problema con el coche.", en: "We had a problem with the car." },
          { es: "¿Qué hiciste el fin de semana?", en: "What did you do at the weekend?" },
          { es: "Me dijeron que no.", en: "They told me no." },
        ],
      },
      {
        heading: "Ser and ir share one preterite",
        body: [
          "Fui, fuiste, fue, fuimos, fuisteis, fueron means both \"I was\" and \"I went.\" Context makes it clear: fui a is almost always \"went to.\"",
        ],
        examples: [
          { es: "Fui al médico ayer.", en: "I went to the doctor yesterday." },
          { es: "Fue un día increíble.", en: "It was an amazing day." },
        ],
      },
      {
        heading: "Dar and ver",
        body: [
          "Dar takes -er/-ir endings: di, diste, dio, dimos, disteis, dieron. Ver is regular but has no accents: vi, viste, vio.",
        ],
        examples: [
          { es: "Le di las llaves.", en: "I gave him the keys." },
          { es: "¿Viste el partido?", en: "Did you see the match?" },
        ],
      },
      {
        heading: "Verbs that change meaning",
        body: [
          "A few verbs mean something slightly different in the preterite, because it marks the moment a state begins or is tested: conocer (met), saber (found out), querer (tried), no querer (refused), poder (managed), no poder (failed).",
        ],
        examples: [
          { es: "Conocí a mi pareja en 2018.", en: "I met my partner in 2018." },
          { es: "Supe la noticia por la radio.", en: "I found out the news on the radio." },
          { es: "No quiso venir.", en: "He refused to come." },
          { es: "Por fin pude dormir.", en: "I finally managed to sleep." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Yo tení / Yo tuví",
        right: "Yo tuve",
        why: "Strong preterites use -e for yo, with no accent.",
      },
      {
        wrong: "Ellos dijieron",
        right: "Ellos dijeron",
        why: "Stems ending in j drop the i: dijeron, trajeron, produjeron.",
      },
      {
        wrong: "Él hació la cena.",
        right: "Él hizo la cena.",
        why: "Hacer's third person is hizo (the c becomes z before o).",
      },
    ],
    faqs: [
      {
        q: "Is there an easy way to remember these?",
        a: "Group them by stem vowel: u-stems (tuve, estuve, pude, puse, supe), i-stems (vine, quise, hice) and j-stems (dije, traje, conduje). Then practice them in short past-tense stories.",
      },
      {
        q: "Why don't these forms have accents?",
        a: "In strong preterites the stress falls on the stem (TU-ve, HI-zo), not the ending, so there's nothing to mark.",
      },
    ],
    related: ["spanish-preterite-tense", "preterite-vs-imperfect", "imperfect-subjunctive"],
  },
  {
    slug: "spanish-imperfect-tense",
    title: "The Spanish Imperfect Tense",
    metaTitle: "Spanish Imperfect Tense: Forms and Uses",
    description:
      "How to form the Spanish imperfect (hablaba, comía, vivía), its three irregular verbs, and its uses: habits, descriptions, background, age and time.",
    level: "A2",
    readingLevelPath: "a2",
    intro: [
      "The imperfect is the past tense of description and habit. It paints the background of a story (what things were like, what was going on) and describes what used to happen.",
      "It's the easiest tense to conjugate in Spanish: only three verbs are irregular.",
    ],
    sections: [
      {
        heading: "The endings",
        body: [
          "-ar verbs take -aba; -er and -ir verbs take -ía. The yo and él/ella forms are identical, so the pronoun is used more often than in other tenses.",
        ],
        table: {
          headers: ["", "hablar", "comer", "vivir"],
          rows: [
            ["yo", "hablaba", "comía", "vivía"],
            ["tú", "hablabas", "comías", "vivías"],
            ["él / ella / usted", "hablaba", "comía", "vivía"],
            ["nosotros", "hablábamos", "comíamos", "vivíamos"],
            ["vosotros", "hablabais", "comíais", "vivíais"],
            ["ellos / ustedes", "hablaban", "comían", "vivían"],
          ],
        },
      },
      {
        heading: "The three irregulars",
        body: [
          "ser: era, eras, era, éramos, erais, eran. ir: iba, ibas, iba, íbamos, ibais, iban. ver: veía, veías, veía, veíamos, veíais, veían.",
        ],
        examples: [
          { es: "Mi abuelo era carpintero.", en: "My grandfather was a carpenter." },
          { es: "Íbamos a la playa cada verano.", en: "We used to go to the beach every summer." },
          { es: "Veíamos la tele después de cenar.", en: "We used to watch TV after dinner." },
        ],
      },
      {
        heading: "Habits: \"used to\" and \"would\"",
        body: [
          "Use the imperfect for repeated actions in the past with no fixed number of times. Signal words: siempre, a menudo, todos los días, cada semana, normalmente, de niño, antes.",
        ],
        examples: [
          { es: "De niña, jugaba al fútbol todos los sábados.", en: "As a girl, I used to play football every Saturday." },
          { es: "Antes fumaba, pero lo dejé.", en: "I used to smoke, but I quit." },
        ],
      },
      {
        heading: "Description, background and ongoing actions",
        body: [
          "Use it to describe people, places, weather, feelings, age and clock time in the past, and actions in progress when something else happened.",
        ],
        examples: [
          { es: "Hacía sol y la playa estaba llena.", en: "It was sunny and the beach was full." },
          { es: "Tenía diez años cuando nos mudamos.", en: "I was ten when we moved." },
          { es: "Eran las once de la noche.", en: "It was eleven at night." },
          { es: "Leía cuando sonó el teléfono.", en: "I was reading when the phone rang." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Cuando era niño, fui a la escuela en bus.",
        right: "Cuando era niño, iba a la escuela en bus.",
        why: "A childhood habit is repeated, so it takes the imperfect.",
      },
      {
        wrong: "Nosotros hablabamos",
        right: "Nosotros hablábamos",
        why: "The nosotros form of -ar verbs has an accent: -ábamos.",
      },
      {
        wrong: "Fue las tres.",
        right: "Eran las tres.",
        why: "Clock time in the past is background, so it's imperfect, and plural with las (eran las tres, era la una).",
      },
    ],
    faqs: [
      {
        q: "Is the imperfect the same as \"was ...ing\"?",
        a: "Often, but not always. \"Was reading\" can be leía or estaba leyendo. And the imperfect also translates \"used to\" and plain past forms like \"was\" or \"had\" in descriptions.",
      },
      {
        q: "How do I choose between imperfect and preterite?",
        a: "Ask whether you're describing the scene or reporting an event. See the preterite vs. imperfect guide for the full picture.",
      },
    ],
    related: ["preterite-vs-imperfect", "spanish-preterite-tense", "spanish-pluperfect"],
  },
  {
    slug: "comparisons-and-superlatives",
    title: "Comparisons and Superlatives in Spanish",
    metaTitle: "Spanish Comparatives and Superlatives",
    description:
      "How to compare in Spanish: más/menos... que, tan... como, tanto como, mejor, peor, mayor and menor, superlatives with el más, and the -ísimo ending.",
    level: "A2",
    readingLevelPath: "a2",
    intro: [
      "Spanish comparisons are built from a few fixed frames: más ... que (more ... than), menos ... que (less ... than) and tan ... como (as ... as). Unlike English, there's no \"-er\" ending: \"taller\" is simply más alto.",
    ],
    sections: [
      {
        heading: "More and less",
        body: [
          "Put más or menos before the adjective, adverb or noun, and que before the second item. Before a number, use de instead of que.",
        ],
        examples: [
          { es: "Madrid es más grande que Sevilla.", en: "Madrid is bigger than Seville." },
          { es: "Este móvil es menos caro que el otro.", en: "This phone is less expensive than the other one." },
          { es: "Tengo más trabajo que tú.", en: "I have more work than you." },
          { es: "Hay más de cien personas.", en: "There are more than a hundred people." },
        ],
      },
      {
        heading: "Equality: tan and tanto",
        body: [
          "Tan + adjective or adverb + como. Tanto/tanta/tantos/tantas + noun + como (agreeing with the noun). Verb + tanto como.",
        ],
        examples: [
          { es: "Mi hermana es tan alta como yo.", en: "My sister is as tall as me." },
          { es: "No tengo tanto dinero como él.", en: "I don't have as much money as him." },
          { es: "Hay tantas mujeres como hombres.", en: "There are as many women as men." },
          { es: "Trabajo tanto como tú.", en: "I work as much as you." },
        ],
      },
      {
        heading: "Irregular comparatives",
        body: [
          "Four comparatives have their own forms. Mayor and menor are used for age (and for importance); más grande and más pequeño for size.",
        ],
        table: {
          headers: ["Adjective / adverb", "Comparative", "Meaning"],
          rows: [
            ["bueno / bien", "mejor", "better"],
            ["malo / mal", "peor", "worse"],
            ["viejo (age)", "mayor", "older"],
            ["joven", "menor", "younger"],
          ],
        },
        examples: [
          { es: "Esta paella es mejor que la de ayer.", en: "This paella is better than yesterday's." },
          { es: "Mi hermano mayor vive en Chile.", en: "My older brother lives in Chile." },
          { es: "Hoy me siento peor.", en: "Today I feel worse." },
        ],
      },
      {
        heading: "Superlatives and -ísimo",
        body: [
          "The superlative is article + (noun) + más/menos + adjective, with de for \"in\" or \"of\": el más alto de la clase. To say \"very\" intensely, add -ísimo to the adjective: guapísimo, carísimo, riquísimo (spelling changes: rico → riquísimo, largo → larguísimo).",
        ],
        examples: [
          { es: "Es el edificio más alto de la ciudad.", en: "It's the tallest building in the city." },
          { es: "Son las mejores tapas del barrio.", en: "They're the best tapas in the neighborhood." },
          { es: "La película fue buenísima.", en: "The film was really, really good." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "más bueno que",
        right: "mejor que",
        why: "The comparative of bueno is mejor. (Más bueno exists only for moral goodness or food taste in casual speech.)",
      },
      {
        wrong: "el más alto en la clase",
        right: "el más alto de la clase",
        why: "Superlatives use de for \"in.\"",
      },
      {
        wrong: "tan alto que yo",
        right: "tan alto como yo",
        why: "Equality always pairs tan with como.",
      },
      {
        wrong: "más que diez euros",
        right: "más de diez euros",
        why: "Before a number, use de.",
      },
    ],
    faqs: [
      {
        q: "Do I say \"más alto que yo\" or \"que mí\"?",
        a: "Que yo, que tú. After que and como, Spanish uses subject pronouns.",
      },
      {
        q: "Can I say \"muy buenísimo\"?",
        a: "No. -ísimo already means \"very,\" so muy is redundant.",
      },
    ],
    related: ["spanish-adjective-agreement", "adverbs-ending-in-mente", "spanish-negative-words"],
  },
  {
    slug: "spanish-negative-words",
    title: "Spanish Negative Words and Double Negatives",
    metaTitle: "Spanish Double Negatives: Nada, Nadie, Nunca",
    description:
      "In Spanish, double negatives are correct: No veo nada. Learn the negative words (nada, nadie, nunca, ninguno, tampoco, ni) and their affirmative partners.",
    level: "A2",
    readingLevelPath: "a2",
    intro: [
      "English teachers warn against double negatives. Spanish requires them. If a negative word like nada or nadie comes after the verb, you also need no before the verb: No veo nada, literally \"I don't see nothing.\"",
    ],
    sections: [
      {
        heading: "Negative words and their opposites",
        body: [
          "Ninguno shortens to ningún before a masculine singular noun and is almost always singular.",
        ],
        table: {
          headers: ["Affirmative", "Negative", "English"],
          rows: [
            ["algo", "nada", "something / nothing"],
            ["alguien", "nadie", "someone / no one"],
            ["siempre, a veces", "nunca, jamás", "always, sometimes / never"],
            ["alguno (algún)", "ninguno (ningún)", "some, any / none, no"],
            ["también", "tampoco", "also / neither"],
            ["o ... o", "ni ... ni", "either ... or / neither ... nor"],
          ],
        },
      },
      {
        heading: "Before or after the verb",
        body: [
          "A negative word can go before the verb, with no \"no\", or after it, with \"no\" before the verb. Both are correct; the second is more common in speech.",
        ],
        examples: [
          { es: "Nadie vino. / No vino nadie.", en: "Nobody came." },
          { es: "Nunca como carne. / No como carne nunca.", en: "I never eat meat." },
          { es: "No tengo ningún problema.", en: "I don't have any problem." },
          { es: "No quiero ni té ni café.", en: "I want neither tea nor coffee." },
        ],
      },
      {
        heading: "Tampoco and también",
        body: [
          "To agree with a negative statement, use tampoco (me neither). To agree with a positive one, use también (me too). With gustar-type verbs, use a mí también / a mí tampoco.",
        ],
        examples: [
          { es: "—No tengo hambre. —Yo tampoco.", en: "—I'm not hungry. —Me neither." },
          { es: "—Me encanta el jazz. —A mí también.", en: "—I love jazz. —Me too." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Veo nada.",
        right: "No veo nada.",
        why: "When a negative word follows the verb, no must come before the verb.",
      },
      {
        wrong: "No nadie vino.",
        right: "Nadie vino. / No vino nadie.",
        why: "If the negative word is before the verb, don't add no.",
      },
      {
        wrong: "No tengo ningunos libros.",
        right: "No tengo ningún libro.",
        why: "Ninguno is almost always singular.",
      },
      {
        wrong: "—No me gusta. —Yo también no.",
        right: "—No me gusta. —A mí tampoco.",
        why: "Agreeing with a negative uses tampoco.",
      },
    ],
    faqs: [
      {
        q: "Is \"no ... nada\" really correct, not just slang?",
        a: "Yes, it's standard in all registers, including formal writing.",
      },
      {
        q: "What's the difference between nunca and jamás?",
        a: "They mean the same. Jamás is more emphatic, and nunca jamás is stronger still.",
      },
    ],
    related: ["personal-a", "adverbs-ending-in-mente", "gustar-and-similar-verbs"],
  },
  {
    slug: "adverbs-ending-in-mente",
    title: "Spanish Adverbs Ending in -mente",
    metaTitle: "Spanish -mente Adverbs: How to Form Them",
    description:
      "How to form Spanish adverbs with -mente (the \"-ly\" ending), why the accent stays, how to link two of them, and when Spanish prefers another structure.",
    level: "A2",
    readingLevelPath: "a2",
    intro: [
      "Spanish -mente works like English -ly: it turns an adjective into an adverb. Lento becomes lentamente (slowly), fácil becomes fácilmente (easily).",
    ],
    sections: [
      {
        heading: "How to form them",
        body: [
          "Take the feminine singular form of the adjective and add -mente. Adjectives that don't change for gender just add it directly. If the adjective has a written accent, it keeps it.",
        ],
        examples: [
          { es: "rápido → rápidamente", en: "quick → quickly" },
          { es: "tranquilo → tranquilamente", en: "calm → calmly" },
          { es: "feliz → felizmente", en: "happy → happily" },
          { es: "fácil → fácilmente", en: "easy → easily" },
          { es: "Habla claramente.", en: "She speaks clearly." },
        ],
      },
      {
        heading: "Two adverbs in a row",
        body: [
          "When two -mente adverbs are joined with y, o or pero, only the last one keeps -mente. The first stays in its feminine form.",
        ],
        examples: [
          { es: "Habló clara y lentamente.", en: "He spoke clearly and slowly." },
          { es: "Trabaja rápida pero cuidadosamente.", en: "She works quickly but carefully." },
        ],
      },
      {
        heading: "Alternatives Spanish often prefers",
        body: [
          "Long -mente words can sound heavy. Spanish often uses con + noun, de manera/de forma + adjective, or a plain adjective used as an adverb in informal speech.",
          "Bien and mal are the adverbs of bueno and malo; never say \"buenamente\" for \"well.\"",
        ],
        examples: [
          { es: "Conduce con cuidado.", en: "Drive carefully." },
          { es: "Lo explicó de forma sencilla.", en: "She explained it simply." },
          { es: "Habla muy rápido.", en: "He talks really fast." },
          { es: "Cantas muy bien.", en: "You sing really well." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "rapidomente",
        right: "rápidamente",
        why: "Use the feminine form (rápida) plus -mente, and keep the accent.",
      },
      {
        wrong: "Habló claramente y lentamente.",
        right: "Habló clara y lentamente.",
        why: "With two linked adverbs, only the last one takes -mente.",
      },
      {
        wrong: "Juega bueno al tenis.",
        right: "Juega bien al tenis.",
        why: "The adverb of bueno is bien.",
      },
    ],
    faqs: [
      {
        q: "Why does rápidamente keep the accent?",
        a: "Words with -mente are pronounced with two stresses, one on the adjective and one on -men-. The adjective keeps its spelling, accent included.",
      },
      {
        q: "Is \"actualmente\" the same as \"actually\"?",
        a: "No, it's a false friend. Actualmente means \"currently.\" \"Actually\" is en realidad or la verdad es que.",
      },
    ],
    related: ["spanish-adjective-agreement", "comparisons-and-superlatives", "spanish-accent-marks"],
  },
  {
    slug: "spanish-accent-marks",
    title: "Spanish Accent Marks: The Rules for Written Accents",
    metaTitle: "Spanish Accent Rules: When to Write a Tilde",
    description:
      "When a Spanish word needs a written accent (tilde): stress position, aguda, llana and esdrújula words, accents like tú/tu, and accents with added pronouns.",
    level: "A2",
    readingLevelPath: "a2",
    intro: [
      "Spanish accent marks aren't decoration. The written accent (la tilde) tells you which syllable is stressed when the word breaks the default pattern, and it tells apart pairs like tú (you) and tu (your).",
      "The rules are completely regular. Once you know where a word is stressed, you can always tell whether it needs an accent.",
    ],
    sections: [
      {
        heading: "The default stress",
        body: [
          "Words ending in a vowel, n or s are naturally stressed on the second-to-last syllable: casa, hablan, zapatos. Words ending in any other consonant are naturally stressed on the last syllable: hablar, ciudad, reloj.",
          "A written accent appears only when a word breaks this default.",
        ],
        examples: [
          { es: "ca-sa, e-xa-men, to-ma-tes", en: "stress on second-to-last: no accent" },
          { es: "co-mer, pa-red, es-pa-ñol", en: "stress on last: no accent" },
        ],
      },
      {
        heading: "The three word types",
        body: [
          "Agudas (stressed on the last syllable) take an accent if they end in a vowel, n or s. Llanas (stressed on the second-to-last) take an accent if they end in anything else. Esdrújulas (stressed on the third-to-last or earlier) always take an accent.",
        ],
        table: {
          headers: ["Type", "Stress", "Accent when", "Examples"],
          rows: [
            ["aguda", "last syllable", "ends in vowel, -n, -s", "café, canción, compás / but: reloj"],
            ["llana", "second-to-last", "ends in other consonant", "árbol, fácil, lápiz / but: casa"],
            ["esdrújula", "third-to-last", "always", "música, teléfono, rápido"],
          ],
        },
        examples: [
          { es: "canción → canciones", en: "the accent disappears when the plural moves the word into the default pattern" },
          { es: "joven → jóvenes", en: "and appears when the plural makes it esdrújula" },
        ],
      },
      {
        heading: "Vowels that split: día, país",
        body: [
          "i and u next to a, e or o normally blend into one syllable (a diphthong): bien, cuando. When the i or u is stressed instead, it gets an accent to show it's a separate syllable, regardless of the other rules.",
        ],
        examples: [
          { es: "día, tía, país, río, reúne", en: "stressed i/u next to another vowel" },
          { es: "María, frío, oír", en: "same rule" },
        ],
      },
      {
        heading: "Diacritical accents",
        body: [
          "Some one-syllable words take an accent to tell them apart from a word spelled the same way. Question and exclamation words also take one.",
        ],
        table: {
          headers: ["With accent", "Without accent"],
          rows: [
            ["tú (you)", "tu (your)"],
            ["él (he)", "el (the)"],
            ["mí (me, after prepositions)", "mi (my)"],
            ["sí (yes; oneself)", "si (if)"],
            ["té (tea)", "te (you, object pronoun)"],
            ["sé (I know; be!)", "se (pronoun)"],
            ["más (more)", "mas (but, literary)"],
            ["dé (give, subjunctive)", "de (of)"],
            ["qué, cómo, dónde (questions)", "que, como, donde (connectors)"],
          ],
        },
      },
      {
        heading: "Accents when you add pronouns",
        body: [
          "Attaching pronouns to a gerund, an infinitive with two pronouns, or a command adds syllables, so the stress can end up three or more from the end. Then the word needs an accent.",
        ],
        examples: [
          { es: "diciendo → diciéndome", en: "telling → telling me" },
          { es: "compra → cómpralo", en: "buy → buy it" },
          { es: "dar → dárselo", en: "give → give it to him" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "cancion, examenes",
        right: "canción, exámenes",
        why: "Canción is aguda ending in -n; exámenes is esdrújula, which always takes an accent.",
      },
      {
        wrong: "Tu eres mi amigo.",
        right: "Tú eres mi amigo.",
        why: "The pronoun tú (you) has an accent; tu without one means \"your.\"",
      },
      {
        wrong: "dimelo",
        right: "dímelo",
        why: "Adding two pronouns makes the word esdrújula, so it needs an accent.",
      },
    ],
    faqs: [
      {
        q: "Do capital letters need accents?",
        a: "Yes. The Real Academia is clear: Ángela, ÉXITO. Leaving them off was an old typewriter habit.",
      },
      {
        q: "Does \"solo\" still take an accent?",
        a: "Not any more. Since 2010 the Academia recommends writing solo (only) and the demonstratives (este, ese) without accents. Older texts use sólo and éste.",
      },
      {
        q: "Does an accent change pronunciation?",
        a: "It shows where the stress goes, which does change the sound: papa (potato) vs. papá (dad), hablo (I speak) vs. habló (he spoke).",
      },
    ],
    related: ["spanish-question-words", "spanish-punctuation", "spanish-preterite-tense"],
  },
];
