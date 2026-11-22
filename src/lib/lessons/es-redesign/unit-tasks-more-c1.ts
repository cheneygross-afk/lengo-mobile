// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/unit-tasks-more-c1.ts by scripts/sync-content.mjs -- edit it there, not here.
// C1 "Read and write" lessons for the six newer topics (history, science,
// tech, health, festivals, animals). Same rules as unit-tasks-c1.ts: each
// version matches its unit's length, grammar and question count, and any
// word the course hasn't taught is glossed.
import { version as v, type MoreVersions } from "./unit-tasks";

const P1 = " Say what you'll do when something happens, what you won't stop until, and what you're glad a friend has done.";
const P2 = " Say what you'd do if things were different, what your parents wanted, and what you'd change.";
const P3 = " Say what a friend told you, how they said it, how you felt, and how they've changed.";
const P4 = " Tell a decision you made, what would have happened otherwise, and why you don't regret it.";
const P5 = " Say what you do in spite of a fact, what you'd do even if things went badly, and what you'll do whatever happens.";
const P6 = " Say who made or started it, how it is now, what someone asked you and what a friend was asked to do.";
const P7 = " Say what there is and where your own is, and use listo, aburrido and seguro in both meanings.";
const CUANDO = ": cuando + subjunctive for what hasn't happened yet.";
const HASTA = ": hasta que + subjunctive for the future.";
const HAYA = ": haya + participle.";
const SI = ": si + imperfect subjunctive, then the conditional.";
const WISH = ": a past wish takes the imperfect subjunctive.";
const BACK = ": the reported verb moves back to the past.";
const PONERSE = ": ponerse for a sudden mood.";
const COMOSI = ": como si + imperfect subjunctive.";
const UNREAL = ": a past that didn't happen.";
const CAMBIO = ": en cambio sets up a contrast.";
const FACT = ": aunque + the normal form for a fact.";
const WHATEVER = ": whatever happens.";
const POR = ": ser + participle, with por for who did it.";
const ASKSI = ": a reported yes-no question uses si.";
const ORDER = ": a reported order takes the imperfect subjunctive.";
const WHERE = ": estar says where a known thing is.";
const LISTO = ": estar listo is to be ready; ser listo is to be smart.";
const SEGURO = ": estar seguro is to be sure; ser seguro is to be safe.";

