// Synced from cheneygross-afk/lengo:src/lib/lessons/a2-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
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
        "Remember the rule: the stem stays, the ending names the person",
        [
          "Remember the rule: drop -ar and add -é, -aste, -ó, -amos, -asteis, -aron. The stem never changes for regular verbs; only the ending moves, and it tells you who acted.",
          "The written accent on yo (-é) and él/ella (-ó) is what separates the past from the present: trabajo (I work) vs. trabajó (he worked). Nosotros (-amos) is the same in both tenses, so a time word (ayer, anoche) does the work.",
        ],
        [
          ["Ayer trabajé ocho horas.","Yesterday I worked eight hours. (-é: yo)"],
          ["Anoche mis padres cenaron tarde.","Last night my parents had dinner late. (mis padres = ellos: -aron)"],
          ["¿Tú ya pagaste la cuenta?","Did you already pay the bill? (-aste, never -astes)"],
        ],
        [
          { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Ayer mi hermana ___ a casa tres veces.", answer: "llamó", en: "Yesterday my sister [called] home three times.", explanation: "Mi hermana = ella, so the -ar ending is -ó with an accent: llamó. Llamo (no accent) would mean \"I call\"." },
          toEs("Yo cocino para mis amigos.", "Yo cociné para mis amigos.", "The yo preterite ending is accented -é: cocino → cociné. The yo is optional.", ["Cociné para mis amigos."], "Change it to the past."),
        ]
      ),
    ],
    [
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Anoche yo ___ la cena.", answer: "preparé", en: "Last night I [prepared] dinner.", explanation: "Yo in the -ar preterite: -é with an accent, preparé." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Anoche tú ___ la cena.", answer: "preparaste", en: "Last night you [prepared] dinner. (tú)", explanation: "Tú in the -ar preterite: -aste, preparaste. No -s at the end." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Anoche nosotros ___ la cena.", answer: "preparamos", en: "Last night we [prepared] dinner.", explanation: "Nosotros -ar: -amos, the same as the present; anoche makes it past." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Anoche mis tíos ___ la cena.", answer: "prepararon", en: "Last night my aunt and uncle [prepared] dinner.", explanation: "Mis tíos = ellos, so -aron: prepararon." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Anoche vosotros ___ la cena.", answer: "preparasteis", en: "Last night you [prepared] dinner. (vosotros)", explanation: "Vosotros -ar preterite: -asteis, preparasteis (used in Spain)." },
      mt("Match the subject with its preterite form of bailar.", [["yo","bailé"],["usted","bailó"],["ustedes","bailaron"],["tú","bailaste"]], "Usted uses the él/ella form (-ó); ustedes uses the ellos form (-aron)."),
      mc("Yesterday we walked in the park: 'Ayer nosotros ___ en el parque.' (caminar)", ["caminamos","caminemos","caminaron","caminé"], 0, "Nosotros preterite of -ar verbs is -amos, the same as the present. \"Caminemos\" is a subjunctive / let's form, \"caminaron\" is ellos, and \"caminé\" is yo."),
      mc("Which one means \"he studied\"?", ["estudió","estudio","estudié","estudia"], 0, "Estudió, accent on the -ó, is él/ella in the preterite. Estudio (no accent) is \"I study\", estudié is \"I studied\", and estudia is \"he studies\"."),
      ms("Which sentences are in the past?", ["Mi jefe habló con los clientes.","Hablo con los clientes.","Ustedes compraron pan.","Usted compra pan.","Anoche cenamos en casa."], [0,2,4], "Habló (-ó) and compraron (-aron) are preterite endings, and anoche makes cenamos past. Hablo and compra are present-tense forms."),
      toEs("Yesterday we walked to the beach.", "Ayer caminamos a la playa.", "Regular -ar verbs take -amos for nosotros in the preterite (same as the present); ayer makes it past: caminamos.", ["Ayer caminamos hasta la playa.","Ayer nosotros caminamos a la playa."]),
      toEs("Ella canta en el coro.", "Ella cantó en el coro.", "Ella in the -ar preterite: -ó with an accent, cantó.", ["Cantó en el coro."], "Change it to the past."),
      toEs("Yo estudié toda la tarde.", "Ellos estudiaron toda la tarde.", "Ellos takes -aron: estudiaron. Only the ending changes; the stem estudi- stays.", ["Estudiaron toda la tarde.","Ellas estudiaron toda la tarde."], "Change to ellos."),
      toEs("Mi hermano preparó el desayuno.", "Tú preparaste el desayuno.", "Tú takes -aste in the preterite: preparaste.", ["Preparaste el desayuno."], "Change to tú."),
      toEs("Nosotros limpiamos la cocina.", "Nosotros limpiamos la cocina ayer.", "Limpiamos is the same in the present and the past; adding a past time word like ayer is how Spanish shows it is preterite.", ["Ayer nosotros limpiamos la cocina.","Ayer limpiamos la cocina.","Limpiamos la cocina ayer."], "Turn it into a past statement by adding \"yesterday\"."),
      toEs("Anoche tú bailastes mucho en la fiesta.", "Anoche tú bailaste mucho en la fiesta.", "The tú preterite ends in -aste with no final -s: bailaste.", ["Anoche bailaste mucho en la fiesta."], "Correct the sentence."),
      toEs("Ayer yo llame a mi madre.", "Ayer yo llamé a mi madre.", "Yo in the -ar preterite needs the accent: llamé. Llame without it is a different form (subjunctive).", ["Ayer llamé a mi madre."], "Correct the sentence."),
      toEs("Ayer mi jefe hablo con los clientes.", "Ayer mi jefe habló con los clientes.", "Mi jefe = él, so -ó with an accent: habló. Hablo means \"I speak\".", undefined, "Correct the sentence."),
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Anoche vosotros ___ hasta muy tarde.", answer: "trabajasteis", en: "Last night you all (Spain) [worked] until very late.", explanation: "Vosotros ending: -asteis, trabajasteis." },
      toEs("Last night my parents watched a movie.", "Anoche mis padres miraron una película.", "Mis padres = ellos, so -aron.", ["Mis padres miraron una película anoche.","Anoche mis padres vieron una película."]),
      toEs("You (formal) bought the tickets yesterday.", "Usted compró los boletos ayer.", "Usted uses the él form: -ó with an accent.", ["Usted compró los billetes ayer.","Ayer usted compró los boletos.","Ayer usted compró los billetes.","Usted compró las entradas ayer.","Ayer usted compró las entradas."]),
      toEs("I rested on Sunday and my friends visited the museum.", "Descansé el domingo y mis amigos visitaron el museo.", "Two people, two endings: descansé (yo, -é) and visitaron (ellos, -aron).", ["El domingo descansé y mis amigos visitaron el museo."]),
      wo("El lunes pasado mi jefe llegó muy temprano.", "Time + subject + preterite + adverb. Llegó: él, -ó.", "Last Monday my boss arrived very early."),
      wo("Ayer mi hermano preparó la cena para todos", "Él form preparó, then the object and 'para todos'.", "Yesterday my brother made dinner for everyone"),
      toEs("Last night you all (Latin America) arrived late and dined at ten.", "Anoche ustedes llegaron tarde y cenaron a las diez.", "Ustedes takes -aron on both verbs.", ["Ustedes llegaron tarde anoche y cenaron a las diez."]),
      { type: "speak", prompt: "Say it in Spanish: On Saturday I worked in the morning, and in the afternoon we swam in the pool.", text: "El sábado trabajé por la mañana y por la tarde nadamos en la piscina.", explanation: "Trabajé (yo, -é) and nadamos (nosotros, -amos: el sábado tells you it's past)." },
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
        "Remember the rule: the stressed ending changes person AND time",
        [
          "Remember the rule: in the preterite the stress jumps to the ending, and the written accent shows it. Hablo (HA-blo, I speak) vs. habló (ha-BLÓ, he spoke). Como (I eat) vs. comió (he ate). One accent changes both who and when.",
          "Nosotros -ar and -ir forms are identical in both tenses (hablamos, vivimos), so a time word decides. -Er verbs do differ: comemos (we eat) vs. comimos (we ate).",
        ],
        [
          ["Hoy hablo con Luis. / Ayer habló con Luis.","Today I'm talking to Luis. / Yesterday he talked to Luis. (accent = past, él)"],
          ["Siempre vivimos aquí. / En 2019 vivimos en Lima.","We always live here. / In 2019 we lived in Lima. (same form: the time decides)"],
          ["Bebemos agua. / Bebimos agua.","We drink water. / We drank water. (-er verbs: -emos vs. -imos)"],
        ],
        [
          mc("Which sentence is in the past?", ["Mi padre cocinó paella.","Mi padre cocina paella.","Yo cocino paella.","Mi padre va a cocinar paella."], 0, "Cocinó, with the accent on -ó, is the él/ella preterite. \"Cocina\" and \"cocino\" are present, and \"va a cocinar\" is the near future."),
          mc("Which form means 'I sing'?", ["canto","cantó","canté","cantamos"], 0, "Canto, stressed on CAN-, is the yo present. Cantó (he sang) and canté (I sang) put the stress on the accented ending, which marks the preterite."),
        ]
      ),
    ],
    [
      mc("«___ con mi abuela todos los domingos.» (habit, now)", ["Hablo","Habló","Hablé","Hablaron"], 0, "Todos los domingos with a current habit takes the present: hablo. \"Habló\" and \"hablé\" are preterite (one past event), and \"hablaron\" is ellos in the past."),
      mc("«Ayer Pedro ___ en casa.» (comer)", ["comió","come","como","comí"], 0, "Ayer calls for the preterite, and él takes -ió for -er verbs: comió. \"Come\" and \"como\" are present, and \"comí\" is yo."),
      mc("«El año pasado vivimos en Madrid.» — Is vivimos past or present here?", ["past","present","future","impossible to say"], 0, "Vivimos looks the same in present and preterite, so the time phrase decides: el año pasado makes it past."),
      mc("Which means 'he spoke'?", ["habló","hablo","hable","hablé"], 0, "Habló, stressed on the last syllable, is él in the preterite. Hablo is \"I speak\", hablé is \"I spoke\", and hable (no accent) is not a preterite form."),
      mc("Which means 'I eat'?", ["como","comió","comí","come"], 0, "Como is present yo, stressed on CO-. Comió is \"he ate\", comí is \"I ate\", and come is \"he eats\"."),
      mc("Yesterday my mother cooked fish: 'Ayer mi madre ___ pescado.' (cocinar)", ["cocinó","cocino","cocina","cocinamos"], 0, "Ayer needs the preterite; mi madre is él/ella: cocinó. Cocino and cocina are present."),
      mc("Every day I take the bus: 'Todos los días ___ el autobús.'", ["tomo","tomó","tomé","tome"], 0, "Todos los días is a present habit, so present yo: tomo. Tomó and tomé would make it one finished past event."),
      ms("Which forms can only be preterite?", ["cantó","bebiste","salieron","cantamos","subimos"], [0,1,2], "Cantó, bebiste and salieron have endings used only in the preterite. Cantamos and subimos (-ar and -ir nosotros) are the same in the present and the preterite, so they need context."),
      toEs("Hoy compro fruta.", "Ayer compré fruta.", "Ayer needs the preterite, and the yo -ar ending is accented -é: compro → compré.", ["Ayer yo compré fruta."], "Change it to yesterday."),
      toEs("Hoy Ana escribe un correo.", "Ayer Ana escribió un correo.", "-Ir verbs take -ió for él/ella in the preterite: escribe → escribió.", undefined, "Change it to yesterday."),
      toEs("Hoy ellos abren la tienda.", "Ayer ellos abrieron la tienda.", "-Er/-ir verbs take -ieron for ellos in the preterite: abren → abrieron.", ["Ayer abrieron la tienda."], "Change it to yesterday."),
      toEs("Hoy bebemos limonada.", "Ayer bebimos limonada.", "-Er verbs DO change in nosotros: bebemos (present) → bebimos (preterite). Only -ar and -ir nosotros forms stay the same.", ["Ayer nosotros bebimos limonada."], "Change it to yesterday."),
      toEs("Ayer Luis llega a las nueve.", "Ayer Luis llegó a las nueve.", "Ayer points to a finished event, so él needs the preterite with its accent: llegó, not the present llega.", undefined, "Correct the sentence."),
      toEs("El domingo pasado comemos con mi abuela.", "El domingo pasado comimos con mi abuela.", "With a past time phrase, -er verbs need the preterite -imos: comimos. Comemos is the present.", ["El domingo pasado nosotros comimos con mi abuela."], "Correct the sentence."),
      toEs("Ayer yo trabajo en la oficina.", "Ayer yo trabajé en la oficina.", "Ayer + yo → preterite -é with an accent: trabajé. Trabajo is the present.", ["Ayer trabajé en la oficina."], "Correct the sentence."),
      toEs("I study every day.", "Estudio todos los días.", "A present habit: estudio (no accent). Estudió would be \"he studied\".", ["Todos los días estudio."]),
      toEs("He studied yesterday.", "Estudió ayer.", "Past, él form: estudió with an accent on the o.", ["Ayer estudió.","Él estudió ayer.","Ayer él estudió."]),
      toEs("She ran this morning.", "Corrió esta mañana.", "A finished action this morning: corrió, with -ió and an accent. Corre would be the present.", ["Esta mañana corrió.","Ella corrió esta mañana."]),
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Hoy trabajo en casa, pero ayer ___ en la oficina.", answer: "trabajé", en: "Today I work at home, but yesterday I [worked] at the office.", explanation: "Ayer signals the preterite: trabajé, not trabajo." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Ahora vivimos en Quito, pero en 2020 ___ en Lima.", answer: "vivimos", en: "Now we live in Quito, but in 2020 we [lived] in Lima.", explanation: "Nosotros -imos is the same in both tenses for -ir verbs; en 2020 makes it past." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Siempre compro pan aquí. Ayer también ___ leche.", answer: "compré", en: "I always buy bread here. Yesterday I also [bought] milk.", explanation: "Past yo: compré. Compro would be present." },
      toEs("Last night we ate at a Mexican restaurant.", "Anoche comimos en un restaurante mexicano.", "-er verbs in nosotros change in the preterite: comimos, not comemos.", ["Comimos en un restaurante mexicano anoche."]),
      toEn("Mi hermano estudió medicina en Chile.", "My brother studied medicine in Chile.", "Estudió (accent on the ó) is the él preterite of estudiar: he studied, not \"I study\"."),
      toEn("Mi hermano abrió la tienda.", "My brother opened the store.", "Abrió (accent, -ió) is preterite: \"opened\", not \"opens\".", ["My brother opened the shop."]),
      wo("Hoy escribo yo, pero ayer escribió Marta", "Escribo = I write (now), escribió = she wrote.", "Today I'm writing, but yesterday Marta wrote"),
      toEs("I always pay, but yesterday my friend paid.", "Siempre pago yo, pero ayer pagó mi amigo.", "Pago (present yo) vs. pagó (preterite él): the accent changes person and time.", ["Siempre pago, pero ayer pagó mi amigo.","Siempre pago yo, pero ayer mi amigo pagó.","Siempre pago, pero ayer mi amigo pagó.","Yo siempre pago, pero ayer mi amigo pagó.","Yo siempre pago, pero ayer pagó mi amigo."]),
      { type: "speak", prompt: "Say it in Spanish: I usually walk to work, but yesterday I took a taxi.", text: "Normalmente camino al trabajo, pero ayer tomé un taxi.", explanation: "Camino (present habit, stress on MI) vs. tomé (one finished event, stress on the accented -é)." },
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
        "Remember the rule: only yo changes, to keep the sound",
        [
          "Remember the rule: yo is the only preterite form ending in -é, and before e the letters c, g and z would change their sound. So the spelling adjusts: -car → -qué (buscar → busqué), -gar → -gué (pagar → pagué), -zar → -cé (empezar → empecé).",
          "Every other person keeps the normal spelling, because -aste, -ó, -amos and -aron don't start with e: buscó, pagaste, empezaron.",
        ],
        [
          ["Llegué tarde y pagué el taxi.","I arrived late and paid for the taxi. (two -gar verbs: gu before é)"],
          ["Mi hermano llegó a tiempo.","My brother arrived on time. (él: no change)"],
          ["Esta mañana comencé un libro nuevo.","This morning I started a new book. (comenzar: z → c)"],
        ],
        [
          { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Anoche ___ la guitarra.", answer: "toqué", en: "Last night I [played] the guitar.", explanation: "Tocar ends in -car: before -é the c becomes qu to keep the k sound, toqué." },
          mc("Navegar (to sail, to browse) is new. Which yo preterite is right?", ["navegué","navegé","navegó","navegue"], 0, "-Gar verb, yo form: add u to keep the hard g before é, navegué. \"Navegé\" would sound like na-ve-HÉ; navegó is él/ella."),
        ]
      ),
    ],
    [
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Ayer ___ al fútbol con mis amigos.", answer: "jugué", en: "Yesterday I [played] soccer with my friends.", explanation: "Jugar → jugué: g becomes gu before é." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Esta mañana ___ a trabajar a las ocho.", answer: "empecé", en: "This morning I [started] work at eight.", explanation: "Empezar → empecé: z becomes c before é." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "___ las llaves por toda la casa.", answer: "Busqué", en: "I [looked for] the keys all over the house.", explanation: "Buscar → busqué: c becomes qu before é." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Mi padre ___ la cuenta del restaurante.", answer: "pagó", en: "My father [paid] the restaurant bill.", explanation: "Él form: -ó, no spelling change (only yo changes): pagó." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Los niños ___ a jugar a las cinco.", answer: "empezaron", en: "The children [started] playing at five.", explanation: "Ellos form: -aron, no spelling change: empezaron." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Anoche ___ la televisión a las once.", answer: "apagué", en: "Last night I [turned off] the TV at eleven.", explanation: "Apagar → apagué in the yo form (g → gu before é)." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Tú ___ temprano, ¿verdad?", answer: "llegaste", en: "You [arrived] early, right?", explanation: "Tú is regular: llegaste. No u needed, because the next vowel is a, not e." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Nosotros ___ a las dos.", answer: "almorzamos", en: "We [had lunch] at two.", explanation: "Only yo changes; nosotros stays almorzamos (z before a is fine)." },
      mc("Which is spelled correctly?", ["almorcé","almorzé","almorsé","almorqué"], 0, "In the yo preterite, -zar verbs change z → c before é: almorcé. \"Almorzé\" keeps z (Spanish doesn't write ze here), \"almorsé\" uses s, and \"almorqué\" uses the -car change."),
      ms("Which yo forms are correct?", ["saqué","llegué","crucé","pagé"], [0,1,2], "Saqué, llegué and crucé are correct yo spelling changes (c → qu, g → gu, z → c). \"Pagé\" misses the u: pagar → pagué."),
      mc("Which yo form is correct?", ["toqué","tocé","toqúe","toque"], 0, "Tocar: c → qu, plus the accent on the final e: toqué."),
      mc("Which él/ella form is correct for explicar?", ["explicó","expliqué","expliquó","explicé"], 0, "Only yo changes: él/ella explicó keeps the c, because c before o already sounds like k. Expliqué is yo."),
      toEs("Él buscó las llaves.", "Yo busqué las llaves.", "Yo brings in -é, so c → qu: busqué.", ["Busqué las llaves."], "Change to yo."),
      toEs("Ella llegó tarde.", "Yo llegué tarde.", "Yo brings in -é, so g → gu: llegué.", ["Llegué tarde."], "Change to yo."),
      toEs("Mi hermano empezó a correr.", "Yo empecé a correr.", "Yo brings in -é, so z → c: empecé.", ["Empecé a correr."], "Change to yo."),
      toEs("Ustedes sacaron muchas fotos.", "Yo saqué muchas fotos.", "Yo of sacar: saqué (c → qu before é).", ["Saqué muchas fotos."], "Change to yo."),
      toEs("Yo expliqué el problema.", "La profesora explicó el problema.", "Él/ella has -ó, so the c comes back: explicó.", undefined, "Change to la profesora."),
      toEs("Esta mañana cruzé la calle sin mirar.", "Esta mañana crucé la calle sin mirar.", "Cruzar → crucé: z is not written before e, so it becomes c.", undefined, "Correct the sentence."),
      toEs("Ayer jugé en el parque con mi perro.", "Ayer jugué en el parque con mi perro.", "Jugar → jugué; \"jugé\" is a common slip. The u keeps the hard g.", undefined, "Correct the sentence."),
      toEs("Mi madre pagué la luz.", "Mi madre pagó la luz.", "Mi madre = ella: pagó. Pagué is the yo form.", undefined, "Correct the sentence."),
      toEs("Ayer almorzé con mis padres.", "Ayer almorcé con mis padres.", "Z is not written before e: almorzar → almorcé.", undefined, "Correct the sentence."),
      toEs("I explained the problem.", "Expliqué el problema.", "Explicar → expliqué (c → qu before é)."),
      toEs("I took out the money and you (tú) paid.", "Saqué el dinero y tú pagaste.", "Saqué changes c → qu (yo); pagaste doesn't change (tú)."),
      toEs("I arrived at nine and started to work.", "Llegué a las nueve y empecé a trabajar.", "Two yo spelling changes: llegar → llegué (g → gu) and empezar → empecé (z → c).", ["Llegué a las nueve y comencé a trabajar."]),
      wo("Yo llegué a las ocho y empecé a estudiar", "Two spelling-change yo forms: llegué, empecé.", "I arrived at eight and started to study"),
      toEs("I practiced the guitar and later I played soccer.", "Practiqué la guitarra y después jugué al fútbol.", "Practiqué (c → qu) and jugué (g → gu).", ["Practiqué la guitarra y luego jugué al fútbol.","Practiqué la guitarra y después jugué fútbol.","Practiqué la guitarra y luego jugué fútbol."]),
      { type: "speak", prompt: "Say it in Spanish, fast: I looked for, I arrived, I started, I paid, I touched.", text: "Busqué, llegué, empecé, pagué, toqué.", explanation: "All five are yo forms with the sound-saving spelling: qu, gu, c, gu, qu before the stressed -é." },
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
        "Remember the rule: the verb is fixed first, the rest just grows",
        [
          "Remember the rule: the preterite ending is decided by WHO acted, so once the verb is right it never changes, however long the sentence gets. Verb → object → place → time: Visité → Visité a mi tía → Visité a mi tía en Sevilla → El sábado visité a mi tía en Sevilla.",
          "Two traps when the sentence grows: a person as the object needs the personal a (visité a mi tía), and a compound subject with yo (mi hermana y yo) is nosotros.",
        ],
        [
          ["Comimos. → Comimos paella. → Comimos paella en la playa.","We ate. → We ate paella. → We ate paella on the beach. (comimos never changes)"],
          ["Mi hermana y yo viajamos a Lima en marzo.","My sister and I traveled to Lima in March. (mi hermana y yo = nosotros)"],
        ],
        [
          mc("Which is the fully built sentence?", ["El domingo mis primos corrieron en el parque.","Corrieron.","Mis primos corrieron.","En el parque."], 0, "The full sentence has time + subject + verb + place. \"Corrieron\", \"Mis primos corrieron\" and \"En el parque\" are fragments missing pieces."),
          toEs("Mi padre y yo pescó en el río.", "Mi padre y yo pescamos en el río.", "Mi padre y yo = nosotros, so the verb needs -amos: pescamos. Pescó would be él alone.", undefined, "Correct the sentence."),
        ]
      ),
    ],
    [
      toEs("Bailamos.", "Bailamos salsa.", "Step 2: add the object. The verb stays exactly the same.", undefined, "Make it longer: add \"salsa\"."),
      toEs("Bailamos salsa.", "Bailamos salsa en la fiesta.", "Step 3: add the place after the object.", undefined, "Make it longer: add \"at the party\"."),
      toEs("Bailamos salsa en la fiesta.", "El sábado bailamos salsa en la fiesta.", "Step 4: time first. Days take el, not en: el sábado.", ["Bailamos salsa en la fiesta el sábado."], "Make it longer: add \"on Saturday\"."),
      toEs("Visité.", "Visité a mi primo.", "A person as the object needs the personal a: visité a mi primo.", ["Visité a mi prima."], "Make it longer: add \"my cousin\"."),
      toEs("Yo cociné una pizza.", "Mi hermana cocinó una pizza.", "Changing the subject is the only thing that moves the ending: yo cociné → ella cocinó.", undefined, "Change the subject to mi hermana."),
      toEs("Mis padres nadaron en el lago.", "Mis padres y yo nadamos en el lago.", "Adding yo to the subject makes it nosotros: nadamos.", undefined, "Change the subject to \"my parents and I\"."),
      wo("El sábado escribí una carta a mi abuela.", "Time + verb + object + recipient.", "On Saturday I wrote a letter to my grandmother."),
      wo("Anoche mis vecinos celebraron el cumpleaños de su hija.", "Time + subject + verb + object.", "Last night my neighbors celebrated their daughter's birthday."),
      wo("El viernes pasado salimos a cenar con unos amigos.", "Time + verb + purpose + company.", "Last Friday we went out to dinner with some friends."),
      wo("El sábado mi novio y yo caminamos por la playa", "Time, compound subject (= nosotros), verb, place.", "On Saturday my boyfriend and I walked along the beach"),
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "En el viaje ___ muchas palabras nuevas.", answer: "aprendimos", en: "On the trip we [learned] lots of new words.", explanation: "Aprender is -er; nosotros in the preterite is -imos: aprendimos (the present would be aprendemos)." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Mi madre ___ un paquete de Italia.", answer: "recibió", en: "My mother [received] a package from Italy.", explanation: "Recibir is -ir; él/ella takes -ió: recibió." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "¿___ tú la película de anoche?", answer: "Miraste", en: "Did you [watch] the movie last night? (tú)", altAnswers: ["Viste"], explanation: "Mirar is -ar; tú takes -aste: miraste." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Anoche tú ___ en un concierto, ¿no?", answer: "cantaste", en: "Last night you [sang] at a concert, didn't you?", explanation: "Tú form of an -ar verb: -aste, with no final -s." },
      mc("Which sentence grew correctly from «Visité a mi tía»?", ["El domingo visité a mi tía en Toledo.","El domingo visitó a mi tía en Toledo.","El domingo visité mi tía en Toledo.","En domingo visité a mi tía en Toledo."], 0, "The verb stays visité and the personal a stays. Visitó changes the person, \"visité mi tía\" drops the a, and days take el, not en."),
      mc("«Mis amigos y yo ___ una pizza enorme.» (pedir is irregular, so use comer)", ["comimos","comieron","comí","comemos"], 0, "Mis amigos y yo = nosotros, and in the past -er verbs take -imos: comimos. Comieron leaves you out, comí leaves them out, and comemos is the present."),
      toEs("El sábado visité mi abuela en el hospital.", "El sábado visité a mi abuela en el hospital.", "A specific person as the direct object needs the personal a: visité a mi abuela.", undefined, "Correct the sentence."),
      toEs("En sábado compramos ropa en el centro.", "El sábado compramos ropa en el centro.", "Days of the week take the article el (on Saturday = el sábado), never en.", ["Compramos ropa en el centro el sábado."], "Correct the sentence."),
      toEs("On Sunday I visited my cousin in Toledo.", "El domingo visité a mi primo en Toledo.", "Verb + object + place + time; the personal a stays.", ["El domingo visité a mi prima en Toledo.","Visité a mi primo en Toledo el domingo."]),
      toEs("On Sunday I cleaned the house and cooked for my family.", "El domingo limpié la casa y cociné para mi familia.", "Regular -ar verbs take accented -é in the yo preterite: limpié, cociné.", ["El domingo yo limpié la casa y cociné para mi familia."]),
      toEs("On Saturday you (tú) bought a new jacket downtown.", "El sábado compraste una chaqueta nueva en el centro.", "Tú: -aste. Time can also go at the end.", ["Compraste una chaqueta nueva en el centro el sábado."]),
      toEs("Last weekend my neighbors cleaned the garden.", "El fin de semana pasado mis vecinos limpiaron el jardín.", "Mis vecinos = ellos: limpiaron.", ["Mis vecinos limpiaron el jardín el fin de semana pasado."]),
      toEs("On Sunday my family and I ate paella at a restaurant by the sea.", "El domingo mi familia y yo comimos paella en un restaurante junto al mar.", "Mi familia y yo = nosotros: comimos.", ["El domingo mi familia y yo comimos paella en un restaurante cerca del mar.","Mi familia y yo comimos paella en un restaurante junto al mar el domingo."]),
      toEn("El sábado mis amigos y yo nadamos en el lago.", "On Saturday my friends and I swam in the lake.", "Nadamos is nosotros; with el sábado it's preterite (swam). Mis amigos y yo = nosotros.", ["Last Saturday my friends and I swam in the lake."]),
      wo("Anoche mis amigos cenaron en un restaurante italiano", "Time, subject, verb, place.", "Last night my friends had dinner at an Italian restaurant"),
      { type: "speak", prompt: "Build it aloud in three steps: \"I bought.\" → \"I bought flowers.\" → \"On Friday I bought flowers at the market.\"", text: "Compré. Compré flores. El viernes compré flores en el mercado.", explanation: "Compré is fixed from the first step; each step only adds the object, then the time and place." },
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
        "Remember the rule: three families, one set of endings",
        [
          "Remember the rule: irregular preterites swap the stem, then all share -e, -iste, -o, -imos, -isteis, -ieron, with no accents. Sorting the stems by their vowel makes them easy to recall.",
          "U-group: tener → tuv-, estar → estuv-, poder → pud-, poner → pus-. I-group: hacer → hic- (hizo), querer → quis-, venir → vin-. J-group: decir → dij-, traer → traj-, and after j the ellos ending is -eron: dijeron, trajeron.",
        ],
        [
          ["Tuve que trabajar el sábado.","I had to work on Saturday. (U: tuv-)"],
          ["Vinimos en tren.","We came by train. (I: vin-)"],
          ["Ellos trajeron la comida.","They brought the food. (J: -eron)"],
        ],
        [
          mc("Which group does poner belong to?", ["U-group (pus-)","I-group","J-group","regular"], 0, "Poner has the u-stem pus- in the preterite: puse, pusiste, puso. It's not in the i-group (quis-, hic-), the j-group (dij-, traj-), and it's not regular."),
          mc("Conducir (to drive) belongs to the J-group: conduj-. \"They drove\" is:", ["condujeron","condujieron","conducieron","condujaron"], 0, "J-group verbs drop the i in the ellos ending: conduj- + -eron = condujeron, just like dijeron and trajeron."),
        ]
      ),
    ],
    [
      mt("Match the infinitive with its preterite stem.", [["estar","estuv-"],["querer","quis-"],["traer","traj-"],["poder","pud-"]], "U-group: estuv-, pud-. I-group: quis-. J-group: traj-."),
      mc("Which group does traer belong to?", ["J-group (traj-)","U-group","I-group","regular"], 0, "Traer → traje, trajo, trajeron: the j-stem, with -eron for ellos."),
      mc("Which group does venir belong to?", ["I-group (vin-)","U-group","J-group","regular"], 0, "Venir → vine, vino, vinieron: the i-stem vin-."),
      ms("Which forms are correct?", ["estuvimos","quisieron","trajieron","tuvo"], [0,1,3], "Estuvimos, quisieron and tuvo are correct. \"Trajieron\" is wrong: after the j stem, the ending is -eron, so trajeron."),
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Ayer yo no ___ ir a clase.", answer: "pude", en: "Yesterday I [couldn't] go to class.", explanation: "U-group: pud- + -e, pude." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "¿Dónde ___ tú las llaves?", answer: "pusiste", en: "Where [did you put] the keys? (tú)", explanation: "U-group: pus- + -iste, pusiste." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Mi hermana ___ a la fiesta con su novio.", answer: "vino", en: "My sister [came] to the party with her boyfriend.", explanation: "I-group: vin- + -o, vino (no accent)." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Mis padres me ___ la verdad.", answer: "dijeron", en: "My parents [told] me the truth.", explanation: "J-group ellos: -eron, not -ieron, dijeron." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "¿Qué ___ ustedes el fin de semana?", answer: "hicieron", en: "What [did you do] over the weekend? (ustedes)", explanation: "I-group: hic- + -ieron, hicieron." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Ayer nosotros ___ en el museo dos horas.", answer: "estuvimos", en: "Yesterday we [were] at the museum for two hours.", explanation: "U-group: estuv- + -imos." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Mi madre ___ un pastel para la fiesta.", answer: "hizo", en: "My mother [made] a cake for the party.", explanation: "Hacer: hizo, with z to keep the soft sound before o, not \"hico\"." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Vosotros ___ la verdad.", answer: "dijisteis", en: "You all (Spain) [told] the truth.", explanation: "J-group: dij- + -isteis. Only the ellos form loses the i." },
      toEs("Tengo que esperar.", "Tuve que esperar.", "U-group: tuv- + -e. Tener que keeps its que + infinitive.", ["Yo tuve que esperar."], "Change it to the past."),
      toEs("Traigo el pan.", "Traje el pan.", "J-group: traj- + -e, traje.", ["Yo traje el pan."], "Change it to the past."),
      toEs("Ella pone la mesa.", "Ella puso la mesa.", "U-group: pus- + -o, puso (no accent).", ["Puso la mesa."], "Change it to the past."),
      toEs("Mis primos vienen en avión.", "Mis primos vinieron en avión.", "I-group: vin- + -ieron.", undefined, "Change it to the past."),
      toEs("¿Trajiste los pasaportes?", "¿Trajeron los pasaportes?", "J-group ellos/ustedes: traj- + -eron, no i.", ["¿Ustedes trajeron los pasaportes?","¿Trajeron ustedes los pasaportes?"], "Change to ustedes."),
      toEs("Los niños no quisó comer la sopa.", "Los niños no quisieron comer la sopa.", "Los niños = ellos, so quis- + -ieron. Also, irregular preterites never take a written accent: quiso, not quisó.", undefined, "Correct the sentence."),
      toEs("Ayer hací un pastel de chocolate.", "Ayer hice un pastel de chocolate.", "Hacer is an I-group verb: hic- + -e, hice. \"Hací\" puts regular endings on the infinitive stem.", undefined, "Correct the sentence."),
      toEs("Mis amigos dijieron que no.", "Mis amigos dijeron que no.", "After a j-stem the ellos ending is -eron: dijeron.", undefined, "Correct the sentence."),
      toEs("We had to wait an hour.", "Tuvimos que esperar una hora.", "Tener que in the preterite: tuvimos que + infinitive.", ["Tuvimos que esperar una hora entera."]),
      wo("Mi hermano puso la mesa y yo hice la cena", "Puso (U-group) and hice (I-group); no accents on the endings.", "My brother set the table and I made dinner"),
      toEs("I put the suitcase in the car and I said goodbye.", "Puse la maleta en el coche y dije adiós.", "Puse (U-group) and dije (J-group); no accents on the endings.", ["Puse la maleta en el carro y dije adiós.","Puse la maleta en el auto y dije adiós.","Puse la maleta en el coche y me despedí."]),
      toEs("We tried to go out, but we had to study.", "Quisimos salir, pero tuvimos que estudiar.", "Quisimos (I-group) and tuvimos (U-group). In the preterite, querer + infinitive means you wanted to and tried.", ["Intentamos salir, pero tuvimos que estudiar."]),
      { type: "speak", prompt: "Say it in Spanish: My friends came, they brought a cake and they said \"happy birthday\".", text: "Mis amigos vinieron, trajeron un pastel y dijeron «feliz cumpleaños».", explanation: "One from each group: vinieron (I), trajeron and dijeron (J: -eron, no i)." },
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
        "Remember the rule: same form, the context decides",
        [
          "Remember the rule: fui, fuiste, fue, fuimos, fuisteis, fueron belong to BOTH ser and ir. You never have to pick a form, only to understand it.",
          "The test: a destination with a / adónde (fui a Roma, ¿adónde fuiste?) → ir, \"went\". A description, profession or evaluation (fue difícil, fue presidente, ¿cómo fue?) → ser, \"was\". Neither form ever takes a written accent.",
        ],
        [
          ["Fuimos al cine.","We went to the movies. (a + place: ir)"],
          ["La película fue muy buena.","The movie was very good. (evaluation: ser)"],
          ["Mi tía fue alcaldesa del pueblo.","My aunt was the town's mayor. (a role: ser)"],
        ],
        [
          mc("«El examen fue fácil.» Which verb?", ["ser","ir","both","neither"], 0, "Fue + an adjective (fácil) is an evaluation, so ser. Ir needs a destination, so it's not \"both\" or \"neither\"."),
          toEs("Voy al gimnasio.", "Fui al gimnasio.", "Voy (ir, present) → fui. Al gimnasio is a destination, so this fui is ir.", ["Yo fui al gimnasio."], "Change it to the past."),
        ]
      ),
    ],
    [
      mc("«¿Adónde fuiste ayer?» Which verb?", ["ir","ser","estar","hacer"], 0, "Adónde asks for a destination, so fuiste is ir. Estar and hacer have other forms (estuviste, hiciste)."),
      mc("«Mi abuelo fue médico durante cuarenta años.» Which verb?", ["ser","ir","tener","poder"], 0, "Being a doctor is a profession, so ser. Ir shares the form fue, but \"ir médico\" makes no sense, and tener and poder have other forms (tuvo, pudo)."),
      mc("«Fueron a la playa en coche.» Which verb?", ["ir","ser","estar","venir"], 0, "A la playa is a destination, so fueron is ir. Estar would be estuvieron, and venir vinieron."),
      mc("«Fui a la playa con mis primos.» Which verb?", ["ir","ser","both","estar"], 0, "Fui + a + a place = went (ir)."),
      mc("«Mi madre fue profesora.» Which verb?", ["ser","ir","both","estar"], 0, "A profession after fue = was (ser)."),
      mc("«La cena fue deliciosa.» Which verb?", ["ser","ir","both","hacer"], 0, "An evaluation (deliciosa) = was: ser."),
      mc("A friend asks «¿Cómo fue la boda?». What do they want to know?", ["How the wedding was","How you got to the wedding","Where the wedding was","When the wedding was"], 0, "¿Cómo fue...? with an event is ser: \"how was it?\". To ask how you got there you'd say ¿cómo fuiste?, about you, not the wedding."),
      ms("In which sentences is the verb ir?", ["Fuimos a Toledo en tren.","Fuimos compañeros de clase.","¿Adónde fueron ustedes?","Fue un viaje largo."], [0,2], "A Toledo and adónde point to a destination: ir. Compañeros de clase (what we were) and un viaje largo (a description) are ser."),
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "La fiesta ___ increíble.", answer: "fue", en: "The party [was] amazing.", explanation: "An evaluation of the party: ser, fue." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "¿Tú ___ al médico el lunes?", answer: "fuiste", en: "[Did you go] to the doctor on Monday? (tú)", explanation: "Al médico is a destination: ir, fuiste." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Nosotros ___ compañeros de clase en 2015.", answer: "fuimos", en: "We [were] classmates in 2015.", explanation: "Fuimos + a noun (compañeros) = we were (ser)." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Tú ___ el mejor jugador del partido.", answer: "fuiste", en: "You [were] the best player of the game.", explanation: "Fuiste + description = you were (ser)." },
      toEs("Es un día largo.", "Fue un día largo.", "Es (ser, present) → fue. The past of ser and ir is the same, but here it describes the day, so it means \"was\".", undefined, "Change it to the past."),
      toEs("Mis padres van a México.", "Mis padres fueron a México.", "Van (ir) → fueron: ellos, destination.", ["Fueron a México."], "Change it to the past."),
      toEs("Yo fui al banco.", "Nosotros fuimos al banco.", "Nosotros: fuimos. The destination tells you it's ir.", ["Fuimos al banco."], "Change to nosotros."),
      toEs("El examen es difícil.", "El examen fue difícil.", "Es → fue: an evaluation of a finished event uses the preterite of ser.", undefined, "Change it to the past."),
      toEs("Ayer yo fue al supermercado.", "Ayer yo fui al supermercado.", "Yo takes fui; fue is él/ella/usted.", ["Ayer fui al supermercado."], "Correct the sentence."),
      toEs("Mis amigos fuieron a la playa.", "Mis amigos fueron a la playa.", "The ellos form is fueron, with no i before the e.", undefined, "Correct the sentence."),
      toEs("La cena fué deliciosa.", "La cena fue deliciosa.", "Fue is one syllable and has no accent twin, so it never takes a written accent.", undefined, "Correct the sentence."),
      toEs("I went to the market and it was a disaster.", "Fui al mercado y fue un desastre.", "Fui al mercado is ir (destination), and fue un desastre is ser (evaluation): the same forms, two verbs.", ["Fui al mercado y fue un desastre total."]),
      toEs("Did you (tú) go to the party? How was it?", "¿Fuiste a la fiesta? ¿Cómo fue?", "Fuiste a = ir; ¿cómo fue? = how was it (ser)."),
      toEn("El viaje fue largo, pero fuimos muy felices.", "The trip was long, but we were very happy.", "Both fue and fuimos are ser here: descriptions, no destination.", ["The journey was long, but we were very happy."]),
      wo("Mi abuelo fue médico y fue a muchos países", "First fue = was (profession); second fue a = went.", "My grandfather was a doctor and went to many countries"),
      toEs("The trip was expensive, but I went with my best friend.", "El viaje fue caro, pero fui con mi mejor amiga.", "Fue caro (ser) + fui con (ir: going somewhere with someone).", ["El viaje fue caro, pero fui con mi mejor amigo."]),
      toEs("You all (Latin America) went to the museum and it was very interesting.", "Ustedes fueron al museo y fue muy interesante.", "Fueron al museo = ir (destination); fue muy interesante = ser (evaluation).", ["Fueron al museo y fue muy interesante."]),
      { type: "speak", prompt: "Answer aloud in Spanish: ¿Adónde fuiste en tus últimas vacaciones y cómo fue? (Say you went to the mountains and it was very relaxing.)", text: "Fui a las montañas y fue muy relajante.", explanation: "Fui a las montañas = ir (destination); fue muy relajante = ser (evaluation). Same family of forms, two meanings." },
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
        "Remember the rule, then hunt",
        [
          "Remember the rule: irregular verbs don't take regular preterite endings on their infinitive stem. They swap in a new stem (tuv-, hic-, pus-, estuv-, dij-, traj-...) and take -e, -iste, -o, -imos, -isteis, -ieron, with no accents. After j, ellos is -eron.",
          "So the typical learner mistake is a \"regularized\" irregular: ✗ tení → tuve, ✗ hací → hice, ✗ poní → puse, ✗ esté → estuve, ✗ decieron → dijeron, ✗ trajieron → trajeron. Here is the diary to fix: «El sábado tení una fiesta. Hací una tarta y mis amigos trajieron bebidas. Todos decieron que la tarta estaba rica.»",
        ],
        [
          ["✗ Hací una tarta. → ✓ Hice una tarta.","I made a cake. (hic- + -e)"],
          ["✗ Decieron que… → ✓ Dijeron que…","They said that… (dij- + -eron)"],
        ],
        [
          toEs("El sábado tení una fiesta.", "El sábado tuve una fiesta.", "Tener has the stem tuv- and an unaccented -e: tuve, not tení.", undefined, "Correct the sentence."),
          toEs("Mis amigos trajieron bebidas.", "Mis amigos trajeron bebidas.", "After the j-stem traj-, the ellos ending is -eron: trajeron.", undefined, "Correct the sentence."),
        ]
      ),
    ],
    [
      fb("Fix it.", "___ una tarta de chocolate. (the diary says: Hací)", "Hice", "Hacer has the stem hic- and an unaccented -e: hice, not hací."),
      fb("Fix it.", "Todos ___ que la tarta estaba rica. (the diary says: decieron)", "dijeron", "Decir has the stem dij-, and after j the ending is -eron: dijeron, not decieron."),
      fb("Fix it.", "Yo ___ la mesa en el jardín. (the diary says: poní)", "puse", "Poner has the stem pus- and an unaccented -e: puse, not poní."),
      fb("Fix it.", "Mis primos no ___ venir. (the diary says: podieron)", "pudieron", "Poder has the stem pud-: pudieron, not podieron."),
      fb("Fix it.", "Mi abuela ___ en el hospital una semana. (the diary says: estó)", "estuvo", "Estar has the stem estuv- and an unaccented -o: estuvo, not estó."),
      toEs("Ayer estí en la biblioteca toda la tarde.", "Ayer estuve en la biblioteca toda la tarde.", "Estar → estuv- + -e: estuve.", undefined, "Correct the sentence."),
      toEs("Mi hermana venió a casa a las diez.", "Mi hermana vino a casa a las diez.", "Venir → vin- + -o: vino.", undefined, "Correct the sentence."),
      toEs("Nosotros hacimos una cena para veinte personas.", "Nosotros hicimos una cena para veinte personas.", "Hacer → hic- + -imos: hicimos.", ["Hicimos una cena para veinte personas."], "Correct the sentence."),
      toEs("Tú teniste razón.", "Tú tuviste razón.", "Tener razón = to be right; tener → tuv- + -iste, tuviste.", ["Tuviste razón."], "Correct the sentence."),
      mc("Which sentence has no mistakes?", ["Quisimos llegar temprano, pero no pudimos.","Querimos llegar temprano, pero no podimos.","Quisimos llegar temprano, pero no podemos ayer.","Quiseron llegar temprano."], 0, "Querer → quisimos and poder → pudimos. \"Querimos\" and \"podimos\" use regular stems, \"podemos ayer\" is present with a past time word, and \"quiseron\" uses the wrong ending (it's quisieron)."),
      mc("Which sentence has no mistakes?", ["Hizo frío y estuvimos en casa.","Hació frío y estuvimos en casa.","Hizo frío y estamos en casa ayer.","Hizo frío y estumos en casa."], 0, "Hacer → hizo; estar → estuvimos. \"Hació\" regularizes hacer, \"estamos... ayer\" is present, and \"estumos\" loses part of the stem."),
      ms("Which forms are wrong?", ["vení","vine","hizo","hació"], [0,3], "\"Vení\" and \"hació\" are wrong: venir → vine and hacer → hizo. \"Vine\" and \"hizo\" are correct."),
      mc("Which form is correct?", ["vinieron","venieron","vinaron","vinyeron"], 0, "Venir → vin- + -ieron. \"Venieron\" keeps the regular stem, \"vinaron\" uses an -ar ending."),
      mc("Satisfacer (to satisfy) is built on hacer. Which yo preterite follows the pattern?", ["satisfice","satisfací","satisfacé","satisfizo"], 0, "Verbs built on hacer copy its preterite: hice → satisfice, hizo → satisfizo. Satisfizo is él/ella, not yo."),
      toEs("Mi madre puso las flores en la mesa.", "Yo puse las flores en la mesa.", "Yo of poner: pus- + -e, puse (not \"poní\").", ["Puse las flores en la mesa."], "Change to yo."),
      toEs("Yo no pude abrir la puerta.", "Nosotros no pudimos abrir la puerta.", "Nosotros of poder: pud- + -imos, pudimos (not \"podimos\").", ["No pudimos abrir la puerta."], "Change to nosotros."),
      toEs("Mi tío dijo que la fiesta fue divertida.", "Mis tíos dijeron que la fiesta fue divertida.", "Ellos of decir: dij- + -eron, dijeron (not \"decieron\").", ["Mis tíos dijeron que la fiesta estuvo divertida."], "Change the subject to mis tíos."),
      toEs("I had a great day.", "Tuve un día genial.", "Not tení: tener → tuve.", ["Tuve un día estupendo.","Tuve un día muy bueno."]),
      toEs("My parents brought presents for everyone.", "Mis padres trajeron regalos para todos.", "Not traeron: traer → traj- + -eron, trajeron."),
      toEs("My friends brought music and we danced all night.", "Mis amigos trajeron música y bailamos toda la noche.", "Traer is irregular (trajeron), and bailar is regular (bailamos for nosotros).", ["Mis amigos trajeron música y nosotros bailamos toda la noche."]),
      wo("El domingo vine tarde y no traje nada", "Vine (not vení) and traje (not traí).", "On Sunday I came late and didn't bring anything"),
      toEs("I made a cake, but my brother didn't want to eat it.", "Hice un pastel, pero mi hermano no quiso comerlo.", "Hice (not hací); quiso (not querió).", ["Hice una tarta, pero mi hermano no quiso comerla.","Hice un pastel, pero mi hermano no lo quiso comer.","Hice una tarta, pero mi hermano no la quiso comer."]),
      toEs("On Saturday I was sick and I couldn't do anything.", "El sábado estuve enfermo y no pude hacer nada.", "Estuve and pude: irregular stems with no accent.", ["El sábado estuve enferma y no pude hacer nada."]),
      toEs("Ayer yo no querí ir a la fiesta.", "Ayer yo no quise ir a la fiesta.", "Querer → quis- + -e: quise. In the preterite, no quise means \"I refused\".", ["Ayer no quise ir a la fiesta."], "Correct the sentence."),
      { type: "speak", prompt: "Read the fixed diary aloud in Spanish: On Saturday I had a party. I made a cake, and my friends brought drinks.", text: "El sábado tuve una fiesta. Hice una tarta y mis amigos trajeron bebidas.", explanation: "Tuve (tuv-), hice (hic-), trajeron (traj- + -eron): the three fixes from the diary." },
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
        "Remember the rule: mirror the person, keep the stem",
        [
          "Remember the rule: answers mirror questions. A tú question gets a yo answer (¿Pudiste? → Pude); an ustedes or vosotros question gets a nosotros answer (¿Trajeron? → Trajimos); a question about él/ella gets an él/ella answer (¿Qué dijo? → Dijo...).",
          "What never changes is the irregular stem: it stays the same in every person, and only the ending moves (-e, -iste, -o, -imos, -isteis, -ieron).",
        ],
        [
          ["—¿Qué hiciste anoche? —Hice los deberes.","What did you do last night? — I did my homework. (hic- in both)"],
          ["—¿Vinieron en coche? —No, vinimos en metro.","Did you come by car? — No, we came by metro. (ustedes → nosotros)"],
        ],
        [
          { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "—¿Estuviste en la reunión? —Sí, ___ toda la tarde.", answer: "estuve", en: "—Were you at the meeting? (tú) —Yes, I [was] there all afternoon.", explanation: "Tú question (estuviste) → yo answer: estuv- + -e, estuve." },
          mc("—¿Supiste la noticia? —Sí, la ___ ayer. (saber has the stem sup-)", ["supe","supiste","supo","sabí"], 0, "A new stem, same mirror: tú question (supiste) → yo answer, sup- + -e = supe. In the preterite saber means \"found out\"."),
        ]
      ),
    ],
    [
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "—¿Qué te contó tu hermano? —Me ___ un secreto.", answer: "dijo", en: "\"What did your brother tell you?\" \"He [told] me a secret.\"", altAnswers: ["contó"], explanation: "A question about él gets an él answer: dij- + -o, dijo." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "—¿Trajeron ustedes el pastel? —Sí, lo ___.", answer: "trajimos", en: "—Did you bring the cake? (ustedes) —Yes, we [brought] it.", explanation: "Ustedes → nosotros: traj- + -imos, trajimos." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "—¿Pudiste dormir? —No, no ___ dormir nada.", answer: "pude", en: "—Were you able to sleep? (tú) —No, I [could] not sleep at all.", explanation: "Tú → yo: pud- + -e, pude." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "—¿Dónde pusiste mi libro? —Lo ___ en la mesa.", answer: "puse", en: "—Where did you put my book? (tú) —I [put] it on the table.", explanation: "Tú → yo: pus- + -e, puse." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "—¿Quisieron ustedes quedarse? —No, no ___.", answer: "quisimos", en: "—Did you want to stay? (ustedes) —No, we did not [want] to.", altAnswers: ["queríamos"], explanation: "Ustedes → nosotros: quis- + -imos, quisimos." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "—¿Vinisteis en tren? —Sí, ___ en tren.", answer: "vinimos", en: "—Did you all (Spain) come by train? —Yes, we [came] by train.", explanation: "Vosotros → nosotros: vinimos." },
      mt("Match question and answer.", [["¿Tuviste tiempo?","No, no tuve tiempo."],["¿Vinieron tus padres?","Sí, vinieron el lunes."],["¿Hicisteis la compra?","Sí, la hicimos ayer."]], "The person changes with the question: tú → yo, ellos → ellos, vosotros → nosotros."),
      mc("—¿Qué le dijiste a Ana? —Le ___ que sí.", ["dije","dijiste","dijo","decí"], 0, "Tú question → yo answer: dijiste → dije (j-group, no accent). \"Decí\" regularizes the verb."),
      mc("—¿Fueron ustedes a la playa? Which answer fits?", ["Sí, fuimos el domingo.","Sí, fueron el domingo.","Sí, fui el domingo, nosotros.","Sí, fuisteis el domingo."], 0, "Ustedes question → nosotros answer: fuimos. Fueron repeats the question's person (they), fuisteis is vosotros."),
      toEs("¿Hiciste la cama?", "Sí, la hice.", "Tú question → yo answer: hice. La replaces la cama.", ["Sí, hice la cama."], "Answer yes."),
      toEs("¿Fuiste al banco?", "No, no fui al banco.", "Fuiste → fui. A negative answer in Spanish often says no twice.", ["No, no fui."], "Answer no."),
      toEs("¿Tuvieron ustedes problemas?", "No, no tuvimos ningún problema.", "Ustedes → nosotros: tuvimos. Ningún problema = no problems at all.", ["No, no tuvimos problemas."], "Answer no, for your group."),
      toEs("Yo traje una botella de vino.", "¿Qué trajiste?", "To ask the person who brought it, switch yo (traje) to tú (trajiste).", ["¿Qué trajiste tú?"], "Turn it into the question a friend would ask: what did you bring?"),
      toEs("Estuve en casa de mi tía.", "¿Dónde estuviste ayer?", "Yo (estuve) → tú (estuviste): same stem estuv-, tú ending -iste.", ["¿Dónde estuviste?"], "Turn it into the question: where were you yesterday?"),
      toEs("—¿Pudiste terminar? —Sí, pudiste a las seis.", "—¿Pudiste terminar? —Sí, pude a las seis.", "A tú question gets a yo answer: pude. Repeating pudiste would mean \"you could\".", ["—¿Pudiste terminar? —Sí, terminé a las seis."], "Correct the answer."),
      toEs("—¿Vinieron tus primos? —Sí, venieron el sábado.", "—¿Vinieron tus primos? —Sí, vinieron el sábado.", "Venir keeps its stem vin- in every person: vinieron.", undefined, "Correct the answer."),
      toEs("—¿Qué hicieron ustedes? —Hacimos la compra.", "—¿Qué hicieron ustedes? —Hicimos la compra.", "The nosotros answer keeps the irregular stem: hic- + -imos, hicimos.", undefined, "Correct the answer."),
      toEn("—¿Qué hicieron ustedes? —Estuvimos en casa.", "—What did you do? —We were at home.", "Hicieron is hacer (stem hic-) and estuvimos is estar (stem estuv-), both irregular.", ["—What did you guys do? —We stayed at home.","—What did you all do? —We were at home."]),
      toEs("—Did you (tú) come alone? —No, I came with my sister.", "—¿Viniste solo? —No, vine con mi hermana.", "Venir has the stem vin-: viniste (tú), vine (yo, no accent).", ["—¿Viniste sola? —No, vine con mi hermana."]),
      toEs("Could you all (Latin America) finish?", "¿Pudieron terminar?", "Ustedes: pud- + -ieron, pudieron.", ["¿Ustedes pudieron terminar?","¿Pudieron ustedes terminar?"]),
      wo("¿Por qué no quisiste venir con nosotros?", "Por qué + no + quisiste (tú).", "Why didn't you want to come with us?"),
      toEs("Did you (formal) do the exercise? — Yes, I did it this morning.", "¿Hizo usted el ejercicio? —Sí, lo hice esta mañana.", "Usted uses the él form (hizo); the answer is yo (hice).", ["¿Usted hizo el ejercicio? —Sí, lo hice esta mañana.","¿Hizo el ejercicio? —Sí, lo hice esta mañana."]),
      toEs("What did your parents say? — They said that we have to come back early.", "¿Qué dijeron tus padres? —Dijeron que tenemos que volver temprano.", "Ellos → ellos: dijeron, with no i after j."),
      { type: "speak", prompt: "Answer aloud in Spanish: ¿Qué hiciste el sábado y quién vino contigo?", text: "El sábado fui al cine y vino mi hermano conmigo.", explanation: "Hiciste (tú) → yo answer (fui, or hice...). ¿Quién vino? asks about a third person, so the answer keeps vino. Any true answer with the right persons works." },
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
        "Remember the rule: two questions before you conjugate",
        [
          "Remember the rule: 1) Is the verb on the irregular list (ser/ir, tener, estar, poder, poner, hacer, querer, venir, decir, traer, and verbs built on them)? 2) If yes: irregular stem + unaccented endings (-e, -iste, -o...). If not: regular endings with the accent on yo and él (-é / -ó, -í / -ió).",
          "The accent is a handy check: a regular yo or él form always has one (comí, habló); an irregular one never does (hice, dijo). Look-alikes don't share a pattern: vender is regular (vendió), venir is not (vino).",
        ],
        [
          ["Ayer comí y bebí mucho.","Yesterday I ate and drank a lot. (regular: -í with an accent)"],
          ["Ayer hice y dije muchas tonterías.","Yesterday I did and said a lot of silly things. (irregular: no accent)"],
        ],
        [
          mc("Is abrir regular in the preterite?", ["Yes — abrí, abrió","No — abrije, abrijo","No — abrú, abró","No — it has no preterite"], 0, "Abrir is not on the list, so it's regular in the preterite: abrí, abrió. (Only its participle, abierto, is irregular.)"),
          mc("Is mantener (to maintain) regular or irregular? It's built on tener.", ["Irregular: mantuve, mantuvo","Regular: mantení, mantenió","Regular: mantuví, mantuvió","It has no preterite"], 0, "Verbs built on an irregular verb copy it: tener → tuve, so mantener → mantuve, mantuvo, with no accents."),
        ]
      ),
    ],
    [
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Mi padre ___ un coche nuevo.", answer: "compró", en: "My father [bought] a new car.", explanation: "Comprar is not on the list: regular él -ó, with an accent." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Mi padre ___ un coche a casa.", answer: "trajo", en: "My father [brought] a car home.", explanation: "Traer is irregular (j-stem): traj- + -o, trajo, no accent." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "___ un mensaje a Sara.", answer: "Escribí", en: "I [wrote] a message to Sara.", explanation: "Escribir is regular in the preterite: yo -í, with an accent." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Le ___ la verdad a Sara.", answer: "dije", en: "I [told] Sara the truth.", explanation: "Decir is irregular (j-stem): dij- + -e, dije." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "___ en un hotel precioso.", answer: "Estuvimos", en: "We [were] at a beautiful hotel.", explanation: "Estar is irregular (u-group): estuv- + -imos." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Mis abuelos ___ a mi fiesta en taxi.", answer: "vinieron", en: "My grandparents [came] to my party by taxi.", explanation: "Venir is irregular: vin- + -ieron (not \"venieron\")." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Ayer ___ un regalo muy bonito.", answer: "recibí", en: "Yesterday I [received] a very nice present.", explanation: "Recibir is not on the irregular list: regular yo -í, with an accent." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Ellos ___ en la oficina hasta las nueve.", answer: "trabajaron", en: "They [worked] at the office until nine.", explanation: "Trabajar is regular: trabajaron." },
      mc("Is vender regular in the preterite?", ["Yes — vendí, vendió","No — vendije, vendijo","No — vinde, vindo","No — vendu-"], 0, "Vender is not on the irregular list: regular -í, -ió. Don't confuse it with venir (vine, vino)."),
      mc("Is poner regular in the preterite?", ["No — puse, puso","Yes — poní, ponió","Yes — pusí, pusió","No — ponje, ponjo"], 0, "Poner is in the u-group: puse, puso, with no accents."),
      mc("Which pair is correct?", ["comí / hice","comí / hací","comé / hice","comió / hizó"], 0, "Comer is regular (comí, accent); hacer is irregular (hice, no accent). \"Hizó\" wrongly adds an accent."),
      ms("Which verbs have irregular preterite stems?", ["venir","vender","querer","correr"], [0,2], "Venir (vine) and querer (quise) have irregular preterite stems. \"Vender\" and \"correr\" are regular: vendí, corrí."),
      toEs("Ellos están en la oficina.", "Ellos estuvieron en la oficina.", "Estar is irregular: estuv- + -ieron.", ["Estuvieron en la oficina."], "Change it to the past."),
      toEs("Vendo mi bicicleta.", "Vendí mi bicicleta.", "Vender is regular: yo -í with an accent.", ["Yo vendí mi bicicleta."], "Change it to the past."),
      toEs("Vengo en tren.", "Vine en tren.", "Venir is irregular: vin- + -e, vine, no accent.", ["Yo vine en tren."], "Change it to the past."),
      toEs("Abre la ventana.", "Abrió la ventana.", "Abrir is regular in the preterite: él -ió, with an accent.", ["Ella abrió la ventana.","Él abrió la ventana."], "Change it to the past (él/ella)."),
      toEs("Ayer traí a mi amiga a casa para cenar.", "Ayer traje a mi amiga a casa para cenar.", "Traer is irregular (j-stem): traje, not \"traí\".", undefined, "Correct the sentence."),
      toEs("Mi hermano hizó la cena.", "Mi hermano hizo la cena.", "Irregular preterites never take a written accent: hizo.", undefined, "Correct the sentence."),
      toEs("Ayer corrimos mucho y bebieron mucha agua.", "Ayer corrimos mucho y bebimos mucha agua.", "Both verbs have the same subject (nosotros), so both need -imos. Beber is regular: bebimos.", undefined, "Correct the sentence."),
      toEs("She sold her car and came to Spain.", "Vendió su coche y vino a España.", "Vender is regular (vendió), while venir is irregular (vino); they look alike but conjugate differently.", ["Ella vendió su coche y vino a España.","Vendió su carro y vino a España.","Ella vendió su carro y vino a España."]),
      toEs("I ate and I said thank you.", "Comí y dije gracias.", "Comí (regular, accent) vs. dije (irregular, no accent)."),
      toEs("He spoke a lot but he did nothing.", "Habló mucho pero no hizo nada.", "Habló regular with accent; hizo irregular without.", ["Él habló mucho pero no hizo nada."]),
      toEs("We refused to walk, so we called a taxi.", "No quisimos caminar, así que llamamos un taxi.", "Quisimos (irregular) vs. llamamos (regular); no quisimos = we refused.", ["No quisimos caminar, así que pedimos un taxi.","No quisimos caminar, así que llamamos a un taxi.","No quisimos caminar y llamamos un taxi.","No quisimos caminar y llamamos a un taxi."]),
      toEs("You (tú) drank the water and you wanted more.", "Bebiste el agua y quisiste más.", "Bebiste regular, quisiste irregular (quis-); both end in -iste."),
      toEs("I lived in Lima and I had many friends.", "Viví en Lima y tuve muchos amigos.", "Viví regular (accent); tuve irregular (no accent)."),
      wo("Ellos corrieron mucho, pero no pudieron ganar", "Corrieron regular; pudieron irregular (u-group).", "They ran a lot but they couldn't win"),
      wo("Recibí tu mensaje, pero no dije nada", "Recibí (regular, accent); dije (irregular, no accent).", "I got your message but I didn't say anything"),
      toEs("My parents bought a house and they brought all their things.", "Mis padres compraron una casa y trajeron todas sus cosas.", "Compraron regular; trajeron irregular (j-group)."),
      { type: "speak", prompt: "Say it in Spanish: She opened the door, put the bags on the floor and said hello.", text: "Abrió la puerta, puso las bolsas en el suelo y dijo hola.", explanation: "Abrió is regular (-ió with an accent); puso and dijo are irregular (no accent). In Latin America: en el piso." },
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
        [
          "Remember the rule: every hour of yesterday is one finished event, so each step goes in the preterite. Regular verbs take the stressed endings (-ó, -ió); irregular ones swap the stem and lose the accent (fue, tuvo, hizo, vio). Sequence words just order the steps: primero, luego, después, más tarde, por último.",
          "Marta's timeline, in the infinitive. Narrate it in the exercises: 7:00 despertarse · 8:00 ir a la oficina · 13:00 comer con un cliente · 15:00 tener una reunión · 19:00 hacer la compra · 22:00 ver una serie.",
        ],
        [
          ["Primero me desperté a las siete y luego fui a clase.", "First I woke up at seven and then I went to class. (yo: -é, and ir → fui)"],
          ["Por último, mi hermano leyó un rato.", "Finally, my brother read for a while. (leer → leyó)"],
        ],
        [
          fb("13:00", "A la una, Marta ___ con un cliente.", "comió", "Comer is a regular -er verb, and él/ella takes -ió in the preterite: comió."),
        ]
      ),
    ],
    [
      fb("8:00", "A las ocho, Marta ___ a la oficina.", "fue", "A single event at a clock time takes the preterite: ir → fue."),
      fb("15:00", "A las tres, ___ una reunión larguísima.", "tuvo", "A single event takes the preterite: tener → tuvo (irregular stem tuv-)."),
      fb("19:00", "A las siete, ___ la compra.", "hizo", "A single event takes the preterite: hacer → hizo (irregular, with z)."),
      fb("22:00", "Por último, ___ una serie en el sofá.", "vio", "A single event takes the preterite: ver → vio (one syllable, no accent)."),
      mc(
        "Which word introduces the last step?",
        ["por último", "primero", "luego", "mientras"],
        0,
        "Por último means finally, for the last step. \"Primero\" is first, \"luego\" then, and \"mientras\" while."
      ),
      toEs("First I had breakfast, then I went to work.", "Primero desayuné, luego fui al trabajo.", "A sequence of completed actions takes the preterite: desayuné, fui. Primero and luego order them.", ["Primero desayuné y luego fui al trabajo.", "Primero desayuné, después fui al trabajo."]),
      wo("Después de la reunión, Marta volvió a casa en autobús.", "Sequence + preterite.", "After the meeting, Marta went home by bus."),
      toEn("Más tarde estuvo con sus amigas en un café.", "Later she was with her friends in a café.", "Estar has the irregular preterite stem estuv-: estuvo, with no accent.", ["Later on she spent time with her friends at a café.", "Later she was with her friends at a café."]),
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
        [
          "Remember the rule: a trip that is over is told in the preterite, even its overall verdict (fue genial). Regular yo forms end in a stressed -é / -í (viajé, comí); ir and ser share fui / fue.",
          "Useful preterites: fui (I went), viajé (I travelled), llegué (I arrived), me quedé (I stayed), visité, conocí (I met / got to know a place, with no a before a place), comí, volví (I came back). Add details: con quién, cuánto tiempo, qué tal fue.",
        ],
        [
          ["El verano pasado fui a México con mi familia.", "Last summer I went to Mexico with my family."],
          ["Nos quedamos dos semanas y fue genial.", "We stayed two weeks and it was great."],
        ],
        [
          mc(
            "«Conocí Lisboa» means…",
            ["I got to know / visited Lisbon for the first time", "I know Lisbon", "I will visit Lisbon", "I didn't like Lisbon"],
            0,
            "Conocer in the preterite marks first contact: conocí Lisboa = I got to know or visited it for the first time. \"I know\" is conozco, \"I will visit\" is future, and it says nothing about liking it."
          ),
        ]
      ),
    ],
    [
      toEs("Last year I traveled to Peru.", "El año pasado viajé a Perú.", "Regular -ar verbs take accented -é in the yo preterite: viajé.", ["El año pasado viajé al Perú.", "El año pasado fui a Perú."]),
      toEs("I stayed in a small hotel.", "Me quedé en un hotel pequeño.", "Quedarse (to stay) is reflexive: me quedé, regular -ar in the preterite.", ["Me quedé en un pequeño hotel."]),
      fb("Complete.", "___ muchos museos. (visitar, nosotros)", "Visitamos", "Regular -ar verbs take -amos for nosotros in the preterite: visitamos, the same as the present; the context makes it past."),
      toEs("I ate a lot and it was delicious.", "Comí mucho y estuvo delicioso.", "Comí is a single event, and estuvo delicioso comments on how the food was that time (estar with food).", ["Comí mucho y fue delicioso.", "Comí mucho y estaba delicioso."]),
      toEs("We came back on Sunday.", "Volvimos el domingo.", "Volver is regular in the preterite (the o → ue change is only in the present): volvimos.", ["Regresamos el domingo."]),
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
        [
          "Remember the rule: an irregular preterite keeps its new stem for every person, and only the ending changes: -e, -iste, -o, -imos, -isteis, -ieron, all without accents. Learn the stem once and the whole verb follows.",
          "Start: Yo hice la cena. → Él hizo la cena. → Nosotros hicimos la cena. → Ellos hicieron la cena. Two traps: hacer writes hizo (z keeps the sound before o), and stems ending in j (dij-, traj-, -duj-) take -eron for ellos, not -ieron.",
        ],
        [
          ["Yo traje vino. → Ellos trajeron vino.", "I brought wine. → They brought wine."],
        ],
        [
          fb("Chain: yo → él.", "Yo puse la mesa. → Él ___ la mesa.", "puso", "Poner has the stem pus-, and él takes an unaccented -o: puso."),
        ]
      ),
    ],
    [
      fb("Chain: yo → nosotros.", "Yo estuve en casa. → Nosotros ___ en casa.", "estuvimos", "Estar has the stem estuv-, and nosotros adds -imos: estuvimos."),
      fb("Chain: yo → ellos.", "Yo dije que sí. → Ellos ___ que sí.", "dijeron", "Decir has the j-stem dij-, and j-stems take -eron for ellos (not -ieron): dijeron."),
      fb("Chain: tú → usted.", "Tú viniste tarde. → Usted ___ tarde.", "vino", "Usted uses the él form: vino (venir, stem vin-, no accent)."),
      fb("Chain: él → yo.", "Él quiso ayudar. → Yo ___ ayudar.", "quise", "Querer has the stem quis-, and yo takes an unaccented -e: quise."),
      fb("Chain: ella → ellas.", "Ella hizo un pastel. → Ellas ___ un pastel.", "hicieron", "Hacer has the stem hic-, and ellas take -ieron: hicieron."),
      fb("Chain: nosotros → tú.", "Nosotros pudimos entrar. → Tú ___ entrar.", "pudiste", "Poder has the stem pud-, and tú takes -iste: pudiste."),
      mc(
        "«Yo traje las sillas.» → ellos:",
        ["Ellos trajeron las sillas.", "Ellos trajieron las sillas.", "Ellos traeron las sillas.", "Ellos trajon las sillas."],
        0,
        "Traer has the j-stem traj-, and j-stems take -eron for ellos: trajeron. \"Trajieron\" keeps the i, \"traeron\" drops the j, and \"trajon\" is missing -er-."
      ),
      toEs("They had a problem, but they did everything well.", "Tuvieron un problema, pero lo hicieron todo bien.", "Tener → tuvieron and hacer → hicieron, both irregular ellos preterites. Lo... todo = everything as object.", ["Tuvieron un problema, pero hicieron todo bien."]),
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
        [
          "Remember the rule: each step of the story is one finished event, so every gap takes the preterite. Regular verbs carry a stressed ending (tomó, volvió); irregular ones change the stem (puso, tuvo); and in the yo form -car / -gar / -zar change spelling (busqué, llegué).",
          "Read the story with the verbs in the infinitive, then put them in the preterite in the exercises: «El martes Laura (salir) de casa a las ocho. (Tomar) el autobús y (llegar) a la universidad. Cuando (buscar) el móvil, no lo (encontrar). (Volver) al autobús, (hablar) con el conductor y él le (contar) una buena noticia: alguien lo (encontrar) y lo (poner) en la oficina de objetos perdidos.»",
        ],
        [
          ["Cuando salí de casa, cerré la puerta con llave.", "When I left home, I locked the door. (two finished events: preterite)"],
        ],
        [
          mc(
            "Where was the phone?",
            ["in the lost-and-found office", "at home", "in the university", "in a café"],
            0,
            "The text says \"Lo puso en la oficina de objetos perdidos\": the phone was in the lost-and-found office, not at home, the university or a café."
          ),
        ]
      ),
    ],
    [
      fb("Fill in.", "El martes Laura ___ de casa a las ocho. (salir)", "salió", "Salir is regular in the preterite."),
      fb("Fill in.", "___ el autobús y llegó a la universidad. (tomar)", "Tomó", "Regular -ar verbs take accented -ó in the él/ella preterite; without the accent, tomo means 'I take'."),
      fb("Fill in (Laura tells it).", "Yo ___ a la universidad a las nueve. (llegar)", "llegué", "-gar → -gué."),
      fb("Fill in (Laura tells it).", "___ el móvil en la mochila, pero no estaba. (buscar)", "Busqué", "-car → -qué."),
      fb("Fill in.", "Alguien lo encontró y lo ___ en la oficina. (poner)", "puso", "Poner → puso."),
      fb("Fill in.", "El conductor le ___ una buena noticia. (contar)", "contó", "Contar is regular in the preterite: contó."),
      toEs("She went back to the bus and talked to the driver.", "Volvió al autobús y habló con el conductor.", "Volver and hablar are regular in the preterite: volvió, habló.", ["Regresó al autobús y habló con el conductor."]),
      toEn("Por fin tuvo su móvil otra vez.", "Finally she had her phone again.", "Tener has the preterite stem tuv-: tuvo, no accent.", ["She finally got her phone back.", "At last she had her phone again."]),
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
        "Remember the rule, as a four-step checklist: 1) Irregular stem? (tuv-, estuv-, pud-, pus-, hic-, quis-, vin-, dij-, traj-, fu-) Then no accents. 2) Yo with -car / -gar / -zar? Change the spelling (-qué, -gué, -cé). 3) Regular yo / él? Accent on the ending (-é, -ó, -í, -ió). 4) J-stem with ellos? -eron, not -ieron.",
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
      fb("Quick!", "Tú ___ mucho. (trabajar)", "trabajaste", "The regular -ar tú preterite ends in -aste, with no final s (not trabajastes)."),
      fb("Quick!", "Ella ___ en Italia. (estar)", "estuvo", "Estar → estuv- + -o."),
      fb("Quick!", "Nosotros ___ tarde. (venir)", "vinimos", "Venir → vin- + -imos."),
      fb("Quick!", "Ustedes ___ la cena. (hacer)", "hicieron", "Hacer → hic- + -ieron."),
      fb("Quick!", "Yo ___ a las diez. (empezar)", "empecé", "-zar → -cé in the yo form."),
      fb("Quick!", "Él ___ un libro sobre su vida. (escribir)", "escribió", "Regular -IR: escribió."),
      mc(
        "«Mis abuelos ___ muy felices en ese pueblo.» (ser)",
        ["fueron", "fuieron", "eran fue", "furon"],
        0,
        "Ser has the irregular preterite fueron (same as ir). \"Fuieron\" and \"furon\" are misspelled, and \"eran fue\" is two forms at once."
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
        "Remember the rule: two sets of endings, no stem changes",
        [
          "Remember the rule: -ar verbs take -aba, -abas, -aba, -ábamos, -abais, -aban; -er and -ir verbs share -ía, -ías, -ía, -íamos, -íais, -ían. The stem never changes (only ser, ir and ver are irregular).",
          "Two things to watch: yo and él/ella share the same form (yo jugaba / él jugaba), so add the subject if it isn't clear; and the accents sit on -ábamos and on every í of -ía.",
        ],
        [
          ["De niño jugaba en la calle.","As a child I used to play in the street. (-aba)"],
          ["Mis abuelos vivían en el campo.","My grandparents lived in the countryside. (-ían)"],
        ],
        [
          { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "De niños, ___ mucho.", answer: "nadábamos", en: "As kids, we [used to swim] a lot.", explanation: "-Ar nosotros: -ábamos, with an accent on the first a." },
          mc("Subir (to go up) is -ir. \"They used to go up the hill\" is:", ["Subían la colina.","Subaban la colina.","Subieron la colina.","Suben la colina."], 0, "-Ir verbs share the -ía endings: sub- + -ían. -Aban is for -ar verbs; subieron is a single finished event."),
        ]
      ),
    ],
    [
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "De niña, yo ___ en el parque.", answer: "corría", en: "As a girl, I [used to run] in the park.", explanation: "-Er yo: -ía." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "De niños, mis hermanos ___ en el parque.", answer: "corrían", en: "As kids, my brothers [used to run] in the park.", explanation: "-Er ellos: -ían." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "De niño, ¿tú ___ en el parque?", answer: "corrías", en: "As a kid, did you [use to run] in the park? (tú)", explanation: "-Er tú: -ías." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Mi padre siempre ___ la radio por la mañana.", answer: "escuchaba", en: "My father always [listened to] the radio in the morning.", explanation: "-Ar él: -aba." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Vosotros ___ música todo el día.", answer: "escuchabais", en: "You [used to listen to] music all day. (vosotros)", explanation: "-Ar vosotros: -abais." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Antes tú ___ en una tienda, ¿no?", answer: "trabajabas", en: "You [used to work] in a shop before, didn't you?", explanation: "Tú -ar: -abas." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Mi abuela ___ muchas cartas.", answer: "escribía", en: "My grandmother [used to write] lots of letters.", explanation: "Él/ella -ir: -ía (the same form as yo)." },
      mt("Match subject and imperfect form of vivir.", [["nosotros","vivíamos"],["tú","vivías"],["ellas","vivían"]], "-Ir uses the same endings as -er."),
      mc("'Antes nosotros ___ mucho.' (leer)", ["leíamos","leímos","leábamos","leiamos"], 0, "-Er nosotros imperfect: -íamos with an accent. Leímos is the preterite, leábamos uses the -ar ending, and leiamos is missing the accent."),
      mc("Which form is the imperfect of cantar for nosotros?", ["cantábamos","cantabamos","cantamos","cantíamos"], 0, "-Ar nosotros: -ábamos, and the á needs its written accent. Cantamos is present/preterite, and -íamos is for -er/-ir verbs."),
      toEs("Camino al trabajo.", "Caminaba al trabajo.", "-Ar yo: -aba.", ["Yo caminaba al trabajo."], "Change it to the past habit (used to)."),
      toEs("Mis hermanas bailan mucho.", "Mis hermanas bailaban mucho.", "Ellas -ar: -aban.", undefined, "Change it to the past habit (used to)."),
      toEs("Escribo poemas.", "Escribía poemas.", "-Ir yo: -ía, with an accent.", ["Yo escribía poemas."], "Change it to the past habit (used to)."),
      toEs("Ellos bebían leche.", "Nosotros bebíamos leche.", "Nosotros -er: -íamos.", ["Bebíamos leche."], "Change to nosotros."),
      toEs("Mi padre cocinaba los domingos.", "Tú cocinabas los domingos.", "Tú -ar: -abas.", ["Cocinabas los domingos."], "Change to tú."),
      toEs("De pequeños, vivíamos en un apartamento y comprabamos el pan abajo.", "De pequeños, vivíamos en un apartamento y comprábamos el pan abajo.", "-Ar nosotros needs the accent: comprábamos.", undefined, "Correct the sentence."),
      toEs("Mis tíos vivíban en la ciudad.", "Mis tíos vivían en la ciudad.", "-Ir verbs take -ían, not -aban: vivían.", undefined, "Correct the sentence."),
      toEs("Antes yo leia mucho.", "Antes yo leía mucho.", "Every -er/-ir imperfect form has an accent on the í: leía (le-Í-a).", ["Antes leía mucho."], "Correct the sentence."),
      toEs("We used to eat at my grandmother's house.", "Comíamos en casa de mi abuela.", "-Er verbs take -íamos for nosotros in the imperfect: comíamos.", ["Nosotros comíamos en casa de mi abuela.","Solíamos comer en casa de mi abuela."]),
      toEs("You all (Latin America) used to sing in the car.", "Ustedes cantaban en el coche.", "Ustedes: -aban.", ["Ustedes cantaban en el carro.","Ustedes cantaban en el auto.","Cantaban en el coche."]),
      toEs("You all (Spain) used to buy bread at that bakery.", "Vosotros comprabais el pan en esa panadería.", "Vosotros -ar: -abais.", ["Comprabais el pan en esa panadería."]),
      wo("Todos los veranos mi familia alquilaba una casa en la playa.", "A habit in the past: alquilaba.", "Every summer my family rented a house at the beach."),
      wo("Cada mañana mi madre preparaba el desayuno", "Cada mañana = habit: preparaba.", "Every morning my mother made breakfast"),
      toEs("As a child, I used to run to school and my brother used to walk.", "De niño, yo corría a la escuela y mi hermano caminaba.", "Corría (-er) and caminaba (-ar): imperfect for both habits.", ["De niña, yo corría a la escuela y mi hermano caminaba.","De niño, corría al colegio y mi hermano caminaba.","De niña, corría al colegio y mi hermano caminaba."]),
      { type: "speak", prompt: "Say it in Spanish: When I was little, I used to draw, my sister used to read and my parents used to work a lot.", text: "De pequeño, yo dibujaba, mi hermana leía y mis padres trabajaban mucho.", explanation: "Dibujaba (-ar), leía (-er) and trabajaban (-ar, ellos): three habits, all imperfect. A woman would say de pequeña." },
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
        "Remember the rule: just three irregulars",
        [
          "Remember the rule: every verb in the imperfect is regular except three. Ser: era, eras, era, éramos, erais, eran. Ir: iba, ibas, iba, íbamos, ibais, iban. Ver: veía, veías, veía, veíamos, veíais, veían.",
          "Why ver: it simply keeps its e (ve- + -ía), where a regular -er verb would drop it. And the accents: only nosotros has one in era/iba (éramos, íbamos), while every form of veía has one on the í.",
        ],
        [
          ["Mi casa era pequeña, pero muy bonita.","My house was small, but very pretty. (era: description)"],
          ["Íbamos al colegio en bicicleta.","We used to go to school by bike. (íbamos: habit)"],
          ["Mis primos veían la tele todo el día.","My cousins watched TV all day. (veían keeps the e)"],
        ],
        [
          mc("«Cuando era niño, ___ dibujos animados los sábados.» (ver, yo)", ["veía","vía","vei","vio"], 0, "Ver keeps its e in the imperfect: veía. \"Vía\" drops it, \"vei\" isn't a form, and \"vio\" is the preterite."),
          toEs("Mi barrio es muy tranquilo.", "Mi barrio era muy tranquilo.", "A description of how a place was: imperfect of ser, era.", undefined, "Change it to the past description."),
        ]
      ),
    ],
    [
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Mis profesores ___ muy estrictos.", answer: "eran", en: "My teachers [were] very strict.", explanation: "Describing what people were like in the past takes the imperfect, and ser is one of the three irregulars: eran." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Los domingos ___ a misa con mis abuelos.", answer: "íbamos", en: "On Sundays we [used to go] to Mass with my grandparents.", explanation: "Los domingos marks a past habit; ir is irregular in the imperfect and íbamos carries an accent." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Tú ___ a tus primos todos los veranos.", answer: "veías", en: "You [used to see] your cousins every summer. (tú)", explanation: "Ver keeps its e: veías." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Mi pueblo ___ muy tranquilo.", answer: "era", en: "My town [was] very quiet.", explanation: "Describing what a place was like takes the imperfect: era, not fue." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Mi madre ___ al mercado todos los días.", answer: "iba", en: "My mother [used to go] to the market every day.", explanation: "Todos los días marks a past habit, and ir's imperfect is irregular: iba (no accent)." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Mis abuelos ___ de un pueblo pequeño.", answer: "eran", en: "My grandparents [were] from a small town.", explanation: "Origin with ser, as background: eran." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Vosotros ___ al cine cada viernes.", answer: "ibais", en: "You all (Spain) [used to go] to the movies every Friday.", explanation: "Ir vosotros: ibais (no accent)." },
      ms("Which forms are correct imperfects?", ["éramos","íbais","veíamos","ibamos"], [0,2], "Éramos and veíamos are correct. \"Íbais\" should be ibais (no accent), and \"ibamos\" needs one: íbamos."),
      mc("Which form is correct for 'they used to go'?", ["iban","íban","ivan","fueron"], 0, "Ir imperfect ellos: iban, no accent, spelled with b. Fueron = they went (once)."),
      mc("Prever (to foresee) is built on ver. \"We foresaw problems\" (as an ongoing expectation) in the imperfect is:", ["preveíamos","previmos","prevíamos","preveámos"], 0, "Verbs built on ver copy its imperfect and keep the e: preveíamos. Previmos is the preterite."),
      toEs("Soy tímido.", "Era tímido.", "Ser imperfect yo: era.", ["Era tímida.","Yo era tímido.","Yo era tímida."], "Change it to the past description."),
      toEs("Vamos al parque.", "Íbamos al parque.", "Ir imperfect nosotros: íbamos (accent on the í).", ["Nosotros íbamos al parque."], "Change it to the past habit (used to)."),
      toEs("Ellos ven a sus primos.", "Ellos veían a sus primos.", "Ver imperfect ellos: veían (keeps the e). Personal a before people.", ["Veían a sus primos."], "Change it to the past habit (used to)."),
      toEs("Ella iba al trabajo en coche.", "Yo iba al trabajo en coche.", "Yo and él/ella share the same imperfect form: iba. Only the subject changes.", ["Iba al trabajo en coche.","Yo iba al trabajo en carro.","Yo iba al trabajo en auto."], "Change to yo."),
      toEs("Antes yo vía las noticias todas las noches.", "Antes yo veía las noticias todas las noches.", "Ver keeps its e in the imperfect: veía, not vía.", ["Antes veía las noticias todas las noches."], "Correct the sentence."),
      toEs("Nosotros eramos los mejores amigos del barrio.", "Nosotros éramos los mejores amigos del barrio.", "Éramos is stressed on the first syllable (third from last), so it always takes the accent.", ["Éramos los mejores amigos del barrio."], "Correct the sentence."),
      toEs("De niños, ívamos a la playa cada verano.", "De niños, íbamos a la playa cada verano.", "The imperfect of ir is spelled with b: íbamos.", undefined, "Correct the sentence."),
      toEs("We were very good friends.", "Éramos muy buenos amigos.", "Ser is irregular in the imperfect: éramos, with an accent.", ["Éramos muy buenas amigas.","Nosotros éramos muy buenos amigos."]),
      toEs("You (tú) were very funny.", "Eras muy gracioso.", "Ser imperfect tú: eras.", ["Eras muy graciosa.","Eras muy divertido.","Eras muy divertida."]),
      toEn("Mi abuelo iba al campo y veía las vacas.", "My grandfather used to go to the countryside and see the cows.", "Iba (ir) and veía (ver) are imperfect, describing what he used to do.", ["My grandfather would go to the countryside and see the cows.","My grandfather went to the countryside and saw the cows."]),
      toEs("The house was old, but we used to go there every summer.", "La casa era vieja, pero íbamos allí todos los veranos.", "Era (description) + íbamos (habit).", ["La casa era vieja, pero íbamos ahí todos los veranos.","La casa era antigua, pero íbamos allí todos los veranos."]),
      wo("Los sábados íbamos al mercado y veíamos a la abuela", "Íbamos and veíamos: habits on Saturdays.", "On Saturdays we used to go to the market and see Grandma"),
      toEs("My teacher was very nice and she used to go to school by bike.", "Mi maestra era muy simpática e iba a la escuela en bicicleta.", "Era for description, iba for a repeated action. Y becomes e before a word starting with i.", ["Mi profesora era muy simpática e iba a la escuela en bicicleta.","Mi maestra era muy amable e iba a la escuela en bicicleta.","Mi profesora era muy amable e iba a la escuela en bicicleta.","Mi maestra era muy simpática e iba al colegio en bicicleta.","Mi profesora era muy simpática e iba al colegio en bicicleta."]),
      toEs("When you (tú) were little, did you use to go to the beach?", "Cuando eras pequeño, ¿ibas a la playa?", "Eras (ser) and ibas (ir) in the imperfect.", ["Cuando eras pequeña, ¿ibas a la playa?","Cuando eras niño, ¿ibas a la playa?","Cuando eras niña, ¿ibas a la playa?"]),
      { type: "speak", prompt: "Answer aloud in Spanish: ¿Cómo era tu mejor amigo de la infancia y adónde iban juntos?", text: "Mi mejor amigo era muy divertido y siempre íbamos al parque juntos.", explanation: "Era describes the person; íbamos is a habit. Any answer with era and iba/íbamos (or veíamos) practises the three irregulars." },
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
        "Remember the rule: the imperfect paints the background",
        [
          "Remember the rule: a scene is made of things with no clear start or end, so they all take the imperfect: time (Eran las diez), weather (Hacía frío / Llovía), age (Tenía ocho años), feelings (Estaba nervioso), looks (Era alto), what there was (Había mucha gente) and what was going on (La gente hablaba).",
          "Two details: time is plural from two o'clock on (eran las dos) but singular for one (era la una); había stays singular even for many things.",
        ],
        [
          ["Eran las ocho de la noche y llovía mucho.","It was eight at night and it was raining hard. (time + weather)"],
          ["Yo tenía diez años y estaba muy nervioso.","I was ten years old and I was very nervous. (age + feeling)"],
        ],
        [
          mc("Which sentence describes the weather in the past?", ["Hacía mucho viento.","Hizo mucho viento ayer a las tres en punto.","Hace mucho viento.","Hará mucho viento."], 0, "Background weather takes the imperfect: hacía mucho viento. \"Hizo... a las tres en punto\" is a bounded event, \"hace\" is present, and \"hará\" is future."),
          toEs("Es la una de la tarde.", "Era la una de la tarde.", "Time in the past: imperfect of ser, singular for one o'clock (era la una).", undefined, "Change it to the past (set the scene)."),
        ]
      ),
    ],
    [
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "___ las siete de la mañana.", answer: "Eran", en: "It [was] seven in the morning.", explanation: "Time in the past: eran, plural because of las siete." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "___ mucho calor en la calle.", answer: "Hacía", en: "[It was] very [hot] out in the street.", explanation: "Weather uses hacer (hace calor), and background weather in the past takes the imperfect: hacía, not hizo." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Mi hermano ___ quince años.", answer: "tenía", en: "My brother [was] fifteen [years old].", explanation: "Age → tener, in the imperfect: tenía." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Todos ___ muy cansados.", answer: "estaban", en: "Everyone [was] very tired.", explanation: "A state → estar, in the imperfect: estaban." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "La casa ___ un jardín enorme.", answer: "tenía", en: "The house [had] a huge garden.", explanation: "Describing what something had → imperfect: tenía." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "El hombre ___ alto y llevaba un sombrero.", answer: "era", en: "The man [was] tall and he was wearing a hat.", explanation: "Physical description: ser in the imperfect, era." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "___ muchos coches en la calle.", answer: "Había", en: "There [were] a lot of cars on the street.", explanation: "Había means both \"there was\" and \"there were\"; never \"habían\"." },
      mc("Which detail would NOT be part of the background description?", ["De repente, sonó el teléfono.","La casa estaba en silencio.","Eran las once de la noche.","Mi padre leía en el sofá."], 0, "De repente sonó is a sudden, finished event: preterite, the action that breaks into the scene. The other three are background: imperfect."),
      mc("\"It was two o'clock\":", ["Eran las dos.","Era las dos.","Fueron las dos.","Estaba las dos."], 0, "Time takes ser, plural from two o'clock on: eran las dos. Fueron reports an event, and estar is never used for clock time."),
      toEs("Llueve y hace frío.", "Llovía y hacía frío.", "Weather as background: both verbs move to the imperfect.", undefined, "Change it to the past (set the scene)."),
      toEs("Las calles están llenas de gente.", "Las calles estaban llenas de gente.", "A state (full) uses estar: estaban in the imperfect.", undefined, "Change it to the past (set the scene)."),
      toEs("Hay muchos turistas en la plaza.", "Había muchos turistas en la plaza.", "Hay → había, singular even with muchos turistas.", undefined, "Change it to the past (set the scene)."),
      toEs("En el parque los perros corren y los niños gritan.", "En el parque los perros corrían y los niños gritaban.", "What was going on → imperfect: corrían, gritaban.", ["En el parque los perros estaban corriendo y los niños estaban gritando."], "Change it to the past (set the scene)."),
      toEs("Hizo buen tiempo y la playa estaba vacía.", "Hacía buen tiempo y la playa estaba vacía.", "In a description, weather is background like the empty beach: hacía, not hizo.", undefined, "Correct the scene."),
      toEs("Habían muchas personas en el restaurante.", "Había muchas personas en el restaurante.", "Había never goes plural when it means \"there were\".", ["Había mucha gente en el restaurante."], "Correct the sentence."),
      toEs("Fueron las cinco de la tarde y todos trabajaban.", "Eran las cinco de la tarde y todos trabajaban.", "Clock time in a scene is background: eran, not fueron.", undefined, "Correct the sentence."),
      toEs("It was cold and I was hungry.", "Hacía frío y tenía hambre.", "Weather and feelings as background take the imperfect: hacía frío, tenía hambre.", ["Hacía frío y yo tenía hambre."]),
      toEs("I was nervous.", "Estaba nervioso.", "A feeling in the past: estaba.", ["Estaba nerviosa."]),
      toEs("It was cold and the sky was gray.", "Hacía frío y el cielo estaba gris.", "Hacía frío (weather) + estaba gris (state)."),
      toEn("La tienda estaba cerrada y no había nadie.", "The shop was closed and there was nobody there.", "Estaba (a state) and había (existence) are both imperfect background.", ["The store was closed and there was no one there.","The shop was closed and nobody was there."]),
      wo("En la plaza los niños jugaban y los mayores hablaban.", "Two simultaneous background actions.", "In the square the children played and the adults talked."),
      wo("Eran las seis de la mañana y todos dormían", "Time (eran) + ongoing action (dormían).", "It was six in the morning and everyone was sleeping"),
      wo("Mi abuela tenía ochenta años y estaba muy feliz", "Age (tenía) + feeling (estaba).", "My grandmother was eighty years old and she was very happy"),
      toEs("It was sunny, the birds were singing and I was happy.", "Hacía sol, los pájaros cantaban y yo estaba contento.", "Three background details, all imperfect.", ["Hacía sol, los pájaros cantaban y yo estaba contenta.","Hacía sol, los pájaros cantaban y estaba feliz.","Hacía sol, los pájaros cantaban y yo estaba feliz."]),
      toEs("The restaurant was small and there were many people talking.", "El restaurante era pequeño y había mucha gente hablando.", "Era (description) + había (existence).", ["El restaurante era pequeño y había muchas personas hablando."]),
      { type: "speak", prompt: "Describe this scene aloud in Spanish: it was nine at night, it was snowing, and my family was eating in the kitchen.", text: "Eran las nueve de la noche, nevaba y mi familia cenaba en la cocina.", explanation: "Time (eran), weather (nevaba) and what was going on (cenaba / comía): all imperfect background." },
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
        "Remember the rule: antes + imperfect, ahora + present",
        [
          "Remember the rule: the imperfect describes how things used to be (habits and situations with no clear end); the present describes how they are now. So \"before vs. now\" sentences pair the two: Antes vivía en el centro; ahora vivo en las afueras.",
          "Signal words: antes, de niño, en aquella época → imperfect; ahora, hoy en día, actualmente → present. Spanish usually doesn't need \"used to\": the imperfect ending carries that meaning.",
        ],
        [
          ["Antes trabajaba en un banco; ahora trabajo en casa.","I used to work in a bank; now I work from home. (trabajaba → trabajo)"],
          ["De niña no comía verduras; ahora me encantan.","As a girl I didn't eat vegetables; now I love them."],
        ],
        [
          { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Antes ___ mucho café; ahora bebo té.", answer: "bebía", en: "I [used to drink] a lot of coffee; now I drink tea.", explanation: "An old habit with antes → imperfect: bebía." },
          toEs("Ahora corro todos los días.", "Antes corría todos los días.", "Ahora + present → antes + imperfect: corro → corría.", ["Antes yo corría todos los días."], "Change it to an old habit, starting with \"antes\"."),
        ]
      ),
    ],
    [
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Antes mi barrio ___ muy tranquilo; ahora es muy ruidoso.", answer: "era", en: "My neighborhood [used to be] very quiet; now it's very noisy.", explanation: "How a place used to be → imperfect of ser: era." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Antes mi hermana ___ al trabajo en metro; ahora va andando.", answer: "iba", en: "My sister [used to go] to work by subway; now she walks.", explanation: "Antes + an old habit takes the imperfect; ir's imperfect is irregular: iba." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "De niños, mis primos ___ en el pueblo; ahora viven en Madrid.", answer: "vivían", en: "As kids, my cousins [lived] in the village; now they live in Madrid.", explanation: "-Ir ellos imperfect: -ían, vivían." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Antes no ___ Internet en casa; ahora sí.", answer: "había", en: "Before, there [wasn't any] Internet at home; now there is.", explanation: "Hay → había in the imperfect, always singular." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Antes comíamos carne todos los días; ahora ___ más verduras.", answer: "comemos", en: "We used to eat meat every day; now we [eat] more vegetables.", explanation: "Ahora + present: comemos." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Hoy en día mi hermano ___ en Londres.", answer: "vive", en: "Nowadays my brother [lives] in London.", explanation: "Hoy en día = present: vive." },
      mc("«Hoy en día ___ más tiempo con mi familia.»", ["paso","pasaba","pasé","pasaban"], 0, "Hoy en día (nowadays) takes the present: paso. \"Pasaba\" and \"pasé\" are past, and \"pasaban\" is ellos in the past."),
      ms("Which words usually go with the imperfect?", ["antes","de niño","en aquella época","ahora"], [0,1,2], "Antes, de niño and en aquella época set up past habits or descriptions, so the imperfect. \"Ahora\" goes with the present."),
      mc("'Antes mi padre ___ mucho; ahora no trabaja.'", ["trabajaba","trabaja","trabajó","trabajábamos"], 0, "Antes + an old situation of mi padre (él): imperfect trabajaba. Trabaja is now, trabajó a single event, trabajábamos is nosotros."),
      toEs("Ahora visito poco a mis abuelos.", "Antes visitaba mucho a mis abuelos.", "Antes + imperfect for the old habit: visitaba. Poco becomes mucho for the contrast.", ["Antes yo visitaba mucho a mis abuelos."], "Change it to the old habit: before, I visited them a lot."),
      toEs("Mis padres viajan poco.", "Antes mis padres viajaban mucho.", "The old habit takes the imperfect: viajaban.", undefined, "Change it to the old habit: before, they traveled a lot."),
      toEs("Antes fumaba.", "Ahora no fumo.", "Ahora + present: fumo. The old habit (fumaba) has changed.", ["Ahora ya no fumo.","Ya no fumo."], "Change it to now: you don't smoke anymore."),
      toEs("Antes me levantaba a las diez.", "Ahora me levanto a las seis.", "Reflexive verbs follow the same rule: me levantaba (then) → me levanto (now).", undefined, "Change it to now: you get up at six."),
      toEs("Antes mi ciudad es sucia; ahora está muy limpia.", "Antes mi ciudad era sucia; ahora está muy limpia.", "Antes needs the imperfect: era. Es is the present.", ["Antes mi ciudad estaba sucia; ahora está muy limpia."], "Correct the sentence."),
      toEs("En aquella época no tuve teléfono móvil; ahora tengo dos.", "En aquella época no tenía teléfono móvil; ahora tengo dos.", "En aquella época describes an ongoing situation: imperfect tenía, not the preterite tuve.", ["En aquella época no tenía celular; ahora tengo dos."], "Correct the sentence."),
      toEs("Hoy en día dormía ocho horas.", "Hoy en día duermo ocho horas.", "Hoy en día (nowadays) needs the present: duermo.", ["Actualmente duermo ocho horas.","Ahora duermo ocho horas."], "Correct the sentence."),
      toEs("I used to live alone; now I live with my partner.", "Antes vivía solo; ahora vivo con mi pareja.", "Antes takes the imperfect (vivía), and ahora the present (vivo).", ["Antes vivía sola; ahora vivo con mi pareja.","Antes vivía solo y ahora vivo con mi pareja."]),
      toEn("En aquella época no teníamos coche.", "At that time we didn't have a car.", "Tener is regular in the imperfect: teníamos.", ["Back then we didn't have a car.","In those days we didn't have a car."]),
      toEs("Before, she used to work at night; now she works in the morning.", "Antes trabajaba de noche; ahora trabaja por la mañana.", "Old habit: trabajaba; current one: trabaja.", ["Antes ella trabajaba por la noche; ahora trabaja por la mañana.","Antes trabajaba por la noche; ahora trabaja por la mañana."]),
      toEs("As a child, I used to be afraid of the dark.", "De niño, tenía miedo de la oscuridad.", "De niño + imperfect: tenía.", ["De niña, tenía miedo de la oscuridad.","De niño, le tenía miedo a la oscuridad.","De niña, le tenía miedo a la oscuridad."]),
      wo("Antes veía mucha televisión, pero ahora leo libros", "Veía (old habit) vs. leo (now).", "I used to watch a lot of TV, but now I read books"),
      toEs("As kids, we used to play in the street; now children play with their phones.", "De niños, jugábamos en la calle; ahora los niños juegan con el móvil.", "Jugábamos (old habit) vs. juegan (current habit).", ["De niños, jugábamos en la calle; ahora los niños juegan con sus teléfonos.","De niños, jugábamos en la calle; ahora los niños juegan con el celular.","De niños, jugábamos en la calle; ahora los niños juegan con sus celulares.","De niños, jugábamos en la calle; ahora los niños juegan con sus móviles."]),
      toEs("At that time my grandfather used to write letters; now he sends messages.", "En aquella época mi abuelo escribía cartas; ahora manda mensajes.", "Escribía (then) vs. manda (now).", ["En aquella época mi abuelo escribía cartas; ahora envía mensajes."]),
      { type: "speak", prompt: "Answer aloud in Spanish: ¿Qué hacías antes que ya no haces? (Say one old habit and what you do now instead.)", text: "Antes comía mucha comida rápida, pero ahora cocino en casa.", explanation: "The old habit goes in the imperfect (comía), the current one in the present (cocino). Any true pair works." },
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
        "The rule: when two actions were in progress at the same time, both go in the imperfect, because neither one is a finished event that starts or ends the other: Mientras yo estudiaba, mi hermano escuchaba música. Mientras (while) introduces one of them and can go first or in the middle. If one action interrupts, that one switches to the preterite.",
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
        "Mientras links two ongoing actions, so both are imperfect: veía. \"Vio\" is a single completed event, \"ve\" is present, and \"verá\" future."
      ),
      wo("Mientras esperábamos el tren, comíamos unos bocadillos.", "Mientras + imperfect.", "While we were waiting for the train, we were eating some sandwiches."),
      toEs("While I was working, my son was playing.", "Mientras yo trabajaba, mi hijo jugaba.", "Mientras with two simultaneous ongoing actions: both imperfect (trabajaba, jugaba).", ["Mientras trabajaba, mi hijo jugaba.", "Mi hijo jugaba mientras yo trabajaba."]),
      toEn("Mientras llovía, nosotros jugábamos a las cartas.", "While it was raining, we were playing cards.", "Llovía and jugábamos are two simultaneous background actions, both imperfect.", ["While it rained, we played cards.", "While it was raining, we played cards."]),
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
        [
          "Remember the rule: childhood is a long period with no single moment, so everything you say about it is imperfect: habits (jugaba), descriptions (mi casa era), likes (me gustaba) and states (tenía miedo). Use the preterite only for a one-off event that happened once.",
          "Start with Cuando era niño/a… or De pequeño/a… (never cuando fui niño). Then describe: dónde vivías, cómo era tu casa, qué hacías después del colegio, qué te gustaba, con quién jugabas.",
        ],
        [
          ["De pequeña me gustaba mucho leer.", "When I was little I really liked reading."],
          ["Cuando era niño, jugaba al fútbol con mis vecinos.", "When I was a kid, I played football with my neighbors."],
        ],
        [
          mc(
            "A friend asks «¿Dónde vivías de pequeño?» Which answer fits?",
            ["Vivía en un pueblo cerca de la costa.", "Vivo en un pueblo cerca de la costa.", "Viviré en un pueblo cerca de la costa.", "Vivir en un pueblo cerca de la costa."],
            0,
            "De pequeño refers to a childhood period, so the answer takes the imperfect: vivía. Vivo is now, viviré is the future, and vivir is the unconjugated infinitive."
          ),
        ]
      ),
    ],
    [
      toEs("When I was a child, I lived in a small town.", "Cuando era niño, vivía en un pueblo pequeño.", "Childhood age and where you lived are background, so both imperfect: era, vivía.", ["Cuando era niña, vivía en un pueblo pequeño.", "De pequeño, vivía en un pueblo pequeño."]),
      toEs("My house had a big garden.", "Mi casa tenía un jardín grande.", "Describing the house takes the imperfect: tenía.", ["Mi casa tenía un jardín muy grande."]),
      toEs("After school I used to play with my brother.", "Después del colegio jugaba con mi hermano.", "A past habit takes the imperfect: jugaba.", ["Después de la escuela jugaba con mi hermano."]),
      toEs("I liked chocolate a lot.", "Me gustaba mucho el chocolate.", "A lasting past liking takes the imperfect of gustar: me gustaba.", ["Me encantaba el chocolate."]),
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
    "A memory written with wrong imperfect forms (íba, eraba, vía for veía): repair every verb.",
    "6 min",
    [
      sec(
        "Common imperfect errors",
        [
          "Remember the rule: the imperfect has only two regular patterns, -aba for -ar verbs and -ía for -er / -ir verbs, and only three irregular verbs: ser (era), ir (iba) and ver (veía). Most mistakes come from mixing these: adding -aba to ser (eraba), dropping the e of ver (vía), or using a preterite ending (tenió).",
          "Accents: iba, ibas, iba and iban have none; only nosotros does, on the first syllable (íbamos, éramos, -ábamos). Paragraph: «En 1998 yo vivía en Lima. Eraba estudiante y íba a la universidad en autobús. Por las tardes vía a mis amigos.»",
        ],
        [
          ["✗ Eraba estudiante. → ✓ Era estudiante.", "I was a student."],
          ["✗ Vía a mis amigos. → ✓ Veía a mis amigos.", "I used to see my friends."],
        ],
        [
          fb("Fix it.", "___ estudiante de medicina. (the text says: Eraba)", "Era", "Ser is irregular in the imperfect: era, not eraba."),
        ]
      ),
    ],
    [
      fb("Fix it.", "___ a la universidad en autobús. (the text says: Íba)", "Iba", "Iba (imperfect of ir) has no written accent; only íbamos does."),
      fb("Fix it.", "Por las tardes ___ a mis amigos. (the text says: vía)", "veía", "Ver keeps its e in the imperfect: veía, not vía."),
      fb("Fix it.", "Nosotros ___ en un piso pequeño. (the text says: vivíbamos)", "vivíamos", "-Ir verbs take -íamos for nosotros in the imperfect: vivíamos."),
      fb("Fix it.", "Mis padres ___ en una fábrica. (the text says: trabajían)", "trabajaban", "-Ar verbs take -aban for ellos in the imperfect: trabajaban."),
      fb("Fix it.", "El barrio ___ muchos parques. (the text says: tenió)", "tenía", "Tener is regular in the imperfect: tenía."),
      mc(
        "Which sentence is correct?",
        ["Siempre íbamos al cine los viernes.", "Siempre ibámos al cine los viernes.", "Siempre íbabamos al cine.", "Siempre ivamos al cine."],
        0,
        "Íbamos has its accent on the first í. \"Ibámos\" puts it on the wrong syllable, \"íbabamos\" repeats a syllable, and \"ivamos\" is misspelled with v."
      ),
      ms(
        "Which forms are wrong?",
        ["eraba", "veía", "íba", "estaba"],
        [0, 2],
        "\"Eraba\" and \"íba\" are wrong: ser's imperfect is era, and iba has no accent. \"Veía\" and \"estaba\" are correct."
      ),
      toEs("We were students and we used to go out a lot.", "Éramos estudiantes y salíamos mucho.", "Ser → éramos and salir → salíamos, both imperfect for description and habit.", ["Éramos estudiantes y salíamos bastante."]),
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
        "Remember the rule, as a checklist: 1) Is it ser, ir or ver? Use the irregular form (era, iba, veía). 2) Otherwise, -ar → -aba… and -er / -ir → -ía…, with no stem changes. 3) Accents: every -ía form has one, but in -ar verbs only nosotros does (-ábamos).",
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
        "Pelearse with nosotros takes nos, and a childhood habit takes the imperfect: nos peleábamos. \"Se peleaban\" is ellos, \"nos peleamos ayer\" is a single event, and \"peleábamos nos\" puts the pronoun after the verb."
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
        "Remember the rule: four reasons, two tenses",
        [
          "Remember the rule: the preterite reports a completed event, and the imperfect shows the past from the inside. In practice that gives four reasons. Preterite: (1) a completed action at a clear moment or with a clear end (Ayer llamé a Ana). Imperfect: (2) background or description (Hacía sol), (3) a habit (Siempre llamaba a Ana), (4) an action in progress when something happened (Hablaba cuando…).",
          "Naming the reason before you choose is the fastest way to get it right.",
        ],
        [
          ["Siempre comíamos a las dos.","We always ate at two. (habit: imperfect)"],
          ["Ese día comimos a las cuatro.","That day we ate at four. (one completed event: preterite)"],
        ],
        [
          mc("«Anoche ___ una pizza.» Tense and reason?", ["preterite — completed action at a specific time","imperfect — habit","imperfect — background","preterite — description"], 0, "Anoche with a single event takes the preterite: comí, a completed action at a specific time. It's not a habit, background or a description."),
          toEs("Los lunes me levantaba a las siete.", "El lunes me levanté a las siete.", "Los lunes (every Monday) is a habit: imperfect. El lunes (that one Monday) is a single event: preterite me levanté.", undefined, "Change it to one specific Monday (el lunes)."),
        ]
      ),
    ],
    [
      mc("«Todos los veranos ___ a Galicia.» (ir, nosotros)", ["íbamos — habit","fuimos — single event","íbamos — interruption","fuimos — background"], 0, "Todos los veranos marks a habit, so the imperfect: íbamos. \"Fuimos\" would be a single event, and the other labels (interruption, background) don't describe a yearly trip."),
      mc("«___ una noche muy oscura.» (ser)", ["Era — background","Fue — completed action","Era — habit","Fue — interruption"], 0, "Setting the scene is background, so the imperfect: era una noche muy oscura. \"Fue\" would present it as an event, and there's no habit or interruption here."),
      mc("«El sábado ___ a mis padres.» (visitar, yo)", ["visité — completed event","visitaba — habit","visitaba — background","visité — habit"], 0, "El sábado is one occasion, so the preterite: visité, a completed event. \"Visitaba\" would be a habit or background, and the preterite does not normally mark a habit."),
      mc("«De niño ___ mucho miedo de los perros.» (tener, yo)", ["tenía — background/description","tuve — completed action","tenía — interruption","tuve — habit"], 0, "A feeling over a period of childhood is background: tenía."),
      mc("«Yo ___ cuando se rompió la ventana.» (dormir)", ["dormía — in progress","dormí — completed event","dormía — habit","dormí — background"], 0, "Something was in progress when an event happened: dormía. The window breaking is the completed event."),
      mc("«Mientras yo cocinaba, mi hermano ___ la mesa.» Why the imperfect for both?", ["Two actions in progress at the same time","Two habits","One interrupts the other","Both are completed events"], 0, "Mientras links two simultaneous actions in progress: cocinaba and ponía. Neither interrupts the other."),
      mt("Match each sentence with its reason.", [["Llovía mucho.","background"],["Siempre llegaba tarde.","habit"],["Llegó tarde el lunes.","completed event"],["Leía cuando sonó el timbre.","in progress"]], "The four reasons for choosing the tense."),
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "De joven mi padre ___ en un restaurante.", answer: "trabajaba", en: "When he was young, my father [used to work] in a restaurant.", explanation: "A period of his life seen from the inside → imperfect." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "En 2015 mi padre ___ un restaurante.", answer: "abrió", en: "In 2015 my father [opened] a restaurant.", explanation: "A single, dated event → preterite." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Yo ___ una ducha cuando sonó el teléfono.", answer: "tomaba", en: "I [was taking] a shower when the phone rang.", altAnswers: ["estaba tomando"], explanation: "An action in progress when another cut in → imperfect." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Los domingos siempre ___ en casa de mis tíos.", answer: "comíamos", en: "On Sundays we always [used to eat] at my aunt and uncle's house.", explanation: "A habit: imperfect comíamos." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "La casa ___ grande y tenía un jardín.", answer: "era", en: "The house [was] big and had a garden.", explanation: "Description: imperfect era." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Ana ___ por teléfono cuando entró el jefe.", answer: "hablaba", en: "Ana [was talking] on the phone when the boss came in.", altAnswers: ["estaba hablando"], explanation: "In progress when interrupted: hablaba." },
      toEs("Siempre comíamos en casa de mis tíos.", "Ese domingo comimos en un restaurante.", "Ese domingo (that one Sunday) is a single completed event: preterite comimos.", undefined, "Change it to one specific day: that Sunday we ate at a restaurant."),
      toEs("Ayer escuché la radio.", "Siempre escuchaba la radio.", "Siempre makes it a habit: escuché → escuchaba.", undefined, "Change it to a habit with siempre."),
      toEs("En 2018 mis padres compraban una casa en el campo.", "En 2018 mis padres compraron una casa en el campo.", "A dated, completed event: compraron.", undefined, "Correct the sentence."),
      toEs("El parque estuvo tranquilo y hacía sol.", "El parque estaba tranquilo y hacía sol.", "A description of the scene is background, like hacía sol: estaba tranquilo.", undefined, "Correct the sentence."),
      toEs("Estudié cuando llegaron mis amigos.", "Estudiaba cuando llegaron mis amigos.", "The studying was in progress when the friends arrived: estudiaba.", ["Estaba estudiando cuando llegaron mis amigos.","Estudiaba cuando mis amigos llegaron."], "Correct the sentence."),
      toEs("Every day I walked to school, but that day I took the bus.", "Todos los días caminaba al colegio, pero ese día tomé el autobús.", "Todos los días is a habit (imperfect caminaba), and ese día is a single event (preterite tomé).", ["Todos los días iba andando al colegio, pero ese día tomé el autobús.","Todos los días caminaba a la escuela, pero ese día tomé el autobús."]),
      toEs("I always listened to the radio in the car.", "Siempre escuchaba la radio en el coche.", "Siempre = habit: imperfect escuchaba.", ["Siempre escuchaba la radio en el carro.","Siempre escuchaba la radio en el auto.","En el coche siempre escuchaba la radio."]),
      wo("Normalmente iba en metro, pero ese día fui en taxi", "Iba = habit; fui = that one day.", "I normally went by metro, but that day I went by taxi"),
      toEs("When I was a child I didn't like fish, but yesterday I ate it.", "De niño no me gustaba el pescado, pero ayer lo comí.", "Gustaba (lasting feeling) vs. comí (one event).", ["De niña no me gustaba el pescado, pero ayer lo comí.","Cuando era niño no me gustaba el pescado, pero ayer lo comí.","Cuando era niña no me gustaba el pescado, pero ayer lo comí."]),
      toEs("It was raining, so I stayed at home and watched a movie.", "Llovía, así que me quedé en casa y vi una película.", "Llovía = background; me quedé and vi = completed actions.", ["Estaba lloviendo, así que me quedé en casa y vi una película.","Llovía, así que me quedé en casa y miré una película."]),
      toEs("It was midnight and the street was empty.", "Era medianoche y la calle estaba vacía.", "Time and description: both imperfect background."),
      { type: "speak", prompt: "Say it in Spanish and name the reasons to yourself: I usually had breakfast at home, but on Monday I had breakfast at a café.", text: "Normalmente desayunaba en casa, pero el lunes desayuné en una cafetería.", explanation: "Desayunaba = habit (imperfect); el lunes desayuné = one completed event (preterite)." },
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
        "Remember the rule: signal words carry the meaning",
        [
          "Remember the rule: the preterite presents a past event as one bounded whole; the imperfect presents repetition, background or something in progress. Signal words point one way or the other because of what they mean.",
          "Usually preterite (one moment, one occasion, a closed period): ayer, anoche, el lunes pasado, una vez, de repente, en 2010, a las cinco. Usually imperfect (repetition, ongoing time): siempre, a menudo, todos los días, cada verano, de niño, mientras, normalmente. They are strong hints, not absolute rules: what you mean always decides.",
        ],
        [
          ["De repente se apagó la luz.","Suddenly the light went out. (one sudden event)"],
          ["Normalmente cenábamos a las nueve.","Normally we had dinner at nine. (repetition)"],
        ],
        [
          ms("Which words usually go with the preterite?", ["de repente","anoche","una vez","a menudo"], [0,1,2], "De repente, anoche and una vez mark single events, so the preterite. \"A menudo\" (often) marks a habit, so the imperfect."),
          mc("\"Con frecuencia\" is new to you. It means \"frequently\". Which tense will it usually take?", ["Imperfect: it marks repetition.","Preterite: it marks one moment.","Either, it never matters.","Only the present."], 0, "Apply the meaning: con frecuencia = again and again, a habit, so the imperfect (con frecuencia íbamos al cine)."),
        ]
      ),
    ],
    [
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "A menudo ___ a mis abuelos.", answer: "visitaba", en: "I often [used to visit] my grandparents.", explanation: "A menudo marks repetition → imperfect: visitaba." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Una vez ___ a un famoso en el aeropuerto.", answer: "vi", en: "Once I [saw] a celebrity at the airport.", explanation: "Una vez marks one occasion → preterite: vi (no accent)." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "De repente ___ un ruido muy fuerte.", answer: "oímos", en: "Suddenly we [heard] a very loud noise.", altAnswers: ["escuchamos"], explanation: "De repente marks a sudden single event → preterite: oímos." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Cada verano ___ en el mismo camping.", answer: "acampábamos", en: "Every summer we [used to camp] at the same campsite.", explanation: "Cada verano marks repetition → imperfect: acampábamos." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Anoche ___ muy tarde.", answer: "me acosté", en: "Last night I [went to bed] very late.", explanation: "Anoche marks one bounded time → preterite: me acosté." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "En 2010 ___ a Buenos Aires.", answer: "viajé", en: "In 2010 I [traveled] to Buenos Aires.", explanation: "A specific year for one trip: preterite." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "A las cinco ___ la reunión.", answer: "terminó", en: "At five the meeting [ended].", explanation: "A clock time for one event: preterite." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Todos los días mis hijos ___ leche en el desayuno.", answer: "tomaban", en: "Every day my kids [used to drink] milk at breakfast.", altAnswers: ["bebían"], explanation: "Todos los días marks repetition → imperfect." },
      mt("Match the signal word with the tense it usually takes.", [["normalmente","imperfect"],["el año pasado","preterite"],["de niño","imperfect (description)"]], "Repetition and stages of life → imperfect; a closed period → preterite."),
      mc("«Ayer ___ todo el día.» (llover)", ["llovió","llovía siempre","llueve","lloverá"], 0, "Ayer is a closed day, so the preterite: llovió. \"Llovía siempre\" is a habit, \"llueve\" is present, and \"lloverá\" is future."),
      mc("'Normalmente ___ a las nueve.' (cenar, nosotros)", ["cenábamos","cenamos ayer","cenaremos","cenaron"], 0, "Normalmente signals a habit: imperfect cenábamos."),
      toEs("Anoche dormí bien.", "Normalmente dormía bien.", "Swapping anoche for normalmente turns one night into a habit: dormí → dormía.", ["Normalmente yo dormía bien."], "Change \"anoche\" to \"normalmente\"."),
      toEs("Mi jefe siempre llegaba muy tarde.", "El lunes pasado mi jefe llegó muy tarde.", "El lunes pasado is one occasion: llegaba → llegó.", ["Mi jefe llegó muy tarde el lunes pasado."], "Change \"siempre\" to \"el lunes pasado\"."),
      toEs("Una vez fuimos al cine.", "A menudo íbamos al cine.", "A menudo marks repetition: fuimos → íbamos.", ["Íbamos al cine a menudo."], "Change \"una vez\" to \"a menudo\"."),
      toEs("Cada invierno fuimos a esquiar.", "Cada invierno íbamos a esquiar.", "Cada invierno is repetition → imperfect: íbamos.", undefined, "Correct the sentence."),
      toEs("De repente el bebé lloraba.", "De repente el bebé lloró.", "De repente introduces one sudden event → preterite: lloró.", ["De pronto el bebé lloró."], "Correct the sentence."),
      toEs("Una vez perdía mi pasaporte.", "Una vez perdí mi pasaporte.", "Una vez = one occasion → preterite: perdí.", ["Una vez perdí el pasaporte."], "Correct the sentence."),
      toEs("Suddenly the dog started to bark.", "De repente el perro empezó a ladrar.", "De repente marks a sudden event, so the preterite: empezó.", ["De repente, el perro comenzó a ladrar."]),
      toEs("As a child, I used to eat a lot of candy.", "De niño, comía muchos dulces.", "De niño → imperfect.", ["De niña, comía muchos dulces.","De niño, comía muchos caramelos.","De niña, comía muchos caramelos."]),
      wo("Mientras mi madre cocinaba yo hacía la tarea", "Mientras → two ongoing actions in the imperfect.", "While my mother was cooking I was doing my homework"),
      toEs("Last year it rained a lot, but normally it didn't rain here.", "El año pasado llovió mucho, pero normalmente no llovía aquí.", "El año pasado → preterite; normalmente → imperfect.", ["El año pasado llovió mucho, pero normalmente aquí no llovía."]),
      toEs("My boss always arrived late, but on Monday he arrived at seven.", "Mi jefe siempre llegaba tarde, pero el lunes llegó a las siete.", "Siempre → imperfect; el lunes (one day) → preterite.", ["Mi jefe siempre llegaba tarde, pero el lunes llegó a las 7."]),
      { type: "speak", prompt: "Say it in Spanish: Every summer we went to the beach, but last summer we went to the mountains.", text: "Cada verano íbamos a la playa, pero el verano pasado fuimos a la montaña.", explanation: "Cada verano (repetition) → íbamos; el verano pasado (one closed summer) → fuimos." },
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
        "Remember the rule: in progress + interruption",
        [
          "Remember the rule: the action that was already going on is imperfect (we see it from the inside, mid-way); the action that cuts in is preterite (a complete event). Yo leía cuando llegó mi hermano.",
          "Cuando can go on either side, and the tenses don't change: Cuando llegó mi hermano, yo leía. Ask \"which one was already happening?\", never \"which comes first in the sentence?\". Mientras (while) usually introduces the action in progress.",
        ],
        [
          ["Dormíamos cuando empezó la tormenta.","We were sleeping when the storm started. (in progress + event)"],
          ["Cuando salí, llovía.","When I went out, it was raining. (cuando + event first, scene second)"],
        ],
        [
          { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Yo ___ la cena cuando llegaron los invitados.", answer: "preparaba", en: "I [was making] dinner when the guests arrived.", altAnswers: ["hacía","cocinaba"], explanation: "The cooking was already in progress → imperfect: preparaba." },
          toEs("Mi padre leía. Sonó el teléfono.", "Mi padre leía cuando sonó el teléfono.", "Reading = in progress (imperfect); the phone = the event that cuts in (preterite), joined with cuando.", ["Cuando sonó el teléfono, mi padre leía."], "Turn them into one sentence with cuando."),
        ]
      ),
    ],
    [
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Caminaba por la calle cuando ___ a mi exnovio.", answer: "vi", en: "I was walking down the street when I [saw] my ex-boyfriend.", explanation: "Seeing him is the event that interrupts the walk → preterite: vi." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Los niños ___ cuando se fue la luz.", answer: "jugaban", en: "The children [were playing] when the power went out.", altAnswers: ["estaban jugando"], explanation: "The playing was in progress → imperfect." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Cuando ___ el teléfono, estaba en la ducha.", answer: "sonó", en: "When the phone [rang], I was in the shower.", explanation: "The phone ringing is the event → preterite, even at the start of the sentence." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Cuando llegué a la estación, muchos pasajeros ___ en el andén.", answer: "esperaban", en: "When I got to the station, a lot of passengers [were waiting] on the platform.", altAnswers: ["estaban esperando"], explanation: "The waiting was already going on when I arrived → imperfect." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Yo leía en el sofá cuando ___ el perro.", answer: "entró", en: "I was reading on the sofa when the dog [came in].", explanation: "The interrupting event: entró." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Cuando ___ de la oficina, hacía mucho frío.", answer: "salí", en: "When I [left] the office, it was very cold.", explanation: "Cuando + the event: preterite salí; the cold is background." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Los estudiantes ___ un examen cuando sonó la alarma.", answer: "hacían", en: "The students [were taking] an exam when the alarm went off.", altAnswers: ["estaban haciendo"], explanation: "Hacer is regular in the imperfect: hacían." },
      mc("«Mientras cenábamos, alguien ___ a la puerta.»", ["llamó","llamaba","llama","llamará"], 0, "Someone knocking interrupts the dinner, so the preterite: llamó. \"Llamaba\" would be ongoing, \"llama\" is present, and \"llamará\" is future."),
      mc("'Cuando llegué a casa, mis hijos ___.' (dormir)", ["dormían","durmieron","duermen","dormirán"], 0, "Cuando + preterite event, then the scene in progress: imperfect dormían. Durmieron would mean they slept (as a whole event)."),
      mc("Which sentence is right?", ["Cuando sonó la alarma, me duchaba.","Cuando sonaba la alarma, me duché.","Cuando sonó la alarma, me duché mientras.","Cuando sonaba la alarma, me duchaba ayer."], 0, "The shower was in progress (me duchaba) and the alarm cut in (sonó). Swapping the tenses makes the alarm the background and the shower the sudden event."),
      toEs("Nosotros comimos. Llegó la policía.", "Nosotros comíamos cuando llegó la policía.", "Eating was in progress → comíamos; the police arriving is the event → llegó.", ["Comíamos cuando llegó la policía.","Estábamos comiendo cuando llegó la policía.","Cuando llegó la policía, comíamos."], "Turn them into one sentence with cuando."),
      toEs("Mi madre se duchó. Sonó el timbre.", "Mi madre se duchaba cuando sonó el timbre.", "The shower was in progress → se duchaba; the doorbell interrupts → sonó.", ["Mi madre se estaba duchando cuando sonó el timbre.","Cuando sonó el timbre, mi madre se duchaba."], "Turn them into one sentence with cuando."),
      toEs("Esperaban el autobús. Empezó a llover.", "Esperaban el autobús cuando empezó a llover.", "Esperaban in progress; empezó interrupts.", ["Estaban esperando el autobús cuando empezó a llover.","Cuando empezó a llover, esperaban el autobús."], "Turn them into one sentence with cuando."),
      toEs("Dormí cuando llegaste.", "Dormía cuando llegaste.", "The sleeping was in progress when you arrived → imperfect: dormía.", ["Estaba durmiendo cuando llegaste."], "Correct the sentence."),
      toEs("Cuando llegaba, todos bailaron.", "Cuando llegué, todos bailaban.", "The arrival is the event (llegué); the dancing was already going on (bailaban). The tenses were swapped.", ["Cuando llegué, todos estaban bailando."], "Correct the sentence."),
      toEs("Trabajaba cuando mi jefe me llamaba.", "Trabajaba cuando mi jefe me llamó.", "The call is a single event that interrupts: llamó.", ["Estaba trabajando cuando mi jefe me llamó."], "Correct the sentence."),
      toEs("We were watching TV when my father arrived.", "Veíamos la tele cuando llegó mi padre.", "The action in progress is imperfect (veíamos), and the interruption is preterite (llegó).", ["Estábamos viendo la tele cuando llegó mi padre.","Veíamos la televisión cuando llegó mi padre."]),
      toEn("Cuando entré, todos hablaban a la vez.", "When I came in, everyone was talking at once.", "Entré is the event (preterite), and hablaban is what was going on (imperfect).", ["When I walked in, everybody was talking at the same time.","When I entered, everyone was talking at once."]),
      toEs("She was cooking when her son came in.", "Cocinaba cuando entró su hijo.", "Imperfect for the background action, preterite for the interruption.", ["Cocinaba cuando su hijo entró.","Estaba cocinando cuando entró su hijo.","Estaba cocinando cuando su hijo entró."]),
      toEs("We were watching a movie when my sister called.", "Veíamos una película cuando llamó mi hermana.", "Veíamos in progress; llamó interrupts.", ["Estábamos viendo una película cuando llamó mi hermana.","Veíamos una película cuando mi hermana llamó.","Mirábamos una película cuando llamó mi hermana."]),
      wo("Yo escribía un correo cuando se apagó el ordenador.", "Imperfect + cuando + preterite.", "I was writing an email when the computer shut down."),
      wo("Cuando entré en la clase, el profesor hablaba", "Cuando + preterite (entré), then ongoing imperfect (hablaba).", "When I came into the class, the teacher was talking"),
      toEs("I was having lunch with my boss when I got your message.", "Almorzaba con mi jefe cuando recibí tu mensaje.", "Almorzaba in progress; recibí interrupts.", ["Estaba almorzando con mi jefe cuando recibí tu mensaje.","Comía con mi jefe cuando recibí tu mensaje."]),
      toEs("When the guests arrived, my husband was still cleaning the kitchen.", "Cuando llegaron los invitados, mi esposo todavía limpiaba la cocina.", "Llegaron = event; limpiaba = still in progress.", ["Cuando llegaron los invitados, mi marido todavía limpiaba la cocina.","Cuando llegaron los invitados, mi esposo todavía estaba limpiando la cocina.","Cuando llegaron los invitados, mi marido todavía estaba limpiando la cocina."]),
      { type: "speak", prompt: "Tell it aloud in Spanish: I was driving to work when my car stopped.", text: "Conducía al trabajo cuando se paró mi coche.", explanation: "Conducía = in progress (imperfect); se paró = the event that interrupts (preterite). In Latin America: Manejaba al trabajo cuando se paró mi carro." },
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
        "Remember the rule, then read the story",
        [
          "Remember the rule: for every gap, ask \"scene or event?\". Scene (time, weather, age, what things looked like, what someone was doing) → imperfect. Event (something that happened and moved the story on) → preterite.",
          "«Era enero y hacía mucho frío. Yo tenía nueve años. Esa mañana me desperté temprano y miré por la ventana: todo estaba blanco. Corrí a la cocina, donde mi madre preparaba el desayuno. “¡No hay colegio!”, dijo. Salimos al jardín y construimos un muñeco de nieve enorme.»",
        ],
        [
          ["Todo estaba blanco.","Everything was white. (what it looked like: scene)"],
          ["Corrí a la cocina.","I ran to the kitchen. (what happened: event)"],
        ],
        [
          mc("Why is «hacía mucho frío» in the imperfect?", ["it describes the background weather","it's a single completed action","it interrupts something","it's a future plan"], 0, "Hacía mucho frío describes the background weather. It isn't a single completed action, an interruption or a plan."),
          mc("Why was there no school?", ["Because of the snow","Because it was Sunday","Because the boy was sick","Because the teacher was away"], 0, "Everything was white with snow when the narrator looked out, and the mother announced «¡No hay colegio!»: a snow day."),
        ]
      ),
    ],
    [
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "___ enero y hacía mucho frío.", answer: "Era", en: "It [was] January and it was very cold.", explanation: "Setting the scene (the month) → imperfect of ser: era." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Yo ___ nueve años.", answer: "tenía", en: "I [was] nine [years old].", explanation: "Age → imperfect: tenía." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Esa mañana ___ temprano.", answer: "me desperté", en: "That morning I [woke up] early.", explanation: "Waking up that morning is an event → preterite." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Mi madre ___ el desayuno.", answer: "preparaba", en: "My mother [was making] breakfast.", altAnswers: ["hacía"], explanation: "What someone was doing when the narrator came in → imperfect." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "___ al jardín con mi hermana.", answer: "Salí", en: "I [went out] into the garden with my sister.", explanation: "An event → preterite." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Juntos ___ un muñeco de nieve.", answer: "construimos", en: "Together we [built] a snowman.", explanation: "An event → preterite." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Esa mañana ___ mucho.", answer: "nevaba", en: "That morning it [was snowing] a lot.", altAnswers: ["estaba nevando"], explanation: "Weather as background takes the imperfect, not nevó." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "De repente, el teléfono ___.", answer: "sonó", en: "Suddenly, the phone [rang].", explanation: "De repente + a single event: preterite sonó." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Mi madre ___ el teléfono y habló con la escuela.", answer: "contestó", en: "My mother [answered] the phone and spoke to the school.", altAnswers: ["cogió","tomó"], explanation: "A completed action in the chain of events: preterite." },
      mc("«Todo estaba blanco» describes…", ["what the scene looked like","an action that interrupted","a completed event","a habit"], 0, "Estaba describes what the scene looked like, so the imperfect. It's not an interruption, a completed event or a habit."),
      mc("«Cuando salimos, ___ muchísimo frío.»", ["hacía","hizo","hace","hará"], 0, "The cold is the background to salimos, so imperfect hacía. Hizo would make the cold an event of its own."),
      toEs("Las calles están vacías y blancas.", "Las calles estaban vacías y blancas.", "Describing the scene → imperfect: estaban, not estuvieron.", undefined, "Change it to the past (tell the story)."),
      toEs("Mi hermano y yo miramos por la ventana.", "Mi hermano y yo miramos por la ventana esa mañana.", "Miramos is the same form in present and preterite; adding esa mañana shows it's one completed past action.", ["Esa mañana mi hermano y yo miramos por la ventana."], "Turn it into a past event by adding \"that morning\"."),
      toEs("Mi padre toma café en la cocina.", "Mi padre tomaba café en la cocina.", "What someone was doing in the background → imperfect.", ["Mi padre bebía café en la cocina.","Mi padre estaba tomando café en la cocina."], "Change it to the past (tell the story)."),
      toEs("Me pongo el abrigo y salgo.", "Me puse el abrigo y salí.", "Two actions in sequence → preterite: me puse (poner: pus-) and salí.", undefined, "Change it to the past (tell the story)."),
      toEs("Hubo mucha nieve en el jardín.", "Había mucha nieve en el jardín.", "Había describes what the scene looked like: imperfect, not hubo.", undefined, "Correct the sentence."),
      toEs("Mi hermana llevó un gorro rojo.", "Mi hermana llevaba un gorro rojo.", "The clothes someone had on are description: imperfect llevaba.", undefined, "Correct the sentence."),
      toEs("Construíamos el muñeco de nieve en dos horas.", "Construimos el muñeco de nieve en dos horas.", "A completed action with a measured time (en dos horas) → preterite: construimos.", undefined, "Correct the sentence."),
      toEs("It was snowing and the streets were empty.", "Nevaba y las calles estaban vacías.", "Two background descriptions, so both imperfect: nevaba, estaban vacías.", ["Estaba nevando y las calles estaban vacías."]),
      toEs("We were very happy because there was no school.", "Estábamos muy contentos porque no había colegio.", "Feelings and circumstances as background take the imperfect.", ["Estábamos muy contentos porque no había clase.","Estábamos muy contentos porque no había escuela.","Estábamos muy felices porque no había colegio.","Estábamos muy felices porque no había clase.","Estábamos muy felices porque no había escuela."]),
      wo("Mientras construíamos el muñeco, empezó a nevar otra vez", "Mientras + action in progress (imperfect), interrupted by an event (preterite).", "While we were building the snowman, it started snowing again"),
      toEs("While we were playing in the snow, my father came out with a camera.", "Mientras jugábamos en la nieve, mi padre salió con una cámara.", "Jugábamos is the action in progress (imperfect); salió is the event that happens during it (preterite).", ["Mientras jugábamos en la nieve, mi padre salió con una cámara de fotos.","Mientras estábamos jugando en la nieve, mi padre salió con una cámara."]),
      toEs("My sister was six and she loved the snow.", "Mi hermana tenía seis años y le encantaba la nieve.", "Age and likes are description: tenía and encantaba, both imperfect."),
      toEs("At one o'clock we went into the house to eat.", "A la una entramos en casa para comer.", "A single action at a specific time: preterite entramos.", ["A la una entramos a casa para comer.","A la una entramos en la casa para comer.","A la una entramos a la casa para comer."]),
      toEs("That night it stopped snowing and everything was quiet.", "Esa noche dejó de nevar y todo estaba tranquilo.", "Dejó de nevar is an event (preterite); todo estaba tranquilo describes the result (imperfect).", ["Esa noche dejó de nevar y todo estaba en silencio."]),
      { type: "speak", prompt: "Continue the story aloud in Spanish: In the afternoon it was very cold, so we went into the house and drank hot chocolate.", text: "Por la tarde hacía mucho frío, así que entramos en casa y tomamos chocolate caliente.", explanation: "Hacía frío is the scene (imperfect); entramos and tomamos are events (preterite)." },
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
        "Remember the rule: the tense changes the meaning",
        [
          "Remember the rule: the imperfect describes a state as it was going on; the preterite reports a complete event. With a few verbs, that difference is big enough that English uses a different word.",
          "Conocer: conocía (I knew someone already, a state) / conocí (I met them, the moment the knowing began). Saber: sabía (I knew) / supe (I found out). Querer: quería (I wanted) / no quise (I refused: the not-wanting became an act). Tener: tenía (I had) / tuve (I got, received; I had at one moment).",
        ],
        [
          ["Conocí a mi mujer en 2010.","I met my wife in 2010. (the moment it started)"],
          ["Ya conocía a su hermano.","I already knew her brother. (an existing state)"],
        ],
        [
          mc("«Ayer supe la verdad» means…", ["Yesterday I found out the truth.","Yesterday I knew the truth.","I always knew the truth.","I will know the truth."], 0, "Saber in the preterite means found out: supe la verdad. \"Knew\" would be sabía, and the other options change the time."),
          mc("Poder follows the same logic. «No pude abrir la puerta» means…", ["I tried and failed to open the door.","I wasn't generally able to open doors.","I didn't want to open the door.","I found out how to open the door."], 0, "Poder in the preterite reports the event: I tried and couldn't (failed). No podía would describe a general inability or the situation."),
        ]
      ),
    ],
    [
      mc("«No quiso venir» means…", ["He refused to come.","He didn't want to come (in general).","He wanted to come.","He couldn't come."], 0, "Negative querer in the preterite means refused: no quiso venir. The general \"didn't want to\" would be no quería, and the other options change the meaning."),
      mc("«Tuve una llamada de mi abuela» most naturally means…", ["I got a call from my grandmother.","I used to have calls.","I have a call.","I wanted a call."], 0, "Tener in the preterite can mean got or received: tuve una llamada. \"Used to have\" is tenía, \"I have\" is tengo, and wanting would be querer."),
      mc("«No quería ir a la fiesta, pero fui.» What does «no quería» tell us?", ["I didn't feel like going, but I went.","I refused and didn't go.","I found out about the party.","I met people at the party."], 0, "The imperfect only describes the wish; refusing would be no quise."),
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "___ a Carlos en una fiesta el año pasado.", answer: "Conocí", en: "I [met] Carlos at a party last year.", explanation: "A first meeting is the moment knowing begins → preterite." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Yo ya ___ a Carlos desde el colegio.", answer: "conocía", en: "I already [knew] Carlos from school.", explanation: "Already knowing someone is a state → imperfect." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Cuando ___ la noticia, llamé a mi madre.", answer: "supe", en: "When I [found out] the news, I called my mother.", explanation: "Finding out is an event → preterite of saber: supe." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Yo no ___ que estabas enfermo.", answer: "sabía", en: "I did not [know] that you were sick.", explanation: "A state of (not) knowing → imperfect." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Mi hijo no ___ comer las verduras.", answer: "quiso", en: "My son [refused to] eat the vegetables.", explanation: "No + querer in the preterite = refused; no quería just describes not wanting." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "De niño, ___ ser astronauta.", answer: "quería", en: "As a child, I [wanted] to be an astronaut.", explanation: "A wish that lasted over time is querer in the imperfect." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "El lunes ___ una reunión muy larga.", answer: "tuve", en: "On Monday I [had] a very long meeting.", explanation: "A single event on a finished day: tener in the preterite." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Antes ___ un perro muy grande.", answer: "tenía", en: "Before, I [had] a very big dog.", explanation: "Owning something over a period of time is tener in the imperfect." },
      mt("Match each form with its meaning.", [["conocí","I met"],["sabía","I knew"],["supe","I found out"],["quería","I wanted"]], "Imperfect = the state; preterite = the event that starts or ends it."),
      toEs("Ya conocía a Laura.", "Conocí a Laura en 2015.", "A first meeting with a date is an event: conocía (already knew) → conocí (met).", undefined, "Change it to the moment you met her, in 2015."),
      toEs("Mis padres sabían la verdad.", "Mis padres supieron la verdad el viernes.", "Found out on a specific day: sabían (knew) → supieron (found out).", ["El viernes mis padres supieron la verdad."], "Change it to finding out, on Friday."),
      toEs("Mi padre no quería vender la casa.", "Mi padre no quiso vender la casa.", "Turning the reluctance into a refusal (an act) needs the preterite: no quiso.", undefined, "Change it so he refused."),
      toEs("Ya conocí la ciudad, así que no necesitaba un mapa.", "Ya conocía la ciudad, así que no necesitaba un mapa.", "Already being familiar with a place is a state → imperfect conocía. Conocí would mean \"I got to know / saw it for the first time\".", ["Ya conocíamos la ciudad, así que no necesitábamos un mapa."], "Correct the sentence."),
      toEs("Ella no supo mi nombre durante toda la cena.", "Ella no sabía mi nombre durante toda la cena.", "Not knowing someone's name is an ongoing state → imperfect: sabía.", undefined, "Correct the sentence."),
      toEs("La semana pasada teníamos un accidente.", "La semana pasada tuvimos un accidente.", "Something that happened to you once is tener in the preterite: tuvimos.", undefined, "Correct the sentence."),
      toEs("I met my best friend at university.", "Conocí a mi mejor amigo en la universidad.", "Conocer in the preterite means met for the first time: conocí a mi mejor amigo (personal a before a person).", ["Conocí a mi mejor amiga en la universidad."]),
      toEs("Where did you (tú) meet your husband?", "¿Dónde conociste a tu marido?", "Asking about a first meeting: conociste (preterite).", ["¿Dónde conociste a tu esposo?"]),
      toEs("They found out the truth on Friday.", "Supieron la verdad el viernes.", "Found out on a specific day: supieron (preterite).", ["El viernes supieron la verdad."]),
      toEs("We already knew the city.", "Ya conocíamos la ciudad.", "Already being familiar with something is conocer in the imperfect."),
      wo("Cuando conocí a Pedro, ya sabía quién era", "Conocí = met for the first time; sabía and era describe what you already knew.", "When I met Pedro, I already knew who he was"),
      { type: "speak", prompt: "Say it in Spanish: I knew her brother, but I met her yesterday.", text: "Conocía a su hermano, pero a ella la conocí ayer.", explanation: "Conocía = already knew (state, imperfect); conocí = met (the event, preterite). Pero la conocí ayer also works." },
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
        "Remember the rule: the time word decides the tense",
        [
          "Remember the rule: a habit (something that kept happening) is imperfect; one occasion (something that happened once, on a day you can point to) is preterite. The time word usually tells you which one you have.",
          "Habit words: siempre, todos los días, cada año, los lunes, normalmente, de niño. One-time words: ese día, una vez, el lunes, anoche, en 2020. Change the time word and the verb has to follow, even when nothing else in the sentence moves. Notice the tiny difference: los lunes (every Monday, habit) vs. el lunes (one Monday, event).",
        ],
        [
          ["Siempre llegaba temprano, pero ese día llegué tarde.","I always arrived early, but that day I arrived late. (habit, then the one exception)"],
          ["Los martes nadaba; el martes pasado no nadé.","On Tuesdays I swam; last Tuesday I didn't swim. (los martes = every Tuesday; el martes pasado = one)"],
          ["Una vez perdí las llaves. De joven las perdía todo el tiempo.","Once I lost my keys. When I was young I lost them all the time. (and back again: event → habit)"],
        ],
        [
          { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Siempre cenábamos a las nueve. → Esa noche ___ a las once.", answer: "cenamos", en: "We always had dinner at nine. → That night we [had dinner] at eleven.", explanation: "Esa noche is one occasion → preterite. Cenamos is the nosotros preterite (the same spelling as the present, but esa noche makes it past)." },
          mc("Which time phrase needs the imperfect?", ["Los domingos","El domingo","Ese domingo","Un domingo"], 0, "Los domingos (plural) means every Sunday: a habit, so imperfect. El domingo, ese domingo and un domingo all point to one Sunday, so preterite."),
        ]
      ),
    ],
    [
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Todos los días iba al trabajo en metro. → El jueves ___ en bici.", answer: "fui", en: "Every day I went to work by subway. → On Thursday I [went] by bike.", explanation: "El jueves is one occasion → preterite of ir: fui (not iba, which would repeat the habit)." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Normalmente mi hermano lavaba los platos. → Ese día los ___ yo.", answer: "lavé", en: "Normally my brother washed the dishes. → That day I [washed] them.", explanation: "Ese día = one occasion → preterite: lavé." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Cada invierno estábamos en casa de mis abuelos. → En 2018 ___ en un hotel.", answer: "estuvimos", en: "Every winter we were at my grandparents' house. → In 2018 we [were] in a hotel.", explanation: "A specific year is one closed period → preterite of estar: estuvimos (irregular stem estuv-)." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Anoche hice la cena. → De niño nunca ___ la cena.", answer: "hacía", en: "Last night I made dinner. → As a child I never [made] dinner.", explanation: "The other direction: de niño + nunca describes a habit (or its absence) over a period → imperfect hacía." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "El viernes vino mi vecina a tomar café. → Todos los viernes ___ mi vecina.", answer: "venía", en: "On Friday my neighbor came for coffee. → Every Friday my neighbor [came].", explanation: "Todos los viernes = repeated habit → imperfect venía, not vino." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Una vez traje flores a mi madre. → Siempre le ___ flores.", answer: "traía", en: "Once I brought my mother flowers. → I always [brought] her flowers.", explanation: "Siempre marks a habit → imperfect: traía (traer is regular in the imperfect)." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Siempre podía aparcar delante de casa. → Ayer no ___ aparcar.", answer: "pude", en: "I could always park in front of the house. → Yesterday I [couldn't] park.", explanation: "Ayer is one occasion → preterite. No pude means you tried and failed that day." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Normalmente los niños se dormían a las ocho. → Esa noche se ___ a las diez.", answer: "durmieron", en: "Normally the kids fell asleep at eight. → That night they [fell asleep] at ten.", explanation: "Esa noche = one occasion → preterite. Dormir changes o → u in the ellos preterite: durmieron." },
      mc("«Los sábados mi padre ___ el coche, pero el sábado pasado no lo lavó.»", ["lavaba","lavó","lava","lavará"], 0, "Los sábados (every Saturday) is a habit → imperfect lavaba. Lavó would make it one Saturday, which is the second half of the sentence, not the first."),
      mc("«___ me quedé dormido en el autobús.»", ["Una vez","Siempre","Todas las mañanas","Normalmente"], 0, "Me quedé is a single completed event, so it needs a one-time phrase: una vez. Siempre, todas las mañanas and normalmente are habit words and would need me quedaba."),
      mc("«De pequeña, mi hermana ___ mucho.» (llorar)", ["lloraba","lloró","llora","llorará"], 0, "De pequeña sets up a period of life: what she did back then is a habit → imperfect lloraba. Lloró would be one occasion of crying."),
      ms("Which phrases point to ONE occasion (preterite)?", ["anoche","cada noche","el martes pasado","los martes","en 2015"], [0,2,4], "Anoche, el martes pasado and en 2015 each point to one moment → preterite. Cada noche and los martes repeat → imperfect."),
      toEs("Siempre comía en la oficina.", "Ese día comí en la oficina.", "Ese día turns the habit into one event → preterite: comía → comí.", undefined, "Change \"siempre\" to \"ese día\"."),
      toEs("Todos los veranos íbamos a la playa.", "El verano pasado fuimos a la playa.", "El verano pasado is one summer → preterite of ir: fuimos.", undefined, "Change \"todos los veranos\" to \"el verano pasado\"."),
      toEs("El domingo mi tío nos visitó.", "Los domingos mi tío nos visitaba.", "Los domingos (every Sunday) is a habit → imperfect: visitó → visitaba.", ["Todos los domingos mi tío nos visitaba.","Cada domingo mi tío nos visitaba."], "Change it to every Sunday."),
      toEs("Anoche puse la tele.", "Cada noche ponía la tele.", "Cada noche is a habit → imperfect: puse → ponía (poner is regular in the imperfect).", ["Todas las noches ponía la tele.","Cada noche ponía la televisión.","Todas las noches ponía la televisión."], "Change \"anoche\" to \"cada noche\"."),
      toEs("Normalmente mis padres salían a pasear.", "El sábado mis padres salieron a pasear.", "El sábado is one day → preterite: salían → salieron.", undefined, "Change \"normalmente\" to \"el sábado\"."),
      toEs("Ese día Marta dijo la verdad.", "Marta siempre decía la verdad.", "Siempre makes it a habit → imperfect: dijo → decía.", ["Siempre Marta decía la verdad.","Marta decía siempre la verdad."], "Change it to \"always\" (siempre)."),
      toEs("Todos los días caminé al colegio.", "Todos los días caminaba al colegio.", "Todos los días is a habit → imperfect caminaba, not the one-time caminé.", ["Todos los días caminaba a la escuela."], "Correct the sentence."),
      toEs("El lunes pasado tenía una entrevista y me fue muy bien.", "El lunes pasado tuve una entrevista y me fue muy bien.", "The interview happened once, on one Monday → preterite tuve.", undefined, "Correct the sentence."),
      toEs("Cada año celebramos mi cumpleaños en un restaurante, pero en 2022 lo celebrábamos en casa.", "Cada año celebrábamos mi cumpleaños en un restaurante, pero en 2022 lo celebramos en casa.", "The tenses are swapped: cada año is the habit (celebrábamos) and en 2022 is the one exception (celebramos).", undefined, "Correct the sentence."),
      toEs("My grandmother always made soup, but that day she made paella.", "Mi abuela siempre hacía sopa, pero ese día hizo paella.", "Siempre → imperfect hacía; ese día → preterite hizo.", ["Siempre mi abuela hacía sopa, pero ese día hizo paella."]),
      toEs("On Mondays we had English class.", "Los lunes teníamos clase de inglés.", "Los lunes = every Monday → imperfect teníamos.", ["Todos los lunes teníamos clase de inglés.","Cada lunes teníamos clase de inglés."]),
      toEs("Last night I went to bed very late.", "Anoche me acosté muy tarde.", "Anoche = one night → preterite me acosté.", ["Anoche me fui a la cama muy tarde."]),
      wo("Cada mañana tomaba el autobús, pero hoy tomé un taxi", "Cada mañana = habit (tomaba); hoy = one occasion (tomé).", "Every morning I took the bus, but today I took a taxi"),
      wo("Mis abuelos vivían en el campo, pero en 2010 se mudaron", "Vivían = the long-lasting situation (imperfect); se mudaron = one event in a specific year (preterite).", "My grandparents lived in the countryside, but in 2010 they moved"),
      mt("Match each sentence with what it tells you.", [["Los jueves jugaba al fútbol.","a habit"],["El jueves jugué al fútbol.","one Thursday"],["Una vez jugué al golf.","a single experience"],["De niño jugaba en la calle.","a period of life"]], "Plural days, siempre and de niño → imperfect; el + day and una vez → preterite."),
      { type: "speak", prompt: "Say it in Spanish: I always drank coffee, but this morning I drank tea.", text: "Siempre tomaba café, pero esta mañana tomé té.", explanation: "Siempre tomaba = the habit (imperfect); esta mañana tomé = one occasion (preterite). Bebía / bebí also works." },
    ]
  ),
  L(
    "preterite-vs-imperfect-mastery-check",
    "a2d-fix-paragraph-pret-imp",
    "Fix the Paragraph: Wrong Past Tense",
    "A travel story where several verbs are in the wrong past tense. Find them and fix them.",
    "7 min",
    [
      sec(
        "Remember the rule, then fix the paragraph",
        [
          "Remember the rule: description, time, weather, age and actions in progress are the imperfect (the scenery); single completed events are the preterite (the plot). To fix a verb, ask what its job is in the story, not just what time word is near it.",
          "Read this travel story. Several verbs are in the wrong past tense, and some are already right: «El verano pasado fuimos a Cuba. Cuando llegamos, fueron las once de la noche. El hotel estuvo muy cerca de la playa y tuvo una piscina enorme. Un día íbamos a Trinidad en coche. Mientras condujimos, empezaba a llover. Cuando por fin llegábamos a Trinidad, ya no llovía.»",
        ],
        [
          ["✗ La ciudad fue muy bonita. → ✓ La ciudad era muy bonita.","The city was very pretty. (description → imperfect)"],
          ["✗ Una noche cenábamos en el puerto. → ✓ Una noche cenamos en el puerto.","One night we had dinner at the port. (una noche = one occasion → preterite)"],
        ],
        [
          fb("Fix it.", "El hotel ___ muy cerca de la playa. (the story says: estuvo)", "estaba", "Where the hotel was is background description → imperfect."),
          mc("In the story, «El verano pasado fuimos a Cuba» is…", ["already correct: one completed trip → preterite","wrong: it should be íbamos","wrong: it should be vamos","wrong: it should be fueron"], 0, "A single trip last summer is a completed event, so fuimos is right. Íbamos would make it a habit or background; vamos is present, and fueron is ellos."),
        ]
      ),
    ],
    [
      fb("Fix it.", "Cuando llegamos, ___ las once de la noche. (the story says: fueron)", "eran", "Telling the time in the past → imperfect: eran las once."),
      fb("Fix it.", "El hotel ___ una piscina enorme. (the story says: tuvo)", "tenía", "Describing the hotel takes the imperfect: tenía, not tuvo."),
      fb("Fix it.", "Un día ___ a Trinidad en coche. (the story says: íbamos)", "fuimos", "One trip is a single event, so the preterite: fuimos, not íbamos."),
      fb("Fix it.", "Mientras ___, empezó a llover. (the story says: condujimos)", "conducíamos", "Driving was in progress when the rain started, so the imperfect: conducíamos."),
      fb("Fix it.", "Cuando por fin ___ a Trinidad, ya no llovía. (the story says: llegábamos)", "llegamos", "Arriving is one completed event → preterite llegamos. Ya no llovía is right: it describes the weather when they got there."),
      mc("Which sentence is correct?", ["Cuando llegamos al hotel, eran las once.","Cuando llegábamos al hotel, fueron las once.","Cuando llegamos al hotel, fueron las once.","Cuando llegaba al hotel, fue las once."], 0, "Arriving is the event (llegamos) and the time is background (eran). \"Fueron las once\" and \"fue las once\" put the clock time in the preterite, and \"llegábamos\" makes the arrival ongoing."),
      ms("Which verbs should be imperfect in a story?", ["time of day","weather as background","age","a sudden event"], [0,1,2], "Time of day, background weather and age are description, so imperfect. A sudden event takes the preterite."),
      toEs("The beach was beautiful and we swam every day.", "La playa era preciosa y nadábamos todos los días.", "Describing the beach is imperfect (era), and a repeated action is imperfect too (nadábamos).", ["La playa era bonita y nadábamos todos los días.","La playa era preciosa y nadábamos cada día."]),
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "La primera noche ___ en un restaurante cubano. (the story says: cenábamos)", answer: "cenamos", en: "The first night we [had dinner] at a Cuban restaurant.", explanation: "A single dinner on a specific night: preterite." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "El restaurante ___ en una calle antigua. (the story says: estuvo)", answer: "estaba", en: "The restaurant [was] on an old street.", explanation: "Location as description: imperfect estaba." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Todas las mañanas ___ en el mar. (the story says: nadamos)", answer: "nadábamos", en: "Every morning we [swam] in the sea.", explanation: "Todas las mañanas = repeated habit: imperfect." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Un día ___ un barco para ver delfines. (the story says: tomábamos)", answer: "tomamos", en: "One day we [took] a boat to see dolphins.", explanation: "Un día = a single event: preterite." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Cuando salimos del hotel, ___ mucho calor. (the story says: hizo)", answer: "hacía", en: "When we left the hotel, it [was] very hot.", explanation: "Weather as the background to salimos: imperfect." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Mientras ___ por La Habana, empezó a llover. (the story says: paseamos)", answer: "paseábamos", en: "While we [were walking] around Havana, it started to rain.", altAnswers: ["caminábamos","estábamos paseando","estábamos caminando"], explanation: "Mientras + action in progress: imperfect." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Mientras visitábamos el museo, mi hermano ___ su cámara. (the story says: perdía)", answer: "perdió", en: "While we were visiting the museum, my brother [lost] his camera.", explanation: "The event that happens during the background action: preterite." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Mi hermano ___ dieciocho años en ese viaje. (the story says: tuvo)", answer: "tenía", en: "My brother [was] eighteen on that trip.", explanation: "Age is background: tenía." },
      toEs("La habitación del hotel fue pequeña pero limpia.", "La habitación del hotel era pequeña pero limpia.", "Describing the room is scenery → imperfect era.", ["La habitación del hotel era pequeña, pero limpia."], "Correct the sentence."),
      toEs("Mientras esperábamos el autobús, un señor nos ayudaba con las maletas.", "Mientras esperábamos el autobús, un señor nos ayudó con las maletas.", "The waiting is in progress (esperábamos is right); the man helping is one event during it → ayudó.", undefined, "Correct the sentence."),
      toEs("Todos los días desayunábamos en la terraza.", "El último día desayunamos en la terraza.", "El último día is one occasion → preterite: desayunábamos → desayunamos.", ["Desayunamos en la terraza el último día."], "Change \"todos los días\" to \"el último día\"."),
      toEs("El guía es muy simpático y habla tres idiomas.", "El guía era muy simpático y hablaba tres idiomas.", "Describing a person in a story → imperfect: era, hablaba.", undefined, "Change it to the past (it's part of the travel story)."),
      toEs("Volvemos al hotel y nos duchamos.", "Volvimos al hotel y nos duchamos.", "Two actions one after another move the story → preterite. Nos duchamos has the same form in present and preterite.", undefined, "Change it to the past (it's part of the travel story)."),
      toEs("When we arrived at the airport, it was raining.", "Cuando llegamos al aeropuerto, llovía.", "Arrival is the event (preterite); rain is the scene (imperfect).", ["Cuando llegamos al aeropuerto, estaba lloviendo."]),
      toEs("The rooms were small but very comfortable.", "Las habitaciones eran pequeñas pero muy cómodas.", "Describing what the place was like: imperfect eran, not fueron.", ["Las habitaciones eran pequeñas, pero eran muy cómodas."]),
      toEs("One afternoon we rented bikes.", "Una tarde alquilamos bicicletas.", "Una tarde = one occasion: preterite.", ["Una tarde alquilamos bicis."]),
      toEs("The beach was near and the water was very clean.", "La playa estaba cerca y el agua estaba muy limpia.", "Both describe the place: imperfect. Agua is feminine (limpia).", ["La playa estaba cerca y el agua era muy limpia."]),
      mc("Which version is correct?", ["Un día fuimos a la playa y nadamos mucho.","Un día íbamos a la playa y nadábamos mucho."], 0, "Un día marks one occasion: the events are preterite."),
      wo("Mientras dormíamos, alguien entró en la habitación", "Dormíamos is in progress; entró interrupts it.", "While we were sleeping, someone came into the room"),
      toEs("It was midnight and we were very tired.", "Era medianoche y estábamos muy cansados.", "Time and state are both background: imperfect.", ["Era medianoche y estábamos muy cansadas."]),
      { type: "speak", prompt: "Say aloud the corrected sentence in Spanish: «Cuando llegamos a Cuba, fueron las once y hizo mucho calor.»", text: "Cuando llegamos a Cuba, eran las once y hacía mucho calor.", explanation: "Llegamos is the event (stays preterite); the time and the weather are scenery → eran, hacía." },
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
        "Remember the rule: the question gives you the tense",
        "Remember the rule: the imperfect asks for (and gives) scenery, habits and actions in progress; the preterite asks for (and gives) completed events. So a past question already tells you which tense to answer in: just listen to its verb. ¿Qué hacías cuando…? → imperfect answer (Estaba / Leía…). ¿Qué hiciste…? → preterite answer (Fui / Compré…). ¿Cómo era…? → imperfect description. ¿Qué pasó? → preterite events. The exception is when the answer changes the type of action: ¿Qué hiciste ayer? —Nada, estaba enfermo (you answer with a state, so imperfect).",
        [
          ["—¿Qué hacías a las diez? —Veía una película.","What were you doing at ten? — I was watching a movie."],
          ["—¿Qué pasó? —Se rompió un vaso.","What happened? — A glass broke."],
        ],
        [
          { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "—¿Cómo era tu primer piso? —___ muy pequeño.", answer: "Era", en: "—What was your first apartment like? (tú) —It [was] very small.", explanation: "ser → era: imperfect, él (el piso). Cómo era → description." },
          mc("—¿Qué tiempo hacía cuando saliste? Which reply fits?", ["Hacía mucho viento.","Hizo mucho viento.","Hace mucho viento.","Hará mucho viento."], 0, "Hacía in the question asks for the background weather → imperfect hacía. Hizo would present the wind as a closed event, hace is present and hará future."),
        ]
      ),
    ],
    [
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "—¿Qué hiciste el sábado? —___ al teatro.", answer: "Fui", en: "\"What did you do on Saturday?\" \"I [went] to the theater.\"", explanation: "ir → fui: preterite, yo. Hiciste → preterite." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "—¿Qué hacías cuando te llamé? —___.", answer: "Dormía", en: "\"What were you doing when I called you?\" \"I [was sleeping].\"", explanation: "dormir → dormía: imperfect, yo. Hacías → imperfect." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "—¿Qué pasó en la reunión? —El jefe ___ una noticia importante.", answer: "anunció", en: "\"What happened at the meeting?\" \"The boss [announced] some important news.\"", explanation: "anunciar → anunció: preterite, él. Pasó → preterite." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "—¿Dónde vivías de niño? —___ en Valencia.", answer: "Vivía", en: "—Where did you live as a child? (tú) —I [lived] in Valencia.", explanation: "vivir → vivía: imperfect, yo. Vivías → imperfect." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "—¿Cuánto tiempo estuviste en Roma? —___ dos semanas.", answer: "Estuve", en: "—How long were you in Rome? (tú) —I [was] there for two weeks.", explanation: "estar → estuve: preterite, yo. Estuviste → preterite." },
      mt("Match question and answer.", [["¿Qué tiempo hacía?","Hacía sol."],["¿Qué compraste?","Compré zapatos."],["¿Con quién jugabas?","Jugaba con mis vecinos."]], "Tense of question = tense of answer."),
      toEs("—What were you (tú) doing? —I was cooking.", "—¿Qué hacías? —Cocinaba.", "Asking what someone was doing and answering both use the imperfect: hacías, cocinaba.", ["—¿Qué estabas haciendo? —Estaba cocinando.","—¿Qué hacías? —Estaba cocinando."]),
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "—¿Qué hiciste anoche? —___ una pizza.", answer: "Pedí", en: "—What did you do last night? —I [ordered] a pizza.", explanation: "¿Qué hiciste? asks for an event, so answer in the preterite." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "—¿Qué hacías a las siete? —___ la cena.", answer: "Preparaba", en: "—What were you doing at seven? —I [was making] dinner.", altAnswers: ["Hacía","Estaba preparando","Estaba haciendo"], explanation: "¿Qué hacías? asks for an action in progress: imperfect." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "—¿Cómo era tu profesor de inglés? —___ muy simpático.", answer: "Era", en: "—What was your English teacher like? —He [was] very nice.", explanation: "¿Cómo era? asks for description: answer with era." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "—¿Qué pasó en el partido? —Nuestro equipo ___.", answer: "ganó", en: "—What happened in the match? —Our team [won].", explanation: "¿Qué pasó? asks for events: preterite." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "—¿Qué tiempo hacía en Londres? —___ mucho.", answer: "Llovía", en: "—What was the weather like in London? —It [was raining] a lot.", altAnswers: ["Estaba lloviendo"], explanation: "The question is in the imperfect, so the description is too." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "—¿A qué hora te acostaste anoche? —___ a las doce.", answer: "Me acosté", en: "—What time did you go to bed last night? —I [went to bed] at twelve.", explanation: "Keep the tense of the question: te acostaste → me acosté (preterite)." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "—¿Qué veías en la tele de pequeño? —___ dibujos animados.", answer: "Veía", en: "—What did you watch on TV as a child? —I [watched] cartoons.", explanation: "A childhood habit: imperfect, like the question (veías → veía)." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "—¿Qué compraron ustedes? —___ un sofá nuevo.", answer: "Compramos", en: "—What did you all buy? —We [bought] a new sofa.", explanation: "Compraron → compramos (preterite, nosotros)." },
      toEs("¿Qué hiciste ayer?", "¿Qué hacías de niño?", "A question about a childhood habit needs the imperfect: hiciste → hacías.", ["De niño, ¿qué hacías?","¿Qué hacías cuando eras niño?"], "Change it to ask about a childhood habit (de niño)."),
      toEs("Fui al cine.", "Iba al cine.", "«¿Adónde ibas los sábados?» asks about a habit, so the answer is imperfect: fui → iba.", ["Los sábados iba al cine.","Iba al cine los sábados."], "Change the answer so it fits the question «¿Adónde ibas los sábados?»."),
      toEs("¿Qué hiciste el sábado?", "¿Qué hicieron el sábado?", "Ustedes takes the ellos form: hiciste → hicieron. It's still the preterite.", ["¿Qué hicieron ustedes el sábado?"], "Change it to ustedes."),
      toEs("—¿Qué hacías cuando sonó el timbre? —Me duché.", "—¿Qué hacías cuando sonó el timbre? —Me duchaba.", "Hacías asks for the action in progress, so the answer is imperfect: me duchaba.", ["—¿Qué hacías cuando sonó el timbre? —Me estaba duchando.","—¿Qué hacías cuando sonó el timbre? —Estaba duchándome."], "Correct the answer."),
      toEs("—¿Qué compraste en el mercado? —Compraba fruta.", "—¿Qué compraste en el mercado? —Compré fruta.", "Compraste asks for a completed event → compré.", undefined, "Correct the answer."),
      toEs("—¿Cómo era el hotel? —Fue muy moderno.", "—¿Cómo era el hotel? —Era muy moderno.", "¿Cómo era? asks for a description → era, not fue.", undefined, "Correct the answer."),
      toEs("—What did you (tú) eat? —I ate fish.", "—¿Qué comiste? —Comí pescado.", "A preterite question gets a preterite answer."),
      toEs("—Where did you all (ustedes) go on holiday? —We went to Greece.", "—¿Adónde fueron de vacaciones? —Fuimos a Grecia.", "A preterite question (fueron) gets a preterite answer (fuimos).", ["—¿A dónde fueron de vacaciones? —Fuimos a Grecia.","—¿Dónde fueron de vacaciones? —Fuimos a Grecia."]),
      toEs("—What happened? —I lost my keys.", "—¿Qué pasó? —Perdí las llaves.", "¿Qué pasó? asks for an event: preterite perdí.", ["—¿Qué pasó? —Perdí mis llaves."]),
      toEs("—What did you (tú) do after dinner? —I went for a walk.", "—¿Qué hiciste después de cenar? —Salí a pasear.", "¿Qué hiciste? asks for an event, so the answer is preterite: salí (salir).", ["—¿Qué hiciste después de cenar? —Di un paseo.","—¿Qué hiciste después de cenar? —Fui a dar un paseo.","—¿Qué hiciste después de cenar? —Fui a pasear.","—¿Qué hiciste después de cenar? —Salí a caminar.","—¿Qué hiciste después de la cena? —Di un paseo."]),
      toEs("—Who were you (tú) talking to? —I was talking to my boss.", "—¿Con quién hablabas? —Hablaba con mi jefe.", "Action in progress: imperfect. The preposition con goes at the front of the question.", ["—¿Con quién hablabas? —Hablaba con mi jefa.","—¿Con quién estabas hablando? —Estaba hablando con mi jefe.","—¿Con quién estabas hablando? —Estaba hablando con mi jefa."]),
      toEs("—How long did you (tú) study in Paris? —I studied there for a year.", "—¿Cuánto tiempo estudiaste en París? —Estudié allí un año.", "A closed, measured period: preterite.", ["—¿Cuánto tiempo estudiaste en París? —Estudié un año allí.","—¿Cuánto tiempo estudiaste en París? —Estudié allí durante un año."]),
      toEs("—What were you all (ustedes) doing when it started to rain? —We were playing in the park.", "—¿Qué hacían cuando empezó a llover? —Jugábamos en el parque.", "Hacían and jugábamos are in progress; empezó is the interruption.", ["—¿Qué hacían cuando empezó a llover? —Estábamos jugando en el parque."]),
      mc("—¿Qué hiciste el domingo? Which answer fits?", ["Fui a la playa.","Iba a la playa.","Voy a la playa.","Iré a la playa."], 0, "Hiciste is preterite, so the answer is a completed event: fui."),
      wo("Cuando era pequeña, vivía cerca del mar", "Answer to ¿Dónde vivías?: life stage and situation, both imperfect.", "When I was little (girl), I lived near the sea"),
      { type: "speak", prompt: "Someone asks you «¿Qué hacías anoche a las nueve?». Answer aloud in Spanish: you were reading a book.", text: "Leía un libro.", explanation: "Hacías asks for an action in progress, so answer in the imperfect: leía (or estaba leyendo) un libro." },
    ]
  ),
  L(
    "preterite-vs-imperfect-mastery-check",
    "a2d-mixed-practice-pret-imp-1",
    "Mixed Practice: Past Tenses Round 1",
    "Mixed practice: regular endings, irregular stems, spelling changes and the preterite/imperfect choice all at once.",
    "6 min",
    [
      sec(
        "Remember the rule: two decisions per verb",
        [
          "Remember the rule: every past verb needs two decisions, in this order. First the tense: a completed event → preterite; background, description, a state or a habit → imperfect. Then the form: regular endings, an irregular stem (tuv-, hic-, vin-, pus-…), or a spelling change in the yo preterite (-car → -qué, -gar → -gué, -zar → -cé). The imperfect is the easy side: only ser, ir and ver are irregular.",
          "First decide the tense (event or background/habit?), then build the form (regular, irregular stem, spelling change). Doing both quickly is the goal of this round.",
        ],
        [
          ["Estaba cansado, así que me acosté temprano.","I was tired, so I went to bed early. (state → imperfect; one event → preterite)"],
          ["Busqué mis llaves pero no las encontré.","I looked for my keys but didn't find them. (buscar → busqué: c → qu before e)"],
        ],
        [
          { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Como ___ tarde, tomé un taxi.", answer: "era", en: "Since it [was] late, I took a taxi.", explanation: "ser → era: imperfect (background circumstance). Background reason → imperfect." },
        ]
      ),
    ],
    [
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Ayer ___ que trabajar hasta las nueve.", answer: "tuve", en: "Yesterday I [had] to work until nine.", explanation: "tener → tuve: preterite, yo (tener que). One day → preterite." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "De niña ___ mucho miedo a la oscuridad.", answer: "tenía", en: "As a girl I [was] very [afraid] of the dark.", explanation: "tener → tenía: imperfect, yo (tener miedo). Childhood state → imperfect." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Cuando ___ a casa, mi hijo ya dormía.", answer: "llegué", en: "When I [got] home, my son was already asleep.", explanation: "llegar → llegué: preterite, yo (g→gu). Event + -gar → -gué." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "El restaurante ___ lleno, así que nos fuimos.", answer: "estaba", en: "The restaurant [was] full, so we left.", explanation: "estar → estaba: imperfect, él (description). Description → imperfect." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "El año pasado ___ un curso de cocina.", answer: "hicimos", en: "Last year we [took] a cooking course.", altAnswers: ["tomamos"], explanation: "hacer → hicimos: preterite, nosotros. Completed → preterite." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Mi abuelo siempre nos ___ historias.", answer: "contaba", en: "My grandfather always [used to tell] us stories.", explanation: "contar → contaba: imperfect, él (habitual). Habit → imperfect." },
      mc("«Nosotros ___ en el parque cuando ___ a llover.»", ["paseábamos / empezó","paseamos / empezaba","paseábamos / empezaba","paseamos / empezó"], 0, "The walk was in progress (paseábamos, imperfect) when the rain started (empezó, preterite). The wrong pairs make the walk a completed event or the start of the rain ongoing."),
      toEn("No quise decir nada porque estaba enfadada.", "I refused to say anything because I was angry.", "Quise in the negative preterite means refused, and estaba describes her state (imperfect).", ["I didn't want to say anything because I was angry.","I refused to say anything because I was upset."]),
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Ayer ___ a mi abuela al hospital.", answer: "llevé", en: "Yesterday I [took] my grandmother to the hospital.", explanation: "Ayer = one event: preterite llevé." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Cuando era joven, mi padre ___ el pelo largo.", answer: "tenía", en: "When he was young, my father [had] long hair.", explanation: "Physical description over a period: imperfect." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "El sábado ___ una fiesta en casa de Marta.", answer: "hubo", en: "On Saturday there [was] a party at Marta's house.", explanation: "A single event on a specific day: hubo (preterite of hay); había would describe the background." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Mis amigos ___ a mi casa el viernes.", answer: "vinieron", en: "My friends [came] to my house on Friday.", explanation: "One event: preterite of venir, irregular vinieron." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Antes nosotros ___ mucho al cine.", answer: "íbamos", en: "We [used to go] to the cinema a lot before.", explanation: "Past habit: imperfect of ir, irregular íbamos." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "¿Qué ___ el fin de semana?", answer: "hiciste", en: "What [did] you (tú) [do] at the weekend?", explanation: "A finished weekend: preterite hiciste (no accent)." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Anoche no ___ nada porque estaba cansado.", answer: "comí", en: "Last night I didn't [eat] anything because I was tired.", explanation: "Anoche = event (preterite); estaba cansado = state (imperfect)." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "___ el coche delante de la tienda.", answer: "Aparqué", en: "[I parked] the car in front of the shop.", altAnswers: ["Estacioné"], explanation: "Spelling change in the yo preterite: aparcar → aparqué." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "___ a estudiar a las ocho.", answer: "Empecé", en: "[I started] studying at eight.", explanation: "Spelling change z → c before e: empecé." },
      toEs("Normalmente conducía yo.", "Ese día condujo mi hermana.", "Ese día = one occasion → preterite, and conducir has the irregular stem conduj-: condujo.", ["Ese día mi hermana condujo."], "Change it to \"that day my sister drove\" (ese día)."),
      toEs("Ayer jugué al tenis.", "Antes jugaba al tenis todos los fines de semana.", "A past habit → imperfect jugaba (regular: no spelling change in the imperfect).", ["Antes jugaba al tenis cada fin de semana.","Antes, todos los fines de semana jugaba al tenis."], "Change it to a past habit: antes, todos los fines de semana."),
      toEs("Practico el piano y luego almuerzo.", "Practiqué el piano y luego almorcé.", "Two completed actions → preterite, with the yo spelling changes: practicar → practiqué, almorzar → almorcé.", ["Ayer practiqué el piano y luego almorcé."], "Change it to the past: it happened yesterday."),
      toEs("Cuando era pequeño, iba al colegio en autobús y una vez el autobús se rompía.", "Cuando era pequeño, iba al colegio en autobús y una vez el autobús se rompió.", "Una vez = one event → preterite se rompió. Era and iba are right: life stage and habit.", ["Cuando era pequeña, iba al colegio en autobús y una vez el autobús se rompió."], "Correct the sentence."),
      toEs("Ayer llegé tarde porque había mucho tráfico.", "Ayer llegué tarde porque había mucho tráfico.", "Llegar keeps the hard g sound before e by adding u: llegué. Había is right: background reason.", undefined, "Correct the sentence."),
      toEs("Mis primos venieron a casa y trajeron un pastel.", "Mis primos vinieron a casa y trajeron un pastel.", "Venir has the irregular preterite stem vin-: vinieron.", undefined, "Correct the sentence."),
      toEs("When I was a child, I read a lot of comics.", "Cuando era niño, leía muchos cómics.", "Childhood habit: imperfect leía.", ["Cuando era niña, leía muchos cómics.","De niño, leía muchos cómics.","De niña, leía muchos cómics."]),
      toEs("Yesterday my brother read the whole book.", "Ayer mi hermano leyó todo el libro.", "One completed action: preterite leyó (i → y).", ["Ayer mi hermano leyó el libro entero."]),
      toEs("We were at home because it was snowing.", "Estábamos en casa porque nevaba.", "Both verbs describe the situation: imperfect.", ["Estábamos en casa porque estaba nevando."]),
      toEs("She put the keys on the table and left.", "Puso las llaves en la mesa y se fue.", "Two actions in sequence: preterite; poner → puso.", ["Puso las llaves sobre la mesa y se fue.","Puso las llaves en la mesa y salió."]),
      toEs("I was tired, so I didn't go to the party.", "Estaba cansado, así que no fui a la fiesta.", "State (estaba) + completed decision (no fui).", ["Estaba cansada, así que no fui a la fiesta."]),
      mc("«Cuando ___ a casa, mis padres ya cenaban.»", ["llegué","llegaba","llegue","llego"], 0, "Your arrival is the event (preterite, with the gu spelling); cenaban is the background."),
      wo("No pudimos salir porque llovía mucho", "No pudimos = we failed to; llovía is the background reason.", "We couldn't go out because it was raining a lot"),
      toEs("The children were playing while their parents talked.", "Los niños jugaban mientras sus padres hablaban.", "Two simultaneous ongoing actions: both imperfect.", ["Los niños estaban jugando mientras sus padres hablaban."]),
      { type: "speak", prompt: "Say it aloud in Spanish: It was very cold, so I put on my coat and left.", text: "Hacía mucho frío, así que me puse el abrigo y salí.", explanation: "Hacía frío = background (imperfect); me puse (poner: pus-) and salí = completed events (preterite)." },
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
        "Remember the rule: the imperfect describes the background (age, job, feelings, routines); the preterite tells the events of the day, one after another. «Tenía diecisiete años cuando conseguí mi primer trabajo. Era camarero en una cafetería pequeña. El primer día estaba muy nervioso. A las nueve entró un cliente muy serio, pidió un café y… se lo tiré encima. Él se rio y me dijo: “Tranquilo, a todos nos pasa”.»",
        [
          ["Tenía diecisiete años cuando conseguí mi primer trabajo.", "I was seventeen when I got my first job."],
          ["Estaba muy nervioso.", "I was very nervous."],
        ],
        [
          mc(
            "Why «conseguí» and not «conseguía»?",
            ["It's a single completed event.", "It's a habit.", "It's background description.", "It's an action in progress."],
            0,
            "Getting the job happened once, so it's a single completed event in the preterite. It's not a habit, background or an action in progress."
          ),
        ]
      ),
    ],
    [
      fb("Fill in.", "___ camarero en una cafetería pequeña. (ser, yo)", "Era", "Description of a role over a period."),
      fb("Fill in.", "El primer día ___ muy nervioso. (estar, yo)", "estaba", "State → imperfect."),
      fb("Fill in.", "A las nueve ___ un cliente muy serio. (entrar)", "entró", "Event → preterite."),
      fb("Fill in.", "El cliente ___ un café solo. (tomar)", "tomó", "Event → preterite."),
      fb("Fill in.", "Él se ___ y me dijo algo amable. (reírse, preterite)", "rio", "Event → preterite. Rio is one syllable, so since 2010 it is written without an accent (the older spelling rió is still accepted)."),
      mc(
        "«La cafetería ___ en una calle muy tranquila.»",
        ["estaba", "estuvo", "está", "estará"],
        0,
        "Where the café was, as description, takes the imperfect: estaba. \"Estuvo\" is a completed event, \"está\" present, and \"estará\" future."
      ),
      toEs("I was very young when I started to work.", "Era muy joven cuando empecé a trabajar.", "Being young is background (era), and starting work is the event (empecé).", ["Era muy joven cuando comencé a trabajar.", "Yo era muy joven cuando empecé a trabajar."]),
      toEn("Todos los días limpiaba las mesas y ponía las sillas.", "Every day I cleaned the tables and set out the chairs.", "Todos los días is a habit, so the imperfect: limpiaba, ponía.", ["Every day I used to clean the tables and put out the chairs.", "Every day I would clean the tables and set up the chairs."]),
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
        "Remember the rule: a repeated pattern (los lunes, siempre, todos los días) takes the imperfect; one specific occasion (aquel lunes, ese día, ayer) takes the preterite. Routine: «Los lunes me levantaba a las siete, desayunaba y salía a las ocho.» One day: «Aquel lunes me levanté a las siete, desayuné y salí a las ocho.» Same actions, different point of view: repeated pattern vs. one specific occasion.",
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
        "Aquella noche is one occasion, so the preterite: me acosté. \"Me acostaba\" is a habit, \"me acuesto\" present, and \"me acostaré\" future."
      ),
      toEs("On Sundays we used to eat paella, but that Sunday we ate pizza.", "Los domingos comíamos paella, pero aquel domingo comimos pizza.", "Los domingos is the routine (comíamos), and aquel domingo is the one exception (comimos).", ["Los domingos comíamos paella, pero ese domingo comimos pizza."]),
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
        "Remember the rule: scene and actions in progress go in the imperfect; the event that interrupts them and its results go in the preterite. 1) Scene (imperfect): Era un martes y llovía. 2) In progress (imperfect): Yo iba en bici al trabajo. 3) Event (preterite): De repente, un coche salió de un garaje. 4) Result (preterite): Me caí, pero no me pasó nada grave.",
        [
          ["Iba en bici cuando un coche salió de un garaje.", "I was riding my bike when a car came out of a garage."],
          ["Me caí, pero no me pasó nada.", "I fell, but nothing happened to me."],
        ],
        [
          mc(
            "Step 3 (the event) goes in…",
            ["the preterite", "the imperfect", "the present", "the future"],
            0,
            "The event that moves the story forward goes in the preterite. The imperfect is for background, and the present and future don't narrate the past."
          ),
        ]
      ),
    ],
    [
      fb("Step 1: scene.", "___ un martes por la mañana. (ser)", "Era", "Scene → imperfect."),
      { ...fb("Step 1: scene.", "___ mucho y había poca luz. (llover)", "Llovía", "Weather → imperfect."), altAnswers: ["estaba lloviendo"] },
      { ...fb("Step 2: in progress.", "Yo ___ en bici por la avenida. (ir)", "iba", "In progress → imperfect."), altAnswers: ["montaba","estaba montando","andaba"] },
      fb("Step 3: event.", "De repente un coche ___ de un garaje. (salir)", "salió", "Event → preterite."),
      fb("Step 4: result.", "Yo me ___ al suelo. (caer, yo: caí)", "caí", "Result → preterite."),
      fb("Step 4: result.", "El conductor ___ del coche y me ayudó. (bajar)", "bajó", "Result → preterite."),
      wo("Afortunadamente, no me pasó nada grave.", "The outcome is a completed event, so the preterite (pasó); no… nada is a double negative, and me is the indirect object (to me).", "Fortunately, nothing serious happened to me."),
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
        "Remember the rule: the preterite reports finished events, the imperfect describes the background. Three cases trip people up: 1) A closed period, even a long one, takes the preterite: Viví en París tres años (and that chapter is over). 2) Counted repetitions take the preterite: Fui a Roma cinco veces. 3) Clock time and age as background take the imperfect: Eran las tres. / Tenía veinte años.",
        [
          ["Trabajé en esa empresa diez años.", "I worked at that company for ten years."],
          ["Llamé tres veces, pero nadie contestó.", "I called three times, but nobody answered."],
        ],
        [
          mc(
            "«___ en Londres cinco años, de 2010 a 2015.» (vivir, yo)",
            ["Viví", "Vivía", "Vivo", "Viviré"],
            0,
            "A period with clear limits (de 2010 a 2015) takes the preterite: viví. \"Vivía\" is background, \"vivo\" present, and \"viviré\" future."
          ),
        ]
      ),
    ],
    [
      mc(
        "«El año pasado ___ al médico cuatro veces.» (ir, yo)",
        ["fui", "iba", "voy", "iré"],
        0,
        "A counted number of times (cuatro veces) takes the preterite: fui. \"Iba\" is a habit, \"voy\" present, and \"iré\" future."
      ),
      mc(
        "«Cuando llegamos, ___ las doce.» (ser)",
        ["eran", "fueron", "son", "serán"],
        0,
        "Clock time as background takes the imperfect: eran las doce. \"Fueron\" is preterite, and \"son\" and \"serán\" don't fit the past."
      ),
      mc(
        "«La reunión ___ dos horas.» (durar)",
        ["duró", "duraba", "dura", "durará"],
        0,
        "A closed, measured duration takes the preterite: duró dos horas. \"Duraba\" is ongoing, \"dura\" present, and \"durará\" future."
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
        "Estudié dos años = a period now over (preterite); eran las seis = clock time as background (imperfect); leí tres veces = a counted number of times (preterite)."
      ),
      toEs("I lived in Mexico for two years.", "Viví en México dos años.", "A closed period of time (dos años, now over) takes the preterite: viví.", ["Viví dos años en México.", "Viví en México durante dos años."]),
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
        "Remember the rule: the imperfect sets the scene, the preterite tells what happened, and the preterite also sums up the whole day. Pattern: set the scene (Era mi cumpleaños / Tenía doce años / Hacía sol), then tell what happened (Mis padres me regalaron… / Fuimos a… / Vimos…), then how you felt at the end (Fue un día perfecto).",
        [
          ["Era mi cumpleaños y hacía un sol maravilloso.", "It was my birthday and the sun was shining beautifully."],
          ["Fue el mejor día de mi vida.", "It was the best day of my life."],
        ],
        [
          mc(
            "«Fue un día perfecto» sums up the day. Why preterite?",
            ["It evaluates the whole, finished day.", "It describes background.", "It's a habit.", "It's in progress."],
            0,
            "Fue un día perfecto evaluates the whole, finished day, so the preterite. It isn't background, a habit or an action in progress."
          ),
        ]
      ),
    ],
    [
      toEs("I was twelve years old.", "Tenía doce años.", "Age in the past is background, so the imperfect: tenía.", ["Yo tenía doce años."]),
      toEs("My parents gave me a bicycle.", "Mis padres me regalaron una bicicleta.", "Giving the bike is an event, so the preterite: me regalaron.", ["Mis padres me regalaron una bici."]),
      toEs("It was sunny and we went to the park.", "Hacía sol y fuimos al parque.", "The weather sets the scene (hacía sol), and going to the park is the event (fuimos).", ["Hacía sol y nos fuimos al parque."]),
      toEs("I was very happy.", "Estaba muy feliz.", "A feeling at that time is a state, so the imperfect: estaba feliz.", ["Estaba muy contento.", "Estaba muy contenta.", "Yo estaba muy feliz."]),
      toEs("It was a perfect day.", "Fue un día perfecto.", "Summing up a whole finished day uses the preterite: fue un día perfecto.", []),
      fb("Complete.", "Mi abuela ___ una tarta de chocolate. (hacer)", "hizo", "Event → hizo."),
      { ...fb("Complete.", "Mientras comíamos la tarta, mi tío ___ la guitarra. (tocar)", "tocaba", "Simultaneous background."), altAnswers: ["estaba tocando"] },
      wo("Por la noche vimos las estrellas desde el jardín.", "Event in the preterite.", "At night we saw the stars from the garden."),
    ]
  ),
  L(
    "preterite-vs-imperfect-drill-3",
    "a2d-speed-round-pret-imp",
    "Speed Round: Preterite or Imperfect? 9 Quick Calls",
    "Decide quickly between the preterite (finished event) and the imperfect (scene, habit, action in progress) and conjugate the verb; the feedback explains each choice.",
    "6 min",
    [
      sec(
        "Instant decision",
        "Remember the rule: preterite = a finished event; imperfect = the scene, a habit or an action in progress. Ask: is it a finished event (preterite) or the scene/habit/in-progress (imperfect)? Then conjugate. Speed builds the automatic feel you need in conversation.",
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
      { ...fb("Quick!", "Mientras ___, sonó el timbre. (ducharse, yo)", "me duchaba", "In progress → imperfect."), altAnswers: ["me estaba duchando"] },
      fb("Quick!", "En 2020 ___ a vivir a Madrid. (mudarse, nosotros)", "nos mudamos", "One event → preterite."),
      fb("Quick!", "Mi primer coche ___ rojo. (ser)", "era", "Description → imperfect."),
      mc(
        "«Anoche no ___ dormir porque en mi calle siempre ___ mucho ruido.»",
        ["pude / había", "podía / hubo", "pude / hubo", "podía / había"],
        0,
        "Not managing to sleep that night is a result (pude), and the noise is the background cause (había). The wrong pairs put the cause in the preterite (hubo) or the result in the imperfect (podía)."
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
        "Remember the rule: when you retell a story about someone else, change the person (yo → ella, me → se, mi → su) but keep every tense. «Yo tenía seis años y vivía en Cádiz. Un día me perdí en la playa.» → «Mi hermana tenía seis años y vivía en Cádiz. Un día se perdió en la playa.» Imperfect stays imperfect; preterite stays preterite.",
        [
          ["Me perdí. → Se perdió.", "I got lost. → She got lost."],
        ],
        [
          fb("Yo → ellos.", "Yo vivía en Cádiz. → Mis padres ___ en Cádiz.", "vivían", "-Ir verbs take -ían for ellos in the imperfect: vivían."),
        ]
      ),
    ],
    [
      fb("Yo → ella.", "Un día me perdí en la playa. → Un día se ___ en la playa.", "perdió", "Perderse is regular in the preterite: ella se perdió."),
      fb("Yo → ellos.", "Estaba muy asustada. → Mis padres ___ muy asustados.", "estaban", "Estar is regular in the imperfect: ellos estaban."),
      fb("Yo → ella.", "Busqué a mis padres. → ___ a sus padres.", "Buscó", "The c → qu change is only for yo (busqué); él/ella is buscó."),
      fb("Yo → ellos.", "Yo jugaba con la arena. → Ellos ___ con la arena.", "jugaban", "-Ar verbs take -aban for ellos in the imperfect: jugaban."),
      fb("Yo → ellos.", "Por fin encontré a mi familia. → Por fin ___ a su familia.", "encontraron", "Encontrar is regular in the preterite: ellos encontraron."),
      fb("Nosotros → ellos.", "Volvimos a casa muy tarde. → ___ a casa muy tarde.", "Volvieron", "Volver is regular in the preterite: ellos volvieron."),
      mc(
        "«Yo no quería irme.» → ella:",
        ["Ella no quería irse.", "Ella no quiso irme.", "Ella no quería irme.", "Ella no quisiera irse."],
        0,
        "The imperfect stays, and the reflexive changes me → se: ella no quería irse. \"Quiso irme\" changes the tense and keeps me, \"quería irme\" keeps me, and \"quisiera\" is subjunctive."
      ),
      toEs("She was six and she got lost at the beach.", "Tenía seis años y se perdió en la playa.", "Her age is background (tenía), and getting lost is the event (se perdió).", ["Ella tenía seis años y se perdió en la playa."]),
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
        "Remember the rule: describe the scene and the people in the imperfect; report what happened in the preterite. Answer in the same tense as the question. The officer asks: ¿Qué hora era? ¿Dónde estaba usted? ¿Qué hacía? ¿Qué vio? ¿Cómo era el hombre? ¿Qué hizo después? Questions with era/estaba/hacía/cómo era get imperfect answers; vio/hizo get preterite answers.",
        [
          ["—¿Qué hacía usted? —Esperaba el autobús.", "What were you doing? — I was waiting for the bus."],
          ["—¿Qué vio? —Vi a un hombre con una mochila.", "What did you see? — I saw a man with a backpack."],
        ],
        [
          fb("Answer.", "—¿Qué hora era? —___ las once y media.", "Eran", "Clock time in the past takes the imperfect, plural for any hour but one: eran las once y media."),
        ]
      ),
    ],
    [
      fb("Answer.", "—¿Y usted, dónde? —___ en la parada del autobús. (estar, yo)", "Estaba", "Location/state → imperfect."),
      fb("Answer.", "—¿Qué vio? —___ a un hombre correr. (ver)", "Vi", "Event → preterite."),
      fb("Answer.", "—¿Cómo era el hombre? —___ alto y llevaba gafas.", "Era", "Describing what someone looked like takes the imperfect: era alto."),
      fb("Answer.", "—¿Y su ropa? —___ una chaqueta negra. (llevar, él)", "Llevaba", "Description → imperfect."),
      fb("Answer.", "—¿Qué hizo después? —___ a una moto y se fue. (subir)", "Subió", "Event → preterite."),
      fb("Answer.", "—¿Y usted qué hizo? —___ a la policía enseguida. (llamar)", "Llamé", "Event → preterite."),
      ms(
        "Which questions ask for an imperfect answer?",
        ["¿Qué tiempo hacía?", "¿Cuántas personas había?", "¿Qué pasó entonces?", "¿Cómo era el coche?"],
        [0, 1, 3],
        "Questions about weather, how many people there were and what the car was like ask for description, so the imperfect. \"¿Qué pasó entonces?\" asks for an event, so the preterite."
      ),
      toEs("He was tall and he was wearing a black jacket.", "Era alto y llevaba una chaqueta negra.", "Describing someone takes the imperfect: era alto, llevaba una chaqueta.", ["Era alto y llevaba puesta una chaqueta negra."]),
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
        "Remember the rule: decide the tense first (habit or scene → imperfect; one finished event → preterite), then build the rest of the sentence. Real sentences combine structures: «Antes me levantaba más temprano que ahora» (reflexive + imperfect + comparison). «Ayer salí para el aeropuerto por la tarde» (preterite + para + por). Keep the tense decision first, then the rest.",
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
      fb("Complete.", "Compré estas flores ___ mi madre.", "para", "Para marks the recipient: para mi madre."),
      fb("Complete.", "Mi primer piso era ___ pequeño que este.", "más", "Unequal comparison: más + adjective + que."),
      fb("Complete.", "Esta mañana ___ muy rápido. (vestirse, yo)", "me vestí", "Reflexive + one event."),
      fb("Complete.", "Antes el tren era tan rápido ___ el avión.", "como", "Equality with an adjective is tan... como."),
      mc(
        "«Le ___ 50 euros por la bici.» (pagar, yo)",
        ["pagué", "pagaba", "pago", "pagé"],
        0,
        "One payment is a single event, so the preterite, and -gar verbs add u in the yo form: pagué. \"Pagaba\" is imperfect, \"pago\" present, and \"pagé\" misses the u."
      ),
      toEs("When I was a child I was shorter than my sister.", "Cuando era niño era más bajo que mi hermana.", "Childhood description takes the imperfect (era), with más bajo que for the comparison.", ["Cuando era niña era más baja que mi hermana.", "De niño era más bajo que mi hermana."]),
      toEn("Nunca veíamos a nadie en esa calle.", "We never saw anyone on that street.", "A repeated past habit takes the imperfect (veíamos), with nunca... a nadie.", ["We never used to see anybody on that street.", "We never saw anybody in that street."]),
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
        [
          "Remember the rule: in a story the imperfect paints the scene (what things were like, what was going on, what was about to happen: era, estábamos, iban a) and the preterite moves the plot (what happened next: empezó, corrió). For each gap ask: background, or the next event?",
          "Read the story with the verbs left in the infinitive, then put each one in the right past tense in the exercises: «La boda de mi prima (ser) en un jardín precioso. Todos (estar) contentos y (hacer) muy buen tiempo. Pero justo cuando los novios (ir) a decir “sí”, (empezar) a llover. Todo el mundo (correr) hacia la casa. Al final, los novios se (casar) en la cocina.»",
        ],
        [
          ["Hacía buen tiempo cuando llegaron los invitados.", "It was nice weather when the guests arrived. (hacía = the scene, llegaron = the event)"],
          ["Mientras el cura hablaba, sonó un móvil.", "While the priest was speaking, a phone rang. (hablaba was going on, sonó broke in)"],
        ],
        [
          mc(
            "Where did the couple finally get married?",
            ["in the kitchen", "in the garden", "in a church", "they didn't get married"],
            0,
            "The text says \"Se casaron en la cocina\": they married in the kitchen, not the garden or a church."
          ),
        ]
      ),
    ],
    [
      { ...fb("Fill in.", "La boda ___ en un jardín precioso. (ser)", "era", "Setting → imperfect. Fue is also correct: ser in the preterite for where an event took place."), altAnswers: ["fue"] },
      fb("Fill in.", "Todos ___ contentos. (estar, nosotros)", "estábamos", "State → imperfect."),
      fb("Fill in.", "Los novios ___ a decir «sí». (ir)", "iban", "Ir a in the past = about to."),
      fb("Fill in.", "De repente ___ a llover. (empezar)", "empezó", "Event → preterite."),
      fb("Fill in.", "Todo el mundo ___ hacia la casa. (correr)", "corrió", "Event → preterite."),
      fb("Fill in.", "Al final los novios se ___ en la cocina. (casar)", "casaron", "Event → preterite."),
      mc(
        "«Iban a decir “sí”» means…",
        ["they were about to say yes", "they said yes", "they used to say yes", "they will say yes"],
        0,
        "Ir a + infinitive in the imperfect means was/were about to: iban a decir que sí. It's not a completed yes, a habit or the future."
      ),
      toEs("Everyone was laughing and nobody was angry.", "Todos se reían y nadie estaba enfadado.", "Both are background in the imperfect (se reían, estaba), and nadie before the verb stands alone.", ["Todo el mundo se reía y nadie estaba enfadado.", "Todos reían y nadie estaba enojado."]),
    ]
  ),
  L(
    "a2-vocabulary-practice-5",
    "a2d-fix-paragraph-travel-diary",
    "Fix the Paragraph: A Travel Diary",
    "A diary entry from Peru with five past-tense errors (wrong tense), plus several badly formed verbs to fix in the exercises. Fix them all.",
    "7 min",
    [
      sec(
        "The diary",
        [
          "Remember the rule: the day's events, one after another, go in the preterite (llegamos, visitamos); what places and people were like, the weather and how you felt go in the imperfect (era, hacía, estábamos). Irregular preterite stems (dij-, hic-, pus-) never take the regular endings.",
          "This diary has five verbs in the wrong tense, marked ✗. Decide for each one: event or description? «Querido diario: hoy ✗ llegábamos a Cusco. La ciudad ✗ fue preciosa y ✗ hizo frío. Estábamos cansados, así que ✗ tomábamos una siesta. Por la tarde ✗ visitábamos la catedral.»",
        ],
        [
          ["Ayer visitamos el museo y comimos en el centro.", "Yesterday we visited the museum and ate in the centre. (one event after another: preterite)"],
          ["El museo era enorme y había mucha gente.", "The museum was huge and there were a lot of people. (description: imperfect)"],
        ],
        [
          fb("Fix it.", "Hoy ___ a Cusco. (the diary says: llegábamos)", "llegamos", "One arrival is a single event, so the preterite: llegamos, not llegábamos."),
        ]
      ),
    ],
    [
      fb("Fix it.", "La ciudad ___ preciosa. (the diary says: fue)", "era", "Describing what the city was like as you saw it → imperfect. (Fue preciosa isn't impossible, but it sums the visit up as a finished experience, which sounds odd in the middle of the day's events.)"),
      fb("Fix it.", "___ frío y había mucha gente. (the diary says: Hizo)", "Hacía", "Weather as background takes the imperfect: hacía frío, not hizo."),
      { ...fb("Fix it.", "Como estábamos cansados, ___ una siesta. (the diary says: tomábamos)", "tomamos", "One nap is a single event, so the preterite: tomamos, not tomábamos."), altAnswers: ["echamos", "dormimos"] },
      fb("Fix it.", "Por la tarde ___ la catedral. (the diary says: visitábamos)", "visitamos", "Visiting the cathedral that afternoon is a single event, so the preterite: visitamos."),
      fb("Fix it.", "El guía nos ___ que la catedral era muy antigua. (the diary says: dició)", "dijo", "Dició is not a word: decir has the irregular stem dij- in the preterite, so dijo."),
      mc(
        "Which diary sentence is correct?",
        ["Mientras cenábamos, empezó a tocar una banda.", "Mientras cenamos, empezaba a tocar una banda.", "Mientras cenábamos, empezaba a tocar una banda de repente.", "Mientras cenaron, empezó."],
        0,
        "Dinner in progress is imperfect (cenábamos), and the band starting is the interruption in the preterite (empezó). The wrong options use the preterite for the dinner or the imperfect for the sudden start."
      ),
      toEs("We were tired but very happy.", "Estábamos cansados pero muy felices.", "Being tired and happy are states, so the imperfect: estábamos.", ["Estábamos cansadas pero muy felices.", "Estábamos cansados, pero muy contentos."]),
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
        [
          "Remember the rule: a biography is a line of milestones (dated, finished events → preterite: nació, se casó, murió) with context hung on it (what life was like, ongoing situations, age, habits → imperfect: vivía, pintaba, tenía dieciocho años). A date like en 1925 almost always signals a milestone.",
          "Timelines are often written in the present. Turn each entry into the past: 1907: nace en Coyoacán. 1913: tiene polio (de niña cojea un poco). 1922: empieza a estudiar en la Escuela Preparatoria. 1925: sufre un accidente de autobús. Durante la recuperación, pinta en la cama. 1929: se casa con Diego Rivera.",
        ],
        [
          ["Frida Kahlo nació en 1907 en Coyoacán.", "Frida Kahlo was born in 1907 in Coyoacán."],
          ["Mientras se recuperaba, pintaba en la cama.", "While she was recovering, she painted in bed."],
        ],
        [
          fb("Milestone.", "En 1922 Frida ___ a estudiar en la Escuela Preparatoria. (empezar)", "empezó", "A dated start is a milestone, so the preterite: empezó (stress on the last syllable)."),
        ]
      ),
    ],
    [
      fb("Milestone.", "En 1925 ___ un accidente de autobús. (tener)", "tuvo", "Event → preterite."),
      fb("Context.", "Durante esos meses, Frida ___ mucho la ayuda de su madre. (necesitar)", "necesitaba", "An ongoing situation during the recovery is context, so the imperfect: necesitaba."),
      fb("Milestone.", "En 1929 se ___ con Diego Rivera. (casar)", "casó", "Event → preterite."),
      fb("Context.", "De niña Frida ___ un poco por la polio. (cojear)", "cojeaba", "Ongoing condition → imperfect."),
      fb("Context.", "Su casa ___ azul. (ser)", "era", "Description → imperfect."),
      mc(
        "«Frida ___ en 1954.» (morir)",
        ["murió", "moría", "muere siempre", "morió"],
        0,
        "Dying in 1954 is a single milestone, so the preterite: murió (o → u). \"Moría\" is imperfect, \"muere siempre\" is present, and \"morió\" misses the stem change."
      ),
      toEs("She painted many self-portraits.", "Pintó muchos autorretratos.", "Completed body of work → preterite.", ["Ella pintó muchos autorretratos."]),
      toEn("Cuando conoció a Diego, ya pintaba muy bien.", "When she met Diego, she already painted very well.", "Conoció is the event (preterite), and pintaba is the background skill (imperfect).", ["When she met Diego, she was already painting very well.", "When she met Diego she already painted really well."]),
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
        [
          "Remember the rule: the preterite sees an action as one finished event, the imperfect as an ongoing state. For four verbs that changes the English word: conocí = I met / conocía = I knew; supe = I found out / sabía = I knew; quise = I tried, no quise = I refused / quería = I wanted; pude = I managed / podía = I was able.",
          "Closed durations (tres años, de 2015 a 2019) → preterite. Background clock time and age → imperfect. Interruptions: imperfect for what was going on + preterite for what broke in.",
        ],
        [
          ["Pude terminar a tiempo. (I managed to)", "I managed to finish on time."],
          ["No podía dormir. (I couldn't — ongoing)", "I couldn't sleep."],
        ],
        [
          mc(
            "«Después de horas, por fin ___ abrir la puerta.»",
            ["pudimos", "podíamos", "podemos", "podremos"],
            0,
            "In the preterite, poder means managed to: por fin pudimos. \"Podíamos\" means were able to (no result), \"podemos\" is present, and \"podremos\" future."
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
        "Meeting him is an event (conocí), and his being married is background (estaba). The wrong pairs make the meeting ongoing or his marriage a completed event."
      ),
      toEs("I met him when I was working in Lima.", "Lo conocí cuando trabajaba en Lima.", "Lo conocí is the event (preterite), and trabajaba is the background (imperfect).", ["Le conocí cuando trabajaba en Lima.", "Lo conocí cuando yo trabajaba en Lima."]),
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
        "Remember the rule: when you look back on a year, the habits and ongoing situations are the background → imperfect (trabajaba mucho, iba al gimnasio). The specific events and changes, usually with a month or date, → preterite (en marzo empecé un curso, me mudé, conocí a…). And a verdict on the whole finished year → preterite (Fue un buen año).",
        [
          ["El año pasado trabajaba mucho y dormía poco.", "Last year I was working a lot and sleeping little."],
          ["En junio me mudé a un piso nuevo.", "In June I moved to a new flat."],
        ],
        [
          mc(
            "«Fue un año difícil» evaluates…",
            ["the whole finished year", "a habit", "the background", "an action in progress"],
            0,
            "Fue un año difícil sums up the whole finished year, so the preterite. It's not a habit, background or an action in progress."
          ),
        ]
      ),
    ],
    [
      toEs("Last year I went to the gym every week.", "El año pasado iba al gimnasio todas las semanas.", "Todas las semanas is a habit, so the imperfect: iba al gimnasio.", ["El año pasado iba al gimnasio cada semana."]),
      toEs("In March I started a Spanish course.", "En marzo empecé un curso de español.", "Starting a course in March is a single event, so the preterite: empecé (z → c).", ["En marzo comencé un curso de español."]),
      toEs("In June I moved to a new city.", "En junio me mudé a una ciudad nueva.", "Moving in June is a single event, so the preterite: me mudé.", ["En junio me mudé a otra ciudad."]),
      toEs("I didn't know anyone there.", "No conocía a nadie allí.", "Not knowing anyone was a state, so the imperfect: no conocía a nadie (personal a with nadie).", ["Allí no conocía a nadie."]),
      toEs("It was a good year.", "Fue un buen año.", "Summing up a whole, finished year uses the preterite: fue un buen año.", []),
      fb("Complete.", "Al principio ___ un poco sola. (estar, yo)", "estaba", "Feeling lonely at first was a state, so the imperfect: estaba."),
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
        [
          "Remember the rule: in a past story the imperfect sets the scene (hacía viento, mirábamos una película) and the preterite tells what happened next (alguien llamó, abrió la puerta). Listen for the endings: -aba / -ía is scene, a stressed -ó / -ió is an event.",
          "Word order: time expressions often go first (Aquella noche…, De repente…), then subject, verb, object, place. Adverbs of frequency can go before the verb (siempre llegaba) or at the end.",
        ],
        [
          ["Aquella noche mi padre llegó muy tarde a casa.", "That night my father got home very late."],
        ],
        [
          mc(
            "Most natural order:",
            ["De repente se apagaron todas las luces.", "Se de repente apagaron todas las luces.", "Todas de repente las luces se apagaron.", "Apagaron se de repente las luces."],
            0,
            "Time expression + se + verb + subject: De repente se apagaron todas las luces. The wrong options put de repente inside se + verb or put se after the verb."
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
        "Era identifies or describes who was there, so the imperfect. It's not a completed action, a habit or a counted repetition."
      ),
      toEs("We laughed a lot that night.", "Nos reímos mucho aquella noche.", "Laughing that night is a completed event, so the preterite: nos reímos.", ["Aquella noche nos reímos mucho.", "Nos reímos mucho esa noche."]),
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
        [
          "Remember the rule: the pronoun copies the noun's gender and number. Masculine singular → lo, feminine singular → la, masculine plural → los, feminine plural → las. It goes before the conjugated verb: Compro el pan → Lo compro.",
          "The trap: the noun's ending can lie. Check the article. El mapa, el problema, el día are masculine (lo); la mano, la foto, la moto are feminine (la).",
        ],
        [
          ["¿La sopa? La preparo yo.", "The soup? I'm making it. (la sopa → la)"],
          ["¿Los zapatos? Los compré ayer.", "The shoes? I bought them yesterday. (los zapatos → los)"],
          ["¿El problema? Lo resolvemos mañana.", "The problem? We'll solve it tomorrow. (el problema: -a but masculine → lo)"],
        ],
        [
          fb("Replace the object.", "Leo el periódico. → ___ leo.", "Lo", "El periódico is masculine singular, so lo, before the verb."),
          fb("Replace the object.", "Necesito la mano derecha. → ___ necesito.", "La", "La mano is feminine even though it ends in -o: follow the article, so la."),
        ]
      ),
    ],
    [
      fb("Replace the object.", "Escribo la carta. → ___ escribo.", "La", "La carta is feminine singular, so la, before the verb."),
      fb("Replace the object.", "Borro los mensajes. → ___ borro.", "Los", "Los mensajes is masculine plural, so los. Mensaje ends in -e, so the article is your only clue."),
      fb("Replace the object.", "Vemos las noticias. → ___ vemos.", "Las", "Las noticias is feminine plural, so las, before the verb."),
      fb("Replace the object.", "No lavé los platos. → No ___ lavé.", "los", "Los platos is masculine plural → los. With no, the order is no + pronoun + verb."),
      fb("Replace the object.", "Abrimos la ventana. → ___ abrimos.", "La", "La ventana is feminine singular, so la, before the verb."),
      mt(
        "Match the noun with its pronoun.",
        [
          ["las llaves", "las"],
          ["el coche", "lo"],
          ["los libros", "los"],
          ["la maleta", "la"],
        ],
        "Gender and number come from the article: las → las, el → lo, los → los, la → la."
      ),
      mc(
        "«¿Tienes las entradas?» — «Sí, ___ tengo.»",
        ["las", "los", "la", "les"],
        0,
        "Las entradas is feminine plural, so las. \"Los\" is masculine, \"la\" singular, and \"les\" is an indirect pronoun (to them)."
      ),
      toEs("The keys? I have them.", "¿Las llaves? Las tengo yo.", "Las llaves is feminine plural, so las, before tengo.", ["¿Las llaves? Las tengo.", "¿Las llaves? Yo las tengo."]),
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
        [
          "Remember the rule: me, te, nos, os are the object pronouns for the people talking, and they go before the conjugated verb, like lo and la.",
          "Why answers flip: the pronoun points at a person, and when the speaker changes, the person changes too. A question with me gets an answer with te; te → me; nos → os (Spain) or los / las (Latin America). Usted is third person, so ¿Me oye usted? → Sí, lo / la oigo.",
        ],
        [
          ["—¿Me oyes bien? —Sí, te oigo perfectamente.", "Can you hear me well? — Yes, I can hear you perfectly. (me → te)"],
          ["—¿Nos invitas? —Claro, los invito a todos.", "Will you invite us? — Of course, I'll invite you all. (nos → los; in Spain os)"],
          ["—¿Te despierto a las siete? —No, despiértame a las ocho.", "Shall I wake you at seven? — No, wake me at eight. (te → me; attached to a command)"],
        ],
        [
          fb("Answer.", "—¿Me ayudas? —Sí, ___ ayudo.", "te", "Me in the question → te in the answer: the person being helped is now \"you\"."),
          mc(
            "Your teacher (usted, a woman) asks: «¿Me entiende?» You answer:",
            ["Sí, la entiendo.", "Sí, te entiendo.", "Sí, me entiende.", "Sí, le entiendo."],
            0,
            "Usted uses third-person pronouns, so a woman addressed as usted is la: la entiendo. Te is for tú, \"me entiende\" means she understands me, and le is an indirect form (heard in Spain only for men)."
          ),
        ]
      ),
    ],
    [
      fb("Answer.", "—¿Te llamo esta noche? —Sí, ___ llamas a las nueve.", "me", "The question asks about you (te), so the answer is about me: me llamas."),
      fb("Answer.", "—¿Nos esperáis? —Sí, ___ esperamos en la puerta.", "os", "The question is about us (nos); answering to vosotros, the pronoun is os: os esperamos (Latin America: los esperamos)."),
      fb("Answer.", "—¿Me quieres? —Claro que ___ quiero.", "te", "The question is about me (me), so the answer is about you: te quiero."),
      fb("Answer.", "—¿Te recogí tarde? —No, ___ recogiste a tiempo.", "me", "Te in the question → me in the answer."),
      mc(
        "«—¿Nos ven ustedes? —Sí, ___ vemos.»",
        ["los", "nos", "me", "te"],
        0,
        "The question is about \"us\", so the answer is about \"you all\": los vemos (in Spain, os vemos). \"Nos vemos\" would mean \"we see ourselves / each other\"."
      ),
      ms(
        "Which answers are correct for «¿Me conoces?»",
        ["Sí, te conozco.", "No, no te conozco.", "Sí, me conozco.", "Sí, lo conozco."],
        [0, 1],
        "Me in the question becomes te in the answer: te conozco, no te conozco. \"Me conozco\" means I know myself, and \"lo conozco\" means I know him."
      ),
      toEs("¿Me oyes? — Sí, me oigo.", "¿Me oyes? — Sí, te oigo.", "The answer is about the other person, so me flips to te: te oigo (oír → oigo). \"Me oigo\" means I hear myself.", ["¿Me oyes? —Sí, te oigo."], "Correct the answer."),
      mc(
        "«Mis padres nos visitaron el domingo.» Who visited whom?",
        ["My parents visited us.", "We visited my parents.", "My parents visited them.", "My parents visited each other."],
        0,
        "Mis padres is the subject (visitaron = they visited) and nos is the object: us. If we had visited them, it would be los visitamos."
      ),
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
        [
          "Remember the rule: a pronoun must lean on a verb form. It can sit in front of a conjugated verb (lo compro) or be glued to the end of an infinitive or gerund (comprarlo, comprándolo). So with two verbs you get two correct places: Lo quiero ver / Quiero verlo; La estoy leyendo / Estoy leyéndola.",
          "Never in the middle, and never twice: ✗ Quiero lo ver, ✗ Lo quiero verlo. Glued to a gerund, the word gets longer, so add a written accent to keep the original stress: leyendo → leyéndola.",
        ],
        [
          ["Te voy a llamar. = Voy a llamarte.", "I'm going to call you."],
          ["Lo estoy buscando. = Estoy buscándolo.", "I'm looking for it. (accent once attached)"],
          ["No las puedo abrir. = No puedo abrirlas.", "I can't open them. (no always stays first)"],
        ],
        [
          ms(
            "Which are correct?",
            ["Las voy a lavar.", "Voy a lavarlas.", "Voy las a lavar.", "Voy a las lavar."],
            [0, 1],
            "The pronoun goes before the conjugated verb (las voy a lavar) or attaches to the infinitive (lavarlas). \"Voy las a lavar\" and \"Voy a las lavar\" put it between the verbs."
          ),
          mc(
            "\"We're watching it (the series).\" Which one is correct?",
            ["Estamos viéndola.", "Estamos la viendo.", "Estamos viendola.", "La estamos viéndola."],
            0,
            "La serie → la, glued to the gerund with an accent: viéndola (or la estamos viendo). \"Estamos la\" puts it in the middle, \"viendola\" loses the accent, and \"La estamos viéndola\" uses it twice."
          ),
        ]
      ),
    ],
    [
      toEs("Lo quiero comprar.", "Quiero comprarlo.", "The pronoun can attach to the infinitive instead of going before quiero.", [], "Rewrite it with the pronoun attached."),
      toEs("La estoy preparando.", "Estoy preparándola.", "Glued to the gerund, the word grows, so preparando needs an accent: preparándola.", [], "Rewrite it with the pronoun attached."),
      toEs("Voy a visitarlos mañana.", "Los voy a visitar mañana.", "The pronoun can come off the infinitive and go before the conjugated verb voy.", ["Mañana los voy a visitar."], "Rewrite it with the pronoun before the verbs."),
      fb("Rewrite before.", "Necesito verte. → ___ necesito ver.", "Te", "The pronoun can go before the conjugated verb: te necesito ver."),
      mc(
        "Which one is wrong?",
        ["Puedo lo hacer.", "Lo puedo hacer.", "Puedo hacerlo.", "Lo hago."],
        0,
        "The pronoun goes before the conjugated verb or attaches to the infinitive, never between them, so \"Puedo lo hacer\" is wrong. The other three are correct."
      ),
      mc(
        "Why does «preparándola» have an accent?",
        ["Adding a pronoun leaves the stress on the third-to-last syllable (rán).", "Because it's feminine.", "Because it's a command.", "It doesn't need one."],
        0,
        "The stress stays on rán. Adding la pushes it further from the end of the word, so it needs a written accent to keep that stress. It has nothing to do with gender or commands, and without the accent it would be misread."
      ),
      toEs("I want to see it (the movie).", "Quiero verla.", "La película is feminine singular, so la, attached to the infinitive: verla.", ["La quiero ver."]),
      wo("No te puedo ayudar hoy, lo siento.", "Pronoun before the conjugated verb, with no in front of it.", "I can't help you today, sorry."),
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
        [
          "Remember the rule: once the noun is known, natural Spanish swaps it for lo, la, los or las (same gender and number) in front of the conjugated verb: «—¿Te gusta esta chaqueta? —Sí, la quiero probar.»",
          "Repeating the noun isn't wrong grammar, but it sounds robotic, like \"Do you buy the dress? Yes, I buy the dress.\" Pagar, buscar and esperar already include \"for\", so they take the pronoun directly: la pago (I pay for it).",
        ],
        [
          ["—¿Compras el vestido? —Sí, lo compro.", "Are you buying the dress? — Yes, I'm buying it."],
          ["—¿Y los pantalones? —No, no los necesito.", "And the trousers? — No, I don't need them."],
          ["—¿La cuenta? —La pago yo.", "The bill? — I'll pay for it. (pagar: no word for \"for\")"],
        ],
        [
          fb("Answer with the right object pronoun (lo, la, los, las).", "—¿Y la camiseta? —___ quiero en azul.", "La", "La camiseta is feminine singular, so la."),
          mc(
            "«—¿Buscas unos guantes?» Which answer sounds natural?",
            ["Sí, los busco de lana.", "Sí, busco los guantes de lana.", "Sí, busco los de lana guantes.", "Sí, las busco de lana."],
            0,
            "Unos guantes is masculine plural → los, before busco. Repeating los guantes is correct but robotic, the third option scrambles the words, and las is feminine."
          ),
        ]
      ),
    ],
    [
      fb("Answer with the right object pronoun (lo, la, los, las).", "—¿Compras los calcetines? —Sí, ___ compro.", "los", "Los calcetines is masculine plural, so los."),
      fb("Answer with the right object pronoun (lo, la, los, las).", "—¿Y las botas? —No, no ___ necesito.", "las", "Las botas is feminine plural; in a negative, no comes first, then the pronoun, then the verb: no las necesito."),
      fb("Answer with the right object pronoun (lo, la, los, las).", "—¿Dónde está el probador? —___ tiene allí, a la derecha. (usted)", "Lo", "El probador is masculine singular, so lo: lo tiene allí."),
      fb("Answer with the right object pronoun (lo, la, los, las).", "—¿Pagas la cuenta con tarjeta? —No, ___ pago en efectivo.", "la", "La cuenta is feminine singular, so la."),
      mc(
        "«—¿Compraste los regalos? —Sí, ___ compré ayer.»",
        ["los", "las", "lo", "les"],
        0,
        "Los regalos is masculine plural, so los. \"Las\" is feminine, \"lo\" singular, and \"les\" is an indirect pronoun."
      ),
      toEs("The jacket? I'm going to try it on.", "¿La chaqueta? Voy a probarla.", "La chaqueta is feminine, so la, attached to the infinitive: probarla.", ["¿La chaqueta? La voy a probar."]),
      mc(
        "The shop assistant asks: «¿Y el bolso?» You don't want it. You say:",
        ["No, no lo necesito.", "No, no la necesito.", "No, no necesito lo.", "No, lo no necesito."],
        0,
        "El bolso → lo, and the order is no + lo + verb. La is feminine, and the pronoun can't follow the verb or come before no."
      ),
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
        [
          "Remember the rule: the pronoun copies the gender and number of the object (not the subject, not the speaker), and sits before a conjugated verb or glued to an infinitive / gerund, never between two verbs.",
          "So check each pronoun twice: 1) What noun does it replace, and is that noun el / la / los / las? 2) Is it in front of the conjugated verb or attached? Typical slips: ✗ Compré la mesa y lo pinté (→ la pinté). ✗ Quiero lo ver (→ Lo quiero ver / Quiero verlo). ✗ Les llevo (for a direct object → Los llevo).",
        ],
        [
          ["Compré unas sillas y las pinté.", "I bought some chairs and painted them. (unas sillas → las)"],
          ["Te quiero enseñar el jardín. = Quiero enseñarte el jardín.", "I want to show you the garden. (te: before quiero or attached)"],
          ["Mi abuela hizo el pastel y lo trajo.", "My grandmother made the cake and brought it. (lo copies el pastel, not la abuela)"],
        ],
        [
          fb("Fix it.", "Compré unas sillas y ___ pinté de azul. (a learner wrote: lo)", "las", "Unas sillas is feminine plural, so las, not lo."),
        ]
      ),
    ],
    [
      fb("Fix it.", "Quiero ___ las fotos. (a learner wrote: te enseñar — attach it)", "enseñarte", "The pronoun attaches to the infinitive: enseñarte. It can't stand between the verbs as te enseñar."),
      fb("Fix it.", "Mi hermano vio la película y ___ odió. (a learner wrote: lo)", "la", "La película is feminine, so la odió, not lo. The subject (mi hermano) doesn't decide the pronoun."),
      fb("Fix it.", "Tengo tus libros; ___ tengo en mi mochila. (a learner wrote: las)", "los", "Tus libros is masculine plural, so los, not las."),
      fb("Fix it.", "¿Las entradas? No ___ encuentro. (a learner wrote: los)", "las", "Las entradas is feminine plural, so las, not los."),
      mc(
        "Which sentence is correct?",
        ["El pastel está delicioso; lo hizo mi abuela.", "El pastel está delicioso; la hizo mi abuela.", "El pastel está delicioso; hizo lo mi abuela.", "El pastel está delicioso; hizo mi abuela lo."],
        0,
        "El pastel is masculine, so lo, before the verb: lo hizo mi abuela. \"La\" copies the grandmother instead of the cake, and the other two put lo after the verb."
      ),
      toEs("I bought the flowers and put them on the table.", "Compré las flores y las puse en la mesa.", "Las flores is feminine plural, so las, before puse.", ["Compré las flores y las puse sobre la mesa."]),
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
        [
          "Remember the rule: the person who receives something (a gift, words, a letter) is the indirect object. Le = to him / her / you (usted); les = to them / you all. They change for number only, never for gender.",
          "Because le can mean so many people, Spanish adds a + person to say who: Le escribo a mi abuela. The pronoun stays even when a + person appears; it's the a + person part that's optional.",
        ],
        [
          ["Le compré un regalo a mi hermana.", "I bought my sister a present. (le for a woman too)"],
          ["Les expliqué el problema a los clientes.", "I explained the problem to the customers. (plural → les)"],
          ["¿Le digo la verdad?", "Shall I tell him / her the truth? (no a + person: context says who)"],
        ],
        [
          fb("Complete.", "___ mando un mensaje a Pedro.", "Le", "A Pedro receives the message, so le."),
          mc(
            "«___ enseñamos la ciudad a nuestras amigas.»",
            ["Les", "Las", "Le", "Nos"],
            0,
            "Our friends receive the tour (the city is what we show), so the plural indirect les. Las would make the friends the thing shown, le is singular, and nos is us."
          ),
        ]
      ),
    ],
    [
      fb("Complete.", "___ di las gracias a mis vecinos.", "Les", "A mis vecinos is plural, so the indirect pronoun is les."),
      fb("Complete.", "¿___ prestaste dinero a tu primo?", "Le", "A tu primo is one person, so the indirect pronoun is le."),
      fb("Complete.", "El profesor ___ explicó la lección a los alumnos.", "les", "A los alumnos is plural, so the indirect pronoun is les."),
      fb("Complete.", "Mi madre ___ cuenta un cuento a mi hija cada noche.", "le", "A mi hija → le (no gender change)."),
      mc(
        "«___ regalé flores a mi abuela y a mi tía.»",
        ["Les", "Le", "Las", "Los"],
        0,
        "Two people receive the flowers, so les. \"Le\" is singular, and \"las\" and \"los\" are direct object pronouns."
      ),
      ms(
        "Which verbs usually take an indirect object?",
        ["dar", "decir", "mandar", "dormir"],
        [0, 1, 2],
        "Dar, decir and mandar take someone who receives something. \"Dormir\" (to sleep) doesn't."
      ),
      toEs("Escribí un correo a mi jefe.", "Le escribí un correo a mi jefe.", "The receiver a mi jefe still needs its pronoun: le escribí ... a mi jefe.", ["Le escribí un email a mi jefe.", "Le escribí un correo electrónico a mi jefe."], "Correct the sentence."),
      wo("Siempre les digo la verdad a mis amigos.", "Les + a mis amigos: the pronoun before the verb, the clarifying phrase after.", "I always tell my friends the truth."),
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
        [
          "Remember the rule: ask whether there is a thing being passed. If the verb acts straight on the person (ver, llamar, ayudar, visitar, invitar, esperar), the person is the direct object → lo / la / los / las. If something (a letter, a secret, the truth) goes to the person, the thing is the direct object and the person is the receiver → le / les.",
          "Why it matters: lo / la show gender, le doesn't. Veo a Ana → la veo. Le mando una carta a Ana → le mando (the letter is what I send). The English word \"to\" is not a reliable clue: \"I called her\" has no to but is la; \"I answered her\" is le (I give her an answer).",
        ],
        [
          ["Llamé a mi madre. → La llamé.", "I called my mother. → I called her."],
          ["Le conté un secreto a mi madre.", "I told my mother a secret. (the secret passes to her → le)"],
          ["Esperé a mis amigos. → Los esperé.", "I waited for my friends. → I waited for them. (esperar acts directly: los)"],
        ],
        [
          mc(
            "«Visité a mi abuela.» →",
            ["La visité.", "Le visité.", "Lo visité.", "Les visité."],
            0,
            "Visitar takes a direct object, and abuela is feminine: la visité. \"Le visité\" uses the indirect pronoun, \"lo\" is masculine, and \"les\" is plural."
          ),
          mc(
            "«Pedí ayuda a mi vecino.» →",
            ["Le pedí ayuda.", "Lo pedí ayuda.", "La pedí ayuda.", "Les pedí ayuda."],
            0,
            "Ayuda is the thing asked for; your neighbor receives the request, so le. Lo would make the neighbor the thing asked for, la is feminine, and les is plural."
          ),
        ]
      ),
    ],
    [
      mc(
        "«Escribí una carta a mi abuela.» →",
        ["Le escribí una carta.", "La escribí una carta.", "Lo escribí una carta.", "Las escribí una carta."],
        0,
        "The letter is the thing; grandma receives it, so she's the indirect object: le. \"La\", \"lo\" and \"las\" are direct object pronouns."
      ),
      mc(
        "«Ayudé a mis compañeros.» →",
        ["Los ayudé.", "Les ayudé a ellos la tarea.", "Le ayudé.", "Las ayudé los."],
        0,
        "Ayudar a alguien takes a direct object in standard Spanish: los ayudé. \"Le ayudé\" is singular (and le with ayudar is regional), and the other two are garbled."
      ),
      fb("Lo/la or le?", "Vi a Carmen en el mercado. → ___ vi en el mercado.", "La", "Ver takes a direct object, and Carmen is feminine: la vi."),
      fb("Lo/la or le?", "Dije la verdad a Carmen. → ___ dije la verdad.", "Le", "The truth is the thing said and Carmen receives it, so she is the indirect object: le dije, not la dije."),
      fb("Lo/la or le?", "Invité a Marcos a la fiesta. → ___ invité a la fiesta.", "Lo", "Invitar takes a direct object, and Marcos is masculine: lo invité."),
      fb("Lo/la or le?", "Pregunté la hora a Marcos. → ___ pregunté la hora.", "Le", "The time is what you ask and Marcos receives the question, so le pregunté, not lo pregunté."),
      mt(
        "Match each sentence with its pronoun.",
        [
          ["Espero a mis amigas.", "las espero"],
          ["Mando fotos a mis amigas.", "les mando fotos"],
          ["Conozco a tu hermano.", "lo conozco"],
        ],
        "Direct vs. indirect person."
      ),
      toEs("Le llamé y la conté la noticia.", "La llamé y le conté la noticia.", "Llamar acts directly on her (la llamé); contar passes the news to her (le conté). The two pronouns were swapped.", ["La llamé y le di la noticia.", "La llamé y le dije la noticia."], "Correct the sentence."),
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
        [
          "Remember the rule: gustar means \"to be pleasing\", so the thing liked is the subject and the person is an indirect object. The pronoun shows who (me, te, le, nos, os, les); the verb agrees with what: me gusta el café / me gustan los perros.",
          "Encantar (to delight), molestar (to bother), interesar (to interest) and doler (to hurt) work the same way: Me duelen los pies = my feet hurt me. An infinitive counts as singular (les encanta viajar), and a + person clarifies who: A mis padres les encanta viajar.",
        ],
        [
          ["A mi hermano le molestan los ruidos.", "Noises bother my brother."],
          ["Nos encantó la película.", "We loved the movie. (encantó agrees with la película, not with us)"],
          ["¿Te duele la cabeza?", "Does your head hurt? (la, not tu, with body parts)"],
        ],
        [
          fb("Complete.", "A mis abuelos ___ gusta el campo.", "les", "A mis abuelos is plural, so les. Gusta stays singular because el campo is singular."),
          mc(
            "\"Spiders bother my son.\"",
            ["A mi hijo le molestan las arañas.", "A mi hijo le molesta las arañas.", "Mi hijo molesta las arañas.", "A mi hijo lo molestan las arañas."],
            0,
            "The spiders do the bothering, so the verb agrees with them: molestan. Le marks mi hijo as the person affected. \"Molesta\" is singular, \"Mi hijo molesta las arañas\" means he bothers the spiders, and lo is a direct object pronoun."
          ),
        ]
      ),
    ],
    [
      fb("Agree the verb.", "Me ___ mucho las series coreanas. (gustar, present)", "gustan", "Plural thing → gustan."),
      fb("Complete.", "¿A ti ___ interesa la política?", "te", "A ti matches the pronoun te: te interesa."),
      fb("Agree the verb.", "A Laura le ___ la cabeza. (doler, present)", "duele", "Singular thing → duele."),
      fb("Complete.", "A nosotros ___ molesta el humo.", "nos", "A nosotros matches the pronoun nos: nos molesta."),
      fb("Past.", "A mis padres les ___ mucho el viaje. (encantar, preterite)", "encantó", "El viaje (singular) → encantó."),
      mc(
        "«A Pedro ___ los deportes.»",
        ["le gustan", "le gusta", "les gustan", "lo gustan"],
        0,
        "Pedro takes le, and los deportes is plural, so gustan. \"Le gusta\" breaks agreement, \"les\" is plural, and \"lo\" is a direct object pronoun."
      ),
      toEs("Me duele el pie.", "Me duelen los pies.", "Doler agrees with what hurts: los pies is plural, so duelen. Me (the person) doesn't change.", [], "Make it plural."),
      mc(
        "«A mi madre no le gustaban nada los gatos.» What does it mean?",
        ["My mother didn't like cats at all.", "Cats didn't like my mother at all.", "My mother doesn't like any cats now.", "My mother liked nothing but cats."],
        0,
        "Le = my mother (the person pleased or not), and gustaban agrees with los gatos. The imperfect shows a lasting past dislike, and no... nada means not at all."
      ),
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
        [
          "Remember the rule: the receiver of a favor or a message is an indirect object (me, te, le, nos, os, les) before the verb. In an answer, the pronoun mirrors the question from the other side: me ↔ te, nos → os / les, while le / les stay le / les because the third person hasn't changed.",
          "¿Me prestas tu bici? → Sí, te presto mi bici. ¿Le dijiste a Ana la hora? → Sí, le dije la hora. Keep the thing as a noun for now (no double pronouns yet).",
        ],
        [
          ["—¿Me pasas la sal? —Sí, te paso la sal.", "Can you pass me the salt? — Yes, here's the salt. (me → te)"],
          ["—¿Le devolviste el libro a Raúl? —Sí, le devolví el libro.", "Did you give Raúl the book back? — Yes, I gave him the book back. (le stays le)"],
        ],
        [
          fb("Answer.", "—¿Me dejas tu cargador? —Sí, ___ dejo mi cargador.", "te", "The question is about me (me), so the answer is about you: te dejo."),
          mc(
            "«—¿Les enseñaste las fotos a tus padres? —Sí, ___ enseñé las fotos.»",
            ["les", "nos", "los", "te"],
            0,
            "Your parents are still the third person, so les stays les. Nos and te would change who received them, and los would make the parents the thing shown."
          ),
        ]
      ),
    ],
    [
      fb("Answer.", "—¿Le mandaste la invitación a Clara? —Sí, ___ mandé la invitación.", "le", "A Clara receives the invitation, so le."),
      fb("Answer.", "—¿Les compraste algo a los niños? —Sí, ___ compré unos juguetes.", "les", "A los niños is plural, so les."),
      fb("Answer.", "—¿Te explicó el jefe el plan? —Sí, ___ contó todo.", "me", "Te in the question → me in the answer."),
      fb("Answer.", "—¿Nos traes agua, por favor? —Claro, ___ traigo agua ahora. (a ustedes)", "les", "Ustedes takes les as the indirect pronoun: les traigo agua."),
      mc(
        "«—¿Me escribiste ayer? —Sí, ___ escribí por la noche.»",
        ["te", "me", "le", "lo"],
        0,
        "The question is about me (me), so the answer is about you: te escribí. \"Me\" would mean I wrote to myself, and \"le\" and \"lo\" are about someone else."
      ),
      toEs("Can you lend me your pen?", "¿Me prestas tu bolígrafo?", "Me (to me) + prestas (you lend): ¿Me prestas...?", ["¿Me prestas tu boli?", "¿Me puedes prestar tu bolígrafo?", "¿Puedes prestarme tu bolígrafo?", "¿Me puedes prestar tu boli?", "¿Puedes prestarme tu boli?"]),
      toEs("Lo pedí ayuda a mi vecino.", "Le pedí ayuda a mi vecino.", "Help is the thing asked for; the neighbor receives the request, so the indirect le, not lo.", [], "Correct the sentence."),
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
        [
          "Remember the rule: two checks catch almost every slip. 1) The pronoun counts the receivers: one → le, several → les, and receivers never take lo / la. 2) With gustar-type verbs the verb counts the things liked (gusta / gustan), never the people.",
          "Typical slips: ✗ Le dije a mis padres (→ les dije). ✗ La escribí a mi tía (→ le escribí). ✗ Me gusta los tacos (→ me gustan). ✗ Yo gusto el café (→ me gusta el café). Message: «Ayer le dije a mis padres que me gusta los tacos de mi tía, así que la escribí para pedir la receta.»",
        ],
        [
          ["A mi tía le gustan las fiestas.", "My aunt likes parties. (le: one person; gustan: several parties)"],
          ["A mis vecinos les encanta el jardín.", "My neighbors love the garden. (les: several people; encanta: one garden)"],
        ],
        [
          fb("Fix it.", "Ayer ___ dije a mis padres la verdad. (the message says: le)", "les", "A mis padres is plural, so les, not le."),
        ]
      ),
    ],
    [
      fb("Fix it.", "Me ___ los tacos de mi tía. (the message says: gusta)", "gustan", "Los tacos is plural, so gustan, not gusta."),
      fb("Fix it.", "___ escribí a mi tía para pedir la receta. (the message says: La)", "Le", "Escribir a alguien takes the indirect pronoun le, not la."),
      fb("Fix it.", "A mi hermano ___ encantan los tacos también. (a learner wrote: lo)", "le", "Gustar-type verbs like encantar take the indirect pronoun: le encantan, not lo."),
      fb("Fix it.", "___ encanta cocinar. (a learner wrote: Yo encanto)", "Me", "Encantar works like gustar: a mí me encanta, not yo encanto."),
      mc(
        "Which sentence is correct?",
        ["A mis primos les molesta el ruido.", "A mis primos le molestan el ruido.", "Mis primos molestan el ruido.", "A mis primos les molestan el ruido."],
        0,
        "Les for mis primos, and molesta agrees with el ruido (singular). \"Le... molestan\" gets both wrong, \"Mis primos molestan\" means they bother the noise, and \"les molestan\" makes the verb agree with the people instead of el ruido."
      ),
      toEs("I sent my parents a photo.", "Les mandé una foto a mis padres.", "Mis padres receive the photo, so les, doubled with a mis padres.", ["Les envié una foto a mis padres.", "Les mandé una foto a mis papás."]),
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
        "Remember the rule: person first, thing second, and le / les can never stand next to lo / la / los / las, so they turn into se. Le doy el libro → Se lo doy. Les mando las fotos → Se las mando. Me / te / nos don't change: Me lo das. Te la compro. The second pronoun still agrees with the thing.",
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
      fb("Double pronoun.", "Le doy el dinero. → Se ___ doy.", "lo", "Le becomes se before lo, and el dinero is lo: se lo doy."),
      fb("Double pronoun.", "Les doy los libros. → Se ___ doy.", "los", "Les becomes se before los, and los libros is los: se los doy."),
      fb("Double pronoun.", "Les doy las entradas. → ___ las doy.", "Se", "Les + las → se las."),
      fb("Double pronoun.", "Te doy la foto. → Te ___ doy.", "la", "Te stays te (only le/les change to se), and la foto is la: te la doy."),
      fb("Double pronoun.", "Me das los papeles. → Me ___ das.", "los", "Me stays me, and los papeles is los: me los das."),
      mc(
        "«Le compré unas flores a mi madre.» →",
        ["Se las compré.", "Le las compré.", "Se los compré.", "Las le compré."],
        0,
        "Le becomes se, and unas flores is feminine plural: se las compré. \"Le las\" skips the change, \"los\" is masculine, and \"Las le\" has the wrong order."
      ),
      ms(
        "Which are correct?",
        ["Se lo expliqué.", "Me la trajo.", "Le lo dije.", "Te los mando."],
        [0, 1, 3],
        "Se lo, me la and te los are correct. \"Le lo\" never appears: le becomes se before lo, so se lo dije."
      ),
      toEs("The book? I gave it to Pedro.", "¿El libro? Se lo di a Pedro.", "Le becomes se before lo: se lo di, with a Pedro making clear who received it.", ["¿El libro? Se lo di a Pedro ayer."]),
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
        "Remember the rule: the person comes first and the thing second, and le or les becomes se before lo, la, los, las. 1) Full sentence: Le mando el paquete a Luis. 2) Drop a Luis (le already says it): Le mando el paquete. 3) Replace the thing too: Se lo mando. Each step keeps the meaning when the context is clear.",
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
      fb("Step 3.", "Le regalé unos pendientes. → ___ regalé.", "Se los", "Le becomes se, and unos pendientes is masculine plural: se los regalé."),
      fb("Step 3.", "Nos contaron la historia. → ___ contaron.", "Nos la", "Nos doesn't change, and la historia is la: nos la contaron."),
      fb("Step 3.", "Te traje las revistas. → ___ traje.", "Te las", "Te doesn't change, and las revistas is las: te las traje."),
      fb("Step 3.", "Le devolví el dinero a mi hermano. → ___ devolví.", "Se lo", "Le + lo → se lo."),
      mc(
        "«Mi abuela nos hizo una tarta.» →",
        ["Mi abuela nos la hizo.", "Mi abuela se la hizo.", "Mi abuela la nos hizo.", "Mi abuela nos lo hizo."],
        0,
        "Nos stays and una tarta is la: nos la hizo. \"Se la\" means for him or them, \"la nos\" has the wrong order, and \"lo\" is masculine."
      ),
      toEs("My friend lent me his bike. — He lent it to me.", "Mi amigo me prestó su bici. — Me la prestó.", "Me (to me) + la (la bici): me la prestó.", ["Mi amigo me prestó su bicicleta. — Me la prestó."]),
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
        "Remember the rule: the pair moves as one block. Both pronouns go before the conjugated verb (Te lo quiero explicar) or both attach to the infinitive (Quiero explicártelo). Attaching two pronouns needs a written accent to keep the original stress: dárselo, explicártelo, contárnosla. ✗ Te quiero explicarlo splits the pair and is not standard.",
        [
          ["Se lo voy a decir. = Voy a decírselo.", "I'm going to tell him."],
          ["¿Me lo puedes repetir? = ¿Puedes repetírmelo?", "Can you repeat it for me?"],
        ],
        [
          ms(
            "Which are correct?",
            ["Te la voy a mandar.", "Voy a mandártela.", "Te voy a mandarla.", "Voy te la a mandar."],
            [0, 1],
            "The pair stays together, before the conjugated verb (te la voy a mandar) or attached to the infinitive (mandártela). \"Te voy a mandarla\" splits it, and \"Voy te la a\" puts it between voy and a."
          ),
        ]
      ),
    ],
    [
      fb("Attach.", "Se lo quiero regalar. → Quiero ___.", "regalárselo", "Both pronouns attach to the infinitive (se before lo), and an accent keeps the stress on gá: regalárselo."),
      fb("Attach.", "Me la tienes que devolver. → Tienes que ___.", "devolvérmela", "Both pronouns attach to the infinitive (me before la), and an accent keeps the stress on vér: devolvérmela."),
      fb("Move before.", "Voy a contártelo. → ___ voy a contar.", "Te lo", "Both pronouns move together before the conjugated verb, indirect first: te lo voy a contar."),
      fb("Move before.", "Podemos dárselas mañana. → ___ podemos dar mañana.", "Se las", "Both pronouns move together before the conjugated verb, indirect first: se las podemos dar."),
      mc(
        "Why does «dárselo» have an accent?",
        ["Two pronouns push the stress back — the accent keeps it on «dar».", "Because it's plural.", "Because it's past tense.", "It's optional."],
        0,
        "Adding two syllables pushes the stress further from the end, so the accent keeps it on dar: dárselo. It has nothing to do with plural or tense, and it isn't optional."
      ),
      mc(
        "«¿Las fotos? ___ enseñar mañana.» (a ti)",
        ["Te las voy a", "Te voy a las", "Las te voy a", "Voy te las a"],
        0,
        "The pair stays together, indirect first, before the conjugated verb: te las voy a enseñar. The wrong options split the pair, reverse it, or put it after voy."
      ),
      toEs("I'm going to explain it to you.", "Te lo voy a explicar.", "Te (to you) + lo (it), together before the conjugated verb: te lo voy a explicar.", ["Voy a explicártelo.", "Se lo voy a explicar.", "Voy a explicárselo."]),
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
        "Remember the rule: the indirect pronoun (the person) comes before the direct one (the thing), le/les turns into se before lo/la/los/las, and the direct pronoun matches the thing, not the person. ✗ Le lo di (→ se lo di). ✗ Lo le di (→ se lo di: indirect first). ✗ Se los di (for one object → se lo di). Note: «El libro de Marta: le lo di ayer. Y las llaves, lo le dejé a su madre.»",
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
      fb("Fix it.", "Las gafas: ___ dejé a su abuelo. (the note says: lo le)", "se las", "Indirect first, and le → se; las gafas → las."),
      fb("Fix it.", "El paraguas: ___ presté a tu padre. (the note says: se los)", "se lo", "El paraguas is one umbrella, so lo: se lo presté, not se los."),
      fb("Fix it.", "La receta: mi abuela ___ dio a mí. (the note says: se la)", "me la", "The recipe was given to me, and a mí matches me: me la dio. Se la would mean to him, her or them."),
      fb("Fix it.", "Las fotos: ___ enseñé a los vecinos. (the note says: les las)", "se las", "Les + las → se las."),
      mc(
        "Which sentence is correct?",
        ["¿El mensaje? Ya se lo mandé a Luis.", "¿El mensaje? Ya le lo mandé a Luis.", "¿El mensaje? Ya lo se mandé.", "¿El mensaje? Ya se le mandé."],
        0,
        "Le becomes se before lo, and the pair goes before the verb: se lo mandé. \"Le lo\" skips the change, \"lo se\" reverses the order, and \"se le\" has no direct object pronoun."
      ),
      toEs("The dishes? I washed them for my mother.", "¿Los platos? Se los lavé a mi madre.", "Se los + a mi madre.", ["¿Los platos? Se los lavé a mi mamá."]),
      toEn("¿La noticia? Nos la contó el vecino.", "The news? The neighbor told it to us.", "Nos (to us) + la (la noticia): nos la contó = told it to us.", ["The news? Our neighbor told us.", "The news? The neighbour told us."]),
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
        "Remember the rule: in an answer the people swap (me in the question → te in the answer, and the other way round; nos → os or se), the thing becomes lo / la / los / las, and le / les turn into se next to it. Question: ¿Le diste las llaves a Juan? Answer: Sí, se las di. ¿Me traes el café? → Sí, te lo traigo. ¿Nos enseñas las fotos? → Sí, os / se las enseño.",
        [
          ["—¿Me prestas tu libro? —Sí, te lo presto.", "Will you lend me your book? — Yes, I'll lend it to you."],
        ],
        [
          fb("Answer.", "—¿Le mandaste el correo al jefe? —Sí, ___ mandé.", "se lo", "Le (to the boss) can't stand next to lo, so it becomes se: se lo mandé."),
        ]
      ),
    ],
    [
      fb("Answer.", "—¿Me devuelves los apuntes? —Sí, ___ devuelvo mañana.", "te los", "Me → te; los apuntes → los."),
      fb("Answer.", "—¿Les contaste la verdad a tus padres? —No, todavía no ___ conté.", "se la", "Les + la → se la."),
      fb("Answer.", "—¿Te regalaron el reloj? —Sí, ___ regalaron mis hermanos.", "me lo", "The question says te (to you), so the answer is me (to me), and el reloj is lo: me lo regalaron."),
      fb("Answer.", "—¿Nos traes las bebidas? —Sí, ___ traigo ahora. (a vosotros)", "os las", "Answering vosotros uses os, and las bebidas is las: os las traigo."),
      fb("Answer.", "—¿Le pediste la cuenta al camarero? —Sí, ___ pedí.", "se la", "Le + la → se la."),
      mt(
        "Match question and answer.",
        [
          ["¿Me das tu número?", "Sí, te lo doy."],
          ["¿Le diste la bici a Ana?", "Sí, se la di."],
          ["¿Nos mandas las fotos?", "Sí, os las mando."],
        ],
        "Two-pronoun answers."
      ),
      toEs("—Did you give Carlos the money? —Yes, I gave it to him.", "—¿Le diste el dinero a Carlos? —Sí, se lo di.", "Le becomes se before lo: se lo di (le + el dinero).", []),
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
        "Remember the rule: first ask what job the pronoun does, then pick its form. Direct (lo/la/los/las): the thing or person acted on. Indirect (le/les): the receiver. Reflexive (me/te/se…): the subject acts on itself. Gustar-type: indirect pronoun + verb agreeing with the thing. Double: indirect + direct, le → se.",
        [
          ["Me lavo las manos y me las seco.", "I wash my hands and dry them."],
          ["A Ana le encantó el libro y se lo recomendó a su hermana.", "Ana loved the book and recommended it to her sister."],
        ],
        [
          mc(
            "«Me lavo las manos» — «me» is…",
            ["reflexive", "direct object", "indirect object of gustar", "a double pronoun"],
            0,
            "Me lavo is reflexive: the action falls on the subject's own body (my own hands). It isn't a plain direct object, the indirect object of gustar, or a double pronoun."
          ),
        ]
      ),
    ],
    [
      fb("Complete.", "¿Las gafas? No ___ encuentro.", "las", "Las gafas is the direct object, feminine plural: las."),
      fb("Complete.", "A mi padre ___ duele la espalda.", "le", "Doler works like gustar: the person takes le (a mi padre le duele)."),
      fb("Complete.", "Todos los días ___ ducho por la mañana. (yo)", "me", "Ducharse is reflexive, and yo takes me: me ducho."),
      fb("Complete.", "¿El vino? ___ traje a tu padre. (le + lo)", "Se lo", "Le + lo becomes se lo: se lo traje."),
      fb("Complete.", "___ escribí una postal a mis primos.", "Les", "A mis primos is plural, so the indirect pronoun is les."),
      mc(
        "«A nosotros ___ encantan las fiestas y siempre ___ organizamos.»",
        ["nos / las", "nos / los", "les / las", "se / las"],
        0,
        "Encantar takes nos for nosotros, and las fiestas is the direct object las: nos encantan, las organizamos. The wrong options use los (masculine), les or se in the wrong slot."
      ),
      toEs("My sister loves the dress and she's going to buy it.", "A mi hermana le encanta el vestido y lo va a comprar.", "Encantar takes le (a mi hermana le encanta), and el vestido is the direct object lo: lo va a comprar.", ["A mi hermana le encanta el vestido y va a comprarlo."]),
      toEn("Se lo expliqué dos veces, pero no lo entendió.", "I explained it to him twice, but he didn't understand it.", "Se lo = it to him (le + lo becomes se lo), and lo entendió = understood it.", ["I explained it to her twice, but she didn't understand it."]),
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
        "Remember the rule: the person who receives takes me, te, le, nos or les; the gift becomes lo, la, los or las; together, le/les turns into se. Me regalaron… (they gave me…) · Se lo regalé a… (I gave it to…) · Me encantó (I loved it) · No me gustó, así que lo cambié (I didn't like it, so I exchanged it).",
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
      toEs("My grandmother gave me a watch.", "Mi abuela me regaló un reloj.", "Me (to me) + regaló (gave as a gift, preterite).", []),
      toEs("I loved it.", "Me encantó.", "Encantar works like gustar; the preterite me encantó means I loved it.", ["Me gustó muchísimo."]),
      toEs("I gave my father a shirt.", "Le regalé una camisa a mi padre.", "Le + a mi padre marks who received the shirt.", ["Le regalé una camisa a mi papá."]),
      toEs("He didn't like it (the shirt), so I exchanged it.", "No le gustó, así que la cambié.", "No le gustó (gustar, him), and la cambié replaces la camisa.", ["No le gustó, entonces la cambié.", "No le gustó y la cambié."]),
      fb("Complete.", "¿Las flores? ___ compré a mi novia.", "Se las", "Le + las → se las."),
      fb("Complete.", "¿El pastel? Nos ___ hizo mi tía.", "lo", "Nos stays nos, and el pastel is lo: nos lo hizo."),
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
        [
          "Remember the rule: a reflexive verb carries two markers of the same person, the pronoun and the ending: me levanto, te levantas, se levanta, nos levantamos, os levantáis, se levantan. If they don't match, the sentence breaks.",
          "The -se is just a pronoun slot, so the verb underneath conjugates normally, stem changes included: despertarse → me despierto, acostarse → me acuesto, vestirse → me visto (but nos despertamos, nos acostamos: no change for nosotros / vosotros).",
        ],
        [
          ["Mis hijos se despiertan a las siete.", "My kids wake up at seven."],
          ["Nos acostamos tarde los sábados.", "We go to bed late on Saturdays."],
        ],
        [
          fb("Complete.", "Yo ___ a las siete. (levantarse)", "me levanto", "Yo → me + -o."),
          mc(
            "Sentarse (to sit down) is e → ie. «Mis abuelos siempre ___ en el sofá.»",
            ["se sientan", "se sentan", "nos sentamos", "se sienta"],
            0,
            "Ellos → se + -an, and the stem changes in a stressed syllable: se sientan. \"Se sentan\" skips the e → ie change, nos is nosotros, and se sienta is singular."
          ),
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
      toEs("Me cepillo mis dientes después del desayuno.", "Me cepillo los dientes después del desayuno.", "Body parts take the article, not a possessive: me already says whose teeth.", ["Me lavo los dientes después del desayuno.", "Me cepillo los dientes después de desayunar."], "Correct the sentence."),
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
        [
          "Remember the rule: se (me, te, nos...) means the action comes back to the subject. No pronoun means it goes out to something or someone else, who then appears after the verb (with personal a for people).",
          "Lavo el coche (the car) / Me lavo (myself). Despierto a mi hijo (someone else) / Me despierto (myself). Acuesto al bebé / Me acuesto. Pongo la mesa (put) / Me pongo el abrigo (put on). Ask: who receives the action?",
        ],
        [
          ["Baño al perro. / Me baño.", "I bathe the dog. / I take a bath."],
          ["Visto a los niños. / Me visto.", "I dress the children. / I get dressed."],
        ],
        [
          mc(
            "«Mi madre ___ a mi hermano a las siete.»",
            ["despierta", "se despierta", "me despierta a sí", "despiertan se"],
            0,
            "She wakes someone else, so no reflexive: despierta. \"Se despierta\" means she wakes up, and the other two are garbled."
          ),
        ]
      ),
    ],
    [
      mc(
        "«Todos los días ___ a las siete.» (I wake up)",
        ["me despierto", "despierto", "se despierto", "despierta"],
        0,
        "Waking yourself up is reflexive, and yo takes me: me despierto. \"Despierto\" alone means I wake someone else, \"se despierto\" mixes persons, and \"despierta\" is él/ella."
      ),
      mc(
        "«___ el abrigo porque hace frío.» (I put on)",
        ["Me pongo", "Pongo", "Se pone", "Pone me"],
        0,
        "Ponerse (to put on clothes) with yo: me pongo. \"Pongo\" means I put something somewhere, \"Se pone\" is él/ella, and \"Pone me\" puts the pronoun after the verb."
      ),
      fb("With or without se?", "Primero ___ al bebé y luego me ducho yo. (bañar)", "baño", "Someone else → no se."),
      fb("With or without se?", "Después del gimnasio ___. (ducharse, yo)", "me ducho", "Myself → me."),
      fb("With or without se?", "Mi padre ___ los platos después de cenar. (lavar)", "lava", "The plates → no se."),
      fb("With or without se?", "Mi padre ___ las manos antes de cenar. (lavarse)", "se lava", "His own hands → se."),
      ms(
        "Which sentences need a reflexive pronoun?",
        ["Yo ___ peino antes de salir.", "Yo ___ peino a mi hija.", "Ella ___ acuesta tarde.", "Ella ___ acuesta a los niños."],
        [0, 2],
        "Use the reflexive pronoun only when the action falls on the subject: me peino, se acuesta. Combing your daughter or putting the kids to bed acts on someone else."
      ),
      toEs("Me acuesto a los niños y luego me acuesto.", "Acuesto a los niños y luego me acuesto.", "Putting the children to bed acts on someone else, so no me: acuesto a los niños. Only the second verb (going to bed yourself) is reflexive.", ["Acuesto a los niños y después me acuesto."], "Correct the sentence."),
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
        [
          "Remember the rule: the pronoun marks the person, so it stays the same in every tense; only the verb goes into the preterite: me levanté, te duchaste, se vistió, nos fuimos.",
          "Stem changes follow the preterite's own rules: -ar verbs lose them (me acuesto → me acosté, me despierto → me desperté), while -ir verbs change only in él / ellos: vestirse → se vistió, se vistieron; dormirse → se durmió, se durmieron.",
        ],
        [
          ["Ayer me levanté a las seis y me duché enseguida.", "Yesterday I got up at six and showered straight away."],
          ["Mi hermano se durmió en el sofá.", "My brother fell asleep on the sofa."],
        ],
        [
          fb("Complete.", "Ayer ___ a las seis. (despertarse, yo)", "me desperté", "No stem change in the preterite for -ar."),
          mc(
            "Divertirse (to have fun) is an -ir stem-changer. \"The kids had a lot of fun at the party.\"",
            ["Los niños se divirtieron mucho en la fiesta.", "Los niños se divertieron mucho en la fiesta.", "Los niños se divierten mucho en la fiesta.", "Los niños nos divertimos mucho en la fiesta."],
            0,
            "-Ir stem-changers shift e → i in the ellos preterite: se divirtieron. \"Divertieron\" misses the change, divierten is present, and nos is nosotros."
          ),
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
        "Anoche calls for the preterite, and tú takes te: te acostaste. \"Te acuestas\" is present, \"te acostabas siempre\" is a habit, and \"se acostó\" is él/ella."
      ),
      toEs("Ayer me levanté tarde y no duché.", "Ayer me levanté tarde y no me duché.", "Each reflexive verb needs its own pronoun, even after no: no me duché.", ["Ayer me levanté tarde y no me bañé."], "Correct the sentence."),
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
        [
          "Remember the rule: reflexive pronouns follow the same placement rule as lo / le: before the conjugated verb or attached to the infinitive / gerund, never both. Me voy a duchar = Voy a ducharme. Te estás peinando = Estás peinándote.",
          "The trap: the dictionary form ends in -se, but that se is only a placeholder. Once attached, it must match the subject: ✗ Voy a ducharse → Voy a ducharme.",
        ],
        [
          ["Tengo que levantarme a las seis.", "I have to get up at six."],
          ["Nos estamos preparando.", "We're getting ready."],
        ],
        [
          mc(
            "Which is wrong?",
            ["Quiero acostarse temprano.", "Quiero acostarme temprano.", "Me quiero acostar temprano.", "Me acuesto temprano."],
            0,
            "The reflexive pronoun matches the subject: yo → me, so \"Quiero acostarse\" is wrong. The other three are correct."
          ),
        ]
      ),
    ],
    [
      toEs("Me voy a vestir.", "Voy a vestirme.", "The reflexive pronoun can attach to the infinitive: vestirme. It still matches yo.", [], "Rewrite it with the pronoun attached."),
      toEs("Te tienes que relajar.", "Tienes que relajarte.", "With tú, the pronoun is te, attached to the infinitive: relajarte.", [], "Rewrite it with the pronoun attached."),
      fb("Move before.", "Vamos a sentarnos aquí. → ___ vamos a sentar aquí.", "Nos", "The pronoun can go before the conjugated verb: nos vamos a sentar."),
      fb("Match the person.", "Mis padres quieren ___ en la costa. (relajarse)", "relajarse", "Ellos → se, attached to the infinitive: relajarse."),
      fb("Match the person.", "Tú necesitas ___ más temprano. (acostarse)", "acostarte", "Tú → te."),
      mc(
        "«Estoy ___ para la fiesta.» (arreglarse)",
        ["arreglándome", "arreglándose", "arreglandome se", "me arreglando"],
        0,
        "The pronoun attaches to the gerund (with an accent), and yo takes me: arreglándome. \"Arreglándose\" is él/ella, \"arreglandome se\" doubles pronouns, and \"me arreglando\" puts the pronoun between estoy and the gerund (it can go before estoy instead: me estoy arreglando)."
      ),
      toEs("I have to get up early tomorrow.", "Tengo que levantarme temprano mañana.", "Tener que + a reflexive infinitive with yo: levantarme.", ["Mañana tengo que levantarme temprano.", "Me tengo que levantar temprano mañana."]),
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
        [
          "Remember the rule: with these verbs se doesn't mean \"myself\"; it shifts the meaning, usually toward a change in the subject itself. Ir (go somewhere) / irse (leave: you remove yourself). Dormir (sleep) / dormirse (fall asleep: the change into sleep). Quedar (meet up, be located) / quedarse (stay). Llamar (call) / llamarse (be named). Poner (put) / ponerse (put on; become: ponerse nervioso).",
          "So decide by meaning, not by English: \"left\" → irse, \"got / became\" + feeling → ponerse, \"stayed\" → quedarse.",
        ],
        [
          ["Me voy. Nos vemos mañana.", "I'm leaving. See you tomorrow."],
          ["Me dormí en clase.", "I fell asleep in class."],
        ],
        [
          mc(
            "«Me quedé en casa» means…",
            ["I stayed at home.", "I met at home.", "I left home.", "I called home."],
            0,
            "Quedarse means to stay: me quedé en casa. It doesn't mean met (quedé con), left (me fui) or called (llamé)."
          ),
          mc(
            "\"My sister got nervous before the interview.\"",
            ["Mi hermana se puso nerviosa antes de la entrevista.", "Mi hermana puso nerviosa antes de la entrevista.", "Mi hermana se fue nerviosa antes de la entrevista.", "Mi hermana se quedó nerviosa a la entrevista."],
            0,
            "A sudden change of mood is ponerse + adjective: se puso nerviosa. Without se, puso means put; irse means leave, and quedarse would mean she stayed nervous."
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
        "Quedar means to be located: ¿Dónde queda el museo? \"Se queda\" means stays, \"quedas\" is tú, and \"me queda\" means I have left or it fits me."
      ),
      toEs("Fuimos temprano porque estábamos cansados.", "Nos fuimos temprano porque estábamos cansados.", "Without a destination, \"went\" means \"left\": irse, so nos fuimos. The reason stays in the imperfect (estábamos cansados).", ["Nos fuimos pronto porque estábamos cansados.", "Nos fuimos temprano porque estábamos cansadas."], "Correct the sentence."),
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
        "Remember the rule: the reflexive pronoun matches you (me levanto), and after antes de or después de the infinitive carries it on the end (antes de ducharme). Sequence words: primero, luego, después, mientras, antes de + infinitive, después de + infinitive. With a reflexive infinitive the pronoun matches you: antes de ducharme, después de vestirme.",
        [
          ["Después de ducharme, me visto y desayuno.", "After showering, I get dressed and have breakfast."],
          ["Antes de salir, me miro en el espejo.", "Before going out, I look at myself in the mirror."],
        ],
        [
          mc(
            "«Antes de ___, apago las luces.» (acostarse, yo)",
            ["acostarme", "acostarse", "me acostar", "acuesto"],
            0,
            "After antes de, use the infinitive with the pronoun matching yo: acostarme. \"Acostarse\" is for él/ellos, \"me acostar\" puts the pronoun before the infinitive, and \"acuesto\" is conjugated."
          ),
        ]
      ),
    ],
    [
      toEs("First I wake up and stay in bed five minutes.", "Primero me despierto y me quedo en la cama cinco minutos.", "Despertarse and quedarse are both reflexive: me despierto, me quedo.", ["Primero me despierto y me quedo cinco minutos en la cama."]),
      toEs("Then I get up and have a shower.", "Luego me levanto y me ducho.", "Levantarse and ducharse are both reflexive: me levanto, me ducho.", ["Después me levanto y me ducho.", "Luego me levanto y me baño."]),
      toEs("After getting dressed, I have breakfast.", "Después de vestirme, desayuno.", "After a preposition like después de, use the infinitive with the pronoun attached: vestirme.", []),
      toEs("I brush my teeth before leaving.", "Me cepillo los dientes antes de salir.", "Cepillarse los dientes (article, not possessive), and antes de + infinitive: antes de salir.", ["Me lavo los dientes antes de salir."]),
      fb("Complete.", "Mientras desayuno, ___ las noticias. (leer)", "leo", "Not reflexive."),
      fb("Complete.", "Mi pareja ___ más tarde que yo. (levantarse)", "se levanta", "Él/ella → se."),
      wo("A las ocho me pongo el abrigo y me voy al trabajo.", "Ponerse + irse.", "At eight I put on my coat and leave for work."),
      toEn("Los fines de semana no me pongo el despertador.", "On weekends I don't set the alarm.", "Ponerse el despertador means to set the alarm for yourself.", ["At the weekend I don't set my alarm.", "On weekends I don't set an alarm."]),
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
        "Remember the rule: a reflexive verb always carries a pronoun that matches the subject, also on an infinitive (voy a acostarme), and body parts take the article (el pelo), not a possessive. ✗ Yo levanto a las seis (→ me levanto). ✗ Nosotros se duchamos (→ nos duchamos). ✗ Ella se lava su pelo (→ se lava el pelo). ✗ Voy a acostarse (→ acostarme). Note: «Hola, compi: yo levanto a las seis, así que nosotros se duchamos por turnos, ¿vale?»",
        [
          ["Me levanto a las seis.", "I get up at six."],
          ["Nos duchamos por turnos.", "We take turns showering."],
        ],
        [
          fb("Fix it.", "Los sábados yo ___ tarde. (the note says: acuesto)", "me acuesto", "Acostarse needs its pronoun: yo me acuesto. Without me, acuesto means you put someone else to bed."),
        ]
      ),
    ],
    [
      fb("Fix it.", "Nosotros ___ en el salón. (the note says: se sentamos)", "nos sentamos", "Nosotros takes the reflexive pronoun nos: nos sentamos. Se is for él, ellos or usted."),
      fb("Fix it.", "Mi novia se lava ___ pelo por la noche. (the note says: su)", "el", "With reflexive verbs and body parts, use the article: se lava el pelo, not su pelo."),
      fb("Fix it.", "Voy a ___ temprano hoy. (the note says: acostarse)", "acostarme", "The reflexive pronoun matches yo: acostarme, not acostarse."),
      fb("Fix it.", "¿Tú ___ con el despertador? (the note says: despiertas)", "te despiertas", "Despertarse needs its pronoun: tú te despiertas."),
      fb("Fix it.", "Mis padres ___ los domingos. (the note says: relajan)", "se relajan", "Relajarse needs its pronoun: ellos se relajan."),
      mc(
        "Which sentence is correct?",
        ["Me pongo los zapatos en la puerta.", "Pongo me los zapatos.", "Me pongo mis zapatos míos.", "Se pongo los zapatos."],
        0,
        "Reflexive pronoun before the verb + article: me pongo los zapatos. \"Pongo me\" puts it after, \"mis zapatos míos\" doubles the possessive, and \"Se pongo\" mismatches the person."
      ),
      toEs("My brother always falls asleep on the sofa.", "Mi hermano siempre se duerme en el sofá.", "Dormirse means to fall asleep: se duerme (o → ue).", ["Mi hermano siempre se queda dormido en el sofá."]),
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
        "Remember the rule: pick the tense for the time frame (present, imperfect habit, preterite event, ir a + infinitive); the reflexive pronoun stays the same in all of them. Now: Me acuesto a las once. Childhood habit: De niño me acostaba a las nueve. One night: Anoche me acosté a la una. Future plan: Mañana me voy a acostar pronto.",
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
      { ...fb("Plan.", "Mañana ___ temprano. (ir a levantarse, yo)", "me voy a levantar", "Ir a + infinitive."), altAnswers: ["voy a levantarme"] },
      fb("Habit.", "Mis abuelos siempre ___ la siesta. (echarse)", "se echaban", "Imperfect habit."),
      fb("One event.", "Ese día nos ___ muy tarde. (despertarse)", "despertamos", "Preterite nosotros."),
      mc(
        "«Cuando ___ el teléfono, yo ___.» (sonar / ducharse)",
        ["sonó / me duchaba", "sonaba / me duché", "sonó / me duché", "suena / me duchaba"],
        0,
        "The phone ringing interrupts (sonó), and the shower was in progress (me duchaba). The wrong pairs make the shower a completed event or the ring ongoing, or use the present suena."
      ),
      toEs("When I was young I used to get up at five.", "Cuando era joven me levantaba a las cinco.", "A past habit takes the imperfect: me levantaba.", ["De joven me levantaba a las cinco."]),
      toEn("Ayer no me puse el reloj y llegué tarde.", "Yesterday I didn't put on my watch and I arrived late.", "Ponerse el reloj means to put on your watch; no me puse and llegué are preterite events.", ["Yesterday I didn't put my watch on and I was late."]),
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
        "Remember the rule: with a plural subject, nos, os or se can mean each other, and the pronoun still matches the subject (mi hermano y yo → nos). With plural subjects, nos/os/se can mean «each other»: Nos llamamos todos los días (we call each other). Se conocieron en 2010 (they met each other). Se escriben cartas (they write to each other).",
        [
          ["Mi hermana y yo nos vemos los domingos.", "My sister and I see each other on Sundays."],
          ["Se conocieron en la universidad.", "They met at university."],
        ],
        [
          mc(
            "«Nos escribimos mucho» means…",
            ["We write to each other a lot.", "We write ourselves a lot.", "They write to us.", "We wrote a lot."],
            0,
            "Nos escribimos is reciprocal: we write to each other. It isn't to ourselves, \"they write to us\" would be nos escriben, and \"we wrote\" is past."
          ),
        ]
      ),
    ],
    [
      fb("Complete.", "Ana y Luis ___ en una fiesta. (conocerse, preterite)", "se conocieron", "Met each other."),
      fb("Complete.", "Mi mejor amiga y yo ___ todos los días. (llamarse)", "nos llamamos", "Call each other."),
      { ...fb("Complete.", "Los dos hermanos no ___ desde hace años. (hablarse)", "se hablan", "Talk to each other."), altAnswers: ["se han hablado"] },
      fb("Complete.", "Nosotros ___ en la estación a las cinco. (verse, preterite)", "nos vimos", "Saw each other / met."),
      fb("Complete.", "¿Vosotros ___ mensajes a menudo? (escribirse)", "os escribís", "Vosotros → os."),
      mc(
        "«Se abrazaron en el aeropuerto» means…",
        ["They hugged each other at the airport.", "They hugged themselves.", "Someone hugged them.", "They will hug."],
        0,
        "Se abrazaron is reciprocal: they hugged each other. It isn't hugging themselves, being hugged by someone else, or future."
      ),
      toEs("We met in Madrid in 2019.", "Nos conocimos en Madrid en 2019.", "Conocerse in the preterite is reciprocal: nos conocimos = we met (each other).", []),
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
        "Remember the rule: a reflexive pronoun only when the action falls back on the subject. Does the action fall on the subject (or each other)? → pronoun matching the subject. Does it fall on someone or something else? → no reflexive pronoun.",
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
        "Mis vecinos y yo = nosotros, so nos llevamos. \"Se llevan\" is ellos, \"llevamos\" drops the reflexive nos (llevarse bien needs it), and \"nos llevan\" means they take us."
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
        [
          "Remember the rule: Spanish never adds -er to a word; it puts más / menos in front and que after: más / menos + adjective / adverb / noun + que. The adjective agrees with the first noun as usual: Mis casas son más grandes que la tuya.",
          "One exception to que: before a number, más de / menos de (más de cien personas), because you're stating an amount, not comparing two things.",
        ],
        [
          ["Madrid es más grande que Toledo.", "Madrid is bigger than Toledo."],
          ["Este móvil es menos caro que ese.", "This phone is less expensive than that one."],
        ],
        [
          fb("Compare.", "El tren es ___ rápido que el autobús. (more)", "más", "Más… que."),
          mc(
            "\"My suitcases are heavier than yours.\" (pesado)",
            ["Mis maletas son más pesadas que las tuyas.", "Mis maletas son más pesado que las tuyas.", "Mis maletas son pesadísimas que las tuyas.", "Mis maletas son más pesadas de las tuyas."],
            0,
            "Más + adjective + que, with the adjective agreeing with maletas: pesadas. -ísimas means very (not comparing), and de is only for numbers."
          ),
        ]
      ),
    ],
    [
      fb("Compare.", "Mi hermana es más alta ___ yo.", "que", "Unequal comparisons use más... que: más alta que yo."),
      fb("Compare.", "Las naranjas son ___ caras que las fresas. (less)", "menos", "Menos… que."),
      fb("Compare.", "Tengo más ___ veinte primos. (number)", "de", "Más de + number."),
      fb("Compare.", "Esta calle es más ___ que la otra. (tranquilo)", "tranquila", "Agrees with calle: the comparison doesn't stop the adjective from agreeing."),
      mc(
        "«Luis trabaja ___ horas que yo.»",
        ["más", "más de", "tanto", "mejor"],
        0,
        "Más + noun + que: más horas que yo. \"Más de\" is only for numbers, \"tanto\" is for equality with como, and \"mejor\" means better."
      ),
      ms(
        "Which sentences are correct?",
        ["Hay más de cien personas.", "Hay más que cien personas.", "Ana es menos tímida que Eva.", "Ana es más tímido que Eva."],
        [0, 2],
        "Before a number use más de: más de cien personas, so \"más que cien\" is wrong. \"Menos tímida\" agrees with Ana, but \"más tímido\" doesn't."
      ),
      toEs("Mi ciudad es más grande que la tuya.", "Mi ciudad es más pequeña que la tuya.", "Only the adjective flips: grande → pequeña, agreeing with ciudad (feminine). Más ... que stays.", ["Mi ciudad es menos grande que la tuya."], "Change it to the opposite (smaller)."),
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
        [
          "Remember the rule: equality always ends in como; what goes before depends on the next word. Tan + adjective / adverb (tan alto como): it describes a quality, so it never changes. Tanto / tanta / tantos / tantas + noun (tantos libros como): it counts the noun, so it agrees with it. Verb + tanto como (estudio tanto como tú): no noun to agree with, so plain tanto.",
          "So look right: adjective → tan, noun → match its gender and number, nothing (a verb before) → tanto.",
        ],
        [
          ["Mi hermano es tan alto como mi padre.", "My brother is as tall as my father."],
          ["No tengo tanto tiempo como tú.", "I don't have as much time as you."],
        ],
        [
          fb("Complete.", "Ella tiene ___ amigas como yo.", "tantas", "Amigas is feminine plural, so tantas."),
          mc(
            "\"My son eats as much as an adult.\"",
            ["Mi hijo come tanto como un adulto.", "Mi hijo come tan como un adulto.", "Mi hijo come tanta como un adulto.", "Mi hijo come tanto que un adulto."],
            0,
            "After a verb with no noun, it's plain tanto como. Tan needs an adjective after it, tanta would need a feminine noun, and equality takes como, not que."
          ),
        ]
      ),
    ],
    [
      fb("Complete.", "Este hotel es ___ caro como el otro.", "tan", "Before an adjective, equality uses tan...como: tan caro como."),
      fb("Complete.", "Hay ___ gente como ayer.", "tanta", "Before a noun, tanto agrees with it: gente is feminine singular, so tanta."),
      fb("Complete.", "Tengo ___ problemas como tú.", "tantos", "Before a noun, tanto agrees with it: problemas is masculine plural, so tantos."),
      fb("Complete.", "Mi abuela camina ___ rápido como yo.", "tan", "Before an adverb (rápido), equality uses tan...como."),
      fb("Complete.", "Duermo ___ como mi gato.", "tanto", "After a verb, equality uses tanto como (it doesn't change): duermo tanto como mi gato."),
      mc(
        "«No hay ___ coches como en la capital.»",
        ["tantos", "tan", "tantas", "tanto"],
        0,
        "Coches is masculine plural, so tantos. \"Tan\" is for adjectives, \"tantas\" is feminine, and \"tanto\" is singular."
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
      toEs("No tengo tan dinero como mi hermano.", "No tengo tanto dinero como mi hermano.", "Before a noun, tanto agrees with it: dinero is masculine singular, so tanto dinero como. Tan is only for adjectives and adverbs.", [], "Correct the sentence."),
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
        [
          "Remember the rule: four comparatives are one word that already includes \"more\": bueno / bien → mejor, malo / mal → peor, and for age mayor (older), menor (younger). That's why ✗ más mejor is wrong: it says \"more more good\".",
          "They agree only in number: mejores, peores, mayores, menores. And mayor / menor are for age; for physical size, más grande / más pequeño is normal.",
        ],
        [
          ["Mi hermano mayor cocina mejor que yo.", "My older brother cooks better than me."],
          ["Estas notas son peores que las del año pasado.", "These grades are worse than last year's."],
        ],
        [
          mc(
            "«Mi hermana tiene 20 años y yo 25. Ella es ___ que yo.»",
            ["menor", "mayor", "más pequeña de edad", "peor"],
            0,
            "She's 20 and you're 25, so she's younger: menor. \"Mayor\" means older, \"más pequeña de edad\" isn't how Spanish says it, and \"peor\" means worse."
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
        "Mejor is already a comparative, so \"más mejor\" is always wrong. \"Mejor\", \"peor\" and \"mayor\" used alone are correct."
      ),
      mc(
        "«Canta ___ que su madre.» (well)",
        ["mejor", "más bueno", "más bien", "bueno"],
        0,
        "Canta is a verb, so the adverb bien is compared: mejor. \"Más bueno\" and \"bueno\" are adjective forms, and \"más bien\" means rather."
      ),
      toEs("My younger sister speaks English better than me.", "Mi hermana menor habla inglés mejor que yo.", "Menor means younger, and the comparative of bien is mejor: habla mejor que yo.", ["Mi hermana pequeña habla inglés mejor que yo."]),
      toEs("La película fue mejor que el libro.", "La película fue peor que el libro.", "The opposite of mejor is peor, also a one-word comparative: no más.", [], "Change it to the opposite (worse)."),
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
        "Remember the rule: a superlative picks the top (or bottom) of a group, and the group is always introduced with de. el/la/los/las + (noun) + más/menos + adjective + de + group: Es la ciudad más bonita de España. Irregular: el mejor, la peor, los mayores. Note de, not en: ✗ en la clase → de la clase.",
        [
          ["Es el restaurante más caro de la ciudad.", "It's the most expensive restaurant in the city."],
          ["Es la mejor película del año.", "It's the best movie of the year."],
        ],
        [
          fb("Complete.", "Es el río más largo ___ Europa.", "de", "The superlative group takes de: el río más largo de Europa."),
        ]
      ),
    ],
    [
      fb("Build.", "Ana es la alumna más ___ de la clase. (trabajador)", "trabajadora", "Agreement."),
      fb("Build.", "Estos son los ___ zapatos de la tienda. (bueno)", "mejores", "Irregular plural."),
      fb("Build.", "Fue el ___ día de mi vida. (malo)", "peor", "Irregular superlative."),
      fb("Build.", "Es la ciudad ___ poblada del país.", "más", "The superlative is el/la + noun + más + adjective + de: la ciudad más poblada."),
      fb("Build.", "Mi abuelo es el ___ de la familia. (age)", "mayor", "Oldest."),
      mc(
        "«Es el edificio más alto ___ mundo.»",
        ["del", "en el", "que el", "de el"],
        0,
        "The superlative group takes de, and de + el contracts: del mundo. \"En el\" is not standard here, \"que el\" is for comparisons, and \"de el\" must contract."
      ),
      toEs("It's the most beautiful beach on the island.", "Es la playa más bonita de la isla.", "The superlative group takes de: la playa más bonita de la isla (not en).", ["Es la playa más hermosa de la isla.", "Es la playa más linda de la isla."]),
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
        "Remember the rule: -ísimo says very without comparing; más/menos ... que compares two things. -ísimo means «very, extremely» without comparing: caro → carísimo, fácil → facilísimo, rico → riquísimo (c → qu), largo → larguísimo (g → gu). It agrees: casas carísimas.",
        [
          ["La comida está riquísima.", "The food is absolutely delicious."],
          ["El examen fue facilísimo.", "The exam was super easy."],
        ],
        [
          fb("Give the -ísimo form of the adjective.", "Este café está ___. (bueno)", "buenísimo", "Bueno + -ísimo → buenísimo (very good)."),
        ]
      ),
    ],
    [
      fb("-ísimo.", "La película es ___. (largo)", "larguísima", "g → gu; agrees."),
      fb("-ísimo.", "Estos pasteles están ___. (rico)", "riquísimos", "c → qu; plural."),
      fb("-ísimo.", "Mi abuela es ___. (simpático)", "simpatiquísima", "c → qu; feminine."),
      fb("Comparison.", "El metro es ___ rápido que el autobús.", "más", "Unequal comparison: más rápido que."),
      fb("Comparison.", "Este piso es tan grande ___ el tuyo.", "como", "Equality with an adjective: tan grande como."),
      fb("Superlative.", "Es la plaza más famosa ___ la ciudad.", "de", "The superlative group takes de: la plaza más famosa de la ciudad."),
      mc(
        "«Hacía un calor ___.»",
        ["fortísimo", "más fuerte que", "tan fuerte", "fortísima"],
        0,
        "Calor is masculine, so fortísimo agrees with it. \"Más fuerte que\" needs a comparison, \"tan fuerte\" needs como, and \"fortísima\" is feminine."
      ),
      toEs("The hotel was very, very expensive.", "El hotel era carísimo.", "-Ísimo means very, very: caro → carísimo.", ["El hotel fue carísimo.", "El hotel era muy, muy caro.", "El hotel fue muy, muy caro."]),
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
        "Remember the rule: mejor and peor never take más; más/menos de goes before a number; tan pairs with como; a superlative takes de. «Este móvil es ✗ más mejor que el anterior (→ mejor). La batería es ✗ tan buena que la del otro modelo (→ como). Cuesta ✗ más que 500 euros (→ más de). La pantalla es ✗ la más grande en el mercado (→ del mercado).»",
        [
          ["Es mejor que el anterior.", "It's better than the previous one."],
          ["Cuesta más de 500 euros.", "It costs more than 500 euros."],
        ],
        [
          fb("Fix it.", "Este móvil es ___ que el anterior. (the review says: más mejor)", "mejor", "Mejor is already a comparative, so it never takes más."),
        ]
      ),
    ],
    [
      fb("Fix it.", "La batería es tan buena ___ la del otro modelo. (the review says: que)", "como", "Equality uses tan... como, not tan... que."),
      fb("Fix it.", "La garantía dura más ___ dos años. (the review says: que)", "de", "Before a number, use más de, not más que: más de dos años."),
      fb("Fix it.", "La pantalla es la más grande ___ mercado. (the review says: en el)", "del", "The superlative group takes de, contracted with el: del mercado, not en el."),
      fb("Fix it.", "Las fotos son ___ que antes. (the review says: más mejores)", "mejores", "Mejores is already a comparative, so it never takes más: son mejores que antes."),
      fb("Fix it.", "Tiene ___ aplicaciones como mi tableta. (the review says: tantos)", "tantas", "Tanto agrees with the noun: aplicaciones is feminine plural, so tantas."),
      mc(
        "Which sentence is correct?",
        ["Es el peor móvil de la tienda.", "Es el más peor móvil.", "Es peor de todos.", "Es tan peor como."],
        0,
        "Peor is already a comparative; for the superlative add the article: el peor móvil de la tienda. \"Más peor\" doubles it, \"peor de todos\" is missing el, and \"tan peor\" is never used."
      ),
      toEs("It is better than the old one and cheaper.", "Es mejor que el antiguo y más barato.", "Bueno → mejor (irregular), barato → más barato (regular).", ["Es mejor que el viejo y más barato."]),
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
        [
          "Remember the rule: the future doesn't cut the infinitive. Keep all of it and add -é, -ás, -á, -emos, -éis, -án, the same for -ar, -er and -ir: trabajaré, aprenderás, escribirá.",
          "Because the stem is the infinitive, present-tense stem changes never show up: dormir → dormiremos (not duermiremos), pedir → pedirá. All forms except nosotros carry a written accent.",
        ],
        [
          ["El año que viene viviremos en Barcelona.", "Next year we'll live in Barcelona."],
          ["Mañana te llamaré.", "I'll call you tomorrow."],
        ],
        [
          fb("Complete.", "Mañana ___ a mi abuela. (visitar, yo)", "visitaré", "Infinitive + -é."),
          mc(
            "Pedir is e → i in the present (pido). \"She will order the soup.\"",
            ["Pedirá la sopa.", "Pidirá la sopa.", "Pide la sopa.", "Pedrá la sopa."],
            0,
            "The future is built on the whole infinitive, so no stem change: pedir + -á = pedirá. Pide is present, and pedrá drops part of the infinitive."
          ),
        ]
      ),
    ],
    [
      fb("Complete.", "¿___ tú en la reunión? (estar)", "Estarás", "Infinitive + -ás."),
      fb("Complete.", "Mi jefe ___ la decisión el lunes. (tomar)", "tomará", "Infinitive + -á."),
      fb("Complete.", "Nosotros ___ en un hotel. (dormir)", "dormiremos", "No stem change in the future."),
      fb("Complete.", "Ellos ___ el tren de las ocho. (coger)", "cogerán", "Infinitive + -án. Coger (to catch, to take) is everyday Spanish in Spain, but in Mexico, Argentina and much of Latin America it's vulgar; there, say tomar or agarrar: tomarán el tren."),
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
      toEs("El verano pasado viajamos a Argentina.", "El verano que viene viajaremos a Argentina.", "The future for nosotros adds -emos to the infinitive: viajaremos. The time phrase moves forward too.", ["El próximo verano viajaremos a Argentina."], "Change it to next summer (simple future)."),
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
        [
          "Remember the rule: irregular futures change only the stem; the endings (-é, -ás, -á, -emos, -éis, -án) never change. And the stem always ends in r, like an infinitive.",
          "Three groups: drop the vowel (poder → podr-, querer → querr-, saber → sabr-, haber → habr-); swap the vowel for d (tener → tendr-, poner → pondr-, salir → saldr-, venir → vendr-); new short stems (hacer → har-, decir → dir-). Compound verbs follow their base: mantener → mantendr-, deshacer → deshar-.",
        ],
        [
          ["Tendré tiempo el viernes.", "I'll have time on Friday."],
          ["¿Qué harás mañana?", "What will you do tomorrow?"],
        ],
        [
          mc(
            "Future stem of salir:",
            ["saldr-", "salir-", "sald-", "salr-"],
            0,
            "Salir drops the vowel of -ir and inserts d: saldr-. \"Salir-\" treats it as regular, \"sald-\" is missing the r, and \"salr-\" is missing the d."
          ),
          mc(
            "Proponer (to propose) is built on poner. \"I'll propose a new plan.\"",
            ["Propondré un plan nuevo.", "Proponeré un plan nuevo.", "Propodré un plan nuevo.", "Proponré un plan nuevo."],
            0,
            "Compounds follow their base verb: poner → pondr-, so proponer → propondr- + -é. The other options keep the vowel, lose the n, or skip the d."
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
        "Sabremos and tendrá are correct. \"Hacerá\" should be hará (stem har-), and \"quertré\" should be querré (stem querr-)."
      ),
      toEs("Mañana no teneré tiempo.", "Mañana no tendré tiempo.", "Tener has the future stem tendr- (vowel → d), and yo adds -é: tendré.", ["No tendré tiempo mañana."], "Correct the sentence."),
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
        [
          "Remember the rule: both point forward, but they feel different. Ir a + infinitive connects the future to now: a plan you've already decided, often soon (Esta tarde voy a estudiar). The simple future feels more detached: predictions, forecasts, promises, distant or formal plans (Algún día seré médica; Te lo prometo: no llegaré tarde).",
          "In everyday speech, especially in Latin America, ir a is far more common, and both often work. Switching is mechanical: voy a llamar ↔ llamaré.",
        ],
        [
          ["Esta noche voy a cocinar pasta.", "Tonight I'm going to cook pasta."],
          ["Mañana lloverá en el norte.", "Tomorrow it will rain in the north."],
        ],
        [
          mc(
            "A weather forecast most typically says…",
            ["Mañana hará sol en todo el país.", "Mañana va a ir a hacer sol.", "Mañana hacía sol.", "Mañana hizo sol."],
            0,
            "Weather forecasts use the simple future: hará sol. \"Va a ir a hacer\" doubles ir a, and \"hacía\" and \"hizo\" are past."
          ),
        ]
      ),
    ],
    [
      fb("Switch to the simple future.", "Voy a llamarte mañana. → Te ___ mañana.", "llamaré", "Ir a llamar becomes the simple future llamaré (llamar + -é)."),
      fb("Switch to the simple future.", "Vamos a salir a las seis. → ___ a las seis.", "Saldremos", "Salir has the irregular future stem saldr-, and nosotros adds -emos: saldremos."),
      fb("Switch to ir a.", "Haré la compra luego. → ___ a hacer la compra luego.", "Voy", "The near future is ir a + infinitive; yo takes voy: voy a hacer."),
      fb("Switch to ir a.", "Mis primos vendrán en julio. → Mis primos ___ a venir en julio.", "van", "Mis primos = ellos, so ir a + infinitive with van: van a venir."),
      mc(
        "Which sentence correctly makes a promise to a friend?",
        ["Te prometo que nunca lo olvidaré.", "Te prometo que nunca lo olvidaba.", "Te prometo que nunca lo olvidé.", "Te prometo que nunca lo olvido ayer."],
        0,
        "A promise points to the future: olvidaré. \"Olvidaba\" is imperfect, \"olvidé\" is preterite, and \"olvido ayer\" is present with a past time word."
      ),
      toEs("One day I will speak Spanish perfectly.", "Algún día hablaré español perfectamente.", "Long-term goals often use the simple future: hablaré.", ["Algún día hablaré español a la perfección."]),
      toEs("Esta tarde veremos a mis suegros.", "Esta tarde vamos a ver a mis suegros.", "Ir a + infinitive for a decided plan this afternoon: vamos a ver. The personal a before mis suegros stays.", [], "Change it to ir a + infinitive."),
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
        [
          "Remember the rule: when you don't know something about the present and you guess, put the verb in the simple future. ¿Qué hora será? = I wonder what time it is. Serán las cinco = It's probably five. Tendrá unos cuarenta años = He must be about forty.",
          "Why it works: the future is the tense of things not yet confirmed. A guess about now is also unconfirmed, so Spanish borrows the same form. The present states a fact (está en casa); the future marks it as your guess (estará en casa). Time words like ahora or hoy show it's about now, not tomorrow.",
        ],
        [
          ["—¿Quién llama? —Será el cartero.", "Who's ringing? — It's probably the mailman."],
          ["Estará cansado, trabajó todo el día.", "He must be tired. He worked all day."],
        ],
        [
          mc(
            "«¿Dónde estará mi móvil?» means…",
            ["I wonder where my phone is.", "Where will my phone be tomorrow?", "Where was my phone?", "My phone will be here."],
            0,
            "The future of probability expresses wondering: I wonder where my phone is. It's not about tomorrow, the past or a statement."
          ),
          mc(
            "Your friend's eyes are red and she's yawning. Guess: \"She must be sleepy.\"",
            ["Tendrá sueño.", "Tiene sueño.", "Tendría sueño mañana.", "Tuvo sueño."],
            0,
            "You're guessing about now, so use the future: tendrá sueño. Tiene sueño states it as a known fact, and tuvo is past."
          ),
        ]
      ),
    ],
    [
      mc(
        "«Tendrá unos treinta años» means…",
        ["She's probably about thirty.", "She will be thirty.", "She was thirty.", "She wants to be thirty."],
        0,
        "The future can express a guess about now: tendrá unos treinta años = she's probably about thirty. It's not about her future age, her past or what she wants."
      ),
      fb("Guess.", "Mi hermano no contesta. ___ en el gimnasio. (estar)", "Estará", "Probability → future."),
      fb("Guess.", "¿Qué hora ___? — No sé, las diez más o menos. (ser)", "será", "I wonder…"),
      fb("Guess.", "Hay mucha gente: ___ un concierto. (haber)", "habrá", "Haber → habrá."),
      fb("Guess.", "Mi vecino siempre viaja: ___ mucho dinero. (tener)", "tendrá", "Tendr- + -á."),
      ms(
        "Which sentences express a guess about the present?",
        ["Serán las ocho.", "Estará en casa.", "Mañana iré al médico.", "¿Quién será?"],
        [0, 1, 3],
        "Serán las ocho, estará en casa and ¿Quién será? are guesses about the present. \"Mañana iré al médico\" is a real future plan."
      ),
      toEs("Seguro que es mi madre.", "Será mi madre.", "Turning a certain statement into a guess: es → será (the future of ser).", ["Será mi mamá."], "Change it to a guess with the future."),
      mc(
        "«¿Cuántos años tendrá ese profesor?» What is the speaker doing?",
        ["Wondering how old the teacher is now", "Asking how old he'll be next year", "Asking how old he was", "Saying the teacher's exact age"],
        0,
        "Tendrá in a question about the present = I wonder. It isn't about next year (that would need a time word like el año que viene), and it isn't a known fact."
      ),
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
        "Remember the rule: a time frame (dentro de, el año que viene, algún día) + the simple future; the endings never change, only some stems do. Useful frames: Dentro de cinco años… · El año que viene… · Algún día… Then a future verb: Viviré…, Trabajaré…, Tendré…, Podré…",
        [
          ["Dentro de cinco años viviré en otra ciudad.", "In five years I'll live in another city."],
          ["Algún día tendré mi propia empresa.", "Someday I'll have my own company."],
        ],
        [
          mc(
            "«Dentro de cinco años» means…",
            ["in five years' time", "five years ago", "for five years", "every five years"],
            0,
            "Dentro de + time means in that much time from now. \"Five years ago\" is hace cinco años, \"for five years\" is durante cinco años, and \"every five years\" is cada cinco años."
          ),
        ]
      ),
    ],
    [
      toEs("In five years I will work abroad.", "Dentro de cinco años trabajaré en el extranjero.", "Trabajar is regular in the future: trabajaré. Dentro de cinco años = in five years' time.", ["Dentro de cinco años trabajaré fuera del país."]),
      toEs("I will have a bigger house.", "Tendré una casa más grande.", "Tener has the future stem tendr-: tendré, with más grande for bigger.", ["Tendré una casa más grande que ahora."]),
      toEs("I will be able to travel more.", "Podré viajar más.", "Poder has the future stem podr-: podré viajar.", []),
      toEs("My parents will come to visit me.", "Mis padres vendrán a visitarme.", "Venir has the future stem vendr-: vendrán, and the pronoun attaches to the infinitive: visitarme.", ["Mis padres me vendrán a visitar."]),
      fb("Complete.", "Algún día ___ un libro. (escribir, yo)", "escribiré", "Regular future."),
      fb("Complete.", "Te prometo que ___ español todos los días. (practicar, yo)", "practicaré", "Promise → future."),
      wo("El año que viene haremos un viaje a Japón.", "Hacer un viaje = take a trip; hacer has the future stem har-, so nosotros → haremos.", "Next year we'll take a trip to Japan."),
      toEn("No sé qué haré, pero seré feliz.", "I don't know what I'll do, but I'll be happy.", "Haré is hacer's future (stem har-), and seré is regular ser.", ["I don't know what I will do, but I will be happy."]),
    ]
  ),
  L(
    "future-tense-drill-3",
    "a2d-fix-paragraph-future",
    "Fix the Paragraph: Future Forms",
    "A horoscope with regularized irregular futures (tenerás, hacerás, salirás, decirán). Fix them all.",
    "6 min",
    [
      sec(
        "The horoscope",
        "Remember the rule: irregular verbs change only the stem (tendr-, saldr-, har-, dir-, valdr-, habr-); the endings stay the same, and habrá never goes plural. «Esta semana ✗ tenerás (→ tendrás) buenas noticias. ✗ Salirás (→ saldrás) con alguien especial y ✗ hacerás (→ harás) un viaje corto. Tus amigos te ✗ decirán (→ dirán) algo importante.»",
        [
          ["Tendrás buenas noticias.", "You'll have good news."],
          ["Harás un viaje corto.", "You'll take a short trip."],
        ],
        [
          fb("Fix it.", "Esta semana ___ buenas noticias. (the horoscope says: tenerás)", "tendrás", "Tener has the future stem tendr-: tendrás, not tenerás."),
        ]
      ),
    ],
    [
      fb("Fix it.", "___ con alguien especial. (the horoscope says: Salirás)", "Saldrás", "Salir has the future stem saldr-: saldrás, not salirás."),
      fb("Fix it.", "El domingo ___ una cena para tus amigos. (the horoscope says: hacerás)", "harás", "Hacer has the future stem har-: harás, not hacerás."),
      fb("Fix it.", "Tus amigos te ___ algo importante. (the horoscope says: decirán)", "dirán", "Decir has the future stem dir-: dirán, not decirán."),
      fb("Fix it.", "No ___ problemas de dinero. (the horoscope says: haberá)", "habrá", "Haber has the future stem habr-: habrá, not haberá."),
      fb("Fix it.", "Por fin ___ la verdad. (the horoscope says: saberás)", "sabrás", "Saber has the future stem sabr-: sabrás, not saberás."),
      mc(
        "Which sentence is correct?",
        ["Tus compañeros vendrán a verte.", "Tus compañeros venirán a verte.", "Tus compañeros vendrían ayer.", "Tus compañeros vendán a verte."],
        0,
        "Venir has the future stem vendr-: vendrán. \"Venirán\" treats it as regular, \"vendrían... ayer\" is conditional with a past time word, and \"vendán\" drops the r."
      ),
      toEs("You (tú) will meet someone important.", "Conocerás a alguien importante.", "Conocer is regular in the future (conocerás), and alguien takes the personal a.", []),
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
        "Remember the rule: the preterite and the future build on different stems; only the future keeps the infinitive (or its short irregular stem) and adds -é, -ás, -á, -emos, -éis, -án. Ayer tuve una reunión → Mañana tendré una reunión. Ayer salí tarde → Mañana saldré tarde. The irregular stems are different in each tense: tuv- vs. tendr-, hic- vs. har-, dij- vs. dir-.",
        [
          ["Ayer dije que no. → Mañana diré que sí.", "Yesterday I said no. → Tomorrow I'll say yes."],
        ],
        [
          fb("Past → future.", "Ayer hice ejercicio. → Mañana ___ ejercicio.", "haré", "Hacer's future stem is har- (not the preterite hic-): haré."),
        ]
      ),
    ],
    [
      fb("Past → future.", "Ayer vinieron mis tíos. → Mañana ___ mis tíos.", "vendrán", "Venir's future stem is vendr- (not the preterite vin-): vendrán."),
      fb("Past → future.", "Ayer puse la mesa. → Mañana ___ la mesa.", "pondré", "Poner's future stem is pondr- (not the preterite pus-): pondré."),
      fb("Past → future.", "Ayer pudimos descansar. → Mañana ___ descansar.", "podremos", "Poder's future stem is podr- (not the preterite pud-): podremos."),
      fb("Past → future.", "Ayer me dijiste un secreto. → Mañana me ___ otro.", "dirás", "Decir's future stem is dir- (not the preterite dij-): dirás."),
      fb("Future → past.", "Mañana saldré con Ana. → Ayer ___ con Ana.", "salí", "In the preterite, salir is regular: salí."),
      fb("Future → past.", "Mañana tendremos examen. → Ayer ___ examen.", "tuvimos", "Tener's preterite stem is tuv-: tuvimos."),
      mc(
        "«El año pasado quise aprender a nadar.» → next year:",
        ["El año que viene querré aprender a nadar.", "El año que viene quiseré aprender.", "El año que viene quería aprender.", "El año que viene quero aprender."],
        0,
        "Querer has the future stem querr-: querré. \"Quiseré\" mixes the preterite stem with a future ending, \"quería\" is imperfect, and \"quero\" isn't a form (the present is quiero)."
      ),
      toEs("Yesterday I couldn't come, but tomorrow I will come.", "Ayer no pude venir, pero mañana vendré.", "Ayer is a single past event (pude, preterite of poder), and mañana takes the future (vendré, stem vendr-).", ["Ayer no pude venir pero mañana vendré."]),
    ]
  ),
  L(
    "future-tense-drill-3",
    "a2d-speed-round-future",
    "Speed Round: 10 Futures, No Hints",
    "Regular and irregular futures mixed, plus a few probability guesses — as fast as you can.",
    "5 min",
    [
      sec(
        "Checklist",
        "Remember the rule: only the stem can be irregular; the endings are always the same. Irregular stem? (podr-, querr-, sabr-, habr-, tendr-, pondr-, saldr-, vendr-, har-, dir-). If not, keep the infinitive. Then add -é, -ás, -á, -emos, -éis, -án.",
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
        "Wondering about the present uses the future of probability: ¿Dónde estarán? \"Estuvieron\" is past, \"están mañana\" mixes present and tomorrow, and \"estarían ayer\" is conditional with a past time word."
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
        [
          "Remember the rule: para points forward to a goal. Destination: Salgo para Madrid. Deadline: Lo necesito para el lunes. Purpose (+ infinitive): Estudio para aprender. Recipient: Este regalo es para ti. Opinion: Para mí, es caro.",
          "Why it works: all four uses answer \"toward what?\", whether a place, a date, an aim or a person at the end of the line. If you can say \"in order to\", \"by (a date)\", \"heading to\" or \"to be given to\" in English, it's para. After para, yo and tú become mí and ti.",
        ],
        [
          ["El tren para Sevilla sale a las ocho.", "The train to Seville leaves at eight."],
          ["Ahorro para comprar un coche.", "I'm saving to buy a car."],
        ],
        [
          mc(
            "«Estas flores son para mi madre.» Use of para:",
            ["recipient", "deadline", "destination", "duration"],
            0,
            "Para marks who something is for: the recipient. It's not a deadline, destination or duration."
          ),
          fb("Complete with para + the right pronoun.", "Este pastel es ___ (yo).", "para mí", "Recipient → para, and after a preposition yo becomes mí (with an accent, unlike ti). \"Para yo\" is never correct here."),
        ]
      ),
    ],
    [
      mc(
        "«Tengo que terminar el informe para el viernes.»",
        ["deadline", "recipient", "purpose", "exchange"],
        0,
        "Para el viernes sets a deadline (by Friday). It isn't a recipient, a purpose or an exchange."
      ),
      mc(
        "«Mañana salimos para Lisboa.»",
        ["destination", "cause", "duration", "exchange"],
        0,
        "Salir para + place gives the destination. It's not a cause, a duration or an exchange."
      ),
      mc(
        "«Trabajo para pagar el alquiler.»",
        ["purpose", "recipient", "deadline", "movement through"],
        0,
        "Para + infinitive gives the purpose: in order to pay the rent. It's not a recipient, a deadline or movement through."
      ),
      fb("Complete.", "Necesito las fotos ___ mañana.", "para", "Para + time sets a deadline: para mañana = by tomorrow."),
      fb("Complete.", "Voy al gimnasio ___ estar en forma.", "para", "Para + infinitive gives the purpose: in order to stay fit."),
      fb("Complete.", "¿Esta carta es ___ mí?", "para", "Para marks the recipient: is this letter for me?"),
      toEs("Aprendo español porque quiero viajar.", "Aprendo español para viajar.", "A goal becomes para + infinitive: para viajar = in order to travel. The subject is the same in both parts, so no que is needed.", ["Estudio español para viajar."], "Rewrite it with para + infinitive."),
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
        [
          "Remember the rule: por looks back to a cause or passes through something. Duration: Estudié por dos horas (natives often drop por here, or use durante: Estudié dos horas / durante dos horas). Cause: No salí por la lluvia. Exchange/price: Lo compré por diez euros. Movement through/along: Caminamos por el parque. Means: por teléfono, por correo. Fixed: por favor, por eso, por fin, por ejemplo.",
          "Why it works: each use answers \"because of what?\" or \"through what?\". A cause pushes from behind, a price is what you go through to get something, a route or a phone line is what you pass through. If English says \"because of\", \"in exchange for\", \"through/along\" or \"by (phone, mail)\", it's por.",
        ],
        [
          ["Gracias por la ayuda.", "Thanks for the help."],
          ["Paseamos por la playa.", "We walked along the beach."],
        ],
        [
          mc(
            "«Cambié mi bici por una guitarra.» Use of por:",
            ["exchange", "purpose", "deadline", "recipient"],
            0,
            "Por marks an exchange, one thing for another. It's not purpose, a deadline or a recipient."
          ),
          mc(
            "Apply the rule to a new verb. \"The cat jumped out through the window.\"",
            ["El gato saltó por la ventana.", "El gato saltó para la ventana.", "El gato saltó en la ventana.", "El gato saltó con la ventana."],
            0,
            "Passing through an opening is por: saltó por la ventana. Para la ventana would mean heading toward the window as a goal, not going through it."
          ),
        ]
      ),
    ],
    [
      mc(
        "«Llegué tarde por el tráfico.»",
        ["cause", "destination", "purpose", "deadline"],
        0,
        "Por gives the cause: because of the traffic. It's not a destination, purpose or deadline."
      ),
      mc(
        "«Vivimos en Roma por tres años.»",
        ["duration", "exchange", "recipient", "destination"],
        0,
        "Por here gives the duration: for three years. It's not an exchange, recipient or destination. (Vivimos en Roma tres años or durante tres años say the same thing and are more common.)"
      ),
      fb("Complete.", "Te mando la foto ___ WhatsApp esta noche.", "por", "Por marks the means of communication: por WhatsApp, por teléfono."),
      fb("Complete.", "Pagué veinte euros ___ la camiseta.", "por", "Por marks price or exchange: pagué veinte euros por la camiseta."),
      fb("Complete.", "El ladrón entró ___ la ventana.", "por", "Por marks movement through a place: entró por la ventana."),
      fb("Complete.", "¡___ fin es viernes!", "Por", "Por fin (finally) is a fixed expression with por."),
      toEs("Gracias para todo.", "Gracias por todo.", "Gratitude points back to its reason, so gracias takes por: gracias por todo. Para would point ahead to a goal.", ["Muchas gracias por todo."], "Correct the sentence."),
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
        [
          "Remember the rule: para aims at a target (the person who receives something, the place you're heading for, a deadline), while por points to what's behind or along the way (the cause, the person you do it for the sake of or in place of, the place you pass through, a part of the day).",
          "That's why English 'for' splits in two, and one small word can flip the meaning of a whole sentence: Lo hice por ti (because of you, for your sake) vs. Lo hice para ti (it's a present for you). Salí por la puerta (through it) vs. Salí para la oficina (heading there). Trabajo por la mañana (time of day) vs. Lo necesito para mañana (deadline).",
        ],
        [
          ["Compré el regalo para mi madre.", "I bought the present for my mother. (she receives it → para)"],
          ["Fui a la reunión por mi madre.", "I went to the meeting on my mother's behalf. (in her place → por)"],
          ["El tren pasa por Zaragoza.", "The train goes through Zaragoza. (a place on the way → por)"],
          ["El tren sale para Zaragoza.", "The train leaves for Zaragoza. (the destination → para)"],
        ],
        [
          mc(
            "«Hablé con la profesora por Ana.» Ana was ill. This means…",
            ["I spoke to the teacher on Ana's behalf.", "I spoke to the teacher so Ana would get a present.", "I spoke to the teacher on the way to Ana's house.", "I spoke to the teacher by Ana's deadline."],
            0,
            "Por + person = in that person's place or for their sake: Ana couldn't go, so you went instead. A target (para Ana) would make Ana the receiver of something."
          ),
          mc(
            "«Lo hice por ti» most likely means…",
            ["I did it because of you / for your sake.", "I made it as a present for you.", "I did it through you.", "I did it by tomorrow."],
            0,
            "Por means because of or for the sake of: lo hice por ti. A present would be para ti, and por here isn't through or by tomorrow."
          ),
        ]
      ),
    ],
    [
      mc(
        "«Este pastel es ___ ti.» (you'll eat it)",
        ["para", "por", "de por", "a"],
        0,
        "The cake is a gift you'll eat, so para ti marks the recipient. \"Por ti\" means because of you, and \"de por\" and \"a\" don't fit."
      ),
      mc(
        "«Trabajo ___ la mañana.» (in the morning)",
        ["por", "para", "a", "en por"],
        0,
        "Parts of the day take por: por la mañana. \"Para\" and \"a\" don't express this, and \"en por\" doubles prepositions (en la mañana is heard in Latin America, but por la mañana is standard)."
      ),
      mc(
        "«Tengo que entregarlo ___ mañana.» (by tomorrow)",
        ["para", "por", "en", "de"],
        0,
        "Para + time sets a deadline: para mañana = by tomorrow. \"Por mañana\" isn't a deadline, and \"en\" and \"de\" don't fit."
      ),
      fb("Por or para?", "Estoy muy preocupado ___ mi hermano: está enfermo.", "por", "Por gives the cause of the worry: preocupado por mi hermano."),
      fb("Por or para?", "Compré una bufanda ___ mi hermano: es su cumpleaños.", "para", "Para marks the recipient of the gift: para mi hermano."),
      fb("Por or para?", "Pasamos ___ Valencia en el viaje.", "por", "Por marks movement through a place: pasamos por Valencia."),
      fb("Por or para?", "Salimos ___ Valencia a las diez.", "para", "Salir para + place gives the destination."),
      toEs("I did it for you (as a gift).", "Lo hice para ti.", "Para marks the recipient: lo hice para ti = I made it for you (a gift).", []),
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
        [
          "Remember the rule: por looks back at the cause, para looks ahead to the goal. The question words keep that split. ¿Por qué? (why?) asks for the cause, so it is answered with porque + a full clause, or por + a noun. ¿Para qué? (what for?) asks for the goal, so it is answered with para + infinitive.",
          "Spelling matters too: ¿por qué? is two words with an accent (the question); porque is one word with no accent (the answer).",
        ],
        [
          ["—¿Para qué ahorras? —Para comprar una moto.", "What are you saving for? — To buy a motorbike. (goal → para + infinitive)"],
          ["—¿Por qué estás cansado? —Por el viaje.", "Why are you tired? — Because of the trip. (cause → por + noun)"],
          ["—¿Por qué no viniste? —Porque estaba enfermo.", "Why didn't you come? — Because I was sick. (cause → porque + verb)"],
        ],
        [
          fb("Answer.", "—¿Y tu viaje a Madrid? —Es ___ visitar a mi hermana.", "para", "Para + infinitive gives the purpose: para visitar a mi hermana."),
          mc(
            "Which answer fits «¿Para qué sirve este botón?»",
            ["Para encender la luz.", "Porque enciende la luz.", "Por la luz.", "Por qué enciende la luz."],
            0,
            "¿Para qué? asks what something is for, so the answer is para + infinitive. Porque and por answer a ¿por qué? (cause) question, and por qué is the question word itself."
          ),
        ]
      ),
    ],
    [
      fb("Answer.", "—¿Por qué llegaste tarde? —___ el tráfico.", "Por", "Por + noun gives the cause: por el tráfico."),
      fb("Answer.", "—¿Y esta herramienta? —Sirve ___ abrir botellas.", "para", "Servir para + infinitive gives the purpose: it's for opening bottles."),
      fb("Answer.", "—¿Por qué no comes? —___ no tengo hambre.", "Porque", "Porque (one word, no accent) introduces a cause with a full clause."),
      fb("Answer.", "—¿Para qué estudias tanto? —___ aprobar el examen.", "Para", "¿Para qué? asks for a purpose, so answer with para + infinitive."),
      mc(
        "«—¿___ quieres aprender chino? —Para trabajar en Shanghái.»",
        ["Para qué", "Por qué", "Porque", "Por"],
        0,
        "The answer gives a purpose (para trabajar), so the question is ¿Para qué? \"Por qué\" asks for a cause, and \"Porque\" and \"Por\" aren't question words."
      ),
      mc(
        "«—¿___ estás triste? —Porque se fue mi mejor amigo.»",
        ["Por qué", "Para qué", "Porque", "Para"],
        0,
        "The answer gives a cause (porque se fue...), so the question is ¿Por qué? \"Para qué\" asks for a purpose, and \"Porque\" and \"Para\" aren't question words."
      ),
      toEs("—What are you saving for? —To travel.", "—¿Para qué ahorras? —Para viajar.", "Asking about a purpose uses ¿Para qué?, answered with para + infinitive.", []),
      toEn("—¿Por qué no fuiste? —Por el trabajo.", "—Why didn't you go? —Because of work.", "¿Por qué? asks for a cause, and por + noun gives it: por el trabajo.", []),
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
        "Remember the rule",
        "Para aims at the trip's targets: where you're heading, what a stop is for, who a present is for, when you must be back. Por describes the journey and what's behind it: the route, the time of day, how long, the price, the cause. Before each gap, ask: target, or journey and reason?",
        [
          ["Viajamos por Portugal en tren.", "We travelled around Portugal by train. (the route → por)"],
          ["Mañana salgo para Lisboa.", "Tomorrow I leave for Lisbon. (the destination → para)"],
          ["Compré el billete por veinte euros.", "I bought the ticket for twenty euros. (the price → por)"],
          ["El vino es para mi suegro.", "The wine is for my father-in-law. (who gets it → para)"],
        ],
        [
          mc(
            "«Nos quedamos en casa ___ la nieve.» (because of the snow)",
            ["por", "para", "porque", "a"],
            0,
            "The snow is the cause, given as a noun: por la nieve. Para would make the snow a goal, and porque needs a verb after it (porque nevaba)."
          ),
        ]
      ),
      sec(
        "The story, with the gaps",
        "«Salimos ___ (1) Granada el viernes. Fuimos ___ (2) la costa porque era más bonito. Paramos en Málaga ___ (3) comer y compramos dulces ___ (4) la abuela. ___ (5) la noche llegamos, cansadísimos, pero felices. Pagamos solo cuarenta euros ___ (6) el hotel.» Fill the gaps in the exercises.",
        [],
        [
          mc(
            "Gap 2: «Fuimos ___ la costa porque era más bonito.» Which word, and why?",
            ["por: the route, movement along the coast", "para: the coast is the destination", "para: the purpose of the trip", "por: the price of the trip"],
            0,
            "The family drove along the coast on the way to Granada, so por marks the route. The destination is Granada (para Granada), and nothing here is a price or a purpose."
          ),
        ]
      ),
    ],
    [
      fb("Fill in.", "Salimos ___ Granada el viernes.", "para", "Salir para + place gives the destination."),
      fb("Fill in.", "Paramos en Málaga ___ comer.", "para", "Para + infinitive gives the purpose: para comer."),
      fb("Fill in.", "Compramos dulces ___ la abuela.", "para", "Para marks the recipient: para la abuela."),
      fb("Fill in.", "___ la noche llegamos a Granada.", "Por", "Parts of the day take por: por la noche."),
      fb("Fill in.", "Pagamos cuarenta euros ___ el hotel.", "por", "Por marks the price: cuarenta euros por el hotel."),
      fb("Fill in.", "Estábamos cansados ___ el viaje tan largo.", "por", "Por gives the cause: cansados por el viaje."),
      mc(
        "«Tenemos que volver ___ el lunes.» (by Monday)",
        ["para", "por", "a", "en"],
        0,
        "Para + day sets a deadline: para el lunes = by Monday. \"Por el lunes\" isn't a deadline, and \"a\" and \"en\" don't fit."
      ),
      toEs("We drove along the coast to see the sea.", "Condujimos por la costa para ver el mar.", "Por marks the route (por la costa), and para gives the purpose (para ver el mar).", ["Fuimos por la costa para ver el mar.", "Manejamos por la costa para ver el mar."]),
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
        [
          "Para: destination, deadline, purpose, recipient, opinion, comparison (Para ser niño, habla muy bien). Por: duration, cause, exchange/price, route, means, part of day, fixed expressions.",
          "The labels all come from one idea: para looks ahead to a target or a standard, por looks back to a reason or along the way. Naming the use forces you to check that direction instead of guessing from English 'for'.",
        ],
        [
          ["Para ser tan joven, sabe mucho.", "For someone so young, he knows a lot. (compared with what you'd expect → para)"],
          ["Lo envié por correo.", "I sent it by mail. (the means → por)"],
          ["Me multaron por aparcar mal.", "They fined me for parking badly. (the cause → por)"],
        ],
        [
          mc(
            "«Para ser extranjero, habla muy bien.»",
            ["para — comparison with what's expected", "por — cause", "para — destination", "por — exchange"],
            0,
            "Para ser extranjero compares with what's expected: considering he's a foreigner. It isn't a cause, a destination or an exchange."
          ),
        ]
      ),
    ],
    [
      mc(
        "«Te mando las fotos ___ correo.»",
        ["por — means", "para — recipient", "para — purpose", "por — duration"],
        0,
        "Por marks the means of sending: por correo. Para would mark a recipient or purpose, and por isn't about duration here."
      ),
      mc(
        "«La reunión es ___ hablar del presupuesto.»",
        ["para — purpose", "por — cause", "por — exchange", "para — deadline"],
        0,
        "Para + infinitive gives the purpose: para hablar del presupuesto. It's not a cause, an exchange or a deadline."
      ),
      mc(
        "«Me dieron un premio ___ mi trabajo.»",
        ["por — cause/reason", "para — recipient", "para — purpose", "por — route"],
        0,
        "Por gives the reason: por mi trabajo = because of my work. It's not a recipient, a purpose or a route."
      ),
      mc(
        "«Estuve en el hospital ___ una semana.»",
        ["por — duration", "para — deadline", "para — destination", "por — exchange"],
        0,
        "Por here gives the duration: por una semana. It's not a deadline, destination or exchange."
      ),
      fb("Complete.", "___ mí, el español es más fácil que el francés.", "Para", "Para mí introduces an opinion: in my view."),
      fb("Complete.", "Gracias ___ venir.", "por", "When you thank someone for something, gracias takes por for the reason: gracias por venir."),
      { ...fb("Complete.", "Este tren va ___ Bilbao.", "para", "Ir para + place gives the destination: va para Bilbao. Va a Bilbao is just as correct."), altAnswers: ["a"] },
      toEs("For a beginner, she speaks very well.", "Para ser principiante, habla muy bien.", "Para ser... compares with what's expected: for a beginner (considering she's one).", ["Para ser una principiante, habla muy bien."]),
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
        "Remember the rule",
        "Para looks ahead to a target: where you're heading, what something is for, who gets it, a deadline. Por looks back or along the way: the cause, the reason for thanks, a part of the day, the means (by phone), the price. Each wrong preposition in a learner's email breaks that logic, so test each one: target, or reason / way?",
        [
          ["Mañana salgo para Quito.", "Tomorrow I'm leaving for Quito. (destination → para)"],
          ["Te escribo por la tarde.", "I'll write to you in the afternoon. (part of the day → por)"],
          ["Gracias por la invitación.", "Thanks for the invitation. (the reason for the thanks → por)"],
        ],
        []
      ),
      sec(
        "The email",
        "«Hola, Marta: gracias para tu mensaje. Salgo por Chile el martes para la mañana. Voy por visitar a mi hermano. Te traeré algo por ti. Te llamo para teléfono desde allí.» Every por and para in this email is the wrong one. Fix them one by one.",
        [],
        [
          fb("Fix it.", "Gracias ___ tu mensaje. (a learner wrote: para)", "por", "When you thank someone for something, gracias takes por for the reason: gracias por tu mensaje, not para."),
        ]
      ),
    ],
    [
      fb("Fix it.", "Salgo ___ Chile el martes. (a learner wrote: por)", "para", "Salir para + place gives the destination: para Chile, not por."),
      fb("Fix it.", "El martes ___ la mañana. (a learner wrote: para)", "por", "Parts of the day take por: por la mañana, not para."),
      fb("Fix it.", "Voy ___ visitar a mi hermano. (a learner wrote: por)", "para", "Para + infinitive gives the purpose: para visitar, not por."),
      fb("Fix it.", "Te traeré algo ___ ti. (a learner wrote: por)", "para", "Para marks the recipient: para ti, not por ti."),
      fb("Fix it.", "Te llamo ___ teléfono desde allí. (a learner wrote: para)", "por", "Por marks the means of communication: por teléfono, not para."),
      mc(
        "Which sentence is correct?",
        ["Compré el billete por cien euros.", "Compré el billete para cien euros.", "Compré el billete por mi viaje de mañana por mí.", "Compré para el billete cien euros."],
        0,
        "Price takes por: por cien euros. \"Para cien euros\" doesn't express price, and the other two are garbled."
      ),
      toEs("I'm leaving for Chile on Tuesday morning.", "Salgo para Chile el martes por la mañana.", "Salir para + place gives the destination, and parts of the day take por: por la mañana.", ["Me voy a Chile el martes por la mañana."]),
    ]
  ),
  L(
    "por-vs-para-mastery-check",
    "a2d-speed-round-por-para",
    "Speed Round: Por or Para? 12 Quick Calls",
    "Quick por or para decisions, one per sentence: choose, then read the reason.",
    "6 min",
    [
      sec(
        "Quick rule of thumb",
        "Para → forward: goal, destination, deadline, receiver. Por → back or through: cause, exchange, duration, route, means. Why it works: para points at something not reached yet (the goal), por at something already behind the action (the reason) or on the way to it. The same verb can take either, depending on that direction.",
        [
          ["Estudio para aprobar. / Aprobé por estudiar.", "I study to pass. / I passed because I studied. (goal ahead → para; cause behind → por)"],
          ["Lo cambié por uno azul. / Lo compré para mi tío.", "I exchanged it for a blue one. / I bought it for my uncle. (exchange → por; recipient → para)"],
        ],
        [
          fb("Quick!", "Caminamos ___ el centro.", "por", "Por marks movement through or around a place: caminamos por el centro."),
        ]
      ),
    ],
    [
      fb("Quick!", "Es un regalo ___ mi jefa.", "para", "Para marks the recipient: un regalo para mi jefa."),
      fb("Quick!", "Lo vendí ___ poco dinero.", "por", "Por marks price or exchange: lo vendí por poco dinero."),
      fb("Quick!", "Necesito el coche ___ el sábado.", "para", "Para + time sets a deadline: para el sábado = by Saturday."),
      fb("Quick!", "Estudio mucho ___ sacar buenas notas.", "para", "Para + infinitive gives the purpose: para sacar buenas notas."),
      fb("Quick!", "No pude dormir ___ el ruido.", "por", "Por gives the cause: no pude dormir por el ruido."),
      fb("Quick!", "Hablamos ___ videollamada.", "por", "Por marks the means of communication: por videollamada."),
      fb("Quick!", "Salgo ___ el aeropuerto ahora.", "para", "Salir para + place gives the destination: para el aeropuerto."),
      mc(
        "«___ supuesto, te ayudo.»",
        ["Por", "Para", "Porque", "Para que"],
        0,
        "Por supuesto (of course) is a fixed expression with por. \"Para\", \"Porque\" and \"Para que\" don't form it."
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
        "Remember the rule: para points forward to an end point, por covers the how, the why and the way through. Para el lunes (deadline), para mi jefe (recipient), para relajarme (purpose). Por la tarde (part of the day), por teléfono (means), por el tráfico (cause), por la calle (route). For every sentence about your week, ask one question: is this a goal or end point (para), or a cause, channel, path or stretch of time (por)?",
        [
          ["El sábado limpio la casa para la fiesta.", "On Saturday I clean the house for the party. (the party is the goal)"],
          ["Hoy no salgo por el frío.", "I'm not going out today because of the cold. (cause)"],
          ["Por las noches leo un rato.", "At night I read for a while. (part of the day)"],
        ],
        [
          fb("Complete with por or para.", "Salgo a correr ___ la mañana.", "por", "A part of the day is a vague stretch of time, so por: por la mañana. Para la mañana would be a deadline ('by the morning')."),
          fb("Complete with por or para.", "Compré flores ___ mi vecina.", "para", "Your neighbour receives the flowers, so para. Por mi vecina would mean on her behalf or because of her."),
        ]
      ),
    ],
    [
      toEs("I have to finish the report by Friday.", "Tengo que terminar el informe para el viernes.", "Para + day sets a deadline: para el viernes = by Friday.", []),
      toEs("I talk to my mother on the phone every day.", "Hablo con mi madre por teléfono todos los días.", "Por marks the means of communication: por teléfono.", ["Hablo por teléfono con mi madre todos los días.", "Hablo con mi mamá por teléfono todos los días."]),
      toEs("I bought a cake for my coworkers.", "Compré una tarta para mis compañeros.", "Para marks the recipient: para mis compañeros.", ["Compré un pastel para mis compañeros."]),
      toEs("I arrived late because of the rain.", "Llegué tarde por la lluvia.", "Por + noun gives the cause: por la lluvia = because of the rain.", ["Llegué tarde a causa de la lluvia."]),
      fb("Complete.", "Los sábados paseo ___ el río.", "por", "Por marks movement along a place: paseo por el río."),
      fb("Complete.", "Ahorro un poco cada mes ___ las vacaciones.", "para", "Para marks the goal: saving for the holidays."),
      fb("Complete.", "Pagué cinco euros ___ el café y el bocadillo.", "por", "Por marks the price: cinco euros por el café."),
      wo("Esta semana trabajé por las noches para ganar más dinero.", "Por las noches is a part of the day (a stretch of time); para ganar is the purpose (para + infinitive).", "This week I worked at night to earn more money."),
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
        [
          "Remember the rule: para points forward to an end point (destination, the date something is for, recipient, purpose); por covers the how, the why and the way through (route, price per person, means, cause).",
          "At the travel agency every por and para has gone missing. Read the conversation and decide for each gap: end point (para) or how / why / through (por)? Then fill the gaps in the exercises.",
          "—Buenos días, quiero un billete ___ Buenos Aires. —¿___ cuándo? —___ el quince de mayo. —Hay un vuelo que pasa ___ Madrid. Cuesta 800 euros ___ persona. —Perfecto. Es ___ mi luna de miel. ¿Puedo pagar ___ internet?",
        ],
        [
          ["Quiero una mesa para cuatro.", "I'd like a table for four. (who it's for)"],
          ["El tren va por la costa.", "The train runs along the coast. (route)"],
          ["Son dos euros por kilo.", "It's two euros a kilo. (por = per)"],
        ],
        [
          mc(
            "«Pago diez euros por hora de clase»: por means…",
            ["per / each", "for the benefit of", "toward", "in order to"],
            0,
            "In a price or rate, por means per (each): diez euros por hora. For someone's benefit, toward and in order to are all uses of para."
          ),
        ]
      ),
    ],
    [
      fb("Fill in.", "Quiero un billete ___ Buenos Aires.", "para", "Para marks the destination: un billete para Buenos Aires."),
      fb("Fill in.", "—¿___ cuándo lo necesita? —El quince de mayo.", "Para", "¿Para cuándo? asks for a deadline or date."),
      fb("Fill in.", "Hay un vuelo que pasa ___ Madrid.", "por", "Por marks the route through a place: pasa por Madrid."),
      fb("Fill in.", "Cuesta 800 euros ___ persona.", "por", "Por means per in distributions: 800 euros por persona."),
      fb("Fill in.", "Es ___ mi luna de miel.", "para", "Para marks the purpose or occasion: para mi luna de miel."),
      fb("Fill in.", "¿Puedo pagar ___ internet?", "por", "Por marks the means: pagar por internet."),
      mc(
        "«Voy a Argentina ___ conocer a la familia de mi mujer.»",
        ["para", "por", "a", "de"],
        0,
        "Para + infinitive gives the purpose: para conocer a la familia. \"Por\" would give a cause, and \"a\" and \"de\" don't express purpose."
      ),
      toEs("The flight goes through Madrid and costs 600 euros per person.", "El vuelo pasa por Madrid y cuesta 600 euros por persona.", "Por marks both the route (pasa por Madrid) and the rate (por persona = per person). Para Madrid would make Madrid the destination.", ["El vuelo pasa por Madrid y cuesta seiscientos euros por persona."]),
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
        [
          "Remember the rule: por looks at causes, means and the way through, and some fixed expressions keep that idea. Por eso is literally \"because of that\" (that's why); por si acaso is \"for the case that\" (just in case). The rest you learn as whole chunks, never word by word, and they never swap to para: para supuesto or para fin don't exist (para eso does, but it means \"for that purpose\").",
          "Sort them by job. Linking ideas: por eso (that's why), por ejemplo (for example), por cierto (by the way). Attitude: por supuesto (of course), por fin (finally, at last). How much / how often: por lo menos (at least), por lo general (generally). Precaution: por si acaso (just in case).",
        ],
        [
          ["Llovía; por eso nos quedamos en casa.", "It was raining; that's why we stayed home. (por eso links cause → result)"],
          ["Lleva un paraguas, por si acaso.", "Take an umbrella, just in case. (often at the end)"],
          ["Por lo general como en el trabajo.", "I generally eat at work. (often at the start)"],
        ],
        [
          mc(
            "«Por fin» means…",
            ["finally", "for example", "of course", "that's why"],
            0,
            "Por fin means finally, after waiting. For example is por ejemplo, of course is por supuesto, and that's why is por eso."
          ),
          mc(
            "«No tengo hambre; ___ no voy a cenar.»",
            ["por eso", "por ejemplo", "por cierto", "por si acaso"],
            0,
            "Not being hungry is the cause and skipping dinner the result, so the linker is por eso (that's why). Por ejemplo introduces an example, por cierto a new topic, por si acaso a precaution."
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
        "Learn these as whole chunks: por cierto changes the topic, por lo menos sets a minimum, por lo general = usually, por si acaso = as a precaution."
      ),
      fb("Complete.", "Estaba cansado; por ___ me acosté temprano.", "eso", "Por eso (that's why) links a cause (tired) to its result (going to bed early)."),
      fb("Complete.", "Me gustan las frutas tropicales, por ___, el mango.", "ejemplo", "Por ejemplo (for example) introduces one case of what you just said: mango is a tropical fruit."),
      fb("Complete.", "—¿Me ayudas? —¡Por ___!", "supuesto", "¡Por supuesto! (of course!) is the standard enthusiastic yes; ¡claro! is a common alternative."),
      fb("Complete.", "Después de tres horas, por ___ llegamos.", "fin", "Por fin (finally, at last) shows relief after a long wait: three hours."),
      mc(
        "«Hay ___ veinte personas en la cola.» (at least)",
        ["por lo menos", "por eso", "por fin", "por cierto"],
        0,
        "Por lo menos means at least. \"Por eso\" is that's why, \"por fin\" finally, and \"por cierto\" by the way."
      ),
      toEs("By the way, did you (tú) see Carlos?", "Por cierto, ¿viste a Carlos?", "Por cierto means by the way; ver a Carlos takes the personal a.", ["Por cierto, ¿has visto a Carlos?"]),
      wo("Por lo general cenamos a las nueve y media.", "Por lo general (= generally, usually) opens the sentence, followed by the present for a habit: cenamos.", "Generally we have dinner at half past nine."),
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
        [
          "Remember the rule: para puts the person or place at the end of the action (recipient, employer, destination); por puts it behind or around the action (the cause, the person you stand in for, the route).",
          "That's why swapping one word changes the whole meaning. Trabajo para mi padre (he employs me) → Trabajo por mi padre (in his place / because of him). Voy para el parque (heading there) → Voy por el parque (through it). Lo compré para Ana (a gift for her) → Lo compré por Ana (because of her / on her behalf). In this lesson you swap, change and decide which meaning is meant.",
        ],
        [
          ["Estas galletas son para los vecinos.", "These biscuits are for the neighbours. (they receive them)"],
          ["Me quedé en casa por los vecinos.", "I stayed home because of the neighbours. (they're the cause)"],
          ["Corro por el parque y luego voy para casa.", "I run through the park and then head home. (route, then destination)"],
        ],
        [
          mc(
            "«Trabajo para una empresa alemana» means…",
            ["A German company employs me.", "I work instead of a German company.", "I work through a German company.", "I work because of a German company."],
            0,
            "Trabajar para names your employer: a German company employs me. Instead of would be por, and para here isn't through or because of."
          ),
        ]
      ),
    ],
    [
      mc(
        "«Trabajé por mi compañero ayer» means…",
        ["I covered my colleague's shift.", "My colleague is my boss.", "I worked for my colleague as a present.", "I worked toward my colleague."],
        0,
        "Trabajar por alguien means in their place: I covered my colleague's shift. It's not about bosses, gifts (para) or direction."
      ),
      mc(
        "«Caminamos por el río» means…",
        ["We walked along the river.", "We walked toward the river.", "We walked for the river.", "We walked because of the river."],
        0,
        "Por marks movement along or through: we walked along the river. Toward would be para or hacia, and por here isn't a purpose or cause."
      ),
      mc(
        "«Caminamos para el río» means…",
        ["We walked toward the river.", "We walked along the river.", "We walked in exchange for the river.", "We walked because of the river."],
        0,
        "Para with movement marks direction: we walked toward the river. Along the river would be por, and para here isn't an exchange or cause."
      ),
      fb("Complete.", "Mi hermana no pudo ir, así que fui ___ ella.", "por", "Por means on someone's behalf or in their place: fui por ella."),
      fb("Complete.", "Hice una tarta ___ ella: es su cumpleaños.", "para", "Para marks the recipient: una tarta para ella."),
      fb("Complete.", "Este mensaje es ___ todos los alumnos.", "para", "Para marks the recipients: para todos los alumnos."),
      toEs("I went to the meeting on behalf of my boss.", "Fui a la reunión por mi jefe.", "Por means on behalf of: fui por mi jefe.", ["Fui a la reunión en lugar de mi jefe."]),
      toEn("Lo hago por mis hijos.", "I do it for my children's sake.", "Por + person = for that person's sake: the children are the motive behind the action. Para mis hijos would mean they receive the result.", ["I do it because of my kids.", "I do it for my children."]),
    ]
  ),
  L(
    "por-vs-para-drill-3",
    "a2d-por-para-build-up",
    "Build-Up: One Sentence, Two Prepositions",
    "Build long sentences with por, para and both together: plans, reasons, deadlines and routes.",
    "7 min",
    [
      sec(
        "Stacking",
        [
          "Remember the rule: para points forward to an end point (destination, purpose, recipient, deadline); por covers the how, the why and the way through (route, time of day, means, price, cause).",
          "Real sentences often contain both: Salimos para Toledo por la mañana y pasamos por Aranjuez para ver el palacio. Build them one piece at a time and decide each preposition separately, by the question that piece answers: where to? what for? for whom? by when? → para. Which way? when in the day? how? how much? why? → por.",
        ],
        [
          ["Estudio por las noches para aprobar el examen.", "I study at night to pass the exam. (when? por / what for? para)"],
          ["Le mandé flores por mensajería para su boda.", "I sent her flowers by courier for her wedding. (how? por / what for? para)"],
        ],
        [
          fb("Build.", "Salimos para Toledo ___ la mañana.", "por", "When in the day? A part of the day takes por: por la mañana."),
        ]
      ),
    ],
    [
      fb("Build.", "Pasamos ___ Aranjuez.", "por", "Por marks the route through a place: pasamos por Aranjuez."),
      fb("Build.", "Paramos allí ___ ver el palacio.", "para", "Para + infinitive gives the purpose: para ver el palacio."),
      fb("Build.", "Compré un recuerdo ___ mi abuela.", "para", "Para marks the recipient: para mi abuela."),
      fb("Build.", "Lo compré ___ muy poco dinero.", "por", "Por marks the price: por muy poco dinero."),
      fb("Build.", "Volvimos a casa ___ la cena.", "para", "Para marks a time limit: in time for dinner."),
      wo("Mi padre trabaja por las noches para pagar mis estudios.", "When? por las noches (part of the day). What for? para pagar (purpose).", "My father works at night to pay for my studies."),
      wo("Te llamo por teléfono para contarte una cosa.", "How? por teléfono (means). What for? para contarte (purpose).", "I'm calling you on the phone to tell you something."),
      toEs("We travelled through France to visit Paris.", "Viajamos por Francia para visitar París.", "Por marks the route (por Francia), and para gives the purpose (para visitar).", ["Viajamos por Francia para conocer París."]),
    ]
  ),
  L(
    "por-vs-para-drill-3",
    "a2d-por-para-hardest",
    "Mixed Practice: The Hardest Por/Para Cases",
    "Para ser… (considering), por + infinitive (because of doing), por meaning 'per' and gracias por: the cases learners miss most.",
    "7 min",
    [
      sec(
        "Tricky corners",
        [
          "Remember the rule: para points forward to an end point or a yardstick; por looks back at the cause, or spreads over units (per).",
          "That explains the four corners learners miss. Para ser + noun/adjective measures against a yardstick (\"considering it's…\"): Para ser niño, es muy maduro. Por + infinitive looks back at what someone did, the cause: Suspendió por no estudiar. Gracias por + noun/infinitive: what you thank for is the reason (Gracias por venir), never para. Por + unit = per: dos veces por semana.",
          "English \"for\" covers all four, so don't translate it automatically: ask whether it's a yardstick (para ser), a cause (por), or a rate (por).",
        ],
        [
          ["Me castigaron por llegar tarde.", "They punished me for arriving late. (the cause: what I did)"],
          ["Voy al gimnasio tres veces por semana.", "I go to the gym three times a week. (por = per)"],
          ["Para ser agosto, hace fresco.", "For August, it's cool. (measured against what August is usually like)"],
        ],
        [
          mc(
            "«Suspendió ___ no estudiar.»",
            ["por", "para", "porque", "para que"],
            0,
            "Por + infinitive gives the cause: por no estudiar. \"Para\" is a purpose, and \"porque\" and \"para que\" need a full clause."
          ),
        ]
      ),
    ],
    [
      fb("Complete.", "___ ser el primer día, lo hiciste muy bien.", "Para", "Para ser compares with what's expected: for a first day, you did well."),
      fb("Complete.", "Le pusieron una multa ___ ir demasiado rápido.", "por", "Por + infinitive gives the reason: por ir demasiado rápido."),
      fb("Complete.", "Gracias ___ escucharme.", "por", "To say what you are thanking someone for, gracias takes por: gracias por escucharme. (Gracias a means thanks to.)"),
      fb("Complete.", "Como fruta dos veces ___ día.", "por", "Por means per in frequencies: dos veces por día (dos veces al día is also common)."),
      fb("Complete.", "___ ser invierno, hace mucho calor.", "Para", "Para ser contrasts with what's expected: for winter, it's very hot."),
      mc(
        "«Lo felicitaron ___ su trabajo.»",
        ["por", "para", "a", "de"],
        0,
        "Por gives the reason for the congratulations: por su trabajo. \"Para\" would be a purpose or recipient, and \"a\" and \"de\" don't fit."
      ),
      toEs("For a small town, it has a lot of restaurants.", "Para ser un pueblo pequeño, tiene muchos restaurantes.", "Para ser + noun compares with what's expected: for a small town.", []),
      toEn("La despidieron por decir la verdad.", "They fired her for telling the truth.", "Por + infinitive gives the reason: por decir la verdad = for telling the truth.", ["She was fired for telling the truth."]),
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
        [
          "Remember the rule: para points forward to an end point (who it's for, what it's for, by when); por covers the how and the why (how you pay or send it, what you pay in exchange, the cause).",
          "A shop assistant's questions tell you which one to answer with. ¿Para quién? ¿Para qué? ¿Para cuándo? → answer with para. ¿Cómo lo enviamos? ¿Cuánto pagó por…? → answer with por. ¿Por qué? (why?) → answer with porque + a full sentence, or por + a noun.",
          "Typical questions: ¿Es para usted o para regalo? · ¿Para cuándo lo necesita? · ¿Cómo va a pagar? — Con tarjeta · ¿Lo enviamos por correo? · ¿Para qué lo va a usar?",
        ],
        [
          ["—¿Es para regalo? —Sí, es para mi hermana.", "Is it a gift? — Yes, it's for my sister. (para for the recipient)"],
          ["—¿Por qué lo cambia? —Porque no me queda bien.", "Why are you exchanging it? — Because it doesn't fit me. (porque + sentence)"],
        ],
        [
          fb("Answer.", "—¿Es un regalo? —Sí, es ___ mi novio.", "para", "Para marks the recipient: para mi novio. Por mi novio would mean on his behalf."),
        ]
      ),
    ],
    [
      fb("Answer.", "—¿Cuándo lo necesita? —___ el sábado, por favor.", "Para", "Para + day sets a deadline: para el sábado."),
      fb("Answer.", "—¿Lo enviamos? —Sí, ___ correo, por favor.", "por", "Por marks the means of sending: por correo."),
      fb("Answer.", "—¿Qué uso le va a dar? —Es ___ cocinar al vapor.", "para", "Para + infinitive gives the purpose: para cocinar al vapor."),
      fb("Answer.", "—¿Cuánto pagó por el anterior? —Pagué cien euros ___ él.", "por", "Por marks the price: cien euros por él."),
      fb("Answer.", "—¿Por qué lo devuelve? —___ está roto.", "Porque", "Porque (one word, no accent) introduces a reason clause."),
      mc(
        "«—¿Pasa usted ___ aquí a menudo? —Sí, vivo cerca.»",
        ["por", "para", "a", "en"],
        0,
        "Pasar por means to come by a place. \"Para\" would mark a destination, and \"a\" and \"en\" don't form this expression."
      ),
      toEs("It's a present for my father.", "Es un regalo para mi padre.", "Para marks the recipient: para mi padre.", ["Es un regalo para mi papá."]),
    ]
  ),
  L(
    "por-vs-para-drill-3",
    "a2d-por-para-final-sort",
    "Minimal Pairs: The Final Sort",
    "Read the English, decide whether «for» means a deadline, cause, recipient, exchange or route, then choose por or para.",
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
            "Para + time sets a deadline: para las ocho = by eight. \"Por las ocho\" means around eight, and \"a por\" and \"en las ocho\" aren't used this way."
          ),
        ]
      ),
    ],
    [
      mc(
        "«He left for Rome.» (destination)",
        ["Se fue para Roma.", "Se fue por Roma.", "Se fue de Roma.", "Se fue por a Roma."],
        0,
        "Para marks the destination: se fue para Roma. \"Por Roma\" means through Rome, \"de Roma\" means from Rome, and \"por a\" doubles prepositions."
      ),
      mc(
        "«He travelled around Italy for a month.»",
        ["Viajó por Italia por un mes.", "Viajó para Italia para un mes.", "Viajó por Italia para un mes.", "Viajó para Italia por un mes."],
        0,
        "Por marks both the route (por Italia) and the duration (por un mes). Para can't express either here. (Viajó por Italia un mes, or durante un mes, is just as natural.)"
      ),
      mc(
        "«I'm studying for the exam.» (goal)",
        ["Estudio para el examen.", "Estudio por el examen.", "Estudio porque el examen.", "Estudio a el examen."],
        0,
        "Para marks the goal: estudio para el examen. \"Por el examen\" means because of it, \"porque el examen\" needs a verb, and \"a el\" isn't used here."
      ),
      mc(
        "«I'll trade you my sandwich for your apple.»",
        ["Te cambio mi bocadillo por tu manzana.", "Te cambio mi bocadillo para tu manzana.", "Te cambio para mi bocadillo tu manzana.", "Te cambio mi bocadillo porque tu manzana."],
        0,
        "Por marks an exchange: mi bocadillo por tu manzana. \"Para\" isn't an exchange, and \"porque\" needs a clause."
      ),
      fb("Complete.", "El autobús ___ el centro sale cada diez minutos.", "para", "Para marks the destination: el autobús para el centro."),
      fb("Complete.", "Estoy nervioso ___ la entrevista de mañana.", "por", "Por gives the cause of the feeling: nervioso por la entrevista."),
      toEs("I'm worried about my exam.", "Estoy preocupado por mi examen.", "Por gives the cause of the worry: preocupado por mi examen.", ["Estoy preocupada por mi examen."]),
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
        [
          "Specific person or named pet as direct object → a: Llamo a mi madre. Things, places, generic animals → no a: Llamo un taxi. Busco un médico (any doctor) vs. Busco a mi médico (a specific one). Hay never takes a. Tener for family/possession usually doesn't: Tengo dos hermanos.",
          "Why: the a tags the individual who receives the action, so Spanish can move words around without confusing who does what. A thing, a place or 'any doctor' isn't an individual being acted on, so there's nothing to tag.",
        ],
        [
          ["Conozco a tu hermano.", "I know your brother."],
          ["Conozco Barcelona muy bien.", "I know Barcelona very well."],
        ],
        [
          mc(
            "«Espero ___ autobús.»",
            ["el (no a)", "al", "a el", "a la"],
            0,
            "The bus is a thing, so no personal a: espero el autobús. \"Al\" and \"a el\" add a, and \"a la\" is also the wrong gender."
          ),
        ]
      ),
    ],
    [
      fb("A or nothing? (write a, al, or –): \"I visited my grandparents on Sunday.\"", "Visité ___ mis abuelos el domingo.", "a", "Mis abuelos are specific people as direct object, so the personal a: visité a mis abuelos."),
      fb("A or nothing? (write a, al, or –): \"I called the plumber to fix the shower.\"", "Llamé ___ fontanero para arreglar la ducha.", "al", "Specific person: a + el = al."),
      mc(
        "«Busco ___ camarero.» (any waiter)",
        ["un (no a)", "a un", "al", "a el"],
        0,
        "An unspecified person (any waiter) usually takes no personal a: busco un camarero. \"A un\" is possible but suggests a specific one, and \"al\" and \"a el\" mean the waiter."
      ),
      mc(
        "«Quiero mucho ___ mi perro Toby.»",
        ["a", "–", "al", "en"],
        0,
        "A named pet treated like a person takes the personal a: quiero a mi perro Toby. Leaving it out is incorrect with a named pet, \"al\" needs el, and \"en\" doesn't fit."
      ),
      mc(
        "«Tengo ___ tres primos en Chile.»",
        ["– (no a)", "a", "al", "a los"],
        0,
        "Tener with family members normally takes no personal a: tengo tres primos. \"A\", \"al\" and \"a los\" all add it."
      ),
      mc(
        "«No veo ___ nadie.»",
        ["a", "–", "al", "de"],
        0,
        "Nadie and alguien take the personal a as direct objects: no veo a nadie. Leaving it out is wrong, \"al\" needs el, and \"de\" doesn't fit."
      ),
      toEs("I'm looking for my son.", "Busco a mi hijo.", "A specific person as direct object takes the personal a: busco a mi hijo.", ["Estoy buscando a mi hijo."]),
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
        "Remember the rule",
        "A specific person (or a named pet) as the direct object takes the personal a; things, places, 'any person', hay and tener for family don't. The a marks the individual who receives the action. So a message can go wrong two ways: a missing a before a person, or an extra a before a thing.",
        [
          ["Ayer saludé a la profesora.", "Yesterday I greeted the teacher. (a specific person → a)"],
          ["Ayer compré un paraguas.", "Yesterday I bought an umbrella. (a thing → no a)"],
          ["Necesito un dentista.", "I need a dentist. (any dentist → no a)"],
        ],
        []
      ),
      sec(
        "The message",
        "«Ayer vi Marta en el centro. Ella buscaba a una farmacia. Luego llamamos su hermano y visitamos a la catedral.» Two a's are missing and two shouldn't be there. Fix them one by one.",
        [],
        [
          fb("Fix it (write the missing word): \"Yesterday I saw Marta in town.\"", "Ayer vi ___ Marta en el centro.", "a", "Marta is a specific person, so the personal a: vi a Marta."),
        ]
      ),
    ],
    [
      fb("Fix it (write the word that should be there): \"Then we called his brother.\"", "Luego llamamos ___ su hermano.", "a", "Su hermano is a specific person, so the personal a: llamamos a su hermano."),
      mc(
        "«Ella buscaba a una farmacia» — what's wrong?",
        ["The a is extra: a pharmacy is a thing.", "Nothing.", "It should be al.", "It should be en."],
        0,
        "A pharmacy is a thing, so no personal a: buscaba una farmacia. The sentence does need fixing, \"al\" would still add a, and \"en\" changes the meaning."
      ),
      mc(
        "«Visitamos a la catedral» — what's wrong?",
        ["The a is extra: a cathedral is a place.", "It needs al.", "Nothing.", "Visitar never takes objects."],
        0,
        "A cathedral is a place, so no personal a: visitamos la catedral. \"Al\" would still add a, the sentence does need fixing, and visitar does take objects."
      ),
      fb("Fix it: \"I don't know anyone here.\"", "No conozco ___ nadie aquí.", "a", "Nadie as direct object takes the personal a: no conozco a nadie."),
      fb("Fix it: \"Did you invite your classmates?\"", "¿Invitaste ___ tus compañeros?", "a", "Tus compañeros are specific people, so the personal a: invitaste a tus compañeros."),
      ms(
        "Which sentences are correct?",
        ["Llevo a los niños al colegio.", "Llevo la mochila al colegio.", "Llevo a la mochila al colegio.", "Llevo los niños al colegio."],
        [0, 1],
        "People as direct objects take a (llevo a los niños); things don't (llevo la mochila). \"A la mochila\" adds a to a thing, and \"Llevo los niños\" leaves it out with people."
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
        [
          "Remember the rule: something negative must stand in front of the verb. Negative word after the verb → no before it: No viene nadie. No como nunca carne. Negative word before the verb → it is the negative in front, so no second no: Nadie viene. Nunca como carne. Ningún before masculine singular nouns.",
          "English avoids two negatives, Spanish requires them to agree: no ... nada is not 'a double negative that cancels out', it's one negative idea spread across the sentence.",
        ],
        [
          ["No hay nada en la nevera.", "There's nothing in the fridge."],
          ["Nunca llego tarde.", "I'm never late."],
        ],
        [
          fb("Complete.", "No conozco a ___ en esta ciudad.", "nadie", "After no + verb, the negative word follows: no conozco a nadie (personal a for a person)."),
        ]
      ),
    ],
    [
      fb("Put the negative word first.", "___ viene a la fiesta. (nobody)", "Nadie", "Before the verb, no extra no is needed."),
      fb("Put the negative word first.", "___ bebo café por la noche. (never)", "Nunca", "Nunca before the verb."),
      fb("Use no + verb + negative word.", "No me interesa ___ de la tele. (nothing)", "nada", "No… nada."),
      fb("Complete.", "No tengo ___ problema.", "ningún", "Ninguno shortens to ningún before a masculine singular noun: ningún problema."),
      fb("Complete.", "No hay ___ tienda abierta.", "ninguna", "Tienda is feminine, so ninguna."),
      mc(
        "«—No me gusta el té. —A mí ___.»",
        ["tampoco", "también", "nunca", "nada"],
        0,
        "Agreeing with a negative takes tampoco (me neither). \"También\" agrees with a positive, and \"nunca\" and \"nada\" don't form this reply."
      ),
      mc(
        "Which is correct?",
        ["No vino ni Juan ni Pedro.", "No vino ni Juan y Pedro.", "Vino ni Juan ni Pedro.", "No vino o Juan o Pedro."],
        0,
        "Not... either... or is no... ni... ni: No vino ni Juan ni Pedro. \"Ni... y\" mixes patterns, \"Vino ni\" drops no after a verb that comes first, and \"o... o\" means either... or."
      ),
      toEs("I never eat anything in the morning.", "Nunca como nada por la mañana.", "Spanish uses a double negative: nunca... nada = never... anything.", ["No como nada nunca por la mañana.", "Por la mañana nunca como nada."]),
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
        [
          "Remember the rule: every affirmative word has a negative partner, and something negative must stand in front of the verb. So a transformation has two steps: swap each word for its partner, then make sure no or a negative word comes before the verb.",
          "alguien → nadie, algo → nada, siempre → nunca, alguno/a → ninguno/a (algún → ningún), también → tampoco, o… o → ni… ni.",
        ],
        [
          ["Siempre veo a alguien. → Nunca veo a nadie.", "I always see someone. → I never see anyone."],
        ],
        [
          fb("Make it negative.", "Tengo algo para ti. → No tengo ___ para ti.", "nada", "The negative of algo is nada: no tengo nada."),
        ]
      ),
    ],
    [
      fb("Make it negative.", "Alguien llamó. → ___ llamó.", "Nadie", "The negative of alguien is nadie: nadie llamó. Before the verb it needs no extra no."),
      fb("Make it negative.", "Siempre desayuno. → ___ desayuno.", "Nunca", "The negative of siempre is nunca, placed before the verb."),
      fb("Make it negative.", "Tengo algún libro en francés. → No tengo ___ libro en francés.", "ningún", "The negative of algún is ningún before a masculine singular noun."),
      fb("Make it negative.", "Yo también fui. → Yo ___ fui.", "tampoco", "The negative of también is tampoco: yo tampoco fui."),
      fb("Make it negative.", "Quiero pan o galletas. → No quiero ___ pan ni galletas.", "ni", "Neither... nor is ni... ni, after no: no quiero ni pan ni galletas."),
      fb("Make it positive.", "No compré nada. → Compré ___.", "algo", "The positive of nada is algo: compré algo."),
      mc(
        "«¿Hay alguna farmacia por aquí?» — negative answer:",
        ["No, no hay ninguna.", "No, no hay alguna.", "No, hay ninguna no.", "No, nunca hay alguna."],
        0,
        "In the negative, alguna becomes ninguna, after no + verb: No, no hay ninguna. \"Alguna\" doesn't fit a negative, \"hay ninguna no\" misplaces no, and \"nunca hay alguna\" mixes negatives with alguna."
      ),
      toEs("Nobody told me anything.", "Nadie me dijo nada.", "Nadie before the verb, then nada after it: nadie me dijo nada.", ["No me dijo nada nadie."]),
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
        "Remember the rule: take the feminine singular form and add -mente: tranquila → tranquilamente. Adjectives in -e or consonant don't change: feliz → felizmente. Keep any accent: rápidamente. In a series, only the last one takes -mente: clara y lentamente. All of it follows from -mente's origin as the feminine noun la mente (mind): the adjective agrees with it, keeps its own stress, and two adjectives can share one mente.",
        [
          ["Habló clara y tranquilamente.", "She spoke clearly and calmly."],
          ["Normalmente cenamos a las nueve.", "We normally have dinner at nine."],
        ],
        [
          fb("Form the adverb.", "lento → ___", "lentamente", "Adverbs take the feminine form + -mente: lenta → lentamente."),
        ]
      ),
    ],
    [
      fb("Form the adverb.", "Contestó muy ___. (amable)", "amablemente", "-e adjective + -mente."),
      fb("Form the adverb.", "Lo hizo ___. (perfecto)", "perfectamente", "Perfecta + -mente."),
      fb("Form the adverb.", "Se resolvió ___. (fácil)", "fácilmente", "A -mente adverb keeps the written accent of the adjective it comes from."),
      fb("Form the adverb.", "Trabaja rápida y ___. (eficaz)", "eficazmente", "Only the last one takes -mente."),
      mc(
        "Which is the most natural?",
        ["Habló lenta y claramente.", "Habló lentamente y claramente.", "Habló lento y claramente.", "Habló lentamente y clara."],
        0,
        "With two -mente adverbs joined by y, normally only the last keeps -mente: lenta y claramente. Repeating -mente is grammatical but heavy and usually avoided, \"lento\" is masculine, and \"clara\" is missing its -mente."
      ),
      toEs("Luckily, nobody saw it.", "Afortunadamente, nadie lo vio.", "Afortunadamente = luckily; nadie before the verb stands alone, and lo vio means saw it.", ["Por suerte, nadie lo vio."]),
      wo("Mi abuela camina lenta pero tranquilamente por el parque.", "In a series, only the last adverb takes -mente; the first stays as the feminine adjective: lenta pero tranquilamente.", "My grandmother walks slowly but calmly through the park."),
    ]
  ),
  L(
    "personal-a-negation-mente-drill-3",
    "a2d-mixed-a-negation-mente",
    "Mixed Practice: Personal A, Negatives and -Mente",
    "Practise the personal a, negative words (no… nada/nadie/nunca) and -mente adverbs in one mixed round.",
    "6 min",
    [
      sec(
        "Three checks",
        [
          "Remember the rules as three quick checks. 1) Is a specific person (or nadie / alguien) the direct object? → put a in front. 2) Is there a negative word after the verb? → no goes before the verb; a negative word before the verb stands alone. 3) Making an adverb from an adjective? → feminine form + -mente, and in a pair joined by y only the last one takes it.",
          "Run all three checks on every sentence: one sentence can need all of them.",
        ],
        [
          ["No vi a nadie, afortunadamente.", "I didn't see anyone, fortunately. (a nadie: a person; no before the verb; afortunada + -mente)"],
          ["Nunca llamo a mi tía.", "I never call my aunt. (nunca before the verb stands alone; a mi tía)"],
        ],
        [
          fb("Complete.", "No invité ___.", "a nadie", "Nadie as direct object takes the personal a: no invité a nadie."),
        ]
      ),
    ],
    [
      fb("Complete.", "___ me llamó ayer. (nobody)", "Nadie", "When nadie comes before the verb, you don't add no: nadie me llamó."),
      fb("Complete.", "Espero ___ en la plaza.", "a mis amigos", "Specific people as direct object take the personal a: espero a mis amigos."),
      fb("Complete.", "Lo explicó ___. (claro)", "claramente", "Claro → clara + -mente: the adverb is built on the feminine form."),
      fb("Complete.", "No quiero ___ más, gracias.", "nada", "After no + verb, nothing is nada: no quiero nada más."),
      fb("Complete.", "Normal___ me levanto a las siete.", "mente", "Normal is the same for both genders, so -mente is added directly: normalmente."),
      mc(
        "«Nunca ___ nadie en ese bar.»",
        ["veo a", "veo", "no veo a", "veo al"],
        0,
        "Nunca before the verb needs no extra no, and nadie takes the personal a: nunca veo a nadie. \"Veo nadie\" drops a, \"no veo\" adds a second negative before the verb, and \"al\" needs el."
      ),
      toEs("I don't know anyone here.", "No conozco a nadie aquí.", "No + verb + a nadie: nadie is a person, so it takes the personal a, and because it follows the verb, no goes first.", ["Aquí no conozco a nadie."]),
      toEn("Sinceramente, no me gustó nada.", "Honestly, I didn't like it at all.", "Sinceramente = honestly, and no... nada = not at all.", ["Honestly, I didn't like it one bit."]),
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
        [
          "Remember the rules behind the little words. A / al before a specific person as object (a + el = al), never before things. Nadie / nada / nunca / ningún after the verb need no before it; before the verb they stand alone. Tampoco agrees with a negative (también only with a positive), and like nunca it replaces no when it comes first. -mente goes on the feminine form.",
          "Speed round: decide fast, but decide by the rule.",
        ],
        [
          ["Tampoco veo a Marta.", "I don't see Marta either. (tampoco first, so no no; a Marta)"],
          ["No hay ningún problema.", "There's no problem at all. (ningún after the verb, so no first)"],
        ],
        [
          fb("Quick!", "Llamé ___.", "al profesor", "A specific person takes the personal a, and a + el contracts: al profesor."),
        ]
      ),
    ],
    [
      fb("Quick!", "No hay ___ en casa: todos están en el trabajo.", "nadie", "After no hay, 'nobody' is nadie: no hay nadie (double negative)."),
      fb("Quick!", "—No fui. —Yo ___.", "tampoco", "Agreeing with a negative uses tampoco: yo tampoco."),
      { ...fb("Quick!", "No tengo ___ idea.", "ninguna", "Idea is feminine, so ninguna. (The everyday phrase no tengo ni idea is also right.)"), altAnswers: ["ni"] },
      fb("Quick!", "Veo ___ todos los días.", "a mi vecina", "A specific person takes the personal a: veo a mi vecina."),
      fb("Quick!", "Lo hizo ___. (rápido)", "rápidamente", "Rápido → rápida + -mente; the written accent stays: rápidamente."),
      fb("Quick!", "No me dijo ___, ni una palabra.", "nada", "Nothing after a negative verb is nada."),
      fb("Quick!", "Ella ___ llega tarde. (never)", "nunca", "Nunca before the verb stands alone, with no extra no."),
      mc(
        "«Tengo ___ dos gatos y un perro.»",
        ["– (no a)", "a", "al", "a los"],
        0,
        "Tener for possession takes no personal a: tengo dos gatos. \"A\", \"al\" and \"a los\" all add it."
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
        [
          "Remember the rule: a negative word before the verb stands alone (nunca bebo), after the verb it needs no in front (no bebo nunca). In a negative sentence every \"any\" turns negative: nada, nadie, ningún / ninguna. To agree with someone's negative, use tampoco: yo tampoco.",
          "The rule doesn't change with the tense, so mix them: the present for what you never do now, the imperfect for childhood habits (de niño nunca comía…), the preterite for something that never happened (nunca fui a…).",
        ],
        [
          ["Nunca tomo azúcar en el té.", "I never take sugar in my tea. (nunca first: no no)"],
          ["De pequeña no veía ningún programa de miedo.", "As a little girl I didn't watch any scary programmes. (imperfect habit; no + ningún)"],
          ["—No hago deporte. —Yo tampoco.", "I don't do sport. — Me neither. (tampoco agrees with a negative)"],
        ],
        [
          mc(
            "«I have never been to Japan.» Which is a natural Latin American way to say it?",
            ["Nunca fui a Japón.", "Nunca iba a Japón.", "Nunca voy a Japón ayer.", "Nunca no fui a Japón."],
            0,
            "Nunca + preterite describes never having done something (common in Latin America): nunca fui. \"Iba\" is a habit, \"voy... ayer\" mixes tenses, and \"Nunca no\" doubles the negative."
          ),
        ]
      ),
    ],
    [
      toEs("I never watch TV in the morning.", "Nunca veo la tele por la mañana.", "Nunca before the verb stands alone (no extra no): nunca veo.", ["No veo nunca la tele por la mañana.", "Nunca veo la televisión por la mañana."]),
      toEs("I don't know anyone in this city.", "No conozco a nadie en esta ciudad.", "No + verb + a nadie (personal a for a person).", ["En esta ciudad no conozco a nadie."]),
      toEs("I didn't buy anything.", "No compré nada.", "No + verb + nada: in a negative sentence, 'anything' is nada, never algo.", []),
      toEs("My brother doesn't smoke and I don't either.", "Mi hermano no fuma y yo tampoco.", "Agreeing with a negative: yo tampoco (me neither).", []),
      fb("Complete.", "No tengo ___ hermano.", "ningún", "Ninguno shortens to ningún before a masculine singular noun."),
      { ...fb("Complete.", "De niña ___ comía pescado.", "nunca", "Nunca goes before the verb; a childhood habit takes the imperfect: comía."), en: "As a girl I [never] ate fish." },
      wo("En mi pueblo nunca pasa nada interesante.", "Nunca before the verb stands alone, and then nada after it: two negatives together are normal in Spanish.", "Nothing interesting ever happens in my town."),
    ]
  ),
  L(
    "asking-giving-directions-2",
    "a2d-directions-sequence",
    "Build-Up: Giving Directions Step by Step",
    "You'll learn to chain usted commands and location phrases (siga recto, gire, cruce, enfrente de, al final de) into a complete route.",
    "6 min",
    [
      sec(
        "Direction chunks",
        [
          "Remember the rule: a route is a chain of usted commands plus location chunks. The commands take the opposite vowel (siga, gire, tome, cruce), and where something is always takes estar (está enfrente de, al lado de, al final de).",
          "Why: the commands tell the stranger what to do, and estar tells them where the place is. A tú form (sigue, cruza) is too familiar for a stranger, and ser (es enfrente) says what something is, not where. Link the steps with luego, después or y ahí, and remember that de + el contracts: enfrente del banco.",
        ],
        [
          ["Siga recto y gire la segunda a la izquierda.", "Go straight on and take the second left."],
          ["La farmacia está enfrente del banco.", "The pharmacy is opposite the bank."],
        ],
        [
          mc(
            "«Enfrente de» means…",
            ["opposite", "next to", "behind", "at the end of"],
            0,
            "Enfrente de means opposite (across from). Next to is al lado de, behind is detrás de, and at the end of is al final de."
          ),
          mc(
            "«Cruce el puente y el museo ___ al final de la calle.»",
            ["está", "es", "hay", "tiene"],
            0,
            "El museo is a specific place, and location takes estar: está al final. Es is ser (what it is), hay introduces an unspecified place (hay un museo), and tiene means has."
          ),
        ]
      ),
    ],
    [
      { ...fb("Complete.", "Siga todo ___ hasta el semáforo.", "recto", "Seguir recto (or todo recto) means to go straight on."), altAnswers: ["derecho"] },
      fb("Complete.", "Gire a la ___ en la esquina. (right)", "derecha", "The opposite is a la izquierda (to the left); both directions take a la."),
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
      toEs("Go straight on and turn right at the church.", "Siga recto y gire a la derecha en la iglesia.", "Usted commands: siga recto (go straight on) and gire a la derecha (turn right).", ["Siga todo recto y gire a la derecha en la iglesia."]),
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
        [
          "Remember the rule: hay asks whether one exists (¿Hay un cajero por aquí?), and está locates a specific place (¿Dónde está el hospital?). Distance and time also take estar: está a diez minutos andando.",
          "Why: hay introduces something new, so it goes with un / una or no article (hay un banco, hay farmacias). Once the place is known (el, la, a name), you ask where it is with estar. In short answers, uno / una / ninguno stand in for the noun: sí, hay uno; no, no hay ninguna.",
        ],
        [
          ["—¿Hay una parada de metro cerca? —Sí, hay una a dos calles.", "Is there a metro stop nearby? — Yes, there's one two streets away."],
          ["—¿Dónde está el ayuntamiento? —Está a diez minutos andando.", "Where is the town hall? — It's a ten-minute walk."],
        ],
        [
          mc(
            "«¿___ un supermercado por aquí?»",
            ["Hay", "Está", "Es", "Tiene"],
            0,
            "Asking whether an unspecified place exists uses hay: ¿Hay un supermercado? \"Está\" is for specific places, \"Es\" is ser, and \"Tiene\" means has."
          ),
          mc(
            "«Perdone, ¿dónde ___ los baños?»",
            ["están", "hay", "son", "tienen"],
            0,
            "Los baños are specific and plural, so locate them with están. Hay doesn't follow dónde for a known place, son is ser, and tienen means have."
          ),
        ]
      ),
    ],
    [
      mc(
        "«¿Dónde ___ el Museo Nacional?»",
        ["está", "hay", "es", "tiene"],
        0,
        "A specific, named place is located with estar: ¿Dónde está el Museo Nacional? \"Hay\" is for unspecified things, \"es\" is ser, and \"tiene\" means has."
      ),
      fb("Answer.", "—¿Está lejos? —No, está muy ___.", "cerca", "Cerca means close; the opposite of lejos."),
      fb("Answer.", "—¿Cuánto se tarda? —Unos diez minutos ___ pie.", "a", "A pie means on foot."),
      fb("Answer.", "—¿Hay un cajero por aquí? —Sí, hay ___ al lado del banco.", "uno", "Uno replaces un cajero when the noun is dropped: hay uno."),
      fb("Ask.", "Perdone, ¿___ está la estación?", "dónde", "Dónde (with an accent in questions) asks where."),
      toEs("Is there a pharmacy near here?", "¿Hay una farmacia cerca de aquí?", "Existence of an unspecified place → hay.", ["¿Hay alguna farmacia por aquí?", "¿Hay una farmacia por aquí?"]),
      toEn("La biblioteca está a cinco minutos andando.", "The library is a five-minute walk away.", "A cinco minutos andando gives distance in walking time.", ["The library is five minutes' walk away.", "The library is five minutes away on foot."]),
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
        [
          "Remember the rule: everything you say to a waiter is softened. Order with para mí... or the polite imperfect quería (I'd like), ask with a present-tense question (¿me trae...?, ¿nos trae...?), and name the course with de primero, de segundo or de postre.",
          "Why: quiero or a command (tráigame, dame) sounds like a demand, while quería and the question form make the same request sound like asking. Me (to me) or nos (to us) goes before trae, and the waiter gets usted: trae, not traes.",
          "Paying: La cuenta, por favor. ¿Se puede pagar con tarjeta?",
        ],
        [
          ["De primero quería la sopa del día.", "For the first course I'd like the soup of the day."],
          ["¿Nos trae la cuenta, por favor?", "Could you bring us the bill, please?"],
        ],
        [
          fb("Complete.", "___ mí, el pollo con patatas.", "Para", "Para mí means for me when ordering."),
          mc(
            "You want the dessert menu (la carta de postres) for the whole table. Which is best?",
            ["¿Nos trae la carta de postres?", "Tráenos la carta de postres.", "¿Nos traes la carta de postres?", "Queremos la carta de postres ya."],
            0,
            "A present-tense usted question with nos (to us) is polite and covers the whole table. Tráenos is a blunt tú command, traes is the tú form, and queremos... ya sounds like a demand."
          ),
        ]
      ),
    ],
    [
      fb("Complete.", "De ___ quería una ensalada mixta. (first course)", "primero", "Restaurant menus split the meal into de primero (first course), de segundo (main) and de postre (dessert)."),
      fb("Complete.", "¿Me ___ un vaso de agua, por favor? (traer, usted)", "trae", "A present-tense question like ¿Me trae…? is a normal, polite way to ask a waiter for something."),
      fb("Complete.", "___ una mesa para cuatro, por favor. (querer, polite imperfect)", "Quería", "Polite imperfect."),
      fb("Complete.", "De ___ tenemos flan y fruta. (dessert)", "postre", "De postre."),
      mt(
        "Match the waiter's question and your answer.",
        [
          ["¿Qué van a tomar?", "Para mí, la paella."],
          ["¿Algo de beber?", "Agua sin gas, por favor."],
          ["¿Van a tomar postre?", "No, gracias, solo café."],
        ],
        "¿Qué van a tomar? asks for your order, ¿Algo de beber? asks about drinks and ¿Van a tomar postre? about dessert; para mí... and no, gracias are the natural answers."
      ),
      toEs("For the main course I'd like the fish.", "De segundo quería el pescado.", "De segundo means for the main course, and quería (imperfect) softens the request politely.", ["De segundo, el pescado, por favor.", "De segundo quiero el pescado.", "De segundo quisiera el pescado."]),
      wo("¿Nos trae un poco más de pan, por favor?", "Nos (to us) goes before trae; a present-tense question like ¿Nos trae...? is the normal polite way to ask a waiter.", "Could you bring us a bit more bread, please?"),
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
        "Remember the rule",
        [
          "In a past story, the imperfect describes the scene and the state of things (había mucha gente, la sopa estaba fría, el camarero estaba ocupado), and the preterite tells what happened, one event after another (fuimos, pedimos, llegó, nos trajo).",
          "Why: the listener needs to know which verbs are scenery and which move the story on. Before each gap ask: is this how things were, or the next thing that happened?",
        ],
        [
          ["La pizza estaba quemada.", "The pizza was burnt. (its state → imperfect)"],
          ["La camarera nos trajo otra pizza.", "The waitress brought us another pizza. (an event → preterite)"],
        ],
        [
          mc(
            "«Cuando abrí la botella, el vino ___ caliente.»",
            ["estaba", "estuvo", "está", "fue"],
            0,
            "The wine's state at that moment is description, so it's imperfect: estaba. Estuvo would present it as a closed event, está is present, and fue is ser (or ir)."
          ),
        ]
      ),
      sec(
        "The story, with the gaps",
        "«El sábado ___ (1, ir) a un restaurante nuevo. ___ (2, haber) mucha gente y el camarero estaba muy ocupado. ___ (3, pedir) la paella, pero tardó una hora. Cuando llegó, ___ (4, estar) fría. Le dijimos al camarero que la paella estaba fría y nos ___ (5, traer) otra. Al final no nos cobró el postre.» Fill the gaps in the exercises.",
        [],
        [
          mc(
            "How did it end?",
            ["They didn't pay for dessert.", "They left without paying.", "They never got their food.", "They ate at home."],
            0,
            "The text says \"No nos cobró el postre\": he didn't charge them for dessert. They did pay the rest, got their food and ate at the restaurant."
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
        "Decir algo a alguien, and a + el contracts: al camarero. \"A\" alone needs an article, \"el\" drops a, and \"del\" means from the."
      ),
      toEs("The waiter was very kind and brought us another dish.", "El camarero fue muy amable y nos trajo otro plato.", "Fue muy amable evaluates his behavior (preterite of ser), and traer is irregular: nos trajo.", ["El camarero era muy amable y nos trajo otro plato.", "El mesero fue muy amable y nos trajo otro plato.", "El mesero era muy amable y nos trajo otro plato."]),
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
        [
          "Remember the rules, in the order you need them. 1) Tense: one finished event (ayer, anoche, el lunes) → preterite; a habit or a background scene (de niño, siempre, mientras) → imperfect. 2) Pronoun: lo / la / los / las replace the thing or person; me / te / le / nos / les say to whom; reflexives (me levanto) refer back to the subject. 3) Position: before the conjugated verb, indirect before direct, and le / les turn into se before lo / la.",
          "Switching between topics forces you to choose the rule each time, just like in a real conversation. Decide the tense first, then the pronoun and its position.",
        ],
        [
          ["¿El libro? Lo leí en dos días.", "The book? I read it in two days. (one finished event; lo = el libro)"],
          ["De niña me acostaba a las ocho.", "As a girl I went to bed at eight. (a habit; reflexive me)"],
          ["¿La bici? Se la presté a Luis.", "The bike? I lent it to Luis. (le + la → se la)"],
        ],
        [
          fb("Complete.", "¿La película? ___ vimos anoche.", "La", "La película is feminine singular, so la, placed before the conjugated verb; anoche makes it a finished event (preterite vimos)."),
        ]
      ),
    ],
    [
      fb("Complete.", "¿Los regalos? Mis padres ___ compraron ayer.", "los", "Los regalos is masculine plural, so los, before the verb."),
      fb("Complete.", "De pequeño ___ por la noche. (yo)", "me duchaba", "Ducharse with yo takes me; a childhood habit uses the imperfect: me duchaba."),
      fb("Complete.", "¿Le dijiste la verdad a tu jefe? — Sí, ___ la dije.", "se", "Le can't stand before la, so it becomes se: se la dije (se = to him, la = la verdad)."),
      fb("Complete.", "Ayer ___ tardísimo.", "nos levantamos", "Levantarse with nosotros takes nos: nos levantamos."),
      fb("Complete.", "Cuando sonó el teléfono, yo ___.", "me duchaba", "Ducharse with yo takes me; the shower was in progress when the phone rang (imperfect)."),
      mc(
        "«¿Las fotos? ___ a mi abuela el domingo.» (mandar, yo)",
        ["Se las mandé", "Le las mandé", "Se los mandaba", "Las le mandé"],
        0,
        "One event (preterite), and le becomes se before las: se las mandé. \"Le las\" skips the change, \"se los mandaba\" is masculine and imperfect, and \"Las le\" has the wrong order."
      ),
      toEs("My mother called me and told me the news.", "Mi madre me llamó y me contó la noticia.", "Me (to me / me) goes before each conjugated verb: me llamó, me contó. Both are single finished events, so preterite.", ["Mi madre me llamó y me dio la noticia.", "Mi mamá me llamó y me contó la noticia."]),
      toEn("De niño mi abuelo me llevaba al parque.", "When I was a kid my grandfather used to take me to the park.", "A childhood habit takes the imperfect: me llevaba = used to take me.", ["As a child my grandfather took me to the park."]),
    ]
  ),
  L(
    "a2-comprehensive-review-1",
    "a2d-cumulative-circuit-2",
    "Cumulative Circuit 2: Por/Para + Future + Comparisons",
    "Mix the future tense, por vs. para and comparisons (más… que, tan… como, el mejor) in one interleaved round.",
    "7 min",
    [
      sec(
        "Three tools for talking about plans",
        [
          "Remember the rules. Future: infinitive + -é, -ás, -á, -emos, -éis, -án (viajaré), with a few irregular stems (tendr-, har-, saldr-, podr-). Para points to an end point: purpose, destination, deadline. Por covers route, price per unit, duration and cause. Comparisons: más / menos… que for unequal, tan… como for equal, and the irregulars mejor, peor, mayor, menor (never más bueno).",
          "Plans need all three at once: when (future), why and where (por / para) and which option is better (comparisons).",
        ],
        [
          ["El año que viene viajaré por Chile para ver los glaciares.", "Next year I'll travel around Chile to see the glaciers. (future; por = around; para = purpose)"],
          ["El tren será tan caro como el avión.", "The train will be as expensive as the plane. (tan… como for equal)"],
        ],
        [
          fb("Complete.", "Ahorraré dinero ___ comprar una casa.", "para", "Para + infinitive gives the purpose: para comprar una casa. Por comprar would be a cause."),
        ]
      ),
    ],
    [
      fb("Complete.", "El próximo verano ___ por Europa. (viajar, nosotros)", "viajaremos", "El próximo verano points forward, so the future (infinitive + -emos)."),
      fb("Complete.", "Iremos ___ tren porque es más cómodo.", "en", "To travel by a means of transport, use en: iremos en tren. (Por avión, por barco usually describe how something is sent.)"),
      fb("Complete.", "El tren es ___ cómodo que el autobús.", "más", "Unequal comparison: más cómodo que."),
      fb("Complete.", "Necesitaré el pasaporte ___ el lunes.", "para", "Para + day sets a deadline: para el lunes."),
      fb("Complete.", "Pagaremos unos cien euros ___ noche.", "por", "Por means per: cien euros por noche."),
      fb("Complete.", "Será el ___ viaje de nuestra vida. (bueno)", "mejor", "The superlative of bueno is el mejor, never el más bueno."),
      mc(
        "«Estaremos en Roma ___ una semana.» (for a week)",
        ["por", "en", "a", "de"],
        0,
        "Of these options, por is the one that can express duration. (Estaremos en Roma una semana, with no preposition, or durante una semana are just as natural.)"
      ),
      toEs("Next year I'll have more time than this year.", "El año que viene tendré más tiempo que este año.", "Tener has the future stem tendr-: tendré, with más... que for the comparison.", ["El próximo año tendré más tiempo que este año."]),
    ]
  ),
  L(
    "a2-comprehensive-review-1",
    "a2d-fix-paragraph-a2-email",
    "Fix the Paragraph: An Email Full of Elementary Errors",
    "One email, eight errors from eight different Elementary topics. Find and fix each one.",
    "8 min",
    [
      sec(
        "The email",
        [
          "Remember the rules you'll need: preterite for one finished event, imperfect for background and habits; weather with hacer; mayor / mejor never take más; encantar and gustar take le / les; para for a recipient; a negative word before the verb drops no; irregular preterites (hizo, dijeron); object pronouns before a conjugated verb.",
          "A learner wrote this email. It has eight errors, one from each topic above. Find them before you start the exercises:",
          "«Querida Ana: el verano pasado íbamos a México. Estuvo mucho calor. Mi hermano es más mayor que yo y lo encanta la comida picante. Compré un regalo por ti. Nadie no me ayudó con las maletas. Mi madre hació muchas fotos. ¡Veré te pronto!»",
        ],
        [
          ["Mi madre es mayor que mi padre.", "My mother is older than my father. (mayor already means 'older')"],
          ["Te escribiré la semana que viene.", "I'll write to you next week. (te before the conjugated verb)"],
        ],
        [
          fb("Fix it.", "El verano pasado ___ a México. (a learner wrote: íbamos — one trip)", "fuimos", "One trip is a single event, so the preterite: fuimos, not íbamos."),
        ]
      ),
    ],
    [
      { ...fb("Fix it.", "___ mucho calor todos los días. (a learner wrote: Estuvo)", "Hacía", "Weather uses hacer, and as background the imperfect: hacía calor, not estuvo. (Hizo also works if you sum up the whole trip.)"), altAnswers: ["Hizo"] },
      fb("Fix it.", "Mi hermano es ___ que yo. (a learner wrote: más mayor)", "mayor", "Mayor is already a comparative (older), so it never takes más."),
      fb("Fix it.", "A mi hermano ___ encanta la comida picante. (a learner wrote: lo)", "le", "Encantar works like gustar and takes the indirect pronoun le, not lo."),
      fb("Fix it.", "Compré un regalo ___ ti. (a learner wrote: por)", "para", "Para marks the recipient: para ti, not por ti."),
      fb("Fix it.", "___ me ayudó con las maletas. (a learner wrote: Nadie no)", "Nadie", "No double no when nadie comes first."),
      fb("Fix it.", "Mi madre ___ muchas fotos. (a learner wrote: hació)", "hizo", "Hacer has the irregular preterite hizo, not hació."),
      mc(
        "Which is the correct closing?",
        ["¡Te veré pronto!", "¡Veré te pronto!", "¡Te veía pronto!", "¡Te vi pronto!"],
        0,
        "A future promise (veré) with the pronoun before the verb: ¡Te veré pronto! \"Veré te\" puts te after the verb, and \"veía\" and \"vi\" are past."
      ),
      fb("Complete with the pronoun.", "___ compré un regalo en México. (I bought you a present in Mexico.)", "Te", "You receive the present, so the indirect pronoun te goes before the preterite compré. Ti only appears after a preposition (para ti)."),
    ]
  ),
  L(
    "a2-comprehensive-review-1",
    "a2d-say-it-yourself-introduce",
    "Say It Yourself: Introduce Yourself — Past, Present, Future",
    "A complete self-introduction that uses every Elementary tense: where you lived, what you do, what you'll do.",
    "7 min",
    [
      sec(
        "Three time frames",
        [
          "Remember the rule: each part of your life story has its tense, and the time word tells you which. Background and habits in the past (de niño, antes, todos los veranos) → imperfect: vivía, era. Single events with a date (en 2018, el año pasado) → preterite: me mudé, empecé. Your life now (ahora, este año) → present: trabajo. Plans (el año que viene, algún día) → future: empezaré.",
          "Why it matters: me mudaba en 2018 would make the move sound like a repeated habit, and vivo de niño mixes now with then. Match the tense to the time word and the story makes sense.",
        ],
        [
          ["De pequeño era muy hablador.", "As a little boy I was very chatty. (background: imperfect)"],
          ["En 2016 conocí a mi mejor amiga.", "In 2016 I met my best friend. (one event with a date: preterite)"],
          ["Este año aprendo a nadar, y el que viene haré un viaje largo.", "This year I'm learning to swim, and next year I'll take a long trip. (present, then future)"],
        ],
        [
          mc(
            "Which sentence talks about a future plan?",
            ["El año que viene estudiaré alemán.", "El año pasado estudié alemán.", "Antes estudiaba alemán.", "Estudio alemán."],
            0,
            "El año que viene with the future (estudiaré) is a plan. \"Estudié\" and \"estudiaba\" are past, and \"estudio\" is present."
          ),
        ]
      ),
    ],
    [
      fb("Complete with the right past tense (vivir).", "Cuando era niño, ___ cerca del mar. (When I was a child, I lived near the sea.)", "vivía", "Childhood is background, so the imperfect: vivía. Viví would make your whole childhood one closed event."),
      toEs("En 2019 me mudaba a Madrid.", "En 2019 me mudé a Madrid.", "Moving in 2019 is a single event with a date, so the preterite: me mudé. Me mudaba would make it an ongoing or repeated action.", [], "Correct the sentence."),
      mc("'Now I work in a hospital.'", ["Ahora trabajo en un hospital.", "Ahora trabajaba en un hospital.", "Ahora trabajé en un hospital."], 0, "Ahora (now) takes the present: trabajo. The imperfect and preterite would push your job into the past."),
      toEs("Empiezo un curso nuevo.", "El año que viene empezaré un curso nuevo.", "A plan takes the future: empezar is regular, so infinitive + -é: empezaré. The time phrase goes first or last.", ["El próximo año empezaré un nuevo curso.", "El año que viene comenzaré un curso nuevo.", "Empezaré un curso nuevo el año que viene.", "El próximo año empezaré un curso nuevo."], "Change it to the future with el año que viene."),
      fb("Complete.", "Me gusta más la ciudad ___ el pueblo.", "que", "Me gusta más X que Y: the comparison uses que."),
      fb("Complete.", "Estudio español ___ hablar con mis vecinos.", "para", "Para + infinitive gives the purpose: para hablar."),
      wo("Algún día volveré a vivir cerca del mar.", "Algún día points to the future: volveré. Volver a + infinitive = to do something again.", "Someday I'll live near the sea again."),
      toEn("Antes era muy tímido, pero ahora hablo con todo el mundo.", "I used to be very shy, but now I talk to everyone.", "Antes takes the imperfect (era), and ahora the present (hablo).", ["Before I was very shy, but now I talk to everybody."]),
    ]
  ),
  L(
    "a2-comprehensive-review-1",
    "a2d-speed-round-a2-traps",
    "Speed Round: The 10 Biggest Elementary Traps",
    "The mistakes Elementary learners make most, in one fast round: fue (ser/ir), lo vs. le, por vs. para, era vs. fue, hizo, dijeron, más mayor, se lo, nadie + no and gustan.",
    "6 min",
    [
      sec(
        "The traps",
        [
          "Remember the rule behind each trap. 1) Fue is both ser and ir in the preterite: context decides. 2) Lo / la for the person or thing acted on, le for the person who receives (dar, decir, contar algo a alguien). 3) Para for end points, por for cause, route, means, exchange. 4) Era describes, fue sums up a finished event. 5) Hacer → hizo. 6) J-stems drop the i: dijeron, trajeron. 7) Mayor, menor, mejor, peor are already comparatives: no más. 8) Le / les + lo / la → se lo / se la. 9) A negative word before the verb drops no. 10) Gustar agrees with the thing liked: gustan with plurals.",
          "Speed round: these are the mistakes Elementary learners make most. Decide fast, but by the rule.",
        ],
        [
          ["Me gustan los perros, pero no tengo ninguno.", "I like dogs, but I don't have any. (gustan: los perros is plural)"],
          ["¿Las entradas? Se las di a Pablo.", "The tickets? I gave them to Pablo. (le + las → se las)"],
        ],
        [
          fb("Quick!", "Ellos me ___ la verdad. (decir, preterite)", "dijeron", "Decir has a j-stem in the preterite (dij-), and j-stems drop the i in the ellos ending: dijeron, not dijieron."),
        ]
      ),
    ],
    [
      fb("Quick!", "¿Qué ___ tu hermano ayer? (hacer)", "hizo", "Hacer → hizo (irregular preterite, no accent)."),
      fb("Quick!", "¿El dinero? Ya ___ di a Juan. (le + lo)", "se lo", "Le can't stand before lo, so it becomes se: se lo di (se = to Juan, lo = el dinero)."),
      fb("Quick!", "Me ___ las películas de miedo. (gustar)", "gustan", "Plural subject → gustan."),
      fb("Quick!", "Invité ___.", "a mis vecinos", "Specific people as direct object take the personal a: invité a mis vecinos."),
      fb("Quick!", "Llamé a mi abuela y ___ conté todo.", "le", "Contar algo a alguien: you tell something (direct) to someone (indirect), so the person is le."),
      fb("Quick!", "Trabajo aquí ___ ganar dinero.", "para", "Para + infinitive gives the purpose: para ganar dinero."),
      fb("Quick!", "Mi hermana es ___ que yo. (older)", "mayor", "Mayor already means 'older', so it never takes más."),
      mc(
        "«La fiesta ___ genial; ___ a las once.» (ser / empezar)",
        ["fue / empezó", "era / empezaba", "fue / empezaba", "era / empezó siempre"],
        0,
        "Fue sums up the finished party, and empezó is one event. \"Era\" describes background, \"empezaba\" makes the start ongoing, and \"siempre\" turns it into a habit."
      ),
    ]
  ),
  L(
    "a2-comprehensive-review-2",
    "a2d-story-cloze-market-day",
    "Story Cloze: A Day at the Market",
    "A full Elementary story with gaps from every topic: tenses, pronouns, por/para, comparisons and negation.",
    "8 min",
    [
      sec(
        "The story",
        [
          "Remember the rules you'll need: preterite for the events of the story (fui, compró), imperfect for the scene (hacía sol, había); por for a part of the day, para + infinitive for a purpose; más… que to compare; object pronouns before the verb (las compró, nos regaló); no + verb + nada.",
          "Read the story and work out each gap from the rule before you fill it in the exercises:",
          "«El sábado ___ la mañana fui al mercado con mi abuela. ___ sol y había mucha gente. Mi abuela quería comprar fruta ___ hacer una tarta. Las fresas eran ___ caras que las naranjas, pero ___ compró de todos modos. El vendedor ___ regaló unas cerezas. No compramos ___ más.»",
        ],
        [
          ["Por la tarde llovía mucho.", "In the afternoon it was raining hard. (por + part of the day; imperfect for weather)"],
          ["¿Los tomates? Los compré yo.", "The tomatoes? I bought them. (los before the verb)"],
        ],
        [
          mc(
            "Why did the grandmother buy fruit?",
            ["to make a cake", "for a party", "because it was cheap", "to sell it"],
            0,
            "The text says \"para hacer una tarta\": she bought fruit to make a cake. A party, a bargain and selling aren't the reason given."
          ),
        ]
      ),
    ],
    [
      fb("Fill in.", "El sábado ___ la mañana fui al mercado.", "por", "Parts of the day take por: por la mañana."),
      fb("Fill in.", "___ sol y había mucha gente. (hacer)", "Hacía", "Weather is background to the story, so the imperfect of hacer: hacía sol."),
      fb("Fill in.", "Mi abuela quería comprar fruta ___ hacer una tarta.", "para", "Para + infinitive gives the purpose: para hacer una tarta."),
      fb("Fill in.", "Las fresas eran ___ caras que las naranjas.", "más", "Unequal comparison: más caras que."),
      fb("Fill in.", "¿Las fresas? Mi abuela ___ compró de todos modos.", "las", "Las fresas is feminine plural, so las, before the verb."),
      fb("Fill in.", "El vendedor ___ regaló unas cerezas. (a nosotros)", "nos", "The seller gave the cherries to us: to us is the indirect object, nos, placed before the verb."),
      fb("Fill in.", "No compramos ___ más.", "nada", "After no + verb, nothing is nada: no compramos nada más."),
      toEs("My grandmother made the best cake in the world.", "Mi abuela hizo la mejor tarta del mundo.", "Hacer → hizo, and the superlative la mejor... del mundo uses de.", ["Mi abuela hizo el mejor pastel del mundo."]),
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
        [
          "Remember the rule: the time word picks the tense. Hoy → present; ayer, el lunes → preterite (one finished event); antes siempre, de niño → imperfect (habit); mañana, el año que viene → future.",
          "Only the verb changes. Object and reflexive pronouns stay exactly where they were, right before the conjugated verb: Hoy se lo digo. → Ayer se lo dije. → Antes siempre se lo decía. → Mañana se lo diré. Watch the irregular stems: preterite hic-, dij-, tuv-, pus-, traj-; future har-, dir-, tendr-, pondr-.",
        ],
        [
          ["Hoy la veo. / Ayer la vi. / Antes la veía. / Mañana la veré.", "Today I see her. / Yesterday I saw her. / I used to see her. / Tomorrow I'll see her."],
        ],
        [
          fb("Change it to the preterite.", "Hoy lo hago. → Ayer lo ___.", "hice", "Hacer has the preterite stem hic-: hice."),
        ]
      ),
    ],
    [
      fb("Change it to the imperfect.", "Hoy lo hago. → Antes siempre lo ___.", "hacía", "A habit in the past takes the imperfect: hacía (hacer is regular in the imperfect)."),
      fb("Change it to the future.", "Hoy lo hago. → Mañana lo ___.", "haré", "Hacer has the future stem har-: haré."),
      fb("Change it to the preterite.", "Hoy nos vamos temprano. → Ayer nos ___ temprano.", "fuimos", "Irse in the preterite: nos fuimos."),
      fb("Change it to the imperfect.", "Hoy nos vamos temprano. → De niños siempre nos ___ temprano.", "íbamos", "A childhood habit takes the imperfect, and ir's imperfect is íbamos."),
      fb("Change it to the future.", "Hoy te lo traigo. → Mañana te lo ___.", "traeré", "Traer is regular in the future: traeré."),
      fb("Change it to the preterite.", "Hoy te lo traigo. → Ayer te lo ___.", "traje", "Traer has the irregular preterite stem traj-: traje."),
      mc(
        "«Hoy puedo salir.» → Ayer…",
        ["pude salir.", "podía salir ayer siempre.", "podré salir.", "puedo salir."],
        0,
        "Ayer calls for the preterite: pude. \"Podía... siempre\" is a habit, \"podré\" is future, and \"puedo\" is present."
      ),
      toEs("Tomorrow I'll tell him (it = the secret).", "Mañana se lo diré.", "Decir has the future stem dir-: diré, and le + lo becomes se lo.", ["Se lo diré mañana."]),
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
        [
          "Remember the rule: answer in the tense of the question, and switch the person. ¿Qué hiciste? (preterite: a finished event) → Hice… ¿Había mucha gente? / ¿Cómo era? (imperfect: description) → Había… / Era… ¿Qué vas a hacer? / ¿Qué harás? (plans) → Voy a… / Haré… Tú becomes yo (hiciste → hice), and te becomes me (¿te gustó? → me gustó).",
        ],
        [
          ["—¿Había mucha gente en el concierto? —Sí, estaba lleno de gente.", "Were there a lot of people at the concert? — Yes, it was packed."],
        ],
        [
          fb("Answer.", "—¿Adónde fuiste el sábado? —___ al concierto de Rosalía.", "Fui", "Ir in the preterite, yo: fui."),
        ]
      ),
    ],
    [
      fb("Answer.", "—¿Con quién fuiste? —___ con mis compañeros de piso.", "Fui", "The question uses tú (fuiste), so the answer uses yo: fui."),
      fb("Answer.", "—¿Cómo era el lugar? —___ enorme y muy moderno.", "Era", "Describing a place takes the imperfect: era enorme."),
      fb("Answer.", "—¿Qué hiciste el domingo? —___ todo el día. (descansar)", "Descansé", "¿Qué hiciste? asks about a finished event, so answer in the preterite, yo form: descansé (stress on the end)."),
      { ...fb("Answer.", "—¿Te gustó el concierto? —Sí, me ___ muchísimo.", "encantó", "Encantar in the preterite for a single event: me encantó (or simply me gustó muchísimo)."), altAnswers: ["gustó"] },
      fb("Answer.", "—¿Qué harás el próximo fin de semana? —___ a mis padres. (visitar)", "Visitaré", "¿Qué harás? is future, so answer with the future in the yo form: visitaré."),
      fb("Answer.", "—¿Les llevarás algo? —Sí, ___ llevaré flores.", "les", "Them as recipients takes the indirect pronoun les: les llevaré flores."),
      mc(
        "«—¿Estabas cansado el lunes? —Sí, ___ agotado.»",
        ["estaba", "estuve", "estoy", "estaré"],
        0,
        "The question asks about your state that day with the imperfect, so the answer matches: estaba agotado. \"Estoy\" is present, \"estaré\" future, and \"estuve\" would switch to a summed-up event."
      ),
      toEs("—What will you do on Sunday? —I'll stay home.", "—¿Qué harás el domingo? —Me quedaré en casa.", "Hacer → harás (stem har-), and quedarse → me quedaré.", ["—¿Qué vas a hacer el domingo? —Me voy a quedar en casa."]),
    ]
  ),
  L(
    "a2-comprehensive-review-2",
    "a2d-minimal-pairs-a2-final",
    "Minimal Pairs: Elementary Final Contrasts",
    "Fue/era, lo/le, por/para, conocí/conocía, tan/tanto: eight pairs that sum up the hardest Elementary choices.",
    "7 min",
    [
      sec(
        "Eight pairs",
        "Choose between the two options in each sentence. Every pair comes from a different Elementary topic, so you have to switch rules quickly.",
        [
          ["La cena fue deliciosa. / La casa era grande.", "Evaluation of an event vs. description."],
        ],
        [
          mc(
            "«___ a mi mujer en una boda.» (met)",
            ["Conocí", "Conocía", "Conozco", "Conoceré"],
            0,
            "Meeting someone for the first time is a single event, so the preterite: conocí. \"Conocía\" means already knew, \"conozco\" is present, and \"conoceré\" future."
          ),
        ]
      ),
    ],
    [
      mc(
        "«A mi padre ___ gustan los coches antiguos.»",
        ["le", "lo", "les", "la"],
        0,
        "Gustar takes the indirect pronoun le for a mi padre. \"Lo\" and \"la\" are direct object pronouns, and \"les\" is plural."
      ),
      mc(
        "«Vi a Marta y ___ saludé.»",
        ["la", "le", "les", "se"],
        0,
        "Saludar takes a direct object, and Marta is feminine: la saludé. \"Le\" is indirect, \"les\" plural, and \"se\" reflexive."
      ),
      mc(
        "«No tengo ___ paciencia como tú.»",
        ["tanta", "tan", "tanto", "tantas"],
        0,
        "Paciencia is feminine singular, so tanta... como. \"Tan\" is for adjectives, \"tanto\" is masculine, and \"tantas\" plural."
      ),
      mc(
        "«Viajamos ___ todo el país.»",
        ["por", "para", "a", "en por"],
        0,
        "Por marks movement around or through a place: por todo el país. \"Para\" would be a destination, and \"a\" and \"en por\" don't fit."
      ),
      mc(
        "«La reunión ___ muy aburrida.» (the whole meeting, finished)",
        ["fue", "era", "será", "es"],
        0,
        "Fue sums up the whole, finished meeting. \"Era\" would describe it as background, \"será\" is future and \"es\" is present. (You'll also hear estuvo muy aburrida for how it went that day.)"
      ),
      mc(
        "«De niño ___ pescado todos los viernes.»",
        ["comía", "comí", "como", "comeré"],
        0,
        "De niño + todos los viernes is a past habit, so the imperfect: comía. \"Comí\" is a single event, \"como\" present, and \"comeré\" future."
      ),
      fb("Complete.", "El sábado ___ de viaje con mis primos. (salir, yo, future)", "saldré", "Future irregular: saldr-."),
      toEs("I met her at a party; I already knew her brother.", "La conocí en una fiesta; ya conocía a su hermano.", "La conocí = met her (first time, preterite); conocía a su hermano = already knew him (imperfect).", ["La conocí en una fiesta y ya conocía a su hermano."]),
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
        [
          "Remember the rule: each part of a postcard has its own grammar job. Where you are now → estar (estamos en un hotel). The weather now → hace; the weather as background in the past → hacía. What you did → preterite (ayer fuimos). Comparisons → más… que, tan… como, mejor. Plans → future (mañana visitaremos).",
          "Build it in order: 1) ¡Hola desde Cartagena! 2) Estamos en un hotel… 3) Hace / hacía un tiempo… 4) Ayer fuimos a… 5) La playa es más bonita que… 6) Mañana visitaremos… 7) ¡Besos!",
        ],
        [
          ["¡Hola desde Cartagena! Hace un calor increíble.", "Hello from Cartagena! It's incredibly hot."],
        ],
        [
          mc(
            "Which sentence tells what you did yesterday?",
            ["Ayer fuimos a las islas del Rosario.", "Mañana iremos a las islas.", "Siempre íbamos a las islas.", "Vamos a ir a las islas."],
            0,
            "Ayer with the preterite (fuimos) tells what you did. The others are future, a past habit and a plan."
          ),
        ]
      ),
    ],
    [
      wo("Ayer fuimos en barco a una isla preciosa.", "Ayer + a finished trip: preterite fuimos. En barco for the means of transport.", "Yesterday we went by boat to a beautiful island."),
      wo("El agua era más clara que en nuestra ciudad.", "Describing what the water was like takes the imperfect (era); más + adjective + que compares. El agua is feminine (clara) even though it takes el.", "The water was clearer than in our city."),
      wo("Mañana visitaremos el centro histórico por la tarde.", "A plan takes the future (visitaremos); por + part of the day.", "Tomorrow we'll visit the historic center in the afternoon."),
      fb("Complete.", "Compré un recuerdo ___ ti.", "para", "Para marks the recipient: para ti."),
      fb("Complete.", "La comida está ___. (rico)", "riquísima", "Rico + -ísimo = very tasty; la comida is feminine, so -ísima, and c → qu to keep the k sound: riquísima."),
      fb("Complete.", "No hay ___ problema: todo va bien.", "ningún", "Ninguno shortens to ningún before a masculine singular noun: ningún problema."),
      toEs("Hello from Cartagena! It's very hot here.", "¡Hola desde Cartagena! Aquí hace mucho calor.", "Weather uses hacer: aquí hace mucho calor. Desde = from.", ["¡Hola desde Cartagena! Hace mucho calor aquí."]),
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
        [
          "Remember the rule: the time word picks the tense (ayer → preterite, de niño / antes / siempre → imperfect, mañana / el año que viene → future), and then each tense has its own kind of irregularity.",
          "Preterite: new stems with endings that carry no accent (hic-e, tuv-e, dij-e, vin-e; fui for both ser and ir). Imperfect: almost everything is regular; only ser (era), ir (iba) and ver (veía) are irregular. Future: the regular endings go on the infinitive, but a few verbs shorten it (har-é, dir-é) or swap the vowel for d (tendr-é, vendr-é).",
          "Hacer: hice / hacía / haré. Tener: tuve / tenía / tendré. Ir: fui / iba / iré. Ser: fui / era / seré. Decir: dije / decía / diré. Venir: vine / venía / vendré.",
        ],
        [
          ["Antes iba al gimnasio; ayer no fui; mañana iré.", "I used to go to the gym; yesterday I didn't go; tomorrow I'll go."],
        ],
        [
          fb("Complete.", "Ayer ___ mucho trabajo. (tener, yo)", "tuve", "Ayer marks a finished moment, so the preterite; tener has the irregular stem tuv- (no accent)."),
        ]
      ),
    ],
    [
      fb("Complete.", "De niño ___ miedo de los perros. (tener, yo)", "tenía", "'As a kid' marks a past state, so the imperfect (tener is regular in the imperfect)."),
      fb("Complete.", "El año que viene ___ más vacaciones. (tener, yo)", "tendré", "El año que viene points forward, so the future; tener drops the e and adds d: tendr-."),
      fb("Complete.", "Ayer mis amigos ___ a cenar. (venir)", "vinieron", "Ayer → preterite. Venir has the stem vin- in the preterite: vinieron."),
      fb("Complete.", "Mañana mis amigos ___ a cenar. (venir)", "vendrán", "Mañana → future. Venir swaps the e for d in its future stem: vendr-án."),
      fb("Complete.", "Siempre me ___ la verdad. (decir, él)", "decía", "Siempre marks a past habit, so the imperfect, and decir is regular in the imperfect: decía."),
      fb("Complete.", "Te ___ la respuesta mañana. (decir, yo)", "diré", "Mañana → future. Decir shortens its future stem to dir-: diré."),
      mc(
        "«Mi abuelo ___ carpintero y ___ muebles preciosos.»",
        ["era / hacía", "fue / hizo siempre", "era / hizo cada día", "fue / hacía ayer"],
        0,
        "Describing his job (era) and his habit (hacía) are both imperfect. \"Fue\" and \"hizo\" treat them as single events, and \"ayer\" contradicts a habit."
      ),
      toEs("I couldn't come yesterday, but I'll come tomorrow.", "Ayer no pude venir, pero mañana vendré.", "Poder → pude (preterite) and venir → vendré (future); both are irregular.", ["No pude venir ayer, pero vendré mañana."]),
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
        [
          "Remember the rule: object pronouns go before a conjugated verb, or are attached to the end of an infinitive or a gerund. The tense never changes this.",
          "One conjugated verb → before it (lo compré, lo compraré). A conjugated verb + infinitive or gerund → before the conjugated verb or attached to the end (lo voy a comprar / voy a comprarlo; lo estoy comprando / estoy comprándolo), never in between. Double pronouns move together, indirect first, and attaching two pronouns, or one to a gerund, adds a written accent to keep the stress: comprándolo, dárselo.",
        ],
        [
          ["Te lo explicaré mañana. / Voy a explicártelo mañana.", "I'll explain it to you tomorrow."],
        ],
        [
          fb("Complete.", "¿El coche? ___ vendí el año pasado.", "Lo", "El coche is masculine singular, so lo, before the verb."),
        ]
      ),
    ],
    [
      fb("Attach.", "Lo voy a lavar. → Voy a ___.", "lavarlo", "With voy a + infinitive, the pronoun can attach to the end of the infinitive, written as one word: lavarlo."),
      fb("Attach.", "Me estoy vistiendo. → Estoy ___.", "vistiéndome", "The pronoun attaches to the gerund, which then needs an accent: vistiéndome."),
      fb("Move before.", "Quiero decírtelo. → ___ quiero decir.", "Te lo", "Both pronouns move together before the conjugated verb: te lo quiero decir."),
      fb("Complete.", "¿Las entradas? ___ compraremos mañana.", "Las", "Las entradas is feminine plural, so las, before the future verb."),
      fb("Complete.", "¿El informe? Se ___ mandé a la jefa.", "lo", "Le becomes se before lo, and el informe is lo: se lo mandé."),
      mc(
        "Which is wrong?",
        ["Voy a te lo decir.", "Te lo voy a decir.", "Voy a decírtelo.", "Te lo diré."],
        0,
        "The pronouns go before the conjugated verb or attach to the infinitive, never between the verbs, so \"Voy a te lo decir\" is wrong. The other three are correct."
      ),
      toEs("I'm going to call her tonight.", "Voy a llamarla esta noche.", "La attaches to the infinitive: llamarla.", ["La voy a llamar esta noche.", "Esta noche la voy a llamar."]),
      wo("No te lo puedo prestar porque lo necesito.", "No comes first, then the pronoun pair te lo (indirect before direct) before the conjugated verb puedo.", "I can't lend it to you because I need it."),
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
        [
          "Remember the rules. What someone was like in the past → imperfect: era alto, trabajaba muchísimo. What they're like now → present: ahora es más bajo. Traits (tall, shy, generous) take ser; temporary states (tired, ill, nervous) take estar. Compare with más / menos… que or tan… como. Adverbs: feminine adjective + -mente.",
          "Then: Mi abuelo era alto y trabajaba muchísimo. Now: Ahora es más bajo y camina lentamente.",
        ],
        [
          ["De joven era más delgado que ahora.", "When he was young he was thinner than now."],
        ],
        [
          fb("Complete.", "De joven mi abuela ___ muy deportista. (ser)", "era", "De joven sets a past background, and being sporty is a trait: imperfect of ser, era."),
        ]
      ),
    ],
    [
      fb("Complete.", "Ahora ___ más tranquila que antes. (ser)", "es", "Ahora → present; being calm here is her character, so ser: es."),
      fb("Complete.", "Antes hablaba muy ___. (rápido → adverb)", "rápidamente", "Rápido → feminine rápida + -mente; the accent stays: rápidamente."),
      fb("Complete.", "Mi padre no es ___ alto como mi tío.", "tan", "Equality with an adjective: tan alto como."),
      fb("Complete.", "Ayer mi hermano ___ muy cansado todo el día. (estar)", "estuvo", "Tiredness is a state (estar), and ayer… todo el día closes it off as a finished block of time, so the preterite: estuvo."),
      fb("Complete.", "Cuando lo vi, ___ muy nervioso. (estar)", "estaba", "Being nervous is a state (estar), and cuando lo vi asks what he was like at that moment: background, so the imperfect estaba."),
      mc(
        "«Mi madre es la persona ___ generosa de la familia.»",
        ["más", "tan", "tanta", "mejor"],
        0,
        "The superlative uses más + adjective + de: la persona más generosa de la familia. \"Tan\" is for equality, \"tanta\" goes with nouns, and \"mejor generosa\" doesn't work."
      ),
      toEs("My brother used to be shyer than me.", "Mi hermano era más tímido que yo.", "A past description takes the imperfect (era), with más tímido que.", []),
      toEn("Ahora vive tranquilamente en el campo.", "Now he lives peacefully in the countryside.", "Tranquilamente is an adverb (tranquila + -mente): peacefully.", ["Now she lives quietly in the countryside."]),
    ]
  ),
  L(
    "a2-comprehensive-review-3",
    "a2d-cumulative-circuit-6",
    "Cumulative Circuit 6: Everyday Situations",
    "Restaurant, directions, shopping and phone calls — practical Elementary language mixed with grammar.",
    "7 min",
    [
      sec(
        "Four situations",
        [
          "Remember the rules that make everyday Spanish polite and correct. With strangers use usted: the verb goes in the third person (¿me puede decir…?, siga recto). Location takes estar (está enfrente de…). Object pronouns go before the conjugated verb (¿me lo puedo probar?, lo compro). Para mí for what you order, por aquí for 'around here', por lo de for 'about' on the phone.",
          "Restaurant: Para mí…, ¿Me trae…? Directions: Siga recto…, está enfrente de… Shopping: ¿Me lo puedo probar? Lo compro. Phone: Le llamo por… ¿Me puede decir…?",
        ],
        [
          ["¿Me puedo probar esta chaqueta?", "Can I try this jacket on?"],
          ["Le llamo por lo de la reserva.", "I'm calling about the reservation."],
        ],
        [
          fb("Complete.", "¿Me ___ la carta, por favor? (traer, usted)", "trae", "A present-tense question like ¿Me trae…? is a normal, polite way to ask a waiter for something."),
        ]
      ),
    ],
    [
      fb("Complete.", "La farmacia está ___ de la panadería. (opposite)", "enfrente", "Opposite = enfrente de (location, so estar). De + el would contract to del."),
      fb("Complete.", "¿Me ___ probar estos pantalones? (poder, yo)", "puedo", "Poder is o → ue in the present: puedo. Me goes before it because probarse is reflexive (or attach it: ¿puedo probarme…?)."),
      fb("Complete.", "¿Los pantalones? Me gustan; ___ compro.", "los", "Los pantalones is masculine plural, so los, before compro. In a shop, lo / los compro means 'I'll take it / them'."),
      fb("Complete.", "Le llamo ___ lo de la cita de mañana.", "por", "Por lo de means about or regarding: le llamo por lo de la cita."),
      fb("Complete.", "Quería una mesa ___ dos personas.", "para", "Para marks who the table is for: una mesa para dos."),
      mc(
        "«¿Hay un banco ___ aquí?»",
        ["por", "para", "a", "de"],
        0,
        "Por aquí means around here. \"Para aquí\" would be a direction, and \"a\" and \"de\" don't fit."
      ),
      toEs("Excuse me, is there a supermarket around here?", "Perdone, ¿hay un supermercado por aquí?", "Hay asks if something exists, and por aquí means around here.", ["Disculpe, ¿hay un supermercado por aquí?"]),
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
        [
          "Remember the rule: a life story moves through the tenses. Milestones and single events (born, left, met, opened) → preterite. Description and ongoing situations (what the family was like, what he did every day) → imperfect. Plans → future. Para + infinitive for a purpose.",
          "Read the story and decide each verb from the rule before you fill the gaps in the exercises:",
          "«Mi abuelo ___ (nacer) en un pueblo de Galicia. Su familia ___ (ser) pobre y él ___ (trabajar) en el campo desde niño. A los veinte años se ___ (ir) a Argentina en barco. Allí ___ (conocer) a mi abuela y abrió una panadería. El año que viene ___ (ir, nosotros) a Galicia ___ conocer su pueblo.»",
        ],
        [
          ["Mi madre nació en Cuba, pero creció en Miami.", "My mother was born in Cuba, but grew up in Miami. (two milestones: preterite)"],
          ["La casa tenía un jardín enorme.", "The house had a huge garden. (description: imperfect)"],
        ],
        [
          mc(
            "Where did the grandfather open a bakery?",
            ["in Argentina", "in Galicia", "in Madrid", "on the ship"],
            0,
            "Allí refers to Argentina, where the grandfather opened the bakery, not Galicia, Madrid or the ship."
          ),
        ]
      ),
    ],
    [
      fb("Fill in.", "Mi abuelo ___ en un pueblo de Galicia. (nacer)", "nació", "Being born is a single event, a milestone: preterite nació."),
      fb("Fill in.", "Su familia ___ pobre. (ser)", "era", "What the family was like is description, so the imperfect of ser: era."),
      fb("Fill in.", "Él ___ en el campo desde niño. (trabajar)", "trabajaba", "Desde niño describes an ongoing situation, not one event: imperfect trabajaba."),
      fb("Fill in.", "A los veinte años se ___ a Argentina. (ir)", "fue", "Leaving at twenty is a single event: preterite of irse, se fue (the same form as ser's fue)."),
      fb("Fill in.", "Allí ___ a mi abuela. (conocer)", "conoció", "Meeting someone for the first time is an event: preterite conoció. Conocía would mean he already knew her."),
      fb("Fill in.", "El año que viene ___ a Galicia. (ir, nosotros)", "iremos", "El año que viene is a plan: future of ir, regular, iremos."),
      fb("Fill in.", "Iremos ___ conocer su pueblo.", "para", "Para + infinitive gives the purpose: para conocer su pueblo."),
      toEs("He was very young and he didn't know anyone.", "Era muy joven y no conocía a nadie.", "Description in the imperfect (era, conocía); no + verb + nadie, with the personal a because nadie stands for a person.", ["Él era muy joven y no conocía a nadie."]),
    ]
  ),
  L(
    "a2-comprehensive-review-3",
    "a2d-mixed-practice-translation-sprint",
    "Mixed Practice: Translation Sprint",
    "Translate short sentences that each hide one hard Elementary point: tense choice, lo/le/se lo, por/para, mayor, tanto, negatives and the future.",
    "7 min",
    [
      sec(
        "One trap per sentence",
        [
          "Remember the rules behind the eight traps. Preterite for events, imperfect for background. Lo / la for the person or thing acted on, le for the one who receives. Le + lo / la → se lo / se la. Para for recipients, purposes and deadlines; por for route, cause, exchange. Mayor / menor for age (never más mayor). Tanto agrees with its noun (tantos libros como). A negative word after the verb needs no before it. Irregular future stems: tendr-, saldr-, har-.",
          "Each item hides one of these decisions. Spot it first, then answer: some items ask you to translate, others to fix or change a sentence.",
        ],
        [
          ["Nunca le dije nada a nadie.", "I never told anyone anything."],
        ],
        [
          mc(
            "«I gave it to her» (the book):",
            ["Se lo di.", "Le lo di.", "Se la di.", "La le di."],
            0,
            "Le + lo becomes se lo, and el libro is masculine: se lo di. \"Le lo\" skips the change, \"se la\" is feminine, and \"La le\" is the wrong pronoun and order."
          ),
        ]
      ),
    ],
    [
      toEs("It was raining when I left home.", "Llovía cuando salí de casa.", "The rain is background (llovía), and leaving is the event (salí).", ["Estaba lloviendo cuando salí de casa."]),
      toEs("I sent her the photos.", "Le mandé las fotos.", "Le is the indirect pronoun for to her: le mandé las fotos.", ["Le envié las fotos."]),
      toEs("¿Las fotos? Le las mandé.", "¿Las fotos? Se las mandé.", "Le can't stand before las: it turns into se. Se las mandé = I sent them to her.", ["¿Las fotos? Se las envié."], "Correct the sentence."),
      toEs("Este regalo es por ti.", "Este regalo es para ti.", "You receive the gift, so para marks the recipient. Por ti would mean because of you or on your behalf.", [], "Correct the sentence."),
      toEs("My older sister has as many books as me.", "Mi hermana mayor tiene tantos libros como yo.", "Mayor = older, and tanto agrees with libros: tantos libros como yo.", []),
      toEs("Nadie no me llamó en todo el día.", "Nadie me llamó en todo el día.", "Nadie before the verb stands alone, so drop the no. Or keep no and move nadie after the verb: no me llamó nadie.", ["No me llamó nadie en todo el día."], "Correct the sentence."),
      toEs("Tomorrow I'll have more time.", "Mañana tendré más tiempo.", "Tener has the future stem tendr-: tendré.", []),
      toEs("We met in 2020.", "Nos conocimos en 2020.", "Conocerse in the preterite is reciprocal: nos conocimos = we met.", []),
    ]
  ),
  L(
    "a2-comprehensive-review-3",
    "a2d-exit-drill-ready-b1",
    "Final Drill: Are You Ready for the Intermediate level?",
    "A last mixed drill across all Elementary grammar. Aim for 100% before you start the Intermediate subjunctive.",
    "8 min",
    [
      sec(
        "Before the Intermediate level",
        [
          "Remember the core Elementary rules: preterite for events, imperfect for background and habits, future for plans; object pronouns before the conjugated verb or attached to an infinitive, with le + lo → se lo; por for route and cause, para for destination, purpose and deadline; mayor / menor / mejor without más; no + verb + nada / nadie.",
          "Intermediate builds directly on this: commands use the same pronouns (attached to the end of affirmative commands: dímelo), the present perfect contrasts with the preterite, and se lo appears everywhere. If any item here feels shaky, go back to its drill lessons.",
        ],
        [
          ["Ayer se lo expliqué, pero no me entendió.", "Yesterday I explained it to him, but he didn't understand me."],
        ],
        [
          fb("Complete.", "Cuando era pequeña, ___ en Sevilla. (vivir)", "vivía", "Cuando era pequeña sets a past background, so the imperfect: vivía."),
        ]
      ),
    ],
    [
      fb("Complete.", "En 2021 ___ a trabajar en un banco. (empezar, yo)", "empecé", "En 2021 is a single dated event: preterite. Verbs in -zar change z to c before é: empecé."),
      fb("Complete.", "¿Las llaves? No ___ encuentro.", "las", "Las llaves is feminine plural, so las."),
      fb("Complete.", "A mis hijos ___ encanta la playa.", "les", "Encantar takes les for a mis hijos (plural)."),
      fb("Complete.", "Mi hermano se ___ rápidamente y salió. (vestirse, preterite)", "vistió", "Vestirse is an -ir stem-changer: e → i in the él form of the preterite, se vistió."),
      fb("Complete.", "El vuelo ___ Lima sale a las diez.", "para", "Para marks the destination: el vuelo para Lima."),
      fb("Complete.", "Mi coche es ___ viejo que el tuyo.", "más", "Unequal comparison: más viejo que."),
      fb("Complete.", "El próximo año ___ un máster. (hacer, yo)", "haré", "El próximo año is a plan: future, and hacer shortens its stem to har-: haré."),
      mc(
        "«No ___ nadie en la oficina cuando ___.»",
        ["había / llegué", "hubo / llegaba", "había / llegaba ayer", "hay / llegué"],
        0,
        "The empty office is background (había), and arriving is the event (llegué). \"Hubo\" makes the background an event, \"llegaba\" makes the arrival ongoing, and \"hay\" is present."
      ),
    ]
  ),
];
