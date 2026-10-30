// Synced from cheneygross-afk/lengo:src/lib/lessons/a1-irregulars.ts by scripts/sync-content.mjs -- edit it there, not here.
import { anchored, authoring } from "./authoring";
import type { AnchoredLesson } from "./weave";

// A1 unit "Everyday irregulars", added after the 2026-10 curriculum audit:
// the required A1 path never used dar, poner, decir, conocer or oír, nor
// pongo, digo, vengo, salgo or conozco, and no lesson anywhere taught the
// yo-go verbs or saber vs. conocer. These eight lessons come right after
// the regular and stem-changing present (sequencing.ts moves the block in
// front of the Ser vs. Estar unit). Exercises ask for English → Spanish
// production; the grammar note comes in the explanation afterwards.
const { mc, ms, fe, toEs, toEn, wo, mt, sec } = authoring("en");
const L = (
  slug: string,
  title: string,
  summary: string,
  duration: string,
  sections: Parameters<typeof anchored>[6],
  exercises: Parameters<typeof anchored>[7]
) => anchored("A1", "review-adjectives-ar-er-ir-verbs", slug, title, summary, duration, sections, exercises);

/** First and last slug of the unit, for sequencing.ts and units.ts. */
export const A1_IRREGULARS_FIRST = "a1-irregulars-yo-go";
export const A1_IRREGULARS_LAST = "a1-irregulars-mission-first-day";