export const C1_MORE: MoreVersions = {
  "c1/1": {
    history: v(
      "The old archive",
      "restauraré (I'll restore), archivo (archive), carpintero (carpenter), techo (roof), descubrimientos (discoveries), obras (building work)",
      ["Cuando termine el invierno, restauraré el viejo archivo de Cusco.", "En cuanto encuentre un carpintero, te avisaré.", "No pienso descansar hasta que tengamos un techo nuevo.", "Este lugar es el archivo en el que leí mis primeros documentos.", "Bruno es la persona con la que comparto todos los descubrimientos.", "Me alegra que Bruno haya aceptado ayudarme.", "Dudo que hayamos terminado las obras antes de que empiece el verano.", "Cuando todo esté listo, lo celebraremos con toda la ciudad."],
      "When winter ends, I'll restore the old archive in Cusco. As soon as I find a carpenter, I'll let you know. I don't plan to rest until we have a new roof. This place is the archive where I read my first documents. Bruno is the person I share every discovery with. I'm glad Bruno has agreed to help me. I doubt we'll have finished the building work before summer starts. When everything is ready, we'll celebrate with the whole city.",
      [
        ["¿Qué hará Inés cuando termine el invierno?", ["Restaurará el viejo archivo.", "Venderá el archivo.", "Se mudará a otra ciudad."], 0, "Cuando termine el invierno, restauraré el viejo archivo de Cusco" + CUANDO],
        ["¿Hasta cuándo no piensa descansar Inés?", ["hasta que encuentre un carpintero", "hasta que tengan un techo nuevo", "hasta que empiece el verano"], 1, "Hasta que tengamos un techo nuevo" + HASTA],
        ["¿De qué se alegra Inés?", ["de que hayan terminado las obras", "de que Bruno haya aceptado ayudarla", "de que haya llegado el verano"], 1, "Me alegra que Bruno haya aceptado ayudarme" + HAYA],
      ],
      "Write about a plan to do with history: an old place to visit or save, a family story to write down." + P1,
      "Cuando termine el mes, visitaré el pueblo de mis abuelos. En cuanto encuentre las fotos viejas, te avisaré. No pienso descansar hasta que conozca toda la historia de mi familia. La casa en la que nació mi abuelo todavía existe. Me alegra que mi amigo Bruno haya decidido acompañarme. Cuando todo esté listo, escribiremos un libro juntos.",
    ),
    science: v(
      "The old telescope",
      "repararé (I'll repair), técnico (technician), espejo (mirror), cometa (comet), reparaciones (repairs)",
      ["Cuando termine el invierno, repararé el viejo telescopio del observatorio.", "En cuanto encuentre un técnico, te avisaré.", "No pienso descansar hasta que tengamos un espejo nuevo.", "Este lugar es el observatorio en el que vi mi primer cometa.", "Hugo es la persona con la que comparto todas las noches de trabajo.", "Me alegra que Hugo haya aceptado ayudarme.", "Dudo que hayamos terminado las reparaciones antes de que empiece el verano.", "Cuando todo esté listo, lo celebraremos mirando las estrellas."],
      "When winter ends, I'll repair the observatory's old telescope. As soon as I find a technician, I'll let you know. I don't plan to rest until we have a new mirror. This place is the observatory where I saw my first comet. Hugo is the person I share every night of work with. I'm glad Hugo has agreed to help me. I doubt we'll have finished the repairs before summer starts. When everything is ready, we'll celebrate by looking at the stars.",
      [
        ["¿Qué hará Vera cuando termine el invierno?", ["Reparará el viejo telescopio.", "Venderá el telescopio.", "Se mudará a otra ciudad."], 0, "Cuando termine el invierno, repararé el viejo telescopio" + CUANDO],
        ["¿Hasta cuándo no piensa descansar Vera?", ["hasta que encuentre un técnico", "hasta que tengan un espejo nuevo", "hasta que empiece el verano"], 1, "Hasta que tengamos un espejo nuevo" + HASTA],
        ["¿De qué se alegra Vera?", ["de que hayan terminado las reparaciones", "de que Hugo haya aceptado ayudarla", "de que haya llegado el verano"], 1, "Me alegra que Hugo haya aceptado ayudarme" + HAYA],
      ],
      "Write about a plan to do with science or nature: a garden, a night under the stars, an experiment." + P1,
      "Cuando termine el invierno, plantaré un jardín para las abejas. En cuanto encuentre las semillas, te avisaré. No pienso descansar hasta que vea la primera flor. El parque en el que aprendí los nombres de los árboles está muy cerca. Me alegra que mi amigo Hugo haya decidido ayudarme. Cuando todo esté listo, lo celebraremos al aire libre.",
    ),
    tech: v(
      "Nico's first game",
      "lanzaré (I'll launch), nivel (level), personajes (characters), pruebas (tests)",
      ["Cuando termine este proyecto, lanzaré mi primer videojuego.", "En cuanto encuentre un buen músico, te avisaré.", "No pienso descansar hasta que tengamos un nivel final perfecto.", "Este cuarto es el lugar en el que escribí mis primeros programas.", "Mía es la persona con la que comparto todas las ideas.", "Me alegra que Mía haya aceptado diseñar los personajes.", "Dudo que hayamos terminado las pruebas antes de que empiece el verano.", "Cuando todo esté listo, lo celebraremos jugando toda la noche."],
      "When this project is finished, I'll launch my first video game. As soon as I find a good musician, I'll let you know. I don't plan to rest until we have a perfect final level. This room is the place where I wrote my first programs. Mía is the person I share every idea with. I'm glad Mía has agreed to design the characters. I doubt we'll have finished the tests before summer starts. When everything is ready, we'll celebrate by playing all night.",
      [
        ["¿Qué hará Nico cuando termine este proyecto?", ["Lanzará su primer videojuego.", "Venderá su computadora.", "Se mudará a otra ciudad."], 0, "Cuando termine este proyecto, lanzaré mi primer videojuego" + CUANDO],
        ["¿Hasta cuándo no piensa descansar Nico?", ["hasta que encuentre un músico", "hasta que tengan un nivel final perfecto", "hasta que empiece el verano"], 1, "Hasta que tengamos un nivel final perfecto" + HASTA],
        ["¿De qué se alegra Nico?", ["de que hayan terminado las pruebas", "de que Mía haya aceptado diseñar los personajes", "de que haya llegado el verano"], 1, "Me alegra que Mía haya aceptado diseñar los personajes" + HAYA],
      ],
      "Write about a plan to do with technology or games: an app, a channel, a game to finish." + P1,
      "Cuando termine el curso, crearé mi propia página web. En cuanto elija el nombre, te avisaré. No pienso descansar hasta que funcione en el celular. El cuarto en el que jugué mis primeros videojuegos ahora es mi oficina. Me alegra que mi amiga Mía haya decidido ayudarme con el diseño. Cuando todo esté listo, lo celebraremos jugando juntos.",
    ),
    health: v(
      "A clinic for the neighborhood",
      "clínica (clinic), local (premises), sala de espera (waiting room), turnos (shifts), obras (building work)",
      ["Cuando termine el invierno, abriré una clínica en mi barrio.", "En cuanto encuentre un local, te avisaré.", "No pienso descansar hasta que tengamos una sala de espera cómoda.", "Este barrio es el lugar en el que aprendí a cuidar a la gente.", "Iván es la persona con la que comparto todos los turnos.", "Me alegra que Iván haya aceptado ayudarme.", "Dudo que hayamos terminado las obras antes de que empiece el verano.", "Cuando todo esté listo, lo celebraremos con todos los vecinos."],
      "When winter ends, I'll open a clinic in my neighborhood. As soon as I find premises, I'll let you know. I don't plan to rest until we have a comfortable waiting room. This neighborhood is the place where I learned to look after people. Iván is the person I share every shift with. I'm glad Iván has agreed to help me. I doubt we'll have finished the building work before summer starts. When everything is ready, we'll celebrate with all the neighbors.",
      [
        ["¿Qué hará Clara cuando termine el invierno?", ["Abrirá una clínica en su barrio.", "Dejará su trabajo.", "Se mudará a otra ciudad."], 0, "Cuando termine el invierno, abriré una clínica en mi barrio" + CUANDO],
        ["¿Hasta cuándo no piensa descansar Clara?", ["hasta que encuentre un local", "hasta que tengan una sala de espera cómoda", "hasta que empiece el verano"], 1, "Hasta que tengamos una sala de espera cómoda" + HASTA],
        ["¿De qué se alegra Clara?", ["de que hayan terminado las obras", "de que Iván haya aceptado ayudarla", "de que haya llegado el verano"], 1, "Me alegra que Iván haya aceptado ayudarme" + HAYA],
      ],
      "Write about a plan for your health: a race, a new habit, a change in how you eat or sleep." + P1,
      "Cuando termine el mes, empezaré a correr todas las mañanas. En cuanto compre los zapatos, te avisaré. No pienso descansar hasta que pueda correr diez kilómetros. El parque en el que entreno está al lado de mi casa. Me alegra que mi amigo Iván haya decidido correr conmigo. Cuando todo esté listo, lo celebraremos con un buen desayuno.",
    ),
    festivals: v(
      "The village festival",
      "banda (band), escenario (stage), ensayos (rehearsals), trajes (costumes)",
      ["Cuando termine el invierno, organizaré el festival de mi pueblo.", "En cuanto encuentre una banda, te avisaré.", "No pienso descansar hasta que tengamos un escenario nuevo.", "Esta plaza es el lugar en el que bailé por primera vez.", "Raúl es la persona con la que comparto todos los ensayos.", "Me alegra que Raúl haya aceptado tocar con nosotros.", "Dudo que hayamos terminado los trajes antes de que empiece el festival.", "Cuando todo esté listo, lo celebraremos con todo el pueblo."],
      "When winter ends, I'll organize my village's festival. As soon as I find a band, I'll let you know. I don't plan to rest until we have a new stage. This square is the place where I danced for the first time. Raúl is the person I share every rehearsal with. I'm glad Raúl has agreed to play with us. I doubt we'll have finished the costumes before the festival starts. When everything is ready, we'll celebrate with the whole village.",
      [
        ["¿Qué hará Paula cuando termine el invierno?", ["Organizará el festival de su pueblo.", "Dejará de bailar.", "Se mudará a otra ciudad."], 0, "Cuando termine el invierno, organizaré el festival de mi pueblo" + CUANDO],
        ["¿Hasta cuándo no piensa descansar Paula?", ["hasta que encuentre una banda", "hasta que tengan un escenario nuevo", "hasta que empiece el festival"], 1, "Hasta que tengamos un escenario nuevo" + HASTA],
        ["¿De qué se alegra Paula?", ["de que hayan terminado los trajes", "de que Raúl haya aceptado tocar con ellos", "de que haya llegado el verano"], 1, "Me alegra que Raúl haya aceptado tocar con nosotros" + HAYA],
      ],
      "Write about a plan for a party, a festival or a family tradition." + P1,
      "Cuando termine el mes, organizaré la fiesta de cumpleaños de mi abuela. En cuanto encuentre un lugar, te avisaré. No pienso descansar hasta que tengamos música en vivo. El patio en el que celebramos todas las fiestas es perfecto. Me alegra que mi amigo Raúl haya decidido tocar la guitarra. Cuando todo esté listo, bailaremos toda la noche.",
    ),
    animals: v(
      "A shelter for dogs",
      "refugio (shelter), terreno (piece of land), techo (roof), curé (I treated), obras (building work)",
      ["Cuando termine el invierno, abriré un refugio para perros.", "En cuanto encuentre un terreno, te avisaré.", "No pienso descansar hasta que tengamos un techo para todos.", "Este pueblo es el lugar en el que curé a mi primer animal.", "Simón es la persona con la que comparto todo el trabajo.", "Me alegra que Simón haya aceptado ayudarme.", "Dudo que hayamos terminado las obras antes de que empiece el verano.", "Cuando todo esté listo, lo celebraremos con Coco y Luna."],
      "When winter ends, I'll open a shelter for dogs. As soon as I find a piece of land, I'll let you know. I don't plan to rest until we have a roof for all of them. This village is the place where I treated my first animal. Simón is the person I share all the work with. I'm glad Simón has agreed to help me. I doubt we'll have finished the building work before summer starts. When everything is ready, we'll celebrate with Coco and Luna.",
      [
        ["¿Qué hará Julia cuando termine el invierno?", ["Abrirá un refugio para perros.", "Venderá su clínica.", "Se mudará a otra ciudad."], 0, "Cuando termine el invierno, abriré un refugio para perros" + CUANDO],
        ["¿Hasta cuándo no piensa descansar Julia?", ["hasta que encuentre un terreno", "hasta que tengan un techo para todos", "hasta que empiece el verano"], 1, "Hasta que tengamos un techo para todos" + HASTA],
        ["¿De qué se alegra Julia?", ["de que hayan terminado las obras", "de que Simón haya aceptado ayudarla", "de que haya llegado el verano"], 1, "Me alegra que Simón haya aceptado ayudarme" + HAYA],
      ],
      "Write about a plan to do with an animal or a pet: adopting one, training one, helping a shelter." + P1,
      "Cuando termine el mes, adoptaré un perro del refugio. En cuanto elija uno, te avisaré. No pienso descansar hasta que tenga una cama cómoda para él. El parque en el que jugaba de niño está muy cerca de mi casa. Me alegra que mi amigo Simón haya decidido acompañarme. Cuando todo esté listo, lo celebraremos con un paseo largo.",
    ),
  },
  "c1/2": {
    history: v(
      "If Inés had more time",
      "incas (Incas), ruinas (ruins), abogada (lawyer), cartas (letters)",
      ["Si tuviera más tiempo, escribiría un libro sobre los incas.", "Si Bruno viviera más cerca, visitaríamos ruinas juntos todos los meses.", "De niña, mis padres querían que fuera abogada.", "Mi abuelo me pidió que guardara sus cartas viejas.", "Me gustaría que los turistas leyeran más antes de venir.", "Si pudiera cambiar algo, abriría el museo por la noche.", "Bruno dice que, si fuera yo, viajaría a Egipto."],
      "If I had more time, I'd write a book about the Incas. If Bruno lived closer, we'd visit ruins together every month. When I was a girl, my parents wanted me to be a lawyer. My grandfather asked me to keep his old letters. I'd like tourists to read more before they come. If I could change something, I'd open the museum at night. Bruno says that, if he were me, he'd travel to Egypt.",
      [
        ["¿Qué haría Inés si tuviera más tiempo?", ["Escribiría un libro sobre los incas.", "Vendería el museo.", "Dejaría la historia."], 0, "Si tuviera más tiempo, escribiría un libro sobre los incas" + SI],
        ["¿Qué querían los padres de Inés?", ["que fuera doctora", "que fuera abogada", "que guardara las cartas"], 1, "Querían que fuera abogada" + WISH],
        ["¿Qué cambiaría Inés?", ["Viajaría a Egipto.", "Abriría el museo por la noche.", "Cerraría el museo."], 1, "Si pudiera cambiar algo, abriría el museo por la noche."],
      ],
      "Write about history in a different life." + P2,
      "Si tuviera más tiempo, visitaría todos los museos de mi país. Si mi amigo Bruno viviera más cerca, iríamos juntos a las ruinas. De joven, mis padres querían que estudiara historia. Me gustaría que mi ciudad cuidara más sus edificios viejos. Si pudiera cambiar algo, abriría los museos gratis los domingos. Sería un sueño.",
    ),
    science: v(
      "If Vera had more money",
      "desierto (desert), luces (lights), observatorio (observatory)",
      ["Si tuviera más dinero, compraría un telescopio más grande.", "Si Hugo viviera más cerca, miraríamos las estrellas juntos cada semana.", "De niña, mis padres querían que fuera doctora.", "Mi abuela me pidió que aprendiera los nombres de las plantas.", "Me gustaría que la ciudad tuviera menos luces.", "Si pudiera cambiar algo, pondría un observatorio en cada escuela.", "Hugo dice que, si fuera yo, se mudaría al desierto."],
      "If I had more money, I'd buy a bigger telescope. If Hugo lived closer, we'd look at the stars together every week. When I was a girl, my parents wanted me to be a doctor. My grandmother asked me to learn the names of the plants. I'd like the city to have fewer lights. If I could change something, I'd put an observatory in every school. Hugo says that, if he were me, he'd move to the desert.",
      [
        ["¿Qué haría Vera si tuviera más dinero?", ["Compraría un telescopio más grande.", "Vendería su telescopio.", "Compraría un carro."], 0, "Si tuviera más dinero, compraría un telescopio más grande" + SI],
        ["¿Qué querían los padres de Vera?", ["que fuera maestra", "que fuera doctora", "que aprendiera las plantas"], 1, "Querían que fuera doctora" + WISH],
        ["¿Qué cambiaría Vera?", ["Se mudaría al desierto.", "Pondría un observatorio en cada escuela.", "Pondría más luces."], 1, "Si pudiera cambiar algo, pondría un observatorio en cada escuela."],
      ],
      "Write about science or nature in a different life." + P2,
      "Si tuviera más tiempo, estudiaría los pájaros de mi región. Si mi amigo Hugo viviera más cerca, caminaríamos juntos por la montaña. De joven, mis padres querían que fuera médico. Me gustaría que mi ciudad tuviera más árboles. Si pudiera cambiar algo, pondría un jardín en cada escuela. Sería un sueño.",
    ),
    tech: v(
      "If Nico had more time",
      "aplicación (app), contraseñas (passwords), consola (console)",
      ["Si tuviera más tiempo, crearía mi propia aplicación.", "Si Mía viviera más cerca, trabajaríamos juntos cada día.", "De niño, mis padres querían que fuera médico.", "Mi abuelo me pidió que le enseñara a usar el celular.", "Me gustaría que las contraseñas fueran más fáciles de recordar.", "Si pudiera cambiar algo, pondría internet gratis en todo el país.", "Mía dice que, si fuera yo, vendería la consola."],
      "If I had more time, I'd create my own app. If Mía lived closer, we'd work together every day. When I was a boy, my parents wanted me to be a doctor. My grandfather asked me to teach him to use his cell phone. I'd like passwords to be easier to remember. If I could change something, I'd put free internet in the whole country. Mía says that, if she were me, she'd sell the console.",
      [
        ["¿Qué haría Nico si tuviera más tiempo?", ["Crearía su propia aplicación.", "Vendería su computadora.", "Dejaría de programar."], 0, "Si tuviera más tiempo, crearía mi propia aplicación" + SI],
        ["¿Qué querían los padres de Nico?", ["que fuera maestro", "que fuera médico", "que usara el celular"], 1, "Querían que fuera médico" + WISH],
        ["¿Qué cambiaría Nico?", ["Vendería la consola.", "Pondría internet gratis en todo el país.", "Cambiaría de trabajo."], 1, "Si pudiera cambiar algo, pondría internet gratis en todo el país."],
      ],
      "Write about technology or games in a different life." + P2,
      "Si tuviera más tiempo, aprendería a programar. Si mi amiga Mía viviera más cerca, jugaríamos juntos los sábados. De joven, mis padres querían que usara menos la computadora. Me gustaría que mi celular tuviera más batería. Si pudiera cambiar algo, pondría internet rápido en mi pueblo. Sería un sueño.",
    ),
    health: v(
      "If Clara had more free time",
      "sano (healthy), pacientes (patients), gimnasio (gym)",
      ["Si tuviera más tiempo libre, haría yoga todas las mañanas.", "Si Iván viviera más cerca, correríamos juntos todos los domingos.", "De niña, mis padres querían que fuera maestra.", "Mi abuela me pidió que aprendiera a cocinar sano.", "Me gustaría que mis pacientes durmieran más.", "Si pudiera cambiar algo, pondría un gimnasio en el hospital.", "Iván dice que, si fuera yo, dejaría el café."],
      "If I had more free time, I'd do yoga every morning. If Iván lived closer, we'd run together every Sunday. When I was a girl, my parents wanted me to be a teacher. My grandmother asked me to learn to cook healthy food. I'd like my patients to sleep more. If I could change something, I'd put a gym in the hospital. Iván says that, if he were me, he'd give up coffee.",
      [
        ["¿Qué haría Clara si tuviera más tiempo libre?", ["Haría yoga todas las mañanas.", "Dormiría todo el día.", "Dejaría su trabajo."], 0, "Si tuviera más tiempo libre, haría yoga todas las mañanas" + SI],
        ["¿Qué querían los padres de Clara?", ["que fuera doctora", "que fuera maestra", "que cocinara sano"], 1, "Querían que fuera maestra" + WISH],
        ["¿Qué cambiaría Clara?", ["Dejaría el café.", "Pondría un gimnasio en el hospital.", "Cambiaría de hospital."], 1, "Si pudiera cambiar algo, pondría un gimnasio en el hospital."],
      ],
      "Write about your health in a different life." + P2,
      "Si tuviera más tiempo, nadaría todos los días. Si mi amigo Iván viviera más cerca, correríamos juntos los domingos. De joven, mis padres querían que comiera más verduras. Me gustaría que mi trabajo tuviera un gimnasio. Si pudiera cambiar algo, dormiría ocho horas cada noche. Sería un sueño.",
    ),
    festivals: v(
      "If Paula had more money",
      "carnaval (carnival), ensayaríamos (we'd rehearse), enfermera (nurse)",
      ["Si tuviera más dinero, viajaría al carnaval de Oruro.", "Si Raúl viviera más cerca, ensayaríamos juntos todos los días.", "De niña, mis padres querían que fuera enfermera.", "Mi abuela me pidió que aprendiera los bailes del pueblo.", "Me gustaría que la fiesta durara una semana.", "Si pudiera cambiar algo, pondría música en todas las plazas.", "Raúl dice que, si fuera yo, abriría una escuela de baile."],
      "If I had more money, I'd travel to the Oruro carnival. If Raúl lived closer, we'd rehearse together every day. When I was a girl, my parents wanted me to be a nurse. My grandmother asked me to learn the village dances. I'd like the party to last a week. If I could change something, I'd put music in every square. Raúl says that, if he were me, he'd open a dance school.",
      [
        ["¿Qué haría Paula si tuviera más dinero?", ["Viajaría al carnaval de Oruro.", "Compraría una casa.", "Dejaría de bailar."], 0, "Si tuviera más dinero, viajaría al carnaval de Oruro" + SI],
        ["¿Qué querían los padres de Paula?", ["que fuera maestra", "que fuera enfermera", "que aprendiera los bailes"], 1, "Querían que fuera enfermera" + WISH],
        ["¿Qué cambiaría Paula?", ["Abriría una escuela de baile.", "Pondría música en todas las plazas.", "Cambiaría de pueblo."], 1, "Si pudiera cambiar algo, pondría música en todas las plazas."],
      ],
      "Write about parties and traditions in a different life." + P2,
      "Si tuviera más dinero, viajaría a México para el Día de Muertos. Si mi amigo Raúl viviera más cerca, celebraríamos juntos todos los cumpleaños. De joven, mis padres querían que aprendiera a bailar. Me gustaría que mi ciudad tuviera más fiestas en la calle. Si pudiera cambiar algo, pondría música en todas las plazas. Sería un sueño.",
    ),
    animals: v(
      "If Julia had more room",
      "adoptaría (I'd adopt), abogada (lawyer), caballos (horses)",
      ["Si tuviera más espacio, adoptaría tres gatos.", "Si Simón viviera más cerca, pasearíamos a los perros juntos cada día.", "De niña, mis padres querían que fuera abogada.", "Mi abuelo me pidió que cuidara a sus caballos.", "Me gustaría que la gente adoptara más animales.", "Si pudiera cambiar algo, pondría un parque para perros en cada barrio.", "Simón dice que, si fuera yo, se mudaría al campo."],
      "If I had more room, I'd adopt three cats. If Simón lived closer, we'd walk the dogs together every day. When I was a girl, my parents wanted me to be a lawyer. My grandfather asked me to look after his horses. I'd like people to adopt more animals. If I could change something, I'd put a dog park in every neighborhood. Simón says that, if he were me, he'd move to the country.",
      [
        ["¿Qué haría Julia si tuviera más espacio?", ["Adoptaría tres gatos.", "Vendería la clínica.", "Compraría un carro."], 0, "Si tuviera más espacio, adoptaría tres gatos" + SI],
        ["¿Qué querían los padres de Julia?", ["que fuera doctora", "que fuera abogada", "que cuidara a los caballos"], 1, "Querían que fuera abogada" + WISH],
        ["¿Qué cambiaría Julia?", ["Se mudaría al campo.", "Pondría un parque para perros en cada barrio.", "Cambiaría de trabajo."], 1, "Si pudiera cambiar algo, pondría un parque para perros en cada barrio."],
      ],
      "Write about animals or pets in a different life." + P2,
      "Si tuviera más espacio, tendría dos perros. Si mi amigo Simón viviera más cerca, pasearíamos juntos todas las tardes. De joven, mis padres querían que cuidara al gato de la familia. Me gustaría que mi barrio tuviera un parque para perros. Si pudiera cambiar algo, adoptaría un caballo. Sería un sueño.",
    ),
  },
  "c1/3": {
    history: v(
      "The day Bruno left the office",
      "guía (guide), pirámides (pyramids), experto (expert)",
      ["Bruno me dijo que estaba cansado de la oficina.", "También me dijo que sería guía en las pirámides.", "Lo dijo como si fuera la cosa más fácil del mundo.", "Yo me puse nerviosa.", "Me quedé sola en el museo.", "Con los años, Bruno se hizo experto en los mayas.", "Se ha vuelto más paciente.", "Ahora habla como si conociera a los mayas."],
      "Bruno told me he was tired of the office. He also told me he would be a guide at the pyramids. He said it as if it were the easiest thing in the world. I got nervous. I was left alone in the museum. Over the years, Bruno became an expert on the Maya. He has become more patient. Now he talks as if he knew the Maya.",
      [
        ["¿Qué le dijo Bruno a Inés?", ["que estaba cansado de la oficina", "que estaba enfermo", "que quería otro museo"], 0, "Me dijo que estaba cansado de la oficina" + BACK],
        ["¿Cómo se puso Inés?", ["contenta", "nerviosa", "aburrida"], 1, "Me puse nerviosa" + PONERSE],
        ["¿Cómo habla Bruno ahora?", ["como si fuera rico", "como si conociera a los mayas", "como si tuviera prisa"], 1, "Habla como si conociera a los mayas" + COMOSI],
      ],
      "Write about a big decision a friend made to do with history, study or travel to an old place." + P3,
      "Mi amigo Bruno me dijo que quería estudiar historia. También me dijo que viajaría a Perú para ver Machu Picchu. Lo dijo como si fuera fácil. Yo me puse feliz y me quedé sin palabras. Desde entonces, Bruno se ha vuelto muy curioso. Ahora habla como si fuera profesor. Ojalá le vaya bien.",
    ),
    science: v(
      "The day Hugo left the lab",
      "laboratorio (lab), selva (rainforest), ranas (frogs), experto (expert), extrañara (missed)",
      ["Hugo me dijo que estaba cansado del laboratorio.", "También me dijo que se iría a la selva a estudiar ranas.", "Lo dijo como si fuera la cosa más fácil del mundo.", "Yo me puse triste.", "Me quedé sola en el observatorio.", "Con los años, Hugo se hizo experto en ranas.", "Se ha vuelto más tranquilo.", "Ahora actúa como si no extrañara el laboratorio."],
      "Hugo told me he was tired of the lab. He also told me he would go to the rainforest to study frogs. He said it as if it were the easiest thing in the world. I got sad. I was left alone in the observatory. Over the years, Hugo became an expert on frogs. He has become calmer. Now he acts as if he didn't miss the lab.",
      [
        ["¿Qué le dijo Hugo a Vera?", ["que estaba cansado del laboratorio", "que estaba enfermo", "que quería otro telescopio"], 0, "Me dijo que estaba cansado del laboratorio" + BACK],
        ["¿Cómo se puso Vera?", ["contenta", "triste", "aburrida"], 1, "Me puse triste" + PONERSE],
        ["¿Cómo actúa Hugo ahora?", ["como si fuera rico", "como si no extrañara el laboratorio", "como si tuviera prisa"], 1, "Actúa como si no extrañara el laboratorio" + COMOSI],
      ],
      "Write about a big decision a friend made to do with science or nature." + P3,
      "Mi amigo Hugo me dijo que quería estudiar el mar. También me dijo que se mudaría a una isla pequeña. Lo dijo como si fuera fácil. Yo me puse feliz y me quedé sin palabras. Desde entonces, Hugo se ha vuelto muy paciente. Ahora actúa como si ya viviera en la playa. Ojalá le vaya bien.",
    ),
    tech: v(
      "The day Mía went offline",
      "redes sociales (social media), borraría (would delete), cuentas (accounts), diseñadora (designer)",
      ["Mía me dijo que estaba cansada de las redes sociales.", "También me dijo que borraría todas sus cuentas.", "Lo dijo como si fuera la cosa más fácil del mundo.", "Yo me puse nervioso.", "Me quedé solo en el chat.", "Con los años, Mía se hizo diseñadora de videojuegos.", "Se ha vuelto más creativa.", "Ahora actúa como si no necesitara el celular."],
      "Mía told me she was tired of social media. She also told me she would delete all her accounts. She said it as if it were the easiest thing in the world. I got nervous. I was left alone in the chat. Over the years, Mía became a video game designer. She has become more creative. Now she acts as if she didn't need her cell phone.",
      [
        ["¿Qué le dijo Mía a Nico?", ["que estaba cansada de las redes sociales", "que estaba enferma", "que quería otro celular"], 0, "Me dijo que estaba cansada de las redes sociales" + BACK],
        ["¿Cómo se puso Nico?", ["contento", "nervioso", "aburrido"], 1, "Me puse nervioso" + PONERSE],
        ["¿Cómo actúa Mía ahora?", ["como si fuera rica", "como si no necesitara el celular", "como si tuviera prisa"], 1, "Actúa como si no necesitara el celular" + COMOSI],
      ],
      "Write about a big decision a friend made to do with technology, phones or games." + P3,
      "Mi amiga Mía me dijo que quería usar menos el celular. También me dijo que dejaría las redes sociales por un mes. Lo dijo como si fuera fácil. Yo me puse nervioso y me quedé sin palabras. Desde entonces, Mía se ha vuelto más tranquila. Ahora actúa como si no necesitara internet. Ojalá le vaya bien.",
    ),
    health: v(
      "The day Iván changed his life",
      "maratón (marathon), corredor (runner), disciplinado (disciplined)",
      ["Iván me dijo que estaba cansado de comer mal y dormir poco.", "También me dijo que correría un maratón en Quito.", "Lo dijo como si fuera la cosa más fácil del mundo.", "Yo me puse contenta.", "Me quedé sorprendida toda la tarde.", "Con los años, Iván se hizo corredor.", "Se ha vuelto más disciplinado.", "Ahora corre como si tuviera veinte años."],
      "Iván told me he was tired of eating badly and sleeping little. He also told me he would run a marathon in Quito. He said it as if it were the easiest thing in the world. I got happy. I was left surprised all afternoon. Over the years, Iván became a runner. He has become more disciplined. Now he runs as if he were twenty.",
      [
        ["¿Qué le dijo Iván a Clara?", ["que estaba cansado de comer mal y dormir poco", "que estaba enfermo", "que quería otro trabajo"], 0, "Me dijo que estaba cansado de comer mal y dormir poco" + BACK],
        ["¿Cómo se puso Clara?", ["triste", "contenta", "aburrida"], 1, "Me puse contenta" + PONERSE],
        ["¿Cómo corre Iván ahora?", ["como si fuera rico", "como si tuviera veinte años", "como si tuviera miedo"], 1, "Corre como si tuviera veinte años" + COMOSI],
      ],
      "Write about a big decision a friend made for their health." + P3,
      "Mi amigo Iván me dijo que quería dejar el azúcar. También me dijo que iría al gimnasio todos los días. Lo dijo como si fuera fácil. Yo me puse feliz y me quedé sin palabras. Desde entonces, Iván se ha vuelto muy disciplinado. Ahora corre como si tuviera veinte años. Ojalá le vaya bien.",
    ),
    festivals: v(
      "The day Raúl left the bars",
      "bares (bars), carnaval (carnival), famoso (famous)",
      ["Raúl me dijo que estaba cansado de tocar en bares.", "También me dijo que tocaría en el carnaval de Oruro.", "Lo dijo como si fuera la cosa más fácil del mundo.", "Yo me puse feliz.", "Me quedé sin palabras.", "Con los años, Raúl se hizo famoso en Bolivia.", "Se ha vuelto más serio.", "Ahora toca como si cada noche fuera la última."],
      "Raúl told me he was tired of playing in bars. He also told me he would play at the Oruro carnival. He said it as if it were the easiest thing in the world. I got happy. I was left speechless. Over the years, Raúl became famous in Bolivia. He has become more serious. Now he plays as if every night were the last.",
      [
        ["¿Qué le dijo Raúl a Paula?", ["que estaba cansado de tocar en bares", "que estaba enfermo", "que quería otra guitarra"], 0, "Me dijo que estaba cansado de tocar en bares" + BACK],
        ["¿Cómo se puso Paula?", ["triste", "feliz", "aburrida"], 1, "Me puse feliz" + PONERSE],
        ["¿Cómo toca Raúl ahora?", ["como si fuera rico", "como si cada noche fuera la última", "como si tuviera prisa"], 1, "Toca como si cada noche fuera la última" + COMOSI],
      ],
      "Write about a big decision a friend made to do with music, dance or a festival." + P3,
      "Mi amigo Raúl me dijo que quería aprender a bailar. También me dijo que bailaría en la fiesta del pueblo. Lo dijo como si fuera fácil. Yo me puse feliz y me quedé sin palabras. Desde entonces, Raúl se ha vuelto muy alegre. Ahora baila como si nadie lo mirara. Ojalá le vaya bien.",
    ),
    animals: v(
      "The day Simón bought a farm",
      "granja (farm), clínica (clinic), extrañara (missed)",
      ["Simón me dijo que estaba cansado de la ciudad.", "También me dijo que compraría una granja en Panamá.", "Lo dijo como si fuera la cosa más fácil del mundo.", "Yo me puse triste.", "Me quedé sola en la clínica.", "Con los años, Simón se hizo amigo de todos sus animales.", "Se ha vuelto más tranquilo.", "Ahora actúa como si no extrañara la ciudad."],
      "Simón told me he was tired of the city. He also told me he would buy a farm in Panama. He said it as if it were the easiest thing in the world. I got sad. I was left alone at the clinic. Over the years, Simón became friends with all his animals. He has become calmer. Now he acts as if he didn't miss the city.",
      [
        ["¿Qué le dijo Simón a Julia?", ["que estaba cansado de la ciudad", "que estaba enfermo", "que quería otro perro"], 0, "Me dijo que estaba cansado de la ciudad" + BACK],
        ["¿Cómo se puso Julia?", ["contenta", "triste", "aburrida"], 1, "Me puse triste" + PONERSE],
        ["¿Cómo actúa Simón ahora?", ["como si fuera rico", "como si no extrañara la ciudad", "como si tuviera prisa"], 1, "Actúa como si no extrañara la ciudad" + COMOSI],
      ],
      "Write about a big decision a friend made to do with an animal or a pet." + P3,
      "Mi amigo Simón me dijo que quería adoptar un perro. También me dijo que se mudaría a una casa con jardín. Lo dijo como si fuera fácil. Yo me puse feliz y me quedé sin palabras. Desde entonces, Simón se ha vuelto muy paciente. Ahora actúa como si el perro fuera su hijo. Ojalá le vaya bien.",
    ),
  },
  "c1/4": {
    history: v(
      "The job Inés turned down",
      "rechacé (I turned down), documentos (documents), guías (guides), archivo (archive), me arrepiento (I regret)",
      ["Hace cinco años rechacé un trabajo en un museo de Madrid.", "Si hubiera aceptado, habría vivido en Europa.", "Sin embargo, en Cusco encontré documentos únicos.", "Además, conocí a los mejores guías del país.", "Si no hubiera seguido aquí, ahora no tendría mi propio archivo.", "Bruno, en cambio, se fue a Madrid y volvió al año.", "Por lo tanto, no me arrepiento de nada."],
      "Five years ago I turned down a job at a museum in Madrid. If I had accepted, I would have lived in Europe. However, in Cusco I found unique documents. Besides, I met the best guides in the country. If I hadn't stayed here, I wouldn't have my own archive now. Bruno, on the other hand, went to Madrid and came back within a year. So I don't regret anything.",
      [
        ["¿Qué hizo Inés hace cinco años?", ["Rechazó un trabajo en un museo de Madrid.", "Aceptó un trabajo en Madrid.", "Cerró su archivo."], 0, "Hace cinco años rechacé un trabajo en un museo de Madrid."],
        ["¿Qué habría pasado si Inés hubiera aceptado?", ["Habría encontrado documentos únicos.", "Habría vivido en Europa.", "Habría tenido su propio archivo."], 1, "Si hubiera aceptado, habría vivido en Europa" + UNREAL],
        ["¿Qué hizo Bruno?", ["Se quedó en Cusco.", "Se fue a Madrid y volvió al año.", "Abrió un museo."], 1, "Bruno, en cambio, se fue a Madrid y volvió al año" + CAMBIO],
      ],
      "Write about a decision to do with history, study or an old place." + P4,
      "Hace tres años decidí estudiar historia. Si hubiera elegido otra carrera, habría ganado más dinero. Sin embargo, aquí encontré lo que más me gusta. Además, conocí a profesores increíbles. Si no hubiera estudiado historia, ahora no trabajaría en un museo. Por lo tanto, no me arrepiento de nada.",
    ),
    science: v(
      "The job Vera turned down",
      "rechacé (I turned down), laboratorio (lab), desierto (desert), descubrí (I discovered), cometa (comet), me arrepiento (I regret)",
      ["Hace cinco años rechacé un trabajo en un laboratorio de Santiago.", "Si hubiera aceptado, habría ganado más dinero.", "Sin embargo, en el desierto encontré el cielo más limpio del mundo.", "Además, descubrí un cometa.", "Si no hubiera seguido aquí, ahora no tendría mi propio telescopio.", "Hugo, en cambio, se fue a Santiago y volvió al año.", "Por lo tanto, no me arrepiento de nada."],
      "Five years ago I turned down a job at a lab in Santiago. If I had accepted, I would have earned more money. However, in the desert I found the clearest sky in the world. Besides, I discovered a comet. If I hadn't stayed here, I wouldn't have my own telescope now. Hugo, on the other hand, went to Santiago and came back within a year. So I don't regret anything.",
      [
        ["¿Qué hizo Vera hace cinco años?", ["Rechazó un trabajo en un laboratorio de Santiago.", "Aceptó un trabajo en Santiago.", "Vendió su telescopio."], 0, "Hace cinco años rechacé un trabajo en un laboratorio de Santiago."],
        ["¿Qué habría pasado si Vera hubiera aceptado?", ["Habría descubierto un cometa.", "Habría ganado más dinero.", "Habría tenido su propio telescopio."], 1, "Si hubiera aceptado, habría ganado más dinero" + UNREAL],
        ["¿Qué hizo Hugo?", ["Se quedó en el desierto.", "Se fue a Santiago y volvió al año.", "Descubrió un cometa."], 1, "Hugo, en cambio, se fue a Santiago y volvió al año" + CAMBIO],
      ],
      "Write about a decision to do with science or nature." + P4,
      "Hace tres años me mudé cerca de la montaña. Si hubiera seguido en la ciudad, habría visto muy pocas estrellas. Sin embargo, aquí el cielo es increíble. Además, aprendí los nombres de muchos pájaros. Si no hubiera dejado la ciudad, ahora no tendría un jardín. Por lo tanto, no me arrepiento de nada.",
    ),
    tech: v(
      "The job Nico turned down",
      "rechacé (I turned down), empresa (company), programadores (programmers), renunció (quit), me arrepiento (I regret)",
      ["Hace cinco años rechacé un trabajo en una empresa grande.", "Si hubiera aceptado, habría ganado mucho dinero.", "Sin embargo, en casa creé mi propio videojuego.", "Además, conocí a los mejores programadores de Uruguay.", "Si no hubiera seguido solo, ahora no tendría mi propia empresa.", "Mía, en cambio, aceptó el trabajo y renunció al año.", "Por lo tanto, no me arrepiento de nada."],
      "Five years ago I turned down a job at a big company. If I had accepted, I would have earned a lot of money. However, at home I created my own video game. Besides, I met the best programmers in Uruguay. If I hadn't carried on alone, I wouldn't have my own company now. Mía, on the other hand, took the job and quit within a year. So I don't regret anything.",
      [
        ["¿Qué hizo Nico hace cinco años?", ["Rechazó un trabajo en una empresa grande.", "Aceptó un trabajo en una empresa grande.", "Vendió su videojuego."], 0, "Hace cinco años rechacé un trabajo en una empresa grande."],
        ["¿Qué habría pasado si Nico hubiera aceptado?", ["Habría creado un videojuego.", "Habría ganado mucho dinero.", "Habría tenido su propia empresa."], 1, "Si hubiera aceptado, habría ganado mucho dinero" + UNREAL],
        ["¿Qué hizo Mía?", ["Rechazó el trabajo.", "Aceptó el trabajo y renunció al año.", "Creó su propia empresa."], 1, "Mía, en cambio, aceptó el trabajo y renunció al año" + CAMBIO],
      ],
      "Write about a decision to do with technology, phones or games." + P4,
      "Hace tres años decidí aprender a programar. Si hubiera seguido en mi viejo trabajo, habría ganado menos. Sin embargo, ahora trabajo desde casa. Además, conocí a gente de todo el mundo. Si no hubiera tomado ese curso, ahora no tendría mi propia aplicación. Por lo tanto, no me arrepiento de nada.",
    ),
    health: v(
      "The job Clara turned down",
      "rechacé (I turned down), privado (private), pacientes (patients), me arrepiento (I regret)",
      ["Hace cinco años rechacé un trabajo en un hospital privado.", "Si hubiera aceptado, habría trabajado menos horas.", "Sin embargo, en mi barrio encontré pacientes maravillosos.", "Además, aprendí a escuchar a la gente.", "Si no hubiera seguido aquí, ahora no tendría tantos amigos.", "Iván, en cambio, se fue al hospital privado y volvió al año.", "Por lo tanto, no me arrepiento de nada."],
      "Five years ago I turned down a job at a private hospital. If I had accepted, I would have worked fewer hours. However, in my neighborhood I found wonderful patients. Besides, I learned to listen to people. If I hadn't stayed here, I wouldn't have so many friends now. Iván, on the other hand, went to the private hospital and came back within a year. So I don't regret anything.",
      [
        ["¿Qué hizo Clara hace cinco años?", ["Rechazó un trabajo en un hospital privado.", "Aceptó un trabajo en un hospital privado.", "Dejó de ser enfermera."], 0, "Hace cinco años rechacé un trabajo en un hospital privado."],
        ["¿Qué habría pasado si Clara hubiera aceptado?", ["Habría tenido más amigos.", "Habría trabajado menos horas.", "Habría aprendido a escuchar."], 1, "Si hubiera aceptado, habría trabajado menos horas" + UNREAL],
        ["¿Qué hizo Iván?", ["Se quedó en el barrio.", "Se fue al hospital privado y volvió al año.", "Abrió una clínica."], 1, "Iván, en cambio, se fue al hospital privado y volvió al año" + CAMBIO],
      ],
      "Write about a decision you made for your health." + P4,
      "Hace tres años dejé de fumar. Si hubiera seguido fumando, habría tenido problemas de salud. Sin embargo, ahora corro todas las mañanas. Además, duermo mucho mejor. Si no hubiera cambiado mis costumbres, ahora no tendría tanta energía. Mi amigo Iván, en cambio, todavía fuma. Por lo tanto, no me arrepiento de nada.",
    ),
    festivals: v(
      "The place Paula turned down",
      "rechacé (I turned down), ballet (ballet), tradiciones (traditions), me arrepiento (I regret)",
      ["Hace cinco años rechacé un lugar en un ballet famoso.", "Si hubiera aceptado, habría bailado en teatros grandes.", "Sin embargo, en Oaxaca encontré mis propias tradiciones.", "Además, conocí a los mejores músicos del pueblo.", "Si no hubiera seguido aquí, ahora no tendría mi grupo.", "Raúl, en cambio, se fue lejos y volvió al año.", "Por lo tanto, no me arrepiento de nada."],
      "Five years ago I turned down a place in a famous ballet. If I had accepted, I would have danced in big theaters. However, in Oaxaca I found my own traditions. Besides, I met the best musicians in the village. If I hadn't stayed here, I wouldn't have my group now. Raúl, on the other hand, went far away and came back within a year. So I don't regret anything.",
      [
        ["¿Qué hizo Paula hace cinco años?", ["Rechazó un lugar en un ballet famoso.", "Entró en un ballet famoso.", "Dejó de bailar."], 0, "Hace cinco años rechacé un lugar en un ballet famoso."],
        ["¿Qué habría pasado si Paula hubiera aceptado?", ["Habría conocido a los músicos del pueblo.", "Habría bailado en teatros grandes.", "Habría tenido su grupo."], 1, "Si hubiera aceptado, habría bailado en teatros grandes" + UNREAL],
        ["¿Qué hizo Raúl?", ["Se quedó en Oaxaca.", "Se fue lejos y volvió al año.", "Entró en el ballet."], 1, "Raúl, en cambio, se fue lejos y volvió al año" + CAMBIO],
      ],
      "Write about a decision to do with a party, a festival or a tradition." + P4,
      "Hace tres años decidí organizar la fiesta de mi barrio. Si hubiera dicho que no, habría tenido más tiempo libre. Sin embargo, conocí a todos mis vecinos. Además, aprendí a bailar. Si no hubiera aceptado, ahora no tendría tantos amigos. Por lo tanto, no me arrepiento de nada.",
    ),
    animals: v(
      "The job Julia turned down",
      "rechacé (I turned down), zoológico (zoo), leones (lions), clínica (clinic), me arrepiento (I regret)",
      ["Hace cinco años rechacé un trabajo en un zoológico.", "Si hubiera aceptado, habría trabajado con leones.", "Sin embargo, en el campo encontré una vida tranquila.", "Además, conocí a Coco y a Luna.", "Si no hubiera seguido aquí, ahora no tendría mi propia clínica.", "Simón, en cambio, se fue a la ciudad y volvió al año.", "Por lo tanto, no me arrepiento de nada."],
      "Five years ago I turned down a job at a zoo. If I had accepted, I would have worked with lions. However, in the country I found a quiet life. Besides, I met Coco and Luna. If I hadn't stayed here, I wouldn't have my own clinic now. Simón, on the other hand, went to the city and came back within a year. So I don't regret anything.",
      [
        ["¿Qué hizo Julia hace cinco años?", ["Rechazó un trabajo en un zoológico.", "Aceptó un trabajo en un zoológico.", "Vendió su clínica."], 0, "Hace cinco años rechacé un trabajo en un zoológico."],
        ["¿Qué habría pasado si Julia hubiera aceptado?", ["Habría conocido a Coco y a Luna.", "Habría trabajado con leones.", "Habría tenido su propia clínica."], 1, "Si hubiera aceptado, habría trabajado con leones" + UNREAL],
        ["¿Qué hizo Simón?", ["Se quedó en el campo.", "Se fue a la ciudad y volvió al año.", "Trabajó en el zoológico."], 1, "Simón, en cambio, se fue a la ciudad y volvió al año" + CAMBIO],
      ],
      "Write about a decision to do with an animal or a pet." + P4,
      "Hace tres años adopté un perro viejo. Si hubiera elegido un cachorro, habría tenido más trabajo. Sin embargo, mi perro es muy tranquilo. Además, me acompaña a todas partes. Si no hubiera ido al refugio ese día, ahora no tendría a mi mejor amigo. Por lo tanto, no me arrepiento de nada.",
    ),
  },
  "c1/5": {
    history: v(
      "Inés won't give up the archive",
      "archivo (archive), abandonarlo (abandon it), se quejen (complain), me equivoque (I'm wrong)",
      ["Aunque el archivo es muy viejo, lo visito todos los días.", "Aunque cueste mucho trabajo, no voy a abandonarlo.", "Por mucho que se quejen mis jefes, seguiré leyendo cada carta.", "Bruno dice que es una locura, pero digan lo que digan, voy a terminar mi libro.", "Pase lo que pase, guardaré los documentos de mi abuelo.", "Sea como sea, este año abriremos una sala nueva.", "Y aunque me equivoque, habré aprendido algo."],
      "Although the archive is very old, I visit it every day. Even if it takes a lot of work, I'm not going to abandon it. However much my bosses complain, I'll keep reading every letter. Bruno says it's madness, but whatever they say, I'm going to finish my book. Whatever happens, I'll keep my grandfather's documents. One way or another, this year we'll open a new room. And even if I'm wrong, I'll have learned something.",
      [
        ["¿Qué hace Inés aunque el archivo es muy viejo?", ["Lo visita todos los días.", "Lo cierra.", "Lo pinta cada año."], 0, "Aunque el archivo es muy viejo, lo visito todos los días" + FACT],
        ["¿Qué dice Bruno?", ["que es una buena idea", "que es una locura", "que hay que cerrar el archivo"], 1, "Bruno dice que es una locura."],
        ["¿Qué hará Inés pase lo que pase?", ["Venderá los documentos.", "Guardará los documentos de su abuelo.", "Dejará su libro."], 1, "Pase lo que pase, guardaré los documentos de mi abuelo" + WHATEVER],
      ],
      "Write about something to do with history or the past that you won't give up." + P5,
      "Aunque mi ciudad es pequeña, tiene mucha historia. Aunque cueste mucho tiempo, voy a leer todos los libros sobre ella. Por mucho que se rían mis amigos, seguiré visitando museos. Mi amigo Bruno dice que es aburrido, pero digan lo que digan, me encanta. Pase lo que pase, guardaré las fotos de mis abuelos. Y aunque me equivoque, habré aprendido algo.",
    ),
    science: v(
      "Vera won't give up the telescope",
      "se quejen (complain), colegas (colleagues), publicaremos (we'll publish), me equivoque (I'm wrong)",
      ["Aunque el telescopio es muy viejo, lo uso todas las noches.", "Aunque cueste mucho dinero, no voy a cambiarlo.", "Por mucho que se quejen mis colegas, seguiré buscando planetas nuevos.", "Hugo dice que es una locura, pero digan lo que digan, voy a seguir aquí.", "Pase lo que pase, terminaré mi mapa del cielo.", "Sea como sea, este año publicaremos los resultados.", "Y aunque me equivoque, habré aprendido algo."],
      "Although the telescope is very old, I use it every night. Even if it costs a lot of money, I'm not going to change it. However much my colleagues complain, I'll keep looking for new planets. Hugo says it's madness, but whatever they say, I'm going to stay here. Whatever happens, I'll finish my map of the sky. One way or another, this year we'll publish the results. And even if I'm wrong, I'll have learned something.",
      [
        ["¿Qué hace Vera aunque el telescopio es muy viejo?", ["Lo usa todas las noches.", "Lo vende.", "Lo guarda en casa."], 0, "Aunque el telescopio es muy viejo, lo uso todas las noches" + FACT],
        ["¿Qué dice Hugo?", ["que es una buena idea", "que es una locura", "que hay que comprar otro"], 1, "Hugo dice que es una locura."],
        ["¿Qué hará Vera pase lo que pase?", ["Cambiará el telescopio.", "Terminará su mapa del cielo.", "Se irá del observatorio."], 1, "Pase lo que pase, terminaré mi mapa del cielo" + WHATEVER],
      ],
      "Write about something to do with science or nature that you won't give up." + P5,
      "Aunque mi jardín es pequeño, lo cuido todos los días. Aunque llueva, no voy a dejar de salir a caminar. Por mucho que se quejen mis vecinos, seguiré plantando árboles. Mi amigo Hugo dice que es mucho trabajo, pero digan lo que digan, voy a tener abejas. Pase lo que pase, terminaré mi huerto. Y aunque me equivoque, habré aprendido algo.",
    ),
    tech: v(
      "Nico won't give up the game",
      "se quejen (complain), copia (copy), lanzaremos (we'll launch), me equivoque (I'm wrong)",
      ["Aunque mi computadora es muy vieja, la uso todos los días.", "Aunque cueste mucho dinero, no voy a comprar otra.", "Por mucho que se quejen mis amigos, seguiré programando de noche.", "Mía dice que es una locura, pero digan lo que digan, voy a terminar el juego.", "Pase lo que pase, guardaré una copia de todo.", "Sea como sea, este año lanzaremos la aplicación.", "Y aunque me equivoque, habré aprendido algo."],
      "Although my computer is very old, I use it every day. Even if it costs a lot of money, I'm not going to buy another one. However much my friends complain, I'll keep programming at night. Mía says it's madness, but whatever they say, I'm going to finish the game. Whatever happens, I'll keep a copy of everything. One way or another, this year we'll launch the app. And even if I'm wrong, I'll have learned something.",
      [
        ["¿Qué hace Nico aunque su computadora es muy vieja?", ["La usa todos los días.", "La vende.", "La regala."], 0, "Aunque mi computadora es muy vieja, la uso todos los días" + FACT],
        ["¿Qué dice Mía?", ["que es una buena idea", "que es una locura", "que hay que comprar otra"], 1, "Mía dice que es una locura."],
        ["¿Qué hará Nico pase lo que pase?", ["Comprará otra computadora.", "Guardará una copia de todo.", "Dejará el juego."], 1, "Pase lo que pase, guardaré una copia de todo" + WHATEVER],
      ],
      "Write about something to do with technology or games that you won't give up." + P5,
      "Aunque mi celular es viejo, funciona muy bien. Aunque salga un modelo nuevo, no voy a cambiarlo. Por mucho que se rían mis amigos, seguiré jugando a los videojuegos de antes. Mi amiga Mía dice que es una locura, pero digan lo que digan, voy a terminar mi propio juego. Pase lo que pase, guardaré una copia. Y aunque me equivoque, habré aprendido algo.",
    ),
    health: v(
      "Clara won't give up the marathon",
      "se quejen (complain), rodillas (knees), entrenando (training), maratón (marathon), meta (finish line), me equivoque (I'm wrong)",
      ["Aunque mi trabajo es muy duro, hago ejercicio todos los días.", "Aunque llueva mucho, no voy a dejar de correr.", "Por mucho que se quejen mis rodillas, seguiré entrenando.", "Iván dice que es una locura, pero digan lo que digan, voy a correr el maratón.", "Pase lo que pase, dormiré ocho horas cada noche.", "Sea como sea, este año llegaremos a la meta.", "Y aunque me equivoque, habré aprendido algo."],
      "Although my job is very hard, I exercise every day. Even if it rains a lot, I'm not going to stop running. However much my knees complain, I'll keep training. Iván says it's madness, but whatever they say, I'm going to run the marathon. Whatever happens, I'll sleep eight hours every night. One way or another, this year we'll reach the finish line. And even if I'm wrong, I'll have learned something.",
      [
        ["¿Qué hace Clara aunque su trabajo es muy duro?", ["Hace ejercicio todos los días.", "Duerme todo el día.", "Deja de correr."], 0, "Aunque mi trabajo es muy duro, hago ejercicio todos los días" + FACT],
        ["¿Qué dice Iván?", ["que es una buena idea", "que es una locura", "que hay que descansar"], 1, "Iván dice que es una locura."],
        ["¿Qué hará Clara pase lo que pase?", ["Dejará el maratón.", "Dormirá ocho horas cada noche.", "Cambiará de trabajo."], 1, "Pase lo que pase, dormiré ocho horas cada noche" + WHATEVER],
      ],
      "Write about a healthy habit you won't give up." + P5,
      "Aunque trabajo muchas horas, camino todos los días. Aunque llueva, no voy a dejar de salir. Por mucho que se quejen mis piernas, seguiré subiendo por las escaleras. Mi amigo Iván dice que es una locura, pero digan lo que digan, voy a correr diez kilómetros. Pase lo que pase, dormiré bien cada noche. Y aunque me equivoque, habré aprendido algo.",
    ),
    festivals: v(
      "Paula won't give up the dance",
      "traje (costume), se quejen (complain), ensayando (rehearsing), me equivoque (I'm wrong)",
      ["Aunque el traje es muy viejo, lo cuido todos los días.", "Aunque cueste mucho dinero, no voy a venderlo.", "Por mucho que se quejen los vecinos, seguiré ensayando.", "Raúl dice que es una locura, pero digan lo que digan, voy a bailar en la Guelaguetza.", "Pase lo que pase, mantendré los bailes de mi abuela.", "Sea como sea, este año haremos una fiesta enorme.", "Y aunque me equivoque, habré aprendido algo."],
      "Although the costume is very old, I look after it every day. Even if it costs a lot of money, I'm not going to sell it. However much the neighbors complain, I'll keep rehearsing. Raúl says it's madness, but whatever they say, I'm going to dance at the Guelaguetza. Whatever happens, I'll keep my grandmother's dances alive. One way or another, this year we'll have a huge party. And even if I'm wrong, I'll have learned something.",
      [
        ["¿Qué hace Paula aunque el traje es muy viejo?", ["Lo cuida todos los días.", "Lo vende.", "Lo regala."], 0, "Aunque el traje es muy viejo, lo cuido todos los días" + FACT],
        ["¿Qué dice Raúl?", ["que es una buena idea", "que es una locura", "que hay que comprar otro traje"], 1, "Raúl dice que es una locura."],
        ["¿Qué hará Paula pase lo que pase?", ["Venderá el traje.", "Mantendrá los bailes de su abuela.", "Dejará de bailar."], 1, "Pase lo que pase, mantendré los bailes de mi abuela" + WHATEVER],
      ],
      "Write about a party or tradition you won't give up." + P5,
      "Aunque mi familia es pequeña, celebramos todos los cumpleaños. Aunque llueva, no voy a cancelar la fiesta. Por mucho que se quejen los vecinos, seguiré poniendo música. Mi amigo Raúl dice que es mucho trabajo, pero digan lo que digan, voy a cocinar para todos. Pase lo que pase, mantendré las tradiciones de mi abuela. Y aunque me equivoque, habré aprendido algo.",
    ),
    animals: v(
      "Julia won't give up on Coco",
      "se quejen (complain), adoptando (adopting), refugio (shelter), salvaremos (we'll save), me equivoque (I'm wrong)",
      ["Aunque Coco es muy viejo, lo paseo todos los días.", "Aunque cueste mucho dinero, no voy a dejar de cuidarlo.", "Por mucho que se quejen los vecinos, seguiré adoptando gatos.", "Simón dice que es una locura, pero digan lo que digan, voy a abrir un refugio.", "Pase lo que pase, mantendré la clínica de mi pueblo.", "Sea como sea, este año salvaremos a cien animales.", "Y aunque me equivoque, habré aprendido algo."],
      "Although Coco is very old, I walk him every day. Even if it costs a lot of money, I'm not going to stop looking after him. However much the neighbors complain, I'll keep adopting cats. Simón says it's madness, but whatever they say, I'm going to open a shelter. Whatever happens, I'll keep my village's clinic going. One way or another, this year we'll save a hundred animals. And even if I'm wrong, I'll have learned something.",
      [
        ["¿Qué hace Julia aunque Coco es muy viejo?", ["Lo pasea todos los días.", "Lo deja en casa.", "Lo regala."], 0, "Aunque Coco es muy viejo, lo paseo todos los días" + FACT],
        ["¿Qué dice Simón?", ["que es una buena idea", "que es una locura", "que hay que vender la clínica"], 1, "Simón dice que es una locura."],
        ["¿Qué hará Julia pase lo que pase?", ["Cerrará la clínica.", "Mantendrá la clínica de su pueblo.", "Se mudará a la ciudad."], 1, "Pase lo que pase, mantendré la clínica de mi pueblo" + WHATEVER],
      ],
      "Write about an animal or a pet you won't give up on." + P5,
      "Aunque mi perro es muy viejo, lo paseo todos los días. Aunque llueva, no voy a dejarlo en casa. Por mucho que se quejen los vecinos, seguiré dando comida a los gatos de la calle. Mi amigo Simón dice que es una locura, pero digan lo que digan, voy a adoptar otro perro. Pase lo que pase, lo cuidaré siempre. Y aunque me equivoque, habré aprendido algo.",
    ),
  },
  "c1/6": {
    history: v(
      "An interview at the temple",
      "templo (temple), incas (Incas), restaurada (restored), periodista (journalist), piedras (stones)",
      ["Este templo fue construido por los incas hace quinientos años.", "Hoy la sala principal está abierta, porque fue restaurada el año pasado.", "Un periodista me preguntó si las piedras eran originales.", "También me preguntó cuándo abriríamos el museo nuevo.", "Mi jefa me pidió que contara la historia del templo.", "A Bruno le pidió que mostrara los mapas.", "La entrevista será publicada el domingo."],
      "This temple was built by the Incas five hundred years ago. Today the main room is open, because it was restored last year. A journalist asked me if the stones were original. He also asked me when we would open the new museum. My boss asked me to tell the story of the temple. She asked Bruno to show the maps. The interview will be published on Sunday.",
      [
        ["¿Quién construyó este templo?", ["los incas", "Bruno", "la jefa de Inés"], 0, "Fue construido por los incas" + POR],
        ["¿Qué le preguntó el periodista a Inés?", ["si iba a cerrar el templo", "si las piedras eran originales", "si Bruno era su jefe"], 1, "Me preguntó si las piedras eran originales" + ASKSI],
        ["¿Qué le pidió la jefa a Inés?", ["que mostrara los mapas", "que contara la historia del templo", "que restaurara la sala"], 1, "Me pidió que contara la historia del templo" + ORDER],
      ],
      "Write about an old building or monument you know and its story." + P6,
      "La iglesia de mi pueblo fue construida por los primeros vecinos en 1850. Hoy está renovada. Un turista me preguntó si las ventanas eran originales. También me preguntó cuándo abría el museo. Mi amigo Bruno me pidió que le contara la historia del pueblo. A mi hermana le pidió que sacara fotos. El artículo será publicado en el periódico.",
    ),
    science: v(
      "An interview at the observatory",
      "observatorio (observatory), equipo (team), reparado (repaired), periodista (journalist), explicara (explain)",
      ["Este observatorio fue construido por un equipo chileno en 1990.", "Hoy el telescopio está listo, porque fue reparado ayer.", "Una periodista me preguntó si las fotos eran reales.", "También me preguntó cuándo veríamos el próximo eclipse.", "Mi jefa me pidió que explicara cómo nacen las estrellas.", "A Hugo le pidió que mostrara el laboratorio.", "La entrevista será publicada el domingo."],
      "This observatory was built by a Chilean team in 1990. Today the telescope is ready, because it was repaired yesterday. A journalist asked me if the photos were real. She also asked me when we would see the next eclipse. My boss asked me to explain how stars are born. She asked Hugo to show the lab. The interview will be published on Sunday.",
      [
        ["¿Quién construyó este observatorio?", ["un equipo chileno", "Hugo", "la jefa de Vera"], 0, "Fue construido por un equipo chileno" + POR],
        ["¿Qué le preguntó la periodista a Vera?", ["si iba a vender el telescopio", "si las fotos eran reales", "si Hugo era su jefe"], 1, "Me preguntó si las fotos eran reales" + ASKSI],
        ["¿Qué le pidió la jefa a Vera?", ["que mostrara el laboratorio", "que explicara cómo nacen las estrellas", "que reparara el telescopio"], 1, "Me pidió que explicara cómo nacen las estrellas" + ORDER],
      ],
      "Write about a park, a garden or a science place you know and its story." + P6,
      "El jardín botánico de mi ciudad fue creado por una profesora en 1960. Hoy está renovado. Un turista me preguntó si las plantas eran de la región. También me preguntó cuándo abría el jardín. Mi amigo Hugo me pidió que le mostrara los árboles más viejos. A mi hermana le pidió que sacara fotos. El artículo será publicado pronto.",
    ),
    tech: v(
      "An interview about the game",
      "equipo (team), actualizada (updated), periodista (journalist), lanzaríamos (we would launch), personajes (characters)",
      ["Este videojuego fue creado por un equipo uruguayo en 2020.", "Hoy la página está renovada, porque fue actualizada ayer.", "Un periodista me preguntó si los dibujos eran originales.", "También me preguntó cuándo lanzaríamos la segunda parte.", "Mi jefa me pidió que contara la historia del proyecto.", "A Mía le pidió que mostrara los personajes.", "La entrevista será publicada el domingo."],
      "This video game was created by a Uruguayan team in 2020. Today the page is renewed, because it was updated yesterday. A journalist asked me if the drawings were original. He also asked me when we would launch the second part. My boss asked me to tell the story of the project. She asked Mía to show the characters. The interview will be published on Sunday.",
      [
        ["¿Quién creó este videojuego?", ["un equipo uruguayo", "un periodista", "la jefa de Nico"], 0, "Fue creado por un equipo uruguayo" + POR],
        ["¿Qué le preguntó el periodista a Nico?", ["si iba a vender el juego", "si los dibujos eran originales", "si Mía era su jefa"], 1, "Me preguntó si los dibujos eran originales" + ASKSI],
        ["¿Qué le pidió la jefa a Nico?", ["que mostrara los personajes", "que contara la historia del proyecto", "que actualizara la página"], 1, "Me pidió que contara la historia del proyecto" + ORDER],
      ],
      "Write about an app, a game or a website you like and its story." + P6,
      "Mi aplicación favorita fue creada por dos estudiantes en 2015. Hoy está renovada. Un amigo me preguntó si era gratis. También me preguntó cuál era mi juego favorito. Mi amiga Mía me pidió que le enseñara a usarla. A mi hermano le pidió que le prestara la consola. La nueva versión será publicada el lunes.",
    ),
    health: v(
      "An interview at the clinic",
      "clínica (clinic), fundada (founded), sala de espera (waiting room), periodista (journalist), consultas (appointments)",
      ["Esta clínica fue fundada por mi abuela en 1960.", "Hoy la sala de espera está renovada, porque fue pintada ayer.", "Un periodista me preguntó si las consultas eran gratis.", "También me preguntó cuándo abriríamos por la noche.", "Mi jefe me pidió que contara la historia de la clínica.", "A Iván le pidió que mostrara las salas.", "La entrevista será publicada el domingo."],
      "This clinic was founded by my grandmother in 1960. Today the waiting room is renewed, because it was painted yesterday. A journalist asked me if the appointments were free. He also asked me when we would open at night. My boss asked me to tell the story of the clinic. He asked Iván to show the rooms. The interview will be published on Sunday.",
      [
        ["¿Quién fundó esta clínica?", ["la abuela de Clara", "Iván", "el jefe de Clara"], 0, "Fue fundada por mi abuela" + POR],
        ["¿Qué le preguntó el periodista a Clara?", ["si iba a cerrar la clínica", "si las consultas eran gratis", "si Iván era su jefe"], 1, "Me preguntó si las consultas eran gratis" + ASKSI],
        ["¿Qué le pidió el jefe a Clara?", ["que mostrara las salas", "que contara la historia de la clínica", "que pintara la sala de espera"], 1, "Me pidió que contara la historia de la clínica" + ORDER],
      ],
      "Write about a gym, a clinic or a park where people look after their health, and its story." + P6,
      "El gimnasio de mi barrio fue abierto por dos hermanos en 2005. Hoy está renovado. Una vecina me preguntó si las clases eran caras. También me preguntó cuándo empezaba la clase de yoga. Mi amigo Iván me pidió que lo acompañara a correr. A mi hermana le pidió que le prestara su bicicleta. El nuevo horario será publicado mañana.",
    ),
    festivals: v(
      "An interview at the festival",
      "bisabuelos (great-grandparents), decorada (decorated), periodista (journalist), trajes (costumes), desfile (parade)",
      ["Esta fiesta fue creada por mis bisabuelos en 1930.", "Hoy la plaza está decorada, porque fue pintada ayer.", "Una periodista me preguntó si los trajes eran originales.", "También me preguntó cuándo empezaría el desfile.", "Mi mamá me pidió que contara la historia de la fiesta.", "A Raúl le pidió que tocara una canción.", "La entrevista será publicada el domingo."],
      "This festival was created by my great-grandparents in 1930. Today the square is decorated, because it was painted yesterday. A journalist asked me if the costumes were original. She also asked me when the parade would start. My mom asked me to tell the story of the festival. She asked Raúl to play a song. The interview will be published on Sunday.",
      [
        ["¿Quién creó esta fiesta?", ["los bisabuelos de Paula", "Raúl", "la mamá de Paula"], 0, "Fue creada por mis bisabuelos" + POR],
        ["¿Qué le preguntó la periodista a Paula?", ["si iba a cancelar la fiesta", "si los trajes eran originales", "si Raúl era su hermano"], 1, "Me preguntó si los trajes eran originales" + ASKSI],
        ["¿Qué le pidió su mamá a Paula?", ["que tocara una canción", "que contara la historia de la fiesta", "que pintara la plaza"], 1, "Me pidió que contara la historia de la fiesta" + ORDER],
      ],
      "Write about a party, a festival or a tradition you know and its story." + P6,
      "La fiesta de mi barrio fue creada por los vecinos en 1980. Hoy la calle está decorada. Un turista me preguntó si la comida era típica. También me preguntó cuándo empezaba la música. Mi amigo Raúl me pidió que bailara con él. A mi hermana le pidió que cantara una canción. Las fotos serán publicadas en el periódico del barrio.",
    ),
    animals: v(
      "An interview at the shelter",
      "refugio (shelter), fundado (founded), clínica (clinic), periodista (journalist), caballos (horses)",
      ["Este refugio fue fundado por mi tía en 1995.", "Hoy la clínica está renovada, porque fue pintada ayer.", "Un periodista me preguntó si los perros eran de la calle.", "También me preguntó cuándo abriríamos la sala nueva.", "Mi tía me pidió que contara la historia de Coco.", "A Simón le pidió que mostrara los caballos.", "La entrevista será publicada el domingo."],
      "This shelter was founded by my aunt in 1995. Today the clinic is renewed, because it was painted yesterday. A journalist asked me if the dogs were from the street. He also asked me when we would open the new room. My aunt asked me to tell Coco's story. She asked Simón to show the horses. The interview will be published on Sunday.",
      [
        ["¿Quién fundó este refugio?", ["la tía de Julia", "Simón", "un periodista"], 0, "Fue fundado por mi tía" + POR],
        ["¿Qué le preguntó el periodista a Julia?", ["si iba a cerrar el refugio", "si los perros eran de la calle", "si Simón era su tío"], 1, "Me preguntó si los perros eran de la calle" + ASKSI],
        ["¿Qué le pidió su tía a Julia?", ["que mostrara los caballos", "que contara la historia de Coco", "que pintara la clínica"], 1, "Me pidió que contara la historia de Coco" + ORDER],
      ],
      "Write about a shelter, a farm or a park with animals that you know, and its story." + P6,
      "El refugio de mi ciudad fue fundado por una doctora en 2001. Hoy está renovado. Una niña me preguntó si los gatos eran tranquilos. También me preguntó cuál era mi perro favorito. Mi amigo Simón me pidió que paseara a los perros. A mi hermana le pidió que les diera agua. Las fotos de los animales serán publicadas el lunes.",
    ),
  },
  "c1/7": {
    history: v(
      "Around the museum",
      "edificio (building), fecha (date), turistas (tourists)",
      ["En Cusco hay muchos museos, pero el nuestro está al lado de la plaza.", "Bruno es muy listo, pero hoy no está listo para la visita de mañana.", "El video de la entrada es aburrido, y por eso los niños están aburridos.", "El chocolate es bueno para la memoria, y el de hoy está muy bueno.", "Este edificio es seguro, pero no estoy segura de la fecha de este mapa.", "Hay ocho turistas en la sala; Bruno está con ellos.", "Soy una persona tranquila, pero hoy estoy cansada."],
      "In Cusco there are lots of museums, but ours is next to the square. Bruno is very smart, but today he isn't ready for tomorrow's visit. The video at the entrance is boring, and that's why the children are bored. Chocolate is good for the memory, and today's is very tasty. This building is safe, but I'm not sure of the date of this map. There are eight tourists in the room; Bruno is with them. I'm a calm person, but today I'm tired.",
      [
        ["¿Dónde está el museo de Inés?", ["al lado de la plaza", "lejos del centro", "en otra ciudad"], 0, "El nuestro está al lado de la plaza" + WHERE],
        ["¿Para qué no está listo Bruno?", ["para almorzar", "para la visita de mañana", "para viajar"], 1, "No está listo para la visita de mañana" + LISTO],
        ["¿De qué no está segura Inés?", ["del chocolate", "de la fecha de este mapa", "de los turistas"], 1, "No estoy segura de la fecha de este mapa" + SEGURO],
      ],
      "Describe a museum or an old part of your town." + P7,
      "En mi ciudad hay tres museos, pero mi favorito está cerca del río. Mi amigo Bruno es muy listo, pero hoy no está listo para el examen de historia. El libro es aburrido, y por eso estoy aburrido. El café del museo está muy bueno. El barrio viejo es seguro, pero no estoy seguro del horario.",
    ),
    science: v(
      "Around the observatory",
      "desierto (desert), observatorios (observatories), charla (talk), documental (documentary), experimento (experiment)",
      ["En el desierto hay muchos observatorios, pero el nuestro está en la montaña más alta.", "Hugo es muy listo, pero hoy no está listo para la charla de mañana.", "El documental de esta noche es aburrido, y por eso los estudiantes están aburridos.", "La fruta es buena para la salud, y la de hoy está muy buena.", "Este laboratorio es seguro, pero no estoy segura del resultado del experimento.", "Hay ocho estudiantes en el laboratorio; Hugo está con ellos.", "Soy una persona tranquila, pero hoy estoy cansada."],
      "In the desert there are lots of observatories, but ours is on the highest mountain. Hugo is very smart, but today he isn't ready for tomorrow's talk. Tonight's documentary is boring, and that's why the students are bored. Fruit is good for your health, and today's is very tasty. This lab is safe, but I'm not sure of the result of the experiment. There are eight students in the lab; Hugo is with them. I'm a calm person, but today I'm tired.",
      [
        ["¿Dónde está el observatorio de Vera?", ["en la montaña más alta", "en la ciudad", "al lado del mar"], 0, "El nuestro está en la montaña más alta" + WHERE],
        ["¿Para qué no está listo Hugo?", ["para almorzar", "para la charla de mañana", "para viajar"], 1, "No está listo para la charla de mañana" + LISTO],
        ["¿De qué no está segura Vera?", ["de la fruta", "del resultado del experimento", "de los estudiantes"], 1, "No estoy segura del resultado del experimento" + SEGURO],
      ],
      "Describe a park, a lab or a place in nature near you." + P7,
      "Cerca de mi casa hay muchos parques, pero mi favorito está al lado del río. Mi amigo Hugo es muy listo, pero hoy no está listo para el examen de ciencias. El documental es aburrido, y por eso estoy aburrido. La fruta de hoy está muy buena. El parque es seguro, pero no estoy seguro del nombre de este árbol.",
    ),
    tech: v(
      "Around the office",
      "empresas (companies), reunión (meeting), tutorial (tutorial), jugadores (players), lanzamiento (launch), programadores (programmers)",
      ["En mi ciudad hay muchas empresas, pero la nuestra está en el centro.", "Mía es muy lista, pero hoy no está lista para la reunión de mañana.", "El tutorial del juego es aburrido, y por eso los jugadores están aburridos.", "La pizza no es buena para la salud, pero la de hoy está muy buena.", "Esta página es segura, pero no estoy seguro de la fecha del lanzamiento.", "Hay ocho programadores en la oficina; Mía está con ellos.", "Soy una persona tranquila, pero hoy estoy cansado."],
      "In my city there are lots of companies, but ours is downtown. Mía is very smart, but today she isn't ready for tomorrow's meeting. The game's tutorial is boring, and that's why the players are bored. Pizza isn't good for your health, but today's is very tasty. This page is safe, but I'm not sure of the launch date. There are eight programmers in the office; Mía is with them. I'm a calm person, but today I'm tired.",
      [
        ["¿Dónde está la empresa de Nico?", ["en el centro", "lejos de la ciudad", "en otra ciudad"], 0, "La nuestra está en el centro" + WHERE],
        ["¿Para qué no está lista Mía?", ["para almorzar", "para la reunión de mañana", "para jugar"], 1, "No está lista para la reunión de mañana" + LISTO],
        ["¿De qué no está seguro Nico?", ["de la pizza", "de la fecha del lanzamiento", "de los programadores"], 1, "No estoy seguro de la fecha del lanzamiento" + SEGURO],
      ],
      "Describe the place where you use your computer, phone or games." + P7,
      "En mi cuarto hay dos pantallas, pero mi computadora está al lado de la ventana. Mi amiga Mía es muy lista, pero hoy no está lista para el torneo. Este juego es aburrido, y por eso estoy aburrido. La pizza de hoy está muy buena. Esta aplicación es segura, pero no estoy seguro de mi contraseña.",
    ),
    health: v(
      "Around the clinic",
      "clínicas (clinics), maratón (marathon), charla (talk), vitaminas (vitamins), pacientes (patients), tratamiento (treatment), cita (appointment), sala de espera (waiting room)",
      ["En mi barrio hay muchas clínicas, pero la nuestra está al lado del parque.", "Iván es muy listo, pero hoy no está listo para el maratón de mañana.", "La charla sobre las vitaminas es aburrida, y por eso los pacientes están aburridos.", "La sopa es buena para la salud, y la de hoy está muy buena.", "Este tratamiento es seguro, pero no estoy segura de la hora de la cita.", "Hay ocho pacientes en la sala de espera; Iván está con ellos.", "Soy una persona tranquila, pero hoy estoy cansada."],
      "In my neighborhood there are lots of clinics, but ours is next to the park. Iván is very smart, but today he isn't ready for tomorrow's marathon. The talk about vitamins is boring, and that's why the patients are bored. Soup is good for your health, and today's is very tasty. This treatment is safe, but I'm not sure of the time of the appointment. There are eight patients in the waiting room; Iván is with them. I'm a calm person, but today I'm tired.",
      [
        ["¿Dónde está la clínica de Clara?", ["al lado del parque", "en el centro", "lejos del barrio"], 0, "La nuestra está al lado del parque" + WHERE],
        ["¿Para qué no está listo Iván?", ["para cocinar", "para el maratón de mañana", "para trabajar"], 1, "No está listo para el maratón de mañana" + LISTO],
        ["¿De qué no está segura Clara?", ["de la sopa", "de la hora de la cita", "de los pacientes"], 1, "No estoy segura de la hora de la cita" + SEGURO],
      ],
      "Describe the place where you exercise or look after your health." + P7,
      "En mi barrio hay dos gimnasios, pero el mío está al lado del parque. Mi amigo Iván es muy listo, pero hoy no está listo para la carrera. La clase de hoy es aburrida, y por eso estoy aburrido. La ensalada de hoy está muy buena. Este parque es seguro, pero no estoy seguro de la hora de la clase.",
    ),
    festivals: v(
      "Around the festival",
      "escenarios (stages), concierto (concert), discurso (speech), alcalde (mayor), mole (a rich Mexican sauce), alma (soul), desfile (parade)",
      ["En Oaxaca hay muchos escenarios, pero el nuestro está al lado de la iglesia.", "Raúl es muy listo, pero hoy no está listo para el concierto de mañana.", "El discurso del alcalde es muy aburrido, y por eso los niños están aburridos.", "El mole es bueno para el alma, y el de hoy está muy bueno.", "Este escenario es seguro, pero no estoy segura de la hora del desfile.", "Hay ocho músicos detrás del escenario; Raúl está con ellos.", "Soy una persona tranquila, pero hoy estoy nerviosa."],
      "In Oaxaca there are lots of stages, but ours is next to the church. Raúl is very smart, but today he isn't ready for tomorrow's concert. The mayor's speech is very boring, and that's why the children are bored. Mole is good for the soul, and today's is very tasty. This stage is safe, but I'm not sure of the time of the parade. There are eight musicians behind the stage; Raúl is with them. I'm a calm person, but today I'm nervous.",
      [
        ["¿Dónde está el escenario de Paula?", ["al lado de la iglesia", "lejos de Oaxaca", "en otra ciudad"], 0, "El nuestro está al lado de la iglesia" + WHERE],
        ["¿Para qué no está listo Raúl?", ["para cocinar", "para el concierto de mañana", "para viajar"], 1, "No está listo para el concierto de mañana" + LISTO],
        ["¿De qué no está segura Paula?", ["del mole", "de la hora del desfile", "de los músicos"], 1, "No estoy segura de la hora del desfile" + SEGURO],
      ],
      "Describe a party or a festival in your town." + P7,
      "En mi pueblo hay muchas fiestas, pero mi casa está al lado de la plaza. Mi amigo Raúl es muy listo, pero hoy no está listo para el concierto. El discurso es aburrido, y por eso estoy aburrido. La comida de hoy está muy buena. La plaza es segura, pero no estoy seguro de la hora del desfile.",
    ),
    animals: v(
      "Around the farm",
      "granjas (farms), jaula (cage), zanahoria (carrot), caballos (horses), corral (pen), peso (weight)",
      ["En mi pueblo hay muchas granjas, pero la nuestra está al lado del río.", "Simón es muy listo, pero hoy no está listo para la visita de mañana.", "La vida en la jaula es aburrida, y por eso los pájaros están aburridos.", "La zanahoria es buena para los caballos, y la de hoy está muy buena.", "Este corral es seguro, pero no estoy segura del peso del caballo nuevo.", "Hay ocho perros en el jardín; Coco está con ellos.", "Soy una persona tranquila, pero hoy estoy cansada."],
      "In my village there are lots of farms, but ours is next to the river. Simón is very smart, but today he isn't ready for tomorrow's visit. Life in the cage is boring, and that's why the birds are bored. Carrots are good for horses, and today's is very tasty. This pen is safe, but I'm not sure of the new horse's weight. There are eight dogs in the garden; Coco is with them. I'm a calm person, but today I'm tired.",
      [
        ["¿Dónde está la granja de Julia?", ["al lado del río", "en el centro", "lejos del pueblo"], 0, "La nuestra está al lado del río" + WHERE],
        ["¿Para qué no está listo Simón?", ["para cocinar", "para la visita de mañana", "para viajar"], 1, "No está listo para la visita de mañana" + LISTO],
        ["¿De qué no está segura Julia?", ["de la zanahoria", "del peso del caballo nuevo", "de los perros"], 1, "No estoy segura del peso del caballo nuevo" + SEGURO],
      ],
      "Describe a place with animals near you: a park, a farm, your home with a pet." + P7,
      "En mi barrio hay muchos perros, pero el mío está siempre en el jardín. Mi amigo Simón es muy listo, pero hoy no está listo para el paseo. La tarde sin juegos es aburrida, y por eso mi perro está aburrido. La comida de hoy está muy buena. Este parque es seguro, pero no estoy seguro del nombre de ese pájaro.",
    ),
  },
};
