// Synced from cheneygross-afk/lengo:src/lib/lessons/level-test-b1.ts by scripts/sync-content.mjs -- edit it there, not here.
import { authoring } from "./authoring";
import { dict, wr } from "./skills-authoring";
import { listeningItems, readingSection, type LevelTest } from "./level-test-authoring";

// The B1 level test (see level-tests.ts): only B1 material -- the present
// and past perfect, the present subjunctive (wishes, doubt, emotion,
// impersonal expressions, ojalá), commands, the conditional, si + present,
// relatives, passive and impersonal se, the future perfect, accidental se,
// acabar de, combined pronouns and possessive pronouns. No imperfect
// subjunctive and no subjunctive in relative or time clauses (B2).
const { fe, sec } = authoring("es");

export const LEVEL_TEST_B1: LevelTest = {
  title: "Prueba de nivel Intermedio: ¿listo para el nivel Avanzado?",
  summary:
    "La prueba final del nivel Intermedio: comprensión de lectura y auditiva, gramática y vocabulario escribiendo en español, y un correo. 46 preguntas sobre lo que enseña de nivel Intermedio; se aprueba con un 70%.",
  duration: "50 min",
  sections: [
    readingSection(
      "Parte 1 · Lectura: un blog",
      "Lee el texto y contesta las cinco preguntas.",
      [
        "Hace un año que trabajo desde casa y me han preguntado muchas veces si lo recomiendo. La respuesta corta es que sí, pero con condiciones.",
        "Al principio no tenía horario: empezaba tarde, comía delante del ordenador y terminaba a las diez de la noche. Ahora me levanto a la misma hora todos los días y no enciendo el ordenador hasta que he desayunado. Lo que más echo de menos es charlar con mis compañeros, así que una vez a la semana voy a una oficina compartida.",
        "Si estás pensando en trabajar desde casa, te aconsejo que crees una rutina y que salgas de casa al menos una vez al día. Y, sobre todo, no trabajes en pijama: parece una tontería, pero cambia mucho cómo te sientes.",
      ],
      [
        [
          "¿Qué opina el autor de trabajar desde casa?",
          ["Lo recomienda, pero con condiciones", "No lo recomienda", "Le parece perfecto sin condiciones", "Quiere volver a la oficina"],
          "«La respuesta corta es que sí, pero con condiciones.»",
        ],
        [
          "¿Qué problema tenía al principio?",
          ["No tenía horario", "Su ordenador no funcionaba", "No tenía trabajo", "Trabajaba demasiado poco"],
          "«Al principio no tenía horario: empezaba tarde… y terminaba a las diez de la noche.»",
        ],
        [
          "¿Por qué va una vez a la semana a una oficina compartida?",
          ["Porque echa de menos hablar con otras personas", "Porque su casa es pequeña", "Porque se lo pide su jefe", "Porque allí tiene mejor internet"],
          "«Lo que más echo de menos es charlar con mis compañeros, así que…»",
        ],
        [
          "¿Qué consejo da?",
          ["Crear una rutina y salir de casa cada día", "Trabajar por la noche", "Comer delante del ordenador", "Trabajar en pijama para estar cómodo"],
          "«Te aconsejo que crees una rutina y que salgas de casa al menos una vez al día.»",
        ],
        [
          "Según el autor, trabajar en pijama…",
          ["cambia cómo te sientes", "es más cómodo y productivo", "es una buena idea los viernes", "no tiene ninguna importancia"],
          "«Parece una tontería, pero cambia mucho cómo te sientes.»",
        ],
      ]
    ),
    readingSection(
      "Parte 1 · Lectura: un aviso",
      "Lee el aviso de la comunidad de vecinos y contesta las preguntas.",
      [
        "AVISO A LOS VECINOS. Se informa a todos los vecinos de que el próximo lunes se cortará el agua de nueve a dos por obras en la calle. Se ruega que llenen algunas botellas antes.",
        "Por otro lado, se ha encontrado una bicicleta azul en el garaje. Si es suya, hable con el portero antes del día 15. Después de esa fecha, se donará a una asociación del barrio.",
        "Recuerden también que no se puede dejar basura en la escalera. Gracias por su colaboración. La Administración.",
      ],
      [
        [
          "¿Por qué se cortará el agua?",
          ["Por obras en la calle", "Por una avería en el edificio", "Porque los vecinos no han pagado", "Para limpiar el garaje"],
          "«Se cortará el agua de nueve a dos por obras en la calle.»",
        ],
        [
          "¿Qué se pide a los vecinos?",
          ["Que llenen botellas de agua antes", "Que no usen el ascensor", "Que hablen con los obreros", "Que dejen el garaje libre"],
          "«Se ruega que llenen algunas botellas antes.»",
        ],
        [
          "¿Qué pasará con la bicicleta si nadie la reclama?",
          ["Se donará a una asociación del barrio", "Se venderá", "Se quedará en el garaje", "Se la quedará el portero"],
          "«Después de esa fecha, se donará a una asociación del barrio.»",
        ],
        ["¿Hasta cuándo se puede recoger la bicicleta?", ["Hasta el día 15", "Hasta el lunes", "Hasta las dos", "Hasta final de mes"], "«Hable con el portero antes del día 15.»"],
        [
          "¿Qué está prohibido?",
          ["Dejar basura en la escalera", "Aparcar bicicletas en el garaje", "Hablar con el portero", "Usar el agua por la mañana"],
          "«No se puede dejar basura en la escalera.»",
        ],
      ]
    ),
    {
      heading: "Parte 2 · Comprensión auditiva",
      body: [
        "Activa el sonido. Cada pregunta reproduce una parte de una grabación: escúchala las veces que quieras y elige la respuesta. Las dos últimas son dictados: escribe exactamente lo que oyes.",
      ],
      checkpoint: [
        ...listeningItems(
          [
            "Atención, señores pasajeros. El tren con destino a Zaragoza, que tenía prevista su salida a las once y cuarto, saldrá con cuarenta minutos de retraso debido a un problema técnico.",
            "Les rogamos que permanezcan en la sala de espera. Los pasajeros con billete para el tren de las doce también podrán viajar en este tren. Disculpen las molestias.",
          ],
          [
            [
              0,
              "Escucha. ¿A qué hora saldrá el tren a Zaragoza?",
              ["A las doce menos cinco", "A las once y cuarto", "A las doce", "A las once menos cuarto"],
              "Salía a las once y cuarto y tiene cuarenta minutos de retraso: a las doce menos cinco.",
            ],
            [0, "¿Por qué sale tarde?", ["Por un problema técnico", "Por el mal tiempo", "Porque falta el conductor", "Por una huelga"], "«Debido a un problema técnico.»"],
            [
              1,
              "¿Qué se pide a los pasajeros?",
              ["Que esperen en la sala de espera", "Que cambien de andén", "Que compren otro billete", "Que vuelvan mañana"],
              "«Les rogamos que permanezcan en la sala de espera.»",
            ],
            [
              1,
              "¿Quién más puede viajar en este tren?",
              ["Los pasajeros con billete para el tren de las doce", "Solo los pasajeros de primera clase", "Nadie más", "Los pasajeros que van a Madrid"],
              "«Los pasajeros con billete para el tren de las doce también podrán viajar en este tren.»",
            ],
          ]
        ),
        ...listeningItems(
          [
            "Mira, te recomiendo que hables con tu jefe antes de decidir nada. Yo en tu lugar no dejaría el trabajo ahora: primero buscaría otro.",
            "Ya sé que estás harta, pero ojalá encuentres algo mejor pronto. Si quieres, esta noche te ayudo a preparar el currículum.",
          ],
          [
            [
              0,
              "Escucha. ¿Qué le recomienda primero a su amiga?",
              ["Hablar con su jefe", "Dejar el trabajo ya", "Irse de vacaciones", "Cambiar de ciudad"],
              "«Te recomiendo que hables con tu jefe antes de decidir nada.»",
            ],
            [
              0,
              "¿Qué haría la hablante en su lugar?",
              ["Buscar otro trabajo antes de dejar el suyo", "Dejar el trabajo inmediatamente", "Pedir un aumento de sueldo", "No hacer nada"],
              "«Yo en tu lugar no dejaría el trabajo ahora: primero buscaría otro.»",
            ],
            [1, "¿Cómo se siente la amiga en su trabajo?", ["Está harta", "Está contenta", "Le da igual", "Está nerviosa porque empieza"], "«Ya sé que estás harta.»"],
            [
              1,
              "¿Qué le ofrece para esta noche?",
              ["Ayudarla con el currículum", "Invitarla a cenar", "Llamar a su jefe", "Buscar ofertas en el periódico"],
              "«Esta noche te ayudo a preparar el currículum.»",
            ],
          ]
        ),
        dict("Todavía no he visto esa película.", "Todavía no he visto esa película. Visto es el participio irregular de ver."),
        dict("Es importante que llegues a tiempo.", "Es importante que llegues a tiempo. Llegar → llegues: la g lleva u delante de e."),
      ],
    },
    sec(
      "Parte 3 · Gramática y vocabulario",
      "Escribe en español las palabras en negrita. Se aceptan pequeños errores de tildes, con una nota.",
      [],
      [
        fe("Esta semana ___ mucho.", "he trabajado", "This week [I have worked] a lot.", "Esta semana (un periodo que no ha terminado) pide el pretérito perfecto: he trabajado."),
        fe(
          "¿Alguna vez ___ a México?",
          "has estado",
          "[Have you] ever [been] to Mexico?",
          "Experiencias: pretérito perfecto, has estado o has ido (usted ha estado).",
          ["has ido", "ha estado", "ha ido"]
        ),
        fe(
          "Cuando llegué, la película ya ___.",
          "había empezado",
          "When I arrived, the film [had] already [started].",
          "Una acción anterior a otra pasada: pluscuamperfecto, había empezado.",
          ["había comenzado"]
        ),
        fe("Quiero que ___ conmigo.", "vengas", "I want [you to come] with me.", "Querer que + otro sujeto: subjuntivo, vengas (venga, de usted).", ["venga"]),
        fe("Es posible que ___ mañana.", "llueva", "It's possible that [it will rain] tomorrow.", "Es posible que + subjuntivo: llueva."),
        fe("Ojalá ___ buen tiempo el sábado.", "haga", "I hope [it's] nice weather on Saturday.", "Ojalá + subjuntivo; el tiempo usa hacer: haga buen tiempo."),
        fe("No creo que ellos ___ la verdad.", "sepan", "I don't think they [know] the truth.", "No creo que + subjuntivo: saber → sepan."),
        fe("Me alegro de que ___ aquí.", "estés", "I'm glad [you're] here.", "Emoción + que: subjuntivo, estés (esté, de usted).", ["esté"]),
        fe("Te aconsejo que ___ más agua.", "bebas", "I advise you [to drink] more water.", "Aconsejar que + subjuntivo: bebas (o tomes).", ["tomes"]),
        fe("¡___ la puerta, por favor!", "Cierra", "[Close] the door, please!", "Imperativo de tú: cierra (cierre, de usted).", ["Cierre"]),
        fe("No ___ eso, es peligroso.", "toques", "Don't [touch] that, it's dangerous.", "El imperativo negativo usa el subjuntivo: no toques.", ["toque"]),
        fe("Señora, ___ aquí, por favor.", "siéntese", "Madam, [sit down] here, please.", "Imperativo de usted con pronombre unido: siéntese."),
        fe(
          "¿___ la ventana, por favor?",
          "Podrías abrir",
          "[Could you open] the window, please?",
          "El condicional hace la petición más cortés: ¿podrías abrir…? (¿puedes abrir…? también sirve).",
          ["Puedes abrir", "Podría abrir", "Puede abrir"]
        ),
        fe("Con más dinero, ___ una casa en la playa.", "compraría", "With more money, [I would buy] a house by the beach.", "Situación imaginada: condicional, compraría."),
        fe("Yo que tú, ___ con ella.", "hablaría", "If I were you, [I would talk] to her.", "«Yo que tú» + condicional para dar consejos: hablaría."),
        fe("Si tienes tiempo, ___ a la fiesta.", "ven", "If you have time, [come] to the party.", "Si + presente, y una orden: ven (o vienes, vendrás).", ["vienes", "vendrás"]),
        fe("El chico ___ te presenté es mi primo.", "que", "The boy [that] I introduced to you is my cousin.", "Relativo para personas como objeto: que (o a quien).", ["a quien", "al que"]),
        fe("___ me preocupa es el precio.", "Lo que", "[What] worries me is the price.", "«Lo que» = la cosa que."),
        fe(
          "En esta tienda ___ ropa de segunda mano.",
          "se vende",
          "In this shop [they sell] second-hand clothes.",
          "Pasiva refleja: se vende ropa (venden, sin se, también es correcto).",
          ["venden"]
        ),
        fe("En este restaurante ___ muy bien.", "se come", "In this restaurant [you eat] very well.", "Se impersonal: se come bien."),
        fe("A las diez ya ___ el trabajo.", "habré terminado", "By ten [I will have finished] the work.", "Futuro perfecto: habré terminado.", ["habré acabado"]),
        fe("Se me ___ las llaves en casa.", "olvidaron", "I [forgot] my keys at home.", "Se accidental: el verbo concuerda con las llaves, se me olvidaron.", ["quedaron"]),
        fe("___ de llegar del trabajo.", "Acabo", "[I've just] got back from work.", "Acabar de + infinitivo: acabo de llegar."),
        fe("¿Este abrigo es tuyo? —No, ___ es el azul.", "el mío", "Is this coat yours? —No, [mine] is the blue one.", "Pronombre posesivo: el mío (concuerda con el abrigo)."),
        fe(
          "¿El regalo para Ana? Ya ___ di.",
          "se lo",
          "The present for Ana? I already gave [it to her].",
          "Le + lo se convierte en se lo: ya se lo di."
        ),
      ]
    ),
  ],
  exercises: [
    wr(
      "Parte 4 · Expresión escrita. Escribe un correo a un amigo: cuéntale algo que has hecho últimamente, dale un consejo sobre un problema que te contó y proponle un plan para el fin de semana.",
      [80, 120],
      [
        "Cuenta una experiencia reciente con el pretérito perfecto o el indefinido",
        "Da un consejo con te aconsejo que / te recomiendo que + subjuntivo, o con yo que tú + condicional",
        "Propón un plan con si + presente (si quieres, si hace buen tiempo...)",
        "Saluda y despídete como en un correo informal",
      ],
      "¡Hola, Javi! ¿Cómo estás? Yo estoy muy bien. Esta semana he empezado un curso de fotografía y me encanta: el sábado pasado fuimos al puerto y saqué fotos preciosas. Sobre lo que me contaste de tu compañero de piso, te recomiendo que hables con él tranquilamente. Yo que tú, le propondría un horario para limpiar la cocina. Seguro que lo entiende. Por cierto, si hace buen tiempo el domingo, podríamos ir en bici al lago. ¿Qué te parece? Si quieres, te llamo el viernes y lo organizamos. ¡Un abrazo fuerte! Laura",
      "Recomendar que pide subjuntivo (que hables); «yo que tú» va con condicional (propondría); y después de si se usa el presente, nunca el futuro (si hace buen tiempo)."
    ),
  ],
};
