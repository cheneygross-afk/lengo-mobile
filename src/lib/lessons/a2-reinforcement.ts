import { anchored, authoring } from "./authoring";
import type { AnchoredLesson } from "./weave";

// A2 reinforcement lessons -- woven into A2_LESSONS right after the lesson
// each one reinforces (see weave.ts). Same idea as a1-reinforcement.ts: no
// brand-new grammar, just the material the learner has covered re-presented
// in formats the base lessons don't use (dialogue labs, error hunts,
// contrast clinics, transformations, story detectives, real-world missions,
// spiral reviews that reach back across earlier lessons and into A1, and a
// closing A2 Challenge series).
const { mc, ms, fb, toEs, toEn, wo, mt, sec } = authoring("en");
const L = (
  after: string,
  slug: string,
  title: string,
  summary: string,
  duration: string,
  sections: Parameters<typeof anchored>[6],
  exercises: Parameters<typeof anchored>[7]
) => anchored("A2", after, slug, title, summary, duration, sections, exercises);

export const A2_REINFORCEMENT: AnchoredLesson[] = [
  L(
    "preterite-regular-verbs-2",
    "a2r-dialogue-weekend",
    "Dialogue Lab: What Did You Do This Weekend?",
    "Monday-morning small talk — ask and answer about the weekend with regular preterite verbs.",
    "7 min",
    [
      sec(
        "Scene: Monday at the office",
        "Two coworkers catch up. Notice the mirror rule from A1 still applies: a tú question gets a yo answer, and the endings change with it (-aste → -é, -iste → -í).",
        [
          ["—¿Qué hiciste el fin de semana? —Nada especial. El sábado limpié la casa.", "What did you do this weekend? — Nothing special. On Saturday I cleaned the house."],
          ["—¿Saliste el domingo? —Sí, salí con mis primos y comimos en un restaurante peruano.", "Did you go out on Sunday? — Yes, I went out with my cousins and we ate at a Peruvian restaurant."],
        ],
        [
          fb("Answer the question.", "—¿Visitaste a tus abuelos? —Sí, los ___ el sábado.", "visité", "Tú question (visitaste) → yo answer (visité). Don't forget the accent."),
        ]
      ),
      sec(
        "Asking about others",
        "When you ask about a third person, the él/ella form ends in -ó (-AR) or -ió (-ER/-IR). The accent is what separates it from the present-tense yo form.",
        [
          ["Hablo con Ana. / Habló con Ana.", "I speak with Ana. / He spoke with Ana."],
          ["—¿Y tu hermano? —Él trabajó todo el fin de semana.", "And your brother? — He worked all weekend."],
        ],
        [
          mc(
            "Which sentence is about the past?",
            ["Marta llegó tarde.", "Marta llega tarde.", "Yo llego tarde.", "Marta va a llegar tarde."],
            0,
            "Llegó (with the accent) is the preterite él/ella form."
          ),
        ]
      ),
    ],
    [
      fb("Answer the question.", "—¿Ustedes miraron el partido? —Sí, lo ___ en casa de Pedro.", "miramos", "Ustedes question → nosotros answer. -AR nosotros is the same in present and preterite; ayer/el sábado tells you it's past."),
      fb("Answer the question.", "—¿Qué comiste? —___ una pizza enorme.", "Comí", "-ER preterite yo → -í."),
      fb("Complete with the preterite of escribir.", "Mi hermana me ___ un mensaje muy largo.", "escribió", "-IR él/ella → -ió."),
      mt(
        "Match each question with its answer.",
        [
          ["¿Dónde cenaste?", "Cené en casa."],
          ["¿A qué hora volvieron ustedes?", "Volvimos a medianoche."],
          ["¿Tu novia bailó?", "Sí, bailó toda la noche."],
          ["¿Vosotros bebisteis vino?", "No, bebimos agua."],
        ],
        "Each answer switches to the matching person: tú → yo, ustedes/vosotros → nosotros, ella → ella."
      ),
      toEs("On Sunday we cooked and watched a movie.", "El domingo cocinamos y miramos una película.", "Nosotros -AR preterite: -amos.", ["El domingo cocinamos y vimos una película.", "El domingo nosotros cocinamos y miramos una película."]),
      toEn("¿Recibiste mi mensaje ayer?", "Did you get my message yesterday?", "Recibir → recibiste (tú).", ["Did you receive my message yesterday?"]),
      wo("El sábado pasado mis amigos y yo corrimos en el parque.", "Time + compound subject (nosotros) + preterite + place.", "Last Saturday my friends and I ran in the park."),
    ]
  ),
  L(
    "preterite-regular-verbs-2",
    "a2r-error-hunt-preterite-spelling",
    "Error Hunt: Preterite Accents & Spelling",
    "Missing accents and missed -car/-gar/-zar changes — the two most common written preterite mistakes.",
    "7 min",
    [
      sec(
        "The accent changes the meaning",
        "Without its accent, a preterite form can turn into a different word: hablo (I speak) vs. habló (he spoke); estudie (subjunctive) vs. estudié (I studied).",
        [
          ["✗ Ayer el trabajo mucho. → ✓ Ayer él trabajó mucho.", "Yesterday he worked a lot."],
          ["✗ Yo compre pan. → ✓ Yo compré pan.", "I bought bread."],
        ],
        [
          ms(
            "Which forms are correctly written preterites?",
            ["comí", "hablé", "vivio", "cantó"],
            [0, 1, 3],
            "Vivir → vivió, with an accent on the ó."
          ),
        ]
      ),
      sec(
        "-car, -gar, -zar in the yo form",
        "To keep the original sound before -é: c → qu (busqué), g → gu (llegué), z → c (empecé). Only yo changes.",
        [
          ["Yo busqué / él buscó", "I looked for / he looked for"],
          ["Yo pagué / tú pagaste", "I paid / you paid"],
        ],
        [
          fb("Fix the spelling.", "Ayer yo ___ la guitarra por dos horas. (learner wrote: tocé)", "toqué", "Tocar → toqué: c becomes qu before é."),
        ]
      ),
    ],
    [
      fb("Fix the spelling.", "Yo ___ a casa a las diez. (learner wrote: llegé)", "llegué", "Llegar → llegué: g becomes gu before é."),
      fb("Fix the spelling.", "Yo ___ a estudiar a las ocho. (learner wrote: empezé)", "empecé", "Empezar → empecé: z becomes c before é."),
      mc(
        "\"Ella pago la cuenta.\" What's the fix?",
        ["Ella pagó la cuenta.", "Ella pagué la cuenta.", "Ella pagüé la cuenta.", "No fix needed."],
        0,
        "Él/ella → -ó with an accent. The g→gu change is only for yo."
      ),
      ms(
        "Which sentences contain an error?",
        ["Tú buscaste las llaves.", "Yo almorcé con mi jefe.", "Nosotros llegamos tarde.", "Ellos jugué al fútbol."],
        [3],
        "Ellos → jugaron. The others are correct (almorzar → almorcé)."
      ),
      mt(
        "Match each infinitive to its yo preterite.",
        [
          ["sacar", "saqué"],
          ["jugar", "jugué"],
          ["cruzar", "crucé"],
          ["practicar", "practiqué"],
        ],
        "c → qu, g → gu, z → c — only before -é."
      ),
      toEs("I paid and he looked for a taxi.", "Yo pagué y él buscó un taxi.", "Pagué (g → gu), buscó (no change outside yo).", ["Pagué y él buscó un taxi."]),
      wo("Ayer yo saqué muchas fotos en la playa.", "Sacar → saqué in the yo form.", "Yesterday I took lots of photos at the beach."),
    ]
  ),
  L(
    "preterite-irregular-verbs-2",
    "a2r-transform-present-to-preterite",
    "Transformations: Today → Yesterday",
    "Take present-tense sentences and move them into the past — the irregular stems do all the heavy lifting.",
    "8 min",
    [
      sec(
        "Swap the time word, swap the verb",
        "Hoy → ayer. Every irregular falls into a stem group: u-stems (tuv-, estuv-, pud-, pus-), i-stems (hic-, quis-, vin-), j-stems (dij-, traj-), and fui for both ser and ir.",
        [
          ["Hoy tengo clase. → Ayer tuve clase.", "Today I have class. → Yesterday I had class."],
          ["Hoy hace sol. → Ayer hizo sol.", "Today it's sunny. → Yesterday it was sunny."],
        ],
        [
          fb("Move it to yesterday.", "Hoy estoy en casa. → Ayer ___ en casa.", "estuve", "Estar → estuv- + -e."),
        ]
      ),
      sec(
        "Watch the ellos form of j-stems",
        "J-stems drop the i in the ellos form: dijeron, trajeron, condujeron — never dijieron.",
        [
          ["Ellos dicen la verdad. → Ellos dijeron la verdad.", "They tell the truth. → They told the truth."],
        ],
        [
          fb("Move it to yesterday.", "Mis amigos traen comida. → Mis amigos ___ comida.", "trajeron", "Traer → traj- + -eron (no i)."),
        ]
      ),
    ],
    [
      fb("Move it to yesterday.", "Hoy voy al gimnasio. → Ayer ___ al gimnasio.", "fui", "Ir → fui."),
      fb("Move it to yesterday.", "Hoy no puedo salir. → Ayer no ___ salir.", "pude", "Poder → pud- + -e."),
      fb("Move it to yesterday.", "Hoy ella viene a comer. → Ayer ella ___ a comer.", "vino", "Venir → vin- + -o (no accent on irregular stems)."),
      fb("Move it to yesterday.", "Hoy pongo la mesa. → Ayer ___ la mesa.", "puse", "Poner → pus- + -e."),
      mc(
        "Transform: \"Nosotros hacemos la tarea.\" → yesterday",
        ["Nosotros hicimos la tarea.", "Nosotros hacimos la tarea.", "Nosotros hizimos la tarea.", "Nosotros hicieron la tarea."],
        0,
        "Hacer → hic- + -imos. (Only the él form uses z: hizo.)"
      ),
      mt(
        "Match each present form to its preterite.",
        [
          ["quiero", "quise"],
          ["digo", "dije"],
          ["tengo", "tuve"],
          ["soy", "fui"],
        ],
        "Irregular preterites never carry a written accent."
      ),
      toEs("Yesterday I said nothing and I went home.", "Ayer no dije nada y fui a casa.", "Decir → dije; ir → fui. Double negative: no … nada.", ["Ayer no dije nada y me fui a casa.", "Ayer no dije nada y volví a casa."]),
      wo("¿Por qué no vinieron tus padres a la fiesta?", "Venir → vinieron (ellos).", "Why didn't your parents come to the party?"),
    ]
  ),
  L(
    "preterite-irregular-verbs-2",
    "a2r-contrast-fue-fue",
    "Contrast Clinic: Fue (Was) vs. Fue (Went)",
    "Ser and ir share every preterite form. Learn to tell them apart instantly from context.",
    "7 min",
    [
      sec(
        "The clue is what follows",
        "If fue is followed by a (a place, a destination), it's almost always ir: fue a Roma = went to Rome. If it's followed by an adjective, a noun or a description, it's ser: fue increíble = it was incredible.",
        [
          ["Fui a Madrid en 2019.", "I went to Madrid in 2019. (ir)"],
          ["Fue un viaje fantástico.", "It was a fantastic trip. (ser)"],
        ],
        [
          mc(
            "\"La fiesta fue muy divertida.\" Which verb is fue here?",
            ["ser (was)", "ir (went)", "either", "estar"],
            0,
            "Followed by an adjective (divertida) → ser."
          ),
        ]
      ),
      sec(
        "Mixed in one story",
        "Real stories use both, often in the same sentence.",
        [
          ["Fuimos al concierto y fue el mejor día del año.", "We went to the concert and it was the best day of the year."],
        ],
        [
          ms(
            "In which sentences does the form come from IR?",
            ["Fueron al cine.", "Fueron muy amables.", "¿Adónde fuiste?", "Fuiste mi mejor amigo."],
            [0, 2],
            "Destination (al cine, adónde) → ir. Description (amables, mi mejor amigo) → ser."
          ),
        ]
      ),
    ],
    [
      mt(
        "Match each sentence to its meaning.",
        [
          ["Fue a la playa.", "He went to the beach."],
          ["Fue difícil.", "It was difficult."],
          ["Fuimos compañeros.", "We were classmates."],
          ["Fuimos juntos.", "We went together."],
        ],
        "A destination or a direction → ir. A description or identity → ser."
      ),
      toEn("La película fue aburrida, así que fuimos a un bar.", "The movie was boring, so we went to a bar.", "First fue = ser; fuimos + a = ir.", ["The film was boring, so we went to a bar."]),
      toEn("¿Quién fue el primer presidente?", "Who was the first president?", "Identity → ser.", []),
      fb("Complete with the preterite of ir or ser.", "Mis padres ___ a Cuba de luna de miel.", "fueron", "Destination → ir: fueron."),
      mc(
        "\"Ayer ___ mi cumpleaños.\" (Yesterday was my birthday.)",
        ["fue", "fui", "estuvo", "iba"],
        0,
        "Ser in the preterite for a one-time event: fue."
      ),
      toEs("It was a great idea.", "Fue una gran idea.", "Ser in the preterite + gran before a singular noun.", ["Fue una idea genial.", "Fue una idea buenísima."]),
      wo("Fui al médico porque fue una semana muy mala.", "First fui = ir (a place); second fue = ser (a description).", "I went to the doctor because it was a very bad week."),
    ]
  ),
  L(
    "imperfect-tense-2",
    "a2r-mission-childhood-interview",
    "Real-World Mission: When I Was a Kid",
    "Interview a grandparent about their childhood — every answer describes how things used to be.",
    "8 min",
    [
      sec(
        "The interview",
        "The imperfect paints habits and background: what people used to do, what things were like.",
        [
          ["—Abuela, ¿dónde vivías cuando eras niña?", "Grandma, where did you live when you were a girl?"],
          ["—Vivía en un pueblo pequeño. No había coches.", "I lived in a small town. There weren't any cars."],
          ["—¿Y qué hacías después de la escuela?", "And what did you do after school?"],
          ["—Ayudaba a mi madre y jugaba con mis hermanos en el río.", "I helped my mother and played with my siblings at the river."],
        ],
        [
          mc(
            "What did the grandmother do after school?",
            ["Helped her mother and played at the river", "Watched TV", "Worked in a shop", "Studied at the library"],
            0,
            "Ayudaba a mi madre y jugaba … en el río."
          ),
          fb("Complete the question.", "—¿Cómo ___ tu casa? —Era blanca y muy vieja.", "era", "Ser in the imperfect: era."),
        ]
      ),
      sec(
        "Your turn to answer",
        "Now answer the same questions about your own childhood. The three irregulars — ser, ir, ver — appear constantly.",
        [
          ["Cuando era pequeño, iba a la playa todos los veranos.", "When I was little, I went to the beach every summer."],
          ["Veía dibujos animados los sábados.", "I used to watch cartoons on Saturdays."],
        ],
        [
          fb("Answer about your childhood.", "Todos los domingos mi familia ___ a misa. (ir)", "iba", "Ir → iba (a habit in the past)."),
        ]
      ),
    ],
    [
      fb("Complete with the imperfect.", "De niño, yo ___ mucha televisión. (ver)", "veía", "Ver → veía (keeps the e)."),
      fb("Complete with the imperfect.", "Mis hermanos y yo ___ en el jardín. (jugar)", "jugábamos", "-AR nosotros imperfect → -ábamos (accent on the á)."),
      fb("Complete with the imperfect.", "En mi pueblo no ___ internet. (haber)", "había", "Hay → había in the imperfect."),
      mt(
        "Match each question to a childhood answer.",
        [
          ["¿Cómo eras?", "Era muy tímido."],
          ["¿Qué te gustaba comer?", "Me encantaban los helados."],
          ["¿Adónde ibas en verano?", "Iba al campo."],
          ["¿Tenías mascotas?", "Sí, teníamos un perro."],
        ],
        "All imperfect: descriptions, likes and habits in the past."
      ),
      ms(
        "Which sentences describe a past habit?",
        ["Siempre caminaba a la escuela.", "Ayer caminé a la escuela.", "Los viernes comíamos pescado.", "Mi abuelo leía el periódico cada mañana."],
        [0, 2, 3],
        "Ayer caminé is a single completed event (preterite)."
      ),
      toEs("When I was a child, I lived in the country.", "Cuando era niño, vivía en el campo.", "Age/stage of life and ongoing situation → imperfect.", ["Cuando era niña, vivía en el campo.", "Cuando yo era niño, vivía en el campo.", "Cuando era pequeño, vivía en el campo.", "Cuando era pequeña, vivía en el campo."]),
      wo("Mi abuela siempre nos contaba historias antes de dormir.", "Siempre + imperfect for a repeated past action.", "My grandmother always told us stories before bed."),
    ]
  ),
  L(
    "imperfect-tense-2",
    "a2r-spiral-past-forms",
    "Spiral Review: Two Past Tenses + A1 Essentials",
    "A cumulative check of preterite and imperfect forms, mixed with gustar, ser/estar and tener from A1.",
    "8 min",
    [
      sec(
        "A1 verbs in the past",
        "Everything you learned in A1 has a past version. Gustar keeps its pattern: me gustaba el café (I used to like coffee), me gustaron las películas (I liked the movies).",
        [
          ["De niño, no me gustaban las verduras.", "As a child, I didn't like vegetables."],
          ["Estaba cansado porque tenía mucho trabajo.", "I was tired because I had a lot of work."],
        ],
        [
          fb("Complete with gustar in the imperfect.", "A mi padre le ___ los coches antiguos.", "gustaban", "Los coches (plural) → gustaban."),
          fb("Complete with tener in the imperfect.", "Cuando ___ diez años, aprendí a nadar.", "tenía", "Age in the past → imperfect: tenía."),
        ]
      ),
      sec(
        "Form check",
        "Quick form recall: preterite yo endings -é/-í, imperfect yo endings -aba/-ía.",
        [
          ["hablé / hablaba", "I spoke / I used to speak"],
          ["comí / comía", "I ate / I used to eat"],
        ],
        [
          mt(
            "Match each form to its meaning.",
            [
              ["bailábamos", "we used to dance"],
              ["bailamos (ayer)", "we danced"],
              ["salió", "he left"],
              ["salía", "he used to leave"],
            ],
            "Imperfect -AR has -aba-; -ER/-IR has -ía-. Preterite él/ella ends in stressed -ó/-ió."
          ),
        ]
      ),
    ],
    [
      fb("Complete with estar in the imperfect.", "La tienda ___ cerrada cuando llegamos.", "estaba", "A state in the background → estaba."),
      fb("Complete with ser in the imperfect.", "Las clases de la señora Ruiz ___ muy interesantes.", "eran", "Description in the past → eran."),
      mc(
        "\"There were many people.\" (background description)",
        ["Había mucha gente.", "Habían mucha gente.", "Hubo mucha gente.", "Estaba mucha gente."],
        0,
        "Hay → había, and like hay it never becomes plural."
      ),
      ms(
        "Which sentences are correct?",
        ["Me gustaron mucho los conciertos.", "Nos gustaba ir al cine.", "Le gustó las flores.", "Te gustaban los videojuegos."],
        [0, 1, 3],
        "Las flores is plural → le gustaron."
      ),
      toEs("We were at home because it was cold.", "Estábamos en casa porque hacía frío.", "Background states → imperfect: estábamos, hacía.", ["Nosotros estábamos en casa porque hacía frío."]),
      toEn("De pequeña, tenía miedo de los perros.", "As a little girl, I was afraid of dogs.", "Tener miedo in the imperfect for an ongoing past feeling.", ["When I was little, I was afraid of dogs.", "As a child, I was afraid of dogs."]),
      wo("Cuando éramos jóvenes, íbamos a bailar todos los viernes.", "Ser and ir in the imperfect for a past stage of life and habit.", "When we were young, we went dancing every Friday."),
    ]
  ),
  L(
    "preterite-vs-imperfect-2",
    "a2r-story-stolen-bike",
    "Story Detective: The Missing Bike",
    "Read a short mystery and decide, sentence by sentence, whether the story needs the scene (imperfect) or the action (preterite).",
    "8 min",
    [
      sec(
        "The scene",
        "The imperfect sets the stage: time, weather, what was going on.",
        [
          ["Eran las ocho de la noche. Llovía mucho.", "It was eight at night. It was raining hard."],
          ["Tomás estaba en la cocina y cocinaba la cena.", "Tomás was in the kitchen making dinner."],
          ["Su bicicleta estaba delante de la casa, como siempre.", "His bike was in front of the house, as always."],
        ],
        [
          mc(
            "Why is \"Llovía mucho\" in the imperfect?",
            ["It's background weather.", "It happened once.", "It interrupted something.", "Llover has no preterite."],
            0,
            "Weather as scene-setting → imperfect."
          ),
        ]
      ),
      sec(
        "The action",
        "The preterite moves the plot forward: things that happened, one after another.",
        [
          ["De repente, Tomás oyó un ruido.", "Suddenly, Tomás heard a noise."],
          ["Salió a la calle y vio que la bicicleta no estaba.", "He went outside and saw that the bike wasn't there."],
          ["Llamó a su vecina, que tenía una cámara en la puerta.", "He called his neighbor, who had a camera on her door."],
        ],
        [
          fb("Continue the story with the right tense.", "La vecina ___ el video y vio a un chico con un perro. (mirar)", "miró", "A completed action that moves the plot → preterite."),
        ]
      ),
    ],
    [
      fb("Continue the story.", "El chico ___ unos quince años y llevaba una gorra roja. (tener)", "tenía", "Description of a person → imperfect."),
      fb("Continue the story.", "Al día siguiente, Tomás ___ al chico en el parque. (encontrar)", "encontró", "A single event → preterite."),
      fb("Continue the story.", "El chico le ___ la verdad: solo quería dar un paseo. (decir)", "dijo", "A single completed action → preterite of decir: dijo."),
      mc(
        "\"Cuando Tomás ___ al parque, el chico ___ con su perro.\"",
        ["llegó / jugaba", "llegaba / jugó", "llegó / jugó", "llegaba / jugaba"],
        0,
        "The arrival is the event (preterite); the playing was already in progress (imperfect)."
      ),
      ms(
        "Which sentences from the story are background (imperfect)?",
        ["Hacía frío.", "Tomás abrió la puerta.", "El perro era pequeño y negro.", "El chico devolvió la bici."],
        [0, 2],
        "Weather and descriptions → imperfect. Opening the door and returning the bike are events."
      ),
      toEs("It was raining when he left the house.", "Llovía cuando salió de casa.", "Background (llovía) + event (salió).", ["Estaba lloviendo cuando salió de casa.", "Llovía cuando salió de la casa."]),
      wo("Mientras Tomás cocinaba, alguien se llevó la bicicleta.", "Mientras + imperfect for the ongoing action; preterite for the interruption.", "While Tomás was cooking, someone took the bike."),
    ]
  ),
  L(
    "preterite-vs-imperfect-mastery-check",
    "a2r-error-hunt-pret-imp",
    "Error Hunt: Preterite or Imperfect?",
    "Every sentence here has the right verb in the wrong past tense — or does it? Diagnose before you fix.",
    "8 min",
    [
      sec(
        "Three questions to ask",
        "(1) Is it a single completed event? → preterite. (2) Is it background, description or a habit? → imperfect. (3) Is it an action in progress that got interrupted? → imperfect for the ongoing one, preterite for the interruption.",
        [
          ["✗ Ayer iba al médico. → ✓ Ayer fui al médico.", "Yesterday I went to the doctor. (one visit)"],
          ["✗ De niño, fui a la playa cada verano. → ✓ De niño, iba a la playa cada verano.", "As a child, I went to the beach every summer. (habit)"],
        ],
        [
          mc(
            "\"Cuando era niña, visité a mi abuela todos los domingos.\" What's wrong?",
            ["A weekly habit needs the imperfect: visitaba.", "Era should be fue.", "Todos los domingos needs the preterite.", "Nothing is wrong."],
            0,
            "Todos los domingos signals a repeated habit → visitaba."
          ),
        ]
      ),
      sec(
        "Signal words aren't everything",
        "Siempre and todos los días usually go with the imperfect, but a closed, measured period of time takes the preterite — even a long one: Vivimos en Lima diez años.",
        [
          ["Vivimos en Lima durante diez años.", "We lived in Lima for ten years. (closed period)"],
          ["Vivíamos en Lima cuando nació mi hermano.", "We were living in Lima when my brother was born. (background)"],
        ],
        [
          fb("Fix the tense.", "___ en esa escuela por seis años, de 2005 a 2011. (learner wrote: Estudiaba)", "Estudié", "A closed, measured period → preterite."),
        ]
      ),
    ],
    [
      fb("Fix the tense.", "Anoche ___ una película muy buena. (learner wrote: veía)", "vi", "A single event last night → preterite."),
      fb("Fix the tense.", "La casa ___ grande y tenía un jardín. (learner wrote: fue)", "era", "Description → imperfect."),
      fb("Fix the tense.", "Mientras yo dormía, el teléfono ___. (learner wrote: sonaba)", "sonó", "The interruption → preterite."),
      ms(
        "Which sentences are already correct?",
        ["Eran las tres cuando llegó el paquete.", "De repente, empezaba a llover.", "Cuando tenía cinco años, aprendí a leer.", "Ayer hacía mis tareas y fui al cine."],
        [0, 2],
        "De repente signals a sudden event → empezó. Ayer + a completed task → hice mis tareas."
      ),
      mc(
        "Which sentence has NO error?",
        ["Mi primer coche era rojo y lo compré en 2015.", "Mi primer coche fue rojo y lo compraba en 2015.", "Mi primer coche era rojo y lo compraba en 2015.", "Mi primer coche fue rojo y lo compré en 2015."],
        0,
        "Description → era; a single purchase → compré."
      ),
      toEs("I was reading when my mother called.", "Leía cuando mi madre llamó.", "Ongoing (leía) + interruption (llamó).", ["Estaba leyendo cuando mi madre llamó.", "Yo leía cuando mi madre llamó.", "Leía cuando me llamó mi madre."]),
      wo("Todos los veranos íbamos al pueblo de mis abuelos.", "Todos los veranos → a habit → imperfect.", "Every summer we went to my grandparents' village."),
    ]
  ),
  L(
    "preterite-vs-imperfect-mastery-check",
    "a2r-contrast-meaning-changing-verbs",
    "Contrast Clinic: Verbs That Change Meaning in the Past",
    "Conocí vs. conocía, supe vs. sabía, quise vs. quería, pude vs. podía — same verb, different English.",
    "8 min",
    [
      sec(
        "Knowing and meeting",
        "Conocer in the preterite means met (for the first time); in the imperfect, knew (already acquainted). Saber in the preterite means found out; in the imperfect, knew.",
        [
          ["Conocí a mi novia en 2018.", "I met my girlfriend in 2018."],
          ["Ya conocía a su familia.", "I already knew her family."],
          ["Supe la noticia ayer.", "I found out the news yesterday."],
          ["No sabía nada.", "I didn't know anything."],
        ],
        [
          mc(
            "\"I found out the truth\" is…",
            ["Supe la verdad.", "Sabía la verdad.", "Conocí la verdad.", "Conocía la verdad."],
            0,
            "Saber in the preterite = found out."
          ),
        ]
      ),
      sec(
        "Wanting and being able",
        "Quise = I tried (wanted and acted); no quise = I refused. Pude = I managed to; no pude = I failed to. The imperfect forms just describe the wish or ability.",
        [
          ["Quise abrir la puerta, pero no pude.", "I tried to open the door, but I couldn't."],
          ["No quiso venir.", "He refused to come."],
          ["Quería viajar, pero no tenía dinero.", "I wanted to travel, but I didn't have money."],
        ],
        [
          fb("Complete: \"She refused to eat.\"", "Ella no ___ comer.", "quiso", "No quiso = refused."),
        ]
      ),
    ],
    [
      mt(
        "Match each form to its English meaning.",
        [
          ["conocí", "I met"],
          ["conocía", "I knew (was acquainted with)"],
          ["pude", "I managed to"],
          ["no pude", "I failed to"],
        ],
        "The preterite turns a state into an event: knowing → meeting; being able → managing."
      ),
      fb("Complete: \"We met in Barcelona.\"", "Nos ___ en Barcelona.", "conocimos", "Meeting for the first time → preterite."),
      fb("Complete: \"I didn't know that you had a sister.\"", "No ___ que tenías una hermana.", "sabía", "An ongoing state of knowledge → imperfect."),
      mc(
        "\"Finalmente ___ terminar el proyecto.\" (Finally I managed to finish the project.)",
        ["pude", "podía", "quise", "sabía"],
        0,
        "Managed to → preterite of poder."
      ),
      toEn("Quisimos llamarte, pero no pudimos.", "We tried to call you, but we couldn't.", "Quisimos = we tried; no pudimos = we failed to.", ["We tried to call you but we couldn't.", "We wanted to call you, but we couldn't."]),
      toEs("When did you (informal) find out?", "¿Cuándo supiste?", "Found out → preterite of saber.", ["¿Cuándo lo supiste?", "¿Cuándo te enteraste?"]),
      wo("Conocí a tu hermano en la boda de Ana.", "Conocer in the preterite = met; personal a before a person.", "I met your brother at Ana's wedding."),
    ]
  ),
  L(
    "direct-object-pronouns-2",
    "a2r-transform-replace-object",
    "Transformations: Replace the Object",
    "Take the noun out, put the pronoun in — and put it in the right place.",
    "7 min",
    [
      sec(
        "Swap and move",
        "Choose lo/la/los/las by the gender and number of the noun you're replacing. Then move it in front of the conjugated verb.",
        [
          ["Compro el pan. → Lo compro.", "I buy the bread. → I buy it."],
          ["Veo a las niñas. → Las veo.", "I see the girls. → I see them."],
        ],
        [
          fb("Replace the object.", "Leo la revista. → ___ leo.", "La", "La revista (feminine singular) → la."),
        ]
      ),
      sec(
        "With infinitives and gerunds",
        "With an infinitive or a gerund, you have two options: attach the pronoun to the end, or put it before the conjugated verb. Attaching to a gerund adds an accent.",
        [
          ["Voy a llamar a Juan. → Voy a llamarlo. / Lo voy a llamar.", "I'm going to call him."],
          ["Estoy leyendo el libro. → Estoy leyéndolo. / Lo estoy leyendo.", "I'm reading it."],
        ],
        [
          ms(
            "Which are correct ways to say \"I want to buy them\" (los zapatos)?",
            ["Quiero comprarlos.", "Los quiero comprar.", "Quiero los comprar.", "Comprarlos quiero."],
            [0, 1],
            "Attach to the infinitive, or put it before quiero — never between the two verbs."
          ),
        ]
      ),
    ],
    [
      fb("Replace the object.", "Necesitamos los documentos. → ___ necesitamos.", "Los", "Los documentos → los."),
      fb("Replace the object.", "¿Tienes las llaves? → ¿___ tienes?", "Las", "Las llaves → las."),
      fb("Replace the object, attaching it.", "Voy a visitar a mi abuela. → Voy a ___.", "visitarla", "Attach la to the infinitive: visitarla."),
      fb("Replace the object, attaching it.", "Estoy escribiendo el correo. → Estoy ___.", "escribiéndolo", "Attach lo to the gerund and add an accent to keep the stress: escribiéndolo."),
      mc(
        "Transform: \"No encuentro mis gafas.\"",
        ["No las encuentro.", "No encuentro las.", "Las no encuentro.", "No los encuentro."],
        0,
        "No + pronoun + verb. Gafas is feminine plural → las."
      ),
      toEs("Where is the cake? — Marta ate it.", "¿Dónde está el pastel? —Marta lo comió.", "Lo replaces el pastel and goes before the conjugated verb.", ["¿Dónde está el pastel? Marta lo comió.", "¿Dónde está el pastel? —Marta se lo comió.", "¿Dónde está el pastel? Marta se lo comió."]),
      wo("¿Las flores? Las compré para mi madre.", "The pronoun las goes before the conjugated verb compré.", "The flowers? I bought them for my mother."),
    ]
  ),
  L(
    "direct-object-pronouns-2",
    "a2r-mission-packing",
    "Real-World Mission: Packing for a Trip",
    "Go through a packing checklist with a friend — every answer replaces the item with a direct object pronoun.",
    "7 min",
    [
      sec(
        "The checklist",
        "In a real conversation, nobody repeats the noun. Once it's been mentioned, it becomes lo, la, los or las.",
        [
          ["—¿Tienes el pasaporte? —Sí, lo tengo aquí.", "Do you have the passport? — Yes, I have it here."],
          ["—¿Y las toallas? —No, no las tengo. Voy a comprarlas.", "And the towels? — No, I don't have them. I'm going to buy them."],
          ["—¿Metiste el cargador? —Sí, lo metí en la mochila.", "Did you pack the charger? — Yes, I put it in the backpack."],
        ],
        [
          fb("Answer the checklist question.", "—¿Tienes la crema solar? —Sí, ___ tengo.", "la", "La crema → la."),
          fb("Answer the checklist question.", "—¿Llevas los zapatos negros? —No, no ___ llevo.", "los", "Los zapatos → los."),
        ]
      ),
      sec(
        "At the airport",
        "Pronouns also replace people: me, te, lo/la, nos, los/las.",
        [
          ["—¿Quién te lleva al aeropuerto? —Mi hermano me lleva.", "Who's taking you to the airport? — My brother is taking me."],
          ["—¿Nos esperas en la puerta? —Sí, os espero allí.", "Will you wait for us at the gate? — Yes, I'll wait for you there."],
        ],
        [
          mc(
            "\"¿Me llamas cuando llegues?\" — \"Sí, ___ llamo.\"",
            ["te", "me", "lo", "la"],
            0,
            "You're asked \"will you call me?\" → \"yes, I'll call you\" = te llamo."
          ),
        ]
      ),
    ],
    [
      fb("Answer the question.", "—¿Compraste los billetes? —Sí, ___ compré ayer.", "los", "Los billetes → los, before compré."),
      fb("Answer the question.", "—¿Dónde pusiste la maleta? —___ puse en el coche.", "La", "La maleta → la."),
      mc(
        "\"Are you going to take the umbrella?\" — \"No, I'm not going to take it.\"",
        ["No, no voy a llevarlo.", "No, no voy a llevarla.", "No, no lo voy llevar.", "No, no voy a lo llevar."],
        0,
        "El paraguas is masculine → lo, attached to the infinitive (or: no lo voy a llevar)."
      ),
      ms(
        "Which answers to \"¿Tienes las gafas de sol?\" are correct?",
        ["Sí, las tengo.", "Sí, los tengo.", "No, no las encuentro.", "Sí, tengo las."],
        [0, 2],
        "Gafas is feminine plural → las, placed before the verb."
      ),
      mt(
        "Match each item with the pronoun that replaces it.",
        [
          ["el mapa", "lo"],
          ["la cámara", "la"],
          ["los calcetines", "los"],
          ["las sandalias", "las"],
        ],
        "Gender and number of the noun decide the pronoun — mapa is masculine despite the -a."
      ),
      toEs("My mother is taking us to the station.", "Mi madre nos lleva a la estación.", "Nos (us) goes before the conjugated verb.", ["Mi mamá nos lleva a la estación."]),
      wo("¿El pasaporte? No lo encuentro en ninguna parte.", "No + pronoun + verb; ninguna parte = nowhere.", "The passport? I can't find it anywhere."),
    ]
  ),
  L(
    "indirect-object-pronouns-2",
    "a2r-dialogue-gifts-favors",
    "Dialogue Lab: Gifts & Favors",
    "Who gives what to whom? Plan a birthday with a friend using indirect object pronouns.",
    "7 min",
    [
      sec(
        "Planning the presents",
        "Indirect objects answer \"to whom?\" or \"for whom?\". Le/les are often doubled with a + person for clarity: le compro un libro a mi padre.",
        [
          ["—¿Qué le regalas a tu madre? —Le regalo unas flores.", "What are you giving your mom? — I'm giving her some flowers."],
          ["—¿Y a tus primos? —Les compro un videojuego.", "And your cousins? — I'm buying them a video game."],
        ],
        [
          fb("Complete the answer.", "—¿Qué le das a tu abuelo? —___ doy un reloj.", "Le", "A mi abuelo → le."),
        ]
      ),
      sec(
        "Asking for favors",
        "Favors use verbs like prestar, dejar, traer, explicar, mandar — all with indirect objects.",
        [
          ["—¿Me prestas tu coche? —Claro, te presto el coche.", "Can you lend me your car? — Sure, I'll lend you the car."],
          ["—¿Nos explicas el problema?", "Can you explain the problem to us?"],
        ],
        [
          mc(
            "\"¿Me traes un café?\" means…",
            ["Will you bring me a coffee?", "Will I bring you a coffee?", "Did you bring me a coffee?", "Do I bring him a coffee?"],
            0,
            "Me = to/for me; traes = you bring."
          ),
        ]
      ),
    ],
    [
      fb("Complete with the indirect object pronoun.", "¿___ mandaste la invitación a tus tíos?", "Les", "A tus tíos (plural) → les."),
      fb("Complete with the indirect object pronoun.", "Mi jefe ___ explicó el proyecto a nosotros.", "nos", "A nosotros → nos."),
      mc(
        "\"Can you (informal) send me the photos?\"",
        ["¿Me mandas las fotos?", "¿Te mandas las fotos?", "¿Me mando las fotos?", "¿Le mandas las fotos?"],
        0,
        "Me = to me; mandas = you send."
      ),
      mt(
        "Match each sentence to its meaning.",
        [
          ["Le presté dinero.", "I lent him/her money."],
          ["Me prestó dinero.", "He/she lent me money."],
          ["Les presté dinero.", "I lent them money."],
          ["Nos prestaron dinero.", "They lent us money."],
        ],
        "The pronoun tells you who receives; the verb ending tells you who gives."
      ),
      toEs("I wrote a letter to my grandmother.", "Le escribí una carta a mi abuela.", "Le doubled with a mi abuela is normal and natural.", ["Le escribí una carta a mi abuelita."]),
      toEn("¿Qué te regalaron tus padres?", "What did your parents give you?", "Te = to you; regalaron = they gave (as a gift).", ["What did your parents get you?"]),
      wo("A mi hermana le encanta cuando le cocino pasta.", "Two indirect objects: le encanta (gustar-type) and le cocino (for her).", "My sister loves it when I cook pasta for her."),
    ]
  ),
  L(
    "indirect-object-pronouns-2",
    "a2r-contrast-lo-le",
    "Contrast Clinic: Lo/La vs. Le",
    "Direct or indirect? The verb decides — and choosing wrong is one of the most common A2 slips.",
    "7 min",
    [
      sec(
        "What vs. to whom",
        "Lo/la replace the thing (or person) that directly receives the action. Le replaces the person who receives the thing. Test: can you add \"to\" or \"for\" in English? Then it's le.",
        [
          ["Veo a Pedro. → Lo veo.", "I see Pedro. → I see him. (direct)"],
          ["Escribo a Pedro. → Le escribo.", "I write to Pedro. → I write to him. (indirect)"],
        ],
        [
          mc(
            "\"Llamo a mi madre.\" → \"___ llamo.\"",
            ["La", "Le", "Les", "Lo"],
            0,
            "You call her (not \"to her\") → direct object la. (Some speakers in Spain say le here, but la is standard.)"
          ),
        ]
      ),
      sec(
        "Verbs that usually take le",
        "Verbs of giving and communicating — dar, decir, preguntar, contestar, escribir, regalar — take the person as an indirect object.",
        [
          ["Le pregunté la hora.", "I asked him the time."],
          ["Le dije la verdad.", "I told her the truth."],
        ],
        [
          fb("Replace the person.", "Pregunto a la profesora. → ___ pregunto.", "Le", "Preguntar (to ask someone) → le."),
        ]
      ),
    ],
    [
      fb("Replace the person.", "Ayudo a mi vecina. → ___ ayudo.", "La", "Ayudar takes a direct object in Spanish → la."),
      fb("Replace the person.", "Contesto a mis padres. → ___ contesto.", "Les", "Contestar a alguien → indirect → les."),
      fb("Replace the person.", "Invito a Carlos y a Luis. → ___ invito.", "Los", "Invitar takes a direct object → los."),
      ms(
        "Which sentences use the pronoun correctly?",
        ["Le di un regalo.", "La escribí una carta.", "Los vi en el parque.", "Le dije adiós."],
        [0, 2, 3],
        "Escribir a alguien → le escribí una carta."
      ),
      ms(
        "Replacing Ana with a pronoun: which of these take le (not la)?",
        ["visitar a Ana", "hablar a Ana", "esperar a Ana", "mandar un mensaje a Ana"],
        [1, 3],
        "Speaking or sending something to someone → indirect (le). Visiting or waiting for someone → direct (la)."
      ),
      toEs("I saw her and I gave her the book.", "La vi y le di el libro.", "La = direct (saw her); le = indirect (gave to her).", ["La vi y le di el libro a ella."]),
      wo("No los conozco, pero les mandé una invitación.", "Los = direct (know them); les = indirect (sent to them).", "I don't know them, but I sent them an invitation."),
    ]
  ),
  L(
    "reflexive-verbs-daily-routine-2",
    "a2r-mission-yesterday-routine",
    "Real-World Mission: Yesterday Morning Went Wrong",
    "Reflexive verbs meet the preterite: tell the story of a morning where everything went wrong.",
    "8 min",
    [
      sec(
        "The disaster",
        "Reflexive pronouns stay in front of the conjugated verb in every tense: me desperté, te duchaste, se vistió.",
        [
          ["Ayer me desperté tarde porque no sonó la alarma.", "Yesterday I woke up late because the alarm didn't go off."],
          ["Me duché en dos minutos y me vestí muy rápido.", "I showered in two minutes and got dressed really fast."],
          ["No me peiné y me olvidé las llaves.", "I didn't comb my hair and I forgot my keys."],
        ],
        [
          fb("Continue the story.", "Mi compañero de piso también ___ tarde. (levantarse)", "se levantó", "Él → se levantó."),
        ]
      ),
      sec(
        "How a normal day goes",
        "Contrast with the usual routine in the present tense.",
        [
          ["Normalmente me levanto a las siete y me acuesto a las once.", "Normally I get up at seven and go to bed at eleven."],
        ],
        [
          mc(
            "\"Normalmente ___ a las siete, pero ayer ___ a las nueve.\"",
            ["me levanto / me levanté", "me levanté / me levanto", "levanto / levanté", "se levanta / me levanté"],
            0,
            "Present for the routine, preterite for yesterday's single event — and the reflexive me stays in both."
          ),
        ]
      ),
    ],
    [
      fb("Complete with the preterite.", "Nosotros ___ en el autobús. (dormirse)", "nos dormimos", "Dormirse → nos dormimos (no stem change in nosotros)."),
      fb("Complete with the preterite.", "¿A qué hora ___ tú anoche? (acostarse)", "te acostaste", "Acostarse is only o→ue in the present; the preterite is regular: te acostaste."),
      fb("Complete with the preterite.", "Mis hijos no ___ los dientes. (cepillarse)", "se cepillaron", "Ellos → se cepillaron."),
      mt(
        "Put the morning in order by matching each step to its time.",
        [
          ["7:00", "Me desperté."],
          ["7:10", "Me duché."],
          ["7:20", "Me vestí."],
          ["7:30", "Me fui de casa."],
        ],
        "Irse (to leave) is reflexive too: me fui."
      ),
      ms(
        "Which sentences are correct?",
        ["Me lavé la cara.", "Lavé mi cara.", "Se puso el abrigo.", "Nos vestimos rápido."],
        [0, 2, 3],
        "With reflexive verbs and body parts, Spanish uses the article, not a possessive: me lavé la cara."
      ),
      toEs("She got up, got dressed and left.", "Se levantó, se vistió y se fue.", "Three reflexive verbs in the preterite.", ["Ella se levantó, se vistió y se fue."]),
      wo("Ayer me puse la camisa al revés.", "Ponerse (to put on) → me puse.", "Yesterday I put my shirt on inside out."),
    ]
  ),
  L(
    "reflexive-verbs-daily-routine-2",
    "a2r-contrast-reflexive-meaning",
    "Contrast Clinic: With or Without Se",
    "Lavar vs. lavarse, ir vs. irse, dormir vs. dormirse, llamar vs. llamarse — the se changes everything.",
    "7 min",
    [
      sec(
        "Doing it to someone else vs. to yourself",
        "Without se, you act on someone or something else. With se, the action falls back on the subject.",
        [
          ["Lavo el coche. / Me lavo.", "I wash the car. / I wash (myself)."],
          ["Acuesto al bebé. / Me acuesto.", "I put the baby to bed. / I go to bed."],
        ],
        [
          mc(
            "\"La madre ___ a su hijo.\" (The mother dresses her son.)",
            ["viste", "se viste", "se vistió a", "te viste"],
            0,
            "She acts on someone else → no reflexive pronoun."
          ),
        ]
      ),
      sec(
        "When se changes the meaning",
        "Some pairs aren't just \"myself\" — they change meaning: ir (go) / irse (leave); dormir (sleep) / dormirse (fall asleep); llamar (call) / llamarse (be named); poner (put) / ponerse (put on).",
        [
          ["Voy al cine. / Me voy.", "I'm going to the movies. / I'm leaving."],
          ["Duermo ocho horas. / Me duermo en clase.", "I sleep eight hours. / I fall asleep in class."],
        ],
        [
          fb("Choose with or without se.", "¡Es tarde! Nos ___ ahora mismo. (ir)", "vamos", "Irse = to leave: nos vamos."),
        ]
      ),
    ],
    [
      mt(
        "Match each sentence to its meaning.",
        [
          ["Pongo la mesa.", "I set the table."],
          ["Me pongo el abrigo.", "I put on my coat."],
          ["Llamo a Ana.", "I call Ana."],
          ["Me llamo Ana.", "My name is Ana."],
        ],
        "Poner/ponerse and llamar/llamarse change meaning with se."
      ),
      fb("With or without se?", "El profesor habla tanto que los estudiantes ___ duermen.", "se", "Falling asleep → dormirse: se duermen."),
      mc("\"My dog sleeps on the sofa all afternoon.\" (just sleeping, not falling asleep)", ["Mi perro duerme en el sofá toda la tarde.", "Mi perro se duerme en el sofá toda la tarde.", "Mi perro le duerme en el sofá toda la tarde.", "Mi perro se dormí en el sofá toda la tarde."], 0, "Plain sleeping → dormir, no se. Se duerme would mean he falls asleep there."),
      mc(
        "\"I wash my hands.\"",
        ["Me lavo las manos.", "Lavo mis manos.", "Me lavo mis manos.", "Lavo me las manos."],
        0,
        "Reflexive + article with body parts."
      ),
      ms(
        "Which sentences need a reflexive pronoun?",
        ["___ ducho por la mañana.", "___ baño al perro los sábados.", "¿Cómo ___ llamas?", "___ despierto a mis hijos a las siete."],
        [0, 2],
        "Showering yourself and your name are reflexive. Bathing the dog and waking your kids act on someone else."
      ),
      toEs("I'm leaving because I'm falling asleep.", "Me voy porque me estoy durmiendo.", "Irse = leave; dormirse = fall asleep.", ["Me voy porque me duermo.", "Me voy porque estoy durmiéndome."]),
      wo("Mi abuelo siempre se duerme delante de la tele.", "Dormirse = fall asleep.", "My grandfather always falls asleep in front of the TV."),
    ]
  ),
  L(
    "comparisons-superlatives-2",
    "a2r-mission-comparing-apartments",
    "Real-World Mission: Comparing Apartments",
    "You're choosing between two apartments. Compare size, price, location and light to make the call.",
    "8 min",
    [
      sec(
        "The two listings",
        "Read both listings, then compare them using más/menos … que, tan … como, and tanto … como.",
        [
          ["Piso A: 70 m², 900 € al mes, 2 dormitorios, en el centro, mucha luz.", "Apartment A: 70 m², €900/month, 2 bedrooms, downtown, lots of light."],
          ["Piso B: 90 m², 750 € al mes, 2 dormitorios, lejos del centro, poca luz.", "Apartment B: 90 m², €750/month, 2 bedrooms, far from downtown, little light."],
        ],
        [
          mc(
            "Which sentence is true?",
            ["El piso A es más caro que el piso B.", "El piso A es más grande que el piso B.", "El piso B es más céntrico que el piso A.", "El piso B tiene más luz que el piso A."],
            0,
            "900 € > 750 € → A is more expensive."
          ),
          fb("Compare the bedrooms.", "El piso A tiene ___ dormitorios como el piso B.", "tantos", "Tanto agrees with dormitorios (masculine plural) → tantos … como."),
        ]
      ),
      sec(
        "Making the decision",
        "Irregular comparatives help you give an opinion: mejor (better), peor (worse).",
        [
          ["Para mí, el piso A es mejor porque está en el centro.", "For me, apartment A is better because it's downtown."],
          ["Pero el piso B es el más barato de los dos.", "But apartment B is the cheaper of the two."],
        ],
        [
          fb("Complete the opinion.", "La luz del piso B es ___ que la del piso A. (worse)", "peor", "Malo → peor."),
        ]
      ),
    ],
    [
      fb("Compare the size.", "El piso B es ___ grande que el piso A.", "más", "90 m² > 70 m²."),
      fb("Compare the size.", "El piso A es ___ grande que el piso B.", "menos", "70 m² < 90 m²."),
      mc(
        "\"Apartment B isn't as central as apartment A.\"",
        ["El piso B no es tan céntrico como el piso A.", "El piso B no es tanto céntrico como el piso A.", "El piso B no es tan céntrico que el piso A.", "El piso B no es más céntrico como el piso A."],
        0,
        "Tan + adjective + como."
      ),
      ms(
        "Which comparisons are grammatically correct?",
        ["El piso A cuesta más que el B.", "El piso B es más mejor.", "El piso A tiene tanta luz como una casa.", "Este es el piso más bonito del barrio."],
        [0, 2, 3],
        "Mejor is already comparative — never más mejor."
      ),
      toEs("This apartment is the biggest in the building.", "Este piso es el más grande del edificio.", "Superlative: el más + adjective + de (not en).", ["Este apartamento es el más grande del edificio."]),
      toEn("El piso B tiene menos luz pero cuesta menos.", "Apartment B has less light but costs less.", "Menos with a noun and with a verb.", ["Apartment B has less light but it costs less.", "Flat B has less light but costs less."]),
      wo("Al final elegimos el piso más barato de los dos.", "Superlative with de: el más barato de los dos.", "In the end we chose the cheaper of the two apartments."),
    ]
  ),
  L(
    "comparisons-superlatives-2",
    "a2r-error-hunt-comparisons",
    "Error Hunt: Comparisons & Superlatives",
    "Más mejor, tan … que, el más alto en la clase — spot the comparison slips English speakers make.",
    "7 min",
    [
      sec(
        "The four classic slips",
        "(1) más mejor → mejor. (2) tan … que → tan … como. (3) el más alto en la clase → el más alto de la clase. (4) más que + number → más de + number.",
        [
          ["✗ Es más mejor. → ✓ Es mejor.", "It's better."],
          ["✗ Tengo más que cien libros. → ✓ Tengo más de cien libros.", "I have more than a hundred books."],
        ],
        [
          mc(
            "Fix \"Ana es tan alta que su hermana.\"",
            ["Ana es tan alta como su hermana.", "Ana es tanta alta como su hermana.", "Ana es más alta como su hermana.", "No fix needed."],
            0,
            "Equality → tan … como."
          ),
        ]
      ),
      sec(
        "Mayor and menor",
        "With people's ages, use mayor (older) and menor (younger) rather than más viejo / más joven.",
        [
          ["Mi hermano es mayor que yo.", "My brother is older than me."],
          ["Soy el menor de la familia.", "I'm the youngest in the family."],
        ],
        [
          fb("Fix the comparison.", "Mi prima es ___ que yo; tiene veinte años y yo tengo veinticinco. (learner wrote: más joven)", "menor", "Más joven isn't wrong, but for comparing people's ages menor is the standard, natural choice."),
        ]
      ),
    ],
    [
      fb("Fix the comparison.", "Este restaurante es el más caro ___ la ciudad. (learner wrote: en)", "de", "Superlatives use de for the group."),
      fb("Fix the comparison.", "Hay ___ de veinte personas en la fila. (learner wrote: más que)", "más", "Before a number, más de: más de veinte."),
      fb("Fix the comparison.", "Mi coche es ___ que el tuyo. (learner wrote: más bueno)", "mejor", "Bueno → mejor for quality."),
      ms(
        "Which sentences contain an error?",
        ["No tengo tanto dinero como tú.", "Juan corre más rápido que Luis.", "Es la chica más inteligente en su clase.", "Este libro es peor que el otro."],
        [2],
        "Superlative group → de su clase."
      ),
      mc(
        "Which is correct?",
        ["Tengo tantas amigas como tú.", "Tengo tantos amigas como tú.", "Tengo tan amigas como tú.", "Tengo tantas amigas que tú."],
        0,
        "Tanto agrees with the noun: tantas amigas … como."
      ),
      toEs("My sister is older than me but shorter.", "Mi hermana es mayor que yo pero más baja.", "Mayor for age; más baja for height.", ["Mi hermana es mayor que yo, pero es más baja."]),
      wo("Este es el mejor café de todo el barrio.", "Mejor goes before the noun in superlatives: el mejor café de …", "This is the best coffee in the whole neighborhood."),
    ]
  ),
  L(
    "future-tense-2",
    "a2r-mission-predictions",
    "Real-World Mission: Predictions & Promises",
    "Write a horoscope, make promises and forecast the future — the simple future at work.",
    "8 min",
    [
      sec(
        "Your horoscope",
        "Horoscopes are pure future tense: -é, -ás, -á, -emos, -éis, -án on the infinitive (or on an irregular stem).",
        [
          ["Esta semana tendrás buenas noticias.", "This week you'll have good news."],
          ["Conocerás a una persona interesante.", "You'll meet an interesting person."],
          ["Harás un viaje inesperado.", "You'll take an unexpected trip."],
        ],
        [
          fb("Complete the horoscope.", "El viernes ___ dinero. (recibir, tú)", "recibirás", "Regular future: infinitive + -ás."),
          fb("Complete the horoscope.", "Tu jefe te ___ algo importante. (decir)", "dirá", "Decir → dir- + -á."),
        ]
      ),
      sec(
        "Promises",
        "The future is also the tense of promises and resolutions.",
        [
          ["Te llamaré todos los días.", "I'll call you every day."],
          ["No lo haré nunca más.", "I'll never do it again."],
        ],
        [
          mc(
            "\"I promise I'll come to your party.\"",
            ["Te prometo que vendré a tu fiesta.", "Te prometo que veniré a tu fiesta.", "Te prometo que venía a tu fiesta.", "Te prometo que vendrá a tu fiesta."],
            0,
            "Venir → vendr- + -é."
          ),
        ]
      ),
    ],
    [
      mt(
        "Match each infinitive to its future stem.",
        [
          ["salir", "saldr-"],
          ["poder", "podr-"],
          ["saber", "sabr-"],
          ["querer", "querr-"],
        ],
        "The endings stay regular; only the stem changes."
      ),
      fb("Complete the promise.", "Mañana ___ la habitación, ¡lo prometo! (ordenar)", "ordenaré", "Regular: ordenar + -é."),
      fb("Complete the prediction.", "En 2050 los coches ___ solos. (conducir, ellos)", "conducirán", "Conducir is regular in the future: conducirán."),
      mc(
        "\"We'll know the results on Monday.\"",
        ["Sabremos los resultados el lunes.", "Saberemos los resultados el lunes.", "Sabemos los resultados el lunes pasado.", "Sabrán los resultados el lunes."],
        0,
        "Saber → sabr- + -emos."
      ),
      toEs("There will be a lot of people at the concert.", "Habrá mucha gente en el concierto.", "Hay → habrá in the future.", []),
      toEn("¿Qué harás cuando termines la universidad?", "What will you do when you finish university?", "Harás = you will do (hacer → har-).", ["What will you do when you finish college?"]),
      wo("El próximo año mis padres vendrán a visitarme.", "Venir → vendrán; the pronoun attaches to the infinitive.", "Next year my parents will come to visit me."),
    ]
  ),
  L(
    "future-tense-2",
    "a2r-spiral-three-times",
    "Spiral Review: Past, Present & Future",
    "One life, three time frames. Move smoothly between what happened, what is, and what will be.",
    "8 min",
    [
      sec(
        "Carla's timeline",
        "Read Carla's story. Each sentence uses a different time frame — identify it before you answer.",
        [
          ["Cuando era niña, vivía en Cali.", "When she was a girl, she lived in Cali. (imperfect)"],
          ["En 2019 se mudó a Bogotá.", "In 2019 she moved to Bogotá. (preterite)"],
          ["Ahora trabaja en un hospital.", "Now she works in a hospital. (present)"],
          ["El año que viene abrirá su propia clínica.", "Next year she'll open her own clinic. (future)"],
        ],
        [
          mc(
            "Which time frame is \"se mudó\"?",
            ["A completed past event", "A past habit", "The present", "The future"],
            0,
            "A single move in 2019 → preterite."
          ),
        ]
      ),
      sec(
        "Signal words",
        "Match the time expression to the tense: de niño / antes → imperfect; ayer / en 2019 → preterite; ahora / normalmente → present; mañana / el año que viene → future.",
        [
          ["Antes comía carne; ahora soy vegetariano.", "I used to eat meat; now I'm vegetarian."],
        ],
        [
          fb("Complete with the right tense of vivir.", "El año que viene ___ en Madrid. (yo)", "viviré", "Future signal → viviré."),
        ]
      ),
    ],
    [
      fb("Complete with the right tense of trabajar.", "De joven, mi padre ___ en una fábrica.", "trabajaba", "De joven → a past stage → imperfect."),
      fb("Complete with the right tense of empezar.", "Ayer ___ mi nuevo trabajo. (yo)", "empecé", "Ayer → preterite; z → c in the yo form."),
      fb("Complete with the right tense of hacer.", "Mañana ___ calor. ", "hará", "Weather in the future → hará."),
      mt(
        "Match each time expression to its most likely tense.",
        [
          ["todos los días de mi infancia", "imperfecto"],
          ["anoche", "pretérito"],
          ["ahora mismo", "presente"],
          ["dentro de dos años", "futuro"],
        ],
        "Habits in the past → imperfect; one-off past → preterite; now → present; later → future."
      ),
      ms(
        "Which sentences use a logical tense?",
        ["Mañana fui al dentista.", "El verano pasado viajamos a Perú.", "Antes tenía el pelo largo.", "El lunes que viene tendré un examen."],
        [1, 2, 3],
        "Mañana needs the future (iré) or ir a (voy a ir)."
      ),
      toEs("I used to live in Lima, now I live in Quito, and next year I'll live in Madrid.", "Antes vivía en Lima, ahora vivo en Quito y el año que viene viviré en Madrid.", "Imperfect → present → future.", ["Antes vivía en Lima, ahora vivo en Quito y el próximo año viviré en Madrid."]),
      wo("Cuando tenía diez años decidí que sería médico.", "Imperfect (age) + preterite (decision). Sería = would be (you'll meet this conditional form in B1).", "When I was ten I decided I would be a doctor."),
    ]
  ),
  L(
    "por-vs-para-2",
    "a2r-mission-trip-por-para",
    "Real-World Mission: Planning a Trip with Por & Para",
    "Book a trip to Mexico — every step of the plan needs por or para.",
    "8 min",
    [
      sec(
        "The itinerary",
        "Para points forward: destinations, deadlines, purposes, recipients. Por looks at the path or the reason: duration, cause, exchange, movement through a place.",
        [
          ["Salimos para Cancún el lunes.", "We're leaving for Cancún on Monday. (destination)"],
          ["Vamos a estar allí por dos semanas.", "We'll be there for two weeks. (duration)"],
          ["Pagamos 800 dólares por los billetes.", "We paid $800 for the tickets. (exchange)"],
          ["Necesitamos el pasaporte para viajar.", "We need the passport to travel. (purpose)"],
        ],
        [
          fb("Complete the plan.", "El viernes pasearemos ___ la playa.", "por", "Movement through or along a place → por."),
        ]
      ),
      sec(
        "Souvenirs and thanks",
        "Recipients take para; gratitude and causes take por.",
        [
          ["Compré un collar para mi hermana.", "I bought a necklace for my sister."],
          ["Gracias por la ayuda.", "Thanks for the help."],
        ],
        [
          mc(
            "\"This hat is for my dad.\"",
            ["Este sombrero es para mi papá.", "Este sombrero es por mi papá.", "Este sombrero es a mi papá.", "Este sombrero es de mi papá para."],
            0,
            "Recipient → para."
          ),
        ]
      ),
    ],
    [
      fb("Complete with por or para.", "Tenemos que reservar el hotel ___ el 15 de mayo.", "para", "Deadline → para."),
      fb("Complete with por or para.", "El vuelo se canceló ___ la tormenta.", "por", "Cause → por."),
      fb("Complete with por or para.", "Vamos a viajar ___ tren desde la capital.", "por", "Means of transport → por."),
      fb("Complete with por or para.", "Ahorro dinero ___ el viaje.", "para", "Purpose/goal → para."),
      mt(
        "Match each phrase to the reason for its preposition.",
        [
          ["para Cancún", "destination"],
          ["por dos semanas", "duration"],
          ["por 50 pesos", "exchange"],
          ["para nadar", "purpose"],
        ],
        "Para: destination, purpose. Por: duration, exchange."
      ),
      toEs("We walked through the old town for three hours.", "Caminamos por el centro histórico por tres horas.", "Both uses are por: movement through, and duration.", ["Caminamos por el casco antiguo por tres horas.", "Caminamos por el centro histórico durante tres horas.", "Paseamos por el centro histórico por tres horas."]),
      wo("Gracias por el regalo, es perfecto para el viaje.", "Por for the reason you're grateful; para for the purpose.", "Thanks for the present, it's perfect for the trip."),
    ]
  ),
  L(
    "por-vs-para-mastery-check",
    "a2r-error-hunt-por-para",
    "Error Hunt: Por or Para?",
    "Learner sentences with the wrong preposition — and some tricky ones that are already right.",
    "8 min",
    [
      sec(
        "The two most common mix-ups",
        "\"Thanks for\" is always gracias por. \"For + purpose (in order to)\" is always para + infinitive. English \"for\" hides the difference, so learners often guess.",
        [
          ["✗ Gracias para todo. → ✓ Gracias por todo.", "Thanks for everything."],
          ["✗ Estudio por aprobar. → ✓ Estudio para aprobar.", "I study (in order) to pass."],
        ],
        [
          mc(
            "Fix \"Trabajo para ocho horas cada día.\"",
            ["Trabajo por ocho horas cada día.", "Trabajo para ochos horas cada día.", "Trabajo en ocho horas cada día.", "No fix needed."],
            0,
            "Duration → por (or nothing at all: trabajo ocho horas)."
          ),
        ]
      ),
      sec(
        "Opinion vs. on behalf of",
        "Para mí = in my opinion / for me (recipient). Por mí = on my behalf / because of me.",
        [
          ["Para mí, el español es fácil.", "In my opinion, Spanish is easy."],
          ["Lo hizo por mí.", "He did it for my sake."],
        ],
        [
          fb("Fix the preposition.", "___ mí, esta película es la mejor del año. (learner wrote: Por)", "Para", "Opinion → para mí."),
        ]
      ),
    ],
    [
      fb("Fix the preposition.", "Salgo ___ la oficina a las ocho. (learner wrote: por)", "para", "Heading toward a destination → para."),
      fb("Fix the preposition.", "Te cambio mi bocadillo ___ tu manzana. (learner wrote: para)", "por", "Exchange → por."),
      fb("Fix the preposition.", "El informe es ___ mañana. (learner wrote: por)", "para", "Deadline → para."),
      ms(
        "Which sentences are already correct?",
        ["Llamé por teléfono a mi madre.", "Este regalo es por ti.", "Por eso no vine.", "Estudio medicina para ser doctora."],
        [0, 2, 3],
        "A gift for someone → para ti."
      ),
      mc(
        "Which sentence has NO error?",
        ["Por lo general, desayuno para las ocho.", "Por lo general, desayuno a las ocho.", "Para lo general, desayuno a las ocho.", "Por lo general, desayuno por las ocho y para."],
        1,
        "Por lo general is a fixed expression; a clock time uses a las."
      ),
      toEs("Thanks for coming; this is for you.", "Gracias por venir; esto es para ti.", "Gracias por + infinitive; recipient → para ti (no accent on ti).", ["Gracias por venir, esto es para ti."]),
      wo("Por fin encontré un regalo para mi abuela.", "Por fin (finally) is a fixed phrase; para marks the recipient.", "I finally found a present for my grandmother."),
    ]
  ),
  L(
    "por-vs-para-mastery-check",
    "a2r-spiral-pronouns-reflexives-por-para",
    "Spiral Review: Pronouns, Reflexives & Por/Para",
    "Lessons 10–22 in one workout: direct and indirect objects, reflexive verbs, comparisons, the future and por/para.",
    "9 min",
    [
      sec(
        "A message from a friend",
        "Read the voice message transcript. It packs half of A2 into five lines.",
        [
          ["¡Hola! Ayer me levanté temprano para ir al mercado.", "Hi! Yesterday I got up early to go to the market."],
          ["Compré unas flores y las compré para tu madre.", "I bought some flowers, and I bought them for your mom."],
          ["Mañana se las daré en la fiesta.", "Tomorrow I'll give them to her at the party."],
          ["Por cierto, el mercado nuevo es más grande que el viejo.", "By the way, the new market is bigger than the old one."],
        ],
        [
          mc(
            "Who are the flowers for?",
            ["The listener's mother", "The speaker's mother", "The market vendor", "The speaker"],
            0,
            "Para tu madre."
          ),
          fb("Complete the reply.", "¡Qué amable! Mi madre ___ va a encantar. (the flowers → to her)", "le", "Encantar is gustar-type: a mi madre le va a encantar."),
        ]
      ),
    ],
    [
      fb("Complete with the reflexive pronoun.", "Mañana ___ levantaremos a las seis para salir temprano.", "nos", "Levantarse, nosotros → nos levantaremos."),
      fb("Complete with por or para.", "Vamos ___ la autopista porque es más rápido.", "por", "Route/through → por."),
      fb("Complete with the direct object pronoun.", "¿La tarta? ___ traerá mi hermano.", "La", "La tarta → la, before the conjugated verb."),
      ms(
        "Which sentences are correct?",
        ["Le compré un regalo a mi jefe.", "Me ducho por la mañana.", "Las vi ayer en el parque.", "Es la tienda más barata en el barrio."],
        [0, 1, 2],
        "Superlative group → del barrio."
      ),
      mc(
        "\"I'll call her tomorrow to invite her.\"",
        ["La llamaré mañana para invitarla.", "Le llamaré mañana por invitarla.", "La llamaré mañana por invitarle.", "Llamaré la mañana para invitarla."],
        0,
        "Llamar and invitar take direct objects (la); purpose → para."
      ),
      toEs("My brother is taller than me, but I am older.", "Mi hermano es más alto que yo, pero yo soy mayor.", "Más … que for height; mayor for age.", ["Mi hermano es más alto que yo pero yo soy mayor."]),
      wo("Nos quedaremos en Lima por tres días.", "Quedarse (to stay) in the future; por for duration.", "We'll stay in Lima for three days."),
    ]
  ),
  L(
    "personal-a",
    "a2r-error-hunt-personal-a",
    "Error Hunt: The Personal A",
    "Missing a's, extra a's, and the tricky cases with tener and buscar — find every slip.",
    "7 min",
    [
      sec(
        "Missing a",
        "When the direct object is a specific person (or a pet you treat as one), Spanish adds a. English has nothing like it, so it's the most commonly forgotten word in A2.",
        [
          ["✗ Visito mi abuela. → ✓ Visito a mi abuela.", "I visit my grandmother."],
          ["✗ Conozco tu hermano. → ✓ Conozco a tu hermano.", "I know your brother."],
        ],
        [
          mc(
            "\"Llamé mi jefe ayer.\" What's missing?",
            ["a before mi jefe", "the before jefe", "le before llamé", "nothing"],
            0,
            "A specific person as direct object → llamé a mi jefe."
          ),
        ]
      ),
      sec(
        "Extra a",
        "No a for things, places, or unspecified people. And tener usually drops it: tengo dos hermanos.",
        [
          ["✗ Veo a la televisión. → ✓ Veo la televisión.", "I watch TV."],
          ["✗ Tengo a tres primos. → ✓ Tengo tres primos.", "I have three cousins."],
          ["Busco un médico. / Busco a mi médico.", "I'm looking for a doctor (any). / I'm looking for my doctor (specific)."],
        ],
        [
          ms(
            "Which sentences have an unnecessary a?",
            ["Visitamos a el museo.", "Necesito a un fontanero.", "Quiero a mis padres.", "Tengo a una hermana."],
            [0, 1, 3],
            "A place, an unspecified person, and tener don't take personal a. Quiero a mis padres (I love my parents) is correct."
          ),
        ]
      ),
    ],
    [
      fb("Fix the sentence.", "Ayer vi ___ Marta en el supermercado. (learner wrote: nothing)", "a", "A specific person → vi a Marta."),
      fb("Fix the sentence.", "Espero ___ autobús desde hace media hora. (learner wrote: al)", "el", "A thing → no personal a: espero el autobús."),
      mc(
        "Which sentence is correct?",
        ["Buscamos a nuestra perra, Lola.", "Buscamos nuestra perra, Lola.", "Buscamos a una perra cualquiera.", "Buscamos al parque."],
        0,
        "A named pet treated as an individual takes a. An unspecified dog or a place doesn't."
      ),
      mc(
        "\"I don't know anybody here.\"",
        ["No conozco a nadie aquí.", "No conozco nadie aquí.", "No conozco a nada aquí.", "No a conozco nadie aquí."],
        0,
        "Nadie and alguien take personal a when they're direct objects."
      ),
      ms(
        "Which sentences are correct?",
        ["Ayudé a mi vecino.", "Escucho a la radio.", "Admiro a mi profesora.", "Tengo un amigo en Cuba."],
        [0, 2, 3],
        "The radio is a thing → escucho la radio."
      ),
      toEs("I'm going to invite Pedro and Laura to the party.", "Voy a invitar a Pedro y a Laura a la fiesta.", "Personal a before each person; a la fiesta is a destination.", ["Voy a invitar a Pedro y Laura a la fiesta."]),
      wo("¿Conoces a alguien que hable japonés?", "Alguien as a direct object takes personal a.", "Do you know anyone who speaks Japanese?"),
    ]
  ),
  L(
    "negation-words-2",
    "a2r-transform-make-it-negative",
    "Transformations: Make It Negative",
    "Flip affirmative sentences into negatives — every alguien becomes nadie, every siempre becomes nunca.",
    "7 min",
    [
      sec(
        "The pairs",
        "Every affirmative word has a negative partner: algo/nada, alguien/nadie, siempre/nunca, también/tampoco, alguno/ninguno, o … o / ni … ni.",
        [
          ["Siempre como algo. → Nunca como nada.", "I always eat something. → I never eat anything."],
          ["Alguien llamó. → Nadie llamó.", "Somebody called. → Nobody called."],
        ],
        [
          fb("Make it negative.", "Tengo algo en el bolsillo. → No tengo ___ en el bolsillo.", "nada", "Algo → nada, with no before the verb."),
        ]
      ),
      sec(
        "Before or after the verb",
        "A negative word before the verb stands alone: Nadie vino. After the verb, you need no in front: No vino nadie. Both are correct.",
        [
          ["Nunca bebo café. = No bebo café nunca.", "I never drink coffee."],
        ],
        [
          ms(
            "Which are correct ways to say \"Nobody knows\"?",
            ["Nadie sabe.", "No sabe nadie.", "Sabe nadie.", "No nadie sabe."],
            [0, 1],
            "Either the negative word first, or no + verb + negative word."
          ),
        ]
      ),
    ],
    [
      fb("Make it negative.", "Siempre llego tarde. → ___ llego tarde.", "Nunca", "Siempre → nunca."),
      fb("Make it negative.", "Hay alguien en la puerta. → No hay ___ en la puerta.", "nadie", "Alguien → nadie."),
      fb("Make it negative.", "Tengo algunos amigos aquí. → No tengo ___ amigo aquí.", "ningún", "Alguno → ninguno, shortened to ningún before a masculine singular noun (ninguno is almost always singular)."),
      fb("Make it negative.", "Quiero té o café. → No quiero ___ té ni café.", "ni", "O … o → ni … ni."),
      mc(
        "Negative reply to \"Yo también estudio los sábados.\"",
        ["Yo tampoco estudio los sábados.", "Yo también no estudio los sábados.", "Yo nunca también estudio los sábados.", "Yo no tampoco estudio."],
        0,
        "También → tampoco."
      ),
      toEs("I never say anything to anybody.", "Nunca le digo nada a nadie.", "Spanish happily stacks negatives: nunca … nada … nadie.", ["No le digo nunca nada a nadie.", "Nunca digo nada a nadie."]),
      wo("No vino ninguna de mis amigas a la fiesta.", "No + verb + ninguna (agrees with amigas, but stays singular).", "None of my friends came to the party."),
    ]
  ),
  L(
    "mente-adverbs-2",
    "a2r-contrast-adjective-adverb",
    "Contrast Clinic: Adjective or Adverb?",
    "Rápido or rápidamente? Bueno or bien? Learn which word describes a thing and which describes an action.",
    "7 min",
    [
      sec(
        "Describing nouns vs. describing actions",
        "Adjectives describe nouns and agree with them (una respuesta clara). Adverbs describe verbs and never change (habla claramente).",
        [
          ["Es una conductora cuidadosa. / Conduce cuidadosamente.", "She's a careful driver. / She drives carefully."],
          ["La explicación fue clara. / Lo explicó claramente.", "The explanation was clear. / She explained it clearly."],
        ],
        [
          mc(
            "\"Ella canta ___.\"",
            ["maravillosamente", "maravillosa", "maravillosos", "maravilloso"],
            0,
            "Describing how she sings (a verb) → adverb."
          ),
        ]
      ),
      sec(
        "Bueno vs. bien, malo vs. mal",
        "Bueno/malo are adjectives (a good book). Bien/mal are adverbs (she writes well). With estar, use bien/mal for how someone is.",
        [
          ["Es un buen cocinero. / Cocina bien.", "He's a good cook. / He cooks well."],
          ["¿Cómo estás? —Estoy bien.", "How are you? — I'm fine."],
        ],
        [
          fb("Complete with bueno or bien.", "Hablas español muy ___.", "bien", "Describing how you speak → adverb bien."),
        ]
      ),
    ],
    [
      fb("Complete with the adverb form (fácil).", "Resolví el problema ___.", "fácilmente", "Fácil → fácilmente (keeps its accent)."),
      fb("Complete with the adjective form (rápido).", "Tomamos un tren muy ___.", "rápido", "Describing the train (a noun) → adjective."),
      fb("Complete with bueno, buena, bien or mal.", "La película fue ___; me gustó mucho.", "buena", "Describing la película → adjective, feminine."),
      mc(
        "\"He answered calmly and patiently.\"",
        ["Contestó tranquila y pacientemente.", "Contestó tranquilamente y pacientemente.", "Contestó tranquilo y paciente.", "Contestó tranquilamente y paciente."],
        0,
        "In a series of -mente adverbs, only the last one keeps -mente; the first stays in the feminine form."
      ),
      ms(
        "Which sentences are correct?",
        ["Mi abuela está muy bien.", "Juegas muy bueno al tenis.", "Es una idea excelente.", "Normalmente me levanto temprano."],
        [0, 2, 3],
        "Playing (a verb) → juegas muy bien."
      ),
      toEs("She speaks slowly and clearly.", "Habla lenta y claramente.", "Only the last adverb in the series takes -mente.", ["Ella habla lenta y claramente.", "Habla despacio y claramente."]),
      wo("Afortunadamente, el examen fue bastante fácil.", "A sentence adverb (afortunadamente) + an adjective (fácil) describing el examen.", "Fortunately, the exam was pretty easy."),
    ]
  ),
  L(
    "asking-giving-directions-2",
    "a2r-mission-lost-in-seville",
    "Real-World Mission: Lost in Seville",
    "You're a tourist with a dead phone. Ask for directions politely and follow the answers with usted commands.",
    "8 min",
    [
      sec(
        "Asking politely",
        "Get attention first (Perdone / Disculpe), then ask with ¿Dónde está…? or ¿Cómo llego a…?",
        [
          ["—Disculpe, ¿cómo llego a la catedral?", "Excuse me, how do I get to the cathedral?"],
          ["—Siga todo recto y gire a la derecha en el semáforo.", "Go straight ahead and turn right at the traffic light."],
          ["—Luego cruce la plaza. La catedral está enfrente.", "Then cross the square. The cathedral is opposite."],
        ],
        [
          mc(
            "What should you do at the traffic light?",
            ["Turn right", "Turn left", "Cross the square", "Go back"],
            0,
            "Gire a la derecha = turn right."
          ),
        ]
      ),
      sec(
        "Understanding the directions",
        "Formal commands use the \"opposite\" vowel: -ar verbs → -e (gire, cruce), -er/-ir verbs → -a (siga, suba).",
        [
          ["Tome la segunda calle a la izquierda.", "Take the second street on the left."],
          ["Camine dos cuadras y pregunte otra vez.", "Walk two blocks and ask again."],
        ],
        [
          fb("Complete the direction with doblar.", "___ a la izquierda en la esquina.", "Doble", "Doblar (-ar) → usted command doble."),
        ]
      ),
    ],
    [
      fb("Complete the direction with seguir.", "___ por esta calle hasta el río.", "Siga", "Seguir → siga (stem change + -a)."),
      fb("Complete the direction with cruzar.", "___ el puente y verá el museo.", "Cruce", "Cruzar → cruce (z → c before e)."),
      mt(
        "Match each direction to its meaning.",
        [
          ["Siga recto.", "Go straight."],
          ["Dé la vuelta.", "Turn around."],
          ["Está a la vuelta de la esquina.", "It's around the corner."],
          ["Está a cinco minutos a pie.", "It's a five-minute walk."],
        ],
        "Useful fixed phrases for directions."
      ),
      mc(
        "Which is the most polite way to start?",
        ["Perdone, ¿me podría decir dónde está la estación?", "¡Oye! ¿La estación?", "Dime dónde está la estación.", "Estación, ¿dónde?"],
        0,
        "Perdone + usted + the conditional podría is the most polite."
      ),
      ms(
        "Which are correct usted commands?",
        ["Gire", "Tome", "Cruza", "Siga"],
        [0, 1, 3],
        "Cruza is the tú command; the usted form is cruce."
      ),
      toEs("Excuse me, is the train station far?", "Disculpe, ¿está lejos la estación de tren?", "Location → estar.", ["Perdone, ¿está lejos la estación de tren?", "Disculpe, ¿la estación de tren está lejos?", "Perdone, ¿la estación de tren está lejos?"]),
      wo("Tome el autobús número tres y bájese en la plaza.", "Two usted commands; with reflexive bajarse the pronoun attaches: bájese.", "Take bus number three and get off at the square."),
    ]
  ),
  L(
    "at-the-restaurant-2",
    "a2r-dialogue-restaurant-problems",
    "Dialogue Lab: Something's Wrong with My Order",
    "The soup is cold, the bill is wrong and you're allergic to nuts. Solve each problem politely.",
    "8 min",
    [
      sec(
        "Polite complaints",
        "Start softly (Perdone… / Disculpe…) and use the conditional or me podría to make requests sound polite.",
        [
          ["—Perdone, la sopa está fría. ¿Me la podría calentar?", "Excuse me, the soup is cold. Could you heat it up for me?"],
          ["—Claro, lo siento mucho. Ahora mismo.", "Of course, I'm very sorry. Right away."],
        ],
        [
          mc(
            "Why \"la sopa está fría\" and not \"es fría\"?",
            ["It's the soup's current condition.", "Sopa is feminine.", "Fría always takes estar.", "Both are equally correct here."],
            0,
            "Temperature right now → estar."
          ),
        ]
      ),
      sec(
        "Allergies and special requests",
        "Soy alérgico/a a… (I'm allergic to…), sin (without), ¿Lleva…? (Does it have…?).",
        [
          ["—¿Este plato lleva nueces? Soy alérgica.", "Does this dish have nuts? I'm allergic."],
          ["—Sí, lleva. Pero se lo podemos preparar sin nueces.", "Yes, it does. But we can make it for you without nuts."],
        ],
        [
          fb("Complete the request.", "¿Me trae la ensalada ___ cebolla, por favor?", "sin", "Without → sin."),
        ]
      ),
    ],
    [
      fb("Complete the complaint.", "Disculpe, creo que hay un error en la ___.", "cuenta", "La cuenta = the bill."),
      fb("Complete the request (poder, usted, conditional).", "¿Me ___ traer otro tenedor?", "podría", "Podría = could you (polite)."),
      mt(
        "Match each problem to a polite request.",
        [
          ["The glass is dirty.", "¿Me podría traer otro vaso?"],
          ["You didn't order this.", "Perdone, yo no pedí esto."],
          ["You're in a hurry.", "¿Nos trae la cuenta, por favor?"],
          ["The steak is raw.", "La carne está cruda, ¿la pueden cocinar más?"],
        ],
        "Soften with perdone and questions instead of commands."
      ),
      mc(
        "The waiter says \"Enseguida se lo cambio.\" What does he mean?",
        ["I'll change it for you right away.", "I'll bring the bill later.", "It can't be changed.", "Change your order."],
        0,
        "Enseguida = right away; se lo cambio = I'll change it for you."
      ),
      toEs("Excuse me, I ordered the fish, not the chicken.", "Perdone, yo pedí el pescado, no el pollo.", "Pedir → pedí (preterite).", ["Disculpe, yo pedí el pescado, no el pollo.", "Perdone, pedí el pescado, no el pollo."]),
      toEn("La comida estaba riquísima, pero tardó mucho.", "The food was delicious, but it took a long time.", "Estaba for how it tasted; tardar = to take (time).", ["The food was really delicious, but it took a long time."]),
      wo("¿Me podría traer un vaso de agua sin hielo?", "Me (to me) + podría + infinitive + sin for \"without.\"", "Could you bring me a glass of water without ice?"),
    ]
  ),
  L(
    "at-the-restaurant-2",
    "a2r-spiral-telling-stories",
    "Spiral Review: A2 So Far — Telling Stories",
    "Lessons 1–9 revisited: tell a complete past-tense story with regular and irregular preterites, the imperfect, and both together.",
    "9 min",
    [
      sec(
        "The first date",
        "Read Daniel's story. Then retell pieces of it, choosing each verb's tense yourself.",
        [
          ["Era sábado y hacía un calor horrible.", "It was Saturday and it was horribly hot."],
          ["Daniel estaba muy nervioso porque tenía su primera cita con Sofía.", "Daniel was very nervous because he had his first date with Sofía."],
          ["Llegó al restaurante a las nueve, pero ella no estaba.", "He got to the restaurant at nine, but she wasn't there."],
          ["Esperó media hora. Por fin, Sofía llegó y le dijo: «¡Perdón, el metro se paró!»", "He waited half an hour. Finally Sofía arrived and said, \"Sorry, the metro stopped!\""],
        ],
        [
          ms(
            "Which verbs in the story are imperfect?",
            ["era", "hacía", "llegó", "tenía"],
            [0, 1, 3],
            "Llegó is a completed event (preterite)."
          ),
          fb("Retell it.", "Mientras Daniel ___, leía el menú. (esperar)", "esperaba", "An action in progress in the background → imperfect."),
        ]
      ),
    ],
    [
      fb("Retell it.", "Sofía ___ que el metro se paró. (decir)", "dijo", "Decir → dijo."),
      fb("Retell it.", "Después de cenar, ellos ___ a bailar. (ir)", "fueron", "A completed action → preterite of ir."),
      fb("Retell it.", "La música ___ muy buena y había mucha gente. (ser)", "era", "Description of the scene → imperfect."),
      mc(
        "\"When Sofía arrived, Daniel was reading the menu.\"",
        ["Cuando Sofía llegó, Daniel leía el menú.", "Cuando Sofía llegaba, Daniel leyó el menú.", "Cuando Sofía llegó, Daniel leyó el menú.", "Cuando Sofía llegaba, Daniel leía el menú."],
        0,
        "The arrival interrupts (preterite); the reading was in progress (imperfect)."
      ),
      mt(
        "Match each irregular preterite to its infinitive.",
        [
          ["pusieron", "poner"],
          ["estuvimos", "estar"],
          ["trajo", "traer"],
          ["hicieron", "hacer"],
        ],
        "U-stem, u-stem, j-stem, i-stem."
      ),
      toEs("We didn't know that the restaurant was closed.", "No sabíamos que el restaurante estaba cerrado.", "Both are background states → imperfect.", ["Nosotros no sabíamos que el restaurante estaba cerrado."]),
      wo("Al final la cita fue un éxito y quedaron para el domingo.", "Preterite for the outcome; quedar para = to arrange to meet.", "In the end the date was a success and they arranged to meet on Sunday."),
    ]
  ),
  L(
    "at-the-restaurant-2",
    "a2r-spiral-pronouns-comparisons-future",
    "Spiral Review: A2 So Far — Tools of Everyday Talk",
    "Lessons 10–31 revisited: pronouns, reflexives, comparisons, the future, por/para, negatives and adverbs.",
    "9 min",
    [
      sec(
        "Group chat: planning a picnic",
        "Every message reuses a structure from this half of A2.",
        [
          ["Ana: ¿Quién trae las bebidas? Yo no puedo traerlas.", "Who's bringing the drinks? I can't bring them."],
          ["Leo: Yo las traigo. Y le compraré un pastel a Marta para su cumpleaños.", "I'll bring them. And I'll buy Marta a cake for her birthday."],
          ["Ana: ¡Genial! El parque nuevo es más bonito que el viejo.", "Great! The new park is nicer than the old one."],
          ["Leo: Sí, pero no hay ninguna sombra. Nos levantaremos temprano para buscar sitio.", "Yes, but there's no shade at all. We'll get up early to find a spot."],
        ],
        [
          mc(
            "In \"Yo las traigo,\" what does las replace?",
            ["las bebidas", "las amigas", "las sombras", "las cosas de Marta"],
            0,
            "Las bebidas → las."
          ),
          fb("Reply to the chat.", "Yo tampoco puedo ir temprano, pero llegaré ___ las doce. (by twelve)", "para", "A deadline → para."),
        ]
      ),
    ],
    [
      fb("Complete with the future.", "Marta ___ muy contenta con el pastel. (estar)", "estará", "Estar is regular in the future: estará."),
      fb("Complete with a pronoun.", "¿El pastel? Leo ___ comprará mañana.", "lo", "El pastel → lo, placed before the conjugated verb."),
      fb("Complete with a negative word.", "No trajimos ___ comida para el perro.", "ninguna", "No + verb + ninguna (agrees with comida)."),
      ms(
        "Which messages are correct?",
        ["Nos vemos a las once para comer.", "Este parque es el más grande de la ciudad.", "Nadie no quiere venir.", "Lo pasamos genial, gracias por todo."],
        [0, 1, 3],
        "A negative word placed before the verb stands alone, without no → Nadie quiere venir."
      ),
      mc(
        "\"We'll leave quickly because it will rain.\"",
        ["Nos iremos rápidamente porque lloverá.", "Nos iremos rápida porque lloverá.", "Nos vamos rápido porque llovió.", "Iremos nos rápidamente porque lloverá."],
        0,
        "Irse in the future (nos iremos), adverb rápidamente, llover → lloverá."
      ),
      toEs("I'll bring the chairs; my brother will bring them in his car.", "Yo traeré las sillas; mi hermano las traerá en su coche.", "Future of traer; las replaces las sillas.", ["Traeré las sillas; mi hermano las traerá en su coche.", "Yo traeré las sillas, mi hermano las traerá en su carro."]),
      wo("Afortunadamente nadie se olvidó de nada.", "Adverb + nadie + reflexive olvidarse + double negative.", "Fortunately nobody forgot anything."),
    ]
  ),
  L(
    "preterite-drill-3",
    "a2r-timeline-builder",
    "Timeline Builder: What Happened First?",
    "Put events in order with primero, luego, después, antes de and al final — all in the preterite.",
    "7 min",
    [
      sec(
        "Sequencing words",
        "Primero (first), luego / después (then, afterward), más tarde (later), al final (in the end). Antes de / después de + infinitive link two actions.",
        [
          ["Primero desayuné, luego me duché y después salí.", "First I had breakfast, then I showered and afterward I left."],
          ["Antes de salir, cerré las ventanas.", "Before leaving, I closed the windows."],
        ],
        [
          mc(
            "\"Después de comer, ___ una siesta.\" (I took a nap.)",
            ["dormí", "dormía", "duermo", "dormiré"],
            0,
            "A single completed action → preterite. Dormir → dormí (the stem change is only in él/ellos: durmió)."
          ),
        ]
      ),
      sec(
        "Antes de / después de + infinitive",
        "After these prepositions, the verb stays in the infinitive — even when the sentence is in the past.",
        [
          ["Después de llegar, llamé a mi madre.", "After arriving, I called my mom."],
        ],
        [
          fb("Complete the sentence.", "Antes de ___ de casa, apagué las luces. (salir)", "salir", "After antes de → infinitive, even in a past-tense sentence."),
        ]
      ),
    ],
    [
      wo("Primero compramos los billetes y luego subimos al tren.", "Primero … y luego … for a sequence.", "First we bought the tickets and then we got on the train."),
      wo("Al final llegamos al hotel a medianoche.", "Al final = in the end.", "In the end we got to the hotel at midnight."),
      fb("Complete with the preterite.", "Después de cenar, mis padres ___ un paseo. (dar)", "dieron", "Dar → dieron (dar uses -er/-ir endings without accents)."),
      fb("Complete with the preterite.", "Luego nosotros ___ una película en el cine. (ver)", "vimos", "Ver → vimos (no accent)."),
      mc(
        "Which order makes sense? (A) Pagué la cuenta. (B) Pedí la comida. (C) Comí.",
        ["B → C → A", "A → B → C", "C → A → B", "A → C → B"],
        0,
        "Order, eat, pay."
      ),
      toEs("After the meeting, I went home and slept.", "Después de la reunión, fui a casa y dormí.", "Después de + noun; two preterites in sequence.", ["Después de la reunión, me fui a casa y dormí.", "Después de la reunión fui a casa y dormí."]),
      toEn("Antes de irse, Luis nos dio las llaves.", "Before leaving, Luis gave us the keys.", "Antes de + infinitive; dar → dio.", ["Before he left, Luis gave us the keys."]),
    ]
  ),
  L(
    "preterite-drill-3",
    "a2r-mission-travel-blog",
    "Real-World Mission: Write a Travel Blog Post",
    "Help Lucía finish her blog post about three days in Cusco — every paragraph needs the preterite.",
    "8 min",
    [
      sec(
        "Day 1",
        "Lucía has drafted day one. Read it, then complete what's missing.",
        [
          ["El primer día llegamos a Cusco por la mañana.", "On the first day we arrived in Cusco in the morning."],
          ["Descansamos un poco por la altitud y por la tarde visitamos la Plaza de Armas.", "We rested a little because of the altitude, and in the afternoon we visited the main square."],
        ],
        [
          fb("Complete Lucía's post.", "Por la noche ___ un restaurante muy bueno. (encontrar, nosotros)", "encontramos", "Nosotros → encontramos (same as the present; the context makes it past)."),
        ]
      ),
      sec(
        "Days 2 and 3",
        "Machu Picchu day — full of irregular preterites.",
        [
          ["El segundo día fuimos a Machu Picchu en tren.", "On the second day we went to Machu Picchu by train."],
          ["Tuvimos que levantarnos a las cuatro, pero valió la pena.", "We had to get up at four, but it was worth it."],
        ],
        [
          fb("Complete Lucía's post.", "Mi amiga ___ más de doscientas fotos. (hacer)", "hizo", "Hacer → hizo (with z)."),
        ]
      ),
    ],
    [
      fb("Complete Lucía's post.", "El tercer día ___ a un mercado de artesanías. (ir, nosotros)", "fuimos", "Ir → fuimos."),
      fb("Complete Lucía's post.", "Yo ___ un poncho para mi madre. (comprar)", "compré", "Yo → compré."),
      fb("Complete Lucía's post.", "Los vendedores nos ___ muy bien. (tratar)", "trataron", "Ellos → trataron."),
      mc(
        "Which sentence would fit the blog's final paragraph?",
        ["Fue un viaje inolvidable.", "Es un viaje inolvidable mañana.", "Será un viaje inolvidable ayer.", "Iba un viaje inolvidable."],
        0,
        "Summing up a finished trip → fue."
      ),
      mt(
        "Match each blog heading to its content.",
        [
          ["Día 1", "Llegamos y descansamos."],
          ["Día 2", "Fuimos a Machu Picchu."],
          ["Día 3", "Compramos artesanías."],
          ["Conclusión", "Fue un viaje increíble."],
        ],
        "Each heading summarizes the day's main events in the preterite."
      ),
      toEs("We could not see the mountain because of the fog.", "No pudimos ver la montaña por la niebla.", "Poder → pudimos; por for cause.", ["No pudimos ver la montaña a causa de la niebla."]),
      wo("¿Alguna vez estuviste en Perú?", "Alguna vez = ever; estar → estuviste.", "Have you ever been to Peru?"),
    ]
  ),
  L(
    "imperfect-drill-3",
    "a2r-contrast-then-and-now",
    "Contrast Clinic: Then & Now",
    "Antes vs. ahora — contrast how things used to be (imperfect) with how they are (present).",
    "7 min",
    [
      sec(
        "Antes … ahora …",
        "The imperfect describes the old normal; the present describes the new one. Antes and ahora make the contrast explicit.",
        [
          ["Antes vivía con mis padres; ahora vivo solo.", "I used to live with my parents; now I live alone."],
          ["Antes no había wifi en el pueblo; ahora hay en todas partes.", "There didn't used to be wifi in the village; now it's everywhere."],
        ],
        [
          fb("Complete the contrast.", "Antes ___ mucho; ahora casi no fumo. (fumar)", "fumaba", "Old habit → imperfect."),
        ]
      ),
      sec(
        "Ya no / todavía",
        "Ya no = no longer; todavía = still. They pair naturally with then-and-now contrasts.",
        [
          ["Antes jugaba al fútbol; ya no juego.", "I used to play soccer; I don't anymore."],
          ["Antes me gustaba el café y todavía me gusta.", "I used to like coffee and I still do."],
        ],
        [
          mc(
            "\"I used to be shy, but I'm not anymore.\"",
            ["Antes era tímido, pero ya no lo soy.", "Antes fui tímido, pero ya no lo soy.", "Antes era tímido, pero todavía lo soy.", "Antes soy tímido, pero ya no era."],
            0,
            "Past state → era; ya no for no longer."
          ),
        ]
      ),
    ],
    [
      fb("Complete the contrast.", "Antes mi barrio ___ muy tranquilo; ahora hay mucho ruido. (ser)", "era", "Description of the past → era."),
      fb("Complete the contrast.", "Antes ___ en autobús; ahora voy en bici. (ir, yo)", "iba", "Old habit → iba."),
      fb("Complete the contrast.", "De joven mi padre tenía el pelo largo; ahora ___ calvo. (estar)", "está", "Now → present."),
      mt(
        "Match each \"then\" to its \"now.\"",
        [
          ["Antes escribíamos cartas.", "Ahora mandamos mensajes."],
          ["Antes veíamos la tele.", "Ahora vemos series en el móvil."],
          ["Antes comprábamos en el mercado.", "Ahora compramos por internet."],
          ["Antes leíamos el periódico.", "Ahora leemos las noticias en línea."],
        ],
        "Imperfect for the old habit, present for the new one."
      ),
      ms(
        "Which sentences are logical?",
        ["Antes trabajaba de noche; ahora trabajo de día.", "Antes trabajé de noche todos los días.", "Ya no vivo en Chile.", "Todavía estudio español."],
        [0, 2, 3],
        "A repeated past habit (todos los días) → trabajaba, not trabajé."
      ),
      toEs("I used to hate vegetables, but now I love them.", "Antes odiaba las verduras, pero ahora me encantan.", "Imperfect for the old feeling; present for the current one.", ["Antes odiaba las verduras pero ahora me encantan."]),
      wo("Cuando era estudiante no tenía dinero para viajar.", "Imperfect for a past stage of life and ongoing situation.", "When I was a student I didn't have money to travel."),
    ]
  ),
  L(
    "imperfect-drill-3",
    "a2r-story-photo-album",
    "Story Detective: The Old Photo Album",
    "Describe old family photos — who people were, what they were wearing and what was happening.",
    "7 min",
    [
      sec(
        "Photo 1: The wedding, 1975",
        "Photos freeze a moment, so describing them is pure imperfect: what things looked like and what was happening.",
        [
          ["En esta foto mis abuelos se casaban.", "In this photo my grandparents were getting married."],
          ["Mi abuela llevaba un vestido largo y tenía flores en el pelo.", "My grandmother was wearing a long dress and had flowers in her hair."],
          ["Todos sonreían, excepto mi tío, que lloraba.", "Everyone was smiling, except my uncle, who was crying."],
        ],
        [
          mc(
            "Who was crying?",
            ["The uncle", "The grandmother", "The grandfather", "Everyone"],
            0,
            "Mi tío, que lloraba."
          ),
          fb("Describe the photo.", "Mi abuelo ___ un traje negro. (llevar)", "llevaba", "What someone was wearing in a photo → imperfect."),
        ]
      ),
      sec(
        "Photo 2: The beach, 1990",
        "Estar + gerund in the imperfect (estaba nadando) emphasizes an action in progress.",
        [
          ["Mi madre estaba nadando y mi padre leía en la arena.", "My mom was swimming and my dad was reading on the sand."],
        ],
        [
          fb("Describe the photo.", "Mis hermanos ___ construyendo un castillo de arena. (estar)", "estaban", "Estar in the imperfect + gerund."),
        ]
      ),
    ],
    [
      fb("Describe the photo.", "El cielo ___ azul y hacía mucho sol. (estar)", "estaba", "Current look of the sky in the photo → estaba."),
      fb("Describe the photo.", "Yo ___ tres años en esa foto. (tener)", "tenía", "Age in the past → tenía."),
      mt(
        "Match each description to its meaning.",
        [
          ["Llevaba gafas.", "He was wearing glasses."],
          ["Tenía barba.", "He had a beard."],
          ["Estaba sentado.", "He was sitting."],
          ["Parecía cansado.", "He looked tired."],
        ],
        "All imperfect: descriptions frozen in time."
      ),
      ms(
        "Which sentences are good photo descriptions?",
        ["Mi tía estaba muy guapa.", "Mi tía fue muy guapa en la foto.", "Los niños jugaban en el agua.", "Había muchos invitados."],
        [0, 2, 3],
        "Descriptions of a photo use the imperfect: estaba, not fue."
      ),
      toEs("My grandmother was wearing a red hat and she was laughing.", "Mi abuela llevaba un sombrero rojo y se reía.", "Imperfect for both descriptions.", ["Mi abuela llevaba un sombrero rojo y estaba riéndose.", "Mi abuela llevaba un sombrero rojo y reía.", "Mi abuela llevaba un sombrero rojo y se estaba riendo."]),
      wo("En la foto todos estábamos mirando a la cámara.", "Estar (imperfect) + gerund for an action in progress.", "In the photo we were all looking at the camera."),
    ]
  ),
  L(
    "preterite-vs-imperfect-drill-3",
    "a2r-story-blackout",
    "Story Detective: The Night of the Blackout",
    "A citywide blackout story: decide scene vs. action, then retell it from different characters' points of view.",
    "8 min",
    [
      sec(
        "The story",
        "Read carefully. Each imperfect sets the scene; each preterite pushes the story forward.",
        [
          ["Eran las nueve de la noche y toda la familia estaba en casa.", "It was nine at night and the whole family was at home."],
          ["Papá veía el fútbol y yo hacía los deberes.", "Dad was watching soccer and I was doing homework."],
          ["De repente, se fue la luz en todo el barrio.", "Suddenly, the power went out in the whole neighborhood."],
          ["Mamá encontró unas velas y las encendimos.", "Mom found some candles and we lit them."],
        ],
        [
          mc(
            "What was Dad doing when the power went out?",
            ["Watching soccer", "Doing homework", "Looking for candles", "Cooking"],
            0,
            "Papá veía el fútbol (in progress)."
          ),
        ]
      ),
      sec(
        "Retell it",
        "Now tell pieces of the story yourself.",
        [
          ["Afuera no se veía nada y hacía frío.", "Outside you couldn't see anything and it was cold."],
          ["Salimos al balcón y hablamos con los vecinos.", "We went out on the balcony and talked with the neighbors."],
        ],
        [
          fb("Retell the story.", "Mientras yo ___ los deberes, se fue la luz. (hacer)", "hacía", "The action in progress → imperfect."),
        ]
      ),
    ],
    [
      fb("Retell the story.", "La luz ___ a las once y media. (volver)", "volvió", "A single event → preterite."),
      fb("Retell the story.", "Todos ___ contentos de tener luz otra vez. (estar)", "estaban", "Emotional state at that moment → imperfect."),
      fb("Retell the story.", "Esa noche nosotros ___ juegos de mesa a la luz de las velas. (jugar)", "jugamos", "A completed activity within the story's sequence → preterite."),
      mc(
        "\"While we were talking on the balcony, a neighbor brought cookies.\"",
        ["Mientras hablábamos en el balcón, una vecina trajo galletas.", "Mientras hablamos en el balcón, una vecina traía galletas.", "Mientras hablábamos en el balcón, una vecina traía galletas.", "Mientras hablamos en el balcón, una vecina trajo galletas."],
        0,
        "Mientras + imperfect for the ongoing action; preterite for what happened during it."
      ),
      ms(
        "Which sentences are scene-setting (imperfect)?",
        ["No había luz en ninguna calle.", "Mamá encontró las velas.", "El perro tenía miedo.", "Encendimos las velas."],
        [0, 2],
        "Finding and lighting the candles are plot events → preterite."
      ),
      toEs("It was dark and my little brother was scared.", "Estaba oscuro y mi hermanito tenía miedo.", "Descriptions and feelings in the background → imperfect.", ["Estaba oscuro y mi hermano pequeño tenía miedo.", "Estaba oscuro y mi hermano menor tenía miedo."]),
      wo("Nunca olvidaré la noche en que se fue la luz.", "Future (olvidaré) + preterite (se fue) for a specific event.", "I'll never forget the night the power went out."),
    ]
  ),
  L(
    "preterite-vs-imperfect-drill-3",
    "a2r-transform-rewrite-story",
    "Transformations: Rewrite the Story in the Past",
    "Take a story told in the present and move it into the past — every verb has to choose its tense.",
    "8 min",
    [
      sec(
        "Present → past",
        "When you move a present-tense story into the past, ask of each verb: scene or event? Present descriptions become imperfect; present actions in sequence become preterite.",
        [
          ["Es lunes. Llueve. Entro en la oficina y veo a mi jefe. → Era lunes. Llovía. Entré en la oficina y vi a mi jefe.", "It was Monday. It was raining. I went into the office and saw my boss."],
        ],
        [
          fb("Rewrite in the past.", "Mi jefe está de mal humor. → Mi jefe ___ de mal humor.", "estaba", "Description of his state → imperfect."),
          fb("Rewrite in the past.", "Me dice que hay un problema. → Me ___ que había un problema.", "dijo", "A single action in the sequence → preterite."),
        ]
      ),
    ],
    [
      fb("Rewrite in the past.", "Los clientes están enfadados. → Los clientes ___ enfadados.", "estaban", "A state → imperfect."),
      fb("Rewrite in the past.", "Llamo a los clientes uno por uno. → ___ a los clientes uno por uno.", "Llamé", "Actions in sequence → preterite."),
      fb("Rewrite in the past.", "Al final, todos quedan contentos. → Al final, todos ___ contentos.", "quedaron", "Outcome of the story → preterite."),
      mc(
        "Rewrite: \"Hace sol y salgo a pasear.\"",
        ["Hacía sol y salí a pasear.", "Hizo sol y salía a pasear.", "Hace sol y salí a pasear.", "Hizo sol y salí a pasear."],
        0,
        "Weather as background → hacía; the walk as a single event → salí."
      ),
      mc(
        "Rewrite: \"Todos los días Ana corre en el parque.\"",
        ["Todos los días Ana corría en el parque.", "Todos los días Ana corrió en el parque.", "Todos los días Ana corrían en el parque.", "Todos los días Ana ha corrido."],
        0,
        "Todos los días → habit → imperfect."
      ),
      toEs("It was late, so I took a taxi.", "Era tarde, así que tomé un taxi.", "Background (era) + event (tomé).", ["Era tarde, así que cogí un taxi.", "Era tarde, entonces tomé un taxi."]),
      wo("Cuando salí de la oficina ya era de noche.", "Event (salí) + background (era de noche).", "When I left the office it was already dark."),
    ]
  ),
  L(
    "object-pronouns-drill-3",
    "a2r-error-hunt-pronoun-placement",
    "Error Hunt: Pronoun Placement",
    "Pronouns after the verb, between two verbs, or doubled up by mistake — catch every misplaced pronoun.",
    "7 min",
    [
      sec(
        "The placement rules in one place",
        "Conjugated verb → pronoun goes before it (lo veo). Infinitive or gerund → attach it or put it before the whole phrase (voy a verlo / lo voy a ver). Never between the two verbs.",
        [
          ["✗ Veo lo. → ✓ Lo veo.", "I see it."],
          ["✗ Voy a lo comprar. → ✓ Voy a comprarlo. / Lo voy a comprar.", "I'm going to buy it."],
        ],
        [
          mc(
            "Fix \"Quiero te ayudar.\"",
            ["Quiero ayudarte.", "Te quiero a ayudar.", "Quiero ayudar te.", "Quiero te ayudarte."],
            0,
            "Attach to the infinitive (ayudarte), or put it first (te quiero ayudar)."
          ),
        ]
      ),
      sec(
        "Accents when attaching to a gerund",
        "Attaching a pronoun to a gerund adds a syllable, so you add a written accent to keep the stress: comiendo → comiéndolo.",
        [
          ["Estoy leyéndolo.", "I'm reading it."],
          ["Están esperándonos.", "They're waiting for us."],
        ],
        [
          fb("Attach the pronoun.", "Estoy haciendo la tarea. → Estoy ___.", "haciéndola", "Hacer → haciendo + la → haciéndola (accent on the é)."),
        ]
      ),
    ],
    [
      fb("Fix the placement.", "Mi madre ___ llama todos los días. (learner wrote: llama me)", "me", "Before the conjugated verb: me llama."),
      fb("Fix the placement.", "¿Las entradas? No puedo ___. (learner wrote: las puedo no encontrar)", "encontrarlas", "No puedo encontrarlas (or no las puedo encontrar)."),
      ms(
        "Which sentences have correct placement?",
        ["Te voy a llamar.", "Voy a llamarte.", "Voy te a llamar.", "Llamarte voy."],
        [0, 1],
        "Before the whole phrase or attached to the infinitive."
      ),
      mc(
        "Which sentence is correct?",
        ["Estamos buscándolas.", "Estamos buscandolas.", "Estamos las buscando.", "Estamos buscando las."],
        0,
        "Attached to the gerund with an accent: buscándolas."
      ),
      mc(
        "\"Don't tell him!\" (A learner wrote \"¡No dígale!\")",
        ["¡No le diga!", "¡No dígale!", "¡Le no diga!", "¡No diga le!"],
        0,
        "With negative commands, the pronoun goes before the verb: no le diga."
      ),
      toEs("I'm going to send it to you tomorrow. (the report)", "Te lo voy a mandar mañana.", "Te (to you) before lo (it) — both before the conjugated verb, or both attached.", ["Voy a mandártelo mañana.", "Te lo mando mañana.", "Te lo enviaré mañana.", "Voy a enviártelo mañana."]),
      wo("¿Me estás escuchando o no?", "Me before the conjugated estar (or attached: escuchándome).", "Are you listening to me or not?"),
    ]
  ),
  L(
    "object-pronouns-drill-3",
    "a2r-mission-office-emails",
    "Real-World Mission: Office Emails",
    "Answer a coworker's emails without repeating a single noun — pronouns carry the whole conversation.",
    "8 min",
    [
      sec(
        "Email 1: The report",
        "Short professional replies lean heavily on pronouns.",
        [
          ["—¿Terminaste el informe?", "Did you finish the report?"],
          ["—Sí, lo terminé ayer. Te lo mando ahora.", "Yes, I finished it yesterday. I'll send it to you now."],
        ],
        [
          fb("Reply to the email.", "—¿Leíste los correos del cliente? —Sí, ___ leí esta mañana.", "los", "Los correos → los."),
        ]
      ),
      sec(
        "Email 2: The meeting",
        "Indirect objects show who receives information.",
        [
          ["—¿Le dijiste a la directora que llegamos tarde?", "Did you tell the director that we're arriving late?"],
          ["—Sí, le escribí hace una hora.", "Yes, I wrote to her an hour ago."],
        ],
        [
          fb("Reply to the email.", "—¿Les explicaste el cambio a los nuevos? —Sí, ___ lo expliqué ayer.", "se", "Les + lo → se lo."),
        ]
      ),
    ],
    [
      fb("Reply to the email.", "—¿Me puedes enviar la presentación? —Claro, ___ la envío ahora.", "te", "To you → te, before la."),
      fb("Reply to the email.", "—¿Firmaste los contratos? —No, voy a firmar___ mañana.", "los", "Attached to the infinitive: firmarlos."),
      mc(
        "\"Did you call the client?\" — \"Yes, I called him this morning.\"",
        ["Sí, lo llamé esta mañana.", "Sí, le llamé esta mañana a él cliente.", "Sí, llamé lo esta mañana.", "Sí, la llamé esta mañana."],
        0,
        "El cliente → lo, before llamé."
      ),
      mt(
        "Match each question to the best reply.",
        [
          ["¿Tienes mi número?", "Sí, lo tengo."],
          ["¿Viste a los técnicos?", "Sí, los vi en la entrada."],
          ["¿Le diste las llaves a Rosa?", "Sí, se las di."],
          ["¿Nos esperas?", "Sí, os espero en la sala."],
        ],
        "Match the pronoun to what's being replaced."
      ),
      toEs("I haven't read it yet, but I'll read it today. (the email)", "Todavía no lo leí, pero lo leeré hoy.", "Lo replaces el correo in both clauses.", ["Todavía no lo he leído, pero lo leeré hoy.", "Aún no lo leí, pero lo leeré hoy.", "Todavía no lo leí, pero lo voy a leer hoy."]),
      wo("Te agradezco la ayuda y te mando un saludo.", "Te before each conjugated verb.", "Thank you for the help, and best regards."),
    ]
  ),
  L(
    "reflexive-verbs-drill-3",
    "a2r-dialogue-wedding-prep",
    "Dialogue Lab: Getting Ready for a Wedding",
    "A family rushes to get ready for a wedding. Follow who's doing what — and who isn't ready yet.",
    "8 min",
    [
      sec(
        "Chaos in the house",
        "Listen for the reflexive pronoun: it tells you who's getting ready.",
        [
          ["—¡Rápido! ¿Ya te vestiste?", "Quick! Did you get dressed yet?"],
          ["—Sí, pero todavía tengo que peinarme.", "Yes, but I still have to do my hair."],
          ["—¿Y papá? —Se está afeitando.", "And Dad? — He's shaving."],
          ["—¡Los niños no se lavaron los dientes!", "The kids didn't brush their teeth!"],
        ],
        [
          mc(
            "What is Dad doing?",
            ["Shaving", "Getting dressed", "Brushing his teeth", "Doing his hair"],
            0,
            "Se está afeitando = he's shaving."
          ),
          fb("Complete the dialogue.", "Mamá, ¿me puedes ayudar? No puedo ___ la corbata. (ponerse, yo)", "ponerme", "After puedo, the infinitive carries the pronoun: ponerme."),
        ]
      ),
      sec(
        "At the wedding",
        "Emotional verbs are often reflexive too: emocionarse, divertirse, enamorarse, casarse.",
        [
          ["Los novios se casaron a las seis.", "The couple got married at six."],
          ["Mi abuela se emocionó y lloró.", "My grandmother got emotional and cried."],
        ],
        [
          fb("Complete.", "Todos nosotros ___ mucho en la fiesta. (divertirse, preterite)", "nos divertimos", "Divertirse → nos divertimos."),
        ]
      ),
    ],
    [
      fb("Complete.", "¿Cuándo ___ tus padres? (casarse, preterite)", "se casaron", "Ellos → se casaron."),
      fb("Complete.", "Yo nunca ___ en las bodas. (aburrirse, present)", "me aburro", "Yo → me aburro."),
      mt(
        "Match each reflexive verb to its meaning.",
        [
          ["afeitarse", "to shave"],
          ["maquillarse", "to put on makeup"],
          ["emocionarse", "to get emotional"],
          ["enamorarse", "to fall in love"],
        ],
        "All take reflexive pronouns."
      ),
      mc(
        "\"We have to leave now!\"",
        ["¡Tenemos que irnos ya!", "¡Tenemos que irse ya!", "¡Nos tenemos que irnos ya!", "¡Tenemos que nos ir ya!"],
        0,
        "The reflexive pronoun matches the subject (nosotros → nos) and attaches to the infinitive."
      ),
      ms(
        "Which sentences are correct?",
        ["Me estoy duchando.", "Estoy duchándome.", "Estoy me duchando.", "Mi hermana se maquilló en el coche."],
        [0, 1, 3],
        "The pronoun can't sit between estoy and the gerund."
      ),
      toEs("The bride fell in love with the groom in college.", "La novia se enamoró del novio en la universidad.", "Enamorarse de + person; de + el → del.", ["La novia se enamoró del novio en la facultad."]),
      wo("Al final de la noche nadie quería irse a casa.", "Irse with an infinitive: the se attaches to irse.", "At the end of the night nobody wanted to go home."),
    ]
  ),
  L(
    "reflexive-verbs-drill-3",
    "a2r-error-hunt-reflexive",
    "Error Hunt: Reflexive Slip-ups",
    "Missing se, the wrong pronoun, and possessives with body parts — fix the reflexive errors learners make.",
    "7 min",
    [
      sec(
        "Match the pronoun to the subject",
        "The reflexive pronoun always matches the subject: yo → me, tú → te, él/ella/usted → se, nosotros → nos, vosotros → os, ellos/ustedes → se.",
        [
          ["✗ Nosotros se levantamos. → ✓ Nosotros nos levantamos.", "We get up."],
          ["✗ Tú me duchas. → ✓ Tú te duchas.", "You shower."],
        ],
        [
          fb("Fix the pronoun.", "Mis hijos ___ acuestan a las nueve. (learner wrote: nos)", "se", "Ellos → se."),
        ]
      ),
      sec(
        "Body parts and clothing",
        "With reflexive verbs, Spanish uses the article for body parts and clothes, not a possessive.",
        [
          ["✗ Me lavo mis manos. → ✓ Me lavo las manos.", "I wash my hands."],
          ["✗ Se puso su chaqueta. → ✓ Se puso la chaqueta.", "He put on his jacket."],
        ],
        [
          mc(
            "Fix \"Me corté mi dedo.\"",
            ["Me corté el dedo.", "Corté mi dedo me.", "Me corté a mi dedo.", "No fix needed."],
            0,
            "Reflexive + article: me corté el dedo."
          ),
        ]
      ),
    ],
    [
      fb("Fix the verb.", "Todas las mañanas yo ___ a las siete. (learner wrote: levanto)", "me levanto", "Getting yourself up → levantarse → me levanto."),
      fb("Fix the pronoun.", "¿A qué hora ___ despertáis vosotros? (learner wrote: se)", "os", "Vosotros → os."),
      ms(
        "Which sentences contain an error?",
        ["Ella se peina el pelo.", "Nos vestimos rápido.", "Me cepillo mis dientes.", "Te llamas Pablo, ¿verdad?"],
        [2],
        "Me cepillo los dientes — article, not possessive."
      ),
      mc(
        "Which sentence means \"She calls herself Lola\" (her name is Lola)?",
        ["Se llama Lola.", "Llama a Lola.", "La llama Lola.", "Le llama Lola."],
        0,
        "Llamarse = to be called/named."
      ),
      mc(
        "Which is correct?",
        ["Siempre me olvido de las llaves.", "Siempre me olvido las llaves de.", "Siempre olvido me de las llaves.", "Siempre me olvida de las llaves yo."],
        0,
        "Olvidarse de + thing (or: olvido las llaves, without se and de)."
      ),
      toEs("They put on their coats and left.", "Se pusieron los abrigos y se fueron.", "Article, not possessive; irse → se fueron.", ["Ellos se pusieron los abrigos y se fueron.", "Se pusieron el abrigo y se fueron."]),
      wo("¿Por qué no te sientas un rato?", "Sentarse → te sientas (e→ie).", "Why don't you sit down for a while?"),
    ]
  ),
  L(
    "comparisons-superlatives-drill-3",
    "a2r-contrast-tan-tanto",
    "Contrast Clinic: Tan vs. Tanto",
    "Tan before adjectives and adverbs, tanto before nouns and after verbs — side by side until it's automatic.",
    "7 min",
    [
      sec(
        "Three patterns",
        "tan + adjective/adverb + como (tan alto como). tanto/a/os/as + noun + como (tantos libros como). verb + tanto como (trabajo tanto como tú).",
        [
          ["Eres tan simpático como tu hermano.", "You're as nice as your brother."],
          ["No tengo tanta paciencia como tú.", "I don't have as much patience as you."],
          ["Él come tanto como yo.", "He eats as much as I do."],
        ],
        [
          mc(
            "\"Hablas ___ rápido como un locutor.\"",
            ["tan", "tanto", "tanta", "tantos"],
            0,
            "Before an adverb (rápido) → tan."
          ),
        ]
      ),
      sec(
        "Tanto agrees with the noun",
        "Tanto becomes tanta, tantos or tantas to match the noun that follows it.",
        [
          ["tanto dinero · tanta gente · tantos problemas · tantas horas", "as much money · as many people · as many problems · as many hours"],
        ],
        [
          fb("Complete with tan or the right form of tanto.", "Nunca vi ___ nieve como este invierno.", "tanta", "La nieve → tanta."),
        ]
      ),
    ],
    [
      fb("Complete with tan or the right form of tanto.", "Este libro no es ___ interesante como el otro.", "tan", "Before an adjective → tan."),
      fb("Complete with tan or the right form of tanto.", "Tengo ___ amigos como tú.", "tantos", "Amigos → tantos."),
      fb("Complete with tan or the right form of tanto.", "Mi hermana no estudia ___ como yo.", "tanto", "After a verb → tanto (no agreement)."),
      fb("Complete with tan or the right form of tanto.", "¡Hay ___ personas en la playa!", "tantas", "Exclamation with a noun: ¡tantas personas! (so many people)."),
      mt(
        "Match each sentence to its meaning.",
        [
          ["¡Estoy tan cansado!", "I'm so tired!"],
          ["¡Tengo tanto trabajo!", "I have so much work!"],
          ["No duermo tanto como antes.", "I don't sleep as much as before."],
          ["Es tan alta como su padre.", "She's as tall as her father."],
        ],
        "Tan and tanto also work alone as intensifiers: so / so much."
      ),
      toEs("There aren't as many tourists as last year.", "No hay tantos turistas como el año pasado.", "Turistas is masculine plural here → tantos.", ["No hay tantos turistas como el año anterior."]),
      wo("Nadie cocina tan bien como mi abuela.", "Tan + adverb (bien) + como.", "Nobody cooks as well as my grandmother."),
    ]
  ),
  L(
    "comparisons-superlatives-drill-3",
    "a2r-mission-product-reviews",
    "Real-World Mission: Writing Product Reviews",
    "Rate headphones, phones and coffee makers — comparatives, superlatives and -ísimo for strong opinions.",
    "8 min",
    [
      sec(
        "Reading reviews",
        "Reviews love extremes. Besides el más … de, Spanish uses -ísimo for \"extremely\": caro → carísimo, bueno → buenísimo.",
        [
          ["Son los mejores auriculares que he tenido.", "They're the best headphones I've had."],
          ["La batería dura poquísimo.", "The battery lasts a very short time."],
          ["Es carísimo, pero vale la pena.", "It's extremely expensive, but it's worth it."],
        ],
        [
          mc(
            "\"La batería dura poquísimo\" is a…",
            ["negative comment", "positive comment", "neutral comment", "question"],
            0,
            "Poquísimo = very little → the battery doesn't last."
          ),
        ]
      ),
      sec(
        "Writing your own",
        "Drop the final vowel and add -ísimo/a/os/as. Watch spelling: rico → riquísimo, largo → larguísimo.",
        [
          ["Este café está riquísimo.", "This coffee is super tasty."],
          ["La pantalla es grandísima.", "The screen is huge."],
        ],
        [
          fb("Write the -ísimo form.", "El envío fue ___. (rápido)", "rapidísimo", "Rápido → rapidísimo (the accent moves to -ísimo)."),
        ]
      ),
    ],
    [
      fb("Write the -ísimo form.", "Las instrucciones son ___. (fácil)", "facilísimas", "Fácil → facilísimo, agreeing with instrucciones → facilísimas."),
      fb("Write the comparative.", "Este modelo es ___ que el anterior. (bueno)", "mejor", "Bueno → mejor."),
      fb("Write the superlative.", "Es el teléfono ___ ligero del mercado.", "más", "El más + adjective + de."),
      mt(
        "Match each review to its star rating.",
        [
          ["Es el peor producto que compré.", "1 star"],
          ["Está bien, pero es un poco caro.", "3 stars"],
          ["¡Buenísimo! Lo recomiendo.", "5 stars"],
          ["Funciona, pero hay mejores opciones.", "2 stars"],
        ],
        "Peor = worst, buenísimo = excellent."
      ),
      mc(
        "\"The coffee maker is less noisy than the old one.\"",
        ["La cafetera es menos ruidosa que la vieja.", "La cafetera es menos ruidosa como la vieja.", "La cafetera es más poco ruidosa que la vieja.", "La cafetera es menos ruidoso que la vieja."],
        0,
        "Menos + adjective (agreeing) + que."
      ),
      toEs("These are the most comfortable shoes in the store.", "Estos son los zapatos más cómodos de la tienda.", "Superlative with de for the group.", ["Estos son los zapatos más cómodos de toda la tienda."]),
      wo("Es la mejor compra que hice este año.", "La mejor + noun + que clause.", "It's the best purchase I made this year."),
    ]
  ),
  L(
    "future-tense-drill-3",
    "a2r-error-hunt-future-stems",
    "Error Hunt: Future Stems & Endings",
    "Tenerá, saliré, habrán muchos — the future-tense mistakes learners make, and how to fix them.",
    "7 min",
    [
      sec(
        "Irregular stems",
        "Twelve common verbs change their stem: tendr-, saldr-, pondr-, vendr-, podr-, sabr-, habr-, querr-, cabr-, har-, dir-. The endings never change.",
        [
          ["✗ Teneré tiempo. → ✓ Tendré tiempo.", "I'll have time."],
          ["✗ Haceré la cena. → ✓ Haré la cena.", "I'll make dinner."],
        ],
        [
          fb("Fix the stem.", "Mañana ___ temprano. (learner wrote: saliré)", "saldré", "Salir → saldr-."),
        ]
      ),
      sec(
        "Accents and habrá",
        "Every future form except nosotros has a written accent. And like hay, habrá never becomes plural: habrá muchas personas.",
        [
          ["✗ Habrán muchos invitados. → ✓ Habrá muchos invitados.", "There will be many guests."],
          ["✗ Llegare tarde. → ✓ Llegaré tarde.", "I'll arrive late."],
        ],
        [
          mc(
            "\"There will be two exams.\"",
            ["Habrá dos exámenes.", "Habrán dos exámenes.", "Hayrá dos exámenes.", "Haberá dos exámenes."],
            0,
            "Impersonal haber stays singular: habrá."
          ),
        ]
      ),
    ],
    [
      fb("Fix the stem.", "¿___ venir a mi fiesta? (learner wrote: Poderás)", "Podrás", "Poder → podr-."),
      fb("Fix the stem.", "Te ___ la verdad mañana. (learner wrote: deciré)", "diré", "Decir → dir-."),
      fb("Fix the stem.", "Mis padres ___ el sábado. (learner wrote: venirán)", "vendrán", "Venir → vendr-."),
      ms(
        "Which future forms are correct?",
        ["pondremos", "querré", "sabrá", "hacerás"],
        [0, 1, 2],
        "Hacer → har-: harás."
      ),
      mc(
        "Which sentence has NO error?",
        ["Nadie sabrá la respuesta.", "Nadie saberá la respuesta.", "Nadie sabrán la respuesta.", "Nadie sabra la respuesta."],
        0,
        "Saber → sabr- + -á, with the accent."
      ),
      toEs("We will put the table in the garden.", "Pondremos la mesa en el jardín.", "Poner → pondr-; nosotros has no accent.", ["Nosotros pondremos la mesa en el jardín."]),
      wo("¿Cuántas personas habrá en la reunión?", "Habrá stays singular even with a plural noun.", "How many people will there be at the meeting?"),
    ]
  ),
  L(
    "future-tense-drill-3",
    "a2r-dialogue-new-years-resolutions",
    "Dialogue Lab: New Year's Resolutions",
    "Friends share their resolutions for the new year — and tease each other about last year's.",
    "8 min",
    [
      sec(
        "The resolutions",
        "Resolutions are promises about the future. Notice the contrast with last year (preterite).",
        [
          ["—Este año haré ejercicio tres veces por semana.", "This year I'll exercise three times a week."],
          ["—¡Eso dijiste el año pasado! Y fuiste al gimnasio dos veces.", "That's what you said last year! And you went to the gym twice."],
          ["—Esta vez será diferente. Me levantaré temprano.", "This time it'll be different. I'll get up early."],
        ],
        [
          mc(
            "How many times did he go to the gym last year?",
            ["Twice", "Three times a week", "Never", "Every day"],
            0,
            "Fuiste al gimnasio dos veces."
          ),
          fb("Complete the resolution.", "Yo ___ a cocinar comida sana. (aprender)", "aprenderé", "Regular: aprender + -é."),
        ]
      ),
      sec(
        "Your turn",
        "Use the future to promise and the ir a + infinitive for plans you've already started.",
        [
          ["Ahorraré dinero para un viaje.", "I'll save money for a trip."],
          ["Ya estoy ahorrando; voy a ir a Japón en agosto.", "I'm already saving; I'm going to Japan in August."],
        ],
        [
          fb("Complete the resolution.", "Mis amigos y yo ___ un curso de baile. (hacer)", "haremos", "Hacer → har- + -emos."),
        ]
      ),
    ],
    [
      fb("Complete the resolution.", "Mi hermana dice que ___ menos tiempo en el móvil. (pasar)", "pasará", "Ella → pasará."),
      fb("Complete the resolution.", "Tú ___ salir más con tus amigos. (poder)", "podrás", "Poder → podr- + -ás."),
      mt(
        "Match each resolution to its meaning.",
        [
          ["Dejaré de fumar.", "I'll quit smoking."],
          ["Leeré un libro al mes.", "I'll read a book a month."],
          ["No diré mentiras.", "I won't tell lies."],
          ["Tendré más paciencia.", "I'll be more patient."],
        ],
        "Dejar de + infinitive = to stop doing something."
      ),
      mc(
        "\"Last year I said the same thing.\" (the friend replies)",
        ["El año pasado dije lo mismo.", "El año pasado diré lo mismo.", "El año pasado decía lo mismo una vez.", "El año que viene dije lo mismo."],
        0,
        "A single completed statement last year → preterite dije."
      ),
      toEs("This year I will learn to swim.", "Este año aprenderé a nadar.", "Aprender a + infinitive.", ["Este año voy a aprender a nadar.", "Este año yo aprenderé a nadar."]),
      toEn("Esta vez no me rendiré.", "This time I won't give up.", "Rendirse = to give up.", ["This time I will not give up."]),
      wo("El próximo año viajaremos juntos a Argentina.", "Time + future (nosotros) + adverb + destination.", "Next year we'll travel together to Argentina."),
    ]
  ),
  L(
    "por-vs-para-drill-3",
    "a2r-contrast-por-para-pairs",
    "Contrast Clinic: Por vs. Para, Pair by Pair",
    "The same sentence with por and with para — two different meanings. Learn to hear the difference.",
    "8 min",
    [
      sec(
        "Minimal pairs",
        "Read each pair. The only difference is the preposition — and it changes what the sentence means.",
        [
          ["Trabajo para mi padre.", "I work for my father. (he's my boss)"],
          ["Trabajo por mi padre.", "I work in my father's place / for his sake."],
          ["Salgo para Lima.", "I'm leaving for Lima. (destination)"],
          ["Paseo por Lima.", "I walk around Lima. (through)"],
        ],
        [
          mc(
            "\"Compré flores por ti\" most likely means…",
            ["I bought flowers because of you / on your behalf.", "I bought flowers to give to you.", "I bought flowers near you.", "I bought flowers before you."],
            0,
            "Por = cause or on behalf of. Para ti would mean the flowers are a gift for you."
          ),
        ]
      ),
      sec(
        "Time: por vs. para",
        "Para + time = a deadline (by). Por + time = duration or a vague time of day (for, in).",
        [
          ["Lo necesito para el lunes.", "I need it by Monday."],
          ["Estuve allí por una semana.", "I was there for a week."],
          ["Estudio por la tarde.", "I study in the afternoon."],
        ],
        [
          fb("Complete with por or para.", "La tarea es ___ el jueves.", "para", "Deadline → para."),
        ]
      ),
    ],
    [
      mt(
        "Match each sentence to its meaning.",
        [
          ["Es para ti.", "It's (meant) for you."],
          ["Lo hice por ti.", "I did it for your sake."],
          ["Voy para el parque.", "I'm heading toward the park."],
          ["Corro por el parque.", "I run through the park."],
        ],
        "Para points to a goal or recipient; por points to a cause or a path."
      ),
      fb("Complete with por or para.", "Te llamo ___ teléfono esta noche.", "por", "Means of communication → por."),
      fb("Complete with por or para.", "___ ser tan joven, habla muy bien.", "Para", "Para + comparison with expectations: for someone so young."),
      fb("Complete with por or para.", "Me multaron ___ aparcar mal.", "por", "Cause/reason → por."),
      ms(
        "In which sentences is para correct?",
        ["Estudio para ser enfermera.", "Gracias para la invitación.", "Este regalo es para Luis.", "Viajé para toda Europa."],
        [0, 2],
        "Gracias por…; viajar por (through) Europa."
      ),
      toEs("I changed my shift for yours because of the concert.", "Cambié mi turno por el tuyo por el concierto.", "Exchange → por; cause → por.", ["Cambié mi turno por el tuyo a causa del concierto."]),
      wo("Para mí, viajar por Sudamérica fue una experiencia única.", "Para mí = in my opinion; por = through.", "For me, traveling around South America was a unique experience."),
    ]
  ),
  L(
    "por-vs-para-drill-3",
    "a2r-mission-sending-package",
    "Real-World Mission: Sending a Package",
    "At the post office: who it's for, how it goes, how much it costs and when it arrives — por and para at every step.",
    "7 min",
    [
      sec(
        "At the counter",
        "Read the exchange, noting every por and para.",
        [
          ["—Quiero mandar este paquete para mi hermana en Chile.", "I want to send this package to my sister in Chile."],
          ["—¿Por avión o por barco?", "By air or by sea?"],
          ["—Por avión. Lo necesita para su cumpleaños, el día diez.", "By air. She needs it for her birthday, on the tenth."],
          ["—Son treinta euros por el envío urgente.", "That's thirty euros for the express shipping."],
        ],
        [
          ms(
            "Which uses of por appear in the dialogue?",
            ["means of transport", "exchange (price)", "destination", "deadline"],
            [0, 1],
            "Por avión (means), treinta euros por el envío (exchange). Destination and deadline use para."
          ),
        ]
      ),
    ],
    [
      fb("Complete with por or para.", "El paquete es ___ mi sobrino.", "para", "Recipient → para."),
      fb("Complete with por or para.", "Lo mando ___ correo certificado.", "por", "Means → por."),
      fb("Complete with por or para.", "¿Llegará ___ el viernes?", "para", "Deadline → para."),
      fb("Complete with por or para.", "Pagué diez euros ___ la caja.", "por", "Exchange → por."),
      mc(
        "\"The package went through three countries.\"",
        ["El paquete pasó por tres países.", "El paquete pasó para tres países.", "El paquete pasó en tres países por.", "El paquete pasó a tres países para."],
        0,
        "Movement through → por."
      ),
      toEs("This box is for my grandmother and it has to arrive by Friday.", "Esta caja es para mi abuela y tiene que llegar para el viernes.", "Recipient and deadline → para.", ["Esta caja es para mi abuela y debe llegar para el viernes.", "Esta caja es para mi abuela y tiene que llegar antes del viernes."]),
      wo("Gracias por su ayuda, ¿dónde firmo para recogerlo?", "Gracias por + noun; para + infinitive for purpose.", "Thanks for your help — where do I sign to pick it up?"),
    ]
  ),
  L(
    "personal-a-negation-mente-drill-3",
    "a2r-dialogue-grumpy-roommate",
    "Dialogue Lab: The Grumpy Roommate",
    "Your roommate says no to everything. Practice negatives, personal a and adverbs in a very negative conversation.",
    "7 min",
    [
      sec(
        "Nothing, nobody, never",
        "Your roommate answers every question with a double negative.",
        [
          ["—¿Quieres algo de comer? —No, no quiero nada.", "Do you want something to eat? — No, I don't want anything."],
          ["—¿Viste a alguien en la cocina? —No, no vi a nadie.", "Did you see anybody in the kitchen? — No, I didn't see anybody."],
          ["—¿Sales alguna vez? —No, nunca salgo.", "Do you ever go out? — No, I never go out."],
        ],
        [
          fb("Answer like the roommate.", "—¿Llamaste a alguien? —No, no llamé a ___.", "nadie", "Alguien → nadie (keeping the personal a)."),
        ]
      ),
      sec(
        "How does he say it?",
        "Adverbs in -mente describe his attitude.",
        [
          ["Contesta secamente y cierra la puerta ruidosamente.", "He answers curtly and shuts the door noisily."],
        ],
        [
          fb("Complete with an adverb (tranquilo).", "Yo le hablo ___ para no discutir.", "tranquilamente", "Tranquila + -mente."),
        ]
      ),
    ],
    [
      fb("Answer like the roommate.", "—¿Tienes algún plan para el sábado? —No, no tengo ___.", "ninguno", "Standing alone, ningún becomes ninguno."),
      fb("Answer like the roommate.", "—Yo también estoy cansado. —Pues yo ___.", "no", "Disagreeing: pues yo no (well, I'm not)."),
      mc(
        "\"Do you know anyone in this city?\" — the roommate's answer:",
        ["No conozco a nadie.", "No conozco nadie.", "Conozco a nadie.", "No conozco a alguien."],
        0,
        "No + verb + a nadie."
      ),
      ms(
        "Which replies are grammatically correct?",
        ["Nunca como nada por la mañana.", "No quiero ni café ni té.", "Nadie no me llamó.", "Tampoco me gusta."],
        [0, 1, 3],
        "When nadie comes before the verb, it stands alone without no → Nadie me llamó."
      ),
      toEs("Nobody ever helps me with anything.", "Nadie me ayuda nunca con nada.", "Triple negative is normal in Spanish.", ["Nunca nadie me ayuda con nada.", "Nadie nunca me ayuda con nada."]),
      wo("Honestamente, no tengo ganas de ver a nadie hoy.", "Sentence adverb + tener ganas de + personal a + nadie.", "Honestly, I don't feel like seeing anyone today."),
    ]
  ),
  L(
    "personal-a-negation-mente-drill-3",
    "a2r-spiral-a-negation-adverbs",
    "Spiral Review: Personal A, Negatives & Adverbs",
    "A cumulative mix of lessons 23–27 with the past tenses and pronouns from earlier in A2.",
    "8 min",
    [
      sec(
        "Mixed recall",
        "Each checkpoint combines one of the newer topics with an older one.",
        [
          ["Ayer no vi a nadie en la biblioteca.", "Yesterday I didn't see anybody at the library. (negation + personal a + preterite)"],
          ["Mi abuelo caminaba lentamente por el parque.", "My grandfather used to walk slowly through the park. (adverb + imperfect + por)"],
        ],
        [
          fb("Complete with the preterite and a negative word.", "Anoche no ___ nada en la tele. (ver, yo)", "vi", "Ver → vi."),
          fb("Complete with the personal a.", "Cuando era niño, visitaba ___ mis primos cada verano.", "a", "Specific people as direct object → a."),
        ]
      ),
    ],
    [
      fb("Complete with the adverb (perfecto).", "Lo explicaste ___.", "perfectamente", "Perfecta + -mente."),
      fb("Complete with the direct object pronoun.", "¿A Juan? No ___ vi en la fiesta.", "lo", "A Juan → lo."),
      mc(
        "\"I never used to call anybody.\"",
        ["Nunca llamaba a nadie.", "Nunca llamé nadie.", "No llamaba a alguien nunca.", "Nunca llamaba nadie a."],
        0,
        "Habit → imperfect; nunca … a nadie."
      ),
      ms(
        "Which sentences are correct?",
        ["Normalmente no invito a nadie a casa.", "Busqué a mi perro por todas partes.", "Tampoco no quiero ir.", "Hablé claramente con el jefe."],
        [0, 1, 3],
        "Tampoco before the verb stands alone: Tampoco quiero ir."
      ),
      mt(
        "Match each adjective to its adverb.",
        [
          ["feliz", "felizmente"],
          ["rápido", "rápidamente"],
          ["general", "generalmente"],
          ["último", "últimamente"],
        ],
        "Adjectives that don't change for gender just add -mente; others use the feminine form."
      ),
      toEs("Fortunately, nobody saw us.", "Afortunadamente, nadie nos vio.", "Nadie before the verb; nos before the conjugated verb.", ["Por suerte, nadie nos vio."]),
      wo("Últimamente no veo a ninguno de mis antiguos compañeros.", "Adverb + no + verb + personal a + ninguno de.", "Lately I don't see any of my old classmates."),
    ]
  ),
  L(
    "a2-vocabulary-practice-5",
    "a2r-word-web-travel",
    "Word Web: Travel & Trips",
    "Airports, hotels and luggage — sort A2's travel vocabulary and use it in the past tense.",
    "7 min",
    [
      sec(
        "Before, during and after",
        "Organize travel words by stage: planning (reservar, el billete, el pasaporte), traveling (el vuelo, la maleta, el andén, facturar), arriving (el alojamiento, la recepción, deshacer la maleta).",
        [
          ["Reservé el vuelo y el hotel por internet.", "I booked the flight and the hotel online."],
          ["En el aeropuerto facturamos las maletas.", "At the airport we checked our bags."],
        ],
        [
          ms(
            "Which words belong at the airport?",
            ["la puerta de embarque", "el control de seguridad", "la tarjeta de embarque", "la receta"],
            [0, 1, 2],
            "La receta is a prescription (or a recipe)."
          ),
        ]
      ),
      sec(
        "Trip problems",
        "Useful verbs for when travel goes wrong: perder (to miss/lose), retrasarse (to be delayed), cancelar.",
        [
          ["Perdimos el tren porque el taxi llegó tarde.", "We missed the train because the taxi arrived late."],
          ["El vuelo se retrasó dos horas.", "The flight was delayed two hours."],
        ],
        [
          fb("Complete the sentence.", "La aerolínea ___ el vuelo por la nieve. (cancelar, preterite)", "canceló", "La aerolínea = ella → canceló."),
        ]
      ),
    ],
    [
      mc("Odd one out:", ["la maleta", "la mochila", "el equipaje de mano", "el andén"], 3, "The first three are things you carry; el andén is the train platform."),
      mt(
        "Match each word to its meaning.",
        [
          ["el billete de ida y vuelta", "round-trip ticket"],
          ["el alojamiento", "accommodation"],
          ["el vuelo directo", "direct flight"],
          ["la aduana", "customs"],
        ],
        "Core A2 travel vocabulary."
      ),
      fb("Complete the sentence.", "Antes de viajar al extranjero, necesitas un ___ válido.", "pasaporte", "Traveling abroad → pasaporte."),
      fb("Complete the sentence.", "Al llegar al hotel, ___ la maleta y dormimos. (deshacer, nosotros, preterite)", "deshicimos", "Deshacer follows hacer: deshicimos."),
      toEs("We missed the flight and slept at the airport.", "Perdimos el vuelo y dormimos en el aeropuerto.", "Perder = to miss (a flight, a train).", []),
      toEn("¿Me puede decir a qué hora sale el próximo tren?", "Can you tell me what time the next train leaves?", "Polite usted question; próximo = next.", ["Could you tell me what time the next train leaves?"]),
      wo("El vuelo de vuelta fue mucho más tranquilo que el de ida.", "Comparative with el de ida (the one going there).", "The return flight was much calmer than the outbound one."),
    ]
  ),
  L(
    "a2-vocabulary-practice-5",
    "a2r-word-web-health",
    "Word Web: Health & the Doctor",
    "Symptoms, remedies and a doctor's visit — A2's health words in conversation.",
    "7 min",
    [
      sec(
        "Describing symptoms",
        "Doler works like gustar: me duele la cabeza, me duelen los pies. Tener also covers many symptoms: tener fiebre, tener tos, tener gripe.",
        [
          ["Me duele la garganta y tengo fiebre.", "My throat hurts and I have a fever."],
          ["A mi hijo le duelen los oídos.", "My son's ears hurt."],
        ],
        [
          fb("Complete with doler.", "Después de correr, me ___ las piernas.", "duelen", "Las piernas (plural) → duelen."),
        ]
      ),
      sec(
        "The doctor's advice",
        "Doctors give advice with tener que, deber, or commands.",
        [
          ["Tiene que descansar y beber mucha agua.", "You have to rest and drink lots of water."],
          ["Tome esta pastilla dos veces al día.", "Take this pill twice a day."],
        ],
        [
          mc(
            "What does \"dos veces al día\" mean?",
            ["twice a day", "every two days", "for two days", "two days ago"],
            0,
            "Vez = time (occurrence): dos veces al día."
          ),
        ]
      ),
    ],
    [
      mt(
        "Match each symptom to a remedy.",
        [
          ["Tengo tos.", "un jarabe"],
          ["Me duele la cabeza.", "una aspirina"],
          ["Me corté el dedo.", "una tirita"],
          ["Tengo una infección.", "un antibiótico"],
        ],
        "Jarabe = cough syrup; tirita = adhesive bandage."
      ),
      mc("Odd one out:", ["la fiebre", "la tos", "el estornudo", "la farmacia"], 3, "Fever, cough and sneeze are symptoms; la farmacia is a place."),
      fb("Complete with doler.", "¿Te ___ algo?", "duele", "Algo (something) is singular → duele."),
      fb("Complete the sentence.", "Estoy resfriado, así que no puedo dejar de ___. (estornudar)", "estornudar", "Dejar de + infinitive."),
      toEs("My back has hurt since yesterday.", "Me duele la espalda desde ayer.", "Doler + singular body part; desde = since.", ["Me duele la espalda desde ayer por la mañana."]),
      toEn("El médico me recetó unas pastillas para la alergia.", "The doctor prescribed me some pills for the allergy.", "Recetar = to prescribe.", ["The doctor prescribed me some allergy pills.", "The doctor prescribed some pills for my allergy."]),
      wo("Si tienes fiebre, debes quedarte en la cama.", "Si + present, deber + infinitive (reflexive quedarse attached).", "If you have a fever, you should stay in bed."),
    ]
  ),
  L(
    "a2-vocabulary-practice-5",
    "a2r-word-web-tech",
    "Word Web: Phones, Messages & Screens",
    "Charge, download, send, delete — the vocabulary of everyday technology with indirect objects.",
    "7 min",
    [
      sec(
        "Everyday tech verbs",
        "Many of these verbs take indirect objects: mandar/enviar un mensaje a alguien, reenviar, contestar.",
        [
          ["Te mandé un mensaje pero no me contestaste.", "I sent you a message but you didn't answer me."],
          ["Tengo que cargar el móvil; me queda poca batería.", "I have to charge my phone; I have little battery left."],
        ],
        [
          mt(
            "Match each verb to its meaning.",
            [
              ["descargar", "to download"],
              ["borrar", "to delete"],
              ["cargar", "to charge"],
              ["reenviar", "to forward"],
            ],
            "Core A2 tech verbs."
          ),
        ]
      ),
      sec(
        "Regional words",
        "The same device goes by different names: el móvil (Spain), el celular (Latin America). La computadora (Latin America), el ordenador (Spain).",
        [
          ["Se me olvidó el celular en casa.", "I left my cell phone at home."],
        ],
        [
          mc(
            "In Spain, a computer is usually called…",
            ["el ordenador", "la computadora", "el celular", "la pantalla"],
            0,
            "Spain: ordenador. Latin America: computadora."
          ),
        ]
      ),
    ],
    [
      fb("Complete the sentence.", "No tengo tu número. ¿Me lo ___ por mensaje? (mandar, tú)", "mandas", "¿Me lo mandas? = Can you send it to me?"),
      fb("Complete the sentence.", "Mi contraseña es muy larga y siempre la ___. (olvidar, yo)", "olvido", "Olvidar → olvido; la = la contraseña."),
      mc("Odd one out:", ["la pantalla", "el teclado", "el ratón", "el sello"], 3, "El sello is a postage stamp; the rest are computer parts."),
      mc(
        "\"The screen of my phone broke.\"",
        ["Se me rompió la pantalla del móvil.", "Me rompí la pantalla del móvil a mí.", "Rompió la pantalla del móvil me.", "La pantalla me rompió del móvil."],
        0,
        "Se me rompió = it broke on me (accidentally)."
      ),
      toEs("Can you send me the photo by email?", "¿Me puedes mandar la foto por correo?", "Me (to me); por correo = by email.", ["¿Me puedes enviar la foto por correo?", "¿Puedes mandarme la foto por correo?", "¿Me mandas la foto por correo electrónico?", "¿Me puedes mandar la foto por email?"]),
      toEn("No tengo cobertura aquí, te llamo luego.", "I don't have signal here, I'll call you later.", "Cobertura = cell coverage/signal.", ["I have no signal here, I'll call you later."]),
      wo("Borré todas las fotos sin querer.", "Sin querer = by accident.", "I deleted all the photos by accident."),
    ]
  ),
  L(
    "a2-vocabulary-practice-5",
    "a2r-word-web-body-routine",
    "Word Web: Body & Daily Routine",
    "Body parts and routine verbs together — who does what to which part, and when.",
    "7 min",
    [
      sec(
        "Routine verbs and their body parts",
        "Pair each routine verb with the body part it goes with — and remember the article, not the possessive.",
        [
          ["Me cepillo los dientes.", "I brush my teeth."],
          ["Se lava la cara con agua fría.", "She washes her face with cold water."],
          ["Nos secamos el pelo.", "We dry our hair."],
        ],
        [
          mt(
            "Match each verb to the body part it usually goes with.",
            [
              ["cepillarse", "los dientes"],
              ["peinarse", "el pelo"],
              ["afeitarse", "la barba"],
              ["pintarse", "las uñas"],
            ],
            "Pintarse las uñas = to paint one's nails."
          ),
        ]
      ),
    ],
    [
      mc("Odd one out:", ["el codo", "la rodilla", "el tobillo", "el cepillo"], 3, "Elbow, knee, ankle are body parts; el cepillo is a brush."),
      fb("Complete the sentence.", "Hace frío; ponte los guantes en las ___.", "manos", "Gloves go on your hands."),
      fb("Complete the sentence.", "Después de la ducha, ___ seco el pelo. (yo)", "me", "Secarse → me seco."),
      ms(
        "Which are parts of the face?",
        ["la nariz", "la boca", "las cejas", "el hombro"],
        [0, 1, 2],
        "El hombro is the shoulder."
      ),
      toEs("My brother shaves every morning.", "Mi hermano se afeita todas las mañanas.", "Afeitarse → se afeita.", ["Mi hermano se afeita cada mañana."]),
      toEn("Se me cansan los ojos si leo mucho.", "My eyes get tired if I read a lot.", "Se me cansan = they get tired on me.", ["My eyes get tired when I read a lot."]),
      wo("Antes de dormir me quito las lentillas.", "Quitarse = to take off; the article replaces the possessive.", "Before sleeping I take out my contact lenses."),
    ]
  ),
  L(
    "a2-vocabulary-practice-5",
    "a2r-word-web-work",
    "Word Web: Work & Future Plans",
    "Jobs, interviews and career goals — A2's work vocabulary with the future tense.",
    "7 min",
    [
      sec(
        "The job hunt",
        "Key words: buscar trabajo, el currículum, la entrevista, el sueldo/salario, el puesto, contratar, despedir.",
        [
          ["Mandé mi currículum a cinco empresas.", "I sent my CV to five companies."],
          ["Mañana tengo una entrevista para un puesto de diseñador.", "Tomorrow I have an interview for a designer position."],
        ],
        [
          mt(
            "Match each word to its meaning.",
            [
              ["el sueldo", "salary"],
              ["contratar", "to hire"],
              ["despedir", "to fire"],
              ["el puesto", "position/post"],
            ],
            "Core A2 work vocabulary."
          ),
        ]
      ),
      sec(
        "Future goals",
        "Talk about your career goals with the future and with querer/esperar + infinitive.",
        [
          ["En cinco años seré jefa de mi departamento.", "In five years I'll be head of my department."],
          ["Espero ganar más dinero.", "I hope to earn more money."],
        ],
        [
          fb("Complete the goal.", "Algún día ___ mi propia empresa. (tener, yo)", "tendré", "Tener → tendr- + -é."),
        ]
      ),
    ],
    [
      mc("Odd one out:", ["el jefe", "el empleado", "el compañero", "el sueldo"], 3, "The first three are people at work; el sueldo is the salary."),
      fb("Complete the sentence.", "La empresa ___ a diez personas nuevas el año pasado. (contratar)", "contrató", "A completed event last year → contrató."),
      fb("Complete the sentence.", "Trabajo a tiempo ___: solo cuatro horas al día.", "parcial", "A tiempo parcial = part-time."),
      mc(
        "\"I'll ask for a raise.\"",
        ["Pediré un aumento de sueldo.", "Pedí un aumento de sueldo mañana.", "Pediré una subida de jefe.", "Pido un aumento ayer."],
        0,
        "Future pediré + un aumento (de sueldo)."
      ),
      toEs("They fired him because he always arrived late.", "Lo despidieron porque siempre llegaba tarde.", "Preterite for the firing; imperfect for the repeated lateness.", ["Le despidieron porque siempre llegaba tarde."]),
      toEn("¿Cuánto tiempo llevas trabajando aquí?", "How long have you been working here?", "Llevar + time + gerund = to have been doing.", ["How long have you worked here?"]),
      wo("El próximo año buscaré un trabajo en el extranjero.", "Future + object + place.", "Next year I'll look for a job abroad."),
    ]
  ),
  L(
    "a2-vocabulary-practice-5",
    "a2r-word-web-weather-seasons",
    "Word Web: Weather & Seasons",
    "Rain, snow, storms and seasons — describe weather now, in the past, and in the forecast.",
    "7 min",
    [
      sec(
        "Three ways to talk about weather",
        "Hace + noun (hace frío), está + adjective (está nublado), and weather verbs (llueve, nieva, truena).",
        [
          ["En invierno nieva mucho y hace un frío terrible.", "In winter it snows a lot and it's terribly cold."],
          ["Hoy está nublado, pero no llueve.", "Today it's cloudy, but it isn't raining."],
        ],
        [
          ms(
            "Which are correct?",
            ["Hace viento.", "Está lloviendo.", "Hace nublado.", "Nieva en la montaña."],
            [0, 1, 3],
            "Nublado is an adjective → está nublado."
          ),
        ]
      ),
      sec(
        "Weather in the past",
        "Weather as background → imperfect (hacía sol). Weather as an event in the story → preterite (hubo una tormenta).",
        [
          ["Cuando salimos, hacía sol.", "When we went out, it was sunny."],
          ["Anoche hubo una tormenta enorme.", "Last night there was a huge storm."],
        ],
        [
          fb("Complete the sentence.", "Ayer ___ todo el día y no salimos. (llover)", "llovió", "A bounded period (all day yesterday) → preterite."),
        ]
      ),
    ],
    [
      mt(
        "Match each season to a typical sentence.",
        [
          ["la primavera", "Florecen los árboles."],
          ["el verano", "Hace mucho calor."],
          ["el otoño", "Caen las hojas."],
          ["el invierno", "Nieva en las montañas."],
        ],
        "Seasons are masculine except la primavera."
      ),
      mc("Odd one out:", ["el trueno", "el relámpago", "la tormenta", "el paraguas"], 3, "Thunder, lightning, storm; el paraguas is an umbrella."),
      fb("Complete the forecast.", "Mañana ___ mucho viento en la costa. (hacer, future)", "hará", "Hacer → hará."),
      fb("Complete the sentence.", "De niño, en mi pueblo ___ cada invierno. (nevar, imperfect)", "nevaba", "A past habit → imperfect."),
      toEs("It was cold and cloudy when we arrived.", "Hacía frío y estaba nublado cuando llegamos.", "Background weather → imperfect; arrival → preterite.", ["Hacía frío y estaba nublado cuando nosotros llegamos."]),
      toEn("Dicen que el fin de semana hará buen tiempo.", "They say that the weather will be nice this weekend.", "Hará buen tiempo = the weather will be nice.", ["They say the weather will be good at the weekend.", "They say it will be nice this weekend."]),
      wo("¡Llévate el paraguas, que va a llover!", "Command llévate + reason with que.", "Take your umbrella, it's going to rain!"),
    ]
  ),
  L(
    "a2-comprehensive-review-3",
    "a2r-challenge-big-error-hunt",
    "A2 Challenge: The Big Error Hunt",
    "The final A2 challenge series begins. One error per sentence, from every corner of A2.",
    "9 min",
    [
      sec(
        "The A2 checklist",
        "Run through it for every sentence: preterite or imperfect? irregular stem? pronoun choice and placement? reflexive pronoun? comparison form? future stem? por or para? personal a? double negative?",
        [
          ["✗ Ayer yo iba al cine con Ana. → ✓ Ayer fui al cine con Ana.", "Yesterday I went to the movies with Ana."],
          ["✗ Le vi en la calle. → ✓ Lo vi en la calle.", "I saw him in the street."],
        ],
        [
          mc(
            "\"Mañana saliré temprano.\" What's wrong?",
            ["Salir's future stem is saldr-: saldré.", "Mañana needs the preterite.", "Temprano should be temprana.", "Nothing."],
            0,
            "Salir → saldré."
          ),
          mc(
            "\"Busco mi hermano.\" What's wrong?",
            ["It needs personal a: busco a mi hermano.", "Busco should be busqué.", "Mi should be mí.", "Nothing."],
            0,
            "Looking for a specific person → a."
          ),
        ]
      ),
    ],
    [
      fb("Fix it.", "Gracias ___ ayudarme con la mudanza. (learner wrote: para)", "por", "Gracias por."),
      fb("Fix it.", "Nosotros ___ levantamos a las seis. (learner wrote: se)", "nos", "Nosotros → nos."),
      fb("Fix it.", "Mi hermano es ___ que yo. (learner wrote: más mayor)", "mayor", "Mayor is already comparative."),
      fb("Fix it.", "No vino ___ a la reunión. (learner wrote: alguien)", "nadie", "After no + verb → nadie."),
      ms(
        "Which sentences are correct?",
        ["Cuando era pequeño, tenía un gato.", "Las compré ayer.", "Hablaba tranquilamente y claramente.", "Habrá mucha gente."],
        [0, 1, 3],
        "In a series, only the last adverb takes -mente: tranquila y claramente."
      ),
      mc(
        "Which sentence has NO error?",
        ["Anoche vimos una película y nos gustó mucho.", "Anoche veíamos una película y nos gustó mucho una vez.", "Anoche vimos una película y nos gustaron mucho.", "Anoche vimos una película y les gustó a nos."],
        0,
        "A single event → vimos; one película → gustó."
      ),
      toEs("I didn't know that you were Mexican.", "No sabía que eras mexicano.", "Both are states → imperfect.", ["No sabía que eras mexicana.", "Yo no sabía que eras mexicano.", "Yo no sabía que eras mexicana."]),
      wo("Se lo expliqué a mi jefe pero no me entendió.", "Se lo (to him, it) + preterite; me before entendió.", "I explained it to my boss but he didn't understand me."),
    ]
  ),
  L(
    "a2-comprehensive-review-3",
    "a2r-challenge-dialogue-marathon",
    "A2 Challenge: Dialogue Marathon",
    "Four scenes, four conversations — a doctor's visit, a lost bag, a job interview and a reunion.",
    "9 min",
    [
      sec(
        "Scene 1: At the doctor",
        "Symptoms with doler and tener; advice with tener que.",
        [
          ["—¿Qué le pasa? —Me duele el estómago desde ayer.", "What's wrong? — My stomach has hurt since yesterday."],
          ["—¿Qué comió anoche? —Comí mariscos en un restaurante.", "What did you eat last night? — I ate seafood at a restaurant."],
        ],
        [
          fb("Complete the doctor's advice.", "Tiene que ___ mucha agua y descansar. (beber)", "beber", "Tener que + infinitive."),
        ]
      ),
      sec(
        "Scene 2: The lost bag",
        "Describing an object in the past, with pronouns.",
        [
          ["—Perdí mi mochila en el tren. —¿Cómo era?", "I lost my backpack on the train. — What did it look like?"],
          ["—Era negra y tenía un llavero rojo.", "It was black and had a red keychain."],
          ["—¡Aquí está! Alguien la trajo esta mañana.", "Here it is! Someone brought it in this morning."],
        ],
        [
          mc(
            "In \"Alguien la trajo,\" la refers to…",
            ["la mochila", "la mañana", "la estación", "la chica"],
            0,
            "La replaces la mochila."
          ),
        ]
      ),
      sec(
        "Scene 3: The job interview",
        "Past experience (preterite), past habits (imperfect) and future plans.",
        [
          ["—¿Dónde trabajó antes? —Trabajé tres años en un hotel.", "Where did you work before? — I worked for three years in a hotel."],
          ["—¿Y qué hará si le damos el puesto? —Aprenderé rápido, se lo prometo.", "And what will you do if we give you the job? — I'll learn fast, I promise."],
        ],
        [
          fb("Complete the answer.", "En el hotel, yo ___ con clientes de todo el mundo. (hablar, habit)", "hablaba", "A repeated past activity → imperfect."),
        ]
      ),
    ],
    [
      mc(
        "Scene 4: A reunion. \"¡Cuánto tiempo! No has cambiado nada.\" What does it mean?",
        ["Long time no see! You haven't changed at all.", "How much time do you have? Nothing changed.", "What time is it? Change nothing.", "It's been a while; you changed everything."],
        0,
        "¡Cuánto tiempo! = It's been ages!"
      ),
      fb("Complete the reunion.", "La última vez que te ___ fue en 2015. (ver, yo)", "vi", "A single past occasion → vi."),
      fb("Complete the reunion.", "¡Ahora estás ___ alta que tu madre!", "más", "Más … que."),
      mt(
        "Match each line to a reply.",
        [
          ["¿Qué te pasó en la pierna?", "Me caí esquiando."],
          ["¿Qué harás este verano?", "Iré a la playa con mi familia."],
          ["¿Conoces a mi novio?", "No, no lo conozco."],
          ["¿Para quién es el regalo?", "Es para mi sobrina."],
        ],
        "Preterite, future, direct object pronoun, para for recipients."
      ),
      toEs("What did you use to do on weekends when you lived in Madrid?", "¿Qué hacías los fines de semana cuando vivías en Madrid?", "Past habits → imperfect.", ["¿Qué hacías los fines de semana cuando vivías en Madrid?"]),
      wo("Me alegro mucho de verte después de tanto tiempo.", "Alegrarse de + infinitive; tanto agrees with tiempo.", "I'm really happy to see you after so long."),
    ]
  ),
  L(
    "a2-comprehensive-review-3",
    "a2r-challenge-translation-relay",
    "A2 Challenge: Translation Relay",
    "Translate your way through every A2 topic, alternating directions.",
    "9 min",
    [
      sec(
        "Warm-up",
        "Before you translate, identify the trap: tense choice, pronoun, por/para, or a structure English doesn't have.",
        [
          ["I was sleeping when you called. → Dormía cuando llamaste.", "(interrupted action)"],
          ["I bought it for you. → Lo compré para ti.", "(pronoun + para)"],
        ],
        [
          toEs("We used to go to the beach every summer.", "Íbamos a la playa todos los veranos.", "Habit → imperfect of ir.", ["Íbamos a la playa cada verano.", "Nosotros íbamos a la playa todos los veranos."]),
        ]
      ),
    ],
    [
      toEs("Yesterday I woke up late and missed the bus.", "Ayer me desperté tarde y perdí el autobús.", "Two completed events → preterite.", ["Ayer me levanté tarde y perdí el autobús.", "Ayer me desperté tarde y perdí el bus."]),
      toEs("This restaurant is better than the other one.", "Este restaurante es mejor que el otro.", "Bueno → mejor.", []),
      toEs("I'll call you tomorrow to tell you the news.", "Te llamaré mañana para contarte la noticia.", "Future + para + infinitive with attached pronoun.", ["Te llamaré mañana para decirte la noticia.", "Mañana te llamaré para contarte la noticia.", "Te voy a llamar mañana para contarte la noticia."]),
      toEn("Nunca le dije nada a nadie.", "I never told anybody anything.", "Spanish stacks negatives; English uses one.", ["I never said anything to anyone.", "I never told anyone anything."]),
      toEn("Se me olvidaron las llaves en el coche.", "I forgot my keys in the car.", "Se me olvidaron = I (accidentally) forgot.", ["I left my keys in the car.", "I forgot the keys in the car."]),
      toEn("Estuvimos en Chile por dos semanas.", "We were in Chile for two weeks.", "Por for duration; a closed period → preterite.", ["We were in Chile for two weeks."]),
      toEn("Mientras mi madre cocinaba, mi padre ponía la mesa.", "While my mother was cooking, my father was setting the table.", "Two simultaneous background actions → imperfect.", ["While my mom cooked, my dad set the table.", "While my mother cooked, my father set the table."]),
    ]
  ),
  L(
    "a2-comprehensive-review-3",
    "a2r-challenge-build-a-sentence",
    "A2 Challenge: Build-a-Sentence",
    "Long A2 sentences with pronouns, two past tenses and connectors — put every piece where it belongs.",
    "8 min",
    [
      sec(
        "The blueprint gets longer",
        "A2 sentences often join two clauses: background + event (cuando, mientras), cause + result (porque, así que), or contrast (pero, aunque). Build each clause, then connect them.",
        [
          ["Cuando llegué a casa, mi hermana ya estaba dormida.", "When I got home, my sister was already asleep."],
          ["Como no tenía dinero, no le compré nada.", "Since I didn't have money, I didn't buy him anything."],
        ],
        [
          wo("Mientras esperábamos el autobús, empezó a llover.", "Mientras + imperfect, then the preterite event.", "While we were waiting for the bus, it started to rain."),
        ]
      ),
    ],
    [
      wo("Le regalé a mi madre las flores que compré en el mercado.", "Indirect object doubled (le … a mi madre) + relative clause.", "I gave my mother the flowers I bought at the market."),
      wo("Nunca había visto tanta gente en la plaza.", "Nunca + pluperfect (you'll see this in B1) + tanta agreeing with gente.", "I had never seen so many people in the square."),
      wo("Este verano iremos a la costa para descansar un poco.", "Future + destination + para + infinitive.", "This summer we'll go to the coast to rest a bit."),
      wo("Mi abuela cocina mejor que nadie en la familia.", "Mejor que nadie = better than anyone.", "My grandmother cooks better than anyone in the family."),
      wo("¿Por qué no me dijiste que te ibas a mudar?", "Preterite dijiste + imperfect of ir a for a past plan.", "Why didn't you tell me you were going to move?"),
      mc(
        "Which sentence is built correctly?",
        ["Ayer me lavé el pelo y me lo sequé rápidamente.", "Ayer lavé me el pelo y sequé me lo rápidamente.", "Ayer me lavé mi pelo y lo me sequé rápido.", "Ayer me lavaba el pelo y me lo secé rápidamente."],
        0,
        "Reflexive pronouns before the verb, article with body parts, me lo in the right order."
      ),
      fb("Finish the sentence.", "No fui a la fiesta ___ estaba enfermo.", "porque", "Porque introduces the reason."),
    ]
  ),
  L(
    "a2-comprehensive-review-3",
    "a2r-challenge-story-chain",
    "A2 Challenge: Story Chain",
    "Write a story one sentence at a time. Every link has to choose between the preterite and the imperfect.",
    "8 min",
    [
      sec(
        "The opening",
        "Every good story opens with the scene (imperfect) before the first event (preterite).",
        [
          ["Era una noche de invierno y nevaba sin parar.", "It was a winter night and it was snowing nonstop."],
          ["Clara estaba sola en la cabaña y leía junto al fuego.", "Clara was alone in the cabin, reading by the fire."],
        ],
        [
          fb("Link 3.", "De repente, alguien ___ a la puerta. (llamar)", "llamó", "De repente → a sudden event → preterite."),
        ]
      ),
      sec(
        "The middle",
        "Now alternate: each event can reveal new background.",
        [
          ["Clara abrió la puerta. Era un hombre mayor que tenía mucho frío.", "Clara opened the door. It was an old man who was very cold."],
        ],
        [
          fb("Link 5.", "El hombre le ___ que su coche se quedó en la nieve. (explicar)", "explicó", "A completed act of explaining → preterite."),
          fb("Link 6.", "Clara le ___ un té caliente. (preparar)", "preparó", "A completed action → preterite."),
        ]
      ),
    ],
    [
      fb("Link 7.", "Mientras el hombre ___ el té, le contó su historia. (tomar)", "tomaba", "Mientras + ongoing action → imperfect."),
      fb("Link 8.", "Resultó que él ___ el abuelo de su mejor amiga. (ser)", "era", "Identity revealed as background → imperfect."),
      fb("Link 9.", "A la mañana siguiente, la nieve ___ y él se fue. (parar)", "paró", "A single event → preterite."),
      mc(
        "Which ending uses the tenses best?",
        ["Desde ese día, Clara lo visitaba cada domingo.", "Desde ese día, Clara lo visitó cada domingo una vez.", "Desde ese día, Clara lo visita ayer.", "Desde ese día, Clara lo visitará ayer."],
        0,
        "A repeated habit that started that day → imperfect."
      ),
      ms(
        "Which sentences from the story are background?",
        ["Nevaba sin parar.", "Alguien llamó a la puerta.", "El hombre tenía mucho frío.", "Clara abrió la puerta."],
        [0, 2],
        "Calling and opening are events."
      ),
      toEs("The cabin was small but it was warm.", "La cabaña era pequeña pero estaba caliente.", "Description of size → ser; temperature at that moment → estar.", ["La cabaña era pequeña, pero estaba calentita.", "La cabaña era pequeña pero hacía calor dentro."]),
      wo("Clara nunca olvidó aquella noche de nieve.", "Preterite for the story's conclusion; aquella for a distant past.", "Clara never forgot that snowy night."),
    ]
  ),
  L(
    "a2-comprehensive-review-3",
    "a2r-challenge-life-timeline",
    "A2 Challenge: A Life Timeline",
    "Tell a whole life in Spanish: childhood (imperfect), milestones (preterite), today (present) and dreams (future).",
    "9 min",
    [
      sec(
        "The biography of Rosa Martínez",
        "Read Rosa's timeline. Each period of her life calls for a different tense.",
        [
          ["Rosa nació en Oaxaca en 1970.", "Rosa was born in Oaxaca in 1970."],
          ["De niña, vivía con sus abuelos y los ayudaba en el campo.", "As a girl, she lived with her grandparents and helped them in the fields."],
          ["En 1992 se mudó a la capital y empezó a estudiar arte.", "In 1992 she moved to the capital and began to study art."],
          ["Hoy es una pintora famosa y tiene su propia galería.", "Today she is a famous painter and has her own gallery."],
          ["El año que viene abrirá una escuela de arte en su pueblo.", "Next year she will open an art school in her village."],
        ],
        [
          mt(
            "Match each part of Rosa's life to its tense.",
            [
              ["nació", "pretérito"],
              ["vivía", "imperfecto"],
              ["es", "presente"],
              ["abrirá", "futuro"],
            ],
            "Birth and moves are events; childhood is a background period; today is present; plans are future."
          ),
        ]
      ),
    ],
    [
      fb("Continue Rosa's story.", "En la universidad ___ a su esposo, Julio. (conocer)", "conoció", "Meeting someone → preterite of conocer."),
      fb("Continue Rosa's story.", "Cuando era joven, Rosa ___ en la escuela todos los días. (dibujar)", "dibujaba", "A past habit → imperfect."),
      fb("Continue Rosa's story.", "Sus cuadros ___ en museos de todo el mundo. (estar, present)", "están", "Where they are now → están."),
      fb("Continue Rosa's story.", "Dentro de diez años, sus alumnos ___ sus obras. (continuar, future)", "continuarán", "Future: continuar + -án."),
      mc(
        "\"Rosa was 22 when she moved.\"",
        ["Rosa tenía 22 años cuando se mudó.", "Rosa tuvo 22 años cuando se mudaba.", "Rosa era 22 años cuando se mudó.", "Rosa tenía 22 años cuando se mudaba una vez."],
        0,
        "Age in the past → tenía; the move → se mudó."
      ),
      toEs("She was born in a small village and now she lives in the capital.", "Nació en un pueblo pequeño y ahora vive en la capital.", "Preterite for birth; present for now.", ["Ella nació en un pueblo pequeño y ahora vive en la capital."]),
      wo("Algún día escribiré un libro sobre la vida de mi abuela.", "Algún día + future.", "Someday I'll write a book about my grandmother's life."),
    ]
  ),
  L(
    "a2-comprehensive-review-3",
    "a2r-challenge-buenos-aires-1",
    "A2 Challenge: A Week in Buenos Aires — Part 1",
    "Marco spends a week in Buenos Aires. Follow his first days through messages, directions and a tango class.",
    "8 min",
    [
      sec(
        "Monday: arrival",
        "Marco texts his sister.",
        [
          ["¡Llegué! El vuelo fue larguísimo, pero todo salió bien.", "I've arrived! The flight was super long, but everything went well."],
          ["El hotel está en San Telmo. Es más pequeño que en las fotos, pero muy bonito.", "The hotel is in San Telmo. It's smaller than in the photos, but very pretty."],
        ],
        [
          fb("Complete Marco's message.", "Cuando ___ al hotel, eran las once de la noche. (llegar)", "llegué", "A completed event → preterite, with gu for the yo form."),
        ]
      ),
      sec(
        "Tuesday: getting around",
        "Marco asks for directions.",
        [
          ["—Disculpe, ¿cómo llego a la Plaza de Mayo?", "Excuse me, how do I get to Plaza de Mayo?"],
          ["—Tome el subte, línea A, y bájese en Perú.", "Take the subway, line A, and get off at Perú."],
        ],
        [
          mc(
            "What does the local tell Marco to do?",
            ["Take subway line A and get off at Perú station", "Walk to Peru Street", "Take a taxi to line A", "Take bus A to the square"],
            0,
            "Tome el subte (subway), línea A, bájese en Perú."
          ),
        ]
      ),
      sec(
        "Wednesday: tango class",
        "Marco writes in his travel journal.",
        [
          ["La profesora bailaba maravillosamente. Yo, no tanto.", "The teacher danced wonderfully. Me, not so much."],
          ["Le pisé el pie a mi pareja tres veces.", "I stepped on my partner's foot three times."],
        ],
        [
          fb("Complete the journal.", "Al final de la clase, la profesora me ___ que tenía talento. (decir)", "dijo", "Decir → dijo."),
        ]
      ),
    ],
    [
      mc(
        "Why does Marco write \"bailaba\" for the teacher but \"pisé\" for himself?",
        ["Bailaba describes how she danced during the class; pisé counts specific events.", "Bailaba is for women.", "Pisé is the imperfect.", "There's no reason."],
        0,
        "Description of ongoing manner → imperfect; three specific steps → preterite."
      ),
      fb("Complete the text.", "Mañana ___ a un partido de fútbol en La Bombonera. (ir, yo)", "iré", "Future plan → iré."),
      mt(
        "Match each Argentine word to its general Spanish equivalent.",
        [
          ["el subte", "el metro"],
          ["el colectivo", "el autobús"],
          ["la birome", "el bolígrafo"],
          ["la pileta", "la piscina"],
        ],
        "Regional vocabulary you'll hear in Buenos Aires."
      ),
      ms(
        "Which statements about Marco's week are true?",
        ["Marco se alojó en San Telmo.", "El hotel era más pequeño que en las fotos.", "Marco bailó tan bien como la profesora.", "Marco fue a clase de tango el miércoles."],
        [0, 1, 3],
        "Marco danced much worse than the teacher (\"Yo, no tanto\"), so the third statement is false."
      ),
      toEs("The city is bigger and noisier than I thought.", "La ciudad es más grande y más ruidosa de lo que pensaba.", "With a clause after a comparison, use de lo que.", ["La ciudad es más grande y ruidosa de lo que pensaba.", "La ciudad es más grande y más ruidosa que lo que pensaba."]),
      wo("Nunca había comido una carne tan rica como aquí.", "Tan + adjective + como.", "I had never eaten meat as good as here."),
    ]
  ),
  L(
    "a2-comprehensive-review-3",
    "a2r-challenge-buenos-aires-2",
    "A2 Challenge: A Week in Buenos Aires — Part 2",
    "The rest of Marco's week: a lost wallet, a new friend, and plans to come back.",
    "8 min",
    [
      sec(
        "Thursday: the lost wallet",
        "Marco reports a problem at the police station.",
        [
          ["—Perdí la billetera en el colectivo.", "I lost my wallet on the bus."],
          ["—¿Cómo era? —Era marrón y tenía mi documento adentro.", "What did it look like? — It was brown and had my ID inside."],
          ["—Si alguien la encuentra, se la mandaremos al hotel.", "If someone finds it, we'll send it to you at the hotel."],
        ],
        [
          fb("Complete the report.", "Estaba ___ cuando la perdí: el colectivo iba lleno. (distraído)", "distraído", "Estar + adjective agreeing with Marco."),
        ]
      ),
      sec(
        "Friday: a new friend",
        "Marco meets Sofía, a local who helps him.",
        [
          ["Sofía me llevó a un café y me invitó a una empanada.", "Sofía took me to a café and treated me to an empanada."],
          ["Hablamos por horas; nadie me había tratado tan bien.", "We talked for hours; nobody had treated me so well."],
        ],
        [
          fb("Complete.", "Sofía ___ presentó a sus amigos esa noche. (me/te/le)", "me", "She introduced me → me presentó."),
        ]
      ),
    ],
    [
      fb("Saturday: Complete the text.", "¡Encontraron la billetera! La policía me la ___ al hotel. (llevar)", "llevó", "A completed event → preterite."),
      fb("Sunday: Complete the text.", "El año que viene ___ con mi hermana. (volver, yo)", "volveré", "Future plan → volveré."),
      mc(
        "\"Sofía is the nicest person I met on the trip.\"",
        ["Sofía es la persona más amable que conocí en el viaje.", "Sofía es la más amable persona que conocía en el viaje.", "Sofía es la persona más amable de conocí en el viaje.", "Sofía es tan amable persona que conocí."],
        0,
        "Superlative + relative clause; conocer in the preterite = met."
      ),
      mt(
        "Match each day to what happened.",
        [
          ["el jueves", "Perdió la billetera."],
          ["el viernes", "Conoció a Sofía."],
          ["el sábado", "Recuperó la billetera."],
          ["el domingo", "Hizo planes para volver."],
        ],
        "All single events → preterite."
      ),
      toEs("Thanks for everything; I'll never forget this week.", "Gracias por todo; nunca olvidaré esta semana.", "Gracias por + noun; future with nunca.", ["Gracias por todo, nunca olvidaré esta semana.", "Gracias por todo; no olvidaré nunca esta semana."]),
      wo("Me fui de Buenos Aires con muchas ganas de volver.", "Irse de + place; tener ganas de → con ganas de.", "I left Buenos Aires really wanting to come back."),
    ]
  ),
  L(
    "a2-comprehensive-review-3",
    "a2r-challenge-pronoun-gauntlet",
    "A2 Challenge: The Pronoun Gauntlet",
    "Direct, indirect, reflexive, doubled and attached — every kind of A2 pronoun, back to back.",
    "8 min",
    [
      sec(
        "The pronoun map",
        "Direct: me te lo/la nos os los/las. Indirect: me te le nos os les. Reflexive: me te se nos os se. When le/les meets lo/la/los/las, it becomes se.",
        [
          ["Lo compré. / Le compré un libro. / Se lo compré.", "I bought it. / I bought him a book. / I bought it for him."],
          ["Me lo puse.", "I put it on."],
        ],
        [
          mc(
            "\"¿Le diste el mensaje a Pablo?\" — \"Sí, ___ di.\"",
            ["se lo", "le lo", "lo le", "se le"],
            0,
            "Le + lo → se lo."
          ),
        ]
      ),
    ],
    [
      fb("Replace the underlined words.", "Presté mi bici a mis primos. → ___ la presté.", "Se", "Les + la → se la."),
      fb("Replace the object.", "¿Viste las noticias? → Sí, ___ vi.", "las", "Las noticias → las."),
      fb("Add the reflexive pronoun.", "Mis padres ___ casaron en 1990.", "se", "Casarse, ellos → se."),
      fb("Attach the pronoun.", "Voy a comprar el vestido. → Voy a ___.", "comprarlo", "Attach lo to the infinitive."),
      ms(
        "Which are correct?",
        ["Te lo traigo mañana.", "Lo te traigo mañana.", "Se los di ayer.", "Le los di ayer."],
        [0, 2],
        "Indirect before direct; le/les → se before lo/la/los/las."
      ),
      mc(
        "\"My mom bought them for me.\" (the shoes)",
        ["Mi madre me los compró.", "Mi madre los me compró.", "Mi madre se los compró a mí.", "Mi madre me les compró."],
        0,
        "Me (to me) + los (the shoes)."
      ),
      toEs("I'm going to give it to her tomorrow. (the gift)", "Se lo voy a dar mañana.", "Le + lo → se lo, before the conjugated verb or attached.", ["Voy a dárselo mañana.", "Se lo daré mañana.", "Mañana se lo voy a dar."]),
      wo("¿Las llaves? Me las dejé en la oficina.", "Reflexive dejarse (to leave behind) + las.", "The keys? I left them at the office."),
    ]
  ),
  L(
    "a2-comprehensive-review-3",
    "a2r-challenge-past-gauntlet",
    "A2 Challenge: The Past-Tense Gauntlet",
    "Twelve rapid decisions: preterite or imperfect, regular or irregular — no hints.",
    "8 min",
    [
      sec(
        "Rapid fire",
        "For each blank, decide in under ten seconds: event or background? Then produce the form.",
        [
          ["Hacía sol cuando salimos.", "It was sunny when we left."],
        ],
        [
          fb("Preterite or imperfect?", "Cuando ___ niño, me encantaba el circo. (ser)", "era", "Stage of life → imperfect."),
          fb("Preterite or imperfect?", "El año pasado ___ a Italia por primera vez. (ir, nosotros)", "fuimos", "A single trip → preterite."),
        ]
      ),
    ],
    [
      fb("Preterite or imperfect?", "Mi abuelo siempre ___ historias de la guerra. (contar)", "contaba", "Siempre → habit → imperfect."),
      fb("Preterite or imperfect?", "Ayer no ___ venir porque estaba enferma. (poder, yo)", "pude", "Failed to (a specific occasion) → pude."),
      fb("Preterite or imperfect?", "¿Qué ___ tú cuando te llamé? (hacer)", "hacías", "In progress when interrupted → imperfect."),
      fb("Preterite or imperfect?", "Los niños ___ los regalos a toda velocidad. (abrir)", "abrieron", "A completed action → preterite."),
      fb("Preterite or imperfect?", "En aquella época no ___ teléfonos móviles. (haber)", "había", "Background of an era → había."),
      fb("Preterite or imperfect?", "Ella ___ la noticia por la radio. (oír)", "oyó", "A single event; oír → oyó."),
      mc(
        "\"We were talking when the teacher came in.\"",
        ["Hablábamos cuando entró el profesor.", "Hablamos cuando entraba el profesor.", "Hablábamos cuando entraba el profesor.", "Hablamos cuando entró el profesor."],
        0,
        "Ongoing (imperfect) interrupted by an event (preterite)."
      ),
      toEs("I lived in Paris for three years.", "Viví en París tres años.", "A closed, measured period → preterite.", ["Viví en París durante tres años.", "Viví en París por tres años.", "Yo viví en París tres años."]),
    ]
  ),
  L(
    "a2-comprehensive-review-3",
    "a2r-challenge-comparisons-por-para",
    "A2 Challenge: Comparisons, Future & Por/Para",
    "A final gauntlet for the rest of A2: comparisons, superlatives, the future, por/para, negatives and adverbs.",
    "8 min",
    [
      sec(
        "Mixed recall",
        "Every item mixes at least two A2 topics.",
        [
          ["El tren será más rápido que el autobús.", "The train will be faster than the bus."],
          ["Lo terminaré para el viernes, sin ningún problema.", "I'll finish it by Friday, without any problem."],
        ],
        [
          fb("Complete.", "Mañana ___ más frío que hoy. (hacer, future)", "hará", "Hacer → hará."),
          fb("Complete.", "Es el museo más famoso ___ la ciudad.", "de", "Superlative → de."),
        ]
      ),
    ],
    [
      fb("Complete with por or para.", "Pasaremos ___ tu casa a las siete.", "por", "Pasar por = stop by."),
      fb("Complete with por or para.", "Necesito el vestido ___ la boda del sábado.", "para", "Purpose/occasion → para."),
      fb("Complete with the adverb (claro).", "El profesor habla muy ___.", "claramente", "Clara + -mente."),
      fb("Complete with a negative word.", "No habrá ___ problema, te lo prometo.", "ningún", "Ningún before a masculine singular noun."),
      mc(
        "\"This will be the best trip of our lives.\"",
        ["Este será el mejor viaje de nuestras vidas.", "Este será el más mejor viaje de nuestras vidas.", "Este será el mejor viaje en nuestras vidas.", "Este fue el mejor viaje de nuestras vidas mañana."],
        0,
        "Future será + superlative el mejor … de."
      ),
      ms(
        "Which sentences are correct?",
        ["Tendremos tanto trabajo como el año pasado.", "Lo hice por ti.", "Saldremos para la playa temprano.", "Mi casa es tan grande que la tuya."],
        [0, 1, 2],
        "Equality → tan grande como la tuya."
      ),
      toEs("Nobody will know it before Monday.", "Nadie lo sabrá antes del lunes.", "Nadie + future of saber (sabr-).", ["Nadie lo va a saber antes del lunes."]),
    ]
  ),
  L(
    "a2-comprehensive-review-3",
    "a2r-challenge-host-family-email",
    "A2 Challenge: Email to Your Host Family",
    "Write an introduction email to the family you'll live with — past, present and future all in one message.",
    "8 min",
    [
      sec(
        "The model email",
        "Read the model. It introduces the writer, explains the past, describes the present and asks about the future.",
        [
          ["Querida familia Gómez:", "Dear Gómez family,"],
          ["Me llamo Emily y tengo veinte años. Estudio biología en Toronto.", "My name is Emily and I'm twenty. I study biology in Toronto."],
          ["Empecé a estudiar español hace dos años. De niña, mi abuela me hablaba en español.", "I started studying Spanish two years ago. As a girl, my grandmother spoke Spanish to me."],
          ["Llegaré el 3 de julio. ¿Necesitan algo de Canadá?", "I'll arrive on July 3rd. Do you need anything from Canada?"],
        ],
        [
          ms(
            "Which tenses does Emily use?",
            ["present", "preterite", "imperfect", "future"],
            [0, 1, 2, 3],
            "Estudio (present), empecé (preterite), hablaba (imperfect), llegaré (future)."
          ),
        ]
      ),
      sec(
        "Write your own",
        "Complete Jake's email, using his notes: 22 · Chicago · engineering · started Spanish 1 year ago · arrives August 10 · allergic to cats.",
        [
          ["Querida familia Ruiz:", "Dear Ruiz family,"],
        ],
        [
          fb("Jake's email.", "Me llamo Jake y ___ veintidós años.", "tengo", "Age → tener."),
          fb("Jake's email.", "___ a estudiar español hace un año.", "Empecé", "A starting point in the past → preterite, z → c."),
        ]
      ),
    ],
    [
      fb("Jake's email.", "___ el 10 de agosto por la tarde.", "Llegaré", "A future arrival → llegaré."),
      fb("Jake's email.", "Una pregunta: ¿tienen gatos? ___ alérgico.", "Soy", "Ser alérgico a → a lasting condition."),
      mc(
        "Which closing is most appropriate?",
        ["Un abrazo y hasta pronto, Jake", "Atentamente, su servidor, Sr. Jake", "Chao, besitos, Jake", "Adiós para siempre, Jake"],
        0,
        "Warm but not over-familiar: un abrazo, hasta pronto."
      ),
      mc(
        "Jake wants to ask what he should bring. Best option:",
        ["¿Qué les puedo llevar de Chicago?", "¿Qué me pueden llevar a Chicago?", "¿Qué les llevé de Chicago?", "¿Qué llevaban de Chicago?"],
        0,
        "Les (to you all) + puedo llevar (I can bring)."
      ),
      toEs("I'm very excited to meet you all.", "Tengo muchas ganas de conocerlos.", "Tener ganas de + infinitive; los = you all (Latin America).", ["Tengo muchas ganas de conocerlos a todos.", "Estoy muy emocionado de conocerlos.", "Tengo muchas ganas de conoceros.", "Estoy muy emocionada de conocerlos."]),
      wo("Muchas gracias por recibirme en su casa este verano.", "Gracias por + infinitive with attached pronoun.", "Thank you so much for having me in your home this summer."),
    ]
  ),
  L(
    "a2-comprehensive-review-3",
    "a2r-exit-ticket",
    "A2 Exit Ticket: Ready for B1?",
    "The last A2 lesson: ten skills B1 will build on, one question each, no hints.",
    "9 min",
    [
      sec(
        "The ten skills",
        "(1) regular preterite (2) irregular preterite (3) imperfect (4) preterite vs. imperfect (5) direct/indirect pronouns (6) reflexives (7) comparisons (8) future (9) por/para (10) negatives and personal a.",
        [
          ["¡Vamos a por el B1!", "Let's go for B1!"],
        ],
        [
          fb("Skill 1: regular preterite.", "Anoche nosotros ___ hasta tarde. (trabajar)", "trabajamos", "Nosotros → trabajamos."),
          fb("Skill 2: irregular preterite.", "¿Quién ___ la tarta? (traer)", "trajo", "Traer → trajo."),
        ]
      ),
    ],
    [
      fb("Skill 3: imperfect.", "De pequeños, mis hermanos y yo ___ mucho. (pelearse)", "nos peleábamos", "Reflexive + imperfect: nos peleábamos."),
      fb("Skill 4: preterite vs. imperfect.", "Estaba en la ducha cuando ___ el teléfono. (sonar)", "sonó", "The interruption → preterite."),
      fb("Skill 5: pronouns.", "¿El libro? Ya ___ lo di a Marta.", "se", "Le + lo → se lo."),
      fb("Skill 6: reflexives.", "¿A qué hora ___ acostaste anoche?", "te", "Tú → te."),
      fb("Skill 7: comparisons.", "Mi hermano menor es ___ alto como yo.", "tan", "Equality with an adjective → tan … como."),
      fb("Skill 8: future.", "¿___ tiempo para ayudarme mañana? (tener, tú)", "Tendrás", "Tener → tendr- + -ás."),
      fb("Skill 9: por/para.", "Este tren va ___ Sevilla.", "para", "Destination → para."),
      mc(
        "Skill 10: negatives and personal a. \"I didn't see anybody.\"",
        ["No vi a nadie.", "No vi nadie.", "Vi a nadie.", "No vi a alguien."],
        0,
        "No + verb + a nadie."
      ),
    ]
  ),
];
