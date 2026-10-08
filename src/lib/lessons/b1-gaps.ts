// Synced from cheneygross-afk/lengo:src/lib/lessons/b1-gaps.ts by scripts/sync-content.mjs -- edit it there, not here.
import { anchored, authoring } from "./authoring";
import type { AnchoredLesson } from "./weave";

// B1 lessons that close grammar gaps found by a review of the course
// against the Instituto Cervantes Plan Curricular (B1 inventory): the
// future perfect, the future and conditional of probability, verbal
// periphrases, the subjunctive in relative clauses and the accidental
// se. Taught in Spanish, like the rest of B1. They form their own unit
// after passive and impersonal se (see units.ts).

const { mc, ms, fe, toEs, toEn, wo, mt, sec } = authoring("es");
const L = (
  after: string,
  slug: string,
  title: string,
  summary: string,
  duration: string,
  sections: Parameters<typeof anchored>[6],
  exercises: Parameters<typeof anchored>[7]
) => anchored("B1", after, slug, title, summary, duration, sections, exercises);

export const B1_GAPS: AnchoredLesson[] = [
  L(
    "passive-voice-se-2",
    "b1g-future-perfect",
    "El futuro perfecto: habré terminado",
    "Habré terminado, habrás llegado: acciones que estarán acabadas antes de un momento del futuro, y el futuro perfecto para suponer qué ha pasado.",
    "10 min",
    [
      sec(
        "Forma: habré + participio",
        [
          "El futuro perfecto se forma con el futuro de haber + participio: habré, habrás, habrá, habremos, habréis, habrán + hablado / comido / vivido.",
          "Los participios irregulares son los mismos que en el pretérito perfecto: hecho, dicho, visto, escrito, puesto, vuelto, abierto, roto.",
          "Los pronombres van delante de haber: Ya lo habré hecho. Nunca entre haber y el participio.",
        ],
        [
          ["Para el viernes habré terminado el informe.", "By Friday I'll have finished the report."],
          ["¿Habrás vuelto antes de las diez?", "Will you have come back before ten?"],
          ["En junio ya habremos hecho todos los exámenes.", "In June we'll have already done all the exams."],
          ["Cuando llegues, ya lo habré preparado todo.", "When you arrive, I'll have got everything ready."],
        ],
        [
          fe(
            "Mañana a esta hora ya ___ en Roma.",
            "habremos aterrizado",
            "Tomorrow at this time we [will have landed] in Rome.",
            "Una acción terminada antes de un momento futuro (mañana a esta hora): futuro de haber + participio. «Aterrizaremos» no marca que la acción ya esté acabada.",
            ["habremos llegado"]
          ),
          mc(
            "«Antes de las ocho ___ los deberes.» (yo, hacer)",
            ["habré hecho", "habré hacido", "he hecho", "haré hecho"],
            0,
            "Hacer tiene participio irregular (hecho), y el auxiliar va en futuro: habré. «Haré hecho» pone en futuro el verbo equivocado; «he hecho» es presente perfecto."
          ),
        ]
      ),
      sec(
        "Uso 1: terminado antes de un momento futuro",
        [
          "Usamos el futuro perfecto para una acción que estará acabada antes de otro momento del futuro. Suele ir con para + fecha, antes de, dentro de, cuando + subjuntivo o ya.",
          "Compara: El lunes termino el proyecto (el lunes es el día en que termino) / Para el lunes habré terminado el proyecto (el lunes ya estará acabado).",
          "Con cuando, la oración de cuando va en subjuntivo y la principal en futuro perfecto: Cuando vuelvas, ya habré limpiado la casa.",
        ],
        [
          ["Dentro de un año habré aprendido a conducir.", "In a year's time I'll have learned to drive."],
          ["Para Navidad ya se habrán mudado.", "By Christmas they'll have moved."],
          ["Cuando te despiertes, ya habré salido.", "When you wake up, I'll have already left."],
        ],
        [
          mc(
            "¿Qué frase dice que el viaje estará terminado antes de agosto?",
            ["Para agosto habremos vuelto del viaje.", "En agosto volveremos del viaje.", "En agosto volvimos del viaje.", "Para agosto volvemos del viaje."],
            0,
            "Para + fecha + futuro perfecto: en agosto la vuelta ya será un hecho. «En agosto volveremos» sitúa la vuelta dentro de agosto."
          ),
        ]
      ),
      sec(
        "Uso 2: suponer qué ha pasado",
        [
          "El futuro perfecto también sirve para hacer una suposición sobre algo que ha pasado hace poco, igual que el futuro simple sirve para suponer sobre el presente.",
          "¿Por qué no ha venido Marta? — Se habrá dormido. (= Supongo que se ha dormido / Probablemente se ha dormido.)",
          "Es muy frecuente en la conversación, sobre todo en España, donde el pretérito perfecto es más común. En América también se oye, pero es más frecuente «Se quedaría dormida» o «Seguro que se quedó dormida».",
        ],
        [
          ["No encuentro las llaves. — Las habrás dejado en el coche.", "I can't find my keys. — You've probably left them in the car."],
          ["Juan no contesta. — Habrá salido.", "Juan isn't answering. — He must have gone out."],
          ["¿Quién habrá llamado a estas horas?", "Who could have called at this hour?"],
        ],
        [
          mc(
            "Tu amigo llega tarde y muy contento. ¿Qué suposición es natural?",
            ["Le habrá pasado algo bueno.", "Le ha pasado algo bueno seguro que mañana.", "Le pasará algo bueno.", "Le habría pasado algo bueno ayer."],
            0,
            "Suponer sobre algo que acaba de pasar: futuro perfecto (le habrá pasado = probablemente le ha pasado). «Le pasará» habla del futuro."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona cada frase con su significado.",
        [
          ["Habrá salido.", "He's probably gone out."],
          ["Para las ocho habrá salido.", "He'll have left by eight."],
          ["Saldrá a las ocho.", "He'll leave at eight."],
          ["Ha salido.", "He has gone out."],
        ],
        "El futuro perfecto sirve para acciones acabadas antes de un momento futuro y para suposiciones sobre el pasado reciente."
      ),
      fe(
        "Para el año que viene ya ___ la carrera.",
        "habré terminado",
        "By next year I [will have finished] my degree.",
        "Para + tiempo futuro + acción acabada: futuro perfecto.",
        ["habré acabado"]
      ),
      fe(
        "Cuando llegues a casa, ya ___ la cena.",
        "habré preparado",
        "When you get home, I [will have made] dinner.",
        "Cuando + subjuntivo (llegues) y la principal en futuro perfecto: la cena estará lista antes.",
        ["habré hecho"]
      ),
      fe(
        "Laura no ha venido. ___ el autobús.",
        "Habrá perdido",
        "Laura hasn't come. She [must have missed] the bus.",
        "Suposición sobre algo que acaba de pasar: futuro perfecto. «Perderá» hablaría del futuro."
      ),
      fe(
        "¿Dónde ___ mis gafas? No las veo por ningún lado.",
        "habré puesto",
        "Where [can I have put] my glasses? I can't see them anywhere.",
        "Pregunta que expresa duda sobre el pasado reciente: futuro perfecto. Poner → puesto (irregular).",
        ["habré dejado"]
      ),
      toEs(
        "By Monday I'll have read the book.",
        "Para el lunes habré leído el libro.",
        "Para + momento futuro + habré + participio.",
        ["Para el lunes ya habré leído el libro.", "El lunes ya habré leído el libro.", "Antes del lunes habré leído el libro."]
      ),
      toEs(
        "They've probably left already.",
        "Ya se habrán ido.",
        "Suposición sobre el pasado reciente: futuro perfecto. Irse → se habrán ido.",
        ["Se habrán ido ya.", "Ya habrán salido.", "Habrán salido ya.", "Ya se habrán marchado.", "Seguramente ya se han ido.", "Probablemente ya se han ido."]
      ),
      toEn(
        "Dentro de dos horas habremos llegado a Valencia.",
        "In two hours we'll have arrived in Valencia.",
        "Dentro de + tiempo + futuro perfecto: la llegada será un hecho en ese momento.",
        ["In two hours' time we'll have arrived in Valencia.", "In two hours we will have arrived in Valencia.", "Within two hours we'll have arrived in Valencia.", "In two hours we'll have reached Valencia."]
      ),
      mc(
        "¿Qué frase está bien?",
        ["Ya lo habré hecho.", "Ya habré lo hecho.", "Ya lo haré hecho.", "Ya habré hacido."],
        0,
        "El pronombre va delante del auxiliar (lo habré), el auxiliar va en futuro (habré) y el participio de hacer es hecho."
      ),
      wo(
        "A las cinco ya habrán cerrado la tienda.",
        "Futuro perfecto de cerrar con el sujeto ellos (impersonal): a las cinco la tienda ya estará cerrada.",
        "By five they'll have already closed the shop."
      ),
      ms(
        "¿Qué frases expresan una suposición?",
        ["No contesta; se habrá quedado sin batería.", "Para mayo habré terminado.", "¿Quién habrá dejado esto aquí?", "Mañana habré vuelto."],
        [0, 2],
        "La primera y la tercera suponen qué ha pasado. Las otras dos hablan de acciones terminadas antes de un momento futuro."
      ),
    ]
  ),
  L(
    "passive-voice-se-2",
    "b1g-probability-future-conditional",
    "Serán las tres, estaría cansado: suponer con el futuro y el condicional",
    "Cómo hacer suposiciones sin decir «probablemente»: el futuro para el presente, el futuro perfecto para el pasado reciente y el condicional para el pasado.",
    "10 min",
    [
      sec(
        "El futuro para suponer sobre el presente",
        [
          "En español, el futuro simple no solo habla del futuro: también expresa una suposición sobre el presente. ¿Qué hora es? — No sé, serán las tres (= probablemente son las tres).",
          "Es muy frecuente con ser, estar, tener, haber y saber: Estará en casa. Tendrá unos cuarenta años. Habrá unas cien personas.",
          "En preguntas expresa duda o curiosidad: ¿Dónde estará mi móvil? (= me pregunto dónde está). ¿Quién será a estas horas?",
        ],
        [
          ["No sé qué hora es; serán las tres.", "I don't know what time it is; it must be about three."],
          ["María no contesta. Estará en el metro.", "María isn't answering. She's probably on the metro."],
          ["El profesor nuevo tendrá unos treinta años.", "The new teacher must be about thirty."],
          ["¿Dónde estará mi móvil?", "Where can my phone be?"],
          ["Llaman a la puerta. ¿Quién será?", "Someone's at the door. Who can it be?"],
        ],
        [
          mc(
            "Ves a un hombre con traje y maletín en el aeropuerto. ¿Qué suposición haces?",
            ["Será un hombre de negocios.", "Sería un hombre de negocios.", "Ha sido un hombre de negocios.", "Fue un hombre de negocios."],
            0,
            "Suposición sobre el presente: futuro simple (será = probablemente es). El condicional se usa para suponer sobre el pasado."
          ),
        ]
      ),
      sec(
        "El condicional para suponer sobre el pasado",
        [
          "Si la suposición es sobre un momento del pasado, se usa el condicional: Ayer Juan no vino a clase; estaría enfermo (= probablemente estaba enfermo).",
          "La regla es un paso atrás en el tiempo: presente → futuro (está → estará); imperfecto o indefinido → condicional (estaba / estuvo → estaría); pretérito perfecto → futuro perfecto (ha estado → habrá estado).",
          "¿Qué hora era cuando llegaste? — Serían las once (= probablemente eran las once).",
        ],
        [
          ["Ayer no vino a clase; estaría enfermo.", "He didn't come to class yesterday; he was probably ill."],
          ["Cuando llegué serían las once.", "It must have been about eleven when I arrived."],
          ["Cuando se casó tendría veinte años.", "She must have been about twenty when she got married."],
          ["¿Por qué no me llamaría?", "I wonder why she didn't call me."],
        ],
        [
          fe(
            "Anoche había mucha gente en el concierto. ___ unas dos mil personas.",
            "Habría",
            "There were lots of people at the concert last night. There [must have been] about two thousand people.",
            "Suposición sobre el pasado (anoche): condicional de haber. «Habrá» sería una suposición sobre el presente. «Habrían» no es correcto: haber impersonal va siempre en singular.",
          ),
        ]
      ),
      sec(
        "Otras formas de decirlo",
        [
          "El futuro y el condicional de probabilidad suenan naturales y son muy comunes, pero también puedes usar adverbios: probablemente, seguramente, a lo mejor, igual (coloquial en España), capaz que (coloquial en el Cono Sur).",
          "Con deber de + infinitivo también se expresa suposición: Debe de estar en casa. Debía de tener veinte años. En el habla, mucha gente dice «debe estar» sin de.",
          "Cuidado: no hay que confundir «estará en casa» (suposición) con «estará en casa mañana» (futuro real). El contexto lo aclara.",
        ],
        [
          ["Seguramente está en casa. = Estará en casa.", "He's probably at home."],
          ["A lo mejor se le olvidó. = Se le olvidaría.", "Maybe she forgot."],
          ["Debe de tener unos cincuenta años.", "He must be about fifty."],
        ],
        [
          mc(
            "¿Qué frase significa lo mismo que «Probablemente estaba cansado»?",
            ["Estaría cansado.", "Estará cansado.", "Habrá estado cansado mañana.", "Estuvo cansado."],
            0,
            "Estaba (pasado) → estaría (condicional de probabilidad). Estará sería una suposición sobre ahora."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona cada frase con su equivalente.",
        [
          ["Serán las dos.", "Probablemente son las dos."],
          ["Serían las dos.", "Probablemente eran las dos."],
          ["Habrá llegado.", "Probablemente ha llegado."],
          ["Estará dormido.", "Probablemente está dormido."],
        ],
        "Un paso atrás en el tiempo: presente → futuro, pasado → condicional, pretérito perfecto → futuro perfecto."
      ),
      fe(
        "El bebé llora mucho. ___ hambre.",
        "Tendrá",
        "The baby is crying a lot. He [must be] hungry.",
        "Suposición sobre el presente: futuro de tener (tendrá = probablemente tiene)."
      ),
      fe(
        "No sé cuánto cuesta ese coche; ___ unos treinta mil euros.",
        "costará",
        "I don't know how much that car costs; it [must cost] about thirty thousand euros.",
        "Suposición sobre el presente con un número aproximado: futuro."
      ),
      fe(
        "Cuando nos conocimos, yo ___ dieciocho años.",
        "tendría",
        "When we met, I [must have been] eighteen.",
        "Suposición sobre la edad en un momento del pasado: condicional. En inglés se usa «to be» para la edad, pero en español es tener."
      ),
      fe(
        "Ayer Marcos estaba muy callado. ___ preocupado por algo.",
        "Estaría",
        "Marcos was very quiet yesterday. He [must have been] worried about something.",
        "Estaba (pasado) → estaría: suposición sobre el pasado con condicional."
      ),
      toEs(
        "Where can my keys be?",
        "¿Dónde estarán mis llaves?",
        "Pregunta de duda sobre el presente: futuro de estar (estarán, porque llaves es plural).",
        ["¿Dónde estarán las llaves?", "¿Dónde pueden estar mis llaves?", "¿Dónde podrán estar mis llaves?"]
      ),
      toEs(
        "It must have been about ten when she called.",
        "Serían las diez cuando llamó.",
        "Suposición sobre la hora en el pasado: condicional de ser (serían las diez).",
        ["Cuando llamó serían las diez.", "Cuando llamó, serían las diez.", "Serían más o menos las diez cuando llamó.", "Serían sobre las diez cuando llamó."]
      ),
      toEn(
        "Habrá mucho tráfico; por eso no ha llegado.",
        "There's probably a lot of traffic; that's why he hasn't arrived.",
        "Habrá = probablemente hay (suposición sobre el presente).",
        ["There must be a lot of traffic; that's why he hasn't arrived.", "There must be heavy traffic; that's why he hasn't arrived.", "There's probably a lot of traffic; that's why she hasn't arrived.", "There must be a lot of traffic; that's why she hasn't arrived.", "There must be a lot of traffic, that's why he hasn't arrived yet."]
      ),
      mc(
        "El teléfono sonó a medianoche. Al día siguiente dices: «¿Quién ___ a esas horas?»",
        ["llamaría", "llamará", "llama", "llamó seguro"],
        0,
        "Te preguntas algo sobre el pasado (anoche): condicional. «Llamará» expresaría duda sobre el presente o el futuro."
      ),
      wo(
        "No encuentro a Pedro; estará en la biblioteca.",
        "Estará = probablemente está: suposición sobre el presente.",
        "I can't find Pedro; he's probably in the library."
      ),
      ms(
        "¿Qué frases expresan una suposición sobre el pasado?",
        ["Estaría cansada.", "Serían las cinco.", "Estará cansada.", "Tendría prisa.", "Mañana será lunes."],
        [0, 1, 3],
        "El condicional (estaría, serían, tendría) supone sobre el pasado. Estará cansada supone sobre el presente, y «mañana será lunes» es un futuro real."
      ),
    ]
  ),
  L(
    "passive-voice-se-2",
    "b1g-periphrases-infinitive",
    "Perífrasis con infinitivo: acabar de, volver a, dejar de, ponerse a",
    "Verbo + preposición + infinitivo para decir que algo acaba de pasar, se repite, se interrumpe o empieza de golpe: acabo de llegar, volvió a llamar, dejé de fumar, se echó a reír.",
    "10 min",
    [
      sec(
        "Ir a y acabar de: justo antes y justo después",
        [
          "Ya conoces ir a + infinitivo para planes e intenciones: Voy a llamar a mi madre. En el pasado, iba a + infinitivo es un plan que no se cumplió: Iba a llamarte, pero se me hizo tarde.",
          "Acabar de + infinitivo significa que algo ha pasado hace muy poco: Acabo de llegar = I've just arrived. En pasado: Acababa de salir cuando empezó a llover (I had just gone out).",
          "Cuidado: acabar + gerundio o acabar por + infinitivo significan «terminar haciendo algo»: Acabé comprando el más caro.",
        ],
        [
          ["Acabo de ver a tu hermano en el mercado.", "I've just seen your brother at the market."],
          ["El tren acaba de salir.", "The train has just left."],
          ["Iba a llamarte, pero se me hizo tarde.", "I was going to call you, but it got late."],
          ["Acababa de ducharme cuando sonó el timbre.", "I had just showered when the doorbell rang."],
        ],
        [
          fe(
            "¿Tienes hambre? — No, ___ comer.",
            "acabo de",
            "Are you hungry? — No, I've [just] eaten.",
            "Acabar de + infinitivo = acción muy reciente. En español se usa el presente (acabo de comer) donde el inglés usa «have just»."
          ),
        ]
      ),
      sec(
        "Volver a y dejar de: repetir y parar",
        [
          "Volver a + infinitivo = hacer algo otra vez: Volvió a llamar (he called again). Es más natural que «llamó otra vez», aunque las dos son correctas.",
          "Dejar de + infinitivo = parar, abandonar una costumbre: Dejé de fumar hace dos años. En negativo, no dejar de = seguir, no olvidar: No dejes de visitar el museo (make sure you visit).",
          "Volver a también expresa promesas: No volverá a pasar = It won't happen again.",
        ],
        [
          ["¿Puedes volver a explicarlo?", "Can you explain it again?"],
          ["Perdón, no volverá a pasar.", "Sorry, it won't happen again."],
          ["Mi padre dejó de fumar el año pasado.", "My father stopped smoking last year."],
          ["Ha dejado de llover.", "It's stopped raining."],
          ["No dejes de probar el gazpacho.", "Make sure you try the gazpacho."],
        ],
        [
          mc(
            "«I've stopped drinking coffee in the evening.»",
            ["He dejado de tomar café por la tarde.", "He parado tomando café por la tarde.", "He dejado tomar café por la tarde.", "He vuelto a tomar café por la tarde."],
            0,
            "Dejar de + infinitivo = stop doing. Sin «de» cambia el sentido (dejar tomar = permitir tomar), y volver a significa hacerlo otra vez."
          ),
        ]
      ),
      sec(
        "Empezar a, ponerse a, echarse a: empezar",
        [
          "Empezar a / comenzar a + infinitivo = empezar algo, de forma neutra: Empecé a estudiar español en 2020.",
          "Ponerse a + infinitivo = empezar una actividad, a menudo de repente o con decisión: Llegó a casa y se puso a cocinar. Me puse a llorar.",
          "Echarse a + infinitivo = empezar de golpe, casi solo con reír, llorar, correr y temblar: Se echó a reír. Los niños se echaron a correr.",
        ],
        [
          ["Empezó a llover a las cinco.", "It started raining at five."],
          ["Después de cenar, se puso a ver una serie.", "After dinner he started watching a series."],
          ["Cuando vio el regalo, se echó a llorar de alegría.", "When she saw the present, she burst into tears of joy."],
          ["Al oír el chiste, todos se echaron a reír.", "When they heard the joke, everyone burst out laughing."],
        ],
        [
          mc(
            "«When he saw the dog, the boy suddenly started running.»",
            ["Al ver el perro, el niño se echó a correr.", "Al ver el perro, el niño se echó correr.", "Al ver el perro, el niño echó a correr de él.", "Al ver el perro, el niño dejó de correr."],
            0,
            "Echarse a + infinitivo = empezar de golpe, muy típico con correr, reír y llorar. Necesita la preposición a."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona cada perífrasis con su significado.",
        [
          ["acabar de + inf.", "to have just done"],
          ["volver a + inf.", "to do again"],
          ["dejar de + inf.", "to stop doing"],
          ["echarse a + inf.", "to burst out doing"],
          ["ir a + inf.", "to be going to do"],
        ],
        "Cada perífrasis tiene su preposición fija: acabar DE, volver A, dejar DE, echarse A, ir A."
      ),
      fe(
        "Perdona, ¿puedes ___ repetir el número?",
        "volver a",
        "Sorry, can you repeat the number [again]?",
        "Volver a + infinitivo = hacer algo otra vez. También se oye «repetir otra vez», aunque es redundante.",
        ["volverme a"]
      ),
      fe(
        "Mi hermana ___ comer carne hace un año.",
        "dejó de",
        "My sister [stopped] eating meat a year ago.",
        "Dejar de + infinitivo = abandonar una costumbre. Indefinido porque es un cambio en un momento concreto."
      ),
      fe(
        "¿Dónde está Ana? — ___ salir, llámala al móvil.",
        "Acaba de",
        "Where's Ana? — She's [just] gone out, call her mobile.",
        "Acabar de + infinitivo = hace un momento. En presente: acaba de salir."
      ),
      fe(
        "Llegué a casa, me senté en el sofá y ___ ver la tele.",
        "me puse a",
        "I got home, sat down on the sofa and [started] watching TV.",
        "Ponerse a + infinitivo = empezar una actividad. Es reflexivo: me puse a.",
        ["empecé a"]
      ),
      toEs(
        "I've just finished the book.",
        "Acabo de terminar el libro.",
        "Acabar de + infinitivo en presente para algo muy reciente.",
        ["Acabo de acabar el libro.", "Justo he terminado el libro.", "Acabo de terminarme el libro.", "Recién terminé el libro."]
      ),
      toEs(
        "It won't happen again.",
        "No volverá a pasar.",
        "Volver a + infinitivo en futuro: la promesa típica al pedir perdón.",
        ["No va a volver a pasar.", "No volverá a ocurrir.", "No va a volver a ocurrir.", "Esto no volverá a pasar."]
      ),
      toEn(
        "Iba a comprar pan, pero la panadería estaba cerrada.",
        "I was going to buy bread, but the bakery was closed.",
        "Iba a + infinitivo = un plan del pasado que no se realizó.",
        ["I was going to buy some bread, but the bakery was closed.", "I was going to get bread, but the bakery was closed.", "I was going to buy bread but the bakery was closed."]
      ),
      mc(
        "«Empezó a llover» y «Se puso a llover»: ¿son posibles las dos?",
        ["Sí, las dos son correctas; ponerse a suena más repentino.", "Solo «empezó a llover».", "Solo «se puso a llover».", "Ninguna: hay que decir «empezó llover»."],
        0,
        "Las dos existen. Empezar a es neutro; ponerse a sugiere que empezó de pronto. Siempre con la preposición a."
      ),
      wo(
        "Cuando oyó la noticia se echó a llorar.",
        "Echarse a + llorar: empezar a llorar de repente.",
        "When she heard the news she burst into tears."
      ),
      ms(
        "¿Qué frases significan que la acción se repite?",
        ["Volvió a llamar.", "Llamó otra vez.", "Dejó de llamar.", "Acaba de llamar."],
        [0, 1],
        "Volver a + infinitivo y «otra vez» indican repetición. Dejar de = parar; acabar de = hace muy poco."
      ),
    ]
  ),
  L(
    "passive-voice-se-2",
    "b1g-periphrases-gerund",
    "Seguir, llevar y andar + gerundio: sigo esperando, llevo un año aquí",
    "Perífrasis con gerundio para acciones que continúan o que duran: sigo viviendo en Sevilla, llevo dos horas esperando, llevo un año en Chile, sigo sin entenderlo.",
    "10 min",
    [
      sec(
        "Seguir + gerundio: todavía",
        [
          "Seguir / continuar + gerundio = una acción que continúa, que todavía pasa: Sigo viviendo en Sevilla (I still live in Seville). Es la forma más natural de decir «still» con un verbo.",
          "Seguir es irregular (e → i): sigo, sigues, sigue, seguimos, seguís, siguen.",
          "En negativo se usa seguir sin + infinitivo: Sigo sin entenderlo (I still don't understand it). Sigue sin llamar (he still hasn't called).",
        ],
        [
          ["¿Sigues trabajando en el banco?", "Are you still working at the bank?"],
          ["Sigue lloviendo.", "It's still raining."],
          ["Mis abuelos siguen viviendo en el pueblo.", "My grandparents still live in the village."],
          ["Sigo sin encontrar las llaves.", "I still haven't found the keys."],
        ],
        [
          fe(
            "Han pasado diez años y ___ en contacto con mis compañeros del colegio.",
            "sigo",
            "Ten years have passed and I'm [still] in touch with my school friends.",
            "Seguir + estado o lugar (seguir en contacto) también expresa continuidad. Yo sigo: e → i."
          ),
          mc(
            "«I still don't know the answer.»",
            ["Sigo sin saber la respuesta.", "Sigo no sabiendo la respuesta.", "Todavía sé no la respuesta.", "Sigo sabiendo no la respuesta."],
            0,
            "Para la continuidad en negativo, lo natural es seguir sin + infinitivo. También vale «todavía no sé la respuesta»."
          ),
        ]
      ),
      sec(
        "Llevar + tiempo + gerundio: cuánto tiempo",
        [
          "Llevar + cantidad de tiempo + gerundio dice cuánto tiempo dura algo que todavía continúa: Llevo dos horas esperando = I've been waiting for two hours.",
          "Es igual que hace... que + presente: Llevo tres años estudiando español = Hace tres años que estudio español.",
          "Sin gerundio, llevar + tiempo + lugar o estado también funciona: Llevo un año en Chile. Llevamos casados diez años.",
          "En negativo: llevar + tiempo + sin + infinitivo: Llevo una semana sin dormir bien (I haven't slept well for a week).",
        ],
        [
          ["Llevo dos horas esperando el autobús.", "I've been waiting for the bus for two hours."],
          ["¿Cuánto tiempo llevas estudiando español?", "How long have you been studying Spanish?"],
          ["Llevamos un año en esta ciudad.", "We've been in this city for a year."],
          ["Llevo tres días sin ver a mi hermano.", "I haven't seen my brother for three days."],
        ],
        [
          mc(
            "«She's been living in Lima for five years.»",
            ["Lleva cinco años viviendo en Lima.", "Lleva viviendo en Lima desde cinco años.", "Ha llevado cinco años vivir en Lima.", "Lleva cinco años a vivir en Lima."],
            0,
            "Llevar + tiempo + gerundio. El verbo llevar va en presente porque la acción continúa. También posible: Lleva viviendo cinco años en Lima."
          ),
        ]
      ),
      sec(
        "Andar e ir + gerundio: más matices",
        [
          "Ir + gerundio = un proceso poco a poco: Voy entendiendo el subjuntivo (I'm gradually getting the hang of it). La ciudad va creciendo.",
          "Andar + gerundio = hacer algo de manera repetida o sin orden, a menudo con un tono crítico o coloquial: Anda diciendo que se va a casar. ¿Qué andas haciendo? (coloquial, muy común en México y Centroamérica).",
          "Estar + gerundio (estoy leyendo) ya lo conoces: la acción en progreso. Las otras perífrasis añaden un matiz de tiempo o de modo.",
        ],
        [
          ["Poco a poco voy mejorando mi pronunciación.", "Little by little I'm improving my pronunciation."],
          ["Los precios van subiendo cada año.", "Prices keep going up every year."],
          ["Anda contando a todo el mundo que le tocó la lotería.", "He's going around telling everyone he won the lottery."],
        ],
        [
          mc(
            "¿Qué frase expresa un progreso gradual?",
            ["Voy aprendiendo a cocinar.", "Acabo de aprender a cocinar.", "Dejé de aprender a cocinar.", "Vuelvo a aprender a cocinar."],
            0,
            "Ir + gerundio = poco a poco. Acabar de = hace un momento; dejar de = parar; volver a = otra vez."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona cada frase con su significado.",
        [
          ["Sigo trabajando aquí.", "I still work here."],
          ["Llevo un año trabajando aquí.", "I've been working here for a year."],
          ["Voy trabajando más rápido.", "I'm gradually working faster."],
          ["Sigo sin trabajo.", "I still don't have a job."],
        ],
        "Seguir = todavía; llevar + tiempo = cuánto tiempo; ir + gerundio = poco a poco; seguir sin = todavía no."
      ),
      fe(
        "___ media hora buscando aparcamiento.",
        "Llevamos",
        "We've [been] looking for a parking space for half an hour.",
        "Llevar + tiempo + gerundio, en presente porque la búsqueda continúa. Nosotros: llevamos.",
      ),
      fe(
        "¿Tu hermano ___ viviendo en Londres?",
        "sigue",
        "Is your brother [still] living in London?",
        "Seguir + gerundio = still. Tercera persona: sigue (e → i)."
      ),
      fe(
        "Mi vecino ___ sin devolverme la escalera.",
        "sigue",
        "My neighbour [still hasn't] given me back the ladder.",
        "Seguir sin + infinitivo = todavía no ha hecho algo."
      ),
      fe(
        "Llevo dos semanas ___ tomar café, y me siento mejor.",
        "sin",
        "I've gone two weeks [without] drinking coffee, and I feel better.",
        "Llevar + tiempo + sin + infinitivo: algo que no has hecho durante ese tiempo."
      ),
      toEs(
        "How long have you been living here?",
        "¿Cuánto tiempo llevas viviendo aquí?",
        "Llevar + gerundio en la pregunta: ¿cuánto tiempo llevas...?",
        ["¿Cuánto llevas viviendo aquí?", "¿Cuánto tiempo hace que vives aquí?", "¿Desde cuándo vives aquí?", "¿Cuánto tiempo lleva viviendo aquí?", "¿Cuánto tiempo lleva usted viviendo aquí?"]
      ),
      toEs(
        "It's still raining.",
        "Sigue lloviendo.",
        "Seguir + gerundio es la forma más natural de «still» con un verbo.",
        ["Todavía está lloviendo.", "Está lloviendo todavía.", "Aún está lloviendo.", "Sigue lloviendo todavía.", "Todavía llueve."]
      ),
      toEn(
        "Llevamos diez años casados.",
        "We've been married for ten years.",
        "Llevar + tiempo + estado (casados): cuánto tiempo dura algo que continúa.",
        ["We have been married for ten years.", "We've been married ten years."]
      ),
      mc(
        "¿Qué frase es incorrecta?",
        ["Llevo esperando desde dos horas.", "Llevo dos horas esperando.", "Llevo esperando dos horas.", "Hace dos horas que espero."],
        0,
        "Con llevar la cantidad de tiempo va sin preposición. «Desde» se usa con un momento de inicio (desde las cinco), no con una duración."
      ),
      wo(
        "Poco a poco voy entendiendo a los nativos.",
        "Ir + gerundio: progreso gradual.",
        "Little by little I'm starting to understand native speakers."
      ),
      ms(
        "¿Qué frases dicen que la acción todavía continúa?",
        ["Sigo estudiando.", "Llevo un año estudiando.", "Dejé de estudiar.", "Acabo de estudiar."],
        [0, 1],
        "Seguir + gerundio y llevar + gerundio hablan de algo que continúa. Dejar de y acabar de hablan de un final."
      ),
    ]
  ),
  L(
    "passive-voice-se-2",
    "b1g-subjunctive-relative-clauses",
    "Busco a alguien que hable inglés: el subjuntivo en oraciones de relativo",
    "Indicativo si la persona o la cosa existe y la conoces; subjuntivo si la buscas, la imaginas o dices que no existe: busco un piso que tenga terraza, no hay nadie que lo sepa.",
    "10 min",
    [
      sec(
        "¿Existe o no lo sé?",
        [
          "Después de «que» en una oración de relativo, el modo depende del antecedente (la persona o cosa de la que hablamos).",
          "Si sabes que existe y es concreta, indicativo: Tengo un piso que tiene terraza. Conozco a una chica que habla japonés.",
          "Si no sabes si existe, la buscas o la deseas, subjuntivo: Busco un piso que tenga terraza. Necesito a alguien que hable japonés.",
          "Por eso, en los anuncios de trabajo y de pisos se ve mucho subjuntivo: Se busca camarero que tenga experiencia.",
        ],
        [
          ["Vivo en un piso que tiene mucha luz.", "I live in a flat that has lots of light."],
          ["Busco un piso que tenga mucha luz.", "I'm looking for a flat that has lots of light."],
          ["Tengo un amigo que sabe arreglar ordenadores.", "I have a friend who knows how to fix computers."],
          ["¿Conoces a alguien que sepa arreglar ordenadores?", "Do you know anyone who can fix computers?"],
        ],
        [
          mc(
            "«Queremos un hotel que ___ cerca de la playa.» (todavía no lo hemos reservado)",
            ["esté", "está", "estará", "estaba"],
            0,
            "Un hotel que buscamos, no uno concreto que ya conocemos: subjuntivo (esté). Con «Nos alojamos en un hotel que está cerca de la playa» sería indicativo."
          ),
        ]
      ),
      sec(
        "No hay nadie que..., no conozco a nadie que...",
        [
          "Si niegas que exista algo, también va subjuntivo: No hay nadie que lo sepa. No tengo ningún amigo que viva en Madrid. No hay nada que me guste más.",
          "Lo mismo con preguntas sobre si existe: ¿Hay alguien aquí que hable inglés? ¿Tienes algo que sea más barato?",
          "Con poco / pocos también es frecuente: Hay pocas personas que lo entiendan.",
        ],
        [
          ["No hay nadie que cocine como mi abuela.", "There's nobody who cooks like my grandma."],
          ["No conozco a nadie que viva en ese barrio.", "I don't know anyone who lives in that neighbourhood."],
          ["¿Hay alguna farmacia que esté abierta ahora?", "Is there a pharmacy that's open now?"],
          ["¿Tiene algún abrigo que sea más ligero?", "Do you have a coat that's lighter?"],
        ],
        [
          fe(
            "En mi familia no hay nadie que ___ tocar el piano.",
            "sepa",
            "In my family there's nobody who [can] play the piano.",
            "No hay nadie que...: el antecedente no existe, así que subjuntivo. Saber → sepa (irregular)."
          ),
        ]
      ),
      sec(
        "La a personal y el artículo son pistas",
        [
          "Con una persona conocida se usa la a personal: Busco a la chica que vive en el tercero (la conozco, existe: indicativo).",
          "Con una persona desconocida, muchas veces sin a: Busco una chica que sepa alemán para un trabajo (cualquiera que cumpla la condición: subjuntivo). Con alguien y nadie, la a siempre aparece: Busco a alguien que...",
          "El artículo también ayuda: el / la + indicativo suele ser concreto; un / una + subjuntivo suele ser «cualquiera».",
          "Verás mucho más sobre esto en el nivel Avanzado. Por ahora, recuerda la pregunta clave: ¿existe y lo conozco?",
        ],
        [
          ["Busco a la profesora que da clase de yoga.", "I'm looking for the teacher who teaches yoga. (a specific one)"],
          ["Busco una profesora que dé clases de yoga.", "I'm looking for a teacher who teaches yoga. (any one)"],
          ["Quiero el vestido que vi ayer.", "I want the dress I saw yesterday."],
          ["Quiero un vestido que no sea muy caro.", "I want a dress that isn't too expensive."],
        ],
        [
          mc(
            "¿Qué frase habla de una persona concreta?",
            ["Busco al chico que trabaja en la biblioteca.", "Busco un chico que trabaje en la biblioteca.", "¿Hay algún chico que trabaje en la biblioteca?", "No hay ningún chico que trabaje en la biblioteca."],
            0,
            "Al chico (a personal + artículo definido) + indicativo: sabes quién es. Las otras hablan de alguien que no sabes si existe, o que no existe."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona cada principio con su final.",
        [
          ["Tengo un compañero que", "habla cuatro idiomas."],
          ["Busco un compañero que", "hable cuatro idiomas."],
          ["No hay ningún compañero que", "hable cuatro idiomas."],
          ["¿Hay algún compañero que", "hable cuatro idiomas?"],
        ],
        "Indicativo si el antecedente existe y es conocido; subjuntivo si se busca, se pregunta por él o se niega."
      ),
      fe(
        "Necesitamos un piso que ___ tres habitaciones.",
        "tenga",
        "We need a flat that [has] three bedrooms.",
        "Un piso que necesitamos, no uno concreto: subjuntivo de tener (tenga)."
      ),
      fe(
        "Mi hermano vive en un piso que ___ tres habitaciones.",
        "tiene",
        "My brother lives in a flat that [has] three bedrooms.",
        "El piso existe y lo conocemos: indicativo (tiene)."
      ),
      fe(
        "¿Hay algún restaurante por aquí que ___ abierto a medianoche?",
        "esté",
        "Is there any restaurant around here that [is] open at midnight?",
        "Preguntas si existe: subjuntivo. Estar → esté."
      ),
      fe(
        "No encuentro ningún vuelo que ___ menos de cien euros.",
        "cueste",
        "I can't find any flight that [costs] less than a hundred euros.",
        "Niegas que exista (ningún vuelo): subjuntivo. Costar (o → ue) → cueste."
      ),
      toEs(
        "I'm looking for someone who speaks French.",
        "Busco a alguien que hable francés.",
        "Alguien que no conoces: subjuntivo (hable). Con alguien siempre va la a personal.",
        ["Estoy buscando a alguien que hable francés.", "Necesito a alguien que hable francés."]
      ),
      toEs(
        "There's nothing I like more.",
        "No hay nada que me guste más.",
        "No hay nada que + subjuntivo: niegas que exista.",
        ["No hay nada que me guste más que eso."]
      ),
      toEn(
        "¿Conoces a alguien que alquile bicicletas?",
        "Do you know anyone who rents bikes?",
        "Preguntas si existe esa persona: subjuntivo en español; en inglés no cambia el verbo.",
        ["Do you know anyone who rents bicycles?", "Do you know somebody who rents bikes?", "Do you know someone who rents out bikes?", "Do you know anyone who rents out bikes?", "Do you know someone who rents bikes?"]
      ),
      mc(
        "«Quiero comprar el libro que me ___ la semana pasada.»",
        ["recomendaste", "recomendaras", "recomiendes", "recomiende"],
        0,
        "El libro (artículo definido) es uno concreto que ya existe: me lo recomendaste. Indicativo."
      ),
      wo(
        "Se busca camarero que tenga experiencia.",
        "Anuncio de trabajo: cualquier camarero que cumpla la condición, así que subjuntivo.",
        "Waiter with experience wanted."
      ),
      ms(
        "¿Qué frases están bien?",
        ["No hay nadie que me entienda.", "Tengo una vecina que tenga perro.", "Busco un móvil que sea resistente.", "Conozco un bar que pone buena música."],
        [0, 2, 3],
        "«Tengo una vecina que tiene perro»: la vecina existe, así que indicativo. Las otras son correctas: negación y búsqueda con subjuntivo, bar conocido con indicativo."
      ),
    ]
  ),
  L(
    "passive-voice-se-2",
    "b1g-accidental-se",
    "Se me olvidó: el se accidental",
    "Se me olvidó, se le cayó el vaso, se nos rompió la tele: cómo contar accidentes y despistes sin echarte la culpa.",
    "10 min",
    [
      sec(
        "La estructura: se + me/te/le... + verbo",
        [
          "Para hablar de cosas que pasan sin querer, el español usa se + pronombre de objeto indirecto + verbo: Se me olvidaron las llaves. Se le cayó el vaso.",
          "La cosa es el sujeto gramatical, así que el verbo concuerda con ella: se me rompió el plato (singular), se me rompieron los platos (plural).",
          "El pronombre indica a quién le pasó: se me (a mí), se te (a ti), se le (a él / ella / usted), se nos (a nosotros), se os (a vosotros), se les (a ellos / ustedes).",
          "Los verbos más comunes: olvidar, caer, romper, perder, acabar, quemar, escapar, ocurrir, estropear.",
        ],
        [
          ["Se me olvidó tu cumpleaños. ¡Lo siento!", "I forgot your birthday. Sorry!"],
          ["A Pedro se le cayó el móvil al agua.", "Pedro dropped his phone in the water."],
          ["Se nos acabó la leche.", "We've run out of milk."],
          ["Se me rompieron las gafas.", "My glasses broke."],
          ["Se les perdió el perro en el parque.", "They lost their dog in the park."],
        ],
        [
          mc(
            "«I forgot the tickets.»",
            ["Se me olvidaron las entradas.", "Se me olvidó las entradas.", "Me se olvidaron las entradas.", "Se olvidé las entradas."],
            0,
            "Las entradas es el sujeto (plural), así que olvidaron. El orden es siempre se + me, nunca «me se»."
          ),
        ]
      ),
      sec(
        "¿Por qué no «olvidé» o «rompí»?",
        [
          "Olvidé las llaves y se me olvidaron las llaves son correctas, pero no dicen lo mismo. Con el se accidental, la acción parece algo que te pasó, no algo que hiciste.",
          "Compara: Rompí el plato (puede sonar a que lo hiciste a propósito o que asumes la acción) / Se me rompió el plato (fue un accidente).",
          "Por eso es tan útil para disculparse: Perdón, se me hizo tarde. Se me pasó la hora. Se me fue la cabeza (I lost my train of thought).",
          "Para dar énfasis o aclarar quién, añade a + persona: A mí se me olvidó, pero a ella no.",
        ],
        [
          ["Perdona, se me hizo tarde.", "Sorry, I lost track of time."],
          ["Se me pasó llamarte.", "I forgot to call you."],
          ["A mi hermana se le quemó el arroz.", "My sister burnt the rice."],
          ["¿Se te ocurre alguna idea?", "Can you think of any idea?"],
        ],
        [
          mc(
            "Un niño juega con una pelota en casa y rompe una ventana. ¿Cómo lo cuenta para quitarle importancia?",
            ["Se me rompió la ventana.", "Rompí la ventana a propósito.", "Me rompí la ventana.", "La ventana me rompió."],
            0,
            "Con se me rompió presenta el hecho como un accidente. «Me rompí la ventana» no es natural (me rompí se usa con partes del cuerpo: me rompí el brazo)."
          ),
        ]
      ),
      sec(
        "Con infinitivos y en otros tiempos",
        [
          "Olvidarse de algo también sirve: Me olvidé de las llaves. Las tres formas son correctas: Olvidé las llaves / Me olvidé de las llaves / Se me olvidaron las llaves.",
          "Con un infinitivo, el verbo va en singular: Se me olvidó comprar pan. Se nos olvidó llamar.",
          "Funciona en todos los tiempos: Siempre se me olvida el paraguas. Si no tienes cuidado, se te va a caer. ¡Que no se te olvide!",
        ],
        [
          ["Se me olvidó comprar pan.", "I forgot to buy bread."],
          ["Siempre se me olvidan las contraseñas.", "I always forget my passwords."],
          ["Cuidado, que se te va a caer el café.", "Careful, you're going to drop your coffee."],
          ["¡Que no se te olvide el pasaporte!", "Don't forget your passport!"],
        ],
        [
          fe(
            "Ayer se nos ___ llamar a la abuela.",
            "olvidó",
            "Yesterday we [forgot] to call grandma.",
            "Con un infinitivo (llamar) como sujeto, el verbo va en singular: se nos olvidó."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona cada frase con su significado.",
        [
          ["Se me cayó.", "I dropped it."],
          ["Se nos acabó.", "We ran out of it."],
          ["Se le rompió.", "It broke on him."],
          ["Se te olvidó.", "You forgot it."],
          ["Se les perdió.", "They lost it."],
        ],
        "Se + pronombre de a quién le pasa + verbo que concuerda con la cosa."
      ),
      fe(
        "Lo siento, se me ___ los documentos en casa.",
        "olvidaron",
        "I'm sorry, I [forgot] the documents at home.",
        "Los documentos es plural, así que el verbo va en plural: se me olvidaron.",
        ["quedaron"]
      ),
      fe(
        "A Lucía se ___ cayó la taza.",
        "le",
        "Lucía [dropped] her cup.",
        "A Lucía = a ella, así que se le. La a + persona se repite con el pronombre."
      ),
      fe(
        "¿Hay pan? — No, se nos ___.",
        "acabó",
        "Is there any bread? — No, we've [run out].",
        "Acabarse = terminarse sin querer. El pan (singular): se nos acabó.",
        ["terminó"]
      ),
      fe(
        "Cuidado con ese vaso, que se te va a ___.",
        "caer",
        "Careful with that glass, you're going to [drop] it.",
        "Ir a + infinitivo con el se accidental: se te va a caer."
      ),
      toEs(
        "I lost my keys.",
        "Se me perdieron las llaves.",
        "Llaves es plural: se me perdieron. También es correcto «Perdí las llaves».",
        ["Perdí las llaves.", "Perdí mis llaves.", "He perdido las llaves.", "Se me han perdido las llaves."]
      ),
      toEs(
        "We forgot to buy water.",
        "Se nos olvidó comprar agua.",
        "Con infinitivo, el verbo va en singular: se nos olvidó.",
        ["Nos olvidamos de comprar agua.", "Olvidamos comprar agua.", "Se nos ha olvidado comprar agua.", "Se nos olvidó comprar el agua."]
      ),
      toEn(
        "Se me ocurrió una idea genial.",
        "I had a great idea.",
        "Ocurrírsele algo a alguien = tener una idea de repente.",
        ["A great idea occurred to me.", "I came up with a great idea.", "I had a brilliant idea.", "A brilliant idea occurred to me.", "I thought of a great idea."]
      ),
      mc(
        "¿Qué frase está bien?",
        ["Se me rompieron los pantalones.", "Me se rompieron los pantalones.", "Se me rompió los pantalones.", "Se rompí los pantalones."],
        0,
        "Orden se + me, y el verbo concuerda con los pantalones (plural): rompieron."
      ),
      wo(
        "Se le cayeron las llaves en el metro.",
        "Las llaves es el sujeto (plural): se le cayeron.",
        "He dropped his keys on the metro."
      ),
      ms(
        "¿Qué frases presentan el hecho como un accidente?",
        ["Se me quemó la tostada.", "Quemé la carta en la chimenea.", "Se nos estropeó el coche.", "Se le escapó el gato."],
        [0, 2, 3],
        "Las tres con se + pronombre presentan el hecho como algo que pasó sin querer. «Quemé la carta» es una acción voluntaria."
      ),
    ]
  ),
];