export const A1_IRREGULARS: AnchoredLesson[] = [
  L(
    "a1-irregulars-yo-go",
    "Yo-Go Verbs: Pongo, Salgo, Traigo, Hago",
    "Four everyday verbs that are regular except for one form: yo ends in -go.",
    "9 min",
    [
      sec(
        "The idea: only yo is different",
        [
          "Some of the most common Spanish verbs add a g in the yo form. Poner (to put) becomes pongo, salir (to go out, to leave) becomes salgo, traer (to bring) becomes traigo and hacer (to do, to make) becomes hago.",
          "The irregularity lives in that one form. Tú, él, nosotros, vosotros and ellos are completely regular: take the stem and add the endings you already know (pones, sale, traemos, hacen). So the rule is: memorize the yo form, conjugate everything else as normal. Verbs built on these keep the g too: suponer (to suppose) → supongo.",
        ],
        [
          ["poner → pongo, pones, pone, ponemos, ponéis, ponen", "to put (only yo has the g)"],
          ["salir → salgo, sales, sale, salimos, salís, salen", "to go out, to leave"],
          ["traer → traigo, traes, trae, traemos, traéis, traen", "to bring"],
          ["hacer → hago, haces, hace, hacemos, hacéis, hacen", "to do, to make"],
        ],
        [
          mc(
            "Suponer (to suppose) is built on poner. How do you say \"I suppose\"?",
            ["supongo", "supono", "supone", "suponemos"],
            0,
            "A verb built on poner copies its yo form: pongo → supongo. \"Supono\" is the regular form that doesn't exist, supone is he/she, and suponemos is we."
          ),
          mc(
            "Only yo is irregular. Which form is correct for tú? (hacer)",
            ["haces", "hagas", "hagos", "hago"],
            0,
            "Outside yo, hacer is regular: hac- + -es = haces. The g belongs only to hago (yo); \"hagas\" and \"hagos\" drag it into the tú form."
          ),
        ]
      ),
      sec(
        "In real life",
        "These verbs fill an ordinary day. Salir de means to leave a place; salir con means to go out with someone. Hacer covers both do and make.",
        [
          ["Salgo de casa a las ocho.", "I leave home at eight."],
          ["Traigo café para todos.", "I'm bringing coffee for everyone."],
          ["¿Qué haces esta noche? —Salgo con unos amigos.", "What are you doing tonight? — I'm going out with some friends."],
          ["Ella pone música cuando trabaja.", "She puts on music when she works. (ella: regular)"],
          ["Hago la cena y luego leo un rato.", "I make dinner and then read for a while."],
        ],
        [
          mc(
            "\"What time do you leave work?\" (tú)",
            ["¿A qué hora sales del trabajo?", "¿A qué hora salges del trabajo?", "¿A qué hora salgo del trabajo?", "¿A qué hora sale del trabajo?"],
            0,
            "Tú is regular: sal- + -es = sales. \"Salges\" copies the g of salgo into the tú form, salgo means I leave, and sale is he/she (or usted)."
          ),
        ]
      ),
    ],
    [
      fe("Yo ___ las llaves en la mesa.", "pongo", "I [put] the keys on the table.", "poner → pongo: only the yo form has the g."),
      fe("Siempre ___ el teléfono en el bolso.", "pongo", "I always [put] my phone in my bag.", "poner → pongo (yo)."),
      fe("Los viernes ___ tarde de la oficina.", "salgo", "On Fridays I [leave] the office late.", "salir → salgo (yo)."),
      fe("¿Qué ___ tú los domingos?", "haces", "What [do you do] on Sundays?", "hacer → haces: only yo is irregular, tú is regular."),
      fe("Mis compañeros ___ comida de casa.", "traen", "My coworkers [bring] food from home.", "traer → traen (ellos): regular outside yo."),
      toEs("I'm bringing the wine and you're bringing the bread.", "Yo traigo el vino y tú traes el pan.", "traer → traigo (yo), traes (tú): the g only in yo.", ["Traigo el vino y tú traes el pan."]),
      toEs("I do my homework at night.", "Hago la tarea por la noche.", "hacer → hago. Tarea or deberes both work.", ["Yo hago la tarea por la noche.", "Hago los deberes por la noche.", "Hago mi tarea por la noche."]),
      toEs("We go out on Saturdays.", "Salimos los sábados.", "salir → salimos: nosotros is regular.", ["Nosotros salimos los sábados.", "Salimos los sábados por la noche."]),
      toEn("¿Dónde pongo las bolsas?", "Where do I put the bags?", "Pongo is the yo form of poner.", ["Where should I put the bags?", "Where shall I put the bags?"]),
      mt(
        "Match each infinitive to its yo form.",
        [
          ["poner", "pongo"],
          ["salir", "salgo"],
          ["traer", "traigo"],
          ["hacer", "hago"],
        ],
        "All four add a g in the yo form; the other forms are regular."
      ),
      wo("Salgo de casa y pongo música en el coche.", "Salgo and pongo are both yo forms with -go.", "I leave home and put music on in the car."),
      fe("Yo ___ la cena.", "hago", "I [make] dinner.", "Hacer: yo → hago, not 'hazo' or 'haco'."),
      fe("Yo ___ con mis amigos los viernes.", "salgo", "I [go out] with my friends on Fridays.", "Salir: yo → salgo."),
      fe("Yo ___ la comida.", "traigo", "I [bring] the food.", "Traer: yo → traigo."),
      mc("Which is the yo form of traer?", ["traigo", "trao", "traego", "traio"], 0, "Traer adds -ig- in yo: traigo. The other three try to build yo the regular way, which this verb doesn't allow."),
      toEs("I put the books on the shelf.", "Pongo los libros en el estante.", "Poner: yo → pongo.", ["Yo pongo los libros en el estante."]),
      toEs("Hacemos las camas.", "Hago las camas.", "Yo is the one irregular form: hacer → hago.", ["Yo hago las camas."], "Change to yo."),
      toEs("Salgo a las nueve.", "Sale a las nueve.", "Outside yo, salir is regular: sal- + -e = sale. The g stays in salgo only.", ["Ella sale a las nueve."], "Change to ella."),
      toEs("Pongo la mesa.", "Ponemos la mesa.", "Nosotros is regular: pon- + -emos = ponemos. No g.", ["Nosotros ponemos la mesa.", "Nosotras ponemos la mesa."], "Change to nosotros."),
      toEs("Yo salo de casa a las siete.", "Yo salgo de casa a las siete.", "Salir is a yo-go verb: salgo. \"Salo\" is the regular form that doesn't exist.", ["Salgo de casa a las siete."], "Correct the sentence."),
      toEs("Ella hago la cena.", "Ella hace la cena.", "Hago is only for yo. Ella is regular: hac- + -e = hace.", [], "Correct the sentence."),
      toEs("Yo pono la música.", "Yo pongo la música.", "Poner adds a g in yo: pongo.", ["Pongo la música."], "Correct the sentence."),
      wo("Hago la tarea y salgo con Ana", "Two yo-go forms: hago, salgo.", "I do my homework and go out with Ana"),
      toEs("What are you (informal) bringing? I'm bringing flowers.", "¿Qué traes? Traigo flores.", "Tú → traes (regular); yo → traigo.", ["¿Qué traes tú? Traigo flores.", "¿Qué traes? Yo traigo flores."]),
      { type: "speak", prompt: "Say it in Spanish: On Fridays I leave work early, I make dinner and I put on music.", text: "Los viernes salgo temprano del trabajo, hago la cena y pongo música.", explanation: "All three are yo forms with -go: salgo, hago, pongo." },
    ]
  ),
  L(
    "a1-irregulars-tengo-vengo-digo-oigo",
    "Yo-Go Plus a Vowel Change: Tengo, Vengo, Digo, Oigo",
    "Tener, venir, decir and oír: a -go yo form plus the boot-shaped vowel change (tener, venir, decir) and the y-forms of oír (oyes, oye, oyen).",
    "10 min",
    [
      sec(
        "Tener and venir: -go, then e → ie",
        [
          "These verbs combine two patterns you already know. The yo form ends in -go, like pongo. The other boot forms (tú, él, ellos) change e → ie, like querer. Nosotros and vosotros, outside the boot, stay regular.",
          "So: tengo (yo-go), tienes, tiene, tienen (boot: ie), tenemos, tenéis (regular). Venir is the same pattern with -ir endings: vengo, vienes, viene, venimos, venís, vienen.",
        ],
        [
          ["tener → tengo, tienes, tiene, tenemos, tenéis, tienen", "to have"],
          ["venir → vengo, vienes, viene, venimos, venís, vienen", "to come"],
          ["Vengo de la oficina.", "I'm coming from the office."],
          ["¿Vienes conmigo? —Sí, ahora voy.", "Are you coming with me? — Yes, I'm coming."],
        ],
        [
          fe("Mi jefa ___ mañana a las nueve.", "viene", "My boss [is coming] tomorrow at nine.", "venir → viene: e → ie inside the boot."),
          mc(
            "\"We have a problem.\"",
            ["Tenemos un problema.", "Tienemos un problema.", "Tengamos un problema.", "Tienen un problema."],
            0,
            "Nosotros is outside the boot and isn't yo, so tener is regular here: tenemos. \"Tienemos\" puts the boot change in nosotros, \"tengamos\" drags in the g of tengo, and tienen means they have."
          ),
        ]
      ),
      sec(
        "Decir: digo, dices, dice",
        "Decir (to say, to tell) has digo for yo and changes e → i in the boot, like pedir: digo, dices, dice, decimos, dicen. Nosotros keeps the e: decimos. To tell someone something: decir algo a alguien.",
        [
          ["decir → digo, dices, dice, decimos, decís, dicen", "to say, to tell"],
          ["¿Qué dice el mensaje?", "What does the message say?"],
          ["Te digo un secreto.", "I'll tell you a secret. (digo: yo)"],
          ["¿Cómo se dice \"thank you\" en español?", "How do you say \"thank you\" in Spanish?"],
        ],
        [
          mc(
            "\"They say it's a good restaurant.\"",
            ["Dicen que es un buen restaurante.", "Decen que es un buen restaurante.", "Digen que es un buen restaurante.", "Dice que es un buen restaurante."],
            0,
            "Decir → dicen (ellos): e → i in the boot. \"Decen\" misses the change, \"digen\" copies the g from digo, and \"dice\" is singular."
          ),
        ]
      ),
      sec(
        "Oír: oigo, oyes, oye",
        "Oír (to hear) has oigo for yo. In the other boot forms a y appears, because Spanish avoids an i between two vowels: oyes, oye, oyen. Nosotros is oímos. You hear ¡Oye! all day: it's how you get a friend's attention.",
        [
          ["oír → oigo, oyes, oye, oímos, oís, oyen", "to hear"],
          ["No oigo nada. ¿Puedes hablar más alto?", "I can't hear anything. Can you speak louder?"],
          ["¡Oye! ¿Tienes un momento?", "Hey! Have you got a moment?"],
        ],
        [
          mc(
            "\"Do you hear the music?\" (tú)",
            ["¿Oyes la música?", "¿Oíes la música?", "¿Oigues la música?", "¿Oye la música?"],
            0,
            "Tú is oyes: the y replaces the i between vowels. \"Oíes\" keeps the i, \"oigues\" copies the g of oigo, and oye is he/she or usted."
          ),
        ]
      ),
    ],
    [
      fe("Perdón, no te ___ bien.", "oigo", "Sorry, I can't [hear] you well.", "oír → oigo (yo). Spanish often skips \"can\" with verbs of the senses."),
      fe("___ dos hijos y un perro.", "Tengo", "[I have] two kids and a dog.", "tener → tengo (yo)."),
      fe("¿A qué hora ___ tú a casa?", "vienes", "What time [are you coming] home?", "venir → vienes: e → ie for tú."),
      fe("Mi madre siempre ___ que trabajo demasiado.", "dice", "My mother always [says] I work too much.", "decir → dice: e → i for él/ella."),
      fe("Nosotros no ___ la música desde aquí.", "oímos", "We can't [hear] the music from here.", "oír → oímos, with an accent on the í."),
      toEs("I'm coming from work and I'm hungry.", "Vengo del trabajo y tengo hambre.", "venir → vengo, tener → tengo: both yo forms end in -go.", ["Vengo del trabajo y tengo mucha hambre."]),
      toEs("What do you (informal) say? Yes or no?", "¿Qué dices? ¿Sí o no?", "decir → dices: e → i for tú.", ["¿Qué dices tú? ¿Sí o no?"]),
      toEs("I always tell the truth.", "Siempre digo la verdad.", "decir → digo (yo).", ["Yo siempre digo la verdad.", "Digo siempre la verdad."]),
      toEn("No oigo bien, el tren hace mucho ruido.", "I can't hear well, the train is making a lot of noise.", "Oigo = I hear; hace ruido = makes noise.", ["I don't hear well, the train is making a lot of noise.", "I can't hear well, the train makes a lot of noise."]),
      ms(
        "Which forms are correct?",
        ["vengo", "tieno", "digo", "oyo", "vienen"],
        [0, 2, 4],
        "Vengo, digo and vienen are right. \"Tieno\" should be tengo, and \"oyo\" should be oigo: these yo forms all end in -go."
      ),
      mt(
        "Match each yo form to its verb.",
        [
          ["tengo", "tener"],
          ["vengo", "venir"],
          ["digo", "decir"],
          ["oigo", "oír"],
        ],
        "All four end in -go in the yo form."
      ),
      fe("Yo ___ de la escuela.", "vengo", "I'm [coming] from school.", "Venir: yo → vengo."),
      fe("Ellos ___ tres hijos.", "tienen", "They [have] three children.", "Tener: e → ie in ellos: tienen."),
      fe("Nosotros ___ la verdad.", "decimos", "We [tell] the truth.", "Decir: nosotros keeps the e: decimos, not dicimos."),
      toEs("Tienen una casa grande.", "Tengo una casa grande.", "Yo is the -go form: tengo. Tienen had the boot change; yo has the g instead.", ["Yo tengo una casa grande."], "Change to yo."),
      toEs("Oigo música.", "Oyen música.", "Ellos is a boot form, and oír puts a y between the vowels: oyen.", ["Ellos oyen música.", "Ellas oyen música."], "Change to ellos."),
      toEs("Do you (informal) have a car?", "¿Tienes coche?", "Tener: tú → tienes (e → ie).", ["¿Tienes un coche?", "¿Tienes carro?", "¿Tienes un carro?", "¿Tienes auto?", "¿Tienes un auto?"]),
      toEs("Vengo a las ocho.", "Venimos a las ocho.", "Nosotros is outside the boot and isn't yo, so venir is regular: venimos (-ir ending -imos).", ["Nosotros venimos a las ocho.", "Nosotras venimos a las ocho."], "Change to nosotros."),
      toEs("Nosotros tienemos dos coches.", "Nosotros tenemos dos coches.", "Nosotros is outside the boot, so tener keeps the e: tenemos.", ["Tenemos dos coches.", "Nosotras tenemos dos coches.", "Tenemos dos carros."], "Correct the sentence."),
      toEs("Ellos decen que sí.", "Ellos dicen que sí.", "Ellos is inside the boot, so decir changes e → i: dicen.", ["Dicen que sí."], "Correct the sentence."),
      toEs("Yo tieno hambre.", "Yo tengo hambre.", "The yo form of tener ends in -go: tengo. Tieno mixes the boot vowel into yo.", ["Tengo hambre."], "Correct the sentence."),
      toEs("My friends come at eight and say hello.", "Mis amigos vienen a las ocho y dicen hola.", "Venir → vienen, decir → dicen: both have the boot change.", ["Mis amigos vienen a las ocho y saludan."]),
      { type: "speak", prompt: "Say it in Spanish: I have a meeting at nine, but my boss says she's coming at ten.", text: "Tengo una reunión a las nueve, pero mi jefa dice que viene a las diez.", explanation: "Tengo (yo-go), dice (e → i) and viene (e → ie): one yo form and two boot forms." },
    ]
  ),
  L(
    "a1-irregulars-dar-ver-saber",
    "Dar, Ver and Saber: Doy, Veo, Sé",
    "Three short, very common verbs with one odd form each: doy (I give), veo (I see) and sé (I know).",
    "8 min",
    [
      sec(
        "Dar: to give",
        [
          "These three verbs follow the same idea as the yo-go verbs: one odd yo form, and everything else regular. Dar is irregular only in yo: doy, like soy (I am). The rest takes the regular -ar endings on the stem d-: das, da, damos, dais, dan.",
          "Dar also appears in many fixed phrases: dar las gracias (to thank), dar un paseo (to go for a walk), dar una vuelta (to take a stroll, a spin).",
        ],
        [
          ["dar → doy, das, da, damos, dais, dan", "to give (only yo is odd)"],
          ["Te doy mi número.", "I'll give you my number."],
          ["El hotel da un mapa a los clientes.", "The hotel gives a map to guests."],
          ["Damos una vuelta por el centro.", "We take a stroll around downtown."],
        ],
        [
          fe("¿Me ___ tu número, por favor?", "das", "Can you [give] me your number, please? (tú)", "Outside yo, dar is regular: d- + -as = das. A present-tense question works as a request."),
        ]
      ),
      sec(
        "Ver: to see, to watch",
        "Ver keeps the e of the infinitive in the yo form: veo (not vo). The other forms are regular and very short: ves, ve, vemos, veis, ven. It covers both see and watch.",
        [
          ["ver → veo, ves, ve, vemos, veis, ven", "to see, to watch"],
          ["No veo bien sin gafas.", "I don't see well without glasses."],
          ["¿Vemos una película esta noche?", "Shall we watch a film tonight?"],
          ["Nos vemos luego.", "See you later."],
        ],
        [
          mc(
            "\"Do you see the bus?\" (tú)",
            ["¿Ves el autobús?", "¿Vees el autobús?", "¿Veos el autobús?", "¿Ve el autobús?"],
            0,
            "Only yo keeps the extra e (veo). Tú is the short regular form: ves. \"Vees\" copies the e of veo, \"veos\" adds -s to the yo form, and ve is he/she or usted."
          ),
        ]
      ),
      sec(
        "Saber: to know (facts, how to)",
        "Saber means to know a fact or to know how to do something. Yo is sé, with an accent so it doesn't look like the pronoun se. The rest is regular: sabes, sabe, sabemos, sabéis, saben. Before an infinitive it means \"know how to\", with nothing in between.",
        [
          ["saber → sé, sabes, sabe, sabemos, sabéis, saben", "to know"],
          ["No sé dónde está la estación.", "I don't know where the station is."],
          ["¿Sabes nadar?", "Do you know how to swim? / Can you swim?"],
          ["Ella sabe tres idiomas.", "She knows three languages."],
        ],
        [
          fe("No ___ la dirección del hotel.", "sabemos", "We don't [know] the hotel's address.", "Outside yo, saber is regular: sab- + -emos = sabemos."),
        ]
      ),
    ],
    [
      fe("Yo te ___ las llaves mañana.", "doy", "I'll [give] you the keys tomorrow.", "dar → doy (yo). Spanish often uses the present for a near future."),
      fe("No ___ la respuesta.", "sé", "I don't [know] the answer.", "saber → sé, with an accent."),
      fe("¿Tú ___ dónde vive Marta?", "sabes", "Do you [know] where Marta lives?", "saber → sabes: regular outside yo."),
      fe("Los domingos ___ un paseo por el parque.", "damos", "On Sundays we [go for] a walk in the park.", "dar un paseo = to go for a walk; dar → damos."),
      fe("Desde mi ventana ___ el mar.", "veo", "From my window I [see] the sea.", "ver → veo."),
      toEs("I don't know.", "No sé.", "saber → sé: accent on the é.", ["Yo no sé.", "No lo sé."]),
      toEs("I give my seat to an older man.", "Doy mi asiento a un hombre mayor.", "dar → doy (yo); a + person for the receiver.", ["Le doy mi asiento a un hombre mayor.", "Doy mi sitio a un hombre mayor.", "Le doy mi sitio a un hombre mayor."]),
      toEs("Do you know how to cook?", "¿Sabes cocinar?", "saber + infinitive = know how to.", ["¿Tú sabes cocinar?", "¿Sabe cocinar?", "¿Sabe usted cocinar?"]),
      toEn("Nos vemos mañana en la oficina.", "See you tomorrow at the office.", "Nos vemos = we see each other: see you.", ["We'll see each other tomorrow at the office.", "See you tomorrow in the office."]),
      mc(
        "Which sentence is correct?",
        ["Yo se la dirección.", "Yo sé la dirección.", "Yo sabo la dirección.", "Yo sabe la dirección."],
        1,
        "Yo sé, with the accent. Without it, se is a pronoun; \"sabo\" is the regular form that doesn't exist, and \"sabe\" is he/she."
      ),
      wo("No sé qué ver esta noche.", "Sé (saber) + qué + infinitive.", "I don't know what to watch tonight."),
      fe("Yo ___ un libro a mi hermana.", "doy", "I [give] a book to my sister.", "Dar: yo → doy."),
      fe("Yo no ___ nada.", "veo", "I don't [see] anything.", "Ver: yo → veo, keeping the e."),
      fe("Yo ___ cantar.", "sé", "I [know how to] sing.", "Saber + infinitive = know how to; yo → sé, with the accent."),
      mc("Which is the yo form of dar?", ["doy", "do", "dao", "dago"], 0, "Dar is irregular only in yo: doy, ending in -oy like soy. The rest is regular: das, da, damos, dan."),
      toEs("Veo la televisión por la noche.", "Vemos la televisión por la noche.", "Nosotros is regular: v- + -emos = vemos. Only yo keeps the extra e.", ["Nosotros vemos la televisión por la noche.", "Vemos la tele por la noche.", "Nosotras vemos la televisión por la noche."], "Change to nosotros."),
      toEs("I don't know where Ana lives.", "No sé dónde vive Ana.", "Saber → sé. Dónde has an accent in this indirect question.", ["Yo no sé dónde vive Ana."]),
      toEs("Damos las gracias a todos.", "Doy las gracias a todos.", "Yo is the one odd form of dar: doy.", ["Yo doy las gracias a todos.", "Les doy las gracias a todos."], "Change to yo."),
      toEs("Do you (informal) know how to dance?", "¿Sabes bailar?", "Saber + infinitive; don't add 'cómo'.", ["¿Tú sabes bailar?"]),
      toEs("Yo do un regalo a mi madre.", "Yo doy un regalo a mi madre.", "Dar is irregular in yo: doy, not \"do\".", ["Doy un regalo a mi madre.", "Le doy un regalo a mi madre."], "Correct the sentence."),
      toEs("Tú sabe nadar muy bien.", "Tú sabes nadar muy bien.", "Outside yo, saber is regular, and tú takes -es: sabes. Sabe is the él/ella form.", ["Sabes nadar muy bien."], "Correct the sentence."),
      toEs("¿Sabes cómo nadar?", "¿Sabes nadar?", "Saber + infinitive already means \"know how to\". Spanish doesn't add cómo before the infinitive.", ["¿Tú sabes nadar?"], "Correct the sentence."),
      wo("Veo una película y doy un paseo", "Veo (ver) and doy (dar): both yo forms.", "I watch a movie and go for a walk"),
      { type: "speak", prompt: "Say it in Spanish: I don't know how to cook, but I see my mother on Sundays and she gives me food.", text: "No sé cocinar, pero veo a mi madre los domingos y ella me da comida.", explanation: "Sé, veo (yo forms) and da (ella, regular). Ver takes a before a person: veo a mi madre." },
    ]
  ),
  L(
    "a1-irregulars-conocer",
    "Conocer and Parecer: Conozco, Parezco",
    "Most verbs ending in a vowel + -cer (conocer, parecer) add a z in the yo form. Conocer also brings a little a before people.",
    "8 min",
    [
      sec(
        "The idea: vowel + -cer → -zco",
        [
          "Verbs that end in a vowel + -cer change that ending to -zco in the yo form: conocer → conozco, parecer → parezco. It's another \"odd yo\" verb: every other form is regular (conoces, conoce, conocemos, conocen).",
          "Because it's a pattern and not a one-off, it works for verbs you haven't met yet: ofrecer (to offer) → ofrezco, agradecer (to be grateful for) → agradezco.",
          "Conocer means to know a person or to be familiar with a place. Parecer means to seem, to look. ¿Qué te parece? (What do you think of it?) is one of its most useful phrases.",
        ],
        [
          ["conocer → conozco, conoces, conoce, conocemos, conocéis, conocen", "to know (people, places)"],
          ["Conozco Madrid, pero no conozco Barcelona.", "I know Madrid, but I don't know Barcelona."],
          ["Pareces cansado. ¿Estás bien?", "You look tired. Are you OK? (tú: regular)"],
          ["El plan parece fácil.", "The plan seems easy."],
        ],
        [
          mc(
            "Ofrecer (to offer) follows the same pattern. \"I offer my help.\"",
            ["Ofrezco mi ayuda.", "Ofreco mi ayuda.", "Ofrece mi ayuda.", "Ofrecemos mi ayuda."],
            0,
            "Vowel + -cer → -zco in yo: ofrezco. \"Ofreco\" is the regular form that doesn't exist, ofrece is he/she, and ofrecemos is we."
          ),
        ]
      ),
      sec(
        "A before a person",
        "When the thing you know, see or call is a specific person, Spanish puts a in front of it: Conozco a Ana. Conozco Madrid has no a because Madrid is a place. A + el contracts to al.",
        [
          ["Conozco a tu hermano.", "I know your brother."],
          ["¿Conoces al nuevo jefe?", "Do you know the new boss? (a + el = al)"],
          ["Veo a mis padres los domingos.", "I see my parents on Sundays."],
        ],
        [
          mc(
            "\"I know Laura.\"",
            ["Conozco a Laura.", "Conozco Laura.", "Sé a Laura.", "Conoco a Laura."],
            0,
            "Conocer for a person, and a before the person: conozco a Laura. Without a it is incomplete, \"sé\" is for facts, and \"conoco\" is missing the z."
          ),
          fe("¿Ustedes ___ al profesor nuevo?", "conocen", "Do you all [know] the new teacher?", "Ustedes takes the regular -en ending: conocen. The teacher is a person, so a + el = al."),
        ]
      ),
    ],
    [
      fe("No ___ esta parte de la ciudad.", "conozco", "I don't [know] this part of the city.", "conocer → conozco (yo). A place takes no a."),
      fe("¿___ a mi novia?", "Conoces", "[Do you know] my girlfriend?", "conocer → conoces (tú), with a before the person.", ["Conoce", "Conocen", "Conocéis"]),
      fe("El restaurante ___ caro, pero no lo es.", "parece", "The restaurant [seems] expensive, but it isn't.", "parecer → parece."),
      fe("Mis amigos no ___ a mi familia.", "conocen", "My friends don't [know] my family.", "conocer → conocen (ellos)."),
      toEs("I know a good restaurant near here.", "Conozco un buen restaurante cerca de aquí.", "conocer → conozco: familiar with a place.", ["Yo conozco un buen restaurante cerca de aquí.", "Conozco un restaurante bueno cerca de aquí."]),
      toEs("Do you know Pedro?", "¿Conoces a Pedro?", "A specific person → a before the name.", ["¿Tú conoces a Pedro?", "¿Conoce a Pedro?", "¿Conoce usted a Pedro?"]),
      toEs("You look happy today.", "Pareces contento hoy.", "parecer + adjective; the adjective agrees with the person.", ["Pareces contenta hoy.", "Hoy pareces contento.", "Hoy pareces contenta.", "Pareces feliz hoy.", "Hoy pareces feliz.", "Parece contento hoy.", "Parece contenta hoy.", "Hoy parece contento.", "Hoy parece contenta.", "Parece feliz hoy.", "Hoy parece feliz."]),
      toEn("¿Qué te parece el plan?", "What do you think of the plan?", "¿Qué te parece…? asks for an opinion.", ["What do you think about the plan?", "How does the plan seem to you?"]),
      ms(
        "Which sentences need the little word a?",
        ["Conozco ___ Carlos.", "Conozco ___ Lima.", "Veo ___ mi madre.", "Veo ___ la televisión."],
        [0, 2],
        "Carlos and mi madre are people, so they take a. Lima and la televisión aren't people."
      ),
      wo("No conozco a nadie en esta ciudad.", "Conozco + a + person; nadie is a person too.", "I don't know anyone in this city."),
      fe("Yo ___ a tu madre.", "conozco", "I [know] your mother.", "Conocer: yo → conozco (adds z)."),
      fe("Ella ___ muy simpática.", "parece", "She [seems] very nice.", "Parecer: ella → parece (only yo has the z)."),
      fe("Tú ___ Lima.", "conoces", "You (informal) [know] Lima.", "Conocer: tú → conoces. No a before a place."),
      toEs("Do you all (Latin America) know the doctor (m.)?", "¿Ustedes conocen al doctor?", "A person → a; a + el = al.", ["¿Conocen ustedes al doctor?", "¿Ustedes conocen al médico?"]),
      toEs("Conocemos a la profesora.", "Conozco a la profesora.", "Yo is the one odd form: -cer → -zco, conozco. The a before the person stays.", ["Yo conozco a la profesora."], "Change to yo."),
      toEs("We know the neighbors.", "Conocemos a los vecinos.", "People → a: a los vecinos. Nosotros is regular: conocemos.", ["Nosotros conocemos a los vecinos.", "Nosotras conocemos a los vecinos."]),
      toEs("El libro parece interesante.", "Los libros parecen interesantes.", "A plural subject takes parecen (regular -en), and the adjective agrees: interesantes.", [], "Make it plural."),
      toEs("What do you (informal) think of the house?", "¿Qué te parece la casa?", "¿Qué te parece...? asks someone's opinion. The verb agrees with the thing (la casa): parece."),
      mc("How do you say 'I know Mexico'?", ["Conozco México.", "Conozco a México.", "Conoco México.", "Sé México."], 0, "A place takes no a, and yo is conozco. Sé is for facts and skills, not places."),
      toEs("Veo Pedro los viernes.", "Veo a Pedro los viernes.", "Pedro is a specific person, so ver needs a before him: veo a Pedro.", [], "Correct the sentence."),
      toEs("Conozco a Madrid muy bien.", "Conozco Madrid muy bien.", "Madrid is a place, not a person, so there's no a after conocer.", ["Conozco muy bien Madrid."], "Correct the sentence."),
      toEs("Yo conoco a tu hermana.", "Yo conozco a tu hermana.", "Conocer ends in vowel + -cer, so yo is -zco: conozco.", ["Conozco a tu hermana."], "Correct the sentence."),
      mc(
        "Agradecer (to be grateful for) is new. \"I appreciate your help.\"",
        ["Agradezco tu ayuda.", "Agradeco tu ayuda.", "Agradece tu ayuda.", "Agradecemos tu ayuda."],
        0,
        "Vowel + -cer → -zco in yo: agradezco, exactly like conozco. \"Agradeco\" is missing the z, agradece is he/she, and agradecemos is we."
      ),
      wo("Conozco a un músico de Cuba", "Conozco + a before a person.", "I know a musician from Cuba"),
      toEs("I know Quito well, but I don't know your city.", "Conozco bien Quito, pero no conozco tu ciudad.", "Places: conozco with no a.", ["Conozco Quito bien, pero no conozco tu ciudad."]),
      { type: "speak", prompt: "Say it in Spanish: I don't know your brother, but he seems nice.", text: "No conozco a tu hermano, pero parece simpático.", explanation: "Conozco (yo, -zco) + a before the person; parece (él, regular) + an adjective that agrees." },
    ]
  ),
  L(
    "saber-vs-conocer",
    "Saber vs. Conocer",
    "Two verbs for \"to know\": saber for facts and skills, conocer for people, places and things you've experienced.",
    "9 min",
    [
      sec(
        "Facts and skills → saber",
        [
          "English has one verb, \"know\", for two different ideas, and Spanish splits them. Saber is knowledge you can state: information you have in your head, or a skill you have learned. Conocer (next section) is acquaintance: you have met the person or been to the place.",
          "Use saber for information (a fact, a name, an address, the answer) and before an infinitive for a skill. Because a question word or que always introduces information, saber is the verb before que, dónde, cuándo, si and other question words.",
        ],
        [
          ["Sé tu número de teléfono.", "I know your phone number. (information)"],
          ["¿Sabes si el museo abre los lunes?", "Do you know if the museum opens on Mondays? (si + fact)"],
          ["Mi hijo sabe leer.", "My son knows how to read. (skill + infinitive)"],
          ["No sabemos cuándo viene el técnico.", "We don't know when the technician is coming."],
        ],
        [
          fe("¿___ a qué hora sale el tren?", "Sabes", "[Do you know] what time the train leaves?", "A fact (a time) introduced by a qué hora → saber.", ["Sabe", "Saben", "Sabéis"]),
        ]
      ),
      sec(
        "People, places, experience → conocer",
        "Use conocer for being acquainted with a person, having been to a place, or being familiar with a book, a song, a dish or a system. Conocer a alguien can also mean to meet someone for the first time. Remember the a before a person.",
        [
          ["Conozco a la profesora de mi hija.", "I know my daughter's teacher."],
          ["¿Conoces Perú?", "Have you been to Peru? (Do you know Peru?)"],
          ["Conocemos bien este barrio.", "We know this neighborhood well."],
          ["Quiero conocer a tus amigos.", "I want to meet your friends."],
        ],
        [
          mc(
            "\"Do you know this song?\"",
            ["¿Conoces esta canción?", "¿Sabes esta canción?", "¿Conoces a esta canción?", "¿Sabes a esta canción?"],
            0,
            "Being familiar with a song → conocer, and no a because a song isn't a person. Saber una canción would mean knowing it by heart, which isn't what's asked."
          ),
        ]
      ),
      sec(
        "Side by side",
        "The same person or place can go with either verb, with a different meaning: conocer for the person or place itself, saber for a fact about it.",
        [
          ["Conozco a Luis. / Sé dónde vive Luis.", "I know Luis. / I know where Luis lives."],
          ["Conozco Roma. / Sé que Roma es la capital de Italia.", "I've been to Rome. / I know that Rome is the capital of Italy."],
        ],
        [
          mc(
            "A friend asks: \"¿Conoces Lima?\" You've never been, but you know it's the capital of Peru. Which answer fits?",
            ["No, pero sé que es la capital de Perú.", "No, pero conozco que es la capital de Perú.", "No, pero sé Lima.", "Sí, sé Lima."],
            0,
            "You haven't been there, so no conocer; the fact you know comes with que, so saber: sé que es la capital. Conocer never takes que, and saber doesn't take a place."
          ),
        ]
      ),
    ],
    [
      fe("No ___ a nadie en la fiesta.", "conozco", "I don't [know] anyone at the party.", "People → conocer, yo form conozco."),
      fe("¿Ustedes ___ dónde está el baño?", "saben", "Do you [know] where the bathroom is?", "Dónde + information → saber (ustedes: saben)."),
      fe("Ana ___ hablar alemán.", "sabe", "Ana [knows how to] speak German.", "Saber + infinitive = a skill."),
      fe("¿___ el centro de Sevilla?", "Conoces", "[Are you familiar with] downtown Seville?", "A place you've been → conocer.", ["Conoce", "Conocen", "Conocéis"]),
      toEs("I know that she works here.", "Sé que ella trabaja aquí.", "Saber + que + a fact.", ["Yo sé que ella trabaja aquí.", "Sé que trabaja aquí."]),
      toEs("I don't know your husband.", "No conozco a tu marido.", "A person → conocer, plus a.", ["No conozco a tu esposo.", "Yo no conozco a tu marido.", "Yo no conozco a tu esposo.", "No conozco a su marido.", "No conozco a su esposo."]),
      toEs("Do you know how to drive?", "¿Sabes conducir?", "A skill → saber + infinitive. Manejar is the usual verb in much of Latin America.", ["¿Sabes manejar?", "¿Tú sabes conducir?", "¿Tú sabes manejar?", "¿Sabe conducir?", "¿Sabe manejar?"]),
      toEs("We want to meet your parents.", "Queremos conocer a tus padres.", "Conocer a alguien = to meet someone for the first time.", ["Nosotros queremos conocer a tus padres.", "Queremos conocer a sus padres."]),
      mt(
        "Match each sentence start to the verb it needs.",
        [
          ["___ a mi vecino.", "Conozco"],
          ["___ su dirección.", "Sé"],
          ["___ Buenos Aires.", "Conozco"],
          ["___ cocinar.", "Sé"],
        ],
        "People and places → conozco; facts and skills → sé."
      ),
      fe("No ___ su número.", "sé", "I don't [know] his number.", "A number is a fact → saber: sé."),
      fe("¿___ a mi hermano?", "Conoces", "[Do you know] my brother? (informal)", "A person → conocer (with a)."),
      fe("Mis hijos ___ nadar.", "saben", "My kids [know how to] swim.", "A skill + infinitive → saber."),
      mc("'I know this book.' (I've read it)", ["Conozco este libro.", "Sé este libro."], 0, "Being familiar with a book is conocer. Saber needs information or a skill, not a thing you've experienced."),
      toEs("Sé que la tienda cierra a las ocho.", "Sabemos que la tienda cierra a las ocho.", "Nosotros: sabemos (saber is regular outside yo). Still saber, because que introduces a fact.", ["Nosotros sabemos que la tienda cierra a las ocho.", "Nosotras sabemos que la tienda cierra a las ocho."], "Change to nosotros."),
      toEs("Conocemos bien Bogotá.", "Conozco bien Bogotá.", "Yo: conozco (-zco). Still conocer, because Bogotá is a place you know from experience.", ["Conozco Bogotá bien.", "Yo conozco bien Bogotá."], "Change to yo."),
      toEs("Do you (formal) know where the hotel is?", "¿Sabe usted dónde está el hotel?", "A question word (dónde) follows → saber.", ["¿Usted sabe dónde está el hotel?", "¿Sabe dónde está el hotel?"]),
      toEs("Do you (informal) know paella? (Have you tried it?)", "¿Conoces la paella?", "Being familiar with a dish is an experience → conocer, with no a because it isn't a person."),
      toEs("Conozco dónde está el museo.", "Sé dónde está el museo.", "Dónde introduces information, so the verb is saber: sé dónde.", ["Yo sé dónde está el museo."], "Correct the sentence."),
      toEs("Sé a tu hermana.", "Conozco a tu hermana.", "A person you're acquainted with takes conocer (with a). Saber is for facts and skills.", ["Yo conozco a tu hermana."], "Correct the sentence."),
      toEs("¿Conoces nadar?", "¿Sabes nadar?", "A skill before an infinitive is saber. Conocer never takes an infinitive.", ["¿Tú sabes nadar?"], "Correct the sentence."),
      toEs("I know how to cook, but I don't know this dish.", "Sé cocinar, pero no conozco este plato.", "A skill + infinitive → sé; familiarity with a dish → conozco."),
      { type: "speak", prompt: "Say it in Spanish: I know Marta, and I know that she lives in Lima.", text: "Conozco a Marta, y sé que vive en Lima.", explanation: "The person → conozco a Marta; the fact introduced by que → sé que." },
    ]
  ),
  L(
    "saber-vs-conocer-mastery-check",
    "Mastery Check: Saber vs. Conocer",
    "No new rules: choose the right \"to know\" in real sentences, and say them in Spanish.",
    "8 min",
    [
      sec(
        "The quick test",
        [
          "Remember the rule: saber is information and skills; conocer is acquaintance with people, places and things you've experienced.",
          "Ask: is it a fact, an answer or a skill? → saber. Is it a person, a place or something I've experienced? → conocer. If a question word, si or que follows, it's always saber, because those words introduce information. If an infinitive follows, it's saber too.",
        ],
        [
          ["¿Sabes qué hora es?", "Do you know what time it is? (qué → saber)"],
          ["¿Conoces un buen médico?", "Do you know a good doctor? (a person you're acquainted with → conocer)"],
        ],
        [
          ms(
            "Which sentences are correct?",
            ["Sé a María.", "Conozco a María.", "Sé que María es médica.", "Conozco que María es médica."],
            [1, 2],
            "Conocer a for the person, saber que for the fact. \"Sé a María\" and \"Conozco que…\" mix them up."
          ),
          mc(
            "\"Do you know how much the ticket costs?\"",
            ["¿Sabes cuánto cuesta el billete?", "¿Conoces cuánto cuesta el billete?", "¿Sabes a cuánto cuesta el billete?", "¿Conoces el billete cuesta?"],
            0,
            "Cuánto introduces information, so saber: ¿Sabes cuánto cuesta…? Conocer never comes before a question word, and saber doesn't take a."
          ),
        ]
      ),
    ],
    [
      fe("¿___ por qué está cerrado el banco?", "Sabes", "[Do you know] why the bank is closed?", "Por qué + a fact → saber.", ["Sabe", "Saben", "Sabéis"]),
      fe("Mis padres ___ a mi jefe.", "conocen", "My parents [know] my boss.", "A person → conocer + a."),
      fe("Yo no ___ nadar muy bien.", "sé", "I don't [know how to] swim very well.", "A skill → saber + infinitive."),
      fe("Nosotros no ___ este restaurante.", "conocemos", "We aren't [familiar with] this restaurant.", "A place you know from experience → conocer."),
      fe("¿Usted ___ si hay una farmacia cerca?", "sabe", "[Do you know] if there's a pharmacy nearby?", "Si + a fact → saber."),
      toEs("I know where you live.", "Sé dónde vives.", "Dónde + information → saber.", ["Yo sé dónde vives.", "Sé dónde vive usted.", "Sé dónde vive."]),
      toEs("Do you know Mexico City?", "¿Conoces la Ciudad de México?", "A place → conocer, no a.", ["¿Conoces Ciudad de México?", "¿Conoce la Ciudad de México?", "¿Conoces México?", "¿Conoces la ciudad de México?"]),
      toEs("I want to meet your sister.", "Quiero conocer a tu hermana.", "Conocer a = meet someone for the first time.", ["Yo quiero conocer a tu hermana.", "Quiero conocer a su hermana."]),
      toEn("No sé su nombre, pero conozco a su hermano.", "I don't know her name, but I know her brother.", "Saber for the name, conocer for the person.", ["I don't know his name, but I know his brother.", "I don't know their name, but I know their brother."]),
      mc(
        "\"She can play the guitar.\" (She knows how.)",
        ["Sabe tocar la guitarra.", "Conoce tocar la guitarra.", "Sabe a tocar la guitarra.", "Conoce la guitarra tocar."],
        0,
        "A skill → saber + infinitive, with nothing in between. Conocer never takes an infinitive."
      ),
      fe("Nosotros ___ hablar inglés.", "sabemos", "We [know how to] speak English.", "Skill + infinitive → saber."),
      fe("Ella ___ a mi novio.", "conoce", "She [knows] my boyfriend.", "A person → conocer."),
      fe("¿Tú ___ cuándo empieza la clase?", "sabes", "Do you [know] when the class starts?", "Cuándo follows → saber."),
      fe("Yo no ___ Argentina.", "conozco", "I don't [know] Argentina (I've never been).", "A place → conocer."),
      mc("'I know that Luis is a doctor.'", ["Conozco que Luis es médico.", "Sé que Luis es médico.", "Sé a Luis es médico.", "Conozco a Luis es médico."], 1, "Que follows → saber. Conocer never takes que, and the a is only for a person you're acquainted with."),
      mc("'Do you know this neighborhood?'", ["¿Conoces este barrio?", "¿Sabes este barrio?"], 0, "Familiarity with a place → conocer. Saber needs a fact or a skill."),
      toEs("Do you (informal) know a good hotel in Lima?", "¿Conoces un buen hotel en Lima?", "A place you're familiar with → conocer.", ["¿Conoces algún buen hotel en Lima?"]),
      toEs("Sé su dirección.", "Saben su dirección.", "An address is information, so it stays saber; ellos is regular: saben.", ["Ellos saben su dirección.", "Ellas saben su dirección."], "Change to ellos."),
      toEs("Conocemos a tu primo.", "Conozco a tu primo.", "Still a person, so still conocer a; yo is the -zco form: conozco.", ["Yo conozco a tu primo."], "Change to yo."),
      toEs("Do you (formal) know how to swim?", "¿Sabe usted nadar?", "A skill → saber + infinitive.", ["¿Usted sabe nadar?", "¿Sabe nadar?"]),
      toEs("Conozco qué hora es.", "Sé qué hora es.", "Qué introduces information, so the verb must be saber.", ["Yo sé qué hora es."], "Correct the sentence."),
      toEs("¿Sabes a mi profesor de inglés?", "¿Conoces a mi profesor de inglés?", "Being acquainted with a person is conocer (with a). Saber is for facts and skills.", [], "Correct the sentence."),
      toEs("Conozco cocinar paella.", "Sé cocinar paella.", "A skill before an infinitive is saber: sé cocinar.", ["Yo sé cocinar paella."], "Correct the sentence."),
      toEs("I know Marta, but I don't know her last name.", "Conozco a Marta, pero no sé su apellido.", "Person → conozco a; a name (fact) → sé."),
      toEs("Do you (informal) know if Pedro knows Lima?", "¿Sabes si Pedro conoce Lima?", "Si follows → sabes; a place → conoce."),
      { type: "speak", prompt: "Answer aloud in Spanish: ¿Conoces Madrid? (Say no, but that you know it's very big.)", text: "No, pero sé que es muy grande.", explanation: "No conocer: you haven't been. The fact comes with que, so saber: sé que es muy grande." },
    ]
  ),
  L(
    "a1-modal-verbs-infinitive",
    "Can, Want, Need, Have To: Verb + Infinitive",
    "Poder, querer, necesitar, tener que, deber and saber: conjugate the first verb and leave the second as it is.",
    "9 min",
    [
      sec(
        "One conjugated verb, one infinitive",
        [
          "When two verbs go together, only the first one shows who is acting, so only the first one is conjugated. The second stays in the infinitive (the -ar, -er, -ir form), just as English says \"she can swim\", not \"she can swims\". That's how Spanish says can, want to, need to, have to or should.",
          "Nothing goes between the two verbs except a linking word in a few fixed verbs: que in tener que, de in acabar de / dejar de. Poder (o → ue) and querer (e → ie) are stem-changers; necesitar and deber are regular.",
        ],
        [
          ["Puedo ayudar.", "I can help."],
          ["Quiero aprender.", "I want to learn."],
          ["Necesito descansar.", "I need to rest."],
          ["Tengo que trabajar.", "I have to work. (tener que: que is fixed)"],
          ["Debes llamar a tu madre.", "You should call your mother."],
        ],
        [
          fe("Mis hijos ___ estudiar esta noche.", "tienen que", "My kids [have to] study tonight.", "Only tener changes for the person: tienen (ellos, e → ie). Que stays, and estudiar stays in the infinitive.", ["Tienen que"]),
        ]
      ),
      sec(
        "Asking and offering",
        "¿Puedes…? and ¿Puede…? are the everyday way to ask for something. ¿Quieres…? is how you invite or offer.",
        [
          ["¿Puedes abrir la ventana, por favor?", "Can you open the window, please?"],
          ["¿Puede repetir, por favor?", "Could you repeat that, please?"],
          ["¿Quieres tomar algo?", "Do you want something to drink?"],
          ["No puedo ir hoy, pero puedo ir mañana.", "I can't go today, but I can go tomorrow."],
        ],
        [
          mc(
            "\"We need to talk.\"",
            ["Necesitamos hablar.", "Necesitamos hablamos.", "Necesitamos a hablar.", "Necesitar hablamos."],
            0,
            "Conjugate necesitar (necesitamos) and leave hablar as an infinitive, with nothing in between. Conjugating both, adding a, or conjugating the wrong one all break the rule."
          ),
        ]
      ),
      sec(
        "Small verbs that work the same way",
        "A few more everyday verbs take an infinitive: intentar (to try), esperar (to hope), pensar (to plan, to intend), preferir (to prefer). Acabar de + infinitive means to have just done something, and dejar de means to stop doing it.",
        [
          ["Intento hablar solo en español.", "I try to speak only in Spanish."],
          ["Espero llegar a tiempo.", "I hope to arrive on time."],
          ["Acabo de llegar.", "I've just arrived."],
          ["Quiero dejar de fumar.", "I want to stop smoking."],
        ],
        [
          mc(
            "\"We've just eaten.\"",
            ["Acabamos de comer.", "Acabamos comer.", "Acabamos de comemos.", "Acabar de comemos."],
            0,
            "Acabar is conjugated for nosotros (acabamos), de is fixed, and comer stays in the infinitive. Dropping de or conjugating comer breaks the pattern."
          ),
        ]
      ),
    ],
    [
      fe("Mañana ___ trabajar temprano.", "tengo que", "Tomorrow I [have to] work early.", "tener que + infinitive = have to.", ["Tengo que"]),
      fe("___ de comer, gracias.", "Acabo", "[I've just] eaten, thanks.", "acabar de + infinitive = to have just done something."),
      fe("¿___ cerrar la puerta, por favor?", "Puedes", "[Can you] close the door, please?", "poder → puedes (o → ue) + infinitive.", ["Puede", "Pueden", "Podéis"]),
      fe("Mis hijos ___ ir a la playa.", "quieren", "My kids [want to] go to the beach.", "querer → quieren (e → ie) + infinitive."),
      fe("Usted ___ descansar más.", "debe", "You [should] rest more.", "deber + infinitive = should."),
      fe("Mi hermano ___ de trabajar a las tres.", "deja", "My brother [stops] working at three.", "dejar de + infinitive = to stop doing."),
      toEs("I can't come today.", "No puedo venir hoy.", "poder → puedo + venir (infinitive). No goes before the conjugated verb.", ["Hoy no puedo venir.", "Yo no puedo venir hoy."]),
      toEs("We have to pay now.", "Tenemos que pagar ahora.", "tener que + infinitive.", ["Nosotros tenemos que pagar ahora.", "Ahora tenemos que pagar."]),
      toEs("Do you want to come with me?", "¿Quieres venir conmigo?", "querer + infinitive; conmigo = with me.", ["¿Tú quieres venir conmigo?", "¿Quiere venir conmigo?", "¿Quiere usted venir conmigo?"]),
      toEs("I need to change my password.", "Necesito cambiar mi contraseña.", "necesitar + infinitive.", ["Yo necesito cambiar mi contraseña.", "Necesito cambiar la contraseña."]),
      toEn("Intento recordar su nombre.", "I'm trying to remember his name.", "intentar + infinitive = to try to.", ["I try to remember his name.", "I'm trying to remember her name.", "I try to remember her name.", "I'm trying to remember their name."]),
      wo("No puedo encontrar mis llaves.", "Poder conjugated, encontrar in the infinitive.", "I can't find my keys."),
      fe("Nosotros ___ estudiar más.", "debemos", "We [should] study more.", "Deber + infinitive; deber is regular: debemos."),
      fe("Yo ___ dormir.", "necesito", "I [need to] sleep.", "Necesitar + infinitive, no 'a' or 'de' between."),
      toEs("Can you (formal) open the door, please?", "¿Puede abrir la puerta, por favor?", "Poder → puede for usted, then the infinitive.", ["¿Puede usted abrir la puerta, por favor?"]),
      toEs("Tengo que trabajar los sábados.", "Tienen que trabajar los sábados.", "Only the first verb changes: tengo → tienen (ellos). Que and the infinitive stay.", ["Ellos tienen que trabajar los sábados.", "Ellas tienen que trabajar los sábados."], "Change to ellos."),
      toEs("She has just arrived home.", "Acaba de llegar a casa.", "Acabar de + infinitive = to have just done; ella → acaba.", ["Ella acaba de llegar a casa."]),
      toEs("Debes beber café por la noche.", "No debes beber café por la noche.", "No goes before the conjugated verb (debes), never before the infinitive.", ["Tú no debes beber café por la noche."], "Make it negative."),
      toEs("Do you (informal) want to eat something?", "¿Quieres comer algo?", "Querer → quieres + infinitive.", ["¿Tú quieres comer algo?"]),
      toEs("Necesito a descansar.", "Necesito descansar.", "Necesitar is followed directly by the infinitive: nothing goes in between.", ["Yo necesito descansar."], "Correct the sentence."),
      toEs("Puedo hablo español.", "Puedo hablar español.", "Only the first verb is conjugated (puedo); the second stays in the infinitive: hablar.", ["Yo puedo hablar español."], "Correct the sentence."),
      toEs("Tengo estudiar esta noche.", "Tengo que estudiar esta noche.", "\"Have to\" is tener que: que is part of the expression and can't be left out.", ["Esta noche tengo que estudiar."], "Correct the sentence."),
      wo("Mi padre quiere dejar de trabajar", "Quiere is conjugated; dejar de + infinitive = stop doing.", "My father wants to stop working"),
      { type: "speak", prompt: "Say it in Spanish: I want to go out tonight, but I have to study and I need to sleep.", text: "Quiero salir esta noche, pero tengo que estudiar y necesito dormir.", explanation: "Each time only the first verb is conjugated (quiero, tengo que, necesito); salir, estudiar and dormir stay in the infinitive." },
    ]
  ),
  L(
    "a1-irregulars-mission-first-day",
    "Real-World Mission: First Day at a New Job",
    "A new job, a new city: every irregular verb from this unit in one ordinary day.",
    "9 min",
    [
      sec(
        "Morning",
        [
          "Remember the rule: these verbs are irregular mostly in yo (salgo, traigo, pongo, conozco, sé, doy), and tener, venir and decir also change their vowel in the boot (tiene, viene, dice). Conocer is for people and places, saber for facts and skills.",
          "Read Sofía's first morning, then help her get through the day.",
        ],
        [
          ["Hoy es mi primer día en una empresa nueva.", "Today is my first day at a new company."],
          ["Salgo de casa a las ocho y traigo un café para el camino.", "I leave home at eight and bring a coffee for the way."],
          ["No conozco a nadie y no sé dónde está mi mesa.", "I don't know anyone and I don't know where my desk is."],
          ["Un hombre muy amable me dice: \"Hola, soy Andrés. Te enseño la oficina.\"", "A very kind man tells me: \"Hi, I'm Andrés. I'll show you the office.\""],
        ],
        [
          mc(
            "Why does Sofía say \"no conozco a nadie\" but \"no sé dónde está mi mesa\"?",
            [
              "People → conocer; where something is (a fact) → saber.",
              "Conocer is for mornings and saber for afternoons.",
              "Nadie is feminine.",
              "Both verbs mean the same thing here.",
            ],
            0,
            "Conocer for people (a nadie), saber for information (dónde está). Time of day and gender have nothing to do with it."
          ),
          mc(
            "Andrés asks: \"¿Conoces a alguien en la empresa?\" What does Sofía answer?",
            ["No, no conozco a nadie.", "No, no sé a nadie.", "No, no conoce a nadie.", "No, no conozco nadie."],
            0,
            "People take conocer, yo is conozco, and a person (even nadie) needs a. \"Sé\" is for facts, \"conoce\" is he/she, and the last option drops the a."
          ),
        ]
      ),
      sec(
        "Afternoon",
        "The afternoon brings meetings, a problem and a plan. Look for pongo, oigo, digo, doy and puedo.",
        [
          ["A las dos tenemos una reunión con todo el equipo.", "At two we have a meeting with the whole team."],
          ["Pongo el teléfono en silencio, pero no oigo bien: hay mucho ruido.", "I put my phone on silent, but I can't hear well: there's a lot of noise."],
          ["Mi jefa dice que el ordenador nuevo no funciona.", "My boss says that the new computer doesn't work."],
          ["\"No pasa nada\", le digo. \"Puedo usar el mío.\"", "\"No problem,\" I tell her. \"I can use mine.\""],
          ["Al final del día, doy las gracias a todos y salgo contenta.", "At the end of the day, I thank everyone and leave happy."],
        ],
        [
          mc(
            "In the noisy meeting, the boss asks Sofía: \"¿Me oyes?\" Sofía can't hear well. Which reply fits?",
            ["No, no te oigo bien.", "No, no te oyes bien.", "No, no te oyo bien.", "No, no te oímos bien."],
            0,
            "Sofía answers about herself, so yo: oigo (the yo-go form). Oyes is tú, \"oyo\" is the regular form that doesn't exist, and oímos would mean the whole group."
          ),
        ]
      ),
    ],
    [
      fe("___ de casa a las ocho.", "Salgo", "[I leave] home at eight.", "salir → salgo."),
      fe("No ___ a nadie en la oficina.", "conozco", "I don't [know] anyone in the office.", "conocer → conozco, + a before people."),
      fe("Andrés me ___ la oficina.", "enseña", "Andrés [shows] me the office.", "enseñar = to show, to teach.", ["muestra"]),
      fe("El ordenador nuevo no ___.", "funciona", "The new computer doesn't [work].", "funcionar = to work (machines)."),
      toEs("I bring coffee for the whole team.", "Traigo café para todo el equipo.", "traer → traigo.", ["Yo traigo café para todo el equipo.", "Traigo un café para todo el equipo."]),
      toEs("I don't hear anything, there's a lot of noise.", "No oigo nada, hay mucho ruido.", "oír → oigo; no… nada = nothing.", ["Yo no oigo nada, hay mucho ruido."]),
      toEs("I have to use your computer.", "Tengo que usar tu ordenador.", "tener que + infinitive. Computadora is the word in most of Latin America.", ["Tengo que usar tu computadora.", "Tengo que usar su ordenador.", "Tengo que usar su computadora."]),
      toEn("Doy las gracias a todos y salgo de la oficina.", "I thank everyone and leave the office.", "Dar las gracias = to thank; salgo = I leave.", ["I say thank you to everyone and leave the office.", "I thank everybody and leave the office."]),
      ms(
        "Which sentences are correct?",
        ["Pongo el móvil en la mesa.", "Sé a Andrés.", "Vengo a las nueve.", "Conozco que el jefe es simpático."],
        [0, 2],
        "Pongo and vengo are right. You conocer a person (conozco a Andrés) and saber a fact (sé que el jefe es simpático)."
      ),
      wo("Mañana vengo temprano y traigo el desayuno.", "Vengo and traigo: two -go verbs.", "Tomorrow I'm coming early and bringing breakfast."),
      fe("Yo ___ a la oficina a las nueve.", "vengo", "I [come] to the office at nine.", "Venir: yo → vengo."),
      fe("No ___ dónde está la reunión.", "sé", "I don't [know] where the meeting is.", "A fact with dónde → saber: sé."),
      fe("Te ___ un café.", "traigo", "I'll [bring] you a coffee.", "Traer: yo → traigo."),
      toEs("I leave the meeting at four.", "Salgo de la reunión a las cuatro.", "Salir de + place or event; yo → salgo.", ["Yo salgo de la reunión a las cuatro."]),
      toEs("Sé a Andrés, pero no conozco al jefe.", "Conozco a Andrés, pero no conozco al jefe.", "Andrés is a person, so Sofía needs conocer (with a), not saber.", [], "Correct the sentence."),
      toEs("I can't hear the boss (f.).", "No oigo a la jefa.", "Oír: yo → oigo; a before a person. Spanish often uses plain no oigo for 'I can't hear'.", ["No puedo oír a la jefa."]),
      toEs("I have to do a lot today.", "Tengo que hacer mucho hoy.", "Tener que + infinitive: tengo que hacer.", ["Hoy tengo que hacer mucho.", "Tengo mucho que hacer hoy.", "Hoy tengo mucho que hacer."]),
      toEs("I tell Andrés that I'm from Chile.", "Le digo a Andrés que soy de Chile.", "Decir: yo → digo. Spanish usually adds le with a + person.", ["Digo a Andrés que soy de Chile."]),
      wo("Pongo mi café en la mesa y salgo", "Pongo and salgo: two yo-go forms.", "I put my coffee on the desk and leave"),
      toEs("Mañana salo temprano de la oficina.", "Mañana salgo temprano de la oficina.", "Fix Sofía's message: salir is a yo-go verb, so yo is salgo.", ["Mañana salgo de la oficina temprano."], "Correct the sentence."),
      toEs("Mi compañero dece que la reunión es a las tres.", "Mi compañero dice que la reunión es a las tres.", "Decir changes e → i in the boot: él dice.", [], "Correct the sentence."),
      toEs("Andrés trae el desayuno.", "Traigo el desayuno.", "Sofía offers to do it herself: yo is the -go form, traigo.", ["Yo traigo el desayuno."], "Change to yo."),
      toEs("Mañana vengo a las nueve.", "Mañana venimos a las nueve.", "Sofía and Andrés both come: nosotros is regular, venimos.", ["Mañana nosotros venimos a las nueve.", "Venimos mañana a las nueve."], "Change to nosotros."),
      mc(
        "The boss asks: \"¿Sabe usted usar este programa?\" Sofía knows how. Which answer fits?",
        ["Sí, sé usar este programa.", "Sí, conozco usar este programa.", "Sí, sabe usar este programa.", "Sí, sé a usar este programa."],
        0,
        "A skill + infinitive is saber, and Sofía answers about herself: sé usar. Conocer never takes an infinitive, sabe is the usted form, and nothing goes between sé and usar."
      ),
      { type: "speak", prompt: "A colleague asks you: ¿A qué hora vienes mañana? Answer aloud in Spanish: I come at nine and I'll bring the coffee.", text: "Vengo a las nueve y traigo el café.", explanation: "A tú question gets a yo answer: vengo, traigo, both yo-go forms." },
    ]
  ),
];
