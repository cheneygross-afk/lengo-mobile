// Synced from cheneygross-afk/lengo:src/lib/lessons/a2-gaps.ts by scripts/sync-content.mjs -- edit it there, not here.
import { anchored, authoring } from "./authoring";
import type { AnchoredLesson } from "./weave";

// A2 lessons that close grammar gaps found by a review of the course
// against the Instituto Cervantes Plan Curricular (A2 inventory):
// affirmative tú commands, diminutives, hace + time + que / desde hace,
// muy vs. mucho, pedir vs. preguntar, spelling and written accents, and
// a recognition lesson on vos and vosotros. Taught in English, like the
// rest of A2. The accent lessons sit in the preterite unit (hablé /
// hable is where accents start to matter); the rest form their own unit
// before At the Restaurant (see units.ts).

const { mc, ms, fe, toEs, toEn, wo, mt, sec } = authoring("en");
const L = (
  after: string,
  slug: string,
  title: string,
  summary: string,
  duration: string,
  sections: Parameters<typeof anchored>[6],
  exercises: Parameters<typeof anchored>[7]
) => anchored("A2", after, slug, title, summary, duration, sections, exercises);

export const A2_GAPS: AnchoredLesson[] = [
  // ---- Unit 1 (preterite): spelling and written accents ----------------
  L(
    "preterite-regular-verbs-2",
    "a2g-spelling-stress-rules",
    "Spelling: ¿ ¡, Capitals and Where the Stress Falls",
    "Upside-down question and exclamation marks, what Spanish doesn't capitalize, and the three rules that tell you when a word needs a written accent.",
    "10 min",
    [
      sec(
        "¿ and ¡ open the question, wherever it starts",
        [
          "Spanish marks a question or an exclamation at both ends: ¿...? and ¡...!. The opening mark goes where the question itself starts, which is not always the start of the sentence.",
          "So a name, a greeting or a linking word that comes first stays outside: Oye, ¿vienes? / Laura, ¿dónde estás? / Si llueve, ¿qué hacemos?",
          "On a phone keyboard, hold down ? or ! to find ¿ and ¡. In quick chats many people skip them, but in anything you write carefully they are expected.",
        ],
        [
          ["¿Tienes hambre?", "Are you hungry?"],
          ["¡Qué frío hace!", "It's so cold!"],
          ["Oye, ¿vienes esta noche?", "Hey, are you coming tonight?"],
          ["Si no hay tren, ¿cómo volvemos?", "If there's no train, how do we get back?"],
          ["Perdona, ¿sabes qué hora es?", "Sorry, do you know what time it is?"],
        ],
        [
          mc(
            "Which sentence is punctuated correctly?",
            ["Marta, ¿quieres un café?", "¿Marta, quieres un café?", "Marta ¿quieres un café", "Marta, quieres un café?"],
            0,
            "The question is \"¿quieres un café?\"; Marta is just the person you're talking to, so she stays outside the marks. \"¿Marta, quieres...?\" opens the question too early, and the other two are missing a mark."
          ),
        ]
      ),
      sec(
        "What Spanish writes in lower case",
        [
          "Days, months, languages and nationalities take a small letter in Spanish: lunes, marzo, inglés, los españoles. Only names of people, places and institutions are capitalized: Madrid, el río Amazonas, la Universidad de Chile.",
          "\"Yo\" is never capitalized in the middle of a sentence, unlike English \"I\".",
          "Spanish often uses « » (comillas angulares) for quotes, especially in Spain; \" \" is also correct and is more common in Latin America.",
        ],
        [
          ["El lunes 3 de marzo empiezo a estudiar alemán.", "On Monday, March 3rd, I start studying German."],
          ["Mi vecina es mexicana y habla inglés.", "My neighbor is Mexican and speaks English."],
          ["Mañana yo cocino y tú lavas los platos.", "Tomorrow I'll cook and you'll wash the dishes."],
          ["El cartel dice «cerrado».", "The sign says \"closed\"."],
        ],
        [
          mc(
            "Which sentence is written correctly?",
            ["Nos vemos el viernes en abril.", "Nos vemos el Viernes en Abril.", "Nos vemos el viernes en Abril.", "Nos vemos el Viernes en abril."],
            0,
            "Days and months are common nouns in Spanish, so both are lower case: viernes, abril. English capitalizes them; Spanish doesn't."
          ),
        ]
      ),
      sec(
        "Rule 1: words ending in a vowel, -n or -s",
        [
          "Every Spanish word has one stressed syllable. Most words ending in a vowel, -n or -s are stressed on the second-to-last syllable: casa, hablan, zapatos. That's the normal pattern, so these words need no written accent.",
          "When a word ending in a vowel, -n or -s is stressed on the LAST syllable instead (an aguda word), you must write the accent: café, canción, jamás, habló, está.",
          "This is why the preterite needs accents: hablo (I speak) follows the normal pattern, but habló (he spoke) breaks it, so the accent shows it.",
        ],
        [
          ["café, sofá, menú", "coffee, sofa, menu"],
          ["canción, jardín, alemán", "song, garden, German"],
          ["hablé, comí, salió", "I spoke, I ate, he went out"],
          ["hablo / habló", "I speak / he spoke"],
        ],
        [
          mc(
            "Which word needs a written accent? (Stress in capitals.)",
            ["cancion (can-CION)", "zapatos (za-PA-tos)", "hablan (HA-blan)", "mesa (ME-sa)"],
            0,
            "Cancion ends in -n and is stressed on the last syllable, which breaks the normal pattern, so it's written canción. The other three end in a vowel, -n or -s and are stressed on the second-to-last syllable, which is the default: no accent."
          ),
        ]
      ),
      sec(
        "Rule 2: other endings, and Rule 3: third-from-last",
        [
          "Words ending in any other consonant (-l, -r, -z, -d...) are normally stressed on the LAST syllable: hablar, papel, feliz, ciudad. No accent needed.",
          "When one of these is stressed on the second-to-last syllable instead (a llana word), write the accent: árbol, fácil, lápiz, césped, azúcar.",
          "Rule 3 is the easiest: when the stress falls on the third-from-last syllable (an esdrújula word), there is ALWAYS a written accent: música, teléfono, rápido, sábado, miércoles.",
          "Plurals keep the stress on the same syllable, so the accent can appear or disappear: canción → canciones, joven → jóvenes, examen → exámenes.",
        ],
        [
          ["árbol, fácil, lápiz, difícil", "tree, easy, pencil, difficult"],
          ["música, médico, página, sábado", "music, doctor, page, Saturday"],
          ["el joven / los jóvenes", "the young man / young people"],
          ["la canción / las canciones", "the song / the songs"],
          ["el examen / los exámenes", "the exam / the exams"],
        ],
        [
          ms(
            "Which of these words are spelled correctly?",
            ["fácil", "teléfono", "ciudád", "canciónes", "jóvenes"],
            [0, 1, 4],
            "Fácil is stressed on FA and ends in -l (Rule 2). Teléfono and jóvenes are stressed third from last, so they always carry an accent (Rule 3). Ciudad ends in -d and is stressed on the last syllable, which is normal: no accent. Canciones is stressed on CIO and ends in -s, also normal: the accent of canción disappears in the plural."
          ),
        ]
      ),
      sec(
        "Two vowels split apart: día, país, río",
        [
          "An i or u next to a, e or o normally blends into one syllable with it: bien, cuando, tiene. When the i or u is stressed and the two vowels are said apart, it gets an accent whatever the other rules say: día, país, río, frío, oído, reúne.",
          "You already know many of these from verbs: tenía, comían, vivíamos, reír.",
        ],
        [
          ["Hace frío hoy.", "It's cold today."],
          ["¿Qué día es?", "What day is it?"],
          ["De niño vivía cerca del río.", "As a child I lived near the river."],
        ],
        [
          mc(
            "\"Every day\" is ___.",
            ["todos los días", "todos los dias", "tódos los días", "todos lós dias"],
            0,
            "Días is said DÍ-as: the i is stressed and separate from the a, so it takes an accent. Todos and los follow the normal patterns and need none."
          ),
        ]
      ),
    ],
    [
      mt(
        "Match each word to the rule that explains its accent.",
        [
          ["canción", "ends in -n, stressed on the last syllable"],
          ["árbol", "ends in -l, stressed second-to-last"],
          ["música", "stressed third from last"],
          ["país", "stressed i said apart from the a"],
        ],
        "An aguda word ending in a vowel, -n or -s, a llana word ending in another consonant, an esdrújula word (always accented), and a split pair of vowels."
      ),
      mc(
        "Where do the question marks go? \"If you can't come, what do we do?\"",
        ["Si no puedes venir, ¿qué hacemos?", "¿Si no puedes venir, qué hacemos?", "Si no puedes venir ¿qué hacemos", "¿Si no puedes venir qué hacemos?"],
        0,
        "The question is only \"¿qué hacemos?\"; the si-clause before the comma is outside it. \"¿Si no puedes venir...\" opens the question too early."
      ),
      ms(
        "Which words need a written accent? (Stress in capitals.)",
        ["telefono (te-LE-fo-no)", "facil (FA-cil)", "reloj (re-LOJ)", "jardin (jar-DIN)", "joven (JO-ven)"],
        [0, 1, 3],
        "Teléfono is stressed third from last: always accented. Fácil ends in -l but is stressed second-to-last, against the pattern. Jardín ends in -n but is stressed on the last syllable, against the pattern. Reloj (ends in -j, stressed last) and joven (ends in -n, stressed second-to-last) follow the normal patterns."
      ),
      mc(
        "Which plural is spelled correctly?",
        ["los exámenes", "los examenes", "los exámenés", "los éxamenes"],
        0,
        "Examen is stressed on XA. In the plural the stress stays on XA, which is now third from last (e-XA-me-nes), so it needs an accent: exámenes."
      ),
      toEs(
        "My birthday is on Saturday, May 12th.",
        "Mi cumpleaños es el sábado 12 de mayo.",
        "Sábado is stressed third from last, so it's accented. Days and months are lower case: sábado, mayo. Cumpleaños has no written accent: it ends in -s and is stressed second-to-last (cum-ple-A-ños).",
        ["Mi cumpleaños es el sábado doce de mayo.", "Mi cumpleaños es el sábado, 12 de mayo.", "Mi cumpleaños es el sábado, doce de mayo."]
      ),
      fe(
        "Ayer mi hermano ___ con el profesor.",
        "habló",
        "Yesterday my brother [spoke] to the teacher.",
        "The preterite él form habló is stressed on the last syllable and ends in a vowel, so it needs the accent. Without it, hablo means \"I speak\"."
      ),
      fe(
        "Estas ___ son muy bonitas.",
        "canciones",
        "These [songs] are very pretty.",
        "Canción loses its accent in the plural. The stress stays on CIO (can-CIO-nes), which is now the second-to-last syllable of a word ending in -s: the normal pattern, so no accent. \"Canciónes\" is a common mistake."
      ),
      mc(
        "Which sentence is written correctly?",
        ["Hablo inglés y un poco de francés.", "Hablo Inglés y un poco de Francés.", "Hablo ingles y un poco de frances.", "Hablo Ingles y un poco de frances."],
        0,
        "Languages are lower case in Spanish. Inglés and francés end in -s and are stressed on the last syllable, so both take an accent."
      ),
      toEn(
        "¡Qué rápido habla tu médico!",
        "Your doctor talks so fast!",
        "¡Qué + adjective/adverb! is an exclamation: how fast! Rápido and médico are both stressed third from last, so both carry an accent.",
        ["How fast your doctor talks!", "Your doctor speaks so fast!", "How fast your doctor speaks!", "Your doctor talks really fast!"]
      ),
      wo(
        "Oye, ¿qué día es hoy?",
        "The question starts at ¿qué, after Oye and the comma. Día takes an accent because its i is stressed and said apart from the a.",
        "Hey, what day is it today?"
      ),
      mc(
        "Why does \"lápiz\" have a written accent?",
        [
          "It ends in -z and is stressed on the second-to-last syllable.",
          "It ends in -z and is stressed on the last syllable.",
          "Every word ending in -z has an accent.",
          "It's stressed on the third-from-last syllable.",
        ],
        0,
        "Words ending in a consonant other than -n or -s are normally stressed on the last syllable (feliz, capaz). Lápiz is stressed on LA instead, so it needs the accent. Plenty of words in -z have none: feliz, arroz, luz."
      ),
    ]
  ),
  L(
    "preterite-regular-verbs-2",
    "a2g-accent-pairs",
    "Accents That Change the Word: tú/tu, él/el, sí/si, qué/que",
    "Short words that are spelled the same except for an accent mark, and mean different things: tú/tu, él/el, mí/mi, sí/si, sé/se, té/te, más/mas, qué/que.",
    "10 min",
    [
      sec(
        "Why some one-syllable words have an accent",
        [
          "One-syllable words normally never carry a written accent: fue, dio, vio, pie, sol, mar. The exception is a small set of pairs where the accent tells two different words apart. It's called the diacritic accent (tilde diacrítica).",
          "You can't hear it: tú and tu sound exactly alike. It only matters in writing, but a missing accent can change the meaning of a sentence.",
        ],
        [
          ["Tú tienes tu libro.", "You have your book."],
          ["Él es el jefe.", "He is the boss."],
          ["Fue a la playa y vio el mar.", "He went to the beach and saw the sea. (fue, vio: no accent)"],
        ],
        [
          mc(
            "Which of these one-syllable words is spelled correctly?",
            ["fue", "fué", "dió", "vió"],
            0,
            "Fue, dio and vio are one syllable and aren't part of an accent pair, so they never take an accent. Fué, dió and vió were accepted long ago but are mistakes today."
          ),
        ]
      ),
      sec(
        "Pronouns vs. possessives and articles: tú/tu, él/el, mí/mi",
        [
          "Tú (you) is a subject pronoun; tu (your) goes before a noun.",
          "Él (he, him) is a pronoun; el (the) goes before a noun.",
          "Mí (me) comes after a preposition: para mí, a mí. Mi (my) goes before a noun: mi casa.",
          "Quick test: if a noun follows straight after, it's usually the one without the accent.",
        ],
        [
          ["¿Tú vienes con tu hermana?", "Are you coming with your sister?"],
          ["El coche es de él.", "The car is his."],
          ["Este regalo es para mí.", "This present is for me."],
          ["Mi madre vive con él.", "My mother lives with him."],
          ["A mí me gusta tu idea.", "I like your idea."],
        ],
        [
          fe(
            "¿Esto es para ___?",
            "mí",
            "Is this for [me]?",
            "After a preposition (para, a, de, sin...) \"me\" is mí, with an accent. Mi without an accent means \"my\" and needs a noun after it: mi casa."
          ),
          mc(
            "Complete: \"___ padre trabaja con ___.\" (His father works with him.)",
            ["Su / él", "Su / el", "Él / el", "El / él"],
            0,
            "\"His father\" is su padre. \"With him\" is con él: a pronoun, so it takes the accent. El without an accent is \"the\" and would need a noun after it."
          ),
        ]
      ),
      sec(
        "sí/si, sé/se, té/te, más/mas",
        [
          "Sí = yes (and \"himself/herself\" after a preposition). Si = if.",
          "Sé = I know (from saber), and also \"be!\" (the tú command of ser). Se = the pronoun: se llama, se lo doy.",
          "Té = tea. Te = you/yourself (object pronoun): te quiero, ¿te gusta?",
          "Más = more. Mas without an accent is an old literary word for \"but\"; you'll almost never need it, so write más.",
        ],
        [
          ["Si puedes, ven. —¡Sí, claro!", "If you can, come. —Yes, of course!"],
          ["No sé cómo se llama.", "I don't know what he's called."],
          ["¿Te preparo un té?", "Shall I make you a tea?"],
          ["Quiero más pan, por favor.", "I want more bread, please."],
        ],
        [
          mc(
            "\"I don't know if he's coming.\"",
            ["No sé si viene.", "No se si viene.", "No sé sí viene.", "No se sí viene."],
            0,
            "Sé with an accent is \"I know\" (saber); se without one is a pronoun. Si without an accent is \"if\"; sí with one is \"yes\"."
          ),
        ]
      ),
      sec(
        "Question words: qué, cómo, dónde, cuándo, quién, cuánto, cuál",
        [
          "Question and exclamation words carry an accent: ¿Qué quieres?, ¿Dónde vives?, ¡Qué bonito!, ¡Cuánta gente!",
          "They keep it in indirect questions too, with no question marks: No sé qué quieres. Dime dónde vives. Pregúntale cuándo llega.",
          "The same words without an accent are linking words, not questions: Creo que viene (that). Vivo donde trabajo (where). Te llamo cuando llego (when). Lo hago como tú (like).",
        ],
        [
          ["¿Qué hora es?", "What time is it?"],
          ["No sé qué hora es.", "I don't know what time it is."],
          ["Dice que es tarde.", "He says (that) it's late."],
          ["¿Cuándo sales? —Cuando termino.", "When are you leaving? —When I finish."],
          ["¡Qué calor!", "It's so hot!"],
        ],
        [
          ms(
            "Which sentences are written correctly?",
            ["No sé dónde está.", "Creo qué tienes razón.", "Te llamo cuando llegue.", "¿Como te llamas?"],
            [0, 2],
            "No sé dónde está is an indirect question, so dónde keeps its accent. Cuando llegue is \"when I arrive\", a linking word, no accent. \"Creo qué\" is wrong: que here is \"that\". \"¿Como te llamas?\" is a question, so it needs cómo."
          ),
        ]
      ),
    ],
    [
      mt(
        "Match each word to its meaning.",
        [
          ["tú", "you"],
          ["tu", "your"],
          ["sé", "I know"],
          ["si", "if"],
          ["té", "tea"],
          ["mí", "me (after a preposition)"],
        ],
        "The accent marks the pronoun or the verb; the unaccented twin is the possessive, the pronoun te/se, or a linking word."
      ),
      fe(
        "¿___ quieres un café o un ___?",
        "Tú",
        "Do [you] want a coffee or a tea?",
        "Tú, the subject pronoun, takes an accent. Tu without one means \"your\" and needs a noun after it."
      ),
      fe(
        "Llámame ___ necesitas algo.",
        "si",
        "Call me [if] you need anything.",
        "\"If\" is si, no accent. Sí with an accent means \"yes\"."
      ),
      fe(
        "No ___ dónde vive Pablo.",
        "sé",
        "I don't [know] where Pablo lives.",
        "Sé (I know, from saber) has an accent to tell it apart from the pronoun se. Dónde keeps its accent in an indirect question."
      ),
      mc(
        "Which sentence is written correctly?",
        ["Él dice que tu hermano es muy simpático.", "El dice qué tu hermano es muy simpático.", "Él dice que tú hermano es muy simpático.", "El dice que tu hermano es muy simpático."],
        0,
        "Él (he) is the subject, so it needs the accent. Que is \"that\", not a question, so no accent. Tu hermano is \"your brother\": the possessive, no accent."
      ),
      toEs(
        "Do you know what time it is?",
        "¿Sabes qué hora es?",
        "An indirect question keeps the accent on qué. Sabes is the tú form of saber.",
        ["¿Tú sabes qué hora es?", "¿Sabe qué hora es?", "¿Usted sabe qué hora es?", "¿Sabe usted qué hora es?"]
      ),
      toEs(
        "This coffee is for me and the tea is for you.",
        "Este café es para mí y el té es para ti.",
        "Mí after para takes an accent; ti never does (no other ti to confuse it with). Té (tea) is accented; te is the pronoun.",
        ["Este café es para mí, y el té es para ti.", "Este café es para mí y el té para ti."]
      ),
      mc(
        "Why does \"sí\" have an accent in \"—¿Vienes? —Sí.\"?",
        ["It means \"yes\"; si without an accent means \"if\".", "It's stressed on the last syllable.", "It's at the end of a sentence.", "All one-letter answers have an accent."],
        0,
        "The accent on one-syllable words only separates pairs of different words. Sí (yes) vs. si (if) is one of those pairs. Stress rules don't apply to one-syllable words."
      ),
      toEn(
        "¡Qué bien que te gusta el té!",
        "It's great that you like the tea!",
        "¡Qué bien! is an exclamation (accented qué); the next que means \"that\" (no accent). Te is the pronoun, té is tea.",
        ["How great that you like the tea!", "It's so good that you like the tea!", "Great that you like the tea!", "It's great that you like tea!", "How nice that you like the tea!"]
      ),
      wo(
        "Quiero saber cuándo vuelves a casa.",
        "An indirect question: cuándo keeps its accent even without question marks.",
        "I want to know when you're coming back home."
      ),
      mc(
        "\"When I finish, I'll call you.\" → \"___ termine, te llamo.\"",
        ["Cuando", "Cuándo", "¿Cuándo", "Cuanto"],
        0,
        "Here cuando is a linking word (\"when\"), not a question, so it has no accent. Cuándo is only for questions and indirect questions; cuanto means \"how much\"."
      ),
    ]
  ),
  // ---- New unit: commands, little words and tricky pairs ---------------
  L(
    "asking-giving-directions-2",
    "a2g-tu-commands-regular",
    "Telling a Friend What to Do: Regular Tú Commands",
    "Habla, come, escribe: the affirmative tú command is the él form of the present. Plus where object and reflexive pronouns go: dímelo, siéntate.",
    "10 min",
    [
      sec(
        "The tú command looks like the él form",
        [
          "To tell a friend, a child or anyone you call tú to do something, take the present-tense él/ella form: él habla → ¡Habla!, él come → ¡Come!, él escribe → ¡Escribe!",
          "Stem changes stay: él cierra → cierra, él vuelve → vuelve, él pide → pide, él duerme → duerme.",
          "This is only for affirmative commands (\"do it!\"). \"Don't do it!\" uses a different form (no hables, no comas) that you'll learn in B1.",
        ],
        [
          ["Habla más despacio, por favor.", "Speak more slowly, please."],
          ["Come, que se enfría.", "Eat, it's getting cold."],
          ["Escribe tu nombre aquí.", "Write your name here."],
          ["Cierra la puerta.", "Close the door."],
          ["Vuelve pronto.", "Come back soon."],
          ["Pide la cuenta.", "Ask for the bill."],
        ],
        [
          fe(
            "___ la ventana, que hace calor.",
            "Abre",
            "[Open] the window, it's hot.",
            "Tú command = él form of the present: él abre → ¡Abre! \"Abres\" is the statement \"you open\", not a command."
          ),
          mc(
            "\"Sleep well!\" (to a friend)",
            ["¡Duerme bien!", "¡Dorme bien!", "¡Duermes bien!", "¡Dormir bien!"],
            0,
            "Dormir changes o → ue in the present (él duerme), and the command keeps that change: duerme. \"Dorme\" skips the stem change, \"duermes\" is the statement, and the infinitive isn't a command here."
          ),
        ]
      ),
      sec(
        "Pronouns go on the end",
        [
          "With an affirmative command, object pronouns attach to the end of the verb, making one word: cómpralo (buy it), llámame (call me), dile (tell him).",
          "Reflexive verbs work the same way with te: levantarse → levántate, sentarse → siéntate, ducharse → dúchate.",
          "Adding a syllable moves the stress to third from last, so the stressed vowel needs a written accent: compra → cómpralo, llama → llámame, escucha → escúchame.",
          "Two pronouns go in the order indirect + direct: dámelo (give it to me), explícamelo (explain it to me).",
        ],
        [
          ["Llámame esta noche.", "Call me tonight."],
          ["¿El pan? Cómpralo en la esquina.", "The bread? Buy it on the corner."],
          ["Siéntate aquí.", "Sit here."],
          ["Levántate, ya son las ocho.", "Get up, it's already eight."],
          ["Escúchame un momento.", "Listen to me for a moment."],
          ["¿Las fotos? Mándamelas.", "The photos? Send them to me."],
        ],
        [
          mc(
            "\"Wait for me!\"",
            ["¡Espérame!", "¡Me espera!", "¡Esperame!", "¡Espera me!"],
            0,
            "The pronoun attaches to the end: espera + me = espérame, and the accent keeps the stress on PE (es-PÉ-ra-me). \"Me espera\" is a statement (\"he waits for me\"); the others miss the accent or split the word."
          ),
        ]
      ),
      sec(
        "Softening a command",
        [
          "A bare command is normal between friends in Spanish and not rude, especially with por favor or a friendly tone.",
          "To sound gentler, add por favor, or use a question: ¿Me pasas la sal? (Will you pass me the salt?) is often friendlier than Pásame la sal.",
          "With people you address as usted (a stranger, an older person, a customer) the command form is different (hable, coma), so at A2 a polite question is the safe choice: ¿Puede hablar más despacio?",
        ],
        [
          ["Pásame la sal, por favor.", "Pass me the salt, please."],
          ["¿Me pasas la sal?", "Can you pass me the salt?"],
          ["Mira, ahí está el museo.", "Look, there's the museum."],
          ["¿Puede repetir, por favor?", "Could you repeat, please? (usted)"],
        ],
        [
          mc(
            "You're asking a stranger in the street to repeat something. What's the safest choice?",
            ["¿Puede repetir, por favor?", "¡Repite!", "Repítelo.", "Repite, tú."],
            0,
            "Tú commands are for people you call tú. With a stranger, a question with puede (usted) is polite and correct."
          ),
        ]
      ),
    ],
    [
      mt(
        "Match each infinitive to its tú command.",
        [
          ["hablar", "habla"],
          ["comer", "come"],
          ["cerrar", "cierra"],
          ["pedir", "pide"],
          ["volver", "vuelve"],
        ],
        "The tú command is the él form of the present, stem change included."
      ),
      fe(
        "___ esta canción, es preciosa.",
        "Escucha",
        "[Listen to] this song, it's beautiful.",
        "Escuchar → él escucha → ¡Escucha! No pronoun here, so no accent is needed."
      ),
      fe(
        "¿Tienes frío? ___ la chaqueta.",
        "Ponte",
        "Are you cold? [Put on] your jacket.",
        "Ponerse (to put on) is reflexive: pon + te = ponte. Pon is one of the irregular commands you'll see in the next lesson; one syllable + te needs no accent."
      ),
      fe(
        "Es tarde. ___, que perdemos el tren.",
        "Levántate",
        "It's late. [Get up], we're going to miss the train.",
        "Levantarse → levanta + te = levántate. The accent keeps the stress on TAN now that the word is longer."
      ),
      toEs(
        "Call me tomorrow.",
        "Llámame mañana.",
        "Llama + me = llámame, written as one word with an accent on the first a.",
        ["Mañana llámame.", "Llámame mañana, por favor."]
      ),
      toEs(
        "Sit down, please.",
        "Siéntate, por favor.",
        "Sentarse is reflexive and stem-changing: sienta + te = siéntate.",
        ["Por favor, siéntate.", "Siéntese, por favor.", "Por favor, siéntese."]
      ),
      toEn(
        "Cómpralo si te gusta.",
        "Buy it if you like it.",
        "Cómpralo = compra + lo (buy + it). Si te gusta = if you like it.",
        ["Buy it if you like it!", "If you like it, buy it."]
      ),
      mc(
        "\"Explain it to me.\" (el problema)",
        ["Explícamelo.", "Explícalome.", "Me lo explica.", "Explica me lo."],
        0,
        "Two pronouns attach in the order indirect + direct: explica + me + lo = explícamelo. \"Me lo explica\" is a statement about someone else (\"he explains it to me\")."
      ),
      wo(
        "Dúchate rápido y desayuna.",
        "Two tú commands: dúchate (ducharse, with te attached) and desayuna (desayunar).",
        "Take a quick shower and have breakfast."
      ),
      mc(
        "Which sentence is a command, not a statement?",
        ["Cierra la puerta.", "Cierras la puerta.", "Ella cerró la puerta.", "Cerramos la puerta."],
        0,
        "Cierra (the él form used as a tú command) tells someone to close it. Cierras is \"you close\", cerró \"she closed\", cerramos \"we close\"."
      ),
      ms(
        "Which commands are written correctly?",
        ["Dímelo", "Escuchame", "Siéntate", "Llama me"],
        [0, 2],
        "Pronouns attach to form one word, and the stressed vowel gets an accent when the word grows: dímelo, siéntate, escúchame, llámame. \"Escuchame\" misses the accent and \"Llama me\" splits the word."
      ),
    ]
  ),
  L(
    "asking-giving-directions-2",
    "a2g-tu-commands-irregular",
    "Eight Short Commands: di, haz, ve, pon, sal, sé, ten, ven",
    "The eight irregular tú commands you'll hear every day, with pronouns attached: dímelo, hazlo, vete, ponte, ven aquí.",
    "10 min",
    [
      sec(
        "The eight irregular commands",
        [
          "Eight very common verbs have a short, irregular tú command. They're worth learning as a list: decir → di, hacer → haz, ir → ve, poner → pon, salir → sal, ser → sé, tener → ten, venir → ven.",
          "A trick many learners use: most of them are the infinitive with the ending chopped off: pon(er), sal(ir), ten(er), ven(ir).",
          "Verbs built on them do the same: mantener → mantén, proponer → propón, deshacer → deshaz.",
        ],
        [
          ["Di la verdad.", "Tell the truth."],
          ["Haz los deberes.", "Do your homework."],
          ["Ve a la tienda.", "Go to the shop."],
          ["Pon la mesa.", "Set the table."],
          ["Sal de ahí.", "Get out of there."],
          ["Sé bueno.", "Be good."],
          ["Ten cuidado.", "Be careful."],
          ["Ven aquí.", "Come here."],
        ],
        [
          mt(
            "Match each infinitive to its command.",
            [
              ["decir", "di"],
              ["hacer", "haz"],
              ["ir", "ve"],
              ["venir", "ven"],
            ],
            "Four of the eight irregular tú commands."
          ),
        ]
      ),
      sec(
        "Pronouns on the short commands",
        [
          "Pronouns attach just as with regular commands: dime (tell me), hazlo (do it), ponlo (put it), tenlo (have it).",
          "One pronoun on a one-syllable command needs no accent: dime, hazlo, ponte, vente. With two pronouns the stress falls third from last and the accent appears: dímelo, pónmelo, házmelo.",
          "Ir + te gives vete, \"go away, leave\". ¡Vete! can sound harsh; vete a casa is simply \"go home\".",
          "Ve (go, from ir) and ve (he sees, from ver) look alike; context makes it clear.",
        ],
        [
          ["Dime la verdad.", "Tell me the truth."],
          ["Dímelo ya.", "Tell me right now."],
          ["Hazlo tú, por favor.", "You do it, please."],
          ["Ponte el abrigo.", "Put your coat on."],
          ["Vete a dormir, es tarde.", "Go to bed, it's late."],
          ["Ven a verme mañana.", "Come and see me tomorrow."],
        ],
        [
          fe(
            "¿Qué te pasa? ___.",
            "Dime",
            "What's wrong? [Tell me].",
            "Di + me = dime. One syllable plus one pronoun: stress on DI, which is second-to-last, so no accent."
          ),
          mc(
            "\"Do it now!\"",
            ["¡Hazlo ahora!", "¡Házlo ahora!", "¡Hacelo ahora!", "¡Lo haz ahora!"],
            0,
            "Haz + lo = hazlo: stress on HAZ, second-to-last, so no accent. \"Lo haz\" puts the pronoun in front, which an affirmative command never does. \"Hacelo\" is the vos form used in Argentina (see the vos lesson)."
          ),
        ]
      ),
      sec(
        "Sé, ten, ven in everyday phrases",
        [
          "Many fixed phrases use these commands: ¡Ten cuidado! (be careful), ¡Ven aquí! (come here), Sé paciente (be patient), Haz clic aquí (click here), Presta atención (pay attention; pon atención in much of Latin America), Sal de ahí (get out of there).",
          "Sé (be, from ser) has an accent to tell it apart from the pronoun se. It's the same spelling as sé (I know).",
          "On websites and apps you'll see these constantly: Haz clic, Ven a vernos, Ten en cuenta que...",
        ],
        [
          ["Ten en cuenta que cerramos a las ocho.", "Bear in mind that we close at eight."],
          ["Haz clic aquí para comprar.", "Click here to buy."],
          ["Sé amable con tu hermano.", "Be kind to your brother."],
          ["Ven con nosotros.", "Come with us."],
        ],
        [
          mc(
            "\"Be patient!\"",
            ["¡Sé paciente!", "¡Se paciente!", "¡Eres paciente!", "¡Está paciente!"],
            0,
            "The tú command of ser is sé, with an accent. Se without an accent is a pronoun, \"eres\" is a statement, and patience is a quality, so it's ser, not estar."
          ),
        ]
      ),
    ],
    [
      mt(
        "Match each command to its meaning.",
        [
          ["Pon la mesa.", "Set the table."],
          ["Sal ahora.", "Leave now."],
          ["Ten cuidado.", "Be careful."],
          ["Ve despacio.", "Go slowly."],
          ["Haz la cama.", "Make the bed."],
        ],
        "Five of the eight irregular tú commands in everyday phrases."
      ),
      fe(
        "___ aquí, quiero enseñarte algo.",
        "Ven",
        "[Come] here, I want to show you something.",
        "Venir → ven. It's the infinitive with -ir chopped off. \"Viene\" would be the regular pattern, which venir doesn't follow."
      ),
      fe(
        "___ la verdad, por favor.",
        "Di",
        "[Tell] the truth, please.",
        "Decir → di. \"Dice\" is the él form (he says), which decir doesn't use as a command."
      ),
      fe(
        "Hace frío. ___ el abrigo.",
        "Ponte",
        "It's cold. [Put on] your coat.",
        "Ponerse → pon + te = ponte. Spanish says el abrigo, not tu abrigo, because te already shows whose it is."
      ),
      fe(
        "¿La llave? ___ en la mesa.",
        "Ponla",
        "The key? [Put it] on the table.",
        "Pon + la (la llave is feminine) = ponla. One syllable plus one pronoun: no accent."
      ),
      toEs(
        "Go home and rest.",
        "Ve a casa y descansa.",
        "Ir → ve; descansar → descansa (regular: the él form).",
        ["Vete a casa y descansa.", "Ve a tu casa y descansa.", "Vete a tu casa y descansa."]
      ),
      toEs(
        "Tell me the truth.",
        "Dime la verdad.",
        "Di + me = dime, one word, no accent.",
        ["Dime la verdad, por favor.", "Por favor, dime la verdad."]
      ),
      toEn(
        "Ten cuidado, el suelo está mojado.",
        "Be careful, the floor is wet.",
        "Ten cuidado = be careful (literally \"have care\"), from tener.",
        ["Careful, the floor is wet.", "Be careful, the floor's wet."]
      ),
      wo(
        "Sal de casa y ven a la fiesta.",
        "Two irregular commands: sal (salir) and ven (venir).",
        "Get out of the house and come to the party."
      ),
      mc(
        "Which sentence is correct?",
        ["Dímelo mañana.", "Dimelo mañana.", "Dime lo mañana.", "Me lo di mañana."],
        0,
        "Di + me + lo: with two pronouns the stress (DI) is third from last, so it needs an accent: dímelo. \"Dime lo\" splits the word, and \"me lo di\" is a past statement (\"I gave it to myself\"), not a command."
      ),
      ms(
        "Which are real tú commands?",
        ["haz", "sal", "tiene", "ve", "pone"],
        [0, 1, 3],
        "Haz (hacer), sal (salir) and ve (ir) are among the eight irregular commands. Tener and poner also have short forms, ten and pon; \"tiene\" and \"pone\" follow the regular pattern, which these verbs don't use."
      ),
    ]
  ),
  L(
    "asking-giving-directions-2",
    "a2g-diminutives",
    "Little Words: -ito, -ita, -cito and -illo",
    "Un momentito, un cafecito, mi abuelita: how Spanish makes things small, friendly or affectionate, and which endings you'll hear where.",
    "10 min",
    [
      sec(
        "-ito and -ita: small and friendly",
        [
          "Spanish adds -ito / -ita to a noun or adjective to make it small, or simply to sound warm and friendly: casa → casita, perro → perrito, gato → gatito.",
          "Drop the final -o or -a and add the ending. The word keeps its gender: la mesa → la mesita, el libro → el librito.",
          "Very often it isn't about size at all. Un momentito is \"just a moment\", un cafecito is a friendly \"a little coffee\", and abuelita is an affectionate way to say grandma.",
          "Spelling changes keep the sound: poco → poquito, amiga → amiguita, chico → chiquito.",
        ],
        [
          ["Vivimos en una casita cerca del mar.", "We live in a little house near the sea."],
          ["Espera un momentito, por favor.", "Wait just a moment, please."],
          ["¿Nos tomamos un cafecito?", "Shall we have a quick coffee?"],
          ["Mi abuelita cumple noventa años.", "My grandma is turning ninety."],
          ["Solo un poquito, gracias.", "Just a little bit, thanks."],
        ],
        [
          fe(
            "¿Quieres más sopa? Sí, un ___, gracias.",
            "poquito",
            "Do you want more soup? Yes, [a little bit], thanks.",
            "Poco + -ito = poquito: the c becomes qu to keep the hard k sound before i. \"Pocito\" would be pronounced with an s or th sound."
          ),
          mc(
            "What does \"Espera un momentito\" usually mean?",
            ["Wait just a moment.", "Wait a very small moment of exactly one second.", "Wait a long time.", "Wait for the little one."],
            0,
            "Diminutives often make a request sound softer and friendlier rather than talking about real size. Un momentito is simply \"just a moment\"."
          ),
        ]
      ),
      sec(
        "-cito, -ecito: words ending in -e, -n, -r",
        [
          "Many words ending in -e, -n or -r take -cito / -cita instead: café → cafecito, joven → jovencito, amor → amorcito, calor → calorcito.",
          "Some short words take -ecito: pan → panecito (in Spain also panecillo), pie → piececito, flor → florecita.",
          "Regions differ: in Spain you'll hear cafelito or cafetito now and then, while cafecito is the everyday form in most of Latin America. You'll be understood with any of them.",
        ],
        [
          ["Mi amorcito, ¿ya estás en casa?", "Sweetheart, are you home yet?"],
          ["Hace un calorcito muy agradable.", "It's nice and warm."],
          ["El jovencito de la tienda es muy amable.", "The young lad in the shop is very kind."],
          ["Te traje unas florecitas.", "I brought you some little flowers."],
        ],
        [
          mc(
            "Which is the usual diminutive of café?",
            ["cafecito", "cafeíto", "cafito", "cafeita"],
            0,
            "Words ending in a stressed -é usually take -cito: café → cafecito. Just adding -ito (cafeíto) or dropping the vowel (cafito) isn't how it's formed."
          ),
        ]
      ),
      sec(
        "-illo, and diminutives with a twist",
        [
          "-illo / -illa is another diminutive ending, heard a lot in Spain, especially in Andalusia: un momentillo, un poquillo, una ventanilla.",
          "Some diminutives have become separate words with their own meaning: la ventanilla is a car window or a ticket window, el bocadillo is a sandwich in Spain, la bombilla is a light bulb, and la cucharilla is a teaspoon in Spain.",
          "-ito can also make an adverb or adjective stronger: ahora → ahorita (right now; in Mexico it can also mean \"in a bit\"), cerca → cerquita (very close), despacio → despacito (really slowly).",
          "Regional favourites: Costa Rica and Colombia are famous for -ico (un momentico, chiquitico), and Mexico uses -ito everywhere, even on ahorita and adiosito.",
        ],
        [
          ["El museo está cerquita.", "The museum is really close."],
          ["Habla despacito, que no te entiendo.", "Speak really slowly, I don't understand you."],
          ["Compra los billetes en la ventanilla.", "Buy the tickets at the ticket window."],
          ["Me comí un bocadillo de queso.", "I had a cheese sandwich. (Spain)"],
          ["Ahorita vengo.", "I'll be right back. (Mexico)"],
        ],
        [
          mc(
            "In Spain, you ask for \"un bocadillo de jamón\". What do you get?",
            ["A ham sandwich", "A small piece of ham", "A little mouthful of ham", "A ham soup"],
            0,
            "Bocadillo started as a diminutive of bocado (a mouthful) but is now its own word: a sandwich made with a baguette-style roll."
          ),
        ]
      ),
    ],
    [
      mt(
        "Match each word to its diminutive.",
        [
          ["casa", "casita"],
          ["perro", "perrito"],
          ["poco", "poquito"],
          ["café", "cafecito"],
          ["amor", "amorcito"],
        ],
        "-ito / -ita after dropping the vowel, -cito after -e and -r, and qu before i to keep the k sound."
      ),
      fe(
        "Vamos andando, el parque está ___.",
        "cerquita",
        "Let's walk, the park is [really close].",
        "Cerca + -ita = cerquita (c → qu before i). The diminutive makes it sound even closer.",
        ["cerca"]
      ),
      fe(
        "Mi hermana tiene un ___ negro que se llama Coco.",
        "perrito",
        "My sister has a [little dog] that's called Coco.",
        "Perro → perrito: drop -o, add -ito. Perro is masculine, so the diminutive stays masculine.",
        ["perro"]
      ),
      fe(
        "¿Me esperas un ___? Ya casi estoy.",
        "momentito",
        "Can you wait [just a moment] for me? I'm almost ready.",
        "Momento → momentito, a very common way to soften \"a moment\". In Spain you'll also hear momentillo.",
        ["momento", "momentillo", "momentico"]
      ),
      toEs(
        "Just a little bit, please.",
        "Solo un poquito, por favor.",
        "Poco → poquito; the diminutive makes the request sound polite and modest.",
        ["Un poquito, por favor.", "Solo un poco, por favor.", "Nada más un poquito, por favor.", "Solo un poquito por favor."]
      ),
      toEs(
        "Shall we have a coffee?",
        "¿Nos tomamos un cafecito?",
        "Cafecito is the friendly everyday word; ¿nos tomamos...? is a natural way to suggest it.",
        ["¿Tomamos un cafecito?", "¿Nos tomamos un café?", "¿Tomamos un café?", "¿Vamos a tomar un café?", "¿Vamos a tomar un cafecito?"]
      ),
      toEn(
        "Mi abuelita vive en una casita en el campo.",
        "My grandma lives in a little house in the countryside.",
        "Abuelita is affectionate (grandma, granny); casita is a small house.",
        ["My granny lives in a little house in the country.", "My grandma lives in a small house in the country.", "My grandma lives in a little house in the country.", "My granny lives in a small house in the countryside."]
      ),
      mc(
        "Which diminutive is spelled correctly?",
        ["chiquito", "chicito", "chiquíto", "chikito"],
        0,
        "Chico → chiquito: c becomes qu before i to keep the k sound, and no written accent is needed (stress on QUI, second to last, word ends in a vowel)."
      ),
      mc(
        "At a train station in Spain, a sign says \"Venta de billetes: ventanilla 3\". What is it?",
        ["Ticket window 3", "Small window 3", "Car window 3", "Shop 3"],
        0,
        "Ventanilla is a diminutive that became its own word: a ticket window or counter (and also a car or train window)."
      ),
      wo(
        "Habla más despacito, por favor.",
        "Despacito makes despacio (slowly) stronger and softer at the same time: \"nice and slowly\".",
        "Speak a bit more slowly, please."
      ),
      ms(
        "Which of these are diminutives used mainly for affection or politeness rather than size?",
        ["un momentito", "mi abuelita", "un cafecito", "una bombilla"],
        [0, 1, 2],
        "Momentito, abuelita and cafecito make the speaker sound warm or polite. Bombilla (light bulb) came from a diminutive but is now just the normal word for the object."
      ),
    ]
  ),
  L(
    "asking-giving-directions-2",
    "a2g-hace-que-desde-hace",
    "How Long? Hace... que, desde hace and hace (ago)",
    "Hace dos años que vivo aquí, vivo aquí desde hace dos años, llegué hace dos años: talking about how long something has been going on and how long ago it happened.",
    "10 min",
    [
      sec(
        "Hace + time + que + present",
        [
          "To say how long something has been going on (and still is), Spanish uses hace + time + que + PRESENT tense: Hace dos años que vivo en Madrid = I've been living in Madrid for two years.",
          "English uses \"have been\", but Spanish uses the present because the action is still happening now. Don't translate \"have been\" word for word.",
          "To ask: ¿Cuánto tiempo hace que...? + present. ¿Cuánto tiempo hace que estudias español? = How long have you been studying Spanish?",
        ],
        [
          ["Hace dos años que vivo en Madrid.", "I've been living in Madrid for two years."],
          ["Hace una hora que te espero.", "I've been waiting for you for an hour."],
          ["¿Cuánto tiempo hace que trabajas aquí?", "How long have you been working here?"],
          ["Hace mucho que no veo a Pablo.", "I haven't seen Pablo for a long time."],
        ],
        [
          mc(
            "\"I've been learning Spanish for six months.\"",
            [
              "Hace seis meses que aprendo español.",
              "Hace seis meses que he aprendido español.",
              "Aprendo español por seis meses.",
              "Seis meses hace aprendo español.",
            ],
            0,
            "The action is still going on, so Spanish uses hace + time + que + present: aprendo. \"He aprendido\" presents it as finished, and \"por seis meses\" sounds like a plan for the future, not how long it's been."
          ),
        ]
      ),
      sec(
        "The same idea with desde hace, and with llevar",
        [
          "You can flip the sentence: present + desde hace + time. Vivo en Madrid desde hace dos años means exactly the same as Hace dos años que vivo en Madrid.",
          "Desde (since) alone goes with a starting point, not a length of time: desde 2020, desde el lunes, desde niño. Desde hace goes with a length: desde hace tres días.",
          "A third very common option: llevar + time + gerund. Llevo dos años viviendo en Madrid. You'll practise this one more in B1.",
        ],
        [
          ["Vivo en Madrid desde hace dos años.", "I've been living in Madrid for two years."],
          ["Vivo en Madrid desde 2022.", "I've been living in Madrid since 2022."],
          ["Estudio inglés desde hace mucho tiempo.", "I've been studying English for a long time."],
          ["No llueve desde el domingo.", "It hasn't rained since Sunday."],
          ["Llevo dos años viviendo aquí.", "I've been living here for two years."],
        ],
        [
          fe(
            "Trabajo en este hospital ___ cinco años.",
            "desde hace",
            "I've been working at this hospital [for] five years.",
            "Cinco años is a length of time, so it takes desde hace. Desde alone goes with a starting point (desde 2019). \"Por\" would not express how long it has been going on."
          ),
          mc(
            "Which sentence is correct?",
            ["Estoy aquí desde las nueve.", "Estoy aquí desde hace las nueve.", "Estoy aquí hace las nueve.", "Estoy aquí por las nueve."],
            0,
            "Las nueve is a starting point in time, so it takes desde. Desde hace needs a length of time (desde hace una hora)."
          ),
        ]
      ),
      sec(
        "Hace + time + past = ago",
        [
          "With a past tense, hace means \"ago\": Llegué hace dos años = I arrived two years ago. The word order is the opposite of English: hace comes before the time.",
          "Compare: Hace dos años que vivo aquí (still living here) and Viví allí hace dos años (I lived there two years ago, finished).",
          "To ask when: ¿Cuándo llegaste? — Hace una semana. Or: ¿Hace cuánto que llegaste? (common in Latin America).",
        ],
        [
          ["Llegué a España hace dos años.", "I arrived in Spain two years ago."],
          ["Te llamé hace diez minutos.", "I called you ten minutes ago."],
          ["Hace un rato vi a tu hermana.", "I saw your sister a little while ago."],
          ["¿Cuándo empezaste? — Hace un mes.", "When did you start? — A month ago."],
        ],
        [
          mc(
            "\"We met three years ago.\"",
            ["Nos conocimos hace tres años.", "Nos conocimos tres años hace.", "Nos conocemos hace tres años.", "Hace tres años que nos conocimos por."],
            0,
            "A finished past event + hace + time = ago. Hace goes before the time. \"Nos conocemos\" in the present would mean you've known each other for three years, which is a different idea."
          ),
        ]
      ),
    ],
    [
      mt(
        "Match each sentence to its meaning.",
        [
          ["Hace un año que vivo aquí.", "I've been living here for a year."],
          ["Viví aquí hace un año.", "I lived here a year ago."],
          ["Vivo aquí desde 2023.", "I've been living here since 2023."],
          ["Vivo aquí desde hace un año.", "I've lived here for a year."],
        ],
        "Present tense = still going on (hace... que, desde hace, desde). Past tense + hace = ago."
      ),
      fe(
        "___ tres horas que estudio. ¡Necesito un descanso!",
        "Hace",
        "I've been studying [for] three hours. I need a break!",
        "Hace + time + que + present for something still going on. Spanish doesn't use \"he estado\" here."
      ),
      fe(
        "Salieron de casa ___ media hora.",
        "hace",
        "They left home half an hour [ago].",
        "Past tense (salieron) + hace + time = ago. Hace goes before the length of time."
      ),
      fe(
        "No como carne ___ 2021.",
        "desde",
        "I haven't eaten meat [since] 2021.",
        "2021 is a starting point, so it's desde alone. With a length of time it would be desde hace (desde hace tres años)."
      ),
      fe(
        "Somos amigos ___ diez años.",
        "desde hace",
        "We've been friends [for] ten years.",
        "Diez años is a length of time and you're still friends, so desde hace + present."
      ),
      toEs(
        "How long have you been living here?",
        "¿Cuánto tiempo hace que vives aquí?",
        "¿Cuánto tiempo hace que + present? is the standard question. The present tense shows you still live here.",
        ["¿Cuánto hace que vives aquí?", "¿Desde cuándo vives aquí?", "¿Cuánto tiempo llevas viviendo aquí?", "¿Hace cuánto que vives aquí?", "¿Cuánto tiempo hace que vive aquí?", "¿Cuánto tiempo hace que vive usted aquí?"]
      ),
      toEs(
        "I bought this phone a week ago.",
        "Compré este teléfono hace una semana.",
        "Compré is a finished past action, and hace una semana means \"a week ago\".",
        ["Hace una semana compré este teléfono.", "Compré este móvil hace una semana.", "Compré este celular hace una semana.", "Hace una semana que compré este teléfono."]
      ),
      toEn(
        "Hace mucho tiempo que no hablo con mi prima.",
        "I haven't talked to my cousin for a long time.",
        "Hace mucho tiempo que + no + present = I haven't done something for a long time.",
        ["I haven't spoken to my cousin for a long time.", "I haven't spoken to my cousin in a long time.", "I haven't talked to my cousin in a long time.", "It's been a long time since I talked to my cousin.", "It's been a long time since I spoke to my cousin."]
      ),
      wo(
        "Hace dos semanas que busco piso.",
        "Hace + time + que + present: the search is still going on.",
        "I've been looking for a flat for two weeks."
      ),
      mc(
        "Your friend asks: \"¿Cuándo llegaste a Lima?\" Which answer fits?",
        ["Hace tres días.", "Desde hace tres días.", "Hace tres días que llego.", "Desde tres días."],
        0,
        "¿Cuándo...? asks for a moment in the past, so the answer is hace + time = ago. Desde hace answers \"for how long\", not \"when\"."
      ),
      ms(
        "Which sentences mean \"I've been working here for a year\"?",
        ["Hace un año que trabajo aquí.", "Trabajo aquí desde hace un año.", "Trabajé aquí hace un año.", "Llevo un año trabajando aquí."],
        [0, 1, 3],
        "Hace... que + present, desde hace + present and llevar + time + gerund all describe something still going on. Trabajé aquí hace un año means \"I worked here a year ago\" (and maybe not any more)."
      ),
    ]
  ),
  L(
    "asking-giving-directions-2",
    "a2g-muy-vs-mucho",
    "Muy or Mucho?",
    "Muy goes with adjectives and adverbs, mucho with nouns and verbs: muy cansado, mucho trabajo, trabajo mucho. Plus the trap: muy mucho never works.",
    "8 min",
    [
      sec(
        "Muy + adjective or adverb",
        [
          "Muy means \"very\". It goes in front of an adjective (muy alto, muy cansada) or an adverb (muy bien, muy tarde, muy despacio).",
          "Muy never changes: muy alto, muy alta, muy altos, muy altas.",
          "Muy can't stand alone. To answer \"very\" on its own, say mucho: ¿Estás cansado? — Sí, mucho.",
        ],
        [
          ["La película es muy buena.", "The film is very good."],
          ["Estamos muy cansados.", "We're very tired."],
          ["Hablas español muy bien.", "You speak Spanish very well."],
          ["Es muy tarde, vámonos.", "It's very late, let's go."],
          ["¿Te gustó? — Sí, mucho.", "Did you like it? — Yes, a lot."],
        ],
        [
          mc(
            "\"The exam was very difficult.\"",
            ["El examen fue muy difícil.", "El examen fue mucho difícil.", "El examen fue muy mucho difícil.", "El examen fue mucha difícil."],
            0,
            "Difícil is an adjective, so it takes muy. Mucho goes with nouns and verbs, never directly before an adjective."
          ),
        ]
      ),
      sec(
        "Mucho with nouns and verbs",
        [
          "Before a noun, mucho means \"a lot of, much, many\" and agrees with the noun like an adjective: mucho trabajo, mucha gente, muchos libros, muchas veces.",
          "After a verb, mucho means \"a lot\" and doesn't change: Trabajo mucho. Ella lee mucho. Llovió mucho.",
          "Some ideas that are adjectives in English are nouns in Spanish, so they take mucho: tengo mucho frío (I'm very cold), tengo mucha hambre (I'm very hungry), tengo mucho sueño, hace mucho calor.",
        ],
        [
          ["Hay mucha gente en la playa.", "There are a lot of people on the beach."],
          ["Tengo muchos amigos en Chile.", "I have a lot of friends in Chile."],
          ["Mi padre trabaja mucho.", "My father works a lot."],
          ["Tengo mucha hambre.", "I'm very hungry."],
          ["Hoy hace mucho calor.", "It's very hot today."],
        ],
        [
          fe(
            "Tengo ___ sed, ¿hay agua?",
            "mucha",
            "I'm [very] thirsty, is there any water?",
            "Sed is a feminine noun (la sed), so it takes mucha, not muy. English says \"very thirsty\" with an adjective; Spanish says \"much thirst\"."
          ),
          mc(
            "\"She reads a lot.\"",
            ["Ella lee mucho.", "Ella lee muy.", "Ella lee mucha.", "Ella muy lee."],
            0,
            "After a verb, \"a lot\" is mucho, and it doesn't agree with ella because it describes the action, not a noun."
          ),
        ]
      ),
      sec(
        "Mucho in comparisons, and the exceptions",
        [
          "With mejor, peor, mayor, menor, más and menos, use mucho, not muy: mucho mejor (much better), mucho más barato (much cheaper), mucho menos.",
          "Muchísimo is \"really a lot\": Te quiero muchísimo. Muy can become -ísimo on the adjective: muy caro → carísimo.",
          "A common mistake is \"muy mucho\". Spanish never puts them together: say muchísimo instead.",
        ],
        [
          ["Este hotel es mucho mejor.", "This hotel is much better."],
          ["El tren es mucho más rápido que el autobús.", "The train is much faster than the bus."],
          ["Me gusta muchísimo.", "I like it very much."],
          ["El piso es carísimo.", "The flat is really expensive."],
        ],
        [
          mc(
            "\"My new job is much better.\"",
            ["Mi nuevo trabajo es mucho mejor.", "Mi nuevo trabajo es muy mejor.", "Mi nuevo trabajo es muy mucho mejor.", "Mi nuevo trabajo es mucha mejor."],
            0,
            "Mejor is already a comparison, and comparisons take mucho: mucho mejor, mucho más, mucho peor. \"Muy mejor\" is a classic learner mistake."
          ),
        ]
      ),
    ],
    [
      mt(
        "Match each phrase to its meaning.",
        [
          ["muy caro", "very expensive"],
          ["mucho dinero", "a lot of money"],
          ["mucho más caro", "much more expensive"],
          ["pago mucho", "I pay a lot"],
        ],
        "Muy + adjective; mucho + noun, after a verb, or before más, menos, mejor and peor."
      ),
      fe(
        "Tu hermano es ___ simpático.",
        "muy",
        "Your brother is [very] nice.",
        "Simpático is an adjective, so it's muy. Mucho never goes right before an adjective."
      ),
      fe(
        "Había ___ coches en la carretera.",
        "muchos",
        "There were [a lot of] cars on the road.",
        "Before a noun, mucho agrees with it: coches is masculine plural, so muchos."
      ),
      fe(
        "Anoche dormí ___ y hoy estoy bien.",
        "mucho",
        "Last night I slept [a lot] and today I feel fine.",
        "After a verb (dormí), \"a lot\" is mucho, and it doesn't change form."
      ),
      fe(
        "Cierra la ventana, tengo ___ frío.",
        "mucho",
        "Close the window, I'm [very] cold.",
        "Frío is a noun in tener frío, so it takes mucho. English uses \"very\", but Spanish thinks of it as \"a lot of cold\"."
      ),
      toEs(
        "The city is very beautiful.",
        "La ciudad es muy bonita.",
        "Bonita is an adjective, so muy; muy never changes form.",
        ["La ciudad es muy linda.", "La ciudad es muy hermosa.", "La ciudad es bonitísima.", "La ciudad es preciosa."]
      ),
      toEs(
        "I'm very hungry.",
        "Tengo mucha hambre.",
        "Hambre is a noun (el hambre, but feminine), so tener mucha hambre. \"Estoy muy hambriento\" exists but sounds unusual.",
        ["Tengo muchísima hambre.", "Tengo un hambre enorme."]
      ),
      toEn(
        "El metro es mucho más rápido.",
        "The metro is much faster.",
        "Mucho más + adjective = much more... / much ...er.",
        ["The subway is much faster.", "The underground is much faster.", "The metro is a lot faster.", "The subway is a lot faster."]
      ),
      mc(
        "Which sentence is correct?",
        ["Me gusta muchísimo tu casa.", "Me gusta muy mucho tu casa.", "Me gusta muy tu casa.", "Me gusta mucha tu casa."],
        0,
        "To say \"really a lot\", use muchísimo. \"Muy mucho\" doesn't exist, muy can't stand alone after a verb, and mucha would only agree with a noun right after it."
      ),
      wo(
        "Hay muchas personas muy amables aquí.",
        "Muchas agrees with personas (a noun); muy goes with amables (an adjective).",
        "There are lots of very kind people here."
      ),
      ms(
        "Which are correct?",
        ["muy bien", "mucho bien", "mucha gente", "muy gente", "mucho peor"],
        [0, 2, 4],
        "Muy + adverb (muy bien), mucha + noun (mucha gente), mucho + comparative (mucho peor). \"Mucho bien\" and \"muy gente\" mix them up."
      ),
    ]
  ),
  L(
    "asking-giving-directions-2",
    "a2g-pedir-vs-preguntar",
    "Pedir or Preguntar? Two Ways to Ask",
    "Pedir is asking FOR something (a coffee, help, a favour); preguntar is asking a question. Plus hacer una pregunta and preguntar por.",
    "8 min",
    [
      sec(
        "Pedir: asking for something",
        [
          "Pedir means to ask FOR something, to request or order: pedir un café, pedir ayuda, pedir la cuenta, pedir un favor.",
          "It's an e → i stem changer: pido, pides, pide, pedimos, pedís, piden. Preterite: pedí, pediste, pidió, pedimos, pedisteis, pidieron.",
          "Don't add \"por\" for \"ask for\": pedir already includes it. Pido la cuenta, not \"pido por la cuenta\".",
          "To ask someone to DO something: pedir a alguien que + verb. At A2, you can use pedir + noun or ¿Me puedes...? instead.",
        ],
        [
          ["Voy a pedir un café con leche.", "I'm going to order a white coffee."],
          ["¿Pedimos la cuenta?", "Shall we ask for the bill?"],
          ["Te quiero pedir un favor.", "I want to ask you a favour."],
          ["Pidió ayuda a su vecino.", "She asked her neighbour for help."],
        ],
        [
          mc(
            "\"We asked for the menu.\"",
            ["Pedimos la carta.", "Preguntamos la carta.", "Pedimos por la carta.", "Preguntamos por la carta."],
            0,
            "Asking for a thing is pedir, and \"for\" is already included in the verb. Preguntar is for questions."
          ),
        ]
      ),
      sec(
        "Preguntar: asking a question",
        [
          "Preguntar means to ask a question, to ask for information: preguntar la hora, preguntar el precio, preguntar dónde está algo.",
          "It's regular: pregunto, preguntas, pregunta... Often followed by si (whether) or a question word: Le pregunté si venía. Pregunta dónde está el baño.",
          "\"To ask a question\" is hacer una pregunta, not \"preguntar una pregunta\": ¿Puedo hacerte una pregunta?",
          "Preguntar por + person means to ask about or ask after someone: Tu madre preguntó por ti (your mum asked about you).",
        ],
        [
          ["Pregúntale a qué hora sale el tren.", "Ask him what time the train leaves."],
          ["Le pregunté si tenía hijos.", "I asked her if she had children."],
          ["¿Puedo hacerte una pregunta?", "Can I ask you a question?"],
          ["Ayer Ana preguntó por ti.", "Ana asked about you yesterday."],
        ],
        [
          mc(
            "\"Can I ask a question?\"",
            ["¿Puedo hacer una pregunta?", "¿Puedo preguntar una pregunta?", "¿Puedo pedir una pregunta?", "¿Puedo pedir una pregunta a usted?"],
            0,
            "Spanish says hacer una pregunta (literally \"make a question\"). \"Preguntar una pregunta\" repeats itself, and pedir is for requesting things."
          ),
        ]
      ),
      sec(
        "Choosing between them",
        [
          "Ask yourself: do I want a THING or an ACTION from someone (pedir), or do I want INFORMATION, an answer (preguntar)?",
          "Pedir la hora doesn't work: you want information, so it's preguntar la hora. Preguntar un café doesn't work: you want a coffee, so it's pedir un café.",
          "Pedir perdón / pedir disculpas = to apologise. Pedir prestado = to borrow: ¿Te puedo pedir prestado el paraguas?",
        ],
        [
          ["Le pregunté el precio y le pedí un descuento.", "I asked him the price and asked him for a discount."],
          ["Tienes que pedir perdón.", "You have to apologise."],
          ["¿Puedo pedirte prestado el coche?", "Can I borrow your car?"],
          ["Pregunta al camarero si tienen mesa.", "Ask the waiter if they have a table."],
        ],
        [
          ms(
            "Which need pedir (not preguntar)?",
            ["to ask for the bill", "to ask what time it is", "to ask for help", "to ask where the station is", "to apologise"],
            [0, 2, 4],
            "The bill and help are things you request, and pedir perdón is to apologise. The time and the station's location are information, so preguntar."
          ),
        ]
      ),
    ],
    [
      mt(
        "Match each phrase to its meaning.",
        [
          ["pedir la cuenta", "to ask for the bill"],
          ["preguntar la hora", "to ask the time"],
          ["hacer una pregunta", "to ask a question"],
          ["pedir perdón", "to apologise"],
          ["preguntar por alguien", "to ask about someone"],
        ],
        "Pedir = request something; preguntar = ask for information."
      ),
      fe(
        "Siempre ___ paella cuando vamos a ese restaurante.",
        "pido",
        "I always [order] paella when we go to that restaurant.",
        "Ordering food is requesting a thing, so pedir. E → i stem change: yo pido."
      ),
      fe(
        "Voy a ___ al conductor dónde tengo que bajar.",
        "preguntar",
        "I'm going to [ask] the driver where I have to get off.",
        "You want information (where to get off), so preguntar. Pedir would mean requesting something."
      ),
      fe(
        "Ayer mi jefe me ___ un informe para hoy.",
        "pidió",
        "Yesterday my boss [asked me for] a report for today.",
        "He requested a thing (a report): pedir. Preterite él form with the stem change: pidió."
      ),
      fe(
        "Mi abuela siempre ___ por ti.",
        "pregunta",
        "My grandma always [asks] about you.",
        "Preguntar por + person = ask about someone, ask how they are."
      ),
      toEs(
        "Can I ask you a question?",
        "¿Puedo hacerte una pregunta?",
        "Hacer una pregunta = to ask a question. The pronoun te can go on the infinitive or before puedo.",
        ["¿Te puedo hacer una pregunta?", "¿Puedo hacerle una pregunta?", "¿Le puedo hacer una pregunta?", "¿Puedo preguntarte algo?", "¿Te puedo preguntar algo?", "¿Puedo hacer una pregunta?"]
      ),
      toEs(
        "She asked for help.",
        "Pidió ayuda.",
        "Help is something you request: pedir. No \"por\": pedir ayuda.",
        ["Ella pidió ayuda.", "Pidió ayuda ella."]
      ),
      toEn(
        "Le pregunté si quería venir.",
        "I asked him if he wanted to come.",
        "Preguntar + si = ask whether/if.",
        ["I asked her if she wanted to come.", "I asked him whether he wanted to come.", "I asked her whether she wanted to come.", "I asked you if you wanted to come."]
      ),
      mc(
        "At a hotel, you want an extra towel. What do you say?",
        ["¿Puedo pedir otra toalla?", "¿Puedo preguntar otra toalla?", "¿Puedo pedir por otra toalla?", "¿Puedo hacer una toalla?"],
        0,
        "You're requesting a thing, so pedir, with no por. Preguntar is only for questions."
      ),
      wo(
        "Pregúntale cuánto cuesta el billete.",
        "Pregunta + le: you want information (the price), so preguntar.",
        "Ask him how much the ticket costs."
      ),
      mc(
        "Which sentence is wrong?",
        ["Pregunté una pregunta al profesor.", "Hice una pregunta al profesor.", "Le pregunté algo al profesor.", "Le pedí ayuda al profesor."],
        0,
        "\"Preguntar una pregunta\" repeats itself; say hacer una pregunta. The other three are natural Spanish."
      ),
    ]
  ),
  L(
    "asking-giving-directions-2",
    "a2g-vos-vosotros",
    "Vos and Vosotros: What You'll Hear",
    "A recognition lesson: vosotros (you all) in Spain, ustedes everywhere else, and vos (you) in Argentina, Uruguay and much of Central America. You don't need to use them yet, just understand them.",
    "8 min",
    [
      sec(
        "Vosotros: \"you all\" in Spain",
        [
          "In Spain, talking to two or more friends, people use vosotros / vosotras with its own verb endings: habláis, coméis, vivís. Ustedes is kept for formal situations.",
          "In Latin America (and the Canary Islands and parts of Andalusia), ustedes is used for every group, friends or not: ¿Ustedes vienen? = ¿Vosotros venís?",
          "Vosotros has its own object and possessive words: os (you, to you) and vuestro / vuestra (your). ¿Os gusta? = Do you (all) like it? ¿Es vuestra casa? = Is it your house?",
          "Recognise the endings: -áis for -ar verbs, -éis for -er verbs, -ís for -ir verbs. In the preterite: hablasteis, comisteis.",
        ],
        [
          ["¿Vosotros sois de aquí?", "Are you guys from here? (Spain)"],
          ["¿Ustedes son de aquí?", "Are you guys from here? (Latin America)"],
          ["¿Qué queréis tomar?", "What do you all want to drink? (Spain)"],
          ["Os espero en la puerta.", "I'll wait for you at the door. (Spain)"],
          ["¿Es vuestro perro?", "Is it your dog? (Spain)"],
        ],
        [
          mc(
            "In Madrid, a waiter asks two friends \"¿Ya sabéis qué vais a pedir?\". Who is \"you\"?",
            ["Both friends", "Only one of them", "The waiter himself", "Someone at another table"],
            0,
            "Sabéis and vais are vosotros forms: \"you all\", used for a group of people you'd call tú. In Latin America the waiter would say \"¿Ya saben qué van a pedir?\"."
          ),
        ]
      ),
      sec(
        "Vos: \"you\" in Argentina, Uruguay and Central America",
        [
          "In Argentina, Uruguay, Paraguay and much of Central America, people use vos instead of tú for \"you\" (one person, informal). It's normal, everyday, educated speech, not slang.",
          "In the present, the vos form moves the stress to the ending, with no stem change: vos hablás, vos tenés, vos querés, vos vivís, vos podés. Ser is vos sos.",
          "Commands too: hablá, comé, vení, decime, mirá. Mirá (look) and dale (OK, go on) are everywhere in Buenos Aires.",
          "The other words stay as with tú: te and tu. Vos te llamás Ana, ¿no? = Tú te llamas Ana, ¿no?",
        ],
        [
          ["¿Vos sos de Buenos Aires?", "Are you from Buenos Aires?"],
          ["¿Qué querés comer?", "What do you want to eat?"],
          ["Vos tenés razón.", "You're right."],
          ["Vení, mirá esto.", "Come here, look at this."],
          ["¿Cómo te llamás?", "What's your name?"],
        ],
        [
          mc(
            "An Argentine friend says \"¿Vos tenés hambre?\". What does it mean?",
            ["Are you hungry?", "Are you all hungry?", "Is he hungry?", "Do we have food?"],
            0,
            "Vos tenés is the vos form of tener, meaning the same as tú tienes: \"Are you hungry?\" (one person, informal)."
          ),
        ]
      ),
      sec(
        "Which should you use?",
        [
          "For now, tú and ustedes work everywhere. Everyone understands them, including in Spain and Argentina.",
          "If you live in Spain, start using vosotros with groups of friends. If you live in Argentina or Uruguay, start using vos. You'll learn the full forms later in the course.",
          "Quick table: tú hablas = vos hablás (one friend); vosotros habláis (Spain) = ustedes hablan (everywhere) (a group).",
        ],
        [
          ["Tú eres muy simpático. / Vos sos muy simpático.", "You're very nice."],
          ["¿Tú puedes venir? / ¿Vos podés venir?", "Can you come?"],
          ["¿Vosotros venís? / ¿Ustedes vienen?", "Are you all coming?"],
        ],
        [
          mt(
            "Match each form to the same thing with tú or ustedes.",
            [
              ["vos sos", "tú eres"],
              ["vos querés", "tú quieres"],
              ["vosotros tenéis", "ustedes tienen"],
              ["vosotros sois", "ustedes son"],
            ],
            "Vos forms replace tú forms; vosotros forms replace ustedes forms (in Spain, with friends)."
          ),
        ]
      ),
    ],
    [
      mc(
        "Which place mainly uses vosotros for \"you all\"?",
        ["Spain", "Mexico", "Argentina", "Colombia"],
        0,
        "Vosotros is used in most of Spain. All of Latin America uses ustedes for any group."
      ),
      mc(
        "What does \"¿Querés un café?\" mean?",
        ["Do you want a coffee?", "Do you all want a coffee?", "Does he want a coffee?", "Did you want a coffee?"],
        0,
        "Querés is the vos form of querer (tú quieres): one person, informal, present."
      ),
      mt(
        "Match the Spain form to the Latin American form.",
        [
          ["¿Qué queréis?", "¿Qué quieren?"],
          ["Os llamo luego.", "Los llamo luego."],
          ["Es vuestra casa.", "Es la casa de ustedes."],
          ["¿Venís mañana?", "¿Vienen mañana?"],
        ],
        "Vosotros verbs, os and vuestro in Spain correspond to ustedes verbs, los/les and de ustedes (or su) in Latin America."
      ),
      toEn(
        "Vos sos mi mejor amiga.",
        "You are my best friend.",
        "Vos sos = tú eres (you are), used in Argentina, Uruguay and Central America.",
        ["You're my best friend."]
      ),
      toEn(
        "¿Vosotros vivís cerca?",
        "Do you live nearby?",
        "Vivís is the vosotros form of vivir: a question to a group, in Spain.",
        ["Do you guys live nearby?", "Do you all live nearby?", "Do you live near here?", "Do you guys live close by?", "Do you live close by?"]
      ),
      fe(
        "(Spain) Chicos, ¿___ venir a cenar el sábado?",
        "queréis",
        "Guys, [do you want] to come to dinner on Saturday?",
        "Talking to a group of friends in Spain: vosotros queréis. In Latin America: ¿quieren venir?",
        ["quieren"]
      ),
      fe(
        "(Argentina) ¿Vos ___ de Córdoba?",
        "sos",
        "[Are you] from Córdoba?",
        "The vos form of ser is sos: vos sos = tú eres.",
        ["eres"]
      ),
      toEs(
        "Are you (all) coming tomorrow?",
        "¿Vienen mañana?",
        "Ustedes vienen works everywhere. In Spain, with friends, you'd hear ¿Venís mañana?",
        ["¿Ustedes vienen mañana?", "¿Venís mañana?", "¿Vosotros venís mañana?", "¿Vienen ustedes mañana?", "¿Vosotras venís mañana?"]
      ),
      ms(
        "Which are vos forms (Argentina, Uruguay)?",
        ["tenés", "tienes", "podés", "habláis", "sos"],
        [0, 2, 4],
        "Vos forms stress the ending and skip the stem change: tenés, podés, sos. Tienes is tú; habláis is vosotros."
      ),
      wo(
        "Mirá, ¿vos sabés dónde está el banco?",
        "Mirá and sabés are vos forms (tú: mira, sabes).",
        "Look, do you know where the bank is?"
      ),
    ]
  ),
];
