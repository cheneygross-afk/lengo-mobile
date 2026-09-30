// Synced from cheneygross-afk/lengo:src/lib/lessons/b1-common-words.ts by scripts/sync-content.mjs -- edit it there, not here.
import { anchored, authoring } from "./authoring";
import type { AnchoredLesson } from "./weave";

// Vocabulary lessons for common words the B1 lessons never used. The
// content check (scripts/content-check) compares the lessons against the
// most frequent Spanish words and found words like "justicia",
// "sociedad", "apenas" and "a propósito" missing through the end of B1.
// Each lesson teaches one themed set, as chunks where that's how the word
// is used. Woven in after the level's Vocabulary Practice parts (see
// weave.ts and sequencing.ts), so they travel with those parts.

const { mc, fb, toEs, toEn, wo, mt, sec } = authoring("es");

export const B1_COMMON_WORDS: AnchoredLesson[] = [
  anchored(
    "B1",
    "b1-vocabulary-practice-1",
    "b1-common-words-crime",
    "Palabras frecuentes: el crimen y el peligro",
    "Armas, ataques, víctimas y mentiras: el vocabulario de las noticias de sucesos y de las películas policíacas.",
    "9 min",
    [
      sec(
        "El crimen y las armas",
        [
          "Un crimen es un delito grave. Las palabras de este grupo aparecen mucho en las noticias: el arma (weapon), la pistola, la bala (bullet) y la bomba.",
          "Atención: «arma» es femenina, pero en singular lleva «el» porque empieza por «a» tónica: el arma, un arma, pero las armas, esta arma.",
        ],
        [
          ["La policía investiga el crimen desde el lunes.", "The police have been investigating the crime since Monday."],
          ["El arma del crimen nunca apareció.", "The murder weapon never turned up."],
          ["Está prohibido llevar un arma en el avión.", "It's forbidden to carry a weapon on the plane."],
          ["El ladrón llevaba una pistola, pero no la usó.", "The thief was carrying a pistol, but he didn't use it."],
          ["La bala pasó muy cerca, pero nadie resultó herido.", "The bullet went very close, but nobody was hurt."],
          ["Encontraron una bomba cerca de la estación y la desactivaron a tiempo.", "They found a bomb near the station and defused it in time."],
          ["La noticia cayó como una bomba en el pueblo.", "The news hit the town like a bombshell."],
        ],
        [
          mc(
            "Completa: «La policía encontró ___ arma debajo de la cama.»",
            ["el", "la", "lo", "los"],
            0,
            "«Arma» es femenina, pero en singular usamos «el» (o «un») delante de la «a» tónica: el arma."
          ),
          fb("Completa.", "El ladrón disparó una sola ___, pero no hirió a nadie.", "bala", "Una pistola dispara balas (bullets): una sola bala = one single shot."),
        ]
      ),
      sec(
        "Ataques, amenazas y víctimas",
        [
          "Un ataque es una acción violenta, pero también usamos la palabra para cosas del cuerpo: un ataque al corazón (heart attack), un ataque de risa (a fit of laughter).",
          "Una amenaza es un aviso de que alguien quiere hacer daño (verbo: amenazar). «Víctima» siempre es femenina, aunque sea un hombre: la víctima, las víctimas. Y «las drogas» casi siempre va en plural cuando hablamos del problema social.",
        ],
        [
          ["El ataque ocurrió de noche, cuando la calle estaba vacía.", "The attack happened at night, when the street was empty."],
          ["Mi abuelo sufrió un ataque al corazón el año pasado.", "My grandfather had a heart attack last year."],
          ["Recibió una amenaza por teléfono y llamó a la policía.", "She received a threat over the phone and called the police."],
          ["La víctima era un hombre de cuarenta años.", "The victim was a forty-year-old man."],
          ["Por suerte, el accidente no dejó víctimas.", "Luckily, there were no casualties in the accident."],
          ["Las víctimas del ataque recibieron ayuda del gobierno.", "The victims of the attack received help from the government."],
          ["El tráfico de drogas es un problema grave en muchas ciudades.", "Drug trafficking is a serious problem in many cities."],
        ],
        [
          mc(
            "¿Cómo se dice «The victim was a woman»?",
            ["La víctima era una mujer.", "El víctima era una mujer.", "La víctimo era una mujer.", "El víctimo era una mujer."],
            0,
            "«Víctima» es siempre femenina, también para hombres: la víctima. «El víctima» cambia el artículo, y «víctimo» no existe."
          ),
          fb("Completa.", "Nos reímos tanto que nos dio un ___ de risa.", "ataque", "Un ataque de risa = a fit of laughter."),
        ]
      ),
      sec(
        "Golpes, peleas, trampas y mentiras",
        [
          "Un golpe es un impacto fuerte: darse un golpe (to bump yourself). Expresiones útiles: de golpe (suddenly) y un golpe de Estado (a coup).",
          "Una pelea es una lucha física o una discusión fuerte. Una trampa es una situación preparada para engañar a alguien; hacer trampa = to cheat (en un juego o un examen).",
          "Dos verbos para las historias de misterio: desaparecer (desapareció, pretérito) y mentir, con cambio e → i en el gerundio: estar mintiendo.",
        ],
        [
          ["Me di un golpe en la cabeza con la puerta del coche.", "I banged my head on the car door."],
          ["De golpe, se apagaron todas las luces.", "Suddenly, all the lights went out."],
          ["Hubo una pelea en la puerta del bar y llegó la policía.", "There was a fight outside the bar and the police came."],
          ["Mi hermano siempre hace trampa cuando jugamos a las cartas.", "My brother always cheats when we play cards."],
          ["El testigo desapareció la noche del crimen.", "The witness disappeared on the night of the crime."],
          ["Mi bicicleta desapareció de la puerta de casa.", "My bike disappeared from outside my house."],
          ["Sé que estás mintiendo: tu historia no tiene sentido.", "I know you're lying: your story doesn't make sense."],
        ],
        [
          fb("Completa con el gerundio de mentir.", "Nadie te cree. Todos sabemos que estás ___.", "mintiendo", "Mentir cambia e → i en el gerundio: mintiendo."),
          mc(
            "¿Qué significa «hacer trampa»?",
            ["to cheat", "to set a trap", "to make a mistake", "to play a trick"],
            0,
            "«Hacer trampa» es no respetar las reglas de un juego o un examen: to cheat. «To set a trap» es tender una trampa, «to make a mistake» es equivocarse y «to play a trick» es gastar una broma."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona cada palabra con su traducción.",
        [
          ["el crimen", "crime"],
          ["la pistola", "pistol"],
          ["la amenaza", "threat"],
          ["la pelea", "fight"],
          ["la trampa", "trap"],
        ],
        "Vocabulario básico de las noticias de sucesos."
      ),
      fb("Completa.", "Los periodistas llegaron pocos minutos después del ___ contra el banco.", "ataque", "Un ataque contra algo o alguien = an attack on something or someone."),
      fb("Completa con el gerundio de mentir.", "No te creo. Estás ___ otra vez.", "mintiendo", "Estar + gerundio: estás mintiendo (e → i)."),
      fb("Completa con desaparecer en pretérito.", "El perro ___ el sábado y volvió el lunes.", "desapareció", "Desaparecer, él/ella, pretérito: desapareció."),
      mc(
        "Completa: «El accidente de tren dejó tres ___.»",
        ["víctimas", "amenazas", "trampas", "drogas"],
        0,
        "Las víctimas son las personas que sufren un accidente o un crimen. Amenazas (threats), trampas (traps) y drogas no encajan con «el accidente dejó…»."
      ),
      mc(
        "¿Qué frase es correcta?",
        [
          "Mi vecino recibió una amenaza anónima.",
          "Mi vecino recibió un amenaza anónimo.",
          "Mi vecino recibió una amenazo anónima.",
          "Mi vecino recibió un amenazo anónimo.",
        ],
        0,
        "«Amenaza» es femenina y el adjetivo concuerda: una amenaza anónima. «Un amenaza anónimo» usa el masculino, y «amenazo» no existe como sustantivo."
      ),
      fb("Completa.", "Dos jugadores empezaron una ___ y el árbitro los expulsó.", "pelea", "Una pelea = a fight; por eso el árbitro los expulsó."),
      fb("Completa.", "El detective encontró una ___ en el suelo; era de la misma pistola.", "bala", "Una bala = a bullet: sale de una pistola."),
      toEs("The police found the weapon in the river.", "La policía encontró el arma en el río.", "«Arma» es femenina, pero en singular lleva «el»: el arma.", ["La policía halló el arma en el río."]),
      toEs("They found a bomb near the school.", "Encontraron una bomba cerca de la escuela.", "Bomb = bomba, femenina: una bomba; «cerca de» + lugar.", ["Encontraron una bomba cerca del colegio.", "Hallaron una bomba cerca de la escuela."]),
      toEn("La víctima no vio la cara del atacante.", "The victim didn't see the attacker's face.", "«La víctima» es femenina, aunque la persona sea un hombre.", ["The victim did not see the attacker's face."]),
      toEn("De golpe, todos empezaron a gritar.", "Suddenly, everyone started shouting.", "De golpe = suddenly, all of a sudden.", ["All of a sudden, everyone started shouting.", "Suddenly, everyone began to shout.", "Suddenly everyone started to shout."]),
      wo("La oferta parecía buena, pero era una trampa.", "Una trampa = a trap. Parecía (imperfecto) describe la situación.", "The offer looked good, but it was a trap."),
      wo("La venta de drogas es un crimen grave.", "«Drogas» va en plural cuando hablamos del problema en general.", "Selling drugs is a serious crime."),
    ]
  ),
  anchored(
    "B1",
    "b1-vocabulary-practice-2",
    "b1-common-words-justice",
    "Palabras frecuentes: la justicia y la investigación",
    "Del juez a la cárcel, de la pista al sospechoso: las palabras clave de los juicios y las investigaciones.",
    "9 min",
    [
      sec(
        "En el juicio",
        [
          "En un juicio hay varios papeles: el juez (o la jueza) decide; el fiscal (o la fiscal) acusa; la defensa protege al acusado. «Fiscal» es igual para hombres y mujeres: el fiscal, la fiscal.",
          "Expresiones útiles: hacer justicia, ser inocente, actuar en defensa propia (in self-defense).",
        ],
        [
          ["El juez escuchó a los testigos durante toda la mañana.", "The judge listened to the witnesses all morning."],
          ["La fiscal pidió diez años de prisión para el acusado.", "The prosecutor asked for ten years in prison for the defendant."],
          ["La defensa dice que su cliente es inocente.", "The defense says their client is innocent."],
          ["Todo el mundo es inocente hasta que se demuestre lo contrario.", "Everyone is innocent until proven otherwise."],
          ["Las familias de las víctimas piden justicia.", "The victims' families are demanding justice."],
          ["El hombre dice que actuó en defensa propia.", "The man says he acted in self-defense."],
          ["Después de muchos años, por fin se hizo justicia.", "After many years, justice was finally done."],
        ],
        [
          mc(
            "¿Quién acusa al sospechoso en un juicio?",
            ["el fiscal", "el juez", "el abogado defensor", "el testigo"],
            0,
            "El fiscal (prosecutor) es quien acusa. El juez decide, el abogado defensor defiende al acusado y el testigo cuenta lo que vio."
          ),
        ]
      ),
      sec(
        "La cárcel y la prisión",
        [
          "«Cárcel» y «prisión» significan casi lo mismo (jail / prison). «Prisión» suena un poco más formal y aparece en las sentencias: condenar a alguien a cinco años de prisión.",
          "Con cárcel decimos: ir a la cárcel, meter a alguien en la cárcel, salir de la cárcel.",
        ],
        [
          ["Pasó cinco años en la cárcel por robo.", "He spent five years in jail for robbery."],
          ["Lo condenaron a veinte años de prisión.", "He was sentenced to twenty years in prison."],
          ["Salió de prisión el mes pasado y ya tiene trabajo.", "He got out of prison last month and already has a job."],
          ["Si sigues así, vas a terminar en la cárcel.", "If you carry on like this, you're going to end up in jail."],
          ["El sospechoso sigue en la cárcel mientras espera el juicio.", "The suspect is still in jail while he waits for the trial."],
        ],
        [
          mc(
            "¿Qué palabra es un sinónimo de «cárcel»?",
            ["prisión", "juicio", "comisaría", "tribunal"],
            0,
            "Cárcel y prisión = jail / prison. La comisaría es la oficina de la policía."
          ),
        ]
      ),
      sec(
        "La investigación",
        [
          "Un sospechoso es la persona que la policía cree culpable; también es un adjetivo: «es sospechoso» = it's suspicious. Una pista es una información que ayuda a resolver un misterio (a clue); también es una pista de tenis o de baile.",
          "Otras palabras: el código (code; el código postal), la búsqueda (search), la misión, el/la agente (agente de policía, agente secreto). El verbo averiguar significa to find out.",
        ],
        [
          ["La policía tiene un sospechoso, pero no tiene pruebas.", "The police have a suspect, but they don't have any evidence."],
          ["Es muy sospechoso que nadie viera nada.", "It's very suspicious that nobody saw anything."],
          ["El detective encontró una pista importante en el coche.", "The detective found an important clue in the car."],
          ["El mensaje estaba escrito en un código secreto.", "The message was written in a secret code."],
          ["La búsqueda del niño desaparecido duró dos días.", "The search for the missing boy lasted two days."],
          ["Quiero averiguar quién rompió la ventana.", "I want to find out who broke the window."],
          ["La agente tenía una misión muy clara: encontrar al testigo.", "The agent had a very clear mission: to find the witness."],
        ],
        [
          fb("Completa.", "Tenemos que ___ qué pasó esa noche.", "averiguar", "Averiguar = to find out. Después de «tener que» va el infinitivo."),
          mc(
            "¿Qué significa «pista» en «la policía encontró una pista»?",
            ["a clue", "a track", "a court", "a path"],
            0,
            "En una investigación, una pista es una información que ayuda: a clue. «Pista» también puede ser una pista de tenis (court) o de atletismo (track), pero no en este contexto."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona cada palabra con su traducción.",
        [
          ["el juez", "judge"],
          ["el fiscal", "prosecutor"],
          ["la cárcel", "jail"],
          ["la pista", "clue"],
          ["la búsqueda", "search"],
        ],
        "Vocabulario básico de la justicia y la investigación."
      ),
      fb("Completa.", "El ___ de policía me pidió el pasaporte.", "agente", "Un agente de policía = a police officer."),
      fb("Completa.", "La policía no pudo ___ quién era el hombre de la foto.", "averiguar", "Averiguar = to find out, descubrir una información."),
      fb("Completa.", "Nadie sabía el ___ para abrir la caja fuerte.", "código", "Un código = a code: la combinación que abre la caja fuerte."),
      fb("Completa.", "El abogado de la ___ habló con el juez.", "defensa", "La defensa = the defense: el abogado que defiende al acusado."),
      fb("Completa.", "Mi ___ es proteger al testigo hasta el día del juicio.", "misión", "Una misión = a mission. Lleva tilde: misión."),
      mc(
        "«El acusado no hizo nada malo.» Entonces es…",
        ["inocente", "culpable", "sospechoso", "peligroso"],
        0,
        "Si no hizo nada malo, es inocente (innocent). Culpable es lo contrario, sospechoso significa que se cree que pudo hacerlo y peligroso significa dangerous."
      ),
      mc(
        "¿Qué palabra suena más formal y aparece en las sentencias de los jueces?",
        ["prisión", "celda", "comisaría", "pista"],
        0,
        "«Prisión» es la palabra formal de las sentencias: X años de prisión. La celda es el cuarto donde está el preso, la comisaría es la oficina de policía y una pista es una clue."
      ),
      toEs("The judge said that he was innocent.", "El juez dijo que era inocente.", "Judge = juez; innocent = inocente.", ["El juez dijo que él era inocente.", "La juez dijo que era inocente.", "La jueza dijo que era inocente."]),
      toEs("The search lasted all night.", "La búsqueda duró toda la noche.", "Search = búsqueda, con tilde en la «u».", []),
      toEn("El agente secreto aceptó la misión.", "The secret agent accepted the mission.", "Agente secreto = secret agent; aceptar la misión = accept the mission.", ["The secret agent took the mission."]),
      toEn("La fiscal pidió diez años de prisión.", "The prosecutor asked for ten years in prison.", "La fiscal = the (female) prosecutor.", ["The prosecutor requested ten years in prison.", "The prosecutor asked for ten years of prison."]),
      wo("La policía descubrió el código del mensaje secreto.", "Descubrir un código = to crack a code.", "The police cracked the code of the secret message."),
      wo("Queremos justicia para todas las víctimas.", "Pedir / querer justicia = to demand justice.", "We want justice for all the victims."),
    ]
  ),
  anchored(
    "B1",
    "b1-vocabulary-practice-3",
    "b1-common-words-supernatural",
    "Palabras frecuentes: la fe, las leyendas y lo sobrenatural",
    "Santos, ángeles, fantasmas y monstruos: palabras de la religión y de las leyendas que también usamos en la vida diaria.",
    "9 min",
    [
      sec(
        "La fe, los santos y el espíritu",
        [
          "Tener fe en algo o en alguien es creer y confiar: tengo fe en ti. «Santo» se convierte en «san» delante de la mayoría de los nombres (San Pedro, San Juan), pero no delante de Tomás, Domingo o Toribio (Santo Tomás). «Santa» no cambia: Santa Teresa, Semana Santa.",
          "El espíritu es el alma, pero también la actitud de un grupo: espíritu de equipo, espíritu de lucha.",
        ],
        [
          ["Mi abuela tiene mucha fe y va a misa todos los domingos.", "My grandmother has a lot of faith and goes to Mass every Sunday."],
          ["Tengo fe en ti: sé que vas a aprobar.", "I have faith in you: I know you're going to pass."],
          ["En España, algunas personas celebran el día de su santo.", "In Spain, some people celebrate their saint's day."],
          ["En Semana Santa muchas familias viajan a la playa.", "At Easter many families travel to the beach."],
          ["El equipo ganó gracias a su espíritu de lucha.", "The team won thanks to its fighting spirit."],
          ["Muchas culturas creen que el espíritu vive después de la muerte.", "Many cultures believe the spirit lives on after death."],
        ],
        [
          mc(
            "¿Cuál es correcto?",
            ["San Pedro", "Santo Pedro", "Santa Pedro", "Sante Pedro"],
            0,
            "«Santo» se acorta a «san» delante de casi todos los nombres masculinos: San Pedro. Excepciones: Santo Tomás, Santo Domingo. «Santa» es para mujeres y «Sante» no existe."
          ),
          fb("Completa.", "Aunque todo va mal, no pierdo la ___.", "fe", "No perder la fe = not to lose faith."),
        ]
      ),
      sec(
        "Ángeles, diablos e infierno",
        [
          "Estas palabras aparecen mucho en expresiones: «eres un ángel» (you're an angel = muy amable), «este tráfico es un infierno» (it's hell). Un niño travieso puede ser «un pequeño diablo» o «un demonio».",
          "Cuidado: «¿Qué demonios…?», «¿Qué diablos…?» o «¡Vete al infierno!» suenan enfadados y pueden ser maleducados. Úsalos solo con confianza.",
        ],
        [
          ["Gracias por ayudarme con la mudanza, eres un ángel.", "Thanks for helping me with the move, you're an angel."],
          ["En el cuadro hay un ángel con alas blancas.", "In the painting there's an angel with white wings."],
          ["Mi sobrino es un pequeño diablo: nunca se está quieto.", "My nephew is a little devil: he never sits still."],
          ["En la película, un demonio vive dentro de una casa antigua.", "In the film, a demon lives inside an old house."],
          ["El verano en esta ciudad es un infierno: hace cuarenta y cinco grados.", "Summer in this city is hell: it's forty-five degrees."],
          ["Más sabe el diablo por viejo que por diablo.", "Experience counts for more than cleverness. (lit. The devil knows more because he's old than because he's the devil.)"],
        ],
        [
          mc(
            "Tu amiga te trae sopa cuando estás enfermo. Le dices:",
            ["¡Eres un ángel!", "¡Eres un demonio!", "¡Eres un diablo!", "¡Eres un infierno!"],
            0,
            "«¡Eres un ángel!» es un cumplido: eres muy buena y amable. Demonio, diablo e infierno expresan maldad, no gratitud."
          ),
        ]
      ),
      sec(
        "Fantasmas, monstruos, magia y belleza",
        [
          "«Fantasma» termina en -a, pero es masculino: el fantasma, un fantasma. También es un adjetivo: un pueblo fantasma (ghost town). El monstruo es de los cuentos y de las pesadillas de los niños.",
          "La magia es lo que hace un mago; «como por arte de magia» = as if by magic. Y en los cuentos siempre hay belleza: La Bella y la Bestia, ¡qué belleza de paisaje!",
        ],
        [
          ["Dicen que en el castillo vive un fantasma.", "They say a ghost lives in the castle."],
          ["Después de cerrar la mina, el pueblo se quedó vacío; ahora es un pueblo fantasma.", "After the mine closed, the town emptied out; now it's a ghost town."],
          ["Mi hija cree que hay un monstruo debajo de su cama.", "My daughter thinks there's a monster under her bed."],
          ["El mago hizo magia con unas cartas.", "The magician did magic tricks with some cards."],
          ["Las llaves aparecieron como por arte de magia.", "The keys turned up as if by magic."],
          ["La belleza del paisaje nos dejó sin palabras.", "The beauty of the landscape left us speechless."],
        ],
        [
          fb("Completa con el artículo.", "Dicen que en esta casa vive ___ fantasma.", "un", "«Fantasma» es masculino: un fantasma, el fantasma."),
          fb("Completa.", "Mi hijo tiene miedo de un ___ verde que vive en el armario.", "monstruo", "Un monstruo = a monster (ojo a la r después de la t: mons-truo)."),
        ]
      ),
    ],
    [
      mt(
        "Relaciona cada palabra con su traducción.",
        [
          ["el fantasma", "ghost"],
          ["el monstruo", "monster"],
          ["la magia", "magic"],
          ["el infierno", "hell"],
          ["el ángel", "angel"],
        ],
        "Vocabulario de las leyendas y de lo sobrenatural."
      ),
      fb("Completa.", "La ___ de este lugar es increíble: montañas, lagos y bosques.", "belleza", "La belleza = beauty; es el sustantivo de «bello»."),
      fb("Completa.", "No sé cómo lo hizo; fue como por arte de ___.", "magia", "Como por arte de magia = as if by magic."),
      fb("Completa.", "Es difícil, pero hay que tener ___ en el futuro.", "fe", "Tener fe en algo = to have faith in something."),
      fb("Completa.", "Mi abuela se llama Teresa y celebra el día de ___ Teresa.", "Santa", "«Santa» nunca se acorta: Santa Teresa, Santa Ana."),
      mc(
        "¿Cuál es correcto?",
        ["Semana Santa", "Semana Santo", "Semana San", "Semana Santos"],
        0,
        "«Semana» es femenina, así que decimos Semana Santa (Easter / Holy Week)."
      ),
      mc(
        "¿Qué palabra no pertenece al grupo?",
        ["belleza", "fantasma", "demonio", "ángel"],
        0,
        "Fantasma, demonio y ángel son seres sobrenaturales; la belleza es una cualidad."
      ),
      toEs("My grandmother believes in the Holy Spirit.", "Mi abuela cree en el Espíritu Santo.", "Holy Spirit = Espíritu Santo (el adjetivo va detrás).", ["Mi abuela cree en el espíritu santo."]),
      toEs("They say there is a ghost in the hotel.", "Dicen que hay un fantasma en el hotel.", "«Fantasma» termina en -a pero es masculino: un fantasma. «Dicen que hay» = they say there is.", ["Dicen que en el hotel hay un fantasma."]),
      toEn("Esta semana ha sido un infierno.", "This week has been hell.", "Ser un infierno = to be hell, muy difícil o desagradable.", ["This week has been a nightmare.", "This week was hell."]),
      toEn("En la leyenda, el diablo le ofrece dinero a un pobre hombre.", "In the legend, the devil offers money to a poor man.", "El diablo = the devil; «le ofrece» anticipa «a un pobre hombre».", ["In the legend, the devil offers a poor man money."]),
      toEn("La niña dibujó un ángel y un monstruo.", "The girl drew an angel and a monster.", "Un ángel, un monstruo: los dos son masculinos.", ["The little girl drew an angel and a monster."]),
      wo("El monstruo del lago es solo una leyenda.", "Del = de + el.", "The lake monster is just a legend."),
      wo("Mi hermano pequeño es un demonio cuando tiene hambre.", "Ser un demonio = portarse muy mal (en broma).", "My little brother is a little devil when he's hungry."),
    ]
  ),
  anchored(
    "B1",
    "b1-vocabulary-practice-4",
    "b1-common-words-heroes",
    "Palabras frecuentes: héroes, batallas y cuentos",
    "Príncipes, caballeros, espadas y naves espaciales: el vocabulario de los cuentos, las películas de aventuras y la historia.",
    "9 min",
    [
      sec(
        "Érase una vez…",
        [
          "Los cuentos tradicionales empiezan con «Érase una vez» (Once upon a time) y tienen personajes como el príncipe, la princesa y el caballero, que lleva una espada.",
          "«Caballero» también significa gentleman: un hombre educado. Por eso decimos «Damas y caballeros» (Ladies and gentlemen) y en muchos baños pone «Caballeros».",
        ],
        [
          ["Érase una vez un príncipe que vivía en un castillo.", "Once upon a time there was a prince who lived in a castle."],
          ["La princesa no quería casarse con el príncipe.", "The princess didn't want to marry the prince."],
          ["El caballero sacó su espada y se acercó al dragón.", "The knight drew his sword and approached the dragon."],
          ["Tu abuelo era un auténtico caballero: siempre amable y educado.", "Your grandfather was a real gentleman: always kind and polite."],
          ["Damas y caballeros, bienvenidos al espectáculo.", "Ladies and gentlemen, welcome to the show."],
          ["La espada del rey está en el museo.", "The king's sword is in the museum."],
        ],
        [
          mc(
            "En la puerta del baño de hombres pone…",
            ["Caballeros", "Príncipes", "Héroes", "Enemigos"],
            0,
            "«Caballeros» (gentlemen) es el cartel típico del baño de hombres; el de mujeres dice «Damas» o «Señoras». Príncipes, héroes y enemigos no se usan en carteles."
          ),
        ]
      ),
      sec(
        "La batalla",
        [
          "En una batalla hay dos lados: nosotros y el enemigo. Al final, uno consigue la victoria. Luchar es to fight: luchar contra alguien (against) o luchar por algo (for).",
          "El sustantivo es la lucha: la lucha contra el cáncer, la lucha por la igualdad. Y una expresión: «no cantes victoria» = don't celebrate too early.",
        ],
        [
          ["El ejército enemigo atacó al amanecer.", "The enemy army attacked at dawn."],
          ["La batalla duró tres días.", "The battle lasted three days."],
          ["Después de la victoria, la gente salió a la calle.", "After the victory, people went out into the streets."],
          ["Hay que luchar por lo que quieres.", "You have to fight for what you want."],
          ["Mi tía ganó la lucha contra el cáncer.", "My aunt won her fight against cancer."],
          ["No cantes victoria todavía: el partido no ha terminado.", "Don't celebrate yet: the game isn't over."],
        ],
        [
          fb("Completa.", "Mi abuelo tuvo que ___ en la guerra cuando tenía veinte años.", "luchar", "Tener que + infinitivo: tuvo que luchar."),
          mc(
            "Completa: «Los soldados tenían que luchar ___ el enemigo.»",
            ["contra", "por", "de", "en"],
            0,
            "Luchar contra alguien = to fight against someone; luchar por algo = to fight for something."
          ),
        ]
      ),
      sec(
        "Salvar el mundo",
        [
          "El héroe salva a otros. La forma femenina es «la heroína» (cuidado: «heroína» también es el nombre de una droga). Salvar = to save, to rescue.",
          "Una nave es un barco grande o, hoy, sobre todo una nave espacial (spaceship). La libertad es uno de los grandes temas de las historias de héroes.",
        ],
        [
          ["El bombero es un héroe: salvó a tres niños del fuego.", "The firefighter is a hero: he saved three children from the fire."],
          ["Todos queremos salvar el planeta.", "We all want to save the planet."],
          ["En la película, el héroe tiene que salvar a su hermana.", "In the film, the hero has to save his sister."],
          ["Los prisioneros lucharon por su libertad.", "The prisoners fought for their freedom."],
          ["La libertad de expresión es un derecho fundamental.", "Freedom of speech is a fundamental right."],
          ["La nave espacial llegó a Marte después de siete meses.", "The spaceship reached Mars after seven months."],
        ],
        [
          mc(
            "¿Cómo se dice «spaceship»?",
            ["nave espacial", "barco espacial", "coche espacial", "avión espacial"],
            0,
            "Spaceship = nave espacial. «Nave» se usa para barcos y vehículos del espacio; barco, coche o avión espacial no son las palabras que se usan."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona cada palabra con su traducción.",
        [
          ["el príncipe", "prince"],
          ["la princesa", "princess"],
          ["la espada", "sword"],
          ["el enemigo", "enemy"],
          ["la nave", "ship / spacecraft"],
        ],
        "Vocabulario de los cuentos y las aventuras."
      ),
      fb("Completa.", "El ___ salvó a la princesa y todos lo aplaudieron.", "héroe", "El héroe = the hero (con tilde en la «e»)."),
      fb("Completa.", "El equipo celebró la ___ en la plaza.", "victoria", "La victoria = the victory, the win."),
      fb("Completa.", "Los bomberos llegaron a tiempo para ___ a la familia.", "salvar", "Para + infinitivo expresa finalidad; salvar = to save (a alguien de un peligro)."),
      fb("Completa.", "La ___ final fue en el valle, cerca del río.", "batalla", "La batalla = the battle; es un sustantivo femenino."),
      mc(
        "¿Cuál es el contrario de «victoria»?",
        ["derrota", "batalla", "lucha", "libertad"],
        0,
        "Victoria ↔ derrota (defeat). La batalla y la lucha son el combate mismo, y la libertad es otro concepto."
      ),
      mc(
        "¿Qué frase significa «He was a real gentleman»?",
        ["Era un auténtico caballero.", "Era un auténtico príncipe.", "Era un auténtico héroe.", "Era un auténtico enemigo."],
        0,
        "Caballero significa knight, pero también gentleman: un auténtico caballero. Príncipe (prince), héroe (hero) y enemigo (enemy) no significan gentleman."
      ),
      toEs("The knight fought against the dragon.", "El caballero luchó contra el dragón.", "Luchar contra = to fight against. Pretérito: luchó.", []),
      toEs("We have to fight for freedom.", "Tenemos que luchar por la libertad.", "Luchar por algo = to fight for something.", ["Hay que luchar por la libertad."]),
      toEn("La lucha por la igualdad no ha terminado.", "The fight for equality isn't over.", "La lucha = the fight, the struggle.", ["The struggle for equality isn't over.", "The fight for equality has not ended.", "The struggle for equality has not ended.", "The fight for equality is not over."]),
      toEn("El príncipe perdió su espada en la batalla.", "The prince lost his sword in the battle.", "Príncipe, espada, batalla: vocabulario de los cuentos.", ["The prince lost his sword during the battle."]),
      wo("Mi peor enemigo soy yo mismo.", "Enemigo = enemy.", "My worst enemy is myself."),
      wo("La nave salió de la Tierra por la noche.", "La nave (espacial) = the spaceship.", "The spaceship left Earth at night."),
    ]
  ),
  anchored(
    "B1",
    "b1-vocabulary-practice-5",
    "b1-common-words-society",
    "Palabras frecuentes: la política y la sociedad",
    "Ministros, líderes, movimientos y presión: las palabras que más se repiten en las noticias de política y sociedad.",
    "9 min",
    [
      sec(
        "La sociedad y el gobierno",
        [
          "La sociedad es el conjunto de personas que viven juntas. En el gobierno trabajan los ministros (el ministro de Educación, la ministra de Sanidad); el primer ministro dirige el gobierno en muchos países.",
          "«Líder» es igual para hombres y mujeres: el líder, la líder. «Nacional» (de todo el país) y «central» (del centro, principal) no cambian con el género: el gobierno central, la estación central.",
        ],
        [
          ["Vivimos en una sociedad cada vez más conectada.", "We live in an increasingly connected society."],
          ["El ministro de Educación presentó una nueva ley.", "The Minister of Education presented a new law."],
          ["El primer ministro habló en la televisión nacional.", "The prime minister spoke on national television."],
          ["El gobierno central y las regiones no están de acuerdo.", "The central government and the regions don't agree."],
          ["Ella es la líder del partido desde 2020.", "She has been the party leader since 2020."],
          ["Hoy es fiesta nacional y las tiendas están cerradas.", "Today is a national holiday and the shops are closed."],
        ],
        [
          fb("Completa.", "El primer ___ visitó la zona del terremoto.", "ministro", "El primer ministro = the prime minister."),
          mc(
            "Completa: «El gobierno ___ y las regiones firmaron un acuerdo.»",
            ["central", "céntrico", "centrado", "centro"],
            0,
            "El gobierno central = el gobierno de todo el país. «Céntrico» describe un lugar en el centro de una ciudad (un hotel céntrico) y «centrado» significa focused."
          ),
        ]
      ),
      sec(
        "Público y privado, civil y militar",
        [
          "Lo contrario de público es privado: un colegio privado, una vida privada, un asunto privado. Militar es un adjetivo (el servicio militar) y también un sustantivo (un militar = a soldier, a member of the armed forces).",
          "Un miembro es una persona que pertenece a un grupo; normalmente no cambia: él es miembro, ella es miembro. «Unidad» significa unit (una unidad militar) y también unity (la unidad del equipo).",
        ],
        [
          ["Mis hijos van a un colegio privado.", "My children go to a private school."],
          ["Este es un asunto privado; no quiero hablar de él.", "This is a private matter; I don't want to talk about it."],
          ["Mi abuelo hizo el servicio militar en los años sesenta.", "My grandfather did his military service in the sixties."],
          ["El ejército envió una unidad militar a la frontera.", "The army sent a military unit to the border."],
          ["Es miembro del club desde hace diez años.", "She has been a member of the club for ten years."],
          ["Cada miembro de la familia tiene su propia llave.", "Each member of the family has their own key."],
          ["La unidad del equipo es su mayor fuerza.", "The team's unity is its greatest strength."],
        ],
        [
          mc(
            "¿Cuál es el contrario de «público»?",
            ["privado", "militar", "nacional", "central"],
            0,
            "Público ↔ privado: un hospital público, un hospital privado. Militar, nacional y central no son contrarios de público."
          ),
        ]
      ),
      sec(
        "Movimiento, presión y los puntos cardinales",
        [
          "Un movimiento es un cambio de lugar, pero también un grupo de personas con una causa: el movimiento feminista, el movimiento ecologista. La presión es pressure: trabajar bajo presión, la presión arterial (tomar la presión = to take someone's blood pressure).",
          "Una operación puede ser médica (surgery) o policial o militar. «Unidos» significa united: Estados Unidos, estar unidos. Y los puntos cardinales: norte, sur, este y oeste.",
        ],
        [
          ["Si estamos unidos, podemos ganar.", "If we stand together, we can win."],
          ["El movimiento feminista cambió muchas leyes.", "The feminist movement changed many laws."],
          ["No me gusta trabajar bajo presión.", "I don't like working under pressure."],
          ["La enfermera me tomó la presión antes de la consulta.", "The nurse took my blood pressure before the appointment."],
          ["La operación duró cuatro horas, pero salió bien.", "The operation lasted four hours, but it went well."],
          ["El sol se pone por el oeste.", "The sun sets in the west."],
        ],
        [
          fb("Completa.", "El sol sale por el este y se pone por el ___.", "oeste", "Este (east) ↔ oeste (west): el sol sale por el este y se pone por el oeste."),
        ]
      ),
    ],
    [
      mt(
        "Relaciona cada palabra con su traducción.",
        [
          ["la sociedad", "society"],
          ["el ministro", "minister"],
          ["el movimiento", "movement"],
          ["la presión", "pressure"],
          ["el líder", "leader"],
        ],
        "Vocabulario frecuente de la política y la sociedad."
      ),
      fb("Completa.", "Mi madre es ___ de una asociación de vecinos.", "miembro", "Ser miembro de = to be a member of. Normalmente no cambia: ella es miembro."),
      fb("Completa.", "Juntos y ___, somos más fuertes.", "unidos", "Unidos = united, together; concuerda con el sujeto plural (nosotros)."),
      fb("Completa.", "La ___ de corazón fue un éxito y el paciente ya está en casa.", "operación", "Una operación (médica) = surgery, an operation."),
      fb("Completa.", "Hubo una ___ policial en el barrio anoche y detuvieron a cinco personas.", "operación", "Una operación policial = a police operation."),
      fb("Completa.", "California está en el ___ de Estados Unidos.", "oeste", "California está en la costa oeste: west."),
      mc(
        "Un hospital que no es del Estado es un hospital…",
        ["privado", "militar", "nacional", "central"],
        0,
        "Un hospital que no es del Estado es privado (private). Militar, nacional y central no expresan quién es el dueño."
      ),
      mc(
        "Completa: «los Estados ___ de América»",
        ["Unidos", "Unidas", "Unido", "Juntos"],
        0,
        "«Estados» es masculino plural, así que el adjetivo concuerda: Estados Unidos. «Unidas» es femenino, «Unido» singular y «Juntos» no es el nombre del país."
      ),
      toEs("The minister resigned yesterday.", "El ministro dimitió ayer.", "Dimitir o renunciar = to resign.", ["El ministro renunció ayer.", "La ministra dimitió ayer.", "La ministra renunció ayer."]),
      toEs("The leader of the movement spoke on national television.", "El líder del movimiento habló en la televisión nacional.", "Líder no cambia: el líder, la líder.", ["La líder del movimiento habló en la televisión nacional."]),
      toEn("Los estudiantes sienten mucha presión antes de los exámenes.", "Students feel a lot of pressure before exams.", "Presión = pressure; «sentir presión» = to feel pressure.", ["The students feel a lot of pressure before the exams.", "Students feel a lot of pressure before their exams."]),
      toEn("La unidad militar llegó a la zona central del país.", "The military unit arrived in the central area of the country.", "Unidad militar = military unit; central = central.", ["The military unit reached the central part of the country.", "The military unit arrived in the central part of the country."]),
      wo("La sociedad de hoy es muy diferente a la de mis abuelos.", "La de mis abuelos = la sociedad de mis abuelos.", "Today's society is very different from my grandparents'."),
      wo("Es un asunto privado entre los dos.", "Un asunto privado = a private matter.", "It's a private matter between the two of them."),
    ]
  ),
  anchored(
    "B1",
    "b1-vocabulary-practice-6",
    "b1-common-words-work-ideas",
    "Palabras frecuentes: el trabajo, las ideas y la organización",
    "Nivel, proceso, teoría, imagen, obra: palabras muy comunes para hablar del trabajo, las ideas y el mundo del espectáculo.",
    "10 min",
    [
      sec(
        "El trabajo: nivel, proceso y acceso",
        [
          "Muchas palabras del trabajo se parecen al inglés, pero viven en frases fijas. «Un profesional» es una persona experta; «profesional» también es adjetivo: un trabajo profesional.",
          "«El nivel» es el grado de algo (nivel de español, a nivel nacional). «El proceso» es una serie de pasos. «Tener acceso a» = poder entrar o usar algo. «La base» es la parte de abajo o el fundamento; «a base de» = hecho principalmente con.",
        ],
        [
          ["Mi hermana es una profesional muy seria.", "My sister is a very serious professional."],
          ["Necesitamos un nivel de inglés alto para este puesto.", "We need a high level of English for this job."],
          ["El proceso de selección dura tres semanas.", "The selection process takes three weeks."],
          ["Los empleados nuevos no tienen acceso a esa base de datos.", "New employees don't have access to that database."],
          ["Sin una buena base, es difícil subir de nivel.", "Without a good foundation, it's hard to move up a level."],
          ["Es un proceso lento, pero muy profesional.", "It's a slow process, but very professional."],
        ],
        [
          fb("Completa la frase.", "Para entrar en el edificio necesitas una tarjeta de ___.", "acceso", "Tarjeta de acceso = access card, key card."),
          mc(
            "¿Qué significa «a base de» en «una salsa a base de tomate»?",
            ["made mainly from", "on top of", "served with", "instead of"],
            0,
            "«A base de» = hecho principalmente con: a sauce made mainly from tomato. No significa «on top of» (encima de), «served with» (acompañado de) ni «instead of» (en lugar de)."
          ),
        ]
      ),
      sec(
        "Las ideas: teoría, aspecto, imagen, cantidad",
        [
          "«La teoría» es una idea que explica algo; «en teoría» = in theory. «El aspecto» es una parte de un problema, pero también la apariencia: tener buen aspecto = to look well.",
          "«La imagen» es una foto o un dibujo, y también la reputación: dar una buena imagen. «La cantidad» dice cuánto hay: una gran cantidad de. «La propiedad» es algo que te pertenece (una casa, un terreno) o una característica de algo.",
        ],
        [
          ["En teoría, el plan es perfecto; en la práctica, no tanto.", "In theory the plan is perfect; in practice, not so much."],
          ["Hay un aspecto del proyecto que no me gusta.", "There's one aspect of the project I don't like."],
          ["Tu hermano tiene muy buen aspecto hoy.", "Your brother looks really well today."],
          ["La empresa quiere dar una imagen más moderna.", "The company wants to project a more modern image."],
          ["Recibimos una gran cantidad de correos cada día.", "We get a huge number of emails every day."],
          ["Este terreno es propiedad privada.", "This land is private property."],
        ],
        [
          mc(
            "«Ella tiene buen aspecto» significa…",
            ["She looks well.", "She has a good point.", "She has good manners.", "She has a good reputation."],
            0,
            "«Tener buen aspecto» = parecer sano o estar guapo: to look well. No habla de tener razón, de buenos modales ni de reputación."
          ),
          fb("Completa la frase.", "En ___, el tren llega a las diez, pero siempre llega tarde.", "teoría", "En teoría = in theory (lo que debería pasar, no lo que pasa)."),
        ]
      ),
      sec(
        "Máquinas y distancias",
        [
          "«La máquina» es cualquier aparato: la máquina de café, la máquina de coser. «La distancia» es el espacio entre dos lugares.",
          "«A distancia» significa sin estar presente: trabajar a distancia, estudiar a distancia. «Mantener la distancia» = no acercarse demasiado.",
        ],
        [
          ["La máquina de café de la oficina no funciona otra vez.", "The office coffee machine isn't working again."],
          ["Trabajo a distancia tres días por semana.", "I work remotely three days a week."],
          ["¿Qué distancia hay entre Madrid y Sevilla?", "How far is it from Madrid to Seville?"],
          ["Esta máquina hace todo el proceso en la mitad de tiempo.", "This machine does the whole process in half the time."],
          ["Desde esta distancia no puedo leer el cartel.", "I can't read the sign from this distance."],
        ],
        [
          toEs("I work remotely.", "Trabajo a distancia.", "A distancia = remotely, sin estar en la oficina.", ["Trabajo en remoto.", "Yo trabajo a distancia."]),
        ]
      ),
      sec(
        "El mundo del espectáculo: la obra",
        [
          "«El espectáculo» es un show: un concierto, un circo, una función. «El mundo del espectáculo» = show business. Ojo: «dar un espectáculo» también es montar una escena en público.",
          "«La obra» tiene varios sentidos: una obra de teatro (a play), una obra de arte, las obras de un autor… y «estar en obras» = estar en construcción o reparación.",
        ],
        [
          ["Anoche vimos una obra de teatro muy divertida.", "Last night we saw a very funny play."],
          ["El espectáculo empieza a las nueve en punto.", "The show starts at nine sharp."],
          ["Esta calle está en obras hasta junio.", "This street has roadworks until June."],
          ["Esa pintura es una verdadera obra de arte.", "That painting is a real work of art."],
          ["Mi primo trabaja en el mundo del espectáculo.", "My cousin works in show business."],
          ["La imagen del cartel del espectáculo era preciosa.", "The picture on the show's poster was beautiful."],
        ],
        [
          fb("Completa la frase.", "«Hamlet» es la ___ más famosa de Shakespeare.", "obra", "Una obra (de teatro) = a play, a work."),
        ]
      ),
    ],
    [
      mt(
        "Relaciona cada palabra con su significado.",
        [
          ["la máquina", "machine"],
          ["la propiedad", "property"],
          ["el nivel", "level"],
          ["la cantidad", "amount"],
          ["la distancia", "distance"],
        ],
        "Todas se parecen al inglés, pero fíjate en el género: la máquina, el nivel."
      ),
      fb("Completa la frase.", "Tenemos una gran ___ de trabajo esta semana.", "cantidad", "Una gran cantidad de = a large amount of."),
      fb("Completa la frase.", "Estudio español a ___ con una profesora de México.", "distancia", "Estudiar a distancia = to study remotely."),
      fb("Completa la frase.", "Mi ___ de francés es básico, pero hablo alemán muy bien.", "nivel", "El nivel de un idioma = your level in a language."),
      mc(
        "Completa: «El ___ para conseguir el visado es muy largo: hay que hacer muchos pasos.»",
        ["proceso", "acceso", "aspecto", "nivel"],
        0,
        "Una serie de pasos es un proceso. Acceso es la entrada, aspecto es la apariencia y nivel es el grado."
      ),
      mc(
        "Completa: «Esa casa de la playa es ___ de mis abuelos.»",
        ["propiedad", "cantidad", "base", "imagen"],
        0,
        "«Ser propiedad de alguien» = to be someone's property. Cantidad, base e imagen no expresan de quién es algo."
      ),
      toEs("In theory, the machine works well.", "En teoría, la máquina funciona bien.", "En teoría = in theory; la máquina es femenino.", ["En teoría la máquina funciona bien."]),
      toEs("The show was a work of art.", "El espectáculo fue una obra de arte.", "Show = espectáculo; work of art = obra de arte.", ["El show fue una obra de arte."]),
      toEn("Solo el personal profesional tiene acceso a esta sala.", "Only professional staff have access to this room.", "Tener acceso a = to have access to.", ["Only professional staff has access to this room.", "Only the professional staff have access to this room."]),
      toEn("La empresa cuida mucho su imagen.", "The company takes great care of its image.", "La imagen = la reputación de una persona o empresa.", ["The company really looks after its image.", "The company cares a lot about its image."]),
      wo("Hay un aspecto del proceso que no entiendo.", "Hay + un aspecto + del proceso + que…", "There's one aspect of the process I don't understand."),
      wo("Esta teoría no tiene ninguna base científica.", "No tener ninguna base = to have no basis at all.", "This theory has no scientific basis at all."),
      mc(
        "¿Qué significa «La carretera está en obras»?",
        ["The road is under construction.", "The road is full of artwork.", "The road is closed for a show.", "The road is working normally."],
        0,
        "«Estar en obras» = estar en construcción o reparación: under construction. No tiene que ver con obras de arte, espectáculos ni con funcionar normalmente."
      ),
      fb("Completa la frase.", "El ___ de fin de año en la plaza fue increíble: música, luces y fuegos artificiales.", "espectáculo", "Música, luces y fuegos artificiales: es un espectáculo."),
    ]
  ),
  anchored(
    "B1",
    "b1-vocabulary-practice-7",
    "b1-common-words-body-night-out",
    "Palabras frecuentes: el cuerpo, la salud y una noche de fiesta",
    "Piel, cuello, enfermedad, una copa y una buena conversación: palabras comunes del cuerpo, la salud y la vida social.",
    "10 min",
    [
      sec(
        "El cuerpo: piel, cuello, pecho, cabello",
        [
          "«La piel» cubre todo el cuerpo (skin). «El cuello» está entre la cabeza y los hombros; también es el cuello de una camisa (collar). «El pecho» es la parte delantera del cuerpo (chest). «El cabello» es un poco más formal que «el pelo»; se ve mucho en los productos: champú para el cabello.",
          "Recuerda: con las partes del cuerpo usamos el artículo, no el posesivo: me duele el cuello (no «mi cuello»).",
        ],
        [
          ["Me duele el cuello de tanto mirar el ordenador.", "My neck hurts from staring at the computer so much."],
          ["Usa crema, tienes la piel muy seca.", "Use some cream, your skin is very dry."],
          ["Sentí un dolor fuerte en el pecho y fui al médico.", "I felt a sharp pain in my chest and went to the doctor."],
          ["Este champú es para cabello rizado.", "This shampoo is for curly hair."],
          ["Tiene el cabello largo y la piel muy blanca.", "She has long hair and very pale skin."],
          ["El cuello de esta camisa me aprieta.", "The collar of this shirt is too tight."],
        ],
        [
          mc("¿Dónde te pones una bufanda?", ["en el cuello", "en el pecho", "en la piel", "en el cabello"], 0, "La bufanda (scarf) va alrededor del cuello. El pecho, la piel y el cabello no son su sitio."),
          fb("Completa la frase.", "Me duele el ___ cuando respiro hondo.", "pecho", "Respiramos con los pulmones, dentro del pecho."),
        ]
      ),
      sec(
        "La salud: enfermedad y embarazo",
        [
          "«La enfermedad» es cuando alguien está enfermo (illness, disease). «Embarazada» significa pregnant.",
          "¡Cuidado con este falso amigo! «Estoy embarazada» no significa «I'm embarrassed». Para eso decimos «me da vergüenza» o «qué vergüenza».",
        ],
        [
          ["La gripe es una enfermedad muy común en invierno.", "Flu is a very common illness in winter."],
          ["Mi hermana está embarazada de cinco meses.", "My sister is five months pregnant."],
          ["Estoy embarazada, así que no bebo alcohol.", "I'm pregnant, so I'm not drinking alcohol."],
          ["✗ Estoy embarazada porque me caí. → ✓ Me da vergüenza porque me caí.", "I'm embarrassed because I fell."],
          ["Es una enfermedad de la piel, pero no es contagiosa.", "It's a skin disease, but it isn't contagious."],
        ],
        [
          mc(
            "Una amiga te dice: «¡Estoy embarazada!». ¿Qué significa?",
            ["She's pregnant.", "She's embarrassed.", "She's sick.", "She's drunk."],
            0,
            "Embarazada = pregnant; es un falso amigo muy famoso. Embarrassed se dice «me da vergüenza», sick es enferma y drunk es borracha."
          ),
          fb("Completa la frase.", "El médico dice que no es una ___ grave, solo un resfriado.", "enfermedad", "Una enfermedad = an illness; un resfriado es una enfermedad leve."),
        ]
      ),
      sec(
        "Una noche de fiesta: cerveza, copa, trago",
        [
          "«Tomar una cerveza», «tomar una copa» y «tomar un trago» significan salir a beber algo. «La copa» es el vaso con pie (para vino) y también una bebida con alcohol; la Copa del Mundo es un trofeo.",
          "«Un trago» es la cantidad que bebes de una vez (de un trago = in one gulp) y, en muchos países de América, también una bebida alcohólica. «Borracho» = que ha bebido demasiado: estar borracho.",
        ],
        [
          ["¿Vamos a tomar una cerveza después del trabajo?", "Shall we go for a beer after work?"],
          ["Te invito a una copa.", "Let me buy you a drink."],
          ["Bebió el agua de un solo trago.", "He drank the water in one gulp."],
          ["¿Tomamos un trago en el bar de la esquina?", "Shall we have a drink at the bar on the corner?"],
          ["Pedro estaba tan borracho que no recordaba nada.", "Pedro was so drunk he didn't remember anything."],
          ["Una copa de vino tinto y una cerveza, por favor.", "A glass of red wine and a beer, please."],
        ],
        [
          mc(
            "¿Qué expresión NO significa «beber algo con amigos»?",
            ["tomar el pelo", "tomar una copa", "tomar un trago", "tomar una cerveza"],
            0,
            "«Tomar el pelo» = to pull someone's leg, engañar en broma. Tomar una copa, un trago o una cerveza sí significan beber algo."
          ),
          fb("Completa la frase.", "No conduzcas, estás ___.", "borracho", "Estar borracho = to be drunk. Con estar, porque es un estado."),
        ]
      ),
      sec(
        "Sentimientos, conversación… y palabras que pueden ofender",
        [
          "«Los sentimientos» son lo que sientes: amor, miedo, tristeza. «Una conversación» es una charla entre dos o más personas.",
          "«Loco/locos», «tonto/tonta» y «estúpido/estúpida» describen a alguien que actúa sin pensar. Ojo: pueden ser groseras y ofensivas si se las dices a otra persona. Entre amigos, «¿Estáis locos?» o «No seas tonta» pueden sonar cariñosos, pero con desconocidos es mejor evitarlas. Hablar de ti mismo es más seguro: «Me sentí estúpida».",
        ],
        [
          ["No quiero herir sus sentimientos.", "I don't want to hurt his feelings."],
          ["Tuvimos una conversación muy larga sobre nuestros sentimientos.", "We had a very long conversation about our feelings."],
          ["¡Estáis locos! Es muy tarde para salir.", "You're crazy! It's way too late to go out."],
          ["No seas tonta, claro que puedes venir.", "Don't be silly, of course you can come."],
          ["Me sentí estúpida cuando olvidé su nombre.", "I felt stupid when I forgot his name."],
          ["¡Qué tonta soy! Me dejé las llaves en casa.", "How silly of me! I left my keys at home."],
          ["Mis amigos están locos por el fútbol.", "My friends are crazy about football."],
        ],
        [
          mc(
            "¿Qué frase puedes decir sin ofender a nadie?",
            ["Me sentí estúpida.", "Eres estúpida.", "Eres tonta.", "Estáis locos."],
            0,
            "«Me sentí estúpida» habla de una misma, así que no ofende a nadie. «Eres estúpida», «Eres tonta» y «Estáis locos» critican directamente a otra persona."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona cada parte del cuerpo con su traducción.",
        [
          ["la piel", "skin"],
          ["el cuello", "neck"],
          ["el pecho", "chest"],
          ["el cabello", "hair"],
        ],
        "El cabello es un poco más formal que el pelo."
      ),
      fb("Completa la frase.", "Mi prima está ___ y el bebé nace en marzo.", "embarazada", "El bebé nace en marzo → está embarazada (pregnant)."),
      fb("Completa la frase.", "Anoche Luis bebió demasiado y llegó a casa ___.", "borracho", "Borracho = drunk: el estado de quien ha bebido demasiado (llegó borracho)."),
      fb("Completa la frase.", "Tengo que hablar con mi jefe: vamos a tener una ___ seria.", "conversación", "Tener una conversación = to have a conversation / talk."),
      mc(
        "¿Cómo se dice «I'm embarrassed»?",
        ["Me da vergüenza.", "Estoy embarazada.", "Estoy borracha.", "Estoy enferma."],
        0,
        "«I'm embarrassed» = me da vergüenza. «Estoy embarazada» es un falso amigo (pregnant); borracha es drunk y enferma es sick."
      ),
      toEs("Let's go and have a beer.", "Vamos a tomar una cerveza.", "Tomar una cerveza = to have a beer.", ["¿Tomamos una cerveza?", "Vamos a tomarnos una cerveza.", "Vamos a beber una cerveza."]),
      toEs("She has very soft skin.", "Ella tiene la piel muy suave.", "Con partes del cuerpo usamos el artículo: tiene la piel.", ["Tiene la piel muy suave."]),
      toEn("No quiero hablar de mis sentimientos.", "I don't want to talk about my feelings.", "Los sentimientos = feelings; hablar de = to talk about.", ["I do not want to talk about my feelings."]),
      toEn("¿Te invito a una copa?", "Can I buy you a drink?", "Invitar a una copa = to buy someone a drink.", ["May I buy you a drink?", "Shall I buy you a drink?", "Can I get you a drink?"]),
      wo("Sin decir nada, se tomó el café de un trago.", "De un trago = in one gulp.", "Without saying a word, he drank the coffee in one gulp."),
      wo("La enfermedad no es peligrosa para una mujer embarazada.", "Una mujer embarazada = a pregnant woman.", "The illness isn't dangerous for a pregnant woman."),
      fb("Completa la frase.", "¡Estáis ___! No podéis nadar en el mar con este frío.", "locos", "Estáis → vosotros, así que plural: locos."),
      mc(
        "Tu amiga dice: «¡Qué tonta soy! Perdí las llaves otra vez.» ¿Cómo suena?",
        [
          "Se critica a sí misma con humor; no ofende a nadie.",
          "Está insultando a su amiga.",
          "Está diciendo que está enferma.",
          "Está diciendo que está borracha.",
        ],
        0,
        "«¡Qué tonta soy!» dicho sobre una misma es una autocrítica con humor y no ofende. No insulta a la amiga, ni dice que esté enferma o borracha."
      ),
      toEn("Me sentí estúpida en la conversación con mi jefe.", "I felt stupid in the conversation with my boss.", "Hablar de ti mismo con «estúpida» no ofende a nadie.", ["I felt stupid during the conversation with my boss."]),
    ]
  ),
  anchored(
    "B1",
    "b1-vocabulary-practice-8",
    "b1-common-words-outdoors",
    "Palabras frecuentes: al aire libre",
    "Piedras, polvo, agujeros y un campamento junto al río: palabras del campo y las conversaciones alrededor del fuego.",
    "9 min",
    [
      sec(
        "En el campamento",
        [
          "«El campamento» es el lugar donde acampamos con tiendas de campaña; también hay campamentos de verano para niños. En el campo encontramos piedras, polvo y a veces agujeros en el suelo.",
          "«Los rayos» del sol queman la piel; en una tormenta, «los rayos» son la luz eléctrica del cielo (lightning).",
        ],
        [
          ["Montamos el campamento cerca del río.", "We set up camp near the river."],
          ["Me senté en una piedra grande para descansar.", "I sat on a big stone to rest."],
          ["Hay un agujero en la tienda de campaña y entra el agua.", "There's a hole in the tent and the water is getting in."],
          ["El coche levantó mucho polvo en el camino.", "The car kicked up a lot of dust on the road."],
          ["Cuidado con los rayos del sol al mediodía.", "Be careful with the sun's rays at midday."],
          ["Anoche cayeron rayos cerca del campamento.", "Last night lightning struck near the camp."],
        ],
        [
          fb("Completa la frase.", "Mis hijos van a un ___ de verano en la montaña.", "campamento", "Un campamento de verano = a summer camp."),
          mc(
            "¿Qué significa «Anoche cayeron rayos en el bosque»?",
            ["Lightning struck the forest last night.", "Sunlight shone on the forest last night.", "Stones fell in the forest last night.", "Dust fell on the forest last night."],
            0,
            "En una tormenta, «caer un rayo» = lightning strikes. No son rayos de sol (sunlight), ni piedras, ni polvo."
          ),
        ]
      ),
      sec(
        "Expresiones con piedra, polvo y cerdo",
        [
          "Muchas palabras del campo viven en expresiones. «Quedarse de piedra» = quedarse muy sorprendido. «Estar hecho polvo» = estar muy cansado. «Quitar el polvo» = limpiar los muebles.",
          "«El cerdo» es el animal (pig). Llamar «cerdo» a una persona es un insulto (sucia o mala persona), así que úsalo con cuidado.",
        ],
        [
          ["Me quedé de piedra cuando vi el precio.", "I was stunned when I saw the price."],
          ["Después de la caminata, estoy hecho polvo.", "After the hike, I'm worn out."],
          ["Los sábados quito el polvo de los muebles.", "On Saturdays I dust the furniture."],
          ["En la granja hay un cerdo, dos vacas y muchas gallinas.", "On the farm there's a pig, two cows and lots of hens."],
          ["Tiene el corazón de piedra.", "He has a heart of stone."],
        ],
        [
          mc(
            "«Estoy hecho polvo» significa…",
            ["Estoy muy cansado.", "Estoy muy sucio.", "Estoy muy enfadado.", "Estoy muy contento."],
            0,
            "«Estar hecho polvo» = estar agotado, muy cansado. No significa estar sucio, enfadado ni contento."
          ),
          fb("Completa la frase.", "Cuando me dieron la noticia, me quedé de ___.", "piedra", "Quedarse de piedra = to be stunned."),
        ]
      ),
      sec(
        "Lugares: el interior",
        [
          "«Los lugares» son sitios: lugares de interés, lugares turísticos. «El interior» es la parte de dentro: el interior de una casa, o el interior de un país (lejos de la costa).",
          "También: la ropa interior (underwear) y el Ministerio del Interior (Home Office / Interior Ministry).",
        ],
        [
          ["Visitamos muchos lugares bonitos en el viaje.", "We visited lots of beautiful places on the trip."],
          ["El interior de la cueva estaba oscuro y frío.", "The inside of the cave was dark and cold."],
          ["En el interior del país hace más calor que en la costa.", "Inland it's hotter than on the coast."],
          ["¿Cuáles son los lugares más tranquilos para acampar?", "Which are the quietest places to camp?"],
          ["Metí la ropa interior en una bolsa aparte.", "I put my underwear in a separate bag."],
        ],
        [
          toEs("We visited many places.", "Visitamos muchos lugares.", "Place = lugar; en plural, lugares.", ["Hemos visitado muchos lugares.", "Visitamos muchos sitios."]),
        ]
      ),
      sec(
        "Alrededor del fuego: relaciones y asuntos",
        [
          "Por la noche, alrededor del fuego, la gente habla de sus «relaciones» (con la familia, la pareja, los amigos) y de sus «asuntos» (temas o cosas personales y de trabajo).",
          "«Meterse en los asuntos de otros» = entrometerse. «Asuntos exteriores» = foreign affairs. «Relaciones públicas» = public relations.",
        ],
        [
          ["Hablamos de nuestras relaciones familiares hasta muy tarde.", "We talked about our family relationships until very late."],
          ["Tengo algunos asuntos pendientes en el trabajo.", "I have some unfinished business at work."],
          ["No te metas en mis asuntos.", "Stay out of my business."],
          ["Las relaciones entre los dos países son buenas.", "Relations between the two countries are good."],
          ["Es el ministro de Asuntos Exteriores.", "He's the Foreign Minister."],
        ],
        [
          fb("Completa la frase.", "No me gusta que otras personas se metan en mis ___.", "asuntos", "Meterse en los asuntos de alguien = to meddle in someone's business."),
        ]
      ),
    ],
    [
      mt(
        "Relaciona cada palabra con su traducción.",
        [
          ["la piedra", "stone"],
          ["el polvo", "dust"],
          ["el agujero", "hole"],
          ["el cerdo", "pig"],
          ["los rayos", "lightning / rays"],
        ],
        "Vocabulario básico del campo."
      ),
      fb("Completa la frase.", "Mi calcetín tiene un ___ y se me ve el dedo.", "agujero", "Un agujero = a hole; por él se ve el dedo."),
      fb("Completa la frase.", "Durante la tormenta, los ___ iluminaron todo el cielo.", "rayos", "En una tormenta hay rayos y truenos."),
      fb("Completa la frase.", "Llegamos al ___ justo antes de la noche y montamos las tiendas.", "campamento", "Donde montas las tiendas: el campamento."),
      mc(
        "Completa: «Los muebles están llenos de ___; hay que limpiar.»",
        ["polvo", "piedra", "agujero", "interior"],
        0,
        "Lo que se acumula en los muebles es el polvo (dust). Piedra, agujero e interior no tienen sentido aquí."
      ),
      mc(
        "«Me quedé de piedra» significa…",
        ["Me sorprendí muchísimo.", "Me quedé dormido.", "Me hice daño.", "Me aburrí mucho."],
        0,
        "«Quedarse de piedra» = quedarse inmóvil de sorpresa: me sorprendí muchísimo. No significa dormirse, hacerse daño ni aburrirse."
      ),
      toEs("There's a hole in the tent.", "Hay un agujero en la tienda de campaña.", "Hole = agujero; tent = tienda de campaña.", ["Hay un agujero en la tienda.", "Hay un agujero en la carpa."]),
      toEs("The pig is eating in the mud.", "El cerdo está comiendo en el barro.", "Pig = cerdo; estar + gerundio para una acción en progreso.", ["El cerdo come en el barro."]),
      toEn("El interior de la casa es muy moderno.", "The interior of the house is very modern.", "El interior = the inside / interior; lo contrario es el exterior.", ["The inside of the house is very modern.", "The house's interior is very modern."]),
      toEn("Las relaciones entre los vecinos son difíciles.", "Relations between the neighbors are difficult.", "Relaciones (en plural) = relations, relationships.", ["Relations between the neighbours are difficult.", "The relationships between the neighbors are difficult.", "Relations among the neighbors are difficult."]),
      wo("Hay muchos lugares interesantes en el interior del país.", "Lugares interesantes + en el interior del país.", "There are many interesting places inland."),
      wo("Tengo que resolver unos asuntos antes de volver al campamento.", "Resolver unos asuntos = to sort out some matters.", "I have to sort out a few matters before going back to the camp."),
      fb("Completa la frase.", "Tiró una ___ al río y se hundió enseguida.", "piedra", "Una piedra pesa y se hunde en el agua."),
    ]
  ),
  anchored(
    "B1",
    "b1-vocabulary-practice-9",
    "b1-common-words-expressions",
    "Palabras frecuentes: expresiones de todos los días",
    "Apenas, al contrario, a propósito, echar un vistazo, debí: expresiones muy comunes para reaccionar, opinar y hablar del pasado.",
    "10 min",
    [
      sec(
        "Apenas, definitivamente, verdadera",
        [
          "«Apenas» significa casi no (barely, hardly): apenas dormí. Al principio de una frase también puede significar «en cuanto» (as soon as): apenas llegué, me llamó.",
          "«Definitivamente» significa «de forma definitiva, para siempre» (for good). En muchos países también se usa como «sin duda» (definitely). «Verdadero/verdadera» = real, auténtico: la verdadera razón, una verdadera amiga.",
        ],
        [
          ["Apenas dormí anoche.", "I barely slept last night."],
          ["Apenas llegué a casa, empezó a llover.", "As soon as I got home, it started to rain."],
          ["Se fue a vivir a Chile definitivamente.", "He moved to Chile for good."],
          ["Definitivamente, esta es la mejor pizza de la ciudad.", "This is definitely the best pizza in town."],
          ["¿Cuál es la verdadera razón de tu viaje?", "What's the real reason for your trip?"],
          ["Es una verdadera amiga.", "She's a true friend."],
        ],
        [
          fb("Completa la frase.", "Estaba tan cansado que ___ podía abrir los ojos.", "apenas", "Apenas = casi no (barely): apenas podía abrir los ojos."),
          mc(
            "«Nos mudamos a Lima definitivamente» significa…",
            ["Nos mudamos para siempre.", "Nos mudamos quizás.", "Nos mudamos por unos días.", "Nos mudamos otra vez."],
            0,
            "Definitivamente = de forma definitiva, para siempre. Ojo: no significa «definitely» (seguro), ni «quizás», ni «por unos días», ni «otra vez»."
          ),
        ]
      ),
      sec(
        "Al contrario, a propósito, echar un vistazo",
        [
          "«Al contrario» = no, justo lo opuesto. «Lo contrario» = lo opuesto.",
          "«A propósito» tiene dos sentidos: on purpose (lo hizo a propósito) y by the way (a propósito, ¿viste a Juan?). «El propósito» = el objetivo. «Echar un vistazo» = mirar algo rápidamente.",
        ],
        [
          ["—¿Estás cansado? —Al contrario, tengo mucha energía.", "\"Are you tired?\" \"On the contrary, I've got loads of energy.\""],
          ["Rompió el vaso a propósito.", "He broke the glass on purpose."],
          ["A propósito, ¿has visto a Laura?", "By the way, have you seen Laura?"],
          ["¿Puedes echar un vistazo a mi informe?", "Can you take a look at my report?"],
          ["Siempre dice lo contrario de lo que piensa.", "He always says the opposite of what he thinks."],
          ["El propósito de la reunión es tomar una decisión.", "The purpose of the meeting is to make a decision."],
        ],
        [
          mc(
            "En «Lo hizo a propósito», «a propósito» significa…",
            ["on purpose", "by the way", "for good", "as soon as"],
            0,
            "«A propósito» = con intención: on purpose. También puede significar «by the way», pero no en «lo hizo a propósito». No significa «for good» ni «as soon as»."
          ),
          fb("Completa la frase.", "Antes de firmar, voy a echar un ___ al contrato.", "vistazo", "Echar un vistazo = to take a look."),
        ]
      ),
      sec(
        "Apuestas, órdenes y opiniones",
        [
          "«Te apuesto que…» = I bet you that… (de apostar, o → ue). «¡Detente!» es el imperativo de detenerse para tú: Stop!",
          "«Ridículo» = absurdo; «hacer el ridículo» = hacer algo que da vergüenza en público. «Brillante» = que brilla, o muy inteligente: una idea brillante. «El acto» es una acción o una ceremonia; «en el acto» = inmediatamente.",
        ],
        [
          ["Te apuesto que mañana llueve.", "I bet you it'll rain tomorrow."],
          ["¡Detente! El semáforo está en rojo.", "Stop! The light is red."],
          ["Detente un momento y piensa.", "Stop for a moment and think."],
          ["Hice el ridículo en la fiesta.", "I made a fool of myself at the party."],
          ["Tuvo una idea brillante para el proyecto.", "She had a brilliant idea for the project."],
          ["Vimos una luz brillante en el cielo.", "We saw a bright light in the sky."],
          ["Lo despidieron en el acto.", "They fired him on the spot."],
          ["El acto de graduación empieza a las cinco.", "The graduation ceremony starts at five."],
        ],
        [
          fb("Completa la frase.", "Te ___ diez euros a que no viene.", "apuesto", "Apostar → yo apuesto (o → ue)."),
        ]
      ),
      sec(
        "Deber en el pasado y lo que ocurrió",
        [
          "«Debía» (imperfecto) habla de una obligación o un plan en el pasado: el tren debía salir a las ocho (was supposed to). «Debí» y «debió» (pretérito) + infinitivo = should have: debí llamarte = I should have called you.",
          "«Debió de» + infinitivo expresa una suposición: debió de perder el tren = he must have missed the train. «Ocurrió» = pasó, sucedió. «Dando» es el gerundio de dar: estar dando un paseo, seguir dando vueltas.",
        ],
        [
          ["Debí estudiar más para el examen.", "I should have studied more for the exam."],
          ["Ella debió decírmelo antes.", "She should have told me earlier."],
          ["El tren debía salir a las ocho, pero salió a las nueve.", "The train was supposed to leave at eight, but it left at nine."],
          ["No sé qué ocurrió anoche.", "I don't know what happened last night."],
          ["Estábamos dando un paseo cuando ocurrió el accidente.", "We were out for a walk when the accident happened."],
          ["Llega tarde; debió de perder el autobús.", "He's late; he must have missed the bus."],
          ["Estoy dando clases de guitarra.", "I'm giving guitar lessons."],
        ],
        [
          { ...fb("Completa la frase.", "¿Qué ___ ayer en la reunión? Nadie me cuenta nada.", "ocurrió", "Ocurrir → ocurrió (pretérito): what happened."), altAnswers: ["pasó"] },
        ]
      ),
    ],
    [
      mt(
        "Relaciona cada expresión con su significado.",
        [
          ["a propósito", "on purpose / by the way"],
          ["al contrario", "on the contrary"],
          ["echar un vistazo", "to take a look"],
          ["en el acto", "on the spot"],
          ["hacer el ridículo", "to make a fool of yourself"],
        ],
        "Expresiones fijas muy frecuentes en la conversación."
      ),
      fb("Completa la frase.", "Llevamos una hora ___ vueltas y no encontramos la calle.", "dando", "Dar vueltas = to go around in circles; llevar + gerundio: llevamos una hora dando vueltas."),
      fb("Completa la frase.", "Es una idea ___; seguro que al jefe le va a encantar.", "brillante", "Brillante, hablando de una idea, = muy inteligente (brilliant)."),
      fb("Completa la frase.", "Ir a una boda en pijama es ___.", "ridículo", "Ridículo = absurdo, que hace reír."),
      fb("Completa la frase.", "___ decirte la verdad desde el principio. Lo siento.", "Debí", "Debí + infinitivo = I should have (yo, pretérito)."),
      mc(
        "Tu amigo no ha llegado a la cena. ¿Qué frase expresa una suposición sobre el pasado?",
        ["Debió de perder el tren.", "Debía perder el tren.", "Debí perder el tren.", "Debe perder el tren."],
        0,
        "«Deber de» + infinitivo expresa suposición: debió de perder el tren = he must have missed the train. «Debía perder» y «debe perder» suenan a obligación, y «debí» es la forma de yo."
      ),
      mc(
        "Completa: «—¿No te gusta la película? —___, ¡me encanta!»",
        ["Al contrario", "A propósito", "Apenas", "Acto seguido"],
        0,
        "«Al contrario» = justo lo opuesto de lo que dice la otra persona. «A propósito» es on purpose / by the way, «apenas» es barely y «acto seguido» es right after."
      ),
      toEs("I bet you he doesn't come.", "Te apuesto que no viene.", "Apostar cambia o→ue en presente: apuesto; «I bet you» = te apuesto que.", ["Te apuesto a que no viene.", "Apuesto a que no viene.", "Apuesto que no viene.", "Te apuesto que no va a venir."]),
      toEs("Stop! There's a car coming.", "¡Detente! Viene un coche.", "¡Detente! = imperativo de detenerse para tú.", ["¡Detente, viene un coche!", "¡Detente! Viene un carro.", "¡Detente! Viene un auto."]),
      toEn("Apenas terminó la película, se fue.", "As soon as the movie ended, he left.", "Apenas al principio de la frase = en cuanto (as soon as).", ["As soon as the film ended, he left.", "As soon as the movie finished, he left.", "As soon as the film finished, he left.", "As soon as the movie ended, she left.", "As soon as the film ended, she left."]),
      toEn("Esta es la verdadera historia de lo que ocurrió.", "This is the true story of what happened.", "Verdadera = real, auténtica; ocurrió = pasó.", ["This is the real story of what happened."]),
      wo("A propósito, ¿echaste un vistazo a mi correo?", "A propósito = by the way; echar un vistazo = to take a look.", "By the way, did you take a look at my email?"),
      wo("Definitivamente, no voy a volver a ese restaurante.", "Definitivamente aquí significa «sin duda».", "I'm definitely not going back to that restaurant."),
      fb("Completa la frase.", "El avión ___ aterrizar a las seis, pero hubo un retraso.", "debía", "Debía (imperfecto) = was supposed to: era el plan."),
    ]
  ),
];
