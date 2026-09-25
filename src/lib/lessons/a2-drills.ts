import { anchored, authoring } from "./authoring";
import type { AnchoredLesson } from "./weave";

// A2 drill lessons -- a second, drill-heavy layer woven into A2_LESSONS
// right after the lesson each one practises (see weave.ts). No new grammar:
// every lesson recycles what the learner has already been taught, with the
// most practice going to the hardest A2 topics (preterite vs. imperfect,
// object pronouns, por vs. para, irregular preterites). Formats: drill
// circuits, minimal pairs, pattern practice, build-ups, fix-the-paragraph,
// speed rounds, choose-and-explain, chain transformations, story clozes,
// say-it-yourself and mixed practice.
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

export const A2_DRILLS: AnchoredLesson[] = [
  L(
    "preterite-regular-verbs-1",
    "a2d-pattern-preterite-ar",
    "Pattern Practice: -AR Verbs in the Preterite",
    "One sentence frame, six subjects: drill every -AR ending until it's automatic.",
    "6 min",
    [
      sec(
        "The -AR endings",
        "-é, -aste, -ó, -amos, -asteis, -aron. The yo and él/ella forms carry a written accent on the last syllable. Nosotros looks the same as the present — a time word (ayer, anoche) tells you it's past.",
        [
          ["Ayer trabajé ocho horas.", "Yesterday I worked eight hours."],
          ["Anoche mis padres cenaron tarde.", "Last night my parents had dinner late."],
        ],
        [
          fb("Complete with the preterite of llamar.", "Ayer mi hermana ___ a casa tres veces.", "llamó", "Él/ella -AR → -ó."),
        ]
      ),
    ],
    [
      fb("Same frame, new subject: preparar.", "Anoche yo ___ la cena.", "preparé", "Yo -AR → -é."),
      fb("Same frame, new subject: preparar.", "Anoche tú ___ la cena.", "preparaste", "Tú -AR → -aste."),
      fb("Same frame, new subject: preparar.", "Anoche nosotros ___ la cena.", "preparamos", "Nosotros -AR → -amos."),
      fb("Same frame, new subject: preparar.", "Anoche mis tíos ___ la cena.", "prepararon", "Ellos -AR → -aron."),
      fb("Same frame, new subject: preparar.", "Anoche vosotros ___ la cena.", "preparasteis", "Vosotros -AR → -asteis."),
      mt(
        "Match the subject with its preterite form of bailar.",
        [
          ["yo", "bailé"],
          ["usted", "bailó"],
          ["ustedes", "bailaron"],
          ["tú", "bailaste"],
        ],
        "Usted uses the él/ella form; ustedes uses the ellos form."
      ),
      toEs("Yesterday we walked to the beach.", "Ayer caminamos a la playa.", "Nosotros -AR → -amos.", ["Ayer caminamos hasta la playa.", "Ayer nosotros caminamos a la playa."]),
      wo("El lunes pasado mi jefe llegó muy temprano.", "Time + subject + preterite + adverb.", "Last Monday my boss arrived very early."),
    ]
  ),
  L(
    "preterite-regular-verbs-1",
    "a2d-minimal-pairs-present-preterite",
    "Minimal Pairs: Present or Preterite?",
    "Hablo or habló? Trabajamos today or yesterday? Train your eye and ear for the tiny differences.",
    "6 min",
    [
      sec(
        "One letter, one accent, a different time",
        "Hablo (I speak) vs. habló (he spoke). Como (I eat) vs. comió (he ate). Nosotros -AR and -IR forms are identical in present and preterite (hablamos, vivimos) — only context decides.",
        [
          ["Hoy hablo con Luis. / Ayer habló con Luis.", "Today I'm talking to Luis. / Yesterday he talked to Luis."],
          ["Siempre vivimos aquí. / En 2019 vivimos en Lima.", "We always live here. / In 2019 we lived in Lima."],
        ],
        [
          mc(
            "Which sentence is in the past?",
            ["Mi padre cocinó paella.", "Mi padre cocina paella.", "Yo cocino paella.", "Mi padre va a cocinar paella."],
            0,
            "Cocinó with an accent on the -ó is the preterite."
          ),
        ]
      ),
    ],
    [
      mc(
        "«___ con mi abuela todos los domingos.» (habit, now)",
        ["Hablo", "Habló", "Hablé", "Hablaron"],
        0,
        "Todos los domingos + present = current habit."
      ),
      mc(
        "«Ayer Pedro ___ en casa.» (comer)",
        ["comió", "come", "como", "comí"],
        0,
        "Ayer → preterite; él → -ió."
      ),
      mc(
        "«El año pasado ___ en Madrid.» — Is vivimos past or present here?",
        ["past", "present", "future", "impossible to say"],
        0,
        "El año pasado marks it as preterite."
      ),
      fb("Change to the past.", "Hoy compro fruta. → Ayer ___ fruta.", "compré", "Compro → compré."),
      fb("Change to the past.", "Hoy Ana escribe un correo. → Ayer Ana ___ un correo.", "escribió", "Escribe → escribió."),
      fb("Change to the past.", "Hoy ellos abren la tienda. → Ayer ellos ___ la tienda.", "abrieron", "Abren → abrieron."),
      ms(
        "Which forms can only be preterite?",
        ["cantó", "bebiste", "salieron", "cantamos"],
        [0, 1, 2],
        "Cantamos is the same form in present and preterite."
      ),
      toEn("Mi hermano estudió medicina en Chile.", "My brother studied medicine in Chile.", "Estudió = preterite, él.", ["My brother studied medicine in Chile."]),
    ]
  ),
  L(
    "preterite-regular-verbs-2",
    "a2d-speed-round-spelling-changes",
    "Speed Round: -car, -gar, -zar in the Yo Form",
    "Busqué, llegué, empecé: rapid-fire practice of the spelling changes that only affect yo.",
    "6 min",
    [
      sec(
        "Only yo changes",
        "To keep the sound, yo forms change their spelling: -car → -qué (buscar → busqué), -gar → -gué (pagar → pagué), -zar → -cé (empezar → empecé). Every other person is regular: buscó, pagaste, empezaron.",
        [
          ["Llegué tarde y pagué el taxi.", "I arrived late and paid for the taxi."],
          ["Mi hermano llegó a tiempo.", "My brother arrived on time."],
        ],
        [
          fb("Yo form of tocar.", "Anoche ___ la guitarra.", "toqué", "-car → -qué."),
        ]
      ),
    ],
    [
      fb("Yo form.", "Ayer ___ al fútbol con mis amigos. (jugar)", "jugué", "-gar → -gué."),
      fb("Yo form.", "Esta mañana ___ a trabajar a las ocho. (empezar)", "empecé", "-zar → -cé."),
      fb("Yo form.", "___ las llaves por toda la casa. (buscar)", "Busqué", "-car → -qué."),
      fb("Él form (no change).", "Mi padre ___ la cuenta del restaurante. (pagar)", "pagó", "Only yo changes."),
      fb("Ellos form (no change).", "Los niños ___ a jugar a las cinco. (empezar)", "empezaron", "Only yo changes."),
      mc(
        "Which is spelled correctly?",
        ["almorcé", "almorzé", "almorsé", "almorqué"],
        0,
        "-zar → -cé in the yo form."
      ),
      ms(
        "Which yo forms are correct?",
        ["saqué", "llegué", "crucé", "pagé"],
        [0, 1, 2],
        "Pagar → pagué, with u."
      ),
      toEs("I arrived at nine and started to work.", "Llegué a las nueve y empecé a trabajar.", "Two yo spelling changes.", ["Llegué a las nueve y comencé a trabajar."]),
    ]
  ),
  L(
    "preterite-regular-verbs-2",
    "a2d-build-up-weekend",
    "Build-Up: A Weekend Story in Five Steps",
    "Start with one verb and grow a full past-tense sentence, piece by piece.",
    "6 min",
    [
      sec(
        "Grow the sentence",
        "Verb → subject → object → place → time. Each step adds one piece without changing the verb form: Visité → Visité a mi tía → Visité a mi tía en Sevilla → El sábado visité a mi tía en Sevilla.",
        [
          ["Comimos. → Comimos paella. → Comimos paella en la playa.", "We ate. → We ate paella. → We ate paella on the beach."],
        ],
        [
          mc(
            "Which is the fully built sentence?",
            ["El domingo mis primos corrieron en el parque.", "Corrieron.", "Mis primos corrieron.", "En el parque."],
            0,
            "Time + subject + verb + place."
          ),
        ]
      ),
    ],
    [
      wo("El sábado escribí una carta a mi abuela.", "Time + verb + object + recipient.", "On Saturday I wrote a letter to my grandmother."),
      wo("Anoche mis vecinos celebraron el cumpleaños de su hija.", "Time + subject + verb + object.", "Last night my neighbors celebrated their daughter's birthday."),
      wo("El viernes pasado salimos a cenar con unos amigos.", "Time + verb + purpose + company.", "Last Friday we went out to dinner with some friends."),
      fb("Add the verb (preterite of aprender).", "En el viaje ___ muchas palabras nuevas. (nosotros)", "aprendimos", "-ER nosotros → -imos."),
      fb("Add the verb (preterite of recibir).", "Mi madre ___ un paquete de Italia.", "recibió", "-IR él/ella → -ió."),
      fb("Add the verb (preterite of mirar).", "¿___ tú la película de anoche?", "Miraste", "-AR tú → -aste."),
      toEs("On Sunday I cleaned the house and cooked for my family.", "El domingo limpié la casa y cociné para mi familia.", "Two -AR yo verbs.", ["El domingo limpié la casa y cociné para mi familia.", "El domingo yo limpié la casa y cociné para mi familia."]),
      toEn("El sábado mis amigos y yo nadamos en el lago.", "On Saturday my friends and I swam in the lake.", "Nosotros preterite.", ["On Saturday my friends and I swam in the lake."]),
    ]
  ),
  L(
    "preterite-irregular-verbs-1",
    "a2d-stem-groups-sort",
    "Drill Circuit: The U, I and J Stem Groups",
    "Tuv-, estuv-, pud-, pus- / hic-, quis-, vin- / dij-, traj-: sort, conjugate and use them.",
    "7 min",
    [
      sec(
        "Three families, one set of endings",
        "U-group: tener → tuv-, estar → estuv-, poder → pud-, poner → pus-. I-group: hacer → hic- (hizo), querer → quis-, venir → vin-. J-group: decir → dij-, traer → traj- (ellos: dijeron, trajeron). Endings: -e, -iste, -o, -imos, -isteis, -ieron — no accents.",
        [
          ["Tuve que trabajar el sábado.", "I had to work on Saturday."],
          ["Ellos trajeron la comida.", "They brought the food."],
        ],
        [
          mc(
            "Which group does poner belong to?",
            ["U-group (pus-)", "I-group", "J-group", "regular"],
            0,
            "Poner → puse, pusiste, puso…"
          ),
        ]
      ),
    ],
    [
      mt(
        "Match the infinitive with its preterite stem.",
        [
          ["estar", "estuv-"],
          ["querer", "quis-"],
          ["traer", "traj-"],
          ["poder", "pud-"],
        ],
        "Irregular preterite stems."
      ),
      fb("Conjugate.", "Ayer yo no ___ ir a clase. (poder)", "pude", "Pud- + -e."),
      fb("Conjugate.", "¿Dónde ___ tú las llaves? (poner)", "pusiste", "Pus- + -iste."),
      fb("Conjugate.", "Mi hermana ___ a la fiesta con su novio. (venir)", "vino", "Vin- + -o."),
      fb("Conjugate.", "Mis padres me ___ la verdad. (decir)", "dijeron", "J-group ellos: -eron, not -ieron."),
      fb("Conjugate.", "¿Qué ___ ustedes el fin de semana? (hacer)", "hicieron", "Hic- + -ieron."),
      ms(
        "Which forms are correct?",
        ["estuvimos", "quisieron", "trajieron", "tuvo"],
        [0, 1, 3],
        "Traer → trajeron (no i)."
      ),
      toEs("We had to wait an hour.", "Tuvimos que esperar una hora.", "Tener que in the preterite.", ["Tuvimos que esperar una hora entera."]),
    ]
  ),
  L(
    "preterite-irregular-verbs-1",
    "a2d-ser-ir-context",
    "Choose & Explain: Fui — Ser or Ir?",
    "Ser and ir share the same preterite. Decide which verb each sentence uses and why.",
    "6 min",
    [
      sec(
        "Context decides",
        "Fui, fuiste, fue, fuimos, fuisteis, fueron = ser OR ir. A destination with a (fui a Roma) → ir. A description, profession or evaluation (fue difícil, fue presidente) → ser.",
        [
          ["Fuimos al cine. (ir)", "We went to the movies."],
          ["La película fue muy buena. (ser)", "The movie was very good."],
        ],
        [
          mc(
            "«El examen fue fácil.» Which verb?",
            ["ser", "ir", "both", "neither"],
            0,
            "Evaluation → ser."
          ),
        ]
      ),
    ],
    [
      mc(
        "«¿Adónde fuiste ayer?» Which verb?",
        ["ir", "ser", "estar", "hacer"],
        0,
        "Adónde = destination → ir."
      ),
      mc(
        "«Mi abuelo fue médico durante cuarenta años.» Which verb?",
        ["ser", "ir", "tener", "poder"],
        0,
        "Profession → ser."
      ),
      mc(
        "«Fueron a la playa en coche.» Which verb?",
        ["ir", "ser", "estar", "venir"],
        0,
        "A la playa → destination."
      ),
      fb("Complete with the preterite of ser or ir.", "La fiesta ___ increíble. (ser)", "fue", "Fue = it was."),
      fb("Complete with the preterite of ser or ir.", "Nosotros ___ a Toledo en tren. (ir)", "fuimos", "Fuimos = we went."),
      fb("Complete with the preterite of ser or ir.", "¿Tú ___ al médico el lunes? (ir)", "fuiste", "Fuiste = you went."),
      toEn("El viaje fue largo, pero fuimos muy felices.", "The trip was long, but we were very happy.", "Both fue and fuimos are ser here.", ["The journey was long, but we were very happy."]),
      toEs("I went to the market and it was a disaster.", "Fui al mercado y fue un desastre.", "Fui (ir) + fue (ser).", ["Fui al mercado y fue un desastre total."]),
    ]
  ),
  L(
    "preterite-irregular-verbs-2",
    "a2d-fix-paragraph-irregulars",
    "Fix the Paragraph: Irregular Preterites",
    "A diary entry full of regularized irregulars (tení, hací, decieron). Find and fix each one.",
    "7 min",
    [
      sec(
        "The typical mistake",
        "Learners often treat irregulars as regular: ✗ tení → tuve, ✗ hací → hice, ✗ poní → puse, ✗ estí → estuve, ✗ decieron → dijeron, ✗ trajieron → trajeron. The paragraph: «El sábado tení una fiesta. Hací una tarta y mis amigos trajieron bebidas. Todos decieron que la tarta estaba rica.»",
        [
          ["✗ Hací una tarta. → ✓ Hice una tarta.", "I made a cake."],
          ["✗ Decieron que… → ✓ Dijeron que…", "They said that…"],
        ],
        [
          fb("Fix the first verb.", "El sábado ___ una fiesta. (the diary says: tení)", "tuve", "Tener → tuve."),
        ]
      ),
    ],
    [
      fb("Fix it.", "___ una tarta de chocolate. (the diary says: Hací)", "Hice", "Hacer → hice."),
      fb("Fix it.", "Todos ___ que la tarta estaba rica. (the diary says: decieron)", "dijeron", "Decir → dijeron."),
      fb("Fix it.", "Yo ___ la mesa en el jardín. (the diary says: poní)", "puse", "Poner → puse."),
      fb("Fix it.", "Mis primos no ___ venir. (the diary says: podieron)", "pudieron", "Poder → pudieron."),
      fb("Fix it.", "Mi abuela ___ en el hospital una semana. (the diary says: estó)", "estuvo", "Estar → estuvo."),
      mc(
        "Which sentence has no mistakes?",
        ["Quisimos llegar temprano, pero no pudimos.", "Querimos llegar temprano, pero no podimos.", "Quisimos llegar temprano, pero no podemos ayer.", "Quiseron llegar temprano."],
        0,
        "Querer → quisimos; poder → pudimos."
      ),
      ms(
        "Which forms are wrong?",
        ["vení", "vine", "hizo", "hació"],
        [0, 3],
        "Venir → vine; hacer → hizo."
      ),
      toEs("My friends brought music and we danced all night.", "Mis amigos trajeron música y bailamos toda la noche.", "Trajeron + regular bailamos.", ["Mis amigos trajeron música y bailamos toda la noche."]),
    ]
  ),
  L(
    "preterite-irregular-verbs-2",
    "a2d-question-answer-irregulars",
    "Q&A Drill: Irregular Preterites in Conversation",
    "Answer questions in the right person: ¿Qué hiciste? → Hice… ¿Vinieron? → Sí, vinimos…",
    "6 min",
    [
      sec(
        "Mirror the person",
        "Tú question → yo answer (¿Pudiste? → Pude). Ustedes/vosotros question → nosotros answer (¿Trajeron? → Trajimos). The stem stays irregular across all persons.",
        [
          ["—¿Qué hiciste anoche? —Hice los deberes.", "What did you do last night? — I did my homework."],
          ["—¿Vinieron en coche? —No, vinimos en metro.", "Did you come by car? — No, we came by metro."],
        ],
        [
          fb("Answer.", "—¿Estuviste en la reunión? —Sí, ___ toda la tarde.", "estuve", "Tú → yo."),
        ]
      ),
    ],
    [
      fb("Answer.", "—¿Qué te contó tu hermano? —Me ___ un secreto. (decir)", "dijo", "Él → dijo (j-group)."),
      fb("Answer.", "—¿Trajeron ustedes el pastel? —Sí, lo ___.", "trajimos", "Ustedes → nosotros."),
      fb("Answer.", "—¿Pudiste dormir? —No, no ___ dormir nada.", "pude", "Tú → yo."),
      fb("Answer.", "—¿Dónde pusiste mi libro? —Lo ___ en la mesa.", "puse", "Tú → yo."),
      fb("Answer.", "—¿Quisieron ustedes quedarse? —No, no ___.", "quisimos", "Ustedes → nosotros."),
      mt(
        "Match question and answer.",
        [
          ["¿Tuviste tiempo?", "No, no tuve tiempo."],
          ["¿Vinieron tus padres?", "Sí, vinieron el lunes."],
          ["¿Hicisteis la compra?", "Sí, la hicimos ayer."],
        ],
        "Person changes with the question."
      ),
      toEs("—Did you come alone? —No, I came with my sister.", "—¿Viniste solo? —No, vine con mi hermana.", "Venir: viniste / vine.", ["—¿Viniste sola? —No, vine con mi hermana.", "—¿Viniste solo? —No, vine con mi hermana."]),
      toEn("—¿Qué hicieron ustedes? —Estuvimos en casa.", "—What did you do? —We were at home.", "Hacer and estar irregulars.", ["—What did you guys do? —We stayed at home.", "—What did you all do? —We were at home."]),
    ]
  ),
  L(
    "preterite-irregular-verbs-2",
    "a2d-irregular-vs-regular-sort",
    "Minimal Pairs: Regular or Irregular?",
    "Comí vs. hice, habló vs. dijo: decide whether each verb follows the regular pattern before you conjugate it.",
    "6 min",
    [
      sec(
        "Two questions before you conjugate",
        "1) Is the verb on the irregular list (ser/ir, tener, estar, poder, poner, hacer, querer, venir, decir, traer)? 2) If yes: irregular stem + unaccented endings. If not: regular endings with accents on yo and él (-é/-ó, -í/-ió).",
        [
          ["Ayer comí y bebí mucho. (regular)", "Yesterday I ate and drank a lot."],
          ["Ayer hice y dije muchas tonterías. (irregular)", "Yesterday I did and said a lot of silly things."],
        ],
        [
          mc(
            "Is abrir regular in the preterite?",
            ["Yes — abrí, abrió", "No — abrije, abrijo", "No — abrú, abró", "No — it has no preterite"],
            0,
            "Abrir is regular in the preterite."
          ),
        ]
      ),
    ],
    [
      fb("Conjugate (él).", "Mi padre ___ un coche nuevo. (comprar)", "compró", "Regular."),
      fb("Conjugate (él).", "Mi padre ___ un coche a casa. (traer)", "trajo", "Irregular j-group."),
      fb("Conjugate (yo).", "___ un mensaje a Sara. (escribir)", "Escribí", "Regular."),
      fb("Conjugate (yo).", "Le ___ la verdad a Sara. (decir)", "dije", "Irregular j-group."),
      fb("Conjugate (nosotros).", "___ en un hotel precioso. (estar)", "Estuvimos", "Irregular u-group."),
      fb("Conjugate (nosotros).", "___ en la playa todo el día. (quedarse)", "Nos quedamos", "Quedarse is regular: nos quedamos."),
      ms(
        "Which verbs have irregular preterite stems?",
        ["venir", "vender", "querer", "correr"],
        [0, 2],
        "Vender and correr are regular."
      ),
      toEs("She sold her car and came to Spain.", "Vendió su coche y vino a España.", "Regular + irregular.", ["Ella vendió su coche y vino a España."]),
    ]
  ),
  L(
    "preterite-drill-3",
    "a2d-timeline-yesterday",
    "Timeline Drill: Yesterday, Hour by Hour",
    "Follow Marta's day on a timeline and narrate it in the preterite, regular and irregular verbs mixed.",
    "7 min",
    [
      sec(
        "Marta's day",
        "7:00 despertarse (se despertó) · 8:00 ir a la oficina (fue) · 13:00 comer con un cliente (comió) · 15:00 tener una reunión (tuvo) · 19:00 hacer la compra (hizo) · 22:00 ver una serie (vio). Sequence words: primero, luego, después, más tarde, por último.",
        [
          ["Primero se despertó a las siete y luego fue a la oficina.", "First she woke up at seven and then went to the office."],
          ["Por último, vio una serie.", "Finally, she watched a series."],
        ],
        [
          fb("13:00", "A la una, Marta ___ con un cliente.", "comió", "Regular -ER, él/ella."),
        ]
      ),
    ],
    [
      fb("8:00", "A las ocho, Marta ___ a la oficina.", "fue", "Ir → fue."),
      fb("15:00", "A las tres, ___ una reunión larguísima.", "tuvo", "Tener → tuvo."),
      fb("19:00", "A las siete, ___ la compra.", "hizo", "Hacer → hizo."),
      fb("22:00", "Por último, ___ una serie en el sofá.", "vio", "Ver → vio (no accent)."),
      mc(
        "Which word introduces the last step?",
        ["por último", "primero", "luego", "mientras"],
        0,
        "Por último = finally."
      ),
      toEs("First I had breakfast, then I went to work.", "Primero desayuné, luego fui al trabajo.", "Sequence + preterite.", ["Primero desayuné y luego fui al trabajo.", "Primero desayuné, después fui al trabajo."]),
      wo("Después de la reunión, Marta volvió a casa en autobús.", "Sequence + preterite.", "After the meeting, Marta went home by bus."),
      toEn("Más tarde estuvo con sus amigas en un café.", "Later she was with her friends in a café.", "Estar → estuvo.", ["Later on she spent time with her friends at a café.", "Later she was with her friends at a café."]),
    ]
  ),
  L(
    "preterite-drill-3",
    "a2d-say-it-yourself-last-trip",
    "Say It Yourself: Your Last Trip",
    "Personal translation drill: talk about a trip you took, using the preterite in every sentence.",
    "6 min",
    [
      sec(
        "Talking about a trip",
        "Useful preterites: fui (I went), viajé (I traveled), llegué (I arrived), me quedé (I stayed), visité, conocí (I met / got to know a place), comí, volví (I came back). Add details: con quién, cuánto tiempo, qué tal fue.",
        [
          ["El verano pasado fui a México con mi familia.", "Last summer I went to Mexico with my family."],
          ["Nos quedamos dos semanas y fue genial.", "We stayed two weeks and it was great."],
        ],
        [
          mc(
            "«Conocí Lisboa» means…",
            ["I got to know / visited Lisbon for the first time", "I know Lisbon", "I will visit Lisbon", "I didn't like Lisbon"],
            0,
            "Conocer in the preterite = first contact."
          ),
        ]
      ),
    ],
    [
      toEs("Last year I traveled to Peru.", "El año pasado viajé a Perú.", "Viajar → viajé.", ["El año pasado viajé al Perú.", "El año pasado fui a Perú."]),
      toEs("I stayed in a small hotel.", "Me quedé en un hotel pequeño.", "Quedarse → me quedé.", ["Me quedé en un pequeño hotel."]),
      toEs("We visited many museums.", "Visitamos muchos museos.", "Visitar → visitamos.", []),
      toEs("I ate a lot and it was delicious.", "Comí mucho y estuvo delicioso.", "Comer + estar.", ["Comí mucho y fue delicioso.", "Comí mucho y estaba delicioso."]),
      toEs("We came back on Sunday.", "Volvimos el domingo.", "Volver → volvimos.", ["Regresamos el domingo."]),
      fb("Complete.", "¿Qué tal ___ el viaje? (ser)", "fue", "Evaluation → ser."),
      fb("Complete.", "___ a mucha gente simpática. (conocer, yo)", "Conocí", "Conocer → conocí."),
      wo("El último día hicimos una excursión a la montaña.", "Preterite narration.", "On the last day we went on a trip to the mountains."),
    ]
  ),
  L(
    "preterite-drill-3",
    "a2d-chain-preterite-persons",
    "Chain Transformations: Change the Person",
    "One sentence, four transformations: yo → él → nosotros → ellos. Keep the irregular stem, change only the ending.",
    "6 min",
    [
      sec(
        "The chain",
        "Start: Yo hice la cena. → Él hizo la cena. → Nosotros hicimos la cena. → Ellos hicieron la cena. Watch out for the él form of hacer (hizo) and the ellos form of decir/traer (-eron).",
        [
          ["Yo traje vino. → Ellos trajeron vino.", "I brought wine. → They brought wine."],
        ],
        [
          fb("Chain: yo → él.", "Yo puse la mesa. → Él ___ la mesa.", "puso", "Pus- + -o."),
        ]
      ),
    ],
    [
      fb("Chain: yo → nosotros.", "Yo estuve en casa. → Nosotros ___ en casa.", "estuvimos", "Estuv- + -imos."),
      fb("Chain: yo → ellos.", "Yo dije que sí. → Ellos ___ que sí.", "dijeron", "J-group: -eron."),
      fb("Chain: tú → usted.", "Tú viniste tarde. → Usted ___ tarde.", "vino", "Usted = él form."),
      fb("Chain: él → yo.", "Él quiso ayudar. → Yo ___ ayudar.", "quise", "Quis- + -e."),
      fb("Chain: ella → ellas.", "Ella hizo un pastel. → Ellas ___ un pastel.", "hicieron", "Hic- + -ieron."),
      fb("Chain: nosotros → tú.", "Nosotros pudimos entrar. → Tú ___ entrar.", "pudiste", "Pud- + -iste."),
      mc(
        "«Yo traje las sillas.» → ellos:",
        ["Ellos trajeron las sillas.", "Ellos trajieron las sillas.", "Ellos traeron las sillas.", "Ellos trajon las sillas."],
        0,
        "J-group ellos: -eron."
      ),
      toEs("They had a problem, but they did everything well.", "Tuvieron un problema, pero lo hicieron todo bien.", "Tener + hacer, ellos.", ["Tuvieron un problema, pero hicieron todo bien."]),
    ]
  ),
  L(
    "preterite-drill-3",
    "a2d-story-cloze-lost-phone",
    "Story Cloze: The Lost Phone",
    "A short story with the preterite verbs missing. Fill each gap — regular, irregular and spelling-change verbs.",
    "7 min",
    [
      sec(
        "The story",
        "«El martes Laura salió de casa a las ocho. Tomó el autobús y llegó a la universidad. Cuando buscó el móvil, no lo encontró. Volvió al autobús, habló con el conductor y él le contó una buena noticia: alguien lo encontró y lo puso en la oficina de objetos perdidos.»",
        [
          ["Cuando buscó el móvil, no lo encontró.", "When she looked for her phone, she didn't find it."],
        ],
        [
          mc(
            "Where was the phone?",
            ["in the lost-and-found office", "at home", "in the university", "in a café"],
            0,
            "Lo puso en la oficina de objetos perdidos."
          ),
        ]
      ),
    ],
    [
      fb("Fill in.", "El martes Laura ___ de casa a las ocho. (salir)", "salió", "Salir is regular in the preterite."),
      fb("Fill in.", "___ el autobús y llegó a la universidad. (tomar)", "Tomó", "-AR él."),
      fb("Fill in (Laura tells it).", "Yo ___ a la universidad a las nueve. (llegar)", "llegué", "-gar → -gué."),
      fb("Fill in (Laura tells it).", "___ el móvil en la mochila, pero no estaba. (buscar)", "Busqué", "-car → -qué."),
      fb("Fill in.", "Alguien lo encontró y lo ___ en la oficina. (poner)", "puso", "Poner → puso."),
      fb("Fill in.", "El conductor le ___ una buena noticia. (contar)", "contó", "Contar is regular in the preterite: contó."),
      toEs("She went back to the bus and talked to the driver.", "Volvió al autobús y habló con el conductor.", "Two regular preterites.", ["Regresó al autobús y habló con el conductor."]),
      toEn("Por fin tuvo su móvil otra vez.", "Finally she had her phone again.", "Tener → tuvo.", ["She finally got her phone back.", "At last she had her phone again."]),
    ]
  ),
  L(
    "preterite-drill-3",
    "a2d-speed-round-preterite-mixed",
    "Speed Round: 12 Preterites, No Hints",
    "A fast mixed round: regular, irregular, spelling change and ser/ir — conjugate without looking back.",
    "6 min",
    [
      sec(
        "Checklist before you answer",
        "1) Irregular stem? (tuv-, estuv-, pud-, pus-, hic-, quis-, vin-, dij-, traj-, fu-) 2) Yo with -car/-gar/-zar? 3) Accent on regular yo/él? 4) J-group ellos → -eron.",
        [
          ["Ayer fui, vi y compré.", "Yesterday I went, saw and bought."],
        ],
        [
          fb("Quick!", "Ellos ___ la verdad. (decir)", "dijeron", "J-group ellos: -eron, not -ieron."),
        ]
      ),
    ],
    [
      fb("Quick!", "Yo ___ el piano. (tocar)", "toqué", "-car → -qué in the yo form."),
      fb("Quick!", "Tú ___ mucho. (trabajar)", "trabajaste", "Regular."),
      fb("Quick!", "Ella ___ en Italia. (estar)", "estuvo", "Estar → estuv- + -o."),
      fb("Quick!", "Nosotros ___ tarde. (venir)", "vinimos", "Venir → vin- + -imos."),
      fb("Quick!", "Ustedes ___ la cena. (hacer)", "hicieron", "Hacer → hic- + -ieron."),
      fb("Quick!", "Yo ___ a las diez. (empezar)", "empecé", "-zar → -cé in the yo form."),
      fb("Quick!", "Él ___ un libro sobre su vida. (escribir)", "escribió", "Regular -IR: escribió."),
      mc(
        "«Mis abuelos ___ muy felices en ese pueblo.» (ser)",
        ["fueron", "fuieron", "eran fue", "furon"],
        0,
        "Ser → fueron."
      ),
    ]
  ),
  L(
    "imperfect-tense-1",
    "a2d-pattern-imperfect-endings",
    "Pattern Practice: Imperfect Endings",
    "-aba and -ía in one frame, every person: drill the imperfect until the endings come without thinking.",
    "6 min",
    [
      sec(
        "Two sets of endings",
        "-AR: -aba, -abas, -aba, -ábamos, -abais, -aban. -ER/-IR: -ía, -ías, -ía, -íamos, -íais, -ían. Yo and él/ella share the same form (yo jugaba / él jugaba), so add the subject if needed.",
        [
          ["De niño jugaba en la calle.", "As a child I used to play in the street."],
          ["Mis abuelos vivían en el campo.", "My grandparents lived in the countryside."],
        ],
        [
          fb("Frame: «De niños, ___ mucho.» (nadar, nosotros)", "De niños, ___ mucho.", "nadábamos", "-AR nosotros → -ábamos."),
        ]
      ),
    ],
    [
      fb("Frame: correr.", "De niña, yo ___ en el parque.", "corría", "-ER yo → -ía."),
      fb("Frame: correr.", "De niños, mis hermanos ___ en el parque.", "corrían", "-ER ellos → -ían."),
      fb("Frame: correr.", "De niño, ¿tú ___ en el parque?", "corrías", "-ER tú → -ías."),
      fb("Frame: escuchar.", "Mi padre siempre ___ la radio por la mañana.", "escuchaba", "-AR él → -aba."),
      fb("Frame: escuchar.", "Vosotros ___ música todo el día.", "escuchabais", "-AR vosotros → -abais."),
      mt(
        "Match subject and imperfect form of vivir.",
        [
          ["nosotros", "vivíamos"],
          ["tú", "vivías"],
          ["ellas", "vivían"],
        ],
        "-IR uses the same endings as -ER."
      ),
      toEs("We used to eat at my grandmother's house.", "Comíamos en casa de mi abuela.", "-ER nosotros → -íamos.", ["Nosotros comíamos en casa de mi abuela.", "Solíamos comer en casa de mi abuela."]),
      wo("Todos los veranos mi familia alquilaba una casa en la playa.", "Habit in the past.", "Every summer my family rented a house at the beach."),
    ]
  ),
  L(
    "imperfect-tense-1",
    "a2d-ser-ir-ver-imperfect",
    "Drill Circuit: Era, Iba, Veía",
    "The only three irregular imperfects, drilled in description, habit and routine sentences.",
    "6 min",
    [
      sec(
        "Just three irregulars",
        "Ser: era, eras, era, éramos, erais, eran. Ir: iba, ibas, iba, íbamos, ibais, iban. Ver: veía, veías, veía, veíamos, veíais, veían. Everything else is regular in the imperfect.",
        [
          ["Mi casa era pequeña, pero muy bonita.", "My house was small, but very pretty."],
          ["Íbamos al colegio en bicicleta.", "We used to go to school by bike."],
        ],
        [
          mc(
            "«Cuando era niño, ___ dibujos animados los sábados.» (ver, yo)",
            ["veía", "vía", "vei", "vio"],
            0,
            "Ver → veía (keeps the e)."
          ),
        ]
      ),
    ],
    [
      fb("Complete.", "Mis profesores ___ muy estrictos. (ser)", "eran", "Ser → eran."),
      fb("Complete.", "Los domingos ___ a misa con mis abuelos. (ir, nosotros)", "íbamos", "Ir → íbamos."),
      fb("Complete.", "Tú ___ la televisión hasta muy tarde. (ver)", "veías", "Ver → veías."),
      fb("Complete.", "Mi pueblo ___ muy tranquilo. (ser)", "era", "Ser → era."),
      fb("Complete.", "Mi madre ___ al mercado todos los días. (ir)", "iba", "Ir → iba."),
      ms(
        "Which forms are correct imperfects?",
        ["éramos", "íbais", "veíamos", "ibamos"],
        [0, 2],
        "Ibais (no accent) and íbamos (with accent)."
      ),
      toEs("We were very good friends.", "Éramos muy buenos amigos.", "Ser → éramos.", ["Éramos muy buenas amigas.", "Nosotros éramos muy buenos amigos."]),
      toEn("Mi abuelo iba al campo y veía las vacas.", "My grandfather used to go to the countryside and see the cows.", "Ir and ver, imperfect.", ["My grandfather would go to the countryside and see the cows.", "My grandfather went to the countryside and saw the cows."]),
    ]
  ),
  L(
    "imperfect-tense-2",
    "a2d-describe-the-scene",
    "Build-Up: Paint the Scene",
    "Weather, time, age, feelings: build a past description sentence by sentence with the imperfect.",
    "6 min",
    [
      sec(
        "The imperfect paints backgrounds",
        "Time (Eran las diez), weather (Hacía frío / Llovía), age (Tenía ocho años), feelings (Estaba nervioso), physical description (Era alto), what was going on (La gente hablaba). None of these has a clear start or end.",
        [
          ["Eran las ocho de la noche y llovía mucho.", "It was eight at night and it was raining hard."],
          ["Yo tenía diez años y estaba muy nervioso.", "I was ten years old and I was very nervous."],
        ],
        [
          mc(
            "Which sentence describes the weather in the past?",
            ["Hacía mucho viento.", "Hizo mucho viento ayer a las tres en punto.", "Hace mucho viento.", "Hará mucho viento."],
            0,
            "Background weather → imperfect."
          ),
        ]
      ),
    ],
    [
      fb("Time.", "___ las siete de la mañana. (ser)", "Eran", "Time in the past → eran."),
      fb("Weather.", "___ mucho calor en la calle. (hacer)", "Hacía", "Hacer → hacía."),
      fb("Age.", "Mi hermano ___ quince años. (tener)", "tenía", "Age → tener, imperfect."),
      fb("Feeling.", "Todos ___ muy cansados. (estar)", "estaban", "State → estar, imperfect."),
      fb("Description.", "La casa ___ un jardín enorme. (tener)", "tenía", "Description → imperfect."),
      wo("En la plaza los niños jugaban y los mayores hablaban.", "Two simultaneous background actions.", "In the square the children played and the adults talked."),
      toEs("It was cold and I was hungry.", "Hacía frío y tenía hambre.", "Weather + feeling.", ["Hacía frío y yo tenía hambre."]),
      toEn("La tienda estaba cerrada y no había nadie.", "The shop was closed and there was nobody there.", "Estaba + había.", ["The store was closed and there was no one there.", "The shop was closed and nobody was there."]),
    ]
  ),
  L(
    "imperfect-tense-2",
    "a2d-old-habits-new-habits",
    "Minimal Pairs: Old Habits, New Habits",
    "Before vs. now: contrast what used to happen (imperfect) with what happens today (present).",
    "6 min",
    [
      sec(
        "Antes + imperfect, ahora + present",
        "Antes vivía en el centro; ahora vivo en las afueras. The imperfect describes an old habit or situation; the present describes the current one. Useful words: antes, de niño, en aquella época / ahora, hoy en día, actualmente.",
        [
          ["Antes trabajaba en un banco; ahora trabajo en casa.", "I used to work in a bank; now I work from home."],
          ["De niña no comía verduras; ahora me encantan.", "As a girl I didn't eat vegetables; now I love them."],
        ],
        [
          fb("Contrast.", "Antes ___ mucho café; ahora bebo té. (beber, yo)", "bebía", "Old habit → imperfect."),
        ]
      ),
    ],
    [
      fb("Contrast.", "Antes mi barrio ___ muy tranquilo; ahora es muy ruidoso. (ser)", "era", "Past situation → era."),
      fb("Contrast.", "Antes mi hermana ___ al trabajo en metro; ahora va andando. (ir)", "iba", "Ir → iba."),
      fb("Contrast.", "De niños, mis primos ___ en el pueblo; ahora viven en Madrid. (vivir)", "vivían", "-IR ellos → -ían."),
      fb("Contrast.", "Antes no ___ Internet en casa; ahora sí. (haber)", "había", "Haber → había."),
      mc(
        "«Hoy en día ___ más tiempo con mi familia.»",
        ["paso", "pasaba", "pasé", "pasaban"],
        0,
        "Hoy en día → present."
      ),
      ms(
        "Which words usually go with the imperfect?",
        ["antes", "de niño", "en aquella época", "ahora"],
        [0, 1, 2],
        "Ahora goes with the present."
      ),
      toEs("I used to live alone; now I live with my partner.", "Antes vivía solo; ahora vivo con mi pareja.", "Imperfect vs. present.", ["Antes vivía sola; ahora vivo con mi pareja.", "Antes vivía solo y ahora vivo con mi pareja."]),
      toEn("En aquella época no teníamos coche.", "At that time we didn't have a car.", "Tener → teníamos.", ["Back then we didn't have a car.", "In those days we didn't have a car."]),
    ]
  ),
  L(
    "imperfect-drill-3",
    "a2d-mientras-simultaneous",
    "Pattern Practice: Mientras… (Two Things at Once)",
    "Mientras yo cocinaba, él ponía la mesa: drill two background actions happening at the same time.",
    "6 min",
    [
      sec(
        "Mientras + imperfect + imperfect",
        "When two actions were in progress at the same time, both go in the imperfect: Mientras yo estudiaba, mi hermano escuchaba música. Mientras usually introduces one of them.",
        [
          ["Mientras mi madre leía, mi padre dormía.", "While my mother was reading, my father was sleeping."],
          ["Yo hablaba por teléfono mientras caminaba.", "I was talking on the phone while I was walking."],
        ],
        [
          fb("Complete.", "Mientras los niños ___, los padres preparaban la comida. (jugar)", "jugaban", "Simultaneous → imperfect."),
        ]
      ),
    ],
    [
      fb("Complete.", "Mientras yo ___ los platos, tú limpiabas la cocina. (lavar)", "lavaba", "Imperfect + imperfect."),
      fb("Complete.", "Mi abuela cantaba mientras ___. (coser)", "cosía", "-ER él → -ía."),
      fb("Complete.", "Mientras nosotros ___ la película, los vecinos hacían ruido. (ver)", "veíamos", "Ver → veíamos."),
      fb("Complete.", "Mientras el profesor ___, los alumnos tomaban notas. (hablar)", "hablaba", "Background action."),
      mc(
        "«Mientras yo dormía, mi compañero ___ la tele.»",
        ["veía", "vio", "ve", "verá"],
        0,
        "Two ongoing actions → both imperfect."
      ),
      wo("Mientras esperábamos el tren, comíamos unos bocadillos.", "Mientras + imperfect.", "While we were waiting for the train, we were eating some sandwiches."),
      toEs("While I was working, my son was playing.", "Mientras yo trabajaba, mi hijo jugaba.", "Two imperfects.", ["Mientras trabajaba, mi hijo jugaba.", "Mi hijo jugaba mientras yo trabajaba."]),
      toEn("Mientras llovía, nosotros jugábamos a las cartas.", "While it was raining, we were playing cards.", "Simultaneous background.", ["While it rained, we played cards.", "While it was raining, we played cards."]),
    ]
  ),
  L(
    "imperfect-drill-3",
    "a2d-childhood-say-it",
    "Say It Yourself: When I Was a Child",
    "Personal translation drill about your childhood — habits, descriptions and feelings in the imperfect.",
    "6 min",
    [
      sec(
        "Talking about childhood",
        "Start with Cuando era niño/a… or De pequeño/a… Then describe: dónde vivías, cómo era tu casa, qué hacías después del colegio, qué te gustaba, con quién jugabas. Everything is imperfect: it describes a period, not single events.",
        [
          ["De pequeña me gustaba mucho leer.", "When I was little I really liked reading."],
          ["Cuando era niño, jugaba al fútbol con mis vecinos.", "When I was a kid, I played football with my neighbors."],
        ],
        [
          mc(
            "«De pequeño» means…",
            ["when I was little", "a little bit", "in a small way", "for a short time"],
            0,
            "De pequeño/a = as a child."
          ),
        ]
      ),
    ],
    [
      toEs("When I was a child, I lived in a small town.", "Cuando era niño, vivía en un pueblo pequeño.", "Era + vivía.", ["Cuando era niña, vivía en un pueblo pequeño.", "De pequeño, vivía en un pueblo pequeño."]),
      toEs("My house had a big garden.", "Mi casa tenía un jardín grande.", "Description → imperfect.", ["Mi casa tenía un jardín muy grande."]),
      toEs("After school I used to play with my brother.", "Después del colegio jugaba con mi hermano.", "Habit → imperfect.", ["Después de la escuela jugaba con mi hermano."]),
      toEs("I liked chocolate a lot.", "Me gustaba mucho el chocolate.", "Gustar → gustaba.", ["Me encantaba el chocolate."]),
      fb("Complete.", "Mi mejor amiga ___ Lucía. (llamarse)", "se llamaba", "Llamarse → se llamaba."),
      fb("Complete.", "En verano siempre ___ a la playa. (ir, nosotros)", "íbamos", "Ir → íbamos."),
      fb("Complete.", "Yo ___ miedo de los perros. (tener)", "tenía", "Tener → tenía."),
      wo("Cuando era pequeña, mi abuela me contaba cuentos antes de dormir.", "Childhood habit.", "When I was little, my grandmother told me stories before bed."),
    ]
  ),
  L(
    "imperfect-drill-3",
    "a2d-fix-paragraph-imperfect",
    "Fix the Paragraph: Imperfect Forms",
    "A memory written with wrong imperfect forms (íba, eraba, veía without the e): repair every verb.",
    "6 min",
    [
      sec(
        "Common imperfect errors",
        "✗ íbamos without accent is fine (íbamos needs it!), but ✗ íba (→ iba) and ✗ ibámos (→ íbamos) are wrong. ✗ eraba (→ era). ✗ vía (→ veía). ✗ tenió (preterite mix-up → tenía). Paragraph: «En 1998 yo vivía en Lima. Eraba estudiante y íba a la universidad en autobús. Por las tardes vía a mis amigos.»",
        [
          ["✗ Eraba estudiante. → ✓ Era estudiante.", "I was a student."],
          ["✗ Vía a mis amigos. → ✓ Veía a mis amigos.", "I used to see my friends."],
        ],
        [
          fb("Fix it.", "___ estudiante de medicina. (the text says: Eraba)", "Era", "Ser → era."),
        ]
      ),
    ],
    [
      fb("Fix it.", "___ a la universidad en autobús. (the text says: Íba)", "Iba", "Iba has no accent."),
      fb("Fix it.", "Por las tardes ___ a mis amigos. (the text says: vía)", "veía", "Ver keeps the e."),
      fb("Fix it.", "Nosotros ___ en un piso pequeño. (the text says: vivíbamos)", "vivíamos", "-IR → -íamos."),
      fb("Fix it.", "Mis padres ___ en una fábrica. (the text says: trabajían)", "trabajaban", "-AR → -aban."),
      fb("Fix it.", "El barrio ___ muchos parques. (the text says: tenió)", "tenía", "Imperfect → tenía."),
      mc(
        "Which sentence is correct?",
        ["Siempre íbamos al cine los viernes.", "Siempre ibámos al cine los viernes.", "Siempre íbabamos al cine.", "Siempre ivamos al cine."],
        0,
        "Íbamos."
      ),
      ms(
        "Which forms are wrong?",
        ["eraba", "veía", "íba", "estaba"],
        [0, 2],
        "Era and iba."
      ),
      toEs("We were students and we used to go out a lot.", "Éramos estudiantes y salíamos mucho.", "Ser + salir, imperfect.", ["Éramos estudiantes y salíamos bastante."]),
    ]
  ),
  L(
    "imperfect-drill-3",
    "a2d-speed-round-imperfect",
    "Speed Round: 10 Imperfects, No Hints",
    "Mixed -AR, -ER, -IR and irregular imperfects, as fast as you can.",
    "5 min",
    [
      sec(
        "Checklist",
        "Is it ser, ir or ver? Use the irregular form. Otherwise: -AR → -aba…, -ER/-IR → -ía… Nosotros -AR → -ábamos (accent on the á).",
        [
          ["Yo era, tú ibas, ella veía, nosotros hablábamos.", "I was, you used to go, she used to see, we used to talk."],
        ],
        [
          fb("Quick!", "Ellos ___ en Chile. (vivir)", "vivían", "-IR ellos → -ían."),
        ]
      ),
    ],
    [
      fb("Quick!", "Yo ___ muy tímido. (ser)", "era", "Irregular: ser → era."),
      fb("Quick!", "Tú ___ al gimnasio. (ir)", "ibas", "Irregular: ir → ibas."),
      fb("Quick!", "Nosotros ___ en el coro. (cantar)", "cantábamos", "-AR nosotros → -ábamos."),
      fb("Quick!", "Ella ___ mucho. (leer)", "leía", "-ER ella → -ía."),
      fb("Quick!", "Vosotros ___ la radio. (escuchar)", "escuchabais", "-AR vosotros → -abais."),
      fb("Quick!", "Ustedes ___ temprano. (salir)", "salían", "-IR ustedes → -ían."),
      fb("Quick!", "Yo no ___ nada. (ver)", "veía", "Irregular: ver → veía."),
      mc(
        "«De niños, mi hermano y yo ___ mucho.» (pelearse)",
        ["nos peleábamos", "se peleaban", "nos peleamos ayer", "peleábamos nos"],
        0,
        "Reflexive nosotros + imperfect."
      ),
    ]
  ),
  L(
    "preterite-vs-imperfect-1",
    "a2d-choose-explain-pret-imp",
    "Choose & Explain: Which Past, and Why?",
    "For each sentence, pick the tense and the reason: completed action, background, habit, or interruption.",
    "7 min",
    [
      sec(
        "Four reasons",
        "Preterite: (1) a completed action with a clear moment (Ayer llamé a Ana). Imperfect: (2) background/description (Hacía sol), (3) habit (Siempre llamaba a Ana), (4) action in progress when something happened (Hablaba cuando…).",
        [
          ["Siempre comíamos a las dos. (habit)", "We always ate at two."],
          ["Ese día comimos a las cuatro. (one completed event)", "That day we ate at four."],
        ],
        [
          mc(
            "«Anoche ___ una pizza.» Tense and reason?",
            ["preterite — completed action at a specific time", "imperfect — habit", "imperfect — background", "preterite — description"],
            0,
            "Anoche + a single event."
          ),
        ]
      ),
    ],
    [
      mc(
        "«Todos los veranos ___ a Galicia.» (ir, nosotros)",
        ["íbamos — habit", "fuimos — single event", "íbamos — interruption", "fuimos — background"],
        0,
        "Todos los veranos = habit."
      ),
      mc(
        "«___ una noche muy oscura.» (ser)",
        ["Era — background", "Fue — completed action", "Era — habit", "Fue — interruption"],
        0,
        "Setting the scene."
      ),
      mc(
        "«El sábado ___ a mis padres.» (visitar, yo)",
        ["visité — completed event", "visitaba — habit", "visitaba — background", "visité — habit"],
        0,
        "El sábado = one occasion."
      ),
      fb("Choose.", "De joven mi padre ___ en un restaurante. (trabajar) — habit/period", "trabajaba", "Period of time → imperfect."),
      fb("Choose.", "En 2015 mi padre ___ un restaurante. (abrir) — one event", "abrió", "Single event → preterite."),
      fb("Choose.", "Yo ___ la ducha cuando sonó el teléfono. (tomar) — in progress", "tomaba", "Action in progress → imperfect."),
      mt(
        "Match each sentence with its reason.",
        [
          ["Llovía mucho.", "background"],
          ["Siempre llegaba tarde.", "habit"],
          ["Llegó tarde el lunes.", "completed event"],
        ],
        "Reasons for choosing the tense."
      ),
      toEs("Every day I walked to school, but that day I took the bus.", "Todos los días caminaba al colegio, pero ese día tomé el autobús.", "Habit vs. one event.", ["Todos los días iba andando al colegio, pero ese día tomé el autobús.", "Todos los días caminaba a la escuela, pero ese día tomé el autobús."]),
    ]
  ),
  L(
    "preterite-vs-imperfect-1",
    "a2d-signal-words-sort",
    "Speed Round: Signal Words",
    "Ayer, de repente, siempre, mientras, una vez, todos los días: let the signal word choose the tense.",
    "6 min",
    [
      sec(
        "Signal words",
        "Usually preterite: ayer, anoche, el lunes pasado, una vez, de repente, en 2010, a las cinco. Usually imperfect: siempre, a menudo, todos los días, de niño, mientras, normalmente, cada verano. They are strong hints, not absolute rules.",
        [
          ["De repente se apagó la luz.", "Suddenly the light went out."],
          ["Normalmente cenábamos a las nueve.", "Normally we had dinner at nine."],
        ],
        [
          ms(
            "Which words usually go with the preterite?",
            ["de repente", "anoche", "una vez", "a menudo"],
            [0, 1, 2],
            "A menudo = often → imperfect."
          ),
        ]
      ),
    ],
    [
      fb("Signal word!", "A menudo ___ a mis abuelos. (visitar, yo)", "visitaba", "A menudo → imperfect."),
      fb("Signal word!", "Una vez ___ a un famoso en el aeropuerto. (ver, yo)", "vi", "Una vez → preterite."),
      fb("Signal word!", "De repente ___ un ruido muy fuerte. (escuchar, nosotros)", "escuchamos", "De repente → preterite."),
      fb("Signal word!", "Cada verano ___ en el mismo camping. (acampar, nosotros)", "acampábamos", "Cada verano → imperfect."),
      fb("Signal word!", "Anoche ___ muy tarde. (acostarse, yo)", "me acosté", "Anoche → preterite."),
      mt(
        "Match the signal word with the tense it usually takes.",
        [
          ["normalmente", "imperfect"],
          ["el año pasado", "preterite"],
          ["de niño", "imperfect (description)"],
        ],
        "Signal words."
      ),
      mc(
        "«Ayer ___ todo el día.» (llover)",
        ["llovió", "llovía siempre", "llueve", "lloverá"],
        0,
        "Ayer + a delimited day → preterite."
      ),
      toEs("Suddenly the dog started to bark.", "De repente el perro empezó a ladrar.", "De repente → preterite.", ["De repente, el perro comenzó a ladrar."]),
    ]
  ),
  L(
    "preterite-vs-imperfect-1",
    "a2d-interrupted-actions",
    "Pattern Practice: Cuando… (Interrupted Actions)",
    "Estaba en la ducha cuando llamaron: drill the imperfect-in-progress + preterite-interruption pattern.",
    "6 min",
    [
      sec(
        "The interruption pattern",
        "Imperfect (what was happening) + cuando + preterite (what happened): Yo leía cuando llegó mi hermano. It also works the other way round: Cuando llegó mi hermano, yo leía.",
        [
          ["Dormíamos cuando empezó la tormenta.", "We were sleeping when the storm started."],
          ["Cuando salí, llovía.", "When I went out, it was raining."],
        ],
        [
          fb("Complete.", "Yo ___ la cena cuando llegaron los invitados. (preparar)", "preparaba", "In progress → imperfect."),
        ]
      ),
    ],
    [
      fb("Complete.", "Caminaba por la calle cuando ___ a mi exnovio. (ver, yo)", "vi", "Interruption → preterite."),
      fb("Complete.", "Los niños ___ cuando se fue la luz. (jugar)", "jugaban", "In progress → imperfect."),
      fb("Complete.", "Cuando ___ el teléfono, estaba en la ducha. (sonar)", "sonó", "Interruption → preterite."),
      fb("Complete.", "Cuando llegué a la estación, muchos pasajeros ___ en el andén. (esperar)", "esperaban", "Background in progress → imperfect."),
      mc(
        "«Mientras cenábamos, alguien ___ a la puerta.»",
        ["llamó", "llamaba", "llama", "llamará"],
        0,
        "Interruption → preterite."
      ),
      wo("Yo escribía un correo cuando se apagó el ordenador.", "Imperfect + cuando + preterite.", "I was writing an email when the computer shut down."),
      toEs("We were watching TV when my father arrived.", "Veíamos la tele cuando llegó mi padre.", "In progress + interruption.", ["Estábamos viendo la tele cuando llegó mi padre.", "Veíamos la televisión cuando llegó mi padre."]),
      toEn("Cuando entré, todos hablaban a la vez.", "When I came in, everyone was talking at once.", "Preterite + imperfect.", ["When I walked in, everybody was talking at the same time.", "When I entered, everyone was talking at once."]),
    ]
  ),
  L(
    "preterite-vs-imperfect-2",
    "a2d-story-cloze-snow-day",
    "Story Cloze: The Snow Day",
    "A story with every verb missing: decide scene (imperfect) or event (preterite) for each gap.",
    "7 min",
    [
      sec(
        "The story",
        "«Era enero y hacía mucho frío. Yo tenía nueve años. Esa mañana me desperté temprano y miré por la ventana: todo estaba blanco. Corrí a la cocina, donde mi madre preparaba el desayuno. “¡No hay colegio!”, dijo. Salimos al jardín y construimos un muñeco de nieve enorme.»",
        [
          ["Todo estaba blanco.", "Everything was white."],
          ["Construimos un muñeco de nieve.", "We built a snowman."],
        ],
        [
          mc(
            "Why is «hacía mucho frío» in the imperfect?",
            ["it describes the background weather", "it's a single completed action", "it interrupts something", "it's a future plan"],
            0,
            "Scene-setting."
          ),
        ]
      ),
    ],
    [
      fb("Fill in.", "___ enero y hacía mucho frío. (ser)", "Era", "Background."),
      fb("Fill in.", "Yo ___ nueve años. (tener)", "tenía", "Age → imperfect."),
      fb("Fill in.", "Esa mañana ___ temprano. (despertarse, yo)", "me desperté", "Event → preterite."),
      fb("Fill in.", "Mi madre ___ el desayuno. (preparar)", "preparaba", "In progress → imperfect."),
      fb("Fill in.", "___ al jardín con mi hermana. (salir, yo)", "Salí", "Event → preterite."),
      fb("Fill in.", "Juntos ___ un muñeco de nieve. (construir, nosotros)", "construimos", "Event → preterite."),
      mc(
        "«Todo estaba blanco» describes…",
        ["what the scene looked like", "an action that interrupted", "a completed event", "a habit"],
        0,
        "Description → imperfect."
      ),
      toEs("It was snowing and the streets were empty.", "Nevaba y las calles estaban vacías.", "Two background descriptions.", ["Estaba nevando y las calles estaban vacías."]),
    ]
  ),
  L(
    "preterite-vs-imperfect-2",
    "a2d-minimal-pairs-meaning-shift",
    "Minimal Pairs: Same Verb, Different Story",
    "Conocía vs. conocí, sabía vs. supe, quería vs. quise, tenía vs. tuve: how the tense changes the meaning.",
    "7 min",
    [
      sec(
        "Verbs that shift meaning",
        "Conocer: conocía (I knew someone already) / conocí (I met for the first time). Saber: sabía (I knew) / supe (I found out). Querer: quería (I wanted) / no quise (I refused). Tener: tenía (I had) / tuve (I got, received, had to at one moment).",
        [
          ["Conocí a mi mujer en 2010.", "I met my wife in 2010."],
          ["Ya conocía a su hermano.", "I already knew her brother."],
        ],
        [
          mc(
            "«Ayer supe la verdad» means…",
            ["Yesterday I found out the truth.", "Yesterday I knew the truth.", "I always knew the truth.", "I will know the truth."],
            0,
            "Saber in preterite = find out."
          ),
        ]
      ),
    ],
    [
      mc(
        "«No quiso venir» means…",
        ["He refused to come.", "He didn't want to come (in general).", "He wanted to come.", "He couldn't come."],
        0,
        "Querer negative preterite = refused."
      ),
      mc(
        "«Tuve una carta de mi abuela» most naturally means…",
        ["I got a letter from my grandmother.", "I used to have letters.", "I have a letter.", "I wanted a letter."],
        0,
        "Tener preterite = got/received."
      ),
      fb("Choose.", "___ a Carlos en una fiesta el año pasado. (conocer, yo) — first meeting", "Conocí", "First meeting → preterite."),
      fb("Choose.", "Yo ya ___ a Carlos desde el colegio. (conocer) — already knew", "conocía", "Already known → imperfect."),
      fb("Choose.", "Cuando ___ la noticia, llamé a mi madre. (saber, yo) — found out", "supe", "Found out → preterite."),
      fb("Choose.", "Yo no ___ que estabas enfermo. (saber) — didn't know", "sabía", "State of knowledge → imperfect."),
      mt(
        "Match each form with its meaning.",
        [
          ["conocí", "I met"],
          ["sabía", "I knew"],
          ["supe", "I found out"],
          ["quería", "I wanted"],
        ],
        "Meaning shifts."
      ),
      toEs("I met my best friend at university.", "Conocí a mi mejor amigo en la universidad.", "Conocer → conocí.", ["Conocí a mi mejor amiga en la universidad."]),
    ]
  ),
  L(
    "preterite-vs-imperfect-2",
    "a2d-chain-habit-to-event",
    "Chain Transformations: Habit → One Time",
    "Turn habits into single events and back: siempre comía → ese día comí → siempre comía.",
    "6 min",
    [
      sec(
        "Change the time word, change the tense",
        "Siempre / todos los días / cada año → imperfect. Ese día / una vez / el lunes / en 2020 → preterite. Keep the rest of the sentence identical and watch the verb change.",
        [
          ["Siempre llegaba temprano. → Ese día llegué tarde.", "I always arrived early. → That day I arrived late."],
        ],
        [
          fb("Habit → one time.", "Siempre comíamos en casa. → Ese día ___ en un restaurante.", "comimos", "Single event → preterite."),
        ]
      ),
    ],
    [
      fb("Habit → one time.", "Todos los días iba en coche. → El lunes ___ en tren.", "fui", "Ir → fui."),
      fb("Habit → one time.", "Cada verano estábamos en la playa. → En 2019 ___ en la montaña.", "estuvimos", "Estar → estuvimos."),
      fb("Habit → one time.", "Normalmente mi jefe hacía la reunión. → Ese viernes la ___ yo.", "hice", "Hacer → hice."),
      fb("One time → habit.", "Ayer me levanté a las seis. → De joven siempre ___ a las seis.", "me levantaba", "Habit → imperfect."),
      fb("One time → habit.", "El sábado vinieron mis primos. → Todos los sábados ___ mis primos.", "venían", "Habit → imperfect."),
      fb("One time → habit.", "Una vez dijo una mentira. → Siempre ___ mentiras.", "decía", "Habit → imperfect."),
      mc(
        "«Siempre tomaba café, pero ese día ___ té.»",
        ["tomé", "tomaba", "tomo", "tomaré"],
        0,
        "Contrast habit vs. one event."
      ),
      toEs("I always ate meat, but that day I ate fish.", "Siempre comía carne, pero ese día comí pescado.", "Habit vs. one event.", ["Siempre comía carne pero ese día comí pescado."]),
    ]
  ),
  L(
    "preterite-vs-imperfect-mastery-check",
    "a2d-fix-paragraph-pret-imp",
    "Fix the Paragraph: Wrong Past Tense",
    "A travel story where every other verb is in the wrong past tense. Find them and fix them.",
    "7 min",
    [
      sec(
        "The paragraph",
        "«El verano pasado fuimos a Cuba. ✗ Hizo mucho calor todos los días (→ hacía). El hotel ✗ fue precioso y ✗ tuvo una piscina enorme (→ era, tenía). Un día ✗ íbamos a Trinidad en coche (→ fuimos). Mientras ✗ condujimos (→ conducíamos), ✗ empezaba a llover (→ empezó).»",
        [
          ["Hacía calor todos los días.", "It was hot every day."],
          ["Mientras conducíamos, empezó a llover.", "While we were driving, it started to rain."],
        ],
        [
          fb("Fix it.", "El hotel ___ precioso. (the story says: fue — it's a description)", "era", "Description → imperfect."),
        ]
      ),
    ],
    [
      fb("Fix it.", "___ mucho calor todos los días. (the story says: Hizo — it's a repeated background)", "Hacía", "Background/habit."),
      fb("Fix it.", "El hotel ___ una piscina enorme. (the story says: tuvo)", "tenía", "Description → imperfect."),
      fb("Fix it.", "Un día ___ a Trinidad en coche. (the story says: íbamos — one trip)", "fuimos", "Single event → preterite."),
      fb("Fix it.", "Mientras ___, empezó a llover. (the story says: condujimos — but it was in progress)", "conducíamos", "In progress → imperfect."),
      fb("Fix it.", "Mientras conducíamos, ___ a llover. (the story says: empezaba — interruption)", "empezó", "Interruption → preterite."),
      mc(
        "Which sentence is correct?",
        ["Cuando llegamos al hotel, eran las once.", "Cuando llegábamos al hotel, fueron las once.", "Cuando llegamos al hotel, fueron las once.", "Cuando llegaba al hotel, fue las once."],
        0,
        "Event (llegamos) + time as background (eran)."
      ),
      ms(
        "Which verbs should be imperfect in a story?",
        ["time of day", "weather as background", "age", "a sudden event"],
        [0, 1, 2],
        "Sudden events → preterite."
      ),
      toEs("The beach was beautiful and we swam every day.", "La playa era preciosa y nadábamos todos los días.", "Description + habit.", ["La playa era bonita y nadábamos todos los días.", "La playa era preciosa y nadábamos cada día."]),
    ]
  ),
  L(
    "preterite-vs-imperfect-mastery-check",
    "a2d-question-answer-past",
    "Q&A Drill: Answer in the Right Past",
    "Questions about the past already contain the tense you need. Answer them, keeping the tense of the question.",
    "6 min",
    [
      sec(
        "Listen to the question",
        "¿Qué hacías cuando…? → imperfect answer (Estaba / Leía…). ¿Qué hiciste…? → preterite answer (Fui / Compré…). ¿Cómo era…? → imperfect description. ¿Qué pasó? → preterite events.",
        [
          ["—¿Qué hacías a las diez? —Veía una película.", "What were you doing at ten? — I was watching a movie."],
          ["—¿Qué pasó? —Se rompió un vaso.", "What happened? — A glass broke."],
        ],
        [
          fb("Answer.", "—¿Cómo era tu primer piso? —___ muy pequeño.", "Era", "Cómo era → description."),
        ]
      ),
    ],
    [
      fb("Answer.", "—¿Qué hiciste el sábado? —___ al teatro. (ir)", "Fui", "Hiciste → preterite."),
      fb("Answer.", "—¿Qué hacías cuando te llamé? —___. (dormir)", "Dormía", "Hacías → imperfect."),
      fb("Answer.", "—¿Qué pasó en la reunión? —El jefe ___ una noticia importante. (anunciar)", "anunció", "Pasó → preterite."),
      fb("Answer.", "—¿Dónde vivías de niño? —___ en Valencia.", "Vivía", "Vivías → imperfect."),
      fb("Answer.", "—¿Cuánto tiempo estuviste en Roma? —___ dos semanas.", "Estuve", "Estuviste → preterite."),
      mt(
        "Match question and answer.",
        [
          ["¿Qué tiempo hacía?", "Hacía sol."],
          ["¿Qué compraste?", "Compré zapatos."],
          ["¿Con quién jugabas?", "Jugaba con mis vecinos."],
        ],
        "Tense of question = tense of answer."
      ),
      toEs("—What were you doing? —I was cooking.", "—¿Qué hacías? —Cocinaba.", "Imperfect Q&A.", ["—¿Qué estabas haciendo? —Estaba cocinando.", "—¿Qué hacías? —Estaba cocinando."]),
    ]
  ),
  L(
    "preterite-vs-imperfect-mastery-check",
    "a2d-mixed-practice-pret-imp-1",
    "Mixed Practice: Past Tenses Round 1",
    "Eight mixed items — endings, irregulars and the preterite/imperfect choice all at once.",
    "6 min",
    [
      sec(
        "Two decisions per verb",
        "First decide the tense (event or background/habit?), then build the form (regular, irregular stem, spelling change). Doing both quickly is the goal of this round.",
        [
          ["Estaba cansado, así que me acosté temprano.", "I was tired, so I went to bed early."],
        ],
        [
          fb("Decide and build.", "Como ___ tarde, tomé un taxi. (ser)", "era", "Background reason → imperfect."),
        ]
      ),
    ],
    [
      fb("Decide and build.", "Ayer ___ que trabajar hasta las nueve. (tener, yo)", "tuve", "One day → preterite."),
      fb("Decide and build.", "De niña ___ mucho miedo a la oscuridad. (tener, yo)", "tenía", "Childhood state → imperfect."),
      fb("Decide and build.", "Cuando ___ a casa, mi hijo ya dormía. (llegar, yo)", "llegué", "Event + -gar → -gué."),
      fb("Decide and build.", "El restaurante ___ lleno, así que nos fuimos. (estar)", "estaba", "Description → imperfect."),
      fb("Decide and build.", "El año pasado ___ un curso de cocina. (hacer, nosotros)", "hicimos", "Completed → preterite."),
      fb("Decide and build.", "Mi abuelo siempre nos ___ historias. (contar)", "contaba", "Habit → imperfect."),
      mc(
        "«Nosotros ___ en el parque cuando ___ a llover.»",
        ["paseábamos / empezó", "paseamos / empezaba", "paseábamos / empezaba", "paseamos / empezó"],
        0,
        "In progress + interruption."
      ),
      toEn("No quise decir nada porque estaba enfadada.", "I refused to say anything because I was angry.", "Quise (refused) + estaba (state).", ["I didn't want to say anything because I was angry.", "I refused to say anything because I was upset."]),
    ]
  ),
  L(
    "preterite-vs-imperfect-drill-3",
    "a2d-story-cloze-first-job",
    "Story Cloze: My First Job",
    "Fill every gap in a first-job memory: background in the imperfect, events in the preterite.",
    "7 min",
    [
      sec(
        "The story",
        "«Tenía diecisiete años cuando conseguí mi primer trabajo. Era camarero en una cafetería pequeña. El primer día estaba muy nervioso. A las nueve entró un cliente muy serio, pidió un café y… se lo tiré encima. Él se rió y me dijo: “Tranquilo, a todos nos pasa”.»",
        [
          ["Tenía diecisiete años cuando conseguí mi primer trabajo.", "I was seventeen when I got my first job."],
          ["Estaba muy nervioso.", "I was very nervous."],
        ],
        [
          mc(
            "Why «conseguí» and not «conseguía»?",
            ["It's a single completed event.", "It's a habit.", "It's background description.", "It's an action in progress."],
            0,
            "Getting the job happened once."
          ),
        ]
      ),
    ],
    [
      fb("Fill in.", "___ camarero en una cafetería pequeña. (ser, yo)", "Era", "Description of a role over a period."),
      fb("Fill in.", "El primer día ___ muy nervioso. (estar, yo)", "estaba", "State → imperfect."),
      fb("Fill in.", "A las nueve ___ un cliente muy serio. (entrar)", "entró", "Event → preterite."),
      fb("Fill in.", "El cliente ___ un café solo. (tomar)", "tomó", "Event → preterite."),
      fb("Fill in.", "Él se ___ y me dijo algo amable. (reírse, preterite)", "rió", "Event → preterite."),
      mc(
        "«La cafetería ___ en una calle muy tranquila.»",
        ["estaba", "estuvo", "está", "estará"],
        0,
        "Location/description → imperfect."
      ),
      toEs("I was very young when I started to work.", "Era muy joven cuando empecé a trabajar.", "Background + event.", ["Era muy joven cuando comencé a trabajar.", "Yo era muy joven cuando empecé a trabajar."]),
      toEn("Todos los días limpiaba las mesas y ponía las sillas.", "Every day I cleaned the tables and set out the chairs.", "Habit → imperfect.", ["Every day I used to clean the tables and put out the chairs.", "Every day I would clean the tables and set up the chairs."]),
    ]
  ),
  L(
    "preterite-vs-imperfect-drill-3",
    "a2d-two-versions-habit-event",
    "Minimal Pairs: Two Versions of the Same Day",
    "The same sentence told as a routine and as a one-off: see how every verb switches tense.",
    "6 min",
    [
      sec(
        "Routine vs. that one day",
        "Routine: «Los lunes me levantaba a las siete, desayunaba y salía a las ocho.» One day: «Aquel lunes me levanté a las siete, desayuné y salí a las ocho.» Same actions, different point of view: repeated pattern vs. one specific occasion.",
        [
          ["Los lunes salía a las ocho. / Aquel lunes salí a las ocho.", "On Mondays I used to leave at eight. / That Monday I left at eight."],
        ],
        [
          fb("One day version.", "Aquel lunes ___ a las siete. (levantarse, yo)", "me levanté", "One occasion → preterite."),
        ]
      ),
    ],
    [
      fb("Routine version.", "Los lunes ___ café con leche. (desayunar, yo)", "desayunaba", "Routine → imperfect."),
      fb("One day version.", "Aquel lunes ___ solo un zumo. (tomar, yo)", "tomé", "One occasion → preterite."),
      fb("Routine version.", "Los viernes mis amigos ___ a mi casa. (venir)", "venían", "Routine → imperfect."),
      fb("One day version.", "Aquel viernes mis amigos no ___. (venir)", "vinieron", "One occasion → preterite."),
      fb("Routine version.", "En verano siempre ___ en el río. (bañarse, nosotros)", "nos bañábamos", "Routine → imperfect."),
      fb("One day version.", "Ese verano ___ en el mar por primera vez. (bañarse, nosotros)", "nos bañamos", "One occasion → preterite."),
      mc(
        "«Aquella noche ___ a las tres de la mañana.» (acostarse, yo)",
        ["me acosté", "me acostaba", "me acuesto", "me acostaré"],
        0,
        "Aquella noche = one occasion."
      ),
      toEs("On Sundays we used to eat paella, but that Sunday we ate pizza.", "Los domingos comíamos paella, pero aquel domingo comimos pizza.", "Routine vs. one day.", ["Los domingos comíamos paella, pero ese domingo comimos pizza."]),
    ]
  ),
  L(
    "preterite-vs-imperfect-drill-3",
    "a2d-build-up-accident",
    "Build-Up: Telling an Accident Story",
    "Scene → action in progress → the event → the result: build a past-tense story in four steps.",
    "7 min",
    [
      sec(
        "Four-step story",
        "1) Scene (imperfect): Era un martes y llovía. 2) In progress (imperfect): Yo iba en bici al trabajo. 3) Event (preterite): De repente, un coche salió de un garaje. 4) Result (preterite): Me caí, pero no me pasó nada grave.",
        [
          ["Iba en bici cuando un coche salió de un garaje.", "I was riding my bike when a car came out of a garage."],
          ["Me caí, pero no me pasó nada.", "I fell, but nothing happened to me."],
        ],
        [
          mc(
            "Step 3 (the event) goes in…",
            ["the preterite", "the imperfect", "the present", "the future"],
            0,
            "The event moves the story forward."
          ),
        ]
      ),
    ],
    [
      fb("Step 1: scene.", "___ un martes por la mañana. (ser)", "Era", "Scene → imperfect."),
      fb("Step 1: scene.", "___ mucho y había poca luz. (llover)", "Llovía", "Weather → imperfect."),
      fb("Step 2: in progress.", "Yo ___ en bici por la avenida. (ir)", "iba", "In progress → imperfect."),
      fb("Step 3: event.", "De repente un coche ___ de un garaje. (salir)", "salió", "Event → preterite."),
      fb("Step 4: result.", "Yo me ___ al suelo. (caer, yo: caí)", "caí", "Result → preterite."),
      fb("Step 4: result.", "El conductor ___ del coche y me ayudó. (bajar)", "bajó", "Result → preterite."),
      wo("Afortunadamente, no me pasó nada grave.", "Result.", "Fortunately, nothing serious happened to me."),
      toEs("It was dark and I was driving slowly when a dog crossed the street.", "Estaba oscuro y conducía despacio cuando un perro cruzó la calle.", "Scene + in progress + event.", ["Era de noche y conducía despacio cuando un perro cruzó la calle.", "Estaba oscuro y manejaba despacio cuando un perro cruzó la calle."]),
    ]
  ),
  L(
    "preterite-vs-imperfect-drill-3",
    "a2d-choose-explain-tricky",
    "Choose & Explain: The Tricky Ones",
    "Durations, repeated-but-counted actions and the time of day: the cases that fool even advanced learners.",
    "7 min",
    [
      sec(
        "Three tricky cases",
        "1) A closed period, even a long one, takes the preterite: Viví en París tres años (and that chapter is over). 2) Counted repetitions take the preterite: Fui a Roma cinco veces. 3) Clock time and age as background take the imperfect: Eran las tres. / Tenía veinte años.",
        [
          ["Trabajé en esa empresa diez años.", "I worked at that company for ten years."],
          ["Llamé tres veces, pero nadie contestó.", "I called three times, but nobody answered."],
        ],
        [
          mc(
            "«___ en Londres cinco años, de 2010 a 2015.» (vivir, yo)",
            ["Viví", "Vivía", "Vivo", "Viviré"],
            0,
            "Closed period with limits → preterite."
          ),
        ]
      ),
    ],
    [
      mc(
        "«El año pasado ___ al médico cuatro veces.» (ir, yo)",
        ["fui", "iba", "voy", "iré"],
        0,
        "Counted repetitions → preterite."
      ),
      mc(
        "«Cuando llegamos, ___ las doce.» (ser)",
        ["eran", "fueron", "son", "serán"],
        0,
        "Clock time as background → imperfect."
      ),
      mc(
        "«La reunión ___ dos horas.» (durar)",
        ["duró", "duraba", "dura", "durará"],
        0,
        "A closed, measured duration → preterite."
      ),
      fb("Choose.", "Mi abuelo ___ en el ejército durante tres años. (estar)", "estuvo", "Closed period → preterite."),
      fb("Choose.", "Cuando me casé, ___ treinta años. (tener, yo)", "tenía", "Age as background → imperfect."),
      fb("Choose.", "Te ___ cinco mensajes ayer. (escribir, yo)", "escribí", "Counted → preterite."),
      mt(
        "Match the sentence with its reason.",
        [
          ["Estudié inglés dos años.", "closed period"],
          ["Eran las seis.", "time as background"],
          ["Leí el libro tres veces.", "counted repetitions"],
        ],
        "Tricky cases."
      ),
      toEs("I lived in Mexico for two years.", "Viví en México dos años.", "Closed period → preterite.", ["Viví dos años en México.", "Viví en México durante dos años."]),
    ]
  ),
  L(
    "preterite-vs-imperfect-drill-3",
    "a2d-say-it-yourself-memory",
    "Say It Yourself: A Special Memory",
    "Translate sentences about a special day from your past, mixing scene-setting and events.",
    "6 min",
    [
      sec(
        "A memorable day",
        "Pattern: set the scene (Era mi cumpleaños / Tenía doce años / Hacía sol), then tell what happened (Mis padres me regalaron… / Fuimos a… / Vimos…), then how you felt at the end (Fue un día perfecto).",
        [
          ["Era mi cumpleaños y hacía un sol maravilloso.", "It was my birthday and the sun was shining beautifully."],
          ["Fue el mejor día de mi vida.", "It was the best day of my life."],
        ],
        [
          mc(
            "«Fue un día perfecto» sums up the day. Why preterite?",
            ["It evaluates the whole, finished day.", "It describes background.", "It's a habit.", "It's in progress."],
            0,
            "Evaluation of a completed event."
          ),
        ]
      ),
    ],
    [
      toEs("I was twelve years old.", "Tenía doce años.", "Age → imperfect.", ["Yo tenía doce años."]),
      toEs("My parents gave me a bicycle.", "Mis padres me regalaron una bicicleta.", "Event → preterite.", ["Mis padres me regalaron una bici."]),
      toEs("It was sunny and we went to the park.", "Hacía sol y fuimos al parque.", "Scene + event.", ["Hacía sol y nos fuimos al parque."]),
      toEs("I was very happy.", "Estaba muy feliz.", "Feeling → imperfect.", ["Estaba muy contento.", "Estaba muy contenta.", "Yo estaba muy feliz."]),
      toEs("It was a perfect day.", "Fue un día perfecto.", "Evaluation → preterite.", []),
      fb("Complete.", "Mi abuela ___ una tarta de chocolate. (hacer)", "hizo", "Event → hizo."),
      fb("Complete.", "Mientras comíamos la tarta, mi tío ___ la guitarra. (tocar)", "tocaba", "Simultaneous background."),
      wo("Por la noche vimos las estrellas desde el jardín.", "Event in the preterite.", "At night we looked at the stars from the garden."),
    ]
  ),
  L(
    "preterite-vs-imperfect-drill-3",
    "a2d-speed-round-pret-imp",
    "Speed Round: Preterite or Imperfect? 12 Quick Calls",
    "No explanations first — just decide and conjugate. The feedback tells you why.",
    "6 min",
    [
      sec(
        "Instant decision",
        "Ask: is it a finished event (preterite) or the scene/habit/in-progress (imperfect)? Then conjugate. Speed builds the automatic feel you need in conversation.",
        [
          ["Llovía cuando salí.", "It was raining when I went out."],
        ],
        [
          fb("Quick!", "De niño ___ en un pueblo. (vivir, yo)", "vivía", "Childhood period → imperfect."),
        ]
      ),
    ],
    [
      fb("Quick!", "Ayer ___ a mi jefe en el metro. (ver, yo)", "vi", "One event → preterite."),
      fb("Quick!", "La casa ___ tres dormitorios. (tener)", "tenía", "Description → imperfect."),
      fb("Quick!", "El tren ___ con retraso esta mañana. (llegar)", "llegó", "One event → preterite."),
      fb("Quick!", "Siempre ___ a la misma hora. (cenar, nosotros)", "cenábamos", "Habit → imperfect."),
      fb("Quick!", "Mientras ___, sonó el timbre. (ducharse, yo)", "me duchaba", "In progress → imperfect."),
      fb("Quick!", "En 2020 ___ a vivir a Madrid. (mudarse, nosotros)", "nos mudamos", "One event → preterite."),
      fb("Quick!", "Mi primer coche ___ rojo. (ser)", "era", "Description → imperfect."),
      mc(
        "«Anoche no ___ dormir porque ___ mucho ruido.»",
        ["pude / había", "podía / hubo", "pude / hubo", "podía / había"],
        0,
        "Result on one night (pude) + background cause (había)."
      ),
    ]
  ),
  L(
    "preterite-vs-imperfect-drill-3",
    "a2d-chain-first-to-third",
    "Chain Transformations: Tell It About Someone Else",
    "Retell a first-person memory about your sister: every verb changes person but keeps its tense.",
    "6 min",
    [
      sec(
        "Change person, keep tense",
        "«Yo tenía seis años y vivía en Cádiz. Un día me perdí en la playa.» → «Mi hermana tenía seis años y vivía en Cádiz. Un día se perdió en la playa.» Imperfect stays imperfect; preterite stays preterite.",
        [
          ["Me perdí. → Se perdió.", "I got lost. → She got lost."],
        ],
        [
          fb("Yo → ellos.", "Yo vivía en Cádiz. → Mis padres ___ en Cádiz.", "vivían", "Imperfect ellos: -ían."),
        ]
      ),
    ],
    [
      fb("Yo → ella.", "Un día me perdí en la playa. → Un día se ___ en la playa.", "perdió", "Preterite ella."),
      fb("Yo → ellos.", "Estaba muy asustada. → Mis padres ___ muy asustados.", "estaban", "Imperfect ellos: -aban."),
      fb("Yo → ella.", "Busqué a mis padres. → ___ a sus padres.", "Buscó", "-car change only affects yo."),
      fb("Yo → ellos.", "Yo jugaba con la arena. → Ellos ___ con la arena.", "jugaban", "Imperfect ellos."),
      fb("Yo → ellos.", "Por fin encontré a mi familia. → Por fin ___ a su familia.", "encontraron", "Preterite ellos."),
      fb("Nosotros → ellos.", "Volvimos a casa muy tarde. → ___ a casa muy tarde.", "Volvieron", "Preterite ellos."),
      mc(
        "«Yo no quería irme.» → ella:",
        ["Ella no quería irse.", "Ella no quiso irme.", "Ella no quería irme.", "Ella no quisiera irse."],
        0,
        "Imperfect stays; reflexive changes me → se."
      ),
      toEs("She was six and she got lost at the beach.", "Tenía seis años y se perdió en la playa.", "Background + event.", ["Ella tenía seis años y se perdió en la playa."]),
    ]
  ),
  L(
    "preterite-vs-imperfect-drill-3",
    "a2d-qa-police-report",
    "Q&A Drill: The Police Report",
    "A witness answers a police officer's questions: what was happening (imperfect) and what happened (preterite).",
    "7 min",
    [
      sec(
        "The witness statement",
        "The officer asks: ¿Qué hora era? ¿Dónde estaba usted? ¿Qué hacía? ¿Qué vio? ¿Cómo era el hombre? ¿Qué hizo después? Questions with era/estaba/hacía/cómo era get imperfect answers; vio/hizo get preterite answers.",
        [
          ["—¿Qué hacía usted? —Esperaba el autobús.", "What were you doing? — I was waiting for the bus."],
          ["—¿Qué vio? —Vi a un hombre con una mochila.", "What did you see? — I saw a man with a backpack."],
        ],
        [
          fb("Answer.", "—¿Qué hora era? —___ las once y media.", "Eran", "Time → imperfect."),
        ]
      ),
    ],
    [
      fb("Answer.", "—¿Y usted, dónde? —___ en la parada del autobús. (estar, yo)", "Estaba", "Location/state → imperfect."),
      fb("Answer.", "—¿Qué vio? —___ a un hombre correr. (ver)", "Vi", "Event → preterite."),
      fb("Answer.", "—¿Cómo era el hombre? —___ alto y llevaba gafas.", "Era", "Description → imperfect."),
      fb("Answer.", "—¿Y su ropa? —___ una chaqueta negra. (llevar, él)", "Llevaba", "Description → imperfect."),
      fb("Answer.", "—¿Qué hizo después? —___ a una moto y se fue. (subir)", "Subió", "Event → preterite."),
      fb("Answer.", "—¿Y usted qué hizo? —___ a la policía enseguida. (llamar)", "Llamé", "Event → preterite."),
      ms(
        "Which questions ask for an imperfect answer?",
        ["¿Qué tiempo hacía?", "¿Cuántas personas había?", "¿Qué pasó entonces?", "¿Cómo era el coche?"],
        [0, 1, 3],
        "¿Qué pasó? asks for an event → preterite."
      ),
      toEs("He was tall and he was wearing a black jacket.", "Era alto y llevaba una chaqueta negra.", "Description.", ["Era alto y tenía una chaqueta negra."]),
    ]
  ),
  L(
    "preterite-vs-imperfect-drill-3",
    "a2d-mixed-practice-pret-imp-2",
    "Mixed Practice: Past Tenses Round 2",
    "Past tenses mixed with reflexives, comparisons and por/para — the past never appears alone in real speech.",
    "7 min",
    [
      sec(
        "Past tenses in company",
        "Real sentences combine structures: «Antes me levantaba más temprano que ahora» (reflexive + imperfect + comparison). «Ayer salí para el aeropuerto por la tarde» (preterite + para + por). Keep the tense decision first, then the rest.",
        [
          ["De joven me acostaba más tarde que ahora.", "When I was young I went to bed later than now."],
          ["Ayer caminé por el parque para relajarme.", "Yesterday I walked through the park to relax."],
        ],
        [
          fb("Complete.", "De niño ___ más temprano que mis hermanos. (acostarse, yo)", "me acostaba", "Reflexive + habit."),
        ]
      ),
    ],
    [
      fb("Complete.", "Ayer ___ por la playa durante dos horas. (pasear, nosotros)", "paseamos", "Delimited event → preterite."),
      fb("Complete.", "Compré estas flores ___ mi madre.", "para", "Recipient → para."),
      fb("Complete.", "Mi primer piso era ___ pequeño que este.", "más", "Comparison."),
      fb("Complete.", "Esta mañana ___ muy rápido. (vestirse, yo)", "me vestí", "Reflexive + one event."),
      fb("Complete.", "Antes el tren era tan rápido ___ el avión.", "como", "Tan… como."),
      mc(
        "«Le ___ 50 euros por la bici.» (pagar, yo)",
        ["pagué", "pagaba", "pago", "pagé"],
        0,
        "One transaction + -gar → -gué."
      ),
      toEs("When I was a child I was shorter than my sister.", "Cuando era niño era más bajo que mi hermana.", "Imperfect + comparison.", ["Cuando era niña era más baja que mi hermana.", "De niño era más bajo que mi hermana."]),
      toEn("Nunca veíamos a nadie en esa calle.", "We never saw anyone on that street.", "Negation + imperfect habit.", ["We never used to see anybody on that street.", "We never saw anybody in that street."]),
    ]
  ),
  L(
    "a2-vocabulary-practice-5",
    "a2d-story-cloze-blackout-wedding",
    "Story Cloze: The Wedding Where Everything Went Wrong",
    "A funny wedding story: fill each gap with the right past tense.",
    "7 min",
    [
      sec(
        "The story",
        "«La boda de mi prima era en un jardín precioso. Todos estábamos contentos y hacía muy buen tiempo. Pero justo cuando los novios iban a decir “sí”, empezó a llover. Todo el mundo corrió hacia la casa. Al final, los novios se casaron en la cocina.»",
        [
          ["Justo cuando los novios iban a decir “sí”, empezó a llover.", "Just as the couple were about to say 'yes', it started to rain."],
        ],
        [
          mc(
            "Where did the couple finally get married?",
            ["in the kitchen", "in the garden", "in a church", "they didn't get married"],
            0,
            "Se casaron en la cocina."
          ),
        ]
      ),
    ],
    [
      fb("Fill in.", "La boda ___ en un jardín precioso. (ser)", "era", "Setting → imperfect."),
      fb("Fill in.", "Todos ___ contentos. (estar, nosotros)", "estábamos", "State → imperfect."),
      fb("Fill in.", "Los novios ___ a decir «sí». (ir)", "iban", "Ir a in the past = about to."),
      fb("Fill in.", "De repente ___ a llover. (empezar)", "empezó", "Event → preterite."),
      fb("Fill in.", "Todo el mundo ___ hacia la casa. (correr)", "corrió", "Event → preterite."),
      fb("Fill in.", "Al final los novios se ___ en la cocina. (casar)", "casaron", "Event → preterite."),
      mc(
        "«Iban a decir “sí”» means…",
        ["they were about to say yes", "they said yes", "they used to say yes", "they will say yes"],
        0,
        "Ir a + infinitive in the imperfect."
      ),
      toEs("Everyone was laughing and nobody was angry.", "Todos se reían y nadie estaba enfadado.", "Background + negation.", ["Todo el mundo se reía y nadie estaba enfadado.", "Todos reían y nadie estaba enojado."]),
    ]
  ),
  L(
    "a2-vocabulary-practice-5",
    "a2d-fix-paragraph-travel-diary",
    "Fix the Paragraph: A Travel Diary",
    "A diary entry from Peru with six past-tense errors (wrong tense and wrong forms). Fix them all.",
    "7 min",
    [
      sec(
        "The diary",
        "«Querido diario: hoy ✗ llegábamos a Cusco (→ llegamos). La ciudad ✗ fue preciosa (→ era) y ✗ hizo frío (→ hacía). Estábamos cansados, así que ✗ tomábamos una siesta (→ tomamos). Por la tarde ✗ visitábamos la catedral (→ visitamos).»",
        [
          ["Hoy llegamos a Cusco.", "Today we arrived in Cusco."],
          ["La ciudad era preciosa.", "The city was beautiful."],
        ],
        [
          fb("Fix it.", "Hoy ___ a Cusco. (the diary says: llegábamos — one arrival)", "llegamos", "Single event → preterite."),
        ]
      ),
    ],
    [
      fb("Fix it.", "La ciudad ___ preciosa. (the diary says: fue — describing it)", "era", "Description → imperfect."),
      fb("Fix it.", "___ frío y había mucha gente. (the diary says: Hizo — background)", "Hacía", "Background weather."),
      fb("Fix it.", "Como estábamos cansados, ___ una siesta. (the diary says: tomábamos — one nap)", "tomamos", "Single event → preterite."),
      fb("Fix it.", "Por la tarde ___ la catedral. (the diary says: visitábamos)", "visitamos", "Single event → preterite."),
      fb("Fix it.", "El guía nos ___ muchas historias interesantes. (the diary says: dició)", "contó", "Contar → contó (dició is not a word)."),
      mc(
        "Which diary sentence is correct?",
        ["Mientras cenábamos, empezó a tocar una banda.", "Mientras cenamos, empezaba a tocar una banda.", "Mientras cenábamos, empezaba a tocar una banda de repente.", "Mientras cenaron, empezó."],
        0,
        "In progress + interruption."
      ),
      toEs("We were tired but very happy.", "Estábamos cansados pero muy felices.", "States → imperfect.", ["Estábamos cansadas pero muy felices.", "Estábamos cansados, pero muy contentos."]),
    ]
  ),
  L(
    "a2-vocabulary-practice-5",
    "a2d-timeline-biography",
    "Timeline Drill: A Short Biography",
    "Turn a famous painter's timeline into a biography, choosing preterite for milestones and imperfect for context.",
    "7 min",
    [
      sec(
        "Frida's timeline",
        "1907: nace en Coyoacán. 1913: tiene polio (de niña cojeaba un poco). 1925: sufre un accidente de autobús. Durante la recuperación, pinta en la cama. 1929: se casa con Diego Rivera. Biography rule: milestones → preterite (nació, se casó); context and ongoing situations → imperfect (vivía, pintaba en la cama).",
        [
          ["Frida Kahlo nació en 1907 en Coyoacán.", "Frida Kahlo was born in 1907 in Coyoacán."],
          ["Mientras se recuperaba, pintaba en la cama.", "While she was recovering, she painted in bed."],
        ],
        [
          fb("Milestone.", "Frida ___ en 1907. (nacer)", "nació", "Birth → preterite."),
        ]
      ),
    ],
    [
      fb("Milestone.", "En 1925 ___ un accidente de autobús. (tener)", "tuvo", "Event → preterite."),
      fb("Context.", "Mientras se recuperaba, ___ en la cama. (pintar)", "pintaba", "Ongoing → imperfect."),
      fb("Milestone.", "En 1929 se ___ con Diego Rivera. (casar)", "casó", "Event → preterite."),
      fb("Context.", "De niña Frida ___ un poco por la polio. (cojear)", "cojeaba", "Ongoing condition → imperfect."),
      fb("Context.", "Su casa ___ azul. (ser)", "era", "Description → imperfect."),
      mc(
        "«Frida ___ en 1954.» (morir)",
        ["murió", "moría", "muere siempre", "morió"],
        0,
        "Milestone → preterite (murió)."
      ),
      toEs("She painted many self-portraits.", "Pintó muchos autorretratos.", "Completed body of work → preterite.", ["Ella pintó muchos autorretratos."]),
      toEn("Cuando conoció a Diego, ya pintaba muy bien.", "When she met Diego, she already painted very well.", "Event + background.", ["When she met Diego, she was already painting very well.", "When she met Diego she already painted really well."]),
    ]
  ),
  L(
    "a2-vocabulary-practice-5",
    "a2d-mixed-practice-pret-imp-3",
    "Mixed Practice: Past Tenses Round 3 (Hardest)",
    "The trickiest preterite/imperfect decisions in one round: meaning shifts, durations, interruptions.",
    "7 min",
    [
      sec(
        "Final round reminders",
        "Meaning shifts: conocí/conocía, supe/sabía, quise/quería, pude/podía. Closed durations → preterite. Background clock time/age → imperfect. Interruptions: imperfect + preterite.",
        [
          ["Pude terminar a tiempo. (I managed to)", "I managed to finish on time."],
          ["No podía dormir. (I couldn't — ongoing)", "I couldn't sleep."],
        ],
        [
          mc(
            "«Después de horas, por fin ___ abrir la puerta.»",
            ["pudimos", "podíamos", "podemos", "podremos"],
            0,
            "Managed to (one moment) → preterite."
          ),
        ]
      ),
    ],
    [
      fb("Hardest.", "No ___ que tu hermano estaba en Madrid. (saber, yo)", "sabía", "State of knowledge."),
      fb("Hardest.", "Lo ___ ayer por un amigo. (saber, yo — found out)", "supe", "Found out → preterite."),
      fb("Hardest.", "Por fin ___ dormir a las tres de la mañana. (poder, yo — managed to)", "pude", "Managed to (one moment) → preterite."),
      fb("Hardest.", "Mi hermano ___ veinte años cuando se fue a Londres. (tener)", "tenía", "Age as background."),
      fb("Hardest.", "___ en ese hospital de 2015 a 2019. (trabajar, yo)", "Trabajé", "Closed period."),
      fb("Hardest.", "Ella no ___ firmar el contrato y se fue. (querer — refused)", "quiso", "Refused → preterite."),
      mc(
        "«Cuando lo ___, ya ___ casado.» (conocer, yo / estar, él)",
        ["conocí / estaba", "conocía / estuvo", "conocí / estuvo", "conocía / estaba"],
        0,
        "Meeting (event) + his state (background)."
      ),
      toEs("I met him when I was working in Lima.", "Lo conocí cuando trabajaba en Lima.", "Event + background.", ["Le conocí cuando trabajaba en Lima.", "Lo conocí cuando yo trabajaba en Lima."]),
    ]
  ),
  L(
    "a2-vocabulary-practice-5",
    "a2d-say-it-yourself-last-year",
    "Say It Yourself: My Last Year in Ten Sentences",
    "Translate a mini-review of your past year: habits, events, feelings and one big change.",
    "6 min",
    [
      sec(
        "Reviewing a year",
        "Habits and ongoing situations → imperfect (trabajaba mucho, iba al gimnasio). Specific events and changes → preterite (empecé un curso, me mudé, conocí a…). Global evaluation → preterite (Fue un buen año).",
        [
          ["El año pasado trabajaba mucho y dormía poco.", "Last year I was working a lot and sleeping little."],
          ["En junio me mudé a un piso nuevo.", "In June I moved to a new flat."],
        ],
        [
          mc(
            "«Fue un año difícil» evaluates…",
            ["the whole finished year", "a habit", "the background", "an action in progress"],
            0,
            "Global evaluation → preterite."
          ),
        ]
      ),
    ],
    [
      toEs("Last year I went to the gym every week.", "El año pasado iba al gimnasio todas las semanas.", "Habit → imperfect.", ["El año pasado iba al gimnasio cada semana."]),
      toEs("In March I started a Spanish course.", "En marzo empecé un curso de español.", "Event → preterite.", ["En marzo comencé un curso de español."]),
      toEs("In June I moved to a new city.", "En junio me mudé a una ciudad nueva.", "Event → preterite.", ["En junio me mudé a otra ciudad."]),
      toEs("I didn't know anyone there.", "No conocía a nadie allí.", "State + double negation.", ["Allí no conocía a nadie."]),
      toEs("It was a good year.", "Fue un buen año.", "Evaluation → preterite.", []),
      fb("Complete.", "Al principio ___ un poco sola. (sentirse → estar, yo)", "estaba", "State → imperfect."),
      fb("Complete.", "En septiembre ___ a mis vecinos y ahora somos amigos. (conocer, yo)", "conocí", "Met → preterite."),
      wo("Al final del año ya hablaba español mucho mejor.", "Imperfect + comparative.", "By the end of the year I was already speaking Spanish much better."),
    ]
  ),
  L(
    "a2-vocabulary-practice-5",
    "a2d-dictation-past-tense",
    "Dictation Drill: Put the Story Back Together",
    "Scrambled past-tense sentences from one story: rebuild each in natural Spanish order.",
    "6 min",
    [
      sec(
        "Word order in past narratives",
        "Time expressions often go first (Aquella noche…, De repente…), then subject, verb, object, place. Adverbs of frequency can go before the verb (siempre llegaba) or at the end.",
        [
          ["Aquella noche mi padre llegó muy tarde a casa.", "That night my father got home very late."],
        ],
        [
          mc(
            "Most natural order:",
            ["De repente se apagaron todas las luces.", "Se de repente apagaron todas las luces.", "Todas de repente las luces se apagaron.", "Apagaron se de repente las luces."],
            0,
            "Time expression + se + verb + subject."
          ),
        ]
      ),
    ],
    [
      wo("Aquella noche hacía mucho viento y no había nadie en la calle.", "Scene-setting.", "That night it was very windy and there was nobody in the street."),
      wo("Mi hermano y yo mirábamos una película de miedo en el salón.", "In progress.", "My brother and I were watching a horror movie in the living room."),
      wo("De repente alguien llamó a la puerta tres veces.", "Event.", "Suddenly someone knocked on the door three times."),
      wo("Mi hermano abrió la puerta muy despacio.", "Event.", "My brother opened the door very slowly."),
      wo("Era nuestra vecina con una tarta de cumpleaños para mamá.", "Reveal: description.", "It was our neighbor with a birthday cake for Mom."),
      mc(
        "Why «Era nuestra vecina» and not «Fue»?",
        ["It identifies/describes who was there.", "It's a completed action.", "It's a habit.", "It's a counted repetition."],
        0,
        "Identification/description → imperfect."
      ),
      toEs("We laughed a lot that night.", "Nos reímos mucho aquella noche.", "Event → preterite.", ["Aquella noche nos reímos mucho.", "Nos reímos mucho esa noche."]),
    ]
  ),
  L(
    "direct-object-pronouns-1",
    "a2d-pattern-lo-la-los-las",
    "Pattern Practice: Lo, La, Los, Las",
    "Replace the object in one fixed frame, again and again, until gender and number agreement is automatic.",
    "6 min",
    [
      sec(
        "Match the noun, not the meaning",
        "Masculine singular → lo, feminine singular → la, masculine plural → los, feminine plural → las. The pronoun goes before the conjugated verb: Compro el pan → Lo compro.",
        [
          ["¿La sopa? La preparo yo.", "The soup? I'm making it."],
          ["¿Los zapatos? Los compré ayer.", "The shoes? I bought them yesterday."],
        ],
        [
          fb("Replace the object.", "Leo el periódico. → ___ leo.", "Lo", "El periódico → lo."),
        ]
      ),
    ],
    [
      fb("Replace the object.", "Leo la carta. → ___ leo.", "La", "La carta → la."),
      fb("Replace the object.", "Leo los mensajes. → ___ leo.", "Los", "Los mensajes → los."),
      fb("Replace the object.", "Leo las noticias. → ___ leo.", "Las", "Las noticias → las."),
      fb("Replace the object.", "Lavé los platos. → ___ lavé.", "Los", "Masculine plural."),
      fb("Replace the object.", "Abrimos la ventana. → ___ abrimos.", "La", "Feminine singular."),
      mt(
        "Match the noun with its pronoun.",
        [
          ["las llaves", "las"],
          ["el coche", "lo"],
          ["los libros", "los"],
          ["la maleta", "la"],
        ],
        "Gender and number."
      ),
      mc(
        "«¿Tienes las entradas?» — «Sí, ___ tengo.»",
        ["las", "los", "la", "les"],
        0,
        "Las entradas → las."
      ),
      toEs("The keys? I have them.", "¿Las llaves? Las tengo yo.", "Las llaves → las.", ["¿Las llaves? Las tengo.", "¿Las llaves? Yo las tengo."]),
    ]
  ),
  L(
    "direct-object-pronouns-1",
    "a2d-me-te-nos-direct",
    "Q&A Drill: Me, Te, Nos as Direct Objects",
    "¿Me ves? — Sí, te veo. Practise the person-to-person direct object pronouns in quick questions and answers.",
    "6 min",
    [
      sec(
        "Swap the person",
        "Question with me → answer with te; question with te → answer with me; nos ↔ os/los. ¿Me llamas mañana? — Sí, te llamo. ¿Nos esperas? — Sí, os espero / los espero.",
        [
          ["—¿Me oyes bien? —Sí, te oigo perfectamente.", "Can you hear me well? — Yes, I can hear you perfectly."],
          ["—¿Nos invitas? —Claro, los invito a todos.", "Will you invite us? — Of course, I'll invite you all."],
        ],
        [
          fb("Answer.", "—¿Me ayudas? —Sí, ___ ayudo.", "te", "Me in the question → te in the answer."),
        ]
      ),
    ],
    [
      fb("Answer.", "—¿Te llamo esta noche? —Sí, ___ llamas a las nueve.", "me", "Te → me."),
      fb("Answer.", "—¿Nos esperáis? —Sí, ___ esperamos en la puerta.", "os", "Nos → os (vosotros)."),
      fb("Answer.", "—¿Me quieres? —Claro que ___ quiero.", "te", "Me → te."),
      fb("Answer.", "—¿Te recogí tarde? —No, me ___ a tiempo. (recoger)", "recogiste", "Preterite tú."),
      mc(
        "«—¿Nos ven ustedes? —Sí, ___ vemos.»",
        ["los", "nos", "me", "te"],
        0,
        "Speaker addresses ustedes → los (Latin America) / os (Spain for vosotros)."
      ),
      ms(
        "Which answers are correct for «¿Me conoces?»",
        ["Sí, te conozco.", "No, no te conozco.", "Sí, me conozco.", "Sí, lo conozco."],
        [0, 1],
        "Me in the question → te in the answer."
      ),
      toEs("Can you hear me? — Yes, I can hear you.", "¿Me oyes? — Sí, te oigo.", "Me ↔ te.", ["¿Me escuchas? — Sí, te escucho."]),
      toEn("Mis padres nos visitaron el domingo.", "My parents visited us on Sunday.", "Nos = us.", ["My parents came to visit us on Sunday."]),
    ]
  ),
  L(
    "direct-object-pronouns-2",
    "a2d-placement-two-positions",
    "Choose & Explain: Before the Verb or Attached?",
    "Lo voy a comprar / Voy a comprarlo: drill both valid positions with infinitives and gerunds — and the one position that's wrong.",
    "6 min",
    [
      sec(
        "Two correct places, one wrong",
        "Conjugated verb alone → pronoun before: Lo compro. Conjugated verb + infinitive/gerund → before the whole phrase OR attached: Lo quiero ver / Quiero verlo; La estoy leyendo / Estoy leyéndola. Never in the middle: ✗ Quiero lo ver.",
        [
          ["Te voy a llamar. = Voy a llamarte.", "I'm going to call you."],
          ["Lo estoy buscando. = Estoy buscándolo.", "I'm looking for it."],
        ],
        [
          ms(
            "Which are correct?",
            ["Las voy a lavar.", "Voy a lavarlas.", "Voy las a lavar.", "Voy a las lavar."],
            [0, 1],
            "Before the conjugated verb or attached to the infinitive."
          ),
        ]
      ),
    ],
    [
      fb("Rewrite attached.", "Lo quiero comprar. → Quiero ___.", "comprarlo", "Attached to the infinitive."),
      fb("Rewrite attached.", "La estoy preparando. → Estoy ___.", "preparándola", "Gerund + pronoun: add an accent."),
      fb("Rewrite before.", "Voy a visitarlos mañana. → ___ voy a visitar mañana.", "Los", "Before the conjugated verb."),
      fb("Rewrite before.", "Necesito verte. → ___ necesito ver.", "Te", "Before the conjugated verb."),
      mc(
        "Which one is wrong?",
        ["Puedo lo hacer.", "Lo puedo hacer.", "Puedo hacerlo.", "Lo hago."],
        0,
        "Never between the two verbs."
      ),
      mc(
        "Why does «preparándola» have an accent?",
        ["Adding a pronoun moves the stress to the fourth-to-last syllable.", "Because it's feminine.", "Because it's a command.", "It doesn't need one."],
        0,
        "Accent keeps the original stress."
      ),
      toEs("I want to see it (the movie).", "Quiero verla.", "La película → la.", ["La quiero ver."]),
      wo("No te puedo ayudar hoy, lo siento.", "Pronoun before the conjugated verb.", "I can't help you today, sorry."),
    ]
  ),
  L(
    "direct-object-pronouns-2",
    "a2d-shopping-replace",
    "Build-Up: Shopping Without Repeating Words",
    "A shopping conversation that sounds unnatural until you replace every repeated noun with a pronoun.",
    "6 min",
    [
      sec(
        "Avoid repetition",
        "Natural Spanish doesn't repeat the object: «—¿Te gusta esta chaqueta? —Sí, la quiero probar.» Once the noun is known, replace it with lo/la/los/las.",
        [
          ["—¿Compras el vestido? —Sí, lo compro.", "Are you buying the dress? — Yes, I'm buying it."],
          ["—¿Y los pantalones? —No, no los necesito.", "And the trousers? — No, I don't need them."],
        ],
        [
          fb("Replace.", "—¿Y la camiseta? —___ quiero en azul.", "La", "La camiseta → la."),
        ]
      ),
    ],
    [
      fb("Replace.", "—¿Compras los calcetines? —Sí, ___ compro.", "los", "Los calcetines → los."),
      fb("Replace.", "—¿Y las botas? —No, no ___ necesito.", "las", "Las botas → las; no before pronoun."),
      fb("Replace.", "—¿Dónde está el probador? —___ tiene allí, a la derecha. (usted)", "Lo", "El probador → lo."),
      fb("Replace.", "—¿Pagas la cuenta con tarjeta? —No, ___ pago en efectivo.", "la", "La cuenta → la."),
      mc(
        "«—¿Compraste los regalos? —Sí, ___ compré ayer.»",
        ["los", "las", "lo", "les"],
        0,
        "Los regalos → los."
      ),
      toEs("The jacket? I'm going to try it on.", "¿La chaqueta? Voy a probarla.", "Pronoun attached to infinitive.", ["¿La chaqueta? La voy a probar."]),
      toEn("—¿Y el bolso? —No lo necesito.", "—And the bag? —I don't need it.", "Lo = it.", ["—What about the bag? —I don't need it."]),
    ]
  ),
  L(
    "direct-object-pronouns-2",
    "a2d-fix-paragraph-dop",
    "Fix the Paragraph: Direct Object Pronouns",
    "An email full of pronoun slips — wrong gender, wrong position, repeated nouns. Repair each one.",
    "6 min",
    [
      sec(
        "Typical slips",
        "✗ Compré la mesa y lo pinté (→ la pinté). ✗ Quiero lo ver (→ Lo quiero ver / Quiero verlo). ✗ Los camisetas (→ las camisetas → las). Email: «Hola, Ana: ayer compré unas sillas y lo pinté de azul. Quiero te enseñar las fotos.»",
        [
          ["Compré unas sillas y las pinté.", "I bought some chairs and painted them."],
          ["Quiero enseñarte las fotos.", "I want to show you the photos."],
        ],
        [
          fb("Fix it.", "Compré unas sillas y ___ pinté de azul. (the email says: lo)", "las", "Unas sillas → las."),
        ]
      ),
    ],
    [
      fb("Fix it.", "Quiero ___ las fotos. (the email says: te enseñar — attach it)", "enseñarte", "Attach to the infinitive."),
      fb("Fix it.", "Mi hermano vio la película y ___ odió. (the email says: lo)", "la", "La película → la."),
      fb("Fix it.", "Tengo tus libros; ___ tengo en mi mochila. (the email says: las)", "los", "Los libros → los."),
      fb("Fix it.", "¿Las entradas? No ___ encuentro. (the email says: los)", "las", "Feminine plural."),
      mc(
        "Which sentence is correct?",
        ["El pastel está delicioso; lo hizo mi abuela.", "El pastel está delicioso; la hizo mi abuela.", "El pastel está delicioso; hizo lo mi abuela.", "El pastel está delicioso; hizo mi abuela lo."],
        0,
        "El pastel → lo, before the verb."
      ),
      toEs("I bought the flowers and put them on the table.", "Compré las flores y las puse en la mesa.", "Las flores → las.", ["Compré las flores y las puse sobre la mesa."]),
    ]
  ),
  L(
    "indirect-object-pronouns-1",
    "a2d-pattern-le-les",
    "Pattern Practice: Le and Les with Dar, Decir, Escribir",
    "Who receives it? Drill le/les (and the clarifying a + person) with the classic giving and telling verbs.",
    "6 min",
    [
      sec(
        "To whom?",
        "Le = to him/her/you (usted); les = to them/you all. Don't change for gender. Add a + person to clarify: Le escribo a mi abuela. Les digo la verdad a mis padres. The pronoun is used even when a + person appears.",
        [
          ["Le compré un regalo a mi hermana.", "I bought my sister a present."],
          ["Les expliqué el problema a los clientes.", "I explained the problem to the customers."],
        ],
        [
          fb("Complete.", "___ mando un mensaje a Pedro.", "Le", "A Pedro → le."),
        ]
      ),
    ],
    [
      fb("Complete.", "___ di las gracias a mis vecinos.", "Les", "A mis vecinos → les."),
      fb("Complete.", "¿___ prestaste dinero a tu primo?", "Le", "A tu primo → le."),
      fb("Complete.", "El profesor ___ explicó la lección a los alumnos.", "les", "A los alumnos → les."),
      fb("Complete.", "Mi madre ___ cuenta un cuento a mi hija cada noche.", "le", "A mi hija → le (no gender change)."),
      mc(
        "«___ regalé flores a mi abuela y a mi tía.»",
        ["Les", "Le", "Las", "Los"],
        0,
        "Two people → les."
      ),
      ms(
        "Which verbs usually take an indirect object?",
        ["dar", "decir", "mandar", "dormir"],
        [0, 1, 2],
        "You give/tell/send something to someone."
      ),
      toEs("I wrote an email to my boss.", "Le escribí un correo a mi jefe.", "Le + a mi jefe.", ["Le escribí un email a mi jefe.", "Le escribí un correo electrónico a mi jefe."]),
      wo("Siempre les digo la verdad a mis amigos.", "Les + a mis amigos.", "I always tell my friends the truth."),
    ]
  ),
  L(
    "indirect-object-pronouns-1",
    "a2d-minimal-pairs-lo-le",
    "Minimal Pairs: Lo or Le?",
    "Veo a Juan → lo veo; le doy un libro a Juan → le doy: decide whether the person is a direct or indirect object.",
    "7 min",
    [
      sec(
        "The one question that decides",
        "Is the person receiving the action directly (seeing, calling, helping, visiting)? → lo/la. Is the person receiving something (a thing is given, said, sent to them)? → le. Veo a Ana → la veo. Le mando una carta a Ana → le mando.",
        [
          ["Llamé a mi madre. → La llamé.", "I called my mother. → I called her."],
          ["Le conté un secreto a mi madre.", "I told my mother a secret."],
        ],
        [
          mc(
            "«Visité a mi abuela.» →",
            ["La visité.", "Le visité.", "Lo visité.", "Les visité."],
            0,
            "Visitar takes a direct object → la."
          ),
        ]
      ),
    ],
    [
      mc(
        "«Escribí una carta a mi abuela.» →",
        ["Le escribí una carta.", "La escribí una carta.", "Lo escribí una carta.", "Las escribí una carta."],
        0,
        "The letter is the thing; grandma receives it → le."
      ),
      mc(
        "«Ayudé a mis compañeros.» →",
        ["Los ayudé.", "Les ayudé a ellos la tarea.", "Le ayudé.", "Las ayudé los."],
        0,
        "Ayudar a alguien → direct object (los) in standard use."
      ),
      fb("Lo/la or le?", "Vi a Carmen en el mercado. → ___ vi en el mercado.", "La", "Ver → direct object."),
      fb("Lo/la or le?", "Dije la verdad a Carmen. → ___ dije la verdad.", "Le", "Decir algo a alguien → le."),
      fb("Lo/la or le?", "Invité a Marcos a la fiesta. → ___ invité a la fiesta.", "Lo", "Invitar → direct object."),
      fb("Lo/la or le?", "Pregunté la hora a Marcos. → ___ pregunté la hora.", "Le", "Preguntar algo a alguien → le."),
      mt(
        "Match each sentence with its pronoun.",
        [
          ["Espero a mis amigas.", "las espero"],
          ["Mando fotos a mis amigas.", "les mando fotos"],
          ["Conozco a tu hermano.", "lo conozco"],
        ],
        "Direct vs. indirect person."
      ),
      toEs("I called her and told her the news.", "La llamé y le conté la noticia.", "Llamar (DO) + contar (IO).", ["La llamé y le di la noticia.", "La llamé y le dije la noticia."]),
    ]
  ),
  L(
    "indirect-object-pronouns-2",
    "a2d-gustar-family-drill",
    "Drill Circuit: Me Gusta, Le Encanta, Nos Molesta",
    "Gustar-type verbs are indirect-object verbs in disguise: drill the pronoun and the verb agreement together.",
    "6 min",
    [
      sec(
        "Who likes and what is liked",
        "The pronoun shows who (me, te, le, nos, os, les); the verb agrees with what is liked: me gusta el café / me gustan los perros. Same with encantar, molestar, interesar, doler: Me duelen los pies. A + person clarifies: A mis padres les encanta viajar.",
        [
          ["A mi hermano le molestan los ruidos.", "Noises bother my brother."],
          ["Nos encantó la película.", "We loved the movie."],
        ],
        [
          fb("Complete.", "A mis abuelos ___ gusta el campo.", "les", "A mis abuelos → les."),
        ]
      ),
    ],
    [
      fb("Agree the verb.", "Me ___ mucho las series coreanas. (gustar, present)", "gustan", "Plural thing → gustan."),
      fb("Complete.", "¿A ti ___ interesa la política?", "te", "A ti → te."),
      fb("Agree the verb.", "A Laura le ___ la cabeza. (doler, present)", "duele", "Singular thing → duele."),
      fb("Complete.", "A nosotros ___ molesta el humo.", "nos", "A nosotros → nos."),
      fb("Past.", "A mis padres les ___ mucho el viaje. (encantar, preterite)", "encantó", "El viaje (singular) → encantó."),
      mc(
        "«A Pedro ___ los deportes.»",
        ["le gustan", "le gusta", "les gustan", "lo gustan"],
        0,
        "Le (Pedro) + gustan (plural)."
      ),
      toEs("My feet hurt.", "Me duelen los pies.", "Doler agrees with the plural.", []),
      toEn("A mi madre no le gustaban nada los gatos.", "My mother didn't like cats at all.", "Imperfect of gustar.", ["My mom didn't like cats at all."]),
    ]
  ),
  L(
    "indirect-object-pronouns-2",
    "a2d-qa-favors",
    "Q&A Drill: Favors and Messages",
    "¿Me prestas…? ¿Le dijiste…? ¿Les mandaste…? Answer questions with the right indirect object pronoun.",
    "6 min",
    [
      sec(
        "Mirror the pronoun",
        "¿Me prestas tu bici? → Sí, te presto mi bici. ¿Le dijiste a Ana la hora? → Sí, le dije la hora. ¿Nos traes café? → Sí, os/les traigo café. Keep the thing as a noun for now (no double pronouns yet).",
        [
          ["—¿Me pasas la sal? —Sí, te paso la sal.", "Can you pass me the salt? — Yes, here's the salt."],
        ],
        [
          fb("Answer.", "—¿Me dejas tu cargador? —Sí, ___ dejo mi cargador.", "te", "Me → te."),
        ]
      ),
    ],
    [
      fb("Answer.", "—¿Le mandaste la invitación a Clara? —Sí, ___ mandé la invitación.", "le", "A Clara → le."),
      fb("Answer.", "—¿Les compraste algo a los niños? —Sí, ___ compré unos juguetes.", "les", "A los niños → les."),
      fb("Answer.", "—¿Te explicó el jefe el plan? —Sí, me ___ todo. (contar)", "contó", "Preterite él: contó."),
      fb("Answer.", "—¿Nos traes agua, por favor? —Claro, ___ traigo agua ahora. (a ustedes)", "les", "Ustedes → les."),
      mc(
        "«—¿Me escribiste ayer? —Sí, ___ escribí por la noche.»",
        ["te", "me", "le", "lo"],
        0,
        "Me → te."
      ),
      toEs("Can you lend me your pen?", "¿Me prestas tu bolígrafo?", "Me prestas.", ["¿Me prestas tu boli?", "¿Me puedes prestar tu bolígrafo?"]),
      toEn("Le pedí ayuda a mi vecino.", "I asked my neighbor for help.", "Pedir algo a alguien.", ["I asked my neighbour for help."]),
    ]
  ),
  L(
    "indirect-object-pronouns-2",
    "a2d-fix-paragraph-iop",
    "Fix the Paragraph: Le, Les and Gustar",
    "A text message with le/les mix-ups and gustar agreement errors. Correct each one.",
    "6 min",
    [
      sec(
        "Frequent mistakes",
        "✗ Le dije a mis padres (→ les dije). ✗ La escribí a mi tía (→ le escribí). ✗ Me gusta los tacos (→ me gustan). ✗ Yo gusto el café (→ me gusta el café). Message: «Ayer le dije a mis padres que me gusta los tacos de mi tía, así que la escribí para pedir la receta.»",
        [
          ["Les dije a mis padres que me gustan los tacos.", "I told my parents I like the tacos."],
        ],
        [
          fb("Fix it.", "Ayer ___ dije a mis padres la verdad. (the message says: le)", "les", "Plural → les."),
        ]
      ),
    ],
    [
      fb("Fix it.", "Me ___ los tacos de mi tía. (the message says: gusta)", "gustan", "Plural → gustan."),
      fb("Fix it.", "___ escribí a mi tía para pedir la receta. (the message says: La)", "Le", "Escribir a alguien → le."),
      fb("Fix it.", "A mi hermano ___ encantan los tacos también. (the message says: lo)", "le", "Gustar-type verbs → le."),
      fb("Fix it.", "___ encanta cocinar. (the message says: Yo encanto)", "Me", "A mí me encanta."),
      mc(
        "Which sentence is correct?",
        ["A mis primos les molesta el ruido.", "A mis primos le molestan el ruido.", "Mis primos molestan el ruido.", "A mis primos los molesta el ruido."],
        0,
        "Les + molesta (singular thing)."
      ),
      toEs("I sent my parents a photo.", "Les mandé una foto a mis padres.", "Les + a mis padres.", ["Les envié una foto a mis padres.", "Les mandé una foto a mis papás."]),
    ]
  ),
  L(
    "object-pronouns-drill-3",
    "a2d-se-lo-pattern",
    "Pattern Practice: Se Lo, Se La, Se Los, Se Las",
    "Le/les + lo/la becomes se lo: drill the double-pronoun swap in one fixed frame.",
    "7 min",
    [
      sec(
        "Indirect first, then direct — and le → se",
        "Le doy el libro → Se lo doy. Les mando las fotos → Se las mando. Me/te/nos don't change: Me lo das. Te la compro. The second pronoun still agrees with the thing.",
        [
          ["¿El regalo? Se lo di a mi madre.", "The present? I gave it to my mother."],
          ["¿Las llaves? Te las dejo en la mesa.", "The keys? I'll leave them for you on the table."],
        ],
        [
          fb("Double pronoun.", "Le doy la carta. → ___ la doy.", "Se", "Le + la → se la."),
        ]
      ),
    ],
    [
      fb("Double pronoun.", "Le doy el dinero. → Se ___ doy.", "lo", "El dinero → lo."),
      fb("Double pronoun.", "Les doy los libros. → Se ___ doy.", "los", "Los libros → los."),
      fb("Double pronoun.", "Les doy las entradas. → ___ las doy.", "Se", "Les + las → se las."),
      fb("Double pronoun.", "Te doy la foto. → Te ___ doy.", "la", "Te doesn't change."),
      fb("Double pronoun.", "Me das los papeles. → Me ___ das.", "los", "Me doesn't change."),
      mc(
        "«Le compré unas flores a mi madre.» →",
        ["Se las compré.", "Le las compré.", "Se los compré.", "Las le compré."],
        0,
        "Le → se; unas flores → las."
      ),
      ms(
        "Which are correct?",
        ["Se lo expliqué.", "Me la trajo.", "Le lo dije.", "Te los mando."],
        [0, 1, 3],
        "Never le lo → se lo."
      ),
      toEs("The book? I gave it to Pedro.", "¿El libro? Se lo di a Pedro.", "Se lo + a Pedro.", ["¿El libro? Se lo di a Pedro ayer."]),
    ]
  ),
  L(
    "object-pronouns-drill-3",
    "a2d-chain-noun-to-pronouns",
    "Chain Transformations: Noun → One Pronoun → Two Pronouns",
    "Le mando el paquete a Luis → Le mando el paquete → Se lo mando: shrink the sentence in three steps.",
    "7 min",
    [
      sec(
        "Three steps",
        "1) Full sentence: Le mando el paquete a Luis. 2) Drop a Luis (le already says it): Le mando el paquete. 3) Replace the thing too: Se lo mando. Each step keeps the meaning when the context is clear.",
        [
          ["Le presto mi coche a Sara. → Se lo presto.", "I lend Sara my car. → I lend it to her."],
        ],
        [
          fb("Step 3.", "Le mando el paquete. → ___ mando.", "Se lo", "Le + lo → se lo."),
        ]
      ),
    ],
    [
      fb("Step 3.", "Les enseño la casa. → ___ enseño.", "Se la", "Les + la → se la."),
      fb("Step 3.", "Le regalé unos pendientes. → ___ regalé.", "Se los", "Unos pendientes → los."),
      fb("Step 3.", "Nos contaron la historia. → ___ contaron.", "Nos la", "Nos doesn't change."),
      fb("Step 3.", "Te traje las revistas. → ___ traje.", "Te las", "Te doesn't change."),
      fb("Step 3.", "Le devolví el dinero a mi hermano. → ___ devolví.", "Se lo", "Le + lo → se lo."),
      mc(
        "«Mi abuela nos hizo una tarta.» →",
        ["Mi abuela nos la hizo.", "Mi abuela se la hizo.", "Mi abuela la nos hizo.", "Mi abuela nos lo hizo."],
        0,
        "Nos + la."
      ),
      toEs("My friend lent me his bike. — He lent it to me.", "Mi amigo me prestó su bici. — Me la prestó.", "Me + la.", ["Mi amigo me prestó su bicicleta. — Me la prestó."]),
      toEn("¿La contraseña? Se la di a mi compañero.", "The password? I gave it to my colleague.", "Se la = it to him.", ["The password? I gave it to my coworker."]),
    ]
  ),
  L(
    "object-pronouns-drill-3",
    "a2d-double-pronoun-infinitive",
    "Choose & Explain: Double Pronouns with Infinitives",
    "Se lo voy a dar / Voy a dárselo: the pronoun pair moves together — and attaching it adds an accent.",
    "7 min",
    [
      sec(
        "The pair never splits",
        "Both pronouns go before the conjugated verb (Te lo quiero explicar) or both attach to the infinitive (Quiero explicártelo). Attaching two pronouns needs a written accent: dárselo, explicártelo, contárnosla. ✗ Te quiero explicarlo is not standard.",
        [
          ["Se lo voy a decir. = Voy a decírselo.", "I'm going to tell him."],
          ["¿Me lo puedes repetir? = ¿Puedes repetírmelo?", "Can you repeat it for me?"],
        ],
        [
          ms(
            "Which are correct?",
            ["Te la voy a mandar.", "Voy a mandártela.", "Te voy a mandarla.", "Voy te la a mandar."],
            [0, 1],
            "The pair stays together."
          ),
        ]
      ),
    ],
    [
      fb("Attach.", "Se lo quiero regalar. → Quiero ___.", "regalárselo", "Attach both + accent."),
      fb("Attach.", "Me la tienes que devolver. → Tienes que ___.", "devolvérmela", "Attach both + accent."),
      fb("Move before.", "Voy a contártelo. → ___ voy a contar.", "Te lo", "Both before the conjugated verb."),
      fb("Move before.", "Podemos dárselas mañana. → ___ podemos dar mañana.", "Se las", "Both before."),
      mc(
        "Why does «dárselo» have an accent?",
        ["Two pronouns push the stress back — the accent keeps it on «dar».", "Because it's plural.", "Because it's past tense.", "It's optional."],
        0,
        "Accent rule for attached pronouns."
      ),
      mc(
        "«¿Las fotos? ___ enseñar mañana.» (a ti)",
        ["Te las voy a", "Te voy a las", "Las te voy a", "Voy te las a"],
        0,
        "Pair before the conjugated verb."
      ),
      toEs("I'm going to explain it to you.", "Te lo voy a explicar.", "Pair before.", ["Voy a explicártelo."]),
      wo("No se lo puedo decir todavía.", "Pair before conjugated verb, negative first.", "I can't tell him yet."),
    ]
  ),
  L(
    "object-pronouns-drill-3",
    "a2d-fix-paragraph-double",
    "Fix the Paragraph: Double Pronoun Disasters",
    "Le lo, lo le, se los for one thing: repair a note full of double-pronoun errors.",
    "7 min",
    [
      sec(
        "The errors",
        "✗ Le lo di (→ se lo di). ✗ Lo le di (→ se lo di: indirect first). ✗ Se los di (for one object → se lo di). Note: «El libro de Marta: le lo di ayer. Y las llaves, lo le dejé a su madre.»",
        [
          ["El libro de Marta: se lo di ayer.", "Marta's book: I gave it to her yesterday."],
          ["Las llaves se las dejé a su madre.", "I left the keys with her mother."],
        ],
        [
          fb("Fix it.", "El libro: ___ di ayer. (the note says: le lo)", "se lo", "Le + lo → se lo."),
        ]
      ),
    ],
    [
      fb("Fix it.", "Las llaves: ___ dejé a su madre. (the note says: lo le)", "se las", "Indirect first; las llaves → las."),
      fb("Fix it.", "El paraguas: ___ presté a tu padre. (the note says: se los)", "se lo", "One umbrella → lo."),
      fb("Fix it.", "La receta: mi abuela ___ dio a mí. (the note says: se la)", "me la", "A mí → me."),
      fb("Fix it.", "Las fotos: ___ enseñé a los vecinos. (the note says: les las)", "se las", "Les + las → se las."),
      mc(
        "Which sentence is correct?",
        ["¿El mensaje? Ya se lo mandé a Luis.", "¿El mensaje? Ya le lo mandé a Luis.", "¿El mensaje? Ya lo se mandé.", "¿El mensaje? Ya se le mandé."],
        0,
        "Se lo."
      ),
      toEs("The dishes? I washed them for my mother.", "¿Los platos? Se los lavé a mi madre.", "Se los + a mi madre.", ["¿Los platos? Se los lavé a mi mamá."]),
      toEn("¿La noticia? Nos la contó el vecino.", "The news? The neighbor told it to us.", "Nos la.", ["The news? Our neighbor told us.", "The news? The neighbour told us."]),
    ]
  ),
  L(
    "object-pronouns-drill-3",
    "a2d-qa-double-pronouns",
    "Q&A Drill: Answer with Two Pronouns",
    "¿Me prestas el coche? — Sí, te lo presto. Answer every question replacing both the person and the thing.",
    "7 min",
    [
      sec(
        "Replace both",
        "Question: ¿Le diste las llaves a Juan? Answer: Sí, se las di. ¿Me traes el café? → Sí, te lo traigo. ¿Nos enseñas las fotos? → Sí, os/se las enseño.",
        [
          ["—¿Me prestas tu libro? —Sí, te lo presto.", "Will you lend me your book? — Yes, I'll lend it to you."],
        ],
        [
          fb("Answer.", "—¿Le mandaste el correo al jefe? —Sí, ___ mandé.", "se lo", "Le + lo → se lo."),
        ]
      ),
    ],
    [
      fb("Answer.", "—¿Me devuelves los apuntes? —Sí, ___ devuelvo mañana.", "te los", "Me → te; los apuntes → los."),
      fb("Answer.", "—¿Les contaste la verdad a tus padres? —No, todavía no ___ conté.", "se la", "Les + la → se la."),
      fb("Answer.", "—¿Te regalaron el reloj? —Sí, ___ regalaron mis hermanos.", "me lo", "Te → me."),
      fb("Answer.", "—¿Nos traes las bebidas? —Sí, ___ traigo ahora. (a vosotros)", "os las", "Os + las."),
      fb("Answer.", "—¿Le pediste la factura al camarero? —Sí, ___ pedí.", "se la", "Le + la → se la."),
      mt(
        "Match question and answer.",
        [
          ["¿Me das tu número?", "Sí, te lo doy."],
          ["¿Le diste la bici a Ana?", "Sí, se la di."],
          ["¿Nos mandas las fotos?", "Sí, os las mando."],
        ],
        "Two-pronoun answers."
      ),
      toEs("—Did you give Carlos the money? —Yes, I gave it to him.", "—¿Le diste el dinero a Carlos? —Sí, se lo di.", "Se lo di.", []),
    ]
  ),
  L(
    "object-pronouns-drill-3",
    "a2d-mixed-practice-pronouns",
    "Mixed Practice: Every Pronoun in One Round",
    "Direct, indirect, double, reflexive and gustar-type pronouns mixed together — the real-life combination.",
    "7 min",
    [
      sec(
        "Which pronoun is it?",
        "Direct (lo/la/los/las): the thing or person acted on. Indirect (le/les): the receiver. Reflexive (me/te/se…): the subject acts on itself. Gustar-type: indirect pronoun + verb agreeing with the thing. Double: indirect + direct, le → se.",
        [
          ["Me lavo las manos y me las seco.", "I wash my hands and dry them."],
          ["A Ana le encantó el libro y se lo recomendó a su hermana.", "Ana loved the book and recommended it to her sister."],
        ],
        [
          mc(
            "«Me lavo las manos» — «me» is…",
            ["reflexive", "direct object", "indirect object of gustar", "a double pronoun"],
            0,
            "The subject washes itself."
          ),
        ]
      ),
    ],
    [
      fb("Complete.", "¿Las gafas? No ___ encuentro.", "las", "Direct object."),
      fb("Complete.", "A mi padre ___ duele la espalda.", "le", "Gustar-type."),
      fb("Complete.", "Todos los días ___ ducho por la mañana. (yo)", "me", "Reflexive."),
      fb("Complete.", "¿El vino? ___ traje a tu padre. (le + lo)", "Se lo", "Double."),
      fb("Complete.", "___ escribí una postal a mis primos.", "Les", "Indirect."),
      mc(
        "«A nosotros ___ encantan las fiestas y siempre ___ organizamos.»",
        ["nos / las", "nos / los", "les / las", "se / las"],
        0,
        "Nos (gustar-type) + las (las fiestas)."
      ),
      toEs("My sister loves the dress and she's going to buy it.", "A mi hermana le encanta el vestido y lo va a comprar.", "Gustar-type + direct object.", ["A mi hermana le encanta el vestido y va a comprarlo."]),
      toEn("Se lo expliqué dos veces, pero no lo entendió.", "I explained it to him twice, but he didn't understand it.", "Double + direct.", ["I explained it to her twice, but she didn't understand it."]),
    ]
  ),
  L(
    "object-pronouns-drill-3",
    "a2d-say-it-yourself-birthday-gifts",
    "Say It Yourself: Who Gave What to Whom?",
    "Talk about birthday presents using every pronoun you know — gifts given, received and loved.",
    "6 min",
    [
      sec(
        "Talking about presents",
        "Me regalaron… (they gave me…) · Se lo regalé a… (I gave it to…) · Me encantó (I loved it) · No me gustó, así que lo cambié (I didn't like it, so I exchanged it).",
        [
          ["Mi hermano me regaló un libro y me encantó.", "My brother gave me a book and I loved it."],
          ["¿El perfume? Se lo regalé a mi madre.", "The perfume? I gave it to my mother."],
        ],
        [
          fb("Complete.", "Mis amigos ___ regalaron una bicicleta. (a mí)", "me", "A mí → me."),
        ]
      ),
    ],
    [
      toEs("My grandmother gave me a watch.", "Mi abuela me regaló un reloj.", "Me regaló.", []),
      toEs("I loved it.", "Me encantó.", "Encantar, preterite.", ["Me gustó muchísimo."]),
      toEs("I gave my father a shirt.", "Le regalé una camisa a mi padre.", "Le + a mi padre.", ["Le regalé una camisa a mi papá."]),
      toEs("He didn't like it, so I changed it.", "No le gustó, así que la cambié.", "Le gustó + la cambié.", ["No le gustó, entonces la cambié.", "No le gustó y la cambié."]),
      fb("Complete.", "¿Las flores? ___ compré a mi novia.", "Se las", "Le + las → se las."),
      fb("Complete.", "¿El pastel? Nos ___ hizo mi tía.", "lo", "Nos lo."),
      wo("Mi mejor amiga me lo mandó desde Italia.", "Double pronoun before the verb.", "My best friend sent it to me from Italy."),
    ]
  ),
  L(
    "reflexive-verbs-daily-routine-1",
    "a2d-pattern-reflexive-present",
    "Pattern Practice: Me Levanto, Te Levantas, Se Levanta",
    "One routine verb, every person: drill the reflexive pronoun and the verb ending together.",
    "6 min",
    [
      sec(
        "Pronoun + matching verb",
        "Me levanto, te levantas, se levanta, nos levantamos, os levantáis, se levantan. The pronoun always matches the subject. Stem changes still apply: despertarse → me despierto, acostarse → me acuesto, vestirse → me visto.",
        [
          ["Mis hijos se despiertan a las siete.", "My kids wake up at seven."],
          ["Nos acostamos tarde los sábados.", "We go to bed late on Saturdays."],
        ],
        [
          fb("Complete.", "Yo ___ a las siete. (levantarse)", "me levanto", "Yo → me + -o."),
        ]
      ),
    ],
    [
      fb("Complete.", "¿A qué hora ___ tú? (levantarse)", "te levantas", "Tú → te."),
      fb("Complete.", "Mi padre ___ muy temprano. (despertarse)", "se despierta", "Stem change e → ie."),
      fb("Complete.", "Nosotros ___ después de cenar. (ducharse)", "nos duchamos", "Nosotros → nos."),
      fb("Complete.", "Los niños ___ a las nueve. (acostarse)", "se acuestan", "Stem change o → ue."),
      fb("Complete.", "Vosotros ___ muy rápido. (vestirse)", "os vestís", "No stem change in vosotros."),
      mt(
        "Match subject and form of peinarse.",
        [
          ["yo", "me peino"],
          ["ella", "se peina"],
          ["nosotras", "nos peinamos"],
          ["ustedes", "se peinan"],
        ],
        "Reflexive pronoun + ending."
      ),
      toEs("I brush my teeth after breakfast.", "Me cepillo los dientes después del desayuno.", "Body parts take the article, not a possessive.", ["Me lavo los dientes después del desayuno.", "Me cepillo los dientes después de desayunar."]),
      wo("Mi hermana se maquilla en el autobús todas las mañanas.", "Reflexive + habit.", "My sister does her makeup on the bus every morning."),
    ]
  ),
  L(
    "reflexive-verbs-daily-routine-1",
    "a2d-minimal-pairs-with-without-se",
    "Minimal Pairs: Lavo / Me Lavo",
    "With se the subject does it to itself; without se it does it to something else. Decide for each sentence.",
    "6 min",
    [
      sec(
        "Who receives the action?",
        "Lavo el coche (the car) / Me lavo (myself). Despierto a mi hijo (someone else) / Me despierto (myself). Acuesto al bebé / Me acuesto. Pongo la mesa (put) / Me pongo el abrigo (put on).",
        [
          ["Baño al perro. / Me baño.", "I bathe the dog. / I take a bath."],
          ["Visto a los niños. / Me visto.", "I dress the children. / I get dressed."],
        ],
        [
          mc(
            "«Mi madre ___ a mi hermano a las siete.»",
            ["despierta", "se despierta", "me despierta a sí", "despiertan se"],
            0,
            "She wakes someone else → no se."
          ),
        ]
      ),
    ],
    [
      mc(
        "«Todos los días ___ a las siete.» (I wake up)",
        ["me despierto", "despierto", "se despierto", "despierta"],
        0,
        "Myself → me despierto."
      ),
      mc(
        "«___ el abrigo porque hace frío.» (I put on)",
        ["Me pongo", "Pongo", "Se pone", "Pone me"],
        0,
        "Ponerse = put on (clothes)."
      ),
      fb("With or without se?", "Primero ___ al bebé y luego me ducho yo. (bañar)", "baño", "Someone else → no se."),
      fb("With or without se?", "Después del gimnasio ___. (ducharse, yo)", "me ducho", "Myself → me."),
      fb("With or without se?", "Mi padre ___ los platos después de cenar. (lavar)", "lava", "The plates → no se."),
      fb("With or without se?", "Mi padre ___ las manos antes de cenar. (lavarse)", "se lava", "His own hands → se."),
      ms(
        "Which sentences need a reflexive pronoun?",
        ["Yo ___ peino antes de salir.", "Yo ___ peino a mi hija.", "Ella ___ acuesta tarde.", "Ella ___ acuesta a los niños."],
        [0, 2],
        "Only when the action falls on the subject."
      ),
      toEs("I put the children to bed and then I go to bed.", "Acuesto a los niños y luego me acuesto.", "Without se / with se.", ["Acuesto a los niños y después me acuesto."]),
    ]
  ),
  L(
    "reflexive-verbs-daily-routine-2",
    "a2d-reflexive-preterite-routine",
    "Timeline Drill: Yesterday's Routine",
    "Reflexive verbs in the preterite: tell yesterday's morning from alarm to bus stop.",
    "6 min",
    [
      sec(
        "Reflexives in the past",
        "The pronoun stays; the verb goes into the preterite: me levanté, te duchaste, se vistió, nos fuimos. Watch the -ir stem change in él/ellos: vestirse → se vistió, se vistieron; dormirse → se durmió.",
        [
          ["Ayer me levanté a las seis y me duché enseguida.", "Yesterday I got up at six and showered straight away."],
          ["Mi hermano se durmió en el sofá.", "My brother fell asleep on the sofa."],
        ],
        [
          fb("Complete.", "Ayer ___ a las seis. (despertarse, yo)", "me desperté", "No stem change in the preterite for -ar."),
        ]
      ),
    ],
    [
      fb("Complete.", "Luego ___ con agua fría. (ducharse, yo)", "me duché", "Preterite yo."),
      fb("Complete.", "Mi hermana ___ muy rápido. (vestirse)", "se vistió", "-ir stem change e → i in él."),
      fb("Complete.", "Nosotros ___ en la cocina. (sentarse)", "nos sentamos", "Preterite nosotros."),
      fb("Complete.", "Los niños ___ tarde otra vez. (levantarse)", "se levantaron", "Preterite ellos."),
      fb("Complete.", "El bebé ___ en el coche. (dormirse)", "se durmió", "o → u in él."),
      mc(
        "«¿A qué hora ___ anoche?» (acostarse, tú)",
        ["te acostaste", "te acuestas", "te acostabas siempre", "se acostó"],
        0,
        "Anoche → preterite; tú → te."
      ),
      toEs("Yesterday I got up late and didn't shower.", "Ayer me levanté tarde y no me duché.", "Reflexive preterite.", ["Ayer me levanté tarde y no me bañé."]),
      wo("Esta mañana me puse la camisa al revés.", "Ponerse, preterite.", "This morning I put my shirt on inside out."),
    ]
  ),
  L(
    "reflexive-verbs-daily-routine-2",
    "a2d-reflexive-infinitive-placement",
    "Choose & Explain: Voy a Ducharme / Me Voy a Duchar",
    "Reflexive pronouns with infinitives and gerunds: drill both positions and the matching person.",
    "6 min",
    [
      sec(
        "Same rules as object pronouns",
        "With an infinitive or gerund the pronoun goes before the conjugated verb or attached: Me voy a duchar = Voy a ducharme. Te estás peinando = Estás peinándote. The pronoun still matches the subject: ✗ Voy a ducharse.",
        [
          ["Tengo que levantarme a las seis.", "I have to get up at six."],
          ["Nos estamos preparando.", "We're getting ready."],
        ],
        [
          mc(
            "Which is wrong?",
            ["Quiero acostarse temprano.", "Quiero acostarme temprano.", "Me quiero acostar temprano.", "Me acuesto temprano."],
            0,
            "Yo → me, not se."
          ),
        ]
      ),
    ],
    [
      fb("Attach.", "Me voy a vestir. → Voy a ___.", "vestirme", "Attached to the infinitive."),
      fb("Attach.", "Te tienes que relajar. → Tienes que ___.", "relajarte", "Tú → te."),
      fb("Move before.", "Vamos a sentarnos aquí. → ___ vamos a sentar aquí.", "Nos", "Before the conjugated verb."),
      fb("Match the person.", "Mis padres quieren ___ en la costa. (jubilarse)", "jubilarse", "Ellos → se."),
      fb("Match the person.", "Tú necesitas ___ más temprano. (acostarse)", "acostarte", "Tú → te."),
      mc(
        "«Estoy ___ para la fiesta.» (arreglarse)",
        ["arreglándome", "arreglándose", "arreglandome se", "me arreglando"],
        0,
        "Gerund + me + accent."
      ),
      toEs("I have to get up early tomorrow.", "Tengo que levantarme temprano mañana.", "Tener que + reflexive infinitive.", ["Mañana tengo que levantarme temprano.", "Me tengo que levantar temprano mañana."]),
      wo("Nos vamos a quedar en casa este fin de semana.", "Pronoun before ir a.", "We're going to stay home this weekend."),
    ]
  ),
  L(
    "reflexive-verbs-daily-routine-2",
    "a2d-reflexive-meaning-change",
    "Drill Circuit: Verbs That Change with Se",
    "Ir / irse, dormir / dormirse, quedar / quedarse, llamar / llamarse, poner / ponerse: same verb, new meaning.",
    "7 min",
    [
      sec(
        "Meaning shifts",
        "Ir (go) / irse (leave). Dormir (sleep) / dormirse (fall asleep). Quedar (meet up, be located) / quedarse (stay). Llamar (call) / llamarse (be named). Poner (put) / ponerse (put on; become: ponerse nervioso).",
        [
          ["Me voy. Nos vemos mañana.", "I'm leaving. See you tomorrow."],
          ["Me dormí en clase.", "I fell asleep in class."],
        ],
        [
          mc(
            "«Me quedé en casa» means…",
            ["I stayed at home.", "I met at home.", "I left home.", "I called home."],
            0,
            "Quedarse = stay."
          ),
        ]
      ),
    ],
    [
      mt(
        "Match verb and meaning.",
        [
          ["irse", "to leave"],
          ["dormirse", "to fall asleep"],
          ["ponerse", "to put on / to become"],
          ["quedarse", "to stay"],
        ],
        "Meaning shifts with se."
      ),
      fb("Choose.", "Es tarde, ___ ya. (irse, yo)", "me voy", "Leave → irse."),
      fb("Choose.", "Siempre ___ ocho horas. (dormir, yo)", "duermo", "Sleep → dormir."),
      fb("Choose.", "Anoche ___ viendo la tele. (dormirse, yo)", "me dormí", "Fall asleep → dormirse."),
      fb("Choose.", "Antes del examen ___ muy nervioso. (ponerse, yo, preterite)", "me puse", "Become → ponerse."),
      fb("Choose.", "Mi perro ___ Toby. (llamarse)", "se llama", "Be named → llamarse."),
      mc(
        "«¿Dónde ___ el museo?» (quedar)",
        ["queda", "se queda", "quedas", "me queda"],
        0,
        "Quedar = be located."
      ),
      toEs("We left early because we were tired.", "Nos fuimos temprano porque estábamos cansados.", "Irse + imperfect reason.", ["Nos fuimos pronto porque estábamos cansados.", "Nos fuimos temprano porque estábamos cansadas."]),
    ]
  ),
  L(
    "reflexive-verbs-drill-3",
    "a2d-say-it-yourself-morning",
    "Say It Yourself: My Morning Routine",
    "Describe your own morning, step by step, with reflexive verbs and sequence words.",
    "6 min",
    [
      sec(
        "Your routine",
        "Sequence words: primero, luego, después, mientras, antes de + infinitive, después de + infinitive. With a reflexive infinitive the pronoun matches you: antes de ducharme, después de vestirme.",
        [
          ["Después de ducharme, me visto y desayuno.", "After showering, I get dressed and have breakfast."],
          ["Antes de salir, me miro en el espejo.", "Before going out, I look at myself in the mirror."],
        ],
        [
          mc(
            "«Antes de ___, apago las luces.» (acostarse, yo)",
            ["acostarme", "acostarse", "me acostar", "acuesto"],
            0,
            "Infinitive + me for yo."
          ),
        ]
      ),
    ],
    [
      toEs("First I wake up and stay in bed five minutes.", "Primero me despierto y me quedo en la cama cinco minutos.", "Two reflexives.", ["Primero me despierto y me quedo cinco minutos en la cama."]),
      toEs("Then I get up and have a shower.", "Luego me levanto y me ducho.", "Sequence + reflexives.", ["Después me levanto y me ducho.", "Luego me levanto y me baño."]),
      toEs("After getting dressed, I have breakfast.", "Después de vestirme, desayuno.", "Después de + reflexive infinitive.", []),
      toEs("I brush my teeth before leaving.", "Me cepillo los dientes antes de salir.", "Antes de + infinitive.", ["Me lavo los dientes antes de salir."]),
      fb("Complete.", "Mientras desayuno, ___ las noticias. (leer)", "leo", "Not reflexive."),
      fb("Complete.", "Mi pareja ___ más tarde que yo. (levantarse)", "se levanta", "Él/ella → se."),
      wo("A las ocho me pongo el abrigo y me voy al trabajo.", "Ponerse + irse.", "At eight I put on my coat and leave for work."),
      toEn("Los fines de semana no me pongo el despertador.", "On weekends I don't set the alarm.", "Ponerse el despertador.", ["At the weekend I don't set my alarm.", "On weekends I don't set an alarm."]),
    ]
  ),
  L(
    "reflexive-verbs-drill-3",
    "a2d-fix-paragraph-reflexive",
    "Fix the Paragraph: Reflexive Slips",
    "A roommate's note with missing or wrong reflexive pronouns. Put every se, me and nos in the right place.",
    "6 min",
    [
      sec(
        "Missing or mismatched pronouns",
        "✗ Yo levanto a las seis (→ me levanto). ✗ Nosotros se duchamos (→ nos duchamos). ✗ Ella se lava su pelo (→ se lava el pelo). ✗ Voy a acostarse (→ acostarme). Note: «Hola, compi: yo levanto a las seis, así que nosotros se duchamos por turnos, ¿vale?»",
        [
          ["Me levanto a las seis.", "I get up at six."],
          ["Nos duchamos por turnos.", "We take turns showering."],
        ],
        [
          fb("Fix it.", "Yo ___ a las seis. (the note says: levanto)", "me levanto", "Missing reflexive pronoun."),
        ]
      ),
    ],
    [
      fb("Fix it.", "Nosotros ___ por turnos. (the note says: se duchamos)", "nos duchamos", "Nosotros → nos."),
      fb("Fix it.", "Mi novia se lava ___ pelo por la noche. (the note says: su)", "el", "Body part → article."),
      fb("Fix it.", "Voy a ___ temprano hoy. (the note says: acostarse)", "acostarme", "Yo → me."),
      fb("Fix it.", "¿Tú ___ con el despertador? (the note says: despiertas)", "te despiertas", "Missing te."),
      fb("Fix it.", "Mis padres ___ los domingos. (the note says: relajan)", "se relajan", "Relajarse."),
      mc(
        "Which sentence is correct?",
        ["Me pongo los zapatos en la puerta.", "Pongo me los zapatos.", "Me pongo mis zapatos míos.", "Se pongo los zapatos."],
        0,
        "Reflexive + article."
      ),
      toEs("My brother always falls asleep on the sofa.", "Mi hermano siempre se duerme en el sofá.", "Dormirse.", ["Mi hermano siempre se queda dormido en el sofá."]),
    ]
  ),
  L(
    "reflexive-verbs-drill-3",
    "a2d-reflexive-past-mixed",
    "Mixed Practice: Reflexives in Three Tenses",
    "Present routine, imperfect habit and preterite event — the same reflexive verbs in all three.",
    "7 min",
    [
      sec(
        "Three time frames",
        "Now: Me acuesto a las once. Childhood habit: De niño me acostaba a las nueve. One night: Anoche me acosté a la una. Future plan: Mañana me voy a acostar pronto.",
        [
          ["De niña me bañaba por la noche; ahora me ducho por la mañana.", "As a girl I bathed at night; now I shower in the morning."],
        ],
        [
          fb("Habit.", "De niño ___ a las nueve. (acostarse, yo)", "me acostaba", "Imperfect habit."),
        ]
      ),
    ],
    [
      fb("One night.", "Anoche ___ a la una. (acostarse, yo)", "me acosté", "Preterite."),
      fb("Now.", "Ahora ___ a las once. (acostarse, yo)", "me acuesto", "Present with stem change."),
      fb("Plan.", "Mañana ___ temprano. (ir a levantarse, yo)", "me voy a levantar", "Ir a + infinitive."),
      fb("Habit.", "Mis abuelos siempre ___ la siesta. (echarse)", "se echaban", "Imperfect habit."),
      fb("One event.", "Ese día nos ___ muy tarde. (despertarse)", "despertamos", "Preterite nosotros."),
      mc(
        "«Cuando ___ el teléfono, yo ___.» (sonar / ducharse)",
        ["sonó / me duchaba", "sonaba / me duché", "sonó / me duché", "suena / me duchaba"],
        0,
        "Interruption + in progress."
      ),
      toEs("When I was young I used to get up at five.", "Cuando era joven me levantaba a las cinco.", "Imperfect habit.", ["De joven me levantaba a las cinco."]),
      toEn("Ayer no me puse el reloj y llegué tarde.", "Yesterday I didn't put on my watch and I arrived late.", "Ponerse, preterite.", ["Yesterday I didn't put my watch on and I was late."]),
    ]
  ),
  L(
    "reflexive-verbs-drill-3",
    "a2d-reciprocal-se",
    "Pattern Practice: Nos Queremos, Se Conocieron",
    "Reciprocal meaning (each other) uses the same plural pronouns: nos, os, se.",
    "6 min",
    [
      sec(
        "Each other",
        "With plural subjects, nos/os/se can mean «each other»: Nos llamamos todos los días (we call each other). Se conocieron en 2010 (they met each other). Se escriben cartas (they write to each other).",
        [
          ["Mi hermana y yo nos vemos los domingos.", "My sister and I see each other on Sundays."],
          ["Se conocieron en la universidad.", "They met at university."],
        ],
        [
          mc(
            "«Nos escribimos mucho» means…",
            ["We write to each other a lot.", "We write ourselves a lot.", "They write to us.", "We wrote a lot."],
            0,
            "Reciprocal."
          ),
        ]
      ),
    ],
    [
      fb("Complete.", "Ana y Luis ___ en una fiesta. (conocerse, preterite)", "se conocieron", "Met each other."),
      fb("Complete.", "Mi mejor amiga y yo ___ todos los días. (llamarse)", "nos llamamos", "Call each other."),
      fb("Complete.", "Los dos hermanos no ___ desde hace años. (hablarse)", "se hablan", "Talk to each other."),
      fb("Complete.", "Nosotros ___ en la estación a las cinco. (verse, preterite)", "nos vimos", "Saw each other / met."),
      fb("Complete.", "¿Vosotros ___ mensajes a menudo? (escribirse)", "os escribís", "Vosotros → os."),
      mc(
        "«Se abrazaron en el aeropuerto» means…",
        ["They hugged each other at the airport.", "They hugged themselves.", "Someone hugged them.", "They will hug."],
        0,
        "Reciprocal preterite."
      ),
      toEs("We met in Madrid in 2019.", "Nos conocimos en Madrid en 2019.", "Reciprocal preterite.", []),
      wo("Mis padres se casaron dos años después de conocerse.", "Reciprocal + infinitive.", "My parents got married two years after meeting each other."),
    ]
  ),
  L(
    "reflexive-verbs-drill-3",
    "a2d-speed-round-reflexive",
    "Speed Round: Reflexive or Not? 10 Quick Calls",
    "Decide in a second whether the verb needs a pronoun — and which one.",
    "5 min",
    [
      sec(
        "Instant check",
        "Does the action fall on the subject (or each other)? → pronoun matching the subject. Does it fall on someone or something else? → no reflexive pronoun.",
        [
          ["Me afeito. / Afeito a mi abuelo.", "I shave. / I shave my grandfather."],
        ],
        [
          fb("Quick!", "Ellos ___ los viernes. (divertirse)", "se divierten", "Reflexive + e → ie."),
        ]
      ),
    ],
    [
      fb("Quick!", "Yo ___ la televisión. (apagar)", "apago", "Not reflexive."),
      fb("Quick!", "Tú ___ demasiado. (preocuparse)", "te preocupas", "Reflexive."),
      fb("Quick!", "Mi hijo ___ los zapatos solo. (ponerse)", "se pone", "Reflexive."),
      fb("Quick!", "Nosotros ___ la cena. (preparar)", "preparamos", "Not reflexive."),
      fb("Quick!", "Ustedes ___ muy bien. (llevarse, get along)", "se llevan", "Llevarse bien = get along."),
      fb("Quick!", "Yo ___ el pelo cada dos días. (lavarse)", "me lavo", "Reflexive."),
      fb("Quick!", "Ella ___ a su hermano pequeño. (peinar)", "peina", "Not reflexive."),
      mc(
        "«Mis vecinos y yo ___ bien.» (llevarse)",
        ["nos llevamos", "se llevan", "llevamos", "nos llevan"],
        0,
        "Nosotros → nos."
      ),
    ]
  ),
  L(
    "comparisons-superlatives-1",
    "a2d-pattern-mas-menos-que",
    "Pattern Practice: Más… Que, Menos… Que",
    "Compare two people, places and prices with the same frame until the word order is automatic.",
    "6 min",
    [
      sec(
        "The frame",
        "más/menos + adjective/adverb/noun + que. The adjective agrees with the first noun: Mi casa es más grande que la tuya. With numbers use de: más de cien personas.",
        [
          ["Madrid es más grande que Toledo.", "Madrid is bigger than Toledo."],
          ["Este móvil es menos caro que ese.", "This phone is less expensive than that one."],
        ],
        [
          fb("Compare.", "El tren es ___ rápido que el autobús. (more)", "más", "Más… que."),
        ]
      ),
    ],
    [
      fb("Compare.", "Mi hermana es más alta ___ yo.", "que", "Más… que."),
      fb("Compare.", "Las naranjas son ___ caras que las fresas. (less)", "menos", "Menos… que."),
      fb("Compare.", "Tengo más ___ veinte primos. (number)", "de", "Más de + number."),
      fb("Compare.", "Esta calle es más ___ que la otra. (tranquilo)", "tranquila", "Agrees with calle."),
      mc(
        "«Luis trabaja ___ horas que yo.»",
        ["más", "más de", "tanto", "mejor"],
        0,
        "Más + noun + que."
      ),
      ms(
        "Which sentences are correct?",
        ["Hay más de cien personas.", "Hay más que cien personas.", "Ana es menos tímida que Eva.", "Ana es más tímido que Eva."],
        [0, 2],
        "Más de + number; agreement."
      ),
      toEs("My city is smaller than yours.", "Mi ciudad es más pequeña que la tuya.", "Agreement with ciudad.", ["Mi ciudad es menos grande que la tuya.", "Mi ciudad es más pequeña que la tuya."]),
      wo("En invierno los días son más cortos que en verano.", "Más… que.", "In winter the days are shorter than in summer."),
    ]
  ),
  L(
    "comparisons-superlatives-2",
    "a2d-tan-tanto-drill",
    "Drill Circuit: Tan, Tanto, Tanta, Tantos, Tantas",
    "Equality comparisons: tan + adjective, tanto/a/os/as + noun, verb + tanto como.",
    "7 min",
    [
      sec(
        "Three patterns",
        "tan + adjective/adverb + como: tan alto como. tanto/tanta/tantos/tantas + noun + como (agrees with the noun): tantos libros como, tanta paciencia como. verb + tanto como: Estudio tanto como tú.",
        [
          ["Mi hermano es tan alto como mi padre.", "My brother is as tall as my father."],
          ["No tengo tanto tiempo como tú.", "I don't have as much time as you."],
        ],
        [
          fb("Complete.", "Ella tiene ___ amigas como yo.", "tantas", "Agrees with amigas."),
        ]
      ),
    ],
    [
      fb("Complete.", "Este hotel es ___ caro como el otro.", "tan", "Tan + adjective."),
      fb("Complete.", "Hay ___ gente como ayer.", "tanta", "Agrees with gente (feminine)."),
      fb("Complete.", "Tengo ___ problemas como tú.", "tantos", "Agrees with problemas (masculine)."),
      fb("Complete.", "Mi abuela camina ___ rápido como yo.", "tan", "Tan + adverb."),
      fb("Complete.", "Duermo ___ como mi gato.", "tanto", "Verb + tanto como."),
      mc(
        "«No hay ___ coches como en la capital.»",
        ["tantos", "tan", "tantas", "tanto"],
        0,
        "Coches → tantos."
      ),
      mt(
        "Match each gap with the right form.",
        [
          ["___ inteligente como", "tan"],
          ["___ agua como", "tanta"],
          ["___ ejercicios como", "tantos"],
        ],
        "Tan vs. tanto."
      ),
      toEs("I don't have as much money as my brother.", "No tengo tanto dinero como mi hermano.", "Tanto + noun.", []),
    ]
  ),
  L(
    "comparisons-superlatives-2",
    "a2d-irregular-comparatives",
    "Minimal Pairs: Mejor, Peor, Mayor, Menor",
    "Más bueno or mejor? Más grande or mayor? Drill the irregular comparatives and when to use them.",
    "6 min",
    [
      sec(
        "Irregular forms",
        "bueno/bien → mejor; malo/mal → peor; age: mayor (older), menor (younger). Plural: mejores, peores, mayores, menores. ✗ más mejor. For physical size, más grande / más pequeño is normal.",
        [
          ["Mi hermano mayor cocina mejor que yo.", "My older brother cooks better than me."],
          ["Estas notas son peores que las del año pasado.", "These grades are worse than last year's."],
        ],
        [
          mc(
            "«Mi hermana tiene 20 años y yo 25. Ella es ___ que yo.»",
            ["menor", "mayor", "más pequeña de edad", "peor"],
            0,
            "Younger → menor."
          ),
        ]
      ),
    ],
    [
      fb("Complete.", "Este restaurante es ___ que el otro. (bueno)", "mejor", "Bueno → mejor."),
      fb("Complete.", "Hoy me siento ___ que ayer. (mal)", "peor", "Mal → peor."),
      fb("Complete.", "Mis abuelos son ___ que mis padres. (age)", "mayores", "Older, plural."),
      fb("Complete.", "Sus notas son ___ que las mías. (buenas)", "mejores", "Plural → mejores."),
      mc(
        "Which is wrong?",
        ["Es más mejor que el otro.", "Es mejor que el otro.", "Es peor que el otro.", "Es mayor que el otro."],
        0,
        "Never más mejor."
      ),
      mc(
        "«Canta ___ que su madre.» (well)",
        ["mejor", "más bueno", "más bien", "bueno"],
        0,
        "Bien → mejor."
      ),
      toEs("My younger sister speaks English better than me.", "Mi hermana menor habla inglés mejor que yo.", "Menor + mejor.", ["Mi hermana pequeña habla inglés mejor que yo."]),
      toEn("La película fue peor que el libro.", "The movie was worse than the book.", "Peor que.", []),
    ]
  ),
  L(
    "comparisons-superlatives-drill-3",
    "a2d-superlative-build",
    "Build-Up: The Best, the Worst, the Biggest",
    "Superlatives step by step: el/la + más + adjective + de, plus the irregular el mejor / el peor.",
    "6 min",
    [
      sec(
        "The superlative frame",
        "el/la/los/las + (noun) + más/menos + adjective + de + group: Es la ciudad más bonita de España. Irregular: el mejor, la peor, los mayores. Note de, not en: ✗ en la clase → de la clase.",
        [
          ["Es el restaurante más caro de la ciudad.", "It's the most expensive restaurant in the city."],
          ["Es la mejor película del año.", "It's the best movie of the year."],
        ],
        [
          fb("Complete.", "Es el río más largo ___ Europa.", "de", "Superlative + de."),
        ]
      ),
    ],
    [
      fb("Build.", "Ana es la alumna más ___ de la clase. (trabajador)", "trabajadora", "Agreement."),
      fb("Build.", "Estos son los ___ zapatos de la tienda. (bueno)", "mejores", "Irregular plural."),
      fb("Build.", "Fue el ___ día de mi vida. (malo)", "peor", "Irregular superlative."),
      fb("Build.", "Es la ciudad ___ poblada del país.", "más", "Más + adjective."),
      fb("Build.", "Mi abuelo es el ___ de la familia. (age)", "mayor", "Oldest."),
      mc(
        "«Es el edificio más alto ___ mundo.»",
        ["del", "en el", "que el", "de el"],
        0,
        "De + el = del."
      ),
      toEs("It's the most beautiful beach in the island.", "Es la playa más bonita de la isla.", "Superlative + de.", ["Es la playa más hermosa de la isla.", "Es la playa más linda de la isla."]),
      wo("Esta es la mejor paella de toda la ciudad.", "Superlative.", "This is the best paella in the whole city."),
    ]
  ),
  L(
    "comparisons-superlatives-drill-3",
    "a2d-isimo-and-compare",
    "Speed Round: -ísimo and Comparisons Mixed",
    "Carísimo, facilísimo, más barato que, tan caro como: switch between absolute and comparative forms quickly.",
    "6 min",
    [
      sec(
        "Absolute superlative",
        "-ísimo means «very, extremely» without comparing: caro → carísimo, fácil → facilísimo, rico → riquísimo (c → qu), largo → larguísimo (g → gu). It agrees: casas carísimas.",
        [
          ["La comida está riquísima.", "The food is absolutely delicious."],
          ["El examen fue facilísimo.", "The exam was super easy."],
        ],
        [
          fb("-ísimo.", "Este café está ___. (bueno → buenísimo)", "buenísimo", "Bueno → buenísimo."),
        ]
      ),
    ],
    [
      fb("-ísimo.", "La película es ___. (largo)", "larguísima", "g → gu; agrees."),
      fb("-ísimo.", "Estos pasteles están ___. (rico)", "riquísimos", "c → qu; plural."),
      fb("-ísimo.", "Mi abuela es ___. (simpático)", "simpatiquísima", "c → qu; feminine."),
      fb("Comparison.", "El metro es ___ rápido que el autobús.", "más", "Más… que."),
      fb("Comparison.", "Este piso es tan grande ___ el tuyo.", "como", "Tan… como."),
      fb("Superlative.", "Es la plaza más famosa ___ la ciudad.", "de", "Superlative + de."),
      mc(
        "«Hacía un calor ___.»",
        ["horrible y fortísimo", "más fuerte que", "tan fuerte", "fortísima"],
        0,
        "Calor is masculine: fortísimo."
      ),
      toEs("The hotel was very, very expensive.", "El hotel era carísimo.", "-ísimo.", ["El hotel fue carísimo."]),
    ]
  ),
  L(
    "comparisons-superlatives-drill-3",
    "a2d-fix-paragraph-comparisons",
    "Fix the Paragraph: Comparisons Gone Wrong",
    "A product review with más mejor, tan… que, más que cien and agreement errors. Fix it.",
    "6 min",
    [
      sec(
        "The review",
        "«Este móvil es ✗ más mejor que el anterior (→ mejor). La batería es ✗ tan buena que la del otro modelo (→ como). Cuesta ✗ más que 500 euros (→ más de). La pantalla es ✗ la más grande en el mercado (→ del mercado).»",
        [
          ["Es mejor que el anterior.", "It's better than the previous one."],
          ["Cuesta más de 500 euros.", "It costs more than 500 euros."],
        ],
        [
          fb("Fix it.", "Este móvil es ___ que el anterior. (the review says: más mejor)", "mejor", "No más with mejor."),
        ]
      ),
    ],
    [
      fb("Fix it.", "La batería es tan buena ___ la del otro modelo. (the review says: que)", "como", "Tan… como."),
      fb("Fix it.", "Cuesta más ___ 500 euros. (the review says: que)", "de", "Más de + number."),
      fb("Fix it.", "La pantalla es la más grande ___ mercado. (the review says: en el)", "del", "Superlative + de."),
      fb("Fix it.", "Las fotos son ___ nítidas que antes. (the review says: más mejores)", "más", "Más + adjective."),
      fb("Fix it.", "Tiene ___ aplicaciones como mi tableta. (the review says: tantos)", "tantas", "Agrees with aplicaciones."),
      mc(
        "Which sentence is correct?",
        ["Es el peor móvil de la tienda.", "Es el más peor móvil.", "Es peor de todos.", "Es tan peor como."],
        0,
        "El peor."
      ),
      toEs("It is better than the old one and cheaper.", "Es mejor que el antiguo y más barato.", "Mejor + más barato.", ["Es mejor que el viejo y más barato."]),
    ]
  ),
  L(
    "future-tense-1",
    "a2d-pattern-future-endings",
    "Pattern Practice: Future Endings on the Whole Infinitive",
    "Hablaré, comerás, vivirá: keep the infinitive, add the ending — every person, every verb group.",
    "6 min",
    [
      sec(
        "Infinitive + ending",
        "-é, -ás, -á, -emos, -éis, -án, added to the whole infinitive for -ar, -er and -ir alike: trabajaré, aprenderás, escribirá. All forms except nosotros carry a written accent.",
        [
          ["El año que viene viviremos en Barcelona.", "Next year we'll live in Barcelona."],
          ["Mañana te llamaré.", "I'll call you tomorrow."],
        ],
        [
          fb("Complete.", "Mañana ___ a mi abuela. (visitar, yo)", "visitaré", "Infinitive + -é."),
        ]
      ),
    ],
    [
      fb("Complete.", "¿___ tú en la reunión? (estar)", "Estarás", "Infinitive + -ás."),
      fb("Complete.", "Mi jefe ___ la decisión el lunes. (tomar)", "tomará", "Infinitive + -á."),
      fb("Complete.", "Nosotros ___ en un hotel. (dormir)", "dormiremos", "No stem change in the future."),
      fb("Complete.", "Ellos ___ el tren de las ocho. (coger)", "cogerán", "Infinitive + -án."),
      fb("Complete.", "Vosotros ___ mucho en este curso. (aprender)", "aprenderéis", "Infinitive + -éis."),
      mt(
        "Match subject and future of abrir.",
        [
          ["yo", "abriré"],
          ["ella", "abrirá"],
          ["nosotros", "abriremos"],
          ["ustedes", "abrirán"],
        ],
        "Same endings for all verb groups."
      ),
      toEs("Next summer we'll travel to Argentina.", "El verano que viene viajaremos a Argentina.", "Future nosotros.", ["El próximo verano viajaremos a Argentina."]),
      wo("Dentro de diez años mi hija terminará la universidad.", "Future + time phrase.", "In ten years my daughter will finish university."),
    ]
  ),
  L(
    "future-tense-2",
    "a2d-irregular-future-stems-drill",
    "Drill Circuit: Tendr-, Saldr-, Har-, Dir-",
    "The ten irregular future stems in rapid rotation: shortened, -dr- and completely new stems.",
    "7 min",
    [
      sec(
        "Three stem groups",
        "Drop the vowel: poder → podr-, querer → querr-, saber → sabr-, haber → habr-. Vowel → d: tener → tendr-, poner → pondr-, salir → saldr-, venir → vendr-. New stems: hacer → har-, decir → dir-. Endings stay regular.",
        [
          ["Tendré tiempo el viernes.", "I'll have time on Friday."],
          ["¿Qué harás mañana?", "What will you do tomorrow?"],
        ],
        [
          mc(
            "Future stem of salir:",
            ["saldr-", "salir-", "sald-", "salr-"],
            0,
            "Vowel → d: saldr-."
          ),
        ]
      ),
    ],
    [
      fb("Conjugate.", "Mañana ___ temprano. (salir, yo)", "saldré", "Saldr- + -é."),
      fb("Conjugate.", "¿___ venir a la fiesta? (poder, tú)", "Podrás", "Podr- + -ás."),
      fb("Conjugate.", "Mis padres ___ el sábado. (venir)", "vendrán", "Vendr- + -án."),
      fb("Conjugate.", "Te ___ la verdad. (decir, yo)", "diré", "Dir- + -é."),
      fb("Conjugate.", "Nosotros ___ la cena. (hacer)", "haremos", "Har- + -emos."),
      fb("Conjugate.", "¿Dónde ___ las maletas? (poner, ustedes)", "pondrán", "Pondr- + -án."),
      ms(
        "Which future forms are correct?",
        ["sabremos", "tendrá", "hacerá", "quertré"],
        [0, 1],
        "Hacer → hará; querer → querré."
      ),
      toEs("I won't have time tomorrow.", "Mañana no tendré tiempo.", "Tendr- + -é.", ["No tendré tiempo mañana."]),
    ]
  ),
  L(
    "future-tense-2",
    "a2d-ir-a-vs-future",
    "Minimal Pairs: Voy a Viajar / Viajaré",
    "Two ways to talk about the future: when each one sounds natural, and how to switch between them.",
    "6 min",
    [
      sec(
        "Plan vs. prediction",
        "Ir a + infinitive: near, decided plans (Esta tarde voy a estudiar). Simple future: predictions, promises, distant or formal plans (Algún día seré médica; Te lo prometo: no llegaré tarde). In everyday speech both often work.",
        [
          ["Esta noche voy a cocinar pasta.", "Tonight I'm going to cook pasta."],
          ["Mañana lloverá en el norte.", "Tomorrow it will rain in the north."],
        ],
        [
          mc(
            "A weather forecast most typically says…",
            ["Mañana hará sol en todo el país.", "Mañana va a ir a hacer sol.", "Mañana hacía sol.", "Mañana hizo sol."],
            0,
            "Forecasts → simple future."
          ),
        ]
      ),
    ],
    [
      fb("Switch to the simple future.", "Voy a llamarte mañana. → Te ___ mañana.", "llamaré", "Ir a llamar → llamaré."),
      fb("Switch to the simple future.", "Vamos a salir a las seis. → ___ a las seis.", "Saldremos", "Irregular stem saldr-."),
      fb("Switch to ir a.", "Haré la compra luego. → ___ a hacer la compra luego.", "Voy", "Ir a + infinitive."),
      fb("Switch to ir a.", "Mis primos vendrán en julio. → Mis primos ___ a venir en julio.", "van", "Ellos → van."),
      mc(
        "Promise to a friend:",
        ["Te prometo que nunca lo olvidaré.", "Te prometo que nunca lo olvidaba.", "Te prometo que nunca lo olvidé.", "Te prometo que nunca lo olvido ayer."],
        0,
        "Promises → future."
      ),
      toEs("One day I will speak Spanish perfectly.", "Algún día hablaré español perfectamente.", "Future for long-term goals.", ["Algún día hablaré español a la perfección."]),
      toEn("Esta tarde vamos a ver a mis suegros.", "This afternoon we're going to see my in-laws.", "Ir a + infinitive.", ["This afternoon we're going to visit my in-laws."]),
    ]
  ),
  L(
    "future-tense-2",
    "a2d-future-probability",
    "Choose & Explain: Future of Probability",
    "¿Dónde estará Juan? — Estará en el trabajo: the future used to guess about the present.",
    "6 min",
    [
      sec(
        "Guessing with the future",
        "The simple future can express a guess about now: ¿Qué hora será? (I wonder what time it is). Serán las cinco (It's probably five). Tendrá unos cuarenta años (He must be about forty). No future meaning at all!",
        [
          ["—¿Quién llama? —Será el cartero.", "Who's ringing? — It's probably the mailman."],
          ["Estará cansado, trabajó todo el día.", "He must be tired; he worked all day."],
        ],
        [
          mc(
            "«¿Dónde estará mi móvil?» means…",
            ["I wonder where my phone is.", "Where will my phone be tomorrow?", "Where was my phone?", "My phone will be here."],
            0,
            "Future of probability."
          ),
        ]
      ),
    ],
    [
      mc(
        "«Tendrá unos treinta años» means…",
        ["She's probably about thirty.", "She will be thirty.", "She was thirty.", "She wants to be thirty."],
        0,
        "Guess about the present."
      ),
      fb("Guess.", "Mi hermano no contesta. ___ en el gimnasio. (estar)", "Estará", "Probability → future."),
      fb("Guess.", "¿Qué hora ___? — No sé, las diez. (ser)", "será", "I wonder…"),
      fb("Guess.", "Hay mucha gente: ___ un concierto. (haber)", "habrá", "Haber → habrá."),
      fb("Guess.", "Mi vecino siempre viaja: ___ mucho dinero. (tener)", "tendrá", "Tendr- + -á."),
      ms(
        "Which sentences express a guess about the present?",
        ["Serán las ocho.", "Estará en casa.", "Mañana iré al médico.", "¿Quién será?"],
        [0, 1, 3],
        "Mañana iré = real future."
      ),
      toEs("It's probably my mother.", "Será mi madre.", "Future of probability.", ["Seguramente es mi madre.", "Será mi mamá."]),
      toEn("¿Cuántos años tendrá ese profesor?", "I wonder how old that teacher is.", "Guess about the present.", ["How old might that teacher be?", "How old do you think that teacher is?"]),
    ]
  ),
  L(
    "future-tense-drill-3",
    "a2d-say-it-yourself-five-years",
    "Say It Yourself: In Five Years",
    "Translate a personal plan for the next five years: work, home, travel and one promise.",
    "6 min",
    [
      sec(
        "Talking about your future",
        "Useful frames: Dentro de cinco años… · El año que viene… · Algún día… Then a future verb: Viviré…, Trabajaré…, Tendré…, Podré…",
        [
          ["Dentro de cinco años viviré en otra ciudad.", "In five years I'll live in another city."],
          ["Algún día tendré mi propia empresa.", "Someday I'll have my own company."],
        ],
        [
          mc(
            "«Dentro de cinco años» means…",
            ["in five years' time", "five years ago", "for five years", "every five years"],
            0,
            "Dentro de + time = in (future)."
          ),
        ]
      ),
    ],
    [
      toEs("In five years I will work abroad.", "Dentro de cinco años trabajaré en el extranjero.", "Regular future.", ["Dentro de cinco años trabajaré fuera del país."]),
      toEs("I will have a bigger house.", "Tendré una casa más grande.", "Tendr- + comparison.", ["Tendré una casa más grande que ahora."]),
      toEs("I will be able to travel more.", "Podré viajar más.", "Podr-.", []),
      toEs("My parents will come to visit me.", "Mis padres vendrán a visitarme.", "Vendr- + attached pronoun.", ["Mis padres me vendrán a visitar."]),
      fb("Complete.", "Algún día ___ un libro. (escribir, yo)", "escribiré", "Regular future."),
      fb("Complete.", "Te prometo que ___ español todos los días. (practicar, yo)", "practicaré", "Promise → future."),
      wo("El año que viene haremos un viaje a Japón.", "Har- + future plan.", "Next year we'll take a trip to Japan."),
      toEn("No sé qué haré, pero seré feliz.", "I don't know what I'll do, but I'll be happy.", "Har- + ser.", ["I don't know what I will do, but I will be happy."]),
    ]
  ),
  L(
    "future-tense-drill-3",
    "a2d-fix-paragraph-future",
    "Fix the Paragraph: Future Forms",
    "A horoscope with regularized irregulars (tenerás, hacerás, salirá) and missing accents. Fix it.",
    "6 min",
    [
      sec(
        "The horoscope",
        "«Esta semana ✗ tenerás (→ tendrás) buenas noticias. ✗ Salirás (→ saldrás) con alguien especial y ✗ hacerás (→ harás) un viaje corto. Tus amigos te ✗ decirán (→ dirán) algo importante.»",
        [
          ["Tendrás buenas noticias.", "You'll have good news."],
          ["Harás un viaje corto.", "You'll take a short trip."],
        ],
        [
          fb("Fix it.", "Esta semana ___ buenas noticias. (the horoscope says: tenerás)", "tendrás", "Tener → tendr-."),
        ]
      ),
    ],
    [
      fb("Fix it.", "___ con alguien especial. (the horoscope says: Salirás)", "Saldrás", "Salir → saldr-."),
      fb("Fix it.", "___ un viaje corto. (the horoscope says: Hacerás)", "Harás", "Hacer → har-."),
      fb("Fix it.", "Tus amigos te ___ algo importante. (the horoscope says: decirán)", "dirán", "Decir → dir-."),
      fb("Fix it.", "No ___ problemas de dinero. (the horoscope says: haberá)", "habrá", "Haber → habr-."),
      fb("Fix it.", "Por fin ___ la verdad. (the horoscope says: saberás)", "sabrás", "Saber → sabr-."),
      mc(
        "Which sentence is correct?",
        ["Tus compañeros vendrán a verte.", "Tus compañeros venirán a verte.", "Tus compañeros vendrían ayer.", "Tus compañeros vendán a verte."],
        0,
        "Venir → vendr-."
      ),
      toEs("You will meet someone important.", "Conocerás a alguien importante.", "Regular future + personal a.", []),
    ]
  ),
  L(
    "future-tense-drill-3",
    "a2d-chain-past-to-future",
    "Chain Transformations: Yesterday → Tomorrow",
    "Ayer hice / mañana haré: move the same sentence from the preterite to the future, irregulars included.",
    "6 min",
    [
      sec(
        "Same verb, opposite direction",
        "Ayer tuve una reunión → Mañana tendré una reunión. Ayer salí tarde → Mañana saldré tarde. The irregular stems are different in each tense: tuv- vs. tendr-, hic- vs. har-, dij- vs. dir-.",
        [
          ["Ayer dije que no. → Mañana diré que sí.", "Yesterday I said no. → Tomorrow I'll say yes."],
        ],
        [
          fb("Past → future.", "Ayer hice ejercicio. → Mañana ___ ejercicio.", "haré", "Hic- → har-."),
        ]
      ),
    ],
    [
      fb("Past → future.", "Ayer vinieron mis tíos. → Mañana ___ mis tíos.", "vendrán", "Vin- → vendr-."),
      fb("Past → future.", "Ayer puse la mesa. → Mañana ___ la mesa.", "pondré", "Pus- → pondr-."),
      fb("Past → future.", "Ayer pudimos descansar. → Mañana ___ descansar.", "podremos", "Pud- → podr-."),
      fb("Past → future.", "Ayer me dijiste un secreto. → Mañana me ___ otro.", "dirás", "Dij- → dir-."),
      fb("Future → past.", "Mañana saldré con Ana. → Ayer ___ con Ana.", "salí", "Saldr- → salí."),
      fb("Future → past.", "Mañana tendremos examen. → Ayer ___ examen.", "tuvimos", "Tendr- → tuv-."),
      mc(
        "«El año pasado quise aprender a nadar.» → next year:",
        ["El año que viene querré aprender a nadar.", "El año que viene quiseré aprender.", "El año que viene quería aprender.", "El año que viene quero aprender."],
        0,
        "Quis- → querr-."
      ),
      toEs("Yesterday I couldn't come, but tomorrow I will come.", "Ayer no pude venir, pero mañana vendré.", "Pude / vendré.", ["Ayer no pude venir pero mañana vendré."]),
    ]
  ),
  L(
    "future-tense-drill-3",
    "a2d-speed-round-future",
    "Speed Round: 10 Futures, No Hints",
    "Regular and irregular futures mixed, plus one probability guess — as fast as you can.",
    "5 min",
    [
      sec(
        "Checklist",
        "Irregular stem? (podr-, querr-, sabr-, habr-, tendr-, pondr-, saldr-, vendr-, har-, dir-). If not, keep the infinitive. Then add -é, -ás, -á, -emos, -éis, -án.",
        [
          ["Sabré, podrás, vendrá, haremos.", "I'll know, you'll be able to, he'll come, we'll do."],
        ],
        [
          fb("Quick!", "Yo ___ el viernes. (volver)", "volveré", "Regular."),
        ]
      ),
    ],
    [
      fb("Quick!", "Tú ___ razón. (tener)", "tendrás", "Irregular stem tendr-: tendrás."),
      fb("Quick!", "Ella ___ la respuesta. (saber)", "sabrá", "Irregular stem sabr-: sabrá."),
      fb("Quick!", "Nosotros ___ la cuenta. (pagar)", "pagaremos", "Regular: infinitive + -emos."),
      fb("Quick!", "Ellos no ___ nada. (decir)", "dirán", "Irregular stem dir-: dirán."),
      fb("Quick!", "¿Qué ___ vosotros? (hacer)", "haréis", "Irregular stem har-: haréis."),
      fb("Quick!", "Usted ___ a las nueve. (salir)", "saldrá", "Irregular stem saldr-: saldrá."),
      fb("Quick!", "Yo ___ en la reunión. (estar)", "estaré", "Regular: estar + -é."),
      mc(
        "«No encuentro las llaves. ¿Dónde ___?»",
        ["estarán", "estuvieron", "están mañana", "estarían ayer"],
        0,
        "Guess about the present → future."
      ),
    ]
  ),
  L(
    "por-vs-para-1",
    "a2d-para-four-uses",
    "Drill Circuit: The Four Uses of Para",
    "Destination, deadline, purpose, recipient: drill para on its own before mixing it with por.",
    "6 min",
    [
      sec(
        "Para points forward",
        "Destination: Salgo para Madrid. Deadline: Lo necesito para el lunes. Purpose (+ infinitive): Estudio para aprender. Recipient: Este regalo es para ti. Opinion: Para mí, es caro.",
        [
          ["El tren para Sevilla sale a las ocho.", "The train to Seville leaves at eight."],
          ["Ahorro para comprar un coche.", "I'm saving to buy a car."],
        ],
        [
          mc(
            "«Estas flores son para mi madre.» Use of para:",
            ["recipient", "deadline", "destination", "duration"],
            0,
            "Who it's for."
          ),
        ]
      ),
    ],
    [
      mc(
        "«Tengo que terminar el informe para el viernes.»",
        ["deadline", "recipient", "purpose", "exchange"],
        0,
        "A date limit."
      ),
      mc(
        "«Mañana salimos para Lisboa.»",
        ["destination", "cause", "duration", "exchange"],
        0,
        "Where we're heading."
      ),
      mc(
        "«Trabajo para pagar el alquiler.»",
        ["purpose", "recipient", "deadline", "movement through"],
        0,
        "In order to."
      ),
      fb("Complete.", "Necesito las fotos ___ mañana.", "para", "Deadline."),
      fb("Complete.", "Voy al gimnasio ___ estar en forma.", "para", "Purpose."),
      fb("Complete.", "¿Esta carta es ___ mí?", "para", "Recipient."),
      toEs("I'm learning Spanish to travel.", "Aprendo español para viajar.", "Para + infinitive.", ["Estudio español para viajar."]),
      wo("Para mí, esta es la mejor época del año.", "Para = opinion.", "For me, this is the best time of year."),
    ]
  ),
  L(
    "por-vs-para-1",
    "a2d-por-four-uses",
    "Drill Circuit: The Four Uses of Por",
    "Duration, cause, exchange, movement through: drill por on its own, plus the fixed expressions.",
    "6 min",
    [
      sec(
        "Por looks back or through",
        "Duration: Estudié por dos horas. Cause: No salí por la lluvia. Exchange/price: Lo compré por diez euros. Movement through/along: Caminamos por el parque. Means: por teléfono, por correo. Fixed: por favor, por eso, por fin, por ejemplo.",
        [
          ["Gracias por la ayuda.", "Thanks for the help."],
          ["Paseamos por la playa.", "We walked along the beach."],
        ],
        [
          mc(
            "«Cambié mi bici por una guitarra.» Use of por:",
            ["exchange", "purpose", "deadline", "recipient"],
            0,
            "One thing for another."
          ),
        ]
      ),
    ],
    [
      mc(
        "«Llegué tarde por el tráfico.»",
        ["cause", "destination", "purpose", "deadline"],
        0,
        "Because of."
      ),
      mc(
        "«Vivimos en Roma por tres años.»",
        ["duration", "exchange", "recipient", "destination"],
        0,
        "How long."
      ),
      fb("Complete.", "Te mando la foto ___ WhatsApp esta noche.", "por", "Means of communication."),
      fb("Complete.", "Pagué veinte euros ___ la camiseta.", "por", "Price/exchange."),
      fb("Complete.", "El ladrón entró ___ la ventana.", "por", "Movement through."),
      fb("Complete.", "¡___ fin es viernes!", "Por", "Fixed expression."),
      toEs("Thank you for everything.", "Gracias por todo.", "Gracias por.", ["Muchas gracias por todo."]),
      wo("No fuimos a la playa por el mal tiempo.", "Por = cause.", "We didn't go to the beach because of the bad weather."),
    ]
  ),
  L(
    "por-vs-para-2",
    "a2d-minimal-pairs-por-para",
    "Minimal Pairs: Por Ti / Para Ti",
    "The same sentence with por or para means something different. Drill the pairs until the difference is obvious.",
    "7 min",
    [
      sec(
        "One word, two meanings",
        "Lo hice por ti (because of you / on your behalf) vs. Lo hice para ti (for you, as a gift). Salí por la puerta (through) vs. Salí para la puerta (toward). Trabajo por la mañana (time of day) vs. Lo necesito para mañana (deadline).",
        [
          ["Compré el regalo para mi madre.", "I bought the present for my mother (she receives it)."],
          ["Fui a la reunión por mi madre.", "I went to the meeting on my mother's behalf."],
        ],
        [
          mc(
            "«Lo hice por ti» most likely means…",
            ["I did it because of you / for your sake.", "I made it as a present for you.", "I did it through you.", "I did it by tomorrow."],
            0,
            "Por = cause / on behalf of."
          ),
        ]
      ),
    ],
    [
      mc(
        "«Este pastel es ___ ti.» (you'll eat it)",
        ["para", "por", "de por", "a"],
        0,
        "Recipient → para."
      ),
      mc(
        "«Trabajo ___ la mañana.» (in the morning)",
        ["por", "para", "a", "en por"],
        0,
        "Part of the day → por."
      ),
      mc(
        "«Tengo que entregarlo ___ mañana.» (by tomorrow)",
        ["para", "por", "en", "de"],
        0,
        "Deadline → para."
      ),
      fb("Por or para?", "Estoy muy preocupado ___ mi hermano: está enfermo.", "por", "Cause of the worry."),
      fb("Por or para?", "Compré una bufanda ___ mi hermano: es su cumpleaños.", "para", "Recipient."),
      fb("Por or para?", "Pasamos ___ Valencia en el viaje.", "por", "Through a place."),
      fb("Por or para?", "Salimos ___ Valencia a las diez.", "para", "Destination."),
      toEs("I did it for you (as a gift).", "Lo hice para ti.", "Para = recipient.", []),
    ]
  ),
  L(
    "por-vs-para-2",
    "a2d-por-para-questions",
    "Q&A Drill: ¿Por Qué? / ¿Para Qué?",
    "Why (cause) vs. what for (purpose): answer each question with the matching structure.",
    "6 min",
    [
      sec(
        "Two different questions",
        "¿Por qué? asks for the cause → Porque… / Por + noun: ¿Por qué no viniste? — Porque estaba enfermo / Por la lluvia. ¿Para qué? asks for the purpose → Para + infinitive: ¿Para qué estudias español? — Para trabajar en México.",
        [
          ["—¿Para qué ahorras? —Para comprar una moto.", "What are you saving for? — To buy a motorbike."],
          ["—¿Por qué estás cansado? —Por el viaje.", "Why are you tired? — Because of the trip."],
        ],
        [
          fb("Answer.", "—¿Y tu viaje a Madrid? —Es ___ visitar a mi hermana.", "para", "Purpose → para."),
        ]
      ),
    ],
    [
      fb("Answer.", "—¿Por qué llegaste tarde? —___ el tráfico.", "Por", "Cause + noun."),
      fb("Answer.", "—¿Y esta herramienta? —Sirve ___ abrir botellas.", "para", "Purpose."),
      fb("Answer.", "—¿Por qué no comes? —___ no tengo hambre.", "Porque", "Cause + clause."),
      fb("Answer.", "—¿Para qué estudias tanto? —Para ___ el examen. (aprobar)", "aprobar", "Para + infinitive."),
      mc(
        "«—¿___ quieres aprender chino? —Para trabajar en Shanghái.»",
        ["Para qué", "Por qué", "Porque", "Por"],
        0,
        "The answer gives a purpose."
      ),
      mc(
        "«—¿___ estás triste? —Porque se fue mi mejor amigo.»",
        ["Por qué", "Para qué", "Porque", "Para"],
        0,
        "The answer gives a cause."
      ),
      toEs("—What are you saving for? —To travel.", "—¿Para qué ahorras? —Para viajar.", "Para qué / para.", []),
      toEn("—¿Por qué no fuiste? —Por el trabajo.", "—Why didn't you go? —Because of work.", "Por qué / por.", []),
    ]
  ),
  L(
    "por-vs-para-2",
    "a2d-story-cloze-por-para-trip",
    "Story Cloze: The Road Trip",
    "A trip told with every por and para missing: route, reasons, deadlines and gifts.",
    "7 min",
    [
      sec(
        "The story",
        "«Salimos para Granada el viernes. Fuimos por la costa porque era más bonito. Paramos en Málaga para comer y compramos dulces para la abuela. Por la noche llegamos, cansadísimos, pero felices. Pagamos solo cuarenta euros por el hotel.»",
        [
          ["Fuimos por la costa.", "We went along the coast."],
          ["Paramos para comer.", "We stopped to eat."],
        ],
        [
          mc(
            "Why «por la costa»?",
            ["route / movement along", "destination", "purpose", "recipient"],
            0,
            "The way they travelled."
          ),
        ]
      ),
    ],
    [
      fb("Fill in.", "Salimos ___ Granada el viernes.", "para", "Destination."),
      fb("Fill in.", "Paramos en Málaga ___ comer.", "para", "Purpose."),
      fb("Fill in.", "Compramos dulces ___ la abuela.", "para", "Recipient."),
      fb("Fill in.", "___ la noche llegamos a Granada.", "Por", "Part of the day."),
      fb("Fill in.", "Pagamos cuarenta euros ___ el hotel.", "por", "Price."),
      fb("Fill in.", "Estábamos cansados ___ el viaje tan largo.", "por", "Cause."),
      mc(
        "«Tenemos que volver ___ el lunes.» (by Monday)",
        ["para", "por", "a", "en"],
        0,
        "Deadline."
      ),
      toEs("We drove along the coast to see the sea.", "Condujimos por la costa para ver el mar.", "Por (route) + para (purpose).", ["Fuimos por la costa para ver el mar.", "Manejamos por la costa para ver el mar."]),
    ]
  ),
  L(
    "por-vs-para-mastery-check",
    "a2d-choose-explain-por-para",
    "Choose & Explain: Por or Para — and Which Use?",
    "Pick the preposition and name the reason: a two-step drill that builds real understanding.",
    "7 min",
    [
      sec(
        "Name the use",
        "Para: destination, deadline, purpose, recipient, opinion, comparison (Para ser niño, habla muy bien). Por: duration, cause, exchange/price, route, means, part of day, fixed expressions.",
        [
          ["Para ser tan joven, sabe mucho.", "For someone so young, he knows a lot."],
          ["Lo envié por correo.", "I sent it by mail."],
        ],
        [
          mc(
            "«Para ser extranjero, habla muy bien.»",
            ["para — comparison with what's expected", "por — cause", "para — destination", "por — exchange"],
            0,
            "Considering that he's a foreigner…"
          ),
        ]
      ),
    ],
    [
      mc(
        "«Te mando las fotos ___ correo.»",
        ["por — means", "para — recipient", "para — purpose", "por — duration"],
        0,
        "Means of sending."
      ),
      mc(
        "«La reunión es ___ hablar del presupuesto.»",
        ["para — purpose", "por — cause", "por — exchange", "para — deadline"],
        0,
        "In order to."
      ),
      mc(
        "«Me dieron un premio ___ mi trabajo.»",
        ["por — cause/reason", "para — recipient", "para — purpose", "por — route"],
        0,
        "Because of my work."
      ),
      mc(
        "«Estuve en el hospital ___ una semana.»",
        ["por — duration", "para — deadline", "para — destination", "por — exchange"],
        0,
        "How long."
      ),
      fb("Complete.", "___ mí, el español es más fácil que el francés.", "Para", "Opinion."),
      fb("Complete.", "Gracias ___ venir.", "por", "Gracias por + reason."),
      fb("Complete.", "Este tren va ___ Bilbao.", "para", "Destination."),
      toEs("For a beginner, she speaks very well.", "Para ser principiante, habla muy bien.", "Para ser = comparison.", ["Para ser una principiante, habla muy bien."]),
    ]
  ),
  L(
    "por-vs-para-mastery-check",
    "a2d-fix-paragraph-por-para",
    "Fix the Paragraph: Por and Para Swapped",
    "An email where por and para keep swapping places. Put each one back.",
    "6 min",
    [
      sec(
        "The email",
        "«Hola, Marta: gracias ✗ para (→ por) tu mensaje. Salgo ✗ por (→ para) Chile el martes ✗ para (→ por) la mañana. Voy ✗ por (→ para) visitar a mi hermano. Te traeré algo ✗ por (→ para) ti. Te llamo ✗ para (→ por) teléfono desde allí.»",
        [
          ["Gracias por tu mensaje.", "Thanks for your message."],
          ["Salgo para Chile el martes por la mañana.", "I'm leaving for Chile on Tuesday morning."],
        ],
        [
          fb("Fix it.", "Gracias ___ tu mensaje. (the email says: para)", "por", "Gracias por."),
        ]
      ),
    ],
    [
      fb("Fix it.", "Salgo ___ Chile el martes. (the email says: por)", "para", "Destination."),
      fb("Fix it.", "El martes ___ la mañana. (the email says: para)", "por", "Part of the day."),
      fb("Fix it.", "Voy ___ visitar a mi hermano. (the email says: por)", "para", "Purpose."),
      fb("Fix it.", "Te traeré algo ___ ti. (the email says: por)", "para", "Recipient."),
      fb("Fix it.", "Te llamo ___ teléfono desde allí. (the email says: para)", "por", "Means."),
      mc(
        "Which sentence is correct?",
        ["Compré el billete por cien euros.", "Compré el billete para cien euros.", "Compré el billete por mi viaje de mañana por mí.", "Compré para el billete cien euros."],
        0,
        "Price → por."
      ),
      toEs("I'm leaving for Chile on Tuesday morning.", "Salgo para Chile el martes por la mañana.", "Para + por.", ["Me voy a Chile el martes por la mañana."]),
    ]
  ),
  L(
    "por-vs-para-mastery-check",
    "a2d-speed-round-por-para",
    "Speed Round: Por or Para? 12 Quick Calls",
    "Twelve sentences, one decision each. Don't overthink — then read the reason.",
    "6 min",
    [
      sec(
        "Quick rule of thumb",
        "Para → forward: goal, destination, deadline, receiver. Por → back or through: cause, exchange, duration, route, means.",
        [
          ["Estudio para aprobar. / Aprobé por estudiar.", "I study to pass. / I passed because I studied."],
        ],
        [
          fb("Quick!", "Caminamos ___ el centro.", "por", "Route."),
        ]
      ),
    ],
    [
      fb("Quick!", "Es un regalo ___ mi jefa.", "para", "Recipient: para."),
      fb("Quick!", "Lo vendí ___ poco dinero.", "por", "Exchange/price: por."),
      fb("Quick!", "Necesito el coche ___ el sábado.", "para", "Deadline: para."),
      fb("Quick!", "Estudio mucho ___ sacar buenas notas.", "para", "Purpose: para."),
      fb("Quick!", "No pude dormir ___ el ruido.", "por", "Cause: por."),
      fb("Quick!", "Hablamos ___ videollamada.", "por", "Means: por."),
      fb("Quick!", "Salgo ___ el aeropuerto ahora.", "para", "Destination: para."),
      mc(
        "«___ supuesto, te ayudo.»",
        ["Por", "Para", "Porque", "Para que"],
        0,
        "Fixed expression: por supuesto."
      ),
    ]
  ),
  L(
    "por-vs-para-drill-3",
    "a2d-por-para-say-it-yourself",
    "Say It Yourself: Your Week with Por and Para",
    "Translate sentences about your own week: work deadlines, errands, calls and reasons.",
    "6 min",
    [
      sec(
        "Everyday por and para",
        "Para el lunes (deadline), para mi jefe (recipient), para relajarme (purpose). Por la tarde (part of day), por teléfono (means), por el tráfico (cause), por la calle (route).",
        [
          ["Tengo que terminar el proyecto para el lunes.", "I have to finish the project by Monday."],
          ["Por la tarde voy al gimnasio para relajarme.", "In the afternoon I go to the gym to relax."],
        ],
        [
          fb("Complete.", "Salgo a correr ___ la mañana.", "por", "Part of the day."),
        ]
      ),
    ],
    [
      toEs("I have to finish the report by Friday.", "Tengo que terminar el informe para el viernes.", "Deadline → para.", []),
      toEs("I talk to my mother on the phone every day.", "Hablo con mi madre por teléfono todos los días.", "Means → por.", ["Hablo por teléfono con mi madre todos los días.", "Hablo con mi mamá por teléfono todos los días."]),
      toEs("I bought a cake for my coworkers.", "Compré una tarta para mis compañeros.", "Recipient → para.", ["Compré un pastel para mis compañeros."]),
      toEs("I arrived late because of the rain.", "Llegué tarde por la lluvia.", "Cause → por.", ["Llegué tarde a causa de la lluvia."]),
      fb("Complete.", "Los sábados paseo ___ el río.", "por", "Route."),
      fb("Complete.", "Ahorro un poco cada mes ___ las vacaciones.", "para", "Purpose/goal."),
      fb("Complete.", "Pagué cinco euros ___ el café y el bocadillo.", "por", "Price."),
      wo("Esta semana trabajé por las noches para ganar más dinero.", "Por + para in one sentence.", "This week I worked at night to earn more money."),
    ]
  ),
  L(
    "por-vs-para-drill-3",
    "a2d-por-para-dialogue-cloze",
    "Story Cloze: At the Travel Agency",
    "A booking conversation with every por and para missing: destination, dates, price, route and reasons.",
    "7 min",
    [
      sec(
        "The conversation",
        "—Buenos días, quiero un billete para Buenos Aires. —¿Para cuándo? —Para el quince de mayo. —Hay un vuelo que pasa por Madrid. Cuesta 800 euros por persona. —Perfecto. Es para mi luna de miel.",
        [
          ["¿Para cuándo lo necesita?", "When do you need it for?"],
          ["Cuesta 800 euros por persona.", "It costs 800 euros per person."],
        ],
        [
          mc(
            "«800 euros por persona»: por means…",
            ["per / each", "for the benefit of", "toward", "in order to"],
            0,
            "Distribution: per."
          ),
        ]
      ),
    ],
    [
      fb("Fill in.", "Quiero un billete ___ Buenos Aires.", "para", "Destination."),
      fb("Fill in.", "—¿___ cuándo lo necesita? —El quince de mayo.", "Para", "Deadline/date."),
      fb("Fill in.", "Hay un vuelo que pasa ___ Madrid.", "por", "Route through."),
      fb("Fill in.", "Cuesta 800 euros ___ persona.", "por", "Distribution: por = per."),
      fb("Fill in.", "Es ___ mi luna de miel.", "para", "Purpose/occasion."),
      fb("Fill in.", "¿Puedo pagar ___ internet?", "por", "Means."),
      mc(
        "«Voy a Argentina ___ conocer a la familia de mi mujer.»",
        ["para", "por", "a", "de"],
        0,
        "Purpose."
      ),
      toEs("The flight goes through Madrid and costs 600 euros per person.", "El vuelo pasa por Madrid y cuesta 600 euros por persona.", "Route + per.", []),
    ]
  ),
  L(
    "por-vs-para-drill-3",
    "a2d-por-fixed-expressions",
    "Drill Circuit: Fixed Expressions with Por",
    "Por favor, por eso, por fin, por ejemplo, por supuesto, por lo general, por cierto: drill them in context.",
    "6 min",
    [
      sec(
        "Chunks to learn whole",
        "por eso (that's why), por fin (finally), por ejemplo (for example), por supuesto (of course), por lo general (generally), por cierto (by the way), por lo menos (at least), por si acaso (just in case).",
        [
          ["Llovía; por eso nos quedamos en casa.", "It was raining; that's why we stayed home."],
          ["Lleva un paraguas, por si acaso.", "Take an umbrella, just in case."],
        ],
        [
          mc(
            "«Por fin» means…",
            ["finally", "for example", "of course", "that's why"],
            0,
            "At last."
          ),
        ]
      ),
    ],
    [
      mt(
        "Match expression and meaning.",
        [
          ["por cierto", "by the way"],
          ["por lo menos", "at least"],
          ["por lo general", "generally"],
          ["por si acaso", "just in case"],
        ],
        "Fixed expressions."
      ),
      fb("Complete.", "Estaba cansado; por ___ me acosté temprano.", "eso", "Por eso = that's why."),
      fb("Complete.", "Me gustan las frutas tropicales, por ___, el mango.", "ejemplo", "Por ejemplo."),
      fb("Complete.", "—¿Me ayudas? —¡Por ___!", "supuesto", "Of course."),
      fb("Complete.", "Después de tres horas, por ___ llegamos.", "fin", "Finally."),
      mc(
        "«Hay ___ veinte personas en la cola.» (at least)",
        ["por lo menos", "por eso", "por fin", "por cierto"],
        0,
        "At least."
      ),
      toEs("By the way, did you see Carlos?", "Por cierto, ¿viste a Carlos?", "Por cierto.", ["Por cierto, ¿has visto a Carlos?"]),
      wo("Por lo general cenamos a las nueve y media.", "Por lo general.", "Generally we have dinner at half past nine."),
    ]
  ),
  L(
    "por-vs-para-drill-3",
    "a2d-por-para-chain",
    "Chain Transformations: Change the Meaning",
    "Swap por and para in the same sentence and translate the new meaning each time.",
    "6 min",
    [
      sec(
        "Swap and translate",
        "Trabajo para mi padre (my father is my employer) → Trabajo por mi padre (instead of him / because of him). Voy para el parque (heading to) → Voy por el parque (through). Lo compré para Ana (a gift) → Lo compré por Ana (because of / on behalf of Ana).",
        [
          ["Hablo por mi hermano (on his behalf).", "I speak for my brother."],
          ["Hablo para mi hermano (so he can hear).", "I'm talking for my brother's benefit."],
        ],
        [
          mc(
            "«Trabajo para una empresa alemana» means…",
            ["A German company employs me.", "I work instead of a German company.", "I work through a German company.", "I work because of a German company."],
            0,
            "Para = employer/recipient."
          ),
        ]
      ),
    ],
    [
      mc(
        "«Trabajé por mi compañero ayer» means…",
        ["I covered my colleague's shift.", "My colleague is my boss.", "I worked for my colleague as a present.", "I worked toward my colleague."],
        0,
        "Por = in place of."
      ),
      mc(
        "«Caminamos por el río» means…",
        ["We walked along the river.", "We walked toward the river.", "We walked for the river.", "We walked because of the river."],
        0,
        "Por = along/through."
      ),
      mc(
        "«Caminamos para el río» means…",
        ["We walked toward the river.", "We walked along the river.", "We walked in exchange for the river.", "We walked because of the river."],
        0,
        "Para = toward."
      ),
      fb("Complete.", "Mi hermana no pudo ir, así que fui ___ ella.", "por", "On her behalf."),
      fb("Complete.", "Hice una tarta ___ ella: es su cumpleaños.", "para", "Recipient."),
      fb("Complete.", "Este mensaje es ___ todos los alumnos.", "para", "Recipients."),
      toEs("I went to the meeting on behalf of my boss.", "Fui a la reunión por mi jefe.", "Por = on behalf of.", ["Fui a la reunión en lugar de mi jefe."]),
      toEn("Lo hago por mis hijos.", "I do it for my children's sake.", "Por = for the sake of.", ["I do it because of my kids.", "I do it for my children."]),
    ]
  ),
  L(
    "por-vs-para-drill-3",
    "a2d-por-para-build-up",
    "Build-Up: One Sentence, Three Prepositions",
    "Build long sentences with por, para and both together: plans, reasons, deadlines and routes.",
    "7 min",
    [
      sec(
        "Stacking",
        "Real sentences often contain both: Salimos para Toledo por la mañana y pasamos por Aranjuez para ver el palacio. Decide each preposition separately.",
        [
          ["Estudio por las noches para aprobar el examen.", "I study at night to pass the exam."],
        ],
        [
          fb("Build.", "Salimos para Toledo ___ la mañana.", "por", "Part of the day."),
        ]
      ),
    ],
    [
      fb("Build.", "Pasamos ___ Aranjuez.", "por", "Route."),
      fb("Build.", "Paramos allí ___ ver el palacio.", "para", "Purpose."),
      fb("Build.", "Compré un recuerdo ___ mi abuela.", "para", "Recipient."),
      fb("Build.", "Lo pagué ___ muy poco dinero.", "por", "Price."),
      fb("Build.", "Volvimos a casa ___ la cena.", "para", "Deadline (in time for)."),
      wo("Mi padre trabaja por las noches para pagar mis estudios.", "Por + para.", "My father works at night to pay for my studies."),
      wo("Te llamo por teléfono para contarte una cosa.", "Por + para.", "I'm calling you on the phone to tell you something."),
      toEs("We travelled through France to visit Paris.", "Viajamos por Francia para visitar París.", "Route + purpose.", ["Viajamos por Francia para conocer París."]),
    ]
  ),
  L(
    "por-vs-para-drill-3",
    "a2d-por-para-hardest",
    "Mixed Practice: The Hardest Por/Para Cases",
    "Para ser…, por + infinitive (because), estar para / estar por and gracias por: the cases learners miss most.",
    "7 min",
    [
      sec(
        "Tricky corners",
        "Para ser + noun/adjective = considering: Para ser niño, es muy maduro. Por + infinitive = because of doing: Suspendió por no estudiar. Gracias por + infinitive/noun: Gracias por venir. Por + unit = per: dos veces por semana.",
        [
          ["Me castigaron por llegar tarde.", "They punished me for arriving late."],
          ["Voy al gimnasio tres veces por semana.", "I go to the gym three times a week."],
        ],
        [
          mc(
            "«Suspendió ___ no estudiar.»",
            ["por", "para", "porque", "para que"],
            0,
            "Por + infinitive = because of."
          ),
        ]
      ),
    ],
    [
      fb("Complete.", "___ ser el primer día, lo hiciste muy bien.", "Para", "Considering."),
      fb("Complete.", "Le pusieron una multa ___ ir demasiado rápido.", "por", "Because of doing."),
      fb("Complete.", "Gracias ___ escucharme.", "por", "Gracias por."),
      fb("Complete.", "Como fruta dos veces ___ día.", "por", "Distribution: por = per."),
      fb("Complete.", "___ ser invierno, hace mucho calor.", "Para", "Considering (contrast with what's expected)."),
      mc(
        "«Lo felicitaron ___ su trabajo.»",
        ["por", "para", "a", "de"],
        0,
        "Reason for the congratulations."
      ),
      toEs("For a small town, it has a lot of restaurants.", "Para ser un pueblo pequeño, tiene muchos restaurantes.", "Para ser.", []),
      toEn("La despidieron por decir la verdad.", "They fired her for telling the truth.", "Por + infinitive.", ["She was fired for telling the truth."]),
    ]
  ),
  L(
    "por-vs-para-drill-3",
    "a2d-por-para-qa-shop",
    "Q&A Drill: At the Shop",
    "Answer a shop assistant's questions: who it's for, what it's for, how you pay, when you need it.",
    "6 min",
    [
      sec(
        "Shop questions",
        "¿Es para usted o para regalo? · ¿Para cuándo lo necesita? · ¿Cómo va a pagar? — Por tarjeta / con tarjeta · ¿Lo enviamos por correo? · ¿Para qué lo va a usar?",
        [
          ["—¿Es para regalo? —Sí, es para mi hermana.", "Is it a gift? — Yes, it's for my sister."],
        ],
        [
          fb("Answer.", "—¿Es un regalo? —Sí, es ___ mi novio.", "para", "Recipient."),
        ]
      ),
    ],
    [
      fb("Answer.", "—¿Cuándo lo necesita? —___ el sábado, por favor.", "Para", "Deadline."),
      fb("Answer.", "—¿Lo enviamos? —Sí, ___ correo, por favor.", "por", "Means."),
      fb("Answer.", "—¿Qué uso le va a dar? —Es ___ cocinar al vapor.", "para", "Purpose."),
      fb("Answer.", "—¿Cuánto pagó por el anterior? —Pagué cien euros ___ él.", "por", "Price."),
      fb("Answer.", "—¿Por qué lo devuelve? —___ que está roto.", "Porque", "Porque + clause (reason)."),
      mc(
        "«—¿Pasa usted ___ aquí a menudo? —Sí, vivo cerca.»",
        ["por", "para", "a", "en"],
        0,
        "Pasar por = come by."
      ),
      toEs("It's a present for my father.", "Es un regalo para mi padre.", "Recipient → para.", ["Es un regalo para mi papá."]),
    ]
  ),
  L(
    "por-vs-para-drill-3",
    "a2d-por-para-final-sort",
    "Minimal Pairs: The Final Sort",
    "Ten sentence pairs that differ only in por/para. Choose the one that matches the English.",
    "6 min",
    [
      sec(
        "Read the English first",
        "Decide what the English means (deadline? cause? recipient? exchange?), then choose the Spanish. Don't translate «for» automatically: English «for» covers both por and para.",
        [
          ["Thanks for the coffee. → Gracias por el café.", "Cause/reason → por."],
          ["The coffee is for you. → El café es para ti.", "Recipient → para."],
        ],
        [
          mc(
            "«I'll have it ready by eight.»",
            ["Lo tendré listo para las ocho.", "Lo tendré listo por las ocho.", "Lo tendré listo a por las ocho.", "Lo tendré listo en las ocho."],
            0,
            "Deadline → para."
          ),
        ]
      ),
    ],
    [
      mc(
        "«He left for Rome.» (destination)",
        ["Se fue para Roma.", "Se fue por Roma.", "Se fue de Roma.", "Se fue por a Roma."],
        0,
        "Destination → para."
      ),
      mc(
        "«He travelled around Italy for a month.»",
        ["Viajó por Italia por un mes.", "Viajó para Italia para un mes.", "Viajó por Italia para un mes.", "Viajó para Italia por un mes."],
        0,
        "Route + duration → por, por."
      ),
      mc(
        "«I'm studying for the exam.» (goal)",
        ["Estudio para el examen.", "Estudio por el examen.", "Estudio porque el examen.", "Estudio a el examen."],
        0,
        "Goal → para."
      ),
      mc(
        "«I'll trade you my sandwich for your apple.»",
        ["Te cambio mi bocadillo por tu manzana.", "Te cambio mi bocadillo para tu manzana.", "Te cambio para mi bocadillo tu manzana.", "Te cambio mi bocadillo porque tu manzana."],
        0,
        "Exchange → por."
      ),
      fb("Complete.", "El autobús ___ el centro sale cada diez minutos.", "para", "Destination."),
      fb("Complete.", "Estoy nervioso ___ la entrevista de mañana.", "por", "Cause of the feeling."),
      toEs("I'm worried about my exam.", "Estoy preocupado por mi examen.", "Cause → por.", ["Estoy preocupada por mi examen."]),
    ]
  ),
  L(
    "personal-a",
    "a2d-personal-a-sort",
    "Choose & Explain: A or No A?",
    "Veo a María / Veo la casa: decide for each object whether it's a specific person (or pet) that needs the personal a.",
    "6 min",
    [
      sec(
        "The test",
        "Specific person or named pet as direct object → a: Llamo a mi madre. Things, places, generic animals → no a: Llamo un taxi. Busco un médico (any doctor) vs. Busco a mi médico (a specific one). Hay never takes a. Tener for family/possession usually doesn't: Tengo dos hermanos.",
        [
          ["Conozco a tu hermano.", "I know your brother."],
          ["Conozco Barcelona muy bien.", "I know Barcelona very well."],
        ],
        [
          mc(
            "«Espero ___ autobús.»",
            ["el (no a)", "al", "a el", "a la"],
            0,
            "Thing → no personal a."
          ),
        ]
      ),
    ],
    [
      fb("A or nothing? (write a, al, or –)", "Visité ___ mis abuelos el domingo.", "a", "Specific people."),
      fb("A or nothing? (write a, al, or –)", "Llamé ___ fontanero para arreglar la ducha.", "al", "Specific person: a + el = al."),
      mc(
        "«Busco ___ camarero.» (any waiter)",
        ["un (no a)", "a un", "al", "a el"],
        0,
        "Unspecific person → usually no a."
      ),
      mc(
        "«Quiero mucho ___ mi perro Toby.»",
        ["a", "–", "al", "en"],
        0,
        "Named pet treated as a person."
      ),
      mc(
        "«Tengo ___ tres primos en Chile.»",
        ["– (no a)", "a", "al", "a los"],
        0,
        "Tener for family → no a."
      ),
      mc(
        "«No veo ___ nadie.»",
        ["a", "–", "al", "de"],
        0,
        "Nadie/alguien take a."
      ),
      toEs("I'm looking for my son.", "Busco a mi hijo.", "Specific person → a.", ["Estoy buscando a mi hijo."]),
      wo("Ayer conocí al novio de mi hermana.", "A + el = al.", "Yesterday I met my sister's boyfriend."),
    ]
  ),
  L(
    "personal-a",
    "a2d-personal-a-fix",
    "Fix the Paragraph: Missing and Extra A's",
    "A message that forgets the personal a with people and adds it to things. Fix every one.",
    "6 min",
    [
      sec(
        "The message",
        "«Ayer vi ✗ – (→ a) Marta en el centro. Ella buscaba ✗ a (→ –) una farmacia. Luego llamamos ✗ – (→ a) su hermano y visitamos ✗ a (→ –) la catedral.»",
        [
          ["Vi a Marta.", "I saw Marta."],
          ["Buscaba una farmacia.", "She was looking for a pharmacy."],
        ],
        [
          fb("Fix it (write the missing word).", "Ayer vi ___ Marta en el centro.", "a", "Specific person."),
        ]
      ),
    ],
    [
      fb("Fix it (write the word that should be there).", "Luego llamamos ___ su hermano.", "a", "Specific person."),
      mc(
        "«Ella buscaba a una farmacia» — what's wrong?",
        ["The a is extra: a pharmacy is a thing.", "Nothing.", "It should be al.", "It should be en."],
        0,
        "No a with things."
      ),
      mc(
        "«Visitamos a la catedral» — what's wrong?",
        ["The a is extra: a cathedral is a place.", "It needs al.", "Nothing.", "Visitar never takes objects."],
        0,
        "No a with places."
      ),
      fb("Fix it.", "No conozco ___ nadie aquí.", "a", "Nadie takes a."),
      fb("Fix it.", "¿Invitaste ___ tus compañeros?", "a", "Specific people."),
      ms(
        "Which sentences are correct?",
        ["Llevo a los niños al colegio.", "Llevo la mochila al colegio.", "Llevo a la mochila al colegio.", "Llevo los niños al colegio."],
        [0, 1],
        "People → a; things → no a."
      ),
      toEs("I visited my grandparents and the museum.", "Visité a mis abuelos y el museo.", "People → a; places → no a.", []),
    ]
  ),
  L(
    "negation-words-2",
    "a2d-negation-double",
    "Pattern Practice: No… Nada, No… Nadie, No… Nunca",
    "Double negation drilled in one frame: before the verb (Nadie viene) or no + verb + negative word.",
    "6 min",
    [
      sec(
        "Two positions",
        "Negative word after the verb → no before it: No viene nadie. No como nunca carne. Negative word before the verb → no second negative needed: Nadie viene. Nunca como carne. Ningún before masculine singular nouns.",
        [
          ["No hay nada en la nevera.", "There's nothing in the fridge."],
          ["Nunca llego tarde.", "I'm never late."],
        ],
        [
          fb("Complete.", "No conozco a ___ en esta ciudad.", "nadie", "No… nadie."),
        ]
      ),
    ],
    [
      fb("Put the negative word first.", "___ viene a la fiesta. (nobody)", "Nadie", "Before the verb, no extra no is needed."),
      fb("Put the negative word first.", "___ bebo café por la noche. (never)", "Nunca", "Nunca before the verb."),
      fb("Use no + verb + negative word.", "No me interesa ___ de la tele. (nothing)", "nada", "No… nada."),
      fb("Complete.", "No tengo ___ problema.", "ningún", "Ningún before masculine singular."),
      fb("Complete.", "No hay ___ tienda abierta.", "ninguna", "Ninguna (feminine)."),
      mc(
        "«—No me gusta el té. —A mí ___.»",
        ["tampoco", "también", "nunca", "nada"],
        0,
        "Tampoco = me neither."
      ),
      mc(
        "Which is correct?",
        ["No vino ni Juan ni Pedro.", "No vino ni Juan y Pedro.", "Vino ni Juan ni Pedro.", "No vino o Juan o Pedro."],
        0,
        "No… ni… ni."
      ),
      toEs("I never eat anything in the morning.", "Nunca como nada por la mañana.", "Nunca + nada.", ["No como nada nunca por la mañana.", "Por la mañana nunca como nada."]),
    ]
  ),
  L(
    "negation-words-2",
    "a2d-negation-transform",
    "Chain Transformations: Alguien → Nadie, Algo → Nada",
    "Turn affirmative sentences negative and back: every positive word has a negative partner.",
    "6 min",
    [
      sec(
        "Partners",
        "alguien → nadie, algo → nada, siempre → nunca, alguno/a → ninguno/a (algún → ningún), también → tampoco, o… o → ni… ni.",
        [
          ["Siempre veo a alguien. → Nunca veo a nadie.", "I always see someone. → I never see anyone."],
        ],
        [
          fb("Make it negative.", "Tengo algo para ti. → No tengo ___ para ti.", "nada", "Algo → nada."),
        ]
      ),
    ],
    [
      fb("Make it negative.", "Alguien llamó. → ___ llamó.", "Nadie", "Alguien → nadie."),
      fb("Make it negative.", "Siempre desayuno. → ___ desayuno.", "Nunca", "Siempre → nunca."),
      fb("Make it negative.", "Tengo algún libro en francés. → No tengo ___ libro en francés.", "ningún", "Algún → ningún."),
      fb("Make it negative.", "Yo también fui. → Yo ___ fui.", "tampoco", "También → tampoco."),
      fb("Make it negative.", "Quiero pan o galletas. → No quiero ___ pan ni galletas.", "ni", "O… o → ni… ni."),
      fb("Make it positive.", "No compré nada. → Compré ___.", "algo", "Nada → algo."),
      mc(
        "«¿Hay alguna farmacia por aquí?» — negative answer:",
        ["No, no hay ninguna.", "No, no hay alguna.", "No, hay ninguna no.", "No, nunca hay alguna."],
        0,
        "Alguna → ninguna."
      ),
      toEs("Nobody told me anything.", "Nadie me dijo nada.", "Nadie + nada.", ["No me dijo nada nadie."]),
    ]
  ),
  L(
    "mente-adverbs-2",
    "a2d-mente-build",
    "Build-Up: Adjective → Adverb",
    "Rápido → rápidamente, fácil → fácilmente, clara y lentamente: form and place -mente adverbs.",
    "6 min",
    [
      sec(
        "Feminine + -mente",
        "Take the feminine singular form and add -mente: tranquila → tranquilamente. Adjectives in -e or consonant don't change: feliz → felizmente. Keep any accent: rápidamente. In a series, only the last one takes -mente: clara y lentamente.",
        [
          ["Habló clara y tranquilamente.", "She spoke clearly and calmly."],
          ["Normalmente cenamos a las nueve.", "We normally have dinner at nine."],
        ],
        [
          fb("Form the adverb.", "lento → ___", "lentamente", "Lenta + -mente."),
        ]
      ),
    ],
    [
      fb("Form the adverb.", "Contestó muy ___. (amable)", "amablemente", "-e adjective + -mente."),
      fb("Form the adverb.", "Lo hizo ___. (perfecto)", "perfectamente", "Perfecta + -mente."),
      fb("Form the adverb.", "Se resolvió ___. (fácil)", "fácilmente", "Keeps the accent."),
      fb("Form the adverb.", "Trabaja rápida y ___. (eficaz)", "eficazmente", "Only the last one takes -mente."),
      mc(
        "Which is correct?",
        ["Habló lenta y claramente.", "Habló lentamente y claramente.", "Habló lento y claramente.", "Habló lentamente y clara."],
        0,
        "Only the last adverb takes -mente."
      ),
      toEs("Luckily, nobody saw it.", "Afortunadamente, nadie lo vio.", "-mente + negation.", ["Por suerte, nadie lo vio."]),
      wo("Mi abuela camina lenta pero tranquilamente por el parque.", "Series of -mente adverbs.", "My grandmother walks slowly but calmly through the park."),
    ]
  ),
  L(
    "personal-a-negation-mente-drill-3",
    "a2d-mixed-a-negation-mente",
    "Mixed Practice: Personal A, Negatives and -Mente",
    "Three small but easy-to-forget topics in one round.",
    "6 min",
    [
      sec(
        "Three checks",
        "1) Person as direct object? → a. 2) Negative word after the verb? → no before the verb. 3) Adverb from an adjective? → feminine + -mente (last one only in a series).",
        [
          ["No vi a nadie, afortunadamente.", "I didn't see anyone, fortunately."],
        ],
        [
          fb("Complete.", "No invité ___ nadie.", "a", "Nadie takes the personal a."),
        ]
      ),
    ],
    [
      fb("Complete.", "___ me llamó ayer. (nobody)", "Nadie", "Before the verb, no no."),
      fb("Complete.", "Espero ___ mis amigos en la plaza.", "a", "Specific people."),
      fb("Complete.", "Lo explicó ___. (claro)", "claramente", "Clara + -mente."),
      fb("Complete.", "No quiero ___ más, gracias.", "nada", "No… nada."),
      fb("Complete.", "Normal___ me levanto a las siete.", "mente", "Normalmente."),
      mc(
        "«Nunca ___ nadie en ese bar.»",
        ["veo a", "veo", "no veo a", "veo al"],
        0,
        "Nunca before the verb; a before nadie."
      ),
      toEs("I don't know anyone here.", "No conozco a nadie aquí.", "No… a nadie.", ["Aquí no conozco a nadie."]),
      toEn("Sinceramente, no me gustó nada.", "Honestly, I didn't like it at all.", "-mente + no… nada.", ["Honestly, I didn't like it one bit."]),
    ]
  ),
  L(
    "personal-a-negation-mente-drill-3",
    "a2d-speed-round-a-negation",
    "Speed Round: 10 Small-Word Decisions",
    "A, al, nada, nadie, ningún, tampoco, -mente: fast decisions on the little words.",
    "5 min",
    [
      sec(
        "Little words, big difference",
        "a/al before specific people; nadie/nada/nunca/ningún with double negation; tampoco to agree with a negative; -mente on the feminine form.",
        [
          ["Tampoco conozco al director.", "I don't know the director either."],
        ],
        [
          fb("Quick!", "Llamé ___ profesor.", "al", "A + el = al."),
        ]
      ),
    ],
    [
      fb("Quick!", "No hay ___ en casa.", "nadie", "No person → nadie."),
      fb("Quick!", "—No fui. —Yo ___.", "tampoco", "Agree with a negative."),
      fb("Quick!", "No tengo ___ idea.", "ninguna", "Ninguna (feminine)."),
      fb("Quick!", "Veo ___ mi vecina todos los días.", "a", "Specific person."),
      fb("Quick!", "Lo hizo ___. (rápido)", "rápidamente", "Rápida + -mente."),
      fb("Quick!", "No me dijo ___.", "nada", "Nothing → nada."),
      fb("Quick!", "Ella ___ llega tarde. (never)", "nunca", "Nunca before the verb."),
      mc(
        "«Tengo ___ dos gatos y un perro.»",
        ["– (no a)", "a", "al", "a los"],
        0,
        "Tener for possession → no a."
      ),
    ]
  ),
  L(
    "personal-a-negation-mente-drill-3",
    "a2d-negation-say-it-yourself",
    "Say It Yourself: Things I Never Do",
    "Personal translation drill with nunca, nada, nadie, ninguno and tampoco.",
    "6 min",
    [
      sec(
        "Talking about what you don't do",
        "Nunca + verb, no + verb + nada/nadie, no… ningún/ninguna, yo tampoco. Mix in other tenses: Nunca fui a…, De niño nunca comía…",
        [
          ["Nunca bebo café después de las cinco.", "I never drink coffee after five."],
          ["De niño no comía ninguna verdura.", "As a child I didn't eat any vegetables."],
        ],
        [
          mc(
            "«I have never been to Japan» in A2 Spanish (preterite):",
            ["Nunca fui a Japón.", "Nunca iba a Japón.", "Nunca voy a Japón ayer.", "Nunca no fui a Japón."],
            0,
            "Nunca + preterite (Latin American usage)."
          ),
        ]
      ),
    ],
    [
      toEs("I never watch TV in the morning.", "Nunca veo la tele por la mañana.", "Nunca before the verb.", ["No veo nunca la tele por la mañana.", "Nunca veo la televisión por la mañana."]),
      toEs("I don't know anyone in this city.", "No conozco a nadie en esta ciudad.", "No… a nadie.", ["En esta ciudad no conozco a nadie."]),
      toEs("I didn't buy anything.", "No compré nada.", "No… nada.", []),
      toEs("My brother doesn't smoke and I don't either.", "Mi hermano no fuma y yo tampoco.", "Tampoco.", []),
      fb("Complete.", "No tengo ___ hermano.", "ningún", "Ningún + masculine singular."),
      fb("Complete.", "De niña ___ comía pescado.", "nunca", "Nunca + imperfect."),
      wo("En mi pueblo nunca pasa nada interesante.", "Double negation.", "Nothing interesting ever happens in my town."),
    ]
  ),
  L(
    "asking-giving-directions-2",
    "a2d-directions-sequence",
    "Build-Up: Giving Directions Step by Step",
    "Siga recto, gire a la derecha, cruce la plaza: build a full route from four instructions.",
    "6 min",
    [
      sec(
        "Direction chunks",
        "Siga todo recto (go straight on), gire / tuerza a la derecha / izquierda (turn), cruce la calle (cross), la primera / segunda calle (the first/second street), está al lado de / enfrente de / al final de (it's next to / opposite / at the end of). Link with luego, después, y ahí.",
        [
          ["Siga recto y gire la segunda a la izquierda.", "Go straight on and take the second left."],
          ["La farmacia está enfrente del banco.", "The pharmacy is opposite the bank."],
        ],
        [
          mc(
            "«Enfrente de» means…",
            ["opposite", "next to", "behind", "at the end of"],
            0,
            "Across from."
          ),
        ]
      ),
    ],
    [
      fb("Complete.", "Siga todo ___ hasta el semáforo.", "recto", "Straight on."),
      fb("Complete.", "Gire a la ___ en la esquina. (right)", "derecha", "Right."),
      fb("Complete.", "___ la plaza y ahí está el museo. (cross, usted)", "Cruce", "Cruzar → cruce."),
      fb("Complete.", "El banco está al ___ de la farmacia. (next to)", "lado", "Al lado de."),
      mt(
        "Match the phrase and its meaning.",
        [
          ["al final de la calle", "at the end of the street"],
          ["la primera a la izquierda", "the first on the left"],
          ["en la esquina", "on the corner"],
        ],
        "Direction phrases."
      ),
      toEs("Go straight on and turn right at the church.", "Siga recto y gire a la derecha en la iglesia.", "Usted instructions.", ["Siga todo recto y gire a la derecha en la iglesia."]),
      wo("Perdone, ¿cómo llego a la estación de tren?", "Asking for directions.", "Excuse me, how do I get to the train station?"),
    ]
  ),
  L(
    "asking-giving-directions-2",
    "a2d-directions-qa",
    "Q&A Drill: Is It Far?",
    "¿Está lejos? ¿Cuánto se tarda? ¿Hay un…? Ask and answer the practical questions around directions.",
    "6 min",
    [
      sec(
        "Practical questions",
        "¿Hay un cajero por aquí? — Sí, hay uno en la esquina. ¿Dónde está el hospital? — Está a diez minutos andando. ¿Está lejos? — No, está muy cerca. ¿Cuánto se tarda? — Unos cinco minutos. Remember: hay for «is there a…», está for a specific place.",
        [
          ["—¿Hay una parada de metro cerca? —Sí, hay una a dos calles.", "Is there a metro stop nearby? — Yes, there's one two streets away."],
        ],
        [
          mc(
            "«¿___ un supermercado por aquí?»",
            ["Hay", "Está", "Es", "Tiene"],
            0,
            "Existence of an unspecified place → hay."
          ),
        ]
      ),
    ],
    [
      mc(
        "«¿Dónde ___ el Museo Nacional?»",
        ["está", "hay", "es", "tiene"],
        0,
        "Specific place → está."
      ),
      fb("Answer.", "—¿Está lejos? —No, está muy ___.", "cerca", "Close."),
      fb("Answer.", "—¿Cuánto se tarda? —Unos diez minutos ___ pie.", "a", "A pie = on foot."),
      fb("Answer.", "—¿Hay un cajero por aquí? —Sí, hay ___ al lado del banco.", "uno", "Uno replaces un cajero."),
      fb("Ask.", "Perdone, ¿___ está la estación?", "dónde", "Where."),
      toEs("Is there a pharmacy near here?", "¿Hay una farmacia cerca de aquí?", "Existence of an unspecified place → hay.", ["¿Hay alguna farmacia por aquí?", "¿Hay una farmacia por aquí?"]),
      toEn("La biblioteca está a cinco minutos andando.", "The library is a five-minute walk away.", "Distance in time.", ["The library is five minutes' walk away.", "The library is five minutes away on foot."]),
    ]
  ),
  L(
    "at-the-restaurant-2",
    "a2d-restaurant-ordering-pattern",
    "Pattern Practice: Ordering Politely",
    "Para mí…, ¿me trae…?, quería…, de primero / de segundo: drill the restaurant formulas in every step of a meal.",
    "6 min",
    [
      sec(
        "Restaurant formulas",
        "Ordering: Para mí, la sopa. De primero, ensalada; de segundo, pescado. Asking: ¿Me trae la carta? ¿Nos trae más pan? Polite imperfect: Quería una mesa para dos. Paying: La cuenta, por favor. ¿Se puede pagar con tarjeta?",
        [
          ["De primero quería la sopa del día.", "For the first course I'd like the soup of the day."],
          ["¿Nos trae la cuenta, por favor?", "Could you bring us the bill, please?"],
        ],
        [
          fb("Complete.", "___ mí, el pollo con patatas.", "Para", "Para mí = for me."),
        ]
      ),
    ],
    [
      fb("Complete.", "De ___ quería una ensalada mixta. (first course)", "primero", "De primero."),
      fb("Complete.", "¿Me ___ un vaso de agua, por favor? (traer, usted)", "trae", "Polite request."),
      fb("Complete.", "___ una mesa para cuatro, por favor. (querer, polite imperfect)", "Quería", "Polite imperfect."),
      fb("Complete.", "De ___ tenemos flan y fruta. (dessert)", "postre", "De postre."),
      mt(
        "Match the waiter's question and your answer.",
        [
          ["¿Qué van a tomar?", "Para mí, la paella."],
          ["¿Algo de beber?", "Agua sin gas, por favor."],
          ["¿Van a tomar postre?", "No, gracias, solo café."],
        ],
        "Restaurant dialogue."
      ),
      toEs("For the main course I'd like the fish.", "De segundo quería el pescado.", "Polite imperfect.", ["De segundo, el pescado, por favor.", "De segundo quiero el pescado."]),
      wo("¿Nos trae un poco más de pan, por favor?", "Polite request.", "Could you bring us a bit more bread, please?"),
    ]
  ),
  L(
    "at-the-restaurant-2",
    "a2d-restaurant-problem-past",
    "Story Cloze: The Worst Dinner Ever",
    "Tell a restaurant disaster in the past: what was wrong, what you asked for, how it ended.",
    "7 min",
    [
      sec(
        "The story",
        "«El sábado fuimos a un restaurante nuevo. Había mucha gente y el camarero estaba muy ocupado. Pedimos la paella, pero tardó una hora. Cuando llegó, estaba fría. Le dijimos al camarero que la paella estaba fría y nos trajo otra. Al final no nos cobró el postre.»",
        [
          ["La paella estaba fría.", "The paella was cold."],
          ["No nos cobró el postre.", "He didn't charge us for dessert."],
        ],
        [
          mc(
            "How did it end?",
            ["They didn't pay for dessert.", "They left without paying.", "They never got their food.", "They ate at home."],
            0,
            "No nos cobró el postre."
          ),
        ]
      ),
    ],
    [
      fb("Fill in.", "El sábado ___ a un restaurante nuevo. (ir, nosotros)", "fuimos", "Event → preterite."),
      fb("Fill in.", "___ mucha gente. (haber)", "Había", "Background → imperfect."),
      fb("Fill in.", "___ la paella para dos. (pedir, nosotros)", "Pedimos", "Event → preterite."),
      fb("Fill in.", "Cuando llegó, la paella ___ fría. (estar)", "estaba", "Description → imperfect."),
      fb("Fill in.", "El camarero nos ___ otra paella. (traer)", "trajo", "Traer → trajo."),
      mc(
        "«Le dijimos ___ camarero que la comida estaba fría.»",
        ["al", "a", "el", "del"],
        0,
        "Decir algo a alguien → al camarero."
      ),
      toEs("The waiter was very kind and brought us another dish.", "El camarero fue muy amable y nos trajo otro plato.", "Preterite of evaluation + traer.", ["El camarero era muy amable y nos trajo otro plato."]),
    ]
  ),
  L(
    "a2-comprehensive-review-1",
    "a2d-cumulative-circuit-1",
    "Cumulative Circuit 1: Past Tenses + Pronouns",
    "Interleaved practice: every item mixes a past tense with an object or reflexive pronoun.",
    "7 min",
    [
      sec(
        "Why interleave?",
        "Switching between topics forces you to choose the rule each time, just like in a real conversation. In this circuit, decide the tense first, then the pronoun and its position.",
        [
          ["¿El libro? Lo leí en dos días.", "The book? I read it in two days."],
          ["De niña me acostaba a las ocho.", "As a girl I went to bed at eight."],
        ],
        [
          fb("Complete.", "¿La película? ___ vimos anoche.", "La", "La película → la; anoche → preterite."),
        ]
      ),
    ],
    [
      fb("Complete.", "¿Los regalos? Mis padres ___ compraron ayer.", "los", "Direct object, masculine plural."),
      fb("Complete.", "De pequeño ___ duchaba por la noche. (yo)", "me", "Reflexive + imperfect."),
      fb("Complete.", "¿Le dijiste la verdad a tu jefe? — Sí, ___ la dije.", "se", "Le + la → se la."),
      fb("Complete.", "Ayer ___ levantamos tardísimo.", "nos", "Reflexive nosotros."),
      fb("Complete.", "Cuando sonó el teléfono, yo ___ duchaba.", "me", "Reflexive + imperfect in progress."),
      mc(
        "«¿Las fotos? ___ a mi abuela el domingo.» (mandar, yo)",
        ["Se las mandé", "Le las mandé", "Se los mandaba", "Las le mandé"],
        0,
        "One event + le → se."
      ),
      toEs("My mother called me and told me the news.", "Mi madre me llamó y me contó la noticia.", "Me + preterite twice.", ["Mi madre me llamó y me dio la noticia.", "Mi mamá me llamó y me contó la noticia."]),
      toEn("De niño mi abuelo me llevaba al parque.", "When I was a kid my grandfather used to take me to the park.", "Habit + me.", ["As a child my grandfather took me to the park."]),
    ]
  ),
  L(
    "a2-comprehensive-review-1",
    "a2d-cumulative-circuit-2",
    "Cumulative Circuit 2: Por/Para + Future + Comparisons",
    "Plans, purposes and comparisons in one interleaved round.",
    "7 min",
    [
      sec(
        "Three tools for talking about plans",
        "Future: viajaré, tendré. Para: purpose and deadlines. Por: route, price, duration. Comparisons: más… que, tan… como, el mejor.",
        [
          ["El año que viene viajaré por Chile para ver los glaciares.", "Next year I'll travel around Chile to see the glaciers."],
        ],
        [
          fb("Complete.", "Ahorraré dinero ___ comprar una casa.", "para", "Purpose."),
        ]
      ),
    ],
    [
      fb("Complete.", "El próximo verano ___ por Europa. (viajar, nosotros)", "viajaremos", "Future."),
      fb("Complete.", "Iremos ___ tren porque es más cómodo.", "en", "Means of transport → en tren (not por)."),
      fb("Complete.", "El tren es ___ cómodo que el autobús.", "más", "Comparison."),
      fb("Complete.", "Necesitaré el pasaporte ___ el lunes.", "para", "Deadline."),
      fb("Complete.", "Pagaremos unos cien euros ___ noche.", "por", "Distribution: por = per."),
      fb("Complete.", "Será el ___ viaje de nuestra vida. (bueno)", "mejor", "Irregular superlative."),
      mc(
        "«Estaremos en Roma ___ una semana.»",
        ["por", "para", "a", "de"],
        0,
        "Duration."
      ),
      toEs("Next year I'll have more time than this year.", "El año que viene tendré más tiempo que este año.", "Future + comparison.", ["El próximo año tendré más tiempo que este año."]),
    ]
  ),
  L(
    "a2-comprehensive-review-1",
    "a2d-fix-paragraph-a2-email",
    "Fix the Paragraph: An Email Full of A2 Errors",
    "One email, eight errors from eight different A2 topics. Find and fix each one.",
    "8 min",
    [
      sec(
        "The email",
        "«Querida Ana: el verano pasado ✗ íbamos (→ fuimos) a México. ✗ Estuvo (→ Hacía) mucho calor. Mi hermano ✗ es más mayor (→ es mayor) que yo y ✗ lo (→ le) encanta la comida picante. Compré un regalo ✗ por (→ para) ti. ✗ Nadie no (→ Nadie) me ayudó con las maletas. ¡Te ✗ veré lo (→ lo veré / te veré) pronto!»",
        [
          ["El verano pasado fuimos a México.", "Last summer we went to Mexico."],
          ["A mi hermano le encanta la comida picante.", "My brother loves spicy food."],
        ],
        [
          fb("Fix it.", "El verano pasado ___ a México. (the email says: íbamos — one trip)", "fuimos", "One trip → preterite."),
        ]
      ),
    ],
    [
      fb("Fix it.", "___ mucho calor todos los días. (the email says: Estuvo)", "Hacía", "Weather → hacer, imperfect background."),
      fb("Fix it.", "Mi hermano es ___ que yo. (the email says: más mayor)", "mayor", "No más with mayor."),
      fb("Fix it.", "A mi hermano ___ encanta la comida picante. (the email says: lo)", "le", "Gustar-type → le."),
      fb("Fix it.", "Compré un regalo ___ ti. (the email says: por)", "para", "Recipient."),
      fb("Fix it.", "___ me ayudó con las maletas. (the email says: Nadie no)", "Nadie", "No double no when nadie comes first."),
      fb("Fix it.", "Mi madre ___ muchas fotos. (the email says: hació)", "hizo", "Hacer → hizo."),
      mc(
        "Which is the correct closing?",
        ["¡Te veré pronto!", "¡Veré te pronto!", "¡Te veía pronto!", "¡Te vi pronto!"],
        0,
        "Future + pronoun before the verb."
      ),
      toEs("I bought you a present in Mexico.", "Te compré un regalo en México.", "Te + preterite.", ["Compré un regalo para ti en México."]),
    ]
  ),
  L(
    "a2-comprehensive-review-1",
    "a2d-say-it-yourself-introduce",
    "Say It Yourself: Introduce Yourself — Past, Present, Future",
    "A complete self-introduction that uses every A2 tense: where you lived, what you do, what you'll do.",
    "7 min",
    [
      sec(
        "Three time frames",
        "Past background (imperfect): De niño vivía en… · Past events (preterite): En 2018 me mudé a… · Present: Ahora trabajo en… · Future: El año que viene empezaré…",
        [
          ["De niña vivía en un pueblo, pero en 2015 me mudé a la ciudad.", "As a girl I lived in a village, but in 2015 I moved to the city."],
        ],
        [
          mc(
            "Which sentence talks about a future plan?",
            ["El año que viene estudiaré alemán.", "El año pasado estudié alemán.", "Antes estudiaba alemán.", "Estudio alemán."],
            0,
            "Future."
          ),
        ]
      ),
    ],
    [
      toEs("When I was a child I lived near the sea.", "Cuando era niño vivía cerca del mar.", "Imperfect background.", ["Cuando era niña vivía cerca del mar.", "De niño vivía cerca del mar."]),
      toEs("In 2019 I moved to Madrid.", "En 2019 me mudé a Madrid.", "Preterite event.", []),
      toEs("Now I work in a hospital.", "Ahora trabajo en un hospital.", "Present.", []),
      toEs("Next year I will start a new course.", "El año que viene empezaré un curso nuevo.", "Future.", ["El próximo año empezaré un nuevo curso.", "El año que viene comenzaré un curso nuevo."]),
      fb("Complete.", "Me gusta más la ciudad ___ el pueblo.", "que", "Comparison."),
      fb("Complete.", "Estudio español ___ hablar con mis vecinos.", "para", "Purpose."),
      wo("Algún día volveré a vivir cerca del mar.", "Future + volver a.", "Someday I'll live near the sea again."),
      toEn("Antes era muy tímido, pero ahora hablo con todo el mundo.", "I used to be very shy, but now I talk to everyone.", "Imperfect vs. present.", ["Before I was very shy, but now I talk to everybody."]),
    ]
  ),
  L(
    "a2-comprehensive-review-1",
    "a2d-speed-round-a2-traps",
    "Speed Round: The 10 Biggest A2 Traps",
    "The mistakes A2 learners make most, in one fast round: fui/fue, lo/le, por/para, era/fue, hizo, más mayor.",
    "6 min",
    [
      sec(
        "The traps",
        "1) fue (ser/ir). 2) lo vs. le. 3) por vs. para. 4) era vs. fue (description vs. evaluation). 5) hizo (not hació). 6) dijeron (not dijieron). 7) mayor (not más mayor). 8) se lo (not le lo). 9) nadie + no. 10) gustan with plurals.",
        [
          ["Me gustan los perros, pero no tengo ninguno.", "I like dogs, but I don't have any."],
        ],
        [
          fb("Quick!", "Ellos me ___ la verdad. (decir, preterite)", "dijeron", "Not dijieron."),
        ]
      ),
    ],
    [
      fb("Quick!", "¿Qué ___ tu hermano ayer? (hacer)", "hizo", "Hacer → hizo (irregular preterite, no accent)."),
      fb("Quick!", "¿El dinero? Ya ___ di a Juan. (le + lo)", "se lo", "Le + lo → se lo."),
      fb("Quick!", "Me ___ las películas de miedo. (gustar)", "gustan", "Plural subject → gustan."),
      fb("Quick!", "Invité ___ mis vecinos.", "a", "Personal a before specific people."),
      fb("Quick!", "Llamé a mi abuela y ___ conté todo.", "le", "Contar algo a alguien → le."),
      fb("Quick!", "Trabajo aquí ___ ganar dinero.", "para", "Purpose → para."),
      fb("Quick!", "Mi hermana es ___ que yo. (older)", "mayor", "Never más mayor."),
      mc(
        "«La fiesta ___ genial; ___ a las once.» (ser / empezar)",
        ["fue / empezó", "era / empezaba", "fue / empezaba", "era / empezó siempre"],
        0,
        "Evaluation of a finished event + one event."
      ),
    ]
  ),
  L(
    "a2-comprehensive-review-2",
    "a2d-story-cloze-market-day",
    "Story Cloze: A Day at the Market",
    "A full A2 story with gaps from every topic: tenses, pronouns, por/para, comparisons and negation.",
    "8 min",
    [
      sec(
        "The story",
        "«El sábado por la mañana fui al mercado con mi abuela. Hacía sol y había mucha gente. Mi abuela quería comprar fruta para hacer una tarta. Las fresas eran más caras que las naranjas, pero las compró de todos modos. El vendedor nos regaló unas cerezas. No compramos nada más.»",
        [
          ["Las fresas eran más caras que las naranjas.", "The strawberries were more expensive than the oranges."],
          ["El vendedor nos regaló unas cerezas.", "The seller gave us some cherries."],
        ],
        [
          mc(
            "Why did the grandmother buy fruit?",
            ["to make a cake", "for a party", "because it was cheap", "to sell it"],
            0,
            "Para hacer una tarta."
          ),
        ]
      ),
    ],
    [
      fb("Fill in.", "El sábado ___ la mañana fui al mercado.", "por", "Part of the day."),
      fb("Fill in.", "___ sol y había mucha gente. (hacer)", "Hacía", "Background weather."),
      fb("Fill in.", "Mi abuela quería comprar fruta ___ hacer una tarta.", "para", "Purpose."),
      fb("Fill in.", "Las fresas eran ___ caras que las naranjas.", "más", "Comparison."),
      fb("Fill in.", "¿Las fresas? Mi abuela ___ compró de todos modos.", "las", "Las fresas → las."),
      fb("Fill in.", "El vendedor ___ regaló unas cerezas. (a nosotros)", "nos", "Indirect object."),
      fb("Fill in.", "No compramos ___ más.", "nada", "No… nada."),
      toEs("My grandmother made the best cake in the world.", "Mi abuela hizo la mejor tarta del mundo.", "Hizo + superlative.", ["Mi abuela hizo el mejor pastel del mundo."]),
    ]
  ),
  L(
    "a2-comprehensive-review-2",
    "a2d-chain-three-tenses",
    "Chain Transformations: One Sentence, Four Times",
    "Rewrite the same sentence in the present, preterite, imperfect and future — with its pronoun.",
    "7 min",
    [
      sec(
        "Four versions",
        "Hoy se lo digo. → Ayer se lo dije. → Antes siempre se lo decía. → Mañana se lo diré. The pronouns don't move; only the verb changes.",
        [
          ["Hoy la veo. / Ayer la vi. / Antes la veía. / Mañana la veré.", "Today I see her. / Yesterday I saw her. / I used to see her. / Tomorrow I'll see her."],
        ],
        [
          fb("Preterite.", "Hoy lo hago. → Ayer lo ___.", "hice", "Hacer → hice."),
        ]
      ),
    ],
    [
      fb("Imperfect.", "Hoy lo hago. → Antes siempre lo ___.", "hacía", "Hacer → hacía."),
      fb("Future.", "Hoy lo hago. → Mañana lo ___.", "haré", "Hacer → haré."),
      fb("Preterite.", "Hoy nos vamos temprano. → Ayer nos ___ temprano.", "fuimos", "Irse → nos fuimos."),
      fb("Imperfect.", "Hoy nos vamos temprano. → De niños siempre nos ___ temprano.", "íbamos", "Ir → íbamos."),
      fb("Future.", "Hoy te lo traigo. → Mañana te lo ___.", "traeré", "Traer → traeré (regular future)."),
      fb("Preterite.", "Hoy te lo traigo. → Ayer te lo ___.", "traje", "Traer → traje."),
      mc(
        "«Hoy puedo salir.» → Ayer…",
        ["pude salir.", "podía salir ayer siempre.", "podré salir.", "puedo salir."],
        0,
        "Poder → pude."
      ),
      toEs("Tomorrow I'll tell him (se lo).", "Mañana se lo diré.", "Future + double pronoun.", ["Se lo diré mañana."]),
    ]
  ),
  L(
    "a2-comprehensive-review-2",
    "a2d-qa-weekend-interview",
    "Q&A Drill: A Full Weekend Interview",
    "A friend asks eight questions about your weekend and your plans. Answer each in the right tense and person.",
    "7 min",
    [
      sec(
        "Listen for the tense",
        "¿Qué hiciste? → preterite. ¿Qué tal estaba? / ¿Cómo era? → imperfect. ¿Qué vas a hacer? / ¿Qué harás? → ir a / future. Always switch tú → yo.",
        [
          ["—¿Qué tal estaba el concierto? —Estaba lleno de gente.", "How was the concert? — It was packed."],
        ],
        [
          fb("Answer.", "—¿Adónde fuiste el sábado? —___ al concierto de Rosalía.", "Fui", "Ir → fui."),
        ]
      ),
    ],
    [
      fb("Answer.", "—¿Con quién fuiste? —___ con mis compañeros de piso.", "Fui", "Tú → yo."),
      fb("Answer.", "—¿Cómo era el lugar? —___ enorme y muy moderno.", "Era", "Description → imperfect."),
      fb("Answer.", "—¿Qué hiciste el domingo? —___ todo el día. (descansar)", "Descansé", "Preterite yo."),
      fb("Answer.", "—¿Te gustó el concierto? —Sí, me ___ muchísimo.", "encantó", "Encantar → encantó."),
      fb("Answer.", "—¿Qué harás el próximo fin de semana? —___ a mis padres. (visitar)", "Visitaré", "Future yo."),
      fb("Answer.", "—¿Les llevarás algo? —Sí, ___ llevaré flores.", "les", "Indirect object."),
      mc(
        "«—¿Estabas cansado el lunes? —Sí, ___ agotado.»",
        ["estaba", "estuve", "estoy", "estaré"],
        0,
        "Imperfect question → imperfect answer."
      ),
      toEs("—What will you do on Sunday? —I'll stay home.", "—¿Qué harás el domingo? —Me quedaré en casa.", "Future + reflexive.", ["—¿Qué vas a hacer el domingo? —Me voy a quedar en casa."]),
    ]
  ),
  L(
    "a2-comprehensive-review-2",
    "a2d-minimal-pairs-a2-final",
    "Minimal Pairs: A2 Final Contrasts",
    "Fue/era, lo/le, por/para, conocí/conocía, tan/tanto: eight pairs that sum up the hardest A2 choices.",
    "7 min",
    [
      sec(
        "Eight pairs",
        "Choose between the two options in each sentence. Every pair comes from a different A2 topic, so you have to switch rules quickly.",
        [
          ["La cena fue deliciosa. / La casa era grande.", "Evaluation of an event vs. description."],
        ],
        [
          mc(
            "«___ a mi mujer en una boda.» (met)",
            ["Conocí", "Conocía", "Conozco", "Conoceré"],
            0,
            "First meeting → preterite."
          ),
        ]
      ),
    ],
    [
      mc(
        "«A mi padre ___ gustan los coches antiguos.»",
        ["le", "lo", "les", "la"],
        0,
        "Gustar-type → le."
      ),
      mc(
        "«Vi a Marta y ___ saludé.»",
        ["la", "le", "les", "se"],
        0,
        "Saludar a alguien → direct object."
      ),
      mc(
        "«No tengo ___ paciencia como tú.»",
        ["tanta", "tan", "tanto", "tantas"],
        0,
        "Tanta + paciencia."
      ),
      mc(
        "«Viajamos ___ todo el país.»",
        ["por", "para", "a", "en por"],
        0,
        "Around/through."
      ),
      mc(
        "«La reunión ___ muy aburrida.» (the whole meeting, finished)",
        ["fue", "era", "estuvo", "es"],
        0,
        "Evaluation of a finished event."
      ),
      mc(
        "«De niño ___ pescado todos los viernes.»",
        ["comía", "comí", "como", "comeré"],
        0,
        "Habit."
      ),
      fb("Complete.", "El sábado ___ de viaje con mis primos. (salir, yo, future)", "saldré", "Future irregular: saldr-."),
      toEs("I met her at a party; I already knew her brother.", "La conocí en una fiesta; ya conocía a su hermano.", "Conocí vs. conocía.", ["La conocí en una fiesta y ya conocía a su hermano."]),
    ]
  ),
  L(
    "a2-comprehensive-review-2",
    "a2d-build-up-postcard",
    "Build-Up: Write a Postcard",
    "Build a holiday postcard in six sentences: greeting, place, weather, what you did, a comparison and a plan.",
    "7 min",
    [
      sec(
        "Postcard structure",
        "1) ¡Hola desde Cartagena! 2) Estamos en un hotel… 3) Hace / hacía un tiempo… 4) Ayer fuimos a… 5) La playa es más bonita que… 6) Mañana visitaremos… 7) ¡Besos!",
        [
          ["¡Hola desde Cartagena! Hace un calor increíble.", "Hello from Cartagena! It's incredibly hot."],
        ],
        [
          mc(
            "Which sentence tells what you did yesterday?",
            ["Ayer fuimos a las islas del Rosario.", "Mañana iremos a las islas.", "Siempre íbamos a las islas.", "Vamos a ir a las islas."],
            0,
            "Preterite."
          ),
        ]
      ),
    ],
    [
      wo("Ayer fuimos en barco a una isla preciosa.", "Preterite event.", "Yesterday we went by boat to a beautiful island."),
      wo("El agua era más clara que en nuestra ciudad.", "Imperfect + comparison.", "The water was clearer than in our city."),
      wo("Mañana visitaremos el centro histórico por la tarde.", "Future + por la tarde.", "Tomorrow we'll visit the historic center in the afternoon."),
      fb("Complete.", "Te compré un recuerdo ___ ti.", "para", "Recipient."),
      fb("Complete.", "La comida está ___. (rico)", "riquísima", "-ísimo, feminine."),
      fb("Complete.", "No hay ___ problema: todo va bien.", "ningún", "Ningún + masculine."),
      toEs("Hello from Cartagena! It's very hot here.", "¡Hola desde Cartagena! Aquí hace mucho calor.", "Postcard opening.", ["¡Hola desde Cartagena! Hace mucho calor aquí."]),
    ]
  ),
  L(
    "a2-comprehensive-review-3",
    "a2d-cumulative-circuit-3",
    "Cumulative Circuit 3: The Irregular Verb Workout",
    "The same irregular verbs in three tenses: preterite, imperfect (ser/ir/ver) and future.",
    "7 min",
    [
      sec(
        "Irregulars across tenses",
        "Hacer: hice / hacía / haré. Tener: tuve / tenía / tendré. Ir: fui / iba / iré. Ser: fui / era / seré. Decir: dije / decía / diré. Venir: vine / venía / vendré.",
        [
          ["Antes iba al gimnasio; ayer no fui; mañana iré.", "I used to go to the gym; yesterday I didn't go; tomorrow I'll go."],
        ],
        [
          fb("Complete.", "Ayer ___ mucho trabajo. (tener, yo)", "tuve", "Preterite."),
        ]
      ),
    ],
    [
      fb("Complete.", "De niño ___ miedo de los perros. (tener, yo)", "tenía", "Imperfect."),
      fb("Complete.", "El año que viene ___ más vacaciones. (tener, yo)", "tendré", "Future."),
      fb("Complete.", "Ayer mis amigos ___ a cenar. (venir)", "vinieron", "Preterite."),
      fb("Complete.", "Mañana mis amigos ___ a cenar. (venir)", "vendrán", "Future."),
      fb("Complete.", "Siempre me ___ la verdad. (decir, él)", "decía", "Imperfect (regular)."),
      fb("Complete.", "Te ___ la respuesta mañana. (decir, yo)", "diré", "Future."),
      mc(
        "«Mi abuelo ___ carpintero y ___ muebles preciosos.»",
        ["era / hacía", "fue / hizo siempre", "era / hizo cada día", "fue / hacía ayer"],
        0,
        "Description + habit in the past."
      ),
      toEs("I couldn't come yesterday, but I'll come tomorrow.", "Ayer no pude venir, pero mañana vendré.", "Preterite + future irregulars.", ["No pude venir ayer, pero vendré mañana."]),
    ]
  ),
  L(
    "a2-comprehensive-review-3",
    "a2d-cumulative-circuit-4",
    "Cumulative Circuit 4: Pronoun Placement Everywhere",
    "Pronouns with conjugated verbs, infinitives, gerunds and ir a — in past, present and future.",
    "7 min",
    [
      sec(
        "One rule, many tenses",
        "Before a single conjugated verb (lo compré, lo compraré). Before the conjugated verb or attached to an infinitive/gerund (lo voy a comprar / voy a comprarlo; lo estoy comprando / estoy comprándolo). Double pronouns move together.",
        [
          ["Te lo explicaré mañana. / Voy a explicártelo mañana.", "I'll explain it to you tomorrow."],
        ],
        [
          fb("Complete.", "¿El coche? ___ vendí el año pasado.", "Lo", "Before the preterite."),
        ]
      ),
    ],
    [
      fb("Attach.", "Lo voy a lavar. → Voy a ___.", "lavarlo", "Attached to the infinitive."),
      fb("Attach.", "Me estoy vistiendo. → Estoy ___.", "vistiéndome", "Gerund + accent."),
      fb("Move before.", "Quiero decírtelo. → ___ quiero decir.", "Te lo", "Both before."),
      fb("Complete.", "¿Las entradas? ___ compraremos mañana.", "Las", "Before the future."),
      fb("Complete.", "¿El informe? Se ___ mandé a la jefa.", "lo", "Se lo."),
      mc(
        "Which is wrong?",
        ["Voy a te lo decir.", "Te lo voy a decir.", "Voy a decírtelo.", "Te lo diré."],
        0,
        "Never between the verbs."
      ),
      toEs("I'm going to call her tonight.", "Voy a llamarla esta noche.", "Attached to the infinitive.", ["La voy a llamar esta noche.", "Esta noche la voy a llamar."]),
      wo("No te lo puedo prestar porque lo necesito.", "Double pronoun + negation.", "I can't lend it to you because I need it."),
    ]
  ),
  L(
    "a2-comprehensive-review-3",
    "a2d-cumulative-circuit-5",
    "Cumulative Circuit 5: Describing People Then and Now",
    "Ser/estar, imperfect, comparisons and -mente adverbs to describe how people were and how they are.",
    "7 min",
    [
      sec(
        "Then and now",
        "Then (imperfect): Mi abuelo era alto y trabajaba muchísimo. Now (present): Ahora es más bajo y camina lentamente. Comparisons: más/menos… que, tan… como. States: estaba/está cansado.",
        [
          ["De joven era más delgado que ahora.", "When he was young he was thinner than now."],
        ],
        [
          fb("Complete.", "De joven mi abuela ___ muy deportista. (ser)", "era", "Past description."),
        ]
      ),
    ],
    [
      fb("Complete.", "Ahora ___ más tranquila que antes. (ser)", "es", "Present description."),
      fb("Complete.", "Antes hablaba muy ___. (rápido → adverb)", "rápidamente", "-mente."),
      fb("Complete.", "Mi padre no es ___ alto como mi tío.", "tan", "Tan… como."),
      fb("Complete.", "Ayer mi hermano ___ muy cansado. (estar, all day)", "estuvo", "Delimited state → preterite."),
      fb("Complete.", "Cuando lo vi, ___ muy nervioso. (estar)", "estaba", "State at that moment."),
      mc(
        "«Mi madre es la persona ___ generosa de la familia.»",
        ["más", "tan", "tanta", "mejor"],
        0,
        "Superlative."
      ),
      toEs("My brother used to be shyer than me.", "Mi hermano era más tímido que yo.", "Imperfect + comparison.", []),
      toEn("Ahora vive tranquilamente en el campo.", "Now he lives peacefully in the countryside.", "-mente.", ["Now she lives quietly in the countryside."]),
    ]
  ),
  L(
    "a2-comprehensive-review-3",
    "a2d-cumulative-circuit-6",
    "Cumulative Circuit 6: Everyday Situations",
    "Restaurant, directions, shopping and phone calls — practical A2 language mixed with grammar.",
    "7 min",
    [
      sec(
        "Four situations",
        "Restaurant: Para mí…, ¿Me trae…? Directions: Siga recto…, está enfrente de… Shopping: ¿Me lo puedo probar? Lo compro. Phone: Le llamo por… ¿Me puede decir…?",
        [
          ["¿Me puedo probar esta chaqueta?", "Can I try this jacket on?"],
          ["Le llamo por lo de la reserva.", "I'm calling about the reservation."],
        ],
        [
          fb("Complete.", "¿Me ___ la carta, por favor? (traer, usted)", "trae", "Polite request."),
        ]
      ),
    ],
    [
      fb("Complete.", "La farmacia está ___ de la panadería. (opposite)", "enfrente", "Enfrente de."),
      fb("Complete.", "¿Me ___ probar estos pantalones? (poder, yo)", "puedo", "Poder."),
      fb("Complete.", "Me gustan; ___ compro.", "los", "Los pantalones → los."),
      fb("Complete.", "Le llamo ___ lo de la cita de mañana.", "por", "About/regarding."),
      fb("Complete.", "Quería una mesa ___ dos personas.", "para", "Para dos."),
      mc(
        "«¿Hay un banco ___ aquí?»",
        ["por", "para", "a", "de"],
        0,
        "Por aquí = around here."
      ),
      toEs("Excuse me, is there a supermarket around here?", "Perdone, ¿hay un supermercado por aquí?", "Hay + por aquí.", ["Disculpe, ¿hay un supermercado por aquí?"]),
    ]
  ),
  L(
    "a2-comprehensive-review-3",
    "a2d-story-cloze-grandfather",
    "Story Cloze: My Grandfather's Story",
    "A family story that moves from the imperfect past to the preterite and ends in the future.",
    "8 min",
    [
      sec(
        "The story",
        "«Mi abuelo nació en un pueblo de Galicia. Su familia era pobre y él trabajaba en el campo desde niño. A los veinte años se fue a Argentina en barco. Allí conoció a mi abuela y abrió una panadería. El año que viene iremos a Galicia para conocer su pueblo.»",
        [
          ["A los veinte años se fue a Argentina.", "At twenty he left for Argentina."],
          ["Iremos a Galicia para conocer su pueblo.", "We'll go to Galicia to see his village."],
        ],
        [
          mc(
            "Where did the grandfather open a bakery?",
            ["in Argentina", "in Galicia", "in Madrid", "on the ship"],
            0,
            "Allí = Argentina."
          ),
        ]
      ),
    ],
    [
      fb("Fill in.", "Mi abuelo ___ en un pueblo de Galicia. (nacer)", "nació", "Milestone → preterite."),
      fb("Fill in.", "Su familia ___ pobre. (ser)", "era", "Description."),
      fb("Fill in.", "Él ___ en el campo desde niño. (trabajar)", "trabajaba", "Ongoing situation."),
      fb("Fill in.", "A los veinte años se ___ a Argentina. (ir)", "fue", "Irse → se fue."),
      fb("Fill in.", "Allí ___ a mi abuela. (conocer)", "conoció", "First meeting."),
      fb("Fill in.", "El año que viene ___ a Galicia. (ir, nosotros)", "iremos", "Future."),
      fb("Fill in.", "Iremos ___ conocer su pueblo.", "para", "Purpose."),
      toEs("He was very young and he didn't know anyone.", "Era muy joven y no conocía a nadie.", "Imperfect + double negation + personal a.", ["Él era muy joven y no conocía a nadie."]),
    ]
  ),
  L(
    "a2-comprehensive-review-3",
    "a2d-mixed-practice-translation-sprint",
    "Mixed Practice: Translation Sprint",
    "Eight short translations, each built around a different hard A2 point.",
    "7 min",
    [
      sec(
        "One trap per sentence",
        "Each sentence hides one A2 decision: preterite vs. imperfect, lo vs. le, se lo, por vs. para, mayor, tanto, double negation or the future. Spot it before you translate.",
        [
          ["Nunca le dije nada a nadie.", "I never told anyone anything."],
        ],
        [
          mc(
            "«I gave it to her» (the book):",
            ["Se lo di.", "Le lo di.", "Se la di.", "La le di."],
            0,
            "Le + lo → se lo."
          ),
        ]
      ),
    ],
    [
      toEs("It was raining when I left home.", "Llovía cuando salí de casa.", "Imperfect + preterite.", ["Estaba lloviendo cuando salí de casa."]),
      toEs("I sent her the photos.", "Le mandé las fotos.", "Indirect object.", ["Le envié las fotos."]),
      toEs("The photos? I sent them to her.", "¿Las fotos? Se las mandé.", "Se las.", ["¿Las fotos? Se las envié."]),
      toEs("This gift is for you.", "Este regalo es para ti.", "Para = recipient.", []),
      toEs("My older sister has as many books as me.", "Mi hermana mayor tiene tantos libros como yo.", "Mayor + tantos… como.", []),
      toEs("Nobody called me all day.", "Nadie me llamó en todo el día.", "Nadie before the verb.", ["No me llamó nadie en todo el día."]),
      toEs("Tomorrow I'll have more time.", "Mañana tendré más tiempo.", "Irregular future.", []),
      toEs("We met in 2020.", "Nos conocimos en 2020.", "Reciprocal + conocer preterite.", []),
    ]
  ),
  L(
    "a2-comprehensive-review-3",
    "a2d-exit-drill-ready-b1",
    "Final Drill: Are You Ready for B1?",
    "A last mixed drill across all A2 grammar. Aim for 100% before you start the B1 subjunctive.",
    "8 min",
    [
      sec(
        "Before B1",
        "B1 builds directly on this: commands use the same pronoun placement, the present perfect contrasts with the preterite, and se lo appears everywhere. If any item here feels shaky, go back to its drill lessons.",
        [
          ["Ayer se lo expliqué, pero no me entendió.", "Yesterday I explained it to him, but he didn't understand me."],
        ],
        [
          fb("Complete.", "Cuando era pequeña, ___ en Sevilla. (vivir)", "vivía", "Imperfect."),
        ]
      ),
    ],
    [
      fb("Complete.", "En 2021 ___ a trabajar en un banco. (empezar, yo)", "empecé", "-zar → -cé."),
      fb("Complete.", "¿Las llaves? No ___ encuentro.", "las", "Direct object."),
      fb("Complete.", "A mis hijos ___ encanta la playa.", "les", "Gustar-type."),
      fb("Complete.", "Mi hermano se ___ rápidamente y salió. (vestirse, preterite)", "vistió", "-ir stem change in él: se vistió."),
      fb("Complete.", "El vuelo ___ Lima sale a las diez.", "para", "Destination."),
      fb("Complete.", "Mi coche es ___ viejo que el tuyo.", "más", "Comparison."),
      fb("Complete.", "El próximo año ___ un máster. (hacer, yo)", "haré", "Future."),
      mc(
        "«No ___ nadie en la oficina cuando ___.»",
        ["había / llegué", "hubo / llegaba", "había / llegaba ayer", "hay / llegué"],
        0,
        "Background + event."
      ),
    ]
  ),
];
