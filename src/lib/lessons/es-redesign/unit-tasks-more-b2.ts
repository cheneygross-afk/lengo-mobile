// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/unit-tasks-more-b2.ts by scripts/sync-content.mjs -- edit it there, not here.
// B2 "Read and write" lessons for the six newer topics (history, science,
// tech, health, festivals, animals). Same rules as unit-tasks-b2.ts: each
// version matches its unit's length, grammar and question count, and any
// word the course hasn't taught is glossed.
import { version as v, type MoreVersions, type ReadingQuestion } from "./unit-tasks";

const P1 = " Say what you want, what you hope a friend does, and one thing you'd rather happen.";
const P2 = " Say what you're glad about, what you doubt, what's important and what you're sure of.";
const P3 = " Welcome a new person with usted: give two instructions, say one thing not to do, and tell a friend (tú) not to do something.";
const P4 = " Plan it with a friend: say let's, give a command with a pronoun, say what you would do and ask politely.";
const P5 = " Say what had already happened, what will happen if things go well, and what you'll have done by a date.";
const P6 = " Guess where a friend is, say what's done there and what you can't do, and tell two small accidents.";
const P7 = " Say what you're looking for, what you already have, and what a friend helps you do.";
const ESPERO = ": after espero que, the verb is subjunctive.";
const PREFIERO = ": after prefiero que, the verb is subjunctive.";
const FEEL = ": a feeling about someone else takes the subjunctive.";
const CREE = ": creer que is sure enough for the normal form.";
const SURE = ": being sure takes the normal form.";
const NEG = ": a negative command is always subjunctive.";
const NEGTU = ": a negative tú command is subjunctive too.";
const END = ": on a yes-command the pronoun rides on the end.";
const COND = ": the conditional makes a wish polite.";
const HABIA = ": había + participle is the past before the past.";
const SI = ": present after si, then the future.";
const BYTHEN = ": done by that point.";
const GUESS = ": the future as a guess about now.";
const ACC = ": an accident, with the verb copying the thing.";
const NOTYET = ": not found yet, so subjunctive.";
const PARAQUE = ": para que always takes the subjunctive.";
const hablar = (who: string, others: string): ReadingQuestion => ["¿Con quién hay que hablar al llegar?", [`con ${who}`, others, "con nadie"], 0, `Hable con ${who}: a usted command.`];

