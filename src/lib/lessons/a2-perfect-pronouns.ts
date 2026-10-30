// Synced from cheneygross-afk/lengo:src/lib/lessons/a2-perfect-pronouns.ts by scripts/sync-content.mjs -- edit it there, not here.
import { anchored, authoring } from "./authoring";
import type { AnchoredLesson } from "./weave";

// A2 lessons added after the 2026-10 curriculum audit:
//   - the present perfect (he comido), which the course first taught at
//     B1 although A2 stories already use it and it is the everyday past
//     for "today" and "this week" in Spain. Six lessons right after the
//     preterite/imperfect units; B1's present-perfect lessons stay as
//     consolidation;
//   - double object pronouns (me lo, se lo), required late in A2, since
//     the A2 exit test asks for "se lo" and they were only in optional
//     drills before B1;
//   - two Common Words lessons for A2 frequency-deck words (decks/
//     frequency-a2.ts) no required lesson used.
// Anchored after the lesson before their place; sequencing.ts puts them
// where A2_PLACES says.
const { mc, ms, fe, toEs, toEn, wo, mt, sec } = authoring("en");
const L = (
  slug: string,
  title: string,
  summary: string,
  duration: string,
  sections: Parameters<typeof anchored>[6],
  exercises: Parameters<typeof anchored>[7]
) => anchored("A2", "preterite-vs-imperfect-1", slug, title, summary, duration, sections, exercises);

