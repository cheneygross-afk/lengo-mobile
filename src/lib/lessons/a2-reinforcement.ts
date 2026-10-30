// Synced from cheneygross-afk/lengo:src/lib/lessons/a2-reinforcement.ts by scripts/sync-content.mjs -- edit it there, not here.
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
        [
          "Remember the rule: in a conversation the ending follows the person, so it flips between question and answer. A tú question (-aste, -iste) gets a yo answer (-é, -í); an ustedes or vosotros question gets a nosotros answer (-amos, -imos).",
          "Two coworkers catch up. Your job in this lab: understand what they did, pick the right reply and answer for yourself.",
        ],
        [
          ["—¿Qué hiciste el fin de semana? —Nada especial. El sábado limpié la casa.","What did you do this weekend? — Nothing special. On Saturday I cleaned the house. (hiciste → limpié)"],
          ["—¿Saliste el domingo? —Sí, salí con mis primos y comimos en un restaurante peruano.","Did you go out on Sunday? — Yes, I went out with my cousins and we ate at a Peruvian restaurant. (saliste → salí)"],
        ],
        [
          { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "—¿Visitaste a tus abuelos? —Sí, los ___ el sábado.", answer: "visité", en: "—Did you visit your grandparents? (tú) —Yes, I [visited] them on Saturday.", explanation: "Tú question (visitaste) → yo answer (visité). Don't forget the accent: visite without it is not a preterite." },
          mc("What did the second coworker do on Sunday?", ["Went out with cousins and ate at a Peruvian restaurant","Cleaned the house","Stayed home alone","Cooked Peruvian food at home"], 0, "Salí con mis primos y comimos en un restaurante peruano: \"I went out with my cousins and we ate at a Peruvian restaurant\". Cleaning the house was Saturday."),
        ]
      ),
      sec(
        "Asking about others",
        "When you ask about a third person, the él/ella form ends in -ó (-ar) or -ió (-er/-ir). The stressed, accented ending is what separates it from the present-tense yo form: trabajo (I work) vs. trabajó (he worked).",
        [
          ["—¿Y tu hermano? —Él trabajó todo el fin de semana.","And your brother? — He worked all weekend. (-ó: él)"],
          ["—¿Tus padres viajaron? —No, se quedaron en casa.","Did your parents travel? — No, they stayed home. (-aron: ellos)"],
        ],
        [
          mc("Which sentence is about the past?", ["Marta llegó tarde.","Marta llega tarde.","Yo llego tarde.","Marta va a llegar tarde."], 0, "Llegó, with the accent, is the él/ella preterite. \"Llega\" and \"llego\" are present, and \"va a llegar\" is the near future."),
        ]
      ),
    ],
    [
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "—¿Ustedes miraron el partido? —Sí, lo ___ en casa de Pedro.", answer: "miramos", en: "—Did you watch the game? (ustedes) —Yes, we [watched] it at Pedro's house.", altAnswers: ["vimos"], explanation: "Ustedes question → nosotros answer. -Ar nosotros is the same in present and preterite; the past-tense question (¿miraron?) tells you it's past." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "—¿Qué comiste? —___ una pizza enorme.", answer: "Comí", en: "—What did you eat? (tú) —I [ate] a huge pizza.", explanation: "Comiste (tú) → comí (yo): the -er preterite yo ending is accented -í." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "—¿Y tu novia? —Ella ___ toda la tarde.", answer: "estudió", en: "—And your girlfriend? —She [studied] all afternoon.", explanation: "Talking about a third person: -ó with an accent, estudió." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "—¿Ustedes corrieron el sábado? —Sí, ___ en el parque.", answer: "corrimos", en: "—Did you all run on Saturday? —Yes, we [ran] in the park.", explanation: "Ustedes question (corrieron) → nosotros answer: corrimos." },
      mt("Match each question with its answer.", [["¿Dónde cenaste?","Cené en casa."],["¿A qué hora volvieron ustedes?","Volvimos a medianoche."],["¿Tu novia bailó?","Sí, bailó toda la noche."],["¿Vosotros bebisteis vino?","No, bebimos agua."]], "Each answer switches to the matching person: tú → yo, ustedes/vosotros → nosotros, ella → ella."),
      mc("—¿Corriste ayer? —Sí, ___ cinco kilómetros.", ["corrí","corrió","corriste","corro"], 0, "A tú question gets a yo answer: corriste → corrí. Corrió is él/ella, corriste repeats the question's person, and corro is present."),
      mc("Your coworker asks: «¿Qué tal el sábado?» Which answer fits?", ["Muy bien, cené con unos amigos.","Muy bien, ceno con unos amigos.","Muy bien, cenaste con unos amigos.","Muy bien, voy a cenar con unos amigos."], 0, "Saturday is over, so you answer in the preterite, yo form: cené. Ceno is present, cenaste is tú, and voy a cenar is the future."),
      mc("Your coworker says: «Mis hijos jugaron al fútbol todo el domingo.» What did the children do?", ["They played soccer all day Sunday","They watched soccer on Sunday","They will play soccer on Sunday","They play soccer every Sunday"], 0, "Jugaron is the ellos preterite of jugar: they played, once, last Sunday. A habit would be juegan, a plan van a jugar."),
      toEs("¿Saliste el sábado?", "Sí, salí con mis amigos.", "A tú question gets a yo answer: saliste → salí.", ["Sí, salí con mis amigos el sábado.","Sí, el sábado salí con mis amigos."], "Answer yes: you went out with your friends."),
      toEs("¿Cocinaste el domingo?", "No, comí en un restaurante.", "Yo answer to a tú question: comí (-í for an -er verb).", ["No, el domingo comí en un restaurante.","No, comí en un restaurante el domingo."], "Answer no: you ate at a restaurant."),
      toEs("¿Qué hicieron ustedes el domingo?", "Visitamos a mis abuelos y cenamos con ellos.", "Ustedes question → nosotros answer: visitamos, cenamos. Remember the personal a before people.", ["El domingo visitamos a mis abuelos y cenamos con ellos."], "Answer: you visited your grandparents and had dinner with them."),
      toEs("Mi hermano limpia toda la casa.", "Mi hermano limpió toda la casa.", "Él form in the preterite: -ó with an accent, limpió.", undefined, "Change it to the past."),
      toEs("Yo bebí agua en la fiesta.", "¿Qué bebiste en la fiesta?", "To ask a friend, switch yo (bebí) to tú (bebiste): -iste for -er verbs.", ["¿Qué bebiste tú en la fiesta?"], "Turn it into a question to a friend: what did you drink?"),
      toEs("—¿Viste el partido? —Sí, lo vió en casa.", "—¿Viste el partido? —Sí, lo vi en casa.", "A tú question gets a yo answer: vi. Also, vi and vio are one syllable and never take a written accent.", undefined, "Correct the answer."),
      toEs("—¿Ustedes bailaron? —Sí, bailaron toda la noche.", "—¿Ustedes bailaron? —Sí, bailamos toda la noche.", "An ustedes question gets a nosotros answer: bailamos. Repeating bailaron would mean \"they danced\".", undefined, "Correct the answer."),
      toEs("Mi novia trabajo todo el fin de semana.", "Mi novia trabajó todo el fin de semana.", "Mi novia = ella, so the preterite needs the accented -ó: trabajó. Trabajo is \"I work\".", undefined, "Correct the sentence."),
      toEn("¿Recibiste mi mensaje ayer?", "Did you get my message yesterday?", "Recibir is a regular -ir verb, and the tú preterite ends in -iste: recibiste.", ["Did you receive my message yesterday?"]),
      toEs("On Sunday we cooked and watched a movie.", "El domingo cocinamos y miramos una película.", "Regular -ar verbs take -amos for nosotros in the preterite (the same as the present): cocinamos, miramos. El domingo shows it's past.", ["El domingo cocinamos y vimos una película.","El domingo nosotros cocinamos y miramos una película."]),
      wo("El sábado pasado mis amigos y yo corrimos en el parque.", "Time + compound subject (mis amigos y yo = nosotros) + preterite + place.", "Last Saturday my friends and I ran in the park."),
      toEs("Did you all (Latin America) watch the game? — No, we walked on the beach and swam.", "¿Miraron ustedes el partido? —No, caminamos por la playa y nadamos.", "Ustedes question → nosotros answer: caminamos, nadamos.", ["¿Ustedes miraron el partido? —No, caminamos por la playa y nadamos.","¿Miraron el partido? —No, caminamos por la playa y nadamos.","¿Vieron ustedes el partido? —No, caminamos por la playa y nadamos.","¿Ustedes vieron el partido? —No, caminamos por la playa y nadamos.","¿Vieron el partido? —No, caminamos por la playa y nadamos."]),
      { type: "speak", prompt: "Answer aloud in Spanish: ¿Qué hiciste el fin de semana? (Say what you did on Saturday and on Sunday.)", text: "El sábado limpié la casa y el domingo salí con mis amigos.", explanation: "Hiciste is a tú question, so answer with yo forms: limpié (-ar, -é), salí (-ir, -í). Any two activities in the yo preterite work." },
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
        [
          "Remember the rule: the preterite stresses its ending, and in the yo and él/ella forms the written accent shows that stress. Drop the accent and you get a different word: hablo (I speak) vs. habló (he spoke); estudie (a subjunctive form) vs. estudié (I studied).",
          "So when you hunt for errors, check every -e / -o / -i ending on a past verb: does it need its accent?",
        ],
        [
          ["✗ Ayer el trabajo mucho. → ✓ Ayer él trabajó mucho.","Yesterday he worked a lot. (trabajo = I work)"],
          ["✗ Yo compre pan. → ✓ Yo compré pan.","I bought bread."],
        ],
        [
          ms("Which forms are correctly written preterites?", ["comí","hablé","vivio","cantó"], [0,1,3], "Comí, hablé and cantó are correct. \"Vivio\" needs its accent: vivió."),
          toEs("Mi abuela cocino una paella enorme.", "Mi abuela cocinó una paella enorme.", "Mi abuela = ella, so the preterite needs -ó with an accent: cocinó. Cocino means \"I cook\".", undefined, "Correct the sentence."),
        ]
      ),
      sec(
        "-car, -gar, -zar in the yo form",
        [
          "Why the spelling changes: Spanish spelling follows sound. C before e sounds like s (or th in Spain), g before e sounds like a rough h, and z is not written before e. So when yo adds -é, the stem's sound is protected: c → qu (busqué), g → gu (llegué), z → c (empecé).",
          "Only yo changes, because only yo ends in -é. Él buscó, tú llegaste and ellos empezaron keep the normal spelling.",
        ],
        [
          ["Yo busqué / él buscó","I looked for / he looked for (only yo changes)"],
          ["Yo pagué / tú pagaste","I paid / you paid"],
          ["Yo crucé / ella cruzó","I crossed / she crossed (z → c before e)"],
        ],
        [
          toEs("Ayer yo tocé la guitarra por dos horas.", "Ayer yo toqué la guitarra por dos horas.", "Tocar → toqué: c becomes qu before é to keep the k sound.", ["Ayer toqué la guitarra por dos horas."], "Correct the sentence."),
          mc("A verb you haven't drilled: colgar (to hang up). Which yo preterite is right?", ["colgué","colgé","colgó","colgue"], 0, "Colgar ends in -gar, so yo adds a u to keep the hard g before é: colgué. \"Colgé\" would sound like col-HÉ, \"colgó\" is él/ella, and \"colgue\" has no accent."),
        ]
      ),
    ],
    [
      toEs("Yo llegé a casa a las diez.", "Yo llegué a casa a las diez.", "Llegar → llegué: g becomes gu before é.", ["Llegué a casa a las diez."], "Correct the sentence."),
      toEs("Yo empezé a estudiar a las ocho.", "Yo empecé a estudiar a las ocho.", "Empezar → empecé: z becomes c before é.", ["Empecé a estudiar a las ocho."], "Correct the sentence."),
      mc("\"Ella pago la cuenta.\" What's the fix?", ["Ella pagó la cuenta.","Ella pagué la cuenta.","Ella pagüé la cuenta.","No fix needed."], 0, "Él/ella takes -ó with an accent: pagó. \"Pagué\" is the yo form (the g → gu change is only for yo), \"pagüé\" adds a ü that doesn't belong, and the original needs its accent."),
      ms("Which sentences contain an error?", ["Tú buscaste las llaves.","Yo almorcé con mi jefe.","Nosotros llegamos tarde.","Ellos jugué al fútbol."], [3], "Ellos takes -aron: ellos jugaron, so \"Ellos jugué\" is the error. The others are correct (almorzar → almorcé)."),
      mc("'Yo jugé al tenis.' What's the fix?", ["Yo jugué al tenis.","Yo jugó al tenis.","Yo jugúe al tenis.","No fix needed."], 0, "Jugar adds u before é to keep the hard g: jugué. Jugó is él/ella, and the accent goes on the final e, not the u."),
      mc("Which él/ella form is spelled correctly?", ["buscó","busqó","busquó","buscó́"], 0, "Only yo changes spelling: before -ó the c already sounds like k, so él buscó keeps the c. Qu is only needed before e or i."),
      mt("Match each infinitive to its yo preterite.", [["sacar","saqué"],["jugar","jugué"],["cruzar","crucé"],["practicar","practiqué"]], "c → qu, g → gu, z → c, only before -é."),
      toEs("Él buscó las llaves.", "Yo busqué las llaves.", "Changing to yo brings in the -é ending, so c → qu: busqué.", ["Busqué las llaves."], "Change to yo."),
      toEs("Ella almorzó con su abuela.", "Yo almorcé con mi abuela.", "Yo almorcé: z → c before é. Su abuela also becomes mi abuela.", ["Almorcé con mi abuela."], "Change to yo (and say \"my grandmother\")."),
      toEs("Tú pagaste la cuenta.", "Yo pagué la cuenta.", "Yo pagué: g → gu before é to keep the hard g.", ["Pagué la cuenta."], "Change to yo."),
      toEs("Yo saqué la basura.", "Mi hermano sacó la basura.", "Going from yo to él removes the -é, so the qu goes back to c: sacó.", undefined, "Change to mi hermano."),
      toEs("Mi hijo escribio una carta muy bonita.", "Mi hijo escribió una carta muy bonita.", "-Ió for él/ella needs its accent: escribió.", undefined, "Correct the sentence."),
      toEs("Ella pagué la cena y salió.", "Ella pagó la cena y salió.", "Only yo changes spelling; ella is regular: pagó. Pagué is the yo form.", undefined, "Correct the sentence."),
      toEs("Ayer yo cruzé la calle en la esquina.", "Ayer yo crucé la calle en la esquina.", "Z is not written before e in Spanish: cruzar → crucé.", ["Ayer crucé la calle en la esquina."], "Correct the sentence."),
      toEs("Yo practicé mucho para el examen.", "Yo practiqué mucho para el examen.", "Practicar: c → qu before é, practiqué. \"Practicé\" would be read prac-ti-SÉ.", ["Practiqué mucho para el examen."], "Correct the sentence."),
      toEs("I bought milk.", "Compré leche.", "Yo preterite needs the accent: compré. Compre is a different form."),
      toEs("He worked a lot.", "Trabajó mucho.", "Without the accent, trabajo means \"I work\".", ["Él trabajó mucho."]),
      toEs("I touched the door.", "Toqué la puerta.", "Tocar: c → qu before -é: toqué."),
      toEs("I arrived late and she paid for dinner.", "Llegué tarde y ella pagó la cena.", "Llegué changes g → gu (yo); pagó doesn't change (ella)."),
      toEs("I took out my passport.", "Saqué mi pasaporte.", "Sacar: c → qu in yo: saqué.", ["Saqué el pasaporte."]),
      toEs("I paid and he looked for a taxi.", "Yo pagué y él buscó un taxi.", "Pagué (g → gu), buscó (no change outside yo).", ["Pagué y él buscó un taxi."]),
      wo("Ayer yo saqué muchas fotos en la playa.", "Sacar → saqué in the yo form.", "Yesterday I took lots of photos at the beach."),
      wo("Yo empecé la clase y ella llegó tarde", "Empecé (z → c in yo) and llegó (regular él).", "I started the class and she arrived late"),
      toEs("I looked for the keys, but my wife found them.", "Busqué las llaves, pero mi esposa las encontró.", "Busqué (c → qu) for yo; encontró for ella with an accent.", ["Busqué las llaves pero mi mujer las encontró.","Busqué las llaves, pero mi mujer las encontró.","Busqué las llaves pero mi esposa las encontró."]),
      toEs("Yesterday I played the piano and my sister sang.", "Ayer toqué el piano y mi hermana cantó.", "Toqué changes c → qu; cantó needs its accent.", ["Ayer yo toqué el piano y mi hermana cantó."]),
      { type: "speak", prompt: "Say it in Spanish: I parked the car, I paid and I started to walk.", text: "Aparqué el coche, pagué y empecé a caminar.", explanation: "Three yo spelling changes: aparcar → aparqué (c → qu), pagar → pagué (g → gu), empezar → empecé (z → c). In Latin America: estacioné el carro." },
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
        "Swap the time word, swap the stem",
        [
          "Remember the rule: moving an irregular verb into the preterite is a two-step job. Swap in its preterite stem, then add the shared endings -e, -iste, -o, -imos, -isteis, -ieron, with no accents.",
          "The stems: u-stems (tener → tuv-, estar → estuv-, poder → pud-, poner → pus-), i-stems (hacer → hic-, querer → quis-, venir → vin-), j-stems (decir → dij-, traer → traj-), and fui... for both ser and ir. Weather with hacer moves too: hace sol → hizo sol.",
        ],
        [
          ["Hoy tengo clase. → Ayer tuve clase.","Today I have class. → Yesterday I had class. (tuv- + -e)"],
          ["Hoy hace sol. → Ayer hizo sol.","Today it's sunny. → Yesterday it was sunny. (hic- → hizo)"],
        ],
        [
          toEs("Hoy estoy en casa.", "Ayer estuve en casa.", "Estar has the preterite stem estuv- and the unaccented ending -e: estuve.", ["Ayer yo estuve en casa."], "Change it to yesterday."),
          mc("Andar (to walk, to go around) takes the stem anduv-. \"Hoy ando mucho\" → yesterday:", ["Ayer anduve mucho.","Ayer andé mucho.","Ayer anduvé mucho.","Ayer andí mucho."], 0, "A new u-stem works like the others: anduv- + -e = anduve, with no accent. \"Andé\" treats it as regular (it isn't)."),
        ]
      ),
      sec(
        "Watch the ellos form of j-stems",
        "After a j the ellos ending loses its i: dijeron, trajeron, condujeron, never \"dijieron\". Every other person keeps the normal ending: dijiste, trajimos.",
        [
          ["Ellos dicen la verdad. → Ellos dijeron la verdad.","They tell the truth. → They told the truth. (-eron after j)"],
        ],
        [
          toEs("Mis amigos traen comida.", "Ayer mis amigos trajeron comida.", "Traer → traj- + -eron, with no i after the j.", ["Mis amigos trajeron comida ayer."], "Change it to yesterday."),
        ]
      ),
    ],
    [
      toEs("Hoy voy al gimnasio.", "Ayer fui al gimnasio.", "Ir in the preterite: yo fui (the same form as ser).", ["Ayer yo fui al gimnasio."], "Change it to yesterday."),
      toEs("Hoy no puedo salir.", "Ayer no pude salir.", "Poder → pud- + -e: pude, no accent.", ["Ayer yo no pude salir."], "Change it to yesterday."),
      toEs("Hoy ella viene a comer.", "Ayer ella vino a comer.", "Venir → vin- + -o: vino (no accent on irregular endings).", ["Ayer vino a comer."], "Change it to yesterday."),
      toEs("Hoy pongo la mesa.", "Ayer puse la mesa.", "Poner → pus- + -e: puse.", ["Ayer yo puse la mesa."], "Change it to yesterday."),
      fb("Change it to yesterday.", "Hoy tengo frío y ayer también ___ frío.", "tuve", "Tener → tuv- + -e: tuve (u-group), no accent."),
      toEs("Hoy Pedro hace la compra.", "Ayer Pedro hizo la compra.", "Hacer → hizo: hic- + -o, with c → z to keep the soft sound.", undefined, "Change it to yesterday."),
      toEs("Hoy ellos dicen que sí.", "Ayer ellos dijeron que sí.", "J-stem ellos: dijeron, not \"dijieron\".", ["Ayer dijeron que sí."], "Change it to yesterday."),
      fb("Change it to yesterday.", "Hoy Marta está enferma, y ayer también ___ enferma.", "estuvo", "Estar → estuv- + -o: estuvo, no accent."),
      fb("Change it to yesterday.", "Hoy hace mucho viento, y ayer también ___ mucho viento.", "hizo", "Weather with hacer moves into the preterite as hizo (hic- + -o, c → z)."),
      mc("Transform: \"Nosotros hacemos la tarea.\" → yesterday", ["Nosotros hicimos la tarea.","Nosotros hacimos la tarea.","Nosotros hizimos la tarea.","Nosotros hicieron la tarea."], 0, "Hacer has the stem hic- in the preterite: hicimos. \"Hacimos\" uses the regular stem, \"hizimos\" wrongly uses z (only hizo has it), and \"hicieron\" is ellos."),
      mc("Transform: 'Ellos conducen toda la noche.' → yesterday", ["Ellos condujeron toda la noche.","Ellos condujieron toda la noche.","Ellos conducieron toda la noche.","Ellos condujo toda la noche."], 0, "J-stems drop the i in ellos: condujeron, like dijeron and trajeron. Condujo is él/ella."),
      mt("Match each present form to its preterite.", [["quiero","quise"],["digo","dije"],["tengo","tuve"],["soy","fui"]], "Irregular preterites never carry a written accent."),
      toEs("Ayer mis padres vienen a visitarme.", "Ayer mis padres vinieron a visitarme.", "Ayer needs the preterite: vienen → vinieron (vin- + -ieron).", ["Ayer mis padres me vinieron a visitar."], "Correct the sentence."),
      toEs("Ayer el profesor ponió mucha tarea.", "Ayer el profesor puso mucha tarea.", "Poner is a u-stem: pus- + -o, puso. \"Ponió\" uses regular endings on an irregular verb.", ["Ayer el profesor puso muchos deberes."], "Correct the sentence."),
      toEs("Ayer ustedes no pudieran venir.", "Ayer ustedes no pudieron venir.", "The ustedes preterite ending is -ieron: pudieron. Pudieran is a different form (imperfect subjunctive).", ["Ayer no pudieron venir."], "Correct the sentence."),
      toEs("Ayer tú trajistes vino.", "Ayer tú trajiste vino.", "The tú ending is -iste, never -istes: trajiste.", ["Ayer trajiste vino."], "Correct the sentence."),
      toEs("Yesterday I refused to eat.", "Ayer no quise comer.", "Quiero → quise; in the preterite no quise means \"I refused\".", ["No quise comer ayer."]),
      toEs("Yesterday we went to the gym and it was hard.", "Ayer fuimos al gimnasio y fue duro.", "Fuimos al gimnasio (ir) and fue duro (ser): the same family of forms.", ["Ayer fuimos al gimnasio y fue difícil."]),
      toEs("Yesterday I said nothing and I went home.", "Ayer no dije nada y fui a casa.", "Decir → dije; ir → fui. Double negative: no ... nada.", ["Ayer no dije nada y me fui a casa.","Ayer no dije nada y volví a casa."]),
      wo("¿Por qué no vinieron tus padres a la fiesta?", "Venir → vinieron (ellos).", "Why didn't your parents come to the party?"),
      wo("Ayer mis vecinos trajeron flores para mi madre", "Traen → trajeron (no i after j).", "Yesterday my neighbors brought flowers for my mother"),
      wo("Ayer no tuve tiempo y no hice nada", "Tengo → tuve, hago → hice.", "Yesterday I didn't have time and I didn't do anything"),
      toEs("Yesterday I was at work and then I went home.", "Ayer estuve en el trabajo y luego fui a casa.", "Estoy → estuve, voy → fui.", ["Ayer estuve en el trabajo y después fui a casa.","Ayer estuve en el trabajo y entonces fui a casa."]),
      { type: "speak", prompt: "Say it aloud, moving it to yesterday: \"Hoy tengo una reunión, hago un informe y digo muchas cosas.\"", text: "Ayer tuve una reunión, hice un informe y dije muchas cosas.", explanation: "Three stem swaps: tengo → tuve (u), hago → hice (i), digo → dije (j). Same endings, no accents." },
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
        [
          "Remember the rule: ser and ir share every preterite form (fui, fuiste, fue, fuimos, fuisteis, fueron), so you decide by what comes next. Followed by a (a place, a destination) or asked with adónde → ir, \"went\". Followed by an adjective, a noun or a description → ser, \"was\".",
          "Why it works: you can only GO somewhere, and you can only BE something. The words after the verb tell you which.",
        ],
        [
          ["Fui a Madrid en 2019.","I went to Madrid in 2019. (a + place: ir)"],
          ["Fue un viaje fantástico.","It was a fantastic trip. (a noun: ser)"],
          ["¿Quién fue tu primer profesor?","Who was your first teacher? (identity: ser)"],
        ],
        [
          mc("\"La fiesta fue muy divertida.\" Which verb is fue here?", ["ser (was)","ir (went)","either","estar"], 0, "Fue followed by an adjective (divertida) is ser: the party was fun. Ir would need a destination, so it's not \"either\", and estar's preterite is estuvo."),
          mc("\"Fue a la panadería.\" What did the person do?", ["Went to the bakery","Was a bakery","Was at the bakery","Worked at the bakery"], 0, "Fue + a + a place: ir, he/she went. \"Was at the bakery\" (location) would be estuvo en la panadería."),
        ]
      ),
      sec(
        "Mixed in one story",
        "Real stories use both, often in the same sentence: you went somewhere (ir) and it was something (ser).",
        [
          ["Fuimos al concierto y fue el mejor día del año.","We went to the concert and it was the best day of the year. (ir, then ser)"],
        ],
        [
          ms("In which sentences does the form come from IR?", ["Fueron al cine.","Fueron muy amables.","¿Adónde fuiste?","Fuiste mi mejor amigo."], [0,2], "Fueron al cine and ¿Adónde fuiste? have a destination, so they're ir. \"Fueron muy amables\" and \"Fuiste mi mejor amigo\" describe people, so they're ser."),
        ]
      ),
    ],
    [
      mt("Match each sentence to its meaning.", [["Fue a la playa.","He went to the beach."],["Fue difícil.","It was difficult."],["Fuimos compañeros.","We were classmates."],["Fuimos juntos.","We went together."]], "A destination or a direction → ir. A description or identity → ser."),
      mc("'Fue a Roma en mayo.' Fue means…", ["went (ir)","was (ser)","either","had"], 0, "Fue + a + a place = went."),
      mc("'Fue un error.' Fue means…", ["was (ser)","went (ir)","either","did"], 0, "Fue + a noun (un error) = was."),
      mc("'Fueron muy simpáticos.' Fueron means…", ["they were (ser)","they went (ir)","either","they had"], 0, "Fueron + an adjective = were."),
      mc("\"Ayer ___ mi cumpleaños.\" (Yesterday was my birthday.)", ["fue","fui","estuvo","iba"], 0, "A birthday is an event on a day, so ser in the preterite: fue. \"Fui\" is yo, \"estuvo\" is estar, and \"iba\" is imperfect ir (was going)."),
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Mis padres ___ a Cuba de luna de miel.", answer: "fueron", en: "My parents [went] to Cuba on their honeymoon.", explanation: "Going somewhere (a Cuba) is ir; ellos fueron is its preterite (the same form as ser)." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Mis abuelos ___ muy felices en ese pueblo.", answer: "fueron", en: "My grandparents [were] very happy in that town.", explanation: "Fueron + adjective = were (ser)." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Vosotros ___ los primeros en llegar.", answer: "fuisteis", en: "You all (Spain) [were] the first ones to arrive.", explanation: "Being the first ones is a description: ser, vosotros fuisteis." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "¿Cómo ___ el examen de ayer?", answer: "fue", en: "How [was] yesterday's exam?", explanation: "Asking for an evaluation: ser, fue." },
      toEs("Ella va a la oficina.", "Ella fue a la oficina.", "Va (ir) → fue. The destination stays, so it still means \"went\".", ["Fue a la oficina."], "Change it to the past."),
      toEs("Es un mal día.", "Fue un mal día.", "Es (ser) → fue. A description, so this fue means \"was\".", ["Fue un día malo."], "Change it to the past."),
      toEs("Yo fui al supermercado.", "Mis hermanos fueron al supermercado.", "Ellos: fueron. Al supermercado is a destination, so it's ir.", ["Fueron al supermercado."], "Change the subject to mis hermanos."),
      toEs("El concierto es increíble.", "El concierto fue increíble.", "Evaluation of a finished event: ser, fue.", undefined, "Change it to the past."),
      toEs("Ayer yo fue al supermercado con mi hermana.", "Ayer yo fui al supermercado con mi hermana.", "Yo takes fui; fue is for él/ella/usted.", ["Ayer fui al supermercado con mi hermana."], "Correct the sentence."),
      toEs("La película estuvo a las ocho y fue aburrida.", "La película fue a las ocho y fue aburrida.", "When an event takes place uses ser, not estar: la película fue a las ocho. Fue aburrida is ser too.", ["La película fue a las ocho y estuvo aburrida."], "Correct the sentence."),
      toEs("¿Quién fué a la tienda?", "¿Quién fue a la tienda?", "Fue is one syllable and never takes a written accent. (Quién keeps its accent: it's a question word.)", undefined, "Correct the sentence."),
      toEn("La película fue aburrida, así que fuimos a un bar.", "The movie was boring, so we went to a bar.", "First fue = ser (a description); fuimos + a = ir.", ["The film was boring, so we went to a bar."]),
      toEn("¿Quién fue el primer presidente?", "Who was the first president?", "Fue here is ser (identity: who someone was), not ir."),
      toEs("It was a great idea.", "Fue una gran idea.", "Ser in the preterite + gran before a singular noun.", ["Fue una idea genial.","Fue una idea buenísima."]),
      toEs("We went to a restaurant and the dinner was excellent.", "Fuimos a un restaurante y la cena fue excelente.", "Fuimos a = went; fue excelente = was."),
      wo("Fui al médico porque fue una semana muy mala.", "First fui = ir (a place); second fue = ser (a description).", "I went to the doctor because it was a very bad week."),
      wo("Fuimos al parque, pero fue un día muy frío", "Fuimos al = went (ir); fue un día = it was a day (ser).", "We went to the park, but it was a very cold day"),
      toEs("My father was a teacher and he went to work by bike.", "Mi padre fue profesor y fue al trabajo en bicicleta.", "Profession = ser; destination = ir. Same form, two verbs.", ["Mi padre fue maestro y fue al trabajo en bicicleta."]),
      toEs("They went to Paris in June and it was the best trip of their lives.", "Fueron a París en junio y fue el mejor viaje de su vida.", "Fueron a París (ir) + fue el mejor viaje (ser).", ["Fueron a París en junio y fue el mejor viaje de sus vidas."]),
      { type: "speak", prompt: "Answer aloud in Spanish: ¿Adónde fuiste el sábado y cómo fue? (Say you went to a wedding and it was very fun.)", text: "Fui a una boda y fue muy divertida.", explanation: "Fui a una boda (ir: destination) and fue muy divertida (ser: evaluation; divertida agrees with la boda)." },
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
        [
          "Remember the rule: questions and answers about how life used to be stay in the imperfect, because they describe habits and background, not single events. Only ser (era), ir (iba) and ver (veía) are irregular, and hay becomes había.",
          "Your mission: interview a grandmother about her childhood. Understand her answers, then ask your own questions and answer them about yourself.",
        ],
        [
          ["—Abuela, ¿dónde vivías cuando eras niña?","Grandma, where did you live when you were a girl? (vivías, eras: tú questions)"],
          ["—Vivía en un pueblo pequeño. No había coches.","I lived in a small town. There weren't any cars. (había = there was / were)"],
          ["—¿Y qué hacías después de la escuela?","And what did you do after school?"],
          ["—Ayudaba a mi madre y jugaba con mis hermanos en el río.","I helped my mother and played with my siblings at the river."],
        ],
        [
          mc("What did the grandmother do after school?", ["Helped her mother and played at the river","Watched TV","Worked in a shop","Studied at the library"], 0, "She says \"Ayudaba a mi madre y jugaba... en el río\": she helped her mother and played at the river. TV, a shop and the library aren't mentioned."),
          { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "—¿Cómo ___ tu casa? —Blanca y muy vieja.", answer: "era", en: "—What [was] your house like? —White and very old.", explanation: "Descriptions in the past take the imperfect, and ser's imperfect is era." },
        ]
      ),
      sec(
        "Your turn to answer",
        "Now answer about your own childhood. A tú question (vivías, ibas, veías) gets a yo answer (vivía, iba, veía). In the imperfect yo and él/ella look the same, so the question's person is what changes.",
        [
          ["Cuando era pequeño, iba a la playa todos los veranos.","When I was little, I went to the beach every summer."],
          ["Veía dibujos animados los sábados.","I used to watch cartoons on Saturdays."],
        ],
        [
          { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Todos los domingos mi familia ___ a misa.", answer: "iba", en: "Every Sunday my family [used to go] to Mass.", explanation: "Mi familia is singular, and a past habit takes the imperfect: iba." },
          toEs("¿Ibas a la escuela a pie?", "Sí, iba a la escuela a pie.", "A tú question (ibas) gets a yo answer (iba).", ["Sí, iba a pie.","Sí, yo iba a la escuela a pie."], "Answer yes, about yourself."),
        ]
      ),
    ],
    [
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "De niño, yo ___ mucha televisión.", answer: "veía", en: "As a kid, I [used to watch] a lot of TV.", altAnswers: ["miraba"], explanation: "Ver keeps its e in the imperfect: veía." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Mis hermanos y yo ___ en el jardín.", answer: "jugábamos", en: "My brothers and I [used to play] in the garden.", explanation: "Mis hermanos y yo = nosotros; -ar nosotros imperfect: -ábamos (accent on the á)." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "En mi pueblo no ___ internet.", answer: "había", en: "In my village there [was no] internet.", explanation: "Hay becomes había in the imperfect, for one thing or many." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "—¿Cómo se ___ tu maestra? —Se llamaba Rosa.", answer: "llamaba", en: "—What [was] your teacher's [name]? —Her name was Rosa.", explanation: "Llamarse in the imperfect for a past description: se llamaba." },
      mt("Match each question to a childhood answer.", [["¿Cómo eras?","Era muy tímido."],["¿Qué te gustaba comer?","Me encantaban los helados."],["¿Adónde ibas en verano?","Iba al campo."],["¿Tenías mascotas?","Sí, teníamos un perro."]], "All imperfect: descriptions, likes and habits in the past."),
      ms("Which sentences describe a past habit?", ["Siempre caminaba a la escuela.","Ayer caminé a la escuela.","Los viernes comíamos pescado.","Mi abuelo leía el periódico cada mañana."], [0,2,3], "Siempre caminaba, los viernes comíamos and leía cada mañana are past habits (imperfect). \"Ayer caminé\" is one completed event (preterite)."),
      mc("—¿Cómo era tu escuela? Which answer fits?", ["Era pequeña y muy vieja.","Fue pequeña y muy vieja.","Estuvo pequeña y muy vieja.","Iba pequeña y muy vieja."], 0, "Describing what a place was like takes the imperfect of ser: era. Fue presents it as a closed event, and estar / ir don't describe a building's features."),
      mc("The grandmother says «Mi padre era carpintero y trabajaba en casa». What do you learn?", ["Her father was a carpenter who worked at home","Her father became a carpenter one day","Her father worked at home once","Her father is a carpenter now"], 0, "Era (profession) and trabajaba (habit) describe how things were throughout her childhood, not one event and not the present."),
      mc("You want to ask her what games she played. Which question is right?", ["¿A qué jugabas?","¿A qué jugaste?","¿A qué juegas?","¿A qué jugabais tú?"], 0, "Asking about childhood habits uses the tú imperfect: jugabas. Jugaste asks about one occasion, juegas is the present, and jugabais is vosotros."),
      toEs("¿Con quién jugabas?", "Jugaba con mis primos.", "Tú question → yo answer: jugabas → jugaba.", ["Yo jugaba con mis primos."], "Answer: you played with your cousins."),
      toEs("¿Tenías amigos en el barrio?", "Sí, tenía muchos amigos.", "Tú question → yo answer: tenía. Tener is regular in the imperfect.", ["Sí, tenía muchos amigos en el barrio."], "Answer yes: you had lots of friends."),
      toEs("Vivía en una ciudad grande.", "Abuelo, ¿dónde vivías?", "To ask, switch yo (vivía) to tú (vivías).", ["¿Dónde vivías, abuelo?"], "Turn it into the question you ask Grandpa: where did you live?"),
      toEs("Era muy tranquilo.", "¿Cómo eras de niño?", "To ask a friend what they were like, use tú: eras.", ["¿Cómo eras de niña?","¿Cómo eras cuando eras niño?","¿Cómo eras cuando eras niña?"], "Turn it into a question to a friend: what were you like as a child?"),
      toEs("En mi pueblo no habían coches.", "En mi pueblo no había coches.", "Había, like hay, never goes plural when it means \"there was / there were\".", ["En mi pueblo no había carros."], "Correct the sentence."),
      toEs("Cuando fui niña, ayudaba a mi madre.", "Cuando era niña, ayudaba a mi madre.", "A stage of life is background: era, not fue.", undefined, "Correct the sentence."),
      toEs("Mis padres trabajaron mucho, así que yo ayudaba en casa.", "Mis padres trabajaban mucho, así que yo ayudaba en casa.", "Their work was an ongoing situation throughout her childhood, like her helping: trabajaban.", ["Mis padres trabajaban mucho, así que ayudaba en casa."], "Correct the sentence."),
      toEs("When I was a child, I lived in the country.", "Cuando era niño, vivía en el campo.", "Stage of life and ongoing situation → imperfect.", ["Cuando era niña, vivía en el campo.","Cuando yo era niño, vivía en el campo.","Cuando era pequeño, vivía en el campo.","Cuando era pequeña, vivía en el campo."]),
      toEs("Did you (tú) use to watch TV?", "¿Veías la televisión?", "Ver imperfect tú: veías.", ["¿Veías la tele?"]),
      toEs("There were no cars, so we walked everywhere.", "No había coches, así que caminábamos a todas partes.", "Había for existence, caminábamos for a habit.", ["No había carros, así que caminábamos a todas partes.","No había autos, así que caminábamos a todas partes.","No había coches, así que íbamos a pie a todas partes."]),
      toEs("My grandmother told me that she used to sing in a choir.", "Mi abuela me dijo que cantaba en un coro.", "Dijo for the one-time telling; cantaba for her old habit."),
      wo("Mi abuela siempre nos contaba historias antes de dormir.", "Siempre + imperfect for a repeated past action.", "My grandmother always told us stories before bed."),
      wo("Mis hermanos y yo veíamos películas los domingos", "Mis hermanos y yo = nosotros: veíamos.", "My siblings and I used to watch movies on Sundays"),
      { type: "speak", prompt: "Answer the grandmother aloud in Spanish: «¿Y tú? ¿Qué hacías después de la escuela?»", text: "Después de la escuela hacía los deberes y jugaba con mis amigos.", explanation: "Hacías (tú) → hacía (yo); jugaba keeps the imperfect for a habit. Any true answer in the imperfect works." },
    ]
  ),
  L(
    "imperfect-tense-2",
    "a2r-spiral-past-forms",
    "Spiral Review: Two Past Tenses + Beginner Essentials",
    "A cumulative check of preterite and imperfect forms, mixed with gustar, ser/estar and tener from the Beginner level.",
    "8 min",
    [
      sec(
        "Beginner verbs in the past",
        [
          "Remember the rule: every verb you learned at Beginner level has both past forms, and the choice follows the same logic. One finished event → preterite; a habit, a feeling or a state in the background → imperfect.",
          "Old patterns survive the move into the past. Gustar still agrees with the thing liked (me gustaba el café / me gustaron las películas), estar still marks states (estaba cansado), tener still gives age and feelings (tenía diez años, tenía hambre), and hay becomes había.",
        ],
        [
          ["De niño, no me gustaban las verduras.","As a child, I didn't like vegetables. (gustaban: plural thing, lasting feeling)"],
          ["Estaba cansado porque tenía mucho trabajo.","I was tired because I had a lot of work. (states: imperfect)"],
          ["Ayer me gustó mucho el concierto.","I really liked the concert yesterday. (one event: preterite)"],
        ],
        [
          { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "A mi padre le ___ los coches antiguos.", answer: "gustaban", en: "My father [liked] old cars.", explanation: "Gustar agrees with los coches (plural), and a lasting liking is background: gustaban." },
          { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Cuando ___ diez años, aprendí a nadar.", answer: "tenía", en: "When I [was] ten [years old], I learned to swim.", explanation: "Age uses tener, and age in the past is background: tenía." },
        ]
      ),
      sec(
        "Form check",
        "Quick form recall: preterite yo ends in -é / -í (hablé, comí); imperfect yo ends in -aba / -ía (hablaba, comía). Preterite él/ella ends in stressed -ó / -ió; imperfect él/ella looks like yo.",
        [
          ["hablé / hablaba","I spoke / I used to speak"],
          ["comí / comía","I ate / I used to eat"],
        ],
        [
          mt("Match each form to its meaning.", [["bailábamos","we used to dance"],["bailamos (ayer)","we danced"],["salió","he left"],["salía","he used to leave"]], "Imperfect -ar has -aba-; -er/-ir has -ía-. Preterite él/ella ends in stressed -ó / -ió."),
          toEs("Ayer comí en ese restaurante.", "Antes comía en ese restaurante.", "Antes + a habit → imperfect: comí (once) → comía (used to).", ["Antes yo comía en ese restaurante."], "Change it to a past habit, starting with \"antes\"."),
        ]
      ),
    ],
    [
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "La tienda ___ cerrada cuando llegamos.", answer: "estaba", en: "The store [was] closed when we arrived.", explanation: "A state (closed) uses estar, and it's the background to llegamos: estaba." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Las clases de la señora Ruiz ___ muy interesantes.", answer: "eran", en: "Mrs. Ruiz's classes [were] very interesting.", explanation: "A description in the past: ser in the imperfect, eran." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Ayer me ___ mucho la película.", answer: "gustó", en: "Yesterday I [liked] the movie a lot.", explanation: "One finished event (yesterday's movie): gustó, singular to agree with la película." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Antes nosotros ___ todos los fines de semana.", answer: "bailábamos", en: "We [used to dance] every weekend.", explanation: "A habit: imperfect bailábamos." },
      mc("\"When we arrived, there were a lot of people.\" How do you say \"there were a lot of people\"?", ["Había mucha gente.","Habían mucha gente.","Hubo mucha gente.","Estaba mucha gente."], 0, "Hay becomes había in the imperfect, and like hay it stays singular. \"Habían\" is a common mistake, \"hubo\" is preterite (a one-time event), and \"estaba\" can't express existence. Describing the scene is background, so imperfect."),
      ms("Which sentences are correct?", ["Me gustaron mucho los conciertos.","Nos gustaba ir al cine.","Le gustó las flores.","Te gustaban los videojuegos."], [0,1,3], "Gustar agrees with the thing liked: las flores is plural, so le gustaron. \"Le gustó las flores\" is wrong; the other three agree correctly."),
      mc("Which is correct for 'We had a dog' (for years, as kids)?", ["Teníamos un perro.","Tuvimos un perro ayer.","Tenemos un perro.","Teníamos uno perro."], 0, "Having a dog over a period is ongoing background: imperfect teníamos. \"Uno perro\" is wrong: uno shortens to un before a noun."),
      toEs("Salió a las cinco.", "Siempre salía a las cinco.", "Siempre makes it a habit: salió (once) → salía (used to).", ["Él siempre salía a las cinco.","Salía siempre a las cinco."], "Change it to a habit, adding \"siempre\"."),
      toEs("Me gusta la película.", "Me gustó la película.", "One finished experience → preterite. Gustar still agrees with la película (singular).", undefined, "Change it to yesterday's movie (past)."),
      toEs("Me gustan los tomates.", "De niño, me gustaban los tomates.", "A lasting liking in childhood → imperfect, plural to agree with los tomates.", ["De niña, me gustaban los tomates."], "Change it to a childhood memory, starting with \"de niño\"."),
      toEs("Ayer nos gustaron mucho la cena.", "Ayer nos gustó mucho la cena.", "Gustar agrees with the thing liked, la cena (singular): gustó.", undefined, "Correct the sentence."),
      toEs("Cuando era veinte años, vivía en Barcelona.", "Cuando tenía veinte años, vivía en Barcelona.", "Age uses tener, not ser: tenía veinte años.", undefined, "Correct the sentence."),
      toEs("Mi madre era cansada porque trabajaba mucho.", "Mi madre estaba cansada porque trabajaba mucho.", "Tired is a state, so it takes estar: estaba cansada.", undefined, "Correct the sentence."),
      toEs("We were at home because it was cold.", "Estábamos en casa porque hacía frío.", "Background states → imperfect: estábamos, hacía.", ["Nosotros estábamos en casa porque hacía frío."]),
      toEn("De pequeña, tenía miedo de los perros.", "As a little girl, I was afraid of dogs.", "Tener miedo in the imperfect for an ongoing past feeling.", ["When I was little, I was afraid of dogs.","As a child, I was afraid of dogs."]),
      toEs("I ate at a restaurant yesterday.", "Comí en un restaurante ayer.", "One finished event: comí.", ["Ayer comí en un restaurante."]),
      toEs("My grandparents' house was big.", "La casa de mis abuelos era grande.", "Description: ser in the imperfect."),
      wo("Cuando éramos jóvenes, íbamos a bailar todos los viernes.", "Ser and ir in the imperfect for a past stage of life and habit.", "When we were young, we went dancing every Friday."),
      wo("A mis hermanos les gustaban los videojuegos", "Gustaban agrees with los videojuegos.", "My brothers used to like video games"),
      toEs("Last night I was very hungry, so I made a sandwich.", "Anoche tenía mucha hambre, así que hice un sándwich.", "Tenía hambre (state) + hice (one action).", ["Anoche tenía mucha hambre, así que preparé un sándwich.","Anoche tenía mucha hambre y me hice un sándwich."]),
      toEs("We didn't like the hotel because it was dirty.", "No nos gustó el hotel porque estaba sucio.", "Gustó (judgment of the stay) + estaba sucio (state).", ["No nos gustaba el hotel porque estaba sucio."]),
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Ayer nosotros ___ hasta tarde.", answer: "bailamos", en: "Yesterday we [danced] until late.", explanation: "Ayer + one event: preterite bailamos (same form as the present for -ar nosotros)." },
      toEs("He always used to leave at five, but yesterday he left at seven.", "Siempre salía a las cinco, pero ayer salió a las siete.", "Habit (salía) vs. one event (salió).", ["Él siempre salía a las cinco, pero ayer salió a las siete."]),
      { type: "speak", prompt: "Say it in Spanish: When I was a child I didn't like fish, but yesterday I loved it.", text: "De niño no me gustaba el pescado, pero ayer me encantó.", explanation: "Gustaba: a lasting childhood dislike (imperfect). Encantó: one experience yesterday (preterite). Both agree with el pescado (singular)." },
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
        "Remember the rule: the imperfect sets the stage (time, weather, descriptions, what was going on); the preterite moves the plot (things that happened, one after another). Read the mystery as a detective: for each verb, ask whether it paints or pushes.",
        [
          ["Eran las ocho de la noche. Llovía mucho.","It was eight at night. It was raining hard. (time + weather: scene)"],
          ["Tomás estaba en la cocina y cocinaba la cena.","Tomás was in the kitchen making dinner. (in progress)"],
          ["Su bicicleta estaba delante de la casa, como siempre.","His bike was in front of the house, as always."],
        ],
        [
          mc("Why is \"Llovía mucho\" in the imperfect?", ["It's background weather.","It happened once.","It interrupted something.","Llover has no preterite."], 0, "Weather that sets the scene takes the imperfect. It didn't happen once or interrupt anything, and llover does have a preterite (llovió)."),
          mc("Where was Tomás's bike?", ["In front of the house","In the kitchen","In the park","At the neighbor's house"], 0, "Su bicicleta estaba delante de la casa: in front of the house, where it always was."),
        ]
      ),
      sec(
        "The action",
        "Now the plot moves. Each preterite is a new step: he heard, he went out, he saw, he called.",
        [
          ["De repente, Tomás oyó un ruido.","Suddenly, Tomás heard a noise. (de repente: event)"],
          ["Salió a la calle y vio que la bicicleta no estaba.","He went outside and saw that the bike wasn't there. (no estaba: the state he found)"],
          ["Llamó a su vecina, que tenía una cámara en la puerta.","He called his neighbor, who had a camera on her door. (tenía: description)"],
        ],
        [
          { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "La vecina ___ el video y vio a un chico con un perro.", answer: "miró", en: "The neighbor [watched] the video and saw a boy with a dog.", altAnswers: ["vio"], explanation: "A completed action that moves the plot → preterite." },
          mc("Why did Tomás call his neighbor?", ["She had a camera on her door.","She saw the thief from her window.","She was the owner of the bike.","She called the police."], 0, "Llamó a su vecina, que tenía una cámara en la puerta: her door camera might show what happened."),
        ]
      ),
    ],
    [
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "El chico ___ unos quince años y llevaba una gorra roja.", answer: "tenía", en: "The boy [was] about fifteen [years old] and was wearing a red cap.", explanation: "A description of a person (age) → imperfect." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Al día siguiente, Tomás ___ al chico en el parque.", answer: "encontró", en: "The next day, Tomás [found] the boy in the park.", explanation: "A single event that moves the plot → preterite." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "El chico le ___ la verdad: solo quería dar un paseo.", answer: "dijo", en: "The boy [told] him the truth: he only wanted to go for a walk.", explanation: "A single completed action → preterite of decir: dijo. (Quería is his state of mind: imperfect.)" },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "En el parque había un chico que ___ con un perro.", answer: "jugaba", en: "In the park there was a boy who [was playing] with a dog.", altAnswers: ["estaba jugando"], explanation: "An action in progress that describes the scene takes the imperfect." },
      mc("\"Cuando Tomás ___ al parque, el chico ___ con su perro.\"", ["llegó / jugaba","llegaba / jugó","llegó / jugó","llegaba / jugaba"], 0, "The arrival is a single event (preterite llegó), and the playing was already happening (imperfect jugaba). The wrong pairs make the arrival ongoing or the playing a completed event."),
      ms("Which of these sentences are background?", ["Hacía frío.","Tomás abrió la puerta.","El perro era pequeño y negro.","El chico devolvió la bici."], [0,2], "Hacía frío (weather) and era pequeño (description) are background, so imperfect. \"Abrió\" and \"devolvió\" are events that move the story, so preterite."),
      mc("«El chico ___ quince años cuando ___ la bici.»", ["tenía / tomó","tuvo / tomaba","tenía / tomaba","tuvo / tomó"], 0, "Age is background (tenía); taking the bike is the event (tomó)."),
      mc("Why did the boy take the bike?", ["He only wanted to go for a ride.","He wanted to sell it.","His own bike was broken.","Tomás lent it to him."], 0, "El chico le dijo la verdad: solo quería dar un paseo, he only wanted to go for a ride."),
      toEs("De repente, la vecina oye un grito.", "De repente, la vecina oyó un grito.", "A sudden event in the plot → preterite: oye → oyó.", undefined, "Change it to the past (tell the story)."),
      toEs("Su bicicleta es roja y muy vieja.", "Su bicicleta era roja y muy vieja.", "A description → imperfect: es → era.", ["Su bici era roja y muy vieja."], "Change it to the past (tell the story)."),
      toEs("Tomás sale y mira en la calle.", "Tomás salió y miró en la calle.", "Two actions one after another push the story forward: both preterite.", undefined, "Change it to the past (tell the story)."),
      toEs("Hace frío, pero el chico no lleva abrigo.", "Hacía frío, pero el chico no llevaba abrigo.", "Weather and clothing are both description, so both go to the imperfect.", ["Hacía frío, pero el chico no llevaba un abrigo."], "Change it to the past (tell the story)."),
      toEs("Fueron las ocho de la noche cuando oí un ruido.", "Eran las ocho de la noche cuando oí un ruido.", "Clock time in a story is background: eran, never fueron.", undefined, "Correct the police report."),
      toEs("Yo cociné la cena cuando alguien se llevó mi bicicleta.", "Yo cocinaba la cena cuando alguien se llevó mi bicicleta.", "The cooking was in progress when the theft happened: cocinaba.", ["Cocinaba la cena cuando alguien se llevó mi bicicleta.","Estaba cocinando la cena cuando alguien se llevó mi bicicleta."], "Correct the police report."),
      toEs("El chico llevó una gorra roja y corrió por la calle con un perro.", "El chico llevaba una gorra roja y corría por la calle con un perro.", "In a description of the suspect, what he was wearing and doing is background: llevaba, corría.", undefined, "Correct the police report (it describes the suspect)."),
      toEs("It was raining when he left the house.", "Llovía cuando salió de casa.", "The rain is background (imperfect llovía), and leaving is the event (preterite salió).", ["Estaba lloviendo cuando salió de casa.","Llovía cuando salió de la casa."]),
      toEs("The neighbor was watching TV when Tomás called.", "La vecina veía la televisión cuando Tomás llamó.", "Veía is the action in progress; llamó is the interruption.", ["La vecina veía la tele cuando Tomás llamó.","La vecina miraba la televisión cuando Tomás llamó.","La vecina miraba la tele cuando Tomás llamó.","La vecina estaba viendo la televisión cuando Tomás llamó.","La vecina estaba viendo la tele cuando Tomás llamó."]),
      toEs("The next day, Tomás went to the park.", "Al día siguiente, Tomás fue al parque.", "A single trip on a specific day: preterite fue, not iba."),
      toEs("The boy was nervous and returned the bike.", "El chico estaba nervioso y devolvió la bicicleta.", "His state is background (estaba); returning the bike is the event (devolvió).", ["El chico estaba nervioso y devolvió la bici."]),
      toEs("It was late when Tomás got home with his bike.", "Era tarde cuando Tomás llegó a casa con su bicicleta.", "Era tarde is background time; llegó is the event.", ["Era tarde cuando Tomás llegó a casa con su bici."]),
      wo("Mientras Tomás cocinaba, alguien se llevó la bicicleta.", "Mientras + imperfect for the ongoing action; preterite for the interruption.", "While Tomás was cooking, someone took the bike."),
      wo("El chico llevaba una gorra y corría por la calle", "Llevaba and corría describe what the boy looked like and was doing: imperfect.", "The boy was wearing a cap and was running down the street"),
      mc("Why is «Salió a la calle» in the preterite?", ["It's an action that moves the story forward.","It describes the scene.","It's a habit.","It was in progress."], 0, "Plot actions that happen one after another use the preterite."),
      { type: "speak", prompt: "You are Tomás. Tell the police aloud in Spanish what happened: it was eight o'clock, I was cooking, I heard a noise and my bike wasn't there.", text: "Eran las ocho, yo cocinaba, oí un ruido y mi bicicleta no estaba.", explanation: "Eran and cocinaba set the scene; oí is the event; no estaba describes what he found (a state, so imperfect)." },
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
        "Remember the rule: three questions to ask",
        [
          "Remember the rule: the tense shows how you see the action, so before you fix a verb, diagnose it. (1) Is it a single completed event? → preterite. (2) Is it background, description or a habit? → imperfect. (3) Is it an action in progress that got interrupted? → imperfect for the ongoing one, preterite for the interruption.",
          "Some sentences in this hunt are already correct. Don't change a verb unless one of the three questions says it's wrong.",
        ],
        [
          ["✗ Ayer iba al médico. → ✓ Ayer fui al médico.","Yesterday I went to the doctor. (one visit)"],
          ["✗ De niño, fui a la playa cada verano. → ✓ De niño, iba a la playa cada verano.","As a child, I went to the beach every summer. (habit)"],
        ],
        [
          mc("\"Cuando era niña, visité a mi abuela todos los domingos.\" What's wrong?", ["A weekly habit needs the imperfect: visitaba.","Era should be fue.","Todos los domingos needs the preterite.","Nothing is wrong."], 0, "Todos los domingos is a repeated habit, so the imperfect: visitaba. \"Era\" is right for background, and the habit phrase calls for the imperfect, not the preterite."),
          toEs("Mientras mi madre cocinó, yo puse la mesa.", "Mientras mi madre cocinaba, yo puse la mesa.", "Question 3: mientras introduces the action in progress → imperfect cocinaba. Puse can stay: setting the table is one completed action.", ["Mientras mi madre cocinaba, yo ponía la mesa."], "Correct the sentence."),
        ]
      ),
      sec(
        "Signal words aren't everything",
        "Siempre and todos los días usually go with the imperfect, but don't fix by signal word alone. A closed, measured period of time takes the preterite — even a long one: Vivimos en Lima diez años. The preterite sees the period from the outside, start to finish; the imperfect sees it from the inside, as the background to something else.",
        [
          ["Vivimos en Lima durante diez años.","We lived in Lima for ten years. (closed period)"],
          ["Vivíamos en Lima cuando nació mi hermano.","We were living in Lima when my brother was born. (background)"],
        ],
        [
          fb("Fix the tense.", "___ en esa escuela por seis años, de 2005 a 2011. (learner wrote: Estudiaba)", "Estudié", "A closed, measured period → preterite."),
        ]
      ),
    ],
    [
      fb("Fix the tense.", "Anoche ___ una película muy buena. (learner wrote: veía)", "vi", "A single event last night → preterite."),
      fb("Fix the tense.", "La casa ___ grande y tenía un jardín. (learner wrote: fue)", "era", "Describing the house takes the imperfect: era grande, not fue."),
      fb("Fix the tense.", "Mientras yo dormía, el teléfono ___. (learner wrote: sonaba)", "sonó", "The phone ringing interrupts the sleeping, so it's a single event in the preterite: sonó, not sonaba."),
      ms("Which sentences are already correct?", ["Eran las tres cuando llegó el paquete.","De repente, empezaba a llover.","Cuando tenía cinco años, aprendí a leer.","Ayer hacía mis tareas y fui al cine."], [0,2], "Eran las tres... llegó and cuando tenía cinco años, aprendí are correct. De repente marks a sudden event, so empezó, not \"empezaba\", and a single completed task yesterday is hice, not \"hacía\"."),
      mc("Which sentence has NO error?", ["Mi primer coche era rojo y lo compré en 2015.","Mi primer coche fue rojo y lo compraba en 2015.","Mi primer coche era rojo y lo compraba en 2015.","Mi primer coche fue rojo y lo compré en 2015."], 0, "Describing the car is background (era), and buying it was one event (compré). \"Fue rojo\" treats the color as an event, and \"compraba\" makes the purchase ongoing or habitual."),
      toEs("I was reading when my mother called.", "Leía cuando mi madre llamó.", "The ongoing action is imperfect (leía), and the interruption is preterite (llamó).", ["Estaba leyendo cuando mi madre llamó.","Yo leía cuando mi madre llamó.","Leía cuando me llamó mi madre."]),
      wo("Todos los veranos íbamos al pueblo de mis abuelos.", "Todos los veranos → a habit → imperfect.", "Every summer we went to my grandparents' village."),
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "El sábado pasado ___ a mis abuelos. (learner wrote: visitaba)", answer: "visité", en: "Last Saturday I [visited] my grandparents.", explanation: "One visit on a finished day: preterite, not imperfect." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Cuando ___ pequeño, mi padre trabajaba en un banco. (learner wrote: fui)", answer: "era", en: "When I [was] little, my father worked in a bank.", explanation: "Age/life stage is background: era, not fui." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Mientras ___, mi hermano entró en la habitación. (learner wrote: me duché)", answer: "me duchaba", en: "While I [was showering], my brother came into the room.", altAnswers: ["me estaba duchando","estaba duchándome"], explanation: "The ongoing action interrupted by entró needs the imperfect." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "___ las cuatro cuando terminé el examen. (learner wrote: Fueron)", answer: "Eran", en: "It [was] four o'clock when I finished the exam.", explanation: "Clock time in the past is always imperfect: eran." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Mi abuelo ___ en esa fábrica durante treinta años. (learner wrote: trabajaba)", answer: "trabajó", en: "My grandfather [worked] in that factory for thirty years.", explanation: "A closed, measured period takes the preterite." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Todos los domingos ___ paella en casa. (learner wrote: comimos)", answer: "comíamos", en: "Every Sunday we [ate] paella at home.", explanation: "Todos los domingos = past habit: imperfect comíamos." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "De repente, el perro ___ a correr. (learner wrote: empezaba)", answer: "empezó", en: "Suddenly, the dog [started] to run.", explanation: "De repente + sudden single event: preterite." },
      toEs("Cuando éramos niños, jugamos en la calle todas las tardes.", "Cuando éramos niños, jugábamos en la calle todas las tardes.", "Todas las tardes in a past life stage is a habit → imperfect jugábamos.", undefined, "Correct the sentence."),
      toEs("Mi hermana tuvo veinte años cuando se casó.", "Mi hermana tenía veinte años cuando se casó.", "Age is always background → tenía. Se casó is right: the wedding is the event.", undefined, "Correct the sentence."),
      toEs("Ayer el museo estaba cerrado, así que volvimos a casa.", "Ayer el museo estaba cerrado, así que volvimos a casa.", "Nothing to fix: estaba cerrado describes the situation (imperfect) and volvimos is the completed reaction (preterite).", ["El museo estaba cerrado ayer, así que volvimos a casa."], "Correct the sentence if needed (it may already be right)."),
      toEs("Ayer fui al gimnasio.", "Todos los días iba al gimnasio.", "Todos los días turns one visit into a habit → imperfect: fui → iba.", ["Iba al gimnasio todos los días."], "Change \"ayer\" to \"todos los días\"."),
      toEs("Esa noche cenamos fuera.", "Los viernes cenábamos fuera.", "Los viernes (every Friday) is a habit → imperfect cenábamos.", ["Todos los viernes cenábamos fuera."], "Change it to a habit with \"los viernes\"."),
      toEs("Cocino cuando llegan mis amigos.", "Cocinaba cuando llegaron mis amigos.", "In the past, the cooking is in progress (imperfect) and the arrival interrupts it (preterite).", ["Estaba cocinando cuando llegaron mis amigos.","Cocinaba cuando mis amigos llegaron."], "Change it to the past: the cooking was interrupted."),
      toEs("Yesterday I went to the bank and then to the gym.", "Ayer fui al banco y luego al gimnasio.", "Completed actions on a finished day: preterite fui, not iba.", ["Ayer fui al banco y después al gimnasio."]),
      toEs("When I was a student, I worked in a café on weekends.", "Cuando era estudiante, trabajaba en un café los fines de semana.", "A life stage (era) plus a weekend habit (trabajaba): both imperfect.", ["Cuando era estudiante, trabajaba en una cafetería los fines de semana."]),
      toEs("She lived in Mexico for two years.", "Vivió en México dos años.", "Closed period of two years: preterite vivió.", ["Vivió en México durante dos años.","Vivió dos años en México."]),
      toEs("We were living in Madrid when I met my wife.", "Vivíamos en Madrid cuando conocí a mi mujer.", "Background (vivíamos) + event (conocí, first meeting).", ["Vivíamos en Madrid cuando conocí a mi esposa."]),
      mc("«Ayer hacía la cena y luego veía la tele.» What's the fix?", ["Ayer hice la cena y luego vi la tele.","Ayer hacía la cena y luego vi la tele.","Ayer hice la cena y luego veía la tele.","Nothing is wrong."], 0, "Two completed actions in sequence on a finished day: both preterite."),
      mc("Which sentence has NO error?", ["El hotel era pequeño, pero nos gustó mucho.","El hotel fue pequeño y tuvo una piscina.","Ayer íbamos al hotel en taxi y llegamos a las diez."], 0, "Description (era) + overall reaction to a finished stay (gustó). The others use the wrong tense for description or a single trip."),
      wo("Cuando tenía cinco años, mi familia se mudó a Chile", "Age is background (tenía); the move is a single event (se mudó).", "When I was five, my family moved to Chile"),
      toEs("It was raining, so I didn't go out.", "Llovía, así que no salí.", "Background weather (llovía) + a completed decision (no salí).", ["Estaba lloviendo, así que no salí."]),
      { type: "speak", prompt: "A friend said «De niño, fui al parque cada día». Say the corrected sentence aloud in Spanish.", text: "De niño, iba al parque cada día.", explanation: "Cada día in childhood is a habit → imperfect iba, not fui." },
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
        [
          "Why do these verbs change meaning? They describe states (knowing, wanting, being able). The imperfect shows the state as it was; the preterite can only show a state as an event, so it picks out the moment it began, or the moment it was put to the test. That moment is what English names with a different verb.",
          "Conocer in the preterite means met (for the first time); in the imperfect, knew (already acquainted). Saber in the preterite means found out; in the imperfect, knew (the moment the knowing began vs. the knowing itself).",
        ],
        [
          ["Conocí a mi novia en 2018.","I met my girlfriend in 2018. (the knowing begins)"],
          ["Ya conocía a su familia.","I already knew her family. (the state)"],
          ["Supe la noticia ayer.","I found out the news yesterday. (the knowing begins)"],
          ["No sabía nada.","I didn't know anything. (the state)"],
        ],
        [
          mc("\"I found out the truth\" is…", ["Supe la verdad.","Sabía la verdad.","Conocí la verdad.","Conocía la verdad."], 0, "In the preterite, saber means found out: supe la verdad. \"Sabía\" means knew already, and conocer is for people and places, not facts."),
        ]
      ),
      sec(
        "Wanting and being able",
        "Quise = I tried (wanted and acted); no quise = I refused. Pude = I managed to; no pude = I failed to. The imperfect forms just describe the wish or ability, without saying what happened.",
        [
          ["Quise abrir la puerta, pero no pude.","I tried to open the door, but I couldn't. (the wish and the ability put to the test)"],
          ["No quiso venir.","He refused to come. (the not-wanting became an act)"],
          ["Quería viajar, pero no tenía dinero.","I wanted to travel, but I didn't have money. (just the wish)"],
        ],
        [
          { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Ella no ___ comer.", answer: "quiso", en: "She [refused] to eat.", explanation: "no querer in the preterite = refused. In the preterite, no querer means refused: no quiso comer." },
          mc("«Podía ver el mar desde mi ventana» means…", ["I could see the sea from my window (that was the situation).","I managed to see the sea once.","I tried to see the sea.","I found out where the sea was."], 0, "Podía (imperfect) only describes the ability as a situation. Managed to would be pude, tried quise, and found out supe."),
        ]
      ),
    ],
    [
      mt("Match each form to its English meaning.", [["conocí","I met"],["conocía","I knew (was acquainted with)"],["pude","I managed to"],["no pude","I failed to"]], "The preterite turns a state into an event: knowing → meeting; being able → managing."),
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Nos ___ en Barcelona.", answer: "conocimos", en: "We [met] in Barcelona.", explanation: "conocerse in the preterite = to meet. Meeting for the first time → preterite." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "No ___ que tenías una hermana.", answer: "sabía", en: "I didn't [know] that you had a sister.", explanation: "saber in the imperfect: ongoing knowledge. An ongoing state of knowledge → imperfect." },
      mc("\"Finalmente ___ terminar el proyecto.\" (Finally I managed to finish the project.)", ["pude","podía","quise","sabía"], 0, "In the preterite, poder means managed to: pude terminar. \"Podía\" means was able to (no result), \"quise\" means tried to, and \"sabía\" means knew."),
      toEn("Quisimos llamarte, pero no pudimos.", "We tried to call you, but we couldn't.", "Quisimos = we tried; no pudimos = we failed to.", ["We tried to call you but we couldn't.","We wanted to call you, but we couldn't."]),
      toEs("When did you (informal) find out?", "¿Cuándo supiste?", "Found out → preterite of saber.", ["¿Cuándo lo supiste?","¿Cuándo te enteraste?"]),
      wo("Conocí a tu hermano en la boda de Ana.", "Conocer in the preterite = met; personal a before a person.", "I met your brother at Ana's wedding."),
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "¿Cuándo ___ a tu novio?", answer: "conociste", en: "When did you (tú) [meet] your boyfriend?", explanation: "First meeting = conocer in the preterite." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Yo ya ___ ese restaurante.", answer: "conocía", en: "I already [knew] that restaurant.", explanation: "Already familiar = conocer in the imperfect." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Por fin ___ abrir la caja.", answer: "pude", en: "At last I [managed to] open the box.", explanation: "Pude = managed to; podía would only describe ability." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "No ___ dormir por el ruido.", answer: "pude", en: "I [couldn't] sleep because of the noise.", explanation: "No pude = tried and failed on that occasion." },
      { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "De niño, ___ nadar muy bien.", answer: "sabía", en: "As a child, I [could] swim very well.", altAnswers: ["podía"], explanation: "A skill you had over time: saber in the imperfect." },
      toEs("Mis abuelos ya se conocían.", "Mis abuelos se conocieron en un baile.", "The first meeting is an event → preterite: se conocían (already knew each other) → se conocieron.", ["Mis abuelos se conocieron en un baile en 1960."], "Change it to the moment they met, at a dance (en un baile)."),
      toEs("Mi jefe no quería firmar el contrato.", "Mi jefe no quiso firmar el contrato.", "Turning the reluctance into an actual refusal needs the preterite: no quiso.", undefined, "Change it so he refused."),
      toEs("Sabíamos que el tren llegaba tarde.", "Supimos que el tren llegaba tarde.", "Finding out is the moment the knowing begins → preterite supimos. Llegaba stays: it's the situation you learned about.", ["Supimos que el tren iba a llegar tarde."], "Change it to the moment you found out."),
      toEs("Ayer conocía a la nueva profesora.", "Ayer conocí a la nueva profesora.", "Ayer + a first meeting is an event → preterite conocí.", undefined, "Correct the sentence."),
      toEs("Por fin podía hablar con el médico después de una hora.", "Por fin pude hablar con el médico después de una hora.", "Por fin = you managed it at one moment → preterite pude. Podía would only describe the ability.", undefined, "Correct the sentence."),
      toEs("Supe tocar el piano cuando era niña.", "Sabía tocar el piano cuando era niña.", "A skill you had over a period is a state → imperfect sabía. Supe would mean found out.", ["Sabía tocar el piano cuando era niño."], "Correct the sentence."),
      toEs("We found out the price yesterday.", "Supimos el precio ayer.", "Found out = saber in the preterite.", ["Ayer supimos el precio."]),
      toEs("She refused to answer.", "No quiso contestar.", "Refused = no quiso; no quería only means she didn't want to.", ["No quiso responder."]),
      toEs("I wanted to go out, but I was very tired.", "Quería salir, pero estaba muy cansado.", "Quería describes the wish without saying you acted; quise would mean you tried.", ["Quería salir, pero estaba muy cansada."]),
      toEs("They tried to buy tickets, but they couldn't.", "Quisieron comprar entradas, pero no pudieron.", "Quisieron = tried; no pudieron = failed.", ["Intentaron comprar entradas, pero no pudieron.","Intentaron comprar boletos, pero no pudieron.","Quisieron comprar boletos, pero no pudieron.","Quisieron comprar billetes, pero no pudieron.","Quisieron comprar las entradas, pero no pudieron."]),
      toEs("I didn't know her brother.", "No conocía a su hermano.", "Not acquainted with a person: conocer in the imperfect, with personal a."),
      toEs("Ana couldn't come to the party.", "Ana no pudo venir a la fiesta.", "One occasion when she failed to come: no pudo (preterite); no podía would describe a general inability.", ["Ana no pudo ir a la fiesta."]),
      mc("«No pude terminar el examen.» means…", ["I failed to finish the exam.","I wasn't allowed to finish.","I didn't want to finish.","I used to be unable to finish exams."], 0, "No pude = you tried and failed on that occasion."),
      mc("'My grandmother could read without glasses (in general).'", ["Mi abuela podía leer sin gafas.","Mi abuela pudo leer sin gafas."], 0, "A general ability over time is podía; pudo would mean she managed it once."),
      wo("Cuando supe la verdad, no quise hablar con nadie", "Supe = found out; no quise = refused.", "When I found out the truth, I refused to talk to anyone"),
      toEs("When I met your sister, I already knew your parents.", "Cuando conocí a tu hermana, ya conocía a tus padres.", "Conocí = first meeting; ya conocía = already acquainted."),
      { type: "speak", prompt: "Say it aloud in Spanish: I tried to call you, but I couldn't, and then I found out the news.", text: "Quise llamarte, pero no pude, y luego supe la noticia.", explanation: "Quise = tried (wish turned into action); no pude = failed; supe = found out. Te quise llamar also works." },
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
        [
          "Remember the rule: two decisions every time. Which pronoun? Copy the noun's gender and number (lo, la, los, las). Where? In front of the conjugated verb, with no in front of the pronoun.",
          "People lose their personal a when they become a pronoun: Veo a las niñas → Las veo. The a only marks a noun person; the pronoun already is the object.",
        ],
        [
          ["Compro el pan. → Lo compro.", "I buy the bread. → I buy it."],
          ["Veo a las niñas. → Las veo.", "I see the girls. → I see them. (the a disappears)"],
          ["No tengo la dirección. → No la tengo.", "I don't have the address. → I don't have it. (no + la + verb)"],
        ],
        [
          fb("Replace the object.", "Leo la revista. → ___ leo.", "La", "La revista (feminine singular) → la, in front of leo."),
          fb("Replace the object.", "No conozco a tus padres. → No ___ conozco.", "los", "Tus padres is masculine plural → los. The personal a disappears, and no stays in front: no los conozco."),
        ]
      ),
      sec(
        "With infinitives and gerunds",
        "With an infinitive or a gerund, you have two options: attach the pronoun to the end, or put it before the conjugated verb. Never put it between the two verbs. Attaching to a gerund adds a syllable, so it needs a written accent to keep the stress where it was (buscando → buscándolo).",
        [
          ["Voy a llamar a Juan. → Voy a llamarlo. / Lo voy a llamar.", "I'm going to call him."],
          ["Estoy leyendo el libro. → Estoy leyéndolo. / Lo estoy leyendo.", "I'm reading it."],
        ],
        [
          ms(
            "Which are correct ways to say \"I want to buy them\" (los zapatos)?",
            ["Quiero comprarlos.", "Los quiero comprar.", "Quiero los comprar.", "Comprarlos quiero."],
            [0, 1],
            "The pronoun attaches to the infinitive (comprarlos) or goes before quiero (los quiero comprar). \"Quiero los comprar\" puts it between the verbs, and \"Comprarlos quiero\" scrambles the order."
          ),
        ]
      ),
    ],
    [
      fb("Replace the object.", "Necesitamos los documentos. → ___ necesitamos.", "Los", "Los documentos is masculine plural, so the pronoun is los, placed before the verb."),
      fb("Replace the object.", "¿Tienes las llaves? → ¿___ tienes?", "Las", "Las llaves is feminine plural, so las, before the verb. Questions keep the same order."),
      fb("Replace the object, attaching it.", "Voy a visitar a mi abuela. → Voy a ___.", "visitarla", "Attach la to the infinitive: visitarla. The personal a disappears."),
      fb("Replace the object, attaching it.", "Estoy escribiendo el correo. → Estoy ___.", "escribiéndolo", "Attach lo to the gerund and add an accent to keep the stress: escribiéndolo."),
      mc(
        "Transform: \"No encuentro mis gafas.\"",
        ["No las encuentro.", "No encuentro las.", "Las no encuentro.", "No los encuentro."],
        0,
        "Gafas is feminine plural, so las, and the order is no + pronoun + verb: No las encuentro. \"Encuentro las\" puts it after the verb, \"Las no\" puts no in the wrong place, and \"los\" is masculine."
      ),
      toEs("¿Dónde está el pastel? —Marta la comió.", "¿Dónde está el pastel? —Marta lo comió.", "El pastel is masculine, so lo. The subject Marta (a woman) doesn't matter: the pronoun copies the object.", ["¿Dónde está el pastel? Marta lo comió.", "¿Dónde está el pastel? —Marta se lo comió.", "¿Dónde está el pastel? Marta se lo comió."], "Correct the sentence."),
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
        [
          "Remember the rule: once an item has been mentioned, nobody repeats it. It becomes lo, la, los or las (copying its gender and number) in front of the conjugated verb, or attached to an infinitive.",
          "Your mission: go through the checklist with a friend, answer their questions and fix the packing notes. Watch for nouns whose ending lies: el paraguas (one umbrella, masculine), el mapa (masculine).",
        ],
        [
          ["—¿Tienes el pasaporte? —Sí, lo tengo aquí.", "Do you have the passport? — Yes, I have it here."],
          ["—¿Y las toallas? —No, no las tengo. Voy a comprarlas.", "And the towels? — No, I don't have them. I'm going to buy them."],
          ["—¿Metiste el cargador? —Sí, lo metí en la mochila.", "Did you pack the charger? — Yes, I put it in the backpack."],
        ],
        [
          fb("Answer the checklist question.", "—¿Tienes la crema solar? —Sí, ___ tengo.", "la", "La crema is feminine singular, so la, before the verb."),
          fb("Answer the checklist question.", "—¿Llevas los zapatos negros? —No, no ___ llevo.", "los", "Los zapatos is masculine plural, so los, after no and before the verb."),
        ]
      ),
      sec(
        "At the airport",
        "Pronouns also replace people: me, te, lo/la, nos, os, los/las. When the speaker changes, the pronoun flips: a question with me gets an answer with te, and nos gets os (Spain) or los (Latin America).",
        [
          ["—¿Quién te lleva al aeropuerto? —Mi hermano me lleva.", "Who's taking you to the airport? — My brother is taking me."],
          ["—¿Nos esperas en la puerta? —Sí, os espero allí.", "Will you wait for us at the gate? — Yes, I'll wait for you there."],
        ],
        [
          mc(
            "\"¿Me llamas cuando llegues?\" — \"Sí, ___ llamo.\"",
            ["te", "me", "lo", "la"],
            0,
            "You're asked \"will you call me?\" → \"yes, I'll call you\" = te llamo. \"Me llamo\" would mean my name is / I call myself, and lo / la would be him / her."
          ),
        ]
      ),
    ],
    [
      fb("Answer the question.", "—¿Compraste los billetes? —Sí, ___ compré ayer.", "los", "Los billetes → los, before compré."),
      fb("Answer the question.", "—¿Dónde pusiste la maleta? —___ puse en el coche.", "La", "La maleta is feminine singular, so la, before the verb: la puse."),
      mc(
        "\"Are you going to take the umbrella?\" — \"No, I'm not going to take it.\"",
        ["No, no voy a llevarlo.", "No, no voy a llevarla.", "No, no lo voy llevar.", "No, no voy a lo llevar."],
        0,
        "El paraguas is masculine, so lo, attached to the infinitive: no voy a llevarlo. \"Llevarla\" is feminine, \"no lo voy llevar\" drops a, and \"a lo llevar\" puts lo between a and the verb."
      ),
      ms(
        "Which answers to \"¿Tienes las gafas de sol?\" are correct?",
        ["Sí, las tengo.", "Sí, los tengo.", "No, no las encuentro.", "Sí, tengo las."],
        [0, 2],
        "Gafas is feminine plural, so las, placed before the verb: las tengo, no las encuentro. \"Los\" is masculine, and \"tengo las\" puts the pronoun after the verb."
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
      toEs("My mother is taking us to the station.", "Mi madre nos lleva a la estación.", "Nos (us) goes before the conjugated verb; the verb lleva agrees with mi madre.", ["Mi mamá nos lleva a la estación."]),
      mc(
        "Your friend asks: «¿Quién nos lleva al aeropuerto?» Your dad is driving you both. You answer:",
        ["Mi padre nos lleva.", "Mi padre os lleva.", "Mi padre nos llevamos.", "Mi padre lleva nos."],
        0,
        "You're both going, so the answer is about us: nos lleva. Os would leave you out (you all), \"llevamos\" makes the verb agree with us instead of mi padre, and the pronoun can't follow a conjugated verb."
      ),
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
        [
          "Remember the rule: the person who gets the present or the favor is the indirect object: me, te, le, nos, os, les, before the conjugated verb. Le / les don't show gender, so Spanish often doubles them with a + person: le compro un libro a mi padre.",
          "In a conversation the pronoun flips with the speaker: ¿Qué me regalas? → Te regalo... And the answer keeps the receiver of the question: ¿Qué le compras a tu abuela? → Le compro...",
        ],
        [
          ["—¿Qué le regalas a tu madre? —Le regalo unas flores.", "What are you giving your mom? — I'm giving her some flowers."],
          ["—¿Y a tus primos? —Les compro un videojuego.", "And your cousins? — I'm buying them a video game."],
        ],
        [
          fb("Complete the answer.", "—¿Qué le das a tu abuelo? —___ doy un reloj.", "Le", "A mi abuelo is the indirect object (he receives the watch), so le."),
        ]
      ),
      sec(
        "Asking for favors",
        "Favors use verbs like prestar, dejar, traer, explicar, mandar, all with someone who receives. Spanish asks for a favor with a simple present question: ¿Me prestas...? (literally \"do you lend me...?\").",
        [
          ["—¿Me prestas tu paraguas? —Claro, te presto el paraguas.", "Can you lend me your umbrella? — Sure, I'll lend you the umbrella. (me → te)"],
          ["—¿Nos explicas el problema?", "Can you explain the problem to us?"],
        ],
        [
          mc(
            "\"¿Me traes un café?\" means…",
            ["Will you bring me a coffee?", "Will I bring you a coffee?", "Did you bring me a coffee?", "Do I bring him a coffee?"],
            0,
            "Me means to/for me, and traes is tú (you bring): will you bring me a coffee? It's not I bring you, it's present rather than past, and it isn't about him."
          ),
          mc(
            "Your neighbors ask: «¿Nos dejas tu escalera?» You agree. You say:",
            ["Claro, os dejo la escalera. / Claro, les dejo la escalera.", "Claro, nos dejo la escalera.", "Claro, me dejan la escalera.", "Claro, le dejo la escalera."],
            0,
            "They ask about us (nos), so you answer about them: os dejo (Spain) or les dejo (Latin America). \"Nos dejo\" keeps their pronoun, \"me dejan\" reverses who gives, and le is only one person."
          ),
        ]
      ),
    ],
    [
      fb("Complete with the indirect object pronoun.", "¿___ mandaste la invitación a tus tíos?", "Les", "A tus tíos (plural) → les."),
      fb("Complete with the indirect object pronoun.", "Mi jefe ___ explicó el proyecto.", "nos", "To us → nos, before the verb. Adding a nosotros is only for emphasis."),
      mc(
        "\"Can you (informal) send me the photos?\"",
        ["¿Me mandas las fotos?", "¿Te mandas las fotos?", "¿Me mando las fotos?", "¿Le mandas las fotos?"],
        0,
        "Me means to me, and mandas is the tú form (you send): ¿Me mandas las fotos? \"Te mandas\" would be you send yourself, \"me mando\" is I send myself, and \"le\" is to him or her."
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
      toEs("Escribí una carta a mi abuela.", "Le escribí una carta a mi abuela.", "Spanish keeps le even when the receiver is named: le escribí ... a mi abuela.", ["Le escribí una carta a mi abuelita."], "Correct the sentence."),
      mc(
        "A friend asks: «¿Qué te regalaron tus padres?» Which answer fits?",
        ["Me regalaron un reloj.", "Te regalaron un reloj.", "Les regalé un reloj.", "Me regalé un reloj."],
        0,
        "Te (to you) in the question → me in your answer, and the verb stays regalaron (they, your parents). \"Les regalé\" means you gave them something, and \"me regalé\" means you treated yourself."
      ),
      wo("A mi hermana le encanta cuando le cocino pasta.", "Two indirect objects: le encanta (gustar-type) and le cocino (for her).", "My sister loves it when I cook pasta for her."),
    ]
  ),
  L(
    "indirect-object-pronouns-2",
    "a2r-contrast-lo-le",
    "Contrast Clinic: Lo/La vs. Le",
    "Direct or indirect? You'll learn to choose between lo/la and le/les, including tricky verbs such as esperar, buscar, preguntar and contestar.",
    "7 min",
    [
      sec(
        "What vs. to whom",
        [
          "Remember the rule: lo / la / los / las replace whatever the verb acts on directly, thing or person. Le / les replace the person who receives something (a thing, words, an answer).",
          "Quick test: is something passing to the person? Then le. \"To\" in English is only a rough clue: \"wait for\", \"look for\" and \"listen to\" are direct in Spanish because esperar, buscar and escuchar already contain the preposition (la espero, lo busco, la escucho).",
        ],
        [
          ["Veo a Pedro. → Lo veo.", "I see Pedro. → I see him. (direct)"],
          ["Escribo a Pedro. → Le escribo.", "I write to Pedro. → I write to him. (indirect: a letter passes to him)"],
          ["Escucho a mis abuelos. → Los escucho.", "I listen to my grandparents. → I listen to them. (escuchar is direct)"],
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
          fb("Replace the person.", "Pregunto a la profesora. → ___ pregunto.", "Le", "With preguntar, the person you ask receives the question, so she is an indirect object: le pregunto, not la pregunto."),
        ]
      ),
    ],
    [
      fb("Replace the person.", "Ayudo a mi vecina. → ___ ayudo.", "La", "Ayudar acts directly on the person (English 'help' has no 'to'), and mi vecina is feminine: la ayudo, not le ayudo."),
      fb("Replace the person.", "Contesto a mis padres. → ___ contesto.", "Les", "With contestar, the person receives your answer, so it's an indirect object; mis padres is plural: les contesto, not los."),
      fb("Replace the person.", "Invito a Carlos y a Luis. → ___ invito.", "Los", "Invitar acts directly on the people (no 'to' in English), and Carlos y Luis are masculine plural: los invito, not les."),
      ms(
        "Which sentences use the pronoun correctly?",
        ["Le di un regalo.", "La escribí una carta.", "Los vi en el parque.", "Le dije adiós."],
        [0, 2, 3],
        "Escribir a alguien takes an indirect object: le escribí una carta, so \"La escribí una carta\" is wrong. The other three are correct."
      ),
      ms(
        "Replacing Ana with a pronoun: which of these take le (not la)?",
        ["visitar a Ana", "hablar a Ana", "esperar a Ana", "mandar un mensaje a Ana"],
        [1, 3],
        "Speaking or sending something to someone makes them the indirect object: le. Visitar a Ana and esperar a Ana make her the direct object, so la."
      ),
      toEs("Le vi y la di el libro. (a Ana)", "La vi y le di el libro.", "The pronouns were swapped: ver acts directly on Ana (la vi), and dar passes the book to her (le di).", ["La vi y le di el libro a ella."], "Correct the sentence."),
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
        [
          "Remember the rule: the reflexive pronoun belongs to the person, not to the tense, so it stays in front of the conjugated verb in the past too: me desperté, te duchaste, se vistió.",
          "Only the verb changes, and it follows its own preterite pattern: -ar verbs are regular (me acosté: the present's o → ue disappears), while -ir stem-changers shift in the él / ellos forms (se vistió, se durmieron). Your mission: tell a friend about the disaster and answer their questions.",
        ],
        [
          ["Ayer me desperté tarde porque no sonó la alarma.", "Yesterday I woke up late because the alarm didn't go off."],
          ["Me duché en dos minutos y me vestí muy rápido.", "I showered in two minutes and got dressed really fast."],
          ["No me peiné y me olvidé de las llaves.", "I didn't comb my hair and I forgot my keys."],
        ],
        [
          fb("Continue the story.", "Mi compañero de piso también ___ tarde. (levantarse)", "se levantó", "Él → se levantó."),
          mc(
            "Your friend asks: «¿Te maquillaste antes de salir?» You didn't have time. You answer:",
            ["No, no me maquillé.", "No, no te maquillaste.", "No, no me maquillo.", "No, no se maquilló."],
            0,
            "Te in the question → me in your answer, and keep the preterite: no me maquillé. \"Me maquillo\" is present (a habit), and the others are about someone else."
          ),
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
            "The routine uses the present (me levanto) and yesterday the preterite (me levanté), and the reflexive me stays in both. The wrong options swap the tenses or drop or change the pronoun."
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
        "With reflexive verbs and body parts, Spanish uses the article, not a possessive: me lavé la cara. \"Lavé mi cara\" copies English. The other two are correct."
      ),
      toEs("Se levanta, se viste y se va.", "Se levantó, se vistió y se fue.", "Each pronoun stays; only the verbs move to the preterite: se levantó, se vistió (e → i), se fue (irse).", ["Ella se levantó, se vistió y se fue."], "Change it to yesterday (preterite)."),
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
        [
          "Remember the rule: without se, you act on someone or something else, which follows the verb. With se, the action falls back on the subject, and there's no one else to name.",
          "Quick check: if you can ask \"whom / what?\" and get an answer other than the subject (lavo... el coche), no se. If the answer is \"myself\", add the pronoun.",
        ],
        [
          ["Lavo el coche. / Me lavo.", "I wash the car. / I wash (myself)."],
          ["Acuesto al bebé. / Me acuesto.", "I put the baby to bed. / I go to bed."],
        ],
        [
          mc(
            "\"La madre ___ a su hijo.\" (The mother dresses her son.)",
            ["viste", "se viste", "se vistió a", "te viste"],
            0,
            "She acts on someone else, so no reflexive pronoun: viste a su hijo. \"Se viste\" means she dresses herself, \"se vistió a\" adds se and changes tense, and \"te viste\" is about tú."
          ),
        ]
      ),
      sec(
        "When se changes the meaning",
        "Some pairs aren't just \"myself\": se shifts the meaning. Ir (go somewhere) / irse (leave, go away); dormir (sleep) / dormirse (fall asleep, the moment sleep starts); llamar (call) / llamarse (be named, literally call oneself); poner (put) / ponerse (put on). Ir needs a destination; irse doesn't.",
        [
          ["Voy al cine. / Me voy.", "I'm going to the movies. / I'm leaving."],
          ["Duermo ocho horas. / Me duermo en clase.", "I sleep eight hours. / I fall asleep in class."],
        ],
        [
          fb("Choose with or without se.", "¡Es tarde! Nos ___ ahora mismo. (ir)", "vamos", "Irse = to leave: nos vamos."),
          mc(
            "Quedar = to arrange to meet; quedarse = to stay. \"I'm staying at home tonight.\"",
            ["Me quedo en casa esta noche.", "Quedo en casa esta noche.", "Me quedo a casa esta noche.", "Se queda en casa esta noche."],
            0,
            "Staying is quedarse, with me for yo: me quedo en casa. Without me, quedo means I arrange to meet, \"a casa\" is for movement, and se queda is él / ella."
          ),
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
      fb("With or without se?", "El profesor habla tanto que los estudiantes ___ duermen. (they fall asleep)", "se", "Falling asleep → dormirse: se duermen."),
      mc("\"My dog sleeps on the sofa all afternoon.\" (just sleeping, not falling asleep)", ["Mi perro duerme en el sofá toda la tarde.", "Mi perro se duerme en el sofá toda la tarde.", "Mi perro le duerme en el sofá toda la tarde.", "Mi perro se dormí en el sofá toda la tarde."], 0, "Plain sleeping is dormir with no se: duerme. \"Se duerme\" means he falls asleep, \"le duerme\" isn't Spanish, and \"se dormí\" mixes se with the yo form."),
      mc(
        "\"I wash my hands.\"",
        ["Me lavo las manos.", "Lavo mis manos.", "Me lavo mis manos.", "Lavo me las manos."],
        0,
        "Use the reflexive pronoun and the article with body parts: me lavo las manos. \"Lavo mis manos\" and \"me lavo mis manos\" use a possessive Spanish avoids, and \"Lavo me\" puts the pronoun after the verb."
      ),
      ms(
        "Which sentences need a reflexive pronoun?",
        ["___ ducho por la mañana.", "___ baño al perro los sábados.", "¿Cómo ___ llamas?", "___ despierto a mis hijos a las siete."],
        [0, 2],
        "Showering yourself (me ducho) and your name (te llamas) are reflexive. Bathing the dog and waking your kids act on someone else, so there's no reflexive pronoun."
      ),
      toEs("Voy porque me estoy durmiendo.", "Me voy porque me estoy durmiendo.", "Ir without a destination doesn't work: leaving is irse, me voy. Dormirse (fall asleep) is already right.", ["Me voy porque me duermo.", "Me voy porque estoy durmiéndome."], "Correct the sentence."),
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
        [
          "Remember the rule: unequal → más / menos + word + que; equal → tan + adjective + como, or tanto / tanta / tantos / tantas + noun + como (tanto agrees because it counts the noun).",
          "Your mission: read both listings, compare them and decide. Base every comparison on the facts in the listings.",
        ],
        [
          ["Piso A: 70 m², 900 € al mes, 2 dormitorios, en el centro, mucha luz.", "Apartment A: 70 m², €900/month, 2 bedrooms, downtown, lots of light."],
          ["Piso B: 90 m², 750 € al mes, 2 dormitorios, lejos del centro, poca luz.", "Apartment B: 90 m², €750/month, 2 bedrooms, far from downtown, little light."],
        ],
        [
          mc(
            "Which sentence is true?",
            ["El piso A es más caro que el piso B.", "El piso A es más grande que el piso B.", "El piso B es más céntrico que el piso A.", "El piso B tiene más luz que el piso A."],
            0,
            "A costs 900 € and B 750 €, so A is more expensive. The other statements contradict the listing's size, location and light."
          ),
          fb("Compare the bedrooms.", "El piso A tiene ___ dormitorios como el piso B.", "tantos", "Tanto agrees with dormitorios (masculine plural) → tantos … como."),
        ]
      ),
      sec(
        "Making the decision",
        "Irregular comparatives help you give an opinion: mejor (better), peor (worse), with no más in front. To pick one of two (or of all), add the article: el mejor de los dos, el más barato de la calle.",
        [
          ["Para mí, el piso A es mejor porque está en el centro.", "For me, apartment A is better because it's downtown."],
          ["Pero el piso B es el más barato de los dos.", "But apartment B is the cheaper of the two."],
        ],
        [
          fb("Complete the opinion.", "La luz del piso B es ___ que la del piso A. (worse)", "peor", "Malo → peor."),
          mc(
            "Your partner asks: «¿Cuál es más barato?» You answer with the facts:",
            ["El piso B es más barato que el A.", "El piso A es más barato que el B.", "El piso B es tan barato como el A.", "El piso B es más barato como el A."],
            0,
            "B costs 750 € and A 900 €, so B is cheaper: más barato que. Tan ... como would say they cost the same, and más pairs with que, not como."
          ),
        ]
      ),
    ],
    [
      fb("Compare the size.", "El piso B es ___ grande que el piso A.", "más", "B (90 m²) is bigger than A (70 m²), so más grande que."),
      fb("Compare the size.", "El piso A es ___ grande que el piso B.", "menos", "A (70 m²) is smaller than B (90 m²), so menos grande que."),
      mc(
        "\"Apartment B isn't as central as apartment A.\"",
        ["El piso B no es tan céntrico como el piso A.", "El piso B no es tanto céntrico como el piso A.", "El piso B no es tan céntrico que el piso A.", "El piso B no es más céntrico como el piso A."],
        0,
        "Equality with an adjective is tan + adjective + como. \"Tanto\" goes with nouns, \"que\" belongs with más/menos, and \"más... como\" mixes the two patterns."
      ),
      ms(
        "Which comparisons are grammatically correct?",
        ["El piso A cuesta más que el B.", "El piso B es más mejor.", "El piso A tiene tanta luz como una casa.", "Este es el piso más bonito del barrio."],
        [0, 2, 3],
        "Mejor is already a comparative, so \"más mejor\" is never correct. The other three are correct comparisons and a superlative."
      ),
      toEs("This apartment is the biggest in the building.", "Este piso es el más grande del edificio.", "Superlative: el más + adjective + de (not en).", ["Este apartamento es el más grande del edificio.", "Este departamento es el más grande del edificio."]),
      toEs("El piso B tiene menos luz pero cuesta menos.", "El piso A tiene más luz pero cuesta más.", "Flip both comparisons for the other flat: más luz (noun), cuesta más (verb).", ["El piso A tiene más luz, pero cuesta más."], "Change it to describe apartment A."),
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
        [
          "Remember the rule: each comparison has a fixed partner word. Más / menos pair with que, tan / tanto pair with como, a superlative's group takes de, and a number after más / menos takes de. Mejor, peor, mayor, menor already contain \"more\", so they never take más.",
          "The four classic slips: (1) más mejor → mejor. (2) tan … que → tan … como. (3) el más alto en la clase → el más alto de la clase. (4) más que + number → más de + number.",
        ],
        [
          ["✗ Es más mejor. → ✓ Es mejor.", "It's better."],
          ["✗ Tengo más que cien libros. → ✓ Tengo más de cien libros.", "I have more than a hundred books."],
        ],
        [
          mc(
            "Fix \"Ana es tan alta que su hermana.\"",
            ["Ana es tan alta como su hermana.", "Ana es tanta alta como su hermana.", "Ana es más alta como su hermana.", "No fix needed."],
            0,
            "Equality is tan + adjective + como, so replace que with como. \"Tanta\" wrongly agrees an adverb, \"más... como\" mixes patterns, and the original does need fixing."
          ),
        ]
      ),
      sec(
        "Mayor and menor",
        "With people's ages, mayor (older) and menor (younger) are the usual choice. Más joven is also fine; más viejo can sound blunt. Mayor and menor are already comparative, so in a comparison they don't take más: ✗ más menor que yo.",
        [
          ["Mi hermano es mayor que yo.", "My brother is older than me."],
          ["Soy el menor de la familia.", "I'm the youngest in the family."],
        ],
        [
          { ...fb("Fix the comparison.", "Mi prima es ___ que yo; tiene veinte años y yo tengo veinticinco. (learner wrote: más menor)", "menor", "Menor already means \"younger\", so it doesn't take más: menor que yo (or más joven que yo)."), altAnswers: ["más joven"] },
        ]
      ),
    ],
    [
      fb("Fix the comparison.", "Este restaurante es el más caro ___ la ciudad. (learner wrote: en)", "de", "Superlatives use de for the group."),
      fb("Fix the comparison.", "Hay ___ de veinte personas en la fila. (learner wrote: más que)", "más", "Before a number, más de: más de veinte."),
      fb("Fix the comparison.", "Mi coche es ___ que el tuyo. (learner wrote: más bueno)", "mejor", "For quality, bueno has the irregular comparative mejor, not más bueno."),
      ms(
        "Which sentences contain an error?",
        ["No tengo tanto dinero como tú.", "Juan corre más rápido que Luis.", "Es la chica más inteligente que su clase.", "Este libro es peor que el otro."],
        [2],
        "A superlative names its group with de (la chica más inteligente de su clase), not with que, so \"que su clase\" is the error. The other three are correct."
      ),
      mc(
        "Which is correct?",
        ["Tengo tantas amigas como tú.", "Tengo tantos amigas como tú.", "Tengo tan amigas como tú.", "Tengo tantas amigas que tú."],
        0,
        "Tanto agrees with the noun, and equality uses como: tantas amigas como tú. \"Tantos\" is masculine, \"tan\" is for adjectives, and \"que\" belongs with más/menos."
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
        [
          "Remember the rule: the simple future is the whole infinitive + -é, -ás, -á, -emos, -éis, -án, or the same endings on a short irregular stem (tendr-, har-, dir-, vendr-, podr-, sabr-...).",
          "Horoscopes, forecasts and promises are pure future tense because they state what will happen with confidence. Your mission: read a horoscope, make promises and answer questions about the future.",
        ],
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
        "The future is also the tense of promises and resolutions. Te prometo que + future is the classic frame, and nunca más / todos los días make a promise strong.",
        [
          ["Te llamaré todos los días.", "I'll call you every day."],
          ["No lo haré nunca más.", "I'll never do it again."],
        ],
        [
          mc(
            "\"I promise I'll come to your party.\"",
            ["Te prometo que vendré a tu fiesta.", "Te prometo que veniré a tu fiesta.", "Te prometo que venía a tu fiesta.", "Te prometo que vendrá a tu fiesta."],
            0,
            "Venir has the future stem vendr-, and yo adds -é: vendré. \"Veniré\" treats it as regular, \"venía\" is imperfect, and \"vendrá\" is él/ella, not I."
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
        "Saber has the future stem sabr-, and nosotros adds -emos: sabremos. \"Saberemos\" keeps the e, \"sabemos... pasado\" is present with a past time, and \"sabrán\" is ellos."
      ),
      toEs("Hay mucha gente en el concierto.", "Habrá mucha gente en el concierto.", "Hay → habrá in the future (haber → habr-), still singular even with mucha gente.", [], "Change it to the future."),
      mc(
        "A friend asks: «¿Qué harás cuando termines la universidad?» Which answer fits?",
        ["Buscaré trabajo en otro país.", "Busqué trabajo en otro país.", "Buscaba trabajo en otro país.", "Buscará trabajo en otro país."],
        0,
        "Harás asks about your future, so answer in the future with yo: buscaré. Busqué and buscaba are past, and buscará is él / ella."
      ),
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
        [
          "Remember the rule: four forms, four jobs. Imperfect = background and past habits (vivía); preterite = completed past events (se mudó); present = now and routines (trabaja); future = what will happen (abrirá).",
          "Read Carla's story. Each sentence uses a different time frame: identify it before you answer. The time word usually tells you which form to pick.",
        ],
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
            "Se mudó is the preterite: a single completed move (in 2019). It's not a habit, the present or the future."
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
          mc(
            "«De pequeños, mis hermanos y yo ___ en el río todos los veranos.» (bañarse)",
            ["nos bañábamos", "nos bañamos ayer", "nos bañaremos", "nos bañan"],
            0,
            "De pequeños + todos los veranos = a past habit → imperfect: nos bañábamos. The future would be a plan, and ayer a single event."
          ),
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
        "Past events go with past time words and future ones with future words. \"Mañana fui\" mixes tomorrow with a preterite; it should be iré or voy a ir."
      ),
      toEs("I used to live in Lima, now I live in Quito, and next year I'll live in Madrid.", "Antes vivía en Lima, ahora vivo en Quito y el año que viene viviré en Madrid.", "Antes takes the imperfect (vivía), ahora the present (vivo), and el año que viene the future (viviré).", ["Antes vivía en Lima, ahora vivo en Quito y el próximo año viviré en Madrid."]),
      wo("Cuando tenía diez años decidí ser médico.", "Imperfect (age) + preterite (decision). Decidí + infinitive = I decided to do something.", "When I was ten I decided to be a doctor."),
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
        [
          "Remember the rule: para points forward, to where the trip is heading and what it is for (destination, deadline, purpose, recipient). Por covers the journey itself and what lies behind it (the route through a place, how long, the price paid, the cause).",
          "Your mission: plan a trip to Mexico, answer the travel agent and fix your own notes. Each time, ask: is this the target, or the path / the reason?",
        ],
        [
          ["Salimos para Cancún el lunes.", "We're leaving for Cancún on Monday. (where we're heading → para)"],
          ["Vamos a estar allí por dos semanas.", "We'll be there for two weeks. (the length of the stay → por)"],
          ["Pagamos 800 dólares por los billetes.", "We paid $800 for the tickets. (price paid → por)"],
          ["Necesitamos el pasaporte para viajar.", "We need the passport to travel. (what it's for → para)"],
        ],
        [
          fb("Complete the plan.", "El viernes pasearemos ___ la playa.", "por", "Movement through or along a place → por."),
          mc(
            "The agent asks: «¿Para cuándo quiere el hotel?» Which answer fits?",
            ["Para el 3 de julio.", "Por el 3 de julio.", "Porque el 3 de julio.", "Por qué el 3 de julio."],
            0,
            "¿Para cuándo? asks for the target date, so you answer with para + date. Por el 3 de julio would mean 'around' or 'because of' that date; porque needs a full clause."
          ),
        ]
      ),
      sec(
        "Souvenirs and thanks",
        "A present is aimed at the person who gets it, so recipients take para. Thanks look back at what someone did, so gratitude takes por, like any cause.",
        [
          ["Compré un collar para mi hermana.", "I bought a necklace for my sister. (she receives it → para)"],
          ["Gracias por la ayuda.", "Thanks for the help. (the reason for the thanks → por)"],
        ],
        [
          mc(
            "\"This hat is for my dad.\"",
            ["Este sombrero es para mi papá.", "Este sombrero es por mi papá.", "Este sombrero es a mi papá.", "Este sombrero es de mi papá para."],
            0,
            "Para marks the recipient: para mi papá. \"Por mi papá\" would mean because of him or on his behalf, \"a mi papá\" isn't used this way, and \"de mi papá para\" is garbled."
          ),
        ]
      ),
    ],
    [
      fb("Complete with por or para.", "Tenemos que reservar el hotel ___ el 15 de mayo.", "para", "Para + date marks the date something is planned for or due by: para el 15 de mayo (por cannot mark this target date)."),
      fb("Complete with por or para.", "El vuelo se canceló ___ la tormenta.", "por", "Por gives the cause: se canceló por la tormenta."),
      fb("Complete with por or para.", "Te mando las fotos ___ correo electrónico.", "por", "Means of sending or communicating → por: por correo, por teléfono. (For travelling, Spanish normally says en tren, en autobús.)"),
      fb("Complete with por or para.", "Ahorro dinero ___ el viaje.", "para", "Para marks the goal: saving for the trip."),
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
        [
          "Remember the rule: para looks ahead to a target (purpose, recipient, destination, deadline, opinion), por looks back or along the way (cause, exchange, duration, means, route, on behalf of).",
          "English \"for\" hides the difference, so learners guess, and two guesses go wrong most often. Thanks look back at what someone did, so \"thanks for\" is always gracias por. \"For\" meaning \"in order to\" looks ahead to a goal, so it is always para + infinitive. When you hunt for errors, ask of each por or para: target, or reason / way?",
        ],
        [
          ["✗ Gracias para todo. → ✓ Gracias por todo.", "Thanks for everything."],
          ["✗ Estudio por aprobar. → ✓ Estudio para aprobar.", "I study (in order) to pass."],
        ],
        [
          mc(
            "Fix \"Trabajo para ocho horas cada día.\"",
            ["Trabajo por ocho horas cada día.", "Trabajo para ochos horas cada día.", "Trabajo en ocho horas cada día.", "No fix needed."],
            0,
            "Duration takes por, or no preposition at all: trabajo ocho horas. \"Para ocho horas\" is wrong, \"ochos\" isn't a word, and \"en ocho horas\" means within eight hours."
          ),
        ]
      ),
      sec(
        "Opinion vs. on behalf of",
        "Para mí = in my opinion / for me (recipient): the opinion is aimed from my point of view. Por mí = on my behalf / because of me: I am the reason behind the action.",
        [
          ["Para mí, el español es fácil.", "In my opinion, Spanish is easy."],
          ["Lo hizo por mí.", "He did it for my sake."],
        ],
        [
          fb("Fix the preposition.", "___ mí, esta película es la mejor del año. (learner wrote: Por)", "Para", "To give an opinion, use para mí (in my view). Por mí means as far as I'm concerned or because of me."),
        ]
      ),
    ],
    [
      fb("Fix the preposition.", "Salgo ___ la oficina a las ocho. (learner wrote: por)", "para", "Heading toward a destination → para."),
      fb("Fix the preposition.", "Te cambio mi bocadillo ___ tu manzana. (learner wrote: para)", "por", "One thing for another is an exchange, so por, not para."),
      fb("Fix the preposition.", "El informe es ___ mañana. (learner wrote: por)", "para", "Para + time sets a deadline: para mañana, not por."),
      ms(
        "Which sentences are already correct?",
        ["Llamé por teléfono a mi madre.", "Este regalo es por ti.", "Por eso no vine.", "Estudio medicina para ser doctora."],
        [0, 2, 3],
        "A gift for someone takes para: para ti, so \"Este regalo es por ti\" is wrong. The other three are correct."
      ),
      mc(
        "Which sentence has NO error?",
        ["Por lo general, desayuno para las ocho.", "Por lo general, desayuno a las ocho.", "Para lo general, desayuno a las ocho.", "Por lo general, desayuno por las ocho y para."],
        1,
        "Por lo general is a fixed expression, and clock times use a las: desayuno a las ocho. \"Para las ocho\" means by eight, \"Para lo general\" isn't Spanish, and the last option adds \"y para\" at the end."
      ),
      toEs("Thanks for coming; this is for you.", "Gracias por venir; esto es para ti.", "Gracias por + infinitive; recipient → para ti (no accent on ti).", ["Gracias por venir, esto es para ti."]),
      wo("Por fin encontré un regalo para mi abuela.", "Por fin (finally) is a fixed phrase; para marks the recipient.", "I finally found a present for my grandmother."),
    ]
  ),
  L(
    "por-vs-para-mastery-check",
    "a2r-spiral-pronouns-reflexives-por-para",
    "Spiral Review: Pronouns, Reflexives & Por/Para",
    "Direct and indirect objects, reflexive verbs, comparisons, the future and por/para in one workout.",
    "9 min",
    [
      sec(
        "A message from a friend",
        [
          "Remember the rules: object pronouns (lo, la, le, les) and reflexive pronouns (me, te, se, nos) go before a conjugated verb, or are attached to an infinitive. Lo / la replace the thing itself, le / les the person who receives it. Para looks ahead (purpose, recipient), por looks back or along (cause, means, part of the day).",
          "Read the voice message transcript. It packs half of Elementary into five lines.",
        ],
        [
          ["¡Hola! Ayer me levanté temprano para ir al mercado.", "Hi! Yesterday I got up early to go to the market."],
          ["Vi unas flores preciosas y las compré para tu madre.", "I saw some beautiful flowers and bought them for your mom."],
          ["Mañana le daré las flores en la fiesta.", "Tomorrow I'll give her the flowers at the party."],
          ["Por cierto, el mercado nuevo es más grande que el viejo.", "By the way, the new market is bigger than the old one."],
        ],
        [
          mc(
            "Who are the flowers for?",
            ["The listener's mother", "The speaker's mother", "The market vendor", "The speaker"],
            0,
            "The speaker says \"para tu madre\", so the flowers are for the listener's mother, not the speaker's mother, the vendor or the speaker."
          ),
          fb("Complete the reply.", "¡Qué amable! A mi madre ___ van a encantar. (the flowers → to her)", "le", "Encantar is gustar-type: a mi madre le van a encantar (las flores)."),
        ]
      ),
    ],
    [
      fb("Complete with the reflexive pronoun.", "Mañana ___ levantaremos a las seis para salir temprano.", "nos", "Levantarse with nosotros takes nos: nos levantaremos. The pronoun goes before the conjugated verb."),
      fb("Complete with por or para.", "Vamos ___ la autopista porque es más rápido.", "por", "Por marks the route you go along or through: por la autopista."),
      fb("Complete with the direct object pronoun.", "¿La tarta? ___ traerá mi hermano.", "La", "La tarta → la, before the conjugated verb."),
      ms(
        "Which sentences are correct?",
        ["Le compré un regalo a mi jefe.", "Me ducho por la mañana.", "Las vi ayer en el parque.", "Es la tienda más barata que el barrio."],
        [0, 1, 2],
        "A superlative names its group with de (la tienda más barata del barrio), not with que, so \"que el barrio\" is wrong. The other three are correct."
      ),
      mc(
        "\"I'll call her tomorrow to invite her.\"",
        ["La llamaré mañana para invitarla.", "Le llamaré mañana por invitarla.", "La llamaré mañana por invitarle.", "Llamaré la mañana para invitarla."],
        0,
        "Llamar and invitar take a direct object (la), and purpose takes para: la llamaré para invitarla. \"Le llamaré\" uses the indirect pronoun, \"por invitarla\" gives a cause, and \"Llamaré la mañana\" puts la after the verb."
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
        [
          "Remember the rule: when the direct object is a specific person (or a pet you treat as one), Spanish adds a. It's there because Spanish word order is free, and the a tags the person who receives the action, so nobody mixes up who did what to whom.",
          "English has nothing like it, so it's the most commonly forgotten word in the Elementary level. Learners who know it then over-use it with things, places and 'any person'. Hunt both kinds of error.",
        ],
        [
          ["✗ Visito mi abuela. → ✓ Visito a mi abuela.", "I visit my grandmother."],
          ["✗ Conozco tu hermano. → ✓ Conozco a tu hermano.", "I know your brother."],
        ],
        [
          mc(
            "\"Llamé mi jefe ayer.\" What's missing?",
            ["a before mi jefe", "the before jefe", "le before llamé", "nothing"],
            0,
            "A specific person as direct object needs the personal a: llamé a mi jefe. It doesn't need an article or le, so it's not \"nothing\"."
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
        "A named pet treated as an individual takes the personal a: buscamos a nuestra perra, Lola. \"Buscamos nuestra perra\" leaves it out, \"a una perra cualquiera\" is any dog, and a place like el parque never takes it."
      ),
      mc(
        "\"I don't know anybody here.\"",
        ["No conozco a nadie aquí.", "No conozco nadie aquí.", "No conozco a nada aquí.", "No a conozco nadie aquí."],
        0,
        "Nadie and alguien take the personal a as direct objects, with no before the verb: No conozco a nadie. \"Conozco nadie\" leaves out a, \"a nada\" means nothing, and \"No a conozco\" puts a in the wrong place."
      ),
      ms(
        "Which sentences are correct?",
        ["Ayudé a mi vecino.", "Escucho a la radio.", "Admiro a mi profesora.", "Tengo un amigo en Cuba."],
        [0, 2, 3],
        "La radio is a thing, so escucho la radio, without a. The other three are correct: people take a, and tener usually doesn't."
      ),
      toEs("I'm going to invite Pedro and Laura to the party.", "Voy a invitar a Pedro y a Laura a la fiesta.", "Personal a before each person; a la fiesta is a destination.", ["Voy a invitar a Pedro y Laura a la fiesta."]),
      wo("¿Conoces a alguien en Japón?", "Alguien as a direct object takes personal a.", "Do you know anyone in Japan?"),
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
        [
          "Remember the rule: something negative must stand before the verb, either no or a negative word itself. To make a sentence negative, swap every affirmative word for its partner, then check what stands in front of the verb.",
          "Every affirmative word has a negative partner: algo/nada, alguien/nadie, siempre/nunca, también/tampoco, alguno/ninguno, o … o / ni … ni.",
        ],
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
            "Either the negative word goes first (Nadie sabe), or no + verb + negative word (No sabe nadie). \"Sabe nadie\" is missing no, and \"No nadie\" stacks both before the verb."
          ),
        ]
      ),
    ],
    [
      fb("Make it negative.", "Siempre llego tarde. → ___ llego tarde.", "Nunca", "The negative of siempre (always) is nunca (never), placed before the verb."),
      fb("Make it negative.", "Hay alguien en la puerta. → No hay ___ en la puerta.", "nadie", "The negative of alguien (someone) is nadie (no one): no hay nadie."),
      fb("Make it negative.", "Tengo algunos amigos aquí. → No tengo ___ amigo aquí.", "ningún", "Alguno → ninguno, shortened to ningún before a masculine singular noun (ninguno is almost always singular)."),
      fb("Make it negative.", "Quiero té o café. → No quiero ___ té ni café.", "ni", "O … o → ni … ni."),
      mc(
        "Make it negative: \"Yo también estudio los sábados.\"",
        ["Yo tampoco estudio los sábados.", "Yo también no estudio los sábados.", "Yo nunca también estudio los sábados.", "Yo no tampoco estudio."],
        0,
        "The negative of también is tampoco: yo tampoco estudio. \"También no\" and \"nunca también\" mix positive and negative, and \"no tampoco\" before the verb doubles the negative."
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
        [
          "Adjectives describe nouns and agree with them (una respuesta clara). Adverbs describe verbs and never change (habla claramente).",
          "The test: ask what the word describes. A thing or a person (after ser, or next to a noun)? Adjective, and it agrees. How an action is done? Adverb, one fixed form. English sometimes blurs this ('drive safe'), Spanish doesn't.",
        ],
        [
          ["Es una conductora cuidadosa. / Conduce cuidadosamente.", "She's a careful driver. / She drives carefully."],
          ["La explicación fue clara. / Lo explicó claramente.", "The explanation was clear. / She explained it clearly."],
        ],
        [
          mc(
            "\"Ella canta ___.\"",
            ["maravillosamente", "maravillosa", "maravillosos", "maravilloso"],
            0,
            "Describing how she sings (a verb) needs an adverb: maravillosamente. \"Maravillosa\", \"maravillosos\" and \"maravilloso\" are adjectives."
          ),
        ]
      ),
      sec(
        "Bueno vs. bien, malo vs. mal",
        "Bueno/malo are adjectives (a good book). Bien/mal are adverbs (she writes well). With estar, use bien/mal for how someone is. These two adverbs are irregular: you can't say 'buenamente' for 'well', so bien and mal do the job of -mente here.",
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
        ["Contestó tranquila y pacientemente.", "Contestó tranquila y paciente.", "Contestó tranquilo y paciente.", "Contestó tranquilamente y paciente."],
        0,
        "In a series of -mente adverbs, only the last keeps -mente, and the first uses the feminine adjective: tranquila y pacientemente. \"Tranquila y paciente\" has no -mente at all, and \"tranquilo\" and \"paciente\" are adjectives, not adverbs."
      ),
      ms(
        "Which sentences are correct?",
        ["Mi abuela está muy bien.", "Juegas muy bueno al tenis.", "Es una idea excelente.", "Normalmente me levanto temprano."],
        [0, 2, 3],
        "Juegas describes how someone plays (a verb), so it needs the adverb bien, not the adjective \"bueno\". The other three are correct."
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
        [
          "A stranger in the street gets usted, so every request you make and every direction you hear uses the usted form. Get attention with Perdone or Disculpe (the usted commands of perdonar and disculpar), then ask ¿Dónde está…? or ¿Cómo llego a…?",
          "Why usted: the tú forms (perdona, oye, dime) are what you say to a friend, and with a stranger they sound abrupt. Remember that a + el contracts: ¿cómo llego al río?",
        ],
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
            "Gire a la derecha means turn right. Left is a la izquierda, and the text doesn't say to cross the square or go back."
          ),
          mc(
            "You need the bus station and you stop an older man. Which question fits?",
            ["Disculpe, ¿cómo llego a la estación de autobuses?", "Disculpa, ¿cómo llego a la estación de autobuses?", "Disculpe, ¿cómo llego en la estación de autobuses?", "Disculpe, ¿dónde es la estación de autobuses?"],
            0,
            "A stranger gets usted (disculpe), and llegar a marks where you are going. Disculpa is the tú form, en means in rather than to, and a location takes está, not es."
          ),
        ]
      ),
      sec(
        "Understanding the directions",
        [
          "To build an usted command, start from the yo form, drop the -o and switch to the \"opposite\" vowel: -ar verbs take -e (giro → gire, tomo → tome), -er and -ir verbs take -a (sigo → siga, subo → suba).",
          "Why the yo form: it already carries any irregularity, so sigo gives siga and vuelvo gives vuelva. The spelling changes to keep the sound (cruzar → cruce, llegar → llegue), and a reflexive pronoun attaches to the end: bajarse → bájese.",
        ],
        [
          ["Tome la segunda calle a la izquierda.", "Take the second street on the left."],
          ["Camine dos calles y pregunte otra vez.", "Walk two blocks and ask again."],
        ],
        [
          fb("Complete the direction with doblar.", "___ a la izquierda en la esquina.", "Doble", "Doblar (-ar) → usted command doble."),
          mc(
            "Llegar means 'to arrive'. Tell a stranger: 'Arrive before ten.'",
            ["Llegue antes de las diez.", "Llega antes de las diez.", "Llege antes de las diez.", "Llegué antes de las diez."],
            0,
            "Llego → llegue: an -ar verb takes -e, and the g needs a u to keep its hard sound. Llega is the tú form, llege drops that u, and llegué is the preterite (I arrived)."
          ),
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
        "Perdone + usted + the conditional podría is the most polite. \"¡Oye!\", \"Dime\" and \"Estación, ¿dónde?\" are informal or abrupt with a stranger."
      ),
      ms(
        "Which are correct usted commands?",
        ["Gire", "Tome", "Cruza", "Siga"],
        [0, 1, 3],
        "Gire, tome and siga are usted commands. \"Cruza\" is the tú command; the usted form is cruce."
      ),
      toEs("Excuse me, is the train station far?", "Disculpe, ¿está lejos la estación de tren?", "Location takes estar: ¿está lejos la estación?", ["Perdone, ¿está lejos la estación de tren?", "Disculpe, ¿la estación de tren está lejos?", "Perdone, ¿la estación de tren está lejos?"]),
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
        [
          "Remember the rule: a restaurant complaint has two parts. You describe the problem with estar (la sopa está fría) and then make a softened request with usted and the conditional (¿me la podría calentar?). Start softly with Perdone or Disculpe.",
          "Why: estar fits because you're describing the dish's condition right now, not what it always is. The conditional keeps the complaint polite, and the object pronoun goes before podría: ¿me lo podría cambiar? (lo = el plato).",
        ],
        [
          ["—Perdone, la sopa está fría. ¿Me la podría calentar?", "Excuse me, the soup is cold. Could you heat it up for me?"],
          ["—Claro, lo siento mucho. Ahora mismo.", "Of course, I'm very sorry. Right away."],
        ],
        [
          mc(
            "Why \"la sopa está fría\" and not \"es fría\"?",
            ["It's the soup's current condition.", "Sopa is feminine.", "Fría always takes estar.", "Both are equally correct here."],
            0,
            "The soup's temperature right now is a condition, so estar: está fría. It's not about gender, fría can go with ser for lasting traits, and \"es fría\" would describe cold soup as its nature (like gazpacho)."
          ),
          mc(
            "Your steak (el filete) is raw. Which complaint is right?",
            ["Perdone, el filete está crudo. ¿Me lo podría hacer un poco más?", "Perdone, el filete es crudo. ¿Me lo podría hacer un poco más?", "Perdone, el filete está crudo. ¿Me la podría hacer un poco más?", "Perdone, el filete está crudo. ¡Házmelo más!"],
            0,
            "Raw right now is a condition (está crudo), and el filete becomes lo before podría. Es crudo treats rawness as its nature, la doesn't match masculine filete, and házmelo is a blunt tú command."
          ),
        ]
      ),
      sec(
        "Allergies and special requests",
        "Soy alérgico/a a… (I'm allergic to…), sin (without), ¿Lleva…? (Does it have…?).",
        [
          ["—¿Este plato lleva frutos secos? Soy alérgica.", "Does this dish have nuts? I'm allergic."],
          ["—Sí, lleva. Pero se lo podemos preparar sin frutos secos.", "Yes, it does. But we can make it for you without nuts."],
        ],
        [
          fb("Complete the request.", "¿Me trae la ensalada ___ cebolla, por favor?", "sin", "No article after sin when you mean none at all: sin cebolla, sin hielo."),
        ]
      ),
    ],
    [
      fb("Complete the complaint.", "Disculpe, creo que hay un error en la ___.", "cuenta", "La cuenta is the bill at a restaurant."),
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
        "Enseguida means right away, and se lo cambio means I'll change it for you. It's not about the bill, and it's a promise, not a refusal or an order."
      ),
      toEs("Excuse me, I ordered the fish, not the chicken.", "Perdone, yo pedí el pescado, no el pollo.", "Pedir means to order in a restaurant; the yo preterite is pedí.", ["Disculpe, yo pedí el pescado, no el pollo.", "Perdone, pedí el pescado, no el pollo."]),
      toEn("La comida estaba riquísima, pero tardó mucho.", "The food was delicious, but it took a long time.", "Estaba for how it tasted; tardar = to take (time).", ["The food was really delicious, but it took a long time."]),
      wo("¿Me podría traer un vaso de agua sin hielo?", "Me (to me) + podría + infinitive + sin for \"without.\"", "Could you bring me a glass of water without ice?"),
    ]
  ),
  L(
    "at-the-restaurant-2",
    "a2r-spiral-telling-stories",
    "Spiral Review: Elementary So Far — Telling Stories",
    "The Elementary past tenses revisited: tell a complete past-tense story with regular and irregular preterites, the imperfect, and both together.",
    "9 min",
    [
      sec(
        "The first date",
        [
          "The rule behind every past story: the imperfect paints the background (time, weather, feelings, what was going on), and the preterite moves the story forward with completed events (llegó, esperó, dijo).",
          "Why: Spanish has to choose for each verb whether it's scenery or action. Test it: if you could put 'and then...' in front of it, use the preterite; if it describes how things were, use the imperfect. Read Daniel's story, then retell pieces of it, choosing each verb's tense yourself.",
        ],
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
            "Era, hacía and tenía are imperfect background. \"Llegó\" is a completed event in the preterite."
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
        "The arrival interrupts, so preterite (llegó), and the reading was in progress, so imperfect (leía). The wrong options make the arrival ongoing or the reading a completed event."
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
    "Spiral Review: Elementary So Far — Tools of Everyday Talk",
    "A mixed review of pronouns, reflexives, comparisons, the future, por/para, negatives and adverbs.",
    "9 min",
    [
      sec(
        "Group chat: planning a picnic",
        [
          "This review mixes the everyday tools. Object pronouns go before a conjugated verb or attach to an infinitive (las traigo / no puedo traerlas). Comparisons use más / menos ... que. The future adds its endings to the whole infinitive (compraré, levantaremos). Negatives double up (no hay nada).",
          "Why they matter: each tool does a job. Pronouns save you repeating the noun, the future states a firm plan, and the double negative is required in Spanish, not a mistake. Every message below reuses one of them.",
        ],
        [
          ["Ana: ¿Quién trae las bebidas? Yo no puedo traerlas.", "Who's bringing the drinks? I can't bring them."],
          ["Leo: Yo las traigo. Y le compraré un pastel a Marta para su cumpleaños.", "I'll bring them. And I'll buy Marta a cake for her birthday."],
          ["Ana: ¡Genial! El parque nuevo es más bonito que el viejo.", "Great! The new park is nicer than the old one."],
          ["Leo: Sí, pero no hay nada de sombra. Nos levantaremos temprano para buscar sitio.", "Yes, but there's no shade at all. We'll get up early to find a spot."],
        ],
        [
          mc(
            "In \"Yo las traigo,\" what does las replace?",
            ["las bebidas", "las amigas", "las sombras", "las cosas de Marta"],
            0,
            "In context, las replaces las bebidas: yo las traigo = I'll bring them. The friends, shadows and Marta's things aren't what's being brought."
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
        "A negative word before the verb stands alone: Nadie quiere venir, so \"Nadie no quiere venir\" is wrong. The other three are correct."
      ),
      mc(
        "\"We'll leave quickly because it will rain.\"",
        ["Nos iremos rápidamente porque lloverá.", "Nos iremos rápida porque lloverá.", "Nos vamos rápido porque llovió.", "Iremos nos rápidamente porque lloverá."],
        0,
        "Irse in the future is nos iremos, the adverb is rápidamente, and llover → lloverá. \"Rápida\" is an adjective, \"vamos... llovió\" has the wrong tenses, and \"Iremos nos\" puts the pronoun after the verb."
      ),
      toEs("I'll bring the chairs; my brother will bring them in his car.", "Yo traeré las sillas; mi hermano las traerá en su coche.", "Future of traer; las replaces las sillas.", ["Traeré las sillas; mi hermano las traerá en su coche.", "Yo traeré las sillas, mi hermano las traerá en su carro.", "Yo traeré las sillas; mi hermano las traerá en su carro.", "Traeré las sillas; mi hermano las traerá en su carro."]),
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
        [
          "Remember the rule: a sequence of finished events is a chain of preterites, one per step. The sequencing words only label the order: primero (first), luego / después (then, afterwards), más tarde (later), al final (in the end).",
          "Antes de / después de + infinitive link two actions into one sentence.",
        ],
        [
          ["Primero desayuné, luego me duché y después salí.", "First I had breakfast, then I showered and afterward I left."],
          ["Antes de salir, cerré las ventanas.", "Before leaving, I closed the windows."],
        ],
        [
          mc(
            "\"Después de comer, ___ una siesta.\" (I took a nap.)",
            ["dormí", "dormía", "duermo", "dormiré"],
            0,
            "A single completed action takes the preterite: dormí. \"Dormía\" is imperfect, \"duermo\" present, and \"dormiré\" future. The o → u change is only in él/ellos: durmió."
          ),
        ]
      ),
      sec(
        "Antes de / después de + infinitive",
        "After any preposition (antes de, después de, para, sin) Spanish uses the infinitive, never a conjugated verb, even in a past story: the preposition already links the two actions, and the main verb carries the tense. English uses -ing here (after arriving); Spanish uses the -r form (después de llegar). Reflexive verbs keep their pronoun on the end: antes de acostarme.",
        [
          ["Después de llegar, llamé a mi madre.", "After arriving, I called my mom."],
        ],
        [
          fb("Complete the sentence.", "Antes de ___, preparé la ropa. (ducharse, yo)", "ducharme", "After antes de → infinitive, even in a past-tense sentence, and the reflexive pronoun matches the person and joins the end: ducharme."),
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
        "You order (B), eat (C), then pay (A). The other orders pay before eating or eat before ordering."
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
        [
          "Remember the rule: a post about a finished trip tells its events in the preterite. Watch the irregular stems, which drop the accent: fuimos (ir), tuvimos (tener), hizo (hacer), pudimos (poder), estuve (estar).",
          "Lucía has drafted day one. Read it, then complete what's missing.",
        ],
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
      fb("Complete Lucía's post.", "Yo ___ un poncho para mi madre. (comprar)", "compré", "The regular -ar yo preterite ends in accented -é; without the accent, compre is a different form."),
      fb("Complete Lucía's post.", "Los vendedores nos ___ muy bien. (tratar)", "trataron", "Ellos → trataron."),
      mc(
        "Which sentence would fit the blog's final paragraph?",
        ["Fue un viaje inolvidable.", "Es un viaje inolvidable mañana.", "Será un viaje inolvidable ayer.", "Iba un viaje inolvidable."],
        0,
        "Summing up a finished trip uses the preterite of ser: fue un viaje inolvidable. \"Es... mañana\" and \"Será... ayer\" clash with the time words, and \"Iba\" is ir, not ser."
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
      wo("¿Estuviste en Perú el año pasado?", "Estar in the preterite: estuviste, for a finished stay at a definite time (el año pasado).", "Were you in Peru last year?"),
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
        "The rule: the imperfect describes the old normal, a situation with no clear start or end; the present describes the new one. Antes signals the imperfect and ahora the present, so a then-and-now sentence pairs the two tenses: antes + -aba / -ía, ahora + the present.",
        [
          ["Antes vivía con mis padres; ahora vivo solo.", "I used to live with my parents; now I live alone."],
          ["Antes no había wifi en el pueblo; ahora hay en todas partes.", "There didn't use to be wifi in the village; now it's everywhere."],
        ],
        [
          fb("Complete the contrast.", "Antes ___ mucho; ahora casi no fumo. (fumar)", "fumaba", "Old habit → imperfect."),
        ]
      ),
      sec(
        "Ya no / todavía",
        "Ya no = no longer: the old habit has stopped, so the now half is negative (ya no juego). Todavía = still: nothing has changed, so the present carries on the old habit (todavía me gusta). Both describe now, so both take the present, not the imperfect.",
        [
          ["Antes jugaba al fútbol; ya no juego.", "I used to play soccer; I don't anymore."],
          ["Antes me gustaba el café y todavía me gusta.", "I used to like coffee and I still do."],
        ],
        [
          mc(
            "\"I used to be shy, but I'm not anymore.\"",
            ["Antes era tímido, pero ya no lo soy.", "Antes fui tímido, pero ya no lo soy.", "Antes era tímido, pero todavía lo soy.", "Antes soy tímido, pero ya no era."],
            0,
            "A past state is imperfect (era), and ya no means no longer. \"Fui\" makes it an event, \"todavía lo soy\" says you're still shy, and \"soy... era\" swaps the tenses."
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
        ["Antes trabajaba de noche; ahora trabajo de día.", "Antes vivo en Madrid; ahora vivía en Lima.", "Ya no vivo en Chile.", "Todavía estudio español."],
        [0, 2, 3],
        "Antes goes with the imperfect and ahora with the present; \"Antes vivo... ahora vivía\" swaps them. The other three are logical."
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
        "The rule: a photo freezes a moment with no beginning or end, so describing it is pure imperfect: what people looked like (tenía, llevaba), what was there (había) and what was happening (sonreían). The preterite would turn the scene into a finished event.",
        [
          ["En esta foto mis abuelos se casaban.", "In this photo my grandparents were getting married."],
          ["Mi abuela llevaba un vestido largo y tenía flores en el pelo.", "My grandmother was wearing a long dress and had flowers in her hair."],
          ["Todos sonreían, excepto mi tío, que lloraba.", "Everyone was smiling, except my uncle, who was crying."],
        ],
        [
          mc(
            "You're describing what was going on in another wedding photo. Which sentence fits?",
            ["En la foto mi tía bailaba con mi abuelo.", "En la foto mi tía bailó con mi abuelo.", "En la foto mi tía baila mañana con mi abuelo.", "En la foto mi tía bailará con mi abuelo."],
            0,
            "A scene in a photo is description, so it takes the imperfect: bailaba. Bailó tells a finished event, and baila mañana and bailará are about the future."
          ),
          fb("Describe the photo.", "Mi abuelo ___ un traje negro. (llevar)", "llevaba", "What someone was wearing in a photo → imperfect."),
        ]
      ),
      sec(
        "Photo 2: The beach, 1990",
        "Estaba + gerund (estaba nadando) zooms in on an action in the middle of happening. Form the gerund with -ando for -ar verbs and -iendo for -er / -ir verbs. The simple imperfect (leía) can describe the same scene.",
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
        "Describing a photo uses the imperfect: estaba, jugaban, había. \"Fue muy guapa en la foto\" wrongly uses the preterite for a description."
      ),
      toEs("My grandmother was wearing a red hat and she was laughing.", "Mi abuela llevaba un sombrero rojo y se reía.", "Both are descriptions, so both are imperfect: llevaba and se reía.", ["Mi abuela llevaba un sombrero rojo y estaba riéndose.", "Mi abuela llevaba un sombrero rojo y reía.", "Mi abuela llevaba un sombrero rojo y se estaba riendo."]),
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
        ["Remember the rule: the imperfect paints the scene (the time, the weather, what people were doing); the preterite tells what happened next.", "Read carefully. Each imperfect sets the scene; each preterite pushes the story forward."],
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
            "Papá veía el fútbol: he was watching soccer when the power went out, not doing homework, looking for candles or cooking."
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
        "Mientras + imperfect gives the ongoing action (hablábamos), and the preterite gives what happened (trajo). The wrong options use the present hablamos or the imperfect traía for the single event."
      ),
      ms(
        "Which sentences are scene-setting?",
        ["No había luz en ninguna calle.", "Mamá encontró las velas.", "El perro tenía miedo.", "Encendimos las velas."],
        [0, 2],
        "No había luz and el perro tenía miedo set the scene, so imperfect. Finding and lighting the candles are plot events, so preterite."
      ),
      toEs("It was dark and my little brother was scared.", "Estaba oscuro y mi hermanito tenía miedo.", "Descriptions and feelings in the background → imperfect.", ["Estaba oscuro y mi hermano pequeño tenía miedo.", "Estaba oscuro y mi hermano menor tenía miedo."]),
      wo("Nunca voy a olvidar la noche en que se fue la luz.", "Ir a + infinitive (voy a olvidar) for the promise, and the preterite (se fue) for the specific event.", "I'm never going to forget the night the power went out."),
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
      fb("Rewrite in the past.", "Los clientes están enfadados. → Los clientes ___ enfadados.", "estaban", "A state in the past takes the imperfect: estaban enfadados."),
      fb("Rewrite in the past.", "Llamo a los clientes uno por uno. → ___ a los clientes uno por uno.", "Llamé", "Actions in sequence, one after another, take the preterite: llamé."),
      fb("Rewrite in the past.", "Al final, todos quedan contentos. → Al final, todos ___ contentos.", "quedaron", "Outcome of the story → preterite."),
      mc(
        "Rewrite: \"Hace sol y salgo a pasear.\"",
        ["Hacía sol y salí a pasear.", "Hizo sol y salía a pasear.", "Hace sol y salí a pasear.", "Hizo sol y salí a pasear."],
        0,
        "Background weather is imperfect (hacía), and the walk is a single event (salí). \"Hizo sol\" makes the weather an event, \"salía\" makes the walk habitual, and \"Hace\" stays in the present."
      ),
      mc(
        "Rewrite: \"Todos los días Ana corre en el parque.\"",
        ["Todos los días Ana corría en el parque.", "Todos los días Ana corrió en el parque.", "Todos los días Ana corrían en el parque.", "Todos los días Ana ha corrido."],
        0,
        "Todos los días marks a habit, so the imperfect: corría. \"Corrió\" is a single event, \"corrían\" is plural, and \"ha corrido\" is present perfect."
      ),
      toEs("It was late, so I took a taxi.", "Era tarde, así que tomé un taxi.", "The background is imperfect (era tarde), and the event is preterite (tomé un taxi).", ["Era tarde, así que cogí un taxi.", "Era tarde, entonces tomé un taxi."]),
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
        "Remember the rule: conjugated verb → pronoun goes before it (lo veo). Infinitive or gerund → attach it or put it before the whole phrase (voy a verlo / lo voy a ver). Never between the two verbs.",
        [
          ["✗ Veo lo. → ✓ Lo veo.", "I see it."],
          ["✗ Voy a lo comprar. → ✓ Voy a comprarlo. / Lo voy a comprar.", "I'm going to buy it."],
        ],
        [
          mc(
            "Fix \"Quiero te ayudar.\"",
            ["Quiero ayudarte.", "Te quiero a ayudar.", "Quiero ayudar te.", "Quiero te ayudarte."],
            0,
            "Attach the pronoun to the infinitive (ayudarte) or put it first (te quiero ayudar). \"Te quiero a ayudar\" adds a, \"ayudar te\" leaves it separate, and \"te ayudarte\" doubles it."
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
        "The pronoun goes before the whole phrase (te voy a llamar) or attaches to the infinitive (llamarte). \"Voy te a llamar\" splits voy and a, and \"Llamarte voy\" scrambles the order."
      ),
      mc(
        "Which sentence is correct?",
        ["Estamos buscándolas.", "Estamos buscandolas.", "Estamos las buscando.", "Estamos buscando las."],
        0,
        "The pronoun attaches to the gerund, which then needs an accent: buscándolas. \"Buscandolas\" misses the accent, \"las buscando\" puts it in the middle, and \"buscando las\" leaves it separate."
      ),
      mc(
        "\"Don't tell him!\" (usted; a learner wrote \"¡No dígale!\")",
        ["¡No le diga!", "¡No dígale!", "¡Le no diga!", "¡No diga le!"],
        0,
        "With negative commands, the pronoun goes before the verb: ¡No le diga! \"No dígale\" attaches it as in a positive command, \"Le no diga\" puts no in the wrong place, and \"diga le\" leaves it separate."
      ),
      toEs("I'm going to send it to you (tú) tomorrow. (the report)", "Te lo voy a mandar mañana.", "Te (to you) before lo (it) — both before the conjugated verb, or both attached.", ["Voy a mandártelo mañana.", "Te lo mando mañana.", "Te lo enviaré mañana.", "Voy a enviártelo mañana."]),
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
        ["Remember the rule: lo, la, los, las stand for the thing, le and les for the person. Together, the person comes first and le/les turns into se: se lo mando.", "Your mission: answer your colleagues' emails. Short professional replies lean heavily on pronouns."],
        [
          ["—¿Terminaste el informe?", "Did you finish the report?"],
          ["—Sí, lo terminé ayer. Te lo mando ahora.", "Yes, I finished it yesterday. I'll send it to you now."],
        ],
        [
          fb("Reply to the email.", "—¿Leíste los correos del cliente? —Sí, ___ leí esta mañana.", "los", "Los correos is masculine plural, so los, before the verb."),
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
      fb("Reply to the email.", "—¿Firmaste los contratos? —No, voy a firmar___ mañana.", "los", "Los contratos is masculine plural, so los, attached to the infinitive: firmarlos."),
      mc(
        "\"Did you call the client?\" — \"Yes, I called him this morning.\"",
        ["Sí, lo llamé esta mañana.", "Sí, le llamé esta mañana a él cliente.", "Sí, llamé lo esta mañana.", "Sí, la llamé esta mañana."],
        0,
        "El cliente is the direct object, so lo, before llamé. \"Le llamé... a él cliente\" is garbled, \"llamé lo\" puts it after the verb, and \"la\" is feminine."
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
      wo("Te agradezco la ayuda y te mando un saludo.", "Te before each conjugated verb.", "I thank you for the help and send you a greeting."),
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
        ["Remember the rule: the reflexive pronoun matches the person getting ready (me, te, se, nos, se), and body parts and clothes take the article, not a possessive (se pone la corbata).", "Listen for the reflexive pronoun: it tells you who's getting ready."],
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
            "Se está afeitando means he's shaving, not getting dressed (vistiéndose), brushing his teeth or doing his hair."
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
        "Each takes a reflexive pronoun that matches the subject: me afeito, te maquillas, se emociona, nos enamoramos."
      ),
      mc(
        "\"We have to leave now!\"",
        ["¡Tenemos que irnos ya!", "¡Tenemos que irse ya!", "¡Nos tenemos que irnos ya!", "¡Tenemos que nos ir ya!"],
        0,
        "The reflexive pronoun matches the subject (nosotros → nos) and attaches to the infinitive: irnos. \"Irse\" doesn't match nosotros, \"Nos tenemos que irnos\" doubles the pronoun, and \"que nos ir\" puts it before the infinitive."
      ),
      ms(
        "Which sentences are correct?",
        ["Me estoy duchando.", "Estoy duchándome.", "Estoy me duchando.", "Mi hermana se maquilló en el coche."],
        [0, 1, 3],
        "The pronoun goes before estoy or attaches to the gerund, never between them, so \"Estoy me duchando\" is wrong. The other three are correct."
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
        "Remember the rule: the reflexive pronoun always matches the subject: yo → me, tú → te, él/ella/usted → se, nosotros → nos, vosotros → os, ellos/ustedes → se.",
        [
          ["✗ Nosotros se levantamos. → ✓ Nosotros nos levantamos.", "We get up."],
          ["✗ Tú me duchas. → ✓ Tú te duchas.", "You shower."],
        ],
        [
          fb("Fix the pronoun.", "Mis hijos ___ acuestan a las nueve. (learner wrote: nos)", "se", "Ellos takes the reflexive pronoun se: se acuestan, not nos."),
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
            "Reflexive + article with body parts: me corté el dedo. \"Corté mi dedo me\" puts me at the end, \"a mi dedo\" adds a, and the possessive mi does need fixing."
          ),
        ]
      ),
    ],
    [
      fb("Fix the verb.", "Todas las mañanas yo ___ a las siete. (learner wrote: levanto)", "me levanto", "Getting yourself up → levantarse → me levanto."),
      fb("Fix the pronoun.", "¿A qué hora ___ despertáis vosotros? (learner wrote: se)", "os", "Vosotros takes the reflexive pronoun os: os despertáis. Se is for él, ellos or usted."),
      ms(
        "Which sentences contain an error?",
        ["Ella se peina el pelo.", "Nos vestimos rápido.", "Me cepillo mis dientes.", "Te llamas Pablo, ¿verdad?"],
        [2],
        "With reflexive verbs and body parts, Spanish uses the article, not a possessive: me cepillo los dientes, so \"Me cepillo mis dientes\" is the error. The other three are correct."
      ),
      mc(
        "Which sentence means \"She calls herself Lola\" (her name is Lola)?",
        ["Se llama Lola.", "Llama a Lola.", "La llama Lola.", "Le llama Lola."],
        0,
        "Llamarse means to be called: se llama Lola. \"Llama a Lola\" means she calls Lola, and \"La llama Lola\" and \"Le llama Lola\" describe someone else calling her, not her own name."
      ),
      mc(
        "Which is correct?",
        ["Siempre me olvido de las llaves.", "Siempre me olvido las llaves de.", "Siempre olvido me de las llaves.", "Siempre me olvida de las llaves yo."],
        0,
        "Olvidarse de + thing: me olvido de las llaves (or olvido las llaves, with no se and no de). The wrong options put de at the end, put me after the verb, or use the third-person olvida with yo."
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
        "Remember the rule: tan + adjective/adverb + como (tan alto como). tanto/a/os/as + noun + como (tantos libros como). verb + tanto como (trabajo tanto como tú).",
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
            "Before an adverb like rápido, use tan: tan rápido como. \"Tanto\", \"tanta\" and \"tantos\" go with nouns."
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
          fb("Complete with tan or the right form of tanto.", "Nunca vi ___ nieve como este invierno.", "tanta", "Nieve is feminine singular, so tanta nieve."),
        ]
      ),
    ],
    [
      fb("Complete with tan or the right form of tanto.", "Este libro no es ___ interesante como el otro.", "tan", "Before an adjective, equality uses tan...como: tan interesante como."),
      fb("Complete with tan or the right form of tanto.", "Tengo ___ amigos como tú.", "tantos", "Before a noun, tanto agrees with it: amigos is masculine plural, so tantos."),
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
            "Poquísimo means very little, so the battery barely lasts: a negative comment. It isn't positive, neutral or a question."
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
          ["Funciona mal y la batería dura poquísimo.", "2 stars"],
        ],
        "Peor = worst (1 star); funciona mal and poquísimo are clearly negative (2 stars); bien, pero… is mixed (3 stars); buenísimo = excellent (5 stars)."
      ),
      mc(
        "\"The coffee maker is less noisy than the old one.\"",
        ["La cafetera es menos ruidosa que la vieja.", "La cafetera es menos ruidosa como la vieja.", "La cafetera es más poco ruidosa que la vieja.", "La cafetera es menos ruidoso que la vieja."],
        0,
        "Menos + adjective + que, with the adjective agreeing with cafetera: menos ruidosa que. \"Como\" is for equality, \"más poco\" isn't used, and \"ruidoso\" is masculine."
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
        "Remember the rule: twelve common verbs change their stem: tendr-, saldr-, pondr-, vendr-, valdr-, podr-, sabr-, habr-, querr-, cabr-, har-, dir-. The endings never change.",
        [
          ["✗ Teneré tiempo. → ✓ Tendré tiempo.", "I'll have time."],
          ["✗ Haceré la cena. → ✓ Haré la cena.", "I'll make dinner."],
        ],
        [
          fb("Fix the stem.", "Mañana ___ temprano. (learner wrote: saliré)", "saldré", "Salir has the irregular future stem saldr-: saldré, not saliré."),
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
            "Impersonal haber (there will be) stays singular: habrá. \"Habrán\" is plural, and \"Hayrá\" and \"Haberá\" don't exist."
          ),
        ]
      ),
    ],
    [
      fb("Fix the stem.", "¿___ venir a mi fiesta? (learner wrote: Poderás)", "Podrás", "Poder has the irregular future stem podr-: podrás. Poderás treats it as regular."),
      fb("Fix the stem.", "Te ___ la verdad mañana. (learner wrote: deciré)", "diré", "Decir has the irregular future stem dir-: diré, not deciré."),
      fb("Fix the stem.", "Mis padres ___ el sábado. (learner wrote: venirán)", "vendrán", "Venir has the irregular future stem vendr-: vendrán, not venirán."),
      ms(
        "Which future forms are correct?",
        ["pondremos", "querré", "sabrá", "hacerás"],
        [0, 1, 2],
        "Pondremos, querré and sabrá are correct irregular futures. \"Hacerás\" treats hacer as regular; its stem is har-: harás."
      ),
      mc(
        "Which sentence has NO error?",
        ["Nadie sabrá la respuesta.", "Nadie saberá la respuesta.", "Nadie sabrán la respuesta.", "Nadie sabra la respuesta."],
        0,
        "Saber has the future stem sabr-, and nadie takes the singular with an accent: sabrá. \"Saberá\" keeps the e, \"sabrán\" is plural, and \"sabra\" is missing the accent."
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
        ["Remember the rule: promises take the simple future (infinitive + -é, -ás, -á...; irregular stems like har-, tendr-, dir-); what happened last year takes the preterite.", "Resolutions are promises about the future. Notice the contrast with last year (preterite)."],
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
            "The friend says \"Fuiste al gimnasio dos veces\": twice. Not three times a week, never or every day."
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
        "A single completed statement last year takes the preterite: dije. \"Diré\" is future, \"decía... una vez\" mixes imperfect with a one-time event, and \"el año que viene\" is next year."
      ),
      toEs("This year I will learn to swim.", "Este año aprenderé a nadar.", "Aprender takes a before an infinitive: aprenderé a nadar (future of aprender).", ["Este año voy a aprender a nadar.", "Este año yo aprenderé a nadar."]),
      toEn("Esta vez no me rendiré.", "This time I won't give up.", "Rendirse means to give up; me rendiré is its future with yo.", ["This time I will not give up."]),
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
        "Remember the rule: para points forward to an end point (recipient, destination, purpose, deadline); por points to what's behind or around the action (cause, someone's sake, route, exchange, means). In each pair below only the preposition changes, so the meaning changes with it: para mi padre puts your father at the end of the action (he's your boss), por mi padre puts him behind it (you do it for his sake or in his place).",
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
            "Here por gives the cause or the person you act for: because of you, or on your behalf. \"Para ti\" would make the flowers a gift for you, and por doesn't mean near or before."
          ),
        ]
      ),
      sec(
        "Time: por vs. para",
        "Time follows the same logic. Para + time looks ahead to an end point: a deadline (by Monday). Por + time covers a stretch: a duration (for a week; durante also works) or a vague part of the day (in the afternoon). Ask yourself: is it an end point or a stretch of time?",
        [
          ["Lo necesito para el lunes.", "I need it by Monday. (end point)"],
          ["Estuve allí por una semana.", "I was there for a week. (a stretch)"],
          ["Estudio por la tarde.", "I study in the afternoon. (a vague part of the day)"],
        ],
        [
          fb("Complete with por or para.", "La tarea es ___ el jueves.", "para", "Para + day sets a deadline: para el jueves."),
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
      fb("Complete with por or para.", "Te llamo ___ teléfono esta noche.", "por", "Means of communication take por: por teléfono."),
      fb("Complete with por or para.", "Trabajo ___ ganar dinero.", "para", "Para + infinitive gives the goal: trabajo para ganar dinero."),
      fb("Complete with por or para.", "Me multaron ___ el ruido.", "por", "Por gives the reason: me multaron por el ruido."),
      ms(
        "In which sentences is para correct?",
        ["Estudio para ser enfermera.", "Gracias para la invitación.", "Este regalo es para Luis.", "Viajé para toda Europa."],
        [0, 2],
        "Para is correct for purpose (para ser enfermera) and recipient (para Luis). Thanks take por (gracias por la invitación), and traveling through a place takes por (viajé por toda Europa)."
      ),
      toEs("I changed my shift for yours (tú) because of the concert.", "Cambié mi turno por el tuyo por el concierto.", "Both are por: swapping one thing for another is an exchange (mi turno por el tuyo), and the concert is the cause. Para el concierto would mean the shift change was meant for the concert, as a goal.", ["Cambié mi turno por el tuyo a causa del concierto."]),
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
        "Remember the rule: para points forward to an end point (who gets the package, where it's going, when it must arrive by, what you need something for); por covers how and why (the means of sending, the price you pay in exchange, the route, the cause of a delay). Your mission: send a package abroad. Read the exchange and notice which question each por and para answers.",
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
      fb("Complete with por or para.", "El paquete es ___ mi sobrino.", "para", "Para marks the recipient: para mi sobrino."),
      fb("Complete with por or para.", "Lo mando ___ correo certificado.", "por", "Por marks the means of sending: por correo certificado."),
      fb("Complete with por or para.", "¿Llegará ___ el viernes?", "para", "Para + day sets a deadline: para el viernes = by Friday."),
      fb("Complete with por or para.", "Pagué diez euros ___ la caja.", "por", "Por marks price or exchange: diez euros por la caja."),
      mc(
        "\"The package went through three countries.\"",
        ["El paquete pasó por tres países.", "El paquete pasó para tres países.", "El paquete pasó en tres países por.", "El paquete pasó a tres países para."],
        0,
        "Movement through places takes por: pasó por tres países. \"Para\" marks a destination, and the other two options put the preposition in the wrong place."
      ),
      toEs("This box is for my grandmother and it has to arrive by Friday.", "Esta caja es para mi abuela y tiene que llegar para el viernes.", "Para marks both the recipient (para mi abuela) and the deadline (para el viernes).", ["Esta caja es para mi abuela y debe llegar para el viernes.", "Esta caja es para mi abuela y tiene que llegar antes del viernes."]),
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
        [
          "Remember the rule: in a negative sentence every \"any\" word turns negative too (algo → nada, alguien → nadie, alguna vez → nunca, algún → ningún). After the verb they need no in front of the verb; before the verb they stand alone. A person as object keeps the personal a: a nadie.",
          "Your roommate answers every question with a double negative. Your job in this lesson: answer like him, contradict him, and fix his grammar when he slips.",
        ],
        [
          ["—¿Quieres algo de comer? —No, no quiero nada.", "Do you want something to eat? — No, I don't want anything."],
          ["—¿Viste a alguien en la cocina? —No, no vi a nadie.", "Did you see anybody in the kitchen? — No, I didn't see anybody."],
          ["—¿Sales alguna vez? —No, nunca salgo.", "Do you ever go out? — No, I never go out."],
        ],
        [
          fb("Answer like the roommate.", "—¿Llamaste a alguien? —No, no llamé a ___.", "nadie", "Alguien → nadie in the negative. The a stays: nadie stands for a person, so it still takes the personal a."),
        ]
      ),
      sec(
        "How does he say it?",
        "Adverbs in -mente describe his attitude. They're built on the feminine form of the adjective (seco → seca → secamente), because -mente was once a feminine noun meaning \"mind\".",
        [
          ["Contesta secamente y cierra la puerta ruidosamente.", "He answers curtly and shuts the door noisily."],
        ],
        [
          fb("Complete with an adverb (tranquilo).", "Yo le hablo ___ para no discutir.", "tranquilamente", "Tranquila + -mente."),
        ]
      ),
    ],
    [
      { ...fb("Answer like the roommate.", "—¿Tienes algún plan para el sábado? —No, no tengo ___.", "ninguno", "Standing alone without a noun, ningún becomes ninguno: no tengo ninguno. (No tengo nada also works.)"), altAnswers: ["nada"] },
      fb("Answer like the roommate.", "—Yo también estoy cansado. —Pues yo ___.", "no", "Disagreeing: pues yo no (well, I'm not)."),
      mc(
        "\"Do you know anyone in this city?\" — the roommate's answer:",
        ["No conozco a nadie.", "No conozco nadie.", "Conozco a nadie.", "No conozco a alguien."],
        0,
        "No + verb + a nadie (nadie is a person, so personal a). \"No conozco nadie\" drops a, \"Conozco a nadie\" drops no, and \"a alguien\" doesn't fit a negative sentence."
      ),
      ms(
        "Which replies are grammatically correct?",
        ["Nunca como nada por la mañana.", "No quiero ni café ni té.", "Nadie no me llamó.", "Tampoco me gusta."],
        [0, 1, 3],
        "When nadie comes before the verb, it stands alone without no: Nadie me llamó, so \"Nadie no me llamó\" is wrong. The other three are correct."
      ),
      toEs("Nobody ever helps me with anything.", "Nadie me ayuda nunca con nada.", "Three negatives in one sentence are normal in Spanish: nadie before the verb (so no extra no), then nunca and nada after it.", ["Nunca nadie me ayuda con nada.", "Nadie nunca me ayuda con nada."]),
      wo("Honestamente, no tengo ganas de ver a nadie hoy.", "Honestamente comments on the whole sentence, so it goes first. Then no + verb, and a nadie: nadie is a person, so it takes the personal a.", "Honestly, I don't feel like seeing anyone today."),
    ]
  ),
  L(
    "personal-a-negation-mente-drill-3",
    "a2r-spiral-a-negation-adverbs",
    "Spiral Review: Personal A, Negatives & Adverbs",
    "A cumulative mix of personal a, negative words and -mente adverbs with the past tenses and pronouns from earlier in the Elementary level.",
    "8 min",
    [
      sec(
        "Mixed recall",
        [
          "Remember the three rules. Personal a: a specific person as direct object takes a (vi a tu hermana), things don't (busqué mis llaves). Negatives: no + verb + nada / nadie / nunca / ningún, or the negative word alone before the verb (nadie me llamó). -mente: add it to the feminine form (lenta → lentamente); in a pair joined by y, only the last adverb takes it.",
          "These rules don't change with the tense: they work the same in the preterite and the imperfect, and next to object pronouns. Each item below combines one of the newer topics with an older one.",
        ],
        [
          ["Ayer no vi a nadie en la biblioteca.", "Yesterday I didn't see anybody at the library. (negation + personal a + preterite)"],
          ["Mi abuelo caminaba lentamente por el parque.", "My grandfather used to walk slowly through the park. (adverb + imperfect + por)"],
        ],
        [
          fb("Complete with the preterite and a negative word.", "Anoche no ___ nada en la tele. (ver, yo)", "vi", "Ver in the preterite yo form is vi (no accent: it's one syllable). No before the verb + nada after it makes the double negative."),
          fb("Complete with the personal a.", "Cuando era niño, visitaba ___ mis primos cada verano.", "a", "Mis primos are specific people receiving the action (visitar), so they take the personal a, whatever the tense."),
        ]
      ),
    ],
    [
      fb("Complete with the adverb (perfecto).", "Lo explicaste ___.", "perfectamente", "Perfecto → perfecta + -mente: the adverb is built on the feminine form."),
      { ...fb("Complete with the direct object pronoun.", "¿A Juan? No ___ vi en la fiesta.", "lo", "Juan is the direct object (I saw him), so lo, before the verb. (In Spain you'll also hear le for a man: no le vi.)"), altAnswers: ["le"] },
      mc(
        "\"I never used to call anybody.\"",
        ["Nunca llamaba a nadie.", "Nunca llamé nadie.", "No llamaba a alguien nunca.", "Nunca llamaba nadie a."],
        0,
        "A past habit takes the imperfect, with nunca... a nadie: Nunca llamaba a nadie. \"Nunca llamé nadie\" uses the preterite and drops a, \"a alguien\" doesn't fit a negative, and \"nadie a\" puts a in the wrong place."
      ),
      ms(
        "Which sentences are correct?",
        ["Normalmente no invito a nadie a casa.", "Busqué a mi perro por todas partes.", "Tampoco no quiero ir.", "Hablé claramente con el jefe."],
        [0, 1, 3],
        "Tampoco before the verb stands alone: Tampoco quiero ir, so \"Tampoco no quiero ir\" is wrong. The other three are correct."
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
      toEs("Fortunately, nobody saw us.", "Afortunadamente, nadie nos vio.", "Nadie before the verb, so no extra no; nos (us) goes before the conjugated verb. Afortunado → afortunada → afortunadamente.", ["Por suerte, nadie nos vio."]),
      wo("Últimamente no veo a ninguno de mis antiguos compañeros.", "Últimamente (lately) opens the sentence; then no + verb + a ninguno de: ninguno refers to people here, so it takes the personal a.", "Lately I don't see any of my old classmates."),
    ]
  ),
  L(
    "a2-vocabulary-practice-5",
    "a2r-word-web-travel",
    "Word Web: Travel & Trips",
    "Airports, hotels and luggage — sort Elementary's travel vocabulary and use it in the past tense.",
    "7 min",
    [
      sec(
        "Before, during and after",
        [
          "The pattern: most travel nouns grow out of a verb you already know, so learn them in pairs. Volar → el vuelo, reservar → la reserva, embarcar → el embarque (la tarjeta de embarque, la puerta de embarque), alojarse → el alojamiento. The moment of arriving or leaving takes -ada / -ida: llegar → la llegada, salir → la salida. Knowing one half of a pair lets you guess the other.",
          "Then organise the words by stage: planning (reservar, el billete, el pasaporte), travelling (el vuelo, la maleta, el andén, facturar), arriving (el alojamiento, la recepción, deshacer la maleta).",
        ],
        [
          ["Reservé el vuelo y el hotel por internet.", "I booked the flight and the hotel online."],
          ["En el aeropuerto facturamos las maletas.", "At the airport we checked our bags."],
        ],
        [
          ms(
            "Which words belong at the airport?",
            ["la puerta de embarque", "el control de seguridad", "la tarjeta de embarque", "la receta"],
            [0, 1, 2],
            "La puerta de embarque, el control de seguridad and la tarjeta de embarque are airport words. \"La receta\" is a prescription or a recipe."
          ),
          mc("Salir gives la salida (departure). Which noun means 'arrival', from llegar?", ["la llegada", "el llegamiento", "la llegación", "el llego"], 0, "The moment of arriving or leaving takes -ada / -ida on the verb stem: lleg-ar → la llegada, sal-ir → la salida. You'll see both on every departures board."),
        ]
      ),
      sec(
        "Trip problems",
        "When travel goes wrong, each problem is one finished event, so it goes in the preterite: cancelaron el vuelo, perdimos el tren. Watch the se: perder = to miss or lose something (perdí el tren), but perderse = to get lost (me perdí); retrasarse (to be delayed) always carries se: el vuelo se retrasó.",
        [
          ["Perdimos el tren porque el taxi llegó tarde.", "We missed the train because the taxi arrived late."],
          ["El vuelo se retrasó dos horas.", "The flight was delayed two hours."],
        ],
        [
          fb("Complete the sentence.", "La aerolínea ___ el vuelo por la nieve. (cancelar, preterite)", "canceló", "One finished event, so the preterite; la aerolínea is ella → canceló, with the stress on the last syllable."),
          mc("You took a wrong turn and didn't know where you were. What do you say?", ["Me perdí.", "Perdí.", "Me perdí la calle.", "Se perdió."], 0, "Perderse (with se) = to get lost: me perdí. Perder without se needs a thing you missed or lost (perdí el tren), and se perdió would be someone else."),
        ]
      ),
    ],
    [
      mc("Odd one out:", ["la maleta", "la mochila", "el equipaje de mano", "el andén"], 3, "La maleta, la mochila and el equipaje de mano are things you carry; el andén is the train platform."),
      mt(
        "Match each word to its meaning.",
        [
          ["el billete de ida y vuelta", "round-trip ticket"],
          ["el alojamiento", "accommodation"],
          ["el vuelo directo", "direct flight"],
          ["la aduana", "customs"],
        ],
        "Core Elementary travel vocabulary."
      ),
      { ...fb("How do you say the bold words in Spanish?", "Antes de viajar al extranjero, necesitas un ___ válido.", "pasaporte", "To travel abroad you need a valid passport: un pasaporte válido."), en: "Before traveling abroad, you need a valid [passport]." },
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
    "Symptoms, remedies and a doctor's visit — Elementary's health words in conversation.",
    "7 min",
    [
      sec(
        "Describing symptoms",
        [
          "The pattern: the word you want decides the verb. A body part that hurts takes doler, which works like gustar: the body part is the subject (me duele la cabeza, me duelen los pies). A symptom noun takes tener (tener fiebre, tener tos, tener gripe). An injury is a reflexive verb + the body part (me corté el dedo, me torcí el tobillo).",
          "In all three, the body part takes el / la, never mi: the pronoun me already says whose it is.",
        ],
        [
          ["Me duele la garganta y tengo fiebre.", "My throat hurts and I have a fever."],
          ["A mi hijo le duelen los oídos.", "My son's ears hurt."],
        ],
        [
          fb("Complete with doler.", "Después de correr, me ___ las piernas.", "duelen", "Doler agrees with what hurts, like gustar: las piernas is plural, so duelen."),
          mc("You burned your hand while cooking. What do you say?", ["Me quemé la mano.", "Quemé mi mano.", "Me quemé mi mano.", "Me duele quemé la mano."], 0, "An injury is a reflexive verb + the body part with el / la: quemarse → me quemé la mano. Mi is extra, because me already shows whose hand."),
        ]
      ),
      sec(
        "The doctor's advice",
        "Doctors give advice in three ways, from softer to firmer: deber + infinitive (debe descansar), tener que + infinitive (tiene que descansar) and the usted command (descanse). How often comes with vez: una vez, dos veces al día, cada ocho horas.",
        [
          ["Tiene que descansar y beber mucha agua.", "You have to rest and drink lots of water."],
          ["Tome esta pastilla dos veces al día.", "Take this pill twice a day."],
        ],
        [
          mc(
            "The box says «Una pastilla cada ocho horas». How many tablets do you take in a day?",
            ["three", "eight", "one", "two"],
            0,
            "Cada + time = every: cada ocho horas = every eight hours, so three a day. Twice a day would be dos veces al día, and every two days cada dos días."
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
      mc("Odd one out:", ["la fiebre", "la tos", "el estornudo", "la farmacia"], 3, "Fiebre, tos and estornudo are symptoms; la farmacia is a place."),
      fb("Complete with doler.", "¿Te ___ algo?", "duele", "Algo (something) is singular → duele."),
      fb("Complete the sentence.", "Estoy resfriado, así que no puedo dejar de ___. (estornudar)", "estornudar", "Dejar de + infinitive."),
      toEs("My back has hurt since yesterday.", "Me duele la espalda desde ayer.", "Doler + singular body part; desde = since.", ["Me duele la espalda desde ayer por la mañana."]),
      toEn("El médico me recetó unas pastillas para la alergia.", "The doctor prescribed me some pills for the allergy.", "Recetar means to prescribe; unas pastillas = some pills.", ["The doctor prescribed me some allergy pills.", "The doctor prescribed some pills for my allergy."]),
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
        [
          "The pattern: tech verbs are a few roots plus prefixes, so one root gives you several words. Des- undoes or reverses (cargar = to load / charge → descargar = to download; conectar → desconectar), and re- means again (enviar → reenviar = to forward; iniciar → reiniciar = to restart).",
          "Most of these verbs send something to someone, and the someone is an indirect object pronoun before the verb: te mando un mensaje, le reenvié el correo, no me contestó.",
        ],
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
            "Core Elementary tech verbs."
          ),
          mc("Iniciar means to start. Using re- (again), how do you say 'to restart' a phone?", ["reiniciar", "desiniciar", "iniciar otra", "preiniciar"], 0, "Re- adds \"again\", as in reenviar (forward = send again): reiniciar el móvil. Des- would reverse the action, and Spanish doesn't use pre- here."),
          mc("Conectar means to connect. What does desconectar mean?", ["to disconnect", "to reconnect", "to connect quickly", "to be connected"], 0, "Des- reverses the action, like cargar → descargar and hacer → deshacer: desconectar = to disconnect. To reconnect would be volver a conectar or reconectar."),
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
            "In Spain a computer is el ordenador; in Latin America it's la computadora. \"El celular\" is a phone, and \"la pantalla\" is a screen."
          ),
        ]
      ),
    ],
    [
      fb("Complete the sentence.", "No tengo tu número. ¿Me lo ___ por mensaje? (mandar, tú)", "mandas", "¿Me lo mandas? = Can you send it to me?"),
      fb("Complete the sentence.", "Mi contraseña es muy larga y siempre la ___. (olvidar, yo)", "olvido", "Olvidar → olvido; la = la contraseña."),
      mc("Odd one out:", ["la pantalla", "el teclado", "el ratón", "el sello"], 3, "Pantalla, teclado and ratón are computer parts; el sello is a postage stamp."),
      mc(
        "\"The screen of my phone broke.\"",
        ["Se me rompió la pantalla del móvil.", "Me rompí la pantalla del móvil a mí.", "Rompió la pantalla del móvil me.", "La pantalla me rompió del móvil."],
        0,
        "This is the accidental 'se' pattern (a preview; you'll study it fully at Intermediate): se me rompió = it broke on me, with la pantalla as the subject. The other options put me or a mí in the wrong place or make it sound like you broke it on purpose."
      ),
      toEs("Can you (informal) send me the photo by email?", "¿Me puedes mandar la foto por correo?", "Me (to me); por correo = by email.", ["¿Me puedes enviar la foto por correo?", "¿Puedes mandarme la foto por correo?", "¿Me mandas la foto por correo electrónico?", "¿Me puedes mandar la foto por email?", "¿Me puedes mandar la foto por correo electrónico?", "¿Me puedes enviar la foto por correo electrónico?", "¿Puedes mandarme la foto por correo electrónico?", "¿Puedes enviarme la foto por correo electrónico?", "¿Puedes enviarme la foto por correo?"]),
      toEn("No tengo cobertura aquí, te llamo luego.", "I don't have signal here, I'll call you later.", "Cobertura means cell coverage or signal; te llamo luego = I'll call you later.", ["I have no signal here, I'll call you later."]),
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
        [
          "The pattern: routine verbs are reflexive because you do the action to yourself (me lavo = I wash myself). The pronoun already shows whose body it is, so the body part takes el / la / los / las, not mi: me cepillo los dientes, se lava la cara.",
          "Drop the reflexive pronoun and the action goes to someone or something else: lavo el coche, le seco el pelo a mi hijo. Pair each routine verb with the body part it goes with.",
        ],
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
          mc("You're drying your little son's hair. Which sentence says it?", ["Le seco el pelo a mi hijo.", "Me seco el pelo a mi hijo.", "Seco mi pelo a mi hijo.", "Se seco el pelo a mi hijo."], 0, "The action goes to someone else, so no reflexive me: le (to him) + seco, and a mi hijo says who. Me seco el pelo would be drying your own hair."),
          mc("'She's putting on her coat.'", ["Se pone el abrigo.", "Pone su abrigo.", "Se pone su abrigo.", "Ella pone el abrigo se."], 0, "Ponerse (to put on) is reflexive, and with the reflexive pronoun the garment takes el, not su. The pronoun goes before the conjugated verb."),
        ]
      ),
    ],
    [
      mc("Odd one out:", ["el codo", "la rodilla", "el tobillo", "el cepillo"], 3, "Codo, rodilla and tobillo are body parts; el cepillo is a brush."),
      { ...fb("How do you say the bold words in Spanish?", "Siempre me lavo las ___ antes de comer.", "manos", "Las manos (feminine despite the -o); with a reflexive verb, Spanish uses las, not mis: me lavo las manos."), en: "I always wash my [hands] before eating." },
      fb("Complete the sentence.", "Después de la ducha, ___ seco el pelo. (yo)", "me", "Secarse with yo takes me: me seco el pelo."),
      ms(
        "Which are parts of the face?",
        ["la nariz", "la boca", "las cejas", "el hombro"],
        [0, 1, 2],
        "La nariz, la boca and las cejas are on the face. \"El hombro\" is the shoulder."
      ),
      toEs("My brother shaves every morning.", "Mi hermano se afeita todas las mañanas.", "Afeitarse is reflexive: se afeita. Todas las mañanas means every morning.", ["Mi hermano se afeita cada mañana."]),
      toEn("Se me cansan los ojos si leo mucho.", "My eyes get tired if I read a lot.", "Se me cansan = they get tired on me.", ["My eyes get tired when I read a lot."]),
      wo("Antes de dormir me quito las lentillas.", "Quitarse = to take off; the article replaces the possessive.", "Before sleeping I take out my contact lenses."),
    ]
  ),
  L(
    "a2-vocabulary-practice-5",
    "a2r-word-web-work",
    "Word Web: Work & Future Plans",
    "Jobs, interviews and career goals — Elementary's work vocabulary with the future tense.",
    "7 min",
    [
      sec(
        "The job hunt",
        [
          "The pattern: work nouns are built on verbs. The person who does the action takes -dor / -dora (trabajar → el trabajador, diseñar → la diseñadora); the person the action is done to takes -ado / -ada (emplear → el empleado, the employee); and the thing often drops the ending (contratar → el contrato). When you hire or fire people, the personal a goes in front: contratar a dos personas.",
          "Key words: buscar trabajo, el currículum, la entrevista, el sueldo / salario, el puesto, contratar, despedir.",
        ],
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
            "Core Elementary work vocabulary."
          ),
          mc("Diseñar means to design. What do you call a woman who designs?", ["la diseñadora", "la diseñada", "la diseñista", "el diseñador"], 0, "The person who does the action takes -dor / -dora: diseñar → el diseñador, la diseñadora. -ada would be someone the action is done to."),
          mc("Emplear → el empleado (the person employed). Invitar = to invite. Who is 'the guest'?", ["el invitado", "el invitador", "la invitación", "el invitante"], 0, "The person the action is done to takes -ado / -ada: invitar → el invitado, the one who is invited. El invitador would be the host doing the inviting; la invitación is the invitation itself."),
        ]
      ),
      sec(
        "Future goals",
        "Talk about career goals with the future: add -é, -ás, -á, -emos, -éis, -án to the whole infinitive (ganaré, trabajarás, seremos). A few common verbs shorten the stem: tener → tendré, hacer → haré, poder → podré. Querer / esperar + infinitive work too: espero ganar más.",
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
      mc("Odd one out:", ["el jefe", "el empleado", "el compañero", "el sueldo"], 3, "El jefe, el empleado and el compañero are people at work; el sueldo is the salary."),
      fb("Complete the sentence.", "La empresa ___ a diez personas nuevas el año pasado. (contratar)", "contrató", "A completed event last year → contrató."),
      fb("Complete the sentence.", "Trabajo a tiempo ___: solo cuatro horas al día.", "parcial", "A tiempo parcial means part-time; full-time is a tiempo completo."),
      mc(
        "\"I'll ask for a raise.\"",
        ["Pediré un aumento de sueldo.", "Pedí un aumento de sueldo mañana.", "Pediré una subida de jefe.", "Pido un aumento ayer."],
        0,
        "The future pediré + un aumento (de sueldo) = I'll ask for a raise. \"Pedí... mañana\" mixes past and future, \"subida de jefe\" doesn't mean a raise, and \"Pido... ayer\" mixes present and past."
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
        [
          "The pattern: the kind of word decides the verb. A weather noun takes hace (hace frío, hace sol, hace viento), a weather adjective takes está (está nublado, está despejado), and a weather verb needs nothing else (llueve, nieva, truena). So before you speak, ask: is my word a noun, an adjective or a verb?",
          "Mucho goes with the nouns (hace mucho frío), muy with the adjectives (está muy nublado).",
        ],
        [
          ["En invierno nieva mucho y hace un frío terrible.", "In winter it snows a lot and it's terribly cold."],
          ["Hoy está nublado, pero no llueve.", "Today it's cloudy, but it isn't raining."],
        ],
        [
          ms(
            "Which are correct?",
            ["Hace viento.", "Está lloviendo.", "Hace nublado.", "Nieva en la montaña."],
            [0, 1, 3],
            "Nublado is an adjective, so it takes estar: está nublado, not \"hace nublado\". The other three are correct."
          ),
          mc("Despejado means clear (no clouds), and it's an adjective. How do you say 'It's clear today'?", ["Hoy está despejado.", "Hoy hace despejado.", "Hoy hay despejado.", "Hoy es despejado."], 0, "Adjectives for the weather take estar, just like nublado: está despejado. Hace is only for nouns (hace sol)."),
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
          mc("'We were walking in the park when it started to snow.'", ["Paseábamos por el parque cuando empezó a nevar.", "Paseamos por el parque cuando empezaba a nevar.", "Paseábamos por el parque cuando empezaba a nevar.", "Paseamos por el parque cuando empezó a nevar."], 0, "The walk is the background in progress (imperfect paseábamos); the snow starting is the event that breaks in (preterite empezó)."),
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
      mc("Odd one out:", ["el trueno", "el relámpago", "la tormenta", "el paraguas"], 3, "Trueno, relámpago and tormenta are storm words; el paraguas is an umbrella."),
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
    "Elementary Challenge: The Big Error Hunt",
    "Spot and fix one error per sentence across every Elementary topic: tenses, irregular stems, pronouns, por/para, comparisons, personal a and double negatives.",
    "9 min",
    [
      sec(
        "The Elementary checklist",
        [
          "Remember the rules, as a checklist to run on every sentence. Preterite for single finished events, imperfect for background and habits. Irregular stems (hic-, tuv-, dij-; future saldr-, dir-, tendr-). Lo / la for the thing or person acted on, le for the one who receives; pronouns before a conjugated verb. Reflexive pronoun matches the subject. Mayor / mejor without más. Por for cause and exchange, para for purpose and recipient. Personal a before a specific person. A negative word after the verb needs no before it.",
          "Each sentence has exactly one error. Find which rule it breaks, then fix only that.",
        ],
        [
          ["✗ Ayer yo iba al cine con Ana. → ✓ Ayer fui al cine con Ana.", "Yesterday I went to the movies with Ana."],
          ["✗ Lo dije la verdad. → ✓ Le dije la verdad.", "I told him the truth."],
        ],
        [
          mc(
            "\"Mañana saliré temprano.\" What's wrong?",
            ["Salir's future stem is saldr-: saldré.", "Mañana needs the preterite.", "Temprano should be temprana.", "Nothing."],
            0,
            "Salir has the irregular future stem saldr-: saldré. Mañana does call for the future, and temprano is an adverb, so it doesn't change."
          ),
          mc(
            "\"Busco mi hermano.\" What's wrong?",
            ["It needs personal a: busco a mi hermano.", "Busco should be busqué.", "Mi should be mí.", "Nothing."],
            0,
            "Looking for a specific person needs the personal a: busco a mi hermano. The present busco is fine, and mi (my) takes no accent."
          ),
        ]
      ),
    ],
    [
      fb("Fix it.", "Gracias ___ ayudarme con la mudanza. (learner wrote: para)", "por", "To say what you are thanking someone for, gracias takes por: gracias por ayudarme, not para."),
      fb("Fix it.", "Nosotros ___ levantamos a las seis. (learner wrote: se)", "nos", "Nosotros takes the reflexive pronoun nos: nos levantamos. Se is for él, ellos or usted."),
      fb("Fix it.", "Mi hermano es ___ que yo. (learner wrote: más mayor)", "mayor", "Mayor is already a comparative (older), so it never takes más: es mayor que yo."),
      fb("Fix it.", "No vino ___ a la reunión. (learner wrote: alguien)", "nadie", "Negatives agree: after no + verb, 'anybody' must be nadie, not the positive alguien."),
      ms(
        "Which sentences are correct?",
        ["Cuando era pequeño, tenía un gato.", "Las compré ayer.", "Hablaba tranquilamente y clara.", "Habrá mucha gente."],
        [0, 1, 3],
        "In a series of adverbs, the first ones can drop -mente, but the last must keep it: tranquila y claramente, so \"tranquilamente y clara\" is wrong. The other three are correct."
      ),
      mc(
        "Which sentence has NO error?",
        ["Anoche vimos una película y nos gustó mucho.", "Anoche veíamos una película y nos gustó mucho una vez.", "Anoche vimos una película y nos gustaron mucho.", "Anoche vimos una película y les gustó a nos."],
        0,
        "Watching a movie last night is a single event (vimos), and one película takes gustó. \"Veíamos... una vez\" misuses the imperfect, \"gustaron\" is plural, and \"les gustó a nos\" is garbled."
      ),
      toEs("I didn't know that you were Mexican.", "No sabía que eras mexicano.", "Knowing and being are both states in the past, so both are imperfect: no sabía que eras.", ["No sabía que eras mexicana.", "Yo no sabía que eras mexicano.", "Yo no sabía que eras mexicana."]),
      wo("Se lo expliqué a mi jefe pero no me entendió.", "Se lo (to him, it) + preterite; me before entendió.", "I explained it to my boss but he didn't understand me."),
    ]
  ),
  L(
    "a2-comprehensive-review-3",
    "a2r-challenge-dialogue-marathon",
    "Elementary Challenge: Dialogue Marathon",
    "Four scenes, four conversations — a doctor's visit, a lost bag, a job interview and a reunion.",
    "9 min",
    [
      sec(
        "Scene 1: At the doctor",
        [
          "Remember the rules each scene needs. Doler works like gustar (me duele la cabeza, me duelen los pies). Tener que + infinitive gives advice. Describing in the past (what something was like, what you used to do) → imperfect; single events → preterite; plans → future. With a doctor or interviewer, use usted: the verb goes in the third person (¿qué le pasa?, ¿qué hará?).",
          "Scene 1: symptoms with doler and tener; advice with tener que.",
        ],
        [
          ["—¿Qué le pasa? —Me duele el estómago desde ayer.", "What's wrong? — My stomach has hurt since yesterday."],
          ["—¿Qué comió anoche? —Comí mariscos en un restaurante.", "What did you eat last night? — I ate seafood at a restaurant."],
        ],
        [
          fb("Complete the doctor's advice.", "Tiene que ___ mucha agua y descansar. (beber)", "beber", "Tener que + infinitive gives advice or obligation, so the verb after que stays in the infinitive: beber."),
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
            "In the story, la replaces la mochila: someone brought it. The morning, the station and the girl aren't what was brought."
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
          fb("Complete the answer.", "En el hotel, yo ___ con clientes de todo el mundo. (hablar, habit)", "hablaba", "Talking to clients was a repeated activity in that job, so the imperfect: hablaba."),
        ]
      ),
    ],
    [
      mc(
        "Scene 4: A reunion. \"¡Cuánto tiempo! No has cambiado nada.\" What does it mean?",
        ["Long time no see! You haven't changed at all.", "How much time do you have? Nothing changed.", "What time is it? Change nothing.", "It's been a while; you changed everything."],
        0,
        "¡Cuánto tiempo! means it's been ages (long time no see), and no has cambiado nada means you haven't changed at all. It doesn't ask about time, and nada means not at all, not everything."
      ),
      fb("Complete the reunion.", "La última vez que te ___ fue en 2015. (ver, yo)", "vi", "La última vez is one single occasion, so the preterite: vi (no accent)."),
      fb("Complete the reunion.", "¡Ahora estás ___ alta que tu madre!", "más", "An unequal comparison is más + adjective + que: más alta que tu madre."),
      mt(
        "Match each line to a reply.",
        [
          ["¿Qué te pasó en la pierna?", "Me caí esquiando."],
          ["¿Qué harás este verano?", "Iré a la playa con mi familia."],
          ["¿Conoces a mi novio?", "No, no lo conozco."],
          ["¿Para quién es el regalo?", "Es para mi sobrina."],
        ],
        "Match the tense of the question: ¿qué te pasó? (preterite) → me caí; ¿qué harás? (future) → iré. ¿Conoces a mi novio? needs a direct object pronoun (lo), and ¿para quién? asks for the recipient (para mi sobrina)."
      ),
      toEs("What did you use to do on weekends when you lived in Madrid?", "¿Qué hacías los fines de semana cuando vivías en Madrid?", "Past habits and past situations both take the imperfect: hacías, vivías.", ["¿Qué solías hacer los fines de semana cuando vivías en Madrid?"]),
      wo("Me alegro mucho de verte después de tanto tiempo.", "Alegrarse de + infinitive (me alegro de verte, with te attached); tanto agrees with tiempo (masculine singular).", "I'm really happy to see you after so long."),
    ]
  ),
  L(
    "a2-comprehensive-review-3",
    "a2r-challenge-translation-relay",
    "Elementary Challenge: Translation Relay",
    "Translate your way through every Elementary topic, alternating directions.",
    "9 min",
    [
      sec(
        "Warm-up",
        [
          "Remember the rules behind the usual traps. English \"was -ing\" and \"used to\" → imperfect; a single finished event → preterite. Pronouns go before the conjugated verb, with le / les → se before lo / la. Para for recipients and purposes, por for price and duration. Spanish stacks negatives (no… nada… nadie), and uses se me + verb for accidents.",
          "Before you answer, identify the trap. Some items ask you to translate (in either direction), others to fix or change a sentence.",
        ],
        [
          ["I was sleeping when you called. → Dormía cuando llamaste.", "(interrupted action)"],
          ["I bought it for you. → Lo compré para ti.", "(pronoun + para)"],
        ],
        [
          toEs("We used to go to the beach every summer.", "Íbamos a la playa todos los veranos.", "A past habit takes the imperfect, and ir's imperfect is irregular: íbamos.", ["Íbamos a la playa cada verano.", "Nosotros íbamos a la playa todos los veranos."]),
        ]
      ),
    ],
    [
      toEs("Ayer me despertaba tarde y perdí el autobús.", "Ayer me desperté tarde y perdí el autobús.", "Waking up late yesterday is a single finished event in a sequence, so the preterite like perdí: me desperté.", ["Ayer me levanté tarde y perdí el autobús.", "Ayer me desperté tarde y perdí el bus."], "Correct the sentence."),
      fb("Complete.", "Este restaurante es ___ que el otro. (bueno)", "mejor", "Bueno has the irregular comparative mejor: mejor que, never más bueno que."),
      toEs("I'll call you tomorrow to tell you the news.", "Te llamaré mañana para contarte la noticia.", "Future llamaré for the plan; para + infinitive for the purpose, with te attached to contar.", ["Te llamaré mañana para decirte la noticia.", "Mañana te llamaré para contarte la noticia.", "Te voy a llamar mañana para contarte la noticia."]),
      toEn("Nunca le dije nada a nadie.", "I never told anybody anything.", "Spanish stacks negatives (nunca… nada… nadie); English uses only one negative word, so the rest become 'any-'.", ["I never said anything to anyone.", "I never told anyone anything."]),
      toEn("Se me olvidaron las llaves en el coche.", "I forgot my keys in the car.", "Se me olvidaron presents forgetting as an accident (the keys 'got forgotten on me'), and the verb agrees with las llaves.", ["I left my keys in the car.", "I forgot the keys in the car."]),
      toEn("Estuvimos en Chile por dos semanas.", "We were in Chile for two weeks.", "Por for a duration; a closed period of time is summed up in the preterite: estuvimos.", ["We spent two weeks in Chile."]),
      toEn("Mientras mi madre cocinaba, mi padre ponía la mesa.", "While my mother was cooking, my father was setting the table.", "Two actions in progress at the same time are both background, so both imperfect: cocinaba, ponía.", ["While my mom cooked, my dad set the table.", "While my mother cooked, my father set the table."]),
    ]
  ),
  L(
    "a2-comprehensive-review-3",
    "a2r-challenge-build-a-sentence",
    "Elementary Challenge: Build-a-Sentence",
    "Long Elementary sentences with pronouns, two past tenses and connectors — put every piece where it belongs.",
    "8 min",
    [
      sec(
        "The blueprint gets longer",
        [
          "Remember the rule: long sentences are two clauses joined by a connector, and the connector tells you what each clause does. Background + event (cuando, mientras): the background takes the imperfect, the event the preterite. Cause + result (como, porque, así que). Contrast (pero, aunque).",
          "Build each clause with its own tense and pronouns, then connect them.",
        ],
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
      wo("Nunca he visto tanta gente en la plaza.", "Nunca + present perfect (he visto) + tanta agreeing with gente.", "I have never seen so many people in the square."),
      wo("Este verano iremos a la costa para descansar un poco.", "Future + destination + para + infinitive.", "This summer we'll go to the coast to rest a bit."),
      wo("Mi abuela cocina mejor que nadie en la familia.", "Mejor que nadie = better than anyone.", "My grandmother cooks better than anyone in the family."),
      wo("¿Por qué no me dijiste que te ibas a mudar?", "Preterite dijiste + imperfect of ir a for a past plan.", "Why didn't you tell me you were going to move?"),
      mc(
        "Which sentence is built correctly?",
        ["Ayer me lavé el pelo y me lo sequé rápidamente.", "Ayer lavé me el pelo y sequé me lo rápidamente.", "Ayer me lavé mi pelo y lo me sequé rápido.", "Ayer me lavaba el pelo y me lo secé rápidamente."],
        0,
        "Reflexive pronouns go before the verb, body parts take the article, and me comes before lo: me lo sequé. The wrong options put pronouns after the verb, use mi pelo, reverse lo me, or use the imperfect lavaba."
      ),
      fb("Finish the sentence.", "No fui a la fiesta ___ estaba enfermo.", "porque", "Porque (because, one word, no accent) introduces the reason."),
    ]
  ),
  L(
    "a2-comprehensive-review-3",
    "a2r-challenge-story-chain",
    "Elementary Challenge: Story Chain",
    "Write a story one sentence at a time. Every link has to choose between the preterite and the imperfect.",
    "8 min",
    [
      sec(
        "The opening",
        [
          "Remember the rule: a story has two layers. The scene (time, weather, what was going on) is background: imperfect era, nevaba. The events that move the story forward take the preterite: llamó, abrió. De repente signals a new event; mientras signals background.",
        ],
        [
          ["Era una noche de invierno y nevaba sin parar.", "It was a winter night and it was snowing nonstop."],
          ["Clara estaba sola en la cabaña y leía junto al fuego.", "Clara was alone in the cabin, reading by the fire."],
        ],
        [
          fb("Link 3.", "De repente, alguien ___ a la puerta. (llamar)", "llamó", "De repente announces a sudden event that moves the story on, so the preterite: llamó."),
        ]
      ),
      sec(
        "The middle",
        "Now alternate: each event (preterite) can reveal new background (imperfect). Clara opened the door (event) and saw who was there and what he was like (background).",
        [
          ["Clara abrió la puerta. Era un hombre mayor que tenía mucho frío.", "Clara opened the door. It was an old man who was very cold."],
        ],
        [
          fb("Link 5.", "El hombre le ___ que su coche se quedó atascado en la nieve. (explicar)", "explicó", "Explaining is the next step of the story, one completed act: preterite explicó."),
          fb("Link 6.", "Clara le ___ un té caliente. (preparar)", "preparó", "Making the tea is another event in the sequence: preterite preparó."),
        ]
      ),
    ],
    [
      fb("Link 7.", "Mientras el hombre ___ el té, le contó su historia. (tomar)", "tomaba", "Mientras introduces something in progress while the event (le contó) happened: imperfect tomaba."),
      fb("Link 8.", "Resultó que él ___ el abuelo de su mejor amiga. (ser)", "era", "Who he was is a description, not an event, so the imperfect era, even though Clara only finds out now."),
      fb("Link 9.", "A la mañana siguiente, la nieve ___ y él se fue. (parar)", "paró", "The snow stopping is a single event the next morning: preterite paró."),
      mc(
        "Which ending uses the tenses best?",
        ["Desde ese día, Clara lo visitaba cada domingo.", "Desde ese día, Clara lo visitó cada domingo una vez.", "Desde ese día, Clara lo visita ayer.", "Desde ese día, Clara lo visitará ayer."],
        0,
        "A repeated habit that started that day takes the imperfect: visitaba cada domingo. \"Visitó... una vez\" is a single event, and \"visita ayer\" and \"visitará ayer\" clash with ayer."
      ),
      ms(
        "Which sentences from the story are background?",
        ["Nevaba sin parar.", "Alguien llamó a la puerta.", "El hombre tenía mucho frío.", "Clara abrió la puerta."],
        [0, 2],
        "Nevaba sin parar and tenía mucho frío describe the scene, so imperfect. Knocking (llamó) and opening the door (abrió) are events, so preterite."
      ),
      toEs("The cabin was small but it was warm.", "La cabaña era pequeña pero estaba calentita.", "Description of size → ser; how warm it felt at that moment → estar (calentita = nice and warm).", ["La cabaña era pequeña, pero estaba calentita.", "La cabaña era pequeña pero hacía calor dentro.", "La cabaña era pequeña pero estaba caliente."]),
      wo("Clara nunca olvidó aquella noche de nieve.", "The conclusion sums up her whole life since, as a completed fact: preterite olvidó. Aquella points to a distant moment in the past.", "Clara never forgot that snowy night."),
    ]
  ),
  L(
    "a2-comprehensive-review-3",
    "a2r-challenge-life-timeline",
    "Elementary Challenge: A Life Timeline",
    "Tell a whole life in Spanish: childhood (imperfect), milestones (preterite), today (present) and dreams (future).",
    "9 min",
    [
      sec(
        "The biography of Rosa Martínez",
        [
          "Remember the rule: a life story uses four tenses, and each one has a job. Milestones with a date (born, moved, married) → preterite. Childhood and long background situations → imperfect. Today → present. Plans and dreams → future. The time word usually tells you which: en 1992 / de niña / hoy / el año que viene.",
          "Read Rosa's timeline and notice how the tense changes with each period of her life.",
        ],
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
            "Birth and moves are dated events (preterite); childhood is a background period (imperfect); today is present; plans are future."
          ),
        ]
      ),
    ],
    [
      fb("Continue Rosa's story.", "En la universidad ___ a su esposo, Julio. (conocer)", "conoció", "Meeting her husband for the first time is a milestone: preterite conoció. Conocía would mean she already knew him."),
      fb("Continue Rosa's story.", "Cuando era joven, Rosa ___ en la escuela todos los días. (dibujar)", "dibujaba", "Todos los días in her youth is a repeated past habit: imperfect dibujaba."),
      fb("Continue Rosa's story.", "Sus cuadros ___ en museos de todo el mundo. (estar, present)", "están", "Where the paintings are now: location takes estar, and now takes the present, están."),
      fb("Continue Rosa's story.", "Dentro de diez años, sus alumnos ___ su obra. (continuar, future)", "continuarán", "Dentro de diez años points to the future: regular continuar + -án."),
      mc(
        "\"Rosa was 22 when she moved.\"",
        ["Rosa tenía 22 años cuando se mudó.", "Rosa tuvo 22 años cuando se mudaba.", "Rosa era 22 años cuando se mudó.", "Rosa tenía 22 años cuando se mudaba una vez."],
        0,
        "Age in the past takes the imperfect (tenía), and the move is a single event (se mudó). \"Tuvo\" makes age an event, \"era 22 años\" uses ser for age, and \"se mudaba\" makes the move ongoing."
      ),
      toEs("She was born in a small village and now she lives in the capital.", "Nació en un pueblo pequeño y ahora vive en la capital.", "Birth is a milestone (preterite nació); ahora takes the present (vive).", ["Ella nació en un pueblo pequeño y ahora vive en la capital."]),
      wo("Algún día escribiré un libro sobre la vida de mi abuela.", "Algún día (someday) introduces a dream, so the future: escribiré.", "Someday I'll write a book about my grandmother's life."),
    ]
  ),
  L(
    "a2-comprehensive-review-3",
    "a2r-challenge-buenos-aires-1",
    "Elementary Challenge: A Week in Buenos Aires — Part 1",
    "Marco spends a week in Buenos Aires. Follow his first days through messages, directions and a tango class.",
    "8 min",
    [
      sec(
        "Monday: arrival",
        [
          "Remember the rules for a trip. What happened (arrived, took the subway, stepped on a foot) → preterite. What things were like (the weather, how someone danced) → imperfect. Plans → future. Compare with más… que, and use estar for where places are. In Buenos Aires you'll also hear local words: el subte (metro), el colectivo (bus).",
          "Monday: Marco texts his sister.",
        ],
        [
          ["¡Llegué! El vuelo fue larguísimo, pero todo salió bien.", "I've arrived! The flight was super long, but everything went well."],
          ["El hotel está en San Telmo. Es más pequeño que en las fotos, pero muy bonito.", "The hotel is in San Telmo. It's smaller than in the photos, but very pretty."],
        ],
        [
          fb("Complete Marco's message.", "Cuando ___ al hotel, eran las once de la noche. (llegar)", "llegué", "Arriving is a completed event: preterite. -gar verbs add u in the yo form to keep the hard g: llegué."),
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
            "The local says \"Tome el subte, línea A, bájese en Perú\": take subway line A and get off at Perú station. It's not a street, a taxi or a bus."
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
          fb("Complete the journal.", "Al final de la clase, la profesora me ___ que tenía talento. (decir)", "dijo", "Telling him once at the end is an event: preterite of decir, j-stem dijo (no accent)."),
        ]
      ),
    ],
    [
      mc(
        "Why does Marco write \"bailaba\" for the teacher but \"pisé\" for himself?",
        ["Bailaba describes how she danced during the class; pisé counts specific events.", "Bailaba is for women.", "Pisé is the imperfect.", "There's no reason."],
        0,
        "Bailaba describes how she danced throughout the class (imperfect), while pisé counts specific events (preterite). It's not about gender, and pisé is preterite, not imperfect."
      ),
      fb("Complete the text.", "Mañana ___ a un partido de fútbol en La Bombonera. (ir, yo)", "iré", "Mañana is a plan: ir is regular in the future, iré."),
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
        "Marco danced much worse than the teacher (\"Yo, no tanto\"), so \"Marco bailó tan bien como la profesora\" is false."
      ),
      toEs("The city is bigger and noisier than my city.", "La ciudad es más grande y más ruidosa que mi ciudad.", "Más + adjective + que for each comparison; the adjectives agree with ciudad (feminine): grande, ruidosa.", ["La ciudad es más grande y ruidosa que mi ciudad."]),
      wo("Nunca he comido una carne tan rica como aquí.", "Tan + adjective + como; nunca he comido = I have never eaten (present perfect).", "I have never eaten meat as good as here."),
    ]
  ),
  L(
    "a2-comprehensive-review-3",
    "a2r-challenge-buenos-aires-2",
    "Elementary Challenge: A Week in Buenos Aires — Part 2",
    "The rest of Marco's week: a lost wallet, a new friend, and plans to come back.",
    "8 min",
    [
      sec(
        "Thursday: the lost wallet",
        [
          "Remember the rules for reporting a problem: what happened → preterite (perdí); what the thing was like → imperfect (era marrón, tenía…); what will happen → future (se la mandaremos). Le + la becomes se la.",
          "Thursday: Marco reports a problem at the police station.",
        ],
        [
          ["—Perdí la billetera en el colectivo.", "I lost my wallet on the bus."],
          ["—¿Cómo era? —Era marrón y tenía mi documento adentro.", "What did it look like? — It was brown and had my ID inside."],
          ["—Si alguien la encuentra, se la mandaremos al hotel.", "If someone finds it, we'll send it to you at the hotel."],
        ],
        [
          fb("Complete the report.", "Estaba ___ cuando la perdí: el colectivo iba lleno. (distraído)", "distraído", "Being distracted is a temporary state, so estar; the adjective agrees with Marco (masculine singular)."),
        ]
      ),
      sec(
        "Friday: a new friend",
        "Marco meets Sofía, a local who helps him.",
        [
          ["Sofía me llevó a un café y me invitó a una empanada.", "Sofía took me to a café and treated me to an empanada."],
          ["Hablamos por horas; nadie me trató tan bien en todo el viaje.", "We talked for hours; nobody treated me so well on the whole trip."],
        ],
        [
          fb("Complete.", "Sofía ___ presentó a sus amigos esa noche. (me/te/le)", "me", "Marco is the person introduced, so the first-person pronoun me, before the verb: me presentó."),
        ]
      ),
    ],
    [
      fb("Saturday: Complete the text.", "¡Encontraron la billetera! La policía me la ___ al hotel. (llevar)", "llevó", "Bringing the wallet to the hotel is a single completed event: preterite llevó, with me la before it."),
      fb("Sunday: Complete the text.", "El año que viene ___ con mi hermana. (volver, yo)", "volveré", "El año que viene is a plan: future volveré (volver is regular in the future)."),
      mc(
        "\"Sofía is the nicest person I met on the trip.\"",
        ["Sofía es la persona más amable que conocí en el viaje.", "Sofía es la más amable persona que conocía en el viaje.", "Sofía es la persona más amable de conocí en el viaje.", "Sofía es tan amable persona que conocí."],
        0,
        "The superlative goes noun + más + adjective (la persona más amable), followed by que conocí (conocer in the preterite = met). \"La más amable persona\" has the wrong order, \"de conocí\" needs que, and \"tan amable persona\" isn't a superlative."
      ),
      mt(
        "Match each day to what happened.",
        [
          ["el jueves", "Perdió la billetera."],
          ["el viernes", "Conoció a Sofía."],
          ["el sábado", "Recuperó la billetera."],
          ["el domingo", "Hizo planes para volver."],
        ],
        "Each day has one single event, so they're all in the preterite: perdió, conoció, recuperó, hizo."
      ),
      toEs("Thanks for everything; I'll never forget this week.", "Gracias por todo; nunca olvidaré esta semana.", "Gracias por + what you're thanking for; nunca before the future verb olvidaré, with no extra no.", ["Gracias por todo, nunca olvidaré esta semana.", "Gracias por todo; no olvidaré nunca esta semana."]),
      wo("Me fui de Buenos Aires con muchas ganas de volver.", "Irse de + place for leaving it (preterite: a single event); con ganas de + infinitive = wanting to.", "I left Buenos Aires really wanting to come back."),
    ]
  ),
  L(
    "a2-comprehensive-review-3",
    "a2r-challenge-pronoun-gauntlet",
    "Elementary Challenge: The Pronoun Gauntlet",
    "Direct, indirect, reflexive, doubled and attached — every kind of Elementary pronoun, back to back.",
    "8 min",
    [
      sec(
        "The pronoun map",
        [
          "Remember the rules. Direct pronouns replace the thing or person the verb acts on: me te lo/la nos os los/las. Indirect pronouns name who receives it: me te le nos os les. Reflexive pronouns are for actions done to yourself: me te se nos os se.",
          "With two pronouns, the person comes first and the thing second (me lo, te la). Le/les becomes se before lo/la/los/las, because 'le lo' is hard to say. Pronouns go before a conjugated verb or attach to an infinitive or gerund.",
        ],
        [
          ["Lo compré. / Le compré un libro. / Se lo compré.", "I bought it. / I bought him a book. / I bought it for him."],
          ["Me lo puse.", "I put it on."],
        ],
        [
          mc(
            "\"¿Le diste el mensaje a Pablo?\" — \"Sí, ___ di.\"",
            ["se lo", "le lo", "lo le", "se le"],
            0,
            "Le + lo becomes se lo: se lo di. \"Le lo\" skips the change, \"lo le\" is the wrong order, and \"se le\" has no direct object pronoun."
          ),
        ]
      ),
    ],
    [
      fb("Replace «mi bici» and «a mis primos» with pronouns.", "Presté mi bici a mis primos. → ___ la presté.", "Se", "Les (to my cousins) can't stand before la (my bike), so it becomes se: se la presté."),
      fb("Replace the object.", "¿Viste las noticias? → Sí, ___ vi.", "las", "Las noticias is feminine plural and it's the thing seen (direct object), so las before vi."),
      fb("Add the reflexive pronoun.", "Mis padres ___ en 1990.", "se casaron", "Casarse (to get married) is reflexive; with ellos the pronoun is se: se casaron."),
      fb("Attach the pronoun.", "Voy a comprar el vestido. → Voy a ___.", "comprarlo", "El vestido is masculine singular, so lo, attached to the end of the infinitive: comprarlo (or lo voy a comprar)."),
      ms(
        "Which are correct?",
        ["Te lo traigo mañana.", "Lo te traigo mañana.", "Se los di ayer.", "Le los di ayer."],
        [0, 2],
        "The indirect pronoun goes before the direct one, and le/les become se before lo/la/los/las: te lo traigo, se los di. \"Lo te\" has the wrong order, and \"Le los\" skips the se change."
      ),
      mc(
        "\"My mom bought them for me.\" (the shoes)",
        ["Mi madre me los compró.", "Mi madre los me compró.", "Mi madre se los compró a mí.", "Mi madre me les compró."],
        0,
        "Me (to me) comes before los (the shoes): me los compró. \"Los me\" has the wrong order, \"se los... a mí\" uses se for me, and \"les\" is not a direct object pronoun for the shoes."
      ),
      toEs("I'm going to give it to her tomorrow. (the gift)", "Se lo voy a dar mañana.", "Le (to her) + lo (the gift) becomes se lo, before the conjugated verb or attached to dar with an accent: dárselo.", ["Voy a dárselo mañana.", "Se lo daré mañana.", "Mañana se lo voy a dar."]),
      wo("¿Las llaves? Las dejé en la oficina.", "Las replaces las llaves and goes before the conjugated verb; dejé is a single completed action.", "The keys? I left them at the office."),
    ]
  ),
  L(
    "a2-comprehensive-review-3",
    "a2r-challenge-past-gauntlet",
    "Elementary Challenge: The Past-Tense Gauntlet",
    "Ten rapid decisions: preterite or imperfect, regular or irregular.",
    "8 min",
    [
      sec(
        "Rapid fire",
        [
          "Remember the rule: ask one question, event or background? An event happened and finished (yesterday, once, suddenly, a set number of times) → preterite. Background describes what was going on, what things were like, or what used to happen (siempre, de niño, mientras) → imperfect.",
          "Then get the form right: watch the irregular preterites (fui, pude, hice, oyó). For each blank, decide in under ten seconds.",
        ],
        [
          ["Hacía sol cuando salimos.", "It was sunny when we left."],
        ],
        [
          fb("Preterite or imperfect?", "Cuando ___ niño, me encantaba el circo. (ser)", "era", "Cuando era niño describes a stage of life, background, so the imperfect era. Fui would make childhood a single event."),
          fb("Preterite or imperfect?", "El año pasado ___ a Italia por primera vez. (ir, nosotros)", "fuimos", "El año pasado + por primera vez is one finished trip: preterite fuimos (ir and ser share these forms)."),
        ]
      ),
    ],
    [
      fb("Preterite or imperfect?", "Mi abuelo siempre ___ historias de la guerra. (contar)", "contaba", "Siempre marks a repeated habit: imperfect contaba. Contó would be one telling."),
      fb("Preterite or imperfect?", "Ayer no ___ venir porque estaba enferma. (poder, yo)", "pude", "Ayer no pude = I couldn't (and didn't) come on that occasion: preterite pude. No podía would only describe ability as background."),
      fb("Preterite or imperfect?", "¿Qué ___ tú cuando te llamé? (hacer)", "hacías", "The question is what was in progress when the call (te llamé) interrupted: imperfect hacías."),
      fb("Preterite or imperfect?", "Los niños ___ los regalos a toda velocidad. (abrir)", "abrieron", "Opening the presents is a completed action in the story: preterite abrieron."),
      fb("Preterite or imperfect?", "En aquella época no ___ teléfonos móviles. (haber)", "había", "En aquella época describes what that time was like: imperfect había, never plural habían."),
      fb("Preterite or imperfect?", "Ella ___ la noticia por la radio. (oír)", "oyó", "Hearing the news is a single event: preterite. Oír changes i to y between vowels: oyó."),
      mc(
        "\"We were talking when the teacher came in.\"",
        ["Hablábamos cuando entró el profesor.", "Hablamos cuando entraba el profesor.", "Hablábamos cuando entraba el profesor.", "Hablamos cuando entró el profesor."],
        0,
        "The ongoing action is imperfect (hablábamos), and the interruption is preterite (entró). The wrong options make talking a completed event or the entrance ongoing."
      ),
      toEs("I lived in Paris for three years.", "Viví en París tres años.", "A closed period with a set length (tres años) is seen as a whole: preterite viví, even though it lasted a long time.", ["Viví en París durante tres años.", "Viví en París por tres años.", "Yo viví en París tres años."]),
    ]
  ),
  L(
    "a2-comprehensive-review-3",
    "a2r-challenge-comparisons-por-para",
    "Elementary Challenge: Comparisons, Future & Por/Para",
    "A final gauntlet for the rest of the Elementary level: comparisons, superlatives, the future, por/para, negatives and adverbs.",
    "8 min",
    [
      sec(
        "Mixed recall",
        [
          "Remember the rules. Comparisons: más/menos + adjective + que; tan + adjective + como; tanto/a + noun + como; mejor and peor are irregular. Superlatives: el/la más + adjective + de. Future: infinitive + é, ás, á…, with short stems like har-, sabr-, tendr-.",
          "Por looks back (cause, exchange, movement through, 'thanks for'); para looks ahead (purpose, deadline, destination, recipient). Negatives: no + verb + nada/nadie/ningún. Every item mixes at least two of these topics.",
        ],
        [
          ["El tren será más rápido que el autobús.", "The train will be faster than the bus."],
          ["Lo terminaré para el viernes, sin ningún problema.", "I'll finish it by Friday, without any problem."],
        ],
        [
          fb("Complete.", "Mañana ___ más frío que hoy. (hacer, future)", "hará", "Mañana takes the future, and hacer has the short stem har-: hará (it will be colder)."),
          fb("Complete.", "Es el museo más famoso ___ la ciudad.", "de", "In a superlative, the group is introduced by de: el más famoso de la ciudad."),
        ]
      ),
    ],
    [
      fb("Complete with por or para.", "Pasaremos ___ tu casa a las siete.", "por", "Pasar por means to stop by a place: pasaremos por tu casa."),
      fb("Complete with por or para.", "Necesito el vestido ___ la boda del sábado.", "para", "Para marks the purpose or occasion: el vestido para la boda."),
      fb("Complete with the adverb (claro).", "El profesor habla muy ___.", "claramente", "-mente attaches to the feminine form of the adjective: clara + mente."),
      fb("Complete with a negative word.", "No habrá ___ problema, te lo prometo.", "ningún", "Ninguno shortens to ningún before problema (masculine singular), and no before habrá makes the double negative."),
      mc(
        "\"This will be the best trip of our lives.\"",
        ["Este será el mejor viaje de nuestras vidas.", "Este será el más mejor viaje de nuestras vidas.", "Este será el mejor viaje en nuestras vidas.", "Este fue el mejor viaje de nuestras vidas mañana."],
        0,
        "Future será + the superlative el mejor... de. \"Más mejor\" is never correct, \"en nuestras vidas\" should be de, and \"fue... mañana\" mixes past and future."
      ),
      ms(
        "Which sentences are correct?",
        ["Tendremos tanto trabajo como el año pasado.", "Lo hice por ti.", "Saldremos para la playa temprano.", "Mi casa es tan grande que la tuya."],
        [0, 1, 2],
        "Equality with an adjective is tan...como: tan grande como la tuya, so \"tan grande que\" is wrong. The other three are correct."
      ),
      toEs("Nobody will know it before Monday.", "Nadie lo sabrá antes del lunes.", "Nadie before the verb needs no extra no; saber has the short future stem sabr-: sabrá.", ["Nadie lo va a saber antes del lunes."]),
    ]
  ),
  L(
    "a2-comprehensive-review-3",
    "a2r-challenge-host-family-email",
    "Elementary Challenge: Email to Your Host Family",
    "Write an introduction email to the family you'll live with — past, present and future all in one message.",
    "8 min",
    [
      sec(
        "The model email",
        [
          "Remember the rule: an introduction email moves through time, and each part has its tense. Who you are now → present (me llamo, estudio). How it started → preterite for the event (empecé), imperfect for background (cuando era niña). Your arrival → future (llegaré). Address the whole family with ustedes (¿necesitan…?).",
          "Read the model and notice how each sentence picks its tense.",
        ],
        [
          ["Querida familia Gómez:", "Dear Gómez family,"],
          ["Me llamo Emily y tengo veinte años. Estudio biología en Toronto.", "My name is Emily and I'm twenty. I study biology in Toronto."],
          ["Empecé a estudiar español hace dos años. Cuando yo era niña, mi abuela me hablaba en español.", "I started studying Spanish two years ago. When I was a girl, my grandmother spoke Spanish to me."],
          ["Llegaré el 3 de julio. ¿Necesitan algo de Canadá?", "I'll arrive on July 3rd. Do you need anything from Canada?"],
        ],
        [
          ms(
            "Which tenses does Emily use?",
            ["present", "preterite", "imperfect", "future"],
            [0, 1, 2, 3],
            "Emily uses all four: estudio (present), empecé (preterite), hablaba (imperfect) and llegaré (future)."
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
          fb("Jake's email.", "Me llamo Jake y ___ veintidós años.", "tengo", "Spanish uses tener for age (you 'have' years): tengo veintidós años, never soy veintidós."),
          fb("Jake's email.", "___ a estudiar español hace un año.", "Empecé", "Starting is a single past event with hace un año: preterite. -zar verbs change z to c before e: empecé."),
        ]
      ),
    ],
    [
      fb("Jake's email.", "___ el 10 de agosto por la tarde.", "Llegaré", "The arrival is still ahead, so the future: llegar + é = llegaré."),
      fb("Jake's email.", "Una pregunta: ¿tienen gatos? ___ alérgico.", "Soy", "An allergy is a lasting characteristic, so ser: soy alérgico (estar is for temporary states)."),
      mc(
        "Which closing is most appropriate?",
        ["Un abrazo y hasta pronto, Jake", "Atentamente, su servidor, Sr. Jake", "Chao, besitos, Jake", "Adiós para siempre, Jake"],
        0,
        "Un abrazo y hasta pronto is warm but not over-familiar for this email. \"Atentamente, su servidor\" is too formal, \"besitos\" too intimate, and \"Adiós para siempre\" means goodbye forever."
      ),
      mc(
        "Jake wants to ask what he should bring. Best option:",
        ["¿Qué les puedo llevar de Chicago?", "¿Qué me pueden llevar a Chicago?", "¿Qué les llevé de Chicago?", "¿Qué llevaban de Chicago?"],
        0,
        "Les (to you all) + puedo llevar (can I bring): ¿Qué les puedo llevar de Chicago? \"Me pueden llevar\" asks what they can bring him, \"llevé\" is past, and \"llevaban\" is imperfect ellos."
      ),
      toEs("I'm very excited to meet you all.", "Tengo muchas ganas de conocerlos.", "Tener ganas de + infinitive; los = you all (Latin America).", ["Tengo muchas ganas de conocerlos a todos.", "Estoy muy emocionado de conocerlos.", "Tengo muchas ganas de conoceros.", "Estoy muy emocionada de conocerlos."]),
      wo("Muchas gracias por recibirme en su casa este verano.", "Gracias por + what you're thanking them for; the pronoun me attaches to the infinitive recibir.", "Thank you so much for having me in your home this summer."),
    ]
  ),
  L(
    "a2-comprehensive-review-3",
    "a2r-exit-ticket",
    "Elementary Exit Ticket: Ready for the Intermediate level?",
    "The last Elementary lesson: ten skills Intermediate will build on, one question each, no hints.",
    "9 min",
    [
      sec(
        "The ten skills",
        "(1) regular preterite (2) irregular preterite (3) imperfect (4) preterite vs. imperfect (5) direct/indirect pronouns (6) reflexives (7) comparisons (8) future (9) por/para (10) negatives and personal a.",
        [
          ["¡Vamos a por el nivel Intermedio!", "Let's go for the Intermediate level!"],
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
      fb("Skill 6: reflexives.", "¿A qué hora ___ acostaste anoche?", "te", "Acostarse with tú takes te: te acostaste."),
      fb("Skill 7: comparisons.", "Mi hermano menor es ___ alto como yo.", "tan", "Equality with an adjective → tan … como."),
      fb("Skill 8: future.", "¿___ tiempo para ayudarme mañana? (tener, tú)", "Tendrás", "Tener → tendr- + -ás."),
      fb("Skill 9: por/para.", "Este tren va ___ Sevilla.", "para", "Para marks the destination: va para Sevilla."),
      mc(
        "Skill 10: negatives and personal a. \"I didn't see anybody.\"",
        ["No vi a nadie.", "No vi nadie.", "Vi a nadie.", "No vi a alguien."],
        0,
        "No + verb + a nadie, since nadie is a person: No vi a nadie. \"No vi nadie\" drops the personal a, \"Vi a nadie\" drops no, and \"a alguien\" doesn't fit a negative sentence."
      ),
    ]
  ),
];
