// Synced from cheneygross-afk/lengo:src/lib/lessons/a1-additions.ts by scripts/sync-content.mjs -- edit it there, not here.
import { anchored, authoring } from "./authoring";
import type { AnchoredLesson } from "./weave";

// Core A1 lessons added after the curriculum review: grammar the rest of
// the course already leans on but that no lesson taught. Stem-changing
// verbs show up in A1 exercises (juego, pido) and A2 explains reflexives
// as "conjugates like a stem-changing e→ie verb"; estar + gerund is
// "reminded" in the A1 drills; days, months and dates had no lesson at
// all. Woven in like the reinforcement lessons (see weave.ts), anchored
// after the lesson each one builds on.
const { mc, ms, fb, toEs, toEn, wo, mt, sec } = authoring("en");
const L = (
  after: string,
  slug: string,
  title: string,
  summary: string,
  duration: string,
  sections: Parameters<typeof anchored>[6],
  exercises: Parameters<typeof anchored>[7]
) => anchored("A1", after, slug, title, summary, duration, sections, exercises);

export const A1_ADDITIONS: AnchoredLesson[] = [
  L(
    "present-tense-er-ir-verbs-2",
    "stem-changing-verbs-e-ie",
    "Stem-Changing Verbs: E → IE",
    "Querer, pensar, preferir and friends: the vowel in the stem changes, the endings don't.",
    "9 min",
    [
      sec(
        "The boot pattern",
        [
          "Some very common verbs change the last vowel of their stem when it's stressed. In querer (to want), the e becomes ie: quiero, quieres, quiere, quieren.",
          "Why only some forms? Say them aloud: QUIE-ro, QUIE-res, QUIE-ren put the stress on the stem, so the stem vowel stretches to ie. In que-RE-mos and que-RÉIS the stress moves onto the ending, so the stem keeps its plain e. If you draw the six forms in a grid, the changed forms make the shape of a boot.",
          "The endings are the regular ones you already know. Only the stem vowel changes, and only inside the boot.",
        ],
        [
          ["yo quiero", "I want (stress on the stem: ie)"],
          ["tú quieres", "you want"],
          ["él / ella / usted quiere", "he / she wants, you (formal) want"],
          ["nosotros queremos", "we want (stress on the ending: plain e)"],
          ["vosotros queréis", "you all want (Spain)"],
          ["ellos / ellas / ustedes quieren", "they / you all want"],
        ],
        [
          ms(
            "Apply the boot to perder (to lose), another e → ie verb. Which forms are correct?",
            ["yo pierdo", "nosotros perdemos", "ellos pierden", "nosotros pierdemos"],
            [0, 1, 2],
            "Yo and ellos are inside the boot, so the stressed e becomes ie: pierdo, pierden. Nosotros is outside the boot (the stress is on -emos), so the e stays: perdemos, never \"pierdemos\"."
          ),
        ]
      ),
      sec(
        "Common e → ie verbs",
        "These all follow the same boot pattern. Learn them as a set: once you know the yo form has ie, you know tú, él and ellos have it too, and nosotros doesn't.",
        [
          ["pensar → pienso", "to think → I think"],
          ["preferir → prefiero", "to prefer → I prefer"],
          ["empezar → empiezo", "to begin → I begin"],
          ["entender → entiendo", "to understand → I understand"],
          ["cerrar → cierro", "to close → I close"],
          ["Pensamos que es fácil.", "We think it's easy. (nosotros: no change)"],
        ],
        [
          fb("Complete with pensar.", "Ella ___ que la clase es interesante.", "piensa", "Ella is inside the boot: pensar → piensa.", "pensar, ella"),
          fb("Complete with empezar.", "Nosotros ___ a las nueve.", "empezamos", "Nosotros is outside the boot, so the e stays: empezamos.", "empezar, nosotros"),
        ]
      ),
      sec(
        "Querer and preferir + infinitive",
        "Querer and preferir are often followed by a second verb in the infinitive, just like \"want to\" and \"prefer to\" in English. Only the first verb is conjugated, so only the first verb can have the stem change.",
        [
          ["Quiero comer.", "I want to eat."],
          ["¿Quieres ir al cine?", "Do you want to go to the movies?"],
          ["Prefieren estudiar en casa.", "They prefer to study at home."],
        ],
        [
          wo("¿Quieres tomar un café?", "Conjugate querer (quieres) and leave the second verb as an infinitive (tomar).", "Do you want to have a coffee?"),
        ]
      ),
    ],
    [
      fb("Complete with querer.", "Yo ___ un té, por favor.", "quiero", "Yo is inside the boot: querer → quiero.", "querer, yo"),
      fb("Complete with preferir.", "¿Tú ___ el café o el té?", "prefieres", "Tú is inside the boot: preferir → prefieres.", "preferir, tú"),
      fb("Complete with entender.", "Nosotros no ___ la pregunta.", "entendemos", "Nosotros keeps the e: entendemos.", "entender, nosotros"),
      fb("Complete with cerrar.", "La tienda ___ a las ocho.", "cierra", "La tienda = ella, inside the boot: cerrar → cierra.", "cerrar, ella"),
      mc(
        "Which sentence is correct?",
        ["Nosotros queremos pizza.", "Nosotros quieremos pizza.", "Nosotros quiermos pizza.", "Nosotros querimos pizza."],
        0,
        "Nosotros is outside the boot, so the stem stays queremos. \"Quieremos\" changes a stem that shouldn't change, \"quiermos\" drops the -e- of the ending, and \"querimos\" uses the -ir ending on an -er verb."
      ),
      mc(
        "\"They begin at ten.\"",
        ["Empiezan a las diez.", "Empezan a las diez.", "Empiezamos a las diez.", "Empieza a las diez."],
        0,
        "Ellos is inside the boot, so e → ie, plus the -an ending: empiezan. \"Empezan\" is missing the stem change, \"Empiezamos\" mixes a boot stem with the nosotros ending, and \"Empieza\" is the singular él/ella form."
      ),
      toEs("I want to learn Spanish.", "Quiero aprender español.", "Querer → quiero, then the infinitive aprender.", ["Yo quiero aprender español."]),
      toEs("We prefer to eat at home.", "Preferimos comer en casa.", "Nosotros keeps the e: preferimos. Comer stays in the infinitive.", ["Nosotros preferimos comer en casa.", "Nosotras preferimos comer en casa."]),
      toEn("¿Entiendes la lección?", "Do you understand the lesson?", "Entender → entiendes (tú, inside the boot).", ["Do you understand the class?"]),
      mt(
        "Match each infinitive to its yo form.",
        [
          ["pensar", "pienso"],
          ["cerrar", "cierro"],
          ["entender", "entiendo"],
          ["preferir", "prefiero"],
        ],
        "In every one, the stressed e in the stem becomes ie in the yo form."
      ),
      fb("Complete with pensar.", "Yo ___ que es fácil.", "pienso", "Pensar: the stressed e becomes ie in yo: pienso."),
      fb("Complete with cerrar.", "Tú ___ la ventana.", "cierras", "Cerrar: tú is inside the boot, so cierras (e → ie)."),
      fb("Complete with preferir.", "Nosotros ___ el té.", "preferimos", "Nosotros is outside the boot: no change, preferimos."),
      toEs("The movie begins at seven.", "La película empieza a las siete.", "Empezar: e → ie for ella (la película): empieza.", ["La película comienza a las siete."]),
      toEs("Do you (informal) understand Spanish?", "¿Entiendes español?", "Entender: tú is inside the boot, so entiendes (e → ie).", ["¿Comprendes español?", "¿Tú entiendes español?"]),
      toEs("Cierro la ventana.", "Cerramos la ventana.", "Nosotros is outside the boot (the stress moves to -amos), so the plain e comes back: cerramos, not cierramos.", ["Nosotros cerramos la ventana.", "Nosotras cerramos la ventana."], "Change to nosotros."),
      toEs("Entiendo el problema.", "Entiende el problema.", "Ella is inside the boot like yo, so the ie stays; only the ending changes: entiende.", ["Ella entiende el problema."], "Change to ella."),
      toEs("Queremos bailar.", "Quieren bailar.", "Ellos is inside the boot, so querer changes: quieren. Bailar stays in the infinitive.", ["Ellos quieren bailar.", "Ellas quieren bailar."], "Change to ellos."),
      toEs("Nosotros empiezamos a las ocho.", "Nosotros empezamos a las ocho.", "Nosotros is outside the boot, so the e of empezar doesn't change: empezamos.", ["Empezamos a las ocho.", "Nosotras empezamos a las ocho."], "Correct the sentence."),
      toEs("Mi hermano prefere el té.", "Mi hermano prefiere el té.", "Él is inside the boot, so the stressed e becomes ie: prefiere.", [], "Correct the sentence."),
      toEs("Tú no entendes el mapa.", "Tú no entiendes el mapa.", "Tú is inside the boot: entender → entiendes.", ["No entiendes el mapa."], "Correct the sentence."),
      mc(
        "A new e → ie verb: mentir (to lie, to tell a lie). How do you say \"he lies\"?",
        ["miente", "mente", "mientimos", "mentimos"],
        0,
        "Él is inside the boot, so the stressed e becomes ie: miente. \"Mente\" is missing the change, and the two nosotros forms don't fit \"he\" (the correct one would be mentimos, with no change)."
      ),
      wo("Mi hermana prefiere estudiar por la noche", "Preferir → prefiere (e → ie, ella is in the boot) + infinitive.", "My sister prefers to study at night"),
      { type: "speak", prompt: "Say it in Spanish: I want to go to the beach, but my friends prefer to be at home.", text: "Quiero ir a la playa, pero mis amigos prefieren estar en casa.", explanation: "Quiero (yo) and prefieren (ellos) are both inside the boot, so both have ie. The second verbs stay in the infinitive." },
    ]
  ),
  L(
    "present-tense-er-ir-verbs-2",
    "stem-changing-verbs-o-ue-e-i",
    "Stem-Changing Verbs: O → UE and E → I",
    "Poder, dormir, volver, jugar and pedir: two more vowel changes with the same boot shape.",
    "9 min",
    [
      sec(
        "O → UE: poder, dormir, volver",
        [
          "A second group changes a stressed o into ue. The reason is the same as for e → ie: when the stress lands on the stem (PUE-do), the vowel changes; when it lands on the ending (po-DE-mos), it doesn't.",
          "So the boot is the same one you learned for e → ie: every form changes except nosotros and vosotros. You can't see from the infinitive which o-verbs change, so learn them as a set.",
        ],
        [
          ["puedo, puedes, puede, pueden", "I can, you can, he/she can, they can"],
          ["podemos, podéis", "we can, you all can (Spain): no change"],
          ["dormir → duermo", "to sleep → I sleep"],
          ["volver → vuelvo", "to return → I come back"],
          ["costar → cuesta", "to cost → it costs"],
          ["encontrar → encuentro", "to find → I find"],
        ],
        [
          fb("A new o → ue verb: almorzar (to have lunch). Complete for tú.", "¿A qué hora ___?", "almuerzas", "Tú is inside the boot, so the stressed o becomes ue: almuerzas. The ending is the regular -as.", "almorzar, tú"),
          mc("Another new one: recordar (to remember). \"I don't remember.\"", ["No recuerdo.", "No recordo.", "No recuerdamos.", "No recorda."], 0, "Yo is inside the boot, so o → ue: recuerdo. \"Recordo\" is missing the change, \"recuerdamos\" puts the change in nosotros, and \"recorda\" has the wrong ending for yo."),
        ]
      ),
      sec(
        "Jugar: the only U → UE verb",
        "Jugar (to play a sport or game) is the one common verb whose u becomes ue. It follows the same boot, and it usually takes a before the game: jugar al fútbol (in much of Latin America also jugar fútbol).",
        [
          ["Juego al fútbol los sábados.", "I play soccer on Saturdays."],
          ["¿Juegas al tenis?", "Do you play tennis?"],
          ["Jugamos a las cartas.", "We play cards. (nosotros: no change)"],
        ],
        [
          fb("Complete with jugar.", "Mis hermanos ___ al baloncesto.", "juegan", "Ellos is inside the boot: jugar → juegan.", "jugar, ellos"),
        ]
      ),
      sec(
        "E → I: pedir, servir, repetir",
        "A third group, all -ir verbs, changes e into a plain i. Same boot again: i in yo, tú, él and ellos; the original e in nosotros and vosotros.",
        [
          ["pedir → pido", "to ask for, to order → I order"],
          ["servir → sirve", "to serve → he/she serves"],
          ["repetir → repites", "to repeat → you repeat"],
          ["Pedimos la cuenta.", "We ask for the bill. (nosotros: no change)"],
        ],
        [
          fb("Complete with servir for yo.", "En casa, yo ___ el café.", "sirvo", "Yo is inside the boot: servir → sirvo (e → i).", "servir, yo"),
        ]
      ),
    ],
    [
      fb("Complete with dormir.", "Los niños ___ ocho horas.", "duermen", "Ellos is inside the boot: dormir → duermen.", "dormir, ellos"),
      fb("Complete with volver.", "Nosotros ___ a casa a las seis.", "volvemos", "Nosotros keeps the o: volvemos.", "volver, nosotros"),
      fb("Complete with poder.", "Yo no ___ ir hoy.", "puedo", "Yo is inside the boot: poder → puedo.", "poder, yo"),
      fb("Complete with servir.", "El restaurante ___ comida mexicana.", "sirve", "El restaurante = él, inside the boot: servir → sirve.", "servir, él"),
      fb("Complete with repetir.", "¿Puede usted ___ la pregunta?", "repetir", "After puede, the second verb stays in the infinitive: repetir. The infinitive never changes its vowel."),
      mc(
        "Which verb has the WRONG form?",
        ["nosotros podemos", "ellos pueden", "yo jugo", "tú pides"],
        2,
        "Jugar is the only u → ue verb, so yo is juego, not \"jugo\". The others are right: \"podemos\" keeps its o outside the boot, \"pueden\" has o → ue inside it, and \"pides\" has e → i."
      ),
      ms(
        "Which of these forms have a stem change?",
        ["encuentro", "dormimos", "sirven", "pedimos"],
        [0, 2],
        "Encuentro (yo) and sirven (ellos) are inside the boot. Dormimos and pedimos are nosotros forms, so they keep the original vowel."
      ),
      toEs("Can you help me?", "¿Puedes ayudarme?", "Poder → puedes, followed by the infinitive ayudar with me attached.", ["¿Me puedes ayudar?", "¿Puede ayudarme?", "¿Me puede ayudar?"]),
      toEs("I sleep a lot on weekends.", "Duermo mucho los fines de semana.", "Dormir → duermo in the yo form.", ["Yo duermo mucho los fines de semana."]),
      toEn("¿Cuánto cuestan los zapatos?", "How much do the shoes cost?", "Costar → cuestan, plural because los zapatos is plural.", ["How much are the shoes?"]),
      mt(
        "Match each infinitive to its él/ella form.",
        [
          ["poder", "puede"],
          ["jugar", "juega"],
          ["pedir", "pide"],
          ["volver", "vuelve"],
        ],
        "O → ue (puede, vuelve), u → ue (juega), e → i (pide)."
      ),
      mc("How much does it cost?", ["¿Cuánto cuesta?", "¿Cuánto costa?", "¿Cuánto custa?", "¿Cuánto cuestan?"], 0, "Costar changes o → ue inside the boot: cuesta. \"Costa\" and \"custa\" are missing the ue change, and \"cuestan\" is plural, for when several things cost something."),
      fb("Complete with pedir.", "Yo siempre ___ agua con la comida.", "pido", "Yo is inside the boot: pedir → pido."),
      fb("Complete with dormir.", "Yo ___ en el sofá.", "duermo", "Dormir: o → ue in yo: duermo."),
      fb("Complete with jugar.", "Mi hijo ___ al fútbol.", "juega", "Jugar is the one u → ue verb: juega."),
      toEs("How much does the book cost?", "¿Cuánto cuesta el libro?", "Costar: o → ue: cuesta (one book, singular)."),
      toEs("Pido agua.", "Piden agua.", "Ellos is inside the boot like yo, so the i stays: piden. Only the ending changes.", ["Ellos piden agua.", "Ellas piden agua."], "Change to ellos."),
      toEs("We can't sleep.", "No podemos dormir.", "Nosotros stays outside the boot: podemos, not puedemos. Dormir stays in the infinitive.", ["Nosotros no podemos dormir.", "Nosotras no podemos dormir."]),
      toEs("Encontramos el libro.", "Encuentro el libro.", "Yo is inside the boot, so the stressed o becomes ue: encuentro. Nosotros (encontramos) was outside it.", ["Yo encuentro el libro."], "Change to yo."),
      toEs("Los niños duermen poco, pero nosotros duermimos mucho.", "Los niños duermen poco, pero nosotros dormimos mucho.", "Duermen is right (ellos is inside the boot), but nosotros is outside it, so the o stays: dormimos.", ["Los niños duermen poco, pero dormimos mucho.", "Los niños duermen poco, pero nosotras dormimos mucho."], "Correct the sentence."),
      toEs("¿Cuánto costa el billete?", "¿Cuánto cuesta el billete?", "El billete is él, inside the boot, so costar changes o → ue: cuesta.", ["¿Cuánto cuesta el boleto?"], "Correct the sentence."),
      toEs("Mi madre volve a casa a las siete.", "Mi madre vuelve a casa a las siete.", "Mi madre is ella, inside the boot, so volver changes o → ue: vuelve.", [], "Correct the sentence."),
      mc(
        "A new e → i verb: vestir (to dress). How do you say \"we dress the children\"?",
        ["Vestimos a los niños.", "Vistimos a los niños.", "Visten a los niños.", "Vestemos a los niños."],
        0,
        "Nosotros is outside the boot, so the e stays: vestimos. \"Vistimos\" puts the change in nosotros, \"visten\" is they, and \"vestemos\" uses the -er ending on an -ir verb."
      ),
      { type: "speak", prompt: "Say it in Spanish: On Saturdays I play tennis, and then we order a pizza.", text: "Los sábados juego al tenis, y después pedimos una pizza.", explanation: "Juego (yo) is inside the boot (u → ue); pedimos (nosotros) is outside it, so the e stays." },
    ]
  ),
  L(
    "present-tense-er-ir-verbs-2",
    "a1r-contrast-stem-changers",
    "Contrast Clinic: Which Vowel Changes?",
    "Sort stem-changing verbs by their pattern and catch the nosotros trap.",
    "7 min",
    [
      sec(
        "Three patterns, one boot",
        [
          "Remember the rule: a stem-changer changes its vowel only when the stress falls on the stem, which is in yo, tú, él and ellos. Nosotros and vosotros stress the ending, so they keep the infinitive's vowel.",
          "Every stem-changer uses that same boot. What differs is which vowel changes and what it becomes, and that you learn verb by verb.",
        ],
        [
          ["e → ie: quiero, pienso, empiezo", "I want, I think, I begin"],
          ["o → ue: puedo, duermo, vuelvo", "I can, I sleep, I return"],
          ["e → i: pido, sirvo, repito", "I ask for, I serve, I repeat"],
          ["u → ue: juego", "I play"],
        ],
        [
          mt(
            "Match each verb to its pattern.",
            [
              ["entender", "e → ie"],
              ["encontrar", "o → ue"],
              ["repetir", "e → i"],
              ["jugar", "u → ue"],
            ],
            "Entiendo, encuentro, repito, juego."
          ),
        ]
      ),
      sec(
        "The nosotros trap",
        "The most common mistake is putting the change into nosotros too. If the ending is -amos, -emos or -imos, the stress is on the ending, so the stem stays as it is in the infinitive.",
        [
          ["podemos (not puedemos)", "we can"],
          ["queremos (not quieremos)", "we want"],
          ["pedimos (not pidimos)", "we ask for"],
        ],
        [
          mc("\"We sleep a lot.\"", ["Dormimos mucho.", "Duermimos mucho.", "Duermemos mucho.", "Dormemos mucho."], 0, "Nosotros is outside the boot, so the o stays, and dormir is an -ir verb: dormimos. \"Duermimos\" and \"Duermemos\" put a boot stem where it doesn't belong, and \"Dormemos\" uses the -er ending."),
        ]
      ),
    ],
    [
      fb("Complete.", "Tú ___ muy rápido. (pensar)", "piensas", "E → ie inside the boot: piensas."),
      fb("Complete.", "Nosotros ___ al fútbol. (jugar)", "jugamos", "Nosotros keeps the u: jugamos."),
      fb("Complete.", "Ella ___ un café. (pedir)", "pide", "E → i inside the boot: pide."),
      fb("Complete.", "Ustedes ___ la puerta. (cerrar)", "cierran", "Ustedes takes the ellos form, inside the boot: cierran."),
      fb("Complete.", "Yo no ___ las llaves. (encontrar)", "encuentro", "O → ue in yo: encuentro."),
      mc(
        "Find the mistake: \"Nosotros pidimos la cuenta.\"",
        ["pidimos should be pedimos", "Nosotros should be Nosotras", "la cuenta should be el cuenta", "There is no mistake."],
        0,
        "Nosotros is outside the boot, so pedir keeps its e: pedimos. \"Nosotros\" is fine for a mixed or male group, and \"la cuenta\" is right because cuenta is feminine."
      ),
      toEs("They want to play tennis.", "Quieren jugar al tenis.", "Querer → quieren; jugar stays in the infinitive and takes al before the sport.", ["Ellos quieren jugar al tenis.", "Ellas quieren jugar al tenis.", "Quieren jugar tenis."]),
      toEn("No entiendo. ¿Puedes repetir?", "I don't understand. Can you repeat?", "Entender → entiendo, poder → puedes, repetir stays in the infinitive.", ["I don't understand. Can you repeat that?", "I don't understand. Could you repeat?"]),
      fb("Complete with poder.", "Nosotros ___ ir mañana.", "podemos", "Nosotros never changes: podemos, not puedemos."),
      fb("Complete with pedir.", "Nosotros ___ un café.", "pedimos", "Pedir in nosotros keeps the e: pedimos, not pidimos."),
      fb("Complete with repetir.", "Yo ___ la pregunta.", "repito", "Repetir is e → i (not ie): repito."),
      fb("Complete with volver.", "Ella ___ del trabajo a las cinco.", "vuelve", "Volver is o → ue: vuelve."),
      toEs("Quiero comer.", "Queremos comer.", "Nosotros is outside the boot, so querer loses its ie: queremos. Comer stays in the infinitive.", ["Nosotros queremos comer.", "Nosotras queremos comer."], "Change to nosotros."),
      toEs("I play tennis.", "Juego al tenis.", "Jugar: u → ue: juego.", ["Juego tenis.", "Yo juego al tenis."]),
      toEs("Nosotros cierramos la tienda a las nueve.", "Nosotros cerramos la tienda a las nueve.", "Cerrar in nosotros has no change, because the stress is on -amos: cerramos, not cierramos.", ["Cerramos la tienda a las nueve.", "Nosotras cerramos la tienda a las nueve."], "Correct the sentence."),
      toEs("Servimos la comida.", "Sirves la comida.", "Tú is inside the boot, so servir changes e → i: sirves. Nosotros (servimos) was outside it.", ["Tú sirves la comida."], "Change to tú."),
      toEs("We can sleep here.", "Podemos dormir aquí.", "Podemos (no change) + infinitive dormir (no change).", ["Nosotros podemos dormir aquí.", "Nosotras podemos dormir aquí."]),
      mc("Which is correct?", ["Queremos jugar.", "Quieremos jugar.", "Queremos juegar.", "Quieremos juegar."], 0, "Queremos has no change (nosotros), and the infinitive jugar never changes."),
      mc("How do you say 'we find'?", ["encontramos", "encuentramos", "encontremos", "encuentremos"], 0, "Nosotros keeps the o: encontramos. \"Encuentramos\" puts the change in nosotros, and the -emos forms are not the present."),
      toEs("They prefer tea, but we prefer coffee.", "Prefieren té, pero nosotros preferimos café.", "Prefieren (in the boot, e → ie) vs. preferimos (outside the boot).", ["Ellos prefieren té, pero nosotros preferimos café.", "Prefieren el té, pero nosotros preferimos el café.", "Ellas prefieren té, pero nosotras preferimos café."]),
      toEs("Ella repete la pregunta.", "Ella repite la pregunta.", "Repetir is an e → i verb, not e → ie, and ella is inside the boot: repite.", [], "Correct the sentence."),
      mc(
        "A new verb: contar (to count, to tell), an o → ue verb. \"They tell a story.\"",
        ["Cuentan una historia.", "Contan una historia.", "Cuentamos una historia.", "Contamos una historia."],
        0,
        "Ellos is inside the boot, so o → ue: cuentan. \"Contan\" is missing the change, \"cuentamos\" wrongly puts the change in nosotros, and \"contamos\" is correct for \"we\", not \"they\"."
      ),
      { type: "speak", prompt: "Say it in Spanish: I can't find my keys, but we can go on foot.", text: "No encuentro mis llaves, pero podemos ir a pie.", explanation: "Encuentro (yo) is inside the boot (o → ue); podemos (nosotros) is outside it, so no change." },
    ]
  ),
  L(
    "ser-vs-estar-mastery-check",
    "present-progressive",
    "Estar + Gerund: What's Happening Right Now",
    "Use estoy hablando, está comiendo and friends for actions in progress at this moment.",
    "8 min",
    [
      sec(
        "The idea: estar + gerund",
        [
          "To say something is happening right now, Spanish uses estar plus the gerund (the -ing form). It's built on estar because estar is the verb for how things are at this moment: estoy comiendo is literally \"I am (right now) eating\".",
          "Making the gerund: -ar verbs swap -ar for -ando; -er and -ir verbs swap their ending for -iendo. Only estar changes to match the person (estoy, estás, está, estamos, están). The gerund never changes.",
        ],
        [
          ["hablar → hablando", "speak → speaking (-ar → -ando)"],
          ["comer → comiendo", "eat → eating (-er → -iendo)"],
          ["escribir → escribiendo", "write → writing (-ir → -iendo)"],
          ["Estoy hablando por teléfono.", "I'm talking on the phone."],
          ["Estamos comiendo.", "We're eating. (only estar shows who)"],
        ],
        [
          fb("Complete with estar.", "Mi madre ___ trabajando.", "está", "Mi madre = ella → está. The gerund trabajando stays the same for everyone."),
          fb("Complete with the gerund of vivir.", "Ahora estoy ___ en Madrid.", "viviendo", "-ir verbs take -iendo: vivir → viviendo."),
        ]
      ),
      sec(
        "Gerunds with a twist",
        [
          "Spanish doesn't like an unstressed i between two vowels, so when the stem ends in a vowel, -iendo becomes -yendo: leer → leyendo, traer → trayendo.",
          "And -ir verbs that change their stem (dormir → duermo, pedir → pido) change it in the gerund too, but only one step: o → u and e → i.",
        ],
        [
          ["leer → leyendo", "read → reading (vowel + -iendo → -yendo)"],
          ["dormir → durmiendo", "sleep → sleeping (o → u)"],
          ["pedir → pidiendo", "ask for → asking for (e → i)"],
          ["El bebé está durmiendo.", "The baby is sleeping."],
        ],
        [
          mc(
            "What is the gerund of traer (to bring)?",
            ["trayendo", "traiendo", "traendo", "trayiendo"],
            0,
            "The stem tra- ends in a vowel, so -iendo becomes -yendo: trayendo, just like leer → leyendo. \"Traiendo\" keeps the i between vowels, \"traendo\" drops it, and \"trayiendo\" adds both."
          ),
          fb(
            "Complete with the gerund of servir (to serve; sirvo).",
            "El camarero está ___ la comida.",
            "sirviendo",
            "Servir is an e → i stem-changer (sirvo), so its gerund changes too: sirviendo, like pedir → pidiendo.",
            "e → i"
          ),
        ]
      ),
      sec(
        "Right now vs. in general",
        [
          "Spanish uses the progressive mainly for what is in progress now or for a temporary situation. For habits and general facts, use the simple present, even where English might use -ing.",
        ],
        [
          ["Trabajo en un banco.", "I work at a bank. (in general)"],
          ["Ahora estoy trabajando.", "Right now I'm working."],
        ],
        [
          mc(
            "Which sentence describes a habit?",
            ["Estudio español todos los días.", "Estoy estudiando español ahora.", "Están estudiando en la biblioteca.", "¿Qué estás estudiando?"],
            0,
            "Todos los días marks a habit, and habits take the simple present: estudio. The other options use estar + gerund, which describes something happening right now, not a routine."
          ),
        ]
      ),
    ],
    [
      fb("Complete with estar.", "Los niños ___ jugando en el parque.", "están", "Los niños = ellos → están. Jugando doesn't change."),
      fb("Complete with the gerund of aprender.", "Estamos ___ mucho.", "aprendiendo", "-er verbs take -iendo: aprendiendo."),
      fb("Complete with the gerund of dormir.", "¡Silencio! Papá está ___.", "durmiendo", "Dormir changes o → u in the gerund: durmiendo."),
      mc(
        "\"What are you doing?\"",
        ["¿Qué estás haciendo?", "¿Qué eres haciendo?", "¿Qué estás hacer?", "¿Qué haces haciendo?"],
        0,
        "The progressive is estar (estás) + gerund (haciendo). \"Eres\" is ser, which never forms the progressive, \"estás hacer\" uses the infinitive instead of the gerund, and \"haces haciendo\" doubles the verb."
      ),
      mc(
        "Which sentence is correct?",
        ["Ella está escribiendo un correo.", "Ella es escribiendo un correo.", "Ella está escribendo un correo.", "Ella está escribiendos un correo."],
        0,
        "Estar + gerund: está escribiendo. \"Es escribiendo\" uses ser, which can't form the progressive; \"escribendo\" is misspelled (-ir verbs take -iendo), and the gerund never adds -s, so \"escribiendos\" is wrong."
      ),
      mc(
        "\"I'm reading a book.\"",
        ["Estoy leyendo un libro.", "Estoy leiendo un libro.", "Soy leyendo un libro.", "Estoy leer un libro."],
        0,
        "Leer → leyendo (the i becomes y between vowels), and the progressive always uses estar. \"Leiendo\" misses the y, \"Soy leyendo\" uses ser, and \"Estoy leer\" uses the infinitive instead of the gerund."
      ),
      mc(
        "Which describes what's happening right now?",
        ["Trabajo en una tienda.", "Estoy trabajando en la tienda ahora.", "Trabajo los lunes.", "Siempre trabajo mucho."],
        1,
        "Estar + gerund for an action in progress. The others are habits or general facts (en una tienda, los lunes, siempre), which take the simple present."
      ),
      toEs(
        "Cocino la cena.",
        "Estoy cocinando la cena.",
        "Estar for yo is estoy; cocinar is an -ar verb, so cocinando. The simple present cocino would be a general habit.",
        ["Ahora estoy cocinando la cena.", "Yo estoy cocinando la cena."],
        "Change it to what is happening right now."
      ),
      toEs(
        "Estoy estudiando.",
        "Estamos estudiando.",
        "Only estar changes for the person: estoy → estamos. Estudiando stays the same.",
        ["Nosotros estamos estudiando.", "Nosotras estamos estudiando."],
        "Change to nosotros."
      ),
      toEs(
        "Ella está comiendo.",
        "Están comiendo.",
        "Ellos → están; the gerund comiendo doesn't change.",
        ["Ellos están comiendo.", "Ellas están comiendo."],
        "Change to ellos."
      ),
      toEs(
        "Los niños leen.",
        "Los niños están leyendo.",
        "Estar for ellos is están, and leer has a vowel before the ending, so -iendo becomes -yendo: leyendo.",
        ["Los chicos están leyendo.", "Ahora los niños están leyendo."],
        "Change it to what is happening right now."
      ),
      toEs(
        "Mis padres están viendo una película.",
        "Mis padres no están viendo una película.",
        "No goes right before estar, never between estar and the gerund.",
        [],
        "Make it negative."
      ),
      toEs(
        "Papá es lavando los platos.",
        "Papá está lavando los platos.",
        "The progressive is always built with estar, never ser: está lavando.",
        [],
        "Correct the sentence."
      ),
      toEs(
        "Estamos escribendo una carta.",
        "Estamos escribiendo una carta.",
        "-ir verbs take -iendo, with the i: escribiendo.",
        ["Nosotros estamos escribiendo una carta."],
        "Correct the sentence."
      ),
      toEs(
        "Mi hermana está pediendo una pizza.",
        "Mi hermana está pidiendo una pizza.",
        "Pedir changes e to i in the gerund: pidiendo, not pediendo.",
        [],
        "Correct the sentence."
      ),
      toEs(
        "Mi hermano está hablar con Ana.",
        "Mi hermano está hablando con Ana.",
        "After estar you need the gerund, not the infinitive: hablar → hablando.",
        [],
        "Correct the sentence."
      ),
      toEs("What are you (informal) eating?", "¿Qué estás comiendo?", "Only estar changes for the person; the gerund stays comiendo.", ["¿Qué estás comiendo tú?"]),
      toEs(
        "They're watching TV.",
        "Están viendo la tele.",
        "Ver → viendo. Estar → están for ellos.",
        ["Ellos están viendo la tele.", "Están viendo la televisión.", "Ellos están viendo la televisión.", "Están mirando la tele."]
      ),
      toEn("¿Estás leyendo el periódico?", "Are you reading the newspaper?", "Leer → leyendo: an action in progress.", ["Are you reading the paper?"]),
      wo("Mi hermano está hablando por teléfono.", "Estar comes right before the gerund.", "My brother is talking on the phone."),
      wo("¿Estás escuchando la radio ahora?", "Estar + gerund for an action going on now.", "Are you listening to the radio now?"),
      {
        type: "speak",
        prompt: "Say it in Spanish: Right now I'm working, but my friends are playing football.",
        text: "Ahora estoy trabajando, pero mis amigos están jugando al fútbol.",
        explanation: "Two actions in progress, two forms of estar (estoy, están), and gerunds that never change: trabajando, jugando.",
      },
    ]
  ),
  L(
    "telling-time-2",
    "days-months-dates",
    "Days, Months & Dates",
    "Say what day it is, name the months, and give a full date the Spanish way.",
    "10 min",
    [
      sec(
        "The idea: the article does the job of \"on\"",
        [
          "Days and months are ordinary nouns in Spanish, not names, so they're written in lowercase. Days are all masculine, and the week starts on Monday.",
          "English says \"on Monday\". Spanish has no word for that \"on\": the article does the work. El lunes means one particular Monday; los lunes means every Monday. Lunes to viernes already end in -s, so only the article shows the plural; sábado and domingo add -s. After es (Hoy es...), no article at all.",
        ],
        [
          ["lunes, martes, miércoles, jueves, viernes, sábado, domingo", "Monday to Sunday (lowercase, all masculine)"],
          ["El lunes tengo un examen.", "On Monday I have an exam. (el: one particular Monday)"],
          ["Los martes voy al gimnasio.", "On Tuesdays I go to the gym. (los: every Tuesday)"],
          ["los viernes, los domingos", "Fridays, Sundays (viernes doesn't change; domingo adds -s)"],
          ["Hoy es jueves.", "Today is Thursday. (after es: no article)"],
        ],
        [
          mc("\"We eat with my grandparents on Sundays.\"", ["Comemos con mis abuelos los domingos.", "Comemos con mis abuelos en domingo.", "Comemos con mis abuelos el domingos.", "Comemos con mis abuelos en los domingos."], 0, "Every week = los + plural day: los domingos. Spanish has no word for \"on\", so en domingo and en los domingos are wrong, and el domingos mixes a singular article with a plural day."),
          fb("Complete with el or los.", "Tengo clase de piano ___ miércoles, todas las semanas.", "los", "Todas las semanas (every week) tells you it repeats, so los miércoles. El miércoles would be just one Wednesday.", "Once, or every week?"),
        ]
      ),
      sec(
        "Months: en + month",
        "A month is a stretch of time you are inside, so it takes en: en julio (in July). Months are lowercase too. For one day inside the month, switch to the date (next section).",
        [
          ["enero, febrero, marzo, abril", "January, February, March, April"],
          ["mayo, junio, julio, agosto", "May, June, July, August"],
          ["septiembre, octubre, noviembre, diciembre", "September, October, November, December"],
          ["Mi cumpleaños es en mayo.", "My birthday is in May. (en + month)"],
          ["Las clases empiezan en septiembre.", "Classes start in September."],
        ],
        [
          fb("Complete.", "Viajamos a la playa ___ agosto.", "en", "A month takes en: en agosto, written in lowercase."),
          ms("Which are correct?", ["en octubre", "en martes", "el martes", "en el lunes"], [0, 2], "Months take en (en octubre). Days never take en: one particular day is el martes, and en martes / en el lunes add a preposition Spanish doesn't use."),
        ]
      ),
      sec(
        "Giving the date: smallest to biggest",
        [
          "Spanish dates go from the smallest unit to the biggest, like the written form 15/3: el + day + de + month. The day is a plain number (el dos, el veinte, el treinta y uno), not \"second\" or \"twentieth\".",
          "Only the first of the month has a choice: el primero or el uno. To ask the date, say ¿Qué fecha es hoy? (¿Qué día es hoy? asks for the day of the week).",
        ],
        [
          ["¿Qué fecha es hoy?", "What's the date today?"],
          ["Hoy es el quince de marzo.", "Today is March fifteenth. (15/3: day, de, month)"],
          ["el primero de enero / el uno de enero", "January first (primero or uno only for the 1st)"],
          ["Mi cumpleaños es el tres de junio.", "My birthday is June third. (el tres, not el tercero)"],
        ],
        [
          wo("Hoy es el diez de octubre.", "El + number + de + month: the day comes first.", "Today is October tenth."),
          mc("How do you say 25/12 (December 25)?", ["el veinticinco de diciembre", "el diciembre veinticinco", "el veinticinco diciembre", "el vigésimo quinto de diciembre"], 0, "Day first, then de + month: el veinticinco de diciembre. El diciembre veinticinco copies English order, el veinticinco diciembre drops de, and Spanish uses a plain number, not an ordinal like vigésimo quinto."),
        ]
      ),
    ],
    [
      mt(
        "Match each day to the one that comes after it.",
        [
          ["lunes", "martes"],
          ["miércoles", "jueves"],
          ["viernes", "sábado"],
          ["domingo", "lunes"],
        ],
        "The Spanish week runs lunes to domingo."
      ),
      fb("Complete.", "Hoy es el veinte ___ abril.", "de", "Spanish dates put the day first and link it to the month with de: el veinte de abril. Don't leave out de."),
      fb("Complete.", "No tengo clase ___ domingos.", "los", "Los + day means every week: los domingos = on Sundays. El domingo would mean one particular Sunday."),
      mc("How do you write \"July 4\" in Spanish?", ["el cuatro de julio", "julio cuatro", "el julio cuatro", "el cuatro julio"], 0, "Spanish dates put the day first, then de + month: el cuatro de julio. \"Julio cuatro\" and \"el julio cuatro\" copy English order, and \"el cuatro julio\" is missing de."),
      mc("Which is written correctly?", ["El lunes tengo un examen.", "El Lunes tengo un examen.", "En lunes tengo un examen.", "El lunes tengo un examen en Mayo."], 0, "Days and months are lowercase in Spanish, and a day takes el with no preposition: el lunes. \"El Lunes\" and \"Mayo\" wrongly use capitals, and \"En lunes\" adds a preposition Spanish doesn't use."),
      mc("Your friend asks: ¿Qué fecha es hoy? Which answer fits?", ["Es el nueve de mayo.", "Es martes.", "Son las nueve.", "Es en mayo."], 0, "Fecha = date, so the answer is el + day + de + month. Es martes answers ¿Qué día es hoy? (the day of the week), son las nueve gives the time, and es en mayo is only the month."),
      toEs("El jueves estudio en la biblioteca.", "Los jueves estudio en la biblioteca.", "Every week = los + day. Jueves already ends in -s, so only the article changes: el jueves → los jueves.", ["Los jueves yo estudio en la biblioteca.", "Estudio en la biblioteca los jueves."], "Make it every week."),
      toEs("Los sábados limpio la casa.", "El sábado limpio la casa.", "One particular day = el + singular day. Sábado drops its plural -s: los sábados → el sábado.", ["Limpio la casa el sábado."], "Change it to one particular Saturday."),
      toEs("My birthday is in November.", "Mi cumpleaños es en noviembre.", "Months take en (en noviembre = in November) and are written lowercase."),
      toEs("Today is Wednesday.", "Hoy es miércoles.", "Hoy es + the day, with no article: hoy es miércoles. Days are lowercase."),
      toEs("Hoy es el primer de mayo.", "Hoy es el primero de mayo.", "The first of the month is el primero (or el uno). Primer only shortens before a masculine noun (el primer día); in a date it stays primero.", ["Hoy es el uno de mayo."], "Correct the sentence."),
      toEs("Mi cumpleaños es en el doce de Octubre.", "Mi cumpleaños es el doce de octubre.", "Two errors: a full date takes el with no en (en is only for a month alone), and months are lowercase.", [], "Correct the sentence."),
      toEs("Tengo clase en lunes.", "Tengo clase los lunes.", "Days never take en. Every week is los lunes; for one particular Monday, el lunes.", ["Tengo clase el lunes."], "Correct the sentence."),
    ]
  ),
];