export const A2_PERFECT_PRONOUNS: AnchoredLesson[] = [
  // ---- The present perfect -------------------------------------------
  L(
    "a2-perfect-he-comido",
    "The Present Perfect: He Comido, Has Visto",
    "Haber + a participle: what has happened today, this week, this year.",
    "10 min",
    [
      sec(
        "Two parts: haber + participle",
        [
          "Why two parts? Spanish builds this tense like English: a helper verb that shows the person (have / has) plus a fixed form of the main verb (eaten, worked). The helper is always haber, never tener: tener is only for possession (tengo un coche).",
          "The present perfect is the present of haber (he, has, ha, hemos, habéis, han) plus a participle. Regular participles end in -ado for -ar verbs and -ido for -er and -ir verbs: hablado, comido, vivido. The rule works for any regular verb, even ones you have never seen in this tense.",
          "The participle never changes: ella ha comido, ellos han comido. And nothing goes between the two parts: ¿Has comido? not ¿Has tú comido? Haber and the participle travel as one block.",
        ],
        [
          ["he trabajado","I have worked"],
          ["has comido","you have eaten"],
          ["ha salido","he / she has gone out"],
          ["hemos terminado","we have finished"],
          ["han llegado","they have arrived"],
        ],
        [
          fe("Hoy ___ mucho.", "he trabajado", "Today I [have worked] a lot.", "haber (he) + trabajado: -ar verbs take -ado."),
          mc("Using the rule on a new verb: subir (to go up). \"She has gone up\" is…", ["Ella ha subido.","Ella ha subada.","Ella ha subiado.","Ella tiene subido."], 0, "-ir verb → stem + -ido: subido, and the helper is haber (ha). The participle never takes -a for a woman, and tener is not the helper."),
        ]
      ),
      sec(
        "When to use it",
        "Why this tense? It links a past action to a period that includes now, so use it for actions in a time that isn't over yet: hoy, esta mañana, esta semana, este mes, este año. Also for news and for something that has just happened. In Spain this is the normal past for today; much of Latin America uses the preterite for the same thing, and both are understood everywhere.",
        [
          ["Esta semana he dormido muy poco.","This week I've slept very little."],
          ["¿Qué has hecho hoy?","What have you done today?"],
          ["Este año hemos viajado mucho.","This year we've traveled a lot."],
          ["Mira, ha empezado a llover.","Look, it's started to rain."],
        ],
        [
          mc("\"We have finished the project.\"", ["Hemos terminado el proyecto.","Hemos terminamos el proyecto.","Habemos terminado el proyecto.","Hemos terminada el proyecto."], 0, "Hemos + terminado. The participle doesn't change for the person or for proyecto, and the nosotros form of haber is hemos."),
        ]
      ),
    ],
    [
      fe("¿___ el correo de la jefa?", "Has leído", "[Have you read] the boss's email? (tú)", "haber (has) + leído. Leído takes an accent so the í is its own syllable."),
      fe("Mis padres ___ a Madrid esta mañana.", "han llegado", "My parents [have arrived] in Madrid this morning.", "han + llegado.", ["llegaron"]),
      fe("Este mes ___ dos kilos.", "he perdido", "This month [I've lost] two kilos.", "he + perdido: -er verbs take -ido.", ["perdí"]),
      fe("¿Ustedes ya ___ el museo?", "han visitado", "[Have you visited] the museum yet? (ustedes)", "han + visitado.", ["visitaron"]),
      mc("Which time phrase fits the present perfect (in Spain)?", ["esta tarde","ayer","el año pasado","en 2019"], 0, "Esta tarde is a period that includes now, so it fits he / ha + participle. Ayer, el año pasado and en 2019 are finished, so they take the preterite."),
      toEs("Mi hermano limpia la cocina.", "Mi hermano ha limpiado la cocina.", "Present of haber (ha) + participle in -ado: limpia → ha limpiado.", ["Hoy mi hermano ha limpiado la cocina."], "Change it to the present perfect."),
      toEs("He cenado con mis amigos.", "Hemos cenado con mis amigos.", "Only haber changes for the person: he → hemos. The participle stays cenado.", ["Hemos cenado con nuestros amigos."], "Change it to nosotros."),
      toEs("Ella ha bebido mucha agua.", "Ellas han bebido mucha agua.", "Haber changes (ha → han), but the participle doesn't take a plural: bebido.", undefined, "Make the subject plural (ellas)."),
      toEs("¿Has tú comido?", "¿Has comido tú?", "Nothing goes between haber and the participle: move tú after it (or before has).", ["¿Tú has comido?","¿Has comido?"], "Correct the sentence."),
      toEs("Ellas han salidas.", "Ellas han salido.", "After haber the participle never agrees: salido, even for a feminine plural subject.", undefined, "Correct the sentence."),
      toEs("Tengo terminado el trabajo.", "He terminado el trabajo.", "The helper for the present perfect is haber (he), not tener.", ["Yo he terminado el trabajo.","Ya he terminado el trabajo."], "Correct the sentence."),
      toEs("Nosotros habemos llegado.", "Nosotros hemos llegado.", "The nosotros form of haber is hemos; habemos is not standard.", ["Hemos llegado."], "Correct the sentence."),
      toEs("Today I've eaten too much.", "Hoy he comido demasiado.", "Hoy is a time that isn't over → present perfect: he comido.", ["He comido demasiado hoy.","Hoy comí demasiado."]),
      toEs("Have you slept well?", "¿Has dormido bien?", "has + dormido; nothing between them.", ["¿Ha dormido bien?","¿Dormiste bien?"]),
      toEs("This week we've worked a lot.", "Esta semana hemos trabajado mucho.", "esta semana → present perfect.", ["Hemos trabajado mucho esta semana.","Esta semana trabajamos mucho."]),
      toEn("Ha empezado a llover y no tengo paraguas.", "It's started to rain and I don't have an umbrella.", "Ha empezado = has started.", ["It has started to rain and I don't have an umbrella.","It's begun to rain and I don't have an umbrella."]),
      mt("Match each form to its meaning.", [["he hablado","I have spoken"],["has vivido","you have lived"],["hemos salido","we have gone out"],["han bebido","they have drunk"]], "Haber changes for the person; the participle doesn't."),
      wo("Esta mañana he desayunado en un bar.", "Esta mañana + he + participle.", "This morning I've had breakfast in a bar."),
      toEs("Today we have walked a lot.", "Hoy hemos caminado mucho.", "Hoy is not over: hemos + participle in -ado.", ["Hoy hemos andado mucho."]),
      toEs("Have you (tú) finished the homework?", "¿Has terminado los deberes?", "Has + terminado; nothing goes between them.", ["¿Has terminado la tarea?"]),
      fe("Esta mañana mi hermana ___ muy temprano.", "ha salido", "This morning my sister [has gone out] very early.", "Ha + salido (-ir verb → -ido).", ["salió"]),
      fe("Este año ___ mucho español.", "hemos aprendido", "This year we [have learned] a lot of Spanish.", "Hemos + aprendido (-er verb → -ido).", ["aprendimos"]),
      fe("¿___ con el médico? (usted)", "Ha hablado", "[Have you spoken] to the doctor? (formal)", "Usted uses the third-person form ha."),
      toEs("They have sold the house.", "Han vendido la casa.", "Han + vendido; the participle doesn't change."),
      toEs("This week it has rained every day.", "Esta semana ha llovido todos los días.", "Esta semana isn't over: present perfect ha llovido."),
      mc("'She has eaten.'", ["Ella ha comido.","Ella ha comida.","Ella es comido.","Ella has comido."], 0, "Haber (ha), never ser; the participle stays -o even for a woman."),
      wo("Este mes mis padres han viajado a Japón", "Han + viajado; este mes is still going on.", "This month my parents have traveled to Japan"),
      toEs("Have you all (ustedes) understood the lesson?", "¿Han entendido la lección?", "Ustedes takes han.", ["¿Han comprendido la lección?"]),
      { type: "speak", prompt: "A friend asks what you've done today. Say aloud in Spanish: Today I've worked a lot and I've eaten with my sister.", text: "Hoy he trabajado mucho y he comido con mi hermana.", explanation: "Hoy isn't over → he + participle (-ado / -ido). In much of Latin America: Hoy trabajé mucho y comí con mi hermana." },
    ]
  ),
  L(
    "a2-perfect-irregular-participles",
    "Irregular Participles: Hecho, Dicho, Visto, Puesto",
    "Ten common verbs with irregular participles, from hecho to roto.",
    "9 min",
    [
      sec(
        "The ones to learn by heart",
        [
          "A few very common verbs have irregular participles. They are not related to the preterite stems, but they come in two families: most end in -to (abierto, escrito, puesto, vuelto, roto, muerto, visto, descubierto) and two end in -cho (hecho, dicho).",
          "Why it pays to learn them: a verb built on one of these keeps the same irregular participle. Describir → descrito (like escribir), devolver → devuelto (like volver), suponer → supuesto (like poner), deshacer → deshecho (like hacer). Learn ten, and you can form dozens.",
        ],
        [
          ["hacer → hecho","done, made"],
          ["decir → dicho","said"],
          ["ver → visto","seen"],
          ["poner → puesto","put"],
          ["escribir → escrito","written"],
          ["abrir → abierto","opened"],
          ["volver → vuelto","come back"],
          ["romper → roto","broken"],
          ["morir → muerto","died"],
          ["descubrir → descubierto","discovered"],
        ],
        [
          fe("¿Qué has ___ hoy?", "hecho", "What have you [done] today?", "hacer → hecho."),
          mc("Devolver (to give back) is volver with a prefix. \"I've given back the books\" is…", ["He devuelto los libros.","He devolvido los libros.","He devuelvido los libros.","He devueltos los libros."], 0, "Devolver inherits the irregular participle of volver: vuelto → devuelto. It doesn't take a plural -s after haber."),
        ]
      ),
      sec(
        "In real sentences",
        "The participle still never changes after haber: no -a, no -s, whatever the subject or object.",
        [
          ["¿Has visto mis gafas?","Have you seen my glasses?"],
          ["Mi hijo ha roto la ventana.","My son has broken the window."],
          ["Han abierto un restaurante nuevo en la esquina.","They've opened a new restaurant on the corner."],
          ["¿Ya has vuelto del viaje?","Are you back from your trip already?"],
          ["Todavía no he escrito el informe.","I haven't written the report yet."],
          ["¿Qué ha dicho el médico?","What did the doctor say?"],
        ],
        [
          mc("\"I've put the keys on the table.\"", ["He puesto las llaves en la mesa.","He ponido las llaves en la mesa.","He puse las llaves en la mesa.","He puestas las llaves en la mesa."], 0, "Poner → puesto, and it doesn't agree with las llaves after haber."),
          fe("Mi hermana nos ha ___ su viaje a Perú.", "descrito", "My sister has [described] her trip to Peru to us.", "Describir is built on escribir, so it inherits escrito → descrito."),
        ]
      ),
    ],
    [
      fe("Todavía no he ___ la película.", "visto", "I haven't [seen] the film yet.", "ver → visto."),
      fe("¿Quién ha ___ el vaso?", "roto", "Who has [broken] the glass?", "romper → roto."),
      fe("La tienda ha ___ tarde hoy.", "abierto", "The shop has [opened] late today.", "abrir → abierto."),
      fe("Mi abuela ha ___ un libro.", "escrito", "My grandmother has [written] a book.", "escribir → escrito."),
      fe("Mi primo ha ___ una canción para su boda.", "compuesto", "My cousin has [composed] a song for his wedding.", "Componer is built on poner, so puesto → compuesto."),
      mc("Deshacer means to undo / to unpack. \"I've unpacked my suitcase\" is…", ["He deshecho la maleta.","He deshacido la maleta.","He deshizo la maleta.","He deshecha la maleta."], 0, "Deshacer inherits hecho → deshecho, and the participle doesn't agree with la maleta."),
      toEs("Hago la cena.", "He hecho la cena.", "Present of haber + participle; hacer → hecho.", ["Ya he hecho la cena."], "Change it to the present perfect."),
      toEs("Ponen la mesa.", "Han puesto la mesa.", "Han + puesto (poner → puesto, never ponido).", ["Ya han puesto la mesa."], "Change it to the present perfect."),
      toEs("Ana vuelve a casa.", "Ana ha vuelto a casa.", "Ha + vuelto (volver → vuelto, never volvido).", ["Ana ya ha vuelto a casa."], "Change it to the present perfect."),
      toEs("He abrido la ventana.", "He abierto la ventana.", "Abrir has an irregular participle: abierto.", undefined, "Correct the sentence."),
      toEs("¿Quién ha rompido la silla?", "¿Quién ha roto la silla?", "Romper → roto, never rompido.", undefined, "Correct the sentence."),
      toEs("Mis hermanos han vistos la película.", "Mis hermanos han visto la película.", "After haber the participle never takes -s: visto.", undefined, "Correct the sentence."),
      toEs("What have they said?", "¿Qué han dicho?", "decir → dicho.", ["¿Qué han dicho ellos?","¿Qué dijeron?"]),
      toEs("Have you seen the new film?", "¿Has visto la nueva película?", "ver → visto.", ["¿Has visto la película nueva?","¿Ha visto la nueva película?","¿Ha visto la película nueva?","¿Viste la nueva película?"]),
      toEs("We've done everything.", "Hemos hecho todo.", "hacer → hecho.", ["Lo hemos hecho todo.","Ya hemos hecho todo."]),
      toEs("The scientists have discovered a new planet.", "Los científicos han descubierto un planeta nuevo.", "descubrir → descubierto.", ["Los científicos han descubierto un nuevo planeta."]),
      toEn("Mi gato ha muerto y estoy muy triste.", "My cat has died and I'm very sad.", "morir → muerto.", ["My cat died and I'm very sad."]),
      mt("Match each verb to its participle.", [["volver","vuelto"],["poner","puesto"],["decir","dicho"],["abrir","abierto"]], "Four irregular participles."),
      fe("¿Dónde has ___ el pasaporte?", "puesto", "Where have you [put] the passport?", "Poner → puesto, never ponido."),
      fe("Mis padres han ___ de las vacaciones.", "vuelto", "My parents have [come back] from their holiday.", "Volver → vuelto, never volvido."),
      toEs("I've written three emails today.", "Hoy he escrito tres correos.", "Escribir → escrito, never escribido.", ["He escrito tres correos hoy.","Hoy he escrito tres emails.","He escrito tres emails hoy.","Hoy he escrito tres correos electrónicos."]),
      toEs("We've opened a bank account.", "Hemos abierto una cuenta en el banco.", "Abrir → abierto, never abrido.", ["Hemos abierto una cuenta bancaria."]),
      toEs("My son has said his first word.", "Mi hijo ha dicho su primera palabra.", "Decir → dicho, never decido."),
      toEs("Somebody has broken my phone.", "Alguien ha roto mi teléfono.", "Romper → roto, never rompido.", ["Alguien ha roto mi móvil.","Alguien ha roto mi celular."]),
      mc("'They have done the homework.'", ["Han hecho los deberes.","Han hacido los deberes.","Han hizo los deberes.","Han hechos los deberes."], 0, "Hacer → hecho, and the participle never takes plural -s after haber."),
      toEs("We haven't seen the sea this summer.", "Este verano no hemos visto el mar.", "Ver → visto; no goes before haber.", ["No hemos visto el mar este verano."]),
      { type: "speak", prompt: "Tell your flatmate aloud in Spanish: I've opened the windows, I've made coffee and I've put the keys on the table.", text: "He abierto las ventanas, he hecho café y he puesto las llaves en la mesa.", explanation: "Abrir → abierto, hacer → hecho, poner → puesto; haber (he) stays in front of each." },
    ]
  ),
  L(
    "a2-perfect-ya-todavia-alguna-vez",
    "Ya, Todavía No, Alguna Vez: Experiences",
    "Already, not yet, ever, never: the present perfect for experiences and to-do lists.",
    "9 min",
    [
      sec(
        "Already and not yet",
        [
          "Why the present perfect? Ya (already) and todavía no / aún no (not yet) measure an action against now: is it done at this point or not? A period that reaches up to now is exactly what the present perfect expresses.",
          "Placement follows the rule you know: haber and the participle travel as one block, so ya and todavía no go before haber, or at the end, never in between.",
        ],
        [
          ["Ya he terminado.","I've already finished."],
          ["Todavía no he comido.","I haven't eaten yet."],
          ["¿Ya has pagado? —No, aún no.","Have you paid already? — No, not yet."],
          ["Ya han apagado las luces.","They've already turned off the lights."],
        ],
        [
          fe("___ he hecho la compra.", "Ya", "I've [already] done the shopping.", "ya = already."),
          mc("—¿Ya has llamado al fontanero? Which reply means \"not yet\"?", ["No, todavía no.","Sí, ya.","Nunca jamás.","Una vez."], 0, "Todavía no = not yet. Sí, ya means yes, already; nunca is never, and una vez is once."),
        ]
      ),
      sec(
        "Ever and never",
        [
          "For life experiences, the period is your whole life up to now, which isn't over, so again the present perfect. Ask ¿Alguna vez has…? (Have you ever…?). Answer with nunca, una vez, dos veces, muchas veces.",
          "Nunca before the verb needs no extra no: nunca he estado. If you start with no, nunca moves after: no he estado nunca. Both mean the same.",
        ],
        [
          ["¿Alguna vez has estado en México?","Have you ever been to Mexico?"],
          ["Nunca he probado el pulpo.","I've never tried octopus."],
          ["He estado en Perú dos veces.","I've been to Peru twice."],
          ["¿Has probado alguna vez el pulpo?","Have you ever tried octopus?"],
        ],
        [
          mc("\"I've never seen snow.\"", ["Nunca he visto la nieve.","Nunca he veído la nieve.","He nunca visto la nieve.","No nunca he visto la nieve."], 0, "Nunca goes before haber, and ver → visto. Nothing can go between he and visto."),
        ]
      ),
    ],
    [
      fe("¿___ has viajado sola?", "Alguna vez", "Have you [ever] traveled alone?", "¿Alguna vez has…? = Have you ever…?", ["alguna vez"]),
      fe("___ no hemos recibido el paquete.", "Todavía", "We haven't received the package [yet].", "todavía no = not yet.", ["Aún"]),
      fe("Mi hermano ___ ha montado en avión.", "nunca", "My brother has [never] been on a plane.", "nunca + ha + participle."),
      toEs("Ya he limpiado el baño.", "Todavía no he limpiado el baño.", "Not yet = todavía no / aún no, before haber (or no ... todavía at the end).", ["Aún no he limpiado el baño.","No he limpiado el baño todavía.","No he limpiado el baño aún."], "Make it negative with «todavía no»."),
      toEs("Has montado a caballo.", "¿Alguna vez has montado a caballo?", "Have you ever = ¿Alguna vez has + participle? (or alguna vez at the end).", ["¿Has montado a caballo alguna vez?","¿Has montado alguna vez a caballo?"], "Turn it into a question with «alguna vez»."),
      toEs("He comido sushi muchas veces.", "Nunca he comido sushi.", "Nunca before haber, with no extra no; or no he comido nunca.", ["No he comido nunca sushi.","No he comido sushi nunca."], "Change it to «never»."),
      toEs("He ya terminado los deberes.", "Ya he terminado los deberes.", "Nothing goes between haber and the participle: ya goes before he (or at the end).", ["He terminado ya los deberes.","He terminado los deberes ya.","Ya he terminado la tarea."], "Correct the sentence."),
      toEs("No nunca he estado en Cuba.", "Nunca he estado en Cuba.", "Nunca first needs no extra no. With no first, nunca goes after the verb.", ["No he estado nunca en Cuba."], "Correct the sentence."),
      toEs("Todavía he no llamado a mi madre.", "Todavía no he llamado a mi madre.", "Todavía no is one unit before haber; no can't go between he and the participle.", ["Aún no he llamado a mi madre.","No he llamado a mi madre todavía.","No he llamado todavía a mi madre."], "Correct the sentence."),
      mc("Your friend asks: «¿Alguna vez has visitado Granada?» You went once, in 2019. Which reply is right?", ["Sí, una vez. Fui en 2019.","Sí, he ido en 2019.","Todavía no, en 2019.","Nunca, una vez."], 0, "Una vez answers the experience question; the named year needs the preterite: fui en 2019. He ido en 2019 mixes a finished date with the present perfect, and the others contradict themselves."),
      toEs("I've already seen this film.", "Ya he visto esta película.", "ya + he visto.", ["He visto ya esta película.","Ya vi esta película.","Ya he visto esta peli."]),
      toEs("Have you ever eaten paella?", "¿Alguna vez has comido paella?", "¿Alguna vez has + participle?", ["¿Alguna vez comiste paella?","¿Has comido paella alguna vez?","¿Has comido alguna vez paella?","¿Alguna vez ha comido paella?","¿Ha comido paella alguna vez?"]),
      toEs("We haven't decided yet.", "Todavía no hemos decidido.", "todavía no + hemos decidido.", ["Aún no hemos decidido.","No hemos decidido todavía.","No hemos decidido aún."]),
      toEs("I've been to Mexico three times.", "He estado en México tres veces.", "estar → estado; tres veces.", ["He ido a México tres veces.","Estuve en México tres veces."]),
      toEn("¿Alguna vez has perdido el pasaporte?", "Have you ever lost your passport?", "¿Alguna vez has…? = Have you ever…?", ["Have you ever lost the passport?"]),
      ms("Which sentences are correct?", ["Ya he terminado.","He ya terminado.","Nunca he estado en Chile.","¿Has tú visto a Marta?"], [0,2], "Ya and nunca go before haber, and nothing goes between haber and the participle, not even tú."),
      toEs("I've already paid.", "Ya he pagado.", "Ya goes before haber (or at the end), never between he and pagado.", ["He pagado ya."]),
      toEs("She hasn't arrived yet.", "Todavía no ha llegado.", "Not yet = todavía no or aún no.", ["Aún no ha llegado.","No ha llegado todavía.","No ha llegado aún."]),
      fe("¿___ has comido? —Sí, a las dos.", "Ya", "Have you [already] eaten? —Yes, at two.", "Ya = already, placed before haber."),
      fe("___ no he leído tu mensaje.", "Todavía", "I haven't read your message [yet].", "Todavía no = not yet.", ["Aún"]),
      fe("¿Alguna vez has ___ en Argentina?", "estado", "Have you ever [been] to Argentina?", "Life experience of a place: estar → estado."),
      fe("Hemos ido a Roma ___ veces.", "muchas", "We've been to Rome [many] times.", "Muchas veces = many times (vez is feminine)."),
      toEs("Have you (tú) ever cooked for ten people?", "¿Alguna vez has cocinado para diez personas?", "Ever = alguna vez with the present perfect.", ["¿Has cocinado alguna vez para diez personas?","¿Alguna vez cocinaste para diez personas?"]),
      toEs("I've never missed a flight.", "Nunca he perdido un vuelo.", "Nunca before haber; no extra no needed.", ["No he perdido nunca un vuelo.","Nunca perdí un vuelo."]),
      toEs("My sister has changed jobs three times.", "Mi hermana ha cambiado de trabajo tres veces.", "Counting experiences (tres veces) uses the present perfect; cambiar de trabajo = to change jobs.", ["Mi hermana cambió de trabajo tres veces.","Mi hermana ha cambiado de empleo tres veces.","Mi hermana ha cambiado tres veces de trabajo."]),
      toEs("We haven't cleaned the kitchen yet.", "Todavía no hemos limpiado la cocina.", "Todavía no / aún no go before haber, or no ... todavía at the end.", ["Aún no hemos limpiado la cocina.","No hemos limpiado la cocina todavía.","No hemos limpiado la cocina aún."]),
      mc("'They've already left.'", ["Ya se han ido.","Se han ya ido.","Se ya han ido.","Han se ya ido."], 0, "Ya and the pronoun go before haber; nothing goes between han and ido."),
      wo("Nunca he visto un arcoíris doble", "Nunca goes first, before haber.", "I've never seen a double rainbow"),
      toEs("Have you (formal) ever written a book?", "¿Alguna vez ha escrito un libro?", "Usted takes ha; escribir → escrito.", ["¿Alguna vez escribió un libro?","¿Ha escrito alguna vez un libro?","¿Alguna vez ha escrito usted un libro?"]),
      { type: "speak", prompt: "Answer aloud in Spanish: «¿Alguna vez has estado en Argentina?» You've never been there, but you've been to Chile twice.", text: "No, nunca he estado en Argentina, pero he estado en Chile dos veces.", explanation: "Experience up to now → he estado; nunca before haber; dos veces counts the experiences." },
    ]
  ),
  L(
    "a2-perfect-vs-preterite",
    "He Comido or Comí?",
    "Present perfect for a time that isn't over, preterite for a finished one, and how Spain and Latin America differ.",
    "10 min",
    [
      sec(
        "Is the time over?",
        [
          "Why? The present perfect links a past action to now: it happened inside a period that is still going on. The moment you name a finished time (ayer, el lunes, en 2020), that link is cut, so the preterite is the only choice.",
          "Hoy, esta semana, este año → present perfect: he comido. Ayer, la semana pasada, en 2020 → preterite: comí. If you name a finished time, use the preterite everywhere.",
        ],
        [
          ["Hoy he comido en casa, pero ayer comí en un restaurante.","Today I've eaten at home, but yesterday I ate at a restaurant."],
          ["Este año he leído diez libros. El año pasado leí cinco.","This year I've read ten books. Last year I read five."],
          ["¿Has visto a Ana esta semana? —Sí, vi a Ana el lunes.","Have you seen Ana this week? — Yes, I saw Ana on Monday."],
        ],
        [
          fe("Ayer ___ al cine.", "fui", "Yesterday I [went] to the cinema.", "Ayer is a finished time → preterite: fui."),
        ]
      ),
      sec(
        "Spain and Latin America",
        "In Spain, he comido is the normal past for anything earlier today: ¿Qué has hecho esta mañana? In Mexico, Colombia, Argentina and most of Latin America, people usually say ¿Qué hiciste esta mañana? and often use the preterite for experiences too (¿Alguna vez estuviste en Cuba?), alongside he comido (¿Has estado en Cuba?). You can use either; just be consistent.",
        [
          ["España: Esta mañana he desayunado tarde.","Spain: This morning I had a late breakfast."],
          ["México: Esta mañana desayuné tarde.","Mexico: This morning I had a late breakfast."],
        ],
        [
          mc("Which sentence is wrong?", ["Ayer he visto a tu hermano.","Ayer vi a tu hermano.","Hoy he visto a tu hermano.","Hoy vi a tu hermano."], 0, "Ayer is a finished time, so the preterite: ayer vi. With hoy both are fine, depending on where you are."),
        ]
      ),
    ],
    [
      fe("La semana pasada ___ mucho.", "trabajé", "Last week I [worked] a lot.", "La semana pasada is over → preterite: trabajé."),
      fe("Esta semana ___ mucho.", "he trabajado", "This week I [have worked] a lot.", "Esta semana isn't over → present perfect.", ["trabajé"]),
      fe("En 2019 ___ en Chile.", "vivimos", "In 2019 we [lived] in Chile.", "A finished year → preterite: vivimos."),
      fe("¿Alguna vez ___ en Chile?", "has vivido", "[Have you ever lived] in Chile? (tú)", "Experience → present perfect (has vivido); much of Latin America also says ¿Alguna vez viviste en Chile?", ["viviste"]),
      toEs("Hoy he llamado a mi abuela.", "Ayer llamé a mi abuela.", "Ayer is a finished time, so the present perfect becomes the preterite: he llamado → llamé.", ["Llamé a mi abuela ayer."], "Change «hoy» to «ayer»."),
      toEs("El sábado hicimos una fiesta.", "Este fin de semana hemos hecho una fiesta.", "Este fin de semana is still the current period → present perfect hemos hecho (in Latin America hicimos is also normal).", ["Este fin de semana hicimos una fiesta.","Hemos hecho una fiesta este fin de semana."], "Change «el sábado» to «este fin de semana» (Spain usage)."),
      toEs("¿Qué hiciste esta mañana?", "¿Qué has hecho esta mañana?", "In Spain, earlier today is normally the present perfect: has + hecho.", undefined, "Change it to the usual Spain version."),
      toEs("En 2010 he vivido en Londres.", "En 2010 viví en Londres.", "A named finished year cuts the link to now → preterite viví.", undefined, "Correct the sentence."),
      toEs("Anoche hemos cenado en un restaurante chino.", "Anoche cenamos en un restaurante chino.", "Anoche is finished, even in Spain → preterite cenamos.", undefined, "Correct the sentence."),
      toEs("Mis abuelos se han conocido en 1965.", "Mis abuelos se conocieron en 1965.", "A specific date in the past → preterite se conocieron.", undefined, "Correct the sentence."),
      toEs("Yesterday I went out with my friends.", "Ayer salí con mis amigos.", "Ayer → preterite.", ["Ayer salí con mis amigas.","Salí con mis amigos ayer."]),
      toEs("This year we've saved a lot of money.", "Este año hemos ahorrado mucho dinero.", "Este año → present perfect.", ["Este año ahorramos mucho dinero.","Hemos ahorrado mucho dinero este año."]),
      toEs("Have you (tú) ever been to Spain? — Yes, I went in 2018.", "¿Alguna vez has estado en España? —Sí, fui en 2018.", "The experience → he estado; the date → fui.", ["¿Alguna vez estuviste en España? —Sí, fui en 2018.","¿Has estado en España alguna vez? —Sí, fui en 2018.","¿Has estado alguna vez en España? —Sí, fui en 2018."]),
      toEn("Hoy no he hecho nada, pero ayer limpié toda la casa.", "Today I haven't done anything, but yesterday I cleaned the whole house.", "Hoy → he hecho; ayer → limpié.", ["Today I've done nothing, but yesterday I cleaned the whole house.","Today I didn't do anything, but yesterday I cleaned the whole house."]),
      mt("Match each time word to the tense it goes with.", [["ayer","preterite (comí)"],["esta mañana","present perfect in Spain (he comido)"],["alguna vez","present perfect (he comido)"],["el año pasado","preterite (comí)"]], "Finished time → preterite; unfinished time or experience → present perfect."),
      fe("Hoy ___ en casa.", "he trabajado", "Today I [have worked] at home.", "Hoy isn't over: present perfect (in Latin America trabajé is also normal).", ["trabajé"]),
      fe("Ayer ___ en casa.", "trabajé", "Yesterday I [worked] at home.", "Ayer is a finished time: preterite everywhere, never he trabajado."),
      fe("El lunes pasado ___ a Ana en el supermercado.", "vi", "Last Monday I [saw] Ana at the supermarket.", "A named finished time: preterite vi."),
      fe("Esta semana ___ dos películas.", "hemos visto", "This week we [have seen] two films.", "Esta semana isn't over: present perfect.", ["vimos"]),
      toEs("In 2015 my sister had a baby.", "En 2015 mi hermana tuvo un bebé.", "A finished year: preterite tuvo, never ha tenido.", ["Mi hermana tuvo un bebé en 2015."]),
      toEs("This month I've read three books.", "Este mes he leído tres libros.", "Este mes isn't over: he leído.", ["Este mes leí tres libros."]),
      toEs("Last month I read three books.", "El mes pasado leí tres libros.", "El mes pasado is over: preterite leí."),
      toEs("Have you (tú) ever won a prize? — Yes, I won one in 2020.", "¿Alguna vez has ganado un premio? —Sí, gané uno en 2020.", "Alguna vez asks about experience (present perfect); en 2020 names a finished time (preterite gané).", ["¿Alguna vez ganaste un premio? —Sí, gané uno en 2020.","¿Has ganado alguna vez un premio? —Sí, gané uno en 2020.","¿Alguna vez has ganado un premio? —Sí, en 2020 gané uno."]),
      toEs("Today I've got up early, but yesterday I got up at ten.", "Hoy me he levantado temprano, pero ayer me levanté a las diez.", "Hoy → present perfect; ayer → preterite.", ["Hoy me levanté temprano, pero ayer me levanté a las diez."]),
      mc("Which sentence is wrong?", ["El año pasado he viajado a Chile.","El año pasado viajé a Chile.","Este año he viajado a Chile.","Este año viajé a Chile."], 0, "El año pasado is finished, so it needs the preterite."),
      mc("In Mexico, how would someone usually ask 'What did you do this morning?'", ["¿Qué hiciste esta mañana?","¿Qué has hecho ayer?","¿Qué hacías esta mañana?","¿Qué harás esta mañana?"], 0, "Most of Latin America uses the preterite for earlier today."),
      wo("Esta semana he dormido poco, pero el sábado dormí diez horas", "Esta semana → he dormido; el sábado → dormí.", "This week I've slept little, but on Saturday I slept ten hours"),
      toEs("My parents got married in 1990.", "Mis padres se casaron en 1990.", "A specific past date: preterite, never se han casado."),
      { type: "speak", prompt: "Say aloud in Spanish (Spain usage): This week I've worked a lot, but last week I went to the beach.", text: "Esta semana he trabajado mucho, pero la semana pasada fui a la playa.", explanation: "Esta semana isn't over → he trabajado; la semana pasada is finished → fui. In Latin America, esta semana trabajé mucho is also normal." },
    ]
  ),
  L(
    "a2-perfect-mastery-check",
    "Mastery Check: The Present Perfect",
    "No new rules: forms, irregular participles, ya / todavía no / alguna vez, and he comido vs. comí.",
    "9 min",
    [
      sec(
        "Remember the rule: the checklist",
        "Remember the rule: the present perfect links a past action to a period that includes now, so it needs haber + participle, with nothing in between. The participle never changes. Hoy / esta semana / alguna vez → he comido. Ayer / el lunes / en 2020 → comí, because a finished time cuts the link to now. Irregular participles end in -to or -cho (abierto, puesto, hecho, dicho), and verbs built on them keep the same ending (devuelto, descrito).",
        [
          ["¿Has terminado? —Sí, ya he terminado.","Have you finished? — Yes, I've already finished."],
          ["Nunca he estado en Cuba.","I've never been to Cuba."],
        ],
        [
          ms("Which forms are correct?", ["he hecho","he hacido","han dicho","hemos vuelto","ha escribido"], [0,2,3], "Hecho, dicho and vuelto are irregular. \"Hacido\" and \"escribido\" don't exist: hecho, escrito."),
        ]
      ),
    ],
    [
      fe("¿Ya ___ los billetes?", "has comprado", "[Have you bought] the tickets yet? (tú)", "has + comprado.", ["compraste"]),
      fe("Nosotros nunca ___ un accidente.", "hemos tenido", "We [have] never [had] an accident.", "hemos + tenido.", ["tuvimos"]),
      fe("¿Quién ha ___ la puerta?", "abierto", "Who has [opened] the door?", "abrir → abierto."),
      fe("El año pasado ___ a Japón.", "viajé", "Last year I [traveled] to Japan.", "A finished time → preterite."),
      toEs("I haven't seen the news yet.", "Todavía no he visto las noticias.", "todavía no + he visto.", ["Aún no he visto las noticias.","No he visto las noticias todavía.","No he visto las noticias aún."]),
      toEs("They've returned from their trip.", "Han vuelto de su viaje.", "volver → vuelto.", ["Han vuelto del viaje.","Ya han vuelto de su viaje.","Ellos han vuelto de su viaje.","Han regresado de su viaje."]),
      toEs("What have you done this weekend?", "¿Qué has hecho este fin de semana?", "este fin de semana → present perfect; hacer → hecho.", ["¿Qué ha hecho este fin de semana?","¿Qué hiciste este fin de semana?"]),
      toEn("Esta mañana he puesto la lavadora y he limpiado la cocina.", "This morning I've put the washing machine on and cleaned the kitchen.", "poner → puesto; limpiar → limpiado.", ["This morning I put the washing machine on and cleaned the kitchen.","This morning I've done the laundry and cleaned the kitchen."]),
      mc("\"Have you ever lied to a friend?\"", ["¿Alguna vez has mentido a un amigo?","¿Alguna vez mentiste a un amigo ayer?","¿Has alguna vez mentido a un amigo?","¿Alguna vez has mentida a un amigo?"], 0, "Alguna vez goes before haber, and mentido doesn't agree. \"Ayer\" doesn't fit an \"ever\" question."),
      fe("Hoy ___ el autobús.", "he perdido", "Today I [have missed] the bus.", "Hoy isn't over: he + perdido.", ["perdí"]),
      fe("¿Alguna vez ___ a un famoso?", "has visto", "[Have you] ever [seen] a famous person? (tú)", "Experience → present perfect; ver → visto.", ["viste"]),
      fe("Los niños ___ la ventana con la pelota.", "han roto", "The children [have broken] the window with the ball.", "Romper → roto (irregular)."),
      fe("¿Qué ___ en la carta?", "ha escrito", "What [has] she [written] in the letter?", "Escribir → escrito; ella → ha."),
      fe("Anteayer ___ un regalo para mi madre.", "compré", "The day before yesterday I [bought] a present for my mother.", "Anteayer is finished: preterite."),
      mc("Prever (to foresee) is built on ver. \"We have foreseen the problem\" is…", ["Hemos previsto el problema.","Hemos preveído el problema.","Hemos previsto los problema.","Hemos prevido el problema."], 0, "Prever inherits ver → visto: previsto. Preveído and prevido don't exist."),
      toEs("Mi hermana escribe un correo.", "Mi hermana ha escrito un correo.", "Ha + escrito (escribir has an irregular participle).", ["Hoy mi hermana ha escrito un correo."], "Change it to the present perfect."),
      toEs("Esta mañana he hecho deporte.", "Ayer hice deporte.", "Ayer is a finished time → preterite: he hecho → hice.", ["Hice deporte ayer."], "Change «esta mañana» to «ayer»."),
      toEs("Ya he reservado la mesa.", "Todavía no he reservado la mesa.", "Not yet = todavía no / aún no before haber, or no ... todavía at the end.", ["Aún no he reservado la mesa.","No he reservado la mesa todavía.","No he reservado la mesa aún."], "Make it negative with «todavía no»."),
      toEs("El mes pasado hemos pintado la casa.", "El mes pasado pintamos la casa.", "El mes pasado is finished → preterite pintamos.", undefined, "Correct the sentence."),
      toEs("Mis amigos han ponido música en la fiesta.", "Mis amigos han puesto música en la fiesta.", "Poner → puesto, never ponido.", undefined, "Correct the sentence."),
      toEs("Nunca he tú probado el mole.", "Tú nunca has probado el mole.", "Two fixes: nothing goes between haber and the participle, and with tú haber is has.", ["Nunca has probado el mole.","No has probado nunca el mole."], "Correct the sentence."),
      toEs("Have you all (ustedes) already eaten?", "¿Ya han comido?", "Ya before haber; ustedes → han.", ["¿Han comido ya?"]),
      toEs("I haven't done my homework yet.", "Todavía no he hecho los deberes.", "Todavía no + he hecho (irregular participle).", ["Todavía no he hecho la tarea.","Aún no he hecho los deberes.","Aún no he hecho la tarea.","No he hecho los deberes todavía.","No he hecho la tarea todavía.","Todavía no he hecho mis deberes.","Todavía no he hecho mi tarea."]),
      toEs("Have you (tú) put the milk in the fridge?", "¿Has puesto la leche en la nevera?", "Poner → puesto.", ["¿Has puesto la leche en el refrigerador?","¿Has puesto la leche en el frigorífico?","¿Has puesto la leche en la heladera?"]),
      toEs("We've never lived abroad.", "Nunca hemos vivido en el extranjero.", "Nunca before haber for life experience.", ["No hemos vivido nunca en el extranjero.","Nunca vivimos en el extranjero."]),
      toEs("My boss has said something strange today.", "Hoy mi jefe ha dicho algo raro.", "Decir → dicho; hoy takes the present perfect.", ["Mi jefe ha dicho algo raro hoy.","Hoy mi jefa ha dicho algo raro.","Mi jefa ha dicho algo raro hoy."]),
      toEs("My grandfather died in 2022.", "Mi abuelo murió en 2022.", "A finished date → preterite murió, not ha muerto.", ["En 2022 murió mi abuelo.","En 2022 mi abuelo murió."]),
      mc("'Have you seen my keys?'", ["¿Has visto mis llaves?","¿Has tú visto mis llaves?","¿Has veído mis llaves?","¿Has vistas mis llaves?"], 0, "Nothing between has and visto; the participle is invariable."),
      mc("'Yesterday she came back from Paris.'", ["Ayer volvió de París.","Ayer ha vuelto de París.","Ayer ha volvido de París.","Ayer volvía de París."], 0, "Ayer is finished: preterite volvió."),
      wo("Mis vecinos ya han vuelto de sus vacaciones", "Ya before haber; volver → vuelto.", "My neighbors have already come back from their holiday"),
      toEs("Today I've done the shopping, but on Monday I did nothing.", "Hoy he hecho la compra, pero el lunes no hice nada.", "Hoy → he hecho; el lunes → preterite no hice.", ["Hoy hice la compra, pero el lunes no hice nada."]),
      { type: "speak", prompt: "Answer aloud in Spanish: «¿Qué has hecho hoy?» You've written two emails and you've come back home early.", text: "He escrito dos correos y he vuelto a casa temprano.", explanation: "Hoy → present perfect; escribir → escrito, volver → vuelto." },
    ]
  ),
  L(
    "a2-perfect-mission-news",
    "Real-World Mission: Today's News",
    "News reports use the present perfect for what has just happened. Read three headlines and say what's happened.",
    "10 min",
    [
      sec(
        "Local news",
        [
          "Remember the rule: the present perfect is haber (he, has, ha, hemos, habéis, han) + a participle (-ar → -ado, -er/-ir → -ido). Haber agrees with the subject; the participle never changes.",
          "Why the news loves it: in Spain, anything that happened today still belongs to \"now\", so radio and TV say ha detenido, han ganado. (Latin American news often uses the preterite for the same events: detuvo, ganaron.) Your mission: understand the headlines and pass the news on.",
        ],
        [
          ["La policía ha detenido a dos sospechosos del robo del banco.", "Police have arrested two suspects in the bank robbery. (la policía is singular → ha)"],
          ["Un testigo ha visto a los ladrones huir en un coche negro.", "A witness has seen the thieves flee in a black car. (ver → visto, irregular)"],
          ["Según el juez, los dos hombres son inocentes hasta el juicio.", "According to the judge, the two men are innocent until the trial."],
          ["La víctima, un cajero del banco, no ha sufrido heridas graves.", "The victim, a bank teller, hasn't suffered serious injuries. (no goes before ha)"],
        ],
        [
          mc(
            "Who have the police arrested?",
            ["Two suspects", "A witness", "The judge", "The bank teller"],
            0,
            "\"Ha detenido a dos sospechosos\": two suspects. The witness saw them, and the teller is the victim."
          ),
          mc(
            "Now two witnesses come forward. How does the reporter say it?",
            ["Dos testigos han visto a los ladrones.", "Dos testigos ha visto a los ladrones.", "Dos testigos han vistos a los ladrones.", "Dos testigos han veído a los ladrones."],
            0,
            "Haber agrees with the plural subject (han), but the participle stays visto. \"Ha\" is singular, the participle never adds -s, and ver's participle is the irregular visto, not \"veído\"."
          ),
        ]
      ),
      sec(
        "Missing and found",
        "Desaparecer (to disappear) and aparecer (to turn up) are everyday news verbs. Notice the mix: the story's background (estaba atrapado) and a finished earlier day (el lunes → desapareció) keep their past tenses; today's news is in the present perfect.",
        [
          ["Ha aparecido el perro que desapareció el lunes.", "The dog that went missing on Monday has turned up. (news often puts the verb first)"],
          ["Estaba atrapado en un garaje cerca de su casa.", "It was trapped in a garage near its home."],
          ["Los vecinos han ayudado a buscar al perro con mucha energía.", "The neighbors have helped look for it with a lot of energy."],
          ["La familia ha agradecido a todos su ayuda.", "The family has thanked everyone for their help."],
        ],
        [
          fe("Dos gatos ___ en el parque esta mañana.", "han desaparecido", "Two cats [have disappeared] in the park this morning.", "A plural subject takes han; desaparecer is an -er verb, so -ido: han desaparecido. Esta mañana (still today) points to the present perfect."),
        ]
      ),
      sec(
        "Sport and culture",
        "Sport and culture headlines work the same way. Watch for the irregular participles: escribir → escrito, hacer → hecho, abrir → abierto, decir → dicho, poner → puesto.",
        [
          ["El equipo local ha ganado la copa por primera vez.", "The local team has won the cup for the first time."],
          ["Los jugadores han demostrado un nivel impresionante.", "The players have shown an impressive level."],
          ["Una actriz famosa ha mencionado su ciudad en una entrevista.", "A famous actress has mentioned her city in an interview."],
          ["El museo ha reunido obras de cien artistas.", "The museum has brought together works by a hundred artists."],
        ],
        [
          fe("La cantante ___ una canción sobre el equipo.", "ha escrito", "The singer [has written] a song about the team.", "Escribir has an irregular participle: escrito, never \"escribido\". La cantante is singular, so ha."),
        ]
      ),
    ],
    [
      fe("La policía ___ a un sospechoso.", "ha detenido", "The police [have arrested] a suspect.", "Detener is an -er verb → detenido; la policía is one (singular) noun, so ha, not han."),
      fe("El equipo ___ la copa.", "ha ganado", "The team [has won] the cup.", "Ganar is -ar → ganado; el equipo is singular → ha."),
      fe("Un ___ ha visto el accidente.", "testigo", "A [witness] has seen the accident.", "El / la testigo = witness: the same word for a man or a woman, only the article changes."),
      toEs("El ladrón ha escapado.", "Los ladrones han escapado.", "Plural subject → han; the participle escapado doesn't change. Huir works too: han huido.", ["Los ladrones se han escapado.", "Los ladrones han huido."], "Make it plural."),
      toEs("The judge has said that the man is innocent.", "El juez ha dicho que el hombre es inocente.", "Decir has an irregular participle: dicho. Es inocente stays in the present: it's what the judge says is true now.", ["La jueza ha dicho que el hombre es inocente."]),
      toEs("A girl has disappeared, but she has turned up this morning.", "Una chica ha desaparecido, pero ha aparecido esta mañana.", "Both are -er verbs → -ido. Esta mañana is still today, so the present perfect.", ["Una niña ha desaparecido, pero ha aparecido esta mañana.", "Una chica desapareció, pero ha aparecido esta mañana."]),
      mc(
        "The reporter says: «La víctima no ha reconocido al ladrón.» What has happened?",
        ["The victim didn't recognize the thief.", "The victim recognized the thief.", "The thief didn't recognize the victim.", "The victim will recognize the thief."],
        0,
        "No before ha makes it negative, and al ladrón (personal a) marks the thief as the one recognized. Ha reconocido is past, not future."
      ),
      mt(
        "Match each news word to its meaning.",
        [
          ["el sospechoso", "the suspect"],
          ["la víctima", "the victim"],
          ["el juicio", "the trial"],
          ["el testigo", "the witness"],
          ["detener", "to arrest"],
        ],
        "Words you'll hear in every news bulletin. La víctima is always feminine, even for a man."
      ),
      wo("El ladrón ha pasado la noche en la cárcel.", "Ha + participle stay together: nothing goes between them. La cárcel = prison.", "The thief has spent the night in prison."),
    ]
  ),

  L(
    "a2-common-words-history-conflict",
    "Common Words: History, Conflict and Survival",
    "Words from history programs, documentaries and the news: el ejército, la libertad, sobrevivir, esconder, investigar.",
    "9 min",
    [
      sec(
        "History: verbs and their nouns",
        [
          "Learn these words in families. Many Spanish nouns are a verb with its ending swapped for -a, -e or -o: luchar → la lucha, atacar → el ataque, golpear → el golpe, pelear → la pelea, amenazar → la amenaza. Know one, and you can often guess the other.",
          "Documentaries tell history in the preterite. Verbs ending in -uir (destruir, huir, construir) change i to y between vowels: destruyó, huyeron.",
        ],
        [
          ["Durante la guerra, el ejército destruyó el puente.", "During the war, the army destroyed the bridge. (destruir → destruyó, i → y)"],
          ["Muchos soldados lucharon por la libertad del país.", "Many soldiers fought for the country's freedom. (luchar por = to fight for)"],
          ["El enemigo atacó la ciudad de noche.", "The enemy attacked the city at night. (atacar → el ataque)"],
          ["Una bomba quemó la mitad del barrio.", "A bomb burned half of the neighborhood."],
          ["Mi abuela sobrevivió y es una heroína para nuestra familia.", "My grandmother survived and is a heroine to our family."],
          ["Su familia escondió a dos personas en el sótano.", "Her family hid two people in the basement. (personal a before people)"],
        ],
        [
          fe("Mi abuelo ___ la guerra.", "sobrevivió", "My grandfather [survived] the war.", "Sobrevivir is an -ir verb: él → -ió, sobrevivió. A finished event in history → preterite."),
          mc(
            "Construir (to build) works like destruir. \"They built a new bridge.\"",
            ["Construyeron un puente nuevo.", "Construieron un puente nuevo.", "Construyieron un puente nuevo.", "Construían un puente nuevo."],
            0,
            "-uir verbs put a y where an unstressed i would sit between vowels: destruyeron → construyeron. \"Construieron\" keeps the i, \"construyieron\" has both, and construían is the imperfect (was building), not one finished event."
          ),
        ]
      ),
      sec(
        "Today's news",
        [
          "Crime reports mix the present (what is happening), the present perfect (what has just happened) and the preterite (what happened).",
          "Two more endings help you decode news words: -ción matches English -tion (investigación, destrucción) and -ancia / -encia matches -ance / -ence (vigilancia, violencia). Nouns in -ción are always feminine.",
        ],
        [
          ["La policía investiga el ataque a una tienda.", "The police are investigating the attack on a shop. (la policía is singular)"],
          ["No hay ninguna pista, pero un vecino ha dado algunos detalles.", "There's no lead, but a neighbor has given some details."],
          ["Los ladrones ocultaron la droga en un coche.", "The thieves hid the drugs in a car. (ocultar = esconder)"],
          ["Después de una pelea, un hombre golpeó a otro en la calle.", "After a fight, one man hit another in the street."],
          ["El golpe fue fuerte, pero el hombre está bien.", "The blow was hard, but the man is OK. (golpear → el golpe)"],
          ["Hay más vigilancia en el centro por una amenaza.", "There's more surveillance downtown because of a threat."],
          ["El ladrón pasó tres años en prisión.", "The thief spent three years in prison."],
          ["La policía encontró una pistola y tres balas.", "The police found a pistol and three bullets."],
        ],
        [
          mc(
            "\"The police are investigating the case.\"",
            ["La policía investiga el caso.", "La policía investigan el caso.", "La policía investigando el caso.", "La policía es investiga el caso."],
            0,
            "La policía is singular in Spanish, so the verb is investiga. \"Investigan\" treats it as plural, and a bare -ando form or es + verb is not a Spanish present."
          ),
          mc(
            "Proteger means to protect. What is \"protection\"?",
            ["la protección", "el protección", "la protecta", "la protegencia"],
            0,
            "-tion → -ción, and every noun in -ción is feminine: la protección (like la investigación)."
          ),
        ]
      ),
    ],
    [
      fe("Los soldados ___ durante tres días.", "lucharon", "The soldiers [fought] for three days.", "Luchar, ellos form of the preterite: -aron. A finished period (tres días) → preterite."),
      fe("¿Dónde ___ el dinero?", "escondiste", "Where did you [hide] the money? (tú)", "Esconder is -er: tú → -iste, escondiste. Ocultar means the same: ocultaste.", ["ocultaste"]),
      fe("La policía no tiene ninguna ___.", "pista", "The police don't have a single [lead].", "La pista = the lead, the clue. Ninguna agrees with the feminine noun."),
      toEs("Ellos lucharon por la libertad.", "Nosotros luchamos por la libertad.", "Nosotros in the preterite of -ar verbs is -amos (same as the present; the context tells the time).", ["Luchamos por la libertad."], "Change to nosotros."),
      toEs("El fuego destruyó la casa.", "El fuego destruyó las casas.", "Only the object becomes plural: las casas. The subject (el fuego) is still singular, so destruyó stays.", ["El incendio destruyó las casas."], "Change the object to plural."),
      toEs("The police are investigating the threat.", "La policía investiga la amenaza.", "La policía is singular → investiga. Amenazar → la amenaza (verb family).", ["La policía está investigando la amenaza."]),
      mc(
        "«Mi abuelo fue un héroe: escondió a una familia durante la guerra.» What did the grandfather do?",
        ["He hid a family.", "He found a family.", "He fought a family.", "He looked for a family."],
        0,
        "Esconder = to hide. Encontrar is to find, luchar to fight, buscar to look for. The a before una familia is the personal a for people."
      ),
      mt(
        "Match each word to its meaning.",
        [
          ["el ejército", "army"],
          ["la pelea", "fight"],
          ["la amenaza", "threat"],
          ["el detalle", "detail"],
          ["sobrevivir", "to survive"],
        ],
        "Pelea and amenaza are verb nouns: pelear → la pelea, amenazar → la amenaza."
      ),
    ]
  ),

  // ---- Common words ---------------------------------------------------
  L(
    "a2-common-words-praise-complaints",
    "Common Words: Praise, Complaints and Feelings",
    "Estupendo, impresionante, ridículo; aguantar, merecer, agradecer: how people react to each other.",
    "9 min",
    [
      sec(
        "Praise: strong adjectives and the ¡Qué … tan …! frame",
        [
          "Strong positive adjectives: estupendo (great), impresionante (impressive), brillante (brilliant), adorable. Adjectives in -o change for gender and number (una idea estupenda); adjectives in -e or a consonant only change for number (una idea brillante, ideas brillantes).",
          "To praise something with emphasis, Spanish uses one frame: ¡Qué + noun + tan (or más) + adjective! It works with any noun and any adjective. Feelings about people use estar + adjective + de: estoy orgulloso de ti (proud of you). Merecer (to deserve) and agradecer (to be grateful for) add a -z- in the yo form: merezco, agradezco, like conocer → conozco.",
        ],
        [
          ["¡Qué idea tan estupenda!","What a great idea! (¡Qué + noun + tan + adjective!)"],
          ["Tu presentación fue impresionante.","Your presentation was impressive."],
          ["Es una estudiante brillante.","She's a brilliant student. (brillante: same form for both genders)"],
          ["¡Qué bebé tan adorable!","What an adorable baby!"],
          ["Estoy muy orgulloso de ti.","I'm very proud of you. (estar + adjective + de)"],
          ["Te mereces unas vacaciones.","You deserve a holiday."],
          ["Te agradezco mucho la ayuda.","I'm very grateful for your help. (agradezco: yo form with -z-)"],
        ],
        [
          fe("Estoy muy ___ de mi hija.", "orgulloso", "I'm very [proud] of my daughter.", "orgulloso de = proud of, with estar. A woman says orgullosa.", ["orgullosa"]),
          mc("Using the same frame with a new adjective: \"What a boring film!\"", ["¡Qué película tan aburrida!","¡Qué tan película aburrida!","¡Qué película tan aburrido!","¡Qué aburrida tan película!"], 0, "¡Qué + noun + tan + adjective!, and the adjective agrees with película: aburrida. The other options break the order or the agreement."),
        ]
      ),
      sec(
        "Complaints: wrong is a state, so estar",
        [
          "Ridículo and falso describe things, so they go with ser and agree with the noun: un precio ridículo, una noticia falsa. Equivocado (wrong, mistaken) describes a person's current state, so it takes estar: estás equivocado, never eres equivocado.",
          "Aguantar and soportar both mean to put up with; in the negative they mean I can't stand / I can't take it any more. When what you can't stand is a person, add the personal a: no soporto a la gente que miente.",
        ],
        [
          ["¡Es un precio ridículo!","That's a ridiculous price! (ser: describing the thing)"],
          ["Esa noticia es falsa.","That news is fake."],
          ["Creo que estás equivocado.","I think you're wrong. (estar: your state)"],
          ["No aguanto más este calor.","I can't take this heat any more."],
          ["No soporto a la gente que miente.","I can't stand people who lie. (personal a before people)"],
          ["Me engañaron: el producto no funciona.","They cheated me: the product doesn't work."],
          ["La lluvia arruinó nuestro picnic.","The rain ruined our picnic."],
        ],
        [
          mc("\"You're wrong.\"", ["Estás equivocado.","Eres equivocado.","Tienes equivocado.","Haces equivocado."], 0, "Being wrong is a state, so estar equivocado. Eres uses ser, and tener / hacer don't combine with equivocado (the opposite is tener razón, to be right)."),
        ]
      ),
      sec(
        "Feelings and relationships",
        [
          "Many feeling words come with a fixed preposition that you learn together with the word: enamorado de (in love with), orgulloso de (proud of), disfrutar de (to enjoy). Others: el beso (kiss), el sentimiento (feeling), el respeto (respect), unido (close, united), llorar (to cry), sufrir (to suffer), evitar (to avoid), negar (to deny; ie stem change: niego).",
          "States of a relationship (enamorado, unido) use estar, because they describe how things are now, not what someone is like by nature.",
        ],
        [
          ["Está enamorado de su vecina.","He's in love with his neighbor. (estar + enamorado de)"],
          ["Mi familia está muy unida.","My family is very close. (a state: estar)"],
          ["Lloro con las películas tristes.","I cry at sad films."],
          ["Disfruto mucho de mi trabajo.","I really enjoy my job. (disfrutar de)"],
          ["Evito el centro los sábados.","I avoid downtown on Saturdays."],
          ["Niega todo, pero nadie le cree.","He denies everything, but nobody believes him. (negar: e → ie)"],
          ["Es una cuestión de respeto.","It's a matter of respect."],
        ],
        [
          mc("«Mis abuelos ___ enamorados después de cincuenta años.»", ["están","son","tienen","hacen"], 0, "Being in love is a state, so estar: están enamorados. Son would describe what they are by nature, and tener / hacer don't go with enamorado."),
        ]
      ),
    ],
    [
      fe("Mi madre trabaja mucho: se ___ un viaje.", "merece", "My mother works a lot: she [deserves] a trip.", "merecerse → se merece (ella). Only the yo form has -z- (merezco); the others keep c."),
      fe("No ___ más este ruido.", "aguanto", "I can't [take] this noise any more.", "aguantar = to put up with; in the negative, I can't take it. Soportar works too.", ["soporto"]),
      fe("Mi hermano está ___ de su profesora.", "enamorado", "My brother is [in love] with his teacher.", "enamorado de = in love with, with estar."),
      fe("Siempre ___ el tráfico de la mañana.", "evito", "I always [avoid] the morning traffic.", "evitar → evito (regular -ar)."),
      fe("No ___ a la gente que llega tarde.", "soporto", "I can't [stand] people who arrive late.", "No soporto = I can't stand; the personal a goes before la gente.", ["aguanto"]),
      fe("Mi abuela ___ con las películas románticas.", "llora", "My grandmother [cries] at romantic films.", "Llorar con = to cry at; third person llora."),
      mc("Ofrecer follows the same yo pattern as merecer. «Yo te ___ mi ayuda.»", ["ofrezco","ofreco","ofrezo","ofrece"], 0, "-ecer verbs add -z- in the yo form: merezco, agradezco, ofrezco. Ofreco and ofrezo don't exist, and ofrece is él / ella."),
      toEs("Mi hermano está orgulloso de su equipo.", "Mis hermanas están orgullosas de su equipo.", "Estar changes for the subject (está → están) and the adjective agrees with it (orgulloso → orgullosas).", undefined, "Change the subject to \"mis hermanas\"."),
      toEs("Yo merezco un descanso.", "Nosotros merecemos un descanso.", "Only the yo form has the -z-: merezco → merecemos.", ["Merecemos un descanso.","Nos merecemos un descanso.","Nosotros nos merecemos un descanso."], "Change it to nosotros."),
      toEs("La vista es impresionante.", "¡Qué vista tan impresionante!", "The frame is ¡Qué + noun + tan / más + adjective!", ["¡Qué vista más impresionante!"], "Turn it into an exclamation with «¡Qué … tan …!»."),
      toEs("Mis padres son equivocados sobre mi novio.", "Mis padres están equivocados sobre mi novio.", "Being wrong is a state: estar equivocado, not ser.", ["Mis padres están equivocados con mi novio."], "Correct the sentence."),
      toEs("Esas fotos son falso.", "Esas fotos son falsas.", "Falso agrees with the noun: las fotos is feminine plural, so falsas.", undefined, "Correct the sentence."),
      toEs("Yo agradeco tu ayuda.", "Yo agradezco tu ayuda.", "Agradecer adds -z- in the yo form: agradezco.", ["Agradezco tu ayuda.","Te agradezco tu ayuda.","Te agradezco la ayuda."], "Correct the sentence."),
      toEs("Thank you, your help is great.", "Gracias, tu ayuda es estupenda.", "Estupendo agrees with ayuda (feminine): estupenda.", ["Gracias, su ayuda es estupenda.","Gracias, tu ayuda es genial."]),
      toEs("We really enjoy the beach.", "Disfrutamos mucho de la playa.", "disfrutar de = to enjoy.", ["Nosotros disfrutamos mucho de la playa.","Disfrutamos mucho la playa."]),
      toEs("I think the news is fake.", "Creo que la noticia es falsa.", "Falso agrees with noticia (feminine).", ["Pienso que la noticia es falsa."]),
      toEn("Me engañaron y arruinaron mis vacaciones.", "They cheated me and ruined my holiday.", "engañar = to cheat, deceive; arruinar = to ruin.", ["They deceived me and ruined my vacation.","They cheated me and ruined my vacation.","I was cheated and they ruined my holiday."]),
      toEs("Your (tú) idea is brilliant.", "Tu idea es brillante.", "Brillante has one form for masculine and feminine."),
      toEs("We're very proud of our son.", "Estamos muy orgullosos de nuestro hijo.", "Orgulloso de + estar; it agrees with the speakers.", ["Estamos muy orgullosas de nuestro hijo."]),
      toEs("I think you (formal, to a man) are wrong.", "Creo que usted está equivocado.", "Being wrong is estar equivocado, not ser.", ["Creo que está equivocado."]),
      toEs("You (tú) deserve a prize.", "Te mereces un premio.", "Merecerse / merecer = to deserve; both te mereces and mereces are fine.", ["Mereces un premio."]),
      toEs("The noise ruined the concert.", "El ruido arruinó el concierto.", "Arruinar = to ruin; one completed event, so preterite arruinó."),
      mt("Match each word to its meaning.", [["el beso","kiss"],["llorar","to cry"],["sufrir","to suffer"],["el sentimiento","feeling"],["ridículo","ridiculous"]], "Words for how people feel and react."),
      wo("Ese hotel tiene un precio ridículo", "Ridículo follows the noun and agrees with el precio.", "That hotel has a ridiculous price"),
      { type: "speak", prompt: "Your friend finished a marathon. Say aloud in Spanish: What an impressive race! I'm very proud of you, you deserve a party.", text: "¡Qué carrera tan impresionante! Estoy muy orgulloso de ti, te mereces una fiesta.", explanation: "¡Qué + noun + tan + adjective!; estar orgulloso de; te mereces. A woman says orgullosa." },
    ]
  ),
  L(
    "a2-common-words-goals-rules",
    "Common Words: Goals, Rules and Possibilities",
    "El objetivo, la regla, el nivel, la posibilidad; obtener, utilizar, considerar: the words of work and plans.",
    "9 min",
    [
      sec(
        "At work",
        [
          "El objetivo (goal), el nivel (level), la regla (rule), el miembro (member), la unidad (unit), la zona (area), la posición (position), el resto (the rest).",
          "Most of these are cognates with regular endings you can use to guess new words: -ción = -tion (la posición, la misión, la información) and -dad = -ty (la unidad, la posibilidad, la realidad). Both endings are always feminine. Objetivo, método and resultado look like objective, method and result.",
        ],
        [
          ["Nuestro objetivo es abrir dos tiendas más.", "Our goal is to open two more stores."],
          ["Tengo un nivel intermedio de inglés.", "I have an intermediate level of English."],
          ["Las reglas del club son muy estrictas.", "The club's rules are very strict."],
          ["Soy miembro de un equipo pequeño.", "I'm a member of a small team."],
          ["El resto del grupo llega mañana.", "The rest of the group arrives tomorrow."],
          ["Vivo en una zona tranquila.", "I live in a quiet area."],
          ["En mi opinión, la imagen de la empresa es muy importante.", "In my opinion, the company's image is very important."],
          ["Obtengo buenos resultados con este método.", "I get good results with this method."],
          ["La misión del equipo es abrir una base en Lima.", "The team's mission is to open a base in Lima."],
          ["Es una posición difícil, pero tiene mucho valor.", "It's a difficult position, but it's very valuable."],
          ["Hay mucho movimiento en la oficina hoy.", "There's a lot of activity in the office today."],
          ["La entrega del pedido es el lunes.", "The order delivery is on Monday."],
        ],
        [
          fe("El ___ del proyecto es ahorrar energía.", "objetivo", "The [goal] of the project is to save energy.", "el objetivo = the goal."),
          mc(
            "Using the -dad = -ty pattern, how do you say 'the reality'?",
            ["la realidad", "el realidad", "la realitad", "la realida"],
            0,
            "-ty becomes -dad, and -dad nouns are always feminine: la realidad (like la unidad, la ciudad)."
          ),
        ]
      ),
      sec(
        "Verbs for getting things done",
        [
          "Obtener (to obtain, like tener: obtengo), utilizar (to use), considerar (to consider), averiguar (to find out), dirigir (to manage, to direct), guardar (to keep, to save), proteger (to protect), pertenecer a (to belong to), mencionar (to mention), fallar (to fail).",
          "Patterns that save memorising: a verb built on tener conjugates exactly like tener (obtener → obtengo, obtienes; mantener, contener too). English -ize is often -izar (utilizar, organizar). And verbs in -ger / -gir change g to j before o or a to keep the sound: protejo, dirijo.",
        ],
        [
          ["Utilizo esta aplicación para aprender idiomas.", "I use this app to learn languages."],
          ["Estamos considerando la posibilidad de mudarnos.", "We're considering the possibility of moving."],
          ["Necesito averiguar el horario del tren.", "I need to find out the train timetable."],
          ["Mi madre dirige una escuela.", "My mother runs a school."],
          ["Guarda el documento antes de salir.", "Save the document before you leave."],
          ["Este coche pertenece a la empresa.", "This car belongs to the company."],
          ["El sistema ha fallado otra vez.", "The system has failed again."],
        ],
        [
          mc(
            "\"I need to find out the price.\"",
            ["Necesito averiguar el precio.", "Necesito averiguo el precio.", "Necesito a averiguar el precio.", "Necesito averiguando el precio."],
            0,
            "Necesitar + infinitive: necesito averiguar."
          ),
          mc(
            "Contener (to contain) is built on tener. Which form is right? \"This box contains books.\"",
            ["Esta caja contiene libros.", "Esta caja contene libros.", "Esta caja contena libros.", "Esta caja contieno libros."],
            0,
            "A verb built on tener copies tener: tiene → contiene (e → ie), tengo → contengo."
          ),
        ]
      ),
      sec(
        "Linking words",
        "Debido a (due to), respecto a (regarding), excepto (except), apenas (hardly, barely), inmediatamente (immediately), definitivamente (for good, once and for all; also definitely), afuera (outside).",
        [
          ["El vuelo está cancelado debido a la niebla.", "The flight is canceled due to the fog."],
          ["Respecto a tu pregunta, no tengo una respuesta.", "Regarding your question, I don't have an answer."],
          ["Abrimos todos los días excepto el lunes.", "We're open every day except Monday."],
          ["Apenas tengo tiempo para comer.", "I barely have time to eat."],
          ["Llama a un médico inmediatamente.", "Call a doctor immediately."],
          ["Hace buen tiempo; comemos afuera.", "The weather's nice; we're eating outside."],
        ],
        [
          mc(
            "\"The museum is closed due to the strike.\"",
            ["El museo está cerrado debido a la huelga.", "El museo está cerrado debido la huelga.", "El museo está cerrado debido de la huelga.", "El museo está cerrado excepto la huelga."],
            0,
            "Debido a always keeps its a (debido a + noun = due to). Excepto means except, which doesn't give a cause."
          ),
        ]
      ),
    ],
    [
      fe("Abrimos todos los días ___ el domingo.", "excepto", "We're open every day [except] Sunday.", "excepto = except. Menos and salvo work too.", ["menos", "salvo"]),
      fe("___ duermo cinco horas.", "Apenas", "I [barely] sleep five hours.", "apenas = hardly, barely."),
      fe("¿Puedes ___ la hora de la reunión?", "averiguar", "Can you [find out] the time of the meeting?", "averiguar = to find out."),
      fe("Esta bici ___ a mi hermano.", "pertenece", "This bike [belongs] to my brother.", "pertenecer a = to belong to."),
      toEs("The train is late due to the snow.", "El tren llega tarde debido a la nieve.", "debido a = due to.", ["El tren está retrasado debido a la nieve.", "El tren viene tarde debido a la nieve."]),
      toEs("We have to protect the environment.", "Tenemos que proteger el medio ambiente.", "proteger = to protect.", ["Hay que proteger el medio ambiente.", "Debemos proteger el medio ambiente."]),
      toEs("She runs a small company.", "Dirige una empresa pequeña.", "dirigir → dirige.", ["Ella dirige una empresa pequeña.", "Dirige una pequeña empresa.", "Ella dirige una pequeña empresa."]),
      toEn("Respecto a la reunión, el jefe no ha mencionado nada.", "Regarding the meeting, the boss hasn't mentioned anything.", "respecto a = regarding; mencionar = to mention.", ["About the meeting, the boss hasn't mentioned anything.", "As for the meeting, the boss hasn't mentioned anything."]),
      mt(
        "Match each word to its meaning.",
        [
          ["la regla", "rule"],
          ["el nivel", "level"],
          ["el miembro", "member"],
          ["la posibilidad", "possibility"],
          ["la posición", "position"],
        ],
        "Words for plans, work and decisions."
      ),
    ]
  ),

  // ---- Double object pronouns ----------------------------------------
  L(
    "a2-double-pronouns-me-lo",
    "Two Pronouns Together: Me Lo, Te La, Nos Los",
    "When both the person and the thing become pronouns: the person comes first.",
    "10 min",
    [
      sec(
        "Person first, thing second",
        [
          "You know indirect pronouns (me, te, le, nos, les: to whom) and direct ones (lo, la, los, las: what). When you use both, the person goes first: Me das el libro → Me lo das.",
          "Both go before a conjugated verb, in that order, and agree like they always do: la carta → la, los papeles → los.",
          "Why this order? Spanish fixes it: the person pronoun (to whom) always comes before the thing pronoun (what), never the other way round, so lo me das or la te mando are simply impossible. Find the person, find the thing, then say person + thing + verb.",
        ],
        [
          ["¿Me prestas tu coche? —Sí, te lo presto.", "Will you lend me your car? — Yes, I'll lend it to you."],
          ["Mi madre nos hace la cena. → Mi madre nos la hace.", "My mother makes us dinner. → My mother makes it for us."],
          ["¿Las fotos? Te las mando esta noche.", "The photos? I'll send them to you tonight."],
        ],
        [
          fe("¿El dinero? Mañana ___ devuelvo.", "te lo", "The money? I'll give [it back to you] tomorrow.", "Te (to you) + lo (el dinero): person first."),
        ]
      ),
      sec(
        "Le and les become se",
        "Le or les can never sit next to lo, la, los or las: two l-sounds in a row were avoided, so le / les turn into se. Le doy el regalo → Se lo doy. Because se can mean to him, to her, to you or to them, add a él, a ella, a usted or a ellos when it isn't clear.",
        [
          ["Le doy el regalo a Ana. → Se lo doy.", "I give the present to Ana. → I give it to her."],
          ["Les explico el plan a mis padres. → Se lo explico.", "I explain the plan to my parents. → I explain it to them."],
          ["¿La factura? Se la mando a usted por correo.", "The invoice? I'll send it to you by email."],
        ],
        [
          mc(
            "\"The keys? I gave them to Pedro.\"",
            ["¿Las llaves? Se las di a Pedro.", "¿Las llaves? Le las di a Pedro.", "¿Las llaves? Las le di a Pedro.", "¿Las llaves? Se los di a Pedro."],
            0,
            "Le becomes se before las, the person comes first, and las agrees with las llaves (feminine plural)."
          ),
        ]
      ),
    ],
    [
      fe("¿La sal? Ahora ___ paso.", "te la", "The salt? I'll pass [it to you] now.", "te + la (la sal)."),
      fe("¿El informe? Ya ___ he enviado al jefe.", "se lo", "The report? I've already sent [it to] the boss.", "le + lo → se lo."),
      fe("¿Los billetes? Mi hermana ___ compra.", "nos los", "The tickets? My sister buys [them for us].", "nos + los (los billetes)."),
      fe("¿Las flores? ___ regalo a mi madre.", "Se las", "The flowers? I'm giving [them to] my mother.", "le + las → se las."),
      toEs("The book? I'll give it to you tomorrow.", "¿El libro? Te lo doy mañana.", "te + lo, both before doy.", ["¿El libro? Mañana te lo doy.", "¿El libro? Se lo doy mañana."]),
      toEs("I told it to her.", "Se lo dije.", "le + lo → se lo; decir → dije.", ["Se lo dije a ella.", "Yo se lo dije."]),
      toEs("Can you explain it to me?", "¿Me lo puedes explicar?", "me + lo, before puedes (or on the end of explicar: explicármelo).", ["¿Puedes explicármelo?", "¿Me lo puede explicar?", "¿Puede explicármelo?"]),
      toEn("¿La contraseña? Ya se la he dado a Marta.", "The password? I've already given it to Marta.", "se (to Marta) + la (la contraseña).", ["The password? I already gave it to Marta."]),
      ms(
        "Which sentences are correct?",
        ["Se lo compro.", "Le lo compro.", "Me la das.", "La me das."],
        [0, 2],
        "Le becomes se before lo, and the person pronoun always comes first."
      ),
    ]
  ),
  L(
    "a2-double-pronouns-infinitive-command",
    "Two Pronouns with Infinitives, Gerunds and Commands",
    "Dármelo, explicándoselo, dímelo: where the pair goes when there's no conjugated verb in front.",
    "9 min",
    [
      sec(
        "Before the verb, or on the end",
        [
          "The idea: object pronouns sit in front of a conjugated verb, but an infinitive (explicar), a gerund (explicando) or a yes command (explica) can't carry anything in front, so the pair rides on its end as one word. When a conjugated verb comes first, you choose: the pair goes before it or joins the end of the infinitive or gerund. It never splits.",
          "Joining adds syllables, so the stress lands further from the end and needs a written accent to stay where it was: explicar → explicártelo, diciendo → diciéndoselo.",
        ],
        [
          ["Te lo quiero explicar. = Quiero explicártelo.", "I want to explain it to you."],
          ["Se lo estoy diciendo. = Estoy diciéndoselo.", "I'm telling him / her."],
          ["Me la vas a prestar, ¿no? = Vas a prestármela, ¿no?", "You're going to lend it to me, right?"],
        ],
        [
          fe("Quiero ___ antes de la reunión.", "dártelo", "I want to [give it to you] before the meeting.", "dar + te + lo joined, with an accent: dártelo."),
        ]
      ),
      sec(
        "With commands",
        "With a yes command, the pair always joins the end: dímelo (tell me it), dáselo (give it to him). With a no command (a form you'll learn properly at the Intermediate level; for now just recognize it), the pair goes before the verb: no me lo digas.",
        [
          ["¿El secreto? Dímelo.", "The secret? Tell it to me."],
          ["¿El paquete? Dáselo al vecino.", "The package? Give it to the neighbor."],
          ["¿La sorpresa? Cuéntasela.", "The surprise? Tell it to her."],
        ],
        [
          mc(
            "\"Tell it to me.\" (tú)",
            ["Dímelo.", "Me lo di.", "Dilome.", "Lo me di."],
            0,
            "A yes command: the pronouns join the end, person first, with an accent: dímelo."
          ),
        ]
      ),
    ],
    [
      fe("¿La foto? Voy a ___ ahora.", "mandártela", "The photo? I'm going to [send it to you] now.", "mandar + te + la, joined with an accent."),
      fe("¿El café? Estoy ___.", "preparándotelo", "The coffee? I'm [making it for you].", "preparando + te + lo, accent on the á."),
      fe("¿Las llaves? ___, por favor.", "Dámelas", "The keys? [Give them to me], please.", "A yes command: da + me + las."),
      toEs("I can't tell you (it).", "No te lo puedo decir.", "te + lo before puedo, or joined: no puedo decírtelo.", ["No puedo decírtelo.", "No se lo puedo decir.", "No puedo decírselo."]),
      toEs("Give it to me, please.", "Dámelo, por favor.", "A yes command joins the pair: dámelo.", ["Dámela, por favor.", "Démelo, por favor."]),
      toEs("Tell it to him (informal).", "Díselo.", "A yes command: the pair joins the end, se before lo, with an accent: díselo.", ["Díselo a él."]),
      toEn("¿El regalo? Queremos dárselo mañana.", "The present? We want to give it to him tomorrow.", "dar + se + lo: to give it to him / her / them.", ["The present? We want to give it to her tomorrow.", "The gift? We want to give it to him tomorrow.", "The gift? We want to give it to her tomorrow.", "The present? We want to give it to them tomorrow."]),
      wo("No te lo voy a decir.", "Both pronouns before the conjugated verb.", "I'm not going to tell you."),
    ]
  ),
  L(
    "a2-double-pronouns-mission",
    "Real-World Mission: Moving Flat",
    "Moving day: who lends what to whom, without repeating a single noun.",
    "8 min",
    [
      sec(
        "The plan",
        [
          "Remember the rule: once a thing has been mentioned, don't repeat it. Person pronoun first, thing pronoun second, both before the conjugated verb, and le / les turn into se next to lo / la / los / las.",
          "Lucía is moving flat. Notice how every second mention of a thing becomes a pronoun pair. Then help her organise the move with things the dialogue doesn't mention.",
        ],
        [
          ["—¿Me prestas la furgoneta el sábado? —Claro, te la presto.", "Will you lend me the van on Saturday? — Of course, I'll lend it to you."],
          ["—¿Y las cajas? —Mi primo nos las trae el viernes.", "And the boxes? — My cousin's bringing them to us on Friday."],
          ["—¿Le has dado las llaves al dueño? —Todavía no. Se las doy mañana.", "Have you given the keys to the landlord? — Not yet. I'm giving them to him tomorrow."],
        ],
        [
          fe("¿El taladro? Claro, ___ presto.", "te lo", "The drill? Sure, I'll lend [it to you].", "Te (to you) + lo (el taladro, masculine), both before presto. Compare te la presto for la furgoneta."),
        ]
      ),
      sec(
        "The day after",
        "Once everything's done, Lucía thanks everyone.",
        [
          ["—¿Quién te ha regalado esa planta? —Me la han regalado los vecinos.", "Who gave you that plant? — The neighbors gave it to me."],
          ["—¿Y el sofá? —Se lo he vendido a una amiga.", "And the sofa? — I've sold it to a friend."],
        ],
        [
          mc("A friend asks Lucía «¿Y la tele vieja?» She gave it to her brother. What does she answer?", ["Se la di a mi hermano.", "Se lo di a mi hermano.", "Le la di a mi hermano.", "La le di a mi hermano."], 0, "La tele is feminine, so la; le becomes se before it, and the person pronoun comes first: se la di."),
        ]
      ),
    ],
    [
      fe("¿Los platos? Mi madre ___ envuelve en papel.", "nos los", "The plates? My mother is wrapping [them for us] in paper.", "Nos (for us) + los (los platos), both before the verb."),
      fe("¿El sillón? ___ he regalado a mi sobrino.", "Se lo", "The armchair? I've given [it to] my nephew.", "Le can't stand next to lo, so le + lo → se lo; a mi sobrino says who se is."),
      fe("¿La alfombra? ___ han dado mis tíos.", "Me la", "The rug? My aunt and uncle gave [it to me].", "Me (to me) + la (la alfombra); the subject mis tíos comes after the verb."),
      toEs("The bed? I'll sell it to them on Monday.", "¿La cama? Se la vendo el lunes.", "Les + la → se la, before the verb.", ["¿La cama? El lunes se la vendo.", "¿La cama? Se la venderé el lunes.", "¿La cama? Se la vendo a ellos el lunes."]),
      toEs("Te presto la furgoneta.", "Te la presto.", "La furgoneta → la, after the person pronoun te: te la presto.", [], "Replace la furgoneta with a pronoun."),
      toEs("Can you (informal) bring it to us on Friday?", "¿Nos lo puedes traer el viernes?", "nos + lo before puedes, or joined: traérnoslo.", ["¿Puedes traérnoslo el viernes?", "¿Nos la puedes traer el viernes?", "¿Puedes traérnosla el viernes?"]),
      toEn("¿El mapa del barrio? Te lo envío por WhatsApp.", "The neighborhood map? I'll send it to you on WhatsApp.", "te + lo.", ["The map of the neighborhood? I'll send it to you by WhatsApp."]),
      mc(
        "\"The plant? I gave it to my mother.\"",
        ["¿La planta? Se la di a mi madre.", "¿La planta? Le la di a mi madre.", "¿La planta? Se lo di a mi madre.", "¿La planta? La se di a mi madre."],
        0,
        "Le → se before la, la agrees with planta, and the person pronoun comes first."
      ),
    ]
  ),
];

/** Where each group goes in the A2 course order (sequencing.ts). The
 * three optional double-pronoun drills move with the new lessons and
 * become required. */
export const A2_PLACES: { slugs: string[]; before: string }[] = [
  {
    slugs: [
      "a2-perfect-he-comido",
      "a2-perfect-irregular-participles",
      "a2-perfect-ya-todavia-alguna-vez",
      "a2-perfect-vs-preterite",
      "a2-perfect-mastery-check",
      "a2-perfect-mission-news",
      "a2-common-words-history-conflict",
    ],
    before: "direct-object-pronouns-1",
  },
  { slugs: ["a2-common-words-praise-complaints"], before: "a2r-error-hunt-pret-imp" },
  { slugs: ["a2-common-words-goals-rules"], before: "asking-giving-directions-1" },
  {
    slugs: [
      "a2-double-pronouns-me-lo",
      "a2d-se-lo-pattern",
      "a2-double-pronouns-infinitive-command",
      "a2d-double-pronoun-infinitive",
      "a2d-qa-double-pronouns",
      "a2-double-pronouns-mission",
    ],
    // The end of the core path, right before the Extra Practice block.
    before: "preterite-drill-1",
  },
];