export const B2_MORE: MoreVersions = {
  "b2/1": {
    history: v(
      "The night before the exhibition",
      "exposición (exhibition), vitrinas (display cases)",
      ["Mañana abre la exposición sobre los mayas.", "Quiero que todo salga bien.", "Espero que Bruno llegue temprano y que traiga los mapas.", "Le pido que limpie las vitrinas antes de la visita.", "La directora quiere que seamos puntuales y que tengamos paciencia.", "Ojalá que vengan muchas escuelas.", "Prefiero que los niños entren primero.", "Bruno me dice que no me preocupe, pero yo necesito que todo esté listo."],
      "Tomorrow the exhibition about the Maya opens. I want everything to go well. I hope Bruno arrives early and brings the maps. I'm asking him to clean the display cases before the visit. The director wants us to be on time and to be patient. I hope lots of schools come. I'd rather the children go in first. Bruno tells me not to worry, but I need everything to be ready.",
      [
        ["¿Qué pasa mañana?", ["Abre la exposición sobre los mayas.", "Es un día normal.", "Hay una fiesta."], 0, "Mañana abre la exposición sobre los mayas."],
        ["¿Qué espera Inés que traiga Bruno?", ["las vitrinas", "los mapas", "las sillas"], 1, "Espero que traiga los mapas" + ESPERO],
        ["¿Qué prefiere Inés?", ["que nadie entre", "que los niños entren primero", "que Bruno limpie todo"], 1, "Prefiero que los niños entren primero" + PREFIERO],
      ],
      "Write about an event you're getting ready for: a museum visit, a talk, a trip to an old place." + P1,
      "Mañana es la visita al museo de historia. Quiero que todo salga bien. Espero que mi amigo Bruno llegue temprano y que traiga las entradas. Le pido que busque un buen guía. Ojalá que haya poca gente. Prefiero que empecemos por la sala de los mayas. Necesito que todo esté listo a las nueve.",
    ),
    science: v(
      "The night before the eclipse",
      "eclipse total de sol (total solar eclipse), lentes (glasses), mediodía (noon), nubes (clouds)",
      ["Mañana hay un eclipse total de sol.", "Quiero que todo salga bien.", "Espero que Hugo llegue temprano y que traiga los lentes especiales.", "Le pido que prepare las cámaras antes del mediodía.", "La directora quiere que seamos puntuales y que tengamos cuidado.", "Ojalá que no haya nubes.", "Prefiero que los estudiantes miren primero.", "Hugo me dice que no me preocupe, pero yo necesito que todo esté listo."],
      "Tomorrow there's a total solar eclipse. I want everything to go well. I hope Hugo arrives early and brings the special glasses. I'm asking him to get the cameras ready before noon. The director wants us to be on time and to be careful. I hope there are no clouds. I'd rather the students look first. Hugo tells me not to worry, but I need everything to be ready.",
      [
        ["¿Qué pasa mañana?", ["Hay un eclipse total de sol.", "Es un día normal.", "Hay una fiesta."], 0, "Mañana hay un eclipse total de sol."],
        ["¿Qué espera Vera que traiga Hugo?", ["las cámaras", "los lentes especiales", "los telescopios"], 1, "Espero que traiga los lentes especiales" + ESPERO],
        ["¿Qué prefiere Vera?", ["que nadie mire", "que los estudiantes miren primero", "que Hugo mire solo"], 1, "Prefiero que los estudiantes miren primero" + PREFIERO],
      ],
      "Write about something in nature or science you're getting ready for: an eclipse, a hike, an experiment." + P1,
      "Mañana hay un eclipse. Quiero que todo salga bien. Espero que mi amigo Hugo llegue temprano y que traiga el telescopio. Le pido que prepare la cámara. Ojalá que no haya nubes. Prefiero que miremos desde el parque. Necesito que todo esté listo a las diez.",
    ),
    tech: v(
      "The night before the launch",
      "lanzamos (we launch), lanzamiento (launch), errores (bugs), opinen (give their opinion)",
      ["Mañana lanzamos nuestro primer juego.", "Quiero que todo salga bien.", "Espero que Mía llegue temprano y que traiga los diseños finales.", "Le pido que pruebe el último nivel antes del lanzamiento.", "El jefe quiere que seamos puntuales y que tengamos paciencia.", "Ojalá que no haya errores.", "Prefiero que los jugadores opinen primero.", "Mía me dice que no me preocupe, pero yo necesito que todo esté listo."],
      "Tomorrow we launch our first game. I want everything to go well. I hope Mía arrives early and brings the final designs. I'm asking her to test the last level before the launch. The boss wants us to be on time and to be patient. I hope there are no bugs. I'd rather the players give their opinion first. Mía tells me not to worry, but I need everything to be ready.",
      [
        ["¿Qué pasa mañana?", ["Lanzan su primer juego.", "Es un día normal.", "Hay una fiesta."], 0, "Mañana lanzamos nuestro primer juego."],
        ["¿Qué espera Nico que traiga Mía?", ["a los jugadores", "los diseños finales", "las computadoras"], 1, "Espero que traiga los diseños finales" + ESPERO],
        ["¿Qué prefiere Nico?", ["que nadie opine", "que los jugadores opinen primero", "que Mía pruebe el juego sola"], 1, "Prefiero que los jugadores opinen primero" + PREFIERO],
      ],
      "Write about something you're getting ready for with games or technology: a launch, a tournament, a new device." + P1,
      "Mañana es el torneo de videojuegos. Quiero que todo salga bien. Espero que mi amiga Mía llegue temprano y que traiga su consola. Le pido que pruebe la conexión. Ojalá que no haya problemas. Prefiero que juguemos en equipo. Necesito que todo esté listo a las seis.",
    ),
    health: v(
      "The night before the race",
      "revise (check), ruta (route), salida (start)",
      ["Mañana es la carrera del hospital.", "Quiero que todo salga bien.", "Espero que Iván llegue temprano y que traiga el agua.", "Le pido que revise la ruta antes de la salida.", "La directora quiere que seamos puntuales y que tengamos cuidado.", "Ojalá que no haga mucho calor.", "Prefiero que los niños corran primero.", "Iván me dice que no me preocupe, pero yo necesito que todo esté listo."],
      "Tomorrow is the hospital's race. I want everything to go well. I hope Iván arrives early and brings the water. I'm asking him to check the route before the start. The director wants us to be on time and to be careful. I hope it isn't very hot. I'd rather the children run first. Iván tells me not to worry, but I need everything to be ready.",
      [
        ["¿Qué pasa mañana?", ["Es la carrera del hospital.", "Es un día normal.", "Hay una reunión."], 0, "Mañana es la carrera del hospital."],
        ["¿Qué espera Clara que traiga Iván?", ["las medallas", "el agua", "la ruta"], 1, "Espero que traiga el agua" + ESPERO],
        ["¿Qué prefiere Clara?", ["que nadie corra", "que los niños corran primero", "que Iván corra solo"], 1, "Prefiero que los niños corran primero" + PREFIERO],
      ],
      "Write about something you're getting ready for, for your health: a race, a class, a check-up." + P1,
      "Mañana es mi primera carrera de diez kilómetros. Quiero que todo salga bien. Espero que mi amigo Iván llegue temprano y que traiga agua. Le pido que revise mis zapatos. Ojalá que no haga mucho calor. Prefiero que corramos juntos. Necesito que todo esté listo a las siete.",
    ),
    festivals: v(
      "The night before the town festival",
      "instrumentos (instruments), decore (decorate)",
      ["Mañana empieza la fiesta del pueblo.", "Quiero que todo salga bien.", "Espero que Raúl llegue temprano y que traiga los instrumentos.", "Le pido que decore la plaza antes del desfile.", "Mi abuela quiere que seamos puntuales y que tengamos paciencia.", "Ojalá que venga todo el pueblo.", "Prefiero que los niños bailen primero.", "Raúl me dice que no me preocupe, pero yo necesito que todo esté listo."],
      "Tomorrow the town festival starts. I want everything to go well. I hope Raúl arrives early and brings the instruments. I'm asking him to decorate the square before the parade. My grandmother wants us to be on time and to be patient. I hope the whole town comes. I'd rather the children dance first. Raúl tells me not to worry, but I need everything to be ready.",
      [
        ["¿Qué pasa mañana?", ["Empieza la fiesta del pueblo.", "Es un día normal.", "Hay una reunión."], 0, "Mañana empieza la fiesta del pueblo."],
        ["¿Qué espera Paula que traiga Raúl?", ["las flores", "los instrumentos", "las sillas"], 1, "Espero que traiga los instrumentos" + ESPERO],
        ["¿Qué prefiere Paula?", ["que nadie baile", "que los niños bailen primero", "que Raúl cante solo"], 1, "Prefiero que los niños bailen primero" + PREFIERO],
      ],
      "Write about a festival, a holiday or a party you're getting ready for." + P1,
      "Mañana es la fiesta de mi barrio. Quiero que todo salga bien. Espero que mi amigo Raúl llegue temprano y que traiga su guitarra. Le pido que decore la calle. Ojalá que venga mucha gente. Prefiero que cenemos todos juntos. Necesito que todo esté listo a las seis.",
    ),
    animals: v(
      "The night before the shelter opens",
      "refugio (shelter), establos (stables), alcaldesa (mayor)",
      ["Mañana abre nuestro refugio de animales.", "Quiero que todo salga bien.", "Espero que Simón llegue temprano y que traiga la comida de los perros.", "Le pido que limpie los establos antes de la visita.", "La alcaldesa quiere que seamos puntuales y que tengamos paciencia.", "Ojalá que vengan muchas familias.", "Prefiero que los perros mayores encuentren casa primero.", "Simón me dice que no me preocupe, pero yo necesito que todo esté listo."],
      "Tomorrow our animal shelter opens. I want everything to go well. I hope Simón arrives early and brings the dogs' food. I'm asking him to clean the stables before the visit. The mayor wants us to be on time and to be patient. I hope lots of families come. I'd rather the older dogs find a home first. Simón tells me not to worry, but I need everything to be ready.",
      [
        ["¿Qué pasa mañana?", ["Abre el refugio de animales.", "Es un día normal.", "Hay una fiesta."], 0, "Mañana abre nuestro refugio de animales."],
        ["¿Qué espera Julia que traiga Simón?", ["los establos", "la comida de los perros", "a las familias"], 1, "Espero que traiga la comida de los perros" + ESPERO],
        ["¿Qué prefiere Julia?", ["que nadie adopte", "que los perros mayores encuentren casa primero", "que Simón adopte un perro"], 1, "Prefiero que los perros mayores encuentren casa primero" + PREFIERO],
      ],
      "Write about something you're getting ready for with a pet or other animals." + P1,
      "Mañana llega mi perro nuevo. Quiero que todo salga bien. Espero que mi hermana llegue temprano y que traiga su cama. Le pido que prepare el jardín. Ojalá que le guste la casa. Prefiero que duerma en mi cuarto. Necesito que todo esté listo a las cinco.",
    ),
  },
  "b2/2": {
    history: v(
      "What Inés thinks about the past",
      "jóvenes (young people), comunidades indígenas (Indigenous communities), perdida (lost), selva (jungle), entender (to understand)",
      ["Me alegra que los jóvenes visiten los museos.", "Me sorprende que tantos turistas conozcan la historia de los incas.", "Bruno cree que los libros viejos son mejores, pero yo dudo que sea verdad.", "No creo que tengan toda la información.", "Es importante que escuchemos a las comunidades indígenas.", "Es posible que encuentren otra ciudad perdida en la selva.", "Me molesta que algunas personas toquen los objetos, pero es mejor que tengamos paciencia.", "Estoy segura de que la historia nos ayuda a entender el presente."],
      "I'm glad that young people visit museums. It surprises me that so many tourists know the history of the Incas. Bruno thinks that old books are better, but I doubt that's true. I don't think they have all the information. It's important that we listen to Indigenous communities. It's possible that they'll find another lost city in the jungle. It bothers me that some people touch the objects, but it's better for us to be patient. I'm sure that history helps us understand the present.",
      [
        ["¿Qué le alegra a Inés?", ["que los jóvenes visiten los museos", "que toquen los objetos", "que los libros sean viejos"], 0, "Me alegra que los jóvenes visiten los museos" + FEEL],
        ["¿Qué cree Bruno?", ["que los museos son aburridos", "que los libros viejos son mejores", "que no hay ciudades perdidas"], 1, "Bruno cree que los libros viejos son mejores" + CREE],
        ["¿De qué está segura Inés?", ["de que los libros viejos son mejores", "de que la historia nos ayuda a entender el presente", "de que no hay más ciudades perdidas"], 1, "Estoy segura de que la historia nos ayuda" + SURE],
      ],
      "Give your opinions about history, museums or how we remember the past." + P2,
      "Me alegra que mi ciudad tenga tantos museos. Me sorprende que la entrada sea gratis. No creo que los libros viejos sean siempre mejores. Es importante que los niños conozcan la historia de su país. Es posible que abran una sala nueva en mi museo favorito. Me molesta que la gente toque los objetos. Pero estoy seguro de que la historia nos ayuda a entender el presente.",
    ),
    science: v(
      "What Vera thinks about science",
      "océano (ocean), vida (life), pruebas (proof), bosques (forests), principio (beginning)",
      ["Me alegra que cada año más jóvenes estudien ciencias.", "Me sorprende que todavía sepamos tan poco del océano.", "Hugo cree que hay vida en Marte, pero yo dudo que sea verdad.", "No creo que tengamos pruebas todavía.", "Es importante que cuidemos los bosques.", "Es posible que descubran planetas nuevos este año.", "Me molesta que algunas personas no crean en la ciencia, pero es mejor que tengamos paciencia.", "Estoy segura de que la curiosidad es el principio de todo."],
      "I'm glad that every year more young people study science. It surprises me that we still know so little about the ocean. Hugo thinks there's life on Mars, but I doubt that's true. I don't think we have proof yet. It's important that we look after the forests. It's possible that they'll discover new planets this year. It bothers me that some people don't believe in science, but it's better for us to be patient. I'm sure that curiosity is the beginning of everything.",
      [
        ["¿Qué le alegra a Vera?", ["que más jóvenes estudien ciencias", "que haya vida en Marte", "que sepamos poco del océano"], 0, "Me alegra que más jóvenes estudien ciencias" + FEEL],
        ["¿Qué cree Hugo?", ["que el océano es pequeño", "que hay vida en Marte", "que no hay planetas nuevos"], 1, "Hugo cree que hay vida en Marte" + CREE],
        ["¿De qué está segura Vera?", ["de que hay vida en Marte", "de que la curiosidad es el principio de todo", "de que ya tenemos pruebas"], 1, "Estoy segura de que la curiosidad es el principio de todo" + SURE],
      ],
      "Give your opinions about science or nature." + P2,
      "Me alegra que mi ciudad tenga un parque tan grande. Me sorprende que haya tantos pájaros. No creo que haya vida en Marte. Es importante que cuidemos los bosques y los ríos. Es posible que descubran un planeta nuevo este año. Me molesta que la gente deje basura en el campo. Pero estoy seguro de que la ciencia puede ayudar.",
    ),
    tech: v(
      "What Nico thinks about technology",
      "videollamadas (video calls), protejamos (we protect), datos (data), inteligencia artificial (artificial intelligence)",
      ["Me alegra que mis abuelos usen videollamadas.", "Me sorprende que los niños aprendan a programar tan rápido.", "Mía cree que los juegos viejos son mejores, pero yo dudo que sea verdad.", "No creo que tengan mejores historias.", "Es importante que protejamos nuestros datos.", "Es posible que la inteligencia artificial cambie nuestro trabajo.", "Me molesta que algunas personas miren el teléfono durante la cena, pero es mejor que tengamos paciencia.", "Estoy seguro de que la tecnología es buena si la usamos bien."],
      "I'm glad that my grandparents use video calls. It surprises me that children learn to code so fast. Mía thinks that old games are better, but I doubt that's true. I don't think they have better stories. It's important that we protect our data. It's possible that artificial intelligence will change our work. It bothers me that some people look at their phone during dinner, but it's better for us to be patient. I'm sure that technology is good if we use it well.",
      [
        ["¿Qué le alegra a Nico?", ["que sus abuelos usen videollamadas", "que miren el teléfono en la cena", "que los juegos sean viejos"], 0, "Me alegra que mis abuelos usen videollamadas" + FEEL],
        ["¿Qué cree Mía?", ["que los niños no saben programar", "que los juegos viejos son mejores", "que la tecnología es mala"], 1, "Mía cree que los juegos viejos son mejores" + CREE],
        ["¿De qué está seguro Nico?", ["de que los juegos viejos son mejores", "de que la tecnología es buena si la usamos bien", "de que su trabajo no va a cambiar"], 1, "Estoy seguro de que la tecnología es buena" + SURE],
      ],
      "Give your opinions about technology, phones or games." + P2,
      "Me alegra que mi abuela use videollamadas. Me sorprende que aprenda tan rápido. No creo que los teléfonos caros sean siempre mejores. Es importante que protejamos nuestros datos. Es posible que la inteligencia artificial cambie mi trabajo. Me molesta que la gente mire el teléfono en la mesa. Pero estoy seguro de que la tecnología nos ayuda.",
    ),
    health: v(
      "What Clara thinks about health",
      "vitaminas (vitamins), lo curan todo (cure everything), efecto (effect), estrés (stress), dietas milagrosas (miracle diets)",
      ["Me alegra que mis pacientes caminen todos los días.", "Me sorprende que tanta gente duerma menos de seis horas.", "Iván cree que las vitaminas lo curan todo, pero yo dudo que sea verdad.", "No creo que tengan tanto efecto.", "Es importante que comamos más verduras.", "Es posible que el estrés cause muchos problemas.", "Me molesta que algunas personas busquen dietas milagrosas, pero es mejor que tengamos paciencia.", "Estoy segura de que dormir bien es la mejor medicina."],
      "I'm glad that my patients walk every day. It surprises me that so many people sleep less than six hours. Iván thinks that vitamins cure everything, but I doubt that's true. I don't think they have that much effect. It's important that we eat more vegetables. It's possible that stress causes a lot of problems. It bothers me that some people look for miracle diets, but it's better for us to be patient. I'm sure that sleeping well is the best medicine.",
      [
        ["¿Qué le alegra a Clara?", ["que sus pacientes caminen todos los días", "que duerman poco", "que busquen dietas milagrosas"], 0, "Me alegra que mis pacientes caminen todos los días" + FEEL],
        ["¿Qué cree Iván?", ["que caminar es malo", "que las vitaminas lo curan todo", "que el estrés no existe"], 1, "Iván cree que las vitaminas lo curan todo" + CREE],
        ["¿De qué está segura Clara?", ["de que las vitaminas lo curan todo", "de que dormir bien es la mejor medicina", "de que las dietas milagrosas funcionan"], 1, "Estoy segura de que dormir bien es la mejor medicina" + SURE],
      ],
      "Give your opinions about health, food or exercise." + P2,
      "Me alegra que mi familia coma más verduras. Me sorprende que mi hermano corra todos los días. No creo que las dietas milagrosas funcionen. Es importante que durmamos ocho horas. Es posible que el estrés cause muchos problemas. Me molesta que la gente fume en la calle. Pero estoy seguro de que caminar es la mejor medicina.",
    ),
    festivals: v(
      "What Paula thinks about traditions",
      "conservemos (we keep), tiren (throw), nos unen (bring us together)",
      ["Me alegra que los jóvenes aprendan los bailes tradicionales.", "Me sorprende que vengan turistas de todo el mundo.", "Raúl cree que las fiestas de antes eran mejores, pero yo dudo que sea verdad.", "No creo que la música sea peor ahora.", "Es importante que conservemos las recetas de las abuelas.", "Es posible que el próximo año haya más desfiles.", "Me molesta que algunas personas tiren basura en la plaza, pero es mejor que tengamos paciencia.", "Estoy segura de que nuestras tradiciones nos unen."],
      "I'm glad that young people learn the traditional dances. It surprises me that tourists come from all over the world. Raúl thinks that the festivals of the past were better, but I doubt that's true. I don't think the music is worse now. It's important that we keep our grandmothers' recipes. It's possible that next year there will be more parades. It bothers me that some people throw trash in the square, but it's better for us to be patient. I'm sure that our traditions bring us together.",
      [
        ["¿Qué le alegra a Paula?", ["que los jóvenes aprendan los bailes tradicionales", "que tiren basura en la plaza", "que vengan pocos turistas"], 0, "Me alegra que los jóvenes aprendan los bailes tradicionales" + FEEL],
        ["¿Qué cree Raúl?", ["que no hay turistas", "que las fiestas de antes eran mejores", "que las recetas son malas"], 1, "Raúl cree que las fiestas de antes eran mejores" + CREE],
        ["¿De qué está segura Paula?", ["de que las fiestas de antes eran mejores", "de que las tradiciones nos unen", "de que no habrá más desfiles"], 1, "Estoy segura de que nuestras tradiciones nos unen" + SURE],
      ],
      "Give your opinions about festivals, holidays or traditions." + P2,
      "Me alegra que mi barrio celebre tantas fiestas. Me sorprende que vengan tantos turistas. No creo que las fiestas grandes sean siempre mejores. Es importante que los niños aprendan los bailes. Es posible que este año haya más música. Me molesta que la gente tire basura en la calle. Pero estoy seguro de que las tradiciones nos unen.",
    ),
    animals: v(
      "What Julia thinks about animals",
      "cada vez más (more and more), carácter (temperament), abandonen (abandon), mascotas (pets), eduquemos (we teach)",
      ["Me alegra que cada vez más gente adopte animales.", "Me sorprende que los gatos aprendan tantas cosas.", "Simón cree que los perros grandes son más difíciles, pero yo dudo que sea verdad.", "No creo que tengan peor carácter.", "Es importante que los animales tengan espacio para correr.", "Es posible que Coco entienda más de cien palabras.", "Me molesta que algunas personas abandonen a sus mascotas, pero es mejor que eduquemos con paciencia.", "Estoy segura de que un animal cambia una casa."],
      "I'm glad that more and more people adopt animals. It surprises me that cats learn so many things. Simón thinks that big dogs are more difficult, but I doubt that's true. I don't think they have a worse temperament. It's important that animals have space to run. It's possible that Coco understands more than a hundred words. It bothers me that some people abandon their pets, but it's better for us to teach with patience. I'm sure that an animal changes a home.",
      [
        ["¿Qué le alegra a Julia?", ["que más gente adopte animales", "que abandonen a sus mascotas", "que los perros sean difíciles"], 0, "Me alegra que cada vez más gente adopte animales" + FEEL],
        ["¿Qué cree Simón?", ["que los gatos no aprenden", "que los perros grandes son más difíciles", "que Coco no entiende nada"], 1, "Simón cree que los perros grandes son más difíciles" + CREE],
        ["¿De qué está segura Julia?", ["de que los perros grandes son difíciles", "de que un animal cambia una casa", "de que Coco no entiende nada"], 1, "Estoy segura de que un animal cambia una casa" + SURE],
      ],
      "Give your opinions about pets or other animals." + P2,
      "Me alegra que mi vecina adopte gatos. Me sorprende que mi perro entienda tantas palabras. No creo que los perros pequeños sean más fáciles. Es importante que los animales tengan espacio. Es posible que adopte otro gato este año. Me molesta que la gente abandone a sus mascotas. Pero estoy seguro de que un animal cambia una casa.",
    ),
  },
  "b2/3": {
    history: v(
      "Welcome to the museum",
      "guantes (gloves), fantasma (ghost)",
      ["Bienvenido al museo.", "Quiero explicarle cómo trabajamos, y quiero que usted me haga preguntas.", "Llegue a las ocho y hable con Bruno.", "Lea la guía y prepare la sala de mapas.", "No toque los objetos sin guantes.", "Bruno prefiere recibir a las escuelas, pero prefiere que usted reciba a los turistas.", "Por favor, no tenga miedo de preguntar.", "Y tú, Bruno, no cuentes la leyenda del fantasma a los niños."],
      "Welcome to the museum. I want to explain to you how we work, and I want you to ask me questions. Arrive at eight and talk with Bruno. Read the guide and prepare the map room. Don't touch the objects without gloves. Bruno prefers to welcome the schools, but he prefers you to welcome the tourists. Please, don't be afraid to ask. And you, Bruno, don't tell the children the legend of the ghost.",
      [
        hablar("Bruno", "con los turistas"),
        ["¿Qué no hay que hacer?", ["leer la guía", "tocar los objetos sin guantes", "preparar la sala"], 1, "No toque los objetos sin guantes" + NEG],
        ["¿Qué no debe hacer Bruno?", ["recibir a las escuelas", "contar la leyenda del fantasma a los niños", "hablar con el guía nuevo"], 1, "No cuentes la leyenda" + NEGTU],
      ],
      "Write instructions for a new guide or volunteer at a museum or an old place." + P3,
      "Bienvenido al museo. Quiero explicarle cómo funciona todo, y quiero que usted me haga preguntas. Abra las salas y encienda las luces. Reciba a los grupos en la entrada. No toque los mapas antiguos. Yo prefiero contar las historias, pero prefiero que usted venda las entradas. Y tú, Bruno, no llegues tarde.",
    ),
    science: v(
      "Welcome to the lab",
      "encienda (turn on), anote (write down), datos (data)",
      ["Bienvenido al laboratorio.", "Quiero explicarle cómo trabajamos, y quiero que usted me haga preguntas.", "Llegue a las nueve de la noche y hable con Hugo.", "Lea las instrucciones y prepare el telescopio.", "No encienda luces blancas cerca del observatorio.", "Hugo prefiere cuidar las plantas, pero prefiere que usted anote los datos.", "Por favor, no tenga miedo de preguntar.", "Y tú, Hugo, no dejes insectos en mi mesa."],
      "Welcome to the lab. I want to explain to you how we work, and I want you to ask me questions. Arrive at nine at night and talk with Hugo. Read the instructions and prepare the telescope. Don't turn on white lights near the observatory. Hugo prefers to look after the plants, but he prefers you to write down the data. Please, don't be afraid to ask. And you, Hugo, don't leave insects on my desk.",
      [
        hablar("Hugo", "con los estudiantes"),
        ["¿Qué no hay que hacer?", ["leer las instrucciones", "encender luces blancas cerca del observatorio", "preparar el telescopio"], 1, "No encienda luces blancas" + NEG],
        ["¿Qué no debe hacer Hugo?", ["cuidar las plantas", "dejar insectos en la mesa de Vera", "hablar con el asistente nuevo"], 1, "No dejes insectos en mi mesa" + NEGTU],
      ],
      "Write instructions for someone new at a lab, a garden or a nature reserve." + P3,
      "Bienvenido al laboratorio. Quiero explicarle cómo funciona todo, y quiero que usted me haga preguntas. Riegue las plantas y anote la temperatura. Limpie los telescopios con cuidado. No abra la ventana por la noche. Yo prefiero tomar las fotos, pero prefiero que usted anote los datos. Y tú, Hugo, no toques mi cámara.",
    ),
    tech: v(
      "Welcome to the studio",
      "estudio (studio), manual (manual), comparta (share), contraseña (password), diálogos (dialogue)",
      ["Bienvenida al estudio.", "Quiero explicarle cómo trabajamos, y quiero que usted me haga preguntas.", "Llegue a las diez y hable con Mía.", "Lea el manual y pruebe el primer nivel.", "No comparta su contraseña con nadie.", "Mía prefiere dibujar los personajes, pero prefiere que usted escriba los diálogos.", "Por favor, no tenga miedo de preguntar.", "Y tú, Mía, no cambies los colores otra vez."],
      "Welcome to the studio. I want to explain to you how we work, and I want you to ask me questions. Arrive at ten and talk with Mía. Read the manual and test the first level. Don't share your password with anyone. Mía prefers to draw the characters, but she prefers you to write the dialogue. Please, don't be afraid to ask. And you, Mía, don't change the colors again.",
      [
        hablar("Mía", "con los jugadores"),
        ["¿Qué no hay que hacer?", ["leer el manual", "compartir la contraseña", "probar el primer nivel"], 1, "No comparta su contraseña" + NEG],
        ["¿Qué no debe hacer Mía?", ["dibujar los personajes", "cambiar los colores otra vez", "hablar con la persona nueva"], 1, "No cambies los colores" + NEGTU],
      ],
      "Write instructions for someone new on a tech team, or someone using your computer." + P3,
      "Bienvenido al equipo. Quiero explicarle cómo funciona todo, y quiero que usted me haga preguntas. Pruebe el juego y anote los errores. Guarde su trabajo cada hora. No comparta su contraseña. Yo prefiero programar, pero prefiero que usted escriba los diálogos. Y tú, Mía, no borres mis archivos.",
    ),
    health: v(
      "Welcome to the clinic",
      "atender (to deal with), emergencias (emergencies)",
      ["Bienvenido a la clínica.", "Quiero explicarle cómo trabajamos, y quiero que usted me haga preguntas.", "Llegue a las siete y hable con Iván.", "Lea la lista de pacientes y prepare las medicinas.", "No dé ninguna pastilla sin preguntar.", "Iván prefiere atender las emergencias, pero prefiere que usted visite a los pacientes mayores.", "Por favor, no tenga miedo de preguntar.", "Y tú, Iván, no tomes tanto café."],
      "Welcome to the clinic. I want to explain to you how we work, and I want you to ask me questions. Arrive at seven and talk with Iván. Read the list of patients and prepare the medicines. Don't give any pill without asking. Iván prefers to deal with the emergencies, but he prefers you to visit the older patients. Please, don't be afraid to ask. And you, Iván, don't drink so much coffee.",
      [
        hablar("Iván", "con los pacientes"),
        ["¿Qué no hay que hacer?", ["leer la lista", "dar una pastilla sin preguntar", "preparar las medicinas"], 1, "No dé ninguna pastilla sin preguntar" + NEG],
        ["¿Qué no debe hacer Iván?", ["atender las emergencias", "tomar tanto café", "hablar con la persona nueva"], 1, "No tomes tanto café" + NEGTU],
      ],
      "Write instructions for someone new at a clinic or a gym, or someone starting to exercise." + P3,
      "Bienvenido al gimnasio. Quiero explicarle cómo funciona todo, y quiero que usted me haga preguntas. Beba agua y descanse cada veinte minutos. Empiece con ejercicios fáciles. No corra el primer día. Yo prefiero dar la clase de yoga, pero prefiero que usted elija la música. Y tú, Iván, no comas en la sala.",
    ),
    festivals: v(
      "Welcome to the festival committee",
      "comité (committee), escenario (stage), encienda (light), fuegos artificiales (fireworks), dirigir (to lead)",
      ["Bienvenido al comité de la fiesta.", "Quiero explicarle cómo trabajamos, y quiero que usted me haga preguntas.", "Llegue a las cinco y hable con Raúl.", "Lea el programa y prepare el escenario.", "No encienda los fuegos artificiales antes de las doce.", "Raúl prefiere dirigir la banda, pero prefiere que usted organice el desfile.", "Por favor, no tenga miedo de preguntar.", "Y tú, Raúl, no toques la misma canción toda la noche."],
      "Welcome to the festival committee. I want to explain to you how we work, and I want you to ask me questions. Arrive at five and talk with Raúl. Read the program and prepare the stage. Don't light the fireworks before twelve. Raúl prefers to lead the band, but he prefers you to organize the parade. Please, don't be afraid to ask. And you, Raúl, don't play the same song all night.",
      [
        hablar("Raúl", "con los bailarines"),
        ["¿Qué no hay que hacer?", ["leer el programa", "encender los fuegos artificiales antes de las doce", "preparar el escenario"], 1, "No encienda los fuegos artificiales" + NEG],
        ["¿Qué no debe hacer Raúl?", ["dirigir la banda", "tocar la misma canción toda la noche", "organizar el desfile"], 1, "No toques la misma canción" + NEGTU],
      ],
      "Write instructions for a guest or a helper at a festival or a party." + P3,
      "Bienvenida a nuestra fiesta. Quiero explicarle cómo funciona todo, y quiero que usted me haga preguntas. Pruebe los tamales y baile con nosotros. Llegue a la plaza a las seis. No se vaya antes del desfile. Yo prefiero cocinar, pero prefiero que usted elija la música. Y tú, Raúl, no cantes tan fuerte.",
    ),
    animals: v(
      "Welcome to the shelter",
      "jaulas (cages), pasee (walk)",
      ["Bienvenido al refugio.", "Quiero explicarle cómo trabajamos, y quiero que usted me haga preguntas.", "Llegue a las seis y hable con Simón.", "Lea la lista y prepare la comida de los perros.", "No abra dos jaulas al mismo tiempo.", "Simón prefiere cuidar los caballos, pero prefiere que usted pasee a los perros.", "Por favor, no tenga miedo de preguntar.", "Y tú, Simón, no des chocolate a Coco."],
      "Welcome to the shelter. I want to explain to you how we work, and I want you to ask me questions. Arrive at six and talk with Simón. Read the list and prepare the dogs' food. Don't open two cages at the same time. Simón prefers to look after the horses, but he prefers you to walk the dogs. Please, don't be afraid to ask. And you, Simón, don't give Coco chocolate.",
      [
        hablar("Simón", "con los vecinos"),
        ["¿Qué no hay que hacer?", ["leer la lista", "abrir dos jaulas al mismo tiempo", "preparar la comida"], 1, "No abra dos jaulas al mismo tiempo" + NEG],
        ["¿Qué no debe hacer Simón?", ["cuidar los caballos", "dar chocolate a Coco", "pasear a los perros"], 1, "No des chocolate a Coco" + NEGTU],
      ],
      "Write instructions for someone looking after your pet or helping at a shelter." + P3,
      "Bienvenida a mi casa. Quiero explicarle cómo cuidar a mi gato, y quiero que usted me haga preguntas. Limpie su plato y cambie el agua. Abra la ventana por la mañana. No deje la puerta abierta. Yo prefiero comprar la comida, pero prefiero que usted juegue con el gato. Y tú, Ana, no le des leche.",
    ),
  },
  "b2/4": {
    history: v(
      "Sorting the museum's archive",
      "archivo (archive), guantes (gloves)",
      ["Bruno y yo queremos ordenar el archivo del museo.", "Hagamos una lista y dividamos el trabajo.", "Bruno, tráeme las cartas antiguas y ponlas en la mesa.", "No las abras todavía.", "Yo en tu lugar, empezaría por las fotos.", "¿Podrías buscar los guantes?", "Con más tiempo, copiaríamos también los mapas.", "Empecemos ya: me gustaría terminar antes del domingo."],
      "Bruno and I want to sort the museum's archive. Let's make a list and divide the work. Bruno, bring me the old letters and put them on the table. Don't open them yet. If I were you, I'd start with the photos. Could you look for the gloves? With more time, we'd copy the maps too. Let's start now: I'd like to finish before Sunday.",
      [
        ["¿Qué quieren hacer Inés y Bruno?", ["ordenar el archivo del museo", "abrir un museo", "vender las cartas"], 0, "Queremos ordenar el archivo del museo."],
        ["¿Qué le pide Inés a Bruno?", ["que abra las cartas", "que traiga las cartas antiguas", "que copie los mapas"], 1, "Bruno, tráeme las cartas antiguas y ponlas en la mesa" + END],
        ["¿Antes de cuándo le gustaría terminar a Inés?", ["antes del sábado", "antes del domingo", "antes del lunes"], 1, "Me gustaría terminar antes del domingo" + COND],
      ],
      "Write about a project with old things you're planning with someone: photos, letters, a family tree." + P4,
      "Mi amigo Bruno y yo queremos ordenar las fotos de mi abuela. Hagamos una lista y dividamos el trabajo. Bruno, tráeme las cajas y ponlas en la mesa. No las abras todavía. Yo en tu lugar, empezaría por las fotos más viejas. ¿Podrías escribir los nombres? Empecemos ya: me gustaría terminar antes del domingo.",
    ),
    science: v(
      "Planting a butterfly garden",
      "mariposas (butterflies), semillas (seeds), riegues (water), medir el terreno (measure the ground), estanque (pond)",
      ["Hugo y yo queremos plantar un jardín para mariposas.", "Hagamos una lista y dividamos el trabajo.", "Hugo, tráeme las semillas y ponlas en el suelo.", "No las riegues todavía.", "Yo en tu lugar, empezaría por las flores amarillas.", "¿Podrías medir el terreno?", "Con más tiempo, haríamos también un estanque.", "Empecemos ya: me gustaría terminar antes del domingo."],
      "Hugo and I want to plant a garden for butterflies. Let's make a list and divide the work. Hugo, bring me the seeds and put them on the ground. Don't water them yet. If I were you, I'd start with the yellow flowers. Could you measure the ground? With more time, we'd make a pond too. Let's start now: I'd like to finish before Sunday.",
      [
        ["¿Qué quieren hacer Vera y Hugo?", ["plantar un jardín para mariposas", "comprar un jardín", "hacer un estanque"], 0, "Queremos plantar un jardín para mariposas."],
        ["¿Qué le pide Vera a Hugo?", ["que riegue las semillas", "que traiga las semillas", "que haga un estanque"], 1, "Hugo, tráeme las semillas y ponlas en el suelo" + END],
        ["¿Antes de cuándo le gustaría terminar a Vera?", ["antes del sábado", "antes del domingo", "antes del lunes"], 1, "Me gustaría terminar antes del domingo" + COND],
      ],
      "Write about a nature or science project you're planning with someone." + P4,
      "Mi amigo Hugo y yo queremos plantar un jardín. Hagamos una lista y dividamos el trabajo. Hugo, tráeme las semillas y ponlas en la mesa. No las riegues todavía. Yo en tu lugar, empezaría por los tomates. ¿Podrías traer agua? Empecemos ya: me gustaría terminar antes del domingo.",
    ),
    tech: v(
      "Building an app together",
      "idiomas (languages), carpeta (folder), sonido (sound), añadiríamos (we'd add)",
      ["Mía y yo queremos crear una aplicación para aprender idiomas.", "Hagamos una lista y dividamos el trabajo.", "Mía, mándame los diseños y ponlos en la carpeta nueva.", "No los cambies todavía.", "Yo en tu lugar, empezaría por la primera pantalla.", "¿Podrías probar el sonido?", "Con más tiempo, añadiríamos también un juego.", "Empecemos ya: me gustaría terminar antes del domingo."],
      "Mía and I want to create an app for learning languages. Let's make a list and divide the work. Mía, send me the designs and put them in the new folder. Don't change them yet. If I were you, I'd start with the first screen. Could you test the sound? With more time, we'd add a game too. Let's start now: I'd like to finish before Sunday.",
      [
        ["¿Qué quieren hacer Nico y Mía?", ["crear una aplicación", "comprar una computadora", "jugar un juego"], 0, "Queremos crear una aplicación para aprender idiomas."],
        ["¿Qué le pide Nico a Mía?", ["que cambie los diseños", "que mande los diseños", "que añada un juego"], 1, "Mía, mándame los diseños y ponlos en la carpeta nueva" + END],
        ["¿Antes de cuándo le gustaría terminar a Nico?", ["antes del sábado", "antes del domingo", "antes del lunes"], 1, "Me gustaría terminar antes del domingo" + COND],
      ],
      "Write about a tech or game project you're planning with someone." + P4,
      "Mi amiga Mía y yo queremos hacer un juego. Hagamos una lista y dividamos el trabajo. Mía, mándame los dibujos y ponlos en la carpeta. No los cambies todavía. Yo en tu lugar, empezaría por el primer nivel. ¿Podrías elegir la música? Empecemos ya: me gustaría terminar antes del domingo.",
    ),
    health: v(
      "Cooking for a healthy week",
      "sanas (healthy), integral (whole-wheat), mediodía (noon)",
      ["Iván y yo queremos preparar comidas sanas para toda la semana.", "Hagamos una lista y dividamos el trabajo.", "Iván, tráeme las verduras y ponlas en la mesa.", "No las cortes todavía.", "Yo en tu lugar, empezaría por el arroz.", "¿Podrías lavar la fruta?", "Con más tiempo, haríamos también pan integral.", "Empecemos ya: me gustaría terminar antes del mediodía."],
      "Iván and I want to prepare healthy meals for the whole week. Let's make a list and divide the work. Iván, bring me the vegetables and put them on the table. Don't cut them yet. If I were you, I'd start with the rice. Could you wash the fruit? With more time, we'd make whole-wheat bread too. Let's start now: I'd like to finish before noon.",
      [
        ["¿Qué quieren hacer Clara e Iván?", ["preparar comidas sanas para la semana", "abrir un restaurante", "comprar verduras"], 0, "Queremos preparar comidas sanas para toda la semana."],
        ["¿Qué le pide Clara a Iván?", ["que corte las verduras", "que traiga las verduras", "que haga pan"], 1, "Iván, tráeme las verduras y ponlas en la mesa" + END],
        ["¿Antes de cuándo le gustaría terminar a Clara?", ["antes de la cena", "antes del mediodía", "antes del lunes"], 1, "Me gustaría terminar antes del mediodía" + COND],
      ],
      "Write about a healthy plan you're making with someone: meals, training, a routine." + P4,
      "Mi amigo Iván y yo queremos correr una carrera. Hagamos un plan y dividamos las semanas. Iván, tráeme los zapatos y ponlos en la entrada. No los laves todavía. Yo en tu lugar, empezaría despacio. ¿Podrías traer agua? Empecemos ya: me gustaría estar listo antes del verano.",
    ),
    festivals: v(
      "Decorating the square",
      "decorar (to decorate), cuelgues (hang), escenario (stage)",
      ["Raúl y yo queremos decorar toda la plaza.", "Hagamos una lista y dividamos el trabajo.", "Raúl, tráeme las flores de papel y ponlas en el suelo.", "No las cuelgues todavía.", "Yo en tu lugar, empezaría por el escenario.", "¿Podrías mover las sillas?", "Con más tiempo, pintaríamos también las máscaras.", "Empecemos ya: me gustaría terminar antes del desfile."],
      "Raúl and I want to decorate the whole square. Let's make a list and divide the work. Raúl, bring me the paper flowers and put them on the ground. Don't hang them yet. If I were you, I'd start with the stage. Could you move the chairs? With more time, we'd paint the masks too. Let's start now: I'd like to finish before the parade.",
      [
        ["¿Qué quieren hacer Paula y Raúl?", ["decorar toda la plaza", "comprar flores", "pintar la plaza"], 0, "Queremos decorar toda la plaza."],
        ["¿Qué le pide Paula a Raúl?", ["que cuelgue las flores", "que traiga las flores de papel", "que pinte las máscaras"], 1, "Raúl, tráeme las flores de papel y ponlas en el suelo" + END],
        ["¿Antes de qué le gustaría terminar a Paula?", ["antes de la cena", "antes del desfile", "antes del lunes"], 1, "Me gustaría terminar antes del desfile" + COND],
      ],
      "Write about a party or a festival you're preparing with someone." + P4,
      "Mi amigo Raúl y yo queremos preparar una fiesta. Hagamos una lista y dividamos el trabajo. Raúl, tráeme las velas y ponlas en la mesa. No las enciendas todavía. Yo en tu lugar, empezaría por la música. ¿Podrías mover las sillas? Empecemos ya: me gustaría terminar antes de las seis.",
    ),
    animals: v(
      "Bath day for the dogs",
      "toallas (towels), mojes (wet), sujetar (to hold), cepillaríamos (we'd brush)",
      ["Simón y yo queremos bañar a todos los perros.", "Hagamos una lista y dividamos el trabajo.", "Simón, tráeme las toallas y ponlas en el suelo.", "No las mojes todavía.", "Yo en tu lugar, empezaría por Coco.", "¿Podrías sujetar a Luna?", "Con más tiempo, cepillaríamos también a los caballos.", "Empecemos ya: me gustaría terminar antes del domingo."],
      "Simón and I want to bathe all the dogs. Let's make a list and divide the work. Simón, bring me the towels and put them on the ground. Don't wet them yet. If I were you, I'd start with Coco. Could you hold Luna? With more time, we'd brush the horses too. Let's start now: I'd like to finish before Sunday.",
      [
        ["¿Qué quieren hacer Julia y Simón?", ["bañar a todos los perros", "comprar un perro", "cepillar a los gatos"], 0, "Queremos bañar a todos los perros."],
        ["¿Qué le pide Julia a Simón?", ["que moje las toallas", "que traiga las toallas", "que cepille a los caballos"], 1, "Simón, tráeme las toallas y ponlas en el suelo" + END],
        ["¿Antes de cuándo le gustaría terminar a Julia?", ["antes del sábado", "antes del domingo", "antes del lunes"], 1, "Me gustaría terminar antes del domingo" + COND],
      ],
      "Write about a job with a pet or other animals that you're planning with someone." + P4,
      "Mi hermana y yo queremos bañar a nuestro perro. Hagamos un plan y dividamos el trabajo. Ana, tráeme las toallas y ponlas en el suelo. No las mojes todavía. Yo en tu lugar, empezaría por las patas. ¿Podrías sujetar al perro? Empecemos ya: me gustaría terminar antes de la cena.",
    ),
  },
  "b2/5": {
    history: v(
      "Saving an old map",
      "restauraremos (we'll restore), copia (copy), digitalizado (digitized), exposición (exhibition)",
      ["Cuando llegué al museo, Bruno ya había abierto las salas.", "Yo todavía no había terminado mi artículo.", "Si recibimos más dinero, restauraremos el mapa de 1700.", "Si no, seguiremos mostrando la copia.", "Para diciembre, ya habremos digitalizado todas las cartas.", "Bruno dice que sin mi ayuda no habría aprendido tanto.", "Si tienes tiempo, ven a ver la exposición."],
      "When I got to the museum, Bruno had already opened the rooms. I still hadn't finished my article. If we receive more money, we'll restore the map from 1700. If not, we'll keep showing the copy. By December, we'll have digitized all the letters. Bruno says that without my help he wouldn't have learned so much. If you have time, come and see the exhibition.",
      [
        ["¿Qué había hecho Bruno cuando llegó Inés?", ["Había abierto las salas.", "Había terminado el artículo.", "Había restaurado el mapa."], 0, "Bruno ya había abierto las salas" + HABIA],
        ["¿Qué pasará si reciben más dinero?", ["Seguirán mostrando la copia.", "Restaurarán el mapa de 1700.", "Cerrarán el museo."], 1, "Si recibimos más dinero, restauraremos el mapa" + SI],
        ["¿Qué habrán hecho para diciembre?", ["Habrán vendido las cartas.", "Habrán digitalizado todas las cartas.", "Habrán abierto otro museo."], 1, "Para diciembre, ya habremos digitalizado todas las cartas" + BYTHEN],
      ],
      "Write about a history project or a visit and how it could go." + P5,
      "Cuando llegué al museo, mi amigo Bruno ya había comprado las entradas. Yo todavía no había leído la guía. Si tenemos tiempo, veremos la sala de los incas. Si no, volveremos el sábado. Para diciembre, ya habremos visitado todos los museos de la ciudad. Sin su ayuda no habría aprendido tanto.",
    ),
    science: v(
      "Waiting for the comet",
      "revisado (checked), datos (data), sigue (stays), cometa (comet), fotografiado (photographed), galaxias (galaxies)",
      ["Cuando llegué al observatorio, Hugo ya había preparado el telescopio.", "Yo todavía no había revisado los datos.", "Si el cielo sigue claro, veremos el cometa esta noche.", "Si no, seguiremos esperando hasta el viernes.", "Para el verano, ya habremos fotografiado cien galaxias.", "Hugo dice que sin mi ayuda no habría terminado su estudio.", "Si tienes tiempo, ven a mirar con nosotros."],
      "When I got to the observatory, Hugo had already set up the telescope. I still hadn't checked the data. If the sky stays clear, we'll see the comet tonight. If not, we'll keep waiting until Friday. By summer, we'll have photographed a hundred galaxies. Hugo says that without my help he wouldn't have finished his study. If you have time, come and look with us.",
      [
        ["¿Qué había hecho Hugo cuando llegó Vera?", ["Había preparado el telescopio.", "Había revisado los datos.", "Había visto el cometa."], 0, "Hugo ya había preparado el telescopio" + HABIA],
        ["¿Qué pasará si el cielo sigue claro?", ["Seguirán esperando.", "Verán el cometa esta noche.", "Cerrarán el observatorio."], 1, "Si el cielo sigue claro, veremos el cometa" + SI],
        ["¿Qué habrán hecho para el verano?", ["Habrán vendido el telescopio.", "Habrán fotografiado cien galaxias.", "Habrán terminado el estudio."], 1, "Para el verano, ya habremos fotografiado cien galaxias" + BYTHEN],
      ],
      "Write about a science or nature plan and how it could go." + P5,
      "Cuando llegué al parque, mi amigo Hugo ya había preparado el telescopio. Yo todavía no había cenado ni preparado la cámara. Si el cielo sigue claro, veremos Saturno y sus anillos. Si no, volveremos mañana. Para el verano, ya habremos visto todos los planetas. Sin su ayuda no habría encontrado ninguno.",
    ),
    tech: v(
      "Selling the first game",
      "arreglado (fixed), copias (copies), mejorando (improving), lanzado (launched), versión (version)",
      ["Cuando llegué a la oficina, Mía ya había arreglado el error.", "Yo todavía no había probado el nivel nuevo.", "Si vendemos mil copias, haremos otro juego.", "Si no, seguiremos mejorando este juego.", "Para el verano, ya habremos lanzado la versión en inglés.", "Mía dice que sin mi ayuda no habría aprendido a programar.", "Si tienes tiempo, ven a jugar con nosotros."],
      "When I got to the office, Mía had already fixed the bug. I still hadn't tested the new level. If we sell a thousand copies, we'll make another game. If not, we'll keep improving this game. By summer, we'll have launched the English version. Mía says that without my help she wouldn't have learned to code. If you have time, come and play with us.",
      [
        ["¿Qué había hecho Mía cuando llegó Nico?", ["Había arreglado el error.", "Había probado el nivel nuevo.", "Había vendido mil copias."], 0, "Mía ya había arreglado el error" + HABIA],
        ["¿Qué pasará si venden mil copias?", ["Seguirán mejorando este juego.", "Harán otro juego.", "Cerrarán la oficina."], 1, "Si vendemos mil copias, haremos otro juego" + SI],
        ["¿Qué habrán hecho para el verano?", ["Habrán cerrado el estudio.", "Habrán lanzado la versión en inglés.", "Habrán hecho tres juegos."], 1, "Para el verano, ya habremos lanzado la versión en inglés" + BYTHEN],
      ],
      "Write about a plan with games or technology and how it could go." + P5,
      "Cuando llegué a casa, mi amiga Mía ya había instalado el juego. Yo todavía no había cenado. Si ganamos esta noche, jugaremos en el torneo. Si no, practicaremos más. Para diciembre, ya habremos terminado todos los niveles. Sin su ayuda no habría pasado el primero.",
    ),
    health: v(
      "Training for the marathon",
      "entrenamos (we train), veces (times), maratón (marathon), miedo (fear), dejado de fumar (quit smoking)",
      ["Cuando llegué al gimnasio, Iván ya había corrido cinco kilómetros.", "Yo todavía no había desayunado.", "Si entrenamos tres veces por semana, correremos el maratón.", "Si no, seguiremos corriendo carreras cortas.", "Para el verano, ya habremos perdido el miedo.", "Iván dice que sin mi ayuda no habría dejado de fumar.", "Si tienes tiempo, ven a entrenar con nosotros."],
      "When I got to the gym, Iván had already run five kilometers. I still hadn't had breakfast. If we train three times a week, we'll run the marathon. If not, we'll keep running short races. By summer, we'll have lost our fear. Iván says that without my help he wouldn't have quit smoking. If you have time, come and train with us.",
      [
        ["¿Qué había hecho Iván cuando llegó Clara?", ["Había corrido cinco kilómetros.", "Había desayunado.", "Había corrido el maratón."], 0, "Iván ya había corrido cinco kilómetros" + HABIA],
        ["¿Qué pasará si entrenan tres veces por semana?", ["Seguirán corriendo carreras cortas.", "Correrán el maratón.", "Dejarán de correr."], 1, "Si entrenamos tres veces por semana, correremos el maratón" + SI],
        ["¿Qué habrán hecho para el verano?", ["Habrán corrido diez maratones.", "Habrán perdido el miedo.", "Habrán dejado el gimnasio."], 1, "Para el verano, ya habremos perdido el miedo" + BYTHEN],
      ],
      "Write about a plan for your health and how it could go." + P5,
      "Cuando llegué al parque, mi amigo Iván ya había corrido media hora. Yo todavía no había desayunado. Si duermo mejor, correré más rápido. Si no, caminaré todos los días por la mañana. Para el verano, ya habré corrido mi primera carrera. Sin su ayuda no habría empezado a entrenar.",
    ),
    festivals: v(
      "Rain or shine",
      "montado (set up), escenario (stage), llueve (it rains), medianoche (midnight)",
      ["Cuando llegué a la plaza, Raúl ya había montado el escenario.", "Yo todavía no había terminado los vestidos.", "Si no llueve, bailaremos hasta la medianoche.", "Si llueve, seguiremos la fiesta en la escuela.", "Para el domingo, ya habremos servido mil tamales.", "Raúl dice que sin mi ayuda no habría organizado nada.", "Si tienes tiempo, ven a bailar con nosotros."],
      "When I got to the square, Raúl had already set up the stage. I still hadn't finished the dresses. If it doesn't rain, we'll dance until midnight. If it rains, we'll carry on the party in the school. By Sunday, we'll have served a thousand tamales. Raúl says that without my help he wouldn't have organized anything. If you have time, come and dance with us.",
      [
        ["¿Qué había hecho Raúl cuando llegó Paula?", ["Había montado el escenario.", "Había terminado los vestidos.", "Había servido los tamales."], 0, "Raúl ya había montado el escenario" + HABIA],
        ["¿Qué pasará si no llueve?", ["Seguirán la fiesta en la escuela.", "Bailarán hasta la medianoche.", "Volverán a casa."], 1, "Si no llueve, bailaremos hasta la medianoche" + SI],
        ["¿Qué habrán hecho para el domingo?", ["Habrán cerrado la plaza.", "Habrán servido mil tamales.", "Habrán hecho mil vestidos."], 1, "Para el domingo, ya habremos servido mil tamales" + BYTHEN],
      ],
      "Write about a party or a festival plan and how it could go." + P5,
      "Cuando llegué a la fiesta, mi amigo Raúl ya había preparado la música. Yo todavía no había cocinado nada. Si no llueve, cenaremos en la plaza. Si llueve, iremos a mi casa. Para la medianoche, ya habremos bailado todas las canciones. Sin su ayuda no habría organizado nada.",
    ),
    animals: v(
      "Growing the shelter",
      "dado de comer (fed), voluntarios (volunteers), curado (cured)",
      ["Cuando llegué al refugio, Simón ya había dado de comer a los perros.", "Yo todavía no había examinado a la gatita nueva.", "Si encontramos más voluntarios, abriremos los domingos.", "Si no, seguiremos abriendo solo los sábados.", "Para el verano, ya habremos encontrado casa para veinte animales.", "Simón dice que sin mi ayuda no habría curado a Luna.", "Si tienes tiempo, ven a conocer a Coco."],
      "When I got to the shelter, Simón had already fed the dogs. I still hadn't examined the new kitten. If we find more volunteers, we'll open on Sundays. If not, we'll keep opening only on Saturdays. By summer, we'll have found a home for twenty animals. Simón says that without my help he wouldn't have cured Luna. If you have time, come and meet Coco.",
      [
        ["¿Qué había hecho Simón cuando llegó Julia?", ["Había dado de comer a los perros.", "Había examinado a la gatita.", "Había encontrado voluntarios."], 0, "Simón ya había dado de comer a los perros" + HABIA],
        ["¿Qué pasará si encuentran más voluntarios?", ["Seguirán abriendo solo los sábados.", "Abrirán los domingos.", "Cerrarán el refugio."], 1, "Si encontramos más voluntarios, abriremos los domingos" + SI],
        ["¿Qué habrán hecho para el verano?", ["Habrán adoptado veinte gatos.", "Habrán encontrado casa para veinte animales.", "Habrán abierto otro refugio."], 1, "Para el verano, ya habremos encontrado casa para veinte animales" + BYTHEN],
      ],
      "Write about a plan with a pet or other animals and how it could go." + P5,
      "Cuando llegué a casa, mi hermana ya había paseado al perro. Yo todavía no había comprado su comida. Si adopto otro gato, compraré una cama más grande. Si no, esperaré. Para el verano, ya habremos enseñado al perro a nadar. Sin su ayuda no habría podido cuidarlo.",
    ),
  },
  "b2/6": {
    history: v(
      "A strange morning at the museum",
      "archivo (archive), se guardan (are kept), siglos (centuries), vitrina (display case)",
      ["Bruno no ha llegado; estará en el archivo.", "Serán las nueve, porque ya entraron los turistas.", "Aquí se guardan mapas de hace tres siglos.", "No se puede sacar fotos con flash.", "Ayer se me cayó una caja de monedas.", "A Bruno se le olvidaron las llaves de la vitrina.", "¿Dónde habrá dejado las llaves?", "En este museo se cuentan muchas historias."],
      "Bruno hasn't arrived; he's probably in the archive. It must be nine, because the tourists have already come in. Maps from three centuries ago are kept here. You can't take photos with a flash. Yesterday I dropped a box of coins. Bruno forgot the keys to the display case. Where can he have left the keys? In this museum a lot of stories are told.",
      [
        ["¿Dónde estará Bruno?", ["en el archivo", "en la entrada", "en casa"], 0, "Estará en el archivo" + GUESS],
        ["¿Qué le pasó ayer a Inés?", ["Se le olvidaron las llaves.", "Se le cayó una caja de monedas.", "Se le rompió un mapa."], 1, "Se me cayó una caja de monedas" + ACC],
        ["¿Qué se le olvidó a Bruno?", ["las monedas", "las llaves de la vitrina", "las fotos"], 1, "A Bruno se le olvidaron las llaves de la vitrina."],
      ],
      "Write about an odd day at a museum, a library or an old place." + P6,
      "Mi amigo Bruno no ha llegado; estará en la biblioteca. Serán las diez. En este museo se guardan cartas muy antiguas. No se puede tocar nada. Ayer se me cayó el mapa. A Bruno se le olvidaron las entradas. En mi ciudad se cuentan muchas leyendas.",
    ),
    science: v(
      "A strange night at the lab",
      "invernadero (greenhouse), lente (lens), se le escaparon (got away from him), ranas (frogs)",
      ["Hugo no ha llegado; estará en el invernadero.", "Serán las diez, porque ya se ve Júpiter.", "Aquí se observa el cielo todas las noches.", "No se puede usar el teléfono cerca del telescopio.", "Ayer se me rompió un lente.", "A Hugo se le escaparon tres ranas del laboratorio.", "¿Dónde estarán ahora?", "En este lugar se aprende algo nuevo cada día."],
      "Hugo hasn't arrived; he's probably in the greenhouse. It must be ten, because you can already see Jupiter. The sky is observed here every night. You can't use your phone near the telescope. Yesterday I broke a lens. Three frogs got away from Hugo in the lab. Where can they be now? In this place you learn something new every day.",
      [
        ["¿Dónde estará Hugo?", ["en el invernadero", "en el observatorio", "en casa"], 0, "Estará en el invernadero" + GUESS],
        ["¿Qué le pasó ayer a Vera?", ["Se le escaparon unas ranas.", "Se le rompió un lente.", "Se le olvidó el telescopio."], 1, "Se me rompió un lente" + ACC],
        ["¿Qué se le escapó a Hugo?", ["un lente", "tres ranas", "un insecto"], 1, "A Hugo se le escaparon tres ranas del laboratorio."],
      ],
      "Write about an odd day in nature or at a science place." + P6,
      "Mi amigo Hugo no ha llegado; estará en el jardín. Serán las ocho. Aquí se observa la luna todas las noches. No se puede encender la luz. Ayer se me cayó la cámara. A Hugo se le olvidaron los lentes. En mi barrio se ven muchas estrellas.",
    ),
    tech: v(
      "A strange morning at the studio",
      "reuniones (meetings), transmisión (stream), se me borró (I accidentally deleted), archivo (file), contraseñas (passwords)",
      ["Mía no ha llegado; estará en la sala de reuniones.", "Serán las once, porque ya empezó la transmisión.", "Aquí se prueban los juegos antes de venderlos.", "No se puede comer cerca de las computadoras.", "Ayer se me borró un archivo importante.", "A Mía se le olvidaron las contraseñas.", "¿Dónde habrá guardado la lista?", "En este estudio se habla de videojuegos todo el día."],
      "Mía hasn't arrived; she's probably in the meeting room. It must be eleven, because the stream has already started. Games are tested here before they're sold. You can't eat near the computers. Yesterday I accidentally deleted an important file. Mía forgot the passwords. Where can she have saved the list? In this studio people talk about video games all day.",
      [
        ["¿Dónde estará Mía?", ["en la sala de reuniones", "en casa", "en la tienda"], 0, "Estará en la sala de reuniones" + GUESS],
        ["¿Qué le pasó ayer a Nico?", ["Se le olvidaron las contraseñas.", "Se le borró un archivo importante.", "Se le rompió la pantalla."], 1, "Se me borró un archivo importante" + ACC],
        ["¿Qué se le olvidó a Mía?", ["un archivo", "las contraseñas", "la reunión"], 1, "A Mía se le olvidaron las contraseñas."],
      ],
      "Write about an odd day with computers, games or your phone." + P6,
      "Mi amiga Mía no ha llegado; estará en una reunión. Serán las diez. Aquí se prueban juegos nuevos. No se puede comer en la mesa. Ayer se me cayó el teléfono. A Mía se le olvidó la contraseña. En mi casa se juega todos los viernes.",
    ),
    health: v(
      "A strange morning at the clinic",
      "fumar (to smoke), resultados (results), análisis (tests)",
      ["Iván no ha llegado; estará en el gimnasio.", "Serán las siete, porque ya abrió la farmacia.", "Aquí se camina media hora antes del desayuno.", "No se puede fumar en toda la clínica.", "Ayer se me cayeron las pastillas de un paciente.", "A Iván se le olvidaron los resultados de los análisis.", "¿Dónde habrá dejado los papeles?", "En esta clínica se habla mucho de dormir bien."],
      "Iván hasn't arrived; he's probably at the gym. It must be seven, because the pharmacy has already opened. People here walk for half an hour before breakfast. You can't smoke anywhere in the clinic. Yesterday I dropped a patient's pills. Iván forgot the test results. Where can he have left the papers? In this clinic people talk a lot about sleeping well.",
      [
        ["¿Dónde estará Iván?", ["en el gimnasio", "en la farmacia", "en casa"], 0, "Estará en el gimnasio" + GUESS],
        ["¿Qué le pasó ayer a Clara?", ["Se le olvidaron los resultados.", "Se le cayeron las pastillas de un paciente.", "Se le rompió un vaso."], 1, "Se me cayeron las pastillas" + ACC],
        ["¿Qué se le olvidó a Iván?", ["las pastillas", "los resultados de los análisis", "el desayuno"], 1, "A Iván se le olvidaron los resultados de los análisis."],
      ],
      "Write about an odd day at the gym, at a clinic or out exercising." + P6,
      "Mi amigo Iván no ha llegado; estará en el gimnasio. Serán las siete. Aquí se desayuna fruta. No se puede fumar. Ayer se me cayó la botella de agua. A Iván se le olvidaron los zapatos. En mi familia se camina mucho.",
    ),
    festivals: v(
      "A strange afternoon at the festival",
      "suenan las campanas (the bells are ringing), medianoche (midnight), partituras (sheet music)",
      ["Raúl no ha llegado; estará con la banda.", "Serán las cinco, porque ya suenan las campanas.", "Aquí se baila en la calle hasta la medianoche.", "No se puede pasar en carro por el centro.", "Ayer se me rompió la máscara.", "A Raúl se le olvidaron las partituras.", "¿Dónde habrá dejado la guitarra?", "En esta fiesta se canta en español y en quechua."],
      "Raúl hasn't arrived; he's probably with the band. It must be five, because the bells are already ringing. People here dance in the street until midnight. You can't drive through the center. Yesterday I broke my mask. Raúl forgot the sheet music. Where can he have left his guitar? At this festival people sing in Spanish and in Quechua.",
      [
        ["¿Dónde estará Raúl?", ["con la banda", "en casa", "en la iglesia"], 0, "Estará con la banda" + GUESS],
        ["¿Qué le pasó ayer a Paula?", ["Se le olvidaron las partituras.", "Se le rompió la máscara.", "Se le cayó la guitarra."], 1, "Se me rompió la máscara" + ACC],
        ["¿Qué se le olvidó a Raúl?", ["la máscara", "las partituras", "las campanas"], 1, "A Raúl se le olvidaron las partituras."],
      ],
      "Write about an odd day at a festival or a party." + P6,
      "Mi amigo Raúl no ha llegado; estará con los músicos. Serán las seis. Aquí se baila en la calle. No se puede pasar en carro. Ayer se me rompió un vaso. A Raúl se le olvidó la guitarra. En mi pueblo se canta toda la noche.",
    ),
    animals: v(
      "A strange morning on the farm",
      "gallos (roosters), se da de comer (are fed), se me escapó (got away from me)",
      ["Simón no ha llegado; estará con las vacas.", "Serán las seis, porque los gallos ya cantaron.", "Aquí se da de comer a los animales antes del desayuno.", "No se puede dejar la puerta abierta.", "Ayer se me escapó un caballo.", "A Simón se le olvidaron las medicinas de Luna.", "¿Dónde habrá dejado la bolsa?", "En esta granja se habla con los animales."],
      "Simón hasn't arrived; he's probably with the cows. It must be six, because the roosters have already crowed. The animals are fed here before breakfast. You can't leave the gate open. Yesterday a horse got away from me. Simón forgot Luna's medicines. Where can he have left the bag? On this farm people talk to the animals.",
      [
        ["¿Dónde estará Simón?", ["con las vacas", "en el pueblo", "en casa"], 0, "Estará con las vacas" + GUESS],
        ["¿Qué le pasó ayer a Julia?", ["Se le olvidaron las medicinas.", "Se le escapó un caballo.", "Se le cayó la comida."], 1, "Se me escapó un caballo" + ACC],
        ["¿Qué se le olvidó a Simón?", ["la puerta", "las medicinas de Luna", "el desayuno"], 1, "A Simón se le olvidaron las medicinas de Luna."],
      ],
      "Write about an odd day with a pet or other animals." + P6,
      "Mi hermana no ha llegado; estará en el parque con el perro. Serán las siete. Aquí se pasea al perro tres veces al día. No se puede dejar comida en la mesa. Ayer se me escapó el gato. A mi hermana se le olvidó la correa. En mi casa se habla con los animales.",
    ),
  },
  "b2/7": {
    history: v(
      "Wanted: a guide",
      "muestra (shows), restaurar (to restore), entienda (understands), real (true), vitrinas (display cases), vivo (alive)",
      ["Busco un guía que sepa leer quechua.", "Ya tengo un mapa que muestra el centro, pero necesito uno que sea más antiguo.", "¿Conoces a alguien que quiera restaurar libros en agosto?", "No hay nadie aquí que entienda esta carta de 1600.", "Bruno me ayuda para que los turistas conozcan la historia real.", "Voy a cambiar las vitrinas para que todos vean mejor los objetos.", "Quiero un museo que sea pequeño y vivo."],
      "I'm looking for a guide who can read Quechua. I already have a map that shows the center, but I need one that's older. Do you know anyone who wants to restore books in August? There's nobody here who understands this letter from 1600. Bruno helps me so that the tourists get to know the true history. I'm going to change the display cases so that everyone sees the objects better. I want a museum that's small and alive.",
      [
        ["¿Qué busca Inés?", ["un guía que sepa leer quechua", "un mapa del centro", "un museo nuevo"], 0, "Busco un guía que sepa leer quechua" + NOTYET],
        ["¿Para qué ayuda Bruno a Inés?", ["para que cambie las vitrinas", "para que los turistas conozcan la historia real", "para que restaure libros"], 1, "Para que los turistas conozcan la historia real" + PARAQUE],
        ["¿Qué va a hacer Inés?", ["restaurar libros", "cambiar las vitrinas", "comprar un museo"], 1, "Voy a cambiar las vitrinas para que todos vean mejor los objetos."],
      ],
      "Write about something you're looking for to learn about the past: a book, a guide, a place." + P7,
      "Busco un libro que explique la historia de mi ciudad. Ya tengo un mapa que me gusta mucho, pero necesito uno que sea más antiguo. ¿Conoces a alguien que sepa leer cartas viejas? Mi amigo Bruno me ayuda para que termine mi proyecto. Quiero un museo que sea pequeño y tranquilo.",
    ),
    science: v(
      "Wanted: an assistant",
      "asistente (assistant), sensible (sensitive), apagar (to turn off)",
      ["Busco un asistente que sepa usar el telescopio.", "Ya tengo una cámara que funciona bien, pero necesito una que sea más sensible.", "¿Conoces a alguien que quiera contar pájaros en agosto?", "No hay nadie aquí que conozca esta planta.", "Hugo me ayuda para que los estudiantes lleguen a tiempo al observatorio.", "Voy a apagar las luces para que todos vean mejor las estrellas.", "Quiero un laboratorio que sea pequeño y alegre."],
      "I'm looking for an assistant who knows how to use the telescope. I already have a camera that works well, but I need one that's more sensitive. Do you know anyone who wants to count birds in August? There's nobody here who knows this plant. Hugo helps me so that the students get to the observatory on time. I'm going to turn off the lights so that everyone sees the stars better. I want a lab that's small and cheerful.",
      [
        ["¿Qué busca Vera?", ["un asistente que sepa usar el telescopio", "una cámara nueva", "una planta"], 0, "Busco un asistente que sepa usar el telescopio" + NOTYET],
        ["¿Para qué ayuda Hugo a Vera?", ["para que apague las luces", "para que los estudiantes lleguen a tiempo", "para que cuente pájaros"], 1, "Para que los estudiantes lleguen a tiempo" + PARAQUE],
        ["¿Qué va a hacer Vera?", ["contar pájaros", "apagar las luces", "comprar un laboratorio"], 1, "Voy a apagar las luces para que todos vean mejor las estrellas."],
      ],
      "Write about something you're looking for, for science or for time in nature." + P7,
      "Busco un telescopio que sea fácil de usar. Ya tengo una cámara que me gusta mucho, pero necesito una que sea más pequeña. ¿Conoces a alguien que sepa de plantas? Mi amigo Hugo me ayuda para que aprenda los nombres. Quiero un jardín que sea pequeño y verde.",
    ),
    tech: v(
      "Wanted: a programmer",
      "impresoras (printers)",
      ["Busco un programador que sepa hacer juegos para teléfonos.", "Ya tengo una computadora que funciona bien, pero necesito una que sea más rápida.", "¿Conoces a alguien que quiera probar juegos en agosto?", "No hay nadie aquí que arregle impresoras.", "Mía me ayuda para que el equipo termine a tiempo.", "Voy a cambiar los colores para que todos lean mejor la pantalla.", "Quiero un juego que sea corto y divertido."],
      "I'm looking for a programmer who knows how to make games for phones. I already have a computer that works well, but I need one that's faster. Do you know anyone who wants to test games in August? There's nobody here who fixes printers. Mía helps me so that the team finishes on time. I'm going to change the colors so that everyone reads the screen better. I want a game that's short and fun.",
      [
        ["¿Qué busca Nico?", ["un programador que sepa hacer juegos para teléfonos", "una impresora", "una computadora vieja"], 0, "Busco un programador que sepa hacer juegos" + NOTYET],
        ["¿Para qué ayuda Mía a Nico?", ["para que cambie los colores", "para que el equipo termine a tiempo", "para que arregle impresoras"], 1, "Para que el equipo termine a tiempo" + PARAQUE],
        ["¿Qué va a hacer Nico?", ["probar juegos", "cambiar los colores", "comprar un teléfono"], 1, "Voy a cambiar los colores para que todos lean mejor la pantalla."],
      ],
      "Write about a device, a game or an app you're looking for." + P7,
      "Busco un teléfono que tenga buena cámara. Ya tengo una computadora que funciona bien, pero necesito una que sea más rápida. ¿Conoces a alguien que arregle pantallas? Mi amiga Mía me ayuda para que termine mi juego. Quiero un juego que sea corto y divertido.",
    ),
    health: v(
      "Wanted: a trainer",
      "entrenador (trainer), sal (salt), citas (appointments), horarios (schedules), descanso (rest)",
      ["Busco un entrenador que sepa trabajar con personas mayores.", "Ya tengo un plan que funciona bien, pero necesito uno que sea más fácil.", "¿Conoces a alguien que quiera dar clases de yoga en agosto?", "No hay nadie aquí que cocine sin sal.", "Iván me ayuda para que los pacientes lleguen a tiempo a sus citas.", "Voy a cambiar los horarios para que todos tengan más descanso.", "Quiero una clínica que sea pequeña y alegre."],
      "I'm looking for a trainer who knows how to work with older people. I already have a plan that works well, but I need one that's easier. Do you know anyone who wants to teach yoga classes in August? There's nobody here who cooks without salt. Iván helps me so that the patients get to their appointments on time. I'm going to change the schedules so that everyone gets more rest. I want a clinic that's small and cheerful.",
      [
        ["¿Qué busca Clara?", ["un entrenador que sepa trabajar con personas mayores", "un plan nuevo", "una clínica"], 0, "Busco un entrenador que sepa trabajar con personas mayores" + NOTYET],
        ["¿Para qué ayuda Iván a Clara?", ["para que cambie los horarios", "para que los pacientes lleguen a tiempo a sus citas", "para que cocine sin sal"], 1, "Para que los pacientes lleguen a tiempo a sus citas" + PARAQUE],
        ["¿Qué va a hacer Clara?", ["dar clases de yoga", "cambiar los horarios", "cocinar sin sal"], 1, "Voy a cambiar los horarios para que todos tengan más descanso."],
      ],
      "Write about something you're looking for, for your health." + P7,
      "Busco un gimnasio que abra por la noche. Ya tengo una bicicleta que me gusta mucho, pero necesito una que sea más ligera. ¿Conoces a alguien que enseñe yoga? Mi amigo Iván me ayuda para que corra mejor. Quiero una vida que sea sana y tranquila.",
    ),
    festivals: v(
      "Wanted: a musician",
      "charango (a small Andean guitar), ligero (light), madera (wood), escenario (stage)",
      ["Busco un músico que sepa tocar el charango.", "Ya tengo un vestido que me encanta, pero necesito uno que sea más ligero.", "¿Conoces a alguien que quiera bailar en el desfile de agosto?", "No hay nadie aquí que haga máscaras de madera.", "Raúl me ayuda para que los niños aprendan las canciones.", "Voy a mover el escenario para que todos vean mejor a los bailarines.", "Quiero una fiesta que sea pequeña y alegre."],
      "I'm looking for a musician who knows how to play the charango. I already have a dress that I love, but I need one that's lighter. Do you know anyone who wants to dance in the August parade? There's nobody here who makes wooden masks. Raúl helps me so that the children learn the songs. I'm going to move the stage so that everyone sees the dancers better. I want a festival that's small and cheerful.",
      [
        ["¿Qué busca Paula?", ["un músico que sepa tocar el charango", "un vestido nuevo", "una máscara"], 0, "Busco un músico que sepa tocar el charango" + NOTYET],
        ["¿Para qué ayuda Raúl a Paula?", ["para que mueva el escenario", "para que los niños aprendan las canciones", "para que haga máscaras"], 1, "Para que los niños aprendan las canciones" + PARAQUE],
        ["¿Qué va a hacer Paula?", ["hacer máscaras", "mover el escenario", "comprar un vestido"], 1, "Voy a mover el escenario para que todos vean mejor a los bailarines."],
      ],
      "Write about something you're looking for, for a party or a festival." + P7,
      "Busco un grupo que toque música tradicional. Ya tengo un vestido que me gusta mucho, pero necesito uno que sea más ligero. ¿Conoces a alguien que haga máscaras? Mi amigo Raúl me ayuda para que aprenda los pasos. Quiero una fiesta que sea pequeña y alegre.",
    ),
    animals: v(
      "Wanted: a bird vet",
      "pájaros (birds), establo (stable)",
      ["Busco un veterinario que sepa cuidar pájaros.", "Ya tengo un establo que tiene mucha luz, pero necesito uno que sea más grande.", "¿Conoces a alguien que quiera cuidar un perro en agosto?", "No hay nadie aquí que entienda a los gatos como Simón.", "Simón me ayuda para que los caballos coman a tiempo.", "Voy a cambiar las camas para que todos tengan más espacio.", "Quiero un refugio que sea pequeño y alegre."],
      "I'm looking for a vet who knows how to look after birds. I already have a stable that gets a lot of light, but I need one that's bigger. Do you know anyone who wants to look after a dog in August? There's nobody here who understands cats like Simón does. Simón helps me so that the horses eat on time. I'm going to change the beds so that everyone has more space. I want a shelter that's small and cheerful.",
      [
        ["¿Qué busca Julia?", ["un veterinario que sepa cuidar pájaros", "un establo nuevo", "un perro"], 0, "Busco un veterinario que sepa cuidar pájaros" + NOTYET],
        ["¿Para qué ayuda Simón a Julia?", ["para que cambie las camas", "para que los caballos coman a tiempo", "para que cuide un perro"], 1, "Para que los caballos coman a tiempo" + PARAQUE],
        ["¿Qué va a hacer Julia?", ["cuidar pájaros", "cambiar las camas", "comprar un refugio"], 1, "Voy a cambiar las camas para que todos tengan más espacio."],
      ],
      "Write about something you're looking for, for a pet or another animal." + P7,
      "Busco un apartamento que acepte perros. Ya tengo un gato que duerme todo el día, pero necesito un perro que quiera caminar. ¿Conoces a alguien que cuide gatos en agosto? Mi hermana me ayuda para que el perro aprenda. Quiero una casa que sea pequeña y alegre.",
    ),
  },
};
